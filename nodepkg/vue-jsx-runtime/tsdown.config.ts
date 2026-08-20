import { defineConfig } from "tsdown";

export default defineConfig({
  entry: {
    "jsx-runtime": "src/jsx-runtime.ts",
    "jsx-dev-runtime": "src/jsx-dev-runtime.ts",
  },
  format: ["esm"],
  clean: true,
});
