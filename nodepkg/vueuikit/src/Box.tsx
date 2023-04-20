import {
  z,
  component,
  type VElementType,
  type OverridableComponent
} from "@innoai-tech/vuekit";
import { cloneVNode, ref, watch } from "vue";
import { ThemeProvider } from "./ThemeProvider";
import { type SystemStyleObject } from "./theming";
import { CacheProvider } from "./CacheProvider";
import { isString } from "@innoai-tech/lodash";
import { useInsertStyles } from "./useInsertStyles";

export type SxProps = {
  sx: SystemStyleObject;
};

export const Box: OverridableComponent<{
  props: SxProps;
  defaultComponent: "div";
}> = component(
  {
    sx: z.custom<SystemStyleObject>(),
    component: z.custom<VElementType>().optional().default("div")
  },
  (props, { slots }) => {
    const theme = ThemeProvider.use();
    const cache = CacheProvider.use();

    const serialized = ref(
      props.sx ? theme.unstable_css(cache, props.sx) : undefined
    );
    watch(
      () => props.sx,
      () => {
        serialized.value = props.sx
          ? theme.unstable_css(cache, props.sx)
          : undefined;
      }
    );

    const cssName = () => {
      const name = serialized.value?.name ?? "0";
      return name != "0" ? `${cache.key}-${name}` : "";
    };

    const insertStyle = useInsertStyles(cache);

    return () => {
      const Comp: any = props.component ?? "div";
      const el = <Comp class={cssName()}>{slots}</Comp>;

      return cloneVNode(el, {
        onVnodeMounted: () => {
          insertStyle({
            serialized: serialized.value,
            isStringTag: isString(Comp)
          });
        }
      });
    };
  }
) as any;
