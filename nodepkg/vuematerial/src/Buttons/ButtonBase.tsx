import { z } from "@innoai-tech/vuekit";
import { styled } from "@innoai-tech/vueuikit";

export const ButtonBase = styled("button", {
  hover: z.boolean().optional(),
  focus: z.boolean().optional(),
  active: z.boolean().optional(),
  disabled: z.boolean().optional(),
})({
  textStyle: "sys.label-large",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",

  textDecoration: "none",
  outline: "none",
  overflow: "hidden",
  border: 0,
  margin: 0,
  userSelect: "none",

  cursor: "pointer",
  _disabled: {
    cursor: "not-allowed",
  },

  gap: 8,
  h: 40,
  px: 24,
  rounded: 20,

  transitionDuration: "md4",
  transitionTimingFunction: "standard-accelerate",

  bg: "none",

  pos: "relative",
  zIndex: 1,

  _before: {
    content: `""`,
    pos: "absolute",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    zIndex: -1,

    transitionDuration: "md1",
    transitionTimingFunction: "standard-accelerate",
  },

  "& [data-icon]": {
    boxSize: 18,

    "&[data-placement=start]": {
      ml: -8,
    },
    "&[data-placement=end]": {
      mr: -8,
    },
  },
});
