import { r as e } from "./rolldown-runtime.D8qhy2Lt.chunk.js";
import { A as t, C as n, D as r, E as i, Ht as a, K as l, M as o, S as s, St as d, T as p, V as c, Y as u, _ as h, b as f, c as y, cn as m, g as v, h as x, in as b, l as g, m as N, n as w, o as E, on as $, p as C, r as S, s as O, t as k, u as P, w as A, x as I, y as T, zt as L } from "./lib-nodepkg-vuekit.Dng4O0gc.chunk.js";
import { C as M, E as D, T as J, _, b as W, g as j, h as B, n as R, o as V, s as z, t as H, v as F, w as X, y as K } from "./lib-nodepkg-vueuikit.BAbl8dOa.chunk.js";
import { _ as U, f as Y, g as Z, h as q, n as G, p as Q, r as ee, u as et } from "./lib-nodepkg-typedef.WoOPnAhr.chunk.js";
import { n as en, t as er } from "./vendor-rxjs.CN26Be5v.chunk.js";
import { M as ei, S as ea, T as el, _ as eo, b as es, h as ed, j as ep, m as ec, v as eu, y as eh } from "./index.DvdiqX_t.entry.js";
import { t as ef } from "./vendor-toggle-selection.BhsMKh4i.chunk.js";
var ey, em, ev = new p(function(e) {
	return e.complete();
});
function ex(e, r, i) {
	return (void 0 === i && (i = Infinity), t(r)) ? ex(function(t, n) {
		return v(function(e, i) {
			return r(t, e, n, i);
		})(T(e(t, n)));
	}, i) : ("number" == typeof r && (i = r), A(function(t, r) {
		var a, l, o, s, d, p, c, u, h;
		return a = i, o = [], s = 0, d = 0, p = !1, c = function() {
			!p || o.length || s || r.complete();
		}, u = function(e) {
			return s < a ? h(e) : o.push(e);
		}, h = function(t) {
			s++;
			var i = !1;
			T(e(t, d++)).subscribe(n(r, function(e) {
				l ? u(e) : r.next(e);
			}, function() {
				i = !0;
			}, void 0, function() {
				if (i) try {
					for (s--; o.length && s < a;) (function() {
						var e = o.shift();
						h(e);
					})();
					c();
				} catch (e) {
					r.error(e);
				}
			}));
		}, t.subscribe(n(r, u, function() {
			p = !0, c();
		})), function() {};
	}));
}
function eb(e) {
	return void 0 === e && (e = Infinity), ex(i, e);
}
var eg = ["addListener", "removeListener"], eN = ["addEventListener", "removeEventListener"], ew = ["on", "off"];
function eE(e, n, r, i) {
	if (t(r) && (i = r, r = void 0), i) return eE(e, n, r).pipe(F(i));
	var a, l, s, d = o(t((a = e).addEventListener) && t(a.removeEventListener) ? eN.map(function(t) {
		return function(i) {
			return e[t](n, i, r);
		};
	}) : t((l = e).addListener) && t(l.removeListener) ? eg.map(e$(e, n)) : t((s = e).on) && t(s.off) ? ew.map(e$(e, n)) : [], 2), c = d[0], u = d[1];
	if (!c && f(e)) return ex(function(e) {
		return eE(e, n, r);
	})(T(e));
	if (!c) throw TypeError("Invalid event target");
	return new p(function(e) {
		var t = function() {
			for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
			return e.next(1 < t.length ? t : t[0]);
		};
		return c(t), function() {
			return u(t);
		};
	});
}
function e$(e, t) {
	return function(n) {
		return function(r) {
			return e[n](t, r);
		};
	};
}
function eC() {
	for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
	var n = W(e), r = K(e, Infinity);
	return e.length ? 1 === e.length ? T(e[0]) : eb(r)(h(e, n)) : ev;
}
function eS(e) {
	return e <= 0 ? function() {
		return ev;
	} : A(function(t, r) {
		var i = 0;
		t.subscribe(n(r, function(t) {
			++i <= e && (r.next(t), e <= i && r.complete());
		}));
	});
}
function eO(e, t) {
	void 0 === t && (t = ei);
	var i = ep(e, t);
	return function e(t, i) {
		return i ? function(a) {
			return function() {
				for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
				return eb(1)(h(e, W(e)));
			}(i.pipe(eS(1), A(function(e, t) {
				e.subscribe(n(t, r));
			})), a.pipe(e(t)));
		} : ex(function(e, n) {
			return T(t(e, n)).pipe(eS(1), v(function() {
				return e;
			}));
		});
	}(function() {
		return i;
	});
}
function ek(e, t) {
	return A(function(r, i) {
		var a = null, l = 0, o = !1, s = function() {
			return o && !a && i.complete();
		};
		r.subscribe(n(i, function(r) {
			a?.unsubscribe();
			var o = 0, d = l++;
			T(e(r, d)).subscribe(a = n(i, function(e) {
				return i.next(t ? t(r, e, d, o++) : e);
			}, function() {
				a = null, s();
			}));
		}, function() {
			o = !0, s();
		}));
	});
}
let eP = (e) => m(e) ? e : d(e) ? [] : [e], eA = ((ey = {})[ey.NONE = 0] = "NONE", ey[ey.EXACT = 1] = "EXACT", ey[ey.PREFIX = 2] = "PREFIX", ey), eI = ((em = {}).NONE = "NONE", em.ADD = "ADD", em.EDIT = "EDIT", em.DELETE = "DELETE", em);
var eT = class e extends p {
	static of(t, n) {
		return new e(t, n ?? ("array" == t.type ? [] : {}));
	}
	#e = new C({});
	constructor(e, t) {
		super((e) => {
			let t = this.#e.subscribe(e);
			return () => {
				t.unsubscribe();
			};
		}), this.typedef = e, this.initials = t, this.#e.next(t);
	}
	initialsAt(e) {
		return 0 == e.length ? this.initials : a(this.initials, e);
	}
	update(e, t, n, r) {
		if (console.log("[json-editor]", "update", JSON.stringify(e), this.typedef.type), this.#t.next({}), 0 == e.length) return void this.#e.next(t);
		b(t) ? this.#e.next((i) => {
			let l = a(i, e, n);
			r && "array" == r.type && !m(l) && (l = eP(l)), t(l), M(i, e, l);
		}) : this.#e.next((n) => {
			M(n, e, t);
		});
	}
	delete(e) {
		0 != e.length && (console.log("[json-editor]", "delete", e), this.#e.next((t) => {
			let n = D(e);
			if (X(n)) {
				let r = e.slice(0, e.length - 1), i = r.length > 0 ? a(t, r) : t;
				if (m(i)) return void i.splice(n, 1);
			}
			let r = e.slice(0, e.length - 1), i = r.length > 0 ? a(t, r) : t;
			delete i[n];
		}));
	}
	#t = new C({});
	#n = new C({});
	get error$() {
		return this.#t;
	}
	get foldedPointerPrefixes$() {
		return this.#n;
	}
	errorAt$(e) {
		let t = this.#r(e);
		return N(this.error$, v((e) => e[t]), en());
	}
	foldedPrefix$(e) {
		let t = this.#r(e);
		return N(this.foldedPointerPrefixes$, v((e) => {
			for (let [n] of Object.entries(e)) {
				if (n === t) return eA.EXACT;
				if (t.startsWith(n)) return eA.PREFIX;
			}
			return eA.NONE;
		}), en());
	}
	#r(e) {
		return J(e) ? e : q.create(e);
	}
	toggleFold(e) {
		let t = this.#r(e);
		this.#n.next((e) => {
			Object.hasOwn(e, t) ? delete e[t] : e[t] = !0;
		});
	}
	setError(e, t) {
		let n = this.#r(e);
		this.#t.next((e) => {
			null === t ? delete e[n] : e[n] = t;
		});
	}
};
let eL = k(() => new eT(et(), {})), eM = k(() => ({}));
var eD = V("span", { displayName: "ActionToolbar" })({
	px: 2,
	pos: "relative",
	visibility: "hidden",
	border: "1px solid",
	borderColor: "rgba(0,0,0,0)",
	display: "flex",
	alignItems: "center"
}), eJ = V(ec, { displayName: "ActionBtn" })({
	transition: "none",
	width: 24,
	height: 24,
	rounded: "xs",
	[`& ${ed}`]: { svg: {
		width: 16,
		height: 16
	} }
}), e_ = V("span", { displayName: "TextBox" })({
	textStyle: "sys.label-small",
	fontWeight: "bold",
	fontFamily: "inherit",
	fontSize: 12,
	border: "1px solid",
	borderColor: "rgba(0,0,0,0)",
	py: 4,
	wordBreak: "keep-all",
	whiteSpace: "nowrap"
}), eW = V(e_, { displayName: "TokenView" })({
	font: "code",
	opacity: .3
}), ej = V(eD, { displayName: "PropLeading" })({
	position: "absolute",
	ml: -28
}), eB = V(e_, { displayName: "PropNameView" })({
	position: "relative",
	display: "flex",
	alignItems: "center",
	userSelect: "none",
	_deprecated: { textDecoration: "line-through" },
	_optional: { "&:after": {
		content: "\"?\"",
		color: "sys.secondary",
		opacity: .58
	} }
}), eR = S((e, { slots: t }) => () => O(eB, {
	"data-deprecated": e.deprecated,
	"data-optional": e.optional,
	"data-nullable": e.nullable,
	children: [t.leading && E(ej, {
		"data-visible-on-hover": !0,
		children: t.leading()
	}), t.default?.()]
}), {
	displayName: "PropName",
	props: [
		"deprecated",
		"optional",
		"nullable"
	]
}), eV = class e extends C {
	static from(t) {
		let n = new e(!1);
		return N(t, ek((e) => e ? eC(N(eE(e, "focus"), x(() => {
			n.show();
		})), N(eE(e, "blur"), eO(200), x(() => {
			n.value && n.hide();
		}))) : ev), P()), n;
	}
	show() {
		this.next(!0);
	}
	hide() {
		this.next(!1);
	}
}, ez = R({ apply({ elements: e, rects: t }) {
	Object.assign(e.floating.style, { width: `${t.reference.width}px` });
} }), eH = S((e, { emit: t, slots: n, render: r }) => {
	let i = e.open$ ?? new eV(!1), a = (e) => {
		let n = [e.target, ...e.composedPath()].find((e) => e?.hasAttribute?.("data-value"));
		if (n) {
			let e = n.getAttribute("data-value");
			d(e) || (t("selected", e), i.hide());
		}
	};
	return N(i, r((e) => E(H, {
		isOpen: e,
		onClickOutside: () => i.hide(),
		onEscKeydown: () => i.hide(),
		placement: "bottom-start",
		middleware: [ez],
		$content: E(eF, {
			onClick: a,
			children: n.content?.()
		}),
		children: n.default?.()?.[0] ?? null
	})));
}, {
	displayName: "Menu",
	props: ["open$"],
	emits: ["selected"]
}), eF = V("div", { displayName: "PopoverContainer" })({
	textStyle: "sys.body-small",
	pos: "relative",
	containerStyle: "sys.surface-container-lowest",
	borderBottom: "1px solid",
	borderRight: "1px solid",
	borderLeft: "1px solid",
	borderColor: j("sys.outline-variant", B(.38)),
	overflow: "hidden",
	"[data-placement*=bottom] &": { roundedBottom: "sm" },
	"[data-placement*=top] &": { roundedTop: "sm" }
}), eX = V("div", { displayName: "MenuItem" })({
	px: 8,
	py: 2,
	gap: 8,
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	textAlign: "right",
	textStyle: "sys.body-small",
	cursor: "pointer",
	_hover: { containerStyle: "sys.surface-container" },
	_focus: {
		containerStyle: "sys.surface-container",
		outline: 0
	}
}), eK = V("div", { displayName: "PropDoc" })({
	position: "absolute",
	zIndex: 1,
	opacity: .58,
	fontSize: 10,
	lineHeight: 10,
	top: -3,
	left: 0,
	"& > *": {
		display: "flex",
		alignItems: "center",
		gap: 4,
		"&::before": {
			content: "\"// \"",
			font: "code"
		}
	}
}), eU = V("span", { displayName: "PropDescription" })({
	display: "block",
	textStyle: "sys.body-small",
	"& p": {
		my: 1,
		wordBreak: "keep-all",
		whiteSpace: "nowrap",
		opacity: .7
	},
	"& code": {
		wordBreak: "keep-all",
		whiteSpace: "nowrap"
	}
}), eY = S((e, { slots: t, render: n }) => {
	let r = new eV(!1);
	return N(r, n((n) => {
		let i = t.default?.()[0];
		return E(H, {
			isOpen: n,
			placement: e.placement ?? "left",
			$content: E(eq, { children: E(eZ, { children: t.title() }) }),
			children: i ? u(i, {
				onMouseover: () => {
					r.show();
				},
				onMouseout: () => {
					r.hide();
				}
			}) : null
		});
	}));
}, {
	displayName: "Tooltip",
	props: ["placement"]
}), eZ = V("div", { displayName: "TooltipContainer" })({
	py: 4,
	px: 12,
	rounded: "xs",
	shadow: "3",
	textStyle: "sys.body-small",
	containerStyle: "sys.on-surface",
	pos: "relative",
	zIndex: 100
}), eq = V("div", { displayName: "TooltipWrapper" })({ px: 8 }), eG = V("div", { displayName: "LineError" })({
	display: "block",
	fontSize: 10,
	lineHeight: 14,
	color: "sys.error",
	position: "absolute",
	px: 2,
	top: -2,
	right: 0
}), eQ = V("div", { displayName: "LinePrefix" })({
	position: "relative",
	display: "flex",
	alignItems: "start",
	justifyContent: "flex-end",
	minWidth: "2vw",
	px: 12,
	userSelect: "none"
}), e0 = V("div", { displayName: "LineContent" })({
	flex: 1,
	minW: 0
}), e1 = V("div", { displayName: "LineContentMain" })({
	position: "relative",
	display: "flex",
	alignItems: "start"
}), e2 = V(eW, { displayName: "LineNumber" })({
	opacity: .28,
	font: "code"
}), e8 = V(eW, (e) => (t) => E(t, { children: E(ed, { path: e.folded ? es : eh }) }), {
	displayName: "LineFoldable",
	props: ["folded"]
})({
	position: "absolute",
	top: 0,
	left: 2,
	cursor: "pointer",
	font: "code",
	opacity: .58,
	[`& ${ed}`]: { svg: {
		width: 16,
		height: 16
	} }
}), e3 = V("div", (e, { slots: t }) => (n) => O(n, { children: [E(eQ, { children: t.leading?.() }), E(e0, {
	sx: { paddingLeft: 14 * e.indent * 2 },
	children: O(e1, { children: [t.default?.(), t.comment?.()] })
})] }), {
	displayName: "LineContainer",
	props: ["indent"]
})({
	position: "relative",
	display: "flex",
	py: 2,
	w: "100%",
	maxW: "100%",
	_hover: {
		containerStyle: "sys.surface-container",
		[`& ${eD}`]: { visibility: "visible" }
	},
	"&:focus-within": { containerStyle: "sys.surface-container" },
	[`&[data-dirty=${eI.EDIT}]`]: { bgColor: j("sys.warning-container", B(.38)) },
	[`&[data-dirty=${eI.ADD}]`]: { bgColor: j("sys.success-container", B(.38)) },
	[`&[data-dirty=${eI.DELETE}]`]: {
		bgColor: j("sys.error-container", B(.38)),
		textDecoration: "line-through",
		opacity: .58
	},
	_error: { bgColor: j("sys.error-container", B(.38)) }
}), e4 = class e extends C {
	static from(t) {
		let n = new e("");
		return N(t, ek((e) => e ? N(eE(e, "input"), x((e) => {
			n.next(e.target.value?.trim());
		})) : ev), g()), n;
	}
}, e5 = class e extends s {
	static from(t) {
		let n = new e();
		return N(t, ek((e) => e ? eC(N(eE(e, "keypress"), x((e) => {
			"Enter" !== e.key || e.shiftKey || (e.preventDefault(), n.next({ type: "COMMIT" }));
		})), N(eE(e, "keydown"), x((e) => {
			switch (e.key) {
				case "Tab":
				case "ArrowDown":
					e.target.getAttribute("data-options") && (e.preventDefault(), n.next({
						type: "SELECT",
						direction: 1
					}));
					break;
				case "ArrowUp": e.target.getAttribute("data-options") && (e.preventDefault(), n.next({
					type: "SELECT",
					direction: -1
				}));
			}
		})), N(eE(e, "keyup"), x((e) => {
			"Escape" === e.key && n.next({ type: "CANCEL" });
		}))) : ev), g()), n;
	}
}, e6 = class extends p {
	static sync(e, t) {
		return N(eC(N(e, x((e) => {
			e && e == q.create(t.path()) && t.editing$.show();
		})), N(t.editing$, eO(1), x((n) => {
			n || e.disable(t.path());
		})), N(_([t.value$, e]), eO(1), x(([n, r]) => {
			d(n) && !r && e.enable(t.path());
		}))), g());
	}
	#i = new I(null);
	constructor() {
		super((e) => {
			let t = this.#i.subscribe(e);
			return () => t.unsubscribe();
		});
	}
	enable(e) {
		this.#i.value || this.#i.next(q.create(e));
	}
	disable(e) {
		this.#i.value === q.create(e) && this.#i.next(null);
	}
};
let e7 = k(() => new e6());
var e9 = S((e, { render: t }) => {
	let n, r = y(null), i = y(null), a = y(null), l = e5.from(a), o = e4.from(a), s = e7.use(), p = eV.from(a), c = eL.use();
	e6.sync(s, {
		editing$: p,
		value$: e.value$,
		path: () => e.ctx.path
	});
	let u = () => {
		if ("enums" === e.typedef.type) {
			let t = (Z.schemaProp(e.typedef, "enum") ?? []).indexOf(e.value);
			if (t > -1) return t;
		}
		return 0;
	}, h = new C({ index: u() }), f = () => {
		o.next(""), p.hide();
	}, m = (t) => {
		if ("enums" === e.typedef.type) {
			let n = Z.schemaProp(e.typedef, "enum") ?? [];
			t ??= n[h.value.index % n.length];
		} else t ??= a.value?.value ? a.value?.value : void 0;
		if (d(t)) return void c.delete(e.ctx.path);
		let [n, r] = e.typedef.validate(t, { coerce: !0 });
		if (n) return void c.setError(e.ctx.path, n.message);
		c.update(e.ctx.path, r), f();
	};
	return (e.allowRawJSON && N(o, x((t) => {
		let n = t.trim();
		if (n.startsWith("{") && n.endsWith("}") || n.startsWith("[") && n.endsWith("]")) try {
			let t = JSON.parse(n);
			c.update(e.ctx.path, t), f();
		} catch (t) {
			c.setError(e.ctx.path, "无效的 JSON 字符串");
		}
	}), g()), N(l, x((t) => {
		switch (t.type) {
			case "SELECT":
				h.next((e) => {
					e.index += t.direction;
				});
				break;
			case "COMMIT":
				m();
				break;
			case "CANCEL": f(), h.next({ index: u() }), d(e.value) && c.delete(e.ctx.path);
		}
	}), g()), N(eC(N(i, w((e) => {
		if (e) {
			let t = new ResizeObserver((e) => {
				for (let t of e) t.contentBoxSize && (n = t.contentBoxSize[0]?.blockSize);
			});
			return t.observe(e), () => {
				t.disconnect();
			};
		}
		return () => {};
	})), N(a, eO(1), x((e) => {
		e && (e?.focus(), e.value && (e.selectionStart = 0, e.selectionEnd = e.value.length));
	})), N(a, ek((e) => {
		if (e) {
			let t = n ? n - 2 : e.getBoundingClientRect().height, a = (e) => {
				e.style.height = `${t ?? 0}px`, e.style.height = `${e.scrollHeight}px`;
			};
			return setTimeout(() => a(e)), eC(N(eE(e, "blur"), x((t) => {
				t.relatedTarget && (i.value?.contains(t.relatedTarget) || r.value?.contains(t.relatedTarget)) || (t.preventDefault(), m(e.value));
			})), N(eE(e, "input"), x((e) => {
				a(e.target), o.next(e.target.value);
			})));
		}
		return ev;
	}))), g()), "enums" == e.typedef.type) ? N(_([
		e.value$,
		p,
		h
	]), t(([t, n, { index: l }]) => {
		let o = Z.schemaProp(e.typedef, "enum") ?? [], s = Z.metaProp(e.typedef, "enumLabels") ?? [];
		return E(tr, {
			ref: i,
			onClick: () => {
				p.show();
			},
			"data-type": typeof t,
			tabindex: 0,
			children: n ? E(eH, {
				onSelected: (e) => {
					m(e);
				},
				open$: p,
				$content: E("div", {
					ref: r,
					children: o.map((e, t) => E(ta, {
						"data-focus": l % o.length === t,
						value: e,
						label: s[t]
					}))
				}),
				children: E(tt, { children: E("input", {
					value: void 0 == t ? "" : `${t}`,
					ref: a,
					"data-options": !0
				}) })
			}) : E(tn, { children: JSON.stringify(t) ?? "undefined" })
		});
	})) : N(_([e.value$, p]), t(([t, n]) => E(tr, {
		ref: i,
		onClick: () => {
			e.ctx.readOnly || p.show();
		},
		onFocus: () => {
			e.ctx.readOnly || p.show();
		},
		"data-type": typeof t,
		tabindex: 0,
		children: n ? E(H, {
			isOpen: !0,
			placement: "right-start",
			$content: O(te, {
				ref: r,
				children: [E(eJ, {
					type: "button",
					onClick: () => l.next({ type: "CANCEL" }),
					children: E(ed, { path: eo })
				}), E(eJ, {
					type: "button",
					onClick: () => l.next({ type: "COMMIT" }),
					children: E(ed, { path: eu })
				})]
			}),
			children: E(tt, { children: E("textarea", {
				ref: a,
				rows: 1,
				value: void 0 == t ? "" : `${t}`
			}) })
		}) : E(tn, { children: JSON.stringify(t) ?? "undefined" })
	})));
}, {
	displayName: "ValueInput",
	props: [
		"typedef",
		"ctx",
		"value",
		"allowRawJSON"
	]
}), te = V("div", { displayName: "ValueInputActions" })({
	borderRight: "1px solid",
	borderTop: "1px solid",
	borderBottom: "1px solid",
	borderColor: j("sys.outline-variant", B(.38)),
	containerStyle: "sys.surface-container-lowest",
	roundedRight: "sm",
	display: "flex",
	px: 2,
	py: 0,
	ml: -4
}), tt = V("div", { displayName: "InputWrapper" })({
	flex: 1,
	minWidth: 0,
	maxWidth: "80%",
	display: "flex",
	alignItems: "center",
	border: "1px solid",
	overflow: "hidden",
	borderColor: j("sys.outline-variant", B(.38)),
	opacity: .38,
	"&:hover": { opacity: 1 },
	"&:focus-within": { opacity: 1 },
	"& > textarea,input": {
		flex: 1,
		rounded: "xs",
		containerStyle: "sys.surface-container-lowest",
		width: "100%",
		outline: "none",
		border: "none",
		px: 8,
		py: 0,
		m: 0,
		fontSize: "inherit",
		color: "inherit",
		lineHeight: "inherit",
		overflow: "hidden",
		resize: "none",
		"&[data-options]:focus": { roundedBottom: 0 }
	}
}), tn = V("div", { displayName: "Value" })({
	border: "1px solid",
	borderColor: "rgba(0,0,0,0)",
	overflow: "hidden",
	textOverflow: "ellipsis",
	_hover: {
		textOverflow: "clip",
		whiteSpace: "normal",
		wordBreak: "break-all"
	}
}), tr = V("div", { displayName: "ValueContainer" })({
	wordBreak: "keep-all",
	whiteSpace: "nowrap",
	cursor: "pointer",
	display: "flex",
	alignItems: "center",
	font: "code",
	minWidth: 0,
	flex: 1,
	textStyle: "sys.label-small",
	fontSize: 12,
	lineHeight: 24,
	gap: 8,
	_type__string: { color: "sys.primary" },
	_type__number: { color: "sys.primary" },
	_type__boolean: { color: "sys.warning" },
	_type__undefined: { color: "sys.error" }
}), ti = V(eX, { displayName: "EnumMenuItemContainer" })({ [`& ${eR}`]: { textAlign: "left" } }), ta = c((e) => () => O(ti, {
	"data-value": e.value,
	tabindex: 0,
	children: [E(eR, { children: e.value }), e.label && E(eU, { children: e.label })]
}), {
	displayName: "EnumMenuItem",
	props: ["value", "label"]
}), tl = e(ef()), to = S((e, {}) => () => E(eY, {
	$title: "复制当前节点为 JSON 字符串",
	children: E(eJ, {
		type: "button",
		onClick: () => (0, tl.default)(JSON.stringify(e.value, null, 2)),
		children: E(ed, { path: ea })
	})
}), {
	displayName: "CopyAsJSONIconBtn",
	props: ["value"]
}), ts = S(({}, { emit: e }) => () => E(eY, {
	$title: "移除项",
	children: E(eJ, {
		type: "button",
		onClick: () => e("remove"),
		children: E(ed, { path: el })
	})
}), {
	displayName: "ItemRemoveIconBtn",
	emits: ["remove"]
}), td = S((e, { emit: t, render: n }) => {
	let r = y(null), i = e4.from(r), a = e5.from(r), l = eV.from(r), o = eL.use(), s = () => {
		r.value && (r.value.value = "", r.value.blur());
	}, d = (n) => {
		if (n ??= i.value) {
			let [r, i] = Z.schemaProp(e.typedef, "items").validate(n, { coerce: !0 });
			if (r) return void o.setError(e.ctx.path, r);
			t("add", i);
		} else t("add", void 0);
		s();
	};
	N(i, x((t) => {
		let n = t.trim();
		if (n.startsWith("[") && n.endsWith("]")) try {
			let t = JSON.parse(n);
			o.update(e.ctx.path, t), s();
		} catch (t) {
			o.setError(e.ctx.path, "无效的 JSON 字符串");
		}
		if (n.startsWith("{") && n.endsWith("}")) try {
			d(JSON.parse(n));
		} catch (t) {
			o.setError(e.ctx.path, "无效的 JSON 字符串");
		}
	}), g()), N(a, x((e) => {
		switch (e.type) {
			case "COMMIT":
				d();
				break;
			case "CANCEL": s();
		}
	}), g());
	let p = N(l, n((e) => E(H, {
		isOpen: e,
		placement: "right-start",
		$content: O(te, { children: [E(eJ, {
			type: "button",
			onClick: () => a.next({ type: "CANCEL" }),
			children: E(ed, { path: eo })
		}), E(eJ, {
			type: "button",
			onClick: () => a.next({ type: "COMMIT" }),
			children: E(ed, { path: eu })
		})] }),
		children: E(tt, { children: E("input", {
			ref: r,
			type: "text",
			placeholder: "添加数组项 (可粘贴 JSON 字符串)"
		}) })
	})));
	return () => E(tr, {
		sx: { mx: -4 },
		children: p
	});
}, {
	displayName: "ItemAddIconBtn",
	props: ["ctx", "typedef"],
	emits: ["add"]
}), tp = S((e, { emit: t, render: n }) => {
	let r = y(null), i = e5.from(r), a = e4.from(r), l = eV.from(r), o = eL.use(), s = C.seed({ index: 0 }), d = () => {
		l.hide(), a.next(""), r.value && (r.value.value = "", r.value.blur()), s.next({ index: 0 });
	};
	N(a, x((t) => {
		let n = t.trim();
		if (n.startsWith("{") && n.endsWith("}")) try {
			let t = JSON.parse(n);
			o.update(e.ctx.path, t), d();
		} catch (t) {
			o.setError(e.ctx.path, "无效的 JSON 字符串");
		}
	}), g());
	let p = (n) => {
		e.options ? n ??= e.options[s.value.index % e.options.length]?.propName : n ??= a.value, n ? (t("add", n), d()) : o.setError([...e.ctx.path, Z.RecordKey], "无效的属性值");
	};
	N(i, x((e) => {
		switch (e.type) {
			case "SELECT":
				s.next((t) => {
					t.index += e.direction;
				});
				break;
			case "COMMIT":
				p();
				break;
			case "CANCEL": d();
		}
	}), g());
	let c = N(l, n((e) => E(tt, { children: E("input", {
		ref: r,
		type: "text",
		placeholder: "添加属性 (可粘贴 JSON 字符串)",
		"data-options": e
	}) })));
	return N(_([
		a,
		l,
		s,
		e.options$
	]), n(([e, t, n, a]) => a ? a.length > 0 ? E(tr, {
		sx: { mx: -4 },
		children: E(eH, {
			onSelected: (e) => {
				p(e);
			},
			open$: l,
			$content: E("div", { children: a.map((t, r) => e && !t.propName.includes(e) ? null : E(tc, {
				"data-focus": r === n.index % a.length,
				propName: t.propName,
				typedef: t.typedef
			})) }),
			children: c
		})
	}) : null : E(tr, {
		sx: { mx: -4 },
		children: E(H, {
			isOpen: t,
			placement: "right-start",
			$content: O(te, { children: [E(eJ, {
				type: "button",
				onClick: () => i.next({ type: "CANCEL" }),
				children: E(ed, { path: eo })
			}), E(eJ, {
				type: "button",
				onClick: () => i.next({ type: "COMMIT" }),
				children: E(ed, { path: eu })
			})] }),
			children: E(tt, { children: E("input", {
				ref: r,
				type: "text",
				placeholder: "添加属性 (可粘贴 JSON 字符串)"
			}) })
		})
	})));
}, {
	displayName: "PropValueAddInput",
	props: ["ctx", "options"],
	emits: ["add"]
}), tc = c((e) => () => O(tu, {
	"data-value": e.propName,
	tabindex: 0,
	children: [E(eR, {
		optional: !!Z.schemaProp(e.typedef, Z.optional),
		children: e.propName
	}), E(eU, { children: Z.metaProp(e.typedef, "title") })]
}), {
	displayName: "PropMenuItem",
	props: ["propName", "typedef"]
}), tu = V(eX, { displayName: "AddPropMenuItemContainer" })({ [`& ${eR}`]: { textAlign: "left" } }), th = S((e, { render: t }) => {
	let n = eL.use(), r = eM.use(), i = N(e.n$, t((e) => E(e2, { children: e }))), a = q.create(e.ctx.path);
	return N(_([
		e.close$,
		e.value$,
		n.errorAt$(a),
		n.foldedPrefix$(a)
	]), t(([t, o, s, p]) => {
		let c = !!s, u = m(o) || "array" == e.typedef.type, h = !u && L(o);
		if (t) return p ? null : E(l, { children: E(e3, {
			"data-error": c,
			$leading: i,
			indent: e.ctx.path.length,
			children: u ? O(l, { children: [O(eW, { children: ["]", "\xA0\xA0"] }), !e.ctx.readOnly && E(td, {
				ctx: e.ctx,
				typedef: e.typedef,
				onAdd: (t) => {
					n.update(e.ctx.path, (e) => {
						console.log(e), e.push(t);
					}, [], e.typedef);
				}
			})] }) : h ? O(l, { children: [O(eW, { children: ["}", "\xA0\xA0"] }), !e.ctx.readOnly && E(tp, {
				ctx: e.ctx,
				onAdd: (t) => {
					n.update([...e.ctx.path, t], void 0);
				},
				options: "record" != e.typedef.type ? [...e.typedef.entries(o, e.ctx)].filter(([e]) => !Object.hasOwn(o, e)).map(([e, t, n]) => ({
					propName: String(e),
					typedef: n
				})) : void 0
			})] }) : null
		}) });
		if (p == eA.PREFIX) return null;
		let f = () => {
			let t = D(e.ctx.path);
			return O(l, { children: [d(t) ? null : E(eR, {
				deprecated: Z.schemaProp(e.typedef, "deprecated"),
				$leading: e.ctx.readOnly ? null : E(ts, { onRemove: () => {
					n.delete(e.ctx.path);
				} }),
				children: E(z, {
					sx: J(t) ? { opacity: 1 } : {
						opacity: .3,
						font: "code"
					},
					children: `${t}`
				})
			}), J(t) ? E(eW, { children: ": " }) : e.ctx.path.length > 0 ? E(eW, { children: "\xA0\xA0" }) : null] });
		};
		return E(e3, {
			indent: e.ctx.path.length,
			"data-dirty": ((e, t) => {
				if (!(m(e) || L(e))) {
					if (d(t) && !d(e)) return eI.ADD;
					if (!d(t) && d(e)) return eI.DELETE;
					if (!d(t) && !d(e) && e !== t) return eI.EDIT;
				}
				return eI.NONE;
			})(o, e.previous),
			"data-error": c,
			$leading: O(l, { children: [i, u || h ? E(e8, {
				folded: p !== eA.NONE,
				onClick: () => {
					n.toggleFold(a);
				}
			}) : null] }),
			$comment: (() => {
				let t = Z.metaProp(e.typedef, "title"), n = Z.metaProp(e.typedef, "description");
				return O(l, { children: [(t || n) && E(eK, { children: n ? E(eY, {
					$title: E(eU, { children: E(er, { text: n }) }),
					placement: "top",
					children: O("div", { children: [
						t,
						" ",
						E(ed, { path: "M11,18H13V16H11V18M12,6A4,4 0 0,0 8,10H10A2,2 0 0,1 12,8A2,2 0 0,1 14,10C14,12 11,11.75 11,15H13C13,12.75 16,12.5 16,10A4,4 0 0,0 12,6M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3Z" })
					] })
				}) : E("span", { children: t }) }), c && E(eG, { children: `${s}` })] });
			})(),
			children: (() => {
				if (p) {
					if (p == eA.EXACT) {
						if (u) return O(l, { children: [f(), E(eW, { children: "[...]" })] });
						if (h) return O(l, { children: [f(), E(eW, { children: "{...}" })] });
					}
					return null;
				}
				return O(l, { children: [f(), u ? O(l, { children: [E(eW, { children: "[" }), E(eD, { children: E(to, { value: o }) })] }) : h ? O(l, { children: [E(eW, { children: "{" }), E(eD, { children: E(to, { value: o }) })] }) : r.$value?.(e.typedef, o, e.ctx)] });
			})()
		});
	}));
}, {
	displayName: "Line",
	props: [
		"n",
		"typedef",
		"ctx",
		"value",
		"previous",
		"close"
	]
});
let tf = (e, t, n) => E(e9, {
	typedef: e,
	value: t,
	ctx: n
});
var ty = S((e, { render: t }) => {
	let n = eL.use(), r = eM.use();
	return N(n, t((t) => E(e7, { children: E(eM, {
		value: { $value: r.$value ?? tf },
		children: E(tm, { children: E(tv, { children: [...function* e(t, n, r, i) {
			if ("object" == r.type || "record" == r.type || "intersection" == r.type || "union" == r.type && Z.schemaProp(r, "discriminator")) {
				let l = {
					value: t ?? {},
					previous: n,
					typedef: r,
					ctx: i
				};
				for (let [t, o, s] of (yield l, r.entries(l.value, i))) Object.hasOwn(l.value, t) && (yield* e(o, a(n, [t]), s, {
					...i,
					path: [...i.path, t],
					branch: [...i.branch, o]
				}));
				yield {
					...l,
					close: !0
				};
				return;
			}
			if ("union" == r.type && d(Z.schemaProp(r, "discriminator"))) {
				let l = Z.schemaProp(r, "oneOf");
				if (l?.length == 2) {
					let r = l.find((e) => "array" == e.type), o = l.find((e) => "array" != e.type);
					if (r && o && Z.schemaProp(r, "items").type == o.type) {
						let l = eP(t), o = eP(n), s = {
							value: l,
							previous: o,
							typedef: r,
							ctx: i
						};
						for (let [t, n, d] of (yield s, r.entries(l, i))) yield* e(n, a(o, [t]), d, {
							...i,
							path: [...i.path, t],
							branch: [...i.branch, n]
						});
						yield {
							...s,
							close: !0
						};
						return;
					}
				}
			}
			if ("array" == r.type) {
				let l = {
					value: t,
					previous: n,
					typedef: r,
					ctx: i
				};
				for (let [o, s, d] of (yield l, r.entries(t, i))) yield* e(s, a(n, [o]), d, {
					...i,
					path: [...i.path, o],
					branch: [...i.branch, s]
				});
				yield {
					...l,
					close: !0
				};
				return;
			}
			if ("any" == r.type || "unknown" == r.type) {
				if (m(t)) return void (yield* e(t, n, ee(G()), i));
				if ($(t)) return void (yield* e(t, n, Y(Q(), G()), i));
			}
			yield {
				value: t,
				previous: n,
				typedef: r,
				ctx: i
			};
		}(t, n.initialsAt([]), n.typedef, {
			...U,
			readOnly: e.readOnly
		})].map((e, t) => {
			let n = q.create(e.ctx.path);
			return E(th, {
				n: t + 1,
				ctx: e.ctx,
				typedef: e.typedef,
				value: e.value,
				previous: e.previous,
				close: e.close ?? !1
			}, `${n}::${e.close ?? !1}`);
		}) }) })
	}) })));
}, {
	displayName: "JSONEditorView",
	props: ["readOnly"]
}), tm = V("div", { displayName: "JSONEditorContainer" })({
	w: "100%",
	h: "100%",
	overflow: "auto"
}), tv = V("div", ({}, { slots: e }) => (t) => E(t, { children: e.default() }), { displayName: "Lines" })({
	position: "relative",
	display: "flex",
	flexDirection: "column",
	w: "100%",
	maxW: "100%",
	py: 2
});
export { eT as n, eL as r, ty as t };
