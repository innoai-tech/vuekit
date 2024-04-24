import { size } from "@innoai-tech/lodash";
import { defineExpression } from "../Expression";

export const len = defineExpression("len", () => (ctx: any) => {
  return (value: any, _ = ctx) => {
    console.log(value)
    return size(value);
  };
});
