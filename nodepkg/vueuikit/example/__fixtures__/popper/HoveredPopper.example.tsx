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
