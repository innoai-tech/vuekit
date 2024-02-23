import { H as e, I as n, j as t } from "./lib-nodepkg-vuekit.BljiiEAD.chunk.js";
function i(e2) {
  return t({ p: "p", ...e2.components }.p, { children: "这不是一个完整的组件库，只是一个示例，作为 vueuikit 的参考" });
}
function o() {
  let e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, { wrapper: n2 } = e2.components || {};
  return n2 ? t(n2, { ...e2, children: t(i, { ...e2 }) }) : i(e2);
}
let p = Object.assign(e(() => () => n(o, { components: {} })), { displayName: "IndexDefault" });
export {
  p as default
};
