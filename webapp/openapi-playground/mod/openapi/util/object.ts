import { isNumber, isObject } from "./typed.ts";

export function get(v: any, keyPath: any[]) {
  if (keyPath.length == 0) {
    return v;
  }

  if (Array.isArray(v)) {
    const [idx, ...remain] = keyPath;
    if (isNumber(idx)) {
      return get(v[idx], remain);
    }
    return;
  }

  if (isObject(v)) {
    const [prop, ...remain] = keyPath;
    return get((v as any)[prop], remain);
  }

  return;
}

export const pick = <T extends Record<string, any>, Key extends keyof T>(o: T, keys: Key[]): Pick<T, Key> => {
  const ret: Record<string, any> = {};

  for (const [k, v] of Object.entries(o)) {
    if (keys.includes(k as any)) {
      ret[k] = v;
    }
  }


  return ret as Pick<T, Key>;
};