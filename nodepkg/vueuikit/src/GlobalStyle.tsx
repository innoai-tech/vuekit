import { component, z } from "@innoai-tech/vuekit";
import { ThemeProvider } from "./ThemeProvider";
import { type SystemStyleObject } from "./theming";
import { CacheProvider } from "./CacheProvider";
import { isString } from "@innoai-tech/lodash";
import { Insertion } from "./Insertion";

export const GlobalStyle = component(
  { styles: z.custom<SystemStyleObject | string>() },
  ({ styles }) => {
    const theme = ThemeProvider.use();
    const cache = CacheProvider.use();

    const serialized = theme.unstable_css(
      cache,
      isString(styles) ? ({ "&": styles } as any) : styles
    );

    return () => <Insertion serialized={serialized} withoutScoping={true} />;
  }
);
