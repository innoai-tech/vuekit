import { defineConfig } from "tsdown";

export default defineConfig({
  entry: {
    index: "src/index.ts",
    loader: "src/loader/index.ts",
    "vite-plugin-inject-config": "src/vite-plugin-inject-config/index.ts",
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
