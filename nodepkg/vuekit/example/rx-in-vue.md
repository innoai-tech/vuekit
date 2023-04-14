和 [rxjs](https://rxjs.dev/) 集成

```tsx preview
import {
  component,
  component$,
  rx,
  render,
  observableRef,
  subscribeUntilUnmount,
  z
} from "@innoai-tech/vuekit";
import { ref } from "vue";
import { debounceTime, subscribeOn } from "rxjs";

export const TextDebounceInput = component$(
  {
    value: z.string().optional().default("1"),
    onValueChange: z.custom<(v: string) => void>()
  },
  (props, { emit }) => {
    const value$ = observableRef(props.value ?? "");

    rx(
      value$,
      debounceTime(300),
      subscribeUntilUnmount((v) => emit("value-change", v))
    );

    return rx(
      value$,
      // 由于 vue slots 的原因
      // 这里必须返回 `() => VNodeChild`
      // render 是 `rxMap((v) => () => VNodeChild)` 的 简写
      render((v) => (
        <input
          value={v}
          onInput={(e) => {
            value$.value = (e.target as HTMLInputElement).value;
          }}
        />
      ))
    );
  }
);

export default component(() => {
  const inputValue = ref("default");

  return () => (
    <div>
      <div style={{ display: "flex", gap: "1rem" }}>
        <TextDebounceInput
          value={inputValue.value}
          onValueChange={(value) => {
            inputValue.value = value;
          }}
        />
        <div>Inputted: {inputValue.value}</div>
      </div>
    </div>
  );
});
```
