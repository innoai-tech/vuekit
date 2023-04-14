和 [rxjs](https://rxjs.dev/) 集成

```tsx preview
import {
  component,
  component$,
  rx,
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
  (props, { emit, render }) => {
    const value$ = observableRef(props.value ?? "");

    rx(
      value$,
      debounceTime(300),
      subscribeUntilUnmount((v) => emit("value-change", v))
    );

    return rx(
      value$,
      // 由于 vue slots 机制的原因, 
      // render 需要 slots，以确保 slot 更新时会 re-render.
      // 因而，render 作为 额外的 ctx 方法
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
