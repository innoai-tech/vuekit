import { Fragment } from "vue";
import { jsx, jsxs } from "./jsx-runtime";

export { Fragment };

export function jsxDEV(
  type: any,
  props: any = {},
  key: string | undefined,
  _isStaticChildren: boolean,
  _source: object,
  _self: object
) {
  if (Array.isArray(props.children)) {
    return jsxs(type, props, key);
  }
  return jsx(type, props, key);
}
