import { TypeRef } from "./TypeRef.ts";
import { TypeAny } from "./TypeAny.ts";
import { defineModifier, type Infer, type InferSchema, type Type } from "./Type.ts";
import { TypeNull } from "./TypeNull.ts";
import { TypeString } from "./TypeString.ts";
import { TypeNumber } from "./TypeNumber.ts";
import { TypeInteger } from "./TypeInteger.ts";
import { TypeBoolean } from "./TypeBoolean.ts";
import { TypeBinary } from "./TypeBinary.ts";
import { TypeEnum } from "./TypeEnum.ts";
import { TypeObject } from "./TypeObject.ts";
import { TypeRecord } from "./TypeRecord.ts";
import { TypeArray } from "./TypeArray.ts";
import { TypeTuple } from "./TypeTuple.ts";
import { TypeIntersection } from "./TypeIntersection.ts";
import { TypeUnion } from "./TypeUnion.ts";
import { DefaultedType, OptionalType, TypeUnknown, TypeWrapper } from "./TypeUnknown.ts";
import { TypeNever } from "./TypeNever.ts";
import { Schema } from "./Schema.ts";
import { isArray } from "es-toolkit/compat";

export const ref = TypeRef.create;
export const any = TypeAny.create;
export const never = TypeNever.create;
export const nil = TypeNull.create;

export const string = TypeString.create;

export const minLength = defineModifier(
  <T extends string>(type: Type<T>, min: number, msg?: string) => {
    return TypeWrapper.refine(
      type,
      (value) => {
        if (value && value.length >= min) {
          return true;
        }
        return (
          msg ?? `Expected string value length great than or equal ${min}, but received "${value}"`
        );
      },
      {
        minLength: min,
      },
    );
  },
);

export const maxLength = defineModifier(
  <T extends Type<string>>(type: T, max: number, msg?: string) => {
    return TypeWrapper.refine(
      type,
      (value) => {
        if (value && value.length <= max) {
          return true;
        }
        return (
          msg ?? `Expected string value length less than or equal ${max}, but received "${value}"`
        );
      },
      {
        maxLength: max,
      },
    );
  },
);

export const pattern = defineModifier(
  <T extends Type<string>>(type: T, pattern: RegExp, errMsg?: string) => {
    const t = TypeWrapper.refine(
      type,
      (value) => {
        if (pattern.test(value)) {
          return true;
        }
        return (
          errMsg ??
          `Expected a ${type.type} matching \`/${pattern.source}/\` but received "${value}"`
        );
      },
      {
        pattern: pattern.source,
      },
    );

    if (errMsg) {
      return t.use(
        annotate({
          "x-pattern-err-msg": errMsg,
        }),
      );
    }

    return t;
  },
);

export const number = TypeNumber.create;
export const integer = TypeInteger.create;

export const minimum = defineModifier(
  <T extends Type<number>>(type: T, min: number, msg?: string) => {
    return TypeWrapper.refine(
      type,
      (value) => {
        if (value >= min) {
          return true;
        }
        return msg ?? `Expected value great than or equal ${min}, but received "${value}"`;
      },
      {
        minimum: min,
      },
    );
  },
);

export const exclusiveMinimum = defineModifier(
  <T extends Type<number>>(type: T, min: number, msg?: string) => {
    return TypeWrapper.refine(
      type,
      (value) => {
        if (value > min) {
          return true;
        }
        return msg ?? `Expected value great than ${min}, but received "${value}"`;
      },
      {
        exclusiveMinimum: min,
      },
    );
  },
);

export const maximum = defineModifier(
  <T extends Type<number>>(type: T, max: number, msg?: string) => {
    return TypeWrapper.refine(
      type,
      (value) => {
        if (value <= max) {
          return true;
        }
        return msg ?? `Expected value less than or equal ${max}, but received "${value}"`;
      },
      {
        maximum: max,
      },
    ) as any;
  },
);

export const exclusiveMaximum = defineModifier(
  <T extends Type<number>>(type: T, max: number, msg?: string) => {
    return TypeWrapper.refine(
      type,
      (value) => {
        if (value < max) {
          return true;
        }
        return msg ?? `Expected value less than or equal ${max}, but received "${value}"`;
      },
      {
        exclusiveMaximum: max,
      },
    ) as any;
  },
);

export const multipleOf = defineModifier(
  <T extends Type<number>>(type: T, multipleOf: number, msg?: string) => {
    return TypeWrapper.refine(
      type,
      (value) => {
        if (value % multipleOf == 0) {
          return true;
        }
        return msg ?? `Expected value multiple of ${multipleOf}, but received "${value}"`;
      },
      {
        multipleOf: multipleOf,
      },
    );
  },
);

export const boolean = TypeBoolean.create;
export const binary = TypeBinary.create;

export const enums = TypeEnum.create;
export const nativeEnum = TypeEnum.nativeEnum;
export const literal = TypeEnum.literal;

export const object = TypeObject.create;
export const record = TypeRecord.create;

export const tuple = TypeTuple.create;
export const array = TypeArray.create;

export const minItems = defineModifier(
  <T extends Type<any[]>>(type: T, minItems: number, msg?: string) => {
    return TypeWrapper.refine(
      type,
      (value) => {
        if (isArray(value) && value.length >= minItems) {
          return true;
        }
        return msg ?? `Expected array value at least ${minItems}, but received "${value?.length}"`;
      },
      {
        minItems: minItems,
      },
    );
  },
);

export const maxItems = defineModifier(
  <T extends Type<any[]>>(type: T, maxItems: number, msg?: string) => {
    return TypeWrapper.refine(
      type,
      (value) => {
        if (isArray(value) && value.length <= maxItems) {
          return true;
        }
        return msg ?? `Expected array value  ${maxItems}, but received "${value?.length}"`;
      },
      {
        maxItems: maxItems,
      },
    );
  },
);

export const intersection = TypeIntersection.create;
export const union = TypeUnion.create;
export const discriminatorMapping = TypeUnion.discriminatorMapping;

export const custom = TypeUnknown.define;
export const refine = TypeWrapper.refine;

export const defaults = defineModifier(
  <T extends any, U extends Type<T, any>>(
    type: U,
    v: T,
  ): Type<Infer<U> | undefined, InferSchema<U>> => {
    return DefaultedType.create(type, v) as unknown as U;
  },
);

export const optional = defineModifier(
  <T extends Type>(type: T): Type<Infer<T> | undefined, InferSchema<T>> => {
    return OptionalType.create(type) as unknown as any;
  },
);

export const annotate = defineModifier(
  <T extends Type, M extends Record<string, any>>(type: T, meta: M): T => {
    return TypeWrapper.of(type, { [Schema.meta]: meta }) as unknown as any;
  },
);
