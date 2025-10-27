import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    projects: ["nodepkg/*", "."],
    outputFile: {
      html: "./public/vitest-report/index.html",
    },
  },
});
