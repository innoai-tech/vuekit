import { component } from "@innoai-tech/vuekit";
import { Box, ThemeProvider } from "@innoai-tech/vueuikit";

export default component(() => {
  const theme = ThemeProvider.use();

  return () => (
    <>
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

            _hover: {
              shadow: `${1 + parseInt(elevation)}` as any,
            },
          }}
        >
          <div>Elevation {elevation}</div>
        </Box>
      ))}
    </>
  );
});
