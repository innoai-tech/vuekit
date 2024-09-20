## Normal Popper

```tsx preview
import { component } from "@innoai-tech/vuekit";
import { Box, Popper } from "@innoai-tech/vueuikit";
import { size } from "@floating-ui/dom";
import { ref } from "vue";

export default component(() => {
  const isOpen = ref(false);

  const sameWidth = size({
    apply({ elements, rects }) {
      Object.assign(elements.floating.style, {
        width: `${rects.reference.width}px`
      });
    }
  });

  return () => (
    <Popper
      isOpen={isOpen.value}
      onClickOutside={() => (isOpen.value = false)}
      placement={"bottom-start"}
      modifiers={[sameWidth]}
      $content={
        <Box sx={{ containerStyle: "sys.on-surface" }}>
          Popper {`${isOpen.value}`}!
        </Box>
      }
    >
      <Box
        sx={{ p: 4 }}
        component={"button"}
        onClick={() => (isOpen.value = !isOpen.value)}
      >
        Click Trigger Popper
      </Box>
    </Popper>
  );
});
```

## Hovered Popper

```tsx preview
import { ref } from "vue";
import { component } from "@innoai-tech/vuekit";
import { Box, Popper } from "@innoai-tech/vueuikit";

export default component(() => {
  const isOpen = ref(false);

  return () => (
    <Popper
      isOpen={isOpen.value}
      $content={
        <Box sx={{ containerStyle: "sys.on-surface" }}>Popper Content!</Box>
      }
    >
      <Box
        component={"button"}
        sx={{ p: 4 }}
        onMouseover={() => (isOpen.value = true)}
        onMouseout={() => (isOpen.value = false)}
      >
        Popper Trigger
      </Box>
    </Popper>
  );
});
```

## Animated

```tsx preview
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
  },
);

export default component(() => {
  const isOpen = ref(true);

  return () => (
    <Popper
      isOpen={isOpen.value}
      $transition={({ content }) => (
        <FadeInOutTransition>{content}</FadeInOutTransition>
      )}
      $content={
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
```
