import {
	Type,
	TypeAny,
	TypeArray,
	TypeBinary,
	TypeBoolean,
	TypeEnum,
	TypeInteger,
	TypeIntersection,
	TypeNever,
	TypeNull,
	TypeNumber,
	TypeObject,
	TypeRecord,
	TypeRef,
	TypeString,
	TypeTuple,
	TypeUnion,
	TypeWrapper,
} from "./Types";

export const ref = TypeRef.create;
export const any = TypeAny.create;
export const never = TypeNever.create;
export const nil = TypeNull.create;

export const string = TypeString.create;
export const number = TypeNumber.create;
export const integer = TypeInteger.create;
export const boolean = TypeBoolean.create;
export const binary = TypeBinary.create;

export const enums = TypeEnum.create;
export const nativeEnum = TypeEnum.nativeEnum;
export const literal = TypeEnum.literal;

export const object = TypeObject.create;
export const record = TypeRecord.create;
export const array = TypeArray.create;
export const tuple = TypeTuple.create;

export const intersection = TypeIntersection.create;
export const union = TypeUnion.create;
export const discriminatorMapping = TypeUnion.discriminatorMapping;

export const custom = Type.define;
export const refine = TypeWrapper.refine;

export * from "./t.refiners";
