import { type Infer, type TypeAny, type InferTuple, Type } from "../Type";
import * as ss from "superstruct";

export function tuple<A extends TypeAny, B extends TypeAny[]>(
  types: [A, ...B]
): Type<[Infer<A>, ...InferTuple<B>], [A, ...B]> {
  return Type.wrap(ss.tuple(types) as any, (t) =>
    Object.assign(t, {
      schema: types
    })
  );
}
