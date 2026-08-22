import { type Context, defineType } from "./Type.ts";
import { TypeUnknown } from "./TypeUnknown.ts";
import { isNumber, isString } from "es-toolkit/compat";

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
      const ret = isString(value) || isNumber(value) ? parseFloat(String(value)) : undefined;
      if (isNumber(ret)) {
        return ret;
      }
    } catch {
      // ignore
    }

    return undefined;
  }
}
