import { type AppConfig, confLoader } from "@innoai-tech/config";

const APP_CONFIG = {
  OPENAPI: () => {
    return "";
  },
};

export const CONFIG: AppConfig = {
  name: "OpenAPI Playground",
  group: "",
  manifest: {
    crossorigin: "use-credentials",
  },
  config: APP_CONFIG,
};

export default confLoader<keyof typeof APP_CONFIG>();
