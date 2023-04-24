import { Type } from "../Type";
import * as ss from "superstruct";

export function enums<T extends readonly any[]>(
  values: T
): Type<T[number], { [K in T[number]]: K }> {
  return Type.wrap(ss.enums(values as any)) as any;
}

export type EnumLike = { [k: string]: string | number; [nu: number]: string };

export function nativeEnum<T extends EnumLike>(
  e: T
): Type<T[keyof T], { [K in T[keyof T]]: T[keyof T] }> {
  return enums(Object.values(e as any) as any) as any;
}
