import { vueComponentCompleter } from "@innoai-tech/bundle-purge/rolldown-plugin";
import { defineConfig } from "tsdown";

export default defineConfig({
  entry: {
    index: "src/index.ts",
    material: "src/material/index.ts",
  },
  plugins: [vueComponentCompleter()],
  format: ["esm"],
  exports: {
    packageJson: true,
  },
  deps: {
    onlyBundle: false,
  },
  clean: true,
});
