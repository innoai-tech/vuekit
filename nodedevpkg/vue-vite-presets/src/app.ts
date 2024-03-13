import { resolve } from "path";
import {
  type PluginOption,
  type UserConfig,
  searchForWorkspaceRoot
} from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export interface AppConfig {
  enableBaseHref?: boolean;
  buildWithPlaceHolder?: boolean;
}

export const app = (
  appName: string,
  appConfig: AppConfig = {}
): PluginOption[] => {
  (process.env as any).APP_VERSION = "__VERSION__";

  const viteConfigRoot = searchForWorkspaceRoot(".");

  let userConfig: UserConfig;

  return [
    {
      name: "vite-presets/app",
      config(c, { command }) {
        userConfig = c;

        c.base = appConfig.enableBaseHref
          ? appConfig.buildWithPlaceHolder && command === "build"
            ? "/__APP_BASE_HREF__/"
            : `/${appName}/`
          : "/";

        c.publicDir = appConfig.enableBaseHref ? c.base : false;

        c.root = resolve(viteConfigRoot, `./webapp/${appName}`);

        c.build = c.build ?? {};

        c.build.outDir = resolve(
          viteConfigRoot,
          c.build.outDir ?? `./public/${appName}`
        );
        c.build.emptyOutDir = true;

        c.build.rollupOptions = c.build.rollupOptions ?? {};
        c.build.rollupOptions.external = c.build.rollupOptions.external ?? [
          "csstype"
        ];

        c.build.assetsDir = c.build.assetsDir ?? "__built__";

        // to avoid some filename starts with _
        c.build.rollupOptions.output = {
          assetFileNames: `${c.build.assetsDir}/[name].[hash][extname]`,
          entryFileNames: `${c.build.assetsDir}/[name].[hash].entry.js`,
          chunkFileNames: `${c.build.assetsDir}/[name].[hash].chunk.js`
        };

        c.resolve = c.resolve ?? {};
        c.resolve.alias = c.resolve.alias ?? ({} as Record<string, string>);

        c.resolve.conditions = c.resolve.conditions ?? [
          "bun",
          "import",
          "module",
          "browser",
          "default"
        ];

        c.esbuild = {
          jsxDev: c.mode !== "production",
          jsx: "automatic"
        };
      },

      transformIndexHtml(html: string) {
        return {
          html: html,
          tags: [
            {
              tag: "base",
              attrs: {
                href: userConfig.base ?? "/"
              }
            }
          ]
        };
      }
    },
    tsconfigPaths({}) as PluginOption
  ];
};
