const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["static/nodepkg-jsoneditor-example.CF3b1w7g.chunk.js","static/lib-nodepkg-vueuikit.BAbl8dOa.chunk.js","static/lib-nodepkg-vuekit.Dng4O0gc.chunk.js","static/lib-nodepkg-typedef.WoOPnAhr.chunk.js","static/vendor-rxjs.CN26Be5v.chunk.js","static/rolldown-runtime.D8qhy2Lt.chunk.js","static/vendor-toggle-selection.BhsMKh4i.chunk.js","static/vendor-rxjs.DGO3ID4f.chunk.js","static/nodepkg-jsoneditor-example.jIw-zaFf.chunk.js","static/nodepkg-vuemarkdown-example.C35ZouB0.chunk.js","static/nodepkg-vuematerial-example.Cf4bzBQ3.chunk.js","static/nodepkg-vuematerial-example.BJe-7faB.chunk.js","static/nodepkg-vuematerial-example.1JAjPu7N.chunk.js","static/nodepkg-vuematerial-example.BXCckMEe.chunk.js","static/nodepkg-vuematerial-example.7evHu5Qr.chunk.js","static/nodepkg-vueuikit-example.DGWp4S9z.chunk.js","static/nodepkg-vueuikit-example.DLeqZa6x.chunk.js","static/nodepkg-vueuikit-example.DV5yAcpN.chunk.js","static/nodepkg-vueuikit-example.GEUN-ir1.chunk.js","static/nodepkg-vueuikit-example.CneMKzJa.chunk.js","static/nodepkg-vueuikit-example.D0N24hGn.chunk.js","static/nodepkg-vueuikit-example.C2JYsOBM.chunk.js","static/nodepkg-vuekit-example.4I8pIOIE.chunk.js","static/nodepkg-vuekit-example.BrNu4brX.chunk.js","static/webapp-vuekit-layout.Bugahw6i.chunk.js"])))=>i.map(i=>d[i]);
import { Dt as e, F as n, Ht as t, I as o, L as a, M as i, N as r, O as s, P as l, R as d, St as c, T as u, Tt as p, V as m, Y as h, a as f, bt as _, c as v, cn as y, en as g, f as b, j as x, k as C, ln as k, m as w, nt as E, o as I, p as L, rt as S, s as V, t as M, wt as D, z as T } from "./lib-nodepkg-vuekit.Dng4O0gc.chunk.js";
import { E as H, O as A, S as O, a as R, c as $, d as N, f as z, g as j, h as P, i as F, l as B, m as W, n as Z, o as Y, p as X, r as q, s as G, t as K, u as U, x as J } from "./lib-nodepkg-vueuikit.BAbl8dOa.chunk.js";
import { a as Q } from "./lib-nodepkg-typedef.WoOPnAhr.chunk.js";
let ee = document.createElement("link").relList;
if (!(ee && ee.supports && ee.supports("modulepreload"))) {
	for (let e of document.querySelectorAll("link[rel=\"modulepreload\"]")) en(e);
	new MutationObserver((e) => {
		for (let n of e) if ("childList" === n.type) for (let e of n.addedNodes) "LINK" === e.tagName && "modulepreload" === e.rel && en(e);
	}).observe(document, {
		childList: !0,
		subtree: !0
	});
}
function en(e) {
	if (e.ep) return;
	e.ep = !0;
	let n = function(e) {
		let n = {};
		return e.integrity && (n.integrity = e.integrity), e.referrerPolicy && (n.referrerPolicy = e.referrerPolicy), "use-credentials" === e.crossOrigin ? n.credentials = "include" : "anonymous" === e.crossOrigin ? n.credentials = "omit" : n.credentials = "same-origin", n;
	}(e);
	fetch(e.href, n);
}
var et = function(e, n) {
	var t = -1, o = g(e) ? Array(e.length) : [];
	return p(e, function(e, a, i) {
		o[++t] = n(e, a, i);
	}), o;
}, eo = function(n, t) {
	return (y(n) ? k : et)(n, e(t, 3));
}, ea = Object.prototype.hasOwnProperty, ei = D(function(e, n, t) {
	ea.call(e, t) ? e[t].push(n) : A(e, t, [n]);
}), er = {
	now: function() {
		return (er.delegate || Date).now();
	},
	delegate: void 0
}, es = function(e) {
	function n(n, t) {
		return e.call(this) || this;
	}
	return x(n, e), n.prototype.schedule = function(e, n) {
		return void 0 === n && (n = 0), this;
	}, n;
}(s), el = {
	setInterval: function(e, n) {
		for (var t = [], o = 2; o < arguments.length; o++) t[o - 2] = arguments[o];
		var a = el.delegate;
		return (null == a ? void 0 : a.setInterval) ? a.setInterval.apply(a, r([e, n], i(t))) : setInterval.apply(void 0, r([e, n], i(t)));
	},
	clearInterval: function(e) {
		var n = el.delegate;
		return ((null == n ? void 0 : n.clearInterval) || clearInterval)(e);
	},
	delegate: void 0
}, ed = function(e) {
	function n(n, t) {
		var o = e.call(this, n, t) || this;
		return o.scheduler = n, o.work = t, o.pending = !1, o;
	}
	return x(n, e), n.prototype.schedule = function(e, n) {
		if (void 0 === n && (n = 0), this.closed) return this;
		this.state = e;
		var t, o = this.id, a = this.scheduler;
		return null != o && (this.id = this.recycleAsyncId(a, o, n)), this.pending = !0, this.delay = n, this.id = null != (t = this.id) ? t : this.requestAsyncId(a, this.id, n), this;
	}, n.prototype.requestAsyncId = function(e, n, t) {
		return void 0 === t && (t = 0), el.setInterval(e.flush.bind(e, this), t);
	}, n.prototype.recycleAsyncId = function(e, n, t) {
		if (void 0 === t && (t = 0), null != t && this.delay === t && !1 === this.pending) return n;
		null != n && el.clearInterval(n);
	}, n.prototype.execute = function(e, n) {
		if (this.closed) return Error("executing a cancelled action");
		this.pending = !1;
		var t = this._execute(e, n);
		if (t) return t;
		!1 === this.pending && null != this.id && (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
	}, n.prototype._execute = function(e, n) {
		var t, o = !1;
		try {
			this.work(e);
		} catch (e) {
			o = !0, t = e || Error("Scheduled action threw falsy error");
		}
		if (o) return this.unsubscribe(), t;
	}, n.prototype.unsubscribe = function() {
		if (!this.closed) {
			var n = this.id, t = this.scheduler, o = t.actions;
			this.work = this.state = this.scheduler = null, this.pending = !1, C(o, this), null != n && (this.id = this.recycleAsyncId(t, n, null)), this.delay = null, e.prototype.unsubscribe.call(this);
		}
	}, n;
}(es), ec = function() {
	function e(n, t) {
		void 0 === t && (t = e.now), this.schedulerActionCtor = n, this.now = t;
	}
	return e.prototype.schedule = function(e, n, t) {
		return void 0 === n && (n = 0), new this.schedulerActionCtor(this, e).schedule(t, n);
	}, e.now = er.now, e;
}(), eu = new (function(e) {
	function n(n, t) {
		void 0 === t && (t = ec.now);
		var o = e.call(this, n, t) || this;
		return o.actions = [], o._active = !1, o;
	}
	return x(n, e), n.prototype.flush = function(e) {
		var n, t = this.actions;
		if (this._active) return void t.push(e);
		this._active = !0;
		do
			if (n = e.execute(e.state, e.delay)) break;
		while (e = t.shift());
		if (this._active = !1, n) {
			for (; e = t.shift();) e.unsubscribe();
			throw n;
		}
	}, n;
}(ec))(ed);
function ep(e, n, t) {
	void 0 === e && (e = 0), void 0 === t && (t = eu);
	var o = -1;
	return null != n && (J(n) ? t = n : o = n), new u(function(n) {
		var a, i = (a = e) instanceof Date && !isNaN(a) ? e - t.now() : e;
		i < 0 && (i = 0);
		var r = 0;
		return t.schedule(function() {
			n.closed || (n.next(r++), 0 <= o ? this.schedule(void 0, o) : n.complete());
		}, i);
	});
}
var em = Y("button", {
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
}), eh = Y(em, { displayName: "FilledButton" })({
	containerStyle: "sys.primary",
	py: 6,
	px: 16,
	_hover: {
		shadow: "1",
		_$before: { bgColor: j("white", P(.08)) }
	},
	_focus: {
		shadow: "1",
		_$before: { bgColor: j("white", P(.12)) }
	},
	_active: {
		shadow: "1",
		_$before: { bgColor: j("white", P(.12)) }
	},
	_disabled: {
		shadow: "0",
		color: j("sys.on-surface", P(.38)),
		bgColor: "rgba(0,0,0,0)",
		_$before: { bgColor: j("sys.on-surface", P(.12)) }
	}
}), ef = Y(em, { displayName: "TextButton" })({
	extends: [{
		px: 16,
		$data_icon: {
			_data_placement__start: { ml: -4 },
			_data_placement__end: { mr: -4 }
		}
	}],
	color: "sys.primary",
	_$before: { bgColor: "rgba(0,0,0,0)" },
	_hover: { _$before: { bgColor: j("sys.primary", P(.08)) } },
	_focus: { _$before: { bgColor: j("sys.primary", P(.12)) } },
	_active: { _$before: { bgColor: j("sys.primary", P(.12)) } },
	_disabled: {
		color: j("sys.on-surface", P(.38)),
		bgColor: "rgba(0,0,0,0)",
		_$before: { bgColor: "rgba(0,0,0,0)" }
	}
}), e_ = Y(em, { displayName: "OutlinedButton" })({
	extends: [{ border: "1px solid" }],
	containerStyle: "sys.surface",
	borderColor: "sys.outline",
	fontWeight: "bold",
	_hover: { bgColor: j("sys.primary", P(.08)) },
	_active: { bgColor: j("sys.primary", P(.12)) },
	_focus: { bgColor: j("sys.primary", P(.12)) },
	_disabled: {
		color: j("sys.on-surface", P(.38)),
		bgColor: "rgba(0,0,0,0)",
		borderColor: j("sys.on-surface", P(.12))
	}
}), ev = "M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z", ey = "M12 2C17.5 2 22 6.5 22 12S17.5 22 12 22 2 17.5 2 12 6.5 2 12 2M12 4C10.1 4 8.4 4.6 7.1 5.7L18.3 16.9C19.3 15.5 20 13.8 20 12C20 7.6 16.4 4 12 4M16.9 18.3L5.7 7.1C4.6 8.4 4 10.1 4 12C4 16.4 7.6 20 12 20C13.9 20 15.6 19.4 16.9 18.3Z", eg = "M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z", eb = "M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z", ex = "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z", eC = "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z", ek = "M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z", ew = "M1,1V5H2V19H1V23H5V22H19V23H23V19H22V5H23V1H19V2H5V1M5,4H19V5H20V19H19V20H5V19H4V5H5M6,6V14H9V18H18V9H14V6M8,8H12V12H8M14,11H16V16H11V14H14", eE = "M11,18H13V16H11V18M12,6A4,4 0 0,0 8,10H10A2,2 0 0,1 12,8A2,2 0 0,1 14,10C14,12 11,11.75 11,15H13C13,12.75 16,12.5 16,10A4,4 0 0,0 12,6M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3Z", eI = "M19,19V5H5V19H19M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5C3,3.89 3.9,3 5,3H19M17,11V13H7V11H17Z", eL = "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z", eS = "M2,21L23,12L2,3V10L17,12L2,14V21Z", eV = Y("span", (e, {}) => (n) => {
	let t = e.size ?? 24;
	return I(n, {
		"data-icon": !0,
		"data-placement": e.placement,
		"data-has-size": !!e.size,
		children: I("svg", {
			viewBox: `0 0 ${t} ${t}`,
			width: t,
			height: t,
			children: I("path", {
				d: e.path,
				children: e.animate && I("animateTransform", {
					attributeName: "transform",
					attributeType: "XML",
					type: "rotate",
					repeatCount: "indefinite",
					dur: "1s",
					from: `0 ${t / 2} ${t / 2}`,
					to: `360 ${t / 2} ${t / 2}`
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
}), eM = Y(ef, { displayName: "IconButton" })({
	boxSize: 36,
	p: 0,
	color: "sys.on-surface-variant",
	[`${eV}`]: { boxSize: 18 }
});
let eD = z({
	from: { opacity: 0 },
	to: { opacity: 1 },
	duration: X.duration.md1,
	easing: X.easing.standard.accelerate
}, {
	from: { opacity: 1 },
	to: { opacity: 0 },
	duration: X.duration.sm4,
	easing: X.easing.standard.decelerate
}), eT = {
	left: z({
		from: { transform: "translateX(-100%)" },
		to: { transform: "translateX(0%)" },
		duration: X.duration.sm4,
		easing: X.easing.standard.decelerate
	}, {
		from: { transform: "translateX(0%)" },
		to: { transform: "translateX(-120%)" },
		duration: X.duration.sm1,
		easing: X.easing.standard.accelerate
	}),
	right: z({
		from: { transform: "translateX(100%)" },
		to: { transform: "translateX(0%)" },
		duration: X.duration.sm4,
		easing: X.easing.standard.decelerate
	}, {
		from: { transform: "translateX(0%)" },
		to: { transform: "translateX(120%)" },
		duration: X.duration.sm1,
		easing: X.easing.standard.accelerate
	}),
	top: z({
		from: { transform: "translateY(-100%)" },
		to: { transform: "translateY(0%)" },
		duration: X.duration.sm4,
		easing: X.easing.standard.decelerate
	}, {
		from: { transform: "translateY(0%)" },
		to: { transform: "translateY(-120%)" },
		duration: X.duration.sm1,
		easing: X.easing.standard.accelerate
	}),
	bottom: z({
		from: { transform: "translateY(100%)" },
		to: { transform: "translateY(0%)" },
		duration: X.duration.sm4,
		easing: X.easing.standard.decelerate
	}, {
		from: { transform: "translateY(0%)" },
		to: { transform: "translateY(120%)" },
		duration: X.duration.sm1,
		easing: X.easing.standard.accelerate
	})
};
var eH = Y("div", { displayName: "TooltipContainer" })({
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
}), eA = m((e, { slots: n }) => {
	let t = S(!1), o = S(null);
	return () => {
		let a = n.default ? n.default()[0] : null, i = n.title ? n.title() : e.title;
		return i ? I(K, {
			isOpen: t.value,
			onClickOutside: () => t.value = !1,
			$transition: ({ content: e }) => I(eD, { children: e }),
			$content: I(eH, { children: i }),
			children: a ? h(a, {
				onVnodeMounted: (e) => {
					o.value = function e(n) {
						if (n) {
							if (n instanceof HTMLElement) return n;
							if (n instanceof Text) return e(n.nextElementSibling);
						}
						return null;
					}(e.el);
				},
				onMouseover: () => {
					t.value = !0;
				},
				onMouseleave: () => {
					t.value = !1;
				}
			}) : null
		}) : a;
	};
}, {
	displayName: "Tooltip",
	props: ["title"]
});
let eO = Z({ apply({ elements: e, rects: n }) {
	Object.assign(e.floating.style, { width: `${n.reference.width}px` });
} });
var eR = Y("div", ({}, { slots: e }) => (n) => I(n, { children: I("div", {
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
}), e$ = Y("div", (e, { slots: n }) => (t) => V(t, {
	"data-active": e.active,
	children: [!c(e.active) && I(eV, {
		"data-check-icon": !0,
		path: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"
	}), n.default?.()]
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
		bgColor: j("sys.on-surface", P(.08))
	},
	_focus: { bgColor: j("sys.on-surface", P(.08)) },
	_active: {
		color: "sys.primary",
		"[data-check-icon]": { visibility: "visible" }
	}
}), eN = m((e, { slots: n, emit: t }) => {
	let o, a = v(!1);
	E(() => e.isOpen, (e) => {
		a.value = e ?? a.value;
	}), E(() => a.value, (e) => {
		e ? t("did-open") : t("did-close");
	});
	let i = () => {
		a.value = !0;
	}, r = (o = (e) => {
		t("selected", e), a.value = !1;
	}, (e) => {
		let n = [e.target, ...e.composedPath()].find((e) => e?.hasAttribute?.("data-value"));
		if (n) {
			let e = n?.getAttribute("data-value");
			null !== e && o(e);
		}
	});
	return () => {
		let t = n.default?.()[0];
		return I(K, {
			isOpen: !e.disabled && a.value,
			onClickOutside: () => {
				a.value = !1;
			},
			placement: e.fullWidth ? "bottom-start" : e.placement,
			middleware: e.fullWidth ? [eO] : void 0,
			$content: I(eR, {
				onClick: r,
				children: n.menu?.() ?? []
			}),
			children: t ? e.disabled ? h(t, { "data-disabled": e.disabled }) : h(t, { onClick: i }) : null
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
}), ez = Y("div", { displayName: "SheetDialogContainer" })({
	maxH: "96vh",
	maxW: "96vw",
	h: "96vh",
	w: "96vw",
	display: "flex",
	flexDirection: "column",
	overflow: "hidden"
}), ej = Y("div", { displayName: "SheetDialogHeading" })({
	px: 24,
	py: 24,
	display: "flex",
	alignItems: "center",
	gap: 14
}), eP = Y("div", { displayName: "SheetDialogFooter" })({
	px: 24,
	py: 24,
	display: "flex",
	alignItems: "center",
	justifyContent: "flex-end",
	gap: 8
}), eF = Y("div", { displayName: "SheetDialogHeadingTitle" })({
	flex: 1,
	textStyle: "sys.headline-small"
}), eB = Y("div", { displayName: "SheetDialogContent" })({
	flex: 1,
	overflow: "auto",
	pt: 24,
	px: 24
}), eW = Y("div", { displayName: "SheetDialogWrapper" })({
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
		bgColor: j("sys.scrim", P(.38))
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
}), eZ = class extends L {
	show = () => this.next(!0);
	hide = () => this.next(!1);
}, eY = m((e, { slots: n, emit: t }) => {
	let o = b(!1), a = b(e.isOpen ?? !1);
	E(() => e.isOpen, (e) => {
		!0 === e ? a.value = !0 : !1 === e && (o.value = !1);
	});
	let i = eT[e.position];
	return () => I(q, {
		isOpen: a.value,
		onContentBeforeMount: () => o.value = !0,
		onEscKeydown: () => o.value = !1,
		children: V(eW, { children: [I(eD, {
			onComplete: (e) => {
				"leave" == e && (a.value = !1, t("close"));
			},
			children: o.value ? I("div", {
				"data-dialog-backdrop": !0,
				onClick: () => o.value = !1
			}) : null
		}), I(i, { children: o.value ? I("div", {
			"data-dialog-content": e.position,
			children: n.default?.()
		}) : null })] })
	});
}, {
	displayName: "SheetDialog",
	props: ["position", "isOpen"],
	emits: ["close"]
}), eX = m((e) => e.setup(), {
	displayName: "Defer",
	props: ["setup"]
}), eq = (e, n) => {
	let t = new eZ(!1), o = w(t, f((o) => I(eY, {
		isOpen: o,
		position: n.position,
		onClose: () => t.hide(),
		children: I(eX, { setup: () => e(t) })
	})));
	return T(t, { $elem: o });
};
let eG = (e) => eq(e, { position: "top" }), eK = (e) => eq(e, { position: "left" });
X.duration.md1, X.easing.standard.accelerate, X.duration.sm4, X.easing.standard.accelerate, X.duration.sm4, X.easing.standard.accelerate, X.duration.sm1, X.easing.standard.accelerate;
var eU = Y("div", (e, { slots: n }) => (o) => {
	let a = e.valued, i = e.invalid, r = e.disabled, s = (n.default?.() ?? []).map((e) => "input" === e.type ? (a = !!t(e.props, ["value"], t(e.props, ["placeholder"], a)), r = t(e.props, ["disabled"], r), h(e, { disabled: r })) : h(e));
	return V(o, {
		"data-valued": a,
		"data-invalid": i,
		"data-disabled": r,
		"data-focus-within": e.focus,
		"data-has-leading": !!n.leading,
		"data-has-trailing": !!n.trailing,
		children: [V("div", {
			"data-input-container": !0,
			children: [V("div", {
				"data-input-decorator-container": !0,
				children: [
					I("div", { "data-input-decorator-leading": !0 }),
					I("div", {
						"data-input-decorator-label": !0,
						children: I("div", {
							"data-input-label": !0,
							children: n.label?.()
						})
					}),
					I("div", { "data-input-decorator-trailing": !0 })
				]
			}), V("div", {
				"data-input-row": !0,
				children: [
					n.leading && I(eJ, {
						role: "leading",
						children: n.leading()
					}),
					s,
					n.trailing && I(eJ, {
						role: "trailing",
						children: n.trailing()
					})
				]
			})]
		}), n.supporting && I("div", {
			"data-input-supporting": !0,
			children: n.supporting?.()
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
}), eJ = Y("div", {
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
}), eQ = Y("div", { displayName: "Container" })({
	padding: 24,
	"& [data-example]": {
		display: "flex",
		flexDirection: "row-reverse",
		gap: 8,
		"& > *": { flex: 1 },
		"& [data-example-container]": {
			display: "flex",
			alignItems: "center",
			justifyContent: "center"
		}
	},
	"& :not(pre) > code": {
		font: "code",
		rounded: "xs",
		px: 4,
		bgColor: "sys.surface-container-low"
	},
	"& pre": {
		overflow: "auto",
		textStyle: "sys.body-small",
		containerStyle: "sys.surface-container-low",
		m: 0,
		rounded: "sm",
		p: 16,
		font: "code",
		"& .comment": { color: j("sys.on-surface", P(.38)) },
		"& .string": { color: "sys.success" },
		"& .tag .attr-name": { color: "sys.success" },
		"& .function": { color: "sys.warning" },
		"& .punctuation": { color: j("sys.on-surface", P(.38)) },
		"& .keyword": { color: "sys.error" }
	},
	"& p,li": { my: "1em" },
	overflowY: "auto"
});
let e1 = M(() => {
	let e = {
		primary: "#1270f5",
		secondary: "#8a90a5",
		tertiary: "#b58391",
		neutral: "#5e5e5e",
		neutralVariant: "#757780",
		error: "#d93f23",
		warning: "#e69c00",
		success: "#5ac220"
	}, n = N.fromColors(e).normalizeRoleRules();
	return v({
		seed: e,
		rules: n,
		theming: W.create({
			...U,
			...N.fromColors(e).toDesignTokens(n)
		}, { varPrefix: "vk" })
	});
});
var e0 = m(() => {
	let e = ei(d().options.routes.filter((e) => "/" !== e.path), (e) => e.path.split("/")[1]);
	return () => I(G, {
		sx: {
			py: 16,
			px: 0,
			textTransform: "capitalize"
		},
		children: eo(e, (e, n) => {
			let [t, o] = _(e, (e) => e.path === `/${n}`);
			return V(G, {
				sx: { px: 8 },
				children: [t[0] ? I(ef, {
					component: l,
					sx: {
						width: "100%",
						justifyContent: "flex-start"
					},
					activeClass: "active",
					to: t[0]?.path,
					children: n
				}) : I(ef, {
					sx: {
						width: "100%",
						justifyContent: "flex-start"
					},
					children: n
				}), I(G, {
					sx: { pl: 16 },
					children: eo(o, (e) => I(ef, {
						component: l,
						activeClass: "active",
						to: e.path,
						sx: {
							width: "100%",
							justifyContent: "flex-start"
						},
						children: H(e.path.split("/"))?.replaceAll("-", " ")
					}, e.name))
				})]
			}, n);
		})
	});
}, { displayName: "Nav" }), e2 = m({ $default: Q().optional() }, (e, { slots: n }) => {
	let t = S("light");
	return () => V(G, {
		"data-theme": t.value,
		sx: {
			display: "flex",
			height: "100vh",
			width: "100vw",
			containerStyle: "sys.surface"
		},
		children: [V(G, {
			sx: {
				display: "flex",
				flexDirection: "column",
				width: "280px",
				height: "100vh",
				borderRightRadius: "lg",
				overflowY: "auto",
				containerStyle: "sys.surface-container-low",
				elevation: "0",
				_hover: { elevation: "2" }
			},
			children: [I(G, {
				sx: { flex: 1 },
				children: I(e0, {})
			}), V(G, {
				sx: {
					p: 16,
					display: "flex",
					justifyContent: "flex-end"
				},
				children: [I(eM, {
					component: "a",
					target: "_blank",
					sx: { color: "sys.on-surface-variant" },
					href: "//github.com/innoai-tech/vuekit",
					children: I(eV, { path: "M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" })
				}), I(eA, {
					title: `切换到${"light" === t.value ? "深色模式" : "浅色模式"}`,
					children: I(G, {
						component: eM,
						"data-test": !0,
						sx: { color: "sys.on-surface-variant" },
						onClick: () => {
							t.value = "light" === t.value ? "dark" : "light";
						},
						children: I(eV, { path: "light" === t.value ? "M17.75,4.09L15.22,6.03L16.13,9.09L13.5,7.28L10.87,9.09L11.78,6.03L9.25,4.09L12.44,4L13.5,1L14.56,4L17.75,4.09M21.25,11L19.61,12.25L20.2,14.23L18.5,13.06L16.8,14.23L17.39,12.25L15.75,11L17.81,10.95L18.5,9L19.19,10.95L21.25,11M18.97,15.95C19.8,15.87 20.69,17.05 20.16,17.8C19.84,18.25 19.5,18.67 19.08,19.07C15.17,23 8.84,23 4.94,19.07C1.03,15.17 1.03,8.83 4.94,4.93C5.34,4.53 5.76,4.17 6.21,3.85C6.96,3.32 8.14,4.21 8.06,5.04C7.79,7.9 8.75,10.87 10.95,13.06C13.14,15.26 16.1,16.22 18.97,15.95M17.33,17.97C14.5,17.81 11.7,16.64 9.53,14.5C7.36,12.31 6.2,9.5 6.04,6.68C3.23,9.82 3.34,14.64 6.35,17.66C9.37,20.67 14.19,20.78 17.33,17.97Z" : "M3.55 19.09L4.96 20.5L6.76 18.71L5.34 17.29M12 6C8.69 6 6 8.69 6 12S8.69 18 12 18 18 15.31 18 12C18 8.68 15.31 6 12 6M20 13H23V11H20M17.24 18.71L19.04 20.5L20.45 19.09L18.66 17.29M20.45 5L19.04 3.6L17.24 5.39L18.66 6.81M13 1H11V4H13M6.76 5.39L4.96 3.6L3.55 5L5.34 6.81L6.76 5.39M1 13H4V11H1M13 20H11V23H13" })
					})
				})]
			})]
		}), I(G, {
			sx: {
				flex: 1,
				overflow: "auto"
			},
			children: I(eQ, { children: n.default?.() })
		})]
	});
}, { displayName: "Scaffold" }), e5 = m(() => {
	let e = e1.use(), t = $.use();
	return E([() => e.value.seed, () => e.value.rules], ([n, t]) => {
		e.next((e) => {
			e.theming = W.create({
				...U,
				...N.fromColors(n).toDesignTokens(t)
			}, { varPrefix: "vk" });
		});
	}), () => {
		let o = e.value.theming, a = o.unstable_css(t, { ":root": o.rootCSSVars });
		return I(e1, {
			value: e,
			children: V(B, {
				value: o,
				children: [
					I(F, {}),
					I(R, { styles: "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n" }),
					I(e2, { children: I(n, {}) })
				]
			}, a.name)
		});
	};
}, { displayName: "App" }), e6 = {};
let e4 = function(e, n, t) {
	let o = Promise.resolve();
	if (n && n.length > 0) {
		let e = document.getElementsByTagName("link"), a = document.querySelector("meta[property=csp-nonce]"), i = a?.nonce || a?.getAttribute("nonce");
		o = Promise.all(n.map((n) => {
			if ((n = "/vuekit/" + n) in e6) return;
			e6[n] = !0;
			let o = n.endsWith(".css");
			if (t) for (let t = e.length - 1; t >= 0; t--) {
				let a = e[t];
				if (a.href === n && (!o || "stylesheet" === a.rel)) return;
			}
			else if (document.querySelector(`link[href="${n}"]${o ? "[rel=\"stylesheet\"]" : ""}`)) return;
			let a = document.createElement("link");
			if (a.rel = o ? "stylesheet" : "modulepreload", o || (a.as = "script"), a.crossOrigin = "", a.href = n, i && a.setAttribute("nonce", i), document.head.appendChild(a), o) return new Promise((e, t) => {
				a.addEventListener("load", e), a.addEventListener("error", () => t(Error(`Unable to preload CSS for ${n}`)));
			});
		}).map((e) => Promise.resolve(e).then((e) => ({
			status: "fulfilled",
			value: e
		}), (e) => ({
			status: "rejected",
			reason: e
		}))));
	}
	function a(e) {
		let n = new Event("vite:preloadError", { cancelable: !0 });
		if (n.payload = e, window.dispatchEvent(n), !n.defaultPrevented) throw e;
	}
	return o.then((n) => {
		for (let e of n || []) "rejected" === e.status && a(e.reason);
		return e().catch(a);
	});
};
var e9 = [
	{
		name: "jsoneditor-jsoneditor",
		path: "/jsoneditor/jsoneditor",
		component: () => e4(() => import("./nodepkg-jsoneditor-example.CF3b1w7g.chunk.js"), __vite__mapDeps([0,1,2,3,4,5,6,7])),
		props: !0
	},
	{
		name: "jsoneditor-jsoneditor-large",
		path: "/jsoneditor/jsoneditor-large",
		component: () => e4(() => import("./nodepkg-jsoneditor-example.jIw-zaFf.chunk.js"), __vite__mapDeps([8,1,2,3,4,5,6,7])),
		props: !0
	},
	{
		name: "vuemarkdown-markdown",
		path: "/vuemarkdown/markdown",
		component: () => e4(() => import("./nodepkg-vuemarkdown-example.C35ZouB0.chunk.js"), __vite__mapDeps([9,1,2,3,4,5])),
		props: !0
	},
	{
		name: "vuematerial",
		path: "/vuematerial",
		component: () => e4(() => import("./nodepkg-vuematerial-example.Cf4bzBQ3.chunk.js"), __vite__mapDeps([10,2,3])),
		props: !0
	},
	{
		name: "vuematerial-buttons",
		path: "/vuematerial/buttons",
		component: () => e4(() => import("./nodepkg-vuematerial-example.BJe-7faB.chunk.js"), __vite__mapDeps([11,1,2,3])),
		props: !0
	},
	{
		name: "vuematerial-textfields",
		path: "/vuematerial/textfields",
		component: () => e4(() => import("./nodepkg-vuematerial-example.1JAjPu7N.chunk.js"), __vite__mapDeps([12,1,2,3])),
		props: !0
	},
	{
		name: "vuematerial-overlays",
		path: "/vuematerial/overlays",
		component: () => e4(() => import("./nodepkg-vuematerial-example.BXCckMEe.chunk.js"), __vite__mapDeps([13,1,2,3])),
		props: !0
	},
	{
		name: "vuematerial-icons",
		path: "/vuematerial/icons",
		component: () => e4(() => import("./nodepkg-vuematerial-example.7evHu5Qr.chunk.js"), __vite__mapDeps([14,1,2,3])),
		props: !0
	},
	{
		name: "vueuikit",
		path: "/vueuikit",
		component: () => e4(() => import("./nodepkg-vueuikit-example.DGWp4S9z.chunk.js"), __vite__mapDeps([15,1,2,3])),
		props: !0
	},
	{
		name: "vueuikit-color-palette",
		path: "/vueuikit/color-palette",
		component: () => e4(() => import("./nodepkg-vueuikit-example.DLeqZa6x.chunk.js"), __vite__mapDeps([16,1,2,3,6,5])),
		props: !0
	},
	{
		name: "vueuikit-color-scheme",
		path: "/vueuikit/color-scheme",
		component: () => e4(() => import("./nodepkg-vueuikit-example.DV5yAcpN.chunk.js"), __vite__mapDeps([17,1,2,3])),
		props: !0
	},
	{
		name: "vueuikit-popper",
		path: "/vueuikit/popper",
		component: () => e4(() => import("./nodepkg-vueuikit-example.GEUN-ir1.chunk.js"), __vite__mapDeps([18,1,2,3])),
		props: !0
	},
	{
		name: "vueuikit-elevation",
		path: "/vueuikit/elevation",
		component: () => e4(() => import("./nodepkg-vueuikit-example.CneMKzJa.chunk.js"), __vite__mapDeps([19,1,2,3])),
		props: !0
	},
	{
		name: "vueuikit-typography",
		path: "/vueuikit/typography",
		component: () => e4(() => import("./nodepkg-vueuikit-example.D0N24hGn.chunk.js"), __vite__mapDeps([20,1,2,3])),
		props: !0
	},
	{
		name: "vueuikit-figma-tokens",
		path: "/vueuikit/figma-tokens",
		component: () => e4(() => import("./nodepkg-vueuikit-example.C2JYsOBM.chunk.js"), __vite__mapDeps([21,1,2,3])),
		props: !0
	},
	{
		name: "vuekit",
		path: "/vuekit",
		component: () => e4(() => import("./nodepkg-vuekit-example.4I8pIOIE.chunk.js"), __vite__mapDeps([22,2,3])),
		props: !0
	},
	{
		name: "vuekit-rx-in-vue",
		path: "/vuekit/rx-in-vue",
		component: () => e4(() => import("./nodepkg-vuekit-example.BrNu4brX.chunk.js"), __vite__mapDeps([23,2,3])),
		props: !0
	},
	{
		name: "index",
		path: "/",
		component: Object.assign(m(() => () => I(G, {
			sx: {
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				textStyle: "sys.display-large"
			},
			children: "Vuekit"
		})), { meta: {
			name: "Home",
			icon: () => e4(() => import("./webapp-vuekit-layout.Bugahw6i.chunk.js"), __vite__mapDeps([24,1,2,3]))
		} }),
		props: !0
	}
];
console.log(e9);
var e8 = o({
	history: a(new URL(document.querySelector("base")?.href ?? "/").pathname),
	routes: e9
});
O(e5).use(e8).mount("#root");
export { eh as A, ew as C, eS as D, eL as E, eu as M, eo as N, e_ as O, ek as S, eI as T, ey as _, eB as a, ex as b, eF as c, eN as d, e$ as f, ev as g, eV as h, ez as i, ep as j, ef as k, eK as l, eM as m, eQ as n, eP as o, eA as p, eU as r, ej as s, e1 as t, eG as u, eg as v, eE as w, eC as x, eb as y };
