import {
    type AnyType,
    type Infer,
    TypeWrapper,
} from "./Type";

export class TypeRef<U extends AnyType> extends TypeWrapper<
    Infer<U>,
    U,
    { $ref: string }
> {
    static create<U extends AnyType>(name: string, t: () => U) {
        return new TypeRef<U>({
            $unwrap: t,
            $ref: name,
        });
    }

    override get isOptional(): boolean {
        return false;
    }
}


