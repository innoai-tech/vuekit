import * as ss from "superstruct";
import { Type, type TypeAny, type Infer } from "../Type";

export function intersection<Types extends [...TypeAny[]]>(
  ...types: Types
): Type<IntersectionTypes<Types>, { allOf: Types }> {
  return Type.from(ss.intersection(types as any), {
    schema: { allOf: types }
  });
}

type IntersectionTypes<Types extends any[]> = Types extends [
    infer T,
    ...infer O
  ]
  ? T extends TypeAny
    ? Infer<T> & IntersectionTypes<O>
    : unknown
  : unknown;
