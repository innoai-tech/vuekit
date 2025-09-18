import {
  component$,
  type Context,
  JSONPointer,
  rx,
  Schema,
  type Type,
} from "@innoai-tech/vuekit";
import {
  DirtyType,
  Folded,
  JSONEditorProvider,
  JSONEditorSlotsProvider,
} from "./models";
import {
  isArray,
  isPlainObject,
  isString,
  isUndefined,
  last,
} from "@innoai-tech/lodash";
import { combineLatest } from "rxjs";
import {
  CopyAsJSONIconBtn,
  ItemAddIconBtn,
  ItemRemoveIconBtn,
} from "./actions";
import {
  ActionToolbar,
  LineContainer,
  LineError,
  LineFoldable,
  LineNumber,
  PropDescription,
  PropDoc,
  PropName,
  TokenView,
  Tooltip,
} from "./views";
import { Markdown } from "@innoai-tech/vuemarkdown";
import { Icon } from "@innoai-tech/vuematerial";
import { mdiHelpBox } from "@mdi/js";
import { PropValueAddInput } from "./actions/PropAdd.tsx";
import { Box } from "@innoai-tech/vueuikit";

export const Line = component$<{
  n: number;
  typedef: Type;
  ctx: Context & { readOnly?: boolean };
  value: any;
  previous: any;
  close: boolean;
}>((props, { render }) => {
  const editor$ = JSONEditorProvider.use();
  const slots = JSONEditorSlotsProvider.use();

  const $lineNumber = rx(
    props.n$,
    render((n) => {
      return <LineNumber>{n}</LineNumber>;
    }),
  );

  const dirtyCompare = (value: any, prev: any): DirtyType => {
    if (!(isArray(value) || isPlainObject(value))) {
      if (isUndefined(prev) && !isUndefined(value)) {
        return DirtyType.ADD;
      }
      if (!isUndefined(prev) && isUndefined(value)) {
        return DirtyType.DELETE;
      }
      if (!isUndefined(prev) && !isUndefined(value) && value !== prev) {
        return DirtyType.EDIT;
      }
    }
    return DirtyType.NONE;
  };

  const pointer = JSONPointer.create(props.ctx.path);

  return rx(
    combineLatest([
      props.close$,
      props.value$,
      editor$.errorAt$(pointer),
      editor$.foldedPrefix$(pointer),
    ]),
    render(([close, value, error, folded]) => {
      const hasError = !!error;
      const isJSONArray = isArray(value) || props.typedef.type == "array";
      const isJSONObject = !isJSONArray && isPlainObject(value);

      if (close) {
        if (folded) {
          return null;
        }

        return (
          <>
            <LineContainer
              data-error={hasError}
              $leading={$lineNumber}
              indent={props.ctx.path.length}
            >
              {(() => {
                if (isJSONArray) {
                  return (
                    <>
                      <TokenView>{`]`}&nbsp;&nbsp;</TokenView>
                      {!props.ctx.readOnly && (
                        <ItemAddIconBtn
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
                      )}
                    </>
                  );
                }
                if (isJSONObject) {
                  return (
                    <>
                      <TokenView>{`}`}&nbsp;&nbsp;</TokenView>
                      {!props.ctx.readOnly && (
                        <PropValueAddInput
                          ctx={props.ctx}
                          onAdd={(prop) => {
                            editor$.update(
                              [...props.ctx.path, prop],
                              undefined,
                            );
                          }}
                          options={
                            props.typedef.type != "record"
                              ? [...props.typedef.entries(value, props.ctx)]
                                  .filter(([propName]) => {
                                    return !Object.hasOwn(value, propName);
                                  })
                                  .map(([propName, _propValue, propSchema]) => {
                                    return {
                                      propName: String(propName),
                                      typedef: propSchema,
                                    };
                                  })
                              : undefined
                          }
                        />
                      )}
                    </>
                  );
                }
                return null;
              })()}
            </LineContainer>
          </>
        );
      }

      if (folded == Folded.PREFIX) {
        return null;
      }

      const renderPropOrIndex = () => {
        const nameOrIndex = last(props.ctx.path);

        return (
          <>
            {!isUndefined(nameOrIndex) ? (
              <PropName
                deprecated={Schema.schemaProp(props.typedef, "deprecated")}
                $leading={
                  props.ctx.readOnly ? null : (
                    <ItemRemoveIconBtn
                      onRemove={() => {
                        editor$.delete(props.ctx.path);
                      }}
                    />
                  )
                }
              >
                <Box
                  sx={
                    isString(nameOrIndex)
                      ? { opacity: 1 }
                      : { opacity: 0.3, font: "code" }
                  }
                >
                  {`${nameOrIndex}`}
                </Box>
              </PropName>
            ) : null}
            {isString(nameOrIndex) ? (
              <TokenView>{`: `}</TokenView>
            ) : props.ctx.path.length > 0 ? (
              <TokenView>&nbsp;&nbsp;</TokenView>
            ) : null}
          </>
        );
      };

      const renderComment = () => {
        const title = Schema.metaProp(props.typedef, "title");
        const description = Schema.metaProp(props.typedef, "description");

        return (
          <>
            {(title || description) && (
              <PropDoc>
                {description ? (
                  <Tooltip
                    $title={
                      <PropDescription>
                        <Markdown text={description} />
                      </PropDescription>
                    }
                    placement={"top"}
                  >
                    <div>
                      {title} <Icon path={mdiHelpBox} />
                    </div>
                  </Tooltip>
                ) : (
                  <span>{title}</span>
                )}
              </PropDoc>
            )}
            {hasError && <LineError>{`${error}`}</LineError>}
          </>
        );
      };

      const renderLine = () => {
        if (folded) {
          if (folded == Folded.EXACT) {
            if (isJSONArray) {
              return (
                <>
                  {renderPropOrIndex()}
                  <TokenView>{`[...]`}</TokenView>
                </>
              );
            }

            if (isJSONObject) {
              return (
                <>
                  {renderPropOrIndex()}
                  <TokenView>{`{...}`}</TokenView>
                </>
              );
            }
          }

          return null;
        }

        return (
          <>
            {renderPropOrIndex()}
            {(() => {
              if (isJSONArray) {
                return (
                  <>
                    <TokenView>{`[`}</TokenView>
                    <ActionToolbar>
                      <CopyAsJSONIconBtn value={value} />
                    </ActionToolbar>
                  </>
                );
              }
              if (isJSONObject) {
                return (
                  <>
                    <TokenView>{`{`}</TokenView>
                    <ActionToolbar>
                      <CopyAsJSONIconBtn value={value} />
                    </ActionToolbar>
                  </>
                );
              }
              return slots.$value?.(props.typedef, value, props.ctx);
            })()}
          </>
        );
      };

      return (
        <LineContainer
          indent={props.ctx.path.length}
          data-dirty={dirtyCompare(value, props.previous)}
          data-error={hasError}
          $leading={
            <>
              {$lineNumber}
              {isJSONArray || isJSONObject ? (
                <LineFoldable
                  folded={folded !== Folded.NONE}
                  onClick={() => {
                    editor$.toggleFold(pointer);
                  }}
                />
              ) : null}
            </>
          }
          $comment={renderComment()}
        >
          {renderLine()}
        </LineContainer>
      );
    }),
  );
});
