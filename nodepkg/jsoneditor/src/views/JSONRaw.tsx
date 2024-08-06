import { component$, ImmerBehaviorSubject, rx } from "@innoai-tech/vuekit";
import { Icon, IconButton } from "@innoai-tech/vuematerial";
import { ActionBtn } from "./Actions.tsx";
import copyToClipboard from "copy-to-clipboard";
import { mdiCancel, mdiCheck, mdiCodeJson, mdiContentCopy } from "@mdi/js";
import { Popover, PopupStatus } from "./Menu.tsx";
import { onMounted, ref } from "vue";
import { FormContainer, FormControls } from "./Form.tsx";
import { Tooltip } from "./Tooltip.tsx";

export const CopyAsJSONIconBtn = component$<{
  value?: any;
}>((props, {}) => {
  return () => (
    <Tooltip $title={"复制当前节点为 JSON 字符串"}>
      <ActionBtn onClick={() => copyToClipboard(JSON.stringify(props.value, null, 2))}>
        <Icon path={mdiContentCopy} />
      </ActionBtn>
    </Tooltip>
  );
});

export const InputFromJSONRawIconBtn = component$<{
  onInput?: (prop: string) => void;
}>(({}, { emit }) => {
  const open$ = new PopupStatus(false);

  return (
    <Popover
      open$={open$}
      $content={
        <JSONRawForm
          onSubmit={(v) => {
            if (v) {
              emit("input", v);
            }
            open$.hide();
          }}
        />
      }
    >
      <Tooltip $title={"导入 JSON 字符串到当前节点"}>
        <ActionBtn onClick={() => open$.show()}>
          <Icon path={mdiCodeJson} />
        </ActionBtn>
      </Tooltip>
    </Popover>
  );
});

const JSONRawForm = component$<{
  onSubmit: (value?: any) => void;
}>(({}, { emit, render }) => {
  const input$ = new ImmerBehaviorSubject("");
  const $input = ref<HTMLTextAreaElement | null>(null);

  const cancel = () => {
    emit("submit", undefined);
  };

  const submit = () => {
    try {
      emit("submit", JSON.parse(input$.value!));
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
                cancel();
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
