import { isObject, mapValues, omit } from "@innoai-tech/lodash";
import {
  Type,
  TypeNode,
  TypeWrapper,
  DefaultedType,
  OptionalType,
  type Infer,
  type InferTuple,
  type Simplify,
  type Context,
  type Result,
  type AnyType,
  type ObjectType,
  validate,
  run,
  toFailures,
  EmptyContext
} from "./Type";

export {
  Type,
  TypeNode,
  TypeWrapper,
  DefaultedType,
  OptionalType,
  EmptyContext,
  type Context,
  type Infer,
  type InferTuple,
  type Simplify,
  type Result,
  type AnyType
};

export class TypeRef<U extends AnyType> extends TypeWrapper<
  Infer<U>,
  U,
  { $ref: string }
> {
  static create<U extends AnyType>(name: string, t: () => U) {
    return new TypeRef<U>({
      $unwrap: t,
      $ref: name
    });
  }

  override get isOptional(): boolean {
    return false;
  }
}

export class TypeAny extends Type<any, {}> {
  static create() {
    return new TypeAny();
  }

  constructor() {
    super({});
  }

  override get type() {
    return "any";
  }

  override validator() {
    return true;
  }
}

export class TypeNever extends Type<never, false> {
  static create() {
    return new TypeNever(false);
  }

  override get type() {
    return "never";
  }

  override validator(_value: unknown, _context: Context): Result {
    return false;
  }
}

export class TypeNull extends Type<null, { type: "null" }> {
  static create() {
    return new TypeNull({ type: "null" });
  }

  override get type() {
    return "null";
  }

  override validator(value: unknown, _context: Context): Result {
    return Object.is(value, null);
  }
}

export class TypeString extends Type<string, { type: "string" }> {
  static create() {
    return new TypeString({ type: "string" });
  }

  override get type() {
    return this.schema.type;
  }

  override validator(value: unknown, _: Context) {
    return typeof value === "string";
  }
}

export class TypeNumber extends Type<number, { type: "number" }> {
  static create() {
    return new TypeNumber({ type: "number" });
  }

  override get type() {
    return this.schema.type;
  }

  override validator(value: unknown, _: Context) {
    return typeof value === "number" && !isNaN(value);
  }
}

export class TypeInteger extends Type<number, { type: "integer" }> {
  static create() {
    return new TypeInteger({ type: "integer" });
  }

  override get type() {
    return this.schema.type;
  }

  override validator(value: unknown, _: Context) {
    return (
      typeof value === "number" && !isNaN(value) && Number.isInteger(value)
    );
  }
}

export class TypeBoolean extends Type<boolean, { type: "boolean" }> {
  static create() {
    return new TypeBoolean({ type: "boolean" });
  }

  override get type() {
    return this.schema.type;
  }

  override validator(value: unknown, _: Context) {
    return typeof value === "boolean";
  }
}

export class TypeBinary extends Type<
  File | Blob,
  { type: "string"; format: "binary" }
> {
  static create() {
    return new TypeBinary({ type: "string", format: "binary" });
  }

  override get type() {
    return "binary";
  }

  override validator(value: unknown, _: Context) {
    return value instanceof File || value instanceof Blob;
  }
}

export type NativeEnumLike = {
  [k: string]: string | number;
  [nu: number]: string;
};

export class TypeEnum<U> extends Type<U, { enum: U[] }> {
  static create<U extends number, T extends readonly U[]>(
    values: T
  ): TypeEnum<T[number]>;
  static create<U extends string, T extends readonly U[]>(
    values: T
  ): TypeEnum<T[number]>;
  static create<U extends string | number, T extends readonly U[]>(
    values: U[]
  ): TypeEnum<T[number]> {
    return new TypeEnum<T[number]>({ enum: values });
  }

  static literal<T>(constant: T) {
    return new TypeEnum<T>({ enum: [constant] });
  }

  static nativeEnum<U extends NativeEnumLike>(nativeEnum: U) {
    return new TypeEnum<U[keyof U]>({
      enum: Object.values(nativeEnum) as any[]
    });
  }

  override get type() {
    return "enums";
  }

  override validator(value: unknown, _: Context) {
    return this.schema.enum.includes(value as any);
  }
}

export class TypeObject<
  T extends Record<string, any>,
  Props extends Record<string, AnyType>
> extends Type<
  ObjectType<Props>,
  {
    type: "object";
    properties?: Props;
    required: Array<keyof T>;
    additionalProperties: AnyType | Type<never>;
  }
> {
  static create(): TypeObject<{}, {}>;
  static create<Props extends Record<string, AnyType>>(
    props: Props
  ): TypeObject<{ [K in keyof Props]: Infer<Props[K]> }, Props>;
  static create<Props extends Record<string, AnyType>>(props?: Props) {
    const required: string[] = [];

    if (props) {
      for (const propName in props) {
        const p = props[propName]!;
        if (!p.isOptional) {
          required.push(propName);
        }
      }
    }

    return new TypeObject<{ [K in keyof Props]: Infer<Props[K]> }, Props>({
      type: "object",
      properties: props,
      required: required,
      additionalProperties: TypeNever.create()
    });
  }

  override get type() {
    return this.schema.type;
  }

  override* entries(
    value: unknown,
    ctx: Context
  ): Iterable<[string | number, unknown, AnyType | Type<never>]> {
    if (isObject(value)) {
      const propNames = new Set(Object.keys(value));

      if (this.schema.properties) {
        for (const key in this.schema.properties) {
          propNames.delete(key);
          yield [
            key,
            (value as any)[key],
            (this.schema.properties as any)[key]
          ];
        }
      }

      if (ctx.node?.type !== "intersection" ?? true) {
        for (const key of propNames) {
          yield [key, (value as any)[key], this.schema.additionalProperties];
        }
      }
    }
  }

  override validator(value: unknown, _ctx: Context) {
    return isObject(value);
  }

  override coercer(value: unknown, ctx: Context) {
    if (isObject(value)) {
      const v: { [k: string]: any } = { ...value };

      if (ctx.mask) {
        // FIXME: support object with additionalProperties

        const properties = this.schema.properties;

        if (properties) {
          for (const key in v) {
            if (properties[key] === undefined) {
              delete v[key];
            }
          }
        }
      }

      return v;
    }

    return value;
  }
}

export class TypeRecord<
  K extends string,
  V,
  S extends {
    propertyNames: Type<K>;
    additionalProperties: Type<V>;
  }
> extends Type<
  Record<K, V>,
  {
    type: "object";
  } & S
> {
  static create<K extends AnyType, V extends AnyType>(k: K, v: V) {
    return new TypeRecord<
      Infer<K>,
      Infer<V>,
      {
        propertyNames: K;
        additionalProperties: V;
      }
    >({
      propertyNames: k,
      additionalProperties: v,
      type: "object"
    });
  }

  override get type() {
    return "record";
  }

  override* entries(
    value: unknown
  ): Iterable<[string | number, unknown, AnyType | Type<never>]> {
    if (isObject(value)) {
      if (isObject(value)) {
        for (const k in value) {
          const v = (value as any)[k];
          yield [k, k, this.schema.propertyNames];
          yield [k, v, this.schema.additionalProperties];
        }
      }
    }
  }

  override validator(value: unknown) {
    return isObject(value);
  }
}

export class TypeArray<T extends any, S extends AnyType> extends Type<
  T[],
  {
    type: "array";
    items: S;
  }
> {
  static create<Items extends AnyType>(items: Items) {
    return new TypeArray<Infer<Items>, Items>({
      type: "array",
      items: items
    });
  }

  override get type() {
    return this.schema.type;
  }

  override* entries(
    value: unknown
  ): Iterable<[string | number, unknown, AnyType | Type<never>]> {
    if (this.schema.items.type != "any") {
      if (Array.isArray(value)) {
        for (const [i, v] of value.entries()) {
          yield [i, v, this.schema.items];
        }
      }
    }
  }

  override validator(value: unknown) {
    return Array.isArray(value);
  }

  override coercer(value: unknown) {
    return Array.isArray(value) ? value.slice() : value;
  }
}

export class TypeTuple<T, S extends AnyType[]> extends Type<
  T,
  {
    type: "array";
    items: S;
  }
> {
  static create<Values extends AnyType[]>(values: [...Values]) {
    return new TypeTuple<InferTuple<Values>, Values>({
      type: "array",
      items: values
    });
  }

  override get type() {
    return "tuple";
  }

  override* entries(
    value: unknown,
    _context: Context
  ): Iterable<[string | number, unknown, AnyType | Type<never>]> {
    if (Array.isArray(value)) {
      const length = Math.max(this.schema.items.length, value.length);

      for (let i = 0; i < length; i++) {
        yield [i, value[i], this.schema.items[i] ?? TypeNever.create()];
      }
    }
  }

  override validator(value: unknown) {
    return Array.isArray(value);
  }

  override coercer(value: unknown) {
    return Array.isArray(value) ? value.slice() : value;
  }
}

type IntersectionTypes<Types extends any[]> = Types extends [
    infer T,
    ...infer O
  ]
  ? T extends AnyType
    ? Infer<T> & IntersectionTypes<O>
    : unknown
  : unknown;

export class TypeIntersection<T, S extends [...AnyType[]]> extends Type<
  T,
  {
    allOf: S;
  }
> {
  static create<Types extends [...AnyType[]]>(...types: Types) {
    return new TypeIntersection<IntersectionTypes<Types>, Types>({
      allOf: types
    });
  }

  override get type() {
    return "intersection";
  }

  override* entries(
    value: unknown,
    ctx: Context = EmptyContext
  ): Iterable<[string | number, unknown, AnyType | Type<never>]> {
    for (const t of this.schema.allOf) {
      yield* t.entries(value, ctx);
    }
  }

  override* validator(value: unknown, ctx: Context): Result {
    for (const t of this.schema.allOf) {
      yield* toFailures(t.validator(value, ctx), ctx, this, value);
    }
  }

  override* refiner(value: unknown, ctx: Context): Result {
    for (const t of this.schema.allOf) {
      yield* toFailures(t.refiner(value, ctx), ctx, this, value);
    }
  }
}

type DiscriminatedUnionType<
  D extends string,
  Mapping extends Record<string, AnyType>
> = ValueOf<{
  [K in keyof Mapping]: { [k in D]: K } & Infer<Mapping[K]>;
}>;

type ValueOf<T> = T[keyof T];

export class TypeUnion<T, S extends AnyType[]> extends Type<
  T,
  {
    oneOf: S;
    discriminator?: {
      propertyName: string;
    };
  }
> {
  static create<Types extends AnyType[]>(...types: Types) {
    return new TypeUnion<InferTuple<Types>[number], Types>({
      oneOf: types
    });
  }

  static discriminatorMapping<
    D extends string,
    Mapping extends Record<string, AnyType>
  >(discriminatorPropertyName: D, mapping: Mapping) {
    const normalizedMapping = mapValues(mapping, (def, discriminatorValue) => {
      const schema: Record<string, any> = {
        [discriminatorPropertyName]: TypeEnum.literal(discriminatorValue)
      };

      for (const [prop, _, t] of def.entries({}, EmptyContext)) {
        schema[prop] = t;
      }

      return TypeObject.create(schema);
    });

    return new TypeUnion<
      Simplify<DiscriminatedUnionType<D, Mapping>>,
      AnyType[]
    >({
      oneOf: Object.values(normalizedMapping) as any,
      discriminator: {
        propertyName: discriminatorPropertyName
      }
    });
  }

  _discriminatorPropName?: AnyType;

  discriminatorPropType(ctx: Context) {
    return (this._discriminatorPropName ??= (() => {
      const discriminatorPropName = this.schema.discriminator!.propertyName;

      const values = this.schema.oneOf.reduce((ret, s) => {
        return [
          ...ret,
          ...(s.unwrap.schema.properties[discriminatorPropName] as AnyType)
            .unwrap.schema.enum
        ];
      }, [] as any[]);

      return TypeWrapper.of(TypeEnum.create(values), {
        $meta: ctx.node?.meta ?? {}
      });
    })());
  }

  _discriminatorMapping: { [K: string | number]: { [K: string]: AnyType } } =
    {};

  discriminatorMapping(discriminatorPropValue: any, ctx: Context) {
    const discriminatorPropName = this.schema.discriminator!.propertyName;

    if (this._discriminatorMapping[discriminatorPropValue]) {
      return this._discriminatorMapping[discriminatorPropValue];
    }

    const enumValues = this.discriminatorPropType(ctx).unwrap.schema.enum;

    if (enumValues.includes(discriminatorPropValue)) {
      const matched = this.schema.oneOf.find((s) => {
        const t = s.unwrap.schema.properties[discriminatorPropName] as AnyType;
        if (t.unwrap.schema.enum) {
          const [err, _] = t.validate(discriminatorPropValue);
          return !err;
        }
        return false;
      });

      if (matched) {
        return (this._discriminatorMapping[`${discriminatorPropValue}`] ??= omit(matched.unwrap.schema.properties, [discriminatorPropName]));
      }
    }

    return {};
  }

  override* entries(
    value: unknown,
    context: Context
  ): Iterable<[string | number, unknown, AnyType | Type<never>]> {
    if (this.schema.discriminator) {
      const discriminatorPropName = this.schema.discriminator.propertyName;

      const discriminatorPropValue = ((value as any) ?? {})[
        discriminatorPropName
        ];

      const base = TypeObject.create({
        [discriminatorPropName]: this.discriminatorPropType(context),
        ...this.discriminatorMapping(discriminatorPropValue, context)
      });

      yield* base.entries(value, context);
    }
  }

  override get type() {
    return "union";
  }

  override coercer(value: unknown) {
    for (const t of this.schema.oneOf) {
      const [error, coerced] = validate(value, t, { coerce: true });
      if (!error) {
        return coerced;
      }
    }
    return value;
  }

  override validator(value: unknown, context: Context) {
    if (this.schema.discriminator) {
      const discriminatorPropName = this.schema.discriminator.propertyName;
      const discriminatorPropValue = ((value as any) ?? {})[
        discriminatorPropName
        ];

      const base = TypeObject.create({
        [discriminatorPropName]: this.discriminatorPropType(context),
        ...this.discriminatorMapping(discriminatorPropValue, context)
      });

      return base.validator(value, context);
    }

    const failures = [];

    for (const t of this.schema.oneOf) {
      const [...tuples] = run(value, t, context);
      const [first] = tuples;

      if (first && !first[0]) {
        return [];
      } else {
        for (const [failure] of tuples) {
          if (failure) {
            failures.push(failure);
          }
        }
      }
    }

    return [
      `Expected the value to satisfy a union of \`${this.schema.oneOf
        .map((t) => t.type)
        .join(" | ")}\`, but received: ${value}`,
      ...failures
    ];
  }
}
