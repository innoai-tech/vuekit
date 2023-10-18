import type {
  PublicPropsOf,
  Component,
  SetupFunction,
  WithDefaultSlot,
} from "./types";
import { isFunction, partition, kebabCase } from "@innoai-tech/lodash";
import { Fragment as OriginFragment } from "vue";

import { type AnyType } from "@innoai-tech/typedef";

export interface ComponentOptions {
  name?: string;
  inheritAttrs?: boolean;
}

export const Fragment: Component<WithDefaultSlot> = OriginFragment as any;

export function component(
  setup: SetupFunction<{}>,
  options?: ComponentOptions,
): Component<{}>;
export function component<PropTypes extends Record<string, AnyType>>(
  propTypes: PropTypes,
  setup: SetupFunction<PropTypes>,
  options?: ComponentOptions,
): Component<PublicPropsOf<PropTypes>>;
export function component<PropTypes extends Record<string, AnyType>>(
  propTypesOrSetup: PropTypes | SetupFunction<PropTypes>,
  setupOrOptions?: SetupFunction<PropTypes> | ComponentOptions,
  options: ComponentOptions = {},
): Component<PublicPropsOf<PropTypes>> {
  const finalOptions = (options ?? setupOrOptions) as ComponentOptions;
  const finalSetup = (setupOrOptions ?? propTypesOrSetup) as SetupFunction<any>;
  const finalPropTypes = (
    isFunction(propTypesOrSetup) ? {} : propTypesOrSetup
  ) as Record<string, AnyType>;

  const [emits, props] = partition(Object.keys(finalPropTypes), (v: string) =>
    /^on[A-Z]/.test(v),
  );

  const emitsAndProps = {
    emits: emits.map((v) => kebabCase(v.slice("on".length))),
    props: props
      .filter((p) => !/^[$]/.test(p))
      .reduce((ret, prop) => {
        const d = finalPropTypes[prop]!;
        return {
          ...ret,
          [prop]: {
            default: () => {
              try {
                return d.create(undefined);
              } catch (e) {}
              return;
            },
            validator: (value: any) => {
              return d.validate(value);
            },
          },
        };
      }, {}),
  };

  return {
    get name() {
      return this.displayName ?? finalOptions.name;
    },
    set name(n: string) {
      finalOptions.name = n;
    },
    setup: (props: any, ctx: any) => finalSetup(props, ctx),
    emits: emitsAndProps.emits,
    props: emitsAndProps.props,
    inheritAttrs: finalOptions.inheritAttrs,
    propTypes: finalPropTypes,
  } as any;
}
