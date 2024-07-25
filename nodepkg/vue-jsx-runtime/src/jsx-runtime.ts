import {
  Fragment,
  type NativeElements,
  type ReservedProps,
  type VNode,
  type VNodeChild,
  h,
  isVNode,
} from "vue";

export { Fragment };

const isFunction = (val: any) => typeof val === "function";
const isUndefined = (val: any) => typeof val === "undefined";
const isFragment = (val: any) => val === Fragment;

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
  return (
    children &&
    !Array.isArray(children) &&
    !isVNode(children) &&
    typeof children === "object"
  );
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
  key?: string,
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
  const [props, slots] = pickPropsWithoutSlots(rawProps, key);
  if (isTagOrInternal(type)) {
    const children = slots?.default?.() ?? (isFragment(type) ? [] : undefined);

    return h(type, props, children);
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
    export interface Element extends VNode {}

    export interface ElementClass {
      $props: {};
    }

    export interface ElementAttributesProperty {
      $props: {};
    }

    export interface IntrinsicElements extends NativeElements {
      // allow arbitrary elements
      // @ts-ignore suppress ts:2374 = Duplicate string index signature.
      [name: string]: any;
    }

    export interface IntrinsicAttributes extends ReservedProps {}

    //  infer children type
    export interface ElementChildrenAttribute {
      $default: {};
    }
  }
}
