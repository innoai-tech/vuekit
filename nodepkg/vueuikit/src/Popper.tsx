import {
  createPopperLite,
  type Placement,
  flip,
  type Modifier
} from "@popperjs/core";
import { z, component } from "@innoai-tech/vuekit";
import { cloneVNode, ref, watch, type VNode } from "vue";
import { Overlay } from "./Overlay";
import type {
  ModifierArguments,
  State
} from "@popperjs/core";

export function createPopperModifier<Options extends Record<string, any>>(
  fn: (o: ModifierArguments<Options>) => State | void,
  options: Omit<Modifier<string | Symbol, Options>, "fn" | "enabled">
): Modifier<string | Symbol, Options> {
  return {
    fn,
    enabled: true,
    ...options
  };
}

export const Popper = component(
  {
    isOpen: Overlay.propTypes.isOpen,
    transition: Overlay.propTypes.transition,
    onClickOutside: Overlay.propTypes.onClickOutside,

    placement: z.custom<Placement>().optional(),
    modifiers: z.custom<Array<Modifier<any, any>>>().optional(),

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
            modifiers: [...(props.modifiers ?? []), flip]
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
