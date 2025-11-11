import { t as e } from "./rolldown-runtime.D8qhy2Lt.chunk.js";
import { a as t, c as r, i as a, l as s, n as i, o, r as l, s as c, u } from "./vendor-rxjs.CsNJjMpf.chunk.js";
function p(e) {
	var t;
	return null != e && "function" != typeof e && Number.isSafeInteger(t = e.length) && t >= 0;
}
function d(e) {
	return e;
}
function f(e) {
	return "__proto__" === e;
}
function h(e) {
	switch (typeof e) {
		case "number":
		case "symbol": return !1;
		case "string": return e.includes(".") || e.includes("[") || e.includes("]");
	}
}
function m(e) {
	return "string" == typeof e || "symbol" == typeof e ? e : Object.is(e?.valueOf?.(), -0) ? "-0" : String(e);
}
function y(e) {
	if (null == e) return "";
	if ("string" == typeof e) return e;
	if (Array.isArray(e)) return e.map(y).join(",");
	let t = String(e);
	return "0" === t && Object.is(Number(e), -0) ? "-0" : t;
}
function g(e) {
	if (Array.isArray(e)) return e.map(m);
	if ("symbol" == typeof e) return [e];
	e = y(e);
	let t = [], r = e.length;
	if (0 === r) return t;
	let a = 0, s = "", i = "", o = !1;
	for (46 === e.charCodeAt(0) && (t.push(""), a++); a < r;) {
		let l = e[a];
		i ? "\\" === l && a + 1 < r ? s += e[++a] : l === i ? i = "" : s += l : o ? "\"" === l || "'" === l ? i = l : "]" === l ? (o = !1, t.push(s), s = "") : s += l : "[" === l ? (o = !0, s && (t.push(s), s = "")) : "." === l ? s && (t.push(s), s = "") : s += l, a++;
	}
	return s && t.push(s), t;
}
function k(e, t, r) {
	if (null == e) return r;
	switch (typeof t) {
		case "string": {
			if (f(t)) return r;
			let a = e[t];
			if (void 0 === a) if (h(t)) return k(e, g(t), r);
			else return r;
			return a;
		}
		case "number":
		case "symbol": {
			"number" == typeof t && (t = m(t));
			let a = e[t];
			if (void 0 === a) return r;
			return a;
		}
		default: {
			if (Array.isArray(t)) {
				var a = e, s = t, i = r;
				if (0 === s.length) return i;
				let o = a;
				for (let e = 0; e < s.length; e++) {
					if (null == o || f(s[e])) return i;
					o = o[s[e]];
				}
				return void 0 === o ? i : o;
			}
			if (f(t = Object.is(t?.valueOf(), -0) ? "-0" : String(t))) return r;
			let o = e[t];
			if (void 0 === o) return r;
			return o;
		}
	}
}
function b(e) {
	return function(t) {
		return k(t, e);
	};
}
function N(e) {
	return null !== e && ("object" == typeof e || "function" == typeof e);
}
function _(e) {
	return null == e || "object" != typeof e && "function" != typeof e;
}
function w(e, t) {
	return e === t || Number.isNaN(e) && Number.isNaN(t);
}
function x(e, t, r, a) {
	if (t === e) return !0;
	switch (typeof t) {
		case "object": return function(e, t, r, a) {
			if (null == t) return !0;
			if (Array.isArray(t)) return O(e, t, r, a);
			if (t instanceof Map) {
				var s, i, o, l, c = e, u = t, p = r, d = a;
				if (0 === u.size) return !0;
				if (!(c instanceof Map)) return !1;
				for (let [e, t] of u.entries()) if (!1 === p(c.get(e), t, e, c, u, d)) return !1;
				return !0;
			}
			if (t instanceof Set) return s = e, i = t, o = r, l = a, 0 === i.size || s instanceof Set && O([...s], [...i], o, l);
			let f = Object.keys(t);
			if (null == e) return 0 === f.length;
			if (0 === f.length) return !0;
			if (a?.has(t)) return a.get(t) === e;
			a?.set(t, e);
			try {
				for (let s = 0; s < f.length; s++) {
					let i = f[s];
					if (!_(e) && !(i in e) || void 0 === t[i] && void 0 !== e[i] || null === t[i] && null !== e[i] || !r(e[i], t[i], i, e, t, a)) return !1;
				}
				return !0;
			} finally {
				a?.delete(t);
			}
		}(e, t, r, a);
		case "function":
			if (Object.keys(t).length > 0) return x(e, { ...t }, r, a);
			return w(e, t);
		default:
			if (!N(e)) return w(e, t);
			if ("string" == typeof t) return "" === t;
			return !0;
	}
}
function O(e, t, r, a) {
	if (0 === t.length) return !0;
	if (!Array.isArray(e)) return !1;
	let s = /* @__PURE__ */ new Set();
	for (let i = 0; i < t.length; i++) {
		let o = t[i], l = !1;
		for (let c = 0; c < e.length; c++) {
			if (s.has(c)) continue;
			let u = e[c], p = !1;
			if (r(u, o, i, e, t, a) && (p = !0), p) {
				s.add(c), l = !0;
				break;
			}
		}
		if (!l) return !1;
	}
	return !0;
}
function S(e, t) {
	return function e(t, r, a) {
		return "function" != typeof a ? e(t, r, () => void 0) : x(t, r, function e(t, r, s, i, o, l) {
			let c = a(t, r, s, i, o, l);
			return void 0 !== c ? !!c : x(t, r, e, l);
		}, /* @__PURE__ */ new Map());
	}(e, t, () => void 0);
}
function j(e) {
	return Object.getOwnPropertySymbols(e).filter((t) => Object.prototype.propertyIsEnumerable.call(e, t));
}
function A(e) {
	return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e);
}
var E, P, C, T, I, R, M, $, D, V, L, F, B, U, z, G, W, K = "[object String]", q = "[object Number]", H = "[object Boolean]", Y = "[object Arguments]";
function J(e) {
	return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function X(e, t, r, a = /* @__PURE__ */ new Map(), s) {
	let i = s?.(e, t, r, a);
	if (void 0 !== i) return i;
	if (_(e)) return e;
	if (a.has(e)) return a.get(e);
	if (Array.isArray(e)) {
		let t = Array(e.length);
		a.set(e, t);
		for (let i = 0; i < e.length; i++) t[i] = X(e[i], i, r, a, s);
		return Object.hasOwn(e, "index") && (t.index = e.index), Object.hasOwn(e, "input") && (t.input = e.input), t;
	}
	if (e instanceof Date) return new Date(e.getTime());
	if (e instanceof RegExp) {
		let t = new RegExp(e.source, e.flags);
		return t.lastIndex = e.lastIndex, t;
	}
	if (e instanceof Map) {
		let t = /* @__PURE__ */ new Map();
		for (let [i, o] of (a.set(e, t), e)) t.set(i, X(o, i, r, a, s));
		return t;
	}
	if (e instanceof Set) {
		let t = /* @__PURE__ */ new Set();
		for (let i of (a.set(e, t), e)) t.add(X(i, void 0, r, a, s));
		return t;
	}
	if ("undefined" != typeof Buffer && Buffer.isBuffer(e)) return e.subarray();
	if (J(e)) {
		let t = new (Object.getPrototypeOf(e)).constructor(e.length);
		a.set(e, t);
		for (let i = 0; i < e.length; i++) t[i] = X(e[i], i, r, a, s);
		return t;
	}
	if (e instanceof ArrayBuffer || "undefined" != typeof SharedArrayBuffer && e instanceof SharedArrayBuffer) return e.slice(0);
	if (e instanceof DataView) {
		let t = new DataView(e.buffer.slice(0), e.byteOffset, e.byteLength);
		return a.set(e, t), Z(t, e, r, a, s), t;
	}
	if ("undefined" != typeof File && e instanceof File) {
		let t = new File([e], e.name, { type: e.type });
		return a.set(e, t), Z(t, e, r, a, s), t;
	}
	if ("undefined" != typeof Blob && e instanceof Blob) {
		let t = new Blob([e], { type: e.type });
		return a.set(e, t), Z(t, e, r, a, s), t;
	}
	if (e instanceof Error) {
		let t = new e.constructor();
		return a.set(e, t), t.message = e.message, t.name = e.name, t.stack = e.stack, t.cause = e.cause, Z(t, e, r, a, s), t;
	}
	if (e instanceof Boolean) {
		let t = new Boolean(e.valueOf());
		return a.set(e, t), Z(t, e, r, a, s), t;
	}
	if (e instanceof Number) {
		let t = new Number(e.valueOf());
		return a.set(e, t), Z(t, e, r, a, s), t;
	}
	if (e instanceof String) {
		let t = new String(e.valueOf());
		return a.set(e, t), Z(t, e, r, a, s), t;
	}
	if ("object" == typeof e && function(e) {
		switch (A(e)) {
			case Y:
			case "[object Array]":
			case "[object ArrayBuffer]":
			case "[object DataView]":
			case H:
			case "[object Date]":
			case "[object Float32Array]":
			case "[object Float64Array]":
			case "[object Int8Array]":
			case "[object Int16Array]":
			case "[object Int32Array]":
			case "[object Map]":
			case q:
			case "[object Object]":
			case "[object RegExp]":
			case "[object Set]":
			case K:
			case "[object Symbol]":
			case "[object Uint8Array]":
			case "[object Uint8ClampedArray]":
			case "[object Uint16Array]":
			case "[object Uint32Array]": return !0;
			default: return !1;
		}
	}(e)) {
		let t = Object.create(Object.getPrototypeOf(e));
		return a.set(e, t), Z(t, e, r, a, s), t;
	}
	return e;
}
function Z(e, t, r = e, a, s) {
	let i = [...Object.keys(t), ...j(t)];
	for (let o = 0; o < i.length; o++) {
		let l = i[o], c = Object.getOwnPropertyDescriptor(e, l);
		(null == c || c.writable) && (e[l] = X(t[l], l, r, a, s));
	}
}
function Q(e) {
	var t;
	return e = X(t = e, void 0, t, /* @__PURE__ */ new Map(), void 0), (t) => S(t, e);
}
function ee(e, t) {
	var r;
	return r = (r, a, s, i) => {
		let o = t?.(r, a, s, i);
		if (void 0 !== o) return o;
		if ("object" == typeof e) switch (Object.prototype.toString.call(e)) {
			case q:
			case K:
			case H: {
				let t = new e.constructor(e?.valueOf());
				return Z(t, e), t;
			}
			case Y: {
				let t = {};
				return Z(t, e), t.length = e.length, t[Symbol.iterator] = e[Symbol.iterator], t;
			}
			default: return;
		}
	}, X(e, void 0, e, /* @__PURE__ */ new Map(), r);
}
var et = /^(?:0|[1-9]\d*)$/;
function en(e, t = Number.MAX_SAFE_INTEGER) {
	switch (typeof e) {
		case "number": return Number.isInteger(e) && e >= 0 && e < t;
		case "symbol": return !1;
		case "string": return et.test(e);
	}
}
function er(e) {
	return null !== e && "object" == typeof e && "[object Arguments]" === A(e);
}
function ea(e, t) {
	let r;
	if (0 === (r = Array.isArray(t) ? t : "string" == typeof t && h(t) && e?.[t] == null ? g(t) : [t]).length) return !1;
	let a = e;
	for (let e = 0; e < r.length; e++) {
		let t = r[e];
		if ((null == a || !Object.hasOwn(a, t)) && !((Array.isArray(a) || er(a)) && en(t) && t < a.length)) return !1;
		a = a[t];
	}
	return !0;
}
function es(e, t) {
	switch (typeof e) {
		case "object":
			Object.is(e?.valueOf(), -0) && (e = "-0");
			break;
		case "number": e = m(e);
	}
	return t = ee(t), function(r) {
		let a = k(r, e);
		return void 0 === a ? ea(r, e) : void 0 === t ? void 0 === a : S(a, t);
	};
}
function ei(e) {
	if (null == e) return d;
	switch (typeof e) {
		case "function": return e;
		case "object":
			if (Array.isArray(e) && 2 === e.length) return es(e[0], e[1]);
			return Q(e);
		case "string":
		case "symbol":
		case "number": return b(e);
	}
}
function eo(e) {
	return "object" == typeof e && null !== e;
}
function el(e) {
	if (p(e)) {
		var t;
		return (t = Array.isArray(e) ? e : Array.from(e))[t.length - 1];
	}
}
function ec(e) {
	return "symbol" == typeof e || e instanceof Symbol;
}
function eu(e, t, r = 1) {
	if (t ?? (t = e, e = 0), !Number.isInteger(r) || 0 === r) throw Error("The step value must be a non-zero integer.");
	let a = Math.max(Math.ceil((t - e) / r), 0), s = Array(a);
	for (let t = 0; t < a; t++) s[t] = e + t * r;
	return s;
}
function ep(e) {
	return "string" == typeof e || e instanceof String;
}
function ed(e, t) {
	if (!e) return [];
	let r = p(e) || Array.isArray(e) ? eu(0, e.length) : Object.keys(e), a = ei(t ?? d), s = Array(r.length);
	for (let t = 0; t < r.length; t++) {
		let i = r[t], o = e[i];
		s[t] = a(o, i, e);
	}
	return s;
}
function ef(e, t) {
	return null == e ? {} : function(e, t) {
		let r = {};
		for (let a = 0; a < e.length; a++) {
			let s = e[a], i = t(s);
			Object.hasOwn(r, i) || (r[i] = []), r[i].push(s);
		}
		return r;
	}(p(e) ? Array.from(e) : Object.values(e), ei(t ?? d));
}
var eh = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, em = /^\w*$/;
function ev(e, t = d) {
	if (!e) return [[], []];
	let r = p(e) ? e : Object.values(e);
	t = ei(t);
	let a = [], s = [];
	for (let e = 0; e < r.length; e++) {
		let i = r[e];
		t(i) ? a.push(i) : s.push(i);
	}
	return [a, s];
}
function ey(e, t) {
	if (null == e) return !0;
	switch (typeof t) {
		case "symbol":
		case "number":
		case "object":
			if (Array.isArray(t)) return eg(e, t);
			if ("number" == typeof t ? t = m(t) : "object" == typeof t && (t = Object.is(t?.valueOf(), -0) ? "-0" : String(t)), f(t)) return !1;
			if (e?.[t] === void 0) return !0;
			try {
				return delete e[t], !0;
			} catch {
				return !1;
			}
		case "string":
			if (e?.[t] === void 0 && h(t)) return eg(e, g(t));
			if (f(t)) return !1;
			try {
				return delete e[t], !0;
			} catch {
				return !1;
			}
	}
}
function eg(e, t) {
	let r = 1 === t.length ? e : k(e, t.slice(0, -1)), a = t[t.length - 1];
	if (r?.[a] === void 0) return !0;
	if (f(a)) return !1;
	try {
		return delete r[a], !0;
	} catch {
		return !1;
	}
}
function ek(e) {
	return Array.isArray(e);
}
function eb(e, t, r) {
	if (!e) return !1;
	null != r && (t = void 0), t ??= d;
	let a = Array.isArray(e) ? e : Object.values(e);
	switch (typeof t) {
		case "function":
			if (!Array.isArray(e)) {
				let r = Object.keys(e);
				for (let a = 0; a < r.length; a++) {
					let s = r[a];
					if (t(e[s], s, e)) return !0;
				}
				return !1;
			}
			for (let r = 0; r < e.length; r++) if (t(e[r], r, e)) return !0;
			return !1;
		case "object":
			if (Array.isArray(t) && 2 === t.length) {
				let r = es(t[0], t[1]);
				if (Array.isArray(e)) {
					for (let t = 0; t < e.length; t++) if (r(e[t])) return !0;
					return !1;
				}
				return a.some(r);
			}
			{
				let r = Q(t);
				if (Array.isArray(e)) {
					for (let t = 0; t < e.length; t++) if (r(e[t])) return !0;
					return !1;
				}
				return a.some(r);
			}
		case "number":
		case "symbol":
		case "string": {
			let r = b(t);
			if (Array.isArray(e)) {
				for (let t = 0; t < e.length; t++) if (r(e[t])) return !0;
				return !1;
			}
			return a.some(r);
		}
	}
}
function eN(e) {
	return e;
}
function e_(e) {
	return "number" == typeof e || e instanceof Number;
}
var ew = (e, t, r) => {
	let a = e[t];
	Object.hasOwn(e, t) && w(a, r) && (void 0 !== r || t in e) || (e[t] = r);
};
function ex(e, t, r) {
	return function(e, t, r, a) {
		if (null == e && !N(e)) return e;
		let s = !Array.isArray(t) && ("number" == typeof t || "boolean" == typeof t || null == t || ec(t) || "string" == typeof t && (em.test(t) || !eh.test(t)) || null != e && Object.hasOwn(e, t)) ? [t] : Array.isArray(t) ? t : "string" == typeof t ? g(t) : [t], i = r(k(e, s)), o = e;
		for (let t = 0; t < s.length && null != o; t++) {
			let r, l = m(s[t]);
			if (!f(l)) {
				if (t === s.length - 1) r = i;
				else {
					let i = o[l], c = a?.(i, l, e);
					r = void 0 !== c ? c : N(i) ? i : en(s[t + 1]) ? [] : {};
				}
				ew(o, l, r), o = o[l];
			}
		}
		return e;
	}(e, t, () => r, () => void 0);
}
function eO(e) {
	return "undefined" != typeof Buffer && Buffer.isBuffer(e);
}
function eS(e) {
	let t = e?.constructor;
	return e === ("function" == typeof t ? t.prototype : Object.prototype);
}
function ej(e, t) {
	var r, a;
	let s, i;
	if ((e = (i = (s = (r = e) ? (r = ec(a = r) ? NaN : Number(a)) === Infinity || r === -Infinity ? (r < 0 ? -1 : 1) * Number.MAX_VALUE : r == r ? r : 0 : 0 === r ? r : 0) % 1) ? s - i : s) < 1 || !Number.isSafeInteger(e)) return [];
	let o = Array(e);
	for (let r = 0; r < e; r++) o[r] = "function" == typeof t ? t(r) : r;
	return o;
}
function eA(e) {
	if (p(e)) {
		var t;
		let r, a;
		return a = new Set(r = ej((t = e).length, (e) => `${e}`)), eO(t) && (a.add("offset"), a.add("parent")), J(t) && (a.add("buffer"), a.add("byteLength"), a.add("byteOffset")), [...r, ...Object.keys(t).filter((e) => !a.has(e))];
	}
	let r = Object.keys(Object(e));
	return eS(e) ? r.filter((e) => "constructor" !== e) : r;
}
function eE(e) {
	if (null == e) return [];
	switch (typeof e) {
		case "object":
		case "function":
			if (p(e)) {
				var t;
				let r, a;
				return a = new Set(r = ej((t = e).length, (e) => `${e}`)), eO(t) && (a.add("offset"), a.add("parent")), J(t) && (a.add("buffer"), a.add("byteLength"), a.add("byteOffset")), [...r, ...eP(t).filter((e) => !a.has(e))];
			}
			if (eS(e)) return eP(e).filter((e) => "constructor" !== e);
			return eP(e);
		default: return eP(Object(e));
	}
}
function eP(e) {
	let t = [];
	for (let r in e) t.push(r);
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
function eT(e, t = d) {
	return null == e ? {} : function(e, t) {
		let r = {}, a = Object.keys(e);
		for (let s = 0; s < a.length; s++) {
			let i = a[s], o = e[i];
			r[i] = t(o, i, e);
		}
		return r;
	}(e, ei(t));
}
function eI(e) {
	let t = [];
	for (; e;) t.push(...j(e)), e = Object.getPrototypeOf(e);
	return t;
}
function eR(e, ...t) {
	var r;
	if (null == e) return {};
	let a = (r = e, (t = function(e, t = 1) {
		let r = [], a = Math.floor(t);
		if (!p(e)) return r;
		let s = (e, t) => {
			for (let i = 0; i < e.length; i++) {
				let o = e[i];
				t < a && (Array.isArray(o) || o?.[Symbol.isConcatSpreadable] || null !== o && "object" == typeof o && "[object Arguments]" === Object.prototype.toString.call(o)) ? Array.isArray(o) ? s(o, t + 1) : s(Array.from(o), t + 1) : r.push(o);
			}
		};
		return s(Array.from(e), 0), r;
	}(t)).some((e) => Array.isArray(e) || h(e)) ? function(e) {
		let t = {}, r = [...eE(e), ...eI(e)];
		for (let a = 0; a < r.length; a++) {
			let s = r[a];
			t[s] = ee(e[s], (e) => {
				if (!eC(e)) return e;
			});
		}
		return t;
	}(r) : function(e) {
		let t = {}, r = [...eE(e), ...eI(e)];
		for (let a = 0; a < r.length; a++) {
			let s = r[a];
			t[s] = e[s];
		}
		return t;
	}(r));
	for (let e = 0; e < t.length; e++) {
		let r = t[e];
		switch (typeof r) {
			case "object":
				Array.isArray(r) || (r = Array.from(r));
				for (let e = 0; e < r.length; e++) ey(a, r[e]);
				break;
			case "string":
			case "symbol":
			case "number": ey(a, r);
		}
	}
	return a;
}
function eM(e, t) {
	if (null == e) return {};
	let r = ei(t ?? eN), a = {}, s = p(e) ? eu(0, e.length) : [...eE(e), ...eI(e)];
	for (let t = 0; t < s.length; t++) {
		let i = ec(s[t]) ? s[t] : s[t].toString(), o = e[i];
		r(o, i, e) && (a[i] = o);
	}
	return a;
}
function e$(e) {
	return "function" == typeof e;
}
function eD(e) {
	return void 0 === e;
}
function eV(e) {
	if (null == e) return !0;
	if (p(e)) return ("function" == typeof e.splice || "string" == typeof e || "undefined" != typeof Buffer && !!Buffer.isBuffer(e) || !!J(e) || !!er(e)) && 0 === e.length;
	if ("object" == typeof e) {
		if (e instanceof Map || e instanceof Set) return 0 === e.size;
		let t = Object.keys(e);
		return eS(e) ? 0 === t.filter((e) => "constructor" !== e).length : 0 === t.length;
	}
	return !0;
}
function eL(e) {
	return Number.isInteger(e);
}
var eF = /\p{Lu}?\p{Ll}+|[0-9]+|\p{Lu}+(?!\p{Ll})|\p{Emoji_Presentation}|\p{Extended_Pictographic}|\p{L}+/gu;
function eB(e) {
	return Array.from(e.match(eF) ?? []);
}
function eU(e) {
	return "string" != typeof e && (e = y(e)), e.replace(/['\u2019]/g, "");
}
function ez(e) {
	return function(e) {
		let t = eB(e);
		if (0 === t.length) return "";
		let [r, ...a] = t;
		return `${r.toLowerCase()}${a.map((e) => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase()).join("")}`;
	}(eU(e));
}
function eG(e) {
	return eB(eU(e)).map((e) => e.toLowerCase()).join("-");
}
function eW(e, t = 0, r = " ") {
	return y(e).padStart(t, r);
}
function eK(e) {
	var t;
	return (t = y(e)).substring(0, 1).toUpperCase() + t.substring(1);
}
function eq(e) {
	let t = Object.create(null);
	for (let r of e.split(",")) t[r] = 1;
	return (e) => e in t;
}
var eH = {}, eY = [], eJ = () => {}, eX = () => !1, eZ = (e) => 111 === e.charCodeAt(0) && 110 === e.charCodeAt(1) && (e.charCodeAt(2) > 122 || 97 > e.charCodeAt(2)), eQ = (e) => e.startsWith("onUpdate:"), e0 = Object.assign, e1 = (e, t) => {
	let r = e.indexOf(t);
	r > -1 && e.splice(r, 1);
}, e2 = Object.prototype.hasOwnProperty, e4 = (e, t) => e2.call(e, t), e3 = Array.isArray, e6 = (e) => "function" == typeof e, e8 = (e) => "string" == typeof e, e7 = (e) => "symbol" == typeof e, e5 = (e) => null !== e && "object" == typeof e, e9 = (e) => (e5(e) || e6(e)) && e6(e.then) && e6(e.catch), te = Object.prototype.toString, tt = (e) => e8(e) && "NaN" !== e && "-" !== e[0] && "" + parseInt(e, 10) === e, tn = eq(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), tr = (e) => {
	let t = Object.create(null);
	return (r) => t[r] || (t[r] = e(r));
}, ta = /-\w/g, ts = tr((e) => e.replace(ta, (e) => e.slice(1).toUpperCase())), ti = /\B([A-Z])/g, to = tr((e) => e.replace(ti, "-$1").toLowerCase()), tl = tr((e) => e.charAt(0).toUpperCase() + e.slice(1)), tc = tr((e) => e ? `on${tl(e)}` : ""), tu = (e, ...t) => {
	for (let r = 0; r < e.length; r++) e[r](...t);
}, tp = (e, t, r, a = !1) => {
	Object.defineProperty(e, t, {
		configurable: !0,
		enumerable: !1,
		writable: a,
		value: r
	});
}, td = (e) => {
	let t = parseFloat(e);
	return isNaN(t) ? e : t;
}, tf = (e) => {
	let t = e8(e) ? Number(e) : NaN;
	return isNaN(t) ? e : t;
}, th = () => E || (E = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {});
function tm(e) {
	if (e3(e)) {
		let t = {};
		for (let r = 0; r < e.length; r++) {
			let a = e[r], s = e8(a) ? function(e) {
				let t = {};
				return e.replace(tg, "").split(tv).forEach((e) => {
					if (e) {
						let r = e.split(ty);
						r.length > 1 && (t[r[0].trim()] = r[1].trim());
					}
				}), t;
			}(a) : tm(a);
			if (s) for (let e in s) t[e] = s[e];
		}
		return t;
	}
	if (e8(e) || e5(e)) return e;
}
var tv = /;(?![^(]*\))/g, ty = /:([^]+)/, tg = /\/\*[^]*?\*\//g;
function tk(e) {
	let t = "";
	if (e8(e)) t = e;
	else if (e3(e)) for (let r = 0; r < e.length; r++) {
		let a = tk(e[r]);
		a && (t += a + " ");
	}
	else if (e5(e)) for (let r in e) e[r] && (t += r + " ");
	return t.trim();
}
var tb = eq("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly");
function tN(e) {
	return !!e || "" === e;
}
var t_ = class {
	constructor(e = !1) {
		this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = P, !e && P && (this.index = (P.scopes || (P.scopes = [])).push(this) - 1);
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
			let t = P;
			try {
				return P = this, e();
			} finally {
				P = t;
			}
		}
	}
	on() {
		1 == ++this._on && (this.prevScope = P, P = this);
	}
	off() {
		this._on > 0 && 0 == --this._on && (P = this.prevScope, this.prevScope = void 0);
	}
	stop(e) {
		if (this._active) {
			let t, r;
			for (t = 0, this._active = !1, r = this.effects.length; t < r; t++) this.effects[t].stop();
			for (t = 0, this.effects.length = 0, r = this.cleanups.length; t < r; t++) this.cleanups[t]();
			if (this.cleanups.length = 0, this.scopes) {
				for (t = 0, r = this.scopes.length; t < r; t++) this.scopes[t].stop(!0);
				this.scopes.length = 0;
			}
			if (!this.detached && this.parent && !e) {
				let e = this.parent.scopes.pop();
				e && e !== this && (this.parent.scopes[this.index] = e, e.index = this.index);
			}
			this.parent = void 0;
		}
	}
}, tw = /* @__PURE__ */ new WeakSet(), tx = class {
	constructor(e) {
		this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, P && P.active && P.effects.push(this);
	}
	pause() {
		this.flags |= 64;
	}
	resume() {
		64 & this.flags && (this.flags &= -65, tw.has(this) && (tw.delete(this), this.trigger()));
	}
	notify() {
		(!(2 & this.flags) || 32 & this.flags) && (8 & this.flags || tS(this));
	}
	run() {
		if (!(1 & this.flags)) return this.fn();
		this.flags |= 2, tD(this), tA(this);
		let e = C, t = tI;
		C = this, tI = !0;
		try {
			return this.fn();
		} finally {
			tE(this), C = e, tI = t, this.flags &= -3;
		}
	}
	stop() {
		if (1 & this.flags) {
			for (let e = this.deps; e; e = e.nextDep) tT(e);
			this.deps = this.depsTail = void 0, tD(this), this.onStop && this.onStop(), this.flags &= -2;
		}
	}
	trigger() {
		64 & this.flags ? tw.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
	}
	runIfDirty() {
		tP(this) && this.run();
	}
	get dirty() {
		return tP(this);
	}
}, tO = 0;
function tS(e, t = !1) {
	if (e.flags |= 8, t) {
		e.next = I, I = e;
		return;
	}
	e.next = T, T = e;
}
function tj() {
	let e;
	if (!(--tO > 0)) {
		if (I) {
			let e = I;
			for (I = void 0; e;) {
				let t = e.next;
				e.next = void 0, e.flags &= -9, e = t;
			}
		}
		for (; T;) {
			let t = T;
			for (T = void 0; t;) {
				let r = t.next;
				if (t.next = void 0, t.flags &= -9, 1 & t.flags) try {
					t.trigger();
				} catch (t) {
					e || (e = t);
				}
				t = r;
			}
		}
		if (e) throw e;
	}
}
function tA(e) {
	for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function tE(e) {
	let t, r = e.depsTail, a = r;
	for (; a;) {
		let e = a.prevDep;
		-1 === a.version ? (a === r && (r = e), tT(a), function(e) {
			let { prevDep: t, nextDep: r } = e;
			t && (t.nextDep = r, e.prevDep = void 0), r && (r.prevDep = t, e.nextDep = void 0);
		}(a)) : t = a, a.dep.activeLink = a.prevActiveLink, a.prevActiveLink = void 0, a = e;
	}
	e.deps = t, e.depsTail = r;
}
function tP(e) {
	for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (tC(t.dep.computed) || t.dep.version !== t.version)) return !0;
	return !!e._dirty;
}
function tC(e) {
	if (4 & e.flags && !(16 & e.flags) || (e.flags &= -17, e.globalVersion === tV) || (e.globalVersion = tV, !e.isSSR && 128 & e.flags && (!e.deps && !e._dirty || !tP(e)))) return;
	e.flags |= 2;
	let t = e.dep, r = C, a = tI;
	C = e, tI = !0;
	try {
		let r;
		tA(e);
		let a = e.fn(e._value);
		(0 === t.version || (r = e._value, !Object.is(a, r))) && (e.flags |= 128, e._value = a, t.version++);
	} catch (e) {
		throw t.version++, e;
	} finally {
		C = r, tI = a, tE(e), e.flags &= -3;
	}
}
function tT(e, t = !1) {
	let { dep: r, prevSub: a, nextSub: s } = e;
	if (a && (a.nextSub = s, e.prevSub = void 0), s && (s.prevSub = a, e.nextSub = void 0), r.subs === e && (r.subs = a, !a && r.computed)) {
		r.computed.flags &= -5;
		for (let e = r.computed.deps; e; e = e.nextDep) tT(e, !0);
	}
	t || --r.sc || !r.map || r.map.delete(r.key);
}
var tI = !0, tR = [];
function tM() {
	tR.push(tI), tI = !1;
}
function t$() {
	let e = tR.pop();
	tI = void 0 === e || e;
}
function tD(e) {
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
var tV = 0, tL = class {
	constructor(e, t) {
		this.sub = e, this.dep = t, this.version = t.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
	}
}, tF = class {
	constructor(e) {
		this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
	}
	track(e) {
		if (!C || !tI || C === this.computed) return;
		let t = this.activeLink;
		if (void 0 === t || t.sub !== C) t = this.activeLink = new tL(C, this), C.deps ? (t.prevDep = C.depsTail, C.depsTail.nextDep = t, C.depsTail = t) : C.deps = C.depsTail = t, function e(t) {
			if (t.dep.sc++, 4 & t.sub.flags) {
				let r = t.dep.computed;
				if (r && !t.dep.subs) {
					r.flags |= 20;
					for (let t = r.deps; t; t = t.nextDep) e(t);
				}
				let a = t.dep.subs;
				a !== t && (t.prevSub = a, a && (a.nextSub = t)), t.dep.subs = t;
			}
		}(t);
		else if (-1 === t.version && (t.version = this.version, t.nextDep)) {
			let e = t.nextDep;
			e.prevDep = t.prevDep, t.prevDep && (t.prevDep.nextDep = e), t.prevDep = C.depsTail, t.nextDep = void 0, C.depsTail.nextDep = t, C.depsTail = t, C.deps === t && (C.deps = e);
		}
		return t;
	}
	trigger(e) {
		this.version++, tV++, this.notify(e);
	}
	notify(e) {
		tO++;
		try {
			for (let e = this.subs; e; e = e.prevSub) e.sub.notify() && e.sub.dep.notify();
		} finally {
			tj();
		}
	}
}, tB = /* @__PURE__ */ new WeakMap(), tU = Symbol(""), tz = Symbol(""), tG = Symbol("");
function tW(e, t, r) {
	if (tI && C) {
		let t = tB.get(e);
		t || tB.set(e, t = /* @__PURE__ */ new Map());
		let a = t.get(r);
		a || (t.set(r, a = new tF()), a.map = t, a.key = r), a.track();
	}
}
function tK(e, t, r, a, s, i) {
	let o = tB.get(e);
	if (!o) return void tV++;
	let l = (e) => {
		e && e.trigger();
	};
	if (tO++, "clear" === t) o.forEach(l);
	else {
		let s = e3(e), i = s && tt(r);
		if (s && "length" === r) {
			let e = Number(a);
			o.forEach((t, r) => {
				("length" === r || r === tG || !e7(r) && r >= e) && l(t);
			});
		} else switch ((void 0 !== r || o.has(void 0)) && l(o.get(r)), i && l(o.get(tG)), t) {
			case "add":
				if (s) i && l(o.get("length"));
				else {
					let t;
					l(o.get(tU));
					"[object Map]" === (t = e, te.call(t)) && l(o.get(tz));
				}
				break;
			case "delete":
				if (!s) {
					let t;
					l(o.get(tU));
					"[object Map]" === (t = e, te.call(t)) && l(o.get(tz));
				}
				break;
			case "set":
				let c;
				"[object Map]" === (c = e, te.call(c)) && l(o.get(tU));
		}
	}
	tj();
}
function tq(e) {
	let t = nk(e);
	return t === e ? t : (tW(t, "iterate", tG), ny(e) ? t : t.map(nb));
}
function tH(e) {
	return tW(e = nk(e), "iterate", tG), e;
}
var tY = {
	__proto__: null,
	[Symbol.iterator]() {
		return tJ(this, Symbol.iterator, nb);
	},
	concat(...e) {
		return tq(this).concat(...e.map((e) => e3(e) ? tq(e) : e));
	},
	entries() {
		return tJ(this, "entries", (e) => (e[1] = nb(e[1]), e));
	},
	every(e, t) {
		return tZ(this, "every", e, t, void 0, arguments);
	},
	filter(e, t) {
		return tZ(this, "filter", e, t, (e) => e.map(nb), arguments);
	},
	find(e, t) {
		return tZ(this, "find", e, t, nb, arguments);
	},
	findIndex(e, t) {
		return tZ(this, "findIndex", e, t, void 0, arguments);
	},
	findLast(e, t) {
		return tZ(this, "findLast", e, t, nb, arguments);
	},
	findLastIndex(e, t) {
		return tZ(this, "findLastIndex", e, t, void 0, arguments);
	},
	forEach(e, t) {
		return tZ(this, "forEach", e, t, void 0, arguments);
	},
	includes(...e) {
		return t0(this, "includes", e);
	},
	indexOf(...e) {
		return t0(this, "indexOf", e);
	},
	join(e) {
		return tq(this).join(e);
	},
	lastIndexOf(...e) {
		return t0(this, "lastIndexOf", e);
	},
	map(e, t) {
		return tZ(this, "map", e, t, void 0, arguments);
	},
	pop() {
		return t1(this, "pop");
	},
	push(...e) {
		return t1(this, "push", e);
	},
	reduce(e, ...t) {
		return tQ(this, "reduce", e, t);
	},
	reduceRight(e, ...t) {
		return tQ(this, "reduceRight", e, t);
	},
	shift() {
		return t1(this, "shift");
	},
	some(e, t) {
		return tZ(this, "some", e, t, void 0, arguments);
	},
	splice(...e) {
		return t1(this, "splice", e);
	},
	toReversed() {
		return tq(this).toReversed();
	},
	toSorted(e) {
		return tq(this).toSorted(e);
	},
	toSpliced(...e) {
		return tq(this).toSpliced(...e);
	},
	unshift(...e) {
		return t1(this, "unshift", e);
	},
	values() {
		return tJ(this, "values", nb);
	}
};
function tJ(e, t, r) {
	let a = tH(e), s = a[t]();
	return a === e || ny(e) || (s._next = s.next, s.next = () => {
		let e = s._next();
		return e.done || (e.value = r(e.value)), e;
	}), s;
}
var tX = Array.prototype;
function tZ(e, t, r, a, s, i) {
	let o = tH(e), l = o !== e && !ny(e), c = o[t];
	if (c !== tX[t]) {
		let t = c.apply(e, i);
		return l ? nb(t) : t;
	}
	let u = r;
	o !== e && (l ? u = function(t, a) {
		return r.call(this, nb(t), a, e);
	} : r.length > 2 && (u = function(t, a) {
		return r.call(this, t, a, e);
	}));
	let p = c.call(o, u, a);
	return l && s ? s(p) : p;
}
function tQ(e, t, r, a) {
	let s = tH(e), i = r;
	return s !== e && (ny(e) ? r.length > 3 && (i = function(t, a, s) {
		return r.call(this, t, a, s, e);
	}) : i = function(t, a, s) {
		return r.call(this, t, nb(a), s, e);
	}), s[t](i, ...a);
}
function t0(e, t, r) {
	let a = nk(e);
	tW(a, "iterate", tG);
	let s = a[t](...r);
	return (-1 === s || !1 === s) && ng(r[0]) ? (r[0] = nk(r[0]), a[t](...r)) : s;
}
function t1(e, t, r = []) {
	tM(), tO++;
	let a = nk(e)[t].apply(e, r);
	return tj(), t$(), a;
}
var t2 = eq("__proto__,__v_isRef,__isVue"), t4 = new Set(Object.getOwnPropertyNames(Symbol).filter((e) => "arguments" !== e && "caller" !== e).map((e) => Symbol[e]).filter(e7));
function t3(e) {
	e7(e) || (e = String(e));
	let t = nk(this);
	return tW(t, "has", e), t.hasOwnProperty(e);
}
var t6 = class {
	constructor(e = !1, t = !1) {
		this._isReadonly = e, this._isShallow = t;
	}
	get(e, t, r) {
		if ("__v_skip" === t) return e.__v_skip;
		let a = this._isReadonly, s = this._isShallow;
		if ("__v_isReactive" === t) return !a;
		if ("__v_isReadonly" === t) return a;
		if ("__v_isShallow" === t) return s;
		if ("__v_raw" === t) return r === (a ? s ? nu : nc : s ? nl : no).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(r) ? e : void 0;
		let i = e3(e);
		if (!a) {
			let e;
			if (i && (e = tY[t])) return e;
			if ("hasOwnProperty" === t) return t3;
		}
		let o = Reflect.get(e, t, n_(e) ? e : r);
		if ((e7(t) ? t4.has(t) : t2(t)) || (a || tW(e, "get", t), s)) return o;
		if (n_(o)) {
			let e = i && tt(t) ? o : o.value;
			return a && e5(e) ? nf(e) : e;
		}
		return e5(o) ? a ? nf(o) : np(o) : o;
	}
}, t8 = class extends t6 {
	constructor(e = !1) {
		super(!1, e);
	}
	set(e, t, r, a) {
		let s = e[t];
		if (!this._isShallow) {
			let t = nv(s);
			if (ny(r) || nv(r) || (s = nk(s), r = nk(r)), !e3(e) && n_(s) && !n_(r)) if (t) return !0;
			else return s.value = r, !0;
		}
		let i = e3(e) && tt(t) ? Number(t) < e.length : e4(e, t), o = Reflect.set(e, t, r, n_(e) ? e : a);
		return e === nk(a) && (i ? Object.is(r, s) || tK(e, "set", t, r, s) : tK(e, "add", t, r)), o;
	}
	deleteProperty(e, t) {
		let r = e4(e, t), a = e[t], s = Reflect.deleteProperty(e, t);
		return s && r && tK(e, "delete", t, void 0, a), s;
	}
	has(e, t) {
		let r = Reflect.has(e, t);
		return e7(t) && t4.has(t) || tW(e, "has", t), r;
	}
	ownKeys(e) {
		return tW(e, "iterate", e3(e) ? "length" : tU), Reflect.ownKeys(e);
	}
}, t7 = class extends t6 {
	constructor(e = !1) {
		super(!0, e);
	}
	set(e, t) {
		return !0;
	}
	deleteProperty(e, t) {
		return !0;
	}
}, t5 = new t8(), t9 = new t7(), ne = new t8(!0), nt = (e) => e;
function nn(e) {
	return function() {
		return "delete" !== e && ("clear" === e ? void 0 : this);
	};
}
function nr(e, t) {
	let r, a = (e0(r = {
		get(r) {
			let a = this.__v_raw, s = nk(a), i = nk(r);
			e || (Object.is(r, i) || tW(s, "get", r), tW(s, "get", i));
			let { has: o } = Reflect.getPrototypeOf(s), l = t ? nt : e ? nN : nb;
			return o.call(s, r) ? l(a.get(r)) : o.call(s, i) ? l(a.get(i)) : void (a !== s && a.get(r));
		},
		get size() {
			let t = this.__v_raw;
			return e || tW(nk(t), "iterate", tU), t.size;
		},
		has(t) {
			let r = this.__v_raw, a = nk(r), s = nk(t);
			return e || (Object.is(t, s) || tW(a, "has", t), tW(a, "has", s)), t === s ? r.has(t) : r.has(t) || r.has(s);
		},
		forEach(r, a) {
			let s = this, i = s.__v_raw, o = nk(i), l = t ? nt : e ? nN : nb;
			return e || tW(o, "iterate", tU), i.forEach((e, t) => r.call(a, l(e), l(t), s));
		}
	}, e ? {
		add: nn("add"),
		set: nn("set"),
		delete: nn("delete"),
		clear: nn("clear")
	} : {
		add(e) {
			t || ny(e) || nv(e) || (e = nk(e));
			let r = nk(this);
			return Reflect.getPrototypeOf(r).has.call(r, e) || (r.add(e), tK(r, "add", e, e)), this;
		},
		set(e, r) {
			t || ny(r) || nv(r) || (r = nk(r));
			let a = nk(this), { has: s, get: i } = Reflect.getPrototypeOf(a), o = s.call(a, e);
			o || (e = nk(e), o = s.call(a, e));
			let l = i.call(a, e);
			return (a.set(e, r), o) ? Object.is(r, l) || tK(a, "set", e, r, l) : tK(a, "add", e, r), this;
		},
		delete(e) {
			let t = nk(this), { has: r, get: a } = Reflect.getPrototypeOf(t), s = r.call(t, e);
			s || (e = nk(e), s = r.call(t, e));
			let i = a ? a.call(t, e) : void 0, o = t.delete(e);
			return s && tK(t, "delete", e, void 0, i), o;
		},
		clear() {
			let e = nk(this), t = 0 !== e.size, r = e.clear();
			return t && tK(e, "clear", void 0, void 0, void 0), r;
		}
	}), [
		"keys",
		"values",
		"entries",
		Symbol.iterator
	].forEach((a) => {
		r[a] = function(...r) {
			let s, i = this.__v_raw, o = nk(i), l = "[object Map]" === (s = o, te.call(s)), c = "entries" === a || a === Symbol.iterator && l, u = i[a](...r), p = t ? nt : e ? nN : nb;
			return e || tW(o, "iterate", "keys" === a && l ? tz : tU), {
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
	}), r);
	return (t, r, s) => "__v_isReactive" === r ? !e : "__v_isReadonly" === r ? e : "__v_raw" === r ? t : Reflect.get(e4(a, r) && r in t ? a : t, r, s);
}
var na = { get: nr(!1, !1) }, ns = { get: nr(!1, !0) }, ni = { get: nr(!0, !1) }, no = /* @__PURE__ */ new WeakMap(), nl = /* @__PURE__ */ new WeakMap(), nc = /* @__PURE__ */ new WeakMap(), nu = /* @__PURE__ */ new WeakMap();
function np(e) {
	return nv(e) ? e : nh(e, !1, t5, na, no);
}
function nd(e) {
	return nh(e, !1, ne, ns, nl);
}
function nf(e) {
	return nh(e, !0, t9, ni, nc);
}
function nh(e, t, r, a, s) {
	var i;
	let o;
	if (!e5(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
	let l = (i = e).__v_skip || !Object.isExtensible(i) ? 0 : function(e) {
		switch (e) {
			case "Object":
			case "Array": return 1;
			case "Map":
			case "Set":
			case "WeakMap":
			case "WeakSet": return 2;
			default: return 0;
		}
	}((o = i, te.call(o)).slice(8, -1));
	if (0 === l) return e;
	let c = s.get(e);
	if (c) return c;
	let u = new Proxy(e, 2 === l ? a : r);
	return s.set(e, u), u;
}
function nm(e) {
	return nv(e) ? nm(e.__v_raw) : !!(e && e.__v_isReactive);
}
function nv(e) {
	return !!(e && e.__v_isReadonly);
}
function ny(e) {
	return !!(e && e.__v_isShallow);
}
function ng(e) {
	return !!e && !!e.__v_raw;
}
function nk(e) {
	let t = e && e.__v_raw;
	return t ? nk(t) : e;
}
var nb = (e) => e5(e) ? np(e) : e, nN = (e) => e5(e) ? nf(e) : e;
function n_(e) {
	return !!e && !0 === e.__v_isRef;
}
function nw(e) {
	return nO(e, !1);
}
function nx(e) {
	return nO(e, !0);
}
function nO(e, t) {
	return n_(e) ? e : new nS(e, t);
}
var nS = class {
	constructor(e, t) {
		this.dep = new tF(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = t ? e : nk(e), this._value = t ? e : nb(e), this.__v_isShallow = t;
	}
	get value() {
		return this.dep.track(), this._value;
	}
	set value(e) {
		let t = this._rawValue, r = this.__v_isShallow || ny(e) || nv(e);
		Object.is(e = r ? e : nk(e), t) || (this._rawValue = e, this._value = r ? e : nb(e), this.dep.trigger());
	}
};
function nj(e) {
	return n_(e) ? e.value : e;
}
var nA = {
	get: (e, t, r) => "__v_raw" === t ? e : nj(Reflect.get(e, t, r)),
	set: (e, t, r, a) => {
		let s = e[t];
		return n_(s) && !n_(r) ? (s.value = r, !0) : Reflect.set(e, t, r, a);
	}
};
function nE(e) {
	return nm(e) ? e : new Proxy(e, nA);
}
var nP = class {
	constructor(e) {
		this.__v_isRef = !0, this._value = void 0;
		let t = this.dep = new tF(), { get: r, set: a } = e(t.track.bind(t), t.trigger.bind(t));
		this._get = r, this._set = a;
	}
	get value() {
		return this._value = this._get();
	}
	set value(e) {
		this._set(e);
	}
}, nC = class {
	constructor(e, t, r) {
		this.fn = e, this.setter = t, this._value = void 0, this.dep = new tF(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = tV - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = r;
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
}, nT = {}, nI = /* @__PURE__ */ new WeakMap(), nR = void 0;
function nM(e, t = Infinity, r) {
	if (t <= 0 || !e5(e) || e.__v_skip || ((r = r || /* @__PURE__ */ new Map()).get(e) || 0) >= t) return e;
	if (r.set(e, t), t--, n_(e)) nM(e.value, t, r);
	else if (e3(e)) for (let a = 0; a < e.length; a++) nM(e[a], t, r);
	else {
		let a, s;
		if ("[object Set]" === (a = e, te.call(a)) || "[object Map]" === (s = e, te.call(s))) e.forEach((e) => {
			nM(e, t, r);
		});
		else {
			let a;
			if ("[object Object]" === (a = e, te.call(a))) {
				for (let a in e) nM(e[a], t, r);
				for (let a of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, a) && nM(e[a], t, r);
			}
		}
	}
	return e;
}
function n$(e, t, r, a) {
	try {
		return a ? e(...a) : e();
	} catch (e) {
		nV(e, t, r);
	}
}
function nD(e, t, r, a) {
	if (e6(e)) {
		let s = n$(e, t, r, a);
		return s && e9(s) && s.catch((e) => {
			nV(e, t, r);
		}), s;
	}
	if (e3(e)) {
		let s = [];
		for (let i = 0; i < e.length; i++) s.push(nD(e[i], t, r, a));
		return s;
	}
}
function nV(e, t, r, a = !0) {
	t && t.vnode;
	let { errorHandler: i, throwUnhandledErrorInProduction: o } = t && t.appContext.config || eH;
	if (t) {
		let a = t.parent, s = t.proxy, o = `https://vuejs.org/error-reference/#runtime-${r}`;
		for (; a;) {
			let t = a.ec;
			if (t) {
				for (let r = 0; r < t.length; r++) if (!1 === t[r](e, s, o)) return;
			}
			a = a.parent;
		}
		if (i) {
			tM(), n$(i, null, 10, [
				e,
				s,
				o
			]), t$();
			return;
		}
	}
	(function(e, t, r, a = !0, s = !1) {
		if (s) throw e;
		console.error(e);
	})(e, 0, 0, a, o);
}
var nL = [], nF = -1, nB = [], nU = null, nz = 0, nG = Promise.resolve(), nW = null;
function nK(e) {
	let t = nW || nG;
	return e ? t.then(this ? e.bind(this) : e) : t;
}
function nq(e) {
	if (!(1 & e.flags)) {
		let t = nX(e), r = nL[nL.length - 1];
		!r || !(2 & e.flags) && t >= nX(r) ? nL.push(e) : nL.splice(function(e) {
			let t = nF + 1, r = nL.length;
			for (; t < r;) {
				let a = t + r >>> 1, s = nL[a], i = nX(s);
				i < e || i === e && 2 & s.flags ? t = a + 1 : r = a;
			}
			return t;
		}(t), 0, e), e.flags |= 1, nH();
	}
}
function nH() {
	nW || (nW = nG.then(function e(t) {
		try {
			for (nF = 0; nF < nL.length; nF++) {
				let e = nL[nF];
				e && !(8 & e.flags) && (4 & e.flags && (e.flags &= -2), n$(e, e.i, e.i ? 15 : 14), 4 & e.flags || (e.flags &= -2));
			}
		} finally {
			for (; nF < nL.length; nF++) {
				let e = nL[nF];
				e && (e.flags &= -2);
			}
			nF = -1, nL.length = 0, nJ(t), nW = null, (nL.length || nB.length) && e(t);
		}
	}));
}
function nY(e, t, r = nF + 1) {
	for (; r < nL.length; r++) {
		let t = nL[r];
		if (t && 2 & t.flags) {
			if (e && t.id !== e.uid) continue;
			nL.splice(r, 1), r--, 4 & t.flags && (t.flags &= -2), t(), 4 & t.flags || (t.flags &= -2);
		}
	}
}
function nJ(e) {
	if (nB.length) {
		let e = [...new Set(nB)].sort((e, t) => nX(e) - nX(t));
		if (nB.length = 0, nU) return void nU.push(...e);
		for (nz = 0, nU = e; nz < nU.length; nz++) {
			let e = nU[nz];
			4 & e.flags && (e.flags &= -2), 8 & e.flags || e(), e.flags &= -2;
		}
		nU = null, nz = 0;
	}
}
var nX = (e) => null == e.id ? 2 & e.flags ? -1 : Infinity : e.id, nZ = null, nQ = null;
function n0(e) {
	let t = nZ;
	return nZ = e, nQ = e && e.type.__scopeId || null, t;
}
function n1(e, t, r, a) {
	let s = e.dirs, i = t && t.dirs;
	for (let o = 0; o < s.length; o++) {
		let l = s[o];
		i && (l.oldValue = i[o].value);
		let c = l.dir[a];
		c && (tM(), nD(c, r, 8, [
			e.el,
			l,
			e,
			t
		]), t$());
	}
}
var n2 = Symbol("_vte"), n4 = (e) => e && (e.disabled || "" === e.disabled), n3 = (e) => e && (e.defer || "" === e.defer), n6 = (e) => "undefined" != typeof SVGElement && e instanceof SVGElement, n8 = (e) => "function" == typeof MathMLElement && e instanceof MathMLElement, n7 = (e, t) => {
	let r = e && e.to;
	return e8(r) ? t ? t(r) : null : r;
}, n5 = {
	name: "Teleport",
	__isTeleport: !0,
	process(e, t, r, a, s, i, o, l, c, u) {
		let { mc: p, pc: d, pbc: f, o: { insert: h, querySelector: m, createText: y, createComment: g } } = u, k = n4(t.props), { shapeFlag: b, children: N, dynamicChildren: _ } = t;
		if (null == e) {
			let e = t.el = y(""), u = t.anchor = y("");
			h(e, r, a), h(u, r, a);
			let d = (e, t) => {
				16 & b && p(N, e, t, s, i, o, l, c);
			}, f = () => {
				let e = t.target = n7(t.props, m), r = rn(e, t, y, h);
				e && ("svg" !== o && n6(e) ? o = "svg" : "mathml" !== o && n8(e) && (o = "mathml"), s && s.isCE && (s.ce._teleportTargets || (s.ce._teleportTargets = /* @__PURE__ */ new Set())).add(e), k || (d(e, r), rt(t, !1)));
			};
			k && (d(r, u), rt(t, !0)), n3(t.props) ? (t.el.__isMounted = !1, ai(() => {
				f(), delete t.el.__isMounted;
			}, i)) : f();
		} else {
			if (n3(t.props) && !1 === e.el.__isMounted) return void ai(() => {
				n5.process(e, t, r, a, s, i, o, l, c, u);
			}, i);
			t.el = e.el, t.targetStart = e.targetStart;
			let p = t.anchor = e.anchor, h = t.target = e.target, y = t.targetAnchor = e.targetAnchor, g = n4(e.props), b = g ? r : h, N = g ? p : y;
			if ("svg" === o || n6(h) ? o = "svg" : ("mathml" === o || n8(h)) && (o = "mathml"), _ ? (f(e.dynamicChildren, _, b, s, i, o, l), au(e, t, !0)) : c || d(e, t, b, N, s, i, o, l, !1), k) g ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : n9(t, r, p, u, 1);
			else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
				let e = t.target = n7(t.props, m);
				e && n9(t, e, null, u, 0);
			} else g && n9(t, h, y, u, 1);
			rt(t, k);
		}
	},
	remove(e, t, r, { um: a, o: { remove: s } }, i) {
		let { shapeFlag: o, children: l, anchor: c, targetStart: u, targetAnchor: p, target: d, props: f } = e;
		if (d && (s(u), s(p)), i && s(c), 16 & o) {
			let e = i || !n4(f);
			for (let s = 0; s < l.length; s++) {
				let i = l[s];
				a(i, t, r, e, !!i.dynamicChildren);
			}
		}
	},
	move: n9,
	hydrate: function(e, t, r, a, s, i, { o: { nextSibling: o, parentNode: l, querySelector: c, insert: u, createText: p } }, d) {
		function f(e, t, c, u) {
			t.anchor = d(o(e), t, l(e), r, a, s, i), t.targetStart = c, t.targetAnchor = u;
		}
		let h = t.target = n7(t.props, c), m = n4(t.props);
		if (h) {
			let l = h._lpa || h.firstChild;
			if (16 & t.shapeFlag) if (m) f(e, t, l, l && o(l));
			else {
				t.anchor = o(e);
				let c = l;
				for (; c;) {
					if (c && 8 === c.nodeType) {
						if ("teleport start anchor" === c.data) t.targetStart = c;
						else if ("teleport anchor" === c.data) {
							t.targetAnchor = c, h._lpa = t.targetAnchor && o(t.targetAnchor);
							break;
						}
					}
					c = o(c);
				}
				t.targetAnchor || rn(h, t, p, u), d(l && o(l), t, h, r, a, s, i);
			}
			rt(t, m);
		} else m && 16 & t.shapeFlag && f(e, t, e, o(e));
		return t.anchor && o(t.anchor);
	}
};
function n9(e, t, r, { o: { insert: a }, m: s }, i = 2) {
	0 === i && a(e.targetAnchor, t, r);
	let { el: o, anchor: l, shapeFlag: c, children: u, props: p } = e, d = 2 === i;
	if (d && a(o, t, r), (!d || n4(p)) && 16 & c) for (let e = 0; e < u.length; e++) s(u[e], t, r, 2);
	d && a(l, t, r);
}
var re = n5;
function rt(e, t) {
	let r = e.ctx;
	if (r && r.ut) {
		let a, s;
		for (t ? (a = e.el, s = e.anchor) : (a = e.targetStart, s = e.targetAnchor); a && a !== s;) 1 === a.nodeType && a.setAttribute("data-v-owner", r.uid), a = a.nextSibling;
		r.ut();
	}
}
function rn(e, t, r, a) {
	let s = t.targetStart = r(""), i = t.targetAnchor = r("");
	return s[n2] = i, e && (a(s, e), a(i, e)), i;
}
var rr = Symbol("_leaveCb"), ra = Symbol("_enterCb"), rs = [Function, Array], ri = {
	mode: String,
	appear: Boolean,
	persisted: Boolean,
	onBeforeEnter: rs,
	onEnter: rs,
	onAfterEnter: rs,
	onEnterCancelled: rs,
	onBeforeLeave: rs,
	onLeave: rs,
	onAfterLeave: rs,
	onLeaveCancelled: rs,
	onBeforeAppear: rs,
	onAppear: rs,
	onAfterAppear: rs,
	onAppearCancelled: rs
}, ro = (e) => {
	let t = e.subTree;
	return t.component ? ro(t.component) : t;
};
function rl(e) {
	let t = e[0];
	if (e.length > 1) {
		for (let r of e) if (r.type !== aj) {
			t = r;
			break;
		}
	}
	return t;
}
var rc = {
	name: "BaseTransition",
	props: ri,
	setup(e, { slots: t }) {
		let r, a = aW(), s = (r = {
			isMounted: !1,
			isLeaving: !1,
			isUnmounting: !1,
			leavingVNodes: /* @__PURE__ */ new Map()
		}, rA(() => {
			r.isMounted = !0;
		}), rC(() => {
			r.isUnmounting = !0;
		}), r);
		return () => {
			let r = t.default && function e(t, r = !1, a) {
				let s = [], i = 0;
				for (let o = 0; o < t.length; o++) {
					let l = t[o], c = null == a ? l.key : String(a) + String(null != l.key ? l.key : o);
					l.type === aO ? (128 & l.patchFlag && i++, s = s.concat(e(l.children, r, c))) : (r || l.type !== aj) && s.push(null != c ? aD(l, { key: c }) : l);
				}
				if (i > 1) for (let e = 0; e < s.length; e++) s[e].patchFlag = -2;
				return s;
			}(t.default(), !0);
			if (!r || !r.length) return;
			let i = rl(r), o = nk(e), { mode: l } = o;
			if (s.isLeaving) return rd(i);
			let c = rf(i);
			if (!c) return rd(i);
			let u = rp(c, o, s, a, (e) => u = e);
			c.type !== aj && rh(c, u);
			let p = a.subTree && rf(a.subTree);
			if (p && p.type !== aj && !aI(p, c) && ro(a).type !== aj) {
				let e = rp(p, o, s, a);
				if (rh(p, e), "out-in" === l && c.type !== aj) return s.isLeaving = !0, e.afterLeave = () => {
					s.isLeaving = !1, 8 & a.job.flags || a.update(), delete e.afterLeave, p = void 0;
				}, rd(i);
				"in-out" === l && c.type !== aj ? e.delayLeave = (e, t, r) => {
					ru(s, p)[String(p.key)] = p, e[rr] = () => {
						t(), e[rr] = void 0, delete u.delayedLeave, p = void 0;
					}, u.delayedLeave = () => {
						r(), delete u.delayedLeave, p = void 0;
					};
				} : p = void 0;
			} else p && (p = void 0);
			return i;
		};
	}
};
function ru(e, t) {
	let { leavingVNodes: r } = e, a = r.get(t.type);
	return a || (a = Object.create(null), r.set(t.type, a)), a;
}
function rp(e, t, r, a, s) {
	let { appear: i, mode: o, persisted: l = !1, onBeforeEnter: c, onEnter: u, onAfterEnter: p, onEnterCancelled: d, onBeforeLeave: f, onLeave: h, onAfterLeave: m, onLeaveCancelled: y, onBeforeAppear: g, onAppear: k, onAfterAppear: b, onAppearCancelled: N } = t, _ = String(e.key), w = ru(r, e), x = (e, t) => {
		e && nD(e, a, 9, t);
	}, O = (e, t) => {
		let r = t[1];
		x(e, t), e3(e) ? e.every((e) => e.length <= 1) && r() : e.length <= 1 && r();
	}, S = {
		mode: o,
		persisted: l,
		beforeEnter(t) {
			let a = c;
			if (!r.isMounted) if (!i) return;
			else a = g || c;
			t[rr] && t[rr](!0);
			let s = w[_];
			s && aI(e, s) && s.el[rr] && s.el[rr](), x(a, [t]);
		},
		enter(e) {
			let t = u, a = p, s = d;
			if (!r.isMounted) if (!i) return;
			else t = k || u, a = b || p, s = N || d;
			let o = !1, l = e[ra] = (t) => {
				o || (o = !0, t ? x(s, [e]) : x(a, [e]), S.delayedLeave && S.delayedLeave(), e[ra] = void 0);
			};
			t ? O(t, [e, l]) : l();
		},
		leave(t, a) {
			let s = String(e.key);
			if (t[ra] && t[ra](!0), r.isUnmounting) return a();
			x(f, [t]);
			let i = !1, o = t[rr] = (r) => {
				i || (i = !0, a(), r ? x(y, [t]) : x(m, [t]), t[rr] = void 0, w[s] === e && delete w[s]);
			};
			w[s] = e, h ? O(h, [t, o]) : o();
		},
		clone(e) {
			let i = rp(e, t, r, a, s);
			return s && s(i), i;
		}
	};
	return S;
}
function rd(e) {
	if (rN(e)) return (e = aD(e)).children = null, e;
}
function rf(e) {
	if (!rN(e)) return e.type.__isTeleport && e.children ? rl(e.children) : e;
	if (e.component) return e.component.subTree;
	let { shapeFlag: t, children: r } = e;
	if (r) {
		if (16 & t) return r[0];
		if (32 & t && e6(r.default)) return r.default();
	}
}
function rh(e, t) {
	6 & e.shapeFlag && e.component ? (e.transition = t, rh(e.component.subTree, t)) : 128 & e.shapeFlag ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function rm(e, t) {
	return e6(e) ? e0({ name: e.name }, t, { setup: e }) : e;
}
function rv(e) {
	e.ids = [
		e.ids[0] + e.ids[2]++ + "-",
		0,
		0
	];
}
var ry = /* @__PURE__ */ new WeakMap();
function rg(e, t, r, a, s = !1) {
	if (e3(e)) return void e.forEach((e, i) => rg(e, t && (e3(t) ? t[i] : t), r, a, s));
	if (rb(a) && !s) {
		512 & a.shapeFlag && a.type.__asyncResolved && a.component.subTree.component && rg(e, t, r, a.component.subTree);
		return;
	}
	let i = 4 & a.shapeFlag ? aQ(a.component) : a.el, o = s ? null : i, { i: l, r: c } = e, u = t && t.r, p = l.refs === eH ? l.refs = {} : l.refs, d = l.setupState, f = nk(d), h = d === eH ? eX : (e) => e4(f, e);
	if (null != u && u !== c && ((rk(t), e8(u)) ? (p[u] = null, h(u) && (d[u] = null)) : n_(u) && (u.value = null, t.k && (p[t.k] = null))), e6(c)) n$(c, l, 12, [o, p]);
	else {
		let t = e8(c), a = n_(c);
		if (t || a) {
			let l = () => {
				if (e.f) {
					let r = t ? h(c) ? d[c] : p[c] : c.value;
					if (s) e3(r) && e1(r, i);
					else if (e3(r)) r.includes(i) || r.push(i);
					else if (t) p[c] = [i], h(c) && (d[c] = p[c]);
					else {
						let t = [i];
						c.value = t, e.k && (p[e.k] = t);
					}
				} else t ? (p[c] = o, h(c) && (d[c] = o)) : a && (c.value = o, e.k && (p[e.k] = o));
			};
			if (o) {
				let t = () => {
					l(), ry.delete(e);
				};
				t.id = -1, ry.set(e, t), ai(t, r);
			} else rk(e), l();
		}
	}
}
function rk(e) {
	let t = ry.get(e);
	t && (t.flags |= 8, ry.delete(e));
}
th().requestIdleCallback, th().cancelIdleCallback;
var rb = (e) => !!e.type.__asyncLoader, rN = (e) => e.type.__isKeepAlive;
function r_(e, t) {
	rx(e, "a", t);
}
function rw(e, t) {
	rx(e, "da", t);
}
function rx(e, t, r = aG) {
	let a = e.__wdc || (e.__wdc = () => {
		let t = r;
		for (; t;) {
			if (t.isDeactivated) return;
			t = t.parent;
		}
		return e();
	});
	if (rO(t, a, r), r) {
		let e = r.parent;
		for (; e && e.parent;) rN(e.parent.vnode) && function(e, t, r, a) {
			let s = rO(t, e, a, !0);
			rT(() => {
				e1(a[t], s);
			}, r);
		}(a, t, r, e), e = e.parent;
	}
}
function rO(e, t, r = aG, a = !1) {
	if (r) {
		let s = r[e] || (r[e] = []), i = t.__weh || (t.__weh = (...a) => {
			tM();
			let s = aK(r), i = nD(t, r, e, a);
			return s(), t$(), i;
		});
		return a ? s.unshift(i) : s.push(i), i;
	}
}
var rS = (e) => (t, r = aG) => {
	aY && "sp" !== e || rO(e, (...e) => t(...e), r);
}, rj = rS("bm"), rA = rS("m"), rE = rS("bu"), rP = rS("u"), rC = rS("bum"), rT = rS("um"), rI = rS("sp"), rR = rS("rtg"), rM = rS("rtc");
function r$(e, t = aG) {
	rO("ec", e, t);
}
var rD = Symbol.for("v-ndc"), rV = (e) => e ? aH(e) ? aQ(e) : rV(e.parent) : null, rL = e0(Object.create(null), {
	$: (e) => e,
	$el: (e) => e.vnode.el,
	$data: (e) => e.data,
	$props: (e) => e.props,
	$attrs: (e) => e.attrs,
	$slots: (e) => e.slots,
	$refs: (e) => e.refs,
	$parent: (e) => rV(e.parent),
	$root: (e) => rV(e.root),
	$host: (e) => e.ce,
	$emit: (e) => e.emit,
	$options: (e) => rW(e),
	$forceUpdate: (e) => e.f || (e.f = () => {
		nq(e.update);
	}),
	$nextTick: (e) => e.n || (e.n = nK.bind(e.proxy)),
	$watch: (e) => am.bind(e)
}), rF = (e, t) => e !== eH && !e.__isScriptSetup && e4(e, t), rB = {
	get({ _: e }, t) {
		let r, a, s;
		if ("__v_skip" === t) return !0;
		let { ctx: i, setupState: o, data: l, props: c, accessCache: u, type: p, appContext: d } = e;
		if ("$" !== t[0]) {
			let a = u[t];
			if (void 0 !== a) switch (a) {
				case 1: return o[t];
				case 2: return l[t];
				case 4: return i[t];
				case 3: return c[t];
			}
			else {
				if (rF(o, t)) return u[t] = 1, o[t];
				if (l !== eH && e4(l, t)) return u[t] = 2, l[t];
				if ((r = e.propsOptions[0]) && e4(r, t)) return u[t] = 3, c[t];
				if (i !== eH && e4(i, t)) return u[t] = 4, i[t];
				rz && (u[t] = 0);
			}
		}
		let f = rL[t];
		return f ? ("$attrs" === t && tW(e.attrs, "get", ""), f(e)) : (a = p.__cssModules) && (a = a[t]) ? a : i !== eH && e4(i, t) ? (u[t] = 4, i[t]) : e4(s = d.config.globalProperties, t) ? s[t] : void 0;
	},
	set({ _: e }, t, r) {
		let { data: a, setupState: s, ctx: i } = e;
		return rF(s, t) ? (s[t] = r, !0) : a !== eH && e4(a, t) ? (a[t] = r, !0) : !e4(e.props, t) && !("$" === t[0] && t.slice(1) in e) && (i[t] = r, !0);
	},
	has({ _: { data: e, setupState: t, accessCache: r, ctx: a, appContext: s, propsOptions: i, type: o } }, l) {
		let c, u;
		return !!(r[l] || e !== eH && "$" !== l[0] && e4(e, l) || rF(t, l) || (c = i[0]) && e4(c, l) || e4(a, l) || e4(rL, l) || e4(s.config.globalProperties, l) || (u = o.__cssModules) && u[l]);
	},
	defineProperty(e, t, r) {
		return null != r.get ? e._.accessCache[t] = 0 : e4(r, "value") && this.set(e, t, r.value, null), Reflect.defineProperty(e, t, r);
	}
};
function rU(e) {
	return e3(e) ? e.reduce((e, t) => (e[t] = null, e), {}) : e;
}
var rz = !0;
function rG(e, t, r) {
	nD(e3(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, r);
}
function rW(e) {
	let t, r = e.type, { mixins: a, extends: s } = r, { mixins: i, optionsCache: o, config: { optionMergeStrategies: l } } = e.appContext, c = o.get(r);
	return c ? t = c : i.length || a || s ? (t = {}, i.length && i.forEach((e) => rK(t, e, l, !0)), rK(t, r, l)) : t = r, e5(r) && o.set(r, t), t;
}
function rK(e, t, r, a = !1) {
	let { mixins: s, extends: i } = t;
	for (let o in i && rK(e, i, r, !0), s && s.forEach((t) => rK(e, t, r, !0)), t) if (a && "expose" === o);
	else {
		let a = rq[o] || r && r[o];
		e[o] = a ? a(e[o], t[o]) : t[o];
	}
	return e;
}
var rq = {
	data: rH,
	props: rZ,
	emits: rZ,
	methods: rX,
	computed: rX,
	beforeCreate: rJ,
	created: rJ,
	beforeMount: rJ,
	mounted: rJ,
	beforeUpdate: rJ,
	updated: rJ,
	beforeDestroy: rJ,
	beforeUnmount: rJ,
	destroyed: rJ,
	unmounted: rJ,
	activated: rJ,
	deactivated: rJ,
	errorCaptured: rJ,
	serverPrefetch: rJ,
	components: rX,
	directives: rX,
	watch: function(e, t) {
		if (!e) return t;
		if (!t) return e;
		let r = e0(Object.create(null), e);
		for (let a in t) r[a] = rJ(e[a], t[a]);
		return r;
	},
	provide: rH,
	inject: function(e, t) {
		return rX(rY(e), rY(t));
	}
};
function rH(e, t) {
	return t ? e ? function() {
		return e0(e6(e) ? e.call(this, this) : e, e6(t) ? t.call(this, this) : t);
	} : t : e;
}
function rY(e) {
	if (e3(e)) {
		let t = {};
		for (let r = 0; r < e.length; r++) t[e[r]] = e[r];
		return t;
	}
	return e;
}
function rJ(e, t) {
	return e ? [...new Set([].concat(e, t))] : t;
}
function rX(e, t) {
	return e ? e0(Object.create(null), e, t) : t;
}
function rZ(e, t) {
	return e ? e3(e) && e3(t) ? [...new Set([...e, ...t])] : e0(Object.create(null), rU(e), rU(null != t ? t : {})) : t;
}
function rQ() {
	return {
		app: null,
		config: {
			isNativeTag: eX,
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
var r0 = 0, r1 = null;
function r2(e, t) {
	if (aG) {
		let r = aG.provides, a = aG.parent && aG.parent.provides;
		a === r && (r = aG.provides = Object.create(a)), r[e] = t;
	}
}
function r4(e, t, r = !1) {
	let a = aW();
	if (a || r1) {
		let s = r1 ? r1._context.provides : a ? null == a.parent || a.ce ? a.vnode.appContext && a.vnode.appContext.provides : a.parent.provides : void 0;
		if (s && e in s) return s[e];
		if (arguments.length > 1) return r && e6(t) ? t.call(a && a.proxy) : t;
	}
}
var r3 = {}, r6 = (e) => Object.getPrototypeOf(e) === r3;
function r8(e, t, r, a) {
	let s, [i, o] = e.propsOptions, l = !1;
	if (t) for (let c in t) {
		let u;
		if (tn(c)) continue;
		let p = t[c];
		i && e4(i, u = ts(c)) ? o && o.includes(u) ? (s || (s = {}))[u] = p : r[u] = p : ak(e.emitsOptions, c) || c in a && p === a[c] || (a[c] = p, l = !0);
	}
	if (o) {
		let t = nk(r), a = s || eH;
		for (let s = 0; s < o.length; s++) {
			let l = o[s];
			r[l] = r7(i, t, l, a[l], e, !e4(a, l));
		}
	}
	return l;
}
function r7(e, t, r, a, s, i) {
	let o = e[r];
	if (null != o) {
		let e = e4(o, "default");
		if (e && void 0 === a) {
			let e = o.default;
			if (o.type !== Function && !o.skipFactory && e6(e)) {
				let { propsDefaults: i } = s;
				if (r in i) a = i[r];
				else {
					let o = aK(s);
					a = i[r] = e.call(null, t), o();
				}
			} else a = e;
			s.ce && s.ce._setProp(r, a);
		}
		o[0] && (i && !e ? a = !1 : o[1] && ("" === a || a === to(r)) && (a = !0));
	}
	return a;
}
var r5 = /* @__PURE__ */ new WeakMap();
function r9(e) {
	return !("$" === e[0] || tn(e));
}
var ae = (e) => "_" === e || "_ctx" === e || "$stable" === e, at = (e) => e3(e) ? e.map(aV) : [aV(e)], an = (e, t, r) => {
	if (t._n) return t;
	let a = function(e, t = nZ, r) {
		if (!t || e._n) return e;
		let a = (...r) => {
			let s;
			a._d && aC(-1);
			let i = n0(t);
			try {
				s = e(...r);
			} finally {
				n0(i), a._d && aC(1);
			}
			return s;
		};
		return a._n = !0, a._c = !0, a._d = !0, a;
	}((...e) => at(t(...e)), r);
	return a._c = !1, a;
}, ar = (e, t, r) => {
	let a = e._ctx;
	for (let r in e) {
		if (ae(r)) continue;
		let s = e[r];
		if (e6(s)) t[r] = an(r, s, a);
		else if (null != s) {
			let e = at(s);
			t[r] = () => e;
		}
	}
}, aa = (e, t) => {
	let r = at(t);
	e.slots.default = () => r;
}, as = (e, t, r) => {
	for (let a in t) (r || !ae(a)) && (e[a] = t[a]);
}, ai = function(e, t) {
	if (t && t.pendingBranch) e3(e) ? t.effects.push(...e) : t.effects.push(e);
	else e3(e) ? nB.push(...e) : nU && -1 === e.id ? nU.splice(nz + 1, 0, e) : 1 & e.flags || (nB.push(e), e.flags |= 1), nH();
};
function ao(e) {
	return function(e, t) {
		var r;
		let a, s;
		th().__VUE__ = !0;
		let { insert: i, remove: o, patchProp: l, createElement: c, createText: u, createComment: p, setText: d, setElementText: f, parentNode: h, nextSibling: m, setScopeId: y = eJ, insertStaticContent: g } = e, k = (e, t, r, a = null, s = null, i = null, o, l = null, c = !!t.dynamicChildren) => {
			if (e === t) return;
			e && !aI(e, t) && (a = K(e), B(e, s, i, !0), e = null), -2 === t.patchFlag && (c = !1, t.dynamicChildren = null);
			let { type: u, ref: p, shapeFlag: d } = t;
			switch (u) {
				case aS:
					b(e, t, r, a);
					break;
				case aj:
					N(e, t, r, a);
					break;
				case aA:
					e ?? _(t, r, a, o);
					break;
				case aO:
					P(e, t, r, a, s, i, o, l, c);
					break;
				default: 1 & d ? w(e, t, r, a, s, i, o, l, c) : 6 & d ? C(e, t, r, a, s, i, o, l, c) : 64 & d ? u.process(e, t, r, a, s, i, o, l, c, Y) : 128 & d && u.process(e, t, r, a, s, i, o, l, c, Y);
			}
			null != p && s ? rg(p, e && e.ref, i, t || e, !t) : null == p && e && null != e.ref && rg(e.ref, null, i, e, !0);
		}, b = (e, t, r, a) => {
			if (null == e) i(t.el = u(t.children), r, a);
			else {
				let r = t.el = e.el;
				t.children !== e.children && d(r, t.children);
			}
		}, N = (e, t, r, a) => {
			null == e ? i(t.el = p(t.children || ""), r, a) : t.el = e.el;
		}, _ = (e, t, r, a) => {
			[e.el, e.anchor] = g(e.children, t, r, a, e.el, e.anchor);
		}, w = (e, t, r, a, s, i, o, l, c) => {
			if ("svg" === t.type ? o = "svg" : "math" === t.type && (o = "mathml"), null == e) x(t, r, a, s, i, o, l, c);
			else {
				let r = e.el && e.el._isVueCE ? e.el : null;
				try {
					r && r._beginPatch(), j(e, t, s, i, o, l, c);
				} finally {
					r && r._endPatch();
				}
			}
		}, x = (e, t, r, a, s, o, u, p) => {
			var d, h;
			let m, y, { props: g, shapeFlag: k, transition: b, dirs: N } = e;
			if (m = e.el = c(e.type, o, g && g.is, g), 8 & k ? f(m, e.children) : 16 & k && S(e.children, m, null, a, s, al(e, o), u, p), N && n1(e, null, a, "created"), O(m, e, e.scopeId, u, a), g) {
				for (let e in g) "value" === e || tn(e) || l(m, e, null, g[e], o, a);
				"value" in g && l(m, "value", null, g.value, o), (y = g.onVnodeBeforeMount) && aB(y, a, e);
			}
			N && n1(e, null, a, "beforeMount");
			let _ = (d = s, h = b, (!d || d && !d.pendingBranch) && h && !h.persisted);
			_ && b.beforeEnter(m), i(m, t, r), ((y = g && g.onVnodeMounted) || _ || N) && ai(() => {
				y && aB(y, a, e), _ && b.enter(m), N && n1(e, null, a, "mounted");
			}, s);
		}, O = (e, t, r, a, s) => {
			if (r && y(e, r), a) for (let t = 0; t < a.length; t++) y(e, a[t]);
			if (s) {
				let r = s.subTree;
				if (t === r || ax(r.type) && (r.ssContent === t || r.ssFallback === t)) {
					let t = s.vnode;
					O(e, t, t.scopeId, t.slotScopeIds, s.parent);
				}
			}
		}, S = (e, t, r, a, s, i, o, l, c = 0) => {
			for (let u = c; u < e.length; u++) k(null, e[u] = l ? aL(e[u]) : aV(e[u]), t, r, a, s, i, o, l);
		}, j = (e, t, r, a, s, i, o) => {
			let c, u = t.el = e.el, { patchFlag: p, dynamicChildren: d, dirs: h } = t;
			p |= 16 & e.patchFlag;
			let m = e.props || eH, y = t.props || eH;
			if (r && ac(r, !1), (c = y.onVnodeBeforeUpdate) && aB(c, r, t, e), h && n1(t, e, r, "beforeUpdate"), r && ac(r, !0), (m.innerHTML && null == y.innerHTML || m.textContent && null == y.textContent) && f(u, ""), d ? A(e.dynamicChildren, d, u, r, a, al(t, s), i) : o || D(e, t, u, null, r, a, al(t, s), i, !1), p > 0) {
				if (16 & p) E(u, m, y, r, s);
				else if (2 & p && m.class !== y.class && l(u, "class", null, y.class, s), 4 & p && l(u, "style", m.style, y.style, s), 8 & p) {
					let e = t.dynamicProps;
					for (let t = 0; t < e.length; t++) {
						let a = e[t], i = m[a], o = y[a];
						(o !== i || "value" === a) && l(u, a, i, o, s, r);
					}
				}
				1 & p && e.children !== t.children && f(u, t.children);
			} else o || null != d || E(u, m, y, r, s);
			((c = y.onVnodeUpdated) || h) && ai(() => {
				c && aB(c, r, t, e), h && n1(t, e, r, "updated");
			}, a);
		}, A = (e, t, r, a, s, i, o) => {
			for (let l = 0; l < t.length; l++) {
				let c = e[l], u = t[l];
				k(c, u, c.el && (c.type === aO || !aI(c, u) || 198 & c.shapeFlag) ? h(c.el) : r, null, a, s, i, o, !0);
			}
		}, E = (e, t, r, a, s) => {
			if (t !== r) {
				if (t !== eH) for (let i in t) tn(i) || i in r || l(e, i, t[i], null, s, a);
				for (let i in r) {
					if (tn(i)) continue;
					let o = r[i], c = t[i];
					o !== c && "value" !== i && l(e, i, c, o, s, a);
				}
				"value" in r && l(e, "value", t.value, r.value, s);
			}
		}, P = (e, t, r, a, s, o, l, c, p) => {
			let d = t.el = e ? e.el : u(""), f = t.anchor = e ? e.anchor : u(""), { patchFlag: h, dynamicChildren: m, slotScopeIds: y } = t;
			y && (c = c ? c.concat(y) : y), null == e ? (i(d, r, a), i(f, r, a), S(t.children || [], r, f, s, o, l, c, p)) : h > 0 && 64 & h && m && e.dynamicChildren ? (A(e.dynamicChildren, m, r, s, o, l, c), (null != t.key || s && t === s.subTree) && au(e, t, !0)) : D(e, t, r, f, s, o, l, c, p);
		}, C = (e, t, r, a, s, i, o, l, c) => {
			t.slotScopeIds = l, null == e ? 512 & t.shapeFlag ? s.ctx.activate(t, r, a, o, c) : T(t, r, a, s, i, o, c) : I(e, t, c);
		}, T = (e, t, r, a, s, i, o) => {
			var l, c, u;
			let p, d, f, h = (l = e, c = a, u = s, p = l.type, d = (c ? c.appContext : l.appContext) || aU, (f = {
				uid: az++,
				vnode: l,
				type: p,
				parent: c,
				appContext: d,
				root: null,
				next: null,
				subTree: null,
				effect: null,
				update: null,
				job: null,
				scope: new t_(!0),
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
				propsOptions: function e(t, r, a = !1) {
					let s = a ? r5 : r.propsCache, i = s.get(t);
					if (i) return i;
					let o = t.props, l = {}, c = [], u = !1;
					if (!e6(t)) {
						let s = (t) => {
							u = !0;
							let [a, s] = e(t, r, !0);
							e0(l, a), s && c.push(...s);
						};
						!a && r.mixins.length && r.mixins.forEach(s), t.extends && s(t.extends), t.mixins && t.mixins.forEach(s);
					}
					if (!o && !u) return e5(t) && s.set(t, eY), eY;
					if (e3(o)) for (let e = 0; e < o.length; e++) {
						let t = ts(o[e]);
						r9(t) && (l[t] = eH);
					}
					else if (o) for (let e in o) {
						let t = ts(e);
						if (r9(t)) {
							let r = o[e], a = l[t] = e3(r) || e6(r) ? { type: r } : e0({}, r), s = a.type, i = !1, u = !0;
							if (e3(s)) for (let e = 0; e < s.length; ++e) {
								let t = s[e], r = e6(t) && t.name;
								if ("Boolean" === r) {
									i = !0;
									break;
								}
								"String" === r && (u = !1);
							}
							else i = e6(s) && "Boolean" === s.name;
							a[0] = i, a[1] = u, (i || e4(a, "default")) && c.push(t);
						}
					}
					let p = [l, c];
					return e5(t) && s.set(t, p), p;
				}(p, d),
				emitsOptions: function e(t, r, a = !1) {
					let s = a ? ag : r.emitsCache, i = s.get(t);
					if (void 0 !== i) return i;
					let o = t.emits, l = {}, c = !1;
					if (!e6(t)) {
						let s = (t) => {
							let a = e(t, r, !0);
							a && (c = !0, e0(l, a));
						};
						!a && r.mixins.length && r.mixins.forEach(s), t.extends && s(t.extends), t.mixins && t.mixins.forEach(s);
					}
					return o || c ? (e3(o) ? o.forEach((e) => l[e] = null) : e0(l, o), e5(t) && s.set(t, l), l) : (e5(t) && s.set(t, null), null);
				}(p, d),
				emit: null,
				emitted: null,
				propsDefaults: eH,
				inheritAttrs: p.inheritAttrs,
				ctx: eH,
				data: eH,
				props: eH,
				attrs: eH,
				slots: eH,
				refs: eH,
				setupState: eH,
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
			}).ctx = { _: f }, f.root = c ? c.root : f, f.emit = ay.bind(null, f), l.ce && l.ce(f), e.component = f);
			if (rN(e) && (h.ctx.renderer = Y), function(e, t = !1, r = !1) {
				t && M(t);
				let { props: a, children: s } = e.vnode, i = aH(e);
				(function(e, t, r, a = !1) {
					let s = {}, i = Object.create(r3);
					for (let r in e.propsDefaults = Object.create(null), r8(e, t, s, i), e.propsOptions[0]) r in s || (s[r] = void 0);
					r ? e.props = a ? s : nd(s) : e.type.props ? e.props = s : e.props = i, e.attrs = i;
				})(e, a, i, t);
				var o = r || t;
				let l = e.slots = Object.create(r3);
				if (32 & e.vnode.shapeFlag) {
					let e = s._;
					e ? (as(l, s, o), o && tp(l, "_", e, !0)) : ar(s, l);
				} else s && aa(e, s);
				i && function(e, t) {
					let r = e.type;
					e.accessCache = Object.create(null), e.proxy = new Proxy(e.ctx, rB);
					let { setup: a } = r;
					if (a) {
						var s;
						tM();
						let r = e.setupContext = a.length > 1 ? {
							attrs: new Proxy((s = e).attrs, aZ),
							slots: s.slots,
							emit: s.emit,
							expose: (e) => {
								s.exposed = e || {};
							}
						} : null, i = aK(e), o = n$(a, e, 0, [e.props, r]), l = e9(o);
						if (t$(), i(), (l || e.sp) && !rb(e) && rv(e), l) {
							if (o.then(aq, aq), t) return o.then((r) => {
								aJ(e, r, t);
							}).catch((t) => {
								nV(t, e, 0);
							});
							e.asyncDep = o;
						} else aJ(e, o, t);
					} else aX(e, t);
				}(e, t), t && M(!1);
			}(h, !1, o), h.asyncDep) {
				if (s && s.registerDep(h, R, o), !e.el) {
					let a = h.subTree = a$(aj);
					N(null, a, t, r), e.placeholder = a.el;
				}
			} else R(h, e, t, r, s, i, o);
		}, I = (e, t, r) => {
			let a = t.component = e.component;
			if (function(e, t, r) {
				let { props: a, children: s, component: i } = e, { props: o, children: l, patchFlag: c } = t, u = i.emitsOptions;
				if (t.dirs || t.transition) return !0;
				if (!r || !(c >= 0)) return (!!s || !!l) && (!l || !l.$stable) || a !== o && (a ? !o || aw(a, o, u) : !!o);
				if (1024 & c) return !0;
				if (16 & c) return a ? aw(a, o, u) : !!o;
				if (8 & c) {
					let e = t.dynamicProps;
					for (let t = 0; t < e.length; t++) {
						let r = e[t];
						if (o[r] !== a[r] && !ak(u, r)) return !0;
					}
				}
				return !1;
			}(e, t, r)) if (a.asyncDep && !a.asyncResolved) return void $(a, t, r);
			else a.next = t, a.update();
			else t.el = e.el, a.vnode = t;
		}, R = (e, t, r, a, i, o, l) => {
			let c = () => {
				if (e.isMounted) {
					let t, { next: r, bu: a, u: s, parent: u, vnode: p } = e;
					{
						let t = function e(t) {
							let r = t.subTree.component;
							if (r) if (r.asyncDep && !r.asyncResolved) return r;
							else return e(r);
						}(e);
						if (t) {
							r && (r.el = p.el, $(e, r, l)), t.asyncDep.then(() => {
								e.isUnmounted || c();
							});
							return;
						}
					}
					let d = r;
					ac(e, !1), r ? (r.el = p.el, $(e, r, l)) : r = p, a && tu(a), (t = r.props && r.props.onVnodeBeforeUpdate) && aB(t, u, r, p), ac(e, !0);
					let f = ab(e), m = e.subTree;
					e.subTree = f, k(m, f, h(m.el), K(m), e, i, o), r.el = f.el, null === d && function({ vnode: e, parent: t }, r) {
						for (; t;) {
							let a = t.subTree;
							if (a.suspense && a.suspense.activeBranch === e && (a.el = e.el), a === e) (e = t.vnode).el = r, t = t.parent;
							else break;
						}
					}(e, f.el), s && ai(s, i), (t = r.props && r.props.onVnodeUpdated) && ai(() => aB(t, u, r, p), i);
				} else {
					let l, { el: c, props: u } = t, { bm: p, m: d, parent: f, root: h, type: m } = e, y = rb(t);
					if (ac(e, !1), p && tu(p), !y && (l = u && u.onVnodeBeforeMount) && aB(l, f, t), ac(e, !0), c && s);
					else {
						h.ce && !1 !== h.ce._def.shadowRoot && h.ce._injectChildStyle(m);
						let s = e.subTree = ab(e);
						k(null, s, r, a, e, i, o), t.el = s.el;
					}
					if (d && ai(d, i), !y && (l = u && u.onVnodeMounted)) {
						let e = t;
						ai(() => aB(l, f, e), i);
					}
					(256 & t.shapeFlag || f && rb(f.vnode) && 256 & f.vnode.shapeFlag) && e.a && ai(e.a, i), e.isMounted = !0, t = r = a = null;
				}
			};
			e.scope.on();
			let u = e.effect = new tx(c);
			e.scope.off();
			let p = e.update = u.run.bind(u), d = e.job = u.runIfDirty.bind(u);
			d.i = e, d.id = e.uid, u.scheduler = () => nq(d), ac(e, !0), p();
		}, $ = (e, t, r) => {
			t.component = e;
			let a = e.vnode.props;
			e.vnode = t, e.next = null, function(e, t, r, a) {
				let { props: s, attrs: i, vnode: { patchFlag: o } } = e, l = nk(s), [c] = e.propsOptions, u = !1;
				if ((a || o > 0) && !(16 & o)) {
					if (8 & o) {
						let r = e.vnode.dynamicProps;
						for (let a = 0; a < r.length; a++) {
							let o = r[a];
							if (ak(e.emitsOptions, o)) continue;
							let p = t[o];
							if (c) if (e4(i, o)) p !== i[o] && (i[o] = p, u = !0);
							else {
								let t = ts(o);
								s[t] = r7(c, l, t, p, e, !1);
							}
							else p !== i[o] && (i[o] = p, u = !0);
						}
					}
				} else {
					let a;
					for (let o in r8(e, t, s, i) && (u = !0), l) t && (e4(t, o) || (a = to(o)) !== o && e4(t, a)) || (c ? r && (void 0 !== r[o] || void 0 !== r[a]) && (s[o] = r7(c, l, o, void 0, e, !0)) : delete s[o]);
					if (i !== l) for (let e in i) t && e4(t, e) || (delete i[e], u = !0);
				}
				u && tK(e.attrs, "set", "");
			}(e, t.props, a, r), ((e, t, r) => {
				let { vnode: a, slots: s } = e, i = !0, o = eH;
				if (32 & a.shapeFlag) {
					let e = t._;
					e ? r && 1 === e ? i = !1 : as(s, t, r) : (i = !t.$stable, ar(t, s)), o = t;
				} else t && (aa(e, t), o = { default: 1 });
				if (i) for (let e in s) ae(e) || null != o[e] || delete s[e];
			})(e, t.children, r), tM(), nY(e), t$();
		}, D = (e, t, r, a, s, i, o, l, c = !1) => {
			let u = e && e.children, p = e ? e.shapeFlag : 0, d = t.children, { patchFlag: h, shapeFlag: m } = t;
			if (h > 0) {
				if (128 & h) return void L(u, d, r, a, s, i, o, l, c);
				else if (256 & h) return void V(u, d, r, a, s, i, o, l, c);
			}
			8 & m ? (16 & p && W(u, s, i), d !== u && f(r, d)) : 16 & p ? 16 & m ? L(u, d, r, a, s, i, o, l, c) : W(u, s, i, !0) : (8 & p && f(r, ""), 16 & m && S(d, r, a, s, i, o, l, c));
		}, V = (e, t, r, a, s, i, o, l, c) => {
			let u;
			e = e || eY, t = t || eY;
			let p = e.length, d = t.length, f = Math.min(p, d);
			for (u = 0; u < f; u++) {
				let a = t[u] = c ? aL(t[u]) : aV(t[u]);
				k(e[u], a, r, null, s, i, o, l, c);
			}
			p > d ? W(e, s, i, !0, !1, f) : S(t, r, a, s, i, o, l, c, f);
		}, L = (e, t, r, a, s, i, o, l, c) => {
			let u = 0, p = t.length, d = e.length - 1, f = p - 1;
			for (; u <= d && u <= f;) {
				let a = e[u], p = t[u] = c ? aL(t[u]) : aV(t[u]);
				if (aI(a, p)) k(a, p, r, null, s, i, o, l, c);
				else break;
				u++;
			}
			for (; u <= d && u <= f;) {
				let a = e[d], u = t[f] = c ? aL(t[f]) : aV(t[f]);
				if (aI(a, u)) k(a, u, r, null, s, i, o, l, c);
				else break;
				d--, f--;
			}
			if (u > d) {
				if (u <= f) {
					let e = f + 1, d = e < p ? t[e].el : a;
					for (; u <= f;) k(null, t[u] = c ? aL(t[u]) : aV(t[u]), r, d, s, i, o, l, c), u++;
				}
			} else if (u > f) for (; u <= d;) B(e[u], s, i, !0), u++;
			else {
				let h, m = u, y = u, g = /* @__PURE__ */ new Map();
				for (u = y; u <= f; u++) {
					let e = t[u] = c ? aL(t[u]) : aV(t[u]);
					null != e.key && g.set(e.key, u);
				}
				let b = 0, N = f - y + 1, _ = !1, w = 0, x = Array(N);
				for (u = 0; u < N; u++) x[u] = 0;
				for (u = m; u <= d; u++) {
					let a, p = e[u];
					if (b >= N) {
						B(p, s, i, !0);
						continue;
					}
					if (null != p.key) a = g.get(p.key);
					else for (h = y; h <= f; h++) if (0 === x[h - y] && aI(p, t[h])) {
						a = h;
						break;
					}
					void 0 === a ? B(p, s, i, !0) : (x[a - y] = u + 1, a >= w ? w = a : _ = !0, k(p, t[a], r, null, s, i, o, l, c), b++);
				}
				let O = _ ? function(e) {
					let t, r, a, s, i, o = e.slice(), l = [0], c = e.length;
					for (t = 0; t < c; t++) {
						let c = e[t];
						if (0 !== c) {
							if (e[r = l[l.length - 1]] < c) {
								o[t] = r, l.push(t);
								continue;
							}
							for (a = 0, s = l.length - 1; a < s;) e[l[i = a + s >> 1]] < c ? a = i + 1 : s = i;
							c < e[l[a]] && (a > 0 && (o[t] = l[a - 1]), l[a] = t);
						}
					}
					for (a = l.length, s = l[a - 1]; a-- > 0;) l[a] = s, s = o[s];
					return l;
				}(x) : eY;
				for (h = O.length - 1, u = N - 1; u >= 0; u--) {
					let e = y + u, d = t[e], f = t[e + 1], m = e + 1 < p ? f.el || f.placeholder : a;
					0 === x[u] ? k(null, d, r, m, s, i, o, l, c) : _ && (h < 0 || u !== O[h] ? F(d, r, m, 2) : h--);
				}
			}
		}, F = (e, t, r, a, s = null) => {
			let { el: l, type: c, transition: u, children: p, shapeFlag: d } = e;
			if (6 & d) return void F(e.component.subTree, t, r, a);
			if (128 & d) return void e.suspense.move(t, r, a);
			if (64 & d) return void c.move(e, t, r, Y);
			if (c === aO) {
				i(l, t, r);
				for (let e = 0; e < p.length; e++) F(p[e], t, r, a);
				i(e.anchor, t, r);
				return;
			}
			if (c === aA) return void (({ el: e, anchor: t }, r, a) => {
				let s;
				for (; e && e !== t;) s = m(e), i(e, r, a), e = s;
				i(t, r, a);
			})(e, t, r);
			if (2 !== a && 1 & d && u) if (0 === a) u.beforeEnter(l), i(l, t, r), ai(() => u.enter(l), s);
			else {
				let { leave: a, delayLeave: s, afterLeave: c } = u, p = () => {
					e.ctx.isUnmounted ? o(l) : i(l, t, r);
				}, d = () => {
					l._isLeaving && l[rr](!0), a(l, () => {
						p(), c && c();
					});
				};
				s ? s(l, p, d) : d();
			}
			else i(l, t, r);
		}, B = (e, t, r, a = !1, s = !1) => {
			let i, { type: o, props: l, ref: c, children: u, dynamicChildren: p, shapeFlag: d, patchFlag: f, dirs: h, cacheIndex: m } = e;
			if (-2 === f && (s = !1), null != c && (tM(), rg(c, null, r, e, !0), t$()), null != m && (t.renderCache[m] = void 0), 256 & d) return void t.ctx.deactivate(e);
			let y = 1 & d && h, g = !rb(e);
			if (g && (i = l && l.onVnodeBeforeUnmount) && aB(i, t, e), 6 & d) G(e.component, r, a);
			else {
				if (128 & d) return void e.suspense.unmount(r, a);
				y && n1(e, null, t, "beforeUnmount"), 64 & d ? e.type.remove(e, t, r, Y, a) : p && !p.hasOnce && (o !== aO || f > 0 && 64 & f) ? W(p, t, r, !1, !0) : (o === aO && 384 & f || !s && 16 & d) && W(u, t, r), a && U(e);
			}
			(g && (i = l && l.onVnodeUnmounted) || y) && ai(() => {
				i && aB(i, t, e), y && n1(e, null, t, "unmounted");
			}, r);
		}, U = (e) => {
			let { type: t, el: r, anchor: a, transition: s } = e;
			if (t === aO) return void z(r, a);
			if (t === aA) return void (({ el: e, anchor: t }) => {
				let r;
				for (; e && e !== t;) r = m(e), o(e), e = r;
				o(t);
			})(e);
			let i = () => {
				o(r), s && !s.persisted && s.afterLeave && s.afterLeave();
			};
			if (1 & e.shapeFlag && s && !s.persisted) {
				let { leave: t, delayLeave: a } = s, o = () => t(r, i);
				a ? a(e.el, i, o) : o();
			} else i();
		}, z = (e, t) => {
			let r;
			for (; e !== t;) r = m(e), o(e), e = r;
			o(t);
		}, G = (e, t, r) => {
			let { bum: a, scope: s, job: i, subTree: o, um: l, m: c, a: u } = e;
			ap(c), ap(u), a && tu(a), s.stop(), i && (i.flags |= 8, B(o, e, t, r)), l && ai(l, t), ai(() => {
				e.isUnmounted = !0;
			}, t);
		}, W = (e, t, r, a = !1, s = !1, i = 0) => {
			for (let o = i; o < e.length; o++) B(e[o], t, r, a, s);
		}, K = (e) => {
			if (6 & e.shapeFlag) return K(e.component.subTree);
			if (128 & e.shapeFlag) return e.suspense.next();
			let t = m(e.anchor || e.el), r = t && t[n2];
			return r ? m(r) : t;
		}, q = !1, H = (e, t, r) => {
			null == e ? t._vnode && B(t._vnode, null, null, !0) : k(t._vnode || null, e, t, null, null, null, r), t._vnode = e, q || (q = !0, nY(), nJ(), q = !1);
		}, Y = {
			p: k,
			um: B,
			m: F,
			r: U,
			mt: T,
			mc: S,
			pc: D,
			pbc: A,
			n: K,
			o: e
		};
		return {
			render: H,
			hydrate: a,
			createApp: (r = a, function(e, t = null) {
				e6(e) || (e = e0({}, e)), null == t || e5(t) || (t = null);
				let a = rQ(), s = /* @__PURE__ */ new WeakSet(), i = [], o = !1, l = a.app = {
					_uid: r0++,
					_component: e,
					_props: t,
					_container: null,
					_context: a,
					_instance: null,
					version: a2,
					get config() {
						return a.config;
					},
					set config(v) {},
					use: (e, ...t) => (s.has(e) || (e && e6(e.install) ? (s.add(e), e.install(l, ...t)) : e6(e) && (s.add(e), e(l, ...t))), l),
					mixin: (e) => (a.mixins.includes(e) || a.mixins.push(e), l),
					component: (e, t) => t ? (a.components[e] = t, l) : a.components[e],
					directive: (e, t) => t ? (a.directives[e] = t, l) : a.directives[e],
					mount(s, i, c) {
						if (!o) {
							let u = l._ceVNode || a$(e, t);
							return u.appContext = a, !0 === c ? c = "svg" : !1 === c && (c = void 0), i && r ? r(u, s) : H(u, s, c), o = !0, l._container = s, s.__vue_app__ = l, aQ(u.component);
						}
					},
					onUnmount(e) {
						i.push(e);
					},
					unmount() {
						o && (nD(i, l._instance, 16), H(null, l._container), delete l._container.__vue_app__);
					},
					provide: (e, t) => (a.provides[e] = t, l),
					runWithContext(e) {
						let t = r1;
						r1 = l;
						try {
							return e();
						} finally {
							r1 = t;
						}
					}
				};
				return l;
			})
		};
	}(e);
}
function al({ type: e, props: t }, r) {
	return "svg" === r && "foreignObject" === e || "mathml" === r && "annotation-xml" === e && t && t.encoding && t.encoding.includes("html") ? void 0 : r;
}
function ac({ effect: e, job: t }, r) {
	r ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function au(e, t, r = !1) {
	let a = e.children, s = t.children;
	if (e3(a) && e3(s)) for (let e = 0; e < a.length; e++) {
		let t = a[e], i = s[e];
		1 & i.shapeFlag && !i.dynamicChildren && ((i.patchFlag <= 0 || 32 === i.patchFlag) && ((i = s[e] = aL(s[e])).el = t.el), r || -2 === i.patchFlag || au(t, i)), i.type === aS && -1 !== i.patchFlag && (i.el = t.el), i.type !== aj || i.el || (i.el = t.el);
	}
}
function ap(e) {
	if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
var ad = Symbol.for("v-scx");
function af(e, t, r) {
	return ah(e, t, r);
}
function ah(e, t, r = eH) {
	let a, { immediate: s, deep: i, flush: o, once: l } = r, c = e0({}, r), u = t && s || !t && "post" !== o;
	if (aY) {
		if ("sync" === o) {
			let e = r4(ad);
			a = e.__watcherHandles || (e.__watcherHandles = []);
		} else if (!u) {
			let e = () => {};
			return e.stop = eJ, e.resume = eJ, e.pause = eJ, e;
		}
	}
	let p = aG;
	c.call = (e, t, r) => nD(e, p, t, r);
	let d = !1;
	"post" === o ? c.scheduler = (e) => {
		ai(e, p && p.suspense);
	} : "sync" !== o && (d = !0, c.scheduler = (e, t) => {
		t ? e() : nq(e);
	}), c.augmentJob = (e) => {
		t && (e.flags |= 4), d && (e.flags |= 2, p && (e.id = p.uid, e.i = p));
	};
	let f = function(e, t, r = eH) {
		let a, s, i, o, { immediate: l, deep: c, once: u, scheduler: p, augmentJob: d, call: f } = r, h = (e) => c ? e : ny(e) || !1 === c || 0 === c ? nM(e, 1) : nM(e), m = !1, y = !1;
		if (n_(e) ? (s = () => e.value, m = ny(e)) : nm(e) ? (s = () => h(e), m = !0) : e3(e) ? (y = !0, m = e.some((e) => nm(e) || ny(e)), s = () => e.map((e) => n_(e) ? e.value : nm(e) ? h(e) : e6(e) ? f ? f(e, 2) : e() : void 0)) : s = e6(e) ? t ? f ? () => f(e, 2) : e : () => {
			if (i) {
				tM();
				try {
					i();
				} finally {
					t$();
				}
			}
			let t = nR;
			nR = a;
			try {
				return f ? f(e, 3, [o]) : e(o);
			} finally {
				nR = t;
			}
		} : eJ, t && c) {
			let e = s, t = !0 === c ? Infinity : c;
			s = () => nM(e(), t);
		}
		let g = P, k = () => {
			a.stop(), g && g.active && e1(g.effects, a);
		};
		if (u && t) {
			let e = t;
			t = (...t) => {
				e(...t), k();
			};
		}
		let b = y ? Array(e.length).fill(nT) : nT, N = (e) => {
			if (1 & a.flags && (a.dirty || e)) if (t) {
				let e = a.run();
				if (c || m || (y ? e.some((e, t) => !Object.is(e, b[t])) : !Object.is(e, b))) {
					i && i();
					let r = nR;
					nR = a;
					try {
						let r = [
							e,
							b === nT ? void 0 : y && b[0] === nT ? [] : b,
							o
						];
						b = e, f ? f(t, 3, r) : t(...r);
					} finally {
						nR = r;
					}
				}
			} else a.run();
		};
		return d && d(N), (a = new tx(s)).scheduler = p ? () => p(N, !1) : N, o = (e) => (function(e, t = !1, r = nR) {
			if (r) {
				let t = nI.get(r);
				t || nI.set(r, t = []), t.push(e);
			}
		})(e, !1, a), i = a.onStop = () => {
			let e = nI.get(a);
			if (e) {
				if (f) f(e, 4);
				else for (let t of e) t();
				nI.delete(a);
			}
		}, t ? l ? N(!0) : b = a.run() : p ? p(N.bind(null, !0), !0) : a.run(), k.pause = a.pause.bind(a), k.resume = a.resume.bind(a), k.stop = k, k;
	}(e, t, c);
	return aY && (a ? a.push(f) : u && f()), f;
}
function am(e, t, r) {
	let a, s = this.proxy, i = e8(e) ? e.includes(".") ? av(s, e) : () => s[e] : e.bind(s, s);
	e6(t) ? a = t : (a = t.handler, r = t);
	let o = aK(this), l = ah(i, a.bind(s), r);
	return o(), l;
}
function av(e, t) {
	let r = t.split(".");
	return () => {
		let t = e;
		for (let e = 0; e < r.length && t; e++) t = t[r[e]];
		return t;
	};
}
function ay(e, t, ...r) {
	let a, s;
	if (e.isUnmounted) return;
	let i = e.vnode.props || eH, o = r, l = t.startsWith("update:"), c = l && ("modelValue" === (s = t.slice(7)) || "model-value" === s ? i.modelModifiers : i[`${s}Modifiers`] || i[`${ts(s)}Modifiers`] || i[`${to(s)}Modifiers`]);
	c && (c.trim && (o = r.map((e) => e8(e) ? e.trim() : e)), c.number && (o = r.map(td)));
	let u = i[a = tc(t)] || i[a = tc(ts(t))];
	!u && l && (u = i[a = tc(to(t))]), u && nD(u, e, 6, o);
	let p = i[a + "Once"];
	if (p) {
		if (e.emitted) {
			if (e.emitted[a]) return;
		} else e.emitted = {};
		e.emitted[a] = !0, nD(p, e, 6, o);
	}
}
var ag = /* @__PURE__ */ new WeakMap();
function ak(e, t) {
	return !!e && !!eZ(t) && (e4(e, (t = t.slice(2).replace(/Once$/, ""))[0].toLowerCase() + t.slice(1)) || e4(e, to(t)) || e4(e, t));
}
function ab(e) {
	let t, r, { type: a, vnode: s, proxy: i, withProxy: o, propsOptions: [l], slots: c, attrs: u, emit: p, render: d, renderCache: f, props: h, data: m, setupState: y, ctx: g, inheritAttrs: k } = e, b = n0(e);
	try {
		if (4 & s.shapeFlag) {
			let e = o || i;
			t = aV(d.call(e, e, f, h, y, m, g)), r = u;
		} else t = aV(a.length > 1 ? a(h, {
			attrs: u,
			slots: c,
			emit: p
		}) : a(h, null)), r = a.props ? u : aN(u);
	} catch (r) {
		aE.length = 0, nV(r, e, 1), t = a$(aj);
	}
	let N = t;
	if (r && !1 !== k) {
		let e = Object.keys(r), { shapeFlag: t } = N;
		e.length && 7 & t && (l && e.some(eQ) && (r = a_(r, l)), N = aD(N, r, !1, !0));
	}
	return s.dirs && ((N = aD(N, null, !1, !0)).dirs = N.dirs ? N.dirs.concat(s.dirs) : s.dirs), s.transition && rh(N, s.transition), t = N, n0(b), t;
}
var aN = (e) => {
	let t;
	for (let r in e) ("class" === r || "style" === r || eZ(r)) && ((t || (t = {}))[r] = e[r]);
	return t;
}, a_ = (e, t) => {
	let r = {};
	for (let a in e) eQ(a) && a.slice(9) in t || (r[a] = e[a]);
	return r;
};
function aw(e, t, r) {
	let a = Object.keys(t);
	if (a.length !== Object.keys(e).length) return !0;
	for (let s = 0; s < a.length; s++) {
		let i = a[s];
		if (t[i] !== e[i] && !ak(r, i)) return !0;
	}
	return !1;
}
var ax = (e) => e.__isSuspense, aO = Symbol.for("v-fgt"), aS = Symbol.for("v-txt"), aj = Symbol.for("v-cmt"), aA = Symbol.for("v-stc"), aE = [], aP = 1;
function aC(e, t = !1) {
	aP += e;
}
function aT(e) {
	return !!e && !0 === e.__v_isVNode;
}
function aI(e, t) {
	return e.type === t.type && e.key === t.key;
}
var aR = ({ key: e }) => null != e ? e : null, aM = ({ ref: e, ref_key: t, ref_for: r }) => ("number" == typeof e && (e = "" + e), null != e ? e8(e) || n_(e) || e6(e) ? {
	i: nZ,
	r: e,
	k: t,
	f: !!r
} : e : null), a$ = function(e, t = null, r = null, a = 0, s = null, i = !1) {
	var o, l;
	if (e && e !== rD || (e = aj), aT(e)) {
		let a = aD(e, t, !0);
		return r && aF(a, r), a.patchFlag = -2, a;
	}
	if (e6(o = e) && "__vccOpts" in o && (e = e.__vccOpts), t) {
		let { class: e, style: r } = t = (l = t) ? ng(l) || r6(l) ? e0({}, l) : l : null;
		e && !e8(e) && (t.class = tk(e)), e5(r) && (ng(r) && !e3(r) && (r = e0({}, r)), t.style = tm(r));
	}
	let c = e8(e) ? 1 : ax(e) ? 128 : e.__isTeleport ? 64 : e5(e) ? 4 : 2 * !!e6(e);
	return function(e, t = null, r = null, a = 0, s = null, i = +(e !== aO), o = !1, l = !1) {
		let c = {
			__v_isVNode: !0,
			__v_skip: !0,
			type: e,
			props: t,
			key: t && aR(t),
			ref: t && aM(t),
			scopeId: nQ,
			slotScopeIds: null,
			children: r,
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
			shapeFlag: i,
			patchFlag: a,
			dynamicProps: s,
			dynamicChildren: null,
			appContext: null,
			ctx: nZ
		};
		return l ? (aF(c, r), 128 & i && e.normalize(c)) : r && (c.shapeFlag |= e8(r) ? 8 : 16), c;
	}(e, t, r, a, s, c, i, !0);
};
function aD(e, t, r = !1, a = !1) {
	let { props: s, ref: i, patchFlag: o, children: l, transition: c } = e, u = t ? function(...e) {
		let t = {};
		for (let r = 0; r < e.length; r++) {
			let a = e[r];
			for (let e in a) if ("class" === e) t.class !== a.class && (t.class = tk([t.class, a.class]));
			else if ("style" === e) t.style = tm([t.style, a.style]);
			else if (eZ(e)) {
				let r = t[e], s = a[e];
				s && r !== s && !(e3(r) && r.includes(s)) && (t[e] = r ? [].concat(r, s) : s);
			} else "" !== e && (t[e] = a[e]);
		}
		return t;
	}(s || {}, t) : s, p = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: u,
		key: u && aR(u),
		ref: t && t.ref ? r && i ? e3(i) ? i.concat(aM(t)) : [i, aM(t)] : aM(t) : i,
		scopeId: e.scopeId,
		slotScopeIds: e.slotScopeIds,
		children: l,
		target: e.target,
		targetStart: e.targetStart,
		targetAnchor: e.targetAnchor,
		staticCount: e.staticCount,
		shapeFlag: e.shapeFlag,
		patchFlag: t && e.type !== aO ? -1 === o ? 16 : 16 | o : o,
		dynamicProps: e.dynamicProps,
		dynamicChildren: e.dynamicChildren,
		appContext: e.appContext,
		dirs: e.dirs,
		transition: c,
		component: e.component,
		suspense: e.suspense,
		ssContent: e.ssContent && aD(e.ssContent),
		ssFallback: e.ssFallback && aD(e.ssFallback),
		placeholder: e.placeholder,
		el: e.el,
		anchor: e.anchor,
		ctx: e.ctx,
		ce: e.ce
	};
	return c && a && rh(p, c.clone(p)), p;
}
function aV(e) {
	return null == e || "boolean" == typeof e ? a$(aj) : e3(e) ? a$(aO, null, e.slice()) : aT(e) ? aL(e) : a$(aS, null, String(e));
}
function aL(e) {
	return null === e.el && -1 !== e.patchFlag || e.memo ? e : aD(e);
}
function aF(e, t) {
	let r = 0, { shapeFlag: a } = e;
	if (null == t) t = null;
	else if (e3(t)) r = 16;
	else if ("object" == typeof t) if (65 & a) {
		let r = t.default;
		r && (r._c && (r._d = !1), aF(e, r()), r._c && (r._d = !0));
		return;
	} else {
		r = 32;
		let a = t._;
		a || r6(t) ? 3 === a && nZ && (1 === nZ.slots._ ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024)) : t._ctx = nZ;
	}
	else e6(t) ? (t = {
		default: t,
		_ctx: nZ
	}, r = 32) : (t = String(t), 64 & a ? (r = 16, t = [function(e = " ", t = 0) {
		return a$(aS, null, e, t);
	}(t)]) : r = 8);
	e.children = t, e.shapeFlag |= r;
}
function aB(e, t, r, a = null) {
	nD(e, t, 7, [r, a]);
}
var aU = rQ(), az = 0, aG = null, aW = () => aG || nZ;
{
	let e = th(), t = (t, r) => {
		let a;
		return (a = e[t]) || (a = e[t] = []), a.push(r), (e) => {
			a.length > 1 ? a.forEach((t) => t(e)) : a[0](e);
		};
	};
	R = t("__VUE_INSTANCE_SETTERS__", (e) => aG = e), M = t("__VUE_SSR_SETTERS__", (e) => aY = e);
}
var aK = (e) => {
	let t = aG;
	return R(e), e.scope.on(), () => {
		e.scope.off(), R(t);
	};
}, aq = () => {
	aG && aG.scope.off(), R(null);
};
function aH(e) {
	return 4 & e.vnode.shapeFlag;
}
var aY = !1;
function aJ(e, t, r) {
	e6(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : e5(t) && (e.setupState = nE(t)), aX(e, r);
}
function aX(e, t, r) {
	let a = e.type;
	if (!e.render) {
		if (!t && $ && !a.render) {
			let t = a.template || rW(e).template;
			if (t) {
				let { isCustomElement: r, compilerOptions: s } = e.appContext.config, { delimiters: i, compilerOptions: o } = a;
				a.render = $(t, e0(e0({
					isCustomElement: r,
					delimiters: i
				}, s), o));
			}
		}
		e.render = a.render || eJ, D && D(e);
	}
	{
		let t = aK(e);
		tM();
		try {
			(function(e) {
				let t = rW(e), r = e.proxy, a = e.ctx;
				rz = !1, t.beforeCreate && rG(t.beforeCreate, e, "bc");
				let { data: s, computed: i, methods: o, watch: l, provide: c, inject: u, created: p, beforeMount: d, mounted: f, beforeUpdate: h, updated: m, activated: y, deactivated: g, beforeDestroy: k, beforeUnmount: b, destroyed: N, unmounted: _, render: w, renderTracked: x, renderTriggered: O, errorCaptured: S, serverPrefetch: j, expose: A, inheritAttrs: E, components: P, directives: C, filters: T } = t;
				if (u && function(e, t, r = eJ) {
					for (let r in e3(e) && (e = rY(e)), e) {
						let a, s = e[r];
						n_(a = e5(s) ? "default" in s ? r4(s.from || r, s.default, !0) : r4(s.from || r) : r4(s)) ? Object.defineProperty(t, r, {
							enumerable: !0,
							configurable: !0,
							get: () => a.value,
							set: (e) => a.value = e
						}) : t[r] = a;
					}
				}(u, a, null), o) for (let e in o) {
					let t = o[e];
					e6(t) && (a[e] = t.bind(r));
				}
				if (s) {
					let t = s.call(r, r);
					e5(t) && (e.data = np(t));
				}
				if (rz = !0, i) for (let e in i) {
					let t = i[e], s = a0({
						get: e6(t) ? t.bind(r, r) : e6(t.get) ? t.get.bind(r, r) : eJ,
						set: !e6(t) && e6(t.set) ? t.set.bind(r) : eJ
					});
					Object.defineProperty(a, e, {
						enumerable: !0,
						configurable: !0,
						get: () => s.value,
						set: (e) => s.value = e
					});
				}
				if (l) for (let e in l) (function e(t, r, a, s) {
					let i = s.includes(".") ? av(a, s) : () => a[s];
					if (e8(t)) {
						let e = r[t];
						e6(e) && af(i, e);
					} else if (e6(t)) af(i, t.bind(a));
					else if (e5(t)) if (e3(t)) t.forEach((t) => e(t, r, a, s));
					else {
						let e = e6(t.handler) ? t.handler.bind(a) : r[t.handler];
						e6(e) && af(i, e, t);
					}
				})(l[e], a, r, e);
				if (c) {
					let e = e6(c) ? c.call(r) : c;
					Reflect.ownKeys(e).forEach((t) => {
						r2(t, e[t]);
					});
				}
				function I(e, t) {
					e3(t) ? t.forEach((t) => e(t.bind(r))) : t && e(t.bind(r));
				}
				if (p && rG(p, e, "c"), I(rj, d), I(rA, f), I(rE, h), I(rP, m), I(r_, y), I(rw, g), I(r$, S), I(rM, x), I(rR, O), I(rC, b), I(rT, _), I(rI, j), e3(A)) if (A.length) {
					let t = e.exposed || (e.exposed = {});
					A.forEach((e) => {
						Object.defineProperty(t, e, {
							get: () => r[e],
							set: (t) => r[e] = t,
							enumerable: !0
						});
					});
				} else e.exposed || (e.exposed = {});
				w && e.render === eJ && (e.render = w), null != E && (e.inheritAttrs = E), P && (e.components = P), C && (e.directives = C), j && rv(e);
			})(e);
		} finally {
			t$(), t();
		}
	}
}
var aZ = { get: (e, t) => (tW(e, "get", ""), e[t]) };
function aQ(e) {
	var t;
	return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(nE((!e4(t = e.exposed, "__v_skip") && Object.isExtensible(t) && tp(t, "__v_skip", !0), t)), {
		get: (t, r) => r in t ? t[r] : r in rL ? rL[r](e) : void 0,
		has: (e, t) => t in e || t in rL
	})) : e.proxy;
}
var a0 = (e, t) => (function(e, t, r = !1) {
	let a, s;
	return e6(e) ? a = e : (a = e.get, s = e.set), new nC(a, s, r);
})(e, 0, aY);
function a1(e, t, r) {
	try {
		aC(-1);
		let a = arguments.length;
		if (2 !== a) return a > 3 ? r = Array.prototype.slice.call(arguments, 2) : 3 === a && aT(r) && (r = [r]), a$(e, t, r);
		if (!e5(t) || e3(t)) return a$(e, null, t);
		if (aT(t)) return a$(e, null, [t]);
		return a$(e, t);
	} finally {
		aC(1);
	}
}
var a2 = "3.5.24", a4 = Symbol.for("immer-nothing"), a3 = Symbol.for("immer-draftable"), a6 = Symbol.for("immer-state");
function a8(e) {
	throw Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`);
}
var a7 = Object.getPrototypeOf;
function a5(e) {
	return !!e && !!e[a6];
}
function a9(e) {
	return !!e && (sn(e) || Array.isArray(e) || !!e[a3] || !!e.constructor?.[a3] || so(e) || sl(e));
}
var se = Object.prototype.constructor.toString(), st = /* @__PURE__ */ new WeakMap();
function sn(e) {
	if (!e || "object" != typeof e) return !1;
	let t = Object.getPrototypeOf(e);
	if (null === t || t === Object.prototype) return !0;
	let r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
	if (r === Object) return !0;
	if ("function" != typeof r) return !1;
	let a = st.get(r);
	return void 0 === a && (a = Function.toString.call(r), st.set(r, a)), a === se;
}
function sr(e, t, r = !0) {
	0 === sa(e) ? (r ? Reflect.ownKeys(e) : Object.keys(e)).forEach((r) => {
		t(r, e[r], e);
	}) : e.forEach((r, a) => t(a, r, e));
}
function sa(e) {
	let t = e[a6];
	return t ? t.type_ : Array.isArray(e) ? 1 : so(e) ? 2 : 3 * !!sl(e);
}
function ss(e, t) {
	return 2 === sa(e) ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function si(e, t, r) {
	let a = sa(e);
	2 === a ? e.set(t, r) : 3 === a ? e.add(r) : e[t] = r;
}
function so(e) {
	return e instanceof Map;
}
function sl(e) {
	return e instanceof Set;
}
function sc(e) {
	return e.copy_ || e.base_;
}
function su(e, t) {
	if (so(e)) return new Map(e);
	if (sl(e)) return new Set(e);
	if (Array.isArray(e)) return Array.prototype.slice.call(e);
	let r = sn(e);
	if (!0 !== t && ("class_only" !== t || r)) {
		let t = a7(e);
		return null !== t && r ? { ...e } : Object.assign(Object.create(t), e);
	}
	{
		let t = Object.getOwnPropertyDescriptors(e);
		delete t[a6];
		let r = Reflect.ownKeys(t);
		for (let a = 0; a < r.length; a++) {
			let s = r[a], i = t[s];
			!1 === i.writable && (i.writable = !0, i.configurable = !0), (i.get || i.set) && (t[s] = {
				configurable: !0,
				writable: !0,
				enumerable: i.enumerable,
				value: e[s]
			});
		}
		return Object.create(a7(e), t);
	}
}
function sp(e, t = !1) {
	return sf(e) || a5(e) || !a9(e) || (sa(e) > 1 && Object.defineProperties(e, {
		set: sd,
		add: sd,
		clear: sd,
		delete: sd
	}), Object.freeze(e), t && Object.values(e).forEach((e) => sp(e, !0))), e;
}
var sd = { value: function() {
	a8(2);
} };
function sf(e) {
	return null === e || "object" != typeof e || Object.isFrozen(e);
}
var sh = {};
function sm(e) {
	let t = sh[e];
	return t || a8(0, e), t;
}
function sv(e, t) {
	t && (sm("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function sy(e) {
	sg(e), e.drafts_.forEach(sb), e.drafts_ = null;
}
function sg(e) {
	e === V && (V = e.parent_);
}
function sk(e) {
	return V = {
		drafts_: [],
		parent_: V,
		immer_: e,
		canAutoFreeze_: !0,
		unfinalizedDrafts_: 0
	};
}
function sb(e) {
	let t = e[a6];
	0 === t.type_ || 1 === t.type_ ? t.revoke_() : t.revoked_ = !0;
}
function sN(e, t) {
	t.unfinalizedDrafts_ = t.drafts_.length;
	let r = t.drafts_[0];
	return void 0 !== e && e !== r ? (r[a6].modified_ && (sy(t), a8(4)), a9(e) && (e = s_(t, e), t.parent_ || sx(t, e)), t.patches_ && sm("Patches").generateReplacementPatches_(r[a6].base_, e, t.patches_, t.inversePatches_)) : e = s_(t, r, []), sy(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== a4 ? e : void 0;
}
function s_(e, t, r) {
	if (sf(t)) return t;
	let a = e.immer_.shouldUseStrictIteration(), s = t[a6];
	if (!s) return sr(t, (a, i) => sw(e, s, t, a, i, r), a), t;
	if (s.scope_ !== e) return t;
	if (!s.modified_) return sx(e, s.base_, !0), s.base_;
	if (!s.finalized_) {
		s.finalized_ = !0, s.scope_.unfinalizedDrafts_--;
		let t = s.copy_, i = t, o = !1;
		3 === s.type_ && (i = new Set(t), t.clear(), o = !0), sr(i, (a, i) => sw(e, s, t, a, i, r, o), a), sx(e, t, !1), r && e.patches_ && sm("Patches").generatePatches_(s, r, e.patches_, e.inversePatches_);
	}
	return s.copy_;
}
function sw(e, t, r, a, s, i, o) {
	if (null == s || "object" != typeof s && !o) return;
	let l = sf(s);
	if (!l || o) {
		if (a5(s)) {
			let o = s_(e, s, i && t && 3 !== t.type_ && !ss(t.assigned_, a) ? i.concat(a) : void 0);
			if (si(r, a, o), !a5(o)) return;
			e.canAutoFreeze_ = !1;
		} else o && r.add(s);
		if (a9(s) && !l) {
			if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1 || t && t.base_ && t.base_[a] === s && l) return;
			s_(e, s), (!t || !t.scope_.parent_) && "symbol" != typeof a && (so(r) ? r.has(a) : Object.prototype.propertyIsEnumerable.call(r, a)) && sx(e, s);
		}
	}
}
function sx(e, t, r = !1) {
	!e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && sp(t, r);
}
var sO = {
	get(e, t) {
		if (t === a6) return e;
		let r = sc(e);
		if (!ss(r, t)) {
			var a;
			let s;
			return a = e, (s = sA(r, t)) ? "value" in s ? s.value : s.get?.call(a.draft_) : void 0;
		}
		let s = r[t];
		return e.finalized_ || !a9(s) ? s : s === sj(e.base_, t) ? (sP(e), e.copy_[t] = sC(s, e)) : s;
	},
	has: (e, t) => t in sc(e),
	ownKeys: (e) => Reflect.ownKeys(sc(e)),
	set(e, t, r) {
		let a = sA(sc(e), t);
		if (a?.set) return a.set.call(e.draft_, r), !0;
		if (!e.modified_) {
			let a = sj(sc(e), t), s = a?.[a6];
			if (s && s.base_ === r) return e.copy_[t] = r, e.assigned_[t] = !1, !0;
			if ((r === a ? 0 !== r || 1 / r == 1 / a : r != r && a != a) && (void 0 !== r || ss(e.base_, t))) return !0;
			sP(e), sE(e);
		}
		return !!(e.copy_[t] === r && (void 0 !== r || t in e.copy_) || Number.isNaN(r) && Number.isNaN(e.copy_[t])) || (e.copy_[t] = r, e.assigned_[t] = !0, !0);
	},
	deleteProperty: (e, t) => (void 0 !== sj(e.base_, t) || t in e.base_ ? (e.assigned_[t] = !1, sP(e), sE(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0),
	getOwnPropertyDescriptor(e, t) {
		let r = sc(e), a = Reflect.getOwnPropertyDescriptor(r, t);
		return a ? {
			writable: !0,
			configurable: 1 !== e.type_ || "length" !== t,
			enumerable: a.enumerable,
			value: r[t]
		} : a;
	},
	defineProperty() {
		a8(11);
	},
	getPrototypeOf: (e) => a7(e.base_),
	setPrototypeOf() {
		a8(12);
	}
}, sS = {};
function sj(e, t) {
	let r = e[a6];
	return (r ? sc(r) : e)[t];
}
function sA(e, t) {
	if (!(t in e)) return;
	let r = a7(e);
	for (; r;) {
		let e = Object.getOwnPropertyDescriptor(r, t);
		if (e) return e;
		r = a7(r);
	}
}
function sE(e) {
	!e.modified_ && (e.modified_ = !0, e.parent_ && sE(e.parent_));
}
function sP(e) {
	e.copy_ || (e.copy_ = su(e.base_, e.scope_.immer_.useStrictShallowCopy_));
}
function sC(e, t) {
	let r = so(e) ? sm("MapSet").proxyMap_(e, t) : sl(e) ? sm("MapSet").proxySet_(e, t) : function(e, t) {
		let r = Array.isArray(e), a = {
			type_: +!!r,
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
		}, s = a, i = sO;
		r && (s = [a], i = sS);
		let { revoke: o, proxy: l } = Proxy.revocable(s, i);
		return a.draft_ = l, a.revoke_ = o, l;
	}(e, t);
	return (t ? t.scope_ : V).drafts_.push(r), r;
}
sr(sO, (e, t) => {
	sS[e] = function() {
		return arguments[0] = arguments[0][0], t.apply(this, arguments);
	};
}), sS.deleteProperty = function(e, t) {
	return sS.set.call(this, e, t, void 0);
}, sS.set = function(e, t, r) {
	return sO.set.call(this, e[0], t, r, e[0]);
};
var sT = new class {
	constructor(e) {
		this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.useStrictIteration_ = !0, this.produce = (e, t, r) => {
			let a;
			if ("function" == typeof e && "function" != typeof t) {
				let r = t;
				t = e;
				let a = this;
				return function(e = r, ...s) {
					return a.produce(e, (e) => t.call(this, e, ...s));
				};
			}
			if ("function" != typeof t && a8(6), void 0 !== r && "function" != typeof r && a8(7), a9(e)) {
				let s = sk(this), i = sC(e, void 0), o = !0;
				try {
					a = t(i), o = !1;
				} finally {
					o ? sy(s) : sg(s);
				}
				return sv(s, r), sN(a, s);
			}
			if (e && "object" == typeof e) a8(1, e);
			else {
				if (void 0 === (a = t(e)) && (a = e), a === a4 && (a = void 0), this.autoFreeze_ && sp(a, !0), r) {
					let t = [], s = [];
					sm("Patches").generateReplacementPatches_(e, a, t, s), r(t, s);
				}
				return a;
			}
		}, this.produceWithPatches = (e, t) => {
			let r, a;
			return "function" == typeof e ? (t, ...r) => this.produceWithPatches(t, (t) => e(t, ...r)) : [
				this.produce(e, t, (e, t) => {
					r = e, a = t;
				}),
				r,
				a
			];
		}, "boolean" == typeof e?.autoFreeze && this.setAutoFreeze(e.autoFreeze), "boolean" == typeof e?.useStrictShallowCopy && this.setUseStrictShallowCopy(e.useStrictShallowCopy), "boolean" == typeof e?.useStrictIteration && this.setUseStrictIteration(e.useStrictIteration);
	}
	createDraft(e) {
		var t;
		a9(e) || a8(8), a5(e) && (a5(t = e) || a8(10, t), e = function e(t) {
			let r;
			if (!a9(t) || sf(t)) return t;
			let a = t[a6], s = !0;
			if (a) {
				if (!a.modified_) return a.base_;
				a.finalized_ = !0, r = su(t, a.scope_.immer_.useStrictShallowCopy_), s = a.scope_.immer_.shouldUseStrictIteration();
			} else r = su(t, !0);
			return sr(r, (t, a) => {
				si(r, t, e(a));
			}, s), a && (a.finalized_ = !1), r;
		}(t));
		let r = sk(this), a = sC(e, void 0);
		return a[a6].isManual_ = !0, sg(r), a;
	}
	finishDraft(e, t) {
		let r = e && e[a6];
		r && r.isManual_ || a8(9);
		let { scope_: a } = r;
		return sv(a, t), sN(void 0, a);
	}
	setAutoFreeze(e) {
		this.autoFreeze_ = e;
	}
	setUseStrictShallowCopy(e) {
		this.useStrictShallowCopy_ = e;
	}
	setUseStrictIteration(e) {
		this.useStrictIteration_ = e;
	}
	shouldUseStrictIteration() {
		return this.useStrictIteration_;
	}
	applyPatches(e, t) {
		let r;
		for (r = t.length - 1; r >= 0; r--) {
			let a = t[r];
			if (0 === a.path.length && "replace" === a.op) {
				e = a.value;
				break;
			}
		}
		r > -1 && (t = t.slice(r + 1));
		let a = sm("Patches").applyPatches_;
		return a5(e) ? a(e, t) : this.produce(e, (e) => a(e, t));
	}
}().produce, sI = e((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t, r = "function" == typeof Symbol, a = r && void 0 !== Symbol.toPrimitive ? Symbol.toPrimitive : w("Symbol.toPrimitive not found."), s = r && void 0 !== Symbol.iterator ? Symbol.iterator : w("Symbol.iterator not found."), i = Object.getPrototypeOf(Function), o = "function" == typeof Map && "function" == typeof Map.prototype.entries ? Map : w("A valid Map constructor could not be found."), l = "function" == typeof Set && "function" == typeof Set.prototype.entries ? Set : w("A valid Set constructor could not be found."), c = "function" == typeof WeakMap ? WeakMap : w("A valid WeakMap constructor could not be found."), u = r ? Symbol.for("@reflect-metadata:registry") : void 0, p = (!f(u) && h(Reflect) && Object.isExtensible(Reflect) && (t = Reflect[u]), f(t) && (t = function() {
		f(u) || "undefined" == typeof Reflect || u in Reflect || "function" != typeof Reflect.defineMetadata || (t = (e = Reflect).defineMetadata, r = e.hasOwnMetadata, a = e.getOwnMetadata, s = e.getOwnMetadataKeys, i = e.deleteMetadata, p = new c(), d = {
			isProviderFor: function(e, t) {
				var r = p.get(e);
				return !!(!f(r) && r.has(t)) || !!s(e, t).length && (f(r) && (r = new l(), p.set(e, r)), r.add(t), !0);
			},
			OrdinaryDefineOwnMetadata: t,
			OrdinaryHasOwnMetadata: r,
			OrdinaryGetOwnMetadata: a,
			OrdinaryOwnMetadataKeys: s,
			OrdinaryDeleteMetadata: i
		});
		var e, t, r, a, s, i, p, d, h, m, y, g = new c(), _ = {
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
					default: void 0 === y && (y = new l()), y.add(e);
				}
			},
			getProvider: w,
			setProvider: function(e, t, r) {
				if (!function(e) {
					if (f(e)) throw TypeError();
					return d === e || h === e || m === e || !f(y) && y.has(e);
				}(r)) throw Error("Metadata provider not registered.");
				var a = w(e, t);
				if (a !== r) {
					if (!f(a)) return !1;
					var s = g.get(e);
					f(s) && (s = new o(), g.set(e, s)), s.set(t, r);
				}
				return !0;
			}
		};
		return _;
		function w(e, t) {
			var r, a = g.get(e);
			return f(a) || (r = a.get(t)), f(r) && (r = function(e, t) {
				if (!f(h)) {
					if (h.isProviderFor(e, t)) return h;
					if (!f(m)) {
						if (m.isProviderFor(e, t)) return h;
						if (!f(y)) for (var r = k(y);;) {
							var a = b(r);
							if (!a) return;
							var s = a.value;
							if (s.isProviderFor(e, t)) return N(r), s;
						}
					}
				}
				if (!f(d) && d.isProviderFor(e, t)) return d;
			}(e, t), f(r) || (f(a) && (a = new o(), g.set(e, a)), a.set(t, r))), r;
		}
	}()), !f(u) && h(Reflect) && Object.isExtensible(Reflect) && Object.defineProperty(Reflect, u, {
		enumerable: !1,
		configurable: !1,
		writable: !1,
		value: t
	}), t), d = function(e) {
		var t = new c(), r = {
			isProviderFor: function(e, r) {
				var a = t.get(e);
				return !f(a) && a.has(r);
			},
			OrdinaryDefineOwnMetadata: function(e, t, r, s) {
				a(r, s, !0).set(e, t);
			},
			OrdinaryHasOwnMetadata: function(e, t, r) {
				var s = a(t, r, !1);
				return !f(s) && !!s.has(e);
			},
			OrdinaryGetOwnMetadata: function(e, t, r) {
				var s = a(t, r, !1);
				if (!f(s)) return s.get(e);
			},
			OrdinaryOwnMetadataKeys: function(e, t) {
				var r = [], s = a(e, t, !1);
				if (f(s)) return r;
				for (var i = k(s.keys()), o = 0;;) {
					var l = b(i);
					if (!l) return r.length = o, r;
					var c = l.value;
					try {
						r[o] = c;
					} catch (e) {
						try {
							N(i);
						} finally {
							throw e;
						}
					}
					o++;
				}
			},
			OrdinaryDeleteMetadata: function(e, r, s) {
				var i = a(r, s, !1);
				if (f(i) || !i.delete(e)) return !1;
				if (0 === i.size) {
					var o = t.get(r);
					f(o) || (o.delete(s), 0 === o.size && t.delete(o));
				}
				return !0;
			}
		};
		return p.registerProvider(r), r;
		function a(a, s, i) {
			var l = t.get(a), c = !1;
			if (f(l)) {
				if (!i) return;
				l = new o(), t.set(a, l), c = !0;
			}
			var u = l.get(s);
			if (f(u)) {
				if (!i) return;
				if (u = new o(), l.set(s, u), !e.setProvider(a, s, r)) throw l.delete(s), c && t.delete(a), Error("Wrong provider for target.");
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
	e.defineMetadata = function(e, t, r, a) {
		var s, i, o, l;
		if (!h(r)) throw TypeError();
		f(a) || (a = m(a)), s = e, i = t, x(o = r, l = a, !0).OrdinaryDefineOwnMetadata(s, i, o, l);
	}, e.getMetadata = function(e, t, r) {
		if (!h(t)) throw TypeError();
		return f(r) || (r = m(r)), function e(t, r, a) {
			if (!f(c = x(r, a, !1)) && function(e) {
				return !!e;
			}(c.OrdinaryHasOwnMetadata(t, r, a))) {
				var s = t, i = r, o = a, l = x(i, o, !1);
				return f(l) ? void 0 : l.OrdinaryGetOwnMetadata(s, i, o);
			}
			var c, u = _(r);
			if (null !== u) return e(t, u, a);
		}(e, t, r);
	}, e.getMetadataKeys = function(e, t) {
		if (!h(e)) throw TypeError();
		return f(t) || (t = m(t)), function e(t, r) {
			var a, s, i, o = (i = x(a = t, s = r, !1)) ? i.OrdinaryOwnMetadataKeys(a, s) : [], c = _(t);
			if (null === c) return o;
			var u = e(c, r);
			if (u.length <= 0) return o;
			if (o.length <= 0) return u;
			for (var p = new l(), d = [], f = 0; f < o.length; f++) {
				var h = o[f], m = p.has(h);
				m || (p.add(h), d.push(h));
			}
			for (var y = 0; y < u.length; y++) {
				var h = u[y], m = p.has(h);
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
			var r = "string", s = g(e, a);
			if (void 0 !== s) {
				var i = s.call(e, r);
				if (h(i)) throw TypeError();
				return i;
			}
			return function(e, t) {
				if ("string" === t) {
					var r = e.toString;
					if (y(r)) {
						var a = r.call(e);
						if (!h(a)) return a;
					}
					var s = e.valueOf;
					if (y(s)) {
						var a = s.call(e);
						if (!h(a)) return a;
					}
				} else {
					var s = e.valueOf;
					if (y(s)) {
						var a = s.call(e);
						if (!h(a)) return a;
					}
					var i = e.toString;
					if (y(i)) {
						var a = i.call(e);
						if (!h(a)) return a;
					}
				}
				throw TypeError();
			}(e, r);
		}(e, 0);
		return "symbol" == typeof t ? t : "" + t;
	}
	function y(e) {
		return "function" == typeof e;
	}
	function g(e, t) {
		var r = e[t];
		if (null != r) {
			if (!y(r)) throw TypeError();
			return r;
		}
	}
	function k(e) {
		var t = g(e, s);
		if (!y(t)) throw TypeError();
		var r = t.call(e);
		if (!h(r)) throw TypeError();
		return r;
	}
	function b(e) {
		var t = e.next();
		return !t.done && t;
	}
	function N(e) {
		var t = e.return;
		t && t.call(e);
	}
	function _(e) {
		var t = Object.getPrototypeOf(e);
		if ("function" != typeof e || e === i || t !== i) return t;
		var r = e.prototype, a = r && Object.getPrototypeOf(r);
		if (null == a || a === Object.prototype) return t;
		var s = a.constructor;
		return "function" != typeof s || s === e ? t : s;
	}
	function w(e) {
		throw e;
	}
	function x(e, t, r) {
		var a = p.getProvider(e, t);
		if (!f(a)) return a;
		if (r) {
			if (p.setProvider(e, t, d)) return d;
			throw Error("Illegal state.");
		}
	}
})(), sR = class {
	static getOwnPropertyNames(e) {
		return (0, sI.getMetadataKeys)(e);
	}
	static get(e, t) {
		return (0, sI.getMetadata)(t, e);
	}
	static define(e, t, r, a) {
		if (e && e.constructor && e.constructor != Object) {
			if (e$(r)) return void (0, sI.defineMetadata)(t, sT((0, sI.getMetadata)(t, e) ?? a ?? {}, r), e);
			(0, sI.defineMetadata)(t, r, e);
		}
	}
};
let sM = (e) => "function" == typeof e && `${e}`.startsWith("class"), s$ = {
	path: [],
	branch: []
};
var sD = class extends TypeError {
	value;
	key;
	type;
	refinement;
	path;
	branch;
	failures;
	constructor(e, t) {
		let r, { message: a, explanation: s,...i } = e, { path: o } = e, l = 0 === o.length ? a : `At path: ${o.join(".")} -- ${a}`;
		super(s ?? l), null != s && (this.cause = l), Object.assign(this, i), this.name = this.constructor.name, this.failures = () => r ??= [e, ...t()];
	}
};
let sV = Symbol("Type");
function* sL(e, t, r, a) {
	let s, i = e;
	for (let e of (("object" != typeof (s = i) || "function" != typeof s[Symbol.iterator]) && (i = [i]), i)) {
		let s = function(e, t, r, a) {
			if (!0 === e) return;
			let s = {};
			s = !1 === e ? {} : ep(e) ? { message: e } : e;
			let { path: i, branch: o, node: l } = t, { type: c } = r, { refinement: u, message: p = eD(a) ? "Required" : `Expected a value of type \`${c}\`${u ? ` with refinement \`${u}\`` : ""}, but received: \`${a}\`` } = s;
			return {
				...s,
				value: a,
				type: c,
				refinement: u,
				key: i[i.length - 1],
				path: i,
				branch: o,
				node: l,
				message: p
			};
		}(e, t, r, a);
		s && (yield s);
	}
}
function sF(e, t, r = {}) {
	let a = sB(e, t, r), s = function(e) {
		let { done: t, value: r } = e.next();
		return t ? void 0 : r;
	}(a);
	return s[0] ? [new sD(s[0], function* () {
		for (let e of a) e[0] && (yield e[0]);
	}), void 0] : [void 0, s[1]];
}
function* sB(e, t, r = {}) {
	let { path: a = [], branch: s = [e], node: i = { current: t }, coerce: o = !1, mask: l = !1 } = r, c = {
		mask: l,
		path: a,
		branch: s,
		node: i
	}, u = e;
	if (o) {
		let r = t.coercer(e, c);
		void 0 != r && (u = r);
	}
	let p = sU.valid;
	for (let a of sL(t.validator(u, c), c, t, e)) a.explanation = r.message, p = sU.not_valid, yield [a, void 0];
	for (let [e, d, f] of t.entries(u, c)) for (let t of sB(d, f, {
		path: void 0 === e ? a : [...a, e],
		branch: void 0 === e ? s : [...s, d],
		node: void 0 === e ? i : {
			current: f,
			parent: i
		},
		coerce: o,
		mask: l,
		message: r.message
	})) t[0] ? (p = null != t[0].refinement ? sU.not_refined : sU.not_valid, yield [t[0], void 0]) : o && (d = t[1], void 0 === e ? u = d : u instanceof Map ? u.set(e, d) : u instanceof Set ? u.add(d) : eo(u) && (u[e] = d));
	if (p !== sU.not_valid) for (let a of sL(t.refiner(u, c), c, t, e)) a.explanation = r.message, p = sU.not_refined, yield [a, void 0];
	p === sU.valid && (yield [void 0, u]);
}
var sU = ((L = sU || {})[L.valid = 0] = "valid", L[L.not_refined = 1] = "not_refined", L[L.not_valid = 2] = "not_valid", L);
let sz = (e) => (...t) => {
	let r = e(...t), a = (e, t) => {
		let a = sR.get(e, t) ?? {};
		sR.define(e, t, {
			...a,
			type: r
		});
	};
	return a.toString = () => `@type:${r.type}`, new Proxy(a, {
		ownKeys: () => [...Object.getOwnPropertyNames(r), ...Object.getOwnPropertySymbols(r)],
		get: (e, t) => r[t]
	});
}, sG = (e) => (...t) => {
	let r = (r) => e(r, ...t);
	return new Proxy((e, t) => {
		sR.define(e, t, (e) => {
			(e.modifies ??= []).push({ modify: r });
		}, {});
	}, { get(e, t) {
		if ("modify" == t) return r;
	} });
};
var sW = class e {
	static RecordKey = Symbol("RecordKey");
	static meta = Symbol("meta");
	static optional = Symbol("optional");
	static underlying = Symbol("underlying");
	static unwrap = Symbol("unwrap");
	static extractSchema = (e) => new sH().toValue(e);
	static extractMeta = (t) => new sH().toValue(t.meta ?? t[e.meta]);
	static create(t, r, a) {
		let s, i = r ?? t[e.underlying]?.schema ?? {};
		return new Proxy({}, {
			ownKeys(e) {
				let r = /* @__PURE__ */ new Map();
				if (a) {
					if (t[a]) for (let e of Object.getOwnPropertyNames(t[a])) r.set(e, e);
					if (i && i[a]) for (let e of Object.getOwnPropertyNames(i[a])) r.set(e, e);
				} else {
					for (let e of Object.getOwnPropertyNames(t)) r.set(e, e);
					if (i) for (let e of Object.getOwnPropertyNames(i)) r.set(e, e);
				}
				return [...r.keys()];
			},
			get(r, o) {
				if (o === e.meta) return s ??= e.create(t, i, e.meta);
				if (a) {
					if (N(t)) {
						let e = t?.[a]?.[o];
						if (!eD(e)) return e;
					}
					return i ? i?.[a]?.[o] : void 0;
				}
				if (N(t)) {
					let e = t?.[o];
					if (!eD(e)) return e;
				}
				return i ? i[o] : void 0;
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
	if (N(e)) return e[t] ?? (e[sW.unwrap] ? sK(e[sW.unwrap]().schema, t) : void 0);
}, sq = (e, t) => {
	if (N(e)) return e[sW.meta]?.[t] ?? (e[sW.unwrap] ? sq(e[sW.unwrap]().schema, t) : void 0);
}, sH = class {
	constructor(e = !1) {
		this.deref = e;
	}
	toValue(e) {
		if (e) {
			if (!eD(e.schema)) return this.toValue(e.schema);
			if (this.deref && e[sW.unwrap]) return this.toValue(e[sW.unwrap]());
			if (ek(e)) return this.toArray(e);
			if (e.constructor === Object) return this.toObject(e);
		}
		return e;
	}
	toObject(e) {
		let t = {};
		for (let r of Object.getOwnPropertyNames(e)) t[r] = this.toValue(e[r]);
		return t;
	}
	toArray(e) {
		let t = [];
		for (let r of e) t.push(this.toValue(r));
		return t;
	}
}, sY = class e {
	static parse(t) {
		if ("" === t) return [];
		if ("/" === t) return [""];
		if ("/" !== t.charAt(0)) throw Error("Invalid JSON pointer: " + t);
		let r = t.substring(1).split(/\//);
		return r.map((t, a) => e.unescape(t, a === r.length - 1));
	}
	static create(t = []) {
		return 0 === t.length ? "" : "/" + t.map(e.escape).join("/");
	}
	static unescape(e, t) {
		return "" == e && t ? sW.RecordKey : e.replace(/~1/g, "/").replace(/~0/g, "~");
	}
	static escape(e) {
		return e == sW.RecordKey ? "" : e.toString().replace(/~/g, "~0").replace(/\//g, "~1");
	}
	static get(t, r) {
		let a = Array.isArray(r) ? r : e.parse(r);
		for (let e = 0; e < a.length; e++) {
			let r = a[e];
			if (e > 0 && r == sW.RecordKey) return a[e - 1];
			if (!("object" == typeof t && r in t)) throw Error("Invalid reference token: " + r);
			t = t[r];
		}
		return t;
	}
}, sJ = class e {
	static define = sz((t = () => !0) => new class extends e {
		validator(e, r) {
			return t(e, r);
		}
	}(null));
	static fromTypeObject = (t, r) => {
		let a = t.type ?? r ?? new e({});
		return t.modifies ? a.use(...t.modifies ?? []) : a;
	};
	[sV] = sV;
	schema;
	constructor(e) {
		if (e) {
			this.schema = sW.create(e);
			return;
		}
		this.schema = e ?? null;
	}
	get meta() {
		return this.schema ? this.schema[sW.meta] : {};
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
		if (ep(e)) {
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
		return sF(e, this, t);
	}
	create(e) {
		let t = sF(e, this, { coerce: !0 });
		if (t[0]) throw t[0];
		return t[1];
	}
	mask(e) {
		let t = sF(e, this, {
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
	static of(t, r) {
		return new e({
			...r,
			[sW.underlying]: t
		});
	}
	static refine(t, r, a) {
		return new class extends e {
			*refiner(e, s) {
				for (let i of (yield* this.unwrap.refiner(e, s), sL(r(e, s), s, t, e))) yield {
					...i,
					refinement: Object.keys(a).join(",")
				};
			}
		}({
			...a,
			[sW.underlying]: t
		});
	}
	get unwrap() {
		let e = this.schema[sW.unwrap];
		return e ? e() : this.schema[sW.underlying];
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
	static create = sz((t, r) => new e({
		default: r,
		[sW.underlying]: t
	}));
	coercer(e, t) {
		return void 0 === e ? this.schema.default : super.unwrap.coercer(e, t);
	}
}, sQ = class e extends sX {
	static create = sz((t) => new e({
		[sW.underlying]: t,
		[sW.optional]: t
	}));
	refiner(e, t) {
		return void 0 === e || super.unwrap.refiner(e, t);
	}
	validator(e, t) {
		return void 0 === e || super.unwrap.validator(e, t);
	}
}, s0 = class e extends sX {
	static create = sz((t, r) => new e({
		$ref: t,
		[sW.unwrap]: r
	}));
}, s1 = class e extends sJ {
	static create = sz(() => new e());
	constructor() {
		super({});
	}
	get type() {
		return "any";
	}
	validator() {
		return !0;
	}
}, s2 = class e extends sJ {
	static create = sz(() => new e({ type: "null" }));
	get type() {
		return "null";
	}
	validator(e, t) {
		return null === e;
	}
	coercer(e, t) {
		return e;
	}
}, s4 = class e extends sJ {
	static create = sz(() => new e({ type: "string" }));
	get type() {
		return this.schema.type;
	}
	validator(e, t) {
		return ep(e);
	}
	coercer(e, t) {
		return eD(e) || null === e ? e : String(e);
	}
}, s3 = class e extends sJ {
	static create = sz(() => new e({ type: "number" }));
	get type() {
		return this.schema.type;
	}
	validator(e, t) {
		return e_(e);
	}
	coercer(e, t) {
		try {
			let t = void 0 != e ? parseFloat(String(e)) : void 0;
			if (e_(t)) return t;
		} catch (e) {}
	}
}, s6 = class e extends sJ {
	static create = sz(() => new e({ type: "integer" }));
	get type() {
		return this.schema.type;
	}
	validator(e, t) {
		return eL(e);
	}
	coercer(e, t) {
		try {
			let t = void 0 != e ? parseInt(String(e)) : void 0;
			return eL(t) ? t : void 0;
		} catch (e) {
			return;
		}
	}
}, s8 = class e extends sJ {
	static create = sz(() => new e({ type: "boolean" }));
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
}, s7 = class e extends sJ {
	static create = sz(() => new e({
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
}, s5 = class e extends sJ {
	static create = sz(e.createEnum);
	static createEnum(t) {
		return new e({ enum: t });
	}
	static literal = sz((t) => new e({ enum: [t] }));
	static nativeEnum = sz((t) => new e({ enum: Object.values(t) }));
	get type() {
		return "enums";
	}
	validator(e, t) {
		return this.schema.enum.includes(e);
	}
	coercer(e, t) {
		return e;
	}
}, s9 = class e extends sJ {
	static create = sz(() => new e(!1));
	get type() {
		return "never";
	}
	validator(e, t) {
		return !1;
	}
	coercer(e, t) {
		return e;
	}
}, ie = class e extends sJ {
	static create(t) {
		let r = (e = {}) => {
			let t = [];
			for (let [r, a] of Object.entries(e)) sW.schemaProp(a, sW.optional) || t.push(r);
			return t;
		};
		return sz(() => {
			if (t) {
				if (sM(t)) {
					let a = new t(), s = {};
					for (let [e, t] of Object.entries(a)) s[e] = s5.literal(t);
					for (let e of sR.getOwnPropertyNames(a)) {
						let t = sR.get(a, e);
						if (t) {
							let r = sJ.fromTypeObject(t, s[e]);
							e in s ? s[e] = r.default(s[e].schema?.enum?.[0]) : s[e] = r;
						}
					}
					return new e({
						type: "object",
						properties: s,
						required: r(s),
						additionalProperties: s9.create()
					});
				}
				return new e({
					type: "object",
					properties: t,
					required: r(t),
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
	*entries(e, t = s$) {
		if (eo(e)) {
			let r = new Set(Object.keys(e));
			if (this.schema.properties) for (let t in this.schema.properties) r.delete(t), yield [
				t,
				e[t],
				this.schema.properties[t]
			];
			if (t.node?.current.type !== "intersection") for (let t of r) yield [
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
			let r = { ...e };
			if (t.mask) {
				let e = this.schema.properties;
				if (e) for (let t in r) void 0 === e[t] && delete r[t];
			}
			return r;
		}
		return super.coercer(e, t);
	}
}, it = class e extends sJ {
	static create = sz((t, r) => new e({
		type: "object",
		propertyNames: t,
		additionalProperties: r
	}));
	get type() {
		return "record";
	}
	*entries(e) {
		if (eo(e)) for (let [t, r] of Object.entries(e)) yield [
			sW.RecordKey,
			t,
			this.schema.propertyNames
		], yield [
			t,
			r,
			this.schema.additionalProperties
		];
	}
	validator(e) {
		return eo(e);
	}
}, ir = class e extends sJ {
	static create = sz((t) => new e({
		type: "array",
		items: t
	}));
	get type() {
		return this.schema.type;
	}
	*entries(e, t = s$) {
		if (Array.isArray(e)) for (let [t, r] of e.entries()) yield [
			t,
			r,
			this.schema.items
		];
	}
	validator(e) {
		return ek(e);
	}
	coercer(e) {
		return ek(e) ? e.slice() : e;
	}
}, ia = class e extends sJ {
	static create = sz((t) => new e({
		type: "array",
		items: t
	}));
	get type() {
		return "tuple";
	}
	*entries(e, t) {
		if (ek(e)) {
			let t = Math.max(this.schema.items.length, e.length);
			for (let r = 0; r < t; r++) yield [
				r,
				e[r],
				this.schema.items[r] ?? s9.create()
			];
		}
	}
	validator(e) {
		return ek(e) && e.length === this.schema.items.length;
	}
	coercer(e) {
		return ek(e) ? e.slice() : e;
	}
}, is = class e extends sJ {
	static create = sz((...t) => new e({ allOf: t }));
	get type() {
		return "intersection";
	}
	*entries(e, t = s$) {
		for (let r of this.schema.allOf) yield* r.entries(e, t);
	}
	*validator(e, t) {
		for (let r of this.schema.allOf) yield* sL(r.validator(e, t), t, this, e);
	}
	*refiner(e, t) {
		for (let r of this.schema.allOf) yield* sL(r.refiner(e, t), t, this, e);
	}
}, ii = class e extends sJ {
	static create = sz((...t) => new e({ oneOf: t }));
	static discriminatorMapping(t, ...r) {
		return sz(() => {
			let a = [];
			if (1 == r.length && r[0].constructor == Object) for (let [e, s] of Object.entries(r[0])) if (sW.schemaProp(s, "$ref")) a.push(s);
			else {
				let r = { [t]: s5.literal(e) };
				for (let [e, t, a] of s.entries({}, s$)) r[String(e)] = a;
				a.push(ie.create(r));
			}
			else for (let e of r) sM(e) && a.push(ie.create(e));
			return new e({
				oneOf: a,
				discriminator: { propertyName: t }
			});
		})();
	}
	_discriminatorPropName;
	discriminatorPropType(e) {
		return this._discriminatorPropName ??= (() => {
			let t = this.schema.discriminator?.propertyName ?? "", r = [], a = [];
			for (let e of this.schema.oneOf) {
				let s = sW.schemaProp(e, "properties")[t];
				if (!s) continue;
				let i = s.schema.enum;
				i && r.push(...i), a.push(s.meta);
			}
			return sX.of(s5.create(r), { [sW.meta]: sW.create(a[0], e.node?.current.meta ?? {}) });
		})();
	}
	_discriminatorMappingProps = /* @__PURE__ */ new Map();
	discriminatorMapping(e, t, r) {
		if (this._discriminatorMappingProps.get(t)) return this._discriminatorMappingProps.get(t);
		if ((this.discriminatorPropType(r)?.schema?.enum ?? []).includes(t)) {
			let r = this.schema.oneOf.find((r) => {
				let a = sW.schemaProp(r, "properties")[e];
				if (a) {
					let [e, r] = a.validate(t);
					return !e;
				}
				return !1;
			});
			if (r) {
				if (!this._discriminatorMappingProps.has(t)) {
					let a = {};
					for (let [t, s] of Object.entries(sW.schemaProp(r, "properties"))) t !== e && (a[t] = s);
					this._discriminatorMappingProps.set(t, a);
				}
				return this._discriminatorMappingProps.get(t);
			}
		}
		return {};
	}
	*entries(e, t = s$) {
		if (this.schema.discriminator) {
			let r = this.schema.discriminator.propertyName, a = e?.[r];
			yield* ie.create({
				[r]: this.discriminatorPropType(t),
				...this.discriminatorMapping(r, a, t)
			}).entries(e, t);
		}
	}
	get type() {
		return "union";
	}
	coercer(e) {
		for (let t of this.schema.oneOf) {
			let [r, a] = sF(e, t, { coerce: !0 });
			if (!r) return a;
		}
		return e;
	}
	validator(e, t) {
		if (this.schema.discriminator) {
			let r = this.schema.discriminator.propertyName, a = e?.[r];
			return ie.create({
				[r]: this.discriminatorPropType(t),
				...this.discriminatorMapping(r, a, t)
			}).validator(e, t);
		}
		let r = [];
		for (let a of this.schema.oneOf) {
			let [ ...s] = sB(e, a, t), [i] = s;
			if (i && !i[0]) return [];
			for (let [e] of s) e && r.push(e);
		}
		return [`Expected the value to satisfy a union of \`${this.schema.oneOf.map((e) => e.type).join(" | ")}\`, but received: ${e}`, ...r];
	}
};
s0.create;
let io = s1.create;
s9.create, s2.create;
let il = s4.create, ic = sG((e, t, r) => sX.refine(e, (e) => !!e && e.length >= t || (r ?? `Expected string value length great than or equal ${t}, but received "${e}"`), { minLength: t }));
s3.create;
let iu = s6.create, ip = s8.create;
s7.create;
let id = s5.create, ih = s5.nativeEnum;
s5.literal;
let im = ie.create, iv = it.create;
ia.create;
let iy = ir.create;
is.create;
let ig = ii.create;
ii.discriminatorMapping;
let ik = sJ.define;
sX.refine;
let ib = sG((e) => sQ.create(e)), iN = sG((e, t) => sX.of(e, { [sW.meta]: t })), i_ = aO;
var iw = Symbol("component");
let ix = (e) => eC(e) && e[iw] === iw, iO = (e) => {
	let t;
	return !!(t = Object.values(e)[0]) && t[sV] == sV;
};
function iS(...e) {
	let t, r = {}, a = {};
	for (let s of e) {
		if (e$(s)) {
			t = s;
			continue;
		}
		eD(t) ? r = s : a = s;
	}
	let [s, i] = ev(Object.keys(r), (e) => /^on[A-Z]/.test(e)), o = {
		emits: [...s.map((e) => eG(e.slice(2))), ...a.emits ?? []],
		props: [...i.filter((e) => !/^[$]/.test(e)), ...a.props ?? []].reduce((e, t) => {
			let a = r[t];
			return a ? {
				...e,
				[t]: {
					default() {
						try {
							return a.create(void 0);
						} catch (e) {
							console.log(e);
						}
					},
					validator: (e) => a.validate(e)
				}
			} : {
				...e,
				[t]: { default() {} }
			};
		}, {})
	};
	return {
		...a,
		get name() {
			return this.displayName ?? a.displayName ?? a.name;
		},
		set name(n) {
			a.name = n;
		},
		setup: (e, r) => t(e, r),
		emits: o.emits,
		props: o.props,
		inheritAttrs: a.inheritAttrs,
		[iw]: iw
	};
}
let ij = (e, t) => new Proxy(e, { get: (e, r) => t[r] ?? e[r] });
var iA = "undefined" != typeof document;
function iE(e) {
	return "object" == typeof e || "displayName" in e || "props" in e || "__vccOpts" in e;
}
var iP = Object.assign;
function iC(e, t) {
	let r = {};
	for (let a in t) {
		let s = t[a];
		r[a] = iI(s) ? s.map(e) : e(s);
	}
	return r;
}
var iT = () => {}, iI = Array.isArray;
function iR(e, t) {
	let r = {};
	for (let a in e) r[a] = a in t ? t[a] : e[a];
	return r;
}
var iM = /#/g, i$ = /&/g, iD = /\//g, iV = /=/g, iL = /\?/g, iF = /\+/g, iB = /%5B/g, iU = /%5D/g, iz = /%5E/g, iG = /%60/g, iW = /%7B/g, iK = /%7C/g, iq = /%7D/g, iH = /%20/g;
function iY(e) {
	return null == e ? "" : encodeURI("" + e).replace(iK, "|").replace(iB, "[").replace(iU, "]");
}
function iJ(e) {
	return iY(e).replace(iF, "%2B").replace(iH, "+").replace(iM, "%23").replace(i$, "%26").replace(iG, "`").replace(iW, "{").replace(iq, "}").replace(iz, "^");
}
function iX(e) {
	return iY(e).replace(iM, "%23").replace(iL, "%3F").replace(iD, "%2F");
}
function iZ(e) {
	if (null == e) return null;
	try {
		return decodeURIComponent("" + e);
	} catch (e) {}
	return "" + e;
}
var iQ = /\/$/;
function i0(e, t, r = "/") {
	let a, s = {}, i = "", o = "", l = t.indexOf("#"), c = t.indexOf("?");
	return (c = l >= 0 && c > l ? -1 : c) >= 0 && (a = t.slice(0, c), s = e((i = t.slice(c, l > 0 ? l : t.length)).slice(1))), l >= 0 && (a = a || t.slice(0, l), o = t.slice(l, t.length)), {
		fullPath: (a = function(e, t) {
			let r, a;
			if (e.startsWith("/")) return e;
			if (!e) return t;
			let s = t.split("/"), i = e.split("/"), o = i[i.length - 1];
			(".." === o || "." === o) && i.push("");
			let l = s.length - 1;
			for (r = 0; r < i.length; r++) if ("." !== (a = i[r])) if (".." === a) l > 1 && l--;
			else break;
			return s.slice(0, l).join("/") + "/" + i.slice(r).join("/");
		}(null != a ? a : t, r)) + i + o,
		path: a,
		query: s,
		hash: iZ(o)
	};
}
function i1(e, t) {
	return t && e.toLowerCase().startsWith(t.toLowerCase()) ? e.slice(t.length) || "/" : e;
}
function i2(e, t) {
	return (e.aliasOf || e) === (t.aliasOf || t);
}
function i4(e, t) {
	if (Object.keys(e).length !== Object.keys(t).length) return !1;
	for (let s in e) {
		var r, a;
		if (r = e[s], a = t[s], iI(r) ? !i3(r, a) : iI(a) ? !i3(a, r) : r !== a) return !1;
	}
	return !0;
}
function i3(e, t) {
	return iI(t) ? e.length === t.length && e.every((e, r) => e === t[r]) : 1 === e.length && e[0] === t;
}
var i6 = {
	path: "/",
	name: void 0,
	params: {},
	query: {},
	hash: "",
	fullPath: "/",
	matched: [],
	meta: {},
	redirectedFrom: void 0
}, i8 = ((F = {}).pop = "pop", F.push = "push", F), i7 = ((B = {}).back = "back", B.forward = "forward", B.unknown = "", B), i5 = /^[^#]+#/;
function i9(e, t) {
	return e.replace(i5, "#") + t;
}
var oe = () => ({
	left: window.scrollX,
	top: window.scrollY
});
function ot(e, t) {
	return (history.state ? history.state.position - t : -1) + e;
}
var on = /* @__PURE__ */ new Map();
function or(e) {
	return "string" == typeof e || "symbol" == typeof e;
}
var oa = ((U = {})[U.MATCHER_NOT_FOUND = 1] = "MATCHER_NOT_FOUND", U[U.NAVIGATION_GUARD_REDIRECT = 2] = "NAVIGATION_GUARD_REDIRECT", U[U.NAVIGATION_ABORTED = 4] = "NAVIGATION_ABORTED", U[U.NAVIGATION_CANCELLED = 8] = "NAVIGATION_CANCELLED", U[U.NAVIGATION_DUPLICATED = 16] = "NAVIGATION_DUPLICATED", U), os = Symbol("");
function oi(e, t) {
	return iP(Error(), {
		type: e,
		[os]: !0
	}, t);
}
function oo(e, t) {
	return e instanceof Error && os in e && (null == t || !!(e.type & t));
}
function ol(e) {
	let t = {};
	if ("" === e || "?" === e) return t;
	let r = ("?" === e[0] ? e.slice(1) : e).split("&");
	for (let e = 0; e < r.length; ++e) {
		let a = r[e].replace(iF, " "), s = a.indexOf("="), i = iZ(s < 0 ? a : a.slice(0, s)), o = s < 0 ? null : iZ(a.slice(s + 1));
		if (i in t) {
			let e = t[i];
			iI(e) || (e = t[i] = [e]), e.push(o);
		} else t[i] = o;
	}
	return t;
}
function oc(e) {
	let t = "";
	for (let r in e) {
		let a = e[r];
		if (r = iJ(r).replace(iV, "%3D"), null == a) {
			void 0 !== a && (t += (t.length ? "&" : "") + r);
			continue;
		}
		(iI(a) ? a.map((e) => e && iJ(e)) : [a && iJ(a)]).forEach((e) => {
			void 0 !== e && (t += (t.length ? "&" : "") + r, null != e && (t += "=" + e));
		});
	}
	return t;
}
oa.MATCHER_NOT_FOUND, oa.NAVIGATION_GUARD_REDIRECT, oa.NAVIGATION_ABORTED, oa.NAVIGATION_CANCELLED, oa.NAVIGATION_DUPLICATED;
var ou = Symbol(""), op = Symbol(""), od = Symbol(""), of = Symbol(""), oh = Symbol("");
function om() {
	let e = [];
	return {
		add: function(t) {
			return e.push(t), () => {
				let r = e.indexOf(t);
				r > -1 && e.splice(r, 1);
			};
		},
		list: () => e.slice(),
		reset: function() {
			e = [];
		}
	};
}
function ov(e, t, r, a, s, i = (e) => e()) {
	let o = a && (a.enterCallbacks[s] = a.enterCallbacks[s] || []);
	return () => new Promise((l, c) => {
		let u = (e) => {
			if (!1 === e) c(oi(oa.NAVIGATION_ABORTED, {
				from: r,
				to: t
			}));
			else if (e instanceof Error) c(e);
			else "string" == typeof e || e && "object" == typeof e ? c(oi(oa.NAVIGATION_GUARD_REDIRECT, {
				from: t,
				to: e
			})) : (o && a.enterCallbacks[s] === o && "function" == typeof e && o.push(e), l());
		}, p = Promise.resolve(i(() => e.call(a && a.instances[s], t, r, u)));
		e.length < 3 && (p = p.then(u)), p.catch((e) => c(e));
	});
}
function oy(e, t, r, a, s = (e) => e()) {
	let i = [];
	for (let o of e) for (let e in o.components) {
		let l = o.components[e];
		if ("beforeRouteEnter" === t || o.instances[e]) if (iE(l)) {
			let c = (l.__vccOpts || l)[t];
			c && i.push(ov(c, r, a, o, e, s));
		} else {
			let c = l();
			i.push(() => c.then((i) => {
				if (!i) throw Error(`Couldn't resolve component "${e}" at "${o.path}"`);
				let l = i.__esModule || "Module" === i[Symbol.toStringTag] || i.default && iE(i.default) ? i.default : i;
				o.mods[e] = i, o.components[e] = l;
				let c = (l.__vccOpts || l)[t];
				return c && ov(c, r, a, o, e, s)();
			}));
		}
	}
	return i;
}
function og(e, t) {
	let { pathname: r, search: a, hash: s } = t, i = e.indexOf("#");
	if (i > -1) {
		let t = s.includes(e.slice(i)) ? e.slice(i).length : 1, r = s.slice(t);
		return "/" !== r[0] && (r = "/" + r), i1(r, "");
	}
	return i1(r, e) + a + s;
}
function ok(e, t, r, a = !1, s = !1) {
	return {
		back: e,
		current: t,
		forward: r,
		replaced: a,
		position: window.history.length,
		scroll: s ? oe() : null
	};
}
function ob(e) {
	let t = function(e) {
		let { history: t, location: r } = window, a = { value: og(e, r) }, s = { value: t.state };
		function i(a, i, o) {
			let l = e.indexOf("#"), c = l > -1 ? (r.host && document.querySelector("base") ? e : e.slice(l)) + a : location.protocol + "//" + location.host + e + a;
			try {
				t[o ? "replaceState" : "pushState"](i, "", c), s.value = i;
			} catch (e) {
				console.error(e), r[o ? "replace" : "assign"](c);
			}
		}
		return s.value || i(a.value, {
			back: null,
			current: a.value,
			forward: null,
			position: t.length - 1,
			replaced: !0,
			scroll: null
		}, !0), {
			location: a,
			state: s,
			push: function(e, r) {
				let o = iP({}, s.value, t.state, {
					forward: e,
					scroll: oe()
				});
				i(o.current, o, !0), i(e, iP({}, ok(a.value, e, null), { position: o.position + 1 }, r), !1), a.value = e;
			},
			replace: function(e, r) {
				i(e, iP({}, t.state, ok(s.value.back, e, s.value.forward, !0), r, { position: s.value.position }), !0), a.value = e;
			}
		};
	}(e = function(e) {
		if (!e) if (iA) {
			let t = document.querySelector("base");
			e = (e = t && t.getAttribute("href") || "/").replace(/^\w+:\/\/[^\/]+/, "");
		} else e = "/";
		return "/" !== e[0] && "#" !== e[0] && (e = "/" + e), e.replace(iQ, "");
	}(e)), r = function(e, t, r, a) {
		let s = [], i = [], o = null, l = ({ state: i }) => {
			let l = og(e, location), c = r.value, u = t.value, p = 0;
			if (i) {
				if (r.value = l, t.value = i, o && o === c) {
					o = null;
					return;
				}
				p = u ? i.position - u.position : 0;
			} else a(l);
			s.forEach((e) => {
				e(r.value, c, {
					delta: p,
					type: i8.pop,
					direction: p ? p > 0 ? i7.forward : i7.back : i7.unknown
				});
			});
		};
		function c() {
			if ("hidden" === document.visibilityState) {
				let { history: e } = window;
				e.state && e.replaceState(iP({}, e.state, { scroll: oe() }), "");
			}
		}
		return window.addEventListener("popstate", l), window.addEventListener("pagehide", c), document.addEventListener("visibilitychange", c), {
			pauseListeners: function() {
				o = r.value;
			},
			listen: function(e) {
				s.push(e);
				let t = () => {
					let t = s.indexOf(e);
					t > -1 && s.splice(t, 1);
				};
				return i.push(t), t;
			},
			destroy: function() {
				for (let e of i) e();
				i = [], window.removeEventListener("popstate", l), window.removeEventListener("pagehide", c), document.removeEventListener("visibilitychange", c);
			}
		};
	}(e, t.state, t.location, t.replace), a = iP({
		location: "",
		base: e,
		go: function(e, t = !0) {
			t || r.pauseListeners(), history.go(e);
		},
		createHref: i9.bind(null, e)
	}, t, r);
	return Object.defineProperty(a, "location", {
		enumerable: !0,
		get: () => t.location.value
	}), Object.defineProperty(a, "state", {
		enumerable: !0,
		get: () => t.state.value
	}), a;
}
var oN = ((z = {})[z.Static = 0] = "Static", z[z.Param = 1] = "Param", z[z.Group = 2] = "Group", z), o_ = ((G = o_ || {})[G.Static = 0] = "Static", G[G.Param = 1] = "Param", G[G.ParamRegExp = 2] = "ParamRegExp", G[G.ParamRegExpEnd = 3] = "ParamRegExpEnd", G[G.EscapeNext = 4] = "EscapeNext", G), ow = {
	type: oN.Static,
	value: ""
}, ox = /[a-zA-Z0-9_]/, oO = "[^/]+?", oS = {
	sensitive: !1,
	strict: !1,
	start: !0,
	end: !0
}, oj = ((W = oj || {})[W._multiplier = 10] = "_multiplier", W[W.Root = 90] = "Root", W[W.Segment = 40] = "Segment", W[W.SubSegment = 30] = "SubSegment", W[W.Static = 40] = "Static", W[W.Dynamic = 20] = "Dynamic", W[W.BonusCustomRegExp = 10] = "BonusCustomRegExp", W[W.BonusWildcard = -50] = "BonusWildcard", W[W.BonusRepeatable = -20] = "BonusRepeatable", W[W.BonusOptional = -8] = "BonusOptional", W[W.BonusStrict = .7000000000000001] = "BonusStrict", W[W.BonusCaseSensitive = .25] = "BonusCaseSensitive", W), oA = /[.+*?^${}()[\]/\\]/g;
function oE(e, t) {
	let r = 0, a = e.score, s = t.score;
	for (; r < a.length && r < s.length;) {
		let e = function(e, t) {
			let r = 0;
			for (; r < e.length && r < t.length;) {
				let a = t[r] - e[r];
				if (a) return a;
				r++;
			}
			return e.length < t.length ? 1 === e.length && e[0] === oj.Static + oj.Segment ? -1 : 1 : e.length > t.length ? 1 === t.length && t[0] === oj.Static + oj.Segment ? 1 : -1 : 0;
		}(a[r], s[r]);
		if (e) return e;
		r++;
	}
	if (1 === Math.abs(s.length - a.length)) {
		if (oP(a)) return 1;
		if (oP(s)) return -1;
	}
	return s.length - a.length;
}
function oP(e) {
	let t = e[e.length - 1];
	return e.length > 0 && t[t.length - 1] < 0;
}
var oC = {
	strict: !1,
	end: !0,
	sensitive: !1
};
function oT(e, t) {
	let r = {};
	for (let a of t) a in e && (r[a] = e[a]);
	return r;
}
function oI(e) {
	let t = {
		path: e.path,
		redirect: e.redirect,
		name: e.name,
		meta: e.meta || {},
		aliasOf: e.aliasOf,
		beforeEnter: e.beforeEnter,
		props: function(e) {
			let t = {}, r = e.props || !1;
			if ("component" in e) t.default = r;
			else for (let a in e.components) t[a] = "object" == typeof r ? r[a] : r;
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
function oR(e) {
	for (; e;) {
		if (e.record.aliasOf) return !0;
		e = e.parent;
	}
	return !1;
}
function oM({ record: e }) {
	return !!(e.name || e.components && Object.keys(e.components).length || e.redirect);
}
function o$(e) {
	let t = r4(od), r = r4(of), a = a0(() => {
		let r = nj(e.to);
		return t.resolve(r);
	}), s = a0(() => {
		let { matched: e } = a.value, { length: t } = e, s = e[t - 1], i = r.matched;
		if (!s || !i.length) return -1;
		let o = i.findIndex(i2.bind(null, s));
		if (o > -1) return o;
		let l = oV(e[t - 2]);
		return t > 1 && oV(s) === l && i[i.length - 1].path !== l ? i.findIndex(i2.bind(null, e[t - 2])) : o;
	}), i = a0(() => s.value > -1 && function(e, t) {
		for (let r in t) {
			let a = t[r], s = e[r];
			if ("string" == typeof a) {
				if (a !== s) return !1;
			} else if (!iI(s) || s.length !== a.length || a.some((e, t) => e !== s[t])) return !1;
		}
		return !0;
	}(r.params, a.value.params)), o = a0(() => s.value > -1 && s.value === r.matched.length - 1 && i4(r.params, a.value.params));
	return {
		route: a,
		href: a0(() => a.value.href),
		isActive: i,
		isExactActive: o,
		navigate: function(r = {}) {
			if (function(e) {
				if (!e.metaKey && !e.altKey && !e.ctrlKey && !e.shiftKey && !e.defaultPrevented && (void 0 === e.button || 0 === e.button)) {
					if (e.currentTarget && e.currentTarget.getAttribute) {
						let t = e.currentTarget.getAttribute("target");
						if (/\b_blank\b/i.test(t)) return;
					}
					return e.preventDefault && e.preventDefault(), !0;
				}
			}(r)) {
				let r = t[nj(e.replace) ? "replace" : "push"](nj(e.to)).catch(iT);
				return e.viewTransition && "undefined" != typeof document && "startViewTransition" in document && document.startViewTransition(() => r), r;
			}
			return Promise.resolve();
		}
	};
}
var oD = rm({
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
	useLink: o$,
	setup(e, { slots: t }) {
		let r = np(o$(e)), { options: a } = r4(od), s = a0(() => ({
			[oL(e.activeClass, a.linkActiveClass, "router-link-active")]: r.isActive,
			[oL(e.exactActiveClass, a.linkExactActiveClass, "router-link-exact-active")]: r.isExactActive
		}));
		return () => {
			var a;
			let i = t.default && (1 === (a = t.default(r)).length ? a[0] : a);
			return e.custom ? i : a1("a", {
				"aria-current": r.isExactActive ? e.ariaCurrentValue : null,
				href: r.href,
				onClick: r.navigate,
				class: s.value
			}, i);
		};
	}
});
function oV(e) {
	return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
var oL = (e, t, r) => null != e ? e : null != t ? t : r, oF = rm({
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
	setup(e, { attrs: t, slots: r }) {
		let a = r4(oh), s = a0(() => e.route || a.value), i = r4(op, 0), o = a0(() => {
			let e, t = nj(i), { matched: r } = s.value;
			for (; (e = r[t]) && !e.components;) t++;
			return t;
		}), l = a0(() => s.value.matched[o.value]);
		r2(op, a0(() => o.value + 1)), r2(ou, l), r2(oh, s);
		let c = nw();
		return af(() => [
			c.value,
			l.value,
			e.name
		], ([e, t, r], [a, s, i]) => {
			t && (t.instances[r] = e, s && s !== t && e && e === a && (t.leaveGuards.size || (t.leaveGuards = s.leaveGuards), t.updateGuards.size || (t.updateGuards = s.updateGuards))), !e || !t || s && i2(t, s) && a || (t.enterCallbacks[r] || []).forEach((t) => t(e));
		}, { flush: "post" }), () => {
			let a = s.value, i = e.name, o = l.value, u = o && o.components[i];
			if (!u) return oB(r.default, {
				Component: u,
				route: a
			});
			let p = o.props[i], d = a1(u, iP({}, p ? !0 === p ? a.params : "function" == typeof p ? p(a) : p : null, t, {
				onVnodeUnmounted: (e) => {
					e.component.isUnmounted && (o.instances[i] = null);
				},
				ref: c
			}));
			return oB(r.default, {
				Component: d,
				route: a
			}) || d;
		};
	}
});
function oB(e, t) {
	if (!e) return null;
	let r = e(t);
	return 1 === r.length ? r[0] : r;
}
function oU(e) {
	let t, r, a, s = function(e, t) {
		let r = [], a = /* @__PURE__ */ new Map();
		function s(e, o, l) {
			let c, u, p = !l, d = oI(e);
			d.aliasOf = l && l.record;
			let f = iR(t, e), h = [d];
			if ("alias" in e) for (let t of "string" == typeof e.alias ? [e.alias] : e.alias) h.push(oI(iP({}, d, {
				components: l ? l.record.components : d.components,
				path: t,
				aliasOf: l ? l.record : d
			})));
			for (let t of h) {
				let { path: h } = t;
				if (o && "/" !== h[0]) {
					let e = o.record.path, r = "/" === e[e.length - 1] ? "" : "/";
					t.path = o.record.path + (h && r + h);
				}
				if (c = function(e, t, r) {
					let a = iP(function(e, t) {
						let r = iP({}, oS, t), a = [], s = r.start ? "^" : "", i = [];
						for (let t of e) {
							let e = t.length ? [] : [oj.Root];
							r.strict && !t.length && (s += "/");
							for (let a = 0; a < t.length; a++) {
								let o = t[a], l = oj.Segment + (r.sensitive ? oj.BonusCaseSensitive : 0);
								if (o.type === oN.Static) a || (s += "/"), s += o.value.replace(oA, "\\$&"), l += oj.Static;
								else if (o.type === oN.Param) {
									let { value: e, repeatable: r, optional: c, regexp: u } = o;
									i.push({
										name: e,
										repeatable: r,
										optional: c
									});
									let p = u || oO;
									p !== oO && (l += oj.BonusCustomRegExp);
									let d = r ? `((?:${p})(?:/(?:${p}))*)` : `(${p})`;
									a || (d = c && t.length < 2 ? `(?:/${d})` : "/" + d), c && (d += "?"), s += d, l += oj.Dynamic, c && (l += oj.BonusOptional), r && (l += oj.BonusRepeatable), ".*" === p && (l += oj.BonusWildcard);
								}
								e.push(l);
							}
							a.push(e);
						}
						if (r.strict && r.end) {
							let e = a.length - 1;
							a[e][a[e].length - 1] += oj.BonusStrict;
						}
						r.strict || (s += "/?"), r.end ? s += "$" : r.strict && !s.endsWith("/") && (s += "(?:/|$)");
						let o = new RegExp(s, r.sensitive ? "" : "i");
						return {
							re: o,
							score: a,
							keys: i,
							parse: function(e) {
								let t = e.match(o), r = {};
								if (!t) return null;
								for (let e = 1; e < t.length; e++) {
									let a = t[e] || "", s = i[e - 1];
									r[s.name] = a && s.repeatable ? a.split("/") : a;
								}
								return r;
							},
							stringify: function(t) {
								let r = "", a = !1;
								for (let s of e) for (let e of (a && r.endsWith("/") || (r += "/"), a = !1, s)) if (e.type === oN.Static) r += e.value;
								else if (e.type === oN.Param) {
									let { value: i, repeatable: o, optional: l } = e, c = i in t ? t[i] : "";
									if (iI(c) && !o) throw Error(`Provided param "${i}" is an array but it is not repeatable (* or + modifiers)`);
									let u = iI(c) ? c.join("/") : c;
									if (!u) if (l) s.length < 2 && (r.endsWith("/") ? r = r.slice(0, -1) : a = !0);
									else throw Error(`Missing required param "${i}"`);
									r += u;
								}
								return r || "/";
							}
						};
					}(function(e) {
						let t, r;
						if (!e) return [[]];
						if ("/" === e) return [[ow]];
						if (!e.startsWith("/")) throw Error(`Invalid path "${e}"`);
						function a(e) {
							throw Error(`ERR (${s})/"${u}": ${e}`);
						}
						let s = o_.Static, i = s, o = [];
						function l() {
							t && o.push(t), t = [];
						}
						let c = 0, u = "", p = "";
						function d() {
							u && (s === o_.Static ? t.push({
								type: oN.Static,
								value: u
							}) : s === o_.Param || s === o_.ParamRegExp || s === o_.ParamRegExpEnd ? (t.length > 1 && ("*" === r || "+" === r) && a(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`), t.push({
								type: oN.Param,
								value: u,
								regexp: p,
								repeatable: "*" === r || "+" === r,
								optional: "*" === r || "?" === r
							})) : a("Invalid state to consume buffer"), u = "");
						}
						for (; c < e.length;) {
							if ("\\" === (r = e[c++]) && s !== o_.ParamRegExp) {
								i = s, s = o_.EscapeNext;
								continue;
							}
							switch (s) {
								case o_.Static:
									"/" === r ? (u && d(), l()) : ":" === r ? (d(), s = o_.Param) : u += r;
									break;
								case o_.EscapeNext:
									u += r, s = i;
									break;
								case o_.Param:
									"(" === r ? s = o_.ParamRegExp : ox.test(r) ? u += r : (d(), s = o_.Static, "*" !== r && "?" !== r && "+" !== r && c--);
									break;
								case o_.ParamRegExp:
									")" === r ? "\\" == p[p.length - 1] ? p = p.slice(0, -1) + r : s = o_.ParamRegExpEnd : p += r;
									break;
								case o_.ParamRegExpEnd:
									d(), s = o_.Static, "*" !== r && "?" !== r && "+" !== r && c--, p = "";
									break;
								default: a("Unknown state");
							}
						}
						return s === o_.ParamRegExp && a(`Unfinished custom RegExp for param "${u}"`), d(), l(), o;
					}(e.path), r), {
						record: e,
						parent: t,
						children: [],
						alias: []
					});
					return t && !a.record.aliasOf == !t.record.aliasOf && t.children.push(a), a;
				}(t, o, f), l ? l.alias.push(c) : ((u = u || c) !== c && u.alias.push(c), p && e.name && !oR(c) && i(e.name)), oM(c) && function(e) {
					let t = function(e, t) {
						let r = 0, a = t.length;
						for (; r !== a;) {
							let s = r + a >> 1;
							0 > oE(e, t[s]) ? a = s : r = s + 1;
						}
						let s = function(e) {
							let t = e;
							for (; t = t.parent;) if (oM(t) && 0 === oE(e, t)) return t;
						}(e);
						return s && (a = t.lastIndexOf(s, a - 1)), a;
					}(e, r);
					r.splice(t, 0, e), e.record.name && !oR(e) && a.set(e.record.name, e);
				}(c), d.children) {
					let e = d.children;
					for (let t = 0; t < e.length; t++) s(e[t], c, l && l.children[t]);
				}
				l = l || c;
			}
			return u ? () => {
				i(u);
			} : iT;
		}
		function i(e) {
			if (or(e)) {
				let t = a.get(e);
				t && (a.delete(e), r.splice(r.indexOf(t), 1), t.children.forEach(i), t.alias.forEach(i));
			} else {
				let t = r.indexOf(e);
				t > -1 && (r.splice(t, 1), e.record.name && a.delete(e.record.name), e.children.forEach(i), e.alias.forEach(i));
			}
		}
		return t = iR(oC, t), e.forEach((e) => s(e)), {
			addRoute: s,
			resolve: function(e, t) {
				let s, i, o, l = {};
				if ("name" in e && e.name) {
					if (!(s = a.get(e.name))) throw oi(oa.MATCHER_NOT_FOUND, { location: e });
					o = s.record.name, l = iP(oT(t.params, s.keys.filter((e) => !e.optional).concat(s.parent ? s.parent.keys.filter((e) => e.optional) : []).map((e) => e.name)), e.params && oT(e.params, s.keys.map((e) => e.name))), i = s.stringify(l);
				} else if (null != e.path) i = e.path, (s = r.find((e) => e.re.test(i))) && (l = s.parse(i), o = s.record.name);
				else {
					if (!(s = t.name ? a.get(t.name) : r.find((e) => e.re.test(t.path)))) throw oi(oa.MATCHER_NOT_FOUND, {
						location: e,
						currentLocation: t
					});
					o = s.record.name, l = iP({}, t.params, e.params), i = s.stringify(l);
				}
				let c = [], u = s;
				for (; u;) c.unshift(u.record), u = u.parent;
				return {
					name: o,
					path: i,
					params: l,
					matched: c,
					meta: c.reduce((e, t) => iP(e, t.meta), {})
				};
			},
			removeRoute: i,
			clearRoutes: function() {
				r.length = 0, a.clear();
			},
			getRoutes: function() {
				return r;
			},
			getRecordMatcher: function(e) {
				return a.get(e);
			}
		};
	}(e.routes, e), i = e.parseQuery || ol, o = e.stringifyQuery || oc, l = e.history, c = om(), u = om(), p = om(), d = nx(i6), f = i6;
	iA && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
	let h = iC.bind(null, (e) => "" + e), m = iC.bind(null, iX), y = iC.bind(null, iZ);
	function g(e, t) {
		var r;
		let a, c;
		if (t = iP({}, t || d.value), "string" == typeof e) {
			let r = i0(i, e, t.path), a = s.resolve({ path: r.path }, t), o = l.createHref(r.fullPath);
			return iP(r, a, {
				params: y(a.params),
				hash: iZ(r.hash),
				redirectedFrom: void 0,
				href: o
			});
		}
		if (null != e.path) a = iP({}, e, { path: i0(i, e.path, t.path).path });
		else {
			let r = iP({}, e.params);
			for (let e in r) r[e] ?? delete r[e];
			a = iP({}, e, { params: m(r) }), t.params = m(t.params);
		}
		let u = s.resolve(a, t), p = e.hash || "";
		u.params = h(y(u.params));
		let f = (c = (r = iP({}, e, {
			hash: iY(p).replace(iW, "{").replace(iq, "}").replace(iz, "^"),
			path: u.path
		})).query ? o(r.query) : "", r.path + (c && "?") + c + (r.hash || "")), g = l.createHref(f);
		return iP({
			fullPath: f,
			hash: p,
			query: o === oc ? function(e) {
				let t = {};
				for (let r in e) {
					let a = e[r];
					void 0 !== a && (t[r] = iI(a) ? a.map((e) => null == e ? null : "" + e) : null == a ? a : "" + a);
				}
				return t;
			}(e.query) : e.query || {}
		}, u, {
			redirectedFrom: void 0,
			href: g
		});
	}
	function k(e) {
		return "string" == typeof e ? i0(i, e, d.value.path) : iP({}, e);
	}
	function b(e, t) {
		if (f !== e) return oi(oa.NAVIGATION_CANCELLED, {
			from: t,
			to: e
		});
	}
	function N(e, t) {
		let r = e.matched[e.matched.length - 1];
		if (r && r.redirect) {
			let { redirect: a } = r, s = "function" == typeof a ? a(e, t) : a;
			return "string" == typeof s && ((s = s.includes("?") || s.includes("#") ? s = k(s) : { path: s }).params = {}), iP({
				query: e.query,
				hash: e.hash,
				params: null != s.path ? {} : e.params
			}, s);
		}
	}
	function _(e, t) {
		let r, a, s, i = f = g(e), l = d.value, c = e.state, u = e.force, p = !0 === e.replace, h = N(i, l);
		return h ? _(iP(k(h), {
			state: "object" == typeof h ? iP({}, c, h.state) : c,
			force: u,
			replace: p
		}), t || i) : (i.redirectedFrom = t, !u && (a = l.matched.length - 1, s = i.matched.length - 1, a > -1 && a === s && i2(l.matched[a], i.matched[s]) && i4(l.params, i.params) && o(l.query) === o(i.query) && l.hash === i.hash) && (r = oi(oa.NAVIGATION_DUPLICATED, {
			to: i,
			from: l
		}), T(l, l, !0, !1)), (r ? Promise.resolve(r) : O(i, l)).catch((e) => oo(e) ? oo(e, oa.NAVIGATION_GUARD_REDIRECT) ? e : C(e) : P(e, i, l)).then((e) => {
			if (e) {
				if (oo(e, oa.NAVIGATION_GUARD_REDIRECT)) return _(iP({ replace: p }, k(e.to), {
					state: "object" == typeof e.to ? iP({}, c, e.to.state) : c,
					force: u
				}), t || i);
			} else e = j(i, l, !0, p, c);
			return S(i, l, e), e;
		}));
	}
	function w(e, t) {
		let r = b(e, t);
		return r ? Promise.reject(r) : Promise.resolve();
	}
	function x(e) {
		let t = R.values().next().value;
		return t && "function" == typeof t.runWithContext ? t.runWithContext(e) : e();
	}
	function O(e, t) {
		let r, [a, s, i] = function(e, t) {
			let r = [], a = [], s = [], i = Math.max(t.matched.length, e.matched.length);
			for (let o = 0; o < i; o++) {
				let i = t.matched[o];
				i && (e.matched.find((e) => i2(e, i)) ? a.push(i) : r.push(i));
				let l = e.matched[o];
				l && !t.matched.find((e) => i2(e, l)) && s.push(l);
			}
			return [
				r,
				a,
				s
			];
		}(e, t);
		for (let s of (r = oy(a.reverse(), "beforeRouteLeave", e, t), a)) s.leaveGuards.forEach((a) => {
			r.push(ov(a, e, t));
		});
		let o = w.bind(null, e, t);
		return r.push(o), $(r).then(() => {
			for (let a of (r = [], c.list())) r.push(ov(a, e, t));
			return r.push(o), $(r);
		}).then(() => {
			for (let a of (r = oy(s, "beforeRouteUpdate", e, t), s)) a.updateGuards.forEach((a) => {
				r.push(ov(a, e, t));
			});
			return r.push(o), $(r);
		}).then(() => {
			for (let a of (r = [], i)) if (a.beforeEnter) if (iI(a.beforeEnter)) for (let s of a.beforeEnter) r.push(ov(s, e, t));
			else r.push(ov(a.beforeEnter, e, t));
			return r.push(o), $(r);
		}).then(() => (e.matched.forEach((e) => e.enterCallbacks = {}), (r = oy(i, "beforeRouteEnter", e, t, x)).push(o), $(r))).then(() => {
			for (let a of (r = [], u.list())) r.push(ov(a, e, t));
			return r.push(o), $(r);
		}).catch((e) => oo(e, oa.NAVIGATION_CANCELLED) ? e : Promise.reject(e));
	}
	function S(e, t, r) {
		p.list().forEach((a) => x(() => a(e, t, r)));
	}
	function j(e, t, r, a, s) {
		let i = b(e, t);
		if (i) return i;
		let o = t === i6, c = iA ? history.state : {};
		r && (a || o ? l.replace(e.fullPath, iP({ scroll: o && c && c.scroll }, s)) : l.push(e.fullPath, s)), d.value = e, T(e, t, r, o), C();
	}
	let A = om(), E = om();
	function P(e, t, r) {
		C(e);
		let a = E.list();
		return a.length ? a.forEach((a) => a(e, t, r)) : console.error(e), Promise.reject(e);
	}
	function C(e) {
		return r || (r = !e, t || (t = l.listen((e, t, r) => {
			var a, s;
			if (!M.listening) return;
			let i = g(e), o = N(i, M.currentRoute.value);
			if (o) return void _(iP(o, {
				replace: !0,
				force: !0
			}), i).catch(iT);
			f = i;
			let c = d.value;
			iA && (a = ot(c.fullPath, r.delta), s = oe(), on.set(a, s)), O(i, c).catch((e) => oo(e, oa.NAVIGATION_ABORTED | oa.NAVIGATION_CANCELLED) ? e : oo(e, oa.NAVIGATION_GUARD_REDIRECT) ? (_(iP(k(e.to), { force: !0 }), i).then((e) => {
				oo(e, oa.NAVIGATION_ABORTED | oa.NAVIGATION_DUPLICATED) && !r.delta && r.type === i8.pop && l.go(-1, !1);
			}).catch(iT), Promise.reject()) : (r.delta && l.go(-r.delta, !1), P(e, i, c))).then((e) => {
				(e = e || j(i, c, !1)) && (r.delta && !oo(e, oa.NAVIGATION_CANCELLED) ? l.go(-r.delta, !1) : r.type === i8.pop && oo(e, oa.NAVIGATION_ABORTED | oa.NAVIGATION_DUPLICATED) && l.go(-1, !1)), S(i, c, e);
			}).catch(iT);
		})), A.list().forEach(([t, r]) => e ? r(e) : t()), A.reset()), e;
	}
	function T(t, r, a, s) {
		var i;
		let o, { scrollBehavior: l } = e;
		if (!iA || !l) return Promise.resolve();
		let c = !a && (i = ot(t.fullPath, 0), o = on.get(i), on.delete(i), o) || (s || !a) && history.state && history.state.scroll || null;
		return nK().then(() => l(t, r, c)).then((e) => e && function(e) {
			let t;
			if ("el" in e) {
				let r, a, s = e.el, i = "string" == typeof s && s.startsWith("#"), o = "string" == typeof s ? i ? document.getElementById(s.slice(1)) : document.querySelector(s) : s;
				if (!o) return;
				r = document.documentElement.getBoundingClientRect(), a = o.getBoundingClientRect(), t = {
					behavior: e.behavior,
					left: a.left - r.left - (e.left || 0),
					top: a.top - r.top - (e.top || 0)
				};
			} else t = e;
			"scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(null != t.left ? t.left : window.scrollX, null != t.top ? t.top : window.scrollY);
		}(e)).catch((e) => P(e, t, r));
	}
	let I = (e) => l.go(e), R = /* @__PURE__ */ new Set(), M = {
		currentRoute: d,
		listening: !0,
		addRoute: function(e, t) {
			let r, a;
			return or(e) ? (r = s.getRecordMatcher(e), a = t) : a = e, s.addRoute(a, r);
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
			return _(iP(k(e), { replace: !0 }));
		},
		go: I,
		back: () => I(-1),
		forward: () => I(1),
		beforeEach: c.add,
		beforeResolve: u.add,
		afterEach: p.add,
		onError: E.add,
		isReady: function() {
			return r && d.value !== i6 ? Promise.resolve() : new Promise((e, t) => {
				A.add([e, t]);
			});
		},
		install(e) {
			e.component("RouterLink", oD), e.component("RouterView", oF), e.config.globalProperties.$router = M, Object.defineProperty(e.config.globalProperties, "$route", {
				enumerable: !0,
				get: () => nj(d)
			}), iA && !a && d.value === i6 && (a = !0, _(l.location).catch((e) => {}));
			let s = {};
			for (let e in i6) Object.defineProperty(s, e, {
				get: () => d.value[e],
				enumerable: !0
			});
			e.provide(od, M), e.provide(of, nd(s)), e.provide(oh, d);
			let i = e.unmount;
			R.add(e), e.unmount = function() {
				R.delete(e), R.size < 1 && (f = i6, t && t(), t = null, d.value = i6, a = !1, r = !1), i();
			};
		}
	};
	function $(e) {
		return e.reduce((e, t) => e.then(() => x(t)), Promise.resolve());
	}
	return M;
}
function oz() {
	return r4(od);
}
let oG = oD, oW = oF;
function oK(e) {
	return "function" == typeof e;
}
function oq(e) {
	var t = e(function(e) {
		Error.call(e), e.stack = Error().stack;
	});
	return t.prototype = Object.create(Error.prototype), t.prototype.constructor = t, t;
}
var oH = oq(function(e) {
	return function(t) {
		e(this), this.message = t ? t.length + " errors occurred during unsubscription:\n" + t.map(function(e, t) {
			return t + 1 + ") " + e.toString();
		}).join("\n  ") : "", this.name = "UnsubscriptionError", this.errors = t;
	};
});
function oY(e, t) {
	if (e) {
		var r = e.indexOf(t);
		0 <= r && e.splice(r, 1);
	}
}
var oJ = function() {
	var e;
	function t(e) {
		this.initialTeardown = e, this.closed = !1, this._parentage = null, this._finalizers = null;
	}
	return t.prototype.unsubscribe = function() {
		if (!this.closed) {
			this.closed = !0;
			var e, t, a, i, o, l = this._parentage;
			if (l) if (this._parentage = null, Array.isArray(l)) try {
				for (var c = u(l), p = c.next(); !p.done; p = c.next()) p.value.remove(this);
			} catch (t) {
				e = { error: t };
			} finally {
				try {
					p && !p.done && (t = c.return) && t.call(c);
				} finally {
					if (e) throw e.error;
				}
			}
			else l.remove(this);
			var d = this.initialTeardown;
			if (oK(d)) try {
				d();
			} catch (e) {
				o = e instanceof oH ? e.errors : [e];
			}
			var f = this._finalizers;
			if (f) {
				this._finalizers = null;
				try {
					for (var h = u(f), m = h.next(); !m.done; m = h.next()) {
						var y = m.value;
						try {
							oQ(y);
						} catch (e) {
							o = null != o ? o : [], e instanceof oH ? o = s(s([], r(o)), r(e.errors)) : o.push(e);
						}
					}
				} catch (e) {
					a = { error: e };
				} finally {
					try {
						m && !m.done && (i = h.return) && i.call(h);
					} finally {
						if (a) throw a.error;
					}
				}
			}
			if (o) throw new oH(o);
		}
	}, t.prototype.add = function(e) {
		var r;
		if (e && e !== this) if (this.closed) oQ(e);
		else {
			if (e instanceof t) {
				if (e.closed || e._hasParent(this)) return;
				e._addParent(this);
			}
			(this._finalizers = null != (r = this._finalizers) ? r : []).push(e);
		}
	}, t.prototype._hasParent = function(e) {
		var t = this._parentage;
		return t === e || Array.isArray(t) && t.includes(e);
	}, t.prototype._addParent = function(e) {
		var t = this._parentage;
		this._parentage = Array.isArray(t) ? (t.push(e), t) : t ? [t, e] : e;
	}, t.prototype._removeParent = function(e) {
		var t = this._parentage;
		t === e ? this._parentage = null : Array.isArray(t) && oY(t, e);
	}, t.prototype.remove = function(e) {
		var r = this._finalizers;
		r && oY(r, e), e instanceof t && e._removeParent(this);
	}, (e = new t()).closed = !0, t.EMPTY = e, t;
}(), oX = oJ.EMPTY;
function oZ(e) {
	return e instanceof oJ || e && "closed" in e && oK(e.remove) && oK(e.add) && oK(e.unsubscribe);
}
function oQ(e) {
	oK(e) ? e() : e.unsubscribe();
}
var o0 = void 0, o1 = {
	setTimeout: function(e, t) {
		for (var a = [], i = 2; i < arguments.length; i++) a[i - 2] = arguments[i];
		var o = o1.delegate;
		return (null == o ? void 0 : o.setTimeout) ? o.setTimeout.apply(o, s([e, t], r(a))) : setTimeout.apply(void 0, s([e, t], r(a)));
	},
	clearTimeout: function(e) {
		var t = o1.delegate;
		return ((null == t ? void 0 : t.clearTimeout) || clearTimeout)(e);
	},
	delegate: void 0
};
function o2(e) {
	o1.setTimeout(function() {
		throw e;
	});
}
function o4() {}
var o3 = o6("C", void 0, void 0);
function o6(e, t, r) {
	return {
		kind: e,
		value: t,
		error: r
	};
}
function o7(e) {
	e();
}
var o5 = function(e) {
	function t(t) {
		var r = e.call(this) || this;
		return r.isStopped = !1, t ? (r.destination = t, oZ(t) && t.add(r)) : r.destination = ls, r;
	}
	return o(t, e), t.create = function(e, t, r) {
		return new ln(e, t, r);
	}, t.prototype.next = function(e) {
		this.isStopped ? la(o6("N", e, void 0), this) : this._next(e);
	}, t.prototype.error = function(e) {
		this.isStopped ? la(o6("E", void 0, e), this) : (this.isStopped = !0, this._error(e));
	}, t.prototype.complete = function() {
		this.isStopped ? la(o3, this) : (this.isStopped = !0, this._complete());
	}, t.prototype.unsubscribe = function() {
		this.closed || (this.isStopped = !0, e.prototype.unsubscribe.call(this), this.destination = null);
	}, t.prototype._next = function(e) {
		this.destination.next(e);
	}, t.prototype._error = function(e) {
		try {
			this.destination.error(e);
		} finally {
			this.unsubscribe();
		}
	}, t.prototype._complete = function() {
		try {
			this.destination.complete();
		} finally {
			this.unsubscribe();
		}
	}, t;
}(oJ);
Function.prototype.bind;
var lt = function() {
	function e(e) {
		this.partialObserver = e;
	}
	return e.prototype.next = function(e) {
		var t = this.partialObserver;
		if (t.next) try {
			t.next(e);
		} catch (e) {
			lr(e);
		}
	}, e.prototype.error = function(e) {
		var t = this.partialObserver;
		if (t.error) try {
			t.error(e);
		} catch (e) {
			lr(e);
		}
		else lr(e);
	}, e.prototype.complete = function() {
		var e = this.partialObserver;
		if (e.complete) try {
			e.complete();
		} catch (e) {
			lr(e);
		}
	}, e;
}(), ln = function(e) {
	function t(t, r, a) {
		var s, o = e.call(this) || this;
		return oK(t) || !t ? s = {
			next: null != t ? t : void 0,
			error: null != r ? r : void 0,
			complete: null != a ? a : void 0
		} : s = t, o.destination = new lt(s), o;
	}
	return o(t, e), t;
}(o5);
function lr(e) {
	o2(e);
}
function la(e, t) {}
var ls = {
	closed: !0,
	next: o4,
	error: function(e) {
		throw e;
	},
	complete: o4
}, li = "function" == typeof Symbol && Symbol.observable || "@@observable";
function lo(e) {
	return e;
}
function ll(e) {
	return 0 === e.length ? lo : 1 === e.length ? e[0] : function(t) {
		return e.reduce(function(e, t) {
			return t(e);
		}, t);
	};
}
var lc = function() {
	function e(e) {
		e && (this._subscribe = e);
	}
	return e.prototype.lift = function(t) {
		var r = new e();
		return r.source = this, r.operator = t, r;
	}, e.prototype.subscribe = function(e, t, r) {
		var a = this, s = !function(e) {
			return e && e instanceof o5 || e && oK(e.next) && oK(e.error) && oK(e.complete) && oZ(e);
		}(e) ? new ln(e, t, r) : e;
		return o7(function() {
			var e = a.operator, t = a.source;
			s.add(e ? e.call(s, t) : t ? a._subscribe(s) : a._trySubscribe(s));
		}), s;
	}, e.prototype._trySubscribe = function(e) {
		try {
			return this._subscribe(e);
		} catch (t) {
			e.error(t);
		}
	}, e.prototype.forEach = function(e, t) {
		var r = this;
		return new (t = (lu(t)))(function(t, a) {
			var s = new ln({
				next: function(t) {
					try {
						e(t);
					} catch (e) {
						a(e), s.unsubscribe();
					}
				},
				error: a,
				complete: t
			});
			r.subscribe(s);
		});
	}, e.prototype._subscribe = function(e) {
		var t;
		return null == (t = this.source) ? void 0 : t.subscribe(e);
	}, e.prototype[li] = function() {
		return this;
	}, e.prototype.pipe = function() {
		for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
		return ll(e)(this);
	}, e.prototype.toPromise = function(e) {
		var t = this;
		return new (e = (lu(e)))(function(e, r) {
			var a;
			t.subscribe(function(e) {
				return a = e;
			}, function(e) {
				return r(e);
			}, function() {
				return e(a);
			});
		});
	}, e.create = function(t) {
		return new e(t);
	}, e;
}();
function lu(e) {
	var t;
	return null != (t = null != e ? e : o0) ? t : Promise;
}
function lp(e) {
	return function(t) {
		if (oK(null == t ? void 0 : t.lift)) return t.lift(function(t) {
			try {
				return e(t, this);
			} catch (e) {
				this.error(e);
			}
		});
		throw TypeError("Unable to lift unknown Observable type");
	};
}
function ld(e, t, r, a, s) {
	return new lf(e, t, r, a, s);
}
var lf = function(e) {
	function t(t, r, a, s, i, o) {
		var l = e.call(this, t) || this;
		return l.onFinalize = i, l.shouldUnsubscribe = o, l._next = r ? function(e) {
			try {
				r(e);
			} catch (e) {
				t.error(e);
			}
		} : e.prototype._next, l._error = s ? function(e) {
			try {
				s(e);
			} catch (e) {
				t.error(e);
			} finally {
				this.unsubscribe();
			}
		} : e.prototype._error, l._complete = a ? function() {
			try {
				a();
			} catch (e) {
				t.error(e);
			} finally {
				this.unsubscribe();
			}
		} : e.prototype._complete, l;
	}
	return o(t, e), t.prototype.unsubscribe = function() {
		var t;
		if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
			var r = this.closed;
			e.prototype.unsubscribe.call(this), r || null == (t = this.onFinalize) || t.call(this);
		}
	}, t;
}(o5), lh = oq(function(e) {
	return function() {
		e(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
	};
}), lm = function(e) {
	function t() {
		var t = e.call(this) || this;
		return t.closed = !1, t.currentObservers = null, t.observers = [], t.isStopped = !1, t.hasError = !1, t.thrownError = null, t;
	}
	return o(t, e), t.prototype.lift = function(e) {
		var t = new lv(this, this);
		return t.operator = e, t;
	}, t.prototype._throwIfClosed = function() {
		if (this.closed) throw new lh();
	}, t.prototype.next = function(e) {
		var t = this;
		o7(function() {
			var r, a;
			if (t._throwIfClosed(), !t.isStopped) {
				t.currentObservers || (t.currentObservers = Array.from(t.observers));
				try {
					for (var s = u(t.currentObservers), i = s.next(); !i.done; i = s.next()) i.value.next(e);
				} catch (e) {
					r = { error: e };
				} finally {
					try {
						i && !i.done && (a = s.return) && a.call(s);
					} finally {
						if (r) throw r.error;
					}
				}
			}
		});
	}, t.prototype.error = function(e) {
		var t = this;
		o7(function() {
			if (t._throwIfClosed(), !t.isStopped) {
				t.hasError = t.isStopped = !0, t.thrownError = e;
				for (var r = t.observers; r.length;) r.shift().error(e);
			}
		});
	}, t.prototype.complete = function() {
		var e = this;
		o7(function() {
			if (e._throwIfClosed(), !e.isStopped) {
				e.isStopped = !0;
				for (var t = e.observers; t.length;) t.shift().complete();
			}
		});
	}, t.prototype.unsubscribe = function() {
		this.isStopped = this.closed = !0, this.observers = this.currentObservers = null;
	}, Object.defineProperty(t.prototype, "observed", {
		get: function() {
			var e;
			return (null == (e = this.observers) ? void 0 : e.length) > 0;
		},
		enumerable: !1,
		configurable: !0
	}), t.prototype._trySubscribe = function(t) {
		return this._throwIfClosed(), e.prototype._trySubscribe.call(this, t);
	}, t.prototype._subscribe = function(e) {
		return this._throwIfClosed(), this._checkFinalizedStatuses(e), this._innerSubscribe(e);
	}, t.prototype._innerSubscribe = function(e) {
		var t = this, r = this.hasError, a = this.isStopped, s = this.observers;
		return r || a ? oX : (this.currentObservers = null, s.push(e), new oJ(function() {
			t.currentObservers = null, oY(s, e);
		}));
	}, t.prototype._checkFinalizedStatuses = function(e) {
		var t = this.hasError, r = this.thrownError, a = this.isStopped;
		t ? e.error(r) : a && e.complete();
	}, t.prototype.asObservable = function() {
		var e = new lc();
		return e.source = this, e;
	}, t.create = function(e, t) {
		return new lv(e, t);
	}, t;
}(lc), lv = function(e) {
	function t(t, r) {
		var a = e.call(this) || this;
		return a.destination = t, a.source = r, a;
	}
	return o(t, e), t.prototype.next = function(e) {
		var t, r;
		null == (r = null == (t = this.destination) ? void 0 : t.next) || r.call(t, e);
	}, t.prototype.error = function(e) {
		var t, r;
		null == (r = null == (t = this.destination) ? void 0 : t.error) || r.call(t, e);
	}, t.prototype.complete = function() {
		var e, t;
		null == (t = null == (e = this.destination) ? void 0 : e.complete) || t.call(e);
	}, t.prototype._subscribe = function(e) {
		var t, r;
		return null != (r = null == (t = this.source) ? void 0 : t.subscribe(e)) ? r : oX;
	}, t;
}(lm), ly = function(e) {
	function t(t) {
		var r = e.call(this) || this;
		return r._value = t, r;
	}
	return o(t, e), Object.defineProperty(t.prototype, "value", {
		get: function() {
			return this.getValue();
		},
		enumerable: !1,
		configurable: !0
	}), t.prototype._subscribe = function(t) {
		var r = e.prototype._subscribe.call(this, t);
		return r.closed || t.next(this._value), r;
	}, t.prototype.getValue = function() {
		var e = this.hasError, t = this.thrownError, r = this._value;
		if (e) throw t;
		return this._throwIfClosed(), r;
	}, t.prototype.next = function(t) {
		e.prototype.next.call(this, this._value = t);
	}, t;
}(lm), lg = {
	now: function() {
		return (lg.delegate || Date).now();
	},
	delegate: void 0
}, lk = function(e) {
	function t(t, r) {
		return e.call(this) || this;
	}
	return o(t, e), t.prototype.schedule = function(e, t) {
		return void 0 === t && (t = 0), this;
	}, t;
}(oJ), lb = {
	setInterval: function(e, t) {
		for (var a = [], i = 2; i < arguments.length; i++) a[i - 2] = arguments[i];
		var o = lb.delegate;
		return (null == o ? void 0 : o.setInterval) ? o.setInterval.apply(o, s([e, t], r(a))) : setInterval.apply(void 0, s([e, t], r(a)));
	},
	clearInterval: function(e) {
		var t = lb.delegate;
		return ((null == t ? void 0 : t.clearInterval) || clearInterval)(e);
	},
	delegate: void 0
}, lN = function(e) {
	function t(t, r) {
		var a = e.call(this, t, r) || this;
		return a.scheduler = t, a.work = r, a.pending = !1, a;
	}
	return o(t, e), t.prototype.schedule = function(e, t) {
		if (void 0 === t && (t = 0), this.closed) return this;
		this.state = e;
		var r, a = this.id, s = this.scheduler;
		return null != a && (this.id = this.recycleAsyncId(s, a, t)), this.pending = !0, this.delay = t, this.id = null != (r = this.id) ? r : this.requestAsyncId(s, this.id, t), this;
	}, t.prototype.requestAsyncId = function(e, t, r) {
		return void 0 === r && (r = 0), lb.setInterval(e.flush.bind(e, this), r);
	}, t.prototype.recycleAsyncId = function(e, t, r) {
		if (void 0 === r && (r = 0), null != r && this.delay === r && !1 === this.pending) return t;
		null != t && lb.clearInterval(t);
	}, t.prototype.execute = function(e, t) {
		if (this.closed) return Error("executing a cancelled action");
		this.pending = !1;
		var r = this._execute(e, t);
		if (r) return r;
		!1 === this.pending && null != this.id && (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
	}, t.prototype._execute = function(e, t) {
		var r, a = !1;
		try {
			this.work(e);
		} catch (e) {
			a = !0, r = e || Error("Scheduled action threw falsy error");
		}
		if (a) return this.unsubscribe(), r;
	}, t.prototype.unsubscribe = function() {
		if (!this.closed) {
			var t = this.id, r = this.scheduler, a = r.actions;
			this.work = this.state = this.scheduler = null, this.pending = !1, oY(a, this), null != t && (this.id = this.recycleAsyncId(r, t, null)), this.delay = null, e.prototype.unsubscribe.call(this);
		}
	}, t;
}(lk), l_ = function() {
	function e(t, r) {
		void 0 === r && (r = e.now), this.schedulerActionCtor = t, this.now = r;
	}
	return e.prototype.schedule = function(e, t, r) {
		return void 0 === t && (t = 0), new this.schedulerActionCtor(this, e).schedule(r, t);
	}, e.now = lg.now, e;
}(), lw = new (function(e) {
	function t(t, r) {
		void 0 === r && (r = l_.now);
		var a = e.call(this, t, r) || this;
		return a.actions = [], a._active = !1, a;
	}
	return o(t, e), t.prototype.flush = function(e) {
		var t, r = this.actions;
		if (this._active) return void r.push(e);
		this._active = !0;
		do
			if (t = e.execute(e.state, e.delay)) break;
		while (e = r.shift());
		if (this._active = !1, t) {
			for (; e = r.shift();) e.unsubscribe();
			throw t;
		}
	}, t;
}(l_))(lN), lx = new lc(function(e) {
	return e.complete();
});
function lO(e) {
	return e && oK(e.schedule);
}
function lS(e) {
	return e[e.length - 1];
}
function lj(e) {
	return lO(lS(e)) ? e.pop() : void 0;
}
var lA = function(e) {
	return e && "number" == typeof e.length && "function" != typeof e;
};
function lE(e) {
	return oK(null == e ? void 0 : e.then);
}
function lP(e) {
	return Symbol.asyncIterator && oK(null == e ? void 0 : e[Symbol.asyncIterator]);
}
function lC(e) {
	return TypeError("You provided " + (null !== e && "object" == typeof e ? "an invalid object" : "'" + e + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
var lT = "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator";
function lI(e) {
	return oK(null == e ? void 0 : e[lT]);
}
function lR(e) {
	return i(this, arguments, function() {
		var t, r, s;
		return c(this, function(i) {
			switch (i.label) {
				case 0: t = e.getReader(), i.label = 1;
				case 1: i.trys.push([
					1,
					,
					9,
					10
				]), i.label = 2;
				case 2: return [4, a(t.read())];
				case 3:
					if (s = (r = i.sent()).value, !r.done) return [3, 5];
					return [4, a(void 0)];
				case 4: return [2, i.sent()];
				case 5: return [4, a(s)];
				case 6: return [4, i.sent()];
				case 7: return i.sent(), [3, 2];
				case 8: return [3, 10];
				case 9: return t.releaseLock(), [7];
				case 10: return [2];
			}
		});
	});
}
function lM(e) {
	return oK(null == e ? void 0 : e.getReader);
}
function l$(e) {
	if (e instanceof lc) return e;
	if (null != e) {
		var t, r, a, s;
		if (oK(e[li])) return t = e, new lc(function(e) {
			var r = t[li]();
			if (oK(r.subscribe)) return r.subscribe(e);
			throw TypeError("Provided object does not correctly implement Symbol.observable");
		});
		if (lA(e)) return r = e, new lc(function(e) {
			for (var t = 0; t < r.length && !e.closed; t++) e.next(r[t]);
			e.complete();
		});
		if (lE(e)) return a = e, new lc(function(e) {
			a.then(function(t) {
				e.closed || (e.next(t), e.complete());
			}, function(t) {
				return e.error(t);
			}).then(null, o2);
		});
		if (lP(e)) return lD(e);
		if (lI(e)) return s = e, new lc(function(e) {
			var t, r;
			try {
				for (var a = u(s), i = a.next(); !i.done; i = a.next()) {
					var o = i.value;
					if (e.next(o), e.closed) return;
				}
			} catch (e) {
				t = { error: e };
			} finally {
				try {
					i && !i.done && (r = a.return) && r.call(a);
				} finally {
					if (t) throw t.error;
				}
			}
			e.complete();
		});
		if (lM(e)) return lD(lR(e));
	}
	throw lC(e);
}
function lD(e) {
	return new lc(function(r) {
		(function(e, r) {
			var a, s, i, o;
			return t(this, void 0, void 0, function() {
				var t;
				return c(this, function(c) {
					switch (c.label) {
						case 0: c.trys.push([
							0,
							5,
							6,
							11
						]), a = l(e), c.label = 1;
						case 1: return [4, a.next()];
						case 2:
							if ((s = c.sent()).done) return [3, 4];
							if (t = s.value, r.next(t), r.closed) return [2];
							c.label = 3;
						case 3: return [3, 1];
						case 4: return [3, 11];
						case 5: return i = { error: c.sent() }, [3, 11];
						case 6:
							if (c.trys.push([
								6,
								,
								9,
								10
							]), !(s && !s.done && (o = a.return))) return [3, 8];
							return [4, o.call(a)];
						case 7: c.sent(), c.label = 8;
						case 8: return [3, 10];
						case 9:
							if (i) throw i.error;
							return [7];
						case 10: return [7];
						case 11: return r.complete(), [2];
					}
				});
			});
		})(e, r).catch(function(e) {
			return r.error(e);
		});
	});
}
function lV(e, t, r, a, s) {
	void 0 === a && (a = 0), void 0 === s && (s = !1);
	var i = t.schedule(function() {
		r(), s ? e.add(this.schedule(null, a)) : this.unsubscribe();
	}, a);
	if (e.add(i), !s) return i;
}
function lL(e, t) {
	return void 0 === t && (t = 0), lp(function(r, a) {
		r.subscribe(ld(a, function(r) {
			return lV(a, e, function() {
				return a.next(r);
			}, t);
		}, function() {
			return lV(a, e, function() {
				return a.complete();
			}, t);
		}, function(r) {
			return lV(a, e, function() {
				return a.error(r);
			}, t);
		}));
	});
}
function lF(e, t) {
	return void 0 === t && (t = 0), lp(function(r, a) {
		a.add(e.schedule(function() {
			return r.subscribe(a);
		}, t));
	});
}
function lB(e, t) {
	if (!e) throw Error("Iterable cannot be null");
	return new lc(function(r) {
		lV(r, t, function() {
			var a = e[Symbol.asyncIterator]();
			lV(r, t, function() {
				a.next().then(function(e) {
					e.done ? r.complete() : r.next(e.value);
				});
			}, 0, !0);
		});
	});
}
function lU(e, t) {
	return t ? function(e, t) {
		if (null != e) {
			if (oK(e[li])) return l$(e).pipe(lF(t), lL(t));
			if (lA(e)) return new lc(function(r) {
				var a = 0;
				return t.schedule(function() {
					a === e.length ? r.complete() : (r.next(e[a++]), r.closed || this.schedule());
				});
			});
			if (lE(e)) return l$(e).pipe(lF(t), lL(t));
			if (lP(e)) return lB(e, t);
			if (lI(e)) return new lc(function(r) {
				var a;
				return lV(r, t, function() {
					a = e[lT](), lV(r, t, function() {
						var e, t, s;
						try {
							t = (e = a.next()).value, s = e.done;
						} catch (e) {
							r.error(e);
							return;
						}
						s ? r.complete() : r.next(t);
					}, 0, !0);
				}), function() {
					return oK(null == a ? void 0 : a.return) && a.return();
				};
			});
			if (lM(e)) return lB(lR(e), t);
		}
		throw lC(e);
	}(e, t) : l$(e);
}
function lz(e, t) {
	return lp(function(r, a) {
		var s = 0;
		r.subscribe(ld(a, function(r) {
			a.next(e.call(t, r, s++));
		}));
	});
}
var lG = Array.isArray;
function lW(e) {
	return lz(function(t) {
		return lG(t) ? e.apply(void 0, s([], r(t))) : e(t);
	});
}
var lK = Array.isArray, lq = Object.getPrototypeOf, lH = Object.prototype, lY = Object.keys;
function lJ() {
	for (var e, t, r, a = [], s = 0; s < arguments.length; s++) a[s] = arguments[s];
	var i = lj(a), o = oK(lS(a)) ? a.pop() : void 0, l = function(e) {
		if (1 === e.length) {
			var t, r = e[0];
			if (lK(r)) return {
				args: r,
				keys: null
			};
			if ((t = r) && "object" == typeof t && lq(t) === lH) {
				var a = lY(r);
				return {
					args: a.map(function(e) {
						return r[e];
					}),
					keys: a
				};
			}
		}
		return {
			args: e,
			keys: null
		};
	}(a), c = l.args, u = l.keys;
	if (0 === c.length) return lU([], i);
	var p = new lc((e = c, t = i, void 0 === (r = u ? function(e) {
		return u.reduce(function(t, r, a) {
			return t[r] = e[a], t;
		}, {});
	} : lo) && (r = lo), function(a) {
		(function(e, t, r) {
			e ? lV(r, e, t) : t();
		})(t, function() {
			for (var s = e.length, i = Array(s), o = s, l = s, c = function(s) {
				(function(e, t, r) {
					e ? lV(r, e, t) : t();
				})(t, function() {
					var c = lU(e[s], t), u = !1;
					c.subscribe(ld(a, function(e) {
						i[s] = e, !u && (u = !0, l--), l || a.next(r(i.slice()));
					}, function() {
						--o || a.complete();
					}));
				}, a);
			}, u = 0; u < s; u++) c(u);
		}, a);
	}));
	return o ? p.pipe(lW(o)) : p;
}
function lX(e, t, r) {
	return (void 0 === r && (r = Infinity), oK(t)) ? lX(function(r, a) {
		return lz(function(e, s) {
			return t(r, e, a, s);
		})(l$(e(r, a)));
	}, r) : ("number" == typeof t && (r = t), lp(function(t, a) {
		var s, i, o, l, c, u, p, d;
		return s = r, i = [], o = 0, l = 0, c = !1, u = function() {
			!c || i.length || o || a.complete();
		}, p = function(e) {
			return o < s ? d(e) : i.push(e);
		}, d = function(t) {
			o++;
			var r = !1;
			l$(e(t, l++)).subscribe(ld(a, function(e) {
				a.next(e);
			}, function() {
				r = !0;
			}, void 0, function() {
				if (r) try {
					for (o--; i.length && o < s;) (function() {
						var e = i.shift();
						d(e);
					})();
					u();
				} catch (e) {
					a.error(e);
				}
			}));
		}, t.subscribe(ld(a, p, function() {
			c = !0, u();
		})), function() {};
	}));
}
function lZ(e) {
	return void 0 === e && (e = Infinity), lX(lo, e);
}
var lQ = ["addListener", "removeListener"], l0 = ["addEventListener", "removeEventListener"], l1 = ["on", "off"];
function l2(e, t, a, s) {
	if (oK(a) && (s = a, a = void 0), s) return l2(e, t, a).pipe(lW(s));
	var i, o, l, c = r(oK((i = e).addEventListener) && oK(i.removeEventListener) ? l0.map(function(r) {
		return function(s) {
			return e[r](t, s, a);
		};
	}) : oK((o = e).addListener) && oK(o.removeListener) ? lQ.map(l4(e, t)) : oK((l = e).on) && oK(l.off) ? l1.map(l4(e, t)) : [], 2), u = c[0], p = c[1];
	if (!u && lA(e)) return lX(function(e) {
		return l2(e, t, a);
	})(l$(e));
	if (!u) throw TypeError("Invalid event target");
	return new lc(function(e) {
		var t = function() {
			for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
			return e.next(1 < t.length ? t : t[0]);
		};
		return u(t), function() {
			return p(t);
		};
	});
}
function l4(e, t) {
	return function(r) {
		return function(a) {
			return e[r](t, a);
		};
	};
}
function l3(e, t, r) {
	void 0 === e && (e = 0), void 0 === r && (r = lw);
	var a = -1;
	return null != t && (lO(t) ? r = t : a = t), new lc(function(t) {
		var s, i = (s = e) instanceof Date && !isNaN(s) ? e - r.now() : e;
		i < 0 && (i = 0);
		var o = 0;
		return r.schedule(function() {
			t.closed || (t.next(o++), 0 <= a ? this.schedule(void 0, a) : t.complete());
		}, i);
	});
}
function l6() {
	for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
	var a = lj(t), s = (e = Infinity, "number" == typeof lS(t) ? t.pop() : e);
	return t.length ? 1 === t.length ? l$(t[0]) : lZ(s)(lU(t, a)) : lx;
}
function l8(e) {
	return e <= 0 ? function() {
		return lx;
	} : lp(function(t, r) {
		var a = 0;
		t.subscribe(ld(r, function(t) {
			++a <= e && (r.next(t), e <= a && r.complete());
		}));
	});
}
function l7(e, t) {
	void 0 === t && (t = lw);
	var r = l3(e, t);
	return function e(t, r) {
		return r ? function(a) {
			return function() {
				for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
				return lZ(1)(lU(e, lj(e)));
			}(r.pipe(l8(1), lp(function(e, t) {
				e.subscribe(ld(t, o4));
			})), a.pipe(e(t)));
		} : lX(function(e, r) {
			return l$(t(e, r)).pipe(l8(1), lz(function() {
				return e;
			}));
		});
	}(function() {
		return r;
	});
}
function l5(e, t) {
	return void 0 === t && (t = lo), e = null != e ? e : l9, lp(function(r, a) {
		var s, i = !0;
		r.subscribe(ld(a, function(r) {
			var o = t(r);
			(i || !e(s, o)) && (i = !1, s = o, a.next(r));
		}));
	});
}
function l9(e, t) {
	return e === t;
}
function ce(e, t) {
	return lp(function(r, a) {
		var s = null, i = 0, o = !1, l = function() {
			return o && !s && a.complete();
		};
		r.subscribe(ld(a, function(r) {
			s?.unsubscribe();
			var o = 0, c = i++;
			l$(e(r, c)).subscribe(s = ld(a, function(e) {
				return a.next(t ? t(r, e, c, o++) : e);
			}, function() {
				s = null, l();
			}));
		}, function() {
			o = !0, l();
		}));
	});
}
function ct(e, t, r) {
	var a = oK(e) || t || r ? {
		next: e,
		error: t,
		complete: r
	} : e;
	return a ? lp(function(e, t) {
		null == (r = a.subscribe) || r.call(a);
		var r, s = !0;
		e.subscribe(ld(t, function(e) {
			var r;
			null == (r = a.next) || r.call(a, e), t.next(e);
		}, function() {
			var e;
			s = !1, null == (e = a.complete) || e.call(a), t.complete();
		}, function(e) {
			var r;
			s = !1, null == (r = a.error) || r.call(a, e), t.error(e);
		}, function() {
			var e, t;
			s && (null == (e = a.unsubscribe) || e.call(a)), null == (t = a.finalize) || t.call(a);
		}));
	}) : lo;
}
function cn(e, ...t) {
	return (function() {
		for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
		return ll(e);
	})(...t)(lU(e));
}
var cr = class e extends lc {
	static seed(t) {
		return new e(t);
	}
	_value;
	_subject$ = new lm();
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
		let r = e$(e) ? sT(this._value ?? t, e) : e;
		Object.is(r, this._value) || this._subject$.next(this._value = r);
	}
};
let ca = Symbol("forwardRef");
function cs(e) {
	let t = e;
	return new nP((e, r) => ({
		get: () => (e(), t),
		set(e) {
			let a = e?.[ca] ?? e;
			a !== t && (t = a, r());
		}
	}));
}
function ci(e) {
	return (t) => {
		let r = t.subscribe(e);
		rC(() => r.unsubscribe());
	};
}
function co(e) {
	return (t) => {
		let r;
		rA(() => {
			r = t.subscribe(e);
		}), rC(() => r?.unsubscribe());
	};
}
let cl = (e) => {
	let t = new cr(e), r = new nP((e, r) => ({
		get: () => (e(), t.value),
		set(e) {
			let a = e?.[ca] ?? e;
			Object.is(a, t.value) || (t.next(a), r());
		}
	}));
	return new Proxy(t, {
		get: (e, a) => "next" === a ? (e) => {
			r.value = e$(e) ? sT(t.value, e) : e;
		} : "value" === a ? r.value : t[a] ?? r[a],
		set: (e, t, a) => ("value" === t ? r.value = a : e[t] = a, !0)
	});
};
var cc = (e) => "function" == typeof e ? e : Array.isArray(e) ? () => e : void 0 === e ? e : () => e, cu = (e, t, r) => cp(e, t, r), cp = (e, t, r) => {
	let a, [s, i] = ((e, t) => {
		let { children: r,...a } = e;
		if (r && !Array.isArray(r) && !aT(r) && "object" == typeof r) return [t ? {
			...a,
			key: t
		} : a, r];
		let s = {}, i = {}, o = !1;
		for (let e in a) {
			let t = a[e];
			if (e.startsWith("$")) {
				i[e.slice(1)] = cc(t), o = !0;
				continue;
			}
			s[e] = t;
		}
		let l = cc(r);
		return l && (i.default = l, o = !0), [t ? {
			...s,
			key: t
		} : s, o ? i : void 0];
	})(t, r);
	return (a = e) === aO || "string" == typeof a || "object" == typeof a && a.__isTeleport ? a1(e, s, i?.default?.() ?? (e === aO ? [] : void 0)) : a1(e, s, i);
};
function cd(e) {
	return (t) => cp(cf, {
		renderFn$: t.pipe(lz((t) => () => e(t))),
		children: {}
	});
}
var cf = iS({ renderFn$: ik() }, (e, t) => {
	let r = null;
	cn(e.renderFn$, ct((e) => {
		r = e;
	}), ci());
	let a = cl(1);
	return cn(e.renderFn$, ct(() => {
		a.value += 1;
	}), co()), () => a.value ? r?.() : null;
}, { name: "RxSlot" }, { displayName: "RxSlot" });
let ch = (e, t) => {
	let r = new ly(e[t]);
	return af(() => e[t], (e) => r.next(e)), r;
};
function cm(...e) {
	let t, r = {}, a = {};
	for (let s of e) {
		if (e$(s)) {
			t = s;
			continue;
		}
		eD(t) ? r = s : a = s;
	}
	return iS(r, (e, r) => {
		let a = ((e) => {
			let t = {};
			for (let a in e) {
				var r;
				if (e$(e[a]) || (r = e[a]) && (r instanceof lc || oK(r.lift) && oK(r.subscribe))) {
					t[a] = e[a];
					continue;
				}
				t[`${a}$`] = ch(e, a);
			}
			return t;
		})(e), s = new Proxy({}, { get: (t, r) => e[r] ?? a[r] }), i = new Proxy({}, { get: (e, t) => "render" === t ? cd : r[t] }), o = t(s, i);
		return e$(o) ? o : () => o;
	}, a);
}
let cv = (e) => {
	let t, r = null;
	return ct({
		next: (a) => {
			((e, t) => {
				if (ek(e) && ek(t)) {
					if (e.length !== t.length) return !1;
					for (let r in e) if (!Object.is(e[r], t[r])) return !1;
					return !0;
				}
				return Object.is(e, t);
			})(a, r) || (t?.(), t = e(a), r = a);
		},
		unsubscribe: () => {
			t?.();
		}
	});
};
function cy(...e) {
	let t, r, a = {}, s = {};
	for (let r of e) {
		if (e$(r)) {
			t = r;
			continue;
		}
		eD(t) ? a = r : s = r;
	}
	let i = Symbol(s?.name ?? "");
	if (eV(a) && eV(s.props)) {
		let e, r = () => e ??= t({});
		return ij(iS({
			value: ik().optional(),
			$default: ik().optional()
		}, (e, { slots: t }) => (r2(i, e.value ?? r()), () => t.default?.()), {
			...s,
			name: `Provide(${s?.name ?? ""})`
		}, { displayName: "Provider" }), { use: () => r4(i, r, !0) });
	}
	let o = im(a);
	return ij(iS({
		...a,
		$default: ik().optional()
	}, (e, { slots: a }) => (r2(i, r = t(e)), () => a.default?.()), {
		...s,
		name: `Provide(${s?.name ?? ""})`
	}, { displayName: "Provider" }), { use: () => r4(i, () => r ??= t(o.create({})), !0) });
}
var cg = iS(() => {
	let e = nw(1);
	return () => cu("div", {
		style: {
			display: "flex",
			gap: "1rem"
		},
		children: [cu("div", { children: ["Counts: ", e.value] }), cp("button", {
			onClick: () => e.value++,
			children: "Click To Count"
		})]
	});
}), ck = iS({
	value: il().optional().default("1"),
	type: id(["text", "number"]),
	onValueChange: ik()
}, (e, { emit: t }) => () => cp("input", {
	value: e.value,
	onInput: (e) => {
		t("value-change", e.target.value);
	}
}), { displayName: "TextInput" }), cb = iS({
	$title: ik().optional(),
	$item: ik().optional(),
	$default: ik().optional()
}, ({}, { slots: e }) => () => cu("dl", { children: [
	cp("dt", { children: "default" }),
	cp("dd", { children: e.default?.() }),
	cp("dt", { children: "title" }),
	cp("dd", { children: e.title?.() }),
	cp("dt", { children: "item" }),
	cp("dd", { children: [{
		label: "1",
		value: "1"
	}, {
		label: "2",
		value: "2"
	}].map((t) => e.item?.(t)) })
] }), { displayName: "List" }), cN = iS(() => {
	let e = nw("");
	return () => cp(cb, {
		$title: cu("div", { children: ["Inputted: ", e.value] }),
		$item: (e) => cp("div", { children: e.label }),
		children: cp(ck, {
			type: "text",
			onValueChange: (t) => {
				e.value = t;
			}
		})
	});
});
function c_(e) {
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
	return cu(aO, { children: [
		cp(t.p, { children: "为了更好的 TypeScript 和 JSX 的支持，重新抽象了定义组件的方式" }),
		"\n",
		cp(t.p, { children: "一般组件：" }),
		"\n",
		cu(t.div, {
			"data-example": "",
			children: [cp(t.div, {
				"data-example-container": "",
				children: cp(t.codeblock4b227777, {})
			}), cp(t.pre, {
				className: "language-tsx",
				children: cu(t.code, {
					className: "language-tsx",
					children: [
						cp(t.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						cu(t.span, {
							className: "token imports",
							children: [
								cp(t.span, {
									className: "token punctuation",
									children: "{"
								}),
								" component ",
								cp(t.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						cp(t.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						cp(t.span, {
							className: "token string",
							children: "\"@innoai-tech/vuekit\""
						}),
						cp(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						cp(t.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						cu(t.span, {
							className: "token imports",
							children: [
								cp(t.span, {
									className: "token punctuation",
									children: "{"
								}),
								" ref ",
								cp(t.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						cp(t.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						cp(t.span, {
							className: "token string",
							children: "\"vue\""
						}),
						cp(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n",
						cp(t.span, {
							className: "token keyword module",
							children: "export"
						}),
						" ",
						cp(t.span, {
							className: "token keyword module",
							children: "default"
						}),
						" ",
						cp(t.span, {
							className: "token function",
							children: "component"
						}),
						cp(t.span, {
							className: "token punctuation",
							children: "("
						}),
						cp(t.span, {
							className: "token punctuation",
							children: "("
						}),
						cp(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						cp(t.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						cp(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n  ",
						cp(t.span, {
							className: "token keyword",
							children: "const"
						}),
						" count ",
						cp(t.span, {
							className: "token operator",
							children: "="
						}),
						" ",
						cp(t.span, {
							className: "token function",
							children: "ref"
						}),
						cp(t.span, {
							className: "token punctuation",
							children: "("
						}),
						cp(t.span, {
							className: "token number",
							children: "1"
						}),
						cp(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						cp(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n  ",
						cp(t.span, {
							className: "token keyword control-flow",
							children: "return"
						}),
						" ",
						cp(t.span, {
							className: "token punctuation",
							children: "("
						}),
						cp(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						cp(t.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						cp(t.span, {
							className: "token punctuation",
							children: "("
						}),
						"\n    ",
						cu(t.span, {
							className: "token tag",
							children: [
								cu(t.span, {
									className: "token tag",
									children: [cp(t.span, {
										className: "token punctuation",
										children: "<"
									}), "div"]
								}),
								" ",
								cp(t.span, {
									className: "token attr-name",
									children: "style"
								}),
								cu(t.span, {
									className: "token script language-javascript",
									children: [
										cp(t.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										cp(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										cp(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										" display",
										cp(t.span, {
											className: "token operator",
											children: ":"
										}),
										" ",
										cp(t.span, {
											className: "token string",
											children: "\"flex\""
										}),
										cp(t.span, {
											className: "token punctuation",
											children: ","
										}),
										" gap",
										cp(t.span, {
											className: "token operator",
											children: ":"
										}),
										" ",
										cp(t.span, {
											className: "token string",
											children: "\"1rem\""
										}),
										" ",
										cp(t.span, {
											className: "token punctuation",
											children: "}"
										}),
										cp(t.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								cp(t.span, {
									className: "token punctuation",
									children: ">"
								})
							]
						}),
						cp(t.span, {
							className: "token plain-text",
							children: "\n      "
						}),
						cu(t.span, {
							className: "token tag",
							children: [cu(t.span, {
								className: "token tag",
								children: [cp(t.span, {
									className: "token punctuation",
									children: "<"
								}), "div"]
							}), cp(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						cp(t.span, {
							className: "token plain-text",
							children: "Counts: "
						}),
						cp(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						"count",
						cp(t.span, {
							className: "token punctuation",
							children: "."
						}),
						cp(t.span, {
							className: "token property-access",
							children: "value"
						}),
						cp(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						cu(t.span, {
							className: "token tag",
							children: [cu(t.span, {
								className: "token tag",
								children: [cp(t.span, {
									className: "token punctuation",
									children: "</"
								}), "div"]
							}), cp(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						cp(t.span, {
							className: "token plain-text",
							children: "\n      "
						}),
						cu(t.span, {
							className: "token tag",
							children: [
								cu(t.span, {
									className: "token tag",
									children: [cp(t.span, {
										className: "token punctuation",
										children: "<"
									}), "button"]
								}),
								" ",
								cp(t.span, {
									className: "token attr-name",
									children: "onClick"
								}),
								cu(t.span, {
									className: "token script language-javascript",
									children: [
										cp(t.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										cp(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										cp(t.span, {
											className: "token punctuation",
											children: "("
										}),
										cp(t.span, {
											className: "token punctuation",
											children: ")"
										}),
										" ",
										cp(t.span, {
											className: "token arrow operator",
											children: "=>"
										}),
										" count",
										cp(t.span, {
											className: "token punctuation",
											children: "."
										}),
										cp(t.span, {
											className: "token property-access",
											children: "value"
										}),
										cp(t.span, {
											className: "token operator",
											children: "++"
										}),
										cp(t.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								cp(t.span, {
									className: "token punctuation",
									children: ">"
								})
							]
						}),
						cp(t.span, {
							className: "token plain-text",
							children: "Click To Count"
						}),
						cu(t.span, {
							className: "token tag",
							children: [cu(t.span, {
								className: "token tag",
								children: [cp(t.span, {
									className: "token punctuation",
									children: "</"
								}), "button"]
							}), cp(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						cp(t.span, {
							className: "token plain-text",
							children: "\n    "
						}),
						cu(t.span, {
							className: "token tag",
							children: [cu(t.span, {
								className: "token tag",
								children: [cp(t.span, {
									className: "token punctuation",
									children: "</"
								}), "div"]
							}), cp(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						"\n  ",
						cp(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						cp(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						cp(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						cp(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						cp(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n"
					]
				})
			})]
		}),
		"\n",
		cp(t.p, { children: "可复用组件：" }),
		"\n",
		cu(t.ul, { children: [
			"\n",
			cu(t.li, { children: [
				cp(t.code, { children: "props" }),
				" 和 ",
				cp(t.code, { children: "emits" }),
				" 合并声明"
			] }),
			"\n"
		] }),
		"\n",
		cu(t.div, {
			"data-example": "",
			children: [cp(t.div, {
				"data-example-container": "",
				children: cp(t.codeblock4a44dc15, {})
			}), cp(t.pre, {
				className: "language-tsx",
				children: cu(t.code, {
					className: "language-tsx",
					children: [
						cp(t.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						cp(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						" component",
						cp(t.span, {
							className: "token punctuation",
							children: ","
						}),
						" t",
						cp(t.span, {
							className: "token punctuation",
							children: ","
						}),
						" ",
						cp(t.span, {
							className: "token keyword",
							children: "type"
						}),
						" ",
						cp(t.span, {
							className: "token class-name",
							children: cp(t.span, {
								className: "token maybe-class-name",
								children: "VNode"
							})
						}),
						cp(t.span, {
							className: "token punctuation",
							children: ","
						}),
						" ",
						cp(t.span, {
							className: "token keyword",
							children: "type"
						}),
						" ",
						cp(t.span, {
							className: "token class-name",
							children: cp(t.span, {
								className: "token maybe-class-name",
								children: "VNodeChild"
							})
						}),
						" ",
						cp(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						" ",
						cp(t.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						cp(t.span, {
							className: "token string",
							children: "\"@innoai-tech/vuekit\""
						}),
						cp(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						cp(t.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						cu(t.span, {
							className: "token imports",
							children: [
								cp(t.span, {
									className: "token punctuation",
									children: "{"
								}),
								" ref ",
								cp(t.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						cp(t.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						cp(t.span, {
							className: "token string",
							children: "\"vue\""
						}),
						cp(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n",
						cp(t.span, {
							className: "token keyword module",
							children: "export"
						}),
						" ",
						cp(t.span, {
							className: "token keyword",
							children: "const"
						}),
						" ",
						cp(t.span, {
							className: "token maybe-class-name",
							children: "TextInput"
						}),
						" ",
						cp(t.span, {
							className: "token operator",
							children: "="
						}),
						" ",
						cp(t.span, {
							className: "token function",
							children: "component"
						}),
						cp(t.span, {
							className: "token punctuation",
							children: "("
						}),
						"\n  ",
						cp(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n    ",
						cp(t.span, {
							className: "token comment",
							children: "// VUE 的注册机制（Proxy 定义基准，以及从 attrs 中提取 props 的 emits 的依据）"
						}),
						"\n    ",
						cp(t.span, {
							className: "token comment",
							children: "// 必须声明，哪怕只是属性名称"
						}),
						"\n    ",
						cp(t.span, {
							className: "token comment",
							children: "//"
						}),
						"\n    ",
						cp(t.span, {
							className: "token comment",
							children: "// 又由于 TypeString 的老问题  https://www.typescriptneedstypes.com/#the-problem"
						}),
						"\n    ",
						cp(t.span, {
							className: "token comment",
							children: "// 类型定义无法转为 Runtime 对象"
						}),
						"\n    value",
						cp(t.span, {
							className: "token operator",
							children: ":"
						}),
						" t",
						cp(t.span, {
							className: "token punctuation",
							children: "."
						}),
						cp(t.span, {
							className: "token method function property-access",
							children: "string"
						}),
						cp(t.span, {
							className: "token punctuation",
							children: "("
						}),
						cp(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						cp(t.span, {
							className: "token punctuation",
							children: "."
						}),
						cp(t.span, {
							className: "token method function property-access",
							children: "optional"
						}),
						cp(t.span, {
							className: "token punctuation",
							children: "("
						}),
						cp(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						cp(t.span, {
							className: "token punctuation",
							children: "."
						}),
						cp(t.span, {
							className: "token keyword module",
							children: "default"
						}),
						cp(t.span, {
							className: "token punctuation",
							children: "("
						}),
						cp(t.span, {
							className: "token string",
							children: "\"1\""
						}),
						cp(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						cp(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n    type",
						cp(t.span, {
							className: "token operator",
							children: ":"
						}),
						" t",
						cp(t.span, {
							className: "token punctuation",
							children: "."
						}),
						cp(t.span, {
							className: "token method function property-access",
							children: "enums"
						}),
						cp(t.span, {
							className: "token punctuation",
							children: "("
						}),
						cp(t.span, {
							className: "token punctuation",
							children: "["
						}),
						cp(t.span, {
							className: "token string",
							children: "\"text\""
						}),
						cp(t.span, {
							className: "token punctuation",
							children: ","
						}),
						" ",
						cp(t.span, {
							className: "token string",
							children: "\"number\""
						}),
						cp(t.span, {
							className: "token punctuation",
							children: "]"
						}),
						cp(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						cp(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n\n    ",
						cp(t.span, {
							className: "token comment",
							children: "// on[A-Z] 前缀视为 emits"
						}),
						"\n    onValueChange",
						cp(t.span, {
							className: "token operator",
							children: ":"
						}),
						" t",
						cp(t.span, {
							className: "token punctuation",
							children: "."
						}),
						cp(t.span, {
							className: "token property-access",
							children: "custom"
						}),
						cp(t.span, {
							className: "token operator",
							children: "<"
						}),
						cp(t.span, {
							className: "token punctuation",
							children: "("
						}),
						"v",
						cp(t.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						cp(t.span, {
							className: "token builtin",
							children: "string"
						}),
						cp(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						cp(t.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						cp(t.span, {
							className: "token keyword",
							children: "void"
						}),
						cp(t.span, {
							className: "token operator",
							children: ">"
						}),
						cp(t.span, {
							className: "token punctuation",
							children: "("
						}),
						cp(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						cp(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n  ",
						cp(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						cp(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n  ",
						cp(t.span, {
							className: "token punctuation",
							children: "("
						}),
						"props",
						cp(t.span, {
							className: "token punctuation",
							children: ","
						}),
						" ",
						cp(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						" emit ",
						cp(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						cp(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						cp(t.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						cp(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n    ",
						cp(t.span, {
							className: "token comment",
							children: "// setup"
						}),
						"\n\n    ",
						cp(t.span, {
							className: "token keyword control-flow",
							children: "return"
						}),
						" ",
						cp(t.span, {
							className: "token punctuation",
							children: "("
						}),
						cp(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						cp(t.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						cp(t.span, {
							className: "token punctuation",
							children: "("
						}),
						"\n      ",
						cu(t.span, {
							className: "token tag",
							children: [
								cu(t.span, {
									className: "token tag",
									children: [cp(t.span, {
										className: "token punctuation",
										children: "<"
									}), "input"]
								}),
								"\n        ",
								cp(t.span, {
									className: "token attr-name",
									children: "value"
								}),
								cu(t.span, {
									className: "token script language-javascript",
									children: [
										cp(t.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										cp(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										"props",
										cp(t.span, {
											className: "token punctuation",
											children: "."
										}),
										cp(t.span, {
											className: "token property-access",
											children: "value"
										}),
										cp(t.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n        ",
								cp(t.span, {
									className: "token attr-name",
									children: "onInput"
								}),
								cu(t.span, {
									className: "token script language-javascript",
									children: [
										cp(t.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										cp(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										cp(t.span, {
											className: "token punctuation",
											children: "("
										}),
										"e",
										cp(t.span, {
											className: "token punctuation",
											children: ")"
										}),
										" ",
										cp(t.span, {
											className: "token arrow operator",
											children: "=>"
										}),
										" ",
										cp(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										"\n          ",
										cp(t.span, {
											className: "token function",
											children: "emit"
										}),
										cp(t.span, {
											className: "token punctuation",
											children: "("
										}),
										cp(t.span, {
											className: "token string",
											children: "\"value-change\""
										}),
										cp(t.span, {
											className: "token punctuation",
											children: ","
										}),
										" ",
										cp(t.span, {
											className: "token punctuation",
											children: "("
										}),
										"e",
										cp(t.span, {
											className: "token punctuation",
											children: "."
										}),
										cp(t.span, {
											className: "token property-access",
											children: "target"
										}),
										" ",
										cp(t.span, {
											className: "token keyword module",
											children: "as"
										}),
										" ",
										cp(t.span, {
											className: "token maybe-class-name",
											children: "HTMLInputElement"
										}),
										cp(t.span, {
											className: "token punctuation",
											children: ")"
										}),
										cp(t.span, {
											className: "token punctuation",
											children: "."
										}),
										cp(t.span, {
											className: "token property-access",
											children: "value"
										}),
										cp(t.span, {
											className: "token punctuation",
											children: ")"
										}),
										cp(t.span, {
											className: "token punctuation",
											children: ";"
										}),
										"\n        ",
										cp(t.span, {
											className: "token punctuation",
											children: "}"
										}),
										cp(t.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n      ",
								cp(t.span, {
									className: "token punctuation",
									children: "/>"
								})
							]
						}),
						"\n    ",
						cp(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						cp(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n  ",
						cp(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						cp(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n",
						cp(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						cp(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n",
						cp(t.span, {
							className: "token keyword module",
							children: "export"
						}),
						" ",
						cp(t.span, {
							className: "token keyword",
							children: "interface"
						}),
						" ",
						cp(t.span, {
							className: "token class-name",
							children: cp(t.span, {
								className: "token maybe-class-name",
								children: "Option"
							})
						}),
						" ",
						cp(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n  label",
						cp(t.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						cp(t.span, {
							className: "token builtin",
							children: "string"
						}),
						cp(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n  value",
						cp(t.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						cp(t.span, {
							className: "token builtin",
							children: "string"
						}),
						cp(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						cp(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						"\n\n",
						cp(t.span, {
							className: "token keyword module",
							children: "export"
						}),
						" ",
						cp(t.span, {
							className: "token keyword",
							children: "const"
						}),
						" ",
						cp(t.span, {
							className: "token maybe-class-name",
							children: "List"
						}),
						" ",
						cp(t.span, {
							className: "token operator",
							children: "="
						}),
						" ",
						cp(t.span, {
							className: "token function",
							children: "component"
						}),
						cp(t.span, {
							className: "token punctuation",
							children: "("
						}),
						"\n  ",
						cp(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n    ",
						cp(t.span, {
							className: "token comment",
							children: "// $ 前缀视为 slots"
						}),
						"\n    $title",
						cp(t.span, {
							className: "token operator",
							children: ":"
						}),
						" t",
						cp(t.span, {
							className: "token punctuation",
							children: "."
						}),
						cp(t.span, {
							className: "token property-access",
							children: "custom"
						}),
						cp(t.span, {
							className: "token operator",
							children: "<"
						}),
						cp(t.span, {
							className: "token maybe-class-name",
							children: "VNodeChild"
						}),
						cp(t.span, {
							className: "token operator",
							children: ">"
						}),
						cp(t.span, {
							className: "token punctuation",
							children: "("
						}),
						cp(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						cp(t.span, {
							className: "token punctuation",
							children: "."
						}),
						cp(t.span, {
							className: "token method function property-access",
							children: "optional"
						}),
						cp(t.span, {
							className: "token punctuation",
							children: "("
						}),
						cp(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						cp(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n    ",
						cp(t.span, {
							className: "token comment",
							children: "// renderProp"
						}),
						"\n    $item",
						cp(t.span, {
							className: "token operator",
							children: ":"
						}),
						" t",
						cp(t.span, {
							className: "token punctuation",
							children: "."
						}),
						cp(t.span, {
							className: "token property-access",
							children: "custom"
						}),
						cp(t.span, {
							className: "token operator",
							children: "<"
						}),
						cp(t.span, {
							className: "token punctuation",
							children: "("
						}),
						"option",
						cp(t.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						cp(t.span, {
							className: "token maybe-class-name",
							children: "Option"
						}),
						cp(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						cp(t.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						cp(t.span, {
							className: "token maybe-class-name",
							children: "VNode"
						}),
						cp(t.span, {
							className: "token operator",
							children: ">"
						}),
						cp(t.span, {
							className: "token punctuation",
							children: "("
						}),
						cp(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						cp(t.span, {
							className: "token punctuation",
							children: "."
						}),
						cp(t.span, {
							className: "token method function property-access",
							children: "optional"
						}),
						cp(t.span, {
							className: "token punctuation",
							children: "("
						}),
						cp(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						cp(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n\n    $",
						cp(t.span, {
							className: "token keyword module",
							children: "default"
						}),
						cp(t.span, {
							className: "token operator",
							children: ":"
						}),
						" t",
						cp(t.span, {
							className: "token punctuation",
							children: "."
						}),
						cp(t.span, {
							className: "token property-access",
							children: "custom"
						}),
						cp(t.span, {
							className: "token operator",
							children: "<"
						}),
						cp(t.span, {
							className: "token maybe-class-name",
							children: "VNodeChild"
						}),
						cp(t.span, {
							className: "token operator",
							children: ">"
						}),
						cp(t.span, {
							className: "token punctuation",
							children: "("
						}),
						cp(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						cp(t.span, {
							className: "token punctuation",
							children: "."
						}),
						cp(t.span, {
							className: "token method function property-access",
							children: "optional"
						}),
						cp(t.span, {
							className: "token punctuation",
							children: "("
						}),
						cp(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						cp(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n\n    ",
						cp(t.span, {
							className: "token comment",
							children: "// 以此避免多插槽时 children slots object 的写法, 且无类型约束，"
						}),
						"\n    ",
						cp(t.span, {
							className: "token comment",
							children: "// {{ default: () => VNode, title: () => VNode, item: (option: Option) => VNode }}"
						}),
						"\n  ",
						cp(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						cp(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n  ",
						cp(t.span, {
							className: "token punctuation",
							children: "("
						}),
						cp(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						cp(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						cp(t.span, {
							className: "token punctuation",
							children: ","
						}),
						" ",
						cp(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						" slots ",
						cp(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						cp(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						cp(t.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						"\n    ",
						cp(t.span, {
							className: "token punctuation",
							children: "("
						}),
						cp(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						cp(t.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						cp(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n      ",
						cp(t.span, {
							className: "token keyword",
							children: "const"
						}),
						" options ",
						cp(t.span, {
							className: "token operator",
							children: "="
						}),
						" ",
						cp(t.span, {
							className: "token punctuation",
							children: "["
						}),
						"\n        ",
						cp(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n          label",
						cp(t.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						cp(t.span, {
							className: "token string",
							children: "\"1\""
						}),
						cp(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n          value",
						cp(t.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						cp(t.span, {
							className: "token string",
							children: "\"1\""
						}),
						cp(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n        ",
						cp(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						cp(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n        ",
						cp(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n          label",
						cp(t.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						cp(t.span, {
							className: "token string",
							children: "\"2\""
						}),
						cp(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n          value",
						cp(t.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						cp(t.span, {
							className: "token string",
							children: "\"2\""
						}),
						cp(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n        ",
						cp(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						cp(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n      ",
						cp(t.span, {
							className: "token punctuation",
							children: "]"
						}),
						cp(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n      ",
						cp(t.span, {
							className: "token keyword control-flow",
							children: "return"
						}),
						" ",
						cp(t.span, {
							className: "token punctuation",
							children: "("
						}),
						"\n        ",
						cu(t.span, {
							className: "token tag",
							children: [cu(t.span, {
								className: "token tag",
								children: [cp(t.span, {
									className: "token punctuation",
									children: "<"
								}), "dl"]
							}), cp(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						cp(t.span, {
							className: "token plain-text",
							children: "\n          "
						}),
						cu(t.span, {
							className: "token tag",
							children: [cu(t.span, {
								className: "token tag",
								children: [cp(t.span, {
									className: "token punctuation",
									children: "<"
								}), "dt"]
							}), cp(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						cp(t.span, {
							className: "token plain-text",
							children: "default"
						}),
						cu(t.span, {
							className: "token tag",
							children: [cu(t.span, {
								className: "token tag",
								children: [cp(t.span, {
									className: "token punctuation",
									children: "</"
								}), "dt"]
							}), cp(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						cp(t.span, {
							className: "token plain-text",
							children: "\n          "
						}),
						cu(t.span, {
							className: "token tag",
							children: [cu(t.span, {
								className: "token tag",
								children: [cp(t.span, {
									className: "token punctuation",
									children: "<"
								}), "dd"]
							}), cp(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						cp(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						"slots",
						cp(t.span, {
							className: "token punctuation",
							children: "."
						}),
						cp(t.span, {
							className: "token keyword module",
							children: "default"
						}),
						cp(t.span, {
							className: "token operator",
							children: "?."
						}),
						cp(t.span, {
							className: "token punctuation",
							children: "("
						}),
						cp(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						cp(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						cu(t.span, {
							className: "token tag",
							children: [cu(t.span, {
								className: "token tag",
								children: [cp(t.span, {
									className: "token punctuation",
									children: "</"
								}), "dd"]
							}), cp(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						cp(t.span, {
							className: "token plain-text",
							children: "\n          "
						}),
						cu(t.span, {
							className: "token tag",
							children: [cu(t.span, {
								className: "token tag",
								children: [cp(t.span, {
									className: "token punctuation",
									children: "<"
								}), "dt"]
							}), cp(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						cp(t.span, {
							className: "token plain-text",
							children: "title"
						}),
						cu(t.span, {
							className: "token tag",
							children: [cu(t.span, {
								className: "token tag",
								children: [cp(t.span, {
									className: "token punctuation",
									children: "</"
								}), "dt"]
							}), cp(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						cp(t.span, {
							className: "token plain-text",
							children: "\n          "
						}),
						cu(t.span, {
							className: "token tag",
							children: [cu(t.span, {
								className: "token tag",
								children: [cp(t.span, {
									className: "token punctuation",
									children: "<"
								}), "dd"]
							}), cp(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						cp(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						"slots",
						cp(t.span, {
							className: "token punctuation",
							children: "."
						}),
						cp(t.span, {
							className: "token property-access",
							children: "title"
						}),
						cp(t.span, {
							className: "token operator",
							children: "?."
						}),
						cp(t.span, {
							className: "token punctuation",
							children: "("
						}),
						cp(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						cp(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						cu(t.span, {
							className: "token tag",
							children: [cu(t.span, {
								className: "token tag",
								children: [cp(t.span, {
									className: "token punctuation",
									children: "</"
								}), "dd"]
							}), cp(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						cp(t.span, {
							className: "token plain-text",
							children: "\n          "
						}),
						cu(t.span, {
							className: "token tag",
							children: [cu(t.span, {
								className: "token tag",
								children: [cp(t.span, {
									className: "token punctuation",
									children: "<"
								}), "dt"]
							}), cp(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						cp(t.span, {
							className: "token plain-text",
							children: "item"
						}),
						cu(t.span, {
							className: "token tag",
							children: [cu(t.span, {
								className: "token tag",
								children: [cp(t.span, {
									className: "token punctuation",
									children: "</"
								}), "dt"]
							}), cp(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						cp(t.span, {
							className: "token plain-text",
							children: "\n          "
						}),
						cu(t.span, {
							className: "token tag",
							children: [cu(t.span, {
								className: "token tag",
								children: [cp(t.span, {
									className: "token punctuation",
									children: "<"
								}), "dd"]
							}), cp(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						cp(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						"options",
						cp(t.span, {
							className: "token punctuation",
							children: "."
						}),
						cp(t.span, {
							className: "token method function property-access",
							children: "map"
						}),
						cp(t.span, {
							className: "token punctuation",
							children: "("
						}),
						cp(t.span, {
							className: "token punctuation",
							children: "("
						}),
						"option",
						cp(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						cp(t.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" slots",
						cp(t.span, {
							className: "token punctuation",
							children: "."
						}),
						cp(t.span, {
							className: "token property-access",
							children: "item"
						}),
						cp(t.span, {
							className: "token operator",
							children: "?."
						}),
						cp(t.span, {
							className: "token punctuation",
							children: "("
						}),
						"option",
						cp(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						cp(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						cp(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						cu(t.span, {
							className: "token tag",
							children: [cu(t.span, {
								className: "token tag",
								children: [cp(t.span, {
									className: "token punctuation",
									children: "</"
								}), "dd"]
							}), cp(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						cp(t.span, {
							className: "token plain-text",
							children: "\n        "
						}),
						cu(t.span, {
							className: "token tag",
							children: [cu(t.span, {
								className: "token tag",
								children: [cp(t.span, {
									className: "token punctuation",
									children: "</"
								}), "dl"]
							}), cp(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						"\n      ",
						cp(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						cp(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n    ",
						cp(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						cp(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n",
						cp(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						cp(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n",
						cp(t.span, {
							className: "token keyword module",
							children: "export"
						}),
						" ",
						cp(t.span, {
							className: "token keyword module",
							children: "default"
						}),
						" ",
						cp(t.span, {
							className: "token function",
							children: "component"
						}),
						cp(t.span, {
							className: "token punctuation",
							children: "("
						}),
						cp(t.span, {
							className: "token punctuation",
							children: "("
						}),
						cp(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						cp(t.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						cp(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n  ",
						cp(t.span, {
							className: "token keyword",
							children: "const"
						}),
						" inputValue ",
						cp(t.span, {
							className: "token operator",
							children: "="
						}),
						" ",
						cp(t.span, {
							className: "token function",
							children: "ref"
						}),
						cp(t.span, {
							className: "token punctuation",
							children: "("
						}),
						cp(t.span, {
							className: "token string",
							children: "\"\""
						}),
						cp(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						cp(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n  ",
						cp(t.span, {
							className: "token keyword control-flow",
							children: "return"
						}),
						" ",
						cp(t.span, {
							className: "token punctuation",
							children: "("
						}),
						cp(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						cp(t.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						cp(t.span, {
							className: "token punctuation",
							children: "("
						}),
						"\n    ",
						cu(t.span, {
							className: "token tag",
							children: [
								cu(t.span, {
									className: "token tag",
									children: [cp(t.span, {
										className: "token punctuation",
										children: "<"
									}), cp(t.span, {
										className: "token class-name",
										children: "List"
									})]
								}),
								"\n      ",
								cp(t.span, {
									className: "token attr-name",
									children: "$title"
								}),
								cu(t.span, {
									className: "token script language-javascript",
									children: [
										cp(t.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										cp(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										cu(t.span, {
											className: "token tag",
											children: [cu(t.span, {
												className: "token tag",
												children: [cp(t.span, {
													className: "token punctuation",
													children: "<"
												}), "div"]
											}), cp(t.span, {
												className: "token punctuation",
												children: ">"
											})]
										}),
										cp(t.span, {
											className: "token plain-text",
											children: "Inputted: "
										}),
										cp(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										"inputValue",
										cp(t.span, {
											className: "token punctuation",
											children: "."
										}),
										cp(t.span, {
											className: "token property-access",
											children: "value"
										}),
										cp(t.span, {
											className: "token punctuation",
											children: "}"
										}),
										cu(t.span, {
											className: "token tag",
											children: [cu(t.span, {
												className: "token tag",
												children: [cp(t.span, {
													className: "token punctuation",
													children: "</"
												}), "div"]
											}), cp(t.span, {
												className: "token punctuation",
												children: ">"
											})]
										}),
										cp(t.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n      ",
								cp(t.span, {
									className: "token attr-name",
									children: "$item"
								}),
								cu(t.span, {
									className: "token script language-javascript",
									children: [
										cp(t.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										cp(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										cp(t.span, {
											className: "token punctuation",
											children: "("
										}),
										"o",
										cp(t.span, {
											className: "token punctuation",
											children: ")"
										}),
										" ",
										cp(t.span, {
											className: "token arrow operator",
											children: "=>"
										}),
										" ",
										cu(t.span, {
											className: "token tag",
											children: [cu(t.span, {
												className: "token tag",
												children: [cp(t.span, {
													className: "token punctuation",
													children: "<"
												}), "div"]
											}), cp(t.span, {
												className: "token punctuation",
												children: ">"
											})]
										}),
										cp(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										"o",
										cp(t.span, {
											className: "token punctuation",
											children: "."
										}),
										cp(t.span, {
											className: "token property-access",
											children: "label"
										}),
										cp(t.span, {
											className: "token punctuation",
											children: "}"
										}),
										cu(t.span, {
											className: "token tag",
											children: [cu(t.span, {
												className: "token tag",
												children: [cp(t.span, {
													className: "token punctuation",
													children: "</"
												}), "div"]
											}), cp(t.span, {
												className: "token punctuation",
												children: ">"
											})]
										}),
										cp(t.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n    ",
								cp(t.span, {
									className: "token punctuation",
									children: ">"
								})
							]
						}),
						cp(t.span, {
							className: "token plain-text",
							children: "\n      "
						}),
						cu(t.span, {
							className: "token tag",
							children: [
								cu(t.span, {
									className: "token tag",
									children: [cp(t.span, {
										className: "token punctuation",
										children: "<"
									}), cp(t.span, {
										className: "token class-name",
										children: "TextInput"
									})]
								}),
								"\n        ",
								cp(t.span, {
									className: "token attr-name",
									children: "type"
								}),
								cu(t.span, {
									className: "token script language-javascript",
									children: [
										cp(t.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										cp(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										cp(t.span, {
											className: "token string",
											children: "\"text\""
										}),
										cp(t.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n        ",
								cp(t.span, {
									className: "token attr-name",
									children: "onValueChange"
								}),
								cu(t.span, {
									className: "token script language-javascript",
									children: [
										cp(t.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										cp(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										cp(t.span, {
											className: "token punctuation",
											children: "("
										}),
										"value",
										cp(t.span, {
											className: "token punctuation",
											children: ")"
										}),
										" ",
										cp(t.span, {
											className: "token arrow operator",
											children: "=>"
										}),
										" ",
										cp(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										"\n          inputValue",
										cp(t.span, {
											className: "token punctuation",
											children: "."
										}),
										cp(t.span, {
											className: "token property-access",
											children: "value"
										}),
										" ",
										cp(t.span, {
											className: "token operator",
											children: "="
										}),
										" value",
										cp(t.span, {
											className: "token punctuation",
											children: ";"
										}),
										"\n        ",
										cp(t.span, {
											className: "token punctuation",
											children: "}"
										}),
										cp(t.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n      ",
								cp(t.span, {
									className: "token punctuation",
									children: "/>"
								})
							]
						}),
						cp(t.span, {
							className: "token plain-text",
							children: "\n    "
						}),
						cu(t.span, {
							className: "token tag",
							children: [cu(t.span, {
								className: "token tag",
								children: [cp(t.span, {
									className: "token punctuation",
									children: "</"
								}), cp(t.span, {
									className: "token class-name",
									children: "List"
								})]
							}), cp(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						"\n  ",
						cp(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						cp(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						cp(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						cp(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						cp(t.span, {
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
function cw(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? cp(t, {
		...e,
		children: cp(c_, { ...e })
	}) : c_(e);
}
var cx = rm(() => () => a1(cw, { components: {
	codeblock4b227777: cg,
	codeblock4a44dc15: cN
} })), cO = cm((e, { emit: t }) => {
	var r;
	let a = cl(e.value ?? "1");
	return cn(a, (void 0 === r && (r = lw), lp(function(e, t) {
		var a = null, s = null, i = null, o = function() {
			if (a) {
				a.unsubscribe(), a = null;
				var e = s;
				s = null, t.next(e);
			}
		};
		function l() {
			var e = i + 300, s = r.now();
			if (s < e) {
				a = this.schedule(void 0, e - s), t.add(a);
				return;
			}
			o();
		}
		e.subscribe(ld(t, function(e) {
			s = e, i = r.now(), a || (a = r.schedule(l, 300), t.add(a));
		}, function() {
			o(), t.complete();
		}, void 0, function() {
			s = a = null;
		}));
	})), ci((e) => t("value-change", e))), cn(a, cd((e) => cp("input", {
		value: e,
		onInput: (e) => {
			a.value = e.target.value;
		}
	})));
}, {
	displayName: "TextDebounceInput",
	props: ["value"],
	emits: ["value-change"]
}), cS = iS(() => {
	let e = nw("default");
	return () => cp("div", { children: cu("div", {
		style: {
			display: "flex",
			gap: "1rem"
		},
		children: [cp(cO, {
			value: e.value,
			onValueChange: (t) => {
				e.value = t;
			}
		}), cu("div", { children: ["Inputted: ", e.value] })]
	}) });
});
function cj(e) {
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
	return cu(aO, { children: [
		cu(t.p, { children: [
			"和 ",
			cp(t.a, {
				href: "https://rxjs.dev/",
				children: "rxjs"
			}),
			" 集成"
		] }),
		"\n",
		cu(t.div, {
			"data-example": "",
			children: [cp(t.div, {
				"data-example-container": "",
				children: cp(t.codeblockd4735e3a, {})
			}), cp(t.pre, {
				className: "language-tsx",
				children: cu(t.code, {
					className: "language-tsx",
					children: [
						cp(t.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						cu(t.span, {
							className: "token imports",
							children: [
								cp(t.span, {
									className: "token punctuation",
									children: "{"
								}),
								"\n  component",
								cp(t.span, {
									className: "token punctuation",
									children: ","
								}),
								"\n  component$",
								cp(t.span, {
									className: "token punctuation",
									children: ","
								}),
								"\n  observableRef",
								cp(t.span, {
									className: "token punctuation",
									children: ","
								}),
								"\n  render",
								cp(t.span, {
									className: "token punctuation",
									children: ","
								}),
								"\n  rx",
								cp(t.span, {
									className: "token punctuation",
									children: ","
								}),
								"\n  subscribeUntilUnmount",
								cp(t.span, {
									className: "token punctuation",
									children: ","
								}),
								"\n",
								cp(t.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						cp(t.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						cp(t.span, {
							className: "token string",
							children: "\"@innoai-tech/vuekit\""
						}),
						cp(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						cp(t.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						cu(t.span, {
							className: "token imports",
							children: [
								cp(t.span, {
									className: "token punctuation",
									children: "{"
								}),
								" ref ",
								cp(t.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						cp(t.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						cp(t.span, {
							className: "token string",
							children: "\"vue\""
						}),
						cp(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						cp(t.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						cu(t.span, {
							className: "token imports",
							children: [
								cp(t.span, {
									className: "token punctuation",
									children: "{"
								}),
								" debounceTime ",
								cp(t.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						cp(t.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						cp(t.span, {
							className: "token string",
							children: "\"rxjs\""
						}),
						cp(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n",
						cp(t.span, {
							className: "token keyword module",
							children: "export"
						}),
						" ",
						cp(t.span, {
							className: "token keyword",
							children: "const"
						}),
						" ",
						cp(t.span, {
							className: "token maybe-class-name",
							children: "TextDebounceInput"
						}),
						" ",
						cp(t.span, {
							className: "token operator",
							children: "="
						}),
						" component$",
						cp(t.span, {
							className: "token operator",
							children: "<"
						}),
						cp(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n  value",
						cp(t.span, {
							className: "token operator",
							children: "?"
						}),
						cp(t.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						cp(t.span, {
							className: "token builtin",
							children: "string"
						}),
						cp(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n  onValueChange",
						cp(t.span, {
							className: "token operator",
							children: "?"
						}),
						cp(t.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						cp(t.span, {
							className: "token punctuation",
							children: "("
						}),
						"v",
						cp(t.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						cp(t.span, {
							className: "token builtin",
							children: "string"
						}),
						cp(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						cp(t.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						cp(t.span, {
							className: "token keyword",
							children: "void"
						}),
						cp(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						cp(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						cp(t.span, {
							className: "token operator",
							children: ">"
						}),
						cp(t.span, {
							className: "token punctuation",
							children: "("
						}),
						cp(t.span, {
							className: "token punctuation",
							children: "("
						}),
						"props",
						cp(t.span, {
							className: "token punctuation",
							children: ","
						}),
						" ",
						cp(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						" emit ",
						cp(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						cp(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						cp(t.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						cp(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n  ",
						cp(t.span, {
							className: "token keyword",
							children: "const"
						}),
						" value$ ",
						cp(t.span, {
							className: "token operator",
							children: "="
						}),
						" ",
						cp(t.span, {
							className: "token function",
							children: "observableRef"
						}),
						cp(t.span, {
							className: "token punctuation",
							children: "("
						}),
						"props",
						cp(t.span, {
							className: "token punctuation",
							children: "."
						}),
						cp(t.span, {
							className: "token property-access",
							children: "value"
						}),
						" ",
						cp(t.span, {
							className: "token operator",
							children: "??"
						}),
						" ",
						cp(t.span, {
							className: "token string",
							children: "\"1\""
						}),
						cp(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						cp(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n  ",
						cp(t.span, {
							className: "token function",
							children: "rx"
						}),
						cp(t.span, {
							className: "token punctuation",
							children: "("
						}),
						"\n    value$",
						cp(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n    ",
						cp(t.span, {
							className: "token function",
							children: "debounceTime"
						}),
						cp(t.span, {
							className: "token punctuation",
							children: "("
						}),
						cp(t.span, {
							className: "token number",
							children: "300"
						}),
						cp(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						cp(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n    ",
						cp(t.span, {
							className: "token function",
							children: "subscribeUntilUnmount"
						}),
						cp(t.span, {
							className: "token punctuation",
							children: "("
						}),
						cp(t.span, {
							className: "token punctuation",
							children: "("
						}),
						"v",
						cp(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						cp(t.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						cp(t.span, {
							className: "token function",
							children: "emit"
						}),
						cp(t.span, {
							className: "token punctuation",
							children: "("
						}),
						cp(t.span, {
							className: "token string",
							children: "\"value-change\""
						}),
						cp(t.span, {
							className: "token punctuation",
							children: ","
						}),
						" v",
						cp(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						cp(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						cp(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n  ",
						cp(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						cp(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n  ",
						cp(t.span, {
							className: "token keyword control-flow",
							children: "return"
						}),
						" ",
						cp(t.span, {
							className: "token function",
							children: "rx"
						}),
						cp(t.span, {
							className: "token punctuation",
							children: "("
						}),
						"\n    value$",
						cp(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n    ",
						cp(t.span, {
							className: "token function",
							children: "render"
						}),
						cp(t.span, {
							className: "token punctuation",
							children: "("
						}),
						cp(t.span, {
							className: "token punctuation",
							children: "("
						}),
						"v",
						cp(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						cp(t.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						cp(t.span, {
							className: "token punctuation",
							children: "("
						}),
						"\n      ",
						cu(t.span, {
							className: "token tag",
							children: [
								cu(t.span, {
									className: "token tag",
									children: [cp(t.span, {
										className: "token punctuation",
										children: "<"
									}), "input"]
								}),
								"\n        ",
								cp(t.span, {
									className: "token attr-name",
									children: "value"
								}),
								cu(t.span, {
									className: "token script language-javascript",
									children: [
										cp(t.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										cp(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										"v",
										cp(t.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n        ",
								cp(t.span, {
									className: "token attr-name",
									children: "onInput"
								}),
								cu(t.span, {
									className: "token script language-javascript",
									children: [
										cp(t.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										cp(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										cp(t.span, {
											className: "token punctuation",
											children: "("
										}),
										"e",
										cp(t.span, {
											className: "token punctuation",
											children: ")"
										}),
										" ",
										cp(t.span, {
											className: "token arrow operator",
											children: "=>"
										}),
										" ",
										cp(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										"\n          value$",
										cp(t.span, {
											className: "token punctuation",
											children: "."
										}),
										cp(t.span, {
											className: "token property-access",
											children: "value"
										}),
										" ",
										cp(t.span, {
											className: "token operator",
											children: "="
										}),
										" ",
										cp(t.span, {
											className: "token punctuation",
											children: "("
										}),
										"e",
										cp(t.span, {
											className: "token punctuation",
											children: "."
										}),
										cp(t.span, {
											className: "token property-access",
											children: "target"
										}),
										" ",
										cp(t.span, {
											className: "token keyword module",
											children: "as"
										}),
										" ",
										cp(t.span, {
											className: "token maybe-class-name",
											children: "HTMLInputElement"
										}),
										cp(t.span, {
											className: "token punctuation",
											children: ")"
										}),
										cp(t.span, {
											className: "token punctuation",
											children: "."
										}),
										cp(t.span, {
											className: "token property-access",
											children: "value"
										}),
										cp(t.span, {
											className: "token punctuation",
											children: ";"
										}),
										"\n        ",
										cp(t.span, {
											className: "token punctuation",
											children: "}"
										}),
										cp(t.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n      ",
								cp(t.span, {
									className: "token punctuation",
									children: "/>"
								})
							]
						}),
						"\n    ",
						cp(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						cp(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						cp(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n  ",
						cp(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						cp(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						cp(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						cp(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						cp(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n",
						cp(t.span, {
							className: "token keyword module",
							children: "export"
						}),
						" ",
						cp(t.span, {
							className: "token keyword module",
							children: "default"
						}),
						" ",
						cp(t.span, {
							className: "token function",
							children: "component"
						}),
						cp(t.span, {
							className: "token punctuation",
							children: "("
						}),
						cp(t.span, {
							className: "token punctuation",
							children: "("
						}),
						cp(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						cp(t.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						cp(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n  ",
						cp(t.span, {
							className: "token keyword",
							children: "const"
						}),
						" inputValue ",
						cp(t.span, {
							className: "token operator",
							children: "="
						}),
						" ",
						cp(t.span, {
							className: "token function",
							children: "ref"
						}),
						cp(t.span, {
							className: "token punctuation",
							children: "("
						}),
						cp(t.span, {
							className: "token string",
							children: "\"default\""
						}),
						cp(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						cp(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n  ",
						cp(t.span, {
							className: "token keyword control-flow",
							children: "return"
						}),
						" ",
						cp(t.span, {
							className: "token punctuation",
							children: "("
						}),
						cp(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						cp(t.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						cp(t.span, {
							className: "token punctuation",
							children: "("
						}),
						"\n    ",
						cu(t.span, {
							className: "token tag",
							children: [cu(t.span, {
								className: "token tag",
								children: [cp(t.span, {
									className: "token punctuation",
									children: "<"
								}), "div"]
							}), cp(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						cp(t.span, {
							className: "token plain-text",
							children: "\n      "
						}),
						cu(t.span, {
							className: "token tag",
							children: [
								cu(t.span, {
									className: "token tag",
									children: [cp(t.span, {
										className: "token punctuation",
										children: "<"
									}), "div"]
								}),
								" ",
								cp(t.span, {
									className: "token attr-name",
									children: "style"
								}),
								cu(t.span, {
									className: "token script language-javascript",
									children: [
										cp(t.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										cp(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										cp(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										" display",
										cp(t.span, {
											className: "token operator",
											children: ":"
										}),
										" ",
										cp(t.span, {
											className: "token string",
											children: "\"flex\""
										}),
										cp(t.span, {
											className: "token punctuation",
											children: ","
										}),
										" gap",
										cp(t.span, {
											className: "token operator",
											children: ":"
										}),
										" ",
										cp(t.span, {
											className: "token string",
											children: "\"1rem\""
										}),
										" ",
										cp(t.span, {
											className: "token punctuation",
											children: "}"
										}),
										cp(t.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								cp(t.span, {
									className: "token punctuation",
									children: ">"
								})
							]
						}),
						cp(t.span, {
							className: "token plain-text",
							children: "\n        "
						}),
						cu(t.span, {
							className: "token tag",
							children: [
								cu(t.span, {
									className: "token tag",
									children: [cp(t.span, {
										className: "token punctuation",
										children: "<"
									}), cp(t.span, {
										className: "token class-name",
										children: "TextDebounceInput"
									})]
								}),
								"\n          ",
								cp(t.span, {
									className: "token attr-name",
									children: "value"
								}),
								cu(t.span, {
									className: "token script language-javascript",
									children: [
										cp(t.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										cp(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										"inputValue",
										cp(t.span, {
											className: "token punctuation",
											children: "."
										}),
										cp(t.span, {
											className: "token property-access",
											children: "value"
										}),
										cp(t.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n          ",
								cp(t.span, {
									className: "token attr-name",
									children: "onValueChange"
								}),
								cu(t.span, {
									className: "token script language-javascript",
									children: [
										cp(t.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										cp(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										cp(t.span, {
											className: "token punctuation",
											children: "("
										}),
										"value",
										cp(t.span, {
											className: "token punctuation",
											children: ")"
										}),
										" ",
										cp(t.span, {
											className: "token arrow operator",
											children: "=>"
										}),
										" ",
										cp(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										"\n            inputValue",
										cp(t.span, {
											className: "token punctuation",
											children: "."
										}),
										cp(t.span, {
											className: "token property-access",
											children: "value"
										}),
										" ",
										cp(t.span, {
											className: "token operator",
											children: "="
										}),
										" value",
										cp(t.span, {
											className: "token punctuation",
											children: ";"
										}),
										"\n          ",
										cp(t.span, {
											className: "token punctuation",
											children: "}"
										}),
										cp(t.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n        ",
								cp(t.span, {
									className: "token punctuation",
									children: "/>"
								})
							]
						}),
						cp(t.span, {
							className: "token plain-text",
							children: "\n        "
						}),
						cu(t.span, {
							className: "token tag",
							children: [cu(t.span, {
								className: "token tag",
								children: [cp(t.span, {
									className: "token punctuation",
									children: "<"
								}), "div"]
							}), cp(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						cp(t.span, {
							className: "token plain-text",
							children: "Inputted: "
						}),
						cp(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						"inputValue",
						cp(t.span, {
							className: "token punctuation",
							children: "."
						}),
						cp(t.span, {
							className: "token property-access",
							children: "value"
						}),
						cp(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						cu(t.span, {
							className: "token tag",
							children: [cu(t.span, {
								className: "token tag",
								children: [cp(t.span, {
									className: "token punctuation",
									children: "</"
								}), "div"]
							}), cp(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						cp(t.span, {
							className: "token plain-text",
							children: "\n      "
						}),
						cu(t.span, {
							className: "token tag",
							children: [cu(t.span, {
								className: "token tag",
								children: [cp(t.span, {
									className: "token punctuation",
									children: "</"
								}), "div"]
							}), cp(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						cp(t.span, {
							className: "token plain-text",
							children: "\n    "
						}),
						cu(t.span, {
							className: "token tag",
							children: [cu(t.span, {
								className: "token tag",
								children: [cp(t.span, {
									className: "token punctuation",
									children: "</"
								}), "div"]
							}), cp(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						"\n  ",
						cp(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						cp(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						cp(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						cp(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						cp(t.span, {
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
function cA(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? cp(t, {
		...e,
		children: cp(cj, { ...e })
	}) : cj(e);
}
var cE = rm(() => () => a1(cA, { components: { codeblockd4735e3a: cS } }));
export { sY as $, ea as $t, oG as A, e7 as At, iN as B, eR as Bt, l2 as C, e3 as Ct, ly as D, eZ as Dt, lx as E, e5 as Et, ij as F, ez as Ft, iu as G, e_ as Gt, iy as H, eC as Ht, i_ as I, eV as It, im as J, ev as Jt, ic as K, eb as Kt, iS as L, eD as Lt, oU as M, eK as Mt, ob as N, eW as Nt, lm as O, tb as Ot, oz as P, eG as Pt, ig as Q, el as Qt, ix as R, e$ as Rt, l3 as S, tN as St, lz as T, eQ as Tt, ip as U, eA as Ut, io as V, eT as Vt, ik as W, ex as Wt, iv as X, ed as Xt, ib as Y, ef as Yt, il as Z, ep as Zt, ct as _, nj as _t, cm as a, re as at, l7 as b, e0 as bt, cp as c, ao as ct, co as d, rj as dt, N as en, sW as et, ci as f, rC as ft, cn as g, nx as gt, cr as h, nw as ht, cv as i, aO as it, oW as j, tf as jt, lc as k, e8 as kt, cu as l, rm as lt, cs as m, af as mt, cx as n, rc as nt, ch as o, nD as ot, ca as p, rA as pt, ih as q, ek as qt, cy as r, ri as rt, cd as s, aD as st, cE as t, k as tn, s$ as tt, cl as u, a1 as ut, ce as v, ts as vt, lJ as w, e6 as wt, l6 as x, to as xt, l5 as y, tl as yt, iO as z, eM as zt };
