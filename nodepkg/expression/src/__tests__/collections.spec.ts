import { describe, expect, it } from "vitest";
import { defaultExpressionFactory, ex } from "../index.ts";

describe("expression for array", () => {
  it("build every as validate", () => {
    const validate = defaultExpressionFactory.create<any, boolean>(
      ex.every(ex.elem(ex.pipe(ex.len(), ex.gte(3)))),
    )({});

    expect(validate(["111", "121", "131"])).toBeTruthy();
    expect(validate(["111", "12", "131"])).toBeFalsy();
  });

  it("build some as validate", () => {
    const validate = defaultExpressionFactory.create<any, boolean>(
      ex.some(ex.elem(ex.pipe(ex.len(), ex.gte(3)))),
    )({});

    expect(validate(["111", "121", "131"])).toBeTruthy();
    expect(validate(["111", "12", "131"])).toBeTruthy();
    expect(validate(["11", "12", "11"])).toBeFalsy();
  });
});

describe("expression for object", () => {
  it("build as validate", () => {
    const validate = defaultExpressionFactory.create<any, boolean>(
      ex.every(ex.elem(ex.pipe(ex.len(), ex.gte(3)))),
    )({});

    expect(
      validate({
        "1": "111",
        "2": "121",
        "3": "131",
      }),
    ).toBeTruthy();

    expect(
      validate({
        "1": "111",
        "2": "12",
        "3": "131",
      }),
    ).toBeFalsy();
  });
});
