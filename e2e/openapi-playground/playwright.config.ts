import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "tests",
  outputDir: "public",
  testMatch: "*.e2e.ts",
  projects: [
    {
      name: "chromium",
    },
  ],
  use: {
    baseURL: "http://localhost:8081/api/example/_view/",
    trace: "on-first-retry",
  },
  webServer: {
    command: "just serve-example",
    url: "http://localhost:8081",
    reuseExistingServer: true,
  },
});
