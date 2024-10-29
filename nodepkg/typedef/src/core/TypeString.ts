import { defineType, type Context } from "./Type.ts";
import { TypeUnknown } from "./TypeUnknown.ts";
import { isString } from "./util.ts";

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
}
