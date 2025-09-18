import {
  type Context,
  createProvider,
  ImmerBehaviorSubject,
  type Infer,
  type InferSchema,
  JSONPointer,
  rx,
  t,
  type Type,
} from "@innoai-tech/vuekit";
import {
  get,
  isArray,
  isFunction,
  isNumber,
  isString,
  last,
  set,
} from "@innoai-tech/lodash";
import { distinctUntilChanged, map, Observable } from "rxjs";

export enum Folded {
  NONE = 0,
  EXACT = 1,
  PREFIX = 2,
}

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
    if (path.length == 0) {
      return this.initials;
    }
    return get(this.initials, path);
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
    console.log("[json-editor]", "update", path);

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

    console.log("[json-editor]", "delete", path);

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
  #foldedPointerPrefixes$ = new ImmerBehaviorSubject<Record<string, boolean>>(
    {},
  );

  get error$(): Observable<Record<string, any>> {
    return this.#error$;
  }

  get foldedPointerPrefixes$(): Observable<Record<string, any>> {
    return this.#foldedPointerPrefixes$;
  }

  errorAt$(pointerOrPath: string | Array<any>) {
    const pointer = this.#toPointer(pointerOrPath);

    return rx(
      this.error$,
      map((errors) => errors[pointer]),
      distinctUntilChanged(),
    );
  }

  foldedPrefix$(pointerOrPath: string | Array<any>) {
    const pointer = this.#toPointer(pointerOrPath);

    return rx(
      this.foldedPointerPrefixes$,
      map((foldedPointers) => {
        for (const [p] of Object.entries(foldedPointers)) {
          if (p === pointer) {
            return Folded.EXACT;
          }
          if (pointer.startsWith(p)) {
            return Folded.PREFIX;
          }
        }
        return Folded.NONE;
      }),
      distinctUntilChanged(),
    );
  }

  #toPointer(pointerOrPath: string | Array<any>) {
    if (isString(pointerOrPath)) {
      return pointerOrPath;
    }
    return JSONPointer.create(pointerOrPath);
  }

  toggleFold(pointerOrPath: string | Array<any>) {
    const pointer = this.#toPointer(pointerOrPath);

    this.#foldedPointerPrefixes$.next((foldedPointers) => {
      if (Object.hasOwn(foldedPointers, pointer)) {
        delete foldedPointers[pointer];
      } else {
        foldedPointers[pointer] = true;
      }
    });
  }

  setError(pointerOrPath: string | Array<any>, error: any) {
    const pointer = this.#toPointer(pointerOrPath);

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

export type ValueContext = Context & { readOnly?: boolean };

export const JSONEditorSlotsProvider = createProvider(() => {
  return {} as {
    $value?: (
      _t: Type,
      _value: any,
      _ctx: ValueContext,
    ) => JSX.Element | null | undefined;
  };
});
