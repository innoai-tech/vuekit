import {
  defineExpression,
  type ExpressionBuildFunc,
  isValidBuildExprFn,
} from "../Expression.ts";
import { isArray, isPlainObject } from "@innoai-tech/lodash";
import { Entity } from "../iter";

export const some = defineExpression(
  "some",
  <TTarget extends any[] | Record<string, any>>(
    ...buildExprFns: ExpressionBuildFunc<TTarget, boolean>[]
  ) =>
    (ctx) => {
      const fns = buildExprFns
        .map((buildExprFn) => buildExprFn(ctx))
        .filter(isValidBuildExprFn);

      const fn = (v: TTarget, c = ctx) => {
        if (isArray(v) || isPlainObject(v)) {
          for (const entity of Entity.entities(v)) {
            for (const f of fns) {
              if ((f as any)(entity, c)) {
                return true;
              }
            }
          }
          return false;
        }

        return false;
      };

      fn.args = fns;
      fn.errMsg = `任一项需要满足: ${fns
        .filter((fn: any) => fn.type !== "required" && !!fn.errMsg)
        .map((fn: any) => fn.errMsg)
        .join("; ")}`;

      return fn;
    },
);
