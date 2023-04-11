import { component } from "@innoai-tech/vuekit";
import { Box } from "@innoai-tech/vueuikit";

export default component(() => () => (
  <Box
    sx={{
      display: "flex",
      width: "100%",
      height: "100%",
      alignItems: "center",
      justifyContent: "center",
      textStyle: "sys.display-large"
    }}
  >
    Vuekit
  </Box>
));
