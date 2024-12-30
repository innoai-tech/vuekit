import { isFunction } from "./util.ts";
import { produce } from "immer";
import "reflect-metadata/lite";

export class Metadata {
  static getOwnPropertyNames(target: Object): string[] {
    return Reflect.getMetadataKeys(target);
  }

  static get<T>(target: Object, propertyKey: PropertyKey): T | undefined {
    return Reflect.getMetadata(propertyKey, target);
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
      if (isFunction(valueOrFunc)) {
        Reflect.defineMetadata(
          propertyKey,
          produce(
            Reflect.getMetadata(propertyKey, target) ?? defaults ?? {},
            valueOrFunc,
          ),
          target,
        );

        return;
      }

      Reflect.defineMetadata(propertyKey, valueOrFunc, target);
    }
  }
}
