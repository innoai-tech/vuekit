import { get, isObject } from "@innoai-tech/lodash";

export interface UnaryFunction<T, R> {
  (source: T): R;
}

export type Context = {
  branch: Array<any>;
  path: Array<any>;
  node?: TypeNode<AnyType, AnyType>;
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
    const msg =
      path.length === 0 ? message : `At path: ${path.join(".")} -- ${message}`;

    super(explanation ?? msg);

    if (explanation != null) {
      this["cause"] = msg;
    }

    Object.assign(this, rest);

    this.name = this.constructor.name;

    this.failures = () => {
      // biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
      return (cached ??= [failure, ...failures()]);
    };
  }
}

export type Result =
  | boolean
  | string
  | Partial<Failure>
  | Iterable<boolean | string | Partial<Failure>>;

export type AnyType = Type<any, any>;

export class Type<T = unknown, Schema = unknown> {
  static define<T>(
    validator: (value: unknown, ctx: Context) => Result = () => true,
  ) {
    class CustomType<T> extends Type<T, null> {
      override validator(value: unknown, ctx: Context): Result {
        return validator(value, ctx);
      }
    }

    return new CustomType<T>(null);
  }

  constructor(public readonly schema: Schema) {}

  readonly Type!: T;
  readonly Schema!: Schema;

  get type() {
    return (this.schema || ({} as any)).type ?? "unknown";
  }

  *entries(
    _value: unknown,
    _context: Context = EmptyContext,
  ): Iterable<[string | number | symbol, unknown, AnyType | Type<never>]> {}

  refiner(_value: T, _context: Context): Result {
    return [];
  }

  validator(_value: unknown, _context: Context): Result {
    return [];
  }

  coercer(value: unknown, _context: Context): unknown {
    return value;
  }

  public validate(
    value: unknown,
    options: {
      coerce?: boolean;
      message?: string;
    } = {},
  ): [TypedError, undefined] | [undefined, T] {
    return validate(value, this, options);
  }

  public create(value: unknown): T {
    const result = validate(value, this, { coerce: true });

    if (result[0]) {
      throw result[0];
    }

    return result[1];
  }

  public mask(value: unknown): T {
    const result = validate(value, this, { coerce: true, mask: true });
    if (result[0]) {
      throw result[0];
    }
    return result[1];
  }

  default(v: T): DefaultedType<Type<T, Schema>> {
    return DefaultedType.create(this, v);
  }

  optional(): OptionalType<Type<T, Schema>> {
    return OptionalType.create(this);
  }

  use<S extends Type<T, Schema>, A>(op1: UnaryFunction<S, A>): A;
  use<S extends Type<T, Schema>, A>(op1: UnaryFunction<S, A>): A;
  use<S extends Type<T, Schema>, A, B>(
    op1: UnaryFunction<S, A>,
    op2: UnaryFunction<A, B>,
  ): B;
  use<S extends Type<T, Schema>, A, B, C>(
    op1: UnaryFunction<S, A>,
    op2: UnaryFunction<A, B>,
    op3: UnaryFunction<B, C>,
  ): C;
  use<S extends Type<T, Schema>, A, B, C, D>(
    op1: UnaryFunction<S, A>,
    op2: UnaryFunction<A, B>,
    op3: UnaryFunction<B, C>,
    op4: UnaryFunction<C, D>,
  ): D;
  use<S extends Type<T, Schema>, A, B, C, D, E>(
    op1: UnaryFunction<S, A>,
    op2: UnaryFunction<A, B>,
    op3: UnaryFunction<B, C>,
    op4: UnaryFunction<C, D>,
    op5: UnaryFunction<D, E>,
  ): E;
  use<S extends Type<T, Schema>, A, B, C, D, E, F>(
    op1: UnaryFunction<S, A>,
    op2: UnaryFunction<A, B>,
    op3: UnaryFunction<B, C>,
    op4: UnaryFunction<C, D>,
    op5: UnaryFunction<D, E>,
    op6: UnaryFunction<E, F>,
  ): F;
  use<S extends Type<T, Schema>, A, B, C, D, E, F, G>(
    op1: UnaryFunction<S, A>,
    op2: UnaryFunction<A, B>,
    op3: UnaryFunction<B, C>,
    op4: UnaryFunction<C, D>,
    op5: UnaryFunction<D, E>,
    op6: UnaryFunction<E, F>,
    op7: UnaryFunction<F, G>,
  ): G;
  use<S extends Type<T, Schema>, A, B, C, D, E, F, G, H>(
    op1: UnaryFunction<S, A>,
    op2: UnaryFunction<A, B>,
    op3: UnaryFunction<B, C>,
    op4: UnaryFunction<C, D>,
    op5: UnaryFunction<D, E>,
    op6: UnaryFunction<E, F>,
    op7: UnaryFunction<F, G>,
    op8: UnaryFunction<G, H>,
  ): H;
  use<S extends Type<T, Schema>, A, B, C, D, E, F, G, H, I>(
    op1: UnaryFunction<S, A>,
    op2: UnaryFunction<A, B>,
    op3: UnaryFunction<B, C>,
    op4: UnaryFunction<C, D>,
    op5: UnaryFunction<D, E>,
    op6: UnaryFunction<E, F>,
    op7: UnaryFunction<F, G>,
    op8: UnaryFunction<G, H>,
    op9: UnaryFunction<H, I>,
  ): I;
  use<S extends Type<T, Schema>, A, B, C, D, E, F, G, H, I>(
    op1: UnaryFunction<S, A>,
    op2: UnaryFunction<A, B>,
    op3: UnaryFunction<B, C>,
    op4: UnaryFunction<C, D>,
    op5: UnaryFunction<D, E>,
    op6: UnaryFunction<E, F>,
    op7: UnaryFunction<F, G>,
    op8: UnaryFunction<G, H>,
    op9: UnaryFunction<H, I>,
    ...operations: UnaryFunction<T, Schema>[]
  ): Type<unknown, unknown>;
  use(...modifiers: UnaryFunction<T, Schema>[]): Type<T, Schema> {
    return modifiers.reduce(
      (t, r) => (r as any)(t),
      this as Type<T, Schema>,
    ) as any;
  }

  get unwrap(): Type<T, Schema> {
    return this;
  }

  get meta(): Record<string, any> {
    if (this.schema) {
      return get(this.schema, ["$meta"]) ?? {};
    }
    return {};
  }

  getMeta<T>(key: string): T | undefined {
    if (this.schema) {
      return get(this.schema, ["$meta", key]);
    }
    return undefined;
  }

  getSchema<T = any>(key: string): T | undefined {
    if (key && this.schema) {
      return get(this.schema, [key]);
    }
    return undefined;
  }

  get isOptional(): boolean {
    return false;
  }
}

export class TypeWrapper<
  T,
  U extends AnyType,
  Schema extends Record<string, any>,
> extends Type<T, Schema & { $unwrap: U | (() => U) }> {
  static of<U extends AnyType, ExtraSchema extends Record<string, any>>(
    t: U,
    extra: ExtraSchema,
  ): Type<Infer<U>, MergeSchema<InferSchema<U>, ExtraSchema>> {
    return new TypeWrapper<Infer<U>, U, ExtraSchema>({
      ...extra,
      $unwrap: t,
    });
  }

  static refine<U extends AnyType, S extends Record<string, any>>(
    t: U,
    refiner: (v: Infer<U>, ctx: Context) => Result,
    schema: S,
  ): Type<Infer<U>, MergeSchema<InferSchema<U>, S>> {
    class Refiner<
      U extends AnyType,
      S extends Record<string, any>,
    > extends TypeWrapper<Infer<U>, U, S> {
      override *refiner(value: Infer<U>, ctx: Context): Result {
        yield* this.unwrap.refiner(value, ctx);
        const result = refiner(value, ctx);
        const failures = toFailures(result, ctx, t, value);

        for (const failure of failures) {
          yield { ...failure, refinement: Object.keys(schema).join(",") };
        }
      }
    }

    return new Refiner<U, S>({
      ...schema,
      $unwrap: t,
    });
  }

  override get type() {
    return this.unwrap.type;
  }

  override get unwrap() {
    return typeof this.schema.$unwrap === "function"
      ? this.schema.$unwrap()
      : this.schema.$unwrap;
  }

  override get isOptional(): boolean {
    return this.unwrap.isOptional;
  }

  override get meta(): Record<string, any> {
    return {
      ...this.unwrap.meta,
      ...get(this.schema, ["$meta"], {}),
    };
  }

  override getMeta<T = any>(key: string): T | undefined {
    if (this.schema) {
      return get(this.schema, ["$meta", key]) ?? this.unwrap.getMeta(key);
    }
    return undefined;
  }

  override getSchema<T = any>(key?: string): T | undefined {
    if (key) {
      return get(this.schema, [key]) ?? this.unwrap.getSchema<T>(key);
    }
    return undefined;
  }

  override *entries(
    value: unknown,
    context: Context = EmptyContext,
  ): Iterable<[string | number | symbol, unknown, AnyType | Type<never>]> {
    yield* this.unwrap.entries(value, {
      ...context,
      node: TypeNode.create(this, context.node),
    });
  }

  override validator(value: unknown, context: Context): Result {
    return toFailures(
      this.unwrap.validator(value, context),
      context,
      this,
      value,
    );
  }

  override refiner(value: T, context: Context): Result {
    return toFailures(
      this.unwrap.refiner(value, context),
      context,
      this,
      value,
    );
  }

  override coercer(value: unknown, context: Context) {
    return this.unwrap.coercer(value, context);
  }
}

// biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
export class TypeNode<U extends AnyType, P extends AnyType> extends TypeWrapper<
  Infer<U>,
  U,
  { $parent: P | null }
> {
  static create<U extends AnyType, P extends AnyType>(
    t: U,
    p: P | undefined | null,
  ) {
    return new TypeNode<U, P>({
      $unwrap: t,
      $parent: p ? p : null,
    });
  }
}

export class DefaultedType<T extends AnyType> extends TypeWrapper<
  Infer<T>,
  T,
  { default: Infer<T> }
> {
  static create<U extends AnyType>(t: U, defaultValue: Infer<U>) {
    return new DefaultedType<U>({
      $unwrap: t,
      default: defaultValue,
    });
  }

  override coercer(value: unknown, context: Context): unknown {
    return typeof value === "undefined"
      ? this.schema.default
      : super.unwrap.coercer(value, context);
  }
}

export class OptionalType<T extends AnyType> extends TypeWrapper<
  Infer<T> | undefined,
  T,
  {}
> {
  static create<T extends AnyType>(t: T) {
    return new OptionalType<T>({
      $unwrap: t,
    });
  }

  override get isOptional(): boolean {
    return true;
  }

  override refiner(value: T | undefined, context: Context): Result {
    return value === undefined || super.unwrap.refiner(value, context);
  }

  override validator(value: unknown, context: Context): Result {
    return value === undefined || super.unwrap.validator(value, context);
  }
}

export type Infer<T extends AnyType> = T["Type"];
export type InferSchema<T extends AnyType> = T["Schema"];

export type MergeSchema<A, B> = Omit<A, keyof B> & B;

export type InferTuple<
  Tuple extends Type<any>[],
  Length extends number = Tuple["length"],
> = Length extends Length
  ? number extends Length
    ? Tuple
    : _InferTuple<Tuple, Length, []>
  : never;
type _InferTuple<
  Tuple extends Type<any>[],
  Length extends number,
  Accumulated extends unknown[],
  Index extends number = Accumulated["length"],
> = Index extends Length
  ? Accumulated
  : _InferTuple<Tuple, Length, [...Accumulated, Infer<Tuple[Index]>]>;

export type Simplify<T> = T extends any[] ? T : { [K in keyof T]: T[K] } & {};

export type OmitBy<T, V> = Omit<
  T,
  { [K in keyof T]: V extends Extract<T[K], V> ? K : never }[keyof T]
>;

export type PickBy<T, V> = Pick<
  T,
  { [K in keyof T]: V extends Extract<T[K], V> ? K : never }[keyof T]
>;

export type Optionalize<S extends object> = OmitBy<S, undefined> &
  Partial<PickBy<S, undefined>>;

export type ObjectType<S extends Record<string, AnyType>> = Simplify<
  Optionalize<{ [K in keyof S]: Infer<S[K]> }>
>;

export function shiftIterator<T>(input: Iterator<T>): T | undefined {
  const { done, value } = input.next();
  return done ? undefined : value;
}

function isIterable<T>(x: unknown): x is Iterable<T> {
  return isObject(x) && typeof (x as any)[Symbol.iterator] === "function";
}

export function toFailure<T, S>(
  ret: string | boolean | Partial<Failure>,
  context: Context,
  t: Type<T, S>,
  value: any,
): Failure | undefined {
  if (ret === true) {
    return;
  }

  let result: { message?: string; refinement?: string } = {};

  if (ret === false) {
    result = {};
  } else if (typeof ret === "string") {
    result = { message: ret };
  } else {
    result = ret;
  }

  const { path, branch, node } = context;
  const { type } = t;

  const {
    refinement,
    message = `Expected a value of type \`${type}\`${
      refinement ? ` with refinement \`${refinement}\`` : ""
    }, but received: \`${value}\``,
  } = result;

  return {
    value,
    type,
    refinement,
    key: path[path.length - 1],
    path,
    branch,
    node,
    ...result,
    message,
  };
}

export function* toFailures<T, S>(
  ret: Result,
  context: Context,
  t: Type<T, S>,
  value: any,
): IterableIterator<Failure> {
  let result = ret;

  if (!isIterable(result)) {
    result = [result];
  }

  for (const r of result) {
    const failure = toFailure(r, context, t, value);

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
  // biome-ignore lint/style/noNonNullAssertion: <explanation>
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
  v: any,
  t: Type<T, S>,
  options: Partial<Context> & {
    coerce?: boolean;
    mask?: boolean;
    message?: string;
  } = {},
): IterableIterator<[Failure, undefined] | [undefined, T]> {
  const {
    path = [],
    branch = [v],
    node = TypeNode.create(t, null),
    coerce = false,
    mask = false,
  } = options;

  const ctx: Context = { mask, path, branch, node };

  let value = v;
  if (coerce) {
    value = t.coercer(value, ctx);
  }

  let status: Status = Status.valid;

  for (const failure of toFailures(t.validator(value, ctx), ctx, t, value)) {
    failure.explanation = options.message;
    status = Status.not_valid;
    yield [failure, undefined];
  }

  for (let [k, v, st] of t.entries(value, ctx)) {
    const ts = run(v, st as Type, {
      path: k === undefined ? path : [...path, k],
      branch: k === undefined ? branch : [...branch, v],
      node: k === undefined ? node : TypeNode.create(st, node),
      coerce,
      mask,
      message: options.message,
    });

    for (const t of ts) {
      if (t[0]) {
        status =
          t[0].refinement != null ? Status.not_refined : Status.not_valid;
        yield [t[0], undefined];
      } else if (coerce) {
        v = t[1];

        if (k === undefined) {
          value = v;
        } else if (value instanceof Map) {
          value.set(k, v);
        } else if (value instanceof Set) {
          value.add(v);
        } else if (isObject(value)) {
          if (v !== undefined || k in value) {
            (value as any)[k] = v;
          }
        }
      }
    }
  }

  if (status !== Status.not_valid) {
    for (const failure of toFailures(
      t.refiner(value as T, ctx),
      ctx,
      t,
      value,
    )) {
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

export class TypeNever extends Type<never, false> {
  static create() {
    return new TypeNever(false);
  }

  override get type() {
    return "never";
  }

  override validator(_value: unknown, _context: Context): Result {
    return false;
  }
}
