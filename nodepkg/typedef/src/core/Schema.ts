import { isArray, isUndefined } from "./util.ts";
import type { OmitBy, PickBy } from "./Type.ts";

export type Simplify<T> = T extends any[] ? T : { [K in keyof T]: T[K] } & {};

export type Optionalize<S extends object> = OmitBy<S, undefined> &
  Partial<PickBy<S, undefined>>;

export type PropertyNames<O extends {}> = {
  [K in keyof O as K extends symbol ? never : K]: O[K];
};

export type Constructor = {
  new (...args: any[]): any;
};

function toObject(s: any): any {
  const x: Record<string, any> = {};

  for (const k of Object.getOwnPropertyNames(s)) {
    x[k] = toValue(s[k]);
  }
  return x;
}

function toArray(values: any[]): any[] {
  const arr: any[] = [];
  for (const value of values) {
    arr.push(toValue(value));
  }
  return arr;
}

function toValue(v: any): any {
  if (v) {
    if (!isUndefined(v["schema"])) {
      return toValue(v["schema"]);
    }

    if (isArray(v)) {
      return toArray(v);
    }

    if (v.constructor === Object) {
      return toObject(v);
    }
  }

  return v;
}

export class Schema {
  static RecordKey = Symbol("RecordKey");

  static meta = Symbol("meta");
  static optional = Symbol("optional");
  static underlying = Symbol("underlying");
  static unwrap = Symbol("unwrap");

  static schemaAll = toValue;

  static create<S extends {}>(
    schema: S,
  ): Simplify<
    PropertyNames<S> & {
      metadata: Record<string, any>;
    }
  >;
  static create<S extends {}, E extends {}>(
    schema: S,
    origin: E,
  ): Simplify<
    PropertyNames<S> &
      PropertyNames<E> & {
        metadata: Record<string, any>;
      }
  >;
  static create<S extends {}, E extends {}>(
    schema: S,
    origin?: E,
  ): PropertyNames<S> &
    PropertyNames<E> & {
      metadata: Record<string, any>;
    } {
    const parent = origin ?? (schema as any)[Schema.underlying]?.["schema"];

    return new Proxy(
      {},
      {
        ownKeys(_: {}): ArrayLike<string | symbol> {
          if (parent) {
            const m = new Map<string, string>();

            for (const x of Object.getOwnPropertyNames(schema)) {
              m.set(x, x);
            }

            for (const x of Object.getOwnPropertyNames(parent)) {
              m.set(x, x);
            }

            return [...m.keys()];
          }

          return Object.getOwnPropertyNames(schema);
        },
        get(_: {}, p: string | symbol): ArrayLike<string | symbol> {
          if (p == "metadata") {
            return Schema.create(
              (schema as any)[Schema.meta] ?? {},
              parent ? (parent as any)[Schema.meta] : undefined,
            ) as any;
          }
          return (
            (schema as any)[p] ?? (parent ? (parent as any)[p] : undefined)
          );
        },
      },
    ) as any;
  }

  static schemaProp<T = any>(
    withSchema: { schema: any },
    key: string | symbol,
  ): T | undefined {
    return (
      withSchema.schema[key] ??
      (withSchema.schema && withSchema.schema[Schema.unwrap]
        ? Schema.schemaProp(withSchema.schema[Schema.unwrap](), key)
        : undefined)
    );
  }

  static metaProp<T = any>(
    withSchema: { meta: any; schema: any },
    key: string | symbol,
  ): T | undefined {
    return (
      withSchema.meta[key] ??
      (withSchema.schema && withSchema.schema[Schema.unwrap]
        ? Schema.metaProp(withSchema.schema[Schema.unwrap](), key)
        : undefined)
    );
  }
}
