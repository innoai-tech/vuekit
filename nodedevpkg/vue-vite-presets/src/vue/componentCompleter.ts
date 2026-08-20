import { transform } from "@innoai-tech/bundle-purge";
import { createFilter, type Plugin } from "vite";

export interface ComponentCompleterOptions {
  include?: string[];
  exclude?: string[];
}

export const viteVueComponentCompleter = (options: ComponentCompleterOptions = {}): Plugin => {
  const filter = createFilter(options.include || [/\.tsx$/, /\.mdx?$/], options.exclude);

  return {
    name: "vite-plugin/vue-component-completer",
    enforce: "pre",

    async transform(code, id) {
      const [filepath = ""] = id.split("?");

   

      if (filter(id) || filter(filepath)) {
        // 已 minify 的产物无需补全组件
        if (filepath) {
          if (filepath.includes(".min/") || filepath.includes(".min.")) {
            return null;
          }
        }
        
        const result = await transform(code, {
          filename: filepath,
          completeComponent: true,
          annotatePure: false,
        });

        return (
          result.code && {
            code: result.code,
          }
        );
      }

      return null;
    },
  };
};
