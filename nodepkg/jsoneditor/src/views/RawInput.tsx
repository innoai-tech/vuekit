import {
  type AnyType,
  component$,
  type Context,
  ImmerBehaviorSubject,
  rx
} from "@innoai-tech/vuekit";
import { ValueView } from "./TokenView.tsx";
import { Popover, PopupStatus } from "./Menu.tsx";
import { isUndefined, set } from "@innoai-tech/lodash";
import { JSONEditorProvider } from "../models";
import { Icon, IconButton } from "@innoai-tech/vuematerial";
import { mdiCancel, mdiCheck } from "@mdi/js";
import { onMounted, ref } from "vue";
import { FormContainer, FormControls } from "./Form.tsx";
import { styled } from "@innoai-tech/vueuikit";

export const RawInput = component$<{
  ctx: Context;
  value: any;
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

const TextareaForm = component$<{
  value?: string;
  onSubmit: (value?: string) => void;
}>((props, { emit, render }) => {
  const $input = ref<HTMLTextAreaElement | null>(null);

  const input$ = new ImmerBehaviorSubject(!isUndefined(props.value) ? JSON.stringify(props.value) : "");
  const error$ = new ImmerBehaviorSubject("");

  const submit = () => {
    if (input$.value) {
      try {
        emit("submit", JSON.parse(input$.value));
      } catch (e) {
        error$.next("无效的 json value");
      }
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

  const $err = rx(
    error$,
    render((e) => e ? (
      <Error>{e}</Error>
    ) : null)
  );

  return rx(
    input$,
    render((input) => {
      return (
        <FormContainer
          onSubmit={(evt) => {
            evt.preventDefault();

            submit();
          }}
        >
          <textarea
            ref={$input}
            name={"value"}
            rows="10"
            value={!isUndefined(input) ? input : ""}
            onInput={(e) => {
              input$.next((e.target as HTMLTextAreaElement).value);
            }}
            onKeypress={handleUserKeyPress}
          />
          {$err}
          <Info>
            请输入合法的 json value，string 需要包含引号
          </Info>
          <FormControls>
            <IconButton
              type="button"
              onClick={(e) => {
                e.preventDefault();

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
    })
  );
});


const Info = styled("small")({
  px: 16
});

const Error = styled(Info)({
  color: "sys.error"
});