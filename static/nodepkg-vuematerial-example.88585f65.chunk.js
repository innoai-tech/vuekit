import { x as e, y as n, j as t } from "./lib-nodepkg-vuekit.fdbc1ce2.chunk.js";
function i(e2) {
  let n2 = Object.assign({ p: "p" }, e2.components);
  return t(n2.p, { children: "这不是一个完整的组件库，只是一个示例，作为 vueuikit 的参考" });
}
function s() {
  let e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, { wrapper: n2 } = e2.components || {};
  return n2 ? t(n2, Object.assign({}, e2, { children: t(i, e2) })) : i(e2);
}
let o = e(() => () => n(s, { components: {} })), a = Object.assign(o, { displayName: "IndexDefault" });
export {
  a as default
};
