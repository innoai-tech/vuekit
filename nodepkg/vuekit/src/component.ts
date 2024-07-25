import { isFunction, isPlainObject, isUndefined, kebabCase, partition } from "@innoai-tech/lodash";
import { Fragment as OriginFragment } from "vue";
import type {
  Component,
  PublicPropsOf,
  SetupFunction,
  WithDefaultSlot
} from "./vue";

import { type AnyType, Type } from "@innoai-tech/typedef";

export interface ComponentOptions {
  displayName?: string;
  name?: string;
  inheritAttrs?: boolean;

  [K: string]: any;
}

export const Fragment: Component<WithDefaultSlot> = OriginFragment as any;

const __component = Symbol("component");

export const isComponent = (o: any): o is Component<{}> => {
  return isPlainObject(o) && o["__component"] === __component;
};

export const isPropTypes = (o: any): o is Record<string, AnyType> => {
  return isPlainObject(o) && Object.values(o)[0] instanceof Type;
};

export function component<Props extends {}>(
  setup: SetupFunction<Props>,
  options?: ComponentOptions
): Component<Props>;
export function component<PropTypes extends Record<string, AnyType>>(
  propTypes: PropTypes,
  setup: SetupFunction<PublicPropsOf<PropTypes>>,
  options?: ComponentOptions
): Component<PublicPropsOf<PropTypes>>;
export function component<Props extends {}>(...args: any[]): Component<Props> {
  let finalPropTypes: Record<string, AnyType> = {};
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
    /^on[A-Z]/.test(v)
  );

  const emitsAndProps = {
    emits: [
      ...emits.map((v) => kebabCase(v.slice("on".length))),
      ...(finalOptions["emits"] ?? [])
    ],
    props: [
      ...props.filter((p) => !/^[$]/.test(p)),
      ...(finalOptions["props"] ?? [])
    ].reduce((ret, prop) => {
      const d = finalPropTypes[prop]!;

      if (d) {
        return {
          ...ret,
          [prop]: {
            default: () => {
              try {
                return d.create(undefined);
              } catch (e) {
              }
              return;
            },
            validator: (value: any) => {
              return d.validate(value);
            }
          }
        };
      }

      return {
        ...ret,
        [prop]: {
          default: () => {
            return undefined;
          }
        }
      };
    }, {})
  };

  return {
    ...finalOptions,
    get name() {
      return this.displayName ?? finalOptions["displayName"] ?? finalOptions["name"];
    },
    set name(n: string) {
      finalOptions["name"] = n;
    },
    setup: (props: any, ctx: any) => finalSetup(props, ctx),
    emits: emitsAndProps.emits,
    props: emitsAndProps.props,
    inheritAttrs: finalOptions["inheritAttrs"],
    propTypes: finalPropTypes,
    __component
  } as any;
}
