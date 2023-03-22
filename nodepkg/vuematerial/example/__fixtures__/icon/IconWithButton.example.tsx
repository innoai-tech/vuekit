import { component } from "@innoai-tech/vuekit";
import { mdiSend } from "@mdi/js";
import { Icon } from "@innoai-tech/vuematerial";
import { IconButton, FilledButton } from "@innoai-tech/vuematerial";
import { Box } from "@innoai-tech/vueuikit";

export default component(() => {
  return () => (
    <Box sx={{ display: "flex", gap: 8 }}>
      <IconButton>
        <Icon path={mdiSend} />
      </IconButton>
      <FilledButton>
        Send
        <Icon path={mdiSend} placement="end" />
      </FilledButton>
    </Box>
  );
});
