import { transform } from "@innoai-tech/bundle-purge";
import { createFilter, type Plugin } from "vite";

export const chunkCleanup = (opt: { annotatePure?: boolean } = {}): Plugin => {
  const isJSOrLike = createFilter([/\.vue$/, /\.mdx$/, /\.tsx?$/, /\.mjs$/, /\.jsx?$/]);

  void opt;

  return {
    name: "chunk-cleanup",
    enforce: "post",
    apply: "build",

    async transform(code, id) {
      if (!isJSOrLike(id)) {
        return null;
      }

      // 已 minify 的产物无需再处理
      if (id.includes(".min/") || id.includes(".min.")) {
        return null;
      }

      if (id.includes("/node_modules/core-js/")) {
        return null;
      }

      // only for build
      const result = await transform(code, {
        filename: id,
      });

      return (
        result.code && {
          code: result.code,
        }
      );
    },

    async renderChunk(code: string, c) {
      // 已 minify 的 chunk 无需再处理
      if (c.fileName.includes("vendor-min-")) {
        return null;
      }

      const result = await transform(code, {
        filename: c.fileName,
      });

      return result.code;
    },
  };
};
