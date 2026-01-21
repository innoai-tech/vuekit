import {
  type Context,
  defineType,
  EmptyContext,
  type Entity,
  type Infer,
  type InferSchema,
  type MergeSchema,
  type Result,
  SymbolType,
  toFailures,
  type Type,
  type TypeDefineObject,
  TypedError,
  type TypeModifier,
  validate,
} from "./Type.ts";
import { Schema } from "./Schema.ts";
import { isString } from "es-toolkit/compat";

export class TypeUnknown<T = unknown, Schema = unknown> implements Type<
  T,
  Schema
> {
  static define = defineType(
    <T>(
      validator: (value: unknown, ctx: Context) => Result = () => true,
    ): Type<T, null> => {
      class CustomType<T> extends TypeUnknown<T, null> {
        override validator(value: unknown, ctx: Context): Result {
          return validator(value, ctx);
        }
      }

      return new CustomType<T>(null);
    },
  );

  static fromTypeObject = (x: TypeDefineObject, baseType?: Type) => {
    const t = x.type ?? baseType ?? new TypeUnknown({});

    if (x.modifies) {
      return t.use(...(x.modifies ?? []));
    }

    return t;
  };

  readonly [SymbolType]: T = SymbolType as any;

  readonly schema: Schema;

  constructor(schema: Schema) {
    if (schema) {
      this.schema = Schema.create(schema) as any;
      return;
    }
    this.schema = schema ?? (null as any);
  }

  get meta() {
    return this.schema ? (this.schema as any)[Schema.meta] : {};
  }

  get type() {
    return (this.schema as any)?.["type"] ?? "unknown";
  }

  refiner(_value: T, _context: Context): Result {
    return [];
  }

  validator(_value: unknown, _context: Context): Result {
    return [];
  }

  coercer(value: unknown, _context: Context): T | undefined {
    if (isString(value)) {
      const t = value.trim();

      if (t.length >= 2) {
        if (t.startsWith("{") && t.endsWith("}")) {
          try {
            return JSON.parse(t);
            // oxlint-disable-next-line no-unused-vars
          } catch (e) {}
        }
        if (t.startsWith("[") && t.endsWith("]")) {
          try {
            return JSON.parse(t);
            // oxlint-disable-next-line no-unused-vars
          } catch (e) {}
        }
      }
    }

    return value as T;
  }

  *entries(
    _value: unknown,
    _context: Context = EmptyContext,
  ): Iterable<Entity> {}

  public validate(
    value: unknown,
    options: {
      coerce?: boolean;
      message?: string;
    } = {},
  ): [TypedError, undefined] | [undefined, T] {
    return validate(value, this, options);
  }

  public create(value: unknown): T {
    const result = validate(value, this, { coerce: true });

    if (result[0]) {
      throw result[0];
    }

    return result[1] as T;
  }

  public mask(value: unknown): T {
    const result = validate(value, this, { coerce: true, mask: true });
    if (result[0]) {
      throw result[0];
    }
    return result[1] as T;
  }

  use(...modifiers: TypeModifier<any, any>[]): Type<T, Schema> {
    return modifiers.reduce((t, m) => m.modify(t), this as Type<T, Schema>);
  }

  optional(): Type<T | undefined, Schema> {
    return OptionalType.create(this);
  }

  default(v: T): Type<T | undefined, Schema> {
    return DefaultedType.create(this, v);
  }
}

export class TypeWrapper<T, Schema> extends TypeUnknown<T, Schema> {
  static of<U extends Type, ExtraSchema extends Record<string, any>>(
    t: U,
    extra: ExtraSchema,
  ): Type<Infer<U>, MergeSchema<InferSchema<U>, ExtraSchema>> {
    return new TypeWrapper<Infer<U>, ExtraSchema>({
      ...extra,
      [Schema.underlying]: t,
    });
  }

  static refine<U extends Type, S extends Record<string, any>>(
    t: U,
    refiner: (v: Infer<U>, ctx: Context) => Result,
    schema: S,
  ): Type<Infer<U>, MergeSchema<InferSchema<U>, S>> {
    class Refiner<
      U extends Type,
      S extends Record<string, any>,
    > extends TypeWrapper<Infer<U>, S> {
      override *refiner(value: Infer<U>, ctx: Context): Result {
        yield* this.unwrap.refiner(value, ctx);

        const result = refiner(value, ctx);
        const failures = toFailures(result, ctx, t, value);

        for (const failure of failures) {
          yield { ...failure, refinement: Object.keys(schema).join(",") };
        }
      }
    }

    return new Refiner<U, S>({
      ...schema,
      [Schema.underlying]: t,
    });
  }

  get unwrap(): Type<T, Schema> {
    const unwrapFunc = (this.schema as any)[Schema.unwrap];

    return unwrapFunc ? unwrapFunc() : (this.schema as any)[Schema.underlying];
  }

  override get type() {
    return this.unwrap.type;
  }

  override *entries(
    value: unknown,
    context: Context = EmptyContext,
  ): Iterable<Entity> {
    yield* this.unwrap.entries(value, {
      ...context,
      node: { current: this, parent: context.node },
    });
  }

  override validator(value: unknown, context: Context): Result {
    return toFailures(
      this.unwrap.validator(value, context),
      context,
      this,
      value,
    );
  }

  override refiner(value: T, context: Context): Result {
    return toFailures(
      this.unwrap.refiner(value, context),
      context,
      this,
      value,
    );
  }

  override coercer(value: unknown, context: Context) {
    return this.unwrap.coercer(value, context);
  }
}

export class DefaultedType<T extends Type> extends TypeWrapper<
  Infer<T>,
  InferSchema<T> & { default: Infer<T> }
> {
  static create = defineType(
    <T extends Type>(
      t: T,
      defaultValue: Infer<T>,
    ): Type<
      Infer<T> | undefined,
      InferSchema<T> & {
        default: Infer<T>;
      }
    > => {
      return new DefaultedType<T>({
        default: defaultValue,
        [Schema.underlying]: t,
      });
    },
  );

  override coercer(value: unknown, context: Context): Infer<T> | undefined {
    return typeof value === "undefined"
      ? this.schema.default
      : super.unwrap.coercer(value, context);
  }
}

export class OptionalType<T extends Type> extends TypeWrapper<
  Infer<T> | undefined,
  InferSchema<T>
> {
  static create = defineType(
    <T extends Type>(t: T): Type<Infer<T> | undefined, InferSchema<T>> => {
      return new OptionalType<T>({
        [Schema.underlying]: t,
        [Schema.optional]: t,
      });
    },
  );

  override refiner(value: T | undefined, context: Context): Result {
    return value === undefined || super.unwrap.refiner(value, context);
  }

  override validator(value: unknown, context: Context): Result {
    return value === undefined || super.unwrap.validator(value, context);
  }
}
