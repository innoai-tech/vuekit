import {
  app,
  chunkCleanup, d2Graph,
  viteChunkSplit,
  viteVue
} from "@innoai-tech/vue-vite-presets";
import { injectWebAppConfig } from "@innoai-tech/config/vite-plugin-inject-config";
import { defineConfig } from "vite";
import * as process from "node:process";
import { writeFile } from "fs/promises";

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
        /nodepkg\/([^/]+)\/src/,
        /webapp\/([^/]+)\/mod/
      ],
      handleModuleFederations: (rels) => {
        void writeFile("node_modules/x.d2", d2Graph(rels));
      }
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
