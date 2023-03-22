import { h, isVNode, Fragment } from "vue";

export { Fragment };

const isFunction = (val: any) => typeof val === "function";
const isTagOrInternal = (val: any) => {
  if (typeof val === "symbol") {
    return true;
  }

  if (typeof val === "string") {
    return true;
  }

  if (typeof val === "object") {
    if (val.__isTeleport) {
      return true;
    }
  }
  return false;
};

const isObject = (val: any) => val !== null && typeof val === "object";

export const jsxs = (
  type: any,
  { children, ...otherProps }: { children: any[]; [k: string]: any },
  key: string | undefined
) => {
  const props = key ? { ...otherProps, key } : otherProps;

  if (children) {
    if (isTagOrInternal(type)) {
      return h(type, props, children);
    }
    // component
    return h(type, props, () => children);
  }
  return h(type, props);
};

export const jsx = (
  type: any,
  {
    children,
    ...otherProps
  }: {
    children: any;
    [k: string]: any;
  },
  key: string | undefined
) => {
  const props = key ? { ...otherProps, key } : otherProps;

  if (children) {
    if (isTagOrInternal(type)) {
      return h(type, props, isVNode(children) ? [children] : children);
    }
    // component
    if (isVNode(children) || !isObject(children)) {
      // nodes
      return h(type, props, isFunction(children) ? children : () => children);
    }
    // object slots
    return h(type, props, children);
  }
  return h(type, props);
};
