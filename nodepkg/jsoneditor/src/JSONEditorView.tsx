import {
  component$,
  EmptyContext,
  JSONPointer,
  rx,
  type Type,
} from "@innoai-tech/vuekit";
import {
  JSONEditorProvider,
  JSONEditorSlotsProvider,
  type ValueContext,
} from "./models";
import { Line } from "./Line.tsx";
import { styled } from "@innoai-tech/vueuikit";
import { OneEditingProvider, ValueInput } from "./inputs";
import { type VNodeChild } from "vue";
import { flattenValue } from "./util.ts";

export const defaultValueRender = (
  typedef: Type,
  value: any,
  ctx: ValueContext,
) => {
  return <ValueInput typedef={typedef} value={value} ctx={ctx} />;
};

export const JSONEditorView = component$<{ readOnly?: boolean }>(
  (props, { render }) => {
    const editor$ = JSONEditorProvider.use();
    const slots = JSONEditorSlotsProvider.use();

    return rx(
      editor$,
      render((root: any) => {
        return (
          <OneEditingProvider>
            <JSONEditorSlotsProvider
              value={{
                $value: slots.$value ?? defaultValueRender,
              }}
            >
              <JSONEditorContainer>
                <Lines>
                  {[
                    ...flattenValue(
                      root,
                      editor$.initialsAt([]),
                      editor$.typedef,
                      {
                        ...EmptyContext,
                        readOnly: props.readOnly,
                      },
                    ),
                  ].map((x, i) => {
                    const pointer = JSONPointer.create(x.ctx.path);

                    return (
                      <Line
                        key={`${pointer}::${x.close ?? false}`}
                        n={i + 1}
                        ctx={x.ctx}
                        typedef={x.typedef}
                        value={x.value}
                        previous={x.previous}
                        close={x.close ?? false}
                      />
                    );
                  })}
                </Lines>
              </JSONEditorContainer>
            </JSONEditorSlotsProvider>
          </OneEditingProvider>
        );
      }),
    );
  },
);

const JSONEditorContainer = styled("div")({
  w: "100%",
  h: "100%",
  overflow: "auto",
});

const Lines = styled<{ $default: VNodeChild }, "div">(
  "div",
  ({}, { slots }) => {
    return (Wrap) => {
      return <Wrap>{slots.default()}</Wrap>;
    };
  },
)({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  w: "100%",
  maxW: "100%",
  py: 2,
});
