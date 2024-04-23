const __vite__fileDeps=["static/nodepkg-vuematerial-example.BEKxX5MM.chunk.js","static/lib--nodepkg-vue-jsx-runtime.BKjV4fr1.chunk.js","static/lib--nodepkg-vuekit.DLZfr_ED.chunk.js","static/vendor--core-js.CIHBAauM.chunk.js","static/vendor--copy-to-clipboard.0-XIsMJU.chunk.js","static/vendor--toggle-selection.C0yjZLCq.chunk.js","static/lib--nodepkg-typedef.DdnEDJY6.chunk.js","static/lib--nodepkg-vuematerial.CArBeqTL.chunk.js","static/lib--nodepkg-vueuikit.C6JhOhKI.chunk.js","static/vendor--mdi-js.et_sAQgv.chunk.js","static/webapp-vuekit-layout.tACwjX8G.chunk.js","static/nodepkg-vueuikit-example.B8RxlnMl.chunk.js","static/nodepkg-vuekit-example.D2oiaJDT.chunk.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
var e, t;
import { c as i, x as o, w as n, R as a, r, y as l, z as s, A as p, B as u } from "./lib--nodepkg-vuekit.DLZfr_ED.chunk.js";
import { j as _, a as c } from "./lib--nodepkg-vue-jsx-runtime.BKjV4fr1.chunk.js";
import { c as m, C as d, A as h, p as v, l as k } from "./lib--nodepkg-typedef.DdnEDJY6.chunk.js";
import { a as f, I as E, e as g, c as x } from "./lib--nodepkg-vuematerial.CArBeqTL.chunk.js";
import { d as I, e as y, f as O } from "./vendor--mdi-js.et_sAQgv.chunk.js";
import { B as j, C as R, e as T, G as D, T as V, f as b, g as S, b as N } from "./lib--nodepkg-vueuikit.C6JhOhKI.chunk.js";
import { n as P } from "./vendor--normalize.css.B1ng_4q_.chunk.js";
import { D as A, C as L } from "./webapp-vuekit-layout.tACwjX8G.chunk.js";
import { _ as w, a as M } from "./webapp-vuekit-page.wumavPTi.chunk.js";
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
let C = i(() => {
  let e2 = d(o().options.routes.filter((e3) => "/" !== e3.path), (e3) => e3.path.split("/")[1]);
  return () => _(j, { sx: { py: 16, px: 0, textTransform: "capitalize" }, children: h(e2, (e3, t2) => {
    var i2;
    let [o2, n2] = v(e3, (e4) => e4.path === `/${t2}`);
    return c(j, { sx: { px: 8 }, children: [o2[0] ? _(x, { component: l, sx: { width: "100%", justifyContent: "flex-start" }, activeClass: "active", to: null === (i2 = o2[0]) || void 0 === i2 ? void 0 : i2.path, children: t2 }) : _(x, { sx: { width: "100%", justifyContent: "flex-start" }, children: t2 }), _(j, { sx: { pl: 16 }, children: h(n2, (e4) => {
      var t3;
      return _(x, { component: l, activeClass: "active", to: e4.path, sx: { width: "100%", justifyContent: "flex-start" }, children: null === (t3 = k(e4.path.split("/"))) || void 0 === t3 ? void 0 : t3.replaceAll("-", " ") }, e4.name);
    }) })] }, t2);
  }) });
}), $ = i({ $default: m().optional() }, (e2, t2) => {
  let { slots: i2 } = t2, o2 = r("light");
  return () => {
    var e3;
    return c(j, { "data-theme": o2.value, sx: { display: "flex", height: "100vh", width: "100vw", containerStyle: "sys.surface" }, children: [c(j, { sx: { display: "flex", flexDirection: "column", width: "280px", height: "100vh", borderRightRadius: "lg", overflowY: "auto", containerStyle: "sys.surface-container-low", elevation: "0", _hover: { elevation: "2" } }, children: [_(j, { sx: { flex: 1 }, children: _(z, {}) }), c(j, { sx: { p: 16, display: "flex", justifyContent: "flex-end" }, children: [_(f, { component: "a", target: "_blank", sx: { color: "sys.on-surface-variant" }, href: "//github.com/innoai-tech/vuekit", children: _(E, { path: O }) }), _(g, { title: `切换到${"light" === o2.value ? "深色模式" : "浅色模式"}`, children: _(j, { component: f, "data-test": true, sx: { color: "sys.on-surface-variant" }, onClick: () => {
      o2.value = "light" === o2.value ? "dark" : "light";
    }, children: _(E, { path: "light" === o2.value ? I : y }) }) })] })] }), _(j, { sx: { flex: 1, overflow: "auto" }, children: _(L, { children: null === (e3 = i2.default) || void 0 === e3 ? void 0 : e3.call(i2) }) })] });
  };
}), q = i(() => {
  let e2 = A.use(), t2 = R.use();
  return n([() => e2.value.seed, () => e2.value.rules], (t3) => {
    let [i2, o2] = t3;
    e2.next((e3) => {
      e3.theming = b.create({ ...S, ...N.fromColors(i2).toDesignTokens(o2) }, { varPrefix: "vk" });
    });
  }), () => {
    let i2 = e2.value.theming, o2 = i2.unstable_css(t2, { ":root": i2.rootCSSVars });
    return _(A, { value: e2, children: c(V, { value: i2, children: [_(T, {}), _(D, { styles: P }), _(B, { children: _(a, {}) })] }, o2.name) });
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
}, W = [{ name: "vuematerial-textfields", path: "/vuematerial/textfields", component: () => K(() => import("./nodepkg-vuematerial-example.BEKxX5MM.chunk.js").then((e2) => e2.t), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]) : void 0), props: true }, { name: "vuematerial", path: "/vuematerial", component: () => K(() => import("./nodepkg-vuematerial-example.BEKxX5MM.chunk.js").then((e2) => e2.i), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]) : void 0), props: true }, { name: "vuematerial-icons", path: "/vuematerial/icons", component: () => K(() => import("./nodepkg-vuematerial-example.BEKxX5MM.chunk.js").then((e2) => e2.a), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]) : void 0), props: true }, { name: "vuematerial-buttons", path: "/vuematerial/buttons", component: () => K(() => import("./nodepkg-vuematerial-example.BEKxX5MM.chunk.js").then((e2) => e2.b), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]) : void 0), props: true }, { name: "vuematerial-overlays", path: "/vuematerial/overlays", component: () => K(() => import("./nodepkg-vuematerial-example.BEKxX5MM.chunk.js").then((e2) => e2.o), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]) : void 0), props: true }, { name: "vueuikit-elevation", path: "/vueuikit/elevation", component: () => K(() => import("./nodepkg-vueuikit-example.B8RxlnMl.chunk.js").then((e2) => e2.e), true ? __vite__mapDeps([11,1,2,3,4,5,6,8,10,9]) : void 0), props: true }, { name: "vueuikit-figma-tokens", path: "/vueuikit/figma-tokens", component: () => K(() => import("./nodepkg-vueuikit-example.B8RxlnMl.chunk.js").then((e2) => e2.f), true ? __vite__mapDeps([11,1,2,3,4,5,6,8,10,9]) : void 0), props: true }, { name: "vueuikit-color-scheme", path: "/vueuikit/color-scheme", component: () => K(() => import("./nodepkg-vueuikit-example.B8RxlnMl.chunk.js").then((e2) => e2.c), true ? __vite__mapDeps([11,1,2,3,4,5,6,8,10,9]) : void 0), props: true }, { name: "vueuikit-color-palette", path: "/vueuikit/color-palette", component: () => K(() => import("./nodepkg-vueuikit-example.B8RxlnMl.chunk.js").then((e2) => e2.a), true ? __vite__mapDeps([11,1,2,3,4,5,6,8,10,9]) : void 0), props: true }, { name: "vueuikit-popper", path: "/vueuikit/popper", component: () => K(() => import("./nodepkg-vueuikit-example.B8RxlnMl.chunk.js").then((e2) => e2.p), true ? __vite__mapDeps([11,1,2,3,4,5,6,8,10,9]) : void 0), props: true }, { name: "vueuikit", path: "/vueuikit", component: () => K(() => import("./nodepkg-vueuikit-example.B8RxlnMl.chunk.js").then((e2) => e2.i), true ? __vite__mapDeps([11,1,2,3,4,5,6,8,10,9]) : void 0), props: true }, { name: "vueuikit-typography", path: "/vueuikit/typography", component: () => K(() => import("./nodepkg-vueuikit-example.B8RxlnMl.chunk.js").then((e2) => e2.t), true ? __vite__mapDeps([11,1,2,3,4,5,6,8,10,9]) : void 0), props: true }, { name: "vuekit-rx-in-vue", path: "/vuekit/rx-in-vue", component: () => K(() => import("./nodepkg-vuekit-example.D2oiaJDT.chunk.js").then((e2) => e2.r), true ? __vite__mapDeps([12,1,2,3,4,5,6]) : void 0), props: true }, { name: "vuekit", path: "/vuekit", component: () => K(() => import("./nodepkg-vuekit-example.D2oiaJDT.chunk.js").then((e2) => e2.i), true ? __vite__mapDeps([12,1,2,3,4,5,6]) : void 0), props: true }, { name: "index", path: "/", component: Object.assign(w, M), props: true }];
console.log(W);
let Y = s({ history: p(new URL(null !== (t = null === (e = document.querySelector("base")) || void 0 === e ? void 0 : e.href) && void 0 !== t ? t : "/").pathname), routes: W });
u(U).use(Y).mount("#root");
export {
  K as _
};
