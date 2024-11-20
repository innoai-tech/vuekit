import {
  component,
  component$,
  type Context,
  ImmerBehaviorSubject,
  observableRef,
  rx,
  Schema,
  subscribeUntilUnmount,
  type Type,
  type VNodeChild
} from "@innoai-tech/vuekit";
import { Popper, styled } from "@innoai-tech/vueuikit";
import { Icon } from "@innoai-tech/vuematerial";
import { mdiCancel, mdiCheckBold, mdiMinusBoxOutline } from "@mdi/js";
import {
  ActionBtn,
  Actions,
  Block,
  Description,
  Line,
  Menu,
  MenuItem,
  PopupStatus,
  PropName,
  Token,
  Tooltip
} from "../views";
import { JSONEditorProvider, JSONEditorSlotsProvider } from "../models";
import { CopyAsJSONIconBtn } from "../actions";
import { InputActionSubject, InputText, ValueContainer, ValueInputActions } from "./ValueInput.tsx";
import { combineLatest, tap } from "rxjs";

export const RemovePropIconBtn = component$<{
  $default?: VNodeChild;
  onRemove?: () => void;
}>(({}, { emit }) => {
  return () => (
    <Tooltip $title={"删除属性"}>
      <ActionBtn type={"button"} onClick={() => emit("remove")}>
        <Icon path={mdiMinusBoxOutline} />
      </ActionBtn>
    </Tooltip>
  );
});

export const ObjectInput = component$<{
  typedef: Type;
  ctx: Context;
  value: {};
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
              <CopyAsJSONIconBtn value={obj} />
            </Actions>
          }
          $trailing={
            <PropValueInput
              key={"prop-input"}
              ctx={props.ctx}
              onAdd={(prop) => {
                editor$.update([...props.ctx.path, prop], undefined);
              }}
              options={[...props.typedef.entries(obj, props.ctx)]
                .filter(([propName]) => {
                  return !Object.hasOwn(obj, propName);
                })
                .map(([propName, _propValue, propSchema]) => {
                  return {
                    propName: String(propName),
                    typedef: propSchema
                  };
                })}
            />
          }
        >
          {[...props.typedef.entries(obj, props.ctx)].map(
            ([propName, propValue, propSchema]) => {
              if (!Object.hasOwn(obj, propName)) {
                return null;
              }

              const path = [...props.ctx.path, propName];

              return (
                <Line
                  path={path}
                  dirty={editor$.isDirty(propValue, path)}
                  title={Schema.metaProp(propSchema, "title")}
                  description={Schema.metaProp(propSchema, "description")}
                >
                  <PropName
                    deprecated={Schema.schemaProp(propSchema, "deprecated")}
                    $leading={
                      <RemovePropIconBtn
                        onRemove={() => {
                          editor$.delete(path);
                        }}
                      />
                    }
                  >
                    {String(propName)}
                  </PropName>
                  <Token>{":"}&nbsp;</Token>
                  {slots.$value?.(propSchema, propValue, {
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

export const PropValueInput = component$<{
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

  const selectFocus$ = new ImmerBehaviorSubject({
    index: 0
  });

  const reset = () => {
    open$.hide();

    inputText$.next("");

    if (inputEl$.value) {
      inputEl$.value.value = "";
      inputEl$.value.blur();
    }

    selectFocus$.next({
      index: 0
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
    subscribeUntilUnmount()
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
    subscribeUntilUnmount()
  );

  const $inputForProp = rx(
    open$,
    render((isOpen) => {
      return (
        <div data-input-wrapper>
          <input
            ref={inputEl$}
            type="text"
            placeholder={"添加属性 (可粘贴 JSON 字符串)"}
            data-options={isOpen}
          />
        </div>
      );
    })
  );

  return rx(
    combineLatest([inputText$, open$, selectFocus$, props.options$]),
    render(([input, open, focus, options]) => {
      if (options) {
        return options.length > 0 ? (
          <Line path={props.ctx.path}>
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
                          propName={opt.propName}
                          typedef={opt.typedef}
                          data-focus={i === focus.index % options.length}
                        />
                      );
                    })}
                  </div>
                }
              >
                {$inputForProp}
              </Menu>
            </ValueContainer>
          </Line>
        ) : null;
      }

      return (
        <Line path={[...props.ctx.path, Schema.RecordKey]}>
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
              <div data-input-wrapper>
                <input
                  ref={inputEl$}
                  type="text"
                  placeholder={"添加属性 (可粘贴 JSON 字符串)"}
                />
              </div>
            </Popper>
          </ValueContainer>
        </Line>
      );
    })
  );
});

const PropMenuItem = component<{
  propName: string;
  typedef: Type;
}>((props) => {
  return () => {
    return (
      <AddPropMenuItemContainer data-value={props.propName} tabindex={0}>
        <PropName optional={Schema.schemaProp(props.typedef, Schema.optional)}>
          {props.propName}
        </PropName>
        <Description>
          {Schema.metaProp<string>(props.typedef, "title")}
        </Description>
      </AddPropMenuItemContainer>
    );
  };
});

const AddPropMenuItemContainer = styled(MenuItem)({
  [`& ${PropName}`]: {
    textAlign: "left"
  }
});
