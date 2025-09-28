import { alpha, styled, variant } from "@innoai-tech/vueuikit";
import { ButtonBase } from "./ButtonBase.tsx";

export const FilledButton = styled(ButtonBase)({
  containerStyle: "sys.primary",
  py: 6,
  px: 16,
  _hover: {
    shadow: "1",
    _$before: {
      bgColor: variant("white", alpha(0.08)),
    },
  },

  _focus: {
    shadow: "1",
    _$before: {
      bgColor: variant("white", alpha(0.12)),
    },
  },

  _active: {
    shadow: "1",
    _$before: {
      bgColor: variant("white", alpha(0.12)),
    },
  },

  _disabled: {
    shadow: "0",
    color: variant("sys.on-surface", alpha(0.38)),
    bgColor: "rgba(0,0,0,0)",

    _$before: {
      bgColor: variant("sys.on-surface", alpha(0.12)),
    },
  },
});
