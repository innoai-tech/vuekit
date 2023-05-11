import { Struct, type Infer } from "superstruct";
import * as ss from "superstruct";
import {
  type InferStructTuple,
  type IsExactMatch,
  type IsMatch,
  type IsRecord,
  type IsTuple,
  type IsUnion,
  type Simplify,
  type UnionToIntersection
} from "superstruct/dist/utils";
import { type Context, type Result } from "superstruct/dist/struct";

export {
  type Infer,
  type Simplify,
  type UnionToIntersection,
  type Context,
  type InferStructTuple as InferTuple
};

export type Coercer<T = unknown> = (
  value: T,
  context: Context,
  t: Type
) => unknown;
export type Validator = (value: unknown, context: Context, t: Type) => Result;
export type Refiner<T> = (value: T, context: Context, t: Type<T>) => Result;
export type EntryIter = (
  value: unknown,
  context: Context,
  t: Type
) => Iterable<[string | number, unknown, Type<any> | Type<never>]>;

export interface Modifier<T, S> {
  (t: Type<T, S>): Type<T, S>;
}

export type TypeAny = Type<any, any>;

export class Type<T = unknown, S = unknown> extends Struct<T, S> {
  static from<T, S>(
    s: Struct<T, any>,
    overwrites: {
      type?: string;
      schema?: S;
      entries?: EntryIter;
      coercer?: Coercer;
      validator?: Validator;
      refiner?: Refiner<T>;
      meta?: Record<string, any>;
    } = {}
  ) {
    return new Type<T, S>({
      type: overwrites.type ?? s.type,
      schema: (overwrites.schema as any) ?? s.schema,
      entries: overwrites.entries ?? (s.entries as any),
      coercer: overwrites.coercer ?? (s.coercer as any),
      validator: overwrites.validator ?? (s.validator as any),
      refiner: overwrites.refiner ?? (s.refiner as any),
      meta: {
        ...((s as any)?.meta ?? {}),
        ...(overwrites.meta ?? {})
      }
    });
  }

  static define<T, S>(
    name: string,
    validator: Validator,
    schema: S
  ): Type<T, S> {
    return new Type({ type: name, schema: schema, validator });
  }

  static refine<T, S>(
    t: Type<T, S>,
    name: string,
    refiner: Refiner<T>
  ): Type<T, S> {
    return Type.callWith(t, ss.refine, name, refiner as any);
  }

  static callWith<T, S, RT, RS, Args extends any[]>(
    source: Type<T, S>,
    fn: (s: Struct<T, S>, ...args: Args) => Struct<RT, RS>,
    ...args: Args
  ) {
    return Type.from<RT, RS>(fn(source, ...args), {
      meta: source.meta
    });
  }

  meta: Record<string, any>;

  constructor({
                coercer,
                entries,
                validator,
                refiner,
                meta,
                ...others
              }: {
    entries?: EntryIter;
    coercer?: Coercer;
    validator?: Validator;
    refiner?: Refiner<T>;
    meta?: Record<string, any>;
    type: string;
    schema: S;
  }) {
    super({
      ...others,
      coercer: delegate(() => this as Type, coercer as any) as any,
      validator: delegate(() => this as Type, validator) as any,
      refiner: delegate(() => this as Type, refiner as any) as any
    });

    this.meta = meta ?? {};

    this.entries = entries
      ? (delegate(() => this as Type, entries) as any)
      : function* () {
      };
  }

  override entries: (
    value: unknown,
    context: Context
  ) => Iterable<[string | number, unknown, Type<any> | Type<never>]>;

  optional(): Type<T | undefined, S> {
    return Type.callWith(this, ss.optional);
  }

  default(v: T): Type<T, S> & { __DEFAULTED: true } {
    return Type.callWith(this, ss.defaulted, v) as any;
  }

  annotate<M extends Record<string, any>>(meta: M): Type<T, S> {
    return Type.from(this, { meta });
  }

  use(...modifiers: Modifier<T, S>[]): Type<T, S> {
    return modifiers.reduce((ret, r) => r(ret), this as Type<T, S>);
  }

  private _isOptional?: boolean;
  get isOptional() {
    return (this._isOptional ??= (() => {
      try {
        this.create(undefined);
        return true;
      } catch (_) {
        return false;
      }
    })());
  }
}

function delegate(
  getType: () => Type,
  fn?: (v: unknown, ctx: Context, t: Type) => unknown
) {
  if (fn) {
    return (v: unknown, ctx: Context, t?: Type) => {
      return fn(v, ctx, t ?? getType());
    };
  }
  return;
}

export type StringSchema = {
  type: "string";
};

export type NumberSchema = {
  type: "number";
};

export type IntegerSchema = {
  type: "integer";
};

export type BooleanSchema = {
  type: "boolean";
};

export type ArraySchema<T> = {
  type: "array";
  items: T;
};

export type TupleSchema<T> = {
  type: "array";
  items: { [K in keyof T]: Type<T[K], TypeSchema<T[K]>> };
};

export type EnumSchema<U extends string | number | undefined | null> = {
  enum: readonly U[];
};

export type NativeEnumLike = {
  [k: string]: string | number;
  [nu: number]: string;
};

export type RecordSchema<T extends Record<any, any>> = T extends Record<
    infer K,
    infer V
  >
  ? {
    additionalProperties: Type<V, any>;
    propertyNames: Type<K, any>;
  }
  : never;

export declare type Describe<T> = Type<T, TypeSchema<T>>;

export declare type TypeSchema<T> = [T] extends [string | undefined | null]
  ? [T] extends [IsMatch<T, string | undefined | null>]
    ? StringSchema
    : [T] extends [IsUnion<T>]
      ? // string enum
      EnumSchema<T>
      : { enum: [T] }
  : [T] extends [number | undefined | null]
    ? [T] extends [IsMatch<T, number | undefined | null>]
      ? NumberSchema
      : [T] extends [IsUnion<T>]
        ? // number enum
        EnumSchema<T>
        : { enum: [T] }
    : [T] extends [boolean]
      ? [T] extends [IsExactMatch<T, boolean>]
        ? BooleanSchema
        : { enum: [T] }
      : T extends | bigint
        | symbol
        | undefined
        | null
        | Function
        | Date
        | Error
        | RegExp
        | Map<any, any>
        | WeakMap<any, any>
        | Set<any>
        | WeakSet<any>
        | Promise<any>
        ? null // js runtime types
        : T extends Array<infer E>
          ? T extends IsTuple<T>
            ? TupleSchema<T>
            : ArraySchema<Type<E>>
          : T extends object
            ? T extends IsRecord<T>
              ? RecordSchema<T>
              : {
                properties: {
                  [K in keyof T]: Describe<T[K]>;
                };
              }
            : null;
