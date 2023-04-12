为了更好的 TypeScript 和 JSX 的支持，重新抽象了定义组件的方式

一般组件：

```tsx live
import { component } from "@innoai-tech/vuekit";
import { ref } from "vue";

export default component(() => {
  const count = ref(1);

  return () => (
    <div style={{ display: "flex", gap: "1rem" }}>
      <div>Counts: {count.value}</div>
      <button onClick={() => count.value++}>Click To Count</button>
    </div>
  );
});
```

可复用组件：

- `props` 和 `emits` 合并声明，基于 [zod](https://zod.dev/)

```tsx live
import { component, z } from "@innoai-tech/vuekit";
import { ref, type VNode } from "vue";

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
    onValueChange: z.custom<(v: string) => void>()
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

export interface Option {
  label: string;
  value: string;
}

export const List = component(
  {
    // $ 前缀视为 slots
    $title: z.custom<VNode>(),
    // renderProp
    $item: z.custom<(option: Option) => VNode>()

    // 以此避免多插槽时 children slots object 的写法, 且无类型约束，
    // {{ default: () => VNode, title: () => VNode, item: (option: Option) => VNode }}
  },
  ({}, { slots }) =>
    () => {
      const options = [
        {
          label: "1",
          value: "1"
        },
        {
          label: "2",
          value: "2"
        }
      ];

      return (
        <dl>
          <dt>default</dt>
          <dd>{slots.default?.()}</dd>
          <dt>title</dt>
          <dd>{slots.title?.()}</dd>
          <dt>item</dt>
          <dd>{options.map((option) => slots.item?.(option))}</dd>
        </dl>
      );
    }
);

export default component(() => {
  const inputValue = ref("");

  return () => (
    <List
      $title={<div>Inputted: {inputValue.value}</div>}
      $item={(o) => <div>{o.label}</div>}
    >
      <TextInput
        type={"text"}
        onValueChange={(value) => {
          inputValue.value = value;
        }}
      />
    </List>
  );
});
```
