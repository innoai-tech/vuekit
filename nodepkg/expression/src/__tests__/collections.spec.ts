import { describe, expect, it } from "bun:test";
import { defaultExpressionFactory, ex } from "../index.ts";

describe("expression for array", () => {
  it("build every as validate", () => {
    const validate = defaultExpressionFactory.create<any, boolean>(
      ex.every(ex.elem(ex.pipe(ex.len(), ex.gte(3)))),
    )({});

    expect(validate(["111", "121", "131"])).toBeTrue();
    expect(validate(["111", "12", "131"])).toBeFalse();
  });

  it("build some as validate", () => {
    const validate = defaultExpressionFactory.create<any, boolean>(
      ex.some(ex.elem(ex.pipe(ex.len(), ex.gte(3)))),
    )({});

    expect(validate(["111", "121", "131"])).toBeTrue();
    expect(validate(["111", "12", "131"])).toBeTrue();
    expect(validate(["11", "12", "11"])).toBeFalse();
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
    ).toBeTrue();

    expect(
      validate({
        "1": "111",
        "2": "12",
        "3": "131",
      }),
    ).toBeFalse();
  });
});
