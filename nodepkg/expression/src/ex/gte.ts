import { defineExpression } from "../Expression";

export const gte = defineExpression("gte", (min: number) => {
  return () => {
    return Object.assign((v: any): boolean => v >= min, {
      errMsg: `不得小于 ${min}`
    });
  };
});
