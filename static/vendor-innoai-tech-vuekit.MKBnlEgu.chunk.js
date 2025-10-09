import { r as e, t } from "./rolldown-runtime.D8qhy2Lt.chunk.js";
import { _ as a, a as r, d as s, f as l, g as i, h as o, m as c, t as u, u as p } from "./vendor-rxjs.DKDKEK-M.chunk.js";
function d(e) {
	var t;
	return null != e && "function" != typeof e && Number.isSafeInteger(t = e.length) && t >= 0;
}
function f(e) {
	return e;
}
function h(e) {
	return "__proto__" === e;
}
function m(e) {
	switch (typeof e) {
		case "number":
		case "symbol": return !1;
		case "string": return e.includes(".") || e.includes("[") || e.includes("]");
	}
}
function k(e) {
	return "string" == typeof e || "symbol" == typeof e ? e : Object.is(e?.valueOf?.(), -0) ? "-0" : String(e);
}
function g(e) {
	if (null == e) return "";
	if ("string" == typeof e) return e;
	if (Array.isArray(e)) return e.map(g).join(",");
	let t = String(e);
	return "0" === t && Object.is(Number(e), -0) ? "-0" : t;
}
function y(e) {
	if (Array.isArray(e)) return e.map(k);
	if ("symbol" == typeof e) return [e];
	e = g(e);
	let t = [], a = e.length;
	if (0 === a) return t;
	let r = 0, s = "", l = "", i = !1;
	for (46 === e.charCodeAt(0) && (t.push(""), r++); r < a;) {
		let o = e[r];
		l ? "\\" === o && r + 1 < a ? s += e[++r] : o === l ? l = "" : s += o : i ? "\"" === o || "'" === o ? l = o : "]" === o ? (i = !1, t.push(s), s = "") : s += o : "[" === o ? (i = !0, s && (t.push(s), s = "")) : "." === o ? s && (t.push(s), s = "") : s += o, r++;
	}
	return s && t.push(s), t;
}
function N(e, t, a) {
	if (null == e) return a;
	switch (typeof t) {
		case "string": {
			if (h(t)) return a;
			let r = e[t];
			if (void 0 === r) if (m(t)) return N(e, y(t), a);
			else return a;
			return r;
		}
		case "number":
		case "symbol": {
			"number" == typeof t && (t = k(t));
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
					if (null == i || h(s[e])) return l;
					i = i[s[e]];
				}
				return void 0 === i ? l : i;
			}
			if (h(t = Object.is(t?.valueOf(), -0) ? "-0" : String(t))) return a;
			let i = e[t];
			if (void 0 === i) return a;
			return i;
		}
	}
}
function b(e) {
	return function(t) {
		return N(t, e);
	};
}
function _(e) {
	return null !== e && ("object" == typeof e || "function" == typeof e);
}
function w(e) {
	return null == e || "object" != typeof e && "function" != typeof e;
}
function O(e, t) {
	return e === t || Number.isNaN(e) && Number.isNaN(t);
}
function x(e, t, a, r) {
	if (t === e) return !0;
	switch (typeof t) {
		case "object": return function(e, t, a, r) {
			if (null == t) return !0;
			if (Array.isArray(t)) return j(e, t, a, r);
			if (t instanceof Map) {
				var s, l, i, o, c = e, u = t, p = a, d = r;
				if (0 === u.size) return !0;
				if (!(c instanceof Map)) return !1;
				for (let [e, t] of u.entries()) if (!1 === p(c.get(e), t, e, c, u, d)) return !1;
				return !0;
			}
			if (t instanceof Set) return s = e, l = t, i = a, o = r, 0 === l.size || s instanceof Set && j([...s], [...l], i, o);
			let f = Object.keys(t);
			if (null == e) return 0 === f.length;
			if (0 === f.length) return !0;
			if (r && r.has(t)) return r.get(t) === e;
			r && r.set(t, e);
			try {
				for (let s = 0; s < f.length; s++) {
					let l = f[s];
					if (!w(e) && !(l in e) || void 0 === t[l] && void 0 !== e[l] || null === t[l] && null !== e[l] || !a(e[l], t[l], l, e, t, r)) return !1;
				}
				return !0;
			} finally {
				r && r.delete(t);
			}
		}(e, t, a, r);
		case "function":
			if (Object.keys(t).length > 0) return x(e, { ...t }, a, r);
			return O(e, t);
		default:
			if (!_(e)) return O(e, t);
			if ("string" == typeof t) return "" === t;
			return !0;
	}
}
function j(e, t, a, r) {
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
function S(e, t) {
	var a;
	return "function" != typeof (a = () => void 0) ? S(e, t) : x(e, t, function e(t, r, s, l, i, o) {
		let c = a(t, r, s, l, i, o);
		return void 0 !== c ? !!c : x(t, r, e, o);
	}, /* @__PURE__ */ new Map());
}
function P(e) {
	return Object.getOwnPropertySymbols(e).filter((t) => Object.prototype.propertyIsEnumerable.call(e, t));
}
function A(e) {
	return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e);
}
var M, E, C, $, R, T, F, V, L, D, I, B, U, W, z, K, q, H = "[object String]", G = "[object Number]", J = "[object Boolean]", X = "[object Arguments]";
function Z(e) {
	return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Q(e, t, a, r = /* @__PURE__ */ new Map(), s) {
	let l = s?.(e, t, a, r);
	if (void 0 !== l) return l;
	if (w(e)) return e;
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
		switch (A(e)) {
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
	let l = [...Object.keys(t), ...P(t)];
	for (let i = 0; i < l.length; i++) {
		let o = l[i], c = Object.getOwnPropertyDescriptor(e, o);
		(null == c || c.writable) && (e[o] = Q(t[o], o, a, r, s));
	}
}
function ee(e) {
	var t;
	return e = Q(t = e, void 0, t, /* @__PURE__ */ new Map(), void 0), (t) => S(t, e);
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
	return null !== e && "object" == typeof e && "[object Arguments]" === A(e);
}
function es(e, t) {
	let a;
	if (0 === (a = Array.isArray(t) ? t : "string" == typeof t && m(t) && e?.[t] == null ? y(t) : [t]).length) return !1;
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
		case "number": e = k(e);
	}
	return t = et(t), function(a) {
		let r = N(a, e);
		return void 0 === r ? es(a, e) : void 0 === t ? void 0 === r : S(r, t);
	};
}
function ei(e) {
	if (null == e) return f;
	switch (typeof e) {
		case "function": return e;
		case "object":
			if (Array.isArray(e) && 2 === e.length) return el(e[0], e[1]);
			return ee(e);
		case "string":
		case "symbol":
		case "number": return b(e);
	}
}
function eo(e) {
	return "object" == typeof e && null !== e;
}
function ec(e) {
	if (d(e)) {
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
	let a = d(e) || Array.isArray(e) ? ep(0, e.length) : Object.keys(e), r = ei(t ?? f), s = Array(a.length);
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
	}(d(e) ? Array.from(e) : Object.values(e), ei(t ?? f));
}
var em = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ek = /^\w*$/;
function eg(e, t = f) {
	if (!e) return [[], []];
	let a = d(e) ? e : Object.values(e);
	t = ei(t);
	let r = [], s = [];
	for (let e = 0; e < a.length; e++) {
		let l = a[e];
		t(l) ? r.push(l) : s.push(l);
	}
	return [r, s];
}
function ey(e, t) {
	if (null == e) return !0;
	switch (typeof t) {
		case "symbol":
		case "number":
		case "object":
			if (Array.isArray(t)) return ev(e, t);
			if ("number" == typeof t ? t = k(t) : "object" == typeof t && (t = Object.is(t?.valueOf(), -0) ? "-0" : String(t)), h(t)) return !1;
			if (e?.[t] === void 0) return !0;
			try {
				return delete e[t], !0;
			} catch {
				return !1;
			}
		case "string":
			if (e?.[t] === void 0 && m(t)) return ev(e, y(t));
			if (h(t)) return !1;
			try {
				return delete e[t], !0;
			} catch {
				return !1;
			}
	}
}
function ev(e, t) {
	let a = 1 === t.length ? e : N(e, t.slice(0, -1)), r = t[t.length - 1];
	if (a?.[r] === void 0) return !0;
	if (h(r)) return !1;
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
	null != a && (t = void 0), t ??= f;
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
			let a = b(t);
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
	Object.hasOwn(e, t) && O(r, a) && (void 0 !== a || t in e) || (e[t] = a);
};
function ex(e, t, a) {
	return function(e, t, a, r) {
		if (null == e && !_(e)) return e;
		let s = !Array.isArray(t) && ("number" == typeof t || "boolean" == typeof t || null == t || eu(t) || "string" == typeof t && (ek.test(t) || !em.test(t)) || null != e && Object.hasOwn(e, t)) ? [t] : Array.isArray(t) ? t : "string" == typeof t ? y(t) : [t], l = e;
		for (let t = 0; t < s.length && null != l; t++) {
			let i, o = k(s[t]);
			if (!h(o)) {
				if (t === s.length - 1) i = a(l[o]);
				else {
					let a = l[o], c = r?.(a, o, e);
					i = void 0 !== c ? c : _(a) ? a : ea(s[t + 1]) ? [] : {};
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
	if (d(e)) {
		var t;
		let a, r;
		return r = new Set(a = eP((t = e).length, (e) => `${e}`)), ej(t) && (r.add("offset"), r.add("parent")), Z(t) && (r.add("buffer"), r.add("byteLength"), r.add("byteOffset")), [...a, ...Object.keys(t).filter((e) => !r.has(e))];
	}
	let a = Object.keys(Object(e));
	return eS(e) ? a.filter((e) => "constructor" !== e) : a;
}
function eM(e) {
	if (null == e) return [];
	switch (typeof e) {
		case "object":
		case "function":
			if (d(e)) {
				var t;
				let a, r;
				return r = new Set(a = eP((t = e).length, (e) => `${e}`)), ej(t) && (r.add("offset"), r.add("parent")), Z(t) && (r.add("buffer"), r.add("byteLength"), r.add("byteOffset")), [...a, ...eE(t).filter((e) => !r.has(e))];
			}
			if (eS(e)) return eE(e).filter((e) => "constructor" !== e);
			return eE(e);
		default: return eE(Object(e));
	}
}
function eE(e) {
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
function e$(e, t = f) {
	return null == e ? {} : function(e, t) {
		let a = {}, r = Object.keys(e);
		for (let s = 0; s < r.length; s++) {
			let l = r[s], i = e[l];
			a[l] = t(i, l, e);
		}
		return a;
	}(e, ei(t));
}
function eR(e) {
	let t = [];
	for (; e;) t.push(...P(e)), e = Object.getPrototypeOf(e);
	return t;
}
function eT(e, ...t) {
	var a;
	if (null == e) return {};
	let r = (a = e, (t = function(e, t = 1) {
		let a = [], r = Math.floor(t);
		if (!d(e)) return a;
		let s = (e, t) => {
			for (let l = 0; l < e.length; l++) {
				let i = e[l];
				t < r && (Array.isArray(i) || i?.[Symbol.isConcatSpreadable] || null !== i && "object" == typeof i && "[object Arguments]" === Object.prototype.toString.call(i)) ? Array.isArray(i) ? s(i, t + 1) : s(Array.from(i), t + 1) : a.push(i);
			}
		};
		return s(Array.from(e), 0), a;
	}(t)).some((e) => Array.isArray(e) || m(e)) ? function(e) {
		let t = {}, a = [...eM(e), ...eR(e)];
		for (let r = 0; r < a.length; r++) {
			let s = a[r];
			t[s] = et(e[s], (e) => {
				if (!eC(e)) return e;
			});
		}
		return t;
	}(a) : function(e) {
		let t = {}, a = [...eM(e), ...eR(e)];
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
				for (let e = 0; e < a.length; e++) ey(r, a[e]);
				break;
			case "string":
			case "symbol":
			case "number": ey(r, a);
		}
	}
	return r;
}
function eF(e, t) {
	if (null == e) return {};
	let a = ei(t ?? e_), r = {}, s = d(e) ? ep(0, e.length) : [...eM(e), ...eR(e)];
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
	if (d(e)) return ("function" == typeof e.splice || "string" == typeof e || "undefined" != typeof Buffer && !!Buffer.isBuffer(e) || !!Z(e) || !!er(e)) && 0 === e.length;
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
	return "string" != typeof e && (e = g(e)), e.replace(/['\u2019]/g, "");
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
	return g(e).padStart(t, a);
}
function eH(e) {
	var t;
	return (t = g(e)).substring(0, 1).toUpperCase() + t.substring(1);
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
}, tm = () => M || (M = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {});
function tk(e) {
	if (e3(e)) {
		let t = {};
		for (let a = 0; a < e.length; a++) {
			let r = e[a], s = e7(r) ? function(e) {
				let t = {};
				return e.replace(tv, "").split(tg).forEach((e) => {
					if (e) {
						let a = e.split(ty);
						a.length > 1 && (t[a[0].trim()] = a[1].trim());
					}
				}), t;
			}(r) : tk(r);
			if (s) for (let e in s) t[e] = s[e];
		}
		return t;
	}
	if (e7(e) || e9(e)) return e;
}
var tg = /;(?![^(]*\))/g, ty = /:([^]+)/, tv = /\/\*[^]*?\*\//g;
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
		this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = E, !e && E && (this.index = (E.scopes || (E.scopes = [])).push(this) - 1);
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
			let t = E;
			try {
				return E = this, e();
			} finally {
				E = t;
			}
		}
	}
	on() {
		1 == ++this._on && (this.prevScope = E, E = this);
	}
	off() {
		this._on > 0 && 0 == --this._on && (E = this.prevScope, this.prevScope = void 0);
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
		this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, E && E.active && E.effects.push(this);
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
		let e = C, t = tR;
		C = this, tR = !0;
		try {
			return this.fn();
		} finally {
			tM(this), C = e, tR = t, this.flags &= -3;
		}
	}
	stop() {
		if (1 & this.flags) {
			for (let e = this.deps; e; e = e.nextDep) t$(e);
			this.deps = this.depsTail = void 0, tL(this), this.onStop && this.onStop(), this.flags &= -2;
		}
	}
	trigger() {
		64 & this.flags ? tO.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
	}
	runIfDirty() {
		tE(this) && this.run();
	}
	get dirty() {
		return tE(this);
	}
}, tj = 0;
function tS(e, t = !1) {
	if (e.flags |= 8, t) {
		e.next = R, R = e;
		return;
	}
	e.next = $, $ = e;
}
function tP() {
	let e;
	if (!(--tj > 0)) {
		if (R) {
			let e = R;
			for (R = void 0; e;) {
				let t = e.next;
				e.next = void 0, e.flags &= -9, e = t;
			}
		}
		for (; $;) {
			let t = $;
			for ($ = void 0; t;) {
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
function tM(e) {
	let t, a = e.depsTail, r = a;
	for (; r;) {
		let e = r.prevDep;
		-1 === r.version ? (r === a && (a = e), t$(r), function(e) {
			let { prevDep: t, nextDep: a } = e;
			t && (t.nextDep = a, e.prevDep = void 0), a && (a.prevDep = t, e.nextDep = void 0);
		}(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = e;
	}
	e.deps = t, e.depsTail = a;
}
function tE(e) {
	for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (tC(t.dep.computed) || t.dep.version !== t.version)) return !0;
	return !!e._dirty;
}
function tC(e) {
	if (4 & e.flags && !(16 & e.flags) || (e.flags &= -17, e.globalVersion === tD) || (e.globalVersion = tD, !e.isSSR && 128 & e.flags && (!e.deps && !e._dirty || !tE(e)))) return;
	e.flags |= 2;
	let t = e.dep, a = C, r = tR;
	C = e, tR = !0;
	try {
		let a;
		tA(e);
		let r = e.fn(e._value);
		(0 === t.version || (a = e._value, !Object.is(r, a))) && (e.flags |= 128, e._value = r, t.version++);
	} catch (e) {
		throw t.version++, e;
	} finally {
		C = a, tR = r, tM(e), e.flags &= -3;
	}
}
function t$(e, t = !1) {
	let { dep: a, prevSub: r, nextSub: s } = e;
	if (r && (r.nextSub = s, e.prevSub = void 0), s && (s.prevSub = r, e.nextSub = void 0), a.subs === e && (a.subs = r, !r && a.computed)) {
		a.computed.flags &= -5;
		for (let e = a.computed.deps; e; e = e.nextDep) t$(e, !0);
	}
	t || --a.sc || !a.map || a.map.delete(a.key);
}
var tR = !0, tT = [];
function tF() {
	tT.push(tR), tR = !1;
}
function tV() {
	let e = tT.pop();
	tR = void 0 === e || e;
}
function tL(e) {
	let { cleanup: t } = e;
	if (e.cleanup = void 0, t) {
		let e = C;
		C = void 0;
		try {
			t();
		} finally {
			C = e;
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
		if (!C || !tR || C === this.computed) return;
		let t = this.activeLink;
		if (void 0 === t || t.sub !== C) t = this.activeLink = new tI(C, this), C.deps ? (t.prevDep = C.depsTail, C.depsTail.nextDep = t, C.depsTail = t) : C.deps = C.depsTail = t, function e(t) {
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
			e.prevDep = t.prevDep, t.prevDep && (t.prevDep.nextDep = e), t.prevDep = C.depsTail, t.nextDep = void 0, C.depsTail.nextDep = t, C.depsTail = t, C.deps === t && (C.deps = e);
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
	if (tR && C) {
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
	return t === e ? t : (tq(t, "iterate", tK), ny(e) ? t : t.map(nb));
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
	return r === e || ny(e) || (s._next = s.next, s.next = () => {
		let e = s._next();
		return e.done || (e.value = a(e.value)), e;
	}), s;
}
var tQ = Array.prototype;
function tY(e, t, a, r, s, l) {
	let i = tJ(e), o = i !== e && !ny(e), c = i[t];
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
	return s !== e && (ny(e) ? a.length > 3 && (l = function(t, r, s) {
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
			if (ny(a) || ng(a) || (s = nN(s), a = nN(a)), !e3(e) && nw(s) && !nw(a)) if (t) return !0;
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
			t || ny(e) || ng(e) || (e = nN(e));
			let a = nN(this);
			return Reflect.getPrototypeOf(a).has.call(a, e) || (a.add(e), tH(a, "add", e, e)), this;
		},
		set(e, a) {
			t || ny(a) || ng(a) || (a = nN(a));
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
function nk(e) {
	return ng(e) ? nk(e.__v_raw) : !!(e && e.__v_isReactive);
}
function ng(e) {
	return !!(e && e.__v_isReadonly);
}
function ny(e) {
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
		let t = this._rawValue, a = this.__v_isShallow || ny(e) || ng(e);
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
function nM(e) {
	return nk(e) ? e : new Proxy(e, nA);
}
var nE = class {
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
		if (this.flags |= 16, !(8 & this.flags) && C !== this) return tS(this, !0), !0;
	}
	get value() {
		let e = this.dep.track();
		return tC(this), e && (e.version = this.dep.version), this._value;
	}
	set value(e) {
		this.setter && this.setter(e);
	}
}, n$ = {}, nR = /* @__PURE__ */ new WeakMap(), nT = void 0;
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
		let { mc: p, pc: d, pbc: f, o: { insert: h, querySelector: m, createText: k, createComment: g } } = u, y = n6(t.props), { shapeFlag: N, children: b, dynamicChildren: _ } = t;
		if (null == e) {
			let e = t.el = k(""), u = t.anchor = k("");
			h(e, a, r), h(u, a, r);
			let d = (e, t) => {
				16 & N && p(b, e, t, s, l, i, o, c);
			}, f = () => {
				let e = t.target = n5(t.props, m), a = aa(e, t, k, h);
				e && ("svg" !== i && n8(e) ? i = "svg" : "mathml" !== i && n7(e) && (i = "mathml"), s && s.isCE && (s.ce._teleportTargets || (s.ce._teleportTargets = /* @__PURE__ */ new Set())).add(e), y || (d(e, a), an(t, !1)));
			};
			y && (d(a, u), an(t, !0)), n3(t.props) ? (t.el.__isMounted = !1, ri(() => {
				f(), delete t.el.__isMounted;
			}, l)) : f();
		} else {
			if (n3(t.props) && !1 === e.el.__isMounted) return void ri(() => {
				n9.process(e, t, a, r, s, l, i, o, c, u);
			}, l);
			t.el = e.el, t.targetStart = e.targetStart;
			let p = t.anchor = e.anchor, h = t.target = e.target, k = t.targetAnchor = e.targetAnchor, g = n6(e.props), N = g ? a : h, b = g ? p : k;
			if ("svg" === i || n8(h) ? i = "svg" : ("mathml" === i || n7(h)) && (i = "mathml"), _ ? (f(e.dynamicChildren, _, N, s, l, i, o), rp(e, t, !0)) : c || d(e, t, N, b, s, l, i, o, !1), y) g ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : ae(t, a, p, u, 1);
			else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
				let e = t.target = n5(t.props, m);
				e && ae(t, e, null, u, 0);
			} else g && ae(t, h, k, u, 1);
			an(t, y);
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
			if (p && p.type !== rP && !rR(p, c) && ao(r).type !== rP) {
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
	let { appear: l, mode: i, persisted: o = !1, onBeforeEnter: c, onEnter: u, onAfterEnter: p, onEnterCancelled: d, onBeforeLeave: f, onLeave: h, onAfterLeave: m, onLeaveCancelled: k, onBeforeAppear: g, onAppear: y, onAfterAppear: N, onAppearCancelled: b } = t, _ = String(e.key), w = ap(a, e), O = (e, t) => {
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
			s && rR(e, s) && s.el[ar] && s.el[ar](), O(r, [t]);
		},
		enter(e) {
			let t = u, r = p, s = d;
			if (!a.isMounted) if (!l) return;
			else t = y || u, r = N || p, s = b || d;
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
				l || (l = !0, r(), a ? O(k, [t]) : O(m, [t]), t[ar] = void 0, w[s] === e && delete w[s]);
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
function ak(e, t) {
	return e8(e) ? e1({ name: e.name }, t, { setup: e }) : e;
}
function ag(e) {
	e.ids = [
		e.ids[0] + e.ids[2]++ + "-",
		0,
		0
	];
}
var ay = /* @__PURE__ */ new WeakMap();
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
					o(), ay.delete(e);
				};
				t.id = -1, ay.set(e, t), ri(t, a);
			} else aN(e), o();
		}
	}
}
function aN(e) {
	let t = ay.get(e);
	t && (t.flags |= 8, ay.delete(e));
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
			a$(() => {
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
}, aP = aS("bm"), aA = aS("m"), aM = aS("bu"), aE = aS("u"), aC = aS("bum"), a$ = aS("um"), aR = aS("sp"), aT = aS("rtg"), aF = aS("rtc");
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
	$watch: (e) => rk.bind(e)
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
		let { insert: l, remove: i, patchProp: o, createElement: c, createText: u, createComment: p, setText: d, setElementText: f, parentNode: h, nextSibling: m, setScopeId: k = eZ, insertStaticContent: g } = e, y = (e, t, a, r = null, s = null, l = null, i, o = null, c = !!t.dynamicChildren) => {
			if (e === t) return;
			e && !rR(e, t) && (r = q(e), B(e, s, l, !0), e = null), -2 === t.patchFlag && (c = !1, t.dynamicChildren = null);
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
					M(e, t, a, r, s, l, i, o, c);
					break;
				default: 1 & d ? w(e, t, a, r, s, l, i, o, c) : 6 & d ? E(e, t, a, r, s, l, i, o, c) : 64 & d ? u.process(e, t, a, r, s, l, i, o, c, J) : 128 & d && u.process(e, t, a, r, s, l, i, o, c, J);
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
			let m, k, { props: g, shapeFlag: y, transition: N, dirs: b } = e;
			if (m = e.el = c(e.type, i, g && g.is, g), 8 & y ? f(m, e.children) : 16 & y && j(e.children, m, null, r, s, rc(e, i), u, p), b && n2(e, null, r, "created"), x(m, e, e.scopeId, u, r), g) {
				for (let e in g) "value" === e || ta(e) || o(m, e, null, g[e], i, r);
				"value" in g && o(m, "value", null, g.value, i), (k = g.onVnodeBeforeMount) && rU(k, r, e);
			}
			b && n2(e, null, r, "beforeMount");
			let _ = (d = s, h = N, (!d || d && !d.pendingBranch) && h && !h.persisted);
			_ && N.beforeEnter(m), l(m, t, a), ((k = g && g.onVnodeMounted) || _ || b) && ri(() => {
				k && rU(k, r, e), _ && N.enter(m), b && n2(e, null, r, "mounted");
			}, s);
		}, x = (e, t, a, r, s) => {
			if (a && k(e, a), r) for (let t = 0; t < r.length; t++) k(e, r[t]);
			if (s) {
				let a = s.subTree;
				if (t === a || rx(a.type) && (a.ssContent === t || a.ssFallback === t)) {
					let t = s.vnode;
					x(e, t, t.scopeId, t.slotScopeIds, s.parent);
				}
			}
		}, j = (e, t, a, r, s, l, i, o, c = 0) => {
			for (let u = c; u < e.length; u++) y(null, e[u] = o ? rI(e[u]) : rD(e[u]), t, a, r, s, l, i, o);
		}, S = (e, t, a, r, s, l, i) => {
			let c, u = t.el = e.el, { patchFlag: p, dynamicChildren: d, dirs: h } = t;
			p |= 16 & e.patchFlag;
			let m = e.props || eJ, k = t.props || eJ;
			if (a && ru(a, !1), (c = k.onVnodeBeforeUpdate) && rU(c, a, t, e), h && n2(t, e, a, "beforeUpdate"), a && ru(a, !0), (m.innerHTML && null == k.innerHTML || m.textContent && null == k.textContent) && f(u, ""), d ? P(e.dynamicChildren, d, u, a, r, rc(t, s), l) : i || V(e, t, u, null, a, r, rc(t, s), l, !1), p > 0) {
				if (16 & p) A(u, m, k, a, s);
				else if (2 & p && m.class !== k.class && o(u, "class", null, k.class, s), 4 & p && o(u, "style", m.style, k.style, s), 8 & p) {
					let e = t.dynamicProps;
					for (let t = 0; t < e.length; t++) {
						let r = e[t], l = m[r], i = k[r];
						(i !== l || "value" === r) && o(u, r, l, i, s, a);
					}
				}
				1 & p && e.children !== t.children && f(u, t.children);
			} else i || null != d || A(u, m, k, a, s);
			((c = k.onVnodeUpdated) || h) && ri(() => {
				c && rU(c, a, t, e), h && n2(t, e, a, "updated");
			}, r);
		}, P = (e, t, a, r, s, l, i) => {
			for (let o = 0; o < t.length; o++) {
				let c = e[o], u = t[o];
				y(c, u, c.el && (c.type === rj || !rR(c, u) || 198 & c.shapeFlag) ? h(c.el) : a, null, r, s, l, i, !0);
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
		}, M = (e, t, a, r, s, i, o, c, p) => {
			let d = t.el = e ? e.el : u(""), f = t.anchor = e ? e.anchor : u(""), { patchFlag: h, dynamicChildren: m, slotScopeIds: k } = t;
			k && (c = c ? c.concat(k) : k), null == e ? (l(d, a, r), l(f, a, r), j(t.children || [], a, f, s, i, o, c, p)) : h > 0 && 64 & h && m && e.dynamicChildren ? (P(e.dynamicChildren, m, a, s, i, o, c), (null != t.key || s && t === s.subTree) && rp(e, t, !0)) : V(e, t, a, f, s, i, o, c, p);
		}, E = (e, t, a, r, s, l, i, o, c) => {
			t.slotScopeIds = o, null == e ? 512 & t.shapeFlag ? s.ctx.activate(t, a, r, i, c) : C(t, a, r, s, l, i, c) : $(e, t, c);
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
			}).ctx = { _: f }, f.root = c ? c.root : f, f.emit = ry.bind(null, f), o.ce && o.ce(f), e.component = f);
			if (a_(e) && (h.ctx.renderer = J), function(e, t = !1, a = !1) {
				t && F(t);
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
				}(e, t), t && F(!1);
			}(h, !1, i), h.asyncDep) {
				if (s && s.registerDep(h, R, i), !e.el) {
					let r = h.subTree = rV(rP);
					b(null, r, t, a), e.placeholder = r.el;
				}
			} else R(h, e, t, a, s, l, i);
		}, $ = (e, t, a) => {
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
			}(e, t, a)) if (r.asyncDep && !r.asyncResolved) return void T(r, t, a);
			else r.next = t, r.update();
			else t.el = e.el, r.vnode = t;
		}, R = (e, t, a, r, l, i, o) => {
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
							a && (a.el = p.el, T(e, a, o)), t.asyncDep.then(() => {
								e.isUnmounted || c();
							});
							return;
						}
					}
					let d = a;
					ru(e, !1), a ? (a.el = p.el, T(e, a, o)) : a = p, r && tp(r), (t = a.props && a.props.onVnodeBeforeUpdate) && rU(t, u, a, p), ru(e, !0);
					let f = rb(e), m = e.subTree;
					e.subTree = f, y(m, f, h(m.el), q(m), e, l, i), a.el = f.el, null === d && function({ vnode: e, parent: t }, a) {
						for (; t;) {
							let r = t.subTree;
							if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e) (e = t.vnode).el = a, t = t.parent;
							else break;
						}
					}(e, f.el), s && ri(s, l), (t = a.props && a.props.onVnodeUpdated) && ri(() => rU(t, u, a, p), l);
				} else {
					let o, { el: c, props: u } = t, { bm: p, m: d, parent: f, root: h, type: m } = e, k = ab(t);
					if (ru(e, !1), p && tp(p), !k && (o = u && u.onVnodeBeforeMount) && rU(o, f, t), ru(e, !0), c && s);
					else {
						h.ce && !1 !== h.ce._def.shadowRoot && h.ce._injectChildStyle(m);
						let s = e.subTree = rb(e);
						y(null, s, a, r, e, l, i), t.el = s.el;
					}
					if (d && ri(d, l), !k && (o = u && u.onVnodeMounted)) {
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
		}, T = (e, t, a) => {
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
				y(e[u], r, a, null, s, l, i, o, c);
			}
			p > d ? K(e, s, l, !0, !1, f) : j(t, a, r, s, l, i, o, c, f);
		}, D = (e, t, a, r, s, l, i, o, c) => {
			let u = 0, p = t.length, d = e.length - 1, f = p - 1;
			for (; u <= d && u <= f;) {
				let r = e[u], p = t[u] = c ? rI(t[u]) : rD(t[u]);
				if (rR(r, p)) y(r, p, a, null, s, l, i, o, c);
				else break;
				u++;
			}
			for (; u <= d && u <= f;) {
				let r = e[d], u = t[f] = c ? rI(t[f]) : rD(t[f]);
				if (rR(r, u)) y(r, u, a, null, s, l, i, o, c);
				else break;
				d--, f--;
			}
			if (u > d) {
				if (u <= f) {
					let e = f + 1, d = e < p ? t[e].el : r;
					for (; u <= f;) y(null, t[u] = c ? rI(t[u]) : rD(t[u]), a, d, s, l, i, o, c), u++;
				}
			} else if (u > f) for (; u <= d;) B(e[u], s, l, !0), u++;
			else {
				let h, m = u, k = u, g = /* @__PURE__ */ new Map();
				for (u = k; u <= f; u++) {
					let e = t[u] = c ? rI(t[u]) : rD(t[u]);
					null != e.key && g.set(e.key, u);
				}
				let N = 0, b = f - k + 1, _ = !1, w = 0, O = Array(b);
				for (u = 0; u < b; u++) O[u] = 0;
				for (u = m; u <= d; u++) {
					let r, p = e[u];
					if (N >= b) {
						B(p, s, l, !0);
						continue;
					}
					if (null != p.key) r = g.get(p.key);
					else for (h = k; h <= f; h++) if (0 === O[h - k] && rR(p, t[h])) {
						r = h;
						break;
					}
					void 0 === r ? B(p, s, l, !0) : (O[r - k] = u + 1, r >= w ? w = r : _ = !0, y(p, t[r], a, null, s, l, i, o, c), N++);
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
					let e = k + u, d = t[e], f = t[e + 1], m = e + 1 < p ? f.el || f.placeholder : r;
					0 === O[u] ? y(null, d, a, m, s, l, i, o, c) : _ && (h < 0 || u !== x[h] ? I(d, a, m, 2) : h--);
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
			let k = 1 & d && h, g = !ab(e);
			if (g && (l = o && o.onVnodeBeforeUnmount) && rU(l, t, e), 6 & d) z(e.component, a, r);
			else {
				if (128 & d) return void e.suspense.unmount(a, r);
				k && n2(e, null, t, "beforeUnmount"), 64 & d ? e.type.remove(e, t, a, J, r) : p && !p.hasOnce && (i !== rj || f > 0 && 64 & f) ? K(p, t, a, !1, !0) : (i === rj && 384 & f || !s && 16 & d) && K(u, t, a), r && U(e);
			}
			(g && (l = o && o.onVnodeUnmounted) || k) && ri(() => {
				l && rU(l, t, e), k && n2(e, null, t, "unmounted");
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
			null == e ? t._vnode && B(t._vnode, null, null, !0) : y(t._vnode || null, e, t, null, null, null, a), t._vnode = e, H || (H = !0, nX(), nZ(), H = !1);
		}, J = {
			p: y,
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
		let r, s, l, i, { immediate: o, deep: c, once: u, scheduler: p, augmentJob: d, call: f } = a, h = (e) => c ? e : ny(e) || !1 === c || 0 === c ? nF(e, 1) : nF(e), m = !1, k = !1;
		if (nw(e) ? (s = () => e.value, m = ny(e)) : nk(e) ? (s = () => h(e), m = !0) : e3(e) ? (k = !0, m = e.some((e) => nk(e) || ny(e)), s = () => e.map((e) => nw(e) ? e.value : nk(e) ? h(e) : e8(e) ? f ? f(e, 2) : e() : void 0)) : s = e8(e) ? t ? f ? () => f(e, 2) : e : () => {
			if (l) {
				tF();
				try {
					l();
				} finally {
					tV();
				}
			}
			let t = nT;
			nT = r;
			try {
				return f ? f(e, 3, [i]) : e(i);
			} finally {
				nT = t;
			}
		} : eZ, t && c) {
			let e = s, t = !0 === c ? Infinity : c;
			s = () => nF(e(), t);
		}
		let g = E, y = () => {
			r.stop(), g && g.active && e2(g.effects, r);
		};
		if (u && t) {
			let e = t;
			t = (...t) => {
				e(...t), y();
			};
		}
		let N = k ? Array(e.length).fill(n$) : n$, b = (e) => {
			if (1 & r.flags && (r.dirty || e)) if (t) {
				let e = r.run();
				if (c || m || (k ? e.some((e, t) => !Object.is(e, N[t])) : !Object.is(e, N))) {
					l && l();
					let a = nT;
					nT = r;
					try {
						let a = [
							e,
							N === n$ ? void 0 : k && N[0] === n$ ? [] : N,
							i
						];
						N = e, f ? f(t, 3, a) : t(...a);
					} finally {
						nT = a;
					}
				}
			} else r.run();
		};
		return d && d(b), (r = new tx(s)).scheduler = p ? () => p(b, !1) : b, i = (e) => (function(e, t = !1, a = nT) {
			if (a) {
				let t = nR.get(a);
				t || nR.set(a, t = []), t.push(e);
			}
		})(e, !1, r), l = r.onStop = () => {
			let e = nR.get(r);
			if (e) {
				if (f) f(e, 4);
				else for (let t of e) t();
				nR.delete(r);
			}
		}, t ? o ? b(!0) : N = r.run() : p ? p(b.bind(null, !0), !0) : r.run(), y.pause = r.pause.bind(r), y.resume = r.resume.bind(r), y.stop = y, y;
	}(e, t, c);
	return rX && (r ? r.push(f) : u && f()), f;
}
function rk(e, t, a) {
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
function ry(e, t, ...a) {
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
	let t, a, { type: r, vnode: s, proxy: l, withProxy: i, propsOptions: [o], slots: c, attrs: u, emit: p, render: d, renderCache: f, props: h, data: m, setupState: k, ctx: g, inheritAttrs: y } = e, N = n1(e);
	try {
		if (4 & s.shapeFlag) {
			let e = i || l;
			t = rD(d.call(e, e, f, h, k, m, g)), a = u;
		} else t = rD(r.length > 1 ? r(h, {
			attrs: u,
			slots: c,
			emit: p
		}) : r(h, null)), a = r.props ? u : r_(u);
	} catch (a) {
		rM.length = 0, nD(a, e, 1), t = rV(rP);
	}
	let b = t;
	if (a && !1 !== y) {
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
var rx = (e) => e.__isSuspense, rj = Symbol.for("v-fgt"), rS = Symbol.for("v-txt"), rP = Symbol.for("v-cmt"), rA = Symbol.for("v-stc"), rM = [], rE = 1;
function rC(e, t = !1) {
	rE += e;
}
function r$(e) {
	return !!e && !0 === e.__v_isVNode;
}
function rR(e, t) {
	return e.type === t.type && e.key === t.key;
}
var rT = ({ key: e }) => null != e ? e : null, rF = ({ ref: e, ref_key: t, ref_for: a }) => ("number" == typeof e && (e = "" + e), null != e ? e7(e) || nw(e) || e8(e) ? {
	i: nY,
	r: e,
	k: t,
	f: !!a
} : e : null), rV = function(e, t = null, a = null, r = 0, s = null, l = !1) {
	var i, o;
	if (e && e !== aL || (e = rP), r$(e)) {
		let r = rL(e, t, !0);
		return a && rB(r, a), r.patchFlag = -2, r;
	}
	if (e8(i = e) && "__vccOpts" in i && (e = e.__vccOpts), t) {
		let { class: e, style: a } = t = (o = t) ? nv(o) || a8(o) ? e1({}, o) : o : null;
		e && !e7(e) && (t.class = tN(e)), e9(a) && (nv(a) && !e3(a) && (a = e1({}, a)), t.style = tk(a));
	}
	let c = e7(e) ? 1 : rx(e) ? 128 : e.__isTeleport ? 64 : e9(e) ? 4 : 2 * !!e8(e);
	return function(e, t = null, a = null, r = 0, s = null, l = +(e !== rj), i = !1, o = !1) {
		let c = {
			__v_isVNode: !0,
			__v_skip: !0,
			type: e,
			props: t,
			key: t && rT(t),
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
			else if ("style" === e) t.style = tk([t.style, r.style]);
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
		key: u && rT(u),
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
	return null == e || "boolean" == typeof e ? rV(rP) : e3(e) ? rV(rj, null, e.slice()) : r$(e) ? rI(e) : rV(rS, null, String(e));
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
	T = t("__VUE_INSTANCE_SETTERS__", (e) => rK = e), F = t("__VUE_SSR_SETTERS__", (e) => rX = e);
}
var rH = (e) => {
	let t = rK;
	return T(e), e.scope.on(), () => {
		e.scope.off(), T(t);
	};
}, rG = () => {
	rK && rK.scope.off(), T(null);
};
function rJ(e) {
	return 4 & e.vnode.shapeFlag;
}
var rX = !1;
function rZ(e, t, a) {
	e8(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : e9(t) && (e.setupState = nM(t)), rQ(e, a);
}
function rQ(e, t, a) {
	let r = e.type;
	if (!e.render) {
		if (!t && V && !r.render) {
			let t = r.template || aq(e).template;
			if (t) {
				let { isCustomElement: a, compilerOptions: s } = e.appContext.config, { delimiters: l, compilerOptions: i } = r;
				r.render = V(t, e1(e1({
					isCustomElement: a,
					delimiters: l
				}, s), i));
			}
		}
		e.render = r.render || eZ, L && L(e);
	}
	{
		let t = rH(e);
		tF();
		try {
			(function(e) {
				let t = aq(e), a = e.proxy, r = e.ctx;
				az = !1, t.beforeCreate && aK(t.beforeCreate, e, "bc");
				let { data: s, computed: l, methods: i, watch: o, provide: c, inject: u, created: p, beforeMount: d, mounted: f, beforeUpdate: h, updated: m, activated: k, deactivated: g, beforeDestroy: y, beforeUnmount: N, destroyed: b, unmounted: _, render: w, renderTracked: O, renderTriggered: x, errorCaptured: j, serverPrefetch: S, expose: P, inheritAttrs: A, components: M, directives: E, filters: C } = t;
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
				function $(e, t) {
					e3(t) ? t.forEach((t) => e(t.bind(a))) : t && e(t.bind(a));
				}
				if (p && aK(p, e, "c"), $(aP, d), $(aA, f), $(aM, h), $(aE, m), $(aw, k), $(aO, g), $(aV, j), $(aF, O), $(aT, x), $(aC, N), $(a$, _), $(aR, S), e3(P)) if (P.length) {
					let t = e.exposed || (e.exposed = {});
					P.forEach((e) => {
						Object.defineProperty(t, e, {
							get: () => a[e],
							set: (t) => a[e] = t,
							enumerable: !0
						});
					});
				} else e.exposed || (e.exposed = {});
				w && e.render === eZ && (e.render = w), null != A && (e.inheritAttrs = A), M && (e.components = M), E && (e.directives = E), S && ag(e);
			})(e);
		} finally {
			tV(), t();
		}
	}
}
var rY = { get: (e, t) => (tq(e, "get", ""), e[t]) };
function r0(e) {
	var t;
	return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(nM((!e6(t = e.exposed, "__v_skip") && Object.isExtensible(t) && td(t, "__v_skip", !0), t)), {
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
		if (2 !== r) return r > 3 ? a = Array.prototype.slice.call(arguments, 2) : 3 === r && r$(a) && (a = [a]), rV(e, t, a);
		if (!e9(t) || e3(t)) return rV(e, null, t);
		if (r$(t)) return rV(e, null, [t]);
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
function sk(e, t) {
	t && (sm("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function sg(e) {
	sy(e), e.drafts_.forEach(sN), e.drafts_ = null;
}
function sy(e) {
	e === D && (D = e.parent_);
}
function sv(e) {
	return D = {
		drafts_: [],
		parent_: D,
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
		return e.finalized_ || !se(s) ? s : s === sS(e.base_, t) ? (sM(e), e.copy_[t] = sE(s, e)) : s;
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
			sM(e), sA(e);
		}
		return !!(e.copy_[t] === a && (void 0 !== a || t in e.copy_) || Number.isNaN(a) && Number.isNaN(e.copy_[t])) || (e.copy_[t] = a, e.assigned_[t] = !0, !0);
	},
	deleteProperty: (e, t) => (void 0 !== sS(e.base_, t) || t in e.base_ ? (e.assigned_[t] = !1, sM(e), sA(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0),
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
function sM(e) {
	e.copy_ || (e.copy_ = su(e.base_, e.scope_.immer_.useStrictShallowCopy_));
}
function sE(e, t) {
	let a = si(e) ? sm("MapSet").proxyMap_(e, t) : so(e) ? sm("MapSet").proxySet_(e, t) : function(e, t) {
		let a = Array.isArray(e), r = {
			type_: +!!a,
			scope_: t ? t.scope_ : D,
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
	return (t ? t.scope_ : D).drafts_.push(a), a;
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
				let s = sv(this), l = sE(e, void 0), i = !0;
				try {
					r = t(l), i = !1;
				} finally {
					i ? sg(s) : sy(s);
				}
				return sk(s, a), sb(r, s);
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
		let a = sv(this), r = sE(e, void 0);
		return r[r8].isManual_ = !0, sy(a), r;
	}
	finishDraft(e, t) {
		let a = e && e[r8];
		a && a.isManual_ || r7(9);
		let { scope_: r } = a;
		return sk(r, t), sb(void 0, r);
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
}().produce, s$ = e(t((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t, a = "function" == typeof Symbol, r = a && void 0 !== Symbol.toPrimitive ? Symbol.toPrimitive : w("Symbol.toPrimitive not found."), s = a && void 0 !== Symbol.iterator ? Symbol.iterator : w("Symbol.iterator not found."), l = Object.getPrototypeOf(Function), i = "function" == typeof Map && "function" == typeof Map.prototype.entries ? Map : w("A valid Map constructor could not be found."), o = "function" == typeof Set && "function" == typeof Set.prototype.entries ? Set : w("A valid Set constructor could not be found."), c = "function" == typeof WeakMap ? WeakMap : w("A valid WeakMap constructor could not be found."), u = a ? Symbol.for("@reflect-metadata:registry") : void 0, p = (!f(u) && h(Reflect) && Object.isExtensible(Reflect) && (t = Reflect[u]), f(t) && (t = function() {
		f(u) || "undefined" == typeof Reflect || u in Reflect || "function" != typeof Reflect.defineMetadata || (t = (e = Reflect).defineMetadata, a = e.hasOwnMetadata, r = e.getOwnMetadata, s = e.getOwnMetadataKeys, l = e.deleteMetadata, p = new c(), d = {
			isProviderFor: function(e, t) {
				var a = p.get(e);
				return !!(!f(a) && a.has(t)) || !!s(e, t).length && (f(a) && (a = new o(), p.set(e, a)), a.add(t), !0);
			},
			OrdinaryDefineOwnMetadata: t,
			OrdinaryHasOwnMetadata: a,
			OrdinaryGetOwnMetadata: r,
			OrdinaryOwnMetadataKeys: s,
			OrdinaryDeleteMetadata: l
		});
		var e, t, a, r, s, l, p, d, h, m, k, g = new c(), _ = {
			registerProvider: function(e) {
				if (!Object.isExtensible(_)) throw Error("Cannot add provider to a frozen registry.");
				switch (!0) {
					case d === e: break;
					case f(h):
						h = e;
						break;
					case h === e: break;
					case f(m):
						m = e;
						break;
					case m === e: break;
					default: void 0 === k && (k = new o()), k.add(e);
				}
			},
			getProvider: w,
			setProvider: function(e, t, a) {
				if (!function(e) {
					if (f(e)) throw TypeError();
					return d === e || h === e || m === e || !f(k) && k.has(e);
				}(a)) throw Error("Metadata provider not registered.");
				var r = w(e, t);
				if (r !== a) {
					if (!f(r)) return !1;
					var s = g.get(e);
					f(s) && (s = new i(), g.set(e, s)), s.set(t, a);
				}
				return !0;
			}
		};
		return _;
		function w(e, t) {
			var a, r = g.get(e);
			return f(r) || (a = r.get(t)), f(a) && (a = function(e, t) {
				if (!f(h)) {
					if (h.isProviderFor(e, t)) return h;
					if (!f(m)) {
						if (m.isProviderFor(e, t)) return h;
						if (!f(k)) for (var a = y(k);;) {
							var r = N(a);
							if (!r) return;
							var s = r.value;
							if (s.isProviderFor(e, t)) return b(a), s;
						}
					}
				}
				if (!f(d) && d.isProviderFor(e, t)) return d;
			}(e, t), f(a) || (f(r) && (r = new i(), g.set(e, r)), r.set(t, a))), a;
		}
	}()), !f(u) && h(Reflect) && Object.isExtensible(Reflect) && Object.defineProperty(Reflect, u, {
		enumerable: !1,
		configurable: !1,
		writable: !1,
		value: t
	}), t), d = function(e) {
		var t = new c(), a = {
			isProviderFor: function(e, a) {
				var r = t.get(e);
				return !f(r) && r.has(a);
			},
			OrdinaryDefineOwnMetadata: function(e, t, a, s) {
				r(a, s, !0).set(e, t);
			},
			OrdinaryHasOwnMetadata: function(e, t, a) {
				var s = r(t, a, !1);
				return !f(s) && !!s.has(e);
			},
			OrdinaryGetOwnMetadata: function(e, t, a) {
				var s = r(t, a, !1);
				if (!f(s)) return s.get(e);
			},
			OrdinaryOwnMetadataKeys: function(e, t) {
				var a = [], s = r(e, t, !1);
				if (f(s)) return a;
				for (var l = y(s.keys()), i = 0;;) {
					var o = N(l);
					if (!o) return a.length = i, a;
					var c = o.value;
					try {
						a[i] = c;
					} catch (e) {
						try {
							b(l);
						} finally {
							throw e;
						}
					}
					i++;
				}
			},
			OrdinaryDeleteMetadata: function(e, a, s) {
				var l = r(a, s, !1);
				if (f(l) || !l.delete(e)) return !1;
				if (0 === l.size) {
					var i = t.get(a);
					f(i) || (i.delete(s), 0 === i.size && t.delete(i));
				}
				return !0;
			}
		};
		return p.registerProvider(a), a;
		function r(r, s, l) {
			var o = t.get(r), c = !1;
			if (f(o)) {
				if (!l) return;
				o = new i(), t.set(r, o), c = !0;
			}
			var u = o.get(s);
			if (f(u)) {
				if (!l) return;
				if (u = new i(), o.set(s, u), !e.setProvider(r, s, a)) throw o.delete(s), c && t.delete(r), Error("Wrong provider for target.");
			}
			return u;
		}
	}(p);
	function f(e) {
		return void 0 === e;
	}
	function h(e) {
		return "object" == typeof e ? null !== e : "function" == typeof e;
	}
	e.defineMetadata = function(e, t, a, r) {
		var s, l, i, o;
		if (!h(a)) throw TypeError();
		f(r) || (r = m(r)), s = e, l = t, O(i = a, o = r, !0).OrdinaryDefineOwnMetadata(s, l, i, o);
	}, e.getMetadata = function(e, t, a) {
		if (!h(t)) throw TypeError();
		return f(a) || (a = m(a)), function e(t, a, r) {
			if (!f(c = O(a, r, !1)) && function(e) {
				return !!e;
			}(c.OrdinaryHasOwnMetadata(t, a, r))) {
				var s = t, l = a, i = r, o = O(l, i, !1);
				return f(o) ? void 0 : o.OrdinaryGetOwnMetadata(s, l, i);
			}
			var c, u = _(a);
			if (null !== u) return e(t, u, r);
		}(e, t, a);
	}, e.getMetadataKeys = function(e, t) {
		if (!h(e)) throw TypeError();
		return f(t) || (t = m(t)), function e(t, a) {
			var r, s, l, i = (l = O(r = t, s = a, !1)) ? l.OrdinaryOwnMetadataKeys(r, s) : [], c = _(t);
			if (null === c) return i;
			var u = e(c, a);
			if (u.length <= 0) return i;
			if (i.length <= 0) return u;
			for (var p = new o(), d = [], f = 0; f < i.length; f++) {
				var h = i[f], m = p.has(h);
				m || (p.add(h), d.push(h));
			}
			for (var k = 0; k < u.length; k++) {
				var h = u[k], m = p.has(h);
				m || (p.add(h), d.push(h));
			}
			return d;
		}(e, t);
	};
	function m(e) {
		var t = function(e, t) {
			switch (function(e) {
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
			}(e)) {
				case 0:
				case 1:
				case 2:
				case 3:
				case 4:
				case 5: return e;
			}
			var a = "string", s = g(e, r);
			if (void 0 !== s) {
				var l = s.call(e, a);
				if (h(l)) throw TypeError();
				return l;
			}
			return function(e, t) {
				if ("string" === t) {
					var a = e.toString;
					if (k(a)) {
						var r = a.call(e);
						if (!h(r)) return r;
					}
					var s = e.valueOf;
					if (k(s)) {
						var r = s.call(e);
						if (!h(r)) return r;
					}
				} else {
					var s = e.valueOf;
					if (k(s)) {
						var r = s.call(e);
						if (!h(r)) return r;
					}
					var l = e.toString;
					if (k(l)) {
						var r = l.call(e);
						if (!h(r)) return r;
					}
				}
				throw TypeError();
			}(e, a);
		}(e, 0);
		return "symbol" == typeof t ? t : "" + t;
	}
	function k(e) {
		return "function" == typeof e;
	}
	function g(e, t) {
		var a = e[t];
		if (null != a) {
			if (!k(a)) throw TypeError();
			return a;
		}
	}
	function y(e) {
		var t = g(e, s);
		if (!k(t)) throw TypeError();
		var a = t.call(e);
		if (!h(a)) throw TypeError();
		return a;
	}
	function N(e) {
		var t = e.next();
		return !t.done && t;
	}
	function b(e) {
		var t = e.return;
		t && t.call(e);
	}
	function _(e) {
		var t = Object.getPrototypeOf(e);
		if ("function" != typeof e || e === l || t !== l) return t;
		var a = e.prototype, r = a && Object.getPrototypeOf(a);
		if (null == r || r === Object.prototype) return t;
		var s = r.constructor;
		return "function" != typeof s || s === e ? t : s;
	}
	function w(e) {
		throw e;
	}
	function O(e, t, a) {
		var r = p.getProvider(e, t);
		if (!f(r)) return r;
		if (a) {
			if (p.setProvider(e, t, d)) return d;
			throw Error("Illegal state.");
		}
	}
})()), sR = class {
	static getOwnPropertyNames(e) {
		return s$.getMetadataKeys(e);
	}
	static get(e, t) {
		return s$.getMetadata(t, e);
	}
	static define(e, t, a, r) {
		if (e && e.constructor && e.constructor != Object) {
			if (eV(a)) return void s$.defineMetadata(t, sC(s$.getMetadata(t, e) ?? r ?? {}, a), e);
			s$.defineMetadata(t, a, e);
		}
	}
};
let sT = (e) => "function" == typeof e && `${e}`.startsWith("class"), sF = {
	path: [],
	branch: []
};
var sV = class extends TypeError {
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
let sL = Symbol("Type");
function* sD(e, t, a, r) {
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
function sI(e, t, a = {}) {
	let r = sB(e, t, a), s = function(e) {
		let { done: t, value: a } = e.next();
		return t ? void 0 : a;
	}(r);
	return s[0] ? [new sV(s[0], function* () {
		for (let e of r) e[0] && (yield e[0]);
	}), void 0] : [void 0, s[1]];
}
function* sB(e, t, a = {}) {
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
	let p = sU.valid;
	for (let r of sD(t.validator(u, c), c, t, e)) r.explanation = a.message, p = sU.not_valid, yield [r, void 0];
	for (let [e, d, f] of t.entries(u, c)) for (let t of sB(d, f, {
		path: void 0 === e ? r : [...r, e],
		branch: void 0 === e ? s : [...s, d],
		node: void 0 === e ? l : {
			current: f,
			parent: l
		},
		coerce: i,
		mask: o,
		message: a.message
	})) t[0] ? (p = null != t[0].refinement ? sU.not_refined : sU.not_valid, yield [t[0], void 0]) : i && (d = t[1], void 0 === e ? u = d : u instanceof Map ? u.set(e, d) : u instanceof Set ? u.add(d) : eo(u) && (u[e] = d));
	if (p !== sU.not_valid) for (let r of sD(t.refiner(u, c), c, t, e)) r.explanation = a.message, p = sU.not_refined, yield [r, void 0];
	p === sU.valid && (yield [void 0, u]);
}
var sU = ((W = sU || {})[W.valid = 0] = "valid", W[W.not_refined = 1] = "not_refined", W[W.not_valid = 2] = "not_valid", W);
let sW = (e) => (...t) => {
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
}, sz = (e) => (...t) => {
	let a = (a) => e(a, ...t);
	return new Proxy((e, t) => {
		sR.define(e, t, (e) => {
			(e.modifies ??= []).push({ modify: a });
		}, {});
	}, { get(e, t) {
		if ("modify" == t) return a;
	} });
};
var sK = class e {
	static RecordKey = Symbol("RecordKey");
	static meta = Symbol("meta");
	static optional = Symbol("optional");
	static underlying = Symbol("underlying");
	static unwrap = Symbol("unwrap");
	static extractSchema = (e) => new sG().toValue(e);
	static extractMeta = (t) => new sG().toValue(t.meta ?? t[e.meta]);
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
					if (_(t)) {
						let e = t?.[r]?.[i];
						if (!eL(e)) return e;
					}
					return l ? l?.[r]?.[i] : void 0;
				}
				if (_(t)) {
					let e = t?.[i];
					if (!eL(e)) return e;
				}
				return l ? l[i] : void 0;
			}
		});
	}
	static schemaProp(e, t) {
		return sq(e.schema, t);
	}
	static metaProp(e, t) {
		return sH(e.schema, t);
	}
}, sq = (e, t) => {
	if (_(e)) return e[t] ?? (e[sK.unwrap] ? sq(e[sK.unwrap]().schema, t) : void 0);
}, sH = (e, t) => {
	if (_(e)) return e[sK.meta]?.[t] ?? (e[sK.unwrap] ? sH(e[sK.unwrap]().schema, t) : void 0);
}, sG = class {
	constructor(e = !1) {
		this.deref = e;
	}
	toValue(e) {
		if (e) {
			if (!eL(e.schema)) return this.toValue(e.schema);
			if (this.deref && e[sK.unwrap]) return this.toValue(e[sK.unwrap]());
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
}, sJ = class e {
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
		return "" == e && t ? sK.RecordKey : e.replace(/~1/g, "/").replace(/~0/g, "~");
	}
	static escape(e) {
		return e == sK.RecordKey ? "" : e.toString().replace(/~/g, "~0").replace(/\//g, "~1");
	}
	static get(t, a) {
		let r = Array.isArray(a) ? a : e.parse(a);
		for (let e = 0; e < r.length; e++) {
			let a = r[e];
			if (e > 0 && a == sK.RecordKey) return r[e - 1];
			if (!("object" == typeof t && a in t)) throw Error("Invalid reference token: " + a);
			t = t[a];
		}
		return t;
	}
}, sX = class e {
	static define = sW((t = () => !0) => new class extends e {
		validator(e, a) {
			return t(e, a);
		}
	}(null));
	static fromTypeObject = (t, a) => {
		let r = t.type ?? a ?? new e({});
		return t.modifies ? r.use(...t.modifies ?? []) : r;
	};
	[sL] = sL;
	schema;
	constructor(e) {
		if (e) {
			this.schema = sK.create(e);
			return;
		}
		this.schema = e ?? null;
	}
	get meta() {
		return this.schema ? this.schema[sK.meta] : {};
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
	*entries(e, t = sF) {}
	validate(e, t = {}) {
		return sI(e, this, t);
	}
	create(e) {
		let t = sI(e, this, { coerce: !0 });
		if (t[0]) throw t[0];
		return t[1];
	}
	mask(e) {
		let t = sI(e, this, {
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
		return sY.create(this);
	}
	default(e) {
		return sQ.create(this, e);
	}
}, sZ = class e extends sX {
	static of(t, a) {
		return new e({
			...a,
			[sK.underlying]: t
		});
	}
	static refine(t, a, r) {
		return new class extends e {
			*refiner(e, s) {
				for (let l of (yield* this.unwrap.refiner(e, s), sD(a(e, s), s, t, e))) yield {
					...l,
					refinement: Object.keys(r).join(",")
				};
			}
		}({
			...r,
			[sK.underlying]: t
		});
	}
	get unwrap() {
		let e = this.schema[sK.unwrap];
		return e ? e() : this.schema[sK.underlying];
	}
	get type() {
		return this.unwrap.type;
	}
	*entries(e, t = sF) {
		yield* this.unwrap.entries(e, {
			...t,
			node: {
				current: this,
				parent: t.node
			}
		});
	}
	validator(e, t) {
		return sD(this.unwrap.validator(e, t), t, this, e);
	}
	refiner(e, t) {
		return sD(this.unwrap.refiner(e, t), t, this, e);
	}
	coercer(e, t) {
		return this.unwrap.coercer(e, t);
	}
}, sQ = class e extends sZ {
	static create = sW((t, a) => new e({
		default: a,
		[sK.underlying]: t
	}));
	coercer(e, t) {
		return void 0 === e ? this.schema.default : super.unwrap.coercer(e, t);
	}
}, sY = class e extends sZ {
	static create = sW((t) => new e({
		[sK.underlying]: t,
		[sK.optional]: t
	}));
	refiner(e, t) {
		return void 0 === e || super.unwrap.refiner(e, t);
	}
	validator(e, t) {
		return void 0 === e || super.unwrap.validator(e, t);
	}
}, s0 = class e extends sZ {
	static create = sW((t, a) => new e({
		$ref: t,
		[sK.unwrap]: a
	}));
}, s1 = class e extends sX {
	static create = sW(() => new e());
	constructor() {
		super({});
	}
	get type() {
		return "any";
	}
	validator() {
		return !0;
	}
}, s2 = class e extends sX {
	static create = sW(() => new e({ type: "null" }));
	get type() {
		return "null";
	}
	validator(e, t) {
		return null === e;
	}
	coercer(e, t) {
		return e;
	}
}, s4 = class e extends sX {
	static create = sW(() => new e({ type: "string" }));
	get type() {
		return this.schema.type;
	}
	validator(e, t) {
		return ed(e);
	}
	coercer(e, t) {
		return eL(e) || null === e ? e : String(e);
	}
}, s6 = class e extends sX {
	static create = sW(() => new e({ type: "number" }));
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
}, s3 = class e extends sX {
	static create = sW(() => new e({ type: "integer" }));
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
}, s8 = class e extends sX {
	static create = sW(() => new e({ type: "boolean" }));
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
}, s7 = class e extends sX {
	static create = sW(() => new e({
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
}, s5 = class e extends sX {
	static create = sW(e.createEnum);
	static createEnum(t) {
		return new e({ enum: t });
	}
	static literal = sW((t) => new e({ enum: [t] }));
	static nativeEnum = sW((t) => new e({ enum: Object.values(t) }));
	get type() {
		return "enums";
	}
	validator(e, t) {
		return this.schema.enum.includes(e);
	}
	coercer(e, t) {
		return e;
	}
}, s9 = class e extends sX {
	static create = sW(() => new e(!1));
	get type() {
		return "never";
	}
	validator(e, t) {
		return !1;
	}
	coercer(e, t) {
		return e;
	}
}, le = class e extends sX {
	static create(t) {
		let a = (e = {}) => {
			let t = [];
			for (let [a, r] of Object.entries(e)) sK.schemaProp(r, sK.optional) || t.push(a);
			return t;
		};
		return sW(() => {
			if (t) {
				if (sT(t)) {
					let r = new t(), s = {};
					for (let [e, t] of Object.entries(r)) s[e] = s5.literal(t);
					for (let e of sR.getOwnPropertyNames(r)) {
						let t = sR.get(r, e);
						if (t) {
							let a = sX.fromTypeObject(t, s[e]);
							e in s ? s[e] = a.default(s[e].schema?.enum?.[0]) : s[e] = a;
						}
					}
					return new e({
						type: "object",
						properties: s,
						required: a(s),
						additionalProperties: s9.create()
					});
				}
				return new e({
					type: "object",
					properties: t,
					required: a(t),
					additionalProperties: s9.create()
				});
			}
			return new e({
				type: "object",
				properties: {},
				required: [],
				additionalProperties: s9.create()
			});
		})();
	}
	get type() {
		return this.schema.type;
	}
	*entries(e, t = sF) {
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
}, lt = class e extends sX {
	static create = sW((t, a) => new e({
		type: "object",
		propertyNames: t,
		additionalProperties: a
	}));
	get type() {
		return "record";
	}
	*entries(e) {
		if (eo(e)) for (let [t, a] of Object.entries(e)) yield [
			sK.RecordKey,
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
}, ln = class e extends sX {
	static create = sW((t) => new e({
		type: "array",
		items: t
	}));
	get type() {
		return this.schema.type;
	}
	*entries(e, t = sF) {
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
}, la = class e extends sX {
	static create = sW((t) => new e({
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
				this.schema.items[a] ?? s9.create()
			];
		}
	}
	validator(e) {
		return eN(e) && e.length === this.schema.items.length;
	}
	coercer(e) {
		return eN(e) ? e.slice() : e;
	}
}, lr = class e extends sX {
	static create = sW((...t) => new e({ allOf: t }));
	get type() {
		return "intersection";
	}
	*entries(e, t = sF) {
		for (let a of this.schema.allOf) yield* a.entries(e, t);
	}
	*validator(e, t) {
		for (let a of this.schema.allOf) yield* sD(a.validator(e, t), t, this, e);
	}
	*refiner(e, t) {
		for (let a of this.schema.allOf) yield* sD(a.refiner(e, t), t, this, e);
	}
}, ls = class e extends sX {
	static create = sW((...t) => new e({ oneOf: t }));
	static discriminatorMapping(t, ...a) {
		return sW(() => {
			let r = [];
			if (1 == a.length && a[0].constructor == Object) for (let [e, s] of Object.entries(a[0])) if (sK.schemaProp(s, "$ref")) r.push(s);
			else {
				let a = { [t]: s5.literal(e) };
				for (let [e, t, r] of s.entries({}, sF)) a[String(e)] = r;
				r.push(le.create(a));
			}
			else for (let e of a) sT(e) && r.push(le.create(e));
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
				let s = sK.schemaProp(e, "properties")[t];
				if (!s) continue;
				let l = s.schema.enum;
				l && a.push(...l), r.push(s.meta);
			}
			return sZ.of(s5.create(a), { [sK.meta]: sK.create(r[0], e.node?.current.meta ?? {}) });
		})();
	}
	_discriminatorMappingProps = /* @__PURE__ */ new Map();
	discriminatorMapping(e, t, a) {
		if (this._discriminatorMappingProps.get(t)) return this._discriminatorMappingProps.get(t);
		if ((this.discriminatorPropType(a)?.schema?.enum ?? []).includes(t)) {
			let a = this.schema.oneOf.find((a) => {
				let r = sK.schemaProp(a, "properties")[e];
				if (r) {
					let [e, a] = r.validate(t);
					return !e;
				}
				return !1;
			});
			if (a) {
				if (!this._discriminatorMappingProps.has(t)) {
					let r = {};
					for (let [t, s] of Object.entries(sK.schemaProp(a, "properties"))) t !== e && (r[t] = s);
					this._discriminatorMappingProps.set(t, r);
				}
				return this._discriminatorMappingProps.get(t);
			}
		}
		return {};
	}
	*entries(e, t = sF) {
		if (this.schema.discriminator) {
			let a = this.schema.discriminator.propertyName, r = e?.[a];
			yield* le.create({
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
			let [a, r] = sI(e, t, { coerce: !0 });
			if (!a) return r;
		}
		return e;
	}
	validator(e, t) {
		if (this.schema.discriminator) {
			let a = this.schema.discriminator.propertyName, r = e?.[a];
			return le.create({
				[a]: this.discriminatorPropType(t),
				...this.discriminatorMapping(a, r, t)
			}).validator(e, t);
		}
		let a = [];
		for (let r of this.schema.oneOf) {
			let [ ...s] = sB(e, r, t), [l] = s;
			if (l && !l[0]) return [];
			for (let [e] of s) e && a.push(e);
		}
		return [`Expected the value to satisfy a union of \`${this.schema.oneOf.map((e) => e.type).join(" | ")}\`, but received: ${e}`, ...a];
	}
};
s0.create;
let ll = s1.create;
s9.create, s2.create;
let li = s4.create, lo = sz((e, t, a) => sZ.refine(e, (e) => !!e && e.length >= t || (a ?? `Expected string value length great than or equal ${t}, but received "${e}"`), { minLength: t }));
s6.create;
let lc = s3.create, lu = s8.create;
s7.create;
let lp = s5.create, ld = s5.nativeEnum;
s5.literal;
let lf = le.create, lh = lt.create;
la.create;
let lm = ln.create;
lr.create;
let lk = ls.create;
ls.discriminatorMapping;
let lg = sX.define;
sZ.refine;
let ly = sz((e) => sY.create(e)), lv = sz((e, t) => sZ.of(e, { [sK.meta]: t })), lN = rj;
var lb = Symbol("component");
let l_ = (e) => eC(e) && e[lb] === lb, lw = (e) => {
	let t;
	return !!(t = Object.values(e)[0]) && t[sL] == sL;
};
function lO(...e) {
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
		[lb]: lb
	};
}
let lx = (e, t) => new Proxy(e, { get: (e, a) => t[a] ?? e[a] });
var lj = "undefined" != typeof document;
function lS(e) {
	return "object" == typeof e || "displayName" in e || "props" in e || "__vccOpts" in e;
}
var lP = Object.assign;
function lA(e, t) {
	let a = {};
	for (let r in t) {
		let s = t[r];
		a[r] = lE(s) ? s.map(e) : e(s);
	}
	return a;
}
var lM = () => {}, lE = Array.isArray, lC = /#/g, l$ = /&/g, lR = /\//g, lT = /=/g, lF = /\?/g, lV = /\+/g, lL = /%5B/g, lD = /%5D/g, lI = /%5E/g, lB = /%60/g, lU = /%7B/g, lW = /%7C/g, lz = /%7D/g, lK = /%20/g;
function lq(e) {
	return encodeURI("" + e).replace(lW, "|").replace(lL, "[").replace(lD, "]");
}
function lH(e) {
	return lq(e).replace(lV, "%2B").replace(lK, "+").replace(lC, "%23").replace(l$, "%26").replace(lB, "`").replace(lU, "{").replace(lz, "}").replace(lI, "^");
}
function lG(e) {
	return null == e ? "" : lq(e).replace(lC, "%23").replace(lF, "%3F").replace(lR, "%2F");
}
function lJ(e) {
	try {
		return decodeURIComponent("" + e);
	} catch (e) {}
	return "" + e;
}
var lX = /\/$/;
function lZ(e, t, a = "/") {
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
		hash: lJ(i)
	};
}
function lQ(e, t) {
	return t && e.toLowerCase().startsWith(t.toLowerCase()) ? e.slice(t.length) || "/" : e;
}
function lY(e, t) {
	return (e.aliasOf || e) === (t.aliasOf || t);
}
function l0(e, t) {
	if (Object.keys(e).length !== Object.keys(t).length) return !1;
	for (let s in e) {
		var a, r;
		if (a = e[s], r = t[s], lE(a) ? !l1(a, r) : lE(r) ? !l1(r, a) : a !== r) return !1;
	}
	return !0;
}
function l1(e, t) {
	return lE(t) ? e.length === t.length && e.every((e, a) => e === t[a]) : 1 === e.length && e[0] === t;
}
var l2 = {
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
(z = I || (I = {})).pop = "pop", z.push = "push", (K = B || (B = {})).back = "back", K.forward = "forward", K.unknown = "";
var l4 = /^[^#]+#/;
function l6(e, t) {
	return e.replace(l4, "#") + t;
}
var l3 = () => ({
	left: window.scrollX,
	top: window.scrollY
});
function l8(e, t) {
	return (history.state ? history.state.position - t : -1) + e;
}
var l7 = /* @__PURE__ */ new Map();
function l5(e, t) {
	let { pathname: a, search: r, hash: s } = t, l = e.indexOf("#");
	if (l > -1) {
		let t = s.includes(e.slice(l)) ? e.slice(l).length : 1, a = s.slice(t);
		return "/" !== a[0] && (a = "/" + a), lQ(a, "");
	}
	return lQ(a, e) + r + s;
}
function l9(e, t, a, r = !1, s = !1) {
	return {
		back: e,
		current: t,
		forward: a,
		replaced: r,
		position: window.history.length,
		scroll: s ? l3() : null
	};
}
function ie(e) {
	let t = function(e) {
		let { history: t, location: a } = window, r = { value: l5(e, a) }, s = { value: t.state };
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
				let i = lP({}, s.value, t.state, {
					forward: e,
					scroll: l3()
				});
				l(i.current, i, !0), l(e, lP({}, l9(r.value, e, null), { position: i.position + 1 }, a), !1), r.value = e;
			},
			replace: function(e, a) {
				l(e, lP({}, t.state, l9(s.value.back, e, s.value.forward, !0), a, { position: s.value.position }), !0), r.value = e;
			}
		};
	}(e = function(e) {
		if (!e) if (lj) {
			let t = document.querySelector("base");
			e = (e = t && t.getAttribute("href") || "/").replace(/^\w+:\/\/[^\/]+/, "");
		} else e = "/";
		return "/" !== e[0] && "#" !== e[0] && (e = "/" + e), e.replace(lX, "");
	}(e)), a = function(e, t, a, r) {
		let s = [], l = [], i = null, o = ({ state: l }) => {
			let o = l5(e, location), c = a.value, u = t.value, p = 0;
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
					type: I.pop,
					direction: p ? p > 0 ? B.forward : B.back : B.unknown
				});
			});
		};
		function c() {
			let { history: e } = window;
			e.state && e.replaceState(lP({}, e.state, { scroll: l3() }), "");
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
	}(e, t.state, t.location, t.replace), r = lP({
		location: "",
		base: e,
		go: function(e, t = !0) {
			t || a.pauseListeners(), history.go(e);
		},
		createHref: l6.bind(null, e)
	}, t, a);
	return Object.defineProperty(r, "location", {
		enumerable: !0,
		get: () => t.location.value
	}), Object.defineProperty(r, "state", {
		enumerable: !0,
		get: () => t.state.value
	}), r;
}
function it(e) {
	return "string" == typeof e || "symbol" == typeof e;
}
var ia = Symbol("");
function ir(e, t) {
	return lP(Error(), {
		type: e,
		[ia]: !0
	}, t);
}
function is(e, t) {
	return e instanceof Error && ia in e && (null == t || !!(e.type & t));
}
(q = U || (U = {}))[q.aborted = 4] = "aborted", q[q.cancelled = 8] = "cancelled", q[q.duplicated = 16] = "duplicated";
var il = "[^/]+?", ii = {
	sensitive: !1,
	strict: !1,
	start: !0,
	end: !0
}, io = /[.+*?^${}()[\]/\\]/g;
function ic(e, t) {
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
		if (iu(r)) return 1;
		if (iu(s)) return -1;
	}
	return s.length - r.length;
}
function iu(e) {
	let t = e[e.length - 1];
	return e.length > 0 && t[t.length - 1] < 0;
}
var ip = {
	type: 0,
	value: ""
}, id = /[a-zA-Z0-9_]/;
function ih(e, t) {
	let a = {};
	for (let r of t) r in e && (a[r] = e[r]);
	return a;
}
function im(e) {
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
function ik(e) {
	for (; e;) {
		if (e.record.aliasOf) return !0;
		e = e.parent;
	}
	return !1;
}
function ig(e, t) {
	let a = {};
	for (let r in e) a[r] = r in t ? t[r] : e[r];
	return a;
}
function iy({ record: e }) {
	return !!(e.name || e.components && Object.keys(e.components).length || e.redirect);
}
function iv(e) {
	let t = {};
	if ("" === e || "?" === e) return t;
	let a = ("?" === e[0] ? e.slice(1) : e).split("&");
	for (let e = 0; e < a.length; ++e) {
		let r = a[e].replace(lV, " "), s = r.indexOf("="), l = lJ(s < 0 ? r : r.slice(0, s)), i = s < 0 ? null : lJ(r.slice(s + 1));
		if (l in t) {
			let e = t[l];
			lE(e) || (e = t[l] = [e]), e.push(i);
		} else t[l] = i;
	}
	return t;
}
function iN(e) {
	let t = "";
	for (let a in e) {
		let r = e[a];
		if (a = lH(a).replace(lT, "%3D"), null == r) {
			void 0 !== r && (t += (t.length ? "&" : "") + a);
			continue;
		}
		(lE(r) ? r.map((e) => e && lH(e)) : [r && lH(r)]).forEach((e) => {
			void 0 !== e && (t += (t.length ? "&" : "") + a, null != e && (t += "=" + e));
		});
	}
	return t;
}
var ib = Symbol(""), i_ = Symbol(""), iw = Symbol(""), iO = Symbol(""), ix = Symbol("");
function ij() {
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
function iS(e, t, a, r, s, l = (e) => e()) {
	let i = r && (r.enterCallbacks[s] = r.enterCallbacks[s] || []);
	return () => new Promise((o, c) => {
		let u = (e) => {
			if (!1 === e) c(ir(4, {
				from: a,
				to: t
			}));
			else if (e instanceof Error) c(e);
			else "string" == typeof e || e && "object" == typeof e ? c(ir(2, {
				from: t,
				to: e
			})) : (i && r.enterCallbacks[s] === i && "function" == typeof e && i.push(e), o());
		}, p = Promise.resolve(l(() => e.call(r && r.instances[s], t, a, u)));
		e.length < 3 && (p = p.then(u)), p.catch((e) => c(e));
	});
}
function iP(e, t, a, r, s = (e) => e()) {
	let l = [];
	for (let i of e) for (let e in i.components) {
		let o = i.components[e];
		if ("beforeRouteEnter" === t || i.instances[e]) if (lS(o)) {
			let c = (o.__vccOpts || o)[t];
			c && l.push(iS(c, a, r, i, e, s));
		} else {
			let c = o();
			l.push(() => c.then((l) => {
				if (!l) throw Error(`Couldn't resolve component "${e}" at "${i.path}"`);
				let o = l.__esModule || "Module" === l[Symbol.toStringTag] || l.default && lS(l.default) ? l.default : l;
				i.mods[e] = l, i.components[e] = o;
				let c = (o.__vccOpts || o)[t];
				return c && iS(c, a, r, i, e, s)();
			}));
		}
	}
	return l;
}
function iA(e) {
	let t = a6(iw), a = a6(iO), r = r1(() => {
		let a = nP(e.to);
		return t.resolve(a);
	}), s = r1(() => {
		let { matched: e } = r.value, { length: t } = e, s = e[t - 1], l = a.matched;
		if (!s || !l.length) return -1;
		let i = l.findIndex(lY.bind(null, s));
		if (i > -1) return i;
		let o = iE(e[t - 2]);
		return t > 1 && iE(s) === o && l[l.length - 1].path !== o ? l.findIndex(lY.bind(null, e[t - 2])) : i;
	}), l = r1(() => s.value > -1 && function(e, t) {
		for (let a in t) {
			let r = t[a], s = e[a];
			if ("string" == typeof r) {
				if (r !== s) return !1;
			} else if (!lE(s) || s.length !== r.length || r.some((e, t) => e !== s[t])) return !1;
		}
		return !0;
	}(a.params, r.value.params)), i = r1(() => s.value > -1 && s.value === a.matched.length - 1 && l0(a.params, r.value.params));
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
				let a = t[nP(e.replace) ? "replace" : "push"](nP(e.to)).catch(lM);
				return e.viewTransition && "undefined" != typeof document && "startViewTransition" in document && document.startViewTransition(() => a), a;
			}
			return Promise.resolve();
		}
	};
}
var iM = ak({
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
	useLink: iA,
	setup(e, { slots: t }) {
		let a = nd(iA(e)), { options: r } = a6(iw), s = r1(() => ({
			[iC(e.activeClass, r.linkActiveClass, "router-link-active")]: a.isActive,
			[iC(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: a.isExactActive
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
var iC = (e, t, a) => null != e ? e : null != t ? t : a, i$ = ak({
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
		let r = a6(ix), s = r1(() => e.route || r.value), l = a6(i_, 0), i = r1(() => {
			let e, t = nP(l), { matched: a } = s.value;
			for (; (e = a[t]) && !e.components;) t++;
			return t;
		}), o = r1(() => s.value.matched[i.value]);
		a4(i_, r1(() => i.value + 1)), a4(ib, o), a4(ix, s);
		let c = nO();
		return rh(() => [
			c.value,
			o.value,
			e.name
		], ([e, t, a], [r, s, l]) => {
			t && (t.instances[a] = e, s && s !== t && e && e === r && (t.leaveGuards.size || (t.leaveGuards = s.leaveGuards), t.updateGuards.size || (t.updateGuards = s.updateGuards))), !e || !t || s && lY(t, s) && r || (t.enterCallbacks[a] || []).forEach((t) => t(e));
		}, { flush: "post" }), () => {
			let r = s.value, l = e.name, i = o.value, u = i && i.components[l];
			if (!u) return iR(a.default, {
				Component: u,
				route: r
			});
			let p = i.props[l], d = r2(u, lP({}, p ? !0 === p ? r.params : "function" == typeof p ? p(r) : p : null, t, {
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
			let c, u, p = !o, d = im(e);
			d.aliasOf = o && o.record;
			let f = ig(t, e), h = [d];
			if ("alias" in e) for (let t of "string" == typeof e.alias ? [e.alias] : e.alias) h.push(im(lP({}, d, {
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
					let r = lP(function(e, t) {
						let a = lP({}, ii, t), r = [], s = a.start ? "^" : "", l = [];
						for (let t of e) {
							let e = t.length ? [] : [90];
							a.strict && !t.length && (s += "/");
							for (let r = 0; r < t.length; r++) {
								let i = t[r], o = 40 + .25 * !!a.sensitive;
								if (0 === i.type) r || (s += "/"), s += i.value.replace(io, "\\$&"), o += 40;
								else if (1 === i.type) {
									let { value: e, repeatable: a, optional: c, regexp: u } = i;
									l.push({
										name: e,
										repeatable: a,
										optional: c
									});
									let p = u || il;
									p !== il && (o += 10);
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
						if ("/" === e) return [[ip]];
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
									"(" === a ? s = 2 : id.test(a) ? u += a : (d(), s = 0, "*" !== a && "?" !== a && "+" !== a && c--);
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
				}(t, i, f), o ? o.alias.push(c) : ((u = u || c) !== c && u.alias.push(c), p && e.name && !ik(c) && l(e.name)), iy(c) && function(e) {
					let t = function(e, t) {
						let a = 0, r = t.length;
						for (; a !== r;) {
							let s = a + r >> 1;
							0 > ic(e, t[s]) ? r = s : a = s + 1;
						}
						let s = function(e) {
							let t = e;
							for (; t = t.parent;) if (iy(t) && 0 === ic(e, t)) return t;
						}(e);
						return s && (r = t.lastIndexOf(s, r - 1)), r;
					}(e, a);
					a.splice(t, 0, e), e.record.name && !ik(e) && r.set(e.record.name, e);
				}(c), d.children) {
					let e = d.children;
					for (let t = 0; t < e.length; t++) s(e[t], c, o && o.children[t]);
				}
				o = o || c;
			}
			return u ? () => {
				l(u);
			} : lM;
		}
		function l(e) {
			if (it(e)) {
				let t = r.get(e);
				t && (r.delete(e), a.splice(a.indexOf(t), 1), t.children.forEach(l), t.alias.forEach(l));
			} else {
				let t = a.indexOf(e);
				t > -1 && (a.splice(t, 1), e.record.name && r.delete(e.record.name), e.children.forEach(l), e.alias.forEach(l));
			}
		}
		return t = ig({
			strict: !1,
			end: !0,
			sensitive: !1
		}, t), e.forEach((e) => s(e)), {
			addRoute: s,
			resolve: function(e, t) {
				let s, l, i, o = {};
				if ("name" in e && e.name) {
					if (!(s = r.get(e.name))) throw ir(1, { location: e });
					i = s.record.name, o = lP(ih(t.params, s.keys.filter((e) => !e.optional).concat(s.parent ? s.parent.keys.filter((e) => e.optional) : []).map((e) => e.name)), e.params && ih(e.params, s.keys.map((e) => e.name))), l = s.stringify(o);
				} else if (null != e.path) l = e.path, (s = a.find((e) => e.re.test(l))) && (o = s.parse(l), i = s.record.name);
				else {
					if (!(s = t.name ? r.get(t.name) : a.find((e) => e.re.test(t.path)))) throw ir(1, {
						location: e,
						currentLocation: t
					});
					i = s.record.name, o = lP({}, t.params, e.params), l = s.stringify(o);
				}
				let c = [], u = s;
				for (; u;) c.unshift(u.record), u = u.parent;
				return {
					name: i,
					path: l,
					params: o,
					matched: c,
					meta: c.reduce((e, t) => lP(e, t.meta), {})
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
	}(e.routes, e), l = e.parseQuery || iv, i = e.stringifyQuery || iN, o = e.history, c = ij(), u = ij(), p = ij(), d = nx(l2), f = l2;
	lj && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
	let h = lA.bind(null, (e) => "" + e), m = lA.bind(null, lG), k = lA.bind(null, lJ);
	function g(e, t) {
		var a;
		let r, c;
		if (t = lP({}, t || d.value), "string" == typeof e) {
			let a = lZ(l, e, t.path), r = s.resolve({ path: a.path }, t), i = o.createHref(a.fullPath);
			return lP(a, r, {
				params: k(r.params),
				hash: lJ(a.hash),
				redirectedFrom: void 0,
				href: i
			});
		}
		if (null != e.path) r = lP({}, e, { path: lZ(l, e.path, t.path).path });
		else {
			let a = lP({}, e.params);
			for (let e in a) a[e] ?? delete a[e];
			r = lP({}, e, { params: m(a) }), t.params = m(t.params);
		}
		let u = s.resolve(r, t), p = e.hash || "";
		u.params = h(k(u.params));
		let f = (c = (a = lP({}, e, {
			hash: lq(p).replace(lU, "{").replace(lz, "}").replace(lI, "^"),
			path: u.path
		})).query ? i(a.query) : "", a.path + (c && "?") + c + (a.hash || "")), g = o.createHref(f);
		return lP({
			fullPath: f,
			hash: p,
			query: i === iN ? function(e) {
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
	function y(e) {
		return "string" == typeof e ? lZ(l, e, d.value.path) : lP({}, e);
	}
	function N(e, t) {
		if (f !== e) return ir(8, {
			from: t,
			to: e
		});
	}
	function b(e) {
		let t = e.matched[e.matched.length - 1];
		if (t && t.redirect) {
			let { redirect: a } = t, r = "function" == typeof a ? a(e) : a;
			return "string" == typeof r && ((r = r.includes("?") || r.includes("#") ? r = y(r) : { path: r }).params = {}), lP({
				query: e.query,
				hash: e.hash,
				params: null != r.path ? {} : e.params
			}, r);
		}
	}
	function _(e, t) {
		let a, r, s, l = f = g(e), o = d.value, c = e.state, u = e.force, p = !0 === e.replace, h = b(l);
		return h ? _(lP(y(h), {
			state: "object" == typeof h ? lP({}, c, h.state) : c,
			force: u,
			replace: p
		}), t || l) : (l.redirectedFrom = t, !u && (r = o.matched.length - 1, s = l.matched.length - 1, r > -1 && r === s && lY(o.matched[r], l.matched[s]) && l0(o.params, l.params) && i(o.query) === i(l.query) && o.hash === l.hash) && (a = ir(16, {
			to: l,
			from: o
		}), C(o, o, !0, !1)), (a ? Promise.resolve(a) : x(l, o)).catch((e) => is(e) ? is(e, 2) ? e : E(e) : M(e, l, o)).then((e) => {
			if (e) {
				if (is(e, 2)) return _(lP({ replace: p }, y(e.to), {
					state: "object" == typeof e.to ? lP({}, c, e.to.state) : c,
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
		let t = R.values().next().value;
		return t && "function" == typeof t.runWithContext ? t.runWithContext(e) : e();
	}
	function x(e, t) {
		let a, [r, s, l] = function(e, t) {
			let a = [], r = [], s = [], l = Math.max(t.matched.length, e.matched.length);
			for (let i = 0; i < l; i++) {
				let l = t.matched[i];
				l && (e.matched.find((e) => lY(e, l)) ? r.push(l) : a.push(l));
				let o = e.matched[i];
				o && !t.matched.find((e) => lY(e, o)) && s.push(o);
			}
			return [
				a,
				r,
				s
			];
		}(e, t);
		for (let s of (a = iP(r.reverse(), "beforeRouteLeave", e, t), r)) s.leaveGuards.forEach((r) => {
			a.push(iS(r, e, t));
		});
		let i = w.bind(null, e, t);
		return a.push(i), F(a).then(() => {
			for (let r of (a = [], c.list())) a.push(iS(r, e, t));
			return a.push(i), F(a);
		}).then(() => {
			for (let r of (a = iP(s, "beforeRouteUpdate", e, t), s)) r.updateGuards.forEach((r) => {
				a.push(iS(r, e, t));
			});
			return a.push(i), F(a);
		}).then(() => {
			for (let r of (a = [], l)) if (r.beforeEnter) if (lE(r.beforeEnter)) for (let s of r.beforeEnter) a.push(iS(s, e, t));
			else a.push(iS(r.beforeEnter, e, t));
			return a.push(i), F(a);
		}).then(() => (e.matched.forEach((e) => e.enterCallbacks = {}), (a = iP(l, "beforeRouteEnter", e, t, O)).push(i), F(a))).then(() => {
			for (let r of (a = [], u.list())) a.push(iS(r, e, t));
			return a.push(i), F(a);
		}).catch((e) => is(e, 8) ? e : Promise.reject(e));
	}
	function j(e, t, a) {
		p.list().forEach((r) => O(() => r(e, t, a)));
	}
	function S(e, t, a, r, s) {
		let l = N(e, t);
		if (l) return l;
		let i = t === l2, c = lj ? history.state : {};
		a && (r || i ? o.replace(e.fullPath, lP({ scroll: i && c && c.scroll }, s)) : o.push(e.fullPath, s)), d.value = e, C(e, t, a, i), E();
	}
	let P = ij(), A = ij();
	function M(e, t, a) {
		E(e);
		let r = A.list();
		return r.length ? r.forEach((r) => r(e, t, a)) : console.error(e), Promise.reject(e);
	}
	function E(e) {
		return a || (a = !e, t || (t = o.listen((e, t, a) => {
			var r, s;
			if (!T.listening) return;
			let l = g(e), i = b(l);
			if (i) return void _(lP(i, {
				replace: !0,
				force: !0
			}), l).catch(lM);
			f = l;
			let c = d.value;
			lj && (r = l8(c.fullPath, a.delta), s = l3(), l7.set(r, s)), x(l, c).catch((e) => is(e, 12) ? e : is(e, 2) ? (_(lP(y(e.to), { force: !0 }), l).then((e) => {
				is(e, 20) && !a.delta && a.type === I.pop && o.go(-1, !1);
			}).catch(lM), Promise.reject()) : (a.delta && o.go(-a.delta, !1), M(e, l, c))).then((e) => {
				(e = e || S(l, c, !1)) && (a.delta && !is(e, 8) ? o.go(-a.delta, !1) : a.type === I.pop && is(e, 20) && o.go(-1, !1)), j(l, c, e);
			}).catch(lM);
		})), P.list().forEach(([t, a]) => e ? a(e) : t()), P.reset()), e;
	}
	function C(t, a, r, s) {
		var l;
		let i, { scrollBehavior: o } = e;
		if (!lj || !o) return Promise.resolve();
		let c = !r && (l = l8(t.fullPath, 0), i = l7.get(l), l7.delete(l), i) || (s || !r) && history.state && history.state.scroll || null;
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
		}(e)).catch((e) => M(e, t, a));
	}
	let $ = (e) => o.go(e), R = /* @__PURE__ */ new Set(), T = {
		currentRoute: d,
		listening: !0,
		addRoute: function(e, t) {
			let a, r;
			return it(e) ? (a = s.getRecordMatcher(e), r = t) : r = e, s.addRoute(r, a);
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
			return _(lP(y(e), { replace: !0 }));
		},
		go: $,
		back: () => $(-1),
		forward: () => $(1),
		beforeEach: c.add,
		beforeResolve: u.add,
		afterEach: p.add,
		onError: A.add,
		isReady: function() {
			return a && d.value !== l2 ? Promise.resolve() : new Promise((e, t) => {
				P.add([e, t]);
			});
		},
		install(e) {
			e.component("RouterLink", iM), e.component("RouterView", i$), e.config.globalProperties.$router = this, Object.defineProperty(e.config.globalProperties, "$route", {
				enumerable: !0,
				get: () => nP(d)
			}), lj && !r && d.value === l2 && (r = !0, _(o.location).catch((e) => {}));
			let s = {};
			for (let e in l2) Object.defineProperty(s, e, {
				get: () => d.value[e],
				enumerable: !0
			});
			e.provide(iw, this), e.provide(iO, nf(s)), e.provide(ix, d);
			let l = e.unmount;
			R.add(e), e.unmount = function() {
				R.delete(e), R.size < 1 && (f = l2, t && t(), t = null, d.value = l2, r = !1, a = !1), l();
			};
		}
	};
	function F(e) {
		return e.reduce((e, t) => e.then(() => O(t)), Promise.resolve());
	}
	return T;
}
function iF() {
	return a6(iw);
}
let iV = iM, iL = i$;
function iD(e, ...t) {
	return a(...t)(l(e));
}
var iI = class e extends i {
	static seed(t) {
		return new e(t);
	}
	_value;
	_subject$ = new o();
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
let iB = Symbol("forwardRef");
function iU(e) {
	let t = e;
	return new nE((e, a) => ({
		get: () => (e(), t),
		set(e) {
			let r = e?.[iB] ?? e;
			r !== t && (t = r, a());
		}
	}));
}
function iW(e) {
	return (t) => {
		let a = t.subscribe(e);
		aC(() => a.unsubscribe());
	};
}
function iz(e) {
	return (t) => {
		let a;
		aA(() => {
			a = t.subscribe(e);
		}), aC(() => a?.unsubscribe());
	};
}
let iK = (e) => {
	let t = new iI(e), a = new nE((e, a) => ({
		get: () => (e(), t.value),
		set(e) {
			let r = e?.[iB] ?? e;
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
var iq = (e) => "function" == typeof e ? e : Array.isArray(e) ? () => e : void 0 === e ? e : () => e, iH = (e, t, a) => iG(e, t, a), iG = (e, t, a) => {
	let r, [s, l] = ((e, t) => {
		let { children: a,...r } = e;
		if (a && !Array.isArray(a) && !r$(a) && "object" == typeof a) return [t ? {
			...r,
			key: t
		} : r, a];
		let s = {}, l = {}, i = !1;
		for (let e in r) {
			let t = r[e];
			if (e.startsWith("$")) {
				l[e.slice(1)] = iq(t), i = !0;
				continue;
			}
			s[e] = t;
		}
		let o = iq(a);
		return o && (l.default = o, i = !0), [t ? {
			...s,
			key: t
		} : s, i ? l : void 0];
	})(t, a);
	return (r = e) === rj || "string" == typeof r || "object" == typeof r && r.__isTeleport ? r2(e, s, l?.default?.() ?? (e === rj ? [] : void 0)) : r2(e, s, l);
};
function iJ(e) {
	return (t) => iG(iX, {
		renderFn$: t.pipe(p((t) => () => e(t))),
		children: {}
	});
}
var iX = lO({ renderFn$: lg() }, (e, t) => {
	let a = null;
	iD(e.renderFn$, u((e) => {
		a = e;
	}), iW());
	let r = iK(1);
	return iD(e.renderFn$, u(() => {
		r.value += 1;
	}), iz()), () => r.value ? a?.() : null;
}, { name: "RxSlot" }, { displayName: "RxSlot" });
let iZ = (e, t) => {
	let a = new c(e[t]);
	return rh(() => e[t], (e) => a.next(e)), a;
};
function iQ(...e) {
	let t, a = {}, r = {};
	for (let s of e) {
		if (eV(s)) {
			t = s;
			continue;
		}
		eL(t) ? a = s : r = s;
	}
	return lO(a, (e, a) => {
		let r = ((e) => {
			let t = {};
			for (let a in e) {
				if (eV(e[a]) || s(e[a])) {
					t[a] = e[a];
					continue;
				}
				t[`${a}$`] = iZ(e, a);
			}
			return t;
		})(e), l = new Proxy({}, { get: (t, a) => e[a] ?? r[a] }), i = new Proxy({}, { get: (e, t) => "render" === t ? iJ : a[t] }), o = t(l, i);
		return eV(o) ? o : () => o;
	}, r);
}
let iY = (e) => {
	let t, a = null;
	return u({
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
function i0(...e) {
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
		return lx(lO({
			value: lg().optional(),
			$default: lg().optional()
		}, (e, { slots: t }) => (a4(l, e.value ?? a()), () => t.default?.()), {
			...s,
			name: `Provide(${s?.name ?? ""})`
		}, { displayName: "Provider" }), { use: () => a6(l, a, !0) });
	}
	let i = lf(r);
	return lx(lO({
		...r,
		$default: lg().optional()
	}, (e, { slots: r }) => (a4(l, a = t(e)), () => r.default?.()), {
		...s,
		name: `Provide(${s?.name ?? ""})`
	}, { displayName: "Provider" }), { use: () => a6(l, () => a ??= t(i.create({})), !0) });
}
var i1 = lO(() => {
	let e = nO(1);
	return () => iH("div", {
		style: {
			display: "flex",
			gap: "1rem"
		},
		children: [iH("div", { children: ["Counts: ", e.value] }), iG("button", {
			onClick: () => e.value++,
			children: "Click To Count"
		})]
	});
}), i2 = lO({
	value: li().optional().default("1"),
	type: lp(["text", "number"]),
	onValueChange: lg()
}, (e, { emit: t }) => () => iG("input", {
	value: e.value,
	onInput: (e) => {
		t("value-change", e.target.value);
	}
}), { displayName: "TextInput" }), i4 = lO({
	$title: lg().optional(),
	$item: lg().optional(),
	$default: lg().optional()
}, ({}, { slots: e }) => () => iH("dl", { children: [
	iG("dt", { children: "default" }),
	iG("dd", { children: e.default?.() }),
	iG("dt", { children: "title" }),
	iG("dd", { children: e.title?.() }),
	iG("dt", { children: "item" }),
	iG("dd", { children: [{
		label: "1",
		value: "1"
	}, {
		label: "2",
		value: "2"
	}].map((t) => e.item?.(t)) })
] }), { displayName: "List" }), i6 = lO(() => {
	let e = nO("");
	return () => iG(i4, {
		$title: iH("div", { children: ["Inputted: ", e.value] }),
		$item: (e) => iG("div", { children: e.label }),
		children: iG(i2, {
			type: "text",
			onValueChange: (t) => {
				e.value = t;
			}
		})
	});
});
function i3(e) {
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
	return iH(rj, { children: [
		iG(t.p, { children: "为了更好的 TypeScript 和 JSX 的支持，重新抽象了定义组件的方式" }),
		"\n",
		iG(t.p, { children: "一般组件：" }),
		"\n",
		iH(t.div, {
			"data-example": "",
			children: [iG(t.div, {
				"data-example-container": "",
				children: iG(t.codeblock4b227777, {})
			}), iG(t.pre, {
				className: "language-tsx",
				children: iH(t.code, {
					className: "language-tsx",
					children: [
						iG(t.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						iH(t.span, {
							className: "token imports",
							children: [
								iG(t.span, {
									className: "token punctuation",
									children: "{"
								}),
								" component ",
								iG(t.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						iG(t.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						iG(t.span, {
							className: "token string",
							children: "\"@innoai-tech/vuekit\""
						}),
						iG(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						iG(t.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						iH(t.span, {
							className: "token imports",
							children: [
								iG(t.span, {
									className: "token punctuation",
									children: "{"
								}),
								" ref ",
								iG(t.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						iG(t.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						iG(t.span, {
							className: "token string",
							children: "\"vue\""
						}),
						iG(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n",
						iG(t.span, {
							className: "token keyword module",
							children: "export"
						}),
						" ",
						iG(t.span, {
							className: "token keyword module",
							children: "default"
						}),
						" ",
						iG(t.span, {
							className: "token function",
							children: "component"
						}),
						iG(t.span, {
							className: "token punctuation",
							children: "("
						}),
						iG(t.span, {
							className: "token punctuation",
							children: "("
						}),
						iG(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						iG(t.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						iG(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n  ",
						iG(t.span, {
							className: "token keyword",
							children: "const"
						}),
						" count ",
						iG(t.span, {
							className: "token operator",
							children: "="
						}),
						" ",
						iG(t.span, {
							className: "token function",
							children: "ref"
						}),
						iG(t.span, {
							className: "token punctuation",
							children: "("
						}),
						iG(t.span, {
							className: "token number",
							children: "1"
						}),
						iG(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						iG(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n  ",
						iG(t.span, {
							className: "token keyword control-flow",
							children: "return"
						}),
						" ",
						iG(t.span, {
							className: "token punctuation",
							children: "("
						}),
						iG(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						iG(t.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						iG(t.span, {
							className: "token punctuation",
							children: "("
						}),
						"\n    ",
						iH(t.span, {
							className: "token tag",
							children: [
								iH(t.span, {
									className: "token tag",
									children: [iG(t.span, {
										className: "token punctuation",
										children: "<"
									}), "div"]
								}),
								" ",
								iG(t.span, {
									className: "token attr-name",
									children: "style"
								}),
								iH(t.span, {
									className: "token script language-javascript",
									children: [
										iG(t.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										iG(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										iG(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										" display",
										iG(t.span, {
											className: "token operator",
											children: ":"
										}),
										" ",
										iG(t.span, {
											className: "token string",
											children: "\"flex\""
										}),
										iG(t.span, {
											className: "token punctuation",
											children: ","
										}),
										" gap",
										iG(t.span, {
											className: "token operator",
											children: ":"
										}),
										" ",
										iG(t.span, {
											className: "token string",
											children: "\"1rem\""
										}),
										" ",
										iG(t.span, {
											className: "token punctuation",
											children: "}"
										}),
										iG(t.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								iG(t.span, {
									className: "token punctuation",
									children: ">"
								})
							]
						}),
						iG(t.span, {
							className: "token plain-text",
							children: "\n      "
						}),
						iH(t.span, {
							className: "token tag",
							children: [iH(t.span, {
								className: "token tag",
								children: [iG(t.span, {
									className: "token punctuation",
									children: "<"
								}), "div"]
							}), iG(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						iG(t.span, {
							className: "token plain-text",
							children: "Counts: "
						}),
						iG(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						"count",
						iG(t.span, {
							className: "token punctuation",
							children: "."
						}),
						iG(t.span, {
							className: "token property-access",
							children: "value"
						}),
						iG(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						iH(t.span, {
							className: "token tag",
							children: [iH(t.span, {
								className: "token tag",
								children: [iG(t.span, {
									className: "token punctuation",
									children: "</"
								}), "div"]
							}), iG(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						iG(t.span, {
							className: "token plain-text",
							children: "\n      "
						}),
						iH(t.span, {
							className: "token tag",
							children: [
								iH(t.span, {
									className: "token tag",
									children: [iG(t.span, {
										className: "token punctuation",
										children: "<"
									}), "button"]
								}),
								" ",
								iG(t.span, {
									className: "token attr-name",
									children: "onClick"
								}),
								iH(t.span, {
									className: "token script language-javascript",
									children: [
										iG(t.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										iG(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										iG(t.span, {
											className: "token punctuation",
											children: "("
										}),
										iG(t.span, {
											className: "token punctuation",
											children: ")"
										}),
										" ",
										iG(t.span, {
											className: "token arrow operator",
											children: "=>"
										}),
										" count",
										iG(t.span, {
											className: "token punctuation",
											children: "."
										}),
										iG(t.span, {
											className: "token property-access",
											children: "value"
										}),
										iG(t.span, {
											className: "token operator",
											children: "++"
										}),
										iG(t.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								iG(t.span, {
									className: "token punctuation",
									children: ">"
								})
							]
						}),
						iG(t.span, {
							className: "token plain-text",
							children: "Click To Count"
						}),
						iH(t.span, {
							className: "token tag",
							children: [iH(t.span, {
								className: "token tag",
								children: [iG(t.span, {
									className: "token punctuation",
									children: "</"
								}), "button"]
							}), iG(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						iG(t.span, {
							className: "token plain-text",
							children: "\n    "
						}),
						iH(t.span, {
							className: "token tag",
							children: [iH(t.span, {
								className: "token tag",
								children: [iG(t.span, {
									className: "token punctuation",
									children: "</"
								}), "div"]
							}), iG(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						"\n  ",
						iG(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						iG(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						iG(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						iG(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						iG(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n"
					]
				})
			})]
		}),
		"\n",
		iG(t.p, { children: "可复用组件：" }),
		"\n",
		iH(t.ul, { children: [
			"\n",
			iH(t.li, { children: [
				iG(t.code, { children: "props" }),
				" 和 ",
				iG(t.code, { children: "emits" }),
				" 合并声明"
			] }),
			"\n"
		] }),
		"\n",
		iH(t.div, {
			"data-example": "",
			children: [iG(t.div, {
				"data-example-container": "",
				children: iG(t.codeblock4a44dc15, {})
			}), iG(t.pre, {
				className: "language-tsx",
				children: iH(t.code, {
					className: "language-tsx",
					children: [
						iG(t.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						iG(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						" component",
						iG(t.span, {
							className: "token punctuation",
							children: ","
						}),
						" t",
						iG(t.span, {
							className: "token punctuation",
							children: ","
						}),
						" ",
						iG(t.span, {
							className: "token keyword",
							children: "type"
						}),
						" ",
						iG(t.span, {
							className: "token class-name",
							children: iG(t.span, {
								className: "token maybe-class-name",
								children: "VNode"
							})
						}),
						iG(t.span, {
							className: "token punctuation",
							children: ","
						}),
						" ",
						iG(t.span, {
							className: "token keyword",
							children: "type"
						}),
						" ",
						iG(t.span, {
							className: "token class-name",
							children: iG(t.span, {
								className: "token maybe-class-name",
								children: "VNodeChild"
							})
						}),
						" ",
						iG(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						" ",
						iG(t.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						iG(t.span, {
							className: "token string",
							children: "\"@innoai-tech/vuekit\""
						}),
						iG(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						iG(t.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						iH(t.span, {
							className: "token imports",
							children: [
								iG(t.span, {
									className: "token punctuation",
									children: "{"
								}),
								" ref ",
								iG(t.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						iG(t.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						iG(t.span, {
							className: "token string",
							children: "\"vue\""
						}),
						iG(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n",
						iG(t.span, {
							className: "token keyword module",
							children: "export"
						}),
						" ",
						iG(t.span, {
							className: "token keyword",
							children: "const"
						}),
						" ",
						iG(t.span, {
							className: "token maybe-class-name",
							children: "TextInput"
						}),
						" ",
						iG(t.span, {
							className: "token operator",
							children: "="
						}),
						" ",
						iG(t.span, {
							className: "token function",
							children: "component"
						}),
						iG(t.span, {
							className: "token punctuation",
							children: "("
						}),
						"\n  ",
						iG(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n    ",
						iG(t.span, {
							className: "token comment",
							children: "// VUE 的注册机制（Proxy 定义基准，以及从 attrs 中提取 props 的 emits 的依据）"
						}),
						"\n    ",
						iG(t.span, {
							className: "token comment",
							children: "// 必须声明，哪怕只是属性名称"
						}),
						"\n    ",
						iG(t.span, {
							className: "token comment",
							children: "//"
						}),
						"\n    ",
						iG(t.span, {
							className: "token comment",
							children: "// 又由于 TypeString 的老问题  https://www.typescriptneedstypes.com/#the-problem"
						}),
						"\n    ",
						iG(t.span, {
							className: "token comment",
							children: "// 类型定义无法转为 Runtime 对象"
						}),
						"\n    value",
						iG(t.span, {
							className: "token operator",
							children: ":"
						}),
						" t",
						iG(t.span, {
							className: "token punctuation",
							children: "."
						}),
						iG(t.span, {
							className: "token method function property-access",
							children: "string"
						}),
						iG(t.span, {
							className: "token punctuation",
							children: "("
						}),
						iG(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						iG(t.span, {
							className: "token punctuation",
							children: "."
						}),
						iG(t.span, {
							className: "token method function property-access",
							children: "optional"
						}),
						iG(t.span, {
							className: "token punctuation",
							children: "("
						}),
						iG(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						iG(t.span, {
							className: "token punctuation",
							children: "."
						}),
						iG(t.span, {
							className: "token keyword module",
							children: "default"
						}),
						iG(t.span, {
							className: "token punctuation",
							children: "("
						}),
						iG(t.span, {
							className: "token string",
							children: "\"1\""
						}),
						iG(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						iG(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n    type",
						iG(t.span, {
							className: "token operator",
							children: ":"
						}),
						" t",
						iG(t.span, {
							className: "token punctuation",
							children: "."
						}),
						iG(t.span, {
							className: "token method function property-access",
							children: "enums"
						}),
						iG(t.span, {
							className: "token punctuation",
							children: "("
						}),
						iG(t.span, {
							className: "token punctuation",
							children: "["
						}),
						iG(t.span, {
							className: "token string",
							children: "\"text\""
						}),
						iG(t.span, {
							className: "token punctuation",
							children: ","
						}),
						" ",
						iG(t.span, {
							className: "token string",
							children: "\"number\""
						}),
						iG(t.span, {
							className: "token punctuation",
							children: "]"
						}),
						iG(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						iG(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n\n    ",
						iG(t.span, {
							className: "token comment",
							children: "// on[A-Z] 前缀视为 emits"
						}),
						"\n    onValueChange",
						iG(t.span, {
							className: "token operator",
							children: ":"
						}),
						" t",
						iG(t.span, {
							className: "token punctuation",
							children: "."
						}),
						iG(t.span, {
							className: "token property-access",
							children: "custom"
						}),
						iG(t.span, {
							className: "token operator",
							children: "<"
						}),
						iG(t.span, {
							className: "token punctuation",
							children: "("
						}),
						"v",
						iG(t.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						iG(t.span, {
							className: "token builtin",
							children: "string"
						}),
						iG(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						iG(t.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						iG(t.span, {
							className: "token keyword",
							children: "void"
						}),
						iG(t.span, {
							className: "token operator",
							children: ">"
						}),
						iG(t.span, {
							className: "token punctuation",
							children: "("
						}),
						iG(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						iG(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n  ",
						iG(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						iG(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n  ",
						iG(t.span, {
							className: "token punctuation",
							children: "("
						}),
						"props",
						iG(t.span, {
							className: "token punctuation",
							children: ","
						}),
						" ",
						iG(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						" emit ",
						iG(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						iG(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						iG(t.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						iG(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n    ",
						iG(t.span, {
							className: "token comment",
							children: "// setup"
						}),
						"\n\n    ",
						iG(t.span, {
							className: "token keyword control-flow",
							children: "return"
						}),
						" ",
						iG(t.span, {
							className: "token punctuation",
							children: "("
						}),
						iG(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						iG(t.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						iG(t.span, {
							className: "token punctuation",
							children: "("
						}),
						"\n      ",
						iH(t.span, {
							className: "token tag",
							children: [
								iH(t.span, {
									className: "token tag",
									children: [iG(t.span, {
										className: "token punctuation",
										children: "<"
									}), "input"]
								}),
								"\n        ",
								iG(t.span, {
									className: "token attr-name",
									children: "value"
								}),
								iH(t.span, {
									className: "token script language-javascript",
									children: [
										iG(t.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										iG(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										"props",
										iG(t.span, {
											className: "token punctuation",
											children: "."
										}),
										iG(t.span, {
											className: "token property-access",
											children: "value"
										}),
										iG(t.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n        ",
								iG(t.span, {
									className: "token attr-name",
									children: "onInput"
								}),
								iH(t.span, {
									className: "token script language-javascript",
									children: [
										iG(t.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										iG(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										iG(t.span, {
											className: "token punctuation",
											children: "("
										}),
										"e",
										iG(t.span, {
											className: "token punctuation",
											children: ")"
										}),
										" ",
										iG(t.span, {
											className: "token arrow operator",
											children: "=>"
										}),
										" ",
										iG(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										"\n          ",
										iG(t.span, {
											className: "token function",
											children: "emit"
										}),
										iG(t.span, {
											className: "token punctuation",
											children: "("
										}),
										iG(t.span, {
											className: "token string",
											children: "\"value-change\""
										}),
										iG(t.span, {
											className: "token punctuation",
											children: ","
										}),
										" ",
										iG(t.span, {
											className: "token punctuation",
											children: "("
										}),
										"e",
										iG(t.span, {
											className: "token punctuation",
											children: "."
										}),
										iG(t.span, {
											className: "token property-access",
											children: "target"
										}),
										" ",
										iG(t.span, {
											className: "token keyword module",
											children: "as"
										}),
										" ",
										iG(t.span, {
											className: "token maybe-class-name",
											children: "HTMLInputElement"
										}),
										iG(t.span, {
											className: "token punctuation",
											children: ")"
										}),
										iG(t.span, {
											className: "token punctuation",
											children: "."
										}),
										iG(t.span, {
											className: "token property-access",
											children: "value"
										}),
										iG(t.span, {
											className: "token punctuation",
											children: ")"
										}),
										iG(t.span, {
											className: "token punctuation",
											children: ";"
										}),
										"\n        ",
										iG(t.span, {
											className: "token punctuation",
											children: "}"
										}),
										iG(t.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n      ",
								iG(t.span, {
									className: "token punctuation",
									children: "/>"
								})
							]
						}),
						"\n    ",
						iG(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						iG(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n  ",
						iG(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						iG(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n",
						iG(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						iG(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n",
						iG(t.span, {
							className: "token keyword module",
							children: "export"
						}),
						" ",
						iG(t.span, {
							className: "token keyword",
							children: "interface"
						}),
						" ",
						iG(t.span, {
							className: "token class-name",
							children: iG(t.span, {
								className: "token maybe-class-name",
								children: "Option"
							})
						}),
						" ",
						iG(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n  label",
						iG(t.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						iG(t.span, {
							className: "token builtin",
							children: "string"
						}),
						iG(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n  value",
						iG(t.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						iG(t.span, {
							className: "token builtin",
							children: "string"
						}),
						iG(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						iG(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						"\n\n",
						iG(t.span, {
							className: "token keyword module",
							children: "export"
						}),
						" ",
						iG(t.span, {
							className: "token keyword",
							children: "const"
						}),
						" ",
						iG(t.span, {
							className: "token maybe-class-name",
							children: "List"
						}),
						" ",
						iG(t.span, {
							className: "token operator",
							children: "="
						}),
						" ",
						iG(t.span, {
							className: "token function",
							children: "component"
						}),
						iG(t.span, {
							className: "token punctuation",
							children: "("
						}),
						"\n  ",
						iG(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n    ",
						iG(t.span, {
							className: "token comment",
							children: "// $ 前缀视为 slots"
						}),
						"\n    $title",
						iG(t.span, {
							className: "token operator",
							children: ":"
						}),
						" t",
						iG(t.span, {
							className: "token punctuation",
							children: "."
						}),
						iG(t.span, {
							className: "token property-access",
							children: "custom"
						}),
						iG(t.span, {
							className: "token operator",
							children: "<"
						}),
						iG(t.span, {
							className: "token maybe-class-name",
							children: "VNodeChild"
						}),
						iG(t.span, {
							className: "token operator",
							children: ">"
						}),
						iG(t.span, {
							className: "token punctuation",
							children: "("
						}),
						iG(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						iG(t.span, {
							className: "token punctuation",
							children: "."
						}),
						iG(t.span, {
							className: "token method function property-access",
							children: "optional"
						}),
						iG(t.span, {
							className: "token punctuation",
							children: "("
						}),
						iG(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						iG(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n    ",
						iG(t.span, {
							className: "token comment",
							children: "// renderProp"
						}),
						"\n    $item",
						iG(t.span, {
							className: "token operator",
							children: ":"
						}),
						" t",
						iG(t.span, {
							className: "token punctuation",
							children: "."
						}),
						iG(t.span, {
							className: "token property-access",
							children: "custom"
						}),
						iG(t.span, {
							className: "token operator",
							children: "<"
						}),
						iG(t.span, {
							className: "token punctuation",
							children: "("
						}),
						"option",
						iG(t.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						iG(t.span, {
							className: "token maybe-class-name",
							children: "Option"
						}),
						iG(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						iG(t.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						iG(t.span, {
							className: "token maybe-class-name",
							children: "VNode"
						}),
						iG(t.span, {
							className: "token operator",
							children: ">"
						}),
						iG(t.span, {
							className: "token punctuation",
							children: "("
						}),
						iG(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						iG(t.span, {
							className: "token punctuation",
							children: "."
						}),
						iG(t.span, {
							className: "token method function property-access",
							children: "optional"
						}),
						iG(t.span, {
							className: "token punctuation",
							children: "("
						}),
						iG(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						iG(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n\n    $",
						iG(t.span, {
							className: "token keyword module",
							children: "default"
						}),
						iG(t.span, {
							className: "token operator",
							children: ":"
						}),
						" t",
						iG(t.span, {
							className: "token punctuation",
							children: "."
						}),
						iG(t.span, {
							className: "token property-access",
							children: "custom"
						}),
						iG(t.span, {
							className: "token operator",
							children: "<"
						}),
						iG(t.span, {
							className: "token maybe-class-name",
							children: "VNodeChild"
						}),
						iG(t.span, {
							className: "token operator",
							children: ">"
						}),
						iG(t.span, {
							className: "token punctuation",
							children: "("
						}),
						iG(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						iG(t.span, {
							className: "token punctuation",
							children: "."
						}),
						iG(t.span, {
							className: "token method function property-access",
							children: "optional"
						}),
						iG(t.span, {
							className: "token punctuation",
							children: "("
						}),
						iG(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						iG(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n\n    ",
						iG(t.span, {
							className: "token comment",
							children: "// 以此避免多插槽时 children slots object 的写法, 且无类型约束，"
						}),
						"\n    ",
						iG(t.span, {
							className: "token comment",
							children: "// {{ default: () => VNode, title: () => VNode, item: (option: Option) => VNode }}"
						}),
						"\n  ",
						iG(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						iG(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n  ",
						iG(t.span, {
							className: "token punctuation",
							children: "("
						}),
						iG(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						iG(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						iG(t.span, {
							className: "token punctuation",
							children: ","
						}),
						" ",
						iG(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						" slots ",
						iG(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						iG(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						iG(t.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						"\n    ",
						iG(t.span, {
							className: "token punctuation",
							children: "("
						}),
						iG(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						iG(t.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						iG(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n      ",
						iG(t.span, {
							className: "token keyword",
							children: "const"
						}),
						" options ",
						iG(t.span, {
							className: "token operator",
							children: "="
						}),
						" ",
						iG(t.span, {
							className: "token punctuation",
							children: "["
						}),
						"\n        ",
						iG(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n          label",
						iG(t.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						iG(t.span, {
							className: "token string",
							children: "\"1\""
						}),
						iG(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n          value",
						iG(t.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						iG(t.span, {
							className: "token string",
							children: "\"1\""
						}),
						iG(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n        ",
						iG(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						iG(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n        ",
						iG(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n          label",
						iG(t.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						iG(t.span, {
							className: "token string",
							children: "\"2\""
						}),
						iG(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n          value",
						iG(t.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						iG(t.span, {
							className: "token string",
							children: "\"2\""
						}),
						iG(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n        ",
						iG(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						iG(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n      ",
						iG(t.span, {
							className: "token punctuation",
							children: "]"
						}),
						iG(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n      ",
						iG(t.span, {
							className: "token keyword control-flow",
							children: "return"
						}),
						" ",
						iG(t.span, {
							className: "token punctuation",
							children: "("
						}),
						"\n        ",
						iH(t.span, {
							className: "token tag",
							children: [iH(t.span, {
								className: "token tag",
								children: [iG(t.span, {
									className: "token punctuation",
									children: "<"
								}), "dl"]
							}), iG(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						iG(t.span, {
							className: "token plain-text",
							children: "\n          "
						}),
						iH(t.span, {
							className: "token tag",
							children: [iH(t.span, {
								className: "token tag",
								children: [iG(t.span, {
									className: "token punctuation",
									children: "<"
								}), "dt"]
							}), iG(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						iG(t.span, {
							className: "token plain-text",
							children: "default"
						}),
						iH(t.span, {
							className: "token tag",
							children: [iH(t.span, {
								className: "token tag",
								children: [iG(t.span, {
									className: "token punctuation",
									children: "</"
								}), "dt"]
							}), iG(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						iG(t.span, {
							className: "token plain-text",
							children: "\n          "
						}),
						iH(t.span, {
							className: "token tag",
							children: [iH(t.span, {
								className: "token tag",
								children: [iG(t.span, {
									className: "token punctuation",
									children: "<"
								}), "dd"]
							}), iG(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						iG(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						"slots",
						iG(t.span, {
							className: "token punctuation",
							children: "."
						}),
						iG(t.span, {
							className: "token keyword module",
							children: "default"
						}),
						iG(t.span, {
							className: "token operator",
							children: "?."
						}),
						iG(t.span, {
							className: "token punctuation",
							children: "("
						}),
						iG(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						iG(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						iH(t.span, {
							className: "token tag",
							children: [iH(t.span, {
								className: "token tag",
								children: [iG(t.span, {
									className: "token punctuation",
									children: "</"
								}), "dd"]
							}), iG(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						iG(t.span, {
							className: "token plain-text",
							children: "\n          "
						}),
						iH(t.span, {
							className: "token tag",
							children: [iH(t.span, {
								className: "token tag",
								children: [iG(t.span, {
									className: "token punctuation",
									children: "<"
								}), "dt"]
							}), iG(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						iG(t.span, {
							className: "token plain-text",
							children: "title"
						}),
						iH(t.span, {
							className: "token tag",
							children: [iH(t.span, {
								className: "token tag",
								children: [iG(t.span, {
									className: "token punctuation",
									children: "</"
								}), "dt"]
							}), iG(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						iG(t.span, {
							className: "token plain-text",
							children: "\n          "
						}),
						iH(t.span, {
							className: "token tag",
							children: [iH(t.span, {
								className: "token tag",
								children: [iG(t.span, {
									className: "token punctuation",
									children: "<"
								}), "dd"]
							}), iG(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						iG(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						"slots",
						iG(t.span, {
							className: "token punctuation",
							children: "."
						}),
						iG(t.span, {
							className: "token property-access",
							children: "title"
						}),
						iG(t.span, {
							className: "token operator",
							children: "?."
						}),
						iG(t.span, {
							className: "token punctuation",
							children: "("
						}),
						iG(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						iG(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						iH(t.span, {
							className: "token tag",
							children: [iH(t.span, {
								className: "token tag",
								children: [iG(t.span, {
									className: "token punctuation",
									children: "</"
								}), "dd"]
							}), iG(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						iG(t.span, {
							className: "token plain-text",
							children: "\n          "
						}),
						iH(t.span, {
							className: "token tag",
							children: [iH(t.span, {
								className: "token tag",
								children: [iG(t.span, {
									className: "token punctuation",
									children: "<"
								}), "dt"]
							}), iG(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						iG(t.span, {
							className: "token plain-text",
							children: "item"
						}),
						iH(t.span, {
							className: "token tag",
							children: [iH(t.span, {
								className: "token tag",
								children: [iG(t.span, {
									className: "token punctuation",
									children: "</"
								}), "dt"]
							}), iG(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						iG(t.span, {
							className: "token plain-text",
							children: "\n          "
						}),
						iH(t.span, {
							className: "token tag",
							children: [iH(t.span, {
								className: "token tag",
								children: [iG(t.span, {
									className: "token punctuation",
									children: "<"
								}), "dd"]
							}), iG(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						iG(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						"options",
						iG(t.span, {
							className: "token punctuation",
							children: "."
						}),
						iG(t.span, {
							className: "token method function property-access",
							children: "map"
						}),
						iG(t.span, {
							className: "token punctuation",
							children: "("
						}),
						iG(t.span, {
							className: "token punctuation",
							children: "("
						}),
						"option",
						iG(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						iG(t.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" slots",
						iG(t.span, {
							className: "token punctuation",
							children: "."
						}),
						iG(t.span, {
							className: "token property-access",
							children: "item"
						}),
						iG(t.span, {
							className: "token operator",
							children: "?."
						}),
						iG(t.span, {
							className: "token punctuation",
							children: "("
						}),
						"option",
						iG(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						iG(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						iG(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						iH(t.span, {
							className: "token tag",
							children: [iH(t.span, {
								className: "token tag",
								children: [iG(t.span, {
									className: "token punctuation",
									children: "</"
								}), "dd"]
							}), iG(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						iG(t.span, {
							className: "token plain-text",
							children: "\n        "
						}),
						iH(t.span, {
							className: "token tag",
							children: [iH(t.span, {
								className: "token tag",
								children: [iG(t.span, {
									className: "token punctuation",
									children: "</"
								}), "dl"]
							}), iG(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						"\n      ",
						iG(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						iG(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n    ",
						iG(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						iG(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n",
						iG(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						iG(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n",
						iG(t.span, {
							className: "token keyword module",
							children: "export"
						}),
						" ",
						iG(t.span, {
							className: "token keyword module",
							children: "default"
						}),
						" ",
						iG(t.span, {
							className: "token function",
							children: "component"
						}),
						iG(t.span, {
							className: "token punctuation",
							children: "("
						}),
						iG(t.span, {
							className: "token punctuation",
							children: "("
						}),
						iG(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						iG(t.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						iG(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n  ",
						iG(t.span, {
							className: "token keyword",
							children: "const"
						}),
						" inputValue ",
						iG(t.span, {
							className: "token operator",
							children: "="
						}),
						" ",
						iG(t.span, {
							className: "token function",
							children: "ref"
						}),
						iG(t.span, {
							className: "token punctuation",
							children: "("
						}),
						iG(t.span, {
							className: "token string",
							children: "\"\""
						}),
						iG(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						iG(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n  ",
						iG(t.span, {
							className: "token keyword control-flow",
							children: "return"
						}),
						" ",
						iG(t.span, {
							className: "token punctuation",
							children: "("
						}),
						iG(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						iG(t.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						iG(t.span, {
							className: "token punctuation",
							children: "("
						}),
						"\n    ",
						iH(t.span, {
							className: "token tag",
							children: [
								iH(t.span, {
									className: "token tag",
									children: [iG(t.span, {
										className: "token punctuation",
										children: "<"
									}), iG(t.span, {
										className: "token class-name",
										children: "List"
									})]
								}),
								"\n      ",
								iG(t.span, {
									className: "token attr-name",
									children: "$title"
								}),
								iH(t.span, {
									className: "token script language-javascript",
									children: [
										iG(t.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										iG(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										iH(t.span, {
											className: "token tag",
											children: [iH(t.span, {
												className: "token tag",
												children: [iG(t.span, {
													className: "token punctuation",
													children: "<"
												}), "div"]
											}), iG(t.span, {
												className: "token punctuation",
												children: ">"
											})]
										}),
										iG(t.span, {
											className: "token plain-text",
											children: "Inputted: "
										}),
										iG(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										"inputValue",
										iG(t.span, {
											className: "token punctuation",
											children: "."
										}),
										iG(t.span, {
											className: "token property-access",
											children: "value"
										}),
										iG(t.span, {
											className: "token punctuation",
											children: "}"
										}),
										iH(t.span, {
											className: "token tag",
											children: [iH(t.span, {
												className: "token tag",
												children: [iG(t.span, {
													className: "token punctuation",
													children: "</"
												}), "div"]
											}), iG(t.span, {
												className: "token punctuation",
												children: ">"
											})]
										}),
										iG(t.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n      ",
								iG(t.span, {
									className: "token attr-name",
									children: "$item"
								}),
								iH(t.span, {
									className: "token script language-javascript",
									children: [
										iG(t.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										iG(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										iG(t.span, {
											className: "token punctuation",
											children: "("
										}),
										"o",
										iG(t.span, {
											className: "token punctuation",
											children: ")"
										}),
										" ",
										iG(t.span, {
											className: "token arrow operator",
											children: "=>"
										}),
										" ",
										iH(t.span, {
											className: "token tag",
											children: [iH(t.span, {
												className: "token tag",
												children: [iG(t.span, {
													className: "token punctuation",
													children: "<"
												}), "div"]
											}), iG(t.span, {
												className: "token punctuation",
												children: ">"
											})]
										}),
										iG(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										"o",
										iG(t.span, {
											className: "token punctuation",
											children: "."
										}),
										iG(t.span, {
											className: "token property-access",
											children: "label"
										}),
										iG(t.span, {
											className: "token punctuation",
											children: "}"
										}),
										iH(t.span, {
											className: "token tag",
											children: [iH(t.span, {
												className: "token tag",
												children: [iG(t.span, {
													className: "token punctuation",
													children: "</"
												}), "div"]
											}), iG(t.span, {
												className: "token punctuation",
												children: ">"
											})]
										}),
										iG(t.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n    ",
								iG(t.span, {
									className: "token punctuation",
									children: ">"
								})
							]
						}),
						iG(t.span, {
							className: "token plain-text",
							children: "\n      "
						}),
						iH(t.span, {
							className: "token tag",
							children: [
								iH(t.span, {
									className: "token tag",
									children: [iG(t.span, {
										className: "token punctuation",
										children: "<"
									}), iG(t.span, {
										className: "token class-name",
										children: "TextInput"
									})]
								}),
								"\n        ",
								iG(t.span, {
									className: "token attr-name",
									children: "type"
								}),
								iH(t.span, {
									className: "token script language-javascript",
									children: [
										iG(t.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										iG(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										iG(t.span, {
											className: "token string",
											children: "\"text\""
										}),
										iG(t.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n        ",
								iG(t.span, {
									className: "token attr-name",
									children: "onValueChange"
								}),
								iH(t.span, {
									className: "token script language-javascript",
									children: [
										iG(t.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										iG(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										iG(t.span, {
											className: "token punctuation",
											children: "("
										}),
										"value",
										iG(t.span, {
											className: "token punctuation",
											children: ")"
										}),
										" ",
										iG(t.span, {
											className: "token arrow operator",
											children: "=>"
										}),
										" ",
										iG(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										"\n          inputValue",
										iG(t.span, {
											className: "token punctuation",
											children: "."
										}),
										iG(t.span, {
											className: "token property-access",
											children: "value"
										}),
										" ",
										iG(t.span, {
											className: "token operator",
											children: "="
										}),
										" value",
										iG(t.span, {
											className: "token punctuation",
											children: ";"
										}),
										"\n        ",
										iG(t.span, {
											className: "token punctuation",
											children: "}"
										}),
										iG(t.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n      ",
								iG(t.span, {
									className: "token punctuation",
									children: "/>"
								})
							]
						}),
						iG(t.span, {
							className: "token plain-text",
							children: "\n    "
						}),
						iH(t.span, {
							className: "token tag",
							children: [iH(t.span, {
								className: "token tag",
								children: [iG(t.span, {
									className: "token punctuation",
									children: "</"
								}), iG(t.span, {
									className: "token class-name",
									children: "List"
								})]
							}), iG(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						"\n  ",
						iG(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						iG(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						iG(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						iG(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						iG(t.span, {
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
function i8(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? iG(t, {
		...e,
		children: iG(i3, { ...e })
	}) : i3(e);
}
var i7 = ak(() => () => r2(i8, { components: {
	codeblock4b227777: i1,
	codeblock4a44dc15: i6
} })), i5 = iQ((e, { emit: t }) => {
	let a = iK(e.value ?? "1");
	return iD(a, r(300), iW((e) => t("value-change", e))), iD(a, iJ((e) => iG("input", {
		value: e,
		onInput: (e) => {
			a.value = e.target.value;
		}
	})));
}, {
	displayName: "TextDebounceInput",
	props: ["value"],
	emits: ["value-change"]
}), i9 = lO(() => {
	let e = nO("default");
	return () => iG("div", { children: iH("div", {
		style: {
			display: "flex",
			gap: "1rem"
		},
		children: [iG(i5, {
			value: e.value,
			onValueChange: (t) => {
				e.value = t;
			}
		}), iH("div", { children: ["Inputted: ", e.value] })]
	}) });
});
function oe(e) {
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
	return iH(rj, { children: [
		iH(t.p, { children: [
			"和 ",
			iG(t.a, {
				href: "https://rxjs.dev/",
				children: "rxjs"
			}),
			" 集成"
		] }),
		"\n",
		iH(t.div, {
			"data-example": "",
			children: [iG(t.div, {
				"data-example-container": "",
				children: iG(t.codeblockd4735e3a, {})
			}), iG(t.pre, {
				className: "language-tsx",
				children: iH(t.code, {
					className: "language-tsx",
					children: [
						iG(t.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						iH(t.span, {
							className: "token imports",
							children: [
								iG(t.span, {
									className: "token punctuation",
									children: "{"
								}),
								"\n  component",
								iG(t.span, {
									className: "token punctuation",
									children: ","
								}),
								"\n  component$",
								iG(t.span, {
									className: "token punctuation",
									children: ","
								}),
								"\n  observableRef",
								iG(t.span, {
									className: "token punctuation",
									children: ","
								}),
								"\n  render",
								iG(t.span, {
									className: "token punctuation",
									children: ","
								}),
								"\n  rx",
								iG(t.span, {
									className: "token punctuation",
									children: ","
								}),
								"\n  subscribeUntilUnmount",
								iG(t.span, {
									className: "token punctuation",
									children: ","
								}),
								"\n",
								iG(t.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						iG(t.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						iG(t.span, {
							className: "token string",
							children: "\"@innoai-tech/vuekit\""
						}),
						iG(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						iG(t.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						iH(t.span, {
							className: "token imports",
							children: [
								iG(t.span, {
									className: "token punctuation",
									children: "{"
								}),
								" ref ",
								iG(t.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						iG(t.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						iG(t.span, {
							className: "token string",
							children: "\"vue\""
						}),
						iG(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						iG(t.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						iH(t.span, {
							className: "token imports",
							children: [
								iG(t.span, {
									className: "token punctuation",
									children: "{"
								}),
								" debounceTime ",
								iG(t.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						iG(t.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						iG(t.span, {
							className: "token string",
							children: "\"rxjs\""
						}),
						iG(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n",
						iG(t.span, {
							className: "token keyword module",
							children: "export"
						}),
						" ",
						iG(t.span, {
							className: "token keyword",
							children: "const"
						}),
						" ",
						iG(t.span, {
							className: "token maybe-class-name",
							children: "TextDebounceInput"
						}),
						" ",
						iG(t.span, {
							className: "token operator",
							children: "="
						}),
						" component$",
						iG(t.span, {
							className: "token operator",
							children: "<"
						}),
						iG(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n  value",
						iG(t.span, {
							className: "token operator",
							children: "?"
						}),
						iG(t.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						iG(t.span, {
							className: "token builtin",
							children: "string"
						}),
						iG(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n  onValueChange",
						iG(t.span, {
							className: "token operator",
							children: "?"
						}),
						iG(t.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						iG(t.span, {
							className: "token punctuation",
							children: "("
						}),
						"v",
						iG(t.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						iG(t.span, {
							className: "token builtin",
							children: "string"
						}),
						iG(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						iG(t.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						iG(t.span, {
							className: "token keyword",
							children: "void"
						}),
						iG(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						iG(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						iG(t.span, {
							className: "token operator",
							children: ">"
						}),
						iG(t.span, {
							className: "token punctuation",
							children: "("
						}),
						iG(t.span, {
							className: "token punctuation",
							children: "("
						}),
						"props",
						iG(t.span, {
							className: "token punctuation",
							children: ","
						}),
						" ",
						iG(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						" emit ",
						iG(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						iG(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						iG(t.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						iG(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n  ",
						iG(t.span, {
							className: "token keyword",
							children: "const"
						}),
						" value$ ",
						iG(t.span, {
							className: "token operator",
							children: "="
						}),
						" ",
						iG(t.span, {
							className: "token function",
							children: "observableRef"
						}),
						iG(t.span, {
							className: "token punctuation",
							children: "("
						}),
						"props",
						iG(t.span, {
							className: "token punctuation",
							children: "."
						}),
						iG(t.span, {
							className: "token property-access",
							children: "value"
						}),
						" ",
						iG(t.span, {
							className: "token operator",
							children: "??"
						}),
						" ",
						iG(t.span, {
							className: "token string",
							children: "\"1\""
						}),
						iG(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						iG(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n  ",
						iG(t.span, {
							className: "token function",
							children: "rx"
						}),
						iG(t.span, {
							className: "token punctuation",
							children: "("
						}),
						"\n    value$",
						iG(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n    ",
						iG(t.span, {
							className: "token function",
							children: "debounceTime"
						}),
						iG(t.span, {
							className: "token punctuation",
							children: "("
						}),
						iG(t.span, {
							className: "token number",
							children: "300"
						}),
						iG(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						iG(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n    ",
						iG(t.span, {
							className: "token function",
							children: "subscribeUntilUnmount"
						}),
						iG(t.span, {
							className: "token punctuation",
							children: "("
						}),
						iG(t.span, {
							className: "token punctuation",
							children: "("
						}),
						"v",
						iG(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						iG(t.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						iG(t.span, {
							className: "token function",
							children: "emit"
						}),
						iG(t.span, {
							className: "token punctuation",
							children: "("
						}),
						iG(t.span, {
							className: "token string",
							children: "\"value-change\""
						}),
						iG(t.span, {
							className: "token punctuation",
							children: ","
						}),
						" v",
						iG(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						iG(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						iG(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n  ",
						iG(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						iG(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n  ",
						iG(t.span, {
							className: "token keyword control-flow",
							children: "return"
						}),
						" ",
						iG(t.span, {
							className: "token function",
							children: "rx"
						}),
						iG(t.span, {
							className: "token punctuation",
							children: "("
						}),
						"\n    value$",
						iG(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n    ",
						iG(t.span, {
							className: "token function",
							children: "render"
						}),
						iG(t.span, {
							className: "token punctuation",
							children: "("
						}),
						iG(t.span, {
							className: "token punctuation",
							children: "("
						}),
						"v",
						iG(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						iG(t.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						iG(t.span, {
							className: "token punctuation",
							children: "("
						}),
						"\n      ",
						iH(t.span, {
							className: "token tag",
							children: [
								iH(t.span, {
									className: "token tag",
									children: [iG(t.span, {
										className: "token punctuation",
										children: "<"
									}), "input"]
								}),
								"\n        ",
								iG(t.span, {
									className: "token attr-name",
									children: "value"
								}),
								iH(t.span, {
									className: "token script language-javascript",
									children: [
										iG(t.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										iG(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										"v",
										iG(t.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n        ",
								iG(t.span, {
									className: "token attr-name",
									children: "onInput"
								}),
								iH(t.span, {
									className: "token script language-javascript",
									children: [
										iG(t.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										iG(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										iG(t.span, {
											className: "token punctuation",
											children: "("
										}),
										"e",
										iG(t.span, {
											className: "token punctuation",
											children: ")"
										}),
										" ",
										iG(t.span, {
											className: "token arrow operator",
											children: "=>"
										}),
										" ",
										iG(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										"\n          value$",
										iG(t.span, {
											className: "token punctuation",
											children: "."
										}),
										iG(t.span, {
											className: "token property-access",
											children: "value"
										}),
										" ",
										iG(t.span, {
											className: "token operator",
											children: "="
										}),
										" ",
										iG(t.span, {
											className: "token punctuation",
											children: "("
										}),
										"e",
										iG(t.span, {
											className: "token punctuation",
											children: "."
										}),
										iG(t.span, {
											className: "token property-access",
											children: "target"
										}),
										" ",
										iG(t.span, {
											className: "token keyword module",
											children: "as"
										}),
										" ",
										iG(t.span, {
											className: "token maybe-class-name",
											children: "HTMLInputElement"
										}),
										iG(t.span, {
											className: "token punctuation",
											children: ")"
										}),
										iG(t.span, {
											className: "token punctuation",
											children: "."
										}),
										iG(t.span, {
											className: "token property-access",
											children: "value"
										}),
										iG(t.span, {
											className: "token punctuation",
											children: ";"
										}),
										"\n        ",
										iG(t.span, {
											className: "token punctuation",
											children: "}"
										}),
										iG(t.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n      ",
								iG(t.span, {
									className: "token punctuation",
									children: "/>"
								})
							]
						}),
						"\n    ",
						iG(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						iG(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						iG(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n  ",
						iG(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						iG(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						iG(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						iG(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						iG(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n",
						iG(t.span, {
							className: "token keyword module",
							children: "export"
						}),
						" ",
						iG(t.span, {
							className: "token keyword module",
							children: "default"
						}),
						" ",
						iG(t.span, {
							className: "token function",
							children: "component"
						}),
						iG(t.span, {
							className: "token punctuation",
							children: "("
						}),
						iG(t.span, {
							className: "token punctuation",
							children: "("
						}),
						iG(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						iG(t.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						iG(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n  ",
						iG(t.span, {
							className: "token keyword",
							children: "const"
						}),
						" inputValue ",
						iG(t.span, {
							className: "token operator",
							children: "="
						}),
						" ",
						iG(t.span, {
							className: "token function",
							children: "ref"
						}),
						iG(t.span, {
							className: "token punctuation",
							children: "("
						}),
						iG(t.span, {
							className: "token string",
							children: "\"default\""
						}),
						iG(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						iG(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n  ",
						iG(t.span, {
							className: "token keyword control-flow",
							children: "return"
						}),
						" ",
						iG(t.span, {
							className: "token punctuation",
							children: "("
						}),
						iG(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						iG(t.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						iG(t.span, {
							className: "token punctuation",
							children: "("
						}),
						"\n    ",
						iH(t.span, {
							className: "token tag",
							children: [iH(t.span, {
								className: "token tag",
								children: [iG(t.span, {
									className: "token punctuation",
									children: "<"
								}), "div"]
							}), iG(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						iG(t.span, {
							className: "token plain-text",
							children: "\n      "
						}),
						iH(t.span, {
							className: "token tag",
							children: [
								iH(t.span, {
									className: "token tag",
									children: [iG(t.span, {
										className: "token punctuation",
										children: "<"
									}), "div"]
								}),
								" ",
								iG(t.span, {
									className: "token attr-name",
									children: "style"
								}),
								iH(t.span, {
									className: "token script language-javascript",
									children: [
										iG(t.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										iG(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										iG(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										" display",
										iG(t.span, {
											className: "token operator",
											children: ":"
										}),
										" ",
										iG(t.span, {
											className: "token string",
											children: "\"flex\""
										}),
										iG(t.span, {
											className: "token punctuation",
											children: ","
										}),
										" gap",
										iG(t.span, {
											className: "token operator",
											children: ":"
										}),
										" ",
										iG(t.span, {
											className: "token string",
											children: "\"1rem\""
										}),
										" ",
										iG(t.span, {
											className: "token punctuation",
											children: "}"
										}),
										iG(t.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								iG(t.span, {
									className: "token punctuation",
									children: ">"
								})
							]
						}),
						iG(t.span, {
							className: "token plain-text",
							children: "\n        "
						}),
						iH(t.span, {
							className: "token tag",
							children: [
								iH(t.span, {
									className: "token tag",
									children: [iG(t.span, {
										className: "token punctuation",
										children: "<"
									}), iG(t.span, {
										className: "token class-name",
										children: "TextDebounceInput"
									})]
								}),
								"\n          ",
								iG(t.span, {
									className: "token attr-name",
									children: "value"
								}),
								iH(t.span, {
									className: "token script language-javascript",
									children: [
										iG(t.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										iG(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										"inputValue",
										iG(t.span, {
											className: "token punctuation",
											children: "."
										}),
										iG(t.span, {
											className: "token property-access",
											children: "value"
										}),
										iG(t.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n          ",
								iG(t.span, {
									className: "token attr-name",
									children: "onValueChange"
								}),
								iH(t.span, {
									className: "token script language-javascript",
									children: [
										iG(t.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										iG(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										iG(t.span, {
											className: "token punctuation",
											children: "("
										}),
										"value",
										iG(t.span, {
											className: "token punctuation",
											children: ")"
										}),
										" ",
										iG(t.span, {
											className: "token arrow operator",
											children: "=>"
										}),
										" ",
										iG(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										"\n            inputValue",
										iG(t.span, {
											className: "token punctuation",
											children: "."
										}),
										iG(t.span, {
											className: "token property-access",
											children: "value"
										}),
										" ",
										iG(t.span, {
											className: "token operator",
											children: "="
										}),
										" value",
										iG(t.span, {
											className: "token punctuation",
											children: ";"
										}),
										"\n          ",
										iG(t.span, {
											className: "token punctuation",
											children: "}"
										}),
										iG(t.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n        ",
								iG(t.span, {
									className: "token punctuation",
									children: "/>"
								})
							]
						}),
						iG(t.span, {
							className: "token plain-text",
							children: "\n        "
						}),
						iH(t.span, {
							className: "token tag",
							children: [iH(t.span, {
								className: "token tag",
								children: [iG(t.span, {
									className: "token punctuation",
									children: "<"
								}), "div"]
							}), iG(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						iG(t.span, {
							className: "token plain-text",
							children: "Inputted: "
						}),
						iG(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						"inputValue",
						iG(t.span, {
							className: "token punctuation",
							children: "."
						}),
						iG(t.span, {
							className: "token property-access",
							children: "value"
						}),
						iG(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						iH(t.span, {
							className: "token tag",
							children: [iH(t.span, {
								className: "token tag",
								children: [iG(t.span, {
									className: "token punctuation",
									children: "</"
								}), "div"]
							}), iG(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						iG(t.span, {
							className: "token plain-text",
							children: "\n      "
						}),
						iH(t.span, {
							className: "token tag",
							children: [iH(t.span, {
								className: "token tag",
								children: [iG(t.span, {
									className: "token punctuation",
									children: "</"
								}), "div"]
							}), iG(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						iG(t.span, {
							className: "token plain-text",
							children: "\n    "
						}),
						iH(t.span, {
							className: "token tag",
							children: [iH(t.span, {
								className: "token tag",
								children: [iG(t.span, {
									className: "token punctuation",
									children: "</"
								}), "div"]
							}), iG(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						"\n  ",
						iG(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						iG(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						iG(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						iG(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						iG(t.span, {
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
function ot(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? iG(t, {
		...e,
		children: iG(oe, { ...e })
	}) : oe(e);
}
var on = ak(() => () => r2(ot, { components: { codeblockd4735e3a: i9 } }));
export { aC as $, lu as A, eA as At, sJ as B, es as Bt, lN as C, eD as Ct, lv as D, eT as Dt, lw as E, eF as Et, lf as F, eg as Ft, rj as G, sF as H, N as Ht, ly as I, eh as It, rL as J, at as K, lh as L, ef as Lt, lc as M, ew as Mt, lo as N, eb as Nt, ll as O, e$ as Ot, ld as P, eN as Pt, aP as Q, li as R, ed as Rt, lx as S, ez as St, l_ as T, eV as Tt, au as U, sK as V, _ as Vt, ai as W, ak as X, ro as Y, r2 as Z, iV as _, e5 as _t, iQ as a, tl as at, ie as b, eq as bt, iG as c, to as ct, iz as d, e8 as dt, aA as et, iW as f, e0 as ft, iD as g, e7 as gt, iI as h, tb as ht, iY as i, nP as it, lg as j, ex as jt, lm as k, eC as kt, iH as l, t_ as lt, iU as m, eY as mt, i7 as n, nO as nt, iZ as o, tc as ot, iB as p, e9 as pt, nL as q, i0 as r, nx as rt, iJ as s, e1 as st, on as t, rh as tt, iK as u, e3 as ut, iL as v, th as vt, lO as w, eL as wt, iF as x, eK as xt, iT as y, eH as yt, lk as z, ec as zt };
