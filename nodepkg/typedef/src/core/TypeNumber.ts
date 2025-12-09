import { type Context, defineType } from "./Type.ts";
import { TypeUnknown } from "./TypeUnknown.ts";
import { isNumber } from "es-toolkit/compat";

export class TypeNumber extends TypeUnknown<number, { type: "number" }> {
  static create = defineType(() => {
    return new TypeNumber({ type: "number" });
  });

  override get type() {
    return this.schema.type;
  }

  override validator(value: unknown, _: Context) {
    return isNumber(value);
  }

  override coercer(value: unknown, _: Context) {
    try {
      const ret = value != undefined ? parseFloat(String(value)) : undefined;
      if (isNumber(ret)) {
        return ret;
      }
      // oxlint-disable-next-line no-unused-vars
    } catch (err) {}

    return undefined;
  }
}
