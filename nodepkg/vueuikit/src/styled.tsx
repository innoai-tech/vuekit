import {
  component,
  type OverridableComponent,
  type PublicPropsOf,
  type EmitsOf,
  type InternalPropsOf,
  type ZodTypeAny,
  type VElementType,
  z,
} from "@innoai-tech/vuekit";
import { type SystemStyleObject } from "./theming";
import { type SxProps, Box } from "./Box";
import { ThemeProvider } from "./ThemeProvider";
import { CacheProvider } from "./CacheProvider";
import { isString } from "@innoai-tech/lodash";
import type { SetupContext, VNode } from "vue";
import { cloneVNode } from "vue";

const defaultSetup = (props: any, ctx: any) => (Wrap: VElementType) => {
  const dataProps: Record<string, any> = {};

  for (const prop in props) {
    if (prop === "component" || prop === "sx") {
      continue;
    }

    if ((props as any)[prop]) {
      dataProps[`data-${prop}`] = (props as any)[prop];
    }
  }

  return <Wrap {...dataProps}>{ctx.slots}</Wrap>;
};

export function styled<
  DefaultComponent extends VElementType,
  PropTypes extends Record<string, ZodTypeAny>
>(
  defaultComponent: DefaultComponent,
  propTypes: PropTypes = {} as PropTypes,
  setup: (
    props: InternalPropsOf<PropTypes>,
    ctx: SetupContext<EmitsOf<PropTypes>>
  ) => (Wrap: DefaultComponent) => VNode = defaultSetup
) {
  return (
    sx: SystemStyleObject
  ): OverridableComponent<{
    props: PublicPropsOf<PropTypes> & Partial<SxProps>;
    defaultComponent: DefaultComponent;
  }> => {
    const c = component(
      {
        ...propTypes,
        sx: z.custom<SystemStyleObject>().optional(),
        component: z.custom<VElementType>().optional(),
      },
      (props, ctx) => {
        const theme = ThemeProvider.use();
        const cache = CacheProvider.use();

        const className = theme.unstable_css(cache, sx, {
          isStringTag: isString((props as any).component ?? defaultComponent),
        });

        const render = setup(props as any, ctx as any);

        return () => {
          if ((defaultComponent as any).__styled) {
            const ret = render(defaultComponent as any);

            if (ret) {
              return cloneVNode(ret, {
                component: (props as any).component,
                sx: (props as any).sx,
                class: `${className}`,
              });
            }
            return null;
          }

          const ret = render(Box as any);

          if (ret) {
            return cloneVNode(ret, {
              component: (props as any).component ?? defaultComponent,
              sx: (props as any).sx,
              class: `${className}`,
            });
          }

          return null;
        };
      }
    ) as any;

    c.__styled = true;

    return c;
  };
}
