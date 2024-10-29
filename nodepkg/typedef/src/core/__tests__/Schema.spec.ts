import { describe, expect, test } from "bun:test";
import { Schema } from "../Schema.ts";

describe("#Schema", () => {
  test("should create simple object", () => {
    const s = Schema.create({
      type: "object",
      properties: {
        name: { type: "string" },
      },
    });

    expect(Schema.schemaAll(s)).toEqual({
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

    expect(Schema.schemaAll(merged)).toEqual({
      type: "object",
      properties: {
        name: { type: "string" },
      },
      nullable: true,
    });

    expect(Schema.schemaAll(merged.metadata)).toEqual({
      label: "label",
    });

    const merged2 = Schema.create({
      [Schema.meta]: {
        description: "description",
      },
      [Schema.underlying]: {
        schema: merged,
      },
    });

    expect(Schema.schemaAll(merged2.metadata)).toEqual({
      label: "label",
      description: "description",
    });
  });
});
