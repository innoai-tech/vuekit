import { isFunction, isUndefined } from "@innoai-tech/lodash";
import { type AnyType } from "@innoai-tech/typedef";
import type { RenderFunction } from "vue";
import { type ComponentOptions, component } from "../component";
import {
  type Component,
  type InternalEmitsOf,
  type InternalPropsOf,
  type InternalSlotsOf,
  type PublicPropsOf,
  type SetupContext,
} from "../vue";
import { render } from "./RxSlot";
import { type Observables, toObservables } from "./toObservable";

export { render };

export type ObservablesAndProps<Props extends Record<string, any>> =
  Observables<Props> & Omit<Props, keyof Observables<Props>>;

export type ObservableSetupFunction<Props extends Record<string, any>> = (
  props: ObservablesAndProps<InternalPropsOf<Props>>,
  ctx: SetupContext<InternalEmitsOf<Props>, InternalSlotsOf<Props>> & {
    render: typeof render;
  },
) => RenderFunction | JSX.Element | null;

export function component$(
  setup: ObservableSetupFunction<{}>,
  options?: ComponentOptions,
): Component<{}>;
export function component$<Props extends Record<string, any>>(
  setup: ObservableSetupFunction<Props>,
  options?: ComponentOptions,
): Component<Props>;
export function component$<PropTypes extends Record<string, AnyType>>(
  propTypes: PropTypes,
  setup: ObservableSetupFunction<PublicPropsOf<PropTypes>>,
  options?: ComponentOptions,
): Component<PublicPropsOf<PropTypes>>;
export function component$<Props extends Record<string, any>>(
  ...args: any[]
): Component<Props> {
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

  return component(
    finalPropTypes,
    (props, ctx): RenderFunction => {
      const props$ = toObservables(props);

      const p = new Proxy(
        {},
        {
          get(_, key: string) {
            return (props as any)[key] ?? (props$ as any)[key];
          },
        },
      ) as any;

      const c = new Proxy(
        {},
        {
          get(_, key: string) {
            if (key === "render") {
              return render;
            }
            return (ctx as any)[key];
          },
        },
      ) as any;

      const renderFuncOrVNode = finalSetup(p, c);

      if (isFunction(renderFuncOrVNode)) {
        return renderFuncOrVNode;
      }

      return () => renderFuncOrVNode;
    },
    finalOptions,
  ) as any;
}
