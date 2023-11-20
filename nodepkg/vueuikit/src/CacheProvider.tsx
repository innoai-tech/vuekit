import createCache from "@emotion/cache";
import { type EmotionCache } from "@emotion/utils";
import { createProvider } from "@innoai-tech/vuekit";

export const CacheProvider = createProvider<EmotionCache>(
	() =>
		createCache({
			key: "css",
		}),
	{
		name: "Cache",
	},
);
