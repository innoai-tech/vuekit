import { describe, expect, test } from "vitest";
import { Schema } from "../Schema.ts";

describe("#Schema", () => {
  test("should create simple object", () => {
    const s = Schema.create({
      type: "object",
      properties: {
        name: { type: "string" },
      },
    });

    expect(Schema.extractSchema(s)).toEqual({
      type: "object",
      properties: {
        name: { type: "string" },
      },
    });
  });

  test("should create merged object", () => {
    const base = Schema.create({
      type: "object",
      properties: {
        name: { type: "string" },
      },
    });

    const merged = Schema.create(
      {
        nullable: true,

        [Schema.meta]: {
          label: "label",
        },
      },
      base,
    );

    expect(Schema.extractSchema(merged)).toEqual({
      type: "object",
      properties: {
        name: { type: "string" },
      },
      nullable: true,
    });

    expect(Schema.extractMeta(merged)).toEqual({
      label: "label",
    });

    const merged2 = Schema.create({
      [Schema.underlying]: {
        schema: merged,
      },
      [Schema.meta]: {
        description: "description",
      },
    });

    expect(Schema.extractMeta(merged2)).toEqual({
      label: "label",
      description: "description",
    });
  });
});
