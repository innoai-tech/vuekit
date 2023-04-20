import { BehaviorSubject, Subject } from "rxjs";
import { customRef, type Ref } from "vue";

export type ObservableRef<T> = Ref<T> & Subject<T>;

export const observableRef = <T extends any>(value: T): ObservableRef<T> => {
  const value$ = new BehaviorSubject(value);

  const ref = customRef<T>((track, trigger) => {
    return {
      get() {
        track();
        return value$.value;
      },
      set(newValue: T) {
        if (!Object.is(newValue, value$.value)) {
          value$.next(newValue);
          trigger();
        }
      },
    };
  });

  return new Proxy(value$, {
    get(value$: any, p: string | symbol): any {
      if (p == "next") {
        return (v: T) => {
          ref.value = v;
        };
      }
      if (p === "value") {
        return ref.value;
      }
      return value$[p] ?? (ref as any)[p];
    },
    set(value$: any, p: string | symbol, newValue: any): boolean {
      if (p === "value") {
        ref.value = newValue;
        return true;
      }
      value$[p] = newValue;
      return true;
    },
  });
};
