let e;
import { r as n, t } from "./rolldown-runtime.D8qhy2Lt.chunk.js";
import { $ as a, $t as r, A as s, At as o, Bt as i, C as c, Dt as l, E as u, Et as p, Ft as d, G as h, Gt as m, Ht as f, It as g, J as k, Jt as N, K as y, Kt as b, Lt as v, Mt as x, Nt as w, Ot as C, Pt as M, Q as S, Qt as P, Rt as A, St as _, T, Tt as L, U as R, Ut as O, Vt as $, W as D, Wt as H, X as j, Xt as I, Y as V, Yt as B, Z as F, Zt as E, _t as W, an as z, at as U, bt as q, c as G, cn as Y, ct as X, dn as K, dt as Z, en as J, et as Q, f as ee, fn as en, ft as et, g as ea, gt as er, ht as es, i as eo, in as ei, it as ec, j as el, jt as eu, kt as ep, l as ed, ln as eh, lt as em, m as ef, mt as eg, nn as ek, nt as eN, o as ey, on as eb, ot as ev, p as ex, pn as ew, pt as eC, q as eM, qt as eS, r as eP, rn as eA, rt as e_, sn as eT, st as eL, tn as eR, u as eO, un as e$, ut as eD, vt as eH, w as ej, wt as eI, xt as eV, zt as eB } from "./vendor-innoai-tech-vuekit.2IFYurzk.chunk.js";
import { l as eF } from "./vendor-rxjs.DL8ozOFE.chunk.js";
var eE, eW, ez, eU, eq, eG, eY, eX, eK, eZ, eJ, eQ, e0, e1, e2, e4 = /\s/, e5 = function(e) {
	for (var n = e.length; n-- && e4.test(e.charAt(n)););
	return n;
}, e3 = /^\s+/, e6 = NaN, e8 = /^[-+]0x[0-9a-f]+$/i, e9 = /^0b[01]+$/i, e7 = /^0o[0-7]+$/i, ne = parseInt, nn = function(e) {
	if ("number" == typeof e) return e;
	if (eh(e)) return e6;
	if (z(e)) {
		var n, t = "function" == typeof e.valueOf ? e.valueOf() : e;
		e = z(t) ? t + "" : t;
	}
	if ("string" != typeof e) return 0 === e ? e : +e;
	e = (n = e) ? n.slice(0, e5(n) + 1).replace(e3, "") : n;
	var a = e9.test(e);
	return a || e7.test(e) ? ne(e.slice(2), a ? 2 : 8) : e8.test(e) ? e6 : +e;
}, nt = Infinity, na = function(e) {
	var n, t = (n = e) ? (n = nn(n)) === nt || n === -nt ? (n < 0 ? -1 : 1) * 17976931348623157e292 : n == n ? n : 0 : 0 === n ? n : 0, a = t % 1;
	return t == t ? a ? t - a : t : 0;
}, nr = Object.create, ns = function() {
	function e() {}
	return function(n) {
		if (!z(n)) return {};
		if (nr) return nr(n);
		e.prototype = n;
		var t = new e();
		return e.prototype = void 0, t;
	};
}(), no = function(e, n, t) {
	switch (t.length) {
		case 0: return e.call(n);
		case 1: return e.call(n, t[0]);
		case 2: return e.call(n, t[0], t[1]);
		case 3: return e.call(n, t[0], t[1], t[2]);
	}
	return e.apply(n, t);
}, ni = function(e, n) {
	var t = -1, a = e.length;
	for (n || (n = Array(a)); ++t < a;) n[t] = e[t];
	return n;
}, nc = Date.now, nl = function() {
	try {
		var e = ek(Object, "defineProperty");
		return e({}, "", {}), e;
	} catch (e) {}
}(), nu = (eE = nl ? function(e, n) {
	return nl(e, "toString", {
		configurable: !0,
		enumerable: !1,
		value: function() {
			return n;
		},
		writable: !0
	});
} : ei, eW = 0, ez = 0, function() {
	var e = nc(), n = 16 - (e - ez);
	if (ez = e, n > 0) {
		if (++eW >= 800) return arguments[0];
	} else eW = 0;
	return eE.apply(void 0, arguments);
}), np = function(e, n) {
	for (var t = -1, a = null == e ? 0 : e.length; ++t < a && !1 !== n(e[t], t, e););
	return e;
}, nd = function(e, n, t) {
	"__proto__" == n && nl ? nl(e, n, {
		configurable: !0,
		enumerable: !0,
		value: t,
		writable: !0
	}) : e[n] = t;
}, nh = Object.prototype.hasOwnProperty, nm = function(e, n, t) {
	var a = e[n];
	nh.call(e, n) && J(a, t) && (void 0 !== t || n in e) || nd(e, n, t);
}, nf = function(e, n, t, a) {
	var r = !t;
	t || (t = {});
	for (var s = -1, o = n.length; ++s < o;) {
		var i = n[s], c = a ? a(t[i], e[i], i, t, e) : void 0;
		void 0 === c && (c = e[i]), r ? nd(t, i, c) : nm(t, i, c);
	}
	return t;
}, ng = Math.max, nk = function(e, n, t) {
	if (!z(t)) return !1;
	var a = typeof n;
	return ("number" == a ? !!(r(t) && eR(n, t.length)) : "string" == a && n in t) && J(t[n], e);
}, nN = function(e) {
	var n = [];
	if (null != e) for (var t in Object(e)) n.push(t);
	return n;
}, ny = Object.prototype.hasOwnProperty, nb = function(e) {
	if (!z(e)) return nN(e);
	var n = P(e), t = [];
	for (var a in e) "constructor" == a && (n || !ny.call(e, a)) || t.push(a);
	return t;
}, nv = function(e) {
	return r(e) ? eS(e, !0) : nb(e);
}, nx = en ? en.isConcatSpreadable : void 0, nw = function(e) {
	return eT(e) || E(e) || !!(nx && e && e[nx]);
}, nC = function e(n, t, a, r, s) {
	var o = -1, c = n.length;
	for (a || (a = nw), s || (s = []); ++o < c;) {
		var l = n[o];
		t > 0 && a(l) ? t > 1 ? e(l, t - 1, a, r, s) : i(s, l) : r || (s[s.length] = l);
	}
	return s;
}, nM = function(e, n, t) {
	var a = -1, r = e.length;
	n < 0 && (n = -n > r ? 0 : r + n), (t = t > r ? r : t) < 0 && (t += r), r = n > t ? 0 : t - n >>> 0, n >>>= 0;
	for (var s = Array(r); ++a < r;) s[a] = e[a + n];
	return s;
}, nS = function(e, n, t) {
	var a = e.length;
	return t = void 0 === t ? a : t, !n && t >= a ? e : nM(e, n, t);
}, nP = RegExp("[\\u200d\ud800-\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"), nA = function(e) {
	return nP.test(e);
}, n_ = "\ud800-\udfff", nT = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]", nL = "\ud83c[\udffb-\udfff]", nR = "[^" + n_ + "]", nO = "(?:\ud83c[\udde6-\uddff]){2}", n$ = "[\ud800-\udbff][\udc00-\udfff]", nD = "(?:" + nT + "|" + nL + ")?", nH = "[\\ufe0e\\ufe0f]?", nj = "(?:\\u200d(?:" + [
	nR,
	nO,
	n$
].join("|") + ")" + nH + nD + ")*", nI = RegExp(nL + "(?=" + nL + ")|" + ("(?:" + [
	nR + nT + "?",
	nT,
	nO,
	n$,
	"[" + n_ + "]"
].join("|")) + ")" + (nH + nD + nj), "g"), nV = function(e) {
	return nA(e) ? e.match(nI) || [] : e.split("");
}, nB = function(e) {
	var n = nA(e = m(e)) ? nV(e) : void 0, t = n ? n[0] : e.charAt(0), a = n ? nS(n, 1).join("") : e.slice(1);
	return t.toUpperCase() + a;
}, nF = v(function(e, n, t) {
	return n = n.toLowerCase(), e + (t ? nB(m(n).toLowerCase()) : n);
}), nE = "object" == typeof exports && exports && !exports.nodeType && exports, nW = nE && "object" == typeof module && module && !module.nodeType && module, nz = nW && nW.exports === nE ? ew.Buffer : void 0, nU = nz ? nz.allocUnsafe : void 0, nq = function(e, n) {
	if (n) return e.slice();
	var t = e.length, a = nU ? nU(t) : new e.constructor(t);
	return e.copy(a), a;
}, nG = Object.getOwnPropertySymbols ? function(e) {
	for (var n = []; e;) i(n, M(e)), e = eB(e);
	return n;
} : d, nY = function(e) {
	return w(e, nv, nG);
}, nX = Object.prototype.hasOwnProperty, nK = function(e) {
	var n = e.length, t = new e.constructor(n);
	return n && "string" == typeof e[0] && nX.call(e, "index") && (t.index = e.index, t.input = e.input), t;
}, nZ = function(e) {
	var n = new e.constructor(e.byteLength);
	return new o(n).set(new o(e)), n;
}, nJ = function(e, n) {
	var t = n ? nZ(e.buffer) : e.buffer;
	return new e.constructor(t, e.byteOffset, e.byteLength);
}, nQ = /\w*$/, n0 = function(e) {
	var n = new e.constructor(e.source, nQ.exec(e));
	return n.lastIndex = e.lastIndex, n;
}, n1 = en ? en.prototype : void 0, n2 = n1 ? n1.valueOf : void 0, n4 = function(e, n) {
	var t = n ? nZ(e.buffer) : e.buffer;
	return new e.constructor(t, e.byteOffset, e.length);
}, n5 = function(e, n, t) {
	var a = e.constructor;
	switch (n) {
		case "[object ArrayBuffer]": return nZ(e);
		case "[object Boolean]":
		case "[object Date]": return new a(+e);
		case "[object DataView]": return nJ(e, t);
		case "[object Float32Array]":
		case "[object Float64Array]":
		case "[object Int8Array]":
		case "[object Int16Array]":
		case "[object Int32Array]":
		case "[object Uint8Array]":
		case "[object Uint8ClampedArray]":
		case "[object Uint16Array]":
		case "[object Uint32Array]": return n4(e, t);
		case "[object Map]":
		case "[object Set]": return new a();
		case "[object Number]":
		case "[object String]": return new a(e);
		case "[object RegExp]": return n0(e);
		case "[object Symbol]": return n2 ? Object(n2.call(e)) : {};
	}
}, n3 = N && N.isMap, n6 = n3 ? B(n3) : function(e) {
	return e$(e) && "[object Map]" == eu(e);
}, n8 = N && N.isSet, n9 = n8 ? B(n8) : function(e) {
	return e$(e) && "[object Set]" == eu(e);
}, n7 = "[object Arguments]", te = "[object Function]", tn = "[object Object]", tt = {};
tt[n7] = tt["[object Array]"] = tt["[object ArrayBuffer]"] = tt["[object DataView]"] = tt["[object Boolean]"] = tt["[object Date]"] = tt["[object Float32Array]"] = tt["[object Float64Array]"] = tt["[object Int8Array]"] = tt["[object Int16Array]"] = tt["[object Int32Array]"] = tt["[object Map]"] = tt["[object Number]"] = tt[tn] = tt["[object RegExp]"] = tt["[object Set]"] = tt["[object String]"] = tt["[object Symbol]"] = tt["[object Uint8Array]"] = tt["[object Uint8ClampedArray]"] = tt["[object Uint16Array]"] = tt["[object Uint32Array]"] = !0, tt["[object Error]"] = tt[te] = tt["[object WeakMap]"] = !1;
var ta = function e(n, t, a, r, s, o) {
	var i, c = 1 & t, l = 2 & t, u = 4 & t;
	if (a && (i = s ? a(n, r, s, o) : a(n)), void 0 !== i) return i;
	if (!z(n)) return n;
	var p = eT(n);
	if (p) {
		if (i = nK(n), !c) return ni(n, i);
	} else {
		var d, h, m, f, k, N = eu(n), y = N == te || "[object GeneratorFunction]" == N;
		if (I(n)) return nq(n, c);
		if (N == tn || N == n7 || y && !s) {
			if (i = l || y || "function" != typeof (d = n).constructor || P(d) ? {} : ns(eB(d)), !c) return l ? (m = (h = i) && nf(n, nv(n), h), nf(n, nG(n), m)) : (k = (f = i) && nf(n, b(n), f), nf(n, M(n), k));
		} else {
			if (!tt[N]) return s ? n : {};
			i = n5(n, N, c);
		}
	}
	o || (o = new g());
	var v = o.get(n);
	if (v) return v;
	o.set(n, i), n9(n) ? n.forEach(function(r) {
		i.add(e(r, t, a, r, n, o));
	}) : n6(n) && n.forEach(function(r, s) {
		i.set(s, e(r, t, a, s, n, o));
	});
	var w = p ? void 0 : (u ? l ? nY : x : l ? nv : b)(n);
	return np(w || n, function(r, s) {
		w && (r = n[s = r]), nm(i, s, e(r, t, a, s, n, o));
	}), i;
}, tr = function(e) {
	var n = null == e ? 0 : e.length;
	return n ? e[n - 1] : void 0;
}, ts = function(e, n) {
	var t = -1, a = r(e) ? Array(e.length) : [];
	return eI(e, function(e, r, s) {
		a[++t] = n(e, r, s);
	}), a;
}, to = function(e, n) {
	return (eT(e) ? Y : ts)(e, p(n, 3));
}, ti = Object.prototype.hasOwnProperty, tc = function(e, n) {
	return null != e && ti.call(e, n);
}, tl = function(e, n) {
	return null != e && C(e, n, tc);
}, tu = function(e) {
	return "string" == typeof e || !eT(e) && e$(e) && "[object String]" == K(e);
}, tp = function(e) {
	return "number" == typeof e || e$(e) && "[object Number]" == K(e);
}, td = function(e, n) {
	var t = {};
	return n = p(n, 3), L(e, function(e, a, r) {
		nd(t, a, n(e, a, r));
	}), t;
}, th = function(e, n) {
	var t, a;
	return n = H(n, e), t = e, null == (e = (a = n).length < 2 ? t : f(t, nM(a, 0, -1))) || delete e[O(tr(n))];
}, tm = function(e) {
	return A(e) ? void 0 : e;
}, tf = nu((eq = eU = function(e, n) {
	var t = {};
	if (null == e) return t;
	var a = !1;
	n = Y(n, function(n) {
		return n = H(n, e), a || (a = n.length > 1), n;
	}), nf(e, nY(e), t), a && (t = ta(t, 7, tm));
	for (var r = n.length; r--;) th(t, n[r]);
	return t;
}, eG = void 0, eY = function(e) {
	return (null == e ? 0 : e.length) ? nC(e, 1) : [];
}, eG = ng(void 0 === eG ? eq.length - 1 : eG, 0), function() {
	for (var e = arguments, n = -1, t = ng(e.length - eG, 0), a = Array(t); ++n < t;) a[n] = e[eG + n];
	n = -1;
	for (var r = Array(eG + 1); ++n < eG;) r[n] = e[n];
	return r[eG] = eY(a), no(eq, this, r);
}), eU + ""), tg = function(e, n, t, a) {
	if (!z(e)) return e;
	n = H(n, e);
	for (var r = -1, s = n.length, o = s - 1, i = e; null != i && ++r < s;) {
		var c = O(n[r]), l = t;
		if ("__proto__" === c || "constructor" === c || "prototype" === c) break;
		if (r != o) {
			var u = i[c];
			void 0 === (l = a ? a(u, c, i) : void 0) && (l = z(u) ? u : eR(n[r + 1]) ? [] : {});
		}
		nm(i, c, l), i = i[c];
	}
	return e;
}, tk = function(e, n, t) {
	for (var a = -1, r = n.length, s = {}; ++a < r;) {
		var o = n[a], i = f(e, o);
		t(i, o) && tg(s, H(o, e), i);
	}
	return s;
}, tN = function(e, n) {
	if (null == e) return {};
	var t = Y(nY(e), function(e) {
		return [e];
	});
	return n = p(n), tk(e, t, function(e, t) {
		return n(e, t[0]);
	});
}, ty = Math.floor, tb = function(e, n) {
	var t = "";
	if (!e || n < 1 || n > 9007199254740991) return t;
	do
		n % 2 && (t += e), (n = ty(n / 2)) && (e += e);
	while (n);
	return t;
}, tv = l("length"), tx = "\ud800-\udfff", tw = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]", tC = "\ud83c[\udffb-\udfff]", tM = "[^" + tx + "]", tS = "(?:\ud83c[\udde6-\uddff]){2}", tP = "[\ud800-\udbff][\udc00-\udfff]", tA = "(?:" + tw + "|" + tC + ")?", t_ = "[\\ufe0e\\ufe0f]?", tT = "(?:\\u200d(?:" + [
	tM,
	tS,
	tP
].join("|") + ")" + t_ + tA + ")*", tL = RegExp(tC + "(?=" + tC + ")|" + ("(?:" + [
	tM + tw + "?",
	tw,
	tS,
	tP,
	"[" + tx + "]"
].join("|")) + ")" + (t_ + tA + tT), "g"), tR = function(e) {
	for (var n = tL.lastIndex = 0; tL.test(e);) ++n;
	return n;
}, tO = function(e) {
	return nA(e) ? tR(e) : tv(e);
}, t$ = Math.ceil, tD = function(e, n) {
	var t = (n = void 0 === n ? " " : eb(n)).length;
	if (t < 2) return t ? tb(n, e) : n;
	var a = tb(n, t$(e / tO(n)));
	return nA(n) ? nS(nV(a), 0, e).join("") : a.slice(0, e);
}, tH = function(e, n, t) {
	e = m(e);
	var a = (n = na(n)) ? tO(e) : 0;
	return n && a < n ? tD(n - a, t) + e : e;
}, tj = function(e, n, t) {
	return null == e ? e : tg(e, n, t);
}, tI = function(e, n) {
	var t;
	return eI(e, function(e, a, r) {
		return !(t = n(e, a, r));
	}), !!t;
}, tV = function(e, n, t) {
	var a = eT(e) ? ep : tI;
	return t && nk(e, n, t) && (n = void 0), a(e, p(n, 3));
}, tB = void 0, tF = "undefined" != typeof window && window.trustedTypes;
if (tF) try {
	tB = tF.createPolicy("vue", { createHTML: (e) => e });
} catch (e) {}
var tE = tB ? (e) => tB.createHTML(e) : (e) => e, tW = "undefined" != typeof document ? document : null, tz = tW && tW.createElement("template"), tU = "transition", tq = "animation", tG = Symbol("_vtc"), tY = {
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
}, tX = eL({}, D, tY), tK = ((eX = (e, { slots: n }) => F(R, function(e) {
	let n = {};
	for (let t in e) t in tY || (n[t] = e[t]);
	if (!1 === e.css) return n;
	let { name: t = "v", type: a, duration: r, enterFromClass: s = `${t}-enter-from`, enterActiveClass: o = `${t}-enter-active`, enterToClass: i = `${t}-enter-to`, appearFromClass: c = s, appearActiveClass: l = o, appearToClass: u = i, leaveFromClass: p = `${t}-leave-from`, leaveActiveClass: d = `${t}-leave-active`, leaveToClass: h = `${t}-leave-to` } = e, m = function(e) {
		if (null == e) return null;
		{
			if (eC(e)) return [function(e) {
				return eH(e);
			}(e.enter), function(e) {
				return eH(e);
			}(e.leave)];
			let n = function(e) {
				return eH(e);
			}(e);
			return [n, n];
		}
	}(r), f = m && m[0], g = m && m[1], { onBeforeEnter: k, onEnter: N, onEnterCancelled: y, onLeave: b, onLeaveCancelled: v, onBeforeAppear: x = k, onAppear: w = N, onAppearCancelled: C = y } = n, M = (e, n, t, a) => {
		e._enterCancelled = a, t0(e, n ? u : i), t0(e, n ? l : o), t && t();
	}, S = (e, n) => {
		e._isLeaving = !1, t0(e, p), t0(e, h), t0(e, d), n && n();
	}, P = (e) => (n, t) => {
		let r = e ? w : N, o = () => M(n, e, t);
		tZ(r, [n, o]), t1(() => {
			t0(n, e ? c : s), tQ(n, e ? u : i), tJ(r) || t4(n, a, f, o);
		});
	};
	return eL(n, {
		onBeforeEnter(e) {
			tZ(k, [e]), tQ(e, s), tQ(e, o);
		},
		onBeforeAppear(e) {
			tZ(x, [e]), tQ(e, c), tQ(e, l);
		},
		onEnter: P(!1),
		onAppear: P(!0),
		onLeave(e, n) {
			e._isLeaving = !0;
			let t = () => S(e, n);
			tQ(e, p), e._enterCancelled ? (tQ(e, d), t6(e)) : (t6(e), tQ(e, d)), t1(() => {
				e._isLeaving && (t0(e, p), tQ(e, h), tJ(b) || t4(e, a, g, t));
			}), tZ(b, [e, t]);
		},
		onEnterCancelled(e) {
			M(e, !1, void 0, !0), tZ(y, [e]);
		},
		onAppearCancelled(e) {
			M(e, !0, void 0, !0), tZ(C, [e]);
		},
		onLeaveCancelled(e) {
			S(e), tZ(v, [e]);
		}
	});
}(e), n)).displayName = "Transition", eX.props = tX, eX), tZ = (e, n = []) => {
	eD(e) ? e.forEach((e) => e(...n)) : e && e(...n);
}, tJ = (e) => !!e && (eD(e) ? e.some((e) => e.length > 1) : e.length > 1);
function tQ(e, n) {
	n.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[tG] || (e[tG] = /* @__PURE__ */ new Set())).add(n);
}
function t0(e, n) {
	n.split(/\s+/).forEach((n) => n && e.classList.remove(n));
	let t = e[tG];
	t && (t.delete(n), t.size || (e[tG] = void 0));
}
function t1(e) {
	requestAnimationFrame(() => {
		requestAnimationFrame(e);
	});
}
var t2 = 0;
function t4(e, n, t, a) {
	let r = e._endId = ++t2, s = () => {
		r === e._endId && a();
	};
	if (null != t) return setTimeout(s, t);
	let { type: o, timeout: i, propCount: c } = function(e, n) {
		let t = window.getComputedStyle(e), a = (e) => (t[e] || "").split(", "), r = a(`${tU}Delay`), s = a(`${tU}Duration`), o = t5(r, s), i = a(`${tq}Delay`), c = a(`${tq}Duration`), l = t5(i, c), u = null, p = 0, d = 0;
		n === tU ? o > 0 && (u = tU, p = o, d = s.length) : n === tq ? l > 0 && (u = tq, p = l, d = c.length) : d = (u = (p = Math.max(o, l)) > 0 ? o > l ? tU : tq : null) ? u === tU ? s.length : c.length : 0;
		let h = u === tU && /\b(?:transform|all)(?:,|$)/.test(a(`${tU}Property`).toString());
		return {
			type: u,
			timeout: p,
			propCount: d,
			hasTransform: h
		};
	}(e, n);
	if (!o) return a();
	let l = o + "end", u = 0, p = () => {
		e.removeEventListener(l, d), s();
	}, d = (n) => {
		n.target === e && ++u >= c && p();
	};
	setTimeout(() => {
		u < c && p();
	}, i + 1), e.addEventListener(l, d);
}
function t5(e, n) {
	for (; e.length < n.length;) e = e.concat(e);
	return Math.max(...n.map((n, t) => t3(n) + t3(e[t])));
}
function t3(e) {
	return "auto" === e ? 0 : 1e3 * Number(e.slice(0, -1).replace(",", "."));
}
function t6(e) {
	return (e ? e.ownerDocument : document).body.offsetHeight;
}
var t8 = Symbol("_vod"), t9 = Symbol("_vsh"), t7 = Symbol(""), ae = /(?:^|;)\s*display\s*:/, an = /\s*!important$/;
function at(e, n, t) {
	if (eD(t)) t.forEach((t) => at(e, n, t));
	else if (t ??= "", n.startsWith("--")) e.setProperty(n, t);
	else {
		let a = function(e, n) {
			let t = ar[n];
			if (t) return t;
			let a = U(n);
			if ("filter" !== a && a in e) return ar[n] = a;
			a = ev(a);
			for (let t = 0; t < aa.length; t++) {
				let r = aa[t] + a;
				if (r in e) return ar[n] = r;
			}
			return n;
		}(e, n);
		an.test(t) ? e.setProperty(X(a), t.replace(an, ""), "important") : e[a] = t;
	}
}
var aa = [
	"Webkit",
	"Moz",
	"ms"
], ar = {}, as = "http://www.w3.org/1999/xlink";
function ao(e, n, t, a, r, s = es(n)) {
	a && n.startsWith("xlink:") ? null == t ? e.removeAttributeNS(as, n.slice(6, n.length)) : e.setAttributeNS(as, n, t) : null == t || s && !em(t) ? e.removeAttribute(n) : e.setAttribute(n, s ? "" : W(t) ? String(t) : t);
}
function ai(e, n, t, a, r) {
	if ("innerHTML" === n || "textContent" === n) {
		null != t && (e[n] = "innerHTML" === n ? tE(t) : t);
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
		"boolean" === a ? t = em(t) : null == t && "string" === a ? (t = "", o = !0) : "number" === a && (t = 0, o = !0);
	}
	try {
		e[n] = t;
	} catch (e) {}
	o && e.removeAttribute(r || n);
}
var ac = Symbol("_vei"), al = /(?:Once|Passive|Capture)$/, au = 0, ap = Promise.resolve(), ad = (e) => 111 === e.charCodeAt(0) && 110 === e.charCodeAt(1) && e.charCodeAt(2) > 96 && 123 > e.charCodeAt(2), ah = eL({ patchProp: (e, n, t, a, r, s) => {
	let o = "svg" === r;
	if ("class" === n) {
		var i = a;
		let n = e[tG];
		n && (i = (i ? [i, ...n] : [...n]).join(" ")), null == i ? e.removeAttribute("class") : o ? e.setAttribute("class", i) : e.className = i;
	} else "style" === n ? function(e, n, t) {
		let a = e.style, r = er(t), s = !1;
		if (t && !r) {
			if (n) if (er(n)) for (let e of n.split(";")) {
				let n = e.slice(0, e.indexOf(":")).trim();
				t[n] ?? at(a, n, "");
			}
			else for (let e in n) t[e] ?? at(a, e, "");
			for (let e in t) "display" === e && (s = !0), at(a, e, t[e]);
		} else if (r) {
			if (n !== t) {
				let e = a[t7];
				e && (t += ";" + e), a.cssText = t, s = ae.test(t);
			}
		} else n && e.removeAttribute("style");
		t8 in e && (e[t8] = s ? a.display : "", e[t9] && (a.display = "none"));
	}(e, t, a) : eg(n) ? et(n) || function(e, n, t, a, r = null) {
		let s = e[ac] || (e[ac] = {}), o = s[n];
		if (a && o) o.value = a;
		else {
			let [t, i] = function(e) {
				let n;
				if (al.test(e)) {
					let t;
					for (n = {}; t = e.match(al);) e = e.slice(0, e.length - t[0].length), n[t[0].toLowerCase()] = !0;
				}
				return [":" === e[2] ? e.slice(3) : X(e.slice(2)), n];
			}(n);
			if (a) {
				let o = s[n] = function(e, n) {
					let t = (e) => {
						if (e._vts) {
							if (e._vts <= t.attached) return;
						} else e._vts = Date.now();
						eM(function(e, n) {
							if (!eD(n)) return n;
							{
								let t = e.stopImmediatePropagation;
								return e.stopImmediatePropagation = () => {
									t.call(e), e._stopped = !0;
								}, n.map((e) => (n) => !n._stopped && e && e(n));
							}
						}(e, t.value), n, 5, [e]);
					};
					return t.value = e, t.attached = au || (ap.then(() => au = 0), au = Date.now()), t;
				}(a, r);
				e.addEventListener(t, o, i);
			} else o && (e.removeEventListener(t, o, i), s[n] = void 0);
		}
	}(e, n, 0, a, s) : ("." === n[0] ? (n = n.slice(1), 0) : "^" === n[0] ? (n = n.slice(1), 1) : !function(e, n, t, a) {
		if (a) return !!("innerHTML" === n || "textContent" === n || n in e && ad(n) && Z(t));
		if ("spellcheck" === n || "draggable" === n || "translate" === n || "autocorrect" === n || "form" === n || "list" === n && "INPUT" === e.tagName || "type" === n && "TEXTAREA" === e.tagName) return !1;
		if ("width" === n || "height" === n) {
			let n = e.tagName;
			if ("IMG" === n || "VIDEO" === n || "CANVAS" === n || "SOURCE" === n) return !1;
		}
		return !(ad(n) && er(t)) && n in e;
	}(e, n, a, o)) ? e._isVueCE && (/[A-Z]/.test(n) || !er(a)) ? ai(e, U(n), a, s, n) : ("true-value" === n ? e._trueValue = a : "false-value" === n && (e._falseValue = a), ao(e, n, a, o)) : (ai(e, n, a), e.tagName.includes("-") || "value" !== n && "checked" !== n && "selected" !== n || ao(e, n, a, o, s, "value" !== n));
} }, {
	insert: (e, n, t) => {
		n.insertBefore(e, t || null);
	},
	remove: (e) => {
		let n = e.parentNode;
		n && n.removeChild(e);
	},
	createElement: (e, n, t, a) => {
		let r = "svg" === n ? tW.createElementNS("http://www.w3.org/2000/svg", e) : "mathml" === n ? tW.createElementNS("http://www.w3.org/1998/Math/MathML", e) : t ? tW.createElement(e, { is: t }) : tW.createElement(e);
		return "select" === e && a && null != a.multiple && r.setAttribute("multiple", a.multiple), r;
	},
	createText: (e) => tW.createTextNode(e),
	createComment: (e) => tW.createComment(e),
	setText: (e, n) => {
		e.nodeValue = n;
	},
	setElementText: (e, n) => {
		e.textContent = n;
	},
	parentNode: (e) => e.parentNode,
	nextSibling: (e) => e.nextSibling,
	querySelector: (e) => tW.querySelector(e),
	setScopeId(e, n) {
		e.setAttribute(n, "");
	},
	insertStaticContent(e, n, t, a, r, s) {
		let o = t ? t.previousSibling : n.lastChild;
		if (r && (r === s || r.nextSibling)) for (; n.insertBefore(r.cloneNode(!0), t), r !== s && (r = r.nextSibling););
		else {
			tz.innerHTML = tE("svg" === a ? `<svg>${e}</svg>` : "mathml" === a ? `<math>${e}</math>` : e);
			let r = tz.content;
			if ("svg" === a || "mathml" === a) {
				let e = r.firstChild;
				for (; e.firstChild;) r.appendChild(e.firstChild);
				r.removeChild(e);
			}
			n.insertBefore(r, t);
		}
		return [o ? o.nextSibling : n.firstChild, t ? t.previousSibling : n.lastChild];
	}
}), am = (...e) => {
	let n = (e0 || (e0 = V(ah))).createApp(...e), { mount: t } = n;
	return n.mount = (e) => {
		var a, r;
		let s = er(a = e) ? document.querySelector(a) : a;
		if (!s) return;
		let o = n._component;
		Z(o) || o.render || o.template || (o.template = s.innerHTML), 1 === s.nodeType && (s.textContent = "");
		let i = t(s, !1, (r = s) instanceof SVGElement ? "svg" : "function" == typeof MathMLElement && r instanceof MathMLElement ? "mathml" : void 0);
		return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), i;
	}, n;
};
function af(e, n) {
	var t = {};
	for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && 0 > n.indexOf(a) && (t[a] = e[a]);
	if (null != e && "function" == typeof Object.getOwnPropertySymbols) for (var r = 0, a = Object.getOwnPropertySymbols(e); r < a.length; r++) 0 > n.indexOf(a[r]) && Object.prototype.propertyIsEnumerable.call(e, a[r]) && (t[a[r]] = e[a[r]]);
	return t;
}
var ag = function() {}, ak = function() {}, aN = (e, n, t) => Math.min(Math.max(t, e), n);
function ay(e, n) {
	return e * Math.sqrt(1 - n * n);
}
var ab = ["duration", "bounce"], av = [
	"stiffness",
	"damping",
	"mass"
];
function ax(e, n) {
	return n.some((n) => void 0 !== e[n]);
}
function aw(e) {
	var { from: n = 0, to: t = 1, restSpeed: a = 2, restDelta: r } = e, s = af(e, [
		"from",
		"to",
		"restSpeed",
		"restDelta"
	]);
	let o = {
		done: !1,
		value: n
	}, { stiffness: i, damping: c, mass: l, velocity: u, duration: p, isResolvedFromDuration: d } = function(e) {
		let n = Object.assign({
			velocity: 0,
			stiffness: 100,
			damping: 10,
			mass: 1,
			isResolvedFromDuration: !1
		}, e);
		if (!ax(e, av) && ax(e, ab)) {
			let t = function({ duration: e = 800, bounce: n = .25, velocity: t = 0, mass: a = 1 }) {
				let r, s;
				ag(e <= 1e4, "Spring duration must be 10 seconds or less");
				let o = 1 - n;
				o = aN(.05, 1, o), e = aN(.01, 10, e / 1e3), o < 1 ? (r = (n) => {
					let a = n * o, r = a * e;
					return .001 - (a - t) / ay(n, o) * Math.exp(-r);
				}, s = (n) => {
					let a = n * o * e, s = Math.pow(o, 2) * Math.pow(n, 2) * e, i = Math.exp(-a), c = ay(Math.pow(n, 2), o);
					return (-r(n) + .001 > 0 ? -1 : 1) * ((a * t + t - s) * i) / c;
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
	}(s), h = aC, m = aC;
	function f() {
		let e = u ? -(u / 1e3) : 0, a = t - n, s = c / (2 * Math.sqrt(i * l)), o = Math.sqrt(i / l) / 1e3;
		if (void 0 === r && (r = Math.min(Math.abs(t - n) / 100, .4)), s < 1) {
			let n = ay(o, s);
			h = (r) => t - Math.exp(-s * o * r) * ((e + s * o * a) / n * Math.sin(n * r) + a * Math.cos(n * r)), m = (t) => {
				let r = Math.exp(-s * o * t);
				return s * o * r * (Math.sin(n * t) * (e + s * o * a) / n + a * Math.cos(n * t)) - r * (Math.cos(n * t) * (e + s * o * a) - n * a * Math.sin(n * t));
			};
		} else if (1 === s) h = (n) => t - Math.exp(-o * n) * (a + (e + o * a) * n);
		else {
			let n = o * Math.sqrt(s * s - 1);
			h = (r) => {
				let i = Math.exp(-s * o * r), c = Math.min(n * r, 300);
				return t - i * ((e + s * o * a) * Math.sinh(c) + n * a * Math.cosh(c)) / n;
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
aw.needsInterpolation = (e, n) => "string" == typeof e || "string" == typeof n;
var aC = (e) => 0, aM = (e, n, t) => {
	let a = n - e;
	return 0 === a ? 1 : (t - e) / a;
}, aS = (e, n, t) => -t * e + t * n + e, aP = (e, n) => (t) => Math.max(Math.min(t, n), e), aA = (e) => e % 1 ? Number(e.toFixed(5)) : e, a_ = /(-)?([\d]*\.?[\d])+/g, aT = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi, aL = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function aR(e) {
	return "string" == typeof e;
}
var aO = {
	test: (e) => "number" == typeof e,
	parse: parseFloat,
	transform: (e) => e
}, a$ = Object.assign(Object.assign({}, aO), { transform: aP(0, 1) }), aD = {
	test: (e) => aR(e) && e.endsWith("%") && 1 === e.split(" ").length,
	parse: parseFloat,
	transform: (e) => `${e}%`
}, aH = (e, n) => (t) => !!(aR(t) && aL.test(t) && t.startsWith(e) || n && Object.prototype.hasOwnProperty.call(t, n)), aj = (e, n, t) => (a) => {
	if (!aR(a)) return a;
	let [r, s, o, i] = a.match(a_);
	return {
		[e]: parseFloat(r),
		[n]: parseFloat(s),
		[t]: parseFloat(o),
		alpha: void 0 !== i ? parseFloat(i) : 1
	};
}, aI = {
	test: aH("hsl", "hue"),
	parse: aj("hue", "saturation", "lightness"),
	transform: ({ hue: e, saturation: n, lightness: t, alpha: a = 1 }) => "hsla(" + Math.round(e) + ", " + aD.transform(aA(n)) + ", " + aD.transform(aA(t)) + ", " + aA(a$.transform(a)) + ")"
}, aV = aP(0, 255), aB = Object.assign(Object.assign({}, aO), { transform: (e) => Math.round(aV(e)) }), aF = {
	test: aH("rgb", "red"),
	parse: aj("red", "green", "blue"),
	transform: ({ red: e, green: n, blue: t, alpha: a = 1 }) => "rgba(" + aB.transform(e) + ", " + aB.transform(n) + ", " + aB.transform(t) + ", " + aA(a$.transform(a)) + ")"
}, aE = {
	test: aH("#"),
	parse: function(e) {
		let n = "", t = "", a = "", r = "";
		return e.length > 5 ? (n = e.substr(1, 2), t = e.substr(3, 2), a = e.substr(5, 2), r = e.substr(7, 2)) : (n = e.substr(1, 1), t = e.substr(2, 1), a = e.substr(3, 1), r = e.substr(4, 1), n += n, t += t, a += a, r += r), {
			red: parseInt(n, 16),
			green: parseInt(t, 16),
			blue: parseInt(a, 16),
			alpha: r ? parseInt(r, 16) / 255 : 1
		};
	},
	transform: aF.transform
}, aW = (e) => aF.test(e) || aE.test(e) || aI.test(e), az = (e) => aF.test(e) ? aF.parse(e) : aI.test(e) ? aI.parse(e) : aE.parse(e), aU = (e) => aR(e) ? e : e.hasOwnProperty("red") ? aF.transform(e) : aI.transform(e), aq = "${c}", aG = "${n}";
function aY(e) {
	"number" == typeof e && (e = `${e}`);
	let n = [], t = 0, a = e.match(aT);
	a && (t = a.length, e = e.replace(aT, aq), n.push(...a.map(az)));
	let r = e.match(a_);
	return r && (e = e.replace(a_, aG), n.push(...r.map(aO.parse))), {
		values: n,
		numColors: t,
		tokenised: e
	};
}
var aX = function(e) {
	let { values: n, numColors: t, tokenised: a } = aY(e), r = n.length;
	return (e) => {
		let n = a;
		for (let a = 0; a < r; a++) n = n.replace(a < t ? aq : aG, a < t ? aU(e[a]) : aA(e[a]));
		return n;
	};
};
function aK(e, n, t) {
	return (t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6) ? e + (n - e) * 6 * t : t < .5 ? n : t < 2 / 3 ? e + (n - e) * (2 / 3 - t) * 6 : e;
}
function aZ({ hue: e, saturation: n, lightness: t, alpha: a }) {
	e /= 360, t /= 100;
	let r = 0, s = 0, o = 0;
	if (n /= 100) {
		let a = t < .5 ? t * (1 + n) : t + n - t * n, i = 2 * t - a;
		r = aK(i, a, e + 1 / 3), s = aK(i, a, e), o = aK(i, a, e - 1 / 3);
	} else r = s = o = t;
	return {
		red: Math.round(255 * r),
		green: Math.round(255 * s),
		blue: Math.round(255 * o),
		alpha: a
	};
}
var aJ = (e, n, t) => {
	let a = e * e;
	return Math.sqrt(Math.max(0, t * (n * n - a) + a));
}, aQ = [
	aE,
	aF,
	aI
], a0 = (e) => aQ.find((n) => n.test(e)), a1 = (e) => `'${e}' is not an animatable color. Use the equivalent color code instead.`, a2 = (e, n) => {
	let t = a0(e), a = a0(n);
	ak(!!t, a1(e)), ak(!!a, a1(n));
	let r = t.parse(e), s = a.parse(n);
	t === aI && (r = aZ(r), t = aF), a === aI && (s = aZ(s), a = aF);
	let o = Object.assign({}, r);
	return (e) => {
		for (let n in o) "alpha" !== n && (o[n] = aJ(r[n], s[n], e));
		return o.alpha = aS(r.alpha, s.alpha, e), t.transform(o);
	};
}, a4 = (e, n) => (t) => n(e(t)), a5 = (...e) => e.reduce(a4);
function a3(e, n) {
	return "number" == typeof e ? (t) => aS(e, n, t) : aW(e) ? a2(e, n) : a7(e, n);
}
var a6 = (e, n) => {
	let t = [...e], a = t.length, r = e.map((e, t) => a3(e, n[t]));
	return (e) => {
		for (let n = 0; n < a; n++) t[n] = r[n](e);
		return t;
	};
}, a8 = (e, n) => {
	let t = Object.assign(Object.assign({}, e), n), a = {};
	for (let r in t) void 0 !== e[r] && void 0 !== n[r] && (a[r] = a3(e[r], n[r]));
	return (e) => {
		for (let n in a) t[n] = a[n](e);
		return t;
	};
};
function a9(e) {
	let n = aY(e).values, t = n.length, a = 0, r = 0, s = 0;
	for (let e = 0; e < t; e++) a || "number" == typeof n[e] ? a++ : void 0 !== n[e].hue ? s++ : r++;
	return {
		parsed: n,
		numNumbers: a,
		numRGB: r,
		numHSL: s
	};
}
var a7 = (e, n) => {
	let t = aX(n), a = a9(e), r = a9(n);
	return a.numHSL === r.numHSL && a.numRGB === r.numRGB && a.numNumbers >= r.numNumbers ? a5(a6(a.parsed, r.parsed), t) : (ag(!0, `Complex values '${e}' and '${n}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), (t) => `${t > 0 ? n : e}`);
}, re = (e, n) => (t) => aS(e, n, t);
function rn(e, n, { clamp: t = !0, ease: a, mixer: r } = {}) {
	let s = e.length;
	ak(s === n.length, "Both input and output ranges must be the same length"), ak(!a || !Array.isArray(a) || a.length === s - 1, "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."), e[0] > e[s - 1] && (e = [].concat(e), n = [].concat(n), e.reverse(), n.reverse());
	let o = function(e, n, t) {
		let a = [], r = t || function(e) {
			if ("number" == typeof e) return re;
			if ("string" == typeof e) if (aW(e)) return a2;
			else return a7;
			return Array.isArray(e) ? a6 : "object" == typeof e ? a8 : void 0;
		}(e[0]), s = e.length - 1;
		for (let t = 0; t < s; t++) {
			let s = r(e[t], e[t + 1]);
			n && (s = a5(Array.isArray(n) ? n[t] : n, s)), a.push(s);
		}
		return a;
	}(n, a, r), i = 2 === s ? function([e, n], [t]) {
		return (a) => t(aM(e, n, a));
	}(e, o) : function(e, n) {
		let t = e.length, a = t - 1;
		return (r) => {
			let s = 0, o = !1;
			if (r <= e[0] ? o = !0 : r >= e[a] && (s = a - 1, o = !0), !o) {
				let n = 1;
				for (; n < t && !(e[n] > r) && n !== a; n++);
				s = n - 1;
			}
			let i = aM(e[s], e[s + 1], r);
			return n[s](i);
		};
	}(e, o);
	return t ? (n) => i(aN(e[0], e[s - 1], n)) : i;
}
var rt = (e) => e, ra = (e = (e) => Math.pow(e, 2), (n) => n <= .5 ? e(2 * n) / 2 : (2 - e(2 * (1 - n))) / 2);
function rr({ from: e = 0, to: n = 1, ease: t, offset: a, duration: r = 300 }) {
	var s;
	let o = {
		done: !1,
		value: e
	}, i = Array.isArray(n) ? n : [e, n], c = (s = a && a.length === i.length ? a : function(e) {
		let n = e.length;
		return e.map((e, t) => 0 !== t ? t / (n - 1) : 0);
	}(i), s.map((e) => e * r));
	function l() {
		return rn(c, i, { ease: Array.isArray(t) ? t : i.map(() => t || ra).splice(0, i.length - 1) });
	}
	let u = l();
	return {
		next: (e) => (o.value = u(e), o.done = e >= r, o),
		flipTarget: () => {
			i.reverse(), u = l();
		}
	};
}
var rs = {
	keyframes: rr,
	spring: aw,
	decay: function({ velocity: e = 0, from: n = 0, power: t = .8, timeConstant: a = 350, restDelta: r = .5, modifyTarget: s }) {
		let o = {
			done: !1,
			value: n
		}, i = t * e, c = n + i, l = void 0 === s ? c : s(c);
		return l !== c && (i = l - n), {
			next: (e) => {
				let n = -i * Math.exp(-e / a);
				return o.done = !(n > r || n < -r), o.value = o.done ? l : l + n, o;
			},
			flipTarget: () => {}
		};
	}
}, ro = 1 / 60 * 1e3, ri = "undefined" != typeof performance ? () => performance.now() : () => Date.now(), rc = "undefined" != typeof window ? (e) => window.requestAnimationFrame(e) : (e) => setTimeout(() => e(ri()), ro), rl = !0, ru = !1, rp = !1, rd = {
	delta: 0,
	timestamp: 0
}, rh = [
	"read",
	"update",
	"preRender",
	"render",
	"postRender"
], rm = rh.reduce((e, n) => (e[n] = function(e) {
	let n = [], t = [], a = 0, r = !1, s = !1, o = /* @__PURE__ */ new WeakSet(), i = {
		schedule: (e, s = !1, i = !1) => {
			let c = i && r, l = c ? n : t;
			return s && o.add(e), -1 === l.indexOf(e) && (l.push(e), c && r && (a = n.length)), e;
		},
		cancel: (e) => {
			let n = t.indexOf(e);
			-1 !== n && t.splice(n, 1), o.delete(e);
		},
		process: (c) => {
			if (r) {
				s = !0;
				return;
			}
			if (r = !0, [n, t] = [t, n], t.length = 0, a = n.length) for (let t = 0; t < a; t++) {
				let a = n[t];
				a(c), o.has(a) && (i.schedule(a), e());
			}
			r = !1, s && (s = !1, i.process(c));
		}
	};
	return i;
}(() => ru = !0), e), {}), rf = rh.reduce((e, n) => {
	let t = rm[n];
	return e[n] = (e, n = !1, a = !1) => (ru || ry(), t.schedule(e, n, a)), e;
}, {}), rg = rh.reduce((e, n) => (e[n] = rm[n].cancel, e), {}), rk = (e) => rm[e].process(rd), rN = (e) => {
	ru = !1, rd.delta = rl ? ro : Math.max(Math.min(e - rd.timestamp, 40), 1), rd.timestamp = e, rp = !0, rh.forEach(rk), rp = !1, ru && (rl = !1, rc(rN));
}, ry = () => {
	ru = !0, rl = !0, rp || rc(rN);
};
function rb(e, n, t = 0) {
	return e - n - t;
}
var rv = (e) => {
	let n = ({ delta: n }) => e(n);
	return {
		start: () => rf.update(n, !0),
		stop: () => rg.update(n)
	};
};
function rx(e) {
	let n, t, a;
	var r, { from: s, autoplay: o = !0, driver: i = rv, elapsed: c = 0, repeat: l = 0, repeatType: u = "loop", repeatDelay: p = 0, onPlay: d, onStop: h, onComplete: m, onRepeat: f, onUpdate: g } = e, k = af(e, [
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
	let { to: N } = k, y = 0, b = k.duration, v = !1, x = !0, w = function(e) {
		if (Array.isArray(e.to)) return rr;
		if (rs[e.type]) return rs[e.type];
		let n = new Set(Object.keys(e));
		if (n.has("ease") || n.has("duration") && !n.has("dampingRatio"));
		else if (n.has("dampingRatio") || n.has("stiffness") || n.has("mass") || n.has("damping") || n.has("restSpeed") || n.has("restDelta")) return aw;
		return rr;
	}(k);
	null != (r = w.needsInterpolation) && r.call(w, s, N) && (a = rn([0, 100], [s, N], { clamp: !1 }), s = 0, N = 100);
	let C = w(Object.assign(Object.assign({}, k), {
		from: s,
		to: N
	}));
	return o && (d?.(), (n = i(function(e) {
		if (x || (e = -e), c += e, !v) {
			let e = C.next(Math.max(0, c));
			t = e.value, a && (t = a(t)), v = x ? e.done : c <= 0;
		}
		if (g?.(t), v) if (0 === y && (b ??= c), y < l) {
			var r = c;
			(x ? r >= b + p : r <= -p) && (y++, "reverse" === u ? c = function(e, n, t = 0, a = !0) {
				return a ? rb(n + -e, n, t) : n - (e - n) + t;
			}(c, b, p, x = y % 2 == 0) : (c = rb(c, b, p), "mirror" === u && C.flipTarget()), v = !1, f && f());
		} else n.stop(), m && m();
	})).start()), { stop: () => {
		h?.(), n.stop();
	} };
}
var rw = (e, n) => 1 - 3 * n + 3 * e, rC = (e, n) => 3 * n - 6 * e, rM = (e, n, t) => ((rw(n, t) * e + rC(n, t)) * e + 3 * n) * e, rS = (e, n, t) => 3 * rw(n, t) * e * e + 2 * rC(n, t) * e + 3 * n, rP = {
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
}, rA = /[A-Z]|^ms/g, r_ = /_EMO_([^_]+?)_([^]*?)_EMO_/g, rT = function(e) {
	return 45 === e.charCodeAt(1);
}, rL = function(e) {
	return null != e && "boolean" != typeof e;
}, rR = (eK = function(e) {
	return rT(e) ? e : e.replace(rA, "-$&").toLowerCase();
}, eZ = Object.create(null), function(e) {
	return void 0 === eZ[e] && (eZ[e] = eK(e)), eZ[e];
}), rO = function(e, n) {
	switch (e) {
		case "animation":
		case "animationName": if ("string" == typeof n) return n.replace(r_, function(e, n, t) {
			return e1 = {
				name: n,
				styles: t,
				next: e1
			}, n;
		});
	}
	return 1 === rP[e] || rT(e) || "number" != typeof n || 0 === n ? n : n + "px";
};
function r$(e, n, t) {
	if (null == t) return "";
	if (void 0 !== t.__emotion_styles) return t;
	switch (typeof t) {
		case "boolean": return "";
		case "object":
			if (1 === t.anim) return e1 = {
				name: t.name,
				styles: t.styles,
				next: e1
			}, t.name;
			if (void 0 !== t.styles) {
				var a = t.next;
				if (void 0 !== a) for (; void 0 !== a;) e1 = {
					name: a.name,
					styles: a.styles,
					next: e1
				}, a = a.next;
				return t.styles + ";";
			}
			return function(e, n, t) {
				var a = "";
				if (Array.isArray(t)) for (var r = 0; r < t.length; r++) a += r$(e, n, t[r]) + ";";
				else for (var s in t) {
					var o = t[s];
					if ("object" != typeof o) null != n && void 0 !== n[o] ? a += s + "{" + n[o] + "}" : rL(o) && (a += rR(s) + ":" + rO(s, o) + ";");
					else if (Array.isArray(o) && "string" == typeof o[0] && (null == n || void 0 === n[o[0]])) for (var i = 0; i < o.length; i++) rL(o[i]) && (a += rR(s) + ":" + rO(s, o[i]) + ";");
					else {
						var c = r$(e, n, o);
						switch (s) {
							case "animation":
							case "animationName":
								a += rR(s) + ":" + c + ";";
								break;
							default: a += s + "{" + c + "}";
						}
					}
				}
				return a;
			}(e, n, t);
		case "function": if (void 0 !== e) {
			var r = e1, s = t(e);
			return e1 = r, r$(e, n, s);
		}
	}
	if (null == n) return t;
	var o = n[t];
	return void 0 !== o ? o : t;
}
var rD = /label:\s*([^\s;{]+)\s*(;|$)/g;
function rH() {
	return new Proxy({}, { get: (e, n) => n });
}
let rj = rH(), rI = {
	paddingX: [rj.paddingLeft, rj.paddingRight],
	paddingY: [rj.paddingTop, rj.paddingBottom],
	marginX: [rj.marginInlineStart, rj.marginInlineEnd],
	marginY: [rj.marginTop, rj.marginBottom],
	borderX: [rj.borderLeft, rj.borderRight],
	borderY: [rj.borderTop, rj.borderBottom],
	color: [rj.color, rj.fill],
	borderTopRadius: [rj.borderTopLeftRadius, rj.borderTopRightRadius],
	borderBottomRadius: [rj.borderBottomLeftRadius, rj.borderBottomRightRadius],
	borderRightRadius: [rj.borderTopRightRadius, rj.borderBottomRightRadius],
	borderLeftRadius: [rj.borderTopLeftRadius, rj.borderBottomLeftRadius],
	backgroundGradient: [rj.backgroundImage],
	boxSize: [rj.width, rj.height]
}, rV = rH(), rB = {
	font: rV.fontFamily,
	shadow: rV.boxShadow,
	rounded: rV.borderRadius,
	roundedTop: rV.borderTopRadius,
	roundedBottom: rV.borderBottomRadius,
	roundedLeft: rV.borderLeftRadius,
	roundedRight: rV.borderRightRadius,
	bg: rV.background,
	bgImage: rV.backgroundImage,
	bgSize: rV.backgroundSize,
	bgPosition: rV.backgroundPosition,
	bgRepeat: rV.backgroundRepeat,
	bgAttachment: rV.backgroundAttachment,
	bgColor: rV.backgroundColor,
	bgGradient: rV.backgroundGradient,
	bgClip: rV.backgroundClip,
	pos: rV.position,
	p: rV.padding,
	pt: rV.paddingTop,
	pr: rV.paddingRight,
	pl: rV.paddingLeft,
	pb: rV.paddingBottom,
	ps: rV.paddingInlineStart,
	pe: rV.paddingInlineEnd,
	px: rV.paddingX,
	py: rV.paddingY,
	m: rV.margin,
	mt: rV.marginTop,
	mr: rV.marginRight,
	ml: rV.marginLeft,
	mb: rV.marginBottom,
	ms: rV.marginInlineStart,
	me: rV.marginInlineEnd,
	mx: rV.marginX,
	my: rV.marginY,
	w: rV.width,
	minW: rV.minWidth,
	maxW: rV.maxWidth,
	h: rV.height,
	minH: rV.minHeight,
	maxH: rV.maxHeight
}, rF = rH(), rE = (...e) => {
	let n = [...e];
	for (let t of e) rB[t] && n.push(rB[t]);
	return n;
}, rW = {
	_rtl: "[dir=rtl] &, &[dir=rtl]",
	_ltr: "[dir=ltr] &, &[dir=ltr]",
	_dark: "&[data-theme=dark]",
	_light: "&[data-theme=light]"
};
var rz = class e {
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
		if (rW[n]) return rW[n];
		let t = n;
		if (t.startsWith("$") || t.endsWith("$") || t.startsWith("_")) {
			let n = "", a = "";
			if (t.startsWith("_") ? (n = "&", t = t.slice(1)) : t.startsWith("$") ? (n = "& ", t = t.slice(1)) : (a = " &", t = t.slice(0, t.length - 1)), t.startsWith("data") || t.startsWith("aria")) {
				let [e, r] = t.split("__");
				return r ? `${n}[${q(e)}='${q(r)}']${a}` : `${n}[${q(e)}]${a}`;
			}
			if ("&" === n) {
				if (t.startsWith("$")) return `${n}::${t.slice(1)}`;
				if (e.supportedPseudoClasses[t]) {
					let a = e.supportedPseudoClasses[t];
					return `${n}:${a}, ${n}[data-${a}]:not([data-${a}='false']), ${n}.${a}`;
				}
				let [a, r] = t.split("__"), s = q(a);
				return r ? `${n}[data-${s}='${q(r)}']` : `${n}[data-${s}]:not([data-${s}='false'])`;
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
			let o = s[n], i = s.default ?? a.default, c = r ?? $(i, [...a.path.slice(1), "$"]), l = c ? [...a.selectorPath, c] : a.selectorPath, u = [...a.path, n];
			if (A(o)) {
				e.walkStateValues(o, t, {
					path: u,
					selectorPath: l,
					default: i
				});
				continue;
			}
			t(o, u, l);
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
				let s = `--${this.opt.varPrefix}-state-${a.join("-")}`, o = tr(a) ?? "", i = {};
				this.process(i, o, e, !1), n[s] = i[o], tj(t, [...r, o], `var(${s})`);
			}), a.push(n), a.push(...this.processAll(t));
		}
		if (!_(o)) {
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
		if (A(a)) {
			n[s = e.convertSelector(s) ?? s] = n[s] ?? {}, this.processTo(n[s], a);
			return;
		}
		if (r && rI[s = rB[s] ?? s]) {
			for (let e of rI[s]) n[e] = this.opt.processValue(e, a);
			return;
		}
		n[s] = this.opt.processValue(s, a);
	}
};
let rU = ((eJ = {}).var = "var", eJ.mixin = "mixin", eJ);
var rq = class e {
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
		return e.create(rU.var, {
			value: n,
			on: rE(rF.color, rF.bgColor, rF.outlineColor, rF.borderColor, rF.accentColor, rF.fill, rF.stroke),
			transform: (e, n) => tu(e) ? {
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
		return e.create(rU.var, {
			value: n,
			on: rE(rF.gap, rF.rowGap, rF.columnGap, rF.top, rF.right, rF.bottom, rF.left, rF.m, rF.ms, rF.me, rF.mt, rF.mr, rF.mb, rF.ml, rF.mx, rF.my, rF.p, rF.ps, rF.pe, rF.pt, rF.pr, rF.pb, rF.pl, rF.px, rF.py)
		});
	}
	static boxSize(n) {
		return e.create(rU.var, {
			value: n,
			on: rE(rF.w, rF.minW, rF.maxW, rF.h, rF.minH, rF.maxH, rF.boxSize),
			fallback: 0
		});
	}
	static fontSize(n) {
		return e.create(rU.var, {
			value: n,
			on: rE(rF.fontSize),
			fallback: 0
		});
	}
	static lineHeight(n) {
		return e.create(rU.var, {
			value: n,
			on: rE(rF.lineHeight),
			fallback: 0
		});
	}
	static rounded(n) {
		return e.create(rU.var, {
			value: n,
			fallback: 0,
			on: rE(rF.rounded, rF.roundedTop, rF.roundedBottom, rF.roundedLeft, rF.roundedRight, rj.borderTopLeftRadius, rj.borderTopRightRadius, rj.borderBottomLeftRadius, rj.borderBottomRightRadius, rj.borderTopRightRadius, rj.borderBottomRightRadius, rj.borderTopLeftRadius, rj.borderBottomLeftRadius)
		});
	}
	static transitionTimingFunction(n) {
		return e.create(rU.var, {
			value: n,
			on: rE(rF.transitionTimingFunction)
		});
	}
	static transitionDuration(n) {
		return e.create(rU.var, {
			value: n,
			on: rE(rF.transitionDuration),
			transform: (e) => `${e}ms`
		});
	}
	static font(n) {
		return e.create(rU.var, {
			value: n,
			on: rE(rF.font)
		});
	}
	static fontWeight(n) {
		return e.create(rU.var, {
			value: n,
			on: rE(rF.fontWeight)
		});
	}
	static letterSpacing(n) {
		return e.create(rU.var, {
			value: n,
			on: rE(rF.letterSpacing)
		});
	}
	static shadow(n) {
		return e.create(rU.var, {
			value: n,
			on: rE(rF.shadow)
		});
	}
	static customMixin(n, t) {
		return e.create(rU.mixin, {
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
let rG = (e, n, t) => {
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
var rY = class e {
	static defaultMode = "_default";
	static walkValues = (n, t, a = []) => {
		for (let r in n) {
			let s = n[r];
			if (A(s)) {
				if (tl(s, "_default")) {
					t(s, [...a, r]);
					continue;
				}
				e.walkValues(s, t, [...a, r]);
				continue;
			}
			t(s, [...a, r]);
		}
	};
	__Tokens = void 0;
	_values = {};
	_cssVarRefs = {};
	constructor(n, { cssVar: t, transformFallback: a }) {
		e.walkValues(n.value, (e, r) => {
			let s = r.join("."), o = (e, r) => {
				let s = n.transform ? n.transform(e, t) : a(e);
				if (z(s)) for (let e in s) r(s[e], "default" === e ? "" : e);
				else r(s, "");
			};
			if (tj(this._cssVarRefs, [s], t(s)), A(e)) for (let n in e) o(e[n], (e, t) => {
				tj(this._values, [`${s}${t ? `/${t}` : ""}`, n], e);
			});
			else o(e, (e, n) => {
				tj(this._values, [`${s}${n ? `/${n}` : ""}`], e);
			});
		});
	}
	get tokens() {
		return b(this._values);
	}
	get(n, t, a) {
		let r = this._values[n];
		return z(r) ? a ? r[t] : r[t] ?? r[e.defaultMode] : a ? t === e.defaultMode ? r : void 0 : r;
	}
	use(e, n = !1) {
		if (this._cssVarRefs[e]) return n ? `${this._cssVarRefs[e]}` : `var(${this._cssVarRefs[e]})`;
	}
}, rX = class e {
	static walkValue = (n, t, a = []) => {
		for (let r in n) {
			let s = n[r];
			if (A(s)) {
				if (tl(s, "__mixin")) {
					t(s, [...a, r]);
					continue;
				}
				e.walkValue(s, t, [...a, r]);
				continue;
			}
			t(s, [...a, r]);
		}
	};
	_values = {};
	constructor(n) {
		e.walkValue(n.value, (e, n) => {
			let t = n.join(".");
			tj(this._values, [t], tf(e, "__mixin"));
		});
	}
	get tokens() {
		return b(this._values);
	}
	get(e) {
		return this._values[e];
	}
}, rK = {
	primary: ["primary"],
	secondary: ["secondary"],
	tertiary: ["tertiary"],
	error: ["error"],
	warning: ["warning"],
	success: ["success"],
	neutral: ["surface", "outline"]
};
let rZ = (e) => {
	let n = $(e, ["color", "sys"], {});
	return {
		...e,
		color: { sys: td(rK, (e) => tN(n, (n, t) => tV(e, (e) => t.indexOf(e) > -1))) }
	};
}, rJ = (e) => (n) => `rgba(var(${n}--rgb) / ${e})`;
function rQ(e, n) {
	return Object.assign((e) => n(e), {
		toString: () => e,
		token: e
	});
}
var r0 = (e) => e.reduce((e, n) => Object.assign(e, { [n]: !0 }), {}), r1 = class e {
	static propsCanPercent = r0([...rq.boxSize({}).on]);
	static propsCanBaseDp = r0([
		...rq.boxSize({}).on,
		...rq.space({}).on,
		...rq.fontSize({}).on,
		...rq.letterSpacing({}).on,
		...rq.lineHeight({}).on,
		...rq.rounded({}).on
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
	transformFallback = (n, t) => e.propsCanBaseDp[n] && tp(t) ? e.propsCanPercent[n] && 1 > Math.abs(t) ? `${100 * t}%` : this.dp(t) : t;
	constructor(e, n = {}) {
		for (let t in this.theme = e, this.varPrefix = n.varPrefix ?? "vk", this.mode = n.mode ?? "light", tj(this.cssVars, [this.cssVar("space", "dp")], "0.1rem"), e) {
			let n = e[t];
			if (n) {
				if (n.type === rU.var) {
					let e = new rY(n, {
						cssVar: (e) => this.cssVar(t, e),
						transformFallback: (e) => this.transformFallback(n.on[0], e)
					});
					for (let a of (this.tokens[t] = e, n.on)) this.propValues[a] = e;
					for (let n of e.tokens) for (let a of ["light", "dark"]) {
						let r = a === this.mode ? "_default" : `_${a}`, s = e.get(n, r, !0);
						eV(s) || ("_default" === r ? tj(this.cssVars, [this.cssVar(t, n)], s) : tj(this.cssVars, [r, this.cssVar(t, n)], s));
					}
					continue;
				}
				if (n.type === rU.mixin) {
					let e = new rX(n);
					for (let t of n.on) this.mixins[t] = e;
				}
			}
		}
	}
	cssVar(e, n) {
		return `--${this.varPrefix}-${q(e)}__${n.replaceAll("/", "--").replaceAll(".", "__")}`;
	}
	get rootCSSVars() {
		return this.cssVars;
	}
	token = new Proxy({}, { get: (e, n) => this.tokens[n] ? Object.assign((e) => this.tokens[n]?.get(e, `_${this.mode}`), { tokens: this.tokens[n]?.tokens }) : this.mixins[n] ? Object.assign((e) => this.mixins[n]?.get(e), { tokens: this.mixins[n]?.tokens }) : void 0 });
	processValue = (e, n) => {
		if (eA(n) && tl(n, "token")) {
			let t = this.propValues[e]?.use(n.token, !0);
			return t ? n(t) : void 0;
		}
		return this.propValues[e]?.use(n) ?? this.transformFallback(e, n);
	};
	unstable_sx = (e) => new rz({
		mixins: this.mixins,
		varPrefix: this.varPrefix,
		processValue: this.processValue
	}).processAll(e);
	unstable_css(e, n) {
		let t = n ?? {};
		return t.__emotion_styles = t.__emotion_styles ?? function(e, n, t) {
			if (1 === e.length && "object" == typeof e[0] && null !== e[0] && void 0 !== e[0].styles) return e[0];
			var a, r = !0, s = "";
			e1 = void 0;
			var o = e[0];
			null == o || void 0 === o.raw ? (r = !1, s += r$(t, n, o)) : s += o[0];
			for (var i = 1; i < e.length; i++) s += r$(t, n, e[i]), r && (s += o[i]);
			rD.lastIndex = 0;
			for (var c = ""; null !== (a = rD.exec(s));) c += "-" + a[1];
			return {
				name: function(e) {
					for (var n, t = 0, a = 0, r = e.length; r >= 4; ++a, r -= 4) n = (65535 & (n = 255 & e.charCodeAt(a) | (255 & e.charCodeAt(++a)) << 8 | (255 & e.charCodeAt(++a)) << 16 | (255 & e.charCodeAt(++a)) << 24)) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= n >>> 24, t = (65535 & n) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ (65535 & t) * 1540483477 + ((t >>> 16) * 59797 << 16);
					switch (r) {
						case 3: t ^= (255 & e.charCodeAt(a + 2)) << 16;
						case 2: t ^= (255 & e.charCodeAt(a + 1)) << 8;
						case 1: t ^= 255 & e.charCodeAt(a), t = (65535 & t) * 1540483477 + ((t >>> 16) * 59797 << 16);
					}
					return t ^= t >>> 13, (((t = (65535 & t) * 1540483477 + ((t >>> 16) * 59797 << 16)) ^ t >>> 15) >>> 0).toString(36);
				}(s) + c,
				styles: s,
				next: e1
			};
		}(this.unstable_sx(n), e?.registered, {}), t.__emotion_styles;
	}
	toFigmaTokens() {
		let e = { space: { dp: {
			$type: "sizing",
			$value: 1
		} } }, n = {}, t = {}, a = (e, n) => z(n) ? {
			$type: e,
			$value: td(n, (n) => a(e, n).$value)
		} : tu(n) ? {
			$type: e,
			$value: n.replace(/var\(([^)]+)\)/g, (e) => {
				let n = e.slice(4, e.length - 1).slice(`--${this.varPrefix}-`.length).split("--")[0]?.split("__").map((e, n) => 0 === n ? nF(e) : e).join(".") ?? "";
				return n.startsWith("sys.") ? `{${n}}` : `{seed.${n}}`;
			}).replace(/calc\(.+\)$/g, (e) => e.slice(5, e.length - 1))
		} : {
			$type: e,
			$value: n
		};
		for (let r in this.tokens) {
			let s = this.tokens[r], o = (o) => {
				for (let i of s.tokens) if (!i.includes("/")) if (i.startsWith("sys.")) {
					let e = s.get(i, "_default"), c = s.get(i, "_dark");
					rG(n, [r, ...i.split(".")], a(o, e)), e !== c && rG(t, [r, ...i.split(".")], a(o, c));
				} else rG(e, [r, ...i.split(".")], a(o, s.get(i, "_default")));
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
					rG(n, [e, ...s.split(".")], a(r, i));
				}
			};
			"textStyle" === e && r("typography");
		}
		return {
			seed: e,
			base: rZ(n),
			dark: rZ(t)
		};
	}
};
let r2 = {
	shadow: rq.shadow({
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
	elevation: rq.customMixin("elevation", {
		0: rq.mixin({
			transitionDuration: "md4",
			transitionTimingFunction: "standard",
			shadow: "0",
			_hover: { shadow: "1" }
		}),
		1: rq.mixin({
			transitionDuration: "md4",
			transitionTimingFunction: "standard",
			shadow: "1",
			_hover: { shadow: "2" }
		}),
		2: rq.mixin({
			transitionDuration: "md4",
			transitionTimingFunction: "standard",
			shadow: "2",
			_hover: { shadow: "3" }
		}),
		3: rq.mixin({
			transitionDuration: "md4",
			transitionTimingFunction: "standard",
			shadow: "3",
			_hover: { shadow: "4" }
		}),
		4: rq.mixin({
			transitionDuration: "md4",
			transitionTimingFunction: "standard",
			shadow: "4",
			_hover: { shadow: "5" }
		})
	})
};
var r4 = (e, n, t, a) => Object.assign(function(e, n, t, a) {
	if (e === n && t === a) return rt;
	let r = new Float32Array(11);
	for (let n = 0; n < 11; ++n) r[n] = rM(.1 * n, e, t);
	return (s) => 0 === s || 1 === s ? s : rM(function(n) {
		let a = 0, s = 1;
		for (; 10 !== s && r[s] <= n; ++s) a += .1;
		let o = a + (n - r[--s]) / (r[s + 1] - r[s]) * .1, i = rS(o, e, t);
		if (i >= .001) {
			var c = o;
			for (let a = 0; a < 8; ++a) {
				let a = rS(c, e, t);
				if (0 === a) break;
				let r = rM(c, e, t) - n;
				c -= r / a;
			}
			return c;
		}
		return 0 === i ? o : function(e, n, t, a, r) {
			let s, o, i = 0;
			do
				(s = rM(o = n + (t - n) / 2, a, r) - e) > 0 ? t = o : n = o;
			while (Math.abs(s) > 1e-7 && ++i < 10);
			return o;
		}(n, a, a + .1, e, t);
	}(s), n, a);
}(e, n, t, a), { toString: () => `cubic-bezier(${e}, ${n}, ${t}, ${a})` });
let r5 = {
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
		linear: r4(0, 0, 1, 1),
		standard: Object.assign(r4(.2, 0, 0, 1), {
			accelerate: r4(.3, 0, 1, 1),
			decelerate: r4(0, 0, 0, 1)
		}),
		emphasized: Object.assign(r4(.2, 0, 0, 1), {
			accelerate: r4(.3, 0, .8, .15),
			decelerate: r4(.05, .7, .1, 1)
		}),
		legacy: Object.assign(r4(.4, 0, .2, 1), {
			decelerate: r4(0, 0, .2, 1),
			accelerate: r4(.4, 0, 1, 1)
		})
	}
}, r3 = (e, n) => {
	let t = n ?? {
		...e,
		from: { ...e.to },
		to: { ...e.from }
	};
	return ej({
		onComplete: el(),
		$default: el()
	}, (n, { slots: a, emit: r }) => {
		let s, o = (n, t) => {
			s = rx({
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
			s = rx({
				...t,
				autoplay: !0,
				onComplete: () => {
					n(), r("complete", "leave");
				},
				onUpdate: (n) => {
					Object.assign(e.style, n);
				}
			});
		}, c = () => {
			s?.stop();
		};
		return () => G(tK, {
			css: !1,
			onEnter: o,
			onEnterCancelled: c,
			onLeave: i,
			onLeaveCancelled: c,
			children: a.default?.()
		});
	}, { name: "Transition" });
}, r6 = {
	transitionDuration: rq.transitionDuration(r5.duration),
	transitionTimingFunction: rq.transitionTimingFunction({
		linear: r5.easing.linear.toString(),
		standard: r5.easing.standard.toString(),
		"standard-accelerate": r5.easing.standard.accelerate.toString(),
		"standard-decelerate": r5.easing.standard.decelerate.toString(),
		emphasized: r5.easing.emphasized.toString(),
		"emphasized-decelerate": r5.easing.emphasized.decelerate.toString(),
		"emphasized-accelerate": r5.easing.emphasized.accelerate.toString(),
		legacy: r5.easing.legacy.toString(),
		"legacy-decelerate": r5.easing.legacy.decelerate.toString(),
		"legacy-accelerate": r5.easing.legacy.accelerate.toString()
	})
};
function r8(e) {
	return e < 0 ? -1 : +(0 !== e);
}
function r9(e, n, t) {
	return t < e ? e : t > n ? n : t;
}
function r7(e) {
	return (e %= 360) < 0 && (e += 360), e;
}
function se(e) {
	return (e %= 360) < 0 && (e += 360), e;
}
function sn(e, n) {
	return [
		e[0] * n[0][0] + e[1] * n[0][1] + e[2] * n[0][2],
		e[0] * n[1][0] + e[1] * n[1][1] + e[2] * n[1][2],
		e[0] * n[2][0] + e[1] * n[2][1] + e[2] * n[2][2]
	];
}
var st = [
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
], sa = [
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
], sr = [
	95.047,
	100,
	108.883
];
function ss(e, n, t) {
	return (-16777216 | (255 & e) << 16 | (255 & n) << 8 | 255 & t) >>> 0;
}
function so(e) {
	let n = sp(e[0]);
	return ss(n, sp(e[1]), sp(e[2]));
}
function si(e) {
	return 116 * sd(function(e) {
		let n = su(e >> 16 & 255);
		return sn([
			n,
			su(e >> 8 & 255),
			su(255 & e)
		], st);
	}(e)[1] / 100) - 16;
}
function sc(e) {
	return 100 * function(e) {
		let n = e * e * e;
		return n > 216 / 24389 ? n : (116 * e - 16) / (24389 / 27);
	}((e + 16) / 116);
}
function sl(e) {
	return 116 * sd(e / 100) - 16;
}
function su(e) {
	let n = e / 255;
	return n <= .040449936 ? n / 12.92 * 100 : 100 * Math.pow((n + .055) / 1.055, 2.4);
}
function sp(e) {
	var n;
	let t = e / 100;
	return (n = Math.round(255 * (t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055))) < 0 ? 0 : n > 255 ? 255 : n;
}
function sd(e) {
	return e > 216 / 24389 ? Math.pow(e, 1 / 3) : (24389 / 27 * e + 16) / 116;
}
var sh = class e {
	static make(n = sr, t = 200 / Math.PI * sc(50) / 100, a = 50, r = 2, s = !1) {
		var o, i;
		let c = .401288 * n[0] + .650173 * n[1] + -.051461 * n[2], l = -.250268 * n[0] + 1.204414 * n[1] + .045854 * n[2], u = -.002079 * n[0] + .048952 * n[1] + .953127 * n[2], p = .8 + r / 10, d = p >= .9 ? (1 - (o = (p - .9) * 10)) * .59 + .69 * o : (1 - (i = (p - .8) * 10)) * .525 + .59 * i, h = s ? 1 : p * (1 - 1 / 3.6 * Math.exp((-t - 42) / 92)), m = [
			100 / c * (h = h > 1 ? 1 : h < 0 ? 0 : h) + 1 - h,
			100 / l * h + 1 - h,
			100 / u * h + 1 - h
		], f = 1 / (5 * t + 1), g = f * f * f * f, k = 1 - g, N = g * t + .1 * k * k * Math.cbrt(5 * t), y = sc(a) / n[1], b = 1.48 + Math.sqrt(y), v = .725 / Math.pow(y, .2), x = [
			Math.pow(N * m[0] * c / 100, .42),
			Math.pow(N * m[1] * l / 100, .42),
			Math.pow(N * m[2] * u / 100, .42)
		], w = [
			400 * x[0] / (x[0] + 27.13),
			400 * x[1] / (x[1] + 27.13),
			400 * x[2] / (x[2] + 27.13)
		];
		return new e(y, (2 * w[0] + w[1] + .05 * w[2]) * v, v, v, d, p, m, N, Math.pow(N, .25), b);
	}
	constructor(e, n, t, a, r, s, o, i, c, l) {
		this.n = e, this.aw = n, this.nbb = t, this.ncb = a, this.c = r, this.nc = s, this.rgbD = o, this.fl = i, this.fLRoot = c, this.z = l;
	}
};
sh.DEFAULT = sh.make();
var sm = class e {
	constructor(e, n, t, a, r, s, o, i, c) {
		this.hue = e, this.chroma = n, this.j = t, this.q = a, this.m = r, this.s = s, this.jstar = o, this.astar = i, this.bstar = c;
	}
	distance(e) {
		let n = this.jstar - e.jstar, t = this.astar - e.astar, a = this.bstar - e.bstar;
		return 1.41 * Math.pow(Math.sqrt(n * n + t * t + a * a), .63);
	}
	static fromInt(n) {
		return e.fromIntInViewingConditions(n, sh.DEFAULT);
	}
	static fromIntInViewingConditions(n, t) {
		let a = su((16711680 & n) >> 16), r = su((65280 & n) >> 8), s = su(255 & n), o = .41233895 * a + .35762064 * r + .18051042 * s, i = .2126 * a + .7152 * r + .0722 * s, c = .01932141 * a + .11916382 * r + .95034478 * s, l = t.rgbD[0] * (.401288 * o + .650173 * i - .051461 * c), u = t.rgbD[1] * (-.250268 * o + 1.204414 * i + .045854 * c), p = t.rgbD[2] * (-.002079 * o + .048952 * i + .953127 * c), d = Math.pow(t.fl * Math.abs(l) / 100, .42), h = Math.pow(t.fl * Math.abs(u) / 100, .42), m = Math.pow(t.fl * Math.abs(p) / 100, .42), f = 400 * r8(l) * d / (d + 27.13), g = 400 * r8(u) * h / (h + 27.13), k = 400 * r8(p) * m / (m + 27.13), N = (11 * f + -12 * g + k) / 11, y = (f + g - 2 * k) / 9, b = 180 * Math.atan2(y, N) / Math.PI, v = b < 0 ? b + 360 : b >= 360 ? b - 360 : b, x = v * Math.PI / 180, w = 100 * Math.pow((40 * f + 20 * g + k) / 20 * t.nbb / t.aw, t.c * t.z), C = 4 / t.c * Math.sqrt(w / 100) * (t.aw + 4) * t.fLRoot, M = Math.pow(5e4 / 13 * (.25 * (Math.cos((v < 20.14 ? v + 360 : v) * Math.PI / 180 + 2) + 3.8)) * t.nc * t.ncb * Math.sqrt(N * N + y * y) / ((20 * f + 20 * g + 21 * k) / 20 + .305), .9) * Math.pow(1.64 - Math.pow(.29, t.n), .73), S = M * Math.sqrt(w / 100), P = S * t.fLRoot, A = 50 * Math.sqrt(M * t.c / (t.aw + 4)), _ = 1 / .0228 * Math.log(1 + .0228 * P);
		return new e(v, S, w, C, P, A, 1.7000000000000002 * w / (1 + .007 * w), _ * Math.cos(x), _ * Math.sin(x));
	}
	static fromJch(n, t, a) {
		return e.fromJchInViewingConditions(n, t, a, sh.DEFAULT);
	}
	static fromJchInViewingConditions(n, t, a, r) {
		let s = 4 / r.c * Math.sqrt(n / 100) * (r.aw + 4) * r.fLRoot, o = t * r.fLRoot, i = 50 * Math.sqrt(t / Math.sqrt(n / 100) * r.c / (r.aw + 4)), c = a * Math.PI / 180, l = 1 / .0228 * Math.log(1 + .0228 * o);
		return new e(a, t, n, s, o, i, 1.7000000000000002 * n / (1 + .007 * n), l * Math.cos(c), l * Math.sin(c));
	}
	static fromUcs(n, t, a) {
		return e.fromUcsInViewingConditions(n, t, a, sh.DEFAULT);
	}
	static fromUcsInViewingConditions(n, t, a, r) {
		let s = (Math.exp(.0228 * Math.sqrt(t * t + a * a)) - 1) / .0228 / r.fLRoot, o = 180 / Math.PI * Math.atan2(a, t);
		return o < 0 && (o += 360), e.fromJchInViewingConditions(n / (1 - (n - 100) * .007), s, o, r);
	}
	toInt() {
		return this.viewed(sh.DEFAULT);
	}
	viewed(e) {
		let n = Math.pow((0 === this.chroma || 0 === this.j ? 0 : this.chroma / Math.sqrt(this.j / 100)) / Math.pow(1.64 - Math.pow(.29, e.n), .73), 1 / .9), t = this.hue * Math.PI / 180, a = .25 * (Math.cos(t + 2) + 3.8), r = e.aw * Math.pow(this.j / 100, 1 / e.c / e.z), s = 5e4 / 13 * a * e.nc * e.ncb, o = r / e.nbb, i = Math.sin(t), c = Math.cos(t), l = 23 * (o + .305) * n / (23 * s + 11 * n * c + 108 * n * i), u = l * c, p = l * i, d = (460 * o + 451 * u + 288 * p) / 1403, h = (460 * o - 891 * u - 261 * p) / 1403, m = (460 * o - 220 * u - 6300 * p) / 1403, f = Math.max(0, 27.13 * Math.abs(d) / (400 - Math.abs(d))), g = r8(d) * (100 / e.fl) * Math.pow(f, 1 / .42), k = Math.max(0, 27.13 * Math.abs(h) / (400 - Math.abs(h))), N = r8(h) * (100 / e.fl) * Math.pow(k, 1 / .42), y = Math.max(0, 27.13 * Math.abs(m) / (400 - Math.abs(m))), b = r8(m) * (100 / e.fl) * Math.pow(y, 1 / .42), v = g / e.rgbD[0], x = N / e.rgbD[1], w = b / e.rgbD[2];
		return function(e, n, t) {
			let a = sa[0][0] * e + sa[0][1] * n + sa[0][2] * t, r = sa[1][0] * e + sa[1][1] * n + sa[1][2] * t, s = sa[2][0] * e + sa[2][1] * n + sa[2][2] * t, o = sp(a);
			return ss(o, sp(r), sp(s));
		}(1.86206786 * v - 1.01125463 * x + .14918677 * w, .38752654 * v + .62144744 * x - .00897398 * w, -.0158415 * v - .03412294 * x + 1.04996444 * w);
	}
	static fromXyzInViewingConditions(n, t, a, r) {
		let s = r.rgbD[0] * (.401288 * n + .650173 * t - .051461 * a), o = r.rgbD[1] * (-.250268 * n + 1.204414 * t + .045854 * a), i = r.rgbD[2] * (-.002079 * n + .048952 * t + .953127 * a), c = Math.pow(r.fl * Math.abs(s) / 100, .42), l = Math.pow(r.fl * Math.abs(o) / 100, .42), u = Math.pow(r.fl * Math.abs(i) / 100, .42), p = 400 * r8(s) * c / (c + 27.13), d = 400 * r8(o) * l / (l + 27.13), h = 400 * r8(i) * u / (u + 27.13), m = (11 * p + -12 * d + h) / 11, f = (p + d - 2 * h) / 9, g = 180 * Math.atan2(f, m) / Math.PI, k = g < 0 ? g + 360 : g >= 360 ? g - 360 : g, N = k * Math.PI / 180, y = 100 * Math.pow((40 * p + 20 * d + h) / 20 * r.nbb / r.aw, r.c * r.z), b = 4 / r.c * Math.sqrt(y / 100) * (r.aw + 4) * r.fLRoot, v = Math.pow(5e4 / 13 * (1 / 4 * (Math.cos((k < 20.14 ? k + 360 : k) * Math.PI / 180 + 2) + 3.8)) * r.nc * r.ncb * Math.sqrt(m * m + f * f) / ((20 * p + 20 * d + 21 * h) / 20 + .305), .9) * Math.pow(1.64 - Math.pow(.29, r.n), .73), x = v * Math.sqrt(y / 100), w = x * r.fLRoot, C = 50 * Math.sqrt(v * r.c / (r.aw + 4)), M = Math.log(1 + .0228 * w) / .0228;
		return new e(k, x, y, b, w, C, 1.7000000000000002 * y / (1 + .007 * y), M * Math.cos(N), M * Math.sin(N));
	}
	xyzInViewingConditions(e) {
		let n = Math.pow((0 === this.chroma || 0 === this.j ? 0 : this.chroma / Math.sqrt(this.j / 100)) / Math.pow(1.64 - Math.pow(.29, e.n), .73), 1 / .9), t = this.hue * Math.PI / 180, a = .25 * (Math.cos(t + 2) + 3.8), r = e.aw * Math.pow(this.j / 100, 1 / e.c / e.z), s = 5e4 / 13 * a * e.nc * e.ncb, o = r / e.nbb, i = Math.sin(t), c = Math.cos(t), l = 23 * (o + .305) * n / (23 * s + 11 * n * c + 108 * n * i), u = l * c, p = l * i, d = (460 * o + 451 * u + 288 * p) / 1403, h = (460 * o - 891 * u - 261 * p) / 1403, m = (460 * o - 220 * u - 6300 * p) / 1403, f = Math.max(0, 27.13 * Math.abs(d) / (400 - Math.abs(d))), g = r8(d) * (100 / e.fl) * Math.pow(f, 1 / .42), k = Math.max(0, 27.13 * Math.abs(h) / (400 - Math.abs(h))), N = r8(h) * (100 / e.fl) * Math.pow(k, 1 / .42), y = Math.max(0, 27.13 * Math.abs(m) / (400 - Math.abs(m))), b = r8(m) * (100 / e.fl) * Math.pow(y, 1 / .42), v = g / e.rgbD[0], x = N / e.rgbD[1], w = b / e.rgbD[2];
		return [
			1.86206786 * v - 1.01125463 * x + .14918677 * w,
			.38752654 * v + .62144744 * x - .00897398 * w,
			-.0158415 * v - .03412294 * x + 1.04996444 * w
		];
	}
}, sf = class e {
	static sanitizeRadians(e) {
		return (e + 8 * Math.PI) % (2 * Math.PI);
	}
	static trueDelinearized(e) {
		let n = e / 100;
		return 255 * (n <= .0031308 ? 12.92 * n : 1.055 * Math.pow(n, 1 / 2.4) - .055);
	}
	static chromaticAdaptation(e) {
		let n = Math.pow(Math.abs(e), .42);
		return 400 * r8(e) * n / (n + 27.13);
	}
	static hueOf(n) {
		let t = sn(n, e.SCALED_DISCOUNT_FROM_LINRGB), a = e.chromaticAdaptation(t[0]), r = e.chromaticAdaptation(t[1]), s = e.chromaticAdaptation(t[2]);
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
		], r = a, s = 0, o = 0, i = !1, c = !0;
		for (let l = 0; l < 12; l++) {
			let u = e.nthVertex(n, l);
			if (u[0] < 0) continue;
			let p = e.hueOf(u);
			if (!i) {
				a = u, r = u, s = p, o = p, i = !0;
				continue;
			}
			(c || e.areInCyclicOrder(s, p, o)) && (c = !1, e.areInCyclicOrder(s, t, p) ? (r = u, o = p) : (a = u, s = p));
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
			for (let c = 0; c < 8; c++) if (1 >= Math.abs(i - a)) break;
			else {
				let c = Math.floor((a + i) / 2), l = e.CRITICAL_PLANES[c], u = e.setCoordinate(r, l, o, n), p = e.hueOf(u);
				e.areInCyclicOrder(s, t, p) ? (o = u, i = c) : (r = u, s = p, a = c);
			}
		}
		return e.midpoint(r, o);
	}
	static inverseChromaticAdaptation(e) {
		let n = Math.abs(e), t = Math.max(0, 27.13 * n / (400 - n));
		return r8(e) * Math.pow(t, 1 / .42);
	}
	static findResultByJ(n, t, a) {
		let r = 11 * Math.sqrt(a), s = sh.DEFAULT, o = 1 / Math.pow(1.64 - Math.pow(.29, s.n), .73), i = .25 * (Math.cos(n + 2) + 3.8) * (5e4 / 13) * s.nc * s.ncb, c = Math.sin(n), l = Math.cos(n);
		for (let n = 0; n < 5; n++) {
			let u = r / 100, p = Math.pow((0 === t || 0 === r ? 0 : t / Math.sqrt(u)) * o, 1 / .9), d = s.aw * Math.pow(u, 1 / s.c / s.z) / s.nbb, h = 23 * (d + .305) * p / (23 * i + 11 * p * l + 108 * p * c), m = h * l, f = h * c, g = (460 * d + 451 * m + 288 * f) / 1403, k = (460 * d - 891 * m - 261 * f) / 1403, N = (460 * d - 220 * m - 6300 * f) / 1403, y = e.inverseChromaticAdaptation(g), b = sn([
				y,
				e.inverseChromaticAdaptation(k),
				e.inverseChromaticAdaptation(N)
			], e.LINRGB_FROM_SCALED_DISCOUNT);
			if (b[0] < 0 || b[1] < 0 || b[2] < 0) break;
			let v = e.Y_FROM_LINRGB[0], x = e.Y_FROM_LINRGB[1], w = e.Y_FROM_LINRGB[2], C = v * b[0] + x * b[1] + w * b[2];
			if (C <= 0) break;
			if (4 === n || .002 > Math.abs(C - a)) {
				if (b[0] > 100.01 || b[1] > 100.01 || b[2] > 100.01) return 0;
				return so(b);
			}
			r -= (C - a) * r / (2 * C);
		}
		return 0;
	}
	static solveToInt(n, t, a) {
		if (t < 1e-4 || a < 1e-4 || a > 99.9999) {
			let e = sp(sc(a));
			return ss(e, e, e);
		}
		let r = (n = se(n)) / 180 * Math.PI, s = sc(a), o = e.findResultByJ(r, t, s);
		return 0 !== o ? o : so(e.bisectToLimit(s, r));
	}
	static solveToCam(n, t, a) {
		return sm.fromInt(e.solveToInt(n, t, a));
	}
};
sf.SCALED_DISCOUNT_FROM_LINRGB = [
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
], sf.LINRGB_FROM_SCALED_DISCOUNT = [
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
], sf.Y_FROM_LINRGB = [
	.2126,
	.7152,
	.0722
], sf.CRITICAL_PLANES = [
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
var sg = class e {
	static from(n, t, a) {
		return new e(sf.solveToInt(n, t, a));
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
		this.setInternalState(sf.solveToInt(e, this.internalChroma, this.internalTone));
	}
	get chroma() {
		return this.internalChroma;
	}
	set chroma(e) {
		this.setInternalState(sf.solveToInt(this.internalHue, e, this.internalTone));
	}
	get tone() {
		return this.internalTone;
	}
	set tone(e) {
		this.setInternalState(sf.solveToInt(this.internalHue, this.internalChroma, e));
	}
	constructor(e) {
		this.argb = e;
		let n = sm.fromInt(e);
		this.internalHue = n.hue, this.internalChroma = n.chroma, this.internalTone = si(e), this.argb = e;
	}
	setInternalState(e) {
		let n = sm.fromInt(e);
		this.internalHue = n.hue, this.internalChroma = n.chroma, this.internalTone = si(e), this.argb = e;
	}
	inViewingConditions(n) {
		let t = sm.fromInt(this.toInt()).xyzInViewingConditions(n), a = sm.fromXyzInViewingConditions(t[0], t[1], t[2], sh.make());
		return e.from(a.hue, a.chroma, sl(t[1]));
	}
}, sk = class e {
	static ratioOfTones(n, t) {
		return n = r9(0, 100, n), t = r9(0, 100, t), e.ratioOfYs(sc(n), sc(t));
	}
	static ratioOfYs(e, n) {
		let t = e > n ? e : n;
		return (t + 5) / ((t === n ? e : n) + 5);
	}
	static lighter(n, t) {
		if (n < 0 || n > 100) return -1;
		let a = sc(n), r = t * (a + 5) - 5, s = e.ratioOfYs(r, a), o = Math.abs(s - t);
		if (s < t && o > .04) return -1;
		let i = sl(r) + .4;
		return i < 0 || i > 100 ? -1 : i;
	}
	static darker(n, t) {
		if (n < 0 || n > 100) return -1;
		let a = sc(n), r = (a + 5) / t - 5, s = e.ratioOfYs(a, r), o = Math.abs(s - t);
		if (s < t && o > .04) return -1;
		let i = sl(r) - .4;
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
}, sN = class e {
	static isDisliked(e) {
		let n = Math.round(e.hue) >= 90 && 111 >= Math.round(e.hue), t = Math.round(e.chroma) > 16, a = 65 > Math.round(e.tone);
		return n && t && a;
	}
	static fixIfDisliked(n) {
		return e.isDisliked(n) ? sg.from(n.hue, n.chroma, 70) : n;
	}
}, sy = class e {
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
			let a = this.toneDeltaPair(n), r = a.roleA, s = a.roleB, o = a.delta, i = a.polarity, c = a.stayTogether, l = this.background(n).getTone(n), u = "nearer" === i || "lighter" === i && !n.isDark || "darker" === i && n.isDark, p = u ? r : s, d = u ? s : r, h = this.name === p.name, m = n.isDark ? 1 : -1, f = p.contrastCurve.get(n.contrastLevel), g = d.contrastCurve.get(n.contrastLevel), k = p.tone(n), N = sk.ratioOfTones(l, k) >= f ? k : e.foregroundTone(l, f), y = d.tone(n), b = sk.ratioOfTones(l, y) >= g ? y : e.foregroundTone(l, g);
			return t && (N = e.foregroundTone(l, f), b = e.foregroundTone(l, g)), (b - N) * m >= o || ((b = r9(0, 100, N + o * m)) - N) * m >= o || (N = r9(0, 100, b - o * m)), 50 <= N && N < 60 ? b = m > 0 ? Math.max(b, (N = 60) + o * m) : Math.min(b, (N = 49) + o * m) : 50 <= b && b < 60 && (b = c ? m > 0 ? Math.max(b, (N = 60) + o * m) : Math.min(b, (N = 49) + o * m) : m > 0 ? 60 : 49), h ? N : b;
		}
		{
			let a = this.tone(n);
			if (null == this.background) return a;
			let r = this.background(n).getTone(n), s = this.contrastCurve.get(n.contrastLevel);
			if (sk.ratioOfTones(r, a) >= s || (a = e.foregroundTone(r, s)), t && (a = e.foregroundTone(r, s)), this.isBackground && 50 <= a && a < 60 && (a = sk.ratioOfTones(49, r) >= s ? 49 : 60), this.secondBackground) {
				let [t, r] = [this.background, this.secondBackground], [o, i] = [t(n).getTone(n), r(n).getTone(n)], [c, l] = [Math.max(o, i), Math.min(o, i)];
				if (sk.ratioOfTones(c, a) >= s && sk.ratioOfTones(l, a) >= s) return a;
				let u = sk.lighter(c, s), p = sk.darker(l, s), d = [];
				return (-1 !== u && d.push(u), -1 !== p && d.push(p), e.tonePrefersLightForeground(o) || e.tonePrefersLightForeground(i)) ? u < 0 ? 100 : u : 1 === d.length ? d[0] : p < 0 ? 0 : p;
			}
			return a;
		}
	}
	static foregroundTone(n, t) {
		let a = sk.lighterUnsafe(n, t), r = sk.darkerUnsafe(n, t), s = sk.ratioOfTones(a, n), o = sk.ratioOfTones(r, n);
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
}, sb = class e {
	static fromInt(n) {
		let t = sg.fromInt(n);
		return e.fromHct(t);
	}
	static fromHct(n) {
		return new e(n.hue, n.chroma, n);
	}
	static fromHueAndChroma(n, t) {
		let a = new sv(n, t).create();
		return new e(n, t, a);
	}
	constructor(e, n, t) {
		this.hue = e, this.chroma = n, this.keyColor = t, this.cache = /* @__PURE__ */ new Map();
	}
	tone(e) {
		let n = this.cache.get(e);
		return void 0 === n && (n = sg.from(this.hue, this.chroma, e).toInt(), this.cache.set(e, n)), n;
	}
	getHct(e) {
		return sg.fromInt(this.tone(e));
	}
}, sv = class {
	constructor(e, n) {
		this.hue = e, this.requestedChroma = n, this.chromaCache = /* @__PURE__ */ new Map(), this.maxChromaValue = 200;
	}
	create() {
		let e = 0, n = 100;
		for (; e < n;) {
			let t = Math.floor((e + n) / 2), a = this.maxChroma(t) < this.maxChroma(t + 1);
			if (this.maxChroma(t) >= this.requestedChroma - .01) if (Math.abs(e - 50) < Math.abs(n - 50)) n = t;
			else {
				if (e === t) return sg.from(this.hue, this.requestedChroma, e);
				e = t;
			}
			else a ? e = t + 1 : n = t;
		}
		return sg.from(this.hue, this.requestedChroma, e);
	}
	maxChroma(e) {
		if (this.chromaCache.has(e)) return this.chromaCache.get(e);
		let n = sg.from(this.hue, this.maxChromaValue, e).chroma;
		return this.chromaCache.set(e, n), n;
	}
}, sx = class {
	constructor(e, n, t, a) {
		this.low = e, this.normal = n, this.medium = t, this.high = a;
	}
	get(e) {
		var n, t, a, r, s, o, i, c, l;
		return e <= -1 ? this.low : e < 0 ? (n = this.low, t = this.normal, (1 - (a = (e - -1) / 1)) * n + a * t) : e < .5 ? (r = this.normal, s = this.medium, (1 - (o = (e - 0) / .5)) * r + o * s) : e < 1 ? (i = this.medium, c = this.high, (1 - (l = (e - .5) / .5)) * i + l * c) : this.high;
	}
}, sw = class {
	constructor(e, n, t, a, r) {
		this.roleA = e, this.roleB = n, this.delta = t, this.polarity = a, this.stayTogether = r;
	}
};
function sC(e) {
	return e.variant === e2.FIDELITY || e.variant === e2.CONTENT;
}
function sM(e) {
	return e.variant === e2.MONOCHROME;
}
(eQ = e2 || (e2 = {}))[eQ.MONOCHROME = 0] = "MONOCHROME", eQ[eQ.NEUTRAL = 1] = "NEUTRAL", eQ[eQ.TONAL_SPOT = 2] = "TONAL_SPOT", eQ[eQ.VIBRANT = 3] = "VIBRANT", eQ[eQ.EXPRESSIVE = 4] = "EXPRESSIVE", eQ[eQ.FIDELITY = 5] = "FIDELITY", eQ[eQ.CONTENT = 6] = "CONTENT", eQ[eQ.RAINBOW = 7] = "RAINBOW", eQ[eQ.FRUIT_SALAD = 8] = "FRUIT_SALAD";
var sS = class e {
	static highestSurface(n) {
		return n.isDark ? e.surfaceBright : e.surfaceDim;
	}
};
sS.contentAccentToneDelta = 15, sS.primaryPaletteKeyColor = sy.fromPalette({
	name: "primary_palette_key_color",
	palette: (e) => e.primaryPalette,
	tone: (e) => e.primaryPalette.keyColor.tone
}), sS.secondaryPaletteKeyColor = sy.fromPalette({
	name: "secondary_palette_key_color",
	palette: (e) => e.secondaryPalette,
	tone: (e) => e.secondaryPalette.keyColor.tone
}), sS.tertiaryPaletteKeyColor = sy.fromPalette({
	name: "tertiary_palette_key_color",
	palette: (e) => e.tertiaryPalette,
	tone: (e) => e.tertiaryPalette.keyColor.tone
}), sS.neutralPaletteKeyColor = sy.fromPalette({
	name: "neutral_palette_key_color",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.neutralPalette.keyColor.tone
}), sS.neutralVariantPaletteKeyColor = sy.fromPalette({
	name: "neutral_variant_palette_key_color",
	palette: (e) => e.neutralVariantPalette,
	tone: (e) => e.neutralVariantPalette.keyColor.tone
}), sS.background = sy.fromPalette({
	name: "background",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? 6 : 98,
	isBackground: !0
}), sS.onBackground = sy.fromPalette({
	name: "on_background",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? 90 : 10,
	background: (e) => sS.background,
	contrastCurve: new sx(3, 3, 4.5, 7)
}), sS.surface = sy.fromPalette({
	name: "surface",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? 6 : 98,
	isBackground: !0
}), sS.surfaceDim = sy.fromPalette({
	name: "surface_dim",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? 6 : new sx(87, 87, 80, 75).get(e.contrastLevel),
	isBackground: !0
}), sS.surfaceBright = sy.fromPalette({
	name: "surface_bright",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? new sx(24, 24, 29, 34).get(e.contrastLevel) : 98,
	isBackground: !0
}), sS.surfaceContainerLowest = sy.fromPalette({
	name: "surface_container_lowest",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? new sx(4, 4, 2, 0).get(e.contrastLevel) : 100,
	isBackground: !0
}), sS.surfaceContainerLow = sy.fromPalette({
	name: "surface_container_low",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? new sx(10, 10, 11, 12).get(e.contrastLevel) : new sx(96, 96, 96, 95).get(e.contrastLevel),
	isBackground: !0
}), sS.surfaceContainer = sy.fromPalette({
	name: "surface_container",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? new sx(12, 12, 16, 20).get(e.contrastLevel) : new sx(94, 94, 92, 90).get(e.contrastLevel),
	isBackground: !0
}), sS.surfaceContainerHigh = sy.fromPalette({
	name: "surface_container_high",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? new sx(17, 17, 21, 25).get(e.contrastLevel) : new sx(92, 92, 88, 85).get(e.contrastLevel),
	isBackground: !0
}), sS.surfaceContainerHighest = sy.fromPalette({
	name: "surface_container_highest",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? new sx(22, 22, 26, 30).get(e.contrastLevel) : new sx(90, 90, 84, 80).get(e.contrastLevel),
	isBackground: !0
}), sS.onSurface = sy.fromPalette({
	name: "on_surface",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? 90 : 10,
	background: (e) => sS.highestSurface(e),
	contrastCurve: new sx(4.5, 7, 11, 21)
}), sS.surfaceVariant = sy.fromPalette({
	name: "surface_variant",
	palette: (e) => e.neutralVariantPalette,
	tone: (e) => e.isDark ? 30 : 90,
	isBackground: !0
}), sS.onSurfaceVariant = sy.fromPalette({
	name: "on_surface_variant",
	palette: (e) => e.neutralVariantPalette,
	tone: (e) => e.isDark ? 80 : 30,
	background: (e) => sS.highestSurface(e),
	contrastCurve: new sx(3, 4.5, 7, 11)
}), sS.inverseSurface = sy.fromPalette({
	name: "inverse_surface",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? 90 : 20
}), sS.inverseOnSurface = sy.fromPalette({
	name: "inverse_on_surface",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? 20 : 95,
	background: (e) => sS.inverseSurface,
	contrastCurve: new sx(4.5, 7, 11, 21)
}), sS.outline = sy.fromPalette({
	name: "outline",
	palette: (e) => e.neutralVariantPalette,
	tone: (e) => e.isDark ? 60 : 50,
	background: (e) => sS.highestSurface(e),
	contrastCurve: new sx(1.5, 3, 4.5, 7)
}), sS.outlineVariant = sy.fromPalette({
	name: "outline_variant",
	palette: (e) => e.neutralVariantPalette,
	tone: (e) => e.isDark ? 30 : 80,
	background: (e) => sS.highestSurface(e),
	contrastCurve: new sx(1, 1, 3, 4.5)
}), sS.shadow = sy.fromPalette({
	name: "shadow",
	palette: (e) => e.neutralPalette,
	tone: (e) => 0
}), sS.scrim = sy.fromPalette({
	name: "scrim",
	palette: (e) => e.neutralPalette,
	tone: (e) => 0
}), sS.surfaceTint = sy.fromPalette({
	name: "surface_tint",
	palette: (e) => e.primaryPalette,
	tone: (e) => e.isDark ? 80 : 40,
	isBackground: !0
}), sS.primary = sy.fromPalette({
	name: "primary",
	palette: (e) => e.primaryPalette,
	tone: (e) => sM(e) ? 100 * !!e.isDark : e.isDark ? 80 : 40,
	isBackground: !0,
	background: (e) => sS.highestSurface(e),
	contrastCurve: new sx(3, 4.5, 7, 7),
	toneDeltaPair: (e) => new sw(sS.primaryContainer, sS.primary, 10, "nearer", !1)
}), sS.onPrimary = sy.fromPalette({
	name: "on_primary",
	palette: (e) => e.primaryPalette,
	tone: (e) => sM(e) ? e.isDark ? 10 : 90 : e.isDark ? 20 : 100,
	background: (e) => sS.primary,
	contrastCurve: new sx(4.5, 7, 11, 21)
}), sS.primaryContainer = sy.fromPalette({
	name: "primary_container",
	palette: (e) => e.primaryPalette,
	tone: (e) => sC(e) ? e.sourceColorHct.tone : sM(e) ? e.isDark ? 85 : 25 : e.isDark ? 30 : 90,
	isBackground: !0,
	background: (e) => sS.highestSurface(e),
	contrastCurve: new sx(1, 1, 3, 4.5),
	toneDeltaPair: (e) => new sw(sS.primaryContainer, sS.primary, 10, "nearer", !1)
}), sS.onPrimaryContainer = sy.fromPalette({
	name: "on_primary_container",
	palette: (e) => e.primaryPalette,
	tone: (e) => sC(e) ? sy.foregroundTone(sS.primaryContainer.tone(e), 4.5) : sM(e) ? 100 * !e.isDark : e.isDark ? 90 : 30,
	background: (e) => sS.primaryContainer,
	contrastCurve: new sx(3, 4.5, 7, 11)
}), sS.inversePrimary = sy.fromPalette({
	name: "inverse_primary",
	palette: (e) => e.primaryPalette,
	tone: (e) => e.isDark ? 40 : 80,
	background: (e) => sS.inverseSurface,
	contrastCurve: new sx(3, 4.5, 7, 7)
}), sS.secondary = sy.fromPalette({
	name: "secondary",
	palette: (e) => e.secondaryPalette,
	tone: (e) => e.isDark ? 80 : 40,
	isBackground: !0,
	background: (e) => sS.highestSurface(e),
	contrastCurve: new sx(3, 4.5, 7, 7),
	toneDeltaPair: (e) => new sw(sS.secondaryContainer, sS.secondary, 10, "nearer", !1)
}), sS.onSecondary = sy.fromPalette({
	name: "on_secondary",
	palette: (e) => e.secondaryPalette,
	tone: (e) => sM(e) ? e.isDark ? 10 : 100 : e.isDark ? 20 : 100,
	background: (e) => sS.secondary,
	contrastCurve: new sx(4.5, 7, 11, 21)
}), sS.secondaryContainer = sy.fromPalette({
	name: "secondary_container",
	palette: (e) => e.secondaryPalette,
	tone: (e) => {
		let n = e.isDark ? 30 : 90;
		return sM(e) ? e.isDark ? 30 : 85 : sC(e) ? function(e, n, t, a) {
			let r = t, s = sg.from(e, n, t);
			if (s.chroma < n) {
				let t = s.chroma;
				for (; s.chroma < n;) {
					r += a ? -1 : 1;
					let o = sg.from(e, n, r);
					if (t > o.chroma || .4 > Math.abs(o.chroma - n)) break;
					Math.abs(o.chroma - n) < Math.abs(s.chroma - n) && (s = o), t = Math.max(t, o.chroma);
				}
			}
			return r;
		}(e.secondaryPalette.hue, e.secondaryPalette.chroma, n, !e.isDark) : n;
	},
	isBackground: !0,
	background: (e) => sS.highestSurface(e),
	contrastCurve: new sx(1, 1, 3, 4.5),
	toneDeltaPair: (e) => new sw(sS.secondaryContainer, sS.secondary, 10, "nearer", !1)
}), sS.onSecondaryContainer = sy.fromPalette({
	name: "on_secondary_container",
	palette: (e) => e.secondaryPalette,
	tone: (e) => sM(e) ? e.isDark ? 90 : 10 : sC(e) ? sy.foregroundTone(sS.secondaryContainer.tone(e), 4.5) : e.isDark ? 90 : 30,
	background: (e) => sS.secondaryContainer,
	contrastCurve: new sx(3, 4.5, 7, 11)
}), sS.tertiary = sy.fromPalette({
	name: "tertiary",
	palette: (e) => e.tertiaryPalette,
	tone: (e) => sM(e) ? e.isDark ? 90 : 25 : e.isDark ? 80 : 40,
	isBackground: !0,
	background: (e) => sS.highestSurface(e),
	contrastCurve: new sx(3, 4.5, 7, 7),
	toneDeltaPair: (e) => new sw(sS.tertiaryContainer, sS.tertiary, 10, "nearer", !1)
}), sS.onTertiary = sy.fromPalette({
	name: "on_tertiary",
	palette: (e) => e.tertiaryPalette,
	tone: (e) => sM(e) ? e.isDark ? 10 : 90 : e.isDark ? 20 : 100,
	background: (e) => sS.tertiary,
	contrastCurve: new sx(4.5, 7, 11, 21)
}), sS.tertiaryContainer = sy.fromPalette({
	name: "tertiary_container",
	palette: (e) => e.tertiaryPalette,
	tone: (e) => {
		if (sM(e)) return e.isDark ? 60 : 49;
		if (!sC(e)) return e.isDark ? 30 : 90;
		let n = e.tertiaryPalette.getHct(e.sourceColorHct.tone);
		return sN.fixIfDisliked(n).tone;
	},
	isBackground: !0,
	background: (e) => sS.highestSurface(e),
	contrastCurve: new sx(1, 1, 3, 4.5),
	toneDeltaPair: (e) => new sw(sS.tertiaryContainer, sS.tertiary, 10, "nearer", !1)
}), sS.onTertiaryContainer = sy.fromPalette({
	name: "on_tertiary_container",
	palette: (e) => e.tertiaryPalette,
	tone: (e) => sM(e) ? 100 * !e.isDark : sC(e) ? sy.foregroundTone(sS.tertiaryContainer.tone(e), 4.5) : e.isDark ? 90 : 30,
	background: (e) => sS.tertiaryContainer,
	contrastCurve: new sx(3, 4.5, 7, 11)
}), sS.error = sy.fromPalette({
	name: "error",
	palette: (e) => e.errorPalette,
	tone: (e) => e.isDark ? 80 : 40,
	isBackground: !0,
	background: (e) => sS.highestSurface(e),
	contrastCurve: new sx(3, 4.5, 7, 7),
	toneDeltaPair: (e) => new sw(sS.errorContainer, sS.error, 10, "nearer", !1)
}), sS.onError = sy.fromPalette({
	name: "on_error",
	palette: (e) => e.errorPalette,
	tone: (e) => e.isDark ? 20 : 100,
	background: (e) => sS.error,
	contrastCurve: new sx(4.5, 7, 11, 21)
}), sS.errorContainer = sy.fromPalette({
	name: "error_container",
	palette: (e) => e.errorPalette,
	tone: (e) => e.isDark ? 30 : 90,
	isBackground: !0,
	background: (e) => sS.highestSurface(e),
	contrastCurve: new sx(1, 1, 3, 4.5),
	toneDeltaPair: (e) => new sw(sS.errorContainer, sS.error, 10, "nearer", !1)
}), sS.onErrorContainer = sy.fromPalette({
	name: "on_error_container",
	palette: (e) => e.errorPalette,
	tone: (e) => sM(e) ? e.isDark ? 90 : 10 : e.isDark ? 90 : 30,
	background: (e) => sS.errorContainer,
	contrastCurve: new sx(3, 4.5, 7, 11)
}), sS.primaryFixed = sy.fromPalette({
	name: "primary_fixed",
	palette: (e) => e.primaryPalette,
	tone: (e) => sM(e) ? 40 : 90,
	isBackground: !0,
	background: (e) => sS.highestSurface(e),
	contrastCurve: new sx(1, 1, 3, 4.5),
	toneDeltaPair: (e) => new sw(sS.primaryFixed, sS.primaryFixedDim, 10, "lighter", !0)
}), sS.primaryFixedDim = sy.fromPalette({
	name: "primary_fixed_dim",
	palette: (e) => e.primaryPalette,
	tone: (e) => sM(e) ? 30 : 80,
	isBackground: !0,
	background: (e) => sS.highestSurface(e),
	contrastCurve: new sx(1, 1, 3, 4.5),
	toneDeltaPair: (e) => new sw(sS.primaryFixed, sS.primaryFixedDim, 10, "lighter", !0)
}), sS.onPrimaryFixed = sy.fromPalette({
	name: "on_primary_fixed",
	palette: (e) => e.primaryPalette,
	tone: (e) => sM(e) ? 100 : 10,
	background: (e) => sS.primaryFixedDim,
	secondBackground: (e) => sS.primaryFixed,
	contrastCurve: new sx(4.5, 7, 11, 21)
}), sS.onPrimaryFixedVariant = sy.fromPalette({
	name: "on_primary_fixed_variant",
	palette: (e) => e.primaryPalette,
	tone: (e) => sM(e) ? 90 : 30,
	background: (e) => sS.primaryFixedDim,
	secondBackground: (e) => sS.primaryFixed,
	contrastCurve: new sx(3, 4.5, 7, 11)
}), sS.secondaryFixed = sy.fromPalette({
	name: "secondary_fixed",
	palette: (e) => e.secondaryPalette,
	tone: (e) => sM(e) ? 80 : 90,
	isBackground: !0,
	background: (e) => sS.highestSurface(e),
	contrastCurve: new sx(1, 1, 3, 4.5),
	toneDeltaPair: (e) => new sw(sS.secondaryFixed, sS.secondaryFixedDim, 10, "lighter", !0)
}), sS.secondaryFixedDim = sy.fromPalette({
	name: "secondary_fixed_dim",
	palette: (e) => e.secondaryPalette,
	tone: (e) => sM(e) ? 70 : 80,
	isBackground: !0,
	background: (e) => sS.highestSurface(e),
	contrastCurve: new sx(1, 1, 3, 4.5),
	toneDeltaPair: (e) => new sw(sS.secondaryFixed, sS.secondaryFixedDim, 10, "lighter", !0)
}), sS.onSecondaryFixed = sy.fromPalette({
	name: "on_secondary_fixed",
	palette: (e) => e.secondaryPalette,
	tone: (e) => 10,
	background: (e) => sS.secondaryFixedDim,
	secondBackground: (e) => sS.secondaryFixed,
	contrastCurve: new sx(4.5, 7, 11, 21)
}), sS.onSecondaryFixedVariant = sy.fromPalette({
	name: "on_secondary_fixed_variant",
	palette: (e) => e.secondaryPalette,
	tone: (e) => sM(e) ? 25 : 30,
	background: (e) => sS.secondaryFixedDim,
	secondBackground: (e) => sS.secondaryFixed,
	contrastCurve: new sx(3, 4.5, 7, 11)
}), sS.tertiaryFixed = sy.fromPalette({
	name: "tertiary_fixed",
	palette: (e) => e.tertiaryPalette,
	tone: (e) => sM(e) ? 40 : 90,
	isBackground: !0,
	background: (e) => sS.highestSurface(e),
	contrastCurve: new sx(1, 1, 3, 4.5),
	toneDeltaPair: (e) => new sw(sS.tertiaryFixed, sS.tertiaryFixedDim, 10, "lighter", !0)
}), sS.tertiaryFixedDim = sy.fromPalette({
	name: "tertiary_fixed_dim",
	palette: (e) => e.tertiaryPalette,
	tone: (e) => sM(e) ? 30 : 80,
	isBackground: !0,
	background: (e) => sS.highestSurface(e),
	contrastCurve: new sx(1, 1, 3, 4.5),
	toneDeltaPair: (e) => new sw(sS.tertiaryFixed, sS.tertiaryFixedDim, 10, "lighter", !0)
}), sS.onTertiaryFixed = sy.fromPalette({
	name: "on_tertiary_fixed",
	palette: (e) => e.tertiaryPalette,
	tone: (e) => sM(e) ? 100 : 10,
	background: (e) => sS.tertiaryFixedDim,
	secondBackground: (e) => sS.tertiaryFixed,
	contrastCurve: new sx(4.5, 7, 11, 21)
}), sS.onTertiaryFixedVariant = sy.fromPalette({
	name: "on_tertiary_fixed_variant",
	palette: (e) => e.tertiaryPalette,
	tone: (e) => sM(e) ? 90 : 30,
	background: (e) => sS.tertiaryFixedDim,
	secondBackground: (e) => sS.tertiaryFixed,
	contrastCurve: new sx(3, 4.5, 7, 11)
});
var sP = class {
	constructor(e) {
		this.sourceColorArgb = e.sourceColorArgb, this.variant = e.variant, this.contrastLevel = e.contrastLevel, this.isDark = e.isDark, this.sourceColorHct = sg.fromInt(e.sourceColorArgb), this.primaryPalette = e.primaryPalette, this.secondaryPalette = e.secondaryPalette, this.tertiaryPalette = e.tertiaryPalette, this.neutralPalette = e.neutralPalette, this.neutralVariantPalette = e.neutralVariantPalette, this.errorPalette = sb.fromHueAndChroma(25, 84);
	}
	static getRotatedHue(e, n, t) {
		let a = e.hue;
		if (n.length !== t.length) throw Error(`mismatch between hue length ${n.length} & rotations ${t.length}`);
		if (1 === t.length) return se(e.hue + t[0]);
		let r = n.length;
		for (let e = 0; e <= r - 2; e++) {
			let r = n[e], s = n[e + 1];
			if (r < a && a < s) return se(a + t[e]);
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
		return this.getArgb(sS.primaryPaletteKeyColor);
	}
	get secondaryPaletteKeyColor() {
		return this.getArgb(sS.secondaryPaletteKeyColor);
	}
	get tertiaryPaletteKeyColor() {
		return this.getArgb(sS.tertiaryPaletteKeyColor);
	}
	get neutralPaletteKeyColor() {
		return this.getArgb(sS.neutralPaletteKeyColor);
	}
	get neutralVariantPaletteKeyColor() {
		return this.getArgb(sS.neutralVariantPaletteKeyColor);
	}
	get background() {
		return this.getArgb(sS.background);
	}
	get onBackground() {
		return this.getArgb(sS.onBackground);
	}
	get surface() {
		return this.getArgb(sS.surface);
	}
	get surfaceDim() {
		return this.getArgb(sS.surfaceDim);
	}
	get surfaceBright() {
		return this.getArgb(sS.surfaceBright);
	}
	get surfaceContainerLowest() {
		return this.getArgb(sS.surfaceContainerLowest);
	}
	get surfaceContainerLow() {
		return this.getArgb(sS.surfaceContainerLow);
	}
	get surfaceContainer() {
		return this.getArgb(sS.surfaceContainer);
	}
	get surfaceContainerHigh() {
		return this.getArgb(sS.surfaceContainerHigh);
	}
	get surfaceContainerHighest() {
		return this.getArgb(sS.surfaceContainerHighest);
	}
	get onSurface() {
		return this.getArgb(sS.onSurface);
	}
	get surfaceVariant() {
		return this.getArgb(sS.surfaceVariant);
	}
	get onSurfaceVariant() {
		return this.getArgb(sS.onSurfaceVariant);
	}
	get inverseSurface() {
		return this.getArgb(sS.inverseSurface);
	}
	get inverseOnSurface() {
		return this.getArgb(sS.inverseOnSurface);
	}
	get outline() {
		return this.getArgb(sS.outline);
	}
	get outlineVariant() {
		return this.getArgb(sS.outlineVariant);
	}
	get shadow() {
		return this.getArgb(sS.shadow);
	}
	get scrim() {
		return this.getArgb(sS.scrim);
	}
	get surfaceTint() {
		return this.getArgb(sS.surfaceTint);
	}
	get primary() {
		return this.getArgb(sS.primary);
	}
	get onPrimary() {
		return this.getArgb(sS.onPrimary);
	}
	get primaryContainer() {
		return this.getArgb(sS.primaryContainer);
	}
	get onPrimaryContainer() {
		return this.getArgb(sS.onPrimaryContainer);
	}
	get inversePrimary() {
		return this.getArgb(sS.inversePrimary);
	}
	get secondary() {
		return this.getArgb(sS.secondary);
	}
	get onSecondary() {
		return this.getArgb(sS.onSecondary);
	}
	get secondaryContainer() {
		return this.getArgb(sS.secondaryContainer);
	}
	get onSecondaryContainer() {
		return this.getArgb(sS.onSecondaryContainer);
	}
	get tertiary() {
		return this.getArgb(sS.tertiary);
	}
	get onTertiary() {
		return this.getArgb(sS.onTertiary);
	}
	get tertiaryContainer() {
		return this.getArgb(sS.tertiaryContainer);
	}
	get onTertiaryContainer() {
		return this.getArgb(sS.onTertiaryContainer);
	}
	get error() {
		return this.getArgb(sS.error);
	}
	get onError() {
		return this.getArgb(sS.onError);
	}
	get errorContainer() {
		return this.getArgb(sS.errorContainer);
	}
	get onErrorContainer() {
		return this.getArgb(sS.onErrorContainer);
	}
	get primaryFixed() {
		return this.getArgb(sS.primaryFixed);
	}
	get primaryFixedDim() {
		return this.getArgb(sS.primaryFixedDim);
	}
	get onPrimaryFixed() {
		return this.getArgb(sS.onPrimaryFixed);
	}
	get onPrimaryFixedVariant() {
		return this.getArgb(sS.onPrimaryFixedVariant);
	}
	get secondaryFixed() {
		return this.getArgb(sS.secondaryFixed);
	}
	get secondaryFixedDim() {
		return this.getArgb(sS.secondaryFixedDim);
	}
	get onSecondaryFixed() {
		return this.getArgb(sS.onSecondaryFixed);
	}
	get onSecondaryFixedVariant() {
		return this.getArgb(sS.onSecondaryFixedVariant);
	}
	get tertiaryFixed() {
		return this.getArgb(sS.tertiaryFixed);
	}
	get tertiaryFixedDim() {
		return this.getArgb(sS.tertiaryFixedDim);
	}
	get onTertiaryFixed() {
		return this.getArgb(sS.onTertiaryFixed);
	}
	get onTertiaryFixedVariant() {
		return this.getArgb(sS.onTertiaryFixedVariant);
	}
}, sA = class e {
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
		let t = sg.fromInt(e), a = t.hue, r = t.chroma;
		n ? (this.a1 = sb.fromHueAndChroma(a, r), this.a2 = sb.fromHueAndChroma(a, r / 3), this.a3 = sb.fromHueAndChroma(a + 60, r / 2), this.n1 = sb.fromHueAndChroma(a, Math.min(r / 12, 4)), this.n2 = sb.fromHueAndChroma(a, Math.min(r / 6, 8))) : (this.a1 = sb.fromHueAndChroma(a, Math.max(48, r)), this.a2 = sb.fromHueAndChroma(a, 16), this.a3 = sb.fromHueAndChroma(a + 60, 24), this.n1 = sb.fromHueAndChroma(a, 4), this.n2 = sb.fromHueAndChroma(a, 8)), this.error = sb.fromHueAndChroma(25, 84);
	}
}, s_ = class e extends sP {
	constructor(n, t, a) {
		super({
			sourceColorArgb: n.toInt(),
			variant: e2.EXPRESSIVE,
			contrastLevel: a,
			isDark: t,
			primaryPalette: sb.fromHueAndChroma(se(n.hue + 240), 40),
			secondaryPalette: sb.fromHueAndChroma(sP.getRotatedHue(n, e.hues, e.secondaryRotations), 24),
			tertiaryPalette: sb.fromHueAndChroma(sP.getRotatedHue(n, e.hues, e.tertiaryRotations), 32),
			neutralPalette: sb.fromHueAndChroma(n.hue + 15, 8),
			neutralVariantPalette: sb.fromHueAndChroma(n.hue + 15, 12)
		});
	}
};
s_.hues = [
	0,
	21,
	51,
	121,
	151,
	191,
	271,
	321,
	360
], s_.secondaryRotations = [
	45,
	95,
	45,
	20,
	45,
	90,
	45,
	45,
	45
], s_.tertiaryRotations = [
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
var sT = class e extends sP {
	constructor(n, t, a) {
		super({
			sourceColorArgb: n.toInt(),
			variant: e2.VIBRANT,
			contrastLevel: a,
			isDark: t,
			primaryPalette: sb.fromHueAndChroma(n.hue, 200),
			secondaryPalette: sb.fromHueAndChroma(sP.getRotatedHue(n, e.hues, e.secondaryRotations), 24),
			tertiaryPalette: sb.fromHueAndChroma(sP.getRotatedHue(n, e.hues, e.tertiaryRotations), 32),
			neutralPalette: sb.fromHueAndChroma(n.hue, 10),
			neutralVariantPalette: sb.fromHueAndChroma(n.hue, 12)
		});
	}
};
sT.hues = [
	0,
	41,
	61,
	101,
	131,
	181,
	251,
	301,
	360
], sT.secondaryRotations = [
	18,
	15,
	10,
	12,
	15,
	18,
	15,
	12,
	12
], sT.tertiaryRotations = [
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
var sL = {
	desired: 4,
	fallbackColorARGB: 4282549748,
	filter: !0
};
function sR(e, n) {
	return e.score > n.score ? -1 : +(e.score < n.score);
}
var sO = class e {
	constructor() {}
	static score(n, t) {
		let { desired: a, fallbackColorARGB: r, filter: s } = {
			...sL,
			...t
		}, o = [], i = Array(360).fill(0), c = 0;
		for (let [e, t] of n.entries()) {
			let n = sg.fromInt(e);
			o.push(n);
			let a = Math.floor(n.hue);
			i[a] += t, c += t;
		}
		let l = Array(360).fill(0);
		for (let e = 0; e < 360; e++) {
			let n = i[e] / c;
			for (let t = e - 14; t < e + 16; t++) {
				let e = r7(t);
				l[e] += n;
			}
		}
		let u = [];
		for (let n of o) {
			let t = l[r7(Math.round(n.hue))];
			if (s && (n.chroma < e.CUTOFF_CHROMA || t <= e.CUTOFF_EXCITED_PROPORTION)) continue;
			let a = 100 * t * e.WEIGHT_PROPORTION, r = n.chroma < e.TARGET_CHROMA ? e.WEIGHT_CHROMA_BELOW : e.WEIGHT_CHROMA_ABOVE, o = a + (n.chroma - e.TARGET_CHROMA) * r;
			u.push({
				hct: n,
				score: o
			});
		}
		u.sort(sR);
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
function s$(e) {
	let n = 3 === (e = e.replace("#", "")).length, t = 6 === e.length, a = 8 === e.length;
	if (!n && !t && !a) throw Error("unexpected hex " + e);
	let r = 0, s = 0, o = 0;
	return n ? (r = sD(e.slice(0, 1).repeat(2)), s = sD(e.slice(1, 2).repeat(2)), o = sD(e.slice(2, 3).repeat(2))) : t ? (r = sD(e.slice(0, 2)), s = sD(e.slice(2, 4)), o = sD(e.slice(4, 6))) : a && (r = sD(e.slice(2, 4)), s = sD(e.slice(4, 6)), o = sD(e.slice(6, 8))), (-16777216 | (255 & r) << 16 | (255 & s) << 8 | 255 & o) >>> 0;
}
function sD(e) {
	return parseInt(e, 16);
}
sO.TARGET_CHROMA = 48, sO.WEIGHT_PROPORTION = .7, sO.WEIGHT_CHROMA_ABOVE = .3, sO.WEIGHT_CHROMA_BELOW = .1, sO.CUTOFF_CHROMA = 5, sO.CUTOFF_EXCITED_PROPORTION = .01;
var sH = {
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
}, sj = (e) => {
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
}, sI = (e) => ({
	primary: !0,
	secondary: !0,
	tertiary: !0,
	error: !0,
	warning: !0,
	success: !0
})[e], sV = class e {
	static toHEX = (e) => `#${sj(e).map((e) => tH(e.toString(16), 2, "0")).join("")}`;
	static createRoleColorRuleBuilder(e) {
		let n = {}, t = new Proxy({}, { get: (a, r) => "build" == r ? () => n : (a, r) => (n[`${a}${e ? `:${e}` : ""}`] = r, t) });
		return t;
	}
	static createRoleColorSourcePicker() {
		return new Proxy({}, { get: (e, n) => (e) => [n, e] });
	}
	static fromColors = (n) => {
		let { primary: t, secondary: a, tertiary: r, neutral: s, neutralVariant: o, error: i,...c } = n, l = sA.contentFromColors({
			primary: s$(t),
			secondary: a ? s$(a) : void 0,
			tertiary: r ? s$(r) : void 0,
			error: i ? s$(i) : void 0
		});
		return s && (l.n1 = sb.fromHueAndChroma(s$(s), 4)), o && (l.n2 = sb.fromHueAndChroma(s$(o), 8)), new e({
			primary: l.a1,
			secondary: l.a2,
			tertiary: l.a3,
			neutral: l.n1,
			neutralVariant: l.n2,
			error: l.error,
			...td(c, (e) => sb.fromInt(s$(e)))
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
				t[a.split(":")[0]] = sH[s] ? `${String(r)}.${s}` : this.seeds[r]?.tone(s);
				continue;
			}
			n[a] = sH[s] ? `${String(r)}.${s}` : this.seeds[r]?.tone(s);
		}
		return [n, t];
	}
	toDesignTokens(e = {}) {
		let n = this.normalizeRoleRules(e), [t, a] = this.getThemeRoleColors(n), r = {}, s = {};
		for (let e in t) if (r[`${e}`] = {
			_default: tp(t[e]) ? sj(t[e]) : t[e],
			_dark: tp(a[e]) ? sj(a[e]) : a[e]
		}, sI(e) && (s[`${e}`] = rq.mixin({
			bgColor: `sys.${e}`,
			color: `sys.on-${e}`
		}), s[`${e}-container`] = rq.mixin({
			bgColor: `sys.${e}-container`,
			color: `sys.on-${e}-container`
		})), e.startsWith("surface")) {
			if (e.includes("container")) {
				s[`${e}`] = rq.mixin({
					bgColor: `sys.${e}`,
					color: "sys.on-surface"
				});
				continue;
			}
			s[`${e}`] = rq.mixin({
				bgColor: `sys.${e}`,
				color: "sys.on-surface"
			}), s[`on-${e}`] = rq.mixin({
				bgColor: `sys.on-${e}`,
				color: "sys.inverse-on-surface"
			});
		}
		return {
			color: rq.color({
				...td(this.seeds, (e) => Object.keys(sH).reduce((n, t) => Object.assign(n, { [t]: sj(e.tone(parseInt(t))) }), {})),
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
			containerStyle: rq.customMixin("containerStyle", { sys: s })
		};
	}
};
let sB = rq.rounded({
	xs: 4,
	sm: 8,
	md: 12,
	lg: 16,
	xl: 28
}), sF = {
	font: rq.font({
		brand: "-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"",
		plain: "-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"",
		code: "'Lucida Console',Consolas,Monaco,'Andale Mono','Ubuntu Mono',monospace"
	}),
	fontWeight: rq.fontWeight({
		regular: 400,
		medium: 500,
		bold: 700
	}),
	textStyle: rq.customMixin("textStyle", { sys: {
		"display-large": rq.mixin({
			lineHeight: 64,
			fontSize: 57,
			letterSpacing: -.25,
			fontWeight: "regular",
			font: "brand"
		}),
		"display-medium": rq.mixin({
			lineHeight: 52,
			fontSize: 45,
			letterSpacing: 0,
			fontWeight: "regular",
			font: "brand"
		}),
		"display-small": rq.mixin({
			lineHeight: 44,
			fontSize: 36,
			letterSpacing: 0,
			fontWeight: "regular",
			font: "brand"
		}),
		"headline-large": rq.mixin({
			lineHeight: 40,
			fontSize: 32,
			letterSpacing: 0,
			fontWeight: "regular",
			font: "brand"
		}),
		"headline-medium": rq.mixin({
			lineHeight: 36,
			fontSize: 28,
			letterSpacing: 0,
			fontWeight: "regular",
			font: "brand"
		}),
		"headline-small": rq.mixin({
			lineHeight: 32,
			fontSize: 24,
			letterSpacing: 0,
			fontWeight: "regular",
			font: "plain"
		}),
		"title-large": rq.mixin({
			lineHeight: 28,
			fontSize: 22,
			letterSpacing: 0,
			fontWeight: "regular",
			font: "brand"
		}),
		"title-medium": rq.mixin({
			lineHeight: 24,
			fontSize: 16,
			letterSpacing: .15,
			fontWeight: "medium",
			font: "plain"
		}),
		"title-small": rq.mixin({
			lineHeight: 20,
			fontSize: 14,
			letterSpacing: .1,
			fontWeight: "medium",
			font: "plain"
		}),
		"label-large": rq.mixin({
			lineHeight: 20,
			fontSize: 14,
			letterSpacing: .1,
			fontWeight: "medium",
			font: "plain"
		}),
		"label-medium": rq.mixin({
			lineHeight: 16,
			fontSize: 12,
			letterSpacing: .5,
			fontWeight: "medium",
			font: "plain"
		}),
		"label-small": rq.mixin({
			lineHeight: 16,
			fontSize: 11,
			letterSpacing: .5,
			fontWeight: "medium",
			font: "plain"
		}),
		"body-large": rq.mixin({
			lineHeight: 24,
			fontSize: 16,
			letterSpacing: .5,
			fontWeight: "regular",
			font: "plain"
		}),
		"body-medium": rq.mixin({
			lineHeight: 20,
			fontSize: 14,
			letterSpacing: .25,
			fontWeight: "regular",
			font: "plain"
		}),
		"body-small": rq.mixin({
			lineHeight: 16,
			fontSize: 12,
			letterSpacing: .4,
			fontWeight: "regular",
			font: "plain"
		})
	} })
};
var sE = sV.fromColors({
	primary: "#1270f5",
	secondary: "#8a90a5",
	tertiary: "#b58391",
	neutral: "#5e5e5e",
	error: "#d93f23",
	warning: "#e69c00",
	success: "#5ac220"
});
let sW = {
	...sF,
	...r6,
	...r2,
	rounded: sB,
	...sE.toDesignTokens({})
}, sz = r1.create(sW, { varPrefix: "vk" }), sU = eP(() => sz, { name: "Theme" });
var sq = function() {
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
}(), sG = "-ms-", sY = "-moz-", sX = "-webkit-", sK = "comm", sZ = "rule", sJ = "decl", sQ = "@keyframes", s0 = Math.abs, s1 = String.fromCharCode, s2 = Object.assign;
function s4(e, n, t) {
	return e.replace(n, t);
}
function s5(e, n) {
	return e.indexOf(n);
}
function s3(e, n) {
	return 0 | e.charCodeAt(n);
}
function s6(e, n, t) {
	return e.slice(n, t);
}
function s8(e) {
	return e.length;
}
function s9(e, n) {
	return n.push(e), e;
}
var s7 = 1, oe = 1, on = 0, ot = 0, oa = 0, or = "";
function os(e, n, t, a, r, s, o) {
	return {
		value: e,
		root: n,
		parent: t,
		type: a,
		props: r,
		children: s,
		line: s7,
		column: oe,
		length: o,
		return: ""
	};
}
function oo(e, n) {
	return s2(os("", null, null, "", null, null, 0), e, { length: -e.length }, n);
}
function oi() {
	return oa = ot < on ? s3(or, ot++) : 0, oe++, 10 === oa && (oe = 1, s7++), oa;
}
function oc() {
	return s3(or, ot);
}
function ol(e) {
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
function ou(e) {
	return s7 = oe = 1, on = s8(or = e), ot = 0, [];
}
function op(e) {
	var n, t;
	return (n = ot - 1, t = function e(n) {
		for (; oi();) switch (oa) {
			case n: return ot;
			case 34:
			case 39:
				34 !== n && 39 !== n && e(oa);
				break;
			case 40:
				41 === n && e(n);
				break;
			case 92: oi();
		}
		return ot;
	}(91 === e ? e + 2 : 40 === e ? e + 1 : e), s6(or, n, t)).trim();
}
function od(e, n, t, a, r, s, o, i, c, l, u) {
	for (var p = r - 1, d = 0 === r ? s : [""], h = d.length, m = 0, f = 0, g = 0; m < a; ++m) for (var k = 0, N = s6(e, p + 1, p = s0(f = o[m])), y = e; k < h; ++k) (y = (f > 0 ? d[k] + " " + N : s4(N, /&\f/g, d[k])).trim()) && (c[g++] = y);
	return os(e, n, t, 0 === r ? sZ : i, c, l, u);
}
function oh(e, n, t, a) {
	return os(e, n, t, sJ, s6(e, 0, a), s6(e, a + 1, -1), a);
}
function om(e, n) {
	for (var t = "", a = e.length, r = 0; r < a; r++) t += n(e[r], r, e, n) || "";
	return t;
}
function of(e, n, t, a) {
	switch (e.type) {
		case "@layer": if (e.children.length) break;
		case "@import":
		case sJ: return e.return = e.return || e.value;
		case sK: return "";
		case sQ: return e.return = e.value + "{" + om(e.children, a) + "}";
		case sZ: e.value = e.props.join(",");
	}
	return s8(t = om(e.children, a)) ? e.return = e.value + "{" + t + "}" : "";
}
var og = function(e, n, t) {
	for (var a = 0, r = 0; a = r, r = oc(), 38 === a && 12 === r && (n[t] = 1), !ol(r);) oi();
	return s6(or, e, ot);
}, ok = function(e, n) {
	var t = -1, a = 44;
	do
		switch (ol(a)) {
			case 0:
				38 === a && 12 === oc() && (n[t] = 1), e[t] += og(ot - 1, n, t);
				break;
			case 2:
				e[t] += op(a);
				break;
			case 4: if (44 === a) {
				e[++t] = 58 === oc() ? "&\f" : "", n[t] = e[t].length;
				break;
			}
			default: e[t] += s1(a);
		}
	while (a = oi());
	return e;
}, oN = function(e, n) {
	var t;
	return t = ok(ou(e), n), or = "", t;
}, oy = /* @__PURE__ */ new WeakMap(), ob = function(e) {
	if ("rule" === e.type && e.parent && !(e.length < 1)) {
		for (var n = e.value, t = e.parent, a = e.column === t.column && e.line === t.line; "rule" !== t.type;) if (!(t = t.parent)) return;
		if ((1 !== e.props.length || 58 === n.charCodeAt(0) || oy.get(t)) && !a) {
			oy.set(e, !0);
			for (var r = [], s = oN(n, r), o = t.props, i = 0, c = 0; i < s.length; i++) for (var l = 0; l < o.length; l++, c++) e.props[c] = r[i] ? s[i].replace(/&\f/g, o[l]) : o[l] + " " + s[i];
		}
	}
}, ov = function(e) {
	if ("decl" === e.type) {
		var n = e.value;
		108 === n.charCodeAt(0) && 98 === n.charCodeAt(2) && (e.return = "", e.value = "");
	}
}, ox = [function(e, n, t, a) {
	if (e.length > -1 && !e.return) switch (e.type) {
		case sJ:
			e.return = function e(n, t) {
				switch (45 ^ s3(n, 0) ? (((t << 2 ^ s3(n, 0)) << 2 ^ s3(n, 1)) << 2 ^ s3(n, 2)) << 2 ^ s3(n, 3) : 0) {
					case 5103: return sX + "print-" + n + n;
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
					case 3829: return sX + n + n;
					case 5349:
					case 4246:
					case 4810:
					case 6968:
					case 2756: return sX + n + sY + n + sG + n + n;
					case 6828:
					case 4268: return sX + n + sG + n + n;
					case 6165: return sX + n + sG + "flex-" + n + n;
					case 5187: return sX + n + s4(n, /(\w+).+(:[^]+)/, sX + "box-$1$2" + sG + "flex-$1$2") + n;
					case 5443: return sX + n + sG + "flex-item-" + s4(n, /flex-|-self/, "") + n;
					case 4675: return sX + n + sG + "flex-line-pack" + s4(n, /align-content|flex-|-self/, "") + n;
					case 5548: return sX + n + sG + s4(n, "shrink", "negative") + n;
					case 5292: return sX + n + sG + s4(n, "basis", "preferred-size") + n;
					case 6060: return sX + "box-" + s4(n, "-grow", "") + sX + n + sG + s4(n, "grow", "positive") + n;
					case 4554: return sX + s4(n, /([^-])(transform)/g, "$1" + sX + "$2") + n;
					case 6187: return s4(s4(s4(n, /(zoom-|grab)/, sX + "$1"), /(image-set)/, sX + "$1"), n, "") + n;
					case 5495:
					case 3959: return s4(n, /(image-set\([^]*)/, sX + "$1$`$1");
					case 4968: return s4(s4(n, /(.+:)(flex-)?(.*)/, sX + "box-pack:$3" + sG + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + sX + n + n;
					case 4095:
					case 3583:
					case 4068:
					case 2532: return s4(n, /(.+)-inline(.+)/, sX + "$1$2") + n;
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
						if (s8(n) - 1 - t > 6) switch (s3(n, t + 1)) {
							case 109: if (45 !== s3(n, t + 4)) break;
							case 102: return s4(n, /(.+:)(.+)-([^]+)/, "$1" + sX + "$2-$3$1" + sY + (108 == s3(n, t + 3) ? "$3" : "$2-$3")) + n;
							case 115: return ~s5(n, "stretch") ? e(s4(n, "stretch", "fill-available"), t) + n : n;
						}
						break;
					case 4949: if (115 !== s3(n, t + 1)) break;
					case 6444:
						switch (s3(n, s8(n) - 3 - (~s5(n, "!important") && 10))) {
							case 107: return s4(n, ":", ":" + sX) + n;
							case 101: return s4(n, /(.+:)([^;!]+)(;|!.+)?/, "$1" + sX + (45 === s3(n, 14) ? "inline-" : "") + "box$3$1" + sX + "$2$3$1" + sG + "$2box$3") + n;
						}
						break;
					case 5936:
						switch (s3(n, t + 11)) {
							case 114: return sX + n + sG + s4(n, /[svh]\w+-[tblr]{2}/, "tb") + n;
							case 108: return sX + n + sG + s4(n, /[svh]\w+-[tblr]{2}/, "tb-rl") + n;
							case 45: return sX + n + sG + s4(n, /[svh]\w+-[tblr]{2}/, "lr") + n;
						}
						return sX + n + sG + n + n;
				}
				return n;
			}(e.value, e.length);
			break;
		case sQ: return om([oo(e, { value: s4(e.value, "@", "@" + sX) })], a);
		case sZ: if (e.length) {
			var r, s;
			return r = e.props, s = function(n) {
				var t;
				switch (t = n, (t = /(::plac\w+|:read-\w+)/.exec(t)) ? t[0] : t) {
					case ":read-only":
					case ":read-write": return om([oo(e, { props: [s4(n, /:(read-\w+)/, ":" + sY + "$1")] })], a);
					case "::placeholder": return om([
						oo(e, { props: [s4(n, /:(plac\w+)/, ":" + sX + "input-$1")] }),
						oo(e, { props: [s4(n, /:(plac\w+)/, ":" + sY + "$1")] }),
						oo(e, { props: [s4(n, /:(plac\w+)/, sG + "input-$1")] })
					], a);
				}
				return "";
			}, r.map(s).join("");
		}
	}
}], ow = function(e) {
	var n, t, a, r, s, o = e.key;
	if ("css" === o) {
		var i = document.querySelectorAll("style[data-emotion]:not([data-s])");
		Array.prototype.forEach.call(i, function(e) {
			-1 !== e.getAttribute("data-emotion").indexOf(" ") && (document.head.appendChild(e), e.setAttribute("data-s", ""));
		});
	}
	var c = e.stylisPlugins || ox, l = {}, u = [];
	r = e.container || document.head, Array.prototype.forEach.call(document.querySelectorAll("style[data-emotion^=\"" + o + " \"]"), function(e) {
		for (var n = e.getAttribute("data-emotion").split(" "), t = 1; t < n.length; t++) l[n[t]] = !0;
		u.push(e);
	});
	var p = (t = (n = [ob, ov].concat(c, [of, (a = function(e) {
		s.insert(e);
	}, function(e) {
		!e.root && (e = e.return) && a(e);
	})])).length, function(e, a, r, s) {
		for (var o = "", i = 0; i < t; i++) o += n[i](e, a, r, s) || "";
		return o;
	}), d = function(e) {
		var n, t;
		return om((t = function e(n, t, a, r, s, o, i, c, l) {
			for (var u, p = 0, d = 0, h = i, m = 0, f = 0, g = 0, k = 1, N = 1, y = 1, b = 0, v = "", x = s, w = o, C = r, M = v; N;) switch (g = b, b = oi()) {
				case 40: if (108 != g && 58 == s3(M, h - 1)) {
					-1 != s5(M += s4(op(b), "&", "&\f"), "&\f") && (y = -1);
					break;
				}
				case 34:
				case 39:
				case 91:
					M += op(b);
					break;
				case 9:
				case 10:
				case 13:
				case 32:
					M += function(e) {
						for (; oa = oc();) if (oa < 33) oi();
						else break;
						return ol(e) > 2 || ol(oa) > 3 ? "" : " ";
					}(g);
					break;
				case 92:
					M += function(e, n) {
						for (var t; --n && oi() && !(oa < 48) && !(oa > 102) && (!(oa > 57) || !(oa < 65)) && (!(oa > 70) || !(oa < 97)););
						return t = ot + (n < 6 && 32 == oc() && 32 == oi()), s6(or, e, t);
					}(ot - 1, 7);
					continue;
				case 47:
					switch (oc()) {
						case 42:
						case 47:
							s9((u = function(e, n) {
								for (; oi();) if (e + oa === 57) break;
								else if (e + oa === 84 && 47 === oc()) break;
								return "/*" + s6(or, n, ot - 1) + "*" + s1(47 === e ? e : oi());
							}(oi(), ot), os(u, t, a, sK, s1(oa), s6(u, 2, -2), 0)), l);
							break;
						default: M += "/";
					}
					break;
				case 123 * k: c[p++] = s8(M) * y;
				case 125 * k:
				case 59:
				case 0:
					switch (b) {
						case 0:
						case 125: N = 0;
						case 59 + d:
							-1 == y && (M = s4(M, /\f/g, "")), f > 0 && s8(M) - h && s9(f > 32 ? oh(M + ";", r, a, h - 1) : oh(s4(M, " ", "") + ";", r, a, h - 2), l);
							break;
						case 59: M += ";";
						default: if (s9(C = od(M, t, a, p, d, s, c, v, x = [], w = [], h), o), 123 === b) if (0 === d) e(M, t, C, C, x, o, h, c, w);
						else switch (99 === m && 110 === s3(M, 3) ? 100 : m) {
							case 100:
							case 108:
							case 109:
							case 115:
								e(n, C, C, r && s9(od(n, C, C, 0, 0, s, c, v, s, x = [], h), w), s, w, h, c, r ? x : w);
								break;
							default: e(M, C, C, C, [""], w, 0, c, w);
						}
					}
					p = d = f = 0, k = y = 1, v = M = "", h = i;
					break;
				case 58: h = 1 + s8(M), f = g;
				default:
					if (k < 1) {
						if (123 == b) --k;
						else if (125 == b && 0 == k++ && 125 == (oa = ot > 0 ? s3(or, --ot) : 0, oe--, 10 === oa && (oe = 1, s7--), oa)) continue;
					}
					switch (M += s1(b), b * k) {
						case 38:
							y = d > 0 ? 1 : (M += "\f", -1);
							break;
						case 44:
							c[p++] = (s8(M) - 1) * y, y = 1;
							break;
						case 64:
							45 === oc() && (M += op(oi())), m = oc(), d = h = s8(v = M += function(e) {
								for (; !ol(oc());) oi();
								return s6(or, e, ot);
							}(ot)), b++;
							break;
						case 45: 45 === g && 2 == s8(M) && (k = 0);
					}
			}
			return o;
		}("", null, null, null, [""], n = ou(n = e), 0, [0], n), or = "", t), p);
	}, h = {
		key: o,
		sheet: new sq({
			key: o,
			container: r,
			nonce: e.nonce,
			speedy: e.speedy,
			prepend: e.prepend,
			insertionPoint: e.insertionPoint
		}),
		nonce: e.nonce,
		inserted: l,
		registered: {},
		insert: function(e, n, t, a) {
			s = t, d(e ? e + "{" + n.styles + "}" : n.styles), a && (h.inserted[n.name] = !0);
		}
	};
	return h.sheet.hydrate(u), h;
}, oC = function(e, n, t) {
	var a = e.key + "-" + n.name;
	!1 === t && void 0 === e.registered[a] && (e.registered[a] = n.styles);
}, oM = function(e, n, t) {
	oC(e, n, t);
	var a = e.key + "-" + n.name;
	if (void 0 === e.inserted[n.name]) {
		var r = n;
		do
			e.insert(n === r ? "." + a : "", r, e.sheet, !0), r = r.next;
		while (void 0 !== r);
	}
};
let oS = eP(() => ow({ key: "css" }), { name: "Cache" }), oP = (e) => (n) => {
	n.serialized && (n.withoutScoping ? e.insert("", n.serialized, e.sheet, !0) : oM(e, n.serialized, n.isStringTag ?? !0));
};
var oA = ej({
	sx: el(),
	component: el().optional().default("div")
}, (e, { slots: n, expose: t }) => {
	let a = sU.use(), r = oS.use(), s = a.unstable_css(r, e.sx ?? {}), o = oP(r);
	Q(() => {
		o({
			serialized: s,
			isStringTag: !0
		});
	});
	let i = ef(null);
	return t({ [ex]: i }), () => G(e.component ?? "div", {
		ref: i,
		class: "0" !== s.name ? `${r.key}-${s.name}` : "",
		children: n
	});
});
function o_(...e) {
	let n, t = "div", a = {}, r = {};
	for (let s of e) {
		if (eA(s)) {
			n = s;
			continue;
		}
		if (tu(s) || T(s)) {
			t = s;
			continue;
		}
		eV(n) && u(s) ? a = s : r = s;
	}
	return n ??= (e, n) => (t) => {
		let a = {};
		for (let n in e) "component" !== n && "sx" !== n && e[n] && (a[`data-${n}`] = e[n]);
		return G(t, {
			...a,
			children: n.slots
		});
	}, (e) => {
		let s = Object.assign(ej({
			...a,
			sx: el().optional(),
			component: el().optional()
		}, (a, r) => {
			let o = sU.use(), i = oS.use(), c = oP(i), l = e_(""), u = o.unstable_css(i, e), p = () => ("0" !== u.name ? `${i.key}-${u.name}${l.value}` : `${l.value}`) + (s.name ? ` ${s.name}` : "");
			if (t.__styled) {
				let e = o.unstable_css(i, a.sx ?? {});
				"0" !== e.name && (l.value = ` ${i.key}-${e.name}`), Q(() => {
					c({
						serialized: u,
						isStringTag: !0
					}), c({
						serialized: e,
						isStringTag: !0
					});
				});
			} else S(() => {
				c({
					serialized: u,
					isStringTag: !0
				});
			});
			let d = n(a, r), h = ef(null);
			return r.expose({ [ex]: h }), () => {
				if (t.__styled) {
					let e = d(t);
					return e ? k(e, {
						component: a.component,
						ref: h,
						class: p()
					}) : null;
				}
				let e = d(oA);
				return e ? k(e, {
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
var oT = ej(({ styles: e }) => {
	let n = sU.use(), t = oS.use(), a = oP(t), r = n.unstable_css(t, tu(e) ? { "&": e } : e);
	return S(() => {
		a({
			serialized: r,
			withoutScoping: !0
		});
	}), () => null;
}, {
	displayName: "GlobalStyle",
	props: ["styles"]
}), oL = ej(() => {
	let e = sU.use().rootCSSVars;
	return () => G(oT, { styles: {
		":host, :root, [data-theme]": e,
		"*, *::after, *::before": { boxSizing: "border-box" },
		html: { fontSize: "10px" },
		a: { color: "inherit" },
		body: { textStyle: "sys.body-medium" }
	} });
}, { displayName: "CSSReset" });
let oR = eP(() => ({ mountPoint: () => document.body }), { name: "OverlaySetting" });
var oO = eP(() => new o$(eN(null), eN(null), () => !1), { name: "Overlay" }), o$ = class {
	children = [];
	constructor(e, n, t) {
		this.triggerRef = e, this.contentRef = n, this.isOpen = t;
	}
	add = (e) => (this.children = [...this.children, e], () => {
		this.children = this.children.filter((n) => n !== e);
	});
	isClickInside = (e) => {
		for (let n of this.children) if (n.isClickInside(e)) return !0;
		let n = ec(this.triggerRef), t = ec(this.contentRef);
		return n && (n === e.target || e.composedPath().includes(n)) || t && (t === e.target || e.composedPath().includes(t));
	};
	topmost() {
		return 0 === this.children.filter((e) => e.isOpen()).length;
	}
}, oD = ej((e, { slots: n, attrs: t, emit: r }) => {
	let s = e.contentRef || eN(null), o = new o$(e.triggerRef ?? eN(null), s, () => !!e.isOpen), i = oR.use();
	return a(oO.use().add(o)), window && ea(ey(s, "value"), eo((e) => {
		if (!e) return;
		let n = (e) => {
			o.isClickInside(e) || r("click-outside", e);
		};
		return window.addEventListener("pointerdown", n), () => {
			window.removeEventListener("pointerdown", n);
		};
	}), eo((e) => {
		if (!e) return;
		let n = (e) => {
			"Escape" === e.key && o.topmost() && r("esc-keydown", e);
		};
		return window.addEventListener("keydown", n), () => {
			window.removeEventListener("keydown", n);
		};
	}), ee()), () => {
		let a = e.isOpen ? k(G("div", {
			...t,
			ref: s,
			style: e.style,
			children: G(oO, {
				value: o,
				children: n.default?.()
			})
		}), { onVnodeBeforeMount: () => {
			r("content-before-mount");
		} }) : null;
		return G(y, {
			to: i.mountPoint(),
			children: n.transition ? n.transition({ content: a }) : a
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
}), oH = Math.min, oj = Math.max, oI = Math.round, oV = Math.floor, oB = (e) => ({
	x: e,
	y: e
}), oF = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
}, oE = {
	start: "end",
	end: "start"
};
function oW(e, n) {
	return "function" == typeof e ? e(n) : e;
}
function oz(e) {
	return e.split("-")[0];
}
function oU(e) {
	return e.split("-")[1];
}
function oq(e) {
	return "x" === e ? "y" : "x";
}
function oG(e) {
	return "y" === e ? "height" : "width";
}
var oY = new Set(["top", "bottom"]);
function oX(e) {
	return oY.has(oz(e)) ? "y" : "x";
}
function oK(e) {
	return e.replace(/start|end/g, (e) => oE[e]);
}
var oZ = ["left", "right"], oJ = ["right", "left"], oQ = ["top", "bottom"], o0 = ["bottom", "top"];
function o1(e) {
	return e.replace(/left|right|bottom|top/g, (e) => oF[e]);
}
function o2(e) {
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
function o4(e, n, t) {
	let a, { reference: r, floating: s } = e, o = oX(n), i = oq(oX(n)), c = oG(i), l = oz(n), u = "y" === o, p = r.x + r.width / 2 - s.width / 2, d = r.y + r.height / 2 - s.height / 2, h = r[c] / 2 - s[c] / 2;
	switch (l) {
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
	switch (oU(n)) {
		case "start":
			a[i] -= h * (t && u ? -1 : 1);
			break;
		case "end": a[i] += h * (t && u ? -1 : 1);
	}
	return a;
}
var o5 = async (e, n, t) => {
	let { placement: a = "bottom", strategy: r = "absolute", middleware: s = [], platform: o } = t, i = s.filter(Boolean), c = await (null == o.isRTL ? void 0 : o.isRTL(n)), l = await o.getElementRects({
		reference: e,
		floating: n,
		strategy: r
	}), { x: u, y: p } = o4(l, a, c), d = a, h = {}, m = 0;
	for (let t = 0; t < i.length; t++) {
		let { name: s, fn: f } = i[t], { x: g, y: k, data: N, reset: y } = await f({
			x: u,
			y: p,
			initialPlacement: a,
			placement: d,
			strategy: r,
			middlewareData: h,
			rects: l,
			platform: o,
			elements: {
				reference: e,
				floating: n
			}
		});
		u = null != g ? g : u, p = null != k ? k : p, h = {
			...h,
			[s]: {
				...h[s],
				...N
			}
		}, y && m <= 50 && (m++, "object" == typeof y && (y.placement && (d = y.placement), y.rects && (l = !0 === y.rects ? await o.getElementRects({
			reference: e,
			floating: n,
			strategy: r
		}) : y.rects), {x: u, y: p} = o4(l, d, c)), t = -1);
	}
	return {
		x: u,
		y: p,
		placement: d,
		strategy: r,
		middlewareData: h
	};
};
async function o3(e, n) {
	var t, a;
	void 0 === n && (n = {});
	let { x: r, y: s, platform: o, rects: i, elements: c, strategy: l } = e, { boundary: u = "clippingAncestors", rootBoundary: p = "viewport", elementContext: d = "floating", altBoundary: h = !1, padding: m = 0 } = oW(n, e), f = "number" != typeof (a = m) ? {
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
	}, g = c[h ? "floating" === d ? "reference" : "floating" : d], k = o2(await o.getClippingRect({
		element: null == (t = await (null == o.isElement ? void 0 : o.isElement(g))) || t ? g : g.contextElement || await (null == o.getDocumentElement ? void 0 : o.getDocumentElement(c.floating)),
		boundary: u,
		rootBoundary: p,
		strategy: l
	})), N = "floating" === d ? {
		x: r,
		y: s,
		width: i.floating.width,
		height: i.floating.height
	} : i.reference, y = await (null == o.getOffsetParent ? void 0 : o.getOffsetParent(c.floating)), b = await (null == o.isElement ? void 0 : o.isElement(y)) && await (null == o.getScale ? void 0 : o.getScale(y)) || {
		x: 1,
		y: 1
	}, v = o2(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
		elements: c,
		rect: N,
		offsetParent: y,
		strategy: l
	}) : N);
	return {
		top: (k.top - v.top + f.top) / b.y,
		bottom: (v.bottom - k.bottom + f.bottom) / b.y,
		left: (k.left - v.left + f.left) / b.x,
		right: (v.right - k.right + f.right) / b.x
	};
}
function o6() {
	return "undefined" != typeof window;
}
function o8(e) {
	return ie(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function o9(e) {
	var n;
	return (null == e || null == (n = e.ownerDocument) ? void 0 : n.defaultView) || window;
}
function o7(e) {
	var n;
	return null == (n = (ie(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : n.documentElement;
}
function ie(e) {
	return !!o6() && (e instanceof Node || e instanceof o9(e).Node);
}
function it(e) {
	return !!o6() && (e instanceof Element || e instanceof o9(e).Element);
}
function ia(e) {
	return !!o6() && (e instanceof HTMLElement || e instanceof o9(e).HTMLElement);
}
function ir(e) {
	return !!o6() && "undefined" != typeof ShadowRoot && (e instanceof ShadowRoot || e instanceof o9(e).ShadowRoot);
}
var is = new Set(["inline", "contents"]);
function io(e) {
	let { overflow: n, overflowX: t, overflowY: a, display: r } = iN(e);
	return /auto|scroll|overlay|hidden|clip/.test(n + a + t) && !is.has(r);
}
var ii = new Set([
	"table",
	"td",
	"th"
]), ic = [":popover-open", ":modal"];
function il(e) {
	return ic.some((n) => {
		try {
			return e.matches(n);
		} catch (e) {
			return !1;
		}
	});
}
var iu = [
	"transform",
	"translate",
	"scale",
	"rotate",
	"perspective"
], ip = [
	"transform",
	"translate",
	"scale",
	"rotate",
	"perspective",
	"filter"
], id = [
	"paint",
	"layout",
	"strict",
	"content"
];
function ih(e) {
	let n = im(), t = it(e) ? iN(e) : e;
	return iu.some((e) => !!t[e] && "none" !== t[e]) || !!t.containerType && "normal" !== t.containerType || !n && !!t.backdropFilter && "none" !== t.backdropFilter || !n && !!t.filter && "none" !== t.filter || ip.some((e) => (t.willChange || "").includes(e)) || id.some((e) => (t.contain || "").includes(e));
}
function im() {
	return "undefined" != typeof CSS && !!CSS.supports && CSS.supports("-webkit-backdrop-filter", "none");
}
var ig = new Set([
	"html",
	"body",
	"#document"
]);
function ik(e) {
	return ig.has(o8(e));
}
function iN(e) {
	return o9(e).getComputedStyle(e);
}
function iy(e) {
	return it(e) ? {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	} : {
		scrollLeft: e.scrollX,
		scrollTop: e.scrollY
	};
}
function ib(e) {
	if ("html" === o8(e)) return e;
	let n = e.assignedSlot || e.parentNode || ir(e) && e.host || o7(e);
	return ir(n) ? n.host : n;
}
function iv(e, n, t) {
	var a;
	void 0 === n && (n = []), void 0 === t && (t = !0);
	let r = function e(n) {
		let t = ib(n);
		return ik(t) ? n.ownerDocument ? n.ownerDocument.body : n.body : ia(t) && io(t) ? t : e(t);
	}(e), s = r === (null == (a = e.ownerDocument) ? void 0 : a.body), o = o9(r);
	if (s) {
		let e = ix(o);
		return n.concat(o, o.visualViewport || [], io(r) ? r : [], e && t ? iv(e) : []);
	}
	return n.concat(r, iv(r, [], t));
}
function ix(e) {
	return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function iw(e) {
	let n = iN(e), t = parseFloat(n.width) || 0, a = parseFloat(n.height) || 0, r = ia(e), s = r ? e.offsetWidth : t, o = r ? e.offsetHeight : a, i = oI(t) !== s || oI(a) !== o;
	return i && (t = s, a = o), {
		width: t,
		height: a,
		$: i
	};
}
function iC(e) {
	return it(e) ? e : e.contextElement;
}
function iM(e) {
	let n = iC(e);
	if (!ia(n)) return oB(1);
	let t = n.getBoundingClientRect(), { width: a, height: r, $: s } = iw(n), o = (s ? oI(t.width) : t.width) / a, i = (s ? oI(t.height) : t.height) / r;
	return o && Number.isFinite(o) || (o = 1), i && Number.isFinite(i) || (i = 1), {
		x: o,
		y: i
	};
}
var iS = oB(0);
function iP(e) {
	let n = o9(e);
	return im() && n.visualViewport ? {
		x: n.visualViewport.offsetLeft,
		y: n.visualViewport.offsetTop
	} : iS;
}
function iA(e, n, t, a) {
	var r;
	void 0 === n && (n = !1), void 0 === t && (t = !1);
	let s = e.getBoundingClientRect(), o = iC(e), i = oB(1);
	n && (a ? it(a) && (i = iM(a)) : i = iM(e));
	let c = (void 0 === (r = t) && (r = !1), a && (!r || a === o9(o)) && r) ? iP(o) : oB(0), l = (s.left + c.x) / i.x, u = (s.top + c.y) / i.y, p = s.width / i.x, d = s.height / i.y;
	if (o) {
		let e = o9(o), n = a && it(a) ? o9(a) : a, t = e, r = ix(t);
		for (; r && a && n !== t;) {
			let e = iM(r), n = r.getBoundingClientRect(), a = iN(r), s = n.left + (r.clientLeft + parseFloat(a.paddingLeft)) * e.x, o = n.top + (r.clientTop + parseFloat(a.paddingTop)) * e.y;
			l *= e.x, u *= e.y, p *= e.x, d *= e.y, l += s, u += o, r = ix(t = o9(r));
		}
	}
	return o2({
		width: p,
		height: d,
		x: l,
		y: u
	});
}
function i_(e, n) {
	let t = iy(e).scrollLeft;
	return n ? n.left + t : iA(o7(e)).left + t;
}
function iT(e, n) {
	let t = e.getBoundingClientRect();
	return {
		x: t.left + n.scrollLeft - i_(e, t),
		y: t.top + n.scrollTop
	};
}
var iL = new Set(["absolute", "fixed"]);
function iR(e, n, t) {
	let a;
	if ("viewport" === n) a = function(e, n) {
		let t = o9(e), a = o7(e), r = t.visualViewport, s = a.clientWidth, o = a.clientHeight, i = 0, c = 0;
		if (r) {
			s = r.width, o = r.height;
			let e = im();
			(!e || e && "fixed" === n) && (i = r.offsetLeft, c = r.offsetTop);
		}
		let l = i_(a);
		if (l <= 0) {
			let e = a.ownerDocument, n = e.body, t = getComputedStyle(n), r = "CSS1Compat" === e.compatMode && parseFloat(t.marginLeft) + parseFloat(t.marginRight) || 0, o = Math.abs(a.clientWidth - n.clientWidth - r);
			o <= 25 && (s -= o);
		} else l <= 25 && (s += l);
		return {
			width: s,
			height: o,
			x: i,
			y: c
		};
	}(e, t);
	else if ("document" === n) a = function(e) {
		let n = o7(e), t = iy(e), a = e.ownerDocument.body, r = oj(n.scrollWidth, n.clientWidth, a.scrollWidth, a.clientWidth), s = oj(n.scrollHeight, n.clientHeight, a.scrollHeight, a.clientHeight), o = -t.scrollLeft + i_(e), i = -t.scrollTop;
		return "rtl" === iN(a).direction && (o += oj(n.clientWidth, a.clientWidth) - r), {
			width: r,
			height: s,
			x: o,
			y: i
		};
	}(o7(e));
	else if (it(n)) a = function(e, n) {
		let t = iA(e, !0, "fixed" === n), a = t.top + e.clientTop, r = t.left + e.clientLeft, s = ia(e) ? iM(e) : oB(1), o = e.clientWidth * s.x, i = e.clientHeight * s.y;
		return {
			width: o,
			height: i,
			x: r * s.x,
			y: a * s.y
		};
	}(n, t);
	else {
		let t = iP(e);
		a = {
			x: n.x - t.x,
			y: n.y - t.y,
			width: n.width,
			height: n.height
		};
	}
	return o2(a);
}
function iO(e) {
	return "static" === iN(e).position;
}
function i$(e, n) {
	if (!ia(e) || "fixed" === iN(e).position) return null;
	if (n) return n(e);
	let t = e.offsetParent;
	return o7(e) === t && (t = t.ownerDocument.body), t;
}
function iD(e, n) {
	var t;
	let a = o9(e);
	if (il(e)) return a;
	if (!ia(e)) {
		let n = ib(e);
		for (; n && !ik(n);) {
			if (it(n) && !iO(n)) return n;
			n = ib(n);
		}
		return a;
	}
	let r = i$(e, n);
	for (; r && (t = r, ii.has(o8(t))) && iO(r);) r = i$(r, n);
	return r && ik(r) && iO(r) && !ih(r) ? a : r || function(e) {
		let n = ib(e);
		for (; ia(n) && !ik(n);) {
			if (ih(n)) return n;
			if (il(n)) break;
			n = ib(n);
		}
		return null;
	}(e) || a;
}
var iH = async function(e) {
	let n = this.getOffsetParent || iD, t = this.getDimensions, a = await t(e.floating);
	return {
		reference: function(e, n, t) {
			let a = ia(n), r = o7(n), s = "fixed" === t, o = iA(e, !0, s, n), i = {
				scrollLeft: 0,
				scrollTop: 0
			}, c = oB(0);
			if (a || !a && !s) if (("body" !== o8(n) || io(r)) && (i = iy(n)), a) {
				let e = iA(n, !0, s, n);
				c.x = e.x + n.clientLeft, c.y = e.y + n.clientTop;
			} else r && (c.x = i_(r));
			s && !a && r && (c.x = i_(r));
			let l = !r || a || s ? oB(0) : iT(r, i);
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
			width: a.width,
			height: a.height
		}
	};
}, ij = {
	convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
		let { elements: n, rect: t, offsetParent: a, strategy: r } = e, s = "fixed" === r, o = o7(a), i = !!n && il(n.floating);
		if (a === o || i && s) return t;
		let c = {
			scrollLeft: 0,
			scrollTop: 0
		}, l = oB(1), u = oB(0), p = ia(a);
		if ((p || !p && !s) && (("body" !== o8(a) || io(o)) && (c = iy(a)), ia(a))) {
			let e = iA(a);
			l = iM(a), u.x = e.x + a.clientLeft, u.y = e.y + a.clientTop;
		}
		let d = !o || p || s ? oB(0) : iT(o, c);
		return {
			width: t.width * l.x,
			height: t.height * l.y,
			x: t.x * l.x - c.scrollLeft * l.x + u.x + d.x,
			y: t.y * l.y - c.scrollTop * l.y + u.y + d.y
		};
	},
	getDocumentElement: o7,
	getClippingRect: function(e) {
		let { element: n, boundary: t, rootBoundary: a, strategy: r } = e, s = [..."clippingAncestors" === t ? il(n) ? [] : function(e, n) {
			let t = n.get(e);
			if (t) return t;
			let a = iv(e, [], !1).filter((e) => it(e) && "body" !== o8(e)), r = null, s = "fixed" === iN(e).position, o = s ? ib(e) : e;
			for (; it(o) && !ik(o);) {
				let n = iN(o), t = ih(o);
				t || "fixed" !== n.position || (r = null), (s ? !t && !r : !t && "static" === n.position && !!r && iL.has(r.position) || io(o) && !t && function e(n, t) {
					let a = ib(n);
					return !(a === t || !it(a) || ik(a)) && ("fixed" === iN(a).position || e(a, t));
				}(e, o)) ? a = a.filter((e) => e !== o) : r = n, o = ib(o);
			}
			return n.set(e, a), a;
		}(n, this._c) : [].concat(t), a], o = s[0], i = s.reduce((e, t) => {
			let a = iR(n, t, r);
			return e.top = oj(a.top, e.top), e.right = oH(a.right, e.right), e.bottom = oH(a.bottom, e.bottom), e.left = oj(a.left, e.left), e;
		}, iR(n, o, r));
		return {
			width: i.right - i.left,
			height: i.bottom - i.top,
			x: i.left,
			y: i.top
		};
	},
	getOffsetParent: iD,
	getElementRects: iH,
	getClientRects: function(e) {
		return Array.from(e.getClientRects());
	},
	getDimensions: function(e) {
		let { width: n, height: t } = iw(e);
		return {
			width: n,
			height: t
		};
	},
	getScale: iM,
	isElement: it,
	isRTL: function(e) {
		return "rtl" === iN(e).direction;
	}
};
function iI(e, n) {
	return e.x === n.x && e.y === n.y && e.width === n.width && e.height === n.height;
}
var iV = function(e) {
	return void 0 === e && (e = {}), {
		name: "size",
		options: e,
		async fn(n) {
			var t, a;
			let r, s, { placement: o, rects: i, platform: c, elements: l } = n, { apply: u = () => {},...p } = oW(e, n), d = await o3(n, p), h = oz(o), m = oU(o), f = "y" === oX(o), { width: g, height: k } = i.floating;
			"top" === h || "bottom" === h ? (r = h, s = m === (await (null == c.isRTL ? void 0 : c.isRTL(l.floating)) ? "start" : "end") ? "left" : "right") : (s = h, r = "end" === m ? "top" : "bottom");
			let N = k - d.top - d.bottom, y = g - d.left - d.right, b = oH(k - d[r], N), v = oH(g - d[s], y), x = !n.middlewareData.shift, w = b, C = v;
			if (null != (t = n.middlewareData.shift) && t.enabled.x && (C = y), null != (a = n.middlewareData.shift) && a.enabled.y && (w = N), x && !m) {
				let e = oj(d.left, 0), n = oj(d.right, 0), t = oj(d.top, 0), a = oj(d.bottom, 0);
				f ? C = g - 2 * (0 !== e || 0 !== n ? e + n : oj(d.left, d.right)) : w = k - 2 * (0 !== t || 0 !== a ? t + a : oj(d.top, d.bottom));
			}
			await u({
				...n,
				availableWidth: C,
				availableHeight: w
			});
			let M = await c.getDimensions(l.floating);
			return g !== M.width || k !== M.height ? { reset: { rects: !0 } } : {};
		}
	};
}, iB = ej((e, { slots: n, emit: t, attrs: a }) => {
	let r = eO(null), s = eO(null);
	return ea(eF([r, s]), eo(([n, t]) => {
		if (t && n) {
			let a = async () => {
				var a, r;
				t.style.position = "absolute";
				let s = await ((e, n, t) => {
					let a = /* @__PURE__ */ new Map(), r = {
						platform: ij,
						...t
					}, s = {
						...r.platform,
						_c: a
					};
					return o5(e, n, {
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
								let { placement: i, middlewareData: c, rects: l, initialPlacement: u, platform: p, elements: d } = e, { mainAxis: h = !0, crossAxis: m = !0, fallbackPlacements: f, fallbackStrategy: g = "bestFit", fallbackAxisSideDirection: k = "none", flipAlignment: N = !0,...y } = oW(a, e);
								if (null != (n = c.arrow) && n.alignmentOffset) return {};
								let b = oz(i), v = oX(u), x = oz(u) === u, w = await (null == p.isRTL ? void 0 : p.isRTL(d.floating)), C = f || (x || !N ? [o1(u)] : function(e) {
									let n = o1(e);
									return [
										oK(e),
										n,
										oK(n)
									];
								}(u)), M = "none" !== k;
								!f && M && C.push(...function(e, n, t, a) {
									let r = oU(e), s = function(e, n, t) {
										switch (e) {
											case "top":
											case "bottom":
												if (t) return n ? oJ : oZ;
												return n ? oZ : oJ;
											case "left":
											case "right": return n ? oQ : o0;
											default: return [];
										}
									}(oz(e), "start" === t, a);
									return r && (s = s.map((e) => e + "-" + r), n && (s = s.concat(s.map(oK)))), s;
								}(u, N, k, w));
								let S = [u, ...C], P = await o3(e, y), A = [], _ = (null == (t = c.flip) ? void 0 : t.overflows) || [];
								if (h && A.push(P[b]), m) {
									let e = function(e, n, t) {
										void 0 === t && (t = !1);
										let a = oU(e), r = oq(oX(e)), s = oG(r), o = "x" === r ? a === (t ? "end" : "start") ? "right" : "left" : "start" === a ? "bottom" : "top";
										return n.reference[s] > n.floating[s] && (o = o1(o)), [o, o1(o)];
									}(i, l, w);
									A.push(P[e[0]], P[e[1]]);
								}
								if (_ = [..._, {
									placement: i,
									overflows: A
								}], !A.every((e) => e <= 0)) {
									let e = ((null == (r = c.flip) ? void 0 : r.index) || 0) + 1, n = S[e];
									if (n && ("alignment" !== m || v === oX(n) || _.every((e) => oX(e.placement) !== v || e.overflows[0] > 0))) return {
										data: {
											index: e,
											overflows: _
										},
										reset: { placement: n }
									};
									let t = null == (s = _.filter((e) => e.overflows[0] <= 0).sort((e, n) => e.overflows[1] - n.overflows[1])[0]) ? void 0 : s.placement;
									if (!t) switch (g) {
										case "bestFit": {
											let e = null == (o = _.filter((e) => {
												if (M) {
													let n = oX(e.placement);
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
								} },...c } = oW(r, e), l = {
									x: n,
									y: t
								}, u = await o3(e, c), p = oX(oz(a)), d = oq(p), h = l[d], m = l[p];
								if (s) {
									let e = "y" === d ? "top" : "left", n = "y" === d ? "bottom" : "right", t = h + u[e], a = h - u[n];
									h = oj(t, oH(h, a));
								}
								if (o) {
									let e = "y" === p ? "top" : "left", n = "y" === p ? "bottom" : "right", t = m + u[e], a = m - u[n];
									m = oj(t, oH(m, a));
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
				let { ancestorScroll: s = !0, ancestorResize: o = !0, elementResize: i = "function" == typeof ResizeObserver, layoutShift: c = "function" == typeof IntersectionObserver, animationFrame: l = !1 } = a, u = iC(e), p = s || o ? [...u ? iv(u) : [], ...iv(n)] : [];
				p.forEach((e) => {
					s && e.addEventListener("scroll", t, { passive: !0 }), o && e.addEventListener("resize", t);
				});
				let d = u && c ? function(e, n) {
					let t, a = null, r = o7(e);
					function s() {
						var e;
						clearTimeout(t), null == (e = a) || e.disconnect(), a = null;
					}
					return function o(i, c) {
						void 0 === i && (i = !1), void 0 === c && (c = 1), s();
						let l = e.getBoundingClientRect(), { left: u, top: p, width: d, height: h } = l;
						if (i || n(), !d || !h) return;
						let m = oV(p), f = oV(r.clientWidth - (u + d)), g = {
							rootMargin: -m + "px " + -f + "px " + -oV(r.clientHeight - (p + h)) + "px " + -oV(u) + "px",
							threshold: oj(0, oH(1, c)) || 1
						}, k = !0;
						function N(n) {
							let a = n[0].intersectionRatio;
							if (a !== c) {
								if (!k) return o();
								a ? o(!1, a) : t = setTimeout(() => {
									o(!1, 1e-7);
								}, 1e3);
							}
							1 !== a || iI(l, e.getBoundingClientRect()) || o(), k = !1;
						}
						try {
							a = new IntersectionObserver(N, {
								...g,
								root: r.ownerDocument
							});
						} catch (e) {
							a = new IntersectionObserver(N, g);
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
				}), u && !l && m.observe(u), m.observe(n));
				let f = l ? iA(e) : null;
				return l && function n() {
					let a = iA(e);
					f && !iI(f, a) && t(), f = a, r = requestAnimationFrame(n);
				}(), t(), () => {
					var e;
					p.forEach((e) => {
						s && e.removeEventListener("scroll", t), o && e.removeEventListener("resize", t);
					}), d?.(), null == (e = m) || e.disconnect(), m = null, l && cancelAnimationFrame(r);
				};
			}(n, t, a);
			return () => {
				r();
			};
		}
		return () => {};
	}), ee()), () => {
		let o = n.default?.()[0];
		return o ? ed(h, { children: [k(o, {
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
		}), G(oD, {
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
}), iF = "M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z", iE = "M12 2C17.5 2 22 6.5 22 12S17.5 22 12 22 2 17.5 2 12 6.5 2 12 2M12 4C10.1 4 8.4 4.6 7.1 5.7L18.3 16.9C19.3 15.5 20 13.8 20 12C20 7.6 16.4 4 12 4M16.9 18.3L5.7 7.1C4.6 8.4 4 10.1 4 12C4 16.4 7.6 20 12 20C13.9 20 15.6 19.4 16.9 18.3Z", iW = "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z", iz = "M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z", iU = "M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z", iq = "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z", iG = "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z", iY = "M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z", iX = "M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z", iK = "M1,1V5H2V19H1V23H5V22H19V23H23V19H22V5H23V1H19V2H5V1M5,4H19V5H20V19H19V20H5V19H4V5H5M6,6V14H9V18H18V9H14V6M8,8H12V12H8M14,11H16V16H11V14H14", iZ = "M11,18H13V16H11V18M12,6A4,4 0 0,0 8,10H10A2,2 0 0,1 12,8A2,2 0 0,1 14,10C14,12 11,11.75 11,15H13C13,12.75 16,12.5 16,10A4,4 0 0,0 12,6M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3Z", iJ = "M19,19V5H5V19H19M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5C3,3.89 3.9,3 5,3H19M17,11V13H7V11H17Z", iQ = "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z", i0 = "M2,21L23,12L2,3V10L17,12L2,14V21Z", i1 = "M17.75,4.09L15.22,6.03L16.13,9.09L13.5,7.28L10.87,9.09L11.78,6.03L9.25,4.09L12.44,4L13.5,1L14.56,4L17.75,4.09M21.25,11L19.61,12.25L20.2,14.23L18.5,13.06L16.8,14.23L17.39,12.25L15.75,11L17.81,10.95L18.5,9L19.19,10.95L21.25,11M18.97,15.95C19.8,15.87 20.69,17.05 20.16,17.8C19.84,18.25 19.5,18.67 19.08,19.07C15.17,23 8.84,23 4.94,19.07C1.03,15.17 1.03,8.83 4.94,4.93C5.34,4.53 5.76,4.17 6.21,3.85C6.96,3.32 8.14,4.21 8.06,5.04C7.79,7.9 8.75,10.87 10.95,13.06C13.14,15.26 16.1,16.22 18.97,15.95M17.33,17.97C14.5,17.81 11.7,16.64 9.53,14.5C7.36,12.31 6.2,9.5 6.04,6.68C3.23,9.82 3.34,14.64 6.35,17.66C9.37,20.67 14.19,20.78 17.33,17.97Z", i2 = "M3.55 19.09L4.96 20.5L6.76 18.71L5.34 17.29M12 6C8.69 6 6 8.69 6 12S8.69 18 12 18 18 15.31 18 12C18 8.68 15.31 6 12 6M20 13H23V11H20M17.24 18.71L19.04 20.5L20.45 19.09L18.66 17.29M20.45 5L19.04 3.6L17.24 5.39L18.66 6.81M13 1H11V4H13M6.76 5.39L4.96 3.6L3.55 5L5.34 6.81L6.76 5.39M1 13H4V11H1M13 20H11V23H13", i4 = o_("div", { displayName: "Container" })({
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
		"& .comment": { color: rQ("sys.on-surface", rJ(.38)) },
		"& .string": { color: "sys.success" },
		"& .tag .attr-name": { color: "sys.success" },
		"& .function": { color: "sys.warning" },
		"& .punctuation": { color: rQ("sys.on-surface", rJ(.38)) },
		"& .keyword": { color: "sys.error" }
	},
	"& p,li": { my: "1em" },
	overflowY: "auto"
});
let i5 = eP(() => {
	let e = {
		primary: "#1270f5",
		secondary: "#8a90a5",
		tertiary: "#b58391",
		neutral: "#5e5e5e",
		neutralVariant: "#757780",
		error: "#d93f23",
		warning: "#e69c00",
		success: "#5ac220"
	}, n = sV.fromColors(e).normalizeRoleRules();
	return eO({
		seed: e,
		rules: n,
		theming: r1.create({
			...sW,
			...sV.fromColors(e).toDesignTokens(n)
		}, { varPrefix: "vk" })
	});
});
var i3 = t((e, n) => {
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
}), i6 = t((e, n) => {
	var t = i3(), a = {
		"text/plain": "Text",
		"text/html": "Url",
		default: "Text"
	};
	n.exports = function(e, n) {
		var r, s, o, i, c, l, u, p, d = !1;
		n || (n = {}), o = n.debug || !1;
		try {
			if (c = t(), l = document.createRange(), u = document.getSelection(), (p = document.createElement("span")).textContent = e, p.ariaHidden = "true", p.style.all = "unset", p.style.position = "fixed", p.style.top = 0, p.style.clip = "rect(0, 0, 0, 0)", p.style.whiteSpace = "pre", p.style.webkitUserSelect = "text", p.style.MozUserSelect = "text", p.style.msUserSelect = "text", p.style.userSelect = "text", p.addEventListener("copy", function(t) {
				if (t.stopPropagation(), n.format) if (t.preventDefault(), void 0 === t.clipboardData) {
					o && console.warn("unable to use e.clipboardData"), o && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
					var r = a[n.format] || a.default;
					window.clipboardData.setData(r, e);
				} else t.clipboardData.clearData(), t.clipboardData.setData(n.format, e);
				n.onCopy && (t.preventDefault(), n.onCopy(t.clipboardData));
			}), document.body.appendChild(p), l.selectNodeContents(p), u.addRange(l), !document.execCommand("copy")) throw Error("copy command was unsuccessful");
			d = !0;
		} catch (t) {
			o && console.error("unable to copy using execCommand: ", t), o && console.warn("trying IE specific stuff");
			try {
				window.clipboardData.setData(n.format || "text", e), n.onCopy && n.onCopy(window.clipboardData), d = !0;
			} catch (t) {
				o && console.error("unable to copy using clipboardData: ", t), o && console.error("falling back to prompt"), r = "message" in n ? n.message : "Copy to clipboard: #{key}, Enter", s = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C", i = r.replace(/#{\s*key\s*}/g, s), window.prompt(i, e);
			}
		} finally {
			u && ("function" == typeof u.removeRange ? u.removeRange(l) : u.removeAllRanges()), p && document.body.removeChild(p), c();
		}
		return d;
	};
}), i8 = n(i6()), i9 = ej(() => {
	let e = i5.use(), n = ef(null);
	return () => {
		let t = sV.fromColors(e.value.seed);
		return ed(oA, {
			ref: n,
			sx: {
				display: "flex",
				flexDirection: "column",
				gap: 24
			},
			children: [ed(oA, {
				sx: {
					display: "flex",
					gap: 56
				},
				children: [G(oA, {
					sx: {
						display: "flex",
						flexDirection: "column"
					},
					children: to(e.value.seed, (n, t) => ed(oA, {
						sx: {
							flex: 1,
							display: "flex",
							alignItems: "center",
							gap: 16
						},
						children: [G(oA, {
							sx: { flex: 1 },
							children: t
						}), G("input", {
							type: "color",
							value: n,
							onChange: (n) => {
								e.next((e) => {
									e.seed[t] = n.target.value;
								});
							}
						})]
					}))
				}), G(oA, {
					sx: {
						display: "flex",
						flexWrap: "wrap",
						gap: 16
					},
					children: to(e.value.rules, ([n, a], r) => ed(oA, {
						sx: {
							display: "flex",
							alignItems: "center",
							width: "30%"
						},
						children: [G(oA, {
							sx: { flex: 1 },
							children: r
						}), G(oA, {
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
							children: G("input", {
								type: "number",
								value: a,
								max: 100,
								min: 0,
								style: {
									backgroundColor: sV.toHEX(t.seeds[n].tone(a)),
									color: a > 50 ? "black" : "white"
								},
								"data-color": sV.toHEX(t.seeds[n].tone(a)),
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
			}), G(oA, {
				sx: {
					display: "flex",
					gap: 16,
					"& > *": { flex: 1 }
				},
				children: G("pre", {
					onClick: () => (0, i8.default)(JSON.stringify(e.value)),
					children: G("code", { children: JSON.stringify(e.value, null, 2) })
				})
			})]
		});
	};
}), i7 = {
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
}, ce = ej(() => () => G(h, { children: ["light", "dark"].map((e) => ed("div", {
	"data-theme": e,
	children: [ed(oA, {
		component: "h1",
		sx: {
			textStyle: "sys.headline-medium",
			pb: 8,
			mt: 16
		},
		children: [nB(e), " Scheme"]
	}), ed(oA, {
		sx: {
			display: "flex",
			flexDirection: "column",
			gap: 16
		},
		children: [G(oA, {
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
			].map((e) => ed(oA, {
				sx: {
					flex: 1,
					minW: 1 / 4,
					display: "flex",
					alignItems: "stretch"
				},
				children: [G(oA, {
					sx: {
						flex: 1,
						display: "flex",
						flexDirection: "column"
					},
					children: ["", "-container"].map((n) => ed(c, { children: [G(oA, {
						sx: {
							bgColor: `sys.${e}${n}`,
							color: `sys.on-${e}${n}`,
							p: 8,
							flex: 3
						},
						children: `${e}${n}`
					}), G(oA, {
						sx: {
							color: `sys.${e}${n}`,
							bgColor: `sys.on-${e}${n}`,
							p: 8,
							flex: 1
						},
						children: `on-${e}${n}`
					})] }, n))
				}), G(oA, {
					sx: {
						display: "flex",
						flexDirection: "column"
					},
					children: to(i7, (n, t) => ed(oA, {
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
		}), ed("div", { children: [
			G(oA, {
				sx: {
					display: "flex",
					"& > *": { width: 1 / 3 }
				},
				children: [
					"-dim",
					"",
					"-bright"
				].map((e) => G(oA, {
					sx: {
						color: "sys.on-surface",
						bgColor: `sys.surface${e}`,
						height: 80,
						p: 8
					},
					children: `surface${e}`
				}))
			}),
			G(oA, {
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
				].map((e) => G(oA, {
					sx: {
						color: "sys.on-surface",
						bgColor: `sys.surface-container${e}`,
						height: 80,
						p: 8
					},
					children: `surface-container${e}`
				}))
			}),
			G(oA, {
				sx: {
					display: "flex",
					"& > *": { width: 1 / 4 }
				},
				children: [
					"on-surface",
					"on-surface-variant",
					"outline",
					"outline-variant"
				].map((e) => G(oA, {
					sx: {
						color: e.includes("outline-variant") ? "sys.inverse-surface" : "sys.inverse-on-surface",
						bgColor: `sys.${e}`,
						height: 80,
						p: 8
					},
					children: e
				}))
			}),
			G(oA, {
				sx: { display: "flex" },
				children: to(i7, (e, n) => ed(oA, {
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
}, e)) })), cn = ej(() => {
	let e = sU.use();
	return () => G(h, { children: Object.keys(e.token.elevation.tokens).map((e) => G(oA, {
		sx: {
			mt: 16,
			p: 16,
			rounded: "lg",
			transitionDuration: "md4",
			transitionTimingFunction: "standard",
			shadow: e,
			_hover: { shadow: `${1 + parseInt(e)}` }
		},
		children: ed("div", { children: ["Elevation ", e] })
	}, e)) });
}), ct = ej(() => {
	let e = sU.use();
	return () => ed(oA, {
		sx: {
			display: "flex",
			gap: 16,
			flexDirection: "column"
		},
		children: [G("div", { children: "点击下载，通过 Figma Tokens 全量导入文件" }), G("pre", {
			onClick: () => {
				(function(e, n, t = "application/json") {
					let a = document.createElement("a"), r = new Blob([e], { type: t }), s = URL.createObjectURL(r);
					a.href = s, a.download = n, document.body.appendChild(a), a.click(), setTimeout(() => {
						document.body.removeChild(a), window.URL.revokeObjectURL(s);
					}, 0);
				})(JSON.stringify(e.toFigmaTokens(), null, 2), `tokens.${(/* @__PURE__ */ new Date()).getTime()}.json`);
			},
			children: G("code", { children: JSON.stringify(e.toFigmaTokens(), null, 2) })
		})]
	});
}), ca = o_("button", { disabled: s().optional() }, { displayName: "Button" })({
	bg: "none",
	outline: "none",
	border: "none",
	px: 16,
	h: 40,
	rounded: "md",
	color: "sys.primary",
	bgColor: rQ("sys.primary", rJ(.08)),
	_disabled: {
		color: rQ("sys.on-surface", rJ(.12)),
		bgColor: rQ("sys.on-surface", rJ(.08))
	}
}), cr = () => ed(oA, {
	sx: {
		display: "flex",
		gap: 8
	},
	children: [G(ca, { children: "按钮" }), G(ca, {
		disabled: !0,
		children: "按钮"
	})]
}), cs = ej(() => () => G(oA, {
	sx: {
		display: "flex",
		padding: 10,
		containerStyle: "sys.primary"
	},
	children: G(oA, {
		sx: { containerStyle: "sys.surface-container" },
		component: "button",
		children: "Hi 111"
	})
}));
function co(e) {
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
	return ed(h, { children: [
		ed(n.p, { children: ["设计理念沿用 ", G(n.a, {
			href: "https://m3.material.io/",
			children: "Material 3"
		})] }),
		"\n",
		G(n.p, { children: "这里仅为适配该设计理念，抽象 Design System, 方便开发：" }),
		"\n",
		ed(n.p, { children: [
			"所有的 Design Token 将声明为 ",
			G(n.code, { children: "css var" }),
			" (",
			G(n.a, {
				href: "https://developer.mozilla.org/en-US/docs/Web/CSS/--*",
				children: "Custom properties"
			}),
			"),\n可同时支持在 ",
			G(n.code, { children: "css-in-js" }),
			" 和 ",
			G(n.code, { children: "raw css" }),
			" 中使用。"
		] }),
		"\n",
		G(n.h2, { children: G(n.code, { children: "css-in-js" }) }),
		"\n",
		G(n.p, { children: "TypeScript 的帮助下，还会提供准确的 Design Token 值. 如：" }),
		"\n",
		ed(n.div, {
			"data-example": "",
			children: [G(n.div, {
				"data-example-container": "",
				children: G(n.codeblock4a44dc15, {})
			}), G(n.pre, {
				className: "language-tsx",
				children: ed(n.code, {
					className: "language-tsx",
					children: [
						G(n.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						ed(n.span, {
							className: "token imports",
							children: [
								G(n.span, {
									className: "token punctuation",
									children: "{"
								}),
								" ",
								G(n.span, {
									className: "token maybe-class-name",
									children: "Box"
								}),
								G(n.span, {
									className: "token punctuation",
									children: ","
								}),
								" alpha",
								G(n.span, {
									className: "token punctuation",
									children: ","
								}),
								" styled",
								G(n.span, {
									className: "token punctuation",
									children: ","
								}),
								" variant ",
								G(n.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						G(n.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						G(n.span, {
							className: "token string",
							children: "\"@innoai-tech/vueuikit\""
						}),
						G(n.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						G(n.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						ed(n.span, {
							className: "token imports",
							children: [
								G(n.span, {
									className: "token punctuation",
									children: "{"
								}),
								" t ",
								G(n.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						G(n.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						G(n.span, {
							className: "token string",
							children: "\"@innoai-tech/vuekit\""
						}),
						G(n.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n",
						G(n.span, {
							className: "token keyword module",
							children: "export"
						}),
						" ",
						G(n.span, {
							className: "token keyword",
							children: "const"
						}),
						" ",
						G(n.span, {
							className: "token maybe-class-name",
							children: "Button"
						}),
						" ",
						G(n.span, {
							className: "token operator",
							children: "="
						}),
						" ",
						G(n.span, {
							className: "token function",
							children: "styled"
						}),
						G(n.span, {
							className: "token punctuation",
							children: "("
						}),
						G(n.span, {
							className: "token string",
							children: "\"button\""
						}),
						G(n.span, {
							className: "token punctuation",
							children: ","
						}),
						" ",
						G(n.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n  disabled",
						G(n.span, {
							className: "token operator",
							children: ":"
						}),
						" t",
						G(n.span, {
							className: "token punctuation",
							children: "."
						}),
						G(n.span, {
							className: "token method function property-access",
							children: "boolean"
						}),
						G(n.span, {
							className: "token punctuation",
							children: "("
						}),
						G(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						G(n.span, {
							className: "token punctuation",
							children: "."
						}),
						G(n.span, {
							className: "token method function property-access",
							children: "optional"
						}),
						G(n.span, {
							className: "token punctuation",
							children: "("
						}),
						G(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						G(n.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n",
						G(n.span, {
							className: "token punctuation",
							children: "}"
						}),
						G(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						G(n.span, {
							className: "token punctuation",
							children: "("
						}),
						G(n.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n  bg",
						G(n.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						G(n.span, {
							className: "token string",
							children: "\"none\""
						}),
						G(n.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n  outline",
						G(n.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						G(n.span, {
							className: "token string",
							children: "\"none\""
						}),
						G(n.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n  border",
						G(n.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						G(n.span, {
							className: "token string",
							children: "\"none\""
						}),
						G(n.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n  px",
						G(n.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						G(n.span, {
							className: "token number",
							children: "16"
						}),
						G(n.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n  h",
						G(n.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						G(n.span, {
							className: "token number",
							children: "40"
						}),
						G(n.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n  rounded",
						G(n.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						G(n.span, {
							className: "token string",
							children: "\"md\""
						}),
						G(n.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n\n  ",
						G(n.span, {
							className: "token comment",
							children: "// 利用 TypeScript 的推导而来，且非 color 属性无该值"
						}),
						"\n  ",
						G(n.span, {
							className: "token comment",
							children: "// 实际将转换为 var(--vk-color-sys-primary)"
						}),
						"\n  ",
						G(n.span, {
							className: "token comment",
							children: "// sys-* 的 color 还会随暗黑/普通主题进行切换"
						}),
						"\n  color",
						G(n.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						G(n.span, {
							className: "token string",
							children: "\"sys.primary\""
						}),
						G(n.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n\n  ",
						G(n.span, {
							className: "token comment",
							children: "// color 变种"
						}),
						"\n  ",
						G(n.span, {
							className: "token comment",
							children: "// 实际将转换为 rbga(var(--vk-color-sys-primary-rgb) / 0.08)"
						}),
						"\n  bgColor",
						G(n.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						G(n.span, {
							className: "token function",
							children: "variant"
						}),
						G(n.span, {
							className: "token punctuation",
							children: "("
						}),
						G(n.span, {
							className: "token string",
							children: "\"sys.primary\""
						}),
						G(n.span, {
							className: "token punctuation",
							children: ","
						}),
						" ",
						G(n.span, {
							className: "token function",
							children: "alpha"
						}),
						G(n.span, {
							className: "token punctuation",
							children: "("
						}),
						G(n.span, {
							className: "token number",
							children: "0.08"
						}),
						G(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						G(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						G(n.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n\n  ",
						G(n.span, {
							className: "token comment",
							children: "// 通常情况下，组件 props 将转换成 data-<prop> 作为 attr"
						}),
						"\n  ",
						G(n.span, {
							className: "token comment",
							children: "// 即： <Button disabled/>  =>  <button data-disabled=true />"
						}),
						"\n  ",
						G(n.span, {
							className: "token comment",
							children: "// 同理，在自定义转换规则中，也建议如下做类似的转换，避免动态创建 CSSObject"
						}),
						"\n  _disabled",
						G(n.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						G(n.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n    color",
						G(n.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						G(n.span, {
							className: "token function",
							children: "variant"
						}),
						G(n.span, {
							className: "token punctuation",
							children: "("
						}),
						G(n.span, {
							className: "token string",
							children: "\"sys.on-surface\""
						}),
						G(n.span, {
							className: "token punctuation",
							children: ","
						}),
						" ",
						G(n.span, {
							className: "token function",
							children: "alpha"
						}),
						G(n.span, {
							className: "token punctuation",
							children: "("
						}),
						G(n.span, {
							className: "token number",
							children: "0.12"
						}),
						G(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						G(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						G(n.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n    bgColor",
						G(n.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						G(n.span, {
							className: "token function",
							children: "variant"
						}),
						G(n.span, {
							className: "token punctuation",
							children: "("
						}),
						G(n.span, {
							className: "token string",
							children: "\"sys.on-surface\""
						}),
						G(n.span, {
							className: "token punctuation",
							children: ","
						}),
						" ",
						G(n.span, {
							className: "token function",
							children: "alpha"
						}),
						G(n.span, {
							className: "token punctuation",
							children: "("
						}),
						G(n.span, {
							className: "token number",
							children: "0.08"
						}),
						G(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						G(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						G(n.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n  ",
						G(n.span, {
							className: "token punctuation",
							children: "}"
						}),
						G(n.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n",
						G(n.span, {
							className: "token punctuation",
							children: "}"
						}),
						G(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						G(n.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n",
						G(n.span, {
							className: "token keyword module",
							children: "export"
						}),
						" ",
						G(n.span, {
							className: "token keyword module",
							children: "default"
						}),
						" ",
						G(n.span, {
							className: "token punctuation",
							children: "("
						}),
						G(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						G(n.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						G(n.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n  ",
						G(n.span, {
							className: "token keyword control-flow",
							children: "return"
						}),
						" ",
						G(n.span, {
							className: "token punctuation",
							children: "("
						}),
						"\n    ",
						ed(n.span, {
							className: "token tag",
							children: [
								ed(n.span, {
									className: "token tag",
									children: [G(n.span, {
										className: "token punctuation",
										children: "<"
									}), G(n.span, {
										className: "token class-name",
										children: "Box"
									})]
								}),
								" ",
								G(n.span, {
									className: "token attr-name",
									children: "sx"
								}),
								ed(n.span, {
									className: "token script language-javascript",
									children: [
										G(n.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										G(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										G(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										" display",
										G(n.span, {
											className: "token operator",
											children: ":"
										}),
										" ",
										G(n.span, {
											className: "token string",
											children: "\"flex\""
										}),
										G(n.span, {
											className: "token punctuation",
											children: ","
										}),
										" gap",
										G(n.span, {
											className: "token operator",
											children: ":"
										}),
										" ",
										G(n.span, {
											className: "token number",
											children: "8"
										}),
										" ",
										G(n.span, {
											className: "token punctuation",
											children: "}"
										}),
										G(n.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								G(n.span, {
									className: "token punctuation",
									children: ">"
								})
							]
						}),
						G(n.span, {
							className: "token plain-text",
							children: "\n      "
						}),
						ed(n.span, {
							className: "token tag",
							children: [ed(n.span, {
								className: "token tag",
								children: [G(n.span, {
									className: "token punctuation",
									children: "<"
								}), G(n.span, {
									className: "token class-name",
									children: "Button"
								})]
							}), G(n.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						G(n.span, {
							className: "token plain-text",
							children: "按钮"
						}),
						ed(n.span, {
							className: "token tag",
							children: [ed(n.span, {
								className: "token tag",
								children: [G(n.span, {
									className: "token punctuation",
									children: "</"
								}), G(n.span, {
									className: "token class-name",
									children: "Button"
								})]
							}), G(n.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						G(n.span, {
							className: "token plain-text",
							children: "\n      "
						}),
						ed(n.span, {
							className: "token tag",
							children: [
								ed(n.span, {
									className: "token tag",
									children: [G(n.span, {
										className: "token punctuation",
										children: "<"
									}), G(n.span, {
										className: "token class-name",
										children: "Button"
									})]
								}),
								" ",
								G(n.span, {
									className: "token attr-name",
									children: "disabled"
								}),
								ed(n.span, {
									className: "token script language-javascript",
									children: [
										G(n.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										G(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										G(n.span, {
											className: "token boolean",
											children: "true"
										}),
										G(n.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								G(n.span, {
									className: "token punctuation",
									children: ">"
								})
							]
						}),
						G(n.span, {
							className: "token plain-text",
							children: "按钮"
						}),
						ed(n.span, {
							className: "token tag",
							children: [ed(n.span, {
								className: "token tag",
								children: [G(n.span, {
									className: "token punctuation",
									children: "</"
								}), G(n.span, {
									className: "token class-name",
									children: "Button"
								})]
							}), G(n.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						G(n.span, {
							className: "token plain-text",
							children: "\n    "
						}),
						ed(n.span, {
							className: "token tag",
							children: [ed(n.span, {
								className: "token tag",
								children: [G(n.span, {
									className: "token punctuation",
									children: "</"
								}), G(n.span, {
									className: "token class-name",
									children: "Box"
								})]
							}), G(n.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						"\n  ",
						G(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						G(n.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						G(n.span, {
							className: "token punctuation",
							children: "}"
						}),
						G(n.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n"
					]
				})
			})]
		}),
		"\n",
		ed(n.p, { children: ["不同于其他框架中的 theme 定义，为了更准确的类型推导，需要由 DesignToken 进行创建\n详细请", G(n.a, {
			href: "https://github.com/innoai-tech/vuekit/blob/main/nodepkg/vueuikit/src/theming/m3",
			children: "参考源码"
		})] }),
		"\n",
		ed(n.p, { children: [
			"虽然底层使用的是 ",
			G(n.code, { children: "@emotion/*" }),
			"，但屏蔽掉了 ",
			G(n.code, { children: "array" }),
			" 等非 CSSObject 值的使用, 初衷是为了更稳定的类型推导。\n另外样式扩展有两种方式"
		] }),
		"\n",
		G(n.pre, {
			className: "language-tsx",
			children: ed(n.code, {
				className: "language-tsx",
				children: [
					G(n.span, {
						className: "token keyword module",
						children: "import"
					}),
					" ",
					ed(n.span, {
						className: "token imports",
						children: [
							G(n.span, {
								className: "token punctuation",
								children: "{"
							}),
							" t ",
							G(n.span, {
								className: "token punctuation",
								children: "}"
							})
						]
					}),
					" ",
					G(n.span, {
						className: "token keyword module",
						children: "from"
					}),
					" ",
					G(n.span, {
						className: "token string",
						children: "\"@innoai-tech/vuekit\""
					}),
					G(n.span, {
						className: "token punctuation",
						children: ";"
					}),
					"\n",
					G(n.span, {
						className: "token keyword module",
						children: "import"
					}),
					" ",
					ed(n.span, {
						className: "token imports",
						children: [
							G(n.span, {
								className: "token punctuation",
								children: "{"
							}),
							" styled",
							G(n.span, {
								className: "token punctuation",
								children: ","
							}),
							" ",
							G(n.span, {
								className: "token maybe-class-name",
								children: "SystemStyleObject"
							}),
							" ",
							G(n.span, {
								className: "token punctuation",
								children: "}"
							})
						]
					}),
					" ",
					G(n.span, {
						className: "token keyword module",
						children: "from"
					}),
					" ",
					G(n.span, {
						className: "token string",
						children: "\"@innoai-tech/vueuikit\""
					}),
					G(n.span, {
						className: "token punctuation",
						children: ";"
					}),
					"\n\n",
					G(n.span, {
						className: "token keyword",
						children: "const"
					}),
					" shared",
					G(n.span, {
						className: "token operator",
						children: ":"
					}),
					" ",
					G(n.span, {
						className: "token maybe-class-name",
						children: "SystemStyleObject"
					}),
					" ",
					G(n.span, {
						className: "token operator",
						children: "="
					}),
					" ",
					G(n.span, {
						className: "token punctuation",
						children: "{"
					}),
					"\n  color",
					G(n.span, {
						className: "token operator",
						children: ":"
					}),
					" ",
					G(n.span, {
						className: "token string",
						children: "\"sys.primary\""
					}),
					G(n.span, {
						className: "token punctuation",
						children: ","
					}),
					"\n  ",
					G(n.span, {
						className: "token comment",
						children: "// ..."
					}),
					"\n",
					G(n.span, {
						className: "token punctuation",
						children: "}"
					}),
					G(n.span, {
						className: "token punctuation",
						children: ";"
					}),
					"\n\n",
					G(n.span, {
						className: "token comment",
						children: "// 直接通过 extends 复用样式"
					}),
					"\n",
					G(n.span, {
						className: "token comment",
						children: "//"
					}),
					"\n",
					G(n.span, {
						className: "token comment",
						children: "// 组件 props 定义需要重新声明"
					}),
					"\n",
					G(n.span, {
						className: "token keyword module",
						children: "export"
					}),
					" ",
					G(n.span, {
						className: "token keyword",
						children: "const"
					}),
					" ",
					G(n.span, {
						className: "token maybe-class-name",
						children: "ButtonBase"
					}),
					" ",
					G(n.span, {
						className: "token operator",
						children: "="
					}),
					" ",
					G(n.span, {
						className: "token function",
						children: "styled"
					}),
					G(n.span, {
						className: "token punctuation",
						children: "("
					}),
					G(n.span, {
						className: "token string",
						children: "\"button\""
					}),
					G(n.span, {
						className: "token punctuation",
						children: ","
					}),
					" ",
					G(n.span, {
						className: "token punctuation",
						children: "{"
					}),
					"\n  disabled",
					G(n.span, {
						className: "token operator",
						children: ":"
					}),
					" t",
					G(n.span, {
						className: "token punctuation",
						children: "."
					}),
					G(n.span, {
						className: "token method function property-access",
						children: "boolean"
					}),
					G(n.span, {
						className: "token punctuation",
						children: "("
					}),
					G(n.span, {
						className: "token punctuation",
						children: ")"
					}),
					G(n.span, {
						className: "token punctuation",
						children: "."
					}),
					G(n.span, {
						className: "token method function property-access",
						children: "optional"
					}),
					G(n.span, {
						className: "token punctuation",
						children: "("
					}),
					G(n.span, {
						className: "token punctuation",
						children: ")"
					}),
					G(n.span, {
						className: "token punctuation",
						children: ","
					}),
					"\n",
					G(n.span, {
						className: "token punctuation",
						children: "}"
					}),
					G(n.span, {
						className: "token punctuation",
						children: ")"
					}),
					G(n.span, {
						className: "token punctuation",
						children: "("
					}),
					G(n.span, {
						className: "token punctuation",
						children: "{"
					}),
					"\n  ",
					G(n.span, {
						className: "token keyword",
						children: "extends"
					}),
					G(n.span, {
						className: "token operator",
						children: ":"
					}),
					" ",
					G(n.span, {
						className: "token punctuation",
						children: "["
					}),
					"shared",
					G(n.span, {
						className: "token punctuation",
						children: "]"
					}),
					G(n.span, {
						className: "token punctuation",
						children: ","
					}),
					"\n  ",
					G(n.span, {
						className: "token comment",
						children: "// ..."
					}),
					"\n",
					G(n.span, {
						className: "token punctuation",
						children: "}"
					}),
					G(n.span, {
						className: "token punctuation",
						children: ")"
					}),
					G(n.span, {
						className: "token punctuation",
						children: ";"
					}),
					"\n\n",
					G(n.span, {
						className: "token comment",
						children: "// 通过 styled 覆写样式"
					}),
					"\n",
					G(n.span, {
						className: "token comment",
						children: "// 可以完全继承 BaseButton 的 props 定义"
					}),
					"\n",
					G(n.span, {
						className: "token keyword module",
						children: "export"
					}),
					" ",
					G(n.span, {
						className: "token keyword",
						children: "const"
					}),
					" ",
					G(n.span, {
						className: "token maybe-class-name",
						children: "Button"
					}),
					" ",
					G(n.span, {
						className: "token operator",
						children: "="
					}),
					" ",
					G(n.span, {
						className: "token function",
						children: "styled"
					}),
					G(n.span, {
						className: "token punctuation",
						children: "("
					}),
					G(n.span, {
						className: "token maybe-class-name",
						children: "ButtonBase"
					}),
					G(n.span, {
						className: "token punctuation",
						children: ")"
					}),
					G(n.span, {
						className: "token punctuation",
						children: "("
					}),
					G(n.span, {
						className: "token punctuation",
						children: "{"
					}),
					"\n  ",
					G(n.span, {
						className: "token comment",
						children: "// ..."
					}),
					"\n",
					G(n.span, {
						className: "token punctuation",
						children: "}"
					}),
					G(n.span, {
						className: "token punctuation",
						children: ")"
					}),
					G(n.span, {
						className: "token punctuation",
						children: ";"
					}),
					"\n"
				]
			})
		}),
		"\n",
		ed(n.p, { children: [
			"除 ",
			G(n.code, { children: "styled" }),
			" 外，我们还可以使用 ",
			G(n.code, { children: "Box" }),
			" 进行快速样式定义, 通过 ",
			G(n.code, { children: "sx" }),
			" prop。 并且 ",
			G(n.code, { children: "component" }),
			" prop 支持我们随时切换 tag 或者\n组件，并且其他 props 会随着不同的 component 切换对应 props 类型约束与提示。"
		] }),
		"\n",
		G(n.p, { children: "同样的，通过 styled 创建的组件也有一样的特性。" }),
		"\n",
		ed(n.div, {
			"data-example": "",
			children: [G(n.div, {
				"data-example-container": "",
				children: G(n.codeblock785f3ec7, {})
			}), G(n.pre, {
				className: "language-tsx",
				children: ed(n.code, {
					className: "language-tsx",
					children: [
						G(n.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						ed(n.span, {
							className: "token imports",
							children: [
								G(n.span, {
									className: "token punctuation",
									children: "{"
								}),
								" component ",
								G(n.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						G(n.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						G(n.span, {
							className: "token string",
							children: "\"@innoai-tech/vuekit\""
						}),
						G(n.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						G(n.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						ed(n.span, {
							className: "token imports",
							children: [
								G(n.span, {
									className: "token punctuation",
									children: "{"
								}),
								" ",
								G(n.span, {
									className: "token maybe-class-name",
									children: "Box"
								}),
								" ",
								G(n.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						G(n.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						G(n.span, {
							className: "token string",
							children: "\"@innoai-tech/vueuikit\""
						}),
						G(n.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n",
						G(n.span, {
							className: "token keyword module",
							children: "export"
						}),
						" ",
						G(n.span, {
							className: "token keyword module",
							children: "default"
						}),
						" ",
						G(n.span, {
							className: "token function",
							children: "component"
						}),
						G(n.span, {
							className: "token punctuation",
							children: "("
						}),
						G(n.span, {
							className: "token punctuation",
							children: "("
						}),
						G(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						G(n.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						G(n.span, {
							className: "token punctuation",
							children: "("
						}),
						G(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						G(n.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						G(n.span, {
							className: "token punctuation",
							children: "("
						}),
						"\n  ",
						ed(n.span, {
							className: "token tag",
							children: [
								ed(n.span, {
									className: "token tag",
									children: [G(n.span, {
										className: "token punctuation",
										children: "<"
									}), G(n.span, {
										className: "token class-name",
										children: "Box"
									})]
								}),
								" ",
								G(n.span, {
									className: "token attr-name",
									children: "sx"
								}),
								ed(n.span, {
									className: "token script language-javascript",
									children: [
										G(n.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										G(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										G(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										" display",
										G(n.span, {
											className: "token operator",
											children: ":"
										}),
										" ",
										G(n.span, {
											className: "token string",
											children: "\"flex\""
										}),
										G(n.span, {
											className: "token punctuation",
											children: ","
										}),
										" padding",
										G(n.span, {
											className: "token operator",
											children: ":"
										}),
										" ",
										G(n.span, {
											className: "token number",
											children: "10"
										}),
										G(n.span, {
											className: "token punctuation",
											children: ","
										}),
										" containerStyle",
										G(n.span, {
											className: "token operator",
											children: ":"
										}),
										" ",
										G(n.span, {
											className: "token string",
											children: "\"sys.primary\""
										}),
										" ",
										G(n.span, {
											className: "token punctuation",
											children: "}"
										}),
										G(n.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								G(n.span, {
									className: "token punctuation",
									children: ">"
								})
							]
						}),
						G(n.span, {
							className: "token plain-text",
							children: "\n    "
						}),
						ed(n.span, {
							className: "token tag",
							children: [
								ed(n.span, {
									className: "token tag",
									children: [G(n.span, {
										className: "token punctuation",
										children: "<"
									}), G(n.span, {
										className: "token class-name",
										children: "Box"
									})]
								}),
								" ",
								G(n.span, {
									className: "token attr-name",
									children: "sx"
								}),
								ed(n.span, {
									className: "token script language-javascript",
									children: [
										G(n.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										G(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										G(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										" containerStyle",
										G(n.span, {
											className: "token operator",
											children: ":"
										}),
										" ",
										G(n.span, {
											className: "token string",
											children: "\"sys.surface-container\""
										}),
										" ",
										G(n.span, {
											className: "token punctuation",
											children: "}"
										}),
										G(n.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								" ",
								G(n.span, {
									className: "token attr-name",
									children: "component"
								}),
								ed(n.span, {
									className: "token script language-javascript",
									children: [
										G(n.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										G(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										G(n.span, {
											className: "token string",
											children: "\"button\""
										}),
										G(n.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								G(n.span, {
									className: "token punctuation",
									children: ">"
								})
							]
						}),
						G(n.span, {
							className: "token plain-text",
							children: "\n      Hi 111\n    "
						}),
						ed(n.span, {
							className: "token tag",
							children: [ed(n.span, {
								className: "token tag",
								children: [G(n.span, {
									className: "token punctuation",
									children: "</"
								}), G(n.span, {
									className: "token class-name",
									children: "Box"
								})]
							}), G(n.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						G(n.span, {
							className: "token plain-text",
							children: "\n  "
						}),
						ed(n.span, {
							className: "token tag",
							children: [ed(n.span, {
								className: "token tag",
								children: [G(n.span, {
									className: "token punctuation",
									children: "</"
								}), G(n.span, {
									className: "token class-name",
									children: "Box"
								})]
							}), G(n.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						"\n",
						G(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						G(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						G(n.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n"
					]
				})
			})]
		}),
		"\n",
		G(n.h3, { children: "CSS Selector 简写规则" }),
		"\n",
		ed(n.p, { children: [
			"另外，为了简化 ",
			G(n.code, { children: "\"&:hover\"" }),
			" ",
			G(n.code, { children: "&[aria-current='page']" }),
			" 等选择器声明，\n提供的如下的简化规则："
		] }),
		"\n",
		ed(n.ul, { children: [
			"\n",
			ed(n.li, { children: [
				"所有名称支持 ",
				G(n.em, { children: "下划线命名" }),
				" 或者 ",
				G(n.em, { children: "驼峰命名" }),
				"，最终都将转换为 ",
				G(n.em, { children: "短横小写命名" }),
				", ",
				G(n.code, { children: "=" }),
				" 用 ",
				G(n.code, { children: "__" }),
				" 替代"
			] }),
			"\n",
			ed(n.li, { children: [
				G(n.code, { children: "_*" }),
				" 一般表示",
				G(n.strong, { children: "状态" }),
				"，可用值",
				"\n",
				ed(n.ul, { children: [
					"\n",
					ed(n.li, { children: [
						G(n.code, { children: "data-*" }),
						" 和 ",
						G(n.code, { children: "aria-*" }),
						", `",
						"\n",
						ed(n.ul, { children: [
							"\n",
							ed(n.li, { children: [
								"如 ",
								G(n.code, { children: "_aria_current__page" }),
								"： 等效为 ",
								G(n.code, { children: "&[aria-current='page']" }),
								","
							] }),
							"\n"
						] }),
						"\n"
					] }),
					"\n",
					ed(n.li, { children: [
						G(n.code, { children: "before" }),
						"，",
						G(n.code, { children: "after" }),
						" 等",
						G(n.a, {
							href: "https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-elements",
							children: "伪元素"
						}),
						", 需要声明 \"$\" 表示为元素",
						"\n",
						ed(n.ul, { children: [
							"\n",
							ed(n.li, { children: [
								"如 ",
								G(n.code, { children: "_$before" }),
								"： 等效为 ",
								G(n.code, { children: "&::before" })
							] }),
							"\n"
						] }),
						"\n"
					] }),
					"\n",
					ed(n.li, { children: [
						G(n.code, { children: "hover" }),
						", ",
						G(n.code, { children: "focus" }),
						", ",
						G(n.code, { children: "active" }),
						", ",
						G(n.code, { children: "disabled" }),
						" 等",
						G(n.a, {
							href: "https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-classes",
							children: "伪类"
						}),
						"\n",
						ed(n.ul, { children: [
							"\n",
							ed(n.li, { children: [
								"如 ",
								G(n.code, { children: "_hover" }),
								"： 等效为 ",
								G(n.code, { children: "&:hover, &.hover, &[data-hover]:not([data-hover='false'])" }),
								","
							] }),
							"\n"
						] }),
						"\n"
					] }),
					"\n",
					ed(n.li, { children: [
						"以及其他自定义状态",
						"\n",
						ed(n.ul, { children: [
							"\n",
							ed(n.li, { children: [
								"如 ",
								G(n.code, { children: "_has_icon" }),
								"： 等效为 ",
								G(n.code, { children: "&[data-has-icon]:not([data-has-icon='false'])" })
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
			ed(n.li, { children: [
				G(n.code, { children: "$*" }),
				" 或 ",
				G(n.code, { children: "*$" }),
				"，一般指代",
				G(n.strong, { children: "元素节点" }),
				", 可用值为",
				"\n",
				ed(n.ul, { children: [
					"\n",
					ed(n.li, { children: [
						G(n.code, { children: "data-*" }),
						" 和 ",
						G(n.code, { children: "aria-*" }),
						", `",
						"\n",
						ed(n.ul, { children: [
							"\n",
							ed(n.li, { children: [
								"如 ",
								G(n.code, { children: "$data_icon" }),
								"： 等效为 ",
								G(n.code, { children: "&[data-icon]" })
							] }),
							"\n",
							ed(n.li, { children: [
								"如 ",
								G(n.code, { children: "$data_popper_arrow" }),
								"： 等效为 ",
								G(n.code, { children: "&[data-popper-arrow]" })
							] }),
							"\n",
							ed(n.li, { children: [
								"如 ",
								G(n.code, { children: "data_popper_placement__right$" }),
								"： 等效为 ",
								G(n.code, { children: "[data-popper-placement=right] &" })
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
function ci(e = {}) {
	let { wrapper: n } = e.components || {};
	return n ? G(n, {
		...e,
		children: G(co, { ...e })
	}) : co(e);
}
var cc = j(() => () => F(ci, { components: {
	codeblock4a44dc15: cr,
	codeblock785f3ec7: cs
} })), cl = ej(() => {
	let e = eN(!1), n = iV({ apply({ elements: e, rects: n }) {
		Object.assign(e.floating.style, { width: `${n.reference.width}px` });
	} });
	return () => G(iB, {
		isOpen: e.value,
		onClickOutside: () => e.value = !1,
		placement: "bottom-start",
		modifiers: [n],
		$content: ed(oA, {
			sx: { containerStyle: "sys.on-surface" },
			children: [
				"Popper ",
				`${e.value}`,
				"!"
			]
		}),
		children: G(oA, {
			sx: { p: 4 },
			component: "button",
			onClick: () => e.value = !e.value,
			children: "Click Trigger Popper"
		})
	});
}), cu = ej(() => {
	let e = eN(!1);
	return () => G(iB, {
		isOpen: e.value,
		$content: G(oA, {
			sx: { containerStyle: "sys.on-surface" },
			children: "Popper Content!"
		}),
		children: G(oA, {
			component: "button",
			sx: { p: 4 },
			onMouseover: () => e.value = !0,
			onMouseout: () => e.value = !1,
			children: "Popper Trigger"
		})
	});
});
let cp = r3({
	from: { opacity: 0 },
	to: { opacity: 1 },
	duration: r5.duration.md1,
	easing: r5.easing.standard.accelerate
}, {
	from: { opacity: 1 },
	to: { opacity: 0 },
	duration: r5.duration.sm4,
	easing: r5.easing.standard.decelerate
});
var cd = ej(() => {
	let e = eN(!0);
	return () => G(iB, {
		isOpen: e.value,
		$transition: ({ content: e }) => G(cp, { children: e }),
		$content: ed(oA, {
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
		children: G(oA, {
			sx: { p: 4 },
			component: "button",
			onMouseover: () => e.value = !0,
			onMouseout: () => e.value = !1,
			children: "Animated Popper"
		})
	});
});
function ch(e) {
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
	return ed(h, { children: [
		G(n.h2, { children: "Normal Popper" }),
		"\n",
		ed(n.div, {
			"data-example": "",
			children: [G(n.div, {
				"data-example-container": "",
				children: G(n.codeblockd4735e3a, {})
			}), G(n.pre, {
				className: "language-tsx",
				children: ed(n.code, {
					className: "language-tsx",
					children: [
						G(n.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						ed(n.span, {
							className: "token imports",
							children: [
								G(n.span, {
									className: "token punctuation",
									children: "{"
								}),
								" component ",
								G(n.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						G(n.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						G(n.span, {
							className: "token string",
							children: "\"@innoai-tech/vuekit\""
						}),
						G(n.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						G(n.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						ed(n.span, {
							className: "token imports",
							children: [
								G(n.span, {
									className: "token punctuation",
									children: "{"
								}),
								" ",
								G(n.span, {
									className: "token maybe-class-name",
									children: "Box"
								}),
								G(n.span, {
									className: "token punctuation",
									children: ","
								}),
								" ",
								G(n.span, {
									className: "token maybe-class-name",
									children: "Popper"
								}),
								" ",
								G(n.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						G(n.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						G(n.span, {
							className: "token string",
							children: "\"@innoai-tech/vueuikit\""
						}),
						G(n.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						G(n.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						ed(n.span, {
							className: "token imports",
							children: [
								G(n.span, {
									className: "token punctuation",
									children: "{"
								}),
								" size ",
								G(n.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						G(n.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						G(n.span, {
							className: "token string",
							children: "\"@floating-ui/dom\""
						}),
						G(n.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						G(n.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						ed(n.span, {
							className: "token imports",
							children: [
								G(n.span, {
									className: "token punctuation",
									children: "{"
								}),
								" ref ",
								G(n.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						G(n.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						G(n.span, {
							className: "token string",
							children: "\"vue\""
						}),
						G(n.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n",
						G(n.span, {
							className: "token keyword module",
							children: "export"
						}),
						" ",
						G(n.span, {
							className: "token keyword module",
							children: "default"
						}),
						" ",
						G(n.span, {
							className: "token function",
							children: "component"
						}),
						G(n.span, {
							className: "token punctuation",
							children: "("
						}),
						G(n.span, {
							className: "token punctuation",
							children: "("
						}),
						G(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						G(n.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						G(n.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n  ",
						G(n.span, {
							className: "token keyword",
							children: "const"
						}),
						" isOpen ",
						G(n.span, {
							className: "token operator",
							children: "="
						}),
						" ",
						G(n.span, {
							className: "token function",
							children: "ref"
						}),
						G(n.span, {
							className: "token punctuation",
							children: "("
						}),
						G(n.span, {
							className: "token boolean",
							children: "false"
						}),
						G(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						G(n.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n  ",
						G(n.span, {
							className: "token keyword",
							children: "const"
						}),
						" sameWidth ",
						G(n.span, {
							className: "token operator",
							children: "="
						}),
						" ",
						G(n.span, {
							className: "token function",
							children: "size"
						}),
						G(n.span, {
							className: "token punctuation",
							children: "("
						}),
						G(n.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n    ",
						G(n.span, {
							className: "token function",
							children: "apply"
						}),
						G(n.span, {
							className: "token punctuation",
							children: "("
						}),
						G(n.span, {
							className: "token punctuation",
							children: "{"
						}),
						" elements",
						G(n.span, {
							className: "token punctuation",
							children: ","
						}),
						" rects ",
						G(n.span, {
							className: "token punctuation",
							children: "}"
						}),
						G(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						G(n.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n      ",
						G(n.span, {
							className: "token known-class-name class-name",
							children: "Object"
						}),
						G(n.span, {
							className: "token punctuation",
							children: "."
						}),
						G(n.span, {
							className: "token method function property-access",
							children: "assign"
						}),
						G(n.span, {
							className: "token punctuation",
							children: "("
						}),
						"elements",
						G(n.span, {
							className: "token punctuation",
							children: "."
						}),
						G(n.span, {
							className: "token property-access",
							children: "floating"
						}),
						G(n.span, {
							className: "token punctuation",
							children: "."
						}),
						G(n.span, {
							className: "token property-access",
							children: "style"
						}),
						G(n.span, {
							className: "token punctuation",
							children: ","
						}),
						" ",
						G(n.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n        width",
						G(n.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						ed(n.span, {
							className: "token template-string",
							children: [
								G(n.span, {
									className: "token template-punctuation string",
									children: "`"
								}),
								ed(n.span, {
									className: "token interpolation",
									children: [
										G(n.span, {
											className: "token interpolation-punctuation punctuation",
											children: "${"
										}),
										"rects",
										G(n.span, {
											className: "token punctuation",
											children: "."
										}),
										G(n.span, {
											className: "token property-access",
											children: "reference"
										}),
										G(n.span, {
											className: "token punctuation",
											children: "."
										}),
										G(n.span, {
											className: "token property-access",
											children: "width"
										}),
										G(n.span, {
											className: "token interpolation-punctuation punctuation",
											children: "}"
										})
									]
								}),
								G(n.span, {
									className: "token string",
									children: "px"
								}),
								G(n.span, {
									className: "token template-punctuation string",
									children: "`"
								})
							]
						}),
						G(n.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n      ",
						G(n.span, {
							className: "token punctuation",
							children: "}"
						}),
						G(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						G(n.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n    ",
						G(n.span, {
							className: "token punctuation",
							children: "}"
						}),
						G(n.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n  ",
						G(n.span, {
							className: "token punctuation",
							children: "}"
						}),
						G(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						G(n.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n  ",
						G(n.span, {
							className: "token keyword control-flow",
							children: "return"
						}),
						" ",
						G(n.span, {
							className: "token punctuation",
							children: "("
						}),
						G(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						G(n.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						G(n.span, {
							className: "token punctuation",
							children: "("
						}),
						"\n    ",
						ed(n.span, {
							className: "token tag",
							children: [
								ed(n.span, {
									className: "token tag",
									children: [G(n.span, {
										className: "token punctuation",
										children: "<"
									}), G(n.span, {
										className: "token class-name",
										children: "Popper"
									})]
								}),
								"\n      ",
								G(n.span, {
									className: "token attr-name",
									children: "isOpen"
								}),
								ed(n.span, {
									className: "token script language-javascript",
									children: [
										G(n.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										G(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										"isOpen",
										G(n.span, {
											className: "token punctuation",
											children: "."
										}),
										G(n.span, {
											className: "token property-access",
											children: "value"
										}),
										G(n.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n      ",
								G(n.span, {
									className: "token attr-name",
									children: "onClickOutside"
								}),
								ed(n.span, {
									className: "token script language-javascript",
									children: [
										G(n.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										G(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										G(n.span, {
											className: "token punctuation",
											children: "("
										}),
										G(n.span, {
											className: "token punctuation",
											children: ")"
										}),
										" ",
										G(n.span, {
											className: "token arrow operator",
											children: "=>"
										}),
										" ",
										G(n.span, {
											className: "token punctuation",
											children: "("
										}),
										"isOpen",
										G(n.span, {
											className: "token punctuation",
											children: "."
										}),
										G(n.span, {
											className: "token property-access",
											children: "value"
										}),
										" ",
										G(n.span, {
											className: "token operator",
											children: "="
										}),
										" ",
										G(n.span, {
											className: "token boolean",
											children: "false"
										}),
										G(n.span, {
											className: "token punctuation",
											children: ")"
										}),
										G(n.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n      ",
								G(n.span, {
									className: "token attr-name",
									children: "placement"
								}),
								ed(n.span, {
									className: "token script language-javascript",
									children: [
										G(n.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										G(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										G(n.span, {
											className: "token string",
											children: "\"bottom-start\""
										}),
										G(n.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n      ",
								G(n.span, {
									className: "token attr-name",
									children: "modifiers"
								}),
								ed(n.span, {
									className: "token script language-javascript",
									children: [
										G(n.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										G(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										G(n.span, {
											className: "token punctuation",
											children: "["
										}),
										"sameWidth",
										G(n.span, {
											className: "token punctuation",
											children: "]"
										}),
										G(n.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n      ",
								G(n.span, {
									className: "token attr-name",
									children: "$content"
								}),
								ed(n.span, {
									className: "token script language-javascript",
									children: [
										G(n.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										G(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										"\n        ",
										ed(n.span, {
											className: "token tag",
											children: [
												ed(n.span, {
													className: "token tag",
													children: [G(n.span, {
														className: "token punctuation",
														children: "<"
													}), G(n.span, {
														className: "token class-name",
														children: "Box"
													})]
												}),
												" ",
												G(n.span, {
													className: "token attr-name",
													children: "sx"
												}),
												ed(n.span, {
													className: "token script language-javascript",
													children: [
														G(n.span, {
															className: "token script-punctuation punctuation",
															children: "="
														}),
														G(n.span, {
															className: "token punctuation",
															children: "{"
														}),
														G(n.span, {
															className: "token punctuation",
															children: "{"
														}),
														" containerStyle",
														G(n.span, {
															className: "token operator",
															children: ":"
														}),
														" ",
														G(n.span, {
															className: "token string",
															children: "\"sys.on-surface\""
														}),
														" ",
														G(n.span, {
															className: "token punctuation",
															children: "}"
														}),
														G(n.span, {
															className: "token punctuation",
															children: "}"
														})
													]
												}),
												G(n.span, {
													className: "token punctuation",
													children: ">"
												})
											]
										}),
										G(n.span, {
											className: "token plain-text",
											children: "\n          Popper "
										}),
										G(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										ed(n.span, {
											className: "token template-string",
											children: [
												G(n.span, {
													className: "token template-punctuation string",
													children: "`"
												}),
												ed(n.span, {
													className: "token interpolation",
													children: [
														G(n.span, {
															className: "token interpolation-punctuation punctuation",
															children: "${"
														}),
														"isOpen",
														G(n.span, {
															className: "token punctuation",
															children: "."
														}),
														G(n.span, {
															className: "token property-access",
															children: "value"
														}),
														G(n.span, {
															className: "token interpolation-punctuation punctuation",
															children: "}"
														})
													]
												}),
												G(n.span, {
													className: "token template-punctuation string",
													children: "`"
												})
											]
										}),
										G(n.span, {
											className: "token punctuation",
											children: "}"
										}),
										G(n.span, {
											className: "token plain-text",
											children: "!\n        "
										}),
										ed(n.span, {
											className: "token tag",
											children: [ed(n.span, {
												className: "token tag",
												children: [G(n.span, {
													className: "token punctuation",
													children: "</"
												}), G(n.span, {
													className: "token class-name",
													children: "Box"
												})]
											}), G(n.span, {
												className: "token punctuation",
												children: ">"
											})]
										}),
										"\n      ",
										G(n.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n    ",
								G(n.span, {
									className: "token punctuation",
									children: ">"
								})
							]
						}),
						G(n.span, {
							className: "token plain-text",
							children: "\n      "
						}),
						ed(n.span, {
							className: "token tag",
							children: [
								ed(n.span, {
									className: "token tag",
									children: [G(n.span, {
										className: "token punctuation",
										children: "<"
									}), G(n.span, {
										className: "token class-name",
										children: "Box"
									})]
								}),
								"\n        ",
								G(n.span, {
									className: "token attr-name",
									children: "sx"
								}),
								ed(n.span, {
									className: "token script language-javascript",
									children: [
										G(n.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										G(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										G(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										" p",
										G(n.span, {
											className: "token operator",
											children: ":"
										}),
										" ",
										G(n.span, {
											className: "token number",
											children: "4"
										}),
										" ",
										G(n.span, {
											className: "token punctuation",
											children: "}"
										}),
										G(n.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n        ",
								G(n.span, {
									className: "token attr-name",
									children: "component"
								}),
								ed(n.span, {
									className: "token script language-javascript",
									children: [
										G(n.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										G(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										G(n.span, {
											className: "token string",
											children: "\"button\""
										}),
										G(n.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n        ",
								G(n.span, {
									className: "token attr-name",
									children: "onClick"
								}),
								ed(n.span, {
									className: "token script language-javascript",
									children: [
										G(n.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										G(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										G(n.span, {
											className: "token punctuation",
											children: "("
										}),
										G(n.span, {
											className: "token punctuation",
											children: ")"
										}),
										" ",
										G(n.span, {
											className: "token arrow operator",
											children: "=>"
										}),
										" ",
										G(n.span, {
											className: "token punctuation",
											children: "("
										}),
										"isOpen",
										G(n.span, {
											className: "token punctuation",
											children: "."
										}),
										G(n.span, {
											className: "token property-access",
											children: "value"
										}),
										" ",
										G(n.span, {
											className: "token operator",
											children: "="
										}),
										" ",
										G(n.span, {
											className: "token operator",
											children: "!"
										}),
										"isOpen",
										G(n.span, {
											className: "token punctuation",
											children: "."
										}),
										G(n.span, {
											className: "token property-access",
											children: "value"
										}),
										G(n.span, {
											className: "token punctuation",
											children: ")"
										}),
										G(n.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n      ",
								G(n.span, {
									className: "token punctuation",
									children: ">"
								})
							]
						}),
						G(n.span, {
							className: "token plain-text",
							children: "\n        Click Trigger Popper\n      "
						}),
						ed(n.span, {
							className: "token tag",
							children: [ed(n.span, {
								className: "token tag",
								children: [G(n.span, {
									className: "token punctuation",
									children: "</"
								}), G(n.span, {
									className: "token class-name",
									children: "Box"
								})]
							}), G(n.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						G(n.span, {
							className: "token plain-text",
							children: "\n    "
						}),
						ed(n.span, {
							className: "token tag",
							children: [ed(n.span, {
								className: "token tag",
								children: [G(n.span, {
									className: "token punctuation",
									children: "</"
								}), G(n.span, {
									className: "token class-name",
									children: "Popper"
								})]
							}), G(n.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						"\n  ",
						G(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						G(n.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						G(n.span, {
							className: "token punctuation",
							children: "}"
						}),
						G(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						G(n.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n"
					]
				})
			})]
		}),
		"\n",
		G(n.h2, { children: "Hovered Popper" }),
		"\n",
		ed(n.div, {
			"data-example": "",
			children: [G(n.div, {
				"data-example-container": "",
				children: G(n.codeblocke7f6c011, {})
			}), G(n.pre, {
				className: "language-tsx",
				children: ed(n.code, {
					className: "language-tsx",
					children: [
						G(n.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						ed(n.span, {
							className: "token imports",
							children: [
								G(n.span, {
									className: "token punctuation",
									children: "{"
								}),
								" ref ",
								G(n.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						G(n.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						G(n.span, {
							className: "token string",
							children: "\"vue\""
						}),
						G(n.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						G(n.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						ed(n.span, {
							className: "token imports",
							children: [
								G(n.span, {
									className: "token punctuation",
									children: "{"
								}),
								" component ",
								G(n.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						G(n.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						G(n.span, {
							className: "token string",
							children: "\"@innoai-tech/vuekit\""
						}),
						G(n.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						G(n.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						ed(n.span, {
							className: "token imports",
							children: [
								G(n.span, {
									className: "token punctuation",
									children: "{"
								}),
								" ",
								G(n.span, {
									className: "token maybe-class-name",
									children: "Box"
								}),
								G(n.span, {
									className: "token punctuation",
									children: ","
								}),
								" ",
								G(n.span, {
									className: "token maybe-class-name",
									children: "Popper"
								}),
								" ",
								G(n.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						G(n.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						G(n.span, {
							className: "token string",
							children: "\"@innoai-tech/vueuikit\""
						}),
						G(n.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n",
						G(n.span, {
							className: "token keyword module",
							children: "export"
						}),
						" ",
						G(n.span, {
							className: "token keyword module",
							children: "default"
						}),
						" ",
						G(n.span, {
							className: "token function",
							children: "component"
						}),
						G(n.span, {
							className: "token punctuation",
							children: "("
						}),
						G(n.span, {
							className: "token punctuation",
							children: "("
						}),
						G(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						G(n.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						G(n.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n  ",
						G(n.span, {
							className: "token keyword",
							children: "const"
						}),
						" isOpen ",
						G(n.span, {
							className: "token operator",
							children: "="
						}),
						" ",
						G(n.span, {
							className: "token function",
							children: "ref"
						}),
						G(n.span, {
							className: "token punctuation",
							children: "("
						}),
						G(n.span, {
							className: "token boolean",
							children: "false"
						}),
						G(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						G(n.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n  ",
						G(n.span, {
							className: "token keyword control-flow",
							children: "return"
						}),
						" ",
						G(n.span, {
							className: "token punctuation",
							children: "("
						}),
						G(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						G(n.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						G(n.span, {
							className: "token punctuation",
							children: "("
						}),
						"\n    ",
						ed(n.span, {
							className: "token tag",
							children: [
								ed(n.span, {
									className: "token tag",
									children: [G(n.span, {
										className: "token punctuation",
										children: "<"
									}), G(n.span, {
										className: "token class-name",
										children: "Popper"
									})]
								}),
								"\n      ",
								G(n.span, {
									className: "token attr-name",
									children: "isOpen"
								}),
								ed(n.span, {
									className: "token script language-javascript",
									children: [
										G(n.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										G(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										"isOpen",
										G(n.span, {
											className: "token punctuation",
											children: "."
										}),
										G(n.span, {
											className: "token property-access",
											children: "value"
										}),
										G(n.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n      ",
								G(n.span, {
									className: "token attr-name",
									children: "$content"
								}),
								ed(n.span, {
									className: "token script language-javascript",
									children: [
										G(n.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										G(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										"\n        ",
										ed(n.span, {
											className: "token tag",
											children: [
												ed(n.span, {
													className: "token tag",
													children: [G(n.span, {
														className: "token punctuation",
														children: "<"
													}), G(n.span, {
														className: "token class-name",
														children: "Box"
													})]
												}),
												" ",
												G(n.span, {
													className: "token attr-name",
													children: "sx"
												}),
												ed(n.span, {
													className: "token script language-javascript",
													children: [
														G(n.span, {
															className: "token script-punctuation punctuation",
															children: "="
														}),
														G(n.span, {
															className: "token punctuation",
															children: "{"
														}),
														G(n.span, {
															className: "token punctuation",
															children: "{"
														}),
														" containerStyle",
														G(n.span, {
															className: "token operator",
															children: ":"
														}),
														" ",
														G(n.span, {
															className: "token string",
															children: "\"sys.on-surface\""
														}),
														" ",
														G(n.span, {
															className: "token punctuation",
															children: "}"
														}),
														G(n.span, {
															className: "token punctuation",
															children: "}"
														})
													]
												}),
												G(n.span, {
													className: "token punctuation",
													children: ">"
												})
											]
										}),
										G(n.span, {
											className: "token plain-text",
											children: "Popper Content!"
										}),
										ed(n.span, {
											className: "token tag",
											children: [ed(n.span, {
												className: "token tag",
												children: [G(n.span, {
													className: "token punctuation",
													children: "</"
												}), G(n.span, {
													className: "token class-name",
													children: "Box"
												})]
											}), G(n.span, {
												className: "token punctuation",
												children: ">"
											})]
										}),
										"\n      ",
										G(n.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n    ",
								G(n.span, {
									className: "token punctuation",
									children: ">"
								})
							]
						}),
						G(n.span, {
							className: "token plain-text",
							children: "\n      "
						}),
						ed(n.span, {
							className: "token tag",
							children: [
								ed(n.span, {
									className: "token tag",
									children: [G(n.span, {
										className: "token punctuation",
										children: "<"
									}), G(n.span, {
										className: "token class-name",
										children: "Box"
									})]
								}),
								"\n        ",
								G(n.span, {
									className: "token attr-name",
									children: "component"
								}),
								ed(n.span, {
									className: "token script language-javascript",
									children: [
										G(n.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										G(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										G(n.span, {
											className: "token string",
											children: "\"button\""
										}),
										G(n.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n        ",
								G(n.span, {
									className: "token attr-name",
									children: "sx"
								}),
								ed(n.span, {
									className: "token script language-javascript",
									children: [
										G(n.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										G(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										G(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										" p",
										G(n.span, {
											className: "token operator",
											children: ":"
										}),
										" ",
										G(n.span, {
											className: "token number",
											children: "4"
										}),
										" ",
										G(n.span, {
											className: "token punctuation",
											children: "}"
										}),
										G(n.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n        ",
								G(n.span, {
									className: "token attr-name",
									children: "onMouseover"
								}),
								ed(n.span, {
									className: "token script language-javascript",
									children: [
										G(n.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										G(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										G(n.span, {
											className: "token punctuation",
											children: "("
										}),
										G(n.span, {
											className: "token punctuation",
											children: ")"
										}),
										" ",
										G(n.span, {
											className: "token arrow operator",
											children: "=>"
										}),
										" ",
										G(n.span, {
											className: "token punctuation",
											children: "("
										}),
										"isOpen",
										G(n.span, {
											className: "token punctuation",
											children: "."
										}),
										G(n.span, {
											className: "token property-access",
											children: "value"
										}),
										" ",
										G(n.span, {
											className: "token operator",
											children: "="
										}),
										" ",
										G(n.span, {
											className: "token boolean",
											children: "true"
										}),
										G(n.span, {
											className: "token punctuation",
											children: ")"
										}),
										G(n.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n        ",
								G(n.span, {
									className: "token attr-name",
									children: "onMouseout"
								}),
								ed(n.span, {
									className: "token script language-javascript",
									children: [
										G(n.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										G(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										G(n.span, {
											className: "token punctuation",
											children: "("
										}),
										G(n.span, {
											className: "token punctuation",
											children: ")"
										}),
										" ",
										G(n.span, {
											className: "token arrow operator",
											children: "=>"
										}),
										" ",
										G(n.span, {
											className: "token punctuation",
											children: "("
										}),
										"isOpen",
										G(n.span, {
											className: "token punctuation",
											children: "."
										}),
										G(n.span, {
											className: "token property-access",
											children: "value"
										}),
										" ",
										G(n.span, {
											className: "token operator",
											children: "="
										}),
										" ",
										G(n.span, {
											className: "token boolean",
											children: "false"
										}),
										G(n.span, {
											className: "token punctuation",
											children: ")"
										}),
										G(n.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n      ",
								G(n.span, {
									className: "token punctuation",
									children: ">"
								})
							]
						}),
						G(n.span, {
							className: "token plain-text",
							children: "\n        Popper Trigger\n      "
						}),
						ed(n.span, {
							className: "token tag",
							children: [ed(n.span, {
								className: "token tag",
								children: [G(n.span, {
									className: "token punctuation",
									children: "</"
								}), G(n.span, {
									className: "token class-name",
									children: "Box"
								})]
							}), G(n.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						G(n.span, {
							className: "token plain-text",
							children: "\n    "
						}),
						ed(n.span, {
							className: "token tag",
							children: [ed(n.span, {
								className: "token tag",
								children: [G(n.span, {
									className: "token punctuation",
									children: "</"
								}), G(n.span, {
									className: "token class-name",
									children: "Popper"
								})]
							}), G(n.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						"\n  ",
						G(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						G(n.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						G(n.span, {
							className: "token punctuation",
							children: "}"
						}),
						G(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						G(n.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n"
					]
				})
			})]
		}),
		"\n",
		G(n.h2, { children: "Animated" }),
		"\n",
		ed(n.div, {
			"data-example": "",
			children: [G(n.div, {
				"data-example-container": "",
				children: G(n.codeblock4a44dc15, {})
			}), G(n.pre, {
				className: "language-tsx",
				children: ed(n.code, {
					className: "language-tsx",
					children: [
						G(n.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						ed(n.span, {
							className: "token imports",
							children: [
								G(n.span, {
									className: "token punctuation",
									children: "{"
								}),
								" ref ",
								G(n.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						G(n.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						G(n.span, {
							className: "token string",
							children: "\"vue\""
						}),
						G(n.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						G(n.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						ed(n.span, {
							className: "token imports",
							children: [
								G(n.span, {
									className: "token punctuation",
									children: "{"
								}),
								" component ",
								G(n.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						G(n.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						G(n.span, {
							className: "token string",
							children: "\"@innoai-tech/vuekit\""
						}),
						G(n.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						G(n.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						ed(n.span, {
							className: "token imports",
							children: [
								G(n.span, {
									className: "token punctuation",
									children: "{"
								}),
								"\n  ",
								G(n.span, {
									className: "token maybe-class-name",
									children: "Box"
								}),
								G(n.span, {
									className: "token punctuation",
									children: ","
								}),
								"\n  defineTransition",
								G(n.span, {
									className: "token punctuation",
									children: ","
								}),
								"\n  ",
								G(n.span, {
									className: "token maybe-class-name",
									children: "Popper"
								}),
								G(n.span, {
									className: "token punctuation",
									children: ","
								}),
								"\n  transition",
								G(n.span, {
									className: "token punctuation",
									children: ","
								}),
								"\n  triangle",
								G(n.span, {
									className: "token punctuation",
									children: ","
								}),
								"\n",
								G(n.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						G(n.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						G(n.span, {
							className: "token string",
							children: "\"@innoai-tech/vueuikit\""
						}),
						G(n.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n",
						G(n.span, {
							className: "token keyword module",
							children: "export"
						}),
						" ",
						G(n.span, {
							className: "token keyword",
							children: "const"
						}),
						" ",
						G(n.span, {
							className: "token maybe-class-name",
							children: "FadeInOutTransition"
						}),
						" ",
						G(n.span, {
							className: "token operator",
							children: "="
						}),
						" ",
						G(n.span, {
							className: "token function",
							children: "defineTransition"
						}),
						G(n.span, {
							className: "token punctuation",
							children: "("
						}),
						"\n  ",
						G(n.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n    ",
						G(n.span, {
							className: "token keyword module",
							children: "from"
						}),
						G(n.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						G(n.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n      opacity",
						G(n.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						G(n.span, {
							className: "token number",
							children: "0"
						}),
						G(n.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n    ",
						G(n.span, {
							className: "token punctuation",
							children: "}"
						}),
						G(n.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n    to",
						G(n.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						G(n.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n      opacity",
						G(n.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						G(n.span, {
							className: "token number",
							children: "1"
						}),
						G(n.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n    ",
						G(n.span, {
							className: "token punctuation",
							children: "}"
						}),
						G(n.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n    duration",
						G(n.span, {
							className: "token operator",
							children: ":"
						}),
						" transition",
						G(n.span, {
							className: "token punctuation",
							children: "."
						}),
						G(n.span, {
							className: "token property-access",
							children: "duration"
						}),
						G(n.span, {
							className: "token punctuation",
							children: "."
						}),
						G(n.span, {
							className: "token property-access",
							children: "md1"
						}),
						G(n.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n    easing",
						G(n.span, {
							className: "token operator",
							children: ":"
						}),
						" transition",
						G(n.span, {
							className: "token punctuation",
							children: "."
						}),
						G(n.span, {
							className: "token property-access",
							children: "easing"
						}),
						G(n.span, {
							className: "token punctuation",
							children: "."
						}),
						G(n.span, {
							className: "token property-access",
							children: "standard"
						}),
						G(n.span, {
							className: "token punctuation",
							children: "."
						}),
						G(n.span, {
							className: "token property-access",
							children: "accelerate"
						}),
						G(n.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n  ",
						G(n.span, {
							className: "token punctuation",
							children: "}"
						}),
						G(n.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n  ",
						G(n.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n    ",
						G(n.span, {
							className: "token keyword module",
							children: "from"
						}),
						G(n.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						G(n.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n      opacity",
						G(n.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						G(n.span, {
							className: "token number",
							children: "1"
						}),
						G(n.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n    ",
						G(n.span, {
							className: "token punctuation",
							children: "}"
						}),
						G(n.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n    to",
						G(n.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						G(n.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n      opacity",
						G(n.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						G(n.span, {
							className: "token number",
							children: "0"
						}),
						G(n.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n    ",
						G(n.span, {
							className: "token punctuation",
							children: "}"
						}),
						G(n.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n    duration",
						G(n.span, {
							className: "token operator",
							children: ":"
						}),
						" transition",
						G(n.span, {
							className: "token punctuation",
							children: "."
						}),
						G(n.span, {
							className: "token property-access",
							children: "duration"
						}),
						G(n.span, {
							className: "token punctuation",
							children: "."
						}),
						G(n.span, {
							className: "token property-access",
							children: "sm4"
						}),
						G(n.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n    easing",
						G(n.span, {
							className: "token operator",
							children: ":"
						}),
						" transition",
						G(n.span, {
							className: "token punctuation",
							children: "."
						}),
						G(n.span, {
							className: "token property-access",
							children: "easing"
						}),
						G(n.span, {
							className: "token punctuation",
							children: "."
						}),
						G(n.span, {
							className: "token property-access",
							children: "standard"
						}),
						G(n.span, {
							className: "token punctuation",
							children: "."
						}),
						G(n.span, {
							className: "token property-access",
							children: "decelerate"
						}),
						G(n.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n  ",
						G(n.span, {
							className: "token punctuation",
							children: "}"
						}),
						G(n.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n",
						G(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						G(n.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n",
						G(n.span, {
							className: "token keyword module",
							children: "export"
						}),
						" ",
						G(n.span, {
							className: "token keyword module",
							children: "default"
						}),
						" ",
						G(n.span, {
							className: "token function",
							children: "component"
						}),
						G(n.span, {
							className: "token punctuation",
							children: "("
						}),
						G(n.span, {
							className: "token punctuation",
							children: "("
						}),
						G(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						G(n.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						G(n.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n  ",
						G(n.span, {
							className: "token keyword",
							children: "const"
						}),
						" isOpen ",
						G(n.span, {
							className: "token operator",
							children: "="
						}),
						" ",
						G(n.span, {
							className: "token function",
							children: "ref"
						}),
						G(n.span, {
							className: "token punctuation",
							children: "("
						}),
						G(n.span, {
							className: "token boolean",
							children: "true"
						}),
						G(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						G(n.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n  ",
						G(n.span, {
							className: "token keyword control-flow",
							children: "return"
						}),
						" ",
						G(n.span, {
							className: "token punctuation",
							children: "("
						}),
						G(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						G(n.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						G(n.span, {
							className: "token punctuation",
							children: "("
						}),
						"\n    ",
						ed(n.span, {
							className: "token tag",
							children: [
								ed(n.span, {
									className: "token tag",
									children: [G(n.span, {
										className: "token punctuation",
										children: "<"
									}), G(n.span, {
										className: "token class-name",
										children: "Popper"
									})]
								}),
								"\n      ",
								G(n.span, {
									className: "token attr-name",
									children: "isOpen"
								}),
								ed(n.span, {
									className: "token script language-javascript",
									children: [
										G(n.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										G(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										"isOpen",
										G(n.span, {
											className: "token punctuation",
											children: "."
										}),
										G(n.span, {
											className: "token property-access",
											children: "value"
										}),
										G(n.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n      ",
								G(n.span, {
									className: "token attr-name",
									children: "$transition"
								}),
								ed(n.span, {
									className: "token script language-javascript",
									children: [
										G(n.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										G(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										G(n.span, {
											className: "token punctuation",
											children: "("
										}),
										G(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										" content ",
										G(n.span, {
											className: "token punctuation",
											children: "}"
										}),
										G(n.span, {
											className: "token punctuation",
											children: ")"
										}),
										" ",
										G(n.span, {
											className: "token arrow operator",
											children: "=>"
										}),
										" ",
										G(n.span, {
											className: "token punctuation",
											children: "("
										}),
										"\n        ",
										ed(n.span, {
											className: "token tag",
											children: [ed(n.span, {
												className: "token tag",
												children: [G(n.span, {
													className: "token punctuation",
													children: "<"
												}), G(n.span, {
													className: "token class-name",
													children: "FadeInOutTransition"
												})]
											}), G(n.span, {
												className: "token punctuation",
												children: ">"
											})]
										}),
										G(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										"content",
										G(n.span, {
											className: "token punctuation",
											children: "}"
										}),
										ed(n.span, {
											className: "token tag",
											children: [ed(n.span, {
												className: "token tag",
												children: [G(n.span, {
													className: "token punctuation",
													children: "</"
												}), G(n.span, {
													className: "token class-name",
													children: "FadeInOutTransition"
												})]
											}), G(n.span, {
												className: "token punctuation",
												children: ">"
											})]
										}),
										"\n      ",
										G(n.span, {
											className: "token punctuation",
											children: ")"
										}),
										G(n.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n      ",
								G(n.span, {
									className: "token attr-name",
									children: "$content"
								}),
								ed(n.span, {
									className: "token script language-javascript",
									children: [
										G(n.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										G(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										"\n        ",
										ed(n.span, {
											className: "token tag",
											children: [
												ed(n.span, {
													className: "token tag",
													children: [G(n.span, {
														className: "token punctuation",
														children: "<"
													}), G(n.span, {
														className: "token class-name",
														children: "Box"
													})]
												}),
												"\n          ",
												G(n.span, {
													className: "token attr-name",
													children: "sx"
												}),
												ed(n.span, {
													className: "token script language-javascript",
													children: [
														G(n.span, {
															className: "token script-punctuation punctuation",
															children: "="
														}),
														G(n.span, {
															className: "token punctuation",
															children: "{"
														}),
														G(n.span, {
															className: "token punctuation",
															children: "{"
														}),
														"\n            containerStyle",
														G(n.span, {
															className: "token operator",
															children: ":"
														}),
														" ",
														G(n.span, {
															className: "token string",
															children: "\"sys.on-surface\""
														}),
														G(n.span, {
															className: "token punctuation",
															children: ","
														}),
														"\n            shadow",
														G(n.span, {
															className: "token operator",
															children: ":"
														}),
														" ",
														G(n.span, {
															className: "token string",
															children: "\"2\""
														}),
														G(n.span, {
															className: "token punctuation",
															children: ","
														}),
														"\n            py",
														G(n.span, {
															className: "token operator",
															children: ":"
														}),
														" ",
														G(n.span, {
															className: "token number",
															children: "2"
														}),
														G(n.span, {
															className: "token punctuation",
															children: ","
														}),
														"\n            px",
														G(n.span, {
															className: "token operator",
															children: ":"
														}),
														" ",
														G(n.span, {
															className: "token number",
															children: "4"
														}),
														G(n.span, {
															className: "token punctuation",
															children: ","
														}),
														"\n            rounded",
														G(n.span, {
															className: "token operator",
															children: ":"
														}),
														" ",
														G(n.span, {
															className: "token string",
															children: "\"sm\""
														}),
														G(n.span, {
															className: "token punctuation",
															children: ","
														}),
														"\n          ",
														G(n.span, {
															className: "token punctuation",
															children: "}"
														}),
														G(n.span, {
															className: "token punctuation",
															children: "}"
														})
													]
												}),
												"\n        ",
												G(n.span, {
													className: "token punctuation",
													children: ">"
												})
											]
										}),
										G(n.span, {
											className: "token plain-text",
											children: "\n          Popper "
										}),
										G(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										ed(n.span, {
											className: "token template-string",
											children: [
												G(n.span, {
													className: "token template-punctuation string",
													children: "`"
												}),
												ed(n.span, {
													className: "token interpolation",
													children: [
														G(n.span, {
															className: "token interpolation-punctuation punctuation",
															children: "${"
														}),
														"isOpen",
														G(n.span, {
															className: "token punctuation",
															children: "."
														}),
														G(n.span, {
															className: "token property-access",
															children: "value"
														}),
														G(n.span, {
															className: "token interpolation-punctuation punctuation",
															children: "}"
														})
													]
												}),
												G(n.span, {
													className: "token template-punctuation string",
													children: "`"
												})
											]
										}),
										G(n.span, {
											className: "token punctuation",
											children: "}"
										}),
										G(n.span, {
											className: "token plain-text",
											children: "!\n        "
										}),
										ed(n.span, {
											className: "token tag",
											children: [ed(n.span, {
												className: "token tag",
												children: [G(n.span, {
													className: "token punctuation",
													children: "</"
												}), G(n.span, {
													className: "token class-name",
													children: "Box"
												})]
											}), G(n.span, {
												className: "token punctuation",
												children: ">"
											})]
										}),
										"\n      ",
										G(n.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n    ",
								G(n.span, {
									className: "token punctuation",
									children: ">"
								})
							]
						}),
						G(n.span, {
							className: "token plain-text",
							children: "\n      "
						}),
						ed(n.span, {
							className: "token tag",
							children: [
								ed(n.span, {
									className: "token tag",
									children: [G(n.span, {
										className: "token punctuation",
										children: "<"
									}), G(n.span, {
										className: "token class-name",
										children: "Box"
									})]
								}),
								"\n        ",
								G(n.span, {
									className: "token attr-name",
									children: "sx"
								}),
								ed(n.span, {
									className: "token script language-javascript",
									children: [
										G(n.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										G(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										G(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										" p",
										G(n.span, {
											className: "token operator",
											children: ":"
										}),
										" ",
										G(n.span, {
											className: "token number",
											children: "4"
										}),
										" ",
										G(n.span, {
											className: "token punctuation",
											children: "}"
										}),
										G(n.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n        ",
								G(n.span, {
									className: "token attr-name",
									children: "component"
								}),
								ed(n.span, {
									className: "token script language-javascript",
									children: [
										G(n.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										G(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										G(n.span, {
											className: "token string",
											children: "\"button\""
										}),
										G(n.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n        ",
								G(n.span, {
									className: "token attr-name",
									children: "onMouseover"
								}),
								ed(n.span, {
									className: "token script language-javascript",
									children: [
										G(n.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										G(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										G(n.span, {
											className: "token punctuation",
											children: "("
										}),
										G(n.span, {
											className: "token punctuation",
											children: ")"
										}),
										" ",
										G(n.span, {
											className: "token arrow operator",
											children: "=>"
										}),
										" ",
										G(n.span, {
											className: "token punctuation",
											children: "("
										}),
										"isOpen",
										G(n.span, {
											className: "token punctuation",
											children: "."
										}),
										G(n.span, {
											className: "token property-access",
											children: "value"
										}),
										" ",
										G(n.span, {
											className: "token operator",
											children: "="
										}),
										" ",
										G(n.span, {
											className: "token boolean",
											children: "true"
										}),
										G(n.span, {
											className: "token punctuation",
											children: ")"
										}),
										G(n.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n        ",
								G(n.span, {
									className: "token attr-name",
									children: "onMouseout"
								}),
								ed(n.span, {
									className: "token script language-javascript",
									children: [
										G(n.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										G(n.span, {
											className: "token punctuation",
											children: "{"
										}),
										G(n.span, {
											className: "token punctuation",
											children: "("
										}),
										G(n.span, {
											className: "token punctuation",
											children: ")"
										}),
										" ",
										G(n.span, {
											className: "token arrow operator",
											children: "=>"
										}),
										" ",
										G(n.span, {
											className: "token punctuation",
											children: "("
										}),
										"isOpen",
										G(n.span, {
											className: "token punctuation",
											children: "."
										}),
										G(n.span, {
											className: "token property-access",
											children: "value"
										}),
										" ",
										G(n.span, {
											className: "token operator",
											children: "="
										}),
										" ",
										G(n.span, {
											className: "token boolean",
											children: "false"
										}),
										G(n.span, {
											className: "token punctuation",
											children: ")"
										}),
										G(n.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n      ",
								G(n.span, {
									className: "token punctuation",
									children: ">"
								})
							]
						}),
						G(n.span, {
							className: "token plain-text",
							children: "\n        Animated Popper\n      "
						}),
						ed(n.span, {
							className: "token tag",
							children: [ed(n.span, {
								className: "token tag",
								children: [G(n.span, {
									className: "token punctuation",
									children: "</"
								}), G(n.span, {
									className: "token class-name",
									children: "Box"
								})]
							}), G(n.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						G(n.span, {
							className: "token plain-text",
							children: "\n    "
						}),
						ed(n.span, {
							className: "token tag",
							children: [ed(n.span, {
								className: "token tag",
								children: [G(n.span, {
									className: "token punctuation",
									children: "</"
								}), G(n.span, {
									className: "token class-name",
									children: "Popper"
								})]
							}), G(n.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						"\n  ",
						G(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						G(n.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						G(n.span, {
							className: "token punctuation",
							children: "}"
						}),
						G(n.span, {
							className: "token punctuation",
							children: ")"
						}),
						G(n.span, {
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
function cm(e = {}) {
	let { wrapper: n } = e.components || {};
	return n ? G(n, {
		...e,
		children: G(ch, { ...e })
	}) : ch(e);
}
var cf = j(() => () => F(cm, { components: {
	codeblockd4735e3a: cl,
	codeblocke7f6c011: cu,
	codeblock4a44dc15: cd
} })), cg = ej(() => {
	let e = sU.use();
	return () => G(h, { children: G(oA, {
		sx: {
			height: "40vh",
			display: "flex",
			flexDirection: "column",
			flexWrap: "wrap",
			justifyContent: "space-between",
			gap: 8
		},
		children: e.token.textStyle.tokens.map((e) => ed(oA, {
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
				G(oA, {
					sx: { textStyle: "sys.label-small" },
					children: e
				}),
				G(oA, { sx: { flex: 1 } }),
				G(oA, {
					sx: { py: 16 },
					children: "中文测试"
				})
			]
		}, e))
	}) });
});
export { oL as A, r1 as B, iQ as C, iB as D, i2 as E, sU as F, tp as G, rQ as H, sW as I, tr as J, tu as K, sV as L, o_ as M, oA as N, iV as O, oS as P, r3 as R, iJ as S, i1 as T, am as U, rJ as V, tj as W, nd as Y, iG as _, cn as a, iK as b, i6 as c, iF as d, iE as f, iq as g, iU as h, ct as i, oT as j, oD as k, i5 as l, iz as m, cf as n, ce as o, iW as p, to as q, cc as r, i9 as s, cg as t, i4 as u, iY as v, i0 as w, iZ as x, iX as y, r5 as z };
