import { c as e, b as n, j as i } from "./lib-nodepkg-vuekit.bd88abd3.chunk.js";
import { T as o, B as t } from "./lib-nodepkg-vueuikit.a0bf8d00.chunk.js";
let l = e(() => {
  let e2 = o.use();
  return () => n(t, { sx: { display: "flex", gap: 16, flexDirection: "column" }, children: [i("div", { children: "点击下载，通过 Figma Tokens 全量导入文件" }), i("pre", { onClick: () => {
    !function(e3, n2) {
      let i2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "application/json", o2 = document.createElement("a"), t2 = new Blob([e3], { type: i2 }), l2 = URL.createObjectURL(t2);
      o2.href = l2, o2.download = n2, document.body.appendChild(o2), o2.click(), setTimeout(function() {
        document.body.removeChild(o2), window.URL.revokeObjectURL(l2);
      }, 0);
    }(JSON.stringify(e2.toFigmaTokens(), null, 2), `tokens.${(/* @__PURE__ */ new Date()).getTime()}.json`);
  }, children: i("code", { children: JSON.stringify(e2.toFigmaTokens(), null, 2) }) })] });
}), a = Object.assign(l, { displayName: "FigmaTokensDefault" });
export {
  a as default
};
