import { type VNode, type VNodeChild, component } from "@innoai-tech/vuekit";
import {
  type Modifier,
  type Placement,
  createPopperLite,
  flip
} from "@popperjs/core";
import type { ModifierArguments, State } from "@popperjs/core";
import { cloneVNode, type CSSProperties, type Ref, ref, watch } from "vue";
import { Overlay } from "./Overlay";

export function createPopperModifier<Options extends Record<string, any>>(
  fn: (o: ModifierArguments<Options>) => State | undefined,
  options: Omit<Modifier<string | Symbol, Options>, "fn" | "enabled">
): Modifier<string | Symbol, Options> {
  return {
    fn,
    enabled: true,
    ...options
  };
}

export const Popper = component<{
  isOpen?: boolean,
  style?: CSSProperties,
  contentRef?: Ref<HTMLDivElement | null>,
  triggerRef?: Ref<HTMLElement | null>,
  onClickOutside?: (e: Event) => void,
  onEscKeydown?: (e: Event) => void,
  onContentBeforeMount?: () => void,
  $transition?: (ctx: { content: JSX.Element | null }) => VNodeChild,
  $default?: JSX.Element | null,
  $content?: VNodeChild,

  placement?: Placement,
  modifiers?: Array<Modifier<any, any>>
}>((props, { slots, emit, attrs }) => {
    const triggerRef = ref<HTMLElement | null>(null);
    const contentRef = ref<HTMLDivElement | null>(null);

    watch(
      () => contentRef.value,
      (contentEl) => {
        if (contentEl && triggerRef.value) {
          createPopperLite(triggerRef.value, contentEl, {
            placement: props.placement ?? "bottom",
            modifiers: [...(props.modifiers ?? []), flip]
          });
        }
      }
    );

    return () => {
      const trigger = slots.default?.()[0];

      if (!trigger) {
        return null;
      }

      return (
        <>
          {cloneVNode(trigger, {
            ...attrs,
            onVnodeMounted: (n) => {
              triggerRef.value = resolveElement(n.el);
            }
          })}
          <Overlay
            triggerRef={triggerRef}
            contentRef={contentRef}
            isOpen={props.isOpen}
            onClickOutside={(event) => emit("click-outside", event)}
            style={{ zIndex: 100 }}
            $transition={slots.transition}
          >
            {slots.content?.()}
          </Overlay>
        </>
      );
    };
  },
  {
    name: "Popper",
    inheritAttrs: false
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
