import {
  Type,
  type TypeAny,
  type InferTuple,
  type Infer,
  type Simplify
} from "../Type";
import * as ss from "superstruct";
import { enums } from "./enums";
import { object } from "./object";
import { dynamic } from "./custom";

export function union<Types extends [...TypeAny[]]>(
  ...types: Types
): Type<InferTuple<Types>[number], null> {
  return new Type({
    ...(ss.union(types as any) as any),
    schema: {
      oneOf: types
    }
  });
}

export function discriminatorMapping<
  D extends string,
  Mapping extends Record<string, Type<any, Record<string, TypeAny>>>
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

  const c = dynamic<any>(function(v: any = {}, _, t) {
    const discriminatorPropValue = (v as any)[discriminatorPropName];
    const matched = mapping[discriminatorPropValue];

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
      ...(matched.schema as any)
    });
  });

  return Type.from(c, {
    type: "union",
    schema: {
      oneOf: discriminatorValues.map((discriminatorValue) => {
        return object({
          [discriminatorPropName]: enums([discriminatorValue]),
          ...(mapping[discriminatorValue]!.schema as any)
        });
      }),
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
