import {
  component$,
  type Context,
  rx,
  t,
  type Type,
} from "@innoai-tech/vuekit";
import { isArray, isObject } from "@innoai-tech/lodash";
import { ArrayInput } from "./ArrayInput.tsx";
import { RecordInput } from "./RecordInput.tsx";
import { ValueInput } from "./ValueInput.tsx";

export const AnyInput = component$<{
  typedef: Type;
  ctx: Context;
  value: string | boolean | number | null | undefined;
}>((props, { render }) => {
  return rx(
    props.value$,
    render((value) => {
      if (isArray(value)) {
        return (
          <ArrayInput
            value={value}
            typedef={t.array(t.any())}
            ctx={props.ctx}
          />
        );
      }

      if (isObject(value)) {
        return (
          <RecordInput
            value={value}
            typedef={t.record(t.string(), t.any())}
            ctx={props.ctx}
          />
        );
      }

      return (
        <ValueInput
          value={value}
          typedef={t.any()}
          ctx={props.ctx}
          allowRawJSON
        />
      );
    }),
  );
});
