import { component, z } from "../component";
import { Observable, tap } from "rxjs";
import { shallowRef } from "vue";
import { rx } from "./rx";
import { subscribeUntilUnmount } from "./subscribeUntilUnmount";

export const RxSlot = component(
  {
    elem$: z.custom<Observable<any>>()
  },
  (props) => {
    const r = shallowRef<JSX.Element | null>(null);
    rx(
      props.elem$,
      tap((elem) => (r.value = elem)),
      subscribeUntilUnmount()
    );
    return () => r.value;
  }
);
