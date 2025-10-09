import { defineType, type Entity, type Infer, type Type } from "./Type.ts";
import { TypeUnknown } from "./TypeUnknown.ts";
import { isObjectLike } from "es-toolkit/compat";
import { Schema } from "./Schema.ts";

export class TypeRecord<
  K extends string,
  V,
  S extends {
    propertyNames: Type<K>;
    additionalProperties: Type<V>;
  },
> extends TypeUnknown<
  Record<K, V>,
  {
    type: "object";
  } & S
> {
  static create = defineType(
    <K extends Type<string>, V extends Type>(k: K, v: V) => {
      return new TypeRecord<
        Infer<K>,
        Infer<V>,
        {
          propertyNames: K;
          additionalProperties: V;
        }
      >({
        type: "object",
        propertyNames: k,
        additionalProperties: v,
      });
    },
  );

  override get type() {
    return "record";
  }

  override *entries(value: unknown): Iterable<Entity> {
    if (isObjectLike(value)) {
      for (const [k, v] of Object.entries(value as object)) {
        yield [Schema.RecordKey, k, this.schema.propertyNames];
        yield [k, v, this.schema.additionalProperties];
      }
    }
  }

  override validator(value: unknown) {
    return isObjectLike(value);
  }
}
