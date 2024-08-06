import { component$, rx, type VNodeChild } from "@innoai-tech/vuekit";
import {
  Popper,
  styled
} from "@innoai-tech/vueuikit";
import { cloneVNode } from "vue";
import { FadeInOutTransition, PopupStatus } from "./Menu.tsx";
import type { Placement } from "@popperjs/core";

export const Tooltip = component$<{
  $title: VNodeChild
  placement?: Placement
  $default?: VNodeChild
}>((props, { slots, render }) => {
    const open$ = new PopupStatus(false);

    return rx(
      open$,
      render((isOpen) => {
        const child = slots.default?.()[0];

        return (
          <Popper
            isOpen={isOpen}
            placement={props.placement ?? "left"}
            $content={(
              <TooltipWrapper>
                <TooltipContainer>
                  {slots.title()}
                </TooltipContainer>
              </TooltipWrapper>
            )}
            $transition={(ctx) => (
              <FadeInOutTransition>
                {ctx.content}
              </FadeInOutTransition>
            )}
          >
            {child
              ? cloneVNode(child, {
                onMouseover: () => {
                  open$.show();
                },
                onMouseout: () => {
                  open$.hide();
                }
              })
              : null}
          </Popper>
        );
      })
    );
  }
);


const TooltipContainer = styled("div")({
  py: 4,
  px: 12,
  rounded: "xs",
  shadow: "3",
  textStyle: "sys.body-small",
  containerStyle: "sys.on-surface",
  pos: "relative",
  zIndex: 100
});

const TooltipWrapper = styled("div")({
  px: 8
});

