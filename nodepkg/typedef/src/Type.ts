import { Struct, type Infer } from "superstruct";
import * as ss from "superstruct";
import {
  type EnumSchema,
  type InferStructTuple,
  type IsExactMatch,
  type IsMatch,
  type IsRecord,
  type IsTuple,
  type IsUnion,
  type ObjectType,
  type Simplify,
  type UnionToIntersection
} from "superstruct/dist/utils";
import { type Context, type Result } from "superstruct/dist/struct";

export {
  type Infer,
  type Simplify,
  type UnionToIntersection,
  type Context,
  type InferStructTuple as InferTuple,
  type ObjectType
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
      schema?: S;
      entries?: EntryIter;
      coercer?: Coercer;
      validator?: Validator;
      refiner?: Refiner<T>;
      meta?: Record<string, any>;
    } = {}
  ) {
    return new Type<T, S>({
      type: s.type,
      schema: s.schema || overwrites.schema,
      entries: (s.entries as any) ?? overwrites.entries,
      coercer: (s.coercer as any) ?? overwrites.coercer,
      validator: (s.validator as any) ?? overwrites.validator,
      refiner: (s.refiner as any) ?? overwrites.refiner,
      meta: {
        ...((s as any)?.meta ?? {}),
        ...(overwrites.meta ?? {})
      }
    });
  }

  static define<T>(name: string, validator: Validator): Type<T, null> {
    return new Type({ type: name, schema: null, validator });
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

  default(v: T): Type<T, S> {
    return Type.callWith(this, ss.defaulted, v);
  }

  use(...modifiers: Modifier<T, S>[]): Type<T, S> {
    return modifiers.reduce((ret, r) => r(ret), this as Type<T, S>);
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

export type EnumLike = { [k: string]: string | number; [nu: number]: string };


export declare type Describe<T> = Type<T, StructSchema<T>>;

export declare type StructSchema<T> = [T] extends [string | undefined | null]
  ? [T] extends [IsMatch<T, string | undefined | null>]
    ? null
    : [T] extends [IsUnion<T>]
      ? EnumSchema<T>
      : T
  : [T] extends [number | undefined | null]
    ? [T] extends [IsMatch<T, number | undefined | null>]
      ? null
      : [T] extends [IsUnion<T>]
        ? EnumSchema<T>
        : T
    : [T] extends [boolean]
      ? [T] extends [IsExactMatch<T, boolean>]
        ? null
        : T
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
        ? null
        : T extends Array<infer E>
          ? T extends IsTuple<T>
            ? null
            : Struct<E>
          : T extends object
            ? T extends IsRecord<T>
              ? null
              : {
                [K in keyof T]: Describe<T[K]>;
              }
            : null;
