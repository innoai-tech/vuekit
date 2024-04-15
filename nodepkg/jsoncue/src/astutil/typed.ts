export const isArray = Array.isArray;

export function isObject(value: any): value is object {
  return !!value && value.constructor === Object;
}

export function isNumber(value: any): value is number {
  try {
    return Number(value) === value;
  } catch {
    return false;
  }
}

export const isString = (value: any): value is string => {
  return typeof value === "string" || value instanceof String;
};

export function isUndefined(v: any): v is undefined {
  return typeof v === "undefined";
}

export function isFunction(value: any): value is Function {
  return !!(value && value.constructor && value.call && value.apply);
}
