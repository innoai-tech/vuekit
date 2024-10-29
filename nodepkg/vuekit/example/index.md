为了更好的 TypeScript 和 JSX 的支持，重新抽象了定义组件的方式

一般组件：

```tsx preview
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

- `props` 和 `emits` 合并声明

```tsx preview
import { component, t, type VNode, type VNodeChild } from "@innoai-tech/vuekit";
import { ref } from "vue";

export const TextInput = component(
  {
    // VUE 的注册机制（Proxy 定义基准，以及从 attrs 中提取 props 的 emits 的依据）
    // 必须声明，哪怕只是属性名称
    //
    // 又由于 TypeString 的老问题  https://www.typescriptneedstypes.com/#the-problem
    // 类型定义无法转为 Runtime 对象
    value: t.string().optional().default("1"),
    type: t.enums(["text", "number"]),

    // on[A-Z] 前缀视为 emits
    onValueChange: t.custom<(v: string) => void>(),
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
  },
);

export interface Option {
  label: string;
  value: string;
}

export const List = component(
  {
    // $ 前缀视为 slots
    $title: t.custom<VNodeChild>().optional(),
    // renderProp
    $item: t.custom<(option: Option) => VNode>().optional(),

    $default: t.custom<VNodeChild>().optional(),

    // 以此避免多插槽时 children slots object 的写法, 且无类型约束，
    // {{ default: () => VNode, title: () => VNode, item: (option: Option) => VNode }}
  },
  ({}, { slots }) =>
    () => {
      const options = [
        {
          label: "1",
          value: "1",
        },
        {
          label: "2",
          value: "2",
        },
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
    },
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
