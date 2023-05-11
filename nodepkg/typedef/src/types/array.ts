import {
  type Infer,
  type TypeAny,
  Type,
  type ArraySchema,
  type InferTuple,
  type TupleSchema
} from "../Type";
import * as ss from "superstruct";

export function array<T extends TypeAny>(
  items: T
): Type<Array<Infer<T>>, ArraySchema<T>> {
  return Type.from(ss.array(items), {
    schema: {
      type: "array",
      items: items
    }
  });
}


export function tuple<B extends TypeAny[]>(
  types: [...B]
): Type<[...InferTuple<B>], TupleSchema<[...InferTuple<B>]>> {
  return Type.from(ss.tuple(types as any) as any, {
    schema: {
      type: "array",
      items: types as any
    }
  });
}
