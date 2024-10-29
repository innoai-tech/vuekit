import {
  type Type,
  type InferTuple,
  type Context,
  defineType,
  type Entity,
  type Result,
} from "./Type.ts";
import { TypeUnknown } from "./TypeUnknown.ts";
import { TypeNever } from "./TypeNever.ts";
import { isArray } from "./util.ts";

export class TypeTuple<T, S extends Type[]> extends TypeUnknown<
  T,
  {
    type: "array";
    items: S;
  }
> {
  static create = defineType(<Values extends Type[]>(values: [...Values]) => {
    return new TypeTuple<InferTuple<Values>, Values>({
      type: "array",
      items: values,
    });
  });

  override get type() {
    return "tuple";
  }

  override *entries(value: unknown, _context: Context): Iterable<Entity> {
    if (isArray(value)) {
      const length = Math.max(this.schema.items.length, value.length);

      for (let i = 0; i < length; i++) {
        yield [i, value[i], this.schema.items[i] ?? TypeNever.create()];
      }
    }
  }

  override validator(value: unknown): Result {
    return isArray(value) && value.length === this.schema.items.length;
  }

  override coercer(value: unknown): T | undefined {
    return (isArray(value) ? value.slice() : value) as T;
  }
}
