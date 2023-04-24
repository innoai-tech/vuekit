import { inject, provide, type VNodeChild } from "vue";
import { isFunction } from "@innoai-tech/lodash";
import { ext } from "./ext";
import { type ComponentOptions, component } from "./component";
import { type Component } from "./types";
import { t } from "@innoai-tech/typedef";

export function createProvider<T extends object>(
  defaults?: T | (() => T),
  options: ComponentOptions = {}
): Component<{
  value?: T,
  $default: VNodeChild,
}> & { use: () => T } {
  const key = Symbol(options.name ?? "");

  let _default: any;
  const getDefaults = () =>
    _default ?? (_default = isFunction(defaults) ? defaults!() : defaults);

  const Provider = component(
    {
      value: t.any().optional(),
      $default: t.custom<VNodeChild>().optional()
    },
    (props, { slots }) => {
      provide(key, props.value ?? getDefaults());

      return () => {
        return slots.default?.();
      };
    },
    {
      ...options,
      name: `Provide(${options.name ?? ""})`
    }
  );

  return ext(Provider as any, {
    use: () => {
      return inject(key, getDefaults, true) as T;
    }
  });
}
