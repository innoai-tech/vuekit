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
  Mapping extends Record<string, TypeAny>
>(
  discriminatorPropName: D,
  mapping: Mapping
): Type<
  Simplify<DiscriminatedUnion<D, Mapping>>,
  {
    discriminator: {
      propertyName: D;
    };
    mapping: Mapping;
  }
> {
  const discriminatorValues = enums(Object.keys(mapping));

  const c = dynamic<any>(function(v: any = {}, _, t) {
    const discriminatorPropValue = (v as any)[discriminatorPropName];
    const matched = mapping[discriminatorPropValue];

    if (typeof discriminatorPropValue === "undefined" || !matched) {
      return object({
        [discriminatorPropName]: Type.from(discriminatorValues, {
          meta: t.meta
        })
      });
    }

    return object({
      [discriminatorPropName]: Type.from(discriminatorValues, {
        meta: t.meta
      }),
      ...matched.schema
    });
  });

  return Type.from(c, {
    schema: {
      discriminator: {
        propertyName: discriminatorPropName
      },
      mapping: mapping
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
