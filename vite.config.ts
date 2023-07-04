import { defineConfig } from "vite";
import { app, viteChunkSplit, viteVue, chunkCleanup } from "@innoai-tech/vue-vite-presets";

export default defineConfig({
  build: {
    assetsDir: "static" // github only
  },
  plugins: [
    app("vuekit", { enableBaseHref: true }),
    viteVue({
      pagesDirs: [
        { baseRoute: "", dir: "page" },
        { baseRoute: "vuekit", dir: "../../nodepkg/vuekit/example" },
        { baseRoute: "vueuikit", dir: "../../nodepkg/vueuikit/example" },
        { baseRoute: "vuematerial", dir: "../../nodepkg/vuematerial/example" }
      ]
    }),
    viteChunkSplit({
      lib: [/nodepkg\/([^/]+)\/src/, /webapp\/vuekit\/layout/]
      // handleModuleFederations: (pkgRelations) => {
      //   // bundle debug
      //   writeFileSync("./public/g.d2", d2Graph(pkgRelations));
      // },
    }),
    chunkCleanup({
      minify: true,
      env: {
        targets: {
          "chrome": "76"
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
