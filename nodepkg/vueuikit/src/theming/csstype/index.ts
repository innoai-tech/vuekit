export * from "./Properties";
export * from "./Pseudos";

export type { Globals } from "csstype";
import type { Pseudos } from "./Pseudos";
import type { CSSAllProps } from "./Properties";

export type RecursivePseudo<D> = {
  [K in keyof Pseudos]?: D;
};

type CSSDefinition<D> = D | RecursiveCSSSelector<D>;

interface RecursiveCSSSelector<D> {
  [selector: string]: CSSDefinition<D>;
}

export type RecursiveCSSObject<D> = D &
  (D | RecursivePseudo<D> | RecursiveCSSSelector<D>);

export type CSSObjectWithState<D extends CSSAllProps> = D & {
  state?: Record<
    string,
    CSSDefinition<{ $?: string } & Pick<D, keyof CSSAllProps>>
  >;
};

export type ExtendableCSSObject<D> = { extends?: ExtendableCSSObject<D>[] } & D;

export type FullCSSObject<D extends CSSAllProps> = ExtendableCSSObject<
  RecursiveCSSObject<CSSObjectWithState<D>>
>;
