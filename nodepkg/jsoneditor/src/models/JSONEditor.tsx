import {
  type Context,
  createProvider,
  ImmerBehaviorSubject,
  type Infer,
  type InferSchema,
  JSONPointer,
  t,
  type Type,
} from "@innoai-tech/vuekit";
import {
  get,
  isArray,
  isFunction,
  isNumber,
  isPlainObject,
  isUndefined,
  last,
  set,
} from "@innoai-tech/lodash";
import { Observable } from "rxjs";

export enum DirtyType {
  NONE = "NONE",
  ADD = "ADD",
  EDIT = "EDIT",
  DELETE = "DELETE",
}

export class JSONEditor<T extends Type> extends Observable<Infer<T>> {
  static of<T extends Type>(typedef: T, initials?: Partial<Infer<T>>) {
    return new JSONEditor<Type<Infer<T>, InferSchema<T>>>(
      typedef,
      initials ?? (typedef.type == "array" ? [] : {}),
    );
  }

  #values$ = new ImmerBehaviorSubject<Infer<T>>({});

  constructor(
    public typedef: T,
    protected initials: Infer<T>,
  ) {
    super((subscriber) => {
      const sub = this.#values$.subscribe(subscriber);

      return () => {
        sub.unsubscribe();
      };
    });

    this.#values$.next(initials);
  }

  initialsAt(path: any[]) {
    return get(this.initials, path);
  }

  dirty(value: any, path: any[]): DirtyType {
    if (!isPlainObject(value)) {
      const prev = get(this.initials, path);
      if (isUndefined(prev) && !isUndefined(value)) {
        return DirtyType.ADD;
      }
      if (!isUndefined(prev) && isUndefined(value)) {
        return DirtyType.DELETE;
      }
      if (!isUndefined(prev) && !isUndefined(value) && prev !== value) {
        return DirtyType.EDIT;
      }
    }
    return DirtyType.NONE;
  }

  update<T>(path: Array<string | number>, v: T): void;
  update<T>(
    path: Array<string | number>,
    mut: (value: T) => void,
    defaultValue: T,
  ): void;
  update<T>(
    path: Array<string | number>,
    valueOrMut: T | ((value: T) => void),
    defaultValue?: T,
  ): void {
    this.#error$.next({});

    if (path.length == 0) {
      this.#values$.next(valueOrMut);
      return;
    }

    if (isFunction(valueOrMut)) {
      this.#values$.next((values: any) => {
        const value = get(values, path, defaultValue);
        valueOrMut(value);
        set(values, path, value);
      });
    } else {
      this.#values$.next((values: any) => {
        set(values, path, valueOrMut);
      });
    }
  }

  delete(path: Array<string | number>) {
    if (path.length == 0) {
      return;
    }

    this.#values$.next((values) => {
      const propOrIdx = last(path)!;

      if (isNumber(propOrIdx)) {
        const parent = path.slice(0, path.length - 1);
        const node = parent.length > 0 ? get(values, parent) : values;

        if (isArray(node)) {
          node.splice(propOrIdx, 1);
          return;
        }
      }

      const parent = path.slice(0, path.length - 1);
      const node = parent.length > 0 ? get(values, parent) : values;
      delete node[propOrIdx];
    });
  }

  #error$ = new ImmerBehaviorSubject<Record<string, any>>({});

  get error$(): Observable<Record<string, any>> {
    return this.#error$;
  }

  setError(path: Array<any>, error: any) {
    const pointer = JSONPointer.create(path);

    this.#error$.next((errors) => {
      if (error === null) {
        delete errors[pointer];
      } else {
        errors[pointer] = error;
      }
    });
  }
}

export const JSONEditorProvider = createProvider(
  () => new JSONEditor<Type<any, any>>(t.object(), {}),
);

export const JSONEditorSlotsProvider = createProvider(() => {
  return {} as {
    $value?: (
      _t: Type,
      _value: any,
      _ctx: Context & { readOnly?: boolean },
    ) => JSX.Element | null | undefined;
  };
});
