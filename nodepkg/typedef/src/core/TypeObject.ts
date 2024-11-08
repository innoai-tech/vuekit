import {
  type Context,
  defineType,
  EmptyContext,
  type Infer,
  type InferSchema,
  type Type,
} from "./Type.ts";
import { TypeUnknown } from "./TypeUnknown.ts";
import { TypeNever } from "./TypeNever.ts";
import { type Constructor, Schema, type Simplify } from "./Schema.ts";
import { isClass, isObjectLike } from "./util.ts";
import { TypeEnum } from "./TypeEnum.ts";
import { Metadata } from "./Metadata.ts";

type ObjectSchema<Props extends Record<string, Type>> = {
  type: "object";
  properties: {
    [K in keyof Props]: Type<Infer<Props[K]>, InferSchema<Props[K]>>;
  };
  additionalProperties: Type<never>;
  required: string[];
};

type ConstructorType<
  C extends Constructor,
  T = Simplify<InstanceType<C>>,
> = Type<T, Simplify<ObjectSchema<{ [K in keyof T]: Type<T[K], any> }>>>;

export class TypeObject<
  T extends Record<string, any>,
  Props extends Record<string, Type>,
> extends TypeUnknown<T, Simplify<ObjectSchema<Props>>> {
  static create(): Type<{}, ObjectSchema<{}>> & PropertyDecorator;
  static create<C extends Constructor>(
    c: C,
  ): ConstructorType<C> & PropertyDecorator;
  static create<Props extends Record<string, Type>>(
    props: Props,
  ): Type<
    { [K in keyof Props]: Infer<Props[K]> },
    Simplify<ObjectSchema<Props>>
  > &
    PropertyDecorator;
  static create<Props extends Record<string, Type>>(props?: Props) {
    const pickRequired = (props: Record<string, Type> = {}): string[] => {
      const required: string[] = [];

      for (const [propName, propType] of Object.entries(props)) {
        const p = Schema.schemaProp(propType, Schema.optional);
        if (!p) {
          required.push(propName);
        }
      }

      return required;
    };

    return defineType(() => {
      if (props) {
        if (isClass(props)) {
          const t = new props();

          const properties: any = {};

          for (const [k, v] of Object.entries(t)) {
            properties[k] = TypeEnum.literal(v);
          }

          for (const propName of Metadata.getOwnPropertyNames(t)) {
            const typeObject = Metadata.get(t, propName);

            if (typeObject) {
              const propType = TypeUnknown.fromTypeObject(
                typeObject,
                properties[propName],
              );

              if (propName in properties) {
                properties[propName] = propType.default(
                  properties[propName].schema?.enum?.[0],
                );
              } else {
                properties[propName] = propType;
              }
            }
          }

          return new TypeObject<{ [K in keyof Props]: Infer<Props[K]> }, Props>(
            {
              type: "object",
              properties: properties,
              required: pickRequired(properties),
              additionalProperties: TypeNever.create(),
            },
          );
        }

        return new TypeObject<{ [K in keyof Props]: Infer<Props[K]> }, Props>({
          type: "object",
          properties: props,
          required: pickRequired(props),
          additionalProperties: TypeNever.create(),
        });
      }

      return new TypeObject<{}, Props>({
        type: "object",
        properties: {} as any,
        required: [],
        additionalProperties: TypeNever.create(),
      });
    })();
  }

  override get type() {
    return this.schema.type;
  }

  override *entries(
    value: unknown,
    ctx: Context = EmptyContext,
  ): Iterable<[string | number | symbol, unknown, Type | Type<never>]> {
    if (isObjectLike(value)) {
      const propNames = new Set(Object.keys(value));

      if (this.schema.properties) {
        for (const key in this.schema.properties) {
          propNames.delete(key);
          yield [
            key,
            (value as any)[key],
            (this.schema.properties as any)[key],
          ];
        }
      }

      if (ctx.node?.current.type !== "intersection") {
        for (const key of propNames) {
          yield [key, (value as any)[key], this.schema.additionalProperties];
        }
      }
    }
  }

  override validator(value: unknown, _ctx: Context) {
    return isObjectLike(value);
  }

  override coercer(value: unknown, ctx: Context): T | undefined {
    if (isObjectLike(value)) {
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

      return v as T;
    }

    return super.coercer(value, ctx);
  }
}
