import {
  component$,
  ImmerBehaviorSubject,
  type ObservableRef,
  rx,
  subscribeUntilUnmount,
  type VNodeChild
} from "@innoai-tech/vuekit";
import { alpha, Popper, styled, variant } from "@innoai-tech/vueuikit";
import { isUndefined } from "@innoai-tech/lodash";
import { size } from "@floating-ui/dom";
import { delay, EMPTY, fromEvent, merge, switchMap, tap } from "rxjs";

export class PopupStatus extends ImmerBehaviorSubject<boolean> {
  static from<T extends HTMLElement | null>(el$: ObservableRef<T>) {
    const status$ = new PopupStatus(false);

    rx(
      el$,
      switchMap((inputEl) => {
        if (inputEl) {
          return merge(
            rx(
              fromEvent<FocusEvent>(inputEl, "focus"),
              tap(() => {
                status$.show();
              })
            ),
            rx(
              fromEvent<FocusEvent>(inputEl, "blur"),
              // delay to avoid break other actions
              delay(10),
              tap(() => {
                status$.hide();
              })
            )
          );
        }

        return EMPTY;
      }),
      subscribeUntilUnmount()
    );

    return status$;
  }

  show() {
    this.next(true);
  }

  hide() {
    this.next(false);
  }
}

const sameWidth = size({
  apply({ elements, rects }) {
    Object.assign(elements.floating.style, {
      width: `${rects.reference.width}px`
    });
  }
});

export const Menu = component$<{
  open$?: PopupStatus;
  onSelected?: (prop: any) => void;
  $content?: VNodeChild;
  $default?: VNodeChild;
}>((props, { emit, slots, render }) => {
  const open$ = props.open$ ?? new PopupStatus(false);

  const handleSelected = (e: Event) => {
    const $el = [e.target, ...e.composedPath()].find((t) => {
      return (t as HTMLElement)?.hasAttribute?.("data-value");
    }) as HTMLElement | undefined;

    if ($el) {
      const selected = $el.getAttribute("data-value");

      if (!isUndefined(selected)) {
        emit("selected", selected);

        open$.hide();
      }
    }
  };

  return rx(
    open$,
    render((isOpen) => {
      return (
        <Popper
          isOpen={isOpen}
          onClickOutside={() => open$.hide()}
          onEscKeydown={() => open$.hide()}
          placement={"bottom-start"}
          middleware={[sameWidth]}
          $content={
            <PopoverContainer onClick={handleSelected}>
              {slots.content?.()}
            </PopoverContainer>
          }
        >
          {slots.default?.()?.[0] ?? null}
        </Popper>
      );
    })
  );
});

export const Popover = component$<{
  open$?: PopupStatus;
  $content?: VNodeChild;
  $default?: VNodeChild;
}>((props, { slots, render }) => {
  const open$ = props.open$ ?? new PopupStatus(false);

  return rx(
    open$,
    render((isOpen) => {
      return (
        <Popper
          isOpen={isOpen}
          onClickOutside={() => open$.hide()}
          placement={"bottom-start"}
          $content={<PopoverContainer>{slots.content?.()}</PopoverContainer>}
        >
          {slots.default?.()?.[0] ?? null}
        </Popper>
      );
    })
  );
});

export const PopoverContainer = styled("div")({
  textStyle: "sys.body-small",
  pos: "relative",
  roundedBottom: "sm",
  containerStyle: "sys.surface-container-lowest",
  borderBottom: "1px solid",
  borderRight: "1px solid",
  borderLeft: "1px solid",
  borderColor: variant("sys.outline-variant", alpha(0.38))
});

export const MenuItem = styled("div")({
  px: 8,
  py: 2,
  gap: 8,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  textAlign: "right",
  textStyle: "sys.body-small",
  cursor: "pointer",

  _hover: {
    containerStyle: "sys.surface-container"
  },

  _focus: {
    containerStyle: "sys.surface-container",
    outline: 0
  }
});
