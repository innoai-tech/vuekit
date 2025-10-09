import { isString } from "es-toolkit/compat";
import { defineExpression } from "../Expression";

export const charCount = defineExpression("charCount", () => () => {
  const fn = (v: any) => {
    if (isString(v)) {
      return v.match(/./gu)?.length ?? 0;
    }
    return 0;
  };
  fn.errMsg = `字符数`;
  return fn;
});
