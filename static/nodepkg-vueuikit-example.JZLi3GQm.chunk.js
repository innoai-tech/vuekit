import { x as n, y as e, z as a, A as s, i as c, B as t, j as l, c as o, d as i, h as r, k as p } from "./index.-RbwNzz2.entry.js";
let d = n("button", { disabled: e.boolean().optional() })({ bg: "none", outline: "none", border: "none", px: 16, h: 40, rounded: "md", color: "sys.primary", bgColor: a("sys.primary", s(0.08)), _disabled: { color: a("sys.on-surface", s(0.12)), bgColor: a("sys.on-surface", s(0.08)) } }), m = () => c(t, { sx: { display: "flex", gap: 8 }, children: [l(h, { children: "按钮" }), l(h, { disabled: true, children: "按钮" })] }), h = Object.assign(d, { displayName: "Button" }), u = Object.assign(o(() => () => l(t, { sx: { display: "flex", padding: 10, containerStyle: "sys.primary" }, children: l(t, { sx: { containerStyle: "sys.surface-container" }, component: "button", children: "Hi 111" }) })), { displayName: "IndexMdCodeBlock785F3Ec7Default" });
function k(n2) {
  let e2 = { a: "a", code: "code", codeblock4a44dc15: "codeblock4a44dc15", codeblock785f3ec7: "codeblock785f3ec7", div: "div", em: "em", h2: "h2", h3: "h3", li: "li", p: "p", pre: "pre", span: "span", strong: "strong", ul: "ul", ...n2.components };
  return c(p, { children: [c(e2.p, { children: ["设计理念沿用 ", l(e2.a, { href: "https://m3.material.io/", children: "Material 3" })] }), "\n", l(e2.p, { children: "这里仅为适配该设计理念，抽象 Design System, 方便开发：" }), "\n", c(e2.p, { children: ["所有的 Design Token 将声明为 ", l(e2.code, { children: "css var" }), " (", l(e2.a, { href: "https://developer.mozilla.org/en-US/docs/Web/CSS/--*", children: "Custom properties" }), "),\n可同时支持在 ", l(e2.code, { children: "css-in-js" }), " 和 ", l(e2.code, { children: "raw css" }), " 中使用。"] }), "\n", l(e2.h2, { children: l(e2.code, { children: "css-in-js" }) }), "\n", l(e2.p, { children: "TypeScript 的帮助下，还会提供准确的 Design Token 值. 如：" }), "\n", c(e2.div, { "data-example": "", children: [l(e2.div, { "data-example-container": "", children: l(e2.codeblock4a44dc15, {}) }), l(e2.pre, { className: "language-tsx", children: c(e2.code, { className: "language-tsx", children: [l(e2.span, { className: "token keyword module", children: "import" }), " ", c(e2.span, { className: "token imports", children: [l(e2.span, { className: "token punctuation", children: "{" }), " ", l(e2.span, { className: "token maybe-class-name", children: "Box" }), l(e2.span, { className: "token punctuation", children: "," }), " alpha", l(e2.span, { className: "token punctuation", children: "," }), " styled", l(e2.span, { className: "token punctuation", children: "," }), " variant ", l(e2.span, { className: "token punctuation", children: "}" })] }), " ", l(e2.span, { className: "token keyword module", children: "from" }), " ", l(e2.span, { className: "token string", children: '"@innoai-tech/vueuikit"' }), l(e2.span, { className: "token punctuation", children: ";" }), "\n", l(e2.span, { className: "token keyword module", children: "import" }), " ", c(e2.span, { className: "token imports", children: [l(e2.span, { className: "token punctuation", children: "{" }), " t ", l(e2.span, { className: "token punctuation", children: "}" })] }), " ", l(e2.span, { className: "token keyword module", children: "from" }), " ", l(e2.span, { className: "token string", children: '"@innoai-tech/vuekit"' }), l(e2.span, { className: "token punctuation", children: ";" }), "\n\n", l(e2.span, { className: "token keyword module", children: "export" }), " ", l(e2.span, { className: "token keyword", children: "const" }), " ", l(e2.span, { className: "token maybe-class-name", children: "Button" }), " ", l(e2.span, { className: "token operator", children: "=" }), " ", l(e2.span, { className: "token function", children: "styled" }), l(e2.span, { className: "token punctuation", children: "(" }), l(e2.span, { className: "token string", children: '"button"' }), l(e2.span, { className: "token punctuation", children: "," }), " ", l(e2.span, { className: "token punctuation", children: "{" }), "\n  disabled", l(e2.span, { className: "token operator", children: ":" }), " t", l(e2.span, { className: "token punctuation", children: "." }), l(e2.span, { className: "token method function property-access", children: "boolean" }), l(e2.span, { className: "token punctuation", children: "(" }), l(e2.span, { className: "token punctuation", children: ")" }), l(e2.span, { className: "token punctuation", children: "." }), l(e2.span, { className: "token method function property-access", children: "optional" }), l(e2.span, { className: "token punctuation", children: "(" }), l(e2.span, { className: "token punctuation", children: ")" }), l(e2.span, { className: "token punctuation", children: "," }), "\n", l(e2.span, { className: "token punctuation", children: "}" }), l(e2.span, { className: "token punctuation", children: ")" }), l(e2.span, { className: "token punctuation", children: "(" }), l(e2.span, { className: "token punctuation", children: "{" }), "\n  bg", l(e2.span, { className: "token operator", children: ":" }), " ", l(e2.span, { className: "token string", children: '"none"' }), l(e2.span, { className: "token punctuation", children: "," }), "\n  outline", l(e2.span, { className: "token operator", children: ":" }), " ", l(e2.span, { className: "token string", children: '"none"' }), l(e2.span, { className: "token punctuation", children: "," }), "\n  border", l(e2.span, { className: "token operator", children: ":" }), " ", l(e2.span, { className: "token string", children: '"none"' }), l(e2.span, { className: "token punctuation", children: "," }), "\n  px", l(e2.span, { className: "token operator", children: ":" }), " ", l(e2.span, { className: "token number", children: "16" }), l(e2.span, { className: "token punctuation", children: "," }), "\n  h", l(e2.span, { className: "token operator", children: ":" }), " ", l(e2.span, { className: "token number", children: "40" }), l(e2.span, { className: "token punctuation", children: "," }), "\n  rounded", l(e2.span, { className: "token operator", children: ":" }), " ", l(e2.span, { className: "token string", children: '"md"' }), l(e2.span, { className: "token punctuation", children: "," }), "\n\n  ", l(e2.span, { className: "token comment", children: "// 利用 TypeScript 的推导而来，且非 color 属性无该值" }), "\n  ", l(e2.span, { className: "token comment", children: "// 实际将转换为 var(--vk-color-sys-primary)" }), "\n  ", l(e2.span, { className: "token comment", children: "// sys-* 的 color 还会随暗黑/普通主题进行切换" }), "\n  color", l(e2.span, { className: "token operator", children: ":" }), " ", l(e2.span, { className: "token string", children: '"sys.primary"' }), l(e2.span, { className: "token punctuation", children: "," }), "\n\n  ", l(e2.span, { className: "token comment", children: "// color 变种" }), "\n  ", l(e2.span, { className: "token comment", children: "// 实际将转换为 rbga(var(--vk-color-sys-primary-rgb) / 0.08)" }), "\n  bgColor", l(e2.span, { className: "token operator", children: ":" }), " ", l(e2.span, { className: "token function", children: "variant" }), l(e2.span, { className: "token punctuation", children: "(" }), l(e2.span, { className: "token string", children: '"sys.primary"' }), l(e2.span, { className: "token punctuation", children: "," }), " ", l(e2.span, { className: "token function", children: "alpha" }), l(e2.span, { className: "token punctuation", children: "(" }), l(e2.span, { className: "token number", children: "0.08" }), l(e2.span, { className: "token punctuation", children: ")" }), l(e2.span, { className: "token punctuation", children: ")" }), l(e2.span, { className: "token punctuation", children: "," }), "\n\n  ", l(e2.span, { className: "token comment", children: "// 通常情况下，组件 props 将转换成 data-<prop> 作为 attr" }), "\n  ", l(e2.span, { className: "token comment", children: "// 即： <Button disabled/>  =>  <button data-disabled=true />" }), "\n  ", l(e2.span, { className: "token comment", children: "// 同理，在自定义转换规则中，也建议如下做类似的转换，避免动态创建 CSSObject" }), "\n  _disabled", l(e2.span, { className: "token operator", children: ":" }), " ", l(e2.span, { className: "token punctuation", children: "{" }), "\n    color", l(e2.span, { className: "token operator", children: ":" }), " ", l(e2.span, { className: "token function", children: "variant" }), l(e2.span, { className: "token punctuation", children: "(" }), l(e2.span, { className: "token string", children: '"sys.on-surface"' }), l(e2.span, { className: "token punctuation", children: "," }), " ", l(e2.span, { className: "token function", children: "alpha" }), l(e2.span, { className: "token punctuation", children: "(" }), l(e2.span, { className: "token number", children: "0.12" }), l(e2.span, { className: "token punctuation", children: ")" }), l(e2.span, { className: "token punctuation", children: ")" }), l(e2.span, { className: "token punctuation", children: "," }), "\n    bgColor", l(e2.span, { className: "token operator", children: ":" }), " ", l(e2.span, { className: "token function", children: "variant" }), l(e2.span, { className: "token punctuation", children: "(" }), l(e2.span, { className: "token string", children: '"sys.on-surface"' }), l(e2.span, { className: "token punctuation", children: "," }), " ", l(e2.span, { className: "token function", children: "alpha" }), l(e2.span, { className: "token punctuation", children: "(" }), l(e2.span, { className: "token number", children: "0.08" }), l(e2.span, { className: "token punctuation", children: ")" }), l(e2.span, { className: "token punctuation", children: ")" }), l(e2.span, { className: "token punctuation", children: "," }), "\n  ", l(e2.span, { className: "token punctuation", children: "}" }), l(e2.span, { className: "token punctuation", children: "," }), "\n", l(e2.span, { className: "token punctuation", children: "}" }), l(e2.span, { className: "token punctuation", children: ")" }), l(e2.span, { className: "token punctuation", children: ";" }), "\n\n", l(e2.span, { className: "token keyword module", children: "export" }), " ", l(e2.span, { className: "token keyword module", children: "default" }), " ", l(e2.span, { className: "token punctuation", children: "(" }), l(e2.span, { className: "token punctuation", children: ")" }), " ", l(e2.span, { className: "token arrow operator", children: "=>" }), " ", l(e2.span, { className: "token punctuation", children: "{" }), "\n  ", l(e2.span, { className: "token keyword control-flow", children: "return" }), " ", l(e2.span, { className: "token punctuation", children: "(" }), "\n    ", c(e2.span, { className: "token tag", children: [c(e2.span, { className: "token tag", children: [l(e2.span, { className: "token punctuation", children: "<" }), l(e2.span, { className: "token class-name", children: "Box" })] }), " ", l(e2.span, { className: "token attr-name", children: "sx" }), c(e2.span, { className: "token script language-javascript", children: [l(e2.span, { className: "token script-punctuation punctuation", children: "=" }), l(e2.span, { className: "token punctuation", children: "{" }), l(e2.span, { className: "token punctuation", children: "{" }), " display", l(e2.span, { className: "token operator", children: ":" }), " ", l(e2.span, { className: "token string", children: '"flex"' }), l(e2.span, { className: "token punctuation", children: "," }), " gap", l(e2.span, { className: "token operator", children: ":" }), " ", l(e2.span, { className: "token number", children: "8" }), " ", l(e2.span, { className: "token punctuation", children: "}" }), l(e2.span, { className: "token punctuation", children: "}" })] }), l(e2.span, { className: "token punctuation", children: ">" })] }), l(e2.span, { className: "token plain-text", children: "\n      " }), c(e2.span, { className: "token tag", children: [c(e2.span, { className: "token tag", children: [l(e2.span, { className: "token punctuation", children: "<" }), l(e2.span, { className: "token class-name", children: "Button" })] }), l(e2.span, { className: "token punctuation", children: ">" })] }), l(e2.span, { className: "token plain-text", children: "按钮" }), c(e2.span, { className: "token tag", children: [c(e2.span, { className: "token tag", children: [l(e2.span, { className: "token punctuation", children: "</" }), l(e2.span, { className: "token class-name", children: "Button" })] }), l(e2.span, { className: "token punctuation", children: ">" })] }), l(e2.span, { className: "token plain-text", children: "\n      " }), c(e2.span, { className: "token tag", children: [c(e2.span, { className: "token tag", children: [l(e2.span, { className: "token punctuation", children: "<" }), l(e2.span, { className: "token class-name", children: "Button" })] }), " ", l(e2.span, { className: "token attr-name", children: "disabled" }), c(e2.span, { className: "token script language-javascript", children: [l(e2.span, { className: "token script-punctuation punctuation", children: "=" }), l(e2.span, { className: "token punctuation", children: "{" }), l(e2.span, { className: "token boolean", children: "true" }), l(e2.span, { className: "token punctuation", children: "}" })] }), l(e2.span, { className: "token punctuation", children: ">" })] }), l(e2.span, { className: "token plain-text", children: "按钮" }), c(e2.span, { className: "token tag", children: [c(e2.span, { className: "token tag", children: [l(e2.span, { className: "token punctuation", children: "</" }), l(e2.span, { className: "token class-name", children: "Button" })] }), l(e2.span, { className: "token punctuation", children: ">" })] }), l(e2.span, { className: "token plain-text", children: "\n    " }), c(e2.span, { className: "token tag", children: [c(e2.span, { className: "token tag", children: [l(e2.span, { className: "token punctuation", children: "</" }), l(e2.span, { className: "token class-name", children: "Box" })] }), l(e2.span, { className: "token punctuation", children: ">" })] }), "\n  ", l(e2.span, { className: "token punctuation", children: ")" }), l(e2.span, { className: "token punctuation", children: ";" }), "\n", l(e2.span, { className: "token punctuation", children: "}" }), l(e2.span, { className: "token punctuation", children: ";" }), "\n"] }) })] }), "\n", c(e2.p, { children: ["不同于其他框架中的 theme 定义，为了更准确的类型推导，需要由 DesignToken 进行创建\n详细请", l(e2.a, { href: "https://github.com/innoai-tech/vuekit/blob/main/nodepkg/vueuikit/src/theming/m3", children: "参考源码" })] }), "\n", c(e2.p, { children: ["虽然底层使用的是 ", l(e2.code, { children: "@emotion/*" }), "，但屏蔽掉了 ", l(e2.code, { children: "array" }), " 等非 CSSObject 值的使用, 初衷是为了更稳定的类型推导。\n另外样式扩展有两种方式"] }), "\n", l(e2.pre, { className: "language-tsx", children: c(e2.code, { className: "language-tsx", children: [l(e2.span, { className: "token keyword module", children: "import" }), " ", c(e2.span, { className: "token imports", children: [l(e2.span, { className: "token punctuation", children: "{" }), " t ", l(e2.span, { className: "token punctuation", children: "}" })] }), " ", l(e2.span, { className: "token keyword module", children: "from" }), " ", l(e2.span, { className: "token string", children: '"@innoai-tech/vuekit"' }), l(e2.span, { className: "token punctuation", children: ";" }), "\n", l(e2.span, { className: "token keyword module", children: "import" }), " ", c(e2.span, { className: "token imports", children: [l(e2.span, { className: "token punctuation", children: "{" }), " styled", l(e2.span, { className: "token punctuation", children: "," }), " ", l(e2.span, { className: "token maybe-class-name", children: "SystemStyleObject" }), " ", l(e2.span, { className: "token punctuation", children: "}" })] }), " ", l(e2.span, { className: "token keyword module", children: "from" }), " ", l(e2.span, { className: "token string", children: '"@innoai-tech/vueuikit"' }), l(e2.span, { className: "token punctuation", children: ";" }), "\n\n", l(e2.span, { className: "token keyword", children: "const" }), " shared", l(e2.span, { className: "token operator", children: ":" }), " ", l(e2.span, { className: "token maybe-class-name", children: "SystemStyleObject" }), " ", l(e2.span, { className: "token operator", children: "=" }), " ", l(e2.span, { className: "token punctuation", children: "{" }), "\n  color", l(e2.span, { className: "token operator", children: ":" }), " ", l(e2.span, { className: "token string", children: '"sys.primary"' }), l(e2.span, { className: "token punctuation", children: "," }), "\n  ", l(e2.span, { className: "token comment", children: "// ..." }), "\n", l(e2.span, { className: "token punctuation", children: "}" }), l(e2.span, { className: "token punctuation", children: ";" }), "\n\n", l(e2.span, { className: "token comment", children: "// 直接通过 extends 复用样式" }), "\n", l(e2.span, { className: "token comment", children: "//" }), "\n", l(e2.span, { className: "token comment", children: "// 组件 props 定义需要重新声明" }), "\n", l(e2.span, { className: "token keyword module", children: "export" }), " ", l(e2.span, { className: "token keyword", children: "const" }), " ", l(e2.span, { className: "token maybe-class-name", children: "ButtonBase" }), " ", l(e2.span, { className: "token operator", children: "=" }), " ", l(e2.span, { className: "token function", children: "styled" }), l(e2.span, { className: "token punctuation", children: "(" }), l(e2.span, { className: "token string", children: '"button"' }), l(e2.span, { className: "token punctuation", children: "," }), " ", l(e2.span, { className: "token punctuation", children: "{" }), "\n  disabled", l(e2.span, { className: "token operator", children: ":" }), " t", l(e2.span, { className: "token punctuation", children: "." }), l(e2.span, { className: "token method function property-access", children: "boolean" }), l(e2.span, { className: "token punctuation", children: "(" }), l(e2.span, { className: "token punctuation", children: ")" }), l(e2.span, { className: "token punctuation", children: "." }), l(e2.span, { className: "token method function property-access", children: "optional" }), l(e2.span, { className: "token punctuation", children: "(" }), l(e2.span, { className: "token punctuation", children: ")" }), l(e2.span, { className: "token punctuation", children: "," }), "\n", l(e2.span, { className: "token punctuation", children: "}" }), l(e2.span, { className: "token punctuation", children: ")" }), l(e2.span, { className: "token punctuation", children: "(" }), l(e2.span, { className: "token punctuation", children: "{" }), "\n  ", l(e2.span, { className: "token keyword", children: "extends" }), l(e2.span, { className: "token operator", children: ":" }), " ", l(e2.span, { className: "token punctuation", children: "[" }), "shared", l(e2.span, { className: "token punctuation", children: "]" }), l(e2.span, { className: "token punctuation", children: "," }), "\n  ", l(e2.span, { className: "token comment", children: "// ..." }), "\n", l(e2.span, { className: "token punctuation", children: "}" }), l(e2.span, { className: "token punctuation", children: ")" }), l(e2.span, { className: "token punctuation", children: ";" }), "\n\n", l(e2.span, { className: "token comment", children: "// 通过 styled 覆写样式" }), "\n", l(e2.span, { className: "token comment", children: "// 可以完全继承 BaseButton 的 props 定义" }), "\n", l(e2.span, { className: "token keyword module", children: "export" }), " ", l(e2.span, { className: "token keyword", children: "const" }), " ", l(e2.span, { className: "token maybe-class-name", children: "Button" }), " ", l(e2.span, { className: "token operator", children: "=" }), " ", l(e2.span, { className: "token function", children: "styled" }), l(e2.span, { className: "token punctuation", children: "(" }), l(e2.span, { className: "token maybe-class-name", children: "ButtonBase" }), l(e2.span, { className: "token punctuation", children: ")" }), l(e2.span, { className: "token punctuation", children: "(" }), l(e2.span, { className: "token punctuation", children: "{" }), "\n  ", l(e2.span, { className: "token comment", children: "// ..." }), "\n", l(e2.span, { className: "token punctuation", children: "}" }), l(e2.span, { className: "token punctuation", children: ")" }), l(e2.span, { className: "token punctuation", children: ";" }), "\n"] }) }), "\n", c(e2.p, { children: ["除 ", l(e2.code, { children: "styled" }), " 外，我们还可以使用 ", l(e2.code, { children: "Box" }), " 进行快速样式定义, 通过 ", l(e2.code, { children: "sx" }), " prop。 并且 ", l(e2.code, { children: "component" }), " prop 支持我们随时切换 tag 或者\n组件，并且其他 props 会随着不同的 component 切换对应 props 类型约束与提示。"] }), "\n", l(e2.p, { children: "同样的，通过 styled 创建的组件也有一样的特性。" }), "\n", c(e2.div, { "data-example": "", children: [l(e2.div, { "data-example-container": "", children: l(e2.codeblock785f3ec7, {}) }), l(e2.pre, { className: "language-tsx", children: c(e2.code, { className: "language-tsx", children: [l(e2.span, { className: "token keyword module", children: "import" }), " ", c(e2.span, { className: "token imports", children: [l(e2.span, { className: "token punctuation", children: "{" }), " component ", l(e2.span, { className: "token punctuation", children: "}" })] }), " ", l(e2.span, { className: "token keyword module", children: "from" }), " ", l(e2.span, { className: "token string", children: '"@innoai-tech/vuekit"' }), l(e2.span, { className: "token punctuation", children: ";" }), "\n", l(e2.span, { className: "token keyword module", children: "import" }), " ", c(e2.span, { className: "token imports", children: [l(e2.span, { className: "token punctuation", children: "{" }), " ", l(e2.span, { className: "token maybe-class-name", children: "Box" }), " ", l(e2.span, { className: "token punctuation", children: "}" })] }), " ", l(e2.span, { className: "token keyword module", children: "from" }), " ", l(e2.span, { className: "token string", children: '"@innoai-tech/vueuikit"' }), l(e2.span, { className: "token punctuation", children: ";" }), "\n\n", l(e2.span, { className: "token keyword module", children: "export" }), " ", l(e2.span, { className: "token keyword module", children: "default" }), " ", l(e2.span, { className: "token function", children: "component" }), l(e2.span, { className: "token punctuation", children: "(" }), l(e2.span, { className: "token punctuation", children: "(" }), l(e2.span, { className: "token punctuation", children: ")" }), " ", l(e2.span, { className: "token arrow operator", children: "=>" }), " ", l(e2.span, { className: "token punctuation", children: "(" }), l(e2.span, { className: "token punctuation", children: ")" }), " ", l(e2.span, { className: "token arrow operator", children: "=>" }), " ", l(e2.span, { className: "token punctuation", children: "(" }), "\n  ", c(e2.span, { className: "token tag", children: [c(e2.span, { className: "token tag", children: [l(e2.span, { className: "token punctuation", children: "<" }), l(e2.span, { className: "token class-name", children: "Box" })] }), " ", l(e2.span, { className: "token attr-name", children: "sx" }), c(e2.span, { className: "token script language-javascript", children: [l(e2.span, { className: "token script-punctuation punctuation", children: "=" }), l(e2.span, { className: "token punctuation", children: "{" }), l(e2.span, { className: "token punctuation", children: "{" }), " display", l(e2.span, { className: "token operator", children: ":" }), " ", l(e2.span, { className: "token string", children: '"flex"' }), l(e2.span, { className: "token punctuation", children: "," }), " padding", l(e2.span, { className: "token operator", children: ":" }), " ", l(e2.span, { className: "token number", children: "10" }), l(e2.span, { className: "token punctuation", children: "," }), " containerStyle", l(e2.span, { className: "token operator", children: ":" }), " ", l(e2.span, { className: "token string", children: '"sys.primary"' }), " ", l(e2.span, { className: "token punctuation", children: "}" }), l(e2.span, { className: "token punctuation", children: "}" })] }), l(e2.span, { className: "token punctuation", children: ">" })] }), l(e2.span, { className: "token plain-text", children: "\n    " }), c(e2.span, { className: "token tag", children: [c(e2.span, { className: "token tag", children: [l(e2.span, { className: "token punctuation", children: "<" }), l(e2.span, { className: "token class-name", children: "Box" })] }), " ", l(e2.span, { className: "token attr-name", children: "sx" }), c(e2.span, { className: "token script language-javascript", children: [l(e2.span, { className: "token script-punctuation punctuation", children: "=" }), l(e2.span, { className: "token punctuation", children: "{" }), l(e2.span, { className: "token punctuation", children: "{" }), " containerStyle", l(e2.span, { className: "token operator", children: ":" }), " ", l(e2.span, { className: "token string", children: '"sys.surface-container"' }), " ", l(e2.span, { className: "token punctuation", children: "}" }), l(e2.span, { className: "token punctuation", children: "}" })] }), " ", l(e2.span, { className: "token attr-name", children: "component" }), c(e2.span, { className: "token script language-javascript", children: [l(e2.span, { className: "token script-punctuation punctuation", children: "=" }), l(e2.span, { className: "token punctuation", children: "{" }), l(e2.span, { className: "token string", children: '"button"' }), l(e2.span, { className: "token punctuation", children: "}" })] }), l(e2.span, { className: "token punctuation", children: ">" })] }), l(e2.span, { className: "token plain-text", children: "\n      Hi 111\n    " }), c(e2.span, { className: "token tag", children: [c(e2.span, { className: "token tag", children: [l(e2.span, { className: "token punctuation", children: "</" }), l(e2.span, { className: "token class-name", children: "Box" })] }), l(e2.span, { className: "token punctuation", children: ">" })] }), l(e2.span, { className: "token plain-text", children: "\n  " }), c(e2.span, { className: "token tag", children: [c(e2.span, { className: "token tag", children: [l(e2.span, { className: "token punctuation", children: "</" }), l(e2.span, { className: "token class-name", children: "Box" })] }), l(e2.span, { className: "token punctuation", children: ">" })] }), "\n", l(e2.span, { className: "token punctuation", children: ")" }), l(e2.span, { className: "token punctuation", children: ")" }), l(e2.span, { className: "token punctuation", children: ";" }), "\n"] }) })] }), "\n", l(e2.h3, { children: "CSS Selector 简写规则" }), "\n", c(e2.p, { children: ["另外，为了简化 ", l(e2.code, { children: '"&:hover"' }), " ", l(e2.code, { children: "&[aria-current='page']" }), " 等选择器声明，\n提供的如下的简化规则："] }), "\n", c(e2.ul, { children: ["\n", c(e2.li, { children: ["所有名称支持 ", l(e2.em, { children: "下划线命名" }), " 或者 ", l(e2.em, { children: "驼峰命名" }), "，最终都将转换为 ", l(e2.em, { children: "短横小写命名" }), ", ", l(e2.code, { children: "=" }), " 用 ", l(e2.code, { children: "__" }), " 替代"] }), "\n", c(e2.li, { children: [l(e2.code, { children: "_*" }), " 一般表示", l(e2.strong, { children: "状态" }), "，可用值", "\n", c(e2.ul, { children: ["\n", c(e2.li, { children: [l(e2.code, { children: "data-*" }), " 和 ", l(e2.code, { children: "aria-*" }), ", `", "\n", c(e2.ul, { children: ["\n", c(e2.li, { children: ["如 ", l(e2.code, { children: "_aria_current__page" }), "： 等效为 ", l(e2.code, { children: "&[aria-current='page']" }), ","] }), "\n"] }), "\n"] }), "\n", c(e2.li, { children: [l(e2.code, { children: "before" }), "，", l(e2.code, { children: "after" }), " 等", l(e2.a, { href: "https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-elements", children: "伪元素" }), ', 需要声明 "$" 表示为元素', "\n", c(e2.ul, { children: ["\n", c(e2.li, { children: ["如 ", l(e2.code, { children: "_$before" }), "： 等效为 ", l(e2.code, { children: "&::before" })] }), "\n"] }), "\n"] }), "\n", c(e2.li, { children: [l(e2.code, { children: "hover" }), ", ", l(e2.code, { children: "focus" }), ", ", l(e2.code, { children: "active" }), ", ", l(e2.code, { children: "disabled" }), " 等", l(e2.a, { href: "https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-classes", children: "伪类" }), "\n", c(e2.ul, { children: ["\n", c(e2.li, { children: ["如 ", l(e2.code, { children: "_hover" }), "： 等效为 ", l(e2.code, { children: "&:hover, &.hover, &[data-hover]:not([data-hover='false'])" }), ","] }), "\n"] }), "\n"] }), "\n", c(e2.li, { children: ["以及其他自定义状态", "\n", c(e2.ul, { children: ["\n", c(e2.li, { children: ["如 ", l(e2.code, { children: "_has_icon" }), "： 等效为 ", l(e2.code, { children: "&[data-has-icon]:not([data-has-icon='false'])" })] }), "\n"] }), "\n"] }), "\n"] }), "\n"] }), "\n", c(e2.li, { children: [l(e2.code, { children: "$*" }), " 或 ", l(e2.code, { children: "*$" }), "，一般指代", l(e2.strong, { children: "元素节点" }), ", 可用值为", "\n", c(e2.ul, { children: ["\n", c(e2.li, { children: [l(e2.code, { children: "data-*" }), " 和 ", l(e2.code, { children: "aria-*" }), ", `", "\n", c(e2.ul, { children: ["\n", c(e2.li, { children: ["如 ", l(e2.code, { children: "$data_icon" }), "： 等效为 ", l(e2.code, { children: "&[data-icon]" })] }), "\n", c(e2.li, { children: ["如 ", l(e2.code, { children: "$data_popper_arrow" }), "： 等效为 ", l(e2.code, { children: "&[data-popper-arrow]" })] }), "\n", c(e2.li, { children: ["如 ", l(e2.code, { children: "data_popper_placement__right$" }), "： 等效为 ", l(e2.code, { children: "[data-popper-placement=right] &" })] }), "\n"] }), "\n"] }), "\n"] }), "\n"] }), "\n"] })] });
}
function N() {
  let n2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, { wrapper: e2 } = n2.components || {};
  return e2 ? l(e2, { ...n2, children: l(k, { ...n2 }) }) : k(n2);
}
let g = Object.assign(i(() => () => r(N, { components: { codeblock4a44dc15: m, codeblock785f3ec7: u } })), { displayName: "IndexDefault" });
export {
  g as default
};
