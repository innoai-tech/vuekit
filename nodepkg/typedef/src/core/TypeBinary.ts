import { defineType, type Context } from "./Type.ts";
import { TypeUnknown } from "./TypeUnknown.ts";

export class TypeBinary extends TypeUnknown<
  File | Blob,
  { type: "string"; format: "binary" }
> {
  static create = defineType(() => {
    return new TypeBinary({ type: "string", format: "binary" });
  });

  override get type() {
    return "binary";
  }

  override validator(value: unknown, _: Context) {
    return value instanceof File || value instanceof Blob;
  }
}
