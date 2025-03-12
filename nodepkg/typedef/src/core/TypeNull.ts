import { defineType, type Context, type Result } from "./Type.ts";
import { TypeUnknown } from "./TypeUnknown.ts";
import { isNull } from "./util.ts";

export class TypeNull extends TypeUnknown<null, { type: "null" }> {
  static create = defineType(() => new TypeNull({ type: "null" }));

  override get type() {
    return "null";
  }

  override validator(value: unknown, _context: Context): Result {
    return isNull(value);
  }

  override coercer(value: unknown, _: Context) {
    return value as any;
  }
}
