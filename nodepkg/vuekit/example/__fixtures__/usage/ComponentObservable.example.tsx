import { component, observableRef, subscribe, z } from "@innoai-tech/vuekit";
import { ref } from "vue";
import { tap, debounceTime } from "rxjs";

export const TextDebounceInput = component(
  {
    value: z.string().optional().default("1"),
    onValueChange: z.function().args(z.string()),
  },
  (props, { emit }) => {
    const ref = observableRef(props.value ?? "");

    subscribe(
      ref.pipe(
        debounceTime(500),
        tap((v) => emit("value-change", v))
      )
    );

    return () => {
      return (
        <input
          value={ref.value}
          onInput={(e) => {
            ref.value = (e.target as HTMLInputElement).value;
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
