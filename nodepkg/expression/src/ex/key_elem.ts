import { defineExpression, type ExpressionBuildFunc } from "../Expression.ts";
import { Entity } from "../iter";

export const elem = defineExpression(
  "elem",
  <TTarget extends any[]>(buildExprFn: ExpressionBuildFunc<TTarget, any>) =>
    (ctx: any) => {
      const elemDo = buildExprFn(ctx);

      return (value: any, c = ctx) => {
        if (value instanceof Entity) {
          return elemDo(value.value, c);
        }
        throw new Error("elem must used under `every` or `some`");
      };
    },
);

export const key = defineExpression(
  "key",
  <TTarget extends any[]>(buildExprFn: ExpressionBuildFunc<TTarget, any>) =>
    (ctx: any) => {
      const keyDo = buildExprFn(ctx);

      return (value: any, c = ctx) => {
        if (value instanceof Entity) {
          return keyDo(value.key, c);
        }
        throw new Error("key must used under `every` or `some`");
      };
    },
);
