import {
  type AnyType,
  component$,
  type Context,
  ImmerBehaviorSubject,
  rx,
  type VNodeChild
} from "@innoai-tech/vuekit";
import { get, set } from "@innoai-tech/lodash";
import { Icon, IconButton } from "@innoai-tech/vuematerial";
import {
  mdiCancel,
  mdiCheck,
  mdiMinusBoxOutline,
  mdiPlusBoxOutline
} from "@mdi/js";
import { Block, Line, PropName, Token } from "./TokenView.tsx";
import { JSONEditorProvider, JSONEditorSlotsProvider } from "../models";
import { Popover, PopupStatus } from "./Menu.tsx";
import { ActionBtn, Actions } from "./Actions.tsx";
import { CopyAsJSONIconBtn, InputFromJSONRawIconBtn } from "./JSONRaw.tsx";
import { onMounted, ref } from "vue";
import { FormContainerAsRow, FormControls } from "./Form.tsx";
import { Tooltip } from "./Tooltip.tsx";

export const RecordInput = component$<{
  ctx: Context;
  value: {};
  typedef: AnyType;
}>((props, { render }) => {
  const editor$ = JSONEditorProvider.use();
  const slots = JSONEditorSlotsProvider.use();

  return rx(
    props.value$,
    render((obj) => {
      return (
        <Block
          openToken={"{"}
          closeToken={"}"}
          $leading={
            <Actions>
              <AddKeyIconBtn
                onAddKey={(propName) => {
                  editor$.next((values: any) => {
                    const p = [...props.ctx.path, propName];
                    set(values, p, get(values, p));
                  });
                }}
              />
              <CopyAsJSONIconBtn value={obj} />
              <InputFromJSONRawIconBtn
                onInput={(updated) => {
                  editor$.next((values: any) => {
                    if (props.ctx.path.length) {
                      set(values, props.ctx.path, updated);
                    } else {
                      Object.assign(values, updated);
                    }
                  });
                }}
              />
            </Actions>
          }
        >
          {[...props.typedef.entries(obj, props.ctx)].map(
            ([propName, propValue, propSchema]) => {
              if (!Object.hasOwn(obj, propName)) {
                return null;
              }

              const path = [...props.ctx.path, propName];

              return (
                <Line dirty={editor$.isDirty(propValue, path)}>
                  <PropName
                    $leading={
                      <RemotePropIconBtn
                        onRemove={() => {
                          editor$.next((values: any) => {
                            let v = values;
                            for (const k of props.ctx.path) {
                              v = v[k];
                            }
                            delete v[propName];
                          });
                        }}
                      />
                    }
                  >
                    {String(propName)}
                  </PropName>
                  <Token>{":"}&nbsp;</Token>
                  {slots.render(propSchema, propValue, {
                    ...props.ctx,
                    path: path,
                    branch: [...props.ctx.branch, propValue]
                  })}
                </Line>
              );
            }
          )}
        </Block>
      );
    })
  );
});

const RemotePropIconBtn = component$<{
  $default?: VNodeChild;
  onRemove?: () => void;
}>(({}, { emit }) => {
  return () => (
    <Tooltip $title={"移除节点"}>
      <ActionBtn onClick={() => emit("remove")}>
        <Icon path={mdiMinusBoxOutline} />
      </ActionBtn>
    </Tooltip>
  );
});

const AddKeyIconBtn = component$<{
  $default?: VNodeChild;
  onAddKey?: (prop: string) => void;
}>(({}, { emit }) => {
  const open$ = new PopupStatus(false);

  return () => (
    <Popover
      open$={open$}
      $content={
        <TextForm
          onSubmit={(v) => {
            if (v) {
              emit("add-key", v);
            }
            open$.hide();
          }}
        />
      }
    >
      <Tooltip $title={"添加 key"}>
        <ActionBtn
          onClick={() => {
            open$.show();
          }}
        >
          <Icon path={mdiPlusBoxOutline} />
        </ActionBtn>
      </Tooltip>
    </Popover>
  );
});

const TextForm = component$<{
  value?: string;
  onSubmit: (value?: string) => void;
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
            type="text"
            name="value"
            onInput={(evt) => {
              try {
                input$.next((evt.target as HTMLInputElement).value?.trim());
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
