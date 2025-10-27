import { describe, expect, test } from "vitest";
import * as t from "../t.ts";
import { Schema } from "../Schema.ts";

enum Gender {
  MALE = "MALE",
  FEMALE = "FEMALE",
}

describe("define type", () => {
  test("should combine metadata", () => {
    const s = t
      .string()
      .use(t.annotate({ label: "label" }), t.annotate({ title: "title" }))
      .optional();

    expect(s.schema.type).toEqual("string");
    expect(s.meta["label"]).toEqual("label");
    expect(s.meta["title"]).toEqual("title");

    const ref = t.ref("S", () => s);

    expect(Schema.schemaProp<string>(ref, "type")).toEqual("string");
    expect(Schema.metaProp<string>(ref, "label")).toEqual("label");
    expect(Schema.metaProp<string>(ref, "title")).toEqual("title");
  });

  describe("should create string", () => {
    const s = t.string();

    test("should validate", () => {
      expect(Schema.extractSchema(s)).toEqual({
        type: "string",
      });

      expect(s.validate(1)[0]).not.toBeUndefined();
      expect(s.validate("")[0]).toBeUndefined();
    });

    test("with default", () => {
      const s2 = s.default("1");

      expect(s2.create(undefined)).toBe("1");
    });

    test("with optional", () => {
      const s2 = s.optional();

      expect(Schema.extractSchema(s2)).toEqual({
        type: "string",
      });

      expect(s2.validate(undefined)[0]).toBeUndefined();
      expect(s2.validate("")[0]).toBeUndefined();
      expect(s2.validate(1)[0]).not.toBeUndefined();
    });

    test("with modifiers", () => {
      const s2 = s.use(t.minLength(1), t.maxLength(10));

      expect(Schema.extractSchema(s2.schema)).toEqual({
        type: "string",
        minLength: 1,
        maxLength: 10,
      });

      expect(s2.validate("")[0]).not.toBeUndefined();
    });
  });

  class A {
    type = "a" as const;
  }

  class B {
    type = "b" as const;

    @t.string()
    name!: string;
  }

  const types = [
    t.any(),
    t.never(),
    t.nil(),
    t.binary(),
    t.boolean(),
    t.integer(),
    t.number(),
    t.enums(["1", "2", "3"]),
    t.nativeEnum(Gender),
    t.record(t.string(), t.number()),
    t.array(t.string()),
    t.tuple([t.number(), t.number()]),
    t.intersection(
      t.ref("X", () => {
        return t.object({
          name: t.string(),
        });
      }),
      t.object({
        age: t.integer().optional(),
      }),
    ),
    t.object({
      name: t.string(),
      age: t.integer().optional(),
    }),
    t.union(t.integer(), t.string()),
    t.discriminatorMapping("type", {
      a: t.object(),
      b: t.object({
        name: t.string(),
      }),
    }),
    t.discriminatorMapping("type", A, B),
  ];

  for (const s of types) {
    test(s.type, () => {
      expect(Schema.extractSchema(s)).toMatchSnapshot();
    });
  }
});

describe("define type with metadata", () => {
  test("create object", () => {
    class Account {
      @t.string()
      @t.annotate({ label: "姓名" })
      @t.annotate({ readOnlyWhenExists: true })
      name!: string;

      @t.nativeEnum(Gender)
      @t.optional()
      @t.annotate({ label: "性别" })
      gender?: Gender;

      @t.integer()
      @t.annotate({ label: "年龄" })
      age!: number;
    }

    const s = t.object(Account);

    expect(Schema.extractSchema(s.schema)).toEqual({
      type: "object",
      properties: {
        name: {
          type: "string",
        },
        gender: {
          enum: ["MALE", "FEMALE"],
        },
        age: {
          type: "integer",
        },
      },
      required: ["name", "age"],
      additionalProperties: false,
    });

    const metadata: Record<string, any> = {};

    for (const [k, _, prop] of s.entries({})) {
      if (prop.type === "never") {
        continue;
      }
      metadata[k as string] = Schema.extractSchema(prop.meta);
    }

    expect(metadata).toEqual({
      name: {
        label: "姓名",
        readOnlyWhenExists: true,
      },
      gender: {
        label: "性别",
      },
      age: {
        label: "年龄",
      },
    });
  });

  describe("create tagged union", () => {
    class A {
      @t.annotate({ label: "类型" })
      type = "a" as const;
    }

    class B {
      @t.annotate({ label: "类型" })
      type = "b" as const;

      @t.string()
      @t.annotate({ label: "姓名" })
      name!: string;
    }

    const s = t.discriminatorMapping("type", A, B);

    test("when discriminator not set", () => {
      const metadata: Record<string, any> = {};

      for (const [k, _, prop] of s.entries({})) {
        metadata[k as string] = Schema.extractSchema(prop.meta);
      }

      expect(metadata).toEqual({
        type: {
          label: "类型",
        },
      });
    });

    test("when discriminator type with a", () => {
      const metadata: Record<string, any> = {};

      for (const [k, _, prop] of s.entries({
        type: "a",
      })) {
        metadata[k as string] = Schema.extractSchema(prop.meta);
      }

      expect(metadata).toEqual({
        type: {
          label: "类型",
        },
      });
    });

    test("when discriminator type with b", () => {
      const metadata: Record<string, any> = {};

      for (const [k, _, prop] of s.entries({ type: "b" })) {
        metadata[k as string] = Schema.extractSchema(prop.meta);
      }

      expect(metadata).toEqual({
        type: {
          label: "类型",
        },
        name: {
          label: "姓名",
        },
      });
    });
  });
});
