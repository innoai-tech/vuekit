import { describe, expect, test } from "bun:test";
import { defineModifier, t, type Type } from "../index";

const label = defineModifier(
  <T extends Type<string>>(type: T, label: string) => {
    return t.annotate({ label: label }).modify(type);
  },
);

const readOnly = defineModifier(
  <T extends Type<string>>(type: T, readOnly?: boolean) => {
    return t.annotate({ readOnly: readOnly }).modify(type);
  },
);

enum EnvType {
  DEV = "DEV",
  ONLINE = "ONLINE",
}

enum NetType {
  AIRGAP = "AIRGAP",
  DIRECT = "DIRECT",
}

class MetaSchema {
  @label("名称")
  @t.pattern(
    /[a-z][a-z0-9-]+/,
    "只能包含小写字符，数字与短横 -， 且必须由小写字符开头",
  )
  @t.string()
  name!: string;
}

class ObjectSchema extends MetaSchema {
  @label("描述")
  @readOnly()
  desc!: string;

  @label("环境类型")
  @t.optional()
  @t.nativeEnum(EnvType)
  envType?: EnvType;
}

const taggedUnion = t
  .discriminatorMapping("netType", {
    [NetType.AIRGAP]: t.object({}),
    [NetType.DIRECT]: t.object({
      endpoint: t.string().use(label("访问地址")),
    }),
  })
  .use(label("网络类型"));

describe("Meta", () => {
  describe("iter desc", () => {
    const schema = t.intersection(t.object(ObjectSchema), taggedUnion);

    test("when as array", () => {
      const fields: { [k: string]: string } = {};

      for (const [k, _, s] of t.array(schema).entries([undefined, undefined])) {
        if (s.type === "never") {
          continue;
        }

        fields[k as string] = "";
      }

      expect(fields).toEqual({
        "0": "",
        "1": "",
      });
    });

    test("when value empty", () => {
      const fields: { [k: string]: string } = {};

      for (const [k, _, s] of schema.entries({})) {
        if (s.type === "never") {
          continue;
        }

        fields[String(k)] = [
          s.meta?.["label"],
          ...((s.schema as any)?.["enum"] ?? []),
        ].join("|");
      }

      expect(fields).toEqual({
        name: "名称",
        desc: "描述",
        envType: "环境类型|DEV|ONLINE",
        netType: "网络类型|AIRGAP|DIRECT",
      });
    });

    test("when tagged value matched", () => {
      const fields: { [k: string]: string } = {};

      for (const [k, _, s] of schema.entries({
        netType: "DIRECT",
      })) {
        if (s.type === "never") {
          continue;
        }

        fields[String(k)] = [
          s.meta["label"] ?? "",
          ...((s.schema as any)?.["enum"] ?? []),
        ].join("|");
      }

      expect(fields).toEqual({
        name: "名称",
        desc: "描述",
        envType: "环境类型|DEV|ONLINE",
        netType: "网络类型|AIRGAP|DIRECT",
        endpoint: "访问地址",
      });
    });
  });
});

describe("Validate", () => {
  describe("simple object", () => {
    test("should", () => {
      const objectSchema = t.object(ObjectSchema);

      const [err] = objectSchema.validate({
        name: "1",
      });

      const errors = err?.failures();

      expect(errors?.[0]).toHaveProperty("key", "name");
      expect(errors?.[0]).toHaveProperty(
        "message",
        "只能包含小写字符，数字与短横 -， 且必须由小写字符开头",
      );
    });
  });

  describe("discriminatorMapping", () => {
    test("validate discriminator", () => {
      const [err] = taggedUnion.validate({});
      const errors = err?.failures();

      expect(errors?.[0]).toHaveProperty("key", "netType");
      expect(errors?.[0]).toHaveProperty("message", "Required");
    });

    test("validate branch left", () => {
      const [err] = taggedUnion.validate({
        netType: NetType.AIRGAP,
      });
      const errors = err?.failures();
      expect(errors).toBeUndefined();
    });

    test("validate branch right", () => {
      const [err] = taggedUnion.validate({
        netType: NetType.DIRECT,
      });
      const errors = err?.failures();

      expect(errors?.[0]).toHaveProperty("key", "endpoint");
      expect(errors?.[0]).toHaveProperty("message", "Required");
    });
  });
});
