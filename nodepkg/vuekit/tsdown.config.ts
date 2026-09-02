import { vueComponentCompleter } from "@innoai-tech/bundle-purge/rolldown-plugin";
import { defineConfig } from "tsdown";

export default defineConfig({
  entry: {
    index: "src/index.ts",
    "jsx-runtime": "src/jsx-runtime.ts",
    "jsx-dev-runtime": "src/jsx-dev-runtime.ts",
  },
  plugins: [vueComponentCompleter()],
  format: ["esm"],
  dts: true,
  exports: {
    packageJson: true,
  },
  deps: {
    onlyBundle: false,
  },
  clean: true,
});
