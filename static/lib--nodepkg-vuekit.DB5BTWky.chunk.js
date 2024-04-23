import { F as e, s as t, u as r, a as o, i, n as l, d as u, r as a, c as s, h as c, p as f, b as p, w as h, e as d, o as v, j as y } from "./lib--nodepkg-vue-jsx-runtime.CEFt0iM_.chunk.js";
import { i as b, p as m, k as g, c as _, a as w, b as x, d as S, o as O } from "./lib--nodepkg-typedef.DdnEDJY6.chunk.js";
let P = e;
function E(e10, t10) {
  let r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, o2 = null != r2 ? r2 : t10, i2 = null != t10 ? t10 : e10, l2 = b(e10) ? {} : e10, [u2, a2] = m(Object.keys(l2), (e11) => /^on[A-Z]/.test(e11)), s2 = { emits: u2.map((e11) => g(e11.slice(2))), props: a2.filter((e11) => !/^[$]/.test(e11)).reduce((e11, t11) => {
    let r3 = l2[t11];
    return { ...e11, [t11]: { default: () => {
      try {
        return r3.create(void 0);
      } catch (e12) {
      }
    }, validator: (e12) => r3.validate(e12) } };
  }, {}) }, { name: c2, inheritAttrs: f2, ...p2 } = o2;
  return { ...p2, get name() {
    var h2;
    return null !== (h2 = this.displayName) && void 0 !== h2 ? h2 : c2;
  }, set name(n) {
    o2.name = n;
  }, setup: (e11, t11) => i2(e11, t11), emits: s2.emits, props: s2.props, inheritAttrs: f2, propTypes: l2 };
}
let j = (e10, t10) => new Proxy(e10, { get(e11, r2) {
  var o2;
  return null !== (o2 = t10[r2]) && void 0 !== o2 ? o2 : e11[r2];
} }), k = "undefined" != typeof document, A = Object.assign;
function R(e10, t10) {
  let r2 = {};
  for (let o2 in t10) {
    let i2 = t10[o2];
    r2[o2] = I(i2) ? i2.map(e10) : e10(i2);
  }
  return r2;
}
let C = () => {
}, I = Array.isArray, $ = /#/g, z = /&/g, F = /\//g, T = /=/g, M = /\?/g, D = /\+/g, U = /%5B/g, q = /%5D/g, L = /%5E/g, W = /%60/g, G = /%7B/g, B = /%7C/g, N = /%7D/g, K = /%20/g;
function V(e10) {
  return encodeURI("" + e10).replace(B, "|").replace(U, "[").replace(q, "]");
}
function Y(e10) {
  return V(e10).replace(D, "%2B").replace(K, "+").replace($, "%23").replace(z, "%26").replace(W, "`").replace(G, "{").replace(N, "}").replace(L, "^");
}
function H(e10) {
  return null == e10 ? "" : V(e10).replace($, "%23").replace(M, "%3F").replace(F, "%2F");
}
function X(e10) {
  try {
    return decodeURIComponent("" + e10);
  } catch (e11) {
  }
  return "" + e10;
}
let Q = /\/$/, Z = (e10) => e10.replace(Q, "");
function J(e10, t10) {
  let r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "/", o2, i2 = {}, l2 = "", u2 = "", a2 = t10.indexOf("#"), s2 = t10.indexOf("?");
  return a2 < s2 && a2 >= 0 && (s2 = -1), s2 > -1 && (o2 = t10.slice(0, s2), i2 = e10(l2 = t10.slice(s2 + 1, a2 > -1 ? a2 : t10.length))), a2 > -1 && (o2 = o2 || t10.slice(0, a2), u2 = t10.slice(a2, t10.length)), { fullPath: (o2 = function(e11, t11) {
    let r3, o3;
    if (e11.startsWith("/"))
      return e11;
    if (!e11)
      return t11;
    let i3 = t11.split("/"), l3 = e11.split("/"), u3 = l3[l3.length - 1];
    (".." === u3 || "." === u3) && l3.push("");
    let a3 = i3.length - 1;
    for (r3 = 0; r3 < l3.length; r3++)
      if ("." !== (o3 = l3[r3])) {
        if (".." === o3)
          a3 > 1 && a3--;
        else
          break;
      }
    return i3.slice(0, a3).join("/") + "/" + l3.slice(r3).join("/");
  }(null != o2 ? o2 : t10, r2)) + (l2 && "?") + l2 + u2, path: o2, query: i2, hash: X(u2) };
}
function ee(e10, t10) {
  return t10 && e10.toLowerCase().startsWith(t10.toLowerCase()) ? e10.slice(t10.length) || "/" : e10;
}
function et(e10, t10) {
  return (e10.aliasOf || e10) === (t10.aliasOf || t10);
}
function er(e10, t10) {
  if (Object.keys(e10).length !== Object.keys(t10).length)
    return false;
  for (let i2 in e10) {
    var r2, o2;
    if (r2 = e10[i2], o2 = t10[i2], I(r2) ? !en(r2, o2) : I(o2) ? !en(o2, r2) : r2 !== o2)
      return false;
  }
  return true;
}
function en(e10, t10) {
  return I(t10) ? e10.length === t10.length && e10.every((e11, r2) => e11 === t10[r2]) : 1 === e10.length && e10[0] === t10;
}
(eV = eX || (eX = {})).pop = "pop", eV.push = "push", (eY = eQ || (eQ = {})).back = "back", eY.forward = "forward", eY.unknown = "";
let eo = /^[^#]+#/;
function ei(e10, t10) {
  return e10.replace(eo, "#") + t10;
}
let el = () => ({ left: window.scrollX, top: window.scrollY });
function eu(e10, t10) {
  return (history.state ? history.state.position - t10 : -1) + e10;
}
let ea = /* @__PURE__ */ new Map(), es = () => location.protocol + "//" + location.host;
function ec(e10, t10) {
  let { pathname: r2, search: o2, hash: i2 } = t10, l2 = e10.indexOf("#");
  if (l2 > -1) {
    let t11 = i2.includes(e10.slice(l2)) ? e10.slice(l2).length : 1, r3 = i2.slice(t11);
    return "/" !== r3[0] && (r3 = "/" + r3), ee(r3, "");
  }
  return ee(r2, e10) + o2 + i2;
}
function ef(e10, t10, r2) {
  let o2 = arguments.length > 3 && void 0 !== arguments[3] && arguments[3], i2 = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
  return { back: e10, current: t10, forward: r2, replaced: o2, position: window.history.length, scroll: i2 ? el() : null };
}
function ep(e10) {
  let t10 = function(e11) {
    let { history: t11, location: r3 } = window, o3 = { value: ec(e11, r3) }, i2 = { value: t11.state };
    function l2(o4, l3, u2) {
      let a2 = e11.indexOf("#"), s2 = a2 > -1 ? (r3.host && document.querySelector("base") ? e11 : e11.slice(a2)) + o4 : es() + e11 + o4;
      try {
        t11[u2 ? "replaceState" : "pushState"](l3, "", s2), i2.value = l3;
      } catch (e12) {
        console.error(e12), r3[u2 ? "replace" : "assign"](s2);
      }
    }
    return i2.value || l2(o3.value, { back: null, current: o3.value, forward: null, position: t11.length - 1, replaced: true, scroll: null }, true), { location: o3, state: i2, push: function(e12, r4) {
      let u2 = A({}, i2.value, t11.state, { forward: e12, scroll: el() });
      l2(u2.current, u2, true);
      let a2 = A({}, ef(o3.value, e12, null), { position: u2.position + 1 }, r4);
      l2(e12, a2, false), o3.value = e12;
    }, replace: function(e12, r4) {
      let u2 = A({}, t11.state, ef(i2.value.back, e12, i2.value.forward, true), r4, { position: i2.value.position });
      l2(e12, u2, true), o3.value = e12;
    } };
  }(e10 = function(e11) {
    if (!e11) {
      if (k) {
        let t11 = document.querySelector("base");
        e11 = (e11 = t11 && t11.getAttribute("href") || "/").replace(/^\w+:\/\/[^\/]+/, "");
      } else
        e11 = "/";
    }
    return "/" !== e11[0] && "#" !== e11[0] && (e11 = "/" + e11), Z(e11);
  }(e10)), r2 = function(e11, t11, r3, o3) {
    let i2 = [], l2 = [], u2 = null, a2 = (l3) => {
      let { state: a3 } = l3, s3 = ec(e11, location), c2 = r3.value, f2 = t11.value, p2 = 0;
      if (a3) {
        if (r3.value = s3, t11.value = a3, u2 && u2 === c2) {
          u2 = null;
          return;
        }
        p2 = f2 ? a3.position - f2.position : 0;
      } else
        o3(s3);
      i2.forEach((e12) => {
        e12(r3.value, c2, { delta: p2, type: eX.pop, direction: p2 ? p2 > 0 ? eQ.forward : eQ.back : eQ.unknown });
      });
    };
    function s2() {
      let { history: e12 } = window;
      e12.state && e12.replaceState(A({}, e12.state, { scroll: el() }), "");
    }
    return window.addEventListener("popstate", a2), window.addEventListener("beforeunload", s2, { passive: true }), { pauseListeners: function() {
      u2 = r3.value;
    }, listen: function(e12) {
      i2.push(e12);
      let t12 = () => {
        let t13 = i2.indexOf(e12);
        t13 > -1 && i2.splice(t13, 1);
      };
      return l2.push(t12), t12;
    }, destroy: function() {
      for (let e12 of l2)
        e12();
      l2 = [], window.removeEventListener("popstate", a2), window.removeEventListener("beforeunload", s2);
    } };
  }(e10, t10.state, t10.location, t10.replace), o2 = A({ location: "", base: e10, go: function(e11) {
    let t11 = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    t11 || r2.pauseListeners(), history.go(e11);
  }, createHref: ei.bind(null, e10) }, t10, r2);
  return Object.defineProperty(o2, "location", { enumerable: true, get: () => t10.location.value }), Object.defineProperty(o2, "state", { enumerable: true, get: () => t10.state.value }), o2;
}
function eh(e10) {
  return "string" == typeof e10 || "symbol" == typeof e10;
}
let ed = { path: "/", name: void 0, params: {}, query: {}, hash: "", fullPath: "/", matched: [], meta: {}, redirectedFrom: void 0 }, ev = Symbol("");
function ey(e10, t10) {
  return A(Error(), { type: e10, [ev]: true }, t10);
}
function eb(e10, t10) {
  return e10 instanceof Error && ev in e10 && (null == t10 || !!(e10.type & t10));
}
(eH = eZ || (eZ = {}))[eH.aborted = 4] = "aborted", eH[eH.cancelled = 8] = "cancelled", eH[eH.duplicated = 16] = "duplicated";
let em = "[^/]+?", eg = { sensitive: false, strict: false, start: true, end: true }, e_ = /[.+*?^${}()[\]/\\]/g;
function ew(e10) {
  let t10 = e10[e10.length - 1];
  return e10.length > 0 && t10[t10.length - 1] < 0;
}
let ex = { type: 0, value: "" }, eS = /[a-zA-Z0-9_]/;
function eO(e10, t10) {
  let r2 = {};
  for (let o2 of t10)
    o2 in e10 && (r2[o2] = e10[o2]);
  return r2;
}
function eP(e10) {
  for (; e10; ) {
    if (e10.record.aliasOf)
      return true;
    e10 = e10.parent;
  }
  return false;
}
function eE(e10, t10) {
  let r2 = {};
  for (let o2 in e10)
    r2[o2] = o2 in t10 ? t10[o2] : e10[o2];
  return r2;
}
function ej(e10) {
  let t10 = {};
  if ("" === e10 || "?" === e10)
    return t10;
  let r2 = ("?" === e10[0] ? e10.slice(1) : e10).split("&");
  for (let e11 = 0; e11 < r2.length; ++e11) {
    let o2 = r2[e11].replace(D, " "), i2 = o2.indexOf("="), l2 = X(i2 < 0 ? o2 : o2.slice(0, i2)), u2 = i2 < 0 ? null : X(o2.slice(i2 + 1));
    if (l2 in t10) {
      let e12 = t10[l2];
      I(e12) || (e12 = t10[l2] = [e12]), e12.push(u2);
    } else
      t10[l2] = u2;
  }
  return t10;
}
function ek(e10) {
  let t10 = "";
  for (let r2 in e10) {
    let o2 = e10[r2];
    if (r2 = Y(r2).replace(T, "%3D"), null == o2) {
      void 0 !== o2 && (t10 += (t10.length ? "&" : "") + r2);
      continue;
    }
    (I(o2) ? o2.map((e11) => e11 && Y(e11)) : [o2 && Y(o2)]).forEach((e11) => {
      void 0 !== e11 && (t10 += (t10.length ? "&" : "") + r2, null != e11 && (t10 += "=" + e11));
    });
  }
  return t10;
}
let eA = Symbol(""), eR = Symbol(""), eC = Symbol(""), eI = Symbol(""), e$ = Symbol("");
function ez() {
  let e10 = [];
  return { add: function(t10) {
    return e10.push(t10), () => {
      let r2 = e10.indexOf(t10);
      r2 > -1 && e10.splice(r2, 1);
    };
  }, list: () => e10.slice(), reset: function() {
    e10 = [];
  } };
}
function eF(e10, t10, r2, o2, i2) {
  let l2 = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : (e11) => e11(), u2 = o2 && (o2.enterCallbacks[i2] = o2.enterCallbacks[i2] || []);
  return () => new Promise((a2, s2) => {
    let c2 = (e11) => {
      false === e11 ? s2(ey(4, { from: r2, to: t10 })) : e11 instanceof Error ? s2(e11) : "string" == typeof e11 || e11 && "object" == typeof e11 ? s2(ey(2, { from: t10, to: e11 })) : (u2 && o2.enterCallbacks[i2] === u2 && "function" == typeof e11 && u2.push(e11), a2());
    }, f2 = Promise.resolve(l2(() => e10.call(o2 && o2.instances[i2], t10, r2, c2)));
    e10.length < 3 && (f2 = f2.then(c2)), f2.catch((e11) => s2(e11));
  });
}
function eT(e10, t10, r2, o2) {
  let i2 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : (e11) => e11(), l2 = [];
  for (let u2 of e10)
    for (let e11 in u2.components) {
      let a2 = u2.components[e11];
      if ("beforeRouteEnter" === t10 || u2.instances[e11]) {
        if ("object" == typeof a2 || "displayName" in a2 || "props" in a2 || "__vccOpts" in a2) {
          let s2 = (a2.__vccOpts || a2)[t10];
          s2 && l2.push(eF(s2, r2, o2, u2, e11, i2));
        } else {
          let s2 = a2();
          l2.push(() => s2.then((l3) => {
            if (!l3)
              return Promise.reject(Error(`Couldn't resolve component "${e11}" at "${u2.path}"`));
            let a3 = l3.__esModule || "Module" === l3[Symbol.toStringTag] ? l3.default : l3;
            u2.components[e11] = a3;
            let s3 = (a3.__vccOpts || a3)[t10];
            return s3 && eF(s3, r2, o2, u2, e11, i2)();
          }));
        }
      }
    }
  return l2;
}
function eM(e10) {
  let t10 = i(eC), o2 = i(eI), l2 = s(() => {
    let o3 = r(e10.to);
    return t10.resolve(o3);
  }), u2 = s(() => {
    let { matched: e11 } = l2.value, { length: t11 } = e11, r2 = e11[t11 - 1], i2 = o2.matched;
    if (!r2 || !i2.length)
      return -1;
    let u3 = i2.findIndex(et.bind(null, r2));
    if (u3 > -1)
      return u3;
    let a3 = eU(e11[t11 - 2]);
    return t11 > 1 && eU(r2) === a3 && i2[i2.length - 1].path !== a3 ? i2.findIndex(et.bind(null, e11[t11 - 2])) : u3;
  }), a2 = s(() => u2.value > -1 && function(e11, t11) {
    for (let r2 in t11) {
      let o3 = t11[r2], i2 = e11[r2];
      if ("string" == typeof o3) {
        if (o3 !== i2)
          return false;
      } else if (!I(i2) || i2.length !== o3.length || o3.some((e12, t12) => e12 !== i2[t12]))
        return false;
    }
    return true;
  }(o2.params, l2.value.params)), c2 = s(() => u2.value > -1 && u2.value === o2.matched.length - 1 && er(o2.params, l2.value.params));
  return { route: l2, href: s(() => l2.value.href), isActive: a2, isExactActive: c2, navigate: function() {
    let o3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return !function(e11) {
      if (!e11.metaKey && !e11.altKey && !e11.ctrlKey && !e11.shiftKey && !e11.defaultPrevented && (void 0 === e11.button || 0 === e11.button)) {
        if (e11.currentTarget && e11.currentTarget.getAttribute) {
          let t11 = e11.currentTarget.getAttribute("target");
          if (/\b_blank\b/i.test(t11))
            return;
        }
        return e11.preventDefault && e11.preventDefault(), true;
      }
    }(o3) ? Promise.resolve() : t10[r(e10.replace) ? "replace" : "push"](r(e10.to)).catch(C);
  } };
}
let eD = u({ name: "RouterLink", compatConfig: { MODE: 3 }, props: { to: { type: [String, Object], required: true }, replace: Boolean, activeClass: String, exactActiveClass: String, custom: Boolean, ariaCurrentValue: { type: String, default: "page" } }, useLink: eM, setup(e10, t10) {
  let { slots: r2 } = t10, o2 = a(eM(e10)), { options: l2 } = i(eC), u2 = s(() => ({ [eq(e10.activeClass, l2.linkActiveClass, "router-link-active")]: o2.isActive, [eq(e10.exactActiveClass, l2.linkExactActiveClass, "router-link-exact-active")]: o2.isExactActive }));
  return () => {
    let t11 = r2.default && r2.default(o2);
    return e10.custom ? t11 : c("a", { "aria-current": o2.isExactActive ? e10.ariaCurrentValue : null, href: o2.href, onClick: o2.navigate, class: u2.value }, t11);
  };
} });
function eU(e10) {
  return e10 ? e10.aliasOf ? e10.aliasOf.path : e10.path : "";
}
let eq = (e10, t10, r2) => null != e10 ? e10 : null != t10 ? t10 : r2, eL = u({ name: "RouterView", inheritAttrs: false, props: { name: { type: String, default: "default" }, route: Object }, compatConfig: { MODE: 3 }, setup(e10, t10) {
  let { attrs: o2, slots: l2 } = t10, u2 = i(e$), a2 = s(() => e10.route || u2.value), d2 = i(eR, 0), v2 = s(() => {
    let e11, t11 = r(d2), { matched: o3 } = a2.value;
    for (; (e11 = o3[t11]) && !e11.components; )
      t11++;
    return t11;
  }), y2 = s(() => a2.value.matched[v2.value]);
  f(eR, s(() => v2.value + 1)), f(eA, y2), f(e$, a2);
  let b2 = p();
  return h(() => [b2.value, y2.value, e10.name], (e11, t11) => {
    let [r2, o3, i2] = e11, [l3, u3, a3] = t11;
    o3 && (o3.instances[i2] = r2, u3 && u3 !== o3 && r2 && r2 === l3 && (o3.leaveGuards.size || (o3.leaveGuards = u3.leaveGuards), o3.updateGuards.size || (o3.updateGuards = u3.updateGuards))), !r2 || !o3 || u3 && et(o3, u3) && l3 || (o3.enterCallbacks[i2] || []).forEach((e12) => e12(r2));
  }, { flush: "post" }), () => {
    let t11 = a2.value, r2 = e10.name, i2 = y2.value, u3 = i2 && i2.components[r2];
    if (!u3)
      return eW(l2.default, { Component: u3, route: t11 });
    let s2 = i2.props[r2], f2 = c(u3, A({}, s2 ? true === s2 ? t11.params : "function" == typeof s2 ? s2(t11) : s2 : null, o2, { onVnodeUnmounted: (e11) => {
      e11.component.isUnmounted && (i2.instances[r2] = null);
    }, ref: b2 }));
    return eW(l2.default, { Component: f2, route: t11 }) || f2;
  };
} });
function eW(e10, t10) {
  if (!e10)
    return null;
  let r2 = e10(t10);
  return 1 === r2.length ? r2[0] : r2;
}
function eG(e10) {
  let i2, u2, a2;
  let s2 = function(e11, t10) {
    let r2 = [], o2 = /* @__PURE__ */ new Map();
    function i3(e12, u3, a3) {
      let s3, c3;
      let f3 = !a3, p3 = { path: e12.path, redirect: e12.redirect, name: e12.name, meta: e12.meta || {}, aliasOf: void 0, beforeEnter: e12.beforeEnter, props: function(e13) {
        let t11 = {}, r3 = e13.props || false;
        if ("component" in e13)
          t11.default = r3;
        else
          for (let o3 in e13.components)
            t11[o3] = "object" == typeof r3 ? r3[o3] : r3;
        return t11;
      }(e12), children: e12.children || [], instances: {}, leaveGuards: /* @__PURE__ */ new Set(), updateGuards: /* @__PURE__ */ new Set(), enterCallbacks: {}, components: "components" in e12 ? e12.components || null : e12.component && { default: e12.component } };
      p3.aliasOf = a3 && a3.record;
      let h3 = eE(t10, e12), d3 = [p3];
      if ("alias" in e12)
        for (let t11 of "string" == typeof e12.alias ? [e12.alias] : e12.alias)
          d3.push(A({}, p3, { components: a3 ? a3.record.components : p3.components, path: t11, aliasOf: a3 ? a3.record : p3 }));
      for (let t11 of d3) {
        let { path: d4 } = t11;
        if (u3 && "/" !== d4[0]) {
          let e13 = u3.record.path, r3 = "/" === e13[e13.length - 1] ? "" : "/";
          t11.path = u3.record.path + (d4 && r3 + d4);
        }
        if (s3 = function(e13, t12, r3) {
          let o3 = function(e14, t13) {
            let r4 = A({}, eg, t13), o4 = [], i5 = r4.start ? "^" : "", l3 = [];
            for (let t14 of e14) {
              let e15 = t14.length ? [] : [90];
              r4.strict && !t14.length && (i5 += "/");
              for (let o5 = 0; o5 < t14.length; o5++) {
                let u5 = t14[o5], a4 = 40 + (r4.sensitive ? 0.25 : 0);
                if (0 === u5.type)
                  o5 || (i5 += "/"), i5 += u5.value.replace(e_, "\\$&"), a4 += 40;
                else if (1 === u5.type) {
                  let { value: e16, repeatable: r5, optional: s4, regexp: c4 } = u5;
                  l3.push({ name: e16, repeatable: r5, optional: s4 });
                  let f4 = c4 || em;
                  if (f4 !== em) {
                    a4 += 10;
                    try {
                      RegExp(`(${f4})`);
                    } catch (t15) {
                      throw Error(`Invalid custom RegExp for param "${e16}" (${f4}): ` + t15.message);
                    }
                  }
                  let p4 = r5 ? `((?:${f4})(?:/(?:${f4}))*)` : `(${f4})`;
                  o5 || (p4 = s4 && t14.length < 2 ? `(?:/${p4})` : "/" + p4), s4 && (p4 += "?"), i5 += p4, a4 += 20, s4 && (a4 += -8), r5 && (a4 += -20), ".*" === f4 && (a4 += -50);
                }
                e15.push(a4);
              }
              o4.push(e15);
            }
            if (r4.strict && r4.end) {
              let e15 = o4.length - 1;
              o4[e15][o4[e15].length - 1] += 0.7000000000000001;
            }
            r4.strict || (i5 += "/?"), r4.end ? i5 += "$" : r4.strict && (i5 += "(?:/|$)");
            let u4 = new RegExp(i5, r4.sensitive ? "" : "i");
            return { re: u4, score: o4, keys: l3, parse: function(e15) {
              let t14 = e15.match(u4), r5 = {};
              if (!t14)
                return null;
              for (let e16 = 1; e16 < t14.length; e16++) {
                let o5 = t14[e16] || "", i6 = l3[e16 - 1];
                r5[i6.name] = o5 && i6.repeatable ? o5.split("/") : o5;
              }
              return r5;
            }, stringify: function(t14) {
              let r5 = "", o5 = false;
              for (let i6 of e14)
                for (let e15 of (o5 && r5.endsWith("/") || (r5 += "/"), o5 = false, i6))
                  if (0 === e15.type)
                    r5 += e15.value;
                  else if (1 === e15.type) {
                    let { value: l4, repeatable: u5, optional: a4 } = e15, s4 = l4 in t14 ? t14[l4] : "";
                    if (I(s4) && !u5)
                      throw Error(`Provided param "${l4}" is an array but it is not repeatable (* or + modifiers)`);
                    let c4 = I(s4) ? s4.join("/") : s4;
                    if (!c4) {
                      if (a4)
                        i6.length < 2 && (r5.endsWith("/") ? r5 = r5.slice(0, -1) : o5 = true);
                      else
                        throw Error(`Missing required param "${l4}"`);
                    }
                    r5 += c4;
                  }
              return r5 || "/";
            } };
          }(function(e14) {
            let t13, r4;
            if (!e14)
              return [[]];
            if ("/" === e14)
              return [[ex]];
            if (!e14.startsWith("/"))
              throw Error(`Invalid path "${e14}"`);
            function o4(e15) {
              throw Error(`ERR (${i5})/"${c4}": ${e15}`);
            }
            let i5 = 0, l3 = 0, u4 = [];
            function a4() {
              t13 && u4.push(t13), t13 = [];
            }
            let s4 = 0, c4 = "", f4 = "";
            function p4() {
              c4 && (0 === i5 ? t13.push({ type: 0, value: c4 }) : 1 === i5 || 2 === i5 || 3 === i5 ? (t13.length > 1 && ("*" === r4 || "+" === r4) && o4(`A repeatable param (${c4}) must be alone in its segment. eg: '/:ids+.`), t13.push({ type: 1, value: c4, regexp: f4, repeatable: "*" === r4 || "+" === r4, optional: "*" === r4 || "?" === r4 })) : o4("Invalid state to consume buffer"), c4 = "");
            }
            for (; s4 < e14.length; ) {
              if ("\\" === (r4 = e14[s4++]) && 2 !== i5) {
                l3 = i5, i5 = 4;
                continue;
              }
              switch (i5) {
                case 0:
                  "/" === r4 ? (c4 && p4(), a4()) : ":" === r4 ? (p4(), i5 = 1) : c4 += r4;
                  break;
                case 4:
                  c4 += r4, i5 = l3;
                  break;
                case 1:
                  "(" === r4 ? i5 = 2 : eS.test(r4) ? c4 += r4 : (p4(), i5 = 0, "*" !== r4 && "?" !== r4 && "+" !== r4 && s4--);
                  break;
                case 2:
                  ")" === r4 ? "\\" == f4[f4.length - 1] ? f4 = f4.slice(0, -1) + r4 : i5 = 3 : f4 += r4;
                  break;
                case 3:
                  p4(), i5 = 0, "*" !== r4 && "?" !== r4 && "+" !== r4 && s4--, f4 = "";
                  break;
                default:
                  o4("Unknown state");
              }
            }
            return 2 === i5 && o4(`Unfinished custom RegExp for param "${c4}"`), p4(), a4(), u4;
          }(e13.path), r3), i4 = A(o3, { record: e13, parent: t12, children: [], alias: [] });
          return t12 && !i4.record.aliasOf == !t12.record.aliasOf && t12.children.push(i4), i4;
        }(t11, u3, h3), a3 ? a3.alias.push(s3) : ((c3 = c3 || s3) !== s3 && c3.alias.push(s3), f3 && e12.name && !eP(s3) && l2(e12.name)), p3.children) {
          let e13 = p3.children;
          for (let t12 = 0; t12 < e13.length; t12++)
            i3(e13[t12], s3, a3 && a3.children[t12]);
        }
        a3 = a3 || s3, (s3.record.components && Object.keys(s3.record.components).length || s3.record.name || s3.record.redirect) && function(e13) {
          let t12 = 0;
          for (; t12 < r2.length && function(e14, t13) {
            let r3 = 0, o3 = e14.score, i4 = t13.score;
            for (; r3 < o3.length && r3 < i4.length; ) {
              let e15 = function(e16, t14) {
                let r4 = 0;
                for (; r4 < e16.length && r4 < t14.length; ) {
                  let o4 = t14[r4] - e16[r4];
                  if (o4)
                    return o4;
                  r4++;
                }
                return e16.length < t14.length ? 1 === e16.length && 80 === e16[0] ? -1 : 1 : e16.length > t14.length ? 1 === t14.length && 80 === t14[0] ? 1 : -1 : 0;
              }(o3[r3], i4[r3]);
              if (e15)
                return e15;
              r3++;
            }
            if (1 === Math.abs(i4.length - o3.length)) {
              if (ew(o3))
                return 1;
              if (ew(i4))
                return -1;
            }
            return i4.length - o3.length;
          }(e13, r2[t12]) >= 0 && (e13.record.path !== r2[t12].record.path || !function e14(t13, r3) {
            return r3.children.some((r4) => r4 === t13 || e14(t13, r4));
          }(e13, r2[t12])); )
            t12++;
          r2.splice(t12, 0, e13), e13.record.name && !eP(e13) && o2.set(e13.record.name, e13);
        }(s3);
      }
      return c3 ? () => {
        l2(c3);
      } : C;
    }
    function l2(e12) {
      if (eh(e12)) {
        let t11 = o2.get(e12);
        t11 && (o2.delete(e12), r2.splice(r2.indexOf(t11), 1), t11.children.forEach(l2), t11.alias.forEach(l2));
      } else {
        let t11 = r2.indexOf(e12);
        t11 > -1 && (r2.splice(t11, 1), e12.record.name && o2.delete(e12.record.name), e12.children.forEach(l2), e12.alias.forEach(l2));
      }
    }
    return t10 = eE({ strict: false, end: true, sensitive: false }, t10), e11.forEach((e12) => i3(e12)), { addRoute: i3, resolve: function(e12, t11) {
      let i4, l3, u3;
      let a3 = {};
      if ("name" in e12 && e12.name) {
        if (!(i4 = o2.get(e12.name)))
          throw ey(1, { location: e12 });
        u3 = i4.record.name, a3 = A(eO(t11.params, i4.keys.filter((e13) => !e13.optional).concat(i4.parent ? i4.parent.keys.filter((e13) => e13.optional) : []).map((e13) => e13.name)), e12.params && eO(e12.params, i4.keys.map((e13) => e13.name))), l3 = i4.stringify(a3);
      } else if (null != e12.path)
        l3 = e12.path, (i4 = r2.find((e13) => e13.re.test(l3))) && (a3 = i4.parse(l3), u3 = i4.record.name);
      else {
        if (!(i4 = t11.name ? o2.get(t11.name) : r2.find((e13) => e13.re.test(t11.path))))
          throw ey(1, { location: e12, currentLocation: t11 });
        u3 = i4.record.name, a3 = A({}, t11.params, e12.params), l3 = i4.stringify(a3);
      }
      let s3 = [], c3 = i4;
      for (; c3; )
        s3.unshift(c3.record), c3 = c3.parent;
      return { name: u3, path: l3, params: a3, matched: s3, meta: s3.reduce((e13, t12) => A(e13, t12.meta), {}) };
    }, removeRoute: l2, getRoutes: function() {
      return r2;
    }, getRecordMatcher: function(e12) {
      return o2.get(e12);
    } };
  }(e10.routes, e10), c2 = e10.parseQuery || ej, f2 = e10.stringifyQuery || ek, p2 = e10.history, h2 = ez(), d2 = ez(), v2 = ez(), y2 = t(ed), b2 = ed;
  k && e10.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  let m2 = R.bind(null, (e11) => "" + e11), g2 = R.bind(null, H), _2 = R.bind(null, X);
  function w2(e11, t10) {
    let r2;
    if (t10 = A({}, t10 || y2.value), "string" == typeof e11) {
      let r3 = J(c2, e11, t10.path), o3 = s2.resolve({ path: r3.path }, t10), i4 = p2.createHref(r3.fullPath);
      return A(r3, o3, { params: _2(o3.params), hash: X(r3.hash), redirectedFrom: void 0, href: i4 });
    }
    if (null != e11.path)
      r2 = A({}, e11, { path: J(c2, e11.path, t10.path).path });
    else {
      let o3 = A({}, e11.params);
      for (let e12 in o3)
        null == o3[e12] && delete o3[e12];
      r2 = A({}, e11, { params: g2(o3) }), t10.params = g2(t10.params);
    }
    let o2 = s2.resolve(r2, t10), i3 = e11.hash || "";
    o2.params = m2(_2(o2.params));
    let l2 = function(e12, t11) {
      let r3 = t11.query ? e12(t11.query) : "";
      return t11.path + (r3 && "?") + r3 + (t11.hash || "");
    }(f2, A({}, e11, { hash: V(i3).replace(G, "{").replace(N, "}").replace(L, "^"), path: o2.path })), u3 = p2.createHref(l2);
    return A({ fullPath: l2, hash: i3, query: f2 === ek ? function(e12) {
      let t11 = {};
      for (let r3 in e12) {
        let o3 = e12[r3];
        void 0 !== o3 && (t11[r3] = I(o3) ? o3.map((e13) => null == e13 ? null : "" + e13) : null == o3 ? o3 : "" + o3);
      }
      return t11;
    }(e11.query) : e11.query || {} }, o2, { redirectedFrom: void 0, href: u3 });
  }
  function x2(e11) {
    return "string" == typeof e11 ? J(c2, e11, y2.value.path) : A({}, e11);
  }
  function S2(e11, t10) {
    if (b2 !== e11)
      return ey(8, { from: t10, to: e11 });
  }
  function O2(e11) {
    let t10 = e11.matched[e11.matched.length - 1];
    if (t10 && t10.redirect) {
      let { redirect: r2 } = t10, o2 = "function" == typeof r2 ? r2(e11) : r2;
      return "string" == typeof o2 && ((o2 = o2.includes("?") || o2.includes("#") ? o2 = x2(o2) : { path: o2 }).params = {}), A({ query: e11.query, hash: e11.hash, params: null != o2.path ? {} : e11.params }, o2);
    }
  }
  function P2(e11, t10) {
    let r2;
    let o2 = b2 = w2(e11), i3 = y2.value, l2 = e11.state, u3 = e11.force, a3 = true === e11.replace, s3 = O2(o2);
    return s3 ? P2(A(x2(s3), { state: "object" == typeof s3 ? A({}, l2, s3.state) : l2, force: u3, replace: a3 }), t10 || o2) : (o2.redirectedFrom = t10, !u3 && function(e12, t11, r3) {
      let o3 = t11.matched.length - 1, i4 = r3.matched.length - 1;
      return o3 > -1 && o3 === i4 && et(t11.matched[o3], r3.matched[i4]) && er(t11.params, r3.params) && e12(t11.query) === e12(r3.query) && t11.hash === r3.hash;
    }(f2, i3, o2) && (r2 = ey(16, { to: o2, from: i3 }), q2(i3, i3, true, false)), (r2 ? Promise.resolve(r2) : $2(o2, i3)).catch((e12) => eb(e12) ? eb(e12, 2) ? e12 : U2(e12) : D2(e12, o2, i3)).then((e12) => {
      if (e12) {
        if (eb(e12, 2))
          return P2(A({ replace: a3 }, x2(e12.to), { state: "object" == typeof e12.to ? A({}, l2, e12.to.state) : l2, force: u3 }), t10 || o2);
      } else
        e12 = F2(o2, i3, true, a3, l2);
      return z2(o2, i3, e12), e12;
    }));
  }
  function E2(e11, t10) {
    let r2 = S2(e11, t10);
    return r2 ? Promise.reject(r2) : Promise.resolve();
  }
  function j2(e11) {
    let t10 = B2.values().next().value;
    return t10 && "function" == typeof t10.runWithContext ? t10.runWithContext(e11) : e11();
  }
  function $2(e11, t10) {
    let r2;
    let [o2, i3, l2] = function(e12, t11) {
      let r3 = [], o3 = [], i4 = [], l3 = Math.max(t11.matched.length, e12.matched.length);
      for (let u4 = 0; u4 < l3; u4++) {
        let l4 = t11.matched[u4];
        l4 && (e12.matched.find((e13) => et(e13, l4)) ? o3.push(l4) : r3.push(l4));
        let a3 = e12.matched[u4];
        a3 && !t11.matched.find((e13) => et(e13, a3)) && i4.push(a3);
      }
      return [r3, o3, i4];
    }(e11, t10);
    for (let i4 of (r2 = eT(o2.reverse(), "beforeRouteLeave", e11, t10), o2))
      i4.leaveGuards.forEach((o3) => {
        r2.push(eF(o3, e11, t10));
      });
    let u3 = E2.bind(null, e11, t10);
    return r2.push(u3), Y2(r2).then(() => {
      for (let o3 of (r2 = [], h2.list()))
        r2.push(eF(o3, e11, t10));
      return r2.push(u3), Y2(r2);
    }).then(() => {
      for (let o3 of (r2 = eT(i3, "beforeRouteUpdate", e11, t10), i3))
        o3.updateGuards.forEach((o4) => {
          r2.push(eF(o4, e11, t10));
        });
      return r2.push(u3), Y2(r2);
    }).then(() => {
      for (let o3 of (r2 = [], l2))
        if (o3.beforeEnter) {
          if (I(o3.beforeEnter))
            for (let i4 of o3.beforeEnter)
              r2.push(eF(i4, e11, t10));
          else
            r2.push(eF(o3.beforeEnter, e11, t10));
        }
      return r2.push(u3), Y2(r2);
    }).then(() => (e11.matched.forEach((e12) => e12.enterCallbacks = {}), (r2 = eT(l2, "beforeRouteEnter", e11, t10, j2)).push(u3), Y2(r2))).then(() => {
      for (let o3 of (r2 = [], d2.list()))
        r2.push(eF(o3, e11, t10));
      return r2.push(u3), Y2(r2);
    }).catch((e12) => eb(e12, 8) ? e12 : Promise.reject(e12));
  }
  function z2(e11, t10, r2) {
    v2.list().forEach((o2) => j2(() => o2(e11, t10, r2)));
  }
  function F2(e11, t10, r2, o2, i3) {
    let l2 = S2(e11, t10);
    if (l2)
      return l2;
    let u3 = t10 === ed, a3 = k ? history.state : {};
    r2 && (o2 || u3 ? p2.replace(e11.fullPath, A({ scroll: u3 && a3 && a3.scroll }, i3)) : p2.push(e11.fullPath, i3)), y2.value = e11, q2(e11, t10, r2, u3), U2();
  }
  let T2 = ez(), M2 = ez();
  function D2(e11, t10, r2) {
    U2(e11);
    let o2 = M2.list();
    return o2.length ? o2.forEach((o3) => o3(e11, t10, r2)) : console.error(e11), Promise.reject(e11);
  }
  function U2(e11) {
    return u2 || (u2 = !e11, i2 || (i2 = p2.listen((e12, t10, r2) => {
      if (!K2.listening)
        return;
      let o2 = w2(e12), i3 = O2(o2);
      if (i3) {
        P2(A(i3, { replace: true }), o2).catch(C);
        return;
      }
      b2 = o2;
      let l2 = y2.value;
      if (k) {
        var u3, a3;
        u3 = eu(l2.fullPath, r2.delta), a3 = el(), ea.set(u3, a3);
      }
      $2(o2, l2).catch((e13) => eb(e13, 12) ? e13 : eb(e13, 2) ? (P2(e13.to, o2).then((e14) => {
        eb(e14, 20) && !r2.delta && r2.type === eX.pop && p2.go(-1, false);
      }).catch(C), Promise.reject()) : (r2.delta && p2.go(-r2.delta, false), D2(e13, o2, l2))).then((e13) => {
        (e13 = e13 || F2(o2, l2, false)) && (r2.delta && !eb(e13, 8) ? p2.go(-r2.delta, false) : r2.type === eX.pop && eb(e13, 20) && p2.go(-1, false)), z2(o2, l2, e13);
      }).catch(C);
    })), T2.list().forEach((t10) => {
      let [r2, o2] = t10;
      return e11 ? o2(e11) : r2();
    }), T2.reset()), e11;
  }
  function q2(t10, r2, o2, i3) {
    let { scrollBehavior: u3 } = e10;
    if (!k || !u3)
      return Promise.resolve();
    let a3 = !o2 && function(e11) {
      let t11 = ea.get(e11);
      return ea.delete(e11), t11;
    }(eu(t10.fullPath, 0)) || (i3 || !o2) && history.state && history.state.scroll || null;
    return l().then(() => u3(t10, r2, a3)).then((e11) => e11 && function(e12) {
      let t11;
      if ("el" in e12) {
        let r3 = e12.el, o3 = "string" == typeof r3 && r3.startsWith("#"), i4 = "string" == typeof r3 ? o3 ? document.getElementById(r3.slice(1)) : document.querySelector(r3) : r3;
        if (!i4)
          return;
        t11 = function(e13, t12) {
          let r4 = document.documentElement.getBoundingClientRect(), o4 = e13.getBoundingClientRect();
          return { behavior: t12.behavior, left: o4.left - r4.left - (t12.left || 0), top: o4.top - r4.top - (t12.top || 0) };
        }(i4, e12);
      } else
        t11 = e12;
      "scrollBehavior" in document.documentElement.style ? window.scrollTo(t11) : window.scrollTo(null != t11.left ? t11.left : window.scrollX, null != t11.top ? t11.top : window.scrollY);
    }(e11)).catch((e11) => D2(e11, t10, r2));
  }
  let W2 = (e11) => p2.go(e11), B2 = /* @__PURE__ */ new Set(), K2 = { currentRoute: y2, listening: true, addRoute: function(e11, t10) {
    let r2, o2;
    return eh(e11) ? (r2 = s2.getRecordMatcher(e11), o2 = t10) : o2 = e11, s2.addRoute(o2, r2);
  }, removeRoute: function(e11) {
    let t10 = s2.getRecordMatcher(e11);
    t10 && s2.removeRoute(t10);
  }, hasRoute: function(e11) {
    return !!s2.getRecordMatcher(e11);
  }, getRoutes: function() {
    return s2.getRoutes().map((e11) => e11.record);
  }, resolve: w2, options: e10, push: function(e11) {
    return P2(e11);
  }, replace: function(e11) {
    return P2(A(x2(e11), { replace: true }));
  }, go: W2, back: () => W2(-1), forward: () => W2(1), beforeEach: h2.add, beforeResolve: d2.add, afterEach: v2.add, onError: M2.add, isReady: function() {
    return u2 && y2.value !== ed ? Promise.resolve() : new Promise((e11, t10) => {
      T2.add([e11, t10]);
    });
  }, install(e11) {
    e11.component("RouterLink", eD), e11.component("RouterView", eL), e11.config.globalProperties.$router = this, Object.defineProperty(e11.config.globalProperties, "$route", { enumerable: true, get: () => r(y2) }), k && !a2 && y2.value === ed && (a2 = true, P2(p2.location).catch((e12) => {
    }));
    let t10 = {};
    for (let e12 in ed)
      Object.defineProperty(t10, e12, { get: () => y2.value[e12], enumerable: true });
    e11.provide(eC, this), e11.provide(eI, o(t10)), e11.provide(e$, y2);
    let l2 = e11.unmount;
    B2.add(e11), e11.unmount = function() {
      B2.delete(e11), B2.size < 1 && (b2 = ed, i2 && i2(), i2 = null, y2.value = ed, a2 = false, u2 = false), l2();
    };
  } };
  function Y2(e11) {
    return e11.reduce((e12, t10) => e12.then(() => j2(t10)), Promise.resolve());
  }
  return K2;
}
function eB() {
  return i(eC);
}
let eN = eD, eK = eL;
var eV, eY, eH, eX, eQ, eZ, eJ, e0 = function(e10, t10) {
  return (e0 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e11, t11) {
    e11.__proto__ = t11;
  } || function(e11, t11) {
    for (var r2 in t11)
      Object.prototype.hasOwnProperty.call(t11, r2) && (e11[r2] = t11[r2]);
  })(e10, t10);
};
function e1(e10, t10) {
  if ("function" != typeof t10 && null !== t10)
    throw TypeError("Class extends value " + String(t10) + " is not a constructor or null");
  function r2() {
    this.constructor = e10;
  }
  e0(e10, t10), e10.prototype = null === t10 ? Object.create(t10) : (r2.prototype = t10.prototype, new r2());
}
function e2(e10, t10) {
  var r2 = {};
  for (var o2 in e10)
    Object.prototype.hasOwnProperty.call(e10, o2) && 0 > t10.indexOf(o2) && (r2[o2] = e10[o2]);
  if (null != e10 && "function" == typeof Object.getOwnPropertySymbols)
    for (var i2 = 0, o2 = Object.getOwnPropertySymbols(e10); i2 < o2.length; i2++)
      0 > t10.indexOf(o2[i2]) && Object.prototype.propertyIsEnumerable.call(e10, o2[i2]) && (r2[o2[i2]] = e10[o2[i2]]);
  return r2;
}
function e3(e10, t10) {
  var r2, o2, i2, l2, u2 = { label: 0, sent: function() {
    if (1 & i2[0])
      throw i2[1];
    return i2[1];
  }, trys: [], ops: [] };
  return l2 = { next: a2(0), throw: a2(1), return: a2(2) }, "function" == typeof Symbol && (l2[Symbol.iterator] = function() {
    return this;
  }), l2;
  function a2(l3) {
    return function(a3) {
      return function(l4) {
        if (r2)
          throw TypeError("Generator is already executing.");
        for (; u2; )
          try {
            if (r2 = 1, o2 && (i2 = 2 & l4[0] ? o2.return : l4[0] ? o2.throw || ((i2 = o2.return) && i2.call(o2), 0) : o2.next) && !(i2 = i2.call(o2, l4[1])).done)
              return i2;
            switch (o2 = 0, i2 && (l4 = [2 & l4[0], i2.value]), l4[0]) {
              case 0:
              case 1:
                i2 = l4;
                break;
              case 4:
                return u2.label++, { value: l4[1], done: false };
              case 5:
                u2.label++, o2 = l4[1], l4 = [0];
                continue;
              case 7:
                l4 = u2.ops.pop(), u2.trys.pop();
                continue;
              default:
                if (!(i2 = (i2 = u2.trys).length > 0 && i2[i2.length - 1]) && (6 === l4[0] || 2 === l4[0])) {
                  u2 = 0;
                  continue;
                }
                if (3 === l4[0] && (!i2 || l4[1] > i2[0] && l4[1] < i2[3])) {
                  u2.label = l4[1];
                  break;
                }
                if (6 === l4[0] && u2.label < i2[1]) {
                  u2.label = i2[1], i2 = l4;
                  break;
                }
                if (i2 && u2.label < i2[2]) {
                  u2.label = i2[2], u2.ops.push(l4);
                  break;
                }
                i2[2] && u2.ops.pop(), u2.trys.pop();
                continue;
            }
            l4 = t10.call(e10, u2);
          } catch (e11) {
            l4 = [6, e11], o2 = 0;
          } finally {
            r2 = i2 = 0;
          }
        if (5 & l4[0])
          throw l4[1];
        return { value: l4[0] ? l4[1] : void 0, done: true };
      }([l3, a3]);
    };
  }
}
function e4(e10) {
  var t10 = "function" == typeof Symbol && Symbol.iterator, r2 = t10 && e10[t10], o2 = 0;
  if (r2)
    return r2.call(e10);
  if (e10 && "number" == typeof e10.length)
    return { next: function() {
      return e10 && o2 >= e10.length && (e10 = void 0), { value: e10 && e10[o2++], done: !e10 };
    } };
  throw TypeError(t10 ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function e5(e10, t10) {
  var r2 = "function" == typeof Symbol && e10[Symbol.iterator];
  if (!r2)
    return e10;
  var o2, i2, l2 = r2.call(e10), u2 = [];
  try {
    for (; (void 0 === t10 || t10-- > 0) && !(o2 = l2.next()).done; )
      u2.push(o2.value);
  } catch (e11) {
    i2 = { error: e11 };
  } finally {
    try {
      o2 && !o2.done && (r2 = l2.return) && r2.call(l2);
    } finally {
      if (i2)
        throw i2.error;
    }
  }
  return u2;
}
function e6(e10, t10, r2) {
  if (r2 || 2 == arguments.length)
    for (var o2, i2 = 0, l2 = t10.length; i2 < l2; i2++)
      !o2 && i2 in t10 || (o2 || (o2 = Array.prototype.slice.call(t10, 0, i2)), o2[i2] = t10[i2]);
  return e10.concat(o2 || Array.prototype.slice.call(t10));
}
function e8(e10) {
  return this instanceof e8 ? (this.v = e10, this) : new e8(e10);
}
function e7(e10) {
  return "function" == typeof e10;
}
function e9(e10) {
  var t10 = e10(function(e11) {
    Error.call(e11), e11.stack = Error().stack;
  });
  return t10.prototype = Object.create(Error.prototype), t10.prototype.constructor = t10, t10;
}
var te = e9(function(e10) {
  return function(t10) {
    e10(this), this.message = t10 ? t10.length + " errors occurred during unsubscription:\n" + t10.map(function(e11, t11) {
      return t11 + 1 + ") " + e11.toString();
    }).join("\n  ") : "", this.name = "UnsubscriptionError", this.errors = t10;
  };
});
function tt(e10, t10) {
  if (e10) {
    var r2 = e10.indexOf(t10);
    0 <= r2 && e10.splice(r2, 1);
  }
}
var tr = function() {
  var e10;
  function t10(e11) {
    this.initialTeardown = e11, this.closed = false, this._parentage = null, this._finalizers = null;
  }
  return t10.prototype.unsubscribe = function() {
    if (!this.closed) {
      this.closed = true;
      var e11, t11, r2, o2, i2, l2 = this._parentage;
      if (l2) {
        if (this._parentage = null, Array.isArray(l2))
          try {
            for (var u2 = e4(l2), a2 = u2.next(); !a2.done; a2 = u2.next())
              a2.value.remove(this);
          } catch (t12) {
            e11 = { error: t12 };
          } finally {
            try {
              a2 && !a2.done && (t11 = u2.return) && t11.call(u2);
            } finally {
              if (e11)
                throw e11.error;
            }
          }
        else
          l2.remove(this);
      }
      var s2 = this.initialTeardown;
      if (e7(s2))
        try {
          s2();
        } catch (e12) {
          i2 = e12 instanceof te ? e12.errors : [e12];
        }
      var c2 = this._finalizers;
      if (c2) {
        this._finalizers = null;
        try {
          for (var f2 = e4(c2), p2 = f2.next(); !p2.done; p2 = f2.next()) {
            var h2 = p2.value;
            try {
              ti(h2);
            } catch (e12) {
              i2 = null != i2 ? i2 : [], e12 instanceof te ? i2 = e6(e6([], e5(i2)), e5(e12.errors)) : i2.push(e12);
            }
          }
        } catch (e12) {
          r2 = { error: e12 };
        } finally {
          try {
            p2 && !p2.done && (o2 = f2.return) && o2.call(f2);
          } finally {
            if (r2)
              throw r2.error;
          }
        }
      }
      if (i2)
        throw new te(i2);
    }
  }, t10.prototype.add = function(e11) {
    var r2;
    if (e11 && e11 !== this) {
      if (this.closed)
        ti(e11);
      else {
        if (e11 instanceof t10) {
          if (e11.closed || e11._hasParent(this))
            return;
          e11._addParent(this);
        }
        (this._finalizers = null !== (r2 = this._finalizers) && void 0 !== r2 ? r2 : []).push(e11);
      }
    }
  }, t10.prototype._hasParent = function(e11) {
    var t11 = this._parentage;
    return t11 === e11 || Array.isArray(t11) && t11.includes(e11);
  }, t10.prototype._addParent = function(e11) {
    var t11 = this._parentage;
    this._parentage = Array.isArray(t11) ? (t11.push(e11), t11) : t11 ? [t11, e11] : e11;
  }, t10.prototype._removeParent = function(e11) {
    var t11 = this._parentage;
    t11 === e11 ? this._parentage = null : Array.isArray(t11) && tt(t11, e11);
  }, t10.prototype.remove = function(e11) {
    var r2 = this._finalizers;
    r2 && tt(r2, e11), e11 instanceof t10 && e11._removeParent(this);
  }, t10.EMPTY = ((e10 = new t10()).closed = true, e10), t10;
}(), tn = tr.EMPTY;
function to(e10) {
  return e10 instanceof tr || e10 && "closed" in e10 && e7(e10.remove) && e7(e10.add) && e7(e10.unsubscribe);
}
function ti(e10) {
  e7(e10) ? e10() : e10.unsubscribe();
}
var tl = { Promise: void 0, useDeprecatedNextContext: false }, tu = { setTimeout: function(e10, t10) {
  for (var r2 = [], o2 = 2; o2 < arguments.length; o2++)
    r2[o2 - 2] = arguments[o2];
  return setTimeout.apply(void 0, e6([e10, t10], e5(r2)));
}, clearTimeout: function(e10) {
  var t10 = tu.delegate;
  return ((null == t10 ? void 0 : t10.clearTimeout) || clearTimeout)(e10);
}, delegate: void 0 };
function ta(e10) {
  tu.setTimeout(function() {
    throw e10;
  });
}
function ts() {
}
var tc = function(e10) {
  function t10(t11) {
    var r2 = e10.call(this) || this;
    return r2.isStopped = false, t11 ? (r2.destination = t11, to(t11) && t11.add(r2)) : r2.destination = tv, r2;
  }
  return e1(t10, e10), t10.create = function(e11, t11, r2) {
    return new td(e11, t11, r2);
  }, t10.prototype.next = function(e11) {
    this.isStopped || this._next(e11);
  }, t10.prototype.error = function(e11) {
    this.isStopped || (this.isStopped = true, this._error(e11));
  }, t10.prototype.complete = function() {
    this.isStopped || (this.isStopped = true, this._complete());
  }, t10.prototype.unsubscribe = function() {
    this.closed || (this.isStopped = true, e10.prototype.unsubscribe.call(this), this.destination = null);
  }, t10.prototype._next = function(e11) {
    this.destination.next(e11);
  }, t10.prototype._error = function(e11) {
    try {
      this.destination.error(e11);
    } finally {
      this.unsubscribe();
    }
  }, t10.prototype._complete = function() {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  }, t10;
}(tr), tf = Function.prototype.bind;
function tp(e10, t10) {
  return tf.call(e10, t10);
}
var th = function() {
  function e10(e11) {
    this.partialObserver = e11;
  }
  return e10.prototype.next = function(e11) {
    var t10 = this.partialObserver;
    if (t10.next)
      try {
        t10.next(e11);
      } catch (e12) {
        ta(e12);
      }
  }, e10.prototype.error = function(e11) {
    var t10 = this.partialObserver;
    if (t10.error)
      try {
        t10.error(e11);
      } catch (e12) {
        ta(e12);
      }
    else
      ta(e11);
  }, e10.prototype.complete = function() {
    var e11 = this.partialObserver;
    if (e11.complete)
      try {
        e11.complete();
      } catch (e12) {
        ta(e12);
      }
  }, e10;
}(), td = function(e10) {
  function t10(t11, r2, o2) {
    var i2, l2, u2 = e10.call(this) || this;
    return e7(t11) || !t11 ? i2 = { next: null != t11 ? t11 : void 0, error: null != r2 ? r2 : void 0, complete: null != o2 ? o2 : void 0 } : u2 && tl.useDeprecatedNextContext ? ((l2 = Object.create(t11)).unsubscribe = function() {
      return u2.unsubscribe();
    }, i2 = { next: t11.next && tp(t11.next, l2), error: t11.error && tp(t11.error, l2), complete: t11.complete && tp(t11.complete, l2) }) : i2 = t11, u2.destination = new th(i2), u2;
  }
  return e1(t10, e10), t10;
}(tc), tv = { closed: true, next: ts, error: function(e10) {
  throw e10;
}, complete: ts }, ty = "function" == typeof Symbol && Symbol.observable || "@@observable";
function tb(e10) {
  return e10;
}
function tm(e10) {
  return 0 === e10.length ? tb : 1 === e10.length ? e10[0] : function(t10) {
    return e10.reduce(function(e11, t11) {
      return t11(e11);
    }, t10);
  };
}
var tg = function() {
  function e10(e11) {
    e11 && (this._subscribe = e11);
  }
  return e10.prototype.lift = function(t10) {
    var r2 = new e10();
    return r2.source = this, r2.operator = t10, r2;
  }, e10.prototype.subscribe = function(e11, t10, r2) {
    var o2, i2, l2, u2 = (o2 = e11) && o2 instanceof tc || o2 && e7(o2.next) && e7(o2.error) && e7(o2.complete) && to(o2) ? e11 : new td(e11, t10, r2);
    return i2 = this.operator, l2 = this.source, u2.add(i2 ? i2.call(u2, l2) : l2 ? this._subscribe(u2) : this._trySubscribe(u2)), u2;
  }, e10.prototype._trySubscribe = function(e11) {
    try {
      return this._subscribe(e11);
    } catch (t10) {
      e11.error(t10);
    }
  }, e10.prototype.forEach = function(e11, t10) {
    var r2 = this;
    return new (t10 = t_(t10))(function(t11, o2) {
      var i2 = new td({ next: function(t12) {
        try {
          e11(t12);
        } catch (e12) {
          o2(e12), i2.unsubscribe();
        }
      }, error: o2, complete: t11 });
      r2.subscribe(i2);
    });
  }, e10.prototype._subscribe = function(e11) {
    var t10;
    return null === (t10 = this.source) || void 0 === t10 ? void 0 : t10.subscribe(e11);
  }, e10.prototype[ty] = function() {
    return this;
  }, e10.prototype.pipe = function() {
    for (var e11 = [], t10 = 0; t10 < arguments.length; t10++)
      e11[t10] = arguments[t10];
    return tm(e11)(this);
  }, e10.prototype.toPromise = function(e11) {
    var t10 = this;
    return new (e11 = t_(e11))(function(e12, r2) {
      var o2;
      t10.subscribe(function(e13) {
        return o2 = e13;
      }, function(e13) {
        return r2(e13);
      }, function() {
        return e12(o2);
      });
    });
  }, e10.create = function(t10) {
    return new e10(t10);
  }, e10;
}();
function t_(e10) {
  var t10;
  return null !== (t10 = null != e10 ? e10 : tl.Promise) && void 0 !== t10 ? t10 : Promise;
}
function tw(e10) {
  return function(t10) {
    if (e7(null == t10 ? void 0 : t10.lift))
      return t10.lift(function(t11) {
        try {
          return e10(t11, this);
        } catch (e11) {
          this.error(e11);
        }
      });
    throw TypeError("Unable to lift unknown Observable type");
  };
}
function tx(e10, t10, r2, o2, i2) {
  return new tS(e10, t10, r2, o2, i2);
}
var tS = function(e10) {
  function t10(t11, r2, o2, i2, l2, u2) {
    var a2 = e10.call(this, t11) || this;
    return a2.onFinalize = l2, a2.shouldUnsubscribe = u2, a2._next = r2 ? function(e11) {
      try {
        r2(e11);
      } catch (e12) {
        t11.error(e12);
      }
    } : e10.prototype._next, a2._error = i2 ? function(e11) {
      try {
        i2(e11);
      } catch (e12) {
        t11.error(e12);
      } finally {
        this.unsubscribe();
      }
    } : e10.prototype._error, a2._complete = o2 ? function() {
      try {
        o2();
      } catch (e11) {
        t11.error(e11);
      } finally {
        this.unsubscribe();
      }
    } : e10.prototype._complete, a2;
  }
  return e1(t10, e10), t10.prototype.unsubscribe = function() {
    var t11;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      var r2 = this.closed;
      e10.prototype.unsubscribe.call(this), r2 || null === (t11 = this.onFinalize) || void 0 === t11 || t11.call(this);
    }
  }, t10;
}(tc), tO = e9(function(e10) {
  return function() {
    e10(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
}), tP = function(e10) {
  function t10() {
    var t11 = e10.call(this) || this;
    return t11.closed = false, t11.currentObservers = null, t11.observers = [], t11.isStopped = false, t11.hasError = false, t11.thrownError = null, t11;
  }
  return e1(t10, e10), t10.prototype.lift = function(e11) {
    var t11 = new tE(this, this);
    return t11.operator = e11, t11;
  }, t10.prototype._throwIfClosed = function() {
    if (this.closed)
      throw new tO();
  }, t10.prototype.next = function(e11) {
    var t11 = this;
    (function() {
      var r2, o2;
      if (t11._throwIfClosed(), !t11.isStopped) {
        t11.currentObservers || (t11.currentObservers = Array.from(t11.observers));
        try {
          for (var i2 = e4(t11.currentObservers), l2 = i2.next(); !l2.done; l2 = i2.next())
            l2.value.next(e11);
        } catch (e12) {
          r2 = { error: e12 };
        } finally {
          try {
            l2 && !l2.done && (o2 = i2.return) && o2.call(i2);
          } finally {
            if (r2)
              throw r2.error;
          }
        }
      }
    })();
  }, t10.prototype.error = function(e11) {
    var t11 = this;
    (function() {
      if (t11._throwIfClosed(), !t11.isStopped) {
        t11.hasError = t11.isStopped = true, t11.thrownError = e11;
        for (var r2 = t11.observers; r2.length; )
          r2.shift().error(e11);
      }
    })();
  }, t10.prototype.complete = function() {
    var e11 = this;
    (function() {
      if (e11._throwIfClosed(), !e11.isStopped) {
        e11.isStopped = true;
        for (var t11 = e11.observers; t11.length; )
          t11.shift().complete();
      }
    })();
  }, t10.prototype.unsubscribe = function() {
    this.isStopped = this.closed = true, this.observers = this.currentObservers = null;
  }, Object.defineProperty(t10.prototype, "observed", { get: function() {
    var e11;
    return (null === (e11 = this.observers) || void 0 === e11 ? void 0 : e11.length) > 0;
  }, enumerable: false, configurable: true }), t10.prototype._trySubscribe = function(t11) {
    return this._throwIfClosed(), e10.prototype._trySubscribe.call(this, t11);
  }, t10.prototype._subscribe = function(e11) {
    return this._throwIfClosed(), this._checkFinalizedStatuses(e11), this._innerSubscribe(e11);
  }, t10.prototype._innerSubscribe = function(e11) {
    var t11 = this, r2 = this.hasError, o2 = this.isStopped, i2 = this.observers;
    return r2 || o2 ? tn : (this.currentObservers = null, i2.push(e11), new tr(function() {
      t11.currentObservers = null, tt(i2, e11);
    }));
  }, t10.prototype._checkFinalizedStatuses = function(e11) {
    var t11 = this.hasError, r2 = this.thrownError, o2 = this.isStopped;
    t11 ? e11.error(r2) : o2 && e11.complete();
  }, t10.prototype.asObservable = function() {
    var e11 = new tg();
    return e11.source = this, e11;
  }, t10.create = function(e11, t11) {
    return new tE(e11, t11);
  }, t10;
}(tg), tE = function(e10) {
  function t10(t11, r2) {
    var o2 = e10.call(this) || this;
    return o2.destination = t11, o2.source = r2, o2;
  }
  return e1(t10, e10), t10.prototype.next = function(e11) {
    var t11, r2;
    null === (r2 = null === (t11 = this.destination) || void 0 === t11 ? void 0 : t11.next) || void 0 === r2 || r2.call(t11, e11);
  }, t10.prototype.error = function(e11) {
    var t11, r2;
    null === (r2 = null === (t11 = this.destination) || void 0 === t11 ? void 0 : t11.error) || void 0 === r2 || r2.call(t11, e11);
  }, t10.prototype.complete = function() {
    var e11, t11;
    null === (t11 = null === (e11 = this.destination) || void 0 === e11 ? void 0 : e11.complete) || void 0 === t11 || t11.call(e11);
  }, t10.prototype._subscribe = function(e11) {
    var t11, r2;
    return null !== (r2 = null === (t11 = this.source) || void 0 === t11 ? void 0 : t11.subscribe(e11)) && void 0 !== r2 ? r2 : tn;
  }, t10;
}(tP), tj = function(e10) {
  function t10(t11) {
    var r2 = e10.call(this) || this;
    return r2._value = t11, r2;
  }
  return e1(t10, e10), Object.defineProperty(t10.prototype, "value", { get: function() {
    return this.getValue();
  }, enumerable: false, configurable: true }), t10.prototype._subscribe = function(t11) {
    var r2 = e10.prototype._subscribe.call(this, t11);
    return r2.closed || t11.next(this._value), r2;
  }, t10.prototype.getValue = function() {
    var e11 = this.hasError, t11 = this.thrownError, r2 = this._value;
    if (e11)
      throw t11;
    return this._throwIfClosed(), r2;
  }, t10.prototype.next = function(t11) {
    e10.prototype.next.call(this, this._value = t11);
  }, t10;
}(tP), tk = function() {
  return Date.now();
}, tA = function(e10) {
  function t10(t11, r2) {
    return e10.call(this) || this;
  }
  return e1(t10, e10), t10.prototype.schedule = function(e11, t11) {
    return this;
  }, t10;
}(tr), tR = { setInterval: function(e10, t10) {
  for (var r2 = [], o2 = 2; o2 < arguments.length; o2++)
    r2[o2 - 2] = arguments[o2];
  return setInterval.apply(void 0, e6([e10, t10], e5(r2)));
}, clearInterval: function(e10) {
  var t10 = tR.delegate;
  return ((null == t10 ? void 0 : t10.clearInterval) || clearInterval)(e10);
}, delegate: void 0 }, tC = function(e10) {
  function t10(t11, r2) {
    var o2 = e10.call(this, t11, r2) || this;
    return o2.scheduler = t11, o2.work = r2, o2.pending = false, o2;
  }
  return e1(t10, e10), t10.prototype.schedule = function(e11, t11) {
    if (void 0 === t11 && (t11 = 0), this.closed)
      return this;
    this.state = e11;
    var r2, o2 = this.id, i2 = this.scheduler;
    return null != o2 && (this.id = this.recycleAsyncId(i2, o2, t11)), this.pending = true, this.delay = t11, this.id = null !== (r2 = this.id) && void 0 !== r2 ? r2 : this.requestAsyncId(i2, this.id, t11), this;
  }, t10.prototype.requestAsyncId = function(e11, t11, r2) {
    return void 0 === r2 && (r2 = 0), tR.setInterval(e11.flush.bind(e11, this), r2);
  }, t10.prototype.recycleAsyncId = function(e11, t11, r2) {
    if (void 0 === r2 && (r2 = 0), null != r2 && this.delay === r2 && false === this.pending)
      return t11;
    null != t11 && tR.clearInterval(t11);
  }, t10.prototype.execute = function(e11, t11) {
    if (this.closed)
      return Error("executing a cancelled action");
    this.pending = false;
    var r2 = this._execute(e11, t11);
    if (r2)
      return r2;
    false === this.pending && null != this.id && (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
  }, t10.prototype._execute = function(e11, t11) {
    var r2, o2 = false;
    try {
      this.work(e11);
    } catch (e12) {
      o2 = true, r2 = e12 || Error("Scheduled action threw falsy error");
    }
    if (o2)
      return this.unsubscribe(), r2;
  }, t10.prototype.unsubscribe = function() {
    if (!this.closed) {
      var t11 = this.id, r2 = this.scheduler, o2 = r2.actions;
      this.work = this.state = this.scheduler = null, this.pending = false, tt(o2, this), null != t11 && (this.id = this.recycleAsyncId(r2, t11, null)), this.delay = null, e10.prototype.unsubscribe.call(this);
    }
  }, t10;
}(tA), tI = function() {
  function e10(t10, r2) {
    void 0 === r2 && (r2 = e10.now), this.schedulerActionCtor = t10, this.now = r2;
  }
  return e10.prototype.schedule = function(e11, t10, r2) {
    return void 0 === t10 && (t10 = 0), new this.schedulerActionCtor(this, e11).schedule(r2, t10);
  }, e10.now = tk, e10;
}(), t$ = new (function(e10) {
  function t10(t11, r2) {
    void 0 === r2 && (r2 = tI.now);
    var o2 = e10.call(this, t11, r2) || this;
    return o2.actions = [], o2._active = false, o2;
  }
  return e1(t10, e10), t10.prototype.flush = function(e11) {
    var t11, r2 = this.actions;
    if (this._active) {
      r2.push(e11);
      return;
    }
    this._active = true;
    do
      if (t11 = e11.execute(e11.state, e11.delay))
        break;
    while (e11 = r2.shift());
    if (this._active = false, t11) {
      for (; e11 = r2.shift(); )
        e11.unsubscribe();
      throw t11;
    }
  }, t10;
}(tI))(tC), tz = "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator";
function tF(e10) {
  return new tg(function(t10) {
    (function(e11, t11) {
      var r2, o2, i2, l2, u2, a2, s2, c2;
      return u2 = this, a2 = void 0, s2 = void 0, c2 = function() {
        var u3;
        return e3(this, function(a3) {
          switch (a3.label) {
            case 0:
              a3.trys.push([0, 5, 6, 11]), r2 = function(e12) {
                if (!Symbol.asyncIterator)
                  throw TypeError("Symbol.asyncIterator is not defined.");
                var t12, r3 = e12[Symbol.asyncIterator];
                return r3 ? r3.call(e12) : (e12 = e4(e12), t12 = {}, o3("next"), o3("throw"), o3("return"), t12[Symbol.asyncIterator] = function() {
                  return this;
                }, t12);
                function o3(r4) {
                  t12[r4] = e12[r4] && function(t13) {
                    return new Promise(function(o4, i3) {
                      (function(e13, t14, r5, o5) {
                        Promise.resolve(o5).then(function(t15) {
                          e13({ value: t15, done: r5 });
                        }, t14);
                      })(o4, i3, (t13 = e12[r4](t13)).done, t13.value);
                    });
                  };
                }
              }(e11), a3.label = 1;
            case 1:
              return [4, r2.next()];
            case 2:
              if ((o2 = a3.sent()).done)
                return [3, 4];
              if (u3 = o2.value, t11.next(u3), t11.closed)
                return [2];
              a3.label = 3;
            case 3:
              return [3, 1];
            case 4:
              return [3, 11];
            case 5:
              return i2 = { error: a3.sent() }, [3, 11];
            case 6:
              if (a3.trys.push([6, , 9, 10]), !(o2 && !o2.done && (l2 = r2.return)))
                return [3, 8];
              return [4, l2.call(r2)];
            case 7:
              a3.sent(), a3.label = 8;
            case 8:
              return [3, 10];
            case 9:
              if (i2)
                throw i2.error;
              return [7];
            case 10:
              return [7];
            case 11:
              return t11.complete(), [2];
          }
        });
      }, new (s2 || (s2 = Promise))(function(e12, t12) {
        function r3(e13) {
          try {
            i3(c2.next(e13));
          } catch (e14) {
            t12(e14);
          }
        }
        function o3(e13) {
          try {
            i3(c2.throw(e13));
          } catch (e14) {
            t12(e14);
          }
        }
        function i3(t13) {
          var i4;
          t13.done ? e12(t13.value) : ((i4 = t13.value) instanceof s2 ? i4 : new s2(function(e13) {
            e13(i4);
          })).then(r3, o3);
        }
        i3((c2 = c2.apply(u2, a2 || [])).next());
      });
    })(e10, t10).catch(function(e11) {
      return t10.error(e11);
    });
  });
}
function tT(e10, t10) {
  return void 0 === t10 && (t10 = t$), tw(function(r2, o2) {
    var i2 = null, l2 = null, u2 = null, a2 = function() {
      if (i2) {
        i2.unsubscribe(), i2 = null;
        var e11 = l2;
        l2 = null, o2.next(e11);
      }
    };
    function s2() {
      var r3 = u2 + e10, l3 = t10.now();
      if (l3 < r3) {
        i2 = this.schedule(void 0, r3 - l3), o2.add(i2);
        return;
      }
      a2();
    }
    r2.subscribe(new tS(o2, function(r3) {
      l2 = r3, u2 = t10.now(), i2 || (i2 = t10.schedule(s2, e10), o2.add(i2));
    }, function() {
      a2(), o2.complete();
    }, void 0, function() {
      l2 = i2 = null;
    }));
  });
}
function tM(e10, t10, r2) {
  var o2 = e7(e10) || t10 || r2 ? { next: e10, error: t10, complete: r2 } : e10;
  return o2 ? tw(function(e11, t11) {
    null === (r3 = o2.subscribe) || void 0 === r3 || r3.call(o2);
    var r3, i2 = true;
    e11.subscribe(new tS(t11, function(e12) {
      var r4;
      null === (r4 = o2.next) || void 0 === r4 || r4.call(o2, e12), t11.next(e12);
    }, function() {
      var e12;
      i2 = false, null === (e12 = o2.complete) || void 0 === e12 || e12.call(o2), t11.complete();
    }, function(e12) {
      var r4;
      i2 = false, null === (r4 = o2.error) || void 0 === r4 || r4.call(o2, e12), t11.error(e12);
    }, function() {
      var e12, t12;
      i2 && (null === (e12 = o2.unsubscribe) || void 0 === e12 || e12.call(o2)), null === (t12 = o2.finalize) || void 0 === t12 || t12.call(o2);
    }));
  }) : tb;
}
function tD(e10) {
  for (var t10 = arguments.length, r2 = Array(t10 > 1 ? t10 - 1 : 0), o2 = 1; o2 < t10; o2++)
    r2[o2 - 1] = arguments[o2];
  return function() {
    for (var e11 = [], t11 = 0; t11 < arguments.length; t11++)
      e11[t11] = arguments[t11];
    return tm(e11);
  }(...r2)(function(e11) {
    if (e11 instanceof tg)
      return e11;
    if (null != e11) {
      if (e7(e11[ty]))
        return new tg(function(t11) {
          var r3 = e11[ty]();
          if (e7(r3.subscribe))
            return r3.subscribe(t11);
          throw TypeError("Provided object does not correctly implement Symbol.observable");
        });
      if (e11 && "number" == typeof e11.length && "function" != typeof e11)
        return new tg(function(t11) {
          for (var r3 = 0; r3 < e11.length && !t11.closed; r3++)
            t11.next(e11[r3]);
          t11.complete();
        });
      if (e7(null == e11 ? void 0 : e11.then))
        return new tg(function(t11) {
          e11.then(function(e12) {
            t11.closed || (t11.next(e12), t11.complete());
          }, function(e12) {
            return t11.error(e12);
          }).then(null, ta);
        });
      if (Symbol.asyncIterator && e7(null == e11 ? void 0 : e11[Symbol.asyncIterator]))
        return tF(e11);
      if (e7(null == e11 ? void 0 : e11[tz]))
        return new tg(function(t11) {
          var r3, o3;
          try {
            for (var i2 = e4(e11), l2 = i2.next(); !l2.done; l2 = i2.next()) {
              var u2 = l2.value;
              if (t11.next(u2), t11.closed)
                return;
            }
          } catch (e12) {
            r3 = { error: e12 };
          } finally {
            try {
              l2 && !l2.done && (o3 = i2.return) && o3.call(i2);
            } finally {
              if (r3)
                throw r3.error;
            }
          }
          t11.complete();
        });
      if (e7(null == e11 ? void 0 : e11.getReader))
        return tF(function(e12) {
          return function(e13, t11, r3) {
            if (!Symbol.asyncIterator)
              throw TypeError("Symbol.asyncIterator is not defined.");
            var o3, i2 = r3.apply(e13, t11 || []), l2 = [];
            return o3 = {}, u2("next"), u2("throw"), u2("return"), o3[Symbol.asyncIterator] = function() {
              return this;
            }, o3;
            function u2(e14) {
              i2[e14] && (o3[e14] = function(t12) {
                return new Promise(function(r4, o4) {
                  l2.push([e14, t12, r4, o4]) > 1 || a2(e14, t12);
                });
              });
            }
            function a2(e14, t12) {
              try {
                var r4;
                (r4 = i2[e14](t12)).value instanceof e8 ? Promise.resolve(r4.value.v).then(s2, c2) : f2(l2[0][2], r4);
              } catch (e15) {
                f2(l2[0][3], e15);
              }
            }
            function s2(e14) {
              a2("next", e14);
            }
            function c2(e14) {
              a2("throw", e14);
            }
            function f2(e14, t12) {
              e14(t12), l2.shift(), l2.length && a2(l2[0][0], l2[0][1]);
            }
          }(this, arguments, function() {
            var t11, r3, o3;
            return e3(this, function(i2) {
              switch (i2.label) {
                case 0:
                  t11 = e12.getReader(), i2.label = 1;
                case 1:
                  i2.trys.push([1, , 9, 10]), i2.label = 2;
                case 2:
                  return [4, e8(t11.read())];
                case 3:
                  if (o3 = (r3 = i2.sent()).value, !r3.done)
                    return [3, 5];
                  return [4, e8(void 0)];
                case 4:
                  return [2, i2.sent()];
                case 5:
                  return [4, e8(o3)];
                case 6:
                  return [4, i2.sent()];
                case 7:
                  return i2.sent(), [3, 2];
                case 8:
                  return [3, 10];
                case 9:
                  return t11.releaseLock(), [7];
                case 10:
                  return [2];
              }
            });
          });
        }(e11));
    }
    throw TypeError("You provided " + (null !== e11 && "object" == typeof e11 ? "an invalid object" : "'" + e11 + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
  }(e10));
}
var tU = Symbol.for("immer-nothing"), tq = Symbol.for("immer-draftable"), tL = Symbol.for("immer-state");
function tW(e10) {
  for (var t10 = arguments.length, r2 = Array(t10 > 1 ? t10 - 1 : 0), o2 = 1; o2 < t10; o2++)
    r2[o2 - 1] = arguments[o2];
  throw Error(`[Immer] minified error nr: ${e10}. Full error at: https://bit.ly/3cXEKWf`);
}
var tG = Object.getPrototypeOf;
function tB(e10) {
  return !!e10 && !!e10[tL];
}
function tN(e10) {
  var t10;
  return !!e10 && (tV(e10) || Array.isArray(e10) || !!e10[tq] || !!(null === (t10 = e10.constructor) || void 0 === t10 ? void 0 : t10[tq]) || tZ(e10) || tJ(e10));
}
var tK = Object.prototype.constructor.toString();
function tV(e10) {
  if (!e10 || "object" != typeof e10)
    return false;
  let t10 = tG(e10);
  if (null === t10)
    return true;
  let r2 = Object.hasOwnProperty.call(t10, "constructor") && t10.constructor;
  return r2 === Object || "function" == typeof r2 && Function.toString.call(r2) === tK;
}
function tY(e10, t10) {
  0 === tH(e10) ? Reflect.ownKeys(e10).forEach((r2) => {
    t10(r2, e10[r2], e10);
  }) : e10.forEach((r2, o2) => t10(o2, r2, e10));
}
function tH(e10) {
  let t10 = e10[tL];
  return t10 ? t10.type_ : Array.isArray(e10) ? 1 : tZ(e10) ? 2 : tJ(e10) ? 3 : 0;
}
function tX(e10, t10) {
  return 2 === tH(e10) ? e10.has(t10) : Object.prototype.hasOwnProperty.call(e10, t10);
}
function tQ(e10, t10, r2) {
  let o2 = tH(e10);
  2 === o2 ? e10.set(t10, r2) : 3 === o2 ? e10.add(r2) : e10[t10] = r2;
}
function tZ(e10) {
  return e10 instanceof Map;
}
function tJ(e10) {
  return e10 instanceof Set;
}
function t0(e10) {
  return e10.copy_ || e10.base_;
}
function t1(e10, t10) {
  if (tZ(e10))
    return new Map(e10);
  if (tJ(e10))
    return new Set(e10);
  if (Array.isArray(e10))
    return Array.prototype.slice.call(e10);
  if (!t10 && tV(e10))
    return tG(e10) ? { ...e10 } : Object.assign(/* @__PURE__ */ Object.create(null), e10);
  let r2 = Object.getOwnPropertyDescriptors(e10);
  delete r2[tL];
  let o2 = Reflect.ownKeys(r2);
  for (let t11 = 0; t11 < o2.length; t11++) {
    let i2 = o2[t11], l2 = r2[i2];
    false === l2.writable && (l2.writable = true, l2.configurable = true), (l2.get || l2.set) && (r2[i2] = { configurable: true, writable: true, enumerable: l2.enumerable, value: e10[i2] });
  }
  return Object.create(tG(e10), r2);
}
function t2(e10) {
  let t10 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  return t4(e10) || tB(e10) || !tN(e10) || (tH(e10) > 1 && (e10.set = e10.add = e10.clear = e10.delete = t3), Object.freeze(e10), t10 && Object.entries(e10).forEach((e11) => {
    let [t11, r2] = e11;
    return t2(r2, true);
  })), e10;
}
function t3() {
  tW(2);
}
function t4(e10) {
  return Object.isFrozen(e10);
}
var t5 = {};
function t6(e10) {
  let t10 = t5[e10];
  return t10 || tW(0, e10), t10;
}
function t8(e10, t10) {
  t10 && (t6("Patches"), e10.patches_ = [], e10.inversePatches_ = [], e10.patchListener_ = t10);
}
function t7(e10) {
  t9(e10), e10.drafts_.forEach(rt), e10.drafts_ = null;
}
function t9(e10) {
  e10 === eJ && (eJ = e10.parent_);
}
function re(e10) {
  return eJ = { drafts_: [], parent_: eJ, immer_: e10, canAutoFreeze_: true, unfinalizedDrafts_: 0 };
}
function rt(e10) {
  let t10 = e10[tL];
  0 === t10.type_ || 1 === t10.type_ ? t10.revoke_() : t10.revoked_ = true;
}
function rr(e10, t10) {
  t10.unfinalizedDrafts_ = t10.drafts_.length;
  let r2 = t10.drafts_[0];
  return void 0 !== e10 && e10 !== r2 ? (r2[tL].modified_ && (t7(t10), tW(4)), tN(e10) && (e10 = rn(t10, e10), t10.parent_ || ri(t10, e10)), t10.patches_ && t6("Patches").generateReplacementPatches_(r2[tL].base_, e10, t10.patches_, t10.inversePatches_)) : e10 = rn(t10, r2, []), t7(t10), t10.patches_ && t10.patchListener_(t10.patches_, t10.inversePatches_), e10 !== tU ? e10 : void 0;
}
function rn(e10, t10, r2) {
  if (t4(t10))
    return t10;
  let o2 = t10[tL];
  if (!o2)
    return tY(t10, (i2, l2) => ro(e10, o2, t10, i2, l2, r2)), t10;
  if (o2.scope_ !== e10)
    return t10;
  if (!o2.modified_)
    return ri(e10, o2.base_, true), o2.base_;
  if (!o2.finalized_) {
    o2.finalized_ = true, o2.scope_.unfinalizedDrafts_--;
    let t11 = o2.copy_, i2 = t11, l2 = false;
    3 === o2.type_ && (i2 = new Set(t11), t11.clear(), l2 = true), tY(i2, (i3, u2) => ro(e10, o2, t11, i3, u2, r2, l2)), ri(e10, t11, false), r2 && e10.patches_ && t6("Patches").generatePatches_(o2, r2, e10.patches_, e10.inversePatches_);
  }
  return o2.copy_;
}
function ro(e10, t10, r2, o2, i2, l2, u2) {
  if (tB(i2)) {
    let u3 = rn(e10, i2, l2 && t10 && 3 !== t10.type_ && !tX(t10.assigned_, o2) ? l2.concat(o2) : void 0);
    if (tQ(r2, o2, u3), !tB(u3))
      return;
    e10.canAutoFreeze_ = false;
  } else
    u2 && r2.add(i2);
  if (tN(i2) && !t4(i2)) {
    if (!e10.immer_.autoFreeze_ && e10.unfinalizedDrafts_ < 1)
      return;
    rn(e10, i2), (!t10 || !t10.scope_.parent_) && "symbol" != typeof o2 && Object.prototype.propertyIsEnumerable.call(r2, o2) && ri(e10, i2);
  }
}
function ri(e10, t10) {
  let r2 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  !e10.parent_ && e10.immer_.autoFreeze_ && e10.canAutoFreeze_ && t2(t10, r2);
}
var rl = { get(e10, t10) {
  if (t10 === tL)
    return e10;
  let r2 = t0(e10);
  if (!tX(r2, t10))
    return function(e11, t11, r3) {
      var o3;
      let i2 = rs(t11, r3);
      return i2 ? "value" in i2 ? i2.value : null === (o3 = i2.get) || void 0 === o3 ? void 0 : o3.call(e11.draft_) : void 0;
    }(e10, r2, t10);
  let o2 = r2[t10];
  return e10.finalized_ || !tN(o2) ? o2 : o2 === ra(e10.base_, t10) ? (rf(e10), e10.copy_[t10] = rp(o2, e10)) : o2;
}, has: (e10, t10) => t10 in t0(e10), ownKeys: (e10) => Reflect.ownKeys(t0(e10)), set(e10, t10, r2) {
  let o2 = rs(t0(e10), t10);
  if (null == o2 ? void 0 : o2.set)
    return o2.set.call(e10.draft_, r2), true;
  if (!e10.modified_) {
    let o3 = ra(t0(e10), t10), i2 = null == o3 ? void 0 : o3[tL];
    if (i2 && i2.base_ === r2)
      return e10.copy_[t10] = r2, e10.assigned_[t10] = false, true;
    if ((r2 === o3 ? 0 !== r2 || 1 / r2 == 1 / o3 : r2 != r2 && o3 != o3) && (void 0 !== r2 || tX(e10.base_, t10)))
      return true;
    rf(e10), rc(e10);
  }
  return !!(e10.copy_[t10] === r2 && (void 0 !== r2 || t10 in e10.copy_) || Number.isNaN(r2) && Number.isNaN(e10.copy_[t10])) || (e10.copy_[t10] = r2, e10.assigned_[t10] = true, true);
}, deleteProperty: (e10, t10) => (void 0 !== ra(e10.base_, t10) || t10 in e10.base_ ? (e10.assigned_[t10] = false, rf(e10), rc(e10)) : delete e10.assigned_[t10], e10.copy_ && delete e10.copy_[t10], true), getOwnPropertyDescriptor(e10, t10) {
  let r2 = t0(e10), o2 = Reflect.getOwnPropertyDescriptor(r2, t10);
  return o2 ? { writable: true, configurable: 1 !== e10.type_ || "length" !== t10, enumerable: o2.enumerable, value: r2[t10] } : o2;
}, defineProperty() {
  tW(11);
}, getPrototypeOf: (e10) => tG(e10.base_), setPrototypeOf() {
  tW(12);
} }, ru = {};
function ra(e10, t10) {
  let r2 = e10[tL];
  return (r2 ? t0(r2) : e10)[t10];
}
function rs(e10, t10) {
  if (!(t10 in e10))
    return;
  let r2 = tG(e10);
  for (; r2; ) {
    let e11 = Object.getOwnPropertyDescriptor(r2, t10);
    if (e11)
      return e11;
    r2 = tG(r2);
  }
}
function rc(e10) {
  !e10.modified_ && (e10.modified_ = true, e10.parent_ && rc(e10.parent_));
}
function rf(e10) {
  e10.copy_ || (e10.copy_ = t1(e10.base_, e10.scope_.immer_.useStrictShallowCopy_));
}
function rp(e10, t10) {
  let r2 = tZ(e10) ? t6("MapSet").proxyMap_(e10, t10) : tJ(e10) ? t6("MapSet").proxySet_(e10, t10) : function(e11, t11) {
    let r3 = Array.isArray(e11), o2 = { type_: r3 ? 1 : 0, scope_: t11 ? t11.scope_ : eJ, modified_: false, finalized_: false, assigned_: {}, parent_: t11, base_: e11, draft_: null, copy_: null, revoke_: null, isManual_: false }, i2 = o2, l2 = rl;
    r3 && (i2 = [o2], l2 = ru);
    let { revoke: u2, proxy: a2 } = Proxy.revocable(i2, l2);
    return o2.draft_ = a2, o2.revoke_ = u2, a2;
  }(e10, t10);
  return (t10 ? t10.scope_ : eJ).drafts_.push(r2), r2;
}
tY(rl, (e10, t10) => {
  ru[e10] = function() {
    return arguments[0] = arguments[0][0], t10.apply(this, arguments);
  };
}), ru.deleteProperty = function(e10, t10) {
  return ru.set.call(this, e10, t10, void 0);
}, ru.set = function(e10, t10, r2) {
  return rl.set.call(this, e10[0], t10, r2, e10[0]);
};
var rh = new class {
  constructor(e10) {
    this.autoFreeze_ = true, this.useStrictShallowCopy_ = false, this.produce = (e11, t10, r2) => {
      let o2;
      if ("function" == typeof e11 && "function" != typeof t10) {
        let r3 = t10;
        t10 = e11;
        let o3 = this;
        return function() {
          let e12 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r3;
          for (var i2 = arguments.length, l2 = Array(i2 > 1 ? i2 - 1 : 0), u2 = 1; u2 < i2; u2++)
            l2[u2 - 1] = arguments[u2];
          return o3.produce(e12, (e13) => t10.call(this, e13, ...l2));
        };
      }
      if ("function" != typeof t10 && tW(6), void 0 !== r2 && "function" != typeof r2 && tW(7), tN(e11)) {
        let i2 = re(this), l2 = rp(e11, void 0), u2 = true;
        try {
          o2 = t10(l2), u2 = false;
        } finally {
          u2 ? t7(i2) : t9(i2);
        }
        return t8(i2, r2), rr(o2, i2);
      }
      if (e11 && "object" == typeof e11)
        tW(1, e11);
      else {
        if (void 0 === (o2 = t10(e11)) && (o2 = e11), o2 === tU && (o2 = void 0), this.autoFreeze_ && t2(o2, true), r2) {
          let t11 = [], i2 = [];
          t6("Patches").generateReplacementPatches_(e11, o2, t11, i2), r2(t11, i2);
        }
        return o2;
      }
    }, this.produceWithPatches = (e11, t10) => {
      let r2, o2;
      if ("function" == typeof e11) {
        var i2 = this;
        return function(t11) {
          for (var r3 = arguments.length, o3 = Array(r3 > 1 ? r3 - 1 : 0), l2 = 1; l2 < r3; l2++)
            o3[l2 - 1] = arguments[l2];
          return i2.produceWithPatches(t11, (t12) => e11(t12, ...o3));
        };
      }
      return [this.produce(e11, t10, (e12, t11) => {
        r2 = e12, o2 = t11;
      }), r2, o2];
    }, "boolean" == typeof (null == e10 ? void 0 : e10.autoFreeze) && this.setAutoFreeze(e10.autoFreeze), "boolean" == typeof (null == e10 ? void 0 : e10.useStrictShallowCopy) && this.setUseStrictShallowCopy(e10.useStrictShallowCopy);
  }
  createDraft(e10) {
    var t10;
    tN(e10) || tW(8), tB(e10) && (tB(t10 = e10) || tW(10, t10), e10 = function e11(t11) {
      let r3;
      if (!tN(t11) || t4(t11))
        return t11;
      let o3 = t11[tL];
      if (o3) {
        if (!o3.modified_)
          return o3.base_;
        o3.finalized_ = true, r3 = t1(t11, o3.scope_.immer_.useStrictShallowCopy_);
      } else
        r3 = t1(t11, true);
      return tY(r3, (t12, o4) => {
        tQ(r3, t12, e11(o4));
      }), o3 && (o3.finalized_ = false), r3;
    }(t10));
    let r2 = re(this), o2 = rp(e10, void 0);
    return o2[tL].isManual_ = true, t9(r2), o2;
  }
  finishDraft(e10, t10) {
    let r2 = e10 && e10[tL];
    r2 && r2.isManual_ || tW(9);
    let { scope_: o2 } = r2;
    return t8(o2, t10), rr(void 0, o2);
  }
  setAutoFreeze(e10) {
    this.autoFreeze_ = e10;
  }
  setUseStrictShallowCopy(e10) {
    this.useStrictShallowCopy_ = e10;
  }
  applyPatches(e10, t10) {
    let r2;
    for (r2 = t10.length - 1; r2 >= 0; r2--) {
      let o3 = t10[r2];
      if (0 === o3.path.length && "replace" === o3.op) {
        e10 = o3.value;
        break;
      }
    }
    r2 > -1 && (t10 = t10.slice(r2 + 1));
    let o2 = t6("Patches").applyPatches_;
    return tB(e10) ? o2(e10, t10) : this.produce(e10, (e11) => o2(e11, t10));
  }
}(), rd = rh.produce;
rh.produceWithPatches.bind(rh), rh.setAutoFreeze.bind(rh), rh.setUseStrictShallowCopy.bind(rh), rh.applyPatches.bind(rh), rh.createDraft.bind(rh), rh.finishDraft.bind(rh);
class rv extends tj {
  next(e10) {
    let t10 = b(e10) ? rd(this.value, e10) : e10;
    Object.is(t10, this.value) || super.next(t10);
  }
}
function ry() {
  let e10;
  return d((t10, r2) => ({ get: () => (t10(), e10), set(t11) {
    var o2;
    let i2 = null !== (o2 = null == t11 ? void 0 : t11.$$forwardRef) && void 0 !== o2 ? o2 : t11;
    i2 !== e10 && (e10 = i2, r2());
  } }));
}
function rb(e10) {
  return (t10) => {
    let r2 = t10.subscribe(e10);
    v(() => r2.unsubscribe());
  };
}
function rm(e10) {
  return (t10) => {
    var r2;
    return y(rg, { elem$: t10.pipe((r2 = (t11) => () => e10(t11), tw(function(e11, t11) {
      var o2, i2, l2, u2 = 0;
      e11.subscribe(new tS(t11, function(e12) {
        t11.next(r2.call(void 0, e12, u2++));
      }, void 0, void 0, void 0));
    }))), children: {} });
  };
}
let rg = E({ elem$: _(), $default: _() }, (e10, r2) => {
  let o2 = t(null);
  return tD(e10.elem$, tM((e11) => {
    o2.value = e11;
  }), rb()), () => {
    var e11;
    return null === (e11 = o2.value) || void 0 === e11 ? void 0 : e11.call(o2);
  };
}, { name: "RxSlot" }), r_ = (e10, t10) => {
  let r2 = new tj(e10[t10]);
  return h(() => e10[t10], (e11) => r2.next(e11)), r2;
}, rw = (e10) => {
  let t10 = {};
  for (let o2 in e10) {
    var r2;
    if (b(e10[o2]) || (r2 = e10[o2]) && (r2 instanceof tg || e7(r2.lift) && e7(r2.subscribe))) {
      t10[o2] = e10[o2];
      continue;
    }
    t10[`${o2}$`] = r_(e10, o2);
  }
  return t10;
};
function rx(e10, t10) {
  let r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, o2 = null != t10 ? t10 : e10;
  return E(null != e10 ? e10 : {}, (e11, t11) => {
    let r3 = rw(e11), i2 = o2(new Proxy({}, { get(t12, o3) {
      var i3;
      return null !== (i3 = e11[o3]) && void 0 !== i3 ? i3 : r3[o3];
    } }), new Proxy({}, { get: (e12, r4) => "render" === r4 ? rm : t11[r4] }));
    return b(i2) ? i2 : () => i2;
  }, null != r2 ? r2 : t10);
}
let rS = (e10) => {
  let t10 = new rv(e10), r2 = d((e11, r3) => ({ get: () => (e11(), t10.value), set(e12) {
    var o2;
    let i2 = null !== (o2 = null == e12 ? void 0 : e12.$$forwardRef) && void 0 !== o2 ? o2 : e12;
    Object.is(i2, t10.value) || (t10.next(i2), r3());
  } }));
  return new Proxy(t10, { get(e11, o2) {
    var i2;
    return "next" === o2 ? (e12) => {
      r2.value = b(e12) ? rd(t10.value, e12) : e12;
    } : "value" === o2 ? r2.value : null !== (i2 = t10[o2]) && void 0 !== i2 ? i2 : r2[o2];
  }, set: (e11, t11, o2) => ("value" === t11 ? r2.value = o2 : e11[t11] = o2, true) });
}, rO = (e10, t10) => {
  if (w(e10) && w(t10)) {
    if (e10.length !== t10.length)
      return false;
    for (let r2 in e10)
      if (!Object.is(e10[r2], t10[r2]))
        return false;
    return true;
  }
  return Object.is(e10, t10);
}, rP = (e10) => {
  let t10;
  let r2 = null;
  return tM({ next: (o2) => {
    rO(o2, r2) || (null == t10 || t10(), t10 = e10(o2), r2 = o2);
  }, unsubscribe: () => {
    null == t10 || t10();
  } });
};
function rE(e10, t10, r2) {
  var o2, l2, u2, a2;
  let s2;
  let c2 = x(e10) ? e10 : {}, p2 = b(e10) ? e10 : t10, h2 = null !== (o2 = null != r2 ? r2 : t10) && void 0 !== o2 ? o2 : {}, d2 = Symbol(null !== (l2 = h2.name) && void 0 !== l2 ? l2 : "");
  if (S(c2)) {
    let e11;
    let t11 = () => (void 0 === e11 && (e11 = p2({})), e11);
    return j(E({ value: _().optional(), $default: _().optional() }, (e12, r3) => {
      var o3;
      let { slots: i2 } = r3;
      return f(d2, null !== (o3 = e12.value) && void 0 !== o3 ? o3 : t11()), () => {
        var e13;
        return null === (e13 = i2.default) || void 0 === e13 ? void 0 : e13.call(i2);
      };
    }, { ...h2, name: `Provide(${null !== (u2 = h2.name) && void 0 !== u2 ? u2 : ""})` }), { use: () => i(d2, t11, true) });
  }
  let v2 = O(c2), y2 = () => v2.create({}), m2 = () => (void 0 === s2 && (s2 = p2(y2())), s2);
  return j(E({ ...c2, $default: _().optional() }, (e11, t11) => {
    let { slots: r3 } = t11;
    return f(d2, p2(e11)), () => {
      var e12;
      return null === (e12 = r3.default) || void 0 === e12 ? void 0 : e12.call(r3);
    };
  }, { ...h2, name: `Provide(${null !== (a2 = h2.name) && void 0 !== a2 ? a2 : ""})` }), { use: () => i(d2, m2, true) });
}
export {
  P as F,
  eK as R,
  e2 as _,
  rE as a,
  tD as b,
  E as c,
  rP as d,
  rx as e,
  tT as f,
  rm as g,
  eN as h,
  eG as i,
  ep as j,
  rS as o,
  ry as r,
  rb as s,
  r_ as t,
  eB as u
};
