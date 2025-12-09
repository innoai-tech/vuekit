import { type Context, defineType } from "./Type.ts";
import { TypeUnknown } from "./TypeUnknown.ts";
import { isBoolean } from "es-toolkit/compat";

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
      // oxlint-disable-next-line no-unused-vars
    } catch (err) {
      return undefined;
    }
  }
}
