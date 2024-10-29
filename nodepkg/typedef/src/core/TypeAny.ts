import { defineType } from "./Type.ts";
import { TypeUnknown } from "./TypeUnknown.ts";

export class TypeAny extends TypeUnknown<any, {}> {
  static create = defineType(() => {
    return new TypeAny();
  });

  constructor() {
    super({});
  }

  override get type() {
    return "any";
  }

  override validator() {
    return true;
  }
}
