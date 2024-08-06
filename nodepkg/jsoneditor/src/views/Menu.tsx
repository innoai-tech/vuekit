import {
  component$,
  ImmerBehaviorSubject,
  rx,
  type VNodeChild
} from "@innoai-tech/vuekit";
import {
  defineTransition,
  Popper,
  styled,
  transition
} from "@innoai-tech/vueuikit";
import { isUndefined } from "@innoai-tech/lodash";

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
          $transition={(ctx: any) => (
            <FadeInOutTransition>{ctx.content}</FadeInOutTransition>
          )}
          placement={"bottom-start"}
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
          $transition={(ctx: any) => (
            <FadeInOutTransition>{ctx.content}</FadeInOutTransition>
          )}
          placement={"bottom-start"}
          $content={<PopoverContainer>{slots.content?.()}</PopoverContainer>}
        >
          {slots.default?.()?.[0] ?? null}
        </Popper>
      );
    })
  );
});

export class PopupStatus extends ImmerBehaviorSubject<boolean> {
  show() {
    this.next(true);
  }

  hide() {
    this.next(false);
  }
}

export const PopoverContainer = styled("div")({
  py: 4,
  rounded: "sm",
  shadow: "1",
  containerStyle: "sys.surface",
  textStyle: "sys.body-small",
  pos: "relative",
  maxW: "30vw"
});

export const MenuItem = styled("div")({
  px: 12,
  py: 8,
  gap: 23,
  display: "flex",
  alignItems: "start",
  justifyContent: "space-between",
  textAlign: "right",
  textStyle: "sys.body-small",

  cursor: "pointer",

  _hover: {
    containerStyle: "sys.surface-container"
  }
});

export const FadeInOutTransition = defineTransition(
  {
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    },
    duration: transition.duration.md1,
    easing: transition.easing.standard.accelerate
  },
  {
    from: {
      opacity: 1
    },
    to: {
      opacity: 0
    },
    duration: transition.duration.sm4,
    easing: transition.easing.standard.decelerate
  }
);
