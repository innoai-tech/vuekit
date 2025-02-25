import {
  component,
  component$,
  type Context,
  createProvider,
  ImmerBehaviorSubject,
  JSONPointer,
  observableRef,
  rx,
  Schema,
  subscribeUntilUnmount,
  tapEffect,
  type Type
} from "@innoai-tech/vuekit";
import { JSONEditorProvider } from "../models";
import {
  BehaviorSubject,
  combineLatest,
  delay,
  EMPTY,
  fromEvent,
  merge,
  Observable,
  Subject,
  switchMap,
  tap
} from "rxjs";
import { alpha, Popper, styled, variant } from "@innoai-tech/vueuikit";
import { Icon } from "@innoai-tech/vuematerial";
import { mdiCancel, mdiCheckBold } from "@mdi/js";
import { isUndefined } from "@innoai-tech/lodash";
import { ActionBtn, Description, Menu, MenuItem, PopupStatus, PropName } from "../views";

export class InputText extends BehaviorSubject<string> {
  static from<T extends HTMLElement>(inputEl$: Observable<T | null>) {
    const input$ = new InputText("");

    rx(
      inputEl$,
      switchMap((inputEl) => {
        if (!inputEl) {
          return EMPTY;
        }

        return rx(
          fromEvent<InputEvent>(inputEl, "input"),
          tap((e) => {
            input$.next((e.target as HTMLInputElement).value.trim());
          })
        );
      }),
      subscribeUntilUnmount()
    );

    return input$;
  }
}

export type InputAction =
  | {
  type: "COMMIT";
}
  | {
  type: "CANCEL";
}
  | {
  type: "SELECT";
  direction: number;
};

export class InputActionSubject extends Subject<InputAction> {
  static from<T extends HTMLElement>(inputEl$: Observable<T | null>) {
    const inputAction$ = new InputActionSubject();

    rx(
      inputEl$,
      switchMap((inputEl) => {
        if (!inputEl) {
          return EMPTY;
        }

        return merge(
          rx(
            fromEvent<KeyboardEvent>(inputEl, "keypress"),
            tap((e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                inputAction$.next({ type: "COMMIT" });
              }
            })
          ),
          rx(
            fromEvent<KeyboardEvent>(inputEl, "keydown"),
            tap((e) => {
              switch (e.key) {
                case "Tab":
                  if ((e.target as HTMLElement).getAttribute("data-options")) {
                    e.preventDefault();
                    inputAction$.next({ type: "SELECT", direction: 1 });
                  }
                  break;
                case "ArrowDown":
                  if ((e.target as HTMLElement).getAttribute("data-options")) {
                    e.preventDefault();
                    inputAction$.next({ type: "SELECT", direction: 1 });
                  }
                  break;
                case "ArrowUp":
                  if ((e.target as HTMLElement).getAttribute("data-options")) {
                    e.preventDefault();
                    inputAction$.next({ type: "SELECT", direction: -1 });
                  }
                  break;
              }
            })
          ),
          rx(
            fromEvent<KeyboardEvent>(inputEl, "keyup"),
            tap((e) => {
              if (e.key === "Escape") {
                inputAction$.next({ type: "CANCEL" });
              }
            })
          )
        );
      }),
      subscribeUntilUnmount()
    );

    return inputAction$;
  }
}

class OneEditing extends Observable<string | null> {
  static sync(
    oneEditing$: OneEditing,
    opt: {
      value$: Observable<any>;
      editing$: PopupStatus;
      path: () => Array<any>;
    }
  ) {
    return rx(
      merge(
        rx(
          oneEditing$,
          tap((p) => {
            if (p && p == JSONPointer.create(opt.path())) {
              opt.editing$.show();
            }
          })
        ),

        rx(
          opt.editing$,
          delay(1),
          tap((editing) => {
            if (!editing) {
              oneEditing$.disable(opt.path());
            }
          })
        ),

        rx(
          combineLatest([opt.value$, oneEditing$]),
          delay(1),
          tap(([value, anyEditing]) => {
            if (isUndefined(value) && !anyEditing) {
              oneEditing$.enable(opt.path());
            }
          })
        )
      ),
      subscribeUntilUnmount()
    );
  }

  #editing = new BehaviorSubject<string | null>(null);

  constructor() {
    super((subscriber) => {
      const sub = this.#editing.subscribe(subscriber);

      return () => sub.unsubscribe();
    });
  }

  enable(path: Array<any>) {
    if (!this.#editing.value) {
      this.#editing.next(JSONPointer.create(path));
    }
  }

  disable(path: Array<any>) {
    if (this.#editing.value === JSONPointer.create(path)) {
      this.#editing.next(null);
    }
  }
}

export const OneEditingProvider = createProvider(() => new OneEditing());

export const ValueInput = component$<{
  typedef: Type;
  ctx: Context;
  value: string | boolean | number | null | undefined;
  allowRawJSON?: boolean;
}>((props, { render }) => {
  const actionsEl$ = observableRef<HTMLDivElement | null>(null);
  const containerEl$ = observableRef<HTMLDivElement | null>(null);
  const inputEl$ = observableRef<HTMLTextAreaElement | null>(null);
  const inputAction$ = InputActionSubject.from(inputEl$);
  const inputText$ = InputText.from(inputEl$);

  const oneEditing$ = OneEditingProvider.use();
  const editing$ = PopupStatus.from(inputEl$);
  const editor$ = JSONEditorProvider.use();

  OneEditing.sync(oneEditing$, {
    editing$,
    value$: props.value$,
    path: () => props.ctx.path
  });

  const selectedIndex = () => {
    if (props.typedef.type === "enums") {
      const enumValues = Schema.schemaProp<any[]>(props.typedef, "enum") ?? [];
      const i = enumValues.indexOf(props.value);

      if (i > -1) {
        return i;
      }
    }

    return 0;
  };

  const selectFocus$ = new ImmerBehaviorSubject({
    index: selectedIndex()
  });

  const reset = () => {
    inputText$.next("");
    editing$.hide();
  };

  const cancel = () => {
    reset();

    selectFocus$.next({ index: selectedIndex() });

    if (isUndefined(props.value)) {
      editor$.delete(props.ctx.path);
    }
  };

  const commit = (value?: any) => {
    if (props.typedef.type === "enums") {
      const enumValues = Schema.schemaProp<any[]>(props.typedef, "enum") ?? [];
      value ??= enumValues[selectFocus$.value.index % enumValues.length];
    } else {
      value ??= inputEl$.value?.value ? inputEl$.value?.value : undefined;
    }

    if (isUndefined(value)) {
      editor$.delete(props.ctx.path);
      return;
    }

    const [err, v] = props.typedef.validate(value, { coerce: true });

    if (!!err) {
      editor$.setError(props.ctx.path, err.message);
      return;
    }

    editor$.update(props.ctx.path, v);

    reset();
  };

  if (props.allowRawJSON) {
    rx(
      inputText$,
      tap((input) => {
        const raw = input.trim();

        if (
          (raw.startsWith("{") && raw.endsWith("}")) ||
          (raw.startsWith("[") && raw.endsWith("]"))
        ) {
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
  }

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
          cancel();
          break;
      }
    }),
    subscribeUntilUnmount()
  );

  let containerHeight: number | undefined;

  rx(
    merge(
      rx(
        containerEl$,
        tapEffect((containerEl) => {
          if (containerEl) {
            const resizeObserver = new ResizeObserver((entries) => {
              for (const entry of entries) {
                if (entry.contentBoxSize) {
                  containerHeight = entry.contentBoxSize[0]?.blockSize;
                }
              }
            });

            resizeObserver.observe(containerEl);

            return () => {
              resizeObserver.disconnect();
            };
          }

          return () => {
          };
        })
      ),

      rx(
        inputEl$,
        delay(1),
        tap((inputEl) => {
          if (inputEl) {
            inputEl?.focus();

            if (inputEl.value) {
              inputEl.selectionStart = 0;
              inputEl.selectionEnd = inputEl.value.length;
            }
          }
        })
      ),

      rx(
        inputEl$,
        switchMap((inputEl) => {
          if (inputEl) {
            const initialHeight = containerHeight ? (containerHeight - 2) : inputEl.getBoundingClientRect().height;

            const updateHeight = (inputEl: HTMLTextAreaElement) => {
              inputEl.style.height = `${initialHeight ?? 0}px`;
              inputEl.style.height = `${inputEl.scrollHeight}px`;
            };

            setTimeout(() => updateHeight(inputEl));

            return merge(
              rx(
                fromEvent<FocusEvent>(inputEl, "blur"),
                tap((e) => {
                  if (e.relatedTarget) {
                    if (
                      containerEl$.value?.contains(
                        e.relatedTarget as HTMLElement
                      ) ||
                      actionsEl$.value?.contains(e.relatedTarget as HTMLElement)
                    ) {
                      return;
                    }
                  }

                  e.preventDefault();
                  commit(inputEl.value);
                })
              ),
              rx(
                fromEvent<InputEvent>(inputEl, "input"),
                tap((e) => {
                  updateHeight(e.target as HTMLTextAreaElement);
                  inputText$.next((e.target as HTMLTextAreaElement).value);
                })
              )
            );
          }

          return EMPTY;
        })
      )
    ),
    subscribeUntilUnmount()
  );

  if (props.typedef.type == "enums") {
    return rx(
      combineLatest([props.value$, editing$, selectFocus$]),
      render(([value, editing, { index }]) => {
        const enumValues =
          Schema.schemaProp<any[]>(props.typedef, "enum") ?? [];
        const enumLabels =
          Schema.metaProp<any[]>(props.typedef, "enumLabels") ?? [];

        return (
          <ValueContainer
            ref={containerEl$}
            onClick={() => {
              editing$.show();
            }}
            data-type={typeof value}
            tabindex={0}
          >
            {editing ? (
              <Menu
                onSelected={(value) => {
                  commit(value);
                }}
                open$={editing$}
                $content={
                  <div ref={actionsEl$}>
                    {enumValues.map((value, i) => {
                      return (
                        <EnumMenuItem
                          data-focus={index % enumValues.length === i}
                          value={value}
                          label={enumLabels[i]}
                        />
                      );
                    })}
                  </div>
                }
              >
                <InputWrapper>
                  <input
                    value={value == undefined ? "" : `${value}`}
                    ref={inputEl$}
                    data-options={true}
                  />
                </InputWrapper>
              </Menu>
            ) : (
              <Value>{JSON.stringify(value) ?? "undefined"}</Value>
            )}
          </ValueContainer>
        );
      })
    );
  }

  return rx(
    combineLatest([props.value$, editing$]),
    render(([value, editing]) => {
      return (
        <ValueContainer
          ref={containerEl$}
          onClick={() => {
            editing$.show();
          }}
          data-type={typeof value}
          tabindex={0}
          onFocus={() => {
            editing$.show();
          }}
        >
          {editing ? (
            <Popper
              isOpen={true}
              placement={"right-start"}
              $content={
                <ValueInputActions ref={actionsEl$}>
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
                <textarea
                  ref={inputEl$}
                  rows={1}
                  value={value == undefined ? "" : `${value}`}
                />
              </InputWrapper>
            </Popper>
          ) : (
            <Value>{JSON.stringify(value) ?? "undefined"}</Value>
          )}
        </ValueContainer>
      );
    })
  );
});

export const ValueInputActions = styled("div")({
  borderRight: "1px solid",
  borderTop: "1px solid",
  borderBottom: "1px solid",
  borderColor: variant("sys.outline-variant", alpha(0.38)),
  containerStyle: "sys.surface-container-lowest",
  roundedRight: "sm",
  display: "flex",
  px: 2,
  py: 0,
  ml: -4
});

export const InputWrapper = styled("div")({
  width: "100%",
  maxWidth: "40vw",
  display: "flex",
  alignItems: "center",
  border: "1px solid",
  overflow: "hidden",
  borderColor: variant("sys.outline-variant", alpha(0.38)),
  opacity: 0.38,

  "&:hover": {
    opacity: 1
  },
  "&:focus-within": {
    opacity: 1
  },

  "& > textarea,input": {
    flex: 1,
    rounded: "xs",
    containerStyle: "sys.surface-container-lowest",
    width: "100%",
    outline: "none",
    border: "none",
    px: 8,
    py: 0,
    m: 0,
    fontSize: "inherit",
    color: "inherit",
    lineHeight: "inherit",
    overflow: "hidden",
    resize: "none",

    "&[data-options]:focus": {
      roundedBottom: 0
    }
  }
});

const Value = styled("div")({
  border: "1px solid",
  borderColor: "rgba(0,0,0,0)",
  maxWidth: "40vw",
  width: "100%",
  overflow: "hidden",
  textOverflow: "ellipsis",

  _hover: {
    textOverflow: "clip",
    whiteSpace: "normal",
    wordBreak: "break-all"
  }
});

export const ValueContainer = styled("div")({
  wordBreak: "keep-all",
  whiteSpace: "nowrap",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  font: "code",
  width: "100%",
  textStyle: "sys.label-small",
  fontSize: 12,
  lineHeight: 24,
  gap: 8,

  _type__string: {
    color: "sys.primary"
  },

  _type__number: {
    color: "sys.primary"
  },

  _type__boolean: {
    color: "sys.warning"
  },

  _type__undefined: {
    color: "sys.error"
  }
});

const EnumMenuItemContainer = styled(MenuItem)({
  [`& ${PropName}`]: {
    textAlign: "left"
  }
});

const EnumMenuItem = component<{
  value: string;
  label: string;
}>((props) => {
  return () => {
    return (
      <EnumMenuItemContainer data-value={props.value} tabindex={0}>
        <PropName>{props.value}</PropName>
        {props.label && <Description>{props.label}</Description>}
      </EnumMenuItemContainer>
    );
  };
});
