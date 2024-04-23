import { j as e } from "./lib--nodepkg-vue-jsx-runtime.DL8fEjf_.chunk.js";
import { l as n, h as t } from "./lib--nodepkg-vuekit.C4CbSFwU.chunk.js";
function i(n2) {
  return e({ p: "p", ...n2.components }.p, { children: "这不是一个完整的组件库，只是一个示例，作为 vueuikit 的参考" });
}
function o() {
  let n2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, { wrapper: t2 } = n2.components || {};
  return t2 ? e(t2, { ...n2, children: e(i, { ...n2 }) }) : i(n2);
}
let p = Object.assign(n(() => () => t(o, { components: {} })), { displayName: "IndexDefault" });
export {
  p as default
};
