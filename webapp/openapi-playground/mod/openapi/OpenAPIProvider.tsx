import { createProvider } from "@innoai-tech/vuekit";
import { OpenAPI } from "./models";

export const OpenAPIProvider = createProvider<OpenAPI>(() => OpenAPI.empty(), {
  name: "OpenAPI",
});
