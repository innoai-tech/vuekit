import {
  argbFromHex,
  CorePalette,
  TonalPalette,
  rgbaFromArgb
} from "@material/material-color-utilities";
import {
  mapValues,
  type Dictionary, padStart
} from "@innoai-tech/lodash";
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
  "100": true
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

export type RoleColorRules<Seeds extends {}> = {
  [k in keyof ColorPalettes<Seeds>]: [keyof Seeds, number, number];
}

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
    success: true
  }[k];
};

export class Palette<Colors extends SeedColors = SeedColors> {
  static toHEX = (n: number) => {
    return `#${rgbFromArgb(n).map((v) => padStart(v.toString(16), 2, "0")).join("")}`;
  };

  static fromColors = <Colors extends SeedColors = SeedColors>(
    colors: Partial<Colors> & { primary: string }
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
      error: error ? argbFromHex(error) : undefined
    });

    if (neutral) {
      palette.n1 = TonalPalette.fromHueAndChroma(argbFromHex(neutral), 4);
    }

    if (neutralVariant) {
      palette.n2 = TonalPalette.fromHueAndChroma(argbFromHex(neutralVariant), 8);
    }

    return new Palette<Colors>(
      {
        ...mapValues(otherColors as Dictionary<string>, (v) =>
          TonalPalette.fromInt(argbFromHex(v))
        ) as any,
        primary: palette.a1,
        secondary: palette.a2,
        tertiary: palette.a3,
        neutral: palette.n1,
        neutralVariant: palette.n2,
        error: palette.error
      }
    );
  };

  constructor(
    public seeds: { [K in keyof Colors]: TonalPalette }
  ) {
  }

  normalizeRoleRules(rules: Partial<RoleColorRules<Colors>> = {}): RoleColorRules<Colors> {
    const roleRules: { [K: string]: [keyof Colors, number, number] } = {
      "shadow": ["neutral", 0, 0],
      "scrim": ["neutral", 0, 0],

      "outline": ["neutralVariant", 60, 50],
      "outline-variant": ["neutralVariant", 30, 80],

      "surface": ["neutral", 10, 99],
      "on-surface": ["neutral", 90, 10],

      "surface-variant": ["neutralVariant", 30, 90],
      "on-surface-variant": ["neutralVariant", 80, 30],

      "surface-dim": ["neutral", 6, 87],
      "surface-bright": ["neutral", 24, 98],

      "surface-container-lowest": ["neutral", 4, 100],
      "surface-container-low": ["neutral", 10, 96],
      "surface-container": ["neutral", 12, 94],
      "surface-container-high": ["neutral", 17, 92],
      "surface-container-highest": ["neutral", 22, 90],

      "inverse-surface": ["neutral", 90, 20],
      "inverse-on-surface": ["neutral", 20, 95],
      "inverse-primary": ["primary", 40, 80]
    };

    for (const name in this.seeds) {
      if (name.startsWith("neutral")) {
        continue;
      }

      // https://m3.material.io/styles/color/the-color-system/custom-colors
      roleRules[name] = [name as keyof Colors, 80, 40];
      roleRules[`on-${name}`] = [name as keyof Colors, 20, 100];
      roleRules[`${name}-container`] = [name as keyof Colors, 30, 90];
      roleRules[`on-${name}-container`] = [name as keyof Colors, 90, 10];
    }

    return {
      ...roleRules,
      ...rules
    } as RoleColorRules<Colors>;
  }

  private getThemeRoleColors(roleRules: RoleColorRules<Colors>) {
    const themeColors: { [K: string]: number } = {};
    const darkThemeColors: { [K: string]: number } = {};

    for (const role in roleRules) {
      const [base, toneOnDark, toneOnLight] = (roleRules as any)[role]!;

      if ((this.seeds as any)[base]) {
        darkThemeColors[role] = (this.seeds as any)[base]!.tone(toneOnDark);
        themeColors[role] = (this.seeds as any)[base]!.tone(toneOnLight);
      }
    }


    return [themeColors, darkThemeColors] as const;
  }

  toTokenObject(rules: Partial<RoleColorRules<Colors>> = {}) {
    const toToken = (n: number) => {
      return {
        type: "color",
        value: `rgb(${rgbFromArgb(n).join(",")})`
      };
    };

    const colors: any = {
      "seed": {} as any,
      "palette": {} as any,
      "sys": {
        "dark": {},
        "light": {}
      } as any
    };

    for (const name in this.seeds) {
      colors["seed"][name] = toToken(this.seeds[name]!.keyColor.toInt());

      Object.keys(tones).forEach((tone) => {
        colors["palette"][name] = {
          ...(colors["palette"][name] || {}),
          [tone]: toToken(this.seeds[name]!.tone(parseInt(tone)))
        };
      });
    }

    const roleColors = this.normalizeRoleRules(rules);

    for (const role in roleColors) {
      const [base, onDark, onLight] = (roleColors as any)[role];

      colors["sys"]["dark"][role] = {
        "value": `{palette.${base}.${onDark}}`,
        "type": "color"
      };

      colors["sys"]["light"][role] = {
        "value": `{palette.${base}.${onLight}}`,
        "type": "color"
      };
    }

    return colors;
  }

  toDesignTokens(rules: Partial<RoleColorRules<Colors>> = {}) {
    const [themeColors, dartThemeColors] = this.getThemeRoleColors(this.normalizeRoleRules(rules));

    const sysColors: Record<string, ConditionColors> = {};
    const containerStyles: Record<string, { color: string; bgColor: string }> =
      {};

    for (let role in themeColors) {
      sysColors[`${role}`] = {
        _default: rgbFromArgb((themeColors as any)[role]),
        _dark: rgbFromArgb((dartThemeColors as any)[role])
      };

      if (isKeyColor(role)) {
        containerStyles[`${role}`] = DesignToken.mixin({
          bgColor: `sys.${role}`,
          color: `sys.on-${role}`
        });

        containerStyles[`${role}-container`] = DesignToken.mixin({
          bgColor: `sys.${role}-container`,
          color: `sys.on-${role}-container`
        });
      }

      if (role.startsWith("surface")) {
        if (role.includes("container")) {
          containerStyles[`${role}`] = DesignToken.mixin({
            bgColor: `sys.${role}`,
            color: `sys.on-surface`
          });
          continue;
        }

        containerStyles[`${role}`] = DesignToken.mixin({
          bgColor: `sys.${role}`,
          color: `sys.on-surface`
        });

        containerStyles[`on-${role}`] = DesignToken.mixin({
          bgColor: `sys.on-${role}`,
          color: `sys.inverse-on-surface`
        });
      }
    }

    const toTonalPalette = (t: TonalPalette): ColorTonalPalette => {
      return Object.keys(tones).reduce(
        (ret, tone) => ({
          ...ret,
          [tone]: rgbFromArgb(t.tone(parseInt(tone)))
        }),
        {}
      ) as any;
    };

    const color = DesignToken.color({
      ...mapValues(this.seeds as { [K in keyof Colors]: TonalPalette }, (tp) => toTonalPalette(tp)),
      white: [255, 255, 255],
      black: [0, 0, 0],
      sys: sysColors as unknown as ColorPalettes<Colors>
    });

    const containerStyle = DesignToken.customMixin("containerStyle", {
      sys: containerStyles as ContainerStyles<
        Omit<Colors, "neutral" | "neutralVariant">
      >
    });

    return {
      color,
      containerStyle
    };
  }
}

export type ContainerStyles<
  KeyColors extends {},
  Mixin = WithMixin<{
    color: string;
    fill: string;
    bgColor: string;
  }>
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
