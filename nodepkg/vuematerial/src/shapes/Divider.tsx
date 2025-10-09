import { styled } from "@innoai-tech/vueuikit";

export const Divider = styled<
  {
    orientation?: "vertical" | "horizontal";
  },
  "hr"
>("hr")({
  m: 0,
  borderWidth: "0px 0px thin",
  borderColor: "sys.outline",

  _data_orientation__vertical: {
    borderWidth: "0px thin 0px 0px",
    mx: 4,
    height: "auto",
    flexShrink: 0,
    alignSelf: "stretch",
  },
});
