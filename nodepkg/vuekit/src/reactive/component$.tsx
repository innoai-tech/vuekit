import { component, type ComponentOptions } from "../component";
import { type Observables, toObservables } from "./toObservable";
import { type AnyType } from "@innoai-tech/typedef";
import {
  type Component,
  type InternalEmitsOf,
  type InternalPropsOf,
  type PublicPropsOf,
  type InternalSlotsOf,
  type SetupContext
} from "../types";
import { render } from "./RxSlot";
import type { RenderFunction } from "vue";
import { isFunction } from "@innoai-tech/lodash";

export { render };

export type ObservablesAndProps<Props extends Record<string, any>> =
  Observables<Props> & Omit<Props, keyof Observables<Props>>;

export type ObservableSetupFunction<
  PropTypes extends Record<string, AnyType>
> = (
  P: ObservablesAndProps<InternalPropsOf<PropTypes>>,
  ctx: SetupContext<
    InternalEmitsOf<PropTypes>,
    InternalSlotsOf<PropTypes>
  > & { render: typeof render }
) => RenderFunction | JSX.Element | null;

export function component$(
  setup: ObservableSetupFunction<{}>,
  options?: ComponentOptions
): Component<{}>;
export function component$<PropTypes extends Record<string, AnyType>>(
  propTypes: PropTypes,
  setup: ObservableSetupFunction<PropTypes>,
  options?: ComponentOptions
): Component<PublicPropsOf<PropTypes>>;
export function component$<PropTypes extends Record<string, AnyType>>(
  propTypesOrSetup: PropTypes | ObservableSetupFunction<PropTypes>,
  setupOrOptions?: ObservableSetupFunction<PropTypes> | ComponentOptions,
  options: ComponentOptions = {}
): Component<PublicPropsOf<PropTypes>> {
  const finalOptions = (options ?? setupOrOptions) as ComponentOptions;
  const finalSetup = (setupOrOptions ??
    propTypesOrSetup) as ObservableSetupFunction<PropTypes>;

  const finalPropTypes = (propTypesOrSetup ?? {}) as PropTypes;

  return component(
    finalPropTypes,
    (props, ctx) => {
      const props$ = toObservables(props);

      const p = new Proxy(
        {},
        {
          get(_, key: string) {
            return (props as any)[key] ?? (props$ as any)[key];
          }
        }
      ) as any;

      const c = new Proxy(
        {},
        {
          get(_, key: string) {
            if (key == "render") {
              return render;
            }
            return (ctx as any)[key];
          }
        }
      ) as any;

      const renderFuncOrVNode = finalSetup(p, c);

      if (isFunction(renderFuncOrVNode)) {
        return renderFuncOrVNode;
      }

      return () => renderFuncOrVNode;
    },
    finalOptions
  ) as any;
}
