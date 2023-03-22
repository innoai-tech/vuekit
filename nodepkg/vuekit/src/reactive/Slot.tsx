import { component, z } from "../component";
import { Observable, tap } from "rxjs";
import { ref } from "vue";
import { subscribe } from "./subscribe";

export const Slot = component(
  {
    elem$: z.custom<Observable<any>>(),
  },
  (props) => {
    const r = ref<JSX.Element | null>(null);
    subscribe(props.elem$.pipe(tap((elem) => (r.value = elem))));
    return () => r.value ?? null;
  }
);
