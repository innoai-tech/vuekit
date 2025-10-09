import { isEmpty, isFunction, isUndefined } from "es-toolkit/compat";
import { type Type, t } from "@innoai-tech/typedef";
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

export type CreateFunction<Context extends object, Props extends {}> = (
  props: InternalPropsOf<Props>,
) => Context;

export function createProvider<Context extends object>(
  create: CreateFunction<Context, {}>,
  options?: ComponentOptions,
): ProviderComponent<Context>;
export function createProvider<Context extends object, Props extends {}>(
  create: CreateFunction<Context, Props>,
  options?: ComponentOptions,
): ProviderComponent<Context, Props>;
export function createProvider<
  Context extends object,
  PropTypes extends Record<string, Type>,
>(
  propTypes: PropTypes,
  create: CreateFunction<Context, PublicPropsOf<PropTypes>>,
  options?: ComponentOptions,
): ProviderComponent<Context, PublicPropsOf<PropTypes>>;
export function createProvider<
  Context extends object,
  PropTypes extends Record<string, Type>,
>(...args: any[]): ProviderComponent<Context, PublicPropsOf<PropTypes>> {
  let finalPropTypes: Record<string, Type> = {};
  let finalCreate: any = undefined;
  let finalOptions: Record<string, any> = {};

  for (const arg of args) {
    if (isFunction(arg)) {
      finalCreate = arg;
      continue;
    }

    if (isUndefined(finalCreate)) {
      finalPropTypes = arg;
    } else {
      finalOptions = arg;
    }
  }

  const key = Symbol(finalOptions?.["name"] ?? "");

  if (isEmpty(finalPropTypes) && isEmpty(finalOptions["props"])) {
    let _default: any;

    const getDefaults = () => {
      return (_default ??= finalCreate({}));
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
        name: `Provide(${finalOptions?.["name"] ?? ""})`,
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

  const Provider = component(
    {
      ...finalPropTypes,
      $default: t.custom<VNodeChild>().optional(),
    },
    (props, { slots }) => {
      provide(key, (_default = finalCreate(props)));

      return () => {
        return slots.default?.();
      };
    },
    {
      ...finalOptions,
      name: `Provide(${finalOptions?.["name"] ?? ""})`,
    },
  );

  return ext(Provider as any, {
    use: () => {
      return inject(
        key,
        () => {
          return (_default ??= finalCreate(getDefaultProps()));
        },
        true,
      ) as Context;
    },
  });
}
