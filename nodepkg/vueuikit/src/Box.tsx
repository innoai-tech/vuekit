import {
  z,
  component,
  type VElementType,
  type OverridableComponent,
} from "@innoai-tech/vuekit";
import { ref, type SetupContext, watch } from "vue";
import { ThemeProvider } from "./ThemeProvider";
import { type SystemStyleObject } from "./theming";
import { CacheProvider } from "./CacheProvider";
import { isString } from "@innoai-tech/lodash";

export type SxProps = {
  sx: SystemStyleObject;
};

export const Box: OverridableComponent<{
  props: SxProps;
  defaultComponent: "div";
}> = component(
  {
    component: z.custom<VElementType>(),
    sx: z.custom<SystemStyleObject>(),
  },
  ({ component, sx, ...props }, { slots }: SetupContext) => {
    const Comp: any = component ?? "div";

    const theme = ThemeProvider.use();
    const cache = CacheProvider.use();

    const className = ref();

    const renderClassName = () => {
      if (sx) {
        className.value = theme.unstable_css(cache, sx, {
          isStringTag: isString(Comp),
        });
      }
    };

    watch(() => sx, renderClassName);
    renderClassName();

    return () => {
      return (
        <Comp {...props} class={className.value}>
          {slots}
        </Comp>
      );
    };
  }
) as any;
