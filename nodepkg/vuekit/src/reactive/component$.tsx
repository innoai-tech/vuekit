import { component, type ComponentOptions } from "../component";
import { Observable } from "rxjs";
import { isFunction } from "@innoai-tech/lodash";
import { type Observables, toObservables } from "./toObservable";
import { RxSlot } from "./RxSlot";
import { type ZodTypeAny } from "zod";
import {
  type Component,
  type InternalEmitsOf,
  type InternalPropsOf,
  type PublicPropsOf,
  type InternalSlotsOf,
  type RenderFunction,
  type SetupContext
} from "../types";

export type ObservablesAndProps<Props extends Record<string, any>> =
  Observables<Props> & Omit<Props, keyof Observables<Props>>;

export type ObservableSetupFunction<
  PropTypes extends Record<string, ZodTypeAny>
> = (
  P: ObservablesAndProps<InternalPropsOf<PropTypes>>,
  ctx: SetupContext<InternalEmitsOf<PropTypes>, InternalSlotsOf<PropTypes>>
) => null | RenderFunction | Observable<RenderFunction>;

export function component$(
  setup: ObservableSetupFunction<{}>,
  options?: ComponentOptions
): Component<{}>;
export function component$<PropTypes extends Record<string, ZodTypeAny>>(
  propTypes: PropTypes,
  setup: ObservableSetupFunction<PropTypes>,
  options?: ComponentOptions
): Component<PublicPropsOf<PropTypes>>;
export function component$<PropTypes extends Record<string, ZodTypeAny>>(
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

      const renderFuncOrElem$ = finalSetup(
        new Proxy(
          {},
          {
            get(_, key: string) {
              return props[key] ?? (props$ as any)[key];
            }
          }
        ) as any,
        ctx
      );

      if (isFunction(renderFuncOrElem$)) {
        return renderFuncOrElem$;
      }

      if (renderFuncOrElem$) {
        return () => <RxSlot render$={renderFuncOrElem$} />;
      }

      return () => null;
    },
    finalOptions
  ) as any;
}
