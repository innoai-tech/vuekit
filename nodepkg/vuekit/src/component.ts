import type { PublicPropsOf, Component, SetupFunction } from "./types";
import { isFunction, partition, kebabCase } from "@innoai-tech/lodash";
import { type ZodTypeAny, z } from "zod";

export { z };

export interface ComponentOptions {
  name?: string;
  inheritAttrs?: boolean;
}

export function component(
  setup: SetupFunction<{}>,
  options?: ComponentOptions
): Component<{}>;
export function component<PropTypes extends Record<string, ZodTypeAny>>(
  propTypes: PropTypes,
  setup: SetupFunction<PropTypes>,
  options?: ComponentOptions
): Component<PublicPropsOf<PropTypes>>;
export function component<PropTypes extends Record<string, ZodTypeAny>>(
  propTypesOrSetup: PropTypes | SetupFunction<PropTypes>,
  setupOrOptions?: SetupFunction<PropTypes> | ComponentOptions,
  options: ComponentOptions = {}
): Component<PublicPropsOf<PropTypes>> {
  const finalOptions = (options ?? setupOrOptions) as ComponentOptions;
  const finalSetup = (setupOrOptions ?? propTypesOrSetup) as SetupFunction<any>;
  const finalPropTypes = (
    isFunction(propTypesOrSetup) ? {} : propTypesOrSetup
  ) as Record<string, ZodTypeAny>;

  const [emits, props] = partition(Object.keys(finalPropTypes), (v: string) =>
    /^on[A-Z]/.test(v)
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
              return d.parse(undefined);
            },
            validator: (value: any) => d.safeParse(value).success
          }
        };
      }, {})
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
    propTypes: finalPropTypes
  } as any;
}
