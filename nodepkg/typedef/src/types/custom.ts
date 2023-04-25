import { Type, type Context, type Validator, type TypeAny } from "../Type";

export function custom<T>(validator?: Validator, name = "custom") {
  return Type.define<T>(name, validator ?? (() => true));
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
