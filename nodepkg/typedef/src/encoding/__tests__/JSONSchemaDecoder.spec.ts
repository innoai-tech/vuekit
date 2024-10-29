import { describe, expect, it } from "bun:test";
import { get } from "@innoai-tech/lodash";
import { JSONSchemaDecoder, refName } from "../JSONSchemaDecoder.ts";
import { JSONSchemaEncoder } from "../JSONSchemaEncoder.ts";

describe("JSONSchemaDecoder", () => {
  it("decode complex", () => {
    const schema = {
      $defs: {
        A: { type: "string" },
        B: { type: "integer" },
        C: { type: "string", enum: ["X", "Y", "Z"] },
        ObjC: {
          type: "object",
          properties: {
            c: { $ref: "#/$defs/C" },
          },
        },
        Obj: {
          allOf: [
            { $ref: "#/$defs/ObjC" },
            {
              type: "object",
              properties: {
                a: { $ref: "#/$defs/A" },
                nested: { $ref: "#/$defs/ObjC" },
              },
              required: ["a"],
            },
          ],
        },
        Arr: {
          type: "array",
          items: { type: "string" },
        },
        Map: {
          type: "object",
          additionalProperties: {
            type: "string",
          },
        },
        Union: {
          type: "object",
          discriminator: {
            propertyName: "type",
          },
          required: ["type"],
          oneOf: [
            {
              properties: {
                type: { enum: ["A"] },
                a: { $ref: "#/$defs/A" },
                b: { $ref: "#/$defs/B" },
              },
              required: ["type", "a"],
              additionalProperties: false,
            },
            {
              properties: {
                type: { enum: ["B"], type: "string" },
                b: { $ref: "#/$defs/B" },
              },
              required: ["type", "b"],
              additionalProperties: false,
            },
          ],
        },
        TaggedUnionWhenA: {
          properties: {
            type: { enum: ["A"] },
            a: { $ref: "#/$defs/A" },
            b: { $ref: "#/$defs/B" },
          },
          required: ["type", "a"],
          additionalProperties: false,
        },
        TaggedUnion: {
          type: "object",
          discriminator: {
            propertyName: "type",
            mapping: {
              A: { $ref: "#/$defs/TaggedUnionWhenA" },
              B: {
                properties: {
                  type: { enum: ["B"], type: "string" },
                  b: { $ref: "#/$defs/B" },
                },
                required: ["type", "b"],
                additionalProperties: false,
              },
            },
          },
        },
      },
      type: "object",
      additionalProperties: false,
      properties: {
        obj: { $ref: "#/$defs/Obj" },
        arr: { $ref: "#/$defs/Arr" },
        map: { $ref: "#/$defs/Map" },
        union: { $ref: "#/$defs/Union" },
        tagged: { $ref: "#/$defs/TaggedUnion" },
      },
    };

    const t = JSONSchemaDecoder.decode(schema, (ref) => {
      return [get(schema, ref.slice(2).split("/"), {}), refName(ref)];
    });

    const schemaV2 = JSONSchemaEncoder.encode(t);
    expect(schemaV2).toMatchSnapshot();
  });
});
