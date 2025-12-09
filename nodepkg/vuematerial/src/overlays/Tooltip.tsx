import { component } from "@innoai-tech/vuekit";
import { Popper, styled } from "@innoai-tech/vueuikit";
import { cloneVNode, ref, type VNodeChild } from "vue";
import { FadeInOutTransition } from "./transitions.tsx";

const TooltipContainer = styled("div")({
  mt: 4,
  py: 2,
  px: 8,
  rounded: "xs",
  shadow: "3",
  containerStyle: "sys.on-surface",
  textStyle: "sys.body-small",
  pos: "relative",
  pointerEvents: "none",
  maxW: "24vw",
  zIndex: 100,
});

export const Tooltip = component<{
  title?: string;
  $title?: VNodeChild;
  $default?: VNodeChild;
}>((props, { slots }) => {
  const isOpen = ref(false);
  const triggerRef = ref<HTMLElement | null>(null);

  function resolveElement(el: any): HTMLElement | null {
    if (el) {
      if (el instanceof HTMLElement) {
        return el;
      }
      if (el instanceof Text) {
        return resolveElement(el.nextElementSibling);
      }
    }
    return null;
  }

  return () => {
    const $trigger = slots.default ? slots.default()[0] : null;
    const $title = slots.title ? slots.title() : props.title;

    if ($title) {
      return (
        <Popper
          isOpen={isOpen.value}
          onClickOutside={() => (isOpen.value = false)}
          $transition={({ content }) => <FadeInOutTransition>{content}</FadeInOutTransition>}
          $content={<TooltipContainer>{$title}</TooltipContainer>}
        >
          {$trigger
            ? cloneVNode($trigger, {
                onVnodeMounted: (node) => {
                  triggerRef.value = resolveElement(node.el);
                },
                onMouseover: () => {
                  isOpen.value = true;
                },
                onMouseleave: () => {
                  isOpen.value = false;
                },
              })
            : null}
        </Popper>
      );
    }

    return $trigger;
  };
});
