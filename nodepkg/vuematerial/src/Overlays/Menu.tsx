import { Popper, styled, variant, alpha } from "@innoai-tech/vueuikit";
import { component, z } from "@innoai-tech/vuekit";
import { type VNode, cloneVNode, ref } from "vue";

export const Menu = component({
  placement: z.custom<import("@popperjs/core").Placement>().optional(),
  $menu: z.custom<VNode>()
},
  (props, { slots }) => {
    const isOpen = ref(false);

    return () => {
      const trigger = slots.default ? slots.default()[0] : undefined;

      return (
        <Popper
          isOpen={isOpen.value}
          placement={props.placement}
          onClickOutside={() => (isOpen.value = false)}
          $content={<MenuContainer>{slots.menu?.()}</MenuContainer>}
        >
          {trigger
            ? cloneVNode(trigger, {
              onClick: () => (isOpen.value = true)
            })
            : null}
        </Popper>
      );
    };
  }
), MenuContainer = styled("div")({
  py: 8,
  rounded: "sm",
  shadow: "2",
  minW: 120,
  containerStyle: "sys.surface-container",
  pos: "relative",
  zIndex: 100
}), ListItem = styled("div")({
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

