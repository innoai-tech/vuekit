import { expect, describe, test } from "vitest";
import { type Describe, t } from "../index";

describe("Type", () => {
  enum InputType {
    text = "text",
    number = "number",
  }

  test("Describe", () => {
    const e: Describe<InputType> = t.nativeEnum(InputType);

    const placement: Describe<"leading" | "trailing"> = t.enums([
      "leading",
      "trailing"
    ] as const);

    const str: Describe<string | undefined> = t
      .string()
      .optional()
      .default("1");

    const bool: Describe<boolean> = t.boolean();

    const arr: Describe<string[]> = t.array(t.string());

    const tuple: Describe<[string, number]> = t.tuple([t.string(), t.number()]);

    tuple.schema.items;

    const components: Describe<Record<string, string> | undefined> = t
      .record(t.string(), t.any())
      .optional();

    const all: Describe<{
      placement: "leading" | "trailing";
      custom?: Date;
      type?: InputType;
      str: string;
      components?: Record<string, boolean>;
    }> = t.object({
      placement: t.enums(["leading", "trailing"] as const),
      custom: t.custom<Date>().optional().default(new Date()),
      type: t.nativeEnum(InputType).optional().default(InputType.text),
      str: t.string(),
      components: t.record(t.string(), t.boolean()).optional()
    });

    expect([
      placement,
      components,
      arr,
      tuple,
      str,
      bool,
      e,
      all
    ]).not.toBeUndefined();
  });

  test("schema", () => {
    const s = t.object({
      placement: t.enums(["leading", "trailing"] as const),
      custom: t.custom<string>().optional().default("1"),
      type: t.nativeEnum(InputType).optional().default(InputType.text),
      components: t.record(t.string(), t.any()).optional(),
      str: t.string()
    });

    expect(s.schema.properties.custom.create(undefined)).toBe("1");
    expect(s.schema.properties.type.create(undefined)).toBe(InputType.text);
    expect(s.schema.properties.components.create(undefined)).toBe(undefined);
    expect(s.schema.properties.str.validate(undefined)[0]!.message).toBe(
      "Expected a string, but received: undefined"
    );
  });
});
