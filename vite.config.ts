import { defineConfig } from "vite";
import { app, viteWithSourceCode, viteChunkSplit, viteVue } from "@innoai-tech/vue-vite-presets";
import { chunkCleanup } from "@innoai-tech/monobundle";

export default defineConfig({
  build: {
    assetsDir: "static" // github only
  },
  plugins: [
    app("vuekit", { enableBaseHref: true }),
    viteWithSourceCode(),
    viteVue({
      pagesDirs: [
        { baseRoute: "vuekit", dir: "../../nodepkg/vuekit/example" },
        { baseRoute: "vueuikit", dir: "../../nodepkg/vueuikit/example" },
        { baseRoute: "vuematerial", dir: "../../nodepkg/vuematerial/example" },
        { baseRoute: "", dir: "page" }
      ]
    }),
    viteChunkSplit({
      lib: [
        /nodepkg\/([^/]+)\/src/,
        /webapp\/vuekit\/layout/
      ]
      // handleModuleFederations: (pkgRelations) => {
      //   // bundle debug
      //   writeFileSync("./public/g.d2", d2Graph(pkgRelations));
      // },
    }),
    chunkCleanup()
  ]
});
