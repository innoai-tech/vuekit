import {type AnyType, type Infer, type Context, EmptyContext, toFailures, Type, type Result} from "./Type.ts";

type IntersectionTypes<Types extends any[]> = Types extends [
        infer T,
        ...infer O,
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
            allOf: types,
        });
    }

    override get type() {
        return "intersection";
    }

    override* entries(
        value: unknown,
        ctx: Context = EmptyContext,
    ): Iterable<[string | number | symbol, unknown, AnyType | Type<never>]> {
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
