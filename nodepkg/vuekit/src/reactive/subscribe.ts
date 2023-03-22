import { Observable } from "rxjs";
import { onUnmounted } from "vue";

export function subscribe<T extends any>(ob$: Observable<T>) {
  const sub = ob$.subscribe();
  onUnmounted(() => sub.unsubscribe());
}
