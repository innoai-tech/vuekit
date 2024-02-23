import type { Component, VElementType } from "./vue";

export interface OverridableTypeMap {
  props: {};
  defaultComponent: VElementType;
}

type BaseProps<M extends OverridableTypeMap> = M["props"];

type DistributiveOmit<T, K extends keyof any> = T extends any
  ? Omit<T, K>
  : never;

type OverrideProps<
  M extends OverridableTypeMap,
  C extends VElementType,
> = BaseProps<M> & DistributiveOmit<ComponentProps<C>, keyof BaseProps<M>>;

type DefaultComponentProps<M extends OverridableTypeMap> = BaseProps<M> &
  DistributiveOmit<ComponentProps<M["defaultComponent"]>, keyof BaseProps<M>>;

export type ComponentProps<T extends VElementType> =
  T extends Component<infer P>
    ? P
    : T extends keyof JSX.IntrinsicElements
      ? JSX.IntrinsicElements[T]
      : never;

export interface OverridableComponent<
  M extends OverridableTypeMap,
  P extends Record<string, any> = DefaultComponentProps<M>,
> extends Component<P> {
  <C extends VElementType>(
    props: { component: C } & OverrideProps<M, C>,
    ctx: any,
  ): any;

  (props: P, ctx: any): any;
}
