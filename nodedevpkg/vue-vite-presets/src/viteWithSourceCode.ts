import { type Plugin } from "vite";

export const viteWithSourceCode = (): Plugin => {
  return {
    name: "vite-plugin/with-source-code",
    enforce: "pre",

    async transform(code, id) {
      if (id.endsWith(".example.tsx")) {
        const rawCode = code;

        const exportDefault = code.match(/export default \$?/);

        if (exportDefault) {
          code = code.replace("export default ", `const __default__ = `);
          code += `__default__.__raw = "${btoa(encodeURIComponent(rawCode))}";`;
          code += "export default __default__;";
          return code;
        }
      }

      return null;
    },
  };
};
