import { styled } from "@innoai-tech/vueuikit";
import { type VNodeChild } from "@innoai-tech/vuekit";
import { Icon, IconButton } from "@innoai-tech/vuematerial";

export const ActionToolbar = styled("span")({
  px: 2,
  pos: "relative",
  display: "flex",
  alignItems: "center",
  gap: 8,
  visibility: "hidden"
});

export const Actions = styled<
  {
    $default?: VNodeChild;
  },
  "span"
>("span", ({}, { slots }) => {
  return (Root) => (
    <Root>
      <ActionToolbar data-visible-on-hover>{slots.default?.()}</ActionToolbar>
    </Root>
  );
})({
  display: "flex"
});

export const ActionBtn = styled(IconButton)({
  transition: "none",
  width: 24,
  height: 24,
  rounded: 12,

  [`& ${Icon}`]: {
    svg: {
      width: 18,
      height: 18
    }
  }
});
