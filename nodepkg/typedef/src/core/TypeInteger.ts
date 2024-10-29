import { type Context, defineType } from "./Type.ts";
import { TypeUnknown } from "./TypeUnknown.ts";
import { isInteger } from "./util.ts";

export class TypeInteger extends TypeUnknown<number, { type: "integer" }> {
  static create = defineType(() => {
    return new TypeInteger({ type: "integer" });
  });

  override get type() {
    return this.schema.type;
  }

  override validator(value: unknown, _: Context) {
    return isInteger(value);
  }

  override coercer(value: unknown, _: Context) {
    try {
      const ret = value != undefined ? parseInt(String(value)) : undefined;
      return isInteger(ret) ? ret : undefined;
    } catch (err) {
      return undefined;
    }
  }
}
