import { component, observableRef } from "@innoai-tech/vuekit";
import { alpha, Popper, styled, variant } from "@innoai-tech/vueuikit";
import { cloneVNode, type VNodeChild, watch } from "vue";
import { isUndefined } from "es-toolkit/compat";
import { Icon } from "../icons";
import { mdiCheck } from "@mdi/js";
import { sameWidth } from "./util.ts";

export const MenuContainer = styled<
  {
    $default?: VNodeChild;
  },
  "div"
>("div", ({}, { slots }) => {
  return (Wrap) => {
    return (
      <Wrap>
        <div data-menu-list>{slots.default?.()}</div>
      </Wrap>
    );
  };
})({
  py: 4,
  px: 4,
  rounded: "xs",
  shadow: "3",
  containerStyle: "sys.surface",
  pos: "relative",
  zIndex: 100,

  $data_menu_list: {
    maxH: "40vh",
    overflow: "auto",
  },

  textStyle: "sys.label-small",
  fontSize: 12,
});

export const MenuItemGroup = styled<
  {
    $title?: VNodeChild;
    $default?: VNodeChild;
  },
  "div"
>("div", ({}, { slots }) => {
  return (Wrap) => (
    <Wrap>
      {slots.title ? (
        <div data-title={""}>
          <span>{slots.title?.()}</span>
        </div>
      ) : null}
      {slots.default?.()}
    </Wrap>
  );
})({
  "& > [data-title]": {
    position: "sticky",
    top: 0,

    textStyle: "sys.label-small",
    px: 8,

    "& > span": {
      display: "block",
      opacity: 0.58,
      py: 4,
    },
  },

  "& + &": {
    "& > [data-title]": {
      "&:before": {
        content: `""`,
        display: "block",
        borderTop: "1px solid",
        borderColor: variant("sys.outline-variant", alpha(0.38)),
        mt: 8,
        pb: 8,
      },
    },
  },
});

export const MenuItem = styled<
  {
    active?: boolean;
    $default?: VNodeChild;
  },
  "div"
>("div", (props, { slots }) => {
  return (Wrap) => (
    <Wrap data-active={props.active}>
      {!isUndefined(props.active) && <Icon data-check-icon path={mdiCheck} />}
      {slots.default?.()}
    </Wrap>
  );
})({
  py: 6,
  px: 12,

  rounded: "xs",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  gap: 4,

  [`[data-check-icon]`]: {
    visibility: "hidden",
  },

  _hover: {
    cursor: "pointer",
    bgColor: variant("sys.on-surface", alpha(0.08)),
  },

  _focus: {
    bgColor: variant("sys.on-surface", alpha(0.08)),
  },

  _active: {
    color: "sys.primary",

    [`[data-check-icon]`]: {
      visibility: "visible",
    },
  },
});

export const handleMenuValueSelected =
  (onMenuValueSelected: (v: string) => void) => (e: Event) => {
    const target = [e.target, ...e.composedPath()].find((t) => {
      return (t as HTMLElement)?.hasAttribute?.("data-value");
    });

    if (target) {
      const v = (target as HTMLElement)?.getAttribute("data-value");
      if (v !== null) {
        onMenuValueSelected(v);
      }
    }
  };

export const Menu = component<{
  isOpen?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  placement?: import("@floating-ui/dom").Placement;

  onDidOpen?: () => void;
  onDidClose?: () => void;
  onSelected?: (value: string) => void;

  $menu: VNodeChild;
  $default: VNodeChild;
}>((props, { slots, emit }) => {
  const isOpen$ = observableRef(false);

  watch(
    () => props.isOpen,
    (o) => {
      isOpen$.value = o ?? isOpen$.value;
    },
  );

  watch(
    () => isOpen$.value,
    (o) => {
      if (o) {
        emit("did-open");
      } else {
        emit("did-close");
      }
    },
  );

  const handleTriggerClick = () => {
    isOpen$.value = true;
  };

  const handleItemClick = handleMenuValueSelected((dataValue) => {
    emit("selected", dataValue);
    isOpen$.value = false;
  });

  return () => {
    const trigger = slots.default?.()[0];

    return (
      <Popper
        isOpen={!props.disabled && isOpen$.value}
        onClickOutside={() => {
          isOpen$.value = false;
        }}
        placement={props.fullWidth ? "bottom-start" : props.placement}
        middleware={props.fullWidth ? [sameWidth] : undefined}
        $content={
          <MenuContainer onClick={handleItemClick}>
            {slots.menu?.() ?? []}
          </MenuContainer>
        }
      >
        {trigger
          ? !props.disabled
            ? cloneVNode(trigger, {
                onClick: handleTriggerClick,
              })
            : cloneVNode(trigger, {
                "data-disabled": props.disabled,
              })
          : null}
      </Popper>
    );
  };
});
