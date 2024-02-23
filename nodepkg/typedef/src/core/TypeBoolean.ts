import { type Context, Type } from "./Type.ts";

export class TypeBoolean extends Type<boolean, { type: "boolean" }> {
  static create() {
    return new TypeBoolean({ type: "boolean" });
  }

  override get type() {
    return this.schema.type;
  }

  override validator(value: unknown, _: Context) {
    return typeof value === "boolean";
  }
}
