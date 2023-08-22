import { c as e, j as s, b as t, F as l } from "./lib-nodepkg-vuekit.ab4a9063.chunk.js";
import { f as r, B as a } from "./lib-nodepkg-vueuikit.3f773f52.chunk.js";
let i = e(() => {
  let e2 = r.use();
  return () => s(l, { children: s(a, { sx: { height: "40vh", display: "flex", flexDirection: "column", flexWrap: "wrap", justifyContent: "space-between", gap: 8 }, children: e2.token.textStyle.tokens.map((e3) => t(a, { sx: { flex: 1, rounded: "md", textStyle: e3, p: 16, border: "2px solid", borderColor: "sys.outline-variant", bgColor: "sys.surface-container", color: "sys.primary", minW: "10vw", whiteSpace: "nowrap", display: "flex", flexDirection: "column", justifyContent: "space-between" }, children: [s(a, { sx: { textStyle: "sys.label-small" }, children: e3 }), s(a, { sx: { flex: 1 } }), s(a, { sx: { py: 16 }, children: "中文测试" })] }, e3)) }) });
}), n = Object.assign(i, { displayName: "TypographyDefault" });
export {
  n as default
};
