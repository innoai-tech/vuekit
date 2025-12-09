import { isObjectLike, isString, isUndefined } from "es-toolkit/compat";
import type { Optionalize } from "./Schema.ts";
import { Metadata } from "./Metadata.ts";
import { isIterable } from "./util.ts";

export type TypeNode = {
  current: Type;
  parent?: TypeNode;
};

export type Context = {
  branch: Array<any>;
  path: Array<any>;
  node?: TypeNode;
  mask?: boolean;
};

export const EmptyContext: Context = {
  path: [],
  branch: [],
};

export type Failure = {
  value: any;
  key: any;
  type: string;
  refinement: string | undefined;
  message: string;
  explanation?: string;
} & Context;

export class TypedError extends TypeError {
  value: any;
  key!: any;
  type!: string;
  refinement!: string | undefined;
  path!: Array<any>;
  branch!: Array<any>;
  failures: () => Array<Failure>;

  [x: string]: any;

  constructor(failure: Failure, failures: () => Generator<Failure>) {
    let cached: Array<Failure> | undefined;

    const { message, explanation, ...rest } = failure;
    const { path } = failure;

    const msg = path.length === 0 ? message : `At path: ${path.join(".")} -- ${message}`;

    super(explanation ?? msg);

    if (explanation != null) {
      this["cause"] = msg;
    }

    Object.assign(this, rest);

    this.name = this.constructor.name;

    this.failures = () => {
      return (cached ??= [failure, ...failures()]);
    };
  }
}

export type Result =
  | boolean
  | string
  | Partial<Failure>
  | Iterable<boolean | string | Partial<Failure>>;

export interface TypeModifier<T, R> {
  modify(source: T): R;
}

export type AnyType = Type<any>;

export type Entity = [string | number | symbol, unknown, Type<any> | Type<never>];

export const isType = (t: unknown): t is Type => {
  return !!t && (t as any)[SymbolType] == SymbolType;
};

export const SymbolType = Symbol("Type");

export interface Type<T extends any = unknown, Schema = unknown> {
  [SymbolType]: T;

  type: string;
  schema: Schema;
  meta: Record<string, any>;

  coercer(value: unknown, context: Context): T | undefined;

  refiner(value: unknown, context: Context): Result;

  validator(value: unknown, context: Context): Result;

  entries(value: unknown, context?: Context): Iterable<Entity>;

  validate(
    value: unknown,
    options?: { coerce?: boolean; message?: string },
  ): [TypedError, undefined] | [undefined, T];

  create(value: unknown): T | undefined;

  mask(value: unknown): T | undefined;

  optional(): Type<T | undefined, Schema>;

  default(v: T): Type<T | undefined, Schema>;

  use<A>(op1: TypeModifier<Type<T, Schema>, A>): A;

  use<A, B>(op1: TypeModifier<Type<T, Schema>, A>, op2: TypeModifier<A, B>): B;

  use<A, B, C>(
    op1: TypeModifier<Type<T, Schema>, A>,
    op2: TypeModifier<A, B>,
    op3: TypeModifier<B, C>,
  ): C;

  use<A, B, C, D>(
    op1: TypeModifier<Type<T, Schema>, A>,
    op2: TypeModifier<A, B>,
    op3: TypeModifier<B, C>,
    op4: TypeModifier<C, D>,
  ): D;

  use<A, B, C, D, E>(
    op1: TypeModifier<Type<T, Schema>, A>,
    op2: TypeModifier<A, B>,
    op3: TypeModifier<B, C>,
    op4: TypeModifier<C, D>,
    op5: TypeModifier<D, E>,
  ): E;

  use<A, B, C, D, E, F>(
    op1: TypeModifier<Type<T, Schema>, A>,
    op2: TypeModifier<A, B>,
    op3: TypeModifier<B, C>,
    op4: TypeModifier<C, D>,
    op5: TypeModifier<D, E>,
    op6: TypeModifier<E, F>,
  ): F;

  use<A, B, C, D, E, F, G>(
    op1: TypeModifier<Type<T, Schema>, A>,
    op2: TypeModifier<A, B>,
    op3: TypeModifier<B, C>,
    op4: TypeModifier<C, D>,
    op5: TypeModifier<D, E>,
    op6: TypeModifier<E, F>,
    op7: TypeModifier<F, G>,
  ): G;

  use<A, B, C, D, E, F, G, H>(
    op1: TypeModifier<Type<T, Schema>, A>,
    op2: TypeModifier<A, B>,
    op3: TypeModifier<B, C>,
    op4: TypeModifier<C, D>,
    op5: TypeModifier<D, E>,
    op6: TypeModifier<E, F>,
    op7: TypeModifier<F, G>,
    op8: TypeModifier<G, H>,
  ): H;

  use<A, B, C, D, E, F, G, H, I>(
    op1: TypeModifier<Type<T, Schema>, A>,
    op2: TypeModifier<A, B>,
    op3: TypeModifier<B, C>,
    op4: TypeModifier<C, D>,
    op5: TypeModifier<D, E>,
    op6: TypeModifier<E, F>,
    op7: TypeModifier<F, G>,
    op8: TypeModifier<G, H>,
    op9: TypeModifier<H, I>,
  ): I;

  use(...ops: TypeModifier<Type<T, Schema>, Type<T, Schema>>[]): Type<T, Schema>;
}

export type Infer<T extends Type> = T[typeof SymbolType];

export type InferPropTypes<T extends Record<string, Type>> = Optionalize<{
  [K in keyof T]: Infer<T[K]>;
}>;

export type InferSchema<T extends Type> = T["schema"];

export type MergeSchema<A, B> = Omit<A, keyof B> & B;

export type InferTuple<
  Tuple extends Type[],
  Length extends number = Tuple["length"],
> = Length extends Length
  ? number extends Length
    ? Tuple
    : _InferTuple<Tuple, Length, []>
  : never;
type _InferTuple<
  Tuple extends Type[],
  Length extends number,
  Accumulated extends unknown[],
  Index extends number = Accumulated["length"],
> = Index extends Length
  ? Accumulated
  : _InferTuple<Tuple, Length, [...Accumulated, Infer<Tuple[Index]>]>;

export type OmitBy<T, V> = Omit<
  T,
  { [K in keyof T]: V extends Extract<T[K], V> ? K : never }[keyof T]
>;

export type PickBy<T, V> = Pick<
  T,
  { [K in keyof T]: V extends Extract<T[K], V> ? K : never }[keyof T]
>;

export function shiftIterator<T>(input: Iterator<T>): T | undefined {
  const { done, value } = input.next();
  return done ? undefined : value;
}

export function toFailure<T, S>(
  ret: string | boolean | Partial<Failure>,
  context: Context,
  t: Type<T, S>,
  inputValue: any,
): Failure | undefined {
  if (ret === true) {
    return;
  }

  let result: { message?: string; refinement?: string } = {};

  if (ret === false) {
    result = {};
  } else if (isString(ret)) {
    result = { message: ret };
  } else {
    result = ret;
  }

  const { path, branch, node } = context;
  const { type } = t;

  const {
    refinement,
    message = isUndefined(inputValue)
      ? "Required"
      : `Expected a value of type \`${type}\`${refinement ? ` with refinement \`${refinement}\`` : ""}, but received: \`${inputValue}\``,
  } = result;

  return {
    ...result,
    value: inputValue,
    type,
    refinement,
    key: path[path.length - 1],
    path,
    branch,
    node,
    message,
  };
}

export function* toFailures<T, S>(
  ret: Result,
  context: Context,
  t: Type<T, S>,
  inputValue: any,
): IterableIterator<Failure> {
  let result = ret;

  if (!isIterable(result)) {
    result = [result];
  }

  for (const r of result) {
    const failure = toFailure(r, context, t, inputValue);

    if (failure) {
      yield failure;
    }
  }
}

export function validate<T, S>(
  value: unknown,
  typed: Type<T, S>,
  options: {
    coerce?: boolean;
    mask?: boolean;
    message?: string;
  } = {},
): [TypedError, undefined] | [undefined, T] {
  const tuples = run(value, typed, options);
  const tuple = shiftIterator(tuples)!;

  if (tuple[0]) {
    const error = new TypedError(tuple[0], function* () {
      for (const t of tuples) {
        if (t[0]) {
          yield t[0];
        }
      }
    });

    return [error, undefined];
  }

  const v = tuple[1];

  return [undefined, v];
}

export function* run<T, S>(
  inputValue: any,
  t: Type<T, S>,
  options: Partial<Context> & {
    coerce?: boolean;
    mask?: boolean;
    message?: string;
  } = {},
): IterableIterator<[Failure, undefined] | [undefined, T]> {
  const {
    path = [],
    branch = [inputValue],
    node = { current: t } as TypeNode,
    coerce = false,
    mask = false,
  } = options;

  const ctx: Context = { mask, path, branch, node };

  let value = inputValue;

  if (coerce) {
    const v = t.coercer(inputValue, ctx);
    if (v != undefined) {
      value = v;
    }
  }

  let status: Status = Status.valid;

  for (const failure of toFailures(t.validator(value, ctx), ctx, t, inputValue)) {
    failure.explanation = options.message;
    status = Status.not_valid;
    yield [failure, undefined];
  }

  for (let [k, v, st] of t.entries(value, ctx)) {
    const ts = run(v, st as Type, {
      path: k === undefined ? path : [...path, k],
      branch: k === undefined ? branch : [...branch, v],
      node: k === undefined ? node : ({ current: st, parent: node } as TypeNode),
      coerce,
      mask,
      message: options.message,
    });

    for (const t of ts) {
      if (t[0]) {
        status = t[0].refinement != null ? Status.not_refined : Status.not_valid;
        yield [t[0], undefined];
      } else if (coerce) {
        v = t[1];

        if (k === undefined) {
          value = v;
        } else if (value instanceof Map) {
          value.set(k, v);
        } else if (value instanceof Set) {
          value.add(v);
        } else if (isObjectLike(value)) {
          (value as any)[k] = v;
        }
      }
    }
  }

  if (status !== Status.not_valid) {
    for (const failure of toFailures(t.refiner(value as T, ctx), ctx, t, inputValue)) {
      failure.explanation = options.message;
      status = Status.not_refined;
      yield [failure, undefined];
    }
  }

  if (status === Status.valid) {
    yield [undefined, value as T];
  }
}

enum Status {
  valid = 0,
  not_refined = 1,
  not_valid = 2,
}

export const defineType = <Args extends any[], T extends Type>(
  create: (...args: Args) => T,
): ((...args: Args) => Type<Infer<T>, InferSchema<T>> & PropertyDecorator) => {
  return (...args: Args) => {
    const type = create(...args);

    const propertyDecorator = (target: object, propertyKey: string | symbol) => {
      const current =
        Metadata.get<TypeDefineObject>(target, propertyKey) ?? ({} as TypeDefineObject);

      Metadata.define(target, propertyKey, { ...current, type });
    };

    propertyDecorator.toString = () => `@type:${type.type}`;

    return new Proxy(propertyDecorator, {
      ownKeys(): ArrayLike<string | symbol> {
        return [...Object.getOwnPropertyNames(type), ...Object.getOwnPropertySymbols(type)];
      },
      get(_: any, p: string | symbol): any {
        return (type as any)[p];
      },
    });
  };
};

export type TypeDefineObject = {
  type?: Type;
  modifies?: TypeModifier<Type, Type>[];
};

export const defineModifier = <I extends Type, O extends Type, Args extends any[]>(
  create: (i: I, ...args: Args) => O,
): ((...args: Args) => PropertyDecorator & TypeModifier<I, O>) => {
  return (...args: Args) => {
    const modifierFunc = (t: I) => create(t, ...args);

    const propertyDecorator = (target: object, prop: string | symbol) => {
      Metadata.define<TypeDefineObject>(
        target,
        prop,
        (m) => {
          (m.modifies ??= []).push({
            modify: modifierFunc,
          });
        },
        {},
      );
    };

    return new Proxy(propertyDecorator, {
      get(_: any, p: string | symbol): any {
        if (p == "modify") {
          return modifierFunc;
        }
        return;
      },
    });
  };
};
