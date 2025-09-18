import { isFunction, isString, isUndefined } from "@innoai-tech/lodash";
import {
  cloneVNode,
  component,
  type InternalEmitsOf,
  type InternalPropsOf,
  type InternalSlotsOf,
  isComponent,
  isPropTypes,
  type JSXProps,
  onBeforeMount,
  onMounted,
  type OverridableComponent,
  type PublicPropsOf,
  ref,
  type SetupContext,
  shallowRef,
  type Simplify,
  SymbolForwardRef,
  t,
  type Type,
  type VElementType,
  type VNode,
} from "@innoai-tech/vuekit";
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
  props: Simplify<JSXProps<Props> & Partial<SxProps>>;
  defaultComponent: _DefaultComponent;
}>;
export function styled<DefaultComponent extends VElementType>(
  defaultComponent: DefaultComponent,
  setup?: StyledSetupFunction<{}, DefaultComponent>,
): (presetSx: SystemStyleObject) => OverridableComponent<{
  props: Simplify<Partial<SxProps>>;
  defaultComponent: DefaultComponent;
}>;
export function styled<
  PropTypes extends Record<string, Type>,
  DefaultComponent extends VElementType,
>(
  defaultComponent: DefaultComponent,
  propTypes: PropTypes,
  setup?: StyledSetupFunction<PublicPropsOf<PropTypes>, DefaultComponent>,
): (presetSx: SystemStyleObject) => OverridableComponent<{
  props: Simplify<JSXProps<PublicPropsOf<PropTypes>> & Partial<SxProps>>;
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
  let finalPropTypes: Record<string, Type> = {};
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

          const sxClassNameRef = shallowRef("");

          const presetSxSerialized = theme.unstable_css(cache, presetSx);

          const className = (): string => {
            return (
              (presetSxSerialized.name !== "0"
                ? `${cache.key}-${presetSxSerialized.name}${sxClassNameRef.value}`
                : `${sxClassNameRef.value}`) + (c.name ? ` ${c.name}` : "")
            );
          };

          if ((defaultComponent as any).__styled) {
            const serialized = theme.unstable_css(cache, props.sx ?? {});

            if (serialized.name !== "0") {
              sxClassNameRef.value = ` ${cache.key}-${serialized.name}`;
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

          const forwardRef = ref(null);

          ctx.expose({
            [SymbolForwardRef]: forwardRef,
          });

          return () => {
            if ((defaultComponent as any).__styled) {
              const ret = render(defaultComponent);

              if (ret) {
                return cloneVNode(ret, {
                  component: (props as any).component,
                  ref: forwardRef,
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
                ref: forwardRef,
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
