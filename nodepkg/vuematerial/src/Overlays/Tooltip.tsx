import {
  defineTransition,
  transition,
  Popper,
  styled
} from "@innoai-tech/vueuikit";
import { component, z } from "@innoai-tech/vuekit";
import { type VNode, cloneVNode, ref } from "vue";

const FadeInOutTransition = defineTransition(
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

const TooltipContainer = styled("div")({
  py: 4,
  px: 12,
  rounded: "sm",
  shadow: "3",
  containerStyle: "sys.on-surface",
  pos: "relative",
  zIndex: 100
});

export const Tooltip = component(
  {
    title: z.custom<string | VNode>(),
    $default: z.custom<JSX.Element>()
  },
  (props, { slots }) => {
    const isOpen = ref(false);

    return () => {
      const child = slots.default()[0];

      return (
        <Popper
          isOpen={isOpen.value}
          transition={FadeInOutTransition}

          $content={<TooltipContainer>{props.title}</TooltipContainer>}
        >
          {child
            ? cloneVNode(child, {
              onMouseover: () => (isOpen.value = true),
              onMouseout: () => (isOpen.value = false)
            })
            : null}
        </Popper>
      );
    };
  }
);
