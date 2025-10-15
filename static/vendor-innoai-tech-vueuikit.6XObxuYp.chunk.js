let e;
import { r as n } from "./rolldown-runtime.D8qhy2Lt.chunk.js";
import { $ as a, B as t, F as s, H as r, I as o, J as i, K as c, L as l, P as p, Q as u, S as d, V as h, W as m, X as k, Y as f, Z as g, c as N, ct as y, d as b, dt as x, et as v, f as w, ft as C, i as P, m as _, nt as M, o as S, ot as T, r as $, st as A, tt as R, u as O, ut as D, z as B } from "./vendor-innoai-tech-vuekit.CrdESE0J.chunk.js";
import { a as I, i as F } from "./lib-nodepkg-typedef.DOxQvsqW.chunk.js";
import { t as L } from "./vendor-rxjs.CsNJjMpf.chunk.js";
import { C as H, D as V, E as j, O as E, S as z, T as W, _ as U, a as q, b as G, c as Y, d as K, f as X, g as J, h as Z, i as Q, l as ee, m as en, n as ea, o as et, p as es, r as er, s as eo, t as ei, u as ec, v as el, w as ep, x as eu, y as ed } from "./vendor-mermaid.B2jGXdgo.chunk.js";
import { r as eh } from "./vendor-innoai-tech-jsoneditor.VwAXinyt.chunk.js";
import { A as em, B as ek, C as ef, D as eg, E as eN, F as ey, H as eb, I as ex, J as ev, K as ew, L as eC, M as eP, N as e_, O as eM, P as eS, Q as eT, R as e$, S as eA, T as eR, U as eO, V as eD, W as eB, Y as eI, Z as eF, _ as eL, a as eH, b as eV, c as ej, ct as eE, d as ez, dt as eW, f as eU, g as eq, h as eG, i as eY, j as eK, k as eX, l as eJ, m as eZ, nt as eQ, o as e0, p as e1, q as e2, r as e4, rt as e5, s as e3, t as e8, tt as e6, u as e9, ut as e7, v as ne, w as nn, x as na, y as nt, z as ns } from "./index.7YZvkNcF.entry.js";
var nr, no, ni, nc, nl = (e, n, a) => Math.min(Math.max(a, e), n);
function np(e, n) {
	return e * Math.sqrt(1 - n * n);
}
var nu = ["duration", "bounce"], nd = [
	"stiffness",
	"damping",
	"mass"
];
function nh(e, n) {
	return n.some((n) => void 0 !== e[n]);
}
function nm(e) {
	var { from: n = 0, to: a = 1, restSpeed: t = 2, restDelta: s } = e, r = L(e, [
		"from",
		"to",
		"restSpeed",
		"restDelta"
	]);
	let o = {
		done: !1,
		value: n
	}, { stiffness: i, damping: c, mass: l, velocity: p, duration: u, isResolvedFromDuration: d } = function(e) {
		let n = Object.assign({
			velocity: 0,
			stiffness: 100,
			damping: 10,
			mass: 1,
			isResolvedFromDuration: !1
		}, e);
		if (!nh(e, nd) && nh(e, nu)) {
			let a = function({ duration: e = 800, bounce: n = .25, velocity: a = 0, mass: t = 1 }) {
				let s, r;
				eb(e <= 1e4, "Spring duration must be 10 seconds or less");
				let o = 1 - n;
				o = nl(.05, 1, o), e = nl(.01, 10, e / 1e3), o < 1 ? (s = (n) => {
					let t = n * o, s = t * e;
					return .001 - (t - a) / np(n, o) * Math.exp(-s);
				}, r = (n) => {
					let t = n * o * e, r = Math.pow(o, 2) * Math.pow(n, 2) * e, i = Math.exp(-t), c = np(Math.pow(n, 2), o);
					return (-s(n) + .001 > 0 ? -1 : 1) * ((t * a + a - r) * i) / c;
				}) : (s = (n) => -.001 + Math.exp(-n * e) * ((n - a) * e + 1), r = (n) => e * e * (a - n) * Math.exp(-n * e));
				let i = function(e, n, a) {
					let t = a;
					for (let a = 1; a < 12; a++) t -= e(t) / n(t);
					return t;
				}(s, r, 5 / e);
				if (e *= 1e3, isNaN(i)) return {
					stiffness: 100,
					damping: 10,
					duration: e
				};
				{
					let n = Math.pow(i, 2) * t;
					return {
						stiffness: n,
						damping: 2 * o * Math.sqrt(t * n),
						duration: e
					};
				}
			}(e);
			(n = Object.assign(Object.assign(Object.assign({}, n), a), {
				velocity: 0,
				mass: 1
			})).isResolvedFromDuration = !0;
		}
		return n;
	}(r), h = nk, m = nk;
	function k() {
		let e = p ? -(p / 1e3) : 0, t = a - n, r = c / (2 * Math.sqrt(i * l)), o = Math.sqrt(i / l) / 1e3;
		if (void 0 === s && (s = Math.min(Math.abs(a - n) / 100, .4)), r < 1) {
			let n = np(o, r);
			h = (s) => a - Math.exp(-r * o * s) * ((e + r * o * t) / n * Math.sin(n * s) + t * Math.cos(n * s)), m = (a) => {
				let s = Math.exp(-r * o * a);
				return r * o * s * (Math.sin(n * a) * (e + r * o * t) / n + t * Math.cos(n * a)) - s * (Math.cos(n * a) * (e + r * o * t) - n * t * Math.sin(n * a));
			};
		} else if (1 === r) h = (n) => a - Math.exp(-o * n) * (t + (e + o * t) * n);
		else {
			let n = o * Math.sqrt(r * r - 1);
			h = (s) => {
				let i = Math.exp(-r * o * s), c = Math.min(n * s, 300);
				return a - i * ((e + r * o * t) * Math.sinh(c) + n * t * Math.cosh(c)) / n;
			};
		}
	}
	return k(), {
		next: (e) => {
			let n = h(e);
			if (d) o.done = e >= u;
			else {
				let r = Math.abs(1e3 * m(e)) <= t, i = Math.abs(a - n) <= s;
				o.done = r && i;
			}
			return o.value = o.done ? a : n, o;
		},
		flipTarget: () => {
			p = -p, [n, a] = [a, n], k();
		}
	};
}
nm.needsInterpolation = (e, n) => "string" == typeof e || "string" == typeof n;
var nk = (e) => 0, nf = (e, n, a) => {
	let t = n - e;
	return 0 === t ? 1 : (a - e) / t;
}, ng = (e, n, a) => -a * e + a * n + e;
function nN(e, n, a) {
	return (a < 0 && (a += 1), a > 1 && (a -= 1), a < 1 / 6) ? e + (n - e) * 6 * a : a < .5 ? n : a < 2 / 3 ? e + (n - e) * (2 / 3 - a) * 6 : e;
}
function ny({ hue: e, saturation: n, lightness: a, alpha: t }) {
	e /= 360, a /= 100;
	let s = 0, r = 0, o = 0;
	if (n /= 100) {
		let t = a < .5 ? a * (1 + n) : a + n - a * n, i = 2 * a - t;
		s = nN(i, t, e + 1 / 3), r = nN(i, t, e), o = nN(i, t, e - 1 / 3);
	} else s = r = o = a;
	return {
		red: Math.round(255 * s),
		green: Math.round(255 * r),
		blue: Math.round(255 * o),
		alpha: t
	};
}
var nb = (e, n, a) => {
	let t = e * e;
	return Math.sqrt(Math.max(0, a * (n * n - t) + t));
}, nx = [
	e$,
	ns,
	ek
], nv = (e) => nx.find((n) => n.test(e)), nw = (e) => `'${e}' is not an animatable color. Use the equivalent color code instead.`, nC = (e, n) => {
	let a = nv(e), t = nv(n);
	eD(!!a, nw(e)), eD(!!t, nw(n));
	let s = a.parse(e), r = t.parse(n);
	a === ek && (s = ny(s), a = ns), t === ek && (r = ny(r), t = ns);
	let o = Object.assign({}, s);
	return (e) => {
		for (let n in o) "alpha" !== n && (o[n] = nb(s[n], r[n], e));
		return o.alpha = ng(s.alpha, r.alpha, e), a.transform(o);
	};
}, nP = (e, n) => (a) => n(e(a)), n_ = (...e) => e.reduce(nP);
function nM(e, n) {
	return "number" == typeof e ? (a) => ng(e, n, a) : eC.test(e) ? nC(e, n) : nA(e, n);
}
var nS = (e, n) => {
	let a = [...e], t = a.length, s = e.map((e, a) => nM(e, n[a]));
	return (e) => {
		for (let n = 0; n < t; n++) a[n] = s[n](e);
		return a;
	};
}, nT = (e, n) => {
	let a = Object.assign(Object.assign({}, e), n), t = {};
	for (let s in a) void 0 !== e[s] && void 0 !== n[s] && (t[s] = nM(e[s], n[s]));
	return (e) => {
		for (let n in t) a[n] = t[n](e);
		return a;
	};
};
function n$(e) {
	let n = ex.parse(e), a = n.length, t = 0, s = 0, r = 0;
	for (let e = 0; e < a; e++) t || "number" == typeof n[e] ? t++ : void 0 !== n[e].hue ? r++ : s++;
	return {
		parsed: n,
		numNumbers: t,
		numRGB: s,
		numHSL: r
	};
}
var nA = (e, n) => {
	let a = ex.createTransformer(n), t = n$(e), s = n$(n);
	return t.numHSL === s.numHSL && t.numRGB === s.numRGB && t.numNumbers >= s.numNumbers ? n_(nS(t.parsed, s.parsed), a) : (eb(!0, `Complex values '${e}' and '${n}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), (a) => `${a > 0 ? n : e}`);
}, nR = (e, n) => (a) => ng(e, n, a);
function nO(e, n, { clamp: a = !0, ease: t, mixer: s } = {}) {
	let r = e.length;
	eD(r === n.length, "Both input and output ranges must be the same length"), eD(!t || !Array.isArray(t) || t.length === r - 1, "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."), e[0] > e[r - 1] && (e = [].concat(e), n = [].concat(n), e.reverse(), n.reverse());
	let o = function(e, n, a) {
		let t = [], s = a || function(e) {
			if ("number" == typeof e) return nR;
			if ("string" == typeof e) if (eC.test(e)) return nC;
			else return nA;
			return Array.isArray(e) ? nS : "object" == typeof e ? nT : void 0;
		}(e[0]), r = e.length - 1;
		for (let a = 0; a < r; a++) {
			let r = s(e[a], e[a + 1]);
			n && (r = n_(Array.isArray(n) ? n[a] : n, r)), t.push(r);
		}
		return t;
	}(n, t, s), i = 2 === r ? function([e, n], [a]) {
		return (t) => a(nf(e, n, t));
	}(e, o) : function(e, n) {
		let a = e.length, t = a - 1;
		return (s) => {
			let r = 0, o = !1;
			if (s <= e[0] ? o = !0 : s >= e[t] && (r = t - 1, o = !0), !o) {
				let n = 1;
				for (; n < a && !(e[n] > s) && n !== t; n++);
				r = n - 1;
			}
			let i = nf(e[r], e[r + 1], s);
			return n[r](i);
		};
	}(e, o);
	return a ? (n) => i(nl(e[0], e[r - 1], n)) : i;
}
var nD = (e) => e, nB = (e = (e) => Math.pow(e, 2), (n) => n <= .5 ? e(2 * n) / 2 : (2 - e(2 * (1 - n))) / 2);
function nI({ from: e = 0, to: n = 1, ease: a, offset: t, duration: s = 300 }) {
	var r;
	let o = {
		done: !1,
		value: e
	}, i = Array.isArray(n) ? n : [e, n], c = (r = t && t.length === i.length ? t : function(e) {
		let n = e.length;
		return e.map((e, a) => 0 !== a ? a / (n - 1) : 0);
	}(i), r.map((e) => e * s));
	function l() {
		return nO(c, i, { ease: Array.isArray(a) ? a : i.map(() => a || nB).splice(0, i.length - 1) });
	}
	let p = l();
	return {
		next: (e) => (o.value = p(e), o.done = e >= s, o),
		flipTarget: () => {
			i.reverse(), p = l();
		}
	};
}
var nF = {
	keyframes: nI,
	spring: nm,
	decay: function({ velocity: e = 0, from: n = 0, power: a = .8, timeConstant: t = 350, restDelta: s = .5, modifyTarget: r }) {
		let o = {
			done: !1,
			value: n
		}, i = a * e, c = n + i, l = void 0 === r ? c : r(c);
		return l !== c && (i = l - n), {
			next: (e) => {
				let n = -i * Math.exp(-e / t);
				return o.done = !(n > s || n < -s), o.value = o.done ? l : l + n, o;
			},
			flipTarget: () => {}
		};
	}
};
function nL(e, n, a = 0) {
	return e - n - a;
}
var nH = (e) => {
	let n = ({ delta: n }) => e(n);
	return {
		start: () => ey.update(n, !0),
		stop: () => eS.update(n)
	};
};
function nV(e) {
	let n, a, t;
	var s, { from: r, autoplay: o = !0, driver: i = nH, elapsed: c = 0, repeat: l = 0, repeatType: p = "loop", repeatDelay: u = 0, onPlay: d, onStop: h, onComplete: m, onRepeat: k, onUpdate: f } = e, g = L(e, [
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
	let { to: N } = g, y = 0, b = g.duration, x = !1, v = !0, w = function(e) {
		if (Array.isArray(e.to)) return nI;
		if (nF[e.type]) return nF[e.type];
		let n = new Set(Object.keys(e));
		if (n.has("ease") || n.has("duration") && !n.has("dampingRatio"));
		else if (n.has("dampingRatio") || n.has("stiffness") || n.has("mass") || n.has("damping") || n.has("restSpeed") || n.has("restDelta")) return nm;
		return nI;
	}(g);
	null != (s = w.needsInterpolation) && s.call(w, r, N) && (t = nO([0, 100], [r, N], { clamp: !1 }), r = 0, N = 100);
	let C = w(Object.assign(Object.assign({}, g), {
		from: r,
		to: N
	}));
	return o && (d?.(), (n = i(function(e) {
		if (v || (e = -e), c += e, !x) {
			let e = C.next(Math.max(0, c));
			a = e.value, t && (a = t(a)), x = v ? e.done : c <= 0;
		}
		if (f?.(a), x) if (0 === y && (b ??= c), y < l) {
			var s = c;
			(v ? s >= b + u : s <= -u) && (y++, "reverse" === p ? c = function(e, n, a = 0, t = !0) {
				return t ? nL(n + -e, n, a) : n - (e - n) + a;
			}(c, b, u, v = y % 2 == 0) : (c = nL(c, b, u), "mirror" === p && C.flipTarget()), x = !1, k && k());
		} else n.stop(), m && m();
	})).start()), { stop: () => {
		h?.(), n.stop();
	} };
}
var nj = (e, n) => 1 - 3 * n + 3 * e, nE = (e, n) => 3 * n - 6 * e, nz = (e, n, a) => ((nj(n, a) * e + nE(n, a)) * e + 3 * n) * e, nW = (e, n, a) => 3 * nj(n, a) * e * e + 2 * nE(n, a) * e + 3 * n, nU = /[A-Z]|^ms/g, nq = /_EMO_([^_]+?)_([^]*?)_EMO_/g, nG = function(e) {
	return 45 === e.charCodeAt(1);
}, nY = function(e) {
	return null != e && "boolean" != typeof e;
}, nK = eK(function(e) {
	return nG(e) ? e : e.replace(nU, "-$&").toLowerCase();
}), nX = function(e, n) {
	switch (e) {
		case "animation":
		case "animationName": if ("string" == typeof n) return n.replace(nq, function(e, n, a) {
			return ni = {
				name: n,
				styles: a,
				next: ni
			}, n;
		});
	}
	return 1 === eP[e] || nG(e) || "number" != typeof n || 0 === n ? n : n + "px";
};
function nJ(e, n, a) {
	if (null == a) return "";
	if (void 0 !== a.__emotion_styles) return a;
	switch (typeof a) {
		case "boolean": return "";
		case "object":
			if (1 === a.anim) return ni = {
				name: a.name,
				styles: a.styles,
				next: ni
			}, a.name;
			if (void 0 !== a.styles) {
				var t = a.next;
				if (void 0 !== t) for (; void 0 !== t;) ni = {
					name: t.name,
					styles: t.styles,
					next: ni
				}, t = t.next;
				return a.styles + ";";
			}
			return function(e, n, a) {
				var t = "";
				if (Array.isArray(a)) for (var s = 0; s < a.length; s++) t += nJ(e, n, a[s]) + ";";
				else for (var r in a) {
					var o = a[r];
					if ("object" != typeof o) null != n && void 0 !== n[o] ? t += r + "{" + n[o] + "}" : nY(o) && (t += nK(r) + ":" + nX(r, o) + ";");
					else if (Array.isArray(o) && "string" == typeof o[0] && (null == n || void 0 === n[o[0]])) for (var i = 0; i < o.length; i++) nY(o[i]) && (t += nK(r) + ":" + nX(r, o[i]) + ";");
					else {
						var c = nJ(e, n, o);
						switch (r) {
							case "animation":
							case "animationName":
								t += nK(r) + ":" + c + ";";
								break;
							default: t += r + "{" + c + "}";
						}
					}
				}
				return t;
			}(e, n, a);
		case "function": if (void 0 !== e) {
			var s = ni, r = a(e);
			return ni = s, nJ(e, n, r);
		}
	}
	if (null == n) return a;
	var o = n[a];
	return void 0 !== o ? o : a;
}
var nZ = /label:\s*([^\s;{]+)\s*(;|$)/g;
function nQ() {
	return new Proxy({}, { get: (e, n) => n });
}
let n0 = nQ(), n1 = {
	paddingX: [n0.paddingLeft, n0.paddingRight],
	paddingY: [n0.paddingTop, n0.paddingBottom],
	marginX: [n0.marginInlineStart, n0.marginInlineEnd],
	marginY: [n0.marginTop, n0.marginBottom],
	borderX: [n0.borderLeft, n0.borderRight],
	borderY: [n0.borderTop, n0.borderBottom],
	color: [n0.color, n0.fill],
	borderTopRadius: [n0.borderTopLeftRadius, n0.borderTopRightRadius],
	borderBottomRadius: [n0.borderBottomLeftRadius, n0.borderBottomRightRadius],
	borderRightRadius: [n0.borderTopRightRadius, n0.borderBottomRightRadius],
	borderLeftRadius: [n0.borderTopLeftRadius, n0.borderBottomLeftRadius],
	backgroundGradient: [n0.backgroundImage],
	boxSize: [n0.width, n0.height]
}, n2 = nQ(), n4 = {
	font: n2.fontFamily,
	shadow: n2.boxShadow,
	rounded: n2.borderRadius,
	roundedTop: n2.borderTopRadius,
	roundedBottom: n2.borderBottomRadius,
	roundedLeft: n2.borderLeftRadius,
	roundedRight: n2.borderRightRadius,
	bg: n2.background,
	bgImage: n2.backgroundImage,
	bgSize: n2.backgroundSize,
	bgPosition: n2.backgroundPosition,
	bgRepeat: n2.backgroundRepeat,
	bgAttachment: n2.backgroundAttachment,
	bgColor: n2.backgroundColor,
	bgGradient: n2.backgroundGradient,
	bgClip: n2.backgroundClip,
	pos: n2.position,
	p: n2.padding,
	pt: n2.paddingTop,
	pr: n2.paddingRight,
	pl: n2.paddingLeft,
	pb: n2.paddingBottom,
	ps: n2.paddingInlineStart,
	pe: n2.paddingInlineEnd,
	px: n2.paddingX,
	py: n2.paddingY,
	m: n2.margin,
	mt: n2.marginTop,
	mr: n2.marginRight,
	ml: n2.marginLeft,
	mb: n2.marginBottom,
	ms: n2.marginInlineStart,
	me: n2.marginInlineEnd,
	mx: n2.marginX,
	my: n2.marginY,
	w: n2.width,
	minW: n2.minWidth,
	maxW: n2.maxWidth,
	h: n2.height,
	minH: n2.minHeight,
	maxH: n2.maxHeight
}, n5 = nQ(), n3 = (...e) => {
	let n = [...e];
	for (let a of e) n4[a] && n.push(n4[a]);
	return n;
}, n8 = {
	_rtl: "[dir=rtl] &, &[dir=rtl]",
	_ltr: "[dir=ltr] &, &[dir=ltr]",
	_dark: "&[data-theme=dark]",
	_light: "&[data-theme=light]"
};
var n6 = class e {
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
		if (n8[n]) return n8[n];
		let a = n;
		if (a.startsWith("$") || a.endsWith("$") || a.startsWith("_")) {
			let n = "", t = "";
			if (a.startsWith("_") ? (n = "&", a = a.slice(1)) : a.startsWith("$") ? (n = "& ", a = a.slice(1)) : (t = " &", a = a.slice(0, a.length - 1)), a.startsWith("data") || a.startsWith("aria")) {
				let [e, s] = a.split("__");
				return s ? `${n}[${h(e)}='${h(s)}']${t}` : `${n}[${h(e)}]${t}`;
			}
			if ("&" === n) {
				if (a.startsWith("$")) return `${n}::${a.slice(1)}`;
				if (e.supportedPseudoClasses[a]) {
					let t = e.supportedPseudoClasses[a];
					return `${n}:${t}, ${n}[data-${t}]:not([data-${t}='false']), ${n}.${t}`;
				}
				let [t, s] = a.split("__"), r = h(t);
				return s ? `${n}[data-${r}='${h(s)}']` : `${n}[data-${r}]:not([data-${r}='false'])`;
			}
		}
	};
	static walkStateValues = (n, a, t = {
		default: {},
		selectorPath: [],
		path: []
	}) => {
		let { $: s,...r } = n;
		for (let n in r) {
			let o = r[n], i = r.default ?? t.default, c = s ?? C(i, [...t.path.slice(1), "$"]), l = c ? [...t.selectorPath, c] : t.selectorPath, p = [...t.path, n];
			if (u(o)) {
				e.walkStateValues(o, a, {
					path: p,
					selectorPath: l,
					default: i
				});
				continue;
			}
			a(o, p, l);
		}
	};
	constructor(e) {
		this.opt = e;
	}
	processAll(n, a = !0) {
		let t = [], { state: s, extends: r,...o } = n;
		if (r) for (let e of r) t.push(...this.processAll(e, a));
		if (s) {
			let n = {}, a = {};
			e.walkStateValues(s, (e, t, s) => {
				let r = `--${this.opt.varPrefix}-state-${t.join("-")}`, o = y(t) ?? "", i = {};
				this.process(i, o, e, !1), n[r] = i[o], v(a, [...s, o], `var(${r})`);
			}), t.push(n), t.push(...this.processAll(a));
		}
		if (!m(o)) {
			let e = {};
			this.processTo(e, o, a), t.push(e);
		}
		return t;
	}
	processTo(e, n, a = !0) {
		for (let t in n) this.process(e, t, n[t], a);
	}
	process(n, a, t, s = !0) {
		if (this.opt.mixins[a]) {
			let e = this.opt.mixins[a]?.get(t);
			if (e) for (let a in e) this.process(n, a, e[a], s);
			return;
		}
		let r = a;
		if (u(t)) {
			n[r = e.convertSelector(r) ?? r] = n[r] ?? {}, this.processTo(n[r], t);
			return;
		}
		if (s && n1[r = n4[r] ?? r]) {
			for (let e of n1[r]) n[e] = this.opt.processValue(e, t);
			return;
		}
		n[r] = this.opt.processValue(r, t);
	}
};
let n9 = ((nr = {}).var = "var", nr.mixin = "mixin", nr);
var n7 = class e {
	static create(e, { value: n, on: a, transform: t }) {
		return {
			type: e,
			value: n,
			on: a,
			transform: t,
			__Tokens: void 0,
			__ValueType: void 0,
			__CSSTokens: void 0
		};
	}
	static color(n) {
		return e.create(n9.var, {
			value: n,
			on: n3(n5.color, n5.bgColor, n5.outlineColor, n5.borderColor, n5.accentColor, n5.fill, n5.stroke),
			transform: (e, n) => A(e) ? {
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
		return e.create(n9.var, {
			value: n,
			on: n3(n5.gap, n5.rowGap, n5.columnGap, n5.top, n5.right, n5.bottom, n5.left, n5.m, n5.ms, n5.me, n5.mt, n5.mr, n5.mb, n5.ml, n5.mx, n5.my, n5.p, n5.ps, n5.pe, n5.pt, n5.pr, n5.pb, n5.pl, n5.px, n5.py)
		});
	}
	static boxSize(n) {
		return e.create(n9.var, {
			value: n,
			on: n3(n5.w, n5.minW, n5.maxW, n5.h, n5.minH, n5.maxH, n5.boxSize),
			fallback: 0
		});
	}
	static fontSize(n) {
		return e.create(n9.var, {
			value: n,
			on: n3(n5.fontSize),
			fallback: 0
		});
	}
	static lineHeight(n) {
		return e.create(n9.var, {
			value: n,
			on: n3(n5.lineHeight),
			fallback: 0
		});
	}
	static rounded(n) {
		return e.create(n9.var, {
			value: n,
			fallback: 0,
			on: n3(n5.rounded, n5.roundedTop, n5.roundedBottom, n5.roundedLeft, n5.roundedRight, n0.borderTopLeftRadius, n0.borderTopRightRadius, n0.borderBottomLeftRadius, n0.borderBottomRightRadius, n0.borderTopRightRadius, n0.borderBottomRightRadius, n0.borderTopLeftRadius, n0.borderBottomLeftRadius)
		});
	}
	static transitionTimingFunction(n) {
		return e.create(n9.var, {
			value: n,
			on: n3(n5.transitionTimingFunction)
		});
	}
	static transitionDuration(n) {
		return e.create(n9.var, {
			value: n,
			on: n3(n5.transitionDuration),
			transform: (e) => `${e}ms`
		});
	}
	static font(n) {
		return e.create(n9.var, {
			value: n,
			on: n3(n5.font)
		});
	}
	static fontWeight(n) {
		return e.create(n9.var, {
			value: n,
			on: n3(n5.fontWeight)
		});
	}
	static letterSpacing(n) {
		return e.create(n9.var, {
			value: n,
			on: n3(n5.letterSpacing)
		});
	}
	static shadow(n) {
		return e.create(n9.var, {
			value: n,
			on: n3(n5.shadow)
		});
	}
	static customMixin(n, a) {
		return e.create(n9.mixin, {
			value: a,
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
let ae = (e, n, a) => {
	let t = e;
	for (let e = 0; e < n.length; e++) {
		let s = n[e];
		if (e === n.length - 1) {
			t[s] = a;
			continue;
		}
		t[s] = t[s] ?? {}, t = t[s];
	}
};
var an = class e {
	static defaultMode = "_default";
	static walkValues = (n, a, t = []) => {
		for (let s in n) {
			let r = n[s];
			if (u(r)) {
				if (D(r, "_default")) {
					a(r, [...t, s]);
					continue;
				}
				e.walkValues(r, a, [...t, s]);
				continue;
			}
			a(r, [...t, s]);
		}
	};
	__Tokens = void 0;
	_values = {};
	_cssVarRefs = {};
	constructor(n, { cssVar: a, transformFallback: t }) {
		e.walkValues(n.value, (e, s) => {
			let r = s.join("."), o = (e, s) => {
				let r = n.transform ? n.transform(e, a) : t(e);
				if (x(r)) for (let e in r) s(r[e], "default" === e ? "" : e);
				else s(r, "");
			};
			if (v(this._cssVarRefs, [r], a(r)), u(e)) for (let n in e) o(e[n], (e, a) => {
				v(this._values, [`${r}${a ? `/${a}` : ""}`, n], e);
			});
			else o(e, (e, n) => {
				v(this._values, [`${r}${n ? `/${n}` : ""}`], e);
			});
		});
	}
	get tokens() {
		return a(this._values);
	}
	get(n, a, t) {
		let s = this._values[n];
		return x(s) ? t ? s[a] : s[a] ?? s[e.defaultMode] : t ? a === e.defaultMode ? s : void 0 : s;
	}
	use(e, n = !1) {
		if (this._cssVarRefs[e]) return n ? `${this._cssVarRefs[e]}` : `var(${this._cssVarRefs[e]})`;
	}
}, aa = class e {
	static walkValue = (n, a, t = []) => {
		for (let s in n) {
			let r = n[s];
			if (u(r)) {
				if (D(r, "__mixin")) {
					a(r, [...t, s]);
					continue;
				}
				e.walkValue(r, a, [...t, s]);
				continue;
			}
			a(r, [...t, s]);
		}
	};
	_values = {};
	constructor(n) {
		e.walkValue(n.value, (e, n) => {
			let a = n.join(".");
			v(this._values, [a], k(e, "__mixin"));
		});
	}
	get tokens() {
		return a(this._values);
	}
	get(e) {
		return this._values[e];
	}
}, at = {
	primary: ["primary"],
	secondary: ["secondary"],
	tertiary: ["tertiary"],
	error: ["error"],
	warning: ["warning"],
	success: ["success"],
	neutral: ["surface", "outline"]
};
let as = (e) => {
	let n = C(e, ["color", "sys"], {});
	return {
		...e,
		color: { sys: g(at, (e) => f(n, (n, a) => M(e, (e) => a.indexOf(e) > -1))) }
	};
}, ar = (e) => (n) => `rgba(var(${n}--rgb) / ${e})`;
function ao(e, n) {
	return Object.assign((e) => n(e), {
		toString: () => e,
		token: e
	});
}
var ai = (e) => e.reduce((e, n) => Object.assign(e, { [n]: !0 }), {}), ac = class e {
	static propsCanPercent = ai([...n7.boxSize({}).on]);
	static propsCanBaseDp = ai([
		...n7.boxSize({}).on,
		...n7.space({}).on,
		...n7.fontSize({}).on,
		...n7.letterSpacing({}).on,
		...n7.lineHeight({}).on,
		...n7.rounded({}).on
	]);
	static create(n, a) {
		return new e(n, a);
	}
	mode;
	varPrefix;
	cssVars = {};
	tokens = {};
	propValues = {};
	mixins = {};
	dp = (e) => 0 === e ? 0 : `calc(${e} * var(${this.cssVar("space", "dp")}))`;
	transformFallback = (n, a) => e.propsCanBaseDp[n] && R(a) ? e.propsCanPercent[n] && 1 > Math.abs(a) ? `${100 * a}%` : this.dp(a) : a;
	constructor(e, n = {}) {
		for (let a in this.theme = e, this.varPrefix = n.varPrefix ?? "vk", this.mode = n.mode ?? "light", v(this.cssVars, [this.cssVar("space", "dp")], "0.1rem"), e) {
			let n = e[a];
			if (n) {
				if (n.type === n9.var) {
					let e = new an(n, {
						cssVar: (e) => this.cssVar(a, e),
						transformFallback: (e) => this.transformFallback(n.on[0], e)
					});
					for (let t of (this.tokens[a] = e, n.on)) this.propValues[t] = e;
					for (let n of e.tokens) for (let t of ["light", "dark"]) {
						let s = t === this.mode ? "_default" : `_${t}`, r = e.get(n, s, !0);
						c(r) || ("_default" === s ? v(this.cssVars, [this.cssVar(a, n)], r) : v(this.cssVars, [s, this.cssVar(a, n)], r));
					}
					continue;
				}
				if (n.type === n9.mixin) {
					let e = new aa(n);
					for (let a of n.on) this.mixins[a] = e;
				}
			}
		}
	}
	cssVar(e, n) {
		return `--${this.varPrefix}-${h(e)}__${n.replaceAll("/", "--").replaceAll(".", "__")}`;
	}
	get rootCSSVars() {
		return this.cssVars;
	}
	token = new Proxy({}, { get: (e, n) => this.tokens[n] ? Object.assign((e) => this.tokens[n]?.get(e, `_${this.mode}`), { tokens: this.tokens[n]?.tokens }) : this.mixins[n] ? Object.assign((e) => this.mixins[n]?.get(e), { tokens: this.mixins[n]?.tokens }) : void 0 });
	processValue = (e, n) => {
		if (i(n) && D(n, "token")) {
			let a = this.propValues[e]?.use(n.token, !0);
			return a ? n(a) : void 0;
		}
		return this.propValues[e]?.use(n) ?? this.transformFallback(e, n);
	};
	unstable_sx = (e) => new n6({
		mixins: this.mixins,
		varPrefix: this.varPrefix,
		processValue: this.processValue
	}).processAll(e);
	unstable_css(e, n) {
		let a = n ?? {};
		return a.__emotion_styles = a.__emotion_styles ?? function(e, n, a) {
			if (1 === e.length && "object" == typeof e[0] && null !== e[0] && void 0 !== e[0].styles) return e[0];
			var t, s = !0, r = "";
			ni = void 0;
			var o = e[0];
			null == o || void 0 === o.raw ? (s = !1, r += nJ(a, n, o)) : r += o[0];
			for (var i = 1; i < e.length; i++) r += nJ(a, n, e[i]), s && (r += o[i]);
			nZ.lastIndex = 0;
			for (var c = ""; null !== (t = nZ.exec(r));) c += "-" + t[1];
			return {
				name: e_(r) + c,
				styles: r,
				next: ni
			};
		}(this.unstable_sx(n), e?.registered, {}), a.__emotion_styles;
	}
	toFigmaTokens() {
		let e = { space: { dp: {
			$type: "sizing",
			$value: 1
		} } }, n = {}, a = {}, t = (e, n) => x(n) ? {
			$type: e,
			$value: g(n, (n) => t(e, n).$value)
		} : A(n) ? {
			$type: e,
			$value: n.replace(/var\(([^)]+)\)/g, (e) => {
				let n = e.slice(4, e.length - 1).slice(`--${this.varPrefix}-`.length).split("--")[0]?.split("__").map((e, n) => 0 === n ? r(e) : e).join(".") ?? "";
				return n.startsWith("sys.") ? `{${n}}` : `{seed.${n}}`;
			}).replace(/calc\(.+\)$/g, (e) => e.slice(5, e.length - 1))
		} : {
			$type: e,
			$value: n
		};
		for (let s in this.tokens) {
			let r = this.tokens[s], o = (o) => {
				for (let i of r.tokens) if (!i.includes("/")) if (i.startsWith("sys.")) {
					let e = r.get(i, "_default"), c = r.get(i, "_dark");
					ae(n, [s, ...i.split(".")], t(o, e)), e !== c && ae(a, [s, ...i.split(".")], t(o, c));
				} else ae(e, [s, ...i.split(".")], t(o, r.get(i, "_default")));
			};
			switch (s) {
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
			let a = this.mixins[e];
			if (!a) continue;
			let s = (s) => {
				for (let r of a.tokens) {
					let o = a.get(r);
					if (!o) continue;
					let i = this.unstable_sx(o)[0];
					ae(n, [e, ...r.split(".")], t(s, i));
				}
			};
			"textStyle" === e && s("typography");
		}
		return {
			seed: e,
			base: as(n),
			dark: as(a)
		};
	}
};
let al = {
	shadow: n7.shadow({
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
	elevation: n7.customMixin("elevation", {
		0: n7.mixin({
			transitionDuration: "md4",
			transitionTimingFunction: "standard",
			shadow: "0",
			_hover: { shadow: "1" }
		}),
		1: n7.mixin({
			transitionDuration: "md4",
			transitionTimingFunction: "standard",
			shadow: "1",
			_hover: { shadow: "2" }
		}),
		2: n7.mixin({
			transitionDuration: "md4",
			transitionTimingFunction: "standard",
			shadow: "2",
			_hover: { shadow: "3" }
		}),
		3: n7.mixin({
			transitionDuration: "md4",
			transitionTimingFunction: "standard",
			shadow: "3",
			_hover: { shadow: "4" }
		}),
		4: n7.mixin({
			transitionDuration: "md4",
			transitionTimingFunction: "standard",
			shadow: "4",
			_hover: { shadow: "5" }
		})
	})
};
var ap = (e, n, a, t) => Object.assign(function(e, n, a, t) {
	if (e === n && a === t) return nD;
	let s = new Float32Array(11);
	for (let n = 0; n < 11; ++n) s[n] = nz(.1 * n, e, a);
	return (r) => 0 === r || 1 === r ? r : nz(function(n) {
		let t = 0, r = 1;
		for (; 10 !== r && s[r] <= n; ++r) t += .1;
		let o = t + (n - s[--r]) / (s[r + 1] - s[r]) * .1, i = nW(o, e, a);
		if (i >= .001) {
			var c = o;
			for (let t = 0; t < 8; ++t) {
				let t = nW(c, e, a);
				if (0 === t) break;
				let s = nz(c, e, a) - n;
				c -= s / t;
			}
			return c;
		}
		return 0 === i ? o : function(e, n, a, t, s) {
			let r, o, i = 0;
			do
				(r = nz(o = n + (a - n) / 2, t, s) - e) > 0 ? a = o : n = o;
			while (Math.abs(r) > 1e-7 && ++i < 10);
			return o;
		}(n, t, t + .1, e, a);
	}(r), n, t);
}(e, n, a, t), { toString: () => `cubic-bezier(${e}, ${n}, ${a}, ${t})` });
let au = {
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
		linear: ap(0, 0, 1, 1),
		standard: Object.assign(ap(.2, 0, 0, 1), {
			accelerate: ap(.3, 0, 1, 1),
			decelerate: ap(0, 0, 0, 1)
		}),
		emphasized: Object.assign(ap(.2, 0, 0, 1), {
			accelerate: ap(.3, 0, .8, .15),
			decelerate: ap(.05, .7, .1, 1)
		}),
		legacy: Object.assign(ap(.4, 0, .2, 1), {
			decelerate: ap(0, 0, .2, 1),
			accelerate: ap(.4, 0, 1, 1)
		})
	}
}, ad = (e, n) => {
	let a = n ?? {
		...e,
		from: { ...e.to },
		to: { ...e.from }
	};
	return s({
		onComplete: I(),
		$default: I()
	}, (n, { slots: t, emit: s }) => {
		let r, o = (n, a) => {
			r = nV({
				...e,
				autoplay: !0,
				onComplete: () => {
					a(), s("complete", "enter");
				},
				onUpdate: (e) => {
					Object.assign(n.style, e);
				}
			});
		}, i = (e, n) => {
			r = nV({
				...a,
				autoplay: !0,
				onComplete: () => {
					n(), s("complete", "leave");
				},
				onUpdate: (n) => {
					Object.assign(e.style, n);
				}
			});
		}, c = () => {
			r?.stop();
		};
		return () => eO(ew, {
			css: !1,
			onEnter: o,
			onEnterCancelled: c,
			onLeave: i,
			onLeaveCancelled: c,
			children: t.default?.()
		});
	}, { name: "Transition" });
}, ah = {
	transitionDuration: n7.transitionDuration(au.duration),
	transitionTimingFunction: n7.transitionTimingFunction({
		linear: au.easing.linear.toString(),
		standard: au.easing.standard.toString(),
		"standard-accelerate": au.easing.standard.accelerate.toString(),
		"standard-decelerate": au.easing.standard.decelerate.toString(),
		emphasized: au.easing.emphasized.toString(),
		"emphasized-decelerate": au.easing.emphasized.decelerate.toString(),
		"emphasized-accelerate": au.easing.emphasized.accelerate.toString(),
		legacy: au.easing.legacy.toString(),
		"legacy-decelerate": au.easing.legacy.decelerate.toString(),
		"legacy-accelerate": au.easing.legacy.accelerate.toString()
	})
};
function am(e) {
	return e < 0 ? -1 : +(0 !== e);
}
function ak(e, n, a) {
	return a < e ? e : a > n ? n : a;
}
function af(e) {
	return (e %= 360) < 0 && (e += 360), e;
}
function ag(e) {
	return (e %= 360) < 0 && (e += 360), e;
}
function aN(e, n) {
	return [
		e[0] * n[0][0] + e[1] * n[0][1] + e[2] * n[0][2],
		e[0] * n[1][0] + e[1] * n[1][1] + e[2] * n[1][2],
		e[0] * n[2][0] + e[1] * n[2][1] + e[2] * n[2][2]
	];
}
var ay = [
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
], ab = [
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
], ax = [
	95.047,
	100,
	108.883
];
function av(e, n, a) {
	return (-16777216 | (255 & e) << 16 | (255 & n) << 8 | 255 & a) >>> 0;
}
function aw(e) {
	return av(aS(e[0]), aS(e[1]), aS(e[2]));
}
function aC(e) {
	return 116 * aT(function(e) {
		return aN([
			aM(e >> 16 & 255),
			aM(e >> 8 & 255),
			aM(255 & e)
		], ay);
	}(e)[1] / 100) - 16;
}
function aP(e) {
	return 100 * function(e) {
		let n = e * e * e;
		return n > 216 / 24389 ? n : (116 * e - 16) / (24389 / 27);
	}((e + 16) / 116);
}
function a_(e) {
	return 116 * aT(e / 100) - 16;
}
function aM(e) {
	let n = e / 255;
	return n <= .040449936 ? n / 12.92 * 100 : 100 * Math.pow((n + .055) / 1.055, 2.4);
}
function aS(e) {
	var n;
	let a = e / 100;
	return (n = Math.round(255 * (a <= .0031308 ? 12.92 * a : 1.055 * Math.pow(a, 1 / 2.4) - .055))) < 0 ? 0 : n > 255 ? 255 : n;
}
function aT(e) {
	return e > 216 / 24389 ? Math.pow(e, 1 / 3) : (24389 / 27 * e + 16) / 116;
}
var a$ = class e {
	static make(n = ax, a = 200 / Math.PI * aP(50) / 100, t = 50, s = 2, r = !1) {
		var o, i;
		let c = .401288 * n[0] + .650173 * n[1] + -.051461 * n[2], l = -.250268 * n[0] + 1.204414 * n[1] + .045854 * n[2], p = -.002079 * n[0] + .048952 * n[1] + .953127 * n[2], u = .8 + s / 10, d = u >= .9 ? (1 - (o = (u - .9) * 10)) * .59 + .69 * o : (1 - (i = (u - .8) * 10)) * .525 + .59 * i, h = r ? 1 : u * (1 - 1 / 3.6 * Math.exp((-a - 42) / 92)), m = [
			100 / c * (h = h > 1 ? 1 : h < 0 ? 0 : h) + 1 - h,
			100 / l * h + 1 - h,
			100 / p * h + 1 - h
		], k = 1 / (5 * a + 1), f = k * k * k * k, g = 1 - f, N = f * a + .1 * g * g * Math.cbrt(5 * a), y = aP(t) / n[1], b = 1.48 + Math.sqrt(y), x = .725 / Math.pow(y, .2), v = [
			Math.pow(N * m[0] * c / 100, .42),
			Math.pow(N * m[1] * l / 100, .42),
			Math.pow(N * m[2] * p / 100, .42)
		], w = [
			400 * v[0] / (v[0] + 27.13),
			400 * v[1] / (v[1] + 27.13),
			400 * v[2] / (v[2] + 27.13)
		];
		return new e(y, (2 * w[0] + w[1] + .05 * w[2]) * x, x, x, d, u, m, N, Math.pow(N, .25), b);
	}
	constructor(e, n, a, t, s, r, o, i, c, l) {
		this.n = e, this.aw = n, this.nbb = a, this.ncb = t, this.c = s, this.nc = r, this.rgbD = o, this.fl = i, this.fLRoot = c, this.z = l;
	}
};
a$.DEFAULT = a$.make();
var aA = class e {
	constructor(e, n, a, t, s, r, o, i, c) {
		this.hue = e, this.chroma = n, this.j = a, this.q = t, this.m = s, this.s = r, this.jstar = o, this.astar = i, this.bstar = c;
	}
	distance(e) {
		let n = this.jstar - e.jstar, a = this.astar - e.astar, t = this.bstar - e.bstar;
		return 1.41 * Math.pow(Math.sqrt(n * n + a * a + t * t), .63);
	}
	static fromInt(n) {
		return e.fromIntInViewingConditions(n, a$.DEFAULT);
	}
	static fromIntInViewingConditions(n, a) {
		let t = aM((16711680 & n) >> 16), s = aM((65280 & n) >> 8), r = aM(255 & n), o = .41233895 * t + .35762064 * s + .18051042 * r, i = .2126 * t + .7152 * s + .0722 * r, c = .01932141 * t + .11916382 * s + .95034478 * r, l = a.rgbD[0] * (.401288 * o + .650173 * i - .051461 * c), p = a.rgbD[1] * (-.250268 * o + 1.204414 * i + .045854 * c), u = a.rgbD[2] * (-.002079 * o + .048952 * i + .953127 * c), d = Math.pow(a.fl * Math.abs(l) / 100, .42), h = Math.pow(a.fl * Math.abs(p) / 100, .42), m = Math.pow(a.fl * Math.abs(u) / 100, .42), k = 400 * am(l) * d / (d + 27.13), f = 400 * am(p) * h / (h + 27.13), g = 400 * am(u) * m / (m + 27.13), N = (11 * k + -12 * f + g) / 11, y = (k + f - 2 * g) / 9, b = 180 * Math.atan2(y, N) / Math.PI, x = b < 0 ? b + 360 : b >= 360 ? b - 360 : b, v = x * Math.PI / 180, w = 100 * Math.pow((40 * k + 20 * f + g) / 20 * a.nbb / a.aw, a.c * a.z), C = 4 / a.c * Math.sqrt(w / 100) * (a.aw + 4) * a.fLRoot, P = Math.pow(5e4 / 13 * (.25 * (Math.cos((x < 20.14 ? x + 360 : x) * Math.PI / 180 + 2) + 3.8)) * a.nc * a.ncb * Math.sqrt(N * N + y * y) / ((20 * k + 20 * f + 21 * g) / 20 + .305), .9) * Math.pow(1.64 - Math.pow(.29, a.n), .73), _ = P * Math.sqrt(w / 100), M = _ * a.fLRoot, S = 50 * Math.sqrt(P * a.c / (a.aw + 4)), T = 1 / .0228 * Math.log(1 + .0228 * M);
		return new e(x, _, w, C, M, S, 1.7000000000000002 * w / (1 + .007 * w), T * Math.cos(v), T * Math.sin(v));
	}
	static fromJch(n, a, t) {
		return e.fromJchInViewingConditions(n, a, t, a$.DEFAULT);
	}
	static fromJchInViewingConditions(n, a, t, s) {
		let r = 4 / s.c * Math.sqrt(n / 100) * (s.aw + 4) * s.fLRoot, o = a * s.fLRoot, i = 50 * Math.sqrt(a / Math.sqrt(n / 100) * s.c / (s.aw + 4)), c = t * Math.PI / 180, l = 1 / .0228 * Math.log(1 + .0228 * o);
		return new e(t, a, n, r, o, i, 1.7000000000000002 * n / (1 + .007 * n), l * Math.cos(c), l * Math.sin(c));
	}
	static fromUcs(n, a, t) {
		return e.fromUcsInViewingConditions(n, a, t, a$.DEFAULT);
	}
	static fromUcsInViewingConditions(n, a, t, s) {
		let r = (Math.exp(.0228 * Math.sqrt(a * a + t * t)) - 1) / .0228 / s.fLRoot, o = 180 / Math.PI * Math.atan2(t, a);
		return o < 0 && (o += 360), e.fromJchInViewingConditions(n / (1 - (n - 100) * .007), r, o, s);
	}
	toInt() {
		return this.viewed(a$.DEFAULT);
	}
	viewed(e) {
		let n = Math.pow((0 === this.chroma || 0 === this.j ? 0 : this.chroma / Math.sqrt(this.j / 100)) / Math.pow(1.64 - Math.pow(.29, e.n), .73), 1 / .9), a = this.hue * Math.PI / 180, t = .25 * (Math.cos(a + 2) + 3.8), s = e.aw * Math.pow(this.j / 100, 1 / e.c / e.z), r = 5e4 / 13 * t * e.nc * e.ncb, o = s / e.nbb, i = Math.sin(a), c = Math.cos(a), l = 23 * (o + .305) * n / (23 * r + 11 * n * c + 108 * n * i), p = l * c, u = l * i, d = (460 * o + 451 * p + 288 * u) / 1403, h = (460 * o - 891 * p - 261 * u) / 1403, m = (460 * o - 220 * p - 6300 * u) / 1403, k = Math.max(0, 27.13 * Math.abs(d) / (400 - Math.abs(d))), f = am(d) * (100 / e.fl) * Math.pow(k, 1 / .42), g = Math.max(0, 27.13 * Math.abs(h) / (400 - Math.abs(h))), N = am(h) * (100 / e.fl) * Math.pow(g, 1 / .42), y = Math.max(0, 27.13 * Math.abs(m) / (400 - Math.abs(m))), b = am(m) * (100 / e.fl) * Math.pow(y, 1 / .42), x = f / e.rgbD[0], v = N / e.rgbD[1], w = b / e.rgbD[2];
		return function(e, n, a) {
			let t = ab[0][0] * e + ab[0][1] * n + ab[0][2] * a, s = ab[1][0] * e + ab[1][1] * n + ab[1][2] * a, r = ab[2][0] * e + ab[2][1] * n + ab[2][2] * a;
			return av(aS(t), aS(s), aS(r));
		}(1.86206786 * x - 1.01125463 * v + .14918677 * w, .38752654 * x + .62144744 * v - .00897398 * w, -.0158415 * x - .03412294 * v + 1.04996444 * w);
	}
	static fromXyzInViewingConditions(n, a, t, s) {
		let r = s.rgbD[0] * (.401288 * n + .650173 * a - .051461 * t), o = s.rgbD[1] * (-.250268 * n + 1.204414 * a + .045854 * t), i = s.rgbD[2] * (-.002079 * n + .048952 * a + .953127 * t), c = Math.pow(s.fl * Math.abs(r) / 100, .42), l = Math.pow(s.fl * Math.abs(o) / 100, .42), p = Math.pow(s.fl * Math.abs(i) / 100, .42), u = 400 * am(r) * c / (c + 27.13), d = 400 * am(o) * l / (l + 27.13), h = 400 * am(i) * p / (p + 27.13), m = (11 * u + -12 * d + h) / 11, k = (u + d - 2 * h) / 9, f = 180 * Math.atan2(k, m) / Math.PI, g = f < 0 ? f + 360 : f >= 360 ? f - 360 : f, N = g * Math.PI / 180, y = 100 * Math.pow((40 * u + 20 * d + h) / 20 * s.nbb / s.aw, s.c * s.z), b = 4 / s.c * Math.sqrt(y / 100) * (s.aw + 4) * s.fLRoot, x = Math.pow(5e4 / 13 * (1 / 4 * (Math.cos((g < 20.14 ? g + 360 : g) * Math.PI / 180 + 2) + 3.8)) * s.nc * s.ncb * Math.sqrt(m * m + k * k) / ((20 * u + 20 * d + 21 * h) / 20 + .305), .9) * Math.pow(1.64 - Math.pow(.29, s.n), .73), v = x * Math.sqrt(y / 100), w = v * s.fLRoot, C = 50 * Math.sqrt(x * s.c / (s.aw + 4)), P = Math.log(1 + .0228 * w) / .0228;
		return new e(g, v, y, b, w, C, 1.7000000000000002 * y / (1 + .007 * y), P * Math.cos(N), P * Math.sin(N));
	}
	xyzInViewingConditions(e) {
		let n = Math.pow((0 === this.chroma || 0 === this.j ? 0 : this.chroma / Math.sqrt(this.j / 100)) / Math.pow(1.64 - Math.pow(.29, e.n), .73), 1 / .9), a = this.hue * Math.PI / 180, t = .25 * (Math.cos(a + 2) + 3.8), s = e.aw * Math.pow(this.j / 100, 1 / e.c / e.z), r = 5e4 / 13 * t * e.nc * e.ncb, o = s / e.nbb, i = Math.sin(a), c = Math.cos(a), l = 23 * (o + .305) * n / (23 * r + 11 * n * c + 108 * n * i), p = l * c, u = l * i, d = (460 * o + 451 * p + 288 * u) / 1403, h = (460 * o - 891 * p - 261 * u) / 1403, m = (460 * o - 220 * p - 6300 * u) / 1403, k = Math.max(0, 27.13 * Math.abs(d) / (400 - Math.abs(d))), f = am(d) * (100 / e.fl) * Math.pow(k, 1 / .42), g = Math.max(0, 27.13 * Math.abs(h) / (400 - Math.abs(h))), N = am(h) * (100 / e.fl) * Math.pow(g, 1 / .42), y = Math.max(0, 27.13 * Math.abs(m) / (400 - Math.abs(m))), b = am(m) * (100 / e.fl) * Math.pow(y, 1 / .42), x = f / e.rgbD[0], v = N / e.rgbD[1], w = b / e.rgbD[2];
		return [
			1.86206786 * x - 1.01125463 * v + .14918677 * w,
			.38752654 * x + .62144744 * v - .00897398 * w,
			-.0158415 * x - .03412294 * v + 1.04996444 * w
		];
	}
}, aR = class e {
	static sanitizeRadians(e) {
		return (e + 8 * Math.PI) % (2 * Math.PI);
	}
	static trueDelinearized(e) {
		let n = e / 100;
		return 255 * (n <= .0031308 ? 12.92 * n : 1.055 * Math.pow(n, 1 / 2.4) - .055);
	}
	static chromaticAdaptation(e) {
		let n = Math.pow(Math.abs(e), .42);
		return 400 * am(e) * n / (n + 27.13);
	}
	static hueOf(n) {
		let a = aN(n, e.SCALED_DISCOUNT_FROM_LINRGB), t = e.chromaticAdaptation(a[0]), s = e.chromaticAdaptation(a[1]), r = e.chromaticAdaptation(a[2]);
		return Math.atan2((t + s - 2 * r) / 9, (11 * t + -12 * s + r) / 11);
	}
	static areInCyclicOrder(n, a, t) {
		return e.sanitizeRadians(a - n) < e.sanitizeRadians(t - n);
	}
	static intercept(e, n, a) {
		return (n - e) / (a - e);
	}
	static lerpPoint(e, n, a) {
		return [
			e[0] + (a[0] - e[0]) * n,
			e[1] + (a[1] - e[1]) * n,
			e[2] + (a[2] - e[2]) * n
		];
	}
	static setCoordinate(n, a, t, s) {
		let r = e.intercept(n[s], a, t[s]);
		return e.lerpPoint(n, r, t);
	}
	static isBounded(e) {
		return 0 <= e && e <= 100;
	}
	static nthVertex(n, a) {
		let t = e.Y_FROM_LINRGB[0], s = e.Y_FROM_LINRGB[1], r = e.Y_FROM_LINRGB[2], o = a % 4 <= 1 ? 0 : 100, i = 100 * (a % 2 != 0);
		if (a < 4) {
			let a = (n - o * s - i * r) / t;
			return e.isBounded(a) ? [
				a,
				o,
				i
			] : [
				-1,
				-1,
				-1
			];
		}
		if (a < 8) {
			let a = (n - i * t - o * r) / s;
			return e.isBounded(a) ? [
				i,
				a,
				o
			] : [
				-1,
				-1,
				-1
			];
		}
		{
			let a = (n - o * t - i * s) / r;
			return e.isBounded(a) ? [
				o,
				i,
				a
			] : [
				-1,
				-1,
				-1
			];
		}
	}
	static bisectToSegment(n, a) {
		let t = [
			-1,
			-1,
			-1
		], s = t, r = 0, o = 0, i = !1, c = !0;
		for (let l = 0; l < 12; l++) {
			let p = e.nthVertex(n, l);
			if (p[0] < 0) continue;
			let u = e.hueOf(p);
			if (!i) {
				t = p, s = p, r = u, o = u, i = !0;
				continue;
			}
			(c || e.areInCyclicOrder(r, u, o)) && (c = !1, e.areInCyclicOrder(r, a, u) ? (s = p, o = u) : (t = p, r = u));
		}
		return [t, s];
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
	static bisectToLimit(n, a) {
		let t = e.bisectToSegment(n, a), s = t[0], r = e.hueOf(s), o = t[1];
		for (let n = 0; n < 3; n++) if (s[n] !== o[n]) {
			let t = -1, i = 255;
			s[n] < o[n] ? (t = e.criticalPlaneBelow(e.trueDelinearized(s[n])), i = e.criticalPlaneAbove(e.trueDelinearized(o[n]))) : (t = e.criticalPlaneAbove(e.trueDelinearized(s[n])), i = e.criticalPlaneBelow(e.trueDelinearized(o[n])));
			for (let c = 0; c < 8; c++) if (1 >= Math.abs(i - t)) break;
			else {
				let c = Math.floor((t + i) / 2), l = e.CRITICAL_PLANES[c], p = e.setCoordinate(s, l, o, n), u = e.hueOf(p);
				e.areInCyclicOrder(r, a, u) ? (o = p, i = c) : (s = p, r = u, t = c);
			}
		}
		return e.midpoint(s, o);
	}
	static inverseChromaticAdaptation(e) {
		let n = Math.abs(e), a = Math.max(0, 27.13 * n / (400 - n));
		return am(e) * Math.pow(a, 1 / .42);
	}
	static findResultByJ(n, a, t) {
		let s = 11 * Math.sqrt(t), r = a$.DEFAULT, o = 1 / Math.pow(1.64 - Math.pow(.29, r.n), .73), i = .25 * (Math.cos(n + 2) + 3.8) * (5e4 / 13) * r.nc * r.ncb, c = Math.sin(n), l = Math.cos(n);
		for (let n = 0; n < 5; n++) {
			let p = s / 100, u = Math.pow((0 === a || 0 === s ? 0 : a / Math.sqrt(p)) * o, 1 / .9), d = r.aw * Math.pow(p, 1 / r.c / r.z) / r.nbb, h = 23 * (d + .305) * u / (23 * i + 11 * u * l + 108 * u * c), m = h * l, k = h * c, f = (460 * d + 451 * m + 288 * k) / 1403, g = (460 * d - 891 * m - 261 * k) / 1403, N = (460 * d - 220 * m - 6300 * k) / 1403, b = aN([
				e.inverseChromaticAdaptation(f),
				e.inverseChromaticAdaptation(g),
				e.inverseChromaticAdaptation(N)
			], e.LINRGB_FROM_SCALED_DISCOUNT);
			if (b[0] < 0 || b[1] < 0 || b[2] < 0) break;
			let x = e.Y_FROM_LINRGB[0], v = e.Y_FROM_LINRGB[1], w = e.Y_FROM_LINRGB[2], C = x * b[0] + v * b[1] + w * b[2];
			if (C <= 0) break;
			if (4 === n || .002 > Math.abs(C - t)) {
				if (b[0] > 100.01 || b[1] > 100.01 || b[2] > 100.01) return 0;
				return aw(b);
			}
			s -= (C - t) * s / (2 * C);
		}
		return 0;
	}
	static solveToInt(n, a, t) {
		if (a < 1e-4 || t < 1e-4 || t > 99.9999) {
			let e = aS(aP(t));
			return av(e, e, e);
		}
		let s = (n = ag(n)) / 180 * Math.PI, r = aP(t), o = e.findResultByJ(s, a, r);
		return 0 !== o ? o : aw(e.bisectToLimit(r, s));
	}
	static solveToCam(n, a, t) {
		return aA.fromInt(e.solveToInt(n, a, t));
	}
};
aR.SCALED_DISCOUNT_FROM_LINRGB = [
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
], aR.LINRGB_FROM_SCALED_DISCOUNT = [
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
], aR.Y_FROM_LINRGB = [
	.2126,
	.7152,
	.0722
], aR.CRITICAL_PLANES = [
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
var aO = class e {
	static from(n, a, t) {
		return new e(aR.solveToInt(n, a, t));
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
		this.setInternalState(aR.solveToInt(e, this.internalChroma, this.internalTone));
	}
	get chroma() {
		return this.internalChroma;
	}
	set chroma(e) {
		this.setInternalState(aR.solveToInt(this.internalHue, e, this.internalTone));
	}
	get tone() {
		return this.internalTone;
	}
	set tone(e) {
		this.setInternalState(aR.solveToInt(this.internalHue, this.internalChroma, e));
	}
	constructor(e) {
		this.argb = e;
		let n = aA.fromInt(e);
		this.internalHue = n.hue, this.internalChroma = n.chroma, this.internalTone = aC(e), this.argb = e;
	}
	setInternalState(e) {
		let n = aA.fromInt(e);
		this.internalHue = n.hue, this.internalChroma = n.chroma, this.internalTone = aC(e), this.argb = e;
	}
	inViewingConditions(n) {
		let a = aA.fromInt(this.toInt()).xyzInViewingConditions(n), t = aA.fromXyzInViewingConditions(a[0], a[1], a[2], a$.make());
		return e.from(t.hue, t.chroma, a_(a[1]));
	}
}, aD = class e {
	static ratioOfTones(n, a) {
		return n = ak(0, 100, n), a = ak(0, 100, a), e.ratioOfYs(aP(n), aP(a));
	}
	static ratioOfYs(e, n) {
		let a = e > n ? e : n;
		return (a + 5) / ((a === n ? e : n) + 5);
	}
	static lighter(n, a) {
		if (n < 0 || n > 100) return -1;
		let t = aP(n), s = a * (t + 5) - 5, r = e.ratioOfYs(s, t), o = Math.abs(r - a);
		if (r < a && o > .04) return -1;
		let i = a_(s) + .4;
		return i < 0 || i > 100 ? -1 : i;
	}
	static darker(n, a) {
		if (n < 0 || n > 100) return -1;
		let t = aP(n), s = (t + 5) / a - 5, r = e.ratioOfYs(t, s), o = Math.abs(r - a);
		if (r < a && o > .04) return -1;
		let i = a_(s) - .4;
		return i < 0 || i > 100 ? -1 : i;
	}
	static lighterUnsafe(n, a) {
		let t = e.lighter(n, a);
		return t < 0 ? 100 : t;
	}
	static darkerUnsafe(n, a) {
		let t = e.darker(n, a);
		return t < 0 ? 0 : t;
	}
}, aB = class e {
	static isDisliked(e) {
		let n = Math.round(e.hue) >= 90 && 111 >= Math.round(e.hue), a = Math.round(e.chroma) > 16, t = 65 > Math.round(e.tone);
		return n && a && t;
	}
	static fixIfDisliked(n) {
		return e.isDisliked(n) ? aO.from(n.hue, n.chroma, 70) : n;
	}
}, aI = class e {
	static fromPalette(n) {
		return new e(n.name ?? "", n.palette, n.tone, n.isBackground ?? !1, n.background, n.secondBackground, n.contrastCurve, n.toneDeltaPair);
	}
	constructor(e, n, a, t, s, r, o, i) {
		if (this.name = e, this.palette = n, this.tone = a, this.isBackground = t, this.background = s, this.secondBackground = r, this.contrastCurve = o, this.toneDeltaPair = i, this.hctCache = /* @__PURE__ */ new Map(), !s && r) throw Error(`Color ${e} has secondBackgrounddefined, but background is not defined.`);
		if (!s && o) throw Error(`Color ${e} has contrastCurvedefined, but background is not defined.`);
		if (s && !o) throw Error(`Color ${e} has backgrounddefined, but contrastCurve is not defined.`);
	}
	getArgb(e) {
		return this.getHct(e).toInt();
	}
	getHct(e) {
		let n = this.hctCache.get(e);
		if (null != n) return n;
		let a = this.getTone(e), t = this.palette(e).getHct(a);
		return this.hctCache.size > 4 && this.hctCache.clear(), this.hctCache.set(e, t), t;
	}
	getTone(n) {
		let a = n.contrastLevel < 0;
		if (this.toneDeltaPair) {
			let t = this.toneDeltaPair(n), s = t.roleA, r = t.roleB, o = t.delta, i = t.polarity, c = t.stayTogether, l = this.background(n).getTone(n), p = "nearer" === i || "lighter" === i && !n.isDark || "darker" === i && n.isDark, u = p ? s : r, d = p ? r : s, h = this.name === u.name, m = n.isDark ? 1 : -1, k = u.contrastCurve.get(n.contrastLevel), f = d.contrastCurve.get(n.contrastLevel), g = u.tone(n), N = aD.ratioOfTones(l, g) >= k ? g : e.foregroundTone(l, k), y = d.tone(n), b = aD.ratioOfTones(l, y) >= f ? y : e.foregroundTone(l, f);
			return a && (N = e.foregroundTone(l, k), b = e.foregroundTone(l, f)), (b - N) * m >= o || ((b = ak(0, 100, N + o * m)) - N) * m >= o || (N = ak(0, 100, b - o * m)), 50 <= N && N < 60 ? b = m > 0 ? Math.max(b, (N = 60) + o * m) : Math.min(b, (N = 49) + o * m) : 50 <= b && b < 60 && (b = c ? m > 0 ? Math.max(b, (N = 60) + o * m) : Math.min(b, (N = 49) + o * m) : m > 0 ? 60 : 49), h ? N : b;
		}
		{
			let t = this.tone(n);
			if (null == this.background) return t;
			let s = this.background(n).getTone(n), r = this.contrastCurve.get(n.contrastLevel);
			if (aD.ratioOfTones(s, t) >= r || (t = e.foregroundTone(s, r)), a && (t = e.foregroundTone(s, r)), this.isBackground && 50 <= t && t < 60 && (t = aD.ratioOfTones(49, s) >= r ? 49 : 60), this.secondBackground) {
				let [a, s] = [this.background, this.secondBackground], [o, i] = [a(n).getTone(n), s(n).getTone(n)], [c, l] = [Math.max(o, i), Math.min(o, i)];
				if (aD.ratioOfTones(c, t) >= r && aD.ratioOfTones(l, t) >= r) return t;
				let p = aD.lighter(c, r), u = aD.darker(l, r), d = [];
				return (-1 !== p && d.push(p), -1 !== u && d.push(u), e.tonePrefersLightForeground(o) || e.tonePrefersLightForeground(i)) ? p < 0 ? 100 : p : 1 === d.length ? d[0] : u < 0 ? 0 : u;
			}
			return t;
		}
	}
	static foregroundTone(n, a) {
		let t = aD.lighterUnsafe(n, a), s = aD.darkerUnsafe(n, a), r = aD.ratioOfTones(t, n), o = aD.ratioOfTones(s, n);
		if (!e.tonePrefersLightForeground(n)) return o >= a || o >= r ? s : t;
		{
			let e = .1 > Math.abs(r - o) && r < a && o < a;
			return r >= a || r >= o || e ? t : s;
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
}, aF = class e {
	static fromInt(n) {
		let a = aO.fromInt(n);
		return e.fromHct(a);
	}
	static fromHct(n) {
		return new e(n.hue, n.chroma, n);
	}
	static fromHueAndChroma(n, a) {
		return new e(n, a, new aL(n, a).create());
	}
	constructor(e, n, a) {
		this.hue = e, this.chroma = n, this.keyColor = a, this.cache = /* @__PURE__ */ new Map();
	}
	tone(e) {
		let n = this.cache.get(e);
		return void 0 === n && (n = aO.from(this.hue, this.chroma, e).toInt(), this.cache.set(e, n)), n;
	}
	getHct(e) {
		return aO.fromInt(this.tone(e));
	}
}, aL = class {
	constructor(e, n) {
		this.hue = e, this.requestedChroma = n, this.chromaCache = /* @__PURE__ */ new Map(), this.maxChromaValue = 200;
	}
	create() {
		let e = 0, n = 100;
		for (; e < n;) {
			let a = Math.floor((e + n) / 2), t = this.maxChroma(a) < this.maxChroma(a + 1);
			if (this.maxChroma(a) >= this.requestedChroma - .01) if (Math.abs(e - 50) < Math.abs(n - 50)) n = a;
			else {
				if (e === a) return aO.from(this.hue, this.requestedChroma, e);
				e = a;
			}
			else t ? e = a + 1 : n = a;
		}
		return aO.from(this.hue, this.requestedChroma, e);
	}
	maxChroma(e) {
		if (this.chromaCache.has(e)) return this.chromaCache.get(e);
		let n = aO.from(this.hue, this.maxChromaValue, e).chroma;
		return this.chromaCache.set(e, n), n;
	}
}, aH = class {
	constructor(e, n, a, t) {
		this.low = e, this.normal = n, this.medium = a, this.high = t;
	}
	get(e) {
		var n, a, t, s, r, o, i, c, l;
		return e <= -1 ? this.low : e < 0 ? (n = this.low, a = this.normal, (1 - (t = (e - -1) / 1)) * n + t * a) : e < .5 ? (s = this.normal, r = this.medium, (1 - (o = (e - 0) / .5)) * s + o * r) : e < 1 ? (i = this.medium, c = this.high, (1 - (l = (e - .5) / .5)) * i + l * c) : this.high;
	}
}, aV = class {
	constructor(e, n, a, t, s) {
		this.roleA = e, this.roleB = n, this.delta = a, this.polarity = t, this.stayTogether = s;
	}
};
function aj(e) {
	return e.variant === nc.FIDELITY || e.variant === nc.CONTENT;
}
function aE(e) {
	return e.variant === nc.MONOCHROME;
}
(no = nc || (nc = {}))[no.MONOCHROME = 0] = "MONOCHROME", no[no.NEUTRAL = 1] = "NEUTRAL", no[no.TONAL_SPOT = 2] = "TONAL_SPOT", no[no.VIBRANT = 3] = "VIBRANT", no[no.EXPRESSIVE = 4] = "EXPRESSIVE", no[no.FIDELITY = 5] = "FIDELITY", no[no.CONTENT = 6] = "CONTENT", no[no.RAINBOW = 7] = "RAINBOW", no[no.FRUIT_SALAD = 8] = "FRUIT_SALAD";
var az = class e {
	static highestSurface(n) {
		return n.isDark ? e.surfaceBright : e.surfaceDim;
	}
};
az.contentAccentToneDelta = 15, az.primaryPaletteKeyColor = aI.fromPalette({
	name: "primary_palette_key_color",
	palette: (e) => e.primaryPalette,
	tone: (e) => e.primaryPalette.keyColor.tone
}), az.secondaryPaletteKeyColor = aI.fromPalette({
	name: "secondary_palette_key_color",
	palette: (e) => e.secondaryPalette,
	tone: (e) => e.secondaryPalette.keyColor.tone
}), az.tertiaryPaletteKeyColor = aI.fromPalette({
	name: "tertiary_palette_key_color",
	palette: (e) => e.tertiaryPalette,
	tone: (e) => e.tertiaryPalette.keyColor.tone
}), az.neutralPaletteKeyColor = aI.fromPalette({
	name: "neutral_palette_key_color",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.neutralPalette.keyColor.tone
}), az.neutralVariantPaletteKeyColor = aI.fromPalette({
	name: "neutral_variant_palette_key_color",
	palette: (e) => e.neutralVariantPalette,
	tone: (e) => e.neutralVariantPalette.keyColor.tone
}), az.background = aI.fromPalette({
	name: "background",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? 6 : 98,
	isBackground: !0
}), az.onBackground = aI.fromPalette({
	name: "on_background",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? 90 : 10,
	background: (e) => az.background,
	contrastCurve: new aH(3, 3, 4.5, 7)
}), az.surface = aI.fromPalette({
	name: "surface",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? 6 : 98,
	isBackground: !0
}), az.surfaceDim = aI.fromPalette({
	name: "surface_dim",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? 6 : new aH(87, 87, 80, 75).get(e.contrastLevel),
	isBackground: !0
}), az.surfaceBright = aI.fromPalette({
	name: "surface_bright",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? new aH(24, 24, 29, 34).get(e.contrastLevel) : 98,
	isBackground: !0
}), az.surfaceContainerLowest = aI.fromPalette({
	name: "surface_container_lowest",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? new aH(4, 4, 2, 0).get(e.contrastLevel) : 100,
	isBackground: !0
}), az.surfaceContainerLow = aI.fromPalette({
	name: "surface_container_low",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? new aH(10, 10, 11, 12).get(e.contrastLevel) : new aH(96, 96, 96, 95).get(e.contrastLevel),
	isBackground: !0
}), az.surfaceContainer = aI.fromPalette({
	name: "surface_container",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? new aH(12, 12, 16, 20).get(e.contrastLevel) : new aH(94, 94, 92, 90).get(e.contrastLevel),
	isBackground: !0
}), az.surfaceContainerHigh = aI.fromPalette({
	name: "surface_container_high",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? new aH(17, 17, 21, 25).get(e.contrastLevel) : new aH(92, 92, 88, 85).get(e.contrastLevel),
	isBackground: !0
}), az.surfaceContainerHighest = aI.fromPalette({
	name: "surface_container_highest",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? new aH(22, 22, 26, 30).get(e.contrastLevel) : new aH(90, 90, 84, 80).get(e.contrastLevel),
	isBackground: !0
}), az.onSurface = aI.fromPalette({
	name: "on_surface",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? 90 : 10,
	background: (e) => az.highestSurface(e),
	contrastCurve: new aH(4.5, 7, 11, 21)
}), az.surfaceVariant = aI.fromPalette({
	name: "surface_variant",
	palette: (e) => e.neutralVariantPalette,
	tone: (e) => e.isDark ? 30 : 90,
	isBackground: !0
}), az.onSurfaceVariant = aI.fromPalette({
	name: "on_surface_variant",
	palette: (e) => e.neutralVariantPalette,
	tone: (e) => e.isDark ? 80 : 30,
	background: (e) => az.highestSurface(e),
	contrastCurve: new aH(3, 4.5, 7, 11)
}), az.inverseSurface = aI.fromPalette({
	name: "inverse_surface",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? 90 : 20
}), az.inverseOnSurface = aI.fromPalette({
	name: "inverse_on_surface",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? 20 : 95,
	background: (e) => az.inverseSurface,
	contrastCurve: new aH(4.5, 7, 11, 21)
}), az.outline = aI.fromPalette({
	name: "outline",
	palette: (e) => e.neutralVariantPalette,
	tone: (e) => e.isDark ? 60 : 50,
	background: (e) => az.highestSurface(e),
	contrastCurve: new aH(1.5, 3, 4.5, 7)
}), az.outlineVariant = aI.fromPalette({
	name: "outline_variant",
	palette: (e) => e.neutralVariantPalette,
	tone: (e) => e.isDark ? 30 : 80,
	background: (e) => az.highestSurface(e),
	contrastCurve: new aH(1, 1, 3, 4.5)
}), az.shadow = aI.fromPalette({
	name: "shadow",
	palette: (e) => e.neutralPalette,
	tone: (e) => 0
}), az.scrim = aI.fromPalette({
	name: "scrim",
	palette: (e) => e.neutralPalette,
	tone: (e) => 0
}), az.surfaceTint = aI.fromPalette({
	name: "surface_tint",
	palette: (e) => e.primaryPalette,
	tone: (e) => e.isDark ? 80 : 40,
	isBackground: !0
}), az.primary = aI.fromPalette({
	name: "primary",
	palette: (e) => e.primaryPalette,
	tone: (e) => aE(e) ? 100 * !!e.isDark : e.isDark ? 80 : 40,
	isBackground: !0,
	background: (e) => az.highestSurface(e),
	contrastCurve: new aH(3, 4.5, 7, 7),
	toneDeltaPair: (e) => new aV(az.primaryContainer, az.primary, 10, "nearer", !1)
}), az.onPrimary = aI.fromPalette({
	name: "on_primary",
	palette: (e) => e.primaryPalette,
	tone: (e) => aE(e) ? e.isDark ? 10 : 90 : e.isDark ? 20 : 100,
	background: (e) => az.primary,
	contrastCurve: new aH(4.5, 7, 11, 21)
}), az.primaryContainer = aI.fromPalette({
	name: "primary_container",
	palette: (e) => e.primaryPalette,
	tone: (e) => aj(e) ? e.sourceColorHct.tone : aE(e) ? e.isDark ? 85 : 25 : e.isDark ? 30 : 90,
	isBackground: !0,
	background: (e) => az.highestSurface(e),
	contrastCurve: new aH(1, 1, 3, 4.5),
	toneDeltaPair: (e) => new aV(az.primaryContainer, az.primary, 10, "nearer", !1)
}), az.onPrimaryContainer = aI.fromPalette({
	name: "on_primary_container",
	palette: (e) => e.primaryPalette,
	tone: (e) => aj(e) ? aI.foregroundTone(az.primaryContainer.tone(e), 4.5) : aE(e) ? 100 * !e.isDark : e.isDark ? 90 : 30,
	background: (e) => az.primaryContainer,
	contrastCurve: new aH(3, 4.5, 7, 11)
}), az.inversePrimary = aI.fromPalette({
	name: "inverse_primary",
	palette: (e) => e.primaryPalette,
	tone: (e) => e.isDark ? 40 : 80,
	background: (e) => az.inverseSurface,
	contrastCurve: new aH(3, 4.5, 7, 7)
}), az.secondary = aI.fromPalette({
	name: "secondary",
	palette: (e) => e.secondaryPalette,
	tone: (e) => e.isDark ? 80 : 40,
	isBackground: !0,
	background: (e) => az.highestSurface(e),
	contrastCurve: new aH(3, 4.5, 7, 7),
	toneDeltaPair: (e) => new aV(az.secondaryContainer, az.secondary, 10, "nearer", !1)
}), az.onSecondary = aI.fromPalette({
	name: "on_secondary",
	palette: (e) => e.secondaryPalette,
	tone: (e) => aE(e) ? e.isDark ? 10 : 100 : e.isDark ? 20 : 100,
	background: (e) => az.secondary,
	contrastCurve: new aH(4.5, 7, 11, 21)
}), az.secondaryContainer = aI.fromPalette({
	name: "secondary_container",
	palette: (e) => e.secondaryPalette,
	tone: (e) => {
		let n = e.isDark ? 30 : 90;
		return aE(e) ? e.isDark ? 30 : 85 : aj(e) ? function(e, n, a, t) {
			let s = a, r = aO.from(e, n, a);
			if (r.chroma < n) {
				let a = r.chroma;
				for (; r.chroma < n;) {
					s += t ? -1 : 1;
					let o = aO.from(e, n, s);
					if (a > o.chroma || .4 > Math.abs(o.chroma - n)) break;
					Math.abs(o.chroma - n) < Math.abs(r.chroma - n) && (r = o), a = Math.max(a, o.chroma);
				}
			}
			return s;
		}(e.secondaryPalette.hue, e.secondaryPalette.chroma, n, !e.isDark) : n;
	},
	isBackground: !0,
	background: (e) => az.highestSurface(e),
	contrastCurve: new aH(1, 1, 3, 4.5),
	toneDeltaPair: (e) => new aV(az.secondaryContainer, az.secondary, 10, "nearer", !1)
}), az.onSecondaryContainer = aI.fromPalette({
	name: "on_secondary_container",
	palette: (e) => e.secondaryPalette,
	tone: (e) => aE(e) ? e.isDark ? 90 : 10 : aj(e) ? aI.foregroundTone(az.secondaryContainer.tone(e), 4.5) : e.isDark ? 90 : 30,
	background: (e) => az.secondaryContainer,
	contrastCurve: new aH(3, 4.5, 7, 11)
}), az.tertiary = aI.fromPalette({
	name: "tertiary",
	palette: (e) => e.tertiaryPalette,
	tone: (e) => aE(e) ? e.isDark ? 90 : 25 : e.isDark ? 80 : 40,
	isBackground: !0,
	background: (e) => az.highestSurface(e),
	contrastCurve: new aH(3, 4.5, 7, 7),
	toneDeltaPair: (e) => new aV(az.tertiaryContainer, az.tertiary, 10, "nearer", !1)
}), az.onTertiary = aI.fromPalette({
	name: "on_tertiary",
	palette: (e) => e.tertiaryPalette,
	tone: (e) => aE(e) ? e.isDark ? 10 : 90 : e.isDark ? 20 : 100,
	background: (e) => az.tertiary,
	contrastCurve: new aH(4.5, 7, 11, 21)
}), az.tertiaryContainer = aI.fromPalette({
	name: "tertiary_container",
	palette: (e) => e.tertiaryPalette,
	tone: (e) => {
		if (aE(e)) return e.isDark ? 60 : 49;
		if (!aj(e)) return e.isDark ? 30 : 90;
		let n = e.tertiaryPalette.getHct(e.sourceColorHct.tone);
		return aB.fixIfDisliked(n).tone;
	},
	isBackground: !0,
	background: (e) => az.highestSurface(e),
	contrastCurve: new aH(1, 1, 3, 4.5),
	toneDeltaPair: (e) => new aV(az.tertiaryContainer, az.tertiary, 10, "nearer", !1)
}), az.onTertiaryContainer = aI.fromPalette({
	name: "on_tertiary_container",
	palette: (e) => e.tertiaryPalette,
	tone: (e) => aE(e) ? 100 * !e.isDark : aj(e) ? aI.foregroundTone(az.tertiaryContainer.tone(e), 4.5) : e.isDark ? 90 : 30,
	background: (e) => az.tertiaryContainer,
	contrastCurve: new aH(3, 4.5, 7, 11)
}), az.error = aI.fromPalette({
	name: "error",
	palette: (e) => e.errorPalette,
	tone: (e) => e.isDark ? 80 : 40,
	isBackground: !0,
	background: (e) => az.highestSurface(e),
	contrastCurve: new aH(3, 4.5, 7, 7),
	toneDeltaPair: (e) => new aV(az.errorContainer, az.error, 10, "nearer", !1)
}), az.onError = aI.fromPalette({
	name: "on_error",
	palette: (e) => e.errorPalette,
	tone: (e) => e.isDark ? 20 : 100,
	background: (e) => az.error,
	contrastCurve: new aH(4.5, 7, 11, 21)
}), az.errorContainer = aI.fromPalette({
	name: "error_container",
	palette: (e) => e.errorPalette,
	tone: (e) => e.isDark ? 30 : 90,
	isBackground: !0,
	background: (e) => az.highestSurface(e),
	contrastCurve: new aH(1, 1, 3, 4.5),
	toneDeltaPair: (e) => new aV(az.errorContainer, az.error, 10, "nearer", !1)
}), az.onErrorContainer = aI.fromPalette({
	name: "on_error_container",
	palette: (e) => e.errorPalette,
	tone: (e) => aE(e) ? e.isDark ? 90 : 10 : e.isDark ? 90 : 30,
	background: (e) => az.errorContainer,
	contrastCurve: new aH(3, 4.5, 7, 11)
}), az.primaryFixed = aI.fromPalette({
	name: "primary_fixed",
	palette: (e) => e.primaryPalette,
	tone: (e) => aE(e) ? 40 : 90,
	isBackground: !0,
	background: (e) => az.highestSurface(e),
	contrastCurve: new aH(1, 1, 3, 4.5),
	toneDeltaPair: (e) => new aV(az.primaryFixed, az.primaryFixedDim, 10, "lighter", !0)
}), az.primaryFixedDim = aI.fromPalette({
	name: "primary_fixed_dim",
	palette: (e) => e.primaryPalette,
	tone: (e) => aE(e) ? 30 : 80,
	isBackground: !0,
	background: (e) => az.highestSurface(e),
	contrastCurve: new aH(1, 1, 3, 4.5),
	toneDeltaPair: (e) => new aV(az.primaryFixed, az.primaryFixedDim, 10, "lighter", !0)
}), az.onPrimaryFixed = aI.fromPalette({
	name: "on_primary_fixed",
	palette: (e) => e.primaryPalette,
	tone: (e) => aE(e) ? 100 : 10,
	background: (e) => az.primaryFixedDim,
	secondBackground: (e) => az.primaryFixed,
	contrastCurve: new aH(4.5, 7, 11, 21)
}), az.onPrimaryFixedVariant = aI.fromPalette({
	name: "on_primary_fixed_variant",
	palette: (e) => e.primaryPalette,
	tone: (e) => aE(e) ? 90 : 30,
	background: (e) => az.primaryFixedDim,
	secondBackground: (e) => az.primaryFixed,
	contrastCurve: new aH(3, 4.5, 7, 11)
}), az.secondaryFixed = aI.fromPalette({
	name: "secondary_fixed",
	palette: (e) => e.secondaryPalette,
	tone: (e) => aE(e) ? 80 : 90,
	isBackground: !0,
	background: (e) => az.highestSurface(e),
	contrastCurve: new aH(1, 1, 3, 4.5),
	toneDeltaPair: (e) => new aV(az.secondaryFixed, az.secondaryFixedDim, 10, "lighter", !0)
}), az.secondaryFixedDim = aI.fromPalette({
	name: "secondary_fixed_dim",
	palette: (e) => e.secondaryPalette,
	tone: (e) => aE(e) ? 70 : 80,
	isBackground: !0,
	background: (e) => az.highestSurface(e),
	contrastCurve: new aH(1, 1, 3, 4.5),
	toneDeltaPair: (e) => new aV(az.secondaryFixed, az.secondaryFixedDim, 10, "lighter", !0)
}), az.onSecondaryFixed = aI.fromPalette({
	name: "on_secondary_fixed",
	palette: (e) => e.secondaryPalette,
	tone: (e) => 10,
	background: (e) => az.secondaryFixedDim,
	secondBackground: (e) => az.secondaryFixed,
	contrastCurve: new aH(4.5, 7, 11, 21)
}), az.onSecondaryFixedVariant = aI.fromPalette({
	name: "on_secondary_fixed_variant",
	palette: (e) => e.secondaryPalette,
	tone: (e) => aE(e) ? 25 : 30,
	background: (e) => az.secondaryFixedDim,
	secondBackground: (e) => az.secondaryFixed,
	contrastCurve: new aH(3, 4.5, 7, 11)
}), az.tertiaryFixed = aI.fromPalette({
	name: "tertiary_fixed",
	palette: (e) => e.tertiaryPalette,
	tone: (e) => aE(e) ? 40 : 90,
	isBackground: !0,
	background: (e) => az.highestSurface(e),
	contrastCurve: new aH(1, 1, 3, 4.5),
	toneDeltaPair: (e) => new aV(az.tertiaryFixed, az.tertiaryFixedDim, 10, "lighter", !0)
}), az.tertiaryFixedDim = aI.fromPalette({
	name: "tertiary_fixed_dim",
	palette: (e) => e.tertiaryPalette,
	tone: (e) => aE(e) ? 30 : 80,
	isBackground: !0,
	background: (e) => az.highestSurface(e),
	contrastCurve: new aH(1, 1, 3, 4.5),
	toneDeltaPair: (e) => new aV(az.tertiaryFixed, az.tertiaryFixedDim, 10, "lighter", !0)
}), az.onTertiaryFixed = aI.fromPalette({
	name: "on_tertiary_fixed",
	palette: (e) => e.tertiaryPalette,
	tone: (e) => aE(e) ? 100 : 10,
	background: (e) => az.tertiaryFixedDim,
	secondBackground: (e) => az.tertiaryFixed,
	contrastCurve: new aH(4.5, 7, 11, 21)
}), az.onTertiaryFixedVariant = aI.fromPalette({
	name: "on_tertiary_fixed_variant",
	palette: (e) => e.tertiaryPalette,
	tone: (e) => aE(e) ? 90 : 30,
	background: (e) => az.tertiaryFixedDim,
	secondBackground: (e) => az.tertiaryFixed,
	contrastCurve: new aH(3, 4.5, 7, 11)
});
var aW = class {
	constructor(e) {
		this.sourceColorArgb = e.sourceColorArgb, this.variant = e.variant, this.contrastLevel = e.contrastLevel, this.isDark = e.isDark, this.sourceColorHct = aO.fromInt(e.sourceColorArgb), this.primaryPalette = e.primaryPalette, this.secondaryPalette = e.secondaryPalette, this.tertiaryPalette = e.tertiaryPalette, this.neutralPalette = e.neutralPalette, this.neutralVariantPalette = e.neutralVariantPalette, this.errorPalette = aF.fromHueAndChroma(25, 84);
	}
	static getRotatedHue(e, n, a) {
		let t = e.hue;
		if (n.length !== a.length) throw Error(`mismatch between hue length ${n.length} & rotations ${a.length}`);
		if (1 === a.length) return ag(e.hue + a[0]);
		let s = n.length;
		for (let e = 0; e <= s - 2; e++) {
			let s = n[e], r = n[e + 1];
			if (s < t && t < r) return ag(t + a[e]);
		}
		return t;
	}
	getArgb(e) {
		return e.getArgb(this);
	}
	getHct(e) {
		return e.getHct(this);
	}
	get primaryPaletteKeyColor() {
		return this.getArgb(az.primaryPaletteKeyColor);
	}
	get secondaryPaletteKeyColor() {
		return this.getArgb(az.secondaryPaletteKeyColor);
	}
	get tertiaryPaletteKeyColor() {
		return this.getArgb(az.tertiaryPaletteKeyColor);
	}
	get neutralPaletteKeyColor() {
		return this.getArgb(az.neutralPaletteKeyColor);
	}
	get neutralVariantPaletteKeyColor() {
		return this.getArgb(az.neutralVariantPaletteKeyColor);
	}
	get background() {
		return this.getArgb(az.background);
	}
	get onBackground() {
		return this.getArgb(az.onBackground);
	}
	get surface() {
		return this.getArgb(az.surface);
	}
	get surfaceDim() {
		return this.getArgb(az.surfaceDim);
	}
	get surfaceBright() {
		return this.getArgb(az.surfaceBright);
	}
	get surfaceContainerLowest() {
		return this.getArgb(az.surfaceContainerLowest);
	}
	get surfaceContainerLow() {
		return this.getArgb(az.surfaceContainerLow);
	}
	get surfaceContainer() {
		return this.getArgb(az.surfaceContainer);
	}
	get surfaceContainerHigh() {
		return this.getArgb(az.surfaceContainerHigh);
	}
	get surfaceContainerHighest() {
		return this.getArgb(az.surfaceContainerHighest);
	}
	get onSurface() {
		return this.getArgb(az.onSurface);
	}
	get surfaceVariant() {
		return this.getArgb(az.surfaceVariant);
	}
	get onSurfaceVariant() {
		return this.getArgb(az.onSurfaceVariant);
	}
	get inverseSurface() {
		return this.getArgb(az.inverseSurface);
	}
	get inverseOnSurface() {
		return this.getArgb(az.inverseOnSurface);
	}
	get outline() {
		return this.getArgb(az.outline);
	}
	get outlineVariant() {
		return this.getArgb(az.outlineVariant);
	}
	get shadow() {
		return this.getArgb(az.shadow);
	}
	get scrim() {
		return this.getArgb(az.scrim);
	}
	get surfaceTint() {
		return this.getArgb(az.surfaceTint);
	}
	get primary() {
		return this.getArgb(az.primary);
	}
	get onPrimary() {
		return this.getArgb(az.onPrimary);
	}
	get primaryContainer() {
		return this.getArgb(az.primaryContainer);
	}
	get onPrimaryContainer() {
		return this.getArgb(az.onPrimaryContainer);
	}
	get inversePrimary() {
		return this.getArgb(az.inversePrimary);
	}
	get secondary() {
		return this.getArgb(az.secondary);
	}
	get onSecondary() {
		return this.getArgb(az.onSecondary);
	}
	get secondaryContainer() {
		return this.getArgb(az.secondaryContainer);
	}
	get onSecondaryContainer() {
		return this.getArgb(az.onSecondaryContainer);
	}
	get tertiary() {
		return this.getArgb(az.tertiary);
	}
	get onTertiary() {
		return this.getArgb(az.onTertiary);
	}
	get tertiaryContainer() {
		return this.getArgb(az.tertiaryContainer);
	}
	get onTertiaryContainer() {
		return this.getArgb(az.onTertiaryContainer);
	}
	get error() {
		return this.getArgb(az.error);
	}
	get onError() {
		return this.getArgb(az.onError);
	}
	get errorContainer() {
		return this.getArgb(az.errorContainer);
	}
	get onErrorContainer() {
		return this.getArgb(az.onErrorContainer);
	}
	get primaryFixed() {
		return this.getArgb(az.primaryFixed);
	}
	get primaryFixedDim() {
		return this.getArgb(az.primaryFixedDim);
	}
	get onPrimaryFixed() {
		return this.getArgb(az.onPrimaryFixed);
	}
	get onPrimaryFixedVariant() {
		return this.getArgb(az.onPrimaryFixedVariant);
	}
	get secondaryFixed() {
		return this.getArgb(az.secondaryFixed);
	}
	get secondaryFixedDim() {
		return this.getArgb(az.secondaryFixedDim);
	}
	get onSecondaryFixed() {
		return this.getArgb(az.onSecondaryFixed);
	}
	get onSecondaryFixedVariant() {
		return this.getArgb(az.onSecondaryFixedVariant);
	}
	get tertiaryFixed() {
		return this.getArgb(az.tertiaryFixed);
	}
	get tertiaryFixedDim() {
		return this.getArgb(az.tertiaryFixedDim);
	}
	get onTertiaryFixed() {
		return this.getArgb(az.onTertiaryFixed);
	}
	get onTertiaryFixedVariant() {
		return this.getArgb(az.onTertiaryFixedVariant);
	}
}, aU = class e {
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
	static createPaletteFromColors(n, a) {
		let t = new e(a.primary, n);
		return a.secondary && (t.a2 = new e(a.secondary, n).a1), a.tertiary && (t.a3 = new e(a.tertiary, n).a1), a.error && (t.error = new e(a.error, n).a1), a.neutral && (t.n1 = new e(a.neutral, n).n1), a.neutralVariant && (t.n2 = new e(a.neutralVariant, n).n2), t;
	}
	constructor(e, n) {
		let a = aO.fromInt(e), t = a.hue, s = a.chroma;
		n ? (this.a1 = aF.fromHueAndChroma(t, s), this.a2 = aF.fromHueAndChroma(t, s / 3), this.a3 = aF.fromHueAndChroma(t + 60, s / 2), this.n1 = aF.fromHueAndChroma(t, Math.min(s / 12, 4)), this.n2 = aF.fromHueAndChroma(t, Math.min(s / 6, 8))) : (this.a1 = aF.fromHueAndChroma(t, Math.max(48, s)), this.a2 = aF.fromHueAndChroma(t, 16), this.a3 = aF.fromHueAndChroma(t + 60, 24), this.n1 = aF.fromHueAndChroma(t, 4), this.n2 = aF.fromHueAndChroma(t, 8)), this.error = aF.fromHueAndChroma(25, 84);
	}
}, aq = class e extends aW {
	constructor(n, a, t) {
		super({
			sourceColorArgb: n.toInt(),
			variant: nc.EXPRESSIVE,
			contrastLevel: t,
			isDark: a,
			primaryPalette: aF.fromHueAndChroma(ag(n.hue + 240), 40),
			secondaryPalette: aF.fromHueAndChroma(aW.getRotatedHue(n, e.hues, e.secondaryRotations), 24),
			tertiaryPalette: aF.fromHueAndChroma(aW.getRotatedHue(n, e.hues, e.tertiaryRotations), 32),
			neutralPalette: aF.fromHueAndChroma(n.hue + 15, 8),
			neutralVariantPalette: aF.fromHueAndChroma(n.hue + 15, 12)
		});
	}
};
aq.hues = [
	0,
	21,
	51,
	121,
	151,
	191,
	271,
	321,
	360
], aq.secondaryRotations = [
	45,
	95,
	45,
	20,
	45,
	90,
	45,
	45,
	45
], aq.tertiaryRotations = [
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
var aG = class e extends aW {
	constructor(n, a, t) {
		super({
			sourceColorArgb: n.toInt(),
			variant: nc.VIBRANT,
			contrastLevel: t,
			isDark: a,
			primaryPalette: aF.fromHueAndChroma(n.hue, 200),
			secondaryPalette: aF.fromHueAndChroma(aW.getRotatedHue(n, e.hues, e.secondaryRotations), 24),
			tertiaryPalette: aF.fromHueAndChroma(aW.getRotatedHue(n, e.hues, e.tertiaryRotations), 32),
			neutralPalette: aF.fromHueAndChroma(n.hue, 10),
			neutralVariantPalette: aF.fromHueAndChroma(n.hue, 12)
		});
	}
};
aG.hues = [
	0,
	41,
	61,
	101,
	131,
	181,
	251,
	301,
	360
], aG.secondaryRotations = [
	18,
	15,
	10,
	12,
	15,
	18,
	15,
	12,
	12
], aG.tertiaryRotations = [
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
var aY = {
	desired: 4,
	fallbackColorARGB: 4282549748,
	filter: !0
};
function aK(e, n) {
	return e.score > n.score ? -1 : +(e.score < n.score);
}
var aX = class e {
	constructor() {}
	static score(n, a) {
		let { desired: t, fallbackColorARGB: s, filter: r } = {
			...aY,
			...a
		}, o = [], i = Array(360).fill(0), c = 0;
		for (let [e, a] of n.entries()) {
			let n = aO.fromInt(e);
			o.push(n);
			let t = Math.floor(n.hue);
			i[t] += a, c += a;
		}
		let l = Array(360).fill(0);
		for (let e = 0; e < 360; e++) {
			let n = i[e] / c;
			for (let a = e - 14; a < e + 16; a++) {
				let e = af(a);
				l[e] += n;
			}
		}
		let p = [];
		for (let n of o) {
			let a = l[af(Math.round(n.hue))];
			if (r && (n.chroma < e.CUTOFF_CHROMA || a <= e.CUTOFF_EXCITED_PROPORTION)) continue;
			let t = 100 * a * e.WEIGHT_PROPORTION, s = n.chroma < e.TARGET_CHROMA ? e.WEIGHT_CHROMA_BELOW : e.WEIGHT_CHROMA_ABOVE, o = t + (n.chroma - e.TARGET_CHROMA) * s;
			p.push({
				hct: n,
				score: o
			});
		}
		p.sort(aK);
		let u = [];
		for (let e = 90; e >= 15; e--) {
			for (let { hct: n } of (u.length = 0, p)) if (u.find((a) => 180 - Math.abs(Math.abs(n.hue - a.hue) - 180) < e) || u.push(n), u.length >= t) break;
			if (u.length >= t) break;
		}
		let d = [];
		for (let e of (0 === u.length && d.push(s), u)) d.push(e.toInt());
		return d;
	}
};
function aJ(e) {
	let n = 3 === (e = e.replace("#", "")).length, a = 6 === e.length, t = 8 === e.length;
	if (!n && !a && !t) throw Error("unexpected hex " + e);
	let s = 0, r = 0, o = 0;
	return n ? (s = aZ(e.slice(0, 1).repeat(2)), r = aZ(e.slice(1, 2).repeat(2)), o = aZ(e.slice(2, 3).repeat(2))) : a ? (s = aZ(e.slice(0, 2)), r = aZ(e.slice(2, 4)), o = aZ(e.slice(4, 6))) : t && (s = aZ(e.slice(2, 4)), r = aZ(e.slice(4, 6)), o = aZ(e.slice(6, 8))), (-16777216 | (255 & s) << 16 | (255 & r) << 8 | 255 & o) >>> 0;
}
function aZ(e) {
	return parseInt(e, 16);
}
aX.TARGET_CHROMA = 48, aX.WEIGHT_PROPORTION = .7, aX.WEIGHT_CHROMA_ABOVE = .3, aX.WEIGHT_CHROMA_BELOW = .1, aX.CUTOFF_CHROMA = 5, aX.CUTOFF_EXCITED_PROPORTION = .01;
var aQ = {
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
}, a0 = (e) => {
	var n;
	let a = {
		r: (n = e) >> 16 & 255,
		g: n >> 8 & 255,
		b: 255 & n,
		a: n >> 24 & 255
	};
	return [
		a.r,
		a.g,
		a.b
	];
}, a1 = (e) => ({
	primary: !0,
	secondary: !0,
	tertiary: !0,
	error: !0,
	warning: !0,
	success: !0
})[e], a2 = class e {
	static toHEX = (e) => `#${a0(e).map((e) => t(e.toString(16), 2, "0")).join("")}`;
	static createRoleColorRuleBuilder(e) {
		let n = {}, a = new Proxy({}, { get: (t, s) => "build" == s ? () => n : (t, s) => (n[`${t}${e ? `:${e}` : ""}`] = s, a) });
		return a;
	}
	static createRoleColorSourcePicker() {
		return new Proxy({}, { get: (e, n) => (e) => [n, e] });
	}
	static fromColors = (n) => {
		let { primary: a, secondary: t, tertiary: s, neutral: r, neutralVariant: o, error: i,...c } = n, l = aU.contentFromColors({
			primary: aJ(a),
			secondary: t ? aJ(t) : void 0,
			tertiary: s ? aJ(s) : void 0,
			error: i ? aJ(i) : void 0
		});
		return r && (l.n1 = aF.fromHueAndChroma(aJ(r), 4)), o && (l.n2 = aF.fromHueAndChroma(aJ(o), 8)), new e({
			primary: l.a1,
			secondary: l.a2,
			tertiary: l.a3,
			neutral: l.n1,
			neutralVariant: l.n2,
			error: l.error,
			...g(c, (e) => aF.fromInt(aJ(e)))
		});
	};
	constructor(e) {
		this.seeds = e;
	}
	normalizeRoleRules(n = {}) {
		let a = e.createRoleColorSourcePicker(), t = e.createRoleColorRuleBuilder().rule("shadow", a.neutral(0)).rule("scrim", a.neutral(0)).rule("outline", a.neutralVariant(87)).rule("outline-variant", a.neutralVariant(80)).rule("surface", a.neutral(99)).rule("on-surface", a.neutral(10)).rule("surface-variant", a.neutralVariant(90)).rule("on-surface-variant", a.neutralVariant(30)).rule("surface-dim", a.neutral(87)).rule("surface-bright", a.neutral(98)).rule("surface-container-lowest", a.neutral(100)).rule("surface-container-low", a.neutral(96)).rule("surface-container", a.neutral(94)).rule("surface-container-high", a.neutral(92)).rule("surface-container-highest", a.neutral(90)).rule("inverse-surface", a.neutral(20)).rule("inverse-on-surface", a.neutral(95)).rule("inverse-primary", a.primary(80)), s = e.createRoleColorRuleBuilder("dark").rule("shadow", a.neutral(0)).rule("scrim", a.neutral(0)).rule("outline", a.neutralVariant(60)).rule("outline-variant", a.neutralVariant(30)).rule("surface", a.neutral(10)).rule("on-surface", a.neutral(90)).rule("surface-variant", a.neutralVariant(30)).rule("on-surface-variant", a.neutralVariant(80)).rule("surface-dim", a.neutral(6)).rule("surface-bright", a.neutral(24)).rule("surface-container-lowest", a.neutral(4)).rule("surface-container-low", a.neutral(10)).rule("surface-container", a.neutral(12)).rule("surface-container-high", a.neutral(17)).rule("surface-container-highest", a.neutral(22)).rule("inverse-surface", a.neutral(90)).rule("inverse-on-surface", a.neutral(20)).rule("inverse-primary", a.primary(40));
		for (let e in this.seeds) e.startsWith("neutral") || (t = t.rule(e, a[e](40)).rule(`on-${e}`, a[e](100)).rule(`${e}-container`, a[e](90)).rule(`on-${e}-container`, a[e](10)), s = s.rule(e, a[e](80)).rule(`on-${e}`, a[e](20)).rule(`${e}-container`, a[e](30)).rule(`on-${e}-container`, a[e](90)));
		return {
			...t.build(),
			...s.build(),
			...n
		};
	}
	getThemeRoleColors(e) {
		let n = {}, a = {};
		for (let [t, [s, r]] of Object.entries(e)) if (this.seeds[s]) {
			if (t.endsWith(":dark")) {
				a[t.split(":")[0]] = aQ[r] ? `${String(s)}.${r}` : this.seeds[s]?.tone(r);
				continue;
			}
			n[t] = aQ[r] ? `${String(s)}.${r}` : this.seeds[s]?.tone(r);
		}
		return [n, a];
	}
	toDesignTokens(e = {}) {
		let n = this.normalizeRoleRules(e), [a, t] = this.getThemeRoleColors(n), s = {}, r = {};
		for (let e in a) if (s[`${e}`] = {
			_default: R(a[e]) ? a0(a[e]) : a[e],
			_dark: R(t[e]) ? a0(t[e]) : t[e]
		}, a1(e) && (r[`${e}`] = n7.mixin({
			bgColor: `sys.${e}`,
			color: `sys.on-${e}`
		}), r[`${e}-container`] = n7.mixin({
			bgColor: `sys.${e}-container`,
			color: `sys.on-${e}-container`
		})), e.startsWith("surface")) {
			if (e.includes("container")) {
				r[`${e}`] = n7.mixin({
					bgColor: `sys.${e}`,
					color: "sys.on-surface"
				});
				continue;
			}
			r[`${e}`] = n7.mixin({
				bgColor: `sys.${e}`,
				color: "sys.on-surface"
			}), r[`on-${e}`] = n7.mixin({
				bgColor: `sys.on-${e}`,
				color: "sys.inverse-on-surface"
			});
		}
		return {
			color: n7.color({
				...g(this.seeds, (e) => Object.keys(aQ).reduce((n, a) => Object.assign(n, { [a]: a0(e.tone(parseInt(a))) }), {})),
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
				sys: s
			}),
			containerStyle: n7.customMixin("containerStyle", { sys: r })
		};
	}
};
let a4 = n7.rounded({
	xs: 4,
	sm: 8,
	md: 12,
	lg: 16,
	xl: 28
}), a5 = {
	font: n7.font({
		brand: "-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"",
		plain: "-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"",
		code: "'Lucida Console',Consolas,Monaco,'Andale Mono','Ubuntu Mono',monospace"
	}),
	fontWeight: n7.fontWeight({
		regular: 400,
		medium: 500,
		bold: 700
	}),
	textStyle: n7.customMixin("textStyle", { sys: {
		"display-large": n7.mixin({
			lineHeight: 64,
			fontSize: 57,
			letterSpacing: -.25,
			fontWeight: "regular",
			font: "brand"
		}),
		"display-medium": n7.mixin({
			lineHeight: 52,
			fontSize: 45,
			letterSpacing: 0,
			fontWeight: "regular",
			font: "brand"
		}),
		"display-small": n7.mixin({
			lineHeight: 44,
			fontSize: 36,
			letterSpacing: 0,
			fontWeight: "regular",
			font: "brand"
		}),
		"headline-large": n7.mixin({
			lineHeight: 40,
			fontSize: 32,
			letterSpacing: 0,
			fontWeight: "regular",
			font: "brand"
		}),
		"headline-medium": n7.mixin({
			lineHeight: 36,
			fontSize: 28,
			letterSpacing: 0,
			fontWeight: "regular",
			font: "brand"
		}),
		"headline-small": n7.mixin({
			lineHeight: 32,
			fontSize: 24,
			letterSpacing: 0,
			fontWeight: "regular",
			font: "plain"
		}),
		"title-large": n7.mixin({
			lineHeight: 28,
			fontSize: 22,
			letterSpacing: 0,
			fontWeight: "regular",
			font: "brand"
		}),
		"title-medium": n7.mixin({
			lineHeight: 24,
			fontSize: 16,
			letterSpacing: .15,
			fontWeight: "medium",
			font: "plain"
		}),
		"title-small": n7.mixin({
			lineHeight: 20,
			fontSize: 14,
			letterSpacing: .1,
			fontWeight: "medium",
			font: "plain"
		}),
		"label-large": n7.mixin({
			lineHeight: 20,
			fontSize: 14,
			letterSpacing: .1,
			fontWeight: "medium",
			font: "plain"
		}),
		"label-medium": n7.mixin({
			lineHeight: 16,
			fontSize: 12,
			letterSpacing: .5,
			fontWeight: "medium",
			font: "plain"
		}),
		"label-small": n7.mixin({
			lineHeight: 16,
			fontSize: 11,
			letterSpacing: .5,
			fontWeight: "medium",
			font: "plain"
		}),
		"body-large": n7.mixin({
			lineHeight: 24,
			fontSize: 16,
			letterSpacing: .5,
			fontWeight: "regular",
			font: "plain"
		}),
		"body-medium": n7.mixin({
			lineHeight: 20,
			fontSize: 14,
			letterSpacing: .25,
			fontWeight: "regular",
			font: "plain"
		}),
		"body-small": n7.mixin({
			lineHeight: 16,
			fontSize: 12,
			letterSpacing: .4,
			fontWeight: "regular",
			font: "plain"
		})
	} })
};
var a3 = a2.fromColors({
	primary: "#1270f5",
	secondary: "#8a90a5",
	tertiary: "#b58391",
	neutral: "#5e5e5e",
	error: "#d93f23",
	warning: "#e69c00",
	success: "#5ac220"
});
let a8 = {
	...a5,
	...ah,
	...al,
	rounded: a4,
	...a3.toDesignTokens({})
}, a6 = ac.create(a8, { varPrefix: "vk" }), a9 = $(() => a6, { name: "Theme" });
var a7 = function(e, n, a) {
	for (var t = 0, s = 0; t = s, s = K(), 38 === t && 12 === s && (n[a] = 1), !en(s);) ec();
	return es(e, X);
}, te = function(e, n) {
	var a = -1, t = 44;
	do
		switch (en(t)) {
			case 0:
				38 === t && 12 === K() && (n[a] = 1), e[a] += a7(X - 1, n, a);
				break;
			case 2:
				e[a] += ee(t);
				break;
			case 4: if (44 === t) {
				e[++a] = 58 === K() ? "&\f" : "", n[a] = e[a].length;
				break;
			}
			default: e[a] += U(t);
		}
	while (t = ec());
	return e;
}, tn = /* @__PURE__ */ new WeakMap(), ta = function(e) {
	if ("rule" === e.type && e.parent && !(e.length < 1)) {
		for (var n = e.value, a = e.parent, t = e.column === a.column && e.line === a.line; "rule" !== a.type;) if (!(a = a.parent)) return;
		if ((1 !== e.props.length || 58 === n.charCodeAt(0) || tn.get(a)) && !t) {
			tn.set(e, !0);
			for (var s = [], r = Y(te(et(n), s)), o = a.props, i = 0, c = 0; i < r.length; i++) for (var l = 0; l < o.length; l++, c++) e.props[c] = s[i] ? r[i].replace(/&\f/g, o[l]) : o[l] + " " + r[i];
		}
	}
}, tt = function(e) {
	if ("decl" === e.type) {
		var n = e.value;
		108 === n.charCodeAt(0) && 98 === n.charCodeAt(2) && (e.return = "", e.value = "");
	}
}, ts = [function(e, n, a, t) {
	if (e.length > -1 && !e.return) switch (e.type) {
		case H:
			e.return = function e(n, a) {
				switch (el(n, a)) {
					case 5103: return E + "print-" + n + n;
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
					case 3829: return E + n + n;
					case 5349:
					case 4246:
					case 4810:
					case 6968:
					case 2756: return E + n + W + n + j + n + n;
					case 6828:
					case 4268: return E + n + j + n + n;
					case 6165: return E + n + j + "flex-" + n + n;
					case 5187: return E + n + eu(n, /(\w+).+(:[^]+)/, E + "box-$1$2" + j + "flex-$1$2") + n;
					case 5443: return E + n + j + "flex-item-" + eu(n, /flex-|-self/, "") + n;
					case 4675: return E + n + j + "flex-line-pack" + eu(n, /align-content|flex-|-self/, "") + n;
					case 5548: return E + n + j + eu(n, "shrink", "negative") + n;
					case 5292: return E + n + j + eu(n, "basis", "preferred-size") + n;
					case 6060: return E + "box-" + eu(n, "-grow", "") + E + n + j + eu(n, "grow", "positive") + n;
					case 4554: return E + eu(n, /([^-])(transform)/g, "$1" + E + "$2") + n;
					case 6187: return eu(eu(eu(n, /(zoom-|grab)/, E + "$1"), /(image-set)/, E + "$1"), n, "") + n;
					case 5495:
					case 3959: return eu(n, /(image-set\([^]*)/, E + "$1$`$1");
					case 4968: return eu(eu(n, /(.+:)(flex-)?(.*)/, E + "box-pack:$3" + j + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + E + n + n;
					case 4095:
					case 3583:
					case 4068:
					case 2532: return eu(n, /(.+)-inline(.+)/, E + "$1$2") + n;
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
						if (z(n) - 1 - a > 6) switch (Z(n, a + 1)) {
							case 109: if (45 !== Z(n, a + 4)) break;
							case 102: return eu(n, /(.+:)(.+)-([^]+)/, "$1" + E + "$2-$3$1" + W + (108 == Z(n, a + 3) ? "$3" : "$2-$3")) + n;
							case 115: return ~ed(n, "stretch") ? e(eu(n, "stretch", "fill-available"), a) + n : n;
						}
						break;
					case 4949: if (115 !== Z(n, a + 1)) break;
					case 6444:
						switch (Z(n, z(n) - 3 - (~ed(n, "!important") && 10))) {
							case 107: return eu(n, ":", ":" + E) + n;
							case 101: return eu(n, /(.+:)([^;!]+)(;|!.+)?/, "$1" + E + (45 === Z(n, 14) ? "inline-" : "") + "box$3$1" + E + "$2$3$1" + j + "$2box$3") + n;
						}
						break;
					case 5936:
						switch (Z(n, a + 11)) {
							case 114: return E + n + j + eu(n, /[svh]\w+-[tblr]{2}/, "tb") + n;
							case 108: return E + n + j + eu(n, /[svh]\w+-[tblr]{2}/, "tb-rl") + n;
							case 45: return E + n + j + eu(n, /[svh]\w+-[tblr]{2}/, "lr") + n;
						}
						return E + n + j + n + n;
				}
				return n;
			}(e.value, e.length);
			break;
		case ep: return er([eo(e, { value: eu(e.value, "@", "@" + E) })], t);
		case V: if (e.length) return J(e.props, function(n) {
			switch (G(n, /(::plac\w+|:read-\w+)/)) {
				case ":read-only":
				case ":read-write": return er([eo(e, { props: [eu(n, /:(read-\w+)/, ":" + W + "$1")] })], t);
				case "::placeholder": return er([
					eo(e, { props: [eu(n, /:(plac\w+)/, ":" + E + "input-$1")] }),
					eo(e, { props: [eu(n, /:(plac\w+)/, ":" + W + "$1")] }),
					eo(e, { props: [eu(n, /:(plac\w+)/, j + "input-$1")] })
				], t);
			}
			return "";
		});
	}
}], tr = function(e) {
	var n, a, t = e.key;
	if ("css" === t) {
		var s = document.querySelectorAll("style[data-emotion]:not([data-s])");
		Array.prototype.forEach.call(s, function(e) {
			-1 !== e.getAttribute("data-emotion").indexOf(" ") && (document.head.appendChild(e), e.setAttribute("data-s", ""));
		});
	}
	var r = e.stylisPlugins || ts, o = {}, i = [];
	n = e.container || document.head, Array.prototype.forEach.call(document.querySelectorAll("style[data-emotion^=\"" + t + " \"]"), function(e) {
		for (var n = e.getAttribute("data-emotion").split(" "), a = 1; a < n.length; a++) o[n[a]] = !0;
		i.push(e);
	});
	var c = ei([ta, tt].concat(r, [Q, ea(function(e) {
		a.insert(e);
	})])), l = {
		key: t,
		sheet: new em({
			key: t,
			container: n,
			nonce: e.nonce,
			speedy: e.speedy,
			prepend: e.prepend,
			insertionPoint: e.insertionPoint
		}),
		nonce: e.nonce,
		inserted: o,
		registered: {},
		insert: function(e, n, t, s) {
			a = t, er(q(e ? e + "{" + n.styles + "}" : n.styles), c), s && (l.inserted[n.name] = !0);
		}
	};
	return l.sheet.hydrate(i), l;
}, to = function(e, n, a) {
	var t = e.key + "-" + n.name;
	!1 === a && void 0 === e.registered[t] && (e.registered[t] = n.styles);
}, ti = function(e, n, a) {
	to(e, n, a);
	var t = e.key + "-" + n.name;
	if (void 0 === e.inserted[n.name]) {
		var s = n;
		do
			e.insert(n === s ? "." + t : "", s, e.sheet, !0), s = s.next;
		while (void 0 !== s);
	}
};
let tc = $(() => tr({ key: "css" }), { name: "Cache" }), tl = (e) => (n) => {
	n.serialized && (n.withoutScoping ? e.insert("", n.serialized, e.sheet, !0) : ti(e, n.serialized, n.isStringTag ?? !0));
};
var tp = s({
	sx: I(),
	component: I().optional().default("div")
}, (e, { slots: n, expose: a }) => {
	let t = a9.use(), s = tc.use(), r = t.unstable_css(s, e.sx ?? {}), o = tl(s);
	e5(() => {
		o({
			serialized: r,
			isStringTag: !0
		});
	});
	let i = w(null);
	return a({ [b]: i }), () => eO(e.component ?? "div", {
		ref: i,
		class: "0" !== r.name ? `${s.key}-${r.name}` : "",
		children: n
	});
});
function tu(...e) {
	let n, a = "div", t = {}, r = {};
	for (let s of e) {
		if (i(s)) {
			n = s;
			continue;
		}
		if (A(s) || o(s)) {
			a = s;
			continue;
		}
		c(n) && l(s) ? t = s : r = s;
	}
	return n ??= (e, n) => (a) => {
		let t = {};
		for (let n in e) "component" !== n && "sx" !== n && e[n] && (t[`data-${n}`] = e[n]);
		return eO(a, {
			...t,
			children: n.slots
		});
	}, (e) => {
		let o = Object.assign(s({
			...t,
			sx: I().optional(),
			component: I().optional()
		}, (t, s) => {
			let r = a9.use(), i = tc.use(), c = tl(i), l = e7(""), p = r.unstable_css(i, e), u = () => ("0" !== p.name ? `${i.key}-${p.name}${l.value}` : `${l.value}`) + (o.name ? ` ${o.name}` : "");
			if (a.__styled) {
				let e = r.unstable_css(i, t.sx ?? {});
				"0" !== e.name && (l.value = ` ${i.key}-${e.name}`), e5(() => {
					c({
						serialized: p,
						isStringTag: !0
					}), c({
						serialized: e,
						isStringTag: !0
					});
				});
			} else e6(() => {
				c({
					serialized: p,
					isStringTag: !0
				});
			});
			let d = n(t, s), h = w(null);
			return s.expose({ [b]: h }), () => {
				if (a.__styled) {
					let e = d(a);
					return e ? eI(e, {
						component: t.component,
						ref: h,
						class: u()
					}) : null;
				}
				let e = d(tp);
				return e ? eI(e, {
					component: t.component || a,
					sx: t.sx,
					ref: h,
					class: u()
				}) : null;
			};
		}, r), { __styled: !0 });
		return o.toString = () => `.${o.name}`, o;
	};
}
var td = s(({ styles: e }) => {
	let n = a9.use(), a = tc.use(), t = tl(a), s = n.unstable_css(a, A(e) ? { "&": e } : e);
	return e6(() => {
		t({
			serialized: s,
			withoutScoping: !0
		});
	}), () => null;
}, {
	displayName: "GlobalStyle",
	props: ["styles"]
}), th = s(() => {
	let e = a9.use().rootCSSVars;
	return () => eO(td, { styles: {
		":host, :root, [data-theme]": e,
		"*, *::after, *::before": { boxSizing: "border-box" },
		html: { fontSize: "10px" },
		a: { color: "inherit" },
		body: { textStyle: "sys.body-medium" }
	} });
}, { displayName: "CSSReset" });
let tm = $(() => ({ mountPoint: () => document.body }), { name: "OverlaySetting" });
var tk = $(() => new tf(eE(null), eE(null), () => !1), { name: "Overlay" }), tf = class {
	children = [];
	constructor(e, n, a) {
		this.triggerRef = e, this.contentRef = n, this.isOpen = a;
	}
	add = (e) => (this.children = [...this.children, e], () => {
		this.children = this.children.filter((n) => n !== e);
	});
	isClickInside = (e) => {
		for (let n of this.children) if (n.isClickInside(e)) return !0;
		let n = eW(this.triggerRef), a = eW(this.contentRef);
		return n && (n === e.target || e.composedPath().includes(n)) || a && (a === e.target || e.composedPath().includes(a));
	};
	topmost() {
		return 0 === this.children.filter((e) => e.isOpen()).length;
	}
}, tg = s((e, { slots: n, attrs: a, emit: t }) => {
	let s = e.contentRef || eE(null), r = new tf(e.triggerRef ?? eE(null), s, () => !!e.isOpen), o = tm.use();
	return eQ(tk.use().add(r)), window && _(S(s, "value"), P((e) => {
		if (!e) return;
		let n = (e) => {
			r.isClickInside(e) || t("click-outside", e);
		};
		return window.addEventListener("pointerdown", n), () => {
			window.removeEventListener("pointerdown", n);
		};
	}), P((e) => {
		if (!e) return;
		let n = (e) => {
			"Escape" === e.key && r.topmost() && t("esc-keydown", e);
		};
		return window.addEventListener("keydown", n), () => {
			window.removeEventListener("keydown", n);
		};
	}), O()), () => {
		let i = e.isOpen ? eI(eO("div", {
			...a,
			ref: s,
			style: e.style,
			children: eO(tk, {
				value: r,
				children: n.default?.()
			})
		}), { onVnodeBeforeMount: () => {
			t("content-before-mount");
		} }) : null;
		return eO(ev, {
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
});
function tN(e) {
	let n = e4(e), a = parseFloat(n.width) || 0, t = parseFloat(n.height) || 0, s = eZ(e), r = s ? e.offsetWidth : a, o = s ? e.offsetHeight : t, i = eX(a) !== r || eX(t) !== o;
	return i && (a = r, t = o), {
		width: a,
		height: t,
		$: i
	};
}
function ty(e) {
	return e1(e) ? e : e.contextElement;
}
function tb(e) {
	let n = ty(e);
	if (!eZ(n)) return nn(1);
	let a = n.getBoundingClientRect(), { width: t, height: s, $: r } = tN(n), o = (r ? eX(a.width) : a.width) / t, i = (r ? eX(a.height) : a.height) / s;
	return o && Number.isFinite(o) || (o = 1), i && Number.isFinite(i) || (i = 1), {
		x: o,
		y: i
	};
}
var tx = nn(0);
function tv(e) {
	let n = ez(e);
	return nt() && n.visualViewport ? {
		x: n.visualViewport.offsetLeft,
		y: n.visualViewport.offsetTop
	} : tx;
}
function tw(e, n, a, t) {
	var s;
	void 0 === n && (n = !1), void 0 === a && (a = !1);
	let r = e.getBoundingClientRect(), o = ty(e), i = nn(1);
	n && (t ? e1(t) && (i = tb(t)) : i = tb(e));
	let c = (void 0 === (s = a) && (s = !1), t && (!s || t === ez(o)) && s) ? tv(o) : nn(0), l = (r.left + c.x) / i.x, p = (r.top + c.y) / i.y, u = r.width / i.x, d = r.height / i.y;
	if (o) {
		let e = ez(o), n = t && e1(t) ? ez(t) : t, a = e, s = e0(a);
		for (; s && t && n !== a;) {
			let e = tb(s), n = s.getBoundingClientRect(), t = e4(s), r = n.left + (s.clientLeft + parseFloat(t.paddingLeft)) * e.x, o = n.top + (s.clientTop + parseFloat(t.paddingTop)) * e.y;
			l *= e.x, p *= e.y, u *= e.x, d *= e.y, l += r, p += o, s = e0(a = ez(s));
		}
	}
	return eM({
		width: u,
		height: d,
		x: l,
		y: p
	});
}
function tC(e, n) {
	let a = ej(e).scrollLeft;
	return n ? n.left + a : tw(eH(e)).left + a;
}
function tP(e, n) {
	let a = e.getBoundingClientRect();
	return {
		x: a.left + n.scrollLeft - tC(e, a),
		y: a.top + n.scrollTop
	};
}
var t_ = new Set(["absolute", "fixed"]);
function tM(e, n, a) {
	let t;
	if ("viewport" === n) t = function(e, n) {
		let a = ez(e), t = eH(e), s = a.visualViewport, r = t.clientWidth, o = t.clientHeight, i = 0, c = 0;
		if (s) {
			r = s.width, o = s.height;
			let e = nt();
			(!e || e && "fixed" === n) && (i = s.offsetLeft, c = s.offsetTop);
		}
		let l = tC(t);
		if (l <= 0) {
			let e = t.ownerDocument, n = e.body, a = getComputedStyle(n), s = "CSS1Compat" === e.compatMode && parseFloat(a.marginLeft) + parseFloat(a.marginRight) || 0, o = Math.abs(t.clientWidth - n.clientWidth - s);
			o <= 25 && (r -= o);
		} else l <= 25 && (r += l);
		return {
			width: r,
			height: o,
			x: i,
			y: c
		};
	}(e, a);
	else if ("document" === n) t = function(e) {
		let n = eH(e), a = ej(e), t = e.ownerDocument.body, s = eN(n.scrollWidth, n.clientWidth, t.scrollWidth, t.clientWidth), r = eN(n.scrollHeight, n.clientHeight, t.scrollHeight, t.clientHeight), o = -a.scrollLeft + tC(e), i = -a.scrollTop;
		return "rtl" === e4(t).direction && (o += eN(n.clientWidth, t.clientWidth) - s), {
			width: s,
			height: r,
			x: o,
			y: i
		};
	}(eH(e));
	else if (e1(n)) t = function(e, n) {
		let a = tw(e, !0, "fixed" === n), t = a.top + e.clientTop, s = a.left + e.clientLeft, r = eZ(e) ? tb(e) : nn(1);
		return {
			width: e.clientWidth * r.x,
			height: e.clientHeight * r.y,
			x: s * r.x,
			y: t * r.y
		};
	}(n, a);
	else {
		let a = tv(e);
		t = {
			x: n.x - a.x,
			y: n.y - a.y,
			width: n.width,
			height: n.height
		};
	}
	return eM(t);
}
function tS(e) {
	return "static" === e4(e).position;
}
function tT(e, n) {
	if (!eZ(e) || "fixed" === e4(e).position) return null;
	if (n) return n(e);
	let a = e.offsetParent;
	return eH(e) === a && (a = a.ownerDocument.body), a;
}
function t$(e, n) {
	let a = ez(e);
	if (ne(e)) return a;
	if (!eZ(e)) {
		let n = e9(e);
		for (; n && !eG(n);) {
			if (e1(n) && !tS(n)) return n;
			n = e9(n);
		}
		return a;
	}
	let t = tT(e, n);
	for (; t && eL(t) && tS(t);) t = tT(t, n);
	return t && eG(t) && tS(t) && !eU(t) ? a : t || eY(e) || a;
}
var tA = async function(e) {
	let n = this.getOffsetParent || t$, a = this.getDimensions, t = await a(e.floating);
	return {
		reference: function(e, n, a) {
			let t = eZ(n), s = eH(n), r = "fixed" === a, o = tw(e, !0, r, n), i = {
				scrollLeft: 0,
				scrollTop: 0
			}, c = nn(0);
			if (t || !t && !r) if (("body" !== e3(n) || eq(s)) && (i = ej(n)), t) {
				let e = tw(n, !0, r, n);
				c.x = e.x + n.clientLeft, c.y = e.y + n.clientTop;
			} else s && (c.x = tC(s));
			r && !t && s && (c.x = tC(s));
			let l = !s || t || r ? nn(0) : tP(s, i);
			return {
				x: o.left + i.scrollLeft - c.x - l.x,
				y: o.top + i.scrollTop - c.y - l.y,
				width: o.width,
				height: o.height
			};
		}(e.reference, await n(e.floating), e.strategy),
		floating: {
			x: 0,
			y: 0,
			width: t.width,
			height: t.height
		}
	};
}, tR = {
	convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
		let { elements: n, rect: a, offsetParent: t, strategy: s } = e, r = "fixed" === s, o = eH(t), i = !!n && ne(n.floating);
		if (t === o || i && r) return a;
		let c = {
			scrollLeft: 0,
			scrollTop: 0
		}, l = nn(1), p = nn(0), u = eZ(t);
		if ((u || !u && !r) && (("body" !== e3(t) || eq(o)) && (c = ej(t)), eZ(t))) {
			let e = tw(t);
			l = tb(t), p.x = e.x + t.clientLeft, p.y = e.y + t.clientTop;
		}
		let d = !o || u || r ? nn(0) : tP(o, c);
		return {
			width: a.width * l.x,
			height: a.height * l.y,
			x: a.x * l.x - c.scrollLeft * l.x + p.x + d.x,
			y: a.y * l.y - c.scrollTop * l.y + p.y + d.y
		};
	},
	getDocumentElement: eH,
	getClippingRect: function(e) {
		let { element: n, boundary: a, rootBoundary: t, strategy: s } = e, r = [..."clippingAncestors" === a ? ne(n) ? [] : function(e, n) {
			let a = n.get(e);
			if (a) return a;
			let t = eJ(e, [], !1).filter((e) => e1(e) && "body" !== e3(e)), s = null, r = "fixed" === e4(e).position, o = r ? e9(e) : e;
			for (; e1(o) && !eG(o);) {
				let n = e4(o), a = eU(o);
				a || "fixed" !== n.position || (s = null), (r ? !a && !s : !a && "static" === n.position && !!s && t_.has(s.position) || eq(o) && !a && function e(n, a) {
					let t = e9(n);
					return !(t === a || !e1(t) || eG(t)) && ("fixed" === e4(t).position || e(t, a));
				}(e, o)) ? t = t.filter((e) => e !== o) : s = n, o = e9(o);
			}
			return n.set(e, t), t;
		}(n, this._c) : [].concat(a), t], o = r[0], i = r.reduce((e, a) => {
			let t = tM(n, a, s);
			return e.top = eN(t.top, e.top), e.right = eg(t.right, e.right), e.bottom = eg(t.bottom, e.bottom), e.left = eN(t.left, e.left), e;
		}, tM(n, o, s));
		return {
			width: i.right - i.left,
			height: i.bottom - i.top,
			x: i.left,
			y: i.top
		};
	},
	getOffsetParent: t$,
	getElementRects: tA,
	getClientRects: function(e) {
		return Array.from(e.getClientRects());
	},
	getDimensions: function(e) {
		let { width: n, height: a } = tN(e);
		return {
			width: n,
			height: a
		};
	},
	getScale: tb,
	isElement: e1,
	isRTL: function(e) {
		return "rtl" === e4(e).direction;
	}
};
function tO(e, n) {
	return e.x === n.x && e.y === n.y && e.width === n.width && e.height === n.height;
}
var tD = ef, tB = s((e, { slots: n, emit: a, attrs: t }) => {
	let s = N(null), r = N(null);
	return _(d([s, r]), P(([n, a]) => {
		if (a && n) {
			let t = async () => {
				a.style.position = "absolute";
				let t = await ((e, n, a) => {
					let t = /* @__PURE__ */ new Map(), s = {
						platform: tR,
						...a
					}, r = {
						...s.platform,
						_c: t
					};
					return eV(e, n, {
						...s,
						platform: r
					});
				})(n, a, {
					placement: e.placement ?? "bottom",
					middleware: [
						...e.modifiers ?? [],
						...e.middleware ?? [],
						na(),
						eA()
					]
				});
				Object.assign(a.style, {
					left: `${t.x}px`,
					top: `${t.y}px`
				}), a.setAttribute("data-placement", t.placement);
			}, s = function(e, n, a, t) {
				let s;
				void 0 === t && (t = {});
				let { ancestorScroll: r = !0, ancestorResize: o = !0, elementResize: i = "function" == typeof ResizeObserver, layoutShift: c = "function" == typeof IntersectionObserver, animationFrame: l = !1 } = t, p = ty(e), u = r || o ? [...p ? eJ(p) : [], ...eJ(n)] : [];
				u.forEach((e) => {
					r && e.addEventListener("scroll", a, { passive: !0 }), o && e.addEventListener("resize", a);
				});
				let d = p && c ? function(e, n) {
					let a, t = null, s = eH(e);
					function r() {
						var e;
						clearTimeout(a), null == (e = t) || e.disconnect(), t = null;
					}
					return function o(i, c) {
						void 0 === i && (i = !1), void 0 === c && (c = 1), r();
						let l = e.getBoundingClientRect(), { left: p, top: u, width: d, height: h } = l;
						if (i || n(), !d || !h) return;
						let m = eR(u), k = eR(s.clientWidth - (p + d)), f = {
							rootMargin: -m + "px " + -k + "px " + -eR(s.clientHeight - (u + h)) + "px " + -eR(p) + "px",
							threshold: eN(0, eg(1, c)) || 1
						}, g = !0;
						function N(n) {
							let t = n[0].intersectionRatio;
							if (t !== c) {
								if (!g) return o();
								t ? o(!1, t) : a = setTimeout(() => {
									o(!1, 1e-7);
								}, 1e3);
							}
							1 !== t || tO(l, e.getBoundingClientRect()) || o(), g = !1;
						}
						try {
							t = new IntersectionObserver(N, {
								...f,
								root: s.ownerDocument
							});
						} catch (e) {
							t = new IntersectionObserver(N, f);
						}
						t.observe(e);
					}(!0), r;
				}(p, a) : null, h = -1, m = null;
				i && (m = new ResizeObserver((e) => {
					let [t] = e;
					t && t.target === p && m && (m.unobserve(n), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
						var e;
						null == (e = m) || e.observe(n);
					})), a();
				}), p && !l && m.observe(p), m.observe(n));
				let k = l ? tw(e) : null;
				return l && function n() {
					let t = tw(e);
					k && !tO(k, t) && a(), k = t, s = requestAnimationFrame(n);
				}(), a(), () => {
					var e;
					u.forEach((e) => {
						r && e.removeEventListener("scroll", a), o && e.removeEventListener("resize", a);
					}), d?.(), null == (e = m) || e.disconnect(), m = null, l && cancelAnimationFrame(s);
				};
			}(n, a, t);
			return () => {
				s();
			};
		}
		return () => {};
	}), O()), () => {
		let o = n.default?.()[0];
		return o ? eB(e2, { children: [eI(o, {
			...t,
			onVnodeMounted: (e) => {
				s.value = function e(n) {
					if (n) {
						if (n instanceof HTMLElement) return n;
						if (n instanceof Text) return e(n.nextElementSibling);
					}
					return null;
				}(e.el);
			}
		}), eO(tg, {
			style: { zIndex: 100 },
			triggerRef: s,
			contentRef: r,
			isOpen: e.isOpen,
			onClickOutside: (e) => a("click-outside", e),
			onEscKeydown: (e) => a("esc-keydown", e),
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
}), tI = n(eh()), tF = s(() => {
	let e = e8.use(), n = w(null);
	return () => {
		let a = a2.fromColors(e.value.seed);
		return eB(tp, {
			ref: n,
			sx: {
				display: "flex",
				flexDirection: "column",
				gap: 24
			},
			children: [eB(tp, {
				sx: {
					display: "flex",
					gap: 56
				},
				children: [eO(tp, {
					sx: {
						display: "flex",
						flexDirection: "column"
					},
					children: T(e.value.seed, (n, a) => eB(tp, {
						sx: {
							flex: 1,
							display: "flex",
							alignItems: "center",
							gap: 16
						},
						children: [eO(tp, {
							sx: { flex: 1 },
							children: a
						}), eO("input", {
							type: "color",
							value: n,
							onChange: (n) => {
								e.next((e) => {
									e.seed[a] = n.target.value;
								});
							}
						})]
					}))
				}), eO(tp, {
					sx: {
						display: "flex",
						flexWrap: "wrap",
						gap: 16
					},
					children: T(e.value.rules, ([n, t], s) => eB(tp, {
						sx: {
							display: "flex",
							alignItems: "center",
							width: "30%"
						},
						children: [eO(tp, {
							sx: { flex: 1 },
							children: s
						}), eO(tp, {
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
							children: eO("input", {
								type: "number",
								value: t,
								max: 100,
								min: 0,
								style: {
									backgroundColor: a2.toHEX(a.seeds[n].tone(t)),
									color: t > 50 ? "black" : "white"
								},
								"data-color": a2.toHEX(a.seeds[n].tone(t)),
								"data-theme": "dark",
								onChange: (a) => {
									try {
										let r = parseInt(a.target.value);
										e.next((e) => {
											e.rules[s] = [
												n,
												r,
												t
											];
										});
									} catch (e) {}
								}
							})
						})]
					}))
				})]
			}), eO(tp, {
				sx: {
					display: "flex",
					gap: 16,
					"& > *": { flex: 1 }
				},
				children: eO("pre", {
					onClick: () => (0, tI.default)(JSON.stringify(e.value)),
					children: eO("code", { children: JSON.stringify(e.value, null, 2) })
				})
			})]
		});
	};
}), tL = {
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
}, tH = s(() => () => eO(e2, { children: ["light", "dark"].map((e) => eB("div", {
	"data-theme": e,
	children: [eB(tp, {
		component: "h1",
		sx: {
			textStyle: "sys.headline-medium",
			pb: 8,
			mt: 16
		},
		children: [B(e), " Scheme"]
	}), eB(tp, {
		sx: {
			display: "flex",
			flexDirection: "column",
			gap: 16
		},
		children: [eO(tp, {
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
			].map((e) => eB(tp, {
				sx: {
					flex: 1,
					minW: 1 / 4,
					display: "flex",
					alignItems: "stretch"
				},
				children: [eO(tp, {
					sx: {
						flex: 1,
						display: "flex",
						flexDirection: "column"
					},
					children: ["", "-container"].map((n) => eB(p, { children: [eO(tp, {
						sx: {
							bgColor: `sys.${e}${n}`,
							color: `sys.on-${e}${n}`,
							p: 8,
							flex: 3
						},
						children: `${e}${n}`
					}), eO(tp, {
						sx: {
							color: `sys.${e}${n}`,
							bgColor: `sys.on-${e}${n}`,
							p: 8,
							flex: 1
						},
						children: `on-${e}${n}`
					})] }, n))
				}), eO(tp, {
					sx: {
						display: "flex",
						flexDirection: "column"
					},
					children: T(tL, (n, a) => eB(tp, {
						sx: {
							color: `${e}.${parseInt(a) > 50 ? 0 : 100}`,
							bgColor: `${e}.${a}`,
							w: 60,
							p: 8,
							textAlign: "right"
						},
						children: [".", a]
					}))
				})]
			}, e))
		}), eB("div", { children: [
			eO(tp, {
				sx: {
					display: "flex",
					"& > *": { width: 1 / 3 }
				},
				children: [
					"-dim",
					"",
					"-bright"
				].map((e) => eO(tp, {
					sx: {
						color: "sys.on-surface",
						bgColor: `sys.surface${e}`,
						height: 80,
						p: 8
					},
					children: `surface${e}`
				}))
			}),
			eO(tp, {
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
				].map((e) => eO(tp, {
					sx: {
						color: "sys.on-surface",
						bgColor: `sys.surface-container${e}`,
						height: 80,
						p: 8
					},
					children: `surface-container${e}`
				}))
			}),
			eO(tp, {
				sx: {
					display: "flex",
					"& > *": { width: 1 / 4 }
				},
				children: [
					"on-surface",
					"on-surface-variant",
					"outline",
					"outline-variant"
				].map((e) => eO(tp, {
					sx: {
						color: e.includes("outline-variant") ? "sys.inverse-surface" : "sys.inverse-on-surface",
						bgColor: `sys.${e}`,
						height: 80,
						p: 8
					},
					children: e
				}))
			}),
			eO(tp, {
				sx: { display: "flex" },
				children: T(tL, (e, n) => eB(tp, {
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
}, e)) })), tV = s(() => {
	let e = a9.use();
	return () => eO(e2, { children: Object.keys(e.token.elevation.tokens).map((e) => eO(tp, {
		sx: {
			mt: 16,
			p: 16,
			rounded: "lg",
			transitionDuration: "md4",
			transitionTimingFunction: "standard",
			shadow: e,
			_hover: { shadow: `${1 + parseInt(e)}` }
		},
		children: eB("div", { children: ["Elevation ", e] })
	}, e)) });
}), tj = s(() => {
	let e = a9.use();
	return () => eB(tp, {
		sx: {
			display: "flex",
			gap: 16,
			flexDirection: "column"
		},
		children: [eO("div", { children: "点击下载，通过 Figma Tokens 全量导入文件" }), eO("pre", {
			onClick: () => {
				(function(e, n, a = "application/json") {
					let t = document.createElement("a"), s = new Blob([e], { type: a }), r = URL.createObjectURL(s);
					t.href = r, t.download = n, document.body.appendChild(t), t.click(), setTimeout(() => {
						document.body.removeChild(t), window.URL.revokeObjectURL(r);
					}, 0);
				})(JSON.stringify(e.toFigmaTokens(), null, 2), `tokens.${(/* @__PURE__ */ new Date()).getTime()}.json`);
			},
			children: eO("code", { children: JSON.stringify(e.toFigmaTokens(), null, 2) })
		})]
	});
}), tE = tu("button", { disabled: F().optional() }, { displayName: "Button" })({
	bg: "none",
	outline: "none",
	border: "none",
	px: 16,
	h: 40,
	rounded: "md",
	color: "sys.primary",
	bgColor: ao("sys.primary", ar(.08)),
	_disabled: {
		color: ao("sys.on-surface", ar(.12)),
		bgColor: ao("sys.on-surface", ar(.08))
	}
}), tz = () => eB(tp, {
	sx: {
		display: "flex",
		gap: 8
	},
	children: [eO(tE, { children: "按钮" }), eO(tE, {
		disabled: !0,
		children: "按钮"
	})]
}), tW = s(() => () => eO(tp, {
	sx: {
		display: "flex",
		padding: 10,
		containerStyle: "sys.primary"
	},
	children: eO(tp, {
		sx: { containerStyle: "sys.surface-container" },
		component: "button",
		children: "Hi 111"
	})
}));
function tU(e) {
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
	return eB(e2, { children: [
		eB(n.p, { children: ["设计理念沿用 ", eO(n.a, {
			href: "https://m3.material.io/",
			children: "Material 3"
		})] }),
		"\n",
		eO(n.p, { children: "这里仅为适配该设计理念，抽象 Design System, 方便开发：" }),
		"\n",
		eB(n.p, { children: [
			"所有的 Design Token 将声明为 ",
			eO(n.code, { children: "css var" }),
			" (",
			eO(n.a, {
				href: "https://developer.mozilla.org/en-US/docs/Web/CSS/--*",
				children: "Custom properties"
			}),
			"),\n可同时支持在 ",
			eO(n.code, { children: "css-in-js" }),
			" 和 ",
			eO(n.code, { children: "raw css" }),
			" 中使用。"
		] }),
		"\n",
		eO(n.h2, { children: eO(n.code, { children: "css-in-js" }) }),
		"\n",
		eO(n.p, { children: "TypeScript 的帮助下，还会提供准确的 Design Token 值. 如：" }),
		"\n",
		eB(n.div, {
			"data-example": "",
			children: [eO(n.div, {
				"data-example-container": "",
				children: eO(n.codeblock4a44dc15, {})
			}), eO(n.pre, {
				className: "language-tsx",
				children: eB(n.code, {
					className: "language-tsx",
					children: [
						eO(n.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						eB(n.span, {
							className: "token imports",
							children: [
								eO(n.span, {
									className: "token punctuation",
									children: "{"
								}),
								" ",
								eO(n.span, {
									className: "token maybe-class-name",
									children: "Box"
								}),
								eO(n.span, {
									className: "token punctuation",
									children: ","
								}),
								" alpha",
								eO(n.span, {
									className: "token punctuation",
									children: ","
								}),
								" styled",
								eO(n.span, {
									className: "token punctuation",
									children: ","
								}),
								" variant ",
								eO(n.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						eO(n.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						eO(n.span, {
							className: "token string",
							children: "\"@innoai-tech/vueuikit\""
						}),
						eO(n.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						eO(n.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						eB(n.span, {
							className: "token imports",
							children: [
								eO(n.span, {
									className: "token punctuation",
									children: "{"
								}),
								" t ",
								eO(n.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						eO(n.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						eO(n.span, {
							className: "token string",
							children: "\"@innoai-tech/vuekit\""
						}),
						eO(n.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n",
						eO(n.span, {
							className: "token keyword module",
							children: "export"
						}),
						" ",
						eO(n.span, {
							className: "token keyword",
							children: "const"
						}),
						" ",
						eO(n.span, {
							className: "token maybe-class-name",
							children: "Button"
						}),
						" ",
						eO(n.span, {
							className: "token operator",
							children: "="
						}),
						" ",
						eO(n.span, {
							className: "token function",
							children: "styled"
						}),
						eO(n.span, {
							className: "token punctuation",
							children: "("
						}),
						eO(n.span, {
							className: "token string",
							children: "\"button\""
						}),
						eO(n.span, {
							className: "token punctuation",
							children: ","
						}),
						" ",
						eO(n.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n  disabled",
						eO(n.span, {
							className: "token operator",
							children: ":"
						}),
						" t",
						eO(n.span, {
							className: "token punctuation",
							children: "."
						}),
						eO(n.span, {
							className: "token method function property-access",
							children: "boolean"
						}),
						eO(n.span, {
							className: "token punctuation",
							children: "("
						}),
						eO(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						eO(n.span, {
							className: "token punctuation",
							children: "."
						}),
						eO(n.span, {
							className: "token method function property-access",
							children: "optional"
						}),
						eO(n.span, {
							className: "token punctuation",
							children: "("
						}),
						eO(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						eO(n.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n",
						eO(n.span, {
							className: "token punctuation",
							children: "}"
						}),
						eO(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						eO(n.span, {
							className: "token punctuation",
							children: "("
						}),
						eO(n.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n  bg",
						eO(n.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						eO(n.span, {
							className: "token string",
							children: "\"none\""
						}),
						eO(n.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n  outline",
						eO(n.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						eO(n.span, {
							className: "token string",
							children: "\"none\""
						}),
						eO(n.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n  border",
						eO(n.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						eO(n.span, {
							className: "token string",
							children: "\"none\""
						}),
						eO(n.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n  px",
						eO(n.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						eO(n.span, {
							className: "token number",
							children: "16"
						}),
						eO(n.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n  h",
						eO(n.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						eO(n.span, {
							className: "token number",
							children: "40"
						}),
						eO(n.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n  rounded",
						eO(n.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						eO(n.span, {
							className: "token string",
							children: "\"md\""
						}),
						eO(n.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n\n  ",
						eO(n.span, {
							className: "token comment",
							children: "// 利用 TypeScript 的推导而来，且非 color 属性无该值"
						}),
						"\n  ",
						eO(n.span, {
							className: "token comment",
							children: "// 实际将转换为 var(--vk-color-sys-primary)"
						}),
						"\n  ",
						eO(n.span, {
							className: "token comment",
							children: "// sys-* 的 color 还会随暗黑/普通主题进行切换"
						}),
						"\n  color",
						eO(n.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						eO(n.span, {
							className: "token string",
							children: "\"sys.primary\""
						}),
						eO(n.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n\n  ",
						eO(n.span, {
							className: "token comment",
							children: "// color 变种"
						}),
						"\n  ",
						eO(n.span, {
							className: "token comment",
							children: "// 实际将转换为 rbga(var(--vk-color-sys-primary-rgb) / 0.08)"
						}),
						"\n  bgColor",
						eO(n.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						eO(n.span, {
							className: "token function",
							children: "variant"
						}),
						eO(n.span, {
							className: "token punctuation",
							children: "("
						}),
						eO(n.span, {
							className: "token string",
							children: "\"sys.primary\""
						}),
						eO(n.span, {
							className: "token punctuation",
							children: ","
						}),
						" ",
						eO(n.span, {
							className: "token function",
							children: "alpha"
						}),
						eO(n.span, {
							className: "token punctuation",
							children: "("
						}),
						eO(n.span, {
							className: "token number",
							children: "0.08"
						}),
						eO(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						eO(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						eO(n.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n\n  ",
						eO(n.span, {
							className: "token comment",
							children: "// 通常情况下，组件 props 将转换成 data-<prop> 作为 attr"
						}),
						"\n  ",
						eO(n.span, {
							className: "token comment",
							children: "// 即： <Button disabled/>  =>  <button data-disabled=true />"
						}),
						"\n  ",
						eO(n.span, {
							className: "token comment",
							children: "// 同理，在自定义转换规则中，也建议如下做类似的转换，避免动态创建 CSSObject"
						}),
						"\n  _disabled",
						eO(n.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						eO(n.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n    color",
						eO(n.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						eO(n.span, {
							className: "token function",
							children: "variant"
						}),
						eO(n.span, {
							className: "token punctuation",
							children: "("
						}),
						eO(n.span, {
							className: "token string",
							children: "\"sys.on-surface\""
						}),
						eO(n.span, {
							className: "token punctuation",
							children: ","
						}),
						" ",
						eO(n.span, {
							className: "token function",
							children: "alpha"
						}),
						eO(n.span, {
							className: "token punctuation",
							children: "("
						}),
						eO(n.span, {
							className: "token number",
							children: "0.12"
						}),
						eO(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						eO(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						eO(n.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n    bgColor",
						eO(n.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						eO(n.span, {
							className: "token function",
							children: "variant"
						}),
						eO(n.span, {
							className: "token punctuation",
							children: "("
						}),
						eO(n.span, {
							className: "token string",
							children: "\"sys.on-surface\""
						}),
						eO(n.span, {
							className: "token punctuation",
							children: ","
						}),
						" ",
						eO(n.span, {
							className: "token function",
							children: "alpha"
						}),
						eO(n.span, {
							className: "token punctuation",
							children: "("
						}),
						eO(n.span, {
							className: "token number",
							children: "0.08"
						}),
						eO(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						eO(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						eO(n.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n  ",
						eO(n.span, {
							className: "token punctuation",
							children: "}"
						}),
						eO(n.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n",
						eO(n.span, {
							className: "token punctuation",
							children: "}"
						}),
						eO(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						eO(n.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n",
						eO(n.span, {
							className: "token keyword module",
							children: "export"
						}),
						" ",
						eO(n.span, {
							className: "token keyword module",
							children: "default"
						}),
						" ",
						eO(n.span, {
							className: "token punctuation",
							children: "("
						}),
						eO(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						eO(n.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						eO(n.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n  ",
						eO(n.span, {
							className: "token keyword control-flow",
							children: "return"
						}),
						" ",
						eO(n.span, {
							className: "token punctuation",
							children: "("
						}),
						"\n    ",
						eB(n.span, {
							className: "token tag",
							children: [
								eB(n.span, {
									className: "token tag",
									children: [eO(n.span, {
										className: "token punctuation",
										children: "<"
									}), eO(n.span, {
										className: "token class-name",
										children: "Box"
									})]
								}),
								" ",
								eO(n.span, {
									className: "token attr-name",
									children: "sx"
								}),
								eB(n.span, {
									className: "token script language-javascript",
									children: [
										eO(n.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										eO(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										eO(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										" display",
										eO(n.span, {
											className: "token operator",
											children: ":"
										}),
										" ",
										eO(n.span, {
											className: "token string",
											children: "\"flex\""
										}),
										eO(n.span, {
											className: "token punctuation",
											children: ","
										}),
										" gap",
										eO(n.span, {
											className: "token operator",
											children: ":"
										}),
										" ",
										eO(n.span, {
											className: "token number",
											children: "8"
										}),
										" ",
										eO(n.span, {
											className: "token punctuation",
											children: "}"
										}),
										eO(n.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								eO(n.span, {
									className: "token punctuation",
									children: ">"
								})
							]
						}),
						eO(n.span, {
							className: "token plain-text",
							children: "\n      "
						}),
						eB(n.span, {
							className: "token tag",
							children: [eB(n.span, {
								className: "token tag",
								children: [eO(n.span, {
									className: "token punctuation",
									children: "<"
								}), eO(n.span, {
									className: "token class-name",
									children: "Button"
								})]
							}), eO(n.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						eO(n.span, {
							className: "token plain-text",
							children: "按钮"
						}),
						eB(n.span, {
							className: "token tag",
							children: [eB(n.span, {
								className: "token tag",
								children: [eO(n.span, {
									className: "token punctuation",
									children: "</"
								}), eO(n.span, {
									className: "token class-name",
									children: "Button"
								})]
							}), eO(n.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						eO(n.span, {
							className: "token plain-text",
							children: "\n      "
						}),
						eB(n.span, {
							className: "token tag",
							children: [
								eB(n.span, {
									className: "token tag",
									children: [eO(n.span, {
										className: "token punctuation",
										children: "<"
									}), eO(n.span, {
										className: "token class-name",
										children: "Button"
									})]
								}),
								" ",
								eO(n.span, {
									className: "token attr-name",
									children: "disabled"
								}),
								eB(n.span, {
									className: "token script language-javascript",
									children: [
										eO(n.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										eO(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										eO(n.span, {
											className: "token boolean",
											children: "true"
										}),
										eO(n.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								eO(n.span, {
									className: "token punctuation",
									children: ">"
								})
							]
						}),
						eO(n.span, {
							className: "token plain-text",
							children: "按钮"
						}),
						eB(n.span, {
							className: "token tag",
							children: [eB(n.span, {
								className: "token tag",
								children: [eO(n.span, {
									className: "token punctuation",
									children: "</"
								}), eO(n.span, {
									className: "token class-name",
									children: "Button"
								})]
							}), eO(n.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						eO(n.span, {
							className: "token plain-text",
							children: "\n    "
						}),
						eB(n.span, {
							className: "token tag",
							children: [eB(n.span, {
								className: "token tag",
								children: [eO(n.span, {
									className: "token punctuation",
									children: "</"
								}), eO(n.span, {
									className: "token class-name",
									children: "Box"
								})]
							}), eO(n.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						"\n  ",
						eO(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						eO(n.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						eO(n.span, {
							className: "token punctuation",
							children: "}"
						}),
						eO(n.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n"
					]
				})
			})]
		}),
		"\n",
		eB(n.p, { children: ["不同于其他框架中的 theme 定义，为了更准确的类型推导，需要由 DesignToken 进行创建\n详细请", eO(n.a, {
			href: "https://github.com/innoai-tech/vuekit/blob/main/nodepkg/vueuikit/src/theming/m3",
			children: "参考源码"
		})] }),
		"\n",
		eB(n.p, { children: [
			"虽然底层使用的是 ",
			eO(n.code, { children: "@emotion/*" }),
			"，但屏蔽掉了 ",
			eO(n.code, { children: "array" }),
			" 等非 CSSObject 值的使用, 初衷是为了更稳定的类型推导。\n另外样式扩展有两种方式"
		] }),
		"\n",
		eO(n.pre, {
			className: "language-tsx",
			children: eB(n.code, {
				className: "language-tsx",
				children: [
					eO(n.span, {
						className: "token keyword module",
						children: "import"
					}),
					" ",
					eB(n.span, {
						className: "token imports",
						children: [
							eO(n.span, {
								className: "token punctuation",
								children: "{"
							}),
							" t ",
							eO(n.span, {
								className: "token punctuation",
								children: "}"
							})
						]
					}),
					" ",
					eO(n.span, {
						className: "token keyword module",
						children: "from"
					}),
					" ",
					eO(n.span, {
						className: "token string",
						children: "\"@innoai-tech/vuekit\""
					}),
					eO(n.span, {
						className: "token punctuation",
						children: ";"
					}),
					"\n",
					eO(n.span, {
						className: "token keyword module",
						children: "import"
					}),
					" ",
					eB(n.span, {
						className: "token imports",
						children: [
							eO(n.span, {
								className: "token punctuation",
								children: "{"
							}),
							" styled",
							eO(n.span, {
								className: "token punctuation",
								children: ","
							}),
							" ",
							eO(n.span, {
								className: "token maybe-class-name",
								children: "SystemStyleObject"
							}),
							" ",
							eO(n.span, {
								className: "token punctuation",
								children: "}"
							})
						]
					}),
					" ",
					eO(n.span, {
						className: "token keyword module",
						children: "from"
					}),
					" ",
					eO(n.span, {
						className: "token string",
						children: "\"@innoai-tech/vueuikit\""
					}),
					eO(n.span, {
						className: "token punctuation",
						children: ";"
					}),
					"\n\n",
					eO(n.span, {
						className: "token keyword",
						children: "const"
					}),
					" shared",
					eO(n.span, {
						className: "token operator",
						children: ":"
					}),
					" ",
					eO(n.span, {
						className: "token maybe-class-name",
						children: "SystemStyleObject"
					}),
					" ",
					eO(n.span, {
						className: "token operator",
						children: "="
					}),
					" ",
					eO(n.span, {
						className: "token punctuation",
						children: "{"
					}),
					"\n  color",
					eO(n.span, {
						className: "token operator",
						children: ":"
					}),
					" ",
					eO(n.span, {
						className: "token string",
						children: "\"sys.primary\""
					}),
					eO(n.span, {
						className: "token punctuation",
						children: ","
					}),
					"\n  ",
					eO(n.span, {
						className: "token comment",
						children: "// ..."
					}),
					"\n",
					eO(n.span, {
						className: "token punctuation",
						children: "}"
					}),
					eO(n.span, {
						className: "token punctuation",
						children: ";"
					}),
					"\n\n",
					eO(n.span, {
						className: "token comment",
						children: "// 直接通过 extends 复用样式"
					}),
					"\n",
					eO(n.span, {
						className: "token comment",
						children: "//"
					}),
					"\n",
					eO(n.span, {
						className: "token comment",
						children: "// 组件 props 定义需要重新声明"
					}),
					"\n",
					eO(n.span, {
						className: "token keyword module",
						children: "export"
					}),
					" ",
					eO(n.span, {
						className: "token keyword",
						children: "const"
					}),
					" ",
					eO(n.span, {
						className: "token maybe-class-name",
						children: "ButtonBase"
					}),
					" ",
					eO(n.span, {
						className: "token operator",
						children: "="
					}),
					" ",
					eO(n.span, {
						className: "token function",
						children: "styled"
					}),
					eO(n.span, {
						className: "token punctuation",
						children: "("
					}),
					eO(n.span, {
						className: "token string",
						children: "\"button\""
					}),
					eO(n.span, {
						className: "token punctuation",
						children: ","
					}),
					" ",
					eO(n.span, {
						className: "token punctuation",
						children: "{"
					}),
					"\n  disabled",
					eO(n.span, {
						className: "token operator",
						children: ":"
					}),
					" t",
					eO(n.span, {
						className: "token punctuation",
						children: "."
					}),
					eO(n.span, {
						className: "token method function property-access",
						children: "boolean"
					}),
					eO(n.span, {
						className: "token punctuation",
						children: "("
					}),
					eO(n.span, {
						className: "token punctuation",
						children: ")"
					}),
					eO(n.span, {
						className: "token punctuation",
						children: "."
					}),
					eO(n.span, {
						className: "token method function property-access",
						children: "optional"
					}),
					eO(n.span, {
						className: "token punctuation",
						children: "("
					}),
					eO(n.span, {
						className: "token punctuation",
						children: ")"
					}),
					eO(n.span, {
						className: "token punctuation",
						children: ","
					}),
					"\n",
					eO(n.span, {
						className: "token punctuation",
						children: "}"
					}),
					eO(n.span, {
						className: "token punctuation",
						children: ")"
					}),
					eO(n.span, {
						className: "token punctuation",
						children: "("
					}),
					eO(n.span, {
						className: "token punctuation",
						children: "{"
					}),
					"\n  ",
					eO(n.span, {
						className: "token keyword",
						children: "extends"
					}),
					eO(n.span, {
						className: "token operator",
						children: ":"
					}),
					" ",
					eO(n.span, {
						className: "token punctuation",
						children: "["
					}),
					"shared",
					eO(n.span, {
						className: "token punctuation",
						children: "]"
					}),
					eO(n.span, {
						className: "token punctuation",
						children: ","
					}),
					"\n  ",
					eO(n.span, {
						className: "token comment",
						children: "// ..."
					}),
					"\n",
					eO(n.span, {
						className: "token punctuation",
						children: "}"
					}),
					eO(n.span, {
						className: "token punctuation",
						children: ")"
					}),
					eO(n.span, {
						className: "token punctuation",
						children: ";"
					}),
					"\n\n",
					eO(n.span, {
						className: "token comment",
						children: "// 通过 styled 覆写样式"
					}),
					"\n",
					eO(n.span, {
						className: "token comment",
						children: "// 可以完全继承 BaseButton 的 props 定义"
					}),
					"\n",
					eO(n.span, {
						className: "token keyword module",
						children: "export"
					}),
					" ",
					eO(n.span, {
						className: "token keyword",
						children: "const"
					}),
					" ",
					eO(n.span, {
						className: "token maybe-class-name",
						children: "Button"
					}),
					" ",
					eO(n.span, {
						className: "token operator",
						children: "="
					}),
					" ",
					eO(n.span, {
						className: "token function",
						children: "styled"
					}),
					eO(n.span, {
						className: "token punctuation",
						children: "("
					}),
					eO(n.span, {
						className: "token maybe-class-name",
						children: "ButtonBase"
					}),
					eO(n.span, {
						className: "token punctuation",
						children: ")"
					}),
					eO(n.span, {
						className: "token punctuation",
						children: "("
					}),
					eO(n.span, {
						className: "token punctuation",
						children: "{"
					}),
					"\n  ",
					eO(n.span, {
						className: "token comment",
						children: "// ..."
					}),
					"\n",
					eO(n.span, {
						className: "token punctuation",
						children: "}"
					}),
					eO(n.span, {
						className: "token punctuation",
						children: ")"
					}),
					eO(n.span, {
						className: "token punctuation",
						children: ";"
					}),
					"\n"
				]
			})
		}),
		"\n",
		eB(n.p, { children: [
			"除 ",
			eO(n.code, { children: "styled" }),
			" 外，我们还可以使用 ",
			eO(n.code, { children: "Box" }),
			" 进行快速样式定义, 通过 ",
			eO(n.code, { children: "sx" }),
			" prop。 并且 ",
			eO(n.code, { children: "component" }),
			" prop 支持我们随时切换 tag 或者\n组件，并且其他 props 会随着不同的 component 切换对应 props 类型约束与提示。"
		] }),
		"\n",
		eO(n.p, { children: "同样的，通过 styled 创建的组件也有一样的特性。" }),
		"\n",
		eB(n.div, {
			"data-example": "",
			children: [eO(n.div, {
				"data-example-container": "",
				children: eO(n.codeblock785f3ec7, {})
			}), eO(n.pre, {
				className: "language-tsx",
				children: eB(n.code, {
					className: "language-tsx",
					children: [
						eO(n.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						eB(n.span, {
							className: "token imports",
							children: [
								eO(n.span, {
									className: "token punctuation",
									children: "{"
								}),
								" component ",
								eO(n.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						eO(n.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						eO(n.span, {
							className: "token string",
							children: "\"@innoai-tech/vuekit\""
						}),
						eO(n.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						eO(n.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						eB(n.span, {
							className: "token imports",
							children: [
								eO(n.span, {
									className: "token punctuation",
									children: "{"
								}),
								" ",
								eO(n.span, {
									className: "token maybe-class-name",
									children: "Box"
								}),
								" ",
								eO(n.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						eO(n.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						eO(n.span, {
							className: "token string",
							children: "\"@innoai-tech/vueuikit\""
						}),
						eO(n.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n",
						eO(n.span, {
							className: "token keyword module",
							children: "export"
						}),
						" ",
						eO(n.span, {
							className: "token keyword module",
							children: "default"
						}),
						" ",
						eO(n.span, {
							className: "token function",
							children: "component"
						}),
						eO(n.span, {
							className: "token punctuation",
							children: "("
						}),
						eO(n.span, {
							className: "token punctuation",
							children: "("
						}),
						eO(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						eO(n.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						eO(n.span, {
							className: "token punctuation",
							children: "("
						}),
						eO(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						eO(n.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						eO(n.span, {
							className: "token punctuation",
							children: "("
						}),
						"\n  ",
						eB(n.span, {
							className: "token tag",
							children: [
								eB(n.span, {
									className: "token tag",
									children: [eO(n.span, {
										className: "token punctuation",
										children: "<"
									}), eO(n.span, {
										className: "token class-name",
										children: "Box"
									})]
								}),
								" ",
								eO(n.span, {
									className: "token attr-name",
									children: "sx"
								}),
								eB(n.span, {
									className: "token script language-javascript",
									children: [
										eO(n.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										eO(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										eO(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										" display",
										eO(n.span, {
											className: "token operator",
											children: ":"
										}),
										" ",
										eO(n.span, {
											className: "token string",
											children: "\"flex\""
										}),
										eO(n.span, {
											className: "token punctuation",
											children: ","
										}),
										" padding",
										eO(n.span, {
											className: "token operator",
											children: ":"
										}),
										" ",
										eO(n.span, {
											className: "token number",
											children: "10"
										}),
										eO(n.span, {
											className: "token punctuation",
											children: ","
										}),
										" containerStyle",
										eO(n.span, {
											className: "token operator",
											children: ":"
										}),
										" ",
										eO(n.span, {
											className: "token string",
											children: "\"sys.primary\""
										}),
										" ",
										eO(n.span, {
											className: "token punctuation",
											children: "}"
										}),
										eO(n.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								eO(n.span, {
									className: "token punctuation",
									children: ">"
								})
							]
						}),
						eO(n.span, {
							className: "token plain-text",
							children: "\n    "
						}),
						eB(n.span, {
							className: "token tag",
							children: [
								eB(n.span, {
									className: "token tag",
									children: [eO(n.span, {
										className: "token punctuation",
										children: "<"
									}), eO(n.span, {
										className: "token class-name",
										children: "Box"
									})]
								}),
								" ",
								eO(n.span, {
									className: "token attr-name",
									children: "sx"
								}),
								eB(n.span, {
									className: "token script language-javascript",
									children: [
										eO(n.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										eO(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										eO(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										" containerStyle",
										eO(n.span, {
											className: "token operator",
											children: ":"
										}),
										" ",
										eO(n.span, {
											className: "token string",
											children: "\"sys.surface-container\""
										}),
										" ",
										eO(n.span, {
											className: "token punctuation",
											children: "}"
										}),
										eO(n.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								" ",
								eO(n.span, {
									className: "token attr-name",
									children: "component"
								}),
								eB(n.span, {
									className: "token script language-javascript",
									children: [
										eO(n.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										eO(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										eO(n.span, {
											className: "token string",
											children: "\"button\""
										}),
										eO(n.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								eO(n.span, {
									className: "token punctuation",
									children: ">"
								})
							]
						}),
						eO(n.span, {
							className: "token plain-text",
							children: "\n      Hi 111\n    "
						}),
						eB(n.span, {
							className: "token tag",
							children: [eB(n.span, {
								className: "token tag",
								children: [eO(n.span, {
									className: "token punctuation",
									children: "</"
								}), eO(n.span, {
									className: "token class-name",
									children: "Box"
								})]
							}), eO(n.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						eO(n.span, {
							className: "token plain-text",
							children: "\n  "
						}),
						eB(n.span, {
							className: "token tag",
							children: [eB(n.span, {
								className: "token tag",
								children: [eO(n.span, {
									className: "token punctuation",
									children: "</"
								}), eO(n.span, {
									className: "token class-name",
									children: "Box"
								})]
							}), eO(n.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						"\n",
						eO(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						eO(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						eO(n.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n"
					]
				})
			})]
		}),
		"\n",
		eO(n.h3, { children: "CSS Selector 简写规则" }),
		"\n",
		eB(n.p, { children: [
			"另外，为了简化 ",
			eO(n.code, { children: "\"&:hover\"" }),
			" ",
			eO(n.code, { children: "&[aria-current='page']" }),
			" 等选择器声明，\n提供的如下的简化规则："
		] }),
		"\n",
		eB(n.ul, { children: [
			"\n",
			eB(n.li, { children: [
				"所有名称支持 ",
				eO(n.em, { children: "下划线命名" }),
				" 或者 ",
				eO(n.em, { children: "驼峰命名" }),
				"，最终都将转换为 ",
				eO(n.em, { children: "短横小写命名" }),
				", ",
				eO(n.code, { children: "=" }),
				" 用 ",
				eO(n.code, { children: "__" }),
				" 替代"
			] }),
			"\n",
			eB(n.li, { children: [
				eO(n.code, { children: "_*" }),
				" 一般表示",
				eO(n.strong, { children: "状态" }),
				"，可用值",
				"\n",
				eB(n.ul, { children: [
					"\n",
					eB(n.li, { children: [
						eO(n.code, { children: "data-*" }),
						" 和 ",
						eO(n.code, { children: "aria-*" }),
						", `",
						"\n",
						eB(n.ul, { children: [
							"\n",
							eB(n.li, { children: [
								"如 ",
								eO(n.code, { children: "_aria_current__page" }),
								"： 等效为 ",
								eO(n.code, { children: "&[aria-current='page']" }),
								","
							] }),
							"\n"
						] }),
						"\n"
					] }),
					"\n",
					eB(n.li, { children: [
						eO(n.code, { children: "before" }),
						"，",
						eO(n.code, { children: "after" }),
						" 等",
						eO(n.a, {
							href: "https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-elements",
							children: "伪元素"
						}),
						", 需要声明 \"$\" 表示为元素",
						"\n",
						eB(n.ul, { children: [
							"\n",
							eB(n.li, { children: [
								"如 ",
								eO(n.code, { children: "_$before" }),
								"： 等效为 ",
								eO(n.code, { children: "&::before" })
							] }),
							"\n"
						] }),
						"\n"
					] }),
					"\n",
					eB(n.li, { children: [
						eO(n.code, { children: "hover" }),
						", ",
						eO(n.code, { children: "focus" }),
						", ",
						eO(n.code, { children: "active" }),
						", ",
						eO(n.code, { children: "disabled" }),
						" 等",
						eO(n.a, {
							href: "https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-classes",
							children: "伪类"
						}),
						"\n",
						eB(n.ul, { children: [
							"\n",
							eB(n.li, { children: [
								"如 ",
								eO(n.code, { children: "_hover" }),
								"： 等效为 ",
								eO(n.code, { children: "&:hover, &.hover, &[data-hover]:not([data-hover='false'])" }),
								","
							] }),
							"\n"
						] }),
						"\n"
					] }),
					"\n",
					eB(n.li, { children: [
						"以及其他自定义状态",
						"\n",
						eB(n.ul, { children: [
							"\n",
							eB(n.li, { children: [
								"如 ",
								eO(n.code, { children: "_has_icon" }),
								"： 等效为 ",
								eO(n.code, { children: "&[data-has-icon]:not([data-has-icon='false'])" })
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
			eB(n.li, { children: [
				eO(n.code, { children: "$*" }),
				" 或 ",
				eO(n.code, { children: "*$" }),
				"，一般指代",
				eO(n.strong, { children: "元素节点" }),
				", 可用值为",
				"\n",
				eB(n.ul, { children: [
					"\n",
					eB(n.li, { children: [
						eO(n.code, { children: "data-*" }),
						" 和 ",
						eO(n.code, { children: "aria-*" }),
						", `",
						"\n",
						eB(n.ul, { children: [
							"\n",
							eB(n.li, { children: [
								"如 ",
								eO(n.code, { children: "$data_icon" }),
								"： 等效为 ",
								eO(n.code, { children: "&[data-icon]" })
							] }),
							"\n",
							eB(n.li, { children: [
								"如 ",
								eO(n.code, { children: "$data_popper_arrow" }),
								"： 等效为 ",
								eO(n.code, { children: "&[data-popper-arrow]" })
							] }),
							"\n",
							eB(n.li, { children: [
								"如 ",
								eO(n.code, { children: "data_popper_placement__right$" }),
								"： 等效为 ",
								eO(n.code, { children: "[data-popper-placement=right] &" })
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
function tq(e = {}) {
	let { wrapper: n } = e.components || {};
	return n ? eO(n, {
		...e,
		children: eO(tU, { ...e })
	}) : tU(e);
}
var tG = eF(() => () => eT(tq, { components: {
	codeblock4a44dc15: tz,
	codeblock785f3ec7: tW
} })), tY = s(() => {
	let e = eE(!1), n = tD({ apply({ elements: e, rects: n }) {
		Object.assign(e.floating.style, { width: `${n.reference.width}px` });
	} });
	return () => eO(tB, {
		isOpen: e.value,
		onClickOutside: () => e.value = !1,
		placement: "bottom-start",
		modifiers: [n],
		$content: eB(tp, {
			sx: { containerStyle: "sys.on-surface" },
			children: [
				"Popper ",
				`${e.value}`,
				"!"
			]
		}),
		children: eO(tp, {
			sx: { p: 4 },
			component: "button",
			onClick: () => e.value = !e.value,
			children: "Click Trigger Popper"
		})
	});
}), tK = s(() => {
	let e = eE(!1);
	return () => eO(tB, {
		isOpen: e.value,
		$content: eO(tp, {
			sx: { containerStyle: "sys.on-surface" },
			children: "Popper Content!"
		}),
		children: eO(tp, {
			component: "button",
			sx: { p: 4 },
			onMouseover: () => e.value = !0,
			onMouseout: () => e.value = !1,
			children: "Popper Trigger"
		})
	});
});
let tX = ad({
	from: { opacity: 0 },
	to: { opacity: 1 },
	duration: au.duration.md1,
	easing: au.easing.standard.accelerate
}, {
	from: { opacity: 1 },
	to: { opacity: 0 },
	duration: au.duration.sm4,
	easing: au.easing.standard.decelerate
});
var tJ = s(() => {
	let e = eE(!0);
	return () => eO(tB, {
		isOpen: e.value,
		$transition: ({ content: e }) => eO(tX, { children: e }),
		$content: eB(tp, {
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
		children: eO(tp, {
			sx: { p: 4 },
			component: "button",
			onMouseover: () => e.value = !0,
			onMouseout: () => e.value = !1,
			children: "Animated Popper"
		})
	});
});
function tZ(e) {
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
	return eB(e2, { children: [
		eO(n.h2, { children: "Normal Popper" }),
		"\n",
		eB(n.div, {
			"data-example": "",
			children: [eO(n.div, {
				"data-example-container": "",
				children: eO(n.codeblockd4735e3a, {})
			}), eO(n.pre, {
				className: "language-tsx",
				children: eB(n.code, {
					className: "language-tsx",
					children: [
						eO(n.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						eB(n.span, {
							className: "token imports",
							children: [
								eO(n.span, {
									className: "token punctuation",
									children: "{"
								}),
								" component ",
								eO(n.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						eO(n.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						eO(n.span, {
							className: "token string",
							children: "\"@innoai-tech/vuekit\""
						}),
						eO(n.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						eO(n.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						eB(n.span, {
							className: "token imports",
							children: [
								eO(n.span, {
									className: "token punctuation",
									children: "{"
								}),
								" ",
								eO(n.span, {
									className: "token maybe-class-name",
									children: "Box"
								}),
								eO(n.span, {
									className: "token punctuation",
									children: ","
								}),
								" ",
								eO(n.span, {
									className: "token maybe-class-name",
									children: "Popper"
								}),
								" ",
								eO(n.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						eO(n.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						eO(n.span, {
							className: "token string",
							children: "\"@innoai-tech/vueuikit\""
						}),
						eO(n.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						eO(n.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						eB(n.span, {
							className: "token imports",
							children: [
								eO(n.span, {
									className: "token punctuation",
									children: "{"
								}),
								" size ",
								eO(n.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						eO(n.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						eO(n.span, {
							className: "token string",
							children: "\"@floating-ui/dom\""
						}),
						eO(n.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						eO(n.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						eB(n.span, {
							className: "token imports",
							children: [
								eO(n.span, {
									className: "token punctuation",
									children: "{"
								}),
								" ref ",
								eO(n.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						eO(n.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						eO(n.span, {
							className: "token string",
							children: "\"vue\""
						}),
						eO(n.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n",
						eO(n.span, {
							className: "token keyword module",
							children: "export"
						}),
						" ",
						eO(n.span, {
							className: "token keyword module",
							children: "default"
						}),
						" ",
						eO(n.span, {
							className: "token function",
							children: "component"
						}),
						eO(n.span, {
							className: "token punctuation",
							children: "("
						}),
						eO(n.span, {
							className: "token punctuation",
							children: "("
						}),
						eO(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						eO(n.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						eO(n.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n  ",
						eO(n.span, {
							className: "token keyword",
							children: "const"
						}),
						" isOpen ",
						eO(n.span, {
							className: "token operator",
							children: "="
						}),
						" ",
						eO(n.span, {
							className: "token function",
							children: "ref"
						}),
						eO(n.span, {
							className: "token punctuation",
							children: "("
						}),
						eO(n.span, {
							className: "token boolean",
							children: "false"
						}),
						eO(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						eO(n.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n  ",
						eO(n.span, {
							className: "token keyword",
							children: "const"
						}),
						" sameWidth ",
						eO(n.span, {
							className: "token operator",
							children: "="
						}),
						" ",
						eO(n.span, {
							className: "token function",
							children: "size"
						}),
						eO(n.span, {
							className: "token punctuation",
							children: "("
						}),
						eO(n.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n    ",
						eO(n.span, {
							className: "token function",
							children: "apply"
						}),
						eO(n.span, {
							className: "token punctuation",
							children: "("
						}),
						eO(n.span, {
							className: "token punctuation",
							children: "{"
						}),
						" elements",
						eO(n.span, {
							className: "token punctuation",
							children: ","
						}),
						" rects ",
						eO(n.span, {
							className: "token punctuation",
							children: "}"
						}),
						eO(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						eO(n.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n      ",
						eO(n.span, {
							className: "token known-class-name class-name",
							children: "Object"
						}),
						eO(n.span, {
							className: "token punctuation",
							children: "."
						}),
						eO(n.span, {
							className: "token method function property-access",
							children: "assign"
						}),
						eO(n.span, {
							className: "token punctuation",
							children: "("
						}),
						"elements",
						eO(n.span, {
							className: "token punctuation",
							children: "."
						}),
						eO(n.span, {
							className: "token property-access",
							children: "floating"
						}),
						eO(n.span, {
							className: "token punctuation",
							children: "."
						}),
						eO(n.span, {
							className: "token property-access",
							children: "style"
						}),
						eO(n.span, {
							className: "token punctuation",
							children: ","
						}),
						" ",
						eO(n.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n        width",
						eO(n.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						eB(n.span, {
							className: "token template-string",
							children: [
								eO(n.span, {
									className: "token template-punctuation string",
									children: "`"
								}),
								eB(n.span, {
									className: "token interpolation",
									children: [
										eO(n.span, {
											className: "token interpolation-punctuation punctuation",
											children: "${"
										}),
										"rects",
										eO(n.span, {
											className: "token punctuation",
											children: "."
										}),
										eO(n.span, {
											className: "token property-access",
											children: "reference"
										}),
										eO(n.span, {
											className: "token punctuation",
											children: "."
										}),
										eO(n.span, {
											className: "token property-access",
											children: "width"
										}),
										eO(n.span, {
											className: "token interpolation-punctuation punctuation",
											children: "}"
										})
									]
								}),
								eO(n.span, {
									className: "token string",
									children: "px"
								}),
								eO(n.span, {
									className: "token template-punctuation string",
									children: "`"
								})
							]
						}),
						eO(n.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n      ",
						eO(n.span, {
							className: "token punctuation",
							children: "}"
						}),
						eO(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						eO(n.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n    ",
						eO(n.span, {
							className: "token punctuation",
							children: "}"
						}),
						eO(n.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n  ",
						eO(n.span, {
							className: "token punctuation",
							children: "}"
						}),
						eO(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						eO(n.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n  ",
						eO(n.span, {
							className: "token keyword control-flow",
							children: "return"
						}),
						" ",
						eO(n.span, {
							className: "token punctuation",
							children: "("
						}),
						eO(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						eO(n.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						eO(n.span, {
							className: "token punctuation",
							children: "("
						}),
						"\n    ",
						eB(n.span, {
							className: "token tag",
							children: [
								eB(n.span, {
									className: "token tag",
									children: [eO(n.span, {
										className: "token punctuation",
										children: "<"
									}), eO(n.span, {
										className: "token class-name",
										children: "Popper"
									})]
								}),
								"\n      ",
								eO(n.span, {
									className: "token attr-name",
									children: "isOpen"
								}),
								eB(n.span, {
									className: "token script language-javascript",
									children: [
										eO(n.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										eO(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										"isOpen",
										eO(n.span, {
											className: "token punctuation",
											children: "."
										}),
										eO(n.span, {
											className: "token property-access",
											children: "value"
										}),
										eO(n.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n      ",
								eO(n.span, {
									className: "token attr-name",
									children: "onClickOutside"
								}),
								eB(n.span, {
									className: "token script language-javascript",
									children: [
										eO(n.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										eO(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										eO(n.span, {
											className: "token punctuation",
											children: "("
										}),
										eO(n.span, {
											className: "token punctuation",
											children: ")"
										}),
										" ",
										eO(n.span, {
											className: "token arrow operator",
											children: "=>"
										}),
										" ",
										eO(n.span, {
											className: "token punctuation",
											children: "("
										}),
										"isOpen",
										eO(n.span, {
											className: "token punctuation",
											children: "."
										}),
										eO(n.span, {
											className: "token property-access",
											children: "value"
										}),
										" ",
										eO(n.span, {
											className: "token operator",
											children: "="
										}),
										" ",
										eO(n.span, {
											className: "token boolean",
											children: "false"
										}),
										eO(n.span, {
											className: "token punctuation",
											children: ")"
										}),
										eO(n.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n      ",
								eO(n.span, {
									className: "token attr-name",
									children: "placement"
								}),
								eB(n.span, {
									className: "token script language-javascript",
									children: [
										eO(n.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										eO(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										eO(n.span, {
											className: "token string",
											children: "\"bottom-start\""
										}),
										eO(n.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n      ",
								eO(n.span, {
									className: "token attr-name",
									children: "modifiers"
								}),
								eB(n.span, {
									className: "token script language-javascript",
									children: [
										eO(n.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										eO(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										eO(n.span, {
											className: "token punctuation",
											children: "["
										}),
										"sameWidth",
										eO(n.span, {
											className: "token punctuation",
											children: "]"
										}),
										eO(n.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n      ",
								eO(n.span, {
									className: "token attr-name",
									children: "$content"
								}),
								eB(n.span, {
									className: "token script language-javascript",
									children: [
										eO(n.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										eO(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										"\n        ",
										eB(n.span, {
											className: "token tag",
											children: [
												eB(n.span, {
													className: "token tag",
													children: [eO(n.span, {
														className: "token punctuation",
														children: "<"
													}), eO(n.span, {
														className: "token class-name",
														children: "Box"
													})]
												}),
												" ",
												eO(n.span, {
													className: "token attr-name",
													children: "sx"
												}),
												eB(n.span, {
													className: "token script language-javascript",
													children: [
														eO(n.span, {
															className: "token script-punctuation punctuation",
															children: "="
														}),
														eO(n.span, {
															className: "token punctuation",
															children: "{"
														}),
														eO(n.span, {
															className: "token punctuation",
															children: "{"
														}),
														" containerStyle",
														eO(n.span, {
															className: "token operator",
															children: ":"
														}),
														" ",
														eO(n.span, {
															className: "token string",
															children: "\"sys.on-surface\""
														}),
														" ",
														eO(n.span, {
															className: "token punctuation",
															children: "}"
														}),
														eO(n.span, {
															className: "token punctuation",
															children: "}"
														})
													]
												}),
												eO(n.span, {
													className: "token punctuation",
													children: ">"
												})
											]
										}),
										eO(n.span, {
											className: "token plain-text",
											children: "\n          Popper "
										}),
										eO(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										eB(n.span, {
											className: "token template-string",
											children: [
												eO(n.span, {
													className: "token template-punctuation string",
													children: "`"
												}),
												eB(n.span, {
													className: "token interpolation",
													children: [
														eO(n.span, {
															className: "token interpolation-punctuation punctuation",
															children: "${"
														}),
														"isOpen",
														eO(n.span, {
															className: "token punctuation",
															children: "."
														}),
														eO(n.span, {
															className: "token property-access",
															children: "value"
														}),
														eO(n.span, {
															className: "token interpolation-punctuation punctuation",
															children: "}"
														})
													]
												}),
												eO(n.span, {
													className: "token template-punctuation string",
													children: "`"
												})
											]
										}),
										eO(n.span, {
											className: "token punctuation",
											children: "}"
										}),
										eO(n.span, {
											className: "token plain-text",
											children: "!\n        "
										}),
										eB(n.span, {
											className: "token tag",
											children: [eB(n.span, {
												className: "token tag",
												children: [eO(n.span, {
													className: "token punctuation",
													children: "</"
												}), eO(n.span, {
													className: "token class-name",
													children: "Box"
												})]
											}), eO(n.span, {
												className: "token punctuation",
												children: ">"
											})]
										}),
										"\n      ",
										eO(n.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n    ",
								eO(n.span, {
									className: "token punctuation",
									children: ">"
								})
							]
						}),
						eO(n.span, {
							className: "token plain-text",
							children: "\n      "
						}),
						eB(n.span, {
							className: "token tag",
							children: [
								eB(n.span, {
									className: "token tag",
									children: [eO(n.span, {
										className: "token punctuation",
										children: "<"
									}), eO(n.span, {
										className: "token class-name",
										children: "Box"
									})]
								}),
								"\n        ",
								eO(n.span, {
									className: "token attr-name",
									children: "sx"
								}),
								eB(n.span, {
									className: "token script language-javascript",
									children: [
										eO(n.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										eO(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										eO(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										" p",
										eO(n.span, {
											className: "token operator",
											children: ":"
										}),
										" ",
										eO(n.span, {
											className: "token number",
											children: "4"
										}),
										" ",
										eO(n.span, {
											className: "token punctuation",
											children: "}"
										}),
										eO(n.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n        ",
								eO(n.span, {
									className: "token attr-name",
									children: "component"
								}),
								eB(n.span, {
									className: "token script language-javascript",
									children: [
										eO(n.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										eO(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										eO(n.span, {
											className: "token string",
											children: "\"button\""
										}),
										eO(n.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n        ",
								eO(n.span, {
									className: "token attr-name",
									children: "onClick"
								}),
								eB(n.span, {
									className: "token script language-javascript",
									children: [
										eO(n.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										eO(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										eO(n.span, {
											className: "token punctuation",
											children: "("
										}),
										eO(n.span, {
											className: "token punctuation",
											children: ")"
										}),
										" ",
										eO(n.span, {
											className: "token arrow operator",
											children: "=>"
										}),
										" ",
										eO(n.span, {
											className: "token punctuation",
											children: "("
										}),
										"isOpen",
										eO(n.span, {
											className: "token punctuation",
											children: "."
										}),
										eO(n.span, {
											className: "token property-access",
											children: "value"
										}),
										" ",
										eO(n.span, {
											className: "token operator",
											children: "="
										}),
										" ",
										eO(n.span, {
											className: "token operator",
											children: "!"
										}),
										"isOpen",
										eO(n.span, {
											className: "token punctuation",
											children: "."
										}),
										eO(n.span, {
											className: "token property-access",
											children: "value"
										}),
										eO(n.span, {
											className: "token punctuation",
											children: ")"
										}),
										eO(n.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n      ",
								eO(n.span, {
									className: "token punctuation",
									children: ">"
								})
							]
						}),
						eO(n.span, {
							className: "token plain-text",
							children: "\n        Click Trigger Popper\n      "
						}),
						eB(n.span, {
							className: "token tag",
							children: [eB(n.span, {
								className: "token tag",
								children: [eO(n.span, {
									className: "token punctuation",
									children: "</"
								}), eO(n.span, {
									className: "token class-name",
									children: "Box"
								})]
							}), eO(n.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						eO(n.span, {
							className: "token plain-text",
							children: "\n    "
						}),
						eB(n.span, {
							className: "token tag",
							children: [eB(n.span, {
								className: "token tag",
								children: [eO(n.span, {
									className: "token punctuation",
									children: "</"
								}), eO(n.span, {
									className: "token class-name",
									children: "Popper"
								})]
							}), eO(n.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						"\n  ",
						eO(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						eO(n.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						eO(n.span, {
							className: "token punctuation",
							children: "}"
						}),
						eO(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						eO(n.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n"
					]
				})
			})]
		}),
		"\n",
		eO(n.h2, { children: "Hovered Popper" }),
		"\n",
		eB(n.div, {
			"data-example": "",
			children: [eO(n.div, {
				"data-example-container": "",
				children: eO(n.codeblocke7f6c011, {})
			}), eO(n.pre, {
				className: "language-tsx",
				children: eB(n.code, {
					className: "language-tsx",
					children: [
						eO(n.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						eB(n.span, {
							className: "token imports",
							children: [
								eO(n.span, {
									className: "token punctuation",
									children: "{"
								}),
								" ref ",
								eO(n.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						eO(n.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						eO(n.span, {
							className: "token string",
							children: "\"vue\""
						}),
						eO(n.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						eO(n.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						eB(n.span, {
							className: "token imports",
							children: [
								eO(n.span, {
									className: "token punctuation",
									children: "{"
								}),
								" component ",
								eO(n.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						eO(n.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						eO(n.span, {
							className: "token string",
							children: "\"@innoai-tech/vuekit\""
						}),
						eO(n.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						eO(n.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						eB(n.span, {
							className: "token imports",
							children: [
								eO(n.span, {
									className: "token punctuation",
									children: "{"
								}),
								" ",
								eO(n.span, {
									className: "token maybe-class-name",
									children: "Box"
								}),
								eO(n.span, {
									className: "token punctuation",
									children: ","
								}),
								" ",
								eO(n.span, {
									className: "token maybe-class-name",
									children: "Popper"
								}),
								" ",
								eO(n.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						eO(n.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						eO(n.span, {
							className: "token string",
							children: "\"@innoai-tech/vueuikit\""
						}),
						eO(n.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n",
						eO(n.span, {
							className: "token keyword module",
							children: "export"
						}),
						" ",
						eO(n.span, {
							className: "token keyword module",
							children: "default"
						}),
						" ",
						eO(n.span, {
							className: "token function",
							children: "component"
						}),
						eO(n.span, {
							className: "token punctuation",
							children: "("
						}),
						eO(n.span, {
							className: "token punctuation",
							children: "("
						}),
						eO(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						eO(n.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						eO(n.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n  ",
						eO(n.span, {
							className: "token keyword",
							children: "const"
						}),
						" isOpen ",
						eO(n.span, {
							className: "token operator",
							children: "="
						}),
						" ",
						eO(n.span, {
							className: "token function",
							children: "ref"
						}),
						eO(n.span, {
							className: "token punctuation",
							children: "("
						}),
						eO(n.span, {
							className: "token boolean",
							children: "false"
						}),
						eO(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						eO(n.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n  ",
						eO(n.span, {
							className: "token keyword control-flow",
							children: "return"
						}),
						" ",
						eO(n.span, {
							className: "token punctuation",
							children: "("
						}),
						eO(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						eO(n.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						eO(n.span, {
							className: "token punctuation",
							children: "("
						}),
						"\n    ",
						eB(n.span, {
							className: "token tag",
							children: [
								eB(n.span, {
									className: "token tag",
									children: [eO(n.span, {
										className: "token punctuation",
										children: "<"
									}), eO(n.span, {
										className: "token class-name",
										children: "Popper"
									})]
								}),
								"\n      ",
								eO(n.span, {
									className: "token attr-name",
									children: "isOpen"
								}),
								eB(n.span, {
									className: "token script language-javascript",
									children: [
										eO(n.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										eO(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										"isOpen",
										eO(n.span, {
											className: "token punctuation",
											children: "."
										}),
										eO(n.span, {
											className: "token property-access",
											children: "value"
										}),
										eO(n.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n      ",
								eO(n.span, {
									className: "token attr-name",
									children: "$content"
								}),
								eB(n.span, {
									className: "token script language-javascript",
									children: [
										eO(n.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										eO(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										"\n        ",
										eB(n.span, {
											className: "token tag",
											children: [
												eB(n.span, {
													className: "token tag",
													children: [eO(n.span, {
														className: "token punctuation",
														children: "<"
													}), eO(n.span, {
														className: "token class-name",
														children: "Box"
													})]
												}),
												" ",
												eO(n.span, {
													className: "token attr-name",
													children: "sx"
												}),
												eB(n.span, {
													className: "token script language-javascript",
													children: [
														eO(n.span, {
															className: "token script-punctuation punctuation",
															children: "="
														}),
														eO(n.span, {
															className: "token punctuation",
															children: "{"
														}),
														eO(n.span, {
															className: "token punctuation",
															children: "{"
														}),
														" containerStyle",
														eO(n.span, {
															className: "token operator",
															children: ":"
														}),
														" ",
														eO(n.span, {
															className: "token string",
															children: "\"sys.on-surface\""
														}),
														" ",
														eO(n.span, {
															className: "token punctuation",
															children: "}"
														}),
														eO(n.span, {
															className: "token punctuation",
															children: "}"
														})
													]
												}),
												eO(n.span, {
													className: "token punctuation",
													children: ">"
												})
											]
										}),
										eO(n.span, {
											className: "token plain-text",
											children: "Popper Content!"
										}),
										eB(n.span, {
											className: "token tag",
											children: [eB(n.span, {
												className: "token tag",
												children: [eO(n.span, {
													className: "token punctuation",
													children: "</"
												}), eO(n.span, {
													className: "token class-name",
													children: "Box"
												})]
											}), eO(n.span, {
												className: "token punctuation",
												children: ">"
											})]
										}),
										"\n      ",
										eO(n.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n    ",
								eO(n.span, {
									className: "token punctuation",
									children: ">"
								})
							]
						}),
						eO(n.span, {
							className: "token plain-text",
							children: "\n      "
						}),
						eB(n.span, {
							className: "token tag",
							children: [
								eB(n.span, {
									className: "token tag",
									children: [eO(n.span, {
										className: "token punctuation",
										children: "<"
									}), eO(n.span, {
										className: "token class-name",
										children: "Box"
									})]
								}),
								"\n        ",
								eO(n.span, {
									className: "token attr-name",
									children: "component"
								}),
								eB(n.span, {
									className: "token script language-javascript",
									children: [
										eO(n.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										eO(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										eO(n.span, {
											className: "token string",
											children: "\"button\""
										}),
										eO(n.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n        ",
								eO(n.span, {
									className: "token attr-name",
									children: "sx"
								}),
								eB(n.span, {
									className: "token script language-javascript",
									children: [
										eO(n.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										eO(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										eO(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										" p",
										eO(n.span, {
											className: "token operator",
											children: ":"
										}),
										" ",
										eO(n.span, {
											className: "token number",
											children: "4"
										}),
										" ",
										eO(n.span, {
											className: "token punctuation",
											children: "}"
										}),
										eO(n.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n        ",
								eO(n.span, {
									className: "token attr-name",
									children: "onMouseover"
								}),
								eB(n.span, {
									className: "token script language-javascript",
									children: [
										eO(n.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										eO(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										eO(n.span, {
											className: "token punctuation",
											children: "("
										}),
										eO(n.span, {
											className: "token punctuation",
											children: ")"
										}),
										" ",
										eO(n.span, {
											className: "token arrow operator",
											children: "=>"
										}),
										" ",
										eO(n.span, {
											className: "token punctuation",
											children: "("
										}),
										"isOpen",
										eO(n.span, {
											className: "token punctuation",
											children: "."
										}),
										eO(n.span, {
											className: "token property-access",
											children: "value"
										}),
										" ",
										eO(n.span, {
											className: "token operator",
											children: "="
										}),
										" ",
										eO(n.span, {
											className: "token boolean",
											children: "true"
										}),
										eO(n.span, {
											className: "token punctuation",
											children: ")"
										}),
										eO(n.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n        ",
								eO(n.span, {
									className: "token attr-name",
									children: "onMouseout"
								}),
								eB(n.span, {
									className: "token script language-javascript",
									children: [
										eO(n.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										eO(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										eO(n.span, {
											className: "token punctuation",
											children: "("
										}),
										eO(n.span, {
											className: "token punctuation",
											children: ")"
										}),
										" ",
										eO(n.span, {
											className: "token arrow operator",
											children: "=>"
										}),
										" ",
										eO(n.span, {
											className: "token punctuation",
											children: "("
										}),
										"isOpen",
										eO(n.span, {
											className: "token punctuation",
											children: "."
										}),
										eO(n.span, {
											className: "token property-access",
											children: "value"
										}),
										" ",
										eO(n.span, {
											className: "token operator",
											children: "="
										}),
										" ",
										eO(n.span, {
											className: "token boolean",
											children: "false"
										}),
										eO(n.span, {
											className: "token punctuation",
											children: ")"
										}),
										eO(n.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n      ",
								eO(n.span, {
									className: "token punctuation",
									children: ">"
								})
							]
						}),
						eO(n.span, {
							className: "token plain-text",
							children: "\n        Popper Trigger\n      "
						}),
						eB(n.span, {
							className: "token tag",
							children: [eB(n.span, {
								className: "token tag",
								children: [eO(n.span, {
									className: "token punctuation",
									children: "</"
								}), eO(n.span, {
									className: "token class-name",
									children: "Box"
								})]
							}), eO(n.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						eO(n.span, {
							className: "token plain-text",
							children: "\n    "
						}),
						eB(n.span, {
							className: "token tag",
							children: [eB(n.span, {
								className: "token tag",
								children: [eO(n.span, {
									className: "token punctuation",
									children: "</"
								}), eO(n.span, {
									className: "token class-name",
									children: "Popper"
								})]
							}), eO(n.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						"\n  ",
						eO(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						eO(n.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						eO(n.span, {
							className: "token punctuation",
							children: "}"
						}),
						eO(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						eO(n.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n"
					]
				})
			})]
		}),
		"\n",
		eO(n.h2, { children: "Animated" }),
		"\n",
		eB(n.div, {
			"data-example": "",
			children: [eO(n.div, {
				"data-example-container": "",
				children: eO(n.codeblock4a44dc15, {})
			}), eO(n.pre, {
				className: "language-tsx",
				children: eB(n.code, {
					className: "language-tsx",
					children: [
						eO(n.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						eB(n.span, {
							className: "token imports",
							children: [
								eO(n.span, {
									className: "token punctuation",
									children: "{"
								}),
								" ref ",
								eO(n.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						eO(n.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						eO(n.span, {
							className: "token string",
							children: "\"vue\""
						}),
						eO(n.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						eO(n.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						eB(n.span, {
							className: "token imports",
							children: [
								eO(n.span, {
									className: "token punctuation",
									children: "{"
								}),
								" component ",
								eO(n.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						eO(n.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						eO(n.span, {
							className: "token string",
							children: "\"@innoai-tech/vuekit\""
						}),
						eO(n.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						eO(n.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						eB(n.span, {
							className: "token imports",
							children: [
								eO(n.span, {
									className: "token punctuation",
									children: "{"
								}),
								"\n  ",
								eO(n.span, {
									className: "token maybe-class-name",
									children: "Box"
								}),
								eO(n.span, {
									className: "token punctuation",
									children: ","
								}),
								"\n  defineTransition",
								eO(n.span, {
									className: "token punctuation",
									children: ","
								}),
								"\n  ",
								eO(n.span, {
									className: "token maybe-class-name",
									children: "Popper"
								}),
								eO(n.span, {
									className: "token punctuation",
									children: ","
								}),
								"\n  transition",
								eO(n.span, {
									className: "token punctuation",
									children: ","
								}),
								"\n  triangle",
								eO(n.span, {
									className: "token punctuation",
									children: ","
								}),
								"\n",
								eO(n.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						eO(n.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						eO(n.span, {
							className: "token string",
							children: "\"@innoai-tech/vueuikit\""
						}),
						eO(n.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n",
						eO(n.span, {
							className: "token keyword module",
							children: "export"
						}),
						" ",
						eO(n.span, {
							className: "token keyword",
							children: "const"
						}),
						" ",
						eO(n.span, {
							className: "token maybe-class-name",
							children: "FadeInOutTransition"
						}),
						" ",
						eO(n.span, {
							className: "token operator",
							children: "="
						}),
						" ",
						eO(n.span, {
							className: "token function",
							children: "defineTransition"
						}),
						eO(n.span, {
							className: "token punctuation",
							children: "("
						}),
						"\n  ",
						eO(n.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n    ",
						eO(n.span, {
							className: "token keyword module",
							children: "from"
						}),
						eO(n.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						eO(n.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n      opacity",
						eO(n.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						eO(n.span, {
							className: "token number",
							children: "0"
						}),
						eO(n.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n    ",
						eO(n.span, {
							className: "token punctuation",
							children: "}"
						}),
						eO(n.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n    to",
						eO(n.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						eO(n.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n      opacity",
						eO(n.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						eO(n.span, {
							className: "token number",
							children: "1"
						}),
						eO(n.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n    ",
						eO(n.span, {
							className: "token punctuation",
							children: "}"
						}),
						eO(n.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n    duration",
						eO(n.span, {
							className: "token operator",
							children: ":"
						}),
						" transition",
						eO(n.span, {
							className: "token punctuation",
							children: "."
						}),
						eO(n.span, {
							className: "token property-access",
							children: "duration"
						}),
						eO(n.span, {
							className: "token punctuation",
							children: "."
						}),
						eO(n.span, {
							className: "token property-access",
							children: "md1"
						}),
						eO(n.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n    easing",
						eO(n.span, {
							className: "token operator",
							children: ":"
						}),
						" transition",
						eO(n.span, {
							className: "token punctuation",
							children: "."
						}),
						eO(n.span, {
							className: "token property-access",
							children: "easing"
						}),
						eO(n.span, {
							className: "token punctuation",
							children: "."
						}),
						eO(n.span, {
							className: "token property-access",
							children: "standard"
						}),
						eO(n.span, {
							className: "token punctuation",
							children: "."
						}),
						eO(n.span, {
							className: "token property-access",
							children: "accelerate"
						}),
						eO(n.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n  ",
						eO(n.span, {
							className: "token punctuation",
							children: "}"
						}),
						eO(n.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n  ",
						eO(n.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n    ",
						eO(n.span, {
							className: "token keyword module",
							children: "from"
						}),
						eO(n.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						eO(n.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n      opacity",
						eO(n.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						eO(n.span, {
							className: "token number",
							children: "1"
						}),
						eO(n.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n    ",
						eO(n.span, {
							className: "token punctuation",
							children: "}"
						}),
						eO(n.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n    to",
						eO(n.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						eO(n.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n      opacity",
						eO(n.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						eO(n.span, {
							className: "token number",
							children: "0"
						}),
						eO(n.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n    ",
						eO(n.span, {
							className: "token punctuation",
							children: "}"
						}),
						eO(n.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n    duration",
						eO(n.span, {
							className: "token operator",
							children: ":"
						}),
						" transition",
						eO(n.span, {
							className: "token punctuation",
							children: "."
						}),
						eO(n.span, {
							className: "token property-access",
							children: "duration"
						}),
						eO(n.span, {
							className: "token punctuation",
							children: "."
						}),
						eO(n.span, {
							className: "token property-access",
							children: "sm4"
						}),
						eO(n.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n    easing",
						eO(n.span, {
							className: "token operator",
							children: ":"
						}),
						" transition",
						eO(n.span, {
							className: "token punctuation",
							children: "."
						}),
						eO(n.span, {
							className: "token property-access",
							children: "easing"
						}),
						eO(n.span, {
							className: "token punctuation",
							children: "."
						}),
						eO(n.span, {
							className: "token property-access",
							children: "standard"
						}),
						eO(n.span, {
							className: "token punctuation",
							children: "."
						}),
						eO(n.span, {
							className: "token property-access",
							children: "decelerate"
						}),
						eO(n.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n  ",
						eO(n.span, {
							className: "token punctuation",
							children: "}"
						}),
						eO(n.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n",
						eO(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						eO(n.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n",
						eO(n.span, {
							className: "token keyword module",
							children: "export"
						}),
						" ",
						eO(n.span, {
							className: "token keyword module",
							children: "default"
						}),
						" ",
						eO(n.span, {
							className: "token function",
							children: "component"
						}),
						eO(n.span, {
							className: "token punctuation",
							children: "("
						}),
						eO(n.span, {
							className: "token punctuation",
							children: "("
						}),
						eO(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						eO(n.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						eO(n.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n  ",
						eO(n.span, {
							className: "token keyword",
							children: "const"
						}),
						" isOpen ",
						eO(n.span, {
							className: "token operator",
							children: "="
						}),
						" ",
						eO(n.span, {
							className: "token function",
							children: "ref"
						}),
						eO(n.span, {
							className: "token punctuation",
							children: "("
						}),
						eO(n.span, {
							className: "token boolean",
							children: "true"
						}),
						eO(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						eO(n.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n  ",
						eO(n.span, {
							className: "token keyword control-flow",
							children: "return"
						}),
						" ",
						eO(n.span, {
							className: "token punctuation",
							children: "("
						}),
						eO(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						eO(n.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						eO(n.span, {
							className: "token punctuation",
							children: "("
						}),
						"\n    ",
						eB(n.span, {
							className: "token tag",
							children: [
								eB(n.span, {
									className: "token tag",
									children: [eO(n.span, {
										className: "token punctuation",
										children: "<"
									}), eO(n.span, {
										className: "token class-name",
										children: "Popper"
									})]
								}),
								"\n      ",
								eO(n.span, {
									className: "token attr-name",
									children: "isOpen"
								}),
								eB(n.span, {
									className: "token script language-javascript",
									children: [
										eO(n.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										eO(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										"isOpen",
										eO(n.span, {
											className: "token punctuation",
											children: "."
										}),
										eO(n.span, {
											className: "token property-access",
											children: "value"
										}),
										eO(n.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n      ",
								eO(n.span, {
									className: "token attr-name",
									children: "$transition"
								}),
								eB(n.span, {
									className: "token script language-javascript",
									children: [
										eO(n.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										eO(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										eO(n.span, {
											className: "token punctuation",
											children: "("
										}),
										eO(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										" content ",
										eO(n.span, {
											className: "token punctuation",
											children: "}"
										}),
										eO(n.span, {
											className: "token punctuation",
											children: ")"
										}),
										" ",
										eO(n.span, {
											className: "token arrow operator",
											children: "=>"
										}),
										" ",
										eO(n.span, {
											className: "token punctuation",
											children: "("
										}),
										"\n        ",
										eB(n.span, {
											className: "token tag",
											children: [eB(n.span, {
												className: "token tag",
												children: [eO(n.span, {
													className: "token punctuation",
													children: "<"
												}), eO(n.span, {
													className: "token class-name",
													children: "FadeInOutTransition"
												})]
											}), eO(n.span, {
												className: "token punctuation",
												children: ">"
											})]
										}),
										eO(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										"content",
										eO(n.span, {
											className: "token punctuation",
											children: "}"
										}),
										eB(n.span, {
											className: "token tag",
											children: [eB(n.span, {
												className: "token tag",
												children: [eO(n.span, {
													className: "token punctuation",
													children: "</"
												}), eO(n.span, {
													className: "token class-name",
													children: "FadeInOutTransition"
												})]
											}), eO(n.span, {
												className: "token punctuation",
												children: ">"
											})]
										}),
										"\n      ",
										eO(n.span, {
											className: "token punctuation",
											children: ")"
										}),
										eO(n.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n      ",
								eO(n.span, {
									className: "token attr-name",
									children: "$content"
								}),
								eB(n.span, {
									className: "token script language-javascript",
									children: [
										eO(n.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										eO(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										"\n        ",
										eB(n.span, {
											className: "token tag",
											children: [
												eB(n.span, {
													className: "token tag",
													children: [eO(n.span, {
														className: "token punctuation",
														children: "<"
													}), eO(n.span, {
														className: "token class-name",
														children: "Box"
													})]
												}),
												"\n          ",
												eO(n.span, {
													className: "token attr-name",
													children: "sx"
												}),
												eB(n.span, {
													className: "token script language-javascript",
													children: [
														eO(n.span, {
															className: "token script-punctuation punctuation",
															children: "="
														}),
														eO(n.span, {
															className: "token punctuation",
															children: "{"
														}),
														eO(n.span, {
															className: "token punctuation",
															children: "{"
														}),
														"\n            containerStyle",
														eO(n.span, {
															className: "token operator",
															children: ":"
														}),
														" ",
														eO(n.span, {
															className: "token string",
															children: "\"sys.on-surface\""
														}),
														eO(n.span, {
															className: "token punctuation",
															children: ","
														}),
														"\n            shadow",
														eO(n.span, {
															className: "token operator",
															children: ":"
														}),
														" ",
														eO(n.span, {
															className: "token string",
															children: "\"2\""
														}),
														eO(n.span, {
															className: "token punctuation",
															children: ","
														}),
														"\n            py",
														eO(n.span, {
															className: "token operator",
															children: ":"
														}),
														" ",
														eO(n.span, {
															className: "token number",
															children: "2"
														}),
														eO(n.span, {
															className: "token punctuation",
															children: ","
														}),
														"\n            px",
														eO(n.span, {
															className: "token operator",
															children: ":"
														}),
														" ",
														eO(n.span, {
															className: "token number",
															children: "4"
														}),
														eO(n.span, {
															className: "token punctuation",
															children: ","
														}),
														"\n            rounded",
														eO(n.span, {
															className: "token operator",
															children: ":"
														}),
														" ",
														eO(n.span, {
															className: "token string",
															children: "\"sm\""
														}),
														eO(n.span, {
															className: "token punctuation",
															children: ","
														}),
														"\n          ",
														eO(n.span, {
															className: "token punctuation",
															children: "}"
														}),
														eO(n.span, {
															className: "token punctuation",
															children: "}"
														})
													]
												}),
												"\n        ",
												eO(n.span, {
													className: "token punctuation",
													children: ">"
												})
											]
										}),
										eO(n.span, {
											className: "token plain-text",
											children: "\n          Popper "
										}),
										eO(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										eB(n.span, {
											className: "token template-string",
											children: [
												eO(n.span, {
													className: "token template-punctuation string",
													children: "`"
												}),
												eB(n.span, {
													className: "token interpolation",
													children: [
														eO(n.span, {
															className: "token interpolation-punctuation punctuation",
															children: "${"
														}),
														"isOpen",
														eO(n.span, {
															className: "token punctuation",
															children: "."
														}),
														eO(n.span, {
															className: "token property-access",
															children: "value"
														}),
														eO(n.span, {
															className: "token interpolation-punctuation punctuation",
															children: "}"
														})
													]
												}),
												eO(n.span, {
													className: "token template-punctuation string",
													children: "`"
												})
											]
										}),
										eO(n.span, {
											className: "token punctuation",
											children: "}"
										}),
										eO(n.span, {
											className: "token plain-text",
											children: "!\n        "
										}),
										eB(n.span, {
											className: "token tag",
											children: [eB(n.span, {
												className: "token tag",
												children: [eO(n.span, {
													className: "token punctuation",
													children: "</"
												}), eO(n.span, {
													className: "token class-name",
													children: "Box"
												})]
											}), eO(n.span, {
												className: "token punctuation",
												children: ">"
											})]
										}),
										"\n      ",
										eO(n.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n    ",
								eO(n.span, {
									className: "token punctuation",
									children: ">"
								})
							]
						}),
						eO(n.span, {
							className: "token plain-text",
							children: "\n      "
						}),
						eB(n.span, {
							className: "token tag",
							children: [
								eB(n.span, {
									className: "token tag",
									children: [eO(n.span, {
										className: "token punctuation",
										children: "<"
									}), eO(n.span, {
										className: "token class-name",
										children: "Box"
									})]
								}),
								"\n        ",
								eO(n.span, {
									className: "token attr-name",
									children: "sx"
								}),
								eB(n.span, {
									className: "token script language-javascript",
									children: [
										eO(n.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										eO(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										eO(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										" p",
										eO(n.span, {
											className: "token operator",
											children: ":"
										}),
										" ",
										eO(n.span, {
											className: "token number",
											children: "4"
										}),
										" ",
										eO(n.span, {
											className: "token punctuation",
											children: "}"
										}),
										eO(n.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n        ",
								eO(n.span, {
									className: "token attr-name",
									children: "component"
								}),
								eB(n.span, {
									className: "token script language-javascript",
									children: [
										eO(n.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										eO(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										eO(n.span, {
											className: "token string",
											children: "\"button\""
										}),
										eO(n.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n        ",
								eO(n.span, {
									className: "token attr-name",
									children: "onMouseover"
								}),
								eB(n.span, {
									className: "token script language-javascript",
									children: [
										eO(n.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										eO(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										eO(n.span, {
											className: "token punctuation",
											children: "("
										}),
										eO(n.span, {
											className: "token punctuation",
											children: ")"
										}),
										" ",
										eO(n.span, {
											className: "token arrow operator",
											children: "=>"
										}),
										" ",
										eO(n.span, {
											className: "token punctuation",
											children: "("
										}),
										"isOpen",
										eO(n.span, {
											className: "token punctuation",
											children: "."
										}),
										eO(n.span, {
											className: "token property-access",
											children: "value"
										}),
										" ",
										eO(n.span, {
											className: "token operator",
											children: "="
										}),
										" ",
										eO(n.span, {
											className: "token boolean",
											children: "true"
										}),
										eO(n.span, {
											className: "token punctuation",
											children: ")"
										}),
										eO(n.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n        ",
								eO(n.span, {
									className: "token attr-name",
									children: "onMouseout"
								}),
								eB(n.span, {
									className: "token script language-javascript",
									children: [
										eO(n.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										eO(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										eO(n.span, {
											className: "token punctuation",
											children: "("
										}),
										eO(n.span, {
											className: "token punctuation",
											children: ")"
										}),
										" ",
										eO(n.span, {
											className: "token arrow operator",
											children: "=>"
										}),
										" ",
										eO(n.span, {
											className: "token punctuation",
											children: "("
										}),
										"isOpen",
										eO(n.span, {
											className: "token punctuation",
											children: "."
										}),
										eO(n.span, {
											className: "token property-access",
											children: "value"
										}),
										" ",
										eO(n.span, {
											className: "token operator",
											children: "="
										}),
										" ",
										eO(n.span, {
											className: "token boolean",
											children: "false"
										}),
										eO(n.span, {
											className: "token punctuation",
											children: ")"
										}),
										eO(n.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n      ",
								eO(n.span, {
									className: "token punctuation",
									children: ">"
								})
							]
						}),
						eO(n.span, {
							className: "token plain-text",
							children: "\n        Animated Popper\n      "
						}),
						eB(n.span, {
							className: "token tag",
							children: [eB(n.span, {
								className: "token tag",
								children: [eO(n.span, {
									className: "token punctuation",
									children: "</"
								}), eO(n.span, {
									className: "token class-name",
									children: "Box"
								})]
							}), eO(n.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						eO(n.span, {
							className: "token plain-text",
							children: "\n    "
						}),
						eB(n.span, {
							className: "token tag",
							children: [eB(n.span, {
								className: "token tag",
								children: [eO(n.span, {
									className: "token punctuation",
									children: "</"
								}), eO(n.span, {
									className: "token class-name",
									children: "Popper"
								})]
							}), eO(n.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						"\n  ",
						eO(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						eO(n.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						eO(n.span, {
							className: "token punctuation",
							children: "}"
						}),
						eO(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						eO(n.span, {
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
function tQ(e = {}) {
	let { wrapper: n } = e.components || {};
	return n ? eO(n, {
		...e,
		children: eO(tZ, { ...e })
	}) : tZ(e);
}
var t0 = eF(() => () => eT(tQ, { components: {
	codeblockd4735e3a: tY,
	codeblocke7f6c011: tK,
	codeblock4a44dc15: tJ
} })), t1 = s(() => {
	let e = a9.use();
	return () => eO(e2, { children: eO(tp, {
		sx: {
			height: "40vh",
			display: "flex",
			flexDirection: "column",
			flexWrap: "wrap",
			justifyContent: "space-between",
			gap: 8
		},
		children: e.token.textStyle.tokens.map((e) => eB(tp, {
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
				eO(tp, {
					sx: { textStyle: "sys.label-small" },
					children: e
				}),
				eO(tp, { sx: { flex: 1 } }),
				eO(tp, {
					sx: { py: 16 },
					children: "中文测试"
				})
			]
		}, e))
	}) });
});
export { ao as C, ar as S, a8 as _, tV as a, au as b, tB as c, th as d, td as f, a9 as g, tc as h, tj as i, tD as l, tp as m, t0 as n, tH as o, tu as p, tG as r, tF as s, t1 as t, tg as u, a2 as v, nV as w, ac as x, ad as y };
