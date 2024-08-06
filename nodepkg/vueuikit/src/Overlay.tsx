/// <reference lib="dom" />

import {
  component,
  createProvider,
  rx,
  subscribeUntilUnmount,
  tapEffect,
  toObservable
} from "@innoai-tech/vuekit";
import {
  type CSSProperties,
  type Ref,
  Teleport,
  type VNodeChild,
  cloneVNode,
  onBeforeUnmount,
  ref,
  unref
} from "vue";

export const OverlaySettingProvider = createProvider(
  () => {
    return {
      mountPoint: () => document.body
    };
  },
  {
    name: "OverlaySetting"
  }
);

const OverlayProvider = createProvider<OverlayContext>(
  () => {
    return new OverlayContext(ref(null), ref(null), () => false);
  },
  {
    name: "Overlay"
  }
);

class OverlayContext {
  private children: OverlayContext[] = [];

  constructor(
    private triggerRef: Ref<HTMLElement | null>,
    private contentRef: Ref<HTMLDivElement | null>,
    private isOpen: () => boolean
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
    return this.children.filter((c) => c.isOpen()).length === 0;
  }
}

export const Overlay = component<{
  isOpen?: boolean,
  style?: CSSProperties,
  contentRef?: Ref<HTMLDivElement | null>,
  triggerRef?: Ref<HTMLElement | null>,

  onClickOutside?: (e: Event) => void,
  onEscKeydown?: (e: Event) => void,
  onContentBeforeMount?: () => void,

  $transition?: (ctx: { content: JSX.Element | null }) => VNodeChild,
  $default?: VNodeChild,
}>(
  (props, { slots, attrs, emit }) => {
    const contentRef = props.contentRef || ref<HTMLDivElement | null>(null);

    const popperContext = new OverlayContext(
      props.triggerRef ?? ref(null),
      contentRef,
      () => !!props.isOpen
    );

    const setting = OverlaySettingProvider.use();

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
      const content = props.isOpen
        ? cloneVNode(
          <div {...attrs} ref={contentRef} style={props.style}>
            <OverlayProvider value={popperContext}>
              {slots.default?.()}
            </OverlayProvider>
          </div>,
          {
            onVnodeBeforeMount: () => {
              emit("content-before-mount");
            }
          }
        )
        : null;

      return (
        <Teleport to={setting.mountPoint()}>
          {slots.transition ? slots.transition({ content }) : content}
        </Teleport>
      );
    };
  },
  {
    name: "Overlay",
    inheritAttrs: false
  }
);
