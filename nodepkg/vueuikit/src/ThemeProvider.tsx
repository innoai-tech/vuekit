import { createProvider } from "@innoai-tech/vuekit";
import { defaultTheming } from "./theming";

export type Theme = typeof defaultTheming;

export const ThemeProvider = createProvider<Theme>(() => defaultTheming, {
	name: "Theme",
});
