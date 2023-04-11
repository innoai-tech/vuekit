import { Fragment } from "vue";
import { jsx } from "./jsx-runtime";

export { Fragment };

export function jsxDEV(
  type: any,
  props: any = {},
  key: string | undefined,
  _isStaticChildren: boolean,
  _source: object,
  _self: object
) {
  return jsx(type, props, key);
}
