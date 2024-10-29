import { isFunction, isString } from "./util.ts";
import { produce } from "immer";

export class Metadata {
  static metadata = Symbol("metadata");

  static getOwnPropertyNames(target: Object): string[] {
    if (target && target.constructor && target.constructor != Object) {
      return (
        (target.constructor as any)[Metadata.metadata]
          ?.keys()
          .filter((v: any) => isString(v)) ?? []
      );
    }
    return [];
  }

  static get<T>(target: Object, propertyKey: PropertyKey): T | undefined {
    if (target && target.constructor && target.constructor != Object) {
      return (target.constructor as any)[Metadata.metadata]?.get(propertyKey);
    }
    return undefined;
  }

  static define<T>(target: Object, propertyKey: PropertyKey, value: T): void;
  static define<T extends object>(
    target: Object,
    propertyKey: PropertyKey,
    mut: (m: T) => void,
    defaults: T,
  ): void;
  static define(
    target: Object,
    propertyKey: PropertyKey,
    valueOrFunc: any,
    defaults?: any,
  ): void {
    if (target && target.constructor && target.constructor != Object) {
      const meta = ((target.constructor as any)[Metadata.metadata] ??=
        new Map());

      if (isFunction(valueOrFunc)) {
        meta.set(
          propertyKey,
          produce(meta.get(propertyKey) ?? defaults ?? {}, valueOrFunc),
        );
        return;
      }

      meta.set(propertyKey, valueOrFunc);
    }
  }
}
