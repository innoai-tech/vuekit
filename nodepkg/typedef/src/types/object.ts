import { Type, type TypeAny } from "../Type";
import * as ss from "superstruct";
import type { ObjectType } from "superstruct/dist/utils";

export function object(): Type<Record<string, unknown>, null>
export function object<S extends Record<string, TypeAny>>(schema: S): Type<ObjectType<S>, S>
export function object<S extends Record<string, TypeAny>>(schema?: S): Type<any> {
  return Type.from(schema ? ss.object(schema) : ss.object() as any);
}

export function record<K extends string, V>(
  k: Type<K, any>,
  v: Type<V, any>
): Type<Record<K, V>, {
  additionalProperties: Type<V, any>,
  propertyNames: Type<K, any>
}> {
  return Type.from(ss.record(k, v), {
    schema: {
      additionalProperties: v,
      propertyNames: k
    }
  });
}
