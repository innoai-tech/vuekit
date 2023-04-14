import { Observable, type Observer } from "rxjs";
import { onBeforeUnmount } from "vue";

export function subscribeUntilUnmount<T>(observerOrNext?: Partial<Observer<T>> | ((value: T) => void)) {
  return (ob$: Observable<T>) => {
    const sub = ob$.subscribe(observerOrNext);
    onBeforeUnmount(() => sub.unsubscribe());
  };
}
