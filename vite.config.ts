import { app, chunkCleanup, viteChunkSplit, viteVue } from "./nodedevpkg/vue-vite-presets/src";
import { injectWebAppConfig } from "@innoai-tech/config/vite-plugin-inject-config";
import { defineConfig } from "vite";
import * as process from "node:process";

const appName = process.env?.["APP"] ?? "vuekit";

export default defineConfig({
  build: {
    assetsDir: appName == "vuekit" ? "static" : "assets",
  },
  plugins: [
    ...(() => {
      switch (appName) {
        case "openapi-playground":
          return [
            app(appName, {
              enableBaseHref: true,
              buildWithPlaceHolder: true,
            }),
            injectWebAppConfig((_, ac) => {
              ac.config["OPENAPI"] = process.env["APP_CONFIG__OPENAPI"] ?? "";
            }),
            viteVue({}),
          ];
        case "vuekit":
          return [
            app(appName, {
              enableBaseHref: true,
            }),
            viteVue({
              pagesDirs: [
                { baseRoute: "", dir: "page" },
                {
                  baseRoute: "vuekit",
                  dir: "../../nodepkg/vuekit/example",
                },
                {
                  baseRoute: "vueuikit",
                  dir: "../../nodepkg/vueuikit/example",
                },
                {
                  baseRoute: "vuematerial",
                  dir: "../../nodepkg/vuematerial/example",
                },
                {
                  baseRoute: "vuemarkdown",
                  dir: "../../nodepkg/vuemarkdown/example",
                },
                {
                  baseRoute: "jsoneditor",
                  dir: "../../nodepkg/jsoneditor/example",
                },
              ],
            }),
          ];
      }

      return [];
    })(),
    viteChunkSplit({
      lib: [/nodepkg\/([^/]+)\/src/, /webapp\/([^/]+)\/mod/],
    }),
    chunkCleanup({}),
  ],
});
