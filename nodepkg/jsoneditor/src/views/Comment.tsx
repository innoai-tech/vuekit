import { styled } from "@innoai-tech/vueuikit";

export const PropDoc = styled("div")({
  position: "absolute",
  zIndex: 1,
  opacity: 0.58,
  fontSize: 10,
  lineHeight: 10,
  top: -3,
  left: 0,

  "& > *": {
    display: "flex",
    alignItems: "center",
    gap: 4,

    "&::before": {
      content: `"// "`,
      font: "code",
    },
  },
});

export const PropDescription = styled("span")({
  display: "block",

  textStyle: "sys.body-small",

  "& p": {
    my: 1,

    wordBreak: "keep-all",
    whiteSpace: "nowrap",
    opacity: 0.7,
  },

  "& code": {
    wordBreak: "keep-all",
    whiteSpace: "nowrap",
  },
});
