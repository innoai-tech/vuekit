import {
	type Component,
	type VNode,
	component$,
	rx,
	t,
} from "@innoai-tech/vuekit";
import { combineLatest, from, map, switchMap } from "rxjs";
import { rehypeVue, remarkParse, remarkRehype, unified } from "./unified";

export const Markdown = component$(
	{
		text: t.string(),
		components: t.record(t.string(), t.custom<Component<any>>()).optional(),
	},
	(props, { render }) => {
		const processor$ = props.components$.pipe(
			map((components) =>
				unified()
					.use(remarkParse as any)
					.use(remarkRehype as any)
					.use(rehypeVue, { components: components ?? {} }),
			),
		);

		return rx(
			combineLatest([processor$, props.text$]),
			switchMap(([processor, text]) => from(processor.process(text))),
			render((vfile: any) => vfile.result as VNode),
		);
	},
);
