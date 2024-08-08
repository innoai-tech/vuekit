import { styled } from "@innoai-tech/vueuikit";

export const FormControls = styled("form")({
  display: "flex",
  pos: "absolute",
  right: 0,
  bottom: 0,
  px: 8
});

export const FormContainer = styled("div")({
  display: "block",
  pos: "relative",

  textarea: {
    minW: 400,
    outline: "none",
    border: "none",
    bg: "none",
    py: 8,
    px: 12
  }
});

export const FormContainerAsRow = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: 8,
  pos: "relative",
  px: 8,

  input: {
    outline: "none",
    border: "none",
    bg: "none",
    minWidth: "10vw",
    py: 8,
    px: 12
  },

  [`& ${FormControls}`]: {
    pos: "relative",
    px: 0
  }
});
