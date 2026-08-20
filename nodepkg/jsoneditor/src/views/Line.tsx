import { alpha, styled, variant } from "@innoai-tech/vueuikit";
import type { VNodeChild } from "@innoai-tech/vuekit";
import { ActionToolbar } from "./Action.tsx";
import { DirtyType } from "../models";
import { TokenView } from "./Token.tsx";
import { Icon } from "@innoai-tech/vuematerial";
import { mdiChevronDown, mdiChevronRight } from "@mdi/js";

export const LineError = styled("div")({
  display: "block",
  fontSize: 10,
  lineHeight: 14,
  color: "sys.error",

  position: "absolute",
  px: 2,
  top: -2,
  right: 0,
});

const LinePrefix = styled("div")({
  position: "relative",
  display: "flex",
  alignItems: "start",
  justifyContent: "flex-end",
  minWidth: "2vw",
  px: 12,
  userSelect: "none",
});

const LineContent = styled("div")({
  flex: 1,
  minW: 0,
});

const LineContentMain = styled("div")({
  position: "relative",
  display: "flex",
  alignItems: "start",
});

export const LineNumber = styled(TokenView)({
  opacity: 0.28,
  font: "code",
});

export const LineFoldable = styled<{ folded: boolean }, typeof TokenView>(TokenView, (props) => {
  return (Wrap) => (
    <Wrap>
      <Icon path={props.folded ? mdiChevronRight : mdiChevronDown} />
    </Wrap>
  );
})({
  position: "absolute",
  top: 0,
  left: 2,
  cursor: "pointer",
  font: "code",
  opacity: 0.58,

  [`& ${Icon}`]: {
    svg: {
      width: 16,
      height: 16,
    },
  },
});

export const LineContainer = styled<
  {
    indent: number;
    $leading?: VNodeChild;
    $default?: VNodeChild;
    $comment?: VNodeChild;
  },
  "div"
>("div", (props, { slots }) => {
  return (Wrap) => {
    return (
      <Wrap>
        <LinePrefix>{slots.leading?.()}</LinePrefix>
        <LineContent
          sx={{
            paddingLeft: props.indent * 14 * 2,
          }}
        >
          <LineContentMain>
            {slots.default?.()}
            {slots.comment?.()}
          </LineContentMain>
        </LineContent>
      </Wrap>
    );
  };
})({
  position: "relative",
  display: "flex",
  py: 2,
  w: "100%",
  maxW: "100%",

  _hover: {
    containerStyle: "sys.surface-container",

    [`& ${ActionToolbar}`]: {
      visibility: "visible",
    },
  },

  "&:focus-within": {
    containerStyle: "sys.surface-container",
  },

  [`&[data-dirty=${DirtyType.EDIT}]`]: {
    bgColor: variant("sys.warning-container", alpha(0.38)),
  },

  [`&[data-dirty=${DirtyType.ADD}]`]: {
    bgColor: variant("sys.success-container", alpha(0.38)),
  },

  [`&[data-dirty=${DirtyType.DELETE}]`]: {
    bgColor: variant("sys.error-container", alpha(0.38)),
    textDecoration: "line-through",
    opacity: 0.58,
  },

  _error: {
    bgColor: variant("sys.error-container", alpha(0.38)),
  },
});
