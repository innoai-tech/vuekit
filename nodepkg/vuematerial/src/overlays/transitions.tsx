import { defineTransition, transition } from "@innoai-tech/vueuikit";

export const FadeInOutTransition = defineTransition(
  {
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
    duration: transition.duration.md1,
    easing: transition.easing.standard.accelerate,
  },
  {
    from: {
      opacity: 1,
    },
    to: {
      opacity: 0,
    },
    duration: transition.duration.sm4,
    easing: transition.easing.standard.decelerate,
  },
);

export const SlideInOutTransitions = {
  left: defineTransition(
    {
      from: {
        transform: "translateX(-100%)",
      },
      to: {
        transform: "translateX(0%)",
      },
      duration: transition.duration.sm4,
      easing: transition.easing.standard.decelerate,
    },
    {
      from: {
        transform: "translateX(0%)",
      },
      to: {
        transform: "translateX(-120%)",
      },
      duration: transition.duration.sm1,
      easing: transition.easing.standard.accelerate,
    },
  ),
  right: defineTransition(
    {
      from: {
        transform: "translateX(100%)",
      },
      to: {
        transform: "translateX(0%)",
      },
      duration: transition.duration.sm4,
      easing: transition.easing.standard.decelerate,
    },
    {
      from: {
        transform: "translateX(0%)",
      },
      to: {
        transform: "translateX(120%)",
      },
      duration: transition.duration.sm1,
      easing: transition.easing.standard.accelerate,
    },
  ),
  top: defineTransition(
    {
      from: {
        transform: "translateY(-100%)",
      },
      to: {
        transform: "translateY(0%)",
      },
      duration: transition.duration.sm4,
      easing: transition.easing.standard.decelerate,
    },
    {
      from: {
        transform: "translateY(0%)",
      },
      to: {
        transform: "translateY(-120%)",
      },
      duration: transition.duration.sm1,
      easing: transition.easing.standard.accelerate,
    },
  ),
  bottom: defineTransition(
    {
      from: {
        transform: "translateY(100%)",
      },
      to: {
        transform: "translateY(0%)",
      },
      duration: transition.duration.sm4,
      easing: transition.easing.standard.decelerate,
    },
    {
      from: {
        transform: "translateY(0%)",
      },
      to: {
        transform: "translateY(120%)",
      },
      duration: transition.duration.sm1,
      easing: transition.easing.standard.accelerate,
    },
  ),
};
