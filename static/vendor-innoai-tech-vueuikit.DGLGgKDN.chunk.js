let e;
import { r as n, t } from "./rolldown-runtime.D8qhy2Lt.chunk.js";
import { $t as a, At as r, Bt as s, Ct as o, Dt as i, Et as l, Ft as c, Gt as u, Ht as p, I as d, It as h, Kt as m, L as f, Lt as k, Mt as g, Nt as N, Ot as y, Pt as b, Qt as v, R as x, Rt as w, St as C, Tt as M, U as P, Ut as S, Vt as _, W as A, Wt as T, Xt as L, Zt as R, _t as $, at as D, bt as O, c as H, ct as V, dt as I, en as B, f as F, ft as E, g as j, gt as W, ht as z, i as U, it as q, jt as G, kt as Y, l as X, lt as K, m as Z, nt as J, o as Q, ot as ee, p as en, pt as et, r as ea, rt as er, st as es, tn as eo, u as ei, ut as el, vt as ec, w as eu, wt as ep, xt as ed, yt as eh, z as em, zt as ef } from "./vendor-innoai-tech-vuekit.C7UnEwu7.chunk.js";
import { t as ek } from "./vendor-rxjs.CsNJjMpf.chunk.js";
var eg, eN, ey, eb, ev, ex, ew, eC, eM = void 0, eP = "undefined" != typeof window && window.trustedTypes;
if (eP) try {
	eM = eP.createPolicy("vue", { createHTML: (e) => e });
} catch (e) {}
var eS = eM ? (e) => eM.createHTML(e) : (e) => e, e_ = "undefined" != typeof document ? document : null, eA = e_ && e_.createElement("template"), eT = "transition", eL = "animation", eR = Symbol("_vtc"), e$ = {
	name: String,
	type: String,
	css: {
		type: Boolean,
		default: !0
	},
	duration: [
		String,
		Number,
		Object
	],
	enterFromClass: String,
	enterActiveClass: String,
	enterToClass: String,
	appearFromClass: String,
	appearActiveClass: String,
	appearToClass: String,
	leaveFromClass: String,
	leaveActiveClass: String,
	leaveToClass: String
}, eD = O({}, er, e$), eO = ((eg = (e, { slots: n }) => el(J, function(e) {
	let n = {};
	for (let t in e) t in e$ || (n[t] = e[t]);
	if (!1 === e.css) return n;
	let { name: t = "v", type: a, duration: r, enterFromClass: s = `${t}-enter-from`, enterActiveClass: o = `${t}-enter-active`, enterToClass: i = `${t}-enter-to`, appearFromClass: c = s, appearActiveClass: u = o, appearToClass: p = i, leaveFromClass: d = `${t}-leave-from`, leaveActiveClass: h = `${t}-leave-active`, leaveToClass: m = `${t}-leave-to` } = e, f = function(e) {
		if (null == e) return null;
		{
			if (l(e)) return [function(e) {
				return G(e);
			}(e.enter), function(e) {
				return G(e);
			}(e.leave)];
			let n = function(e) {
				return G(e);
			}(e);
			return [n, n];
		}
	}(r), k = f && f[0], g = f && f[1], { onBeforeEnter: N, onEnter: y, onEnterCancelled: b, onLeave: v, onLeaveCancelled: x, onBeforeAppear: w = N, onAppear: C = y, onAppearCancelled: M = b } = n, P = (e, n, t, a) => {
		e._enterCancelled = a, eB(e, n ? p : i), eB(e, n ? u : o), t && t();
	}, S = (e, n) => {
		e._isLeaving = !1, eB(e, d), eB(e, m), eB(e, h), n && n();
	}, _ = (e) => (n, t) => {
		let r = e ? C : y, o = () => P(n, e, t);
		eH(r, [n, o]), eF(() => {
			eB(n, e ? c : s), eI(n, e ? p : i), eV(r) || ej(n, a, k, o);
		});
	};
	return O(n, {
		onBeforeEnter(e) {
			eH(N, [e]), eI(e, s), eI(e, o);
		},
		onBeforeAppear(e) {
			eH(w, [e]), eI(e, c), eI(e, u);
		},
		onEnter: _(!1),
		onAppear: _(!0),
		onLeave(e, n) {
			e._isLeaving = !0;
			let t = () => S(e, n);
			eI(e, d), e._enterCancelled ? (eI(e, h), eU(e)) : (eU(e), eI(e, h)), eF(() => {
				e._isLeaving && (eB(e, d), eI(e, m), eV(v) || ej(e, a, g, t));
			}), eH(v, [e, t]);
		},
		onEnterCancelled(e) {
			P(e, !1, void 0, !0), eH(b, [e]);
		},
		onAppearCancelled(e) {
			P(e, !0, void 0, !0), eH(M, [e]);
		},
		onLeaveCancelled(e) {
			S(e), eH(x, [e]);
		}
	});
}(e), n)).displayName = "Transition", eg.props = eD, eg), eH = (e, n = []) => {
	o(e) ? e.forEach((e) => e(...n)) : e && e(...n);
}, eV = (e) => !!e && (o(e) ? e.some((e) => e.length > 1) : e.length > 1);
function eI(e, n) {
	n.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[eR] || (e[eR] = /* @__PURE__ */ new Set())).add(n);
}
function eB(e, n) {
	n.split(/\s+/).forEach((n) => n && e.classList.remove(n));
	let t = e[eR];
	t && (t.delete(n), t.size || (e[eR] = void 0));
}
function eF(e) {
	requestAnimationFrame(() => {
		requestAnimationFrame(e);
	});
}
var eE = 0;
function ej(e, n, t, a) {
	let r = e._endId = ++eE, s = () => {
		r === e._endId && a();
	};
	if (null != t) return setTimeout(s, t);
	let { type: o, timeout: i, propCount: l } = function(e, n) {
		let t = window.getComputedStyle(e), a = (e) => (t[e] || "").split(", "), r = a(`${eT}Delay`), s = a(`${eT}Duration`), o = eW(r, s), i = a(`${eL}Delay`), l = a(`${eL}Duration`), c = eW(i, l), u = null, p = 0, d = 0;
		n === eT ? o > 0 && (u = eT, p = o, d = s.length) : n === eL ? c > 0 && (u = eL, p = c, d = l.length) : d = (u = (p = Math.max(o, c)) > 0 ? o > c ? eT : eL : null) ? u === eT ? s.length : l.length : 0;
		let h = u === eT && /\b(?:transform|all)(?:,|$)/.test(a(`${eT}Property`).toString());
		return {
			type: u,
			timeout: p,
			propCount: d,
			hasTransform: h
		};
	}(e, n);
	if (!o) return a();
	let c = o + "end", u = 0, p = () => {
		e.removeEventListener(c, d), s();
	}, d = (n) => {
		n.target === e && ++u >= l && p();
	};
	setTimeout(() => {
		u < l && p();
	}, i + 1), e.addEventListener(c, d);
}
function eW(e, n) {
	for (; e.length < n.length;) e = e.concat(e);
	return Math.max(...n.map((n, t) => ez(n) + ez(e[t])));
}
function ez(e) {
	return "auto" === e ? 0 : 1e3 * Number(e.slice(0, -1).replace(",", "."));
}
function eU(e) {
	return (e ? e.ownerDocument : document).body.offsetHeight;
}
var eq = Symbol("_vod"), eG = Symbol("_vsh"), eY = Symbol(""), eX = /(?:^|;)\s*display\s*:/, eK = /\s*!important$/;
function eZ(e, n, t) {
	if (o(t)) t.forEach((t) => eZ(e, n, t));
	else if (t ??= "", n.startsWith("--")) e.setProperty(n, t);
	else {
		let a = function(e, n) {
			let t = eQ[n];
			if (t) return t;
			let a = ec(n);
			if ("filter" !== a && a in e) return eQ[n] = a;
			a = eh(a);
			for (let t = 0; t < eJ.length; t++) {
				let r = eJ[t] + a;
				if (r in e) return eQ[n] = r;
			}
			return n;
		}(e, n);
		eK.test(t) ? e.setProperty(ed(a), t.replace(eK, ""), "important") : e[a] = t;
	}
}
var eJ = [
	"Webkit",
	"Moz",
	"ms"
], eQ = {}, e1 = "http://www.w3.org/1999/xlink";
function e0(e, n, t, a, s, o = y(n)) {
	a && n.startsWith("xlink:") ? null == t ? e.removeAttributeNS(e1, n.slice(6, n.length)) : e.setAttributeNS(e1, n, t) : null == t || o && !C(t) ? e.removeAttribute(n) : e.setAttribute(n, o ? "" : r(t) ? String(t) : t);
}
function e2(e, n, t, a, r) {
	if ("innerHTML" === n || "textContent" === n) {
		null != t && (e[n] = "innerHTML" === n ? eS(t) : t);
		return;
	}
	let s = e.tagName;
	if ("value" === n && "PROGRESS" !== s && !s.includes("-")) {
		let a = "OPTION" === s ? e.getAttribute("value") || "" : e.value, r = null == t ? "checkbox" === e.type ? "on" : "" : String(t);
		a === r && "_value" in e || (e.value = r), t ?? e.removeAttribute(n), e._value = t;
		return;
	}
	let o = !1;
	if ("" === t || null == t) {
		let a = typeof e[n];
		"boolean" === a ? t = C(t) : null == t && "string" === a ? (t = "", o = !0) : "number" === a && (t = 0, o = !0);
	}
	try {
		e[n] = t;
	} catch (e) {}
	o && e.removeAttribute(r || n);
}
var e5 = Symbol("_vei"), e4 = /(?:Once|Passive|Capture)$/, e3 = 0, e6 = Promise.resolve(), e9 = (e) => 111 === e.charCodeAt(0) && 110 === e.charCodeAt(1) && e.charCodeAt(2) > 96 && 123 > e.charCodeAt(2), e8 = O({ patchProp: (e, n, t, a, r, s) => {
	let l = "svg" === r;
	if ("class" === n) {
		var c = a;
		let n = e[eR];
		n && (c = (c ? [c, ...n] : [...n]).join(" ")), null == c ? e.removeAttribute("class") : l ? e.setAttribute("class", c) : e.className = c;
	} else "style" === n ? function(e, n, t) {
		let a = e.style, r = Y(t), s = !1;
		if (t && !r) {
			if (n) if (Y(n)) for (let e of n.split(";")) {
				let n = e.slice(0, e.indexOf(":")).trim();
				t[n] ?? eZ(a, n, "");
			}
			else for (let e in n) t[e] ?? eZ(a, e, "");
			for (let e in t) "display" === e && (s = !0), eZ(a, e, t[e]);
		} else if (r) {
			if (n !== t) {
				let e = a[eY];
				e && (t += ";" + e), a.cssText = t, s = eX.test(t);
			}
		} else n && e.removeAttribute("style");
		eq in e && (e[eq] = s ? a.display : "", e[eG] && (a.display = "none"));
	}(e, t, a) : i(n) ? M(n) || function(e, n, t, a, r = null) {
		let s = e[e5] || (e[e5] = {}), i = s[n];
		if (a && i) i.value = a;
		else {
			var l;
			let [t, c] = function(e) {
				let n;
				if (e4.test(e)) {
					let t;
					for (n = {}; t = e.match(e4);) e = e.slice(0, e.length - t[0].length), n[t[0].toLowerCase()] = !0;
				}
				return [":" === e[2] ? e.slice(3) : ed(e.slice(2)), n];
			}(n);
			a ? (l = s[n] = function(e, n) {
				let t = (e) => {
					if (e._vts) {
						if (e._vts <= t.attached) return;
					} else e._vts = Date.now();
					ee(function(e, n) {
						if (!o(n)) return n;
						{
							let t = e.stopImmediatePropagation;
							return e.stopImmediatePropagation = () => {
								t.call(e), e._stopped = !0;
							}, n.map((e) => (n) => !n._stopped && e && e(n));
						}
					}(e, t.value), n, 5, [e]);
				};
				return t.value = e, t.attached = e3 || (e6.then(() => e3 = 0), e3 = Date.now()), t;
			}(a, r), e.addEventListener(t, l, c)) : i && (e.removeEventListener(t, i, c), s[n] = void 0);
		}
	}(e, n, 0, a, s) : ("." === n[0] ? (n = n.slice(1), 0) : "^" === n[0] ? (n = n.slice(1), 1) : !function(e, n, t, a) {
		if (a) return !!("innerHTML" === n || "textContent" === n || n in e && e9(n) && ep(t));
		if ("spellcheck" === n || "draggable" === n || "translate" === n || "autocorrect" === n || "sandbox" === n && "IFRAME" === e.tagName || "form" === n || "list" === n && "INPUT" === e.tagName || "type" === n && "TEXTAREA" === e.tagName) return !1;
		if ("width" === n || "height" === n) {
			let n = e.tagName;
			if ("IMG" === n || "VIDEO" === n || "CANVAS" === n || "SOURCE" === n) return !1;
		}
		return !(e9(n) && Y(t)) && n in e;
	}(e, n, a, l)) ? e._isVueCE && (/[A-Z]/.test(n) || !Y(a)) ? e2(e, ec(n), a, s, n) : ("true-value" === n ? e._trueValue = a : "false-value" === n && (e._falseValue = a), e0(e, n, a, l)) : (e2(e, n, a), e.tagName.includes("-") || "value" !== n && "checked" !== n && "selected" !== n || e0(e, n, a, l, s, "value" !== n));
} }, {
	insert: (e, n, t) => {
		n.insertBefore(e, t || null);
	},
	remove: (e) => {
		let n = e.parentNode;
		n && n.removeChild(e);
	},
	createElement: (e, n, t, a) => {
		let r = "svg" === n ? e_.createElementNS("http://www.w3.org/2000/svg", e) : "mathml" === n ? e_.createElementNS("http://www.w3.org/1998/Math/MathML", e) : t ? e_.createElement(e, { is: t }) : e_.createElement(e);
		return "select" === e && a && null != a.multiple && r.setAttribute("multiple", a.multiple), r;
	},
	createText: (e) => e_.createTextNode(e),
	createComment: (e) => e_.createComment(e),
	setText: (e, n) => {
		e.nodeValue = n;
	},
	setElementText: (e, n) => {
		e.textContent = n;
	},
	parentNode: (e) => e.parentNode,
	nextSibling: (e) => e.nextSibling,
	querySelector: (e) => e_.querySelector(e),
	setScopeId(e, n) {
		e.setAttribute(n, "");
	},
	insertStaticContent(e, n, t, a, r, s) {
		let o = t ? t.previousSibling : n.lastChild;
		if (r && (r === s || r.nextSibling)) for (; n.insertBefore(r.cloneNode(!0), t), r !== s && (r = r.nextSibling););
		else {
			eA.innerHTML = eS("svg" === a ? `<svg>${e}</svg>` : "mathml" === a ? `<math>${e}</math>` : e);
			let r = eA.content;
			if ("svg" === a || "mathml" === a) {
				let e = r.firstChild;
				for (; e.firstChild;) r.appendChild(e.firstChild);
				r.removeChild(e);
			}
			n.insertBefore(r, t);
		}
		return [o ? o.nextSibling : n.firstChild, t ? t.previousSibling : n.lastChild];
	}
}), e7 = (...e) => {
	let n = (ex || (ex = V(e8))).createApp(...e), { mount: t } = n;
	return n.mount = (e) => {
		var a, r;
		let s = Y(a = e) ? document.querySelector(a) : a;
		if (!s) return;
		let o = n._component;
		ep(o) || o.render || o.template || (o.template = s.innerHTML), 1 === s.nodeType && (s.textContent = "");
		let i = t(s, !1, (r = s) instanceof SVGElement ? "svg" : "function" == typeof MathMLElement && r instanceof MathMLElement ? "mathml" : void 0);
		return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), i;
	}, n;
}, ne = function() {}, nn = function() {}, nt = (e, n, t) => Math.min(Math.max(t, e), n);
function na(e, n) {
	return e * Math.sqrt(1 - n * n);
}
var nr = ["duration", "bounce"], ns = [
	"stiffness",
	"damping",
	"mass"
];
function no(e, n) {
	return n.some((n) => void 0 !== e[n]);
}
function ni(e) {
	var { from: n = 0, to: t = 1, restSpeed: a = 2, restDelta: r } = e, s = ek(e, [
		"from",
		"to",
		"restSpeed",
		"restDelta"
	]);
	let o = {
		done: !1,
		value: n
	}, { stiffness: i, damping: l, mass: c, velocity: u, duration: p, isResolvedFromDuration: d } = function(e) {
		let n = Object.assign({
			velocity: 0,
			stiffness: 100,
			damping: 10,
			mass: 1,
			isResolvedFromDuration: !1
		}, e);
		if (!no(e, ns) && no(e, nr)) {
			let t = function({ duration: e = 800, bounce: n = .25, velocity: t = 0, mass: a = 1 }) {
				let r, s;
				ne(e <= 1e4, "Spring duration must be 10 seconds or less");
				let o = 1 - n;
				o = nt(.05, 1, o), e = nt(.01, 10, e / 1e3), o < 1 ? (r = (n) => {
					let a = n * o, r = a * e;
					return .001 - (a - t) / na(n, o) * Math.exp(-r);
				}, s = (n) => {
					let a = n * o * e, s = Math.pow(o, 2) * Math.pow(n, 2) * e, i = Math.exp(-a), l = na(Math.pow(n, 2), o);
					return (-r(n) + .001 > 0 ? -1 : 1) * ((a * t + t - s) * i) / l;
				}) : (r = (n) => -.001 + Math.exp(-n * e) * ((n - t) * e + 1), s = (n) => e * e * (t - n) * Math.exp(-n * e));
				let i = function(e, n, t) {
					let a = t;
					for (let t = 1; t < 12; t++) a -= e(a) / n(a);
					return a;
				}(r, s, 5 / e);
				if (e *= 1e3, isNaN(i)) return {
					stiffness: 100,
					damping: 10,
					duration: e
				};
				{
					let n = Math.pow(i, 2) * a;
					return {
						stiffness: n,
						damping: 2 * o * Math.sqrt(a * n),
						duration: e
					};
				}
			}(e);
			(n = Object.assign(Object.assign(Object.assign({}, n), t), {
				velocity: 0,
				mass: 1
			})).isResolvedFromDuration = !0;
		}
		return n;
	}(s), h = nl, m = nl;
	function f() {
		let e = u ? -(u / 1e3) : 0, a = t - n, s = l / (2 * Math.sqrt(i * c)), o = Math.sqrt(i / c) / 1e3;
		if (void 0 === r && (r = Math.min(Math.abs(t - n) / 100, .4)), s < 1) {
			let n = na(o, s);
			h = (r) => t - Math.exp(-s * o * r) * ((e + s * o * a) / n * Math.sin(n * r) + a * Math.cos(n * r)), m = (t) => {
				let r = Math.exp(-s * o * t);
				return s * o * r * (Math.sin(n * t) * (e + s * o * a) / n + a * Math.cos(n * t)) - r * (Math.cos(n * t) * (e + s * o * a) - n * a * Math.sin(n * t));
			};
		} else if (1 === s) h = (n) => t - Math.exp(-o * n) * (a + (e + o * a) * n);
		else {
			let n = o * Math.sqrt(s * s - 1);
			h = (r) => {
				let i = Math.exp(-s * o * r), l = Math.min(n * r, 300);
				return t - i * ((e + s * o * a) * Math.sinh(l) + n * a * Math.cosh(l)) / n;
			};
		}
	}
	return f(), {
		next: (e) => {
			let n = h(e);
			if (d) o.done = e >= p;
			else {
				let s = Math.abs(1e3 * m(e)) <= a, i = Math.abs(t - n) <= r;
				o.done = s && i;
			}
			return o.value = o.done ? t : n, o;
		},
		flipTarget: () => {
			u = -u, [n, t] = [t, n], f();
		}
	};
}
ni.needsInterpolation = (e, n) => "string" == typeof e || "string" == typeof n;
var nl = (e) => 0, nc = (e, n, t) => {
	let a = n - e;
	return 0 === a ? 1 : (t - e) / a;
}, nu = (e, n, t) => -t * e + t * n + e, np = (e, n) => (t) => Math.max(Math.min(t, n), e), nd = (e) => e % 1 ? Number(e.toFixed(5)) : e, nh = /(-)?([\d]*\.?[\d])+/g, nm = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi, nf = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function nk(e) {
	return "string" == typeof e;
}
var ng = {
	test: (e) => "number" == typeof e,
	parse: parseFloat,
	transform: (e) => e
}, nN = Object.assign(Object.assign({}, ng), { transform: np(0, 1) }), ny = {
	test: (e) => nk(e) && e.endsWith("%") && 1 === e.split(" ").length,
	parse: parseFloat,
	transform: (e) => `${e}%`
}, nb = (e, n) => (t) => !!(nk(t) && nf.test(t) && t.startsWith(e) || n && Object.prototype.hasOwnProperty.call(t, n)), nv = (e, n, t) => (a) => {
	if (!nk(a)) return a;
	let [r, s, o, i] = a.match(nh);
	return {
		[e]: parseFloat(r),
		[n]: parseFloat(s),
		[t]: parseFloat(o),
		alpha: void 0 !== i ? parseFloat(i) : 1
	};
}, nx = {
	test: nb("hsl", "hue"),
	parse: nv("hue", "saturation", "lightness"),
	transform: ({ hue: e, saturation: n, lightness: t, alpha: a = 1 }) => "hsla(" + Math.round(e) + ", " + ny.transform(nd(n)) + ", " + ny.transform(nd(t)) + ", " + nd(nN.transform(a)) + ")"
}, nw = np(0, 255), nC = Object.assign(Object.assign({}, ng), { transform: (e) => Math.round(nw(e)) }), nM = {
	test: nb("rgb", "red"),
	parse: nv("red", "green", "blue"),
	transform: ({ red: e, green: n, blue: t, alpha: a = 1 }) => "rgba(" + nC.transform(e) + ", " + nC.transform(n) + ", " + nC.transform(t) + ", " + nd(nN.transform(a)) + ")"
}, nP = {
	test: nb("#"),
	parse: function(e) {
		let n = "", t = "", a = "", r = "";
		return e.length > 5 ? (n = e.substr(1, 2), t = e.substr(3, 2), a = e.substr(5, 2), r = e.substr(7, 2)) : (n = e.substr(1, 1), t = e.substr(2, 1), a = e.substr(3, 1), r = e.substr(4, 1), n += n, t += t, a += a, r += r), {
			red: parseInt(n, 16),
			green: parseInt(t, 16),
			blue: parseInt(a, 16),
			alpha: r ? parseInt(r, 16) / 255 : 1
		};
	},
	transform: nM.transform
}, nS = (e) => nM.test(e) || nP.test(e) || nx.test(e), n_ = (e) => nM.test(e) ? nM.parse(e) : nx.test(e) ? nx.parse(e) : nP.parse(e), nA = (e) => nk(e) ? e : e.hasOwnProperty("red") ? nM.transform(e) : nx.transform(e), nT = "${c}", nL = "${n}";
function nR(e) {
	"number" == typeof e && (e = `${e}`);
	let n = [], t = 0, a = e.match(nm);
	a && (t = a.length, e = e.replace(nm, nT), n.push(...a.map(n_)));
	let r = e.match(nh);
	return r && (e = e.replace(nh, nL), n.push(...r.map(ng.parse))), {
		values: n,
		numColors: t,
		tokenised: e
	};
}
var n$ = function(e) {
	let { values: n, numColors: t, tokenised: a } = nR(e), r = n.length;
	return (e) => {
		let n = a;
		for (let a = 0; a < r; a++) n = n.replace(a < t ? nT : nL, a < t ? nA(e[a]) : nd(e[a]));
		return n;
	};
};
function nD(e, n, t) {
	return (t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6) ? e + (n - e) * 6 * t : t < .5 ? n : t < 2 / 3 ? e + (n - e) * (2 / 3 - t) * 6 : e;
}
function nO({ hue: e, saturation: n, lightness: t, alpha: a }) {
	e /= 360, t /= 100;
	let r = 0, s = 0, o = 0;
	if (n /= 100) {
		let a = t < .5 ? t * (1 + n) : t + n - t * n, i = 2 * t - a;
		r = nD(i, a, e + 1 / 3), s = nD(i, a, e), o = nD(i, a, e - 1 / 3);
	} else r = s = o = t;
	return {
		red: Math.round(255 * r),
		green: Math.round(255 * s),
		blue: Math.round(255 * o),
		alpha: a
	};
}
var nH = (e, n, t) => {
	let a = e * e;
	return Math.sqrt(Math.max(0, t * (n * n - a) + a));
}, nV = [
	nP,
	nM,
	nx
], nI = (e) => nV.find((n) => n.test(e)), nB = (e) => `'${e}' is not an animatable color. Use the equivalent color code instead.`, nF = (e, n) => {
	let t = nI(e), a = nI(n);
	nn(!!t, nB(e)), nn(!!a, nB(n));
	let r = t.parse(e), s = a.parse(n);
	t === nx && (r = nO(r), t = nM), a === nx && (s = nO(s), a = nM);
	let o = Object.assign({}, r);
	return (e) => {
		for (let n in o) "alpha" !== n && (o[n] = nH(r[n], s[n], e));
		return o.alpha = nu(r.alpha, s.alpha, e), t.transform(o);
	};
}, nE = (e, n) => (t) => n(e(t)), nj = (...e) => e.reduce(nE);
function nW(e, n) {
	return "number" == typeof e ? (t) => nu(e, n, t) : nS(e) ? nF(e, n) : nG(e, n);
}
var nz = (e, n) => {
	let t = [...e], a = t.length, r = e.map((e, t) => nW(e, n[t]));
	return (e) => {
		for (let n = 0; n < a; n++) t[n] = r[n](e);
		return t;
	};
}, nU = (e, n) => {
	let t = Object.assign(Object.assign({}, e), n), a = {};
	for (let r in t) void 0 !== e[r] && void 0 !== n[r] && (a[r] = nW(e[r], n[r]));
	return (e) => {
		for (let n in a) t[n] = a[n](e);
		return t;
	};
};
function nq(e) {
	let n = nR(e).values, t = n.length, a = 0, r = 0, s = 0;
	for (let e = 0; e < t; e++) a || "number" == typeof n[e] ? a++ : void 0 !== n[e].hue ? s++ : r++;
	return {
		parsed: n,
		numNumbers: a,
		numRGB: r,
		numHSL: s
	};
}
var nG = (e, n) => {
	let t = n$(n), a = nq(e), r = nq(n);
	return a.numHSL === r.numHSL && a.numRGB === r.numRGB && a.numNumbers >= r.numNumbers ? nj(nz(a.parsed, r.parsed), t) : (ne(!0, `Complex values '${e}' and '${n}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), (t) => `${t > 0 ? n : e}`);
}, nY = (e, n) => (t) => nu(e, n, t);
function nX(e, n, { clamp: t = !0, ease: a, mixer: r } = {}) {
	let s = e.length;
	nn(s === n.length, "Both input and output ranges must be the same length"), nn(!a || !Array.isArray(a) || a.length === s - 1, "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."), e[0] > e[s - 1] && (e = [].concat(e), n = [].concat(n), e.reverse(), n.reverse());
	let o = function(e, n, t) {
		let a = [], r = t || function(e) {
			if ("number" == typeof e) return nY;
			if ("string" == typeof e) if (nS(e)) return nF;
			else return nG;
			return Array.isArray(e) ? nz : "object" == typeof e ? nU : void 0;
		}(e[0]), s = e.length - 1;
		for (let t = 0; t < s; t++) {
			let s = r(e[t], e[t + 1]);
			n && (s = nj(Array.isArray(n) ? n[t] : n, s)), a.push(s);
		}
		return a;
	}(n, a, r), i = 2 === s ? function([e, n], [t]) {
		return (a) => t(nc(e, n, a));
	}(e, o) : function(e, n) {
		let t = e.length, a = t - 1;
		return (r) => {
			let s = 0, o = !1;
			if (r <= e[0] ? o = !0 : r >= e[a] && (s = a - 1, o = !0), !o) {
				let n = 1;
				for (; n < t && !(e[n] > r) && n !== a; n++);
				s = n - 1;
			}
			let i = nc(e[s], e[s + 1], r);
			return n[s](i);
		};
	}(e, o);
	return t ? (n) => i(nt(e[0], e[s - 1], n)) : i;
}
var nK = (e) => e, nZ = (e = (e) => Math.pow(e, 2), (n) => n <= .5 ? e(2 * n) / 2 : (2 - e(2 * (1 - n))) / 2);
function nJ({ from: e = 0, to: n = 1, ease: t, offset: a, duration: r = 300 }) {
	var s;
	let o = {
		done: !1,
		value: e
	}, i = Array.isArray(n) ? n : [e, n], l = (s = a && a.length === i.length ? a : function(e) {
		let n = e.length;
		return e.map((e, t) => 0 !== t ? t / (n - 1) : 0);
	}(i), s.map((e) => e * r));
	function c() {
		return nX(l, i, { ease: Array.isArray(t) ? t : i.map(() => t || nZ).splice(0, i.length - 1) });
	}
	let u = c();
	return {
		next: (e) => (o.value = u(e), o.done = e >= r, o),
		flipTarget: () => {
			i.reverse(), u = c();
		}
	};
}
var nQ = {
	keyframes: nJ,
	spring: ni,
	decay: function({ velocity: e = 0, from: n = 0, power: t = .8, timeConstant: a = 350, restDelta: r = .5, modifyTarget: s }) {
		let o = {
			done: !1,
			value: n
		}, i = t * e, l = n + i, c = void 0 === s ? l : s(l);
		return c !== l && (i = c - n), {
			next: (e) => {
				let n = -i * Math.exp(-e / a);
				return o.done = !(n > r || n < -r), o.value = o.done ? c : c + n, o;
			},
			flipTarget: () => {}
		};
	}
}, n1 = 1 / 60 * 1e3, n0 = "undefined" != typeof performance ? () => performance.now() : () => Date.now(), n2 = "undefined" != typeof window ? (e) => window.requestAnimationFrame(e) : (e) => setTimeout(() => e(n0()), n1), n5 = !0, n4 = !1, n3 = !1, n6 = {
	delta: 0,
	timestamp: 0
}, n9 = [
	"read",
	"update",
	"preRender",
	"render",
	"postRender"
], n8 = n9.reduce((e, n) => (e[n] = function(e) {
	let n = [], t = [], a = 0, r = !1, s = !1, o = /* @__PURE__ */ new WeakSet(), i = {
		schedule: (e, s = !1, i = !1) => {
			let l = i && r, c = l ? n : t;
			return s && o.add(e), -1 === c.indexOf(e) && (c.push(e), l && r && (a = n.length)), e;
		},
		cancel: (e) => {
			let n = t.indexOf(e);
			-1 !== n && t.splice(n, 1), o.delete(e);
		},
		process: (l) => {
			if (r) {
				s = !0;
				return;
			}
			if (r = !0, [n, t] = [t, n], t.length = 0, a = n.length) for (let t = 0; t < a; t++) {
				let a = n[t];
				a(l), o.has(a) && (i.schedule(a), e());
			}
			r = !1, s && (s = !1, i.process(l));
		}
	};
	return i;
}(() => n4 = !0), e), {}), n7 = n9.reduce((e, n) => {
	let t = n8[n];
	return e[n] = (e, n = !1, a = !1) => (n4 || ta(), t.schedule(e, n, a)), e;
}, {}), te = n9.reduce((e, n) => (e[n] = n8[n].cancel, e), {}), tn = (e) => n8[e].process(n6), tt = (e) => {
	n4 = !1, n6.delta = n5 ? n1 : Math.max(Math.min(e - n6.timestamp, 40), 1), n6.timestamp = e, n3 = !0, n9.forEach(tn), n3 = !1, n4 && (n5 = !1, n2(tt));
}, ta = () => {
	n4 = !0, n5 = !0, n3 || n2(tt);
};
function tr(e, n, t = 0) {
	return e - n - t;
}
var ts = (e) => {
	let n = ({ delta: n }) => e(n);
	return {
		start: () => n7.update(n, !0),
		stop: () => te.update(n)
	};
};
function to(e) {
	let n, t, a;
	var r, { from: s, autoplay: o = !0, driver: i = ts, elapsed: l = 0, repeat: c = 0, repeatType: u = "loop", repeatDelay: p = 0, onPlay: d, onStop: h, onComplete: m, onRepeat: f, onUpdate: k } = e, g = ek(e, [
		"from",
		"autoplay",
		"driver",
		"elapsed",
		"repeat",
		"repeatType",
		"repeatDelay",
		"onPlay",
		"onStop",
		"onComplete",
		"onRepeat",
		"onUpdate"
	]);
	let { to: N } = g, y = 0, b = g.duration, v = !1, x = !0, w = function(e) {
		if (Array.isArray(e.to)) return nJ;
		if (nQ[e.type]) return nQ[e.type];
		let n = new Set(Object.keys(e));
		if (n.has("ease") || n.has("duration") && !n.has("dampingRatio"));
		else if (n.has("dampingRatio") || n.has("stiffness") || n.has("mass") || n.has("damping") || n.has("restSpeed") || n.has("restDelta")) return ni;
		return nJ;
	}(g);
	null != (r = w.needsInterpolation) && r.call(w, s, N) && (a = nX([0, 100], [s, N], { clamp: !1 }), s = 0, N = 100);
	let C = w(Object.assign(Object.assign({}, g), {
		from: s,
		to: N
	}));
	return o && (d?.(), (n = i(function(e) {
		if (x || (e = -e), l += e, !v) {
			let e = C.next(Math.max(0, l));
			t = e.value, a && (t = a(t)), v = x ? e.done : l <= 0;
		}
		if (k?.(t), v) if (0 === y && (b ??= l), y < c) {
			var r = l;
			(x ? r >= b + p : r <= -p) && (y++, "reverse" === u ? l = function(e, n, t = 0, a = !0) {
				return a ? tr(n + -e, n, t) : n - (e - n) + t;
			}(l, b, p, x = y % 2 == 0) : (l = tr(l, b, p), "mirror" === u && C.flipTarget()), v = !1, f && f());
		} else n.stop(), m && m();
	})).start()), { stop: () => {
		h?.(), n.stop();
	} };
}
var ti = (e, n) => 1 - 3 * n + 3 * e, tl = (e, n) => 3 * n - 6 * e, tc = (e, n, t) => ((ti(n, t) * e + tl(n, t)) * e + 3 * n) * e, tu = (e, n, t) => 3 * ti(n, t) * e * e + 2 * tl(n, t) * e + 3 * n, tp = {
	animationIterationCount: 1,
	aspectRatio: 1,
	borderImageOutset: 1,
	borderImageSlice: 1,
	borderImageWidth: 1,
	boxFlex: 1,
	boxFlexGroup: 1,
	boxOrdinalGroup: 1,
	columnCount: 1,
	columns: 1,
	flex: 1,
	flexGrow: 1,
	flexPositive: 1,
	flexShrink: 1,
	flexNegative: 1,
	flexOrder: 1,
	gridRow: 1,
	gridRowEnd: 1,
	gridRowSpan: 1,
	gridRowStart: 1,
	gridColumn: 1,
	gridColumnEnd: 1,
	gridColumnSpan: 1,
	gridColumnStart: 1,
	msGridRow: 1,
	msGridRowSpan: 1,
	msGridColumn: 1,
	msGridColumnSpan: 1,
	fontWeight: 1,
	lineHeight: 1,
	opacity: 1,
	order: 1,
	orphans: 1,
	scale: 1,
	tabSize: 1,
	widows: 1,
	zIndex: 1,
	zoom: 1,
	WebkitLineClamp: 1,
	fillOpacity: 1,
	floodOpacity: 1,
	stopOpacity: 1,
	strokeDasharray: 1,
	strokeDashoffset: 1,
	strokeMiterlimit: 1,
	strokeOpacity: 1,
	strokeWidth: 1
}, td = /[A-Z]|^ms/g, th = /_EMO_([^_]+?)_([^]*?)_EMO_/g, tm = function(e) {
	return 45 === e.charCodeAt(1);
}, tf = function(e) {
	return null != e && "boolean" != typeof e;
}, tk = (eN = function(e) {
	return tm(e) ? e : e.replace(td, "-$&").toLowerCase();
}, ey = Object.create(null), function(e) {
	return void 0 === ey[e] && (ey[e] = eN(e)), ey[e];
}), tg = function(e, n) {
	switch (e) {
		case "animation":
		case "animationName": if ("string" == typeof n) return n.replace(th, function(e, n, t) {
			return ew = {
				name: n,
				styles: t,
				next: ew
			}, n;
		});
	}
	return 1 === tp[e] || tm(e) || "number" != typeof n || 0 === n ? n : n + "px";
};
function tN(e, n, t) {
	if (null == t) return "";
	if (void 0 !== t.__emotion_styles) return t;
	switch (typeof t) {
		case "boolean": return "";
		case "object":
			if (1 === t.anim) return ew = {
				name: t.name,
				styles: t.styles,
				next: ew
			}, t.name;
			if (void 0 !== t.styles) {
				var a = t.next;
				if (void 0 !== a) for (; void 0 !== a;) ew = {
					name: a.name,
					styles: a.styles,
					next: ew
				}, a = a.next;
				return t.styles + ";";
			}
			return function(e, n, t) {
				var a = "";
				if (Array.isArray(t)) for (var r = 0; r < t.length; r++) a += tN(e, n, t[r]) + ";";
				else for (var s in t) {
					var o = t[s];
					if ("object" != typeof o) null != n && void 0 !== n[o] ? a += s + "{" + n[o] + "}" : tf(o) && (a += tk(s) + ":" + tg(s, o) + ";");
					else if (Array.isArray(o) && "string" == typeof o[0] && (null == n || void 0 === n[o[0]])) for (var i = 0; i < o.length; i++) tf(o[i]) && (a += tk(s) + ":" + tg(s, o[i]) + ";");
					else {
						var l = tN(e, n, o);
						switch (s) {
							case "animation":
							case "animationName":
								a += tk(s) + ":" + l + ";";
								break;
							default: a += s + "{" + l + "}";
						}
					}
				}
				return a;
			}(e, n, t);
		case "function": if (void 0 !== e) {
			var r = ew, s = t(e);
			return ew = r, tN(e, n, s);
		}
	}
	if (null == n) return t;
	var o = n[t];
	return void 0 !== o ? o : t;
}
var ty = /label:\s*([^\s;{]+)\s*(;|$)/g;
function tb() {
	return new Proxy({}, { get: (e, n) => n });
}
let tv = tb(), tx = {
	paddingX: [tv.paddingLeft, tv.paddingRight],
	paddingY: [tv.paddingTop, tv.paddingBottom],
	marginX: [tv.marginInlineStart, tv.marginInlineEnd],
	marginY: [tv.marginTop, tv.marginBottom],
	borderX: [tv.borderLeft, tv.borderRight],
	borderY: [tv.borderTop, tv.borderBottom],
	color: [tv.color, tv.fill],
	borderTopRadius: [tv.borderTopLeftRadius, tv.borderTopRightRadius],
	borderBottomRadius: [tv.borderBottomLeftRadius, tv.borderBottomRightRadius],
	borderRightRadius: [tv.borderTopRightRadius, tv.borderBottomRightRadius],
	borderLeftRadius: [tv.borderTopLeftRadius, tv.borderBottomLeftRadius],
	backgroundGradient: [tv.backgroundImage],
	boxSize: [tv.width, tv.height]
}, tw = tb(), tC = {
	font: tw.fontFamily,
	shadow: tw.boxShadow,
	rounded: tw.borderRadius,
	roundedTop: tw.borderTopRadius,
	roundedBottom: tw.borderBottomRadius,
	roundedLeft: tw.borderLeftRadius,
	roundedRight: tw.borderRightRadius,
	bg: tw.background,
	bgImage: tw.backgroundImage,
	bgSize: tw.backgroundSize,
	bgPosition: tw.backgroundPosition,
	bgRepeat: tw.backgroundRepeat,
	bgAttachment: tw.backgroundAttachment,
	bgColor: tw.backgroundColor,
	bgGradient: tw.backgroundGradient,
	bgClip: tw.backgroundClip,
	pos: tw.position,
	p: tw.padding,
	pt: tw.paddingTop,
	pr: tw.paddingRight,
	pl: tw.paddingLeft,
	pb: tw.paddingBottom,
	ps: tw.paddingInlineStart,
	pe: tw.paddingInlineEnd,
	px: tw.paddingX,
	py: tw.paddingY,
	m: tw.margin,
	mt: tw.marginTop,
	mr: tw.marginRight,
	ml: tw.marginLeft,
	mb: tw.marginBottom,
	ms: tw.marginInlineStart,
	me: tw.marginInlineEnd,
	mx: tw.marginX,
	my: tw.marginY,
	w: tw.width,
	minW: tw.minWidth,
	maxW: tw.maxWidth,
	h: tw.height,
	minH: tw.minHeight,
	maxH: tw.maxHeight
}, tM = tb(), tP = (...e) => {
	let n = [...e];
	for (let t of e) tC[t] && n.push(tC[t]);
	return n;
}, tS = {
	_rtl: "[dir=rtl] &, &[dir=rtl]",
	_ltr: "[dir=ltr] &, &[dir=ltr]",
	_dark: "&[data-theme=dark]",
	_light: "&[data-theme=light]"
};
var t_ = class e {
	static supportedPseudoClasses = {
		active: "active",
		after: "after",
		anyLink: "any-link",
		before: "before",
		blank: "blank",
		checked: "checked",
		current: "current",
		default: "default",
		defined: "defined",
		disabled: "disabled",
		empty: "empty",
		enabled: "enabled",
		first: "first",
		firstChild: "first-child",
		firstLetter: "first-letter",
		firstLine: "first-line",
		firstOfType: "first-of-type",
		focus: "focus",
		focusVisible: "focus-visible",
		focusWithin: "focus-within",
		fullscreen: "fullscreen",
		future: "future",
		hover: "hover",
		inRange: "in-range",
		indeterminate: "indeterminate",
		invalid: "invalid",
		lastChild: "last-child",
		lastOfType: "last-of-type",
		left: "left",
		link: "link",
		localLink: "local-link",
		nthCol: "nth-col",
		nthLastCol: "nth-last-col",
		onlyChild: "only-child",
		onlyOfType: "only-of-type",
		optional: "optional",
		outOfRange: "out-of-range",
		past: "past",
		paused: "paused",
		pictureInPicture: "picture-in-picture",
		placeholderShown: "placeholder-shown",
		playing: "playing",
		readOnly: "read-only",
		readWrite: "read-write",
		required: "required",
		right: "right",
		root: "root",
		scope: "scope",
		target: "target",
		targetWithin: "target-within",
		userInvalid: "user-invalid",
		userValid: "user-valid",
		valid: "valid",
		visited: "visited"
	};
	static convertSelector = (n) => {
		if (tS[n]) return tS[n];
		let t = n;
		if (t.startsWith("$") || t.endsWith("$") || t.startsWith("_")) {
			let n = "", a = "";
			if (t.startsWith("_") ? (n = "&", t = t.slice(1)) : t.startsWith("$") ? (n = "& ", t = t.slice(1)) : (a = " &", t = t.slice(0, t.length - 1)), t.startsWith("data") || t.startsWith("aria")) {
				let [e, r] = t.split("__");
				return r ? `${n}[${b(e)}='${b(r)}']${a}` : `${n}[${b(e)}]${a}`;
			}
			if ("&" === n) {
				if (t.startsWith("$")) return `${n}::${t.slice(1)}`;
				if (e.supportedPseudoClasses[t]) {
					let a = e.supportedPseudoClasses[t];
					return `${n}:${a}, ${n}[data-${a}]:not([data-${a}='false']), ${n}.${a}`;
				}
				let [a, r] = t.split("__"), s = b(a);
				return r ? `${n}[data-${s}='${b(r)}']` : `${n}[data-${s}]:not([data-${s}='false'])`;
			}
		}
	};
	static walkStateValues = (n, t, a = {
		default: {},
		selectorPath: [],
		path: []
	}) => {
		let { $: r,...s } = n;
		for (let n in s) {
			let o = s[n], i = s.default ?? a.default, l = r ?? eo(i, [...a.path.slice(1), "$"]), c = l ? [...a.selectorPath, l] : a.selectorPath, u = [...a.path, n];
			if (p(o)) {
				e.walkStateValues(o, t, {
					path: u,
					selectorPath: c,
					default: i
				});
				continue;
			}
			t(o, u, c);
		}
	};
	constructor(e) {
		this.opt = e;
	}
	processAll(n, t = !0) {
		let a = [], { state: r, extends: s,...o } = n;
		if (s) for (let e of s) a.push(...this.processAll(e, t));
		if (r) {
			let n = {}, t = {};
			e.walkStateValues(r, (e, a, r) => {
				let s = `--${this.opt.varPrefix}-state-${a.join("-")}`, o = v(a) ?? "", i = {};
				this.process(i, o, e, !1), n[s] = i[o], T(t, [...r, o], `var(${s})`);
			}), a.push(n), a.push(...this.processAll(t));
		}
		if (!h(o)) {
			let e = {};
			this.processTo(e, o, t), a.push(e);
		}
		return a;
	}
	processTo(e, n, t = !0) {
		for (let a in n) this.process(e, a, n[a], t);
	}
	process(n, t, a, r = !0) {
		if (this.opt.mixins[t]) {
			let e = this.opt.mixins[t]?.get(a);
			if (e) for (let t in e) this.process(n, t, e[t], r);
			return;
		}
		let s = t;
		if (p(a)) {
			n[s = e.convertSelector(s) ?? s] = n[s] ?? {}, this.processTo(n[s], a);
			return;
		}
		if (r && tx[s = tC[s] ?? s]) {
			for (let e of tx[s]) n[e] = this.opt.processValue(e, a);
			return;
		}
		n[s] = this.opt.processValue(s, a);
	}
};
let tA = ((eb = {}).var = "var", eb.mixin = "mixin", eb);
var tT = class e {
	static create(e, { value: n, on: t, transform: a }) {
		return {
			type: e,
			value: n,
			on: t,
			transform: a,
			__Tokens: void 0,
			__ValueType: void 0,
			__CSSTokens: void 0
		};
	}
	static color(n) {
		return e.create(tA.var, {
			value: n,
			on: tP(tM.color, tM.bgColor, tM.outlineColor, tM.borderColor, tM.accentColor, tM.fill, tM.stroke),
			transform: (e, n) => R(e) ? {
				default: `var(${n(e)})`,
				rgb: `var(${n(`${e}/rgb`)})`
			} : {
				default: `rgb(${e[0]}, ${e[1]}, ${e[2]})`,
				rgb: `${e[0]} ${e[1]} ${e[2]}`
			},
			fallback: ""
		});
	}
	static space(n) {
		return e.create(tA.var, {
			value: n,
			on: tP(tM.gap, tM.rowGap, tM.columnGap, tM.top, tM.right, tM.bottom, tM.left, tM.m, tM.ms, tM.me, tM.mt, tM.mr, tM.mb, tM.ml, tM.mx, tM.my, tM.p, tM.ps, tM.pe, tM.pt, tM.pr, tM.pb, tM.pl, tM.px, tM.py)
		});
	}
	static boxSize(n) {
		return e.create(tA.var, {
			value: n,
			on: tP(tM.w, tM.minW, tM.maxW, tM.h, tM.minH, tM.maxH, tM.boxSize),
			fallback: 0
		});
	}
	static fontSize(n) {
		return e.create(tA.var, {
			value: n,
			on: tP(tM.fontSize),
			fallback: 0
		});
	}
	static lineHeight(n) {
		return e.create(tA.var, {
			value: n,
			on: tP(tM.lineHeight),
			fallback: 0
		});
	}
	static rounded(n) {
		return e.create(tA.var, {
			value: n,
			fallback: 0,
			on: tP(tM.rounded, tM.roundedTop, tM.roundedBottom, tM.roundedLeft, tM.roundedRight, tv.borderTopLeftRadius, tv.borderTopRightRadius, tv.borderBottomLeftRadius, tv.borderBottomRightRadius, tv.borderTopRightRadius, tv.borderBottomRightRadius, tv.borderTopLeftRadius, tv.borderBottomLeftRadius)
		});
	}
	static transitionTimingFunction(n) {
		return e.create(tA.var, {
			value: n,
			on: tP(tM.transitionTimingFunction)
		});
	}
	static transitionDuration(n) {
		return e.create(tA.var, {
			value: n,
			on: tP(tM.transitionDuration),
			transform: (e) => `${e}ms`
		});
	}
	static font(n) {
		return e.create(tA.var, {
			value: n,
			on: tP(tM.font)
		});
	}
	static fontWeight(n) {
		return e.create(tA.var, {
			value: n,
			on: tP(tM.fontWeight)
		});
	}
	static letterSpacing(n) {
		return e.create(tA.var, {
			value: n,
			on: tP(tM.letterSpacing)
		});
	}
	static shadow(n) {
		return e.create(tA.var, {
			value: n,
			on: tP(tM.shadow)
		});
	}
	static customMixin(n, t) {
		return e.create(tA.mixin, {
			value: t,
			on: [n]
		});
	}
	static mixin(e) {
		return {
			...e,
			__mixin: !0
		};
	}
};
let tL = (e, n, t) => {
	let a = e;
	for (let e = 0; e < n.length; e++) {
		let r = n[e];
		if (e === n.length - 1) {
			a[r] = t;
			continue;
		}
		a[r] = a[r] ?? {}, a = a[r];
	}
};
var tR = class e {
	static defaultMode = "_default";
	static walkValues = (n, t, r = []) => {
		for (let s in n) {
			let o = n[s];
			if (p(o)) {
				if (a(o, "_default")) {
					t(o, [...r, s]);
					continue;
				}
				e.walkValues(o, t, [...r, s]);
				continue;
			}
			t(o, [...r, s]);
		}
	};
	__Tokens = void 0;
	_values = {};
	_cssVarRefs = {};
	constructor(n, { cssVar: t, transformFallback: a }) {
		e.walkValues(n.value, (e, r) => {
			let s = r.join("."), o = (e, r) => {
				let s = n.transform ? n.transform(e, t) : a(e);
				if (B(s)) for (let e in s) r(s[e], "default" === e ? "" : e);
				else r(s, "");
			};
			if (T(this._cssVarRefs, [s], t(s)), p(e)) for (let n in e) o(e[n], (e, t) => {
				T(this._values, [`${s}${t ? `/${t}` : ""}`, n], e);
			});
			else o(e, (e, n) => {
				T(this._values, [`${s}${n ? `/${n}` : ""}`], e);
			});
		});
	}
	get tokens() {
		return S(this._values);
	}
	get(n, t, a) {
		let r = this._values[n];
		return B(r) ? a ? r[t] : r[t] ?? r[e.defaultMode] : a ? t === e.defaultMode ? r : void 0 : r;
	}
	use(e, n = !1) {
		if (this._cssVarRefs[e]) return n ? `${this._cssVarRefs[e]}` : `var(${this._cssVarRefs[e]})`;
	}
}, t$ = class e {
	static walkValue = (n, t, r = []) => {
		for (let s in n) {
			let o = n[s];
			if (p(o)) {
				if (a(o, "__mixin")) {
					t(o, [...r, s]);
					continue;
				}
				e.walkValue(o, t, [...r, s]);
				continue;
			}
			t(o, [...r, s]);
		}
	};
	_values = {};
	constructor(n) {
		e.walkValue(n.value, (e, n) => {
			let t = n.join(".");
			T(this._values, [t], s(e, "__mixin"));
		});
	}
	get tokens() {
		return S(this._values);
	}
	get(e) {
		return this._values[e];
	}
}, tD = {
	primary: ["primary"],
	secondary: ["secondary"],
	tertiary: ["tertiary"],
	error: ["error"],
	warning: ["warning"],
	success: ["success"],
	neutral: ["surface", "outline"]
};
let tO = (e) => {
	let n = eo(e, ["color", "sys"], {});
	return {
		...e,
		color: { sys: _(tD, (e) => ef(n, (n, t) => m(e, (e) => t.indexOf(e) > -1))) }
	};
}, tH = (e) => (n) => `rgba(var(${n}--rgb) / ${e})`;
function tV(e, n) {
	return Object.assign((e) => n(e), {
		toString: () => e,
		token: e
	});
}
var tI = (e) => e.reduce((e, n) => Object.assign(e, { [n]: !0 }), {}), tB = class e {
	static propsCanPercent = tI([...tT.boxSize({}).on]);
	static propsCanBaseDp = tI([
		...tT.boxSize({}).on,
		...tT.space({}).on,
		...tT.fontSize({}).on,
		...tT.letterSpacing({}).on,
		...tT.lineHeight({}).on,
		...tT.rounded({}).on
	]);
	static create(n, t) {
		return new e(n, t);
	}
	mode;
	varPrefix;
	cssVars = {};
	tokens = {};
	propValues = {};
	mixins = {};
	dp = (e) => 0 === e ? 0 : `calc(${e} * var(${this.cssVar("space", "dp")}))`;
	transformFallback = (n, t) => e.propsCanBaseDp[n] && u(t) ? e.propsCanPercent[n] && 1 > Math.abs(t) ? `${100 * t}%` : this.dp(t) : t;
	constructor(e, n = {}) {
		for (let t in this.theme = e, this.varPrefix = n.varPrefix ?? "vk", this.mode = n.mode ?? "light", T(this.cssVars, [this.cssVar("space", "dp")], "0.1rem"), e) {
			let n = e[t];
			if (n) {
				if (n.type === tA.var) {
					let e = new tR(n, {
						cssVar: (e) => this.cssVar(t, e),
						transformFallback: (e) => this.transformFallback(n.on[0], e)
					});
					for (let a of (this.tokens[t] = e, n.on)) this.propValues[a] = e;
					for (let n of e.tokens) for (let a of ["light", "dark"]) {
						let r = a === this.mode ? "_default" : `_${a}`, s = e.get(n, r, !0);
						k(s) || ("_default" === r ? T(this.cssVars, [this.cssVar(t, n)], s) : T(this.cssVars, [r, this.cssVar(t, n)], s));
					}
					continue;
				}
				if (n.type === tA.mixin) {
					let e = new t$(n);
					for (let t of n.on) this.mixins[t] = e;
				}
			}
		}
	}
	cssVar(e, n) {
		return `--${this.varPrefix}-${b(e)}__${n.replaceAll("/", "--").replaceAll(".", "__")}`;
	}
	get rootCSSVars() {
		return this.cssVars;
	}
	token = new Proxy({}, { get: (e, n) => this.tokens[n] ? Object.assign((e) => this.tokens[n]?.get(e, `_${this.mode}`), { tokens: this.tokens[n]?.tokens }) : this.mixins[n] ? Object.assign((e) => this.mixins[n]?.get(e), { tokens: this.mixins[n]?.tokens }) : void 0 });
	processValue = (e, n) => {
		if (w(n) && a(n, "token")) {
			let t = this.propValues[e]?.use(n.token, !0);
			return t ? n(t) : void 0;
		}
		return this.propValues[e]?.use(n) ?? this.transformFallback(e, n);
	};
	unstable_sx = (e) => new t_({
		mixins: this.mixins,
		varPrefix: this.varPrefix,
		processValue: this.processValue
	}).processAll(e);
	unstable_css(e, n) {
		let t = n ?? {};
		return t.__emotion_styles = t.__emotion_styles ?? function(e, n, t) {
			if (1 === e.length && "object" == typeof e[0] && null !== e[0] && void 0 !== e[0].styles) return e[0];
			var a, r = !0, s = "";
			ew = void 0;
			var o = e[0];
			null == o || void 0 === o.raw ? (r = !1, s += tN(t, n, o)) : s += o[0];
			for (var i = 1; i < e.length; i++) s += tN(t, n, e[i]), r && (s += o[i]);
			ty.lastIndex = 0;
			for (var l = ""; null !== (a = ty.exec(s));) l += "-" + a[1];
			return {
				name: function(e) {
					for (var n, t = 0, a = 0, r = e.length; r >= 4; ++a, r -= 4) n = (65535 & (n = 255 & e.charCodeAt(a) | (255 & e.charCodeAt(++a)) << 8 | (255 & e.charCodeAt(++a)) << 16 | (255 & e.charCodeAt(++a)) << 24)) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= n >>> 24, t = (65535 & n) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ (65535 & t) * 1540483477 + ((t >>> 16) * 59797 << 16);
					switch (r) {
						case 3: t ^= (255 & e.charCodeAt(a + 2)) << 16;
						case 2: t ^= (255 & e.charCodeAt(a + 1)) << 8;
						case 1: t ^= 255 & e.charCodeAt(a), t = (65535 & t) * 1540483477 + ((t >>> 16) * 59797 << 16);
					}
					return t ^= t >>> 13, (((t = (65535 & t) * 1540483477 + ((t >>> 16) * 59797 << 16)) ^ t >>> 15) >>> 0).toString(36);
				}(s) + l,
				styles: s,
				next: ew
			};
		}(this.unstable_sx(n), e?.registered, {}), t.__emotion_styles;
	}
	toFigmaTokens() {
		let e = { space: { dp: {
			$type: "sizing",
			$value: 1
		} } }, n = {}, t = {}, a = (e, n) => B(n) ? {
			$type: e,
			$value: _(n, (n) => a(e, n).$value)
		} : R(n) ? {
			$type: e,
			$value: n.replace(/var\(([^)]+)\)/g, (e) => {
				let n = e.slice(4, e.length - 1).slice(`--${this.varPrefix}-`.length).split("--")[0]?.split("__").map((e, n) => 0 === n ? c(e) : e).join(".") ?? "";
				return n.startsWith("sys.") ? `{${n}}` : `{seed.${n}}`;
			}).replace(/calc\(.+\)$/g, (e) => e.slice(5, e.length - 1))
		} : {
			$type: e,
			$value: n
		};
		for (let r in this.tokens) {
			let s = this.tokens[r], o = (o) => {
				for (let i of s.tokens) if (!i.includes("/")) if (i.startsWith("sys.")) {
					let e = s.get(i, "_default"), l = s.get(i, "_dark");
					tL(n, [r, ...i.split(".")], a(o, e)), e !== l && tL(t, [r, ...i.split(".")], a(o, l));
				} else tL(e, [r, ...i.split(".")], a(o, s.get(i, "_default")));
			};
			switch (r) {
				case "color":
					o("color");
					break;
				case "rounded":
					o("borderRadius");
					break;
				case "shadow":
					o("boxShadow");
					break;
				case "font":
					o("fontFamily");
					break;
				case "fontWeight": o("fontWeight");
			}
		}
		for (let e in this.mixins) {
			let t = this.mixins[e];
			if (!t) continue;
			let r = (r) => {
				for (let s of t.tokens) {
					let o = t.get(s);
					if (!o) continue;
					let i = this.unstable_sx(o)[0];
					tL(n, [e, ...s.split(".")], a(r, i));
				}
			};
			"textStyle" === e && r("typography");
		}
		return {
			seed: e,
			base: tO(n),
			dark: tO(t)
		};
	}
};
let tF = {
	shadow: tT.shadow({
		0: {
			_default: "0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px 0px rgba(0, 0, 0, 0)",
			_dark: "0px 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(0, 0, 0, 0)"
		},
		1: {
			_default: "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)",
			_dark: "0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.3)"
		},
		2: {
			_default: "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)",
			_dark: "0px 2px 6px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.3)"
		},
		3: {
			_default: "0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)",
			_dark: "0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)"
		},
		4: {
			_default: "0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.3)",
			_dark: "0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.3)"
		},
		5: {
			_default: "0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.3)",
			_dark: "0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.3)"
		}
	}),
	elevation: tT.customMixin("elevation", {
		0: tT.mixin({
			transitionDuration: "md4",
			transitionTimingFunction: "standard",
			shadow: "0",
			_hover: { shadow: "1" }
		}),
		1: tT.mixin({
			transitionDuration: "md4",
			transitionTimingFunction: "standard",
			shadow: "1",
			_hover: { shadow: "2" }
		}),
		2: tT.mixin({
			transitionDuration: "md4",
			transitionTimingFunction: "standard",
			shadow: "2",
			_hover: { shadow: "3" }
		}),
		3: tT.mixin({
			transitionDuration: "md4",
			transitionTimingFunction: "standard",
			shadow: "3",
			_hover: { shadow: "4" }
		}),
		4: tT.mixin({
			transitionDuration: "md4",
			transitionTimingFunction: "standard",
			shadow: "4",
			_hover: { shadow: "5" }
		})
	})
};
var tE = (e, n, t, a) => Object.assign(function(e, n, t, a) {
	if (e === n && t === a) return nK;
	let r = new Float32Array(11);
	for (let n = 0; n < 11; ++n) r[n] = tc(.1 * n, e, t);
	return (s) => 0 === s || 1 === s ? s : tc(function(n) {
		let a = 0, s = 1;
		for (; 10 !== s && r[s] <= n; ++s) a += .1;
		let o = a + (n - r[--s]) / (r[s + 1] - r[s]) * .1, i = tu(o, e, t);
		if (i >= .001) {
			var l = o;
			for (let a = 0; a < 8; ++a) {
				let a = tu(l, e, t);
				if (0 === a) break;
				let r = tc(l, e, t) - n;
				l -= r / a;
			}
			return l;
		}
		return 0 === i ? o : function(e, n, t, a, r) {
			let s, o, i = 0;
			do
				(s = tc(o = n + (t - n) / 2, a, r) - e) > 0 ? t = o : n = o;
			while (Math.abs(s) > 1e-7 && ++i < 10);
			return o;
		}(n, a, a + .1, e, t);
	}(s), n, a);
}(e, n, t, a), { toString: () => `cubic-bezier(${e}, ${n}, ${t}, ${a})` });
let tj = {
	duration: {
		sm1: 50,
		sm2: 100,
		sm3: 150,
		sm4: 200,
		md1: 250,
		md2: 300,
		md3: 350,
		md4: 400,
		lg1: 450,
		lg2: 500,
		lg3: 550,
		lg4: 600,
		xl1: 700,
		xl2: 800,
		xl3: 900,
		xl4: 1e3
	},
	easing: {
		linear: tE(0, 0, 1, 1),
		standard: Object.assign(tE(.2, 0, 0, 1), {
			accelerate: tE(.3, 0, 1, 1),
			decelerate: tE(0, 0, 0, 1)
		}),
		emphasized: Object.assign(tE(.2, 0, 0, 1), {
			accelerate: tE(.3, 0, .8, .15),
			decelerate: tE(.05, .7, .1, 1)
		}),
		legacy: Object.assign(tE(.4, 0, .2, 1), {
			decelerate: tE(0, 0, .2, 1),
			accelerate: tE(.4, 0, 1, 1)
		})
	}
}, tW = (e, n) => {
	let t = n ?? {
		...e,
		from: { ...e.to },
		to: { ...e.from }
	};
	return f({
		onComplete: A(),
		$default: A()
	}, (n, { slots: a, emit: r }) => {
		let s, o = (n, t) => {
			s = to({
				...e,
				autoplay: !0,
				onComplete: () => {
					t(), r("complete", "enter");
				},
				onUpdate: (e) => {
					Object.assign(n.style, e);
				}
			});
		}, i = (e, n) => {
			s = to({
				...t,
				autoplay: !0,
				onComplete: () => {
					n(), r("complete", "leave");
				},
				onUpdate: (n) => {
					Object.assign(e.style, n);
				}
			});
		}, l = () => {
			s?.stop();
		};
		return () => H(eO, {
			css: !1,
			onEnter: o,
			onEnterCancelled: l,
			onLeave: i,
			onLeaveCancelled: l,
			children: a.default?.()
		});
	}, { name: "Transition" });
}, tz = {
	transitionDuration: tT.transitionDuration(tj.duration),
	transitionTimingFunction: tT.transitionTimingFunction({
		linear: tj.easing.linear.toString(),
		standard: tj.easing.standard.toString(),
		"standard-accelerate": tj.easing.standard.accelerate.toString(),
		"standard-decelerate": tj.easing.standard.decelerate.toString(),
		emphasized: tj.easing.emphasized.toString(),
		"emphasized-decelerate": tj.easing.emphasized.decelerate.toString(),
		"emphasized-accelerate": tj.easing.emphasized.accelerate.toString(),
		legacy: tj.easing.legacy.toString(),
		"legacy-decelerate": tj.easing.legacy.decelerate.toString(),
		"legacy-accelerate": tj.easing.legacy.accelerate.toString()
	})
};
function tU(e) {
	return e < 0 ? -1 : +(0 !== e);
}
function tq(e, n, t) {
	return t < e ? e : t > n ? n : t;
}
function tG(e) {
	return (e %= 360) < 0 && (e += 360), e;
}
function tY(e) {
	return (e %= 360) < 0 && (e += 360), e;
}
function tX(e, n) {
	return [
		e[0] * n[0][0] + e[1] * n[0][1] + e[2] * n[0][2],
		e[0] * n[1][0] + e[1] * n[1][1] + e[2] * n[1][2],
		e[0] * n[2][0] + e[1] * n[2][1] + e[2] * n[2][2]
	];
}
var tK = [
	[
		.41233895,
		.35762064,
		.18051042
	],
	[
		.2126,
		.7152,
		.0722
	],
	[
		.01932141,
		.11916382,
		.95034478
	]
], tZ = [
	[
		3.2413774792388685,
		-1.5376652402851851,
		-.49885366846268053
	],
	[
		-.9691452513005321,
		1.8758853451067872,
		.04156585616912061
	],
	[
		.05562093689691305,
		-.20395524564742123,
		1.0571799111220335
	]
], tJ = [
	95.047,
	100,
	108.883
];
function tQ(e, n, t) {
	return (-16777216 | (255 & e) << 16 | (255 & n) << 8 | 255 & t) >>> 0;
}
function t1(e) {
	return tQ(t3(e[0]), t3(e[1]), t3(e[2]));
}
function t0(e) {
	return 116 * t6(function(e) {
		return tX([
			t4(e >> 16 & 255),
			t4(e >> 8 & 255),
			t4(255 & e)
		], tK);
	}(e)[1] / 100) - 16;
}
function t2(e) {
	return 100 * function(e) {
		let n = e * e * e;
		return n > 216 / 24389 ? n : (116 * e - 16) / (24389 / 27);
	}((e + 16) / 116);
}
function t5(e) {
	return 116 * t6(e / 100) - 16;
}
function t4(e) {
	let n = e / 255;
	return n <= .040449936 ? n / 12.92 * 100 : 100 * Math.pow((n + .055) / 1.055, 2.4);
}
function t3(e) {
	var n;
	let t = e / 100;
	return (n = Math.round(255 * (t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055))) < 0 ? 0 : n > 255 ? 255 : n;
}
function t6(e) {
	return e > 216 / 24389 ? Math.pow(e, 1 / 3) : (24389 / 27 * e + 16) / 116;
}
var t9 = class e {
	static make(n = tJ, t = 200 / Math.PI * t2(50) / 100, a = 50, r = 2, s = !1) {
		var o, i;
		let l = .401288 * n[0] + .650173 * n[1] + -.051461 * n[2], c = -.250268 * n[0] + 1.204414 * n[1] + .045854 * n[2], u = -.002079 * n[0] + .048952 * n[1] + .953127 * n[2], p = .8 + r / 10, d = p >= .9 ? (1 - (o = (p - .9) * 10)) * .59 + .69 * o : (1 - (i = (p - .8) * 10)) * .525 + .59 * i, h = s ? 1 : p * (1 - 1 / 3.6 * Math.exp((-t - 42) / 92)), m = [
			100 / l * (h = h > 1 ? 1 : h < 0 ? 0 : h) + 1 - h,
			100 / c * h + 1 - h,
			100 / u * h + 1 - h
		], f = 1 / (5 * t + 1), k = f * f * f * f, g = 1 - k, N = k * t + .1 * g * g * Math.cbrt(5 * t), y = t2(a) / n[1], b = 1.48 + Math.sqrt(y), v = .725 / Math.pow(y, .2), x = [
			Math.pow(N * m[0] * l / 100, .42),
			Math.pow(N * m[1] * c / 100, .42),
			Math.pow(N * m[2] * u / 100, .42)
		], w = [
			400 * x[0] / (x[0] + 27.13),
			400 * x[1] / (x[1] + 27.13),
			400 * x[2] / (x[2] + 27.13)
		];
		return new e(y, (2 * w[0] + w[1] + .05 * w[2]) * v, v, v, d, p, m, N, Math.pow(N, .25), b);
	}
	constructor(e, n, t, a, r, s, o, i, l, c) {
		this.n = e, this.aw = n, this.nbb = t, this.ncb = a, this.c = r, this.nc = s, this.rgbD = o, this.fl = i, this.fLRoot = l, this.z = c;
	}
};
t9.DEFAULT = t9.make();
var t8 = class e {
	constructor(e, n, t, a, r, s, o, i, l) {
		this.hue = e, this.chroma = n, this.j = t, this.q = a, this.m = r, this.s = s, this.jstar = o, this.astar = i, this.bstar = l;
	}
	distance(e) {
		let n = this.jstar - e.jstar, t = this.astar - e.astar, a = this.bstar - e.bstar;
		return 1.41 * Math.pow(Math.sqrt(n * n + t * t + a * a), .63);
	}
	static fromInt(n) {
		return e.fromIntInViewingConditions(n, t9.DEFAULT);
	}
	static fromIntInViewingConditions(n, t) {
		let a = t4((16711680 & n) >> 16), r = t4((65280 & n) >> 8), s = t4(255 & n), o = .41233895 * a + .35762064 * r + .18051042 * s, i = .2126 * a + .7152 * r + .0722 * s, l = .01932141 * a + .11916382 * r + .95034478 * s, c = t.rgbD[0] * (.401288 * o + .650173 * i - .051461 * l), u = t.rgbD[1] * (-.250268 * o + 1.204414 * i + .045854 * l), p = t.rgbD[2] * (-.002079 * o + .048952 * i + .953127 * l), d = Math.pow(t.fl * Math.abs(c) / 100, .42), h = Math.pow(t.fl * Math.abs(u) / 100, .42), m = Math.pow(t.fl * Math.abs(p) / 100, .42), f = 400 * tU(c) * d / (d + 27.13), k = 400 * tU(u) * h / (h + 27.13), g = 400 * tU(p) * m / (m + 27.13), N = (11 * f + -12 * k + g) / 11, y = (f + k - 2 * g) / 9, b = 180 * Math.atan2(y, N) / Math.PI, v = b < 0 ? b + 360 : b >= 360 ? b - 360 : b, x = v * Math.PI / 180, w = 100 * Math.pow((40 * f + 20 * k + g) / 20 * t.nbb / t.aw, t.c * t.z), C = 4 / t.c * Math.sqrt(w / 100) * (t.aw + 4) * t.fLRoot, M = Math.pow(5e4 / 13 * (.25 * (Math.cos((v < 20.14 ? v + 360 : v) * Math.PI / 180 + 2) + 3.8)) * t.nc * t.ncb * Math.sqrt(N * N + y * y) / ((20 * f + 20 * k + 21 * g) / 20 + .305), .9) * Math.pow(1.64 - Math.pow(.29, t.n), .73), P = M * Math.sqrt(w / 100), S = P * t.fLRoot, _ = 50 * Math.sqrt(M * t.c / (t.aw + 4)), A = 1 / .0228 * Math.log(1 + .0228 * S);
		return new e(v, P, w, C, S, _, 1.7000000000000002 * w / (1 + .007 * w), A * Math.cos(x), A * Math.sin(x));
	}
	static fromJch(n, t, a) {
		return e.fromJchInViewingConditions(n, t, a, t9.DEFAULT);
	}
	static fromJchInViewingConditions(n, t, a, r) {
		let s = 4 / r.c * Math.sqrt(n / 100) * (r.aw + 4) * r.fLRoot, o = t * r.fLRoot, i = 50 * Math.sqrt(t / Math.sqrt(n / 100) * r.c / (r.aw + 4)), l = a * Math.PI / 180, c = 1 / .0228 * Math.log(1 + .0228 * o);
		return new e(a, t, n, s, o, i, 1.7000000000000002 * n / (1 + .007 * n), c * Math.cos(l), c * Math.sin(l));
	}
	static fromUcs(n, t, a) {
		return e.fromUcsInViewingConditions(n, t, a, t9.DEFAULT);
	}
	static fromUcsInViewingConditions(n, t, a, r) {
		let s = (Math.exp(.0228 * Math.sqrt(t * t + a * a)) - 1) / .0228 / r.fLRoot, o = 180 / Math.PI * Math.atan2(a, t);
		return o < 0 && (o += 360), e.fromJchInViewingConditions(n / (1 - (n - 100) * .007), s, o, r);
	}
	toInt() {
		return this.viewed(t9.DEFAULT);
	}
	viewed(e) {
		let n = Math.pow((0 === this.chroma || 0 === this.j ? 0 : this.chroma / Math.sqrt(this.j / 100)) / Math.pow(1.64 - Math.pow(.29, e.n), .73), 1 / .9), t = this.hue * Math.PI / 180, a = .25 * (Math.cos(t + 2) + 3.8), r = e.aw * Math.pow(this.j / 100, 1 / e.c / e.z), s = 5e4 / 13 * a * e.nc * e.ncb, o = r / e.nbb, i = Math.sin(t), l = Math.cos(t), c = 23 * (o + .305) * n / (23 * s + 11 * n * l + 108 * n * i), u = c * l, p = c * i, d = (460 * o + 451 * u + 288 * p) / 1403, h = (460 * o - 891 * u - 261 * p) / 1403, m = (460 * o - 220 * u - 6300 * p) / 1403, f = Math.max(0, 27.13 * Math.abs(d) / (400 - Math.abs(d))), k = tU(d) * (100 / e.fl) * Math.pow(f, 1 / .42), g = Math.max(0, 27.13 * Math.abs(h) / (400 - Math.abs(h))), N = tU(h) * (100 / e.fl) * Math.pow(g, 1 / .42), y = Math.max(0, 27.13 * Math.abs(m) / (400 - Math.abs(m))), b = tU(m) * (100 / e.fl) * Math.pow(y, 1 / .42), v = k / e.rgbD[0], x = N / e.rgbD[1], w = b / e.rgbD[2];
		return function(e, n, t) {
			let a = tZ[0][0] * e + tZ[0][1] * n + tZ[0][2] * t, r = tZ[1][0] * e + tZ[1][1] * n + tZ[1][2] * t, s = tZ[2][0] * e + tZ[2][1] * n + tZ[2][2] * t;
			return tQ(t3(a), t3(r), t3(s));
		}(1.86206786 * v - 1.01125463 * x + .14918677 * w, .38752654 * v + .62144744 * x - .00897398 * w, -.0158415 * v - .03412294 * x + 1.04996444 * w);
	}
	static fromXyzInViewingConditions(n, t, a, r) {
		let s = r.rgbD[0] * (.401288 * n + .650173 * t - .051461 * a), o = r.rgbD[1] * (-.250268 * n + 1.204414 * t + .045854 * a), i = r.rgbD[2] * (-.002079 * n + .048952 * t + .953127 * a), l = Math.pow(r.fl * Math.abs(s) / 100, .42), c = Math.pow(r.fl * Math.abs(o) / 100, .42), u = Math.pow(r.fl * Math.abs(i) / 100, .42), p = 400 * tU(s) * l / (l + 27.13), d = 400 * tU(o) * c / (c + 27.13), h = 400 * tU(i) * u / (u + 27.13), m = (11 * p + -12 * d + h) / 11, f = (p + d - 2 * h) / 9, k = 180 * Math.atan2(f, m) / Math.PI, g = k < 0 ? k + 360 : k >= 360 ? k - 360 : k, N = g * Math.PI / 180, y = 100 * Math.pow((40 * p + 20 * d + h) / 20 * r.nbb / r.aw, r.c * r.z), b = 4 / r.c * Math.sqrt(y / 100) * (r.aw + 4) * r.fLRoot, v = Math.pow(5e4 / 13 * (1 / 4 * (Math.cos((g < 20.14 ? g + 360 : g) * Math.PI / 180 + 2) + 3.8)) * r.nc * r.ncb * Math.sqrt(m * m + f * f) / ((20 * p + 20 * d + 21 * h) / 20 + .305), .9) * Math.pow(1.64 - Math.pow(.29, r.n), .73), x = v * Math.sqrt(y / 100), w = x * r.fLRoot, C = 50 * Math.sqrt(v * r.c / (r.aw + 4)), M = Math.log(1 + .0228 * w) / .0228;
		return new e(g, x, y, b, w, C, 1.7000000000000002 * y / (1 + .007 * y), M * Math.cos(N), M * Math.sin(N));
	}
	xyzInViewingConditions(e) {
		let n = Math.pow((0 === this.chroma || 0 === this.j ? 0 : this.chroma / Math.sqrt(this.j / 100)) / Math.pow(1.64 - Math.pow(.29, e.n), .73), 1 / .9), t = this.hue * Math.PI / 180, a = .25 * (Math.cos(t + 2) + 3.8), r = e.aw * Math.pow(this.j / 100, 1 / e.c / e.z), s = 5e4 / 13 * a * e.nc * e.ncb, o = r / e.nbb, i = Math.sin(t), l = Math.cos(t), c = 23 * (o + .305) * n / (23 * s + 11 * n * l + 108 * n * i), u = c * l, p = c * i, d = (460 * o + 451 * u + 288 * p) / 1403, h = (460 * o - 891 * u - 261 * p) / 1403, m = (460 * o - 220 * u - 6300 * p) / 1403, f = Math.max(0, 27.13 * Math.abs(d) / (400 - Math.abs(d))), k = tU(d) * (100 / e.fl) * Math.pow(f, 1 / .42), g = Math.max(0, 27.13 * Math.abs(h) / (400 - Math.abs(h))), N = tU(h) * (100 / e.fl) * Math.pow(g, 1 / .42), y = Math.max(0, 27.13 * Math.abs(m) / (400 - Math.abs(m))), b = tU(m) * (100 / e.fl) * Math.pow(y, 1 / .42), v = k / e.rgbD[0], x = N / e.rgbD[1], w = b / e.rgbD[2];
		return [
			1.86206786 * v - 1.01125463 * x + .14918677 * w,
			.38752654 * v + .62144744 * x - .00897398 * w,
			-.0158415 * v - .03412294 * x + 1.04996444 * w
		];
	}
}, t7 = class e {
	static sanitizeRadians(e) {
		return (e + 8 * Math.PI) % (2 * Math.PI);
	}
	static trueDelinearized(e) {
		let n = e / 100;
		return 255 * (n <= .0031308 ? 12.92 * n : 1.055 * Math.pow(n, 1 / 2.4) - .055);
	}
	static chromaticAdaptation(e) {
		let n = Math.pow(Math.abs(e), .42);
		return 400 * tU(e) * n / (n + 27.13);
	}
	static hueOf(n) {
		let t = tX(n, e.SCALED_DISCOUNT_FROM_LINRGB), a = e.chromaticAdaptation(t[0]), r = e.chromaticAdaptation(t[1]), s = e.chromaticAdaptation(t[2]);
		return Math.atan2((a + r - 2 * s) / 9, (11 * a + -12 * r + s) / 11);
	}
	static areInCyclicOrder(n, t, a) {
		return e.sanitizeRadians(t - n) < e.sanitizeRadians(a - n);
	}
	static intercept(e, n, t) {
		return (n - e) / (t - e);
	}
	static lerpPoint(e, n, t) {
		return [
			e[0] + (t[0] - e[0]) * n,
			e[1] + (t[1] - e[1]) * n,
			e[2] + (t[2] - e[2]) * n
		];
	}
	static setCoordinate(n, t, a, r) {
		let s = e.intercept(n[r], t, a[r]);
		return e.lerpPoint(n, s, a);
	}
	static isBounded(e) {
		return 0 <= e && e <= 100;
	}
	static nthVertex(n, t) {
		let a = e.Y_FROM_LINRGB[0], r = e.Y_FROM_LINRGB[1], s = e.Y_FROM_LINRGB[2], o = t % 4 <= 1 ? 0 : 100, i = 100 * (t % 2 != 0);
		if (t < 4) {
			let t = (n - o * r - i * s) / a;
			return e.isBounded(t) ? [
				t,
				o,
				i
			] : [
				-1,
				-1,
				-1
			];
		}
		if (t < 8) {
			let t = (n - i * a - o * s) / r;
			return e.isBounded(t) ? [
				i,
				t,
				o
			] : [
				-1,
				-1,
				-1
			];
		}
		{
			let t = (n - o * a - i * r) / s;
			return e.isBounded(t) ? [
				o,
				i,
				t
			] : [
				-1,
				-1,
				-1
			];
		}
	}
	static bisectToSegment(n, t) {
		let a = [
			-1,
			-1,
			-1
		], r = a, s = 0, o = 0, i = !1, l = !0;
		for (let c = 0; c < 12; c++) {
			let u = e.nthVertex(n, c);
			if (u[0] < 0) continue;
			let p = e.hueOf(u);
			if (!i) {
				a = u, r = u, s = p, o = p, i = !0;
				continue;
			}
			(l || e.areInCyclicOrder(s, p, o)) && (l = !1, e.areInCyclicOrder(s, t, p) ? (r = u, o = p) : (a = u, s = p));
		}
		return [a, r];
	}
	static midpoint(e, n) {
		return [
			(e[0] + n[0]) / 2,
			(e[1] + n[1]) / 2,
			(e[2] + n[2]) / 2
		];
	}
	static criticalPlaneBelow(e) {
		return Math.floor(e - .5);
	}
	static criticalPlaneAbove(e) {
		return Math.ceil(e - .5);
	}
	static bisectToLimit(n, t) {
		let a = e.bisectToSegment(n, t), r = a[0], s = e.hueOf(r), o = a[1];
		for (let n = 0; n < 3; n++) if (r[n] !== o[n]) {
			let a = -1, i = 255;
			r[n] < o[n] ? (a = e.criticalPlaneBelow(e.trueDelinearized(r[n])), i = e.criticalPlaneAbove(e.trueDelinearized(o[n]))) : (a = e.criticalPlaneAbove(e.trueDelinearized(r[n])), i = e.criticalPlaneBelow(e.trueDelinearized(o[n])));
			for (let l = 0; l < 8; l++) if (1 >= Math.abs(i - a)) break;
			else {
				let l = Math.floor((a + i) / 2), c = e.CRITICAL_PLANES[l], u = e.setCoordinate(r, c, o, n), p = e.hueOf(u);
				e.areInCyclicOrder(s, t, p) ? (o = u, i = l) : (r = u, s = p, a = l);
			}
		}
		return e.midpoint(r, o);
	}
	static inverseChromaticAdaptation(e) {
		let n = Math.abs(e), t = Math.max(0, 27.13 * n / (400 - n));
		return tU(e) * Math.pow(t, 1 / .42);
	}
	static findResultByJ(n, t, a) {
		let r = 11 * Math.sqrt(a), s = t9.DEFAULT, o = 1 / Math.pow(1.64 - Math.pow(.29, s.n), .73), i = .25 * (Math.cos(n + 2) + 3.8) * (5e4 / 13) * s.nc * s.ncb, l = Math.sin(n), c = Math.cos(n);
		for (let n = 0; n < 5; n++) {
			let u = r / 100, p = Math.pow((0 === t || 0 === r ? 0 : t / Math.sqrt(u)) * o, 1 / .9), d = s.aw * Math.pow(u, 1 / s.c / s.z) / s.nbb, h = 23 * (d + .305) * p / (23 * i + 11 * p * c + 108 * p * l), m = h * c, f = h * l, k = (460 * d + 451 * m + 288 * f) / 1403, g = (460 * d - 891 * m - 261 * f) / 1403, N = (460 * d - 220 * m - 6300 * f) / 1403, b = tX([
				e.inverseChromaticAdaptation(k),
				e.inverseChromaticAdaptation(g),
				e.inverseChromaticAdaptation(N)
			], e.LINRGB_FROM_SCALED_DISCOUNT);
			if (b[0] < 0 || b[1] < 0 || b[2] < 0) break;
			let v = e.Y_FROM_LINRGB[0], x = e.Y_FROM_LINRGB[1], w = e.Y_FROM_LINRGB[2], C = v * b[0] + x * b[1] + w * b[2];
			if (C <= 0) break;
			if (4 === n || .002 > Math.abs(C - a)) {
				if (b[0] > 100.01 || b[1] > 100.01 || b[2] > 100.01) return 0;
				return t1(b);
			}
			r -= (C - a) * r / (2 * C);
		}
		return 0;
	}
	static solveToInt(n, t, a) {
		if (t < 1e-4 || a < 1e-4 || a > 99.9999) {
			let e = t3(t2(a));
			return tQ(e, e, e);
		}
		let r = (n = tY(n)) / 180 * Math.PI, s = t2(a), o = e.findResultByJ(r, t, s);
		return 0 !== o ? o : t1(e.bisectToLimit(s, r));
	}
	static solveToCam(n, t, a) {
		return t8.fromInt(e.solveToInt(n, t, a));
	}
};
t7.SCALED_DISCOUNT_FROM_LINRGB = [
	[
		.001200833568784504,
		.002389694492170889,
		.0002795742885861124
	],
	[
		.0005891086651375999,
		.0029785502573438758,
		.0003270666104008398
	],
	[
		.00010146692491640572,
		.0005364214359186694,
		.0032979401770712076
	]
], t7.LINRGB_FROM_SCALED_DISCOUNT = [
	[
		1373.2198709594231,
		-1100.4251190754821,
		-7.278681089101213
	],
	[
		-271.815969077903,
		559.6580465940733,
		-32.46047482791194
	],
	[
		1.9622899599665666,
		-57.173814538844006,
		308.7233197812385
	]
], t7.Y_FROM_LINRGB = [
	.2126,
	.7152,
	.0722
], t7.CRITICAL_PLANES = [
	.015176349177441876,
	.045529047532325624,
	.07588174588720938,
	.10623444424209313,
	.13658714259697685,
	.16693984095186062,
	.19729253930674434,
	.2276452376616281,
	.2579979360165119,
	.28835063437139563,
	.3188300904430532,
	.350925934958123,
	.3848314933096426,
	.42057480301049466,
	.458183274052838,
	.4976837250274023,
	.5391024159806381,
	.5824650784040898,
	.6277969426914107,
	.6751227633498623,
	.7244668422128921,
	.775853049866786,
	.829304845476233,
	.8848452951698498,
	.942497089126609,
	1.0022825574869039,
	1.0642236851973577,
	1.1283421258858297,
	1.1946592148522128,
	1.2631959812511864,
	1.3339731595349034,
	1.407011200216447,
	1.4823302800086415,
	1.5599503113873272,
	1.6398909516233677,
	1.7221716113234105,
	1.8068114625156377,
	1.8938294463134073,
	1.9832442801866852,
	2.075074464868551,
	2.1693382909216234,
	2.2660538449872063,
	2.36523901573795,
	2.4669114995532007,
	2.5710888059345764,
	2.6777882626779785,
	2.7870270208169257,
	2.898822059350997,
	3.0131901897720907,
	3.1301480604002863,
	3.2497121605402226,
	3.3718988244681087,
	3.4967242352587946,
	3.624204428461639,
	3.754355295633311,
	3.887192587735158,
	4.022731918402185,
	4.160988767090289,
	4.301978482107941,
	4.445716283538092,
	4.592217266055746,
	4.741496401646282,
	4.893568542229298,
	5.048448422192488,
	5.20615066083972,
	5.3666897647573375,
	5.5300801301023865,
	5.696336044816294,
	5.865471690767354,
	6.037501145825082,
	6.212438385869475,
	6.390297286737924,
	6.571091626112461,
	6.7548350853498045,
	6.941541251256611,
	7.131223617812143,
	7.323895587840543,
	7.5195704746346665,
	7.7182615035334345,
	7.919981813454504,
	8.124744458384042,
	8.332562408825165,
	8.543448553206703,
	8.757415699253682,
	8.974476575321063,
	9.194643831691977,
	9.417930041841839,
	9.644347703669503,
	9.873909240696694,
	10.106627003236781,
	10.342513269534024,
	10.58158024687427,
	10.8238400726681,
	11.069304815507364,
	11.317986476196008,
	11.569896988756009,
	11.825048221409341,
	12.083451977536606,
	12.345119996613247,
	12.610063955123938,
	12.878295467455942,
	13.149826086772048,
	13.42466730586372,
	13.702830557985108,
	13.984327217668513,
	14.269168601521828,
	14.55736596900856,
	14.848930523210871,
	15.143873411576273,
	15.44220572664832,
	15.743938506781891,
	16.04908273684337,
	16.35764934889634,
	16.66964922287304,
	16.985093187232053,
	17.30399201960269,
	17.62635644741625,
	17.95219714852476,
	18.281524751807332,
	18.614349837764564,
	18.95068293910138,
	19.290534541298456,
	19.633915083172692,
	19.98083495742689,
	20.331304511189067,
	20.685334046541502,
	21.042933821039977,
	21.404114048223256,
	21.76888489811322,
	22.137256497705877,
	22.50923893145328,
	22.884842241736916,
	23.264076429332462,
	23.6469514538663,
	24.033477234264016,
	24.42366364919083,
	24.817520537484558,
	25.21505769858089,
	25.61628489293138,
	26.021211842414342,
	26.429848230738664,
	26.842203703840827,
	27.258287870275353,
	27.678110301598522,
	28.10168053274597,
	28.529008062403893,
	28.96010235337422,
	29.39497283293396,
	29.83362889318845,
	30.276079891419332,
	30.722335150426627,
	31.172403958865512,
	31.62629557157785,
	32.08401920991837,
	32.54558406207592,
	33.010999283389665,
	33.4802739966603,
	33.953417292456834,
	34.430438229418264,
	34.911345834551085,
	35.39614910352207,
	35.88485700094671,
	36.37747846067349,
	36.87402238606382,
	37.37449765026789,
	37.87891309649659,
	38.38727753828926,
	38.89959975977785,
	39.41588851594697,
	39.93615253289054,
	40.460400508064545,
	40.98864111053629,
	41.520882981230194,
	42.05713473317016,
	42.597404951718396,
	43.141702194811224,
	43.6900349931913,
	44.24241185063697,
	44.798841244188324,
	45.35933162437017,
	45.92389141541209,
	46.49252901546552,
	47.065252796817916,
	47.64207110610409,
	48.22299226451468,
	48.808024568002054,
	49.3971762874833,
	49.9904556690408,
	50.587870934119984,
	51.189430279724725,
	51.79514187861014,
	52.40501387947288,
	53.0190544071392,
	53.637271562750364,
	54.259673423945976,
	54.88626804504493,
	55.517063457223934,
	56.15206766869424,
	56.79128866487574,
	57.43473440856916,
	58.08241284012621,
	58.734331877617365,
	59.39049941699807,
	60.05092333227251,
	60.715611475655585,
	61.38457167773311,
	62.057811747619894,
	62.7353394731159,
	63.417162620860914,
	64.10328893648692,
	64.79372614476921,
	65.48848194977529,
	66.18756403501224,
	66.89098006357258,
	67.59873767827808,
	68.31084450182222,
	69.02730813691093,
	69.74813616640164,
	70.47333615344107,
	71.20291564160104,
	71.93688215501312,
	72.67524319850172,
	73.41800625771542,
	74.16517879925733,
	74.9167682708136,
	75.67278210128072,
	76.43322770089146,
	77.1981124613393,
	77.96744375590167,
	78.74122893956174,
	79.51947534912904,
	80.30219030335869,
	81.08938110306934,
	81.88105503125999,
	82.67721935322541,
	83.4778813166706,
	84.28304815182372,
	85.09272707154808,
	85.90692527145302,
	86.72564993000343,
	87.54890820862819,
	88.3767072518277,
	89.2090541872801,
	90.04595612594655,
	90.88742016217518,
	91.73345337380438,
	92.58406282226491,
	93.43925555268066,
	94.29903859396902,
	95.16341895893969,
	96.03240364439274,
	96.9059996312159,
	97.78421388448044,
	98.6670533535366,
	99.55452497210776
];
var ae = class e {
	static from(n, t, a) {
		return new e(t7.solveToInt(n, t, a));
	}
	static fromInt(n) {
		return new e(n);
	}
	toInt() {
		return this.argb;
	}
	get hue() {
		return this.internalHue;
	}
	set hue(e) {
		this.setInternalState(t7.solveToInt(e, this.internalChroma, this.internalTone));
	}
	get chroma() {
		return this.internalChroma;
	}
	set chroma(e) {
		this.setInternalState(t7.solveToInt(this.internalHue, e, this.internalTone));
	}
	get tone() {
		return this.internalTone;
	}
	set tone(e) {
		this.setInternalState(t7.solveToInt(this.internalHue, this.internalChroma, e));
	}
	constructor(e) {
		this.argb = e;
		let n = t8.fromInt(e);
		this.internalHue = n.hue, this.internalChroma = n.chroma, this.internalTone = t0(e), this.argb = e;
	}
	setInternalState(e) {
		let n = t8.fromInt(e);
		this.internalHue = n.hue, this.internalChroma = n.chroma, this.internalTone = t0(e), this.argb = e;
	}
	inViewingConditions(n) {
		let t = t8.fromInt(this.toInt()).xyzInViewingConditions(n), a = t8.fromXyzInViewingConditions(t[0], t[1], t[2], t9.make());
		return e.from(a.hue, a.chroma, t5(t[1]));
	}
}, an = class e {
	static ratioOfTones(n, t) {
		return n = tq(0, 100, n), t = tq(0, 100, t), e.ratioOfYs(t2(n), t2(t));
	}
	static ratioOfYs(e, n) {
		let t = e > n ? e : n;
		return (t + 5) / ((t === n ? e : n) + 5);
	}
	static lighter(n, t) {
		if (n < 0 || n > 100) return -1;
		let a = t2(n), r = t * (a + 5) - 5, s = e.ratioOfYs(r, a), o = Math.abs(s - t);
		if (s < t && o > .04) return -1;
		let i = t5(r) + .4;
		return i < 0 || i > 100 ? -1 : i;
	}
	static darker(n, t) {
		if (n < 0 || n > 100) return -1;
		let a = t2(n), r = (a + 5) / t - 5, s = e.ratioOfYs(a, r), o = Math.abs(s - t);
		if (s < t && o > .04) return -1;
		let i = t5(r) - .4;
		return i < 0 || i > 100 ? -1 : i;
	}
	static lighterUnsafe(n, t) {
		let a = e.lighter(n, t);
		return a < 0 ? 100 : a;
	}
	static darkerUnsafe(n, t) {
		let a = e.darker(n, t);
		return a < 0 ? 0 : a;
	}
}, at = class e {
	static isDisliked(e) {
		let n = Math.round(e.hue) >= 90 && 111 >= Math.round(e.hue), t = Math.round(e.chroma) > 16, a = 65 > Math.round(e.tone);
		return n && t && a;
	}
	static fixIfDisliked(n) {
		return e.isDisliked(n) ? ae.from(n.hue, n.chroma, 70) : n;
	}
}, aa = class e {
	static fromPalette(n) {
		return new e(n.name ?? "", n.palette, n.tone, n.isBackground ?? !1, n.background, n.secondBackground, n.contrastCurve, n.toneDeltaPair);
	}
	constructor(e, n, t, a, r, s, o, i) {
		if (this.name = e, this.palette = n, this.tone = t, this.isBackground = a, this.background = r, this.secondBackground = s, this.contrastCurve = o, this.toneDeltaPair = i, this.hctCache = /* @__PURE__ */ new Map(), !r && s) throw Error(`Color ${e} has secondBackgrounddefined, but background is not defined.`);
		if (!r && o) throw Error(`Color ${e} has contrastCurvedefined, but background is not defined.`);
		if (r && !o) throw Error(`Color ${e} has backgrounddefined, but contrastCurve is not defined.`);
	}
	getArgb(e) {
		return this.getHct(e).toInt();
	}
	getHct(e) {
		let n = this.hctCache.get(e);
		if (null != n) return n;
		let t = this.getTone(e), a = this.palette(e).getHct(t);
		return this.hctCache.size > 4 && this.hctCache.clear(), this.hctCache.set(e, a), a;
	}
	getTone(n) {
		let t = n.contrastLevel < 0;
		if (this.toneDeltaPair) {
			let a = this.toneDeltaPair(n), r = a.roleA, s = a.roleB, o = a.delta, i = a.polarity, l = a.stayTogether, c = this.background(n).getTone(n), u = "nearer" === i || "lighter" === i && !n.isDark || "darker" === i && n.isDark, p = u ? r : s, d = u ? s : r, h = this.name === p.name, m = n.isDark ? 1 : -1, f = p.contrastCurve.get(n.contrastLevel), k = d.contrastCurve.get(n.contrastLevel), g = p.tone(n), N = an.ratioOfTones(c, g) >= f ? g : e.foregroundTone(c, f), y = d.tone(n), b = an.ratioOfTones(c, y) >= k ? y : e.foregroundTone(c, k);
			return t && (N = e.foregroundTone(c, f), b = e.foregroundTone(c, k)), (b - N) * m >= o || ((b = tq(0, 100, N + o * m)) - N) * m >= o || (N = tq(0, 100, b - o * m)), 50 <= N && N < 60 ? b = m > 0 ? Math.max(b, (N = 60) + o * m) : Math.min(b, (N = 49) + o * m) : 50 <= b && b < 60 && (b = l ? m > 0 ? Math.max(b, (N = 60) + o * m) : Math.min(b, (N = 49) + o * m) : m > 0 ? 60 : 49), h ? N : b;
		}
		{
			let a = this.tone(n);
			if (null == this.background) return a;
			let r = this.background(n).getTone(n), s = this.contrastCurve.get(n.contrastLevel);
			if (an.ratioOfTones(r, a) >= s || (a = e.foregroundTone(r, s)), t && (a = e.foregroundTone(r, s)), this.isBackground && 50 <= a && a < 60 && (a = an.ratioOfTones(49, r) >= s ? 49 : 60), this.secondBackground) {
				let [t, r] = [this.background, this.secondBackground], [o, i] = [t(n).getTone(n), r(n).getTone(n)], [l, c] = [Math.max(o, i), Math.min(o, i)];
				if (an.ratioOfTones(l, a) >= s && an.ratioOfTones(c, a) >= s) return a;
				let u = an.lighter(l, s), p = an.darker(c, s), d = [];
				return (-1 !== u && d.push(u), -1 !== p && d.push(p), e.tonePrefersLightForeground(o) || e.tonePrefersLightForeground(i)) ? u < 0 ? 100 : u : 1 === d.length ? d[0] : p < 0 ? 0 : p;
			}
			return a;
		}
	}
	static foregroundTone(n, t) {
		let a = an.lighterUnsafe(n, t), r = an.darkerUnsafe(n, t), s = an.ratioOfTones(a, n), o = an.ratioOfTones(r, n);
		if (!e.tonePrefersLightForeground(n)) return o >= t || o >= s ? r : a;
		{
			let e = .1 > Math.abs(s - o) && s < t && o < t;
			return s >= t || s >= o || e ? a : r;
		}
	}
	static tonePrefersLightForeground(e) {
		return 60 > Math.round(e);
	}
	static toneAllowsLightForeground(e) {
		return 49 >= Math.round(e);
	}
	static enableLightForeground(n) {
		return e.tonePrefersLightForeground(n) && !e.toneAllowsLightForeground(n) ? 49 : n;
	}
}, ar = class e {
	static fromInt(n) {
		let t = ae.fromInt(n);
		return e.fromHct(t);
	}
	static fromHct(n) {
		return new e(n.hue, n.chroma, n);
	}
	static fromHueAndChroma(n, t) {
		return new e(n, t, new as(n, t).create());
	}
	constructor(e, n, t) {
		this.hue = e, this.chroma = n, this.keyColor = t, this.cache = /* @__PURE__ */ new Map();
	}
	tone(e) {
		let n = this.cache.get(e);
		return void 0 === n && (n = ae.from(this.hue, this.chroma, e).toInt(), this.cache.set(e, n)), n;
	}
	getHct(e) {
		return ae.fromInt(this.tone(e));
	}
}, as = class {
	constructor(e, n) {
		this.hue = e, this.requestedChroma = n, this.chromaCache = /* @__PURE__ */ new Map(), this.maxChromaValue = 200;
	}
	create() {
		let e = 0, n = 100;
		for (; e < n;) {
			let t = Math.floor((e + n) / 2), a = this.maxChroma(t) < this.maxChroma(t + 1);
			if (this.maxChroma(t) >= this.requestedChroma - .01) if (Math.abs(e - 50) < Math.abs(n - 50)) n = t;
			else {
				if (e === t) return ae.from(this.hue, this.requestedChroma, e);
				e = t;
			}
			else a ? e = t + 1 : n = t;
		}
		return ae.from(this.hue, this.requestedChroma, e);
	}
	maxChroma(e) {
		if (this.chromaCache.has(e)) return this.chromaCache.get(e);
		let n = ae.from(this.hue, this.maxChromaValue, e).chroma;
		return this.chromaCache.set(e, n), n;
	}
}, ao = class {
	constructor(e, n, t, a) {
		this.low = e, this.normal = n, this.medium = t, this.high = a;
	}
	get(e) {
		var n, t, a, r, s, o, i, l, c;
		return e <= -1 ? this.low : e < 0 ? (n = this.low, t = this.normal, (1 - (a = (e - -1) / 1)) * n + a * t) : e < .5 ? (r = this.normal, s = this.medium, (1 - (o = (e - 0) / .5)) * r + o * s) : e < 1 ? (i = this.medium, l = this.high, (1 - (c = (e - .5) / .5)) * i + c * l) : this.high;
	}
}, ai = class {
	constructor(e, n, t, a, r) {
		this.roleA = e, this.roleB = n, this.delta = t, this.polarity = a, this.stayTogether = r;
	}
};
function al(e) {
	return e.variant === eC.FIDELITY || e.variant === eC.CONTENT;
}
function ac(e) {
	return e.variant === eC.MONOCHROME;
}
(ev = eC || (eC = {}))[ev.MONOCHROME = 0] = "MONOCHROME", ev[ev.NEUTRAL = 1] = "NEUTRAL", ev[ev.TONAL_SPOT = 2] = "TONAL_SPOT", ev[ev.VIBRANT = 3] = "VIBRANT", ev[ev.EXPRESSIVE = 4] = "EXPRESSIVE", ev[ev.FIDELITY = 5] = "FIDELITY", ev[ev.CONTENT = 6] = "CONTENT", ev[ev.RAINBOW = 7] = "RAINBOW", ev[ev.FRUIT_SALAD = 8] = "FRUIT_SALAD";
var au = class e {
	static highestSurface(n) {
		return n.isDark ? e.surfaceBright : e.surfaceDim;
	}
};
au.contentAccentToneDelta = 15, au.primaryPaletteKeyColor = aa.fromPalette({
	name: "primary_palette_key_color",
	palette: (e) => e.primaryPalette,
	tone: (e) => e.primaryPalette.keyColor.tone
}), au.secondaryPaletteKeyColor = aa.fromPalette({
	name: "secondary_palette_key_color",
	palette: (e) => e.secondaryPalette,
	tone: (e) => e.secondaryPalette.keyColor.tone
}), au.tertiaryPaletteKeyColor = aa.fromPalette({
	name: "tertiary_palette_key_color",
	palette: (e) => e.tertiaryPalette,
	tone: (e) => e.tertiaryPalette.keyColor.tone
}), au.neutralPaletteKeyColor = aa.fromPalette({
	name: "neutral_palette_key_color",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.neutralPalette.keyColor.tone
}), au.neutralVariantPaletteKeyColor = aa.fromPalette({
	name: "neutral_variant_palette_key_color",
	palette: (e) => e.neutralVariantPalette,
	tone: (e) => e.neutralVariantPalette.keyColor.tone
}), au.background = aa.fromPalette({
	name: "background",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? 6 : 98,
	isBackground: !0
}), au.onBackground = aa.fromPalette({
	name: "on_background",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? 90 : 10,
	background: (e) => au.background,
	contrastCurve: new ao(3, 3, 4.5, 7)
}), au.surface = aa.fromPalette({
	name: "surface",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? 6 : 98,
	isBackground: !0
}), au.surfaceDim = aa.fromPalette({
	name: "surface_dim",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? 6 : new ao(87, 87, 80, 75).get(e.contrastLevel),
	isBackground: !0
}), au.surfaceBright = aa.fromPalette({
	name: "surface_bright",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? new ao(24, 24, 29, 34).get(e.contrastLevel) : 98,
	isBackground: !0
}), au.surfaceContainerLowest = aa.fromPalette({
	name: "surface_container_lowest",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? new ao(4, 4, 2, 0).get(e.contrastLevel) : 100,
	isBackground: !0
}), au.surfaceContainerLow = aa.fromPalette({
	name: "surface_container_low",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? new ao(10, 10, 11, 12).get(e.contrastLevel) : new ao(96, 96, 96, 95).get(e.contrastLevel),
	isBackground: !0
}), au.surfaceContainer = aa.fromPalette({
	name: "surface_container",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? new ao(12, 12, 16, 20).get(e.contrastLevel) : new ao(94, 94, 92, 90).get(e.contrastLevel),
	isBackground: !0
}), au.surfaceContainerHigh = aa.fromPalette({
	name: "surface_container_high",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? new ao(17, 17, 21, 25).get(e.contrastLevel) : new ao(92, 92, 88, 85).get(e.contrastLevel),
	isBackground: !0
}), au.surfaceContainerHighest = aa.fromPalette({
	name: "surface_container_highest",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? new ao(22, 22, 26, 30).get(e.contrastLevel) : new ao(90, 90, 84, 80).get(e.contrastLevel),
	isBackground: !0
}), au.onSurface = aa.fromPalette({
	name: "on_surface",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? 90 : 10,
	background: (e) => au.highestSurface(e),
	contrastCurve: new ao(4.5, 7, 11, 21)
}), au.surfaceVariant = aa.fromPalette({
	name: "surface_variant",
	palette: (e) => e.neutralVariantPalette,
	tone: (e) => e.isDark ? 30 : 90,
	isBackground: !0
}), au.onSurfaceVariant = aa.fromPalette({
	name: "on_surface_variant",
	palette: (e) => e.neutralVariantPalette,
	tone: (e) => e.isDark ? 80 : 30,
	background: (e) => au.highestSurface(e),
	contrastCurve: new ao(3, 4.5, 7, 11)
}), au.inverseSurface = aa.fromPalette({
	name: "inverse_surface",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? 90 : 20
}), au.inverseOnSurface = aa.fromPalette({
	name: "inverse_on_surface",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? 20 : 95,
	background: (e) => au.inverseSurface,
	contrastCurve: new ao(4.5, 7, 11, 21)
}), au.outline = aa.fromPalette({
	name: "outline",
	palette: (e) => e.neutralVariantPalette,
	tone: (e) => e.isDark ? 60 : 50,
	background: (e) => au.highestSurface(e),
	contrastCurve: new ao(1.5, 3, 4.5, 7)
}), au.outlineVariant = aa.fromPalette({
	name: "outline_variant",
	palette: (e) => e.neutralVariantPalette,
	tone: (e) => e.isDark ? 30 : 80,
	background: (e) => au.highestSurface(e),
	contrastCurve: new ao(1, 1, 3, 4.5)
}), au.shadow = aa.fromPalette({
	name: "shadow",
	palette: (e) => e.neutralPalette,
	tone: (e) => 0
}), au.scrim = aa.fromPalette({
	name: "scrim",
	palette: (e) => e.neutralPalette,
	tone: (e) => 0
}), au.surfaceTint = aa.fromPalette({
	name: "surface_tint",
	palette: (e) => e.primaryPalette,
	tone: (e) => e.isDark ? 80 : 40,
	isBackground: !0
}), au.primary = aa.fromPalette({
	name: "primary",
	palette: (e) => e.primaryPalette,
	tone: (e) => ac(e) ? 100 * !!e.isDark : e.isDark ? 80 : 40,
	isBackground: !0,
	background: (e) => au.highestSurface(e),
	contrastCurve: new ao(3, 4.5, 7, 7),
	toneDeltaPair: (e) => new ai(au.primaryContainer, au.primary, 10, "nearer", !1)
}), au.onPrimary = aa.fromPalette({
	name: "on_primary",
	palette: (e) => e.primaryPalette,
	tone: (e) => ac(e) ? e.isDark ? 10 : 90 : e.isDark ? 20 : 100,
	background: (e) => au.primary,
	contrastCurve: new ao(4.5, 7, 11, 21)
}), au.primaryContainer = aa.fromPalette({
	name: "primary_container",
	palette: (e) => e.primaryPalette,
	tone: (e) => al(e) ? e.sourceColorHct.tone : ac(e) ? e.isDark ? 85 : 25 : e.isDark ? 30 : 90,
	isBackground: !0,
	background: (e) => au.highestSurface(e),
	contrastCurve: new ao(1, 1, 3, 4.5),
	toneDeltaPair: (e) => new ai(au.primaryContainer, au.primary, 10, "nearer", !1)
}), au.onPrimaryContainer = aa.fromPalette({
	name: "on_primary_container",
	palette: (e) => e.primaryPalette,
	tone: (e) => al(e) ? aa.foregroundTone(au.primaryContainer.tone(e), 4.5) : ac(e) ? 100 * !e.isDark : e.isDark ? 90 : 30,
	background: (e) => au.primaryContainer,
	contrastCurve: new ao(3, 4.5, 7, 11)
}), au.inversePrimary = aa.fromPalette({
	name: "inverse_primary",
	palette: (e) => e.primaryPalette,
	tone: (e) => e.isDark ? 40 : 80,
	background: (e) => au.inverseSurface,
	contrastCurve: new ao(3, 4.5, 7, 7)
}), au.secondary = aa.fromPalette({
	name: "secondary",
	palette: (e) => e.secondaryPalette,
	tone: (e) => e.isDark ? 80 : 40,
	isBackground: !0,
	background: (e) => au.highestSurface(e),
	contrastCurve: new ao(3, 4.5, 7, 7),
	toneDeltaPair: (e) => new ai(au.secondaryContainer, au.secondary, 10, "nearer", !1)
}), au.onSecondary = aa.fromPalette({
	name: "on_secondary",
	palette: (e) => e.secondaryPalette,
	tone: (e) => ac(e) ? e.isDark ? 10 : 100 : e.isDark ? 20 : 100,
	background: (e) => au.secondary,
	contrastCurve: new ao(4.5, 7, 11, 21)
}), au.secondaryContainer = aa.fromPalette({
	name: "secondary_container",
	palette: (e) => e.secondaryPalette,
	tone: (e) => {
		let n = e.isDark ? 30 : 90;
		return ac(e) ? e.isDark ? 30 : 85 : al(e) ? function(e, n, t, a) {
			let r = t, s = ae.from(e, n, t);
			if (s.chroma < n) {
				let t = s.chroma;
				for (; s.chroma < n;) {
					r += a ? -1 : 1;
					let o = ae.from(e, n, r);
					if (t > o.chroma || .4 > Math.abs(o.chroma - n)) break;
					Math.abs(o.chroma - n) < Math.abs(s.chroma - n) && (s = o), t = Math.max(t, o.chroma);
				}
			}
			return r;
		}(e.secondaryPalette.hue, e.secondaryPalette.chroma, n, !e.isDark) : n;
	},
	isBackground: !0,
	background: (e) => au.highestSurface(e),
	contrastCurve: new ao(1, 1, 3, 4.5),
	toneDeltaPair: (e) => new ai(au.secondaryContainer, au.secondary, 10, "nearer", !1)
}), au.onSecondaryContainer = aa.fromPalette({
	name: "on_secondary_container",
	palette: (e) => e.secondaryPalette,
	tone: (e) => ac(e) ? e.isDark ? 90 : 10 : al(e) ? aa.foregroundTone(au.secondaryContainer.tone(e), 4.5) : e.isDark ? 90 : 30,
	background: (e) => au.secondaryContainer,
	contrastCurve: new ao(3, 4.5, 7, 11)
}), au.tertiary = aa.fromPalette({
	name: "tertiary",
	palette: (e) => e.tertiaryPalette,
	tone: (e) => ac(e) ? e.isDark ? 90 : 25 : e.isDark ? 80 : 40,
	isBackground: !0,
	background: (e) => au.highestSurface(e),
	contrastCurve: new ao(3, 4.5, 7, 7),
	toneDeltaPair: (e) => new ai(au.tertiaryContainer, au.tertiary, 10, "nearer", !1)
}), au.onTertiary = aa.fromPalette({
	name: "on_tertiary",
	palette: (e) => e.tertiaryPalette,
	tone: (e) => ac(e) ? e.isDark ? 10 : 90 : e.isDark ? 20 : 100,
	background: (e) => au.tertiary,
	contrastCurve: new ao(4.5, 7, 11, 21)
}), au.tertiaryContainer = aa.fromPalette({
	name: "tertiary_container",
	palette: (e) => e.tertiaryPalette,
	tone: (e) => {
		if (ac(e)) return e.isDark ? 60 : 49;
		if (!al(e)) return e.isDark ? 30 : 90;
		let n = e.tertiaryPalette.getHct(e.sourceColorHct.tone);
		return at.fixIfDisliked(n).tone;
	},
	isBackground: !0,
	background: (e) => au.highestSurface(e),
	contrastCurve: new ao(1, 1, 3, 4.5),
	toneDeltaPair: (e) => new ai(au.tertiaryContainer, au.tertiary, 10, "nearer", !1)
}), au.onTertiaryContainer = aa.fromPalette({
	name: "on_tertiary_container",
	palette: (e) => e.tertiaryPalette,
	tone: (e) => ac(e) ? 100 * !e.isDark : al(e) ? aa.foregroundTone(au.tertiaryContainer.tone(e), 4.5) : e.isDark ? 90 : 30,
	background: (e) => au.tertiaryContainer,
	contrastCurve: new ao(3, 4.5, 7, 11)
}), au.error = aa.fromPalette({
	name: "error",
	palette: (e) => e.errorPalette,
	tone: (e) => e.isDark ? 80 : 40,
	isBackground: !0,
	background: (e) => au.highestSurface(e),
	contrastCurve: new ao(3, 4.5, 7, 7),
	toneDeltaPair: (e) => new ai(au.errorContainer, au.error, 10, "nearer", !1)
}), au.onError = aa.fromPalette({
	name: "on_error",
	palette: (e) => e.errorPalette,
	tone: (e) => e.isDark ? 20 : 100,
	background: (e) => au.error,
	contrastCurve: new ao(4.5, 7, 11, 21)
}), au.errorContainer = aa.fromPalette({
	name: "error_container",
	palette: (e) => e.errorPalette,
	tone: (e) => e.isDark ? 30 : 90,
	isBackground: !0,
	background: (e) => au.highestSurface(e),
	contrastCurve: new ao(1, 1, 3, 4.5),
	toneDeltaPair: (e) => new ai(au.errorContainer, au.error, 10, "nearer", !1)
}), au.onErrorContainer = aa.fromPalette({
	name: "on_error_container",
	palette: (e) => e.errorPalette,
	tone: (e) => ac(e) ? e.isDark ? 90 : 10 : e.isDark ? 90 : 30,
	background: (e) => au.errorContainer,
	contrastCurve: new ao(3, 4.5, 7, 11)
}), au.primaryFixed = aa.fromPalette({
	name: "primary_fixed",
	palette: (e) => e.primaryPalette,
	tone: (e) => ac(e) ? 40 : 90,
	isBackground: !0,
	background: (e) => au.highestSurface(e),
	contrastCurve: new ao(1, 1, 3, 4.5),
	toneDeltaPair: (e) => new ai(au.primaryFixed, au.primaryFixedDim, 10, "lighter", !0)
}), au.primaryFixedDim = aa.fromPalette({
	name: "primary_fixed_dim",
	palette: (e) => e.primaryPalette,
	tone: (e) => ac(e) ? 30 : 80,
	isBackground: !0,
	background: (e) => au.highestSurface(e),
	contrastCurve: new ao(1, 1, 3, 4.5),
	toneDeltaPair: (e) => new ai(au.primaryFixed, au.primaryFixedDim, 10, "lighter", !0)
}), au.onPrimaryFixed = aa.fromPalette({
	name: "on_primary_fixed",
	palette: (e) => e.primaryPalette,
	tone: (e) => ac(e) ? 100 : 10,
	background: (e) => au.primaryFixedDim,
	secondBackground: (e) => au.primaryFixed,
	contrastCurve: new ao(4.5, 7, 11, 21)
}), au.onPrimaryFixedVariant = aa.fromPalette({
	name: "on_primary_fixed_variant",
	palette: (e) => e.primaryPalette,
	tone: (e) => ac(e) ? 90 : 30,
	background: (e) => au.primaryFixedDim,
	secondBackground: (e) => au.primaryFixed,
	contrastCurve: new ao(3, 4.5, 7, 11)
}), au.secondaryFixed = aa.fromPalette({
	name: "secondary_fixed",
	palette: (e) => e.secondaryPalette,
	tone: (e) => ac(e) ? 80 : 90,
	isBackground: !0,
	background: (e) => au.highestSurface(e),
	contrastCurve: new ao(1, 1, 3, 4.5),
	toneDeltaPair: (e) => new ai(au.secondaryFixed, au.secondaryFixedDim, 10, "lighter", !0)
}), au.secondaryFixedDim = aa.fromPalette({
	name: "secondary_fixed_dim",
	palette: (e) => e.secondaryPalette,
	tone: (e) => ac(e) ? 70 : 80,
	isBackground: !0,
	background: (e) => au.highestSurface(e),
	contrastCurve: new ao(1, 1, 3, 4.5),
	toneDeltaPair: (e) => new ai(au.secondaryFixed, au.secondaryFixedDim, 10, "lighter", !0)
}), au.onSecondaryFixed = aa.fromPalette({
	name: "on_secondary_fixed",
	palette: (e) => e.secondaryPalette,
	tone: (e) => 10,
	background: (e) => au.secondaryFixedDim,
	secondBackground: (e) => au.secondaryFixed,
	contrastCurve: new ao(4.5, 7, 11, 21)
}), au.onSecondaryFixedVariant = aa.fromPalette({
	name: "on_secondary_fixed_variant",
	palette: (e) => e.secondaryPalette,
	tone: (e) => ac(e) ? 25 : 30,
	background: (e) => au.secondaryFixedDim,
	secondBackground: (e) => au.secondaryFixed,
	contrastCurve: new ao(3, 4.5, 7, 11)
}), au.tertiaryFixed = aa.fromPalette({
	name: "tertiary_fixed",
	palette: (e) => e.tertiaryPalette,
	tone: (e) => ac(e) ? 40 : 90,
	isBackground: !0,
	background: (e) => au.highestSurface(e),
	contrastCurve: new ao(1, 1, 3, 4.5),
	toneDeltaPair: (e) => new ai(au.tertiaryFixed, au.tertiaryFixedDim, 10, "lighter", !0)
}), au.tertiaryFixedDim = aa.fromPalette({
	name: "tertiary_fixed_dim",
	palette: (e) => e.tertiaryPalette,
	tone: (e) => ac(e) ? 30 : 80,
	isBackground: !0,
	background: (e) => au.highestSurface(e),
	contrastCurve: new ao(1, 1, 3, 4.5),
	toneDeltaPair: (e) => new ai(au.tertiaryFixed, au.tertiaryFixedDim, 10, "lighter", !0)
}), au.onTertiaryFixed = aa.fromPalette({
	name: "on_tertiary_fixed",
	palette: (e) => e.tertiaryPalette,
	tone: (e) => ac(e) ? 100 : 10,
	background: (e) => au.tertiaryFixedDim,
	secondBackground: (e) => au.tertiaryFixed,
	contrastCurve: new ao(4.5, 7, 11, 21)
}), au.onTertiaryFixedVariant = aa.fromPalette({
	name: "on_tertiary_fixed_variant",
	palette: (e) => e.tertiaryPalette,
	tone: (e) => ac(e) ? 90 : 30,
	background: (e) => au.tertiaryFixedDim,
	secondBackground: (e) => au.tertiaryFixed,
	contrastCurve: new ao(3, 4.5, 7, 11)
});
var ap = class {
	constructor(e) {
		this.sourceColorArgb = e.sourceColorArgb, this.variant = e.variant, this.contrastLevel = e.contrastLevel, this.isDark = e.isDark, this.sourceColorHct = ae.fromInt(e.sourceColorArgb), this.primaryPalette = e.primaryPalette, this.secondaryPalette = e.secondaryPalette, this.tertiaryPalette = e.tertiaryPalette, this.neutralPalette = e.neutralPalette, this.neutralVariantPalette = e.neutralVariantPalette, this.errorPalette = ar.fromHueAndChroma(25, 84);
	}
	static getRotatedHue(e, n, t) {
		let a = e.hue;
		if (n.length !== t.length) throw Error(`mismatch between hue length ${n.length} & rotations ${t.length}`);
		if (1 === t.length) return tY(e.hue + t[0]);
		let r = n.length;
		for (let e = 0; e <= r - 2; e++) {
			let r = n[e], s = n[e + 1];
			if (r < a && a < s) return tY(a + t[e]);
		}
		return a;
	}
	getArgb(e) {
		return e.getArgb(this);
	}
	getHct(e) {
		return e.getHct(this);
	}
	get primaryPaletteKeyColor() {
		return this.getArgb(au.primaryPaletteKeyColor);
	}
	get secondaryPaletteKeyColor() {
		return this.getArgb(au.secondaryPaletteKeyColor);
	}
	get tertiaryPaletteKeyColor() {
		return this.getArgb(au.tertiaryPaletteKeyColor);
	}
	get neutralPaletteKeyColor() {
		return this.getArgb(au.neutralPaletteKeyColor);
	}
	get neutralVariantPaletteKeyColor() {
		return this.getArgb(au.neutralVariantPaletteKeyColor);
	}
	get background() {
		return this.getArgb(au.background);
	}
	get onBackground() {
		return this.getArgb(au.onBackground);
	}
	get surface() {
		return this.getArgb(au.surface);
	}
	get surfaceDim() {
		return this.getArgb(au.surfaceDim);
	}
	get surfaceBright() {
		return this.getArgb(au.surfaceBright);
	}
	get surfaceContainerLowest() {
		return this.getArgb(au.surfaceContainerLowest);
	}
	get surfaceContainerLow() {
		return this.getArgb(au.surfaceContainerLow);
	}
	get surfaceContainer() {
		return this.getArgb(au.surfaceContainer);
	}
	get surfaceContainerHigh() {
		return this.getArgb(au.surfaceContainerHigh);
	}
	get surfaceContainerHighest() {
		return this.getArgb(au.surfaceContainerHighest);
	}
	get onSurface() {
		return this.getArgb(au.onSurface);
	}
	get surfaceVariant() {
		return this.getArgb(au.surfaceVariant);
	}
	get onSurfaceVariant() {
		return this.getArgb(au.onSurfaceVariant);
	}
	get inverseSurface() {
		return this.getArgb(au.inverseSurface);
	}
	get inverseOnSurface() {
		return this.getArgb(au.inverseOnSurface);
	}
	get outline() {
		return this.getArgb(au.outline);
	}
	get outlineVariant() {
		return this.getArgb(au.outlineVariant);
	}
	get shadow() {
		return this.getArgb(au.shadow);
	}
	get scrim() {
		return this.getArgb(au.scrim);
	}
	get surfaceTint() {
		return this.getArgb(au.surfaceTint);
	}
	get primary() {
		return this.getArgb(au.primary);
	}
	get onPrimary() {
		return this.getArgb(au.onPrimary);
	}
	get primaryContainer() {
		return this.getArgb(au.primaryContainer);
	}
	get onPrimaryContainer() {
		return this.getArgb(au.onPrimaryContainer);
	}
	get inversePrimary() {
		return this.getArgb(au.inversePrimary);
	}
	get secondary() {
		return this.getArgb(au.secondary);
	}
	get onSecondary() {
		return this.getArgb(au.onSecondary);
	}
	get secondaryContainer() {
		return this.getArgb(au.secondaryContainer);
	}
	get onSecondaryContainer() {
		return this.getArgb(au.onSecondaryContainer);
	}
	get tertiary() {
		return this.getArgb(au.tertiary);
	}
	get onTertiary() {
		return this.getArgb(au.onTertiary);
	}
	get tertiaryContainer() {
		return this.getArgb(au.tertiaryContainer);
	}
	get onTertiaryContainer() {
		return this.getArgb(au.onTertiaryContainer);
	}
	get error() {
		return this.getArgb(au.error);
	}
	get onError() {
		return this.getArgb(au.onError);
	}
	get errorContainer() {
		return this.getArgb(au.errorContainer);
	}
	get onErrorContainer() {
		return this.getArgb(au.onErrorContainer);
	}
	get primaryFixed() {
		return this.getArgb(au.primaryFixed);
	}
	get primaryFixedDim() {
		return this.getArgb(au.primaryFixedDim);
	}
	get onPrimaryFixed() {
		return this.getArgb(au.onPrimaryFixed);
	}
	get onPrimaryFixedVariant() {
		return this.getArgb(au.onPrimaryFixedVariant);
	}
	get secondaryFixed() {
		return this.getArgb(au.secondaryFixed);
	}
	get secondaryFixedDim() {
		return this.getArgb(au.secondaryFixedDim);
	}
	get onSecondaryFixed() {
		return this.getArgb(au.onSecondaryFixed);
	}
	get onSecondaryFixedVariant() {
		return this.getArgb(au.onSecondaryFixedVariant);
	}
	get tertiaryFixed() {
		return this.getArgb(au.tertiaryFixed);
	}
	get tertiaryFixedDim() {
		return this.getArgb(au.tertiaryFixedDim);
	}
	get onTertiaryFixed() {
		return this.getArgb(au.onTertiaryFixed);
	}
	get onTertiaryFixedVariant() {
		return this.getArgb(au.onTertiaryFixedVariant);
	}
}, ad = class e {
	static of(n) {
		return new e(n, !1);
	}
	static contentOf(n) {
		return new e(n, !0);
	}
	static fromColors(n) {
		return e.createPaletteFromColors(!1, n);
	}
	static contentFromColors(n) {
		return e.createPaletteFromColors(!0, n);
	}
	static createPaletteFromColors(n, t) {
		let a = new e(t.primary, n);
		return t.secondary && (a.a2 = new e(t.secondary, n).a1), t.tertiary && (a.a3 = new e(t.tertiary, n).a1), t.error && (a.error = new e(t.error, n).a1), t.neutral && (a.n1 = new e(t.neutral, n).n1), t.neutralVariant && (a.n2 = new e(t.neutralVariant, n).n2), a;
	}
	constructor(e, n) {
		let t = ae.fromInt(e), a = t.hue, r = t.chroma;
		n ? (this.a1 = ar.fromHueAndChroma(a, r), this.a2 = ar.fromHueAndChroma(a, r / 3), this.a3 = ar.fromHueAndChroma(a + 60, r / 2), this.n1 = ar.fromHueAndChroma(a, Math.min(r / 12, 4)), this.n2 = ar.fromHueAndChroma(a, Math.min(r / 6, 8))) : (this.a1 = ar.fromHueAndChroma(a, Math.max(48, r)), this.a2 = ar.fromHueAndChroma(a, 16), this.a3 = ar.fromHueAndChroma(a + 60, 24), this.n1 = ar.fromHueAndChroma(a, 4), this.n2 = ar.fromHueAndChroma(a, 8)), this.error = ar.fromHueAndChroma(25, 84);
	}
}, ah = class e extends ap {
	constructor(n, t, a) {
		super({
			sourceColorArgb: n.toInt(),
			variant: eC.EXPRESSIVE,
			contrastLevel: a,
			isDark: t,
			primaryPalette: ar.fromHueAndChroma(tY(n.hue + 240), 40),
			secondaryPalette: ar.fromHueAndChroma(ap.getRotatedHue(n, e.hues, e.secondaryRotations), 24),
			tertiaryPalette: ar.fromHueAndChroma(ap.getRotatedHue(n, e.hues, e.tertiaryRotations), 32),
			neutralPalette: ar.fromHueAndChroma(n.hue + 15, 8),
			neutralVariantPalette: ar.fromHueAndChroma(n.hue + 15, 12)
		});
	}
};
ah.hues = [
	0,
	21,
	51,
	121,
	151,
	191,
	271,
	321,
	360
], ah.secondaryRotations = [
	45,
	95,
	45,
	20,
	45,
	90,
	45,
	45,
	45
], ah.tertiaryRotations = [
	120,
	120,
	20,
	45,
	20,
	15,
	20,
	120,
	120
];
var am = class e extends ap {
	constructor(n, t, a) {
		super({
			sourceColorArgb: n.toInt(),
			variant: eC.VIBRANT,
			contrastLevel: a,
			isDark: t,
			primaryPalette: ar.fromHueAndChroma(n.hue, 200),
			secondaryPalette: ar.fromHueAndChroma(ap.getRotatedHue(n, e.hues, e.secondaryRotations), 24),
			tertiaryPalette: ar.fromHueAndChroma(ap.getRotatedHue(n, e.hues, e.tertiaryRotations), 32),
			neutralPalette: ar.fromHueAndChroma(n.hue, 10),
			neutralVariantPalette: ar.fromHueAndChroma(n.hue, 12)
		});
	}
};
am.hues = [
	0,
	41,
	61,
	101,
	131,
	181,
	251,
	301,
	360
], am.secondaryRotations = [
	18,
	15,
	10,
	12,
	15,
	18,
	15,
	12,
	12
], am.tertiaryRotations = [
	35,
	30,
	20,
	25,
	30,
	35,
	30,
	25,
	25
];
var af = {
	desired: 4,
	fallbackColorARGB: 4282549748,
	filter: !0
};
function ak(e, n) {
	return e.score > n.score ? -1 : +(e.score < n.score);
}
var ag = class e {
	constructor() {}
	static score(n, t) {
		let { desired: a, fallbackColorARGB: r, filter: s } = {
			...af,
			...t
		}, o = [], i = Array(360).fill(0), l = 0;
		for (let [e, t] of n.entries()) {
			let n = ae.fromInt(e);
			o.push(n);
			let a = Math.floor(n.hue);
			i[a] += t, l += t;
		}
		let c = Array(360).fill(0);
		for (let e = 0; e < 360; e++) {
			let n = i[e] / l;
			for (let t = e - 14; t < e + 16; t++) {
				let e = tG(t);
				c[e] += n;
			}
		}
		let u = [];
		for (let n of o) {
			let t = c[tG(Math.round(n.hue))];
			if (s && (n.chroma < e.CUTOFF_CHROMA || t <= e.CUTOFF_EXCITED_PROPORTION)) continue;
			let a = 100 * t * e.WEIGHT_PROPORTION, r = n.chroma < e.TARGET_CHROMA ? e.WEIGHT_CHROMA_BELOW : e.WEIGHT_CHROMA_ABOVE, o = a + (n.chroma - e.TARGET_CHROMA) * r;
			u.push({
				hct: n,
				score: o
			});
		}
		u.sort(ak);
		let p = [];
		for (let e = 90; e >= 15; e--) {
			for (let { hct: n } of (p.length = 0, u)) if (p.find((t) => 180 - Math.abs(Math.abs(n.hue - t.hue) - 180) < e) || p.push(n), p.length >= a) break;
			if (p.length >= a) break;
		}
		let d = [];
		for (let e of (0 === p.length && d.push(r), p)) d.push(e.toInt());
		return d;
	}
};
function aN(e) {
	let n = 3 === (e = e.replace("#", "")).length, t = 6 === e.length, a = 8 === e.length;
	if (!n && !t && !a) throw Error("unexpected hex " + e);
	let r = 0, s = 0, o = 0;
	return n ? (r = ay(e.slice(0, 1).repeat(2)), s = ay(e.slice(1, 2).repeat(2)), o = ay(e.slice(2, 3).repeat(2))) : t ? (r = ay(e.slice(0, 2)), s = ay(e.slice(2, 4)), o = ay(e.slice(4, 6))) : a && (r = ay(e.slice(2, 4)), s = ay(e.slice(4, 6)), o = ay(e.slice(6, 8))), (-16777216 | (255 & r) << 16 | (255 & s) << 8 | 255 & o) >>> 0;
}
function ay(e) {
	return parseInt(e, 16);
}
ag.TARGET_CHROMA = 48, ag.WEIGHT_PROPORTION = .7, ag.WEIGHT_CHROMA_ABOVE = .3, ag.WEIGHT_CHROMA_BELOW = .1, ag.CUTOFF_CHROMA = 5, ag.CUTOFF_EXCITED_PROPORTION = .01;
var ab = {
	0: !0,
	10: !0,
	20: !0,
	30: !0,
	40: !0,
	50: !0,
	60: !0,
	70: !0,
	80: !0,
	90: !0,
	95: !0,
	100: !0
}, av = (e) => {
	var n;
	let t = {
		r: (n = e) >> 16 & 255,
		g: n >> 8 & 255,
		b: 255 & n,
		a: n >> 24 & 255
	};
	return [
		t.r,
		t.g,
		t.b
	];
}, ax = (e) => ({
	primary: !0,
	secondary: !0,
	tertiary: !0,
	error: !0,
	warning: !0,
	success: !0
})[e], aw = class e {
	static toHEX = (e) => `#${av(e).map((e) => N(e.toString(16), 2, "0")).join("")}`;
	static createRoleColorRuleBuilder(e) {
		let n = {}, t = new Proxy({}, { get: (a, r) => "build" == r ? () => n : (a, r) => (n[`${a}${e ? `:${e}` : ""}`] = r, t) });
		return t;
	}
	static createRoleColorSourcePicker() {
		return new Proxy({}, { get: (e, n) => (e) => [n, e] });
	}
	static fromColors = (n) => {
		let { primary: t, secondary: a, tertiary: r, neutral: s, neutralVariant: o, error: i,...l } = n, c = ad.contentFromColors({
			primary: aN(t),
			secondary: a ? aN(a) : void 0,
			tertiary: r ? aN(r) : void 0,
			error: i ? aN(i) : void 0
		});
		return s && (c.n1 = ar.fromHueAndChroma(aN(s), 4)), o && (c.n2 = ar.fromHueAndChroma(aN(o), 8)), new e({
			primary: c.a1,
			secondary: c.a2,
			tertiary: c.a3,
			neutral: c.n1,
			neutralVariant: c.n2,
			error: c.error,
			..._(l, (e) => ar.fromInt(aN(e)))
		});
	};
	constructor(e) {
		this.seeds = e;
	}
	normalizeRoleRules(n = {}) {
		let t = e.createRoleColorSourcePicker(), a = e.createRoleColorRuleBuilder().rule("shadow", t.neutral(0)).rule("scrim", t.neutral(0)).rule("outline", t.neutralVariant(87)).rule("outline-variant", t.neutralVariant(80)).rule("surface", t.neutral(99)).rule("on-surface", t.neutral(10)).rule("surface-variant", t.neutralVariant(90)).rule("on-surface-variant", t.neutralVariant(30)).rule("surface-dim", t.neutral(87)).rule("surface-bright", t.neutral(98)).rule("surface-container-lowest", t.neutral(100)).rule("surface-container-low", t.neutral(96)).rule("surface-container", t.neutral(94)).rule("surface-container-high", t.neutral(92)).rule("surface-container-highest", t.neutral(90)).rule("inverse-surface", t.neutral(20)).rule("inverse-on-surface", t.neutral(95)).rule("inverse-primary", t.primary(80)), r = e.createRoleColorRuleBuilder("dark").rule("shadow", t.neutral(0)).rule("scrim", t.neutral(0)).rule("outline", t.neutralVariant(60)).rule("outline-variant", t.neutralVariant(30)).rule("surface", t.neutral(10)).rule("on-surface", t.neutral(90)).rule("surface-variant", t.neutralVariant(30)).rule("on-surface-variant", t.neutralVariant(80)).rule("surface-dim", t.neutral(6)).rule("surface-bright", t.neutral(24)).rule("surface-container-lowest", t.neutral(4)).rule("surface-container-low", t.neutral(10)).rule("surface-container", t.neutral(12)).rule("surface-container-high", t.neutral(17)).rule("surface-container-highest", t.neutral(22)).rule("inverse-surface", t.neutral(90)).rule("inverse-on-surface", t.neutral(20)).rule("inverse-primary", t.primary(40));
		for (let e in this.seeds) e.startsWith("neutral") || (a = a.rule(e, t[e](40)).rule(`on-${e}`, t[e](100)).rule(`${e}-container`, t[e](90)).rule(`on-${e}-container`, t[e](10)), r = r.rule(e, t[e](80)).rule(`on-${e}`, t[e](20)).rule(`${e}-container`, t[e](30)).rule(`on-${e}-container`, t[e](90)));
		return {
			...a.build(),
			...r.build(),
			...n
		};
	}
	getThemeRoleColors(e) {
		let n = {}, t = {};
		for (let [a, [r, s]] of Object.entries(e)) if (this.seeds[r]) {
			if (a.endsWith(":dark")) {
				t[a.split(":")[0]] = ab[s] ? `${String(r)}.${s}` : this.seeds[r]?.tone(s);
				continue;
			}
			n[a] = ab[s] ? `${String(r)}.${s}` : this.seeds[r]?.tone(s);
		}
		return [n, t];
	}
	toDesignTokens(e = {}) {
		let n = this.normalizeRoleRules(e), [t, a] = this.getThemeRoleColors(n), r = {}, s = {};
		for (let e in t) if (r[`${e}`] = {
			_default: u(t[e]) ? av(t[e]) : t[e],
			_dark: u(a[e]) ? av(a[e]) : a[e]
		}, ax(e) && (s[`${e}`] = tT.mixin({
			bgColor: `sys.${e}`,
			color: `sys.on-${e}`
		}), s[`${e}-container`] = tT.mixin({
			bgColor: `sys.${e}-container`,
			color: `sys.on-${e}-container`
		})), e.startsWith("surface")) {
			if (e.includes("container")) {
				s[`${e}`] = tT.mixin({
					bgColor: `sys.${e}`,
					color: "sys.on-surface"
				});
				continue;
			}
			s[`${e}`] = tT.mixin({
				bgColor: `sys.${e}`,
				color: "sys.on-surface"
			}), s[`on-${e}`] = tT.mixin({
				bgColor: `sys.on-${e}`,
				color: "sys.inverse-on-surface"
			});
		}
		return {
			color: tT.color({
				..._(this.seeds, (e) => Object.keys(ab).reduce((n, t) => Object.assign(n, { [t]: av(e.tone(parseInt(t))) }), {})),
				white: [
					255,
					255,
					255
				],
				black: [
					0,
					0,
					0
				],
				sys: r
			}),
			containerStyle: tT.customMixin("containerStyle", { sys: s })
		};
	}
};
let aC = tT.rounded({
	xs: 4,
	sm: 8,
	md: 12,
	lg: 16,
	xl: 28
}), aM = {
	font: tT.font({
		brand: "-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"",
		plain: "-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"",
		code: "'Lucida Console',Consolas,Monaco,'Andale Mono','Ubuntu Mono',monospace"
	}),
	fontWeight: tT.fontWeight({
		regular: 400,
		medium: 500,
		bold: 700
	}),
	textStyle: tT.customMixin("textStyle", { sys: {
		"display-large": tT.mixin({
			lineHeight: 64,
			fontSize: 57,
			letterSpacing: -.25,
			fontWeight: "regular",
			font: "brand"
		}),
		"display-medium": tT.mixin({
			lineHeight: 52,
			fontSize: 45,
			letterSpacing: 0,
			fontWeight: "regular",
			font: "brand"
		}),
		"display-small": tT.mixin({
			lineHeight: 44,
			fontSize: 36,
			letterSpacing: 0,
			fontWeight: "regular",
			font: "brand"
		}),
		"headline-large": tT.mixin({
			lineHeight: 40,
			fontSize: 32,
			letterSpacing: 0,
			fontWeight: "regular",
			font: "brand"
		}),
		"headline-medium": tT.mixin({
			lineHeight: 36,
			fontSize: 28,
			letterSpacing: 0,
			fontWeight: "regular",
			font: "brand"
		}),
		"headline-small": tT.mixin({
			lineHeight: 32,
			fontSize: 24,
			letterSpacing: 0,
			fontWeight: "regular",
			font: "plain"
		}),
		"title-large": tT.mixin({
			lineHeight: 28,
			fontSize: 22,
			letterSpacing: 0,
			fontWeight: "regular",
			font: "brand"
		}),
		"title-medium": tT.mixin({
			lineHeight: 24,
			fontSize: 16,
			letterSpacing: .15,
			fontWeight: "medium",
			font: "plain"
		}),
		"title-small": tT.mixin({
			lineHeight: 20,
			fontSize: 14,
			letterSpacing: .1,
			fontWeight: "medium",
			font: "plain"
		}),
		"label-large": tT.mixin({
			lineHeight: 20,
			fontSize: 14,
			letterSpacing: .1,
			fontWeight: "medium",
			font: "plain"
		}),
		"label-medium": tT.mixin({
			lineHeight: 16,
			fontSize: 12,
			letterSpacing: .5,
			fontWeight: "medium",
			font: "plain"
		}),
		"label-small": tT.mixin({
			lineHeight: 16,
			fontSize: 11,
			letterSpacing: .5,
			fontWeight: "medium",
			font: "plain"
		}),
		"body-large": tT.mixin({
			lineHeight: 24,
			fontSize: 16,
			letterSpacing: .5,
			fontWeight: "regular",
			font: "plain"
		}),
		"body-medium": tT.mixin({
			lineHeight: 20,
			fontSize: 14,
			letterSpacing: .25,
			fontWeight: "regular",
			font: "plain"
		}),
		"body-small": tT.mixin({
			lineHeight: 16,
			fontSize: 12,
			letterSpacing: .4,
			fontWeight: "regular",
			font: "plain"
		})
	} })
};
var aP = aw.fromColors({
	primary: "#1270f5",
	secondary: "#8a90a5",
	tertiary: "#b58391",
	neutral: "#5e5e5e",
	error: "#d93f23",
	warning: "#e69c00",
	success: "#5ac220"
});
let aS = {
	...aM,
	...tz,
	...tF,
	rounded: aC,
	...aP.toDesignTokens({})
}, a_ = tB.create(aS, { varPrefix: "vk" }), aA = ea(() => a_, { name: "Theme" });
var aT = function() {
	function e(e) {
		var n = this;
		this._insertTag = function(e) {
			var t = 0 === n.tags.length ? n.insertionPoint ? n.insertionPoint.nextSibling : n.prepend ? n.container.firstChild : n.before : n.tags[n.tags.length - 1].nextSibling;
			n.container.insertBefore(e, t), n.tags.push(e);
		}, this.isSpeedy = void 0 === e.speedy || e.speedy, this.tags = [], this.ctr = 0, this.nonce = e.nonce, this.key = e.key, this.container = e.container, this.prepend = e.prepend, this.insertionPoint = e.insertionPoint, this.before = null;
	}
	var n = e.prototype;
	return n.hydrate = function(e) {
		e.forEach(this._insertTag);
	}, n.insert = function(e) {
		this.ctr % (this.isSpeedy ? 65e3 : 1) == 0 && this._insertTag(((n = document.createElement("style")).setAttribute("data-emotion", this.key), void 0 !== this.nonce && n.setAttribute("nonce", this.nonce), n.appendChild(document.createTextNode("")), n.setAttribute("data-s", ""), n));
		var n, t = this.tags[this.tags.length - 1];
		if (this.isSpeedy) {
			var a = function(e) {
				if (e.sheet) return e.sheet;
				for (var n = 0; n < document.styleSheets.length; n++) if (document.styleSheets[n].ownerNode === e) return document.styleSheets[n];
			}(t);
			try {
				a.insertRule(e, a.cssRules.length);
			} catch (e) {}
		} else t.appendChild(document.createTextNode(e));
		this.ctr++;
	}, n.flush = function() {
		this.tags.forEach(function(e) {
			var n;
			return null == (n = e.parentNode) ? void 0 : n.removeChild(e);
		}), this.tags = [], this.ctr = 0;
	}, e;
}(), aL = "-ms-", aR = "-moz-", a$ = "-webkit-", aD = "comm", aO = "rule", aH = "decl", aV = "@keyframes", aI = Math.abs, aB = String.fromCharCode, aF = Object.assign;
function aE(e, n, t) {
	return e.replace(n, t);
}
function aj(e, n) {
	return e.indexOf(n);
}
function aW(e, n) {
	return 0 | e.charCodeAt(n);
}
function az(e, n, t) {
	return e.slice(n, t);
}
function aU(e) {
	return e.length;
}
function aq(e, n) {
	return n.push(e), e;
}
var aG = 1, aY = 1, aX = 0, aK = 0, aZ = 0, aJ = "";
function aQ(e, n, t, a, r, s, o) {
	return {
		value: e,
		root: n,
		parent: t,
		type: a,
		props: r,
		children: s,
		line: aG,
		column: aY,
		length: o,
		return: ""
	};
}
function a1(e, n) {
	return aF(aQ("", null, null, "", null, null, 0), e, { length: -e.length }, n);
}
function a0() {
	return aZ = aK < aX ? aW(aJ, aK++) : 0, aY++, 10 === aZ && (aY = 1, aG++), aZ;
}
function a2() {
	return aW(aJ, aK);
}
function a5(e) {
	switch (e) {
		case 0:
		case 9:
		case 10:
		case 13:
		case 32: return 5;
		case 33:
		case 43:
		case 44:
		case 47:
		case 62:
		case 64:
		case 126:
		case 59:
		case 123:
		case 125: return 4;
		case 58: return 3;
		case 34:
		case 39:
		case 40:
		case 91: return 2;
		case 41:
		case 93: return 1;
	}
	return 0;
}
function a4(e) {
	return aG = aY = 1, aX = aU(aJ = e), aK = 0, [];
}
function a3(e) {
	var n, t;
	return (n = aK - 1, t = function e(n) {
		for (; a0();) switch (aZ) {
			case n: return aK;
			case 34:
			case 39:
				34 !== n && 39 !== n && e(aZ);
				break;
			case 40:
				41 === n && e(n);
				break;
			case 92: a0();
		}
		return aK;
	}(91 === e ? e + 2 : 40 === e ? e + 1 : e), az(aJ, n, t)).trim();
}
function a6(e, n, t, a, r, s, o, i, l, c, u) {
	for (var p = r - 1, d = 0 === r ? s : [""], h = d.length, m = 0, f = 0, k = 0; m < a; ++m) for (var g = 0, N = az(e, p + 1, p = aI(f = o[m])), y = e; g < h; ++g) (y = (f > 0 ? d[g] + " " + N : aE(N, /&\f/g, d[g])).trim()) && (l[k++] = y);
	return aQ(e, n, t, 0 === r ? aO : i, l, c, u);
}
function a9(e, n, t, a) {
	return aQ(e, n, t, aH, az(e, 0, a), az(e, a + 1, -1), a);
}
function a8(e, n) {
	for (var t = "", a = e.length, r = 0; r < a; r++) t += n(e[r], r, e, n) || "";
	return t;
}
function a7(e, n, t, a) {
	switch (e.type) {
		case "@layer": if (e.children.length) break;
		case "@import":
		case aH: return e.return = e.return || e.value;
		case aD: return "";
		case aV: return e.return = e.value + "{" + a8(e.children, a) + "}";
		case aO: e.value = e.props.join(",");
	}
	return aU(t = a8(e.children, a)) ? e.return = e.value + "{" + t + "}" : "";
}
var re = function(e, n, t) {
	for (var a = 0, r = 0; a = r, r = a2(), 38 === a && 12 === r && (n[t] = 1), !a5(r);) a0();
	return az(aJ, e, aK);
}, rn = function(e, n) {
	var t = -1, a = 44;
	do
		switch (a5(a)) {
			case 0:
				38 === a && 12 === a2() && (n[t] = 1), e[t] += re(aK - 1, n, t);
				break;
			case 2:
				e[t] += a3(a);
				break;
			case 4: if (44 === a) {
				e[++t] = 58 === a2() ? "&\f" : "", n[t] = e[t].length;
				break;
			}
			default: e[t] += aB(a);
		}
	while (a = a0());
	return e;
}, rt = function(e, n) {
	var t;
	return t = rn(a4(e), n), aJ = "", t;
}, ra = /* @__PURE__ */ new WeakMap(), rr = function(e) {
	if ("rule" === e.type && e.parent && !(e.length < 1)) {
		for (var n = e.value, t = e.parent, a = e.column === t.column && e.line === t.line; "rule" !== t.type;) if (!(t = t.parent)) return;
		if ((1 !== e.props.length || 58 === n.charCodeAt(0) || ra.get(t)) && !a) {
			ra.set(e, !0);
			for (var r = [], s = rt(n, r), o = t.props, i = 0, l = 0; i < s.length; i++) for (var c = 0; c < o.length; c++, l++) e.props[l] = r[i] ? s[i].replace(/&\f/g, o[c]) : o[c] + " " + s[i];
		}
	}
}, rs = function(e) {
	if ("decl" === e.type) {
		var n = e.value;
		108 === n.charCodeAt(0) && 98 === n.charCodeAt(2) && (e.return = "", e.value = "");
	}
}, ro = [function(e, n, t, a) {
	if (e.length > -1 && !e.return) switch (e.type) {
		case aH:
			e.return = function e(n, t) {
				switch (45 ^ aW(n, 0) ? (((t << 2 ^ aW(n, 0)) << 2 ^ aW(n, 1)) << 2 ^ aW(n, 2)) << 2 ^ aW(n, 3) : 0) {
					case 5103: return a$ + "print-" + n + n;
					case 5737:
					case 4201:
					case 3177:
					case 3433:
					case 1641:
					case 4457:
					case 2921:
					case 5572:
					case 6356:
					case 5844:
					case 3191:
					case 6645:
					case 3005:
					case 6391:
					case 5879:
					case 5623:
					case 6135:
					case 4599:
					case 4855:
					case 4215:
					case 6389:
					case 5109:
					case 5365:
					case 5621:
					case 3829: return a$ + n + n;
					case 5349:
					case 4246:
					case 4810:
					case 6968:
					case 2756: return a$ + n + aR + n + aL + n + n;
					case 6828:
					case 4268: return a$ + n + aL + n + n;
					case 6165: return a$ + n + aL + "flex-" + n + n;
					case 5187: return a$ + n + aE(n, /(\w+).+(:[^]+)/, a$ + "box-$1$2" + aL + "flex-$1$2") + n;
					case 5443: return a$ + n + aL + "flex-item-" + aE(n, /flex-|-self/, "") + n;
					case 4675: return a$ + n + aL + "flex-line-pack" + aE(n, /align-content|flex-|-self/, "") + n;
					case 5548: return a$ + n + aL + aE(n, "shrink", "negative") + n;
					case 5292: return a$ + n + aL + aE(n, "basis", "preferred-size") + n;
					case 6060: return a$ + "box-" + aE(n, "-grow", "") + a$ + n + aL + aE(n, "grow", "positive") + n;
					case 4554: return a$ + aE(n, /([^-])(transform)/g, "$1" + a$ + "$2") + n;
					case 6187: return aE(aE(aE(n, /(zoom-|grab)/, a$ + "$1"), /(image-set)/, a$ + "$1"), n, "") + n;
					case 5495:
					case 3959: return aE(n, /(image-set\([^]*)/, a$ + "$1$`$1");
					case 4968: return aE(aE(n, /(.+:)(flex-)?(.*)/, a$ + "box-pack:$3" + aL + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + a$ + n + n;
					case 4095:
					case 3583:
					case 4068:
					case 2532: return aE(n, /(.+)-inline(.+)/, a$ + "$1$2") + n;
					case 8116:
					case 7059:
					case 5753:
					case 5535:
					case 5445:
					case 5701:
					case 4933:
					case 4677:
					case 5533:
					case 5789:
					case 5021:
					case 4765:
						if (aU(n) - 1 - t > 6) switch (aW(n, t + 1)) {
							case 109: if (45 !== aW(n, t + 4)) break;
							case 102: return aE(n, /(.+:)(.+)-([^]+)/, "$1" + a$ + "$2-$3$1" + aR + (108 == aW(n, t + 3) ? "$3" : "$2-$3")) + n;
							case 115: return ~aj(n, "stretch") ? e(aE(n, "stretch", "fill-available"), t) + n : n;
						}
						break;
					case 4949: if (115 !== aW(n, t + 1)) break;
					case 6444:
						switch (aW(n, aU(n) - 3 - (~aj(n, "!important") && 10))) {
							case 107: return aE(n, ":", ":" + a$) + n;
							case 101: return aE(n, /(.+:)([^;!]+)(;|!.+)?/, "$1" + a$ + (45 === aW(n, 14) ? "inline-" : "") + "box$3$1" + a$ + "$2$3$1" + aL + "$2box$3") + n;
						}
						break;
					case 5936:
						switch (aW(n, t + 11)) {
							case 114: return a$ + n + aL + aE(n, /[svh]\w+-[tblr]{2}/, "tb") + n;
							case 108: return a$ + n + aL + aE(n, /[svh]\w+-[tblr]{2}/, "tb-rl") + n;
							case 45: return a$ + n + aL + aE(n, /[svh]\w+-[tblr]{2}/, "lr") + n;
						}
						return a$ + n + aL + n + n;
				}
				return n;
			}(e.value, e.length);
			break;
		case aV: return a8([a1(e, { value: aE(e.value, "@", "@" + a$) })], a);
		case aO: if (e.length) {
			var r, s;
			return r = e.props, s = function(n) {
				var t;
				switch (t = n, (t = /(::plac\w+|:read-\w+)/.exec(t)) ? t[0] : t) {
					case ":read-only":
					case ":read-write": return a8([a1(e, { props: [aE(n, /:(read-\w+)/, ":" + aR + "$1")] })], a);
					case "::placeholder": return a8([
						a1(e, { props: [aE(n, /:(plac\w+)/, ":" + a$ + "input-$1")] }),
						a1(e, { props: [aE(n, /:(plac\w+)/, ":" + aR + "$1")] }),
						a1(e, { props: [aE(n, /:(plac\w+)/, aL + "input-$1")] })
					], a);
				}
				return "";
			}, r.map(s).join("");
		}
	}
}], ri = function(e) {
	var n, t, a, r, s, o = e.key;
	if ("css" === o) {
		var i = document.querySelectorAll("style[data-emotion]:not([data-s])");
		Array.prototype.forEach.call(i, function(e) {
			-1 !== e.getAttribute("data-emotion").indexOf(" ") && (document.head.appendChild(e), e.setAttribute("data-s", ""));
		});
	}
	var l = e.stylisPlugins || ro, c = {}, u = [];
	r = e.container || document.head, Array.prototype.forEach.call(document.querySelectorAll("style[data-emotion^=\"" + o + " \"]"), function(e) {
		for (var n = e.getAttribute("data-emotion").split(" "), t = 1; t < n.length; t++) c[n[t]] = !0;
		u.push(e);
	});
	var p = (t = (n = [rr, rs].concat(l, [a7, (a = function(e) {
		s.insert(e);
	}, function(e) {
		!e.root && (e = e.return) && a(e);
	})])).length, function(e, a, r, s) {
		for (var o = "", i = 0; i < t; i++) o += n[i](e, a, r, s) || "";
		return o;
	}), d = function(e) {
		var n, t;
		return a8((t = function e(n, t, a, r, s, o, i, l, c) {
			for (var u, p = 0, d = 0, h = i, m = 0, f = 0, k = 0, g = 1, N = 1, y = 1, b = 0, v = "", x = s, w = o, C = r, M = v; N;) switch (k = b, b = a0()) {
				case 40: if (108 != k && 58 == aW(M, h - 1)) {
					-1 != aj(M += aE(a3(b), "&", "&\f"), "&\f") && (y = -1);
					break;
				}
				case 34:
				case 39:
				case 91:
					M += a3(b);
					break;
				case 9:
				case 10:
				case 13:
				case 32:
					M += function(e) {
						for (; aZ = a2();) if (aZ < 33) a0();
						else break;
						return a5(e) > 2 || a5(aZ) > 3 ? "" : " ";
					}(k);
					break;
				case 92:
					M += function(e, n) {
						for (var t; --n && a0() && !(aZ < 48) && !(aZ > 102) && (!(aZ > 57) || !(aZ < 65)) && (!(aZ > 70) || !(aZ < 97)););
						return t = aK + (n < 6 && 32 == a2() && 32 == a0()), az(aJ, e, t);
					}(aK - 1, 7);
					continue;
				case 47:
					switch (a2()) {
						case 42:
						case 47:
							aq((u = function(e, n) {
								for (; a0();) if (e + aZ === 57) break;
								else if (e + aZ === 84 && 47 === a2()) break;
								return "/*" + az(aJ, n, aK - 1) + "*" + aB(47 === e ? e : a0());
							}(a0(), aK), aQ(u, t, a, aD, aB(aZ), az(u, 2, -2), 0)), c);
							break;
						default: M += "/";
					}
					break;
				case 123 * g: l[p++] = aU(M) * y;
				case 125 * g:
				case 59:
				case 0:
					switch (b) {
						case 0:
						case 125: N = 0;
						case 59 + d:
							-1 == y && (M = aE(M, /\f/g, "")), f > 0 && aU(M) - h && aq(f > 32 ? a9(M + ";", r, a, h - 1) : a9(aE(M, " ", "") + ";", r, a, h - 2), c);
							break;
						case 59: M += ";";
						default: if (aq(C = a6(M, t, a, p, d, s, l, v, x = [], w = [], h), o), 123 === b) if (0 === d) e(M, t, C, C, x, o, h, l, w);
						else switch (99 === m && 110 === aW(M, 3) ? 100 : m) {
							case 100:
							case 108:
							case 109:
							case 115:
								e(n, C, C, r && aq(a6(n, C, C, 0, 0, s, l, v, s, x = [], h), w), s, w, h, l, r ? x : w);
								break;
							default: e(M, C, C, C, [""], w, 0, l, w);
						}
					}
					p = d = f = 0, g = y = 1, v = M = "", h = i;
					break;
				case 58: h = 1 + aU(M), f = k;
				default:
					if (g < 1) {
						if (123 == b) --g;
						else if (125 == b && 0 == g++ && 125 == (aZ = aK > 0 ? aW(aJ, --aK) : 0, aY--, 10 === aZ && (aY = 1, aG--), aZ)) continue;
					}
					switch (M += aB(b), b * g) {
						case 38:
							y = d > 0 ? 1 : (M += "\f", -1);
							break;
						case 44:
							l[p++] = (aU(M) - 1) * y, y = 1;
							break;
						case 64:
							45 === a2() && (M += a3(a0())), m = a2(), d = h = aU(v = M += function(e) {
								for (; !a5(a2());) a0();
								return az(aJ, e, aK);
							}(aK)), b++;
							break;
						case 45: 45 === k && 2 == aU(M) && (g = 0);
					}
			}
			return o;
		}("", null, null, null, [""], n = a4(n = e), 0, [0], n), aJ = "", t), p);
	}, h = {
		key: o,
		sheet: new aT({
			key: o,
			container: r,
			nonce: e.nonce,
			speedy: e.speedy,
			prepend: e.prepend,
			insertionPoint: e.insertionPoint
		}),
		nonce: e.nonce,
		inserted: c,
		registered: {},
		insert: function(e, n, t, a) {
			s = t, d(e ? e + "{" + n.styles + "}" : n.styles), a && (h.inserted[n.name] = !0);
		}
	};
	return h.sheet.hydrate(u), h;
}, rl = function(e, n, t) {
	var a = e.key + "-" + n.name;
	!1 === t && void 0 === e.registered[a] && (e.registered[a] = n.styles);
}, rc = function(e, n, t) {
	rl(e, n, t);
	var a = e.key + "-" + n.name;
	if (void 0 === e.inserted[n.name]) {
		var r = n;
		do
			e.insert(n === r ? "." + a : "", r, e.sheet, !0), r = r.next;
		while (void 0 !== r);
	}
};
let ru = ea(() => ri({ key: "css" }), { name: "Cache" }), rp = (e) => (n) => {
	n.serialized && (n.withoutScoping ? e.insert("", n.serialized, e.sheet, !0) : rc(e, n.serialized, n.isStringTag ?? !0));
};
var rd = f({
	sx: A(),
	component: A().optional().default("div")
}, (e, { slots: n, expose: t }) => {
	let a = aA.use(), r = ru.use(), s = a.unstable_css(r, e.sx ?? {}), o = rp(r);
	et(() => {
		o({
			serialized: s,
			isStringTag: !0
		});
	});
	let i = Z(null);
	return t({ [en]: i }), () => H(e.component ?? "div", {
		ref: i,
		class: "0" !== s.name ? `${r.key}-${s.name}` : "",
		children: n
	});
});
function rh(...e) {
	let n, t = "div", a = {}, r = {};
	for (let s of e) {
		if (w(s)) {
			n = s;
			continue;
		}
		if (R(s) || x(s)) {
			t = s;
			continue;
		}
		k(n) && em(s) ? a = s : r = s;
	}
	return n ??= (e, n) => (t) => {
		let a = {};
		for (let n in e) "component" !== n && "sx" !== n && e[n] && (a[`data-${n}`] = e[n]);
		return H(t, {
			...a,
			children: n.slots
		});
	}, (e) => {
		let s = Object.assign(f({
			...a,
			sx: A().optional(),
			component: A().optional()
		}, (a, r) => {
			let o = aA.use(), i = ru.use(), l = rp(i), c = W(""), u = o.unstable_css(i, e), p = () => ("0" !== u.name ? `${i.key}-${u.name}${c.value}` : `${c.value}`) + (s.name ? ` ${s.name}` : "");
			if (t.__styled) {
				let e = o.unstable_css(i, a.sx ?? {});
				"0" !== e.name && (c.value = ` ${i.key}-${e.name}`), et(() => {
					l({
						serialized: u,
						isStringTag: !0
					}), l({
						serialized: e,
						isStringTag: !0
					});
				});
			} else I(() => {
				l({
					serialized: u,
					isStringTag: !0
				});
			});
			let d = n(a, r), h = Z(null);
			return r.expose({ [en]: h }), () => {
				if (t.__styled) {
					let e = d(t);
					return e ? es(e, {
						component: a.component,
						ref: h,
						class: p()
					}) : null;
				}
				let e = d(rd);
				return e ? es(e, {
					component: a.component || t,
					sx: a.sx,
					ref: h,
					class: p()
				}) : null;
			};
		}, r), { __styled: !0 });
		return s.toString = () => `.${s.name}`, s;
	};
}
var rm = f(({ styles: e }) => {
	let n = aA.use(), t = ru.use(), a = rp(t), r = n.unstable_css(t, R(e) ? { "&": e } : e);
	return I(() => {
		a({
			serialized: r,
			withoutScoping: !0
		});
	}), () => null;
}, {
	displayName: "GlobalStyle",
	props: ["styles"]
}), rf = f(() => {
	let e = aA.use().rootCSSVars;
	return () => H(rm, { styles: {
		":host, :root, [data-theme]": e,
		"*, *::after, *::before": { boxSizing: "border-box" },
		html: { fontSize: "10px" },
		a: { color: "inherit" },
		body: { textStyle: "sys.body-medium" }
	} });
}, { displayName: "CSSReset" });
let rk = ea(() => ({ mountPoint: () => document.body }), { name: "OverlaySetting" });
var rg = ea(() => new rN(z(null), z(null), () => !1), { name: "Overlay" }), rN = class {
	children = [];
	constructor(e, n, t) {
		this.triggerRef = e, this.contentRef = n, this.isOpen = t;
	}
	add = (e) => (this.children = [...this.children, e], () => {
		this.children = this.children.filter((n) => n !== e);
	});
	isClickInside = (e) => {
		for (let n of this.children) if (n.isClickInside(e)) return !0;
		let n = $(this.triggerRef), t = $(this.contentRef);
		return n && (n === e.target || e.composedPath().includes(n)) || t && (t === e.target || e.composedPath().includes(t));
	};
	topmost() {
		return 0 === this.children.filter((e) => e.isOpen()).length;
	}
}, ry = f((e, { slots: n, attrs: t, emit: a }) => {
	let r = e.contentRef || z(null), s = new rN(e.triggerRef ?? z(null), r, () => !!e.isOpen), o = rk.use();
	return E(rg.use().add(s)), window && j(Q(r, "value"), U((e) => {
		if (!e) return;
		let n = (e) => {
			s.isClickInside(e) || a("click-outside", e);
		};
		return window.addEventListener("pointerdown", n), () => {
			window.removeEventListener("pointerdown", n);
		};
	}), U((e) => {
		if (!e) return;
		let n = (e) => {
			"Escape" === e.key && s.topmost() && a("esc-keydown", e);
		};
		return window.addEventListener("keydown", n), () => {
			window.removeEventListener("keydown", n);
		};
	}), F()), () => {
		let i = e.isOpen ? es(H("div", {
			...t,
			ref: r,
			style: e.style,
			children: H(rg, {
				value: s,
				children: n.default?.()
			})
		}), { onVnodeBeforeMount: () => {
			a("content-before-mount");
		} }) : null;
		return H(D, {
			to: o.mountPoint(),
			children: n.transition ? n.transition({ content: i }) : i
		});
	};
}, {
	name: "Overlay",
	inheritAttrs: !1
}, {
	displayName: "Overlay",
	props: [
		"isOpen",
		"style",
		"contentRef",
		"triggerRef"
	],
	emits: [
		"click-outside",
		"esc-keydown",
		"content-before-mount"
	]
}), rb = Math.min, rv = Math.max, rx = Math.round, rw = Math.floor, rC = (e) => ({
	x: e,
	y: e
}), rM = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
}, rP = {
	start: "end",
	end: "start"
};
function rS(e, n) {
	return "function" == typeof e ? e(n) : e;
}
function r_(e) {
	return e.split("-")[0];
}
function rA(e) {
	return e.split("-")[1];
}
function rT(e) {
	return "x" === e ? "y" : "x";
}
function rL(e) {
	return "y" === e ? "height" : "width";
}
var rR = new Set(["top", "bottom"]);
function r$(e) {
	return rR.has(r_(e)) ? "y" : "x";
}
function rD(e) {
	return e.replace(/start|end/g, (e) => rP[e]);
}
var rO = ["left", "right"], rH = ["right", "left"], rV = ["top", "bottom"], rI = ["bottom", "top"];
function rB(e) {
	return e.replace(/left|right|bottom|top/g, (e) => rM[e]);
}
function rF(e) {
	let { x: n, y: t, width: a, height: r } = e;
	return {
		width: a,
		height: r,
		top: t,
		left: n,
		right: n + a,
		bottom: t + r,
		x: n,
		y: t
	};
}
function rE(e, n, t) {
	let a, { reference: r, floating: s } = e, o = r$(n), i = rT(r$(n)), l = rL(i), c = r_(n), u = "y" === o, p = r.x + r.width / 2 - s.width / 2, d = r.y + r.height / 2 - s.height / 2, h = r[l] / 2 - s[l] / 2;
	switch (c) {
		case "top":
			a = {
				x: p,
				y: r.y - s.height
			};
			break;
		case "bottom":
			a = {
				x: p,
				y: r.y + r.height
			};
			break;
		case "right":
			a = {
				x: r.x + r.width,
				y: d
			};
			break;
		case "left":
			a = {
				x: r.x - s.width,
				y: d
			};
			break;
		default: a = {
			x: r.x,
			y: r.y
		};
	}
	switch (rA(n)) {
		case "start":
			a[i] -= h * (t && u ? -1 : 1);
			break;
		case "end": a[i] += h * (t && u ? -1 : 1);
	}
	return a;
}
var rj = async (e, n, t) => {
	let { placement: a = "bottom", strategy: r = "absolute", middleware: s = [], platform: o } = t, i = s.filter(Boolean), l = await (null == o.isRTL ? void 0 : o.isRTL(n)), c = await o.getElementRects({
		reference: e,
		floating: n,
		strategy: r
	}), { x: u, y: p } = rE(c, a, l), d = a, h = {}, m = 0;
	for (let t = 0; t < i.length; t++) {
		let { name: s, fn: f } = i[t], { x: k, y: g, data: N, reset: y } = await f({
			x: u,
			y: p,
			initialPlacement: a,
			placement: d,
			strategy: r,
			middlewareData: h,
			rects: c,
			platform: o,
			elements: {
				reference: e,
				floating: n
			}
		});
		u = null != k ? k : u, p = null != g ? g : p, h = {
			...h,
			[s]: {
				...h[s],
				...N
			}
		}, y && m <= 50 && (m++, "object" == typeof y && (y.placement && (d = y.placement), y.rects && (c = !0 === y.rects ? await o.getElementRects({
			reference: e,
			floating: n,
			strategy: r
		}) : y.rects), {x: u, y: p} = rE(c, d, l)), t = -1);
	}
	return {
		x: u,
		y: p,
		placement: d,
		strategy: r,
		middlewareData: h
	};
};
async function rW(e, n) {
	var t, a;
	void 0 === n && (n = {});
	let { x: r, y: s, platform: o, rects: i, elements: l, strategy: c } = e, { boundary: u = "clippingAncestors", rootBoundary: p = "viewport", elementContext: d = "floating", altBoundary: h = !1, padding: m = 0 } = rS(n, e), f = "number" != typeof (a = m) ? {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...a
	} : {
		top: a,
		right: a,
		bottom: a,
		left: a
	}, k = l[h ? "floating" === d ? "reference" : "floating" : d], g = rF(await o.getClippingRect({
		element: null == (t = await (null == o.isElement ? void 0 : o.isElement(k))) || t ? k : k.contextElement || await (null == o.getDocumentElement ? void 0 : o.getDocumentElement(l.floating)),
		boundary: u,
		rootBoundary: p,
		strategy: c
	})), N = "floating" === d ? {
		x: r,
		y: s,
		width: i.floating.width,
		height: i.floating.height
	} : i.reference, y = await (null == o.getOffsetParent ? void 0 : o.getOffsetParent(l.floating)), b = await (null == o.isElement ? void 0 : o.isElement(y)) && await (null == o.getScale ? void 0 : o.getScale(y)) || {
		x: 1,
		y: 1
	}, v = rF(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
		elements: l,
		rect: N,
		offsetParent: y,
		strategy: c
	}) : N);
	return {
		top: (g.top - v.top + f.top) / b.y,
		bottom: (v.bottom - g.bottom + f.bottom) / b.y,
		left: (g.left - v.left + f.left) / b.x,
		right: (v.right - g.right + f.right) / b.x
	};
}
function rz() {
	return "undefined" != typeof window;
}
function rU(e) {
	return rY(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function rq(e) {
	var n;
	return (null == e || null == (n = e.ownerDocument) ? void 0 : n.defaultView) || window;
}
function rG(e) {
	var n;
	return null == (n = (rY(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : n.documentElement;
}
function rY(e) {
	return !!rz() && (e instanceof Node || e instanceof rq(e).Node);
}
function rX(e) {
	return !!rz() && (e instanceof Element || e instanceof rq(e).Element);
}
function rK(e) {
	return !!rz() && (e instanceof HTMLElement || e instanceof rq(e).HTMLElement);
}
function rZ(e) {
	return !!rz() && "undefined" != typeof ShadowRoot && (e instanceof ShadowRoot || e instanceof rq(e).ShadowRoot);
}
var rJ = new Set(["inline", "contents"]);
function rQ(e) {
	let { overflow: n, overflowX: t, overflowY: a, display: r } = se(e);
	return /auto|scroll|overlay|hidden|clip/.test(n + a + t) && !rJ.has(r);
}
var r1 = new Set([
	"table",
	"td",
	"th"
]), r0 = [":popover-open", ":modal"];
function r2(e) {
	return r0.some((n) => {
		try {
			return e.matches(n);
		} catch (e) {
			return !1;
		}
	});
}
var r5 = [
	"transform",
	"translate",
	"scale",
	"rotate",
	"perspective"
], r4 = [
	"transform",
	"translate",
	"scale",
	"rotate",
	"perspective",
	"filter"
], r3 = [
	"paint",
	"layout",
	"strict",
	"content"
];
function r6(e) {
	let n = r9(), t = rX(e) ? se(e) : e;
	return r5.some((e) => !!t[e] && "none" !== t[e]) || !!t.containerType && "normal" !== t.containerType || !n && !!t.backdropFilter && "none" !== t.backdropFilter || !n && !!t.filter && "none" !== t.filter || r4.some((e) => (t.willChange || "").includes(e)) || r3.some((e) => (t.contain || "").includes(e));
}
function r9() {
	return "undefined" != typeof CSS && !!CSS.supports && CSS.supports("-webkit-backdrop-filter", "none");
}
var r8 = new Set([
	"html",
	"body",
	"#document"
]);
function r7(e) {
	return r8.has(rU(e));
}
function se(e) {
	return rq(e).getComputedStyle(e);
}
function sn(e) {
	return rX(e) ? {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	} : {
		scrollLeft: e.scrollX,
		scrollTop: e.scrollY
	};
}
function st(e) {
	if ("html" === rU(e)) return e;
	let n = e.assignedSlot || e.parentNode || rZ(e) && e.host || rG(e);
	return rZ(n) ? n.host : n;
}
function sa(e, n, t) {
	var a;
	void 0 === n && (n = []), void 0 === t && (t = !0);
	let r = function e(n) {
		let t = st(n);
		return r7(t) ? n.ownerDocument ? n.ownerDocument.body : n.body : rK(t) && rQ(t) ? t : e(t);
	}(e), s = r === (null == (a = e.ownerDocument) ? void 0 : a.body), o = rq(r);
	if (s) {
		let e = sr(o);
		return n.concat(o, o.visualViewport || [], rQ(r) ? r : [], e && t ? sa(e) : []);
	}
	return n.concat(r, sa(r, [], t));
}
function sr(e) {
	return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function ss(e) {
	let n = se(e), t = parseFloat(n.width) || 0, a = parseFloat(n.height) || 0, r = rK(e), s = r ? e.offsetWidth : t, o = r ? e.offsetHeight : a, i = rx(t) !== s || rx(a) !== o;
	return i && (t = s, a = o), {
		width: t,
		height: a,
		$: i
	};
}
function so(e) {
	return rX(e) ? e : e.contextElement;
}
function si(e) {
	let n = so(e);
	if (!rK(n)) return rC(1);
	let t = n.getBoundingClientRect(), { width: a, height: r, $: s } = ss(n), o = (s ? rx(t.width) : t.width) / a, i = (s ? rx(t.height) : t.height) / r;
	return o && Number.isFinite(o) || (o = 1), i && Number.isFinite(i) || (i = 1), {
		x: o,
		y: i
	};
}
var sl = rC(0);
function sc(e) {
	let n = rq(e);
	return r9() && n.visualViewport ? {
		x: n.visualViewport.offsetLeft,
		y: n.visualViewport.offsetTop
	} : sl;
}
function su(e, n, t, a) {
	var r;
	void 0 === n && (n = !1), void 0 === t && (t = !1);
	let s = e.getBoundingClientRect(), o = so(e), i = rC(1);
	n && (a ? rX(a) && (i = si(a)) : i = si(e));
	let l = (void 0 === (r = t) && (r = !1), a && (!r || a === rq(o)) && r) ? sc(o) : rC(0), c = (s.left + l.x) / i.x, u = (s.top + l.y) / i.y, p = s.width / i.x, d = s.height / i.y;
	if (o) {
		let e = rq(o), n = a && rX(a) ? rq(a) : a, t = e, r = sr(t);
		for (; r && a && n !== t;) {
			let e = si(r), n = r.getBoundingClientRect(), a = se(r), s = n.left + (r.clientLeft + parseFloat(a.paddingLeft)) * e.x, o = n.top + (r.clientTop + parseFloat(a.paddingTop)) * e.y;
			c *= e.x, u *= e.y, p *= e.x, d *= e.y, c += s, u += o, r = sr(t = rq(r));
		}
	}
	return rF({
		width: p,
		height: d,
		x: c,
		y: u
	});
}
function sp(e, n) {
	let t = sn(e).scrollLeft;
	return n ? n.left + t : su(rG(e)).left + t;
}
function sd(e, n) {
	let t = e.getBoundingClientRect();
	return {
		x: t.left + n.scrollLeft - sp(e, t),
		y: t.top + n.scrollTop
	};
}
var sh = new Set(["absolute", "fixed"]);
function sm(e, n, t) {
	let a;
	if ("viewport" === n) a = function(e, n) {
		let t = rq(e), a = rG(e), r = t.visualViewport, s = a.clientWidth, o = a.clientHeight, i = 0, l = 0;
		if (r) {
			s = r.width, o = r.height;
			let e = r9();
			(!e || e && "fixed" === n) && (i = r.offsetLeft, l = r.offsetTop);
		}
		let c = sp(a);
		if (c <= 0) {
			let e = a.ownerDocument, n = e.body, t = getComputedStyle(n), r = "CSS1Compat" === e.compatMode && parseFloat(t.marginLeft) + parseFloat(t.marginRight) || 0, o = Math.abs(a.clientWidth - n.clientWidth - r);
			o <= 25 && (s -= o);
		} else c <= 25 && (s += c);
		return {
			width: s,
			height: o,
			x: i,
			y: l
		};
	}(e, t);
	else if ("document" === n) a = function(e) {
		let n = rG(e), t = sn(e), a = e.ownerDocument.body, r = rv(n.scrollWidth, n.clientWidth, a.scrollWidth, a.clientWidth), s = rv(n.scrollHeight, n.clientHeight, a.scrollHeight, a.clientHeight), o = -t.scrollLeft + sp(e), i = -t.scrollTop;
		return "rtl" === se(a).direction && (o += rv(n.clientWidth, a.clientWidth) - r), {
			width: r,
			height: s,
			x: o,
			y: i
		};
	}(rG(e));
	else if (rX(n)) a = function(e, n) {
		let t = su(e, !0, "fixed" === n), a = t.top + e.clientTop, r = t.left + e.clientLeft, s = rK(e) ? si(e) : rC(1);
		return {
			width: e.clientWidth * s.x,
			height: e.clientHeight * s.y,
			x: r * s.x,
			y: a * s.y
		};
	}(n, t);
	else {
		let t = sc(e);
		a = {
			x: n.x - t.x,
			y: n.y - t.y,
			width: n.width,
			height: n.height
		};
	}
	return rF(a);
}
function sf(e) {
	return "static" === se(e).position;
}
function sk(e, n) {
	if (!rK(e) || "fixed" === se(e).position) return null;
	if (n) return n(e);
	let t = e.offsetParent;
	return rG(e) === t && (t = t.ownerDocument.body), t;
}
function sg(e, n) {
	var t;
	let a = rq(e);
	if (r2(e)) return a;
	if (!rK(e)) {
		let n = st(e);
		for (; n && !r7(n);) {
			if (rX(n) && !sf(n)) return n;
			n = st(n);
		}
		return a;
	}
	let r = sk(e, n);
	for (; r && (t = r, r1.has(rU(t))) && sf(r);) r = sk(r, n);
	return r && r7(r) && sf(r) && !r6(r) ? a : r || function(e) {
		let n = st(e);
		for (; rK(n) && !r7(n);) {
			if (r6(n)) return n;
			if (r2(n)) break;
			n = st(n);
		}
		return null;
	}(e) || a;
}
var sN = async function(e) {
	let n = this.getOffsetParent || sg, t = this.getDimensions, a = await t(e.floating);
	return {
		reference: function(e, n, t) {
			let a = rK(n), r = rG(n), s = "fixed" === t, o = su(e, !0, s, n), i = {
				scrollLeft: 0,
				scrollTop: 0
			}, l = rC(0);
			if (a || !a && !s) if (("body" !== rU(n) || rQ(r)) && (i = sn(n)), a) {
				let e = su(n, !0, s, n);
				l.x = e.x + n.clientLeft, l.y = e.y + n.clientTop;
			} else r && (l.x = sp(r));
			s && !a && r && (l.x = sp(r));
			let c = !r || a || s ? rC(0) : sd(r, i);
			return {
				x: o.left + i.scrollLeft - l.x - c.x,
				y: o.top + i.scrollTop - l.y - c.y,
				width: o.width,
				height: o.height
			};
		}(e.reference, await n(e.floating), e.strategy),
		floating: {
			x: 0,
			y: 0,
			width: a.width,
			height: a.height
		}
	};
}, sy = {
	convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
		let { elements: n, rect: t, offsetParent: a, strategy: r } = e, s = "fixed" === r, o = rG(a), i = !!n && r2(n.floating);
		if (a === o || i && s) return t;
		let l = {
			scrollLeft: 0,
			scrollTop: 0
		}, c = rC(1), u = rC(0), p = rK(a);
		if ((p || !p && !s) && (("body" !== rU(a) || rQ(o)) && (l = sn(a)), rK(a))) {
			let e = su(a);
			c = si(a), u.x = e.x + a.clientLeft, u.y = e.y + a.clientTop;
		}
		let d = !o || p || s ? rC(0) : sd(o, l);
		return {
			width: t.width * c.x,
			height: t.height * c.y,
			x: t.x * c.x - l.scrollLeft * c.x + u.x + d.x,
			y: t.y * c.y - l.scrollTop * c.y + u.y + d.y
		};
	},
	getDocumentElement: rG,
	getClippingRect: function(e) {
		let { element: n, boundary: t, rootBoundary: a, strategy: r } = e, s = [..."clippingAncestors" === t ? r2(n) ? [] : function(e, n) {
			let t = n.get(e);
			if (t) return t;
			let a = sa(e, [], !1).filter((e) => rX(e) && "body" !== rU(e)), r = null, s = "fixed" === se(e).position, o = s ? st(e) : e;
			for (; rX(o) && !r7(o);) {
				let n = se(o), t = r6(o);
				t || "fixed" !== n.position || (r = null), (s ? !t && !r : !t && "static" === n.position && !!r && sh.has(r.position) || rQ(o) && !t && function e(n, t) {
					let a = st(n);
					return !(a === t || !rX(a) || r7(a)) && ("fixed" === se(a).position || e(a, t));
				}(e, o)) ? a = a.filter((e) => e !== o) : r = n, o = st(o);
			}
			return n.set(e, a), a;
		}(n, this._c) : [].concat(t), a], o = s[0], i = s.reduce((e, t) => {
			let a = sm(n, t, r);
			return e.top = rv(a.top, e.top), e.right = rb(a.right, e.right), e.bottom = rb(a.bottom, e.bottom), e.left = rv(a.left, e.left), e;
		}, sm(n, o, r));
		return {
			width: i.right - i.left,
			height: i.bottom - i.top,
			x: i.left,
			y: i.top
		};
	},
	getOffsetParent: sg,
	getElementRects: sN,
	getClientRects: function(e) {
		return Array.from(e.getClientRects());
	},
	getDimensions: function(e) {
		let { width: n, height: t } = ss(e);
		return {
			width: n,
			height: t
		};
	},
	getScale: si,
	isElement: rX,
	isRTL: function(e) {
		return "rtl" === se(e).direction;
	}
};
function sb(e, n) {
	return e.x === n.x && e.y === n.y && e.width === n.width && e.height === n.height;
}
var sv = function(e) {
	return void 0 === e && (e = {}), {
		name: "size",
		options: e,
		async fn(n) {
			var t, a;
			let r, s, { placement: o, rects: i, platform: l, elements: c } = n, { apply: u = () => {},...p } = rS(e, n), d = await rW(n, p), h = r_(o), m = rA(o), f = "y" === r$(o), { width: k, height: g } = i.floating;
			"top" === h || "bottom" === h ? (r = h, s = m === (await (null == l.isRTL ? void 0 : l.isRTL(c.floating)) ? "start" : "end") ? "left" : "right") : (s = h, r = "end" === m ? "top" : "bottom");
			let N = g - d.top - d.bottom, y = k - d.left - d.right, b = rb(g - d[r], N), v = rb(k - d[s], y), x = !n.middlewareData.shift, w = b, C = v;
			if (null != (t = n.middlewareData.shift) && t.enabled.x && (C = y), null != (a = n.middlewareData.shift) && a.enabled.y && (w = N), x && !m) {
				let e = rv(d.left, 0), n = rv(d.right, 0), t = rv(d.top, 0), a = rv(d.bottom, 0);
				f ? C = k - 2 * (0 !== e || 0 !== n ? e + n : rv(d.left, d.right)) : w = g - 2 * (0 !== t || 0 !== a ? t + a : rv(d.top, d.bottom));
			}
			await u({
				...n,
				availableWidth: C,
				availableHeight: w
			});
			let M = await l.getDimensions(c.floating);
			return k !== M.width || g !== M.height ? { reset: { rects: !0 } } : {};
		}
	};
}, sx = f((e, { slots: n, emit: t, attrs: a }) => {
	let r = ei(null), s = ei(null);
	return j(eu([r, s]), U(([n, t]) => {
		if (t && n) {
			let a = async () => {
				var a, r;
				t.style.position = "absolute";
				let s = await ((e, n, t) => {
					let a = /* @__PURE__ */ new Map(), r = {
						platform: sy,
						...t
					}, s = {
						...r.platform,
						_c: a
					};
					return rj(e, n, {
						...r,
						platform: s
					});
				})(n, t, {
					placement: e.placement ?? "bottom",
					middleware: [
						...e.modifiers ?? [],
						...e.middleware ?? [],
						(void 0 === a && (a = {}), {
							name: "flip",
							options: a,
							async fn(e) {
								var n, t, r, s, o;
								let { placement: i, middlewareData: l, rects: c, initialPlacement: u, platform: p, elements: d } = e, { mainAxis: h = !0, crossAxis: m = !0, fallbackPlacements: f, fallbackStrategy: k = "bestFit", fallbackAxisSideDirection: g = "none", flipAlignment: N = !0,...y } = rS(a, e);
								if (null != (n = l.arrow) && n.alignmentOffset) return {};
								let b = r_(i), v = r$(u), x = r_(u) === u, w = await (null == p.isRTL ? void 0 : p.isRTL(d.floating)), C = f || (x || !N ? [rB(u)] : function(e) {
									let n = rB(e);
									return [
										rD(e),
										n,
										rD(n)
									];
								}(u)), M = "none" !== g;
								!f && M && C.push(...function(e, n, t, a) {
									let r = rA(e), s = function(e, n, t) {
										switch (e) {
											case "top":
											case "bottom":
												if (t) return n ? rH : rO;
												return n ? rO : rH;
											case "left":
											case "right": return n ? rV : rI;
											default: return [];
										}
									}(r_(e), "start" === t, a);
									return r && (s = s.map((e) => e + "-" + r), n && (s = s.concat(s.map(rD)))), s;
								}(u, N, g, w));
								let P = [u, ...C], S = await rW(e, y), _ = [], A = (null == (t = l.flip) ? void 0 : t.overflows) || [];
								if (h && _.push(S[b]), m) {
									let e = function(e, n, t) {
										void 0 === t && (t = !1);
										let a = rA(e), r = rT(r$(e)), s = rL(r), o = "x" === r ? a === (t ? "end" : "start") ? "right" : "left" : "start" === a ? "bottom" : "top";
										return n.reference[s] > n.floating[s] && (o = rB(o)), [o, rB(o)];
									}(i, c, w);
									_.push(S[e[0]], S[e[1]]);
								}
								if (A = [...A, {
									placement: i,
									overflows: _
								}], !_.every((e) => e <= 0)) {
									let e = ((null == (r = l.flip) ? void 0 : r.index) || 0) + 1, n = P[e];
									if (n && ("alignment" !== m || v === r$(n) || A.every((e) => r$(e.placement) !== v || e.overflows[0] > 0))) return {
										data: {
											index: e,
											overflows: A
										},
										reset: { placement: n }
									};
									let t = null == (s = A.filter((e) => e.overflows[0] <= 0).sort((e, n) => e.overflows[1] - n.overflows[1])[0]) ? void 0 : s.placement;
									if (!t) switch (k) {
										case "bestFit": {
											let e = null == (o = A.filter((e) => {
												if (M) {
													let n = r$(e.placement);
													return n === v || "y" === n;
												}
												return !0;
											}).map((e) => [e.placement, e.overflows.filter((e) => e > 0).reduce((e, n) => e + n, 0)]).sort((e, n) => e[1] - n[1])[0]) ? void 0 : o[0];
											e && (t = e);
											break;
										}
										case "initialPlacement": t = u;
									}
									if (i !== t) return { reset: { placement: t } };
								}
								return {};
							}
						}),
						(void 0 === r && (r = {}), {
							name: "shift",
							options: r,
							async fn(e) {
								let { x: n, y: t, placement: a } = e, { mainAxis: s = !0, crossAxis: o = !1, limiter: i = { fn: (e) => {
									let { x: n, y: t } = e;
									return {
										x: n,
										y: t
									};
								} },...l } = rS(r, e), c = {
									x: n,
									y: t
								}, u = await rW(e, l), p = r$(r_(a)), d = rT(p), h = c[d], m = c[p];
								if (s) {
									let e = "y" === d ? "top" : "left", n = "y" === d ? "bottom" : "right", t = h + u[e], a = h - u[n];
									h = rv(t, rb(h, a));
								}
								if (o) {
									let e = "y" === p ? "top" : "left", n = "y" === p ? "bottom" : "right", t = m + u[e], a = m - u[n];
									m = rv(t, rb(m, a));
								}
								let f = i.fn({
									...e,
									[d]: h,
									[p]: m
								});
								return {
									...f,
									data: {
										x: f.x - n,
										y: f.y - t,
										enabled: {
											[d]: s,
											[p]: o
										}
									}
								};
							}
						})
					]
				});
				Object.assign(t.style, {
					left: `${s.x}px`,
					top: `${s.y}px`
				}), t.setAttribute("data-placement", s.placement);
			}, r = function(e, n, t, a) {
				let r;
				void 0 === a && (a = {});
				let { ancestorScroll: s = !0, ancestorResize: o = !0, elementResize: i = "function" == typeof ResizeObserver, layoutShift: l = "function" == typeof IntersectionObserver, animationFrame: c = !1 } = a, u = so(e), p = s || o ? [...u ? sa(u) : [], ...sa(n)] : [];
				p.forEach((e) => {
					s && e.addEventListener("scroll", t, { passive: !0 }), o && e.addEventListener("resize", t);
				});
				let d = u && l ? function(e, n) {
					let t, a = null, r = rG(e);
					function s() {
						var e;
						clearTimeout(t), null == (e = a) || e.disconnect(), a = null;
					}
					return function o(i, l) {
						void 0 === i && (i = !1), void 0 === l && (l = 1), s();
						let c = e.getBoundingClientRect(), { left: u, top: p, width: d, height: h } = c;
						if (i || n(), !d || !h) return;
						let m = rw(p), f = rw(r.clientWidth - (u + d)), k = {
							rootMargin: -m + "px " + -f + "px " + -rw(r.clientHeight - (p + h)) + "px " + -rw(u) + "px",
							threshold: rv(0, rb(1, l)) || 1
						}, g = !0;
						function N(n) {
							let a = n[0].intersectionRatio;
							if (a !== l) {
								if (!g) return o();
								a ? o(!1, a) : t = setTimeout(() => {
									o(!1, 1e-7);
								}, 1e3);
							}
							1 !== a || sb(c, e.getBoundingClientRect()) || o(), g = !1;
						}
						try {
							a = new IntersectionObserver(N, {
								...k,
								root: r.ownerDocument
							});
						} catch (e) {
							a = new IntersectionObserver(N, k);
						}
						a.observe(e);
					}(!0), s;
				}(u, t) : null, h = -1, m = null;
				i && (m = new ResizeObserver((e) => {
					let [a] = e;
					a && a.target === u && m && (m.unobserve(n), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
						var e;
						null == (e = m) || e.observe(n);
					})), t();
				}), u && !c && m.observe(u), m.observe(n));
				let f = c ? su(e) : null;
				return c && function n() {
					let a = su(e);
					f && !sb(f, a) && t(), f = a, r = requestAnimationFrame(n);
				}(), t(), () => {
					var e;
					p.forEach((e) => {
						s && e.removeEventListener("scroll", t), o && e.removeEventListener("resize", t);
					}), d?.(), null == (e = m) || e.disconnect(), m = null, c && cancelAnimationFrame(r);
				};
			}(n, t, a);
			return () => {
				r();
			};
		}
		return () => {};
	}), F()), () => {
		let o = n.default?.()[0];
		return o ? X(q, { children: [es(o, {
			...a,
			onVnodeMounted: (e) => {
				r.value = function e(n) {
					if (n) {
						if (n instanceof HTMLElement) return n;
						if (n instanceof Text) return e(n.nextElementSibling);
					}
					return null;
				}(e.el);
			}
		}), H(ry, {
			style: { zIndex: 100 },
			triggerRef: r,
			contentRef: s,
			isOpen: e.isOpen,
			onClickOutside: (e) => t("click-outside", e),
			onEscKeydown: (e) => t("esc-keydown", e),
			$transition: n.transition,
			children: n.content?.()
		})] }) : null;
	};
}, {
	name: "Popper",
	inheritAttrs: !1
}, {
	displayName: "Popper",
	props: [
		"isOpen",
		"style",
		"contentRef",
		"triggerRef",
		"placement",
		"middleware",
		"modifiers"
	],
	emits: [
		"click-outside",
		"esc-keydown",
		"content-before-mount"
	]
}), sw = "M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z", sC = "M12 2C17.5 2 22 6.5 22 12S17.5 22 12 22 2 17.5 2 12 6.5 2 12 2M12 4C10.1 4 8.4 4.6 7.1 5.7L18.3 16.9C19.3 15.5 20 13.8 20 12C20 7.6 16.4 4 12 4M16.9 18.3L5.7 7.1C4.6 8.4 4 10.1 4 12C4 16.4 7.6 20 12 20C13.9 20 15.6 19.4 16.9 18.3Z", sM = "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z", sP = "M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z", sS = "M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z", s_ = "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z", sA = "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z", sT = "M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z", sL = "M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z", sR = "M1,1V5H2V19H1V23H5V22H19V23H23V19H22V5H23V1H19V2H5V1M5,4H19V5H20V19H19V20H5V19H4V5H5M6,6V14H9V18H18V9H14V6M8,8H12V12H8M14,11H16V16H11V14H14", s$ = "M11,18H13V16H11V18M12,6A4,4 0 0,0 8,10H10A2,2 0 0,1 12,8A2,2 0 0,1 14,10C14,12 11,11.75 11,15H13C13,12.75 16,12.5 16,10A4,4 0 0,0 12,6M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3Z", sD = "M19,19V5H5V19H19M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5C3,3.89 3.9,3 5,3H19M17,11V13H7V11H17Z", sO = "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z", sH = "M2,21L23,12L2,3V10L17,12L2,14V21Z", sV = "M17.75,4.09L15.22,6.03L16.13,9.09L13.5,7.28L10.87,9.09L11.78,6.03L9.25,4.09L12.44,4L13.5,1L14.56,4L17.75,4.09M21.25,11L19.61,12.25L20.2,14.23L18.5,13.06L16.8,14.23L17.39,12.25L15.75,11L17.81,10.95L18.5,9L19.19,10.95L21.25,11M18.97,15.95C19.8,15.87 20.69,17.05 20.16,17.8C19.84,18.25 19.5,18.67 19.08,19.07C15.17,23 8.84,23 4.94,19.07C1.03,15.17 1.03,8.83 4.94,4.93C5.34,4.53 5.76,4.17 6.21,3.85C6.96,3.32 8.14,4.21 8.06,5.04C7.79,7.9 8.75,10.87 10.95,13.06C13.14,15.26 16.1,16.22 18.97,15.95M17.33,17.97C14.5,17.81 11.7,16.64 9.53,14.5C7.36,12.31 6.2,9.5 6.04,6.68C3.23,9.82 3.34,14.64 6.35,17.66C9.37,20.67 14.19,20.78 17.33,17.97Z", sI = "M3.55 19.09L4.96 20.5L6.76 18.71L5.34 17.29M12 6C8.69 6 6 8.69 6 12S8.69 18 12 18 18 15.31 18 12C18 8.68 15.31 6 12 6M20 13H23V11H20M17.24 18.71L19.04 20.5L20.45 19.09L18.66 17.29M20.45 5L19.04 3.6L17.24 5.39L18.66 6.81M13 1H11V4H13M6.76 5.39L4.96 3.6L3.55 5L5.34 6.81L6.76 5.39M1 13H4V11H1M13 20H11V23H13", sB = rh("div", { displayName: "Container" })({
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
		"& .comment": { color: tV("sys.on-surface", tH(.38)) },
		"& .string": { color: "sys.success" },
		"& .tag .attr-name": { color: "sys.success" },
		"& .function": { color: "sys.warning" },
		"& .punctuation": { color: tV("sys.on-surface", tH(.38)) },
		"& .keyword": { color: "sys.error" }
	},
	"& p,li": { my: "1em" },
	overflowY: "auto"
});
let sF = ea(() => {
	let e = {
		primary: "#1270f5",
		secondary: "#8a90a5",
		tertiary: "#b58391",
		neutral: "#5e5e5e",
		neutralVariant: "#757780",
		error: "#d93f23",
		warning: "#e69c00",
		success: "#5ac220"
	}, n = aw.fromColors(e).normalizeRoleRules();
	return ei({
		seed: e,
		rules: n,
		theming: tB.create({
			...aS,
			...aw.fromColors(e).toDesignTokens(n)
		}, { varPrefix: "vk" })
	});
});
var sE = t((e, n) => {
	n.exports = function() {
		var e = document.getSelection();
		if (!e.rangeCount) return function() {};
		for (var n = document.activeElement, t = [], a = 0; a < e.rangeCount; a++) t.push(e.getRangeAt(a));
		switch (n.tagName.toUpperCase()) {
			case "INPUT":
			case "TEXTAREA":
				n.blur();
				break;
			default: n = null;
		}
		return e.removeAllRanges(), function() {
			"Caret" === e.type && e.removeAllRanges(), e.rangeCount || t.forEach(function(n) {
				e.addRange(n);
			}), n && n.focus();
		};
	};
}), sj = t((e, n) => {
	var t = sE(), a = {
		"text/plain": "Text",
		"text/html": "Url",
		default: "Text"
	};
	n.exports = function(e, n) {
		var r, s, o, i, l, c, u, p, d = !1;
		n || (n = {}), o = n.debug || !1;
		try {
			if (l = t(), c = document.createRange(), u = document.getSelection(), (p = document.createElement("span")).textContent = e, p.ariaHidden = "true", p.style.all = "unset", p.style.position = "fixed", p.style.top = 0, p.style.clip = "rect(0, 0, 0, 0)", p.style.whiteSpace = "pre", p.style.webkitUserSelect = "text", p.style.MozUserSelect = "text", p.style.msUserSelect = "text", p.style.userSelect = "text", p.addEventListener("copy", function(t) {
				if (t.stopPropagation(), n.format) if (t.preventDefault(), void 0 === t.clipboardData) {
					o && console.warn("unable to use e.clipboardData"), o && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
					var r = a[n.format] || a.default;
					window.clipboardData.setData(r, e);
				} else t.clipboardData.clearData(), t.clipboardData.setData(n.format, e);
				n.onCopy && (t.preventDefault(), n.onCopy(t.clipboardData));
			}), document.body.appendChild(p), c.selectNodeContents(p), u.addRange(c), !document.execCommand("copy")) throw Error("copy command was unsuccessful");
			d = !0;
		} catch (t) {
			o && console.error("unable to copy using execCommand: ", t), o && console.warn("trying IE specific stuff");
			try {
				window.clipboardData.setData(n.format || "text", e), n.onCopy && n.onCopy(window.clipboardData), d = !0;
			} catch (t) {
				o && console.error("unable to copy using clipboardData: ", t), o && console.error("falling back to prompt"), r = "message" in n ? n.message : "Copy to clipboard: #{key}, Enter", s = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C", i = r.replace(/#{\s*key\s*}/g, s), window.prompt(i, e);
			}
		} finally {
			u && ("function" == typeof u.removeRange ? u.removeRange(c) : u.removeAllRanges()), p && document.body.removeChild(p), l();
		}
		return d;
	};
}), sW = n(sj(), 1), sz = f(() => {
	let e = sF.use(), n = Z(null);
	return () => {
		let t = aw.fromColors(e.value.seed);
		return X(rd, {
			ref: n,
			sx: {
				display: "flex",
				flexDirection: "column",
				gap: 24
			},
			children: [X(rd, {
				sx: {
					display: "flex",
					gap: 56
				},
				children: [H(rd, {
					sx: {
						display: "flex",
						flexDirection: "column"
					},
					children: L(e.value.seed, (n, t) => X(rd, {
						sx: {
							flex: 1,
							display: "flex",
							alignItems: "center",
							gap: 16
						},
						children: [H(rd, {
							sx: { flex: 1 },
							children: t
						}), H("input", {
							type: "color",
							value: n,
							onChange: (n) => {
								e.next((e) => {
									e.seed[t] = n.target.value;
								});
							}
						})]
					}))
				}), H(rd, {
					sx: {
						display: "flex",
						flexWrap: "wrap",
						gap: 16
					},
					children: L(e.value.rules, ([n, a], r) => X(rd, {
						sx: {
							display: "flex",
							alignItems: "center",
							width: "30%"
						},
						children: [H(rd, {
							sx: { flex: 1 },
							children: r
						}), H(rd, {
							sx: {
								flex: 1,
								display: "flex",
								gap: 4,
								"& input": {
									width: "40%",
									border: "1px solid",
									borderColor: "sys.outline"
								}
							},
							children: H("input", {
								type: "number",
								value: a,
								max: 100,
								min: 0,
								style: {
									backgroundColor: aw.toHEX(t.seeds[n].tone(a)),
									color: a > 50 ? "black" : "white"
								},
								"data-color": aw.toHEX(t.seeds[n].tone(a)),
								"data-theme": "dark",
								onChange: (t) => {
									try {
										let s = parseInt(t.target.value);
										e.next((e) => {
											e.rules[r] = [
												n,
												s,
												a
											];
										});
									} catch (e) {}
								}
							})
						})]
					}))
				})]
			}), H(rd, {
				sx: {
					display: "flex",
					gap: 16,
					"& > *": { flex: 1 }
				},
				children: H("pre", {
					onClick: () => (0, sW.default)(JSON.stringify(e.value)),
					children: H("code", { children: JSON.stringify(e.value, null, 2) })
				})
			})]
		});
	};
}), sU = {
	0: !0,
	10: !0,
	20: !0,
	30: !0,
	40: !0,
	50: !0,
	60: !0,
	70: !0,
	80: !0,
	90: !0,
	95: !0,
	100: !0
}, sq = f(() => () => H(q, { children: ["light", "dark"].map((e) => X("div", {
	"data-theme": e,
	children: [X(rd, {
		component: "h1",
		sx: {
			textStyle: "sys.headline-medium",
			pb: 8,
			mt: 16
		},
		children: [g(e), " Scheme"]
	}), X(rd, {
		sx: {
			display: "flex",
			flexDirection: "column",
			gap: 16
		},
		children: [H(rd, {
			sx: {
				display: "flex",
				flexWrap: "wrap",
				gap: 16
			},
			children: [
				"primary",
				"secondary",
				"tertiary",
				"error",
				"warning",
				"success"
			].map((e) => X(rd, {
				sx: {
					flex: 1,
					minW: 1 / 4,
					display: "flex",
					alignItems: "stretch"
				},
				children: [H(rd, {
					sx: {
						flex: 1,
						display: "flex",
						flexDirection: "column"
					},
					children: ["", "-container"].map((n) => X(d, { children: [H(rd, {
						sx: {
							bgColor: `sys.${e}${n}`,
							color: `sys.on-${e}${n}`,
							p: 8,
							flex: 3
						},
						children: `${e}${n}`
					}), H(rd, {
						sx: {
							color: `sys.${e}${n}`,
							bgColor: `sys.on-${e}${n}`,
							p: 8,
							flex: 1
						},
						children: `on-${e}${n}`
					})] }, n))
				}), H(rd, {
					sx: {
						display: "flex",
						flexDirection: "column"
					},
					children: L(sU, (n, t) => X(rd, {
						sx: {
							color: `${e}.${parseInt(t) > 50 ? 0 : 100}`,
							bgColor: `${e}.${t}`,
							w: 60,
							p: 8,
							textAlign: "right"
						},
						children: [".", t]
					}))
				})]
			}, e))
		}), X("div", { children: [
			H(rd, {
				sx: {
					display: "flex",
					"& > *": { width: 1 / 3 }
				},
				children: [
					"-dim",
					"",
					"-bright"
				].map((e) => H(rd, {
					sx: {
						color: "sys.on-surface",
						bgColor: `sys.surface${e}`,
						height: 80,
						p: 8
					},
					children: `surface${e}`
				}))
			}),
			H(rd, {
				sx: {
					display: "flex",
					"& > *": { width: 1 / 4 }
				},
				children: [
					"-lowest",
					"-low",
					"",
					"-high",
					"-highest"
				].map((e) => H(rd, {
					sx: {
						color: "sys.on-surface",
						bgColor: `sys.surface-container${e}`,
						height: 80,
						p: 8
					},
					children: `surface-container${e}`
				}))
			}),
			H(rd, {
				sx: {
					display: "flex",
					"& > *": { width: 1 / 4 }
				},
				children: [
					"on-surface",
					"on-surface-variant",
					"outline",
					"outline-variant"
				].map((e) => H(rd, {
					sx: {
						color: e.includes("outline-variant") ? "sys.inverse-surface" : "sys.inverse-on-surface",
						bgColor: `sys.${e}`,
						height: 80,
						p: 8
					},
					children: e
				}))
			}),
			H(rd, {
				sx: { display: "flex" },
				children: L(sU, (e, n) => X(rd, {
					sx: {
						color: `neutral.${parseInt(n) > 50 ? 0 : 100}`,
						bgColor: `neutral.${n}`,
						flex: 1,
						p: 8,
						textAlign: "right"
					},
					children: [".", n]
				}))
			})
		] })]
	})]
}, e)) })), sG = f(() => {
	let e = aA.use();
	return () => H(q, { children: Object.keys(e.token.elevation.tokens).map((e) => H(rd, {
		sx: {
			mt: 16,
			p: 16,
			rounded: "lg",
			transitionDuration: "md4",
			transitionTimingFunction: "standard",
			shadow: e,
			_hover: { shadow: `${1 + parseInt(e)}` }
		},
		children: X("div", { children: ["Elevation ", e] })
	}, e)) });
}), sY = f(() => {
	let e = aA.use();
	return () => X(rd, {
		sx: {
			display: "flex",
			gap: 16,
			flexDirection: "column"
		},
		children: [H("div", { children: "点击下载，通过 Figma Tokens 全量导入文件" }), H("pre", {
			onClick: () => {
				(function(e, n, t = "application/json") {
					let a = document.createElement("a"), r = new Blob([e], { type: t }), s = URL.createObjectURL(r);
					a.href = s, a.download = n, document.body.appendChild(a), a.click(), setTimeout(() => {
						document.body.removeChild(a), window.URL.revokeObjectURL(s);
					}, 0);
				})(JSON.stringify(e.toFigmaTokens(), null, 2), `tokens.${(/* @__PURE__ */ new Date()).getTime()}.json`);
			},
			children: H("code", { children: JSON.stringify(e.toFigmaTokens(), null, 2) })
		})]
	});
}), sX = rh("button", { disabled: P().optional() }, { displayName: "Button" })({
	bg: "none",
	outline: "none",
	border: "none",
	px: 16,
	h: 40,
	rounded: "md",
	color: "sys.primary",
	bgColor: tV("sys.primary", tH(.08)),
	_disabled: {
		color: tV("sys.on-surface", tH(.12)),
		bgColor: tV("sys.on-surface", tH(.08))
	}
}), sK = () => X(rd, {
	sx: {
		display: "flex",
		gap: 8
	},
	children: [H(sX, { children: "按钮" }), H(sX, {
		disabled: !0,
		children: "按钮"
	})]
}), sZ = f(() => () => H(rd, {
	sx: {
		display: "flex",
		padding: 10,
		containerStyle: "sys.primary"
	},
	children: H(rd, {
		sx: { containerStyle: "sys.surface-container" },
		component: "button",
		children: "Hi 111"
	})
}));
function sJ(e) {
	let n = {
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
	return X(q, { children: [
		X(n.p, { children: ["设计理念沿用 ", H(n.a, {
			href: "https://m3.material.io/",
			children: "Material 3"
		})] }),
		"\n",
		H(n.p, { children: "这里仅为适配该设计理念，抽象 Design System, 方便开发：" }),
		"\n",
		X(n.p, { children: [
			"所有的 Design Token 将声明为 ",
			H(n.code, { children: "css var" }),
			" (",
			H(n.a, {
				href: "https://developer.mozilla.org/en-US/docs/Web/CSS/--*",
				children: "Custom properties"
			}),
			"),\n可同时支持在 ",
			H(n.code, { children: "css-in-js" }),
			" 和 ",
			H(n.code, { children: "raw css" }),
			" 中使用。"
		] }),
		"\n",
		H(n.h2, { children: H(n.code, { children: "css-in-js" }) }),
		"\n",
		H(n.p, { children: "TypeScript 的帮助下，还会提供准确的 Design Token 值. 如：" }),
		"\n",
		X(n.div, {
			"data-example": "",
			children: [H(n.div, {
				"data-example-container": "",
				children: H(n.codeblock4a44dc15, {})
			}), H(n.pre, {
				className: "language-tsx",
				children: X(n.code, {
					className: "language-tsx",
					children: [
						H(n.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						X(n.span, {
							className: "token imports",
							children: [
								H(n.span, {
									className: "token punctuation",
									children: "{"
								}),
								" ",
								H(n.span, {
									className: "token maybe-class-name",
									children: "Box"
								}),
								H(n.span, {
									className: "token punctuation",
									children: ","
								}),
								" alpha",
								H(n.span, {
									className: "token punctuation",
									children: ","
								}),
								" styled",
								H(n.span, {
									className: "token punctuation",
									children: ","
								}),
								" variant ",
								H(n.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						H(n.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						H(n.span, {
							className: "token string",
							children: "\"@innoai-tech/vueuikit\""
						}),
						H(n.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						H(n.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						X(n.span, {
							className: "token imports",
							children: [
								H(n.span, {
									className: "token punctuation",
									children: "{"
								}),
								" t ",
								H(n.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						H(n.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						H(n.span, {
							className: "token string",
							children: "\"@innoai-tech/vuekit\""
						}),
						H(n.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n",
						H(n.span, {
							className: "token keyword module",
							children: "export"
						}),
						" ",
						H(n.span, {
							className: "token keyword",
							children: "const"
						}),
						" ",
						H(n.span, {
							className: "token maybe-class-name",
							children: "Button"
						}),
						" ",
						H(n.span, {
							className: "token operator",
							children: "="
						}),
						" ",
						H(n.span, {
							className: "token function",
							children: "styled"
						}),
						H(n.span, {
							className: "token punctuation",
							children: "("
						}),
						H(n.span, {
							className: "token string",
							children: "\"button\""
						}),
						H(n.span, {
							className: "token punctuation",
							children: ","
						}),
						" ",
						H(n.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n  disabled",
						H(n.span, {
							className: "token operator",
							children: ":"
						}),
						" t",
						H(n.span, {
							className: "token punctuation",
							children: "."
						}),
						H(n.span, {
							className: "token method function property-access",
							children: "boolean"
						}),
						H(n.span, {
							className: "token punctuation",
							children: "("
						}),
						H(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						H(n.span, {
							className: "token punctuation",
							children: "."
						}),
						H(n.span, {
							className: "token method function property-access",
							children: "optional"
						}),
						H(n.span, {
							className: "token punctuation",
							children: "("
						}),
						H(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						H(n.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n",
						H(n.span, {
							className: "token punctuation",
							children: "}"
						}),
						H(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						H(n.span, {
							className: "token punctuation",
							children: "("
						}),
						H(n.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n  bg",
						H(n.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						H(n.span, {
							className: "token string",
							children: "\"none\""
						}),
						H(n.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n  outline",
						H(n.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						H(n.span, {
							className: "token string",
							children: "\"none\""
						}),
						H(n.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n  border",
						H(n.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						H(n.span, {
							className: "token string",
							children: "\"none\""
						}),
						H(n.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n  px",
						H(n.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						H(n.span, {
							className: "token number",
							children: "16"
						}),
						H(n.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n  h",
						H(n.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						H(n.span, {
							className: "token number",
							children: "40"
						}),
						H(n.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n  rounded",
						H(n.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						H(n.span, {
							className: "token string",
							children: "\"md\""
						}),
						H(n.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n\n  ",
						H(n.span, {
							className: "token comment",
							children: "// 利用 TypeScript 的推导而来，且非 color 属性无该值"
						}),
						"\n  ",
						H(n.span, {
							className: "token comment",
							children: "// 实际将转换为 var(--vk-color-sys-primary)"
						}),
						"\n  ",
						H(n.span, {
							className: "token comment",
							children: "// sys-* 的 color 还会随暗黑/普通主题进行切换"
						}),
						"\n  color",
						H(n.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						H(n.span, {
							className: "token string",
							children: "\"sys.primary\""
						}),
						H(n.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n\n  ",
						H(n.span, {
							className: "token comment",
							children: "// color 变种"
						}),
						"\n  ",
						H(n.span, {
							className: "token comment",
							children: "// 实际将转换为 rbga(var(--vk-color-sys-primary-rgb) / 0.08)"
						}),
						"\n  bgColor",
						H(n.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						H(n.span, {
							className: "token function",
							children: "variant"
						}),
						H(n.span, {
							className: "token punctuation",
							children: "("
						}),
						H(n.span, {
							className: "token string",
							children: "\"sys.primary\""
						}),
						H(n.span, {
							className: "token punctuation",
							children: ","
						}),
						" ",
						H(n.span, {
							className: "token function",
							children: "alpha"
						}),
						H(n.span, {
							className: "token punctuation",
							children: "("
						}),
						H(n.span, {
							className: "token number",
							children: "0.08"
						}),
						H(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						H(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						H(n.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n\n  ",
						H(n.span, {
							className: "token comment",
							children: "// 通常情况下，组件 props 将转换成 data-<prop> 作为 attr"
						}),
						"\n  ",
						H(n.span, {
							className: "token comment",
							children: "// 即： <Button disabled/>  =>  <button data-disabled=true />"
						}),
						"\n  ",
						H(n.span, {
							className: "token comment",
							children: "// 同理，在自定义转换规则中，也建议如下做类似的转换，避免动态创建 CSSObject"
						}),
						"\n  _disabled",
						H(n.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						H(n.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n    color",
						H(n.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						H(n.span, {
							className: "token function",
							children: "variant"
						}),
						H(n.span, {
							className: "token punctuation",
							children: "("
						}),
						H(n.span, {
							className: "token string",
							children: "\"sys.on-surface\""
						}),
						H(n.span, {
							className: "token punctuation",
							children: ","
						}),
						" ",
						H(n.span, {
							className: "token function",
							children: "alpha"
						}),
						H(n.span, {
							className: "token punctuation",
							children: "("
						}),
						H(n.span, {
							className: "token number",
							children: "0.12"
						}),
						H(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						H(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						H(n.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n    bgColor",
						H(n.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						H(n.span, {
							className: "token function",
							children: "variant"
						}),
						H(n.span, {
							className: "token punctuation",
							children: "("
						}),
						H(n.span, {
							className: "token string",
							children: "\"sys.on-surface\""
						}),
						H(n.span, {
							className: "token punctuation",
							children: ","
						}),
						" ",
						H(n.span, {
							className: "token function",
							children: "alpha"
						}),
						H(n.span, {
							className: "token punctuation",
							children: "("
						}),
						H(n.span, {
							className: "token number",
							children: "0.08"
						}),
						H(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						H(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						H(n.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n  ",
						H(n.span, {
							className: "token punctuation",
							children: "}"
						}),
						H(n.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n",
						H(n.span, {
							className: "token punctuation",
							children: "}"
						}),
						H(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						H(n.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n",
						H(n.span, {
							className: "token keyword module",
							children: "export"
						}),
						" ",
						H(n.span, {
							className: "token keyword module",
							children: "default"
						}),
						" ",
						H(n.span, {
							className: "token punctuation",
							children: "("
						}),
						H(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						H(n.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						H(n.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n  ",
						H(n.span, {
							className: "token keyword control-flow",
							children: "return"
						}),
						" ",
						H(n.span, {
							className: "token punctuation",
							children: "("
						}),
						"\n    ",
						X(n.span, {
							className: "token tag",
							children: [
								X(n.span, {
									className: "token tag",
									children: [H(n.span, {
										className: "token punctuation",
										children: "<"
									}), H(n.span, {
										className: "token class-name",
										children: "Box"
									})]
								}),
								" ",
								H(n.span, {
									className: "token attr-name",
									children: "sx"
								}),
								X(n.span, {
									className: "token script language-javascript",
									children: [
										H(n.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										H(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										H(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										" display",
										H(n.span, {
											className: "token operator",
											children: ":"
										}),
										" ",
										H(n.span, {
											className: "token string",
											children: "\"flex\""
										}),
										H(n.span, {
											className: "token punctuation",
											children: ","
										}),
										" gap",
										H(n.span, {
											className: "token operator",
											children: ":"
										}),
										" ",
										H(n.span, {
											className: "token number",
											children: "8"
										}),
										" ",
										H(n.span, {
											className: "token punctuation",
											children: "}"
										}),
										H(n.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								H(n.span, {
									className: "token punctuation",
									children: ">"
								})
							]
						}),
						H(n.span, {
							className: "token plain-text",
							children: "\n      "
						}),
						X(n.span, {
							className: "token tag",
							children: [X(n.span, {
								className: "token tag",
								children: [H(n.span, {
									className: "token punctuation",
									children: "<"
								}), H(n.span, {
									className: "token class-name",
									children: "Button"
								})]
							}), H(n.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						H(n.span, {
							className: "token plain-text",
							children: "按钮"
						}),
						X(n.span, {
							className: "token tag",
							children: [X(n.span, {
								className: "token tag",
								children: [H(n.span, {
									className: "token punctuation",
									children: "</"
								}), H(n.span, {
									className: "token class-name",
									children: "Button"
								})]
							}), H(n.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						H(n.span, {
							className: "token plain-text",
							children: "\n      "
						}),
						X(n.span, {
							className: "token tag",
							children: [
								X(n.span, {
									className: "token tag",
									children: [H(n.span, {
										className: "token punctuation",
										children: "<"
									}), H(n.span, {
										className: "token class-name",
										children: "Button"
									})]
								}),
								" ",
								H(n.span, {
									className: "token attr-name",
									children: "disabled"
								}),
								X(n.span, {
									className: "token script language-javascript",
									children: [
										H(n.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										H(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										H(n.span, {
											className: "token boolean",
											children: "true"
										}),
										H(n.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								H(n.span, {
									className: "token punctuation",
									children: ">"
								})
							]
						}),
						H(n.span, {
							className: "token plain-text",
							children: "按钮"
						}),
						X(n.span, {
							className: "token tag",
							children: [X(n.span, {
								className: "token tag",
								children: [H(n.span, {
									className: "token punctuation",
									children: "</"
								}), H(n.span, {
									className: "token class-name",
									children: "Button"
								})]
							}), H(n.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						H(n.span, {
							className: "token plain-text",
							children: "\n    "
						}),
						X(n.span, {
							className: "token tag",
							children: [X(n.span, {
								className: "token tag",
								children: [H(n.span, {
									className: "token punctuation",
									children: "</"
								}), H(n.span, {
									className: "token class-name",
									children: "Box"
								})]
							}), H(n.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						"\n  ",
						H(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						H(n.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						H(n.span, {
							className: "token punctuation",
							children: "}"
						}),
						H(n.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n"
					]
				})
			})]
		}),
		"\n",
		X(n.p, { children: ["不同于其他框架中的 theme 定义，为了更准确的类型推导，需要由 DesignToken 进行创建\n详细请", H(n.a, {
			href: "https://github.com/innoai-tech/vuekit/blob/main/nodepkg/vueuikit/src/theming/m3",
			children: "参考源码"
		})] }),
		"\n",
		X(n.p, { children: [
			"虽然底层使用的是 ",
			H(n.code, { children: "@emotion/*" }),
			"，但屏蔽掉了 ",
			H(n.code, { children: "array" }),
			" 等非 CSSObject 值的使用, 初衷是为了更稳定的类型推导。\n另外样式扩展有两种方式"
		] }),
		"\n",
		H(n.pre, {
			className: "language-tsx",
			children: X(n.code, {
				className: "language-tsx",
				children: [
					H(n.span, {
						className: "token keyword module",
						children: "import"
					}),
					" ",
					X(n.span, {
						className: "token imports",
						children: [
							H(n.span, {
								className: "token punctuation",
								children: "{"
							}),
							" t ",
							H(n.span, {
								className: "token punctuation",
								children: "}"
							})
						]
					}),
					" ",
					H(n.span, {
						className: "token keyword module",
						children: "from"
					}),
					" ",
					H(n.span, {
						className: "token string",
						children: "\"@innoai-tech/vuekit\""
					}),
					H(n.span, {
						className: "token punctuation",
						children: ";"
					}),
					"\n",
					H(n.span, {
						className: "token keyword module",
						children: "import"
					}),
					" ",
					X(n.span, {
						className: "token imports",
						children: [
							H(n.span, {
								className: "token punctuation",
								children: "{"
							}),
							" styled",
							H(n.span, {
								className: "token punctuation",
								children: ","
							}),
							" ",
							H(n.span, {
								className: "token maybe-class-name",
								children: "SystemStyleObject"
							}),
							" ",
							H(n.span, {
								className: "token punctuation",
								children: "}"
							})
						]
					}),
					" ",
					H(n.span, {
						className: "token keyword module",
						children: "from"
					}),
					" ",
					H(n.span, {
						className: "token string",
						children: "\"@innoai-tech/vueuikit\""
					}),
					H(n.span, {
						className: "token punctuation",
						children: ";"
					}),
					"\n\n",
					H(n.span, {
						className: "token keyword",
						children: "const"
					}),
					" shared",
					H(n.span, {
						className: "token operator",
						children: ":"
					}),
					" ",
					H(n.span, {
						className: "token maybe-class-name",
						children: "SystemStyleObject"
					}),
					" ",
					H(n.span, {
						className: "token operator",
						children: "="
					}),
					" ",
					H(n.span, {
						className: "token punctuation",
						children: "{"
					}),
					"\n  color",
					H(n.span, {
						className: "token operator",
						children: ":"
					}),
					" ",
					H(n.span, {
						className: "token string",
						children: "\"sys.primary\""
					}),
					H(n.span, {
						className: "token punctuation",
						children: ","
					}),
					"\n  ",
					H(n.span, {
						className: "token comment",
						children: "// ..."
					}),
					"\n",
					H(n.span, {
						className: "token punctuation",
						children: "}"
					}),
					H(n.span, {
						className: "token punctuation",
						children: ";"
					}),
					"\n\n",
					H(n.span, {
						className: "token comment",
						children: "// 直接通过 extends 复用样式"
					}),
					"\n",
					H(n.span, {
						className: "token comment",
						children: "//"
					}),
					"\n",
					H(n.span, {
						className: "token comment",
						children: "// 组件 props 定义需要重新声明"
					}),
					"\n",
					H(n.span, {
						className: "token keyword module",
						children: "export"
					}),
					" ",
					H(n.span, {
						className: "token keyword",
						children: "const"
					}),
					" ",
					H(n.span, {
						className: "token maybe-class-name",
						children: "ButtonBase"
					}),
					" ",
					H(n.span, {
						className: "token operator",
						children: "="
					}),
					" ",
					H(n.span, {
						className: "token function",
						children: "styled"
					}),
					H(n.span, {
						className: "token punctuation",
						children: "("
					}),
					H(n.span, {
						className: "token string",
						children: "\"button\""
					}),
					H(n.span, {
						className: "token punctuation",
						children: ","
					}),
					" ",
					H(n.span, {
						className: "token punctuation",
						children: "{"
					}),
					"\n  disabled",
					H(n.span, {
						className: "token operator",
						children: ":"
					}),
					" t",
					H(n.span, {
						className: "token punctuation",
						children: "."
					}),
					H(n.span, {
						className: "token method function property-access",
						children: "boolean"
					}),
					H(n.span, {
						className: "token punctuation",
						children: "("
					}),
					H(n.span, {
						className: "token punctuation",
						children: ")"
					}),
					H(n.span, {
						className: "token punctuation",
						children: "."
					}),
					H(n.span, {
						className: "token method function property-access",
						children: "optional"
					}),
					H(n.span, {
						className: "token punctuation",
						children: "("
					}),
					H(n.span, {
						className: "token punctuation",
						children: ")"
					}),
					H(n.span, {
						className: "token punctuation",
						children: ","
					}),
					"\n",
					H(n.span, {
						className: "token punctuation",
						children: "}"
					}),
					H(n.span, {
						className: "token punctuation",
						children: ")"
					}),
					H(n.span, {
						className: "token punctuation",
						children: "("
					}),
					H(n.span, {
						className: "token punctuation",
						children: "{"
					}),
					"\n  ",
					H(n.span, {
						className: "token keyword",
						children: "extends"
					}),
					H(n.span, {
						className: "token operator",
						children: ":"
					}),
					" ",
					H(n.span, {
						className: "token punctuation",
						children: "["
					}),
					"shared",
					H(n.span, {
						className: "token punctuation",
						children: "]"
					}),
					H(n.span, {
						className: "token punctuation",
						children: ","
					}),
					"\n  ",
					H(n.span, {
						className: "token comment",
						children: "// ..."
					}),
					"\n",
					H(n.span, {
						className: "token punctuation",
						children: "}"
					}),
					H(n.span, {
						className: "token punctuation",
						children: ")"
					}),
					H(n.span, {
						className: "token punctuation",
						children: ";"
					}),
					"\n\n",
					H(n.span, {
						className: "token comment",
						children: "// 通过 styled 覆写样式"
					}),
					"\n",
					H(n.span, {
						className: "token comment",
						children: "// 可以完全继承 BaseButton 的 props 定义"
					}),
					"\n",
					H(n.span, {
						className: "token keyword module",
						children: "export"
					}),
					" ",
					H(n.span, {
						className: "token keyword",
						children: "const"
					}),
					" ",
					H(n.span, {
						className: "token maybe-class-name",
						children: "Button"
					}),
					" ",
					H(n.span, {
						className: "token operator",
						children: "="
					}),
					" ",
					H(n.span, {
						className: "token function",
						children: "styled"
					}),
					H(n.span, {
						className: "token punctuation",
						children: "("
					}),
					H(n.span, {
						className: "token maybe-class-name",
						children: "ButtonBase"
					}),
					H(n.span, {
						className: "token punctuation",
						children: ")"
					}),
					H(n.span, {
						className: "token punctuation",
						children: "("
					}),
					H(n.span, {
						className: "token punctuation",
						children: "{"
					}),
					"\n  ",
					H(n.span, {
						className: "token comment",
						children: "// ..."
					}),
					"\n",
					H(n.span, {
						className: "token punctuation",
						children: "}"
					}),
					H(n.span, {
						className: "token punctuation",
						children: ")"
					}),
					H(n.span, {
						className: "token punctuation",
						children: ";"
					}),
					"\n"
				]
			})
		}),
		"\n",
		X(n.p, { children: [
			"除 ",
			H(n.code, { children: "styled" }),
			" 外，我们还可以使用 ",
			H(n.code, { children: "Box" }),
			" 进行快速样式定义, 通过 ",
			H(n.code, { children: "sx" }),
			" prop。 并且 ",
			H(n.code, { children: "component" }),
			" prop 支持我们随时切换 tag 或者\n组件，并且其他 props 会随着不同的 component 切换对应 props 类型约束与提示。"
		] }),
		"\n",
		H(n.p, { children: "同样的，通过 styled 创建的组件也有一样的特性。" }),
		"\n",
		X(n.div, {
			"data-example": "",
			children: [H(n.div, {
				"data-example-container": "",
				children: H(n.codeblock785f3ec7, {})
			}), H(n.pre, {
				className: "language-tsx",
				children: X(n.code, {
					className: "language-tsx",
					children: [
						H(n.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						X(n.span, {
							className: "token imports",
							children: [
								H(n.span, {
									className: "token punctuation",
									children: "{"
								}),
								" component ",
								H(n.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						H(n.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						H(n.span, {
							className: "token string",
							children: "\"@innoai-tech/vuekit\""
						}),
						H(n.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						H(n.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						X(n.span, {
							className: "token imports",
							children: [
								H(n.span, {
									className: "token punctuation",
									children: "{"
								}),
								" ",
								H(n.span, {
									className: "token maybe-class-name",
									children: "Box"
								}),
								" ",
								H(n.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						H(n.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						H(n.span, {
							className: "token string",
							children: "\"@innoai-tech/vueuikit\""
						}),
						H(n.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n",
						H(n.span, {
							className: "token keyword module",
							children: "export"
						}),
						" ",
						H(n.span, {
							className: "token keyword module",
							children: "default"
						}),
						" ",
						H(n.span, {
							className: "token function",
							children: "component"
						}),
						H(n.span, {
							className: "token punctuation",
							children: "("
						}),
						H(n.span, {
							className: "token punctuation",
							children: "("
						}),
						H(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						H(n.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						H(n.span, {
							className: "token punctuation",
							children: "("
						}),
						H(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						H(n.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						H(n.span, {
							className: "token punctuation",
							children: "("
						}),
						"\n  ",
						X(n.span, {
							className: "token tag",
							children: [
								X(n.span, {
									className: "token tag",
									children: [H(n.span, {
										className: "token punctuation",
										children: "<"
									}), H(n.span, {
										className: "token class-name",
										children: "Box"
									})]
								}),
								" ",
								H(n.span, {
									className: "token attr-name",
									children: "sx"
								}),
								X(n.span, {
									className: "token script language-javascript",
									children: [
										H(n.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										H(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										H(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										" display",
										H(n.span, {
											className: "token operator",
											children: ":"
										}),
										" ",
										H(n.span, {
											className: "token string",
											children: "\"flex\""
										}),
										H(n.span, {
											className: "token punctuation",
											children: ","
										}),
										" padding",
										H(n.span, {
											className: "token operator",
											children: ":"
										}),
										" ",
										H(n.span, {
											className: "token number",
											children: "10"
										}),
										H(n.span, {
											className: "token punctuation",
											children: ","
										}),
										" containerStyle",
										H(n.span, {
											className: "token operator",
											children: ":"
										}),
										" ",
										H(n.span, {
											className: "token string",
											children: "\"sys.primary\""
										}),
										" ",
										H(n.span, {
											className: "token punctuation",
											children: "}"
										}),
										H(n.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								H(n.span, {
									className: "token punctuation",
									children: ">"
								})
							]
						}),
						H(n.span, {
							className: "token plain-text",
							children: "\n    "
						}),
						X(n.span, {
							className: "token tag",
							children: [
								X(n.span, {
									className: "token tag",
									children: [H(n.span, {
										className: "token punctuation",
										children: "<"
									}), H(n.span, {
										className: "token class-name",
										children: "Box"
									})]
								}),
								" ",
								H(n.span, {
									className: "token attr-name",
									children: "sx"
								}),
								X(n.span, {
									className: "token script language-javascript",
									children: [
										H(n.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										H(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										H(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										" containerStyle",
										H(n.span, {
											className: "token operator",
											children: ":"
										}),
										" ",
										H(n.span, {
											className: "token string",
											children: "\"sys.surface-container\""
										}),
										" ",
										H(n.span, {
											className: "token punctuation",
											children: "}"
										}),
										H(n.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								" ",
								H(n.span, {
									className: "token attr-name",
									children: "component"
								}),
								X(n.span, {
									className: "token script language-javascript",
									children: [
										H(n.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										H(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										H(n.span, {
											className: "token string",
											children: "\"button\""
										}),
										H(n.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								H(n.span, {
									className: "token punctuation",
									children: ">"
								})
							]
						}),
						H(n.span, {
							className: "token plain-text",
							children: "\n      Hi 111\n    "
						}),
						X(n.span, {
							className: "token tag",
							children: [X(n.span, {
								className: "token tag",
								children: [H(n.span, {
									className: "token punctuation",
									children: "</"
								}), H(n.span, {
									className: "token class-name",
									children: "Box"
								})]
							}), H(n.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						H(n.span, {
							className: "token plain-text",
							children: "\n  "
						}),
						X(n.span, {
							className: "token tag",
							children: [X(n.span, {
								className: "token tag",
								children: [H(n.span, {
									className: "token punctuation",
									children: "</"
								}), H(n.span, {
									className: "token class-name",
									children: "Box"
								})]
							}), H(n.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						"\n",
						H(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						H(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						H(n.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n"
					]
				})
			})]
		}),
		"\n",
		H(n.h3, { children: "CSS Selector 简写规则" }),
		"\n",
		X(n.p, { children: [
			"另外，为了简化 ",
			H(n.code, { children: "\"&:hover\"" }),
			" ",
			H(n.code, { children: "&[aria-current='page']" }),
			" 等选择器声明，\n提供的如下的简化规则："
		] }),
		"\n",
		X(n.ul, { children: [
			"\n",
			X(n.li, { children: [
				"所有名称支持 ",
				H(n.em, { children: "下划线命名" }),
				" 或者 ",
				H(n.em, { children: "驼峰命名" }),
				"，最终都将转换为 ",
				H(n.em, { children: "短横小写命名" }),
				", ",
				H(n.code, { children: "=" }),
				" 用 ",
				H(n.code, { children: "__" }),
				" 替代"
			] }),
			"\n",
			X(n.li, { children: [
				H(n.code, { children: "_*" }),
				" 一般表示",
				H(n.strong, { children: "状态" }),
				"，可用值",
				"\n",
				X(n.ul, { children: [
					"\n",
					X(n.li, { children: [
						H(n.code, { children: "data-*" }),
						" 和 ",
						H(n.code, { children: "aria-*" }),
						", `",
						"\n",
						X(n.ul, { children: [
							"\n",
							X(n.li, { children: [
								"如 ",
								H(n.code, { children: "_aria_current__page" }),
								"： 等效为 ",
								H(n.code, { children: "&[aria-current='page']" }),
								","
							] }),
							"\n"
						] }),
						"\n"
					] }),
					"\n",
					X(n.li, { children: [
						H(n.code, { children: "before" }),
						"，",
						H(n.code, { children: "after" }),
						" 等",
						H(n.a, {
							href: "https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-elements",
							children: "伪元素"
						}),
						", 需要声明 \"$\" 表示为元素",
						"\n",
						X(n.ul, { children: [
							"\n",
							X(n.li, { children: [
								"如 ",
								H(n.code, { children: "_$before" }),
								"： 等效为 ",
								H(n.code, { children: "&::before" })
							] }),
							"\n"
						] }),
						"\n"
					] }),
					"\n",
					X(n.li, { children: [
						H(n.code, { children: "hover" }),
						", ",
						H(n.code, { children: "focus" }),
						", ",
						H(n.code, { children: "active" }),
						", ",
						H(n.code, { children: "disabled" }),
						" 等",
						H(n.a, {
							href: "https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-classes",
							children: "伪类"
						}),
						"\n",
						X(n.ul, { children: [
							"\n",
							X(n.li, { children: [
								"如 ",
								H(n.code, { children: "_hover" }),
								"： 等效为 ",
								H(n.code, { children: "&:hover, &.hover, &[data-hover]:not([data-hover='false'])" }),
								","
							] }),
							"\n"
						] }),
						"\n"
					] }),
					"\n",
					X(n.li, { children: [
						"以及其他自定义状态",
						"\n",
						X(n.ul, { children: [
							"\n",
							X(n.li, { children: [
								"如 ",
								H(n.code, { children: "_has_icon" }),
								"： 等效为 ",
								H(n.code, { children: "&[data-has-icon]:not([data-has-icon='false'])" })
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
			X(n.li, { children: [
				H(n.code, { children: "$*" }),
				" 或 ",
				H(n.code, { children: "*$" }),
				"，一般指代",
				H(n.strong, { children: "元素节点" }),
				", 可用值为",
				"\n",
				X(n.ul, { children: [
					"\n",
					X(n.li, { children: [
						H(n.code, { children: "data-*" }),
						" 和 ",
						H(n.code, { children: "aria-*" }),
						", `",
						"\n",
						X(n.ul, { children: [
							"\n",
							X(n.li, { children: [
								"如 ",
								H(n.code, { children: "$data_icon" }),
								"： 等效为 ",
								H(n.code, { children: "&[data-icon]" })
							] }),
							"\n",
							X(n.li, { children: [
								"如 ",
								H(n.code, { children: "$data_popper_arrow" }),
								"： 等效为 ",
								H(n.code, { children: "&[data-popper-arrow]" })
							] }),
							"\n",
							X(n.li, { children: [
								"如 ",
								H(n.code, { children: "data_popper_placement__right$" }),
								"： 等效为 ",
								H(n.code, { children: "[data-popper-placement=right] &" })
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
function sQ(e = {}) {
	let { wrapper: n } = e.components || {};
	return n ? H(n, {
		...e,
		children: H(sJ, { ...e })
	}) : sJ(e);
}
var s1 = K(() => () => el(sQ, { components: {
	codeblock4a44dc15: sK,
	codeblock785f3ec7: sZ
} })), s0 = f(() => {
	let e = z(!1), n = sv({ apply({ elements: e, rects: n }) {
		Object.assign(e.floating.style, { width: `${n.reference.width}px` });
	} });
	return () => H(sx, {
		isOpen: e.value,
		onClickOutside: () => e.value = !1,
		placement: "bottom-start",
		modifiers: [n],
		$content: X(rd, {
			sx: { containerStyle: "sys.on-surface" },
			children: [
				"Popper ",
				`${e.value}`,
				"!"
			]
		}),
		children: H(rd, {
			sx: { p: 4 },
			component: "button",
			onClick: () => e.value = !e.value,
			children: "Click Trigger Popper"
		})
	});
}), s2 = f(() => {
	let e = z(!1);
	return () => H(sx, {
		isOpen: e.value,
		$content: H(rd, {
			sx: { containerStyle: "sys.on-surface" },
			children: "Popper Content!"
		}),
		children: H(rd, {
			component: "button",
			sx: { p: 4 },
			onMouseover: () => e.value = !0,
			onMouseout: () => e.value = !1,
			children: "Popper Trigger"
		})
	});
});
let s5 = tW({
	from: { opacity: 0 },
	to: { opacity: 1 },
	duration: tj.duration.md1,
	easing: tj.easing.standard.accelerate
}, {
	from: { opacity: 1 },
	to: { opacity: 0 },
	duration: tj.duration.sm4,
	easing: tj.easing.standard.decelerate
});
var s4 = f(() => {
	let e = z(!0);
	return () => H(sx, {
		isOpen: e.value,
		$transition: ({ content: e }) => H(s5, { children: e }),
		$content: X(rd, {
			sx: {
				containerStyle: "sys.on-surface",
				shadow: "2",
				py: 2,
				px: 4,
				rounded: "sm"
			},
			children: [
				"Popper ",
				`${e.value}`,
				"!"
			]
		}),
		children: H(rd, {
			sx: { p: 4 },
			component: "button",
			onMouseover: () => e.value = !0,
			onMouseout: () => e.value = !1,
			children: "Animated Popper"
		})
	});
});
function s3(e) {
	let n = {
		code: "code",
		codeblock4a44dc15: "codeblock4a44dc15",
		codeblockd4735e3a: "codeblockd4735e3a",
		codeblocke7f6c011: "codeblocke7f6c011",
		div: "div",
		h2: "h2",
		pre: "pre",
		span: "span",
		...e.components
	};
	return X(q, { children: [
		H(n.h2, { children: "Normal Popper" }),
		"\n",
		X(n.div, {
			"data-example": "",
			children: [H(n.div, {
				"data-example-container": "",
				children: H(n.codeblockd4735e3a, {})
			}), H(n.pre, {
				className: "language-tsx",
				children: X(n.code, {
					className: "language-tsx",
					children: [
						H(n.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						X(n.span, {
							className: "token imports",
							children: [
								H(n.span, {
									className: "token punctuation",
									children: "{"
								}),
								" component ",
								H(n.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						H(n.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						H(n.span, {
							className: "token string",
							children: "\"@innoai-tech/vuekit\""
						}),
						H(n.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						H(n.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						X(n.span, {
							className: "token imports",
							children: [
								H(n.span, {
									className: "token punctuation",
									children: "{"
								}),
								" ",
								H(n.span, {
									className: "token maybe-class-name",
									children: "Box"
								}),
								H(n.span, {
									className: "token punctuation",
									children: ","
								}),
								" ",
								H(n.span, {
									className: "token maybe-class-name",
									children: "Popper"
								}),
								" ",
								H(n.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						H(n.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						H(n.span, {
							className: "token string",
							children: "\"@innoai-tech/vueuikit\""
						}),
						H(n.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						H(n.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						X(n.span, {
							className: "token imports",
							children: [
								H(n.span, {
									className: "token punctuation",
									children: "{"
								}),
								" size ",
								H(n.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						H(n.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						H(n.span, {
							className: "token string",
							children: "\"@floating-ui/dom\""
						}),
						H(n.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						H(n.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						X(n.span, {
							className: "token imports",
							children: [
								H(n.span, {
									className: "token punctuation",
									children: "{"
								}),
								" ref ",
								H(n.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						H(n.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						H(n.span, {
							className: "token string",
							children: "\"vue\""
						}),
						H(n.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n",
						H(n.span, {
							className: "token keyword module",
							children: "export"
						}),
						" ",
						H(n.span, {
							className: "token keyword module",
							children: "default"
						}),
						" ",
						H(n.span, {
							className: "token function",
							children: "component"
						}),
						H(n.span, {
							className: "token punctuation",
							children: "("
						}),
						H(n.span, {
							className: "token punctuation",
							children: "("
						}),
						H(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						H(n.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						H(n.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n  ",
						H(n.span, {
							className: "token keyword",
							children: "const"
						}),
						" isOpen ",
						H(n.span, {
							className: "token operator",
							children: "="
						}),
						" ",
						H(n.span, {
							className: "token function",
							children: "ref"
						}),
						H(n.span, {
							className: "token punctuation",
							children: "("
						}),
						H(n.span, {
							className: "token boolean",
							children: "false"
						}),
						H(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						H(n.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n  ",
						H(n.span, {
							className: "token keyword",
							children: "const"
						}),
						" sameWidth ",
						H(n.span, {
							className: "token operator",
							children: "="
						}),
						" ",
						H(n.span, {
							className: "token function",
							children: "size"
						}),
						H(n.span, {
							className: "token punctuation",
							children: "("
						}),
						H(n.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n    ",
						H(n.span, {
							className: "token function",
							children: "apply"
						}),
						H(n.span, {
							className: "token punctuation",
							children: "("
						}),
						H(n.span, {
							className: "token punctuation",
							children: "{"
						}),
						" elements",
						H(n.span, {
							className: "token punctuation",
							children: ","
						}),
						" rects ",
						H(n.span, {
							className: "token punctuation",
							children: "}"
						}),
						H(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						H(n.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n      ",
						H(n.span, {
							className: "token known-class-name class-name",
							children: "Object"
						}),
						H(n.span, {
							className: "token punctuation",
							children: "."
						}),
						H(n.span, {
							className: "token method function property-access",
							children: "assign"
						}),
						H(n.span, {
							className: "token punctuation",
							children: "("
						}),
						"elements",
						H(n.span, {
							className: "token punctuation",
							children: "."
						}),
						H(n.span, {
							className: "token property-access",
							children: "floating"
						}),
						H(n.span, {
							className: "token punctuation",
							children: "."
						}),
						H(n.span, {
							className: "token property-access",
							children: "style"
						}),
						H(n.span, {
							className: "token punctuation",
							children: ","
						}),
						" ",
						H(n.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n        width",
						H(n.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						X(n.span, {
							className: "token template-string",
							children: [
								H(n.span, {
									className: "token template-punctuation string",
									children: "`"
								}),
								X(n.span, {
									className: "token interpolation",
									children: [
										H(n.span, {
											className: "token interpolation-punctuation punctuation",
											children: "${"
										}),
										"rects",
										H(n.span, {
											className: "token punctuation",
											children: "."
										}),
										H(n.span, {
											className: "token property-access",
											children: "reference"
										}),
										H(n.span, {
											className: "token punctuation",
											children: "."
										}),
										H(n.span, {
											className: "token property-access",
											children: "width"
										}),
										H(n.span, {
											className: "token interpolation-punctuation punctuation",
											children: "}"
										})
									]
								}),
								H(n.span, {
									className: "token string",
									children: "px"
								}),
								H(n.span, {
									className: "token template-punctuation string",
									children: "`"
								})
							]
						}),
						H(n.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n      ",
						H(n.span, {
							className: "token punctuation",
							children: "}"
						}),
						H(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						H(n.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n    ",
						H(n.span, {
							className: "token punctuation",
							children: "}"
						}),
						H(n.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n  ",
						H(n.span, {
							className: "token punctuation",
							children: "}"
						}),
						H(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						H(n.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n  ",
						H(n.span, {
							className: "token keyword control-flow",
							children: "return"
						}),
						" ",
						H(n.span, {
							className: "token punctuation",
							children: "("
						}),
						H(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						H(n.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						H(n.span, {
							className: "token punctuation",
							children: "("
						}),
						"\n    ",
						X(n.span, {
							className: "token tag",
							children: [
								X(n.span, {
									className: "token tag",
									children: [H(n.span, {
										className: "token punctuation",
										children: "<"
									}), H(n.span, {
										className: "token class-name",
										children: "Popper"
									})]
								}),
								"\n      ",
								H(n.span, {
									className: "token attr-name",
									children: "isOpen"
								}),
								X(n.span, {
									className: "token script language-javascript",
									children: [
										H(n.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										H(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										"isOpen",
										H(n.span, {
											className: "token punctuation",
											children: "."
										}),
										H(n.span, {
											className: "token property-access",
											children: "value"
										}),
										H(n.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n      ",
								H(n.span, {
									className: "token attr-name",
									children: "onClickOutside"
								}),
								X(n.span, {
									className: "token script language-javascript",
									children: [
										H(n.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										H(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										H(n.span, {
											className: "token punctuation",
											children: "("
										}),
										H(n.span, {
											className: "token punctuation",
											children: ")"
										}),
										" ",
										H(n.span, {
											className: "token arrow operator",
											children: "=>"
										}),
										" ",
										H(n.span, {
											className: "token punctuation",
											children: "("
										}),
										"isOpen",
										H(n.span, {
											className: "token punctuation",
											children: "."
										}),
										H(n.span, {
											className: "token property-access",
											children: "value"
										}),
										" ",
										H(n.span, {
											className: "token operator",
											children: "="
										}),
										" ",
										H(n.span, {
											className: "token boolean",
											children: "false"
										}),
										H(n.span, {
											className: "token punctuation",
											children: ")"
										}),
										H(n.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n      ",
								H(n.span, {
									className: "token attr-name",
									children: "placement"
								}),
								X(n.span, {
									className: "token script language-javascript",
									children: [
										H(n.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										H(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										H(n.span, {
											className: "token string",
											children: "\"bottom-start\""
										}),
										H(n.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n      ",
								H(n.span, {
									className: "token attr-name",
									children: "modifiers"
								}),
								X(n.span, {
									className: "token script language-javascript",
									children: [
										H(n.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										H(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										H(n.span, {
											className: "token punctuation",
											children: "["
										}),
										"sameWidth",
										H(n.span, {
											className: "token punctuation",
											children: "]"
										}),
										H(n.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n      ",
								H(n.span, {
									className: "token attr-name",
									children: "$content"
								}),
								X(n.span, {
									className: "token script language-javascript",
									children: [
										H(n.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										H(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										"\n        ",
										X(n.span, {
											className: "token tag",
											children: [
												X(n.span, {
													className: "token tag",
													children: [H(n.span, {
														className: "token punctuation",
														children: "<"
													}), H(n.span, {
														className: "token class-name",
														children: "Box"
													})]
												}),
												" ",
												H(n.span, {
													className: "token attr-name",
													children: "sx"
												}),
												X(n.span, {
													className: "token script language-javascript",
													children: [
														H(n.span, {
															className: "token script-punctuation punctuation",
															children: "="
														}),
														H(n.span, {
															className: "token punctuation",
															children: "{"
														}),
														H(n.span, {
															className: "token punctuation",
															children: "{"
														}),
														" containerStyle",
														H(n.span, {
															className: "token operator",
															children: ":"
														}),
														" ",
														H(n.span, {
															className: "token string",
															children: "\"sys.on-surface\""
														}),
														" ",
														H(n.span, {
															className: "token punctuation",
															children: "}"
														}),
														H(n.span, {
															className: "token punctuation",
															children: "}"
														})
													]
												}),
												H(n.span, {
													className: "token punctuation",
													children: ">"
												})
											]
										}),
										H(n.span, {
											className: "token plain-text",
											children: "\n          Popper "
										}),
										H(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										X(n.span, {
											className: "token template-string",
											children: [
												H(n.span, {
													className: "token template-punctuation string",
													children: "`"
												}),
												X(n.span, {
													className: "token interpolation",
													children: [
														H(n.span, {
															className: "token interpolation-punctuation punctuation",
															children: "${"
														}),
														"isOpen",
														H(n.span, {
															className: "token punctuation",
															children: "."
														}),
														H(n.span, {
															className: "token property-access",
															children: "value"
														}),
														H(n.span, {
															className: "token interpolation-punctuation punctuation",
															children: "}"
														})
													]
												}),
												H(n.span, {
													className: "token template-punctuation string",
													children: "`"
												})
											]
										}),
										H(n.span, {
											className: "token punctuation",
											children: "}"
										}),
										H(n.span, {
											className: "token plain-text",
											children: "!\n        "
										}),
										X(n.span, {
											className: "token tag",
											children: [X(n.span, {
												className: "token tag",
												children: [H(n.span, {
													className: "token punctuation",
													children: "</"
												}), H(n.span, {
													className: "token class-name",
													children: "Box"
												})]
											}), H(n.span, {
												className: "token punctuation",
												children: ">"
											})]
										}),
										"\n      ",
										H(n.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n    ",
								H(n.span, {
									className: "token punctuation",
									children: ">"
								})
							]
						}),
						H(n.span, {
							className: "token plain-text",
							children: "\n      "
						}),
						X(n.span, {
							className: "token tag",
							children: [
								X(n.span, {
									className: "token tag",
									children: [H(n.span, {
										className: "token punctuation",
										children: "<"
									}), H(n.span, {
										className: "token class-name",
										children: "Box"
									})]
								}),
								"\n        ",
								H(n.span, {
									className: "token attr-name",
									children: "sx"
								}),
								X(n.span, {
									className: "token script language-javascript",
									children: [
										H(n.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										H(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										H(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										" p",
										H(n.span, {
											className: "token operator",
											children: ":"
										}),
										" ",
										H(n.span, {
											className: "token number",
											children: "4"
										}),
										" ",
										H(n.span, {
											className: "token punctuation",
											children: "}"
										}),
										H(n.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n        ",
								H(n.span, {
									className: "token attr-name",
									children: "component"
								}),
								X(n.span, {
									className: "token script language-javascript",
									children: [
										H(n.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										H(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										H(n.span, {
											className: "token string",
											children: "\"button\""
										}),
										H(n.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n        ",
								H(n.span, {
									className: "token attr-name",
									children: "onClick"
								}),
								X(n.span, {
									className: "token script language-javascript",
									children: [
										H(n.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										H(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										H(n.span, {
											className: "token punctuation",
											children: "("
										}),
										H(n.span, {
											className: "token punctuation",
											children: ")"
										}),
										" ",
										H(n.span, {
											className: "token arrow operator",
											children: "=>"
										}),
										" ",
										H(n.span, {
											className: "token punctuation",
											children: "("
										}),
										"isOpen",
										H(n.span, {
											className: "token punctuation",
											children: "."
										}),
										H(n.span, {
											className: "token property-access",
											children: "value"
										}),
										" ",
										H(n.span, {
											className: "token operator",
											children: "="
										}),
										" ",
										H(n.span, {
											className: "token operator",
											children: "!"
										}),
										"isOpen",
										H(n.span, {
											className: "token punctuation",
											children: "."
										}),
										H(n.span, {
											className: "token property-access",
											children: "value"
										}),
										H(n.span, {
											className: "token punctuation",
											children: ")"
										}),
										H(n.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n      ",
								H(n.span, {
									className: "token punctuation",
									children: ">"
								})
							]
						}),
						H(n.span, {
							className: "token plain-text",
							children: "\n        Click Trigger Popper\n      "
						}),
						X(n.span, {
							className: "token tag",
							children: [X(n.span, {
								className: "token tag",
								children: [H(n.span, {
									className: "token punctuation",
									children: "</"
								}), H(n.span, {
									className: "token class-name",
									children: "Box"
								})]
							}), H(n.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						H(n.span, {
							className: "token plain-text",
							children: "\n    "
						}),
						X(n.span, {
							className: "token tag",
							children: [X(n.span, {
								className: "token tag",
								children: [H(n.span, {
									className: "token punctuation",
									children: "</"
								}), H(n.span, {
									className: "token class-name",
									children: "Popper"
								})]
							}), H(n.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						"\n  ",
						H(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						H(n.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						H(n.span, {
							className: "token punctuation",
							children: "}"
						}),
						H(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						H(n.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n"
					]
				})
			})]
		}),
		"\n",
		H(n.h2, { children: "Hovered Popper" }),
		"\n",
		X(n.div, {
			"data-example": "",
			children: [H(n.div, {
				"data-example-container": "",
				children: H(n.codeblocke7f6c011, {})
			}), H(n.pre, {
				className: "language-tsx",
				children: X(n.code, {
					className: "language-tsx",
					children: [
						H(n.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						X(n.span, {
							className: "token imports",
							children: [
								H(n.span, {
									className: "token punctuation",
									children: "{"
								}),
								" ref ",
								H(n.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						H(n.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						H(n.span, {
							className: "token string",
							children: "\"vue\""
						}),
						H(n.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						H(n.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						X(n.span, {
							className: "token imports",
							children: [
								H(n.span, {
									className: "token punctuation",
									children: "{"
								}),
								" component ",
								H(n.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						H(n.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						H(n.span, {
							className: "token string",
							children: "\"@innoai-tech/vuekit\""
						}),
						H(n.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						H(n.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						X(n.span, {
							className: "token imports",
							children: [
								H(n.span, {
									className: "token punctuation",
									children: "{"
								}),
								" ",
								H(n.span, {
									className: "token maybe-class-name",
									children: "Box"
								}),
								H(n.span, {
									className: "token punctuation",
									children: ","
								}),
								" ",
								H(n.span, {
									className: "token maybe-class-name",
									children: "Popper"
								}),
								" ",
								H(n.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						H(n.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						H(n.span, {
							className: "token string",
							children: "\"@innoai-tech/vueuikit\""
						}),
						H(n.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n",
						H(n.span, {
							className: "token keyword module",
							children: "export"
						}),
						" ",
						H(n.span, {
							className: "token keyword module",
							children: "default"
						}),
						" ",
						H(n.span, {
							className: "token function",
							children: "component"
						}),
						H(n.span, {
							className: "token punctuation",
							children: "("
						}),
						H(n.span, {
							className: "token punctuation",
							children: "("
						}),
						H(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						H(n.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						H(n.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n  ",
						H(n.span, {
							className: "token keyword",
							children: "const"
						}),
						" isOpen ",
						H(n.span, {
							className: "token operator",
							children: "="
						}),
						" ",
						H(n.span, {
							className: "token function",
							children: "ref"
						}),
						H(n.span, {
							className: "token punctuation",
							children: "("
						}),
						H(n.span, {
							className: "token boolean",
							children: "false"
						}),
						H(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						H(n.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n  ",
						H(n.span, {
							className: "token keyword control-flow",
							children: "return"
						}),
						" ",
						H(n.span, {
							className: "token punctuation",
							children: "("
						}),
						H(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						H(n.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						H(n.span, {
							className: "token punctuation",
							children: "("
						}),
						"\n    ",
						X(n.span, {
							className: "token tag",
							children: [
								X(n.span, {
									className: "token tag",
									children: [H(n.span, {
										className: "token punctuation",
										children: "<"
									}), H(n.span, {
										className: "token class-name",
										children: "Popper"
									})]
								}),
								"\n      ",
								H(n.span, {
									className: "token attr-name",
									children: "isOpen"
								}),
								X(n.span, {
									className: "token script language-javascript",
									children: [
										H(n.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										H(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										"isOpen",
										H(n.span, {
											className: "token punctuation",
											children: "."
										}),
										H(n.span, {
											className: "token property-access",
											children: "value"
										}),
										H(n.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n      ",
								H(n.span, {
									className: "token attr-name",
									children: "$content"
								}),
								X(n.span, {
									className: "token script language-javascript",
									children: [
										H(n.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										H(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										"\n        ",
										X(n.span, {
											className: "token tag",
											children: [
												X(n.span, {
													className: "token tag",
													children: [H(n.span, {
														className: "token punctuation",
														children: "<"
													}), H(n.span, {
														className: "token class-name",
														children: "Box"
													})]
												}),
												" ",
												H(n.span, {
													className: "token attr-name",
													children: "sx"
												}),
												X(n.span, {
													className: "token script language-javascript",
													children: [
														H(n.span, {
															className: "token script-punctuation punctuation",
															children: "="
														}),
														H(n.span, {
															className: "token punctuation",
															children: "{"
														}),
														H(n.span, {
															className: "token punctuation",
															children: "{"
														}),
														" containerStyle",
														H(n.span, {
															className: "token operator",
															children: ":"
														}),
														" ",
														H(n.span, {
															className: "token string",
															children: "\"sys.on-surface\""
														}),
														" ",
														H(n.span, {
															className: "token punctuation",
															children: "}"
														}),
														H(n.span, {
															className: "token punctuation",
															children: "}"
														})
													]
												}),
												H(n.span, {
													className: "token punctuation",
													children: ">"
												})
											]
										}),
										H(n.span, {
											className: "token plain-text",
											children: "Popper Content!"
										}),
										X(n.span, {
											className: "token tag",
											children: [X(n.span, {
												className: "token tag",
												children: [H(n.span, {
													className: "token punctuation",
													children: "</"
												}), H(n.span, {
													className: "token class-name",
													children: "Box"
												})]
											}), H(n.span, {
												className: "token punctuation",
												children: ">"
											})]
										}),
										"\n      ",
										H(n.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n    ",
								H(n.span, {
									className: "token punctuation",
									children: ">"
								})
							]
						}),
						H(n.span, {
							className: "token plain-text",
							children: "\n      "
						}),
						X(n.span, {
							className: "token tag",
							children: [
								X(n.span, {
									className: "token tag",
									children: [H(n.span, {
										className: "token punctuation",
										children: "<"
									}), H(n.span, {
										className: "token class-name",
										children: "Box"
									})]
								}),
								"\n        ",
								H(n.span, {
									className: "token attr-name",
									children: "component"
								}),
								X(n.span, {
									className: "token script language-javascript",
									children: [
										H(n.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										H(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										H(n.span, {
											className: "token string",
											children: "\"button\""
										}),
										H(n.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n        ",
								H(n.span, {
									className: "token attr-name",
									children: "sx"
								}),
								X(n.span, {
									className: "token script language-javascript",
									children: [
										H(n.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										H(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										H(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										" p",
										H(n.span, {
											className: "token operator",
											children: ":"
										}),
										" ",
										H(n.span, {
											className: "token number",
											children: "4"
										}),
										" ",
										H(n.span, {
											className: "token punctuation",
											children: "}"
										}),
										H(n.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n        ",
								H(n.span, {
									className: "token attr-name",
									children: "onMouseover"
								}),
								X(n.span, {
									className: "token script language-javascript",
									children: [
										H(n.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										H(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										H(n.span, {
											className: "token punctuation",
											children: "("
										}),
										H(n.span, {
											className: "token punctuation",
											children: ")"
										}),
										" ",
										H(n.span, {
											className: "token arrow operator",
											children: "=>"
										}),
										" ",
										H(n.span, {
											className: "token punctuation",
											children: "("
										}),
										"isOpen",
										H(n.span, {
											className: "token punctuation",
											children: "."
										}),
										H(n.span, {
											className: "token property-access",
											children: "value"
										}),
										" ",
										H(n.span, {
											className: "token operator",
											children: "="
										}),
										" ",
										H(n.span, {
											className: "token boolean",
											children: "true"
										}),
										H(n.span, {
											className: "token punctuation",
											children: ")"
										}),
										H(n.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n        ",
								H(n.span, {
									className: "token attr-name",
									children: "onMouseout"
								}),
								X(n.span, {
									className: "token script language-javascript",
									children: [
										H(n.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										H(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										H(n.span, {
											className: "token punctuation",
											children: "("
										}),
										H(n.span, {
											className: "token punctuation",
											children: ")"
										}),
										" ",
										H(n.span, {
											className: "token arrow operator",
											children: "=>"
										}),
										" ",
										H(n.span, {
											className: "token punctuation",
											children: "("
										}),
										"isOpen",
										H(n.span, {
											className: "token punctuation",
											children: "."
										}),
										H(n.span, {
											className: "token property-access",
											children: "value"
										}),
										" ",
										H(n.span, {
											className: "token operator",
											children: "="
										}),
										" ",
										H(n.span, {
											className: "token boolean",
											children: "false"
										}),
										H(n.span, {
											className: "token punctuation",
											children: ")"
										}),
										H(n.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n      ",
								H(n.span, {
									className: "token punctuation",
									children: ">"
								})
							]
						}),
						H(n.span, {
							className: "token plain-text",
							children: "\n        Popper Trigger\n      "
						}),
						X(n.span, {
							className: "token tag",
							children: [X(n.span, {
								className: "token tag",
								children: [H(n.span, {
									className: "token punctuation",
									children: "</"
								}), H(n.span, {
									className: "token class-name",
									children: "Box"
								})]
							}), H(n.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						H(n.span, {
							className: "token plain-text",
							children: "\n    "
						}),
						X(n.span, {
							className: "token tag",
							children: [X(n.span, {
								className: "token tag",
								children: [H(n.span, {
									className: "token punctuation",
									children: "</"
								}), H(n.span, {
									className: "token class-name",
									children: "Popper"
								})]
							}), H(n.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						"\n  ",
						H(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						H(n.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						H(n.span, {
							className: "token punctuation",
							children: "}"
						}),
						H(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						H(n.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n"
					]
				})
			})]
		}),
		"\n",
		H(n.h2, { children: "Animated" }),
		"\n",
		X(n.div, {
			"data-example": "",
			children: [H(n.div, {
				"data-example-container": "",
				children: H(n.codeblock4a44dc15, {})
			}), H(n.pre, {
				className: "language-tsx",
				children: X(n.code, {
					className: "language-tsx",
					children: [
						H(n.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						X(n.span, {
							className: "token imports",
							children: [
								H(n.span, {
									className: "token punctuation",
									children: "{"
								}),
								" ref ",
								H(n.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						H(n.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						H(n.span, {
							className: "token string",
							children: "\"vue\""
						}),
						H(n.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						H(n.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						X(n.span, {
							className: "token imports",
							children: [
								H(n.span, {
									className: "token punctuation",
									children: "{"
								}),
								" component ",
								H(n.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						H(n.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						H(n.span, {
							className: "token string",
							children: "\"@innoai-tech/vuekit\""
						}),
						H(n.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						H(n.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						X(n.span, {
							className: "token imports",
							children: [
								H(n.span, {
									className: "token punctuation",
									children: "{"
								}),
								"\n  ",
								H(n.span, {
									className: "token maybe-class-name",
									children: "Box"
								}),
								H(n.span, {
									className: "token punctuation",
									children: ","
								}),
								"\n  defineTransition",
								H(n.span, {
									className: "token punctuation",
									children: ","
								}),
								"\n  ",
								H(n.span, {
									className: "token maybe-class-name",
									children: "Popper"
								}),
								H(n.span, {
									className: "token punctuation",
									children: ","
								}),
								"\n  transition",
								H(n.span, {
									className: "token punctuation",
									children: ","
								}),
								"\n  triangle",
								H(n.span, {
									className: "token punctuation",
									children: ","
								}),
								"\n",
								H(n.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						H(n.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						H(n.span, {
							className: "token string",
							children: "\"@innoai-tech/vueuikit\""
						}),
						H(n.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n",
						H(n.span, {
							className: "token keyword module",
							children: "export"
						}),
						" ",
						H(n.span, {
							className: "token keyword",
							children: "const"
						}),
						" ",
						H(n.span, {
							className: "token maybe-class-name",
							children: "FadeInOutTransition"
						}),
						" ",
						H(n.span, {
							className: "token operator",
							children: "="
						}),
						" ",
						H(n.span, {
							className: "token function",
							children: "defineTransition"
						}),
						H(n.span, {
							className: "token punctuation",
							children: "("
						}),
						"\n  ",
						H(n.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n    ",
						H(n.span, {
							className: "token keyword module",
							children: "from"
						}),
						H(n.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						H(n.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n      opacity",
						H(n.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						H(n.span, {
							className: "token number",
							children: "0"
						}),
						H(n.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n    ",
						H(n.span, {
							className: "token punctuation",
							children: "}"
						}),
						H(n.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n    to",
						H(n.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						H(n.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n      opacity",
						H(n.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						H(n.span, {
							className: "token number",
							children: "1"
						}),
						H(n.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n    ",
						H(n.span, {
							className: "token punctuation",
							children: "}"
						}),
						H(n.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n    duration",
						H(n.span, {
							className: "token operator",
							children: ":"
						}),
						" transition",
						H(n.span, {
							className: "token punctuation",
							children: "."
						}),
						H(n.span, {
							className: "token property-access",
							children: "duration"
						}),
						H(n.span, {
							className: "token punctuation",
							children: "."
						}),
						H(n.span, {
							className: "token property-access",
							children: "md1"
						}),
						H(n.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n    easing",
						H(n.span, {
							className: "token operator",
							children: ":"
						}),
						" transition",
						H(n.span, {
							className: "token punctuation",
							children: "."
						}),
						H(n.span, {
							className: "token property-access",
							children: "easing"
						}),
						H(n.span, {
							className: "token punctuation",
							children: "."
						}),
						H(n.span, {
							className: "token property-access",
							children: "standard"
						}),
						H(n.span, {
							className: "token punctuation",
							children: "."
						}),
						H(n.span, {
							className: "token property-access",
							children: "accelerate"
						}),
						H(n.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n  ",
						H(n.span, {
							className: "token punctuation",
							children: "}"
						}),
						H(n.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n  ",
						H(n.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n    ",
						H(n.span, {
							className: "token keyword module",
							children: "from"
						}),
						H(n.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						H(n.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n      opacity",
						H(n.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						H(n.span, {
							className: "token number",
							children: "1"
						}),
						H(n.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n    ",
						H(n.span, {
							className: "token punctuation",
							children: "}"
						}),
						H(n.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n    to",
						H(n.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						H(n.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n      opacity",
						H(n.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						H(n.span, {
							className: "token number",
							children: "0"
						}),
						H(n.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n    ",
						H(n.span, {
							className: "token punctuation",
							children: "}"
						}),
						H(n.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n    duration",
						H(n.span, {
							className: "token operator",
							children: ":"
						}),
						" transition",
						H(n.span, {
							className: "token punctuation",
							children: "."
						}),
						H(n.span, {
							className: "token property-access",
							children: "duration"
						}),
						H(n.span, {
							className: "token punctuation",
							children: "."
						}),
						H(n.span, {
							className: "token property-access",
							children: "sm4"
						}),
						H(n.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n    easing",
						H(n.span, {
							className: "token operator",
							children: ":"
						}),
						" transition",
						H(n.span, {
							className: "token punctuation",
							children: "."
						}),
						H(n.span, {
							className: "token property-access",
							children: "easing"
						}),
						H(n.span, {
							className: "token punctuation",
							children: "."
						}),
						H(n.span, {
							className: "token property-access",
							children: "standard"
						}),
						H(n.span, {
							className: "token punctuation",
							children: "."
						}),
						H(n.span, {
							className: "token property-access",
							children: "decelerate"
						}),
						H(n.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n  ",
						H(n.span, {
							className: "token punctuation",
							children: "}"
						}),
						H(n.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n",
						H(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						H(n.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n",
						H(n.span, {
							className: "token keyword module",
							children: "export"
						}),
						" ",
						H(n.span, {
							className: "token keyword module",
							children: "default"
						}),
						" ",
						H(n.span, {
							className: "token function",
							children: "component"
						}),
						H(n.span, {
							className: "token punctuation",
							children: "("
						}),
						H(n.span, {
							className: "token punctuation",
							children: "("
						}),
						H(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						H(n.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						H(n.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n  ",
						H(n.span, {
							className: "token keyword",
							children: "const"
						}),
						" isOpen ",
						H(n.span, {
							className: "token operator",
							children: "="
						}),
						" ",
						H(n.span, {
							className: "token function",
							children: "ref"
						}),
						H(n.span, {
							className: "token punctuation",
							children: "("
						}),
						H(n.span, {
							className: "token boolean",
							children: "true"
						}),
						H(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						H(n.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n  ",
						H(n.span, {
							className: "token keyword control-flow",
							children: "return"
						}),
						" ",
						H(n.span, {
							className: "token punctuation",
							children: "("
						}),
						H(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						H(n.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						H(n.span, {
							className: "token punctuation",
							children: "("
						}),
						"\n    ",
						X(n.span, {
							className: "token tag",
							children: [
								X(n.span, {
									className: "token tag",
									children: [H(n.span, {
										className: "token punctuation",
										children: "<"
									}), H(n.span, {
										className: "token class-name",
										children: "Popper"
									})]
								}),
								"\n      ",
								H(n.span, {
									className: "token attr-name",
									children: "isOpen"
								}),
								X(n.span, {
									className: "token script language-javascript",
									children: [
										H(n.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										H(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										"isOpen",
										H(n.span, {
											className: "token punctuation",
											children: "."
										}),
										H(n.span, {
											className: "token property-access",
											children: "value"
										}),
										H(n.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n      ",
								H(n.span, {
									className: "token attr-name",
									children: "$transition"
								}),
								X(n.span, {
									className: "token script language-javascript",
									children: [
										H(n.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										H(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										H(n.span, {
											className: "token punctuation",
											children: "("
										}),
										H(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										" content ",
										H(n.span, {
											className: "token punctuation",
											children: "}"
										}),
										H(n.span, {
											className: "token punctuation",
											children: ")"
										}),
										" ",
										H(n.span, {
											className: "token arrow operator",
											children: "=>"
										}),
										" ",
										H(n.span, {
											className: "token punctuation",
											children: "("
										}),
										"\n        ",
										X(n.span, {
											className: "token tag",
											children: [X(n.span, {
												className: "token tag",
												children: [H(n.span, {
													className: "token punctuation",
													children: "<"
												}), H(n.span, {
													className: "token class-name",
													children: "FadeInOutTransition"
												})]
											}), H(n.span, {
												className: "token punctuation",
												children: ">"
											})]
										}),
										H(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										"content",
										H(n.span, {
											className: "token punctuation",
											children: "}"
										}),
										X(n.span, {
											className: "token tag",
											children: [X(n.span, {
												className: "token tag",
												children: [H(n.span, {
													className: "token punctuation",
													children: "</"
												}), H(n.span, {
													className: "token class-name",
													children: "FadeInOutTransition"
												})]
											}), H(n.span, {
												className: "token punctuation",
												children: ">"
											})]
										}),
										"\n      ",
										H(n.span, {
											className: "token punctuation",
											children: ")"
										}),
										H(n.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n      ",
								H(n.span, {
									className: "token attr-name",
									children: "$content"
								}),
								X(n.span, {
									className: "token script language-javascript",
									children: [
										H(n.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										H(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										"\n        ",
										X(n.span, {
											className: "token tag",
											children: [
												X(n.span, {
													className: "token tag",
													children: [H(n.span, {
														className: "token punctuation",
														children: "<"
													}), H(n.span, {
														className: "token class-name",
														children: "Box"
													})]
												}),
												"\n          ",
												H(n.span, {
													className: "token attr-name",
													children: "sx"
												}),
												X(n.span, {
													className: "token script language-javascript",
													children: [
														H(n.span, {
															className: "token script-punctuation punctuation",
															children: "="
														}),
														H(n.span, {
															className: "token punctuation",
															children: "{"
														}),
														H(n.span, {
															className: "token punctuation",
															children: "{"
														}),
														"\n            containerStyle",
														H(n.span, {
															className: "token operator",
															children: ":"
														}),
														" ",
														H(n.span, {
															className: "token string",
															children: "\"sys.on-surface\""
														}),
														H(n.span, {
															className: "token punctuation",
															children: ","
														}),
														"\n            shadow",
														H(n.span, {
															className: "token operator",
															children: ":"
														}),
														" ",
														H(n.span, {
															className: "token string",
															children: "\"2\""
														}),
														H(n.span, {
															className: "token punctuation",
															children: ","
														}),
														"\n            py",
														H(n.span, {
															className: "token operator",
															children: ":"
														}),
														" ",
														H(n.span, {
															className: "token number",
															children: "2"
														}),
														H(n.span, {
															className: "token punctuation",
															children: ","
														}),
														"\n            px",
														H(n.span, {
															className: "token operator",
															children: ":"
														}),
														" ",
														H(n.span, {
															className: "token number",
															children: "4"
														}),
														H(n.span, {
															className: "token punctuation",
															children: ","
														}),
														"\n            rounded",
														H(n.span, {
															className: "token operator",
															children: ":"
														}),
														" ",
														H(n.span, {
															className: "token string",
															children: "\"sm\""
														}),
														H(n.span, {
															className: "token punctuation",
															children: ","
														}),
														"\n          ",
														H(n.span, {
															className: "token punctuation",
															children: "}"
														}),
														H(n.span, {
															className: "token punctuation",
															children: "}"
														})
													]
												}),
												"\n        ",
												H(n.span, {
													className: "token punctuation",
													children: ">"
												})
											]
										}),
										H(n.span, {
											className: "token plain-text",
											children: "\n          Popper "
										}),
										H(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										X(n.span, {
											className: "token template-string",
											children: [
												H(n.span, {
													className: "token template-punctuation string",
													children: "`"
												}),
												X(n.span, {
													className: "token interpolation",
													children: [
														H(n.span, {
															className: "token interpolation-punctuation punctuation",
															children: "${"
														}),
														"isOpen",
														H(n.span, {
															className: "token punctuation",
															children: "."
														}),
														H(n.span, {
															className: "token property-access",
															children: "value"
														}),
														H(n.span, {
															className: "token interpolation-punctuation punctuation",
															children: "}"
														})
													]
												}),
												H(n.span, {
													className: "token template-punctuation string",
													children: "`"
												})
											]
										}),
										H(n.span, {
											className: "token punctuation",
											children: "}"
										}),
										H(n.span, {
											className: "token plain-text",
											children: "!\n        "
										}),
										X(n.span, {
											className: "token tag",
											children: [X(n.span, {
												className: "token tag",
												children: [H(n.span, {
													className: "token punctuation",
													children: "</"
												}), H(n.span, {
													className: "token class-name",
													children: "Box"
												})]
											}), H(n.span, {
												className: "token punctuation",
												children: ">"
											})]
										}),
										"\n      ",
										H(n.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n    ",
								H(n.span, {
									className: "token punctuation",
									children: ">"
								})
							]
						}),
						H(n.span, {
							className: "token plain-text",
							children: "\n      "
						}),
						X(n.span, {
							className: "token tag",
							children: [
								X(n.span, {
									className: "token tag",
									children: [H(n.span, {
										className: "token punctuation",
										children: "<"
									}), H(n.span, {
										className: "token class-name",
										children: "Box"
									})]
								}),
								"\n        ",
								H(n.span, {
									className: "token attr-name",
									children: "sx"
								}),
								X(n.span, {
									className: "token script language-javascript",
									children: [
										H(n.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										H(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										H(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										" p",
										H(n.span, {
											className: "token operator",
											children: ":"
										}),
										" ",
										H(n.span, {
											className: "token number",
											children: "4"
										}),
										" ",
										H(n.span, {
											className: "token punctuation",
											children: "}"
										}),
										H(n.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n        ",
								H(n.span, {
									className: "token attr-name",
									children: "component"
								}),
								X(n.span, {
									className: "token script language-javascript",
									children: [
										H(n.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										H(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										H(n.span, {
											className: "token string",
											children: "\"button\""
										}),
										H(n.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n        ",
								H(n.span, {
									className: "token attr-name",
									children: "onMouseover"
								}),
								X(n.span, {
									className: "token script language-javascript",
									children: [
										H(n.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										H(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										H(n.span, {
											className: "token punctuation",
											children: "("
										}),
										H(n.span, {
											className: "token punctuation",
											children: ")"
										}),
										" ",
										H(n.span, {
											className: "token arrow operator",
											children: "=>"
										}),
										" ",
										H(n.span, {
											className: "token punctuation",
											children: "("
										}),
										"isOpen",
										H(n.span, {
											className: "token punctuation",
											children: "."
										}),
										H(n.span, {
											className: "token property-access",
											children: "value"
										}),
										" ",
										H(n.span, {
											className: "token operator",
											children: "="
										}),
										" ",
										H(n.span, {
											className: "token boolean",
											children: "true"
										}),
										H(n.span, {
											className: "token punctuation",
											children: ")"
										}),
										H(n.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n        ",
								H(n.span, {
									className: "token attr-name",
									children: "onMouseout"
								}),
								X(n.span, {
									className: "token script language-javascript",
									children: [
										H(n.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										H(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										H(n.span, {
											className: "token punctuation",
											children: "("
										}),
										H(n.span, {
											className: "token punctuation",
											children: ")"
										}),
										" ",
										H(n.span, {
											className: "token arrow operator",
											children: "=>"
										}),
										" ",
										H(n.span, {
											className: "token punctuation",
											children: "("
										}),
										"isOpen",
										H(n.span, {
											className: "token punctuation",
											children: "."
										}),
										H(n.span, {
											className: "token property-access",
											children: "value"
										}),
										" ",
										H(n.span, {
											className: "token operator",
											children: "="
										}),
										" ",
										H(n.span, {
											className: "token boolean",
											children: "false"
										}),
										H(n.span, {
											className: "token punctuation",
											children: ")"
										}),
										H(n.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n      ",
								H(n.span, {
									className: "token punctuation",
									children: ">"
								})
							]
						}),
						H(n.span, {
							className: "token plain-text",
							children: "\n        Animated Popper\n      "
						}),
						X(n.span, {
							className: "token tag",
							children: [X(n.span, {
								className: "token tag",
								children: [H(n.span, {
									className: "token punctuation",
									children: "</"
								}), H(n.span, {
									className: "token class-name",
									children: "Box"
								})]
							}), H(n.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						H(n.span, {
							className: "token plain-text",
							children: "\n    "
						}),
						X(n.span, {
							className: "token tag",
							children: [X(n.span, {
								className: "token tag",
								children: [H(n.span, {
									className: "token punctuation",
									children: "</"
								}), H(n.span, {
									className: "token class-name",
									children: "Popper"
								})]
							}), H(n.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						"\n  ",
						H(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						H(n.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						H(n.span, {
							className: "token punctuation",
							children: "}"
						}),
						H(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						H(n.span, {
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
function s6(e = {}) {
	let { wrapper: n } = e.components || {};
	return n ? H(n, {
		...e,
		children: H(s3, { ...e })
	}) : s3(e);
}
var s9 = K(() => () => el(s6, { components: {
	codeblockd4735e3a: s0,
	codeblocke7f6c011: s2,
	codeblock4a44dc15: s4
} })), s8 = f(() => {
	let e = aA.use();
	return () => H(q, { children: H(rd, {
		sx: {
			height: "40vh",
			display: "flex",
			flexDirection: "column",
			flexWrap: "wrap",
			justifyContent: "space-between",
			gap: 8
		},
		children: e.token.textStyle.tokens.map((e) => X(rd, {
			sx: {
				flex: 1,
				rounded: "md",
				textStyle: e,
				p: 16,
				border: "2px solid",
				borderColor: "sys.outline-variant",
				bgColor: "sys.surface-container",
				color: "sys.primary",
				minW: "10vw",
				whiteSpace: "nowrap",
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between"
			},
			children: [
				H(rd, {
					sx: { textStyle: "sys.label-small" },
					children: e
				}),
				H(rd, { sx: { flex: 1 } }),
				H(rd, {
					sx: { py: 16 },
					children: "中文测试"
				})
			]
		}, e))
	}) });
});
export { rf as A, tB as B, sO as C, sx as D, sI as E, aA as F, tV as H, aS as I, aw as L, rh as M, rd as N, sv as O, ru as P, tW as R, sD as S, sV as T, to as U, tH as V, e7 as W, sA as _, sG as a, sR as b, sj as c, sw as d, sC as f, s_ as g, sS as h, sY as i, rm as j, ry as k, sF as l, sP as m, s9 as n, sq as o, sM as p, s1 as r, sz as s, s8 as t, sB as u, sT as v, sH as w, s$ as x, sL as y, tj as z };
