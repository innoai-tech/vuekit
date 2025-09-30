import { K as n, Q as a, V as e, Z as s, o as t, rt as c, s as l } from "./lib-nodepkg-vuekit.Dng4O0gc.chunk.js";
import { a as o, o as p, p as i } from "./lib-nodepkg-typedef.WoOPnAhr.chunk.js";
var r = e(() => {
	let n = c(1);
	return () => l("div", {
		style: {
			display: "flex",
			gap: "1rem"
		},
		children: [l("div", { children: ["Counts: ", n.value] }), t("button", {
			onClick: () => n.value++,
			children: "Click To Count"
		})]
	});
}), u = e({
	value: i().optional().default("1"),
	type: p(["text", "number"]),
	onValueChange: o()
}, (n, { emit: a }) => () => t("input", {
	value: n.value,
	onInput: (n) => {
		a("value-change", n.target.value);
	}
}), { displayName: "TextInput" }), d = e({
	$title: o().optional(),
	$item: o().optional(),
	$default: o().optional()
}, ({}, { slots: n }) => () => l("dl", { children: [
	t("dt", { children: "default" }),
	t("dd", { children: n.default?.() }),
	t("dt", { children: "title" }),
	t("dd", { children: n.title?.() }),
	t("dt", { children: "item" }),
	t("dd", { children: [{
		label: "1",
		value: "1"
	}, {
		label: "2",
		value: "2"
	}].map((a) => n.item?.(a)) })
] }), { displayName: "List" }), m = e(() => {
	let n = c("");
	return () => t(d, {
		$title: l("div", { children: ["Inputted: ", n.value] }),
		$item: (n) => t("div", { children: n.label }),
		children: t(u, {
			type: "text",
			onValueChange: (a) => {
				n.value = a;
			}
		})
	});
});
function h(a) {
	let e = {
		code: "code",
		codeblock4a44dc15: "codeblock4a44dc15",
		codeblock4b227777: "codeblock4b227777",
		div: "div",
		li: "li",
		p: "p",
		pre: "pre",
		span: "span",
		ul: "ul",
		...a.components
	};
	return l(n, { children: [
		t(e.p, { children: "为了更好的 TypeScript 和 JSX 的支持，重新抽象了定义组件的方式" }),
		"\n",
		t(e.p, { children: "一般组件：" }),
		"\n",
		l(e.div, {
			"data-example": "",
			children: [t(e.div, {
				"data-example-container": "",
				children: t(e.codeblock4b227777, {})
			}), t(e.pre, {
				className: "language-tsx",
				children: l(e.code, {
					className: "language-tsx",
					children: [
						t(e.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						l(e.span, {
							className: "token imports",
							children: [
								t(e.span, {
									className: "token punctuation",
									children: "{"
								}),
								" component ",
								t(e.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						t(e.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						t(e.span, {
							className: "token string",
							children: "\"@innoai-tech/vuekit\""
						}),
						t(e.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						t(e.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						l(e.span, {
							className: "token imports",
							children: [
								t(e.span, {
									className: "token punctuation",
									children: "{"
								}),
								" ref ",
								t(e.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						t(e.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						t(e.span, {
							className: "token string",
							children: "\"vue\""
						}),
						t(e.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n",
						t(e.span, {
							className: "token keyword module",
							children: "export"
						}),
						" ",
						t(e.span, {
							className: "token keyword module",
							children: "default"
						}),
						" ",
						t(e.span, {
							className: "token function",
							children: "component"
						}),
						t(e.span, {
							className: "token punctuation",
							children: "("
						}),
						t(e.span, {
							className: "token punctuation",
							children: "("
						}),
						t(e.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						t(e.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						t(e.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n  ",
						t(e.span, {
							className: "token keyword",
							children: "const"
						}),
						" count ",
						t(e.span, {
							className: "token operator",
							children: "="
						}),
						" ",
						t(e.span, {
							className: "token function",
							children: "ref"
						}),
						t(e.span, {
							className: "token punctuation",
							children: "("
						}),
						t(e.span, {
							className: "token number",
							children: "1"
						}),
						t(e.span, {
							className: "token punctuation",
							children: ")"
						}),
						t(e.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n  ",
						t(e.span, {
							className: "token keyword control-flow",
							children: "return"
						}),
						" ",
						t(e.span, {
							className: "token punctuation",
							children: "("
						}),
						t(e.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						t(e.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						t(e.span, {
							className: "token punctuation",
							children: "("
						}),
						"\n    ",
						l(e.span, {
							className: "token tag",
							children: [
								l(e.span, {
									className: "token tag",
									children: [t(e.span, {
										className: "token punctuation",
										children: "<"
									}), "div"]
								}),
								" ",
								t(e.span, {
									className: "token attr-name",
									children: "style"
								}),
								l(e.span, {
									className: "token script language-javascript",
									children: [
										t(e.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										t(e.span, {
											className: "token punctuation",
											children: "{"
										}),
										t(e.span, {
											className: "token punctuation",
											children: "{"
										}),
										" display",
										t(e.span, {
											className: "token operator",
											children: ":"
										}),
										" ",
										t(e.span, {
											className: "token string",
											children: "\"flex\""
										}),
										t(e.span, {
											className: "token punctuation",
											children: ","
										}),
										" gap",
										t(e.span, {
											className: "token operator",
											children: ":"
										}),
										" ",
										t(e.span, {
											className: "token string",
											children: "\"1rem\""
										}),
										" ",
										t(e.span, {
											className: "token punctuation",
											children: "}"
										}),
										t(e.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								t(e.span, {
									className: "token punctuation",
									children: ">"
								})
							]
						}),
						t(e.span, {
							className: "token plain-text",
							children: "\n      "
						}),
						l(e.span, {
							className: "token tag",
							children: [l(e.span, {
								className: "token tag",
								children: [t(e.span, {
									className: "token punctuation",
									children: "<"
								}), "div"]
							}), t(e.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						t(e.span, {
							className: "token plain-text",
							children: "Counts: "
						}),
						t(e.span, {
							className: "token punctuation",
							children: "{"
						}),
						"count",
						t(e.span, {
							className: "token punctuation",
							children: "."
						}),
						t(e.span, {
							className: "token property-access",
							children: "value"
						}),
						t(e.span, {
							className: "token punctuation",
							children: "}"
						}),
						l(e.span, {
							className: "token tag",
							children: [l(e.span, {
								className: "token tag",
								children: [t(e.span, {
									className: "token punctuation",
									children: "</"
								}), "div"]
							}), t(e.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						t(e.span, {
							className: "token plain-text",
							children: "\n      "
						}),
						l(e.span, {
							className: "token tag",
							children: [
								l(e.span, {
									className: "token tag",
									children: [t(e.span, {
										className: "token punctuation",
										children: "<"
									}), "button"]
								}),
								" ",
								t(e.span, {
									className: "token attr-name",
									children: "onClick"
								}),
								l(e.span, {
									className: "token script language-javascript",
									children: [
										t(e.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										t(e.span, {
											className: "token punctuation",
											children: "{"
										}),
										t(e.span, {
											className: "token punctuation",
											children: "("
										}),
										t(e.span, {
											className: "token punctuation",
											children: ")"
										}),
										" ",
										t(e.span, {
											className: "token arrow operator",
											children: "=>"
										}),
										" count",
										t(e.span, {
											className: "token punctuation",
											children: "."
										}),
										t(e.span, {
											className: "token property-access",
											children: "value"
										}),
										t(e.span, {
											className: "token operator",
											children: "++"
										}),
										t(e.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								t(e.span, {
									className: "token punctuation",
									children: ">"
								})
							]
						}),
						t(e.span, {
							className: "token plain-text",
							children: "Click To Count"
						}),
						l(e.span, {
							className: "token tag",
							children: [l(e.span, {
								className: "token tag",
								children: [t(e.span, {
									className: "token punctuation",
									children: "</"
								}), "button"]
							}), t(e.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						t(e.span, {
							className: "token plain-text",
							children: "\n    "
						}),
						l(e.span, {
							className: "token tag",
							children: [l(e.span, {
								className: "token tag",
								children: [t(e.span, {
									className: "token punctuation",
									children: "</"
								}), "div"]
							}), t(e.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						"\n  ",
						t(e.span, {
							className: "token punctuation",
							children: ")"
						}),
						t(e.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						t(e.span, {
							className: "token punctuation",
							children: "}"
						}),
						t(e.span, {
							className: "token punctuation",
							children: ")"
						}),
						t(e.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n"
					]
				})
			})]
		}),
		"\n",
		t(e.p, { children: "可复用组件：" }),
		"\n",
		l(e.ul, { children: [
			"\n",
			l(e.li, { children: [
				t(e.code, { children: "props" }),
				" 和 ",
				t(e.code, { children: "emits" }),
				" 合并声明"
			] }),
			"\n"
		] }),
		"\n",
		l(e.div, {
			"data-example": "",
			children: [t(e.div, {
				"data-example-container": "",
				children: t(e.codeblock4a44dc15, {})
			}), t(e.pre, {
				className: "language-tsx",
				children: l(e.code, {
					className: "language-tsx",
					children: [
						t(e.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						t(e.span, {
							className: "token punctuation",
							children: "{"
						}),
						" component",
						t(e.span, {
							className: "token punctuation",
							children: ","
						}),
						" t",
						t(e.span, {
							className: "token punctuation",
							children: ","
						}),
						" ",
						t(e.span, {
							className: "token keyword",
							children: "type"
						}),
						" ",
						t(e.span, {
							className: "token class-name",
							children: t(e.span, {
								className: "token maybe-class-name",
								children: "VNode"
							})
						}),
						t(e.span, {
							className: "token punctuation",
							children: ","
						}),
						" ",
						t(e.span, {
							className: "token keyword",
							children: "type"
						}),
						" ",
						t(e.span, {
							className: "token class-name",
							children: t(e.span, {
								className: "token maybe-class-name",
								children: "VNodeChild"
							})
						}),
						" ",
						t(e.span, {
							className: "token punctuation",
							children: "}"
						}),
						" ",
						t(e.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						t(e.span, {
							className: "token string",
							children: "\"@innoai-tech/vuekit\""
						}),
						t(e.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						t(e.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						l(e.span, {
							className: "token imports",
							children: [
								t(e.span, {
									className: "token punctuation",
									children: "{"
								}),
								" ref ",
								t(e.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						t(e.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						t(e.span, {
							className: "token string",
							children: "\"vue\""
						}),
						t(e.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n",
						t(e.span, {
							className: "token keyword module",
							children: "export"
						}),
						" ",
						t(e.span, {
							className: "token keyword",
							children: "const"
						}),
						" ",
						t(e.span, {
							className: "token maybe-class-name",
							children: "TextInput"
						}),
						" ",
						t(e.span, {
							className: "token operator",
							children: "="
						}),
						" ",
						t(e.span, {
							className: "token function",
							children: "component"
						}),
						t(e.span, {
							className: "token punctuation",
							children: "("
						}),
						"\n  ",
						t(e.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n    ",
						t(e.span, {
							className: "token comment",
							children: "// VUE 的注册机制（Proxy 定义基准，以及从 attrs 中提取 props 的 emits 的依据）"
						}),
						"\n    ",
						t(e.span, {
							className: "token comment",
							children: "// 必须声明，哪怕只是属性名称"
						}),
						"\n    ",
						t(e.span, {
							className: "token comment",
							children: "//"
						}),
						"\n    ",
						t(e.span, {
							className: "token comment",
							children: "// 又由于 TypeString 的老问题  https://www.typescriptneedstypes.com/#the-problem"
						}),
						"\n    ",
						t(e.span, {
							className: "token comment",
							children: "// 类型定义无法转为 Runtime 对象"
						}),
						"\n    value",
						t(e.span, {
							className: "token operator",
							children: ":"
						}),
						" t",
						t(e.span, {
							className: "token punctuation",
							children: "."
						}),
						t(e.span, {
							className: "token method function property-access",
							children: "string"
						}),
						t(e.span, {
							className: "token punctuation",
							children: "("
						}),
						t(e.span, {
							className: "token punctuation",
							children: ")"
						}),
						t(e.span, {
							className: "token punctuation",
							children: "."
						}),
						t(e.span, {
							className: "token method function property-access",
							children: "optional"
						}),
						t(e.span, {
							className: "token punctuation",
							children: "("
						}),
						t(e.span, {
							className: "token punctuation",
							children: ")"
						}),
						t(e.span, {
							className: "token punctuation",
							children: "."
						}),
						t(e.span, {
							className: "token keyword module",
							children: "default"
						}),
						t(e.span, {
							className: "token punctuation",
							children: "("
						}),
						t(e.span, {
							className: "token string",
							children: "\"1\""
						}),
						t(e.span, {
							className: "token punctuation",
							children: ")"
						}),
						t(e.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n    type",
						t(e.span, {
							className: "token operator",
							children: ":"
						}),
						" t",
						t(e.span, {
							className: "token punctuation",
							children: "."
						}),
						t(e.span, {
							className: "token method function property-access",
							children: "enums"
						}),
						t(e.span, {
							className: "token punctuation",
							children: "("
						}),
						t(e.span, {
							className: "token punctuation",
							children: "["
						}),
						t(e.span, {
							className: "token string",
							children: "\"text\""
						}),
						t(e.span, {
							className: "token punctuation",
							children: ","
						}),
						" ",
						t(e.span, {
							className: "token string",
							children: "\"number\""
						}),
						t(e.span, {
							className: "token punctuation",
							children: "]"
						}),
						t(e.span, {
							className: "token punctuation",
							children: ")"
						}),
						t(e.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n\n    ",
						t(e.span, {
							className: "token comment",
							children: "// on[A-Z] 前缀视为 emits"
						}),
						"\n    onValueChange",
						t(e.span, {
							className: "token operator",
							children: ":"
						}),
						" t",
						t(e.span, {
							className: "token punctuation",
							children: "."
						}),
						t(e.span, {
							className: "token property-access",
							children: "custom"
						}),
						t(e.span, {
							className: "token operator",
							children: "<"
						}),
						t(e.span, {
							className: "token punctuation",
							children: "("
						}),
						"v",
						t(e.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						t(e.span, {
							className: "token builtin",
							children: "string"
						}),
						t(e.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						t(e.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						t(e.span, {
							className: "token keyword",
							children: "void"
						}),
						t(e.span, {
							className: "token operator",
							children: ">"
						}),
						t(e.span, {
							className: "token punctuation",
							children: "("
						}),
						t(e.span, {
							className: "token punctuation",
							children: ")"
						}),
						t(e.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n  ",
						t(e.span, {
							className: "token punctuation",
							children: "}"
						}),
						t(e.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n  ",
						t(e.span, {
							className: "token punctuation",
							children: "("
						}),
						"props",
						t(e.span, {
							className: "token punctuation",
							children: ","
						}),
						" ",
						t(e.span, {
							className: "token punctuation",
							children: "{"
						}),
						" emit ",
						t(e.span, {
							className: "token punctuation",
							children: "}"
						}),
						t(e.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						t(e.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						t(e.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n    ",
						t(e.span, {
							className: "token comment",
							children: "// setup"
						}),
						"\n\n    ",
						t(e.span, {
							className: "token keyword control-flow",
							children: "return"
						}),
						" ",
						t(e.span, {
							className: "token punctuation",
							children: "("
						}),
						t(e.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						t(e.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						t(e.span, {
							className: "token punctuation",
							children: "("
						}),
						"\n      ",
						l(e.span, {
							className: "token tag",
							children: [
								l(e.span, {
									className: "token tag",
									children: [t(e.span, {
										className: "token punctuation",
										children: "<"
									}), "input"]
								}),
								"\n        ",
								t(e.span, {
									className: "token attr-name",
									children: "value"
								}),
								l(e.span, {
									className: "token script language-javascript",
									children: [
										t(e.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										t(e.span, {
											className: "token punctuation",
											children: "{"
										}),
										"props",
										t(e.span, {
											className: "token punctuation",
											children: "."
										}),
										t(e.span, {
											className: "token property-access",
											children: "value"
										}),
										t(e.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n        ",
								t(e.span, {
									className: "token attr-name",
									children: "onInput"
								}),
								l(e.span, {
									className: "token script language-javascript",
									children: [
										t(e.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										t(e.span, {
											className: "token punctuation",
											children: "{"
										}),
										t(e.span, {
											className: "token punctuation",
											children: "("
										}),
										"e",
										t(e.span, {
											className: "token punctuation",
											children: ")"
										}),
										" ",
										t(e.span, {
											className: "token arrow operator",
											children: "=>"
										}),
										" ",
										t(e.span, {
											className: "token punctuation",
											children: "{"
										}),
										"\n          ",
										t(e.span, {
											className: "token function",
											children: "emit"
										}),
										t(e.span, {
											className: "token punctuation",
											children: "("
										}),
										t(e.span, {
											className: "token string",
											children: "\"value-change\""
										}),
										t(e.span, {
											className: "token punctuation",
											children: ","
										}),
										" ",
										t(e.span, {
											className: "token punctuation",
											children: "("
										}),
										"e",
										t(e.span, {
											className: "token punctuation",
											children: "."
										}),
										t(e.span, {
											className: "token property-access",
											children: "target"
										}),
										" ",
										t(e.span, {
											className: "token keyword module",
											children: "as"
										}),
										" ",
										t(e.span, {
											className: "token maybe-class-name",
											children: "HTMLInputElement"
										}),
										t(e.span, {
											className: "token punctuation",
											children: ")"
										}),
										t(e.span, {
											className: "token punctuation",
											children: "."
										}),
										t(e.span, {
											className: "token property-access",
											children: "value"
										}),
										t(e.span, {
											className: "token punctuation",
											children: ")"
										}),
										t(e.span, {
											className: "token punctuation",
											children: ";"
										}),
										"\n        ",
										t(e.span, {
											className: "token punctuation",
											children: "}"
										}),
										t(e.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n      ",
								t(e.span, {
									className: "token punctuation",
									children: "/>"
								})
							]
						}),
						"\n    ",
						t(e.span, {
							className: "token punctuation",
							children: ")"
						}),
						t(e.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n  ",
						t(e.span, {
							className: "token punctuation",
							children: "}"
						}),
						t(e.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n",
						t(e.span, {
							className: "token punctuation",
							children: ")"
						}),
						t(e.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n",
						t(e.span, {
							className: "token keyword module",
							children: "export"
						}),
						" ",
						t(e.span, {
							className: "token keyword",
							children: "interface"
						}),
						" ",
						t(e.span, {
							className: "token class-name",
							children: t(e.span, {
								className: "token maybe-class-name",
								children: "Option"
							})
						}),
						" ",
						t(e.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n  label",
						t(e.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						t(e.span, {
							className: "token builtin",
							children: "string"
						}),
						t(e.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n  value",
						t(e.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						t(e.span, {
							className: "token builtin",
							children: "string"
						}),
						t(e.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						t(e.span, {
							className: "token punctuation",
							children: "}"
						}),
						"\n\n",
						t(e.span, {
							className: "token keyword module",
							children: "export"
						}),
						" ",
						t(e.span, {
							className: "token keyword",
							children: "const"
						}),
						" ",
						t(e.span, {
							className: "token maybe-class-name",
							children: "List"
						}),
						" ",
						t(e.span, {
							className: "token operator",
							children: "="
						}),
						" ",
						t(e.span, {
							className: "token function",
							children: "component"
						}),
						t(e.span, {
							className: "token punctuation",
							children: "("
						}),
						"\n  ",
						t(e.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n    ",
						t(e.span, {
							className: "token comment",
							children: "// $ 前缀视为 slots"
						}),
						"\n    $title",
						t(e.span, {
							className: "token operator",
							children: ":"
						}),
						" t",
						t(e.span, {
							className: "token punctuation",
							children: "."
						}),
						t(e.span, {
							className: "token property-access",
							children: "custom"
						}),
						t(e.span, {
							className: "token operator",
							children: "<"
						}),
						t(e.span, {
							className: "token maybe-class-name",
							children: "VNodeChild"
						}),
						t(e.span, {
							className: "token operator",
							children: ">"
						}),
						t(e.span, {
							className: "token punctuation",
							children: "("
						}),
						t(e.span, {
							className: "token punctuation",
							children: ")"
						}),
						t(e.span, {
							className: "token punctuation",
							children: "."
						}),
						t(e.span, {
							className: "token method function property-access",
							children: "optional"
						}),
						t(e.span, {
							className: "token punctuation",
							children: "("
						}),
						t(e.span, {
							className: "token punctuation",
							children: ")"
						}),
						t(e.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n    ",
						t(e.span, {
							className: "token comment",
							children: "// renderProp"
						}),
						"\n    $item",
						t(e.span, {
							className: "token operator",
							children: ":"
						}),
						" t",
						t(e.span, {
							className: "token punctuation",
							children: "."
						}),
						t(e.span, {
							className: "token property-access",
							children: "custom"
						}),
						t(e.span, {
							className: "token operator",
							children: "<"
						}),
						t(e.span, {
							className: "token punctuation",
							children: "("
						}),
						"option",
						t(e.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						t(e.span, {
							className: "token maybe-class-name",
							children: "Option"
						}),
						t(e.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						t(e.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						t(e.span, {
							className: "token maybe-class-name",
							children: "VNode"
						}),
						t(e.span, {
							className: "token operator",
							children: ">"
						}),
						t(e.span, {
							className: "token punctuation",
							children: "("
						}),
						t(e.span, {
							className: "token punctuation",
							children: ")"
						}),
						t(e.span, {
							className: "token punctuation",
							children: "."
						}),
						t(e.span, {
							className: "token method function property-access",
							children: "optional"
						}),
						t(e.span, {
							className: "token punctuation",
							children: "("
						}),
						t(e.span, {
							className: "token punctuation",
							children: ")"
						}),
						t(e.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n\n    $",
						t(e.span, {
							className: "token keyword module",
							children: "default"
						}),
						t(e.span, {
							className: "token operator",
							children: ":"
						}),
						" t",
						t(e.span, {
							className: "token punctuation",
							children: "."
						}),
						t(e.span, {
							className: "token property-access",
							children: "custom"
						}),
						t(e.span, {
							className: "token operator",
							children: "<"
						}),
						t(e.span, {
							className: "token maybe-class-name",
							children: "VNodeChild"
						}),
						t(e.span, {
							className: "token operator",
							children: ">"
						}),
						t(e.span, {
							className: "token punctuation",
							children: "("
						}),
						t(e.span, {
							className: "token punctuation",
							children: ")"
						}),
						t(e.span, {
							className: "token punctuation",
							children: "."
						}),
						t(e.span, {
							className: "token method function property-access",
							children: "optional"
						}),
						t(e.span, {
							className: "token punctuation",
							children: "("
						}),
						t(e.span, {
							className: "token punctuation",
							children: ")"
						}),
						t(e.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n\n    ",
						t(e.span, {
							className: "token comment",
							children: "// 以此避免多插槽时 children slots object 的写法, 且无类型约束，"
						}),
						"\n    ",
						t(e.span, {
							className: "token comment",
							children: "// {{ default: () => VNode, title: () => VNode, item: (option: Option) => VNode }}"
						}),
						"\n  ",
						t(e.span, {
							className: "token punctuation",
							children: "}"
						}),
						t(e.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n  ",
						t(e.span, {
							className: "token punctuation",
							children: "("
						}),
						t(e.span, {
							className: "token punctuation",
							children: "{"
						}),
						t(e.span, {
							className: "token punctuation",
							children: "}"
						}),
						t(e.span, {
							className: "token punctuation",
							children: ","
						}),
						" ",
						t(e.span, {
							className: "token punctuation",
							children: "{"
						}),
						" slots ",
						t(e.span, {
							className: "token punctuation",
							children: "}"
						}),
						t(e.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						t(e.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						"\n    ",
						t(e.span, {
							className: "token punctuation",
							children: "("
						}),
						t(e.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						t(e.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						t(e.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n      ",
						t(e.span, {
							className: "token keyword",
							children: "const"
						}),
						" options ",
						t(e.span, {
							className: "token operator",
							children: "="
						}),
						" ",
						t(e.span, {
							className: "token punctuation",
							children: "["
						}),
						"\n        ",
						t(e.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n          label",
						t(e.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						t(e.span, {
							className: "token string",
							children: "\"1\""
						}),
						t(e.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n          value",
						t(e.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						t(e.span, {
							className: "token string",
							children: "\"1\""
						}),
						t(e.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n        ",
						t(e.span, {
							className: "token punctuation",
							children: "}"
						}),
						t(e.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n        ",
						t(e.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n          label",
						t(e.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						t(e.span, {
							className: "token string",
							children: "\"2\""
						}),
						t(e.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n          value",
						t(e.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						t(e.span, {
							className: "token string",
							children: "\"2\""
						}),
						t(e.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n        ",
						t(e.span, {
							className: "token punctuation",
							children: "}"
						}),
						t(e.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n      ",
						t(e.span, {
							className: "token punctuation",
							children: "]"
						}),
						t(e.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n      ",
						t(e.span, {
							className: "token keyword control-flow",
							children: "return"
						}),
						" ",
						t(e.span, {
							className: "token punctuation",
							children: "("
						}),
						"\n        ",
						l(e.span, {
							className: "token tag",
							children: [l(e.span, {
								className: "token tag",
								children: [t(e.span, {
									className: "token punctuation",
									children: "<"
								}), "dl"]
							}), t(e.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						t(e.span, {
							className: "token plain-text",
							children: "\n          "
						}),
						l(e.span, {
							className: "token tag",
							children: [l(e.span, {
								className: "token tag",
								children: [t(e.span, {
									className: "token punctuation",
									children: "<"
								}), "dt"]
							}), t(e.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						t(e.span, {
							className: "token plain-text",
							children: "default"
						}),
						l(e.span, {
							className: "token tag",
							children: [l(e.span, {
								className: "token tag",
								children: [t(e.span, {
									className: "token punctuation",
									children: "</"
								}), "dt"]
							}), t(e.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						t(e.span, {
							className: "token plain-text",
							children: "\n          "
						}),
						l(e.span, {
							className: "token tag",
							children: [l(e.span, {
								className: "token tag",
								children: [t(e.span, {
									className: "token punctuation",
									children: "<"
								}), "dd"]
							}), t(e.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						t(e.span, {
							className: "token punctuation",
							children: "{"
						}),
						"slots",
						t(e.span, {
							className: "token punctuation",
							children: "."
						}),
						t(e.span, {
							className: "token keyword module",
							children: "default"
						}),
						t(e.span, {
							className: "token operator",
							children: "?."
						}),
						t(e.span, {
							className: "token punctuation",
							children: "("
						}),
						t(e.span, {
							className: "token punctuation",
							children: ")"
						}),
						t(e.span, {
							className: "token punctuation",
							children: "}"
						}),
						l(e.span, {
							className: "token tag",
							children: [l(e.span, {
								className: "token tag",
								children: [t(e.span, {
									className: "token punctuation",
									children: "</"
								}), "dd"]
							}), t(e.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						t(e.span, {
							className: "token plain-text",
							children: "\n          "
						}),
						l(e.span, {
							className: "token tag",
							children: [l(e.span, {
								className: "token tag",
								children: [t(e.span, {
									className: "token punctuation",
									children: "<"
								}), "dt"]
							}), t(e.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						t(e.span, {
							className: "token plain-text",
							children: "title"
						}),
						l(e.span, {
							className: "token tag",
							children: [l(e.span, {
								className: "token tag",
								children: [t(e.span, {
									className: "token punctuation",
									children: "</"
								}), "dt"]
							}), t(e.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						t(e.span, {
							className: "token plain-text",
							children: "\n          "
						}),
						l(e.span, {
							className: "token tag",
							children: [l(e.span, {
								className: "token tag",
								children: [t(e.span, {
									className: "token punctuation",
									children: "<"
								}), "dd"]
							}), t(e.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						t(e.span, {
							className: "token punctuation",
							children: "{"
						}),
						"slots",
						t(e.span, {
							className: "token punctuation",
							children: "."
						}),
						t(e.span, {
							className: "token property-access",
							children: "title"
						}),
						t(e.span, {
							className: "token operator",
							children: "?."
						}),
						t(e.span, {
							className: "token punctuation",
							children: "("
						}),
						t(e.span, {
							className: "token punctuation",
							children: ")"
						}),
						t(e.span, {
							className: "token punctuation",
							children: "}"
						}),
						l(e.span, {
							className: "token tag",
							children: [l(e.span, {
								className: "token tag",
								children: [t(e.span, {
									className: "token punctuation",
									children: "</"
								}), "dd"]
							}), t(e.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						t(e.span, {
							className: "token plain-text",
							children: "\n          "
						}),
						l(e.span, {
							className: "token tag",
							children: [l(e.span, {
								className: "token tag",
								children: [t(e.span, {
									className: "token punctuation",
									children: "<"
								}), "dt"]
							}), t(e.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						t(e.span, {
							className: "token plain-text",
							children: "item"
						}),
						l(e.span, {
							className: "token tag",
							children: [l(e.span, {
								className: "token tag",
								children: [t(e.span, {
									className: "token punctuation",
									children: "</"
								}), "dt"]
							}), t(e.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						t(e.span, {
							className: "token plain-text",
							children: "\n          "
						}),
						l(e.span, {
							className: "token tag",
							children: [l(e.span, {
								className: "token tag",
								children: [t(e.span, {
									className: "token punctuation",
									children: "<"
								}), "dd"]
							}), t(e.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						t(e.span, {
							className: "token punctuation",
							children: "{"
						}),
						"options",
						t(e.span, {
							className: "token punctuation",
							children: "."
						}),
						t(e.span, {
							className: "token method function property-access",
							children: "map"
						}),
						t(e.span, {
							className: "token punctuation",
							children: "("
						}),
						t(e.span, {
							className: "token punctuation",
							children: "("
						}),
						"option",
						t(e.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						t(e.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" slots",
						t(e.span, {
							className: "token punctuation",
							children: "."
						}),
						t(e.span, {
							className: "token property-access",
							children: "item"
						}),
						t(e.span, {
							className: "token operator",
							children: "?."
						}),
						t(e.span, {
							className: "token punctuation",
							children: "("
						}),
						"option",
						t(e.span, {
							className: "token punctuation",
							children: ")"
						}),
						t(e.span, {
							className: "token punctuation",
							children: ")"
						}),
						t(e.span, {
							className: "token punctuation",
							children: "}"
						}),
						l(e.span, {
							className: "token tag",
							children: [l(e.span, {
								className: "token tag",
								children: [t(e.span, {
									className: "token punctuation",
									children: "</"
								}), "dd"]
							}), t(e.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						t(e.span, {
							className: "token plain-text",
							children: "\n        "
						}),
						l(e.span, {
							className: "token tag",
							children: [l(e.span, {
								className: "token tag",
								children: [t(e.span, {
									className: "token punctuation",
									children: "</"
								}), "dl"]
							}), t(e.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						"\n      ",
						t(e.span, {
							className: "token punctuation",
							children: ")"
						}),
						t(e.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n    ",
						t(e.span, {
							className: "token punctuation",
							children: "}"
						}),
						t(e.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n",
						t(e.span, {
							className: "token punctuation",
							children: ")"
						}),
						t(e.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n",
						t(e.span, {
							className: "token keyword module",
							children: "export"
						}),
						" ",
						t(e.span, {
							className: "token keyword module",
							children: "default"
						}),
						" ",
						t(e.span, {
							className: "token function",
							children: "component"
						}),
						t(e.span, {
							className: "token punctuation",
							children: "("
						}),
						t(e.span, {
							className: "token punctuation",
							children: "("
						}),
						t(e.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						t(e.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						t(e.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n  ",
						t(e.span, {
							className: "token keyword",
							children: "const"
						}),
						" inputValue ",
						t(e.span, {
							className: "token operator",
							children: "="
						}),
						" ",
						t(e.span, {
							className: "token function",
							children: "ref"
						}),
						t(e.span, {
							className: "token punctuation",
							children: "("
						}),
						t(e.span, {
							className: "token string",
							children: "\"\""
						}),
						t(e.span, {
							className: "token punctuation",
							children: ")"
						}),
						t(e.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n  ",
						t(e.span, {
							className: "token keyword control-flow",
							children: "return"
						}),
						" ",
						t(e.span, {
							className: "token punctuation",
							children: "("
						}),
						t(e.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						t(e.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						t(e.span, {
							className: "token punctuation",
							children: "("
						}),
						"\n    ",
						l(e.span, {
							className: "token tag",
							children: [
								l(e.span, {
									className: "token tag",
									children: [t(e.span, {
										className: "token punctuation",
										children: "<"
									}), t(e.span, {
										className: "token class-name",
										children: "List"
									})]
								}),
								"\n      ",
								t(e.span, {
									className: "token attr-name",
									children: "$title"
								}),
								l(e.span, {
									className: "token script language-javascript",
									children: [
										t(e.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										t(e.span, {
											className: "token punctuation",
											children: "{"
										}),
										l(e.span, {
											className: "token tag",
											children: [l(e.span, {
												className: "token tag",
												children: [t(e.span, {
													className: "token punctuation",
													children: "<"
												}), "div"]
											}), t(e.span, {
												className: "token punctuation",
												children: ">"
											})]
										}),
										t(e.span, {
											className: "token plain-text",
											children: "Inputted: "
										}),
										t(e.span, {
											className: "token punctuation",
											children: "{"
										}),
										"inputValue",
										t(e.span, {
											className: "token punctuation",
											children: "."
										}),
										t(e.span, {
											className: "token property-access",
											children: "value"
										}),
										t(e.span, {
											className: "token punctuation",
											children: "}"
										}),
										l(e.span, {
											className: "token tag",
											children: [l(e.span, {
												className: "token tag",
												children: [t(e.span, {
													className: "token punctuation",
													children: "</"
												}), "div"]
											}), t(e.span, {
												className: "token punctuation",
												children: ">"
											})]
										}),
										t(e.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n      ",
								t(e.span, {
									className: "token attr-name",
									children: "$item"
								}),
								l(e.span, {
									className: "token script language-javascript",
									children: [
										t(e.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										t(e.span, {
											className: "token punctuation",
											children: "{"
										}),
										t(e.span, {
											className: "token punctuation",
											children: "("
										}),
										"o",
										t(e.span, {
											className: "token punctuation",
											children: ")"
										}),
										" ",
										t(e.span, {
											className: "token arrow operator",
											children: "=>"
										}),
										" ",
										l(e.span, {
											className: "token tag",
											children: [l(e.span, {
												className: "token tag",
												children: [t(e.span, {
													className: "token punctuation",
													children: "<"
												}), "div"]
											}), t(e.span, {
												className: "token punctuation",
												children: ">"
											})]
										}),
										t(e.span, {
											className: "token punctuation",
											children: "{"
										}),
										"o",
										t(e.span, {
											className: "token punctuation",
											children: "."
										}),
										t(e.span, {
											className: "token property-access",
											children: "label"
										}),
										t(e.span, {
											className: "token punctuation",
											children: "}"
										}),
										l(e.span, {
											className: "token tag",
											children: [l(e.span, {
												className: "token tag",
												children: [t(e.span, {
													className: "token punctuation",
													children: "</"
												}), "div"]
											}), t(e.span, {
												className: "token punctuation",
												children: ">"
											})]
										}),
										t(e.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n    ",
								t(e.span, {
									className: "token punctuation",
									children: ">"
								})
							]
						}),
						t(e.span, {
							className: "token plain-text",
							children: "\n      "
						}),
						l(e.span, {
							className: "token tag",
							children: [
								l(e.span, {
									className: "token tag",
									children: [t(e.span, {
										className: "token punctuation",
										children: "<"
									}), t(e.span, {
										className: "token class-name",
										children: "TextInput"
									})]
								}),
								"\n        ",
								t(e.span, {
									className: "token attr-name",
									children: "type"
								}),
								l(e.span, {
									className: "token script language-javascript",
									children: [
										t(e.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										t(e.span, {
											className: "token punctuation",
											children: "{"
										}),
										t(e.span, {
											className: "token string",
											children: "\"text\""
										}),
										t(e.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n        ",
								t(e.span, {
									className: "token attr-name",
									children: "onValueChange"
								}),
								l(e.span, {
									className: "token script language-javascript",
									children: [
										t(e.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										t(e.span, {
											className: "token punctuation",
											children: "{"
										}),
										t(e.span, {
											className: "token punctuation",
											children: "("
										}),
										"value",
										t(e.span, {
											className: "token punctuation",
											children: ")"
										}),
										" ",
										t(e.span, {
											className: "token arrow operator",
											children: "=>"
										}),
										" ",
										t(e.span, {
											className: "token punctuation",
											children: "{"
										}),
										"\n          inputValue",
										t(e.span, {
											className: "token punctuation",
											children: "."
										}),
										t(e.span, {
											className: "token property-access",
											children: "value"
										}),
										" ",
										t(e.span, {
											className: "token operator",
											children: "="
										}),
										" value",
										t(e.span, {
											className: "token punctuation",
											children: ";"
										}),
										"\n        ",
										t(e.span, {
											className: "token punctuation",
											children: "}"
										}),
										t(e.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n      ",
								t(e.span, {
									className: "token punctuation",
									children: "/>"
								})
							]
						}),
						t(e.span, {
							className: "token plain-text",
							children: "\n    "
						}),
						l(e.span, {
							className: "token tag",
							children: [l(e.span, {
								className: "token tag",
								children: [t(e.span, {
									className: "token punctuation",
									children: "</"
								}), t(e.span, {
									className: "token class-name",
									children: "List"
								})]
							}), t(e.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						"\n  ",
						t(e.span, {
							className: "token punctuation",
							children: ")"
						}),
						t(e.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						t(e.span, {
							className: "token punctuation",
							children: "}"
						}),
						t(e.span, {
							className: "token punctuation",
							children: ")"
						}),
						t(e.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n"
					]
				})
			})]
		})
	] });
}
function k(n = {}) {
	let { wrapper: a } = n.components || {};
	return a ? t(a, {
		...n,
		children: t(h, { ...n })
	}) : h(n);
}
var N = s(() => () => a(k, { components: {
	codeblock4b227777: r,
	codeblock4a44dc15: m
} }));
export { N as default };
