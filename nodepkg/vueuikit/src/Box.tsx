import {
  z,
  component,
  type VElementType,
  type OverridableComponent
} from "@innoai-tech/vuekit";
import { ref, watch } from "vue";
import { ThemeProvider } from "./ThemeProvider";
import { type SystemStyleObject } from "./theming";
import { CacheProvider } from "./CacheProvider";
import { isString } from "@innoai-tech/lodash";
import { Insertion } from "./Insertion";

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
  (props, { slots, attrs }) => {
    const theme = ThemeProvider.use();
    const cache = CacheProvider.use();

    const serialized = ref(props.sx ? theme.unstable_css(cache, props.sx) : undefined);
    watch(() => props.sx, () => {
      serialized.value = props.sx ? theme.unstable_css(cache, props.sx) : undefined;
    });

    const cssName = () => {
      const name = serialized.value?.name ?? "0";
      return name != "0" ? `${cache.key}-${name}` : "";
    };

    return () => {
      const Comp: any = props.component ?? "div";

      return (
        <>
          {serialized.value && <Insertion
            serialized={serialized.value}
            isStringTag={isString(Comp)}
          />}
          <Comp
            {...attrs}
            class={`${attrs["class"] ? `${attrs["class"]} ` : ""}${cssName()}`}>
            {slots}
          </Comp>
        </>
      );
    };
  },
  {
    inheritAttrs: false
  }
) as any;
