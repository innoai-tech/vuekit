import {
  type Dictionary,
  isNumber,
  mapValues,
  padStart,
} from "es-toolkit/compat";
import {
  CorePalette,
  TonalPalette,
  argbFromHex,
  rgbaFromArgb,
} from "@material/material-color-utilities";
import { DesignToken, type WithMixin } from "../token";

const tones = {
  "0": true,
  "10": true,
  "20": true,
  "30": true,
  "40": true,
  "50": true,
  "60": true,
  "70": true,
  "80": true,
  "90": true,
  "95": true,
  "100": true,
} as const;

export type ColorTonalPalette<Color = [number, number, number]> = {
  [k in keyof typeof tones]: Color;
};

export type ConditionColors = {
  _default: [number, number, number];
  _dark?: [number, number, number];
};

export type AccentColorPalettes<KeyColors extends {}> = {
  "inverse-primary": ConditionColors;
} & {
  [K in keyof KeyColors as K extends string ? `${K}` : never]: ConditionColors;
} & {
  [K in keyof KeyColors as K extends string
    ? `on-${K}`
    : never]: ConditionColors;
} & {
  [K in keyof KeyColors as K extends string
    ? `${K}-container`
    : never]: ConditionColors;
} & {
  [K in keyof KeyColors as K extends string
    ? `on-${K}-container`
    : never]: ConditionColors;
};

export type SurfacePalettes = {
  "on-surface": ConditionColors;
  "on-surface-variant": ConditionColors;

  "inverse-surface": ConditionColors;
  "inverse-on-surface": ConditionColors;

  surface: ConditionColors;
  "surface-dim": ConditionColors;
  "surface-bright": ConditionColors;
  "surface-container-lowest": ConditionColors;
  "surface-container-low": ConditionColors;
  "surface-container": ConditionColors;
  "surface-container-high": ConditionColors;
  "surface-container-highest": ConditionColors;
  "surface-variant": ConditionColors;
};

export type ColorPalettes<Seeds extends {}> = {
  outline: ConditionColors;
  "outline-variant": ConditionColors;
  shadow: ConditionColors;
  scrim: ConditionColors;
} & AccentColorPalettes<Seeds> &
  SurfacePalettes;

export interface SeedColors {
  primary: string;
  secondary: string;
  tertiary: string;
  neutral: string;
  neutralVariant: string;

  error: string;
  warning: string;
  success: string;
}

export type RoleColorSource<Seeds extends {}> = {
  [K in keyof Seeds]: (tone: number) => [K, number];
};

export type RoleColorRuleBuilder<
  Seeds extends SeedColors,
  RuleKeys extends string = keyof ColorPalettes<Seeds>,
> = {
  rule<K extends RuleKeys>(
    role: K,
    rule: [string, number],
  ): RoleColorRuleBuilder<Seeds, Exclude<RuleKeys, K>>;
  build(): RoleColorRules<Seeds>;
};

export type RoleColorRules<Seeds extends {}> = {
  [k in keyof ColorPalettes<Seeds>]: [keyof Seeds, number];
};

const rgbFromArgb = (argb: number): [number, number, number] => {
  const rgba = rgbaFromArgb(argb);
  return [rgba.r, rgba.g, rgba.b];
};

const isKeyColor = (k: string) => {
  return {
    primary: true,
    secondary: true,
    tertiary: true,
    error: true,
    warning: true,
    success: true,
  }[k];
};

export class Palette<Colors extends SeedColors = SeedColors> {
  static toHEX = (n: number) => {
    return `#${rgbFromArgb(n)
      .map((v) => padStart(v.toString(16), 2, "0"))
      .join("")}`;
  };

  static createRoleColorRuleBuilder<Colors extends SeedColors = SeedColors>(
    mode?: string,
  ): RoleColorRuleBuilder<Colors> {
    const rules: any = {};

    const x = new Proxy(
      {},
      {
        get(_, prop: string) {
          if (prop == "build") {
            return () => rules;
          }

          return (role: string, rule: [string: number]) => {
            rules[`${role}${mode ? `:${mode}` : ""}`] = rule;

            return x;
          };
        },
      },
    );

    return x as any;
  }

  static createRoleColorSourcePicker<
    Colors extends SeedColors = SeedColors,
  >(): RoleColorSource<Colors> {
    return new Proxy(
      {},
      {
        get(_, prop: string) {
          return (tone: number) => [prop, tone];
        },
      },
    ) as any;
  }

  static fromColors = <Colors extends SeedColors = SeedColors>(
    colors: Partial<Colors> & { primary: string },
  ) => {
    const {
      primary,
      secondary,
      tertiary,
      neutral,
      neutralVariant,
      error,
      ...otherColors
    } = colors;

    const palette = CorePalette.contentFromColors({
      primary: argbFromHex(primary),
      secondary: secondary ? argbFromHex(secondary) : undefined,
      tertiary: tertiary ? argbFromHex(tertiary) : undefined,
      error: error ? argbFromHex(error) : undefined,
    });

    if (neutral) {
      palette.n1 = TonalPalette.fromHueAndChroma(argbFromHex(neutral), 4);
    }

    if (neutralVariant) {
      palette.n2 = TonalPalette.fromHueAndChroma(
        argbFromHex(neutralVariant),
        8,
      );
    }

    return new Palette<Colors>({
      primary: palette.a1,
      secondary: palette.a2,
      tertiary: palette.a3,
      neutral: palette.n1,
      neutralVariant: palette.n2,
      error: palette.error,
      ...(mapValues(otherColors as Dictionary<string>, (v) =>
        TonalPalette.fromInt(argbFromHex(v)),
      ) as any),
    });
  };

  constructor(public seeds: { [K in keyof Colors]: TonalPalette }) {}

  normalizeRoleRules(
    rules: Partial<RoleColorRules<Colors>> = {},
  ): RoleColorRules<Colors> {
    const seed = Palette.createRoleColorSourcePicker<Colors>();

    let defaultRoleRules = Palette.createRoleColorRuleBuilder<Colors>()
      .rule("shadow", seed.neutral(0))
      .rule("scrim", seed.neutral(0))
      .rule("outline", seed.neutralVariant(87))
      .rule("outline-variant", seed.neutralVariant(80))
      .rule("surface", seed.neutral(99))
      .rule("on-surface", seed.neutral(10))
      .rule("surface-variant", seed.neutralVariant(90))
      .rule("on-surface-variant", seed.neutralVariant(30))
      .rule("surface-dim", seed.neutral(87))
      .rule("surface-bright", seed.neutral(98))
      .rule("surface-container-lowest", seed.neutral(100))
      .rule("surface-container-low", seed.neutral(96))
      .rule("surface-container", seed.neutral(94))
      .rule("surface-container-high", seed.neutral(92))
      .rule("surface-container-highest", seed.neutral(90))
      .rule("inverse-surface", seed.neutral(20))
      .rule("inverse-on-surface", seed.neutral(95))
      .rule("inverse-primary", seed.primary(80));

    let darkRoleRules = Palette.createRoleColorRuleBuilder<Colors>("dark")
      .rule("shadow", seed.neutral(0))
      .rule("scrim", seed.neutral(0))
      .rule("outline", seed.neutralVariant(60))
      .rule("outline-variant", seed.neutralVariant(30))
      .rule("surface", seed.neutral(10))
      .rule("on-surface", seed.neutral(90))
      .rule("surface-variant", seed.neutralVariant(30))
      .rule("on-surface-variant", seed.neutralVariant(80))
      .rule("surface-dim", seed.neutral(6))
      .rule("surface-bright", seed.neutral(24))
      .rule("surface-container-lowest", seed.neutral(4))
      .rule("surface-container-low", seed.neutral(10))
      .rule("surface-container", seed.neutral(12))
      .rule("surface-container-high", seed.neutral(17))
      .rule("surface-container-highest", seed.neutral(22))
      .rule("inverse-surface", seed.neutral(90))
      .rule("inverse-on-surface", seed.neutral(20))
      .rule("inverse-primary", seed.primary(40));

    for (const name in this.seeds) {
      if (name.startsWith("neutral")) {
        continue;
      }

      // https://m3.material.io/styles/color/the-color-system/custom-colors
      defaultRoleRules = defaultRoleRules
        .rule(name as any, seed[name](40))
        .rule(`on-${name}` as any, seed[name](100))
        .rule(`${name}-container` as any, seed[name](90))
        .rule(`on-${name}-container` as any, seed[name](10));

      darkRoleRules = darkRoleRules
        .rule(name as any, seed[name](80))
        .rule(`on-${name}` as any, seed[name](20))
        .rule(`${name}-container` as any, seed[name](30))
        .rule(`on-${name}-container` as any, seed[name](90));
    }

    return {
      ...defaultRoleRules.build(),
      ...darkRoleRules.build(),
      ...rules,
    } as RoleColorRules<Colors>;
  }

  private getThemeRoleColors(roleRules: RoleColorRules<Colors>) {
    const themeColors: { [K: string]: number } = {};
    const darkThemeColors: { [K: string]: number } = {};

    for (const [role, [base, tone]] of Object.entries(roleRules)) {
      if ((this.seeds as any)[base]) {
        if (role.endsWith(":dark")) {
          let r = role.split(":")[0]!;

          darkThemeColors[r] = (tones as any)[tone]
            ? `${String(base)}.${tone}`
            : (this.seeds as any)[base]?.tone(tone);
          continue;
        }

        themeColors[role] = (tones as any)[tone]
          ? `${String(base)}.${tone}`
          : (this.seeds as any)[base]?.tone(tone);
      }
    }

    return [themeColors, darkThemeColors] as const;
  }

  toDesignTokens(rules: Partial<RoleColorRules<Colors>> = {}) {
    const finalRules = this.normalizeRoleRules(rules);

    const [themeColors, dartThemeColors] = this.getThemeRoleColors(finalRules);

    const sysColors: Record<string, ConditionColors> = {};
    const containerStyles: Record<
      string,
      {
        color: string;
        bgColor: string;
      }
    > = {};

    for (const role in themeColors) {
      sysColors[`${role}`] = {
        _default: isNumber((themeColors as any)[role])
          ? rgbFromArgb((themeColors as any)[role])
          : (themeColors as any)[role],
        _dark: isNumber((dartThemeColors as any)[role])
          ? rgbFromArgb((dartThemeColors as any)[role])
          : (dartThemeColors as any)[role],
      };

      if (isKeyColor(role)) {
        containerStyles[`${role}`] = DesignToken.mixin({
          bgColor: `sys.${role}`,
          color: `sys.on-${role}`,
        });

        containerStyles[`${role}-container`] = DesignToken.mixin({
          bgColor: `sys.${role}-container`,
          color: `sys.on-${role}-container`,
        });
      }

      if (role.startsWith("surface")) {
        if (role.includes("container")) {
          containerStyles[`${role}`] = DesignToken.mixin({
            bgColor: `sys.${role}`,
            color: "sys.on-surface",
          });
          continue;
        }

        containerStyles[`${role}`] = DesignToken.mixin({
          bgColor: `sys.${role}`,
          color: "sys.on-surface",
        });

        containerStyles[`on-${role}`] = DesignToken.mixin({
          bgColor: `sys.on-${role}`,
          color: "sys.inverse-on-surface",
        });
      }
    }

    const toTonalPalette = (t: TonalPalette): ColorTonalPalette => {
      return Object.keys(tones).reduce(
        (ret, tone) =>
          Object.assign(ret, {
            [tone]: rgbFromArgb(t.tone(parseInt(tone))),
          }),
        {},
      ) as any;
    };

    const color = DesignToken.color({
      ...mapValues(this.seeds as { [K in keyof Colors]: TonalPalette }, (tp) =>
        toTonalPalette(tp),
      ),
      white: [255, 255, 255],
      black: [0, 0, 0],
      sys: sysColors as unknown as ColorPalettes<Colors>,
    });

    const containerStyle = DesignToken.customMixin("containerStyle", {
      sys: containerStyles as ContainerStyles<
        Omit<Colors, "neutral" | "neutralVariant">
      >,
    });

    return {
      color,
      containerStyle,
    };
  }
}

export type ContainerStyles<
  KeyColors extends {},
  Mixin = WithMixin<{
    color: string;
    fill: string;
    bgColor: string;
  }>,
> = {
  [K in keyof KeyColors as K extends string ? `${K}` : never]: Mixin;
} & {
  [K in keyof KeyColors as K extends string ? `${K}-container` : never]: Mixin;
} & {
  [K in keyof Omit<
    SurfacePalettes,
    "inverse-surface" | "inverse-on-surface-variant"
  >]: Mixin;
};
