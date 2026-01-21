import { isFunction } from "es-toolkit/compat";
import { produce } from "immer";
import {
  defineMetadata,
  getMetadata,
  getMetadataKeys,
} from "reflect-metadata/no-conflict";

export class Metadata {
  static getOwnPropertyNames(target: object): string[] {
    return getMetadataKeys(target);
  }

  static get<T>(target: object, propertyKey: PropertyKey): T | undefined {
    return getMetadata(propertyKey, target);
  }

  static define<T>(target: object, propertyKey: PropertyKey, value: T): void;
  static define<T extends object>(
    target: object,
    propertyKey: PropertyKey,
    mut: (m: T) => void,
    defaults: T,
  ): void;
  static define(
    target: object,
    propertyKey: PropertyKey,
    valueOrFunc: any,
    defaults?: any,
  ): void {
    if (target && target.constructor && target.constructor != Object) {
      if (isFunction(valueOrFunc)) {
        defineMetadata(
          propertyKey,
          {
            ...produce(
              getMetadata(propertyKey, target) ?? defaults ?? {},
              valueOrFunc,
            ),
          },
          target,
        );

        return;
      }

      defineMetadata(propertyKey, valueOrFunc, target);
    }
  }
}
