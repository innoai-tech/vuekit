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

    const components: Describe<Record<string, string> | undefined> = t
      .record(t.string(), t.any())
      .optional();

    const all: Describe<{
      placement: "leading" | "trailing";
      custom?: string;
      type?: InputType;
      str: string;
      components?: Record<string, boolean>;
    }> = t.object({
      placement: t.enums(["leading", "trailing"] as const),
      custom: t.custom<string>().optional().default("1"),
      type: t.nativeEnum(InputType).optional().default(InputType.text),
      str: t.string(),
      components: t.record(t.string(), t.boolean()).optional()
    });

    expect([placement, components, str, e, all]).not.toBeUndefined();
  });

  test("schema", () => {
    const s = t.object({
      placement: t.enums(["leading", "trailing"] as const),
      custom: t.custom<string>().optional().default("1"),
      type: t.nativeEnum(InputType).optional().default(InputType.text),
      components: t.record(t.string(), t.any()).optional(),
      str: t.string()
    });

    expect(s.schema.custom.create(undefined)).toBe("1");
    expect(s.schema.type.create(undefined)).toBe(InputType.text);
    expect(s.schema.components.create(undefined)).toBe(undefined);
    expect(s.schema.str.validate(undefined)[0]!.message).toBe(
      "Expected a string, but received: undefined"
    );
  });
});
