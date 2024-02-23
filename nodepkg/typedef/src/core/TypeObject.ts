import type { AnyType, Context, Infer, ObjectType } from "./Type.ts";
import { isObject } from "@innoai-tech/lodash";
import { Type, TypeNever } from "./Type.ts";

export class TypeObject<
  T extends Record<string, any>,
  Props extends Record<string, AnyType>,
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
    props: Props,
  ): TypeObject<{ [K in keyof Props]: Infer<Props[K]> }, Props>;
  static create<Props extends Record<string, AnyType>>(props?: Props) {
    const required: string[] = [];

    if (props) {
      for (const propName in props) {
        const p = props[propName];
        if (!p?.isOptional) {
          required.push(propName);
        }
      }
    }

    return new TypeObject<{ [K in keyof Props]: Infer<Props[K]> }, Props>({
      type: "object",
      properties: props,
      required: required,
      additionalProperties: TypeNever.create(),
    });
  }

  override get type() {
    return this.schema.type;
  }

  override *entries(
    value: unknown,
    ctx: Context,
  ): Iterable<[string | number | symbol, unknown, AnyType | Type<never>]> {
    if (isObject(value)) {
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

      if (ctx.node?.type !== "intersection") {
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
