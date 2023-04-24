import { Type } from "../Type";
import * as ss from "superstruct";

export function literal<T extends boolean>(constant: T): Type<T, T>;
export function literal<T extends number>(constant: T): Type<T, T>;
export function literal<T extends string>(constant: T): Type<T, T>;
export function literal<T>(constant: T): Type<T, null> {
  return Type.wrap(ss.literal(constant));
}

export const any = () => Type.wrap(ss.any());
export const string = () => Type.wrap(ss.string());
export const boolean = () => Type.wrap(ss.boolean());
export const number = () => Type.wrap(ss.number());
export const integer = () => Type.wrap(ss.integer());
export const bigint = () => Type.wrap(ss.bigint());
