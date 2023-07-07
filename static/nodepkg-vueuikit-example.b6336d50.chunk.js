import { c as e, b as n, j as o } from "./lib-nodepkg-vuekit.bd88abd3.chunk.js";
import { T as i, B as t } from "./lib-nodepkg-vueuikit.b9bd37e1.chunk.js";
let l = e(() => {
  let e2 = i.use();
  return () => n(t, { sx: { display: "flex", gap: 16, flexDirection: "column" }, children: [o("div", { children: "点击下载，通过 Figma Tokens 全量导入文件" }), o("pre", { onClick: () => {
    !function(e3, n2) {
      let o2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "application/json", i2 = document.createElement("a"), t2 = new Blob([e3], { type: o2 }), l2 = URL.createObjectURL(t2);
      i2.href = l2, i2.download = n2, document.body.appendChild(i2), i2.click(), setTimeout(function() {
        document.body.removeChild(i2), window.URL.revokeObjectURL(l2);
      }, 0);
    }(JSON.stringify(e2.toFigmaTokens(), null, 2), `tokens.${(/* @__PURE__ */ new Date()).getUTCSeconds()}.json`);
  }, children: o("code", { children: JSON.stringify(e2.toFigmaTokens(), null, 2) }) })] });
}), a = Object.assign(l, { displayName: "FigmaTokensDefault" });
export {
  a as default
};
