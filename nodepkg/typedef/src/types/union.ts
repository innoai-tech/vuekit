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
import { literal } from "./primitive";

export function union<Types extends [...TypeAny[]]>(
  ...types: Types
): Type<InferTuple<Types>[number], null> {
  return Type.wrap(ss.union(types as any), (t) =>
    Object.assign(t, {
      schema: {
        oneOf: types
      }
    })
  );
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
  const s = ss.dynamic<any>((v: any = {}) => {
    const discriminatorPropValue = (v as any)[discriminatorPropName];
    const matched = mapping[discriminatorPropValue];

    if (typeof discriminatorPropValue === "undefined" || !matched) {
      return object({
        [discriminatorPropName]: enums(Object.keys(mapping))
      });
    }

    return object({
      [discriminatorPropName]: literal(discriminatorPropValue),
      ...matched.schema
    });
  });

  return Type.wrap(s as any, (t) =>
    Object.assign(t, {
      schema: {
        discriminator: {
          propertyName: discriminatorPropName
        },
        mapping: mapping
      }
    })
  );
}

type DiscriminatedUnion<
  D extends string,
  Mapping extends Record<string, TypeAny>
> = ValueOf<{
  [K in keyof Mapping]: { [k in D]: K } & Infer<Mapping[K]>;
}>;

type ValueOf<T> = T[keyof T];
