import { type Component } from "@innoai-tech/vuekit";
import { Fragment, jsx, jsxs } from "@innoai-tech/vuekit/jsx-runtime";
import { toJsxRuntime } from "hast-util-to-jsx-runtime";
import type { Nodes } from "hast";

export function rehypeVue({ components }: { components: Record<string, Component<any>> }) {
  return function convert(node: Nodes) {
    return toJsxRuntime(node, {
      Fragment,
      jsx,
      jsxs,
      components,
    });
  };
}
