import { Type, type TypeAny } from "../Type";
import * as ss from "superstruct";
import type { ObjectType } from "superstruct/dist/utils";

export function object<S extends Record<string, TypeAny>>(
  schema: S
): Type<ObjectType<S>, S> {
  return Type.wrap(Object.keys(schema).length == 0 ? ss.object() : ss.object(schema) as any);
}

export function record<K extends string, V>(
  k: Type<K, any>,
  v: Type<V, any>
): Type<Record<K, V>, {
  additionalProperties: V,
  propertyNames: K
}> {
  return Type.wrap(ss.record(k, v) as any, (t) => Object.assign(t, {
    schema: {
      additionalProperties: v,
      propertyNames: k
    }
  }));
}
