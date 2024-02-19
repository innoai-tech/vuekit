import {TypeRef} from "./TypeRef.ts";
import {TypeAny} from "./TypeAny.ts";
import {DefaultedType, OptionalType, Type, TypeNever, TypeWrapper} from "./Type.ts";
import {TypeNull} from "./TypeNull.ts";
import {TypeString} from "./TypeString.ts";
import {TypeNumber} from "./TypeNumber.ts";
import {TypeInteger} from "./TypeInteger.ts";
import {TypeBoolean} from "./TypeBoolean.ts";
import {TypeBinary} from "./TypeBinary.ts";
import {TypeEnum} from "./TypeEnum.ts";
import {TypeObject} from "./TypeObject.ts";
import {TypeRecord} from "./TypeRecord.ts";
import {TypeArray} from "./TypeArray.ts";
import {TypeTuple} from "./TypeTuple.ts";
import {TypeIntersection} from "./TypeIntersection.ts";
import {TypeUnion} from "./TypeUnion.ts";

export const ref = TypeRef.create;
export const any = TypeAny.create;
export const never = TypeNever.create;
export const nil = TypeNull.create;

export const string = TypeString.create;

export function pattern(pattern: RegExp, msg?: string) {
    return <T extends string, S>(type: Type<T, S>) => {
        return TypeWrapper.refine(type, (value) => {
            if (pattern.test(value)) {
                return true
            }
            return msg ?? `Expected a ${type.type} matching \`/${pattern.source}/\` but received "${value}"`
        }, {
            pattern,
        })
    };
}

export const number = TypeNumber.create;
export const integer = TypeInteger.create;

export function minimum<M extends number>(min: M, msg?: string) {
    return <T extends number, S>(type: Type<T, S>) => {
        return TypeWrapper.refine(type, (value) => {
            if (value >= min) {
                return true
            }
            return msg ?? `Expected value great than or equal ${min}, but received "${value}"`
        }, {
            minimum: min,
        })
    };
}

export function exclusiveMinimum<M extends number>(min: M, msg?: string) {
    return <T extends number, S>(type: Type<T, S>) => {
        return TypeWrapper.refine(type, (value) => {
            if (value > min) {
                return true
            }
            return (msg ?? `Expected value great than ${min}, but received "${value}"`)
        }, {
            exclusiveMinimum: min,
        })
    };
}


export function maximum(max: number, msg?: string) {
    return <T extends number, S>(type: Type<T, S>) => {
        return TypeWrapper.refine(type, (value) => {
            if (value <= max) {
                return true
            }
            return (msg ?? `Expected value less than or equal ${max}, but received "${value}"`)
        }, {
            maximum: max,
        }) as any
    };
}


export function exclusiveMaximum(max: number, msg?: string) {
    return <T extends number, S>(type: Type<T, S>) => {
        return TypeWrapper.refine(type, (value) => {
            if (value < max) {
                return true
            }
            return msg ?? `Expected value less than or equal ${max}, but received "${value}"`
        }, {
            exclusiveMaximum: max,
        }) as any;
    };
}


export function multipleOf(multipleOf: number, msg?: string) {
    return <T extends number, S>(type: Type<T, S>) => {
        return TypeWrapper.refine(type, (value) => {
            if (value % multipleOf == 0) {
                return true
            }
            return msg ?? `Expected value multiple of ${multipleOf}, but received "${value}"`
        }, {
            multipleOf: multipleOf,
        });
    };
}

export const boolean = TypeBoolean.create;
export const binary = TypeBinary.create;

export const enums = TypeEnum.create;
export const nativeEnum = TypeEnum.nativeEnum;
export const literal = TypeEnum.literal;

export const object = TypeObject.create;
export const record = TypeRecord.create;

export const tuple = TypeTuple.create;
export const array = TypeArray.create;

export function minItems(minItems: number, msg?: string) {
    return <T extends any[], S>(type: Type<T, S>) => {
        return TypeWrapper.refine(type, (value) => {
            if (Array.isArray(value) && value.length >= minItems) {
                return true
            }
            return msg ?? `Expected array value at least ${minItems}, but received "${value?.length}"`
        }, {
            minItems: minItems,
        })
    };
}

export function maxItems(maxItems: number, msg?: string) {
    return <T extends any[], S>(type: Type<T, S>) => {
        return TypeWrapper.refine(type, (value) => {
            if (Array.isArray(value) && value.length <= maxItems) {
                return true
            }
            return msg ?? `Expected array value  ${maxItems}, but received "${value?.length}"`
        }, {
            maxItems: maxItems,
        });
    };
}

export const intersection = TypeIntersection.create;
export const union = TypeUnion.create;
export const discriminatorMapping = TypeUnion.discriminatorMapping;

export const custom = Type.define;
export const refine = TypeWrapper.refine;

export function defaults<T>(v: T) {
    return <U extends Type<T, any>>(type: U): U => {
        return DefaultedType.create(type, v) as unknown as U;
    };
}

export function optional() {
    return <T, S>(type: Type<T, S>): Type<T | undefined, S> => {
        return OptionalType.create(type) as unknown as any;
    };
}

export function annotate<M extends Record<string, any>>(meta: M) {
    return <T, S>(type: Type<T, S>): Type<T, S & M> => {
        return TypeWrapper.of(type, {$meta: meta}) as unknown as Type<T, S & M>;
    };
}
