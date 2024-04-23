import { h as t, F as e, i as r } from "./lib--nodepkg-vuekit.DLZfr_ED.chunk.js";
let i = (t2) => "function" == typeof t2, l = (t2) => void 0 === t2, o = (t2) => t2 === e, n = (t2) => !!o(t2) || "string" == typeof t2 || "object" == typeof t2 && !!t2.__isTeleport, s = (t2) => t2 && !Array.isArray(t2) && !r(t2) && "object" == typeof t2, a = (t2) => i(t2) ? t2 : Array.isArray(t2) ? () => t2 : l(t2) ? t2 : () => t2, u = (t2, e2) => {
  let { children: r2, ...i2 } = t2;
  if (s(r2))
    return [e2 ? { ...i2, key: e2 } : i2, r2];
  let l2 = {}, o2 = {}, n2 = false;
  for (let t3 in i2) {
    let e3 = i2[t3];
    if (t3.startsWith("$")) {
      o2[t3.slice(1)] = a(e3), n2 = true;
      continue;
    }
    l2[t3] = e3;
  }
  let u2 = a(r2);
  return u2 && (o2.default = u2, n2 = true), [e2 ? { ...l2, key: e2 } : l2, n2 ? o2 : void 0];
}, f = (t2, e2, r2) => d(t2, e2, r2), d = (e2, r2, i2) => {
  let [l2, s2] = u(r2, i2);
  if (n(e2)) {
    var a2, f2;
    let r3 = null !== (f2 = null == s2 ? void 0 : null === (a2 = s2.default) || void 0 === a2 ? void 0 : a2.call(s2)) && void 0 !== f2 ? f2 : o(e2) ? [] : void 0;
    return t(e2, l2, r3);
  }
  return t(e2, l2, s2);
};
export {
  f as a,
  d as j
};
