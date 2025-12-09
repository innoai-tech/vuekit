import { isFunction } from "es-toolkit/compat";
import { produce } from "immer";
import { Observable, Subject } from "rxjs";

export { produce };

export interface ImmerSubject<T> extends Observable<T> {
  value: T;

  next(updater: (v: T) => void, defaultValue?: T): void;

  next(value: T): void;
}

export class ImmerBehaviorSubject<T> extends Observable<T> implements ImmerSubject<T> {
  static seed<T>(seed: T) {
    return new ImmerBehaviorSubject<T>(seed);
  }

  _value: T;
  _subject$ = new Subject<T>();

  constructor(seed: T) {
    super((subscriber) => {
      const sub = this._subject$.subscribe(subscriber);
      this._subject$.next(this._value);

      return () => {
        sub.unsubscribe();
      };
    });

    this._value = seed;
  }

  get value(): T {
    return this._value;
  }

  next(updater: (v: T) => void, defaultValue?: T): void;
  next(value: T): void;
  next(valueOrUpdater: T | ((v: T) => void), defaultValue?: T): void {
    const v = isFunction(valueOrUpdater)
      ? produce(this._value ?? defaultValue, valueOrUpdater)
      : valueOrUpdater;

    if (!Object.is(v, this._value)) {
      this._subject$.next((this._value = v!));
    }
  }
}
