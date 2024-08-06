import { transform, usePlugin } from "@innoai-tech/purebundle";
import { type Plugin, createFilter } from "vite";
import { isUndefined } from "@innoai-tech/lodash";

export const chunkCleanup = (
  opt: {
    annotatePure?: boolean;
    minify?: boolean;
    env?: {
      targets?: string | { [K: string]: string };
      mode?: string;
      coreJs?: string;
      exclude?: string[];
      include?: string[];
    };
  } = {},
): Plugin => {
  const isJSOrLike = createFilter([
    /\.vue$/,
    /\.mdx$/,
    /\.tsx?$/,
    /\.mjs$/,
    /\.jsx?$/,
  ]);

  return {
    name: "monobundle/chunk-cleanup",
    enforce: "post",
    apply: "build",

    config(c) {
      c.build = c.build ?? {};

      if (!isUndefined(opt.minify)) {
        // when minify set, disable default esbuild minify
        c.build.minify = false;
      }
    },

    async transform(code, id) {
      if (!isJSOrLike(id)) {
        return null;
      }

      if (id.includes("/node_modules/core-js/")) {
        return null;
      }

      // only for build
      const result = await transform(code, {
        filename: id,
        env: opt.env ?? { targets: "defaults" },
        minify: false,
      });

      return (
        result.code && {
          code: result.code,
          map: result.map || null,
        }
      );
    },

    async renderChunk(code: string) {
      return (
        await transform(code, {
          minify: opt.minify ?? false,
          plugins: [usePlugin({})],
        })
      ).code;
    },
  };
};
