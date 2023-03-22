import { styled, variant, alpha, pseudoSelectors } from "@innoai-tech/vueuikit";
import { BaseButton } from "./BaseButton";

export const ElevatedButton = styled(BaseButton)({
  state: {
    default: {
      color: "sys.primary",

      shadow: "1",
      layer: {
        $: pseudoSelectors._before,

        bgColor: "sys.surface-container-low",
      },
    },

    hovered: {
      $: pseudoSelectors._hover,

      shadow: "2",
      layer: {
        bgColor: variant("sys.primary" as const, alpha(0.08)),
      },
    },

    focused: {
      $: pseudoSelectors._focus,

      shadow: "2",
      layer: {
        bgColor: variant("sys.primary" as const, alpha(0.12)),
      },
    },

    active: {
      $: pseudoSelectors._active,

      shadow: "2",
      layer: {
        bgColor: variant("sys.primary" as const, alpha(0.12)),
      },
    },

    disabled: {
      $: pseudoSelectors._disabled,

      shadow: "0",

      color: variant("sys.on-surface", alpha(0.38)),
      layer: {
        bgColor: variant("sys.on-surface" as const, alpha(0.12)),
      },
    },
  },
});
