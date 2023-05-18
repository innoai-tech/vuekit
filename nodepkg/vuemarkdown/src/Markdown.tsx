import { rx, t, component$, type Component, type VNode } from "@innoai-tech/vuekit";
import { combineLatest, from, switchMap, map } from "rxjs";
import { unified, remarkRehype, remarkParse, rehypeVue } from "./unified";

export const Markdown = component$(
  {
    text: t.string(),
    components: t
      .record(t.string(), t.custom<Component<any>>())
      .optional()
      .default({}),
  },
  (props, { render }) => {
    const processor$ = props.components$.pipe(
      map((components) =>
        unified()
          .use(remarkParse)
          .use(remarkRehype)
          .use(rehypeVue, { components: components })
      )
    );

    return rx(
      combineLatest([processor$, props.text$]),
      switchMap(([processor, text]) => from(processor.process(text))),
      render((vfile: any) => vfile.result as VNode)
    );
  }
);
