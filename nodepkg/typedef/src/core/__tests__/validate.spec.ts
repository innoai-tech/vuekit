import { expect, describe, test } from "vitest";
import { createMetaBuilder, t } from "../index";

describe("Meta", () => {
  describe("iter desc", () => {
    test("when as array", () => {
      const fields: { [k: string]: string } = {};

      for (const [k, _, s] of t.array(schema).entries([undefined, undefined])) {
        if (s.type == "never") {
          continue;
        }

        fields[k] = "";
      }

      expect(fields).toEqual({
        "0": "",
        "1": ""
      });
    });


    test("when value empty", () => {
      const fields: { [k: string]: string } = {};

      for (const [k, _, s] of schema.entries({})) {
        if (s.type == "never") {
          continue;
        }

        fields[k] = [
          s.getMeta("description") ?? "",
          ...(s.getSchema("enum") ?? [])
        ].join("|");
      }

      expect(fields).toEqual({
        name: "名称",
        desc: "描述",
        envType: "环境类型|DEV|ONLINE",
        netType: "网络类型|AIRGAP|DIRECT"
      });
    });

    test("when tagged value matched", () => {
      const fields: { [k: string]: string } = {};

      for (const [k, _, s] of schema.entries({
        netType: "DIRECT"
      })) {
        if (s.type == "never") {
          continue;
        }

        fields[k] = [
          s.getMeta("description") ?? "",
          ...(s.getSchema("enum") ?? [])
        ].join("|");
      }

      expect(fields).toEqual({
        name: "名称",
        desc: "描述",
        envType: "环境类型|DEV|ONLINE",
        netType: "网络类型|AIRGAP|DIRECT",
        endpoint: "访问地址"
      });
    });
  });
});

describe("Validate", () => {
  describe("simple object", () => {
    test("should", () => {
      const [err] = objectSchema.validate({
        "name": "1"
      });
      const errors = err?.failures();

      expect(errors![0]).toHaveProperty("key", "name");
      expect(errors![0]).toHaveProperty(
        "message",
        "只能包含小写字符，数字与短横 -， 且必须由小写字符开头"
      );
    });
  });

  describe("discriminatorMapping", () => {
    test("validate discriminator", () => {
      const [err] = taggedUnion.validate({});
      const errors = err?.failures();

      expect(errors![0]).toHaveProperty("key", "netType");
      expect(errors![0]).toHaveProperty(
        "message",
        "Expected a value of type `enums`, but received: `undefined`"
      );
    });

    test("validate branch left", () => {
      const [err] = taggedUnion.validate({
        netType: NetType.AIRGAP
      });
      const errors = err?.failures();
      expect(errors).toBeUndefined();
    });

    test("validate branch right", () => {
      const [err] = taggedUnion.validate({
        netType: NetType.DIRECT
      });
      const errors = err?.failures();

      expect(errors![0]).toHaveProperty("key", "endpoint");
      expect(errors![0]).toHaveProperty(
        "message",
        "Expected a value of type `string`, but received: `undefined`"
      );
    });
  });
});

enum EnvType {
  DEV = "DEV",
  ONLINE = "ONLINE",
}

enum NetType {
  AIRGAP = "AIRGAP",
  DIRECT = "DIRECT",
}

const objectSchema = t.object({
  name: t.string().use(
    desc("名称"),
    t.pattern(
      /[a-z][a-z0-9-]+/,
      "只能包含小写字符，数字与短横 -， 且必须由小写字符开头"
    )
  ),
  desc: t.string().use(desc("描述").readOnly()),
  envType: t.nativeEnum(EnvType).optional().use(desc("环境类型"))
});

const taggedUnion = t
  .discriminatorMapping("netType", {
    [NetType.AIRGAP]: t.object({}),
    [NetType.DIRECT]: t.object({
      endpoint: t.string().use(desc("访问地址"))
    })
  })
  .use(desc("网络类型"));

export const schema = t.intersection(objectSchema, taggedUnion);

function desc(description: string) {
  return createMetaBuilder<{ description: string; readOnly?: true }>({
    description
  });
}
