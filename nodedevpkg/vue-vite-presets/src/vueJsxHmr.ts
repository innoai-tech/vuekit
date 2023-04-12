import { type Plugin, createFilter } from "vite";
import { HotExports } from "./helpers";

export interface VueJsxHmrOptions {
  include?: string[];
  exclude?: string[];
}

export const vueJsxHmr = (options: VueJsxHmrOptions = {}): Plugin => {
  const filter = createFilter(
    options.include || [/\.tsx$/, /\.mdx?$/],
    options.exclude
  );

  return {
    name: "vite-plugin/jsx-hmr",
    apply: "serve",

    async transform(code, id) {
      const [filepath] = id.split("?");

      if (filter(id) || filter(filepath)) {
        const hcs = new HotExports(id);

        const exportMatches = code.matchAll(
          /export const (\w+) = (define[A-Z]|component|styled)\$?/g
        );

        for (const m of exportMatches) {
          const ident = m[1]!;
          hcs.add(ident);
        }

        const exportDefault = code.match(
          /export default (define[A-Z]|component|styled)\$?/
        );

        if (exportDefault) {
          code = code.replace("export default ", `const __default__ = `);
          code += `
export default __default__
`;
          hcs.add("default", "__default__");
        }

        return hcs.wrap(code);
      }

      return null;
    }
  };
};
