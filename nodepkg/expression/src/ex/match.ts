import { defineExpression } from "../Expression";

export const match = defineExpression("match", (pattern: RegExp) => () => {
  return Object.assign((v: string) => pattern.test(v), {
    errMsg: `务必匹配 ${pattern}`,
  });
});
