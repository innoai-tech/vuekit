import {
  type AnyType,
  component$,
  type Context,
  ImmerBehaviorSubject,
  rx
} from "@innoai-tech/vuekit";
import { ValueView } from "./TokenView.tsx";
import { Popover, PopupStatus } from "./Menu.tsx";
import { set } from "@innoai-tech/lodash";
import { JSONEditorProvider } from "../models";
import { Icon, IconButton } from "@innoai-tech/vuematerial";
import { mdiCancel, mdiCheck } from "@mdi/js";
import { onMounted, ref } from "vue";
import { FormContainerAsRow, FormControls } from "./Form.tsx";

export const NumberInput = component$<{
  ctx: Context;
  value: number | undefined;
  typedef: AnyType;
}>((props, { render }) => {
  const open$ = new PopupStatus(false);
  const editor$ = JSONEditorProvider.use();

  return rx(
    props.value$,
    render((value) => {
      return (
        <Popover
          open$={open$}
          $content={
            <NumberForm
              value={value}
              onSubmit={(v) => {
                editor$.next((values: any) => {
                  set(values, props.ctx.path, v);
                });
                open$.hide();
              }}
            />
          }
        >
          <div>
            <ValueView
              value={value}
              onClick={() => {
                open$.show();
              }}
            />
          </div>
        </Popover>
      );
    })
  );
});

const NumberForm = component$<{
  value?: number;
  onSubmit: (value?: number) => void;
}>((props, { emit, render }) => {
  const input$ = new ImmerBehaviorSubject(props.value);
  const $input = ref<HTMLTextAreaElement | null>(null);

  const cancel = () => {
    emit("submit", undefined);
  };

  const submit = () => {
    try {
      emit("submit", input$.value);
    } catch (e) {
    }
  };

  const handleUserKeyPress = (e: KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      submit();
    }
  };

  onMounted(() => {
    $input.value?.focus();
  });

  return rx(
    input$,
    render((input) => {
      return (
        <FormContainerAsRow
          onSubmit={(evt) => {
            evt.preventDefault();
            submit();
          }}
        >
          <input
            ref={$input}
            value={input}
            type="number"
            name="value"
            onInput={(evt) => {
              try {
                input$.next(parseFloat((evt.target as HTMLInputElement).value));
              } catch (evt) {
              }
            }}
            onKeypress={handleUserKeyPress}
          />
          <FormControls>
            <IconButton
              type="button"
              onClick={() => {
                cancel();
              }}
            >
              <Icon path={mdiCancel} />
            </IconButton>
            <IconButton type="submit">
              <Icon path={mdiCheck} />
            </IconButton>
          </FormControls>
        </FormContainerAsRow>
      );
    })
  );
});
