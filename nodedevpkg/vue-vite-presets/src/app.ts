import { resolve } from "path";
import { type OxcOptions, type PluginOption, searchForWorkspaceRoot, type UserConfig } from "rolldown-vite";
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
      async config(c, { command }) {
        userConfig = c;

        c.base = appConfig.enableBaseHref
          ? appConfig.buildWithPlaceHolder && command === "build"
            ? "/__APP_BASE_HREF__/"
            : `/${appName}/`
          : "/";

        c.publicDir = appConfig.enableBaseHref ? c.base : false;

        c.root = resolve(viteConfigRoot, `./webapp/${appName}`);

        c.build = c.build ?? {};

        c.build.target = "esnext";

        c.build.outDir = resolve(
          viteConfigRoot,
          c.build.outDir ?? `./public/${appName}`
        );
        c.build.emptyOutDir = true;

        c.build.rolldownOptions = c.build.rolldownOptions ?? {};
        c.build.rolldownOptions.external = c.build.rolldownOptions.external ?? [
          "csstype"
        ];

        c.build.assetsDir = c.build.assetsDir ?? "__built__";

        // to avoid some filename starts with _
        c.build.rolldownOptions.output = {
          assetFileNames: `${c.build.assetsDir}/[name].[hash][extname]`,
          entryFileNames: `${c.build.assetsDir}/[name].[hash].entry.js`,
          chunkFileNames: `${c.build.assetsDir}/[name].[hash].chunk.js`
        };

        c.build.rolldownOptions.tsconfig = "tsconfig.json";

        c.build.minify = true;
        c.build.rolldownOptions.treeshake = {
          annotations: true
        };

        c.resolve = c.resolve ?? {};
        c.resolve.alias = c.resolve.alias ?? ({} as Record<string, string>);

        c.oxc = c.oxc ?? ({} as OxcOptions);
        (c.oxc as OxcOptions).jsx = {
          runtime: "automatic",
          development: c.mode !== "production"
        };

        c.optimizeDeps = c.optimizeDeps ?? {};

        return c;
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
