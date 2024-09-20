import { component } from "@innoai-tech/vuekit";
import { Popper, alpha, styled, variant } from "@innoai-tech/vueuikit";
import { type VNode, cloneVNode, ref } from "vue";
import type { Placement } from "@floating-ui/core";

export const MenuContainer = styled("div")({
  py: 8,
  rounded: "sm",
  shadow: "2",
  minW: 120,
  containerStyle: "sys.surface-container",
  pos: "relative",
  zIndex: 100
});

export const ListItem = styled("div")({
  "& + &": {
    borderTop: "1px solid",
    borderColor: "sys.outline-variant"
  },
  py: 8,
  px: 16,
  textStyle: "sys.label-large",

  containerStyle: "sys.surface-container",

  _hover: {
    cursor: "pointer",
    bgColor: variant("sys.on-surface", alpha(0.08))
  }
});

export const Menu = component<{
  placement: Placement,
  $menu: VNode,
  $default: JSX.Element,
}>((props, { slots }) => {
  const isOpen = ref(false);

  return () => {
    const trigger = slots.default ? slots.default()[0] : undefined;

    return (
      <Popper
        isOpen={isOpen.value}
        placement={props.placement}
        onClickOutside={() => {
          isOpen.value = false;
        }}
        $content={<MenuContainer>{slots.menu?.()}</MenuContainer>}
      >
        {trigger
          ? cloneVNode(trigger, {
            onClick: () => {
              isOpen.value = true;
            }
          })
          : null}
      </Popper>
    );
  };
});
