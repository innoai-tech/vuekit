import { component } from "@innoai-tech/vuekit";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "./ThemeProvider";

export const CSSReset = component(() => {
  const theme = ThemeProvider.use();

  const rootVars = theme.rootCSSVars;

  return () => (
    <GlobalStyle
      styles={{
        ":host, :root, [data-theme]": rootVars,

        "*, *::after, *::before": {
          boxSizing: "border-box",
        },

        html: {
          fontSize: "10px",
        },

        a: {
          color: "inherit",
        },

        body: {
          textStyle: "sys.body-medium",
        },
      }}
    />
  );
});
