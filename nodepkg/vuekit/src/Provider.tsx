import { inject, provide, type VNodeChild } from "vue";
import { isFunction } from "@innoai-tech/lodash";
import { ext } from "./ext";
import { type ComponentOptions, component, z } from "./component";

export function createProvider<T extends object>(
  defaults?: T | (() => T),
  options: ComponentOptions = {}
) {
  const key = Symbol(options.name ?? "");

  let _default: any;
  const getDefaults = () =>
    _default ?? (_default = isFunction(defaults) ? defaults!() : defaults);

  const Provider = component(
    {
      value: z.custom<T>().optional(),
      $default: z.custom<VNodeChild>()
    },
    (props, { slots }) => {
      provide(key, props.value ?? getDefaults());

      return () => {

        return <>{slots.default?.(undefined)}</>;
      };
    },
    {
      ...options,
      name: `Provide(${options.name ?? ""})`
    }
  );

  return ext(Provider, {
    use: () => {
      return inject(key, getDefaults, true) as T;
    }
  });
}
