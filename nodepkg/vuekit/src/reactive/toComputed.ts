import { Observable } from "rxjs";
import {
  computed,
  type ComputedRef,
  type DebuggerOptions,
  onBeforeUnmount,
  shallowRef
} from "vue";

export interface ObservableWithValue<T> extends Observable<T> {
  value: T;
}

export function toComputed<T extends any>(debugOptions?: DebuggerOptions) {
  function computedObservable(
    ob$: ObservableWithValue<T>
  ): ComputedRef<T>;
  function computedObservable(
    ob$: Observable<T>,
    initialValue?: T
  ): ComputedRef<T | undefined>;
  function computedObservable(
    ob$: Observable<T> | ObservableWithValue<T>,
    initialValue?: T
  ): ComputedRef<T | undefined> {
    const ref = shallowRef((ob$ as any).value ?? initialValue);
    const sub = ob$.subscribe((v) => (ref.value = v));
    onBeforeUnmount(() => sub.unsubscribe());
    return computed(() => ref.value, debugOptions);
  }

  return computedObservable;
}
