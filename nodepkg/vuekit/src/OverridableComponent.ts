import type { Component, VElementType } from "./types";

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
  C extends VElementType
> = BaseProps<M> & DistributiveOmit<ComponentProps<C>, keyof BaseProps<M>>;

type DefaultComponentProps<M extends OverridableTypeMap> = BaseProps<M> &
  DistributiveOmit<ComponentProps<M["defaultComponent"]>, keyof BaseProps<M>>;

export type ComponentProps<T extends VElementType> = T extends Component<infer P>
  ? P
  : T extends keyof JSX.IntrinsicElements
    ? JSX.IntrinsicElements[T]
    : never;

export const v: Component<{ a: string; b: string, href: string }> =
  {} as OverridableComponent<{
    props: { a: string };
    defaultComponent: OverridableComponent<{
      props: { b: string };
      defaultComponent: "a";
    }>;
  }>;

export interface OverridableComponent<M extends OverridableTypeMap> {
  <C extends VElementType>(
    props: { component: C } & OverrideProps<M, C>,
    ctx: any
  ): any;

  (props: DefaultComponentProps<M>, ctx: any): any;
}
