import { type Context, defineType } from "./Type.ts";
import { TypeUnknown } from "./TypeUnknown.ts";
import { isBoolean, isNumber, isString } from "es-toolkit/compat";

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
      return isString(value) || isNumber(value) || isBoolean(value)
        ? String(value) === "true"
        : undefined;
    } catch {
      return undefined;
    }
  }
}
