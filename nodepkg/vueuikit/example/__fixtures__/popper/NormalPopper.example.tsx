import { component } from "@innoai-tech/vuekit";
import { Box, Popper } from "@innoai-tech/vueuikit";
import { ref } from "vue";

export default component(() => {
  const isOpen = ref(false);

  return () => (
    <Popper
      isOpen={isOpen.value}
      onClickOutside={() => (isOpen.value = false)}
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
