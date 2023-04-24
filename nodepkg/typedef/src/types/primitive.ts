import { Type } from "../Type";
import * as ss from "superstruct";

export function literal<T extends boolean>(constant: T): Type<T, T>;
export function literal<T extends number>(constant: T): Type<T, T>;
export function literal<T extends string>(constant: T): Type<T, T>;
export function literal<T>(constant: T): Type<T, null> {
  return new Type(ss.literal(constant));
}

export const any = () => new Type(ss.any());
export const string = () => new Type(ss.string());
export const boolean = () => new Type(ss.boolean());
export const number = () => new Type(ss.number());
export const integer = () => new Type(ss.integer());
export const bigint = () => new Type(ss.bigint());
