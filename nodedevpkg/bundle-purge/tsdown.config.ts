import { defineConfig } from "tsdown";

export default defineConfig({
  entry: {
    index: "src/index.ts",
    "rolldown-plugin": "src/rolldown-plugin.ts",
  },
  format: ["esm"],
  clean: true,
});
