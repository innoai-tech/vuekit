import {isObject} from "@innoai-tech/lodash";
import {type Infer, type AnyType, Type} from "./Type.ts";

export const SymbolRecordKey = Symbol("$_key");

export class TypeRecord<
    K extends string,
    V,
    S extends {
        propertyNames: Type<K>;
        additionalProperties: Type<V>;
    },
> extends Type<
    Record<K, V>,
    {
        type: "object";
    } & S
> {
    static create<K extends AnyType, V extends AnyType>(k: K, v: V) {
        return new TypeRecord<
            Infer<K>,
            Infer<V>,
            {
                propertyNames: K;
                additionalProperties: V;
            }
        >({
            propertyNames: k,
            additionalProperties: v,
            type: "object",
        });
    }

    override get type() {
        return "record";
    }

    override* entries(
        value: unknown,
    ): Iterable<[string | number | symbol, unknown, AnyType | Type<never>]> {
        if (isObject(value)) {
            for (const k in value) {
                const v = (value as any)[k];

                yield [SymbolRecordKey, k, this.schema.propertyNames];
                yield [k, v, this.schema.additionalProperties];
            }
        }
    }

    override validator(value: unknown) {
        return isObject(value);
    }
}
