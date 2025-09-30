import { K as n, Q as e, V as a, Z as s, o as c, s as t } from "./lib-nodepkg-vuekit.Dng4O0gc.chunk.js";
import { g as l, h as o, o as i, s as r } from "./lib-nodepkg-vueuikit.BAbl8dOa.chunk.js";
import { i as p } from "./lib-nodepkg-typedef.WoOPnAhr.chunk.js";
var d = i("button", { disabled: p().optional() }, { displayName: "Button" })({
	bg: "none",
	outline: "none",
	border: "none",
	px: 16,
	h: 40,
	rounded: "md",
	color: "sys.primary",
	bgColor: l("sys.primary", o(.08)),
	_disabled: {
		color: l("sys.on-surface", o(.12)),
		bgColor: l("sys.on-surface", o(.08))
	}
}), m = () => t(r, {
	sx: {
		display: "flex",
		gap: 8
	},
	children: [c(d, { children: "按钮" }), c(d, {
		disabled: !0,
		children: "按钮"
	})]
}), h = a(() => () => c(r, {
	sx: {
		display: "flex",
		padding: 10,
		containerStyle: "sys.primary"
	},
	children: c(r, {
		sx: { containerStyle: "sys.surface-container" },
		component: "button",
		children: "Hi 111"
	})
}));
function u(e) {
	let a = {
		a: "a",
		code: "code",
		codeblock4a44dc15: "codeblock4a44dc15",
		codeblock785f3ec7: "codeblock785f3ec7",
		div: "div",
		em: "em",
		h2: "h2",
		h3: "h3",
		li: "li",
		p: "p",
		pre: "pre",
		span: "span",
		strong: "strong",
		ul: "ul",
		...e.components
	};
	return t(n, { children: [
		t(a.p, { children: ["设计理念沿用 ", c(a.a, {
			href: "https://m3.material.io/",
			children: "Material 3"
		})] }),
		"\n",
		c(a.p, { children: "这里仅为适配该设计理念，抽象 Design System, 方便开发：" }),
		"\n",
		t(a.p, { children: [
			"所有的 Design Token 将声明为 ",
			c(a.code, { children: "css var" }),
			" (",
			c(a.a, {
				href: "https://developer.mozilla.org/en-US/docs/Web/CSS/--*",
				children: "Custom properties"
			}),
			"),\n可同时支持在 ",
			c(a.code, { children: "css-in-js" }),
			" 和 ",
			c(a.code, { children: "raw css" }),
			" 中使用。"
		] }),
		"\n",
		c(a.h2, { children: c(a.code, { children: "css-in-js" }) }),
		"\n",
		c(a.p, { children: "TypeScript 的帮助下，还会提供准确的 Design Token 值. 如：" }),
		"\n",
		t(a.div, {
			"data-example": "",
			children: [c(a.div, {
				"data-example-container": "",
				children: c(a.codeblock4a44dc15, {})
			}), c(a.pre, {
				className: "language-tsx",
				children: t(a.code, {
					className: "language-tsx",
					children: [
						c(a.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						t(a.span, {
							className: "token imports",
							children: [
								c(a.span, {
									className: "token punctuation",
									children: "{"
								}),
								" ",
								c(a.span, {
									className: "token maybe-class-name",
									children: "Box"
								}),
								c(a.span, {
									className: "token punctuation",
									children: ","
								}),
								" alpha",
								c(a.span, {
									className: "token punctuation",
									children: ","
								}),
								" styled",
								c(a.span, {
									className: "token punctuation",
									children: ","
								}),
								" variant ",
								c(a.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						c(a.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						c(a.span, {
							className: "token string",
							children: "\"@innoai-tech/vueuikit\""
						}),
						c(a.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						c(a.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						t(a.span, {
							className: "token imports",
							children: [
								c(a.span, {
									className: "token punctuation",
									children: "{"
								}),
								" t ",
								c(a.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						c(a.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						c(a.span, {
							className: "token string",
							children: "\"@innoai-tech/vuekit\""
						}),
						c(a.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n",
						c(a.span, {
							className: "token keyword module",
							children: "export"
						}),
						" ",
						c(a.span, {
							className: "token keyword",
							children: "const"
						}),
						" ",
						c(a.span, {
							className: "token maybe-class-name",
							children: "Button"
						}),
						" ",
						c(a.span, {
							className: "token operator",
							children: "="
						}),
						" ",
						c(a.span, {
							className: "token function",
							children: "styled"
						}),
						c(a.span, {
							className: "token punctuation",
							children: "("
						}),
						c(a.span, {
							className: "token string",
							children: "\"button\""
						}),
						c(a.span, {
							className: "token punctuation",
							children: ","
						}),
						" ",
						c(a.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n  disabled",
						c(a.span, {
							className: "token operator",
							children: ":"
						}),
						" t",
						c(a.span, {
							className: "token punctuation",
							children: "."
						}),
						c(a.span, {
							className: "token method function property-access",
							children: "boolean"
						}),
						c(a.span, {
							className: "token punctuation",
							children: "("
						}),
						c(a.span, {
							className: "token punctuation",
							children: ")"
						}),
						c(a.span, {
							className: "token punctuation",
							children: "."
						}),
						c(a.span, {
							className: "token method function property-access",
							children: "optional"
						}),
						c(a.span, {
							className: "token punctuation",
							children: "("
						}),
						c(a.span, {
							className: "token punctuation",
							children: ")"
						}),
						c(a.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n",
						c(a.span, {
							className: "token punctuation",
							children: "}"
						}),
						c(a.span, {
							className: "token punctuation",
							children: ")"
						}),
						c(a.span, {
							className: "token punctuation",
							children: "("
						}),
						c(a.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n  bg",
						c(a.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						c(a.span, {
							className: "token string",
							children: "\"none\""
						}),
						c(a.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n  outline",
						c(a.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						c(a.span, {
							className: "token string",
							children: "\"none\""
						}),
						c(a.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n  border",
						c(a.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						c(a.span, {
							className: "token string",
							children: "\"none\""
						}),
						c(a.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n  px",
						c(a.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						c(a.span, {
							className: "token number",
							children: "16"
						}),
						c(a.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n  h",
						c(a.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						c(a.span, {
							className: "token number",
							children: "40"
						}),
						c(a.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n  rounded",
						c(a.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						c(a.span, {
							className: "token string",
							children: "\"md\""
						}),
						c(a.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n\n  ",
						c(a.span, {
							className: "token comment",
							children: "// 利用 TypeScript 的推导而来，且非 color 属性无该值"
						}),
						"\n  ",
						c(a.span, {
							className: "token comment",
							children: "// 实际将转换为 var(--vk-color-sys-primary)"
						}),
						"\n  ",
						c(a.span, {
							className: "token comment",
							children: "// sys-* 的 color 还会随暗黑/普通主题进行切换"
						}),
						"\n  color",
						c(a.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						c(a.span, {
							className: "token string",
							children: "\"sys.primary\""
						}),
						c(a.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n\n  ",
						c(a.span, {
							className: "token comment",
							children: "// color 变种"
						}),
						"\n  ",
						c(a.span, {
							className: "token comment",
							children: "// 实际将转换为 rbga(var(--vk-color-sys-primary-rgb) / 0.08)"
						}),
						"\n  bgColor",
						c(a.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						c(a.span, {
							className: "token function",
							children: "variant"
						}),
						c(a.span, {
							className: "token punctuation",
							children: "("
						}),
						c(a.span, {
							className: "token string",
							children: "\"sys.primary\""
						}),
						c(a.span, {
							className: "token punctuation",
							children: ","
						}),
						" ",
						c(a.span, {
							className: "token function",
							children: "alpha"
						}),
						c(a.span, {
							className: "token punctuation",
							children: "("
						}),
						c(a.span, {
							className: "token number",
							children: "0.08"
						}),
						c(a.span, {
							className: "token punctuation",
							children: ")"
						}),
						c(a.span, {
							className: "token punctuation",
							children: ")"
						}),
						c(a.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n\n  ",
						c(a.span, {
							className: "token comment",
							children: "// 通常情况下，组件 props 将转换成 data-<prop> 作为 attr"
						}),
						"\n  ",
						c(a.span, {
							className: "token comment",
							children: "// 即： <Button disabled/>  =>  <button data-disabled=true />"
						}),
						"\n  ",
						c(a.span, {
							className: "token comment",
							children: "// 同理，在自定义转换规则中，也建议如下做类似的转换，避免动态创建 CSSObject"
						}),
						"\n  _disabled",
						c(a.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						c(a.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n    color",
						c(a.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						c(a.span, {
							className: "token function",
							children: "variant"
						}),
						c(a.span, {
							className: "token punctuation",
							children: "("
						}),
						c(a.span, {
							className: "token string",
							children: "\"sys.on-surface\""
						}),
						c(a.span, {
							className: "token punctuation",
							children: ","
						}),
						" ",
						c(a.span, {
							className: "token function",
							children: "alpha"
						}),
						c(a.span, {
							className: "token punctuation",
							children: "("
						}),
						c(a.span, {
							className: "token number",
							children: "0.12"
						}),
						c(a.span, {
							className: "token punctuation",
							children: ")"
						}),
						c(a.span, {
							className: "token punctuation",
							children: ")"
						}),
						c(a.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n    bgColor",
						c(a.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						c(a.span, {
							className: "token function",
							children: "variant"
						}),
						c(a.span, {
							className: "token punctuation",
							children: "("
						}),
						c(a.span, {
							className: "token string",
							children: "\"sys.on-surface\""
						}),
						c(a.span, {
							className: "token punctuation",
							children: ","
						}),
						" ",
						c(a.span, {
							className: "token function",
							children: "alpha"
						}),
						c(a.span, {
							className: "token punctuation",
							children: "("
						}),
						c(a.span, {
							className: "token number",
							children: "0.08"
						}),
						c(a.span, {
							className: "token punctuation",
							children: ")"
						}),
						c(a.span, {
							className: "token punctuation",
							children: ")"
						}),
						c(a.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n  ",
						c(a.span, {
							className: "token punctuation",
							children: "}"
						}),
						c(a.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n",
						c(a.span, {
							className: "token punctuation",
							children: "}"
						}),
						c(a.span, {
							className: "token punctuation",
							children: ")"
						}),
						c(a.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n",
						c(a.span, {
							className: "token keyword module",
							children: "export"
						}),
						" ",
						c(a.span, {
							className: "token keyword module",
							children: "default"
						}),
						" ",
						c(a.span, {
							className: "token punctuation",
							children: "("
						}),
						c(a.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						c(a.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						c(a.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n  ",
						c(a.span, {
							className: "token keyword control-flow",
							children: "return"
						}),
						" ",
						c(a.span, {
							className: "token punctuation",
							children: "("
						}),
						"\n    ",
						t(a.span, {
							className: "token tag",
							children: [
								t(a.span, {
									className: "token tag",
									children: [c(a.span, {
										className: "token punctuation",
										children: "<"
									}), c(a.span, {
										className: "token class-name",
										children: "Box"
									})]
								}),
								" ",
								c(a.span, {
									className: "token attr-name",
									children: "sx"
								}),
								t(a.span, {
									className: "token script language-javascript",
									children: [
										c(a.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										c(a.span, {
											className: "token punctuation",
											children: "{"
										}),
										c(a.span, {
											className: "token punctuation",
											children: "{"
										}),
										" display",
										c(a.span, {
											className: "token operator",
											children: ":"
										}),
										" ",
										c(a.span, {
											className: "token string",
											children: "\"flex\""
										}),
										c(a.span, {
											className: "token punctuation",
											children: ","
										}),
										" gap",
										c(a.span, {
											className: "token operator",
											children: ":"
										}),
										" ",
										c(a.span, {
											className: "token number",
											children: "8"
										}),
										" ",
										c(a.span, {
											className: "token punctuation",
											children: "}"
										}),
										c(a.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								c(a.span, {
									className: "token punctuation",
									children: ">"
								})
							]
						}),
						c(a.span, {
							className: "token plain-text",
							children: "\n      "
						}),
						t(a.span, {
							className: "token tag",
							children: [t(a.span, {
								className: "token tag",
								children: [c(a.span, {
									className: "token punctuation",
									children: "<"
								}), c(a.span, {
									className: "token class-name",
									children: "Button"
								})]
							}), c(a.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						c(a.span, {
							className: "token plain-text",
							children: "按钮"
						}),
						t(a.span, {
							className: "token tag",
							children: [t(a.span, {
								className: "token tag",
								children: [c(a.span, {
									className: "token punctuation",
									children: "</"
								}), c(a.span, {
									className: "token class-name",
									children: "Button"
								})]
							}), c(a.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						c(a.span, {
							className: "token plain-text",
							children: "\n      "
						}),
						t(a.span, {
							className: "token tag",
							children: [
								t(a.span, {
									className: "token tag",
									children: [c(a.span, {
										className: "token punctuation",
										children: "<"
									}), c(a.span, {
										className: "token class-name",
										children: "Button"
									})]
								}),
								" ",
								c(a.span, {
									className: "token attr-name",
									children: "disabled"
								}),
								t(a.span, {
									className: "token script language-javascript",
									children: [
										c(a.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										c(a.span, {
											className: "token punctuation",
											children: "{"
										}),
										c(a.span, {
											className: "token boolean",
											children: "true"
										}),
										c(a.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								c(a.span, {
									className: "token punctuation",
									children: ">"
								})
							]
						}),
						c(a.span, {
							className: "token plain-text",
							children: "按钮"
						}),
						t(a.span, {
							className: "token tag",
							children: [t(a.span, {
								className: "token tag",
								children: [c(a.span, {
									className: "token punctuation",
									children: "</"
								}), c(a.span, {
									className: "token class-name",
									children: "Button"
								})]
							}), c(a.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						c(a.span, {
							className: "token plain-text",
							children: "\n    "
						}),
						t(a.span, {
							className: "token tag",
							children: [t(a.span, {
								className: "token tag",
								children: [c(a.span, {
									className: "token punctuation",
									children: "</"
								}), c(a.span, {
									className: "token class-name",
									children: "Box"
								})]
							}), c(a.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						"\n  ",
						c(a.span, {
							className: "token punctuation",
							children: ")"
						}),
						c(a.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						c(a.span, {
							className: "token punctuation",
							children: "}"
						}),
						c(a.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n"
					]
				})
			})]
		}),
		"\n",
		t(a.p, { children: ["不同于其他框架中的 theme 定义，为了更准确的类型推导，需要由 DesignToken 进行创建\n详细请", c(a.a, {
			href: "https://github.com/innoai-tech/vuekit/blob/main/nodepkg/vueuikit/src/theming/m3",
			children: "参考源码"
		})] }),
		"\n",
		t(a.p, { children: [
			"虽然底层使用的是 ",
			c(a.code, { children: "@emotion/*" }),
			"，但屏蔽掉了 ",
			c(a.code, { children: "array" }),
			" 等非 CSSObject 值的使用, 初衷是为了更稳定的类型推导。\n另外样式扩展有两种方式"
		] }),
		"\n",
		c(a.pre, {
			className: "language-tsx",
			children: t(a.code, {
				className: "language-tsx",
				children: [
					c(a.span, {
						className: "token keyword module",
						children: "import"
					}),
					" ",
					t(a.span, {
						className: "token imports",
						children: [
							c(a.span, {
								className: "token punctuation",
								children: "{"
							}),
							" t ",
							c(a.span, {
								className: "token punctuation",
								children: "}"
							})
						]
					}),
					" ",
					c(a.span, {
						className: "token keyword module",
						children: "from"
					}),
					" ",
					c(a.span, {
						className: "token string",
						children: "\"@innoai-tech/vuekit\""
					}),
					c(a.span, {
						className: "token punctuation",
						children: ";"
					}),
					"\n",
					c(a.span, {
						className: "token keyword module",
						children: "import"
					}),
					" ",
					t(a.span, {
						className: "token imports",
						children: [
							c(a.span, {
								className: "token punctuation",
								children: "{"
							}),
							" styled",
							c(a.span, {
								className: "token punctuation",
								children: ","
							}),
							" ",
							c(a.span, {
								className: "token maybe-class-name",
								children: "SystemStyleObject"
							}),
							" ",
							c(a.span, {
								className: "token punctuation",
								children: "}"
							})
						]
					}),
					" ",
					c(a.span, {
						className: "token keyword module",
						children: "from"
					}),
					" ",
					c(a.span, {
						className: "token string",
						children: "\"@innoai-tech/vueuikit\""
					}),
					c(a.span, {
						className: "token punctuation",
						children: ";"
					}),
					"\n\n",
					c(a.span, {
						className: "token keyword",
						children: "const"
					}),
					" shared",
					c(a.span, {
						className: "token operator",
						children: ":"
					}),
					" ",
					c(a.span, {
						className: "token maybe-class-name",
						children: "SystemStyleObject"
					}),
					" ",
					c(a.span, {
						className: "token operator",
						children: "="
					}),
					" ",
					c(a.span, {
						className: "token punctuation",
						children: "{"
					}),
					"\n  color",
					c(a.span, {
						className: "token operator",
						children: ":"
					}),
					" ",
					c(a.span, {
						className: "token string",
						children: "\"sys.primary\""
					}),
					c(a.span, {
						className: "token punctuation",
						children: ","
					}),
					"\n  ",
					c(a.span, {
						className: "token comment",
						children: "// ..."
					}),
					"\n",
					c(a.span, {
						className: "token punctuation",
						children: "}"
					}),
					c(a.span, {
						className: "token punctuation",
						children: ";"
					}),
					"\n\n",
					c(a.span, {
						className: "token comment",
						children: "// 直接通过 extends 复用样式"
					}),
					"\n",
					c(a.span, {
						className: "token comment",
						children: "//"
					}),
					"\n",
					c(a.span, {
						className: "token comment",
						children: "// 组件 props 定义需要重新声明"
					}),
					"\n",
					c(a.span, {
						className: "token keyword module",
						children: "export"
					}),
					" ",
					c(a.span, {
						className: "token keyword",
						children: "const"
					}),
					" ",
					c(a.span, {
						className: "token maybe-class-name",
						children: "ButtonBase"
					}),
					" ",
					c(a.span, {
						className: "token operator",
						children: "="
					}),
					" ",
					c(a.span, {
						className: "token function",
						children: "styled"
					}),
					c(a.span, {
						className: "token punctuation",
						children: "("
					}),
					c(a.span, {
						className: "token string",
						children: "\"button\""
					}),
					c(a.span, {
						className: "token punctuation",
						children: ","
					}),
					" ",
					c(a.span, {
						className: "token punctuation",
						children: "{"
					}),
					"\n  disabled",
					c(a.span, {
						className: "token operator",
						children: ":"
					}),
					" t",
					c(a.span, {
						className: "token punctuation",
						children: "."
					}),
					c(a.span, {
						className: "token method function property-access",
						children: "boolean"
					}),
					c(a.span, {
						className: "token punctuation",
						children: "("
					}),
					c(a.span, {
						className: "token punctuation",
						children: ")"
					}),
					c(a.span, {
						className: "token punctuation",
						children: "."
					}),
					c(a.span, {
						className: "token method function property-access",
						children: "optional"
					}),
					c(a.span, {
						className: "token punctuation",
						children: "("
					}),
					c(a.span, {
						className: "token punctuation",
						children: ")"
					}),
					c(a.span, {
						className: "token punctuation",
						children: ","
					}),
					"\n",
					c(a.span, {
						className: "token punctuation",
						children: "}"
					}),
					c(a.span, {
						className: "token punctuation",
						children: ")"
					}),
					c(a.span, {
						className: "token punctuation",
						children: "("
					}),
					c(a.span, {
						className: "token punctuation",
						children: "{"
					}),
					"\n  ",
					c(a.span, {
						className: "token keyword",
						children: "extends"
					}),
					c(a.span, {
						className: "token operator",
						children: ":"
					}),
					" ",
					c(a.span, {
						className: "token punctuation",
						children: "["
					}),
					"shared",
					c(a.span, {
						className: "token punctuation",
						children: "]"
					}),
					c(a.span, {
						className: "token punctuation",
						children: ","
					}),
					"\n  ",
					c(a.span, {
						className: "token comment",
						children: "// ..."
					}),
					"\n",
					c(a.span, {
						className: "token punctuation",
						children: "}"
					}),
					c(a.span, {
						className: "token punctuation",
						children: ")"
					}),
					c(a.span, {
						className: "token punctuation",
						children: ";"
					}),
					"\n\n",
					c(a.span, {
						className: "token comment",
						children: "// 通过 styled 覆写样式"
					}),
					"\n",
					c(a.span, {
						className: "token comment",
						children: "// 可以完全继承 BaseButton 的 props 定义"
					}),
					"\n",
					c(a.span, {
						className: "token keyword module",
						children: "export"
					}),
					" ",
					c(a.span, {
						className: "token keyword",
						children: "const"
					}),
					" ",
					c(a.span, {
						className: "token maybe-class-name",
						children: "Button"
					}),
					" ",
					c(a.span, {
						className: "token operator",
						children: "="
					}),
					" ",
					c(a.span, {
						className: "token function",
						children: "styled"
					}),
					c(a.span, {
						className: "token punctuation",
						children: "("
					}),
					c(a.span, {
						className: "token maybe-class-name",
						children: "ButtonBase"
					}),
					c(a.span, {
						className: "token punctuation",
						children: ")"
					}),
					c(a.span, {
						className: "token punctuation",
						children: "("
					}),
					c(a.span, {
						className: "token punctuation",
						children: "{"
					}),
					"\n  ",
					c(a.span, {
						className: "token comment",
						children: "// ..."
					}),
					"\n",
					c(a.span, {
						className: "token punctuation",
						children: "}"
					}),
					c(a.span, {
						className: "token punctuation",
						children: ")"
					}),
					c(a.span, {
						className: "token punctuation",
						children: ";"
					}),
					"\n"
				]
			})
		}),
		"\n",
		t(a.p, { children: [
			"除 ",
			c(a.code, { children: "styled" }),
			" 外，我们还可以使用 ",
			c(a.code, { children: "Box" }),
			" 进行快速样式定义, 通过 ",
			c(a.code, { children: "sx" }),
			" prop。 并且 ",
			c(a.code, { children: "component" }),
			" prop 支持我们随时切换 tag 或者\n组件，并且其他 props 会随着不同的 component 切换对应 props 类型约束与提示。"
		] }),
		"\n",
		c(a.p, { children: "同样的，通过 styled 创建的组件也有一样的特性。" }),
		"\n",
		t(a.div, {
			"data-example": "",
			children: [c(a.div, {
				"data-example-container": "",
				children: c(a.codeblock785f3ec7, {})
			}), c(a.pre, {
				className: "language-tsx",
				children: t(a.code, {
					className: "language-tsx",
					children: [
						c(a.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						t(a.span, {
							className: "token imports",
							children: [
								c(a.span, {
									className: "token punctuation",
									children: "{"
								}),
								" component ",
								c(a.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						c(a.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						c(a.span, {
							className: "token string",
							children: "\"@innoai-tech/vuekit\""
						}),
						c(a.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						c(a.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						t(a.span, {
							className: "token imports",
							children: [
								c(a.span, {
									className: "token punctuation",
									children: "{"
								}),
								" ",
								c(a.span, {
									className: "token maybe-class-name",
									children: "Box"
								}),
								" ",
								c(a.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						c(a.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						c(a.span, {
							className: "token string",
							children: "\"@innoai-tech/vueuikit\""
						}),
						c(a.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n",
						c(a.span, {
							className: "token keyword module",
							children: "export"
						}),
						" ",
						c(a.span, {
							className: "token keyword module",
							children: "default"
						}),
						" ",
						c(a.span, {
							className: "token function",
							children: "component"
						}),
						c(a.span, {
							className: "token punctuation",
							children: "("
						}),
						c(a.span, {
							className: "token punctuation",
							children: "("
						}),
						c(a.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						c(a.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						c(a.span, {
							className: "token punctuation",
							children: "("
						}),
						c(a.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						c(a.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						c(a.span, {
							className: "token punctuation",
							children: "("
						}),
						"\n  ",
						t(a.span, {
							className: "token tag",
							children: [
								t(a.span, {
									className: "token tag",
									children: [c(a.span, {
										className: "token punctuation",
										children: "<"
									}), c(a.span, {
										className: "token class-name",
										children: "Box"
									})]
								}),
								" ",
								c(a.span, {
									className: "token attr-name",
									children: "sx"
								}),
								t(a.span, {
									className: "token script language-javascript",
									children: [
										c(a.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										c(a.span, {
											className: "token punctuation",
											children: "{"
										}),
										c(a.span, {
											className: "token punctuation",
											children: "{"
										}),
										" display",
										c(a.span, {
											className: "token operator",
											children: ":"
										}),
										" ",
										c(a.span, {
											className: "token string",
											children: "\"flex\""
										}),
										c(a.span, {
											className: "token punctuation",
											children: ","
										}),
										" padding",
										c(a.span, {
											className: "token operator",
											children: ":"
										}),
										" ",
										c(a.span, {
											className: "token number",
											children: "10"
										}),
										c(a.span, {
											className: "token punctuation",
											children: ","
										}),
										" containerStyle",
										c(a.span, {
											className: "token operator",
											children: ":"
										}),
										" ",
										c(a.span, {
											className: "token string",
											children: "\"sys.primary\""
										}),
										" ",
										c(a.span, {
											className: "token punctuation",
											children: "}"
										}),
										c(a.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								c(a.span, {
									className: "token punctuation",
									children: ">"
								})
							]
						}),
						c(a.span, {
							className: "token plain-text",
							children: "\n    "
						}),
						t(a.span, {
							className: "token tag",
							children: [
								t(a.span, {
									className: "token tag",
									children: [c(a.span, {
										className: "token punctuation",
										children: "<"
									}), c(a.span, {
										className: "token class-name",
										children: "Box"
									})]
								}),
								" ",
								c(a.span, {
									className: "token attr-name",
									children: "sx"
								}),
								t(a.span, {
									className: "token script language-javascript",
									children: [
										c(a.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										c(a.span, {
											className: "token punctuation",
											children: "{"
										}),
										c(a.span, {
											className: "token punctuation",
											children: "{"
										}),
										" containerStyle",
										c(a.span, {
											className: "token operator",
											children: ":"
										}),
										" ",
										c(a.span, {
											className: "token string",
											children: "\"sys.surface-container\""
										}),
										" ",
										c(a.span, {
											className: "token punctuation",
											children: "}"
										}),
										c(a.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								" ",
								c(a.span, {
									className: "token attr-name",
									children: "component"
								}),
								t(a.span, {
									className: "token script language-javascript",
									children: [
										c(a.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										c(a.span, {
											className: "token punctuation",
											children: "{"
										}),
										c(a.span, {
											className: "token string",
											children: "\"button\""
										}),
										c(a.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								c(a.span, {
									className: "token punctuation",
									children: ">"
								})
							]
						}),
						c(a.span, {
							className: "token plain-text",
							children: "\n      Hi 111\n    "
						}),
						t(a.span, {
							className: "token tag",
							children: [t(a.span, {
								className: "token tag",
								children: [c(a.span, {
									className: "token punctuation",
									children: "</"
								}), c(a.span, {
									className: "token class-name",
									children: "Box"
								})]
							}), c(a.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						c(a.span, {
							className: "token plain-text",
							children: "\n  "
						}),
						t(a.span, {
							className: "token tag",
							children: [t(a.span, {
								className: "token tag",
								children: [c(a.span, {
									className: "token punctuation",
									children: "</"
								}), c(a.span, {
									className: "token class-name",
									children: "Box"
								})]
							}), c(a.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						"\n",
						c(a.span, {
							className: "token punctuation",
							children: ")"
						}),
						c(a.span, {
							className: "token punctuation",
							children: ")"
						}),
						c(a.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n"
					]
				})
			})]
		}),
		"\n",
		c(a.h3, { children: "CSS Selector 简写规则" }),
		"\n",
		t(a.p, { children: [
			"另外，为了简化 ",
			c(a.code, { children: "\"&:hover\"" }),
			" ",
			c(a.code, { children: "&[aria-current='page']" }),
			" 等选择器声明，\n提供的如下的简化规则："
		] }),
		"\n",
		t(a.ul, { children: [
			"\n",
			t(a.li, { children: [
				"所有名称支持 ",
				c(a.em, { children: "下划线命名" }),
				" 或者 ",
				c(a.em, { children: "驼峰命名" }),
				"，最终都将转换为 ",
				c(a.em, { children: "短横小写命名" }),
				", ",
				c(a.code, { children: "=" }),
				" 用 ",
				c(a.code, { children: "__" }),
				" 替代"
			] }),
			"\n",
			t(a.li, { children: [
				c(a.code, { children: "_*" }),
				" 一般表示",
				c(a.strong, { children: "状态" }),
				"，可用值",
				"\n",
				t(a.ul, { children: [
					"\n",
					t(a.li, { children: [
						c(a.code, { children: "data-*" }),
						" 和 ",
						c(a.code, { children: "aria-*" }),
						", `",
						"\n",
						t(a.ul, { children: [
							"\n",
							t(a.li, { children: [
								"如 ",
								c(a.code, { children: "_aria_current__page" }),
								"： 等效为 ",
								c(a.code, { children: "&[aria-current='page']" }),
								","
							] }),
							"\n"
						] }),
						"\n"
					] }),
					"\n",
					t(a.li, { children: [
						c(a.code, { children: "before" }),
						"，",
						c(a.code, { children: "after" }),
						" 等",
						c(a.a, {
							href: "https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-elements",
							children: "伪元素"
						}),
						", 需要声明 \"$\" 表示为元素",
						"\n",
						t(a.ul, { children: [
							"\n",
							t(a.li, { children: [
								"如 ",
								c(a.code, { children: "_$before" }),
								"： 等效为 ",
								c(a.code, { children: "&::before" })
							] }),
							"\n"
						] }),
						"\n"
					] }),
					"\n",
					t(a.li, { children: [
						c(a.code, { children: "hover" }),
						", ",
						c(a.code, { children: "focus" }),
						", ",
						c(a.code, { children: "active" }),
						", ",
						c(a.code, { children: "disabled" }),
						" 等",
						c(a.a, {
							href: "https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-classes",
							children: "伪类"
						}),
						"\n",
						t(a.ul, { children: [
							"\n",
							t(a.li, { children: [
								"如 ",
								c(a.code, { children: "_hover" }),
								"： 等效为 ",
								c(a.code, { children: "&:hover, &.hover, &[data-hover]:not([data-hover='false'])" }),
								","
							] }),
							"\n"
						] }),
						"\n"
					] }),
					"\n",
					t(a.li, { children: [
						"以及其他自定义状态",
						"\n",
						t(a.ul, { children: [
							"\n",
							t(a.li, { children: [
								"如 ",
								c(a.code, { children: "_has_icon" }),
								"： 等效为 ",
								c(a.code, { children: "&[data-has-icon]:not([data-has-icon='false'])" })
							] }),
							"\n"
						] }),
						"\n"
					] }),
					"\n"
				] }),
				"\n"
			] }),
			"\n",
			t(a.li, { children: [
				c(a.code, { children: "$*" }),
				" 或 ",
				c(a.code, { children: "*$" }),
				"，一般指代",
				c(a.strong, { children: "元素节点" }),
				", 可用值为",
				"\n",
				t(a.ul, { children: [
					"\n",
					t(a.li, { children: [
						c(a.code, { children: "data-*" }),
						" 和 ",
						c(a.code, { children: "aria-*" }),
						", `",
						"\n",
						t(a.ul, { children: [
							"\n",
							t(a.li, { children: [
								"如 ",
								c(a.code, { children: "$data_icon" }),
								"： 等效为 ",
								c(a.code, { children: "&[data-icon]" })
							] }),
							"\n",
							t(a.li, { children: [
								"如 ",
								c(a.code, { children: "$data_popper_arrow" }),
								"： 等效为 ",
								c(a.code, { children: "&[data-popper-arrow]" })
							] }),
							"\n",
							t(a.li, { children: [
								"如 ",
								c(a.code, { children: "data_popper_placement__right$" }),
								"： 等效为 ",
								c(a.code, { children: "[data-popper-placement=right] &" })
							] }),
							"\n"
						] }),
						"\n"
					] }),
					"\n"
				] }),
				"\n"
			] }),
			"\n"
		] })
	] });
}
function k(n = {}) {
	let { wrapper: e } = n.components || {};
	return e ? c(e, {
		...n,
		children: c(u, { ...n })
	}) : u(n);
}
var N = s(() => () => e(k, { components: {
	codeblock4a44dc15: m,
	codeblock785f3ec7: h
} }));
export { N as default };
