import { styled } from "@innoai-tech/vueuikit";
import { Icon, IconButton } from "@innoai-tech/vuematerial";

export const ActionToolbar = styled("span")({
  px: 2,
  pos: "relative",
  visibility: "hidden",
  border: "1px solid",
  borderColor: "rgba(0,0,0,0)",

  display: "flex",
  alignItems: "center",
});

export const ActionBtn = styled(IconButton)({
  transition: "none",
  width: 24,
  height: 24,
  rounded: "xs",

  [`& ${Icon}`]: {
    svg: {
      width: 16,
      height: 16,
    },
  },
});
