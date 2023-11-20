import { isFunction, isPlainObject } from "@innoai-tech/lodash";
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
	t,
} from "@innoai-tech/vuekit";
import type { VNode } from "vue";
import { cloneVNode, onBeforeMount, onMounted, ref } from "vue";
import { Box, type SxProps } from "./Box";
import { CacheProvider } from "./CacheProvider";
import { ThemeProvider } from "./ThemeProvider";
import { type SystemStyleObject } from "./theming";
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
	PropTypes extends Record<string, AnyType>,
> = (
	props: InternalPropsOf<PropTypes>,
	ctx: SetupContext<InternalEmitsOf<PropTypes>, InternalSlotsOf<PropTypes>>,
) => (Wrap: DefaultComponent) => VNode | null;

export function styled<
	DefaultComponent extends VElementType,
	PropTypes extends Record<string, AnyType> = {},
>(
	defaultComponent: DefaultComponent,
	setup?: StyledSetupFunction<DefaultComponent, PropTypes>,
): (presetSx: SystemStyleObject) => OverridableComponent<{
	props: PublicPropsOf<PropTypes> & Partial<SxProps>;
	defaultComponent: DefaultComponent;
}>;
export function styled<
	DefaultComponent extends VElementType,
	PropTypes extends Record<string, AnyType> = {},
>(
	defaultComponent: DefaultComponent,
	propTypes: PropTypes,
	setup?: StyledSetupFunction<DefaultComponent, PropTypes>,
): (presetSx: SystemStyleObject) => OverridableComponent<{
	props: PublicPropsOf<PropTypes> & Partial<SxProps>;
	defaultComponent: DefaultComponent;
}>;
export function styled<
	DefaultComponent extends VElementType,
	PropTypes extends Record<string, AnyType> = {},
>(
	defaultComponent: DefaultComponent,
	propTypesOrSetup?:
		| PropTypes
		| StyledSetupFunction<DefaultComponent, PropTypes>,
	setup?: StyledSetupFunction<DefaultComponent, PropTypes>,
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
				const insertCSS = useInsertStyles(cache);

				(presetSx as any).label = c.name;

				const sxClassName = ref("");

				const presetSxSerialized = theme.unstable_css(cache, presetSx);

				const className = () =>
					presetSxSerialized.name !== "0"
						? `${cache.key}-${presetSxSerialized.name}${sxClassName.value}`
						: `${sxClassName.value}`;

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
		) as any;

		c.__styled = true;

		return c;
	};
}
