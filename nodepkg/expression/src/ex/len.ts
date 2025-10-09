import { size } from "es-toolkit/compat";
import { defineExpression } from "../Expression";

export const len = defineExpression("len", () => (ctx: any) => {
  return (value: any, _ = ctx) => {
    return size(value);
  };
});
