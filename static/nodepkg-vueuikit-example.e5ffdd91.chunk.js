import { b as n, j as e, c as a, v as s, x as c, F as t } from "./lib-nodepkg-vuekit.171adedb.chunk.js";
import { s as l, v as o, a as i, B as r } from "./lib-nodepkg-vueuikit.dfd5c493.chunk.js";
import { e as p } from "./lib-nodepkg-typedef.9aa925ea.chunk.js";
let d = l("button", { disabled: p().optional() })({ bg: "none", outline: "none", border: "none", px: 16, h: 40, rounded: "md", color: "sys.primary", bgColor: o("sys.primary", i(0.08)), _disabled: { color: o("sys.on-surface", i(0.12)), bgColor: o("sys.on-surface", i(0.08)) } }), m = () => n(r, { sx: { display: "flex", gap: 8 }, children: [e(h, { children: "按钮" }), e(h, { disabled: true, children: "按钮" })] }), h = Object.assign(d, { displayName: "Button" }), u = a(() => () => e(r, { sx: { display: "flex", padding: 10, containerStyle: "sys.primary" }, children: e(r, { sx: { containerStyle: "sys.surface-container" }, component: "button", children: "Hi 111" }) })), k = Object.assign(u, { displayName: "IndexMdCodeBlock785F3Ec7Default" });
function N(a2) {
  let s2 = Object.assign({ p: "p", a: "a", code: "code", h2: "h2", div: "div", codeblock4a44dc15: "codeblock4a44dc15", pre: "pre", span: "span", codeblock785f3ec7: "codeblock785f3ec7", h3: "h3", ul: "ul", li: "li", em: "em", strong: "strong" }, a2.components);
  return n(t, { children: [n(s2.p, { children: ["设计理念沿用 ", e(s2.a, { href: "https://m3.material.io/", children: "Material 3" })] }), "\n", e(s2.p, { children: "这里仅为适配该设计理念，抽象 Design System, 方便开发：" }), "\n", n(s2.p, { children: ["所有的 Design Token 将声明为 ", e(s2.code, { children: "css var" }), " (", e(s2.a, { href: "https://developer.mozilla.org/en-US/docs/Web/CSS/--*", children: "Custom properties" }), "),\n可同时支持在 ", e(s2.code, { children: "css-in-js" }), " 和 ", e(s2.code, { children: "raw css" }), " 中使用。"] }), "\n", e(s2.h2, { children: e(s2.code, { children: "css-in-js" }) }), "\n", e(s2.p, { children: "TypeScript 的帮助下，还会提供准确的 Design Token 值. 如：" }), "\n", n(s2.div, { "data-example": "", children: [e(s2.div, { "data-example-container": "", children: e(s2.codeblock4a44dc15, {}) }), e(s2.pre, { className: "language-tsx", children: n(s2.code, { className: "language-tsx", children: [e(s2.span, { className: "token keyword module", children: "import" }), " ", n(s2.span, { className: "token imports", children: [e(s2.span, { className: "token punctuation", children: "{" }), " ", e(s2.span, { className: "token maybe-class-name", children: "Box" }), e(s2.span, { className: "token punctuation", children: "," }), " alpha", e(s2.span, { className: "token punctuation", children: "," }), " styled", e(s2.span, { className: "token punctuation", children: "," }), " variant ", e(s2.span, { className: "token punctuation", children: "}" })] }), " ", e(s2.span, { className: "token keyword module", children: "from" }), " ", e(s2.span, { className: "token string", children: '"@innoai-tech/vueuikit"' }), e(s2.span, { className: "token punctuation", children: ";" }), "\n", e(s2.span, { className: "token keyword module", children: "import" }), " ", n(s2.span, { className: "token imports", children: [e(s2.span, { className: "token punctuation", children: "{" }), " t ", e(s2.span, { className: "token punctuation", children: "}" })] }), " ", e(s2.span, { className: "token keyword module", children: "from" }), " ", e(s2.span, { className: "token string", children: '"@innoai-tech/vuekit"' }), e(s2.span, { className: "token punctuation", children: ";" }), "\n\n", e(s2.span, { className: "token keyword module", children: "export" }), " ", e(s2.span, { className: "token keyword", children: "const" }), " ", e(s2.span, { className: "token maybe-class-name", children: "Button" }), " ", e(s2.span, { className: "token operator", children: "=" }), " ", e(s2.span, { className: "token function", children: "styled" }), e(s2.span, { className: "token punctuation", children: "(" }), e(s2.span, { className: "token string", children: '"button"' }), e(s2.span, { className: "token punctuation", children: "," }), " ", e(s2.span, { className: "token punctuation", children: "{" }), "\n  disabled", e(s2.span, { className: "token operator", children: ":" }), " t", e(s2.span, { className: "token punctuation", children: "." }), e(s2.span, { className: "token method function property-access", children: "boolean" }), e(s2.span, { className: "token punctuation", children: "(" }), e(s2.span, { className: "token punctuation", children: ")" }), e(s2.span, { className: "token punctuation", children: "." }), e(s2.span, { className: "token method function property-access", children: "optional" }), e(s2.span, { className: "token punctuation", children: "(" }), e(s2.span, { className: "token punctuation", children: ")" }), e(s2.span, { className: "token punctuation", children: "," }), "\n", e(s2.span, { className: "token punctuation", children: "}" }), e(s2.span, { className: "token punctuation", children: ")" }), e(s2.span, { className: "token punctuation", children: "(" }), e(s2.span, { className: "token punctuation", children: "{" }), "\n  bg", e(s2.span, { className: "token operator", children: ":" }), " ", e(s2.span, { className: "token string", children: '"none"' }), e(s2.span, { className: "token punctuation", children: "," }), "\n  outline", e(s2.span, { className: "token operator", children: ":" }), " ", e(s2.span, { className: "token string", children: '"none"' }), e(s2.span, { className: "token punctuation", children: "," }), "\n  border", e(s2.span, { className: "token operator", children: ":" }), " ", e(s2.span, { className: "token string", children: '"none"' }), e(s2.span, { className: "token punctuation", children: "," }), "\n  px", e(s2.span, { className: "token operator", children: ":" }), " ", e(s2.span, { className: "token number", children: "16" }), e(s2.span, { className: "token punctuation", children: "," }), "\n  h", e(s2.span, { className: "token operator", children: ":" }), " ", e(s2.span, { className: "token number", children: "40" }), e(s2.span, { className: "token punctuation", children: "," }), "\n  rounded", e(s2.span, { className: "token operator", children: ":" }), " ", e(s2.span, { className: "token string", children: '"md"' }), e(s2.span, { className: "token punctuation", children: "," }), "\n\n  ", e(s2.span, { className: "token comment", children: "// 利用 TypeScript 的推导而来，且非 color 属性无该值" }), "\n  ", e(s2.span, { className: "token comment", children: "// 实际将转换为 var(--vk-color-sys-primary)" }), "\n  ", e(s2.span, { className: "token comment", children: "// sys-* 的 color 还会随暗黑/普通主题进行切换" }), "\n  color", e(s2.span, { className: "token operator", children: ":" }), " ", e(s2.span, { className: "token string", children: '"sys.primary"' }), e(s2.span, { className: "token punctuation", children: "," }), "\n\n  ", e(s2.span, { className: "token comment", children: "// color 变种" }), "\n  ", e(s2.span, { className: "token comment", children: "// 实际将转换为 rbga(var(--vk-color-sys-primary-rgb) / 0.08)" }), "\n  bgColor", e(s2.span, { className: "token operator", children: ":" }), " ", e(s2.span, { className: "token function", children: "variant" }), e(s2.span, { className: "token punctuation", children: "(" }), e(s2.span, { className: "token string", children: '"sys.primary"' }), e(s2.span, { className: "token punctuation", children: "," }), " ", e(s2.span, { className: "token function", children: "alpha" }), e(s2.span, { className: "token punctuation", children: "(" }), e(s2.span, { className: "token number", children: "0.08" }), e(s2.span, { className: "token punctuation", children: ")" }), e(s2.span, { className: "token punctuation", children: ")" }), e(s2.span, { className: "token punctuation", children: "," }), "\n\n  ", e(s2.span, { className: "token comment", children: "// 通常情况下，组件 props 将转换成 data-<prop> 作为 attr" }), "\n  ", e(s2.span, { className: "token comment", children: "// 即： <Button disabled/>  =>  <button data-disabled=true />" }), "\n  ", e(s2.span, { className: "token comment", children: "// 同理，在自定义转换规则中，也建议如下做类似的转换，避免动态创建 CSSObject" }), "\n  _disabled", e(s2.span, { className: "token operator", children: ":" }), " ", e(s2.span, { className: "token punctuation", children: "{" }), "\n    color", e(s2.span, { className: "token operator", children: ":" }), " ", e(s2.span, { className: "token function", children: "variant" }), e(s2.span, { className: "token punctuation", children: "(" }), e(s2.span, { className: "token string", children: '"sys.on-surface"' }), e(s2.span, { className: "token punctuation", children: "," }), " ", e(s2.span, { className: "token function", children: "alpha" }), e(s2.span, { className: "token punctuation", children: "(" }), e(s2.span, { className: "token number", children: "0.12" }), e(s2.span, { className: "token punctuation", children: ")" }), e(s2.span, { className: "token punctuation", children: ")" }), e(s2.span, { className: "token punctuation", children: "," }), "\n    bgColor", e(s2.span, { className: "token operator", children: ":" }), " ", e(s2.span, { className: "token function", children: "variant" }), e(s2.span, { className: "token punctuation", children: "(" }), e(s2.span, { className: "token string", children: '"sys.on-surface"' }), e(s2.span, { className: "token punctuation", children: "," }), " ", e(s2.span, { className: "token function", children: "alpha" }), e(s2.span, { className: "token punctuation", children: "(" }), e(s2.span, { className: "token number", children: "0.08" }), e(s2.span, { className: "token punctuation", children: ")" }), e(s2.span, { className: "token punctuation", children: ")" }), e(s2.span, { className: "token punctuation", children: "," }), "\n  ", e(s2.span, { className: "token punctuation", children: "}" }), e(s2.span, { className: "token punctuation", children: "," }), "\n", e(s2.span, { className: "token punctuation", children: "}" }), e(s2.span, { className: "token punctuation", children: ")" }), e(s2.span, { className: "token punctuation", children: ";" }), "\n\n", e(s2.span, { className: "token keyword module", children: "export" }), " ", e(s2.span, { className: "token keyword module", children: "default" }), " ", e(s2.span, { className: "token punctuation", children: "(" }), e(s2.span, { className: "token punctuation", children: ")" }), " ", e(s2.span, { className: "token arrow operator", children: "=>" }), " ", e(s2.span, { className: "token punctuation", children: "{" }), "\n  ", e(s2.span, { className: "token keyword control-flow", children: "return" }), " ", e(s2.span, { className: "token punctuation", children: "(" }), "\n    ", n(s2.span, { className: "token tag", children: [n(s2.span, { className: "token tag", children: [e(s2.span, { className: "token punctuation", children: "<" }), e(s2.span, { className: "token class-name", children: "Box" })] }), " ", e(s2.span, { className: "token attr-name", children: "sx" }), n(s2.span, { className: "token script language-javascript", children: [e(s2.span, { className: "token script-punctuation punctuation", children: "=" }), e(s2.span, { className: "token punctuation", children: "{" }), e(s2.span, { className: "token punctuation", children: "{" }), " display", e(s2.span, { className: "token operator", children: ":" }), " ", e(s2.span, { className: "token string", children: '"flex"' }), e(s2.span, { className: "token punctuation", children: "," }), " gap", e(s2.span, { className: "token operator", children: ":" }), " ", e(s2.span, { className: "token number", children: "8" }), " ", e(s2.span, { className: "token punctuation", children: "}" }), e(s2.span, { className: "token punctuation", children: "}" })] }), e(s2.span, { className: "token punctuation", children: ">" })] }), e(s2.span, { className: "token plain-text", children: "\n      " }), n(s2.span, { className: "token tag", children: [n(s2.span, { className: "token tag", children: [e(s2.span, { className: "token punctuation", children: "<" }), e(s2.span, { className: "token class-name", children: "Button" })] }), e(s2.span, { className: "token punctuation", children: ">" })] }), e(s2.span, { className: "token plain-text", children: "按钮" }), n(s2.span, { className: "token tag", children: [n(s2.span, { className: "token tag", children: [e(s2.span, { className: "token punctuation", children: "</" }), e(s2.span, { className: "token class-name", children: "Button" })] }), e(s2.span, { className: "token punctuation", children: ">" })] }), e(s2.span, { className: "token plain-text", children: "\n      " }), n(s2.span, { className: "token tag", children: [n(s2.span, { className: "token tag", children: [e(s2.span, { className: "token punctuation", children: "<" }), e(s2.span, { className: "token class-name", children: "Button" })] }), " ", e(s2.span, { className: "token attr-name", children: "disabled" }), n(s2.span, { className: "token script language-javascript", children: [e(s2.span, { className: "token script-punctuation punctuation", children: "=" }), e(s2.span, { className: "token punctuation", children: "{" }), e(s2.span, { className: "token boolean", children: "true" }), e(s2.span, { className: "token punctuation", children: "}" })] }), e(s2.span, { className: "token punctuation", children: ">" })] }), e(s2.span, { className: "token plain-text", children: "按钮" }), n(s2.span, { className: "token tag", children: [n(s2.span, { className: "token tag", children: [e(s2.span, { className: "token punctuation", children: "</" }), e(s2.span, { className: "token class-name", children: "Button" })] }), e(s2.span, { className: "token punctuation", children: ">" })] }), e(s2.span, { className: "token plain-text", children: "\n    " }), n(s2.span, { className: "token tag", children: [n(s2.span, { className: "token tag", children: [e(s2.span, { className: "token punctuation", children: "</" }), e(s2.span, { className: "token class-name", children: "Box" })] }), e(s2.span, { className: "token punctuation", children: ">" })] }), "\n  ", e(s2.span, { className: "token punctuation", children: ")" }), e(s2.span, { className: "token punctuation", children: ";" }), "\n", e(s2.span, { className: "token punctuation", children: "}" }), e(s2.span, { className: "token punctuation", children: ";" }), "\n"] }) })] }), "\n", n(s2.p, { children: ["不同于其他框架中的 theme 定义，为了更准确的类型推导，需要由 DesignToken 进行创建\n详细请", e(s2.a, { href: "https://github.com/innoai-tech/vuekit/blob/main/nodepkg/vueuikit/src/theming/m3", children: "参考源码" })] }), "\n", n(s2.p, { children: ["虽然底层使用的是 ", e(s2.code, { children: "@emotion/*" }), "，但屏蔽掉了 ", e(s2.code, { children: "array" }), " 等非 CSSObject 值的使用, 初衷是为了更稳定的类型推导。\n另外样式扩展有两种方式"] }), "\n", e(s2.pre, { className: "language-tsx", children: n(s2.code, { className: "language-tsx", children: [e(s2.span, { className: "token keyword module", children: "import" }), " ", n(s2.span, { className: "token imports", children: [e(s2.span, { className: "token punctuation", children: "{" }), " t ", e(s2.span, { className: "token punctuation", children: "}" })] }), " ", e(s2.span, { className: "token keyword module", children: "from" }), " ", e(s2.span, { className: "token string", children: '"@innoai-tech/vuekit"' }), e(s2.span, { className: "token punctuation", children: ";" }), "\n", e(s2.span, { className: "token keyword module", children: "import" }), " ", n(s2.span, { className: "token imports", children: [e(s2.span, { className: "token punctuation", children: "{" }), " styled", e(s2.span, { className: "token punctuation", children: "," }), " ", e(s2.span, { className: "token maybe-class-name", children: "SystemStyleObject" }), " ", e(s2.span, { className: "token punctuation", children: "}" })] }), " ", e(s2.span, { className: "token keyword module", children: "from" }), " ", e(s2.span, { className: "token string", children: '"@innoai-tech/vueuikit"' }), e(s2.span, { className: "token punctuation", children: ";" }), "\n\n", e(s2.span, { className: "token keyword", children: "const" }), " shared", e(s2.span, { className: "token operator", children: ":" }), " ", e(s2.span, { className: "token maybe-class-name", children: "SystemStyleObject" }), " ", e(s2.span, { className: "token operator", children: "=" }), " ", e(s2.span, { className: "token punctuation", children: "{" }), "\n  color", e(s2.span, { className: "token operator", children: ":" }), " ", e(s2.span, { className: "token string", children: '"sys.primary"' }), e(s2.span, { className: "token punctuation", children: "," }), "\n  ", e(s2.span, { className: "token comment", children: "// ..." }), "\n", e(s2.span, { className: "token punctuation", children: "}" }), e(s2.span, { className: "token punctuation", children: ";" }), "\n\n", e(s2.span, { className: "token comment", children: "// 直接通过 extends 复用样式" }), "\n", e(s2.span, { className: "token comment", children: "//" }), "\n", e(s2.span, { className: "token comment", children: "// 组件 props 定义需要重新声明" }), "\n", e(s2.span, { className: "token keyword module", children: "export" }), " ", e(s2.span, { className: "token keyword", children: "const" }), " ", e(s2.span, { className: "token maybe-class-name", children: "ButtonBase" }), " ", e(s2.span, { className: "token operator", children: "=" }), " ", e(s2.span, { className: "token function", children: "styled" }), e(s2.span, { className: "token punctuation", children: "(" }), e(s2.span, { className: "token string", children: '"button"' }), e(s2.span, { className: "token punctuation", children: "," }), " ", e(s2.span, { className: "token punctuation", children: "{" }), "\n  disabled", e(s2.span, { className: "token operator", children: ":" }), " t", e(s2.span, { className: "token punctuation", children: "." }), e(s2.span, { className: "token method function property-access", children: "boolean" }), e(s2.span, { className: "token punctuation", children: "(" }), e(s2.span, { className: "token punctuation", children: ")" }), e(s2.span, { className: "token punctuation", children: "." }), e(s2.span, { className: "token method function property-access", children: "optional" }), e(s2.span, { className: "token punctuation", children: "(" }), e(s2.span, { className: "token punctuation", children: ")" }), e(s2.span, { className: "token punctuation", children: "," }), "\n", e(s2.span, { className: "token punctuation", children: "}" }), e(s2.span, { className: "token punctuation", children: ")" }), e(s2.span, { className: "token punctuation", children: "(" }), e(s2.span, { className: "token punctuation", children: "{" }), "\n  ", e(s2.span, { className: "token keyword", children: "extends" }), e(s2.span, { className: "token operator", children: ":" }), " ", e(s2.span, { className: "token punctuation", children: "[" }), "shared", e(s2.span, { className: "token punctuation", children: "]" }), e(s2.span, { className: "token punctuation", children: "," }), "\n  ", e(s2.span, { className: "token comment", children: "// ..." }), "\n", e(s2.span, { className: "token punctuation", children: "}" }), e(s2.span, { className: "token punctuation", children: ")" }), e(s2.span, { className: "token punctuation", children: ";" }), "\n\n", e(s2.span, { className: "token comment", children: "// 通过 styled 覆写样式" }), "\n", e(s2.span, { className: "token comment", children: "// 可以完全继承 BaseButton 的 props 定义" }), "\n", e(s2.span, { className: "token keyword module", children: "export" }), " ", e(s2.span, { className: "token keyword", children: "const" }), " ", e(s2.span, { className: "token maybe-class-name", children: "Button" }), " ", e(s2.span, { className: "token operator", children: "=" }), " ", e(s2.span, { className: "token function", children: "styled" }), e(s2.span, { className: "token punctuation", children: "(" }), e(s2.span, { className: "token maybe-class-name", children: "ButtonBase" }), e(s2.span, { className: "token punctuation", children: ")" }), e(s2.span, { className: "token punctuation", children: "(" }), e(s2.span, { className: "token punctuation", children: "{" }), "\n  ", e(s2.span, { className: "token comment", children: "// ..." }), "\n", e(s2.span, { className: "token punctuation", children: "}" }), e(s2.span, { className: "token punctuation", children: ")" }), e(s2.span, { className: "token punctuation", children: ";" }), "\n"] }) }), "\n", n(s2.p, { children: ["除 ", e(s2.code, { children: "styled" }), " 外，我们还可以使用 ", e(s2.code, { children: "Box" }), " 进行快速样式定义, 通过 ", e(s2.code, { children: "sx" }), " prop。 并且 ", e(s2.code, { children: "component" }), " prop 支持我们随时切换 tag 或者\n组件，并且其他 props 会随着不同的 component 切换对应 props 类型约束与提示。"] }), "\n", e(s2.p, { children: "同样的，通过 styled 创建的组件也有一样的特性。" }), "\n", n(s2.div, { "data-example": "", children: [e(s2.div, { "data-example-container": "", children: e(s2.codeblock785f3ec7, {}) }), e(s2.pre, { className: "language-tsx", children: n(s2.code, { className: "language-tsx", children: [e(s2.span, { className: "token keyword module", children: "import" }), " ", n(s2.span, { className: "token imports", children: [e(s2.span, { className: "token punctuation", children: "{" }), " component ", e(s2.span, { className: "token punctuation", children: "}" })] }), " ", e(s2.span, { className: "token keyword module", children: "from" }), " ", e(s2.span, { className: "token string", children: '"@innoai-tech/vuekit"' }), e(s2.span, { className: "token punctuation", children: ";" }), "\n", e(s2.span, { className: "token keyword module", children: "import" }), " ", n(s2.span, { className: "token imports", children: [e(s2.span, { className: "token punctuation", children: "{" }), " ", e(s2.span, { className: "token maybe-class-name", children: "Box" }), " ", e(s2.span, { className: "token punctuation", children: "}" })] }), " ", e(s2.span, { className: "token keyword module", children: "from" }), " ", e(s2.span, { className: "token string", children: '"@innoai-tech/vueuikit"' }), e(s2.span, { className: "token punctuation", children: ";" }), "\n\n", e(s2.span, { className: "token keyword module", children: "export" }), " ", e(s2.span, { className: "token keyword module", children: "default" }), " ", e(s2.span, { className: "token function", children: "component" }), e(s2.span, { className: "token punctuation", children: "(" }), e(s2.span, { className: "token punctuation", children: "(" }), e(s2.span, { className: "token punctuation", children: ")" }), " ", e(s2.span, { className: "token arrow operator", children: "=>" }), " ", e(s2.span, { className: "token punctuation", children: "(" }), e(s2.span, { className: "token punctuation", children: ")" }), " ", e(s2.span, { className: "token arrow operator", children: "=>" }), " ", e(s2.span, { className: "token punctuation", children: "(" }), "\n  ", n(s2.span, { className: "token tag", children: [n(s2.span, { className: "token tag", children: [e(s2.span, { className: "token punctuation", children: "<" }), e(s2.span, { className: "token class-name", children: "Box" })] }), " ", e(s2.span, { className: "token attr-name", children: "sx" }), n(s2.span, { className: "token script language-javascript", children: [e(s2.span, { className: "token script-punctuation punctuation", children: "=" }), e(s2.span, { className: "token punctuation", children: "{" }), e(s2.span, { className: "token punctuation", children: "{" }), " display", e(s2.span, { className: "token operator", children: ":" }), " ", e(s2.span, { className: "token string", children: '"flex"' }), e(s2.span, { className: "token punctuation", children: "," }), " padding", e(s2.span, { className: "token operator", children: ":" }), " ", e(s2.span, { className: "token number", children: "10" }), e(s2.span, { className: "token punctuation", children: "," }), " containerStyle", e(s2.span, { className: "token operator", children: ":" }), " ", e(s2.span, { className: "token string", children: '"sys.primary"' }), " ", e(s2.span, { className: "token punctuation", children: "}" }), e(s2.span, { className: "token punctuation", children: "}" })] }), e(s2.span, { className: "token punctuation", children: ">" })] }), e(s2.span, { className: "token plain-text", children: "\n    " }), n(s2.span, { className: "token tag", children: [n(s2.span, { className: "token tag", children: [e(s2.span, { className: "token punctuation", children: "<" }), e(s2.span, { className: "token class-name", children: "Box" })] }), " ", e(s2.span, { className: "token attr-name", children: "sx" }), n(s2.span, { className: "token script language-javascript", children: [e(s2.span, { className: "token script-punctuation punctuation", children: "=" }), e(s2.span, { className: "token punctuation", children: "{" }), e(s2.span, { className: "token punctuation", children: "{" }), " containerStyle", e(s2.span, { className: "token operator", children: ":" }), " ", e(s2.span, { className: "token string", children: '"sys.surface-container"' }), " ", e(s2.span, { className: "token punctuation", children: "}" }), e(s2.span, { className: "token punctuation", children: "}" })] }), " ", e(s2.span, { className: "token attr-name", children: "component" }), n(s2.span, { className: "token script language-javascript", children: [e(s2.span, { className: "token script-punctuation punctuation", children: "=" }), e(s2.span, { className: "token punctuation", children: "{" }), e(s2.span, { className: "token string", children: '"button"' }), e(s2.span, { className: "token punctuation", children: "}" })] }), e(s2.span, { className: "token punctuation", children: ">" })] }), e(s2.span, { className: "token plain-text", children: "\n      Hi 111\n    " }), n(s2.span, { className: "token tag", children: [n(s2.span, { className: "token tag", children: [e(s2.span, { className: "token punctuation", children: "</" }), e(s2.span, { className: "token class-name", children: "Box" })] }), e(s2.span, { className: "token punctuation", children: ">" })] }), e(s2.span, { className: "token plain-text", children: "\n  " }), n(s2.span, { className: "token tag", children: [n(s2.span, { className: "token tag", children: [e(s2.span, { className: "token punctuation", children: "</" }), e(s2.span, { className: "token class-name", children: "Box" })] }), e(s2.span, { className: "token punctuation", children: ">" })] }), "\n", e(s2.span, { className: "token punctuation", children: ")" }), e(s2.span, { className: "token punctuation", children: ")" }), e(s2.span, { className: "token punctuation", children: ";" }), "\n"] }) })] }), "\n", e(s2.h3, { children: "CSS Selector 简写规则" }), "\n", n(s2.p, { children: ["另外，为了简化 ", e(s2.code, { children: '"&:hover"' }), " ", e(s2.code, { children: "&[aria-current='page']" }), " 等选择器声明，\n提供的如下的简化规则："] }), "\n", n(s2.ul, { children: ["\n", n(s2.li, { children: ["所有名称支持 ", e(s2.em, { children: "下划线命名" }), " 或者 ", e(s2.em, { children: "驼峰命名" }), "，最终都将转换为 ", e(s2.em, { children: "短横小写命名" }), ", ", e(s2.code, { children: "=" }), " 用 ", e(s2.code, { children: "__" }), " 替代"] }), "\n", n(s2.li, { children: [e(s2.code, { children: "_*" }), " 一般表示", e(s2.strong, { children: "状态" }), "，可用值", "\n", n(s2.ul, { children: ["\n", n(s2.li, { children: [e(s2.code, { children: "data-*" }), " 和 ", e(s2.code, { children: "aria-*" }), ", `", "\n", n(s2.ul, { children: ["\n", n(s2.li, { children: ["如 ", e(s2.code, { children: "_aria_current__page" }), "： 等效为 ", e(s2.code, { children: "&[aria-current='page']" }), ","] }), "\n"] }), "\n"] }), "\n", n(s2.li, { children: [e(s2.code, { children: "before" }), "，", e(s2.code, { children: "after" }), " 等", e(s2.a, { href: "https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-elements", children: "伪元素" }), ', 需要声明 "$" 表示为元素', "\n", n(s2.ul, { children: ["\n", n(s2.li, { children: ["如 ", e(s2.code, { children: "_$before" }), "： 等效为 ", e(s2.code, { children: "&::before" })] }), "\n"] }), "\n"] }), "\n", n(s2.li, { children: [e(s2.code, { children: "hover" }), ", ", e(s2.code, { children: "focus" }), ", ", e(s2.code, { children: "active" }), ", ", e(s2.code, { children: "disabled" }), " 等", e(s2.a, { href: "https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-classes", children: "伪类" }), "\n", n(s2.ul, { children: ["\n", n(s2.li, { children: ["如 ", e(s2.code, { children: "_hover" }), "： 等效为 ", e(s2.code, { children: "&:hover, &.hover, &[data-hover]:not([data-hover='false'])" }), ","] }), "\n"] }), "\n"] }), "\n", n(s2.li, { children: ["以及其他自定义状态", "\n", n(s2.ul, { children: ["\n", n(s2.li, { children: ["如 ", e(s2.code, { children: "_has_icon" }), "： 等效为 ", e(s2.code, { children: "&[data-has-icon]:not([data-has-icon='false'])" })] }), "\n"] }), "\n"] }), "\n"] }), "\n"] }), "\n", n(s2.li, { children: [e(s2.code, { children: "$*" }), " 或 ", e(s2.code, { children: "*$" }), "，一般指代", e(s2.strong, { children: "元素节点" }), ", 可用值为", "\n", n(s2.ul, { children: ["\n", n(s2.li, { children: [e(s2.code, { children: "data-*" }), " 和 ", e(s2.code, { children: "aria-*" }), ", `", "\n", n(s2.ul, { children: ["\n", n(s2.li, { children: ["如 ", e(s2.code, { children: "$data_icon" }), "： 等效为 ", e(s2.code, { children: "&[data-icon]" })] }), "\n", n(s2.li, { children: ["如 ", e(s2.code, { children: "$data_popper_arrow" }), "： 等效为 ", e(s2.code, { children: "&[data-popper-arrow]" })] }), "\n", n(s2.li, { children: ["如 ", e(s2.code, { children: "data_popper_placement__right$" }), "： 等效为 ", e(s2.code, { children: "[data-popper-placement=right] &" })] }), "\n"] }), "\n"] }), "\n"] }), "\n"] }), "\n"] })] });
}
function g() {
  let n2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, { wrapper: a2 } = n2.components || {};
  return a2 ? e(a2, Object.assign({}, n2, { children: e(N, n2) })) : N(n2);
}
let y = s(() => () => c(g, { components: { codeblock4a44dc15: m, codeblock785f3ec7: k } })), b = Object.assign(y, { displayName: "IndexDefault" });
export {
  b as default
};
