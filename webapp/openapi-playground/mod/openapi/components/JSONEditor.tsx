import { component$, rx, subscribeUntilUnmount } from "@innoai-tech/vuekit";
import type { Field } from "@innoai-tech/vueformdata";
import { styled } from "@innoai-tech/vueuikit";
import { isUndefined } from "es-toolkit/compat";
import {
  JSONEditor,
  JSONEditorView,
  JSONEditorProvider,
} from "@innoai-tech/jsoneditor";
import { skip, tap } from "rxjs";

export const JSONEditorInput = component$<{
  field$: Field<any>;
  readOnly?: boolean;
}>((props, {}) => {
  const editor$ = JSONEditor.of(
    props.field$.typedef,
    !isUndefined(props.field$.input) ? props.field$.input : undefined,
  );

  rx(
    editor$,
    skip(1),
    tap((values) => {
      props.field$.update(values);
    }),
    subscribeUntilUnmount(),
  );

  return () => (
    <JSONInputContainer>
      <JSONEditorProvider value={editor$}>
        <JSONEditorView />
      </JSONEditorProvider>
    </JSONInputContainer>
  );
});

const JSONInputContainer = styled("div")({
  position: "relative",
  width: "100%",
  minHeight: "40em",
  py: 8,
  px: 12,
  overflow: "hidden",
});
