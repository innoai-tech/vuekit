import { vueComponentCompleter } from "@innoai-tech/bundle-purge/rolldown-plugin";
import { defineConfig } from "tsdown";

export default defineConfig({
  plugins: [vueComponentCompleter()],
  entry: {
    index: "src/index.ts",
  },
  format: ["esm"],
  exports: {
    packageJson: true,
  },
  deps: {
    onlyBundle: false,
  },
  clean: true,
});
