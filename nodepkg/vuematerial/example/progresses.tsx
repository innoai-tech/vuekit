import { component } from "@innoai-tech/vuekit";
import { Progress } from "@innoai-tech/vuematerial";
import { Container } from "@webapp/vuekit/layout";
import { Box } from "@innoai-tech/vueuikit";

export default component(() => {
  return () => (
    <Container>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <Progress progress={0.2} />
        <Progress progress={1} />
      </Box>
    </Container>
  );
});
