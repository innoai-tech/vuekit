import { component, z, SlotType } from "@innoai-tech/vuekit";
import { ref } from "vue";

export const TextInput = component(
  {
    // VUE 的注册机制（Proxy 定义基准，以及从 attrs 中提取 props 的 emits 的依据）
    // 必须声明，哪怕只是属性名称
    //
    // 又由于 TypeString 的老问题  https://www.typescriptneedstypes.com/#the-problem
    // 类型定义无法转为 Runtime 对象
    // 因此这里通过 zod 定义类型后 来进行反向推导 （同时作为 Runtime 验证）
    // 注意，如有 optional 和 default，需要放到最后, 且 default 需要放到最后，否则，vue 拿不到默认值
    value: z.string().optional().default("1"),
    type: z.enum(["text", "number"]),

    // on[A-Z] 前缀视为 emits
    onValueChange: z.function().args(z.string())
  },
  (props, { emit }) => {
    // setup

    return () => (
      <input
        value={props.value}
        onInput={(e) => {
          emit("value-change", (e.target as HTMLInputElement).value);
        }}
      />
    );
  }
);

export const Card = component({
  // render[A-Z] 前缀视为 slots
  renderContent: SlotType
}, ({}, { slots }) => () => {
  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      {slots.default?.()}
      <div>
        {slots.content?.()}
      </div>
    </div>
  );
});

export default component(() => {
  const inputValue = ref("");

  return () => (
    <Card
      renderContent={() => <div>Inputted: {inputValue.value}</div>}
    >
      <TextInput
        type={"text"}
        onValueChange={(value) => {
          inputValue.value = value;
        }}
      />
    </Card>
  );
});
