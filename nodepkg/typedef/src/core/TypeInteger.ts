import { type Context, Type } from "./Type.ts";

export class TypeInteger extends Type<number, { type: "integer" }> {
  static create() {
    return new TypeInteger({ type: "integer" });
  }

  override get type() {
    return this.schema.type;
  }

  override validator(value: unknown, _: Context) {
    return (
      typeof value === "number" &&
      !Number.isNaN(value) &&
      Number.isInteger(value)
    );
  }

  override coercer(value: unknown, _: Context) {
    try {
      return (value != undefined) ? parseInt(String(value)) : undefined;
    } catch (err) {
      return undefined;
    }
  }
}
