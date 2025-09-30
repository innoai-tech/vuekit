let e;
import { $ as t, $t as r, A as n, At as a, Bt as i, C as o, Ct as s, Dt as l, E as u, Et as c, Ft as f, G as d, Gt as h, H as g, Ht as p, It as m, J as b, Jt as y, K as v, Kt as x, Lt as w, M as C, Mt as k, N as P, Nt as M, Ot as S, Pt as A, Q as _, Qt as T, Rt as R, St as O, T as D, Tt as $, U as I, Ut as L, V as F, Vt as E, W as j, Wt as V, X as B, Xt as H, Y as N, Yt as W, Zt as z, _ as U, _t as q, an as G, at as Y, c as K, cn as X, ct as J, d as Z, dn as Q, dt as ee, en as et, et as er, f as en, fn as ea, ft as ei, g as eo, gt as es, ht as el, i as eu, in as ec, it as ef, jt as ed, kt as eh, ln as eg, lt as ep, m as em, mn as eb, mt as ey, n as ev, nn as ex, o as ew, on as eC, ot as ek, pn as eP, pt as eM, q as eS, qt as eA, rn as e_, rt as eT, s as eR, sn as eO, st as eD, t as e$, tn as eI, tt as eL, u as eF, un as eE, ut as ej, v as eV, vt as eB, xt as eH, yt as eN, zt as eW } from "./lib-nodepkg-vuekit.Dng4O0gc.chunk.js";
import { a as ez } from "./lib-nodepkg-typedef.WoOPnAhr.chunk.js";
var eU, eq, eG, eY, eK, eX, eJ, eZ, eQ, e0, e1, e2, e4, e5, e3, e8 = /\s/, e6 = function(e) {
	for (var t = e.length; t-- && e8.test(e.charAt(t)););
	return t;
}, e9 = /^\s+/, e7 = NaN, te = /^[-+]0x[0-9a-f]+$/i, tt = /^0b[01]+$/i, tr = /^0o[0-7]+$/i, tn = parseInt, ta = function(e) {
	if ("number" == typeof e) return e;
	if (eE(e)) return e7;
	if (eC(e)) {
		var t, r = "function" == typeof e.valueOf ? e.valueOf() : e;
		e = eC(r) ? r + "" : r;
	}
	if ("string" != typeof e) return 0 === e ? e : +e;
	e = (t = e) ? t.slice(0, e6(t) + 1).replace(e9, "") : t;
	var n = tt.test(e);
	return n || tr.test(e) ? tn(e.slice(2), n ? 2 : 8) : te.test(e) ? e7 : +e;
}, ti = Infinity, to = function(e) {
	var t, r = (t = e) ? (t = ta(t)) === ti || t === -ti ? (t < 0 ? -1 : 1) * 17976931348623157e292 : t == t ? t : 0 : 0 === t ? t : 0, n = r % 1;
	return r == r ? n ? r - n : r : 0;
}, ts = Object.create, tl = function() {
	function e() {}
	return function(t) {
		if (!eC(t)) return {};
		if (ts) return ts(t);
		e.prototype = t;
		var r = new e();
		return e.prototype = void 0, r;
	};
}(), tu = function(e, t, r) {
	switch (r.length) {
		case 0: return e.call(t);
		case 1: return e.call(t, r[0]);
		case 2: return e.call(t, r[0], r[1]);
		case 3: return e.call(t, r[0], r[1], r[2]);
	}
	return e.apply(t, r);
}, tc = function(e, t) {
	var r = -1, n = e.length;
	for (t || (t = Array(n)); ++r < n;) t[r] = e[r];
	return t;
}, tf = Date.now, td = function() {
	try {
		var e = e_(Object, "defineProperty");
		return e({}, "", {}), e;
	} catch (e) {}
}(), th = (eU = td ? function(e, t) {
	return td(e, "toString", {
		configurable: !0,
		enumerable: !1,
		value: function() {
			return t;
		},
		writable: !0
	});
} : G, eq = 0, eG = 0, function() {
	var e = tf(), t = 16 - (e - eG);
	if (eG = e, t > 0) {
		if (++eq >= 800) return arguments[0];
	} else eq = 0;
	return eU.apply(void 0, arguments);
}), tg = function(e, t) {
	for (var r = -1, n = null == e ? 0 : e.length; ++r < n && !1 !== t(e[r], r, e););
	return e;
}, tp = function(e, t, r) {
	"__proto__" == t && td ? td(e, t, {
		configurable: !0,
		enumerable: !0,
		value: r,
		writable: !0
	}) : e[t] = r;
}, tm = Object.prototype.hasOwnProperty, tb = function(e, t, r) {
	var n = e[t];
	tm.call(e, t) && eI(n, r) && (void 0 !== r || t in e) || tp(e, t, r);
}, ty = function(e, t, r, n) {
	var a = !r;
	r || (r = {});
	for (var i = -1, o = t.length; ++i < o;) {
		var s = t[i], l = n ? n(r[s], e[s], s, r, e) : void 0;
		void 0 === l && (l = e[s]), a ? tp(r, s, l) : tb(r, s, l);
	}
	return r;
}, tv = Math.max, tx = function(e, t, r) {
	if (!eC(r)) return !1;
	var n = typeof t;
	return ("number" == n ? !!(et(r) && ex(t, r.length)) : "string" == n && t in r) && eI(r[t], e);
}, tw = function(e) {
	var t = [];
	if (null != e) for (var r in Object(e)) t.push(r);
	return t;
}, tC = Object.prototype.hasOwnProperty, tk = function(e) {
	if (!eC(e)) return tw(e);
	var t = r(e), n = [];
	for (var a in e) "constructor" == a && (t || !tC.call(e, a)) || n.push(a);
	return n;
}, tP = function(e) {
	return et(e) ? y(e, !0) : tk(e);
}, tM = eP ? eP.isConcatSpreadable : void 0, tS = function(e) {
	return X(e) || T(e) || !!(tM && e && e[tM]);
}, tA = function e(t, r, n, a, i) {
	var o = -1, s = t.length;
	for (n || (n = tS), i || (i = []); ++o < s;) {
		var l = t[o];
		r > 0 && n(l) ? r > 1 ? e(l, r - 1, n, a, i) : E(i, l) : a || (i[i.length] = l);
	}
	return i;
}, t_ = function(e, t, r) {
	var n = -1, a = e.length;
	t < 0 && (t = -t > a ? 0 : a + t), (r = r > a ? a : r) < 0 && (r += a), a = t > r ? 0 : r - t >>> 0, t >>>= 0;
	for (var i = Array(a); ++n < a;) i[n] = e[n + t];
	return i;
}, tT = function(e, t, r) {
	var n = e.length;
	return r = void 0 === r ? n : r, !t && r >= n ? e : t_(e, t, r);
}, tR = RegExp("[\\u200d\ud800-\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"), tO = function(e) {
	return tR.test(e);
}, tD = "\ud800-\udfff", t$ = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]", tI = "\ud83c[\udffb-\udfff]", tL = "[^" + tD + "]", tF = "(?:\ud83c[\udde6-\uddff]){2}", tE = "[\ud800-\udbff][\udc00-\udfff]", tj = "(?:" + t$ + "|" + tI + ")?", tV = "[\\ufe0e\\ufe0f]?", tB = "(?:\\u200d(?:" + [
	tL,
	tF,
	tE
].join("|") + ")" + tV + tj + ")*", tH = RegExp(tI + "(?=" + tI + ")|" + ("(?:" + [
	tL + t$ + "?",
	t$,
	tF,
	tE,
	"[" + tD + "]"
].join("|")) + ")" + (tV + tj + tB), "g"), tN = function(e) {
	return tO(e) ? e.match(tH) || [] : e.split("");
}, tW = function(e) {
	var t = tO(e = x(e)) ? tN(e) : void 0, r = t ? t[0] : e.charAt(0), n = t ? tT(t, 1).join("") : e.slice(1);
	return r.toUpperCase() + n;
}, tz = R(function(e, t, r) {
	return t = t.toLowerCase(), e + (r ? tW(x(t).toLowerCase()) : t);
}), tU = "object" == typeof exports && exports && !exports.nodeType && exports, tq = tU && "object" == typeof module && module && !module.nodeType && module, tG = tq && tq.exports === tU ? eb.Buffer : void 0, tY = tG ? tG.allocUnsafe : void 0, tK = function(e, t) {
	if (t) return e.slice();
	var r = e.length, n = tY ? tY(r) : new e.constructor(r);
	return e.copy(n), n;
}, tX = Object.getOwnPropertySymbols ? function(e) {
	for (var t = []; e;) E(t, f(e)), e = i(e);
	return t;
} : m, tJ = function(e) {
	return A(e, tP, tX);
}, tZ = Object.prototype.hasOwnProperty, tQ = function(e) {
	var t = e.length, r = new e.constructor(t);
	return t && "string" == typeof e[0] && tZ.call(e, "index") && (r.index = e.index, r.input = e.input), r;
}, t0 = function(e) {
	var t = new e.constructor(e.byteLength);
	return new ed(t).set(new ed(e)), t;
}, t1 = function(e, t) {
	var r = t ? t0(e.buffer) : e.buffer;
	return new e.constructor(r, e.byteOffset, e.byteLength);
}, t2 = /\w*$/, t4 = function(e) {
	var t = new e.constructor(e.source, t2.exec(e));
	return t.lastIndex = e.lastIndex, t;
}, t5 = eP ? eP.prototype : void 0, t3 = t5 ? t5.valueOf : void 0, t8 = function(e, t) {
	var r = t ? t0(e.buffer) : e.buffer;
	return new e.constructor(r, e.byteOffset, e.length);
}, t6 = function(e, t, r) {
	var n = e.constructor;
	switch (t) {
		case "[object ArrayBuffer]": return t0(e);
		case "[object Boolean]":
		case "[object Date]": return new n(+e);
		case "[object DataView]": return t1(e, r);
		case "[object Float32Array]":
		case "[object Float64Array]":
		case "[object Int8Array]":
		case "[object Int16Array]":
		case "[object Int32Array]":
		case "[object Uint8Array]":
		case "[object Uint8ClampedArray]":
		case "[object Uint16Array]":
		case "[object Uint32Array]": return t8(e, r);
		case "[object Map]":
		case "[object Set]": return new n();
		case "[object Number]":
		case "[object String]": return new n(e);
		case "[object RegExp]": return t4(e);
		case "[object Symbol]": return t3 ? Object(t3.call(e)) : {};
	}
}, t9 = W && W.isMap, t7 = t9 ? H(t9) : function(e) {
	return Q(e) && "[object Map]" == k(e);
}, re = W && W.isSet, rt = re ? H(re) : function(e) {
	return Q(e) && "[object Set]" == k(e);
}, rr = "[object Arguments]", rn = "[object Function]", ra = "[object Object]", ri = {};
ri[rr] = ri["[object Array]"] = ri["[object ArrayBuffer]"] = ri["[object DataView]"] = ri["[object Boolean]"] = ri["[object Date]"] = ri["[object Float32Array]"] = ri["[object Float64Array]"] = ri["[object Int8Array]"] = ri["[object Int16Array]"] = ri["[object Int32Array]"] = ri["[object Map]"] = ri["[object Number]"] = ri[ra] = ri["[object RegExp]"] = ri["[object Set]"] = ri["[object String]"] = ri["[object Symbol]"] = ri["[object Uint8Array]"] = ri["[object Uint8ClampedArray]"] = ri["[object Uint16Array]"] = ri["[object Uint32Array]"] = !0, ri["[object Error]"] = ri[rn] = ri["[object WeakMap]"] = !1;
var ro = function e(t, n, a, o, s, l) {
	var u, c = 1 & n, d = 2 & n, h = 4 & n;
	if (a && (u = s ? a(t, o, s, l) : a(t)), void 0 !== u) return u;
	if (!eC(t)) return t;
	var g = X(t);
	if (g) {
		if (u = tQ(t), !c) return tc(t, u);
	} else {
		var p, m, b, y, v, x = k(t), C = x == rn || "[object GeneratorFunction]" == x;
		if (z(t)) return tK(t, c);
		if (x == ra || x == rr || C && !s) {
			if (u = d || C || "function" != typeof (p = t).constructor || r(p) ? {} : tl(i(p)), !c) return d ? (b = (m = u) && ty(t, tP(t), m), ty(t, tX(t), b)) : (v = (y = u) && ty(t, eA(t), y), ty(t, f(t), v));
		} else {
			if (!ri[x]) return s ? t : {};
			u = t6(t, x, c);
		}
	}
	l || (l = new w());
	var P = l.get(t);
	if (P) return P;
	l.set(t, u), rt(t) ? t.forEach(function(r) {
		u.add(e(r, n, a, r, t, l));
	}) : t7(t) && t.forEach(function(r, i) {
		u.set(i, e(r, n, a, i, t, l));
	});
	var S = g ? void 0 : (h ? d ? tJ : M : d ? tP : eA)(t);
	return tg(S || t, function(r, i) {
		S && (r = t[i = r]), tb(u, i, e(r, n, a, i, t, l));
	}), u;
}, rs = function(e) {
	var t = null == e ? 0 : e.length;
	return t ? e[t - 1] : void 0;
}, rl = Object.prototype.hasOwnProperty, ru = function(e, t) {
	return null != e && rl.call(e, t);
}, rc = function(e, t) {
	return null != e && eh(e, t, ru);
}, rf = function(e) {
	return "string" == typeof e || !X(e) && Q(e) && "[object String]" == ea(e);
}, rd = function(e) {
	return "number" == typeof e || Q(e) && "[object Number]" == ea(e);
}, rh = function(e, t) {
	var r = {};
	return t = l(t, 3), c(e, function(e, n, a) {
		tp(r, n, t(e, n, a));
	}), r;
}, rg = function(e, t) {
	var r, n;
	return t = h(t, e), r = e, null == (e = (n = t).length < 2 ? r : L(r, t_(n, 0, -1))) || delete e[V(rs(t))];
}, rp = function(e) {
	return eW(e) ? void 0 : e;
}, rm = th((eK = eY = function(e, t) {
	var r = {};
	if (null == e) return r;
	var n = !1;
	t = eg(t, function(t) {
		return t = h(t, e), n || (n = t.length > 1), t;
	}), ty(e, tJ(e), r), n && (r = ro(r, 7, rp));
	for (var a = t.length; a--;) rg(r, t[a]);
	return r;
}, eX = void 0, eJ = function(e) {
	return (null == e ? 0 : e.length) ? tA(e, 1) : [];
}, eX = tv(void 0 === eX ? eK.length - 1 : eX, 0), function() {
	for (var e = arguments, t = -1, r = tv(e.length - eX, 0), n = Array(r); ++t < r;) n[t] = e[eX + t];
	t = -1;
	for (var a = Array(eX + 1); ++t < eX;) a[t] = e[t];
	return a[eX] = eJ(n), tu(eK, this, a);
}), eY + ""), rb = function(e, t, r, n) {
	if (!eC(e)) return e;
	t = h(t, e);
	for (var a = -1, i = t.length, o = i - 1, s = e; null != s && ++a < i;) {
		var l = V(t[a]), u = r;
		if ("__proto__" === l || "constructor" === l || "prototype" === l) break;
		if (a != o) {
			var c = s[l];
			void 0 === (u = n ? n(c, l, s) : void 0) && (u = eC(c) ? c : ex(t[a + 1]) ? [] : {});
		}
		tb(s, l, u), s = s[l];
	}
	return e;
}, ry = function(e, t, r) {
	for (var n = -1, a = t.length, i = {}; ++n < a;) {
		var o = t[n], s = L(e, o);
		r(s, o) && rb(i, h(o, e), s);
	}
	return i;
}, rv = function(e, t) {
	if (null == e) return {};
	var r = eg(tJ(e), function(e) {
		return [e];
	});
	return t = l(t), ry(e, r, function(e, r) {
		return t(e, r[0]);
	});
}, rx = Math.floor, rw = function(e, t) {
	var r = "";
	if (!e || t < 1 || t > 9007199254740991) return r;
	do
		t % 2 && (r += e), (t = rx(t / 2)) && (e += e);
	while (t);
	return r;
}, rC = S("length"), rk = "\ud800-\udfff", rP = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]", rM = "\ud83c[\udffb-\udfff]", rS = "[^" + rk + "]", rA = "(?:\ud83c[\udde6-\uddff]){2}", r_ = "[\ud800-\udbff][\udc00-\udfff]", rT = "(?:" + rP + "|" + rM + ")?", rR = "[\\ufe0e\\ufe0f]?", rO = "(?:\\u200d(?:" + [
	rS,
	rA,
	r_
].join("|") + ")" + rR + rT + ")*", rD = RegExp(rM + "(?=" + rM + ")|" + ("(?:" + [
	rS + rP + "?",
	rP,
	rA,
	r_,
	"[" + rk + "]"
].join("|")) + ")" + (rR + rT + rO), "g"), r$ = function(e) {
	for (var t = rD.lastIndex = 0; rD.test(e);) ++t;
	return t;
}, rI = function(e) {
	return tO(e) ? r$(e) : rC(e);
}, rL = Math.ceil, rF = function(e, t) {
	var r = (t = void 0 === t ? " " : eO(t)).length;
	if (r < 2) return r ? rw(t, e) : t;
	var n = rw(t, rL(e / rI(t)));
	return tO(t) ? tT(tN(n), 0, e).join("") : n.slice(0, e);
}, rE = function(e, t, r) {
	e = x(e);
	var n = (t = to(t)) ? rI(e) : 0;
	return t && n < t ? rF(t - n, r) + e : e;
}, rj = function(e, t, r) {
	return null == e ? e : rb(e, t, r);
}, rV = function(e, t) {
	var r;
	return $(e, function(e, n, a) {
		return !(r = t(e, n, a));
	}), !!r;
}, rB = function(e, t, r) {
	var n = X(e) ? a : rV;
	return r && tx(e, t, r) && (t = void 0), n(e, l(t, 3));
}, rH = void 0, rN = "undefined" != typeof window && window.trustedTypes;
if (rN) try {
	rH = rN.createPolicy("vue", { createHTML: (e) => e });
} catch (e) {}
var rW = rH ? (e) => rH.createHTML(e) : (e) => e, rz = "undefined" != typeof document ? document : null, rU = rz && rz.createElement("template"), rq = "transition", rG = "animation", rY = Symbol("_vtc"), rK = {
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
}, rX = J({}, d, rK), rJ = ((eZ = (e, { slots: t }) => _(j, function(e) {
	let t = {};
	for (let r in e) r in rK || (t[r] = e[r]);
	if (!1 === e.css) return t;
	let { name: r = "v", type: n, duration: a, enterFromClass: i = `${r}-enter-from`, enterActiveClass: o = `${r}-enter-active`, enterToClass: s = `${r}-enter-to`, appearFromClass: l = i, appearActiveClass: u = o, appearToClass: c = s, leaveFromClass: f = `${r}-leave-from`, leaveActiveClass: d = `${r}-leave-active`, leaveToClass: h = `${r}-leave-to` } = e, g = function(e) {
		if (null == e) return null;
		{
			if (ey(e)) return [function(e) {
				return eN(e);
			}(e.enter), function(e) {
				return eN(e);
			}(e.leave)];
			let t = function(e) {
				return eN(e);
			}(e);
			return [t, t];
		}
	}(a), p = g && g[0], m = g && g[1], { onBeforeEnter: b, onEnter: y, onEnterCancelled: v, onLeave: x, onLeaveCancelled: w, onBeforeAppear: C = b, onAppear: k = y, onAppearCancelled: P = v } = t, M = (e, t, r, n) => {
		e._enterCancelled = n, r1(e, t ? c : s), r1(e, t ? u : o), r && r();
	}, S = (e, t) => {
		e._isLeaving = !1, r1(e, f), r1(e, h), r1(e, d), t && t();
	}, A = (e) => (t, r) => {
		let a = e ? k : y, o = () => M(t, e, r);
		rZ(a, [t, o]), r2(() => {
			r1(t, e ? l : i), r0(t, e ? c : s), rQ(a) || r5(t, n, p, o);
		});
	};
	return J(t, {
		onBeforeEnter(e) {
			rZ(b, [e]), r0(e, i), r0(e, o);
		},
		onBeforeAppear(e) {
			rZ(C, [e]), r0(e, l), r0(e, u);
		},
		onEnter: A(!1),
		onAppear: A(!0),
		onLeave(e, t) {
			e._isLeaving = !0;
			let r = () => S(e, t);
			r0(e, f), e._enterCancelled ? (r0(e, d), r6(e)) : (r6(e), r0(e, d)), r2(() => {
				e._isLeaving && (r1(e, f), r0(e, h), rQ(x) || r5(e, n, m, r));
			}), rZ(x, [e, r]);
		},
		onEnterCancelled(e) {
			M(e, !1, void 0, !0), rZ(v, [e]);
		},
		onAppearCancelled(e) {
			M(e, !0, void 0, !0), rZ(P, [e]);
		},
		onLeaveCancelled(e) {
			S(e), rZ(w, [e]);
		}
	});
}(e), t)).displayName = "Transition", eZ.props = rX, eZ), rZ = (e, t = []) => {
	ee(e) ? e.forEach((e) => e(...t)) : e && e(...t);
}, rQ = (e) => !!e && (ee(e) ? e.some((e) => e.length > 1) : e.length > 1);
function r0(e, t) {
	t.split(/\s+/).forEach((t) => t && e.classList.add(t)), (e[rY] || (e[rY] = /* @__PURE__ */ new Set())).add(t);
}
function r1(e, t) {
	t.split(/\s+/).forEach((t) => t && e.classList.remove(t));
	let r = e[rY];
	r && (r.delete(t), r.size || (e[rY] = void 0));
}
function r2(e) {
	requestAnimationFrame(() => {
		requestAnimationFrame(e);
	});
}
var r4 = 0;
function r5(e, t, r, n) {
	let a = e._endId = ++r4, i = () => {
		a === e._endId && n();
	};
	if (null != r) return setTimeout(i, r);
	let { type: o, timeout: s, propCount: l } = function(e, t) {
		let r = window.getComputedStyle(e), n = (e) => (r[e] || "").split(", "), a = n(`${rq}Delay`), i = n(`${rq}Duration`), o = r3(a, i), s = n(`${rG}Delay`), l = n(`${rG}Duration`), u = r3(s, l), c = null, f = 0, d = 0;
		t === rq ? o > 0 && (c = rq, f = o, d = i.length) : t === rG ? u > 0 && (c = rG, f = u, d = l.length) : d = (c = (f = Math.max(o, u)) > 0 ? o > u ? rq : rG : null) ? c === rq ? i.length : l.length : 0;
		let h = c === rq && /\b(?:transform|all)(?:,|$)/.test(n(`${rq}Property`).toString());
		return {
			type: c,
			timeout: f,
			propCount: d,
			hasTransform: h
		};
	}(e, t);
	if (!o) return n();
	let u = o + "end", c = 0, f = () => {
		e.removeEventListener(u, d), i();
	}, d = (t) => {
		t.target === e && ++c >= l && f();
	};
	setTimeout(() => {
		c < l && f();
	}, s + 1), e.addEventListener(u, d);
}
function r3(e, t) {
	for (; e.length < t.length;) e = e.concat(e);
	return Math.max(...t.map((t, r) => r8(t) + r8(e[r])));
}
function r8(e) {
	return "auto" === e ? 0 : 1e3 * Number(e.slice(0, -1).replace(",", "."));
}
function r6(e) {
	return (e ? e.ownerDocument : document).body.offsetHeight;
}
var r9 = Symbol("_vod"), r7 = Symbol("_vsh"), ne = Symbol(""), nt = /(?:^|;)\s*display\s*:/, nr = /\s*!important$/;
function nn(e, t, r) {
	if (ee(r)) r.forEach((r) => nn(e, t, r));
	else if (r ??= "", t.startsWith("--")) e.setProperty(t, r);
	else {
		let n = function(e, t) {
			let r = ni[t];
			if (r) return r;
			let n = ek(t);
			if ("filter" !== n && n in e) return ni[t] = n;
			n = eD(n);
			for (let r = 0; r < na.length; r++) {
				let a = na[r] + n;
				if (a in e) return ni[t] = a;
			}
			return t;
		}(e, t);
		nr.test(r) ? e.setProperty(ep(n), r.replace(nr, ""), "important") : e[n] = r;
	}
}
var na = [
	"Webkit",
	"Moz",
	"ms"
], ni = {}, no = "http://www.w3.org/1999/xlink";
function ns(e, t, r, n, a, i = es(t)) {
	n && t.startsWith("xlink:") ? null == r ? e.removeAttributeNS(no, t.slice(6, t.length)) : e.setAttributeNS(no, t, r) : null == r || i && !ej(r) ? e.removeAttribute(t) : e.setAttribute(t, i ? "" : eB(r) ? String(r) : r);
}
function nl(e, t, r, n, a) {
	if ("innerHTML" === t || "textContent" === t) {
		null != r && (e[t] = "innerHTML" === t ? rW(r) : r);
		return;
	}
	let i = e.tagName;
	if ("value" === t && "PROGRESS" !== i && !i.includes("-")) {
		let n = "OPTION" === i ? e.getAttribute("value") || "" : e.value, a = null == r ? "checkbox" === e.type ? "on" : "" : String(r);
		n === a && "_value" in e || (e.value = a), r ?? e.removeAttribute(t), e._value = r;
		return;
	}
	let o = !1;
	if ("" === r || null == r) {
		let n = typeof e[t];
		"boolean" === n ? r = ej(r) : null == r && "string" === n ? (r = "", o = !0) : "number" === n && (r = 0, o = !0);
	}
	try {
		e[t] = r;
	} catch (e) {}
	o && e.removeAttribute(a || t);
}
var nu = Symbol("_vei"), nc = /(?:Once|Passive|Capture)$/, nf = 0, nd = Promise.resolve(), nh = (e) => 111 === e.charCodeAt(0) && 110 === e.charCodeAt(1) && e.charCodeAt(2) > 96 && 123 > e.charCodeAt(2), ng = J({ patchProp: (e, t, r, n, a, i) => {
	let o = "svg" === a;
	if ("class" === t) {
		var s = n;
		let t = e[rY];
		t && (s = (s ? [s, ...t] : [...t]).join(" ")), null == s ? e.removeAttribute("class") : o ? e.setAttribute("class", s) : e.className = s;
	} else "style" === t ? function(e, t, r) {
		let n = e.style, a = q(r), i = !1;
		if (r && !a) {
			if (t) if (q(t)) for (let e of t.split(";")) {
				let t = e.slice(0, e.indexOf(":")).trim();
				r[t] ?? nn(n, t, "");
			}
			else for (let e in t) r[e] ?? nn(n, e, "");
			for (let e in r) "display" === e && (i = !0), nn(n, e, r[e]);
		} else if (a) {
			if (t !== r) {
				let e = n[ne];
				e && (r += ";" + e), n.cssText = r, i = nt.test(r);
			}
		} else t && e.removeAttribute("style");
		r9 in e && (e[r9] = i ? n.display : "", e[r7] && (n.display = "none"));
	}(e, r, n) : el(t) ? eM(t) || function(e, t, r, n, a = null) {
		let i = e[nu] || (e[nu] = {}), o = i[t];
		if (n && o) o.value = n;
		else {
			let [r, s] = function(e) {
				let t;
				if (nc.test(e)) {
					let r;
					for (t = {}; r = e.match(nc);) e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
				}
				return [":" === e[2] ? e.slice(3) : ep(e.slice(2)), t];
			}(t);
			if (n) {
				let o = i[t] = function(e, t) {
					let r = (e) => {
						if (e._vts) {
							if (e._vts <= r.attached) return;
						} else e._vts = Date.now();
						b(function(e, t) {
							if (!ee(t)) return t;
							{
								let r = e.stopImmediatePropagation;
								return e.stopImmediatePropagation = () => {
									r.call(e), e._stopped = !0;
								}, t.map((e) => (t) => !t._stopped && e && e(t));
							}
						}(e, r.value), t, 5, [e]);
					};
					return r.value = e, r.attached = nf || (nd.then(() => nf = 0), nf = Date.now()), r;
				}(n, a);
				e.addEventListener(r, o, s);
			} else o && (e.removeEventListener(r, o, s), i[t] = void 0);
		}
	}(e, t, 0, n, i) : ("." === t[0] ? (t = t.slice(1), 0) : "^" === t[0] ? (t = t.slice(1), 1) : !function(e, t, r, n) {
		if (n) return !!("innerHTML" === t || "textContent" === t || t in e && nh(t) && ei(r));
		if ("spellcheck" === t || "draggable" === t || "translate" === t || "autocorrect" === t || "form" === t || "list" === t && "INPUT" === e.tagName || "type" === t && "TEXTAREA" === e.tagName) return !1;
		if ("width" === t || "height" === t) {
			let t = e.tagName;
			if ("IMG" === t || "VIDEO" === t || "CANVAS" === t || "SOURCE" === t) return !1;
		}
		return !(nh(t) && q(r)) && t in e;
	}(e, t, n, o)) ? e._isVueCE && (/[A-Z]/.test(t) || !q(n)) ? nl(e, ek(t), n, i, t) : ("true-value" === t ? e._trueValue = n : "false-value" === t && (e._falseValue = n), ns(e, t, n, o)) : (nl(e, t, n), e.tagName.includes("-") || "value" !== t && "checked" !== t && "selected" !== t || ns(e, t, n, o, i, "value" !== t));
} }, {
	insert: (e, t, r) => {
		t.insertBefore(e, r || null);
	},
	remove: (e) => {
		let t = e.parentNode;
		t && t.removeChild(e);
	},
	createElement: (e, t, r, n) => {
		let a = "svg" === t ? rz.createElementNS("http://www.w3.org/2000/svg", e) : "mathml" === t ? rz.createElementNS("http://www.w3.org/1998/Math/MathML", e) : r ? rz.createElement(e, { is: r }) : rz.createElement(e);
		return "select" === e && n && null != n.multiple && a.setAttribute("multiple", n.multiple), a;
	},
	createText: (e) => rz.createTextNode(e),
	createComment: (e) => rz.createComment(e),
	setText: (e, t) => {
		e.nodeValue = t;
	},
	setElementText: (e, t) => {
		e.textContent = t;
	},
	parentNode: (e) => e.parentNode,
	nextSibling: (e) => e.nextSibling,
	querySelector: (e) => rz.querySelector(e),
	setScopeId(e, t) {
		e.setAttribute(t, "");
	},
	insertStaticContent(e, t, r, n, a, i) {
		let o = r ? r.previousSibling : t.lastChild;
		if (a && (a === i || a.nextSibling)) for (; t.insertBefore(a.cloneNode(!0), r), a !== i && (a = a.nextSibling););
		else {
			rU.innerHTML = rW("svg" === n ? `<svg>${e}</svg>` : "mathml" === n ? `<math>${e}</math>` : e);
			let a = rU.content;
			if ("svg" === n || "mathml" === n) {
				let e = a.firstChild;
				for (; e.firstChild;) a.appendChild(e.firstChild);
				a.removeChild(e);
			}
			t.insertBefore(a, r);
		}
		return [o ? o.nextSibling : t.firstChild, r ? r.previousSibling : t.lastChild];
	}
}), np = (...e) => {
	let t = (e4 || (e4 = B(ng))).createApp(...e), { mount: r } = t;
	return t.mount = (e) => {
		var n, a;
		let i = q(n = e) ? document.querySelector(n) : n;
		if (!i) return;
		let o = t._component;
		ei(o) || o.render || o.template || (o.template = i.innerHTML), 1 === i.nodeType && (i.textContent = "");
		let s = r(i, !1, (a = i) instanceof SVGElement ? "svg" : "function" == typeof MathMLElement && a instanceof MathMLElement ? "mathml" : void 0);
		return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), s;
	}, t;
};
function nm(e) {
	return e && n(e.schedule);
}
function nb(e) {
	return e[e.length - 1];
}
function ny(e) {
	return nm(nb(e)) ? e.pop() : void 0;
}
function nv(e, t) {
	return "number" == typeof nb(e) ? e.pop() : t;
}
var nx = Array.isArray;
function nw(e) {
	return eo(function(t) {
		return nx(t) ? e.apply(void 0, P([], C(t))) : e(t);
	});
}
var nC = Array.isArray, nk = Object.getPrototypeOf, nP = Object.prototype, nM = Object.keys;
function nS() {
	for (var e, t, r, a = [], i = 0; i < arguments.length; i++) a[i] = arguments[i];
	var s = ny(a), l = n(nb(a)) ? a.pop() : void 0, c = function(e) {
		if (1 === e.length) {
			var t, r = e[0];
			if (nC(r)) return {
				args: r,
				keys: null
			};
			if ((t = r) && "object" == typeof t && nk(t) === nP) {
				var n = nM(r);
				return {
					args: n.map(function(e) {
						return r[e];
					}),
					keys: n
				};
			}
		}
		return {
			args: e,
			keys: null
		};
	}(a), f = c.args, d = c.keys;
	if (0 === f.length) return U([], s);
	var h = new D((e = f, t = s, void 0 === (r = d ? function(e) {
		return d.reduce(function(t, r, n) {
			return t[r] = e[n], t;
		}, {});
	} : u) && (r = u), function(n) {
		(function(e, t, r) {
			e ? eV(r, e, t) : t();
		})(t, function() {
			for (var a = e.length, i = Array(a), s = a, l = a, u = function(a) {
				(function(e, t, r) {
					e ? eV(r, e, t) : t();
				})(t, function() {
					var u = U(e[a], t), c = !1;
					u.subscribe(o(n, function(e) {
						i[a] = e, !c && (c = !0, l--), l || n.next(r(i.slice()));
					}, function() {
						--s || n.complete();
					}));
				}, n);
			}, c = 0; c < a; c++) u(c);
		}, n);
	}));
	return l ? h.pipe(nw(l)) : h;
}
function nA(e, t) {
	var r = {};
	for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n]);
	if (null != e && "function" == typeof Object.getOwnPropertySymbols) for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++) 0 > t.indexOf(n[a]) && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
	return r;
}
var n_ = function() {}, nT = function() {}, nR = (e, t, r) => Math.min(Math.max(r, e), t);
function nO(e, t) {
	return e * Math.sqrt(1 - t * t);
}
var nD = ["duration", "bounce"], n$ = [
	"stiffness",
	"damping",
	"mass"
];
function nI(e, t) {
	return t.some((t) => void 0 !== e[t]);
}
function nL(e) {
	var { from: t = 0, to: r = 1, restSpeed: n = 2, restDelta: a } = e, i = nA(e, [
		"from",
		"to",
		"restSpeed",
		"restDelta"
	]);
	let o = {
		done: !1,
		value: t
	}, { stiffness: s, damping: l, mass: u, velocity: c, duration: f, isResolvedFromDuration: d } = function(e) {
		let t = Object.assign({
			velocity: 0,
			stiffness: 100,
			damping: 10,
			mass: 1,
			isResolvedFromDuration: !1
		}, e);
		if (!nI(e, n$) && nI(e, nD)) {
			let r = function({ duration: e = 800, bounce: t = .25, velocity: r = 0, mass: n = 1 }) {
				let a, i;
				n_(e <= 1e4, "Spring duration must be 10 seconds or less");
				let o = 1 - t;
				o = nR(.05, 1, o), e = nR(.01, 10, e / 1e3), o < 1 ? (a = (t) => {
					let n = t * o, a = n * e;
					return .001 - (n - r) / nO(t, o) * Math.exp(-a);
				}, i = (t) => {
					let n = t * o * e, i = Math.pow(o, 2) * Math.pow(t, 2) * e, s = Math.exp(-n), l = nO(Math.pow(t, 2), o);
					return (-a(t) + .001 > 0 ? -1 : 1) * ((n * r + r - i) * s) / l;
				}) : (a = (t) => -.001 + Math.exp(-t * e) * ((t - r) * e + 1), i = (t) => e * e * (r - t) * Math.exp(-t * e));
				let s = function(e, t, r) {
					let n = r;
					for (let r = 1; r < 12; r++) n -= e(n) / t(n);
					return n;
				}(a, i, 5 / e);
				if (e *= 1e3, isNaN(s)) return {
					stiffness: 100,
					damping: 10,
					duration: e
				};
				{
					let t = Math.pow(s, 2) * n;
					return {
						stiffness: t,
						damping: 2 * o * Math.sqrt(n * t),
						duration: e
					};
				}
			}(e);
			(t = Object.assign(Object.assign(Object.assign({}, t), r), {
				velocity: 0,
				mass: 1
			})).isResolvedFromDuration = !0;
		}
		return t;
	}(i), h = nF, g = nF;
	function p() {
		let e = c ? -(c / 1e3) : 0, n = r - t, i = l / (2 * Math.sqrt(s * u)), o = Math.sqrt(s / u) / 1e3;
		if (void 0 === a && (a = Math.min(Math.abs(r - t) / 100, .4)), i < 1) {
			let t = nO(o, i);
			h = (a) => r - Math.exp(-i * o * a) * ((e + i * o * n) / t * Math.sin(t * a) + n * Math.cos(t * a)), g = (r) => {
				let a = Math.exp(-i * o * r);
				return i * o * a * (Math.sin(t * r) * (e + i * o * n) / t + n * Math.cos(t * r)) - a * (Math.cos(t * r) * (e + i * o * n) - t * n * Math.sin(t * r));
			};
		} else if (1 === i) h = (t) => r - Math.exp(-o * t) * (n + (e + o * n) * t);
		else {
			let t = o * Math.sqrt(i * i - 1);
			h = (a) => {
				let s = Math.exp(-i * o * a), l = Math.min(t * a, 300);
				return r - s * ((e + i * o * n) * Math.sinh(l) + t * n * Math.cosh(l)) / t;
			};
		}
	}
	return p(), {
		next: (e) => {
			let t = h(e);
			if (d) o.done = e >= f;
			else {
				let i = Math.abs(1e3 * g(e)) <= n, s = Math.abs(r - t) <= a;
				o.done = i && s;
			}
			return o.value = o.done ? r : t, o;
		},
		flipTarget: () => {
			c = -c, [t, r] = [r, t], p();
		}
	};
}
nL.needsInterpolation = (e, t) => "string" == typeof e || "string" == typeof t;
var nF = (e) => 0, nE = (e, t, r) => {
	let n = t - e;
	return 0 === n ? 1 : (r - e) / n;
}, nj = (e, t, r) => -r * e + r * t + e, nV = (e, t) => (r) => Math.max(Math.min(r, t), e), nB = (e) => e % 1 ? Number(e.toFixed(5)) : e, nH = /(-)?([\d]*\.?[\d])+/g, nN = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi, nW = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function nz(e) {
	return "string" == typeof e;
}
var nU = {
	test: (e) => "number" == typeof e,
	parse: parseFloat,
	transform: (e) => e
}, nq = Object.assign(Object.assign({}, nU), { transform: nV(0, 1) }), nG = {
	test: (e) => nz(e) && e.endsWith("%") && 1 === e.split(" ").length,
	parse: parseFloat,
	transform: (e) => `${e}%`
}, nY = (e, t) => (r) => !!(nz(r) && nW.test(r) && r.startsWith(e) || t && Object.prototype.hasOwnProperty.call(r, t)), nK = (e, t, r) => (n) => {
	if (!nz(n)) return n;
	let [a, i, o, s] = n.match(nH);
	return {
		[e]: parseFloat(a),
		[t]: parseFloat(i),
		[r]: parseFloat(o),
		alpha: void 0 !== s ? parseFloat(s) : 1
	};
}, nX = {
	test: nY("hsl", "hue"),
	parse: nK("hue", "saturation", "lightness"),
	transform: ({ hue: e, saturation: t, lightness: r, alpha: n = 1 }) => "hsla(" + Math.round(e) + ", " + nG.transform(nB(t)) + ", " + nG.transform(nB(r)) + ", " + nB(nq.transform(n)) + ")"
}, nJ = nV(0, 255), nZ = Object.assign(Object.assign({}, nU), { transform: (e) => Math.round(nJ(e)) }), nQ = {
	test: nY("rgb", "red"),
	parse: nK("red", "green", "blue"),
	transform: ({ red: e, green: t, blue: r, alpha: n = 1 }) => "rgba(" + nZ.transform(e) + ", " + nZ.transform(t) + ", " + nZ.transform(r) + ", " + nB(nq.transform(n)) + ")"
}, n0 = {
	test: nY("#"),
	parse: function(e) {
		let t = "", r = "", n = "", a = "";
		return e.length > 5 ? (t = e.substr(1, 2), r = e.substr(3, 2), n = e.substr(5, 2), a = e.substr(7, 2)) : (t = e.substr(1, 1), r = e.substr(2, 1), n = e.substr(3, 1), a = e.substr(4, 1), t += t, r += r, n += n, a += a), {
			red: parseInt(t, 16),
			green: parseInt(r, 16),
			blue: parseInt(n, 16),
			alpha: a ? parseInt(a, 16) / 255 : 1
		};
	},
	transform: nQ.transform
}, n1 = (e) => nQ.test(e) || n0.test(e) || nX.test(e), n2 = (e) => nQ.test(e) ? nQ.parse(e) : nX.test(e) ? nX.parse(e) : n0.parse(e), n4 = (e) => nz(e) ? e : e.hasOwnProperty("red") ? nQ.transform(e) : nX.transform(e), n5 = "${c}", n3 = "${n}";
function n8(e) {
	"number" == typeof e && (e = `${e}`);
	let t = [], r = 0, n = e.match(nN);
	n && (r = n.length, e = e.replace(nN, n5), t.push(...n.map(n2)));
	let a = e.match(nH);
	return a && (e = e.replace(nH, n3), t.push(...a.map(nU.parse))), {
		values: t,
		numColors: r,
		tokenised: e
	};
}
var n6 = function(e) {
	let { values: t, numColors: r, tokenised: n } = n8(e), a = t.length;
	return (e) => {
		let t = n;
		for (let n = 0; n < a; n++) t = t.replace(n < r ? n5 : n3, n < r ? n4(e[n]) : nB(e[n]));
		return t;
	};
};
function n9(e, t, r) {
	return (r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6) ? e + (t - e) * 6 * r : r < .5 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e;
}
function n7({ hue: e, saturation: t, lightness: r, alpha: n }) {
	e /= 360, r /= 100;
	let a = 0, i = 0, o = 0;
	if (t /= 100) {
		let n = r < .5 ? r * (1 + t) : r + t - r * t, s = 2 * r - n;
		a = n9(s, n, e + 1 / 3), i = n9(s, n, e), o = n9(s, n, e - 1 / 3);
	} else a = i = o = r;
	return {
		red: Math.round(255 * a),
		green: Math.round(255 * i),
		blue: Math.round(255 * o),
		alpha: n
	};
}
var ae = (e, t, r) => {
	let n = e * e;
	return Math.sqrt(Math.max(0, r * (t * t - n) + n));
}, at = [
	n0,
	nQ,
	nX
], ar = (e) => at.find((t) => t.test(e)), an = (e) => `'${e}' is not an animatable color. Use the equivalent color code instead.`, aa = (e, t) => {
	let r = ar(e), n = ar(t);
	nT(!!r, an(e)), nT(!!n, an(t));
	let a = r.parse(e), i = n.parse(t);
	r === nX && (a = n7(a), r = nQ), n === nX && (i = n7(i), n = nQ);
	let o = Object.assign({}, a);
	return (e) => {
		for (let t in o) "alpha" !== t && (o[t] = ae(a[t], i[t], e));
		return o.alpha = nj(a.alpha, i.alpha, e), r.transform(o);
	};
}, ai = (e, t) => (r) => t(e(r)), ao = (...e) => e.reduce(ai);
function as(e, t) {
	return "number" == typeof e ? (r) => nj(e, t, r) : n1(e) ? aa(e, t) : af(e, t);
}
var al = (e, t) => {
	let r = [...e], n = r.length, a = e.map((e, r) => as(e, t[r]));
	return (e) => {
		for (let t = 0; t < n; t++) r[t] = a[t](e);
		return r;
	};
}, au = (e, t) => {
	let r = Object.assign(Object.assign({}, e), t), n = {};
	for (let a in r) void 0 !== e[a] && void 0 !== t[a] && (n[a] = as(e[a], t[a]));
	return (e) => {
		for (let t in n) r[t] = n[t](e);
		return r;
	};
};
function ac(e) {
	let t = n8(e).values, r = t.length, n = 0, a = 0, i = 0;
	for (let e = 0; e < r; e++) n || "number" == typeof t[e] ? n++ : void 0 !== t[e].hue ? i++ : a++;
	return {
		parsed: t,
		numNumbers: n,
		numRGB: a,
		numHSL: i
	};
}
var af = (e, t) => {
	let r = n6(t), n = ac(e), a = ac(t);
	return n.numHSL === a.numHSL && n.numRGB === a.numRGB && n.numNumbers >= a.numNumbers ? ao(al(n.parsed, a.parsed), r) : (n_(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), (r) => `${r > 0 ? t : e}`);
}, ad = (e, t) => (r) => nj(e, t, r);
function ah(e, t, { clamp: r = !0, ease: n, mixer: a } = {}) {
	let i = e.length;
	nT(i === t.length, "Both input and output ranges must be the same length"), nT(!n || !Array.isArray(n) || n.length === i - 1, "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."), e[0] > e[i - 1] && (e = [].concat(e), t = [].concat(t), e.reverse(), t.reverse());
	let o = function(e, t, r) {
		let n = [], a = r || function(e) {
			if ("number" == typeof e) return ad;
			if ("string" == typeof e) if (n1(e)) return aa;
			else return af;
			return Array.isArray(e) ? al : "object" == typeof e ? au : void 0;
		}(e[0]), i = e.length - 1;
		for (let r = 0; r < i; r++) {
			let i = a(e[r], e[r + 1]);
			t && (i = ao(Array.isArray(t) ? t[r] : t, i)), n.push(i);
		}
		return n;
	}(t, n, a), s = 2 === i ? function([e, t], [r]) {
		return (n) => r(nE(e, t, n));
	}(e, o) : function(e, t) {
		let r = e.length, n = r - 1;
		return (a) => {
			let i = 0, o = !1;
			if (a <= e[0] ? o = !0 : a >= e[n] && (i = n - 1, o = !0), !o) {
				let t = 1;
				for (; t < r && !(e[t] > a) && t !== n; t++);
				i = t - 1;
			}
			let s = nE(e[i], e[i + 1], a);
			return t[i](s);
		};
	}(e, o);
	return r ? (t) => s(nR(e[0], e[i - 1], t)) : s;
}
var ag = (e) => e, ap = (e = (e) => Math.pow(e, 2), (t) => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2);
function am({ from: e = 0, to: t = 1, ease: r, offset: n, duration: a = 300 }) {
	var i;
	let o = {
		done: !1,
		value: e
	}, s = Array.isArray(t) ? t : [e, t], l = (i = n && n.length === s.length ? n : function(e) {
		let t = e.length;
		return e.map((e, r) => 0 !== r ? r / (t - 1) : 0);
	}(s), i.map((e) => e * a));
	function u() {
		return ah(l, s, { ease: Array.isArray(r) ? r : s.map(() => r || ap).splice(0, s.length - 1) });
	}
	let c = u();
	return {
		next: (e) => (o.value = c(e), o.done = e >= a, o),
		flipTarget: () => {
			s.reverse(), c = u();
		}
	};
}
var ab = {
	keyframes: am,
	spring: nL,
	decay: function({ velocity: e = 0, from: t = 0, power: r = .8, timeConstant: n = 350, restDelta: a = .5, modifyTarget: i }) {
		let o = {
			done: !1,
			value: t
		}, s = r * e, l = t + s, u = void 0 === i ? l : i(l);
		return u !== l && (s = u - t), {
			next: (e) => {
				let t = -s * Math.exp(-e / n);
				return o.done = !(t > a || t < -a), o.value = o.done ? u : u + t, o;
			},
			flipTarget: () => {}
		};
	}
}, ay = 1 / 60 * 1e3, av = "undefined" != typeof performance ? () => performance.now() : () => Date.now(), ax = "undefined" != typeof window ? (e) => window.requestAnimationFrame(e) : (e) => setTimeout(() => e(av()), ay), aw = !0, aC = !1, ak = !1, aP = {
	delta: 0,
	timestamp: 0
}, aM = [
	"read",
	"update",
	"preRender",
	"render",
	"postRender"
], aS = aM.reduce((e, t) => (e[t] = function(e) {
	let t = [], r = [], n = 0, a = !1, i = !1, o = /* @__PURE__ */ new WeakSet(), s = {
		schedule: (e, i = !1, s = !1) => {
			let l = s && a, u = l ? t : r;
			return i && o.add(e), -1 === u.indexOf(e) && (u.push(e), l && a && (n = t.length)), e;
		},
		cancel: (e) => {
			let t = r.indexOf(e);
			-1 !== t && r.splice(t, 1), o.delete(e);
		},
		process: (l) => {
			if (a) {
				i = !0;
				return;
			}
			if (a = !0, [t, r] = [r, t], r.length = 0, n = t.length) for (let r = 0; r < n; r++) {
				let n = t[r];
				n(l), o.has(n) && (s.schedule(n), e());
			}
			a = !1, i && (i = !1, s.process(l));
		}
	};
	return s;
}(() => aC = !0), e), {}), aA = aM.reduce((e, t) => {
	let r = aS[t];
	return e[t] = (e, t = !1, n = !1) => (aC || aO(), r.schedule(e, t, n)), e;
}, {}), a_ = aM.reduce((e, t) => (e[t] = aS[t].cancel, e), {}), aT = (e) => aS[e].process(aP), aR = (e) => {
	aC = !1, aP.delta = aw ? ay : Math.max(Math.min(e - aP.timestamp, 40), 1), aP.timestamp = e, ak = !0, aM.forEach(aT), ak = !1, aC && (aw = !1, ax(aR));
}, aO = () => {
	aC = !0, aw = !0, ak || ax(aR);
};
function aD(e, t, r = 0) {
	return e - t - r;
}
var a$ = (e) => {
	let t = ({ delta: t }) => e(t);
	return {
		start: () => aA.update(t, !0),
		stop: () => a_.update(t)
	};
};
function aI(e) {
	let t, r, n;
	var a, { from: i, autoplay: o = !0, driver: s = a$, elapsed: l = 0, repeat: u = 0, repeatType: c = "loop", repeatDelay: f = 0, onPlay: d, onStop: h, onComplete: g, onRepeat: p, onUpdate: m } = e, b = nA(e, [
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
	let { to: y } = b, v = 0, x = b.duration, w = !1, C = !0, k = function(e) {
		if (Array.isArray(e.to)) return am;
		if (ab[e.type]) return ab[e.type];
		let t = new Set(Object.keys(e));
		if (t.has("ease") || t.has("duration") && !t.has("dampingRatio"));
		else if (t.has("dampingRatio") || t.has("stiffness") || t.has("mass") || t.has("damping") || t.has("restSpeed") || t.has("restDelta")) return nL;
		return am;
	}(b);
	null != (a = k.needsInterpolation) && a.call(k, i, y) && (n = ah([0, 100], [i, y], { clamp: !1 }), i = 0, y = 100);
	let P = k(Object.assign(Object.assign({}, b), {
		from: i,
		to: y
	}));
	return o && (d?.(), (t = s(function(e) {
		if (C || (e = -e), l += e, !w) {
			let e = P.next(Math.max(0, l));
			r = e.value, n && (r = n(r)), w = C ? e.done : l <= 0;
		}
		if (m?.(r), w) if (0 === v && (x ??= l), v < u) {
			var a = l;
			(C ? a >= x + f : a <= -f) && (v++, "reverse" === c ? l = function(e, t, r = 0, n = !0) {
				return n ? aD(t + -e, t, r) : t - (e - t) + r;
			}(l, x, f, C = v % 2 == 0) : (l = aD(l, x, f), "mirror" === c && P.flipTarget()), w = !1, p && p());
		} else t.stop(), g && g();
	})).start()), { stop: () => {
		h?.(), t.stop();
	} };
}
var aL = (e, t) => 1 - 3 * t + 3 * e, aF = (e, t) => 3 * t - 6 * e, aE = (e, t, r) => ((aL(t, r) * e + aF(t, r)) * e + 3 * t) * e, aj = (e, t, r) => 3 * aL(t, r) * e * e + 2 * aF(t, r) * e + 3 * t, aV = {
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
}, aB = /[A-Z]|^ms/g, aH = /_EMO_([^_]+?)_([^]*?)_EMO_/g, aN = function(e) {
	return 45 === e.charCodeAt(1);
}, aW = function(e) {
	return null != e && "boolean" != typeof e;
}, az = (eQ = function(e) {
	return aN(e) ? e : e.replace(aB, "-$&").toLowerCase();
}, e0 = Object.create(null), function(e) {
	return void 0 === e0[e] && (e0[e] = eQ(e)), e0[e];
}), aU = function(e, t) {
	switch (e) {
		case "animation":
		case "animationName": if ("string" == typeof t) return t.replace(aH, function(e, t, r) {
			return e5 = {
				name: t,
				styles: r,
				next: e5
			}, t;
		});
	}
	return 1 === aV[e] || aN(e) || "number" != typeof t || 0 === t ? t : t + "px";
};
function aq(e, t, r) {
	if (null == r) return "";
	if (void 0 !== r.__emotion_styles) return r;
	switch (typeof r) {
		case "boolean": return "";
		case "object":
			if (1 === r.anim) return e5 = {
				name: r.name,
				styles: r.styles,
				next: e5
			}, r.name;
			if (void 0 !== r.styles) {
				var n = r.next;
				if (void 0 !== n) for (; void 0 !== n;) e5 = {
					name: n.name,
					styles: n.styles,
					next: e5
				}, n = n.next;
				return r.styles + ";";
			}
			return function(e, t, r) {
				var n = "";
				if (Array.isArray(r)) for (var a = 0; a < r.length; a++) n += aq(e, t, r[a]) + ";";
				else for (var i in r) {
					var o = r[i];
					if ("object" != typeof o) null != t && void 0 !== t[o] ? n += i + "{" + t[o] + "}" : aW(o) && (n += az(i) + ":" + aU(i, o) + ";");
					else if (Array.isArray(o) && "string" == typeof o[0] && (null == t || void 0 === t[o[0]])) for (var s = 0; s < o.length; s++) aW(o[s]) && (n += az(i) + ":" + aU(i, o[s]) + ";");
					else {
						var l = aq(e, t, o);
						switch (i) {
							case "animation":
							case "animationName":
								n += az(i) + ":" + l + ";";
								break;
							default: n += i + "{" + l + "}";
						}
					}
				}
				return n;
			}(e, t, r);
		case "function": if (void 0 !== e) {
			var a = e5, i = r(e);
			return e5 = a, aq(e, t, i);
		}
	}
	if (null == t) return r;
	var o = t[r];
	return void 0 !== o ? o : r;
}
var aG = /label:\s*([^\s;{]+)\s*(;|$)/g;
function aY() {
	return new Proxy({}, { get: (e, t) => t });
}
let aK = aY(), aX = {
	paddingX: [aK.paddingLeft, aK.paddingRight],
	paddingY: [aK.paddingTop, aK.paddingBottom],
	marginX: [aK.marginInlineStart, aK.marginInlineEnd],
	marginY: [aK.marginTop, aK.marginBottom],
	borderX: [aK.borderLeft, aK.borderRight],
	borderY: [aK.borderTop, aK.borderBottom],
	color: [aK.color, aK.fill],
	borderTopRadius: [aK.borderTopLeftRadius, aK.borderTopRightRadius],
	borderBottomRadius: [aK.borderBottomLeftRadius, aK.borderBottomRightRadius],
	borderRightRadius: [aK.borderTopRightRadius, aK.borderBottomRightRadius],
	borderLeftRadius: [aK.borderTopLeftRadius, aK.borderBottomLeftRadius],
	backgroundGradient: [aK.backgroundImage],
	boxSize: [aK.width, aK.height]
}, aJ = aY(), aZ = {
	font: aJ.fontFamily,
	shadow: aJ.boxShadow,
	rounded: aJ.borderRadius,
	roundedTop: aJ.borderTopRadius,
	roundedBottom: aJ.borderBottomRadius,
	roundedLeft: aJ.borderLeftRadius,
	roundedRight: aJ.borderRightRadius,
	bg: aJ.background,
	bgImage: aJ.backgroundImage,
	bgSize: aJ.backgroundSize,
	bgPosition: aJ.backgroundPosition,
	bgRepeat: aJ.backgroundRepeat,
	bgAttachment: aJ.backgroundAttachment,
	bgColor: aJ.backgroundColor,
	bgGradient: aJ.backgroundGradient,
	bgClip: aJ.backgroundClip,
	pos: aJ.position,
	p: aJ.padding,
	pt: aJ.paddingTop,
	pr: aJ.paddingRight,
	pl: aJ.paddingLeft,
	pb: aJ.paddingBottom,
	ps: aJ.paddingInlineStart,
	pe: aJ.paddingInlineEnd,
	px: aJ.paddingX,
	py: aJ.paddingY,
	m: aJ.margin,
	mt: aJ.marginTop,
	mr: aJ.marginRight,
	ml: aJ.marginLeft,
	mb: aJ.marginBottom,
	ms: aJ.marginInlineStart,
	me: aJ.marginInlineEnd,
	mx: aJ.marginX,
	my: aJ.marginY,
	w: aJ.width,
	minW: aJ.minWidth,
	maxW: aJ.maxWidth,
	h: aJ.height,
	minH: aJ.minHeight,
	maxH: aJ.maxHeight
}, aQ = aY(), a0 = (...e) => {
	let t = [...e];
	for (let r of e) aZ[r] && t.push(aZ[r]);
	return t;
}, a1 = {
	_rtl: "[dir=rtl] &, &[dir=rtl]",
	_ltr: "[dir=ltr] &, &[dir=ltr]",
	_dark: "&[data-theme=dark]",
	_light: "&[data-theme=light]"
};
var a2 = class e {
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
	static convertSelector = (t) => {
		if (a1[t]) return a1[t];
		let r = t;
		if (r.startsWith("$") || r.endsWith("$") || r.startsWith("_")) {
			let t = "", n = "";
			if (r.startsWith("_") ? (t = "&", r = r.slice(1)) : r.startsWith("$") ? (t = "& ", r = r.slice(1)) : (n = " &", r = r.slice(0, r.length - 1)), r.startsWith("data") || r.startsWith("aria")) {
				let [e, a] = r.split("__");
				return a ? `${t}[${eH(e)}='${eH(a)}']${n}` : `${t}[${eH(e)}]${n}`;
			}
			if ("&" === t) {
				if (r.startsWith("$")) return `${t}::${r.slice(1)}`;
				if (e.supportedPseudoClasses[r]) {
					let n = e.supportedPseudoClasses[r];
					return `${t}:${n}, ${t}[data-${n}]:not([data-${n}='false']), ${t}.${n}`;
				}
				let [n, a] = r.split("__"), i = eH(n);
				return a ? `${t}[data-${i}='${eH(a)}']` : `${t}[data-${i}]:not([data-${i}='false'])`;
			}
		}
	};
	static walkStateValues = (t, r, n = {
		default: {},
		selectorPath: [],
		path: []
	}) => {
		let { $: a,...i } = t;
		for (let t in i) {
			let o = i[t], s = i.default ?? n.default, l = a ?? p(s, [...n.path.slice(1), "$"]), u = l ? [...n.selectorPath, l] : n.selectorPath, c = [...n.path, t];
			if (eW(o)) {
				e.walkStateValues(o, r, {
					path: c,
					selectorPath: u,
					default: s
				});
				continue;
			}
			r(o, c, u);
		}
	};
	constructor(e) {
		this.opt = e;
	}
	processAll(t, r = !0) {
		let n = [], { state: a, extends: i,...o } = t;
		if (i) for (let e of i) n.push(...this.processAll(e, r));
		if (a) {
			let t = {}, r = {};
			e.walkStateValues(a, (e, n, a) => {
				let i = `--${this.opt.varPrefix}-state-${n.join("-")}`, o = rs(n) ?? "", s = {};
				this.process(s, o, e, !1), t[i] = s[o], rj(r, [...a, o], `var(${i})`);
			}), n.push(t), n.push(...this.processAll(r));
		}
		if (!s(o)) {
			let e = {};
			this.processTo(e, o, r), n.push(e);
		}
		return n;
	}
	processTo(e, t, r = !0) {
		for (let n in t) this.process(e, n, t[n], r);
	}
	process(t, r, n, a = !0) {
		if (this.opt.mixins[r]) {
			let e = this.opt.mixins[r]?.get(n);
			if (e) for (let r in e) this.process(t, r, e[r], a);
			return;
		}
		let i = r;
		if (eW(n)) {
			t[i = e.convertSelector(i) ?? i] = t[i] ?? {}, this.processTo(t[i], n);
			return;
		}
		if (a && aX[i = aZ[i] ?? i]) {
			for (let e of aX[i]) t[e] = this.opt.processValue(e, n);
			return;
		}
		t[i] = this.opt.processValue(i, n);
	}
};
let a4 = ((e1 = {}).var = "var", e1.mixin = "mixin", e1);
var a5 = class e {
	static create(e, { value: t, on: r, transform: n }) {
		return {
			type: e,
			value: t,
			on: r,
			transform: n,
			__Tokens: void 0,
			__ValueType: void 0,
			__CSSTokens: void 0
		};
	}
	static color(t) {
		return e.create(a4.var, {
			value: t,
			on: a0(aQ.color, aQ.bgColor, aQ.outlineColor, aQ.borderColor, aQ.accentColor, aQ.fill, aQ.stroke),
			transform: (e, t) => rf(e) ? {
				default: `var(${t(e)})`,
				rgb: `var(${t(`${e}/rgb`)})`
			} : {
				default: `rgb(${e[0]}, ${e[1]}, ${e[2]})`,
				rgb: `${e[0]} ${e[1]} ${e[2]}`
			},
			fallback: ""
		});
	}
	static space(t) {
		return e.create(a4.var, {
			value: t,
			on: a0(aQ.gap, aQ.rowGap, aQ.columnGap, aQ.top, aQ.right, aQ.bottom, aQ.left, aQ.m, aQ.ms, aQ.me, aQ.mt, aQ.mr, aQ.mb, aQ.ml, aQ.mx, aQ.my, aQ.p, aQ.ps, aQ.pe, aQ.pt, aQ.pr, aQ.pb, aQ.pl, aQ.px, aQ.py)
		});
	}
	static boxSize(t) {
		return e.create(a4.var, {
			value: t,
			on: a0(aQ.w, aQ.minW, aQ.maxW, aQ.h, aQ.minH, aQ.maxH, aQ.boxSize),
			fallback: 0
		});
	}
	static fontSize(t) {
		return e.create(a4.var, {
			value: t,
			on: a0(aQ.fontSize),
			fallback: 0
		});
	}
	static lineHeight(t) {
		return e.create(a4.var, {
			value: t,
			on: a0(aQ.lineHeight),
			fallback: 0
		});
	}
	static rounded(t) {
		return e.create(a4.var, {
			value: t,
			fallback: 0,
			on: a0(aQ.rounded, aQ.roundedTop, aQ.roundedBottom, aQ.roundedLeft, aQ.roundedRight, aK.borderTopLeftRadius, aK.borderTopRightRadius, aK.borderBottomLeftRadius, aK.borderBottomRightRadius, aK.borderTopRightRadius, aK.borderBottomRightRadius, aK.borderTopLeftRadius, aK.borderBottomLeftRadius)
		});
	}
	static transitionTimingFunction(t) {
		return e.create(a4.var, {
			value: t,
			on: a0(aQ.transitionTimingFunction)
		});
	}
	static transitionDuration(t) {
		return e.create(a4.var, {
			value: t,
			on: a0(aQ.transitionDuration),
			transform: (e) => `${e}ms`
		});
	}
	static font(t) {
		return e.create(a4.var, {
			value: t,
			on: a0(aQ.font)
		});
	}
	static fontWeight(t) {
		return e.create(a4.var, {
			value: t,
			on: a0(aQ.fontWeight)
		});
	}
	static letterSpacing(t) {
		return e.create(a4.var, {
			value: t,
			on: a0(aQ.letterSpacing)
		});
	}
	static shadow(t) {
		return e.create(a4.var, {
			value: t,
			on: a0(aQ.shadow)
		});
	}
	static customMixin(t, r) {
		return e.create(a4.mixin, {
			value: r,
			on: [t]
		});
	}
	static mixin(e) {
		return {
			...e,
			__mixin: !0
		};
	}
};
let a3 = (e, t, r) => {
	let n = e;
	for (let e = 0; e < t.length; e++) {
		let a = t[e];
		if (e === t.length - 1) {
			n[a] = r;
			continue;
		}
		n[a] = n[a] ?? {}, n = n[a];
	}
};
var a8 = class e {
	static defaultMode = "_default";
	static walkValues = (t, r, n = []) => {
		for (let a in t) {
			let i = t[a];
			if (eW(i)) {
				if (rc(i, "_default")) {
					r(i, [...n, a]);
					continue;
				}
				e.walkValues(i, r, [...n, a]);
				continue;
			}
			r(i, [...n, a]);
		}
	};
	__Tokens = void 0;
	_values = {};
	_cssVarRefs = {};
	constructor(t, { cssVar: r, transformFallback: n }) {
		e.walkValues(t.value, (e, a) => {
			let i = a.join("."), o = (e, a) => {
				let i = t.transform ? t.transform(e, r) : n(e);
				if (eC(i)) for (let e in i) a(i[e], "default" === e ? "" : e);
				else a(i, "");
			};
			if (rj(this._cssVarRefs, [i], r(i)), eW(e)) for (let t in e) o(e[t], (e, r) => {
				rj(this._values, [`${i}${r ? `/${r}` : ""}`, t], e);
			});
			else o(e, (e, t) => {
				rj(this._values, [`${i}${t ? `/${t}` : ""}`], e);
			});
		});
	}
	get tokens() {
		return eA(this._values);
	}
	get(t, r, n) {
		let a = this._values[t];
		return eC(a) ? n ? a[r] : a[r] ?? a[e.defaultMode] : n ? r === e.defaultMode ? a : void 0 : a;
	}
	use(e, t = !1) {
		if (this._cssVarRefs[e]) return t ? `${this._cssVarRefs[e]}` : `var(${this._cssVarRefs[e]})`;
	}
}, a6 = class e {
	static walkValue = (t, r, n = []) => {
		for (let a in t) {
			let i = t[a];
			if (eW(i)) {
				if (rc(i, "__mixin")) {
					r(i, [...n, a]);
					continue;
				}
				e.walkValue(i, r, [...n, a]);
				continue;
			}
			r(i, [...n, a]);
		}
	};
	_values = {};
	constructor(t) {
		e.walkValue(t.value, (e, t) => {
			let r = t.join(".");
			rj(this._values, [r], rm(e, "__mixin"));
		});
	}
	get tokens() {
		return eA(this._values);
	}
	get(e) {
		return this._values[e];
	}
}, a9 = {
	primary: ["primary"],
	secondary: ["secondary"],
	tertiary: ["tertiary"],
	error: ["error"],
	warning: ["warning"],
	success: ["success"],
	neutral: ["surface", "outline"]
};
let a7 = (e) => {
	let t = p(e, ["color", "sys"], {});
	return {
		...e,
		color: { sys: rh(a9, (e) => rv(t, (t, r) => rB(e, (e) => r.indexOf(e) > -1))) }
	};
}, ie = (e) => (t) => `rgba(var(${t}--rgb) / ${e})`;
function it(e, t) {
	return Object.assign((e) => t(e), {
		toString: () => e,
		token: e
	});
}
var ir = (e) => e.reduce((e, t) => Object.assign(e, { [t]: !0 }), {}), ia = class e {
	static propsCanPercent = ir([...a5.boxSize({}).on]);
	static propsCanBaseDp = ir([
		...a5.boxSize({}).on,
		...a5.space({}).on,
		...a5.fontSize({}).on,
		...a5.letterSpacing({}).on,
		...a5.lineHeight({}).on,
		...a5.rounded({}).on
	]);
	static create(t, r) {
		return new e(t, r);
	}
	mode;
	varPrefix;
	cssVars = {};
	tokens = {};
	propValues = {};
	mixins = {};
	dp = (e) => 0 === e ? 0 : `calc(${e} * var(${this.cssVar("space", "dp")}))`;
	transformFallback = (t, r) => e.propsCanBaseDp[t] && rd(r) ? e.propsCanPercent[t] && 1 > Math.abs(r) ? `${100 * r}%` : this.dp(r) : r;
	constructor(e, t = {}) {
		for (let r in this.theme = e, this.varPrefix = t.varPrefix ?? "vk", this.mode = t.mode ?? "light", rj(this.cssVars, [this.cssVar("space", "dp")], "0.1rem"), e) {
			let t = e[r];
			if (t) {
				if (t.type === a4.var) {
					let e = new a8(t, {
						cssVar: (e) => this.cssVar(r, e),
						transformFallback: (e) => this.transformFallback(t.on[0], e)
					});
					for (let n of (this.tokens[r] = e, t.on)) this.propValues[n] = e;
					for (let t of e.tokens) for (let n of ["light", "dark"]) {
						let a = n === this.mode ? "_default" : `_${n}`, i = e.get(t, a, !0);
						O(i) || ("_default" === a ? rj(this.cssVars, [this.cssVar(r, t)], i) : rj(this.cssVars, [a, this.cssVar(r, t)], i));
					}
					continue;
				}
				if (t.type === a4.mixin) {
					let e = new a6(t);
					for (let r of t.on) this.mixins[r] = e;
				}
			}
		}
	}
	cssVar(e, t) {
		return `--${this.varPrefix}-${eH(e)}__${t.replaceAll("/", "--").replaceAll(".", "__")}`;
	}
	get rootCSSVars() {
		return this.cssVars;
	}
	token = new Proxy({}, { get: (e, t) => this.tokens[t] ? Object.assign((e) => this.tokens[t]?.get(e, `_${this.mode}`), { tokens: this.tokens[t]?.tokens }) : this.mixins[t] ? Object.assign((e) => this.mixins[t]?.get(e), { tokens: this.mixins[t]?.tokens }) : void 0 });
	processValue = (e, t) => {
		if (ec(t) && rc(t, "token")) {
			let r = this.propValues[e]?.use(t.token, !0);
			return r ? t(r) : void 0;
		}
		return this.propValues[e]?.use(t) ?? this.transformFallback(e, t);
	};
	unstable_sx = (e) => new a2({
		mixins: this.mixins,
		varPrefix: this.varPrefix,
		processValue: this.processValue
	}).processAll(e);
	unstable_css(e, t) {
		let r = t ?? {};
		return r.__emotion_styles = r.__emotion_styles ?? function(e, t, r) {
			if (1 === e.length && "object" == typeof e[0] && null !== e[0] && void 0 !== e[0].styles) return e[0];
			var n, a = !0, i = "";
			e5 = void 0;
			var o = e[0];
			null == o || void 0 === o.raw ? (a = !1, i += aq(r, t, o)) : i += o[0];
			for (var s = 1; s < e.length; s++) i += aq(r, t, e[s]), a && (i += o[s]);
			aG.lastIndex = 0;
			for (var l = ""; null !== (n = aG.exec(i));) l += "-" + n[1];
			return {
				name: function(e) {
					for (var t, r = 0, n = 0, a = e.length; a >= 4; ++n, a -= 4) t = (65535 & (t = 255 & e.charCodeAt(n) | (255 & e.charCodeAt(++n)) << 8 | (255 & e.charCodeAt(++n)) << 16 | (255 & e.charCodeAt(++n)) << 24)) * 1540483477 + ((t >>> 16) * 59797 << 16), t ^= t >>> 24, r = (65535 & t) * 1540483477 + ((t >>> 16) * 59797 << 16) ^ (65535 & r) * 1540483477 + ((r >>> 16) * 59797 << 16);
					switch (a) {
						case 3: r ^= (255 & e.charCodeAt(n + 2)) << 16;
						case 2: r ^= (255 & e.charCodeAt(n + 1)) << 8;
						case 1: r ^= 255 & e.charCodeAt(n), r = (65535 & r) * 1540483477 + ((r >>> 16) * 59797 << 16);
					}
					return r ^= r >>> 13, (((r = (65535 & r) * 1540483477 + ((r >>> 16) * 59797 << 16)) ^ r >>> 15) >>> 0).toString(36);
				}(i) + l,
				styles: i,
				next: e5
			};
		}(this.unstable_sx(t), e?.registered, {}), r.__emotion_styles;
	}
	toFigmaTokens() {
		let e = { space: { dp: {
			$type: "sizing",
			$value: 1
		} } }, t = {}, r = {}, n = (e, t) => eC(t) ? {
			$type: e,
			$value: rh(t, (t) => n(e, t).$value)
		} : rf(t) ? {
			$type: e,
			$value: t.replace(/var\(([^)]+)\)/g, (e) => {
				let t = e.slice(4, e.length - 1).slice(`--${this.varPrefix}-`.length).split("--")[0]?.split("__").map((e, t) => 0 === t ? tz(e) : e).join(".") ?? "";
				return t.startsWith("sys.") ? `{${t}}` : `{seed.${t}}`;
			}).replace(/calc\(.+\)$/g, (e) => e.slice(5, e.length - 1))
		} : {
			$type: e,
			$value: t
		};
		for (let a in this.tokens) {
			let i = this.tokens[a], o = (o) => {
				for (let s of i.tokens) if (!s.includes("/")) if (s.startsWith("sys.")) {
					let e = i.get(s, "_default"), l = i.get(s, "_dark");
					a3(t, [a, ...s.split(".")], n(o, e)), e !== l && a3(r, [a, ...s.split(".")], n(o, l));
				} else a3(e, [a, ...s.split(".")], n(o, i.get(s, "_default")));
			};
			switch (a) {
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
			let r = this.mixins[e];
			if (!r) continue;
			let a = (a) => {
				for (let i of r.tokens) {
					let o = r.get(i);
					if (!o) continue;
					let s = this.unstable_sx(o)[0];
					a3(t, [e, ...i.split(".")], n(a, s));
				}
			};
			"textStyle" === e && a("typography");
		}
		return {
			seed: e,
			base: a7(t),
			dark: a7(r)
		};
	}
};
let ii = {
	shadow: a5.shadow({
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
	elevation: a5.customMixin("elevation", {
		0: a5.mixin({
			transitionDuration: "md4",
			transitionTimingFunction: "standard",
			shadow: "0",
			_hover: { shadow: "1" }
		}),
		1: a5.mixin({
			transitionDuration: "md4",
			transitionTimingFunction: "standard",
			shadow: "1",
			_hover: { shadow: "2" }
		}),
		2: a5.mixin({
			transitionDuration: "md4",
			transitionTimingFunction: "standard",
			shadow: "2",
			_hover: { shadow: "3" }
		}),
		3: a5.mixin({
			transitionDuration: "md4",
			transitionTimingFunction: "standard",
			shadow: "3",
			_hover: { shadow: "4" }
		}),
		4: a5.mixin({
			transitionDuration: "md4",
			transitionTimingFunction: "standard",
			shadow: "4",
			_hover: { shadow: "5" }
		})
	})
};
var io = (e, t, r, n) => Object.assign(function(e, t, r, n) {
	if (e === t && r === n) return ag;
	let a = new Float32Array(11);
	for (let t = 0; t < 11; ++t) a[t] = aE(.1 * t, e, r);
	return (i) => 0 === i || 1 === i ? i : aE(function(t) {
		let n = 0, i = 1;
		for (; 10 !== i && a[i] <= t; ++i) n += .1;
		let o = n + (t - a[--i]) / (a[i + 1] - a[i]) * .1, s = aj(o, e, r);
		if (s >= .001) {
			var l = o;
			for (let n = 0; n < 8; ++n) {
				let n = aj(l, e, r);
				if (0 === n) break;
				let a = aE(l, e, r) - t;
				l -= a / n;
			}
			return l;
		}
		return 0 === s ? o : function(e, t, r, n, a) {
			let i, o, s = 0;
			do
				(i = aE(o = t + (r - t) / 2, n, a) - e) > 0 ? r = o : t = o;
			while (Math.abs(i) > 1e-7 && ++s < 10);
			return o;
		}(t, n, n + .1, e, r);
	}(i), t, n);
}(e, t, r, n), { toString: () => `cubic-bezier(${e}, ${t}, ${r}, ${n})` });
let is = {
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
		linear: io(0, 0, 1, 1),
		standard: Object.assign(io(.2, 0, 0, 1), {
			accelerate: io(.3, 0, 1, 1),
			decelerate: io(0, 0, 0, 1)
		}),
		emphasized: Object.assign(io(.2, 0, 0, 1), {
			accelerate: io(.3, 0, .8, .15),
			decelerate: io(.05, .7, .1, 1)
		}),
		legacy: Object.assign(io(.4, 0, .2, 1), {
			decelerate: io(0, 0, .2, 1),
			accelerate: io(.4, 0, 1, 1)
		})
	}
}, il = (e, t) => {
	let r = t ?? {
		...e,
		from: { ...e.to },
		to: { ...e.from }
	};
	return F({
		onComplete: ez(),
		$default: ez()
	}, (t, { slots: n, emit: a }) => {
		let i, o = (t, r) => {
			i = aI({
				...e,
				autoplay: !0,
				onComplete: () => {
					r(), a("complete", "enter");
				},
				onUpdate: (e) => {
					Object.assign(t.style, e);
				}
			});
		}, s = (e, t) => {
			i = aI({
				...r,
				autoplay: !0,
				onComplete: () => {
					t(), a("complete", "leave");
				},
				onUpdate: (t) => {
					Object.assign(e.style, t);
				}
			});
		}, l = () => {
			i?.stop();
		};
		return () => ew(rJ, {
			css: !1,
			onEnter: o,
			onEnterCancelled: l,
			onLeave: s,
			onLeaveCancelled: l,
			children: n.default?.()
		});
	}, { name: "Transition" });
}, iu = {
	transitionDuration: a5.transitionDuration(is.duration),
	transitionTimingFunction: a5.transitionTimingFunction({
		linear: is.easing.linear.toString(),
		standard: is.easing.standard.toString(),
		"standard-accelerate": is.easing.standard.accelerate.toString(),
		"standard-decelerate": is.easing.standard.decelerate.toString(),
		emphasized: is.easing.emphasized.toString(),
		"emphasized-decelerate": is.easing.emphasized.decelerate.toString(),
		"emphasized-accelerate": is.easing.emphasized.accelerate.toString(),
		legacy: is.easing.legacy.toString(),
		"legacy-decelerate": is.easing.legacy.decelerate.toString(),
		"legacy-accelerate": is.easing.legacy.accelerate.toString()
	})
};
function ic(e) {
	return e < 0 ? -1 : +(0 !== e);
}
function id(e, t, r) {
	return r < e ? e : r > t ? t : r;
}
function ih(e) {
	return (e %= 360) < 0 && (e += 360), e;
}
function ig(e) {
	return (e %= 360) < 0 && (e += 360), e;
}
function ip(e, t) {
	return [
		e[0] * t[0][0] + e[1] * t[0][1] + e[2] * t[0][2],
		e[0] * t[1][0] + e[1] * t[1][1] + e[2] * t[1][2],
		e[0] * t[2][0] + e[1] * t[2][1] + e[2] * t[2][2]
	];
}
var im = [
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
], ib = [
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
], iy = [
	95.047,
	100,
	108.883
];
function iv(e, t, r) {
	return (-16777216 | (255 & e) << 16 | (255 & t) << 8 | 255 & r) >>> 0;
}
function ix(e) {
	let t = iM(e[0]);
	return iv(t, iM(e[1]), iM(e[2]));
}
function iw(e) {
	return 116 * iS(function(e) {
		let t = iP(e >> 16 & 255);
		return ip([
			t,
			iP(e >> 8 & 255),
			iP(255 & e)
		], im);
	}(e)[1] / 100) - 16;
}
function iC(e) {
	return 100 * function(e) {
		let t = e * e * e;
		return t > 216 / 24389 ? t : (116 * e - 16) / (24389 / 27);
	}((e + 16) / 116);
}
function ik(e) {
	return 116 * iS(e / 100) - 16;
}
function iP(e) {
	let t = e / 255;
	return t <= .040449936 ? t / 12.92 * 100 : 100 * Math.pow((t + .055) / 1.055, 2.4);
}
function iM(e) {
	var t;
	let r = e / 100;
	return (t = Math.round(255 * (r <= .0031308 ? 12.92 * r : 1.055 * Math.pow(r, 1 / 2.4) - .055))) < 0 ? 0 : t > 255 ? 255 : t;
}
function iS(e) {
	return e > 216 / 24389 ? Math.pow(e, 1 / 3) : (24389 / 27 * e + 16) / 116;
}
var iA = class e {
	static make(t = iy, r = 200 / Math.PI * iC(50) / 100, n = 50, a = 2, i = !1) {
		var o, s;
		let l = .401288 * t[0] + .650173 * t[1] + -.051461 * t[2], u = -.250268 * t[0] + 1.204414 * t[1] + .045854 * t[2], c = -.002079 * t[0] + .048952 * t[1] + .953127 * t[2], f = .8 + a / 10, d = f >= .9 ? (1 - (o = (f - .9) * 10)) * .59 + .69 * o : (1 - (s = (f - .8) * 10)) * .525 + .59 * s, h = i ? 1 : f * (1 - 1 / 3.6 * Math.exp((-r - 42) / 92)), g = [
			100 / l * (h = h > 1 ? 1 : h < 0 ? 0 : h) + 1 - h,
			100 / u * h + 1 - h,
			100 / c * h + 1 - h
		], p = 1 / (5 * r + 1), m = p * p * p * p, b = 1 - m, y = m * r + .1 * b * b * Math.cbrt(5 * r), v = iC(n) / t[1], x = 1.48 + Math.sqrt(v), w = .725 / Math.pow(v, .2), C = [
			Math.pow(y * g[0] * l / 100, .42),
			Math.pow(y * g[1] * u / 100, .42),
			Math.pow(y * g[2] * c / 100, .42)
		], k = [
			400 * C[0] / (C[0] + 27.13),
			400 * C[1] / (C[1] + 27.13),
			400 * C[2] / (C[2] + 27.13)
		];
		return new e(v, (2 * k[0] + k[1] + .05 * k[2]) * w, w, w, d, f, g, y, Math.pow(y, .25), x);
	}
	constructor(e, t, r, n, a, i, o, s, l, u) {
		this.n = e, this.aw = t, this.nbb = r, this.ncb = n, this.c = a, this.nc = i, this.rgbD = o, this.fl = s, this.fLRoot = l, this.z = u;
	}
};
iA.DEFAULT = iA.make();
var i_ = class e {
	constructor(e, t, r, n, a, i, o, s, l) {
		this.hue = e, this.chroma = t, this.j = r, this.q = n, this.m = a, this.s = i, this.jstar = o, this.astar = s, this.bstar = l;
	}
	distance(e) {
		let t = this.jstar - e.jstar, r = this.astar - e.astar, n = this.bstar - e.bstar;
		return 1.41 * Math.pow(Math.sqrt(t * t + r * r + n * n), .63);
	}
	static fromInt(t) {
		return e.fromIntInViewingConditions(t, iA.DEFAULT);
	}
	static fromIntInViewingConditions(t, r) {
		let n = iP((16711680 & t) >> 16), a = iP((65280 & t) >> 8), i = iP(255 & t), o = .41233895 * n + .35762064 * a + .18051042 * i, s = .2126 * n + .7152 * a + .0722 * i, l = .01932141 * n + .11916382 * a + .95034478 * i, u = r.rgbD[0] * (.401288 * o + .650173 * s - .051461 * l), c = r.rgbD[1] * (-.250268 * o + 1.204414 * s + .045854 * l), f = r.rgbD[2] * (-.002079 * o + .048952 * s + .953127 * l), d = Math.pow(r.fl * Math.abs(u) / 100, .42), h = Math.pow(r.fl * Math.abs(c) / 100, .42), g = Math.pow(r.fl * Math.abs(f) / 100, .42), p = 400 * ic(u) * d / (d + 27.13), m = 400 * ic(c) * h / (h + 27.13), b = 400 * ic(f) * g / (g + 27.13), y = (11 * p + -12 * m + b) / 11, v = (p + m - 2 * b) / 9, x = 180 * Math.atan2(v, y) / Math.PI, w = x < 0 ? x + 360 : x >= 360 ? x - 360 : x, C = w * Math.PI / 180, k = 100 * Math.pow((40 * p + 20 * m + b) / 20 * r.nbb / r.aw, r.c * r.z), P = 4 / r.c * Math.sqrt(k / 100) * (r.aw + 4) * r.fLRoot, M = Math.pow(5e4 / 13 * (.25 * (Math.cos((w < 20.14 ? w + 360 : w) * Math.PI / 180 + 2) + 3.8)) * r.nc * r.ncb * Math.sqrt(y * y + v * v) / ((20 * p + 20 * m + 21 * b) / 20 + .305), .9) * Math.pow(1.64 - Math.pow(.29, r.n), .73), S = M * Math.sqrt(k / 100), A = S * r.fLRoot, _ = 50 * Math.sqrt(M * r.c / (r.aw + 4)), T = 1 / .0228 * Math.log(1 + .0228 * A);
		return new e(w, S, k, P, A, _, 1.7000000000000002 * k / (1 + .007 * k), T * Math.cos(C), T * Math.sin(C));
	}
	static fromJch(t, r, n) {
		return e.fromJchInViewingConditions(t, r, n, iA.DEFAULT);
	}
	static fromJchInViewingConditions(t, r, n, a) {
		let i = 4 / a.c * Math.sqrt(t / 100) * (a.aw + 4) * a.fLRoot, o = r * a.fLRoot, s = 50 * Math.sqrt(r / Math.sqrt(t / 100) * a.c / (a.aw + 4)), l = n * Math.PI / 180, u = 1 / .0228 * Math.log(1 + .0228 * o);
		return new e(n, r, t, i, o, s, 1.7000000000000002 * t / (1 + .007 * t), u * Math.cos(l), u * Math.sin(l));
	}
	static fromUcs(t, r, n) {
		return e.fromUcsInViewingConditions(t, r, n, iA.DEFAULT);
	}
	static fromUcsInViewingConditions(t, r, n, a) {
		let i = (Math.exp(.0228 * Math.sqrt(r * r + n * n)) - 1) / .0228 / a.fLRoot, o = 180 / Math.PI * Math.atan2(n, r);
		return o < 0 && (o += 360), e.fromJchInViewingConditions(t / (1 - (t - 100) * .007), i, o, a);
	}
	toInt() {
		return this.viewed(iA.DEFAULT);
	}
	viewed(e) {
		let t = Math.pow((0 === this.chroma || 0 === this.j ? 0 : this.chroma / Math.sqrt(this.j / 100)) / Math.pow(1.64 - Math.pow(.29, e.n), .73), 1 / .9), r = this.hue * Math.PI / 180, n = .25 * (Math.cos(r + 2) + 3.8), a = e.aw * Math.pow(this.j / 100, 1 / e.c / e.z), i = 5e4 / 13 * n * e.nc * e.ncb, o = a / e.nbb, s = Math.sin(r), l = Math.cos(r), u = 23 * (o + .305) * t / (23 * i + 11 * t * l + 108 * t * s), c = u * l, f = u * s, d = (460 * o + 451 * c + 288 * f) / 1403, h = (460 * o - 891 * c - 261 * f) / 1403, g = (460 * o - 220 * c - 6300 * f) / 1403, p = Math.max(0, 27.13 * Math.abs(d) / (400 - Math.abs(d))), m = ic(d) * (100 / e.fl) * Math.pow(p, 1 / .42), b = Math.max(0, 27.13 * Math.abs(h) / (400 - Math.abs(h))), y = ic(h) * (100 / e.fl) * Math.pow(b, 1 / .42), v = Math.max(0, 27.13 * Math.abs(g) / (400 - Math.abs(g))), x = ic(g) * (100 / e.fl) * Math.pow(v, 1 / .42), w = m / e.rgbD[0], C = y / e.rgbD[1], k = x / e.rgbD[2];
		return function(e, t, r) {
			let n = ib[0][0] * e + ib[0][1] * t + ib[0][2] * r, a = ib[1][0] * e + ib[1][1] * t + ib[1][2] * r, i = ib[2][0] * e + ib[2][1] * t + ib[2][2] * r, o = iM(n);
			return iv(o, iM(a), iM(i));
		}(1.86206786 * w - 1.01125463 * C + .14918677 * k, .38752654 * w + .62144744 * C - .00897398 * k, -.0158415 * w - .03412294 * C + 1.04996444 * k);
	}
	static fromXyzInViewingConditions(t, r, n, a) {
		let i = a.rgbD[0] * (.401288 * t + .650173 * r - .051461 * n), o = a.rgbD[1] * (-.250268 * t + 1.204414 * r + .045854 * n), s = a.rgbD[2] * (-.002079 * t + .048952 * r + .953127 * n), l = Math.pow(a.fl * Math.abs(i) / 100, .42), u = Math.pow(a.fl * Math.abs(o) / 100, .42), c = Math.pow(a.fl * Math.abs(s) / 100, .42), f = 400 * ic(i) * l / (l + 27.13), d = 400 * ic(o) * u / (u + 27.13), h = 400 * ic(s) * c / (c + 27.13), g = (11 * f + -12 * d + h) / 11, p = (f + d - 2 * h) / 9, m = 180 * Math.atan2(p, g) / Math.PI, b = m < 0 ? m + 360 : m >= 360 ? m - 360 : m, y = b * Math.PI / 180, v = 100 * Math.pow((40 * f + 20 * d + h) / 20 * a.nbb / a.aw, a.c * a.z), x = 4 / a.c * Math.sqrt(v / 100) * (a.aw + 4) * a.fLRoot, w = Math.pow(5e4 / 13 * (1 / 4 * (Math.cos((b < 20.14 ? b + 360 : b) * Math.PI / 180 + 2) + 3.8)) * a.nc * a.ncb * Math.sqrt(g * g + p * p) / ((20 * f + 20 * d + 21 * h) / 20 + .305), .9) * Math.pow(1.64 - Math.pow(.29, a.n), .73), C = w * Math.sqrt(v / 100), k = C * a.fLRoot, P = 50 * Math.sqrt(w * a.c / (a.aw + 4)), M = Math.log(1 + .0228 * k) / .0228;
		return new e(b, C, v, x, k, P, 1.7000000000000002 * v / (1 + .007 * v), M * Math.cos(y), M * Math.sin(y));
	}
	xyzInViewingConditions(e) {
		let t = Math.pow((0 === this.chroma || 0 === this.j ? 0 : this.chroma / Math.sqrt(this.j / 100)) / Math.pow(1.64 - Math.pow(.29, e.n), .73), 1 / .9), r = this.hue * Math.PI / 180, n = .25 * (Math.cos(r + 2) + 3.8), a = e.aw * Math.pow(this.j / 100, 1 / e.c / e.z), i = 5e4 / 13 * n * e.nc * e.ncb, o = a / e.nbb, s = Math.sin(r), l = Math.cos(r), u = 23 * (o + .305) * t / (23 * i + 11 * t * l + 108 * t * s), c = u * l, f = u * s, d = (460 * o + 451 * c + 288 * f) / 1403, h = (460 * o - 891 * c - 261 * f) / 1403, g = (460 * o - 220 * c - 6300 * f) / 1403, p = Math.max(0, 27.13 * Math.abs(d) / (400 - Math.abs(d))), m = ic(d) * (100 / e.fl) * Math.pow(p, 1 / .42), b = Math.max(0, 27.13 * Math.abs(h) / (400 - Math.abs(h))), y = ic(h) * (100 / e.fl) * Math.pow(b, 1 / .42), v = Math.max(0, 27.13 * Math.abs(g) / (400 - Math.abs(g))), x = ic(g) * (100 / e.fl) * Math.pow(v, 1 / .42), w = m / e.rgbD[0], C = y / e.rgbD[1], k = x / e.rgbD[2];
		return [
			1.86206786 * w - 1.01125463 * C + .14918677 * k,
			.38752654 * w + .62144744 * C - .00897398 * k,
			-.0158415 * w - .03412294 * C + 1.04996444 * k
		];
	}
}, iT = class e {
	static sanitizeRadians(e) {
		return (e + 8 * Math.PI) % (2 * Math.PI);
	}
	static trueDelinearized(e) {
		let t = e / 100;
		return 255 * (t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055);
	}
	static chromaticAdaptation(e) {
		let t = Math.pow(Math.abs(e), .42);
		return 400 * ic(e) * t / (t + 27.13);
	}
	static hueOf(t) {
		let r = ip(t, e.SCALED_DISCOUNT_FROM_LINRGB), n = e.chromaticAdaptation(r[0]), a = e.chromaticAdaptation(r[1]), i = e.chromaticAdaptation(r[2]);
		return Math.atan2((n + a - 2 * i) / 9, (11 * n + -12 * a + i) / 11);
	}
	static areInCyclicOrder(t, r, n) {
		return e.sanitizeRadians(r - t) < e.sanitizeRadians(n - t);
	}
	static intercept(e, t, r) {
		return (t - e) / (r - e);
	}
	static lerpPoint(e, t, r) {
		return [
			e[0] + (r[0] - e[0]) * t,
			e[1] + (r[1] - e[1]) * t,
			e[2] + (r[2] - e[2]) * t
		];
	}
	static setCoordinate(t, r, n, a) {
		let i = e.intercept(t[a], r, n[a]);
		return e.lerpPoint(t, i, n);
	}
	static isBounded(e) {
		return 0 <= e && e <= 100;
	}
	static nthVertex(t, r) {
		let n = e.Y_FROM_LINRGB[0], a = e.Y_FROM_LINRGB[1], i = e.Y_FROM_LINRGB[2], o = r % 4 <= 1 ? 0 : 100, s = 100 * (r % 2 != 0);
		if (r < 4) {
			let r = (t - o * a - s * i) / n;
			return e.isBounded(r) ? [
				r,
				o,
				s
			] : [
				-1,
				-1,
				-1
			];
		}
		if (r < 8) {
			let r = (t - s * n - o * i) / a;
			return e.isBounded(r) ? [
				s,
				r,
				o
			] : [
				-1,
				-1,
				-1
			];
		}
		{
			let r = (t - o * n - s * a) / i;
			return e.isBounded(r) ? [
				o,
				s,
				r
			] : [
				-1,
				-1,
				-1
			];
		}
	}
	static bisectToSegment(t, r) {
		let n = [
			-1,
			-1,
			-1
		], a = n, i = 0, o = 0, s = !1, l = !0;
		for (let u = 0; u < 12; u++) {
			let c = e.nthVertex(t, u);
			if (c[0] < 0) continue;
			let f = e.hueOf(c);
			if (!s) {
				n = c, a = c, i = f, o = f, s = !0;
				continue;
			}
			(l || e.areInCyclicOrder(i, f, o)) && (l = !1, e.areInCyclicOrder(i, r, f) ? (a = c, o = f) : (n = c, i = f));
		}
		return [n, a];
	}
	static midpoint(e, t) {
		return [
			(e[0] + t[0]) / 2,
			(e[1] + t[1]) / 2,
			(e[2] + t[2]) / 2
		];
	}
	static criticalPlaneBelow(e) {
		return Math.floor(e - .5);
	}
	static criticalPlaneAbove(e) {
		return Math.ceil(e - .5);
	}
	static bisectToLimit(t, r) {
		let n = e.bisectToSegment(t, r), a = n[0], i = e.hueOf(a), o = n[1];
		for (let t = 0; t < 3; t++) if (a[t] !== o[t]) {
			let n = -1, s = 255;
			a[t] < o[t] ? (n = e.criticalPlaneBelow(e.trueDelinearized(a[t])), s = e.criticalPlaneAbove(e.trueDelinearized(o[t]))) : (n = e.criticalPlaneAbove(e.trueDelinearized(a[t])), s = e.criticalPlaneBelow(e.trueDelinearized(o[t])));
			for (let l = 0; l < 8; l++) if (1 >= Math.abs(s - n)) break;
			else {
				let l = Math.floor((n + s) / 2), u = e.CRITICAL_PLANES[l], c = e.setCoordinate(a, u, o, t), f = e.hueOf(c);
				e.areInCyclicOrder(i, r, f) ? (o = c, s = l) : (a = c, i = f, n = l);
			}
		}
		return e.midpoint(a, o);
	}
	static inverseChromaticAdaptation(e) {
		let t = Math.abs(e), r = Math.max(0, 27.13 * t / (400 - t));
		return ic(e) * Math.pow(r, 1 / .42);
	}
	static findResultByJ(t, r, n) {
		let a = 11 * Math.sqrt(n), i = iA.DEFAULT, o = 1 / Math.pow(1.64 - Math.pow(.29, i.n), .73), s = .25 * (Math.cos(t + 2) + 3.8) * (5e4 / 13) * i.nc * i.ncb, l = Math.sin(t), u = Math.cos(t);
		for (let t = 0; t < 5; t++) {
			let c = a / 100, f = Math.pow((0 === r || 0 === a ? 0 : r / Math.sqrt(c)) * o, 1 / .9), d = i.aw * Math.pow(c, 1 / i.c / i.z) / i.nbb, h = 23 * (d + .305) * f / (23 * s + 11 * f * u + 108 * f * l), g = h * u, p = h * l, m = (460 * d + 451 * g + 288 * p) / 1403, b = (460 * d - 891 * g - 261 * p) / 1403, y = (460 * d - 220 * g - 6300 * p) / 1403, v = e.inverseChromaticAdaptation(m), x = ip([
				v,
				e.inverseChromaticAdaptation(b),
				e.inverseChromaticAdaptation(y)
			], e.LINRGB_FROM_SCALED_DISCOUNT);
			if (x[0] < 0 || x[1] < 0 || x[2] < 0) break;
			let w = e.Y_FROM_LINRGB[0], C = e.Y_FROM_LINRGB[1], k = e.Y_FROM_LINRGB[2], P = w * x[0] + C * x[1] + k * x[2];
			if (P <= 0) break;
			if (4 === t || .002 > Math.abs(P - n)) {
				if (x[0] > 100.01 || x[1] > 100.01 || x[2] > 100.01) return 0;
				return ix(x);
			}
			a -= (P - n) * a / (2 * P);
		}
		return 0;
	}
	static solveToInt(t, r, n) {
		if (r < 1e-4 || n < 1e-4 || n > 99.9999) {
			let e = iM(iC(n));
			return iv(e, e, e);
		}
		let a = (t = ig(t)) / 180 * Math.PI, i = iC(n), o = e.findResultByJ(a, r, i);
		return 0 !== o ? o : ix(e.bisectToLimit(i, a));
	}
	static solveToCam(t, r, n) {
		return i_.fromInt(e.solveToInt(t, r, n));
	}
};
iT.SCALED_DISCOUNT_FROM_LINRGB = [
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
], iT.LINRGB_FROM_SCALED_DISCOUNT = [
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
], iT.Y_FROM_LINRGB = [
	.2126,
	.7152,
	.0722
], iT.CRITICAL_PLANES = [
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
var iR = class e {
	static from(t, r, n) {
		return new e(iT.solveToInt(t, r, n));
	}
	static fromInt(t) {
		return new e(t);
	}
	toInt() {
		return this.argb;
	}
	get hue() {
		return this.internalHue;
	}
	set hue(e) {
		this.setInternalState(iT.solveToInt(e, this.internalChroma, this.internalTone));
	}
	get chroma() {
		return this.internalChroma;
	}
	set chroma(e) {
		this.setInternalState(iT.solveToInt(this.internalHue, e, this.internalTone));
	}
	get tone() {
		return this.internalTone;
	}
	set tone(e) {
		this.setInternalState(iT.solveToInt(this.internalHue, this.internalChroma, e));
	}
	constructor(e) {
		this.argb = e;
		let t = i_.fromInt(e);
		this.internalHue = t.hue, this.internalChroma = t.chroma, this.internalTone = iw(e), this.argb = e;
	}
	setInternalState(e) {
		let t = i_.fromInt(e);
		this.internalHue = t.hue, this.internalChroma = t.chroma, this.internalTone = iw(e), this.argb = e;
	}
	inViewingConditions(t) {
		let r = i_.fromInt(this.toInt()).xyzInViewingConditions(t), n = i_.fromXyzInViewingConditions(r[0], r[1], r[2], iA.make());
		return e.from(n.hue, n.chroma, ik(r[1]));
	}
}, iO = class e {
	static ratioOfTones(t, r) {
		return t = id(0, 100, t), r = id(0, 100, r), e.ratioOfYs(iC(t), iC(r));
	}
	static ratioOfYs(e, t) {
		let r = e > t ? e : t;
		return (r + 5) / ((r === t ? e : t) + 5);
	}
	static lighter(t, r) {
		if (t < 0 || t > 100) return -1;
		let n = iC(t), a = r * (n + 5) - 5, i = e.ratioOfYs(a, n), o = Math.abs(i - r);
		if (i < r && o > .04) return -1;
		let s = ik(a) + .4;
		return s < 0 || s > 100 ? -1 : s;
	}
	static darker(t, r) {
		if (t < 0 || t > 100) return -1;
		let n = iC(t), a = (n + 5) / r - 5, i = e.ratioOfYs(n, a), o = Math.abs(i - r);
		if (i < r && o > .04) return -1;
		let s = ik(a) - .4;
		return s < 0 || s > 100 ? -1 : s;
	}
	static lighterUnsafe(t, r) {
		let n = e.lighter(t, r);
		return n < 0 ? 100 : n;
	}
	static darkerUnsafe(t, r) {
		let n = e.darker(t, r);
		return n < 0 ? 0 : n;
	}
}, iD = class e {
	static isDisliked(e) {
		let t = Math.round(e.hue) >= 90 && 111 >= Math.round(e.hue), r = Math.round(e.chroma) > 16, n = 65 > Math.round(e.tone);
		return t && r && n;
	}
	static fixIfDisliked(t) {
		return e.isDisliked(t) ? iR.from(t.hue, t.chroma, 70) : t;
	}
}, i$ = class e {
	static fromPalette(t) {
		return new e(t.name ?? "", t.palette, t.tone, t.isBackground ?? !1, t.background, t.secondBackground, t.contrastCurve, t.toneDeltaPair);
	}
	constructor(e, t, r, n, a, i, o, s) {
		if (this.name = e, this.palette = t, this.tone = r, this.isBackground = n, this.background = a, this.secondBackground = i, this.contrastCurve = o, this.toneDeltaPair = s, this.hctCache = /* @__PURE__ */ new Map(), !a && i) throw Error(`Color ${e} has secondBackgrounddefined, but background is not defined.`);
		if (!a && o) throw Error(`Color ${e} has contrastCurvedefined, but background is not defined.`);
		if (a && !o) throw Error(`Color ${e} has backgrounddefined, but contrastCurve is not defined.`);
	}
	getArgb(e) {
		return this.getHct(e).toInt();
	}
	getHct(e) {
		let t = this.hctCache.get(e);
		if (null != t) return t;
		let r = this.getTone(e), n = this.palette(e).getHct(r);
		return this.hctCache.size > 4 && this.hctCache.clear(), this.hctCache.set(e, n), n;
	}
	getTone(t) {
		let r = t.contrastLevel < 0;
		if (this.toneDeltaPair) {
			let n = this.toneDeltaPair(t), a = n.roleA, i = n.roleB, o = n.delta, s = n.polarity, l = n.stayTogether, u = this.background(t).getTone(t), c = "nearer" === s || "lighter" === s && !t.isDark || "darker" === s && t.isDark, f = c ? a : i, d = c ? i : a, h = this.name === f.name, g = t.isDark ? 1 : -1, p = f.contrastCurve.get(t.contrastLevel), m = d.contrastCurve.get(t.contrastLevel), b = f.tone(t), y = iO.ratioOfTones(u, b) >= p ? b : e.foregroundTone(u, p), v = d.tone(t), x = iO.ratioOfTones(u, v) >= m ? v : e.foregroundTone(u, m);
			return r && (y = e.foregroundTone(u, p), x = e.foregroundTone(u, m)), (x - y) * g >= o || ((x = id(0, 100, y + o * g)) - y) * g >= o || (y = id(0, 100, x - o * g)), 50 <= y && y < 60 ? x = g > 0 ? Math.max(x, (y = 60) + o * g) : Math.min(x, (y = 49) + o * g) : 50 <= x && x < 60 && (x = l ? g > 0 ? Math.max(x, (y = 60) + o * g) : Math.min(x, (y = 49) + o * g) : g > 0 ? 60 : 49), h ? y : x;
		}
		{
			let n = this.tone(t);
			if (null == this.background) return n;
			let a = this.background(t).getTone(t), i = this.contrastCurve.get(t.contrastLevel);
			if (iO.ratioOfTones(a, n) >= i || (n = e.foregroundTone(a, i)), r && (n = e.foregroundTone(a, i)), this.isBackground && 50 <= n && n < 60 && (n = iO.ratioOfTones(49, a) >= i ? 49 : 60), this.secondBackground) {
				let [r, a] = [this.background, this.secondBackground], [o, s] = [r(t).getTone(t), a(t).getTone(t)], [l, u] = [Math.max(o, s), Math.min(o, s)];
				if (iO.ratioOfTones(l, n) >= i && iO.ratioOfTones(u, n) >= i) return n;
				let c = iO.lighter(l, i), f = iO.darker(u, i), d = [];
				return (-1 !== c && d.push(c), -1 !== f && d.push(f), e.tonePrefersLightForeground(o) || e.tonePrefersLightForeground(s)) ? c < 0 ? 100 : c : 1 === d.length ? d[0] : f < 0 ? 0 : f;
			}
			return n;
		}
	}
	static foregroundTone(t, r) {
		let n = iO.lighterUnsafe(t, r), a = iO.darkerUnsafe(t, r), i = iO.ratioOfTones(n, t), o = iO.ratioOfTones(a, t);
		if (!e.tonePrefersLightForeground(t)) return o >= r || o >= i ? a : n;
		{
			let e = .1 > Math.abs(i - o) && i < r && o < r;
			return i >= r || i >= o || e ? n : a;
		}
	}
	static tonePrefersLightForeground(e) {
		return 60 > Math.round(e);
	}
	static toneAllowsLightForeground(e) {
		return 49 >= Math.round(e);
	}
	static enableLightForeground(t) {
		return e.tonePrefersLightForeground(t) && !e.toneAllowsLightForeground(t) ? 49 : t;
	}
}, iI = class e {
	static fromInt(t) {
		let r = iR.fromInt(t);
		return e.fromHct(r);
	}
	static fromHct(t) {
		return new e(t.hue, t.chroma, t);
	}
	static fromHueAndChroma(t, r) {
		let n = new iL(t, r).create();
		return new e(t, r, n);
	}
	constructor(e, t, r) {
		this.hue = e, this.chroma = t, this.keyColor = r, this.cache = /* @__PURE__ */ new Map();
	}
	tone(e) {
		let t = this.cache.get(e);
		return void 0 === t && (t = iR.from(this.hue, this.chroma, e).toInt(), this.cache.set(e, t)), t;
	}
	getHct(e) {
		return iR.fromInt(this.tone(e));
	}
}, iL = class {
	constructor(e, t) {
		this.hue = e, this.requestedChroma = t, this.chromaCache = /* @__PURE__ */ new Map(), this.maxChromaValue = 200;
	}
	create() {
		let e = 0, t = 100;
		for (; e < t;) {
			let r = Math.floor((e + t) / 2), n = this.maxChroma(r) < this.maxChroma(r + 1);
			if (this.maxChroma(r) >= this.requestedChroma - .01) if (Math.abs(e - 50) < Math.abs(t - 50)) t = r;
			else {
				if (e === r) return iR.from(this.hue, this.requestedChroma, e);
				e = r;
			}
			else n ? e = r + 1 : t = r;
		}
		return iR.from(this.hue, this.requestedChroma, e);
	}
	maxChroma(e) {
		if (this.chromaCache.has(e)) return this.chromaCache.get(e);
		let t = iR.from(this.hue, this.maxChromaValue, e).chroma;
		return this.chromaCache.set(e, t), t;
	}
}, iF = class {
	constructor(e, t, r, n) {
		this.low = e, this.normal = t, this.medium = r, this.high = n;
	}
	get(e) {
		var t, r, n, a, i, o, s, l, u;
		return e <= -1 ? this.low : e < 0 ? (t = this.low, r = this.normal, (1 - (n = (e - -1) / 1)) * t + n * r) : e < .5 ? (a = this.normal, i = this.medium, (1 - (o = (e - 0) / .5)) * a + o * i) : e < 1 ? (s = this.medium, l = this.high, (1 - (u = (e - .5) / .5)) * s + u * l) : this.high;
	}
}, iE = class {
	constructor(e, t, r, n, a) {
		this.roleA = e, this.roleB = t, this.delta = r, this.polarity = n, this.stayTogether = a;
	}
};
function ij(e) {
	return e.variant === e3.FIDELITY || e.variant === e3.CONTENT;
}
function iV(e) {
	return e.variant === e3.MONOCHROME;
}
(e2 = e3 || (e3 = {}))[e2.MONOCHROME = 0] = "MONOCHROME", e2[e2.NEUTRAL = 1] = "NEUTRAL", e2[e2.TONAL_SPOT = 2] = "TONAL_SPOT", e2[e2.VIBRANT = 3] = "VIBRANT", e2[e2.EXPRESSIVE = 4] = "EXPRESSIVE", e2[e2.FIDELITY = 5] = "FIDELITY", e2[e2.CONTENT = 6] = "CONTENT", e2[e2.RAINBOW = 7] = "RAINBOW", e2[e2.FRUIT_SALAD = 8] = "FRUIT_SALAD";
var iB = class e {
	static highestSurface(t) {
		return t.isDark ? e.surfaceBright : e.surfaceDim;
	}
};
iB.contentAccentToneDelta = 15, iB.primaryPaletteKeyColor = i$.fromPalette({
	name: "primary_palette_key_color",
	palette: (e) => e.primaryPalette,
	tone: (e) => e.primaryPalette.keyColor.tone
}), iB.secondaryPaletteKeyColor = i$.fromPalette({
	name: "secondary_palette_key_color",
	palette: (e) => e.secondaryPalette,
	tone: (e) => e.secondaryPalette.keyColor.tone
}), iB.tertiaryPaletteKeyColor = i$.fromPalette({
	name: "tertiary_palette_key_color",
	palette: (e) => e.tertiaryPalette,
	tone: (e) => e.tertiaryPalette.keyColor.tone
}), iB.neutralPaletteKeyColor = i$.fromPalette({
	name: "neutral_palette_key_color",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.neutralPalette.keyColor.tone
}), iB.neutralVariantPaletteKeyColor = i$.fromPalette({
	name: "neutral_variant_palette_key_color",
	palette: (e) => e.neutralVariantPalette,
	tone: (e) => e.neutralVariantPalette.keyColor.tone
}), iB.background = i$.fromPalette({
	name: "background",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? 6 : 98,
	isBackground: !0
}), iB.onBackground = i$.fromPalette({
	name: "on_background",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? 90 : 10,
	background: (e) => iB.background,
	contrastCurve: new iF(3, 3, 4.5, 7)
}), iB.surface = i$.fromPalette({
	name: "surface",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? 6 : 98,
	isBackground: !0
}), iB.surfaceDim = i$.fromPalette({
	name: "surface_dim",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? 6 : new iF(87, 87, 80, 75).get(e.contrastLevel),
	isBackground: !0
}), iB.surfaceBright = i$.fromPalette({
	name: "surface_bright",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? new iF(24, 24, 29, 34).get(e.contrastLevel) : 98,
	isBackground: !0
}), iB.surfaceContainerLowest = i$.fromPalette({
	name: "surface_container_lowest",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? new iF(4, 4, 2, 0).get(e.contrastLevel) : 100,
	isBackground: !0
}), iB.surfaceContainerLow = i$.fromPalette({
	name: "surface_container_low",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? new iF(10, 10, 11, 12).get(e.contrastLevel) : new iF(96, 96, 96, 95).get(e.contrastLevel),
	isBackground: !0
}), iB.surfaceContainer = i$.fromPalette({
	name: "surface_container",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? new iF(12, 12, 16, 20).get(e.contrastLevel) : new iF(94, 94, 92, 90).get(e.contrastLevel),
	isBackground: !0
}), iB.surfaceContainerHigh = i$.fromPalette({
	name: "surface_container_high",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? new iF(17, 17, 21, 25).get(e.contrastLevel) : new iF(92, 92, 88, 85).get(e.contrastLevel),
	isBackground: !0
}), iB.surfaceContainerHighest = i$.fromPalette({
	name: "surface_container_highest",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? new iF(22, 22, 26, 30).get(e.contrastLevel) : new iF(90, 90, 84, 80).get(e.contrastLevel),
	isBackground: !0
}), iB.onSurface = i$.fromPalette({
	name: "on_surface",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? 90 : 10,
	background: (e) => iB.highestSurface(e),
	contrastCurve: new iF(4.5, 7, 11, 21)
}), iB.surfaceVariant = i$.fromPalette({
	name: "surface_variant",
	palette: (e) => e.neutralVariantPalette,
	tone: (e) => e.isDark ? 30 : 90,
	isBackground: !0
}), iB.onSurfaceVariant = i$.fromPalette({
	name: "on_surface_variant",
	palette: (e) => e.neutralVariantPalette,
	tone: (e) => e.isDark ? 80 : 30,
	background: (e) => iB.highestSurface(e),
	contrastCurve: new iF(3, 4.5, 7, 11)
}), iB.inverseSurface = i$.fromPalette({
	name: "inverse_surface",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? 90 : 20
}), iB.inverseOnSurface = i$.fromPalette({
	name: "inverse_on_surface",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? 20 : 95,
	background: (e) => iB.inverseSurface,
	contrastCurve: new iF(4.5, 7, 11, 21)
}), iB.outline = i$.fromPalette({
	name: "outline",
	palette: (e) => e.neutralVariantPalette,
	tone: (e) => e.isDark ? 60 : 50,
	background: (e) => iB.highestSurface(e),
	contrastCurve: new iF(1.5, 3, 4.5, 7)
}), iB.outlineVariant = i$.fromPalette({
	name: "outline_variant",
	palette: (e) => e.neutralVariantPalette,
	tone: (e) => e.isDark ? 30 : 80,
	background: (e) => iB.highestSurface(e),
	contrastCurve: new iF(1, 1, 3, 4.5)
}), iB.shadow = i$.fromPalette({
	name: "shadow",
	palette: (e) => e.neutralPalette,
	tone: (e) => 0
}), iB.scrim = i$.fromPalette({
	name: "scrim",
	palette: (e) => e.neutralPalette,
	tone: (e) => 0
}), iB.surfaceTint = i$.fromPalette({
	name: "surface_tint",
	palette: (e) => e.primaryPalette,
	tone: (e) => e.isDark ? 80 : 40,
	isBackground: !0
}), iB.primary = i$.fromPalette({
	name: "primary",
	palette: (e) => e.primaryPalette,
	tone: (e) => iV(e) ? 100 * !!e.isDark : e.isDark ? 80 : 40,
	isBackground: !0,
	background: (e) => iB.highestSurface(e),
	contrastCurve: new iF(3, 4.5, 7, 7),
	toneDeltaPair: (e) => new iE(iB.primaryContainer, iB.primary, 10, "nearer", !1)
}), iB.onPrimary = i$.fromPalette({
	name: "on_primary",
	palette: (e) => e.primaryPalette,
	tone: (e) => iV(e) ? e.isDark ? 10 : 90 : e.isDark ? 20 : 100,
	background: (e) => iB.primary,
	contrastCurve: new iF(4.5, 7, 11, 21)
}), iB.primaryContainer = i$.fromPalette({
	name: "primary_container",
	palette: (e) => e.primaryPalette,
	tone: (e) => ij(e) ? e.sourceColorHct.tone : iV(e) ? e.isDark ? 85 : 25 : e.isDark ? 30 : 90,
	isBackground: !0,
	background: (e) => iB.highestSurface(e),
	contrastCurve: new iF(1, 1, 3, 4.5),
	toneDeltaPair: (e) => new iE(iB.primaryContainer, iB.primary, 10, "nearer", !1)
}), iB.onPrimaryContainer = i$.fromPalette({
	name: "on_primary_container",
	palette: (e) => e.primaryPalette,
	tone: (e) => ij(e) ? i$.foregroundTone(iB.primaryContainer.tone(e), 4.5) : iV(e) ? 100 * !e.isDark : e.isDark ? 90 : 30,
	background: (e) => iB.primaryContainer,
	contrastCurve: new iF(3, 4.5, 7, 11)
}), iB.inversePrimary = i$.fromPalette({
	name: "inverse_primary",
	palette: (e) => e.primaryPalette,
	tone: (e) => e.isDark ? 40 : 80,
	background: (e) => iB.inverseSurface,
	contrastCurve: new iF(3, 4.5, 7, 7)
}), iB.secondary = i$.fromPalette({
	name: "secondary",
	palette: (e) => e.secondaryPalette,
	tone: (e) => e.isDark ? 80 : 40,
	isBackground: !0,
	background: (e) => iB.highestSurface(e),
	contrastCurve: new iF(3, 4.5, 7, 7),
	toneDeltaPair: (e) => new iE(iB.secondaryContainer, iB.secondary, 10, "nearer", !1)
}), iB.onSecondary = i$.fromPalette({
	name: "on_secondary",
	palette: (e) => e.secondaryPalette,
	tone: (e) => iV(e) ? e.isDark ? 10 : 100 : e.isDark ? 20 : 100,
	background: (e) => iB.secondary,
	contrastCurve: new iF(4.5, 7, 11, 21)
}), iB.secondaryContainer = i$.fromPalette({
	name: "secondary_container",
	palette: (e) => e.secondaryPalette,
	tone: (e) => {
		let t = e.isDark ? 30 : 90;
		return iV(e) ? e.isDark ? 30 : 85 : ij(e) ? function(e, t, r, n) {
			let a = r, i = iR.from(e, t, r);
			if (i.chroma < t) {
				let r = i.chroma;
				for (; i.chroma < t;) {
					a += n ? -1 : 1;
					let o = iR.from(e, t, a);
					if (r > o.chroma || .4 > Math.abs(o.chroma - t)) break;
					Math.abs(o.chroma - t) < Math.abs(i.chroma - t) && (i = o), r = Math.max(r, o.chroma);
				}
			}
			return a;
		}(e.secondaryPalette.hue, e.secondaryPalette.chroma, t, !e.isDark) : t;
	},
	isBackground: !0,
	background: (e) => iB.highestSurface(e),
	contrastCurve: new iF(1, 1, 3, 4.5),
	toneDeltaPair: (e) => new iE(iB.secondaryContainer, iB.secondary, 10, "nearer", !1)
}), iB.onSecondaryContainer = i$.fromPalette({
	name: "on_secondary_container",
	palette: (e) => e.secondaryPalette,
	tone: (e) => iV(e) ? e.isDark ? 90 : 10 : ij(e) ? i$.foregroundTone(iB.secondaryContainer.tone(e), 4.5) : e.isDark ? 90 : 30,
	background: (e) => iB.secondaryContainer,
	contrastCurve: new iF(3, 4.5, 7, 11)
}), iB.tertiary = i$.fromPalette({
	name: "tertiary",
	palette: (e) => e.tertiaryPalette,
	tone: (e) => iV(e) ? e.isDark ? 90 : 25 : e.isDark ? 80 : 40,
	isBackground: !0,
	background: (e) => iB.highestSurface(e),
	contrastCurve: new iF(3, 4.5, 7, 7),
	toneDeltaPair: (e) => new iE(iB.tertiaryContainer, iB.tertiary, 10, "nearer", !1)
}), iB.onTertiary = i$.fromPalette({
	name: "on_tertiary",
	palette: (e) => e.tertiaryPalette,
	tone: (e) => iV(e) ? e.isDark ? 10 : 90 : e.isDark ? 20 : 100,
	background: (e) => iB.tertiary,
	contrastCurve: new iF(4.5, 7, 11, 21)
}), iB.tertiaryContainer = i$.fromPalette({
	name: "tertiary_container",
	palette: (e) => e.tertiaryPalette,
	tone: (e) => {
		if (iV(e)) return e.isDark ? 60 : 49;
		if (!ij(e)) return e.isDark ? 30 : 90;
		let t = e.tertiaryPalette.getHct(e.sourceColorHct.tone);
		return iD.fixIfDisliked(t).tone;
	},
	isBackground: !0,
	background: (e) => iB.highestSurface(e),
	contrastCurve: new iF(1, 1, 3, 4.5),
	toneDeltaPair: (e) => new iE(iB.tertiaryContainer, iB.tertiary, 10, "nearer", !1)
}), iB.onTertiaryContainer = i$.fromPalette({
	name: "on_tertiary_container",
	palette: (e) => e.tertiaryPalette,
	tone: (e) => iV(e) ? 100 * !e.isDark : ij(e) ? i$.foregroundTone(iB.tertiaryContainer.tone(e), 4.5) : e.isDark ? 90 : 30,
	background: (e) => iB.tertiaryContainer,
	contrastCurve: new iF(3, 4.5, 7, 11)
}), iB.error = i$.fromPalette({
	name: "error",
	palette: (e) => e.errorPalette,
	tone: (e) => e.isDark ? 80 : 40,
	isBackground: !0,
	background: (e) => iB.highestSurface(e),
	contrastCurve: new iF(3, 4.5, 7, 7),
	toneDeltaPair: (e) => new iE(iB.errorContainer, iB.error, 10, "nearer", !1)
}), iB.onError = i$.fromPalette({
	name: "on_error",
	palette: (e) => e.errorPalette,
	tone: (e) => e.isDark ? 20 : 100,
	background: (e) => iB.error,
	contrastCurve: new iF(4.5, 7, 11, 21)
}), iB.errorContainer = i$.fromPalette({
	name: "error_container",
	palette: (e) => e.errorPalette,
	tone: (e) => e.isDark ? 30 : 90,
	isBackground: !0,
	background: (e) => iB.highestSurface(e),
	contrastCurve: new iF(1, 1, 3, 4.5),
	toneDeltaPair: (e) => new iE(iB.errorContainer, iB.error, 10, "nearer", !1)
}), iB.onErrorContainer = i$.fromPalette({
	name: "on_error_container",
	palette: (e) => e.errorPalette,
	tone: (e) => iV(e) ? e.isDark ? 90 : 10 : e.isDark ? 90 : 30,
	background: (e) => iB.errorContainer,
	contrastCurve: new iF(3, 4.5, 7, 11)
}), iB.primaryFixed = i$.fromPalette({
	name: "primary_fixed",
	palette: (e) => e.primaryPalette,
	tone: (e) => iV(e) ? 40 : 90,
	isBackground: !0,
	background: (e) => iB.highestSurface(e),
	contrastCurve: new iF(1, 1, 3, 4.5),
	toneDeltaPair: (e) => new iE(iB.primaryFixed, iB.primaryFixedDim, 10, "lighter", !0)
}), iB.primaryFixedDim = i$.fromPalette({
	name: "primary_fixed_dim",
	palette: (e) => e.primaryPalette,
	tone: (e) => iV(e) ? 30 : 80,
	isBackground: !0,
	background: (e) => iB.highestSurface(e),
	contrastCurve: new iF(1, 1, 3, 4.5),
	toneDeltaPair: (e) => new iE(iB.primaryFixed, iB.primaryFixedDim, 10, "lighter", !0)
}), iB.onPrimaryFixed = i$.fromPalette({
	name: "on_primary_fixed",
	palette: (e) => e.primaryPalette,
	tone: (e) => iV(e) ? 100 : 10,
	background: (e) => iB.primaryFixedDim,
	secondBackground: (e) => iB.primaryFixed,
	contrastCurve: new iF(4.5, 7, 11, 21)
}), iB.onPrimaryFixedVariant = i$.fromPalette({
	name: "on_primary_fixed_variant",
	palette: (e) => e.primaryPalette,
	tone: (e) => iV(e) ? 90 : 30,
	background: (e) => iB.primaryFixedDim,
	secondBackground: (e) => iB.primaryFixed,
	contrastCurve: new iF(3, 4.5, 7, 11)
}), iB.secondaryFixed = i$.fromPalette({
	name: "secondary_fixed",
	palette: (e) => e.secondaryPalette,
	tone: (e) => iV(e) ? 80 : 90,
	isBackground: !0,
	background: (e) => iB.highestSurface(e),
	contrastCurve: new iF(1, 1, 3, 4.5),
	toneDeltaPair: (e) => new iE(iB.secondaryFixed, iB.secondaryFixedDim, 10, "lighter", !0)
}), iB.secondaryFixedDim = i$.fromPalette({
	name: "secondary_fixed_dim",
	palette: (e) => e.secondaryPalette,
	tone: (e) => iV(e) ? 70 : 80,
	isBackground: !0,
	background: (e) => iB.highestSurface(e),
	contrastCurve: new iF(1, 1, 3, 4.5),
	toneDeltaPair: (e) => new iE(iB.secondaryFixed, iB.secondaryFixedDim, 10, "lighter", !0)
}), iB.onSecondaryFixed = i$.fromPalette({
	name: "on_secondary_fixed",
	palette: (e) => e.secondaryPalette,
	tone: (e) => 10,
	background: (e) => iB.secondaryFixedDim,
	secondBackground: (e) => iB.secondaryFixed,
	contrastCurve: new iF(4.5, 7, 11, 21)
}), iB.onSecondaryFixedVariant = i$.fromPalette({
	name: "on_secondary_fixed_variant",
	palette: (e) => e.secondaryPalette,
	tone: (e) => iV(e) ? 25 : 30,
	background: (e) => iB.secondaryFixedDim,
	secondBackground: (e) => iB.secondaryFixed,
	contrastCurve: new iF(3, 4.5, 7, 11)
}), iB.tertiaryFixed = i$.fromPalette({
	name: "tertiary_fixed",
	palette: (e) => e.tertiaryPalette,
	tone: (e) => iV(e) ? 40 : 90,
	isBackground: !0,
	background: (e) => iB.highestSurface(e),
	contrastCurve: new iF(1, 1, 3, 4.5),
	toneDeltaPair: (e) => new iE(iB.tertiaryFixed, iB.tertiaryFixedDim, 10, "lighter", !0)
}), iB.tertiaryFixedDim = i$.fromPalette({
	name: "tertiary_fixed_dim",
	palette: (e) => e.tertiaryPalette,
	tone: (e) => iV(e) ? 30 : 80,
	isBackground: !0,
	background: (e) => iB.highestSurface(e),
	contrastCurve: new iF(1, 1, 3, 4.5),
	toneDeltaPair: (e) => new iE(iB.tertiaryFixed, iB.tertiaryFixedDim, 10, "lighter", !0)
}), iB.onTertiaryFixed = i$.fromPalette({
	name: "on_tertiary_fixed",
	palette: (e) => e.tertiaryPalette,
	tone: (e) => iV(e) ? 100 : 10,
	background: (e) => iB.tertiaryFixedDim,
	secondBackground: (e) => iB.tertiaryFixed,
	contrastCurve: new iF(4.5, 7, 11, 21)
}), iB.onTertiaryFixedVariant = i$.fromPalette({
	name: "on_tertiary_fixed_variant",
	palette: (e) => e.tertiaryPalette,
	tone: (e) => iV(e) ? 90 : 30,
	background: (e) => iB.tertiaryFixedDim,
	secondBackground: (e) => iB.tertiaryFixed,
	contrastCurve: new iF(3, 4.5, 7, 11)
});
var iH = class {
	constructor(e) {
		this.sourceColorArgb = e.sourceColorArgb, this.variant = e.variant, this.contrastLevel = e.contrastLevel, this.isDark = e.isDark, this.sourceColorHct = iR.fromInt(e.sourceColorArgb), this.primaryPalette = e.primaryPalette, this.secondaryPalette = e.secondaryPalette, this.tertiaryPalette = e.tertiaryPalette, this.neutralPalette = e.neutralPalette, this.neutralVariantPalette = e.neutralVariantPalette, this.errorPalette = iI.fromHueAndChroma(25, 84);
	}
	static getRotatedHue(e, t, r) {
		let n = e.hue;
		if (t.length !== r.length) throw Error(`mismatch between hue length ${t.length} & rotations ${r.length}`);
		if (1 === r.length) return ig(e.hue + r[0]);
		let a = t.length;
		for (let e = 0; e <= a - 2; e++) {
			let a = t[e], i = t[e + 1];
			if (a < n && n < i) return ig(n + r[e]);
		}
		return n;
	}
	getArgb(e) {
		return e.getArgb(this);
	}
	getHct(e) {
		return e.getHct(this);
	}
	get primaryPaletteKeyColor() {
		return this.getArgb(iB.primaryPaletteKeyColor);
	}
	get secondaryPaletteKeyColor() {
		return this.getArgb(iB.secondaryPaletteKeyColor);
	}
	get tertiaryPaletteKeyColor() {
		return this.getArgb(iB.tertiaryPaletteKeyColor);
	}
	get neutralPaletteKeyColor() {
		return this.getArgb(iB.neutralPaletteKeyColor);
	}
	get neutralVariantPaletteKeyColor() {
		return this.getArgb(iB.neutralVariantPaletteKeyColor);
	}
	get background() {
		return this.getArgb(iB.background);
	}
	get onBackground() {
		return this.getArgb(iB.onBackground);
	}
	get surface() {
		return this.getArgb(iB.surface);
	}
	get surfaceDim() {
		return this.getArgb(iB.surfaceDim);
	}
	get surfaceBright() {
		return this.getArgb(iB.surfaceBright);
	}
	get surfaceContainerLowest() {
		return this.getArgb(iB.surfaceContainerLowest);
	}
	get surfaceContainerLow() {
		return this.getArgb(iB.surfaceContainerLow);
	}
	get surfaceContainer() {
		return this.getArgb(iB.surfaceContainer);
	}
	get surfaceContainerHigh() {
		return this.getArgb(iB.surfaceContainerHigh);
	}
	get surfaceContainerHighest() {
		return this.getArgb(iB.surfaceContainerHighest);
	}
	get onSurface() {
		return this.getArgb(iB.onSurface);
	}
	get surfaceVariant() {
		return this.getArgb(iB.surfaceVariant);
	}
	get onSurfaceVariant() {
		return this.getArgb(iB.onSurfaceVariant);
	}
	get inverseSurface() {
		return this.getArgb(iB.inverseSurface);
	}
	get inverseOnSurface() {
		return this.getArgb(iB.inverseOnSurface);
	}
	get outline() {
		return this.getArgb(iB.outline);
	}
	get outlineVariant() {
		return this.getArgb(iB.outlineVariant);
	}
	get shadow() {
		return this.getArgb(iB.shadow);
	}
	get scrim() {
		return this.getArgb(iB.scrim);
	}
	get surfaceTint() {
		return this.getArgb(iB.surfaceTint);
	}
	get primary() {
		return this.getArgb(iB.primary);
	}
	get onPrimary() {
		return this.getArgb(iB.onPrimary);
	}
	get primaryContainer() {
		return this.getArgb(iB.primaryContainer);
	}
	get onPrimaryContainer() {
		return this.getArgb(iB.onPrimaryContainer);
	}
	get inversePrimary() {
		return this.getArgb(iB.inversePrimary);
	}
	get secondary() {
		return this.getArgb(iB.secondary);
	}
	get onSecondary() {
		return this.getArgb(iB.onSecondary);
	}
	get secondaryContainer() {
		return this.getArgb(iB.secondaryContainer);
	}
	get onSecondaryContainer() {
		return this.getArgb(iB.onSecondaryContainer);
	}
	get tertiary() {
		return this.getArgb(iB.tertiary);
	}
	get onTertiary() {
		return this.getArgb(iB.onTertiary);
	}
	get tertiaryContainer() {
		return this.getArgb(iB.tertiaryContainer);
	}
	get onTertiaryContainer() {
		return this.getArgb(iB.onTertiaryContainer);
	}
	get error() {
		return this.getArgb(iB.error);
	}
	get onError() {
		return this.getArgb(iB.onError);
	}
	get errorContainer() {
		return this.getArgb(iB.errorContainer);
	}
	get onErrorContainer() {
		return this.getArgb(iB.onErrorContainer);
	}
	get primaryFixed() {
		return this.getArgb(iB.primaryFixed);
	}
	get primaryFixedDim() {
		return this.getArgb(iB.primaryFixedDim);
	}
	get onPrimaryFixed() {
		return this.getArgb(iB.onPrimaryFixed);
	}
	get onPrimaryFixedVariant() {
		return this.getArgb(iB.onPrimaryFixedVariant);
	}
	get secondaryFixed() {
		return this.getArgb(iB.secondaryFixed);
	}
	get secondaryFixedDim() {
		return this.getArgb(iB.secondaryFixedDim);
	}
	get onSecondaryFixed() {
		return this.getArgb(iB.onSecondaryFixed);
	}
	get onSecondaryFixedVariant() {
		return this.getArgb(iB.onSecondaryFixedVariant);
	}
	get tertiaryFixed() {
		return this.getArgb(iB.tertiaryFixed);
	}
	get tertiaryFixedDim() {
		return this.getArgb(iB.tertiaryFixedDim);
	}
	get onTertiaryFixed() {
		return this.getArgb(iB.onTertiaryFixed);
	}
	get onTertiaryFixedVariant() {
		return this.getArgb(iB.onTertiaryFixedVariant);
	}
}, iN = class e {
	static of(t) {
		return new e(t, !1);
	}
	static contentOf(t) {
		return new e(t, !0);
	}
	static fromColors(t) {
		return e.createPaletteFromColors(!1, t);
	}
	static contentFromColors(t) {
		return e.createPaletteFromColors(!0, t);
	}
	static createPaletteFromColors(t, r) {
		let n = new e(r.primary, t);
		return r.secondary && (n.a2 = new e(r.secondary, t).a1), r.tertiary && (n.a3 = new e(r.tertiary, t).a1), r.error && (n.error = new e(r.error, t).a1), r.neutral && (n.n1 = new e(r.neutral, t).n1), r.neutralVariant && (n.n2 = new e(r.neutralVariant, t).n2), n;
	}
	constructor(e, t) {
		let r = iR.fromInt(e), n = r.hue, a = r.chroma;
		t ? (this.a1 = iI.fromHueAndChroma(n, a), this.a2 = iI.fromHueAndChroma(n, a / 3), this.a3 = iI.fromHueAndChroma(n + 60, a / 2), this.n1 = iI.fromHueAndChroma(n, Math.min(a / 12, 4)), this.n2 = iI.fromHueAndChroma(n, Math.min(a / 6, 8))) : (this.a1 = iI.fromHueAndChroma(n, Math.max(48, a)), this.a2 = iI.fromHueAndChroma(n, 16), this.a3 = iI.fromHueAndChroma(n + 60, 24), this.n1 = iI.fromHueAndChroma(n, 4), this.n2 = iI.fromHueAndChroma(n, 8)), this.error = iI.fromHueAndChroma(25, 84);
	}
}, iW = class e extends iH {
	constructor(t, r, n) {
		super({
			sourceColorArgb: t.toInt(),
			variant: e3.EXPRESSIVE,
			contrastLevel: n,
			isDark: r,
			primaryPalette: iI.fromHueAndChroma(ig(t.hue + 240), 40),
			secondaryPalette: iI.fromHueAndChroma(iH.getRotatedHue(t, e.hues, e.secondaryRotations), 24),
			tertiaryPalette: iI.fromHueAndChroma(iH.getRotatedHue(t, e.hues, e.tertiaryRotations), 32),
			neutralPalette: iI.fromHueAndChroma(t.hue + 15, 8),
			neutralVariantPalette: iI.fromHueAndChroma(t.hue + 15, 12)
		});
	}
};
iW.hues = [
	0,
	21,
	51,
	121,
	151,
	191,
	271,
	321,
	360
], iW.secondaryRotations = [
	45,
	95,
	45,
	20,
	45,
	90,
	45,
	45,
	45
], iW.tertiaryRotations = [
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
var iz = class e extends iH {
	constructor(t, r, n) {
		super({
			sourceColorArgb: t.toInt(),
			variant: e3.VIBRANT,
			contrastLevel: n,
			isDark: r,
			primaryPalette: iI.fromHueAndChroma(t.hue, 200),
			secondaryPalette: iI.fromHueAndChroma(iH.getRotatedHue(t, e.hues, e.secondaryRotations), 24),
			tertiaryPalette: iI.fromHueAndChroma(iH.getRotatedHue(t, e.hues, e.tertiaryRotations), 32),
			neutralPalette: iI.fromHueAndChroma(t.hue, 10),
			neutralVariantPalette: iI.fromHueAndChroma(t.hue, 12)
		});
	}
};
iz.hues = [
	0,
	41,
	61,
	101,
	131,
	181,
	251,
	301,
	360
], iz.secondaryRotations = [
	18,
	15,
	10,
	12,
	15,
	18,
	15,
	12,
	12
], iz.tertiaryRotations = [
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
var iU = {
	desired: 4,
	fallbackColorARGB: 4282549748,
	filter: !0
};
function iq(e, t) {
	return e.score > t.score ? -1 : +(e.score < t.score);
}
var iG = class e {
	constructor() {}
	static score(t, r) {
		let { desired: n, fallbackColorARGB: a, filter: i } = {
			...iU,
			...r
		}, o = [], s = Array(360).fill(0), l = 0;
		for (let [e, r] of t.entries()) {
			let t = iR.fromInt(e);
			o.push(t);
			let n = Math.floor(t.hue);
			s[n] += r, l += r;
		}
		let u = Array(360).fill(0);
		for (let e = 0; e < 360; e++) {
			let t = s[e] / l;
			for (let r = e - 14; r < e + 16; r++) {
				let e = ih(r);
				u[e] += t;
			}
		}
		let c = [];
		for (let t of o) {
			let r = u[ih(Math.round(t.hue))];
			if (i && (t.chroma < e.CUTOFF_CHROMA || r <= e.CUTOFF_EXCITED_PROPORTION)) continue;
			let n = 100 * r * e.WEIGHT_PROPORTION, a = t.chroma < e.TARGET_CHROMA ? e.WEIGHT_CHROMA_BELOW : e.WEIGHT_CHROMA_ABOVE, o = n + (t.chroma - e.TARGET_CHROMA) * a;
			c.push({
				hct: t,
				score: o
			});
		}
		c.sort(iq);
		let f = [];
		for (let e = 90; e >= 15; e--) {
			for (let { hct: t } of (f.length = 0, c)) if (f.find((r) => 180 - Math.abs(Math.abs(t.hue - r.hue) - 180) < e) || f.push(t), f.length >= n) break;
			if (f.length >= n) break;
		}
		let d = [];
		for (let e of (0 === f.length && d.push(a), f)) d.push(e.toInt());
		return d;
	}
};
function iY(e) {
	let t = 3 === (e = e.replace("#", "")).length, r = 6 === e.length, n = 8 === e.length;
	if (!t && !r && !n) throw Error("unexpected hex " + e);
	let a = 0, i = 0, o = 0;
	return t ? (a = iK(e.slice(0, 1).repeat(2)), i = iK(e.slice(1, 2).repeat(2)), o = iK(e.slice(2, 3).repeat(2))) : r ? (a = iK(e.slice(0, 2)), i = iK(e.slice(2, 4)), o = iK(e.slice(4, 6))) : n && (a = iK(e.slice(2, 4)), i = iK(e.slice(4, 6)), o = iK(e.slice(6, 8))), (-16777216 | (255 & a) << 16 | (255 & i) << 8 | 255 & o) >>> 0;
}
function iK(e) {
	return parseInt(e, 16);
}
iG.TARGET_CHROMA = 48, iG.WEIGHT_PROPORTION = .7, iG.WEIGHT_CHROMA_ABOVE = .3, iG.WEIGHT_CHROMA_BELOW = .1, iG.CUTOFF_CHROMA = 5, iG.CUTOFF_EXCITED_PROPORTION = .01;
var iX = {
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
}, iJ = (e) => {
	var t;
	let r = {
		r: (t = e) >> 16 & 255,
		g: t >> 8 & 255,
		b: 255 & t,
		a: t >> 24 & 255
	};
	return [
		r.r,
		r.g,
		r.b
	];
}, iZ = (e) => ({
	primary: !0,
	secondary: !0,
	tertiary: !0,
	error: !0,
	warning: !0,
	success: !0
})[e], iQ = class e {
	static toHEX = (e) => `#${iJ(e).map((e) => rE(e.toString(16), 2, "0")).join("")}`;
	static createRoleColorRuleBuilder(e) {
		let t = {}, r = new Proxy({}, { get: (n, a) => "build" == a ? () => t : (n, a) => (t[`${n}${e ? `:${e}` : ""}`] = a, r) });
		return r;
	}
	static createRoleColorSourcePicker() {
		return new Proxy({}, { get: (e, t) => (e) => [t, e] });
	}
	static fromColors = (t) => {
		let { primary: r, secondary: n, tertiary: a, neutral: i, neutralVariant: o, error: s,...l } = t, u = iN.contentFromColors({
			primary: iY(r),
			secondary: n ? iY(n) : void 0,
			tertiary: a ? iY(a) : void 0,
			error: s ? iY(s) : void 0
		});
		return i && (u.n1 = iI.fromHueAndChroma(iY(i), 4)), o && (u.n2 = iI.fromHueAndChroma(iY(o), 8)), new e({
			primary: u.a1,
			secondary: u.a2,
			tertiary: u.a3,
			neutral: u.n1,
			neutralVariant: u.n2,
			error: u.error,
			...rh(l, (e) => iI.fromInt(iY(e)))
		});
	};
	constructor(e) {
		this.seeds = e;
	}
	normalizeRoleRules(t = {}) {
		let r = e.createRoleColorSourcePicker(), n = e.createRoleColorRuleBuilder().rule("shadow", r.neutral(0)).rule("scrim", r.neutral(0)).rule("outline", r.neutralVariant(87)).rule("outline-variant", r.neutralVariant(80)).rule("surface", r.neutral(99)).rule("on-surface", r.neutral(10)).rule("surface-variant", r.neutralVariant(90)).rule("on-surface-variant", r.neutralVariant(30)).rule("surface-dim", r.neutral(87)).rule("surface-bright", r.neutral(98)).rule("surface-container-lowest", r.neutral(100)).rule("surface-container-low", r.neutral(96)).rule("surface-container", r.neutral(94)).rule("surface-container-high", r.neutral(92)).rule("surface-container-highest", r.neutral(90)).rule("inverse-surface", r.neutral(20)).rule("inverse-on-surface", r.neutral(95)).rule("inverse-primary", r.primary(80)), a = e.createRoleColorRuleBuilder("dark").rule("shadow", r.neutral(0)).rule("scrim", r.neutral(0)).rule("outline", r.neutralVariant(60)).rule("outline-variant", r.neutralVariant(30)).rule("surface", r.neutral(10)).rule("on-surface", r.neutral(90)).rule("surface-variant", r.neutralVariant(30)).rule("on-surface-variant", r.neutralVariant(80)).rule("surface-dim", r.neutral(6)).rule("surface-bright", r.neutral(24)).rule("surface-container-lowest", r.neutral(4)).rule("surface-container-low", r.neutral(10)).rule("surface-container", r.neutral(12)).rule("surface-container-high", r.neutral(17)).rule("surface-container-highest", r.neutral(22)).rule("inverse-surface", r.neutral(90)).rule("inverse-on-surface", r.neutral(20)).rule("inverse-primary", r.primary(40));
		for (let e in this.seeds) e.startsWith("neutral") || (n = n.rule(e, r[e](40)).rule(`on-${e}`, r[e](100)).rule(`${e}-container`, r[e](90)).rule(`on-${e}-container`, r[e](10)), a = a.rule(e, r[e](80)).rule(`on-${e}`, r[e](20)).rule(`${e}-container`, r[e](30)).rule(`on-${e}-container`, r[e](90)));
		return {
			...n.build(),
			...a.build(),
			...t
		};
	}
	getThemeRoleColors(e) {
		let t = {}, r = {};
		for (let [n, [a, i]] of Object.entries(e)) if (this.seeds[a]) {
			if (n.endsWith(":dark")) {
				r[n.split(":")[0]] = iX[i] ? `${String(a)}.${i}` : this.seeds[a]?.tone(i);
				continue;
			}
			t[n] = iX[i] ? `${String(a)}.${i}` : this.seeds[a]?.tone(i);
		}
		return [t, r];
	}
	toDesignTokens(e = {}) {
		let t = this.normalizeRoleRules(e), [r, n] = this.getThemeRoleColors(t), a = {}, i = {};
		for (let e in r) if (a[`${e}`] = {
			_default: rd(r[e]) ? iJ(r[e]) : r[e],
			_dark: rd(n[e]) ? iJ(n[e]) : n[e]
		}, iZ(e) && (i[`${e}`] = a5.mixin({
			bgColor: `sys.${e}`,
			color: `sys.on-${e}`
		}), i[`${e}-container`] = a5.mixin({
			bgColor: `sys.${e}-container`,
			color: `sys.on-${e}-container`
		})), e.startsWith("surface")) {
			if (e.includes("container")) {
				i[`${e}`] = a5.mixin({
					bgColor: `sys.${e}`,
					color: "sys.on-surface"
				});
				continue;
			}
			i[`${e}`] = a5.mixin({
				bgColor: `sys.${e}`,
				color: "sys.on-surface"
			}), i[`on-${e}`] = a5.mixin({
				bgColor: `sys.on-${e}`,
				color: "sys.inverse-on-surface"
			});
		}
		return {
			color: a5.color({
				...rh(this.seeds, (e) => Object.keys(iX).reduce((t, r) => Object.assign(t, { [r]: iJ(e.tone(parseInt(r))) }), {})),
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
				sys: a
			}),
			containerStyle: a5.customMixin("containerStyle", { sys: i })
		};
	}
};
let i0 = a5.rounded({
	xs: 4,
	sm: 8,
	md: 12,
	lg: 16,
	xl: 28
}), i1 = {
	font: a5.font({
		brand: "-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"",
		plain: "-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"",
		code: "'Lucida Console',Consolas,Monaco,'Andale Mono','Ubuntu Mono',monospace"
	}),
	fontWeight: a5.fontWeight({
		regular: 400,
		medium: 500,
		bold: 700
	}),
	textStyle: a5.customMixin("textStyle", { sys: {
		"display-large": a5.mixin({
			lineHeight: 64,
			fontSize: 57,
			letterSpacing: -.25,
			fontWeight: "regular",
			font: "brand"
		}),
		"display-medium": a5.mixin({
			lineHeight: 52,
			fontSize: 45,
			letterSpacing: 0,
			fontWeight: "regular",
			font: "brand"
		}),
		"display-small": a5.mixin({
			lineHeight: 44,
			fontSize: 36,
			letterSpacing: 0,
			fontWeight: "regular",
			font: "brand"
		}),
		"headline-large": a5.mixin({
			lineHeight: 40,
			fontSize: 32,
			letterSpacing: 0,
			fontWeight: "regular",
			font: "brand"
		}),
		"headline-medium": a5.mixin({
			lineHeight: 36,
			fontSize: 28,
			letterSpacing: 0,
			fontWeight: "regular",
			font: "brand"
		}),
		"headline-small": a5.mixin({
			lineHeight: 32,
			fontSize: 24,
			letterSpacing: 0,
			fontWeight: "regular",
			font: "plain"
		}),
		"title-large": a5.mixin({
			lineHeight: 28,
			fontSize: 22,
			letterSpacing: 0,
			fontWeight: "regular",
			font: "brand"
		}),
		"title-medium": a5.mixin({
			lineHeight: 24,
			fontSize: 16,
			letterSpacing: .15,
			fontWeight: "medium",
			font: "plain"
		}),
		"title-small": a5.mixin({
			lineHeight: 20,
			fontSize: 14,
			letterSpacing: .1,
			fontWeight: "medium",
			font: "plain"
		}),
		"label-large": a5.mixin({
			lineHeight: 20,
			fontSize: 14,
			letterSpacing: .1,
			fontWeight: "medium",
			font: "plain"
		}),
		"label-medium": a5.mixin({
			lineHeight: 16,
			fontSize: 12,
			letterSpacing: .5,
			fontWeight: "medium",
			font: "plain"
		}),
		"label-small": a5.mixin({
			lineHeight: 16,
			fontSize: 11,
			letterSpacing: .5,
			fontWeight: "medium",
			font: "plain"
		}),
		"body-large": a5.mixin({
			lineHeight: 24,
			fontSize: 16,
			letterSpacing: .5,
			fontWeight: "regular",
			font: "plain"
		}),
		"body-medium": a5.mixin({
			lineHeight: 20,
			fontSize: 14,
			letterSpacing: .25,
			fontWeight: "regular",
			font: "plain"
		}),
		"body-small": a5.mixin({
			lineHeight: 16,
			fontSize: 12,
			letterSpacing: .4,
			fontWeight: "regular",
			font: "plain"
		})
	} })
};
var i2 = iQ.fromColors({
	primary: "#1270f5",
	secondary: "#8a90a5",
	tertiary: "#b58391",
	neutral: "#5e5e5e",
	error: "#d93f23",
	warning: "#e69c00",
	success: "#5ac220"
});
let i4 = {
	...i1,
	...iu,
	...ii,
	rounded: i0,
	...i2.toDesignTokens({})
}, i5 = ia.create(i4, { varPrefix: "vk" }), i3 = e$(() => i5, { name: "Theme" });
var i8 = function() {
	function e(e) {
		var t = this;
		this._insertTag = function(e) {
			var r = 0 === t.tags.length ? t.insertionPoint ? t.insertionPoint.nextSibling : t.prepend ? t.container.firstChild : t.before : t.tags[t.tags.length - 1].nextSibling;
			t.container.insertBefore(e, r), t.tags.push(e);
		}, this.isSpeedy = void 0 === e.speedy || e.speedy, this.tags = [], this.ctr = 0, this.nonce = e.nonce, this.key = e.key, this.container = e.container, this.prepend = e.prepend, this.insertionPoint = e.insertionPoint, this.before = null;
	}
	var t = e.prototype;
	return t.hydrate = function(e) {
		e.forEach(this._insertTag);
	}, t.insert = function(e) {
		this.ctr % (this.isSpeedy ? 65e3 : 1) == 0 && this._insertTag(((t = document.createElement("style")).setAttribute("data-emotion", this.key), void 0 !== this.nonce && t.setAttribute("nonce", this.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t));
		var t, r = this.tags[this.tags.length - 1];
		if (this.isSpeedy) {
			var n = function(e) {
				if (e.sheet) return e.sheet;
				for (var t = 0; t < document.styleSheets.length; t++) if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
			}(r);
			try {
				n.insertRule(e, n.cssRules.length);
			} catch (e) {}
		} else r.appendChild(document.createTextNode(e));
		this.ctr++;
	}, t.flush = function() {
		this.tags.forEach(function(e) {
			var t;
			return null == (t = e.parentNode) ? void 0 : t.removeChild(e);
		}), this.tags = [], this.ctr = 0;
	}, e;
}(), i6 = "-ms-", i9 = "-moz-", i7 = "-webkit-", oe = "comm", ot = "rule", or = "decl", on = "@keyframes", oa = Math.abs, oi = String.fromCharCode, oo = Object.assign;
function os(e, t, r) {
	return e.replace(t, r);
}
function ol(e, t) {
	return e.indexOf(t);
}
function ou(e, t) {
	return 0 | e.charCodeAt(t);
}
function oc(e, t, r) {
	return e.slice(t, r);
}
function of(e) {
	return e.length;
}
function od(e, t) {
	return t.push(e), e;
}
var oh = 1, og = 1, op = 0, om = 0, ob = 0, oy = "";
function ov(e, t, r, n, a, i, o) {
	return {
		value: e,
		root: t,
		parent: r,
		type: n,
		props: a,
		children: i,
		line: oh,
		column: og,
		length: o,
		return: ""
	};
}
function ox(e, t) {
	return oo(ov("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function ow() {
	return ob = om < op ? ou(oy, om++) : 0, og++, 10 === ob && (og = 1, oh++), ob;
}
function oC() {
	return ou(oy, om);
}
function ok(e) {
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
function oP(e) {
	return oh = og = 1, op = of(oy = e), om = 0, [];
}
function oM(e) {
	var t, r;
	return (t = om - 1, r = function e(t) {
		for (; ow();) switch (ob) {
			case t: return om;
			case 34:
			case 39:
				34 !== t && 39 !== t && e(ob);
				break;
			case 40:
				41 === t && e(t);
				break;
			case 92: ow();
		}
		return om;
	}(91 === e ? e + 2 : 40 === e ? e + 1 : e), oc(oy, t, r)).trim();
}
function oS(e, t, r, n, a, i, o, s, l, u, c) {
	for (var f = a - 1, d = 0 === a ? i : [""], h = d.length, g = 0, p = 0, m = 0; g < n; ++g) for (var b = 0, y = oc(e, f + 1, f = oa(p = o[g])), v = e; b < h; ++b) (v = (p > 0 ? d[b] + " " + y : os(y, /&\f/g, d[b])).trim()) && (l[m++] = v);
	return ov(e, t, r, 0 === a ? ot : s, l, u, c);
}
function oA(e, t, r, n) {
	return ov(e, t, r, or, oc(e, 0, n), oc(e, n + 1, -1), n);
}
function o_(e, t) {
	for (var r = "", n = e.length, a = 0; a < n; a++) r += t(e[a], a, e, t) || "";
	return r;
}
function oT(e, t, r, n) {
	switch (e.type) {
		case "@layer": if (e.children.length) break;
		case "@import":
		case or: return e.return = e.return || e.value;
		case oe: return "";
		case on: return e.return = e.value + "{" + o_(e.children, n) + "}";
		case ot: e.value = e.props.join(",");
	}
	return of(r = o_(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
var oR = function(e, t, r) {
	for (var n = 0, a = 0; n = a, a = oC(), 38 === n && 12 === a && (t[r] = 1), !ok(a);) ow();
	return oc(oy, e, om);
}, oO = function(e, t) {
	var r = -1, n = 44;
	do
		switch (ok(n)) {
			case 0:
				38 === n && 12 === oC() && (t[r] = 1), e[r] += oR(om - 1, t, r);
				break;
			case 2:
				e[r] += oM(n);
				break;
			case 4: if (44 === n) {
				e[++r] = 58 === oC() ? "&\f" : "", t[r] = e[r].length;
				break;
			}
			default: e[r] += oi(n);
		}
	while (n = ow());
	return e;
}, oD = function(e, t) {
	var r;
	return r = oO(oP(e), t), oy = "", r;
}, o$ = /* @__PURE__ */ new WeakMap(), oI = function(e) {
	if ("rule" === e.type && e.parent && !(e.length < 1)) {
		for (var t = e.value, r = e.parent, n = e.column === r.column && e.line === r.line; "rule" !== r.type;) if (!(r = r.parent)) return;
		if ((1 !== e.props.length || 58 === t.charCodeAt(0) || o$.get(r)) && !n) {
			o$.set(e, !0);
			for (var a = [], i = oD(t, a), o = r.props, s = 0, l = 0; s < i.length; s++) for (var u = 0; u < o.length; u++, l++) e.props[l] = a[s] ? i[s].replace(/&\f/g, o[u]) : o[u] + " " + i[s];
		}
	}
}, oL = function(e) {
	if ("decl" === e.type) {
		var t = e.value;
		108 === t.charCodeAt(0) && 98 === t.charCodeAt(2) && (e.return = "", e.value = "");
	}
}, oF = [function(e, t, r, n) {
	if (e.length > -1 && !e.return) switch (e.type) {
		case or:
			e.return = function e(t, r) {
				switch (45 ^ ou(t, 0) ? (((r << 2 ^ ou(t, 0)) << 2 ^ ou(t, 1)) << 2 ^ ou(t, 2)) << 2 ^ ou(t, 3) : 0) {
					case 5103: return i7 + "print-" + t + t;
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
					case 3829: return i7 + t + t;
					case 5349:
					case 4246:
					case 4810:
					case 6968:
					case 2756: return i7 + t + i9 + t + i6 + t + t;
					case 6828:
					case 4268: return i7 + t + i6 + t + t;
					case 6165: return i7 + t + i6 + "flex-" + t + t;
					case 5187: return i7 + t + os(t, /(\w+).+(:[^]+)/, i7 + "box-$1$2" + i6 + "flex-$1$2") + t;
					case 5443: return i7 + t + i6 + "flex-item-" + os(t, /flex-|-self/, "") + t;
					case 4675: return i7 + t + i6 + "flex-line-pack" + os(t, /align-content|flex-|-self/, "") + t;
					case 5548: return i7 + t + i6 + os(t, "shrink", "negative") + t;
					case 5292: return i7 + t + i6 + os(t, "basis", "preferred-size") + t;
					case 6060: return i7 + "box-" + os(t, "-grow", "") + i7 + t + i6 + os(t, "grow", "positive") + t;
					case 4554: return i7 + os(t, /([^-])(transform)/g, "$1" + i7 + "$2") + t;
					case 6187: return os(os(os(t, /(zoom-|grab)/, i7 + "$1"), /(image-set)/, i7 + "$1"), t, "") + t;
					case 5495:
					case 3959: return os(t, /(image-set\([^]*)/, i7 + "$1$`$1");
					case 4968: return os(os(t, /(.+:)(flex-)?(.*)/, i7 + "box-pack:$3" + i6 + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + i7 + t + t;
					case 4095:
					case 3583:
					case 4068:
					case 2532: return os(t, /(.+)-inline(.+)/, i7 + "$1$2") + t;
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
						if (of(t) - 1 - r > 6) switch (ou(t, r + 1)) {
							case 109: if (45 !== ou(t, r + 4)) break;
							case 102: return os(t, /(.+:)(.+)-([^]+)/, "$1" + i7 + "$2-$3$1" + i9 + (108 == ou(t, r + 3) ? "$3" : "$2-$3")) + t;
							case 115: return ~ol(t, "stretch") ? e(os(t, "stretch", "fill-available"), r) + t : t;
						}
						break;
					case 4949: if (115 !== ou(t, r + 1)) break;
					case 6444:
						switch (ou(t, of(t) - 3 - (~ol(t, "!important") && 10))) {
							case 107: return os(t, ":", ":" + i7) + t;
							case 101: return os(t, /(.+:)([^;!]+)(;|!.+)?/, "$1" + i7 + (45 === ou(t, 14) ? "inline-" : "") + "box$3$1" + i7 + "$2$3$1" + i6 + "$2box$3") + t;
						}
						break;
					case 5936:
						switch (ou(t, r + 11)) {
							case 114: return i7 + t + i6 + os(t, /[svh]\w+-[tblr]{2}/, "tb") + t;
							case 108: return i7 + t + i6 + os(t, /[svh]\w+-[tblr]{2}/, "tb-rl") + t;
							case 45: return i7 + t + i6 + os(t, /[svh]\w+-[tblr]{2}/, "lr") + t;
						}
						return i7 + t + i6 + t + t;
				}
				return t;
			}(e.value, e.length);
			break;
		case on: return o_([ox(e, { value: os(e.value, "@", "@" + i7) })], n);
		case ot: if (e.length) {
			var a, i;
			return a = e.props, i = function(t) {
				var r;
				switch (r = t, (r = /(::plac\w+|:read-\w+)/.exec(r)) ? r[0] : r) {
					case ":read-only":
					case ":read-write": return o_([ox(e, { props: [os(t, /:(read-\w+)/, ":" + i9 + "$1")] })], n);
					case "::placeholder": return o_([
						ox(e, { props: [os(t, /:(plac\w+)/, ":" + i7 + "input-$1")] }),
						ox(e, { props: [os(t, /:(plac\w+)/, ":" + i9 + "$1")] }),
						ox(e, { props: [os(t, /:(plac\w+)/, i6 + "input-$1")] })
					], n);
				}
				return "";
			}, a.map(i).join("");
		}
	}
}], oE = function(e) {
	var t, r, n, a, i, o = e.key;
	if ("css" === o) {
		var s = document.querySelectorAll("style[data-emotion]:not([data-s])");
		Array.prototype.forEach.call(s, function(e) {
			-1 !== e.getAttribute("data-emotion").indexOf(" ") && (document.head.appendChild(e), e.setAttribute("data-s", ""));
		});
	}
	var l = e.stylisPlugins || oF, u = {}, c = [];
	a = e.container || document.head, Array.prototype.forEach.call(document.querySelectorAll("style[data-emotion^=\"" + o + " \"]"), function(e) {
		for (var t = e.getAttribute("data-emotion").split(" "), r = 1; r < t.length; r++) u[t[r]] = !0;
		c.push(e);
	});
	var f = (r = (t = [oI, oL].concat(l, [oT, (n = function(e) {
		i.insert(e);
	}, function(e) {
		!e.root && (e = e.return) && n(e);
	})])).length, function(e, n, a, i) {
		for (var o = "", s = 0; s < r; s++) o += t[s](e, n, a, i) || "";
		return o;
	}), d = function(e) {
		var t, r;
		return o_((r = function e(t, r, n, a, i, o, s, l, u) {
			for (var c, f = 0, d = 0, h = s, g = 0, p = 0, m = 0, b = 1, y = 1, v = 1, x = 0, w = "", C = i, k = o, P = a, M = w; y;) switch (m = x, x = ow()) {
				case 40: if (108 != m && 58 == ou(M, h - 1)) {
					-1 != ol(M += os(oM(x), "&", "&\f"), "&\f") && (v = -1);
					break;
				}
				case 34:
				case 39:
				case 91:
					M += oM(x);
					break;
				case 9:
				case 10:
				case 13:
				case 32:
					M += function(e) {
						for (; ob = oC();) if (ob < 33) ow();
						else break;
						return ok(e) > 2 || ok(ob) > 3 ? "" : " ";
					}(m);
					break;
				case 92:
					M += function(e, t) {
						for (var r; --t && ow() && !(ob < 48) && !(ob > 102) && (!(ob > 57) || !(ob < 65)) && (!(ob > 70) || !(ob < 97)););
						return r = om + (t < 6 && 32 == oC() && 32 == ow()), oc(oy, e, r);
					}(om - 1, 7);
					continue;
				case 47:
					switch (oC()) {
						case 42:
						case 47:
							od((c = function(e, t) {
								for (; ow();) if (e + ob === 57) break;
								else if (e + ob === 84 && 47 === oC()) break;
								return "/*" + oc(oy, t, om - 1) + "*" + oi(47 === e ? e : ow());
							}(ow(), om), ov(c, r, n, oe, oi(ob), oc(c, 2, -2), 0)), u);
							break;
						default: M += "/";
					}
					break;
				case 123 * b: l[f++] = of(M) * v;
				case 125 * b:
				case 59:
				case 0:
					switch (x) {
						case 0:
						case 125: y = 0;
						case 59 + d:
							-1 == v && (M = os(M, /\f/g, "")), p > 0 && of(M) - h && od(p > 32 ? oA(M + ";", a, n, h - 1) : oA(os(M, " ", "") + ";", a, n, h - 2), u);
							break;
						case 59: M += ";";
						default: if (od(P = oS(M, r, n, f, d, i, l, w, C = [], k = [], h), o), 123 === x) if (0 === d) e(M, r, P, P, C, o, h, l, k);
						else switch (99 === g && 110 === ou(M, 3) ? 100 : g) {
							case 100:
							case 108:
							case 109:
							case 115:
								e(t, P, P, a && od(oS(t, P, P, 0, 0, i, l, w, i, C = [], h), k), i, k, h, l, a ? C : k);
								break;
							default: e(M, P, P, P, [""], k, 0, l, k);
						}
					}
					f = d = p = 0, b = v = 1, w = M = "", h = s;
					break;
				case 58: h = 1 + of(M), p = m;
				default:
					if (b < 1) {
						if (123 == x) --b;
						else if (125 == x && 0 == b++ && 125 == (ob = om > 0 ? ou(oy, --om) : 0, og--, 10 === ob && (og = 1, oh--), ob)) continue;
					}
					switch (M += oi(x), x * b) {
						case 38:
							v = d > 0 ? 1 : (M += "\f", -1);
							break;
						case 44:
							l[f++] = (of(M) - 1) * v, v = 1;
							break;
						case 64:
							45 === oC() && (M += oM(ow())), g = oC(), d = h = of(w = M += function(e) {
								for (; !ok(oC());) ow();
								return oc(oy, e, om);
							}(om)), x++;
							break;
						case 45: 45 === m && 2 == of(M) && (b = 0);
					}
			}
			return o;
		}("", null, null, null, [""], t = oP(t = e), 0, [0], t), oy = "", r), f);
	}, h = {
		key: o,
		sheet: new i8({
			key: o,
			container: a,
			nonce: e.nonce,
			speedy: e.speedy,
			prepend: e.prepend,
			insertionPoint: e.insertionPoint
		}),
		nonce: e.nonce,
		inserted: u,
		registered: {},
		insert: function(e, t, r, n) {
			i = r, d(e ? e + "{" + t.styles + "}" : t.styles), n && (h.inserted[t.name] = !0);
		}
	};
	return h.sheet.hydrate(c), h;
}, oj = function(e, t, r) {
	var n = e.key + "-" + t.name;
	!1 === r && void 0 === e.registered[n] && (e.registered[n] = t.styles);
}, oV = function(e, t, r) {
	oj(e, t, r);
	var n = e.key + "-" + t.name;
	if (void 0 === e.inserted[t.name]) {
		var a = t;
		do
			e.insert(t === a ? "." + n : "", a, e.sheet, !0), a = a.next;
		while (void 0 !== a);
	}
};
let oB = e$(() => oE({ key: "css" }), { name: "Cache" }), oH = (e) => (t) => {
	t.serialized && (t.withoutScoping ? e.insert("", t.serialized, e.sheet, !0) : oV(e, t.serialized, t.isStringTag ?? !0));
};
var oN = F({
	sx: ez(),
	component: ez().optional().default("div")
}, (e, { slots: t, expose: r }) => {
	let n = i3.use(), a = oB.use(), i = n.unstable_css(a, e.sx ?? {}), o = oH(a);
	eL(() => {
		o({
			serialized: i,
			isStringTag: !0
		});
	});
	let s = en(null);
	return r({ [Z]: s }), () => ew(e.component ?? "div", {
		ref: s,
		class: "0" !== i.name ? `${a.key}-${i.name}` : "",
		children: t
	});
});
function oW(...e) {
	let r, n = "div", a = {}, i = {};
	for (let t of e) {
		if (ec(t)) {
			r = t;
			continue;
		}
		if (rf(t) || g(t)) {
			n = t;
			continue;
		}
		O(r) && I(t) ? a = t : i = t;
	}
	return r ??= (e, t) => (r) => {
		let n = {};
		for (let t in e) "component" !== t && "sx" !== t && e[t] && (n[`data-${t}`] = e[t]);
		return ew(r, {
			...n,
			children: t.slots
		});
	}, (e) => {
		let o = Object.assign(F({
			...a,
			sx: ez().optional(),
			component: ez().optional()
		}, (a, i) => {
			let s = i3.use(), l = oB.use(), u = oH(l), c = ef(""), f = s.unstable_css(l, e), d = () => ("0" !== f.name ? `${l.key}-${f.name}${c.value}` : `${c.value}`) + (o.name ? ` ${o.name}` : "");
			if (n.__styled) {
				let e = s.unstable_css(l, a.sx ?? {});
				"0" !== e.name && (c.value = ` ${l.key}-${e.name}`), eL(() => {
					u({
						serialized: f,
						isStringTag: !0
					}), u({
						serialized: e,
						isStringTag: !0
					});
				});
			} else t(() => {
				u({
					serialized: f,
					isStringTag: !0
				});
			});
			let h = r(a, i), g = en(null);
			return i.expose({ [Z]: g }), () => {
				if (n.__styled) {
					let e = h(n);
					return e ? N(e, {
						component: a.component,
						ref: g,
						class: d()
					}) : null;
				}
				let e = h(oN);
				return e ? N(e, {
					component: a.component || n,
					sx: a.sx,
					ref: g,
					class: d()
				}) : null;
			};
		}, i), { __styled: !0 });
		return o.toString = () => `.${o.name}`, o;
	};
}
var oz = F(({ styles: e }) => {
	let r = i3.use(), n = oB.use(), a = oH(n), i = r.unstable_css(n, rf(e) ? { "&": e } : e);
	return t(() => {
		a({
			serialized: i,
			withoutScoping: !0
		});
	}), () => null;
}, {
	displayName: "GlobalStyle",
	props: ["styles"]
}), oU = F(() => {
	let e = i3.use().rootCSSVars;
	return () => ew(oz, { styles: {
		":host, :root, [data-theme]": e,
		"*, *::after, *::before": { boxSizing: "border-box" },
		html: { fontSize: "10px" },
		a: { color: "inherit" },
		body: { textStyle: "sys.body-medium" }
	} });
}, { displayName: "CSSReset" });
let oq = e$(() => ({ mountPoint: () => document.body }), { name: "OverlaySetting" });
var oG = e$(() => new oY(eT(null), eT(null), () => !1), { name: "Overlay" }), oY = class {
	children = [];
	constructor(e, t, r) {
		this.triggerRef = e, this.contentRef = t, this.isOpen = r;
	}
	add = (e) => (this.children = [...this.children, e], () => {
		this.children = this.children.filter((t) => t !== e);
	});
	isClickInside = (e) => {
		for (let t of this.children) if (t.isClickInside(e)) return !0;
		let t = Y(this.triggerRef), r = Y(this.contentRef);
		return t && (t === e.target || e.composedPath().includes(t)) || r && (r === e.target || e.composedPath().includes(r));
	};
	topmost() {
		return 0 === this.children.filter((e) => e.isOpen()).length;
	}
}, oK = F((e, { slots: t, attrs: r, emit: n }) => {
	let a = e.contentRef || eT(null), i = new oY(e.triggerRef ?? eT(null), a, () => !!e.isOpen), o = oq.use();
	return er(oG.use().add(i)), window && em(eu(a, "value"), ev((e) => {
		if (!e) return;
		let t = (e) => {
			i.isClickInside(e) || n("click-outside", e);
		};
		return window.addEventListener("pointerdown", t), () => {
			window.removeEventListener("pointerdown", t);
		};
	}), ev((e) => {
		if (!e) return;
		let t = (e) => {
			"Escape" === e.key && i.topmost() && n("esc-keydown", e);
		};
		return window.addEventListener("keydown", t), () => {
			window.removeEventListener("keydown", t);
		};
	}), eF()), () => {
		let s = e.isOpen ? N(ew("div", {
			...r,
			ref: a,
			style: e.style,
			children: ew(oG, {
				value: i,
				children: t.default?.()
			})
		}), { onVnodeBeforeMount: () => {
			n("content-before-mount");
		} }) : null;
		return ew(eS, {
			to: o.mountPoint(),
			children: t.transition ? t.transition({ content: s }) : s
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
}), oX = Math.min, oJ = Math.max, oZ = Math.round, oQ = Math.floor, o0 = (e) => ({
	x: e,
	y: e
}), o1 = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
}, o2 = {
	start: "end",
	end: "start"
};
function o4(e, t) {
	return "function" == typeof e ? e(t) : e;
}
function o5(e) {
	return e.split("-")[0];
}
function o3(e) {
	return e.split("-")[1];
}
function o8(e) {
	return "x" === e ? "y" : "x";
}
function o6(e) {
	return "y" === e ? "height" : "width";
}
var o9 = new Set(["top", "bottom"]);
function o7(e) {
	return o9.has(o5(e)) ? "y" : "x";
}
function se(e) {
	return e.replace(/start|end/g, (e) => o2[e]);
}
var st = ["left", "right"], sr = ["right", "left"], sn = ["top", "bottom"], sa = ["bottom", "top"];
function si(e) {
	return e.replace(/left|right|bottom|top/g, (e) => o1[e]);
}
function so(e) {
	let { x: t, y: r, width: n, height: a } = e;
	return {
		width: n,
		height: a,
		top: r,
		left: t,
		right: t + n,
		bottom: r + a,
		x: t,
		y: r
	};
}
function ss(e, t, r) {
	let n, { reference: a, floating: i } = e, o = o7(t), s = o8(o7(t)), l = o6(s), u = o5(t), c = "y" === o, f = a.x + a.width / 2 - i.width / 2, d = a.y + a.height / 2 - i.height / 2, h = a[l] / 2 - i[l] / 2;
	switch (u) {
		case "top":
			n = {
				x: f,
				y: a.y - i.height
			};
			break;
		case "bottom":
			n = {
				x: f,
				y: a.y + a.height
			};
			break;
		case "right":
			n = {
				x: a.x + a.width,
				y: d
			};
			break;
		case "left":
			n = {
				x: a.x - i.width,
				y: d
			};
			break;
		default: n = {
			x: a.x,
			y: a.y
		};
	}
	switch (o3(t)) {
		case "start":
			n[s] -= h * (r && c ? -1 : 1);
			break;
		case "end": n[s] += h * (r && c ? -1 : 1);
	}
	return n;
}
var sl = async (e, t, r) => {
	let { placement: n = "bottom", strategy: a = "absolute", middleware: i = [], platform: o } = r, s = i.filter(Boolean), l = await (null == o.isRTL ? void 0 : o.isRTL(t)), u = await o.getElementRects({
		reference: e,
		floating: t,
		strategy: a
	}), { x: c, y: f } = ss(u, n, l), d = n, h = {}, g = 0;
	for (let r = 0; r < s.length; r++) {
		let { name: i, fn: p } = s[r], { x: m, y: b, data: y, reset: v } = await p({
			x: c,
			y: f,
			initialPlacement: n,
			placement: d,
			strategy: a,
			middlewareData: h,
			rects: u,
			platform: o,
			elements: {
				reference: e,
				floating: t
			}
		});
		c = null != m ? m : c, f = null != b ? b : f, h = {
			...h,
			[i]: {
				...h[i],
				...y
			}
		}, v && g <= 50 && (g++, "object" == typeof v && (v.placement && (d = v.placement), v.rects && (u = !0 === v.rects ? await o.getElementRects({
			reference: e,
			floating: t,
			strategy: a
		}) : v.rects), {x: c, y: f} = ss(u, d, l)), r = -1);
	}
	return {
		x: c,
		y: f,
		placement: d,
		strategy: a,
		middlewareData: h
	};
};
async function su(e, t) {
	var r, n;
	void 0 === t && (t = {});
	let { x: a, y: i, platform: o, rects: s, elements: l, strategy: u } = e, { boundary: c = "clippingAncestors", rootBoundary: f = "viewport", elementContext: d = "floating", altBoundary: h = !1, padding: g = 0 } = o4(t, e), p = "number" != typeof (n = g) ? {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...n
	} : {
		top: n,
		right: n,
		bottom: n,
		left: n
	}, m = l[h ? "floating" === d ? "reference" : "floating" : d], b = so(await o.getClippingRect({
		element: null == (r = await (null == o.isElement ? void 0 : o.isElement(m))) || r ? m : m.contextElement || await (null == o.getDocumentElement ? void 0 : o.getDocumentElement(l.floating)),
		boundary: c,
		rootBoundary: f,
		strategy: u
	})), y = "floating" === d ? {
		x: a,
		y: i,
		width: s.floating.width,
		height: s.floating.height
	} : s.reference, v = await (null == o.getOffsetParent ? void 0 : o.getOffsetParent(l.floating)), x = await (null == o.isElement ? void 0 : o.isElement(v)) && await (null == o.getScale ? void 0 : o.getScale(v)) || {
		x: 1,
		y: 1
	}, w = so(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
		elements: l,
		rect: y,
		offsetParent: v,
		strategy: u
	}) : y);
	return {
		top: (b.top - w.top + p.top) / x.y,
		bottom: (w.bottom - b.bottom + p.bottom) / x.y,
		left: (b.left - w.left + p.left) / x.x,
		right: (w.right - b.right + p.right) / x.x
	};
}
function sc() {
	return "undefined" != typeof window;
}
function sf(e) {
	return sg(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function sd(e) {
	var t;
	return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window;
}
function sh(e) {
	var t;
	return null == (t = (sg(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement;
}
function sg(e) {
	return !!sc() && (e instanceof Node || e instanceof sd(e).Node);
}
function sp(e) {
	return !!sc() && (e instanceof Element || e instanceof sd(e).Element);
}
function sm(e) {
	return !!sc() && (e instanceof HTMLElement || e instanceof sd(e).HTMLElement);
}
function sb(e) {
	return !!sc() && "undefined" != typeof ShadowRoot && (e instanceof ShadowRoot || e instanceof sd(e).ShadowRoot);
}
var sy = new Set(["inline", "contents"]);
function sv(e) {
	let { overflow: t, overflowX: r, overflowY: n, display: a } = sR(e);
	return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && !sy.has(a);
}
var sx = new Set([
	"table",
	"td",
	"th"
]), sw = [":popover-open", ":modal"];
function sC(e) {
	return sw.some((t) => {
		try {
			return e.matches(t);
		} catch (e) {
			return !1;
		}
	});
}
var sk = [
	"transform",
	"translate",
	"scale",
	"rotate",
	"perspective"
], sP = [
	"transform",
	"translate",
	"scale",
	"rotate",
	"perspective",
	"filter"
], sM = [
	"paint",
	"layout",
	"strict",
	"content"
];
function sS(e) {
	let t = sA(), r = sp(e) ? sR(e) : e;
	return sk.some((e) => !!r[e] && "none" !== r[e]) || !!r.containerType && "normal" !== r.containerType || !t && !!r.backdropFilter && "none" !== r.backdropFilter || !t && !!r.filter && "none" !== r.filter || sP.some((e) => (r.willChange || "").includes(e)) || sM.some((e) => (r.contain || "").includes(e));
}
function sA() {
	return "undefined" != typeof CSS && !!CSS.supports && CSS.supports("-webkit-backdrop-filter", "none");
}
var s_ = new Set([
	"html",
	"body",
	"#document"
]);
function sT(e) {
	return s_.has(sf(e));
}
function sR(e) {
	return sd(e).getComputedStyle(e);
}
function sO(e) {
	return sp(e) ? {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	} : {
		scrollLeft: e.scrollX,
		scrollTop: e.scrollY
	};
}
function sD(e) {
	if ("html" === sf(e)) return e;
	let t = e.assignedSlot || e.parentNode || sb(e) && e.host || sh(e);
	return sb(t) ? t.host : t;
}
function s$(e, t, r) {
	var n;
	void 0 === t && (t = []), void 0 === r && (r = !0);
	let a = function e(t) {
		let r = sD(t);
		return sT(r) ? t.ownerDocument ? t.ownerDocument.body : t.body : sm(r) && sv(r) ? r : e(r);
	}(e), i = a === (null == (n = e.ownerDocument) ? void 0 : n.body), o = sd(a);
	if (i) {
		let e = sI(o);
		return t.concat(o, o.visualViewport || [], sv(a) ? a : [], e && r ? s$(e) : []);
	}
	return t.concat(a, s$(a, [], r));
}
function sI(e) {
	return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function sL(e) {
	let t = sR(e), r = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0, a = sm(e), i = a ? e.offsetWidth : r, o = a ? e.offsetHeight : n, s = oZ(r) !== i || oZ(n) !== o;
	return s && (r = i, n = o), {
		width: r,
		height: n,
		$: s
	};
}
function sF(e) {
	return sp(e) ? e : e.contextElement;
}
function sE(e) {
	let t = sF(e);
	if (!sm(t)) return o0(1);
	let r = t.getBoundingClientRect(), { width: n, height: a, $: i } = sL(t), o = (i ? oZ(r.width) : r.width) / n, s = (i ? oZ(r.height) : r.height) / a;
	return o && Number.isFinite(o) || (o = 1), s && Number.isFinite(s) || (s = 1), {
		x: o,
		y: s
	};
}
var sj = o0(0);
function sV(e) {
	let t = sd(e);
	return sA() && t.visualViewport ? {
		x: t.visualViewport.offsetLeft,
		y: t.visualViewport.offsetTop
	} : sj;
}
function sB(e, t, r, n) {
	var a;
	void 0 === t && (t = !1), void 0 === r && (r = !1);
	let i = e.getBoundingClientRect(), o = sF(e), s = o0(1);
	t && (n ? sp(n) && (s = sE(n)) : s = sE(e));
	let l = (void 0 === (a = r) && (a = !1), n && (!a || n === sd(o)) && a) ? sV(o) : o0(0), u = (i.left + l.x) / s.x, c = (i.top + l.y) / s.y, f = i.width / s.x, d = i.height / s.y;
	if (o) {
		let e = sd(o), t = n && sp(n) ? sd(n) : n, r = e, a = sI(r);
		for (; a && n && t !== r;) {
			let e = sE(a), t = a.getBoundingClientRect(), n = sR(a), i = t.left + (a.clientLeft + parseFloat(n.paddingLeft)) * e.x, o = t.top + (a.clientTop + parseFloat(n.paddingTop)) * e.y;
			u *= e.x, c *= e.y, f *= e.x, d *= e.y, u += i, c += o, a = sI(r = sd(a));
		}
	}
	return so({
		width: f,
		height: d,
		x: u,
		y: c
	});
}
function sH(e, t) {
	let r = sO(e).scrollLeft;
	return t ? t.left + r : sB(sh(e)).left + r;
}
function sN(e, t) {
	let r = e.getBoundingClientRect();
	return {
		x: r.left + t.scrollLeft - sH(e, r),
		y: r.top + t.scrollTop
	};
}
var sW = new Set(["absolute", "fixed"]);
function sz(e, t, r) {
	let n;
	if ("viewport" === t) n = function(e, t) {
		let r = sd(e), n = sh(e), a = r.visualViewport, i = n.clientWidth, o = n.clientHeight, s = 0, l = 0;
		if (a) {
			i = a.width, o = a.height;
			let e = sA();
			(!e || e && "fixed" === t) && (s = a.offsetLeft, l = a.offsetTop);
		}
		let u = sH(n);
		if (u <= 0) {
			let e = n.ownerDocument, t = e.body, r = getComputedStyle(t), a = "CSS1Compat" === e.compatMode && parseFloat(r.marginLeft) + parseFloat(r.marginRight) || 0, o = Math.abs(n.clientWidth - t.clientWidth - a);
			o <= 25 && (i -= o);
		} else u <= 25 && (i += u);
		return {
			width: i,
			height: o,
			x: s,
			y: l
		};
	}(e, r);
	else if ("document" === t) n = function(e) {
		let t = sh(e), r = sO(e), n = e.ownerDocument.body, a = oJ(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), i = oJ(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight), o = -r.scrollLeft + sH(e), s = -r.scrollTop;
		return "rtl" === sR(n).direction && (o += oJ(t.clientWidth, n.clientWidth) - a), {
			width: a,
			height: i,
			x: o,
			y: s
		};
	}(sh(e));
	else if (sp(t)) n = function(e, t) {
		let r = sB(e, !0, "fixed" === t), n = r.top + e.clientTop, a = r.left + e.clientLeft, i = sm(e) ? sE(e) : o0(1), o = e.clientWidth * i.x, s = e.clientHeight * i.y;
		return {
			width: o,
			height: s,
			x: a * i.x,
			y: n * i.y
		};
	}(t, r);
	else {
		let r = sV(e);
		n = {
			x: t.x - r.x,
			y: t.y - r.y,
			width: t.width,
			height: t.height
		};
	}
	return so(n);
}
function sU(e) {
	return "static" === sR(e).position;
}
function sq(e, t) {
	if (!sm(e) || "fixed" === sR(e).position) return null;
	if (t) return t(e);
	let r = e.offsetParent;
	return sh(e) === r && (r = r.ownerDocument.body), r;
}
function sG(e, t) {
	var r;
	let n = sd(e);
	if (sC(e)) return n;
	if (!sm(e)) {
		let t = sD(e);
		for (; t && !sT(t);) {
			if (sp(t) && !sU(t)) return t;
			t = sD(t);
		}
		return n;
	}
	let a = sq(e, t);
	for (; a && (r = a, sx.has(sf(r))) && sU(a);) a = sq(a, t);
	return a && sT(a) && sU(a) && !sS(a) ? n : a || function(e) {
		let t = sD(e);
		for (; sm(t) && !sT(t);) {
			if (sS(t)) return t;
			if (sC(t)) break;
			t = sD(t);
		}
		return null;
	}(e) || n;
}
var sY = async function(e) {
	let t = this.getOffsetParent || sG, r = this.getDimensions, n = await r(e.floating);
	return {
		reference: function(e, t, r) {
			let n = sm(t), a = sh(t), i = "fixed" === r, o = sB(e, !0, i, t), s = {
				scrollLeft: 0,
				scrollTop: 0
			}, l = o0(0);
			if (n || !n && !i) if (("body" !== sf(t) || sv(a)) && (s = sO(t)), n) {
				let e = sB(t, !0, i, t);
				l.x = e.x + t.clientLeft, l.y = e.y + t.clientTop;
			} else a && (l.x = sH(a));
			i && !n && a && (l.x = sH(a));
			let u = !a || n || i ? o0(0) : sN(a, s);
			return {
				x: o.left + s.scrollLeft - l.x - u.x,
				y: o.top + s.scrollTop - l.y - u.y,
				width: o.width,
				height: o.height
			};
		}(e.reference, await t(e.floating), e.strategy),
		floating: {
			x: 0,
			y: 0,
			width: n.width,
			height: n.height
		}
	};
}, sK = {
	convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
		let { elements: t, rect: r, offsetParent: n, strategy: a } = e, i = "fixed" === a, o = sh(n), s = !!t && sC(t.floating);
		if (n === o || s && i) return r;
		let l = {
			scrollLeft: 0,
			scrollTop: 0
		}, u = o0(1), c = o0(0), f = sm(n);
		if ((f || !f && !i) && (("body" !== sf(n) || sv(o)) && (l = sO(n)), sm(n))) {
			let e = sB(n);
			u = sE(n), c.x = e.x + n.clientLeft, c.y = e.y + n.clientTop;
		}
		let d = !o || f || i ? o0(0) : sN(o, l);
		return {
			width: r.width * u.x,
			height: r.height * u.y,
			x: r.x * u.x - l.scrollLeft * u.x + c.x + d.x,
			y: r.y * u.y - l.scrollTop * u.y + c.y + d.y
		};
	},
	getDocumentElement: sh,
	getClippingRect: function(e) {
		let { element: t, boundary: r, rootBoundary: n, strategy: a } = e, i = [..."clippingAncestors" === r ? sC(t) ? [] : function(e, t) {
			let r = t.get(e);
			if (r) return r;
			let n = s$(e, [], !1).filter((e) => sp(e) && "body" !== sf(e)), a = null, i = "fixed" === sR(e).position, o = i ? sD(e) : e;
			for (; sp(o) && !sT(o);) {
				let t = sR(o), r = sS(o);
				r || "fixed" !== t.position || (a = null), (i ? !r && !a : !r && "static" === t.position && !!a && sW.has(a.position) || sv(o) && !r && function e(t, r) {
					let n = sD(t);
					return !(n === r || !sp(n) || sT(n)) && ("fixed" === sR(n).position || e(n, r));
				}(e, o)) ? n = n.filter((e) => e !== o) : a = t, o = sD(o);
			}
			return t.set(e, n), n;
		}(t, this._c) : [].concat(r), n], o = i[0], s = i.reduce((e, r) => {
			let n = sz(t, r, a);
			return e.top = oJ(n.top, e.top), e.right = oX(n.right, e.right), e.bottom = oX(n.bottom, e.bottom), e.left = oJ(n.left, e.left), e;
		}, sz(t, o, a));
		return {
			width: s.right - s.left,
			height: s.bottom - s.top,
			x: s.left,
			y: s.top
		};
	},
	getOffsetParent: sG,
	getElementRects: sY,
	getClientRects: function(e) {
		return Array.from(e.getClientRects());
	},
	getDimensions: function(e) {
		let { width: t, height: r } = sL(e);
		return {
			width: t,
			height: r
		};
	},
	getScale: sE,
	isElement: sp,
	isRTL: function(e) {
		return "rtl" === sR(e).direction;
	}
};
function sX(e, t) {
	return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
var sJ = function(e) {
	return void 0 === e && (e = {}), {
		name: "size",
		options: e,
		async fn(t) {
			var r, n;
			let a, i, { placement: o, rects: s, platform: l, elements: u } = t, { apply: c = () => {},...f } = o4(e, t), d = await su(t, f), h = o5(o), g = o3(o), p = "y" === o7(o), { width: m, height: b } = s.floating;
			"top" === h || "bottom" === h ? (a = h, i = g === (await (null == l.isRTL ? void 0 : l.isRTL(u.floating)) ? "start" : "end") ? "left" : "right") : (i = h, a = "end" === g ? "top" : "bottom");
			let y = b - d.top - d.bottom, v = m - d.left - d.right, x = oX(b - d[a], y), w = oX(m - d[i], v), C = !t.middlewareData.shift, k = x, P = w;
			if (null != (r = t.middlewareData.shift) && r.enabled.x && (P = v), null != (n = t.middlewareData.shift) && n.enabled.y && (k = y), C && !g) {
				let e = oJ(d.left, 0), t = oJ(d.right, 0), r = oJ(d.top, 0), n = oJ(d.bottom, 0);
				p ? P = m - 2 * (0 !== e || 0 !== t ? e + t : oJ(d.left, d.right)) : k = b - 2 * (0 !== r || 0 !== n ? r + n : oJ(d.top, d.bottom));
			}
			await c({
				...t,
				availableWidth: P,
				availableHeight: k
			});
			let M = await l.getDimensions(u.floating);
			return m !== M.width || b !== M.height ? { reset: { rects: !0 } } : {};
		}
	};
}, sZ = F((e, { slots: t, emit: r, attrs: n }) => {
	let a = K(null), i = K(null);
	return em(nS([a, i]), ev(([t, r]) => {
		if (r && t) {
			let n = async () => {
				var n, a;
				r.style.position = "absolute";
				let i = await ((e, t, r) => {
					let n = /* @__PURE__ */ new Map(), a = {
						platform: sK,
						...r
					}, i = {
						...a.platform,
						_c: n
					};
					return sl(e, t, {
						...a,
						platform: i
					});
				})(t, r, {
					placement: e.placement ?? "bottom",
					middleware: [
						...e.modifiers ?? [],
						...e.middleware ?? [],
						(void 0 === n && (n = {}), {
							name: "flip",
							options: n,
							async fn(e) {
								var t, r, a, i, o;
								let { placement: s, middlewareData: l, rects: u, initialPlacement: c, platform: f, elements: d } = e, { mainAxis: h = !0, crossAxis: g = !0, fallbackPlacements: p, fallbackStrategy: m = "bestFit", fallbackAxisSideDirection: b = "none", flipAlignment: y = !0,...v } = o4(n, e);
								if (null != (t = l.arrow) && t.alignmentOffset) return {};
								let x = o5(s), w = o7(c), C = o5(c) === c, k = await (null == f.isRTL ? void 0 : f.isRTL(d.floating)), P = p || (C || !y ? [si(c)] : function(e) {
									let t = si(e);
									return [
										se(e),
										t,
										se(t)
									];
								}(c)), M = "none" !== b;
								!p && M && P.push(...function(e, t, r, n) {
									let a = o3(e), i = function(e, t, r) {
										switch (e) {
											case "top":
											case "bottom":
												if (r) return t ? sr : st;
												return t ? st : sr;
											case "left":
											case "right": return t ? sn : sa;
											default: return [];
										}
									}(o5(e), "start" === r, n);
									return a && (i = i.map((e) => e + "-" + a), t && (i = i.concat(i.map(se)))), i;
								}(c, y, b, k));
								let S = [c, ...P], A = await su(e, v), _ = [], T = (null == (r = l.flip) ? void 0 : r.overflows) || [];
								if (h && _.push(A[x]), g) {
									let e = function(e, t, r) {
										void 0 === r && (r = !1);
										let n = o3(e), a = o8(o7(e)), i = o6(a), o = "x" === a ? n === (r ? "end" : "start") ? "right" : "left" : "start" === n ? "bottom" : "top";
										return t.reference[i] > t.floating[i] && (o = si(o)), [o, si(o)];
									}(s, u, k);
									_.push(A[e[0]], A[e[1]]);
								}
								if (T = [...T, {
									placement: s,
									overflows: _
								}], !_.every((e) => e <= 0)) {
									let e = ((null == (a = l.flip) ? void 0 : a.index) || 0) + 1, t = S[e];
									if (t && ("alignment" !== g || w === o7(t) || T.every((e) => o7(e.placement) !== w || e.overflows[0] > 0))) return {
										data: {
											index: e,
											overflows: T
										},
										reset: { placement: t }
									};
									let r = null == (i = T.filter((e) => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]) ? void 0 : i.placement;
									if (!r) switch (m) {
										case "bestFit": {
											let e = null == (o = T.filter((e) => {
												if (M) {
													let t = o7(e.placement);
													return t === w || "y" === t;
												}
												return !0;
											}).map((e) => [e.placement, e.overflows.filter((e) => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]) ? void 0 : o[0];
											e && (r = e);
											break;
										}
										case "initialPlacement": r = c;
									}
									if (s !== r) return { reset: { placement: r } };
								}
								return {};
							}
						}),
						(void 0 === a && (a = {}), {
							name: "shift",
							options: a,
							async fn(e) {
								let { x: t, y: r, placement: n } = e, { mainAxis: i = !0, crossAxis: o = !1, limiter: s = { fn: (e) => {
									let { x: t, y: r } = e;
									return {
										x: t,
										y: r
									};
								} },...l } = o4(a, e), u = {
									x: t,
									y: r
								}, c = await su(e, l), f = o7(o5(n)), d = o8(f), h = u[d], g = u[f];
								if (i) {
									let e = "y" === d ? "top" : "left", t = "y" === d ? "bottom" : "right", r = h + c[e], n = h - c[t];
									h = oJ(r, oX(h, n));
								}
								if (o) {
									let e = "y" === f ? "top" : "left", t = "y" === f ? "bottom" : "right", r = g + c[e], n = g - c[t];
									g = oJ(r, oX(g, n));
								}
								let p = s.fn({
									...e,
									[d]: h,
									[f]: g
								});
								return {
									...p,
									data: {
										x: p.x - t,
										y: p.y - r,
										enabled: {
											[d]: i,
											[f]: o
										}
									}
								};
							}
						})
					]
				});
				Object.assign(r.style, {
					left: `${i.x}px`,
					top: `${i.y}px`
				}), r.setAttribute("data-placement", i.placement);
			}, a = function(e, t, r, n) {
				let a;
				void 0 === n && (n = {});
				let { ancestorScroll: i = !0, ancestorResize: o = !0, elementResize: s = "function" == typeof ResizeObserver, layoutShift: l = "function" == typeof IntersectionObserver, animationFrame: u = !1 } = n, c = sF(e), f = i || o ? [...c ? s$(c) : [], ...s$(t)] : [];
				f.forEach((e) => {
					i && e.addEventListener("scroll", r, { passive: !0 }), o && e.addEventListener("resize", r);
				});
				let d = c && l ? function(e, t) {
					let r, n = null, a = sh(e);
					function i() {
						var e;
						clearTimeout(r), null == (e = n) || e.disconnect(), n = null;
					}
					return function o(s, l) {
						void 0 === s && (s = !1), void 0 === l && (l = 1), i();
						let u = e.getBoundingClientRect(), { left: c, top: f, width: d, height: h } = u;
						if (s || t(), !d || !h) return;
						let g = oQ(f), p = oQ(a.clientWidth - (c + d)), m = {
							rootMargin: -g + "px " + -p + "px " + -oQ(a.clientHeight - (f + h)) + "px " + -oQ(c) + "px",
							threshold: oJ(0, oX(1, l)) || 1
						}, b = !0;
						function y(t) {
							let n = t[0].intersectionRatio;
							if (n !== l) {
								if (!b) return o();
								n ? o(!1, n) : r = setTimeout(() => {
									o(!1, 1e-7);
								}, 1e3);
							}
							1 !== n || sX(u, e.getBoundingClientRect()) || o(), b = !1;
						}
						try {
							n = new IntersectionObserver(y, {
								...m,
								root: a.ownerDocument
							});
						} catch (e) {
							n = new IntersectionObserver(y, m);
						}
						n.observe(e);
					}(!0), i;
				}(c, r) : null, h = -1, g = null;
				s && (g = new ResizeObserver((e) => {
					let [n] = e;
					n && n.target === c && g && (g.unobserve(t), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
						var e;
						null == (e = g) || e.observe(t);
					})), r();
				}), c && !u && g.observe(c), g.observe(t));
				let p = u ? sB(e) : null;
				return u && function t() {
					let n = sB(e);
					p && !sX(p, n) && r(), p = n, a = requestAnimationFrame(t);
				}(), r(), () => {
					var e;
					f.forEach((e) => {
						i && e.removeEventListener("scroll", r), o && e.removeEventListener("resize", r);
					}), d?.(), null == (e = g) || e.disconnect(), g = null, u && cancelAnimationFrame(a);
				};
			}(t, r, n);
			return () => {
				a();
			};
		}
		return () => {};
	}), eF()), () => {
		let o = t.default?.()[0];
		return o ? eR(v, { children: [N(o, {
			...n,
			onVnodeMounted: (e) => {
				a.value = function e(t) {
					if (t) {
						if (t instanceof HTMLElement) return t;
						if (t instanceof Text) return e(t.nextElementSibling);
					}
					return null;
				}(e.el);
			}
		}), ew(oK, {
			style: { zIndex: 100 },
			triggerRef: a,
			contentRef: i,
			isOpen: e.isOpen,
			onClickOutside: (e) => r("click-outside", e),
			onEscKeydown: (e) => r("esc-keydown", e),
			$transition: t.transition,
			children: t.content?.()
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
});
export { rj as C, tW as D, rs as E, tp as O, np as S, rf as T, nS as _, oz as a, ny as b, oB as c, iQ as d, il as f, it as g, ie as h, oU as i, i3 as l, ia as m, sJ as n, oW as o, is as p, oK as r, oN as s, sZ as t, i4 as u, nw as v, rd as w, nm as x, nv as y };
