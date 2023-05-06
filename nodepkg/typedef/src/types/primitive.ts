import { Type } from "../Type";
import * as ss from "superstruct";

export function literal<T extends boolean>(constant: T): Type<T, T>;
export function literal<T extends number>(constant: T): Type<T, T>;
export function literal<T extends string>(constant: T): Type<T, T>;
export function literal<T>(constant: T): Type<T, null> {
  return Type.from(ss.literal(constant));
}

export const any = () => Type.from(ss.any(), { schema: null });
export const string = () => Type.from(ss.string(), { schema: null });
export const boolean = () => Type.from(ss.boolean(), { schema: null });
export const number = () => Type.from(ss.number(), { schema: null });
export const integer = () => Type.from(ss.integer(), { schema: null });
export const bigint = () => Type.from(ss.bigint(), { schema: null });
