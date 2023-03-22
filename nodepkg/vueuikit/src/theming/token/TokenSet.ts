import { has, isObject, keys, set } from "@innoai-tech/lodash";
import type { DesignTokenOptionAny } from "./DesignToken";
import { isMap } from "./util";

export class TokenSet<T extends DesignTokenOptionAny, V = T["__ValueType"]> {
  static defaultMode = "_default";

  static walkValues = (
    o: any,
    cb: (v: any, path: any[]) => void,
    parent: any[] = []
  ) => {
    for (const k in o) {
      const v = o[k]! as any;
      if (isMap(v)) {
        if (has(v, "_default")) {
          cb(v, [...parent, k]);
          continue;
        }
        TokenSet.walkValues(v, cb, [...parent, k]);
        continue;
      }
      cb(v, [...parent, k]);
    }
  };

  __Tokens: T["__Tokens"] = undefined as any;

  private _values: Record<string, V | Record<string, V>> = {};
  private _cssVarRefs: Record<string, string> = {};

  constructor(
    dt: T,
    {
      cssVar,
      transformFallback,
    }: {
      cssVar: (token: string) => string;
      transformFallback: (v: any) => any;
    }
  ) {
    TokenSet.walkValues(dt.values, (v, p) => {
      const token = p.join(".");

      const forEachTransformed = (v: any, each: (v: any, k: string) => any) => {
        const ret = dt.transform ? dt.transform(v) : transformFallback(v);

        if (isObject(ret)) {
          for (const i in ret) {
            each((ret as any)[i], i === "default" ? "" : i);
          }
        } else {
          each(ret, "");
        }
      };

      // Base Token
      set(this._cssVarRefs, [token], cssVar(token));

      if (isMap(v)) {
        // mutimode

        for (const k in v) {
          forEachTransformed(v[k], (value, variant) => {
            set(
              this._values,
              [`${token}${variant ? `/${variant}` : ""}`, k],
              value
            );
          });
        }
      } else {
        forEachTransformed(v, (value, variant) => {
          set(this._values, [`${token}${variant ? `/${variant}` : ""}`], value);
        });
      }
    });
  }

  get tokens() {
    return keys(this._values);
  }

  get(token: string, modePseudo: string, strict?: boolean) {
    const v = this._values[token];
    if (isObject(v)) {
      if (strict) {
        return v[modePseudo];
      }
      return v[modePseudo] ?? v[TokenSet.defaultMode];
    }
    if (strict) {
      if (modePseudo === TokenSet.defaultMode) {
        return v;
      }
      return undefined;
    }
    return v;
  }

  use(token: string, variableOnly = false): string | undefined {
    if (this._cssVarRefs[token]) {
      if (variableOnly) {
        return `${this._cssVarRefs[token]}`;
      }
      return `var(${this._cssVarRefs[token]})`;
    }
    return;
  }
}
