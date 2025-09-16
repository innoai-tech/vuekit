import { component$, type Context, rx, type Type } from "@innoai-tech/vuekit";
import { JSONEditorProvider, JSONEditorSlotsProvider } from "../models";
import { PropValueInput, RemovePropIconBtn } from "./ObjectInput.tsx";
import { CopyAsJSONIconBtn } from "../actions";
import { Actions, Block, Line, PropName, Token } from "../views";
import { isSymbol } from "@innoai-tech/lodash";

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
      const prev = editor$.initialsAt(props.ctx.path);

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
          {[
            ...props.typedef.entries(
              (() => {
                const o: any = {};

                const merged = Object.assign({}, prev ?? {}, obj ?? {});

                for (const key of Object.keys(merged).toSorted()) {
                  o[key] = (obj as any)?.[key];
                }

                return o;
              })(),
              props.ctx,
            ),
          ].map(([propName, propValue, propSchema]) => {
            if (isSymbol(propName)) {
              return null;
            }

            const path = [...props.ctx.path, propName];

            return (
              <Line path={path} dirty={editor$.dirty(propValue, path)}>
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
                {Object.hasOwn(obj, propName)
                  ? slots.$value?.(propSchema, propValue, {
                      ...props.ctx,
                      path: path,
                      branch: [...props.ctx.branch, propValue],
                    })
                  : slots.$value?.(propSchema, (prev ?? {})[propName], {
                      ...props.ctx,
                      path: path,
                      branch: [...props.ctx.branch, (prev ?? {})[propName]],
                      readOnly: true,
                    })}
              </Line>
            );
          })}
        </Block>
      );
    }),
  );
});
