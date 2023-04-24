import { Type, type TypeAny } from "../Type";
import * as ss from "superstruct";
import type { ObjectType } from "superstruct/dist/utils";

export function object(): Type<Record<string, unknown>, null>
export function object<S extends Record<string, TypeAny>>(schema: S): Type<ObjectType<S>, S>
export function object<S extends Record<string, TypeAny>>(schema?: S): Type<any> {
  return new Type(schema ? ss.object(schema) : ss.object());
}

export function record<K extends string, V>(
  k: Type<K, any>,
  v: Type<V, any>
): Type<Record<K, V>, {
  additionalProperties: V,
  propertyNames: K
}> {
  return new Type({
    ...ss.record(k, v) as any,
    schema: {
      additionalProperties: v,
      propertyNames: k
    }
  });
}
