import { type Context, defineType } from "./Type.ts";
import { TypeUnknown } from "./TypeUnknown.ts";
import { isNumber } from "./util.ts";

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
    } catch (err) {}

    return undefined;
  }
}
