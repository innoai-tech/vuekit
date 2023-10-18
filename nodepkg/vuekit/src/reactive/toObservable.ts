import { isObservable, Observable, BehaviorSubject } from "rxjs";
import { watch } from "vue";
import { isFunction } from "@innoai-tech/lodash";

export const toObservable = <O extends {}, K extends keyof O>(
  obj: O,
  key: K,
): Observable<O[K]> => {
  const value$ = new BehaviorSubject(obj[key]);
  watch(
    () => obj[key],
    (v) => value$.next(v),
  );
  return value$;
};

export type Function = (...args: any[]) => any;

export type Observables<O extends {}> = {
  [K in keyof O as K extends string
    ? O[K] extends Function | Observable<any>
      ? never
      : `${K}$`
    : never]-?: Observable<O[K]>;
} & {
  [K in keyof O as K extends string
    ? O[K] extends Function | Observable<any>
      ? K
      : never
    : never]: O[K];
};

export const toObservables = <O extends {}>(obj: O): Observables<O> => {
  const refs: Record<string, any> = {};

  for (const k in obj) {
    if (isFunction(obj[k]) || isObservable(obj[k])) {
      refs[k] = obj[k];
      continue;
    }
    refs[`${k}$`] = toObservable(obj, k);
  }

  return refs as Observables<O>;
};
