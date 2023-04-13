import {
  createPopperLite,
  type Placement,
  arrow as arrowModify,
  flip
} from "@popperjs/core";
import { z, component } from "@innoai-tech/vuekit";
import { cloneVNode, ref, watch, type VNode } from "vue";
import { Overlay } from "./Overlay";

export const Popper = component(
  {
    isOpen: Overlay.propTypes.isOpen,
    transition: Overlay.propTypes.transition,
    onClickOutside: Overlay.propTypes.onClickOutside,

    placement: z.custom<Placement>().optional(),
    arrow: z.boolean().optional(),

    $content: z.custom<VNode>()
  },
  (props, { slots, emit }) => {
    const triggerRef = ref<HTMLElement | null>(null);
    const contentRef = ref<HTMLDivElement | null>(null);

    watch(
      () => contentRef.value,
      (contentEl) => {
        if (contentEl) {
          createPopperLite(triggerRef.value!, contentEl!, {
            placement: props.placement ?? "bottom",
            modifiers: [flip, ...(props.arrow ?? true ? [arrowModify] : [])]
          });
        }
      }
    );

    return () => {
      const trigger = slots.default?.()[0];

      return (
        <>
          {trigger &&
            cloneVNode(trigger, {
              onVnodeMounted: (n) => {
                triggerRef.value = resolveElement(n.el);
              }
            })}
          <Overlay
            contentRef={contentRef}
            isOpen={props.isOpen}
            transition={props.transition}
            onClickOutside={(event) => emit("click-outside", event)}
            style={{ zIndex: 100 }}
          >
            {slots.content?.()}
          </Overlay>
        </>
      );
    };
  },
  {
    name: "Popper"
  }
);

function resolveElement(el: VNode["el"]): HTMLElement | null {
  if (el) {
    if (el instanceof HTMLElement) {
      return el;
    }

    // Fragment
    if (el instanceof Text) {
      return resolveElement((el as any).nextElementSibling);
    }
  }
  return null;
}
