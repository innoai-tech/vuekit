import {
  t,
  component,
  type VElementType,
  type OverridableComponent
} from "@innoai-tech/vuekit";
import { watch, onMounted } from "vue";
import { ThemeProvider } from "./ThemeProvider";
import { type SystemStyleObject } from "./theming";
import { CacheProvider } from "./CacheProvider";
import { useInsertStyles } from "./useInsertStyles";
import { isEqual } from "@innoai-tech/lodash";

export type SxProps = {
  sx: SystemStyleObject;
};

export const Box: OverridableComponent<{
  props: SxProps;
  defaultComponent: "div";
}> = component(
  {
    sx: t.custom<SystemStyleObject>(),
    component: t.custom<VElementType>().optional().default("div")
  },
  (props, { slots }) => {
    const theme = ThemeProvider.use();
    const cache = CacheProvider.use();

    if ((process.env as any).NODE_ENV == "development") {
      watch(
        () => props.sx,
        (current, prev) => {
          if (!isEqual(prev, current)) {
            console.error("props.sx must static object");
          }
        }
      );
    }

    const serialized = theme.unstable_css(cache, props.sx ?? {});

    const className = () => {
      return serialized.name != "0" ? `${cache.key}-${serialized.name}` : ``;
    };

    const insertStyle = useInsertStyles(cache);

    onMounted(() => {
      insertStyle({
        serialized: serialized,
        isStringTag: true
      });
    });

    return () => {
      const Component: any = props.component ?? "div";
      return <Component class={className()}>{slots}</Component>;
    };
  }
) as any;
