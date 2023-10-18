import { Observable } from "rxjs";
import {
  computed,
  type ComputedRef,
  type DebuggerOptions,
  shallowRef,
} from "vue";
import { rx } from "./rx";
import { subscribeUntilUnmount } from "./subscribe";

export interface ObservableWithValue<T> extends Observable<T> {
  value: T;
}

export function toComputed<T extends any>(debugOptions?: DebuggerOptions) {
  function computedObservable(ob$: ObservableWithValue<T>): ComputedRef<T>;
  function computedObservable(
    ob$: Observable<T>,
    initialValue?: T,
  ): ComputedRef<T | undefined>;
  function computedObservable(
    ob$: Observable<T> | ObservableWithValue<T>,
    initialValue?: T,
  ): ComputedRef<T | undefined> {
    const ref = shallowRef((ob$ as any).value ?? initialValue);
    rx(
      ob$,
      subscribeUntilUnmount((v) => (ref.value = v)),
    );
    return computed(() => ref.value, debugOptions);
  }

  return computedObservable;
}
