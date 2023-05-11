import { type RecordSchema, Type, type TypeAny } from "../Type";
import * as ss from "superstruct";
import type { ObjectType } from "superstruct/dist/utils";
import { isObject } from "@innoai-tech/lodash";
import { never, any } from "./primitive";

export function object(): Type<Record<string, unknown>, {}>;
export function object<Props extends Record<string, TypeAny>>(
  props?: Props
): Type<ObjectType<Props>, { properties: Props }>;
export function object<Props extends Record<string, TypeAny>>(
  props?: Props
): Type<any> {
  const {} = [props];

  const schema = {
    type: "object",
    properties: props,
    required: [] as string[],
    additionalProperties: props ? never() : any()
    // propertyNames: string(),
  };

  for (const p in props) {
    const propSchema = props[p] as Type;
    if (!propSchema.isOptional) {
      schema.required.push(p);
    }
  }

  return new Type({
    type: "object",
    schema: schema,
    * entries(value: any) {
      if (isObject(value)) {
        const propNames = new Set(Object.keys(value));

        if (schema.properties) {
          for (const key in schema.properties) {
            propNames.delete(key);
            yield [
              key,
              (value as any)[key] as any,
              schema.properties[key] as any
            ];
          }
        }

        for (const key of propNames) {
          yield [key, (value as any)[key] as any, schema.additionalProperties];
        }
      }
    },
    validator(value) {
      return isObject(value) || `Expected an object, but received: ${value}`;
    },
    coercer(value) {
      return isObject(value) ? { ...value } : value;
    }
  });
}

export function record<K extends string, V>(
  k: Type<K, any>,
  v: Type<V, any>
): Type<Record<K, V>, RecordSchema<Record<K, V>>> {
  return Type.from(ss.record(k, v), {
    schema: {
      additionalProperties: v,
      propertyNames: k,
      type: "object"
    } as unknown as RecordSchema<Record<K, V>>
  });
}
