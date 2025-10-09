import { n as e, r as t, t as n } from "./rolldown-runtime.D8qhy2Lt.chunk.js";
import { B as r, D as i, F as l, G as o, H as a, Ht as s, I as u, J as c, L as d, M as p, Mt as f, N as h, O as m, P as g, Pt as y, R as v, Rt as x, S as b, Tt as k, V as C, Vt as w, a as S, c as A, d as T, f as D, g as L, h as _, i as E, jt as I, k as N, kt as M, l as O, m as P, nt as z, r as F, s as R, tt as $, u as B, w as j, wt as H, z as V, zt as U } from "./vendor-innoai-tech-vuekit.BzJ0CBX5.chunk.js";
import { D as q, H as W, M as G, N as J, O as X, R as K, S as Y, V as Q, c as Z, f as ee, g as et, h as en, k as er, m as ei, u as el, v as eo, z as ea } from "./vendor-innoai-tech-vueuikit.CyLdjQA1.chunk.js";
import { c as es, g as eu, h as ec, i as ed, l as ep, m as ef, n as eh, o as em, p as eg, r as ey, t as ev, u as ex } from "./vendor-rxjs.DKDKEK-M.chunk.js";
var eb, ek, eC, ew = G("button", {
	displayName: "ButtonBase",
	props: [
		"hover",
		"focus",
		"active",
		"disabled"
	]
})({
	textStyle: "sys.label-large",
	display: "inline-flex",
	alignItems: "center",
	justifyContent: "center",
	textDecoration: "none",
	outline: "none",
	overflow: "hidden",
	border: 0,
	margin: 0,
	userSelect: "none",
	cursor: "pointer",
	_disabled: { cursor: "not-allowed" },
	gap: 4,
	h: 36,
	px: 16,
	rounded: "xs",
	transitionDuration: "md4",
	transitionTimingFunction: "standard-accelerate",
	bg: "none",
	pos: "relative",
	zIndex: 0,
	_$before: {
		content: "\"\"",
		pos: "absolute",
		top: 0,
		right: 0,
		left: 0,
		bottom: 0,
		zIndex: -1,
		transitionDuration: "md1",
		transitionTimingFunction: "standard-accelerate"
	},
	$data_icon: {
		boxSize: 18,
		_data_placement__start: { ml: -8 },
		_data_placement__end: { mr: -8 }
	}
}), eS = G(ew, { displayName: "FilledButton" })({
	containerStyle: "sys.primary",
	py: 6,
	px: 16,
	_hover: {
		shadow: "1",
		_$before: { bgColor: W("white", Q(.08)) }
	},
	_focus: {
		shadow: "1",
		_$before: { bgColor: W("white", Q(.12)) }
	},
	_active: {
		shadow: "1",
		_$before: { bgColor: W("white", Q(.12)) }
	},
	_disabled: {
		shadow: "0",
		color: W("sys.on-surface", Q(.38)),
		bgColor: "rgba(0,0,0,0)",
		_$before: { bgColor: W("sys.on-surface", Q(.12)) }
	}
}), eA = G(ew, { displayName: "TextButton" })({
	extends: [{
		px: 16,
		$data_icon: {
			_data_placement__start: { ml: -4 },
			_data_placement__end: { mr: -4 }
		}
	}],
	color: "sys.primary",
	_$before: { bgColor: "rgba(0,0,0,0)" },
	_hover: { _$before: { bgColor: W("sys.primary", Q(.08)) } },
	_focus: { _$before: { bgColor: W("sys.primary", Q(.12)) } },
	_active: { _$before: { bgColor: W("sys.primary", Q(.12)) } },
	_disabled: {
		color: W("sys.on-surface", Q(.38)),
		bgColor: "rgba(0,0,0,0)",
		_$before: { bgColor: "rgba(0,0,0,0)" }
	}
}), eT = G(ew, { displayName: "OutlinedButton" })({
	extends: [{ border: "1px solid" }],
	containerStyle: "sys.surface",
	borderColor: "sys.outline",
	fontWeight: "bold",
	_hover: { bgColor: W("sys.primary", Q(.08)) },
	_active: { bgColor: W("sys.primary", Q(.12)) },
	_focus: { bgColor: W("sys.primary", Q(.12)) },
	_disabled: {
		color: W("sys.on-surface", Q(.38)),
		bgColor: "rgba(0,0,0,0)",
		borderColor: W("sys.on-surface", Q(.12))
	}
}), eD = G("span", (e, {}) => (t) => {
	let n = e.size ?? 24;
	return A(t, {
		"data-icon": !0,
		"data-placement": e.placement,
		"data-has-size": !!e.size,
		children: A("svg", {
			viewBox: `0 0 ${n} ${n}`,
			width: n,
			height: n,
			children: A("path", {
				d: e.path,
				children: e.animate && A("animateTransform", {
					attributeName: "transform",
					attributeType: "XML",
					type: "rotate",
					repeatCount: "indefinite",
					dur: "1s",
					from: `0 ${n / 2} ${n / 2}`,
					to: `360 ${n / 2} ${n / 2}`
				})
			})
		})
	});
}, {
	displayName: "Icon",
	props: [
		"path",
		"placement",
		"animate",
		"size"
	]
})({
	display: "inline-block",
	_data_has_size__false: {
		boxSize: "1.2em",
		"& svg": {
			w: "100%",
			h: "100%"
		}
	}
}), eL = G(eA, { displayName: "IconButton" })({
	boxSize: 36,
	p: 0,
	color: "sys.on-surface-variant",
	[`${eD}`]: { boxSize: 18 }
});
let e_ = K({
	from: { opacity: 0 },
	to: { opacity: 1 },
	duration: ea.duration.md1,
	easing: ea.easing.standard.accelerate
}, {
	from: { opacity: 1 },
	to: { opacity: 0 },
	duration: ea.duration.sm4,
	easing: ea.easing.standard.decelerate
}), eE = {
	left: K({
		from: { transform: "translateX(-100%)" },
		to: { transform: "translateX(0%)" },
		duration: ea.duration.sm4,
		easing: ea.easing.standard.decelerate
	}, {
		from: { transform: "translateX(0%)" },
		to: { transform: "translateX(-120%)" },
		duration: ea.duration.sm1,
		easing: ea.easing.standard.accelerate
	}),
	right: K({
		from: { transform: "translateX(100%)" },
		to: { transform: "translateX(0%)" },
		duration: ea.duration.sm4,
		easing: ea.easing.standard.decelerate
	}, {
		from: { transform: "translateX(0%)" },
		to: { transform: "translateX(120%)" },
		duration: ea.duration.sm1,
		easing: ea.easing.standard.accelerate
	}),
	top: K({
		from: { transform: "translateY(-100%)" },
		to: { transform: "translateY(0%)" },
		duration: ea.duration.sm4,
		easing: ea.easing.standard.decelerate
	}, {
		from: { transform: "translateY(0%)" },
		to: { transform: "translateY(-120%)" },
		duration: ea.duration.sm1,
		easing: ea.easing.standard.accelerate
	}),
	bottom: K({
		from: { transform: "translateY(100%)" },
		to: { transform: "translateY(0%)" },
		duration: ea.duration.sm4,
		easing: ea.easing.standard.decelerate
	}, {
		from: { transform: "translateY(0%)" },
		to: { transform: "translateY(120%)" },
		duration: ea.duration.sm1,
		easing: ea.easing.standard.accelerate
	})
};
var eI = G("div", { displayName: "TooltipContainer" })({
	mt: 4,
	py: 2,
	px: 8,
	rounded: "xs",
	shadow: "3",
	containerStyle: "sys.on-surface",
	textStyle: "sys.body-small",
	pos: "relative",
	pointerEvents: "none",
	maxW: "24vw",
	zIndex: 100
}), eN = j((e, { slots: t }) => {
	let n = z(!1), r = z(null);
	return () => {
		let i = t.default ? t.default()[0] : null, l = t.title ? t.title() : e.title;
		return l ? A(q, {
			isOpen: n.value,
			onClickOutside: () => n.value = !1,
			$transition: ({ content: e }) => A(e_, { children: e }),
			$content: A(eI, { children: l }),
			children: i ? c(i, {
				onVnodeMounted: (e) => {
					r.value = function e(t) {
						if (t) {
							if (t instanceof HTMLElement) return t;
							if (t instanceof Text) return e(t.nextElementSibling);
						}
						return null;
					}(e.el);
				},
				onMouseover: () => {
					n.value = !0;
				},
				onMouseleave: () => {
					n.value = !1;
				}
			}) : null
		}) : i;
	};
}, {
	displayName: "Tooltip",
	props: ["title"]
});
let eM = X({ apply({ elements: e, rects: t }) {
	Object.assign(e.floating.style, { width: `${t.reference.width}px` });
} });
var eO = G("div", ({}, { slots: e }) => (t) => A(t, { children: A("div", {
	"data-menu-list": !0,
	children: e.default?.()
}) }), { displayName: "MenuContainer" })({
	py: 4,
	px: 4,
	rounded: "xs",
	shadow: "3",
	containerStyle: "sys.surface",
	pos: "relative",
	zIndex: 100,
	$data_menu_list: {
		maxH: "40vh",
		overflow: "auto"
	},
	textStyle: "sys.label-small",
	fontSize: 12
}), eP = G("div", (e, { slots: t }) => (n) => O(n, {
	"data-active": e.active,
	children: [!H(e.active) && A(eD, {
		"data-check-icon": !0,
		path: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"
	}), t.default?.()]
}), {
	displayName: "MenuItem",
	props: ["active"]
})({
	py: 6,
	px: 12,
	rounded: "xs",
	overflow: "hidden",
	display: "flex",
	alignItems: "center",
	gap: 4,
	"[data-check-icon]": { visibility: "hidden" },
	_hover: {
		cursor: "pointer",
		bgColor: W("sys.on-surface", Q(.08))
	},
	_focus: { bgColor: W("sys.on-surface", Q(.08)) },
	_active: {
		color: "sys.primary",
		"[data-check-icon]": { visibility: "visible" }
	}
}), ez = j((e, { slots: t, emit: n }) => {
	let r, i = B(!1);
	$(() => e.isOpen, (e) => {
		i.value = e ?? i.value;
	}), $(() => i.value, (e) => {
		e ? n("did-open") : n("did-close");
	});
	let l = () => {
		i.value = !0;
	}, o = (r = (e) => {
		n("selected", e), i.value = !1;
	}, (e) => {
		let t = [e.target, ...e.composedPath()].find((e) => e?.hasAttribute?.("data-value"));
		if (t) {
			let e = t?.getAttribute("data-value");
			null !== e && r(e);
		}
	});
	return () => {
		let n = t.default?.()[0];
		return A(q, {
			isOpen: !e.disabled && i.value,
			onClickOutside: () => {
				i.value = !1;
			},
			placement: e.fullWidth ? "bottom-start" : e.placement,
			middleware: e.fullWidth ? [eM] : void 0,
			$content: A(eO, {
				onClick: o,
				children: t.menu?.() ?? []
			}),
			children: n ? e.disabled ? c(n, { "data-disabled": e.disabled }) : c(n, { onClick: l }) : null
		});
	};
}, {
	displayName: "Menu",
	props: [
		"isOpen",
		"disabled",
		"fullWidth",
		"placement"
	],
	emits: [
		"did-open",
		"did-close",
		"selected"
	]
}), eF = G("div", { displayName: "SheetDialogContainer" })({
	maxH: "96vh",
	maxW: "96vw",
	h: "96vh",
	w: "96vw",
	display: "flex",
	flexDirection: "column",
	overflow: "hidden"
}), eR = G("div", { displayName: "SheetDialogHeading" })({
	px: 24,
	py: 24,
	display: "flex",
	alignItems: "center",
	gap: 14
}), e$ = G("div", { displayName: "SheetDialogFooter" })({
	px: 24,
	py: 24,
	display: "flex",
	alignItems: "center",
	justifyContent: "flex-end",
	gap: 8
}), eB = G("div", { displayName: "SheetDialogHeadingTitle" })({
	flex: 1,
	textStyle: "sys.headline-small"
}), ej = G("div", { displayName: "SheetDialogContent" })({
	flex: 1,
	overflow: "auto",
	pt: 24,
	px: 24
}), eH = G("div", { displayName: "SheetDialogWrapper" })({
	pos: "absolute",
	top: 0,
	left: 0,
	h: "100vh",
	w: "100vw",
	zIndex: 100,
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	$data_dialog_backdrop: {
		cursor: "pointer",
		pos: "absolute",
		top: 0,
		left: 0,
		h: "100vh",
		w: "100vw",
		zIndex: -1,
		bgColor: W("sys.scrim", Q(.38))
	},
	$data_dialog_content: {
		pos: "absolute",
		shadow: "3",
		overflow: "auto",
		containerStyle: "sys.surface",
		display: "flex",
		flexDirection: "column"
	},
	$data_dialog_content__bottom: {
		roundedTop: "sm",
		bottom: 0
	},
	$data_dialog_content__right: {
		roundedLeft: "sm",
		right: 0
	},
	$data_dialog_content__left: {
		roundedRight: "sm",
		left: 0
	},
	$data_dialog_content__top: {
		roundedBottom: "sm",
		top: 0
	}
}), eV = class extends _ {
	show = () => this.next(!0);
	hide = () => this.next(!1);
}, eU = j((e, { slots: t, emit: n }) => {
	let r = P(!1), i = P(e.isOpen ?? !1);
	$(() => e.isOpen, (e) => {
		!0 === e ? i.value = !0 : !1 === e && (r.value = !1);
	});
	let l = eE[e.position];
	return () => A(er, {
		isOpen: i.value,
		onContentBeforeMount: () => r.value = !0,
		onEscKeydown: () => r.value = !1,
		children: O(eH, { children: [A(e_, {
			onComplete: (e) => {
				"leave" == e && (i.value = !1, n("close"));
			},
			children: r.value ? A("div", {
				"data-dialog-backdrop": !0,
				onClick: () => r.value = !1
			}) : null
		}), A(l, { children: r.value ? A("div", {
			"data-dialog-content": e.position,
			children: t.default?.()
		}) : null })] })
	});
}, {
	displayName: "SheetDialog",
	props: ["position", "isOpen"],
	emits: ["close"]
}), eq = j((e) => e.setup(), {
	displayName: "Defer",
	props: ["setup"]
}), eW = (e, t) => {
	let n = new eV(!1);
	return b(n, { $elem: L(n, R((r) => A(eU, {
		isOpen: r,
		position: t.position,
		onClose: () => n.hide(),
		children: A(eq, { setup: () => e(n) })
	}))) });
};
let eG = (e) => eW(e, { position: "top" }), eJ = (e) => eW(e, { position: "left" });
ea.duration.md1, ea.easing.standard.accelerate, ea.duration.sm4, ea.easing.standard.accelerate, ea.duration.sm4, ea.easing.standard.accelerate, ea.duration.sm1, ea.easing.standard.accelerate;
var eX = G("div", (e, { slots: t }) => (n) => {
	let r = e.valued, i = e.invalid, l = e.disabled, o = (t.default?.() ?? []).map((e) => "input" === e.type ? (r = !!s(e.props, ["value"], s(e.props, ["placeholder"], r)), l = s(e.props, ["disabled"], l), c(e, { disabled: l })) : c(e));
	return O(n, {
		"data-valued": r,
		"data-invalid": i,
		"data-disabled": l,
		"data-focus-within": e.focus,
		"data-has-leading": !!t.leading,
		"data-has-trailing": !!t.trailing,
		children: [O("div", {
			"data-input-container": !0,
			children: [O("div", {
				"data-input-decorator-container": !0,
				children: [
					A("div", { "data-input-decorator-leading": !0 }),
					A("div", {
						"data-input-decorator-label": !0,
						children: A("div", {
							"data-input-label": !0,
							children: t.label?.()
						})
					}),
					A("div", { "data-input-decorator-trailing": !0 })
				]
			}), O("div", {
				"data-input-row": !0,
				children: [
					t.leading && A(eK, {
						role: "leading",
						children: t.leading()
					}),
					o,
					t.trailing && A(eK, {
						role: "trailing",
						children: t.trailing()
					})
				]
			})]
		}), t.supporting && A("div", {
			"data-input-supporting": !0,
			children: t.supporting?.()
		})]
	});
}, {
	displayName: "TextField",
	props: [
		"focus",
		"invalid",
		"disabled",
		"valued"
	]
})({
	display: "block",
	pos: "relative",
	textStyle: "sys.body-small",
	containerStyle: "sys.surface",
	$data_input_container: {
		pos: "relative",
		zIndex: 1
	},
	$data_input_row: {
		pos: "relative",
		rounded: "xs",
		overflow: "hidden",
		minHeight: 40,
		display: "flex",
		alignItems: "stretch"
	},
	$data_input_decorator_container: {
		pos: "absolute",
		left: 0,
		top: 0,
		bottom: 0,
		right: 0,
		display: "flex",
		zIndex: 1,
		pointerEvents: "none",
		rounded: "xs"
	},
	$data_input_decorator_leading: {
		roundedLeft: "xs",
		transitionDuration: "sm1",
		transitionTimingFunction: "standard",
		width: 16,
		borderLeft: "1px solid",
		borderTop: "1px solid",
		borderBottom: "1px solid",
		borderColor: "sys.outline"
	},
	$data_input_decorator_label: {
		transitionDuration: "sm1",
		transitionTimingFunction: "standard",
		borderBottom: "1px solid",
		borderColor: "sys.outline"
	},
	$data_input_decorator_trailing: {
		borderRight: "1px solid",
		borderTop: "1px solid",
		borderBottom: "1px solid",
		borderColor: "sys.outline",
		roundedRight: "xs",
		transitionDuration: "sm1",
		transitionTimingFunction: "standard",
		flex: 1
	},
	$data_input_label: {
		position: "relative",
		top: -12,
		padding: 4,
		textStyle: "sys.label-small",
		color: "sys.on-surface-variant",
		opacity: .68,
		display: "flex",
		alignItems: "center"
	},
	$data_input: {
		flex: 1,
		w: "100%",
		m: 0,
		px: 16,
		py: 4,
		cursor: "text",
		"&[readonly]": { cursor: "pointer" },
		bg: "inherit",
		color: "sys.on-surface",
		outline: "none",
		border: "none",
		textStyle: "sys.body-small",
		_disabled: { cursor: "not-allowed" }
	},
	$data_input_supporting: {
		textStyle: "sys.body-small",
		px: 16,
		pt: 4,
		display: "flex",
		gap: 16,
		color: "sys.on-surface-variant"
	},
	$data_icon: { color: "sys.on-surface-variant" },
	_has_leading: { $data_input: { pl: 28 } },
	_has_trailing: { $data_input: { pr: 28 } },
	_valued: { $data_input: {} },
	_focusWithin: {
		$data_input_decorator_leading: {
			borderWidth: "2px",
			borderColor: "sys.primary"
		},
		$data_input_decorator_label: {
			borderWidth: "2px",
			borderColor: "sys.primary"
		},
		$data_input_decorator_trailing: {
			borderWidth: "2px",
			borderColor: "sys.primary"
		},
		$data_input_label: { color: "sys.primary" }
	},
	_invalid: {
		$data_input_decorator_leading: {
			borderWidth: "2px",
			borderColor: "sys.error"
		},
		$data_input_decorator_label: {
			borderWidth: "2px",
			borderColor: "sys.error"
		},
		$data_input_decorator_trailing: {
			borderWidth: "2px",
			borderColor: "sys.error"
		},
		$data_input_label: { color: "sys.error" },
		$data_input_supporting: { color: "sys.error" },
		$data_icon: { color: "sys.error" }
	},
	_disabled: {
		opacity: .38,
		cursor: "not-allowed"
	}
}), eK = G("div", {
	displayName: "Maker",
	props: ["role"]
})({
	pos: "absolute",
	top: 4,
	bottom: 4,
	display: "flex",
	alignItems: "center",
	color: "sys.on-surface-variant",
	_role__leading: {
		left: 12,
		$data_icon: { ml: -4 }
	},
	_role__trailing: {
		right: 12,
		$data_icon: { mr: -4 }
	}
});
let eY = (e) => y(e) ? e : H(e) ? [] : [e], eQ = ((eb = {})[eb.NONE = 0] = "NONE", eb[eb.EXACT = 1] = "EXACT", eb[eb.PREFIX = 2] = "PREFIX", eb), eZ = ((ek = {}).NONE = "NONE", ek.ADD = "ADD", ek.EDIT = "EDIT", ek.DELETE = "DELETE", ek);
var e1 = class e extends eu {
	static of(t, n) {
		return new e(t, n ?? ("array" == t.type ? [] : {}));
	}
	#e = new _({});
	constructor(e, t) {
		super((e) => {
			let t = this.#e.subscribe(e);
			return () => {
				t.unsubscribe();
			};
		}), this.typedef = e, this.initials = t, this.#e.next(t);
	}
	initialsAt(e) {
		return 0 == e.length ? this.initials : s(this.initials, e);
	}
	update(e, t, n, r) {
		(console.log("[json-editor]", "update", JSON.stringify(e), this.typedef.type), this.#t.next({}), 0 == e.length) ? this.#e.next(t) : k(t) ? this.#e.next((i) => {
			let l = s(i, e, n);
			r && "array" == r.type && !y(l) && (l = eY(l)), t(l), I(i, e, l);
		}) : this.#e.next((n) => {
			I(n, e, t);
		});
	}
	delete(e) {
		0 != e.length && (console.log("[json-editor]", "delete", e), this.#e.next((t) => {
			let n = U(e);
			if (f(n)) {
				let r = e.slice(0, e.length - 1), i = r.length > 0 ? s(t, r) : t;
				if (y(i)) return void i.splice(n, 1);
			}
			let r = e.slice(0, e.length - 1), i = r.length > 0 ? s(t, r) : t;
			delete i[n];
		}));
	}
	#t = new _({});
	#n = new _({});
	get error$() {
		return this.#t;
	}
	get foldedPointerPrefixes$() {
		return this.#n;
	}
	errorAt$(e) {
		let t = this.#r(e);
		return L(this.error$, ex((e) => e[t]), ey());
	}
	foldedPrefix$(e) {
		let t = this.#r(e);
		return L(this.foldedPointerPrefixes$, ex((e) => {
			for (let [n] of Object.entries(e)) {
				if (n === t) return eQ.EXACT;
				if (t.startsWith(n)) return eQ.PREFIX;
			}
			return eQ.NONE;
		}), ey());
	}
	#r(e) {
		return x(e) ? e : r.create(e);
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
let e0 = F(() => new e1(l(), {})), e2 = F(() => ({}));
var e4 = G("span", { displayName: "ActionToolbar" })({
	px: 2,
	pos: "relative",
	visibility: "hidden",
	border: "1px solid",
	borderColor: "rgba(0,0,0,0)",
	display: "flex",
	alignItems: "center"
}), e3 = G(eL, { displayName: "ActionBtn" })({
	transition: "none",
	width: 24,
	height: 24,
	rounded: "xs",
	[`& ${eD}`]: { svg: {
		width: 16,
		height: 16
	} }
}), e5 = G("span", { displayName: "TextBox" })({
	textStyle: "sys.label-small",
	fontWeight: "bold",
	fontFamily: "inherit",
	fontSize: 12,
	border: "1px solid",
	borderColor: "rgba(0,0,0,0)",
	py: 4,
	wordBreak: "keep-all",
	whiteSpace: "nowrap"
}), e9 = G(e5, { displayName: "TokenView" })({
	font: "code",
	opacity: .3
}), e6 = G(e4, { displayName: "PropLeading" })({
	position: "absolute",
	ml: -28
}), e8 = G(e5, { displayName: "PropNameView" })({
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
}), e7 = S((e, { slots: t }) => () => O(e8, {
	"data-deprecated": e.deprecated,
	"data-optional": e.optional,
	"data-nullable": e.nullable,
	children: [t.leading && A(e6, {
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
}), te = class e extends _ {
	static from(t) {
		let n = new e(!1);
		return L(t, eh((e) => e ? em(L(es(e, "focus"), ev(() => {
			n.show();
		})), L(es(e, "blur"), ed(200), ev(() => {
			n.value && n.hide();
		}))) : eg), D()), n;
	}
	show() {
		this.next(!0);
	}
	hide() {
		this.next(!1);
	}
}, tt = X({ apply({ elements: e, rects: t }) {
	Object.assign(e.floating.style, { width: `${t.reference.width}px` });
} }), tn = S((e, { emit: t, slots: n, render: r }) => {
	let i = e.open$ ?? new te(!1), l = (e) => {
		let n = [e.target, ...e.composedPath()].find((e) => e?.hasAttribute?.("data-value"));
		if (n) {
			let e = n.getAttribute("data-value");
			H(e) || (t("selected", e), i.hide());
		}
	};
	return L(i, r((e) => A(q, {
		isOpen: e,
		onClickOutside: () => i.hide(),
		onEscKeydown: () => i.hide(),
		placement: "bottom-start",
		middleware: [tt],
		$content: A(tr, {
			onClick: l,
			children: n.content?.()
		}),
		children: n.default?.()?.[0] ?? null
	})));
}, {
	displayName: "Menu",
	props: ["open$"],
	emits: ["selected"]
}), tr = G("div", { displayName: "PopoverContainer" })({
	textStyle: "sys.body-small",
	pos: "relative",
	containerStyle: "sys.surface-container-lowest",
	borderBottom: "1px solid",
	borderRight: "1px solid",
	borderLeft: "1px solid",
	borderColor: W("sys.outline-variant", Q(.38)),
	overflow: "hidden",
	"[data-placement*=bottom] &": { roundedBottom: "sm" },
	"[data-placement*=top] &": { roundedTop: "sm" }
}), ti = G("div", { displayName: "MenuItem" })({
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
}), tl = G("div", { displayName: "PropDoc" })({
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
}), to = G("span", { displayName: "PropDescription" })({
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
}), ta = S((e, { slots: t, render: n }) => {
	let r = new te(!1);
	return L(r, n((n) => {
		let i = t.default?.()[0];
		return A(q, {
			isOpen: n,
			placement: e.placement ?? "left",
			$content: A(tu, { children: A(ts, { children: t.title() }) }),
			children: i ? c(i, {
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
}), ts = G("div", { displayName: "TooltipContainer" })({
	py: 4,
	px: 12,
	rounded: "xs",
	shadow: "3",
	textStyle: "sys.body-small",
	containerStyle: "sys.on-surface",
	pos: "relative",
	zIndex: 100
}), tu = G("div", { displayName: "TooltipWrapper" })({ px: 8 }), tc = G("div", { displayName: "LineError" })({
	display: "block",
	fontSize: 10,
	lineHeight: 14,
	color: "sys.error",
	position: "absolute",
	px: 2,
	top: -2,
	right: 0
}), td = G("div", { displayName: "LinePrefix" })({
	position: "relative",
	display: "flex",
	alignItems: "start",
	justifyContent: "flex-end",
	minWidth: "2vw",
	px: 12,
	userSelect: "none"
}), tp = G("div", { displayName: "LineContent" })({
	flex: 1,
	minW: 0
}), tf = G("div", { displayName: "LineContentMain" })({
	position: "relative",
	display: "flex",
	alignItems: "start"
}), th = G(e9, { displayName: "LineNumber" })({
	opacity: .28,
	font: "code"
}), tm = G(e9, (e) => (t) => A(t, { children: A(eD, { path: e.folded ? et : en }) }), {
	displayName: "LineFoldable",
	props: ["folded"]
})({
	position: "absolute",
	top: 0,
	left: 2,
	cursor: "pointer",
	font: "code",
	opacity: .58,
	[`& ${eD}`]: { svg: {
		width: 16,
		height: 16
	} }
}), tg = G("div", (e, { slots: t }) => (n) => O(n, { children: [A(td, { children: t.leading?.() }), A(tp, {
	sx: { paddingLeft: 14 * e.indent * 2 },
	children: O(tf, { children: [t.default?.(), t.comment?.()] })
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
		[`& ${e4}`]: { visibility: "visible" }
	},
	"&:focus-within": { containerStyle: "sys.surface-container" },
	[`&[data-dirty=${eZ.EDIT}]`]: { bgColor: W("sys.warning-container", Q(.38)) },
	[`&[data-dirty=${eZ.ADD}]`]: { bgColor: W("sys.success-container", Q(.38)) },
	[`&[data-dirty=${eZ.DELETE}]`]: {
		bgColor: W("sys.error-container", Q(.38)),
		textDecoration: "line-through",
		opacity: .58
	},
	_error: { bgColor: W("sys.error-container", Q(.38)) }
}), ty = class e extends _ {
	static from(t) {
		let n = new e("");
		return L(t, eh((e) => e ? L(es(e, "input"), ev((e) => {
			n.next(e.target.value?.trim());
		})) : eg), T()), n;
	}
}, tv = class e extends ec {
	static from(t) {
		let n = new e();
		return L(t, eh((e) => e ? em(L(es(e, "keypress"), ev((e) => {
			"Enter" !== e.key || e.shiftKey || (e.preventDefault(), n.next({ type: "COMMIT" }));
		})), L(es(e, "keydown"), ev((e) => {
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
		})), L(es(e, "keyup"), ev((e) => {
			"Escape" === e.key && n.next({ type: "CANCEL" });
		}))) : eg), T()), n;
	}
}, tx = class extends eu {
	static sync(e, t) {
		return L(em(L(e, ev((e) => {
			e && e == r.create(t.path()) && t.editing$.show();
		})), L(t.editing$, ed(1), ev((n) => {
			n || e.disable(t.path());
		})), L(ep([t.value$, e]), ed(1), ev(([n, r]) => {
			H(n) && !r && e.enable(t.path());
		}))), T());
	}
	#i = new ef(null);
	constructor() {
		super((e) => {
			let t = this.#i.subscribe(e);
			return () => t.unsubscribe();
		});
	}
	enable(e) {
		this.#i.value || this.#i.next(r.create(e));
	}
	disable(e) {
		this.#i.value === r.create(e) && this.#i.next(null);
	}
};
let tb = F(() => new tx());
var tk = S((e, { render: t }) => {
	let n, r = B(null), i = B(null), l = B(null), o = tv.from(l), a = ty.from(l), s = tb.use(), u = te.from(l), c = e0.use();
	tx.sync(s, {
		editing$: u,
		value$: e.value$,
		path: () => e.ctx.path
	});
	let d = () => {
		if ("enums" === e.typedef.type) {
			let t = (C.schemaProp(e.typedef, "enum") ?? []).indexOf(e.value);
			if (t > -1) return t;
		}
		return 0;
	}, p = new _({ index: d() }), f = () => {
		a.next(""), u.hide();
	}, h = (t) => {
		if ("enums" === e.typedef.type) {
			let n = C.schemaProp(e.typedef, "enum") ?? [];
			t ??= n[p.value.index % n.length];
		} else t ??= l.value?.value ? l.value?.value : void 0;
		if (H(t)) return void c.delete(e.ctx.path);
		let [n, r] = e.typedef.validate(t, { coerce: !0 });
		n ? c.setError(e.ctx.path, n.message) : (c.update(e.ctx.path, r), f());
	};
	return (e.allowRawJSON && L(a, ev((t) => {
		let n = t.trim();
		if (n.startsWith("{") && n.endsWith("}") || n.startsWith("[") && n.endsWith("]")) try {
			let t = JSON.parse(n);
			c.update(e.ctx.path, t), f();
		} catch (t) {
			c.setError(e.ctx.path, "无效的 JSON 字符串");
		}
	}), T()), L(o, ev((t) => {
		switch (t.type) {
			case "SELECT":
				p.next((e) => {
					e.index += t.direction;
				});
				break;
			case "COMMIT":
				h();
				break;
			case "CANCEL": f(), p.next({ index: d() }), H(e.value) && c.delete(e.ctx.path);
		}
	}), T()), L(em(L(i, E((e) => {
		if (e) {
			let t = new ResizeObserver((e) => {
				for (let t of e) t.contentBoxSize && (n = t.contentBoxSize[0]?.blockSize);
			});
			return t.observe(e), () => {
				t.disconnect();
			};
		}
		return () => {};
	})), L(l, ed(1), ev((e) => {
		e && (e?.focus(), e.value && (e.selectionStart = 0, e.selectionEnd = e.value.length));
	})), L(l, eh((e) => {
		if (e) {
			let t = n ? n - 2 : e.getBoundingClientRect().height, l = (e) => {
				e.style.height = `${t ?? 0}px`, e.style.height = `${e.scrollHeight}px`;
			};
			return setTimeout(() => l(e)), em(L(es(e, "blur"), ev((t) => {
				t.relatedTarget && (i.value?.contains(t.relatedTarget) || r.value?.contains(t.relatedTarget)) || (t.preventDefault(), h(e.value));
			})), L(es(e, "input"), ev((e) => {
				l(e.target), a.next(e.target.value);
			})));
		}
		return eg;
	}))), T()), "enums" == e.typedef.type) ? L(ep([
		e.value$,
		u,
		p
	]), t(([t, n, { index: o }]) => {
		let a = C.schemaProp(e.typedef, "enum") ?? [], s = C.metaProp(e.typedef, "enumLabels") ?? [];
		return A(tA, {
			ref: i,
			onClick: () => {
				u.show();
			},
			"data-type": typeof t,
			tabindex: 0,
			children: n ? A(tn, {
				onSelected: (e) => {
					h(e);
				},
				open$: u,
				$content: A("div", {
					ref: r,
					children: a.map((e, t) => A(tD, {
						"data-focus": o % a.length === t,
						value: e,
						label: s[t]
					}))
				}),
				children: A(tw, { children: A("input", {
					value: void 0 == t ? "" : `${t}`,
					ref: l,
					"data-options": !0
				}) })
			}) : A(tS, { children: JSON.stringify(t) ?? "undefined" })
		});
	})) : L(ep([e.value$, u]), t(([t, n]) => A(tA, {
		ref: i,
		onClick: () => {
			e.ctx.readOnly || u.show();
		},
		onFocus: () => {
			e.ctx.readOnly || u.show();
		},
		"data-type": typeof t,
		tabindex: 0,
		children: n ? A(q, {
			isOpen: !0,
			placement: "right-start",
			$content: O(tC, {
				ref: r,
				children: [A(e3, {
					type: "button",
					onClick: () => o.next({ type: "CANCEL" }),
					children: A(eD, { path: ee })
				}), A(e3, {
					type: "button",
					onClick: () => o.next({ type: "COMMIT" }),
					children: A(eD, { path: ei })
				})]
			}),
			children: A(tw, { children: A("textarea", {
				ref: l,
				rows: 1,
				value: void 0 == t ? "" : `${t}`
			}) })
		}) : A(tS, { children: JSON.stringify(t) ?? "undefined" })
	})));
}, {
	displayName: "ValueInput",
	props: [
		"typedef",
		"ctx",
		"value",
		"allowRawJSON"
	]
}), tC = G("div", { displayName: "ValueInputActions" })({
	borderRight: "1px solid",
	borderTop: "1px solid",
	borderBottom: "1px solid",
	borderColor: W("sys.outline-variant", Q(.38)),
	containerStyle: "sys.surface-container-lowest",
	roundedRight: "sm",
	display: "flex",
	px: 2,
	py: 0,
	ml: -4
}), tw = G("div", { displayName: "InputWrapper" })({
	flex: 1,
	minWidth: 0,
	maxWidth: "80%",
	display: "flex",
	alignItems: "center",
	border: "1px solid",
	overflow: "hidden",
	borderColor: W("sys.outline-variant", Q(.38)),
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
}), tS = G("div", { displayName: "Value" })({
	border: "1px solid",
	borderColor: "rgba(0,0,0,0)",
	overflow: "hidden",
	textOverflow: "ellipsis",
	_hover: {
		textOverflow: "clip",
		whiteSpace: "normal",
		wordBreak: "break-all"
	}
}), tA = G("div", { displayName: "ValueContainer" })({
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
}), tT = G(ti, { displayName: "EnumMenuItemContainer" })({ [`& ${e7}`]: { textAlign: "left" } }), tD = j((e) => () => O(tT, {
	"data-value": e.value,
	tabindex: 0,
	children: [A(e7, { children: e.value }), e.label && A(to, { children: e.label })]
}), {
	displayName: "EnumMenuItem",
	props: ["value", "label"]
}), tL = t(Z()), t_ = S((e, {}) => () => A(ta, {
	$title: "复制当前节点为 JSON 字符串",
	children: A(e3, {
		type: "button",
		onClick: () => (0, tL.default)(JSON.stringify(e.value, null, 2)),
		children: A(eD, { path: eo })
	})
}), {
	displayName: "CopyAsJSONIconBtn",
	props: ["value"]
}), tE = S(({}, { emit: e }) => () => A(ta, {
	$title: "移除项",
	children: A(e3, {
		type: "button",
		onClick: () => e("remove"),
		children: A(eD, { path: Y })
	})
}), {
	displayName: "ItemRemoveIconBtn",
	emits: ["remove"]
}), tI = S((e, { emit: t, render: n }) => {
	let r = B(null), i = ty.from(r), l = tv.from(r), o = te.from(r), a = e0.use(), s = () => {
		r.value && (r.value.value = "", r.value.blur());
	}, u = (n) => {
		if (n ??= i.value) {
			let [r, i] = C.schemaProp(e.typedef, "items").validate(n, { coerce: !0 });
			if (r) return void a.setError(e.ctx.path, r);
			t("add", i);
		} else t("add", void 0);
		s();
	};
	L(i, ev((t) => {
		let n = t.trim();
		if (n.startsWith("[") && n.endsWith("]")) try {
			let t = JSON.parse(n);
			a.update(e.ctx.path, t), s();
		} catch (t) {
			a.setError(e.ctx.path, "无效的 JSON 字符串");
		}
		if (n.startsWith("{") && n.endsWith("}")) try {
			u(JSON.parse(n));
		} catch (t) {
			a.setError(e.ctx.path, "无效的 JSON 字符串");
		}
	}), T()), L(l, ev((e) => {
		switch (e.type) {
			case "COMMIT":
				u();
				break;
			case "CANCEL": s();
		}
	}), T());
	let c = L(o, n((e) => A(q, {
		isOpen: e,
		placement: "right-start",
		$content: O(tC, { children: [A(e3, {
			type: "button",
			onClick: () => l.next({ type: "CANCEL" }),
			children: A(eD, { path: ee })
		}), A(e3, {
			type: "button",
			onClick: () => l.next({ type: "COMMIT" }),
			children: A(eD, { path: ei })
		})] }),
		children: A(tw, { children: A("input", {
			ref: r,
			type: "text",
			placeholder: "添加数组项 (可粘贴 JSON 字符串)"
		}) })
	})));
	return () => A(tA, {
		sx: { mx: -4 },
		children: c
	});
}, {
	displayName: "ItemAddIconBtn",
	props: ["ctx", "typedef"],
	emits: ["add"]
}), tN = {};
function tM(e, t, n) {
	var r;
	if ((r = e) && "object" == typeof r) {
		if ("value" in e) return "html" !== e.type || n ? e.value : "";
		if (t && "alt" in e && e.alt) return e.alt;
		if ("children" in e) return tO(e.children, t, n);
	}
	return Array.isArray(e) ? tO(e, t, n) : "";
}
function tO(e, t, n) {
	let r = [], i = -1;
	for (; ++i < e.length;) r[i] = tM(e[i], t, n);
	return r.join("");
}
var tP = document.createElement("i");
function tz(e) {
	let t = "&" + e + ";";
	tP.innerHTML = t;
	let n = tP.textContent;
	return (59 !== n.charCodeAt(n.length - 1) || "semi" === e) && n !== t && n;
}
function tF(e, t, n, r) {
	let i, l = e.length, o = 0;
	if (t = t < 0 ? -t > l ? 0 : l + t : t > l ? l : t, n = n > 0 ? n : 0, r.length < 1e4) (i = Array.from(r)).unshift(t, n), e.splice(...i);
	else for (n && e.splice(t, n); o < r.length;) (i = r.slice(o, o + 1e4)).unshift(t, 0), e.splice(...i), o += 1e4, t += 1e4;
}
function tR(e, t) {
	return e.length > 0 ? (tF(e, e.length, 0, t), e) : t;
}
var t$ = {}.hasOwnProperty;
function tB(e) {
	let t = {}, n = -1;
	for (; ++n < e.length;) (function(e, t) {
		let n;
		for (n in t) {
			let r, i = (t$.call(e, n) ? e[n] : void 0) || (e[n] = {}), l = t[n];
			if (l) for (r in l) {
				t$.call(i, r) || (i[r] = []);
				let e = l[r];
				(function(e, t) {
					let n = -1, r = [];
					for (; ++n < t.length;) ("after" === t[n].add ? e : r).push(t[n]);
					tF(e, 0, 0, r);
				})(i[r], Array.isArray(e) ? e : e ? [e] : []);
			}
		}
	})(t, e[n]);
	return t;
}
function tj(e, t) {
	let n = Number.parseInt(e, t);
	return n < 9 || 11 === n || n > 13 && n < 32 || n > 126 && n < 160 || n > 55295 && n < 57344 || n > 64975 && n < 65008 || (65535 & n) == 65535 || (65535 & n) == 65534 || n > 1114111 ? "�" : String.fromCodePoint(n);
}
function tH(e) {
	return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
let tV = t0(/[A-Za-z]/), tU = t0(/[\dA-Za-z]/), tq = t0(/[#-'*+\--9=?A-Z^-~]/);
function tW(e) {
	return null !== e && (e < 32 || 127 === e);
}
let tG = t0(/\d/), tJ = t0(/[\dA-Fa-f]/), tX = t0(/[!-/:-@[-`{-~]/);
function tK(e) {
	return null !== e && e < -2;
}
function tY(e) {
	return null !== e && (e < 0 || 32 === e);
}
function tQ(e) {
	return -2 === e || -1 === e || 32 === e;
}
let tZ = t0(/\p{P}|\p{S}/u), t1 = t0(/\s/);
function t0(e) {
	return function(t) {
		return null !== t && t > -1 && e.test(String.fromCharCode(t));
	};
}
function t2(e) {
	let t = [], n = -1, r = 0, i = 0;
	for (; ++n < e.length;) {
		let l = e.charCodeAt(n), o = "";
		if (37 === l && tU(e.charCodeAt(n + 1)) && tU(e.charCodeAt(n + 2))) i = 2;
		else if (l < 128) /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(l)) || (o = String.fromCharCode(l));
		else if (l > 55295 && l < 57344) {
			let t = e.charCodeAt(n + 1);
			l < 56320 && t > 56319 && t < 57344 ? (o = String.fromCharCode(l, t), i = 1) : o = "�";
		} else o = String.fromCharCode(l);
		o && (t.push(e.slice(r, n), encodeURIComponent(o)), r = n + i + 1, o = ""), i && (n += i, i = 0);
	}
	return t.join("") + e.slice(r);
}
function t4(e, t, n, r) {
	let i = r ? r - 1 : Infinity, l = 0;
	return function(r) {
		return tQ(r) ? (e.enter(n), function r(o) {
			return tQ(o) && l++ < i ? (e.consume(o), r) : (e.exit(n), t(o));
		}(r)) : t(r);
	};
}
let t3 = { tokenize: function(e) {
	let t, n = e.attempt(this.parser.constructs.contentInitial, function(t) {
		return null === t ? void e.consume(t) : (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), t4(e, n, "linePrefix"));
	}, function(n) {
		return e.enter("paragraph"), function n(r) {
			let i = e.enter("chunkText", {
				contentType: "text",
				previous: t
			});
			return t && (t.next = i), t = i, function t(r) {
				if (null === r) {
					e.exit("chunkText"), e.exit("paragraph"), e.consume(r);
					return;
				}
				return tK(r) ? (e.consume(r), e.exit("chunkText"), n) : (e.consume(r), t);
			}(r);
		}(n);
	});
	return n;
} }, t5 = { tokenize: function(e) {
	let t, n, r, i = this, l = [], o = 0;
	return a;
	function a(t) {
		if (o < l.length) {
			let n = l[o];
			return i.containerState = n[1], e.attempt(n[0].continuation, s, u)(t);
		}
		return u(t);
	}
	function s(e) {
		if (o++, i.containerState._closeFlow) {
			let n;
			i.containerState._closeFlow = void 0, t && y();
			let r = i.events.length, l = r;
			for (; l--;) if ("exit" === i.events[l][0] && "chunkFlow" === i.events[l][1].type) {
				n = i.events[l][1].end;
				break;
			}
			g(o);
			let a = r;
			for (; a < i.events.length;) i.events[a][1].end = { ...n }, a++;
			return tF(i.events, l + 1, 0, i.events.slice(r)), i.events.length = a, u(e);
		}
		return a(e);
	}
	function u(n) {
		if (o === l.length) {
			if (!t) return p(n);
			if (t.currentConstruct && t.currentConstruct.concrete) return h(n);
			i.interrupt = !!(t.currentConstruct && !t._gfmTableDynamicInterruptHack);
		}
		return i.containerState = {}, e.check(t9, c, d)(n);
	}
	function c(e) {
		return t && y(), g(o), p(e);
	}
	function d(e) {
		return i.parser.lazy[i.now().line] = o !== l.length, r = i.now().offset, h(e);
	}
	function p(t) {
		return i.containerState = {}, e.attempt(t9, f, h)(t);
	}
	function f(e) {
		return o++, l.push([i.currentConstruct, i.containerState]), p(e);
	}
	function h(r) {
		if (null === r) {
			t && y(), g(0), e.consume(r);
			return;
		}
		return t = t || i.parser.flow(i.now()), e.enter("chunkFlow", {
			_tokenizer: t,
			contentType: "flow",
			previous: n
		}), function t(n) {
			if (null === n) {
				m(e.exit("chunkFlow"), !0), g(0), e.consume(n);
				return;
			}
			return tK(n) ? (e.consume(n), m(e.exit("chunkFlow")), o = 0, i.interrupt = void 0, a) : (e.consume(n), t);
		}(r);
	}
	function m(e, l) {
		let a = i.sliceStream(e);
		if (l && a.push(null), e.previous = n, n && (n.next = e), n = e, t.defineSkip(e.start), t.write(a), i.parser.lazy[e.start.line]) {
			let e, n, l = t.events.length;
			for (; l--;) if (t.events[l][1].start.offset < r && (!t.events[l][1].end || t.events[l][1].end.offset > r)) return;
			let a = i.events.length, s = a;
			for (; s--;) if ("exit" === i.events[s][0] && "chunkFlow" === i.events[s][1].type) {
				if (e) {
					n = i.events[s][1].end;
					break;
				}
				e = !0;
			}
			for (g(o), l = a; l < i.events.length;) i.events[l][1].end = { ...n }, l++;
			tF(i.events, s + 1, 0, i.events.slice(a)), i.events.length = l;
		}
	}
	function g(t) {
		let n = l.length;
		for (; n-- > t;) {
			let t = l[n];
			i.containerState = t[1], t[0].exit.call(i, e);
		}
		l.length = t;
	}
	function y() {
		t.write([null]), n = void 0, t = void 0, i.containerState._closeFlow = void 0;
	}
} };
var t9 = { tokenize: function(e, t, n) {
	return t4(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
} };
function t6(e) {
	return null === e || tY(e) || t1(e) ? 1 : tZ(e) ? 2 : void 0;
}
function t8(e, t, n) {
	let r = [], i = -1;
	for (; ++i < e.length;) {
		let l = e[i].resolveAll;
		l && !r.includes(l) && (t = l(t, n), r.push(l));
	}
	return t;
}
let t7 = {
	name: "attention",
	resolveAll: function(e, t) {
		let n, r, i, l, o, a, s, u, c = -1;
		for (; ++c < e.length;) if ("enter" === e[c][0] && "attentionSequence" === e[c][1].type && e[c][1]._close) {
			for (n = c; n--;) if ("exit" === e[n][0] && "attentionSequence" === e[n][1].type && e[n][1]._open && t.sliceSerialize(e[n][1]).charCodeAt(0) === t.sliceSerialize(e[c][1]).charCodeAt(0)) {
				if ((e[n][1]._close || e[c][1]._open) && (e[c][1].end.offset - e[c][1].start.offset) % 3 && !((e[n][1].end.offset - e[n][1].start.offset + e[c][1].end.offset - e[c][1].start.offset) % 3)) continue;
				a = e[n][1].end.offset - e[n][1].start.offset > 1 && e[c][1].end.offset - e[c][1].start.offset > 1 ? 2 : 1;
				let d = { ...e[n][1].end }, p = { ...e[c][1].start };
				ne(d, -a), ne(p, a), l = {
					type: a > 1 ? "strongSequence" : "emphasisSequence",
					start: d,
					end: { ...e[n][1].end }
				}, o = {
					type: a > 1 ? "strongSequence" : "emphasisSequence",
					start: { ...e[c][1].start },
					end: p
				}, i = {
					type: a > 1 ? "strongText" : "emphasisText",
					start: { ...e[n][1].end },
					end: { ...e[c][1].start }
				}, r = {
					type: a > 1 ? "strong" : "emphasis",
					start: { ...l.start },
					end: { ...o.end }
				}, e[n][1].end = { ...l.start }, e[c][1].start = { ...o.end }, s = [], e[n][1].end.offset - e[n][1].start.offset && (s = tR(s, [[
					"enter",
					e[n][1],
					t
				], [
					"exit",
					e[n][1],
					t
				]])), s = tR(s, [
					[
						"enter",
						r,
						t
					],
					[
						"enter",
						l,
						t
					],
					[
						"exit",
						l,
						t
					],
					[
						"enter",
						i,
						t
					]
				]), s = tR(s, t8(t.parser.constructs.insideSpan.null, e.slice(n + 1, c), t)), s = tR(s, [
					[
						"exit",
						i,
						t
					],
					[
						"enter",
						o,
						t
					],
					[
						"exit",
						o,
						t
					],
					[
						"exit",
						r,
						t
					]
				]), e[c][1].end.offset - e[c][1].start.offset ? (u = 2, s = tR(s, [[
					"enter",
					e[c][1],
					t
				], [
					"exit",
					e[c][1],
					t
				]])) : u = 0, tF(e, n - 1, c - n + 3, s), c = n + s.length - u - 2;
				break;
			}
		}
		for (c = -1; ++c < e.length;) "attentionSequence" === e[c][1].type && (e[c][1].type = "data");
		return e;
	},
	tokenize: function(e, t) {
		let n, r = this.parser.constructs.attentionMarkers.null, i = this.previous, l = t6(i);
		return function(o) {
			return n = o, e.enter("attentionSequence"), function o(a) {
				if (a === n) return e.consume(a), o;
				let s = e.exit("attentionSequence"), u = t6(a), c = !u || 2 === u && l || r.includes(a), d = !l || 2 === l && u || r.includes(i);
				return s._open = !!(42 === n ? c : c && (l || !d)), s._close = !!(42 === n ? d : d && (u || !c)), t(a);
			}(o);
		};
	}
};
function ne(e, t) {
	e.column += t, e.offset += t, e._bufferIndex += t;
}
let nt = {
	partial: !0,
	tokenize: function(e, t, n) {
		return function(t) {
			return tQ(t) ? t4(e, r, "linePrefix")(t) : r(t);
		};
		function r(e) {
			return null === e || tK(e) ? t(e) : n(e);
		}
	}
}, nn = {
	continuation: { tokenize: function(e, t, n) {
		let r = this;
		return function(t) {
			return tQ(t) ? t4(e, i, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : i(t);
		};
		function i(r) {
			return e.attempt(nn, t, n)(r);
		}
	} },
	exit: function(e) {
		e.exit("blockQuote");
	},
	name: "blockQuote",
	tokenize: function(e, t, n) {
		let r = this;
		return function(t) {
			if (62 === t) {
				let n = r.containerState;
				return n.open || (e.enter("blockQuote", { _container: !0 }), n.open = !0), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(t), e.exit("blockQuoteMarker"), i;
			}
			return n(t);
		};
		function i(n) {
			return tQ(n) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(n), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(n));
		}
	}
}, nr = {
	name: "characterEscape",
	tokenize: function(e, t, n) {
		return function(t) {
			return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(t), e.exit("escapeMarker"), r;
		};
		function r(r) {
			return tX(r) ? (e.enter("characterEscapeValue"), e.consume(r), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(r);
		}
	}
}, ni = {
	name: "characterReference",
	tokenize: function(e, t, n) {
		let r, i, l = this, o = 0;
		return function(t) {
			return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(t), e.exit("characterReferenceMarker"), a;
		};
		function a(t) {
			return 35 === t ? (e.enter("characterReferenceMarkerNumeric"), e.consume(t), e.exit("characterReferenceMarkerNumeric"), s) : (e.enter("characterReferenceValue"), r = 31, i = tU, u(t));
		}
		function s(t) {
			return 88 === t || 120 === t ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(t), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), r = 6, i = tJ, u) : (e.enter("characterReferenceValue"), r = 7, i = tG, u(t));
		}
		function u(a) {
			if (59 === a && o) {
				let r = e.exit("characterReferenceValue");
				return i !== tU || tz(l.sliceSerialize(r)) ? (e.enter("characterReferenceMarker"), e.consume(a), e.exit("characterReferenceMarker"), e.exit("characterReference"), t) : n(a);
			}
			return i(a) && o++ < r ? (e.consume(a), u) : n(a);
		}
	}
};
var nl = {
	partial: !0,
	tokenize: function(e, t, n) {
		let r = this;
		return function(t) {
			return null === t ? n(t) : (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), i);
		};
		function i(e) {
			return r.parser.lazy[r.now().line] ? n(e) : t(e);
		}
	}
};
let no = {
	concrete: !0,
	name: "codeFenced",
	tokenize: function(e, t, n) {
		let r, i = this, l = {
			partial: !0,
			tokenize: function(e, t, n) {
				let l = 0;
				return function(t) {
					return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), o;
				};
				function o(t) {
					return e.enter("codeFencedFence"), tQ(t) ? t4(e, s, "linePrefix", i.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : s(t);
				}
				function s(t) {
					return t === r ? (e.enter("codeFencedFenceSequence"), function t(i) {
						return i === r ? (l++, e.consume(i), t) : l >= a ? (e.exit("codeFencedFenceSequence"), tQ(i) ? t4(e, u, "whitespace")(i) : u(i)) : n(i);
					}(t)) : n(t);
				}
				function u(r) {
					return null === r || tK(r) ? (e.exit("codeFencedFence"), t(r)) : n(r);
				}
			}
		}, o = 0, a = 0;
		return function(t) {
			var l;
			let u;
			return l = t, o = (u = i.events[i.events.length - 1]) && "linePrefix" === u[1].type ? u[2].sliceSerialize(u[1], !0).length : 0, r = l, e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), function t(i) {
				return i === r ? (a++, e.consume(i), t) : a < 3 ? n(i) : (e.exit("codeFencedFenceSequence"), tQ(i) ? t4(e, s, "whitespace")(i) : s(i));
			}(l);
		};
		function s(l) {
			return null === l || tK(l) ? (e.exit("codeFencedFence"), i.interrupt ? t(l) : e.check(nl, c, h)(l)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", { contentType: "string" }), function t(i) {
				return null === i || tK(i) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), s(i)) : tQ(i) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), t4(e, u, "whitespace")(i)) : 96 === i && i === r ? n(i) : (e.consume(i), t);
			}(l));
		}
		function u(t) {
			return null === t || tK(t) ? s(t) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", { contentType: "string" }), function t(i) {
				return null === i || tK(i) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), s(i)) : 96 === i && i === r ? n(i) : (e.consume(i), t);
			}(t));
		}
		function c(t) {
			return e.attempt(l, h, d)(t);
		}
		function d(t) {
			return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), p;
		}
		function p(t) {
			return o > 0 && tQ(t) ? t4(e, f, "linePrefix", o + 1)(t) : f(t);
		}
		function f(t) {
			return null === t || tK(t) ? e.check(nl, c, h)(t) : (e.enter("codeFlowValue"), function t(n) {
				return null === n || tK(n) ? (e.exit("codeFlowValue"), f(n)) : (e.consume(n), t);
			}(t));
		}
		function h(n) {
			return e.exit("codeFenced"), t(n);
		}
	}
}, na = {
	name: "codeIndented",
	tokenize: function(e, t, n) {
		let r = this;
		return function(t) {
			return e.enter("codeIndented"), t4(e, i, "linePrefix", 5)(t);
		};
		function i(t) {
			let i = r.events[r.events.length - 1];
			return i && "linePrefix" === i[1].type && i[2].sliceSerialize(i[1], !0).length >= 4 ? function t(n) {
				return null === n ? l(n) : tK(n) ? e.attempt(ns, t, l)(n) : (e.enter("codeFlowValue"), function n(r) {
					return null === r || tK(r) ? (e.exit("codeFlowValue"), t(r)) : (e.consume(r), n);
				}(n));
			}(t) : n(t);
		}
		function l(n) {
			return e.exit("codeIndented"), t(n);
		}
	}
};
var ns = {
	partial: !0,
	tokenize: function(e, t, n) {
		let r = this;
		return i;
		function i(t) {
			return r.parser.lazy[r.now().line] ? n(t) : tK(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), i) : t4(e, l, "linePrefix", 5)(t);
		}
		function l(e) {
			let l = r.events[r.events.length - 1];
			return l && "linePrefix" === l[1].type && l[2].sliceSerialize(l[1], !0).length >= 4 ? t(e) : tK(e) ? i(e) : n(e);
		}
	}
}, nu = class {
	constructor(e) {
		this.left = e ? [...e] : [], this.right = [];
	}
	get(e) {
		if (e < 0 || e >= this.left.length + this.right.length) throw RangeError("Cannot access index `" + e + "` in a splice buffer of size `" + (this.left.length + this.right.length) + "`");
		return e < this.left.length ? this.left[e] : this.right[this.right.length - e + this.left.length - 1];
	}
	get length() {
		return this.left.length + this.right.length;
	}
	shift() {
		return this.setCursor(0), this.right.pop();
	}
	slice(e, t) {
		let n = null == t ? Infinity : t;
		return n < this.left.length ? this.left.slice(e, n) : e > this.left.length ? this.right.slice(this.right.length - n + this.left.length, this.right.length - e + this.left.length).reverse() : this.left.slice(e).concat(this.right.slice(this.right.length - n + this.left.length).reverse());
	}
	splice(e, t, n) {
		this.setCursor(Math.trunc(e));
		let r = this.right.splice(this.right.length - (t || 0), Infinity);
		return n && nc(this.left, n), r.reverse();
	}
	pop() {
		return this.setCursor(Infinity), this.left.pop();
	}
	push(e) {
		this.setCursor(Infinity), this.left.push(e);
	}
	pushMany(e) {
		this.setCursor(Infinity), nc(this.left, e);
	}
	unshift(e) {
		this.setCursor(0), this.right.push(e);
	}
	unshiftMany(e) {
		this.setCursor(0), nc(this.right, e.reverse());
	}
	setCursor(e) {
		if (e !== this.left.length && (!(e > this.left.length) || 0 !== this.right.length) && (!(e < 0) || 0 !== this.left.length)) if (e < this.left.length) {
			let t = this.left.splice(e, Infinity);
			nc(this.right, t.reverse());
		} else {
			let t = this.right.splice(this.left.length + this.right.length - e, Infinity);
			nc(this.left, t.reverse());
		}
	}
};
function nc(e, t) {
	let n = 0;
	if (t.length < 1e4) e.push(...t);
	else for (; n < t.length;) e.push(...t.slice(n, n + 1e4)), n += 1e4;
}
function nd(e) {
	let t, n, r, i, l, o, a, s = {}, u = -1, c = new nu(e);
	for (; ++u < c.length;) {
		for (; u in s;) u = s[u];
		if (t = c.get(u), u && "chunkFlow" === t[1].type && "listItemPrefix" === c.get(u - 1)[1].type && ((r = 0) < (o = t[1]._tokenizer.events).length && "lineEndingBlank" === o[r][1].type && (r += 2), r < o.length && "content" === o[r][1].type)) for (; ++r < o.length && "content" !== o[r][1].type;) "chunkText" === o[r][1].type && (o[r][1]._isInFirstContentOfListItem = !0, r++);
		if ("enter" === t[0]) t[1].contentType && (Object.assign(s, function(e, t) {
			let n, r, i = e.get(t)[1], l = e.get(t)[2], o = t - 1, a = [], s = i._tokenizer;
			!s && (s = l.parser[i.contentType](i.start), i._contentTypeTextTrailing && (s._contentTypeTextTrailing = !0));
			let u = s.events, c = [], d = {}, p = -1, f = i, h = 0, m = 0, g = [0];
			for (; f;) {
				for (; e.get(++o)[1] !== f;);
				a.push(o), !f._tokenizer && (n = l.sliceStream(f), f.next || n.push(null), r && s.defineSkip(f.start), f._isInFirstContentOfListItem && (s._gfmTasklistFirstContentOfListItem = !0), s.write(n), f._isInFirstContentOfListItem && (s._gfmTasklistFirstContentOfListItem = void 0)), r = f, f = f.next;
			}
			for (f = i; ++p < u.length;) "exit" === u[p][0] && "enter" === u[p - 1][0] && u[p][1].type === u[p - 1][1].type && u[p][1].start.line !== u[p][1].end.line && (m = p + 1, g.push(m), f._tokenizer = void 0, f.previous = void 0, f = f.next);
			for (s.events = [], f ? (f._tokenizer = void 0, f.previous = void 0) : g.pop(), p = g.length; p--;) {
				let t = u.slice(g[p], g[p + 1]), n = a.pop();
				c.push([n, n + t.length - 1]), e.splice(n, 2, t);
			}
			for (c.reverse(), p = -1; ++p < c.length;) d[h + c[p][0]] = h + c[p][1], h += c[p][1] - c[p][0] - 1;
			return d;
		}(c, u)), u = s[u], a = !0);
		else if (t[1]._container) {
			for (r = u, n = void 0; r--;) if ("lineEnding" === (i = c.get(r))[1].type || "lineEndingBlank" === i[1].type) "enter" === i[0] && (n && (c.get(n)[1].type = "lineEndingBlank"), i[1].type = "lineEnding", n = r);
			else if ("linePrefix" === i[1].type || "listItemIndent" === i[1].type);
			else break;
			n && (t[1].end = { ...c.get(n)[1].start }, (l = c.slice(n, u)).unshift(t), c.splice(n, u - n + 1, l));
		}
	}
	return tF(e, 0, Infinity, c.slice(0)), !a;
}
let np = {
	resolve: function(e) {
		return nd(e), e;
	},
	tokenize: function(e, t) {
		let n;
		return function(t) {
			return e.enter("content"), n = e.enter("chunkContent", { contentType: "content" }), r(t);
		};
		function r(t) {
			return null === t ? i(t) : tK(t) ? e.check(nf, l, i)(t) : (e.consume(t), r);
		}
		function i(n) {
			return e.exit("chunkContent"), e.exit("content"), t(n);
		}
		function l(t) {
			return e.consume(t), e.exit("chunkContent"), n.next = e.enter("chunkContent", {
				contentType: "content",
				previous: n
			}), n = n.next, r;
		}
	}
};
var nf = {
	partial: !0,
	tokenize: function(e, t, n) {
		let r = this;
		return function(t) {
			return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), t4(e, i, "linePrefix");
		};
		function i(i) {
			if (null === i || tK(i)) return n(i);
			let l = r.events[r.events.length - 1];
			return !r.parser.constructs.disable.null.includes("codeIndented") && l && "linePrefix" === l[1].type && l[2].sliceSerialize(l[1], !0).length >= 4 ? t(i) : e.interrupt(r.parser.constructs.flow, n, t)(i);
		}
	}
};
function nh(e, t, n, r, i, l, o, a, s) {
	let u = s || Infinity, c = 0;
	return function(t) {
		return 60 === t ? (e.enter(r), e.enter(i), e.enter(l), e.consume(t), e.exit(l), d) : null === t || 32 === t || 41 === t || tW(t) ? n(t) : (e.enter(r), e.enter(o), e.enter(a), e.enter("chunkString", { contentType: "string" }), h(t));
	};
	function d(n) {
		return 62 === n ? (e.enter(l), e.consume(n), e.exit(l), e.exit(i), e.exit(r), t) : (e.enter(a), e.enter("chunkString", { contentType: "string" }), p(n));
	}
	function p(t) {
		return 62 === t ? (e.exit("chunkString"), e.exit(a), d(t)) : null === t || 60 === t || tK(t) ? n(t) : (e.consume(t), 92 === t ? f : p);
	}
	function f(t) {
		return 60 === t || 62 === t || 92 === t ? (e.consume(t), p) : p(t);
	}
	function h(i) {
		return !c && (null === i || 41 === i || tY(i)) ? (e.exit("chunkString"), e.exit(a), e.exit(o), e.exit(r), t(i)) : c < u && 40 === i ? (e.consume(i), c++, h) : 41 === i ? (e.consume(i), c--, h) : null === i || 32 === i || 40 === i || tW(i) ? n(i) : (e.consume(i), 92 === i ? m : h);
	}
	function m(t) {
		return 40 === t || 41 === t || 92 === t ? (e.consume(t), h) : h(t);
	}
}
function nm(e, t, n, r, i, l) {
	let o, a = this, s = 0;
	return function(t) {
		return e.enter(r), e.enter(i), e.consume(t), e.exit(i), e.enter(l), u;
	};
	function u(d) {
		return s > 999 || null === d || 91 === d || 93 === d && !o || 94 === d && !s && "_hiddenFootnoteSupport" in a.parser.constructs ? n(d) : 93 === d ? (e.exit(l), e.enter(i), e.consume(d), e.exit(i), e.exit(r), t) : tK(d) ? (e.enter("lineEnding"), e.consume(d), e.exit("lineEnding"), u) : (e.enter("chunkString", { contentType: "string" }), c(d));
	}
	function c(t) {
		return null === t || 91 === t || 93 === t || tK(t) || s++ > 999 ? (e.exit("chunkString"), u(t)) : (e.consume(t), o || (o = !tQ(t)), 92 === t ? d : c);
	}
	function d(t) {
		return 91 === t || 92 === t || 93 === t ? (e.consume(t), s++, c) : c(t);
	}
}
function ng(e, t, n, r, i, l) {
	let o;
	return function(t) {
		return 34 === t || 39 === t || 40 === t ? (e.enter(r), e.enter(i), e.consume(t), e.exit(i), o = 40 === t ? 41 : t, a) : n(t);
	};
	function a(n) {
		return n === o ? (e.enter(i), e.consume(n), e.exit(i), e.exit(r), t) : (e.enter(l), s(n));
	}
	function s(t) {
		return t === o ? (e.exit(l), a(o)) : null === t ? n(t) : tK(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), t4(e, s, "linePrefix")) : (e.enter("chunkString", { contentType: "string" }), u(t));
	}
	function u(t) {
		return t === o || null === t || tK(t) ? (e.exit("chunkString"), s(t)) : (e.consume(t), 92 === t ? c : u);
	}
	function c(t) {
		return t === o || 92 === t ? (e.consume(t), u) : u(t);
	}
}
function ny(e, t) {
	let n;
	return function r(i) {
		return tK(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), n = !0, r) : tQ(i) ? t4(e, r, n ? "linePrefix" : "lineSuffix")(i) : t(i);
	};
}
var nv = {
	partial: !0,
	tokenize: function(e, t, n) {
		return function(t) {
			return tY(t) ? ny(e, r)(t) : n(t);
		};
		function r(t) {
			return ng(e, i, n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(t);
		}
		function i(t) {
			return tQ(t) ? t4(e, l, "whitespace")(t) : l(t);
		}
		function l(e) {
			return null === e || tK(e) ? t(e) : n(e);
		}
	}
};
let nx = [
	"address",
	"article",
	"aside",
	"base",
	"basefont",
	"blockquote",
	"body",
	"caption",
	"center",
	"col",
	"colgroup",
	"dd",
	"details",
	"dialog",
	"dir",
	"div",
	"dl",
	"dt",
	"fieldset",
	"figcaption",
	"figure",
	"footer",
	"form",
	"frame",
	"frameset",
	"h1",
	"h2",
	"h3",
	"h4",
	"h5",
	"h6",
	"head",
	"header",
	"hr",
	"html",
	"iframe",
	"legend",
	"li",
	"link",
	"main",
	"menu",
	"menuitem",
	"nav",
	"noframes",
	"ol",
	"optgroup",
	"option",
	"p",
	"param",
	"search",
	"section",
	"summary",
	"table",
	"tbody",
	"td",
	"tfoot",
	"th",
	"thead",
	"title",
	"tr",
	"track",
	"ul"
], nb = [
	"pre",
	"script",
	"style",
	"textarea"
];
var nk = {
	partial: !0,
	tokenize: function(e, t, n) {
		return function(r) {
			return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), e.attempt(nt, t, n);
		};
	}
}, nC = {
	partial: !0,
	tokenize: function(e, t, n) {
		let r = this;
		return function(t) {
			return tK(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), i) : n(t);
		};
		function i(e) {
			return r.parser.lazy[r.now().line] ? n(e) : t(e);
		}
	}
};
let nw = {
	name: "labelEnd",
	resolveAll: function(e) {
		let t = -1, n = [];
		for (; ++t < e.length;) {
			let r = e[t][1];
			if (n.push(e[t]), "labelImage" === r.type || "labelLink" === r.type || "labelEnd" === r.type) {
				let e = "labelImage" === r.type ? 4 : 2;
				r.type = "data", t += e;
			}
		}
		return e.length !== n.length && tF(e, 0, e.length, n), e;
	},
	resolveTo: function(e, t) {
		let n, r, i, l, o = e.length, a = 0;
		for (; o--;) if (n = e[o][1], r) {
			if ("link" === n.type || "labelLink" === n.type && n._inactive) break;
			"enter" === e[o][0] && "labelLink" === n.type && (n._inactive = !0);
		} else if (i) {
			if ("enter" === e[o][0] && ("labelImage" === n.type || "labelLink" === n.type) && !n._balanced && (r = o, "labelLink" !== n.type)) {
				a = 2;
				break;
			}
		} else "labelEnd" === n.type && (i = o);
		let s = {
			type: "labelLink" === e[r][1].type ? "link" : "image",
			start: { ...e[r][1].start },
			end: { ...e[e.length - 1][1].end }
		}, u = {
			type: "label",
			start: { ...e[r][1].start },
			end: { ...e[i][1].end }
		}, c = {
			type: "labelText",
			start: { ...e[r + a + 2][1].end },
			end: { ...e[i - 2][1].start }
		};
		return l = tR(l = [[
			"enter",
			s,
			t
		], [
			"enter",
			u,
			t
		]], e.slice(r + 1, r + a + 3)), l = tR(l, [[
			"enter",
			c,
			t
		]]), l = tR(l, t8(t.parser.constructs.insideSpan.null, e.slice(r + a + 4, i - 3), t)), l = tR(l, [
			[
				"exit",
				c,
				t
			],
			e[i - 2],
			e[i - 1],
			[
				"exit",
				u,
				t
			]
		]), l = tR(l, e.slice(i + 1)), l = tR(l, [[
			"exit",
			s,
			t
		]]), tF(e, r, e.length, l), e;
	},
	tokenize: function(e, t, n) {
		let r, i, l = this, o = l.events.length;
		for (; o--;) if (("labelImage" === l.events[o][1].type || "labelLink" === l.events[o][1].type) && !l.events[o][1]._balanced) {
			r = l.events[o][1];
			break;
		}
		return function(t) {
			return r ? r._inactive ? c(t) : (i = l.parser.defined.includes(tH(l.sliceSerialize({
				start: r.end,
				end: l.now()
			}))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelEnd"), a) : n(t);
		};
		function a(t) {
			return 40 === t ? e.attempt(nS, u, i ? u : c)(t) : 91 === t ? e.attempt(nA, u, i ? s : c)(t) : i ? u(t) : c(t);
		}
		function s(t) {
			return e.attempt(nT, u, c)(t);
		}
		function u(e) {
			return t(e);
		}
		function c(e) {
			return r._balanced = !0, n(e);
		}
	}
};
var nS = { tokenize: function(e, t, n) {
	return function(t) {
		return e.enter("resource"), e.enter("resourceMarker"), e.consume(t), e.exit("resourceMarker"), r;
	};
	function r(t) {
		return tY(t) ? ny(e, i)(t) : i(t);
	}
	function i(t) {
		return 41 === t ? u(t) : nh(e, l, o, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(t);
	}
	function l(t) {
		return tY(t) ? ny(e, a)(t) : u(t);
	}
	function o(e) {
		return n(e);
	}
	function a(t) {
		return 34 === t || 39 === t || 40 === t ? ng(e, s, n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(t) : u(t);
	}
	function s(t) {
		return tY(t) ? ny(e, u)(t) : u(t);
	}
	function u(r) {
		return 41 === r ? (e.enter("resourceMarker"), e.consume(r), e.exit("resourceMarker"), e.exit("resource"), t) : n(r);
	}
} }, nA = { tokenize: function(e, t, n) {
	let r = this;
	return function(t) {
		return nm.call(r, e, i, l, "reference", "referenceMarker", "referenceString")(t);
	};
	function i(e) {
		return r.parser.defined.includes(tH(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? t(e) : n(e);
	}
	function l(e) {
		return n(e);
	}
} }, nT = { tokenize: function(e, t, n) {
	return function(t) {
		return e.enter("reference"), e.enter("referenceMarker"), e.consume(t), e.exit("referenceMarker"), r;
	};
	function r(r) {
		return 93 === r ? (e.enter("referenceMarker"), e.consume(r), e.exit("referenceMarker"), e.exit("reference"), t) : n(r);
	}
} };
let nD = {
	name: "labelStartImage",
	resolveAll: nw.resolveAll,
	tokenize: function(e, t, n) {
		let r = this;
		return function(t) {
			return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(t), e.exit("labelImageMarker"), i;
		};
		function i(t) {
			return 91 === t ? (e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelImage"), l) : n(t);
		}
		function l(e) {
			return 94 === e && "_hiddenFootnoteSupport" in r.parser.constructs ? n(e) : t(e);
		}
	}
}, nL = {
	name: "labelStartLink",
	resolveAll: nw.resolveAll,
	tokenize: function(e, t, n) {
		let r = this;
		return function(t) {
			return e.enter("labelLink"), e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelLink"), i;
		};
		function i(e) {
			return 94 === e && "_hiddenFootnoteSupport" in r.parser.constructs ? n(e) : t(e);
		}
	}
}, n_ = {
	name: "lineEnding",
	tokenize: function(e, t) {
		return function(n) {
			return e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), t4(e, t, "linePrefix");
		};
	}
}, nE = {
	name: "thematicBreak",
	tokenize: function(e, t, n) {
		let r, i = 0;
		return function(l) {
			var o;
			return e.enter("thematicBreak"), r = o = l, function l(o) {
				return o === r ? (e.enter("thematicBreakSequence"), function t(n) {
					return n === r ? (e.consume(n), i++, t) : (e.exit("thematicBreakSequence"), tQ(n) ? t4(e, l, "whitespace")(n) : l(n));
				}(o)) : i >= 3 && (null === o || tK(o)) ? (e.exit("thematicBreak"), t(o)) : n(o);
			}(o);
		};
	}
}, nI = {
	continuation: { tokenize: function(e, t, n) {
		let r = this;
		return r.containerState._closeFlow = void 0, e.check(nt, function(n) {
			return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, t4(e, t, "listItemIndent", r.containerState.size + 1)(n);
		}, function(n) {
			return r.containerState.furtherBlankLines || !tQ(n) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, i(n)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(nM, t, i)(n));
		});
		function i(i) {
			return r.containerState._closeFlow = !0, r.interrupt = void 0, t4(e, e.attempt(nI, t, n), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(i);
		}
	} },
	exit: function(e) {
		e.exit(this.containerState.type);
	},
	name: "list",
	tokenize: function(e, t, n) {
		let r = this, i = r.events[r.events.length - 1], l = i && "linePrefix" === i[1].type ? i[2].sliceSerialize(i[1], !0).length : 0, o = 0;
		return function(t) {
			let i = r.containerState.type || (42 === t || 43 === t || 45 === t ? "listUnordered" : "listOrdered");
			if ("listUnordered" === i ? !r.containerState.marker || t === r.containerState.marker : tG(t)) {
				if (r.containerState.type || (r.containerState.type = i, e.enter(i, { _container: !0 })), "listUnordered" === i) return e.enter("listItemPrefix"), 42 === t || 45 === t ? e.check(nE, n, a)(t) : a(t);
				if (!r.interrupt || 49 === t) return e.enter("listItemPrefix"), e.enter("listItemValue"), function t(i) {
					return tG(i) && ++o < 10 ? (e.consume(i), t) : (!r.interrupt || o < 2) && (r.containerState.marker ? i === r.containerState.marker : 41 === i || 46 === i) ? (e.exit("listItemValue"), a(i)) : n(i);
				}(t);
			}
			return n(t);
		};
		function a(t) {
			return e.enter("listItemMarker"), e.consume(t), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || t, e.check(nt, r.interrupt ? n : s, e.attempt(nN, c, u));
		}
		function s(e) {
			return r.containerState.initialBlankLine = !0, l++, c(e);
		}
		function u(t) {
			return tQ(t) ? (e.enter("listItemPrefixWhitespace"), e.consume(t), e.exit("listItemPrefixWhitespace"), c) : n(t);
		}
		function c(n) {
			return r.containerState.size = l + r.sliceSerialize(e.exit("listItemPrefix"), !0).length, t(n);
		}
	}
};
var nN = {
	partial: !0,
	tokenize: function(e, t, n) {
		let r = this;
		return t4(e, function(e) {
			let i = r.events[r.events.length - 1];
			return !tQ(e) && i && "listItemPrefixWhitespace" === i[1].type ? t(e) : n(e);
		}, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
	}
}, nM = {
	partial: !0,
	tokenize: function(e, t, n) {
		let r = this;
		return t4(e, function(e) {
			let i = r.events[r.events.length - 1];
			return i && "listItemIndent" === i[1].type && i[2].sliceSerialize(i[1], !0).length === r.containerState.size ? t(e) : n(e);
		}, "listItemIndent", r.containerState.size + 1);
	}
};
let nO = {
	name: "setextUnderline",
	resolveTo: function(e, t) {
		let n, r, i, l = e.length;
		for (; l--;) if ("enter" === e[l][0]) {
			if ("content" === e[l][1].type) {
				n = l;
				break;
			}
			"paragraph" === e[l][1].type && (r = l);
		} else "content" === e[l][1].type && e.splice(l, 1), i || "definition" !== e[l][1].type || (i = l);
		let o = {
			type: "setextHeading",
			start: { ...e[n][1].start },
			end: { ...e[e.length - 1][1].end }
		};
		return e[r][1].type = "setextHeadingText", i ? (e.splice(r, 0, [
			"enter",
			o,
			t
		]), e.splice(i + 1, 0, [
			"exit",
			e[n][1],
			t
		]), e[n][1].end = { ...e[i][1].end }) : e[n][1] = o, e.push([
			"exit",
			o,
			t
		]), e;
	},
	tokenize: function(e, t, n) {
		let r, i = this;
		return function(t) {
			var o;
			let a, s = i.events.length;
			for (; s--;) if ("lineEnding" !== i.events[s][1].type && "linePrefix" !== i.events[s][1].type && "content" !== i.events[s][1].type) {
				a = "paragraph" === i.events[s][1].type;
				break;
			}
			return !i.parser.lazy[i.now().line] && (i.interrupt || a) ? (e.enter("setextHeadingLine"), r = t, o = t, e.enter("setextHeadingLineSequence"), function t(n) {
				return n === r ? (e.consume(n), t) : (e.exit("setextHeadingLineSequence"), tQ(n) ? t4(e, l, "lineSuffix")(n) : l(n));
			}(o)) : n(t);
		};
		function l(r) {
			return null === r || tK(r) ? (e.exit("setextHeadingLine"), t(r)) : n(r);
		}
	}
}, nP = { tokenize: function(e) {
	let t = this, n = e.attempt(nt, function(r) {
		return null === r ? void e.consume(r) : (e.enter("lineEndingBlank"), e.consume(r), e.exit("lineEndingBlank"), t.currentConstruct = void 0, n);
	}, e.attempt(this.parser.constructs.flowInitial, r, t4(e, e.attempt(this.parser.constructs.flow, r, e.attempt(np, r)), "linePrefix")));
	return n;
	function r(r) {
		return null === r ? void e.consume(r) : (e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), t.currentConstruct = void 0, n);
	}
} }, nz = { resolveAll: nB() }, nF = n$("string"), nR = n$("text");
function n$(e) {
	return {
		resolveAll: nB("text" === e ? nj : void 0),
		tokenize: function(t) {
			let n = this, r = this.parser.constructs[e], i = t.attempt(r, l, o);
			return l;
			function l(e) {
				return s(e) ? i(e) : o(e);
			}
			function o(e) {
				return null === e ? void t.consume(e) : (t.enter("data"), t.consume(e), a);
			}
			function a(e) {
				return s(e) ? (t.exit("data"), i(e)) : (t.consume(e), a);
			}
			function s(e) {
				if (null === e) return !0;
				let t = r[e], i = -1;
				if (t) for (; ++i < t.length;) {
					let e = t[i];
					if (!e.previous || e.previous.call(n, n.previous)) return !0;
				}
				return !1;
			}
		}
	};
}
function nB(e) {
	return function(t, n) {
		let r, i = -1;
		for (; ++i <= t.length;) void 0 === r ? t[i] && "data" === t[i][1].type && (r = i, i++) : t[i] && "data" === t[i][1].type || (i !== r + 2 && (t[r][1].end = t[i - 1][1].end, t.splice(r + 2, i - r - 2), i = r + 2), r = void 0);
		return e ? e(t, n) : t;
	};
}
function nj(e, t) {
	let n = 0;
	for (; ++n <= e.length;) if ((n === e.length || "lineEnding" === e[n][1].type) && "data" === e[n - 1][1].type) {
		let r, i = e[n - 1][1], l = t.sliceStream(i), o = l.length, a = -1, s = 0;
		for (; o--;) {
			let e = l[o];
			if ("string" == typeof e) {
				for (a = e.length; 32 === e.charCodeAt(a - 1);) s++, a--;
				if (a) break;
				a = -1;
			} else if (-2 === e) r = !0, s++;
			else if (-1 === e);
			else {
				o++;
				break;
			}
		}
		if (t._contentTypeTextTrailing && n === e.length && (s = 0), s) {
			let l = {
				type: n === e.length || r || s < 2 ? "lineSuffix" : "hardBreakTrailing",
				start: {
					_bufferIndex: o ? a : i.start._bufferIndex + a,
					_index: i.start._index + o,
					line: i.end.line,
					column: i.end.column - s,
					offset: i.end.offset - s
				},
				end: { ...i.end }
			};
			i.end = { ...l.start }, i.start.offset === i.end.offset ? Object.assign(i, l) : (e.splice(n, 0, [
				"enter",
				l,
				t
			], [
				"exit",
				l,
				t
			]), n += 2);
		}
		n++;
	}
	return e;
}
var nH = e({
	attentionMarkers: () => nK,
	contentInitial: () => nU,
	disable: () => nY,
	document: () => nV,
	flow: () => nW,
	flowInitial: () => nq,
	insideSpan: () => nX,
	string: () => nG,
	text: () => nJ
});
let nV = {
	42: nI,
	43: nI,
	45: nI,
	48: nI,
	49: nI,
	50: nI,
	51: nI,
	52: nI,
	53: nI,
	54: nI,
	55: nI,
	56: nI,
	57: nI,
	62: nn
}, nU = { 91: {
	name: "definition",
	tokenize: function(e, t, n) {
		let r, i = this;
		return function(t) {
			var r;
			return e.enter("definition"), r = t, nm.call(i, e, l, n, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(r);
		};
		function l(t) {
			return (r = tH(i.sliceSerialize(i.events[i.events.length - 1][1]).slice(1, -1)), 58 === t) ? (e.enter("definitionMarker"), e.consume(t), e.exit("definitionMarker"), o) : n(t);
		}
		function o(t) {
			return tY(t) ? ny(e, a)(t) : a(t);
		}
		function a(t) {
			return nh(e, s, n, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString")(t);
		}
		function s(t) {
			return e.attempt(nv, u, u)(t);
		}
		function u(t) {
			return tQ(t) ? t4(e, c, "whitespace")(t) : c(t);
		}
		function c(l) {
			return null === l || tK(l) ? (e.exit("definition"), i.parser.defined.push(r), t(l)) : n(l);
		}
	}
} }, nq = {
	[-2]: na,
	[-1]: na,
	32: na
}, nW = {
	35: {
		name: "headingAtx",
		resolve: function(e, t) {
			let n, r, i = e.length - 2, l = 3;
			return "whitespace" === e[3][1].type && (l += 2), i - 2 > l && "whitespace" === e[i][1].type && (i -= 2), "atxHeadingSequence" === e[i][1].type && (l === i - 1 || i - 4 > l && "whitespace" === e[i - 2][1].type) && (i -= l + 1 === i ? 2 : 4), i > l && (n = {
				type: "atxHeadingText",
				start: e[l][1].start,
				end: e[i][1].end
			}, r = {
				type: "chunkText",
				start: e[l][1].start,
				end: e[i][1].end,
				contentType: "text"
			}, tF(e, l, i - l + 1, [
				[
					"enter",
					n,
					t
				],
				[
					"enter",
					r,
					t
				],
				[
					"exit",
					r,
					t
				],
				[
					"exit",
					n,
					t
				]
			])), e;
		},
		tokenize: function(e, t, n) {
			let r = 0;
			return function(i) {
				var l;
				return e.enter("atxHeading"), l = i, e.enter("atxHeadingSequence"), function i(l) {
					return 35 === l && r++ < 6 ? (e.consume(l), i) : null === l || tY(l) ? (e.exit("atxHeadingSequence"), function n(r) {
						return 35 === r ? (e.enter("atxHeadingSequence"), function t(r) {
							return 35 === r ? (e.consume(r), t) : (e.exit("atxHeadingSequence"), n(r));
						}(r)) : null === r || tK(r) ? (e.exit("atxHeading"), t(r)) : tQ(r) ? t4(e, n, "whitespace")(r) : (e.enter("atxHeadingText"), function t(r) {
							return null === r || 35 === r || tY(r) ? (e.exit("atxHeadingText"), n(r)) : (e.consume(r), t);
						}(r));
					}(l)) : n(l);
				}(l);
			};
		}
	},
	42: nE,
	45: [nO, nE],
	60: {
		concrete: !0,
		name: "htmlFlow",
		resolveTo: function(e) {
			let t = e.length;
			for (; t-- && ("enter" !== e[t][0] || "htmlFlow" !== e[t][1].type););
			return t > 1 && "linePrefix" === e[t - 2][1].type && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e;
		},
		tokenize: function(e, t, n) {
			let r, i, l, o, a, s = this;
			return function(t) {
				var n;
				return n = t, e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(n), u;
			};
			function u(o) {
				return 33 === o ? (e.consume(o), c) : 47 === o ? (e.consume(o), i = !0, f) : 63 === o ? (e.consume(o), r = 3, s.interrupt ? t : N) : tV(o) ? (e.consume(o), l = String.fromCharCode(o), h) : n(o);
			}
			function c(i) {
				return 45 === i ? (e.consume(i), r = 2, d) : 91 === i ? (e.consume(i), r = 5, o = 0, p) : tV(i) ? (e.consume(i), r = 4, s.interrupt ? t : N) : n(i);
			}
			function d(r) {
				return 45 === r ? (e.consume(r), s.interrupt ? t : N) : n(r);
			}
			function p(r) {
				return r === "CDATA[".charCodeAt(o++) ? (e.consume(r), 6 === o) ? s.interrupt ? t : S : p : n(r);
			}
			function f(t) {
				return tV(t) ? (e.consume(t), l = String.fromCharCode(t), h) : n(t);
			}
			function h(o) {
				if (null === o || 47 === o || 62 === o || tY(o)) {
					let a = 47 === o, u = l.toLowerCase();
					return !a && !i && nb.includes(u) ? (r = 1, s.interrupt ? t(o) : S(o)) : nx.includes(l.toLowerCase()) ? (r = 6, a) ? (e.consume(o), m) : s.interrupt ? t(o) : S(o) : (r = 7, s.interrupt && !s.parser.lazy[s.now().line] ? n(o) : i ? function t(n) {
						return tQ(n) ? (e.consume(n), t) : C(n);
					}(o) : g(o));
				}
				return 45 === o || tU(o) ? (e.consume(o), l += String.fromCharCode(o), h) : n(o);
			}
			function m(r) {
				return 62 === r ? (e.consume(r), s.interrupt ? t : S) : n(r);
			}
			function g(t) {
				return 47 === t ? (e.consume(t), C) : 58 === t || 95 === t || tV(t) ? (e.consume(t), y) : tQ(t) ? (e.consume(t), g) : C(t);
			}
			function y(t) {
				return 45 === t || 46 === t || 58 === t || 95 === t || tU(t) ? (e.consume(t), y) : v(t);
			}
			function v(t) {
				return 61 === t ? (e.consume(t), x) : tQ(t) ? (e.consume(t), v) : g(t);
			}
			function x(t) {
				return null === t || 60 === t || 61 === t || 62 === t || 96 === t ? n(t) : 34 === t || 39 === t ? (e.consume(t), a = t, b) : tQ(t) ? (e.consume(t), x) : function t(n) {
					return null === n || 34 === n || 39 === n || 47 === n || 60 === n || 61 === n || 62 === n || 96 === n || tY(n) ? v(n) : (e.consume(n), t);
				}(t);
			}
			function b(t) {
				return t === a ? (e.consume(t), a = null, k) : null === t || tK(t) ? n(t) : (e.consume(t), b);
			}
			function k(e) {
				return 47 === e || 62 === e || tQ(e) ? g(e) : n(e);
			}
			function C(t) {
				return 62 === t ? (e.consume(t), w) : n(t);
			}
			function w(t) {
				return null === t || tK(t) ? S(t) : tQ(t) ? (e.consume(t), w) : n(t);
			}
			function S(t) {
				return 45 === t && 2 === r ? (e.consume(t), L) : 60 === t && 1 === r ? (e.consume(t), _) : 62 === t && 4 === r ? (e.consume(t), M) : 63 === t && 3 === r ? (e.consume(t), N) : 93 === t && 5 === r ? (e.consume(t), I) : tK(t) && (6 === r || 7 === r) ? (e.exit("htmlFlowData"), e.check(nk, O, A)(t)) : null === t || tK(t) ? (e.exit("htmlFlowData"), A(t)) : (e.consume(t), S);
			}
			function A(t) {
				return e.check(nC, T, O)(t);
			}
			function T(t) {
				return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), D;
			}
			function D(t) {
				return null === t || tK(t) ? A(t) : (e.enter("htmlFlowData"), S(t));
			}
			function L(t) {
				return 45 === t ? (e.consume(t), N) : S(t);
			}
			function _(t) {
				return 47 === t ? (e.consume(t), l = "", E) : S(t);
			}
			function E(t) {
				if (62 === t) {
					let n = l.toLowerCase();
					return nb.includes(n) ? (e.consume(t), M) : S(t);
				}
				return tV(t) && l.length < 8 ? (e.consume(t), l += String.fromCharCode(t), E) : S(t);
			}
			function I(t) {
				return 93 === t ? (e.consume(t), N) : S(t);
			}
			function N(t) {
				return 62 === t ? (e.consume(t), M) : 45 === t && 2 === r ? (e.consume(t), N) : S(t);
			}
			function M(t) {
				return null === t || tK(t) ? (e.exit("htmlFlowData"), O(t)) : (e.consume(t), M);
			}
			function O(n) {
				return e.exit("htmlFlow"), t(n);
			}
		}
	},
	61: nO,
	95: nE,
	96: no,
	126: no
}, nG = {
	38: ni,
	92: nr
}, nJ = {
	[-5]: n_,
	[-4]: n_,
	[-3]: n_,
	33: nD,
	38: ni,
	42: t7,
	60: [{
		name: "autolink",
		tokenize: function(e, t, n) {
			let r = 0;
			return function(t) {
				return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(t), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), i;
			};
			function i(t) {
				return tV(t) ? (e.consume(t), l) : 64 === t ? n(t) : a(t);
			}
			function l(t) {
				return 43 === t || 45 === t || 46 === t || tU(t) ? (r = 1, function t(n) {
					return 58 === n ? (e.consume(n), r = 0, o) : (43 === n || 45 === n || 46 === n || tU(n)) && r++ < 32 ? (e.consume(n), t) : (r = 0, a(n));
				}(t)) : a(t);
			}
			function o(r) {
				return 62 === r ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(r), e.exit("autolinkMarker"), e.exit("autolink"), t) : null === r || 32 === r || 60 === r || tW(r) ? n(r) : (e.consume(r), o);
			}
			function a(t) {
				return 64 === t ? (e.consume(t), s) : tq(t) ? (e.consume(t), a) : n(t);
			}
			function s(i) {
				return tU(i) ? function i(l) {
					return 46 === l ? (e.consume(l), r = 0, s) : 62 === l ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(l), e.exit("autolinkMarker"), e.exit("autolink"), t) : function t(l) {
						if ((45 === l || tU(l)) && r++ < 63) {
							let n = 45 === l ? t : i;
							return e.consume(l), n;
						}
						return n(l);
					}(l);
				}(i) : n(i);
			}
		}
	}, {
		name: "htmlText",
		tokenize: function(e, t, n) {
			let r, i, l, o = this;
			return function(t) {
				return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(t), a;
			};
			function a(t) {
				return 33 === t ? (e.consume(t), s) : 47 === t ? (e.consume(t), b) : 63 === t ? (e.consume(t), v) : tV(t) ? (e.consume(t), C) : n(t);
			}
			function s(t) {
				return 45 === t ? (e.consume(t), u) : 91 === t ? (e.consume(t), i = 0, f) : tV(t) ? (e.consume(t), y) : n(t);
			}
			function u(t) {
				return 45 === t ? (e.consume(t), p) : n(t);
			}
			function c(t) {
				return null === t ? n(t) : 45 === t ? (e.consume(t), d) : tK(t) ? (l = c, E(t)) : (e.consume(t), c);
			}
			function d(t) {
				return 45 === t ? (e.consume(t), p) : c(t);
			}
			function p(e) {
				return 62 === e ? _(e) : 45 === e ? d(e) : c(e);
			}
			function f(t) {
				return t === "CDATA[".charCodeAt(i++) ? (e.consume(t), 6 === i ? h : f) : n(t);
			}
			function h(t) {
				return null === t ? n(t) : 93 === t ? (e.consume(t), m) : tK(t) ? (l = h, E(t)) : (e.consume(t), h);
			}
			function m(t) {
				return 93 === t ? (e.consume(t), g) : h(t);
			}
			function g(t) {
				return 62 === t ? _(t) : 93 === t ? (e.consume(t), g) : h(t);
			}
			function y(t) {
				return null === t || 62 === t ? _(t) : tK(t) ? (l = y, E(t)) : (e.consume(t), y);
			}
			function v(t) {
				return null === t ? n(t) : 63 === t ? (e.consume(t), x) : tK(t) ? (l = v, E(t)) : (e.consume(t), v);
			}
			function x(e) {
				return 62 === e ? _(e) : v(e);
			}
			function b(t) {
				return tV(t) ? (e.consume(t), k) : n(t);
			}
			function k(t) {
				return 45 === t || tU(t) ? (e.consume(t), k) : function t(n) {
					return tK(n) ? (l = t, E(n)) : tQ(n) ? (e.consume(n), t) : _(n);
				}(t);
			}
			function C(t) {
				return 45 === t || tU(t) ? (e.consume(t), C) : 47 === t || 62 === t || tY(t) ? w(t) : n(t);
			}
			function w(t) {
				return 47 === t ? (e.consume(t), _) : 58 === t || 95 === t || tV(t) ? (e.consume(t), S) : tK(t) ? (l = w, E(t)) : tQ(t) ? (e.consume(t), w) : _(t);
			}
			function S(t) {
				return 45 === t || 46 === t || 58 === t || 95 === t || tU(t) ? (e.consume(t), S) : function t(n) {
					return 61 === n ? (e.consume(n), A) : tK(n) ? (l = t, E(n)) : tQ(n) ? (e.consume(n), t) : w(n);
				}(t);
			}
			function A(t) {
				return null === t || 60 === t || 61 === t || 62 === t || 96 === t ? n(t) : 34 === t || 39 === t ? (e.consume(t), r = t, T) : tK(t) ? (l = A, E(t)) : tQ(t) ? (e.consume(t), A) : (e.consume(t), D);
			}
			function T(t) {
				return t === r ? (e.consume(t), r = void 0, L) : null === t ? n(t) : tK(t) ? (l = T, E(t)) : (e.consume(t), T);
			}
			function D(t) {
				return null === t || 34 === t || 39 === t || 60 === t || 61 === t || 96 === t ? n(t) : 47 === t || 62 === t || tY(t) ? w(t) : (e.consume(t), D);
			}
			function L(e) {
				return 47 === e || 62 === e || tY(e) ? w(e) : n(e);
			}
			function _(r) {
				return 62 === r ? (e.consume(r), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(r);
			}
			function E(t) {
				return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), I;
			}
			function I(t) {
				return tQ(t) ? t4(e, N, "linePrefix", o.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : N(t);
			}
			function N(t) {
				return e.enter("htmlTextData"), l(t);
			}
		}
	}],
	91: nL,
	92: [{
		name: "hardBreakEscape",
		tokenize: function(e, t, n) {
			return function(t) {
				return e.enter("hardBreakEscape"), e.consume(t), r;
			};
			function r(r) {
				return tK(r) ? (e.exit("hardBreakEscape"), t(r)) : n(r);
			}
		}
	}, nr],
	93: nw,
	95: t7,
	96: {
		name: "codeText",
		previous: function(e) {
			return 96 !== e || "characterEscape" === this.events[this.events.length - 1][1].type;
		},
		resolve: function(e) {
			let t, n, r = e.length - 4, i = 3;
			if (("lineEnding" === e[3][1].type || "space" === e[i][1].type) && ("lineEnding" === e[r][1].type || "space" === e[r][1].type)) {
				for (t = i; ++t < r;) if ("codeTextData" === e[t][1].type) {
					e[i][1].type = "codeTextPadding", e[r][1].type = "codeTextPadding", i += 2, r -= 2;
					break;
				}
			}
			for (t = i - 1, r++; ++t <= r;) void 0 === n ? t !== r && "lineEnding" !== e[t][1].type && (n = t) : (t === r || "lineEnding" === e[t][1].type) && (e[n][1].type = "codeTextData", t !== n + 2 && (e[n][1].end = e[t - 1][1].end, e.splice(n + 2, t - n - 2), r -= t - n - 2, t = n + 2), n = void 0);
			return e;
		},
		tokenize: function(e, t, n) {
			let r, i, l = 0;
			return function(t) {
				return e.enter("codeText"), e.enter("codeTextSequence"), function t(n) {
					return 96 === n ? (e.consume(n), l++, t) : (e.exit("codeTextSequence"), o(n));
				}(t);
			};
			function o(s) {
				return null === s ? n(s) : 32 === s ? (e.enter("space"), e.consume(s), e.exit("space"), o) : 96 === s ? (i = e.enter("codeTextSequence"), r = 0, function n(o) {
					return 96 === o ? (e.consume(o), r++, n) : r === l ? (e.exit("codeTextSequence"), e.exit("codeText"), t(o)) : (i.type = "codeTextData", a(o));
				}(s)) : tK(s) ? (e.enter("lineEnding"), e.consume(s), e.exit("lineEnding"), o) : (e.enter("codeTextData"), a(s));
			}
			function a(t) {
				return null === t || 32 === t || 96 === t || tK(t) ? (e.exit("codeTextData"), o(t)) : (e.consume(t), a);
			}
		}
	}
}, nX = { null: [t7, nz] }, nK = { null: [42, 95] }, nY = { null: [] };
var nQ = /[\0\t\n\r]/g, nZ = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function n1(e, t, n) {
	if (t) return t;
	if (35 === n.charCodeAt(0)) {
		let e = n.charCodeAt(1), t = 120 === e || 88 === e;
		return tj(n.slice(t ? 2 : 1), t ? 16 : 10);
	}
	return tz(n) || e;
}
function n0(e) {
	return e && "object" == typeof e ? "position" in e || "type" in e ? n4(e.position) : "start" in e || "end" in e ? n4(e) : "line" in e || "column" in e ? n2(e) : "" : "";
}
function n2(e) {
	return n3(e && e.line) + ":" + n3(e && e.column);
}
function n4(e) {
	return n2(e && e.start) + "-" + n2(e && e.end);
}
function n3(e) {
	return e && "number" == typeof e ? e : 1;
}
var n5 = {}.hasOwnProperty;
function n9(e) {
	return {
		line: e.line,
		column: e.column,
		offset: e.offset
	};
}
function n6(e, t) {
	if (e) throw Error("Cannot close `" + e.type + "` (" + n0({
		start: e.start,
		end: e.end
	}) + "): a different token (`" + t.type + "`, " + n0({
		start: t.start,
		end: t.end
	}) + ") is open");
	throw Error("Cannot close document, a token (`" + t.type + "`, " + n0({
		start: t.start,
		end: t.end
	}) + ") is still open");
}
function n8(e, t) {
	let n = String(e);
	if ("string" != typeof t) throw TypeError("Expected character");
	let r = 0, i = n.indexOf(t);
	for (; -1 !== i;) r++, i = n.indexOf(t, i + t.length);
	return r;
}
let n7 = function(e) {
	var t, n;
	if (null == e) return rt;
	if ("function" == typeof e) return re(e);
	if ("object" == typeof e) return Array.isArray(e) ? function(e) {
		let t = [], n = -1;
		for (; ++n < e.length;) t[n] = n7(e[n]);
		return re(function(...e) {
			let n = -1;
			for (; ++n < t.length;) if (t[n].apply(this, e)) return !0;
			return !1;
		});
	}(e) : (t = e, re(function(e) {
		let n;
		for (n in t) if (e[n] !== t[n]) return !1;
		return !0;
	}));
	if ("string" == typeof e) return n = e, re(function(e) {
		return e && e.type === n;
	});
	throw Error("Expected function, string, or object as test");
};
function re(e) {
	return function(t, n, r) {
		var i;
		return !!(null !== (i = t) && "object" == typeof i && "type" in i && e.call(this, t, "number" == typeof n ? n : void 0, r || void 0));
	};
}
function rt() {
	return !0;
}
var rn = [];
function rr(e, t, n, r) {
	let i;
	"function" == typeof t && "function" != typeof n ? (r = n, n = t) : i = t;
	let l = n7(i), o = r ? -1 : 1;
	(function e(i, a, s) {
		let u = i && "object" == typeof i ? i : {};
		if ("string" == typeof u.type) {
			let e = "string" == typeof u.tagName ? u.tagName : "string" == typeof u.name ? u.name : void 0;
			Object.defineProperty(c, "name", { value: "node (" + i.type + (e ? "<" + e + ">" : "") + ")" });
		}
		return c;
		function c() {
			var u;
			let c, d, p, f = rn;
			if ((!t || l(i, a, s[s.length - 1] || void 0)) && !1 === (f = Array.isArray(u = n(i, s)) ? u : "number" == typeof u ? [!0, u] : null == u ? rn : [u])[0]) return f;
			if ("children" in i && i.children && i.children && "skip" !== f[0]) for (d = (r ? i.children.length : -1) + o, p = s.concat(i); d > -1 && d < i.children.length;) {
				if (!1 === (c = e(i.children[d], d, p)())[0]) return c;
				d = "number" == typeof c[1] ? c[1] : d + o;
			}
			return f;
		}
	})(e, void 0, [])();
}
function ri(e) {
	this.enter({
		type: "link",
		title: null,
		url: "",
		children: []
	}, e);
}
function rl(e) {
	this.config.enter.autolinkProtocol.call(this, e);
}
function ro(e) {
	this.config.exit.autolinkProtocol.call(this, e);
}
function ra(e) {
	this.config.exit.data.call(this, e);
	let t = this.stack[this.stack.length - 1];
	t.type, t.url = "http://" + this.sliceSerialize(e);
}
function rs(e) {
	this.config.exit.autolinkEmail.call(this, e);
}
function ru(e) {
	this.exit(e);
}
function rc(e) {
	(function(e, t, n) {
		let r = n7((n || {}).ignore || []), i = function(e) {
			let t = [];
			if (!Array.isArray(e)) throw TypeError("Expected find and replace tuple or list of tuples");
			let n = !e[0] || Array.isArray(e[0]) ? e : [e], r = -1;
			for (; ++r < n.length;) {
				var i;
				let e = n[r];
				t.push(["string" == typeof (i = e[0]) ? RegExp(function(e) {
					if ("string" != typeof e) throw TypeError("Expected a string");
					return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
				}(i), "g") : i, function(e) {
					return "function" == typeof e ? e : function() {
						return e;
					};
				}(e[1])]);
			}
			return t;
		}(t), l = -1;
		for (; ++l < i.length;) rr(e, "text", o);
		function o(e, t) {
			let n, o = -1;
			for (; ++o < t.length;) {
				let e = t[o], i = n ? n.children : void 0;
				if (r(e, i ? i.indexOf(e) : void 0, n)) return;
				n = e;
			}
			if (n) return function(e, t) {
				let n = t[t.length - 1], r = i[l][0], o = i[l][1], a = 0, s = n.children.indexOf(e), u = !1, c = [];
				r.lastIndex = 0;
				let d = r.exec(e.value);
				for (; d;) {
					let n = d.index, i = {
						index: d.index,
						input: d.input,
						stack: [...t, e]
					}, l = o(...d, i);
					if ("string" == typeof l && (l = l.length > 0 ? {
						type: "text",
						value: l
					} : void 0), !1 === l ? r.lastIndex = n + 1 : (a !== n && c.push({
						type: "text",
						value: e.value.slice(a, n)
					}), Array.isArray(l) ? c.push(...l) : l && c.push(l), a = n + d[0].length, u = !0), !r.global) break;
					d = r.exec(e.value);
				}
				return u ? (a < e.value.length && c.push({
					type: "text",
					value: e.value.slice(a)
				}), n.children.splice(s, 1, ...c)) : c = [e], s + c.length;
			}(e, t);
		}
	})(e, [[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, rd], [/(?<=^|\s|\p{P}|\p{S})([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/gu, rp]], { ignore: ["link", "linkReference"] });
}
function rd(e, t, n, r, i) {
	let l, o = "";
	if (!rf(i)) return !1;
	if (/^w/i.test(t) && (n = t + n, t = "", o = "http://"), (l = n.split(".")).length < 2 || l[l.length - 1] && (/_/.test(l[l.length - 1]) || !/[a-zA-Z\d]/.test(l[l.length - 1])) || l[l.length - 2] && (/_/.test(l[l.length - 2]) || !/[a-zA-Z\d]/.test(l[l.length - 2]))) return !1;
	let a = function(e) {
		let t = /[!"&'),.:;<>?\]}]+$/.exec(e);
		if (!t) return [e, void 0];
		e = e.slice(0, t.index);
		let n = t[0], r = n.indexOf(")"), i = n8(e, "("), l = n8(e, ")");
		for (; -1 !== r && i > l;) e += n.slice(0, r + 1), r = (n = n.slice(r + 1)).indexOf(")"), l++;
		return [e, n];
	}(n + r);
	if (!a[0]) return !1;
	let s = {
		type: "link",
		title: null,
		url: o + t + a[0],
		children: [{
			type: "text",
			value: t + a[0]
		}]
	};
	return a[1] ? [s, {
		type: "text",
		value: a[1]
	}] : s;
}
function rp(e, t, n, r) {
	return !(!rf(r, !0) || /[-\d_]$/.test(n)) && {
		type: "link",
		title: null,
		url: "mailto:" + t + "@" + n,
		children: [{
			type: "text",
			value: t + "@" + n
		}]
	};
}
function rf(e, t) {
	let n = e.input.charCodeAt(e.index - 1);
	return (0 === e.index || t1(n) || tZ(n)) && (!t || 47 !== n);
}
function rh() {
	this.buffer();
}
function rm(e) {
	this.enter({
		type: "footnoteReference",
		identifier: "",
		label: ""
	}, e);
}
function rg() {
	this.buffer();
}
function ry(e) {
	this.enter({
		type: "footnoteDefinition",
		identifier: "",
		label: "",
		children: []
	}, e);
}
function rv(e) {
	let t = this.resume(), n = this.stack[this.stack.length - 1];
	n.type, n.identifier = tH(this.sliceSerialize(e)).toLowerCase(), n.label = t;
}
function rx(e) {
	this.exit(e);
}
function rb(e) {
	let t = this.resume(), n = this.stack[this.stack.length - 1];
	n.type, n.identifier = tH(this.sliceSerialize(e)).toLowerCase(), n.label = t;
}
function rk(e) {
	this.exit(e);
}
function rC(e) {
	this.enter({
		type: "delete",
		children: []
	}, e);
}
function rw(e) {
	this.exit(e);
}
function rS(e) {
	let t = e._align;
	this.enter({
		type: "table",
		align: t.map(function(e) {
			return "none" === e ? null : e;
		}),
		children: []
	}, e), this.data.inTable = !0;
}
function rA(e) {
	this.exit(e), this.data.inTable = void 0;
}
function rT(e) {
	this.enter({
		type: "tableRow",
		children: []
	}, e);
}
function rD(e) {
	this.exit(e);
}
function rL(e) {
	this.enter({
		type: "tableCell",
		children: []
	}, e);
}
function r_(e) {
	let t = this.resume();
	this.data.inTable && (t = t.replace(/\\([\\|])/g, rE));
	let n = this.stack[this.stack.length - 1];
	n.type, n.value = t, this.exit(e);
}
function rE(e, t) {
	return "|" === t ? t : e;
}
function rI(e) {
	let t = this.stack[this.stack.length - 2];
	t.type, t.checked = "taskListCheckValueChecked" === e.type;
}
function rN(e) {
	let t = this.stack[this.stack.length - 2];
	if (t && "listItem" === t.type && "boolean" == typeof t.checked) {
		let e = this.stack[this.stack.length - 1];
		e.type;
		let n = e.children[0];
		if (n && "text" === n.type) {
			let r, i = t.children, l = -1;
			for (; ++l < i.length;) {
				let e = i[l];
				if ("paragraph" === e.type) {
					r = e;
					break;
				}
			}
			r === e && (n.value = n.value.slice(1), 0 === n.value.length ? e.children.shift() : e.position && n.position && "number" == typeof n.position.start.offset && (n.position.start.column++, n.position.start.offset++, e.position.start = Object.assign({}, n.position.start)));
		}
	}
	this.exit(e);
}
for (var rM = {
	tokenize: function(e, t, n) {
		let r = 0;
		return function t(l) {
			return (87 === l || 119 === l) && r < 3 ? (r++, e.consume(l), t) : 46 === l && 3 === r ? (e.consume(l), i) : n(l);
		};
		function i(e) {
			return null === e ? n(e) : t(e);
		}
	},
	partial: !0
}, rO = {
	tokenize: function(e, t, n) {
		let r, i, l;
		return o;
		function o(t) {
			return 46 === t || 95 === t ? e.check(rz, s, a)(t) : null === t || tY(t) || t1(t) || 45 !== t && tZ(t) ? s(t) : (l = !0, e.consume(t), o);
		}
		function a(t) {
			return 95 === t ? r = !0 : (i = r, r = void 0), e.consume(t), o;
		}
		function s(e) {
			return i || r || !l ? n(e) : t(e);
		}
	},
	partial: !0
}, rP = {
	tokenize: function(e, t) {
		let n = 0, r = 0;
		return i;
		function i(o) {
			return 40 === o ? (n++, e.consume(o), i) : 41 === o && r < n ? l(o) : 33 === o || 34 === o || 38 === o || 39 === o || 41 === o || 42 === o || 44 === o || 46 === o || 58 === o || 59 === o || 60 === o || 63 === o || 93 === o || 95 === o || 126 === o ? e.check(rz, t, l)(o) : null === o || tY(o) || t1(o) ? t(o) : (e.consume(o), i);
		}
		function l(t) {
			return 41 === t && r++, e.consume(t), i;
		}
	},
	partial: !0
}, rz = {
	tokenize: function(e, t, n) {
		return r;
		function r(o) {
			return 33 === o || 34 === o || 39 === o || 41 === o || 42 === o || 44 === o || 46 === o || 58 === o || 59 === o || 63 === o || 95 === o || 126 === o ? (e.consume(o), r) : 38 === o ? (e.consume(o), l) : 93 === o ? (e.consume(o), i) : 60 === o || null === o || tY(o) || t1(o) ? t(o) : n(o);
		}
		function i(e) {
			return null === e || 40 === e || 91 === e || tY(e) || t1(e) ? t(e) : r(e);
		}
		function l(t) {
			return tV(t) ? function t(i) {
				return 59 === i ? (e.consume(i), r) : tV(i) ? (e.consume(i), t) : n(i);
			}(t) : n(t);
		}
	},
	partial: !0
}, rF = {
	tokenize: function(e, t, n) {
		return function(t) {
			return e.consume(t), r;
		};
		function r(e) {
			return tU(e) ? n(e) : t(e);
		}
	},
	partial: !0
}, rR = {
	name: "wwwAutolink",
	tokenize: function(e, t, n) {
		let r = this;
		return function(t) {
			return 87 !== t && 119 !== t || !rV.call(r, r.previous) || rG(r.events) ? n(t) : (e.enter("literalAutolink"), e.enter("literalAutolinkWww"), e.check(rM, e.attempt(rO, e.attempt(rP, i), n), n)(t));
		};
		function i(n) {
			return e.exit("literalAutolinkWww"), e.exit("literalAutolink"), t(n);
		}
	},
	previous: rV
}, r$ = {
	name: "protocolAutolink",
	tokenize: function(e, t, n) {
		let r = this, i = "", l = !1;
		return function(t) {
			return (72 === t || 104 === t) && rU.call(r, r.previous) && !rG(r.events) ? (e.enter("literalAutolink"), e.enter("literalAutolinkHttp"), i += String.fromCodePoint(t), e.consume(t), o) : n(t);
		};
		function o(t) {
			if (tV(t) && i.length < 5) return i += String.fromCodePoint(t), e.consume(t), o;
			if (58 === t) {
				let n = i.toLowerCase();
				if ("http" === n || "https" === n) return e.consume(t), a;
			}
			return n(t);
		}
		function a(t) {
			return 47 === t ? (e.consume(t), l) ? s : (l = !0, a) : n(t);
		}
		function s(t) {
			return null === t || tW(t) || tY(t) || t1(t) || tZ(t) ? n(t) : e.attempt(rO, e.attempt(rP, u), n)(t);
		}
		function u(n) {
			return e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), t(n);
		}
	},
	previous: rU
}, rB = {
	name: "emailAutolink",
	tokenize: function(e, t, n) {
		let r, i, l = this;
		return function(t) {
			return !rW(t) || !rq.call(l, l.previous) || rG(l.events) ? n(t) : (e.enter("literalAutolink"), e.enter("literalAutolinkEmail"), function t(r) {
				return rW(r) ? (e.consume(r), t) : 64 === r ? (e.consume(r), o) : n(r);
			}(t));
		};
		function o(t) {
			return 46 === t ? e.check(rF, s, a)(t) : 45 === t || 95 === t || tU(t) ? (i = !0, e.consume(t), o) : s(t);
		}
		function a(t) {
			return e.consume(t), r = !0, o;
		}
		function s(o) {
			return i && r && tV(l.previous) ? (e.exit("literalAutolinkEmail"), e.exit("literalAutolink"), t(o)) : n(o);
		}
	},
	previous: rq
}, rj = {}, rH = 48; rH < 123;) rj[rH] = rB, 58 == ++rH ? rH = 65 : 91 === rH && (rH = 97);
function rV(e) {
	return null === e || 40 === e || 42 === e || 95 === e || 91 === e || 93 === e || 126 === e || tY(e);
}
function rU(e) {
	return !tV(e);
}
function rq(e) {
	return !(47 === e || rW(e));
}
function rW(e) {
	return 43 === e || 45 === e || 46 === e || 95 === e || tU(e);
}
function rG(e) {
	let t = e.length, n = !1;
	for (; t--;) {
		let r = e[t][1];
		if (("labelLink" === r.type || "labelImage" === r.type) && !r._balanced) {
			n = !0;
			break;
		}
		if (r._gfmAutolinkLiteralWalkedInto) {
			n = !1;
			break;
		}
	}
	return e.length > 0 && !n && (e[e.length - 1][1]._gfmAutolinkLiteralWalkedInto = !0), n;
}
rj[43] = rB, rj[45] = rB, rj[46] = rB, rj[95] = rB, rj[72] = [rB, r$], rj[104] = [rB, r$], rj[87] = [rB, rR], rj[119] = [rB, rR];
var rJ = {
	tokenize: function(e, t, n) {
		let r = this;
		return t4(e, function(e) {
			let i = r.events[r.events.length - 1];
			return i && "gfmFootnoteDefinitionIndent" === i[1].type && 4 === i[2].sliceSerialize(i[1], !0).length ? t(e) : n(e);
		}, "gfmFootnoteDefinitionIndent", 5);
	},
	partial: !0
};
function rX(e, t, n) {
	let r, i = this, l = i.events.length, o = i.parser.gfmFootnotes || (i.parser.gfmFootnotes = []);
	for (; l--;) {
		let e = i.events[l][1];
		if ("labelImage" === e.type) {
			r = e;
			break;
		}
		if ("gfmFootnoteCall" === e.type || "labelLink" === e.type || "label" === e.type || "image" === e.type || "link" === e.type) break;
	}
	return function(l) {
		if (!r || !r._balanced) return n(l);
		let a = tH(i.sliceSerialize({
			start: r.end,
			end: i.now()
		}));
		return 94 === a.codePointAt(0) && o.includes(a.slice(1)) ? (e.enter("gfmFootnoteCallLabelMarker"), e.consume(l), e.exit("gfmFootnoteCallLabelMarker"), t(l)) : n(l);
	};
}
function rK(e, t) {
	let n = e.length;
	for (; n--;) if ("labelImage" === e[n][1].type && "enter" === e[n][0]) {
		e[n][1];
		break;
	}
	e[n + 1][1].type = "data", e[n + 3][1].type = "gfmFootnoteCallLabelMarker";
	let r = {
		type: "gfmFootnoteCall",
		start: Object.assign({}, e[n + 3][1].start),
		end: Object.assign({}, e[e.length - 1][1].end)
	}, i = {
		type: "gfmFootnoteCallMarker",
		start: Object.assign({}, e[n + 3][1].end),
		end: Object.assign({}, e[n + 3][1].end)
	};
	i.end.column++, i.end.offset++, i.end._bufferIndex++;
	let l = {
		type: "gfmFootnoteCallString",
		start: Object.assign({}, i.end),
		end: Object.assign({}, e[e.length - 1][1].start)
	}, o = {
		type: "chunkString",
		contentType: "string",
		start: Object.assign({}, l.start),
		end: Object.assign({}, l.end)
	}, a = [
		e[n + 1],
		e[n + 2],
		[
			"enter",
			r,
			t
		],
		e[n + 3],
		e[n + 4],
		[
			"enter",
			i,
			t
		],
		[
			"exit",
			i,
			t
		],
		[
			"enter",
			l,
			t
		],
		[
			"enter",
			o,
			t
		],
		[
			"exit",
			o,
			t
		],
		[
			"exit",
			l,
			t
		],
		e[e.length - 2],
		e[e.length - 1],
		[
			"exit",
			r,
			t
		]
	];
	return e.splice(n, e.length - n + 1, ...a), e;
}
function rY(e, t, n) {
	let r, i = this, l = i.parser.gfmFootnotes || (i.parser.gfmFootnotes = []), o = 0;
	return function(t) {
		return e.enter("gfmFootnoteCall"), e.enter("gfmFootnoteCallLabelMarker"), e.consume(t), e.exit("gfmFootnoteCallLabelMarker"), a;
	};
	function a(t) {
		return 94 !== t ? n(t) : (e.enter("gfmFootnoteCallMarker"), e.consume(t), e.exit("gfmFootnoteCallMarker"), e.enter("gfmFootnoteCallString"), e.enter("chunkString").contentType = "string", s);
	}
	function s(a) {
		if (o > 999 || 93 === a && !r || null === a || 91 === a || tY(a)) return n(a);
		if (93 === a) {
			e.exit("chunkString");
			let r = e.exit("gfmFootnoteCallString");
			return l.includes(tH(i.sliceSerialize(r))) ? (e.enter("gfmFootnoteCallLabelMarker"), e.consume(a), e.exit("gfmFootnoteCallLabelMarker"), e.exit("gfmFootnoteCall"), t) : n(a);
		}
		return tY(a) || (r = !0), o++, e.consume(a), 92 === a ? u : s;
	}
	function u(t) {
		return 91 === t || 92 === t || 93 === t ? (e.consume(t), o++, s) : s(t);
	}
}
function rQ(e, t, n) {
	let r, i, l = this, o = l.parser.gfmFootnotes || (l.parser.gfmFootnotes = []), a = 0;
	return function(t) {
		return e.enter("gfmFootnoteDefinition")._container = !0, e.enter("gfmFootnoteDefinitionLabel"), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(t), e.exit("gfmFootnoteDefinitionLabelMarker"), s;
	};
	function s(t) {
		return 94 === t ? (e.enter("gfmFootnoteDefinitionMarker"), e.consume(t), e.exit("gfmFootnoteDefinitionMarker"), e.enter("gfmFootnoteDefinitionLabelString"), e.enter("chunkString").contentType = "string", u) : n(t);
	}
	function u(t) {
		if (a > 999 || 93 === t && !i || null === t || 91 === t || tY(t)) return n(t);
		if (93 === t) {
			e.exit("chunkString");
			let n = e.exit("gfmFootnoteDefinitionLabelString");
			return r = tH(l.sliceSerialize(n)), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(t), e.exit("gfmFootnoteDefinitionLabelMarker"), e.exit("gfmFootnoteDefinitionLabel"), d;
		}
		return tY(t) || (i = !0), a++, e.consume(t), 92 === t ? c : u;
	}
	function c(t) {
		return 91 === t || 92 === t || 93 === t ? (e.consume(t), a++, u) : u(t);
	}
	function d(t) {
		return 58 === t ? (e.enter("definitionMarker"), e.consume(t), e.exit("definitionMarker"), o.includes(r) || o.push(r), t4(e, p, "gfmFootnoteDefinitionWhitespace")) : n(t);
	}
	function p(e) {
		return t(e);
	}
}
function rZ(e, t, n) {
	return e.check(nt, t, e.attempt(rJ, t, n));
}
function r1(e) {
	e.exit("gfmFootnoteDefinition");
}
var r0 = class {
	constructor() {
		this.map = [];
	}
	add(e, t, n) {
		(function(e, t, n, r) {
			let i = 0;
			if (0 !== n || 0 !== r.length) {
				for (; i < e.map.length;) {
					if (e.map[i][0] === t) {
						e.map[i][1] += n, e.map[i][2].push(...r);
						return;
					}
					i += 1;
				}
				e.map.push([
					t,
					n,
					r
				]);
			}
		})(this, e, t, n);
	}
	consume(e) {
		if (this.map.sort(function(e, t) {
			return e[0] - t[0];
		}), 0 === this.map.length) return;
		let t = this.map.length, n = [];
		for (; t > 0;) t -= 1, n.push(e.slice(this.map[t][0] + this.map[t][1]), this.map[t][2]), e.length = this.map[t][0];
		n.push(e.slice()), e.length = 0;
		let r = n.pop();
		for (; r;) {
			for (let t of r) e.push(t);
			r = n.pop();
		}
		this.map.length = 0;
	}
};
function r2(e, t, n) {
	let r, i = this, l = 0, o = 0;
	return function(e) {
		let t = i.events.length - 1;
		for (; t > -1;) {
			let e = i.events[t][1].type;
			if ("lineEnding" === e || "linePrefix" === e) t--;
			else break;
		}
		let r = t > -1 ? i.events[t][1].type : null, l = "tableHead" === r || "tableRow" === r ? v : a;
		return l === v && i.parser.lazy[i.now().line] ? n(e) : l(e);
	};
	function a(t) {
		var n;
		return e.enter("tableHead"), e.enter("tableRow"), 124 === (n = t) || (r = !0, o += 1), s(n);
	}
	function s(t) {
		return null === t ? n(t) : tK(t) ? o > 1 ? (o = 0, i.interrupt = !0, e.exit("tableRow"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), d) : n(t) : tQ(t) ? t4(e, s, "whitespace")(t) : (o += 1, r && (r = !1, l += 1), 124 === t) ? (e.enter("tableCellDivider"), e.consume(t), e.exit("tableCellDivider"), r = !0, s) : (e.enter("data"), u(t));
	}
	function u(t) {
		return null === t || 124 === t || tY(t) ? (e.exit("data"), s(t)) : (e.consume(t), 92 === t ? c : u);
	}
	function c(t) {
		return 92 === t || 124 === t ? (e.consume(t), u) : u(t);
	}
	function d(t) {
		return (i.interrupt = !1, i.parser.lazy[i.now().line]) ? n(t) : (e.enter("tableDelimiterRow"), r = !1, tQ(t)) ? t4(e, p, "linePrefix", i.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : p(t);
	}
	function p(t) {
		return 45 === t || 58 === t ? h(t) : 124 === t ? (r = !0, e.enter("tableCellDivider"), e.consume(t), e.exit("tableCellDivider"), f) : n(t);
	}
	function f(t) {
		return tQ(t) ? t4(e, h, "whitespace")(t) : h(t);
	}
	function h(t) {
		return 58 === t ? (o += 1, r = !0, e.enter("tableDelimiterMarker"), e.consume(t), e.exit("tableDelimiterMarker"), m) : 45 === t ? (o += 1, m(t)) : null === t || tK(t) ? y(t) : n(t);
	}
	function m(t) {
		return 45 === t ? (e.enter("tableDelimiterFiller"), function t(n) {
			return 45 === n ? (e.consume(n), t) : 58 === n ? (r = !0, e.exit("tableDelimiterFiller"), e.enter("tableDelimiterMarker"), e.consume(n), e.exit("tableDelimiterMarker"), g) : (e.exit("tableDelimiterFiller"), g(n));
		}(t)) : n(t);
	}
	function g(t) {
		return tQ(t) ? t4(e, y, "whitespace")(t) : y(t);
	}
	function y(i) {
		if (124 === i) return p(i);
		if (null === i || tK(i)) return r && l === o ? (e.exit("tableDelimiterRow"), e.exit("tableHead"), t(i)) : n(i);
		return n(i);
	}
	function v(t) {
		return e.enter("tableRow"), x(t);
	}
	function x(n) {
		return 124 === n ? (e.enter("tableCellDivider"), e.consume(n), e.exit("tableCellDivider"), x) : null === n || tK(n) ? (e.exit("tableRow"), t(n)) : tQ(n) ? t4(e, x, "whitespace")(n) : (e.enter("data"), b(n));
	}
	function b(t) {
		return null === t || 124 === t || tY(t) ? (e.exit("data"), x(t)) : (e.consume(t), 92 === t ? k : b);
	}
	function k(t) {
		return 92 === t || 124 === t ? (e.consume(t), b) : b(t);
	}
}
function r4(e, t) {
	let n, r, i, l = -1, o = !0, a = 0, s = [
		0,
		0,
		0,
		0
	], u = [
		0,
		0,
		0,
		0
	], c = !1, d = 0, p = new r0();
	for (; ++l < e.length;) {
		let f = e[l], h = f[1];
		"enter" === f[0] ? "tableHead" === h.type ? (c = !1, 0 !== d && (r5(p, t, d, n, r), r = void 0, d = 0), n = {
			type: "table",
			start: Object.assign({}, h.start),
			end: Object.assign({}, h.end)
		}, p.add(l, 0, [[
			"enter",
			n,
			t
		]])) : "tableRow" === h.type || "tableDelimiterRow" === h.type ? (o = !0, i = void 0, s = [
			0,
			0,
			0,
			0
		], u = [
			0,
			l + 1,
			0,
			0
		], c && (c = !1, r = {
			type: "tableBody",
			start: Object.assign({}, h.start),
			end: Object.assign({}, h.end)
		}, p.add(l, 0, [[
			"enter",
			r,
			t
		]])), a = "tableDelimiterRow" === h.type ? 2 : r ? 3 : 1) : a && ("data" === h.type || "tableDelimiterMarker" === h.type || "tableDelimiterFiller" === h.type) ? (o = !1, 0 === u[2] && (0 !== s[1] && (u[0] = u[1], i = r3(p, t, s, a, void 0, i), s = [
			0,
			0,
			0,
			0
		]), u[2] = l)) : "tableCellDivider" === h.type && (o ? o = !1 : (0 !== s[1] && (u[0] = u[1], i = r3(p, t, s, a, void 0, i)), u = [
			(s = u)[1],
			l,
			0,
			0
		])) : "tableHead" === h.type ? (c = !0, d = l) : "tableRow" === h.type || "tableDelimiterRow" === h.type ? (d = l, 0 !== s[1] ? (u[0] = u[1], i = r3(p, t, s, a, l, i)) : 0 !== u[1] && (i = r3(p, t, u, a, l, i)), a = 0) : a && ("data" === h.type || "tableDelimiterMarker" === h.type || "tableDelimiterFiller" === h.type) && (u[3] = l);
	}
	for (0 !== d && r5(p, t, d, n, r), p.consume(t.events), l = -1; ++l < t.events.length;) {
		let e = t.events[l];
		"enter" === e[0] && "table" === e[1].type && (e[1]._align = function(e, t) {
			let n = !1, r = [];
			for (; t < e.length;) {
				let i = e[t];
				if (n) {
					if ("enter" === i[0]) "tableContent" === i[1].type && r.push("tableDelimiterMarker" === e[t + 1][1].type ? "left" : "none");
					else if ("tableContent" === i[1].type) {
						if ("tableDelimiterMarker" === e[t - 1][1].type) {
							let e = r.length - 1;
							r[e] = "left" === r[e] ? "center" : "right";
						}
					} else if ("tableDelimiterRow" === i[1].type) break;
				} else "enter" === i[0] && "tableDelimiterRow" === i[1].type && (n = !0);
				t += 1;
			}
			return r;
		}(t.events, l));
	}
	return e;
}
function r3(e, t, n, r, i, l) {
	0 !== n[0] && (l.end = Object.assign({}, r9(t.events, n[0])), e.add(n[0], 0, [[
		"exit",
		l,
		t
	]]));
	let o = r9(t.events, n[1]);
	if (l = {
		type: 1 === r ? "tableHeader" : 2 === r ? "tableDelimiter" : "tableData",
		start: Object.assign({}, o),
		end: Object.assign({}, o)
	}, e.add(n[1], 0, [[
		"enter",
		l,
		t
	]]), 0 !== n[2]) {
		let i = r9(t.events, n[2]), l = r9(t.events, n[3]), o = {
			type: "tableContent",
			start: Object.assign({}, i),
			end: Object.assign({}, l)
		};
		if (e.add(n[2], 0, [[
			"enter",
			o,
			t
		]]), 2 !== r) {
			let r = t.events[n[2]], i = t.events[n[3]];
			if (r[1].end = Object.assign({}, i[1].end), r[1].type = "chunkText", r[1].contentType = "text", n[3] > n[2] + 1) {
				let t = n[2] + 1, r = n[3] - n[2] - 1;
				e.add(t, r, []);
			}
		}
		e.add(n[3] + 1, 0, [[
			"exit",
			o,
			t
		]]);
	}
	return void 0 !== i && (l.end = Object.assign({}, r9(t.events, i)), e.add(i, 0, [[
		"exit",
		l,
		t
	]]), l = void 0), l;
}
function r5(e, t, n, r, i) {
	let l = [], o = r9(t.events, n);
	i && (i.end = Object.assign({}, o), l.push([
		"exit",
		i,
		t
	])), r.end = Object.assign({}, o), l.push([
		"exit",
		r,
		t
	]), e.add(n + 1, 0, l);
}
function r9(e, t) {
	let n = e[t], r = "enter" === n[0] ? "start" : "end";
	return n[1][r];
}
var r6 = {
	name: "tasklistCheck",
	tokenize: function(e, t, n) {
		let r = this;
		return function(t) {
			return null === r.previous && r._gfmTasklistFirstContentOfListItem ? (e.enter("taskListCheck"), e.enter("taskListCheckMarker"), e.consume(t), e.exit("taskListCheckMarker"), i) : n(t);
		};
		function i(t) {
			return tY(t) ? (e.enter("taskListCheckValueUnchecked"), e.consume(t), e.exit("taskListCheckValueUnchecked"), l) : 88 === t || 120 === t ? (e.enter("taskListCheckValueChecked"), e.consume(t), e.exit("taskListCheckValueChecked"), l) : n(t);
		}
		function l(t) {
			return 93 === t ? (e.enter("taskListCheckMarker"), e.consume(t), e.exit("taskListCheckMarker"), e.exit("taskListCheck"), o) : n(t);
		}
		function o(r) {
			return tK(r) ? t(r) : tQ(r) ? e.check({ tokenize: r8 }, t, n)(r) : n(r);
		}
	}
};
function r8(e, t, n) {
	return t4(e, function(e) {
		return null === e ? n(e) : t(e);
	}, "whitespace");
}
function r7(e, t, n, r, i, l, o, a, s, u, c, d, p, f, h) {
	let m, g;
	return function(t) {
		return e.enter(r), e.enter(i), e.consume(t), e.exit(i), y;
	};
	function y(t) {
		return 35 === t ? (m = o, v(t)) : 46 === t ? (m = a, v(t)) : h && tQ(t) ? t4(e, y, "whitespace")(t) : !h && tY(t) ? ny(e, y)(t) : null === t || tK(t) || t1(t) || tZ(t) && 45 !== t && 95 !== t ? _(t) : (e.enter(l), e.enter(s), e.consume(t), k);
	}
	function v(t) {
		let n = m + "Marker";
		return e.enter(l), e.enter(m), e.enter(n), e.consume(t), e.exit(n), x;
	}
	function x(t) {
		if (null === t || 34 === t || 35 === t || 39 === t || 46 === t || 60 === t || 61 === t || 62 === t || 96 === t || 125 === t || tY(t)) return n(t);
		let r = m + "Value";
		return e.enter(r), e.consume(t), b;
	}
	function b(t) {
		if (null === t || 34 === t || 39 === t || 60 === t || 61 === t || 62 === t || 96 === t) return n(t);
		if (35 === t || 46 === t || 125 === t || tY(t)) {
			let n = m + "Value";
			return e.exit(n), e.exit(m), e.exit(l), y(t);
		}
		return e.consume(t), b;
	}
	function k(t) {
		return null === t || tK(t) || t1(t) || tZ(t) && 45 !== t && 46 !== t && 58 !== t && 95 !== t ? (e.exit(s), h && tQ(t)) ? t4(e, C, "whitespace")(t) : !h && tY(t) ? ny(e, C)(t) : C(t) : (e.consume(t), k);
	}
	function C(t) {
		return 61 === t ? (e.enter(u), e.consume(t), e.exit(u), w) : (e.exit(l), y(t));
	}
	function w(t) {
		return null === t || 60 === t || 61 === t || 62 === t || 96 === t || 125 === t || h && tK(t) ? n(t) : 34 === t || 39 === t ? (e.enter(c), e.enter(p), e.consume(t), e.exit(p), g = t, A) : h && tQ(t) ? t4(e, w, "whitespace")(t) : !h && tY(t) ? ny(e, w)(t) : (e.enter(d), e.enter(f), e.consume(t), g = void 0, S);
	}
	function S(t) {
		return null === t || 34 === t || 39 === t || 60 === t || 61 === t || 62 === t || 96 === t ? n(t) : 125 === t || tY(t) ? (e.exit(f), e.exit(d), e.exit(l), y(t)) : (e.consume(t), S);
	}
	function A(t) {
		return t === g ? (e.enter(p), e.consume(t), e.exit(p), e.exit(c), e.exit(l), L) : (e.enter(d), T(t));
	}
	function T(t) {
		return t === g ? (e.exit(d), A(t)) : null === t ? n(t) : tK(t) ? h ? n(t) : ny(e, T)(t) : (e.enter(f), e.consume(t), D);
	}
	function D(t) {
		return t === g || null === t || tK(t) ? (e.exit(f), T(t)) : (e.consume(t), D);
	}
	function L(e) {
		return 125 === e || tY(e) ? y(e) : _(e);
	}
	function _(l) {
		return 125 === l ? (e.enter(i), e.consume(l), e.exit(i), e.exit(r), t) : n(l);
	}
}
function ie(e, t, n, r, i, l, o) {
	let a, s = 0, u = 0;
	return function(t) {
		return e.enter(r), e.enter(i), e.consume(t), e.exit(i), c;
	};
	function c(n) {
		return 93 === n ? (e.enter(i), e.consume(n), e.exit(i), e.exit(r), t) : (e.enter(l), d(n));
	}
	function d(t) {
		if (93 === t && !u) return h(t);
		let n = e.enter("chunkText", {
			_contentTypeTextTrailing: !0,
			contentType: "text",
			previous: a
		});
		return a && (a.next = n), a = n, p(t);
	}
	function p(t) {
		return null === t || s > 999 || 91 === t && ++u > 32 ? n(t) : 93 !== t || u-- ? tK(t) ? o ? n(t) : (e.consume(t), e.exit("chunkText"), d) : (e.consume(t), 92 === t ? f : p) : (e.exit("chunkText"), h(t));
	}
	function f(t) {
		return 91 === t || 92 === t || 93 === t ? (e.consume(t), s++, p) : p(t);
	}
	function h(n) {
		return e.exit(l), e.enter(i), e.consume(n), e.exit(i), e.exit(r), t;
	}
}
function it(e, t, n, r) {
	let i = this;
	return function(t) {
		return null === t || tK(t) || tZ(t) || t1(t) ? n(t) : (e.enter(r), e.consume(t), l);
	};
	function l(o) {
		return null === o || tK(o) || t1(o) || tZ(o) && 45 !== o && 95 !== o ? (e.exit(r), 45 === i.previous || 95 === i.previous ? n(o) : t(o)) : (e.consume(o), l);
	}
}
let ir = {
	tokenize: function(e, t, n) {
		let r, i = this, l = i.events[i.events.length - 1], o = l && "linePrefix" === l[1].type ? l[2].sliceSerialize(l[1], !0).length : 0, a = 0;
		return function(t) {
			return e.enter("directiveContainer"), e.enter("directiveContainerFence"), e.enter("directiveContainerSequence"), function t(r) {
				return 58 === r ? (e.consume(r), a++, t) : a < 3 ? n(r) : (e.exit("directiveContainerSequence"), it.call(i, e, s, n, "directiveContainerName")(r));
			}(t);
		};
		function s(t) {
			return 91 === t ? e.attempt(ii, u, u)(t) : u(t);
		}
		function u(t) {
			return 123 === t ? e.attempt(il, c, c)(t) : c(t);
		}
		function c(t) {
			return t4(e, d, "whitespace")(t);
		}
		function d(r) {
			return (e.exit("directiveContainerFence"), null === r) ? b(r) : tK(r) ? i.interrupt ? t(r) : e.attempt(io, p, b)(r) : n(r);
		}
		function p(t) {
			return null === t ? b(t) : tK(t) ? e.check(io, g, b)(t) : (e.enter("directiveContainerContent"), f(t));
		}
		function f(t) {
			return e.attempt({
				tokenize: k,
				partial: !0
			}, x, o ? t4(e, h, "linePrefix", o + 1) : h)(t);
		}
		function h(t) {
			return null === t ? x(t) : tK(t) ? e.check(io, m, x)(t) : m(t);
		}
		function m(t) {
			let n = e.enter("chunkDocument", {
				contentType: "document",
				previous: r
			});
			return r && (r.next = n), r = n, function t(n) {
				if (null === n) {
					let t = e.exit("chunkDocument");
					return i.parser.lazy[t.start.line] = !1, x(n);
				}
				return tK(n) ? e.check(io, y, v)(n) : (e.consume(n), t);
			}(t);
		}
		function g(t) {
			return e.enter("directiveContainerContent"), f(t);
		}
		function y(t) {
			e.consume(t);
			let n = e.exit("chunkDocument");
			return i.parser.lazy[n.start.line] = !1, f;
		}
		function v(t) {
			let n = e.exit("chunkDocument");
			return i.parser.lazy[n.start.line] = !1, x(t);
		}
		function x(t) {
			return e.exit("directiveContainerContent"), b(t);
		}
		function b(n) {
			return e.exit("directiveContainer"), t(n);
		}
		function k(e, t, n) {
			let r = 0;
			return t4(e, function(t) {
				return e.enter("directiveContainerFence"), e.enter("directiveContainerSequence"), function t(i) {
					return 58 === i ? (e.consume(i), r++, t) : r < a ? n(i) : (e.exit("directiveContainerSequence"), t4(e, l, "whitespace")(i));
				}(t);
			}, "linePrefix", i.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
			function l(r) {
				return null === r || tK(r) ? (e.exit("directiveContainerFence"), t(r)) : n(r);
			}
		}
	},
	concrete: !0
};
var ii = {
	tokenize: function(e, t, n) {
		return ie(e, t, n, "directiveContainerLabel", "directiveContainerLabelMarker", "directiveContainerLabelString", !0);
	},
	partial: !0
}, il = {
	tokenize: function(e, t, n) {
		return r7(e, t, n, "directiveContainerAttributes", "directiveContainerAttributesMarker", "directiveContainerAttribute", "directiveContainerAttributeId", "directiveContainerAttributeClass", "directiveContainerAttributeName", "directiveContainerAttributeInitializerMarker", "directiveContainerAttributeValueLiteral", "directiveContainerAttributeValue", "directiveContainerAttributeValueMarker", "directiveContainerAttributeValueData", !0);
	},
	partial: !0
}, io = {
	tokenize: function(e, t, n) {
		let r = this;
		return function(t) {
			return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), i;
		};
		function i(e) {
			return r.parser.lazy[r.now().line] ? n(e) : t(e);
		}
	},
	partial: !0
};
let ia = { tokenize: function(e, t, n) {
	let r = this;
	return function(t) {
		return e.enter("directiveLeaf"), e.enter("directiveLeafSequence"), e.consume(t), i;
	};
	function i(t) {
		return 58 === t ? (e.consume(t), e.exit("directiveLeafSequence"), it.call(r, e, l, n, "directiveLeafName")) : n(t);
	}
	function l(t) {
		return 91 === t ? e.attempt(is, o, o)(t) : o(t);
	}
	function o(t) {
		return 123 === t ? e.attempt(iu, a, a)(t) : a(t);
	}
	function a(t) {
		return t4(e, s, "whitespace")(t);
	}
	function s(r) {
		return null === r || tK(r) ? (e.exit("directiveLeaf"), t(r)) : n(r);
	}
} };
var is = {
	tokenize: function(e, t, n) {
		return ie(e, t, n, "directiveLeafLabel", "directiveLeafLabelMarker", "directiveLeafLabelString", !0);
	},
	partial: !0
}, iu = {
	tokenize: function(e, t, n) {
		return r7(e, t, n, "directiveLeafAttributes", "directiveLeafAttributesMarker", "directiveLeafAttribute", "directiveLeafAttributeId", "directiveLeafAttributeClass", "directiveLeafAttributeName", "directiveLeafAttributeInitializerMarker", "directiveLeafAttributeValueLiteral", "directiveLeafAttributeValue", "directiveLeafAttributeValueMarker", "directiveLeafAttributeValueData", !0);
	},
	partial: !0
};
let ic = {
	tokenize: function(e, t, n) {
		let r = this;
		return function(t) {
			return e.enter("directiveText"), e.enter("directiveTextMarker"), e.consume(t), e.exit("directiveTextMarker"), it.call(r, e, i, n, "directiveTextName");
		};
		function i(t) {
			return 58 === t ? n(t) : 91 === t ? e.attempt(id, l, l)(t) : l(t);
		}
		function l(t) {
			return 123 === t ? e.attempt(ip, o, o)(t) : o(t);
		}
		function o(n) {
			return e.exit("directiveText"), t(n);
		}
	},
	previous: function(e) {
		return 58 !== e || "characterEscape" === this.events[this.events.length - 1][1].type;
	}
};
var id = {
	tokenize: function(e, t, n) {
		return ie(e, t, n, "directiveTextLabel", "directiveTextLabelMarker", "directiveTextLabelString");
	},
	partial: !0
}, ip = {
	tokenize: function(e, t, n) {
		return r7(e, t, n, "directiveTextAttributes", "directiveTextAttributesMarker", "directiveTextAttribute", "directiveTextAttributeId", "directiveTextAttributeClass", "directiveTextAttributeName", "directiveTextAttributeInitializerMarker", "directiveTextAttributeValueLiteral", "directiveTextAttributeValue", "directiveTextAttributeValueMarker", "directiveTextAttributeValueData");
	},
	partial: !0
};
let ih = [
	"AElig",
	"AMP",
	"Aacute",
	"Acirc",
	"Agrave",
	"Aring",
	"Atilde",
	"Auml",
	"COPY",
	"Ccedil",
	"ETH",
	"Eacute",
	"Ecirc",
	"Egrave",
	"Euml",
	"GT",
	"Iacute",
	"Icirc",
	"Igrave",
	"Iuml",
	"LT",
	"Ntilde",
	"Oacute",
	"Ocirc",
	"Ograve",
	"Oslash",
	"Otilde",
	"Ouml",
	"QUOT",
	"REG",
	"THORN",
	"Uacute",
	"Ucirc",
	"Ugrave",
	"Uuml",
	"Yacute",
	"aacute",
	"acirc",
	"acute",
	"aelig",
	"agrave",
	"amp",
	"aring",
	"atilde",
	"auml",
	"brvbar",
	"ccedil",
	"cedil",
	"cent",
	"copy",
	"curren",
	"deg",
	"divide",
	"eacute",
	"ecirc",
	"egrave",
	"eth",
	"euml",
	"frac12",
	"frac14",
	"frac34",
	"gt",
	"iacute",
	"icirc",
	"iexcl",
	"igrave",
	"iquest",
	"iuml",
	"laquo",
	"lt",
	"macr",
	"micro",
	"middot",
	"nbsp",
	"not",
	"ntilde",
	"oacute",
	"ocirc",
	"ograve",
	"ordf",
	"ordm",
	"oslash",
	"otilde",
	"ouml",
	"para",
	"plusmn",
	"pound",
	"quot",
	"raquo",
	"reg",
	"sect",
	"shy",
	"sup1",
	"sup2",
	"sup3",
	"szlig",
	"thorn",
	"times",
	"uacute",
	"ucirc",
	"ugrave",
	"uml",
	"uuml",
	"yacute",
	"yen",
	"yuml"
], im = {
	0: "�",
	128: "€",
	130: "‚",
	131: "ƒ",
	132: "„",
	133: "…",
	134: "†",
	135: "‡",
	136: "ˆ",
	137: "‰",
	138: "Š",
	139: "‹",
	140: "Œ",
	142: "Ž",
	145: "‘",
	146: "’",
	147: "“",
	148: "”",
	149: "•",
	150: "–",
	151: "—",
	152: "˜",
	153: "™",
	154: "š",
	155: "›",
	156: "œ",
	158: "ž",
	159: "Ÿ"
};
function ig(e) {
	let t = "string" == typeof e ? e.charCodeAt(0) : e;
	return t >= 48 && t <= 57;
}
function iy(e) {
	let t = "string" == typeof e ? e.charCodeAt(0) : e;
	return t >= 97 && t <= 102 || t >= 65 && t <= 70 || t >= 48 && t <= 57;
}
function iv(e) {
	let t;
	return (t = "string" == typeof e ? e.charCodeAt(0) : e) >= 97 && t <= 122 || t >= 65 && t <= 90 || ig(e);
}
var ix = [
	"",
	"Named character references must be terminated by a semicolon",
	"Numeric character references must be terminated by a semicolon",
	"Named character references cannot be empty",
	"Numeric character references cannot be empty",
	"Named character references must be known",
	"Numeric character references cannot be disallowed",
	"Numeric character references cannot be outside the permissible Unicode range"
];
function ib(e, t) {
	let n, r, i, l = t || {}, o = "string" == typeof l.additional ? l.additional.charCodeAt(0) : l.additional, a = [], s = 0, u = -1, c = "";
	l.position && ("start" in l.position || "indent" in l.position ? (r = l.position.indent, n = l.position.start) : n = l.position);
	let d = (n ? n.line : 0) || 1, p = (n ? n.column : 0) || 1, f = g();
	for (s--; ++s <= e.length;) if (10 === i && (p = (r ? r[u] : 0) || 1), 38 === (i = e.charCodeAt(s))) {
		let t, n = e.charCodeAt(s + 1);
		if (9 === n || 10 === n || 12 === n || 32 === n || 38 === n || 60 === n || Number.isNaN(n) || o && n === o) {
			c += String.fromCharCode(i), p++;
			continue;
		}
		let r = s + 1, u = r, d = r;
		if (35 === n) {
			d = ++u;
			let n = e.charCodeAt(d);
			88 === n || 120 === n ? (t = "hexadecimal", d = ++u) : t = "decimal";
		} else t = "named";
		let x = "", b = "", k = "", C = "named" === t ? iv : "decimal" === t ? ig : iy;
		for (d--; ++d <= e.length;) {
			let n = e.charCodeAt(d);
			if (!C(n)) break;
			k += String.fromCharCode(n), "named" === t && ih.includes(k) && (x = k, b = tz(k));
		}
		let w = 59 === e.charCodeAt(d);
		if (w) {
			d++;
			let e = "named" === t && tz(k);
			e && (x = k, b = e);
		}
		let S = 1 + d - r, A = "";
		if (w || !1 !== l.nonTerminated) if (k) if ("named" === t) {
			if (w && !b) y(5, 1);
			else if (x !== k && (S = 1 + (d = u + x.length) - u, w = !1), !w) {
				let t = x ? 1 : 3;
				if (l.attribute) {
					let n = e.charCodeAt(d);
					61 === n ? (y(t, S), b = "") : iv(n) ? b = "" : y(t, S);
				} else y(t, S);
			}
			A = b;
		} else {
			var h, m;
			w || y(2, S);
			let e = Number.parseInt(k, "hexadecimal" === t ? 16 : 10);
			if ((h = e) >= 55296 && h <= 57343 || h > 1114111) y(7, S), A = String.fromCharCode(65533);
			else if (e in im) y(6, S), A = im[e];
			else {
				let t = "";
				((m = e) >= 1 && m <= 8 || 11 === m || m >= 13 && m <= 31 || m >= 127 && m <= 159 || m >= 64976 && m <= 65007 || (65535 & m) == 65535 || (65535 & m) == 65534) && y(6, S), e > 65535 && (e -= 65536, t += String.fromCharCode(e >>> 10 | 55296), e = 56320 | 1023 & e), A = t + String.fromCharCode(e);
			}
		}
		else "named" !== t && y(4, S);
		if (A) {
			v(), f = g(), s = d - 1, p += d - r + 1, a.push(A);
			let t = g();
			t.offset++, l.reference && l.reference.call(l.referenceContext || void 0, A, {
				start: f,
				end: t
			}, e.slice(r - 1, d)), f = t;
		} else k = e.slice(r - 1, d), c += k, p += k.length, s = d - 1;
	} else 10 === i && (d++, u++, p = 0), Number.isNaN(i) ? v() : (c += String.fromCharCode(i), p++);
	return a.join("");
	function g() {
		return {
			line: d,
			column: p,
			offset: s + ((n ? n.offset : 0) || 0)
		};
	}
	function y(e, t) {
		let n;
		l.warning && (n = g(), n.column += t, n.offset += t, l.warning.call(l.warningContext || void 0, ix[e], n, e));
	}
	function v() {
		c && (a.push(c), l.text && l.text.call(l.textContext || void 0, c, {
			start: f,
			end: g()
		}), c = "");
	}
}
function ik(e) {
	iS.call(this, "containerDirective", e);
}
function iC(e) {
	iS.call(this, "leafDirective", e);
}
function iw(e) {
	iS.call(this, "textDirective", e);
}
function iS(e, t) {
	this.enter({
		type: e,
		name: "",
		attributes: {},
		children: []
	}, t);
}
function iA(e) {
	let t = this.stack[this.stack.length - 1];
	"containerDirective" === t.type || "leafDirective" === t.type || t.type, t.name = this.sliceSerialize(e);
}
function iT(e) {
	this.enter({
		type: "paragraph",
		data: { directiveLabel: !0 },
		children: []
	}, e);
}
function iD(e) {
	this.exit(e);
}
function iL() {
	this.data.directiveAttributes = [], this.buffer();
}
function i_(e) {
	this.data.directiveAttributes.push(["id", ib(this.sliceSerialize(e), { attribute: !0 })]);
}
function iE(e) {
	this.data.directiveAttributes.push(["class", ib(this.sliceSerialize(e), { attribute: !0 })]);
}
function iI(e) {
	let t = this.data.directiveAttributes;
	t[t.length - 1][1] = ib(this.sliceSerialize(e), { attribute: !0 });
}
function iN(e) {
	this.data.directiveAttributes.push([this.sliceSerialize(e), ""]);
}
function iM() {
	let e = this.data.directiveAttributes, t = {}, n = -1;
	for (; ++n < e.length;) {
		let r = e[n];
		"class" === r[0] && t.class ? t.class += " " + r[1] : t[r[0]] = r[1];
	}
	this.data.directiveAttributes = void 0, this.resume();
	let r = this.stack[this.stack.length - 1];
	"containerDirective" === r.type || "leafDirective" === r.type || r.type, r.attributes = t;
}
function iO(e) {
	this.exit(e);
}
var iP = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, iz = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, iF = {};
function iR(e, t) {
	return ((t || iF).jsx ? iz : iP).test(e);
}
var i$ = /[ \t\n\f\r]/g;
function iB(e) {
	return "" === e.replace(i$, "");
}
var ij = class {
	constructor(e, t, n) {
		this.normal = t, this.property = e, n && (this.space = n);
	}
};
function iH(e, t) {
	let n = {}, r = {};
	for (let t of e) Object.assign(n, t.property), Object.assign(r, t.normal);
	return new ij(n, r, t);
}
function iV(e) {
	return e.toLowerCase();
}
ij.prototype.normal = {}, ij.prototype.property = {}, ij.prototype.space = void 0;
var iU = class {
	constructor(e, t) {
		this.attribute = t, this.property = e;
	}
};
iU.prototype.attribute = "", iU.prototype.booleanish = !1, iU.prototype.boolean = !1, iU.prototype.commaOrSpaceSeparated = !1, iU.prototype.commaSeparated = !1, iU.prototype.defined = !1, iU.prototype.mustUseProperty = !1, iU.prototype.number = !1, iU.prototype.overloadedBoolean = !1, iU.prototype.property = "", iU.prototype.spaceSeparated = !1, iU.prototype.space = void 0;
var iq = e({
	boolean: () => iG,
	booleanish: () => iJ,
	commaOrSpaceSeparated: () => iZ,
	commaSeparated: () => iQ,
	number: () => iK,
	overloadedBoolean: () => iX,
	spaceSeparated: () => iY
}), iW = 0;
let iG = i1(), iJ = i1(), iX = i1(), iK = i1(), iY = i1(), iQ = i1(), iZ = i1();
function i1() {
	return 2 ** ++iW;
}
var i0 = Object.keys(iq), i2 = class extends iU {
	constructor(e, t, n, r) {
		var i, l, o, a, s;
		let u = -1;
		if (super(e, t), i = this, (l = r) && (i.space = l), "number" == typeof n) for (; ++u < i0.length;) {
			let e = i0[u];
			o = this, a = i0[u], (s = (n & iq[e]) === iq[e]) && (o[a] = s);
		}
	}
};
function i4(e) {
	let t = {}, n = {};
	for (let [r, i] of Object.entries(e.properties)) {
		let l = new i2(r, e.transform(e.attributes || {}, r), i, e.space);
		e.mustUseProperty && e.mustUseProperty.includes(r) && (l.mustUseProperty = !0), t[r] = l, n[iV(r)] = r, n[iV(l.attribute)] = r;
	}
	return new ij(t, n, e.space);
}
i2.prototype.defined = !0;
let i3 = i4({
	properties: {
		ariaActiveDescendant: null,
		ariaAtomic: iJ,
		ariaAutoComplete: null,
		ariaBusy: iJ,
		ariaChecked: iJ,
		ariaColCount: iK,
		ariaColIndex: iK,
		ariaColSpan: iK,
		ariaControls: iY,
		ariaCurrent: null,
		ariaDescribedBy: iY,
		ariaDetails: null,
		ariaDisabled: iJ,
		ariaDropEffect: iY,
		ariaErrorMessage: null,
		ariaExpanded: iJ,
		ariaFlowTo: iY,
		ariaGrabbed: iJ,
		ariaHasPopup: null,
		ariaHidden: iJ,
		ariaInvalid: null,
		ariaKeyShortcuts: null,
		ariaLabel: null,
		ariaLabelledBy: iY,
		ariaLevel: iK,
		ariaLive: null,
		ariaModal: iJ,
		ariaMultiLine: iJ,
		ariaMultiSelectable: iJ,
		ariaOrientation: null,
		ariaOwns: iY,
		ariaPlaceholder: null,
		ariaPosInSet: iK,
		ariaPressed: iJ,
		ariaReadOnly: iJ,
		ariaRelevant: null,
		ariaRequired: iJ,
		ariaRoleDescription: iY,
		ariaRowCount: iK,
		ariaRowIndex: iK,
		ariaRowSpan: iK,
		ariaSelected: iJ,
		ariaSetSize: iK,
		ariaSort: null,
		ariaValueMax: iK,
		ariaValueMin: iK,
		ariaValueNow: iK,
		ariaValueText: null,
		role: null
	},
	transform: (e, t) => "role" === t ? t : "aria-" + t.slice(4).toLowerCase()
});
function i5(e, t) {
	return t in e ? e[t] : t;
}
function i9(e, t) {
	return i5(e, t.toLowerCase());
}
let i6 = i4({
	attributes: {
		acceptcharset: "accept-charset",
		classname: "class",
		htmlfor: "for",
		httpequiv: "http-equiv"
	},
	mustUseProperty: [
		"checked",
		"multiple",
		"muted",
		"selected"
	],
	properties: {
		abbr: null,
		accept: iQ,
		acceptCharset: iY,
		accessKey: iY,
		action: null,
		allow: null,
		allowFullScreen: iG,
		allowPaymentRequest: iG,
		allowUserMedia: iG,
		alt: null,
		as: null,
		async: iG,
		autoCapitalize: null,
		autoComplete: iY,
		autoFocus: iG,
		autoPlay: iG,
		blocking: iY,
		capture: null,
		charSet: null,
		checked: iG,
		cite: null,
		className: iY,
		cols: iK,
		colSpan: null,
		content: null,
		contentEditable: iJ,
		controls: iG,
		controlsList: iY,
		coords: iK | iQ,
		crossOrigin: null,
		data: null,
		dateTime: null,
		decoding: null,
		default: iG,
		defer: iG,
		dir: null,
		dirName: null,
		disabled: iG,
		download: iX,
		draggable: iJ,
		encType: null,
		enterKeyHint: null,
		fetchPriority: null,
		form: null,
		formAction: null,
		formEncType: null,
		formMethod: null,
		formNoValidate: iG,
		formTarget: null,
		headers: iY,
		height: iK,
		hidden: iX,
		high: iK,
		href: null,
		hrefLang: null,
		htmlFor: iY,
		httpEquiv: iY,
		id: null,
		imageSizes: null,
		imageSrcSet: null,
		inert: iG,
		inputMode: null,
		integrity: null,
		is: null,
		isMap: iG,
		itemId: null,
		itemProp: iY,
		itemRef: iY,
		itemScope: iG,
		itemType: iY,
		kind: null,
		label: null,
		lang: null,
		language: null,
		list: null,
		loading: null,
		loop: iG,
		low: iK,
		manifest: null,
		max: null,
		maxLength: iK,
		media: null,
		method: null,
		min: null,
		minLength: iK,
		multiple: iG,
		muted: iG,
		name: null,
		nonce: null,
		noModule: iG,
		noValidate: iG,
		onAbort: null,
		onAfterPrint: null,
		onAuxClick: null,
		onBeforeMatch: null,
		onBeforePrint: null,
		onBeforeToggle: null,
		onBeforeUnload: null,
		onBlur: null,
		onCancel: null,
		onCanPlay: null,
		onCanPlayThrough: null,
		onChange: null,
		onClick: null,
		onClose: null,
		onContextLost: null,
		onContextMenu: null,
		onContextRestored: null,
		onCopy: null,
		onCueChange: null,
		onCut: null,
		onDblClick: null,
		onDrag: null,
		onDragEnd: null,
		onDragEnter: null,
		onDragExit: null,
		onDragLeave: null,
		onDragOver: null,
		onDragStart: null,
		onDrop: null,
		onDurationChange: null,
		onEmptied: null,
		onEnded: null,
		onError: null,
		onFocus: null,
		onFormData: null,
		onHashChange: null,
		onInput: null,
		onInvalid: null,
		onKeyDown: null,
		onKeyPress: null,
		onKeyUp: null,
		onLanguageChange: null,
		onLoad: null,
		onLoadedData: null,
		onLoadedMetadata: null,
		onLoadEnd: null,
		onLoadStart: null,
		onMessage: null,
		onMessageError: null,
		onMouseDown: null,
		onMouseEnter: null,
		onMouseLeave: null,
		onMouseMove: null,
		onMouseOut: null,
		onMouseOver: null,
		onMouseUp: null,
		onOffline: null,
		onOnline: null,
		onPageHide: null,
		onPageShow: null,
		onPaste: null,
		onPause: null,
		onPlay: null,
		onPlaying: null,
		onPopState: null,
		onProgress: null,
		onRateChange: null,
		onRejectionHandled: null,
		onReset: null,
		onResize: null,
		onScroll: null,
		onScrollEnd: null,
		onSecurityPolicyViolation: null,
		onSeeked: null,
		onSeeking: null,
		onSelect: null,
		onSlotChange: null,
		onStalled: null,
		onStorage: null,
		onSubmit: null,
		onSuspend: null,
		onTimeUpdate: null,
		onToggle: null,
		onUnhandledRejection: null,
		onUnload: null,
		onVolumeChange: null,
		onWaiting: null,
		onWheel: null,
		open: iG,
		optimum: iK,
		pattern: null,
		ping: iY,
		placeholder: null,
		playsInline: iG,
		popover: null,
		popoverTarget: null,
		popoverTargetAction: null,
		poster: null,
		preload: null,
		readOnly: iG,
		referrerPolicy: null,
		rel: iY,
		required: iG,
		reversed: iG,
		rows: iK,
		rowSpan: iK,
		sandbox: iY,
		scope: null,
		scoped: iG,
		seamless: iG,
		selected: iG,
		shadowRootClonable: iG,
		shadowRootDelegatesFocus: iG,
		shadowRootMode: null,
		shape: null,
		size: iK,
		sizes: null,
		slot: null,
		span: iK,
		spellCheck: iJ,
		src: null,
		srcDoc: null,
		srcLang: null,
		srcSet: null,
		start: iK,
		step: null,
		style: null,
		tabIndex: iK,
		target: null,
		title: null,
		translate: null,
		type: null,
		typeMustMatch: iG,
		useMap: null,
		value: iJ,
		width: iK,
		wrap: null,
		writingSuggestions: null,
		align: null,
		aLink: null,
		archive: iY,
		axis: null,
		background: null,
		bgColor: null,
		border: iK,
		borderColor: null,
		bottomMargin: iK,
		cellPadding: null,
		cellSpacing: null,
		char: null,
		charOff: null,
		classId: null,
		clear: null,
		code: null,
		codeBase: null,
		codeType: null,
		color: null,
		compact: iG,
		declare: iG,
		event: null,
		face: null,
		frame: null,
		frameBorder: null,
		hSpace: iK,
		leftMargin: iK,
		link: null,
		longDesc: null,
		lowSrc: null,
		marginHeight: iK,
		marginWidth: iK,
		noResize: iG,
		noHref: iG,
		noShade: iG,
		noWrap: iG,
		object: null,
		profile: null,
		prompt: null,
		rev: null,
		rightMargin: iK,
		rules: null,
		scheme: null,
		scrolling: iJ,
		standby: null,
		summary: null,
		text: null,
		topMargin: iK,
		valueType: null,
		version: null,
		vAlign: null,
		vLink: null,
		vSpace: iK,
		allowTransparency: null,
		autoCorrect: null,
		autoSave: null,
		disablePictureInPicture: iG,
		disableRemotePlayback: iG,
		prefix: null,
		property: null,
		results: iK,
		security: null,
		unselectable: null
	},
	space: "html",
	transform: i9
}), i8 = i4({
	attributes: {
		accentHeight: "accent-height",
		alignmentBaseline: "alignment-baseline",
		arabicForm: "arabic-form",
		baselineShift: "baseline-shift",
		capHeight: "cap-height",
		className: "class",
		clipPath: "clip-path",
		clipRule: "clip-rule",
		colorInterpolation: "color-interpolation",
		colorInterpolationFilters: "color-interpolation-filters",
		colorProfile: "color-profile",
		colorRendering: "color-rendering",
		crossOrigin: "crossorigin",
		dataType: "datatype",
		dominantBaseline: "dominant-baseline",
		enableBackground: "enable-background",
		fillOpacity: "fill-opacity",
		fillRule: "fill-rule",
		floodColor: "flood-color",
		floodOpacity: "flood-opacity",
		fontFamily: "font-family",
		fontSize: "font-size",
		fontSizeAdjust: "font-size-adjust",
		fontStretch: "font-stretch",
		fontStyle: "font-style",
		fontVariant: "font-variant",
		fontWeight: "font-weight",
		glyphName: "glyph-name",
		glyphOrientationHorizontal: "glyph-orientation-horizontal",
		glyphOrientationVertical: "glyph-orientation-vertical",
		hrefLang: "hreflang",
		horizAdvX: "horiz-adv-x",
		horizOriginX: "horiz-origin-x",
		horizOriginY: "horiz-origin-y",
		imageRendering: "image-rendering",
		letterSpacing: "letter-spacing",
		lightingColor: "lighting-color",
		markerEnd: "marker-end",
		markerMid: "marker-mid",
		markerStart: "marker-start",
		navDown: "nav-down",
		navDownLeft: "nav-down-left",
		navDownRight: "nav-down-right",
		navLeft: "nav-left",
		navNext: "nav-next",
		navPrev: "nav-prev",
		navRight: "nav-right",
		navUp: "nav-up",
		navUpLeft: "nav-up-left",
		navUpRight: "nav-up-right",
		onAbort: "onabort",
		onActivate: "onactivate",
		onAfterPrint: "onafterprint",
		onBeforePrint: "onbeforeprint",
		onBegin: "onbegin",
		onCancel: "oncancel",
		onCanPlay: "oncanplay",
		onCanPlayThrough: "oncanplaythrough",
		onChange: "onchange",
		onClick: "onclick",
		onClose: "onclose",
		onCopy: "oncopy",
		onCueChange: "oncuechange",
		onCut: "oncut",
		onDblClick: "ondblclick",
		onDrag: "ondrag",
		onDragEnd: "ondragend",
		onDragEnter: "ondragenter",
		onDragExit: "ondragexit",
		onDragLeave: "ondragleave",
		onDragOver: "ondragover",
		onDragStart: "ondragstart",
		onDrop: "ondrop",
		onDurationChange: "ondurationchange",
		onEmptied: "onemptied",
		onEnd: "onend",
		onEnded: "onended",
		onError: "onerror",
		onFocus: "onfocus",
		onFocusIn: "onfocusin",
		onFocusOut: "onfocusout",
		onHashChange: "onhashchange",
		onInput: "oninput",
		onInvalid: "oninvalid",
		onKeyDown: "onkeydown",
		onKeyPress: "onkeypress",
		onKeyUp: "onkeyup",
		onLoad: "onload",
		onLoadedData: "onloadeddata",
		onLoadedMetadata: "onloadedmetadata",
		onLoadStart: "onloadstart",
		onMessage: "onmessage",
		onMouseDown: "onmousedown",
		onMouseEnter: "onmouseenter",
		onMouseLeave: "onmouseleave",
		onMouseMove: "onmousemove",
		onMouseOut: "onmouseout",
		onMouseOver: "onmouseover",
		onMouseUp: "onmouseup",
		onMouseWheel: "onmousewheel",
		onOffline: "onoffline",
		onOnline: "ononline",
		onPageHide: "onpagehide",
		onPageShow: "onpageshow",
		onPaste: "onpaste",
		onPause: "onpause",
		onPlay: "onplay",
		onPlaying: "onplaying",
		onPopState: "onpopstate",
		onProgress: "onprogress",
		onRateChange: "onratechange",
		onRepeat: "onrepeat",
		onReset: "onreset",
		onResize: "onresize",
		onScroll: "onscroll",
		onSeeked: "onseeked",
		onSeeking: "onseeking",
		onSelect: "onselect",
		onShow: "onshow",
		onStalled: "onstalled",
		onStorage: "onstorage",
		onSubmit: "onsubmit",
		onSuspend: "onsuspend",
		onTimeUpdate: "ontimeupdate",
		onToggle: "ontoggle",
		onUnload: "onunload",
		onVolumeChange: "onvolumechange",
		onWaiting: "onwaiting",
		onZoom: "onzoom",
		overlinePosition: "overline-position",
		overlineThickness: "overline-thickness",
		paintOrder: "paint-order",
		panose1: "panose-1",
		pointerEvents: "pointer-events",
		referrerPolicy: "referrerpolicy",
		renderingIntent: "rendering-intent",
		shapeRendering: "shape-rendering",
		stopColor: "stop-color",
		stopOpacity: "stop-opacity",
		strikethroughPosition: "strikethrough-position",
		strikethroughThickness: "strikethrough-thickness",
		strokeDashArray: "stroke-dasharray",
		strokeDashOffset: "stroke-dashoffset",
		strokeLineCap: "stroke-linecap",
		strokeLineJoin: "stroke-linejoin",
		strokeMiterLimit: "stroke-miterlimit",
		strokeOpacity: "stroke-opacity",
		strokeWidth: "stroke-width",
		tabIndex: "tabindex",
		textAnchor: "text-anchor",
		textDecoration: "text-decoration",
		textRendering: "text-rendering",
		transformOrigin: "transform-origin",
		typeOf: "typeof",
		underlinePosition: "underline-position",
		underlineThickness: "underline-thickness",
		unicodeBidi: "unicode-bidi",
		unicodeRange: "unicode-range",
		unitsPerEm: "units-per-em",
		vAlphabetic: "v-alphabetic",
		vHanging: "v-hanging",
		vIdeographic: "v-ideographic",
		vMathematical: "v-mathematical",
		vectorEffect: "vector-effect",
		vertAdvY: "vert-adv-y",
		vertOriginX: "vert-origin-x",
		vertOriginY: "vert-origin-y",
		wordSpacing: "word-spacing",
		writingMode: "writing-mode",
		xHeight: "x-height",
		playbackOrder: "playbackorder",
		timelineBegin: "timelinebegin"
	},
	properties: {
		about: iZ,
		accentHeight: iK,
		accumulate: null,
		additive: null,
		alignmentBaseline: null,
		alphabetic: iK,
		amplitude: iK,
		arabicForm: null,
		ascent: iK,
		attributeName: null,
		attributeType: null,
		azimuth: iK,
		bandwidth: null,
		baselineShift: null,
		baseFrequency: null,
		baseProfile: null,
		bbox: null,
		begin: null,
		bias: iK,
		by: null,
		calcMode: null,
		capHeight: iK,
		className: iY,
		clip: null,
		clipPath: null,
		clipPathUnits: null,
		clipRule: null,
		color: null,
		colorInterpolation: null,
		colorInterpolationFilters: null,
		colorProfile: null,
		colorRendering: null,
		content: null,
		contentScriptType: null,
		contentStyleType: null,
		crossOrigin: null,
		cursor: null,
		cx: null,
		cy: null,
		d: null,
		dataType: null,
		defaultAction: null,
		descent: iK,
		diffuseConstant: iK,
		direction: null,
		display: null,
		dur: null,
		divisor: iK,
		dominantBaseline: null,
		download: iG,
		dx: null,
		dy: null,
		edgeMode: null,
		editable: null,
		elevation: iK,
		enableBackground: null,
		end: null,
		event: null,
		exponent: iK,
		externalResourcesRequired: null,
		fill: null,
		fillOpacity: iK,
		fillRule: null,
		filter: null,
		filterRes: null,
		filterUnits: null,
		floodColor: null,
		floodOpacity: null,
		focusable: null,
		focusHighlight: null,
		fontFamily: null,
		fontSize: null,
		fontSizeAdjust: null,
		fontStretch: null,
		fontStyle: null,
		fontVariant: null,
		fontWeight: null,
		format: null,
		fr: null,
		from: null,
		fx: null,
		fy: null,
		g1: iQ,
		g2: iQ,
		glyphName: iQ,
		glyphOrientationHorizontal: null,
		glyphOrientationVertical: null,
		glyphRef: null,
		gradientTransform: null,
		gradientUnits: null,
		handler: null,
		hanging: iK,
		hatchContentUnits: null,
		hatchUnits: null,
		height: null,
		href: null,
		hrefLang: null,
		horizAdvX: iK,
		horizOriginX: iK,
		horizOriginY: iK,
		id: null,
		ideographic: iK,
		imageRendering: null,
		initialVisibility: null,
		in: null,
		in2: null,
		intercept: iK,
		k: iK,
		k1: iK,
		k2: iK,
		k3: iK,
		k4: iK,
		kernelMatrix: iZ,
		kernelUnitLength: null,
		keyPoints: null,
		keySplines: null,
		keyTimes: null,
		kerning: null,
		lang: null,
		lengthAdjust: null,
		letterSpacing: null,
		lightingColor: null,
		limitingConeAngle: iK,
		local: null,
		markerEnd: null,
		markerMid: null,
		markerStart: null,
		markerHeight: null,
		markerUnits: null,
		markerWidth: null,
		mask: null,
		maskContentUnits: null,
		maskUnits: null,
		mathematical: null,
		max: null,
		media: null,
		mediaCharacterEncoding: null,
		mediaContentEncodings: null,
		mediaSize: iK,
		mediaTime: null,
		method: null,
		min: null,
		mode: null,
		name: null,
		navDown: null,
		navDownLeft: null,
		navDownRight: null,
		navLeft: null,
		navNext: null,
		navPrev: null,
		navRight: null,
		navUp: null,
		navUpLeft: null,
		navUpRight: null,
		numOctaves: null,
		observer: null,
		offset: null,
		onAbort: null,
		onActivate: null,
		onAfterPrint: null,
		onBeforePrint: null,
		onBegin: null,
		onCancel: null,
		onCanPlay: null,
		onCanPlayThrough: null,
		onChange: null,
		onClick: null,
		onClose: null,
		onCopy: null,
		onCueChange: null,
		onCut: null,
		onDblClick: null,
		onDrag: null,
		onDragEnd: null,
		onDragEnter: null,
		onDragExit: null,
		onDragLeave: null,
		onDragOver: null,
		onDragStart: null,
		onDrop: null,
		onDurationChange: null,
		onEmptied: null,
		onEnd: null,
		onEnded: null,
		onError: null,
		onFocus: null,
		onFocusIn: null,
		onFocusOut: null,
		onHashChange: null,
		onInput: null,
		onInvalid: null,
		onKeyDown: null,
		onKeyPress: null,
		onKeyUp: null,
		onLoad: null,
		onLoadedData: null,
		onLoadedMetadata: null,
		onLoadStart: null,
		onMessage: null,
		onMouseDown: null,
		onMouseEnter: null,
		onMouseLeave: null,
		onMouseMove: null,
		onMouseOut: null,
		onMouseOver: null,
		onMouseUp: null,
		onMouseWheel: null,
		onOffline: null,
		onOnline: null,
		onPageHide: null,
		onPageShow: null,
		onPaste: null,
		onPause: null,
		onPlay: null,
		onPlaying: null,
		onPopState: null,
		onProgress: null,
		onRateChange: null,
		onRepeat: null,
		onReset: null,
		onResize: null,
		onScroll: null,
		onSeeked: null,
		onSeeking: null,
		onSelect: null,
		onShow: null,
		onStalled: null,
		onStorage: null,
		onSubmit: null,
		onSuspend: null,
		onTimeUpdate: null,
		onToggle: null,
		onUnload: null,
		onVolumeChange: null,
		onWaiting: null,
		onZoom: null,
		opacity: null,
		operator: null,
		order: null,
		orient: null,
		orientation: null,
		origin: null,
		overflow: null,
		overlay: null,
		overlinePosition: iK,
		overlineThickness: iK,
		paintOrder: null,
		panose1: null,
		path: null,
		pathLength: iK,
		patternContentUnits: null,
		patternTransform: null,
		patternUnits: null,
		phase: null,
		ping: iY,
		pitch: null,
		playbackOrder: null,
		pointerEvents: null,
		points: null,
		pointsAtX: iK,
		pointsAtY: iK,
		pointsAtZ: iK,
		preserveAlpha: null,
		preserveAspectRatio: null,
		primitiveUnits: null,
		propagate: null,
		property: iZ,
		r: null,
		radius: null,
		referrerPolicy: null,
		refX: null,
		refY: null,
		rel: iZ,
		rev: iZ,
		renderingIntent: null,
		repeatCount: null,
		repeatDur: null,
		requiredExtensions: iZ,
		requiredFeatures: iZ,
		requiredFonts: iZ,
		requiredFormats: iZ,
		resource: null,
		restart: null,
		result: null,
		rotate: null,
		rx: null,
		ry: null,
		scale: null,
		seed: null,
		shapeRendering: null,
		side: null,
		slope: null,
		snapshotTime: null,
		specularConstant: iK,
		specularExponent: iK,
		spreadMethod: null,
		spacing: null,
		startOffset: null,
		stdDeviation: null,
		stemh: null,
		stemv: null,
		stitchTiles: null,
		stopColor: null,
		stopOpacity: null,
		strikethroughPosition: iK,
		strikethroughThickness: iK,
		string: null,
		stroke: null,
		strokeDashArray: iZ,
		strokeDashOffset: null,
		strokeLineCap: null,
		strokeLineJoin: null,
		strokeMiterLimit: iK,
		strokeOpacity: iK,
		strokeWidth: null,
		style: null,
		surfaceScale: iK,
		syncBehavior: null,
		syncBehaviorDefault: null,
		syncMaster: null,
		syncTolerance: null,
		syncToleranceDefault: null,
		systemLanguage: iZ,
		tabIndex: iK,
		tableValues: null,
		target: null,
		targetX: iK,
		targetY: iK,
		textAnchor: null,
		textDecoration: null,
		textRendering: null,
		textLength: null,
		timelineBegin: null,
		title: null,
		transformBehavior: null,
		type: null,
		typeOf: iZ,
		to: null,
		transform: null,
		transformOrigin: null,
		u1: null,
		u2: null,
		underlinePosition: iK,
		underlineThickness: iK,
		unicode: null,
		unicodeBidi: null,
		unicodeRange: null,
		unitsPerEm: iK,
		values: null,
		vAlphabetic: iK,
		vMathematical: iK,
		vectorEffect: null,
		vHanging: iK,
		vIdeographic: iK,
		version: null,
		vertAdvY: iK,
		vertOriginX: iK,
		vertOriginY: iK,
		viewBox: null,
		viewTarget: null,
		visibility: null,
		width: null,
		widths: null,
		wordSpacing: null,
		writingMode: null,
		x: null,
		x1: null,
		x2: null,
		xChannelSelector: null,
		xHeight: iK,
		y: null,
		y1: null,
		y2: null,
		yChannelSelector: null,
		z: null,
		zoomAndPan: null
	},
	space: "svg",
	transform: i5
}), i7 = i4({
	properties: {
		xLinkActuate: null,
		xLinkArcRole: null,
		xLinkHref: null,
		xLinkRole: null,
		xLinkShow: null,
		xLinkTitle: null,
		xLinkType: null
	},
	space: "xlink",
	transform: (e, t) => "xlink:" + t.slice(5).toLowerCase()
}), le = i4({
	attributes: { xmlnsxlink: "xmlns:xlink" },
	properties: {
		xmlnsXLink: null,
		xmlns: null
	},
	space: "xmlns",
	transform: i9
}), lt = i4({
	properties: {
		xmlBase: null,
		xmlLang: null,
		xmlSpace: null
	},
	space: "xml",
	transform: (e, t) => "xml:" + t.slice(3).toLowerCase()
}), ln = {
	classId: "classID",
	dataType: "datatype",
	itemId: "itemID",
	strokeDashArray: "strokeDasharray",
	strokeDashOffset: "strokeDashoffset",
	strokeLineCap: "strokeLinecap",
	strokeLineJoin: "strokeLinejoin",
	strokeMiterLimit: "strokeMiterlimit",
	typeOf: "typeof",
	xLinkActuate: "xlinkActuate",
	xLinkArcRole: "xlinkArcrole",
	xLinkHref: "xlinkHref",
	xLinkRole: "xlinkRole",
	xLinkShow: "xlinkShow",
	xLinkTitle: "xlinkTitle",
	xLinkType: "xlinkType",
	xmlnsXLink: "xmlnsXlink"
};
var lr = /[A-Z]/g, li = /-[a-z]/g, ll = /^data[-\w.:]+$/i;
function lo(e) {
	return "-" + e.toLowerCase();
}
function la(e) {
	return e.charAt(1).toUpperCase();
}
let ls = iH([
	i3,
	i6,
	i7,
	le,
	lt
], "html"), lu = iH([
	i3,
	i8,
	i7,
	le,
	lt
], "svg");
var lc = n((e, t) => {
	var n = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, r = /\n/g, i = /^\s*/, l = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, o = /^:\s*/, a = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, s = /^[;\s]*/, u = /^\s+|\s+$/g;
	function c(e) {
		return e ? e.replace(u, "") : "";
	}
	t.exports = function(e, t) {
		if ("string" != typeof e) throw TypeError("First argument must be a string");
		if (!e) return [];
		t = t || {};
		var u = 1, d = 1;
		function p(e) {
			var t = e.match(r);
			t && (u += t.length);
			var n = e.lastIndexOf("\n");
			d = ~n ? e.length - n : d + e.length;
		}
		function f() {
			var e = {
				line: u,
				column: d
			};
			return function(t) {
				return t.position = new h(e), y(i), t;
			};
		}
		function h(e) {
			this.start = e, this.end = {
				line: u,
				column: d
			}, this.source = t.source;
		}
		h.prototype.content = e;
		var m = [];
		function g(n) {
			var r = Error(t.source + ":" + u + ":" + d + ": " + n);
			if (r.reason = n, r.filename = t.source, r.line = u, r.column = d, r.source = e, t.silent) m.push(r);
			else throw r;
		}
		function y(t) {
			var n = t.exec(e);
			if (n) {
				var r = n[0];
				return p(r), e = e.slice(r.length), n;
			}
		}
		function v(e) {
			var t;
			for (e = e || []; t = x();) !1 !== t && e.push(t);
			return e;
		}
		function x() {
			var t = f();
			if ("/" == e.charAt(0) && "*" == e.charAt(1)) {
				for (var n = 2; "" != e.charAt(n) && ("*" != e.charAt(n) || "/" != e.charAt(n + 1));) ++n;
				if (n += 2, "" === e.charAt(n - 1)) return g("End of comment missing");
				var r = e.slice(2, n - 2);
				return d += 2, p(r), e = e.slice(n), d += 2, t({
					type: "comment",
					comment: r
				});
			}
		}
		y(i);
		var b, k = [];
		for (v(k); b = function() {
			var e = f(), t = y(l);
			if (t) {
				if (x(), !y(o)) return g("property missing ':'");
				var r = y(a), i = e({
					type: "declaration",
					property: c(t[0].replace(n, "")),
					value: r ? c(r[0].replace(n, "")) : ""
				});
				return y(s), i;
			}
		}();) !1 !== b && (k.push(b), v(k));
		return k;
	};
}), ld = n((e) => {
	var t = e && e.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	};
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = function(e, t) {
		var r = null;
		if (!e || "string" != typeof e) return r;
		var i = (0, n.default)(e), l = "function" == typeof t;
		return i.forEach(function(e) {
			if ("declaration" === e.type) {
				var n = e.property, i = e.value;
				l ? t(n, i, e) : i && ((r = r || {})[n] = i);
			}
		}), r;
	};
	var n = t(lc());
}), lp = n((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = /^--[a-zA-Z0-9_-]+$/, n = /-([a-z])/g, r = /^[^-]+$/, i = /^-(webkit|moz|ms|o|khtml)-/, l = /^-(ms)-/, o = function(e, t) {
		return t.toUpperCase();
	}, a = function(e, t) {
		return "".concat(t, "-");
	};
	e.camelCase = function(e, s) {
		var u;
		return (void 0 === s && (s = {}), !(u = e) || r.test(u) || t.test(u)) ? e : (e = e.toLowerCase(), (e = s.reactCompat ? e.replace(l, a) : e.replace(i, a)).replace(n, o));
	};
}), lf = n((e, t) => {
	var n = (e && e.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	})(ld()), r = lp();
	function i(e, t) {
		var i = {};
		return e && "string" == typeof e && (0, n.default)(e, function(e, n) {
			e && n && (i[(0, r.camelCase)(e, t)] = n);
		}), i;
	}
	i.default = i, t.exports = i;
});
let lh = lg("end"), lm = lg("start");
function lg(e) {
	return function(t) {
		let n = t && t.position && t.position[e] || {};
		if ("number" == typeof n.line && n.line > 0 && "number" == typeof n.column && n.column > 0) return {
			line: n.line,
			column: n.column,
			offset: "number" == typeof n.offset && n.offset > -1 ? n.offset : void 0
		};
	};
}
var ly = class extends Error {
	constructor(e, t, n) {
		super(), "string" == typeof t && (n = t, t = void 0);
		let r = "", i = {}, l = !1;
		if (t && (i = "line" in t && "column" in t || "start" in t && "end" in t ? { place: t } : "type" in t ? {
			ancestors: [t],
			place: t.position
		} : { ...t }), "string" == typeof e ? r = e : !i.cause && e && (l = !0, r = e.message, i.cause = e), !i.ruleId && !i.source && "string" == typeof n) {
			let e = n.indexOf(":");
			-1 === e ? i.ruleId = n : (i.source = n.slice(0, e), i.ruleId = n.slice(e + 1));
		}
		if (!i.place && i.ancestors && i.ancestors) {
			let e = i.ancestors[i.ancestors.length - 1];
			e && (i.place = e.position);
		}
		let o = i.place && "start" in i.place ? i.place.start : i.place;
		this.ancestors = i.ancestors || void 0, this.cause = i.cause || void 0, this.column = o ? o.column : void 0, this.fatal = void 0, this.file = "", this.message = r, this.line = o ? o.line : void 0, this.name = n0(i.place) || "1:1", this.place = i.place || void 0, this.reason = this.message, this.ruleId = i.ruleId || void 0, this.source = i.source || void 0, this.stack = l && i.cause && "string" == typeof i.cause.stack ? i.cause.stack : "", this.actual = void 0, this.expected = void 0, this.note = void 0, this.url = void 0;
	}
};
ly.prototype.file = "", ly.prototype.name = "", ly.prototype.reason = "", ly.prototype.message = "", ly.prototype.stack = "", ly.prototype.column = void 0, ly.prototype.line = void 0, ly.prototype.ancestors = void 0, ly.prototype.cause = void 0, ly.prototype.fatal = void 0, ly.prototype.place = void 0, ly.prototype.ruleId = void 0, ly.prototype.source = void 0;
var lv = t(lf()), lx = {}.hasOwnProperty, lb = /* @__PURE__ */ new Map(), lk = /[A-Z]/g, lC = new Set([
	"table",
	"tbody",
	"thead",
	"tfoot",
	"tr"
]), lw = new Set(["td", "th"]), lS = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function lA(e, t, n) {
	var r, i, l, o, a, s, u, c, d;
	let p, h, m, g, y, x, b, k, C;
	return "element" === t.type ? (r = e, i = t, l = n, p = r.schema, "svg" === i.tagName.toLowerCase() && "html" === p.space && (r.schema = lu), r.ancestors.push(i), h = l_(r, i.tagName, !1), m = function(e, t) {
		let n, r, i = {};
		for (r in t.properties) if ("children" !== r && lx.call(t.properties, r)) {
			let l = function(e, t, n) {
				let r = function(e, t) {
					let n = iV(t), r = t, i = iU;
					if (n in e.normal) return e.property[e.normal[n]];
					if (n.length > 4 && "data" === n.slice(0, 4) && ll.test(t)) {
						if ("-" === t.charAt(4)) {
							let e = t.slice(5).replace(li, la);
							r = "data" + e.charAt(0).toUpperCase() + e.slice(1);
						} else {
							let e = t.slice(4);
							if (!li.test(e)) {
								let n = e.replace(lr, lo);
								"-" !== n.charAt(0) && (n = "-" + n), t = "data" + n;
							}
						}
						i = i2;
					}
					return new i(r, t);
				}(e.schema, t);
				if (!(null == n || "number" == typeof n && Number.isNaN(n))) {
					var i;
					let t;
					if (Array.isArray(n) && (n = r.commaSeparated ? (t = {}, ("" === (i = n)[i.length - 1] ? [...i, ""] : i).join((t.padRight ? " " : "") + "," + (!1 === t.padLeft ? "" : " ")).trim()) : n.join(" ").trim()), "style" === r.property) {
						let t = "object" == typeof n ? n : function(e, t) {
							try {
								return (0, lv.default)(t, { reactCompat: !0 });
							} catch (n) {
								if (e.ignoreInvalidStyle) return {};
								let t = new ly("Cannot parse `style` attribute", {
									ancestors: e.ancestors,
									cause: n,
									ruleId: "style",
									source: "hast-util-to-jsx-runtime"
								});
								throw t.file = e.filePath || void 0, t.url = lS + "#cannot-parse-style-attribute", t;
							}
						}(e, String(n));
						return "css" === e.stylePropertyNameCase && (t = function(e) {
							let t, n = {};
							for (t in e) lx.call(e, t) && (n[function(e) {
								let t = e.replace(lk, lI);
								return "ms-" === t.slice(0, 3) && (t = "-" + t), t;
							}(t)] = e[t]);
							return n;
						}(t)), ["style", t];
					}
					return ["react" === e.elementAttributeNameCase && r.space ? ln[r.property] || r.property : r.attribute, n];
				}
			}(e, r, t.properties[r]);
			if (l) {
				let [r, o] = l;
				e.tableCellAlignToStyle && "align" === r && "string" == typeof o && lw.has(t.tagName) ? n = o : i[r] = o;
			}
		}
		return n && ((i.style || (i.style = {}))["css" === e.stylePropertyNameCase ? "text-align" : "textAlign"] = n), i;
	}(r, i), g = lL(r, i), lC.has(i.tagName) && (g = g.filter(function(e) {
		return "string" != typeof e || !("object" == typeof e ? "text" === e.type && iB(e.value) : iB(e));
	})), lT(r, m, h, i), lD(m, g), r.ancestors.pop(), r.schema = p, r.create(i, h, m, l)) : "mdxFlowExpression" === t.type || "mdxTextExpression" === t.type ? function(e, t) {
		if (t.data && t.data.estree && e.evaluater) {
			let n = t.data.estree.body[0];
			return n.type, e.evaluater.evaluateExpression(n.expression);
		}
		lE(e, t.position);
	}(e, t) : "mdxJsxFlowElement" === t.type || "mdxJsxTextElement" === t.type ? (o = e, a = t, s = n, y = o.schema, "svg" === a.name && "html" === y.space && (o.schema = lu), o.ancestors.push(a), x = null === a.name ? o.Fragment : l_(o, a.name, !0), b = function(e, t) {
		let n = {};
		for (let r of t.attributes) if ("mdxJsxExpressionAttribute" === r.type) if (r.data && r.data.estree && e.evaluater) {
			let t = r.data.estree.body[0];
			t.type;
			let i = t.expression;
			i.type;
			let l = i.properties[0];
			l.type, Object.assign(n, e.evaluater.evaluateExpression(l.argument));
		} else lE(e, t.position);
		else {
			let i, l = r.name;
			if (r.value && "object" == typeof r.value) if (r.value.data && r.value.data.estree && e.evaluater) {
				let t = r.value.data.estree.body[0];
				t.type, i = e.evaluater.evaluateExpression(t.expression);
			} else lE(e, t.position);
			else i = null === r.value || r.value;
			n[l] = i;
		}
		return n;
	}(o, a), k = lL(o, a), lT(o, b, x, a), lD(b, k), o.ancestors.pop(), o.schema = y, o.create(a, x, b, s)) : "mdxjsEsm" === t.type ? function(e, t) {
		if (t.data && t.data.estree && e.evaluater) return e.evaluater.evaluateProgram(t.data.estree);
		lE(e, t.position);
	}(e, t) : "root" === t.type ? (u = e, c = t, d = n, lD(C = {}, lL(u, c)), u.create(c, u.Fragment, C, d)) : "text" === t.type ? t.value : void 0;
}
function lT(e, t, n, r) {
	"string" != typeof n && n !== e.Fragment && e.passNode && (t.node = r);
}
function lD(e, t) {
	if (t.length > 0) {
		let n = t.length > 1 ? t : t[0];
		n && (e.children = n);
	}
}
function lL(e, t) {
	let n = [], r = -1, i = e.passKeys ? /* @__PURE__ */ new Map() : lb;
	for (; ++r < t.children.length;) {
		let l, o = t.children[r];
		if (e.passKeys) {
			let e = "element" === o.type ? o.tagName : "mdxJsxFlowElement" === o.type || "mdxJsxTextElement" === o.type ? o.name : void 0;
			if (e) {
				let t = i.get(e) || 0;
				l = e + "-" + t, i.set(e, t + 1);
			}
		}
		let a = lA(e, o, l);
		void 0 !== a && n.push(a);
	}
	return n;
}
function l_(e, t, n) {
	let r;
	if (n) if (t.includes(".")) {
		let e, n = t.split("."), i = -1;
		for (; ++i < n.length;) {
			let t = iR(n[i]) ? {
				type: "Identifier",
				name: n[i]
			} : {
				type: "Literal",
				value: n[i]
			};
			e = e ? {
				type: "MemberExpression",
				object: e,
				property: t,
				computed: !!(i && "Literal" === t.type),
				optional: !1
			} : t;
		}
		r = e;
	} else r = iR(t) && !/^[a-z]/.test(t) ? {
		type: "Identifier",
		name: t
	} : {
		type: "Literal",
		value: t
	};
	else r = {
		type: "Literal",
		value: t
	};
	if ("Literal" === r.type) {
		let t = r.value;
		return lx.call(e.components, t) ? e.components[t] : t;
	}
	if (e.evaluater) return e.evaluater.evaluateExpression(r);
	lE(e);
}
function lE(e, t) {
	let n = new ly("Cannot handle MDX estrees without `createEvaluater`", {
		ancestors: e.ancestors,
		place: t,
		ruleId: "mdx-estree",
		source: "hast-util-to-jsx-runtime"
	});
	throw n.file = e.filePath || void 0, n.url = lS + "#cannot-handle-mdx-estrees-without-createevaluater", n;
}
function lI(e) {
	return "-" + e.toLowerCase();
}
function lN(e, t) {
	let n = t.referenceType, r = "]";
	if ("collapsed" === n ? r += "[]" : "full" === n && (r += "[" + (t.label || t.identifier) + "]"), "imageReference" === t.type) return [{
		type: "text",
		value: "![" + t.alt + r
	}];
	let i = e.all(t), l = i[0];
	l && "text" === l.type ? l.value = "[" + l.value : i.unshift({
		type: "text",
		value: "["
	});
	let o = i[i.length - 1];
	return o && "text" === o.type ? o.value += r : i.push({
		type: "text",
		value: r
	}), i;
}
function lM(e) {
	let t = e.spread;
	return null == t ? e.children.length > 1 : t;
}
function lO(e, t, n) {
	let r = 0, i = e.length;
	if (t) {
		let t = e.codePointAt(r);
		for (; 9 === t || 32 === t;) r++, t = e.codePointAt(r);
	}
	if (n) {
		let t = e.codePointAt(i - 1);
		for (; 9 === t || 32 === t;) i--, t = e.codePointAt(i - 1);
	}
	return i > r ? e.slice(r, i) : "";
}
let lP = {
	blockquote: function(e, t) {
		let n = {
			type: "element",
			tagName: "blockquote",
			properties: {},
			children: e.wrap(e.all(t), !0)
		};
		return e.patch(t, n), e.applyData(t, n);
	},
	break: function(e, t) {
		let n = {
			type: "element",
			tagName: "br",
			properties: {},
			children: []
		};
		return e.patch(t, n), [e.applyData(t, n), {
			type: "text",
			value: "\n"
		}];
	},
	code: function(e, t) {
		let n = t.value ? t.value + "\n" : "", r = {};
		t.lang && (r.className = ["language-" + t.lang]);
		let i = {
			type: "element",
			tagName: "code",
			properties: r,
			children: [{
				type: "text",
				value: n
			}]
		};
		return t.meta && (i.data = { meta: t.meta }), e.patch(t, i), i = {
			type: "element",
			tagName: "pre",
			properties: {},
			children: [i = e.applyData(t, i)]
		}, e.patch(t, i), i;
	},
	delete: function(e, t) {
		let n = {
			type: "element",
			tagName: "del",
			properties: {},
			children: e.all(t)
		};
		return e.patch(t, n), e.applyData(t, n);
	},
	emphasis: function(e, t) {
		let n = {
			type: "element",
			tagName: "em",
			properties: {},
			children: e.all(t)
		};
		return e.patch(t, n), e.applyData(t, n);
	},
	footnoteReference: function(e, t) {
		let n, r = "string" == typeof e.options.clobberPrefix ? e.options.clobberPrefix : "user-content-", i = String(t.identifier).toUpperCase(), l = t2(i.toLowerCase()), o = e.footnoteOrder.indexOf(i), a = e.footnoteCounts.get(i);
		void 0 === a ? (a = 0, e.footnoteOrder.push(i), n = e.footnoteOrder.length) : n = o + 1, a += 1, e.footnoteCounts.set(i, a);
		let s = {
			type: "element",
			tagName: "a",
			properties: {
				href: "#" + r + "fn-" + l,
				id: r + "fnref-" + l + (a > 1 ? "-" + a : ""),
				dataFootnoteRef: !0,
				ariaDescribedBy: ["footnote-label"]
			},
			children: [{
				type: "text",
				value: String(n)
			}]
		};
		e.patch(t, s);
		let u = {
			type: "element",
			tagName: "sup",
			properties: {},
			children: [s]
		};
		return e.patch(t, u), e.applyData(t, u);
	},
	heading: function(e, t) {
		let n = {
			type: "element",
			tagName: "h" + t.depth,
			properties: {},
			children: e.all(t)
		};
		return e.patch(t, n), e.applyData(t, n);
	},
	html: function(e, t) {
		if (e.options.allowDangerousHtml) {
			let n = {
				type: "raw",
				value: t.value
			};
			return e.patch(t, n), e.applyData(t, n);
		}
	},
	imageReference: function(e, t) {
		let n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
		if (!r) return lN(e, t);
		let i = {
			src: t2(r.url || ""),
			alt: t.alt
		};
		null !== r.title && void 0 !== r.title && (i.title = r.title);
		let l = {
			type: "element",
			tagName: "img",
			properties: i,
			children: []
		};
		return e.patch(t, l), e.applyData(t, l);
	},
	image: function(e, t) {
		let n = { src: t2(t.url) };
		null !== t.alt && void 0 !== t.alt && (n.alt = t.alt), null !== t.title && void 0 !== t.title && (n.title = t.title);
		let r = {
			type: "element",
			tagName: "img",
			properties: n,
			children: []
		};
		return e.patch(t, r), e.applyData(t, r);
	},
	inlineCode: function(e, t) {
		let n = {
			type: "text",
			value: t.value.replace(/\r?\n|\r/g, " ")
		};
		e.patch(t, n);
		let r = {
			type: "element",
			tagName: "code",
			properties: {},
			children: [n]
		};
		return e.patch(t, r), e.applyData(t, r);
	},
	linkReference: function(e, t) {
		let n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
		if (!r) return lN(e, t);
		let i = { href: t2(r.url || "") };
		null !== r.title && void 0 !== r.title && (i.title = r.title);
		let l = {
			type: "element",
			tagName: "a",
			properties: i,
			children: e.all(t)
		};
		return e.patch(t, l), e.applyData(t, l);
	},
	link: function(e, t) {
		let n = { href: t2(t.url) };
		null !== t.title && void 0 !== t.title && (n.title = t.title);
		let r = {
			type: "element",
			tagName: "a",
			properties: n,
			children: e.all(t)
		};
		return e.patch(t, r), e.applyData(t, r);
	},
	listItem: function(e, t, n) {
		let r = e.all(t), i = n ? function(e) {
			let t = !1;
			if ("list" === e.type) {
				t = e.spread || !1;
				let n = e.children, r = -1;
				for (; !t && ++r < n.length;) t = lM(n[r]);
			}
			return t;
		}(n) : lM(t), l = {}, o = [];
		if ("boolean" == typeof t.checked) {
			let e, n = r[0];
			n && "element" === n.type && "p" === n.tagName ? e = n : (e = {
				type: "element",
				tagName: "p",
				properties: {},
				children: []
			}, r.unshift(e)), e.children.length > 0 && e.children.unshift({
				type: "text",
				value: " "
			}), e.children.unshift({
				type: "element",
				tagName: "input",
				properties: {
					type: "checkbox",
					checked: t.checked,
					disabled: !0
				},
				children: []
			}), l.className = ["task-list-item"];
		}
		let a = -1;
		for (; ++a < r.length;) {
			let e = r[a];
			(i || 0 !== a || "element" !== e.type || "p" !== e.tagName) && o.push({
				type: "text",
				value: "\n"
			}), "element" !== e.type || "p" !== e.tagName || i ? o.push(e) : o.push(...e.children);
		}
		let s = r[r.length - 1];
		s && (i || "element" !== s.type || "p" !== s.tagName) && o.push({
			type: "text",
			value: "\n"
		});
		let u = {
			type: "element",
			tagName: "li",
			properties: l,
			children: o
		};
		return e.patch(t, u), e.applyData(t, u);
	},
	list: function(e, t) {
		let n = {}, r = e.all(t), i = -1;
		for ("number" == typeof t.start && 1 !== t.start && (n.start = t.start); ++i < r.length;) {
			let e = r[i];
			if ("element" === e.type && "li" === e.tagName && e.properties && Array.isArray(e.properties.className) && e.properties.className.includes("task-list-item")) {
				n.className = ["contains-task-list"];
				break;
			}
		}
		let l = {
			type: "element",
			tagName: t.ordered ? "ol" : "ul",
			properties: n,
			children: e.wrap(r, !0)
		};
		return e.patch(t, l), e.applyData(t, l);
	},
	paragraph: function(e, t) {
		let n = {
			type: "element",
			tagName: "p",
			properties: {},
			children: e.all(t)
		};
		return e.patch(t, n), e.applyData(t, n);
	},
	root: function(e, t) {
		let n = {
			type: "root",
			children: e.wrap(e.all(t))
		};
		return e.patch(t, n), e.applyData(t, n);
	},
	strong: function(e, t) {
		let n = {
			type: "element",
			tagName: "strong",
			properties: {},
			children: e.all(t)
		};
		return e.patch(t, n), e.applyData(t, n);
	},
	table: function(e, t) {
		let n = e.all(t), r = n.shift(), i = [];
		if (r) {
			let n = {
				type: "element",
				tagName: "thead",
				properties: {},
				children: e.wrap([r], !0)
			};
			e.patch(t.children[0], n), i.push(n);
		}
		if (n.length > 0) {
			let r = {
				type: "element",
				tagName: "tbody",
				properties: {},
				children: e.wrap(n, !0)
			}, l = lm(t.children[1]), o = lh(t.children[t.children.length - 1]);
			l && o && (r.position = {
				start: l,
				end: o
			}), i.push(r);
		}
		let l = {
			type: "element",
			tagName: "table",
			properties: {},
			children: e.wrap(i, !0)
		};
		return e.patch(t, l), e.applyData(t, l);
	},
	tableCell: function(e, t) {
		let n = {
			type: "element",
			tagName: "td",
			properties: {},
			children: e.all(t)
		};
		return e.patch(t, n), e.applyData(t, n);
	},
	tableRow: function(e, t, n) {
		let r = n ? n.children : void 0, i = (r ? r.indexOf(t) : 1) === 0 ? "th" : "td", l = n && "table" === n.type ? n.align : void 0, o = l ? l.length : t.children.length, a = -1, s = [];
		for (; ++a < o;) {
			let n = t.children[a], r = {}, o = l ? l[a] : void 0;
			o && (r.align = o);
			let u = {
				type: "element",
				tagName: i,
				properties: r,
				children: []
			};
			n && (u.children = e.all(n), e.patch(n, u), u = e.applyData(n, u)), s.push(u);
		}
		let u = {
			type: "element",
			tagName: "tr",
			properties: {},
			children: e.wrap(s, !0)
		};
		return e.patch(t, u), e.applyData(t, u);
	},
	text: function(e, t) {
		let n = {
			type: "text",
			value: function(e) {
				let t = String(e), n = /\r?\n|\r/g, r = n.exec(t), i = 0, l = [];
				for (; r;) l.push(lO(t.slice(i, r.index), i > 0, !0), r[0]), i = r.index + r[0].length, r = n.exec(t);
				return l.push(lO(t.slice(i), i > 0, !1)), l.join("");
			}(String(t.value))
		};
		return e.patch(t, n), e.applyData(t, n);
	},
	thematicBreak: function(e, t) {
		let n = {
			type: "element",
			tagName: "hr",
			properties: {},
			children: []
		};
		return e.patch(t, n), e.applyData(t, n);
	},
	toml: lz,
	yaml: lz,
	definition: lz,
	footnoteDefinition: lz
};
function lz() {}
var lF = "object" == typeof self ? self : globalThis;
let lR = (e) => {
	var t;
	let n, r;
	return (t = /* @__PURE__ */ new Map(), n = (e, n) => (t.set(n, e), e), r = (i) => {
		if (t.has(i)) return t.get(i);
		let [l, o] = e[i];
		switch (l) {
			case 0:
			case -1: return n(o, i);
			case 1: {
				let e = n([], i);
				for (let t of o) e.push(r(t));
				return e;
			}
			case 2: {
				let e = n({}, i);
				for (let [t, n] of o) e[r(t)] = r(n);
				return e;
			}
			case 3: return n(new Date(o), i);
			case 4: {
				let { source: e, flags: t } = o;
				return n(new RegExp(e, t), i);
			}
			case 5: {
				let e = n(/* @__PURE__ */ new Map(), i);
				for (let [t, n] of o) e.set(r(t), r(n));
				return e;
			}
			case 6: {
				let e = n(/* @__PURE__ */ new Set(), i);
				for (let t of o) e.add(r(t));
				return e;
			}
			case 7: {
				let { name: e, message: t } = o;
				return n(new lF[e](t), i);
			}
			case 8: return n(BigInt(o), i);
			case "BigInt": return n(Object(BigInt(o)), i);
			case "ArrayBuffer": return n(new Uint8Array(o).buffer, o);
			case "DataView": {
				let { buffer: e } = new Uint8Array(o);
				return n(new DataView(e), o);
			}
		}
		return n(new lF[l](o), i);
	})(0);
};
var { toString: l$ } = {}, { keys: lB } = Object, lj = (e) => {
	let t = typeof e;
	if ("object" !== t || !e) return [0, t];
	let n = l$.call(e).slice(8, -1);
	switch (n) {
		case "Array": return [1, ""];
		case "Object": return [2, ""];
		case "Date": return [3, ""];
		case "RegExp": return [4, ""];
		case "Map": return [5, ""];
		case "Set": return [6, ""];
		case "DataView": return [1, n];
	}
	return n.includes("Array") ? [1, n] : n.includes("Error") ? [7, n] : [2, n];
}, lH = ([e, t]) => 0 === e && ("function" === t || "symbol" === t);
let lV = (e, { json: t, lossy: n } = {}) => {
	var r, i, l;
	let o, a, s = [];
	return (r = !(t || n), i = !!t, l = /* @__PURE__ */ new Map(), o = (e, t) => {
		let n = s.push(e) - 1;
		return l.set(t, n), n;
	}, a = (e) => {
		if (l.has(e)) return l.get(e);
		let [t, n] = lj(e);
		switch (t) {
			case 0: {
				let i = e;
				switch (n) {
					case "bigint":
						t = 8, i = e.toString();
						break;
					case "function":
					case "symbol":
						if (r) throw TypeError("unable to serialize " + n);
						i = null;
						break;
					case "undefined": return o([-1], e);
				}
				return o([t, i], e);
			}
			case 1: {
				if (n) {
					let t = e;
					return "DataView" === n ? t = new Uint8Array(e.buffer) : "ArrayBuffer" === n && (t = new Uint8Array(e)), o([n, [...t]], e);
				}
				let r = [], i = o([t, r], e);
				for (let t of e) r.push(a(t));
				return i;
			}
			case 2: {
				if (n) switch (n) {
					case "BigInt": return o([n, e.toString()], e);
					case "Boolean":
					case "Number":
					case "String": return o([n, e.valueOf()], e);
				}
				if (i && "toJSON" in e) return a(e.toJSON());
				let l = [], s = o([t, l], e);
				for (let t of lB(e)) (r || !lH(lj(e[t]))) && l.push([a(t), a(e[t])]);
				return s;
			}
			case 3: return o([t, e.toISOString()], e);
			case 4: {
				let { source: n, flags: r } = e;
				return o([t, {
					source: n,
					flags: r
				}], e);
			}
			case 5: {
				let n = [], i = o([t, n], e);
				for (let [t, i] of e) (r || !(lH(lj(t)) || lH(lj(i)))) && n.push([a(t), a(i)]);
				return i;
			}
			case 6: {
				let n = [], i = o([t, n], e);
				for (let t of e) (r || !lH(lj(t))) && n.push(a(t));
				return i;
			}
		}
		let { message: s } = e;
		return o([t, {
			name: n,
			message: s
		}], e);
	})(e), s;
};
var lU = "function" == typeof structuredClone ? (e, t) => t && ("json" in t || "lossy" in t) ? lR(lV(e, t)) : structuredClone(e) : (e, t) => lR(lV(e, t));
function lq(e, t) {
	let n = [{
		type: "text",
		value: "↩"
	}];
	return t > 1 && n.push({
		type: "element",
		tagName: "sup",
		properties: {},
		children: [{
			type: "text",
			value: String(t)
		}]
	}), n;
}
function lW(e, t) {
	return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "");
}
var lG = {}.hasOwnProperty, lJ = {};
function lX(e, t) {
	e.position && (t.position = function(e) {
		let t = lm(e), n = lh(e);
		if (t && n) return {
			start: t,
			end: n
		};
	}(e));
}
function lK(e, t) {
	let n = t;
	if (e && e.data) {
		let t = e.data.hName, r = e.data.hChildren, i = e.data.hProperties;
		"string" == typeof t && ("element" === n.type ? n.tagName = t : n = {
			type: "element",
			tagName: t,
			properties: {},
			children: "children" in n ? n.children : [n]
		}), "element" === n.type && i && Object.assign(n.properties, lU(i)), "children" in n && n.children && null != r && (n.children = r);
	}
	return n;
}
function lY(e, t) {
	let n = [], r = -1;
	for (t && n.push({
		type: "text",
		value: "\n"
	}); ++r < e.length;) r && n.push({
		type: "text",
		value: "\n"
	}), n.push(e[r]);
	return t && e.length > 0 && n.push({
		type: "text",
		value: "\n"
	}), n;
}
function lQ(e) {
	let t = 0, n = e.charCodeAt(t);
	for (; 9 === n || 32 === n;) t++, n = e.charCodeAt(t);
	return e.slice(t);
}
var lZ = S((e, {}) => L(e.text$, ey(), R((t) => {
	var n, r, i, l, a;
	let s, u, c, d, p, f, h, m, g, y, v, x, b, k, C, w = ("string" != typeof (n = {
		extensions: [tB([
			{ text: rj },
			{
				document: { 91: {
					name: "gfmFootnoteDefinition",
					tokenize: rQ,
					continuation: { tokenize: rZ },
					exit: r1
				} },
				text: {
					91: {
						name: "gfmFootnoteCall",
						tokenize: rY
					},
					93: {
						name: "gfmPotentialFootnoteCall",
						add: "after",
						tokenize: rX,
						resolveTo: rK
					}
				}
			},
			(s = void 0, u = {
				name: "strikethrough",
				tokenize: function(e, t, n) {
					let r = this.previous, i = this.events, l = 0;
					return function(o) {
						return 126 === r && "characterEscape" !== i[i.length - 1][1].type ? n(o) : (e.enter("strikethroughSequenceTemporary"), function i(o) {
							let a = t6(r);
							if (126 === o) return l > 1 ? n(o) : (e.consume(o), l++, i);
							if (l < 2 && !s) return n(o);
							let u = e.exit("strikethroughSequenceTemporary"), c = t6(o);
							return u._open = !c || 2 === c && !!a, u._close = !a || 2 === a && !!c, t(o);
						}(o));
					};
				},
				resolveAll: function(e, t) {
					let n = -1;
					for (; ++n < e.length;) if ("enter" === e[n][0] && "strikethroughSequenceTemporary" === e[n][1].type && e[n][1]._close) {
						let r = n;
						for (; r--;) if ("exit" === e[r][0] && "strikethroughSequenceTemporary" === e[r][1].type && e[r][1]._open && e[n][1].end.offset - e[n][1].start.offset == e[r][1].end.offset - e[r][1].start.offset) {
							e[n][1].type = "strikethroughSequence", e[r][1].type = "strikethroughSequence";
							let i = {
								type: "strikethrough",
								start: Object.assign({}, e[r][1].start),
								end: Object.assign({}, e[n][1].end)
							}, l = {
								type: "strikethroughText",
								start: Object.assign({}, e[r][1].end),
								end: Object.assign({}, e[n][1].start)
							}, o = [
								[
									"enter",
									i,
									t
								],
								[
									"enter",
									e[r][1],
									t
								],
								[
									"exit",
									e[r][1],
									t
								],
								[
									"enter",
									l,
									t
								]
							], a = t.parser.constructs.insideSpan.null;
							a && tF(o, o.length, 0, t8(a, e.slice(r + 1, n), t)), tF(o, o.length, 0, [
								[
									"exit",
									l,
									t
								],
								[
									"enter",
									e[n][1],
									t
								],
								[
									"exit",
									e[n][1],
									t
								],
								[
									"exit",
									i,
									t
								]
							]), tF(e, r - 1, n - r + 3, o), n = r + o.length - 2;
							break;
						}
					}
					for (n = -1; ++n < e.length;) "strikethroughSequenceTemporary" === e[n][1].type && (e[n][1].type = "data");
					return e;
				}
			}, s ??= !0, {
				text: { 126: u },
				insideSpan: { null: [u] },
				attentionMarkers: { null: [126] }
			}),
			{ flow: { null: {
				name: "table",
				tokenize: r2,
				resolveAll: r4
			} } },
			{ text: { 91: r6 } }
		]), {
			text: { 58: ic },
			flow: { 58: [ir, ia] }
		}],
		mdastExtensions: [[
			{
				transforms: [rc],
				enter: {
					literalAutolink: ri,
					literalAutolinkEmail: rl,
					literalAutolinkHttp: rl,
					literalAutolinkWww: rl
				},
				exit: {
					literalAutolink: ru,
					literalAutolinkEmail: rs,
					literalAutolinkHttp: ro,
					literalAutolinkWww: ra
				}
			},
			{
				enter: {
					gfmFootnoteCallString: rh,
					gfmFootnoteCall: rm,
					gfmFootnoteDefinitionLabelString: rg,
					gfmFootnoteDefinition: ry
				},
				exit: {
					gfmFootnoteCallString: rv,
					gfmFootnoteCall: rx,
					gfmFootnoteDefinitionLabelString: rb,
					gfmFootnoteDefinition: rk
				}
			},
			{
				canContainEols: ["delete"],
				enter: { strikethrough: rC },
				exit: { strikethrough: rw }
			},
			{
				enter: {
					table: rS,
					tableData: rL,
					tableHeader: rL,
					tableRow: rT
				},
				exit: {
					codeText: r_,
					table: rA,
					tableData: rD,
					tableHeader: rD,
					tableRow: rD
				}
			},
			{ exit: {
				taskListCheckValueChecked: rI,
				taskListCheckValueUnchecked: rI,
				paragraph: rN
			} }
		], {
			canContainEols: ["textDirective"],
			enter: {
				directiveContainer: ik,
				directiveContainerAttributes: iL,
				directiveContainerLabel: iT,
				directiveLeaf: iC,
				directiveLeafAttributes: iL,
				directiveText: iw,
				directiveTextAttributes: iL
			},
			exit: {
				directiveContainer: iO,
				directiveContainerAttributeClassValue: iE,
				directiveContainerAttributeIdValue: i_,
				directiveContainerAttributeName: iN,
				directiveContainerAttributeValue: iI,
				directiveContainerAttributes: iM,
				directiveContainerLabel: iD,
				directiveContainerName: iA,
				directiveLeaf: iO,
				directiveLeafAttributeClassValue: iE,
				directiveLeafAttributeIdValue: i_,
				directiveLeafAttributeName: iN,
				directiveLeafAttributeValue: iI,
				directiveLeafAttributes: iM,
				directiveLeafName: iA,
				directiveText: iO,
				directiveTextAttributeClassValue: iE,
				directiveTextAttributeIdValue: i_,
				directiveTextAttributeName: iN,
				directiveTextAttributeValue: iI,
				directiveTextAttributes: iM,
				directiveTextName: iA
			}
		}]
	}) && (r = n, n = void 0), l = i = (function(e) {
		let t = {
			transforms: [],
			canContainEols: [
				"emphasis",
				"fragment",
				"heading",
				"paragraph",
				"strong"
			],
			enter: {
				autolink: r(y),
				autolinkProtocol: u,
				autolinkEmail: u,
				atxHeading: r(h),
				blockQuote: r(function() {
					return {
						type: "blockquote",
						children: []
					};
				}),
				characterEscape: u,
				characterReference: u,
				codeFenced: r(f),
				codeFencedFenceInfo: i,
				codeFencedFenceMeta: i,
				codeIndented: r(f, i),
				codeText: r(function() {
					return {
						type: "inlineCode",
						value: ""
					};
				}, i),
				codeTextData: u,
				data: u,
				codeFlowValue: u,
				definition: r(function() {
					return {
						type: "definition",
						identifier: "",
						label: null,
						title: null,
						url: ""
					};
				}),
				definitionDestinationString: i,
				definitionLabelString: i,
				definitionTitleString: i,
				emphasis: r(function() {
					return {
						type: "emphasis",
						children: []
					};
				}),
				hardBreakEscape: r(m),
				hardBreakTrailing: r(m),
				htmlFlow: r(g, i),
				htmlFlowData: u,
				htmlText: r(g, i),
				htmlTextData: u,
				image: r(function() {
					return {
						type: "image",
						title: null,
						url: "",
						alt: null
					};
				}),
				label: i,
				link: r(y),
				listItem: r(function(e) {
					return {
						type: "listItem",
						spread: e._spread,
						checked: null,
						children: []
					};
				}),
				listItemValue: function(e) {
					this.data.expectingFirstListItemValue && (this.stack[this.stack.length - 2].start = Number.parseInt(this.sliceSerialize(e), 10), this.data.expectingFirstListItemValue = void 0);
				},
				listOrdered: r(v, function() {
					this.data.expectingFirstListItemValue = !0;
				}),
				listUnordered: r(v),
				paragraph: r(function() {
					return {
						type: "paragraph",
						children: []
					};
				}),
				reference: function() {
					this.data.referenceType = "collapsed";
				},
				referenceString: i,
				resourceDestinationString: i,
				resourceTitleString: i,
				setextHeading: r(h),
				strong: r(function() {
					return {
						type: "strong",
						children: []
					};
				}),
				thematicBreak: r(function() {
					return { type: "thematicBreak" };
				})
			},
			exit: {
				atxHeading: o(),
				atxHeadingSequence: function(e) {
					let t = this.stack[this.stack.length - 1];
					t.depth || (t.depth = this.sliceSerialize(e).length);
				},
				autolink: o(),
				autolinkEmail: function(e) {
					c.call(this, e), this.stack[this.stack.length - 1].url = "mailto:" + this.sliceSerialize(e);
				},
				autolinkProtocol: function(e) {
					c.call(this, e), this.stack[this.stack.length - 1].url = this.sliceSerialize(e);
				},
				blockQuote: o(),
				characterEscapeValue: c,
				characterReferenceMarkerHexadecimal: p,
				characterReferenceMarkerNumeric: p,
				characterReferenceValue: function(e) {
					let t, n = this.sliceSerialize(e), r = this.data.characterReferenceType;
					r ? (t = tj(n, "characterReferenceMarkerNumeric" === r ? 10 : 16), this.data.characterReferenceType = void 0) : t = tz(n);
					let i = this.stack[this.stack.length - 1];
					i.value += t;
				},
				characterReference: function(e) {
					this.stack.pop().position.end = n9(e.end);
				},
				codeFenced: o(function() {
					let e = this.resume();
					this.stack[this.stack.length - 1].value = e.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
				}),
				codeFencedFence: function() {
					this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = !0);
				},
				codeFencedFenceInfo: function() {
					let e = this.resume();
					this.stack[this.stack.length - 1].lang = e;
				},
				codeFencedFenceMeta: function() {
					let e = this.resume();
					this.stack[this.stack.length - 1].meta = e;
				},
				codeFlowValue: c,
				codeIndented: o(function() {
					let e = this.resume();
					this.stack[this.stack.length - 1].value = e.replace(/(\r?\n|\r)$/g, "");
				}),
				codeText: o(function() {
					let e = this.resume();
					this.stack[this.stack.length - 1].value = e;
				}),
				codeTextData: c,
				data: c,
				definition: o(),
				definitionDestinationString: function() {
					let e = this.resume();
					this.stack[this.stack.length - 1].url = e;
				},
				definitionLabelString: function(e) {
					let t = this.resume(), n = this.stack[this.stack.length - 1];
					n.label = t, n.identifier = tH(this.sliceSerialize(e)).toLowerCase();
				},
				definitionTitleString: function() {
					let e = this.resume();
					this.stack[this.stack.length - 1].title = e;
				},
				emphasis: o(),
				hardBreakEscape: o(d),
				hardBreakTrailing: o(d),
				htmlFlow: o(function() {
					let e = this.resume();
					this.stack[this.stack.length - 1].value = e;
				}),
				htmlFlowData: c,
				htmlText: o(function() {
					let e = this.resume();
					this.stack[this.stack.length - 1].value = e;
				}),
				htmlTextData: c,
				image: o(function() {
					let e = this.stack[this.stack.length - 1];
					if (this.data.inReference) {
						let t = this.data.referenceType || "shortcut";
						e.type += "Reference", e.referenceType = t, delete e.url, delete e.title;
					} else delete e.identifier, delete e.label;
					this.data.referenceType = void 0;
				}),
				label: function() {
					let e = this.stack[this.stack.length - 1], t = this.resume(), n = this.stack[this.stack.length - 1];
					this.data.inReference = !0, "link" === n.type ? n.children = e.children : n.alt = t;
				},
				labelText: function(e) {
					let t = this.sliceSerialize(e), n = this.stack[this.stack.length - 2];
					n.label = t.replace(nZ, n1), n.identifier = tH(t).toLowerCase();
				},
				lineEnding: function(e) {
					let n = this.stack[this.stack.length - 1];
					if (this.data.atHardBreak) {
						n.children[n.children.length - 1].position.end = n9(e.end), this.data.atHardBreak = void 0;
						return;
					}
					!this.data.setextHeadingSlurpLineEnding && t.canContainEols.includes(n.type) && (u.call(this, e), c.call(this, e));
				},
				link: o(function() {
					let e = this.stack[this.stack.length - 1];
					if (this.data.inReference) {
						let t = this.data.referenceType || "shortcut";
						e.type += "Reference", e.referenceType = t, delete e.url, delete e.title;
					} else delete e.identifier, delete e.label;
					this.data.referenceType = void 0;
				}),
				listItem: o(),
				listOrdered: o(),
				listUnordered: o(),
				paragraph: o(),
				referenceString: function(e) {
					let t = this.resume(), n = this.stack[this.stack.length - 1];
					n.label = t, n.identifier = tH(this.sliceSerialize(e)).toLowerCase(), this.data.referenceType = "full";
				},
				resourceDestinationString: function() {
					let e = this.resume();
					this.stack[this.stack.length - 1].url = e;
				},
				resourceTitleString: function() {
					let e = this.resume();
					this.stack[this.stack.length - 1].title = e;
				},
				resource: function() {
					this.data.inReference = void 0;
				},
				setextHeading: o(function() {
					this.data.setextHeadingSlurpLineEnding = void 0;
				}),
				setextHeadingLineSequence: function(e) {
					this.stack[this.stack.length - 1].depth = 61 === this.sliceSerialize(e).codePointAt(0) ? 1 : 2;
				},
				setextHeadingText: function() {
					this.data.setextHeadingSlurpLineEnding = !0;
				},
				strong: o(),
				thematicBreak: o()
			}
		};
		(function e(t, n) {
			let r = -1;
			for (; ++r < n.length;) {
				let i = n[r];
				Array.isArray(i) ? e(t, i) : function(e, t) {
					let n;
					for (n in t) if (n5.call(t, n)) switch (n) {
						case "canContainEols": {
							let r = t[n];
							r && e[n].push(...r);
							break;
						}
						case "transforms": {
							let r = t[n];
							r && e[n].push(...r);
							break;
						}
						case "enter":
						case "exit": {
							let r = t[n];
							r && Object.assign(e[n], r);
						}
					}
				}(t, i);
			}
		})(t, (e || {}).mdastExtensions || []);
		let n = {};
		return function(e) {
			let r = {
				type: "root",
				children: []
			}, o = {
				stack: [r],
				tokenStack: [],
				config: t,
				enter: l,
				exit: a,
				buffer: i,
				resume: s,
				data: n
			}, u = [], c = -1;
			for (; ++c < e.length;) ("listOrdered" === e[c][1].type || "listUnordered" === e[c][1].type) && ("enter" === e[c][0] ? u.push(c) : c = function(e, t, n) {
				let r, i, l, o, a = t - 1, s = -1, u = !1;
				for (; ++a <= n;) {
					let t = e[a];
					switch (t[1].type) {
						case "listUnordered":
						case "listOrdered":
						case "blockQuote":
							"enter" === t[0] ? s++ : s--, o = void 0;
							break;
						case "lineEndingBlank":
							"enter" === t[0] && (!r || o || s || l || (l = a), o = void 0);
							break;
						case "linePrefix":
						case "listItemValue":
						case "listItemMarker":
						case "listItemPrefix":
						case "listItemPrefixWhitespace": break;
						default: o = void 0;
					}
					if (!s && "enter" === t[0] && "listItemPrefix" === t[1].type || -1 === s && "exit" === t[0] && ("listUnordered" === t[1].type || "listOrdered" === t[1].type)) {
						if (r) {
							let o = a;
							for (i = void 0; o--;) {
								let t = e[o];
								if ("lineEnding" === t[1].type || "lineEndingBlank" === t[1].type) {
									if ("exit" === t[0]) continue;
									i && (e[i][1].type = "lineEndingBlank", u = !0), t[1].type = "lineEnding", i = o;
								} else if ("linePrefix" === t[1].type || "blockQuotePrefix" === t[1].type || "blockQuotePrefixWhitespace" === t[1].type || "blockQuoteMarker" === t[1].type || "listItemIndent" === t[1].type);
								else break;
							}
							l && (!i || l < i) && (r._spread = !0), r.end = Object.assign({}, i ? e[i][1].start : t[1].end), e.splice(i || a, 0, [
								"exit",
								r,
								t[2]
							]), a++, n++;
						}
						if ("listItemPrefix" === t[1].type) {
							let i = {
								type: "listItem",
								_spread: !1,
								start: Object.assign({}, t[1].start),
								end: void 0
							};
							r = i, e.splice(a, 0, [
								"enter",
								i,
								t[2]
							]), a++, n++, l = void 0, o = !0;
						}
					}
				}
				return e[t][1]._spread = u, n;
			}(e, u.pop(), c));
			for (c = -1; ++c < e.length;) {
				let n = t[e[c][0]];
				n5.call(n, e[c][1].type) && n[e[c][1].type].call(Object.assign({ sliceSerialize: e[c][2].sliceSerialize }, o), e[c][1]);
			}
			if (o.tokenStack.length > 0) {
				let e = o.tokenStack[o.tokenStack.length - 1];
				(e[1] || n6).call(o, void 0, e[0]);
			}
			for (r.position = {
				start: n9(e.length > 0 ? e[0][1].start : {
					line: 1,
					column: 1,
					offset: 0
				}),
				end: n9(e.length > 0 ? e[e.length - 2][1].end : {
					line: 1,
					column: 1,
					offset: 0
				})
			}, c = -1; ++c < t.transforms.length;) r = t.transforms[c](r) || r;
			return r;
		};
		function r(e, t) {
			return function(n) {
				l.call(this, e(n), n), t && t.call(this, n);
			};
		}
		function i() {
			this.stack.push({
				type: "fragment",
				children: []
			});
		}
		function l(e, t, n) {
			this.stack[this.stack.length - 1].children.push(e), this.stack.push(e), this.tokenStack.push([t, n || void 0]), e.position = {
				start: n9(t.start),
				end: void 0
			};
		}
		function o(e) {
			return function(t) {
				e && e.call(this, t), a.call(this, t);
			};
		}
		function a(e, t) {
			let n = this.stack.pop(), r = this.tokenStack.pop();
			if (r) r[0].type !== e.type && (t ? t.call(this, e, r[0]) : (r[1] || n6).call(this, e, r[0]));
			else throw Error("Cannot close `" + e.type + "` (" + n0({
				start: e.start,
				end: e.end
			}) + "): it’s not open");
			n.position.end = n9(e.end);
		}
		function s() {
			var e;
			return e = this.stack.pop(), tM(e, "boolean" != typeof tN.includeImageAlt || tN.includeImageAlt, "boolean" != typeof tN.includeHtml || tN.includeHtml);
		}
		function u(e) {
			let t = this.stack[this.stack.length - 1].children, n = t[t.length - 1];
			n && "text" === n.type || ((n = {
				type: "text",
				value: ""
			}).position = {
				start: n9(e.start),
				end: void 0
			}, t.push(n)), this.stack.push(n);
		}
		function c(e) {
			let t = this.stack.pop();
			t.value += this.sliceSerialize(e), t.position.end = n9(e.end);
		}
		function d() {
			this.data.atHardBreak = !0;
		}
		function p(e) {
			this.data.characterReferenceType = e.type;
		}
		function f() {
			return {
				type: "code",
				lang: null,
				meta: null,
				value: ""
			};
		}
		function h() {
			return {
				type: "heading",
				depth: 0,
				children: []
			};
		}
		function m() {
			return { type: "break" };
		}
		function g() {
			return {
				type: "html",
				value: ""
			};
		}
		function y() {
			return {
				type: "link",
				title: null,
				url: "",
				children: []
			};
		}
		function v(e) {
			return {
				type: "list",
				ordered: "listOrdered" === e.type,
				start: null,
				spread: e._spread,
				children: []
			};
		}
	})(r)(function(e) {
		for (; !nd(e););
		return e;
	}((function(e) {
		let t = {
			constructs: tB([nH, ...(e || {}).extensions || []]),
			content: n(t3),
			defined: [],
			document: n(t5),
			flow: n(nP),
			lazy: {},
			string: n(nF),
			text: n(nR)
		};
		return t;
		function n(e) {
			return function(n) {
				return function(e, t, n) {
					let r = {
						_bufferIndex: -1,
						_index: 0,
						line: n && n.line || 1,
						column: n && n.column || 1,
						offset: n && n.offset || 0
					}, i = {}, l = [], o = [], a = [], s = {
						attempt: h(function(e, t) {
							m(e, t.from);
						}),
						check: h(f),
						consume: function(e) {
							tK(e) ? (r.line++, r.column = 1, r.offset += -3 === e ? 2 : 1, g()) : -1 !== e && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === o[r._index].length && (r._bufferIndex = -1, r._index++)), u.previous = e;
						},
						enter: function(e, t) {
							let n = t || {};
							return n.type = e, n.start = p(), u.events.push([
								"enter",
								n,
								u
							]), a.push(n), n;
						},
						exit: function(e) {
							let t = a.pop();
							return t.end = p(), u.events.push([
								"exit",
								t,
								u
							]), t;
						},
						interrupt: h(f, { interrupt: !0 })
					}, u = {
						code: null,
						containerState: {},
						defineSkip: function(e) {
							i[e.line] = e.column, g();
						},
						events: [],
						now: p,
						parser: e,
						previous: null,
						sliceSerialize: function(e, t) {
							return function(e, t) {
								let n, r = -1, i = [];
								for (; ++r < e.length;) {
									let l, o = e[r];
									if ("string" == typeof o) l = o;
									else switch (o) {
										case -5:
											l = "\r";
											break;
										case -4:
											l = "\n";
											break;
										case -3:
											l = "\r\n";
											break;
										case -2:
											l = t ? " " : "	";
											break;
										case -1:
											if (!t && n) continue;
											l = " ";
											break;
										default: l = String.fromCharCode(o);
									}
									n = -2 === o, i.push(l);
								}
								return i.join("");
							}(d(e), t);
						},
						sliceStream: d,
						write: function(e) {
							return (o = tR(o, e), function() {
								let e;
								for (; r._index < o.length;) {
									let n = o[r._index];
									if ("string" == typeof n) for (e = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === e && r._bufferIndex < n.length;) {
										var t = n.charCodeAt(r._bufferIndex);
										c = c(t);
									}
									else c = c(n);
								}
							}(), null !== o[o.length - 1]) ? [] : (m(t, 0), u.events = t8(l, u.events, u), u.events);
						}
					}, c = t.tokenize.call(u, s);
					return t.resolveAll && l.push(t), u;
					function d(e) {
						return function(e, t) {
							let n, r = t.start._index, i = t.start._bufferIndex, l = t.end._index, o = t.end._bufferIndex;
							if (r === l) n = [e[r].slice(i, o)];
							else {
								if (n = e.slice(r, l), i > -1) {
									let e = n[0];
									"string" == typeof e ? n[0] = e.slice(i) : n.shift();
								}
								o > 0 && n.push(e[l].slice(0, o));
							}
							return n;
						}(o, e);
					}
					function p() {
						let { _bufferIndex: e, _index: t, line: n, column: i, offset: l } = r;
						return {
							_bufferIndex: e,
							_index: t,
							line: n,
							column: i,
							offset: l
						};
					}
					function f(e, t) {
						t.restore();
					}
					function h(e, t) {
						return function(n, i, l) {
							var o;
							let c, d, f, h;
							return Array.isArray(n) ? m(n) : "tokenize" in n ? m([n]) : (o = n, function(e) {
								let t = null !== e && o[e], n = null !== e && o.null;
								return m([...Array.isArray(t) ? t : t ? [t] : [], ...Array.isArray(n) ? n : n ? [n] : []])(e);
							});
							function m(e) {
								return (c = e, d = 0, 0 === e.length) ? l : y(e[d]);
							}
							function y(e) {
								return function(n) {
									let i, l, o, c, d;
									return (i = p(), l = u.previous, o = u.currentConstruct, c = u.events.length, d = Array.from(a), h = {
										from: c,
										restore: function() {
											r = i, u.previous = l, u.currentConstruct = o, u.events.length = c, a = d, g();
										}
									}, f = e, e.partial || (u.currentConstruct = e), e.name && u.parser.constructs.disable.null.includes(e.name)) ? x(n) : e.tokenize.call(t ? Object.assign(Object.create(u), t) : u, s, v, x)(n);
								};
							}
							function v(t) {
								return e(f, h), i;
							}
							function x(e) {
								return (h.restore(), ++d < c.length) ? y(c[d]) : l;
							}
						};
					}
					function m(e, t) {
						e.resolveAll && !l.includes(e) && l.push(e), e.resolve && tF(u.events, t, u.events.length - t, e.resolve(u.events.slice(t), u)), e.resolveTo && (u.events = e.resolveTo(u.events, u));
					}
					function g() {
						r.line in i && r.column < 2 && (r.column = i[r.line], r.offset += i[r.line] - 1);
					}
				}(t, e, n);
			};
		}
	})(r).document().write((d = 1, p = "", f = !0, function(e, t, n) {
		let r, i, l, o, a, s = [];
		for (e = p + ("string" == typeof e ? e.toString() : new TextDecoder(t || void 0).decode(e)), l = 0, p = "", f && (65279 === e.charCodeAt(0) && l++, f = void 0); l < e.length;) {
			if (nQ.lastIndex = l, o = (r = nQ.exec(e)) && void 0 !== r.index ? r.index : e.length, a = e.charCodeAt(o), !r) {
				p = e.slice(l);
				break;
			}
			if (10 === a && l === o && c) s.push(-3), c = void 0;
			else switch (c && (s.push(-5), c = void 0), l < o && (s.push(e.slice(l, o)), d += o - l), a) {
				case 0:
					s.push(65533), d++;
					break;
				case 9:
					for (i = 4 * Math.ceil(d / 4), s.push(-2); d++ < i;) s.push(-1);
					break;
				case 10:
					s.push(-4), d = 1;
					break;
				default: c = !0, d = 1;
			}
			l = o + 1;
		}
		return n && (c && s.push(-5), p && s.push(p), s.push(null)), s;
	})(t, n, !0)))), g = {
		all: function(e) {
			let t = [];
			if ("children" in e) {
				let n = e.children, r = -1;
				for (; ++r < n.length;) {
					let i = g.one(n[r], e);
					if (i) {
						if (r && "break" === n[r - 1].type && (Array.isArray(i) || "text" !== i.type || (i.value = lQ(i.value)), !Array.isArray(i) && "element" === i.type)) {
							let e = i.children[0];
							e && "text" === e.type && (e.value = lQ(e.value));
						}
						Array.isArray(i) ? t.push(...i) : t.push(i);
					}
				}
			}
			return t;
		},
		applyData: lK,
		definitionById: h = /* @__PURE__ */ new Map(),
		footnoteById: m = /* @__PURE__ */ new Map(),
		footnoteCounts: /* @__PURE__ */ new Map(),
		footnoteOrder: [],
		handlers: {
			...lP,
			...lJ.handlers
		},
		one: function(e, t) {
			let n = e.type, r = g.handlers[n];
			if (lG.call(g.handlers, n) && r) return r(g, e, t);
			if (g.options.passThrough && g.options.passThrough.includes(n)) {
				if ("children" in e) {
					let { children: t,...n } = e, r = lU(n);
					return r.children = g.all(e), r;
				}
				return lU(e);
			}
			return (g.options.unknownHandler || function(e, t) {
				let n = t.data || {}, r = "value" in t && !(lG.call(n, "hProperties") || lG.call(n, "hChildren")) ? {
					type: "text",
					value: t.value
				} : {
					type: "element",
					tagName: "div",
					properties: {},
					children: e.all(t)
				};
				return e.patch(t, r), e.applyData(t, r);
			})(g, e, t);
		},
		options: lJ,
		patch: lX,
		wrap: lY
	}, "function" == typeof (a = function(e) {
		if ("definition" === e.type || "footnoteDefinition" === e.type) {
			let t = "definition" === e.type ? h : m, n = String(e.identifier).toUpperCase();
			t.has(n) || t.set(n, e);
		}
	}) ? (y = void 0, v = a) : (y = a, v = void 0), rr(l, y, function(e, t) {
		let n = t[t.length - 1], r = n ? n.children.indexOf(e) : void 0;
		return v(e, r, n);
	}, void 0), b = (x = g).one(i, void 0), k = function(e) {
		let t = "string" == typeof e.options.clobberPrefix ? e.options.clobberPrefix : "user-content-", n = e.options.footnoteBackContent || lq, r = e.options.footnoteBackLabel || lW, i = e.options.footnoteLabel || "Footnotes", l = e.options.footnoteLabelTagName || "h2", o = e.options.footnoteLabelProperties || { className: ["sr-only"] }, a = [], s = -1;
		for (; ++s < e.footnoteOrder.length;) {
			let i = e.footnoteById.get(e.footnoteOrder[s]);
			if (!i) continue;
			let l = e.all(i), o = String(i.identifier).toUpperCase(), u = t2(o.toLowerCase()), c = 0, d = [], p = e.footnoteCounts.get(o);
			for (; void 0 !== p && ++c <= p;) {
				d.length > 0 && d.push({
					type: "text",
					value: " "
				});
				let e = "string" == typeof n ? n : n(s, c);
				"string" == typeof e && (e = {
					type: "text",
					value: e
				}), d.push({
					type: "element",
					tagName: "a",
					properties: {
						href: "#" + t + "fnref-" + u + (c > 1 ? "-" + c : ""),
						dataFootnoteBackref: "",
						ariaLabel: "string" == typeof r ? r : r(s, c),
						className: ["data-footnote-backref"]
					},
					children: Array.isArray(e) ? e : [e]
				});
			}
			let f = l[l.length - 1];
			if (f && "element" === f.type && "p" === f.tagName) {
				let e = f.children[f.children.length - 1];
				e && "text" === e.type ? e.value += " " : f.children.push({
					type: "text",
					value: " "
				}), f.children.push(...d);
			} else l.push(...d);
			let h = {
				type: "element",
				tagName: "li",
				properties: { id: t + "fn-" + u },
				children: e.wrap(l, !0)
			};
			e.patch(i, h), a.push(h);
		}
		if (0 !== a.length) return {
			type: "element",
			tagName: "section",
			properties: {
				dataFootnotes: !0,
				className: ["footnotes"]
			},
			children: [
				{
					type: "element",
					tagName: l,
					properties: {
						...lU(o),
						id: "footnote-label"
					},
					children: [{
						type: "text",
						value: i
					}]
				},
				{
					type: "text",
					value: "\n"
				},
				{
					type: "element",
					tagName: "ol",
					properties: {},
					children: e.wrap(a, !0)
				},
				{
					type: "text",
					value: "\n"
				}
			]
		};
	}(x), C = Array.isArray(b) ? {
		type: "root",
		children: b
	} : b || {
		type: "root",
		children: []
	}, k && C.children.push({
		type: "text",
		value: "\n"
	}, k), C);
	return (function({ components: e }) {
		return function(t) {
			return function(e, t) {
				var n, r, i, l;
				let o;
				if (!t || void 0 === t.Fragment) throw TypeError("Expected `Fragment` in options");
				let a = t.filePath || void 0;
				if (t.development) {
					if ("function" != typeof t.jsxDEV) throw TypeError("Expected `jsxDEV` in options when `development: true`");
					n = a, r = t.jsxDEV, o = function(e, t, i, l) {
						let o = Array.isArray(i.children), a = lm(e);
						return r(t, i, l, o, {
							columnNumber: a ? a.column - 1 : void 0,
							fileName: n,
							lineNumber: a ? a.line : void 0
						}, void 0);
					};
				} else {
					if ("function" != typeof t.jsx) throw TypeError("Expected `jsx` in production options");
					if ("function" != typeof t.jsxs) throw TypeError("Expected `jsxs` in production options");
					i = t.jsx, l = t.jsxs, o = function(e, t, n, r) {
						let o = Array.isArray(n.children) ? l : i;
						return r ? o(t, n, r) : o(t, n);
					};
				}
				let s = {
					Fragment: t.Fragment,
					ancestors: [],
					components: t.components || {},
					create: o,
					elementAttributeNameCase: t.elementAttributeNameCase || "react",
					evaluater: t.createEvaluater ? t.createEvaluater() : void 0,
					filePath: a,
					ignoreInvalidStyle: t.ignoreInvalidStyle || !1,
					passKeys: !1 !== t.passKeys,
					passNode: t.passNode || !1,
					schema: "svg" === t.space ? lu : ls,
					stylePropertyNameCase: t.stylePropertyNameCase || "dom",
					tableCellAlignToStyle: !1 !== t.tableCellAlignToStyle
				}, u = lA(s, e, void 0);
				return u && "string" != typeof u ? u : s.create(e, s.Fragment, { children: u || void 0 }, void 0);
			}(t, {
				Fragment: o,
				jsx: A,
				jsxs: O,
				components: e
			});
		};
	})({ components: e.components ?? {} })(w);
})), {
	displayName: "Markdown",
	props: ["text", "components"]
}), l1 = S((e, { emit: t, render: n }) => {
	let r = B(null), i = tv.from(r), l = ty.from(r), o = te.from(r), a = e0.use(), s = _.seed({ index: 0 }), u = () => {
		o.hide(), l.next(""), r.value && (r.value.value = "", r.value.blur()), s.next({ index: 0 });
	};
	L(l, ev((t) => {
		let n = t.trim();
		if (n.startsWith("{") && n.endsWith("}")) try {
			let t = JSON.parse(n);
			a.update(e.ctx.path, t), u();
		} catch (t) {
			a.setError(e.ctx.path, "无效的 JSON 字符串");
		}
	}), T());
	let c = (n) => {
		e.options ? n ??= e.options[s.value.index % e.options.length]?.propName : n ??= l.value, n ? (t("add", n), u()) : a.setError([...e.ctx.path, C.RecordKey], "无效的属性值");
	};
	L(i, ev((e) => {
		switch (e.type) {
			case "SELECT":
				s.next((t) => {
					t.index += e.direction;
				});
				break;
			case "COMMIT":
				c();
				break;
			case "CANCEL": u();
		}
	}), T());
	let d = L(o, n((e) => A(tw, { children: A("input", {
		ref: r,
		type: "text",
		placeholder: "添加属性 (可粘贴 JSON 字符串)",
		"data-options": e
	}) })));
	return L(ep([
		l,
		o,
		s,
		e.options$
	]), n(([e, t, n, l]) => l ? l.length > 0 ? A(tA, {
		sx: { mx: -4 },
		children: A(tn, {
			onSelected: (e) => {
				c(e);
			},
			open$: o,
			$content: A("div", { children: l.map((t, r) => e && !t.propName.includes(e) ? null : A(l0, {
				"data-focus": r === n.index % l.length,
				propName: t.propName,
				typedef: t.typedef
			})) }),
			children: d
		})
	}) : null : A(tA, {
		sx: { mx: -4 },
		children: A(q, {
			isOpen: t,
			placement: "right-start",
			$content: O(tC, { children: [A(e3, {
				type: "button",
				onClick: () => i.next({ type: "CANCEL" }),
				children: A(eD, { path: ee })
			}), A(e3, {
				type: "button",
				onClick: () => i.next({ type: "COMMIT" }),
				children: A(eD, { path: ei })
			})] }),
			children: A(tw, { children: A("input", {
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
}), l0 = j((e) => () => O(l2, {
	"data-value": e.propName,
	tabindex: 0,
	children: [A(e7, {
		optional: !!C.schemaProp(e.typedef, C.optional),
		children: e.propName
	}), A(to, { children: C.metaProp(e.typedef, "title") })]
}), {
	displayName: "PropMenuItem",
	props: ["propName", "typedef"]
}), l2 = G(ti, { displayName: "AddPropMenuItemContainer" })({ [`& ${e7}`]: { textAlign: "left" } }), l4 = S((e, { render: t }) => {
	let n = e0.use(), i = e2.use(), l = L(e.n$, t((e) => A(th, { children: e }))), a = r.create(e.ctx.path);
	return L(ep([
		e.close$,
		e.value$,
		n.errorAt$(a),
		n.foldedPrefix$(a)
	]), t(([t, r, s, u]) => {
		let c, d, p = !!s, f = y(r) || "array" == e.typedef.type, h = !f && M(r);
		if (t) return u ? null : A(o, { children: A(tg, {
			"data-error": p,
			$leading: l,
			indent: e.ctx.path.length,
			children: f ? O(o, { children: [O(e9, { children: ["]", "\xA0\xA0"] }), !e.ctx.readOnly && A(tI, {
				ctx: e.ctx,
				typedef: e.typedef,
				onAdd: (t) => {
					n.update(e.ctx.path, (e) => {
						console.log(e), e.push(t);
					}, [], e.typedef);
				}
			})] }) : h ? O(o, { children: [O(e9, { children: ["}", "\xA0\xA0"] }), !e.ctx.readOnly && A(l1, {
				ctx: e.ctx,
				onAdd: (t) => {
					n.update([...e.ctx.path, t], void 0);
				},
				options: "record" != e.typedef.type ? [...e.typedef.entries(r, e.ctx)].filter(([e]) => !Object.hasOwn(r, e)).map(([e, t, n]) => ({
					propName: String(e),
					typedef: n
				})) : void 0
			})] }) : null
		}) });
		if (u == eQ.PREFIX) return null;
		let m = () => {
			let t = U(e.ctx.path);
			return O(o, { children: [H(t) ? null : A(e7, {
				deprecated: C.schemaProp(e.typedef, "deprecated"),
				$leading: e.ctx.readOnly ? null : A(tE, { onRemove: () => {
					n.delete(e.ctx.path);
				} }),
				children: A(J, {
					sx: x(t) ? { opacity: 1 } : {
						opacity: .3,
						font: "code"
					},
					children: `${t}`
				})
			}), x(t) ? A(e9, { children: ": " }) : e.ctx.path.length > 0 ? A(e9, { children: "\xA0\xA0" }) : null] });
		};
		return A(tg, {
			indent: e.ctx.path.length,
			"data-dirty": ((e, t) => {
				if (!(y(e) || M(e))) {
					if (H(t) && !H(e)) return eZ.ADD;
					if (!H(t) && H(e)) return eZ.DELETE;
					if (!H(t) && !H(e) && e !== t) return eZ.EDIT;
				}
				return eZ.NONE;
			})(r, e.previous),
			"data-error": p,
			$leading: O(o, { children: [l, f || h ? A(tm, {
				folded: u !== eQ.NONE,
				onClick: () => {
					n.toggleFold(a);
				}
			}) : null] }),
			$comment: (c = C.metaProp(e.typedef, "title"), d = C.metaProp(e.typedef, "description"), O(o, { children: [(c || d) && A(tl, { children: d ? A(ta, {
				$title: A(to, { children: A(lZ, { text: d }) }),
				placement: "top",
				children: O("div", { children: [
					c,
					" ",
					A(eD, { path: "M11,18H13V16H11V18M12,6A4,4 0 0,0 8,10H10A2,2 0 0,1 12,8A2,2 0 0,1 14,10C14,12 11,11.75 11,15H13C13,12.75 16,12.5 16,10A4,4 0 0,0 12,6M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3Z" })
				] })
			}) : A("span", { children: c }) }), p && A(tc, { children: `${s}` })] })),
			children: (() => {
				if (u) {
					if (u == eQ.EXACT) {
						if (f) return O(o, { children: [m(), A(e9, { children: "[...]" })] });
						if (h) return O(o, { children: [m(), A(e9, { children: "{...}" })] });
					}
					return null;
				}
				return O(o, { children: [m(), f ? O(o, { children: [A(e9, { children: "[" }), A(e4, { children: A(t_, { value: r }) })] }) : h ? O(o, { children: [A(e9, { children: "{" }), A(e4, { children: A(t_, { value: r }) })] }) : i.$value?.(e.typedef, r, e.ctx)] });
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
let l3 = (e, t, n) => A(tk, {
	typedef: e,
	value: t,
	ctx: n
});
var l5 = S((e, { render: t }) => {
	let n = e0.use(), i = e2.use();
	return L(n, t((t) => A(tb, { children: A(e2, {
		value: { $value: i.$value ?? l3 },
		children: A(l9, { children: A(l6, { children: [...function* e(t, n, r, i) {
			if ("object" == r.type || "record" == r.type || "intersection" == r.type || "union" == r.type && C.schemaProp(r, "discriminator")) {
				let l = {
					value: t ?? {},
					previous: n,
					typedef: r,
					ctx: i
				};
				for (let [t, o, a] of (yield l, r.entries(l.value, i))) Object.hasOwn(l.value, t) && (yield* e(o, s(n, [t]), a, {
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
			if ("union" == r.type && H(C.schemaProp(r, "discriminator"))) {
				let l = C.schemaProp(r, "oneOf");
				if (l?.length == 2) {
					let r = l.find((e) => "array" == e.type), o = l.find((e) => "array" != e.type);
					if (r && o && C.schemaProp(r, "items").type == o.type) {
						let l = eY(t), o = eY(n), a = {
							value: l,
							previous: o,
							typedef: r,
							ctx: i
						};
						for (let [t, n, u] of (yield a, r.entries(l, i))) yield* e(n, s(o, [t]), u, {
							...i,
							path: [...i.path, t],
							branch: [...i.branch, n]
						});
						yield {
							...a,
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
				for (let [o, a, u] of (yield l, r.entries(t, i))) yield* e(a, s(n, [o]), u, {
					...i,
					path: [...i.path, o],
					branch: [...i.branch, a]
				});
				yield {
					...l,
					close: !0
				};
				return;
			}
			if ("any" == r.type || "unknown" == r.type) {
				if (y(t)) return void (yield* e(t, n, N(m()), i));
				if (w(t)) return void (yield* e(t, n, d(v(), m()), i));
			}
			yield {
				value: t,
				previous: n,
				typedef: r,
				ctx: i
			};
		}(t, n.initialsAt([]), n.typedef, {
			...a,
			readOnly: e.readOnly
		})].map((e, t) => {
			let n = r.create(e.ctx.path);
			return A(l4, {
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
}), l9 = G("div", { displayName: "JSONEditorContainer" })({
	w: "100%",
	h: "100%",
	overflow: "auto"
}), l6 = G("div", ({}, { slots: e }) => (t) => A(t, { children: e.default() }), { displayName: "Lines" })({
	position: "relative",
	display: "flex",
	flexDirection: "column",
	w: "100%",
	maxW: "100%",
	py: 2
}), l8 = { spec: {
	version: "v1.18.2",
	deploy: {
		kind: "Deployment",
		spec: {
			replicas: 1,
			template: { spec: {
				nodeSelector: { "kubernetes.io/os": "linux" },
				securityContext: {
					runAsNonRoot: !1,
					seccompProfile: { type: "RuntimeDefault" }
				},
				enableServiceLinks: !1
			} },
			strategy: {}
		}
	},
	config: { POD_NAMESPACE: "@field/metadata.namespace" },
	containers: {
		"cert-manager-controller": {
			image: {
				name: "docker.io/industai/cert-manager-controller",
				tag: "v1.18.2",
				pullPolicy: "IfNotPresent"
			},
			args: [
				"--v=2",
				"--cluster-resource-namespace=$(POD_NAMESPACE)",
				"--leader-election-namespace=kube-system",
				"--acme-http01-solver-image=industai/cert-manager-acmesolver:v1.18.2",
				"--max-concurrent-challenges=60"
			],
			ports: {
				"http-metrics": 9402,
				"http-healthz": 9403
			},
			livenessProbe: {
				httpGet: {
					path: "/livez",
					port: "http-healthz",
					scheme: "HTTP"
				},
				initialDelaySeconds: 10,
				timeoutSeconds: 15,
				periodSeconds: 10,
				successThreshold: 1,
				failureThreshold: 8
			},
			securityContext: {
				capabilities: { drop: ["ALL"] },
				readOnlyRootFilesystem: !0,
				allowPrivilegeEscalation: !1
			}
		},
		"init-crds": { image: {
			name: "docker.io/industai/cert-manager-crd-installer",
			tag: "v1.18.2"
		} }
	},
	services: { "#": { ports: { "http-metrics": 9402 } } },
	images: { "cert-manager-acmesolver": {
		name: "docker.io/industai/cert-manager-acmesolver",
		tag: "v1.18.2"
	} },
	serviceAccount: {
		scope: "Cluster",
		rules: [
			{
				verbs: ["update", "patch"],
				apiGroups: ["cert-manager.io"],
				resources: [
					"certificates",
					"certificates/status",
					"certificaterequests",
					"certificaterequests/status"
				]
			},
			{
				verbs: [
					"get",
					"list",
					"watch"
				],
				apiGroups: ["cert-manager.io"],
				resources: [
					"certificates",
					"certificaterequests",
					"clusterissuers",
					"issuers"
				]
			},
			{
				verbs: ["update"],
				apiGroups: ["cert-manager.io"],
				resources: ["certificates/finalizers", "certificaterequests/finalizers"]
			},
			{
				verbs: [
					"create",
					"delete",
					"get",
					"list",
					"watch"
				],
				apiGroups: ["acme.cert-manager.io"],
				resources: ["orders"]
			},
			{
				verbs: [
					"get",
					"list",
					"watch",
					"create",
					"update",
					"delete",
					"patch"
				],
				apiGroups: [""],
				resources: ["secrets"]
			},
			{
				verbs: ["create", "patch"],
				apiGroups: [""],
				resources: ["events"]
			},
			{
				verbs: ["update", "patch"],
				apiGroups: ["acme.cert-manager.io"],
				resources: ["orders", "orders/status"]
			},
			{
				verbs: [
					"get",
					"list",
					"watch"
				],
				apiGroups: ["acme.cert-manager.io"],
				resources: ["orders", "challenges"]
			},
			{
				verbs: [
					"get",
					"list",
					"watch"
				],
				apiGroups: ["cert-manager.io"],
				resources: ["clusterissuers", "issuers"]
			},
			{
				verbs: ["create", "delete"],
				apiGroups: ["acme.cert-manager.io"],
				resources: ["challenges"]
			},
			{
				verbs: ["update"],
				apiGroups: ["acme.cert-manager.io"],
				resources: ["orders/finalizers"]
			},
			{
				verbs: [
					"get",
					"list",
					"watch"
				],
				apiGroups: [""],
				resources: ["secrets"]
			},
			{
				verbs: ["create", "patch"],
				apiGroups: [""],
				resources: ["events"]
			},
			{
				verbs: ["update", "patch"],
				apiGroups: ["cert-manager.io"],
				resources: ["clusterissuers", "clusterissuers/status"]
			},
			{
				verbs: [
					"get",
					"list",
					"watch"
				],
				apiGroups: ["cert-manager.io"],
				resources: ["clusterissuers"]
			},
			{
				verbs: [
					"get",
					"list",
					"watch",
					"create",
					"update",
					"delete"
				],
				apiGroups: [""],
				resources: ["secrets"]
			},
			{
				verbs: ["create", "patch"],
				apiGroups: [""],
				resources: ["events"]
			},
			{
				verbs: [
					"get",
					"list",
					"watch",
					"update"
				],
				apiGroups: ["certificates.k8s.io"],
				resources: ["certificatesigningrequests"]
			},
			{
				verbs: ["update", "patch"],
				apiGroups: ["certificates.k8s.io"],
				resources: ["certificatesigningrequests/status"]
			},
			{
				verbs: ["sign"],
				apiGroups: ["certificates.k8s.io"],
				resources: ["signers"],
				resourceNames: ["issuers.cert-manager.io/*", "clusterissuers.cert-manager.io/*"]
			},
			{
				verbs: ["create"],
				apiGroups: ["authorization.k8s.io"],
				resources: ["subjectaccessreviews"]
			},
			{
				verbs: ["create"],
				apiGroups: [""],
				resources: ["serviceaccounts/token"],
				resourceNames: ["cert-manager"]
			},
			{
				verbs: ["update", "patch"],
				apiGroups: ["acme.cert-manager.io"],
				resources: ["challenges", "challenges/status"]
			},
			{
				verbs: [
					"get",
					"list",
					"watch"
				],
				apiGroups: ["acme.cert-manager.io"],
				resources: ["challenges"]
			},
			{
				verbs: [
					"get",
					"list",
					"watch"
				],
				apiGroups: ["cert-manager.io"],
				resources: ["issuers", "clusterissuers"]
			},
			{
				verbs: [
					"get",
					"list",
					"watch"
				],
				apiGroups: [""],
				resources: ["secrets"]
			},
			{
				verbs: ["create", "patch"],
				apiGroups: [""],
				resources: ["events"]
			},
			{
				verbs: [
					"get",
					"list",
					"watch",
					"create",
					"delete"
				],
				apiGroups: [""],
				resources: ["pods", "services"]
			},
			{
				verbs: [
					"get",
					"list",
					"watch",
					"create",
					"delete",
					"update"
				],
				apiGroups: ["networking.k8s.io"],
				resources: ["ingresses"]
			},
			{
				verbs: [
					"get",
					"list",
					"watch",
					"create",
					"delete",
					"update"
				],
				apiGroups: ["gateway.networking.k8s.io"],
				resources: ["httproutes"]
			},
			{
				verbs: ["create"],
				apiGroups: ["route.openshift.io"],
				resources: ["routes/custom-host"]
			},
			{
				verbs: ["update"],
				apiGroups: ["acme.cert-manager.io"],
				resources: ["challenges/finalizers"]
			},
			{
				verbs: [
					"get",
					"list",
					"watch"
				],
				apiGroups: [""],
				resources: ["secrets"]
			},
			{
				verbs: ["update", "patch"],
				apiGroups: ["cert-manager.io"],
				resources: ["issuers", "issuers/status"]
			},
			{
				verbs: [
					"get",
					"list",
					"watch"
				],
				apiGroups: ["cert-manager.io"],
				resources: ["issuers"]
			},
			{
				verbs: [
					"get",
					"list",
					"watch",
					"create",
					"update",
					"delete"
				],
				apiGroups: [""],
				resources: ["secrets"]
			},
			{
				verbs: ["create", "patch"],
				apiGroups: [""],
				resources: ["events"]
			},
			{
				verbs: [
					"create",
					"update",
					"delete"
				],
				apiGroups: ["cert-manager.io"],
				resources: ["certificates", "certificaterequests"]
			},
			{
				verbs: [
					"get",
					"list",
					"watch"
				],
				apiGroups: ["cert-manager.io"],
				resources: [
					"certificates",
					"certificaterequests",
					"issuers",
					"clusterissuers"
				]
			},
			{
				verbs: [
					"get",
					"list",
					"watch"
				],
				apiGroups: ["networking.k8s.io"],
				resources: ["ingresses"]
			},
			{
				verbs: ["update"],
				apiGroups: ["networking.k8s.io"],
				resources: ["ingresses/finalizers"]
			},
			{
				verbs: [
					"get",
					"list",
					"watch"
				],
				apiGroups: ["gateway.networking.k8s.io"],
				resources: ["gateways", "httproutes"]
			},
			{
				verbs: ["update"],
				apiGroups: ["gateway.networking.k8s.io"],
				resources: ["gateways/finalizers", "httproutes/finalizers"]
			},
			{
				verbs: ["create", "patch"],
				apiGroups: [""],
				resources: ["events"]
			},
			{
				verbs: [
					"get",
					"update",
					"patch"
				],
				apiGroups: ["coordination.k8s.io"],
				resources: ["leases"],
				resourceNames: ["cert-manager-controller"]
			},
			{
				verbs: ["create"],
				apiGroups: ["coordination.k8s.io"],
				resources: ["leases"]
			},
			{
				verbs: ["approve"],
				apiGroups: ["cert-manager.io"],
				resources: ["signers"],
				resourceNames: ["issuers.cert-manager.io/*", "clusterissuers.cert-manager.io/*"]
			},
			{
				verbs: [
					"get",
					"patch",
					"list",
					"watch",
					"update",
					"create"
				],
				apiGroups: ["apiextensions.k8s.io"],
				resources: ["customresourcedefinitions"]
			}
		]
	}
} }, l7 = j(() => {
	let e = m(), t = e1.of(e, l8);
	return t.toggleFold("/spec/serviceAccount"), L(t, ev((n) => {
		let [r] = e.validate(n);
		if (r) for (let e of r.failures()) t.setError(e.path, e.message);
	}), D()), () => A(el, {
		sx: {
			width: "100%",
			height: "100%",
			pr: "20%"
		},
		children: A(e0, {
			value: t,
			children: A(l5, { readOnly: !0 })
		})
	});
});
function oe(e, t, n, r) {
	var i, l = arguments.length, o = l < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
	if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, n, r);
	else for (var a = e.length - 1; a >= 0; a--) (i = e[a]) && (o = (l < 3 ? i(o) : l > 3 ? i(t, n, o) : i(t, n)) || o);
	return l > 3 && o && Object.defineProperty(t, n, o), o;
}
var ot = ((eC = ot || {}).A = "A", eC.B = "B", eC), on = class {
	name;
	port;
};
oe([i({ title: "名称" }), v()], on.prototype, "name", void 0), oe([i({ title: "端口号" }), V(p(), v())], on.prototype, "port", void 0);
var or = class {
	kind;
	name;
	annotations;
	seconds;
	addresses;
	ports;
	paths;
	manifests;
	anyjson;
};
oe([i({ title: "类型" }), g(ot)], or.prototype, "kind", void 0), oe([
	i({
		title: "名称",
		description: "详细描述"
	}),
	v(),
	h(2)
], or.prototype, "name", void 0), oe([i({ title: "注解" }), d(v(), v())], or.prototype, "annotations", void 0), oe([
	i({ title: "秒数" }),
	p(),
	u()
], or.prototype, "seconds", void 0), oe([
	i({ title: "地址" }),
	N(v()),
	u()
], or.prototype, "addresses", void 0), oe([i({ title: "端口" }), N(l(on))], or.prototype, "ports", void 0), oe([i({ title: "路径" }), V(v(), N(v()))], or.prototype, "paths", void 0), oe([
	i({ title: "其他配置" }),
	d(v(), m()),
	u()
], or.prototype, "manifests", void 0), oe([
	i({ title: "任意类型" }),
	d(v(), m()),
	u()
], or.prototype, "anyjson", void 0);
var oi = j(() => {
	let e = l(or), t = e1.of(e, {
		name: "name",
		annotations: { longtext: Array(100).fill("longtext").join("") },
		ports: [],
		paths: "/x",
		manifests: { x: {} },
		anyjson: {
			obj: { a: 1 },
			arr: [
				"1",
				"2",
				"3"
			],
			nested: [{ a: 1 }, { a: 2 }]
		}
	});
	return L(t, ev((n) => {
		let [r] = e.validate(n);
		if (r) for (let e of r.failures()) t.setError(e.path, e.message);
		console.log(n);
	}), D()), () => A(el, {
		sx: {
			width: "100%",
			height: "100%",
			pr: "20%"
		},
		children: A(e0, {
			value: t,
			children: A(l5, {})
		})
	});
});
export { eT as _, eF as a, eR as c, eG as d, ez as f, eD as g, eL as h, eX as i, eB as l, eN as m, l7 as n, ej as o, eP as p, lZ as r, e$ as s, oi as t, eJ as u, eA as v, eS as y };
