和 [rxjs](https://rxjs.dev/) 集成

```tsx preview
import { component, rx, observableRef, subscribeUntilUnmount, z } from "@innoai-tech/vuekit";
import { ref } from "vue";
import { debounceTime, subscribeOn } from "rxjs";

export const TextDebounceInput = component(
  {
    value: z.string().optional().default("1"),
    onValueChange: z.custom<(v: string) => void>()
  },
  (props, { emit }) => {
    const value$ = observableRef(props.value ?? "");

    rx(
      value$,
      debounceTime(500),
      subscribeUntilUnmount((v) => emit("value-change", v))
    );

    return () => {
      return (
        <input
          value={value$.value}
          onInput={(e) => {
            value$.value = (e.target as HTMLInputElement).value;
          }}
        />
      );
    };
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
