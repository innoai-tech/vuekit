import { styled, variant, alpha, pseudoSelectors } from "@innoai-tech/vueuikit";
import { ButtonBase } from "./ButtonBase";

export const TonalButton = styled(ButtonBase)({
  containerStyle: "sys.secondary-container",

  state: {
    default: {
      color: "sys.primary",

      shadow: "0",

      layer: {
        $: pseudoSelectors._before,
      },
    },

    hovered: {
      $: pseudoSelectors._hover,

      shadow: "1",
      layer: {
        bgColor: variant("sys.on-secondary-container" as const, alpha(0.08)),
      },
    },

    focused: {
      $: pseudoSelectors._focus,

      layer: {
        bgColor: variant("sys.on-secondary-container" as const, alpha(0.12)),
      },
    },

    active: {
      $: pseudoSelectors._active,

      layer: {
        bgColor: variant("sys.on-secondary-container" as const, alpha(0.12)),
      },
    },

    disabled: {
      $: pseudoSelectors._disabled,

      color: variant("sys.on-surface", alpha(0.38)),
      bgColor: "rgba(0,0,0,0)",

      shadow: "0",
      layer: {
        bgColor: variant("sys.on-surface" as const, alpha(0.12)),
      },
    },
  },
});
