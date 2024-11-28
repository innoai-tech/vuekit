import { get, isFunction, isPlainObject, isString, isUndefined, set } from "@innoai-tech/lodash";
import {
  type Component,
  EmptyContext,
  ImmerBehaviorSubject,
  type ImmerSubject,
  JSONPointer,
  rx,
  Schema,
  type Type
} from "@innoai-tech/vuekit";
import { distinctUntilChanged, map, Observable, Subject } from "rxjs";


export class FormData<T extends {}> extends Subject<T> {
  static of<T extends {}>(
    schema: Type<T>,
    initials: Partial<T> | (() => Partial<T>)
  ) {
    return new FormData<T>(schema, () =>
      isFunction(initials) ? initials() : initials
    );
  }

  public readonly inputs$: ImmerBehaviorSubject<Partial<T>>;

  constructor(
    public typedef: Type<T>,
    initials: () => Partial<T>
  ) {
    super();

    this.inputs$ = new ImmerBehaviorSubject<Partial<T>>(
      initials() ?? {}
    );
  }

  get inputs() {
    return this.inputs$.value;
  }

  #fields = new Map<string, Field>();

  field(pointerOrPath: any[] | string) {
    return this.#fields.get(isString(pointerOrPath) ? pointerOrPath : JSONPointer.create(pointerOrPath));
  }

  delete(pointerOrPath: any[] | string) {
    return this.#fields.delete(isString(pointerOrPath) ? pointerOrPath : JSONPointer.create(pointerOrPath));
  }

  * fields<T extends Type>(
    typedef: T,
    value = this.inputs$.value,
    path: any[] = []
  ): Iterable<Field> {
    for (const [nameOrIdx, _, t] of typedef.entries(value, EmptyContext)) {
      // skip RecordKey
      if (nameOrIdx === Schema.RecordKey) {
        continue;
      }

      if (t.type === "never") {
        continue;
      }

      const p = [...path, nameOrIdx];

      const name = JSONPointer.create(p);

      let f = this.#fields.get(name);
      if (!f) {
        f = new FieldImpl(this, t, p);
        this.#fields.set(name, f);
      }

      yield f;
    }
  }

  submit = () => {
    const values = {};

    let hasError = false;

    for (const [_, f] of this.#fields) {
      f.blur();

      if (f.state.error) {
        hasError = true;
        continue;
      }

      const value = f.input;

      const err = f.validate(value);

      if (err) {
        f.next((state) => {
          state.error = err;
        });
        hasError = true;
        continue;
      }

      if (!isUndefined(value)) {
        if (isPlainObject(value)) {
          set(values, f.path, { ...value });
        } else {
          set(values, f.path, value);
        }
      }
    }

    if (hasError) {
      return;
    }

    this.next(values as any);
  };

  reset() {
    for (let [_, f] of this.#fields) {
      f.reset();
    }
  }

  setErrors = (errors: Record<string, string[]> = {}) => {
    for (const [pointer, error] of Object.entries(errors)) {
      for (const [instancePath, f] of this.#fields) {
        if (instancePath == pointer) {
          f.next((state) => {
            state.error = error;
          });
        }
      }
    }
  };
}

export interface InputComponentProps<T> {
  readOnly?: boolean;
  field$: Field<T>;
}

export interface FieldMeta<T> {
  label?: string;
  hint?: string;
  readOnlyWhenInitialExist?: boolean;
  hidden?: boolean;
  inputBy?: Component<InputComponentProps<any>>;
  valueDisplay?: (value: T, field$: Field<T>) => JSX.Element | string;

  [K: string]: any;
}

export interface FieldState {
  initial?: any;
  focus?: boolean;
  visited?: boolean;
  touched?: boolean;
  dirty?: boolean;
  error?: string[] | null;
}

export interface Field<T extends any = any> extends ImmerSubject<FieldState> {
  name: string;
  path: any[];
  form$: FormData<{}>;

  input: T | undefined;
  input$: Observable<T | null>;

  meta: FieldMeta<T>;
  optional: boolean;

  state: FieldState;
  typedef: Type;

  blur: () => void;
  focus: () => void;

  update: (v: T) => void;
  reset: () => void;
  destroy: () => void;

  validate(value: any): string[] | undefined;
}

class FieldImpl<T extends any = any>
  extends ImmerBehaviorSubject<FieldState>
  implements Field<T> {
  static defaultValue = (def: Type) => {
    try {
      return def.create(undefined);
    } catch (e) {
      return;
    }
  };

  constructor(
    public readonly form$: FormData<any>,
    public readonly typedef: Type,
    public readonly path: Array<string | number>,
    public readonly pointer = JSONPointer.create(path)
  ) {
    super({
      initial: get(form$.inputs$.value, path, FieldImpl.defaultValue(typedef))
    });
  }

  get input(): T | undefined {
    return get(this.form$.inputs$.value, this.path, FieldImpl.defaultValue(this.typedef)) as any;
  }

  get meta(): FieldMeta<T> {
    return this.typedef.meta;
  }

  get state() {
    return this.value;
  }

  get name() {
    return this.pointer;
  }

  #optional?: boolean;
  get optional() {
    if (typeof this.#optional === "undefined") {
      this.#optional = !this.validate(undefined);
    }
    return this.#optional;
  }

  #input$?: Observable<T>;

  get input$(): Observable<T> {
    if (typeof this.#input$ === "undefined") {
      this.#input$ = rx(
        this.form$.inputs$,
        map(
          (v) => get(v, this.path, FieldImpl.defaultValue(this.typedef)) as any
        ),
        distinctUntilChanged()
      );
    }
    return this.#input$;
  }

  focus = () => {
    this.next((state) => {
      state.focus = true;
      state.visited = true;
    });
  };

  blur = () => {
    this.next((state: FieldState) => {
      state.focus = false;
      state.touched = true;
    });
  };

  reset = () => {
    this.form$.inputs$.next((inputs) => {
      set(inputs, this.path, this.value.initial);
    });

    this.next({ initial: this.value.initial });
  };

  update = (v: T) => {
    this.form$.inputs$.next((inputs) => {
      set(inputs, this.path, v);
    });

    this.next((state) => {
      state.dirty = v !== state.initial;
      state.error = this.validate(v) ?? null;
    });
  };

  validate(value: any): string[] | undefined {
    const v =
      this.typedef.type === "array" && !isUndefined(value)
        ? value.filter((v: any) => !isUndefined(v))
        : value;

    const [err] = this.typedef.validate(v);

    if (!err) {
      return;
    }

    // ignore sub errors
    const failures = err
      .failures()
      .filter((v) => v.type !== "never" && v.path.length === 0);

    if (failures.length === 0) {
      // FIXME
      return;
    }

    return failures.map((f) => {
      if (f.value === undefined) {
        return "字段不能为空";
      }
      return f.message;
    });
  }

  destroy() {
    this.form$.delete(this.name);
  }
}
