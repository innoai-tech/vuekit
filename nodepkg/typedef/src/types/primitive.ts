import { Type } from "../Type";
import * as ss from "superstruct";

export function literal<T extends boolean>(constant: T): Type<T, T>;
export function literal<T extends number>(constant: T): Type<T, T>;
export function literal<T extends string>(constant: T): Type<T, T>;
export function literal<T>(constant: T): Type<T, null> {
  return Type.from(ss.literal(constant));
}

export const any = () => Type.from(ss.any());
export const string = () => Type.from(ss.string());
export const boolean = () => Type.from(ss.boolean());
export const number = () => Type.from(ss.number());
export const integer = () => Type.from(ss.integer());
export const bigint = () => Type.from(ss.bigint());
