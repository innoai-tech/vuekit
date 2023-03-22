import { type Plugin, createFilter } from "vite";
import { createHash } from "crypto";

export interface VueJsxHmrOptions {
  include?: string[];
  exclude?: string[];
}

const getHash = (text: string) => {
  return createHash("sha256").update(text).digest("hex").substring(0, 8);
};

export const vueJsxHmr = (options: VueJsxHmrOptions = {}): Plugin => {
  const filter = createFilter(options.include || /\.[jt]sx$/, options.exclude);

  return {
    name: "vite-plugin/jsx-hmr",
    apply: "serve",

    async transform(code, id) {
      const [filepath] = id.split("?");

      if (filter(id) || filter(filepath)) {
        if (id.endsWith(".tsx") || filepath?.endsWith(".tsx")) {
          interface HotComponent {
            local: string;
            exported: string;
            id: string;
          }

          const hotComponents: HotComponent[] = [];

          const exportMatches = code.matchAll(
            /export const (\w+) = (component|styled)\$?/g
          );

          for (const m of exportMatches) {
            const ident = m[1]!;
            hotComponents.push({
              local: ident,
              exported: ident,
              id: getHash(`${id}#${ident}`),
            });
          }

          const exportDefault = code.match(
            /export default (component|styled)\$?/
          );

          if (exportDefault) {
            code = code.replace("export default ", `const __default__ = `);

            code += `
export default __default__
`;

            hotComponents.push({
              local: "__default__",
              exported: "default",
              id: getHash(`${id}#default`),
            });
          }

          let callbackParams = ``;
          let callbackBlock = ``;

          for (const { local, exported, id } of hotComponents) {
            code += `
${local}.name = ${local}.name ?? "${local}"
            
${local}.__hmrId = "${id}"
__VUE_HMR_RUNTIME__.createRecord("${id}", ${local})
`;

            callbackParams += `${exported}: __${exported},`;

            callbackBlock += `
__VUE_HMR_RUNTIME__.reload("${id}", __${exported})
`;
          }

          code += `
import.meta.hot.accept(({${callbackParams}}) => {
${callbackBlock}
})
`;

          return code;
        }
      }

      return null;
    },
  };
};
