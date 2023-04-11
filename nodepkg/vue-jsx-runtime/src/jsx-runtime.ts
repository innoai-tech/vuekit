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

const lowerFirst = (v: string) => `${v[0]?.toLowerCase() ?? ""}${v.slice(1)}`;

const wrapSlot = (v: any) => isFunction(v) ? v : () => v;

const createElementWithSlots = (type: any, props: any, children: any) => {
  const slots: any = {};
  const allProps: any = {};

  for (const prop in props) {
    const v = props[prop];

    if (prop.startsWith("$")) {
      slots[lowerFirst(prop.slice("$".length))] = wrapSlot(v);
      continue;
    }

    allProps[prop] = v;
  }

  slots["default"] = wrapSlot(children);

  return h(type, allProps, slots);
};


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
    return createElementWithSlots(type, props, children);
  }
  return h(type, props);
};

export const jsx = (
  type: any,
  rawProps: {
    children: any;
    [k: string]: any;
  },
  key: string | undefined
) => {
  // slots.default?.() returns []
  if (Array.isArray(rawProps.children)) {
    return jsxs(type, rawProps, key);
  }

  const { children: child, ...otherProps } = rawProps;

  const props = key ? { ...otherProps, key } : otherProps;

  if (child) {
    if (isTagOrInternal(type)) {
      return h(type, props, isVNode(child) ? [child] : child);
    }

    // component
    if (isVNode(child) || !isObject(child)) {
      // nodes
      return createElementWithSlots(type, props, child);
    }

    // object slots
    return h(type, props, child);
  }

  return h(type, props);
};
