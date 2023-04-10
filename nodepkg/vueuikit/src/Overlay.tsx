import {
  createProvider,
  z,
  component,
  type Component
} from "@innoai-tech/vuekit";
import { Teleport, onBeforeUnmount, ref, unref, type Ref, watch, type CSSProperties } from "vue";

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
}

export const Overlay = component(
  {
    isOpen: z.boolean().optional(),
    style: z.custom<CSSProperties>().optional(),
    contentRef: z.custom<Ref<HTMLDivElement | null>>().optional(),
    transition: z.custom<Component<any>>().optional(),
    onClickOutside: z.custom<(e: Event) => void>()
  },
  (props, { slots, attrs, emit }) => {
    const contentRef = props.contentRef || ref<HTMLDivElement | null>(null);

    const popperContext = new OverlayContext(ref(null), contentRef);

    const parent = OverlayProvider.use();
    onBeforeUnmount(parent.add(popperContext));

    if (window) {
      const event = "pointerdown";

      const handleClickOutside = (event: Event) => {
        if (popperContext.isClickInside(event)) {
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
        <div {...attrs} ref={contentRef} style={props.style}>
          <OverlayProvider value={popperContext}>
            {slots.default?.()}
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
    inheritAttrs: false
  }
);
