import {
  argbFromHex,
  CorePalette,
  TonalPalette,
  Scheme,
  rgbaFromArgb,
} from "@material/material-color-utilities";
import {
  omit,
  camelCase,
  kebabCase,
  mapValues,
  type Dictionary,
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

export type ColorPalettes<KeyColors extends {}> = {
  outline: ConditionColors;
  "outline-variant": ConditionColors;
  shadow: ConditionColors;
  scrim: ConditionColors;
} & AccentColorPalettes<KeyColors> &
  SurfacePalettes;

export interface CorePaletteColors {
  primary: string;
  secondary?: string;
  tertiary?: string;
  neutral?: string;
  neutralVariant?: string;
  error?: string;
}

const rgbFromArgb = (argb: number): [number, number, number] => {
  const rgba = rgbaFromArgb(argb);
  return [rgba.r, rgba.g, rgba.b];
};

const customColors = (others: Record<string, TonalPalette>, dark = false) => {
  const colors: Record<string, number> = {};

  for (const name in others) {
    const color = others[name]!;

    // https://m3.material.io/styles/color/the-color-system/custom-colors
    colors[camelCase(name)] = color.tone(dark ? 80 : 40);
    colors[camelCase(`on-${name}`)] = color.tone(dark ? 20 : 100);
    colors[camelCase(`${name}-container`)] = color.tone(dark ? 30 : 90);
    colors[camelCase(`on-${name}-container`)] = color.tone(dark ? 90 : 10);
  }

  return colors;
};

const isKeyColor = (k: string) => {
  return {
    primary: true,
    secondary: true,
    tertiary: true,
    error: true,
  }[k];
};

export class Palette<Colors extends CorePaletteColors = CorePaletteColors>
  implements CorePalette
{
  static fromColors = <Colors extends CorePaletteColors = CorePaletteColors>(
    colors: Colors
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
        8
      );
    }

    return new Palette<Colors>(
      palette.a1,
      palette.a2,
      palette.a3,
      palette.n1,
      palette.n2,
      palette.error,
      mapValues(otherColors as Dictionary<string>, (v) =>
        TonalPalette.fromInt(argbFromHex(v))
      )
    );
  };

  constructor(
    public a1: TonalPalette,
    public a2: TonalPalette,
    public a3: TonalPalette,
    public n1: TonalPalette,
    public n2: TonalPalette,
    public error: TonalPalette,
    public ext: Dictionary<TonalPalette>
  ) {}

  getThemeColors(dark: boolean) {
    const values = omit(
      (dark ? Scheme.darkFromCorePalette : Scheme.lightFromCorePalette)(
        this
      ).toJSON(),
      ["background", "onBackground"]
    );

    return {
      ...values,
      ...customColors(this.ext, dark),
      surfaceDim: this.n1.tone(dark ? 6 : 87),
      surfaceBright: this.n1.tone(dark ? 24 : 98),
      surfaceContainerLowest: this.n1.tone(dark ? 4 : 100),
      surfaceContainerLow: this.n1.tone(dark ? 10 : 96),
      surfaceContainer: this.n1.tone(dark ? 12 : 94),
      surfaceContainerHigh: this.n1.tone(dark ? 17 : 92),
      surfaceContainerHighest: this.n1.tone(dark ? 22 : 90),
    };
  }

  toDesignTokens() {
    const sysColors: Record<string, ConditionColors> = {};
    const containerStyles: Record<string, { color: string; bgColor: string }> =
      {};

    const themeColors = this.getThemeColors(false);
    const dartThemeColors = this.getThemeColors(true);

    for (let role in themeColors) {
      sysColors[`${kebabCase(role)}`] = {
        _default: rgbFromArgb((themeColors as any)[role]),
        _dark: rgbFromArgb((dartThemeColors as any)[role]),
      };

      if (isKeyColor(role)) {
        containerStyles[`${kebabCase(role)}`] = DesignToken.mixin({
          bgColor: `sys.${kebabCase(role)}`,
          color: `sys.on-${kebabCase(role)}`,
        });

        containerStyles[`${kebabCase(role)}-container`] = DesignToken.mixin({
          bgColor: `sys.${kebabCase(role)}-container`,
          color: `sys.on-${kebabCase(role)}-container`,
        });
      }

      if (role.startsWith("surface")) {
        if (role.includes("container")) {
          containerStyles[`${kebabCase(role)}`] = DesignToken.mixin({
            bgColor: `sys.${kebabCase(role)}`,
            color: `sys.on-surface`,
          });
          continue;
        }

        containerStyles[`${kebabCase(role)}`] = DesignToken.mixin({
          bgColor: `sys.${kebabCase(role)}`,
          color: `sys.on-surface`,
        });

        containerStyles[`on-${kebabCase(role)}`] = DesignToken.mixin({
          bgColor: `sys.on-${kebabCase(role)}`,
          color: `sys.inverse-on-surface`,
        });
      }
    }

    const toTonalPalette = (t: TonalPalette): ColorTonalPalette => {
      return Object.keys(tones).reduce(
        (ret, tone) => ({
          ...ret,
          [tone]: rgbFromArgb(t.tone(parseInt(tone))),
        }),
        {}
      ) as any;
    };

    const color = DesignToken.color({
      ...mapValues(this.ext, (tp) => toTonalPalette(tp)),

      primary: toTonalPalette(this.a1),
      secondary: toTonalPalette(this.a2),
      tertiary: toTonalPalette(this.a3),
      neutral: toTonalPalette(this.n1),
      neutralVariant: toTonalPalette(this.n2),
      error: toTonalPalette(this.error),

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
