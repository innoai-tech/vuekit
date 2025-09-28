import { styled, variant, alpha } from "@innoai-tech/vueuikit";
import { ButtonBase } from "./ButtonBase";

export const OutlinedButton = styled(ButtonBase)({
  extends: [
    {
      // ensure the order to define border before all
      border: "1px solid",
    },
  ],

  containerStyle: "sys.surface",
  borderColor: "sys.outline",
  fontWeight: "bold",

  _hover: {
    bgColor: variant("sys.primary" as const, alpha(0.08)),
  },

  _active: {
    bgColor: variant("sys.primary" as const, alpha(0.12)),
  },

  _focus: {
    bgColor: variant("sys.primary" as const, alpha(0.12)),
  },

  _disabled: {
    color: variant("sys.on-surface", alpha(0.38)),
    bgColor: "rgba(0,0,0,0)",
    borderColor: variant("sys.on-surface", alpha(0.12)),
  },
});
