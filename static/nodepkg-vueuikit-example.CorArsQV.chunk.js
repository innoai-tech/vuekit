import { a as e, j as l } from "./lib--nodepkg-vue-jsx-runtime.DL8fEjf_.chunk.js";
import { c as t, d as a } from "./lib--nodepkg-vuekit.C4CbSFwU.chunk.js";
import { b as r, B as n } from "./lib--nodepkg-vueuikit.CEMh5M-A.chunk.js";
import { D as o } from "./webapp-vuekit-layout-DynamicTheming_tsx.CYemvuKa.chunk.js";
import { c as s } from "./vendor--copy-to-clipboard.BMOq-bGP.chunk.js";
import { A as i } from "./lib--nodepkg-typedef.DdnEDJY6.chunk.js";
let d = Object.assign(t(() => {
  let t2 = o.use(), d2 = a();
  return () => {
    let a2 = r.fromColors(t2.value.seed);
    return e(n, { ref: d2, sx: { display: "flex", flexDirection: "column", gap: 24 }, children: [e(n, { sx: { display: "flex", gap: 56 }, children: [l(n, { sx: { display: "flex", flexDirection: "column" }, children: i(t2.value.seed, (a3, r2) => e(n, { sx: { flex: 1, display: "flex", alignItems: "center", gap: 16 }, children: [l(n, { sx: { flex: 1 }, children: r2 }), l("input", { type: "color", value: a3, onChange: (e2) => {
      t2.next((l2) => {
        l2.seed[r2] = e2.target.value;
      });
    } })] })) }), l(n, { sx: { display: "flex", flexWrap: "wrap", gap: 16 }, children: i(t2.value.rules, (o2, s2) => {
      let [i2, d3, c] = o2;
      return e(n, { sx: { display: "flex", alignItems: "center", width: "30%" }, children: [l(n, { sx: { flex: 1 }, children: s2 }), e(n, { sx: { flex: 1, display: "flex", gap: 4, "& input": { width: "40%", border: "1px solid", borderColor: "sys.outline" } }, children: [l("input", { type: "number", value: d3, max: 100, min: 0, style: { backgroundColor: r.toHEX(a2.seeds[i2].tone(d3)), color: d3 > 50 ? "black" : "white" }, "data-color": r.toHEX(a2.seeds[i2].tone(d3)), "data-theme": "dark", onChange: (e2) => {
        try {
          let l2 = parseInt(e2.target.value);
          t2.next((e3) => {
            e3.rules[s2] = [i2, l2, c];
          });
        } catch (e3) {
        }
      } }), l("input", { type: "number", max: 100, min: 0, value: c, style: { backgroundColor: r.toHEX(a2.seeds[i2].tone(c)), color: c > 50 ? "black" : "white" }, "data-color": r.toHEX(a2.seeds[i2].tone(c)), "data-theme": "light", onChange: (e2) => {
        try {
          let l2 = parseInt(e2.target.value);
          t2.next((e3) => {
            e3.rules[s2] = [i2, d3, l2];
          });
        } catch (e3) {
        }
      } })] })] });
    }) })] }), l(n, { sx: { display: "flex", gap: 16, "& > *": { flex: 1 } }, children: l("pre", { onClick: () => s(JSON.stringify(t2.value)), children: l("code", { children: JSON.stringify(t2.value, null, 2) }) }) })] });
  };
}), { displayName: "ColorPaletteDefault" });
export {
  d as default
};
