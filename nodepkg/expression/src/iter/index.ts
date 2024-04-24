import { isArray, isPlainObject } from "@innoai-tech/lodash";

export class Entity<K extends string | symbol | number, V extends any> {
  static* entities(values: any): Generator<Entity<any, any>> {
    if (isArray(values)) {
      for (let i = 0; i < values.length; i++) {
        yield new Entity<any, any>(i, values[i]);
      }
      return;
    }

    if (isPlainObject(values)) {
      for (const [key, value] of Object.entries(values)) {
        yield new Entity<any, any>(key, value);
      }
      return;
    }
  }

  constructor(
    public readonly key: K,
    public readonly value: V
  ) {
  }
}