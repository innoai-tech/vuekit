import {
  t,
  component,
  type OverridableComponent,
  type PublicPropsOf,
  type SetupContext,
  type InternalEmitsOf,
  type InternalSlotsOf,
  type InternalPropsOf,
  type AnyType,
  type VElementType,
} from "@innoai-tech/vuekit";
import { type SystemStyleObject } from "./theming";
import { type SxProps, Box } from "./Box";
import { ThemeProvider } from "./ThemeProvider";
import { CacheProvider } from "./CacheProvider";
import { isFunction, isPlainObject, isString } from "@innoai-tech/lodash";
import type { VNode } from "vue";
import { cloneVNode } from "vue";
import { useInsertStyles } from "./useInsertStyles";

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

export type StyledSetupFunction<
  DefaultComponent extends VElementType,
  PropTypes extends Record<string, AnyType>
> = (
  props: InternalPropsOf<PropTypes>,
  ctx: SetupContext<InternalEmitsOf<PropTypes>, InternalSlotsOf<PropTypes>>
) => (Wrap: DefaultComponent) => VNode | null;

export function styled<
  DefaultComponent extends VElementType,
  PropTypes extends Record<string, AnyType> = {}
>(
  defaultComponent: DefaultComponent,
  setup?: StyledSetupFunction<DefaultComponent, PropTypes>
): (presetSx: SystemStyleObject) => OverridableComponent<{
  props: PublicPropsOf<PropTypes> & Partial<SxProps>;
  defaultComponent: DefaultComponent;
}>;
export function styled<
  DefaultComponent extends VElementType,
  PropTypes extends Record<string, AnyType> = {}
>(
  defaultComponent: DefaultComponent,
  propTypes: PropTypes,
  setup?: StyledSetupFunction<DefaultComponent, PropTypes>
): (presetSx: SystemStyleObject) => OverridableComponent<{
  props: PublicPropsOf<PropTypes> & Partial<SxProps>;
  defaultComponent: DefaultComponent;
}>;
export function styled<
  DefaultComponent extends VElementType,
  PropTypes extends Record<string, AnyType> = {}
>(
  defaultComponent: DefaultComponent,
  propTypesOrSetup?:
    | PropTypes
    | StyledSetupFunction<DefaultComponent, PropTypes>,
  setup?: StyledSetupFunction<DefaultComponent, PropTypes>
): (presetSx: SystemStyleObject) => OverridableComponent<{
  props: PublicPropsOf<PropTypes> & Partial<SxProps>;
  defaultComponent: DefaultComponent;
}> {
  const finalSetup =
    (isFunction(propTypesOrSetup) ? propTypesOrSetup : setup) ?? defaultSetup;
  const finalPropTypes = isPlainObject(propTypesOrSetup)
    ? propTypesOrSetup
    : {};

  return (presetSx: SystemStyleObject) => {
    const c = component(
      {
        ...finalPropTypes,
        sx: t.custom<SystemStyleObject>().optional(),
        component: t.custom<VElementType>().optional(),
      },
      (props, ctx) => {
        const theme = ThemeProvider.use();
        const cache = CacheProvider.use();

        (presetSx as any).label = c.name;

        const serialized = theme.unstable_css(cache, presetSx);
        const render = finalSetup(props as any, ctx as any);
        const insertCSS = useInsertStyles(cache);

        return () => {
          const className =
            serialized.name != "0" ? `${cache.key}-${serialized.name}` : "";
          const isStringTag = isString(
            (props as any).component ?? defaultComponent
          );

          if ((defaultComponent as any).__styled) {
            const ret = render(defaultComponent as any);

            if (ret) {
              return cloneVNode(ret, {
                component: (props as any).component,
                sx: (props as any).sx,
                class: className,
                onVnodeMounted: () => {
                  // to overwrite styles of styled component,
                  // should mount component and insert first
                  // then insert
                  insertCSS({
                    serialized: serialized,
                    isStringTag: isStringTag,
                  });
                },
              });
            }

            return null;
          }

          const ret = render(Box as any);

          if (ret) {
            return cloneVNode(ret, {
              component: (props as any).component ?? defaultComponent,
              sx: (props as any).sx,
              class: className,
              onVnodeBeforeMount: () => {
                insertCSS({
                  serialized: serialized,
                  isStringTag: isStringTag,
                });
              },
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
