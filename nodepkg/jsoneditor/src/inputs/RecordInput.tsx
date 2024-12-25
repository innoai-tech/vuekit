import { component$, type Context, rx, type Type } from "@innoai-tech/vuekit";
import { JSONEditorProvider, JSONEditorSlotsProvider } from "../models";
import { PropValueInput, RemovePropIconBtn } from "./ObjectInput.tsx";
import { CopyAsJSONIconBtn } from "../actions";
import { Actions, Block, Line, PropName, Token } from "../views";

export const RecordInput = component$<{
  ctx: Context;
  value: {};
  typedef: Type;
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
            />
          }
        >
          {[...props.typedef.entries((() => {
            const o: any = {};

            for (const key of Object.keys(obj ?? {}).toSorted()) {
              o[key] = (obj as any)?.[key];
            }

            return o;
          })(), props.ctx)].map(
            ([propName, propValue, propSchema]) => {
              if (!Object.hasOwn(obj, propName)) {
                return null;
              }

              const path = [...props.ctx.path, propName];

              return (
                <Line
                  path={path}
                  dirty={editor$.isDirty(propValue, path)}
                >
                  <PropName
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
