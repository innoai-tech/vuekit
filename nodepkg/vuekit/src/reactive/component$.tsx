import { type SetupContext } from "vue";
import {
  component,
  type Component,
  type ComponentOptions,
  type Emits,
  type RenderFunction,
} from "../component";
import { Observable } from "rxjs";
import { isFunction } from "@innoai-tech/lodash";
import { type Observables, toObservables } from "./toObservable";
import { Slot } from "./Slot";
import { type ZodTypeAny } from "zod";
import {
  type EmitsOf,
  type InternalPropsOf,
  type PublicPropsOf,
} from "../tshelper";

export type ObservableSetupFunction<P extends {}, E extends Emits> = (
  P: Observables<P>,
  ctx: SetupContext<E>
) => null | RenderFunction | Observable<JSX.Element | null>;

export function component$(
  setup: ObservableSetupFunction<{}, {}>,
  options?: ComponentOptions
): Component<{}, {}>;
export function component$<PropTypes extends Record<string, ZodTypeAny>>(
  propTypes: PropTypes,
  setup: ObservableSetupFunction<
    InternalPropsOf<PropTypes>,
    EmitsOf<PropTypes>
  >,
  options?: ComponentOptions
): Component<PublicPropsOf<PropTypes>, EmitsOf<PropTypes>>;
export function component$<PropTypes extends Record<string, ZodTypeAny>>(
  propTypesOrSetup:
    | PropTypes
    | ObservableSetupFunction<InternalPropsOf<PropTypes>, EmitsOf<PropTypes>>,
  setupOrOptions?:
    | ObservableSetupFunction<InternalPropsOf<PropTypes>, EmitsOf<PropTypes>>
    | ComponentOptions,
  options: ComponentOptions = {}
): Component<PublicPropsOf<PropTypes>, EmitsOf<PropTypes>> {
  const finalOptions = (options ?? setupOrOptions) as ComponentOptions;
  const finalSetup = (setupOrOptions ??
    propTypesOrSetup) as ObservableSetupFunction<
    InternalPropsOf<PropTypes>,
    EmitsOf<PropTypes>
  >;

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
