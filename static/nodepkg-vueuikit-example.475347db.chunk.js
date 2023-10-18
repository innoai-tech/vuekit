import { c as e, j as i } from "./lib-nodepkg-vuekit.07a3eb77.chunk.js";
import { e as o, B as n } from "./lib-nodepkg-vueuikit.0cd81685.chunk.js";
let t = /* @__PURE__ */ e(() => {
  let e2 = /* @__PURE__ */ o.use();
  return () => /* @__PURE__ */ i(n, { sx: { display: "flex", gap: 16, flexDirection: "column" }, children: [/* @__PURE__ */ i("div", { children: "点击下载，通过 Figma Tokens 全量导入文件" }, void 0, false, { fileName: "/home/runner/work/vuekit/vuekit/nodepkg/vueuikit/example/figma-tokens.tsx", lineNumber: 11, columnNumber: 9 }, globalThis), /* @__PURE__ */ i("pre", { onClick: () => {
    !function(e3, i2) {
      let o2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "application/json", n2 = /* @__PURE__ */ document.createElement("a"), t2 = new Blob([e3], { type: o2 }), l2 = /* @__PURE__ */ URL.createObjectURL(t2);
      n2.href = l2, n2.download = i2, document.body.appendChild(n2), n2.click(), setTimeout(function() {
        document.body.removeChild(n2), window.URL.revokeObjectURL(l2);
      }, 0);
    }(/* @__PURE__ */ JSON.stringify(/* @__PURE__ */ e2.toFigmaTokens(), null, 2), `tokens.${(/* @__PURE__ */ new Date()).getTime()}.json`);
  }, children: /* @__PURE__ */ i("code", { children: /* @__PURE__ */ JSON.stringify(/* @__PURE__ */ e2.toFigmaTokens(), null, 2) }, void 0, false, { fileName: "/home/runner/work/vuekit/vuekit/nodepkg/vueuikit/example/figma-tokens.tsx", lineNumber: 20, columnNumber: 11 }, globalThis) }, void 0, false, { fileName: "/home/runner/work/vuekit/vuekit/nodepkg/vueuikit/example/figma-tokens.tsx", lineNumber: 12, columnNumber: 9 }, globalThis)] }, void 0);
}), l = /* @__PURE__ */ Object.assign(t, { displayName: "FigmaTokensDefault" });
export {
  l as default
};
