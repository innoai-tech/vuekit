import { BehaviorSubject } from "rxjs";
import { produce } from "immer";
import { isFunction } from "@innoai-tech/lodash";
import { type Observable } from "rxjs";

export { produce };

export interface ImmerSubject<T> extends Observable<T> {
  next(valueOrUpdater: T | ((v: T) => void)): void;
}

export class ImmerBehaviorSubject<T>
  extends BehaviorSubject<T>
  implements ImmerSubject<T> {
  override next(valueOrUpdater: T | ((v: T) => void)) {
    const v = isFunction(valueOrUpdater)
      ? produce(this.value, valueOrUpdater)
      : valueOrUpdater;
    if (!Object.is(v, this.value)) {
      super.next(v);
    }
  }
}
