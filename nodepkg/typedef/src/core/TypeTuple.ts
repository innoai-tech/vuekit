import {type AnyType, type InferTuple, type Context, Type, TypeNever} from "./Type.ts";

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
            items: values,
        });
    }

    override get type() {
        return "tuple";
    }

    override* entries(
        value: unknown,
        _context: Context,
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