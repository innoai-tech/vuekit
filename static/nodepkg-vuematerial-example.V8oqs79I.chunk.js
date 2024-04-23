import { j as n, d as e, h as a, g as s, F as c, b as t } from "./lib--nodepkg-vue-jsx-runtime.CEFt0iM_.chunk.js";
import { c as l, F as i } from "./lib--nodepkg-vuekit.DB5BTWky.chunk.js";
import { T as o, I as p, a as r, F as d, E as m, b as u, O as h, c as k, D as N, d as g, e as f, M as y, L as x } from "./lib--nodepkg-vuematerial.ZvEGCNjm.chunk.js";
import { m as v, a as b, b as j, c as w } from "./vendor--mdi-js.et_sAQgv.chunk.js";
import { B as O } from "./lib--nodepkg-vueuikit.UEJ3QS1S.chunk.js";
import { C as _ } from "./webapp-vuekit-layout.BowFt-km.chunk.js";
import { A as D } from "./lib--nodepkg-typedef.DdnEDJY6.chunk.js";
let S = Object.freeze(Object.defineProperty({ __proto__: null, default: Object.assign(l(() => {
  let e2 = { Enabled: {}, Focused: { focus: true }, Invalid: { invalid: true }, Disabled: { disabled: true } }, a2 = { TextField: o };
  return () => n(_, { children: n(O, { sx: { display: "flex", flexDirection: "column", gap: 48 }, children: D(a2, (a3, s2) => n(O, { sx: { display: "flex", flexDirection: "column", gap: 16 }, children: [(e3) => n(a3, { ...e3, children: n("input", { "data-input": "", type: "text", placeholder: "Type" }) }), (e3) => n(a3, { ...e3, valued: true, children: n("input", { "data-input": "", type: "text", value: "Username" }) }), (e3) => n(a3, { ...e3, $leading: n(p, { path: v }), children: n("input", { "data-input": "", type: "text" }) }), (e3) => n(a3, { ...e3, $trailing: n(p, { path: b }), children: n("input", { "data-input": "", type: "text" }) })].map((a4, s3) => n(i, { children: n(O, { sx: { display: "flex", gap: 16 }, children: D(e2, (n2) => a4({ ...n2, $label: "Name", $supporting: "Desc" })) }) }, `${s3}`)) }, s2)) }) });
}), { displayName: "TextfieldsDefault" }) }, Symbol.toStringTag, { value: "Module" }));
function I(e2) {
  return n({ p: "p", ...e2.components }.p, { children: "这不是一个完整的组件库，只是一个示例，作为 vueuikit 的参考" });
}
function B() {
  let e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, { wrapper: a2 } = e2.components || {};
  return a2 ? n(a2, { ...e2, children: n(I, { ...e2 }) }) : I(e2);
}
let C = Object.freeze(Object.defineProperty({ __proto__: null, default: Object.assign(e(() => () => a(B, { components: {} })), { displayName: "IndexDefault" }) }, Symbol.toStringTag, { value: "Module" })), $ = Object.assign(l(() => () => n(p, { path: j })), { displayName: "IconsMdCodeBlockd4735E3ADefault" }), M = Object.assign(l(() => () => s(O, { sx: { display: "flex", gap: 8 }, children: [n(r, { active: true, onClick: () => console.log(1), children: n(p, { path: j }) }), s(d, { active: false, children: ["Send", n(p, { path: j, placement: "end" })] })] })), { displayName: "IconsMdCodeBlocke7F6C011Default" });
function F(e2) {
  let a2 = { a: "a", code: "code", codeblockd4735e3a: "codeblockd4735e3a", codeblocke7f6c011: "codeblocke7f6c011", div: "div", h3: "h3", p: "p", pre: "pre", span: "span", ...e2.components };
  return s(c, { children: [s(a2.p, { children: ["直接使用沿用 ", n(a2.a, { href: "https://pictogrammers.com/library/mdi/", children: "mid" })] }), "\n", s(a2.div, { "data-example": "", children: [n(a2.div, { "data-example-container": "", children: n(a2.codeblockd4735e3a, {}) }), n(a2.pre, { className: "language-tsx", children: s(a2.code, { className: "language-tsx", children: [n(a2.span, { className: "token keyword module", children: "import" }), " ", s(a2.span, { className: "token imports", children: [n(a2.span, { className: "token punctuation", children: "{" }), " component ", n(a2.span, { className: "token punctuation", children: "}" })] }), " ", n(a2.span, { className: "token keyword module", children: "from" }), " ", n(a2.span, { className: "token string", children: '"@innoai-tech/vuekit"' }), n(a2.span, { className: "token punctuation", children: ";" }), "\n", n(a2.span, { className: "token keyword module", children: "import" }), " ", s(a2.span, { className: "token imports", children: [n(a2.span, { className: "token punctuation", children: "{" }), " mdiSend ", n(a2.span, { className: "token punctuation", children: "}" })] }), " ", n(a2.span, { className: "token keyword module", children: "from" }), " ", n(a2.span, { className: "token string", children: '"@mdi/js"' }), n(a2.span, { className: "token punctuation", children: ";" }), "\n", n(a2.span, { className: "token keyword module", children: "import" }), " ", s(a2.span, { className: "token imports", children: [n(a2.span, { className: "token punctuation", children: "{" }), " ", n(a2.span, { className: "token maybe-class-name", children: "Icon" }), " ", n(a2.span, { className: "token punctuation", children: "}" })] }), " ", n(a2.span, { className: "token keyword module", children: "from" }), " ", n(a2.span, { className: "token string", children: '"@innoai-tech/vuematerial"' }), n(a2.span, { className: "token punctuation", children: ";" }), "\n\n", n(a2.span, { className: "token keyword module", children: "export" }), " ", n(a2.span, { className: "token keyword module", children: "default" }), " ", n(a2.span, { className: "token function", children: "component" }), n(a2.span, { className: "token punctuation", children: "(" }), n(a2.span, { className: "token punctuation", children: "(" }), n(a2.span, { className: "token punctuation", children: ")" }), " ", n(a2.span, { className: "token arrow operator", children: "=>" }), " ", n(a2.span, { className: "token punctuation", children: "{" }), "\n  ", n(a2.span, { className: "token keyword control-flow", children: "return" }), " ", n(a2.span, { className: "token punctuation", children: "(" }), n(a2.span, { className: "token punctuation", children: ")" }), " ", n(a2.span, { className: "token arrow operator", children: "=>" }), " ", s(a2.span, { className: "token tag", children: [s(a2.span, { className: "token tag", children: [n(a2.span, { className: "token punctuation", children: "<" }), n(a2.span, { className: "token class-name", children: "Icon" })] }), " ", n(a2.span, { className: "token attr-name", children: "path" }), s(a2.span, { className: "token script language-javascript", children: [n(a2.span, { className: "token script-punctuation punctuation", children: "=" }), n(a2.span, { className: "token punctuation", children: "{" }), "mdiSend", n(a2.span, { className: "token punctuation", children: "}" })] }), " ", n(a2.span, { className: "token punctuation", children: "/>" })] }), n(a2.span, { className: "token punctuation", children: ";" }), "\n", n(a2.span, { className: "token punctuation", children: "}" }), n(a2.span, { className: "token punctuation", children: ")" }), n(a2.span, { className: "token punctuation", children: ";" }), "\n"] }) })] }), "\n", n(a2.h3, { children: "和 Button 一起使用" }), "\n", s(a2.div, { "data-example": "", children: [n(a2.div, { "data-example-container": "", children: n(a2.codeblocke7f6c011, {}) }), n(a2.pre, { className: "language-tsx", children: s(a2.code, { className: "language-tsx", children: [n(a2.span, { className: "token keyword module", children: "import" }), " ", s(a2.span, { className: "token imports", children: [n(a2.span, { className: "token punctuation", children: "{" }), " component ", n(a2.span, { className: "token punctuation", children: "}" })] }), " ", n(a2.span, { className: "token keyword module", children: "from" }), " ", n(a2.span, { className: "token string", children: '"@innoai-tech/vuekit"' }), n(a2.span, { className: "token punctuation", children: ";" }), "\n", n(a2.span, { className: "token keyword module", children: "import" }), " ", s(a2.span, { className: "token imports", children: [n(a2.span, { className: "token punctuation", children: "{" }), " mdiSend ", n(a2.span, { className: "token punctuation", children: "}" })] }), " ", n(a2.span, { className: "token keyword module", children: "from" }), " ", n(a2.span, { className: "token string", children: '"@mdi/js"' }), n(a2.span, { className: "token punctuation", children: ";" }), "\n", n(a2.span, { className: "token keyword module", children: "import" }), " ", s(a2.span, { className: "token imports", children: [n(a2.span, { className: "token punctuation", children: "{" }), " ", n(a2.span, { className: "token maybe-class-name", children: "Icon" }), " ", n(a2.span, { className: "token punctuation", children: "}" })] }), " ", n(a2.span, { className: "token keyword module", children: "from" }), " ", n(a2.span, { className: "token string", children: '"@innoai-tech/vuematerial"' }), n(a2.span, { className: "token punctuation", children: ";" }), "\n", n(a2.span, { className: "token keyword module", children: "import" }), " ", s(a2.span, { className: "token imports", children: [n(a2.span, { className: "token punctuation", children: "{" }), " ", n(a2.span, { className: "token maybe-class-name", children: "IconButton" }), n(a2.span, { className: "token punctuation", children: "," }), " ", n(a2.span, { className: "token maybe-class-name", children: "FilledButton" }), " ", n(a2.span, { className: "token punctuation", children: "}" })] }), " ", n(a2.span, { className: "token keyword module", children: "from" }), " ", n(a2.span, { className: "token string", children: '"@innoai-tech/vuematerial"' }), n(a2.span, { className: "token punctuation", children: ";" }), "\n", n(a2.span, { className: "token keyword module", children: "import" }), " ", s(a2.span, { className: "token imports", children: [n(a2.span, { className: "token punctuation", children: "{" }), " ", n(a2.span, { className: "token maybe-class-name", children: "Box" }), " ", n(a2.span, { className: "token punctuation", children: "}" })] }), " ", n(a2.span, { className: "token keyword module", children: "from" }), " ", n(a2.span, { className: "token string", children: '"@innoai-tech/vueuikit"' }), n(a2.span, { className: "token punctuation", children: ";" }), "\n\n", n(a2.span, { className: "token keyword module", children: "export" }), " ", n(a2.span, { className: "token keyword module", children: "default" }), " ", n(a2.span, { className: "token function", children: "component" }), n(a2.span, { className: "token punctuation", children: "(" }), n(a2.span, { className: "token punctuation", children: "(" }), n(a2.span, { className: "token punctuation", children: ")" }), " ", n(a2.span, { className: "token arrow operator", children: "=>" }), " ", n(a2.span, { className: "token punctuation", children: "{" }), "\n  ", n(a2.span, { className: "token keyword control-flow", children: "return" }), " ", n(a2.span, { className: "token punctuation", children: "(" }), n(a2.span, { className: "token punctuation", children: ")" }), " ", n(a2.span, { className: "token arrow operator", children: "=>" }), " ", n(a2.span, { className: "token punctuation", children: "(" }), "\n    ", s(a2.span, { className: "token tag", children: [s(a2.span, { className: "token tag", children: [n(a2.span, { className: "token punctuation", children: "<" }), n(a2.span, { className: "token class-name", children: "Box" })] }), " ", n(a2.span, { className: "token attr-name", children: "sx" }), s(a2.span, { className: "token script language-javascript", children: [n(a2.span, { className: "token script-punctuation punctuation", children: "=" }), n(a2.span, { className: "token punctuation", children: "{" }), n(a2.span, { className: "token punctuation", children: "{" }), " display", n(a2.span, { className: "token operator", children: ":" }), " ", n(a2.span, { className: "token string", children: '"flex"' }), n(a2.span, { className: "token punctuation", children: "," }), " gap", n(a2.span, { className: "token operator", children: ":" }), " ", n(a2.span, { className: "token number", children: "8" }), " ", n(a2.span, { className: "token punctuation", children: "}" }), n(a2.span, { className: "token punctuation", children: "}" })] }), n(a2.span, { className: "token punctuation", children: ">" })] }), n(a2.span, { className: "token plain-text", children: "\n      " }), s(a2.span, { className: "token tag", children: [s(a2.span, { className: "token tag", children: [n(a2.span, { className: "token punctuation", children: "<" }), n(a2.span, { className: "token class-name", children: "IconButton" })] }), " ", n(a2.span, { className: "token attr-name", children: "active" }), " ", n(a2.span, { className: "token attr-name", children: "onClick" }), s(a2.span, { className: "token script language-javascript", children: [n(a2.span, { className: "token script-punctuation punctuation", children: "=" }), n(a2.span, { className: "token punctuation", children: "{" }), n(a2.span, { className: "token punctuation", children: "(" }), n(a2.span, { className: "token punctuation", children: ")" }), " ", n(a2.span, { className: "token arrow operator", children: "=>" }), " ", n(a2.span, { className: "token console class-name", children: "console" }), n(a2.span, { className: "token punctuation", children: "." }), n(a2.span, { className: "token method function property-access", children: "log" }), n(a2.span, { className: "token punctuation", children: "(" }), n(a2.span, { className: "token number", children: "1" }), n(a2.span, { className: "token punctuation", children: ")" }), n(a2.span, { className: "token punctuation", children: "}" })] }), n(a2.span, { className: "token punctuation", children: ">" })] }), n(a2.span, { className: "token plain-text", children: "\n        " }), s(a2.span, { className: "token tag", children: [s(a2.span, { className: "token tag", children: [n(a2.span, { className: "token punctuation", children: "<" }), n(a2.span, { className: "token class-name", children: "Icon" })] }), " ", n(a2.span, { className: "token attr-name", children: "path" }), s(a2.span, { className: "token script language-javascript", children: [n(a2.span, { className: "token script-punctuation punctuation", children: "=" }), n(a2.span, { className: "token punctuation", children: "{" }), "mdiSend", n(a2.span, { className: "token punctuation", children: "}" })] }), " ", n(a2.span, { className: "token punctuation", children: "/>" })] }), n(a2.span, { className: "token plain-text", children: "\n      " }), s(a2.span, { className: "token tag", children: [s(a2.span, { className: "token tag", children: [n(a2.span, { className: "token punctuation", children: "</" }), n(a2.span, { className: "token class-name", children: "IconButton" })] }), n(a2.span, { className: "token punctuation", children: ">" })] }), n(a2.span, { className: "token plain-text", children: "\n      " }), s(a2.span, { className: "token tag", children: [s(a2.span, { className: "token tag", children: [n(a2.span, { className: "token punctuation", children: "<" }), n(a2.span, { className: "token class-name", children: "FilledButton" })] }), " ", n(a2.span, { className: "token attr-name", children: "active" }), s(a2.span, { className: "token script language-javascript", children: [n(a2.span, { className: "token script-punctuation punctuation", children: "=" }), n(a2.span, { className: "token punctuation", children: "{" }), n(a2.span, { className: "token boolean", children: "false" }), n(a2.span, { className: "token punctuation", children: "}" })] }), n(a2.span, { className: "token punctuation", children: ">" })] }), n(a2.span, { className: "token plain-text", children: "\n        Send\n        " }), s(a2.span, { className: "token tag", children: [s(a2.span, { className: "token tag", children: [n(a2.span, { className: "token punctuation", children: "<" }), n(a2.span, { className: "token class-name", children: "Icon" })] }), " ", n(a2.span, { className: "token attr-name", children: "path" }), s(a2.span, { className: "token script language-javascript", children: [n(a2.span, { className: "token script-punctuation punctuation", children: "=" }), n(a2.span, { className: "token punctuation", children: "{" }), "mdiSend", n(a2.span, { className: "token punctuation", children: "}" })] }), " ", n(a2.span, { className: "token attr-name", children: "placement" }), s(a2.span, { className: "token attr-value", children: [n(a2.span, { className: "token punctuation attr-equals", children: "=" }), n(a2.span, { className: "token punctuation", children: '"' }), "end", n(a2.span, { className: "token punctuation", children: '"' })] }), " ", n(a2.span, { className: "token punctuation", children: "/>" })] }), n(a2.span, { className: "token plain-text", children: "\n      " }), s(a2.span, { className: "token tag", children: [s(a2.span, { className: "token tag", children: [n(a2.span, { className: "token punctuation", children: "</" }), n(a2.span, { className: "token class-name", children: "FilledButton" })] }), n(a2.span, { className: "token punctuation", children: ">" })] }), n(a2.span, { className: "token plain-text", children: "\n    " }), s(a2.span, { className: "token tag", children: [s(a2.span, { className: "token tag", children: [n(a2.span, { className: "token punctuation", children: "</" }), n(a2.span, { className: "token class-name", children: "Box" })] }), n(a2.span, { className: "token punctuation", children: ">" })] }), "\n  ", n(a2.span, { className: "token punctuation", children: ")" }), n(a2.span, { className: "token punctuation", children: ";" }), "\n", n(a2.span, { className: "token punctuation", children: "}" }), n(a2.span, { className: "token punctuation", children: ")" }), n(a2.span, { className: "token punctuation", children: ";" }), "\n"] }) })] })] });
}
function T() {
  let e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, { wrapper: a2 } = e2.components || {};
  return a2 ? n(a2, { ...e2, children: n(F, { ...e2 }) }) : F(e2);
}
let P = Object.freeze(Object.defineProperty({ __proto__: null, default: Object.assign(e(() => () => a(T, { components: { codeblockd4735e3a: $, codeblocke7f6c011: M } })), { displayName: "IconsDefault" }) }, Symbol.toStringTag, { value: "Module" })), z = Object.freeze(Object.defineProperty({ __proto__: null, default: Object.assign(l(() => {
  let e2 = { Enabled: {}, Disabled: { disabled: true }, Hovered: { hover: true }, Focused: { focus: true }, Pressed: { active: true } }, a2 = { ElevatedButton: m, FilledButton: d, TonalButton: u, OutlinedButton: h, TextButton: k };
  return () => n(_, { children: n(O, { sx: { display: "flex", flexDirection: "column", gap: 48 }, children: D(a2, (a3, t2) => n(O, { sx: { display: "flex", flexDirection: "column", gap: 16 }, children: [(n2) => n2, (e3) => s(c, { children: [n(p, { path: b, placement: "start" }), e3] }), (e3) => s(c, { children: [e3, n(p, { path: j, placement: "end" })] })].map((s2, c2) => n(i, { children: n(O, { sx: { display: "flex", gap: 16 }, children: D(e2, (e3, c3) => n(a3, { ...e3, children: s2(c3) })) }) }, `${c2}`)) }, t2)) }) });
}), { displayName: "ButtonsDefault" }) }, Symbol.toStringTag, { value: "Module" })), H = Object.freeze(Object.defineProperty({ __proto__: null, default: Object.assign(l(() => {
  let e2 = t(false), a2 = t(false), l2 = t(false);
  return () => n(_, { children: s(O, { sx: { display: "flex", flexDirection: "column", gap: 8 }, children: [n(k, { onClick: () => {
    a2.value = true;
  }, children: "Open Dialog" }), n(N, { isOpen: a2.value, onClose: () => {
    a2.value = false;
  }, children: s(g, { sx: { minH: "40vh" }, children: [s(O, { sx: { display: "flex", alignItems: "center", px: 16, textStyle: "sys.title-large" }, children: [n(O, { sx: { flex: 1 }, children: "我是对话框" }), n(r, { onClick: () => {
    a2.value = false;
  }, children: n(p, { path: w }) })] }), n(k, { onClick: () => {
    l2.value = true;
  }, children: "Open Dialog In Dialog" }), n(N, { isOpen: l2.value, onClose: () => {
    l2.value = false;
  }, children: n(g, { sx: { minH: "40vh" }, children: s(O, { sx: { display: "flex", alignItems: "center", px: 16, textStyle: "sys.title-large" }, children: [n(O, { sx: { flex: 1 }, children: "我是对话框 2" }), n(r, { onClick: () => {
    l2.value = false;
  }, children: n(p, { path: w }) })] }) }) })] }) }), n(f, { title: "Tooltip", children: n(k, { children: "Hover me" }) }), n(f, { title: "Menu", children: n(y, { $menu: s(c, { children: [n(x, { children: "选项一" }), n(x, { onClick: () => {
    e2.value = true;
  }, children: "选项二" }), n(N, { isOpen: e2.value, onClose: () => {
    e2.value = false;
  }, children: n(g, { sx: { minH: "40vh" }, children: "我是对话框" }) }), n(y, { placement: "right-start", $menu: s(c, { children: [n(x, { children: "选项三.1" }), n(x, { children: "选项三.2" })] }), children: n(x, { children: "选项三" }) })] }), children: n(k, { children: "Menu" }) }) })] }) });
}), { displayName: "OverlaysDefault" }) }, Symbol.toStringTag, { value: "Module" }));
export {
  P as a,
  z as b,
  C as i,
  H as o,
  S as t
};
