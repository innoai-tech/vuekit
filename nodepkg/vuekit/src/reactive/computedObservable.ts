import { Observable } from "rxjs";
import { computed, type ComputedRef, onUnmounted, shallowRef } from "vue";

export interface ObservableWithValue<T> extends Observable<T> {
  value: T;
}

export function computedObservable<T extends any>(
  ob$: ObservableWithValue<T>
): ComputedRef<T>;
export function computedObservable<T extends any>(
  ob$: Observable<T>,
  initialValue?: T
): ComputedRef<T | undefined>;
export function computedObservable<T extends any>(
  ob$: Observable<T> | ObservableWithValue<T>,
  initialValue?: T
): ComputedRef<T | undefined> {
  const ref = shallowRef((ob$ as any).value ?? initialValue);
  const sub = ob$.subscribe((v) => (ref.value = v));
  onUnmounted(() => sub.unsubscribe());
  return computed(() => ref.value);
}
