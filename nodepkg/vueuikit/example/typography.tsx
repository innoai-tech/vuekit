import { component } from "@innoai-tech/vuekit";
import { Box, ThemeProvider } from "@innoai-tech/vueuikit";
import { Container } from "@webapp/vuekit/layout";

export default component(() => {
  const theme = ThemeProvider.use();

  return () => (
    <Container>
      <Box
        sx={{
          height: "40vh",
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: 8,
        }}
      >
        {theme.token.textStyle.tokens.map((textStyle) => (
          <Box
            key={textStyle}
            sx={{
              flex: 1,
              rounded: "md",
              textStyle: textStyle as any,
              p: 16,
              border: "2px solid",
              borderColor: "sys.outline-variant",
              bgColor: "sys.surface-container",
              color: "sys.primary",
              minW: "10vw",
              whiteSpace: "nowrap",

              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                textStyle: "sys.label-small",
              }}
            >
              {textStyle}
            </Box>
            <Box sx={{ flex: 1 }} />
            <Box sx={{ py: 16 }}>中文测试</Box>
          </Box>
        ))}
      </Box>
    </Container>
  );
});
