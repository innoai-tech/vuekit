import { describe, test, expect } from "vitest";
import * as t from "../../t";
import {
  TypeScriptEncoder,
  JSONSchemaDecoder,
  JSONSchemaEncoder,
  refName,
  TypedefEncoder
} from "../";
import { get } from "@innoai-tech/lodash";

describe("Encoding", () => {
  enum InputType {
    text = "text",
    number = "number",
    select = "select",
  }

  const schemaStrOrInt = t.union(t.string(), t.integer());

  const schemaTaggedUnion = t.discriminatorMapping("type", {
    [InputType.text]: t.object(),
    [InputType.select]: t.ref("WithOptions", () =>
      t.object({
        options: t.array(
          t.object({
            label: t.string(),
            value: t.string()
          })
        )
      })
    )
  });

  const schema = t.intersection(
    t.object({
      strOrInt: t
        .ref("StrOrInt", () => schemaStrOrInt)
        .annotate({
          description: "StrOrInt"
        }),
      placement: t.enums(["leading", "trailing"] as const),
      inputType: t.ref("InputType", () => t.nativeEnum(InputType)).optional(),
      keyValues: t.record(t.string(), t.any()).optional(),
      array: t.array(t.boolean()),
      point: t.tuple([t.number(), t.number()])
    }),
    schemaTaggedUnion
  );

  test("JSONSchema decode", () => {
    const jsonSchema = JSONSchemaEncoder.encode(schema);

    const schema2 = JSONSchemaDecoder.decode(jsonSchema, (ref) => {
      return [get(jsonSchema, ref.split("#/")[1]!.split("/")), refName(ref)];
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
    console.log(JSON.stringify(jsonSchema, null, 2));
    expect(jsonSchema).toMatchSnapshot();
  });
});
