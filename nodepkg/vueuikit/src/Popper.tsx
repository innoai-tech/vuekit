import {
  component,
  observableRef,
  rx,
  subscribeUntilUnmount,
  tapEffect,
  type VNode,
  type VNodeChild,
} from "@innoai-tech/vuekit";
import {
  autoUpdate,
  computePosition,
  flip,
  type Middleware,
  type Placement,
  shift,
} from "@floating-ui/dom";
import { cloneVNode, type CSSProperties, type Ref } from "vue";
import { Overlay } from "./Overlay";
import { combineLatest } from "rxjs";

export const Popper = component<{
  isOpen?: boolean;
  style?: CSSProperties;
  contentRef?: Ref<HTMLDivElement | null>;
  triggerRef?: Ref<HTMLElement | null>;
  onClickOutside?: (e: Event) => void;
  onEscKeydown?: (e: Event) => void;
  onContentBeforeMount?: () => void;
  $transition?: (ctx: { content: JSX.Element | null }) => VNodeChild;
  $default?: JSX.Element | null;
  $content?: VNodeChild;

  placement?: Placement;
  middleware?: Middleware[];

  // deprecated use middleware instead
  modifiers?: Middleware[];
}>(
  (props, { slots, emit, attrs }) => {
    const triggerRef = observableRef<HTMLElement | null>(null);
    const contentRef = observableRef<HTMLDivElement | null>(null);

    rx(
      combineLatest([triggerRef, contentRef]),
      tapEffect(([triggerEf, contentEl]) => {
        if (contentEl && triggerEf) {
          const updatePosition = async () => {
            contentEl.style.position = "absolute";

            const { x, y } = await computePosition(triggerEf, contentEl, {
              placement: props.placement ?? "bottom",
              middleware: [
                ...(props.modifiers ?? []),
                ...(props.middleware ?? []),
                flip(),
                shift(),
              ],
            });

            Object.assign(contentEl.style, {
              left: `${x}px`,
              top: `${y}px`,
            });
          };

          const clean = autoUpdate(triggerEf, contentEl, updatePosition);

          return () => {
            clean();
          };
        }

        return () => {};
      }),
      subscribeUntilUnmount(),
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
            },
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
    inheritAttrs: false,
  },
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
