import { test, describe, expect } from "vitest";
import { alpha, defaultTheming, variant } from "../index";
import { pseudoSelectors } from "../csstype";

describe("theming", () => {
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
      state: {
        default: {
          color: "sys.on-primary-container",

          layer: {
            $: pseudoSelectors._before,

            bgColor: "sys.primary-container",
          },
        },

        hovered: {
          bgColor: variant("secondary.20", alpha(0.12)),
        },
      },
    });

    expect(cs).toEqual([
      {
        borderRadius: "calc(20 * var(--vk-space-dp))",
        paddingBottom: "calc(2 * var(--vk-space-dp))",
        paddingLeft: "calc(4 * var(--vk-space-dp))",
        paddingRight: "calc(4 * var(--vk-space-dp))",
        paddingTop: "calc(2 * var(--vk-space-dp))",
        width: "25%",
      },
      {
        "--vk-state-default-color": "var(--vk-color-sys-on-primary-container)",
        "--vk-state-default-layer-bgColor":
          "var(--vk-color-sys-primary-container)",
        "--vk-state-hovered-bgColor":
          "rgba(var(--vk-color-secondary-20-rgb) / 0.12)",
      },
      {
        "&::before": {
          backgroundColor: "var(--vk-state-default-layer-bgColor)",
        },
        backgroundColor: "var(--vk-state-hovered-bgColor)",
        color: "var(--vk-state-default-color)",
        fill: "var(--vk-state-default-color)",
      },
    ]);
  });
});
