import { type Observable, BehaviorSubject } from "rxjs";
import { customRef, type Ref } from "vue";

export type ObservableRef<T> = Ref<T> & Observable<T>;

const createObservableRef = <T extends any>(
  ob$: Observable<T>,
  ref: Ref<T>
): ObservableRef<T> => {
  return new Proxy(ob$, {
    get(target: any, p: string | symbol): any {
      if (p === "value") {
        return ref.value;
      }
      return target[p];
    },
    set(target: any, p: string | symbol, newValue: any): boolean {
      if (p === "value") {
        ref.value = newValue;
        return true;
      }
      target[p] = newValue;
      return true;
    },
  });
};

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

  return createObservableRef(value$, ref);
};
