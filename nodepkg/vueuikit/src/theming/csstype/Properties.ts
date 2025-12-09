import { type Properties } from "@innoai-tech/csstype";
import type { ValuesOf } from "../typeutil";

export type CSSProps<Fallback = string | number> = {
  [K in keyof Properties]: Properties[K] | Fallback;
};

function createNameGetter<T extends Record<string, any>>(): {
  [K in keyof T]: K;
} {
  return new Proxy(
    {},
    {
      get(_, p) {
        return p;
      },
    },
  ) as any;
}

export const CSSProperty = createNameGetter<Required<CSSProps>>();

export const extensions = {
  paddingX: [CSSProperty.paddingLeft, CSSProperty.paddingRight],
  paddingY: [CSSProperty.paddingTop, CSSProperty.paddingBottom],

  marginX: [CSSProperty.marginInlineStart, CSSProperty.marginInlineEnd],
  marginY: [CSSProperty.marginTop, CSSProperty.marginBottom],

  borderX: [CSSProperty.borderLeft, CSSProperty.borderRight],
  borderY: [CSSProperty.borderTop, CSSProperty.borderBottom],
  color: [CSSProperty.color, CSSProperty.fill],

  borderTopRadius: [CSSProperty.borderTopLeftRadius, CSSProperty.borderTopRightRadius],
  borderBottomRadius: [CSSProperty.borderBottomLeftRadius, CSSProperty.borderBottomRightRadius],
  borderRightRadius: [CSSProperty.borderTopRightRadius, CSSProperty.borderBottomRightRadius],
  borderLeftRadius: [CSSProperty.borderTopLeftRadius, CSSProperty.borderBottomLeftRadius],

  backgroundGradient: [CSSProperty.backgroundImage],

  boxSize: [CSSProperty.width, CSSProperty.height],
};

export type ElementOf<T> = T extends Array<infer E> ? E : never;

export type CSSExtensions<Extends = typeof extensions> = {
  [K in keyof Extends as K extends string ? K : never]: ElementOf<Extends[K]> extends keyof CSSProps
    ? CSSProps[ElementOf<Extends[K]>]
    : never;
};

export type CSSExtendedProps = CSSProps & Partial<CSSExtensions>;

export const CSSExtendedProperty = createNameGetter<Required<CSSExtendedProps>>();

export const aliases = {
  font: CSSExtendedProperty.fontFamily,

  shadow: CSSExtendedProperty.boxShadow,

  rounded: CSSExtendedProperty.borderRadius,
  roundedTop: CSSExtendedProperty.borderTopRadius,
  roundedBottom: CSSExtendedProperty.borderBottomRadius,
  roundedLeft: CSSExtendedProperty.borderLeftRadius,
  roundedRight: CSSExtendedProperty.borderRightRadius,

  bg: CSSExtendedProperty.background,
  bgImage: CSSExtendedProperty.backgroundImage,
  bgSize: CSSExtendedProperty.backgroundSize,
  bgPosition: CSSExtendedProperty.backgroundPosition,
  bgRepeat: CSSExtendedProperty.backgroundRepeat,
  bgAttachment: CSSExtendedProperty.backgroundAttachment,
  bgColor: CSSExtendedProperty.backgroundColor,
  bgGradient: CSSExtendedProperty.backgroundGradient,
  bgClip: CSSExtendedProperty.backgroundClip,

  pos: CSSExtendedProperty.position,

  p: CSSExtendedProperty.padding,
  pt: CSSExtendedProperty.paddingTop,
  pr: CSSExtendedProperty.paddingRight,
  pl: CSSExtendedProperty.paddingLeft,
  pb: CSSExtendedProperty.paddingBottom,
  ps: CSSExtendedProperty.paddingInlineStart,
  pe: CSSExtendedProperty.paddingInlineEnd,
  px: CSSExtendedProperty.paddingX,
  py: CSSExtendedProperty.paddingY,

  m: CSSExtendedProperty.margin,
  mt: CSSExtendedProperty.marginTop,
  mr: CSSExtendedProperty.marginRight,
  ml: CSSExtendedProperty.marginLeft,
  mb: CSSExtendedProperty.marginBottom,
  ms: CSSExtendedProperty.marginInlineStart,
  me: CSSExtendedProperty.marginInlineEnd,
  mx: CSSExtendedProperty.marginX,
  my: CSSExtendedProperty.marginY,

  w: CSSExtendedProperty.width,
  minW: CSSExtendedProperty.minWidth,
  maxW: CSSExtendedProperty.maxWidth,

  h: CSSExtendedProperty.height,
  minH: CSSExtendedProperty.minHeight,
  maxH: CSSExtendedProperty.maxHeight,
};

export type CSSAliases<Aliases = typeof aliases> = {
  [K in keyof Aliases as K extends string ? K : never]: Aliases[K] extends keyof CSSExtendedProps
    ? CSSExtendedProps[Aliases[K]]
    : never;
};

export type CSSAllProps = CSSExtendedProps & Partial<CSSAliases>;

export const CSSAllProperty = createNameGetter<Required<CSSAllProps>>();

export type ExpandedAliases<P extends keyof CSSAllProps, Aliases = typeof aliases> =
  | P
  | ValuesOf<P extends keyof Aliases ? Pick<Aliases, P> : never>;

export const expandAliases = <P extends keyof CSSAllProps>(
  ...props: P[]
): Array<ExpandedAliases<P>> => {
  const final: string[] = [...props];
  for (const p of props) {
    if ((aliases as any)[p]) {
      final.push((aliases as any)[p]);
    }
  }
  return final as any;
};
