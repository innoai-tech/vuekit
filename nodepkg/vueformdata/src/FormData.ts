import {
  get,
  isFunction,
  isPlainObject,
  isUndefined,
  set,
  has,
} from "@innoai-tech/lodash";
import {
  type AnyType,
  EmptyContext,
  ImmerBehaviorSubject,
  type Infer,
  type Component,
  rx,
  SymbolRecordKey,
  type ImmerSubject,
} from "@innoai-tech/vuekit";

import { Observable, Subject, distinctUntilChanged, map } from "rxjs";

export const delegate = <T extends { [k: string]: any }>(
  target: T,
  options: Partial<T>,
): T => {
  return new Proxy(target, {
    get(target, p) {
      if (has(options, p)) {
        return (options as any)[p];
      }
      return (target as any)[p];
    },
  });
};

export class FormData<T extends AnyType = AnyType> extends Subject<Infer<T>> {
  static of<T extends AnyType>(
    schema: T,
    initials: Partial<Infer<T>> | (() => Partial<Infer<T>>),
  ) {
    return new FormData(schema, () =>
      isFunction(initials) ? initials() : initials,
    );
  }

  public readonly inputs$: ImmerBehaviorSubject<Partial<Infer<T>>>;

  constructor(
    public typedef: T,
    initials: () => Partial<Infer<T>>,
  ) {
    super();

    this.inputs$ = new ImmerBehaviorSubject<Partial<Infer<T>>>(
      initials() ?? {},
    );
  }

  get inputs() {
    return this.inputs$.value;
  }

  public readonly _fields = new Map<string, Field>();

  field(name: string) {
    return this._fields.get(name);
  }

  *fields<T extends AnyType>(
    typedef: T,
    value = this.inputs$.value,
    path: any[] = [],
  ): Iterable<Field> {
    for (const [nameOrIdx, _, t] of typedef.entries(value, EmptyContext)) {
      // skip symbol
      if (nameOrIdx === SymbolRecordKey) {
        continue;
      }

      if (t.type === "never") {
        continue;
      }

      const p = [...path, nameOrIdx];

      const name = FieldImpl.stringify(p);

      let f = this._fields.get(name);
      if (!f) {
        f = new FieldImpl(this, t, p);
        this._fields.set(name, f);
      }

      yield f;
    }
  }

  submit = () => {
    const values = {};

    let hasError = false;

    for (const [name, f] of this._fields) {
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
          set(values, name, {
            ...value,
          });
        } else {
          set(values, name, value);
        }
      }
    }

    if (hasError) {
      return;
    }

    this.next(values);
  };

  reset() {
    for (let [_, f] of this._fields) {
      f.reset();
    }
  }

  setErrors = (errors: Record<string, string[]>) => {
    for (const name in errors) {
      const error = errors[name]!;

      for (const [fieldName, f] of this._fields) {
        if (fieldName == name) {
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
  input?: Component<InputComponentProps<any>>;
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
  form$: FormData;

  input: T | undefined;
  input$: Observable<T | null>;

  meta: FieldMeta<T>;
  optional: boolean;

  state: FieldState;
  typedef: AnyType;

  blur: () => void;
  focus: () => void;

  update: (v: T) => void;
  reset: () => void;
  destroy: () => void;

  validate(value: any): string[] | undefined;
}

class FieldImpl<T extends any = any>
  extends ImmerBehaviorSubject<FieldState>
  implements Field<T>
{
  static defaultValue = (def: AnyType) => {
    try {
      return def.create(undefined);
    } catch (e) {
      return;
    }
  };

  static stringify(path: Array<string | number>) {
    let p = "";

    for (const v of path) {
      if (typeof v === "number") {
        p += `[${v}]`;
        continue;
      }

      p += p ? `.${v}` : v;
    }

    return p;
  }

  constructor(
    public readonly form$: FormData,
    public readonly typedef: AnyType,
    public readonly path: Array<string | number>,
    public readonly name = FieldImpl.stringify(path),
  ) {
    super({
      initial: get(form$.inputs$.value, name, FieldImpl.defaultValue(typedef)),
    });
  }

  get input(): T | undefined {
    return get(
      this.form$.inputs$.value,
      this.name,
      FieldImpl.defaultValue(this.typedef),
    );
  }

  get meta(): FieldMeta<T> {
    return this.typedef.meta;
  }

  #optional?: boolean;

  get state() {
    return this.value;
  }

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
        map((v) => get(v, this.name, FieldImpl.defaultValue(this.typedef))),
        distinctUntilChanged(),
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
      set(inputs, this.name, this.value.initial);
    });

    this.next({ initial: this.value.initial });
  };

  update = (v: T) => {
    this.form$.inputs$.next((inputs) => {
      set(inputs, this.name, v);
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
    this.form$._fields.delete(this.name);
  }
}
