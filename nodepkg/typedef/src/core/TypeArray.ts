import {
  type Type,
  defineType,
  type Context,
  type Infer,
  type Entity,
  EmptyContext,
} from "./Type.ts";
import { TypeUnknown } from "./TypeUnknown.ts";
import { isArray } from "./util.ts";

export class TypeArray<T, S extends Type> extends TypeUnknown<
  T,
  {
    type: "array";
    items: S;
  }
> {
  static create = defineType(<Items extends Type>(items: Items) => {
    return new TypeArray<Infer<Items>[], Items>({
      type: "array",
      items: items,
    });
  });

  override get type() {
    return this.schema.type;
  }

  override *entries(
    value: unknown,
    _ctx: Context = EmptyContext,
  ): Iterable<Entity> {
    if (Array.isArray(value)) {
      for (const [i, v] of value.entries()) {
        yield [i, v, this.schema.items];
      }
    }
  }

  override validator(value: unknown) {
    return isArray(value);
  }

  override coercer(value: unknown): T | undefined {
    return (isArray(value) ? value.slice() : value) as T;
  }
}
