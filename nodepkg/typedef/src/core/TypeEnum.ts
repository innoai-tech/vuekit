import {type Context, Type} from "./Type.ts";

export type NativeEnumLike = {
    [k: string]: string | number;
    [nu: number]: string;
};

export class TypeEnum<U> extends Type<U, { enum: U[] }> {
    static create<U extends number, T extends readonly U[]>(
        values: T,
    ): TypeEnum<T[number]>;
    static create<U extends string, T extends readonly U[]>(
        values: T,
    ): TypeEnum<T[number]>;
    static create<U extends string | number, T extends readonly U[]>(
        values: U[],
    ): TypeEnum<T[number]> {
        return new TypeEnum<T[number]>({enum: values});
    }

    static literal<T>(constant: T) {
        return new TypeEnum<T>({enum: [constant]});
    }

    static nativeEnum<U extends NativeEnumLike>(nativeEnum: U) {
        return new TypeEnum<U[keyof U]>({
            enum: Object.values(nativeEnum) as any[],
        });
    }

    override get type() {
        return "enums";
    }

    override validator(value: unknown, _: Context) {
        return this.schema.enum.includes(value as any);
    }
}
