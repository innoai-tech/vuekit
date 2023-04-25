import { type EnumLike, Type } from "../Type";
import * as ss from "superstruct";

export function enums<T extends readonly any[]>(
  values: T
): Type<T[number], { [K in T[number]]: K }> {
  return Type.from(ss.enums(values));
}

export function nativeEnum<T extends EnumLike>(
  e: T
): Type<T[keyof T], { [K in T[keyof T]]: T[keyof T] }> {
  return enums(Object.values(e as any) as any) as any;
}
