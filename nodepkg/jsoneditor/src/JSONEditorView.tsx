import {
  type AnyType,
  component$,
  type Context,
  EmptyContext,
  rx
} from "@innoai-tech/vuekit";
import { JSONEditorProvider, JSONEditorSlotsProvider } from "./models";
import {
  ObjectInput,
  ArrayInput,
  RecordInput,
  EnumInput,
  NumberInput,
  BooleanInput,
  StringInput,
  LayoutContextProvider,
  Line
} from "./views";
import { styled } from "@innoai-tech/vueuikit";
import { ref } from "vue";

export const defaultValueRender = (typedef: AnyType, value: any, ctx: Context) => {
  if (
    typedef.type == "object" ||
    typedef.type == "intersection" ||
    typedef.type == "union"
  ) {
    return <ObjectInput typedef={typedef} value={value ?? {}} ctx={ctx} />;
  }

  if (typedef.type == "record") {
    return <RecordInput typedef={typedef} value={value} ctx={ctx} />;
  }

  if (typedef.type == "array") {
    return <ArrayInput typedef={typedef} value={value} ctx={ctx} />;
  }

  if (typedef.type == "enums") {
    return <EnumInput typedef={typedef} value={value} ctx={ctx} />;
  }

  if (typedef.type == "string") {
    return <StringInput typedef={typedef} value={value} ctx={ctx} />;
  }

  if (typedef.type == "number" || typedef.type == "integer") {
    return <NumberInput typedef={typedef} value={value} ctx={ctx} />;
  }

  if (typedef.type == "boolean") {
    return <BooleanInput typedef={typedef} value={value} ctx={ctx} />;
  }

  return undefined;
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
        <JSONEditorSlotsProvider
          value={{
            $value: slots.$value ?? defaultValueRender
          }}
        >
          <JSONEditorContainer>
            <section ref={$container} />
            {$container.value && (
              <LayoutContextProvider
                value={{
                  indent: 0,
                  $container: $container
                }}
              >
                <Line>{valueRender(editor$.typedef, root, EmptyContext)}</Line>
              </LayoutContextProvider>
            )}
          </JSONEditorContainer>
        </JSONEditorSlotsProvider>
      );
    })
  );
});

const JSONEditorContainer = styled("div")({
  width: "100%",
  height: "100%",
  overflow: "auto",

  section: {
    display: "flex",
    flexDirection: "column",
    minWidth: "max-content"
  }
});
