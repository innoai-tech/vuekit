import { serializeStyles } from "@emotion/serialize";
import type { EmotionCache } from "@emotion/utils";
import {
  camelCase,
  isNumber,
  isObject,
  isString,
  isUndefined,
  kebabCase,
  mapValues,
  set,
} from "es-toolkit/compat";
import { CSSProcessor } from "./CSSProcessor";
import { type CSSAllProps, type FullCSSObject } from "./csstype";
import {
  DesignToken,
  type DesignTokenOptionAny,
  DesignTokenType,
  type DesignTokens,
  type FigmaToken,
  type FigmaTokenValues,
  Mixin,
  TokenSet,
  isVariant,
  setTo,
  groupSysColors,
} from "./token";

export interface ThemingOptions {
  mode: "light" | "dark";
  varPrefix: string;
}

export interface TokenGetter<Token extends string, Value> {
  (token: Token): Value;

  tokens: string[];
}

const toMap = (list: string[]): { [K: string]: true } =>
  list.reduce((ret, v) => {
    return Object.assign(ret, {
      [v]: true,
    });
  }, {}) as any;

export class Theming<T extends Record<string, DesignTokenOptionAny>> {
  private static propsCanPercent = toMap([...DesignToken.boxSize({}).on]);

  private static propsCanBaseDp = toMap([
    ...DesignToken.boxSize({}).on,
    ...DesignToken.space({}).on,
    ...DesignToken.fontSize({}).on,
    ...DesignToken.letterSpacing({}).on,
    ...DesignToken.lineHeight({}).on,
    ...DesignToken.rounded({}).on,
  ]);

  static create<T extends Record<string, DesignTokenOptionAny>>(
    theme: T,
    options: Partial<ThemingOptions>,
  ) {
    return new Theming<T>(theme, options);
  }

  private readonly mode: string;
  private readonly varPrefix: string;
  private readonly cssVars: { [K: string]: any } = {};
  private readonly tokens: { [K in keyof T]: TokenSet<T[K]> } = {} as any;
  private readonly propValues: { [K in string]: TokenSet<any> } = {};
  private readonly mixins: { [K: string]: Mixin } = {} as any;

  dp = (v: number) => (v === 0 ? 0 : `calc(${v} * var(${this.cssVar("space", "dp")}))`);

  private transformFallback = (p: string, v: any) => {
    if (Theming.propsCanBaseDp[p] && isNumber(v)) {
      if (Theming.propsCanPercent[p] && Math.abs(v) < 1) {
        return `${v * 100}%`;
      }
      return this.dp(v);
    }
    return v;
  };

  constructor(
    public readonly theme: T,
    options: Partial<ThemingOptions> = {},
  ) {
    this.varPrefix = options.varPrefix ?? "vk";
    this.mode = options.mode ?? "light";

    set(this.cssVars, [this.cssVar("space", "dp")], "0.1rem");

    for (const scale in theme) {
      const dt = theme[scale];

      if (!dt) {
        continue;
      }

      if (dt.type === DesignTokenType.var) {
        const dtv = new TokenSet(dt, {
          cssVar: (token: string) => this.cssVar(scale, token),
          transformFallback: (v) => this.transformFallback(dt.on[0], v),
        });

        this.tokens[scale] = dtv;
        for (const prop of dt.on) {
          this.propValues[prop] = dtv;
        }

        for (const token of dtv.tokens) {
          for (const mode of ["light", "dark"] as const) {
            const modePseudo = mode === this.mode ? "_default" : `_${mode}`;

            const v = dtv.get(token, modePseudo, true);
            if (!isUndefined(v)) {
              if (modePseudo === "_default") {
                set(this.cssVars, [this.cssVar(scale, token)], v);
              } else {
                set(this.cssVars, [modePseudo, this.cssVar(scale, token)], v);
              }
            }
          }
        }

        continue;
      }

      if (dt.type === DesignTokenType.mixin) {
        const m = new Mixin(dt);
        for (const prop of dt.on) {
          this.mixins[prop] = m;
        }
      }
    }
  }

  private cssVar(scale: string, key: string) {
    return `--${this.varPrefix}-${kebabCase(scale)}__${key
      .replaceAll("/", "--")
      .replaceAll(".", "__")}`;
  }

  get rootCSSVars(): DesignTokens<T> & CSSAllProps {
    return this.cssVars as any;
  }

  token: {
    [K in keyof T]: TokenGetter<TokenSet<T[K]>["__Tokens"], T[K]["__ValueType"]>;
  } = new Proxy(
    {},
    {
      get: (_, prop) => {
        if (this.tokens[prop as any]) {
          return Object.assign(
            (token: string) => this.tokens[prop as any]?.get(token, `_${this.mode}`),
            {
              tokens: this.tokens[prop as any]?.tokens,
            },
          );
        }
        if (this.mixins[prop as any]) {
          return Object.assign((token: string) => this.mixins[prop as any]?.get(token), {
            tokens: this.mixins[prop as any]?.tokens,
          });
        }
        return;
      },
    },
  ) as any;

  private processValue = (p: string, v: any) => {
    if (isVariant(v)) {
      const cssVar = this.propValues[p]?.use(v.token, true);
      return cssVar ? v(cssVar) : undefined;
    }
    return this.propValues[p]?.use(v) ?? this.transformFallback(p, v);
  };

  unstable_sx = (sx: FullCSSObject<DesignTokens<T> & CSSAllProps>): Array<Record<string, any>> => {
    return new CSSProcessor({
      mixins: this.mixins,
      varPrefix: this.varPrefix,
      processValue: this.processValue,
    }).processAll(sx);
  };

  unstable_css(cache: EmotionCache, sx: FullCSSObject<DesignTokens<T> & CSSAllProps>) {
    const inputs = (sx ?? {}) as any;

    // mutate for cache
    inputs.__emotion_styles =
      inputs.__emotion_styles ?? serializeStyles(this.unstable_sx(sx), cache?.registered, {});

    return inputs.__emotion_styles;
  }

  toFigmaTokens() {
    const seedTokens: FigmaTokenValues = {
      space: {
        dp: {
          $type: "sizing",
          $value: 1,
        },
      },
    };

    const baseTokens: FigmaTokenValues = {};
    const darkTokens: FigmaTokenValues = {};

    const toFigmaToken = (type: string, value: any): FigmaToken => {
      if (isObject(value)) {
        return {
          $type: type,
          $value: mapValues(value, (v) => {
            return toFigmaToken(type, v).$value;
          }),
        };
      }

      if (isString(value)) {
        return {
          $type: type,
          $value: value
            .replace(/var\(([^)]+)\)/g, (v) => {
              // var(--vk-space-dp)
              const k = v.slice("var(".length, v.length - 1);
              const parts = k.slice(`--${this.varPrefix}-`.length).split("--");

              const keyPath =
                parts[0]
                  ?.split("__")
                  .map((p, i) => (i === 0 ? camelCase(p) : p))
                  .join(".") ?? "";

              if (!keyPath.startsWith("sys.")) {
                return `{seed.${keyPath}}`;
              }

              return `{${keyPath}}`;
            })
            .replace(/calc\(.+\)$/g, (v) => v.slice("calc(".length, v.length - 1)),
        };
      }

      return {
        $type: type,
        $value: value,
      };
    };

    for (const topic in this.tokens) {
      const ts = this.tokens[topic];

      const collect = (type: string) => {
        for (const t of ts.tokens) {
          if (t.includes("/")) {
            continue;
          }

          if (t.startsWith("sys.")) {
            const defaultValue = ts.get(t, "_default");
            const darkValue = ts.get(t, "_dark");

            setTo(baseTokens, [topic, ...t.split(".")], toFigmaToken(type, defaultValue));
            if (defaultValue !== darkValue) {
              setTo(darkTokens, [topic, ...t.split(".")], toFigmaToken(type, darkValue));
            }
          } else {
            setTo(seedTokens, [topic, ...t.split(".")], toFigmaToken(type, ts.get(t, "_default")));
          }
        }
      };

      switch (topic) {
        case "color":
          collect("color");
          break;
        case "rounded":
          collect("borderRadius");
          break;
        case "shadow":
          collect("boxShadow");
          break;
        case "font":
          collect("fontFamily");
          break;
        case "fontWeight":
          collect("fontWeight");
          break;
      }
    }

    for (const topic in this.mixins) {
      const mixin = this.mixins[topic];

      if (!mixin) {
        continue;
      }

      const collect = (type: string) => {
        for (const t of mixin.tokens) {
          const v = mixin.get(t);

          if (!v) {
            continue;
          }

          const value = this.unstable_sx(v)[0];

          setTo(baseTokens, [topic, ...t.split(".")], toFigmaToken(type, value));
        }
      };

      switch (topic) {
        case "textStyle":
          collect("typography");
          break;
      }
    }

    return {
      seed: seedTokens,
      base: groupSysColors(baseTokens),
      dark: groupSysColors(darkTokens),
    };
  }
}
