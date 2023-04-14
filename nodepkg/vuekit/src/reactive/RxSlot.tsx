import { component, z } from "../component";
import { Observable, tap, map } from "rxjs";
import { type RenderFunction, shallowRef, type VNodeChild } from "vue";
import { rx } from "./rx";
import { subscribeUntilUnmount } from "./subscribeUntilUnmount";

export function render<T>(renderFunc: (value: T) => VNodeChild) {
  return map<T, RenderFunction>((v) => () => renderFunc(v));
}

export const RxSlot = component(
  {
    render$: z.custom<Observable<RenderFunction>>()
  },
  (props) => {
    const r = shallowRef<RenderFunction | null>(null);

    rx(
      props.render$,
      tap((renderFunc) => (r.value = renderFunc)),
      subscribeUntilUnmount()
    );

    return () => r.value?.();
  }
);
