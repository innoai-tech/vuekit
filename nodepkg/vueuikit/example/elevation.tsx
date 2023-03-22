import { component } from "@innoai-tech/vuekit";
import { Box, ThemeProvider } from "@innoai-tech/vueuikit";
import { Container } from "@webapp/vuekit/layout";

export default component(() => {
  const theme = ThemeProvider.use();

  return () => (
    <Container>
      {Object.keys(theme.token.elevation.tokens).map((elevation) => (
        <Box
          key={elevation}
          sx={{
            mt: 16,
            p: 16,
            rounded: "lg",
            transitionDuration: "md4",
            transitionTimingFunction: "standard",
            shadow: elevation as any,
            "&:hover": {
              shadow: `${1 + parseInt(elevation)}` as any,
            },
          }}
        >
          <div>Elevation {elevation}</div>
        </Box>
      ))}
    </Container>
  );
});
