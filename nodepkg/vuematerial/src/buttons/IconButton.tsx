import { styled } from "@innoai-tech/vueuikit";
import { TextButton } from "./TextButton";
import { Icon } from "../icons";

export const IconButton = styled(TextButton)({
  boxSize: 36,
  p: 0,
  color: "sys.on-surface-variant",

  [`${Icon}`]: {
    boxSize: 18,
  },
});
