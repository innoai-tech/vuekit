import { defineType, type Context } from "./Type.ts";
import { TypeUnknown } from "./TypeUnknown.ts";
import { isBoolean } from "./util.ts";

export class TypeBoolean extends TypeUnknown<boolean, { type: "boolean" }> {
  static create = defineType(() => {
    return new TypeBoolean({ type: "boolean" });
  });

  override get type() {
    return this.schema.type;
  }

  override validator(value: unknown, _: Context) {
    return isBoolean(value);
  }

  override coercer(value: unknown, _: Context) {
    try {
      return value != undefined ? String(value) === "true" : undefined;
    } catch (err) {
      return undefined;
    }
  }
}
