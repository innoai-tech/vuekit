import {
  component,
  component$,
  ImmerBehaviorSubject,
  observableRef,
  rx,
  Schema,
  subscribeOnMountedUntilUnmount,
} from "@innoai-tech/vuekit";
import type { Context, Type } from "@innoai-tech/typedef";
import {
  InputActionSubject,
  InputText,
  InputWrapper,
  ValueContainer,
  ValueInputActions,
} from "../inputs";
import {
  ActionBtn,
  Menu,
  MenuItem,
  PopupStatus,
  PropDescription,
  PropName,
} from "../views";
import { JSONEditorProvider } from "../models";
import { combineLatest, tap } from "rxjs";
import { Popper, styled } from "@innoai-tech/vueuikit";
import { mdiCancel, mdiCheckBold } from "@mdi/js";
import { Icon } from "@innoai-tech/vuematerial";

export const PropValueAddInput = component$<{
  ctx: Context;
  options?: Array<{
    propName: string;
    typedef: Type;
  }>;
  onAdd: (prop: string) => void;
}>((props, { emit, render }) => {
  const inputEl$ = observableRef<HTMLInputElement | null>(null);

  const inputAction$ = InputActionSubject.from(inputEl$);
  const inputText$ = InputText.from(inputEl$);
  const open$ = PopupStatus.from(inputEl$);

  const editor$ = JSONEditorProvider.use();

  const selectFocus$ = ImmerBehaviorSubject.seed({
    index: 0,
  });

  const reset = () => {
    open$.hide();

    inputText$.next("");

    if (inputEl$.value) {
      inputEl$.value.value = "";
      inputEl$.value.blur();
    }

    selectFocus$.next({
      index: 0,
    });
  };

  rx(
    inputText$,
    tap((input) => {
      const raw = input.trim();

      if (raw.startsWith("{") && raw.endsWith("}")) {
        try {
          const v = JSON.parse(raw);
          editor$.update(props.ctx.path, v);
          reset();
        } catch (err) {
          editor$.setError(props.ctx.path, "无效的 JSON 字符串");
        }
      }
    }),
    subscribeOnMountedUntilUnmount(),
  );

  const commit = (prop?: string) => {
    if (props.options) {
      prop ??=
        props.options[selectFocus$.value.index % props.options.length]
          ?.propName;
    } else {
      prop ??= inputText$.value;
    }

    if (prop) {
      emit("add", prop);
      reset();
    } else {
      editor$.setError([...props.ctx.path, Schema.RecordKey], "无效的属性值");
    }
  };

  rx(
    inputAction$,
    tap((action) => {
      switch (action.type) {
        case "SELECT":
          selectFocus$.next((value) => {
            value.index += action.direction;
          });
          break;
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

  const $inputForProp = rx(
    open$,
    render((isOpen) => {
      return (
        <InputWrapper>
          <input
            ref={inputEl$}
            type="text"
            placeholder={"添加属性 (可粘贴 JSON 字符串)"}
            data-options={isOpen}
          />
        </InputWrapper>
      );
    }),
  );

  return rx(
    combineLatest([inputText$, open$, selectFocus$, props.options$]),
    render(([input, open, focus, options]) => {
      if (options) {
        return options.length > 0 ? (
          <ValueContainer sx={{ mx: -4 }}>
            <Menu
              onSelected={(prop) => {
                commit(prop);
              }}
              open$={open$}
              $content={
                <div>
                  {options.map((opt, i) => {
                    if (input) {
                      if (!opt.propName.includes(input)) {
                        return null;
                      }
                    }

                    return (
                      <PropMenuItem
                        data-focus={i === focus.index % options.length}
                        propName={opt.propName}
                        typedef={opt.typedef}
                      />
                    );
                  })}
                </div>
              }
            >
              {$inputForProp}
            </Menu>
          </ValueContainer>
        ) : null;
      }

      return (
        <ValueContainer sx={{ mx: -4 }}>
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
                placeholder={"添加属性 (可粘贴 JSON 字符串)"}
              />
            </InputWrapper>
          </Popper>
        </ValueContainer>
      );
    }),
  );
});

const PropMenuItem = component<{
  propName: string;
  typedef: Type;
}>((props) => {
  return () => {
    return (
      <AddPropMenuItemContainer data-value={props.propName} tabindex={0}>
        <PropName
          optional={!!Schema.schemaProp(props.typedef, Schema.optional)}
        >
          {props.propName}
        </PropName>
        <PropDescription>
          {Schema.metaProp<string>(props.typedef, "title")}
        </PropDescription>
      </AddPropMenuItemContainer>
    );
  };
});

const AddPropMenuItemContainer = styled(MenuItem)({
  [`& ${PropName}`]: {
    textAlign: "left",
  },
});
