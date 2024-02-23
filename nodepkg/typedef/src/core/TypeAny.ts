import { Type } from "./Type.ts";

export class TypeAny extends Type<any, {}> {
  static create() {
    return new TypeAny();
  }

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
