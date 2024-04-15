import type { Root } from "mdast";
import type { Value } from "vfile";
import { fromMarkdown } from "mdast-util-from-markdown";
import { gfmFromMarkdown } from "mdast-util-gfm";
import { gfm } from "micromark-extension-gfm";
import { directive } from "micromark-extension-directive";
import { directiveFromMarkdown } from "mdast-util-directive";

export const parse = (raw: Value): Root => {
  return fromMarkdown(raw, {
    extensions: [gfm(), directive()],
    mdastExtensions: [gfmFromMarkdown(), directiveFromMarkdown()],
  });
};
