import { inject, provide, type VNodeChild } from "vue";
import { isFunction, isEmpty } from "@innoai-tech/lodash";
import { ext } from "./ext";
import { type ComponentOptions, component } from "./component";
import {
  type Component,
  type InternalPropsOf,
  type PublicPropsOf
} from "./types";
import { t, type TypeAny } from "@innoai-tech/typedef";

export type ProviderComponent<Context, P = { value?: Context }> = Component<
  P & {
  $default?: VNodeChild;
}
> & { use: () => Context };

export type CreateFunction<
  Context extends object,
  PropTypes extends Record<string, TypeAny>
> = (props: InternalPropsOf<PropTypes>) => Context;

export function createProvider<Context extends object>(
  create: CreateFunction<Context, {}>,
  options?: ComponentOptions
): ProviderComponent<Context>;
export function createProvider<
  Context extends object,
  PropTypes extends Record<string, TypeAny>
>(
  propTypes: PropTypes,
  create: CreateFunction<Context, PropTypes>,
  options?: ComponentOptions
): ProviderComponent<Context, PublicPropsOf<PropTypes>>;
export function createProvider<
  Context extends object,
  PropTypes extends Record<string, TypeAny>
>(
  propTypesOrCreate: PropTypes | CreateFunction<Context, PropTypes>,
  createOrOptions?: CreateFunction<Context, PropTypes> | ComponentOptions,
  options?: ComponentOptions
): ProviderComponent<Context, PublicPropsOf<PropTypes>> {
  const finalOptions = (options ?? createOrOptions ?? {}) as ComponentOptions;
  const finalCreate = (createOrOptions ?? propTypesOrCreate) as CreateFunction<
    Context,
    {}
  >;
  const finalPropTypes = (
    isFunction(propTypesOrCreate) ? {} : propTypesOrCreate
  ) as Record<string, TypeAny>;

  const key = Symbol(finalOptions.name ?? "");

  if (isEmpty(finalPropTypes)) {
    let _default: any;
    const getDefaults = () => _default ?? (_default = finalCreate({}));

    const Provider = component(
      {
        value: t.custom<any>().optional(),
        $default: t.custom<VNodeChild>().optional()
      },
      (props, { slots }) => {
        provide(key, props.value ?? getDefaults());

        return () => {
          return slots.default?.();
        };
      },
      {
        ...finalOptions,
        name: `Provide(${finalOptions.name ?? ""})`
      }
    );

    return ext(Provider as any, {
      use: () => {
        return inject(key, getDefaults, true) as Context;
      }
    });
  }

  const propsSchema = t.object(finalPropTypes);
  const getDefaultProps = () => propsSchema.create({});

  let _default: any;
  const getDefaults = () =>
    _default ?? (_default = finalCreate(getDefaultProps() as any));

  const Provider = component(
    {
      ...finalPropTypes,
      $default: t.custom<VNodeChild>().optional()
    },
    (props, { slots }) => {
      provide(key, finalCreate(props));

      return () => {
        return slots.default?.();
      };
    },
    {
      ...finalOptions,
      name: `Provide(${finalOptions.name ?? ""})`
    }
  );

  return ext(Provider as any, {
    use: () => {
      return inject(key, getDefaults, true) as Context;
    }
  });
}
