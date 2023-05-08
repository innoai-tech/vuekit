import { Type, type Context, type Validator, type TypeAny } from "../Type";
import * as ss from "superstruct";

export function ref<T>(
  ref: string,
  underlying: () => Type<T, any>
): Type<T, { $ref: string }> {
  return Type.from(ss.lazy(underlying) as any, {
    schema: {
      $ref: ref,
      $underlying: underlying
    }
  }) as any;
}

export function custom<T>(validator?: Validator, name = "custom") {
  return Type.define<T, null>(name, validator ?? (() => true), null);
}

export function binary() {
  return Type.define<File | Blob, null>(
    "binary",
    (v) => v instanceof File || v instanceof Blob,
    null
  );
}

export function dynamic<T>(
  fn: (value: unknown, ctx: Context, t: Type<T>) => Type<T, any>
): Type<T, null> {
  return new Type({
    type: "dynamic",
    schema: null,
    * entries(value, ctx, t) {
      const struct = fn(value, ctx, t as TypeAny);
      yield* struct.entries(value, ctx);
    },
    validator(value, ctx, t) {
      const struct = fn(value, ctx, t as TypeAny);
      return struct.validator(value, ctx);
    },
    coercer(value, ctx, t) {
      const struct = fn(value, ctx, t as TypeAny);
      return struct.coercer(value, ctx);
    },
    refiner(value, ctx, t) {
      const struct = fn(value, ctx, t as TypeAny);
      return struct.refiner(value, ctx);
    }
  });
}
