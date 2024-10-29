export const isUndefined = (x: unknown): x is undefined => {
  return typeof x == "undefined";
};

export const isNull = (x: unknown): x is null => {
  return Object.is(x, null);
};

export const isObjectLike = (x: unknown): x is object => {
  return !!x && typeof x == "object";
};

export const isObject = (x: unknown): x is object => {
  return !!x && x.constructor == Object;
};

export const isArray = (x: unknown): x is any[] => {
  return Array.isArray(x);
};

export const isNumber = (x: unknown): x is number => {
  return typeof x === "number" && !Number.isNaN(x);
};

export const isInteger = (x: unknown): x is number => {
  return typeof x === "number" && !Number.isNaN(x) && Number.isInteger(x);
};

export const isBoolean = (x: unknown): x is boolean => {
  return typeof x === "boolean";
};

export const isString = (x: unknown): x is string => {
  return typeof x === "string";
};

export const isSymbol = (x: unknown): x is symbol => {
  return typeof x === "symbol";
};

export const isIterable = <T>(x: unknown): x is Iterable<T> => {
  return (
    typeof x == "object" && typeof (x as any)[Symbol.iterator] === "function"
  );
};

export const isClass = (x: unknown): x is { new (...args: any[]): any } => {
  return typeof x == "function" && `${x}`.startsWith("class");
};

export const isFunction = (x: unknown): x is Function => {
  return !!(x && x.constructor && (x as any).call && (x as any).apply);
};
