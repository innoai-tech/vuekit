import { _ as e, a as t, d as a, f as r, g as s, h as l, m as i, t as o, u as c } from "./vendor-rxjs.DKDKEK-M.chunk.js";
function u(e) {
	var t;
	return null != e && "function" != typeof e && Number.isSafeInteger(t = e.length) && t >= 0;
}
function p(e) {
	return e;
}
function d(e) {
	return "__proto__" === e;
}
function f(e) {
	switch (typeof e) {
		case "number":
		case "symbol": return !1;
		case "string": return e.includes(".") || e.includes("[") || e.includes("]");
	}
}
function h(e) {
	return "string" == typeof e || "symbol" == typeof e ? e : Object.is(e?.valueOf?.(), -0) ? "-0" : String(e);
}
function m(e) {
	if (null == e) return "";
	if ("string" == typeof e) return e;
	if (Array.isArray(e)) return e.map(m).join(",");
	let t = String(e);
	return "0" === t && Object.is(Number(e), -0) ? "-0" : t;
}
function y(e) {
	if (Array.isArray(e)) return e.map(h);
	if ("symbol" == typeof e) return [e];
	e = m(e);
	let t = [], a = e.length;
	if (0 === a) return t;
	let r = 0, s = "", l = "", i = !1;
	for (46 === e.charCodeAt(0) && (t.push(""), r++); r < a;) {
		let o = e[r];
		l ? "\\" === o && r + 1 < a ? s += e[++r] : o === l ? l = "" : s += o : i ? "\"" === o || "'" === o ? l = o : "]" === o ? (i = !1, t.push(s), s = "") : s += o : "[" === o ? (i = !0, s && (t.push(s), s = "")) : "." === o ? s && (t.push(s), s = "") : s += o, r++;
	}
	return s && t.push(s), t;
}
function g(e, t, a) {
	if (null == e) return a;
	switch (typeof t) {
		case "string": {
			if (d(t)) return a;
			let r = e[t];
			if (void 0 === r) if (f(t)) return g(e, y(t), a);
			else return a;
			return r;
		}
		case "number":
		case "symbol": {
			"number" == typeof t && (t = h(t));
			let r = e[t];
			if (void 0 === r) return a;
			return r;
		}
		default: {
			if (Array.isArray(t)) {
				var r = e, s = t, l = a;
				if (0 === s.length) return l;
				let i = r;
				for (let e = 0; e < s.length; e++) {
					if (null == i || d(s[e])) return l;
					i = i[s[e]];
				}
				return void 0 === i ? l : i;
			}
			if (d(t = Object.is(t?.valueOf(), -0) ? "-0" : String(t))) return a;
			let i = e[t];
			if (void 0 === i) return a;
			return i;
		}
	}
}
function k(e) {
	return function(t) {
		return g(t, e);
	};
}
function N(e) {
	return null !== e && ("object" == typeof e || "function" == typeof e);
}
function b(e) {
	return null == e || "object" != typeof e && "function" != typeof e;
}
function _(e, t) {
	return e === t || Number.isNaN(e) && Number.isNaN(t);
}
function w(e, t, a, r) {
	if (t === e) return !0;
	switch (typeof t) {
		case "object": return function(e, t, a, r) {
			if (null == t) return !0;
			if (Array.isArray(t)) return O(e, t, a, r);
			if (t instanceof Map) {
				var s, l, i, o, c = e, u = t, p = a, d = r;
				if (0 === u.size) return !0;
				if (!(c instanceof Map)) return !1;
				for (let [e, t] of u.entries()) if (!1 === p(c.get(e), t, e, c, u, d)) return !1;
				return !0;
			}
			if (t instanceof Set) return s = e, l = t, i = a, o = r, 0 === l.size || s instanceof Set && O([...s], [...l], i, o);
			let f = Object.keys(t);
			if (null == e) return 0 === f.length;
			if (0 === f.length) return !0;
			if (r && r.has(t)) return r.get(t) === e;
			r && r.set(t, e);
			try {
				for (let s = 0; s < f.length; s++) {
					let l = f[s];
					if (!b(e) && !(l in e) || void 0 === t[l] && void 0 !== e[l] || null === t[l] && null !== e[l] || !a(e[l], t[l], l, e, t, r)) return !1;
				}
				return !0;
			} finally {
				r && r.delete(t);
			}
		}(e, t, a, r);
		case "function":
			if (Object.keys(t).length > 0) return w(e, { ...t }, a, r);
			return _(e, t);
		default:
			if (!N(e)) return _(e, t);
			if ("string" == typeof t) return "" === t;
			return !0;
	}
}
function O(e, t, a, r) {
	if (0 === t.length) return !0;
	if (!Array.isArray(e)) return !1;
	let s = /* @__PURE__ */ new Set();
	for (let l = 0; l < t.length; l++) {
		let i = t[l], o = !1;
		for (let c = 0; c < e.length; c++) {
			if (s.has(c)) continue;
			let u = e[c], p = !1;
			if (a(u, i, l, e, t, r) && (p = !0), p) {
				s.add(c), o = !0;
				break;
			}
		}
		if (!o) return !1;
	}
	return !0;
}
function x(e, t) {
	var a;
	return "function" != typeof (a = () => void 0) ? x(e, t) : w(e, t, function e(t, r, s, l, i, o) {
		let c = a(t, r, s, l, i, o);
		return void 0 !== c ? !!c : w(t, r, e, o);
	}, /* @__PURE__ */ new Map());
}
function j(e) {
	return Object.getOwnPropertySymbols(e).filter((t) => Object.prototype.propertyIsEnumerable.call(e, t));
}
function S(e) {
	return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e);
}
var P, A, E, M, C, R, T, $, F, V, L, D, I, B, U, W, z, K, q, H = "[object String]", G = "[object Number]", J = "[object Boolean]", X = "[object Arguments]";
function Z(e) {
	return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Q(e, t, a, r = /* @__PURE__ */ new Map(), s) {
	let l = s?.(e, t, a, r);
	if (void 0 !== l) return l;
	if (b(e)) return e;
	if (r.has(e)) return r.get(e);
	if (Array.isArray(e)) {
		let t = Array(e.length);
		r.set(e, t);
		for (let l = 0; l < e.length; l++) t[l] = Q(e[l], l, a, r, s);
		return Object.hasOwn(e, "index") && (t.index = e.index), Object.hasOwn(e, "input") && (t.input = e.input), t;
	}
	if (e instanceof Date) return new Date(e.getTime());
	if (e instanceof RegExp) {
		let t = new RegExp(e.source, e.flags);
		return t.lastIndex = e.lastIndex, t;
	}
	if (e instanceof Map) {
		let t = /* @__PURE__ */ new Map();
		for (let [l, i] of (r.set(e, t), e)) t.set(l, Q(i, l, a, r, s));
		return t;
	}
	if (e instanceof Set) {
		let t = /* @__PURE__ */ new Set();
		for (let l of (r.set(e, t), e)) t.add(Q(l, void 0, a, r, s));
		return t;
	}
	if ("undefined" != typeof Buffer && Buffer.isBuffer(e)) return e.subarray();
	if (Z(e)) {
		let t = new (Object.getPrototypeOf(e)).constructor(e.length);
		r.set(e, t);
		for (let l = 0; l < e.length; l++) t[l] = Q(e[l], l, a, r, s);
		return t;
	}
	if (e instanceof ArrayBuffer || "undefined" != typeof SharedArrayBuffer && e instanceof SharedArrayBuffer) return e.slice(0);
	if (e instanceof DataView) {
		let t = new DataView(e.buffer.slice(0), e.byteOffset, e.byteLength);
		return r.set(e, t), Y(t, e, a, r, s), t;
	}
	if ("undefined" != typeof File && e instanceof File) {
		let t = new File([e], e.name, { type: e.type });
		return r.set(e, t), Y(t, e, a, r, s), t;
	}
	if ("undefined" != typeof Blob && e instanceof Blob) {
		let t = new Blob([e], { type: e.type });
		return r.set(e, t), Y(t, e, a, r, s), t;
	}
	if (e instanceof Error) {
		let t = new e.constructor();
		return r.set(e, t), t.message = e.message, t.name = e.name, t.stack = e.stack, t.cause = e.cause, Y(t, e, a, r, s), t;
	}
	if (e instanceof Boolean) {
		let t = new Boolean(e.valueOf());
		return r.set(e, t), Y(t, e, a, r, s), t;
	}
	if (e instanceof Number) {
		let t = new Number(e.valueOf());
		return r.set(e, t), Y(t, e, a, r, s), t;
	}
	if (e instanceof String) {
		let t = new String(e.valueOf());
		return r.set(e, t), Y(t, e, a, r, s), t;
	}
	if ("object" == typeof e && function(e) {
		switch (S(e)) {
			case X:
			case "[object Array]":
			case "[object ArrayBuffer]":
			case "[object DataView]":
			case J:
			case "[object Date]":
			case "[object Float32Array]":
			case "[object Float64Array]":
			case "[object Int8Array]":
			case "[object Int16Array]":
			case "[object Int32Array]":
			case "[object Map]":
			case G:
			case "[object Object]":
			case "[object RegExp]":
			case "[object Set]":
			case H:
			case "[object Symbol]":
			case "[object Uint8Array]":
			case "[object Uint8ClampedArray]":
			case "[object Uint16Array]":
			case "[object Uint32Array]": return !0;
			default: return !1;
		}
	}(e)) {
		let t = Object.create(Object.getPrototypeOf(e));
		return r.set(e, t), Y(t, e, a, r, s), t;
	}
	return e;
}
function Y(e, t, a = e, r, s) {
	let l = [...Object.keys(t), ...j(t)];
	for (let i = 0; i < l.length; i++) {
		let o = l[i], c = Object.getOwnPropertyDescriptor(e, o);
		(null == c || c.writable) && (e[o] = Q(t[o], o, a, r, s));
	}
}
function ee(e) {
	var t;
	return e = Q(t = e, void 0, t, /* @__PURE__ */ new Map(), void 0), (t) => x(t, e);
}
function et(e, t) {
	var a;
	return a = (a, r, s, l) => {
		let i = t?.(a, r, s, l);
		if (void 0 !== i) return i;
		if ("object" == typeof e) switch (Object.prototype.toString.call(e)) {
			case G:
			case H:
			case J: {
				let t = new e.constructor(e?.valueOf());
				return Y(t, e), t;
			}
			case X: {
				let t = {};
				return Y(t, e), t.length = e.length, t[Symbol.iterator] = e[Symbol.iterator], t;
			}
			default: return;
		}
	}, Q(e, void 0, e, /* @__PURE__ */ new Map(), a);
}
var en = /^(?:0|[1-9]\d*)$/;
function ea(e, t = Number.MAX_SAFE_INTEGER) {
	switch (typeof e) {
		case "number": return Number.isInteger(e) && e >= 0 && e < t;
		case "symbol": return !1;
		case "string": return en.test(e);
	}
}
function er(e) {
	return null !== e && "object" == typeof e && "[object Arguments]" === S(e);
}
function es(e, t) {
	let a;
	if (0 === (a = Array.isArray(t) ? t : "string" == typeof t && f(t) && e?.[t] == null ? y(t) : [t]).length) return !1;
	let r = e;
	for (let e = 0; e < a.length; e++) {
		let t = a[e];
		if ((null == r || !Object.hasOwn(r, t)) && !((Array.isArray(r) || er(r)) && ea(t) && t < r.length)) return !1;
		r = r[t];
	}
	return !0;
}
function el(e, t) {
	switch (typeof e) {
		case "object":
			Object.is(e?.valueOf(), -0) && (e = "-0");
			break;
		case "number": e = h(e);
	}
	return t = et(t), function(a) {
		let r = g(a, e);
		return void 0 === r ? es(a, e) : void 0 === t ? void 0 === r : x(r, t);
	};
}
function ei(e) {
	if (null == e) return p;
	switch (typeof e) {
		case "function": return e;
		case "object":
			if (Array.isArray(e) && 2 === e.length) return el(e[0], e[1]);
			return ee(e);
		case "string":
		case "symbol":
		case "number": return k(e);
	}
}
function eo(e) {
	return "object" == typeof e && null !== e;
}
function ec(e) {
	if (u(e)) {
		var t;
		return (t = Array.isArray(e) ? e : Array.from(e))[t.length - 1];
	}
}
function eu(e) {
	return "symbol" == typeof e || e instanceof Symbol;
}
function ep(e, t, a = 1) {
	if (t ?? (t = e, e = 0), !Number.isInteger(a) || 0 === a) throw Error("The step value must be a non-zero integer.");
	let r = Math.max(Math.ceil((t - e) / a), 0), s = Array(r);
	for (let t = 0; t < r; t++) s[t] = e + t * a;
	return s;
}
function ed(e) {
	return "string" == typeof e || e instanceof String;
}
function ef(e, t) {
	if (!e) return [];
	let a = u(e) || Array.isArray(e) ? ep(0, e.length) : Object.keys(e), r = ei(t ?? p), s = Array(a.length);
	for (let t = 0; t < a.length; t++) {
		let l = a[t], i = e[l];
		s[t] = r(i, l, e);
	}
	return s;
}
function eh(e, t) {
	return null == e ? {} : function(e, t) {
		let a = {};
		for (let r = 0; r < e.length; r++) {
			let s = e[r], l = t(s);
			Object.hasOwn(a, l) || (a[l] = []), a[l].push(s);
		}
		return a;
	}(u(e) ? Array.from(e) : Object.values(e), ei(t ?? p));
}
var em = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ey = /^\w*$/;
function eg(e, t = p) {
	if (!e) return [[], []];
	let a = u(e) ? e : Object.values(e);
	t = ei(t);
	let r = [], s = [];
	for (let e = 0; e < a.length; e++) {
		let l = a[e];
		t(l) ? r.push(l) : s.push(l);
	}
	return [r, s];
}
function ek(e, t) {
	if (null == e) return !0;
	switch (typeof t) {
		case "symbol":
		case "number":
		case "object":
			if (Array.isArray(t)) return ev(e, t);
			if ("number" == typeof t ? t = h(t) : "object" == typeof t && (t = Object.is(t?.valueOf(), -0) ? "-0" : String(t)), d(t)) return !1;
			if (e?.[t] === void 0) return !0;
			try {
				return delete e[t], !0;
			} catch {
				return !1;
			}
		case "string":
			if (e?.[t] === void 0 && f(t)) return ev(e, y(t));
			if (d(t)) return !1;
			try {
				return delete e[t], !0;
			} catch {
				return !1;
			}
	}
}
function ev(e, t) {
	let a = 1 === t.length ? e : g(e, t.slice(0, -1)), r = t[t.length - 1];
	if (a?.[r] === void 0) return !0;
	if (d(r)) return !1;
	try {
		return delete a[r], !0;
	} catch {
		return !1;
	}
}
function eN(e) {
	return Array.isArray(e);
}
function eb(e, t, a) {
	if (!e) return !1;
	null != a && (t = void 0), t ??= p;
	let r = Array.isArray(e) ? e : Object.values(e);
	switch (typeof t) {
		case "function":
			if (!Array.isArray(e)) {
				let a = Object.keys(e);
				for (let r = 0; r < a.length; r++) {
					let s = a[r];
					if (t(e[s], s, e)) return !0;
				}
				return !1;
			}
			for (let a = 0; a < e.length; a++) if (t(e[a], a, e)) return !0;
			return !1;
		case "object":
			if (Array.isArray(t) && 2 === t.length) {
				let a = el(t[0], t[1]);
				if (Array.isArray(e)) {
					for (let t = 0; t < e.length; t++) if (a(e[t])) return !0;
					return !1;
				}
				return r.some(a);
			}
			{
				let a = ee(t);
				if (Array.isArray(e)) {
					for (let t = 0; t < e.length; t++) if (a(e[t])) return !0;
					return !1;
				}
				return r.some(a);
			}
		case "number":
		case "symbol":
		case "string": {
			let a = k(t);
			if (Array.isArray(e)) {
				for (let t = 0; t < e.length; t++) if (a(e[t])) return !0;
				return !1;
			}
			return r.some(a);
		}
	}
}
function e_(e) {
	return e;
}
function ew(e) {
	return "number" == typeof e || e instanceof Number;
}
var eO = (e, t, a) => {
	let r = e[t];
	Object.hasOwn(e, t) && _(r, a) && (void 0 !== a || t in e) || (e[t] = a);
};
function ex(e, t, a) {
	return function(e, t, a, r) {
		if (null == e && !N(e)) return e;
		let s = !Array.isArray(t) && ("number" == typeof t || "boolean" == typeof t || null == t || eu(t) || "string" == typeof t && (ey.test(t) || !em.test(t)) || null != e && Object.hasOwn(e, t)) ? [t] : Array.isArray(t) ? t : "string" == typeof t ? y(t) : [t], l = e;
		for (let t = 0; t < s.length && null != l; t++) {
			let i, o = h(s[t]);
			if (!d(o)) {
				if (t === s.length - 1) i = a(l[o]);
				else {
					let a = l[o], c = r?.(a, o, e);
					i = void 0 !== c ? c : N(a) ? a : ea(s[t + 1]) ? [] : {};
				}
				eO(l, o, i), l = l[o];
			}
		}
		return e;
	}(e, t, () => a, () => void 0);
}
function ej(e) {
	return "undefined" != typeof Buffer && Buffer.isBuffer(e);
}
function eS(e) {
	let t = e?.constructor;
	return e === ("function" == typeof t ? t.prototype : Object.prototype);
}
function eP(e, t) {
	var a, r;
	let s, l;
	if ((e = (l = (s = (a = e) ? (a = eu(r = a) ? NaN : Number(r)) === Infinity || a === -Infinity ? (a < 0 ? -1 : 1) * Number.MAX_VALUE : a == a ? a : 0 : 0 === a ? a : 0) % 1) ? s - l : s) < 1 || !Number.isSafeInteger(e)) return [];
	let i = Array(e);
	for (let a = 0; a < e; a++) i[a] = "function" == typeof t ? t(a) : a;
	return i;
}
function eA(e) {
	if (u(e)) {
		var t;
		let a, r;
		return r = new Set(a = eP((t = e).length, (e) => `${e}`)), ej(t) && (r.add("offset"), r.add("parent")), Z(t) && (r.add("buffer"), r.add("byteLength"), r.add("byteOffset")), [...a, ...Object.keys(t).filter((e) => !r.has(e))];
	}
	let a = Object.keys(Object(e));
	return eS(e) ? a.filter((e) => "constructor" !== e) : a;
}
function eE(e) {
	if (null == e) return [];
	switch (typeof e) {
		case "object":
		case "function":
			if (u(e)) {
				var t;
				let a, r;
				return r = new Set(a = eP((t = e).length, (e) => `${e}`)), ej(t) && (r.add("offset"), r.add("parent")), Z(t) && (r.add("buffer"), r.add("byteLength"), r.add("byteOffset")), [...a, ...eM(t).filter((e) => !r.has(e))];
			}
			if (eS(e)) return eM(e).filter((e) => "constructor" !== e);
			return eM(e);
		default: return eM(Object(e));
	}
}
function eM(e) {
	let t = [];
	for (let a in e) t.push(a);
	return t;
}
function eC(e) {
	if ("object" != typeof e || null == e) return !1;
	if (null === Object.getPrototypeOf(e)) return !0;
	if ("[object Object]" !== Object.prototype.toString.call(e)) {
		let t = e[Symbol.toStringTag];
		return null != t && !!Object.getOwnPropertyDescriptor(e, Symbol.toStringTag)?.writable && e.toString() === `[object ${t}]`;
	}
	let t = e;
	for (; null !== Object.getPrototypeOf(t);) t = Object.getPrototypeOf(t);
	return Object.getPrototypeOf(e) === t;
}
function eR(e, t = p) {
	return null == e ? {} : function(e, t) {
		let a = {}, r = Object.keys(e);
		for (let s = 0; s < r.length; s++) {
			let l = r[s], i = e[l];
			a[l] = t(i, l, e);
		}
		return a;
	}(e, ei(t));
}
function eT(e) {
	let t = [];
	for (; e;) t.push(...j(e)), e = Object.getPrototypeOf(e);
	return t;
}
function e$(e, ...t) {
	var a;
	if (null == e) return {};
	let r = (a = e, (t = function(e, t = 1) {
		let a = [], r = Math.floor(t);
		if (!u(e)) return a;
		let s = (e, t) => {
			for (let l = 0; l < e.length; l++) {
				let i = e[l];
				t < r && (Array.isArray(i) || i?.[Symbol.isConcatSpreadable] || null !== i && "object" == typeof i && "[object Arguments]" === Object.prototype.toString.call(i)) ? Array.isArray(i) ? s(i, t + 1) : s(Array.from(i), t + 1) : a.push(i);
			}
		};
		return s(Array.from(e), 0), a;
	}(t)).some((e) => Array.isArray(e) || f(e)) ? function(e) {
		let t = {}, a = [...eE(e), ...eT(e)];
		for (let r = 0; r < a.length; r++) {
			let s = a[r];
			t[s] = et(e[s], (e) => {
				if (!eC(e)) return e;
			});
		}
		return t;
	}(a) : function(e) {
		let t = {}, a = [...eE(e), ...eT(e)];
		for (let r = 0; r < a.length; r++) {
			let s = a[r];
			t[s] = e[s];
		}
		return t;
	}(a));
	for (let e = 0; e < t.length; e++) {
		let a = t[e];
		switch (typeof a) {
			case "object":
				Array.isArray(a) || (a = Array.from(a));
				for (let e = 0; e < a.length; e++) ek(r, a[e]);
				break;
			case "string":
			case "symbol":
			case "number": ek(r, a);
		}
	}
	return r;
}
function eF(e, t) {
	if (null == e) return {};
	let a = ei(t ?? e_), r = {}, s = u(e) ? ep(0, e.length) : [...eE(e), ...eT(e)];
	for (let t = 0; t < s.length; t++) {
		let l = eu(s[t]) ? s[t] : s[t].toString(), i = e[l];
		a(i, l, e) && (r[l] = i);
	}
	return r;
}
function eV(e) {
	return "function" == typeof e;
}
function eL(e) {
	return void 0 === e;
}
function eD(e) {
	if (null == e) return !0;
	if (u(e)) return ("function" == typeof e.splice || "string" == typeof e || "undefined" != typeof Buffer && !!Buffer.isBuffer(e) || !!Z(e) || !!er(e)) && 0 === e.length;
	if ("object" == typeof e) {
		if (e instanceof Map || e instanceof Set) return 0 === e.size;
		let t = Object.keys(e);
		return eS(e) ? 0 === t.filter((e) => "constructor" !== e).length : 0 === t.length;
	}
	return !0;
}
function eI(e) {
	return Number.isInteger(e);
}
var eB = /\p{Lu}?\p{Ll}+|[0-9]+|\p{Lu}+(?!\p{Ll})|\p{Emoji_Presentation}|\p{Extended_Pictographic}|\p{L}+/gu;
function eU(e) {
	return Array.from(e.match(eB) ?? []);
}
function eW(e) {
	return "string" != typeof e && (e = m(e)), e.replace(/['\u2019]/g, "");
}
function ez(e) {
	return function(e) {
		let t = eU(e);
		if (0 === t.length) return "";
		let [a, ...r] = t;
		return `${a.toLowerCase()}${r.map((e) => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase()).join("")}`;
	}(eW(e));
}
function eK(e) {
	return eU(eW(e)).map((e) => e.toLowerCase()).join("-");
}
function eq(e, t = 0, a = " ") {
	return m(e).padStart(t, a);
}
function eH(e) {
	var t;
	return (t = m(e)).substring(0, 1).toUpperCase() + t.substring(1);
}
function eG(e) {
	let t = Object.create(null);
	for (let a of e.split(",")) t[a] = 1;
	return (e) => e in t;
}
var eJ = {}, eX = [], eZ = () => {}, eQ = () => !1, eY = (e) => 111 === e.charCodeAt(0) && 110 === e.charCodeAt(1) && (e.charCodeAt(2) > 122 || 97 > e.charCodeAt(2)), e0 = (e) => e.startsWith("onUpdate:"), e1 = Object.assign, e2 = (e, t) => {
	let a = e.indexOf(t);
	a > -1 && e.splice(a, 1);
}, e4 = Object.prototype.hasOwnProperty, e6 = (e, t) => e4.call(e, t), e3 = Array.isArray, e8 = (e) => "function" == typeof e, e7 = (e) => "string" == typeof e, e5 = (e) => "symbol" == typeof e, e9 = (e) => null !== e && "object" == typeof e, te = (e) => (e9(e) || e8(e)) && e8(e.then) && e8(e.catch), tt = Object.prototype.toString, tn = (e) => e7(e) && "NaN" !== e && "-" !== e[0] && "" + parseInt(e, 10) === e, ta = eG(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), tr = (e) => {
	let t = Object.create(null);
	return (a) => t[a] || (t[a] = e(a));
}, ts = /-\w/g, tl = tr((e) => e.replace(ts, (e) => e.slice(1).toUpperCase())), ti = /\B([A-Z])/g, to = tr((e) => e.replace(ti, "-$1").toLowerCase()), tc = tr((e) => e.charAt(0).toUpperCase() + e.slice(1)), tu = tr((e) => e ? `on${tc(e)}` : ""), tp = (e, ...t) => {
	for (let a = 0; a < e.length; a++) e[a](...t);
}, td = (e, t, a, r = !1) => {
	Object.defineProperty(e, t, {
		configurable: !0,
		enumerable: !1,
		writable: r,
		value: a
	});
}, tf = (e) => {
	let t = parseFloat(e);
	return isNaN(t) ? e : t;
}, th = (e) => {
	let t = e7(e) ? Number(e) : NaN;
	return isNaN(t) ? e : t;
}, tm = () => P || (P = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {});
function ty(e) {
	if (e3(e)) {
		let t = {};
		for (let a = 0; a < e.length; a++) {
			let r = e[a], s = e7(r) ? function(e) {
				let t = {};
				return e.replace(tv, "").split(tg).forEach((e) => {
					if (e) {
						let a = e.split(tk);
						a.length > 1 && (t[a[0].trim()] = a[1].trim());
					}
				}), t;
			}(r) : ty(r);
			if (s) for (let e in s) t[e] = s[e];
		}
		return t;
	}
	if (e7(e) || e9(e)) return e;
}
var tg = /;(?![^(]*\))/g, tk = /:([^]+)/, tv = /\/\*[^]*?\*\//g;
function tN(e) {
	let t = "";
	if (e7(e)) t = e;
	else if (e3(e)) for (let a = 0; a < e.length; a++) {
		let r = tN(e[a]);
		r && (t += r + " ");
	}
	else if (e9(e)) for (let a in e) e[a] && (t += a + " ");
	return t.trim();
}
var tb = eG("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly");
function t_(e) {
	return !!e || "" === e;
}
var tw = class {
	constructor(e = !1) {
		this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = A, !e && A && (this.index = (A.scopes || (A.scopes = [])).push(this) - 1);
	}
	get active() {
		return this._active;
	}
	pause() {
		if (this._active) {
			let e, t;
			if (this._isPaused = !0, this.scopes) for (e = 0, t = this.scopes.length; e < t; e++) this.scopes[e].pause();
			for (e = 0, t = this.effects.length; e < t; e++) this.effects[e].pause();
		}
	}
	resume() {
		if (this._active && this._isPaused) {
			let e, t;
			if (this._isPaused = !1, this.scopes) for (e = 0, t = this.scopes.length; e < t; e++) this.scopes[e].resume();
			for (e = 0, t = this.effects.length; e < t; e++) this.effects[e].resume();
		}
	}
	run(e) {
		if (this._active) {
			let t = A;
			try {
				return A = this, e();
			} finally {
				A = t;
			}
		}
	}
	on() {
		1 == ++this._on && (this.prevScope = A, A = this);
	}
	off() {
		this._on > 0 && 0 == --this._on && (A = this.prevScope, this.prevScope = void 0);
	}
	stop(e) {
		if (this._active) {
			let t, a;
			for (t = 0, this._active = !1, a = this.effects.length; t < a; t++) this.effects[t].stop();
			for (t = 0, this.effects.length = 0, a = this.cleanups.length; t < a; t++) this.cleanups[t]();
			if (this.cleanups.length = 0, this.scopes) {
				for (t = 0, a = this.scopes.length; t < a; t++) this.scopes[t].stop(!0);
				this.scopes.length = 0;
			}
			if (!this.detached && this.parent && !e) {
				let e = this.parent.scopes.pop();
				e && e !== this && (this.parent.scopes[this.index] = e, e.index = this.index);
			}
			this.parent = void 0;
		}
	}
}, tO = /* @__PURE__ */ new WeakSet(), tx = class {
	constructor(e) {
		this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, A && A.active && A.effects.push(this);
	}
	pause() {
		this.flags |= 64;
	}
	resume() {
		64 & this.flags && (this.flags &= -65, tO.has(this) && (tO.delete(this), this.trigger()));
	}
	notify() {
		(!(2 & this.flags) || 32 & this.flags) && (8 & this.flags || tS(this));
	}
	run() {
		if (!(1 & this.flags)) return this.fn();
		this.flags |= 2, tL(this), tA(this);
		let e = E, t = tT;
		E = this, tT = !0;
		try {
			return this.fn();
		} finally {
			tE(this), E = e, tT = t, this.flags &= -3;
		}
	}
	stop() {
		if (1 & this.flags) {
			for (let e = this.deps; e; e = e.nextDep) tR(e);
			this.deps = this.depsTail = void 0, tL(this), this.onStop && this.onStop(), this.flags &= -2;
		}
	}
	trigger() {
		64 & this.flags ? tO.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
	}
	runIfDirty() {
		tM(this) && this.run();
	}
	get dirty() {
		return tM(this);
	}
}, tj = 0;
function tS(e, t = !1) {
	if (e.flags |= 8, t) {
		e.next = C, C = e;
		return;
	}
	e.next = M, M = e;
}
function tP() {
	let e;
	if (!(--tj > 0)) {
		if (C) {
			let e = C;
			for (C = void 0; e;) {
				let t = e.next;
				e.next = void 0, e.flags &= -9, e = t;
			}
		}
		for (; M;) {
			let t = M;
			for (M = void 0; t;) {
				let a = t.next;
				if (t.next = void 0, t.flags &= -9, 1 & t.flags) try {
					t.trigger();
				} catch (t) {
					e || (e = t);
				}
				t = a;
			}
		}
		if (e) throw e;
	}
}
function tA(e) {
	for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function tE(e) {
	let t, a = e.depsTail, r = a;
	for (; r;) {
		let e = r.prevDep;
		-1 === r.version ? (r === a && (a = e), tR(r), function(e) {
			let { prevDep: t, nextDep: a } = e;
			t && (t.nextDep = a, e.prevDep = void 0), a && (a.prevDep = t, e.nextDep = void 0);
		}(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = e;
	}
	e.deps = t, e.depsTail = a;
}
function tM(e) {
	for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (tC(t.dep.computed) || t.dep.version !== t.version)) return !0;
	return !!e._dirty;
}
function tC(e) {
	if (4 & e.flags && !(16 & e.flags) || (e.flags &= -17, e.globalVersion === tD) || (e.globalVersion = tD, !e.isSSR && 128 & e.flags && (!e.deps && !e._dirty || !tM(e)))) return;
	e.flags |= 2;
	let t = e.dep, a = E, r = tT;
	E = e, tT = !0;
	try {
		let a;
		tA(e);
		let r = e.fn(e._value);
		(0 === t.version || (a = e._value, !Object.is(r, a))) && (e.flags |= 128, e._value = r, t.version++);
	} catch (e) {
		throw t.version++, e;
	} finally {
		E = a, tT = r, tE(e), e.flags &= -3;
	}
}
function tR(e, t = !1) {
	let { dep: a, prevSub: r, nextSub: s } = e;
	if (r && (r.nextSub = s, e.prevSub = void 0), s && (s.prevSub = r, e.nextSub = void 0), a.subs === e && (a.subs = r, !r && a.computed)) {
		a.computed.flags &= -5;
		for (let e = a.computed.deps; e; e = e.nextDep) tR(e, !0);
	}
	t || --a.sc || !a.map || a.map.delete(a.key);
}
var tT = !0, t$ = [];
function tF() {
	t$.push(tT), tT = !1;
}
function tV() {
	let e = t$.pop();
	tT = void 0 === e || e;
}
function tL(e) {
	let { cleanup: t } = e;
	if (e.cleanup = void 0, t) {
		let e = E;
		E = void 0;
		try {
			t();
		} finally {
			E = e;
		}
	}
}
var tD = 0, tI = class {
	constructor(e, t) {
		this.sub = e, this.dep = t, this.version = t.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
	}
}, tB = class {
	constructor(e) {
		this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
	}
	track(e) {
		if (!E || !tT || E === this.computed) return;
		let t = this.activeLink;
		if (void 0 === t || t.sub !== E) t = this.activeLink = new tI(E, this), E.deps ? (t.prevDep = E.depsTail, E.depsTail.nextDep = t, E.depsTail = t) : E.deps = E.depsTail = t, function e(t) {
			if (t.dep.sc++, 4 & t.sub.flags) {
				let a = t.dep.computed;
				if (a && !t.dep.subs) {
					a.flags |= 20;
					for (let t = a.deps; t; t = t.nextDep) e(t);
				}
				let r = t.dep.subs;
				r !== t && (t.prevSub = r, r && (r.nextSub = t)), t.dep.subs = t;
			}
		}(t);
		else if (-1 === t.version && (t.version = this.version, t.nextDep)) {
			let e = t.nextDep;
			e.prevDep = t.prevDep, t.prevDep && (t.prevDep.nextDep = e), t.prevDep = E.depsTail, t.nextDep = void 0, E.depsTail.nextDep = t, E.depsTail = t, E.deps === t && (E.deps = e);
		}
		return t;
	}
	trigger(e) {
		this.version++, tD++, this.notify(e);
	}
	notify(e) {
		tj++;
		try {
			for (let e = this.subs; e; e = e.prevSub) e.sub.notify() && e.sub.dep.notify();
		} finally {
			tP();
		}
	}
}, tU = /* @__PURE__ */ new WeakMap(), tW = Symbol(""), tz = Symbol(""), tK = Symbol("");
function tq(e, t, a) {
	if (tT && E) {
		let t = tU.get(e);
		t || tU.set(e, t = /* @__PURE__ */ new Map());
		let r = t.get(a);
		r || (t.set(a, r = new tB()), r.map = t, r.key = a), r.track();
	}
}
function tH(e, t, a, r, s, l) {
	let i = tU.get(e);
	if (!i) return void tD++;
	let o = (e) => {
		e && e.trigger();
	};
	if (tj++, "clear" === t) i.forEach(o);
	else {
		let s = e3(e), l = s && tn(a);
		if (s && "length" === a) {
			let e = Number(r);
			i.forEach((t, a) => {
				("length" === a || a === tK || !e5(a) && a >= e) && o(t);
			});
		} else switch ((void 0 !== a || i.has(void 0)) && o(i.get(a)), l && o(i.get(tK)), t) {
			case "add":
				if (s) l && o(i.get("length"));
				else {
					let t;
					o(i.get(tW));
					"[object Map]" === (t = e, tt.call(t)) && o(i.get(tz));
				}
				break;
			case "delete":
				if (!s) {
					let t;
					o(i.get(tW));
					"[object Map]" === (t = e, tt.call(t)) && o(i.get(tz));
				}
				break;
			case "set":
				let c;
				"[object Map]" === (c = e, tt.call(c)) && o(i.get(tW));
		}
	}
	tP();
}
function tG(e) {
	let t = nN(e);
	return t === e ? t : (tq(t, "iterate", tK), nk(e) ? t : t.map(nb));
}
function tJ(e) {
	return tq(e = nN(e), "iterate", tK), e;
}
var tX = {
	__proto__: null,
	[Symbol.iterator]() {
		return tZ(this, Symbol.iterator, nb);
	},
	concat(...e) {
		return tG(this).concat(...e.map((e) => e3(e) ? tG(e) : e));
	},
	entries() {
		return tZ(this, "entries", (e) => (e[1] = nb(e[1]), e));
	},
	every(e, t) {
		return tY(this, "every", e, t, void 0, arguments);
	},
	filter(e, t) {
		return tY(this, "filter", e, t, (e) => e.map(nb), arguments);
	},
	find(e, t) {
		return tY(this, "find", e, t, nb, arguments);
	},
	findIndex(e, t) {
		return tY(this, "findIndex", e, t, void 0, arguments);
	},
	findLast(e, t) {
		return tY(this, "findLast", e, t, nb, arguments);
	},
	findLastIndex(e, t) {
		return tY(this, "findLastIndex", e, t, void 0, arguments);
	},
	forEach(e, t) {
		return tY(this, "forEach", e, t, void 0, arguments);
	},
	includes(...e) {
		return t1(this, "includes", e);
	},
	indexOf(...e) {
		return t1(this, "indexOf", e);
	},
	join(e) {
		return tG(this).join(e);
	},
	lastIndexOf(...e) {
		return t1(this, "lastIndexOf", e);
	},
	map(e, t) {
		return tY(this, "map", e, t, void 0, arguments);
	},
	pop() {
		return t2(this, "pop");
	},
	push(...e) {
		return t2(this, "push", e);
	},
	reduce(e, ...t) {
		return t0(this, "reduce", e, t);
	},
	reduceRight(e, ...t) {
		return t0(this, "reduceRight", e, t);
	},
	shift() {
		return t2(this, "shift");
	},
	some(e, t) {
		return tY(this, "some", e, t, void 0, arguments);
	},
	splice(...e) {
		return t2(this, "splice", e);
	},
	toReversed() {
		return tG(this).toReversed();
	},
	toSorted(e) {
		return tG(this).toSorted(e);
	},
	toSpliced(...e) {
		return tG(this).toSpliced(...e);
	},
	unshift(...e) {
		return t2(this, "unshift", e);
	},
	values() {
		return tZ(this, "values", nb);
	}
};
function tZ(e, t, a) {
	let r = tJ(e), s = r[t]();
	return r === e || nk(e) || (s._next = s.next, s.next = () => {
		let e = s._next();
		return e.done || (e.value = a(e.value)), e;
	}), s;
}
var tQ = Array.prototype;
function tY(e, t, a, r, s, l) {
	let i = tJ(e), o = i !== e && !nk(e), c = i[t];
	if (c !== tQ[t]) {
		let t = c.apply(e, l);
		return o ? nb(t) : t;
	}
	let u = a;
	i !== e && (o ? u = function(t, r) {
		return a.call(this, nb(t), r, e);
	} : a.length > 2 && (u = function(t, r) {
		return a.call(this, t, r, e);
	}));
	let p = c.call(i, u, r);
	return o && s ? s(p) : p;
}
function t0(e, t, a, r) {
	let s = tJ(e), l = a;
	return s !== e && (nk(e) ? a.length > 3 && (l = function(t, r, s) {
		return a.call(this, t, r, s, e);
	}) : l = function(t, r, s) {
		return a.call(this, t, nb(r), s, e);
	}), s[t](l, ...r);
}
function t1(e, t, a) {
	let r = nN(e);
	tq(r, "iterate", tK);
	let s = r[t](...a);
	return (-1 === s || !1 === s) && nv(a[0]) ? (a[0] = nN(a[0]), r[t](...a)) : s;
}
function t2(e, t, a = []) {
	tF(), tj++;
	let r = nN(e)[t].apply(e, a);
	return tP(), tV(), r;
}
var t4 = eG("__proto__,__v_isRef,__isVue"), t6 = new Set(Object.getOwnPropertyNames(Symbol).filter((e) => "arguments" !== e && "caller" !== e).map((e) => Symbol[e]).filter(e5));
function t3(e) {
	e5(e) || (e = String(e));
	let t = nN(this);
	return tq(t, "has", e), t.hasOwnProperty(e);
}
var t8 = class {
	constructor(e = !1, t = !1) {
		this._isReadonly = e, this._isShallow = t;
	}
	get(e, t, a) {
		if ("__v_skip" === t) return e.__v_skip;
		let r = this._isReadonly, s = this._isShallow;
		if ("__v_isReactive" === t) return !r;
		if ("__v_isReadonly" === t) return r;
		if ("__v_isShallow" === t) return s;
		if ("__v_raw" === t) return a === (r ? s ? np : nu : s ? nc : no).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(a) ? e : void 0;
		let l = e3(e);
		if (!r) {
			let e;
			if (l && (e = tX[t])) return e;
			if ("hasOwnProperty" === t) return t3;
		}
		let i = Reflect.get(e, t, nw(e) ? e : a);
		if ((e5(t) ? t6.has(t) : t4(t)) || (r || tq(e, "get", t), s)) return i;
		if (nw(i)) {
			let e = l && tn(t) ? i : i.value;
			return r && e9(e) ? nh(e) : e;
		}
		return e9(i) ? r ? nh(i) : nd(i) : i;
	}
}, t7 = class extends t8 {
	constructor(e = !1) {
		super(!1, e);
	}
	set(e, t, a, r) {
		let s = e[t];
		if (!this._isShallow) {
			let t = ng(s);
			if (nk(a) || ng(a) || (s = nN(s), a = nN(a)), !e3(e) && nw(s) && !nw(a)) if (t) return !0;
			else return s.value = a, !0;
		}
		let l = e3(e) && tn(t) ? Number(t) < e.length : e6(e, t), i = Reflect.set(e, t, a, nw(e) ? e : r);
		return e === nN(r) && (l ? Object.is(a, s) || tH(e, "set", t, a, s) : tH(e, "add", t, a)), i;
	}
	deleteProperty(e, t) {
		let a = e6(e, t), r = e[t], s = Reflect.deleteProperty(e, t);
		return s && a && tH(e, "delete", t, void 0, r), s;
	}
	has(e, t) {
		let a = Reflect.has(e, t);
		return e5(t) && t6.has(t) || tq(e, "has", t), a;
	}
	ownKeys(e) {
		return tq(e, "iterate", e3(e) ? "length" : tW), Reflect.ownKeys(e);
	}
}, t5 = class extends t8 {
	constructor(e = !1) {
		super(!0, e);
	}
	set(e, t) {
		return !0;
	}
	deleteProperty(e, t) {
		return !0;
	}
}, t9 = new t7(), ne = new t5(), nt = new t7(!0), nn = (e) => e;
function na(e) {
	return function() {
		return "delete" !== e && ("clear" === e ? void 0 : this);
	};
}
function nr(e, t) {
	let a, r = (e1(a = {
		get(a) {
			let r = this.__v_raw, s = nN(r), l = nN(a);
			e || (Object.is(a, l) || tq(s, "get", a), tq(s, "get", l));
			let { has: i } = Reflect.getPrototypeOf(s), o = t ? nn : e ? n_ : nb;
			return i.call(s, a) ? o(r.get(a)) : i.call(s, l) ? o(r.get(l)) : void (r !== s && r.get(a));
		},
		get size() {
			let t = this.__v_raw;
			return e || tq(nN(t), "iterate", tW), t.size;
		},
		has(t) {
			let a = this.__v_raw, r = nN(a), s = nN(t);
			return e || (Object.is(t, s) || tq(r, "has", t), tq(r, "has", s)), t === s ? a.has(t) : a.has(t) || a.has(s);
		},
		forEach(a, r) {
			let s = this, l = s.__v_raw, i = nN(l), o = t ? nn : e ? n_ : nb;
			return e || tq(i, "iterate", tW), l.forEach((e, t) => a.call(r, o(e), o(t), s));
		}
	}, e ? {
		add: na("add"),
		set: na("set"),
		delete: na("delete"),
		clear: na("clear")
	} : {
		add(e) {
			t || nk(e) || ng(e) || (e = nN(e));
			let a = nN(this);
			return Reflect.getPrototypeOf(a).has.call(a, e) || (a.add(e), tH(a, "add", e, e)), this;
		},
		set(e, a) {
			t || nk(a) || ng(a) || (a = nN(a));
			let r = nN(this), { has: s, get: l } = Reflect.getPrototypeOf(r), i = s.call(r, e);
			i || (e = nN(e), i = s.call(r, e));
			let o = l.call(r, e);
			return (r.set(e, a), i) ? Object.is(a, o) || tH(r, "set", e, a, o) : tH(r, "add", e, a), this;
		},
		delete(e) {
			let t = nN(this), { has: a, get: r } = Reflect.getPrototypeOf(t), s = a.call(t, e);
			s || (e = nN(e), s = a.call(t, e));
			let l = r ? r.call(t, e) : void 0, i = t.delete(e);
			return s && tH(t, "delete", e, void 0, l), i;
		},
		clear() {
			let e = nN(this), t = 0 !== e.size, a = e.clear();
			return t && tH(e, "clear", void 0, void 0, void 0), a;
		}
	}), [
		"keys",
		"values",
		"entries",
		Symbol.iterator
	].forEach((r) => {
		a[r] = function(...a) {
			let s, l = this.__v_raw, i = nN(l), o = "[object Map]" === (s = i, tt.call(s)), c = "entries" === r || r === Symbol.iterator && o, u = l[r](...a), p = t ? nn : e ? n_ : nb;
			return e || tq(i, "iterate", "keys" === r && o ? tz : tW), {
				next() {
					let { value: e, done: t } = u.next();
					return t ? {
						value: e,
						done: t
					} : {
						value: c ? [p(e[0]), p(e[1])] : p(e),
						done: t
					};
				},
				[Symbol.iterator]() {
					return this;
				}
			};
		};
	}), a);
	return (t, a, s) => "__v_isReactive" === a ? !e : "__v_isReadonly" === a ? e : "__v_raw" === a ? t : Reflect.get(e6(r, a) && a in t ? r : t, a, s);
}
var ns = { get: nr(!1, !1) }, nl = { get: nr(!1, !0) }, ni = { get: nr(!0, !1) }, no = /* @__PURE__ */ new WeakMap(), nc = /* @__PURE__ */ new WeakMap(), nu = /* @__PURE__ */ new WeakMap(), np = /* @__PURE__ */ new WeakMap();
function nd(e) {
	return ng(e) ? e : nm(e, !1, t9, ns, no);
}
function nf(e) {
	return nm(e, !1, nt, nl, nc);
}
function nh(e) {
	return nm(e, !0, ne, ni, nu);
}
function nm(e, t, a, r, s) {
	var l;
	let i;
	if (!e9(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
	let o = (l = e).__v_skip || !Object.isExtensible(l) ? 0 : function(e) {
		switch (e) {
			case "Object":
			case "Array": return 1;
			case "Map":
			case "Set":
			case "WeakMap":
			case "WeakSet": return 2;
			default: return 0;
		}
	}((i = l, tt.call(i)).slice(8, -1));
	if (0 === o) return e;
	let c = s.get(e);
	if (c) return c;
	let u = new Proxy(e, 2 === o ? r : a);
	return s.set(e, u), u;
}
function ny(e) {
	return ng(e) ? ny(e.__v_raw) : !!(e && e.__v_isReactive);
}
function ng(e) {
	return !!(e && e.__v_isReadonly);
}
function nk(e) {
	return !!(e && e.__v_isShallow);
}
function nv(e) {
	return !!e && !!e.__v_raw;
}
function nN(e) {
	let t = e && e.__v_raw;
	return t ? nN(t) : e;
}
var nb = (e) => e9(e) ? nd(e) : e, n_ = (e) => e9(e) ? nh(e) : e;
function nw(e) {
	return !!e && !0 === e.__v_isRef;
}
function nO(e) {
	return nj(e, !1);
}
function nx(e) {
	return nj(e, !0);
}
function nj(e, t) {
	return nw(e) ? e : new nS(e, t);
}
var nS = class {
	constructor(e, t) {
		this.dep = new tB(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = t ? e : nN(e), this._value = t ? e : nb(e), this.__v_isShallow = t;
	}
	get value() {
		return this.dep.track(), this._value;
	}
	set value(e) {
		let t = this._rawValue, a = this.__v_isShallow || nk(e) || ng(e);
		Object.is(e = a ? e : nN(e), t) || (this._rawValue = e, this._value = a ? e : nb(e), this.dep.trigger());
	}
};
function nP(e) {
	return nw(e) ? e.value : e;
}
var nA = {
	get: (e, t, a) => "__v_raw" === t ? e : nP(Reflect.get(e, t, a)),
	set: (e, t, a, r) => {
		let s = e[t];
		return nw(s) && !nw(a) ? (s.value = a, !0) : Reflect.set(e, t, a, r);
	}
};
function nE(e) {
	return ny(e) ? e : new Proxy(e, nA);
}
var nM = class {
	constructor(e) {
		this.__v_isRef = !0, this._value = void 0;
		let t = this.dep = new tB(), { get: a, set: r } = e(t.track.bind(t), t.trigger.bind(t));
		this._get = a, this._set = r;
	}
	get value() {
		return this._value = this._get();
	}
	set value(e) {
		this._set(e);
	}
}, nC = class {
	constructor(e, t, a) {
		this.fn = e, this.setter = t, this._value = void 0, this.dep = new tB(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = tD - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = a;
	}
	notify() {
		if (this.flags |= 16, !(8 & this.flags) && E !== this) return tS(this, !0), !0;
	}
	get value() {
		let e = this.dep.track();
		return tC(this), e && (e.version = this.dep.version), this._value;
	}
	set value(e) {
		this.setter && this.setter(e);
	}
}, nR = {}, nT = /* @__PURE__ */ new WeakMap(), n$ = void 0;
function nF(e, t = Infinity, a) {
	if (t <= 0 || !e9(e) || e.__v_skip || ((a = a || /* @__PURE__ */ new Map()).get(e) || 0) >= t) return e;
	if (a.set(e, t), t--, nw(e)) nF(e.value, t, a);
	else if (e3(e)) for (let r = 0; r < e.length; r++) nF(e[r], t, a);
	else {
		let r, s;
		if ("[object Set]" === (r = e, tt.call(r)) || "[object Map]" === (s = e, tt.call(s))) e.forEach((e) => {
			nF(e, t, a);
		});
		else {
			let r;
			if ("[object Object]" === (r = e, tt.call(r))) {
				for (let r in e) nF(e[r], t, a);
				for (let r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && nF(e[r], t, a);
			}
		}
	}
	return e;
}
function nV(e, t, a, r) {
	try {
		return r ? e(...r) : e();
	} catch (e) {
		nD(e, t, a);
	}
}
function nL(e, t, a, r) {
	if (e8(e)) {
		let s = nV(e, t, a, r);
		return s && te(s) && s.catch((e) => {
			nD(e, t, a);
		}), s;
	}
	if (e3(e)) {
		let s = [];
		for (let l = 0; l < e.length; l++) s.push(nL(e[l], t, a, r));
		return s;
	}
}
function nD(e, t, a, r = !0) {
	t && t.vnode;
	let { errorHandler: l, throwUnhandledErrorInProduction: i } = t && t.appContext.config || eJ;
	if (t) {
		let r = t.parent, s = t.proxy, i = `https://vuejs.org/error-reference/#runtime-${a}`;
		for (; r;) {
			let t = r.ec;
			if (t) {
				for (let a = 0; a < t.length; a++) if (!1 === t[a](e, s, i)) return;
			}
			r = r.parent;
		}
		if (l) {
			tF(), nV(l, null, 10, [
				e,
				s,
				i
			]), tV();
			return;
		}
	}
	(function(e, t, a, r = !0, s = !1) {
		if (s) throw e;
		console.error(e);
	})(e, 0, 0, r, i);
}
var nI = [], nB = -1, nU = [], nW = null, nz = 0, nK = Promise.resolve(), nq = null;
function nH(e) {
	let t = nq || nK;
	return e ? t.then(this ? e.bind(this) : e) : t;
}
function nG(e) {
	if (!(1 & e.flags)) {
		let t = nQ(e), a = nI[nI.length - 1];
		!a || !(2 & e.flags) && t >= nQ(a) ? nI.push(e) : nI.splice(function(e) {
			let t = nB + 1, a = nI.length;
			for (; t < a;) {
				let r = t + a >>> 1, s = nI[r], l = nQ(s);
				l < e || l === e && 2 & s.flags ? t = r + 1 : a = r;
			}
			return t;
		}(t), 0, e), e.flags |= 1, nJ();
	}
}
function nJ() {
	nq || (nq = nK.then(function e(t) {
		try {
			for (nB = 0; nB < nI.length; nB++) {
				let e = nI[nB];
				e && !(8 & e.flags) && (4 & e.flags && (e.flags &= -2), nV(e, e.i, e.i ? 15 : 14), 4 & e.flags || (e.flags &= -2));
			}
		} finally {
			for (; nB < nI.length; nB++) {
				let e = nI[nB];
				e && (e.flags &= -2);
			}
			nB = -1, nI.length = 0, nZ(t), nq = null, (nI.length || nU.length) && e(t);
		}
	}));
}
function nX(e, t, a = nB + 1) {
	for (; a < nI.length; a++) {
		let t = nI[a];
		if (t && 2 & t.flags) {
			if (e && t.id !== e.uid) continue;
			nI.splice(a, 1), a--, 4 & t.flags && (t.flags &= -2), t(), 4 & t.flags || (t.flags &= -2);
		}
	}
}
function nZ(e) {
	if (nU.length) {
		let e = [...new Set(nU)].sort((e, t) => nQ(e) - nQ(t));
		if (nU.length = 0, nW) return void nW.push(...e);
		for (nz = 0, nW = e; nz < nW.length; nz++) {
			let e = nW[nz];
			4 & e.flags && (e.flags &= -2), 8 & e.flags || e(), e.flags &= -2;
		}
		nW = null, nz = 0;
	}
}
var nQ = (e) => null == e.id ? 2 & e.flags ? -1 : Infinity : e.id, nY = null, n0 = null;
function n1(e) {
	let t = nY;
	return nY = e, n0 = e && e.type.__scopeId || null, t;
}
function n2(e, t, a, r) {
	let s = e.dirs, l = t && t.dirs;
	for (let i = 0; i < s.length; i++) {
		let o = s[i];
		l && (o.oldValue = l[i].value);
		let c = o.dir[r];
		c && (tF(), nL(c, a, 8, [
			e.el,
			o,
			e,
			t
		]), tV());
	}
}
var n4 = Symbol("_vte"), n6 = (e) => e && (e.disabled || "" === e.disabled), n3 = (e) => e && (e.defer || "" === e.defer), n8 = (e) => "undefined" != typeof SVGElement && e instanceof SVGElement, n7 = (e) => "function" == typeof MathMLElement && e instanceof MathMLElement, n5 = (e, t) => {
	let a = e && e.to;
	return e7(a) ? t ? t(a) : null : a;
}, n9 = {
	name: "Teleport",
	__isTeleport: !0,
	process(e, t, a, r, s, l, i, o, c, u) {
		let { mc: p, pc: d, pbc: f, o: { insert: h, querySelector: m, createText: y, createComment: g } } = u, k = n6(t.props), { shapeFlag: N, children: b, dynamicChildren: _ } = t;
		if (null == e) {
			let e = t.el = y(""), u = t.anchor = y("");
			h(e, a, r), h(u, a, r);
			let d = (e, t) => {
				16 & N && p(b, e, t, s, l, i, o, c);
			}, f = () => {
				let e = t.target = n5(t.props, m), a = aa(e, t, y, h);
				e && ("svg" !== i && n8(e) ? i = "svg" : "mathml" !== i && n7(e) && (i = "mathml"), s && s.isCE && (s.ce._teleportTargets || (s.ce._teleportTargets = /* @__PURE__ */ new Set())).add(e), k || (d(e, a), an(t, !1)));
			};
			k && (d(a, u), an(t, !0)), n3(t.props) ? (t.el.__isMounted = !1, ri(() => {
				f(), delete t.el.__isMounted;
			}, l)) : f();
		} else {
			if (n3(t.props) && !1 === e.el.__isMounted) return void ri(() => {
				n9.process(e, t, a, r, s, l, i, o, c, u);
			}, l);
			t.el = e.el, t.targetStart = e.targetStart;
			let p = t.anchor = e.anchor, h = t.target = e.target, y = t.targetAnchor = e.targetAnchor, g = n6(e.props), N = g ? a : h, b = g ? p : y;
			if ("svg" === i || n8(h) ? i = "svg" : ("mathml" === i || n7(h)) && (i = "mathml"), _ ? (f(e.dynamicChildren, _, N, s, l, i, o), rp(e, t, !0)) : c || d(e, t, N, b, s, l, i, o, !1), k) g ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : ae(t, a, p, u, 1);
			else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
				let e = t.target = n5(t.props, m);
				e && ae(t, e, null, u, 0);
			} else g && ae(t, h, y, u, 1);
			an(t, k);
		}
	},
	remove(e, t, a, { um: r, o: { remove: s } }, l) {
		let { shapeFlag: i, children: o, anchor: c, targetStart: u, targetAnchor: p, target: d, props: f } = e;
		if (d && (s(u), s(p)), l && s(c), 16 & i) {
			let e = l || !n6(f);
			for (let s = 0; s < o.length; s++) {
				let l = o[s];
				r(l, t, a, e, !!l.dynamicChildren);
			}
		}
	},
	move: ae,
	hydrate: function(e, t, a, r, s, l, { o: { nextSibling: i, parentNode: o, querySelector: c, insert: u, createText: p } }, d) {
		function f(e, t, c, u) {
			t.anchor = d(i(e), t, o(e), a, r, s, l), t.targetStart = c, t.targetAnchor = u;
		}
		let h = t.target = n5(t.props, c), m = n6(t.props);
		if (h) {
			let o = h._lpa || h.firstChild;
			if (16 & t.shapeFlag) if (m) f(e, t, o, o && i(o));
			else {
				t.anchor = i(e);
				let c = o;
				for (; c;) {
					if (c && 8 === c.nodeType) {
						if ("teleport start anchor" === c.data) t.targetStart = c;
						else if ("teleport anchor" === c.data) {
							t.targetAnchor = c, h._lpa = t.targetAnchor && i(t.targetAnchor);
							break;
						}
					}
					c = i(c);
				}
				t.targetAnchor || aa(h, t, p, u), d(o && i(o), t, h, a, r, s, l);
			}
			an(t, m);
		} else m && 16 & t.shapeFlag && f(e, t, e, i(e));
		return t.anchor && i(t.anchor);
	}
};
function ae(e, t, a, { o: { insert: r }, m: s }, l = 2) {
	0 === l && r(e.targetAnchor, t, a);
	let { el: i, anchor: o, shapeFlag: c, children: u, props: p } = e, d = 2 === l;
	if (d && r(i, t, a), (!d || n6(p)) && 16 & c) for (let e = 0; e < u.length; e++) s(u[e], t, a, 2);
	d && r(o, t, a);
}
var at = n9;
function an(e, t) {
	let a = e.ctx;
	if (a && a.ut) {
		let r, s;
		for (t ? (r = e.el, s = e.anchor) : (r = e.targetStart, s = e.targetAnchor); r && r !== s;) 1 === r.nodeType && r.setAttribute("data-v-owner", a.uid), r = r.nextSibling;
		a.ut();
	}
}
function aa(e, t, a, r) {
	let s = t.targetStart = a(""), l = t.targetAnchor = a("");
	return s[n4] = l, e && (r(s, e), r(l, e)), l;
}
var ar = Symbol("_leaveCb"), as = Symbol("_enterCb"), al = [Function, Array], ai = {
	mode: String,
	appear: Boolean,
	persisted: Boolean,
	onBeforeEnter: al,
	onEnter: al,
	onAfterEnter: al,
	onEnterCancelled: al,
	onBeforeLeave: al,
	onLeave: al,
	onAfterLeave: al,
	onLeaveCancelled: al,
	onBeforeAppear: al,
	onAppear: al,
	onAfterAppear: al,
	onAppearCancelled: al
}, ao = (e) => {
	let t = e.subTree;
	return t.component ? ao(t.component) : t;
};
function ac(e) {
	let t = e[0];
	if (e.length > 1) {
		for (let a of e) if (a.type !== rP) {
			t = a;
			break;
		}
	}
	return t;
}
var au = {
	name: "BaseTransition",
	props: ai,
	setup(e, { slots: t }) {
		let a, r = rq(), s = (a = {
			isMounted: !1,
			isLeaving: !1,
			isUnmounting: !1,
			leavingVNodes: /* @__PURE__ */ new Map()
		}, aA(() => {
			a.isMounted = !0;
		}), aC(() => {
			a.isUnmounting = !0;
		}), a);
		return () => {
			let a = t.default && function e(t, a = !1, r) {
				let s = [], l = 0;
				for (let i = 0; i < t.length; i++) {
					let o = t[i], c = null == r ? o.key : String(r) + String(null != o.key ? o.key : i);
					o.type === rj ? (128 & o.patchFlag && l++, s = s.concat(e(o.children, a, c))) : (a || o.type !== rP) && s.push(null != c ? rL(o, { key: c }) : o);
				}
				if (l > 1) for (let e = 0; e < s.length; e++) s[e].patchFlag = -2;
				return s;
			}(t.default(), !0);
			if (!a || !a.length) return;
			let l = ac(a), i = nN(e), { mode: o } = i;
			if (s.isLeaving) return af(l);
			let c = ah(l);
			if (!c) return af(l);
			let u = ad(c, i, s, r, (e) => u = e);
			c.type !== rP && am(c, u);
			let p = r.subTree && ah(r.subTree);
			if (p && p.type !== rP && !rT(p, c) && ao(r).type !== rP) {
				let e = ad(p, i, s, r);
				if (am(p, e), "out-in" === o && c.type !== rP) return s.isLeaving = !0, e.afterLeave = () => {
					s.isLeaving = !1, 8 & r.job.flags || r.update(), delete e.afterLeave, p = void 0;
				}, af(l);
				"in-out" === o && c.type !== rP ? e.delayLeave = (e, t, a) => {
					ap(s, p)[String(p.key)] = p, e[ar] = () => {
						t(), e[ar] = void 0, delete u.delayedLeave, p = void 0;
					}, u.delayedLeave = () => {
						a(), delete u.delayedLeave, p = void 0;
					};
				} : p = void 0;
			} else p && (p = void 0);
			return l;
		};
	}
};
function ap(e, t) {
	let { leavingVNodes: a } = e, r = a.get(t.type);
	return r || (r = Object.create(null), a.set(t.type, r)), r;
}
function ad(e, t, a, r, s) {
	let { appear: l, mode: i, persisted: o = !1, onBeforeEnter: c, onEnter: u, onAfterEnter: p, onEnterCancelled: d, onBeforeLeave: f, onLeave: h, onAfterLeave: m, onLeaveCancelled: y, onBeforeAppear: g, onAppear: k, onAfterAppear: N, onAppearCancelled: b } = t, _ = String(e.key), w = ap(a, e), O = (e, t) => {
		e && nL(e, r, 9, t);
	}, x = (e, t) => {
		let a = t[1];
		O(e, t), e3(e) ? e.every((e) => e.length <= 1) && a() : e.length <= 1 && a();
	}, j = {
		mode: i,
		persisted: o,
		beforeEnter(t) {
			let r = c;
			if (!a.isMounted) if (!l) return;
			else r = g || c;
			t[ar] && t[ar](!0);
			let s = w[_];
			s && rT(e, s) && s.el[ar] && s.el[ar](), O(r, [t]);
		},
		enter(e) {
			let t = u, r = p, s = d;
			if (!a.isMounted) if (!l) return;
			else t = k || u, r = N || p, s = b || d;
			let i = !1, o = e[as] = (t) => {
				i || (i = !0, t ? O(s, [e]) : O(r, [e]), j.delayedLeave && j.delayedLeave(), e[as] = void 0);
			};
			t ? x(t, [e, o]) : o();
		},
		leave(t, r) {
			let s = String(e.key);
			if (t[as] && t[as](!0), a.isUnmounting) return r();
			O(f, [t]);
			let l = !1, i = t[ar] = (a) => {
				l || (l = !0, r(), a ? O(y, [t]) : O(m, [t]), t[ar] = void 0, w[s] === e && delete w[s]);
			};
			w[s] = e, h ? x(h, [t, i]) : i();
		},
		clone(e) {
			let l = ad(e, t, a, r, s);
			return s && s(l), l;
		}
	};
	return j;
}
function af(e) {
	if (a_(e)) return (e = rL(e)).children = null, e;
}
function ah(e) {
	if (!a_(e)) return e.type.__isTeleport && e.children ? ac(e.children) : e;
	if (e.component) return e.component.subTree;
	let { shapeFlag: t, children: a } = e;
	if (a) {
		if (16 & t) return a[0];
		if (32 & t && e8(a.default)) return a.default();
	}
}
function am(e, t) {
	6 & e.shapeFlag && e.component ? (e.transition = t, am(e.component.subTree, t)) : 128 & e.shapeFlag ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function ay(e, t) {
	return e8(e) ? e1({ name: e.name }, t, { setup: e }) : e;
}
function ag(e) {
	e.ids = [
		e.ids[0] + e.ids[2]++ + "-",
		0,
		0
	];
}
var ak = /* @__PURE__ */ new WeakMap();
function av(e, t, a, r, s = !1) {
	if (e3(e)) return void e.forEach((e, l) => av(e, t && (e3(t) ? t[l] : t), a, r, s));
	if (ab(r) && !s) {
		512 & r.shapeFlag && r.type.__asyncResolved && r.component.subTree.component && av(e, t, a, r.component.subTree);
		return;
	}
	let l = 4 & r.shapeFlag ? r0(r.component) : r.el, i = s ? null : l, { i: o, r: c } = e, u = t && t.r, p = o.refs === eJ ? o.refs = {} : o.refs, d = o.setupState, f = nN(d), h = d === eJ ? eQ : (e) => e6(f, e);
	if (null != u && u !== c && ((aN(t), e7(u)) ? (p[u] = null, h(u) && (d[u] = null)) : nw(u) && (u.value = null, t.k && (p[t.k] = null))), e8(c)) nV(c, o, 12, [i, p]);
	else {
		let t = e7(c), r = nw(c);
		if (t || r) {
			let o = () => {
				if (e.f) {
					let a = t ? h(c) ? d[c] : p[c] : c.value;
					if (s) e3(a) && e2(a, l);
					else if (e3(a)) a.includes(l) || a.push(l);
					else if (t) p[c] = [l], h(c) && (d[c] = p[c]);
					else {
						let t = [l];
						c.value = t, e.k && (p[e.k] = t);
					}
				} else t ? (p[c] = i, h(c) && (d[c] = i)) : r && (c.value = i, e.k && (p[e.k] = i));
			};
			if (i) {
				let t = () => {
					o(), ak.delete(e);
				};
				t.id = -1, ak.set(e, t), ri(t, a);
			} else aN(e), o();
		}
	}
}
function aN(e) {
	let t = ak.get(e);
	t && (t.flags |= 8, ak.delete(e));
}
tm().requestIdleCallback, tm().cancelIdleCallback;
var ab = (e) => !!e.type.__asyncLoader, a_ = (e) => e.type.__isKeepAlive;
function aw(e, t) {
	ax(e, "a", t);
}
function aO(e, t) {
	ax(e, "da", t);
}
function ax(e, t, a = rK) {
	let r = e.__wdc || (e.__wdc = () => {
		let t = a;
		for (; t;) {
			if (t.isDeactivated) return;
			t = t.parent;
		}
		return e();
	});
	if (aj(t, r, a), a) {
		let e = a.parent;
		for (; e && e.parent;) a_(e.parent.vnode) && function(e, t, a, r) {
			let s = aj(t, e, r, !0);
			aR(() => {
				e2(r[t], s);
			}, a);
		}(r, t, a, e), e = e.parent;
	}
}
function aj(e, t, a = rK, r = !1) {
	if (a) {
		let s = a[e] || (a[e] = []), l = t.__weh || (t.__weh = (...r) => {
			tF();
			let s = rH(a), l = nL(t, a, e, r);
			return s(), tV(), l;
		});
		return r ? s.unshift(l) : s.push(l), l;
	}
}
var aS = (e) => (t, a = rK) => {
	rX && "sp" !== e || aj(e, (...e) => t(...e), a);
}, aP = aS("bm"), aA = aS("m"), aE = aS("bu"), aM = aS("u"), aC = aS("bum"), aR = aS("um"), aT = aS("sp"), a$ = aS("rtg"), aF = aS("rtc");
function aV(e, t = rK) {
	aj("ec", e, t);
}
var aL = Symbol.for("v-ndc"), aD = (e) => e ? rJ(e) ? r0(e) : aD(e.parent) : null, aI = e1(Object.create(null), {
	$: (e) => e,
	$el: (e) => e.vnode.el,
	$data: (e) => e.data,
	$props: (e) => e.props,
	$attrs: (e) => e.attrs,
	$slots: (e) => e.slots,
	$refs: (e) => e.refs,
	$parent: (e) => aD(e.parent),
	$root: (e) => aD(e.root),
	$host: (e) => e.ce,
	$emit: (e) => e.emit,
	$options: (e) => aq(e),
	$forceUpdate: (e) => e.f || (e.f = () => {
		nG(e.update);
	}),
	$nextTick: (e) => e.n || (e.n = nH.bind(e.proxy)),
	$watch: (e) => ry.bind(e)
}), aB = (e, t) => e !== eJ && !e.__isScriptSetup && e6(e, t), aU = {
	get({ _: e }, t) {
		let a, r, s;
		if ("__v_skip" === t) return !0;
		let { ctx: l, setupState: i, data: o, props: c, accessCache: u, type: p, appContext: d } = e;
		if ("$" !== t[0]) {
			let r = u[t];
			if (void 0 !== r) switch (r) {
				case 1: return i[t];
				case 2: return o[t];
				case 4: return l[t];
				case 3: return c[t];
			}
			else {
				if (aB(i, t)) return u[t] = 1, i[t];
				if (o !== eJ && e6(o, t)) return u[t] = 2, o[t];
				if ((a = e.propsOptions[0]) && e6(a, t)) return u[t] = 3, c[t];
				if (l !== eJ && e6(l, t)) return u[t] = 4, l[t];
				az && (u[t] = 0);
			}
		}
		let f = aI[t];
		return f ? ("$attrs" === t && tq(e.attrs, "get", ""), f(e)) : (r = p.__cssModules) && (r = r[t]) ? r : l !== eJ && e6(l, t) ? (u[t] = 4, l[t]) : e6(s = d.config.globalProperties, t) ? s[t] : void 0;
	},
	set({ _: e }, t, a) {
		let { data: r, setupState: s, ctx: l } = e;
		return aB(s, t) ? (s[t] = a, !0) : r !== eJ && e6(r, t) ? (r[t] = a, !0) : !e6(e.props, t) && !("$" === t[0] && t.slice(1) in e) && (l[t] = a, !0);
	},
	has({ _: { data: e, setupState: t, accessCache: a, ctx: r, appContext: s, propsOptions: l, type: i } }, o) {
		let c, u;
		return !!(a[o] || e !== eJ && "$" !== o[0] && e6(e, o) || aB(t, o) || (c = l[0]) && e6(c, o) || e6(r, o) || e6(aI, o) || e6(s.config.globalProperties, o) || (u = i.__cssModules) && u[o]);
	},
	defineProperty(e, t, a) {
		return null != a.get ? e._.accessCache[t] = 0 : e6(a, "value") && this.set(e, t, a.value, null), Reflect.defineProperty(e, t, a);
	}
};
function aW(e) {
	return e3(e) ? e.reduce((e, t) => (e[t] = null, e), {}) : e;
}
var az = !0;
function aK(e, t, a) {
	nL(e3(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, a);
}
function aq(e) {
	let t, a = e.type, { mixins: r, extends: s } = a, { mixins: l, optionsCache: i, config: { optionMergeStrategies: o } } = e.appContext, c = i.get(a);
	return c ? t = c : l.length || r || s ? (t = {}, l.length && l.forEach((e) => aH(t, e, o, !0)), aH(t, a, o)) : t = a, e9(a) && i.set(a, t), t;
}
function aH(e, t, a, r = !1) {
	let { mixins: s, extends: l } = t;
	for (let i in l && aH(e, l, a, !0), s && s.forEach((t) => aH(e, t, a, !0)), t) if (r && "expose" === i);
	else {
		let r = aG[i] || a && a[i];
		e[i] = r ? r(e[i], t[i]) : t[i];
	}
	return e;
}
var aG = {
	data: aJ,
	props: aY,
	emits: aY,
	methods: aQ,
	computed: aQ,
	beforeCreate: aZ,
	created: aZ,
	beforeMount: aZ,
	mounted: aZ,
	beforeUpdate: aZ,
	updated: aZ,
	beforeDestroy: aZ,
	beforeUnmount: aZ,
	destroyed: aZ,
	unmounted: aZ,
	activated: aZ,
	deactivated: aZ,
	errorCaptured: aZ,
	serverPrefetch: aZ,
	components: aQ,
	directives: aQ,
	watch: function(e, t) {
		if (!e) return t;
		if (!t) return e;
		let a = e1(Object.create(null), e);
		for (let r in t) a[r] = aZ(e[r], t[r]);
		return a;
	},
	provide: aJ,
	inject: function(e, t) {
		return aQ(aX(e), aX(t));
	}
};
function aJ(e, t) {
	return t ? e ? function() {
		return e1(e8(e) ? e.call(this, this) : e, e8(t) ? t.call(this, this) : t);
	} : t : e;
}
function aX(e) {
	if (e3(e)) {
		let t = {};
		for (let a = 0; a < e.length; a++) t[e[a]] = e[a];
		return t;
	}
	return e;
}
function aZ(e, t) {
	return e ? [...new Set([].concat(e, t))] : t;
}
function aQ(e, t) {
	return e ? e1(Object.create(null), e, t) : t;
}
function aY(e, t) {
	return e ? e3(e) && e3(t) ? [...new Set([...e, ...t])] : e1(Object.create(null), aW(e), aW(null != t ? t : {})) : t;
}
function a0() {
	return {
		app: null,
		config: {
			isNativeTag: eQ,
			performance: !1,
			globalProperties: {},
			optionMergeStrategies: {},
			errorHandler: void 0,
			warnHandler: void 0,
			compilerOptions: {}
		},
		mixins: [],
		components: {},
		directives: {},
		provides: Object.create(null),
		optionsCache: /* @__PURE__ */ new WeakMap(),
		propsCache: /* @__PURE__ */ new WeakMap(),
		emitsCache: /* @__PURE__ */ new WeakMap()
	};
}
var a1 = 0, a2 = null;
function a4(e, t) {
	if (rK) {
		let a = rK.provides, r = rK.parent && rK.parent.provides;
		r === a && (a = rK.provides = Object.create(r)), a[e] = t;
	}
}
function a6(e, t, a = !1) {
	let r = rq();
	if (r || a2) {
		let s = a2 ? a2._context.provides : r ? null == r.parent || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
		if (s && e in s) return s[e];
		if (arguments.length > 1) return a && e8(t) ? t.call(r && r.proxy) : t;
	}
}
var a3 = {}, a8 = (e) => Object.getPrototypeOf(e) === a3;
function a7(e, t, a, r) {
	let s, [l, i] = e.propsOptions, o = !1;
	if (t) for (let c in t) {
		let u;
		if (ta(c)) continue;
		let p = t[c];
		l && e6(l, u = tl(c)) ? i && i.includes(u) ? (s || (s = {}))[u] = p : a[u] = p : rN(e.emitsOptions, c) || c in r && p === r[c] || (r[c] = p, o = !0);
	}
	if (i) {
		let t = nN(a), r = s || eJ;
		for (let s = 0; s < i.length; s++) {
			let o = i[s];
			a[o] = a5(l, t, o, r[o], e, !e6(r, o));
		}
	}
	return o;
}
function a5(e, t, a, r, s, l) {
	let i = e[a];
	if (null != i) {
		let e = e6(i, "default");
		if (e && void 0 === r) {
			let e = i.default;
			if (i.type !== Function && !i.skipFactory && e8(e)) {
				let { propsDefaults: l } = s;
				if (a in l) r = l[a];
				else {
					let i = rH(s);
					r = l[a] = e.call(null, t), i();
				}
			} else r = e;
			s.ce && s.ce._setProp(a, r);
		}
		i[0] && (l && !e ? r = !1 : i[1] && ("" === r || r === to(a)) && (r = !0));
	}
	return r;
}
var a9 = /* @__PURE__ */ new WeakMap();
function re(e) {
	return !("$" === e[0] || ta(e));
}
var rt = (e) => "_" === e || "_ctx" === e || "$stable" === e, rn = (e) => e3(e) ? e.map(rD) : [rD(e)], ra = (e, t, a) => {
	if (t._n) return t;
	let r = function(e, t = nY, a) {
		if (!t || e._n) return e;
		let r = (...a) => {
			let s;
			r._d && rC(-1);
			let l = n1(t);
			try {
				s = e(...a);
			} finally {
				n1(l), r._d && rC(1);
			}
			return s;
		};
		return r._n = !0, r._c = !0, r._d = !0, r;
	}((...e) => rn(t(...e)), a);
	return r._c = !1, r;
}, rr = (e, t, a) => {
	let r = e._ctx;
	for (let a in e) {
		if (rt(a)) continue;
		let s = e[a];
		if (e8(s)) t[a] = ra(a, s, r);
		else if (null != s) {
			let e = rn(s);
			t[a] = () => e;
		}
	}
}, rs = (e, t) => {
	let a = rn(t);
	e.slots.default = () => a;
}, rl = (e, t, a) => {
	for (let r in t) (a || !rt(r)) && (e[r] = t[r]);
}, ri = function(e, t) {
	if (t && t.pendingBranch) e3(e) ? t.effects.push(...e) : t.effects.push(e);
	else e3(e) ? nU.push(...e) : nW && -1 === e.id ? nW.splice(nz + 1, 0, e) : 1 & e.flags || (nU.push(e), e.flags |= 1), nJ();
};
function ro(e) {
	return function(e, t) {
		var a;
		let r, s;
		tm().__VUE__ = !0;
		let { insert: l, remove: i, patchProp: o, createElement: c, createText: u, createComment: p, setText: d, setElementText: f, parentNode: h, nextSibling: m, setScopeId: y = eZ, insertStaticContent: g } = e, k = (e, t, a, r = null, s = null, l = null, i, o = null, c = !!t.dynamicChildren) => {
			if (e === t) return;
			e && !rT(e, t) && (r = q(e), B(e, s, l, !0), e = null), -2 === t.patchFlag && (c = !1, t.dynamicChildren = null);
			let { type: u, ref: p, shapeFlag: d } = t;
			switch (u) {
				case rS:
					N(e, t, a, r);
					break;
				case rP:
					b(e, t, a, r);
					break;
				case rA:
					e ?? _(t, a, r, i);
					break;
				case rj:
					E(e, t, a, r, s, l, i, o, c);
					break;
				default: 1 & d ? w(e, t, a, r, s, l, i, o, c) : 6 & d ? M(e, t, a, r, s, l, i, o, c) : 64 & d ? u.process(e, t, a, r, s, l, i, o, c, J) : 128 & d && u.process(e, t, a, r, s, l, i, o, c, J);
			}
			null != p && s ? av(p, e && e.ref, l, t || e, !t) : null == p && e && null != e.ref && av(e.ref, null, l, e, !0);
		}, N = (e, t, a, r) => {
			if (null == e) l(t.el = u(t.children), a, r);
			else {
				let a = t.el = e.el;
				t.children !== e.children && d(a, t.children);
			}
		}, b = (e, t, a, r) => {
			null == e ? l(t.el = p(t.children || ""), a, r) : t.el = e.el;
		}, _ = (e, t, a, r) => {
			[e.el, e.anchor] = g(e.children, t, a, r, e.el, e.anchor);
		}, w = (e, t, a, r, s, l, i, o, c) => {
			"svg" === t.type ? i = "svg" : "math" === t.type && (i = "mathml"), null == e ? O(t, a, r, s, l, i, o, c) : S(e, t, s, l, i, o, c);
		}, O = (e, t, a, r, s, i, u, p) => {
			var d, h;
			let m, y, { props: g, shapeFlag: k, transition: N, dirs: b } = e;
			if (m = e.el = c(e.type, i, g && g.is, g), 8 & k ? f(m, e.children) : 16 & k && j(e.children, m, null, r, s, rc(e, i), u, p), b && n2(e, null, r, "created"), x(m, e, e.scopeId, u, r), g) {
				for (let e in g) "value" === e || ta(e) || o(m, e, null, g[e], i, r);
				"value" in g && o(m, "value", null, g.value, i), (y = g.onVnodeBeforeMount) && rU(y, r, e);
			}
			b && n2(e, null, r, "beforeMount");
			let _ = (d = s, h = N, (!d || d && !d.pendingBranch) && h && !h.persisted);
			_ && N.beforeEnter(m), l(m, t, a), ((y = g && g.onVnodeMounted) || _ || b) && ri(() => {
				y && rU(y, r, e), _ && N.enter(m), b && n2(e, null, r, "mounted");
			}, s);
		}, x = (e, t, a, r, s) => {
			if (a && y(e, a), r) for (let t = 0; t < r.length; t++) y(e, r[t]);
			if (s) {
				let a = s.subTree;
				if (t === a || rx(a.type) && (a.ssContent === t || a.ssFallback === t)) {
					let t = s.vnode;
					x(e, t, t.scopeId, t.slotScopeIds, s.parent);
				}
			}
		}, j = (e, t, a, r, s, l, i, o, c = 0) => {
			for (let u = c; u < e.length; u++) k(null, e[u] = o ? rI(e[u]) : rD(e[u]), t, a, r, s, l, i, o);
		}, S = (e, t, a, r, s, l, i) => {
			let c, u = t.el = e.el, { patchFlag: p, dynamicChildren: d, dirs: h } = t;
			p |= 16 & e.patchFlag;
			let m = e.props || eJ, y = t.props || eJ;
			if (a && ru(a, !1), (c = y.onVnodeBeforeUpdate) && rU(c, a, t, e), h && n2(t, e, a, "beforeUpdate"), a && ru(a, !0), (m.innerHTML && null == y.innerHTML || m.textContent && null == y.textContent) && f(u, ""), d ? P(e.dynamicChildren, d, u, a, r, rc(t, s), l) : i || V(e, t, u, null, a, r, rc(t, s), l, !1), p > 0) {
				if (16 & p) A(u, m, y, a, s);
				else if (2 & p && m.class !== y.class && o(u, "class", null, y.class, s), 4 & p && o(u, "style", m.style, y.style, s), 8 & p) {
					let e = t.dynamicProps;
					for (let t = 0; t < e.length; t++) {
						let r = e[t], l = m[r], i = y[r];
						(i !== l || "value" === r) && o(u, r, l, i, s, a);
					}
				}
				1 & p && e.children !== t.children && f(u, t.children);
			} else i || null != d || A(u, m, y, a, s);
			((c = y.onVnodeUpdated) || h) && ri(() => {
				c && rU(c, a, t, e), h && n2(t, e, a, "updated");
			}, r);
		}, P = (e, t, a, r, s, l, i) => {
			for (let o = 0; o < t.length; o++) {
				let c = e[o], u = t[o];
				k(c, u, c.el && (c.type === rj || !rT(c, u) || 198 & c.shapeFlag) ? h(c.el) : a, null, r, s, l, i, !0);
			}
		}, A = (e, t, a, r, s) => {
			if (t !== a) {
				if (t !== eJ) for (let l in t) ta(l) || l in a || o(e, l, t[l], null, s, r);
				for (let l in a) {
					if (ta(l)) continue;
					let i = a[l], c = t[l];
					i !== c && "value" !== l && o(e, l, c, i, s, r);
				}
				"value" in a && o(e, "value", t.value, a.value, s);
			}
		}, E = (e, t, a, r, s, i, o, c, p) => {
			let d = t.el = e ? e.el : u(""), f = t.anchor = e ? e.anchor : u(""), { patchFlag: h, dynamicChildren: m, slotScopeIds: y } = t;
			y && (c = c ? c.concat(y) : y), null == e ? (l(d, a, r), l(f, a, r), j(t.children || [], a, f, s, i, o, c, p)) : h > 0 && 64 & h && m && e.dynamicChildren ? (P(e.dynamicChildren, m, a, s, i, o, c), (null != t.key || s && t === s.subTree) && rp(e, t, !0)) : V(e, t, a, f, s, i, o, c, p);
		}, M = (e, t, a, r, s, l, i, o, c) => {
			t.slotScopeIds = o, null == e ? 512 & t.shapeFlag ? s.ctx.activate(t, a, r, i, c) : C(t, a, r, s, l, i, c) : R(e, t, c);
		}, C = (e, t, a, r, s, l, i) => {
			var o, c, u;
			let p, d, f, h = (o = e, c = r, u = s, p = o.type, d = (c ? c.appContext : o.appContext) || rW, (f = {
				uid: rz++,
				vnode: o,
				type: p,
				parent: c,
				appContext: d,
				root: null,
				next: null,
				subTree: null,
				effect: null,
				update: null,
				job: null,
				scope: new tw(!0),
				render: null,
				proxy: null,
				exposed: null,
				exposeProxy: null,
				withProxy: null,
				provides: c ? c.provides : Object.create(d.provides),
				ids: c ? c.ids : [
					"",
					0,
					0
				],
				accessCache: null,
				renderCache: [],
				components: null,
				directives: null,
				propsOptions: function e(t, a, r = !1) {
					let s = r ? a9 : a.propsCache, l = s.get(t);
					if (l) return l;
					let i = t.props, o = {}, c = [], u = !1;
					if (!e8(t)) {
						let s = (t) => {
							u = !0;
							let [r, s] = e(t, a, !0);
							e1(o, r), s && c.push(...s);
						};
						!r && a.mixins.length && a.mixins.forEach(s), t.extends && s(t.extends), t.mixins && t.mixins.forEach(s);
					}
					if (!i && !u) return e9(t) && s.set(t, eX), eX;
					if (e3(i)) for (let e = 0; e < i.length; e++) {
						let t = tl(i[e]);
						re(t) && (o[t] = eJ);
					}
					else if (i) for (let e in i) {
						let t = tl(e);
						if (re(t)) {
							let a = i[e], r = o[t] = e3(a) || e8(a) ? { type: a } : e1({}, a), s = r.type, l = !1, u = !0;
							if (e3(s)) for (let e = 0; e < s.length; ++e) {
								let t = s[e], a = e8(t) && t.name;
								if ("Boolean" === a) {
									l = !0;
									break;
								}
								"String" === a && (u = !1);
							}
							else l = e8(s) && "Boolean" === s.name;
							r[0] = l, r[1] = u, (l || e6(r, "default")) && c.push(t);
						}
					}
					let p = [o, c];
					return e9(t) && s.set(t, p), p;
				}(p, d),
				emitsOptions: function e(t, a, r = !1) {
					let s = r ? rv : a.emitsCache, l = s.get(t);
					if (void 0 !== l) return l;
					let i = t.emits, o = {}, c = !1;
					if (!e8(t)) {
						let s = (t) => {
							let r = e(t, a, !0);
							r && (c = !0, e1(o, r));
						};
						!r && a.mixins.length && a.mixins.forEach(s), t.extends && s(t.extends), t.mixins && t.mixins.forEach(s);
					}
					return i || c ? (e3(i) ? i.forEach((e) => o[e] = null) : e1(o, i), e9(t) && s.set(t, o), o) : (e9(t) && s.set(t, null), null);
				}(p, d),
				emit: null,
				emitted: null,
				propsDefaults: eJ,
				inheritAttrs: p.inheritAttrs,
				ctx: eJ,
				data: eJ,
				props: eJ,
				attrs: eJ,
				slots: eJ,
				refs: eJ,
				setupState: eJ,
				setupContext: null,
				suspense: u,
				suspenseId: u ? u.pendingId : 0,
				asyncDep: null,
				asyncResolved: !1,
				isMounted: !1,
				isUnmounted: !1,
				isDeactivated: !1,
				bc: null,
				c: null,
				bm: null,
				m: null,
				bu: null,
				u: null,
				um: null,
				bum: null,
				da: null,
				a: null,
				rtg: null,
				rtc: null,
				ec: null,
				sp: null
			}).ctx = { _: f }, f.root = c ? c.root : f, f.emit = rk.bind(null, f), o.ce && o.ce(f), e.component = f);
			if (a_(e) && (h.ctx.renderer = J), function(e, t = !1, a = !1) {
				t && T(t);
				let { props: r, children: s } = e.vnode, l = rJ(e);
				(function(e, t, a, r = !1) {
					let s = {}, l = Object.create(a3);
					for (let a in e.propsDefaults = Object.create(null), a7(e, t, s, l), e.propsOptions[0]) a in s || (s[a] = void 0);
					a ? e.props = r ? s : nf(s) : e.type.props ? e.props = s : e.props = l, e.attrs = l;
				})(e, r, l, t);
				var i = a || t;
				let o = e.slots = Object.create(a3);
				if (32 & e.vnode.shapeFlag) {
					let e = s._;
					e ? (rl(o, s, i), i && td(o, "_", e, !0)) : rr(s, o);
				} else s && rs(e, s);
				l && function(e, t) {
					let a = e.type;
					e.accessCache = Object.create(null), e.proxy = new Proxy(e.ctx, aU);
					let { setup: r } = a;
					if (r) {
						var s;
						tF();
						let a = e.setupContext = r.length > 1 ? {
							attrs: new Proxy((s = e).attrs, rY),
							slots: s.slots,
							emit: s.emit,
							expose: (e) => {
								s.exposed = e || {};
							}
						} : null, l = rH(e), i = nV(r, e, 0, [e.props, a]), o = te(i);
						if (tV(), l(), (o || e.sp) && !ab(e) && ag(e), o) {
							if (i.then(rG, rG), t) return i.then((a) => {
								rZ(e, a, t);
							}).catch((t) => {
								nD(t, e, 0);
							});
							e.asyncDep = i;
						} else rZ(e, i, t);
					} else rQ(e, t);
				}(e, t), t && T(!1);
			}(h, !1, i), h.asyncDep) {
				if (s && s.registerDep(h, $, i), !e.el) {
					let r = h.subTree = rV(rP);
					b(null, r, t, a), e.placeholder = r.el;
				}
			} else $(h, e, t, a, s, l, i);
		}, R = (e, t, a) => {
			let r = t.component = e.component;
			if (function(e, t, a) {
				let { props: r, children: s, component: l } = e, { props: i, children: o, patchFlag: c } = t, u = l.emitsOptions;
				if (t.dirs || t.transition) return !0;
				if (!a || !(c >= 0)) return (!!s || !!o) && (!o || !o.$stable) || r !== i && (r ? !i || rO(r, i, u) : !!i);
				if (1024 & c) return !0;
				if (16 & c) return r ? rO(r, i, u) : !!i;
				if (8 & c) {
					let e = t.dynamicProps;
					for (let t = 0; t < e.length; t++) {
						let a = e[t];
						if (i[a] !== r[a] && !rN(u, a)) return !0;
					}
				}
				return !1;
			}(e, t, a)) if (r.asyncDep && !r.asyncResolved) return void F(r, t, a);
			else r.next = t, r.update();
			else t.el = e.el, r.vnode = t;
		}, $ = (e, t, a, r, l, i, o) => {
			let c = () => {
				if (e.isMounted) {
					let t, { next: a, bu: r, u: s, parent: u, vnode: p } = e;
					{
						let t = function e(t) {
							let a = t.subTree.component;
							if (a) if (a.asyncDep && !a.asyncResolved) return a;
							else return e(a);
						}(e);
						if (t) {
							a && (a.el = p.el, F(e, a, o)), t.asyncDep.then(() => {
								e.isUnmounted || c();
							});
							return;
						}
					}
					let d = a;
					ru(e, !1), a ? (a.el = p.el, F(e, a, o)) : a = p, r && tp(r), (t = a.props && a.props.onVnodeBeforeUpdate) && rU(t, u, a, p), ru(e, !0);
					let f = rb(e), m = e.subTree;
					e.subTree = f, k(m, f, h(m.el), q(m), e, l, i), a.el = f.el, null === d && function({ vnode: e, parent: t }, a) {
						for (; t;) {
							let r = t.subTree;
							if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e) (e = t.vnode).el = a, t = t.parent;
							else break;
						}
					}(e, f.el), s && ri(s, l), (t = a.props && a.props.onVnodeUpdated) && ri(() => rU(t, u, a, p), l);
				} else {
					let o, { el: c, props: u } = t, { bm: p, m: d, parent: f, root: h, type: m } = e, y = ab(t);
					if (ru(e, !1), p && tp(p), !y && (o = u && u.onVnodeBeforeMount) && rU(o, f, t), ru(e, !0), c && s);
					else {
						h.ce && !1 !== h.ce._def.shadowRoot && h.ce._injectChildStyle(m);
						let s = e.subTree = rb(e);
						k(null, s, a, r, e, l, i), t.el = s.el;
					}
					if (d && ri(d, l), !y && (o = u && u.onVnodeMounted)) {
						let e = t;
						ri(() => rU(o, f, e), l);
					}
					(256 & t.shapeFlag || f && ab(f.vnode) && 256 & f.vnode.shapeFlag) && e.a && ri(e.a, l), e.isMounted = !0, t = a = r = null;
				}
			};
			e.scope.on();
			let u = e.effect = new tx(c);
			e.scope.off();
			let p = e.update = u.run.bind(u), d = e.job = u.runIfDirty.bind(u);
			d.i = e, d.id = e.uid, u.scheduler = () => nG(d), ru(e, !0), p();
		}, F = (e, t, a) => {
			t.component = e;
			let r = e.vnode.props;
			e.vnode = t, e.next = null, function(e, t, a, r) {
				let { props: s, attrs: l, vnode: { patchFlag: i } } = e, o = nN(s), [c] = e.propsOptions, u = !1;
				if ((r || i > 0) && !(16 & i)) {
					if (8 & i) {
						let a = e.vnode.dynamicProps;
						for (let r = 0; r < a.length; r++) {
							let i = a[r];
							if (rN(e.emitsOptions, i)) continue;
							let p = t[i];
							if (c) if (e6(l, i)) p !== l[i] && (l[i] = p, u = !0);
							else {
								let t = tl(i);
								s[t] = a5(c, o, t, p, e, !1);
							}
							else p !== l[i] && (l[i] = p, u = !0);
						}
					}
				} else {
					let r;
					for (let i in a7(e, t, s, l) && (u = !0), o) t && (e6(t, i) || (r = to(i)) !== i && e6(t, r)) || (c ? a && (void 0 !== a[i] || void 0 !== a[r]) && (s[i] = a5(c, o, i, void 0, e, !0)) : delete s[i]);
					if (l !== o) for (let e in l) t && e6(t, e) || (delete l[e], u = !0);
				}
				u && tH(e.attrs, "set", "");
			}(e, t.props, r, a), ((e, t, a) => {
				let { vnode: r, slots: s } = e, l = !0, i = eJ;
				if (32 & r.shapeFlag) {
					let e = t._;
					e ? a && 1 === e ? l = !1 : rl(s, t, a) : (l = !t.$stable, rr(t, s)), i = t;
				} else t && (rs(e, t), i = { default: 1 });
				if (l) for (let e in s) rt(e) || null != i[e] || delete s[e];
			})(e, t.children, a), tF(), nX(e), tV();
		}, V = (e, t, a, r, s, l, i, o, c = !1) => {
			let u = e && e.children, p = e ? e.shapeFlag : 0, d = t.children, { patchFlag: h, shapeFlag: m } = t;
			if (h > 0) {
				if (128 & h) return void D(u, d, a, r, s, l, i, o, c);
				else if (256 & h) return void L(u, d, a, r, s, l, i, o, c);
			}
			8 & m ? (16 & p && K(u, s, l), d !== u && f(a, d)) : 16 & p ? 16 & m ? D(u, d, a, r, s, l, i, o, c) : K(u, s, l, !0) : (8 & p && f(a, ""), 16 & m && j(d, a, r, s, l, i, o, c));
		}, L = (e, t, a, r, s, l, i, o, c) => {
			let u;
			e = e || eX, t = t || eX;
			let p = e.length, d = t.length, f = Math.min(p, d);
			for (u = 0; u < f; u++) {
				let r = t[u] = c ? rI(t[u]) : rD(t[u]);
				k(e[u], r, a, null, s, l, i, o, c);
			}
			p > d ? K(e, s, l, !0, !1, f) : j(t, a, r, s, l, i, o, c, f);
		}, D = (e, t, a, r, s, l, i, o, c) => {
			let u = 0, p = t.length, d = e.length - 1, f = p - 1;
			for (; u <= d && u <= f;) {
				let r = e[u], p = t[u] = c ? rI(t[u]) : rD(t[u]);
				if (rT(r, p)) k(r, p, a, null, s, l, i, o, c);
				else break;
				u++;
			}
			for (; u <= d && u <= f;) {
				let r = e[d], u = t[f] = c ? rI(t[f]) : rD(t[f]);
				if (rT(r, u)) k(r, u, a, null, s, l, i, o, c);
				else break;
				d--, f--;
			}
			if (u > d) {
				if (u <= f) {
					let e = f + 1, d = e < p ? t[e].el : r;
					for (; u <= f;) k(null, t[u] = c ? rI(t[u]) : rD(t[u]), a, d, s, l, i, o, c), u++;
				}
			} else if (u > f) for (; u <= d;) B(e[u], s, l, !0), u++;
			else {
				let h, m = u, y = u, g = /* @__PURE__ */ new Map();
				for (u = y; u <= f; u++) {
					let e = t[u] = c ? rI(t[u]) : rD(t[u]);
					null != e.key && g.set(e.key, u);
				}
				let N = 0, b = f - y + 1, _ = !1, w = 0, O = Array(b);
				for (u = 0; u < b; u++) O[u] = 0;
				for (u = m; u <= d; u++) {
					let r, p = e[u];
					if (N >= b) {
						B(p, s, l, !0);
						continue;
					}
					if (null != p.key) r = g.get(p.key);
					else for (h = y; h <= f; h++) if (0 === O[h - y] && rT(p, t[h])) {
						r = h;
						break;
					}
					void 0 === r ? B(p, s, l, !0) : (O[r - y] = u + 1, r >= w ? w = r : _ = !0, k(p, t[r], a, null, s, l, i, o, c), N++);
				}
				let x = _ ? function(e) {
					let t, a, r, s, l, i = e.slice(), o = [0], c = e.length;
					for (t = 0; t < c; t++) {
						let c = e[t];
						if (0 !== c) {
							if (e[a = o[o.length - 1]] < c) {
								i[t] = a, o.push(t);
								continue;
							}
							for (r = 0, s = o.length - 1; r < s;) e[o[l = r + s >> 1]] < c ? r = l + 1 : s = l;
							c < e[o[r]] && (r > 0 && (i[t] = o[r - 1]), o[r] = t);
						}
					}
					for (r = o.length, s = o[r - 1]; r-- > 0;) o[r] = s, s = i[s];
					return o;
				}(O) : eX;
				for (h = x.length - 1, u = b - 1; u >= 0; u--) {
					let e = y + u, d = t[e], f = t[e + 1], m = e + 1 < p ? f.el || f.placeholder : r;
					0 === O[u] ? k(null, d, a, m, s, l, i, o, c) : _ && (h < 0 || u !== x[h] ? I(d, a, m, 2) : h--);
				}
			}
		}, I = (e, t, a, r, s = null) => {
			let { el: o, type: c, transition: u, children: p, shapeFlag: d } = e;
			if (6 & d) return void I(e.component.subTree, t, a, r);
			if (128 & d) return void e.suspense.move(t, a, r);
			if (64 & d) return void c.move(e, t, a, J);
			if (c === rj) {
				l(o, t, a);
				for (let e = 0; e < p.length; e++) I(p[e], t, a, r);
				l(e.anchor, t, a);
				return;
			}
			if (c === rA) return void (({ el: e, anchor: t }, a, r) => {
				let s;
				for (; e && e !== t;) s = m(e), l(e, a, r), e = s;
				l(t, a, r);
			})(e, t, a);
			if (2 !== r && 1 & d && u) if (0 === r) u.beforeEnter(o), l(o, t, a), ri(() => u.enter(o), s);
			else {
				let { leave: r, delayLeave: s, afterLeave: c } = u, p = () => {
					e.ctx.isUnmounted ? i(o) : l(o, t, a);
				}, d = () => {
					o._isLeaving && o[ar](!0), r(o, () => {
						p(), c && c();
					});
				};
				s ? s(o, p, d) : d();
			}
			else l(o, t, a);
		}, B = (e, t, a, r = !1, s = !1) => {
			let l, { type: i, props: o, ref: c, children: u, dynamicChildren: p, shapeFlag: d, patchFlag: f, dirs: h, cacheIndex: m } = e;
			if (-2 === f && (s = !1), null != c && (tF(), av(c, null, a, e, !0), tV()), null != m && (t.renderCache[m] = void 0), 256 & d) return void t.ctx.deactivate(e);
			let y = 1 & d && h, g = !ab(e);
			if (g && (l = o && o.onVnodeBeforeUnmount) && rU(l, t, e), 6 & d) z(e.component, a, r);
			else {
				if (128 & d) return void e.suspense.unmount(a, r);
				y && n2(e, null, t, "beforeUnmount"), 64 & d ? e.type.remove(e, t, a, J, r) : p && !p.hasOnce && (i !== rj || f > 0 && 64 & f) ? K(p, t, a, !1, !0) : (i === rj && 384 & f || !s && 16 & d) && K(u, t, a), r && U(e);
			}
			(g && (l = o && o.onVnodeUnmounted) || y) && ri(() => {
				l && rU(l, t, e), y && n2(e, null, t, "unmounted");
			}, a);
		}, U = (e) => {
			let { type: t, el: a, anchor: r, transition: s } = e;
			if (t === rj) return void W(a, r);
			if (t === rA) return void (({ el: e, anchor: t }) => {
				let a;
				for (; e && e !== t;) a = m(e), i(e), e = a;
				i(t);
			})(e);
			let l = () => {
				i(a), s && !s.persisted && s.afterLeave && s.afterLeave();
			};
			if (1 & e.shapeFlag && s && !s.persisted) {
				let { leave: t, delayLeave: r } = s, i = () => t(a, l);
				r ? r(e.el, l, i) : i();
			} else l();
		}, W = (e, t) => {
			let a;
			for (; e !== t;) a = m(e), i(e), e = a;
			i(t);
		}, z = (e, t, a) => {
			let { bum: r, scope: s, job: l, subTree: i, um: o, m: c, a: u } = e;
			rd(c), rd(u), r && tp(r), s.stop(), l && (l.flags |= 8, B(i, e, t, a)), o && ri(o, t), ri(() => {
				e.isUnmounted = !0;
			}, t);
		}, K = (e, t, a, r = !1, s = !1, l = 0) => {
			for (let i = l; i < e.length; i++) B(e[i], t, a, r, s);
		}, q = (e) => {
			if (6 & e.shapeFlag) return q(e.component.subTree);
			if (128 & e.shapeFlag) return e.suspense.next();
			let t = m(e.anchor || e.el), a = t && t[n4];
			return a ? m(a) : t;
		}, H = !1, G = (e, t, a) => {
			null == e ? t._vnode && B(t._vnode, null, null, !0) : k(t._vnode || null, e, t, null, null, null, a), t._vnode = e, H || (H = !0, nX(), nZ(), H = !1);
		}, J = {
			p: k,
			um: B,
			m: I,
			r: U,
			mt: C,
			mc: j,
			pc: V,
			pbc: P,
			n: q,
			o: e
		};
		return {
			render: G,
			hydrate: r,
			createApp: (a = r, function(e, t = null) {
				e8(e) || (e = e1({}, e)), null == t || e9(t) || (t = null);
				let r = a0(), s = /* @__PURE__ */ new WeakSet(), l = [], i = !1, o = r.app = {
					_uid: a1++,
					_component: e,
					_props: t,
					_container: null,
					_context: r,
					_instance: null,
					version: r4,
					get config() {
						return r.config;
					},
					set config(v) {},
					use: (e, ...t) => (s.has(e) || (e && e8(e.install) ? (s.add(e), e.install(o, ...t)) : e8(e) && (s.add(e), e(o, ...t))), o),
					mixin: (e) => (r.mixins.includes(e) || r.mixins.push(e), o),
					component: (e, t) => t ? (r.components[e] = t, o) : r.components[e],
					directive: (e, t) => t ? (r.directives[e] = t, o) : r.directives[e],
					mount(s, l, c) {
						if (!i) {
							let u = o._ceVNode || rV(e, t);
							return u.appContext = r, !0 === c ? c = "svg" : !1 === c && (c = void 0), l && a ? a(u, s) : G(u, s, c), i = !0, o._container = s, s.__vue_app__ = o, r0(u.component);
						}
					},
					onUnmount(e) {
						l.push(e);
					},
					unmount() {
						i && (nL(l, o._instance, 16), G(null, o._container), delete o._container.__vue_app__);
					},
					provide: (e, t) => (r.provides[e] = t, o),
					runWithContext(e) {
						let t = a2;
						a2 = o;
						try {
							return e();
						} finally {
							a2 = t;
						}
					}
				};
				return o;
			})
		};
	}(e);
}
function rc({ type: e, props: t }, a) {
	return "svg" === a && "foreignObject" === e || "mathml" === a && "annotation-xml" === e && t && t.encoding && t.encoding.includes("html") ? void 0 : a;
}
function ru({ effect: e, job: t }, a) {
	a ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function rp(e, t, a = !1) {
	let r = e.children, s = t.children;
	if (e3(r) && e3(s)) for (let e = 0; e < r.length; e++) {
		let t = r[e], l = s[e];
		1 & l.shapeFlag && !l.dynamicChildren && ((l.patchFlag <= 0 || 32 === l.patchFlag) && ((l = s[e] = rI(s[e])).el = t.el), a || -2 === l.patchFlag || rp(t, l)), l.type === rS && -1 !== l.patchFlag && (l.el = t.el), l.type !== rP || l.el || (l.el = t.el);
	}
}
function rd(e) {
	if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
var rf = Symbol.for("v-scx");
function rh(e, t, a) {
	return rm(e, t, a);
}
function rm(e, t, a = eJ) {
	let r, { immediate: s, deep: l, flush: i, once: o } = a, c = e1({}, a), u = t && s || !t && "post" !== i;
	if (rX) {
		if ("sync" === i) {
			let e = a6(rf);
			r = e.__watcherHandles || (e.__watcherHandles = []);
		} else if (!u) {
			let e = () => {};
			return e.stop = eZ, e.resume = eZ, e.pause = eZ, e;
		}
	}
	let p = rK;
	c.call = (e, t, a) => nL(e, p, t, a);
	let d = !1;
	"post" === i ? c.scheduler = (e) => {
		ri(e, p && p.suspense);
	} : "sync" !== i && (d = !0, c.scheduler = (e, t) => {
		t ? e() : nG(e);
	}), c.augmentJob = (e) => {
		t && (e.flags |= 4), d && (e.flags |= 2, p && (e.id = p.uid, e.i = p));
	};
	let f = function(e, t, a = eJ) {
		let r, s, l, i, { immediate: o, deep: c, once: u, scheduler: p, augmentJob: d, call: f } = a, h = (e) => c ? e : nk(e) || !1 === c || 0 === c ? nF(e, 1) : nF(e), m = !1, y = !1;
		if (nw(e) ? (s = () => e.value, m = nk(e)) : ny(e) ? (s = () => h(e), m = !0) : e3(e) ? (y = !0, m = e.some((e) => ny(e) || nk(e)), s = () => e.map((e) => nw(e) ? e.value : ny(e) ? h(e) : e8(e) ? f ? f(e, 2) : e() : void 0)) : s = e8(e) ? t ? f ? () => f(e, 2) : e : () => {
			if (l) {
				tF();
				try {
					l();
				} finally {
					tV();
				}
			}
			let t = n$;
			n$ = r;
			try {
				return f ? f(e, 3, [i]) : e(i);
			} finally {
				n$ = t;
			}
		} : eZ, t && c) {
			let e = s, t = !0 === c ? Infinity : c;
			s = () => nF(e(), t);
		}
		let g = A, k = () => {
			r.stop(), g && g.active && e2(g.effects, r);
		};
		if (u && t) {
			let e = t;
			t = (...t) => {
				e(...t), k();
			};
		}
		let N = y ? Array(e.length).fill(nR) : nR, b = (e) => {
			if (1 & r.flags && (r.dirty || e)) if (t) {
				let e = r.run();
				if (c || m || (y ? e.some((e, t) => !Object.is(e, N[t])) : !Object.is(e, N))) {
					l && l();
					let a = n$;
					n$ = r;
					try {
						let a = [
							e,
							N === nR ? void 0 : y && N[0] === nR ? [] : N,
							i
						];
						N = e, f ? f(t, 3, a) : t(...a);
					} finally {
						n$ = a;
					}
				}
			} else r.run();
		};
		return d && d(b), (r = new tx(s)).scheduler = p ? () => p(b, !1) : b, i = (e) => (function(e, t = !1, a = n$) {
			if (a) {
				let t = nT.get(a);
				t || nT.set(a, t = []), t.push(e);
			}
		})(e, !1, r), l = r.onStop = () => {
			let e = nT.get(r);
			if (e) {
				if (f) f(e, 4);
				else for (let t of e) t();
				nT.delete(r);
			}
		}, t ? o ? b(!0) : N = r.run() : p ? p(b.bind(null, !0), !0) : r.run(), k.pause = r.pause.bind(r), k.resume = r.resume.bind(r), k.stop = k, k;
	}(e, t, c);
	return rX && (r ? r.push(f) : u && f()), f;
}
function ry(e, t, a) {
	let r, s = this.proxy, l = e7(e) ? e.includes(".") ? rg(s, e) : () => s[e] : e.bind(s, s);
	e8(t) ? r = t : (r = t.handler, a = t);
	let i = rH(this), o = rm(l, r.bind(s), a);
	return i(), o;
}
function rg(e, t) {
	let a = t.split(".");
	return () => {
		let t = e;
		for (let e = 0; e < a.length && t; e++) t = t[a[e]];
		return t;
	};
}
function rk(e, t, ...a) {
	let r, s;
	if (e.isUnmounted) return;
	let l = e.vnode.props || eJ, i = a, o = t.startsWith("update:"), c = o && ("modelValue" === (s = t.slice(7)) || "model-value" === s ? l.modelModifiers : l[`${s}Modifiers`] || l[`${tl(s)}Modifiers`] || l[`${to(s)}Modifiers`]);
	c && (c.trim && (i = a.map((e) => e7(e) ? e.trim() : e)), c.number && (i = a.map(tf)));
	let u = l[r = tu(t)] || l[r = tu(tl(t))];
	!u && o && (u = l[r = tu(to(t))]), u && nL(u, e, 6, i);
	let p = l[r + "Once"];
	if (p) {
		if (e.emitted) {
			if (e.emitted[r]) return;
		} else e.emitted = {};
		e.emitted[r] = !0, nL(p, e, 6, i);
	}
}
var rv = /* @__PURE__ */ new WeakMap();
function rN(e, t) {
	return !!e && !!eY(t) && (e6(e, (t = t.slice(2).replace(/Once$/, ""))[0].toLowerCase() + t.slice(1)) || e6(e, to(t)) || e6(e, t));
}
function rb(e) {
	let t, a, { type: r, vnode: s, proxy: l, withProxy: i, propsOptions: [o], slots: c, attrs: u, emit: p, render: d, renderCache: f, props: h, data: m, setupState: y, ctx: g, inheritAttrs: k } = e, N = n1(e);
	try {
		if (4 & s.shapeFlag) {
			let e = i || l;
			t = rD(d.call(e, e, f, h, y, m, g)), a = u;
		} else t = rD(r.length > 1 ? r(h, {
			attrs: u,
			slots: c,
			emit: p
		}) : r(h, null)), a = r.props ? u : r_(u);
	} catch (a) {
		rE.length = 0, nD(a, e, 1), t = rV(rP);
	}
	let b = t;
	if (a && !1 !== k) {
		let e = Object.keys(a), { shapeFlag: t } = b;
		e.length && 7 & t && (o && e.some(e0) && (a = rw(a, o)), b = rL(b, a, !1, !0));
	}
	return s.dirs && ((b = rL(b, null, !1, !0)).dirs = b.dirs ? b.dirs.concat(s.dirs) : s.dirs), s.transition && am(b, s.transition), t = b, n1(N), t;
}
var r_ = (e) => {
	let t;
	for (let a in e) ("class" === a || "style" === a || eY(a)) && ((t || (t = {}))[a] = e[a]);
	return t;
}, rw = (e, t) => {
	let a = {};
	for (let r in e) e0(r) && r.slice(9) in t || (a[r] = e[r]);
	return a;
};
function rO(e, t, a) {
	let r = Object.keys(t);
	if (r.length !== Object.keys(e).length) return !0;
	for (let s = 0; s < r.length; s++) {
		let l = r[s];
		if (t[l] !== e[l] && !rN(a, l)) return !0;
	}
	return !1;
}
var rx = (e) => e.__isSuspense, rj = Symbol.for("v-fgt"), rS = Symbol.for("v-txt"), rP = Symbol.for("v-cmt"), rA = Symbol.for("v-stc"), rE = [], rM = 1;
function rC(e, t = !1) {
	rM += e;
}
function rR(e) {
	return !!e && !0 === e.__v_isVNode;
}
function rT(e, t) {
	return e.type === t.type && e.key === t.key;
}
var r$ = ({ key: e }) => null != e ? e : null, rF = ({ ref: e, ref_key: t, ref_for: a }) => ("number" == typeof e && (e = "" + e), null != e ? e7(e) || nw(e) || e8(e) ? {
	i: nY,
	r: e,
	k: t,
	f: !!a
} : e : null), rV = function(e, t = null, a = null, r = 0, s = null, l = !1) {
	var i, o;
	if (e && e !== aL || (e = rP), rR(e)) {
		let r = rL(e, t, !0);
		return a && rB(r, a), r.patchFlag = -2, r;
	}
	if (e8(i = e) && "__vccOpts" in i && (e = e.__vccOpts), t) {
		let { class: e, style: a } = t = (o = t) ? nv(o) || a8(o) ? e1({}, o) : o : null;
		e && !e7(e) && (t.class = tN(e)), e9(a) && (nv(a) && !e3(a) && (a = e1({}, a)), t.style = ty(a));
	}
	let c = e7(e) ? 1 : rx(e) ? 128 : e.__isTeleport ? 64 : e9(e) ? 4 : 2 * !!e8(e);
	return function(e, t = null, a = null, r = 0, s = null, l = +(e !== rj), i = !1, o = !1) {
		let c = {
			__v_isVNode: !0,
			__v_skip: !0,
			type: e,
			props: t,
			key: t && r$(t),
			ref: t && rF(t),
			scopeId: n0,
			slotScopeIds: null,
			children: a,
			component: null,
			suspense: null,
			ssContent: null,
			ssFallback: null,
			dirs: null,
			transition: null,
			el: null,
			anchor: null,
			target: null,
			targetStart: null,
			targetAnchor: null,
			staticCount: 0,
			shapeFlag: l,
			patchFlag: r,
			dynamicProps: s,
			dynamicChildren: null,
			appContext: null,
			ctx: nY
		};
		return o ? (rB(c, a), 128 & l && e.normalize(c)) : a && (c.shapeFlag |= e7(a) ? 8 : 16), c;
	}(e, t, a, r, s, c, l, !0);
};
function rL(e, t, a = !1, r = !1) {
	let { props: s, ref: l, patchFlag: i, children: o, transition: c } = e, u = t ? function(...e) {
		let t = {};
		for (let a = 0; a < e.length; a++) {
			let r = e[a];
			for (let e in r) if ("class" === e) t.class !== r.class && (t.class = tN([t.class, r.class]));
			else if ("style" === e) t.style = ty([t.style, r.style]);
			else if (eY(e)) {
				let a = t[e], s = r[e];
				s && a !== s && !(e3(a) && a.includes(s)) && (t[e] = a ? [].concat(a, s) : s);
			} else "" !== e && (t[e] = r[e]);
		}
		return t;
	}(s || {}, t) : s, p = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: u,
		key: u && r$(u),
		ref: t && t.ref ? a && l ? e3(l) ? l.concat(rF(t)) : [l, rF(t)] : rF(t) : l,
		scopeId: e.scopeId,
		slotScopeIds: e.slotScopeIds,
		children: o,
		target: e.target,
		targetStart: e.targetStart,
		targetAnchor: e.targetAnchor,
		staticCount: e.staticCount,
		shapeFlag: e.shapeFlag,
		patchFlag: t && e.type !== rj ? -1 === i ? 16 : 16 | i : i,
		dynamicProps: e.dynamicProps,
		dynamicChildren: e.dynamicChildren,
		appContext: e.appContext,
		dirs: e.dirs,
		transition: c,
		component: e.component,
		suspense: e.suspense,
		ssContent: e.ssContent && rL(e.ssContent),
		ssFallback: e.ssFallback && rL(e.ssFallback),
		placeholder: e.placeholder,
		el: e.el,
		anchor: e.anchor,
		ctx: e.ctx,
		ce: e.ce
	};
	return c && r && am(p, c.clone(p)), p;
}
function rD(e) {
	return null == e || "boolean" == typeof e ? rV(rP) : e3(e) ? rV(rj, null, e.slice()) : rR(e) ? rI(e) : rV(rS, null, String(e));
}
function rI(e) {
	return null === e.el && -1 !== e.patchFlag || e.memo ? e : rL(e);
}
function rB(e, t) {
	let a = 0, { shapeFlag: r } = e;
	if (null == t) t = null;
	else if (e3(t)) a = 16;
	else if ("object" == typeof t) if (65 & r) {
		let a = t.default;
		a && (a._c && (a._d = !1), rB(e, a()), a._c && (a._d = !0));
		return;
	} else {
		a = 32;
		let r = t._;
		r || a8(t) ? 3 === r && nY && (1 === nY.slots._ ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024)) : t._ctx = nY;
	}
	else e8(t) ? (t = {
		default: t,
		_ctx: nY
	}, a = 32) : (t = String(t), 64 & r ? (a = 16, t = [function(e = " ", t = 0) {
		return rV(rS, null, e, t);
	}(t)]) : a = 8);
	e.children = t, e.shapeFlag |= a;
}
function rU(e, t, a, r = null) {
	nL(e, t, 7, [a, r]);
}
var rW = a0(), rz = 0, rK = null, rq = () => rK || nY;
{
	let e = tm(), t = (t, a) => {
		let r;
		return (r = e[t]) || (r = e[t] = []), r.push(a), (e) => {
			r.length > 1 ? r.forEach((t) => t(e)) : r[0](e);
		};
	};
	R = t("__VUE_INSTANCE_SETTERS__", (e) => rK = e), T = t("__VUE_SSR_SETTERS__", (e) => rX = e);
}
var rH = (e) => {
	let t = rK;
	return R(e), e.scope.on(), () => {
		e.scope.off(), R(t);
	};
}, rG = () => {
	rK && rK.scope.off(), R(null);
};
function rJ(e) {
	return 4 & e.vnode.shapeFlag;
}
var rX = !1;
function rZ(e, t, a) {
	e8(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : e9(t) && (e.setupState = nE(t)), rQ(e, a);
}
function rQ(e, t, a) {
	let r = e.type;
	if (!e.render) {
		if (!t && $ && !r.render) {
			let t = r.template || aq(e).template;
			if (t) {
				let { isCustomElement: a, compilerOptions: s } = e.appContext.config, { delimiters: l, compilerOptions: i } = r;
				r.render = $(t, e1(e1({
					isCustomElement: a,
					delimiters: l
				}, s), i));
			}
		}
		e.render = r.render || eZ, F && F(e);
	}
	{
		let t = rH(e);
		tF();
		try {
			(function(e) {
				let t = aq(e), a = e.proxy, r = e.ctx;
				az = !1, t.beforeCreate && aK(t.beforeCreate, e, "bc");
				let { data: s, computed: l, methods: i, watch: o, provide: c, inject: u, created: p, beforeMount: d, mounted: f, beforeUpdate: h, updated: m, activated: y, deactivated: g, beforeDestroy: k, beforeUnmount: N, destroyed: b, unmounted: _, render: w, renderTracked: O, renderTriggered: x, errorCaptured: j, serverPrefetch: S, expose: P, inheritAttrs: A, components: E, directives: M, filters: C } = t;
				if (u && function(e, t, a = eZ) {
					for (let a in e3(e) && (e = aX(e)), e) {
						let r, s = e[a];
						nw(r = e9(s) ? "default" in s ? a6(s.from || a, s.default, !0) : a6(s.from || a) : a6(s)) ? Object.defineProperty(t, a, {
							enumerable: !0,
							configurable: !0,
							get: () => r.value,
							set: (e) => r.value = e
						}) : t[a] = r;
					}
				}(u, r, null), i) for (let e in i) {
					let t = i[e];
					e8(t) && (r[e] = t.bind(a));
				}
				if (s) {
					let t = s.call(a, a);
					e9(t) && (e.data = nd(t));
				}
				if (az = !0, l) for (let e in l) {
					let t = l[e], s = r1({
						get: e8(t) ? t.bind(a, a) : e8(t.get) ? t.get.bind(a, a) : eZ,
						set: !e8(t) && e8(t.set) ? t.set.bind(a) : eZ
					});
					Object.defineProperty(r, e, {
						enumerable: !0,
						configurable: !0,
						get: () => s.value,
						set: (e) => s.value = e
					});
				}
				if (o) for (let e in o) (function e(t, a, r, s) {
					let l = s.includes(".") ? rg(r, s) : () => r[s];
					if (e7(t)) {
						let e = a[t];
						e8(e) && rh(l, e);
					} else if (e8(t)) rh(l, t.bind(r));
					else if (e9(t)) if (e3(t)) t.forEach((t) => e(t, a, r, s));
					else {
						let e = e8(t.handler) ? t.handler.bind(r) : a[t.handler];
						e8(e) && rh(l, e, t);
					}
				})(o[e], r, a, e);
				if (c) {
					let e = e8(c) ? c.call(a) : c;
					Reflect.ownKeys(e).forEach((t) => {
						a4(t, e[t]);
					});
				}
				function R(e, t) {
					e3(t) ? t.forEach((t) => e(t.bind(a))) : t && e(t.bind(a));
				}
				if (p && aK(p, e, "c"), R(aP, d), R(aA, f), R(aE, h), R(aM, m), R(aw, y), R(aO, g), R(aV, j), R(aF, O), R(a$, x), R(aC, N), R(aR, _), R(aT, S), e3(P)) if (P.length) {
					let t = e.exposed || (e.exposed = {});
					P.forEach((e) => {
						Object.defineProperty(t, e, {
							get: () => a[e],
							set: (t) => a[e] = t,
							enumerable: !0
						});
					});
				} else e.exposed || (e.exposed = {});
				w && e.render === eZ && (e.render = w), null != A && (e.inheritAttrs = A), E && (e.components = E), M && (e.directives = M), S && ag(e);
			})(e);
		} finally {
			tV(), t();
		}
	}
}
var rY = { get: (e, t) => (tq(e, "get", ""), e[t]) };
function r0(e) {
	var t;
	return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(nE((!e6(t = e.exposed, "__v_skip") && Object.isExtensible(t) && td(t, "__v_skip", !0), t)), {
		get: (t, a) => a in t ? t[a] : a in aI ? aI[a](e) : void 0,
		has: (e, t) => t in e || t in aI
	})) : e.proxy;
}
var r1 = (e, t) => (function(e, t, a = !1) {
	let r, s;
	return e8(e) ? r = e : (r = e.get, s = e.set), new nC(r, s, a);
})(e, 0, rX);
function r2(e, t, a) {
	try {
		rC(-1);
		let r = arguments.length;
		if (2 !== r) return r > 3 ? a = Array.prototype.slice.call(arguments, 2) : 3 === r && rR(a) && (a = [a]), rV(e, t, a);
		if (!e9(t) || e3(t)) return rV(e, null, t);
		if (rR(t)) return rV(e, null, [t]);
		return rV(e, t);
	} finally {
		rC(1);
	}
}
var r4 = "3.5.22", r6 = Symbol.for("immer-nothing"), r3 = Symbol.for("immer-draftable"), r8 = Symbol.for("immer-state");
function r7(e) {
	throw Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`);
}
var r5 = Object.getPrototypeOf;
function r9(e) {
	return !!e && !!e[r8];
}
function se(e) {
	return !!e && (sn(e) || Array.isArray(e) || !!e[r3] || !!e.constructor?.[r3] || si(e) || so(e));
}
var st = Object.prototype.constructor.toString();
function sn(e) {
	if (!e || "object" != typeof e) return !1;
	let t = r5(e);
	if (null === t) return !0;
	let a = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
	return a === Object || "function" == typeof a && Function.toString.call(a) === st;
}
function sa(e, t) {
	0 === sr(e) ? Reflect.ownKeys(e).forEach((a) => {
		t(a, e[a], e);
	}) : e.forEach((a, r) => t(r, a, e));
}
function sr(e) {
	let t = e[r8];
	return t ? t.type_ : Array.isArray(e) ? 1 : si(e) ? 2 : 3 * !!so(e);
}
function ss(e, t) {
	return 2 === sr(e) ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function sl(e, t, a) {
	let r = sr(e);
	2 === r ? e.set(t, a) : 3 === r ? e.add(a) : e[t] = a;
}
function si(e) {
	return e instanceof Map;
}
function so(e) {
	return e instanceof Set;
}
function sc(e) {
	return e.copy_ || e.base_;
}
function su(e, t) {
	if (si(e)) return new Map(e);
	if (so(e)) return new Set(e);
	if (Array.isArray(e)) return Array.prototype.slice.call(e);
	let a = sn(e);
	if (!0 !== t && ("class_only" !== t || a)) {
		let t = r5(e);
		return null !== t && a ? { ...e } : Object.assign(Object.create(t), e);
	}
	{
		let t = Object.getOwnPropertyDescriptors(e);
		delete t[r8];
		let a = Reflect.ownKeys(t);
		for (let r = 0; r < a.length; r++) {
			let s = a[r], l = t[s];
			!1 === l.writable && (l.writable = !0, l.configurable = !0), (l.get || l.set) && (t[s] = {
				configurable: !0,
				writable: !0,
				enumerable: l.enumerable,
				value: e[s]
			});
		}
		return Object.create(r5(e), t);
	}
}
function sp(e, t = !1) {
	return sf(e) || r9(e) || !se(e) || (sr(e) > 1 && Object.defineProperties(e, {
		set: { value: sd },
		add: { value: sd },
		clear: { value: sd },
		delete: { value: sd }
	}), Object.freeze(e), t && Object.values(e).forEach((e) => sp(e, !0))), e;
}
function sd() {
	r7(2);
}
function sf(e) {
	return Object.isFrozen(e);
}
var sh = {};
function sm(e) {
	let t = sh[e];
	return t || r7(0, e), t;
}
function sy(e, t) {
	t && (sm("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function sg(e) {
	sk(e), e.drafts_.forEach(sN), e.drafts_ = null;
}
function sk(e) {
	e === V && (V = e.parent_);
}
function sv(e) {
	return V = {
		drafts_: [],
		parent_: V,
		immer_: e,
		canAutoFreeze_: !0,
		unfinalizedDrafts_: 0
	};
}
function sN(e) {
	let t = e[r8];
	0 === t.type_ || 1 === t.type_ ? t.revoke_() : t.revoked_ = !0;
}
function sb(e, t) {
	t.unfinalizedDrafts_ = t.drafts_.length;
	let a = t.drafts_[0];
	return void 0 !== e && e !== a ? (a[r8].modified_ && (sg(t), r7(4)), se(e) && (e = s_(t, e), t.parent_ || sO(t, e)), t.patches_ && sm("Patches").generateReplacementPatches_(a[r8].base_, e, t.patches_, t.inversePatches_)) : e = s_(t, a, []), sg(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== r6 ? e : void 0;
}
function s_(e, t, a) {
	if (sf(t)) return t;
	let r = t[r8];
	if (!r) return sa(t, (s, l) => sw(e, r, t, s, l, a)), t;
	if (r.scope_ !== e) return t;
	if (!r.modified_) return sO(e, r.base_, !0), r.base_;
	if (!r.finalized_) {
		r.finalized_ = !0, r.scope_.unfinalizedDrafts_--;
		let t = r.copy_, s = t, l = !1;
		3 === r.type_ && (s = new Set(t), t.clear(), l = !0), sa(s, (s, i) => sw(e, r, t, s, i, a, l)), sO(e, t, !1), a && e.patches_ && sm("Patches").generatePatches_(r, a, e.patches_, e.inversePatches_);
	}
	return r.copy_;
}
function sw(e, t, a, r, s, l, i) {
	if (r9(s)) {
		let i = s_(e, s, l && t && 3 !== t.type_ && !ss(t.assigned_, r) ? l.concat(r) : void 0);
		if (sl(a, r, i), !r9(i)) return;
		e.canAutoFreeze_ = !1;
	} else i && a.add(s);
	if (se(s) && !sf(s)) {
		if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) return;
		s_(e, s), (!t || !t.scope_.parent_) && "symbol" != typeof r && (si(a) ? a.has(r) : Object.prototype.propertyIsEnumerable.call(a, r)) && sO(e, s);
	}
}
function sO(e, t, a = !1) {
	!e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && sp(t, a);
}
var sx = {
	get(e, t) {
		if (t === r8) return e;
		let a = sc(e);
		if (!ss(a, t)) {
			var r;
			let s;
			return r = e, (s = sP(a, t)) ? "value" in s ? s.value : s.get?.call(r.draft_) : void 0;
		}
		let s = a[t];
		return e.finalized_ || !se(s) ? s : s === sS(e.base_, t) ? (sE(e), e.copy_[t] = sM(s, e)) : s;
	},
	has: (e, t) => t in sc(e),
	ownKeys: (e) => Reflect.ownKeys(sc(e)),
	set(e, t, a) {
		let r = sP(sc(e), t);
		if (r?.set) return r.set.call(e.draft_, a), !0;
		if (!e.modified_) {
			let r = sS(sc(e), t), s = r?.[r8];
			if (s && s.base_ === a) return e.copy_[t] = a, e.assigned_[t] = !1, !0;
			if ((a === r ? 0 !== a || 1 / a == 1 / r : a != a && r != r) && (void 0 !== a || ss(e.base_, t))) return !0;
			sE(e), sA(e);
		}
		return !!(e.copy_[t] === a && (void 0 !== a || t in e.copy_) || Number.isNaN(a) && Number.isNaN(e.copy_[t])) || (e.copy_[t] = a, e.assigned_[t] = !0, !0);
	},
	deleteProperty: (e, t) => (void 0 !== sS(e.base_, t) || t in e.base_ ? (e.assigned_[t] = !1, sE(e), sA(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0),
	getOwnPropertyDescriptor(e, t) {
		let a = sc(e), r = Reflect.getOwnPropertyDescriptor(a, t);
		return r ? {
			writable: !0,
			configurable: 1 !== e.type_ || "length" !== t,
			enumerable: r.enumerable,
			value: a[t]
		} : r;
	},
	defineProperty() {
		r7(11);
	},
	getPrototypeOf: (e) => r5(e.base_),
	setPrototypeOf() {
		r7(12);
	}
}, sj = {};
function sS(e, t) {
	let a = e[r8];
	return (a ? sc(a) : e)[t];
}
function sP(e, t) {
	if (!(t in e)) return;
	let a = r5(e);
	for (; a;) {
		let e = Object.getOwnPropertyDescriptor(a, t);
		if (e) return e;
		a = r5(a);
	}
}
function sA(e) {
	!e.modified_ && (e.modified_ = !0, e.parent_ && sA(e.parent_));
}
function sE(e) {
	e.copy_ || (e.copy_ = su(e.base_, e.scope_.immer_.useStrictShallowCopy_));
}
function sM(e, t) {
	let a = si(e) ? sm("MapSet").proxyMap_(e, t) : so(e) ? sm("MapSet").proxySet_(e, t) : function(e, t) {
		let a = Array.isArray(e), r = {
			type_: +!!a,
			scope_: t ? t.scope_ : V,
			modified_: !1,
			finalized_: !1,
			assigned_: {},
			parent_: t,
			base_: e,
			draft_: null,
			copy_: null,
			revoke_: null,
			isManual_: !1
		}, s = r, l = sx;
		a && (s = [r], l = sj);
		let { revoke: i, proxy: o } = Proxy.revocable(s, l);
		return r.draft_ = o, r.revoke_ = i, o;
	}(e, t);
	return (t ? t.scope_ : V).drafts_.push(a), a;
}
sa(sx, (e, t) => {
	sj[e] = function() {
		return arguments[0] = arguments[0][0], t.apply(this, arguments);
	};
}), sj.deleteProperty = function(e, t) {
	return sj.set.call(this, e, t, void 0);
}, sj.set = function(e, t, a) {
	return sx.set.call(this, e[0], t, a, e[0]);
};
var sC = new class {
	constructor(e) {
		this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (e, t, a) => {
			let r;
			if ("function" == typeof e && "function" != typeof t) {
				let a = t;
				t = e;
				let r = this;
				return function(e = a, ...s) {
					return r.produce(e, (e) => t.call(this, e, ...s));
				};
			}
			if ("function" != typeof t && r7(6), void 0 !== a && "function" != typeof a && r7(7), se(e)) {
				let s = sv(this), l = sM(e, void 0), i = !0;
				try {
					r = t(l), i = !1;
				} finally {
					i ? sg(s) : sk(s);
				}
				return sy(s, a), sb(r, s);
			}
			if (e && "object" == typeof e) r7(1, e);
			else {
				if (void 0 === (r = t(e)) && (r = e), r === r6 && (r = void 0), this.autoFreeze_ && sp(r, !0), a) {
					let t = [], s = [];
					sm("Patches").generateReplacementPatches_(e, r, t, s), a(t, s);
				}
				return r;
			}
		}, this.produceWithPatches = (e, t) => {
			let a, r;
			return "function" == typeof e ? (t, ...a) => this.produceWithPatches(t, (t) => e(t, ...a)) : [
				this.produce(e, t, (e, t) => {
					a = e, r = t;
				}),
				a,
				r
			];
		}, "boolean" == typeof e?.autoFreeze && this.setAutoFreeze(e.autoFreeze), "boolean" == typeof e?.useStrictShallowCopy && this.setUseStrictShallowCopy(e.useStrictShallowCopy);
	}
	createDraft(e) {
		var t;
		se(e) || r7(8), r9(e) && (r9(t = e) || r7(10, t), e = function e(t) {
			let a;
			if (!se(t) || sf(t)) return t;
			let r = t[r8];
			if (r) {
				if (!r.modified_) return r.base_;
				r.finalized_ = !0, a = su(t, r.scope_.immer_.useStrictShallowCopy_);
			} else a = su(t, !0);
			return sa(a, (t, r) => {
				sl(a, t, e(r));
			}), r && (r.finalized_ = !1), a;
		}(t));
		let a = sv(this), r = sM(e, void 0);
		return r[r8].isManual_ = !0, sk(a), r;
	}
	finishDraft(e, t) {
		let a = e && e[r8];
		a && a.isManual_ || r7(9);
		let { scope_: r } = a;
		return sy(r, t), sb(void 0, r);
	}
	setAutoFreeze(e) {
		this.autoFreeze_ = e;
	}
	setUseStrictShallowCopy(e) {
		this.useStrictShallowCopy_ = e;
	}
	applyPatches(e, t) {
		let a;
		for (a = t.length - 1; a >= 0; a--) {
			let r = t[a];
			if (0 === r.path.length && "replace" === r.op) {
				e = r.value;
				break;
			}
		}
		a > -1 && (t = t.slice(a + 1));
		let r = sm("Patches").applyPatches_;
		return r9(e) ? r(e, t) : this.produce(e, (e) => r(e, t));
	}
}().produce;
U = L || (L = {}), function(e) {
	var t = "object" == typeof globalThis ? globalThis : "object" == typeof global ? global : "object" == typeof self ? self : "object" == typeof this ? this : function() {
		throw ReferenceError("globalThis could not be found. Please polyfill globalThis before loading this module.");
	}(), a = r(U);
	function r(e, t) {
		return function(a, r) {
			Object.defineProperty(e, a, {
				configurable: !0,
				writable: !0,
				value: r
			}), t && t(a, r);
		};
	}
	void 0 !== t.Reflect && (a = r(t.Reflect, a)), e(a, t), void 0 === t.Reflect && (t.Reflect = U);
}(function(e, t) {
	var a, r = "function" == typeof Symbol, s = r && void 0 !== Symbol.toPrimitive ? Symbol.toPrimitive : C("Symbol.toPrimitive not found."), l = r && void 0 !== Symbol.iterator ? Symbol.iterator : C("Symbol.iterator not found."), i = Object.getPrototypeOf(Function), o = "function" == typeof Map && "function" == typeof Map.prototype.entries ? Map : C("A valid Map constructor could not be found."), c = "function" == typeof Set && "function" == typeof Set.prototype.entries ? Set : C("A valid Set constructor could not be found."), u = "function" == typeof WeakMap ? WeakMap : C("A valid WeakMap constructor could not be found."), p = r ? Symbol.for("@reflect-metadata:registry") : void 0, d = (!N(p) && _(t.Reflect) && Object.isExtensible(t.Reflect) && (a = t.Reflect[p]), N(a) && (a = function() {
		N(p) || void 0 === t.Reflect || p in t.Reflect || "function" != typeof t.Reflect.defineMetadata || (a = (e = t.Reflect).defineMetadata, r = e.hasOwnMetadata, s = e.getOwnMetadata, l = e.getOwnMetadataKeys, i = e.deleteMetadata, d = new u(), f = {
			isProviderFor: function(e, t) {
				var a = d.get(e);
				return !!(!N(a) && a.has(t)) || !!l(e, t).length && (N(a) && (a = new c(), d.set(e, a)), a.add(t), !0);
			},
			OrdinaryDefineOwnMetadata: a,
			OrdinaryHasOwnMetadata: r,
			OrdinaryGetOwnMetadata: s,
			OrdinaryOwnMetadataKeys: l,
			OrdinaryDeleteMetadata: i
		});
		var e, a, r, s, l, i, d, f, h, m, y, g = new u(), k = {
			registerProvider: function(e) {
				if (!Object.isExtensible(k)) throw Error("Cannot add provider to a frozen registry.");
				switch (!0) {
					case f === e: break;
					case N(h):
						h = e;
						break;
					case h === e: break;
					case N(m):
						m = e;
						break;
					case m === e: break;
					default: void 0 === y && (y = new c()), y.add(e);
				}
			},
			getProvider: b,
			setProvider: function(e, t, a) {
				if (!function(e) {
					if (N(e)) throw TypeError();
					return h === e || m === e || !N(y) && y.has(e);
				}(a)) throw Error("Metadata provider not registered.");
				var r = b(e, t);
				if (r !== a) {
					if (!N(r)) return !1;
					var s = g.get(e);
					N(s) && (s = new o(), g.set(e, s)), s.set(t, a);
				}
				return !0;
			}
		};
		return k;
		function b(e, t) {
			var a, r = g.get(e);
			return N(r) || (a = r.get(t)), N(a) && (a = function(e, t) {
				if (!N(h)) {
					if (h.isProviderFor(e, t)) return h;
					if (!N(m)) {
						if (m.isProviderFor(e, t)) return h;
						if (!N(y)) for (var a = P(y);;) {
							var r = A(a);
							if (!r) return;
							var s = r.value;
							if (s.isProviderFor(e, t)) return E(a), s;
						}
					}
				}
				if (!N(f) && f.isProviderFor(e, t)) return f;
			}(e, t), N(a) || (N(r) && (r = new o(), g.set(e, r)), r.set(t, a))), a;
		}
	}()), !N(p) && _(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, p, {
		enumerable: !1,
		configurable: !1,
		writable: !1,
		value: a
	}), a), f = function(e) {
		var t = new u(), a = {
			isProviderFor: function(e, a) {
				var r = t.get(e);
				return !N(r) && r.has(a);
			},
			OrdinaryDefineOwnMetadata: function(e, t, a, s) {
				r(a, s, !0).set(e, t);
			},
			OrdinaryHasOwnMetadata: function(e, t, a) {
				var s = r(t, a, !1);
				return !N(s) && !!s.has(e);
			},
			OrdinaryGetOwnMetadata: function(e, t, a) {
				var s = r(t, a, !1);
				if (!N(s)) return s.get(e);
			},
			OrdinaryOwnMetadataKeys: function(e, t) {
				var a = [], s = r(e, t, !1);
				if (N(s)) return a;
				for (var l = P(s.keys()), i = 0;;) {
					var o = A(l);
					if (!o) return a.length = i, a;
					var c = o.value;
					try {
						a[i] = c;
					} catch (e) {
						try {
							E(l);
						} finally {
							throw e;
						}
					}
					i++;
				}
			},
			OrdinaryDeleteMetadata: function(e, a, s) {
				var l = r(a, s, !1);
				if (N(l) || !l.delete(e)) return !1;
				if (0 === l.size) {
					var i = t.get(a);
					N(i) || (i.delete(s), 0 === i.size && t.delete(i));
				}
				return !0;
			}
		};
		return d.registerProvider(a), a;
		function r(r, s, l) {
			var i = t.get(r), c = !1;
			if (N(i)) {
				if (!l) return;
				i = new o(), t.set(r, i), c = !0;
			}
			var u = i.get(s);
			if (N(u)) {
				if (!l) return;
				if (u = new o(), i.set(s, u), !e.setProvider(r, s, a)) throw i.delete(s), c && t.delete(r), Error("Wrong provider for target.");
			}
			return u;
		}
	}(d);
	function h(e, t, a) {
		var r = R(t, a, !1);
		return !N(r) && !!r.OrdinaryHasOwnMetadata(e, t, a);
	}
	function m(e, t, a) {
		var r = R(t, a, !1);
		if (!N(r)) return r.OrdinaryGetOwnMetadata(e, t, a);
	}
	function y(e, t, a, r) {
		R(a, r, !0).OrdinaryDefineOwnMetadata(e, t, a, r);
	}
	function g(e, t) {
		var a = R(e, t, !1);
		return a ? a.OrdinaryOwnMetadataKeys(e, t) : [];
	}
	function k(e) {
		if (null === e) return 1;
		switch (typeof e) {
			case "undefined": return 0;
			case "boolean": return 2;
			case "string": return 3;
			case "symbol": return 4;
			case "number": return 5;
			case "object": return null === e ? 1 : 6;
			default: return 6;
		}
	}
	function N(e) {
		return void 0 === e;
	}
	function b(e) {
		return null === e;
	}
	function _(e) {
		return "object" == typeof e ? null !== e : "function" == typeof e;
	}
	e("decorate", function(e, t, a, r) {
		if (N(a)) {
			if (!O(e) || !j(t)) throw TypeError();
			for (var s = e, l = t, i = s.length - 1; i >= 0; --i) {
				var o = (0, s[i])(l);
				if (!N(o) && !b(o)) {
					if (!j(o)) throw TypeError();
					l = o;
				}
			}
			return l;
		}
		if (!O(e) || !_(t) || !_(r) && !N(r) && !b(r)) throw TypeError();
		return b(r) && (r = void 0), function(e, t, a, r) {
			for (var s = e.length - 1; s >= 0; --s) {
				var l = (0, e[s])(t, a, r);
				if (!N(l) && !b(l)) {
					if (!_(l)) throw TypeError();
					r = l;
				}
			}
			return r;
		}(e, t, a = w(a), r);
	}), e("metadata", function(e, t) {
		return function(a, r) {
			if (!_(a) || !N(r) && !function(e) {
				switch (k(e)) {
					case 3:
					case 4: return !0;
					default: return !1;
				}
			}(r)) throw TypeError();
			y(e, t, a, r);
		};
	}), e("defineMetadata", function(e, t, a, r) {
		if (!_(a)) throw TypeError();
		return N(r) || (r = w(r)), y(e, t, a, r);
	}), e("hasMetadata", function(e, t, a) {
		if (!_(t)) throw TypeError();
		return N(a) || (a = w(a)), function e(t, a, r) {
			if (h(t, a, r)) return !0;
			var s = M(a);
			return !b(s) && e(t, s, r);
		}(e, t, a);
	}), e("hasOwnMetadata", function(e, t, a) {
		if (!_(t)) throw TypeError();
		return N(a) || (a = w(a)), h(e, t, a);
	}), e("getMetadata", function(e, t, a) {
		if (!_(t)) throw TypeError();
		return N(a) || (a = w(a)), function e(t, a, r) {
			if (h(t, a, r)) return m(t, a, r);
			var s = M(a);
			if (!b(s)) return e(t, s, r);
		}(e, t, a);
	}), e("getOwnMetadata", function(e, t, a) {
		if (!_(t)) throw TypeError();
		return N(a) || (a = w(a)), m(e, t, a);
	}), e("getMetadataKeys", function(e, t) {
		if (!_(e)) throw TypeError();
		return N(t) || (t = w(t)), function e(t, a) {
			var r = g(t, a), s = M(t);
			if (null === s) return r;
			var l = e(s, a);
			if (l.length <= 0) return r;
			if (r.length <= 0) return l;
			for (var i = new c(), o = [], u = 0; u < r.length; u++) {
				var p = r[u], d = i.has(p);
				d || (i.add(p), o.push(p));
			}
			for (var f = 0; f < l.length; f++) {
				var p = l[f], d = i.has(p);
				d || (i.add(p), o.push(p));
			}
			return o;
		}(e, t);
	}), e("getOwnMetadataKeys", function(e, t) {
		if (!_(e)) throw TypeError();
		return N(t) || (t = w(t)), g(e, t);
	}), e("deleteMetadata", function(e, t, a) {
		if (!_(t)) throw TypeError();
		N(a) || (a = w(a));
		var r = R(t, a, !1);
		return !N(r) && r.OrdinaryDeleteMetadata(e, t, a);
	});
	function w(e) {
		var t = function(e, t) {
			switch (k(e)) {
				case 0:
				case 1:
				case 2:
				case 3:
				case 4:
				case 5: return e;
			}
			var a = "string", r = S(e, s);
			if (void 0 !== r) {
				var l = r.call(e, a);
				if (_(l)) throw TypeError();
				return l;
			}
			return function(e, t) {
				if ("string" === t) {
					var a = e.toString;
					if (x(a)) {
						var r = a.call(e);
						if (!_(r)) return r;
					}
					var s = e.valueOf;
					if (x(s)) {
						var r = s.call(e);
						if (!_(r)) return r;
					}
				} else {
					var s = e.valueOf;
					if (x(s)) {
						var r = s.call(e);
						if (!_(r)) return r;
					}
					var l = e.toString;
					if (x(l)) {
						var r = l.call(e);
						if (!_(r)) return r;
					}
				}
				throw TypeError();
			}(e, a);
		}(e, 0);
		return "symbol" == typeof t ? t : "" + t;
	}
	function O(e) {
		return Array.isArray ? Array.isArray(e) : e instanceof Object ? e instanceof Array : "[object Array]" === Object.prototype.toString.call(e);
	}
	function x(e) {
		return "function" == typeof e;
	}
	function j(e) {
		return "function" == typeof e;
	}
	function S(e, t) {
		var a = e[t];
		if (null != a) {
			if (!x(a)) throw TypeError();
			return a;
		}
	}
	function P(e) {
		var t = S(e, l);
		if (!x(t)) throw TypeError();
		var a = t.call(e);
		if (!_(a)) throw TypeError();
		return a;
	}
	function A(e) {
		var t = e.next();
		return !t.done && t;
	}
	function E(e) {
		var t = e.return;
		t && t.call(e);
	}
	function M(e) {
		var t = Object.getPrototypeOf(e);
		if ("function" != typeof e || e === i || t !== i) return t;
		var a = e.prototype, r = a && Object.getPrototypeOf(a);
		if (null == r || r === Object.prototype) return t;
		var s = r.constructor;
		return "function" != typeof s || s === e ? t : s;
	}
	function C(e) {
		throw e;
	}
	function R(e, t, a) {
		var r = d.getProvider(e, t);
		if (!N(r)) return r;
		if (a) {
			if (d.setProvider(e, t, f)) return f;
			throw Error("Illegal state.");
		}
	}
});
var sR = class {
	static getOwnPropertyNames(e) {
		return Reflect.getMetadataKeys(e);
	}
	static get(e, t) {
		return Reflect.getMetadata(t, e);
	}
	static define(e, t, a, r) {
		if (e && e.constructor && e.constructor != Object) {
			if (eV(a)) return void Reflect.defineMetadata(t, sC(Reflect.getMetadata(t, e) ?? r ?? {}, a), e);
			Reflect.defineMetadata(t, a, e);
		}
	}
};
let sT = (e) => "function" == typeof e && `${e}`.startsWith("class"), s$ = {
	path: [],
	branch: []
};
var sF = class extends TypeError {
	value;
	key;
	type;
	refinement;
	path;
	branch;
	failures;
	constructor(e, t) {
		let a, { message: r, explanation: s,...l } = e, { path: i } = e, o = 0 === i.length ? r : `At path: ${i.join(".")} -- ${r}`;
		super(s ?? o), null != s && (this.cause = o), Object.assign(this, l), this.name = this.constructor.name, this.failures = () => a ??= [e, ...t()];
	}
};
let sV = Symbol("Type");
function* sL(e, t, a, r) {
	let s, l = e;
	for (let e of (("object" != typeof (s = l) || "function" != typeof s[Symbol.iterator]) && (l = [l]), l)) {
		let s = function(e, t, a, r) {
			if (!0 === e) return;
			let s = {};
			s = !1 === e ? {} : ed(e) ? { message: e } : e;
			let { path: l, branch: i, node: o } = t, { type: c } = a, { refinement: u, message: p = eL(r) ? "Required" : `Expected a value of type \`${c}\`${u ? ` with refinement \`${u}\`` : ""}, but received: \`${r}\`` } = s;
			return {
				...s,
				value: r,
				type: c,
				refinement: u,
				key: l[l.length - 1],
				path: l,
				branch: i,
				node: o,
				message: p
			};
		}(e, t, a, r);
		s && (yield s);
	}
}
function sD(e, t, a = {}) {
	let r = sI(e, t, a), s = function(e) {
		let { done: t, value: a } = e.next();
		return t ? void 0 : a;
	}(r);
	return s[0] ? [new sF(s[0], function* () {
		for (let e of r) e[0] && (yield e[0]);
	}), void 0] : [void 0, s[1]];
}
function* sI(e, t, a = {}) {
	let { path: r = [], branch: s = [e], node: l = { current: t }, coerce: i = !1, mask: o = !1 } = a, c = {
		mask: o,
		path: r,
		branch: s,
		node: l
	}, u = e;
	if (i) {
		let a = t.coercer(e, c);
		void 0 != a && (u = a);
	}
	let p = sB.valid;
	for (let r of sL(t.validator(u, c), c, t, e)) r.explanation = a.message, p = sB.not_valid, yield [r, void 0];
	for (let [e, d, f] of t.entries(u, c)) for (let t of sI(d, f, {
		path: void 0 === e ? r : [...r, e],
		branch: void 0 === e ? s : [...s, d],
		node: void 0 === e ? l : {
			current: f,
			parent: l
		},
		coerce: i,
		mask: o,
		message: a.message
	})) t[0] ? (p = null != t[0].refinement ? sB.not_refined : sB.not_valid, yield [t[0], void 0]) : i && (d = t[1], void 0 === e ? u = d : u instanceof Map ? u.set(e, d) : u instanceof Set ? u.add(d) : eo(u) && (u[e] = d));
	if (p !== sB.not_valid) for (let r of sL(t.refiner(u, c), c, t, e)) r.explanation = a.message, p = sB.not_refined, yield [r, void 0];
	p === sB.valid && (yield [void 0, u]);
}
var sB = ((W = sB || {})[W.valid = 0] = "valid", W[W.not_refined = 1] = "not_refined", W[W.not_valid = 2] = "not_valid", W);
let sU = (e) => (...t) => {
	let a = e(...t), r = (e, t) => {
		let r = sR.get(e, t) ?? {};
		sR.define(e, t, {
			...r,
			type: a
		});
	};
	return r.toString = () => `@type:${a.type}`, new Proxy(r, {
		ownKeys: () => [...Object.getOwnPropertyNames(a), ...Object.getOwnPropertySymbols(a)],
		get: (e, t) => a[t]
	});
}, sW = (e) => (...t) => {
	let a = (a) => e(a, ...t);
	return new Proxy((e, t) => {
		sR.define(e, t, (e) => {
			(e.modifies ??= []).push({ modify: a });
		}, {});
	}, { get(e, t) {
		if ("modify" == t) return a;
	} });
};
var sz = class e {
	static RecordKey = Symbol("RecordKey");
	static meta = Symbol("meta");
	static optional = Symbol("optional");
	static underlying = Symbol("underlying");
	static unwrap = Symbol("unwrap");
	static extractSchema = (e) => new sH().toValue(e);
	static extractMeta = (t) => new sH().toValue(t.meta ?? t[e.meta]);
	static create(t, a, r) {
		let s, l = a ?? t[e.underlying]?.schema ?? {};
		return new Proxy({}, {
			ownKeys(e) {
				let a = /* @__PURE__ */ new Map();
				if (r) {
					if (t[r]) for (let e of Object.getOwnPropertyNames(t[r])) a.set(e, e);
					if (l && l[r]) for (let e of Object.getOwnPropertyNames(l[r])) a.set(e, e);
				} else {
					for (let e of Object.getOwnPropertyNames(t)) a.set(e, e);
					if (l) for (let e of Object.getOwnPropertyNames(l)) a.set(e, e);
				}
				return [...a.keys()];
			},
			get(a, i) {
				if (i === e.meta) return s ??= e.create(t, l, e.meta);
				if (r) {
					if (N(t)) {
						let e = t?.[r]?.[i];
						if (!eL(e)) return e;
					}
					return l ? l?.[r]?.[i] : void 0;
				}
				if (N(t)) {
					let e = t?.[i];
					if (!eL(e)) return e;
				}
				return l ? l[i] : void 0;
			}
		});
	}
	static schemaProp(e, t) {
		return sK(e.schema, t);
	}
	static metaProp(e, t) {
		return sq(e.schema, t);
	}
}, sK = (e, t) => {
	if (N(e)) return e[t] ?? (e[sz.unwrap] ? sK(e[sz.unwrap]().schema, t) : void 0);
}, sq = (e, t) => {
	if (N(e)) return e[sz.meta]?.[t] ?? (e[sz.unwrap] ? sq(e[sz.unwrap]().schema, t) : void 0);
}, sH = class {
	constructor(e = !1) {
		this.deref = e;
	}
	toValue(e) {
		if (e) {
			if (!eL(e.schema)) return this.toValue(e.schema);
			if (this.deref && e[sz.unwrap]) return this.toValue(e[sz.unwrap]());
			if (eN(e)) return this.toArray(e);
			if (e.constructor === Object) return this.toObject(e);
		}
		return e;
	}
	toObject(e) {
		let t = {};
		for (let a of Object.getOwnPropertyNames(e)) t[a] = this.toValue(e[a]);
		return t;
	}
	toArray(e) {
		let t = [];
		for (let a of e) t.push(this.toValue(a));
		return t;
	}
}, sG = class e {
	static parse(t) {
		if ("" === t) return [];
		if ("/" === t) return [""];
		if ("/" !== t.charAt(0)) throw Error("Invalid JSON pointer: " + t);
		let a = t.substring(1).split(/\//);
		return a.map((t, r) => e.unescape(t, r === a.length - 1));
	}
	static create(t = []) {
		return 0 === t.length ? "" : "/" + t.map(e.escape).join("/");
	}
	static unescape(e, t) {
		return "" == e && t ? sz.RecordKey : e.replace(/~1/g, "/").replace(/~0/g, "~");
	}
	static escape(e) {
		return e == sz.RecordKey ? "" : e.toString().replace(/~/g, "~0").replace(/\//g, "~1");
	}
	static get(t, a) {
		let r = Array.isArray(a) ? a : e.parse(a);
		for (let e = 0; e < r.length; e++) {
			let a = r[e];
			if (e > 0 && a == sz.RecordKey) return r[e - 1];
			if (!("object" == typeof t && a in t)) throw Error("Invalid reference token: " + a);
			t = t[a];
		}
		return t;
	}
}, sJ = class e {
	static define = sU((t = () => !0) => new class extends e {
		validator(e, a) {
			return t(e, a);
		}
	}(null));
	static fromTypeObject = (t, a) => {
		let r = t.type ?? a ?? new e({});
		return t.modifies ? r.use(...t.modifies ?? []) : r;
	};
	[sV] = sV;
	schema;
	constructor(e) {
		if (e) {
			this.schema = sz.create(e);
			return;
		}
		this.schema = e ?? null;
	}
	get meta() {
		return this.schema ? this.schema[sz.meta] : {};
	}
	get type() {
		return this.schema?.type ?? "unknown";
	}
	refiner(e, t) {
		return [];
	}
	validator(e, t) {
		return [];
	}
	coercer(e, t) {
		if (ed(e)) {
			let t = e.trim();
			if (t.length >= 2) {
				if (t.startsWith("{") && t.endsWith("}")) try {
					return JSON.parse(t);
				} catch (e) {}
				if (t.startsWith("[") && t.endsWith("]")) try {
					return JSON.parse(t);
				} catch (e) {}
			}
		}
		return e;
	}
	*entries(e, t = s$) {}
	validate(e, t = {}) {
		return sD(e, this, t);
	}
	create(e) {
		let t = sD(e, this, { coerce: !0 });
		if (t[0]) throw t[0];
		return t[1];
	}
	mask(e) {
		let t = sD(e, this, {
			coerce: !0,
			mask: !0
		});
		if (t[0]) throw t[0];
		return t[1];
	}
	use(...e) {
		return e.reduce((e, t) => t.modify(e), this);
	}
	optional() {
		return sQ.create(this);
	}
	default(e) {
		return sZ.create(this, e);
	}
}, sX = class e extends sJ {
	static of(t, a) {
		return new e({
			...a,
			[sz.underlying]: t
		});
	}
	static refine(t, a, r) {
		return new class extends e {
			*refiner(e, s) {
				for (let l of (yield* this.unwrap.refiner(e, s), sL(a(e, s), s, t, e))) yield {
					...l,
					refinement: Object.keys(r).join(",")
				};
			}
		}({
			...r,
			[sz.underlying]: t
		});
	}
	get unwrap() {
		let e = this.schema[sz.unwrap];
		return e ? e() : this.schema[sz.underlying];
	}
	get type() {
		return this.unwrap.type;
	}
	*entries(e, t = s$) {
		yield* this.unwrap.entries(e, {
			...t,
			node: {
				current: this,
				parent: t.node
			}
		});
	}
	validator(e, t) {
		return sL(this.unwrap.validator(e, t), t, this, e);
	}
	refiner(e, t) {
		return sL(this.unwrap.refiner(e, t), t, this, e);
	}
	coercer(e, t) {
		return this.unwrap.coercer(e, t);
	}
}, sZ = class e extends sX {
	static create = sU((t, a) => new e({
		default: a,
		[sz.underlying]: t
	}));
	coercer(e, t) {
		return void 0 === e ? this.schema.default : super.unwrap.coercer(e, t);
	}
}, sQ = class e extends sX {
	static create = sU((t) => new e({
		[sz.underlying]: t,
		[sz.optional]: t
	}));
	refiner(e, t) {
		return void 0 === e || super.unwrap.refiner(e, t);
	}
	validator(e, t) {
		return void 0 === e || super.unwrap.validator(e, t);
	}
}, sY = class e extends sX {
	static create = sU((t, a) => new e({
		$ref: t,
		[sz.unwrap]: a
	}));
}, s0 = class e extends sJ {
	static create = sU(() => new e());
	constructor() {
		super({});
	}
	get type() {
		return "any";
	}
	validator() {
		return !0;
	}
}, s1 = class e extends sJ {
	static create = sU(() => new e({ type: "null" }));
	get type() {
		return "null";
	}
	validator(e, t) {
		return null === e;
	}
	coercer(e, t) {
		return e;
	}
}, s2 = class e extends sJ {
	static create = sU(() => new e({ type: "string" }));
	get type() {
		return this.schema.type;
	}
	validator(e, t) {
		return ed(e);
	}
	coercer(e, t) {
		return eL(e) || null === e ? e : String(e);
	}
}, s4 = class e extends sJ {
	static create = sU(() => new e({ type: "number" }));
	get type() {
		return this.schema.type;
	}
	validator(e, t) {
		return ew(e);
	}
	coercer(e, t) {
		try {
			let t = void 0 != e ? parseFloat(String(e)) : void 0;
			if (ew(t)) return t;
		} catch (e) {}
	}
}, s6 = class e extends sJ {
	static create = sU(() => new e({ type: "integer" }));
	get type() {
		return this.schema.type;
	}
	validator(e, t) {
		return eI(e);
	}
	coercer(e, t) {
		try {
			let t = void 0 != e ? parseInt(String(e)) : void 0;
			return eI(t) ? t : void 0;
		} catch (e) {
			return;
		}
	}
}, s3 = class e extends sJ {
	static create = sU(() => new e({ type: "boolean" }));
	get type() {
		return this.schema.type;
	}
	validator(e, t) {
		return "boolean" == typeof e || e instanceof Boolean;
	}
	coercer(e, t) {
		try {
			return void 0 != e ? "true" === String(e) : void 0;
		} catch (e) {
			return;
		}
	}
}, s8 = class e extends sJ {
	static create = sU(() => new e({
		type: "string",
		format: "binary"
	}));
	get type() {
		return "binary";
	}
	validator(e, t) {
		return e instanceof File || e instanceof Blob;
	}
	coercer(e, t) {
		return e;
	}
}, s7 = class e extends sJ {
	static create = sU(e.createEnum);
	static createEnum(t) {
		return new e({ enum: t });
	}
	static literal = sU((t) => new e({ enum: [t] }));
	static nativeEnum = sU((t) => new e({ enum: Object.values(t) }));
	get type() {
		return "enums";
	}
	validator(e, t) {
		return this.schema.enum.includes(e);
	}
	coercer(e, t) {
		return e;
	}
}, s5 = class e extends sJ {
	static create = sU(() => new e(!1));
	get type() {
		return "never";
	}
	validator(e, t) {
		return !1;
	}
	coercer(e, t) {
		return e;
	}
}, s9 = class e extends sJ {
	static create(t) {
		let a = (e = {}) => {
			let t = [];
			for (let [a, r] of Object.entries(e)) sz.schemaProp(r, sz.optional) || t.push(a);
			return t;
		};
		return sU(() => {
			if (t) {
				if (sT(t)) {
					let r = new t(), s = {};
					for (let [e, t] of Object.entries(r)) s[e] = s7.literal(t);
					for (let e of sR.getOwnPropertyNames(r)) {
						let t = sR.get(r, e);
						if (t) {
							let a = sJ.fromTypeObject(t, s[e]);
							e in s ? s[e] = a.default(s[e].schema?.enum?.[0]) : s[e] = a;
						}
					}
					return new e({
						type: "object",
						properties: s,
						required: a(s),
						additionalProperties: s5.create()
					});
				}
				return new e({
					type: "object",
					properties: t,
					required: a(t),
					additionalProperties: s5.create()
				});
			}
			return new e({
				type: "object",
				properties: {},
				required: [],
				additionalProperties: s5.create()
			});
		})();
	}
	get type() {
		return this.schema.type;
	}
	*entries(e, t = s$) {
		if (eo(e)) {
			let a = new Set(Object.keys(e));
			if (this.schema.properties) for (let t in this.schema.properties) a.delete(t), yield [
				t,
				e[t],
				this.schema.properties[t]
			];
			if (t.node?.current.type !== "intersection") for (let t of a) yield [
				t,
				e[t],
				this.schema.additionalProperties
			];
		}
	}
	validator(e, t) {
		return eo(e);
	}
	coercer(e, t) {
		if (eo(e)) {
			let a = { ...e };
			if (t.mask) {
				let e = this.schema.properties;
				if (e) for (let t in a) void 0 === e[t] && delete a[t];
			}
			return a;
		}
		return super.coercer(e, t);
	}
}, le = class e extends sJ {
	static create = sU((t, a) => new e({
		type: "object",
		propertyNames: t,
		additionalProperties: a
	}));
	get type() {
		return "record";
	}
	*entries(e) {
		if (eo(e)) for (let [t, a] of Object.entries(e)) yield [
			sz.RecordKey,
			t,
			this.schema.propertyNames
		], yield [
			t,
			a,
			this.schema.additionalProperties
		];
	}
	validator(e) {
		return eo(e);
	}
}, lt = class e extends sJ {
	static create = sU((t) => new e({
		type: "array",
		items: t
	}));
	get type() {
		return this.schema.type;
	}
	*entries(e, t = s$) {
		if (Array.isArray(e)) for (let [t, a] of e.entries()) yield [
			t,
			a,
			this.schema.items
		];
	}
	validator(e) {
		return eN(e);
	}
	coercer(e) {
		return eN(e) ? e.slice() : e;
	}
}, ln = class e extends sJ {
	static create = sU((t) => new e({
		type: "array",
		items: t
	}));
	get type() {
		return "tuple";
	}
	*entries(e, t) {
		if (eN(e)) {
			let t = Math.max(this.schema.items.length, e.length);
			for (let a = 0; a < t; a++) yield [
				a,
				e[a],
				this.schema.items[a] ?? s5.create()
			];
		}
	}
	validator(e) {
		return eN(e) && e.length === this.schema.items.length;
	}
	coercer(e) {
		return eN(e) ? e.slice() : e;
	}
}, la = class e extends sJ {
	static create = sU((...t) => new e({ allOf: t }));
	get type() {
		return "intersection";
	}
	*entries(e, t = s$) {
		for (let a of this.schema.allOf) yield* a.entries(e, t);
	}
	*validator(e, t) {
		for (let a of this.schema.allOf) yield* sL(a.validator(e, t), t, this, e);
	}
	*refiner(e, t) {
		for (let a of this.schema.allOf) yield* sL(a.refiner(e, t), t, this, e);
	}
}, lr = class e extends sJ {
	static create = sU((...t) => new e({ oneOf: t }));
	static discriminatorMapping(t, ...a) {
		return sU(() => {
			let r = [];
			if (1 == a.length && a[0].constructor == Object) for (let [e, s] of Object.entries(a[0])) if (sz.schemaProp(s, "$ref")) r.push(s);
			else {
				let a = { [t]: s7.literal(e) };
				for (let [e, t, r] of s.entries({}, s$)) a[String(e)] = r;
				r.push(s9.create(a));
			}
			else for (let e of a) sT(e) && r.push(s9.create(e));
			return new e({
				oneOf: r,
				discriminator: { propertyName: t }
			});
		})();
	}
	_discriminatorPropName;
	discriminatorPropType(e) {
		return this._discriminatorPropName ??= (() => {
			let t = this.schema.discriminator?.propertyName ?? "", a = [], r = [];
			for (let e of this.schema.oneOf) {
				let s = sz.schemaProp(e, "properties")[t];
				if (!s) continue;
				let l = s.schema.enum;
				l && a.push(...l), r.push(s.meta);
			}
			return sX.of(s7.create(a), { [sz.meta]: sz.create(r[0], e.node?.current.meta ?? {}) });
		})();
	}
	_discriminatorMappingProps = /* @__PURE__ */ new Map();
	discriminatorMapping(e, t, a) {
		if (this._discriminatorMappingProps.get(t)) return this._discriminatorMappingProps.get(t);
		if ((this.discriminatorPropType(a)?.schema?.enum ?? []).includes(t)) {
			let a = this.schema.oneOf.find((a) => {
				let r = sz.schemaProp(a, "properties")[e];
				if (r) {
					let [e, a] = r.validate(t);
					return !e;
				}
				return !1;
			});
			if (a) {
				if (!this._discriminatorMappingProps.has(t)) {
					let r = {};
					for (let [t, s] of Object.entries(sz.schemaProp(a, "properties"))) t !== e && (r[t] = s);
					this._discriminatorMappingProps.set(t, r);
				}
				return this._discriminatorMappingProps.get(t);
			}
		}
		return {};
	}
	*entries(e, t = s$) {
		if (this.schema.discriminator) {
			let a = this.schema.discriminator.propertyName, r = e?.[a];
			yield* s9.create({
				[a]: this.discriminatorPropType(t),
				...this.discriminatorMapping(a, r, t)
			}).entries(e, t);
		}
	}
	get type() {
		return "union";
	}
	coercer(e) {
		for (let t of this.schema.oneOf) {
			let [a, r] = sD(e, t, { coerce: !0 });
			if (!a) return r;
		}
		return e;
	}
	validator(e, t) {
		if (this.schema.discriminator) {
			let a = this.schema.discriminator.propertyName, r = e?.[a];
			return s9.create({
				[a]: this.discriminatorPropType(t),
				...this.discriminatorMapping(a, r, t)
			}).validator(e, t);
		}
		let a = [];
		for (let r of this.schema.oneOf) {
			let [ ...s] = sI(e, r, t), [l] = s;
			if (l && !l[0]) return [];
			for (let [e] of s) e && a.push(e);
		}
		return [`Expected the value to satisfy a union of \`${this.schema.oneOf.map((e) => e.type).join(" | ")}\`, but received: ${e}`, ...a];
	}
};
sY.create;
let ls = s0.create;
s5.create, s1.create;
let ll = s2.create, li = sW((e, t, a) => sX.refine(e, (e) => !!e && e.length >= t || (a ?? `Expected string value length great than or equal ${t}, but received "${e}"`), { minLength: t }));
s4.create;
let lo = s6.create, lc = s3.create;
s8.create;
let lu = s7.create, lp = s7.nativeEnum;
s7.literal;
let ld = s9.create, lf = le.create;
ln.create;
let lh = lt.create;
la.create;
let lm = lr.create;
lr.discriminatorMapping;
let ly = sJ.define;
sX.refine;
let lg = sW((e) => sQ.create(e)), lk = sW((e, t) => sX.of(e, { [sz.meta]: t })), lv = rj;
var lN = Symbol("component");
let lb = (e) => eC(e) && e[lN] === lN, l_ = (e) => {
	let t;
	return !!(t = Object.values(e)[0]) && t[sV] == sV;
};
function lw(...e) {
	let t, a = {}, r = {};
	for (let s of e) {
		if (eV(s)) {
			t = s;
			continue;
		}
		eL(t) ? a = s : r = s;
	}
	let [s, l] = eg(Object.keys(a), (e) => /^on[A-Z]/.test(e)), i = {
		emits: [...s.map((e) => eK(e.slice(2))), ...r.emits ?? []],
		props: [...l.filter((e) => !/^[$]/.test(e)), ...r.props ?? []].reduce((e, t) => {
			let r = a[t];
			return r ? {
				...e,
				[t]: {
					default() {
						try {
							return r.create(void 0);
						} catch (e) {
							console.log(e);
						}
					},
					validator: (e) => r.validate(e)
				}
			} : {
				...e,
				[t]: { default() {} }
			};
		}, {})
	};
	return {
		...r,
		get name() {
			return this.displayName ?? r.displayName ?? r.name;
		},
		set name(n) {
			r.name = n;
		},
		setup: (e, a) => t(e, a),
		emits: i.emits,
		props: i.props,
		inheritAttrs: r.inheritAttrs,
		[lN]: lN
	};
}
let lO = (e, t) => new Proxy(e, { get: (e, a) => t[a] ?? e[a] });
var lx = "undefined" != typeof document;
function lj(e) {
	return "object" == typeof e || "displayName" in e || "props" in e || "__vccOpts" in e;
}
var lS = Object.assign;
function lP(e, t) {
	let a = {};
	for (let r in t) {
		let s = t[r];
		a[r] = lE(s) ? s.map(e) : e(s);
	}
	return a;
}
var lA = () => {}, lE = Array.isArray, lM = /#/g, lC = /&/g, lR = /\//g, lT = /=/g, l$ = /\?/g, lF = /\+/g, lV = /%5B/g, lL = /%5D/g, lD = /%5E/g, lI = /%60/g, lB = /%7B/g, lU = /%7C/g, lW = /%7D/g, lz = /%20/g;
function lK(e) {
	return encodeURI("" + e).replace(lU, "|").replace(lV, "[").replace(lL, "]");
}
function lq(e) {
	return lK(e).replace(lF, "%2B").replace(lz, "+").replace(lM, "%23").replace(lC, "%26").replace(lI, "`").replace(lB, "{").replace(lW, "}").replace(lD, "^");
}
function lH(e) {
	return null == e ? "" : lK(e).replace(lM, "%23").replace(l$, "%3F").replace(lR, "%2F");
}
function lG(e) {
	try {
		return decodeURIComponent("" + e);
	} catch (e) {}
	return "" + e;
}
var lJ = /\/$/;
function lX(e, t, a = "/") {
	let r, s = {}, l = "", i = "", o = t.indexOf("#"), c = t.indexOf("?");
	return o < c && o >= 0 && (c = -1), c > -1 && (r = t.slice(0, c), s = e(l = t.slice(c + 1, o > -1 ? o : t.length))), o > -1 && (r = r || t.slice(0, o), i = t.slice(o, t.length)), {
		fullPath: (r = function(e, t) {
			let a, r;
			if (e.startsWith("/")) return e;
			if (!e) return t;
			let s = t.split("/"), l = e.split("/"), i = l[l.length - 1];
			(".." === i || "." === i) && l.push("");
			let o = s.length - 1;
			for (a = 0; a < l.length; a++) if ("." !== (r = l[a])) if (".." === r) o > 1 && o--;
			else break;
			return s.slice(0, o).join("/") + "/" + l.slice(a).join("/");
		}(null != r ? r : t, a)) + (l && "?") + l + i,
		path: r,
		query: s,
		hash: lG(i)
	};
}
function lZ(e, t) {
	return t && e.toLowerCase().startsWith(t.toLowerCase()) ? e.slice(t.length) || "/" : e;
}
function lQ(e, t) {
	return (e.aliasOf || e) === (t.aliasOf || t);
}
function lY(e, t) {
	if (Object.keys(e).length !== Object.keys(t).length) return !1;
	for (let s in e) {
		var a, r;
		if (a = e[s], r = t[s], lE(a) ? !l0(a, r) : lE(r) ? !l0(r, a) : a !== r) return !1;
	}
	return !0;
}
function l0(e, t) {
	return lE(t) ? e.length === t.length && e.every((e, a) => e === t[a]) : 1 === e.length && e[0] === t;
}
var l1 = {
	path: "/",
	name: void 0,
	params: {},
	query: {},
	hash: "",
	fullPath: "/",
	matched: [],
	meta: {},
	redirectedFrom: void 0
};
(z = D || (D = {})).pop = "pop", z.push = "push", (K = I || (I = {})).back = "back", K.forward = "forward", K.unknown = "";
var l2 = /^[^#]+#/;
function l4(e, t) {
	return e.replace(l2, "#") + t;
}
var l6 = () => ({
	left: window.scrollX,
	top: window.scrollY
});
function l3(e, t) {
	return (history.state ? history.state.position - t : -1) + e;
}
var l8 = /* @__PURE__ */ new Map();
function l7(e, t) {
	let { pathname: a, search: r, hash: s } = t, l = e.indexOf("#");
	if (l > -1) {
		let t = s.includes(e.slice(l)) ? e.slice(l).length : 1, a = s.slice(t);
		return "/" !== a[0] && (a = "/" + a), lZ(a, "");
	}
	return lZ(a, e) + r + s;
}
function l5(e, t, a, r = !1, s = !1) {
	return {
		back: e,
		current: t,
		forward: a,
		replaced: r,
		position: window.history.length,
		scroll: s ? l6() : null
	};
}
function l9(e) {
	let t = function(e) {
		let { history: t, location: a } = window, r = { value: l7(e, a) }, s = { value: t.state };
		function l(r, l, i) {
			let o = e.indexOf("#"), c = o > -1 ? (a.host && document.querySelector("base") ? e : e.slice(o)) + r : location.protocol + "//" + location.host + e + r;
			try {
				t[i ? "replaceState" : "pushState"](l, "", c), s.value = l;
			} catch (e) {
				console.error(e), a[i ? "replace" : "assign"](c);
			}
		}
		return s.value || l(r.value, {
			back: null,
			current: r.value,
			forward: null,
			position: t.length - 1,
			replaced: !0,
			scroll: null
		}, !0), {
			location: r,
			state: s,
			push: function(e, a) {
				let i = lS({}, s.value, t.state, {
					forward: e,
					scroll: l6()
				});
				l(i.current, i, !0), l(e, lS({}, l5(r.value, e, null), { position: i.position + 1 }, a), !1), r.value = e;
			},
			replace: function(e, a) {
				l(e, lS({}, t.state, l5(s.value.back, e, s.value.forward, !0), a, { position: s.value.position }), !0), r.value = e;
			}
		};
	}(e = function(e) {
		if (!e) if (lx) {
			let t = document.querySelector("base");
			e = (e = t && t.getAttribute("href") || "/").replace(/^\w+:\/\/[^\/]+/, "");
		} else e = "/";
		return "/" !== e[0] && "#" !== e[0] && (e = "/" + e), e.replace(lJ, "");
	}(e)), a = function(e, t, a, r) {
		let s = [], l = [], i = null, o = ({ state: l }) => {
			let o = l7(e, location), c = a.value, u = t.value, p = 0;
			if (l) {
				if (a.value = o, t.value = l, i && i === c) {
					i = null;
					return;
				}
				p = u ? l.position - u.position : 0;
			} else r(o);
			s.forEach((e) => {
				e(a.value, c, {
					delta: p,
					type: D.pop,
					direction: p ? p > 0 ? I.forward : I.back : I.unknown
				});
			});
		};
		function c() {
			let { history: e } = window;
			e.state && e.replaceState(lS({}, e.state, { scroll: l6() }), "");
		}
		return window.addEventListener("popstate", o), window.addEventListener("beforeunload", c, { passive: !0 }), {
			pauseListeners: function() {
				i = a.value;
			},
			listen: function(e) {
				s.push(e);
				let t = () => {
					let t = s.indexOf(e);
					t > -1 && s.splice(t, 1);
				};
				return l.push(t), t;
			},
			destroy: function() {
				for (let e of l) e();
				l = [], window.removeEventListener("popstate", o), window.removeEventListener("beforeunload", c);
			}
		};
	}(e, t.state, t.location, t.replace), r = lS({
		location: "",
		base: e,
		go: function(e, t = !0) {
			t || a.pauseListeners(), history.go(e);
		},
		createHref: l4.bind(null, e)
	}, t, a);
	return Object.defineProperty(r, "location", {
		enumerable: !0,
		get: () => t.location.value
	}), Object.defineProperty(r, "state", {
		enumerable: !0,
		get: () => t.state.value
	}), r;
}
function ie(e) {
	return "string" == typeof e || "symbol" == typeof e;
}
var it = Symbol("");
function ia(e, t) {
	return lS(Error(), {
		type: e,
		[it]: !0
	}, t);
}
function ir(e, t) {
	return e instanceof Error && it in e && (null == t || !!(e.type & t));
}
(q = B || (B = {}))[q.aborted = 4] = "aborted", q[q.cancelled = 8] = "cancelled", q[q.duplicated = 16] = "duplicated";
var is = "[^/]+?", il = {
	sensitive: !1,
	strict: !1,
	start: !0,
	end: !0
}, ii = /[.+*?^${}()[\]/\\]/g;
function io(e, t) {
	let a = 0, r = e.score, s = t.score;
	for (; a < r.length && a < s.length;) {
		let e = function(e, t) {
			let a = 0;
			for (; a < e.length && a < t.length;) {
				let r = t[a] - e[a];
				if (r) return r;
				a++;
			}
			return e.length < t.length ? 1 === e.length && 80 === e[0] ? -1 : 1 : e.length > t.length ? 1 === t.length && 80 === t[0] ? 1 : -1 : 0;
		}(r[a], s[a]);
		if (e) return e;
		a++;
	}
	if (1 === Math.abs(s.length - r.length)) {
		if (ic(r)) return 1;
		if (ic(s)) return -1;
	}
	return s.length - r.length;
}
function ic(e) {
	let t = e[e.length - 1];
	return e.length > 0 && t[t.length - 1] < 0;
}
var iu = {
	type: 0,
	value: ""
}, ip = /[a-zA-Z0-9_]/;
function id(e, t) {
	let a = {};
	for (let r of t) r in e && (a[r] = e[r]);
	return a;
}
function ih(e) {
	let t = {
		path: e.path,
		redirect: e.redirect,
		name: e.name,
		meta: e.meta || {},
		aliasOf: e.aliasOf,
		beforeEnter: e.beforeEnter,
		props: function(e) {
			let t = {}, a = e.props || !1;
			if ("component" in e) t.default = a;
			else for (let r in e.components) t[r] = "object" == typeof a ? a[r] : a;
			return t;
		}(e),
		children: e.children || [],
		instances: {},
		leaveGuards: /* @__PURE__ */ new Set(),
		updateGuards: /* @__PURE__ */ new Set(),
		enterCallbacks: {},
		components: "components" in e ? e.components || null : e.component && { default: e.component }
	};
	return Object.defineProperty(t, "mods", { value: {} }), t;
}
function im(e) {
	for (; e;) {
		if (e.record.aliasOf) return !0;
		e = e.parent;
	}
	return !1;
}
function iy(e, t) {
	let a = {};
	for (let r in e) a[r] = r in t ? t[r] : e[r];
	return a;
}
function ig({ record: e }) {
	return !!(e.name || e.components && Object.keys(e.components).length || e.redirect);
}
function ik(e) {
	let t = {};
	if ("" === e || "?" === e) return t;
	let a = ("?" === e[0] ? e.slice(1) : e).split("&");
	for (let e = 0; e < a.length; ++e) {
		let r = a[e].replace(lF, " "), s = r.indexOf("="), l = lG(s < 0 ? r : r.slice(0, s)), i = s < 0 ? null : lG(r.slice(s + 1));
		if (l in t) {
			let e = t[l];
			lE(e) || (e = t[l] = [e]), e.push(i);
		} else t[l] = i;
	}
	return t;
}
function iv(e) {
	let t = "";
	for (let a in e) {
		let r = e[a];
		if (a = lq(a).replace(lT, "%3D"), null == r) {
			void 0 !== r && (t += (t.length ? "&" : "") + a);
			continue;
		}
		(lE(r) ? r.map((e) => e && lq(e)) : [r && lq(r)]).forEach((e) => {
			void 0 !== e && (t += (t.length ? "&" : "") + a, null != e && (t += "=" + e));
		});
	}
	return t;
}
var iN = Symbol(""), ib = Symbol(""), i_ = Symbol(""), iw = Symbol(""), iO = Symbol("");
function ix() {
	let e = [];
	return {
		add: function(t) {
			return e.push(t), () => {
				let a = e.indexOf(t);
				a > -1 && e.splice(a, 1);
			};
		},
		list: () => e.slice(),
		reset: function() {
			e = [];
		}
	};
}
function ij(e, t, a, r, s, l = (e) => e()) {
	let i = r && (r.enterCallbacks[s] = r.enterCallbacks[s] || []);
	return () => new Promise((o, c) => {
		let u = (e) => {
			if (!1 === e) c(ia(4, {
				from: a,
				to: t
			}));
			else if (e instanceof Error) c(e);
			else "string" == typeof e || e && "object" == typeof e ? c(ia(2, {
				from: t,
				to: e
			})) : (i && r.enterCallbacks[s] === i && "function" == typeof e && i.push(e), o());
		}, p = Promise.resolve(l(() => e.call(r && r.instances[s], t, a, u)));
		e.length < 3 && (p = p.then(u)), p.catch((e) => c(e));
	});
}
function iS(e, t, a, r, s = (e) => e()) {
	let l = [];
	for (let i of e) for (let e in i.components) {
		let o = i.components[e];
		if ("beforeRouteEnter" === t || i.instances[e]) if (lj(o)) {
			let c = (o.__vccOpts || o)[t];
			c && l.push(ij(c, a, r, i, e, s));
		} else {
			let c = o();
			l.push(() => c.then((l) => {
				if (!l) throw Error(`Couldn't resolve component "${e}" at "${i.path}"`);
				let o = l.__esModule || "Module" === l[Symbol.toStringTag] || l.default && lj(l.default) ? l.default : l;
				i.mods[e] = l, i.components[e] = o;
				let c = (o.__vccOpts || o)[t];
				return c && ij(c, a, r, i, e, s)();
			}));
		}
	}
	return l;
}
function iP(e) {
	let t = a6(i_), a = a6(iw), r = r1(() => {
		let a = nP(e.to);
		return t.resolve(a);
	}), s = r1(() => {
		let { matched: e } = r.value, { length: t } = e, s = e[t - 1], l = a.matched;
		if (!s || !l.length) return -1;
		let i = l.findIndex(lQ.bind(null, s));
		if (i > -1) return i;
		let o = iE(e[t - 2]);
		return t > 1 && iE(s) === o && l[l.length - 1].path !== o ? l.findIndex(lQ.bind(null, e[t - 2])) : i;
	}), l = r1(() => s.value > -1 && function(e, t) {
		for (let a in t) {
			let r = t[a], s = e[a];
			if ("string" == typeof r) {
				if (r !== s) return !1;
			} else if (!lE(s) || s.length !== r.length || r.some((e, t) => e !== s[t])) return !1;
		}
		return !0;
	}(a.params, r.value.params)), i = r1(() => s.value > -1 && s.value === a.matched.length - 1 && lY(a.params, r.value.params));
	return {
		route: r,
		href: r1(() => r.value.href),
		isActive: l,
		isExactActive: i,
		navigate: function(a = {}) {
			if (function(e) {
				if (!e.metaKey && !e.altKey && !e.ctrlKey && !e.shiftKey && !e.defaultPrevented && (void 0 === e.button || 0 === e.button)) {
					if (e.currentTarget && e.currentTarget.getAttribute) {
						let t = e.currentTarget.getAttribute("target");
						if (/\b_blank\b/i.test(t)) return;
					}
					return e.preventDefault && e.preventDefault(), !0;
				}
			}(a)) {
				let a = t[nP(e.replace) ? "replace" : "push"](nP(e.to)).catch(lA);
				return e.viewTransition && "undefined" != typeof document && "startViewTransition" in document && document.startViewTransition(() => a), a;
			}
			return Promise.resolve();
		}
	};
}
var iA = ay({
	name: "RouterLink",
	compatConfig: { MODE: 3 },
	props: {
		to: {
			type: [String, Object],
			required: !0
		},
		replace: Boolean,
		activeClass: String,
		exactActiveClass: String,
		custom: Boolean,
		ariaCurrentValue: {
			type: String,
			default: "page"
		},
		viewTransition: Boolean
	},
	useLink: iP,
	setup(e, { slots: t }) {
		let a = nd(iP(e)), { options: r } = a6(i_), s = r1(() => ({
			[iM(e.activeClass, r.linkActiveClass, "router-link-active")]: a.isActive,
			[iM(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: a.isExactActive
		}));
		return () => {
			var r;
			let l = t.default && (1 === (r = t.default(a)).length ? r[0] : r);
			return e.custom ? l : r2("a", {
				"aria-current": a.isExactActive ? e.ariaCurrentValue : null,
				href: a.href,
				onClick: a.navigate,
				class: s.value
			}, l);
		};
	}
});
function iE(e) {
	return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
var iM = (e, t, a) => null != e ? e : null != t ? t : a, iC = ay({
	name: "RouterView",
	inheritAttrs: !1,
	props: {
		name: {
			type: String,
			default: "default"
		},
		route: Object
	},
	compatConfig: { MODE: 3 },
	setup(e, { attrs: t, slots: a }) {
		let r = a6(iO), s = r1(() => e.route || r.value), l = a6(ib, 0), i = r1(() => {
			let e, t = nP(l), { matched: a } = s.value;
			for (; (e = a[t]) && !e.components;) t++;
			return t;
		}), o = r1(() => s.value.matched[i.value]);
		a4(ib, r1(() => i.value + 1)), a4(iN, o), a4(iO, s);
		let c = nO();
		return rh(() => [
			c.value,
			o.value,
			e.name
		], ([e, t, a], [r, s, l]) => {
			t && (t.instances[a] = e, s && s !== t && e && e === r && (t.leaveGuards.size || (t.leaveGuards = s.leaveGuards), t.updateGuards.size || (t.updateGuards = s.updateGuards))), !e || !t || s && lQ(t, s) && r || (t.enterCallbacks[a] || []).forEach((t) => t(e));
		}, { flush: "post" }), () => {
			let r = s.value, l = e.name, i = o.value, u = i && i.components[l];
			if (!u) return iR(a.default, {
				Component: u,
				route: r
			});
			let p = i.props[l], d = r2(u, lS({}, p ? !0 === p ? r.params : "function" == typeof p ? p(r) : p : null, t, {
				onVnodeUnmounted: (e) => {
					e.component.isUnmounted && (i.instances[l] = null);
				},
				ref: c
			}));
			return iR(a.default, {
				Component: d,
				route: r
			}) || d;
		};
	}
});
function iR(e, t) {
	if (!e) return null;
	let a = e(t);
	return 1 === a.length ? a[0] : a;
}
function iT(e) {
	let t, a, r, s = function(e, t) {
		let a = [], r = /* @__PURE__ */ new Map();
		function s(e, i, o) {
			let c, u, p = !o, d = ih(e);
			d.aliasOf = o && o.record;
			let f = iy(t, e), h = [d];
			if ("alias" in e) for (let t of "string" == typeof e.alias ? [e.alias] : e.alias) h.push(ih(lS({}, d, {
				components: o ? o.record.components : d.components,
				path: t,
				aliasOf: o ? o.record : d
			})));
			for (let t of h) {
				let { path: h } = t;
				if (i && "/" !== h[0]) {
					let e = i.record.path, a = "/" === e[e.length - 1] ? "" : "/";
					t.path = i.record.path + (h && a + h);
				}
				if (c = function(e, t, a) {
					let r = lS(function(e, t) {
						let a = lS({}, il, t), r = [], s = a.start ? "^" : "", l = [];
						for (let t of e) {
							let e = t.length ? [] : [90];
							a.strict && !t.length && (s += "/");
							for (let r = 0; r < t.length; r++) {
								let i = t[r], o = 40 + .25 * !!a.sensitive;
								if (0 === i.type) r || (s += "/"), s += i.value.replace(ii, "\\$&"), o += 40;
								else if (1 === i.type) {
									let { value: e, repeatable: a, optional: c, regexp: u } = i;
									l.push({
										name: e,
										repeatable: a,
										optional: c
									});
									let p = u || is;
									p !== is && (o += 10);
									let d = a ? `((?:${p})(?:/(?:${p}))*)` : `(${p})`;
									r || (d = c && t.length < 2 ? `(?:/${d})` : "/" + d), c && (d += "?"), s += d, o += 20, c && (o += -8), a && (o += -20), ".*" === p && (o += -50);
								}
								e.push(o);
							}
							r.push(e);
						}
						if (a.strict && a.end) {
							let e = r.length - 1;
							r[e][r[e].length - 1] += .7000000000000001;
						}
						a.strict || (s += "/?"), a.end ? s += "$" : a.strict && !s.endsWith("/") && (s += "(?:/|$)");
						let i = new RegExp(s, a.sensitive ? "" : "i");
						return {
							re: i,
							score: r,
							keys: l,
							parse: function(e) {
								let t = e.match(i), a = {};
								if (!t) return null;
								for (let e = 1; e < t.length; e++) {
									let r = t[e] || "", s = l[e - 1];
									a[s.name] = r && s.repeatable ? r.split("/") : r;
								}
								return a;
							},
							stringify: function(t) {
								let a = "", r = !1;
								for (let s of e) for (let e of (r && a.endsWith("/") || (a += "/"), r = !1, s)) if (0 === e.type) a += e.value;
								else if (1 === e.type) {
									let { value: l, repeatable: i, optional: o } = e, c = l in t ? t[l] : "";
									if (lE(c) && !i) throw Error(`Provided param "${l}" is an array but it is not repeatable (* or + modifiers)`);
									let u = lE(c) ? c.join("/") : c;
									if (!u) if (o) s.length < 2 && (a.endsWith("/") ? a = a.slice(0, -1) : r = !0);
									else throw Error(`Missing required param "${l}"`);
									a += u;
								}
								return a || "/";
							}
						};
					}(function(e) {
						let t, a;
						if (!e) return [[]];
						if ("/" === e) return [[iu]];
						if (!e.startsWith("/")) throw Error(`Invalid path "${e}"`);
						function r(e) {
							throw Error(`ERR (${s})/"${u}": ${e}`);
						}
						let s = 0, l = 0, i = [];
						function o() {
							t && i.push(t), t = [];
						}
						let c = 0, u = "", p = "";
						function d() {
							u && (0 === s ? t.push({
								type: 0,
								value: u
							}) : 1 === s || 2 === s || 3 === s ? (t.length > 1 && ("*" === a || "+" === a) && r(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`), t.push({
								type: 1,
								value: u,
								regexp: p,
								repeatable: "*" === a || "+" === a,
								optional: "*" === a || "?" === a
							})) : r("Invalid state to consume buffer"), u = "");
						}
						for (; c < e.length;) {
							if ("\\" === (a = e[c++]) && 2 !== s) {
								l = s, s = 4;
								continue;
							}
							switch (s) {
								case 0:
									"/" === a ? (u && d(), o()) : ":" === a ? (d(), s = 1) : u += a;
									break;
								case 4:
									u += a, s = l;
									break;
								case 1:
									"(" === a ? s = 2 : ip.test(a) ? u += a : (d(), s = 0, "*" !== a && "?" !== a && "+" !== a && c--);
									break;
								case 2:
									")" === a ? "\\" == p[p.length - 1] ? p = p.slice(0, -1) + a : s = 3 : p += a;
									break;
								case 3:
									d(), s = 0, "*" !== a && "?" !== a && "+" !== a && c--, p = "";
									break;
								default: r("Unknown state");
							}
						}
						return 2 === s && r(`Unfinished custom RegExp for param "${u}"`), d(), o(), i;
					}(e.path), a), {
						record: e,
						parent: t,
						children: [],
						alias: []
					});
					return t && !r.record.aliasOf == !t.record.aliasOf && t.children.push(r), r;
				}(t, i, f), o ? o.alias.push(c) : ((u = u || c) !== c && u.alias.push(c), p && e.name && !im(c) && l(e.name)), ig(c) && function(e) {
					let t = function(e, t) {
						let a = 0, r = t.length;
						for (; a !== r;) {
							let s = a + r >> 1;
							0 > io(e, t[s]) ? r = s : a = s + 1;
						}
						let s = function(e) {
							let t = e;
							for (; t = t.parent;) if (ig(t) && 0 === io(e, t)) return t;
						}(e);
						return s && (r = t.lastIndexOf(s, r - 1)), r;
					}(e, a);
					a.splice(t, 0, e), e.record.name && !im(e) && r.set(e.record.name, e);
				}(c), d.children) {
					let e = d.children;
					for (let t = 0; t < e.length; t++) s(e[t], c, o && o.children[t]);
				}
				o = o || c;
			}
			return u ? () => {
				l(u);
			} : lA;
		}
		function l(e) {
			if (ie(e)) {
				let t = r.get(e);
				t && (r.delete(e), a.splice(a.indexOf(t), 1), t.children.forEach(l), t.alias.forEach(l));
			} else {
				let t = a.indexOf(e);
				t > -1 && (a.splice(t, 1), e.record.name && r.delete(e.record.name), e.children.forEach(l), e.alias.forEach(l));
			}
		}
		return t = iy({
			strict: !1,
			end: !0,
			sensitive: !1
		}, t), e.forEach((e) => s(e)), {
			addRoute: s,
			resolve: function(e, t) {
				let s, l, i, o = {};
				if ("name" in e && e.name) {
					if (!(s = r.get(e.name))) throw ia(1, { location: e });
					i = s.record.name, o = lS(id(t.params, s.keys.filter((e) => !e.optional).concat(s.parent ? s.parent.keys.filter((e) => e.optional) : []).map((e) => e.name)), e.params && id(e.params, s.keys.map((e) => e.name))), l = s.stringify(o);
				} else if (null != e.path) l = e.path, (s = a.find((e) => e.re.test(l))) && (o = s.parse(l), i = s.record.name);
				else {
					if (!(s = t.name ? r.get(t.name) : a.find((e) => e.re.test(t.path)))) throw ia(1, {
						location: e,
						currentLocation: t
					});
					i = s.record.name, o = lS({}, t.params, e.params), l = s.stringify(o);
				}
				let c = [], u = s;
				for (; u;) c.unshift(u.record), u = u.parent;
				return {
					name: i,
					path: l,
					params: o,
					matched: c,
					meta: c.reduce((e, t) => lS(e, t.meta), {})
				};
			},
			removeRoute: l,
			clearRoutes: function() {
				a.length = 0, r.clear();
			},
			getRoutes: function() {
				return a;
			},
			getRecordMatcher: function(e) {
				return r.get(e);
			}
		};
	}(e.routes, e), l = e.parseQuery || ik, i = e.stringifyQuery || iv, o = e.history, c = ix(), u = ix(), p = ix(), d = nx(l1), f = l1;
	lx && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
	let h = lP.bind(null, (e) => "" + e), m = lP.bind(null, lH), y = lP.bind(null, lG);
	function g(e, t) {
		var a;
		let r, c;
		if (t = lS({}, t || d.value), "string" == typeof e) {
			let a = lX(l, e, t.path), r = s.resolve({ path: a.path }, t), i = o.createHref(a.fullPath);
			return lS(a, r, {
				params: y(r.params),
				hash: lG(a.hash),
				redirectedFrom: void 0,
				href: i
			});
		}
		if (null != e.path) r = lS({}, e, { path: lX(l, e.path, t.path).path });
		else {
			let a = lS({}, e.params);
			for (let e in a) a[e] ?? delete a[e];
			r = lS({}, e, { params: m(a) }), t.params = m(t.params);
		}
		let u = s.resolve(r, t), p = e.hash || "";
		u.params = h(y(u.params));
		let f = (c = (a = lS({}, e, {
			hash: lK(p).replace(lB, "{").replace(lW, "}").replace(lD, "^"),
			path: u.path
		})).query ? i(a.query) : "", a.path + (c && "?") + c + (a.hash || "")), g = o.createHref(f);
		return lS({
			fullPath: f,
			hash: p,
			query: i === iv ? function(e) {
				let t = {};
				for (let a in e) {
					let r = e[a];
					void 0 !== r && (t[a] = lE(r) ? r.map((e) => null == e ? null : "" + e) : null == r ? r : "" + r);
				}
				return t;
			}(e.query) : e.query || {}
		}, u, {
			redirectedFrom: void 0,
			href: g
		});
	}
	function k(e) {
		return "string" == typeof e ? lX(l, e, d.value.path) : lS({}, e);
	}
	function N(e, t) {
		if (f !== e) return ia(8, {
			from: t,
			to: e
		});
	}
	function b(e) {
		let t = e.matched[e.matched.length - 1];
		if (t && t.redirect) {
			let { redirect: a } = t, r = "function" == typeof a ? a(e) : a;
			return "string" == typeof r && ((r = r.includes("?") || r.includes("#") ? r = k(r) : { path: r }).params = {}), lS({
				query: e.query,
				hash: e.hash,
				params: null != r.path ? {} : e.params
			}, r);
		}
	}
	function _(e, t) {
		let a, r, s, l = f = g(e), o = d.value, c = e.state, u = e.force, p = !0 === e.replace, h = b(l);
		return h ? _(lS(k(h), {
			state: "object" == typeof h ? lS({}, c, h.state) : c,
			force: u,
			replace: p
		}), t || l) : (l.redirectedFrom = t, !u && (r = o.matched.length - 1, s = l.matched.length - 1, r > -1 && r === s && lQ(o.matched[r], l.matched[s]) && lY(o.params, l.params) && i(o.query) === i(l.query) && o.hash === l.hash) && (a = ia(16, {
			to: l,
			from: o
		}), C(o, o, !0, !1)), (a ? Promise.resolve(a) : x(l, o)).catch((e) => ir(e) ? ir(e, 2) ? e : M(e) : E(e, l, o)).then((e) => {
			if (e) {
				if (ir(e, 2)) return _(lS({ replace: p }, k(e.to), {
					state: "object" == typeof e.to ? lS({}, c, e.to.state) : c,
					force: u
				}), t || l);
			} else e = S(l, o, !0, p, c);
			return j(l, o, e), e;
		}));
	}
	function w(e, t) {
		let a = N(e, t);
		return a ? Promise.reject(a) : Promise.resolve();
	}
	function O(e) {
		let t = T.values().next().value;
		return t && "function" == typeof t.runWithContext ? t.runWithContext(e) : e();
	}
	function x(e, t) {
		let a, [r, s, l] = function(e, t) {
			let a = [], r = [], s = [], l = Math.max(t.matched.length, e.matched.length);
			for (let i = 0; i < l; i++) {
				let l = t.matched[i];
				l && (e.matched.find((e) => lQ(e, l)) ? r.push(l) : a.push(l));
				let o = e.matched[i];
				o && !t.matched.find((e) => lQ(e, o)) && s.push(o);
			}
			return [
				a,
				r,
				s
			];
		}(e, t);
		for (let s of (a = iS(r.reverse(), "beforeRouteLeave", e, t), r)) s.leaveGuards.forEach((r) => {
			a.push(ij(r, e, t));
		});
		let i = w.bind(null, e, t);
		return a.push(i), F(a).then(() => {
			for (let r of (a = [], c.list())) a.push(ij(r, e, t));
			return a.push(i), F(a);
		}).then(() => {
			for (let r of (a = iS(s, "beforeRouteUpdate", e, t), s)) r.updateGuards.forEach((r) => {
				a.push(ij(r, e, t));
			});
			return a.push(i), F(a);
		}).then(() => {
			for (let r of (a = [], l)) if (r.beforeEnter) if (lE(r.beforeEnter)) for (let s of r.beforeEnter) a.push(ij(s, e, t));
			else a.push(ij(r.beforeEnter, e, t));
			return a.push(i), F(a);
		}).then(() => (e.matched.forEach((e) => e.enterCallbacks = {}), (a = iS(l, "beforeRouteEnter", e, t, O)).push(i), F(a))).then(() => {
			for (let r of (a = [], u.list())) a.push(ij(r, e, t));
			return a.push(i), F(a);
		}).catch((e) => ir(e, 8) ? e : Promise.reject(e));
	}
	function j(e, t, a) {
		p.list().forEach((r) => O(() => r(e, t, a)));
	}
	function S(e, t, a, r, s) {
		let l = N(e, t);
		if (l) return l;
		let i = t === l1, c = lx ? history.state : {};
		a && (r || i ? o.replace(e.fullPath, lS({ scroll: i && c && c.scroll }, s)) : o.push(e.fullPath, s)), d.value = e, C(e, t, a, i), M();
	}
	let P = ix(), A = ix();
	function E(e, t, a) {
		M(e);
		let r = A.list();
		return r.length ? r.forEach((r) => r(e, t, a)) : console.error(e), Promise.reject(e);
	}
	function M(e) {
		return a || (a = !e, t || (t = o.listen((e, t, a) => {
			var r, s;
			if (!$.listening) return;
			let l = g(e), i = b(l);
			if (i) return void _(lS(i, {
				replace: !0,
				force: !0
			}), l).catch(lA);
			f = l;
			let c = d.value;
			lx && (r = l3(c.fullPath, a.delta), s = l6(), l8.set(r, s)), x(l, c).catch((e) => ir(e, 12) ? e : ir(e, 2) ? (_(lS(k(e.to), { force: !0 }), l).then((e) => {
				ir(e, 20) && !a.delta && a.type === D.pop && o.go(-1, !1);
			}).catch(lA), Promise.reject()) : (a.delta && o.go(-a.delta, !1), E(e, l, c))).then((e) => {
				(e = e || S(l, c, !1)) && (a.delta && !ir(e, 8) ? o.go(-a.delta, !1) : a.type === D.pop && ir(e, 20) && o.go(-1, !1)), j(l, c, e);
			}).catch(lA);
		})), P.list().forEach(([t, a]) => e ? a(e) : t()), P.reset()), e;
	}
	function C(t, a, r, s) {
		var l;
		let i, { scrollBehavior: o } = e;
		if (!lx || !o) return Promise.resolve();
		let c = !r && (l = l3(t.fullPath, 0), i = l8.get(l), l8.delete(l), i) || (s || !r) && history.state && history.state.scroll || null;
		return nH().then(() => o(t, a, c)).then((e) => e && function(e) {
			let t;
			if ("el" in e) {
				let a, r, s = e.el, l = "string" == typeof s && s.startsWith("#"), i = "string" == typeof s ? l ? document.getElementById(s.slice(1)) : document.querySelector(s) : s;
				if (!i) return;
				a = document.documentElement.getBoundingClientRect(), r = i.getBoundingClientRect(), t = {
					behavior: e.behavior,
					left: r.left - a.left - (e.left || 0),
					top: r.top - a.top - (e.top || 0)
				};
			} else t = e;
			"scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(null != t.left ? t.left : window.scrollX, null != t.top ? t.top : window.scrollY);
		}(e)).catch((e) => E(e, t, a));
	}
	let R = (e) => o.go(e), T = /* @__PURE__ */ new Set(), $ = {
		currentRoute: d,
		listening: !0,
		addRoute: function(e, t) {
			let a, r;
			return ie(e) ? (a = s.getRecordMatcher(e), r = t) : r = e, s.addRoute(r, a);
		},
		removeRoute: function(e) {
			let t = s.getRecordMatcher(e);
			t && s.removeRoute(t);
		},
		clearRoutes: s.clearRoutes,
		hasRoute: function(e) {
			return !!s.getRecordMatcher(e);
		},
		getRoutes: function() {
			return s.getRoutes().map((e) => e.record);
		},
		resolve: g,
		options: e,
		push: function(e) {
			return _(e);
		},
		replace: function(e) {
			return _(lS(k(e), { replace: !0 }));
		},
		go: R,
		back: () => R(-1),
		forward: () => R(1),
		beforeEach: c.add,
		beforeResolve: u.add,
		afterEach: p.add,
		onError: A.add,
		isReady: function() {
			return a && d.value !== l1 ? Promise.resolve() : new Promise((e, t) => {
				P.add([e, t]);
			});
		},
		install(e) {
			e.component("RouterLink", iA), e.component("RouterView", iC), e.config.globalProperties.$router = this, Object.defineProperty(e.config.globalProperties, "$route", {
				enumerable: !0,
				get: () => nP(d)
			}), lx && !r && d.value === l1 && (r = !0, _(o.location).catch((e) => {}));
			let s = {};
			for (let e in l1) Object.defineProperty(s, e, {
				get: () => d.value[e],
				enumerable: !0
			});
			e.provide(i_, this), e.provide(iw, nf(s)), e.provide(iO, d);
			let l = e.unmount;
			T.add(e), e.unmount = function() {
				T.delete(e), T.size < 1 && (f = l1, t && t(), t = null, d.value = l1, r = !1, a = !1), l();
			};
		}
	};
	function F(e) {
		return e.reduce((e, t) => e.then(() => O(t)), Promise.resolve());
	}
	return $;
}
function i$() {
	return a6(i_);
}
let iF = iA, iV = iC;
function iL(t, ...a) {
	return e(...a)(r(t));
}
var iD = class e extends s {
	static seed(t) {
		return new e(t);
	}
	_value;
	_subject$ = new l();
	constructor(e) {
		super((e) => {
			let t = this._subject$.subscribe(e);
			return this._subject$.next(this._value), () => {
				t.unsubscribe();
			};
		}), this._value = e;
	}
	get value() {
		return this._value;
	}
	next(e, t) {
		let a = eV(e) ? sC(this._value ?? t, e) : e;
		Object.is(a, this._value) || this._subject$.next(this._value = a);
	}
};
let iI = Symbol("forwardRef");
function iB(e) {
	let t = e;
	return new nM((e, a) => ({
		get: () => (e(), t),
		set(e) {
			let r = e?.[iI] ?? e;
			r !== t && (t = r, a());
		}
	}));
}
function iU(e) {
	return (t) => {
		let a = t.subscribe(e);
		aC(() => a.unsubscribe());
	};
}
function iW(e) {
	return (t) => {
		let a;
		aA(() => {
			a = t.subscribe(e);
		}), aC(() => a?.unsubscribe());
	};
}
let iz = (e) => {
	let t = new iD(e), a = new nM((e, a) => ({
		get: () => (e(), t.value),
		set(e) {
			let r = e?.[iI] ?? e;
			Object.is(r, t.value) || (t.next(r), a());
		}
	}));
	return new Proxy(t, {
		get: (e, r) => "next" === r ? (e) => {
			a.value = eV(e) ? sC(t.value, e) : e;
		} : "value" === r ? a.value : t[r] ?? a[r],
		set: (e, t, r) => ("value" === t ? a.value = r : e[t] = r, !0)
	});
};
var iK = (e) => "function" == typeof e ? e : Array.isArray(e) ? () => e : void 0 === e ? e : () => e, iq = (e, t, a) => iH(e, t, a), iH = (e, t, a) => {
	let r, [s, l] = ((e, t) => {
		let { children: a,...r } = e;
		if (a && !Array.isArray(a) && !rR(a) && "object" == typeof a) return [t ? {
			...r,
			key: t
		} : r, a];
		let s = {}, l = {}, i = !1;
		for (let e in r) {
			let t = r[e];
			if (e.startsWith("$")) {
				l[e.slice(1)] = iK(t), i = !0;
				continue;
			}
			s[e] = t;
		}
		let o = iK(a);
		return o && (l.default = o, i = !0), [t ? {
			...s,
			key: t
		} : s, i ? l : void 0];
	})(t, a);
	return (r = e) === rj || "string" == typeof r || "object" == typeof r && r.__isTeleport ? r2(e, s, l?.default?.() ?? (e === rj ? [] : void 0)) : r2(e, s, l);
};
function iG(e) {
	return (t) => iH(iJ, {
		renderFn$: t.pipe(c((t) => () => e(t))),
		children: {}
	});
}
var iJ = lw({ renderFn$: ly() }, (e, t) => {
	let a = null;
	iL(e.renderFn$, o((e) => {
		a = e;
	}), iU());
	let r = iz(1);
	return iL(e.renderFn$, o(() => {
		r.value += 1;
	}), iW()), () => r.value ? a?.() : null;
}, { name: "RxSlot" }, { displayName: "RxSlot" });
let iX = (e, t) => {
	let a = new i(e[t]);
	return rh(() => e[t], (e) => a.next(e)), a;
};
function iZ(...e) {
	let t, r = {}, s = {};
	for (let a of e) {
		if (eV(a)) {
			t = a;
			continue;
		}
		eL(t) ? r = a : s = a;
	}
	return lw(r, (e, r) => {
		let s = ((e) => {
			let t = {};
			for (let r in e) {
				if (eV(e[r]) || a(e[r])) {
					t[r] = e[r];
					continue;
				}
				t[`${r}$`] = iX(e, r);
			}
			return t;
		})(e), l = new Proxy({}, { get: (t, a) => e[a] ?? s[a] }), i = new Proxy({}, { get: (e, t) => "render" === t ? iG : r[t] }), o = t(l, i);
		return eV(o) ? o : () => o;
	}, s);
}
let iQ = (e) => {
	let t, a = null;
	return o({
		next: (r) => {
			((e, t) => {
				if (eN(e) && eN(t)) {
					if (e.length !== t.length) return !1;
					for (let a in e) if (!Object.is(e[a], t[a])) return !1;
					return !0;
				}
				return Object.is(e, t);
			})(r, a) || (t?.(), t = e(r), a = r);
		},
		unsubscribe: () => {
			t?.();
		}
	});
};
function iY(...e) {
	let t, a, r = {}, s = {};
	for (let a of e) {
		if (eV(a)) {
			t = a;
			continue;
		}
		eL(t) ? r = a : s = a;
	}
	let l = Symbol(s?.name ?? "");
	if (eD(r) && eD(s.props)) {
		let e, a = () => e ??= t({});
		return lO(lw({
			value: ly().optional(),
			$default: ly().optional()
		}, (e, { slots: t }) => (a4(l, e.value ?? a()), () => t.default?.()), {
			...s,
			name: `Provide(${s?.name ?? ""})`
		}, { displayName: "Provider" }), { use: () => a6(l, a, !0) });
	}
	let i = ld(r);
	return lO(lw({
		...r,
		$default: ly().optional()
	}, (e, { slots: r }) => (a4(l, a = t(e)), () => r.default?.()), {
		...s,
		name: `Provide(${s?.name ?? ""})`
	}, { displayName: "Provider" }), { use: () => a6(l, () => a ??= t(i.create({})), !0) });
}
var i0 = lw(() => {
	let e = nO(1);
	return () => iq("div", {
		style: {
			display: "flex",
			gap: "1rem"
		},
		children: [iq("div", { children: ["Counts: ", e.value] }), iH("button", {
			onClick: () => e.value++,
			children: "Click To Count"
		})]
	});
}), i1 = lw({
	value: ll().optional().default("1"),
	type: lu(["text", "number"]),
	onValueChange: ly()
}, (e, { emit: t }) => () => iH("input", {
	value: e.value,
	onInput: (e) => {
		t("value-change", e.target.value);
	}
}), { displayName: "TextInput" }), i2 = lw({
	$title: ly().optional(),
	$item: ly().optional(),
	$default: ly().optional()
}, ({}, { slots: e }) => () => iq("dl", { children: [
	iH("dt", { children: "default" }),
	iH("dd", { children: e.default?.() }),
	iH("dt", { children: "title" }),
	iH("dd", { children: e.title?.() }),
	iH("dt", { children: "item" }),
	iH("dd", { children: [{
		label: "1",
		value: "1"
	}, {
		label: "2",
		value: "2"
	}].map((t) => e.item?.(t)) })
] }), { displayName: "List" }), i4 = lw(() => {
	let e = nO("");
	return () => iH(i2, {
		$title: iq("div", { children: ["Inputted: ", e.value] }),
		$item: (e) => iH("div", { children: e.label }),
		children: iH(i1, {
			type: "text",
			onValueChange: (t) => {
				e.value = t;
			}
		})
	});
});
function i6(e) {
	let t = {
		code: "code",
		codeblock4a44dc15: "codeblock4a44dc15",
		codeblock4b227777: "codeblock4b227777",
		div: "div",
		li: "li",
		p: "p",
		pre: "pre",
		span: "span",
		ul: "ul",
		...e.components
	};
	return iq(rj, { children: [
		iH(t.p, { children: "为了更好的 TypeScript 和 JSX 的支持，重新抽象了定义组件的方式" }),
		"\n",
		iH(t.p, { children: "一般组件：" }),
		"\n",
		iq(t.div, {
			"data-example": "",
			children: [iH(t.div, {
				"data-example-container": "",
				children: iH(t.codeblock4b227777, {})
			}), iH(t.pre, {
				className: "language-tsx",
				children: iq(t.code, {
					className: "language-tsx",
					children: [
						iH(t.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						iq(t.span, {
							className: "token imports",
							children: [
								iH(t.span, {
									className: "token punctuation",
									children: "{"
								}),
								" component ",
								iH(t.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						iH(t.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						iH(t.span, {
							className: "token string",
							children: "\"@innoai-tech/vuekit\""
						}),
						iH(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						iH(t.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						iq(t.span, {
							className: "token imports",
							children: [
								iH(t.span, {
									className: "token punctuation",
									children: "{"
								}),
								" ref ",
								iH(t.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						iH(t.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						iH(t.span, {
							className: "token string",
							children: "\"vue\""
						}),
						iH(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n",
						iH(t.span, {
							className: "token keyword module",
							children: "export"
						}),
						" ",
						iH(t.span, {
							className: "token keyword module",
							children: "default"
						}),
						" ",
						iH(t.span, {
							className: "token function",
							children: "component"
						}),
						iH(t.span, {
							className: "token punctuation",
							children: "("
						}),
						iH(t.span, {
							className: "token punctuation",
							children: "("
						}),
						iH(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						iH(t.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						iH(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n  ",
						iH(t.span, {
							className: "token keyword",
							children: "const"
						}),
						" count ",
						iH(t.span, {
							className: "token operator",
							children: "="
						}),
						" ",
						iH(t.span, {
							className: "token function",
							children: "ref"
						}),
						iH(t.span, {
							className: "token punctuation",
							children: "("
						}),
						iH(t.span, {
							className: "token number",
							children: "1"
						}),
						iH(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						iH(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n  ",
						iH(t.span, {
							className: "token keyword control-flow",
							children: "return"
						}),
						" ",
						iH(t.span, {
							className: "token punctuation",
							children: "("
						}),
						iH(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						iH(t.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						iH(t.span, {
							className: "token punctuation",
							children: "("
						}),
						"\n    ",
						iq(t.span, {
							className: "token tag",
							children: [
								iq(t.span, {
									className: "token tag",
									children: [iH(t.span, {
										className: "token punctuation",
										children: "<"
									}), "div"]
								}),
								" ",
								iH(t.span, {
									className: "token attr-name",
									children: "style"
								}),
								iq(t.span, {
									className: "token script language-javascript",
									children: [
										iH(t.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										iH(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										iH(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										" display",
										iH(t.span, {
											className: "token operator",
											children: ":"
										}),
										" ",
										iH(t.span, {
											className: "token string",
											children: "\"flex\""
										}),
										iH(t.span, {
											className: "token punctuation",
											children: ","
										}),
										" gap",
										iH(t.span, {
											className: "token operator",
											children: ":"
										}),
										" ",
										iH(t.span, {
											className: "token string",
											children: "\"1rem\""
										}),
										" ",
										iH(t.span, {
											className: "token punctuation",
											children: "}"
										}),
										iH(t.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								iH(t.span, {
									className: "token punctuation",
									children: ">"
								})
							]
						}),
						iH(t.span, {
							className: "token plain-text",
							children: "\n      "
						}),
						iq(t.span, {
							className: "token tag",
							children: [iq(t.span, {
								className: "token tag",
								children: [iH(t.span, {
									className: "token punctuation",
									children: "<"
								}), "div"]
							}), iH(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						iH(t.span, {
							className: "token plain-text",
							children: "Counts: "
						}),
						iH(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						"count",
						iH(t.span, {
							className: "token punctuation",
							children: "."
						}),
						iH(t.span, {
							className: "token property-access",
							children: "value"
						}),
						iH(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						iq(t.span, {
							className: "token tag",
							children: [iq(t.span, {
								className: "token tag",
								children: [iH(t.span, {
									className: "token punctuation",
									children: "</"
								}), "div"]
							}), iH(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						iH(t.span, {
							className: "token plain-text",
							children: "\n      "
						}),
						iq(t.span, {
							className: "token tag",
							children: [
								iq(t.span, {
									className: "token tag",
									children: [iH(t.span, {
										className: "token punctuation",
										children: "<"
									}), "button"]
								}),
								" ",
								iH(t.span, {
									className: "token attr-name",
									children: "onClick"
								}),
								iq(t.span, {
									className: "token script language-javascript",
									children: [
										iH(t.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										iH(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										iH(t.span, {
											className: "token punctuation",
											children: "("
										}),
										iH(t.span, {
											className: "token punctuation",
											children: ")"
										}),
										" ",
										iH(t.span, {
											className: "token arrow operator",
											children: "=>"
										}),
										" count",
										iH(t.span, {
											className: "token punctuation",
											children: "."
										}),
										iH(t.span, {
											className: "token property-access",
											children: "value"
										}),
										iH(t.span, {
											className: "token operator",
											children: "++"
										}),
										iH(t.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								iH(t.span, {
									className: "token punctuation",
									children: ">"
								})
							]
						}),
						iH(t.span, {
							className: "token plain-text",
							children: "Click To Count"
						}),
						iq(t.span, {
							className: "token tag",
							children: [iq(t.span, {
								className: "token tag",
								children: [iH(t.span, {
									className: "token punctuation",
									children: "</"
								}), "button"]
							}), iH(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						iH(t.span, {
							className: "token plain-text",
							children: "\n    "
						}),
						iq(t.span, {
							className: "token tag",
							children: [iq(t.span, {
								className: "token tag",
								children: [iH(t.span, {
									className: "token punctuation",
									children: "</"
								}), "div"]
							}), iH(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						"\n  ",
						iH(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						iH(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						iH(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						iH(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						iH(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n"
					]
				})
			})]
		}),
		"\n",
		iH(t.p, { children: "可复用组件：" }),
		"\n",
		iq(t.ul, { children: [
			"\n",
			iq(t.li, { children: [
				iH(t.code, { children: "props" }),
				" 和 ",
				iH(t.code, { children: "emits" }),
				" 合并声明"
			] }),
			"\n"
		] }),
		"\n",
		iq(t.div, {
			"data-example": "",
			children: [iH(t.div, {
				"data-example-container": "",
				children: iH(t.codeblock4a44dc15, {})
			}), iH(t.pre, {
				className: "language-tsx",
				children: iq(t.code, {
					className: "language-tsx",
					children: [
						iH(t.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						iH(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						" component",
						iH(t.span, {
							className: "token punctuation",
							children: ","
						}),
						" t",
						iH(t.span, {
							className: "token punctuation",
							children: ","
						}),
						" ",
						iH(t.span, {
							className: "token keyword",
							children: "type"
						}),
						" ",
						iH(t.span, {
							className: "token class-name",
							children: iH(t.span, {
								className: "token maybe-class-name",
								children: "VNode"
							})
						}),
						iH(t.span, {
							className: "token punctuation",
							children: ","
						}),
						" ",
						iH(t.span, {
							className: "token keyword",
							children: "type"
						}),
						" ",
						iH(t.span, {
							className: "token class-name",
							children: iH(t.span, {
								className: "token maybe-class-name",
								children: "VNodeChild"
							})
						}),
						" ",
						iH(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						" ",
						iH(t.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						iH(t.span, {
							className: "token string",
							children: "\"@innoai-tech/vuekit\""
						}),
						iH(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						iH(t.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						iq(t.span, {
							className: "token imports",
							children: [
								iH(t.span, {
									className: "token punctuation",
									children: "{"
								}),
								" ref ",
								iH(t.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						iH(t.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						iH(t.span, {
							className: "token string",
							children: "\"vue\""
						}),
						iH(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n",
						iH(t.span, {
							className: "token keyword module",
							children: "export"
						}),
						" ",
						iH(t.span, {
							className: "token keyword",
							children: "const"
						}),
						" ",
						iH(t.span, {
							className: "token maybe-class-name",
							children: "TextInput"
						}),
						" ",
						iH(t.span, {
							className: "token operator",
							children: "="
						}),
						" ",
						iH(t.span, {
							className: "token function",
							children: "component"
						}),
						iH(t.span, {
							className: "token punctuation",
							children: "("
						}),
						"\n  ",
						iH(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n    ",
						iH(t.span, {
							className: "token comment",
							children: "// VUE 的注册机制（Proxy 定义基准，以及从 attrs 中提取 props 的 emits 的依据）"
						}),
						"\n    ",
						iH(t.span, {
							className: "token comment",
							children: "// 必须声明，哪怕只是属性名称"
						}),
						"\n    ",
						iH(t.span, {
							className: "token comment",
							children: "//"
						}),
						"\n    ",
						iH(t.span, {
							className: "token comment",
							children: "// 又由于 TypeString 的老问题  https://www.typescriptneedstypes.com/#the-problem"
						}),
						"\n    ",
						iH(t.span, {
							className: "token comment",
							children: "// 类型定义无法转为 Runtime 对象"
						}),
						"\n    value",
						iH(t.span, {
							className: "token operator",
							children: ":"
						}),
						" t",
						iH(t.span, {
							className: "token punctuation",
							children: "."
						}),
						iH(t.span, {
							className: "token method function property-access",
							children: "string"
						}),
						iH(t.span, {
							className: "token punctuation",
							children: "("
						}),
						iH(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						iH(t.span, {
							className: "token punctuation",
							children: "."
						}),
						iH(t.span, {
							className: "token method function property-access",
							children: "optional"
						}),
						iH(t.span, {
							className: "token punctuation",
							children: "("
						}),
						iH(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						iH(t.span, {
							className: "token punctuation",
							children: "."
						}),
						iH(t.span, {
							className: "token keyword module",
							children: "default"
						}),
						iH(t.span, {
							className: "token punctuation",
							children: "("
						}),
						iH(t.span, {
							className: "token string",
							children: "\"1\""
						}),
						iH(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						iH(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n    type",
						iH(t.span, {
							className: "token operator",
							children: ":"
						}),
						" t",
						iH(t.span, {
							className: "token punctuation",
							children: "."
						}),
						iH(t.span, {
							className: "token method function property-access",
							children: "enums"
						}),
						iH(t.span, {
							className: "token punctuation",
							children: "("
						}),
						iH(t.span, {
							className: "token punctuation",
							children: "["
						}),
						iH(t.span, {
							className: "token string",
							children: "\"text\""
						}),
						iH(t.span, {
							className: "token punctuation",
							children: ","
						}),
						" ",
						iH(t.span, {
							className: "token string",
							children: "\"number\""
						}),
						iH(t.span, {
							className: "token punctuation",
							children: "]"
						}),
						iH(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						iH(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n\n    ",
						iH(t.span, {
							className: "token comment",
							children: "// on[A-Z] 前缀视为 emits"
						}),
						"\n    onValueChange",
						iH(t.span, {
							className: "token operator",
							children: ":"
						}),
						" t",
						iH(t.span, {
							className: "token punctuation",
							children: "."
						}),
						iH(t.span, {
							className: "token property-access",
							children: "custom"
						}),
						iH(t.span, {
							className: "token operator",
							children: "<"
						}),
						iH(t.span, {
							className: "token punctuation",
							children: "("
						}),
						"v",
						iH(t.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						iH(t.span, {
							className: "token builtin",
							children: "string"
						}),
						iH(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						iH(t.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						iH(t.span, {
							className: "token keyword",
							children: "void"
						}),
						iH(t.span, {
							className: "token operator",
							children: ">"
						}),
						iH(t.span, {
							className: "token punctuation",
							children: "("
						}),
						iH(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						iH(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n  ",
						iH(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						iH(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n  ",
						iH(t.span, {
							className: "token punctuation",
							children: "("
						}),
						"props",
						iH(t.span, {
							className: "token punctuation",
							children: ","
						}),
						" ",
						iH(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						" emit ",
						iH(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						iH(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						iH(t.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						iH(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n    ",
						iH(t.span, {
							className: "token comment",
							children: "// setup"
						}),
						"\n\n    ",
						iH(t.span, {
							className: "token keyword control-flow",
							children: "return"
						}),
						" ",
						iH(t.span, {
							className: "token punctuation",
							children: "("
						}),
						iH(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						iH(t.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						iH(t.span, {
							className: "token punctuation",
							children: "("
						}),
						"\n      ",
						iq(t.span, {
							className: "token tag",
							children: [
								iq(t.span, {
									className: "token tag",
									children: [iH(t.span, {
										className: "token punctuation",
										children: "<"
									}), "input"]
								}),
								"\n        ",
								iH(t.span, {
									className: "token attr-name",
									children: "value"
								}),
								iq(t.span, {
									className: "token script language-javascript",
									children: [
										iH(t.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										iH(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										"props",
										iH(t.span, {
											className: "token punctuation",
											children: "."
										}),
										iH(t.span, {
											className: "token property-access",
											children: "value"
										}),
										iH(t.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n        ",
								iH(t.span, {
									className: "token attr-name",
									children: "onInput"
								}),
								iq(t.span, {
									className: "token script language-javascript",
									children: [
										iH(t.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										iH(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										iH(t.span, {
											className: "token punctuation",
											children: "("
										}),
										"e",
										iH(t.span, {
											className: "token punctuation",
											children: ")"
										}),
										" ",
										iH(t.span, {
											className: "token arrow operator",
											children: "=>"
										}),
										" ",
										iH(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										"\n          ",
										iH(t.span, {
											className: "token function",
											children: "emit"
										}),
										iH(t.span, {
											className: "token punctuation",
											children: "("
										}),
										iH(t.span, {
											className: "token string",
											children: "\"value-change\""
										}),
										iH(t.span, {
											className: "token punctuation",
											children: ","
										}),
										" ",
										iH(t.span, {
											className: "token punctuation",
											children: "("
										}),
										"e",
										iH(t.span, {
											className: "token punctuation",
											children: "."
										}),
										iH(t.span, {
											className: "token property-access",
											children: "target"
										}),
										" ",
										iH(t.span, {
											className: "token keyword module",
											children: "as"
										}),
										" ",
										iH(t.span, {
											className: "token maybe-class-name",
											children: "HTMLInputElement"
										}),
										iH(t.span, {
											className: "token punctuation",
											children: ")"
										}),
										iH(t.span, {
											className: "token punctuation",
											children: "."
										}),
										iH(t.span, {
											className: "token property-access",
											children: "value"
										}),
										iH(t.span, {
											className: "token punctuation",
											children: ")"
										}),
										iH(t.span, {
											className: "token punctuation",
											children: ";"
										}),
										"\n        ",
										iH(t.span, {
											className: "token punctuation",
											children: "}"
										}),
										iH(t.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n      ",
								iH(t.span, {
									className: "token punctuation",
									children: "/>"
								})
							]
						}),
						"\n    ",
						iH(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						iH(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n  ",
						iH(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						iH(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n",
						iH(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						iH(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n",
						iH(t.span, {
							className: "token keyword module",
							children: "export"
						}),
						" ",
						iH(t.span, {
							className: "token keyword",
							children: "interface"
						}),
						" ",
						iH(t.span, {
							className: "token class-name",
							children: iH(t.span, {
								className: "token maybe-class-name",
								children: "Option"
							})
						}),
						" ",
						iH(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n  label",
						iH(t.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						iH(t.span, {
							className: "token builtin",
							children: "string"
						}),
						iH(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n  value",
						iH(t.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						iH(t.span, {
							className: "token builtin",
							children: "string"
						}),
						iH(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						iH(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						"\n\n",
						iH(t.span, {
							className: "token keyword module",
							children: "export"
						}),
						" ",
						iH(t.span, {
							className: "token keyword",
							children: "const"
						}),
						" ",
						iH(t.span, {
							className: "token maybe-class-name",
							children: "List"
						}),
						" ",
						iH(t.span, {
							className: "token operator",
							children: "="
						}),
						" ",
						iH(t.span, {
							className: "token function",
							children: "component"
						}),
						iH(t.span, {
							className: "token punctuation",
							children: "("
						}),
						"\n  ",
						iH(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n    ",
						iH(t.span, {
							className: "token comment",
							children: "// $ 前缀视为 slots"
						}),
						"\n    $title",
						iH(t.span, {
							className: "token operator",
							children: ":"
						}),
						" t",
						iH(t.span, {
							className: "token punctuation",
							children: "."
						}),
						iH(t.span, {
							className: "token property-access",
							children: "custom"
						}),
						iH(t.span, {
							className: "token operator",
							children: "<"
						}),
						iH(t.span, {
							className: "token maybe-class-name",
							children: "VNodeChild"
						}),
						iH(t.span, {
							className: "token operator",
							children: ">"
						}),
						iH(t.span, {
							className: "token punctuation",
							children: "("
						}),
						iH(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						iH(t.span, {
							className: "token punctuation",
							children: "."
						}),
						iH(t.span, {
							className: "token method function property-access",
							children: "optional"
						}),
						iH(t.span, {
							className: "token punctuation",
							children: "("
						}),
						iH(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						iH(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n    ",
						iH(t.span, {
							className: "token comment",
							children: "// renderProp"
						}),
						"\n    $item",
						iH(t.span, {
							className: "token operator",
							children: ":"
						}),
						" t",
						iH(t.span, {
							className: "token punctuation",
							children: "."
						}),
						iH(t.span, {
							className: "token property-access",
							children: "custom"
						}),
						iH(t.span, {
							className: "token operator",
							children: "<"
						}),
						iH(t.span, {
							className: "token punctuation",
							children: "("
						}),
						"option",
						iH(t.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						iH(t.span, {
							className: "token maybe-class-name",
							children: "Option"
						}),
						iH(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						iH(t.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						iH(t.span, {
							className: "token maybe-class-name",
							children: "VNode"
						}),
						iH(t.span, {
							className: "token operator",
							children: ">"
						}),
						iH(t.span, {
							className: "token punctuation",
							children: "("
						}),
						iH(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						iH(t.span, {
							className: "token punctuation",
							children: "."
						}),
						iH(t.span, {
							className: "token method function property-access",
							children: "optional"
						}),
						iH(t.span, {
							className: "token punctuation",
							children: "("
						}),
						iH(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						iH(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n\n    $",
						iH(t.span, {
							className: "token keyword module",
							children: "default"
						}),
						iH(t.span, {
							className: "token operator",
							children: ":"
						}),
						" t",
						iH(t.span, {
							className: "token punctuation",
							children: "."
						}),
						iH(t.span, {
							className: "token property-access",
							children: "custom"
						}),
						iH(t.span, {
							className: "token operator",
							children: "<"
						}),
						iH(t.span, {
							className: "token maybe-class-name",
							children: "VNodeChild"
						}),
						iH(t.span, {
							className: "token operator",
							children: ">"
						}),
						iH(t.span, {
							className: "token punctuation",
							children: "("
						}),
						iH(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						iH(t.span, {
							className: "token punctuation",
							children: "."
						}),
						iH(t.span, {
							className: "token method function property-access",
							children: "optional"
						}),
						iH(t.span, {
							className: "token punctuation",
							children: "("
						}),
						iH(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						iH(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n\n    ",
						iH(t.span, {
							className: "token comment",
							children: "// 以此避免多插槽时 children slots object 的写法, 且无类型约束，"
						}),
						"\n    ",
						iH(t.span, {
							className: "token comment",
							children: "// {{ default: () => VNode, title: () => VNode, item: (option: Option) => VNode }}"
						}),
						"\n  ",
						iH(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						iH(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n  ",
						iH(t.span, {
							className: "token punctuation",
							children: "("
						}),
						iH(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						iH(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						iH(t.span, {
							className: "token punctuation",
							children: ","
						}),
						" ",
						iH(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						" slots ",
						iH(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						iH(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						iH(t.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						"\n    ",
						iH(t.span, {
							className: "token punctuation",
							children: "("
						}),
						iH(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						iH(t.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						iH(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n      ",
						iH(t.span, {
							className: "token keyword",
							children: "const"
						}),
						" options ",
						iH(t.span, {
							className: "token operator",
							children: "="
						}),
						" ",
						iH(t.span, {
							className: "token punctuation",
							children: "["
						}),
						"\n        ",
						iH(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n          label",
						iH(t.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						iH(t.span, {
							className: "token string",
							children: "\"1\""
						}),
						iH(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n          value",
						iH(t.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						iH(t.span, {
							className: "token string",
							children: "\"1\""
						}),
						iH(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n        ",
						iH(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						iH(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n        ",
						iH(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n          label",
						iH(t.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						iH(t.span, {
							className: "token string",
							children: "\"2\""
						}),
						iH(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n          value",
						iH(t.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						iH(t.span, {
							className: "token string",
							children: "\"2\""
						}),
						iH(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n        ",
						iH(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						iH(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n      ",
						iH(t.span, {
							className: "token punctuation",
							children: "]"
						}),
						iH(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n      ",
						iH(t.span, {
							className: "token keyword control-flow",
							children: "return"
						}),
						" ",
						iH(t.span, {
							className: "token punctuation",
							children: "("
						}),
						"\n        ",
						iq(t.span, {
							className: "token tag",
							children: [iq(t.span, {
								className: "token tag",
								children: [iH(t.span, {
									className: "token punctuation",
									children: "<"
								}), "dl"]
							}), iH(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						iH(t.span, {
							className: "token plain-text",
							children: "\n          "
						}),
						iq(t.span, {
							className: "token tag",
							children: [iq(t.span, {
								className: "token tag",
								children: [iH(t.span, {
									className: "token punctuation",
									children: "<"
								}), "dt"]
							}), iH(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						iH(t.span, {
							className: "token plain-text",
							children: "default"
						}),
						iq(t.span, {
							className: "token tag",
							children: [iq(t.span, {
								className: "token tag",
								children: [iH(t.span, {
									className: "token punctuation",
									children: "</"
								}), "dt"]
							}), iH(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						iH(t.span, {
							className: "token plain-text",
							children: "\n          "
						}),
						iq(t.span, {
							className: "token tag",
							children: [iq(t.span, {
								className: "token tag",
								children: [iH(t.span, {
									className: "token punctuation",
									children: "<"
								}), "dd"]
							}), iH(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						iH(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						"slots",
						iH(t.span, {
							className: "token punctuation",
							children: "."
						}),
						iH(t.span, {
							className: "token keyword module",
							children: "default"
						}),
						iH(t.span, {
							className: "token operator",
							children: "?."
						}),
						iH(t.span, {
							className: "token punctuation",
							children: "("
						}),
						iH(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						iH(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						iq(t.span, {
							className: "token tag",
							children: [iq(t.span, {
								className: "token tag",
								children: [iH(t.span, {
									className: "token punctuation",
									children: "</"
								}), "dd"]
							}), iH(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						iH(t.span, {
							className: "token plain-text",
							children: "\n          "
						}),
						iq(t.span, {
							className: "token tag",
							children: [iq(t.span, {
								className: "token tag",
								children: [iH(t.span, {
									className: "token punctuation",
									children: "<"
								}), "dt"]
							}), iH(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						iH(t.span, {
							className: "token plain-text",
							children: "title"
						}),
						iq(t.span, {
							className: "token tag",
							children: [iq(t.span, {
								className: "token tag",
								children: [iH(t.span, {
									className: "token punctuation",
									children: "</"
								}), "dt"]
							}), iH(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						iH(t.span, {
							className: "token plain-text",
							children: "\n          "
						}),
						iq(t.span, {
							className: "token tag",
							children: [iq(t.span, {
								className: "token tag",
								children: [iH(t.span, {
									className: "token punctuation",
									children: "<"
								}), "dd"]
							}), iH(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						iH(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						"slots",
						iH(t.span, {
							className: "token punctuation",
							children: "."
						}),
						iH(t.span, {
							className: "token property-access",
							children: "title"
						}),
						iH(t.span, {
							className: "token operator",
							children: "?."
						}),
						iH(t.span, {
							className: "token punctuation",
							children: "("
						}),
						iH(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						iH(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						iq(t.span, {
							className: "token tag",
							children: [iq(t.span, {
								className: "token tag",
								children: [iH(t.span, {
									className: "token punctuation",
									children: "</"
								}), "dd"]
							}), iH(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						iH(t.span, {
							className: "token plain-text",
							children: "\n          "
						}),
						iq(t.span, {
							className: "token tag",
							children: [iq(t.span, {
								className: "token tag",
								children: [iH(t.span, {
									className: "token punctuation",
									children: "<"
								}), "dt"]
							}), iH(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						iH(t.span, {
							className: "token plain-text",
							children: "item"
						}),
						iq(t.span, {
							className: "token tag",
							children: [iq(t.span, {
								className: "token tag",
								children: [iH(t.span, {
									className: "token punctuation",
									children: "</"
								}), "dt"]
							}), iH(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						iH(t.span, {
							className: "token plain-text",
							children: "\n          "
						}),
						iq(t.span, {
							className: "token tag",
							children: [iq(t.span, {
								className: "token tag",
								children: [iH(t.span, {
									className: "token punctuation",
									children: "<"
								}), "dd"]
							}), iH(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						iH(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						"options",
						iH(t.span, {
							className: "token punctuation",
							children: "."
						}),
						iH(t.span, {
							className: "token method function property-access",
							children: "map"
						}),
						iH(t.span, {
							className: "token punctuation",
							children: "("
						}),
						iH(t.span, {
							className: "token punctuation",
							children: "("
						}),
						"option",
						iH(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						iH(t.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" slots",
						iH(t.span, {
							className: "token punctuation",
							children: "."
						}),
						iH(t.span, {
							className: "token property-access",
							children: "item"
						}),
						iH(t.span, {
							className: "token operator",
							children: "?."
						}),
						iH(t.span, {
							className: "token punctuation",
							children: "("
						}),
						"option",
						iH(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						iH(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						iH(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						iq(t.span, {
							className: "token tag",
							children: [iq(t.span, {
								className: "token tag",
								children: [iH(t.span, {
									className: "token punctuation",
									children: "</"
								}), "dd"]
							}), iH(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						iH(t.span, {
							className: "token plain-text",
							children: "\n        "
						}),
						iq(t.span, {
							className: "token tag",
							children: [iq(t.span, {
								className: "token tag",
								children: [iH(t.span, {
									className: "token punctuation",
									children: "</"
								}), "dl"]
							}), iH(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						"\n      ",
						iH(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						iH(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n    ",
						iH(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						iH(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n",
						iH(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						iH(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n",
						iH(t.span, {
							className: "token keyword module",
							children: "export"
						}),
						" ",
						iH(t.span, {
							className: "token keyword module",
							children: "default"
						}),
						" ",
						iH(t.span, {
							className: "token function",
							children: "component"
						}),
						iH(t.span, {
							className: "token punctuation",
							children: "("
						}),
						iH(t.span, {
							className: "token punctuation",
							children: "("
						}),
						iH(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						iH(t.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						iH(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n  ",
						iH(t.span, {
							className: "token keyword",
							children: "const"
						}),
						" inputValue ",
						iH(t.span, {
							className: "token operator",
							children: "="
						}),
						" ",
						iH(t.span, {
							className: "token function",
							children: "ref"
						}),
						iH(t.span, {
							className: "token punctuation",
							children: "("
						}),
						iH(t.span, {
							className: "token string",
							children: "\"\""
						}),
						iH(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						iH(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n  ",
						iH(t.span, {
							className: "token keyword control-flow",
							children: "return"
						}),
						" ",
						iH(t.span, {
							className: "token punctuation",
							children: "("
						}),
						iH(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						iH(t.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						iH(t.span, {
							className: "token punctuation",
							children: "("
						}),
						"\n    ",
						iq(t.span, {
							className: "token tag",
							children: [
								iq(t.span, {
									className: "token tag",
									children: [iH(t.span, {
										className: "token punctuation",
										children: "<"
									}), iH(t.span, {
										className: "token class-name",
										children: "List"
									})]
								}),
								"\n      ",
								iH(t.span, {
									className: "token attr-name",
									children: "$title"
								}),
								iq(t.span, {
									className: "token script language-javascript",
									children: [
										iH(t.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										iH(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										iq(t.span, {
											className: "token tag",
											children: [iq(t.span, {
												className: "token tag",
												children: [iH(t.span, {
													className: "token punctuation",
													children: "<"
												}), "div"]
											}), iH(t.span, {
												className: "token punctuation",
												children: ">"
											})]
										}),
										iH(t.span, {
											className: "token plain-text",
											children: "Inputted: "
										}),
										iH(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										"inputValue",
										iH(t.span, {
											className: "token punctuation",
											children: "."
										}),
										iH(t.span, {
											className: "token property-access",
											children: "value"
										}),
										iH(t.span, {
											className: "token punctuation",
											children: "}"
										}),
										iq(t.span, {
											className: "token tag",
											children: [iq(t.span, {
												className: "token tag",
												children: [iH(t.span, {
													className: "token punctuation",
													children: "</"
												}), "div"]
											}), iH(t.span, {
												className: "token punctuation",
												children: ">"
											})]
										}),
										iH(t.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n      ",
								iH(t.span, {
									className: "token attr-name",
									children: "$item"
								}),
								iq(t.span, {
									className: "token script language-javascript",
									children: [
										iH(t.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										iH(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										iH(t.span, {
											className: "token punctuation",
											children: "("
										}),
										"o",
										iH(t.span, {
											className: "token punctuation",
											children: ")"
										}),
										" ",
										iH(t.span, {
											className: "token arrow operator",
											children: "=>"
										}),
										" ",
										iq(t.span, {
											className: "token tag",
											children: [iq(t.span, {
												className: "token tag",
												children: [iH(t.span, {
													className: "token punctuation",
													children: "<"
												}), "div"]
											}), iH(t.span, {
												className: "token punctuation",
												children: ">"
											})]
										}),
										iH(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										"o",
										iH(t.span, {
											className: "token punctuation",
											children: "."
										}),
										iH(t.span, {
											className: "token property-access",
											children: "label"
										}),
										iH(t.span, {
											className: "token punctuation",
											children: "}"
										}),
										iq(t.span, {
											className: "token tag",
											children: [iq(t.span, {
												className: "token tag",
												children: [iH(t.span, {
													className: "token punctuation",
													children: "</"
												}), "div"]
											}), iH(t.span, {
												className: "token punctuation",
												children: ">"
											})]
										}),
										iH(t.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n    ",
								iH(t.span, {
									className: "token punctuation",
									children: ">"
								})
							]
						}),
						iH(t.span, {
							className: "token plain-text",
							children: "\n      "
						}),
						iq(t.span, {
							className: "token tag",
							children: [
								iq(t.span, {
									className: "token tag",
									children: [iH(t.span, {
										className: "token punctuation",
										children: "<"
									}), iH(t.span, {
										className: "token class-name",
										children: "TextInput"
									})]
								}),
								"\n        ",
								iH(t.span, {
									className: "token attr-name",
									children: "type"
								}),
								iq(t.span, {
									className: "token script language-javascript",
									children: [
										iH(t.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										iH(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										iH(t.span, {
											className: "token string",
											children: "\"text\""
										}),
										iH(t.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n        ",
								iH(t.span, {
									className: "token attr-name",
									children: "onValueChange"
								}),
								iq(t.span, {
									className: "token script language-javascript",
									children: [
										iH(t.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										iH(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										iH(t.span, {
											className: "token punctuation",
											children: "("
										}),
										"value",
										iH(t.span, {
											className: "token punctuation",
											children: ")"
										}),
										" ",
										iH(t.span, {
											className: "token arrow operator",
											children: "=>"
										}),
										" ",
										iH(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										"\n          inputValue",
										iH(t.span, {
											className: "token punctuation",
											children: "."
										}),
										iH(t.span, {
											className: "token property-access",
											children: "value"
										}),
										" ",
										iH(t.span, {
											className: "token operator",
											children: "="
										}),
										" value",
										iH(t.span, {
											className: "token punctuation",
											children: ";"
										}),
										"\n        ",
										iH(t.span, {
											className: "token punctuation",
											children: "}"
										}),
										iH(t.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n      ",
								iH(t.span, {
									className: "token punctuation",
									children: "/>"
								})
							]
						}),
						iH(t.span, {
							className: "token plain-text",
							children: "\n    "
						}),
						iq(t.span, {
							className: "token tag",
							children: [iq(t.span, {
								className: "token tag",
								children: [iH(t.span, {
									className: "token punctuation",
									children: "</"
								}), iH(t.span, {
									className: "token class-name",
									children: "List"
								})]
							}), iH(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						"\n  ",
						iH(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						iH(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						iH(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						iH(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						iH(t.span, {
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
function i3(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? iH(t, {
		...e,
		children: iH(i6, { ...e })
	}) : i6(e);
}
var i8 = ay(() => () => r2(i3, { components: {
	codeblock4b227777: i0,
	codeblock4a44dc15: i4
} })), i7 = iZ((e, { emit: a }) => {
	let r = iz(e.value ?? "1");
	return iL(r, t(300), iU((e) => a("value-change", e))), iL(r, iG((e) => iH("input", {
		value: e,
		onInput: (e) => {
			r.value = e.target.value;
		}
	})));
}, {
	displayName: "TextDebounceInput",
	props: ["value"],
	emits: ["value-change"]
}), i5 = lw(() => {
	let e = nO("default");
	return () => iH("div", { children: iq("div", {
		style: {
			display: "flex",
			gap: "1rem"
		},
		children: [iH(i7, {
			value: e.value,
			onValueChange: (t) => {
				e.value = t;
			}
		}), iq("div", { children: ["Inputted: ", e.value] })]
	}) });
});
function i9(e) {
	let t = {
		a: "a",
		code: "code",
		codeblockd4735e3a: "codeblockd4735e3a",
		div: "div",
		p: "p",
		pre: "pre",
		span: "span",
		...e.components
	};
	return iq(rj, { children: [
		iq(t.p, { children: [
			"和 ",
			iH(t.a, {
				href: "https://rxjs.dev/",
				children: "rxjs"
			}),
			" 集成"
		] }),
		"\n",
		iq(t.div, {
			"data-example": "",
			children: [iH(t.div, {
				"data-example-container": "",
				children: iH(t.codeblockd4735e3a, {})
			}), iH(t.pre, {
				className: "language-tsx",
				children: iq(t.code, {
					className: "language-tsx",
					children: [
						iH(t.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						iq(t.span, {
							className: "token imports",
							children: [
								iH(t.span, {
									className: "token punctuation",
									children: "{"
								}),
								"\n  component",
								iH(t.span, {
									className: "token punctuation",
									children: ","
								}),
								"\n  component$",
								iH(t.span, {
									className: "token punctuation",
									children: ","
								}),
								"\n  observableRef",
								iH(t.span, {
									className: "token punctuation",
									children: ","
								}),
								"\n  render",
								iH(t.span, {
									className: "token punctuation",
									children: ","
								}),
								"\n  rx",
								iH(t.span, {
									className: "token punctuation",
									children: ","
								}),
								"\n  subscribeUntilUnmount",
								iH(t.span, {
									className: "token punctuation",
									children: ","
								}),
								"\n",
								iH(t.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						iH(t.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						iH(t.span, {
							className: "token string",
							children: "\"@innoai-tech/vuekit\""
						}),
						iH(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						iH(t.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						iq(t.span, {
							className: "token imports",
							children: [
								iH(t.span, {
									className: "token punctuation",
									children: "{"
								}),
								" ref ",
								iH(t.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						iH(t.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						iH(t.span, {
							className: "token string",
							children: "\"vue\""
						}),
						iH(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						iH(t.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						iq(t.span, {
							className: "token imports",
							children: [
								iH(t.span, {
									className: "token punctuation",
									children: "{"
								}),
								" debounceTime ",
								iH(t.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						iH(t.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						iH(t.span, {
							className: "token string",
							children: "\"rxjs\""
						}),
						iH(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n",
						iH(t.span, {
							className: "token keyword module",
							children: "export"
						}),
						" ",
						iH(t.span, {
							className: "token keyword",
							children: "const"
						}),
						" ",
						iH(t.span, {
							className: "token maybe-class-name",
							children: "TextDebounceInput"
						}),
						" ",
						iH(t.span, {
							className: "token operator",
							children: "="
						}),
						" component$",
						iH(t.span, {
							className: "token operator",
							children: "<"
						}),
						iH(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n  value",
						iH(t.span, {
							className: "token operator",
							children: "?"
						}),
						iH(t.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						iH(t.span, {
							className: "token builtin",
							children: "string"
						}),
						iH(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n  onValueChange",
						iH(t.span, {
							className: "token operator",
							children: "?"
						}),
						iH(t.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						iH(t.span, {
							className: "token punctuation",
							children: "("
						}),
						"v",
						iH(t.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						iH(t.span, {
							className: "token builtin",
							children: "string"
						}),
						iH(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						iH(t.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						iH(t.span, {
							className: "token keyword",
							children: "void"
						}),
						iH(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						iH(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						iH(t.span, {
							className: "token operator",
							children: ">"
						}),
						iH(t.span, {
							className: "token punctuation",
							children: "("
						}),
						iH(t.span, {
							className: "token punctuation",
							children: "("
						}),
						"props",
						iH(t.span, {
							className: "token punctuation",
							children: ","
						}),
						" ",
						iH(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						" emit ",
						iH(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						iH(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						iH(t.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						iH(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n  ",
						iH(t.span, {
							className: "token keyword",
							children: "const"
						}),
						" value$ ",
						iH(t.span, {
							className: "token operator",
							children: "="
						}),
						" ",
						iH(t.span, {
							className: "token function",
							children: "observableRef"
						}),
						iH(t.span, {
							className: "token punctuation",
							children: "("
						}),
						"props",
						iH(t.span, {
							className: "token punctuation",
							children: "."
						}),
						iH(t.span, {
							className: "token property-access",
							children: "value"
						}),
						" ",
						iH(t.span, {
							className: "token operator",
							children: "??"
						}),
						" ",
						iH(t.span, {
							className: "token string",
							children: "\"1\""
						}),
						iH(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						iH(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n  ",
						iH(t.span, {
							className: "token function",
							children: "rx"
						}),
						iH(t.span, {
							className: "token punctuation",
							children: "("
						}),
						"\n    value$",
						iH(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n    ",
						iH(t.span, {
							className: "token function",
							children: "debounceTime"
						}),
						iH(t.span, {
							className: "token punctuation",
							children: "("
						}),
						iH(t.span, {
							className: "token number",
							children: "300"
						}),
						iH(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						iH(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n    ",
						iH(t.span, {
							className: "token function",
							children: "subscribeUntilUnmount"
						}),
						iH(t.span, {
							className: "token punctuation",
							children: "("
						}),
						iH(t.span, {
							className: "token punctuation",
							children: "("
						}),
						"v",
						iH(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						iH(t.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						iH(t.span, {
							className: "token function",
							children: "emit"
						}),
						iH(t.span, {
							className: "token punctuation",
							children: "("
						}),
						iH(t.span, {
							className: "token string",
							children: "\"value-change\""
						}),
						iH(t.span, {
							className: "token punctuation",
							children: ","
						}),
						" v",
						iH(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						iH(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						iH(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n  ",
						iH(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						iH(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n  ",
						iH(t.span, {
							className: "token keyword control-flow",
							children: "return"
						}),
						" ",
						iH(t.span, {
							className: "token function",
							children: "rx"
						}),
						iH(t.span, {
							className: "token punctuation",
							children: "("
						}),
						"\n    value$",
						iH(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n    ",
						iH(t.span, {
							className: "token function",
							children: "render"
						}),
						iH(t.span, {
							className: "token punctuation",
							children: "("
						}),
						iH(t.span, {
							className: "token punctuation",
							children: "("
						}),
						"v",
						iH(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						iH(t.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						iH(t.span, {
							className: "token punctuation",
							children: "("
						}),
						"\n      ",
						iq(t.span, {
							className: "token tag",
							children: [
								iq(t.span, {
									className: "token tag",
									children: [iH(t.span, {
										className: "token punctuation",
										children: "<"
									}), "input"]
								}),
								"\n        ",
								iH(t.span, {
									className: "token attr-name",
									children: "value"
								}),
								iq(t.span, {
									className: "token script language-javascript",
									children: [
										iH(t.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										iH(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										"v",
										iH(t.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n        ",
								iH(t.span, {
									className: "token attr-name",
									children: "onInput"
								}),
								iq(t.span, {
									className: "token script language-javascript",
									children: [
										iH(t.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										iH(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										iH(t.span, {
											className: "token punctuation",
											children: "("
										}),
										"e",
										iH(t.span, {
											className: "token punctuation",
											children: ")"
										}),
										" ",
										iH(t.span, {
											className: "token arrow operator",
											children: "=>"
										}),
										" ",
										iH(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										"\n          value$",
										iH(t.span, {
											className: "token punctuation",
											children: "."
										}),
										iH(t.span, {
											className: "token property-access",
											children: "value"
										}),
										" ",
										iH(t.span, {
											className: "token operator",
											children: "="
										}),
										" ",
										iH(t.span, {
											className: "token punctuation",
											children: "("
										}),
										"e",
										iH(t.span, {
											className: "token punctuation",
											children: "."
										}),
										iH(t.span, {
											className: "token property-access",
											children: "target"
										}),
										" ",
										iH(t.span, {
											className: "token keyword module",
											children: "as"
										}),
										" ",
										iH(t.span, {
											className: "token maybe-class-name",
											children: "HTMLInputElement"
										}),
										iH(t.span, {
											className: "token punctuation",
											children: ")"
										}),
										iH(t.span, {
											className: "token punctuation",
											children: "."
										}),
										iH(t.span, {
											className: "token property-access",
											children: "value"
										}),
										iH(t.span, {
											className: "token punctuation",
											children: ";"
										}),
										"\n        ",
										iH(t.span, {
											className: "token punctuation",
											children: "}"
										}),
										iH(t.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n      ",
								iH(t.span, {
									className: "token punctuation",
									children: "/>"
								})
							]
						}),
						"\n    ",
						iH(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						iH(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						iH(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n  ",
						iH(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						iH(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						iH(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						iH(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						iH(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n",
						iH(t.span, {
							className: "token keyword module",
							children: "export"
						}),
						" ",
						iH(t.span, {
							className: "token keyword module",
							children: "default"
						}),
						" ",
						iH(t.span, {
							className: "token function",
							children: "component"
						}),
						iH(t.span, {
							className: "token punctuation",
							children: "("
						}),
						iH(t.span, {
							className: "token punctuation",
							children: "("
						}),
						iH(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						iH(t.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						iH(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n  ",
						iH(t.span, {
							className: "token keyword",
							children: "const"
						}),
						" inputValue ",
						iH(t.span, {
							className: "token operator",
							children: "="
						}),
						" ",
						iH(t.span, {
							className: "token function",
							children: "ref"
						}),
						iH(t.span, {
							className: "token punctuation",
							children: "("
						}),
						iH(t.span, {
							className: "token string",
							children: "\"default\""
						}),
						iH(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						iH(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n  ",
						iH(t.span, {
							className: "token keyword control-flow",
							children: "return"
						}),
						" ",
						iH(t.span, {
							className: "token punctuation",
							children: "("
						}),
						iH(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						iH(t.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						iH(t.span, {
							className: "token punctuation",
							children: "("
						}),
						"\n    ",
						iq(t.span, {
							className: "token tag",
							children: [iq(t.span, {
								className: "token tag",
								children: [iH(t.span, {
									className: "token punctuation",
									children: "<"
								}), "div"]
							}), iH(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						iH(t.span, {
							className: "token plain-text",
							children: "\n      "
						}),
						iq(t.span, {
							className: "token tag",
							children: [
								iq(t.span, {
									className: "token tag",
									children: [iH(t.span, {
										className: "token punctuation",
										children: "<"
									}), "div"]
								}),
								" ",
								iH(t.span, {
									className: "token attr-name",
									children: "style"
								}),
								iq(t.span, {
									className: "token script language-javascript",
									children: [
										iH(t.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										iH(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										iH(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										" display",
										iH(t.span, {
											className: "token operator",
											children: ":"
										}),
										" ",
										iH(t.span, {
											className: "token string",
											children: "\"flex\""
										}),
										iH(t.span, {
											className: "token punctuation",
											children: ","
										}),
										" gap",
										iH(t.span, {
											className: "token operator",
											children: ":"
										}),
										" ",
										iH(t.span, {
											className: "token string",
											children: "\"1rem\""
										}),
										" ",
										iH(t.span, {
											className: "token punctuation",
											children: "}"
										}),
										iH(t.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								iH(t.span, {
									className: "token punctuation",
									children: ">"
								})
							]
						}),
						iH(t.span, {
							className: "token plain-text",
							children: "\n        "
						}),
						iq(t.span, {
							className: "token tag",
							children: [
								iq(t.span, {
									className: "token tag",
									children: [iH(t.span, {
										className: "token punctuation",
										children: "<"
									}), iH(t.span, {
										className: "token class-name",
										children: "TextDebounceInput"
									})]
								}),
								"\n          ",
								iH(t.span, {
									className: "token attr-name",
									children: "value"
								}),
								iq(t.span, {
									className: "token script language-javascript",
									children: [
										iH(t.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										iH(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										"inputValue",
										iH(t.span, {
											className: "token punctuation",
											children: "."
										}),
										iH(t.span, {
											className: "token property-access",
											children: "value"
										}),
										iH(t.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n          ",
								iH(t.span, {
									className: "token attr-name",
									children: "onValueChange"
								}),
								iq(t.span, {
									className: "token script language-javascript",
									children: [
										iH(t.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										iH(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										iH(t.span, {
											className: "token punctuation",
											children: "("
										}),
										"value",
										iH(t.span, {
											className: "token punctuation",
											children: ")"
										}),
										" ",
										iH(t.span, {
											className: "token arrow operator",
											children: "=>"
										}),
										" ",
										iH(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										"\n            inputValue",
										iH(t.span, {
											className: "token punctuation",
											children: "."
										}),
										iH(t.span, {
											className: "token property-access",
											children: "value"
										}),
										" ",
										iH(t.span, {
											className: "token operator",
											children: "="
										}),
										" value",
										iH(t.span, {
											className: "token punctuation",
											children: ";"
										}),
										"\n          ",
										iH(t.span, {
											className: "token punctuation",
											children: "}"
										}),
										iH(t.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n        ",
								iH(t.span, {
									className: "token punctuation",
									children: "/>"
								})
							]
						}),
						iH(t.span, {
							className: "token plain-text",
							children: "\n        "
						}),
						iq(t.span, {
							className: "token tag",
							children: [iq(t.span, {
								className: "token tag",
								children: [iH(t.span, {
									className: "token punctuation",
									children: "<"
								}), "div"]
							}), iH(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						iH(t.span, {
							className: "token plain-text",
							children: "Inputted: "
						}),
						iH(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						"inputValue",
						iH(t.span, {
							className: "token punctuation",
							children: "."
						}),
						iH(t.span, {
							className: "token property-access",
							children: "value"
						}),
						iH(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						iq(t.span, {
							className: "token tag",
							children: [iq(t.span, {
								className: "token tag",
								children: [iH(t.span, {
									className: "token punctuation",
									children: "</"
								}), "div"]
							}), iH(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						iH(t.span, {
							className: "token plain-text",
							children: "\n      "
						}),
						iq(t.span, {
							className: "token tag",
							children: [iq(t.span, {
								className: "token tag",
								children: [iH(t.span, {
									className: "token punctuation",
									children: "</"
								}), "div"]
							}), iH(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						iH(t.span, {
							className: "token plain-text",
							children: "\n    "
						}),
						iq(t.span, {
							className: "token tag",
							children: [iq(t.span, {
								className: "token tag",
								children: [iH(t.span, {
									className: "token punctuation",
									children: "</"
								}), "div"]
							}), iH(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						"\n  ",
						iH(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						iH(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						iH(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						iH(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						iH(t.span, {
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
function oe(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? iH(t, {
		...e,
		children: iH(i9, { ...e })
	}) : i9(e);
}
var ot = ay(() => () => r2(oe, { components: { codeblockd4735e3a: i5 } }));
export { aC as $, lc as A, eA as At, sG as B, es as Bt, lv as C, eD as Ct, lk as D, e$ as Dt, l_ as E, eF as Et, ld as F, eg as Ft, rj as G, s$ as H, g as Ht, lg as I, eh as It, rL as J, at as K, lf as L, ef as Lt, lo as M, ew as Mt, li as N, eb as Nt, ls as O, eR as Ot, lp as P, eN as Pt, aP as Q, ll as R, ed as Rt, lO as S, ez as St, lb as T, eV as Tt, au as U, sz as V, N as Vt, ai as W, ay as X, ro as Y, r2 as Z, iF as _, e5 as _t, iZ as a, tl as at, l9 as b, eq as bt, iH as c, to as ct, iW as d, e8 as dt, aA as et, iU as f, e0 as ft, iL as g, e7 as gt, iD as h, tb as ht, iQ as i, nP as it, ly as j, ex as jt, lh as k, eC as kt, iq as l, t_ as lt, iB as m, eY as mt, i8 as n, nO as nt, iX as o, tc as ot, iI as p, e9 as pt, nL as q, iY as r, nx as rt, iG as s, e1 as st, ot as t, rh as tt, iz as u, e3 as ut, iV as v, th as vt, lw as w, eL as wt, i$ as x, eK as xt, iT as y, eH as yt, lm as z, ec as zt };
