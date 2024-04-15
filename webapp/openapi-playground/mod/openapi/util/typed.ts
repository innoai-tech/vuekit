export const isObject = (value: any): value is object => {
  return !!value && value.constructor === Object;
};

export const isNumber = (value: any): value is number => {
  try {
    return Number(value) === value;
  } catch {
    return false;
  }
};

export const isUndefined = (v: any): v is undefined => {
  return typeof v === "undefined";
};