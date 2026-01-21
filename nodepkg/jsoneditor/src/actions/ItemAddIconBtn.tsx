import {
  component$,
  observableRef,
  rx,
  subscribeOnMountedUntilUnmount,
  type VNodeChild,
} from "@innoai-tech/vuekit";
import { type Context, Schema, type Type } from "@innoai-tech/typedef";
import {
  InputActionSubject,
  InputText,
  InputWrapper,
  ValueContainer,
  ValueInputActions,
} from "../inputs";
import { ActionBtn, PopupStatus } from "../views";
import { JSONEditorProvider } from "../models";
import { tap } from "rxjs";
import { Popper } from "@innoai-tech/vueuikit";
import { Icon } from "@innoai-tech/vuematerial";
import { mdiCancel, mdiCheckBold } from "@mdi/js";

export const ItemAddIconBtn = component$<{
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
      if (err) {
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
          // oxlint-disable-next-line no-unused-vars
        } catch (err) {
          editor$.setError(props.ctx.path, "无效的 JSON 字符串");
        }
      }

      if (raw.startsWith("{") && raw.endsWith("}")) {
        try {
          commit(JSON.parse(raw));
          // oxlint-disable-next-line no-unused-vars
        } catch (err) {
          editor$.setError(props.ctx.path, "无效的 JSON 字符串");
        }
      }
    }),
    subscribeOnMountedUntilUnmount(),
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
    subscribeOnMountedUntilUnmount(),
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

  return () => <ValueContainer sx={{ mx: -4 }}>{$input}</ValueContainer>;
});
