import { styled } from "@innoai-tech/vueuikit";
import type { VNodeChild } from "@innoai-tech/vuekit";

const ActionToolbar = styled("span")({
  pos: "relative",
  px: 8,
  display: "flex",
  alignItems: "center",
  gap: 8
});

export const Actions = styled<
  {
    $default?: VNodeChild;
  },
  "span"
>("span", ({}, { slots }) => {
  return (Root) => (
    <Root>
      <ActionToolbar>{slots.default?.()}</ActionToolbar>
    </Root>
  );
})({
  flex: 1,
  lineHeight: 18,

  wordBreak: "keep-all",
  whiteSpace: "nowrap",
  display: "inline-flex",
  alignItems: "center",

  [`& ${ActionToolbar}`]: {
    visibility: "hidden"
  },

  _hover: {
    [`& ${ActionToolbar}`]: {
      visibility: "visible"
    }
  }
});

export const ActionBtn = styled("span")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: 16,
  width: 16,
  opacity: 0.5,
  cursor: "pointer",
  textStyle: "sys.label-small",

  _hover: {
    opacity: 0.8
  }
});
