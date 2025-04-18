import {
  component$,
  type Context,
  observableRef,
  rx,
  Schema,
  subscribeUntilUnmount,
  type Type,
  type VNodeChild,
} from "@innoai-tech/vuekit";
import { Icon } from "@innoai-tech/vuematerial";
import { mdiCancel, mdiCheckBold, mdiMinusBoxOutline } from "@mdi/js";
import { JSONEditorProvider, JSONEditorSlotsProvider } from "../models";
import { Box, Popper } from "@innoai-tech/vueuikit";
import {
  InputActionSubject,
  InputText,
  InputWrapper,
  ValueContainer,
  ValueInputActions,
} from "./ValueInput.tsx";
import { tap } from "rxjs";
import { CopyAsJSONIconBtn } from "../actions";
import {
  ActionBtn,
  Actions,
  Block,
  Line,
  PopupStatus,
  PropName,
  Tooltip,
} from "../views";

export const ArrayInput = component$<{
  ctx: Context;
  value: any[];
  typedef: Type;
}>((props, { render }) => {
  const editor$ = JSONEditorProvider.use();
  const slots = JSONEditorSlotsProvider.use();

  return rx(
    props.value$,
    render((value) => {
      return (
        <Block
          openToken={"["}
          closeToken={"]"}
          $leading={
            <Actions>
              <CopyAsJSONIconBtn value={value} />
            </Actions>
          }
          $trailing={
            <AddItemIconBtn
              ctx={props.ctx}
              typedef={props.typedef}
              onAdd={(value) => {
                editor$.update(
                  props.ctx.path,
                  (values: any) => {
                    values.push(value);
                  },
                  [],
                );
              }}
            />
          }
        >
          {[...props.typedef.entries(value, props.ctx)].map(
            ([idx, itemValue, propSchema]) => {
              const path = [...props.ctx.path, idx] as any[];

              return (
                <Line path={path} dirty={editor$.isDirty(itemValue, path)}>
                  <PropName
                    $leading={
                      <RemoteItemIconBtn
                        onRemove={() => {
                          editor$.delete(path);
                        }}
                      />
                    }
                  >
                    <Box sx={{ opacity: 0.3, mr: "0.5em" }}>{String(idx)}</Box>
                  </PropName>
                  {slots.$value?.(propSchema, itemValue, {
                    ...props.ctx,
                    path: path,
                    branch: [...props.ctx.branch, itemValue],
                  })}
                </Line>
              );
            },
          )}
        </Block>
      );
    }),
  );
});

const AddItemIconBtn = component$<{
  ctx: Context;
  typedef: Type;
  onAdd?: (value?: any) => void;
  $default?: VNodeChild;
}>((props, { emit, render }) => {
  const inputEl$ = observableRef<HTMLInputElement | null>(null);
  const inputText$ = InputText.from(inputEl$);
  const inputAction$ = InputActionSubject.from(inputEl$);
  const open$ = PopupStatus.from(inputEl$);

  const editor$ = JSONEditorProvider.use();

  const reset = () => {
    if (inputEl$.value) {
      inputEl$.value.value = "";
      inputEl$.value.blur();
    }
  };

  const commit = (inputValue?: any) => {
    inputValue ??= inputText$.value;

    if (inputValue) {
      const items = Schema.schemaProp(props.typedef, "items") as Type;

      const [err, value] = items.validate(inputValue, { coerce: true });
      if (!!err) {
        editor$.setError(props.ctx.path, err);
        return;
      }
      emit("add", value);
    } else {
      emit("add", undefined);
    }
    reset();
  };

  rx(
    inputText$,
    tap((input) => {
      const raw = input.trim();

      if (raw.startsWith("[") && raw.endsWith("]")) {
        try {
          const v = JSON.parse(raw);
          editor$.update(props.ctx.path, v);
          reset();
        } catch (err) {
          editor$.setError(props.ctx.path, "无效的 JSON 字符串");
        }
      }

      if (raw.startsWith("{") && raw.endsWith("}")) {
        try {
          commit(JSON.parse(raw));
        } catch (err) {
          editor$.setError(props.ctx.path, "无效的 JSON 字符串");
        }
      }
    }),
    subscribeUntilUnmount(),
  );

  rx(
    inputAction$,
    tap((action) => {
      switch (action.type) {
        case "COMMIT":
          commit();
          break;
        case "CANCEL":
          reset();
          break;
      }
    }),
    subscribeUntilUnmount(),
  );

  const $input = rx(
    open$,
    render((open) => {
      return (
        <Popper
          isOpen={open}
          placement={"right-start"}
          $content={
            <ValueInputActions>
              <ActionBtn
                type={"button"}
                onClick={() => inputAction$.next({ type: "CANCEL" })}
              >
                <Icon path={mdiCancel} />
              </ActionBtn>
              <ActionBtn
                type={"button"}
                onClick={() => inputAction$.next({ type: "COMMIT" })}
              >
                <Icon path={mdiCheckBold} />
              </ActionBtn>
            </ValueInputActions>
          }
        >
          <InputWrapper>
            <input
              ref={inputEl$}
              type="text"
              placeholder={"添加数组项 (可粘贴 JSON 字符串)"}
            />
          </InputWrapper>
        </Popper>
      );
    }),
  );

  return () => (
    <Line path={props.ctx.path}>
      <ValueContainer sx={{ mx: -4 }}>{$input}</ValueContainer>
    </Line>
  );
});

const RemoteItemIconBtn = component$<{
  $default?: VNodeChild;
  onRemove?: () => void;
}>(({}, { emit }) => {
  return () => (
    <Tooltip $title={"移除项"}>
      <ActionBtn type={"button"} onClick={() => emit("remove")}>
        <Icon path={mdiMinusBoxOutline} />
      </ActionBtn>
    </Tooltip>
  );
});
