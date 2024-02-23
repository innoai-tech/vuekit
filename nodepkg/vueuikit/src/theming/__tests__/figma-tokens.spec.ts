import { describe, expect, test } from "bun:test";
import { Theming, defaultTheming, themeFromFigmaTokens } from "../index";

describe("#FigmaTokens", () => {
  const figmaTokens = defaultTheming.toFigmaTokens();

  test("from figmaTokens", () => {
    const themeTokens = themeFromFigmaTokens(
      [figmaTokens.seed, figmaTokens.base],
      [figmaTokens.dark],
    );

    const t = Theming.create(
      {
        ...defaultTheming.theme,
        ...themeTokens,
      },
      {
        varPrefix: "vk",
      },
    );

    const nextTokens = t.toFigmaTokens();

    for (const k in nextTokens) {
      expect((nextTokens as any)[k]).toEqual((figmaTokens as any)[k]);
    }
  });
});
