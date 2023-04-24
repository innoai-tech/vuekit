import { type Validator } from "superstruct";
import { Type } from "../Type";

export function custom<T>(validator?: Validator, name = "custom") {
  return Type.define<T>(name, validator ?? (() => true));
}