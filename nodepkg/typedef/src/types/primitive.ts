import * as ss from "superstruct";
import {
  type BooleanSchema,
  type IntegerSchema,
  type NativeEnumLike,
  type NumberSchema,
  type StringSchema,
  Type
} from "../Type";

export const never = (): Type<never, false> =>
  Type.from(ss.never() as any, { schema: false });
export const any = () => Type.from(ss.any(), { schema: {} });
export const nil = () => {
  return new Type({
    type: "nil",
    schema: { type: "null" },
    validator: (v) => Object.is(v, null)
  });
};

export const string = (): Type<string, StringSchema> =>
  Type.from(ss.string(), { schema: { type: "string" } });

export const boolean = (): Type<boolean, BooleanSchema> =>
  Type.from(ss.boolean(), { schema: { type: "boolean" } });

export const number = (): Type<number, NumberSchema> =>
  Type.from(ss.number(), { schema: { type: "number" } });

export const integer = (): Type<number, IntegerSchema> =>
  Type.from(ss.integer(), { schema: { type: "integer" } });

export function literal<T extends boolean>(constant: T): Type<T, { enum: [T] }>;
export function literal<T extends number>(constant: T): Type<T, { enum: [T] }>;
export function literal<T extends string>(constant: T): Type<T, { enum: [T] }>;
export function literal<T>(constant: T): Type<T, { enum: [T] }> {
  return Type.from(ss.literal(constant), { schema: { enum: [constant] } });
}

export function enums<U extends string, T extends readonly U[]>(
  values: T
): Type<T[number], { enum: T }>;
export function enums<U extends number, T extends readonly U[]>(
  values: T
): Type<T[number], { enum: T }> {
  return Type.from(ss.enums(values), { schema: { enum: values } });
}

export function nativeEnum<
  U extends NativeEnumLike,
  T extends readonly T[keyof T][]
>(e: U): Type<U[keyof U], { enum: T }> {
  return enums(Object.values(e as any) as any) as any;
}
