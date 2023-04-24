import { Type, type Context, type Validator } from "../Type";

export function custom<T>(validator?: Validator, name = "custom") {
  return Type.define<T>(name, validator ?? (() => true));
}

export function dynamic<T>(
  fn: (value: unknown, ctx: Context, t: Type<T>) => Type<T, any>
): Type<T, null> {
  return new Type({
    type: "dynamic",
    schema: null,
    * entries(value, ctx) {
      const struct = fn(value, ctx, this as any);
      yield* struct.entries(value, ctx);
    },
    validator(value, ctx) {
      const struct = fn(value, ctx, this as any);
      return struct.validator(value, ctx);
    },
    coercer(value, ctx) {
      const struct = fn(value, ctx, this as any);
      return struct.coercer(value, ctx);
    },
    refiner(value, ctx) {
      const struct = fn(value, ctx, this as any);
      return struct.refiner(value, ctx);
    }
  });
}
