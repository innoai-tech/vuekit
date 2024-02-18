import { c as e, i as n, j as i } from "./lib-nodepkg-vuekit._nCnmCPK.chunk.js";
import { n as o, B as t } from "./lib-nodepkg-vueuikit.dvJnDD9I.chunk.js";
let l = /* @__PURE__ */ e(() => {
  let e2 = /* @__PURE__ */ o.use();
  return () => /* @__PURE__ */ n(t, { sx: { display: "flex", gap: 16, flexDirection: "column" }, children: [/* @__PURE__ */ i("div", { children: "点击下载，通过 Figma Tokens 全量导入文件" }), /* @__PURE__ */ i("pre", { onClick: () => {
    !function(e3, n2) {
      let i2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "application/json", o2 = /* @__PURE__ */ document.createElement("a"), t2 = new Blob([e3], { type: i2 }), l2 = /* @__PURE__ */ URL.createObjectURL(t2);
      o2.href = l2, o2.download = n2, document.body.appendChild(o2), o2.click(), setTimeout(() => {
        document.body.removeChild(o2), window.URL.revokeObjectURL(l2);
      }, 0);
    }(/* @__PURE__ */ JSON.stringify(/* @__PURE__ */ e2.toFigmaTokens(), null, 2), `tokens.${(/* @__PURE__ */ new Date()).getTime()}.json`);
  }, children: /* @__PURE__ */ i("code", { children: /* @__PURE__ */ JSON.stringify(/* @__PURE__ */ e2.toFigmaTokens(), null, 2) }) })] });
}), a = /* @__PURE__ */ Object.assign(l, { displayName: "FigmaTokensDefault" });
export {
  a as default
};
