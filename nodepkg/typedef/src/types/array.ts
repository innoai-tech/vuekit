import { type Infer, type TypeAny, Type } from "../Type";
import * as ss from "superstruct";

export function array<T extends TypeAny>(element: T): Type<Infer<T>[], T> {
  return Type.wrap(ss.array(element));
}