import type {
  EmitsOf,
  InternalPropsOf,
  PublicPropsOf,
  ToCamelCase,
} from "./tshelper";
import {
  defineComponent,
  type SetupContext,
  type RenderFunction,
  type FunctionalComponent,
} from "vue";
import { isFunction, partition, kebabCase } from "@innoai-tech/lodash";
import { type ZodTypeAny, z } from "zod";

export { z };

export type VElementType = string | Component<any, any>;

export interface OverridableTypeMap {
  props: {};
  defaultComponent: VElementType;
}

export type BaseProps<M extends OverridableTypeMap> = M["props"];

export type DistributiveOmit<T, K extends keyof any> = T extends any
  ? Omit<T, K>
  : never;

export type OverrideProps<
  M extends OverridableTypeMap,
  C extends VElementType
> = BaseProps<M> & DistributiveOmit<ComponentProps<C>, keyof BaseProps<M>>;

export type DefaultComponentProps<M extends OverridableTypeMap> = BaseProps<M> &
  DistributiveOmit<ComponentProps<M["defaultComponent"]>, keyof BaseProps<M>>;

export interface OverridableComponent<M extends OverridableTypeMap> {
  <C extends VElementType>(
    props: {
      component: C;
    } & OverrideProps<M, C>
  ): any;

  (props: DefaultComponentProps<M>): any;
}

export type ComponentProps<
  T extends keyof JSX.IntrinsicElements | Component<{}, {}>
> = T extends Component<infer P extends {}, infer E extends {}>
  ? P & EventProps<E>
  : T extends keyof JSX.IntrinsicElements
  ? JSX.IntrinsicElements[T]
  : {};

export type Emits = Record<string, (...args: any[]) => any>;

export type EventProps<E extends Emits> = {
  [K in keyof E as K extends string ? ToCamelCase<`on-${K}`> : never]?: E[K];
};

export type Component<P extends {}, E extends Emits> = FunctionalComponent<
  P & EventProps<E>,
  E
>;

export { type RenderFunction };

export type SetupFunction<P extends {}, E extends Emits> = (
  P: P,
  ctx: SetupContext<E>
) => RenderFunction;

export interface ComponentOptions {
  name?: string;
  inheritAttrs?: boolean;
}

export type DefaultProps<P extends {}, E extends Emits = {}> = {
  [K in keyof P]: P[K] | undefined;
} & {
  [K in keyof E as K extends string
    ? ToCamelCase<`on-${K}`>
    : never]: undefined;
};

export function component(
  setup: SetupFunction<{}, {}>,
  options?: ComponentOptions
): Component<{}, {}>;
export function component<PropTypes extends Record<string, ZodTypeAny>>(
  propTypes: PropTypes,
  setup: SetupFunction<InternalPropsOf<PropTypes>, EmitsOf<PropTypes>>,
  options?: ComponentOptions
): Component<PublicPropsOf<PropTypes>, EmitsOf<PropTypes>>;
export function component<PropTypes extends Record<string, ZodTypeAny>>(
  propTypesOrSetup:
    | PropTypes
    | SetupFunction<InternalPropsOf<PropTypes>, EmitsOf<PropTypes>>,
  setupOrOptions?:
    | SetupFunction<InternalPropsOf<PropTypes>, EmitsOf<PropTypes>>
    | ComponentOptions,
  options: ComponentOptions = {}
): Component<PublicPropsOf<PropTypes>, EmitsOf<PropTypes>> {
  const finalOptions = (options ?? setupOrOptions) as ComponentOptions;
  const finalSetup = (setupOrOptions ?? propTypesOrSetup) as SetupFunction<
    any,
    any
  >;
  const finalPropTypes = (
    isFunction(propTypesOrSetup) ? {} : propTypesOrSetup
  ) as Record<string, ZodTypeAny>;

  const [emits, props] = partition(Object.keys(finalPropTypes), (v: string) =>
    /^on[A-Z]/.test(v)
  );

  const propsAndEmits = {
    props: props.reduce((ret, prop) => {
      const d = finalPropTypes[prop]!;
      return {
        ...ret,
        [prop]: {
          default: () => {
            return d.parse(undefined);
          },
          validator: (value: any) => d.safeParse(value).success,
        },
      };
    }, {}),
    emits: emits.map((v) => kebabCase(v.slice("on".length))),
  };

  return defineComponent({
    ...finalOptions,
    ...propsAndEmits,
    setup: (props: any, ctx: any) => {
      return finalSetup(props, ctx);
    },
  }) as any;
}
