import { inject, provide } from "vue";
import { isFunction } from "@innoai-tech/lodash";
import { ext } from "./ext";
import {
  type ComponentOptions,
  type Component,
  component,
  z
} from "./component";

export function createProvider<T extends object>(
  defaults?: T | (() => T),
  options: ComponentOptions = {}
): Component<{ value?: T }, {}> & { use: () => T } {
  const key = Symbol(options.name ?? "");

  let _default: any;
  const getDefaults = () =>
    _default ?? (_default = isFunction(defaults) ? defaults!() : defaults);

  const Provider = component(
    {
      value: z.custom<T>().optional()
    },
    ({ value }, { slots }) => {
      provide(key, value ?? getDefaults());

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
