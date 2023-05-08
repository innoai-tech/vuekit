import { type Infer, type TypeAny, type InferTuple, Type } from "../Type";
import * as ss from "superstruct";

export function tuple<A extends TypeAny, B extends TypeAny[]>(
  types: [A, ...B]
): Type<[Infer<A>, ...InferTuple<B>], { items: [A, ...B] }> {
  return Type.from(ss.tuple(types), {
    schema: {
      type: "array",
      items: types
    }
  });
}
