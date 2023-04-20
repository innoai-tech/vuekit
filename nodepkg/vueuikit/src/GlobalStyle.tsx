import { component, z } from "@innoai-tech/vuekit";
import { ThemeProvider } from "./ThemeProvider";
import { type SystemStyleObject } from "./theming";
import { CacheProvider } from "./CacheProvider";
import { isString } from "@innoai-tech/lodash";
import { useInsertStyles } from "./useInsertStyles";
import { onBeforeMount } from "vue";

export const GlobalStyle = component(
  { styles: z.custom<SystemStyleObject | string>() },
  ({ styles }) => {
    const theme = ThemeProvider.use();
    const cache = CacheProvider.use();

    const insert = useInsertStyles(cache);

    const serialized = theme.unstable_css(
      cache,
      isString(styles) ? ({ "&": styles } as any) : styles
    );

    onBeforeMount(() => {
      insert({
        serialized,
        withoutScoping: true
      });
    });

    return () => null;
  }
);
