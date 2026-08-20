import {
  type Type,
  type Infer,
  type Context,
  EmptyContext,
  toFailures,
  type Result,
  defineType,
  type Entity,
} from "./Type.ts";
import { TypeUnknown } from "./TypeUnknown.ts";

type IntersectionTypes<Types extends any[]> = Types extends [infer T, ...infer O]
  ? T extends Type
    ? Infer<T> & IntersectionTypes<O>
    : unknown
  : unknown;

export class TypeIntersection<T, S extends [...Type[]]> extends TypeUnknown<
  T,
  {
    allOf: S;
  }
> {
  static create = defineType(<Types extends [...Type[]]>(...types: Types) => {
    return new TypeIntersection<IntersectionTypes<Types>, Types>({
      allOf: types,
    });
  });

  override get type() {
    return "intersection";
  }

  override *entries(value: unknown, ctx: Context = EmptyContext): Iterable<Entity> {
    for (const t of this.schema.allOf) {
      yield* t.entries(value, ctx);
    }
  }

  override *validator(value: unknown, ctx: Context): Result {
    for (const t of this.schema.allOf) {
      yield* toFailures(t.validator(value, ctx), ctx, this, value);
    }
  }

  override *refiner(value: unknown, ctx: Context): Result {
    for (const t of this.schema.allOf) {
      yield* toFailures(t.refiner(value, ctx), ctx, this, value);
    }
  }
}
