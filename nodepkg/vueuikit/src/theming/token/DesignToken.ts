import { isString } from "@innoai-tech/lodash";
import type { CSSAllProps, Globals } from "../csstype";
import { CSSAllProperty, CSSProperty, expandAliases } from "../csstype";
import type { UnionToIntersection, ValuesOf } from "../typeutil";

export type DesignTokenValues<T> = {
  [K: string]: T | DesignTokenValues<T>;
};

export type DesignTokenValue<Tokens extends DesignTokenValues<any>> =
  Tokens extends DesignTokenValues<infer V> ? V : never;

export type FlattenTokenNames<
  T,
  O extends Record<string, unknown>,
  K = keyof O,
> = K extends string
  ? O[K] extends Record<string, unknown>
    ? O[K]["__mixin"] extends boolean // mixin values
      ? `${K}`
      : O[K]["_default"] extends T // condition values
        ? `${K}`
        : `${K}.${FlattenTokenNames<T, O[K]>}`
    : `${K}`
  : never;

export enum DesignTokenType {
  var = "var",
  mixin = "mixin",
}

export type Primitive = string | number | symbol | bigint | boolean;

export type MustDefined<T> = T extends Primitive ? T : never;

export type DesignTokenTransform<I, O> = (
  i: I,
  cssVar: (token: string) => string
) => O | { default: O; [V: string]: O };

export interface DesignTokenOption<
  Tokens extends DesignTokenValues<any>,
  CSSPropNames extends keyof CSSAllProps | string,
  InputValueType = DesignTokenValue<Tokens>,
  ValueType = InputValueType,
  Fallback = unknown,
> {
  type: DesignTokenType;
  value: Tokens;
  on: Array<CSSPropNames>;
  transform?: DesignTokenTransform<InputValueType, ValueType>;

  __Tokens: FlattenTokenNames<InputValueType, Tokens>;
  __CSSTokens: {
    [P in CSSPropNames]:
    | FlattenTokenNames<InputValueType, Tokens>
    | Globals
    | MustDefined<Fallback>;
  };
  __ValueType: ValueType;
}

export type DesignTokenOptionAny = DesignTokenOption<any, any, any>;

export type DesignTokens<O extends Record<string, DesignTokenOptionAny>> =
  Partial<UnionToIntersection<ValuesOf<O>["__CSSTokens"]>>;

export type WithMixin<T extends {}> = {
  __mixin: true;
} & T;

type RGB = `rgb(${string})`;
type RGBA = `rgba(${string})`;
type HEX = `#${string}`;

type Color = RGB | RGBA | HEX;

// biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
export class DesignToken {
  static create<
    Tokens extends DesignTokenValues<any>,
    CSSPropNames extends keyof CSSAllProps | string,
    InputValueType = DesignTokenValue<Tokens>,
    ValueType = InputValueType,
    Fallback = unknown,
  >(
    type: DesignTokenType,
    {
      value,
      on,
      transform
    }: {
      value: Tokens;
      on: Array<CSSPropNames>;
      transform?: DesignTokenTransform<InputValueType, ValueType>;
      fallback?: Fallback;
    }
  ): DesignTokenOption<
    Tokens,
    CSSPropNames,
    InputValueType,
    ValueType,
    Fallback
  > {
    return {
      type,
      value,
      on: on,
      transform: transform,

      __Tokens: undefined as any,
      __ValueType: undefined as any,
      __CSSTokens: undefined as any
    };
  }

  static color<T extends DesignTokenValues<[number, number, number] | string>>(
    value: T
  ) {
    return DesignToken.create(DesignTokenType.var, {
      value,
      on: expandAliases(
        CSSAllProperty.color,
        CSSAllProperty.bgColor,
        CSSAllProperty.outlineColor,
        CSSAllProperty.borderColor,
        CSSAllProperty.accentColor,

        CSSAllProperty.fill,
        CSSAllProperty.stroke
      ),
      transform: (
        rgb: [number, number, number] | string,
        cssVar: (token: string) => string
      ) => {
        return isString(rgb)
          ? {
            default: `var(${cssVar(rgb)})`,
            rgb: `var(${cssVar(`${rgb}/rgb`)})`
          }
          : {
            default: `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`,
            rgb: `${rgb[0]} ${rgb[1]} ${rgb[2]}`
          };
      },
      fallback: "" as Color
    });
  }

  static space<T extends DesignTokenValues<number>>(value: T) {
    return DesignToken.create(DesignTokenType.var, {
      value,
      on: expandAliases(
        CSSAllProperty.gap,
        CSSAllProperty.rowGap,
        CSSAllProperty.columnGap,

        CSSAllProperty.top,
        CSSAllProperty.right,
        CSSAllProperty.bottom,
        CSSAllProperty.left,

        CSSAllProperty.m,
        CSSAllProperty.ms,
        CSSAllProperty.me,
        CSSAllProperty.mt,
        CSSAllProperty.mr,
        CSSAllProperty.mb,
        CSSAllProperty.ml,
        CSSAllProperty.mx,
        CSSAllProperty.my,

        CSSAllProperty.p,
        CSSAllProperty.ps,
        CSSAllProperty.pe,
        CSSAllProperty.pt,
        CSSAllProperty.pr,
        CSSAllProperty.pb,
        CSSAllProperty.pl,
        CSSAllProperty.px,
        CSSAllProperty.py
      )
    });
  }

  static boxSize<T extends DesignTokenValues<number>>(value: T) {
    return DesignToken.create(DesignTokenType.var, {
      value,
      on: expandAliases(
        CSSAllProperty.w,
        CSSAllProperty.minW,
        CSSAllProperty.maxW,
        CSSAllProperty.h,
        CSSAllProperty.minH,
        CSSAllProperty.maxH,
        CSSAllProperty.boxSize
      ),
      fallback: 0 as number
    });
  }

  static fontSize<T extends DesignTokenValues<number>>(value: T) {
    return DesignToken.create(DesignTokenType.var, {
      value,
      on: expandAliases(CSSAllProperty.fontSize),
      fallback: 0 as number
    });
  }

  static lineHeight<T extends DesignTokenValues<number>>(value: T) {
    return DesignToken.create(DesignTokenType.var, {
      value,
      on: expandAliases(CSSAllProperty.lineHeight),
      fallback: 0 as number
    });
  }

  static rounded<T extends DesignTokenValues<number>>(value: T) {
    return DesignToken.create(DesignTokenType.var, {
      value,
      fallback: 0,
      on: expandAliases(
        CSSAllProperty.rounded,
        CSSAllProperty.roundedTop,
        CSSAllProperty.roundedBottom,
        CSSAllProperty.roundedLeft,
        CSSAllProperty.roundedRight,

        CSSProperty.borderTopLeftRadius,
        CSSProperty.borderTopRightRadius,
        CSSProperty.borderBottomLeftRadius,
        CSSProperty.borderBottomRightRadius,
        CSSProperty.borderTopRightRadius,
        CSSProperty.borderBottomRightRadius,
        CSSProperty.borderTopLeftRadius,
        CSSProperty.borderBottomLeftRadius
      )
    });
  }

  static transitionTimingFunction<T extends DesignTokenValues<string>>(
    value: T
  ) {
    return DesignToken.create(DesignTokenType.var, {
      value,
      on: expandAliases(CSSAllProperty.transitionTimingFunction)
    });
  }

  static transitionDuration<T extends DesignTokenValues<number>>(value: T) {
    return DesignToken.create(DesignTokenType.var, {
      value,
      on: expandAliases(CSSAllProperty.transitionDuration),
      transform: (v) => `${v}ms`
    });
  }

  static font<T extends DesignTokenValues<string>>(value: T) {
    return DesignToken.create(DesignTokenType.var, {
      value,
      on: expandAliases(CSSAllProperty.font)
    });
  }

  static fontWeight<T extends DesignTokenValues<string | number>>(value: T) {
    return DesignToken.create(DesignTokenType.var, {
      value,
      on: expandAliases(CSSAllProperty.fontWeight)
    });
  }

  static letterSpacing<T extends DesignTokenValues<string | number>>(value: T) {
    return DesignToken.create(DesignTokenType.var, {
      value,
      on: expandAliases(CSSAllProperty.letterSpacing)
    });
  }

  static shadow<T extends DesignTokenValues<string>>(value: T) {
    return DesignToken.create(DesignTokenType.var, {
      value,
      on: expandAliases(CSSAllProperty.shadow)
    });
  }

  static customMixin<
    CustomProp extends string,
    T extends DesignTokenValues<WithMixin<CSSAllProps>>,
  >(customProp: CustomProp, value: T) {
    return DesignToken.create(DesignTokenType.mixin, {
      value: value,
      on: [customProp]
    });
  }

  static mixin<T extends CSSAllProps>(sx: T): WithMixin<T> {
    return { ...sx, __mixin: true };
  }
}
