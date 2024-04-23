const __vite__fileDeps=["static/nodepkg-vuematerial-example.V8oqs79I.chunk.js","static/lib--nodepkg-vue-jsx-runtime.CEFt0iM_.chunk.js","static/vendor--core-js.CIHBAauM.chunk.js","static/vendor--copy-to-clipboard.0-XIsMJU.chunk.js","static/vendor--toggle-selection.C0yjZLCq.chunk.js","static/lib--nodepkg-vuekit.DB5BTWky.chunk.js","static/lib--nodepkg-typedef.DdnEDJY6.chunk.js","static/lib--nodepkg-vuematerial.ZvEGCNjm.chunk.js","static/lib--nodepkg-vueuikit.UEJ3QS1S.chunk.js","static/vendor--mdi-js.et_sAQgv.chunk.js","static/webapp-vuekit-layout.BowFt-km.chunk.js","static/nodepkg-vueuikit-example.DJKjGEbj.chunk.js","static/nodepkg-vuekit-example.DgTXTKvp.chunk.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
var e, t;
import { j as i, w as o, g as n, b as a, q as r } from "./lib--nodepkg-vue-jsx-runtime.CEFt0iM_.chunk.js";
import { c as l, u as s, R as p, h as u, i as _, j as c } from "./lib--nodepkg-vuekit.DB5BTWky.chunk.js";
import { c as m, C as d, A as h, p as v, l as k } from "./lib--nodepkg-typedef.DdnEDJY6.chunk.js";
import { a as f, I as E, e as g, c as x } from "./lib--nodepkg-vuematerial.ZvEGCNjm.chunk.js";
import { d as I, e as y, f as O } from "./vendor--mdi-js.et_sAQgv.chunk.js";
import { B as j, C as R, e as T, G as D, T as V, f as b, g as S, b as N } from "./lib--nodepkg-vueuikit.UEJ3QS1S.chunk.js";
import { n as P } from "./vendor--normalize.css.B1ng_4q_.chunk.js";
import { D as L, C as A } from "./webapp-vuekit-layout.BowFt-km.chunk.js";
import { _ as w, a as M } from "./webapp-vuekit-page.z5j_WOwN.chunk.js";
(function() {
  let e2 = document.createElement("link").relList;
  if (!(e2 && e2.supports && e2.supports("modulepreload"))) {
    for (let e3 of document.querySelectorAll('link[rel="modulepreload"]'))
      t2(e3);
    new MutationObserver((e3) => {
      for (let i2 of e3)
        if ("childList" === i2.type)
          for (let e4 of i2.addedNodes)
            "LINK" === e4.tagName && "modulepreload" === e4.rel && t2(e4);
    }).observe(document, { childList: true, subtree: true });
  }
  function t2(e3) {
    if (e3.ep)
      return;
    e3.ep = true;
    let t3 = function(e4) {
      let t4 = {};
      return e4.integrity && (t4.integrity = e4.integrity), e4.referrerPolicy && (t4.referrerPolicy = e4.referrerPolicy), "use-credentials" === e4.crossOrigin ? t4.credentials = "include" : "anonymous" === e4.crossOrigin ? t4.credentials = "omit" : t4.credentials = "same-origin", t4;
    }(e3);
    fetch(e3.href, t3);
  }
})();
let C = l(() => {
  let e2 = d(s().options.routes.filter((e3) => "/" !== e3.path), (e3) => e3.path.split("/")[1]);
  return () => i(j, { sx: { py: 16, px: 0, textTransform: "capitalize" }, children: h(e2, (e3, t2) => {
    var o2;
    let [a2, r2] = v(e3, (e4) => e4.path === `/${t2}`);
    return n(j, { sx: { px: 8 }, children: [a2[0] ? i(x, { component: u, sx: { width: "100%", justifyContent: "flex-start" }, activeClass: "active", to: null === (o2 = a2[0]) || void 0 === o2 ? void 0 : o2.path, children: t2 }) : i(x, { sx: { width: "100%", justifyContent: "flex-start" }, children: t2 }), i(j, { sx: { pl: 16 }, children: h(r2, (e4) => {
      var t3;
      return i(x, { component: u, activeClass: "active", to: e4.path, sx: { width: "100%", justifyContent: "flex-start" }, children: null === (t3 = k(e4.path.split("/"))) || void 0 === t3 ? void 0 : t3.replaceAll("-", " ") }, e4.name);
    }) })] }, t2);
  }) });
}), $ = l({ $default: m().optional() }, (e2, t2) => {
  let { slots: o2 } = t2, r2 = a("light");
  return () => {
    var e3;
    return n(j, { "data-theme": r2.value, sx: { display: "flex", height: "100vh", width: "100vw", containerStyle: "sys.surface" }, children: [n(j, { sx: { display: "flex", flexDirection: "column", width: "280px", height: "100vh", borderRightRadius: "lg", overflowY: "auto", containerStyle: "sys.surface-container-low", elevation: "0", _hover: { elevation: "2" } }, children: [i(j, { sx: { flex: 1 }, children: i(z, {}) }), n(j, { sx: { p: 16, display: "flex", justifyContent: "flex-end" }, children: [i(f, { component: "a", target: "_blank", sx: { color: "sys.on-surface-variant" }, href: "//github.com/innoai-tech/vuekit", children: i(E, { path: O }) }), i(g, { title: `切换到${"light" === r2.value ? "深色模式" : "浅色模式"}`, children: i(j, { component: f, "data-test": true, sx: { color: "sys.on-surface-variant" }, onClick: () => {
      r2.value = "light" === r2.value ? "dark" : "light";
    }, children: i(E, { path: "light" === r2.value ? I : y }) }) })] })] }), i(j, { sx: { flex: 1, overflow: "auto" }, children: i(A, { children: null === (e3 = o2.default) || void 0 === e3 ? void 0 : e3.call(o2) }) })] });
  };
}), q = l(() => {
  let e2 = L.use(), t2 = R.use();
  return o([() => e2.value.seed, () => e2.value.rules], (t3) => {
    let [i2, o2] = t3;
    e2.next((e3) => {
      e3.theming = b.create({ ...S, ...N.fromColors(i2).toDesignTokens(o2) }, { varPrefix: "vk" });
    });
  }), () => {
    let o2 = e2.value.theming, a2 = o2.unstable_css(t2, { ":root": o2.rootCSSVars });
    return i(L, { value: e2, children: n(V, { value: o2, children: [i(T, {}), i(D, { styles: P }), i(B, { children: i(p, {}) })] }, a2.name) });
  };
}), z = Object.assign(C, { displayName: "Nav" }), B = Object.assign($, { displayName: "Scaffold" }), U = Object.assign(q, { displayName: "App" }), G = {}, K = function(e2, t2, i2) {
  let o2 = Promise.resolve();
  if (t2 && t2.length > 0) {
    let e3 = document.getElementsByTagName("link"), n2 = document.querySelector("meta[property=csp-nonce]"), a2 = (null == n2 ? void 0 : n2.nonce) || (null == n2 ? void 0 : n2.getAttribute("nonce"));
    o2 = Promise.all(t2.map((t3) => {
      if ((t3 = "/vuekit/" + t3) in G)
        return;
      G[t3] = true;
      let o3 = t3.endsWith(".css");
      if (i2)
        for (let i3 = e3.length - 1; i3 >= 0; i3--) {
          let n4 = e3[i3];
          if (n4.href === t3 && (!o3 || "stylesheet" === n4.rel))
            return;
        }
      else if (document.querySelector(`link[href="${t3}"]${o3 ? '[rel="stylesheet"]' : ""}`))
        return;
      let n3 = document.createElement("link");
      if (n3.rel = o3 ? "stylesheet" : "modulepreload", o3 || (n3.as = "script", n3.crossOrigin = ""), n3.href = t3, a2 && n3.setAttribute("nonce", a2), document.head.appendChild(n3), o3)
        return new Promise((e4, i3) => {
          n3.addEventListener("load", e4), n3.addEventListener("error", () => i3(Error(`Unable to preload CSS for ${t3}`)));
        });
    }));
  }
  return o2.then(() => e2()).catch((e3) => {
    let t3 = new Event("vite:preloadError", { cancelable: true });
    if (t3.payload = e3, window.dispatchEvent(t3), !t3.defaultPrevented)
      throw e3;
  });
}, W = [{ name: "vuematerial-textfields", path: "/vuematerial/textfields", component: () => K(() => import("./nodepkg-vuematerial-example.V8oqs79I.chunk.js").then((e2) => e2.t), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]) : void 0), props: true }, { name: "vuematerial", path: "/vuematerial", component: () => K(() => import("./nodepkg-vuematerial-example.V8oqs79I.chunk.js").then((e2) => e2.i), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]) : void 0), props: true }, { name: "vuematerial-icons", path: "/vuematerial/icons", component: () => K(() => import("./nodepkg-vuematerial-example.V8oqs79I.chunk.js").then((e2) => e2.a), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]) : void 0), props: true }, { name: "vuematerial-buttons", path: "/vuematerial/buttons", component: () => K(() => import("./nodepkg-vuematerial-example.V8oqs79I.chunk.js").then((e2) => e2.b), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]) : void 0), props: true }, { name: "vuematerial-overlays", path: "/vuematerial/overlays", component: () => K(() => import("./nodepkg-vuematerial-example.V8oqs79I.chunk.js").then((e2) => e2.o), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]) : void 0), props: true }, { name: "vueuikit-elevation", path: "/vueuikit/elevation", component: () => K(() => import("./nodepkg-vueuikit-example.DJKjGEbj.chunk.js").then((e2) => e2.e), true ? __vite__mapDeps([11,1,2,3,4,5,6,8,10,9]) : void 0), props: true }, { name: "vueuikit-figma-tokens", path: "/vueuikit/figma-tokens", component: () => K(() => import("./nodepkg-vueuikit-example.DJKjGEbj.chunk.js").then((e2) => e2.f), true ? __vite__mapDeps([11,1,2,3,4,5,6,8,10,9]) : void 0), props: true }, { name: "vueuikit-color-scheme", path: "/vueuikit/color-scheme", component: () => K(() => import("./nodepkg-vueuikit-example.DJKjGEbj.chunk.js").then((e2) => e2.c), true ? __vite__mapDeps([11,1,2,3,4,5,6,8,10,9]) : void 0), props: true }, { name: "vueuikit-color-palette", path: "/vueuikit/color-palette", component: () => K(() => import("./nodepkg-vueuikit-example.DJKjGEbj.chunk.js").then((e2) => e2.a), true ? __vite__mapDeps([11,1,2,3,4,5,6,8,10,9]) : void 0), props: true }, { name: "vueuikit-popper", path: "/vueuikit/popper", component: () => K(() => import("./nodepkg-vueuikit-example.DJKjGEbj.chunk.js").then((e2) => e2.p), true ? __vite__mapDeps([11,1,2,3,4,5,6,8,10,9]) : void 0), props: true }, { name: "vueuikit", path: "/vueuikit", component: () => K(() => import("./nodepkg-vueuikit-example.DJKjGEbj.chunk.js").then((e2) => e2.i), true ? __vite__mapDeps([11,1,2,3,4,5,6,8,10,9]) : void 0), props: true }, { name: "vueuikit-typography", path: "/vueuikit/typography", component: () => K(() => import("./nodepkg-vueuikit-example.DJKjGEbj.chunk.js").then((e2) => e2.t), true ? __vite__mapDeps([11,1,2,3,4,5,6,8,10,9]) : void 0), props: true }, { name: "vuekit-rx-in-vue", path: "/vuekit/rx-in-vue", component: () => K(() => import("./nodepkg-vuekit-example.DgTXTKvp.chunk.js").then((e2) => e2.r), true ? __vite__mapDeps([12,1,2,3,4,5,6]) : void 0), props: true }, { name: "vuekit", path: "/vuekit", component: () => K(() => import("./nodepkg-vuekit-example.DgTXTKvp.chunk.js").then((e2) => e2.i), true ? __vite__mapDeps([12,1,2,3,4,5,6]) : void 0), props: true }, { name: "index", path: "/", component: Object.assign(w, M), props: true }];
console.log(W);
let Y = _({ history: c(new URL(null !== (t = null === (e = document.querySelector("base")) || void 0 === e ? void 0 : e.href) && void 0 !== t ? t : "/").pathname), routes: W });
r(U).use(Y).mount("#root");
export {
  K as _
};
