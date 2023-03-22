import {
  createPopperLite,
  type Placement,
  arrow as arrowModify,
  flip,
} from "@popperjs/core";
import { z, component, type Component } from "@innoai-tech/vuekit";
import {
  cloneVNode,
  onBeforeUnmount,
  ref,
  Teleport,
  unref,
  type VNode,
  watch,
} from "vue";

export const Popper = component(
  {
    isOpen: z.boolean().optional(),
    content: z.custom<VNode>().optional(),
    placement: z.custom<Placement>().optional(),
    arrow: z.boolean().optional(),
    transition: z.custom<Component<{}, {}>>().optional(),
    onClickOutside: z.function().args(z.custom<Event>()),
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
            modifiers: [flip, ...(props.arrow ?? true ? [arrowModify] : [])],
          });
        }
      }
    );

    if (window) {
      const event = "pointerdown";

      const handleClickOutside = (event: Event) => {
        const triggerEl = unref(triggerRef);
        if (!triggerEl) {
          return;
        }

        const contentEl = unref(contentRef);
        if (!contentEl) {
          return;
        }

        if (
          triggerEl === event.target ||
          contentEl === event.target ||
          event.composedPath().includes(triggerEl) ||
          event.composedPath().includes(contentEl)
        ) {
          return;
        }

        emit("click-outside", event);
      };

      watch(
        () => contentRef.value,
        (contentEl) => {
          if (contentEl) {
            window.addEventListener(event, handleClickOutside);
          } else {
            window.removeEventListener(event, handleClickOutside);
          }
        }
      );

      onBeforeUnmount(() => {
        window.removeEventListener(event, handleClickOutside);
      });
    }

    return () => {
      const MayTransition = props.transition;
      const content = props.isOpen ? (
        <div ref={contentRef}>{props.content}</div>
      ) : null;

      return (
        <>
          {cloneVNode(slots["default"]?.()[0]!, {
            onVnodeMounted: (n) => {
              triggerRef.value = n.el as any;
            },
          })}
          <Teleport to="body">
            {MayTransition ? <MayTransition>{content}</MayTransition> : content}
          </Teleport>
        </>
      );
    };
  }
);
