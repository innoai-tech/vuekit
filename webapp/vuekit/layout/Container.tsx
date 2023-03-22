import {
  component
} from "@innoai-tech/vuekit";

import { Box } from "@innoai-tech/vueuikit";

export const Container = component(({}, { slots }) => {
  return () => (
    <Box sx={{ padding: 24, overflowY: "auto" }}>
      {slots}
    </Box>
  );
});
