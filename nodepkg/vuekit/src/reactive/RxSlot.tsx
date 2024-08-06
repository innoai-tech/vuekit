import { t } from "@innoai-tech/typedef";
import { Observable, map, tap } from "rxjs";
import { component } from "../component";
import { type RenderFunction, type VNodeChild, shallowRef } from "../vue.ts";
import { rx } from "./rx";
import { subscribeUntilUnmount } from "./subscribe";

export function render<T>(renderFunc: (value: T) => VNodeChild) {
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
const RxSlot = component(
  {
    elem$: t.custom<Observable<RenderFunction>>(),

    $default: t.custom<{}>(),
  },
  (props, _) => {
    const r = shallowRef<RenderFunction | null>(null);

    rx(
      props.elem$,
      tap((renderFunc) => {
        r.value = renderFunc;
      }),
      subscribeUntilUnmount(),
    );

    return () => {
      return r.value?.();
    };
  },
  {
    name: "RxSlot",
  },
);
