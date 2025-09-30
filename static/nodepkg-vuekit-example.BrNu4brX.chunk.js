import { C as n, K as a, Q as e, V as s, Z as c, a as t, c as l, m as o, o as i, r as p, rt as r, s as u, u as d, w as m } from "./lib-nodepkg-vuekit.Dng4O0gc.chunk.js";
import { M as h } from "./index.DvdiqX_t.entry.js";
var k = p((a, { emit: e }) => {
	var s;
	let c = l(a.value ?? "1");
	return o(c, (void 0 === s && (s = h), m(function(a, e) {
		var c = null, t = null, l = null, o = function() {
			if (c) {
				c.unsubscribe(), c = null;
				var n = t;
				t = null, e.next(n);
			}
		};
		function i() {
			var n = l + 300, a = s.now();
			if (a < n) {
				c = this.schedule(void 0, n - a), e.add(c);
				return;
			}
			o();
		}
		a.subscribe(n(e, function(n) {
			t = n, l = s.now(), c || (c = s.schedule(i, 300), e.add(c));
		}, function() {
			o(), e.complete();
		}, void 0, function() {
			t = c = null;
		}));
	})), d((n) => e("value-change", n))), o(c, t((n) => i("input", {
		value: n,
		onInput: (n) => {
			c.value = n.target.value;
		}
	})));
}, {
	displayName: "TextDebounceInput",
	props: ["value"],
	emits: ["value-change"]
}), N = s(() => {
	let n = r("default");
	return () => i("div", { children: u("div", {
		style: {
			display: "flex",
			gap: "1rem"
		},
		children: [i(k, {
			value: n.value,
			onValueChange: (a) => {
				n.value = a;
			}
		}), u("div", { children: ["Inputted: ", n.value] })]
	}) });
});
function v(n) {
	let e = {
		a: "a",
		code: "code",
		codeblockd4735e3a: "codeblockd4735e3a",
		div: "div",
		p: "p",
		pre: "pre",
		span: "span",
		...n.components
	};
	return u(a, { children: [
		u(e.p, { children: [
			"和 ",
			i(e.a, {
				href: "https://rxjs.dev/",
				children: "rxjs"
			}),
			" 集成"
		] }),
		"\n",
		u(e.div, {
			"data-example": "",
			children: [i(e.div, {
				"data-example-container": "",
				children: i(e.codeblockd4735e3a, {})
			}), i(e.pre, {
				className: "language-tsx",
				children: u(e.code, {
					className: "language-tsx",
					children: [
						i(e.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						u(e.span, {
							className: "token imports",
							children: [
								i(e.span, {
									className: "token punctuation",
									children: "{"
								}),
								"\n  component",
								i(e.span, {
									className: "token punctuation",
									children: ","
								}),
								"\n  component$",
								i(e.span, {
									className: "token punctuation",
									children: ","
								}),
								"\n  observableRef",
								i(e.span, {
									className: "token punctuation",
									children: ","
								}),
								"\n  render",
								i(e.span, {
									className: "token punctuation",
									children: ","
								}),
								"\n  rx",
								i(e.span, {
									className: "token punctuation",
									children: ","
								}),
								"\n  subscribeUntilUnmount",
								i(e.span, {
									className: "token punctuation",
									children: ","
								}),
								"\n",
								i(e.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						i(e.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						i(e.span, {
							className: "token string",
							children: "\"@innoai-tech/vuekit\""
						}),
						i(e.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						i(e.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						u(e.span, {
							className: "token imports",
							children: [
								i(e.span, {
									className: "token punctuation",
									children: "{"
								}),
								" ref ",
								i(e.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						i(e.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						i(e.span, {
							className: "token string",
							children: "\"vue\""
						}),
						i(e.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						i(e.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						u(e.span, {
							className: "token imports",
							children: [
								i(e.span, {
									className: "token punctuation",
									children: "{"
								}),
								" debounceTime ",
								i(e.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						i(e.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						i(e.span, {
							className: "token string",
							children: "\"rxjs\""
						}),
						i(e.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n",
						i(e.span, {
							className: "token keyword module",
							children: "export"
						}),
						" ",
						i(e.span, {
							className: "token keyword",
							children: "const"
						}),
						" ",
						i(e.span, {
							className: "token maybe-class-name",
							children: "TextDebounceInput"
						}),
						" ",
						i(e.span, {
							className: "token operator",
							children: "="
						}),
						" component$",
						i(e.span, {
							className: "token operator",
							children: "<"
						}),
						i(e.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n  value",
						i(e.span, {
							className: "token operator",
							children: "?"
						}),
						i(e.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						i(e.span, {
							className: "token builtin",
							children: "string"
						}),
						i(e.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n  onValueChange",
						i(e.span, {
							className: "token operator",
							children: "?"
						}),
						i(e.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						i(e.span, {
							className: "token punctuation",
							children: "("
						}),
						"v",
						i(e.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						i(e.span, {
							className: "token builtin",
							children: "string"
						}),
						i(e.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						i(e.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						i(e.span, {
							className: "token keyword",
							children: "void"
						}),
						i(e.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						i(e.span, {
							className: "token punctuation",
							children: "}"
						}),
						i(e.span, {
							className: "token operator",
							children: ">"
						}),
						i(e.span, {
							className: "token punctuation",
							children: "("
						}),
						i(e.span, {
							className: "token punctuation",
							children: "("
						}),
						"props",
						i(e.span, {
							className: "token punctuation",
							children: ","
						}),
						" ",
						i(e.span, {
							className: "token punctuation",
							children: "{"
						}),
						" emit ",
						i(e.span, {
							className: "token punctuation",
							children: "}"
						}),
						i(e.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						i(e.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						i(e.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n  ",
						i(e.span, {
							className: "token keyword",
							children: "const"
						}),
						" value$ ",
						i(e.span, {
							className: "token operator",
							children: "="
						}),
						" ",
						i(e.span, {
							className: "token function",
							children: "observableRef"
						}),
						i(e.span, {
							className: "token punctuation",
							children: "("
						}),
						"props",
						i(e.span, {
							className: "token punctuation",
							children: "."
						}),
						i(e.span, {
							className: "token property-access",
							children: "value"
						}),
						" ",
						i(e.span, {
							className: "token operator",
							children: "??"
						}),
						" ",
						i(e.span, {
							className: "token string",
							children: "\"1\""
						}),
						i(e.span, {
							className: "token punctuation",
							children: ")"
						}),
						i(e.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n  ",
						i(e.span, {
							className: "token function",
							children: "rx"
						}),
						i(e.span, {
							className: "token punctuation",
							children: "("
						}),
						"\n    value$",
						i(e.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n    ",
						i(e.span, {
							className: "token function",
							children: "debounceTime"
						}),
						i(e.span, {
							className: "token punctuation",
							children: "("
						}),
						i(e.span, {
							className: "token number",
							children: "300"
						}),
						i(e.span, {
							className: "token punctuation",
							children: ")"
						}),
						i(e.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n    ",
						i(e.span, {
							className: "token function",
							children: "subscribeUntilUnmount"
						}),
						i(e.span, {
							className: "token punctuation",
							children: "("
						}),
						i(e.span, {
							className: "token punctuation",
							children: "("
						}),
						"v",
						i(e.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						i(e.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						i(e.span, {
							className: "token function",
							children: "emit"
						}),
						i(e.span, {
							className: "token punctuation",
							children: "("
						}),
						i(e.span, {
							className: "token string",
							children: "\"value-change\""
						}),
						i(e.span, {
							className: "token punctuation",
							children: ","
						}),
						" v",
						i(e.span, {
							className: "token punctuation",
							children: ")"
						}),
						i(e.span, {
							className: "token punctuation",
							children: ")"
						}),
						i(e.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n  ",
						i(e.span, {
							className: "token punctuation",
							children: ")"
						}),
						i(e.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n  ",
						i(e.span, {
							className: "token keyword control-flow",
							children: "return"
						}),
						" ",
						i(e.span, {
							className: "token function",
							children: "rx"
						}),
						i(e.span, {
							className: "token punctuation",
							children: "("
						}),
						"\n    value$",
						i(e.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n    ",
						i(e.span, {
							className: "token function",
							children: "render"
						}),
						i(e.span, {
							className: "token punctuation",
							children: "("
						}),
						i(e.span, {
							className: "token punctuation",
							children: "("
						}),
						"v",
						i(e.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						i(e.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						i(e.span, {
							className: "token punctuation",
							children: "("
						}),
						"\n      ",
						u(e.span, {
							className: "token tag",
							children: [
								u(e.span, {
									className: "token tag",
									children: [i(e.span, {
										className: "token punctuation",
										children: "<"
									}), "input"]
								}),
								"\n        ",
								i(e.span, {
									className: "token attr-name",
									children: "value"
								}),
								u(e.span, {
									className: "token script language-javascript",
									children: [
										i(e.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										i(e.span, {
											className: "token punctuation",
											children: "{"
										}),
										"v",
										i(e.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n        ",
								i(e.span, {
									className: "token attr-name",
									children: "onInput"
								}),
								u(e.span, {
									className: "token script language-javascript",
									children: [
										i(e.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										i(e.span, {
											className: "token punctuation",
											children: "{"
										}),
										i(e.span, {
											className: "token punctuation",
											children: "("
										}),
										"e",
										i(e.span, {
											className: "token punctuation",
											children: ")"
										}),
										" ",
										i(e.span, {
											className: "token arrow operator",
											children: "=>"
										}),
										" ",
										i(e.span, {
											className: "token punctuation",
											children: "{"
										}),
										"\n          value$",
										i(e.span, {
											className: "token punctuation",
											children: "."
										}),
										i(e.span, {
											className: "token property-access",
											children: "value"
										}),
										" ",
										i(e.span, {
											className: "token operator",
											children: "="
										}),
										" ",
										i(e.span, {
											className: "token punctuation",
											children: "("
										}),
										"e",
										i(e.span, {
											className: "token punctuation",
											children: "."
										}),
										i(e.span, {
											className: "token property-access",
											children: "target"
										}),
										" ",
										i(e.span, {
											className: "token keyword module",
											children: "as"
										}),
										" ",
										i(e.span, {
											className: "token maybe-class-name",
											children: "HTMLInputElement"
										}),
										i(e.span, {
											className: "token punctuation",
											children: ")"
										}),
										i(e.span, {
											className: "token punctuation",
											children: "."
										}),
										i(e.span, {
											className: "token property-access",
											children: "value"
										}),
										i(e.span, {
											className: "token punctuation",
											children: ";"
										}),
										"\n        ",
										i(e.span, {
											className: "token punctuation",
											children: "}"
										}),
										i(e.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n      ",
								i(e.span, {
									className: "token punctuation",
									children: "/>"
								})
							]
						}),
						"\n    ",
						i(e.span, {
							className: "token punctuation",
							children: ")"
						}),
						i(e.span, {
							className: "token punctuation",
							children: ")"
						}),
						i(e.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n  ",
						i(e.span, {
							className: "token punctuation",
							children: ")"
						}),
						i(e.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						i(e.span, {
							className: "token punctuation",
							children: "}"
						}),
						i(e.span, {
							className: "token punctuation",
							children: ")"
						}),
						i(e.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n",
						i(e.span, {
							className: "token keyword module",
							children: "export"
						}),
						" ",
						i(e.span, {
							className: "token keyword module",
							children: "default"
						}),
						" ",
						i(e.span, {
							className: "token function",
							children: "component"
						}),
						i(e.span, {
							className: "token punctuation",
							children: "("
						}),
						i(e.span, {
							className: "token punctuation",
							children: "("
						}),
						i(e.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						i(e.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						i(e.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n  ",
						i(e.span, {
							className: "token keyword",
							children: "const"
						}),
						" inputValue ",
						i(e.span, {
							className: "token operator",
							children: "="
						}),
						" ",
						i(e.span, {
							className: "token function",
							children: "ref"
						}),
						i(e.span, {
							className: "token punctuation",
							children: "("
						}),
						i(e.span, {
							className: "token string",
							children: "\"default\""
						}),
						i(e.span, {
							className: "token punctuation",
							children: ")"
						}),
						i(e.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n  ",
						i(e.span, {
							className: "token keyword control-flow",
							children: "return"
						}),
						" ",
						i(e.span, {
							className: "token punctuation",
							children: "("
						}),
						i(e.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						i(e.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						i(e.span, {
							className: "token punctuation",
							children: "("
						}),
						"\n    ",
						u(e.span, {
							className: "token tag",
							children: [u(e.span, {
								className: "token tag",
								children: [i(e.span, {
									className: "token punctuation",
									children: "<"
								}), "div"]
							}), i(e.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						i(e.span, {
							className: "token plain-text",
							children: "\n      "
						}),
						u(e.span, {
							className: "token tag",
							children: [
								u(e.span, {
									className: "token tag",
									children: [i(e.span, {
										className: "token punctuation",
										children: "<"
									}), "div"]
								}),
								" ",
								i(e.span, {
									className: "token attr-name",
									children: "style"
								}),
								u(e.span, {
									className: "token script language-javascript",
									children: [
										i(e.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										i(e.span, {
											className: "token punctuation",
											children: "{"
										}),
										i(e.span, {
											className: "token punctuation",
											children: "{"
										}),
										" display",
										i(e.span, {
											className: "token operator",
											children: ":"
										}),
										" ",
										i(e.span, {
											className: "token string",
											children: "\"flex\""
										}),
										i(e.span, {
											className: "token punctuation",
											children: ","
										}),
										" gap",
										i(e.span, {
											className: "token operator",
											children: ":"
										}),
										" ",
										i(e.span, {
											className: "token string",
											children: "\"1rem\""
										}),
										" ",
										i(e.span, {
											className: "token punctuation",
											children: "}"
										}),
										i(e.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								i(e.span, {
									className: "token punctuation",
									children: ">"
								})
							]
						}),
						i(e.span, {
							className: "token plain-text",
							children: "\n        "
						}),
						u(e.span, {
							className: "token tag",
							children: [
								u(e.span, {
									className: "token tag",
									children: [i(e.span, {
										className: "token punctuation",
										children: "<"
									}), i(e.span, {
										className: "token class-name",
										children: "TextDebounceInput"
									})]
								}),
								"\n          ",
								i(e.span, {
									className: "token attr-name",
									children: "value"
								}),
								u(e.span, {
									className: "token script language-javascript",
									children: [
										i(e.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										i(e.span, {
											className: "token punctuation",
											children: "{"
										}),
										"inputValue",
										i(e.span, {
											className: "token punctuation",
											children: "."
										}),
										i(e.span, {
											className: "token property-access",
											children: "value"
										}),
										i(e.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n          ",
								i(e.span, {
									className: "token attr-name",
									children: "onValueChange"
								}),
								u(e.span, {
									className: "token script language-javascript",
									children: [
										i(e.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										i(e.span, {
											className: "token punctuation",
											children: "{"
										}),
										i(e.span, {
											className: "token punctuation",
											children: "("
										}),
										"value",
										i(e.span, {
											className: "token punctuation",
											children: ")"
										}),
										" ",
										i(e.span, {
											className: "token arrow operator",
											children: "=>"
										}),
										" ",
										i(e.span, {
											className: "token punctuation",
											children: "{"
										}),
										"\n            inputValue",
										i(e.span, {
											className: "token punctuation",
											children: "."
										}),
										i(e.span, {
											className: "token property-access",
											children: "value"
										}),
										" ",
										i(e.span, {
											className: "token operator",
											children: "="
										}),
										" value",
										i(e.span, {
											className: "token punctuation",
											children: ";"
										}),
										"\n          ",
										i(e.span, {
											className: "token punctuation",
											children: "}"
										}),
										i(e.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n        ",
								i(e.span, {
									className: "token punctuation",
									children: "/>"
								})
							]
						}),
						i(e.span, {
							className: "token plain-text",
							children: "\n        "
						}),
						u(e.span, {
							className: "token tag",
							children: [u(e.span, {
								className: "token tag",
								children: [i(e.span, {
									className: "token punctuation",
									children: "<"
								}), "div"]
							}), i(e.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						i(e.span, {
							className: "token plain-text",
							children: "Inputted: "
						}),
						i(e.span, {
							className: "token punctuation",
							children: "{"
						}),
						"inputValue",
						i(e.span, {
							className: "token punctuation",
							children: "."
						}),
						i(e.span, {
							className: "token property-access",
							children: "value"
						}),
						i(e.span, {
							className: "token punctuation",
							children: "}"
						}),
						u(e.span, {
							className: "token tag",
							children: [u(e.span, {
								className: "token tag",
								children: [i(e.span, {
									className: "token punctuation",
									children: "</"
								}), "div"]
							}), i(e.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						i(e.span, {
							className: "token plain-text",
							children: "\n      "
						}),
						u(e.span, {
							className: "token tag",
							children: [u(e.span, {
								className: "token tag",
								children: [i(e.span, {
									className: "token punctuation",
									children: "</"
								}), "div"]
							}), i(e.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						i(e.span, {
							className: "token plain-text",
							children: "\n    "
						}),
						u(e.span, {
							className: "token tag",
							children: [u(e.span, {
								className: "token tag",
								children: [i(e.span, {
									className: "token punctuation",
									children: "</"
								}), "div"]
							}), i(e.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						"\n  ",
						i(e.span, {
							className: "token punctuation",
							children: ")"
						}),
						i(e.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						i(e.span, {
							className: "token punctuation",
							children: "}"
						}),
						i(e.span, {
							className: "token punctuation",
							children: ")"
						}),
						i(e.span, {
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
function g(n = {}) {
	let { wrapper: a } = n.components || {};
	return a ? i(a, {
		...n,
		children: i(v, { ...n })
	}) : v(n);
}
var f = c(() => () => e(g, { components: { codeblockd4735e3a: N } }));
export { f as default };
