import { K as n, Q as a, V as e, Z as s, o as c, rt as t, s as l } from "./lib-nodepkg-vuekit.Dng4O0gc.chunk.js";
import { f as o, n as p, p as i, s as r, t as u } from "./lib-nodepkg-vueuikit.BAbl8dOa.chunk.js";
var m = e(() => {
	let n = t(!1), a = p({ apply({ elements: n, rects: a }) {
		Object.assign(n.floating.style, { width: `${a.reference.width}px` });
	} });
	return () => c(u, {
		isOpen: n.value,
		onClickOutside: () => n.value = !1,
		placement: "bottom-start",
		modifiers: [a],
		$content: l(r, {
			sx: { containerStyle: "sys.on-surface" },
			children: [
				"Popper ",
				`${n.value}`,
				"!"
			]
		}),
		children: c(r, {
			sx: { p: 4 },
			component: "button",
			onClick: () => n.value = !n.value,
			children: "Click Trigger Popper"
		})
	});
}), d = e(() => {
	let n = t(!1);
	return () => c(u, {
		isOpen: n.value,
		$content: c(r, {
			sx: { containerStyle: "sys.on-surface" },
			children: "Popper Content!"
		}),
		children: c(r, {
			component: "button",
			sx: { p: 4 },
			onMouseover: () => n.value = !0,
			onMouseout: () => n.value = !1,
			children: "Popper Trigger"
		})
	});
});
let k = o({
	from: { opacity: 0 },
	to: { opacity: 1 },
	duration: i.duration.md1,
	easing: i.easing.standard.accelerate
}, {
	from: { opacity: 1 },
	to: { opacity: 0 },
	duration: i.duration.sm4,
	easing: i.easing.standard.decelerate
});
var h = e(() => {
	let n = t(!0);
	return () => c(u, {
		isOpen: n.value,
		$transition: ({ content: n }) => c(k, { children: n }),
		$content: l(r, {
			sx: {
				containerStyle: "sys.on-surface",
				shadow: "2",
				py: 2,
				px: 4,
				rounded: "sm"
			},
			children: [
				"Popper ",
				`${n.value}`,
				"!"
			]
		}),
		children: c(r, {
			sx: { p: 4 },
			component: "button",
			onMouseover: () => n.value = !0,
			onMouseout: () => n.value = !1,
			children: "Animated Popper"
		})
	});
});
function N(a) {
	let e = {
		code: "code",
		codeblock4a44dc15: "codeblock4a44dc15",
		codeblockd4735e3a: "codeblockd4735e3a",
		codeblocke7f6c011: "codeblocke7f6c011",
		div: "div",
		h2: "h2",
		pre: "pre",
		span: "span",
		...a.components
	};
	return l(n, { children: [
		c(e.h2, { children: "Normal Popper" }),
		"\n",
		l(e.div, {
			"data-example": "",
			children: [c(e.div, {
				"data-example-container": "",
				children: c(e.codeblockd4735e3a, {})
			}), c(e.pre, {
				className: "language-tsx",
				children: l(e.code, {
					className: "language-tsx",
					children: [
						c(e.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						l(e.span, {
							className: "token imports",
							children: [
								c(e.span, {
									className: "token punctuation",
									children: "{"
								}),
								" component ",
								c(e.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						c(e.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						c(e.span, {
							className: "token string",
							children: "\"@innoai-tech/vuekit\""
						}),
						c(e.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						c(e.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						l(e.span, {
							className: "token imports",
							children: [
								c(e.span, {
									className: "token punctuation",
									children: "{"
								}),
								" ",
								c(e.span, {
									className: "token maybe-class-name",
									children: "Box"
								}),
								c(e.span, {
									className: "token punctuation",
									children: ","
								}),
								" ",
								c(e.span, {
									className: "token maybe-class-name",
									children: "Popper"
								}),
								" ",
								c(e.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						c(e.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						c(e.span, {
							className: "token string",
							children: "\"@innoai-tech/vueuikit\""
						}),
						c(e.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						c(e.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						l(e.span, {
							className: "token imports",
							children: [
								c(e.span, {
									className: "token punctuation",
									children: "{"
								}),
								" size ",
								c(e.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						c(e.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						c(e.span, {
							className: "token string",
							children: "\"@floating-ui/dom\""
						}),
						c(e.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						c(e.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						l(e.span, {
							className: "token imports",
							children: [
								c(e.span, {
									className: "token punctuation",
									children: "{"
								}),
								" ref ",
								c(e.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						c(e.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						c(e.span, {
							className: "token string",
							children: "\"vue\""
						}),
						c(e.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n",
						c(e.span, {
							className: "token keyword module",
							children: "export"
						}),
						" ",
						c(e.span, {
							className: "token keyword module",
							children: "default"
						}),
						" ",
						c(e.span, {
							className: "token function",
							children: "component"
						}),
						c(e.span, {
							className: "token punctuation",
							children: "("
						}),
						c(e.span, {
							className: "token punctuation",
							children: "("
						}),
						c(e.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						c(e.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						c(e.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n  ",
						c(e.span, {
							className: "token keyword",
							children: "const"
						}),
						" isOpen ",
						c(e.span, {
							className: "token operator",
							children: "="
						}),
						" ",
						c(e.span, {
							className: "token function",
							children: "ref"
						}),
						c(e.span, {
							className: "token punctuation",
							children: "("
						}),
						c(e.span, {
							className: "token boolean",
							children: "false"
						}),
						c(e.span, {
							className: "token punctuation",
							children: ")"
						}),
						c(e.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n  ",
						c(e.span, {
							className: "token keyword",
							children: "const"
						}),
						" sameWidth ",
						c(e.span, {
							className: "token operator",
							children: "="
						}),
						" ",
						c(e.span, {
							className: "token function",
							children: "size"
						}),
						c(e.span, {
							className: "token punctuation",
							children: "("
						}),
						c(e.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n    ",
						c(e.span, {
							className: "token function",
							children: "apply"
						}),
						c(e.span, {
							className: "token punctuation",
							children: "("
						}),
						c(e.span, {
							className: "token punctuation",
							children: "{"
						}),
						" elements",
						c(e.span, {
							className: "token punctuation",
							children: ","
						}),
						" rects ",
						c(e.span, {
							className: "token punctuation",
							children: "}"
						}),
						c(e.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						c(e.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n      ",
						c(e.span, {
							className: "token known-class-name class-name",
							children: "Object"
						}),
						c(e.span, {
							className: "token punctuation",
							children: "."
						}),
						c(e.span, {
							className: "token method function property-access",
							children: "assign"
						}),
						c(e.span, {
							className: "token punctuation",
							children: "("
						}),
						"elements",
						c(e.span, {
							className: "token punctuation",
							children: "."
						}),
						c(e.span, {
							className: "token property-access",
							children: "floating"
						}),
						c(e.span, {
							className: "token punctuation",
							children: "."
						}),
						c(e.span, {
							className: "token property-access",
							children: "style"
						}),
						c(e.span, {
							className: "token punctuation",
							children: ","
						}),
						" ",
						c(e.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n        width",
						c(e.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						l(e.span, {
							className: "token template-string",
							children: [
								c(e.span, {
									className: "token template-punctuation string",
									children: "`"
								}),
								l(e.span, {
									className: "token interpolation",
									children: [
										c(e.span, {
											className: "token interpolation-punctuation punctuation",
											children: "${"
										}),
										"rects",
										c(e.span, {
											className: "token punctuation",
											children: "."
										}),
										c(e.span, {
											className: "token property-access",
											children: "reference"
										}),
										c(e.span, {
											className: "token punctuation",
											children: "."
										}),
										c(e.span, {
											className: "token property-access",
											children: "width"
										}),
										c(e.span, {
											className: "token interpolation-punctuation punctuation",
											children: "}"
										})
									]
								}),
								c(e.span, {
									className: "token string",
									children: "px"
								}),
								c(e.span, {
									className: "token template-punctuation string",
									children: "`"
								})
							]
						}),
						c(e.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n      ",
						c(e.span, {
							className: "token punctuation",
							children: "}"
						}),
						c(e.span, {
							className: "token punctuation",
							children: ")"
						}),
						c(e.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n    ",
						c(e.span, {
							className: "token punctuation",
							children: "}"
						}),
						c(e.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n  ",
						c(e.span, {
							className: "token punctuation",
							children: "}"
						}),
						c(e.span, {
							className: "token punctuation",
							children: ")"
						}),
						c(e.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n  ",
						c(e.span, {
							className: "token keyword control-flow",
							children: "return"
						}),
						" ",
						c(e.span, {
							className: "token punctuation",
							children: "("
						}),
						c(e.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						c(e.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						c(e.span, {
							className: "token punctuation",
							children: "("
						}),
						"\n    ",
						l(e.span, {
							className: "token tag",
							children: [
								l(e.span, {
									className: "token tag",
									children: [c(e.span, {
										className: "token punctuation",
										children: "<"
									}), c(e.span, {
										className: "token class-name",
										children: "Popper"
									})]
								}),
								"\n      ",
								c(e.span, {
									className: "token attr-name",
									children: "isOpen"
								}),
								l(e.span, {
									className: "token script language-javascript",
									children: [
										c(e.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										c(e.span, {
											className: "token punctuation",
											children: "{"
										}),
										"isOpen",
										c(e.span, {
											className: "token punctuation",
											children: "."
										}),
										c(e.span, {
											className: "token property-access",
											children: "value"
										}),
										c(e.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n      ",
								c(e.span, {
									className: "token attr-name",
									children: "onClickOutside"
								}),
								l(e.span, {
									className: "token script language-javascript",
									children: [
										c(e.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										c(e.span, {
											className: "token punctuation",
											children: "{"
										}),
										c(e.span, {
											className: "token punctuation",
											children: "("
										}),
										c(e.span, {
											className: "token punctuation",
											children: ")"
										}),
										" ",
										c(e.span, {
											className: "token arrow operator",
											children: "=>"
										}),
										" ",
										c(e.span, {
											className: "token punctuation",
											children: "("
										}),
										"isOpen",
										c(e.span, {
											className: "token punctuation",
											children: "."
										}),
										c(e.span, {
											className: "token property-access",
											children: "value"
										}),
										" ",
										c(e.span, {
											className: "token operator",
											children: "="
										}),
										" ",
										c(e.span, {
											className: "token boolean",
											children: "false"
										}),
										c(e.span, {
											className: "token punctuation",
											children: ")"
										}),
										c(e.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n      ",
								c(e.span, {
									className: "token attr-name",
									children: "placement"
								}),
								l(e.span, {
									className: "token script language-javascript",
									children: [
										c(e.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										c(e.span, {
											className: "token punctuation",
											children: "{"
										}),
										c(e.span, {
											className: "token string",
											children: "\"bottom-start\""
										}),
										c(e.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n      ",
								c(e.span, {
									className: "token attr-name",
									children: "modifiers"
								}),
								l(e.span, {
									className: "token script language-javascript",
									children: [
										c(e.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										c(e.span, {
											className: "token punctuation",
											children: "{"
										}),
										c(e.span, {
											className: "token punctuation",
											children: "["
										}),
										"sameWidth",
										c(e.span, {
											className: "token punctuation",
											children: "]"
										}),
										c(e.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n      ",
								c(e.span, {
									className: "token attr-name",
									children: "$content"
								}),
								l(e.span, {
									className: "token script language-javascript",
									children: [
										c(e.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										c(e.span, {
											className: "token punctuation",
											children: "{"
										}),
										"\n        ",
										l(e.span, {
											className: "token tag",
											children: [
												l(e.span, {
													className: "token tag",
													children: [c(e.span, {
														className: "token punctuation",
														children: "<"
													}), c(e.span, {
														className: "token class-name",
														children: "Box"
													})]
												}),
												" ",
												c(e.span, {
													className: "token attr-name",
													children: "sx"
												}),
												l(e.span, {
													className: "token script language-javascript",
													children: [
														c(e.span, {
															className: "token script-punctuation punctuation",
															children: "="
														}),
														c(e.span, {
															className: "token punctuation",
															children: "{"
														}),
														c(e.span, {
															className: "token punctuation",
															children: "{"
														}),
														" containerStyle",
														c(e.span, {
															className: "token operator",
															children: ":"
														}),
														" ",
														c(e.span, {
															className: "token string",
															children: "\"sys.on-surface\""
														}),
														" ",
														c(e.span, {
															className: "token punctuation",
															children: "}"
														}),
														c(e.span, {
															className: "token punctuation",
															children: "}"
														})
													]
												}),
												c(e.span, {
													className: "token punctuation",
													children: ">"
												})
											]
										}),
										c(e.span, {
											className: "token plain-text",
											children: "\n          Popper "
										}),
										c(e.span, {
											className: "token punctuation",
											children: "{"
										}),
										l(e.span, {
											className: "token template-string",
											children: [
												c(e.span, {
													className: "token template-punctuation string",
													children: "`"
												}),
												l(e.span, {
													className: "token interpolation",
													children: [
														c(e.span, {
															className: "token interpolation-punctuation punctuation",
															children: "${"
														}),
														"isOpen",
														c(e.span, {
															className: "token punctuation",
															children: "."
														}),
														c(e.span, {
															className: "token property-access",
															children: "value"
														}),
														c(e.span, {
															className: "token interpolation-punctuation punctuation",
															children: "}"
														})
													]
												}),
												c(e.span, {
													className: "token template-punctuation string",
													children: "`"
												})
											]
										}),
										c(e.span, {
											className: "token punctuation",
											children: "}"
										}),
										c(e.span, {
											className: "token plain-text",
											children: "!\n        "
										}),
										l(e.span, {
											className: "token tag",
											children: [l(e.span, {
												className: "token tag",
												children: [c(e.span, {
													className: "token punctuation",
													children: "</"
												}), c(e.span, {
													className: "token class-name",
													children: "Box"
												})]
											}), c(e.span, {
												className: "token punctuation",
												children: ">"
											})]
										}),
										"\n      ",
										c(e.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n    ",
								c(e.span, {
									className: "token punctuation",
									children: ">"
								})
							]
						}),
						c(e.span, {
							className: "token plain-text",
							children: "\n      "
						}),
						l(e.span, {
							className: "token tag",
							children: [
								l(e.span, {
									className: "token tag",
									children: [c(e.span, {
										className: "token punctuation",
										children: "<"
									}), c(e.span, {
										className: "token class-name",
										children: "Box"
									})]
								}),
								"\n        ",
								c(e.span, {
									className: "token attr-name",
									children: "sx"
								}),
								l(e.span, {
									className: "token script language-javascript",
									children: [
										c(e.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										c(e.span, {
											className: "token punctuation",
											children: "{"
										}),
										c(e.span, {
											className: "token punctuation",
											children: "{"
										}),
										" p",
										c(e.span, {
											className: "token operator",
											children: ":"
										}),
										" ",
										c(e.span, {
											className: "token number",
											children: "4"
										}),
										" ",
										c(e.span, {
											className: "token punctuation",
											children: "}"
										}),
										c(e.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n        ",
								c(e.span, {
									className: "token attr-name",
									children: "component"
								}),
								l(e.span, {
									className: "token script language-javascript",
									children: [
										c(e.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										c(e.span, {
											className: "token punctuation",
											children: "{"
										}),
										c(e.span, {
											className: "token string",
											children: "\"button\""
										}),
										c(e.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n        ",
								c(e.span, {
									className: "token attr-name",
									children: "onClick"
								}),
								l(e.span, {
									className: "token script language-javascript",
									children: [
										c(e.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										c(e.span, {
											className: "token punctuation",
											children: "{"
										}),
										c(e.span, {
											className: "token punctuation",
											children: "("
										}),
										c(e.span, {
											className: "token punctuation",
											children: ")"
										}),
										" ",
										c(e.span, {
											className: "token arrow operator",
											children: "=>"
										}),
										" ",
										c(e.span, {
											className: "token punctuation",
											children: "("
										}),
										"isOpen",
										c(e.span, {
											className: "token punctuation",
											children: "."
										}),
										c(e.span, {
											className: "token property-access",
											children: "value"
										}),
										" ",
										c(e.span, {
											className: "token operator",
											children: "="
										}),
										" ",
										c(e.span, {
											className: "token operator",
											children: "!"
										}),
										"isOpen",
										c(e.span, {
											className: "token punctuation",
											children: "."
										}),
										c(e.span, {
											className: "token property-access",
											children: "value"
										}),
										c(e.span, {
											className: "token punctuation",
											children: ")"
										}),
										c(e.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n      ",
								c(e.span, {
									className: "token punctuation",
									children: ">"
								})
							]
						}),
						c(e.span, {
							className: "token plain-text",
							children: "\n        Click Trigger Popper\n      "
						}),
						l(e.span, {
							className: "token tag",
							children: [l(e.span, {
								className: "token tag",
								children: [c(e.span, {
									className: "token punctuation",
									children: "</"
								}), c(e.span, {
									className: "token class-name",
									children: "Box"
								})]
							}), c(e.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						c(e.span, {
							className: "token plain-text",
							children: "\n    "
						}),
						l(e.span, {
							className: "token tag",
							children: [l(e.span, {
								className: "token tag",
								children: [c(e.span, {
									className: "token punctuation",
									children: "</"
								}), c(e.span, {
									className: "token class-name",
									children: "Popper"
								})]
							}), c(e.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						"\n  ",
						c(e.span, {
							className: "token punctuation",
							children: ")"
						}),
						c(e.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						c(e.span, {
							className: "token punctuation",
							children: "}"
						}),
						c(e.span, {
							className: "token punctuation",
							children: ")"
						}),
						c(e.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n"
					]
				})
			})]
		}),
		"\n",
		c(e.h2, { children: "Hovered Popper" }),
		"\n",
		l(e.div, {
			"data-example": "",
			children: [c(e.div, {
				"data-example-container": "",
				children: c(e.codeblocke7f6c011, {})
			}), c(e.pre, {
				className: "language-tsx",
				children: l(e.code, {
					className: "language-tsx",
					children: [
						c(e.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						l(e.span, {
							className: "token imports",
							children: [
								c(e.span, {
									className: "token punctuation",
									children: "{"
								}),
								" ref ",
								c(e.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						c(e.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						c(e.span, {
							className: "token string",
							children: "\"vue\""
						}),
						c(e.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						c(e.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						l(e.span, {
							className: "token imports",
							children: [
								c(e.span, {
									className: "token punctuation",
									children: "{"
								}),
								" component ",
								c(e.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						c(e.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						c(e.span, {
							className: "token string",
							children: "\"@innoai-tech/vuekit\""
						}),
						c(e.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						c(e.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						l(e.span, {
							className: "token imports",
							children: [
								c(e.span, {
									className: "token punctuation",
									children: "{"
								}),
								" ",
								c(e.span, {
									className: "token maybe-class-name",
									children: "Box"
								}),
								c(e.span, {
									className: "token punctuation",
									children: ","
								}),
								" ",
								c(e.span, {
									className: "token maybe-class-name",
									children: "Popper"
								}),
								" ",
								c(e.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						c(e.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						c(e.span, {
							className: "token string",
							children: "\"@innoai-tech/vueuikit\""
						}),
						c(e.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n",
						c(e.span, {
							className: "token keyword module",
							children: "export"
						}),
						" ",
						c(e.span, {
							className: "token keyword module",
							children: "default"
						}),
						" ",
						c(e.span, {
							className: "token function",
							children: "component"
						}),
						c(e.span, {
							className: "token punctuation",
							children: "("
						}),
						c(e.span, {
							className: "token punctuation",
							children: "("
						}),
						c(e.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						c(e.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						c(e.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n  ",
						c(e.span, {
							className: "token keyword",
							children: "const"
						}),
						" isOpen ",
						c(e.span, {
							className: "token operator",
							children: "="
						}),
						" ",
						c(e.span, {
							className: "token function",
							children: "ref"
						}),
						c(e.span, {
							className: "token punctuation",
							children: "("
						}),
						c(e.span, {
							className: "token boolean",
							children: "false"
						}),
						c(e.span, {
							className: "token punctuation",
							children: ")"
						}),
						c(e.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n  ",
						c(e.span, {
							className: "token keyword control-flow",
							children: "return"
						}),
						" ",
						c(e.span, {
							className: "token punctuation",
							children: "("
						}),
						c(e.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						c(e.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						c(e.span, {
							className: "token punctuation",
							children: "("
						}),
						"\n    ",
						l(e.span, {
							className: "token tag",
							children: [
								l(e.span, {
									className: "token tag",
									children: [c(e.span, {
										className: "token punctuation",
										children: "<"
									}), c(e.span, {
										className: "token class-name",
										children: "Popper"
									})]
								}),
								"\n      ",
								c(e.span, {
									className: "token attr-name",
									children: "isOpen"
								}),
								l(e.span, {
									className: "token script language-javascript",
									children: [
										c(e.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										c(e.span, {
											className: "token punctuation",
											children: "{"
										}),
										"isOpen",
										c(e.span, {
											className: "token punctuation",
											children: "."
										}),
										c(e.span, {
											className: "token property-access",
											children: "value"
										}),
										c(e.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n      ",
								c(e.span, {
									className: "token attr-name",
									children: "$content"
								}),
								l(e.span, {
									className: "token script language-javascript",
									children: [
										c(e.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										c(e.span, {
											className: "token punctuation",
											children: "{"
										}),
										"\n        ",
										l(e.span, {
											className: "token tag",
											children: [
												l(e.span, {
													className: "token tag",
													children: [c(e.span, {
														className: "token punctuation",
														children: "<"
													}), c(e.span, {
														className: "token class-name",
														children: "Box"
													})]
												}),
												" ",
												c(e.span, {
													className: "token attr-name",
													children: "sx"
												}),
												l(e.span, {
													className: "token script language-javascript",
													children: [
														c(e.span, {
															className: "token script-punctuation punctuation",
															children: "="
														}),
														c(e.span, {
															className: "token punctuation",
															children: "{"
														}),
														c(e.span, {
															className: "token punctuation",
															children: "{"
														}),
														" containerStyle",
														c(e.span, {
															className: "token operator",
															children: ":"
														}),
														" ",
														c(e.span, {
															className: "token string",
															children: "\"sys.on-surface\""
														}),
														" ",
														c(e.span, {
															className: "token punctuation",
															children: "}"
														}),
														c(e.span, {
															className: "token punctuation",
															children: "}"
														})
													]
												}),
												c(e.span, {
													className: "token punctuation",
													children: ">"
												})
											]
										}),
										c(e.span, {
											className: "token plain-text",
											children: "Popper Content!"
										}),
										l(e.span, {
											className: "token tag",
											children: [l(e.span, {
												className: "token tag",
												children: [c(e.span, {
													className: "token punctuation",
													children: "</"
												}), c(e.span, {
													className: "token class-name",
													children: "Box"
												})]
											}), c(e.span, {
												className: "token punctuation",
												children: ">"
											})]
										}),
										"\n      ",
										c(e.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n    ",
								c(e.span, {
									className: "token punctuation",
									children: ">"
								})
							]
						}),
						c(e.span, {
							className: "token plain-text",
							children: "\n      "
						}),
						l(e.span, {
							className: "token tag",
							children: [
								l(e.span, {
									className: "token tag",
									children: [c(e.span, {
										className: "token punctuation",
										children: "<"
									}), c(e.span, {
										className: "token class-name",
										children: "Box"
									})]
								}),
								"\n        ",
								c(e.span, {
									className: "token attr-name",
									children: "component"
								}),
								l(e.span, {
									className: "token script language-javascript",
									children: [
										c(e.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										c(e.span, {
											className: "token punctuation",
											children: "{"
										}),
										c(e.span, {
											className: "token string",
											children: "\"button\""
										}),
										c(e.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n        ",
								c(e.span, {
									className: "token attr-name",
									children: "sx"
								}),
								l(e.span, {
									className: "token script language-javascript",
									children: [
										c(e.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										c(e.span, {
											className: "token punctuation",
											children: "{"
										}),
										c(e.span, {
											className: "token punctuation",
											children: "{"
										}),
										" p",
										c(e.span, {
											className: "token operator",
											children: ":"
										}),
										" ",
										c(e.span, {
											className: "token number",
											children: "4"
										}),
										" ",
										c(e.span, {
											className: "token punctuation",
											children: "}"
										}),
										c(e.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n        ",
								c(e.span, {
									className: "token attr-name",
									children: "onMouseover"
								}),
								l(e.span, {
									className: "token script language-javascript",
									children: [
										c(e.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										c(e.span, {
											className: "token punctuation",
											children: "{"
										}),
										c(e.span, {
											className: "token punctuation",
											children: "("
										}),
										c(e.span, {
											className: "token punctuation",
											children: ")"
										}),
										" ",
										c(e.span, {
											className: "token arrow operator",
											children: "=>"
										}),
										" ",
										c(e.span, {
											className: "token punctuation",
											children: "("
										}),
										"isOpen",
										c(e.span, {
											className: "token punctuation",
											children: "."
										}),
										c(e.span, {
											className: "token property-access",
											children: "value"
										}),
										" ",
										c(e.span, {
											className: "token operator",
											children: "="
										}),
										" ",
										c(e.span, {
											className: "token boolean",
											children: "true"
										}),
										c(e.span, {
											className: "token punctuation",
											children: ")"
										}),
										c(e.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n        ",
								c(e.span, {
									className: "token attr-name",
									children: "onMouseout"
								}),
								l(e.span, {
									className: "token script language-javascript",
									children: [
										c(e.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										c(e.span, {
											className: "token punctuation",
											children: "{"
										}),
										c(e.span, {
											className: "token punctuation",
											children: "("
										}),
										c(e.span, {
											className: "token punctuation",
											children: ")"
										}),
										" ",
										c(e.span, {
											className: "token arrow operator",
											children: "=>"
										}),
										" ",
										c(e.span, {
											className: "token punctuation",
											children: "("
										}),
										"isOpen",
										c(e.span, {
											className: "token punctuation",
											children: "."
										}),
										c(e.span, {
											className: "token property-access",
											children: "value"
										}),
										" ",
										c(e.span, {
											className: "token operator",
											children: "="
										}),
										" ",
										c(e.span, {
											className: "token boolean",
											children: "false"
										}),
										c(e.span, {
											className: "token punctuation",
											children: ")"
										}),
										c(e.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n      ",
								c(e.span, {
									className: "token punctuation",
									children: ">"
								})
							]
						}),
						c(e.span, {
							className: "token plain-text",
							children: "\n        Popper Trigger\n      "
						}),
						l(e.span, {
							className: "token tag",
							children: [l(e.span, {
								className: "token tag",
								children: [c(e.span, {
									className: "token punctuation",
									children: "</"
								}), c(e.span, {
									className: "token class-name",
									children: "Box"
								})]
							}), c(e.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						c(e.span, {
							className: "token plain-text",
							children: "\n    "
						}),
						l(e.span, {
							className: "token tag",
							children: [l(e.span, {
								className: "token tag",
								children: [c(e.span, {
									className: "token punctuation",
									children: "</"
								}), c(e.span, {
									className: "token class-name",
									children: "Popper"
								})]
							}), c(e.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						"\n  ",
						c(e.span, {
							className: "token punctuation",
							children: ")"
						}),
						c(e.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						c(e.span, {
							className: "token punctuation",
							children: "}"
						}),
						c(e.span, {
							className: "token punctuation",
							children: ")"
						}),
						c(e.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n"
					]
				})
			})]
		}),
		"\n",
		c(e.h2, { children: "Animated" }),
		"\n",
		l(e.div, {
			"data-example": "",
			children: [c(e.div, {
				"data-example-container": "",
				children: c(e.codeblock4a44dc15, {})
			}), c(e.pre, {
				className: "language-tsx",
				children: l(e.code, {
					className: "language-tsx",
					children: [
						c(e.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						l(e.span, {
							className: "token imports",
							children: [
								c(e.span, {
									className: "token punctuation",
									children: "{"
								}),
								" ref ",
								c(e.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						c(e.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						c(e.span, {
							className: "token string",
							children: "\"vue\""
						}),
						c(e.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						c(e.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						l(e.span, {
							className: "token imports",
							children: [
								c(e.span, {
									className: "token punctuation",
									children: "{"
								}),
								" component ",
								c(e.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						c(e.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						c(e.span, {
							className: "token string",
							children: "\"@innoai-tech/vuekit\""
						}),
						c(e.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						c(e.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						l(e.span, {
							className: "token imports",
							children: [
								c(e.span, {
									className: "token punctuation",
									children: "{"
								}),
								"\n  ",
								c(e.span, {
									className: "token maybe-class-name",
									children: "Box"
								}),
								c(e.span, {
									className: "token punctuation",
									children: ","
								}),
								"\n  defineTransition",
								c(e.span, {
									className: "token punctuation",
									children: ","
								}),
								"\n  ",
								c(e.span, {
									className: "token maybe-class-name",
									children: "Popper"
								}),
								c(e.span, {
									className: "token punctuation",
									children: ","
								}),
								"\n  transition",
								c(e.span, {
									className: "token punctuation",
									children: ","
								}),
								"\n  triangle",
								c(e.span, {
									className: "token punctuation",
									children: ","
								}),
								"\n",
								c(e.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						c(e.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						c(e.span, {
							className: "token string",
							children: "\"@innoai-tech/vueuikit\""
						}),
						c(e.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n",
						c(e.span, {
							className: "token keyword module",
							children: "export"
						}),
						" ",
						c(e.span, {
							className: "token keyword",
							children: "const"
						}),
						" ",
						c(e.span, {
							className: "token maybe-class-name",
							children: "FadeInOutTransition"
						}),
						" ",
						c(e.span, {
							className: "token operator",
							children: "="
						}),
						" ",
						c(e.span, {
							className: "token function",
							children: "defineTransition"
						}),
						c(e.span, {
							className: "token punctuation",
							children: "("
						}),
						"\n  ",
						c(e.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n    ",
						c(e.span, {
							className: "token keyword module",
							children: "from"
						}),
						c(e.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						c(e.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n      opacity",
						c(e.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						c(e.span, {
							className: "token number",
							children: "0"
						}),
						c(e.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n    ",
						c(e.span, {
							className: "token punctuation",
							children: "}"
						}),
						c(e.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n    to",
						c(e.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						c(e.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n      opacity",
						c(e.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						c(e.span, {
							className: "token number",
							children: "1"
						}),
						c(e.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n    ",
						c(e.span, {
							className: "token punctuation",
							children: "}"
						}),
						c(e.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n    duration",
						c(e.span, {
							className: "token operator",
							children: ":"
						}),
						" transition",
						c(e.span, {
							className: "token punctuation",
							children: "."
						}),
						c(e.span, {
							className: "token property-access",
							children: "duration"
						}),
						c(e.span, {
							className: "token punctuation",
							children: "."
						}),
						c(e.span, {
							className: "token property-access",
							children: "md1"
						}),
						c(e.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n    easing",
						c(e.span, {
							className: "token operator",
							children: ":"
						}),
						" transition",
						c(e.span, {
							className: "token punctuation",
							children: "."
						}),
						c(e.span, {
							className: "token property-access",
							children: "easing"
						}),
						c(e.span, {
							className: "token punctuation",
							children: "."
						}),
						c(e.span, {
							className: "token property-access",
							children: "standard"
						}),
						c(e.span, {
							className: "token punctuation",
							children: "."
						}),
						c(e.span, {
							className: "token property-access",
							children: "accelerate"
						}),
						c(e.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n  ",
						c(e.span, {
							className: "token punctuation",
							children: "}"
						}),
						c(e.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n  ",
						c(e.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n    ",
						c(e.span, {
							className: "token keyword module",
							children: "from"
						}),
						c(e.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						c(e.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n      opacity",
						c(e.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						c(e.span, {
							className: "token number",
							children: "1"
						}),
						c(e.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n    ",
						c(e.span, {
							className: "token punctuation",
							children: "}"
						}),
						c(e.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n    to",
						c(e.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						c(e.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n      opacity",
						c(e.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						c(e.span, {
							className: "token number",
							children: "0"
						}),
						c(e.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n    ",
						c(e.span, {
							className: "token punctuation",
							children: "}"
						}),
						c(e.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n    duration",
						c(e.span, {
							className: "token operator",
							children: ":"
						}),
						" transition",
						c(e.span, {
							className: "token punctuation",
							children: "."
						}),
						c(e.span, {
							className: "token property-access",
							children: "duration"
						}),
						c(e.span, {
							className: "token punctuation",
							children: "."
						}),
						c(e.span, {
							className: "token property-access",
							children: "sm4"
						}),
						c(e.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n    easing",
						c(e.span, {
							className: "token operator",
							children: ":"
						}),
						" transition",
						c(e.span, {
							className: "token punctuation",
							children: "."
						}),
						c(e.span, {
							className: "token property-access",
							children: "easing"
						}),
						c(e.span, {
							className: "token punctuation",
							children: "."
						}),
						c(e.span, {
							className: "token property-access",
							children: "standard"
						}),
						c(e.span, {
							className: "token punctuation",
							children: "."
						}),
						c(e.span, {
							className: "token property-access",
							children: "decelerate"
						}),
						c(e.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n  ",
						c(e.span, {
							className: "token punctuation",
							children: "}"
						}),
						c(e.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n",
						c(e.span, {
							className: "token punctuation",
							children: ")"
						}),
						c(e.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n",
						c(e.span, {
							className: "token keyword module",
							children: "export"
						}),
						" ",
						c(e.span, {
							className: "token keyword module",
							children: "default"
						}),
						" ",
						c(e.span, {
							className: "token function",
							children: "component"
						}),
						c(e.span, {
							className: "token punctuation",
							children: "("
						}),
						c(e.span, {
							className: "token punctuation",
							children: "("
						}),
						c(e.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						c(e.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						c(e.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n  ",
						c(e.span, {
							className: "token keyword",
							children: "const"
						}),
						" isOpen ",
						c(e.span, {
							className: "token operator",
							children: "="
						}),
						" ",
						c(e.span, {
							className: "token function",
							children: "ref"
						}),
						c(e.span, {
							className: "token punctuation",
							children: "("
						}),
						c(e.span, {
							className: "token boolean",
							children: "true"
						}),
						c(e.span, {
							className: "token punctuation",
							children: ")"
						}),
						c(e.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n  ",
						c(e.span, {
							className: "token keyword control-flow",
							children: "return"
						}),
						" ",
						c(e.span, {
							className: "token punctuation",
							children: "("
						}),
						c(e.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						c(e.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						c(e.span, {
							className: "token punctuation",
							children: "("
						}),
						"\n    ",
						l(e.span, {
							className: "token tag",
							children: [
								l(e.span, {
									className: "token tag",
									children: [c(e.span, {
										className: "token punctuation",
										children: "<"
									}), c(e.span, {
										className: "token class-name",
										children: "Popper"
									})]
								}),
								"\n      ",
								c(e.span, {
									className: "token attr-name",
									children: "isOpen"
								}),
								l(e.span, {
									className: "token script language-javascript",
									children: [
										c(e.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										c(e.span, {
											className: "token punctuation",
											children: "{"
										}),
										"isOpen",
										c(e.span, {
											className: "token punctuation",
											children: "."
										}),
										c(e.span, {
											className: "token property-access",
											children: "value"
										}),
										c(e.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n      ",
								c(e.span, {
									className: "token attr-name",
									children: "$transition"
								}),
								l(e.span, {
									className: "token script language-javascript",
									children: [
										c(e.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										c(e.span, {
											className: "token punctuation",
											children: "{"
										}),
										c(e.span, {
											className: "token punctuation",
											children: "("
										}),
										c(e.span, {
											className: "token punctuation",
											children: "{"
										}),
										" content ",
										c(e.span, {
											className: "token punctuation",
											children: "}"
										}),
										c(e.span, {
											className: "token punctuation",
											children: ")"
										}),
										" ",
										c(e.span, {
											className: "token arrow operator",
											children: "=>"
										}),
										" ",
										c(e.span, {
											className: "token punctuation",
											children: "("
										}),
										"\n        ",
										l(e.span, {
											className: "token tag",
											children: [l(e.span, {
												className: "token tag",
												children: [c(e.span, {
													className: "token punctuation",
													children: "<"
												}), c(e.span, {
													className: "token class-name",
													children: "FadeInOutTransition"
												})]
											}), c(e.span, {
												className: "token punctuation",
												children: ">"
											})]
										}),
										c(e.span, {
											className: "token punctuation",
											children: "{"
										}),
										"content",
										c(e.span, {
											className: "token punctuation",
											children: "}"
										}),
										l(e.span, {
											className: "token tag",
											children: [l(e.span, {
												className: "token tag",
												children: [c(e.span, {
													className: "token punctuation",
													children: "</"
												}), c(e.span, {
													className: "token class-name",
													children: "FadeInOutTransition"
												})]
											}), c(e.span, {
												className: "token punctuation",
												children: ">"
											})]
										}),
										"\n      ",
										c(e.span, {
											className: "token punctuation",
											children: ")"
										}),
										c(e.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n      ",
								c(e.span, {
									className: "token attr-name",
									children: "$content"
								}),
								l(e.span, {
									className: "token script language-javascript",
									children: [
										c(e.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										c(e.span, {
											className: "token punctuation",
											children: "{"
										}),
										"\n        ",
										l(e.span, {
											className: "token tag",
											children: [
												l(e.span, {
													className: "token tag",
													children: [c(e.span, {
														className: "token punctuation",
														children: "<"
													}), c(e.span, {
														className: "token class-name",
														children: "Box"
													})]
												}),
												"\n          ",
												c(e.span, {
													className: "token attr-name",
													children: "sx"
												}),
												l(e.span, {
													className: "token script language-javascript",
													children: [
														c(e.span, {
															className: "token script-punctuation punctuation",
															children: "="
														}),
														c(e.span, {
															className: "token punctuation",
															children: "{"
														}),
														c(e.span, {
															className: "token punctuation",
															children: "{"
														}),
														"\n            containerStyle",
														c(e.span, {
															className: "token operator",
															children: ":"
														}),
														" ",
														c(e.span, {
															className: "token string",
															children: "\"sys.on-surface\""
														}),
														c(e.span, {
															className: "token punctuation",
															children: ","
														}),
														"\n            shadow",
														c(e.span, {
															className: "token operator",
															children: ":"
														}),
														" ",
														c(e.span, {
															className: "token string",
															children: "\"2\""
														}),
														c(e.span, {
															className: "token punctuation",
															children: ","
														}),
														"\n            py",
														c(e.span, {
															className: "token operator",
															children: ":"
														}),
														" ",
														c(e.span, {
															className: "token number",
															children: "2"
														}),
														c(e.span, {
															className: "token punctuation",
															children: ","
														}),
														"\n            px",
														c(e.span, {
															className: "token operator",
															children: ":"
														}),
														" ",
														c(e.span, {
															className: "token number",
															children: "4"
														}),
														c(e.span, {
															className: "token punctuation",
															children: ","
														}),
														"\n            rounded",
														c(e.span, {
															className: "token operator",
															children: ":"
														}),
														" ",
														c(e.span, {
															className: "token string",
															children: "\"sm\""
														}),
														c(e.span, {
															className: "token punctuation",
															children: ","
														}),
														"\n          ",
														c(e.span, {
															className: "token punctuation",
															children: "}"
														}),
														c(e.span, {
															className: "token punctuation",
															children: "}"
														})
													]
												}),
												"\n        ",
												c(e.span, {
													className: "token punctuation",
													children: ">"
												})
											]
										}),
										c(e.span, {
											className: "token plain-text",
											children: "\n          Popper "
										}),
										c(e.span, {
											className: "token punctuation",
											children: "{"
										}),
										l(e.span, {
											className: "token template-string",
											children: [
												c(e.span, {
													className: "token template-punctuation string",
													children: "`"
												}),
												l(e.span, {
													className: "token interpolation",
													children: [
														c(e.span, {
															className: "token interpolation-punctuation punctuation",
															children: "${"
														}),
														"isOpen",
														c(e.span, {
															className: "token punctuation",
															children: "."
														}),
														c(e.span, {
															className: "token property-access",
															children: "value"
														}),
														c(e.span, {
															className: "token interpolation-punctuation punctuation",
															children: "}"
														})
													]
												}),
												c(e.span, {
													className: "token template-punctuation string",
													children: "`"
												})
											]
										}),
										c(e.span, {
											className: "token punctuation",
											children: "}"
										}),
										c(e.span, {
											className: "token plain-text",
											children: "!\n        "
										}),
										l(e.span, {
											className: "token tag",
											children: [l(e.span, {
												className: "token tag",
												children: [c(e.span, {
													className: "token punctuation",
													children: "</"
												}), c(e.span, {
													className: "token class-name",
													children: "Box"
												})]
											}), c(e.span, {
												className: "token punctuation",
												children: ">"
											})]
										}),
										"\n      ",
										c(e.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n    ",
								c(e.span, {
									className: "token punctuation",
									children: ">"
								})
							]
						}),
						c(e.span, {
							className: "token plain-text",
							children: "\n      "
						}),
						l(e.span, {
							className: "token tag",
							children: [
								l(e.span, {
									className: "token tag",
									children: [c(e.span, {
										className: "token punctuation",
										children: "<"
									}), c(e.span, {
										className: "token class-name",
										children: "Box"
									})]
								}),
								"\n        ",
								c(e.span, {
									className: "token attr-name",
									children: "sx"
								}),
								l(e.span, {
									className: "token script language-javascript",
									children: [
										c(e.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										c(e.span, {
											className: "token punctuation",
											children: "{"
										}),
										c(e.span, {
											className: "token punctuation",
											children: "{"
										}),
										" p",
										c(e.span, {
											className: "token operator",
											children: ":"
										}),
										" ",
										c(e.span, {
											className: "token number",
											children: "4"
										}),
										" ",
										c(e.span, {
											className: "token punctuation",
											children: "}"
										}),
										c(e.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n        ",
								c(e.span, {
									className: "token attr-name",
									children: "component"
								}),
								l(e.span, {
									className: "token script language-javascript",
									children: [
										c(e.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										c(e.span, {
											className: "token punctuation",
											children: "{"
										}),
										c(e.span, {
											className: "token string",
											children: "\"button\""
										}),
										c(e.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n        ",
								c(e.span, {
									className: "token attr-name",
									children: "onMouseover"
								}),
								l(e.span, {
									className: "token script language-javascript",
									children: [
										c(e.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										c(e.span, {
											className: "token punctuation",
											children: "{"
										}),
										c(e.span, {
											className: "token punctuation",
											children: "("
										}),
										c(e.span, {
											className: "token punctuation",
											children: ")"
										}),
										" ",
										c(e.span, {
											className: "token arrow operator",
											children: "=>"
										}),
										" ",
										c(e.span, {
											className: "token punctuation",
											children: "("
										}),
										"isOpen",
										c(e.span, {
											className: "token punctuation",
											children: "."
										}),
										c(e.span, {
											className: "token property-access",
											children: "value"
										}),
										" ",
										c(e.span, {
											className: "token operator",
											children: "="
										}),
										" ",
										c(e.span, {
											className: "token boolean",
											children: "true"
										}),
										c(e.span, {
											className: "token punctuation",
											children: ")"
										}),
										c(e.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n        ",
								c(e.span, {
									className: "token attr-name",
									children: "onMouseout"
								}),
								l(e.span, {
									className: "token script language-javascript",
									children: [
										c(e.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										c(e.span, {
											className: "token punctuation",
											children: "{"
										}),
										c(e.span, {
											className: "token punctuation",
											children: "("
										}),
										c(e.span, {
											className: "token punctuation",
											children: ")"
										}),
										" ",
										c(e.span, {
											className: "token arrow operator",
											children: "=>"
										}),
										" ",
										c(e.span, {
											className: "token punctuation",
											children: "("
										}),
										"isOpen",
										c(e.span, {
											className: "token punctuation",
											children: "."
										}),
										c(e.span, {
											className: "token property-access",
											children: "value"
										}),
										" ",
										c(e.span, {
											className: "token operator",
											children: "="
										}),
										" ",
										c(e.span, {
											className: "token boolean",
											children: "false"
										}),
										c(e.span, {
											className: "token punctuation",
											children: ")"
										}),
										c(e.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n      ",
								c(e.span, {
									className: "token punctuation",
									children: ">"
								})
							]
						}),
						c(e.span, {
							className: "token plain-text",
							children: "\n        Animated Popper\n      "
						}),
						l(e.span, {
							className: "token tag",
							children: [l(e.span, {
								className: "token tag",
								children: [c(e.span, {
									className: "token punctuation",
									children: "</"
								}), c(e.span, {
									className: "token class-name",
									children: "Box"
								})]
							}), c(e.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						c(e.span, {
							className: "token plain-text",
							children: "\n    "
						}),
						l(e.span, {
							className: "token tag",
							children: [l(e.span, {
								className: "token tag",
								children: [c(e.span, {
									className: "token punctuation",
									children: "</"
								}), c(e.span, {
									className: "token class-name",
									children: "Popper"
								})]
							}), c(e.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						"\n  ",
						c(e.span, {
							className: "token punctuation",
							children: ")"
						}),
						c(e.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						c(e.span, {
							className: "token punctuation",
							children: "}"
						}),
						c(e.span, {
							className: "token punctuation",
							children: ")"
						}),
						c(e.span, {
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
	return a ? c(a, {
		...n,
		children: c(N, { ...n })
	}) : N(n);
}
var y = s(() => () => a(g, { components: {
	codeblockd4735e3a: m,
	codeblocke7f6c011: d,
	codeblock4a44dc15: h
} }));
export { y as default };
