import { styled } from "@innoai-tech/vueuikit";

export const ButtonBase = styled<
  {
    hover?: boolean;
    focus?: boolean;
    active?: boolean;
    disabled?: boolean;
  },
  "button"
>("button")({
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

  gap: 4,
  h: 36,
  px: 16,
  rounded: "xs",

  transitionDuration: "md4",
  transitionTimingFunction: "standard-accelerate",

  bg: "none",

  pos: "relative",
  zIndex: 0,

  _$before: {
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

  $data_icon: {
    boxSize: 18,

    _data_placement__start: {
      ml: -8,
    },
    _data_placement__end: {
      mr: -8,
    },
  },
});
