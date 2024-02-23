import { isEmpty, isFunction, isPlainObject } from "@innoai-tech/lodash";
import { type AnyType, t } from "@innoai-tech/typedef";
import { type ComponentOptions, component } from "./component";
import { ext } from "./ext";
import {
  type Component,
  type InternalPropsOf,
  type PublicPropsOf,
  type VNodeChild,
  inject,
  provide,
} from "./vue.ts";

export type ProviderComponent<Context, P = { value?: Context }> = Component<
  P & {
    $default?: VNodeChild;
  }
> & { use: () => Context };

export type CreateFunction<
  Context extends object,
  PropTypes extends Record<string, AnyType>,
> = (props: InternalPropsOf<PropTypes>) => Context;

export function createProvider<Context extends object>(
  create: CreateFunction<Context, {}>,
  options?: ComponentOptions,
): ProviderComponent<Context>;
export function createProvider<
  Context extends object,
  PropTypes extends Record<string, AnyType>,
>(
  propTypes: PropTypes,
  create: CreateFunction<Context, PropTypes>,
  options?: ComponentOptions,
): ProviderComponent<Context, PublicPropsOf<PropTypes>>;
export function createProvider<
  Context extends object,
  PropTypes extends Record<string, AnyType>,
>(
  propTypesOrCreate: PropTypes | CreateFunction<Context, PropTypes>,
  createOrOptions?: CreateFunction<Context, PropTypes> | ComponentOptions,
  options?: ComponentOptions,
): ProviderComponent<Context, PublicPropsOf<PropTypes>> {
  const finalPropTypes = (
    isPlainObject(propTypesOrCreate) ? propTypesOrCreate : {}
  ) as Record<string, AnyType>;
  const finalCreate = (
    isFunction(propTypesOrCreate) ? propTypesOrCreate : createOrOptions
  ) as CreateFunction<Context, {}>;
  const finalOptions = (options ?? createOrOptions ?? {}) as ComponentOptions;

  const key = Symbol(finalOptions.name ?? "");

  if (isEmpty(finalPropTypes)) {
    let _default: any;

    const getDefaults = () => {
      if (typeof _default === "undefined") {
        _default = finalCreate({});
      }
      return _default;
    };

    const Provider = component(
      {
        value: t.custom<any>().optional(),
        $default: t.custom<VNodeChild>().optional(),
      },
      (props, { slots }) => {
        provide(key, props.value ?? getDefaults());

        return () => {
          return slots.default?.();
        };
      },
      {
        ...finalOptions,
        name: `Provide(${finalOptions.name ?? ""})`,
      },
    );

    return ext(Provider as any, {
      use: () => {
        return inject(key, getDefaults, true) as Context;
      },
    });
  }

  const propsSchema = t.object(finalPropTypes);
  const getDefaultProps = () => propsSchema.create({});

  let _default: any;

  const getDefaults = () => {
    if (typeof _default === "undefined") {
      _default = finalCreate(getDefaultProps() as any);
    }
    return _default;
  };

  const Provider = component(
    {
      ...finalPropTypes,
      $default: t.custom<VNodeChild>().optional(),
    },
    (props, { slots }) => {
      provide(key, finalCreate(props));

      return () => {
        return slots.default?.();
      };
    },
    {
      ...finalOptions,
      name: `Provide(${finalOptions.name ?? ""})`,
    },
  );

  return ext(Provider as any, {
    use: () => {
      return inject(key, getDefaults, true) as Context;
    },
  });
}
