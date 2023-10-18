import { customRef, type Ref } from "vue";
import { ImmerBehaviorSubject, type ImmerSubject } from "./Immer";
import { isFunction } from "@innoai-tech/lodash";
import { produce } from "immer";

export type ObservableRef<T> = Ref<T> & ImmerSubject<T>;

export const observableRef = <T extends any>(value: T): ObservableRef<T> => {
  const store$ = new ImmerBehaviorSubject(value);

  const ref = customRef<T>((track, trigger) => {
    return {
      get() {
        track();
        return store$.value;
      },
      set(newValue: T) {
        if (!Object.is(newValue, store$.value)) {
          store$.next(newValue);
          trigger();
        }
      },
    };
  });

  return new Proxy(store$, {
    get(_: any, p: string | symbol): any {
      if (p == "next") {
        return (valueOrUpdater: ((v: T) => void) | T) => {
          ref.value = isFunction(valueOrUpdater)
            ? produce(store$.value, valueOrUpdater)
            : valueOrUpdater;
        };
      }
      if (p === "value") {
        return ref.value;
      }
      return (store$ as any)[p] ?? (ref as any)[p];
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
