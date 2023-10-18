import { Observable, type Observer, Subscription } from "rxjs";
import { onBeforeUnmount, onMounted } from "vue";

export function subscribeUntilUnmount<T>(
  observerOrNext?: Partial<Observer<T>> | ((value: T) => void),
) {
  return (ob$: Observable<T>) => {
    const sub = ob$.subscribe(observerOrNext);
    onBeforeUnmount(() => sub.unsubscribe());
  };
}

export function subscribeOnMountedUntilUnmount<T>(
  observerOrNext?: Partial<Observer<T>> | ((value: T) => void),
) {
  return (ob$: Observable<T>) => {
    let sub: Subscription;
    onMounted(() => (sub = ob$.subscribe(observerOrNext)));
    onBeforeUnmount(() => sub?.unsubscribe());
  };
}
