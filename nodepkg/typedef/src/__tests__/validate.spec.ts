import { expect, describe, test } from "vitest";
import { t } from "../index";

describe("Type", () => {
  describe("validate", () => {
    test("fields", () => {
      const value = {};
      const ctx = { path: [], branch: [] };

      for (let [k, v, s] of schema.entries(value, ctx)) {
        console.log(k, v, s);
      }
    });

    describe("discriminatorMapping", () => {
      test("validate discriminator", () => {
        const [err] = discriminatorMappingSchema.validate({});
        const errors = err?.failures();

        expect(errors![0]).toHaveProperty(
          "key", "netType"
        );
        expect(errors![0]).toHaveProperty(
          "message", "Expected one of `\"AIRGAP\",\"DIRECT\"`, but received: undefined"
        );
      });

      test("validate branch left", () => {
        const [err] = discriminatorMappingSchema.validate({
          netType: NetType.AIRGAP
        });
        const errors = err?.failures();
        expect(errors).toBeUndefined();
      });

      test("validate branch right", () => {
        const [err] = discriminatorMappingSchema.validate({
          netType: NetType.DIRECT
        });
        const errors = err?.failures();

        expect(errors![0]).toHaveProperty(
          "key", "endpoint"
        );
        expect(errors![0]).toHaveProperty(
          "message", "Expected a string, but received: undefined"
        );
      });
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
  name: t
    .string()
    .use(
      t.pattern(
        /[a-z][a-z0-9-]+/,
        "只能包含小写字符，数字与短横 -， 且必须由小写字符开头"
      )
    ),
  desc: t.string().use(t.describe("描述")),
  envType: t.nativeEnum(EnvType).optional().use(t.describe("环境类型"))
});

const discriminatorMappingSchema = t
  .discriminatorMapping("netType", {
      [NetType.AIRGAP]: t.object({}),
      [NetType.DIRECT]: t.object({
        endpoint: t.string().use(t.describe("访问地址"))
      })
    }
  )
  .use(t.describe("网络类型"));

export const schema = t.intersection(
  objectSchema,
  discriminatorMappingSchema
);
