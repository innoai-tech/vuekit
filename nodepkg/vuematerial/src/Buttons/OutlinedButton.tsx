import { styled, variant, alpha, pseudoSelectors } from "@innoai-tech/vueuikit";
import { ButtonBase } from "./ButtonBase";

export const OutlinedButton = styled(ButtonBase)({
  extends: [
    {
      // ensure the order to define border before all
      border: "1px solid",
    },
  ],
  state: {
    default: {
      color: "sys.primary",
      bgColor: "rgba(0,0,0,0)",
      borderColor: "sys.outline",
    },

    hovered: {
      $: pseudoSelectors._hover,

      bgColor: variant("sys.primary" as const, alpha(0.08)),
    },

    active: {
      $: pseudoSelectors._active,

      bgColor: variant("sys.primary" as const, alpha(0.12)),
    },

    focused: {
      $: pseudoSelectors._focus,

      bgColor: variant("sys.primary" as const, alpha(0.12)),
    },

    disabled: {
      $: pseudoSelectors._disabled,

      color: variant("sys.on-surface", alpha(0.38)),
      bgColor: "rgba(0,0,0,0)",
      borderColor: variant("sys.on-surface", alpha(0.12)),
    },
  },
});
