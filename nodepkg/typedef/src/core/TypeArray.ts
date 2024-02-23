import type { AnyType, Infer } from "./Type.ts";
import { Type } from "./Type.ts";

export class TypeArray<T, S extends AnyType> extends Type<
  T[],
  {
    type: "array";
    items: S;
  }
> {
  static create<Items extends AnyType>(items: Items) {
    return new TypeArray<Infer<Items>, Items>({
      type: "array",
      items: items,
    });
  }

  override get type() {
    return this.schema.type;
  }

  override *entries(
    value: unknown,
  ): Iterable<[string | number, unknown, AnyType | Type<never>]> {
    if (this.schema.items.type !== "any") {
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
