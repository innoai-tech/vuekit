import {
  component,
  type ComponentOptions,
} from "../component";
import { Observable } from "rxjs";
import { isFunction } from "@innoai-tech/lodash";
import { type Observables, toObservables } from "./toObservable";
import { Slot } from "./Slot";
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

export type ObservableSetupFunction<PropTypes extends Record<string, ZodTypeAny>> = (
  P: Observables<InternalPropsOf<PropTypes>>,
  ctx: SetupContext<InternalEmitsOf<PropTypes>, InternalSlotsOf<PropTypes>>
) => null | RenderFunction | Observable<JSX.Element | null>;

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
  propTypesOrSetup:
    | PropTypes
    | ObservableSetupFunction<PropTypes>,
  setupOrOptions?:
    | ObservableSetupFunction<PropTypes>
    | ComponentOptions,
  options: ComponentOptions = {}
): Component<PublicPropsOf<PropTypes>> {
  const finalOptions = (options ?? setupOrOptions) as ComponentOptions;
  const finalSetup = (setupOrOptions ??
    propTypesOrSetup) as ObservableSetupFunction<PropTypes>;

  const finalPropTypes = (propTypesOrSetup ?? {}) as PropTypes;

  return component(
    finalPropTypes,
    (props, ctx) => {
      const renderFuncOrElem$ = finalSetup(toObservables(props), ctx);

      if (isFunction(renderFuncOrElem$)) {
        return renderFuncOrElem$;
      }

      if (renderFuncOrElem$) {
        return () => <Slot elem$={renderFuncOrElem$} />;
      }

      return () => null;
    },
    finalOptions
  ) as any;
}
