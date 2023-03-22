import { styled, variant, alpha, pseudoSelectors } from "@innoai-tech/vueuikit";
import { BaseButton } from "./BaseButton";

export const FilledButton = styled(BaseButton)({
  containerStyle: "sys.primary",

  state: {
    default: {
      shadow: "1",
      layer: {
        $: pseudoSelectors._before,
      },
    },

    hovered: {
      $: pseudoSelectors._hover,

      shadow: "2",
      layer: {
        bgColor: variant("white", alpha(0.08)),
      },
    },

    focused: {
      $: pseudoSelectors._focus,

      shadow: "2",
      layer: {
        bgColor: variant("white", alpha(0.12)),
      },
    },

    active: {
      $: pseudoSelectors._active,

      shadow: "2",
      layer: {
        bgColor: variant("white", alpha(0.12)),
      },
    },

    disabled: {
      $: pseudoSelectors._disabled,

      shadow: "0",
      color: variant("sys.on-surface", alpha(0.38)),
      bgColor: "rgba(0,0,0,0)",
      layer: {
        bgColor: variant("sys.on-surface", alpha(0.12)),
      },
    },
  },
});
