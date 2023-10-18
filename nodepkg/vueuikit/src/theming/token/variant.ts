import { has, isFunction } from "@innoai-tech/lodash";

export const alpha = (a: number) => {
  return (cssVar: string): any => `rgba(var(${cssVar}--rgb) / ${a})`;
};

export interface Variant<T> {
  (cssVar: string): any;

  token: T;

  toString(): T;
}

export const isVariant = (fn: any): fn is Variant<any> => {
  return isFunction(fn) && has(fn, "token");
};

export function variant<T extends string>(
  token: T,
  toVariant: (v: string) => any,
): T {
  // FIXME fake type to bump as Token
  return Object.assign(
    (cssVar: string): any => {
      return toVariant(cssVar);
    },
    {
      toString: () => token,
      token: token,
    },
  ) as any;
}
