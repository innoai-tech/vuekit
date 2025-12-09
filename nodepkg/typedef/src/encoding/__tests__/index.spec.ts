import { describe, expect, test } from "vitest";
import { get } from "es-toolkit/compat";
import {
  JSONSchemaDecoder,
  JSONSchemaEncoder,
  refName,
  TypedefEncoder,
  TypeScriptEncoder,
} from "../";
import { t } from "../../core";

describe("Encoding", () => {
  enum InputType {
    text = "text",
    number = "number",
    select = "select",
  }

  const schemaIntOrStr = t.union(t.integer(), t.string());

  const schemaTaggedUnion = t.discriminatorMapping("type", {
    [InputType.text]: t.ref("InputText", () =>
      t.object({
        type: t.literal(InputType.text),
      }),
    ),
    [InputType.select]: t.ref("InputSelect", () =>
      t.object({
        type: t.literal(InputType.select),
        options: t.array(
          t.ref("Option", () =>
            t.object({
              label: t.string(),
              value: t.string(),
            }),
          ),
        ),
      }),
    ),
  });

  const base = t.object({
    intOrStr: t
      .ref("IntOrStr", () => schemaIntOrStr)
      .use(
        t.annotate({
          title: "Test",
          description: "test",
        }),
      ),
    placement: t.enums(["leading", "trailing"]),
    inputType: t
      .ref("InputType", () =>
        t.nativeEnum(InputType).use(
          t.annotate({
            enumLabels: ["文本", "数字", "选项"],
          }),
        ),
      )
      .optional(),
    keyValues: t.record(t.string(), t.any()).optional(),
    array: t.array(t.boolean()),
    point: t.tuple([t.number(), t.number()]),
  });

  const schema = t.intersection(
    t.ref("Base", () => base),
    t.object({
      input: t.ref("Input", () => schemaTaggedUnion),
    }),
  );

  test("JSONSchema decode", () => {
    const jsonSchema = JSONSchemaEncoder.encode(schema);

    const schema2 = JSONSchemaDecoder.decode(jsonSchema, (ref) => {
      return [get(jsonSchema, ref.split("#/")[1]?.split("/") ?? ""), refName(ref)];
    });

    const jsonSchema2 = JSONSchemaEncoder.encode(schema2);
    expect(jsonSchema2).toEqual(jsonSchema);
  });

  test("Typedef encode", () => {
    const typeDefCode = TypedefEncoder.encode(t.ref("Type", () => schema));
    expect(typeDefCode).toMatchSnapshot();
  });

  test("TypeScript encode", () => {
    const tsCode = TypeScriptEncoder.encode(t.ref("Type", () => schema));
    expect(tsCode).toMatchSnapshot();
  });

  test("JSONSchema encode", () => {
    const jsonSchema = JSONSchemaEncoder.encode(schema);
    expect(jsonSchema).toMatchSnapshot();
  });
});
