import * as ss from "superstruct";
import { Type, type TypeAny, type Infer } from "../Type";

export function intersection<Types extends [...TypeAny[]]>(
  ...types: Types
): Type<IntersectionTypes<Types>, { allOf: Types }> {
  return Type.wrap(ss.intersection(types as any) as any, (t) =>
    Object.assign(t, { schema: { allOf: types } })
  );
}

type IntersectionTypes<Types extends any[]> = Types extends [
    infer T,
    ...infer O
  ]
  ? T extends TypeAny
    ? Infer<T> & IntersectionTypes<O>
    : unknown
  : unknown;
