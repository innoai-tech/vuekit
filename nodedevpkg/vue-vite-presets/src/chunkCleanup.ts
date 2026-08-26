import { transform } from "@innoai-tech/bundle-purge";
import { type Plugin } from "vite";

export const chunkCleanup = (): Plugin => {
  return {
    name: "chunk-cleanup",
    enforce: "post",
    apply: "build",

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
