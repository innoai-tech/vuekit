import { h, Fragment, type VNodeChild } from "vue";

export { Fragment };

const isFunction = (val: any) => typeof val === "function";
const isUndefined = (val: any) => typeof val === "undefined";
const isFragment = (val: any) => {
  return val === Fragment;
};

const isTagOrInternal = (val: any) => {
  if (isFragment(val)) {
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

const isSlots = (children: any) => {
  if (children && typeof children === "object") {
    if (children.__vInternal) {
      return true;
    }
  }
  return false;
};

const wrapSlot = (children: any) => {
  if (isFunction(children)) {
    return children;
  }
  if (Array.isArray(children)) {
    return () => children;
  }
  return isUndefined(children) ? children : () => children;
};

const pickPropsWithoutSlots = (
  rawProps: Record<string, any>,
  key?: string
): [any, any] => {
  const { children, ...otherProps } = rawProps;

  // pass slots as children
  if (isSlots(children)) {
    return [key ? { ...otherProps, key } : otherProps, children];
  }

  const props: Record<string, any> = {};
  const slots: Record<string, any> = {};
  let hasAnySlot = false;

  for (const prop in otherProps) {
    const v = otherProps[prop];
    if (prop.startsWith("$")) {
      const slotName = prop.slice(1);
      slots[slotName] = wrapSlot(v);
      hasAnySlot = true;
      continue;
    }
    props[prop] = v;
  }

  const defaultSlot = wrapSlot(children);
  if (defaultSlot) {
    slots["default"] = defaultSlot;
    hasAnySlot = true;
  }

  return [key ? { ...props, key } : props, hasAnySlot ? slots : undefined];
};

export const jsxs = (type: any, rawProps: any, key?: string) => {
  return jsx(type, rawProps, key);
};

export const jsx = (type: any, rawProps: any, key?: string) => {
  let [props, slots] = pickPropsWithoutSlots(rawProps, key);
  if (isTagOrInternal(type)) {
    return h(
      type,
      props,
      slots?.default?.() ?? (isFragment(type) ? [] : undefined)
    );
  }
  return h(type, props, slots);
};


declare module "vue" {
  // always contains default slots
  interface HTMLAttributes {
    $default?: VNodeChild;
  }

  interface SVGAttributes {
    $default?: VNodeChild;
  }

  interface TransitionProps {
    $default?: VNodeChild;
  }

  interface TeleportProps {
    $default?: VNodeChild;
  }
}

declare global {
  namespace JSX {
    //  infer children type
    interface ElementChildrenAttribute {
      $default: {};
    }
  }
}