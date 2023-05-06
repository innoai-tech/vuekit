import { type NativeEnumLike, type EnumSchema, Type } from "../Type";
import * as ss from "superstruct";

export function enums<U extends string, T extends readonly U[]>(
  values: T
): Type<T[number], EnumSchema<U>>;
export function enums<U extends number, T extends readonly U[]>(
  values: T
): Type<T[number], EnumSchema<U>> {
  return Type.from(ss.enums(values));
}

export function nativeEnum<T extends NativeEnumLike>(
  e: T
): Type<T[keyof T], EnumSchema<T[keyof T]>> {
  return enums(Object.values(e as any) as any) as any;
}
