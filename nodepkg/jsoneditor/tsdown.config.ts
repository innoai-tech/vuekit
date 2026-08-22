import { vueComponentCompleter } from "@innoai-tech/bundle-purge/rolldown-plugin";
import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm"],
  clean: true,
  plugins: [vueComponentCompleter()],
});
