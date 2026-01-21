import { defineType, type Infer, type Type } from "./Type";
import { TypeWrapper } from "./TypeUnknown.ts";
import { Schema } from "./Schema.ts";

export class TypeRef<U extends Type> extends TypeWrapper<
  Infer<U>,
  { $ref: string }
> {
  static create = defineType(
    <U extends Type>(
      name: string,
      ref: () => U,
    ): Type<Infer<U>, { $ref: string }> => {
      return new TypeRef<U>({
        $ref: name,
        [Schema.unwrap]: ref,
      });
    },
  );
}
