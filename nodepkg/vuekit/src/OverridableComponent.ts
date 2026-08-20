import type { Component, JSXProps, VElementType } from "./vue";
import type { Simplify } from "@innoai-tech/typedef";

export interface OverridableTypeMap {
  props: {};
  defaultComponent: VElementType;
}

type BaseProps<M extends OverridableTypeMap> = M["props"];

type DistributiveOmit<T, K extends keyof any> = T extends any ? Omit<T, K> : never;

type OverrideProps<M extends OverridableTypeMap, C extends VElementType> = BaseProps<M> &
  DistributiveOmit<ComponentProps<C>, keyof BaseProps<M>>;

type DefaultComponentProps<M extends OverridableTypeMap> = BaseProps<M> &
  DistributiveOmit<ComponentProps<M["defaultComponent"]>, keyof BaseProps<M>>;

export type ComponentProps<T extends VElementType> =
  T extends Component<infer P>
    ? JSXProps<P>
    : T extends keyof JSX.IntrinsicElements
      ? JSX.IntrinsicElements[T]
      : never;

export interface OverridableComponent<
  M extends OverridableTypeMap,
  P extends Record<string, any> = Simplify<DefaultComponentProps<M>>,
> extends Component<P> {
  <C extends VElementType>(props: { component: C } & OverrideProps<M, C>, ctx: any): any;

  (props: JSXProps<P>, ctx: any): any;
}
