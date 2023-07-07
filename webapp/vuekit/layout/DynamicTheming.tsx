import { createProvider, observableRef } from "@innoai-tech/vuekit";
import { Palette, Theming, defaultTheme } from "@innoai-tech/vueuikit";

export const DynamicThemingProvider = createProvider(() => {
  const seed = {
    primary: "#1270f5",
    secondary: "#8a90a5",
    tertiary: "#b58391",
    neutral: "#5e5e5e",
    neutralVariant: "#757780",
    error: "#d93f23",
    warning: "#e69c00",
    success: "#5ac220"
  };

  const rules = Palette.fromColors(seed).normalizeRoleRules();

  return observableRef({
    seed: seed,
    rules: rules,
    theming: Theming.create(
      {
        ...defaultTheme,
        ...Palette.fromColors(seed).toDesignTokens(rules)
      },
      { varPrefix: "vk" }
    )
  });
});
