import { isArray, isObject, isUndefined } from "es-toolkit/compat";
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

export class Schema {
  static RecordKey = Symbol("RecordKey");

  static meta = Symbol("meta");
  static optional = Symbol("optional");
  static underlying = Symbol("underlying");
  static unwrap = Symbol("unwrap");

  static extractSchema = (v: any) => {
    return new Collector().toValue(v);
  };

  static extractMeta = (v: any) => {
    return new Collector().toValue(v["meta"] ?? v[Schema.meta]);
  };

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
  ): Simplify<PropertyNames<S> & PropertyNames<E>>;
  static create<S extends {}, E extends {}>(
    schema: S,
    origin: E,
    scope?: symbol,
  ): Simplify<PropertyNames<S> & PropertyNames<E>>;
  static create<S extends {}, E extends {}>(
    base: S,
    origin?: E,
    scope?: symbol,
  ): Simplify<PropertyNames<S> & PropertyNames<E>> {
    const parent = origin ?? (base as any)[Schema.underlying]?.["schema"] ?? {};

    let meta: Schema | undefined;

    return new Proxy(
      {},
      {
        ownKeys(_: {}): ArrayLike<string | symbol> {
          const m = new Map<string, string>();

          if (scope) {
            if ((base as any)[scope]) {
              for (const x of Object.getOwnPropertyNames(
                (base as any)[scope],
              )) {
                m.set(x, x);
              }
            }

            if (parent) {
              if ((parent as any)[scope]) {
                for (const x of Object.getOwnPropertyNames(
                  (parent as any)[scope],
                )) {
                  m.set(x, x);
                }
              }
            }
          } else {
            for (const x of Object.getOwnPropertyNames(base)) {
              m.set(x, x);
            }

            if (parent) {
              for (const x of Object.getOwnPropertyNames(parent)) {
                m.set(x, x);
              }
            }
          }

          return [...m.keys()];
        },
        get(_: {}, p: string | symbol): any {
          if (p === Schema.meta) {
            return (meta ??= Schema.create(base, parent, Schema.meta) as any);
          }

          if (scope) {
            if (isObject(base)) {
              const v = (base as any)?.[scope]?.[p];
              if (!isUndefined(v)) {
                return v;
              }
            }
            return parent ? (parent as any)?.[scope]?.[p] : undefined;
          }

          if (isObject(base)) {
            const v = (base as any)?.[p];
            if (!isUndefined(v)) {
              return v;
            }
          }

          return parent ? (parent as any)[p] : undefined;
        },
      },
    ) as any;
  }

  static schemaProp<T = any>(
    withSchema: { schema: any },
    key: string | symbol,
  ): T | undefined {
    return getSchema(withSchema.schema, key);
  }

  static metaProp<T = any>(
    withSchema: { schema: any },
    key: string | symbol,
  ): T | undefined {
    return getMeta(withSchema.schema, key);
  }
}

const getSchema = (schema: any, key: any): any => {
  if (!isObject(schema)) {
    return undefined;
  }
  return (
    (schema as any)[key] ??
    ((schema as any)[Schema.unwrap]
      ? getSchema((schema as any)[Schema.unwrap]().schema, key)
      : undefined)
  );
};

const getMeta = (schema: any, metaKey: any): any => {
  if (!isObject(schema)) {
    return undefined;
  }
  return (
    (schema as any)[Schema.meta]?.[metaKey] ??
    ((schema as any)[Schema.unwrap]
      ? getMeta((schema as any)[Schema.unwrap]().schema, metaKey)
      : undefined)
  );
};

class Collector {
  constructor(private deref: boolean = false) {}

  toValue(v: any): any {
    if (v) {
      if (!isUndefined(v["schema"])) {
        return this.toValue(v["schema"]);
      }

      if (this.deref) {
        if (v[Schema.unwrap]) {
          return this.toValue(v[Schema.unwrap]());
        }
      }

      if (isArray(v)) {
        return this.toArray(v);
      }

      if (v.constructor === Object) {
        return this.toObject(v);
      }
    }

    return v;
  }

  toObject(s: any): any {
    const x: Record<string, any> = {};

    for (const k of Object.getOwnPropertyNames(s)) {
      x[k] = this.toValue(s[k]);
    }
    return x;
  }

  toArray(values: any[]): any[] {
    const arr: any[] = [];
    for (const value of values) {
      arr.push(this.toValue(value));
    }
    return arr;
  }
}
