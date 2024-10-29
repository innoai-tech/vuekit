import { type Type, defineType, type Infer } from "./Type";
import { TypeWrapper } from "./TypeUnknown.ts";
import { Schema } from "./Schema.ts";

export class TypeRef<U extends Type> extends TypeWrapper<
  Infer<U>,
  { $ref: string }
> {
  static create = defineType(<U extends Type>(name: string, ref: () => U) => {
    return new TypeRef<U>({
      $ref: name,
      [Schema.unwrap]: ref,
    });
  });
}
