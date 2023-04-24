import { expect, describe, test } from "vitest";
import { t } from "../index";

describe("Type", () => {
  test("schema", () => {
    enum InputType {
      text = "text",
      number = "number",
    }

    const s = t.object({
      custom: t.custom<string>().optional().default("1"),
      placement: t.enums(["leading", "trailing"]),
      type: t.nativeEnum(InputType).default(InputType.text),
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
