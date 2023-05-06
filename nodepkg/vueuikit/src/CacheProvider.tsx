import { createProvider } from "@innoai-tech/vuekit";
import { type EmotionCache } from "@emotion/utils";
import createCache from "@emotion/cache";

export const CacheProvider = createProvider<EmotionCache>(
  () => createCache({
    key: "css"
  }),
  {
    name: "Cache"
  }
);
