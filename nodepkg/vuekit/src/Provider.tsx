import { inject, provide } from "vue";
import { isFunction } from "@innoai-tech/lodash";
import { ext } from "./ext";
import {
  type ComponentOptions,
  component,
  z
} from "./component";

import {
  type Component,
} from "./types"

export function createProvider<T extends object>(
  defaults?: T | (() => T),
  options: ComponentOptions = {}
): Component<{ value?: T }> & { use: () => T } {
  const key = Symbol(options.name ?? "");

  let _default: any;
  const getDefaults = () =>
    _default ?? (_default = isFunction(defaults) ? defaults!() : defaults);

  const Provider = component(
    {
      value: z.custom<T>().optional()
    },
    (props, { slots }) => {
      provide(key, props.value ?? getDefaults());

      return () => <>{slots.default?.()}</>;
    },
    {
      ...options,
      name: `Provider(${options.name ?? ""})`
    }
  );

  return ext(Provider as any, {
    use: () => {
      return inject(key, getDefaults, true) as T;
    }
  });
}
