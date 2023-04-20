import { component, z } from "../component";
import { map, Observable, tap } from "rxjs";
import { type RenderFunction, shallowRef, type VNodeChild } from "vue";
import { rx } from "./rx";
import { subscribeUntilUnmount } from "./subscribe";
import { type Slots } from "../types";

export function render<T extends any>(renderFunc: (value: T) => VNodeChild) {
  return (input$: Observable<T>): JSX.Element => {
    return (
      <RxSlot
        elem$={input$.pipe(map<T, RenderFunction>((v) => () => renderFunc(v)))}
      >
        {{}}
      </RxSlot>
    );
  };
}

/**
 * When elem$ with slots, slots must pass as children to trigger rerender
 * <RxSlot elem$={elem$}>{{}}</RxSlot>
 */
export const RxSlot = component(
  {
    elem$: z.custom<Observable<RenderFunction>>(),
    $default: z.custom<Slots>()
  },
  (props, {}) => {
    const r = shallowRef<RenderFunction | null>(null);

    rx(
      props.elem$,
      tap((renderFunc) => (r.value = renderFunc)),
      subscribeUntilUnmount()
    );

    return () => {
      return r.value?.();
    };
  },
  {
    name: "RxSlot"
  }
);
