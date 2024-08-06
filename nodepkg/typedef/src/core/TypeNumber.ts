import { type Context, Type } from "./Type.ts";

export class TypeNumber extends Type<number, { type: "number" }> {
  static create() {
    return new TypeNumber({ type: "number" });
  }

  override get type() {
    return this.schema.type;
  }

  override validator(value: unknown, _: Context) {
    return typeof value === "number" && !Number.isNaN(value);
  }

  override coercer(value: unknown, _: Context) {
    try {
      return value != undefined ? parseFloat(String(value)) : undefined;
    } catch (err) {
      return undefined;
    }
  }
}
