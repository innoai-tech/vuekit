import {
  createProvider,
  z,
  component,
  type Component,
  rx,
  toObservable,
  tapEffect,
  subscribeUntilUnmount
} from "@innoai-tech/vuekit";
import {
  Teleport,
  onBeforeUnmount,
  ref,
  unref,
  type Ref,
  type CSSProperties,
  type VNodeChild
} from "vue";

const OverlayProvider = createProvider<OverlayContext>(
  () => {
    return new OverlayContext(ref(null), ref(null));
  },
  {
    name: "Overlay"
  }
);

class OverlayContext {
  private children: OverlayContext[] = [];

  constructor(
    private triggerRef: Ref<HTMLElement | null>,
    private contentRef: Ref<HTMLDivElement | null>
  ) {
  }

  add = (p: OverlayContext) => {
    this.children = [...this.children, p];

    return () => {
      this.children = this.children.filter((c) => c !== p);
    };
  };

  isClickInside = (event: Event) => {
    for (const child of this.children) {
      if (child.isClickInside(event)) {
        return true;
      }
    }

    const triggerEl = unref(this.triggerRef);
    const contentEl = unref(this.contentRef);

    return (
      (triggerEl &&
        (triggerEl === event.target ||
          event.composedPath().includes(triggerEl))) ||
      (contentEl &&
        (contentEl === event.target ||
          event.composedPath().includes(contentEl)))
    );
  };

  topmost() {
    return this.children.length == 0;
  }
}

export const Overlay = component(
  {
    isOpen: z.boolean().optional(),
    style: z.custom<CSSProperties>().optional(),
    contentRef: z.custom<Ref<HTMLDivElement | null>>().optional(),
    triggerRef: z.custom<Ref<HTMLElement | null>>().optional(),
    transition: z.custom<Component<any>>().optional(),

    onClickOutside: z.custom<(e: Event) => void>(),
    onEscKeydown: z.custom<(e: Event) => void>(),

    $default: z.custom<VNodeChild>().optional()
  },
  (props, { slots, attrs, emit }) => {
    const contentRef = props.contentRef || ref<HTMLDivElement | null>(null);

    const popperContext = new OverlayContext(
      props.triggerRef ?? ref(null),
      contentRef
    );

    const parent = OverlayProvider.use();
    onBeforeUnmount(parent.add(popperContext));

    if (window) {
      rx(
        toObservable(contentRef, "value"),
        tapEffect((contentEl) => {
          if (!contentEl) {
            return;
          }

          const handleClickOutside = (event: Event) => {
            if (popperContext.isClickInside(event)) {
              return;
            }
            emit("click-outside", event);
          };

          window.addEventListener("pointerdown", handleClickOutside);
          return () => {
            window.removeEventListener("pointerdown", handleClickOutside);
          };
        }),

        tapEffect((contentEl) => {
          if (!contentEl) {
            return;
          }

          const handleEscKeydown = (event: KeyboardEvent) => {
            if (event.key === "Escape" && popperContext.topmost()) {
              emit("esc-keydown", event);
            }
          };

          window.addEventListener("keydown", handleEscKeydown);
          return () => {
            window.removeEventListener("keydown", handleEscKeydown);
          };
        }),
        subscribeUntilUnmount()
      );
    }

    return () => {
      const MayTransition = props.transition;

      const content = props.isOpen ? (
        <div {...attrs} ref={contentRef} style={props.style}>
          <OverlayProvider value={popperContext}>
            <>{slots.default?.()}</>
          </OverlayProvider>
        </div>
      ) : null;

      return (
        <Teleport to="body">
          {MayTransition ? <MayTransition>{content}</MayTransition> : content}
        </Teleport>
      );
    };
  },
  {
    inheritAttrs: false,
    name: "Overlay"
  }
);
