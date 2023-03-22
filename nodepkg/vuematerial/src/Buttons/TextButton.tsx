import { styled, variant, alpha, pseudoSelectors } from "@innoai-tech/vueuikit";
import { BaseButton } from "./BaseButton";

export const TextButton = styled(BaseButton)({
  extends: [
    {
      px: 16,
      "& [data-icon]": {
        "&[data-placement=start]": {
          ml: -4,
        },
        "&[data-placement=end]": {
          mr: -4,
        },
      },
    },
  ],

  state: {
    default: {
      color: "sys.primary",

      layer: {
        $: pseudoSelectors._before,

        bgColor: "rgba(0,0,0,0)",
      },
    },

    hovered: {
      $: pseudoSelectors._hover,

      layer: {
        bgColor: variant("sys.primary" as const, alpha(0.08)),
      },
    },

    focused: {
      $: pseudoSelectors._focus,

      layer: {
        bgColor: variant("sys.primary" as const, alpha(0.12)),
      },
    },

    active: {
      $: pseudoSelectors._active,

      layer: {
        bgColor: variant("sys.primary" as const, alpha(0.12)),
      },
    },

    disabled: {
      $: pseudoSelectors._disabled,

      color: variant("sys.on-surface", alpha(0.38)),
      bgColor: "rgba(0,0,0,0)",

      layer: {
        bgColor: "rgba(0,0,0,0)",
      },
    },
  },
});
