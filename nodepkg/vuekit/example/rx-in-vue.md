和 [rxjs](https://rxjs.dev/) 集成

```tsx preview
import {
  component,
  component$,
  observableRef,
  render,
  rx,
  subscribeUntilUnmount,
} from "@innoai-tech/vuekit";
import { ref } from "vue";
import { debounceTime } from "rxjs";

export const TextDebounceInput = component$<{
  value?: string;
  onValueChange?: (v: string) => void;
}>((props, { emit }) => {
  const value$ = observableRef(props.value ?? "1");

  rx(
    value$,
    debounceTime(300),
    subscribeUntilUnmount((v) => emit("value-change", v)),
  );

  return rx(
    value$,
    render((v) => (
      <input
        value={v}
        onInput={(e) => {
          value$.value = (e.target as HTMLInputElement).value;
        }}
      />
    )),
  );
});

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
