import {
  isFunction,
  isPlainObject,
  isUndefined,
  kebabCase,
  partition,
} from "es-toolkit/compat";
import { Fragment as OriginFragment } from "vue";
import type {
  Component,
  PublicPropsOf,
  SetupFunction,
  WithDefaultSlot,
} from "./vue";

import { type Type, isType } from "@innoai-tech/typedef";

export interface ComponentOptions {
  displayName?: string;
  name?: string;
  inheritAttrs?: boolean;

  [K: string]: any;
}

export const Fragment: Component<WithDefaultSlot> = OriginFragment as any;

const __component = Symbol("component");

export const isComponent = (o: any): o is Component<{}> => {
  return isPlainObject(o) && o[__component] === __component;
};

export const isPropTypes = (o: any): o is Record<string, Type> => {
  return isType(Object.values(o)[0]);
};

export function component(
  setup: SetupFunction<{}>,
  options?: ComponentOptions,
): Component<{}>;
export function component<Props extends {}>(
  setup: SetupFunction<Props>,
  options?: ComponentOptions,
): Component<Props>;
export function component<PropTypes extends Record<string, Type>>(
  propTypes: PropTypes,
  setup: SetupFunction<PublicPropsOf<PropTypes>>,
  options?: ComponentOptions,
): Component<PublicPropsOf<PropTypes>>;
export function component<Props extends {}>(...args: any[]): Component<Props> {
  let finalPropTypes: Record<string, Type> = {};
  let finalSetup: any = undefined;
  let finalOptions: Record<string, any> = {};

  for (const arg of args) {
    if (isFunction(arg)) {
      finalSetup = arg;
      continue;
    }

    if (isUndefined(finalSetup)) {
      finalPropTypes = arg;
    } else {
      finalOptions = arg;
    }
  }

  const [emits, props] = partition(Object.keys(finalPropTypes), (v: string) =>
    /^on[A-Z]/.test(v),
  );

  const emitsAndProps = {
    emits: [
      ...emits.map((v) => kebabCase(v.slice("on".length))),
      ...(finalOptions["emits"] ?? []),
    ],
    props: [
      ...props.filter((p) => !/^[$]/.test(p)),
      ...(finalOptions["props"] ?? []),
    ].reduce((ret, prop) => {
      const d = finalPropTypes[prop]!;

      if (d) {
        return {
          ...ret,
          [prop]: {
            default() {
              try {
                return d.create(undefined);
              } catch (e) {
                console.log(e);
              }
              return;
            },
            validator: (value: any) => {
              return d.validate(value);
            },
          },
        };
      }

      return {
        ...ret,
        [prop]: {
          default() {
            return undefined;
          },
        },
      };
    }, {}),
  };

  return {
    ...finalOptions,
    get name() {
      return (
        this.displayName ?? finalOptions["displayName"] ?? finalOptions["name"]
      );
    },
    set name(n: string) {
      finalOptions["name"] = n;
    },
    setup: (props: any, ctx: any) => finalSetup(props, ctx),
    emits: emitsAndProps.emits,
    props: emitsAndProps.props,
    inheritAttrs: finalOptions["inheritAttrs"],
    [__component]: __component,
  } as any;
}
