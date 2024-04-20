import { describe, expect, test } from "bun:test";
import { CSSProcessor } from "../CSSProcessor";
import { alpha, defaultTheming, variant } from "../index";

describe("theming", () => {
  test("selector rule", () => {
    const selectors: Record<string, string> = {
      _aria_current__page: "&[aria-current='page']",
      _hover: "&:hover, &[data-hover]:not([data-hover='false']), &.hover",
      _$before: "&::before",
      _data_role__heading: "&[data-role='heading']",
      $dataRole__heading: "& [data-role='heading']",

      $data_popper_arrow: "& [data-popper-arrow]",

      data_popper_placement__right$: "[data-popper-placement='right'] &",
    };

    for (const k in selectors) {
      expect(CSSProcessor.convertSelector(k)).toBe(selectors[k]);
    }
  });

  test("css", () => {
    const cs = defaultTheming.unstable_sx({
      extends: [
        {
          px: 4,
          py: 2,
          w: 1 / 4,
          rounded: 20,
        },
      ],

      color: "sys.on-primary-container",

      _$before: {
        bgColor: "sys.primary-container",
      },

      _error: {
        bgColor: variant("secondary.20", alpha(0.12)),
      },
    });

    expect(cs).toEqual([
      {
        borderRadius: "calc(20 * var(--vk-space__dp))",
        paddingBottom: "calc(2 * var(--vk-space__dp))",
        paddingLeft: "calc(4 * var(--vk-space__dp))",
        paddingRight: "calc(4 * var(--vk-space__dp))",
        paddingTop: "calc(2 * var(--vk-space__dp))",
        width: "25%",
      },
      {
        color: "var(--vk-color__sys__on-primary-container)",
        fill: "var(--vk-color__sys__on-primary-container)",
        "&::before": {
          backgroundColor: "var(--vk-color__sys__primary-container)",
        },
        "&[data-error]:not([data-error='false'])": {
          backgroundColor: "rgba(var(--vk-color__secondary__20--rgb) / 0.12)",
        },
      },
    ]);
  });
});
