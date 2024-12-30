import {
  component$,
  type Context,
  EmptyContext,
  rx,
  Schema,
  type Type,
} from "@innoai-tech/vuekit";
import { JSONEditorProvider, JSONEditorSlotsProvider } from "./models";
import { LayoutContextProvider, Line } from "./views";
import { styled } from "@innoai-tech/vueuikit";
import { ref } from "vue";
import { isUndefined } from "@innoai-tech/lodash";
import {
  AnyInput,
  ArrayInput,
  ObjectInput,
  OneEditingProvider,
  RecordInput,
  ValueInput,
} from "./inputs";

export const defaultValueRender = (typedef: Type, value: any, ctx: Context) => {
  if (
    typedef.type == "object" ||
    typedef.type == "intersection" ||
    (typedef.type == "union" && Schema.schemaProp(typedef, "discriminator"))
  ) {
    return <ObjectInput typedef={typedef} value={value ?? {}} ctx={ctx} />;
  }

  if (
    typedef.type == "union" &&
    isUndefined(Schema.schemaProp(typedef, "discriminator"))
  ) {
    return <ValueInput typedef={typedef} value={value} ctx={ctx} />;
  }

  if (typedef.type == "record") {
    return <RecordInput typedef={typedef} value={value} ctx={ctx} />;
  }

  if (typedef.type == "array") {
    return <ArrayInput typedef={typedef} value={value} ctx={ctx} />;
  }

  if (typedef.type == "any" || typedef.type == "unknown") {
    return <AnyInput typedef={typedef} value={value} ctx={ctx} />;
  }

  return <ValueInput typedef={typedef} value={value} ctx={ctx} />;
};

export const JSONEditorView = component$(({}, { render }) => {
  const editor$ = JSONEditorProvider.use();
  const slots = JSONEditorSlotsProvider.use();

  const $container = ref<HTMLDivElement | null>(null);

  return rx(
    editor$,
    render((root: any) => {
      const valueRender = slots.$value ?? defaultValueRender;

      return (
        <OneEditingProvider>
          <JSONEditorSlotsProvider
            value={{
              $value: slots.$value ?? defaultValueRender,
            }}
          >
            <JSONEditorContainer>
              <section ref={$container} />
              {$container.value && (
                <LayoutContextProvider
                  value={{
                    indent: 0,
                    $container: $container,
                  }}
                >
                  <Line path={[]} viewOnly>
                    {valueRender(editor$.typedef, root, EmptyContext)}
                  </Line>
                </LayoutContextProvider>
              )}
            </JSONEditorContainer>
          </JSONEditorSlotsProvider>
        </OneEditingProvider>
      );
    }),
  );
});

const JSONEditorContainer = styled("div")({
  width: "100%",
  height: "100%",
  overflow: "auto",

  section: {
    display: "flex",
    flexDirection: "column",
    minWidth: "max-content",
  },
});
