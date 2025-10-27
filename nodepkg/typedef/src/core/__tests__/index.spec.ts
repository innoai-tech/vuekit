import { describe, expect, test } from "vitest";
import { type Infer, Schema, t } from "../index";

enum InputType {
  text = "text",
  number = "number",
}

describe("Type", () => {
  describe("DefaultedType", () => {
    test("simple", () => {
      const s = t.string().default("default");
      expect(s.create(undefined)).toBe("default");
    });

    test("object", () => {
      const s = t.object({
        str: t.string().default("default"),
      });

      expect(s.create({})).toEqual({
        str: "default",
      });
    });
  });

  describe("OptionalType", () => {
    test("optional", () => {
      const s = t.string().optional();
      expect(s.create(undefined)).toBeUndefined();
    });
  });

  describe("TypeObject", () => {
    const s = t.object({
      a: t.string(),
      o: t.number().optional(),
    });

    test("schema should collect required", () => {
      expect(Schema.schemaProp(s, "required") as string[]).toEqual(["a"]);
    });

    test("should validate incorrect type", () => {
      const [err, _] = s.validate({
        a: 1,
      });
      expect(err).not.toBeUndefined();
    });

    test("should validate prop not allowed", () => {
      const [err, _] = s.validate({
        a: "1",
        x: 1,
      });
      expect(err).not.toBeUndefined();
    });
  });

  describe("Complex", () => {
    const Bool = t.boolean();

    const s = t.object({
      bool: t.ref("Bool", () => Bool),
      const: t.literal("1" as const),
      enum: t.enums(["a", "b"]),
      nativeEnum: t.nativeEnum(InputType),
      int: t.integer(),
      null: t.nil(),
      num: t.number(),
      str: t.string(),
      arr: t.array(t.string()),
      tuple: t.tuple([t.string(), t.number()]),
      record: t.record(t.string(), t.any()),
    });

    test("should validate", () => {
      const [err, _] = s.validate({});
      expect(err).not.toBeUndefined();

      for (const f of err?.failures() ?? []) {
        expect(f.type).not.toBeUndefined();
      }
    });

    const expected: Infer<typeof s> = {
      const: "1",
      bool: false,
      enum: "a",
      nativeEnum: InputType.text,
      int: 0,
      null: null,
      num: 0,
      str: "",
      arr: ["1"],
      tuple: ["x", 1],
      record: {
        a: 1,
      },
    };

    test("should create", () => {
      expect(s.create(expected)).toEqual(expected);
    });

    test("should mask", () => {
      expect(
        s.mask({
          ...expected,
          fieldToDrop: "-",
        }),
      ).toEqual(expected);
    });
  });

  describe("TypeUnion", () => {
    const stringOrNumber = t.union(t.string(), t.number());

    test("should validate pass", () => {
      const [err, _] = stringOrNumber.validate("");
      expect(err).toBeUndefined();
    });

    test("should validate not pass", () => {
      const [err, _] = stringOrNumber.validate({});
      expect(err).not.toBeUndefined();
    });

    describe("discriminatorMapping", () => {
      const taggedUnion = t.discriminatorMapping("type", {
        text: t.object(),
        select: t.object({
          options: t.array(
            t.object({
              label: t.string(),
              value: t.any(),
            }),
          ),
        }),
      });

      const v1: Infer<typeof taggedUnion> = {
        type: "text",
      };

      const v2: Infer<typeof taggedUnion> = {
        type: "select",
        options: [
          {
            label: "1",
            value: 1,
          },
        ],
      };

      test("should validate pass branch 1", () => {
        const [err, _] = taggedUnion.validate(v1);
        expect(err).toBeUndefined();
      });

      test("should validate pass branch 2", () => {
        const [err, _] = taggedUnion.validate(v2);
        expect(err).toBeUndefined();
      });

      test("should validate not pass", () => {
        const [err, _] = taggedUnion.validate({
          type: "text",
          options: [],
        });

        expect(err).not.toBeUndefined();
      });

      describe("with intersection", () => {
        const combined = t.intersection(
          t.object({
            x: t.string(),
          }),
          taggedUnion,
        );

        const v1: Infer<typeof combined> = {
          x: "x",
          type: "text",
        };

        const v2: Infer<typeof combined> = {
          x: "x",
          type: "select",
          options: [
            {
              label: "1",
              value: 1,
            },
          ],
        };

        test("should validate pass branch 1", () => {
          const [err, _] = combined.validate(v1);
          expect(err).toBeUndefined();
        });

        test("should validate pass branch 2", () => {
          const [err, _] = combined.validate(v2);
          expect(err).toBeUndefined();
        });
      });
    });
  });
});
