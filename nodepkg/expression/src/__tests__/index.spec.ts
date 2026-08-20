import { describe, expect, it } from "vitest";
import { defaultExpressionFactory, ex } from "../index.ts";

describe("expression", () => {
  it("build as validate", () => {
    const validate = defaultExpressionFactory.create<any, boolean>(ex.gte(1))({});

    expect(validate(1)).toBeTruthy();
    expect(validate(0)).toBeFalsy();
  });

  it("build as validate with multi expr", () => {
    const validate = defaultExpressionFactory.create<any, boolean>(ex.allOf(ex.gte(1), ex.lt(10)))(
      {},
    );

    expect(validate(1)).toBeTruthy();
    expect(validate(10)).toBeFalsy();
  });

  it("build as validate with pipe", () => {
    const validate = defaultExpressionFactory.create<any, boolean>(ex.pipe(ex.len(), ex.gte(3)))(
      {},
    );

    expect(validate([1, 2, 3])).toBeTruthy();
    expect(validate([1])).toBeFalsy();
  });

  it("build as validate with multi expr", () => {
    const validate = defaultExpressionFactory.create<any, boolean>(ex.anyOf(ex.lte(1), ex.gt(10)))(
      {},
    );

    expect(validate(1)).toBeTruthy();
    expect(validate(2)).toBeFalsy();
  });
});
