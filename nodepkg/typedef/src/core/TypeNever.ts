import { defineType, type Context, type Result } from "./Type.ts";
import { TypeUnknown } from "./TypeUnknown.ts";

export class TypeNever extends TypeUnknown<never, false> {
  static create = defineType(() => {
    return new TypeNever(false);
  });

  override get type() {
    return "never";
  }

  override validator(_value: unknown, _context: Context): Result {
    return false;
  }

  override coercer(value: unknown, _: Context) {
    return value as any;
  }
}
