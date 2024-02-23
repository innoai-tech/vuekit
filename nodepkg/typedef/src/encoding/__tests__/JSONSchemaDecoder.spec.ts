import { describe, expect, it } from "bun:test";
import { get } from "@innoai-tech/lodash";
import { JSONSchemaDecoder, JSONSchemaEncoder, refName } from "..";

describe("JSONSchemaDecoder", () => {
  it("decode complex", () => {
    const schema = {
      definitions: {
        A: { type: "string" },
        B: { type: "integer" },
        C: { type: "string", enum: ["X", "Y", "Z"] },
        ObjC: {
          type: "object",
          properties: {
            c: { $ref: "#/definitions/C" },
          },
        },
        Obj: {
          allOf: [
            { $ref: "#/definitions/ObjC" },
            {
              type: "object",
              properties: {
                a: { $ref: "#/definitions/A" },
                nested: { $ref: "#/definitions/ObjC" },
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
                a: { $ref: "#/definitions/A" },
                b: { $ref: "#/definitions/B" },
              },
              required: ["a"],
              additionalProperties: false,
            },
            {
              properties: {
                type: { enum: ["B"], type: "string" },
                b: { $ref: "#/definitions/B" },
              },
              required: ["b"],
              additionalProperties: false,
            },
          ],
        },
        TaggedUnionWhenA: {
          properties: {
            type: { enum: ["A"] },
            a: { $ref: "#/definitions/A" },
            b: { $ref: "#/definitions/B" },
          },
          required: ["a"],
          additionalProperties: false,
        },
        TaggedUnion: {
          type: "object",
          discriminator: {
            propertyName: "type",
            mapping: {
              A: { $ref: "#/definitions/TaggedUnionWhenA" },
              B: {
                properties: {
                  type: { enum: ["B"], type: "string" },
                  b: { $ref: "#/definitions/B" },
                },
                required: ["b"],
                additionalProperties: false,
              },
            },
          },
        },
      },
      type: "object",
      additionalProperties: false,
      properties: {
        obj: { $ref: "#/definitions/Obj" },
        arr: { $ref: "#/definitions/Arr" },
        map: { $ref: "#/definitions/Map" },
        union: { $ref: "#/definitions/Union" },
        tagged: { $ref: "#/definitions/TaggedUnion" },
      },
    };

    const t = JSONSchemaDecoder.decode(schema, (ref) => {
      return [get(schema, ref.slice(2).split("/"), {}), refName(ref)];
    });

    const schemaV2 = JSONSchemaEncoder.encode(t);
    expect(schemaV2).toMatchSnapshot();
  });
});
