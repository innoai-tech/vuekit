import {
  type AnyType,
  component$,
  rx,
  subscribeUntilUnmount,
  t,
  tapEffect
} from "@innoai-tech/vuekit";
import type { Field } from "@innoai-tech/vueformdata";
import {
  useExtension,
  EditorView,
  startCompletion,
  EditorContainer,
  createEditorContext,
  EditorContextProvider,
  indentWithTab,
  forceLinting,
  diagnosticCount,
  autocompletion
} from "@innoai-tech/codemirror";
import { jsoncue, jsoncueParserOrValidateLinter } from "@innoai-tech/jsoncue/codemirror";
import { Box } from "@innoai-tech/vueuikit";
import { JSONCue } from "@innoai-tech/jsoncue";
import { keymap } from "@codemirror/view";
import type { Extension } from "@codemirror/state";
import { linter } from "@codemirror/lint";
import { jsoncueCompletions } from "@innoai-tech/jsoncue/codemirror";
import { isUndefined } from "@innoai-tech/lodash";

export const JSONCueEditorInput = component$(
  {
    field$: t.custom<Field<string>>(),
    readOnly: t.boolean().optional()
  },
  (props, {}) => {
    const editorContext = createEditorContext(!isUndefined(props.field$.input) ? JSONCue.stringify(props.field$.input) : "");

    return () => (
      <Box
        sx={{
          position: "relative",
          width: "100%",
          minHeight: "8em",
          overflow: "hidden",
          py: 8
        }}
      >
        <EditorContextProvider
          value={editorContext}
        >
          <Editor
            field$={props.field$}
            schema={props.field$.typedef}
          />
        </EditorContextProvider>
      </Box>
    );
  }
);

const Editor = component$(
  {
    field$: t.custom<Field<string>>(),
    schema: t.custom<AnyType>()
  },
  (props) => {
    const ctx = EditorContextProvider.use();

    rx(
      props.schema$,
      tapEffect((schema) => ctx.use(() => createJSONCueExt(schema))),
      subscribeUntilUnmount()
    );

    useExtension(
      () => EditorView.updateListener.of((v) => {
        if (v.focusChanged) {
          forceLinting(v.view);

          props.field$.next((s) => {
            s.error = diagnosticCount(v.state) == 0 ? null : ["配置有误"];
          });

          return;
        }

        if (v.docChanged) {
          forceLinting(v.view);

          if (diagnosticCount(v.state) > 0) {
            props.field$.next((s) => {
              s.error = ["配置有误"];
            });
          } else {
            try {
              const text = v.state.doc.sliceString(0);
              const value = JSONCue.parse<any>(text);

              props.field$.update(value);
              props.field$.next((s) => {
                s.error = null;
              });

            } catch (err) {
              props.field$.next((s) => {
                s.error = ["格式错误"];
              });
            }
          }
        }
      })
    );

    return () => <EditorContainer />;
  }
);

export function createJSONCueExt(tpe: AnyType): Extension[] {
  return [
    jsoncue(),
    autocompletion({
      override: [
        jsoncueCompletions(tpe)
      ]
    }),
    keymap.of([
      {
        key: "Shift-Space",
        shift: startCompletion
      }
    ]),
    linter(jsoncueParserOrValidateLinter(tpe)),
    keymap.of([indentWithTab])
  ];
}
