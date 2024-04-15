import {
  app,
  chunkCleanup,
  viteChunkSplit,
  viteVue
} from "@innoai-tech/vue-vite-presets";
import { injectWebAppConfig } from "@innoai-tech/config/vite-plugin-inject-config";
import { defineConfig } from "vite";
import * as process from "node:process";

const appName = process.env?.["APP"] ?? "vuekit";

export default defineConfig({
  build: {
    assetsDir: appName == "vuekit" ? "static" : "assets"
  },
  plugins: [
    appName == "openapi-playground" ? [
      app(appName, {
        enableBaseHref: true,
        buildWithPlaceHolder: true
      }),
      injectWebAppConfig((_, ac) => {
        ac.config["OPENAPI"] = process.env["APP_CONFIG__OPENAPI"] ?? "";
      })
    ] : [
      app(appName, {
        enableBaseHref: true
      })
    ],
    viteVue({
      ...(
        appName == "vuekit" ? ({
          pagesDirs: [
            { baseRoute: "", dir: "page" },
            { baseRoute: "vuekit", dir: "../../nodepkg/vuekit/example" },
            { baseRoute: "vueuikit", dir: "../../nodepkg/vueuikit/example" },
            { baseRoute: "vuematerial", dir: "../../nodepkg/vuematerial/example" }
          ]
        }) : {}
      )
    }),
    viteChunkSplit({
      lib: [
        /webapp\/([^/]+)\/mod/
      ]
    }),
    chunkCleanup({
      minify: true,
      env: {
        targets: {
          chrome: "76"
        },
        mode: "usage",
        coreJs: "3.31.0",
        exclude: [
          // 哪个报错加哪个
          "es.symbol.async-dispose"
        ]
      }
    })
  ]
});
