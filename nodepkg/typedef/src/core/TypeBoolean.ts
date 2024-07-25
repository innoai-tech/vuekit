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

  override coercer(value: unknown, _: Context) {
    try {
      return (value != undefined) ? String(value) === "true" : undefined;
    } catch (err) {
      return undefined;
    }
  }
}
