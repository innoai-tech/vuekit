import { type Component, component$, render, rx } from "@innoai-tech/vuekit";
import { parse } from "./parse.ts";
import { rehypeVue } from "./rehypeVue.tsx";
import { distinctUntilChanged } from "rxjs";
import { toHast } from "mdast-util-to-hast";

export const Markdown = component$<{
  text: string;
  components?: Record<string, Component<any>>;
}>((props, _) => {
  return rx(
    props.text$,
    distinctUntilChanged(),
    render((text) => {
      const nodes = toHast(parse(text));
      return rehypeVue({ components: props.components ?? {} })(nodes);
    }),
  );
});
