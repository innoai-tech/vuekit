import { type Context, Type } from "./Type.ts";

export class TypeBinary extends Type<
  File | Blob,
  { type: "string"; format: "binary" }
> {
  static create() {
    return new TypeBinary({ type: "string", format: "binary" });
  }

  override get type() {
    return "binary";
  }

  override validator(value: unknown, _: Context) {
    return value instanceof File || value instanceof Blob;
  }
}
