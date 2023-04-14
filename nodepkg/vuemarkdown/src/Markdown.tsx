import { rx, z, component$, type Component } from "@innoai-tech/vuekit";
import { combineLatest, from, switchMap, map } from "rxjs";
import { type VNode } from "vue";
import { unified, remarkRehype, remarkParse, rehypeVue } from "./unified";

export const Markdown = component$(
  {
    text: z.string(),
    components: z.record(z.string(), z.custom<Component<any>>()).optional()
  },
  (props, { render }) => {
    const processor$ = props.components$.pipe(
      map((components) =>
        unified()
          .use(remarkParse)
          .use(remarkRehype)
          .use(rehypeVue, { components: components ?? {} })
      )
    );

    return rx(
      combineLatest([processor$, props.text$]),
      switchMap(([processor, text]) => from(processor.process(text))),
      render((vfile: any) => vfile.result as VNode)
    );
  }
);
