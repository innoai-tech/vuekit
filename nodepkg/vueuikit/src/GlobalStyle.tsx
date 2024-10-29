import { isString } from "@innoai-tech/lodash";
import { component } from "@innoai-tech/vuekit";
import { onBeforeMount } from "vue";
import { CacheProvider } from "./CacheProvider";
import { ThemeProvider } from "./ThemeProvider";
import { type SystemStyleObject } from "./theming";
import { useInsertStyles } from "./useInsertStyles";

export const GlobalStyle = component<{
  styles: SystemStyleObject | string;
}>(({ styles }) => {
  const theme = ThemeProvider.use();
  const cache = CacheProvider.use();

  const insert = useInsertStyles(cache);

  const serialized = theme.unstable_css(
    cache,
    isString(styles) ? ({ "&": styles } as any) : styles,
  );

  onBeforeMount(() => {
    insert({
      serialized,
      withoutScoping: true,
    });
  });

  return () => null;
});
