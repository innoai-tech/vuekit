import * as ex from "./ex";
import { ExpressionFactory } from "./Expression";

export * from "./Expression";

export { ex };

export const defaultExpressionFactory = ExpressionFactory.create({
  allOf: ex.allOf,
  anyOf: ex.anyOf,
  oneOf: ex.oneOf,
  charCount: ex.charCount,
  eq: ex.eq,
  gt: ex.gt,
  gte: ex.gte,
  lt: ex.lt,
  lte: ex.lte,
  match: ex.match,
  pipe: ex.pipe,
  required: ex.required,
  select: ex.select,
  when: ex.when,
  every: ex.every,
  some: ex.some,
  get: ex.get,
  len: ex.len,
  elem: ex.elem,
  key: ex.key,
});
