import {
  type AnyType,
  component$,
  type Context,
  ImmerBehaviorSubject,
  rx,
} from "@innoai-tech/vuekit";
import { ValueView } from "./TokenView.tsx";
import { Popover, PopupStatus } from "./Menu.tsx";
import { set } from "@innoai-tech/lodash";
import { JSONEditorProvider } from "../models";
import { Icon, IconButton } from "@innoai-tech/vuematerial";
import { mdiCancel, mdiCheck } from "@mdi/js";
import { onMounted, ref } from "vue";
import { FormContainer, FormControls } from "./Form.tsx";

export const StringInput = component$<{
  ctx: Context;
  value: string | undefined;
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
            <TextareaForm
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
          <ValueView
            value={value}
            onClick={() => {
              open$.show();
            }}
          />
        </Popover>
      );
    }),
  );
});

const TextareaForm = component$<{
  value?: string;
  onSubmit: (value?: string) => void;
}>((props, { emit, render }) => {
  const input$ = new ImmerBehaviorSubject(props.value);
  const $input = ref<HTMLTextAreaElement | null>(null);

  const handleUserKeyPress = (e: KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();

      emit("submit", input$.value);
    }
  };

  onMounted(() => {
    $input.value?.focus();
  });

  return rx(
    input$,
    render((input) => {
      return (
        <FormContainer
          onSubmit={(evt) => {
            evt.preventDefault();
            emit("submit", input$.value);
          }}
        >
          <textarea
            ref={$input}
            name={"value"}
            rows="10"
            value={input}
            onInput={(e) => {
              input$.next((e.target as HTMLTextAreaElement).value);
            }}
            onKeypress={handleUserKeyPress}
          />
          <FormControls>
            <IconButton
              type="button"
              onClick={() => {
                emit("submit", props.value);
              }}
            >
              <Icon path={mdiCancel} />
            </IconButton>
            <IconButton type="submit">
              <Icon path={mdiCheck} />
            </IconButton>
          </FormControls>
        </FormContainer>
      );
    }),
  );
});
