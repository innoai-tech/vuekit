import {
  Type,
  type TypeAny,
  type InferTuple,
  type Infer,
  type Simplify
} from "../Type";
import * as ss from "superstruct";
import { object } from "./object";
import { dynamic } from "./custom";
import { literal, enums } from "./primitive";
import { mapValues } from "@innoai-tech/lodash";

export function union<Types extends [...TypeAny[]]>(
  ...types: Types
): Type<InferTuple<Types>[number], { oneOf: Types }> {
  return new Type({
    ...(ss.union(types as any) as any),
    schema: {
      oneOf: types
    }
  });
}

export function discriminatorMapping<
  D extends string,
  Mapping extends Record<string, TypeAny>
>(
  discriminatorPropName: D,
  mapping: Mapping
): Type<
  Simplify<DiscriminatedUnion<D, Mapping>>,
  {
    oneOf: Array<Type<any, Record<string, TypeAny>>>;
    discriminator: {
      propertyName: D;
    };
  }
> {
  const discriminatorValues = Object.keys(mapping);
  const discriminatorValuesSchema = enums(discriminatorValues);

  const normalizedMapping = mapValues(mapping, (def, discriminatorValue) => {
    const schema: Record<string, any> = {
      [discriminatorPropName]: literal(discriminatorValue)
    };

    for (const [prop, _, t] of def.entries({}, { path: [], branch: [] })) {
      schema[prop] = t;
    }

    return object(schema);
  });

  const c = dynamic<any>(function(v: any = {}, _, t) {
    const discriminatorPropValue = (v as any)[discriminatorPropName];
    const matched = normalizedMapping[discriminatorPropValue];

    if (typeof discriminatorPropValue === "undefined" || !matched) {
      return object({
        [discriminatorPropName]: Type.from(discriminatorValuesSchema, {
          meta: t.meta
        })
      });
    }

    return object({
      [discriminatorPropName]: Type.from(discriminatorValuesSchema, {
        meta: t.meta
      }),
      ...(matched.schema.properties)
    });
  });

  console.log(normalizedMapping)

  return Type.from(c, {
    type: "union",
    schema: {
      oneOf: Object.values(normalizedMapping) as any,
      discriminator: {
        propertyName: discriminatorPropName
      }
    }
  });
}

type DiscriminatedUnion<
  D extends string,
  Mapping extends Record<string, TypeAny>
> = ValueOf<{
  [K in keyof Mapping]: { [k in D]: K } & Infer<Mapping[K]>;
}>;

type ValueOf<T> = T[keyof T];
