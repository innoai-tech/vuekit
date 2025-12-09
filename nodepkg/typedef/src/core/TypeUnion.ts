import {
  type Context,
  defineType,
  EmptyContext,
  type Entity,
  type Infer,
  type InferTuple,
  run,
  type Type,
  validate,
} from "./Type.ts";
import { TypeEnum } from "./TypeEnum.ts";
import { TypeObject } from "./TypeObject.ts";
import { TypeUnknown, TypeWrapper } from "./TypeUnknown.ts";
import { type Constructor, Schema, type Simplify } from "./Schema.ts";
import { isClass } from "./util.ts";

type DiscriminatedUnionType<D extends string, Mapping extends Record<string, Type>> = ValueOf<{
  [K in keyof Mapping]: { [k in D]: K } & Infer<Mapping[K]>;
}>;

type ValueOf<T> = T[keyof T];

export class TypeUnion<T, S extends Type[]> extends TypeUnknown<
  T,
  {
    oneOf: S;
    discriminator?: {
      propertyName: string;
    };
  }
> {
  static create = defineType(<Types extends Type[]>(...types: Types) => {
    return new TypeUnion<InferTuple<Types>[number], Types>({
      oneOf: types,
    });
  });

  static discriminatorMapping<D extends string, Mapping extends Record<string, Type>>(
    discriminatorPropertyName: D,
    mapping: Mapping,
  ): TypeUnion<Simplify<DiscriminatedUnionType<D, Mapping>>, Type[]> & PropertyDecorator;
  static discriminatorMapping<D extends string, Mapping extends Array<Constructor>>(
    discriminatorPropertyName: D,
    ...mapping: Mapping
  ): TypeUnion<
    {
      [K in keyof Mapping]: Simplify<InstanceType<Mapping[K]>>;
    },
    {
      [K in keyof Mapping]: Type<Simplify<InstanceType<Mapping[K]>>, {}>;
    }
  > &
    PropertyDecorator;
  static discriminatorMapping(discriminatorPropertyName: string, ...mapping: any[]) {
    return defineType(() => {
      const oneOf: Array<Type<any, any>> = [];

      if (mapping.length == 1 && mapping[0].constructor == Object) {
        for (const [discriminatorValue, def] of Object.entries(
          mapping[0] as Record<string, Type>,
        )) {
          if (Schema.schemaProp(def, "$ref")) {
            oneOf.push(def);
          } else {
            const schema: Record<string, any> = {
              [discriminatorPropertyName]: TypeEnum.literal(discriminatorValue),
            };

            for (const [prop, _, t] of def.entries({}, EmptyContext)) {
              schema[String(prop)] = t;
            }

            oneOf.push(TypeObject.create(schema));
          }
        }
      } else {
        for (const x of mapping) {
          if (isClass(x)) {
            oneOf.push(TypeObject.create(x));
          }
        }
      }

      return new TypeUnion<any, Type[]>({
        oneOf: oneOf,
        discriminator: {
          propertyName: discriminatorPropertyName,
        },
      });
    })();
  }

  _discriminatorPropName?: Type;

  discriminatorPropType(ctx: Context) {
    return (this._discriminatorPropName ??= (() => {
      const discriminatorPropName = this.schema.discriminator?.propertyName ?? "";

      const values: any[] = [];
      const metas: any[] = [];

      for (const x of this.schema.oneOf) {
        const p = Schema.schemaProp(x, "properties")[discriminatorPropName];

        if (!p) {
          continue;
        }

        const e = p.schema["enum"];

        if (e) {
          values.push(...e);
        }

        metas.push(p.meta);
      }

      return TypeWrapper.of(TypeEnum.create(values), {
        [Schema.meta]: Schema.create(metas[0], ctx.node?.current.meta ?? {}),
      });
    })());
  }

  _discriminatorMappingProps = new Map<string, Record<string, Type>>();

  discriminatorMapping(discriminatorPropName: string, discriminatorPropValue: any, ctx: Context) {
    if (this._discriminatorMappingProps.get(discriminatorPropValue)) {
      return this._discriminatorMappingProps.get(discriminatorPropValue);
    }

    const enumValues = (this.discriminatorPropType(ctx)?.schema as any)?.["enum"] ?? [];

    if (enumValues.includes(discriminatorPropValue)) {
      const matched = this.schema.oneOf.find((s) => {
        const t = Schema.schemaProp(s, "properties")[discriminatorPropName] as Type;

        if (t) {
          const [err, _] = t.validate(discriminatorPropValue);
          return !err;
        }

        return false;
      });

      if (matched) {
        if (!this._discriminatorMappingProps.has(discriminatorPropValue)) {
          const props: Record<string, any> = {};

          for (const [prop, t] of Object.entries(Schema.schemaProp(matched, "properties"))) {
            if (prop === discriminatorPropName) {
              continue;
            }
            props[prop] = t;
          }

          this._discriminatorMappingProps.set(discriminatorPropValue, props);
        }
        return this._discriminatorMappingProps.get(discriminatorPropValue);
      }
    }

    return {};
  }

  override *entries(value: unknown, context: Context = EmptyContext): Iterable<Entity> {
    if (this.schema.discriminator) {
      const discriminatorPropName = this.schema.discriminator.propertyName;
      const discriminatorPropValue = (value as any)?.[discriminatorPropName];

      const base = TypeObject.create({
        [discriminatorPropName]: this.discriminatorPropType(context),
        ...this.discriminatorMapping(discriminatorPropName, discriminatorPropValue, context),
      });

      yield* base.entries(value, context);
    }
  }

  override get type() {
    return "union";
  }

  override coercer(value: unknown): T | undefined {
    for (const t of this.schema.oneOf) {
      const [error, coerced] = validate(value, t, { coerce: true });
      if (!error) {
        return coerced as T;
      }
    }
    return value as T;
  }

  override validator(value: unknown, context: Context) {
    if (this.schema.discriminator) {
      const discriminatorPropName = this.schema.discriminator.propertyName;
      const discriminatorPropValue = (value as any)?.[discriminatorPropName];

      return TypeObject.create({
        [discriminatorPropName]: this.discriminatorPropType(context),
        ...this.discriminatorMapping(discriminatorPropName, discriminatorPropValue, context),
      }).validator(value, context);
    }

    const failures = [];

    for (const t of this.schema.oneOf) {
      const [...tuples] = run(value, t, context);
      const [first] = tuples;

      if (first && !first[0]) {
        return [];
      }

      for (const [failure] of tuples) {
        if (failure) {
          failures.push(failure);
        }
      }
    }

    return [
      `Expected the value to satisfy a union of \`${this.schema.oneOf
        .map((t) => t.type)
        .join(" | ")}\`, but received: ${value}`,
      ...failures,
    ];
  }
}
