import { isFunction, isString, isUndefined } from "@innoai-tech/lodash";
import {
  type AnyType,
  type InternalEmitsOf,
  type InternalPropsOf,
  type InternalSlotsOf,
  type OverridableComponent,
  type PublicPropsOf,
  type SetupContext,
  type VElementType,
  component,
  isComponent,
  t,
  isPropTypes,
} from "@innoai-tech/vuekit";
import type { VNode } from "vue";
import { cloneVNode, onBeforeMount, onMounted, ref } from "vue";
import { Box, type SxProps } from "./Box";
import { CacheProvider } from "./CacheProvider";
import { ThemeProvider } from "./ThemeProvider";
import { type SystemStyleObject } from "./theming";
import { useInsertStyles } from "./useInsertStyles";

export function styled<DefaultComponent extends VElementType>(
  defaultComponent: DefaultComponent,
  setup?: StyledSetupFunction<{}, DefaultComponent>,
): (presetSx: SystemStyleObject) => OverridableComponent<{
  props: Partial<SxProps>;
  defaultComponent: DefaultComponent;
}>;
// have to keep decl the DefaultComponent
// https://github.com/microsoft/TypeScript/pull/26349
export function styled<
  Props extends Record<string, any>,
  _DefaultComponent extends VElementType,
>(
  defaultComponent: _DefaultComponent,
  setup?: StyledSetupFunction<Props, _DefaultComponent>,
): (presetSx: SystemStyleObject) => OverridableComponent<{
  props: Props & Partial<SxProps>;
  defaultComponent: _DefaultComponent;
}>;
export function styled<DefaultComponent extends VElementType>(
  defaultComponent: DefaultComponent,
  setup?: StyledSetupFunction<{}, DefaultComponent>,
): (presetSx: SystemStyleObject) => OverridableComponent<{
  props: Partial<SxProps>;
  defaultComponent: DefaultComponent;
}>;
export function styled<
  PropTypes extends Record<string, AnyType>,
  DefaultComponent extends VElementType,
>(
  defaultComponent: DefaultComponent,
  propTypes: PropTypes,
  setup?: StyledSetupFunction<PublicPropsOf<PropTypes>, DefaultComponent>,
): (presetSx: SystemStyleObject) => OverridableComponent<{
  props: PublicPropsOf<PropTypes> & Partial<SxProps>;
  defaultComponent: DefaultComponent;
}>;
export function styled<
  Props extends Record<string, any>,
  DefaultComponent extends VElementType,
>(
  ...args: any[]
): (presetSx: SystemStyleObject) => OverridableComponent<{
  props: Props & Partial<SxProps>;
  defaultComponent: DefaultComponent;
}> {
  let defaultComponent: VElementType = "div";
  let finalPropTypes: Record<string, AnyType> = {};
  let finalSetup: any = undefined;
  let finalOptions: Record<string, any> = {};

  for (const arg of args) {
    if (isFunction(arg)) {
      finalSetup = arg;
      continue;
    }

    if (isString(arg) || isComponent(arg)) {
      defaultComponent = arg;
      continue;
    }

    // "div", {}, setup
    if (isUndefined(finalSetup) && isPropTypes(arg)) {
      finalPropTypes = arg;
    } else {
      finalOptions = arg;
    }
  }

  finalSetup ??= (props: any, ctx: any) => (Wrap: VElementType) => {
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

  return (presetSx: SystemStyleObject): any => {
    const c = Object.assign(
      component(
        {
          ...finalPropTypes,
          sx: t.custom<SystemStyleObject>().optional(),
          component: t.custom<VElementType>().optional(),
        },
        (props, ctx) => {
          const theme = ThemeProvider.use();
          const cache = CacheProvider.use();
          const insertCSS = useInsertStyles(cache);

          const sxClassName = ref("");

          const presetSxSerialized = theme.unstable_css(cache, presetSx);

          const className = (): string =>
            (presetSxSerialized.name !== "0"
              ? `${cache.key}-${presetSxSerialized.name}${sxClassName.value}`
              : `${sxClassName.value}`) + (c.name ? ` ${c.name}` : "");

          if ((defaultComponent as any).__styled) {
            const serialized = theme.unstable_css(cache, props.sx ?? {});

            if (serialized.name !== "0") {
              sxClassName.value = ` ${cache.key}-${serialized.name}`;
            }

            onMounted(() => {
              insertCSS({
                serialized: presetSxSerialized,
                isStringTag: true,
              });

              insertCSS({
                serialized,
                isStringTag: true,
              });
            });
          } else {
            onBeforeMount(() => {
              insertCSS({
                serialized: presetSxSerialized,
                isStringTag: true,
              });
            });
          }

          const render = finalSetup(props as any, ctx as any);

          return () => {
            if ((defaultComponent as any).__styled) {
              const ret = render(defaultComponent);

              if (ret) {
                return cloneVNode(ret, {
                  component: (props as any).component,
                  class: className(),
                });
              }

              return null;
            }

            const ret = render(Box as any);

            if (ret) {
              return cloneVNode(ret, {
                component: (props as any).component || defaultComponent,
                sx: (props as any).sx,
                class: className(),
              });
            }

            return null;
          };
        },
        finalOptions,
      ),
      {
        __styled: true,
      },
    ) as any;

    c.toString = () => {
      return `.${c.name}`;
    };

    return c;
  };
}

export type StyledSetupFunction<
  Props extends Record<string, any>,
  DefaultComponent extends VElementType,
> = (
  props: InternalPropsOf<Props>,
  ctx: SetupContext<InternalEmitsOf<Props>, InternalSlotsOf<Props>>,
) => (Wrap: DefaultComponent) => VNode | null;
