import { size } from "es-toolkit/compat";
import { defineExpression } from "../Expression";

export const len = defineExpression("len", () => () => {
  return (value: any) => {
    return size(value);
  };
});
