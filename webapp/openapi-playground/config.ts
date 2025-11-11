import {
  type AppConfig,
  type AppContext,
  confLoader,
} from "@innoai-tech/config";

const APP_CONFIG = {
  OPENAPI: ({}: AppContext) => {
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
