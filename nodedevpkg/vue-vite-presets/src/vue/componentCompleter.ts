import { createFilter, type Plugin } from "vite";
import { usePlugin } from "@innoai-tech/vuecomponentcompleter";
import { transform } from "@swc/core";

export interface ComponentCompleterOptions {
  include?: string[];
  exclude?: string[];
}

export const viteVueComponentCompleter = (
  options: ComponentCompleterOptions = {},
): Plugin => {
  const filter = createFilter(
    options.include || [/\.tsx$/, /\.mdx?$/],
    options.exclude,
  );

  return {
    name: "vite-plugin/vue-component-completer",
    enforce: "pre",

    async transform(code, id) {
      const [filepath] = id.split("?");

      if (filter(id) || filter(filepath)) {
        const result = await transform(code, {
          filename: id,
          minify: false,
          swcrc: false,
          isModule: true,
          jsc: {
            target: "esnext",
            externalHelpers: false,
            parser: {
              syntax: "typescript",
              tsx: true,
              decorators: true,
            },
            experimental: {
              disableBuiltinTransformsForInternalTesting: true,
              plugins: [usePlugin({})],
            },
          },
        });

        return (
          result.code && {
            code: result.code,
            map: result.map || null,
          }
        );
      }

      return null;
    },
  };
};
