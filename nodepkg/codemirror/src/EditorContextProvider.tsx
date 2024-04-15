import { combineLatest, map, merge, of, switchMap } from "rxjs";
import { EditorState, type Extension } from "@codemirror/state";
import { lintGutter, lintKeymap } from "@codemirror/lint";
import {
  EditorView,
  highlightActiveLine,
  highlightActiveLineGutter,
  highlightSpecialChars,
  keymap,
  lineNumbers,
} from "@codemirror/view";
import { bracketMatching, foldGutter, foldKeymap } from "@codemirror/language";
import { closeBrackets, closeBracketsKeymap } from "@codemirror/autocomplete";
import { defaultKeymap, history, historyKeymap } from "@codemirror/commands";
import {
  createProvider,
  tapEffect,
  observableRef,
  rx,
  subscribeUntilUnmount,
} from "@innoai-tech/vuekit";

export const createEditorContext = (initialValue?: string) => {
  const base = (): Extension[] => [
    lintGutter(),
    keymap.of(lintKeymap),

    lineNumbers(),

    // fold
    foldGutter({
      openText: String.fromCharCode(0x25be),
      closedText: String.fromCharCode(0x25b8),
    }),

    keymap.of(foldKeymap),

    // bracket
    bracketMatching(),
    closeBrackets(),
    keymap.of(closeBracketsKeymap),

    // highlight
    highlightActiveLineGutter(),
    highlightActiveLine(),
    highlightSpecialChars(),

    history(),
    keymap.of(historyKeymap),
    keymap.of(defaultKeymap),
  ];

  const extension$ = observableRef<Array<() => Extension>>([]);
  const initialValue$ = observableRef(initialValue || "");
  const dom$ = observableRef<HTMLDivElement | null>(null);
  const view$ = observableRef<EditorView | null>(null);

  const state$ = combineLatest([initialValue$, extension$]).pipe(
    map(([doc, extensions]) =>
      EditorState.create({
        doc,
        extensions: [...extensions, base].map((e) => e()),
      }),
    ),
  );

  return {
    initial$: initialValue$,
    state$,
    dom$,
    view$,
    use: (createExtension: () => Extension) => {
      extension$.next([...extension$.value, createExtension]);

      return () => {
        extension$.next(extension$.value.filter((b) => b !== createExtension));
      };
    },
    serve: () =>
      merge(
        state$,
        combineLatest([dom$, state$]).pipe(
          switchMap(([container, state]) => {
            if (container == null) {
              return of(null);
            }

            return of(
              new EditorView({
                parent: container,
                state: state,
              }),
            );
          }),
          tapEffect((view) => {
            view$.next(view);
            return () => view?.destroy();
          }),
        ),
      ),
  };
};

export const EditorContextProvider = createProvider(
  () => createEditorContext(),
  {
    name: "EditorContext",
  },
);

export const useExtension = (create: () => Extension | Extension[]) => {
  const ctx = EditorContextProvider.use();

  rx(
    ctx.dom$,
    tapEffect(() => ctx.use(() => create())),
    subscribeUntilUnmount(),
  );
};
