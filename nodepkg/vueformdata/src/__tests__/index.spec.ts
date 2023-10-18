import { describe, expect, it } from "bun:test";
import { t } from "@innoai-tech/vuekit";
import { FormData } from "../FormData";

enum EnvType {
  DEV = "DEV",
  ONLINE = "ONLINE",
}

enum NetType {
  AIRGAP = "AIRGAP",
  DIRECT = "DIRECT",
}

const schema = t.intersection(
  t.object({
    name: t
      .string()
      .use(
        t.pattern(
          /[a-z][a-z0-9-]+/,
          "只能包含小写字符，数字与短横 -， 且必须由小写字符开头"
        ),
        FormData.label("名称").readOnlyWhenInitialExist()
      ),
    desc: t.string().optional().use(FormData.label("描述")),
    envType: t.nativeEnum(EnvType).use(FormData.label("环境类型"))
  }),
  t
    .discriminatorMapping("netType", {
      [NetType.AIRGAP]: t.object({}),
      [NetType.DIRECT]: t.object({
        endpoint: t.string().use(FormData.label("集群访问地址"))
      })
    })
    .use(FormData.label("网络类型"))
);

describe("FormData", () => {
  const fd = FormData.of(schema, {});

  it("should initial with correct fields", () => {
    const fields = [...fd.fields(fd.typedef)];
    expect(fields.length).toBe(4);
  });

  it("should update value when field value change", () => {
    const fields = [...fd.fields(fd.typedef)];

    fields[0]?.update(undefined);
    expect(fields[0]?.value.error).toEqual(["字段不能为空"]);

    fields[0]?.update("1");
    expect(fields[0]?.value.error).toEqual([
      "只能包含小写字符，数字与短横 -， 且必须由小写字符开头"
    ]);

    fields[0]?.update("test");

    expect(fd.inputs).toEqual({ name: "test" });
  });

  it("should render condition field", () => {
    for (let field of fd.fields(fd.typedef)) {
      if (field.name === "netType") {
        field.update(NetType.DIRECT);
      }
    }

    const fields = [...fd.fields(fd.typedef)];

    console.log(fields.map((f) => `${f.name} ${f.meta?.label}`));

    expect(fields.length).toBe(5);
  });
});
