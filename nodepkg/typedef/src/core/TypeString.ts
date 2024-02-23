import { type Context, Type } from "./Type.ts";

export class TypeString extends Type<string, { type: "string" }> {
  static create() {
    return new TypeString({ type: "string" });
  }

  override get type() {
    return this.schema.type;
  }

  override validator(value: unknown, _: Context) {
    return typeof value === "string";
  }
}
