import { c as e, s as n, i, j as o, B as t } from "./index.CxFCMZJ4.entry.js";
let l = Object.assign(e(() => {
  let e2 = n.use();
  return () => i(t, { sx: { display: "flex", gap: 16, flexDirection: "column" }, children: [o("div", { children: "点击下载，通过 Figma Tokens 全量导入文件" }), o("pre", { onClick: () => {
    !function(e3, n2) {
      let i2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "application/json", o2 = document.createElement("a"), t2 = new Blob([e3], { type: i2 }), l2 = URL.createObjectURL(t2);
      o2.href = l2, o2.download = n2, document.body.appendChild(o2), o2.click(), setTimeout(() => {
        document.body.removeChild(o2), window.URL.revokeObjectURL(l2);
      }, 0);
    }(JSON.stringify(e2.toFigmaTokens(), null, 2), `tokens.${(/* @__PURE__ */ new Date()).getTime()}.json`);
  }, children: o("code", { children: JSON.stringify(e2.toFigmaTokens(), null, 2) }) })] });
}), { displayName: "FigmaTokensDefault" });
export {
  l as default
};
