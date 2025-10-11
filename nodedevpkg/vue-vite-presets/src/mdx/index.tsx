// @ts-ignore
import rehypePrism from "@mapbox/rehype-prism";
import mdxRollup from "@mdx-js/rollup";

import { h } from "hastscript";
import { visit } from "unist-util-visit";
import { type PluginOption } from "rolldown-vite";
import { getHash, VirtualCache } from "../helpers";

const reKeyValue = /\b(?<key>[-\w]+)(?:=(?:"([^"]*)"|'([^']*)'|([^"'\s]+)))?/g;

const parseMetadata = (meta: string) => {
  const data: Record<string, string> = {};

  for (const m of meta.matchAll(reKeyValue)) {
    data[m.groups?.["key"] ?? ""] = m[2] || m[3] || m[4] || "";
  }

  return data;
};

export const mdx = (): PluginOption => {
  const vc = new VirtualCache();

  const additionalImports = new Map<string, Record<string, string>>();

  const rehypeRenderCodeBlock = () => {
    return (tree: any, vfile: { path: string }) => {
      const mdxFile = vfile.path;

      visit(tree, { tagName: "pre" }, visitor);

      function visitor(pre: any, pos: any) {
        if (pre.children && pre.children.length > 0) {
          const { tagName, data, properties, children } = pre.children[0];

          if (tagName === "code" && data && data.meta) {
            if (
              properties.className.includes("language-tsx") &&
              data.meta.includes("preview")
            ) {
              const metadata = parseMetadata(data.meta);
              const rawCode = children[0].value;

              const exportName = `CodeBlock${getHash(
                `${metadata["filename"] ?? pos}`,
              )}`;

              const id = vc.store(`${mdxFile}~${exportName}.tsx`, rawCode);

              additionalImports.set(mdxFile, {
                ...(additionalImports.get(mdxFile) ?? {}),
                [id]: exportName,
              });

              tree.children[pos] = h(
                "div",
                {
                  "data-example": "",
                },
                [
                  h(
                    "div",
                    {
                      "data-example-container": "",
                    },
                    h(exportName),
                  ),
                  pre,
                ],
              );
            }
          }
        }
      }
    };
  };

  const origin = mdxRollup({
    include: [/\.mdx?$/],
    jsxRuntime: "automatic",
    jsxImportSource: "@innoai-tech/vuekit",
    rehypePlugins: [rehypeRenderCodeBlock, rehypePrism],
  });

  return {
    name: "vite-plugin/mdx",
    enforce: "pre",

    configureServer(server) {
      vc.bindDevServer(server);
    },

    resolveId(source: string) {
      if (vc.has(source)) {
        return source;
      }
      return null;
    },

    load(id: string) {
      if (vc.has(id)) {
        return vc.get(id);
      }
      return null;
    },

    async transform(code, id) {
      const ret = await (origin["transform"] as any)(code, id);
      if (ret) {
        const codeBlockImports = additionalImports.get(id) ?? {};

        return {
          ...ret,
          code: `
${Object.keys(codeBlockImports)
  .map(
    (importPath) => `
import ${codeBlockImports[importPath]} from ${JSON.stringify(importPath)}`,
  )
  .join(";\n")}
            
import { defineComponent, h } from "vue"              

${ret.code.replace(
  "export default function MDXContent(",
  "function MDXContent(",
)}

export default defineComponent(() => {
  return () => h(MDXContent, {
    components: {
${Object.keys(codeBlockImports)
  .map(
    (importPath) =>
      `${codeBlockImports[importPath]?.toLowerCase()}: ${
        codeBlockImports[importPath]
      }`,
  )
  .join(",\n")}
    }
  })
})
`,
        };
      }
    },
  };
};
