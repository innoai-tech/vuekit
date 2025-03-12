import { type Context, defineType } from "./Type.ts";
import { TypeUnknown } from "./TypeUnknown.ts";
import { isNull, isString, isUndefined } from "./util.ts";

export class TypeString extends TypeUnknown<string, { type: "string" }> {
  static create = defineType(() => {
    return new TypeString({ type: "string" });
  });

  override get type() {
    return this.schema.type;
  }

  override validator(value: unknown, _: Context) {
    return isString(value);
  }

  override coercer(value: unknown, _: Context) {
    if (isUndefined(value) || isNull(value)) {
      return value as any;
    }
    return String(value);
  }
}
