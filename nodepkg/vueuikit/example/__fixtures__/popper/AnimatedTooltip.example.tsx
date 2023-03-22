import { ref } from "vue";
import { component } from "@innoai-tech/vuekit";
import {
  Box,
  defineTransition,
  Popper,
  transition,
  triangle,
} from "@innoai-tech/vueuikit";

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
  }
);

export default component(() => {
  const isOpen = ref(true);

  return () => (
    <Popper
      isOpen={isOpen.value}
      transition={FadeInOutTransition}
      content={
        <Box sx={{ pt: "4px" }}>
          <Box
            sx={{
              "[data-popper-placement='bottom'] &": {
                top: "0",
                ...triangle({
                  pointingDirection: "top",
                  height: "4px",
                  width: "8px",
                  foregroundColor: "sys.on-surface",
                }),
              },
            }}
            data-popper-arrow
          />
          <Box
            sx={{
              containerStyle: "sys.on-surface",
              shadow: "2",
              py: 2,
              px: 4,
              rounded: "sm",
            }}
          >
            Popper {`${isOpen.value}`}!
          </Box>
        </Box>
      }
    >
      <Box
        sx={{ p: 4 }}
        component={"button"}
        onMouseover={() => (isOpen.value = true)}
        onMouseout={() => (isOpen.value = false)}
      >
        Animated Popper
      </Box>
    </Popper>
  );
});
