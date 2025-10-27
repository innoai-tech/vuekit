import { r as e, t } from "./rolldown-runtime.D8qhy2Lt.chunk.js";
import { a as r, c as a, i as s, l as i, n as o, o as l, r as c, s as u, u as p } from "./vendor-rxjs.CsNJjMpf.chunk.js";
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
function y(e) {
	return "string" == typeof e || "symbol" == typeof e ? e : Object.is(e?.valueOf?.(), -0) ? "-0" : String(e);
}
function g(e) {
	if (null == e) return "";
	if ("string" == typeof e) return e;
	if (Array.isArray(e)) return e.map(g).join(",");
	let t = String(e);
	return "0" === t && Object.is(Number(e), -0) ? "-0" : t;
}
function k(e) {
	if (Array.isArray(e)) return e.map(y);
	if ("symbol" == typeof e) return [e];
	e = g(e);
	let t = [], r = e.length;
	if (0 === r) return t;
	let a = 0, s = "", i = "", o = !1;
	for (46 === e.charCodeAt(0) && (t.push(""), a++); a < r;) {
		let l = e[a];
		i ? "\\" === l && a + 1 < r ? s += e[++a] : l === i ? i = "" : s += l : o ? "\"" === l || "'" === l ? i = l : "]" === l ? (o = !1, t.push(s), s = "") : s += l : "[" === l ? (o = !0, s && (t.push(s), s = "")) : "." === l ? s && (t.push(s), s = "") : s += l, a++;
	}
	return s && t.push(s), t;
}
function N(e, t, r) {
	if (null == e) return r;
	switch (typeof t) {
		case "string": {
			if (h(t)) return r;
			let a = e[t];
			if (void 0 === a) if (m(t)) return N(e, k(t), r);
			else return r;
			return a;
		}
		case "number":
		case "symbol": {
			"number" == typeof t && (t = y(t));
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
					if (null == o || h(s[e])) return i;
					o = o[s[e]];
				}
				return void 0 === o ? i : o;
			}
			if (h(t = Object.is(t?.valueOf(), -0) ? "-0" : String(t))) return r;
			let o = e[t];
			if (void 0 === o) return r;
			return o;
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
function x(e, t) {
	return e === t || Number.isNaN(e) && Number.isNaN(t);
}
function O(e, t, r, a) {
	if (t === e) return !0;
	switch (typeof t) {
		case "object": return function(e, t, r, a) {
			if (null == t) return !0;
			if (Array.isArray(t)) return S(e, t, r, a);
			if (t instanceof Map) {
				var s, i, o, l, c = e, u = t, p = r, d = a;
				if (0 === u.size) return !0;
				if (!(c instanceof Map)) return !1;
				for (let [e, t] of u.entries()) if (!1 === p(c.get(e), t, e, c, u, d)) return !1;
				return !0;
			}
			if (t instanceof Set) return s = e, i = t, o = r, l = a, 0 === i.size || s instanceof Set && S([...s], [...i], o, l);
			let f = Object.keys(t);
			if (null == e) return 0 === f.length;
			if (0 === f.length) return !0;
			if (a?.has(t)) return a.get(t) === e;
			a?.set(t, e);
			try {
				for (let s = 0; s < f.length; s++) {
					let i = f[s];
					if (!w(e) && !(i in e) || void 0 === t[i] && void 0 !== e[i] || null === t[i] && null !== e[i] || !r(e[i], t[i], i, e, t, a)) return !1;
				}
				return !0;
			} finally {
				a?.delete(t);
			}
		}(e, t, r, a);
		case "function":
			if (Object.keys(t).length > 0) return O(e, { ...t }, r, a);
			return x(e, t);
		default:
			if (!_(e)) return x(e, t);
			if ("string" == typeof t) return "" === t;
			return !0;
	}
}
function S(e, t, r, a) {
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
function A(e, t) {
	return function e(t, r, a) {
		return "function" != typeof a ? e(t, r, () => void 0) : O(t, r, function e(t, r, s, i, o, l) {
			let c = a(t, r, s, i, o, l);
			return void 0 !== c ? !!c : O(t, r, e, l);
		}, /* @__PURE__ */ new Map());
	}(e, t, () => void 0);
}
function j(e) {
	return Object.getOwnPropertySymbols(e).filter((t) => Object.prototype.propertyIsEnumerable.call(e, t));
}
function E(e) {
	return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e);
}
var P, C, T, I, R, M, $, D, V, L, F, B, U, z, G, W, K, q = "[object String]", H = "[object Number]", Y = "[object Boolean]", J = "[object Arguments]";
function X(e) {
	return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Z(e, t, r, a = /* @__PURE__ */ new Map(), s) {
	let i = s?.(e, t, r, a);
	if (void 0 !== i) return i;
	if (w(e)) return e;
	if (a.has(e)) return a.get(e);
	if (Array.isArray(e)) {
		let t = Array(e.length);
		a.set(e, t);
		for (let i = 0; i < e.length; i++) t[i] = Z(e[i], i, r, a, s);
		return Object.hasOwn(e, "index") && (t.index = e.index), Object.hasOwn(e, "input") && (t.input = e.input), t;
	}
	if (e instanceof Date) return new Date(e.getTime());
	if (e instanceof RegExp) {
		let t = new RegExp(e.source, e.flags);
		return t.lastIndex = e.lastIndex, t;
	}
	if (e instanceof Map) {
		let t = /* @__PURE__ */ new Map();
		for (let [i, o] of (a.set(e, t), e)) t.set(i, Z(o, i, r, a, s));
		return t;
	}
	if (e instanceof Set) {
		let t = /* @__PURE__ */ new Set();
		for (let i of (a.set(e, t), e)) t.add(Z(i, void 0, r, a, s));
		return t;
	}
	if ("undefined" != typeof Buffer && Buffer.isBuffer(e)) return e.subarray();
	if (X(e)) {
		let t = new (Object.getPrototypeOf(e)).constructor(e.length);
		a.set(e, t);
		for (let i = 0; i < e.length; i++) t[i] = Z(e[i], i, r, a, s);
		return t;
	}
	if (e instanceof ArrayBuffer || "undefined" != typeof SharedArrayBuffer && e instanceof SharedArrayBuffer) return e.slice(0);
	if (e instanceof DataView) {
		let t = new DataView(e.buffer.slice(0), e.byteOffset, e.byteLength);
		return a.set(e, t), Q(t, e, r, a, s), t;
	}
	if ("undefined" != typeof File && e instanceof File) {
		let t = new File([e], e.name, { type: e.type });
		return a.set(e, t), Q(t, e, r, a, s), t;
	}
	if ("undefined" != typeof Blob && e instanceof Blob) {
		let t = new Blob([e], { type: e.type });
		return a.set(e, t), Q(t, e, r, a, s), t;
	}
	if (e instanceof Error) {
		let t = new e.constructor();
		return a.set(e, t), t.message = e.message, t.name = e.name, t.stack = e.stack, t.cause = e.cause, Q(t, e, r, a, s), t;
	}
	if (e instanceof Boolean) {
		let t = new Boolean(e.valueOf());
		return a.set(e, t), Q(t, e, r, a, s), t;
	}
	if (e instanceof Number) {
		let t = new Number(e.valueOf());
		return a.set(e, t), Q(t, e, r, a, s), t;
	}
	if (e instanceof String) {
		let t = new String(e.valueOf());
		return a.set(e, t), Q(t, e, r, a, s), t;
	}
	if ("object" == typeof e && function(e) {
		switch (E(e)) {
			case J:
			case "[object Array]":
			case "[object ArrayBuffer]":
			case "[object DataView]":
			case Y:
			case "[object Date]":
			case "[object Float32Array]":
			case "[object Float64Array]":
			case "[object Int8Array]":
			case "[object Int16Array]":
			case "[object Int32Array]":
			case "[object Map]":
			case H:
			case "[object Object]":
			case "[object RegExp]":
			case "[object Set]":
			case q:
			case "[object Symbol]":
			case "[object Uint8Array]":
			case "[object Uint8ClampedArray]":
			case "[object Uint16Array]":
			case "[object Uint32Array]": return !0;
			default: return !1;
		}
	}(e)) {
		let t = Object.create(Object.getPrototypeOf(e));
		return a.set(e, t), Q(t, e, r, a, s), t;
	}
	return e;
}
function Q(e, t, r = e, a, s) {
	let i = [...Object.keys(t), ...j(t)];
	for (let o = 0; o < i.length; o++) {
		let l = i[o], c = Object.getOwnPropertyDescriptor(e, l);
		(null == c || c.writable) && (e[l] = Z(t[l], l, r, a, s));
	}
}
function ee(e) {
	var t;
	return e = Z(t = e, void 0, t, /* @__PURE__ */ new Map(), void 0), (t) => A(t, e);
}
function et(e, t) {
	var r;
	return r = (r, a, s, i) => {
		let o = t?.(r, a, s, i);
		if (void 0 !== o) return o;
		if ("object" == typeof e) switch (Object.prototype.toString.call(e)) {
			case H:
			case q:
			case Y: {
				let t = new e.constructor(e?.valueOf());
				return Q(t, e), t;
			}
			case J: {
				let t = {};
				return Q(t, e), t.length = e.length, t[Symbol.iterator] = e[Symbol.iterator], t;
			}
			default: return;
		}
	}, Z(e, void 0, e, /* @__PURE__ */ new Map(), r);
}
var en = /^(?:0|[1-9]\d*)$/;
function er(e, t = Number.MAX_SAFE_INTEGER) {
	switch (typeof e) {
		case "number": return Number.isInteger(e) && e >= 0 && e < t;
		case "symbol": return !1;
		case "string": return en.test(e);
	}
}
function ea(e) {
	return null !== e && "object" == typeof e && "[object Arguments]" === E(e);
}
function es(e, t) {
	let r;
	if (0 === (r = Array.isArray(t) ? t : "string" == typeof t && m(t) && e?.[t] == null ? k(t) : [t]).length) return !1;
	let a = e;
	for (let e = 0; e < r.length; e++) {
		let t = r[e];
		if ((null == a || !Object.hasOwn(a, t)) && !((Array.isArray(a) || ea(a)) && er(t) && t < a.length)) return !1;
		a = a[t];
	}
	return !0;
}
function ei(e, t) {
	switch (typeof e) {
		case "object":
			Object.is(e?.valueOf(), -0) && (e = "-0");
			break;
		case "number": e = y(e);
	}
	return t = et(t), function(r) {
		let a = N(r, e);
		return void 0 === a ? es(r, e) : void 0 === t ? void 0 === a : A(a, t);
	};
}
function eo(e) {
	if (null == e) return f;
	switch (typeof e) {
		case "function": return e;
		case "object":
			if (Array.isArray(e) && 2 === e.length) return ei(e[0], e[1]);
			return ee(e);
		case "string":
		case "symbol":
		case "number": return b(e);
	}
}
function el(e) {
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
function ep(e, t, r = 1) {
	if (t ?? (t = e, e = 0), !Number.isInteger(r) || 0 === r) throw Error("The step value must be a non-zero integer.");
	let a = Math.max(Math.ceil((t - e) / r), 0), s = Array(a);
	for (let t = 0; t < a; t++) s[t] = e + t * r;
	return s;
}
function ed(e) {
	return "string" == typeof e || e instanceof String;
}
function ef(e, t) {
	if (!e) return [];
	let r = d(e) || Array.isArray(e) ? ep(0, e.length) : Object.keys(e), a = eo(t ?? f), s = Array(r.length);
	for (let t = 0; t < r.length; t++) {
		let i = r[t], o = e[i];
		s[t] = a(o, i, e);
	}
	return s;
}
function eh(e, t) {
	return null == e ? {} : function(e, t) {
		let r = {};
		for (let a = 0; a < e.length; a++) {
			let s = e[a], i = t(s);
			Object.hasOwn(r, i) || (r[i] = []), r[i].push(s);
		}
		return r;
	}(d(e) ? Array.from(e) : Object.values(e), eo(t ?? f));
}
var em = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ev = /^\w*$/;
function ey(e, t = f) {
	if (!e) return [[], []];
	let r = d(e) ? e : Object.values(e);
	t = eo(t);
	let a = [], s = [];
	for (let e = 0; e < r.length; e++) {
		let i = r[e];
		t(i) ? a.push(i) : s.push(i);
	}
	return [a, s];
}
function eg(e, t) {
	if (null == e) return !0;
	switch (typeof t) {
		case "symbol":
		case "number":
		case "object":
			if (Array.isArray(t)) return ek(e, t);
			if ("number" == typeof t ? t = y(t) : "object" == typeof t && (t = Object.is(t?.valueOf(), -0) ? "-0" : String(t)), h(t)) return !1;
			if (e?.[t] === void 0) return !0;
			try {
				return delete e[t], !0;
			} catch {
				return !1;
			}
		case "string":
			if (e?.[t] === void 0 && m(t)) return ek(e, k(t));
			if (h(t)) return !1;
			try {
				return delete e[t], !0;
			} catch {
				return !1;
			}
	}
}
function ek(e, t) {
	let r = 1 === t.length ? e : N(e, t.slice(0, -1)), a = t[t.length - 1];
	if (r?.[a] === void 0) return !0;
	if (h(a)) return !1;
	try {
		return delete r[a], !0;
	} catch {
		return !1;
	}
}
function eN(e) {
	return Array.isArray(e);
}
function eb(e, t, r) {
	if (!e) return !1;
	null != r && (t = void 0), t ??= f;
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
				let r = ei(t[0], t[1]);
				if (Array.isArray(e)) {
					for (let t = 0; t < e.length; t++) if (r(e[t])) return !0;
					return !1;
				}
				return a.some(r);
			}
			{
				let r = ee(t);
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
function e_(e) {
	return e;
}
function ew(e) {
	return "number" == typeof e || e instanceof Number;
}
var ex = (e, t, r) => {
	let a = e[t];
	Object.hasOwn(e, t) && x(a, r) && (void 0 !== r || t in e) || (e[t] = r);
};
function eO(e, t, r) {
	return function(e, t, r, a) {
		if (null == e && !_(e)) return e;
		let s = !Array.isArray(t) && ("number" == typeof t || "boolean" == typeof t || null == t || eu(t) || "string" == typeof t && (ev.test(t) || !em.test(t)) || null != e && Object.hasOwn(e, t)) ? [t] : Array.isArray(t) ? t : "string" == typeof t ? k(t) : [t], i = r(N(e, s)), o = e;
		for (let t = 0; t < s.length && null != o; t++) {
			let r, l = y(s[t]);
			if (!h(l)) {
				if (t === s.length - 1) r = i;
				else {
					let i = o[l], c = a?.(i, l, e);
					r = void 0 !== c ? c : _(i) ? i : er(s[t + 1]) ? [] : {};
				}
				ex(o, l, r), o = o[l];
			}
		}
		return e;
	}(e, t, () => r, () => void 0);
}
function eS(e) {
	return "undefined" != typeof Buffer && Buffer.isBuffer(e);
}
function eA(e) {
	let t = e?.constructor;
	return e === ("function" == typeof t ? t.prototype : Object.prototype);
}
function ej(e, t) {
	if ((e = function(e) {
		var t, r;
		let a = (t = e) ? (t = eu(r = t) ? NaN : Number(r)) === Infinity || t === -Infinity ? (t < 0 ? -1 : 1) * Number.MAX_VALUE : t == t ? t : 0 : 0 === t ? t : 0, s = a % 1;
		return s ? a - s : a;
	}(e)) < 1 || !Number.isSafeInteger(e)) return [];
	let r = Array(e);
	for (let a = 0; a < e; a++) r[a] = "function" == typeof t ? t(a) : a;
	return r;
}
function eE(e) {
	if (d(e)) {
		var t = e;
		let r = ej(t.length, (e) => `${e}`), a = new Set(r);
		return eS(t) && (a.add("offset"), a.add("parent")), X(t) && (a.add("buffer"), a.add("byteLength"), a.add("byteOffset")), [...r, ...Object.keys(t).filter((e) => !a.has(e))];
	}
	let r = Object.keys(Object(e));
	return eA(e) ? r.filter((e) => "constructor" !== e) : r;
}
function eP(e) {
	if (null == e) return [];
	switch (typeof e) {
		case "object":
		case "function":
			if (d(e)) {
				var t = e;
				let r = ej(t.length, (e) => `${e}`), a = new Set(r);
				return eS(t) && (a.add("offset"), a.add("parent")), X(t) && (a.add("buffer"), a.add("byteLength"), a.add("byteOffset")), [...r, ...eC(t).filter((e) => !a.has(e))];
			}
			if (eA(e)) return eC(e).filter((e) => "constructor" !== e);
			return eC(e);
		default: return eC(Object(e));
	}
}
function eC(e) {
	let t = [];
	for (let r in e) t.push(r);
	return t;
}
function eT(e) {
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
function eI(e, t = f) {
	return null == e ? {} : function(e, t) {
		let r = {}, a = Object.keys(e);
		for (let s = 0; s < a.length; s++) {
			let i = a[s], o = e[i];
			r[i] = t(o, i, e);
		}
		return r;
	}(e, eo(t));
}
function eR(e) {
	let t = [];
	for (; e;) t.push(...j(e)), e = Object.getPrototypeOf(e);
	return t;
}
function eM(e, ...t) {
	var r;
	if (null == e) return {};
	let a = (r = e, (t = function(e, t = 1) {
		let r = [], a = Math.floor(t);
		if (!d(e)) return r;
		let s = (e, t) => {
			for (let i = 0; i < e.length; i++) {
				let o = e[i];
				t < a && (Array.isArray(o) || o?.[Symbol.isConcatSpreadable] || null !== o && "object" == typeof o && "[object Arguments]" === Object.prototype.toString.call(o)) ? Array.isArray(o) ? s(o, t + 1) : s(Array.from(o), t + 1) : r.push(o);
			}
		};
		return s(Array.from(e), 0), r;
	}(t)).some((e) => Array.isArray(e) || m(e)) ? function(e) {
		let t = {}, r = [...eP(e), ...eR(e)];
		for (let a = 0; a < r.length; a++) {
			let s = r[a];
			t[s] = et(e[s], (e) => {
				if (!eT(e)) return e;
			});
		}
		return t;
	}(r) : function(e) {
		let t = {}, r = [...eP(e), ...eR(e)];
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
				for (let e = 0; e < r.length; e++) eg(a, r[e]);
				break;
			case "string":
			case "symbol":
			case "number": eg(a, r);
		}
	}
	return a;
}
function e$(e, t) {
	if (null == e) return {};
	let r = eo(t ?? e_), a = {}, s = d(e) ? ep(0, e.length) : [...eP(e), ...eR(e)];
	for (let t = 0; t < s.length; t++) {
		let i = eu(s[t]) ? s[t] : s[t].toString(), o = e[i];
		r(o, i, e) && (a[i] = o);
	}
	return a;
}
function eD(e) {
	return "function" == typeof e;
}
function eV(e) {
	return void 0 === e;
}
function eL(e) {
	if (null == e) return !0;
	if (d(e)) return ("function" == typeof e.splice || "string" == typeof e || "undefined" != typeof Buffer && !!Buffer.isBuffer(e) || !!X(e) || !!ea(e)) && 0 === e.length;
	if ("object" == typeof e) {
		if (e instanceof Map || e instanceof Set) return 0 === e.size;
		let t = Object.keys(e);
		return eA(e) ? 0 === t.filter((e) => "constructor" !== e).length : 0 === t.length;
	}
	return !0;
}
function eF(e) {
	return Number.isInteger(e);
}
var eB = /\p{Lu}?\p{Ll}+|[0-9]+|\p{Lu}+(?!\p{Ll})|\p{Emoji_Presentation}|\p{Extended_Pictographic}|\p{L}+/gu;
function eU(e) {
	return Array.from(e.match(eB) ?? []);
}
function ez(e) {
	return "string" != typeof e && (e = g(e)), e.replace(/['\u2019]/g, "");
}
function eG(e) {
	let t = eU(ez(e));
	if (0 === t.length) return "";
	let [r, ...a] = t;
	return `${r.toLowerCase()}${a.map((e) => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase()).join("")}`;
}
function eW(e) {
	return eU(ez(e)).map((e) => e.toLowerCase()).join("-");
}
function eK(e, t = 0, r = " ") {
	return g(e).padStart(t, r);
}
function eq(e) {
	var t;
	return (t = g(e)).substring(0, 1).toUpperCase() + t.substring(1);
}
function eH(e) {
	let t = Object.create(null);
	for (let r of e.split(",")) t[r] = 1;
	return (e) => e in t;
}
var eY = {}, eJ = [], eX = () => {}, eZ = () => !1, eQ = (e) => 111 === e.charCodeAt(0) && 110 === e.charCodeAt(1) && (e.charCodeAt(2) > 122 || 97 > e.charCodeAt(2)), e0 = (e) => e.startsWith("onUpdate:"), e1 = Object.assign, e2 = (e, t) => {
	let r = e.indexOf(t);
	r > -1 && e.splice(r, 1);
}, e4 = Object.prototype.hasOwnProperty, e3 = (e, t) => e4.call(e, t), e6 = Array.isArray, e8 = (e) => "[object Map]" === tr(e), e7 = (e) => "function" == typeof e, e5 = (e) => "string" == typeof e, e9 = (e) => "symbol" == typeof e, te = (e) => null !== e && "object" == typeof e, tt = (e) => (te(e) || e7(e)) && e7(e.then) && e7(e.catch), tn = Object.prototype.toString, tr = (e) => tn.call(e), ta = (e) => e5(e) && "NaN" !== e && "-" !== e[0] && "" + parseInt(e, 10) === e, ts = eH(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), ti = (e) => {
	let t = Object.create(null);
	return (r) => t[r] || (t[r] = e(r));
}, to = /-\w/g, tl = ti((e) => e.replace(to, (e) => e.slice(1).toUpperCase())), tc = /\B([A-Z])/g, tu = ti((e) => e.replace(tc, "-$1").toLowerCase()), tp = ti((e) => e.charAt(0).toUpperCase() + e.slice(1)), td = ti((e) => e ? `on${tp(e)}` : ""), tf = (e, t) => !Object.is(e, t), th = (e, ...t) => {
	for (let r = 0; r < e.length; r++) e[r](...t);
}, tm = (e, t, r, a = !1) => {
	Object.defineProperty(e, t, {
		configurable: !0,
		enumerable: !1,
		writable: a,
		value: r
	});
}, tv = (e) => {
	let t = parseFloat(e);
	return isNaN(t) ? e : t;
}, ty = (e) => {
	let t = e5(e) ? Number(e) : NaN;
	return isNaN(t) ? e : t;
}, tg = () => P || (P = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {});
function tk(e) {
	if (e6(e)) {
		let t = {};
		for (let r = 0; r < e.length; r++) {
			let a = e[r], s = e5(a) ? function(e) {
				let t = {};
				return e.replace(t_, "").split(tN).forEach((e) => {
					if (e) {
						let r = e.split(tb);
						r.length > 1 && (t[r[0].trim()] = r[1].trim());
					}
				}), t;
			}(a) : tk(a);
			if (s) for (let e in s) t[e] = s[e];
		}
		return t;
	}
	if (e5(e) || te(e)) return e;
}
var tN = /;(?![^(]*\))/g, tb = /:([^]+)/, t_ = /\/\*[^]*?\*\//g;
function tw(e) {
	let t = "";
	if (e5(e)) t = e;
	else if (e6(e)) for (let r = 0; r < e.length; r++) {
		let a = tw(e[r]);
		a && (t += a + " ");
	}
	else if (te(e)) for (let r in e) e[r] && (t += r + " ");
	return t.trim();
}
var tx = eH("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly");
function tO(e) {
	return !!e || "" === e;
}
var tS = class {
	constructor(e = !1) {
		this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = C, !e && C && (this.index = (C.scopes || (C.scopes = [])).push(this) - 1);
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
			let t = C;
			try {
				return C = this, e();
			} finally {
				C = t;
			}
		}
	}
	on() {
		1 == ++this._on && (this.prevScope = C, C = this);
	}
	off() {
		this._on > 0 && 0 == --this._on && (C = this.prevScope, this.prevScope = void 0);
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
}, tA = /* @__PURE__ */ new WeakSet(), tj = class {
	constructor(e) {
		this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, C && C.active && C.effects.push(this);
	}
	pause() {
		this.flags |= 64;
	}
	resume() {
		64 & this.flags && (this.flags &= -65, tA.has(this) && (tA.delete(this), this.trigger()));
	}
	notify() {
		(!(2 & this.flags) || 32 & this.flags) && (8 & this.flags || tP(this));
	}
	run() {
		if (!(1 & this.flags)) return this.fn();
		this.flags |= 2, tB(this), tT(this);
		let e = T, t = tD;
		T = this, tD = !0;
		try {
			return this.fn();
		} finally {
			tI(this), T = e, tD = t, this.flags &= -3;
		}
	}
	stop() {
		if (1 & this.flags) {
			for (let e = this.deps; e; e = e.nextDep) t$(e);
			this.deps = this.depsTail = void 0, tB(this), this.onStop && this.onStop(), this.flags &= -2;
		}
	}
	trigger() {
		64 & this.flags ? tA.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
	}
	runIfDirty() {
		tR(this) && this.run();
	}
	get dirty() {
		return tR(this);
	}
}, tE = 0;
function tP(e, t = !1) {
	if (e.flags |= 8, t) {
		e.next = R, R = e;
		return;
	}
	e.next = I, I = e;
}
function tC() {
	let e;
	if (!(--tE > 0)) {
		if (R) {
			let e = R;
			for (R = void 0; e;) {
				let t = e.next;
				e.next = void 0, e.flags &= -9, e = t;
			}
		}
		for (; I;) {
			let t = I;
			for (I = void 0; t;) {
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
function tT(e) {
	for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function tI(e) {
	let t, r = e.depsTail, a = r;
	for (; a;) {
		let e = a.prevDep;
		-1 === a.version ? (a === r && (r = e), t$(a), function(e) {
			let { prevDep: t, nextDep: r } = e;
			t && (t.nextDep = r, e.prevDep = void 0), r && (r.prevDep = t, e.nextDep = void 0);
		}(a)) : t = a, a.dep.activeLink = a.prevActiveLink, a.prevActiveLink = void 0, a = e;
	}
	e.deps = t, e.depsTail = r;
}
function tR(e) {
	for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (tM(t.dep.computed) || t.dep.version !== t.version)) return !0;
	return !!e._dirty;
}
function tM(e) {
	if (4 & e.flags && !(16 & e.flags) || (e.flags &= -17, e.globalVersion === tU) || (e.globalVersion = tU, !e.isSSR && 128 & e.flags && (!e.deps && !e._dirty || !tR(e)))) return;
	e.flags |= 2;
	let t = e.dep, r = T, a = tD;
	T = e, tD = !0;
	try {
		tT(e);
		let r = e.fn(e._value);
		(0 === t.version || tf(r, e._value)) && (e.flags |= 128, e._value = r, t.version++);
	} catch (e) {
		throw t.version++, e;
	} finally {
		T = r, tD = a, tI(e), e.flags &= -3;
	}
}
function t$(e, t = !1) {
	let { dep: r, prevSub: a, nextSub: s } = e;
	if (a && (a.nextSub = s, e.prevSub = void 0), s && (s.prevSub = a, e.nextSub = void 0), r.subs === e && (r.subs = a, !a && r.computed)) {
		r.computed.flags &= -5;
		for (let e = r.computed.deps; e; e = e.nextDep) t$(e, !0);
	}
	t || --r.sc || !r.map || r.map.delete(r.key);
}
var tD = !0, tV = [];
function tL() {
	tV.push(tD), tD = !1;
}
function tF() {
	let e = tV.pop();
	tD = void 0 === e || e;
}
function tB(e) {
	let { cleanup: t } = e;
	if (e.cleanup = void 0, t) {
		let e = T;
		T = void 0;
		try {
			t();
		} finally {
			T = e;
		}
	}
}
var tU = 0, tz = class {
	constructor(e, t) {
		this.sub = e, this.dep = t, this.version = t.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
	}
}, tG = class {
	constructor(e) {
		this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
	}
	track(e) {
		if (!T || !tD || T === this.computed) return;
		let t = this.activeLink;
		if (void 0 === t || t.sub !== T) t = this.activeLink = new tz(T, this), T.deps ? (t.prevDep = T.depsTail, T.depsTail.nextDep = t, T.depsTail = t) : T.deps = T.depsTail = t, function e(t) {
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
			e.prevDep = t.prevDep, t.prevDep && (t.prevDep.nextDep = e), t.prevDep = T.depsTail, t.nextDep = void 0, T.depsTail.nextDep = t, T.depsTail = t, T.deps === t && (T.deps = e);
		}
		return t;
	}
	trigger(e) {
		this.version++, tU++, this.notify(e);
	}
	notify(e) {
		tE++;
		try {
			for (let e = this.subs; e; e = e.prevSub) e.sub.notify() && e.sub.dep.notify();
		} finally {
			tC();
		}
	}
}, tW = /* @__PURE__ */ new WeakMap(), tK = Symbol(""), tq = Symbol(""), tH = Symbol("");
function tY(e, t, r) {
	if (tD && T) {
		let t = tW.get(e);
		t || tW.set(e, t = /* @__PURE__ */ new Map());
		let a = t.get(r);
		a || (t.set(r, a = new tG()), a.map = t, a.key = r), a.track();
	}
}
function tJ(e, t, r, a, s, i) {
	let o = tW.get(e);
	if (!o) return void tU++;
	let l = (e) => {
		e && e.trigger();
	};
	if (tE++, "clear" === t) o.forEach(l);
	else {
		let s = e6(e), i = s && ta(r);
		if (s && "length" === r) {
			let e = Number(a);
			o.forEach((t, r) => {
				("length" === r || r === tH || !e9(r) && r >= e) && l(t);
			});
		} else switch ((void 0 !== r || o.has(void 0)) && l(o.get(r)), i && l(o.get(tH)), t) {
			case "add":
				s ? i && l(o.get("length")) : (l(o.get(tK)), e8(e) && l(o.get(tq)));
				break;
			case "delete":
				!s && (l(o.get(tK)), e8(e) && l(o.get(tq)));
				break;
			case "set": e8(e) && l(o.get(tK));
		}
	}
	tC();
}
function tX(e) {
	let t = nx(e);
	return t === e ? t : (tY(t, "iterate", tH), n_(e) ? t : t.map(nO));
}
function tZ(e) {
	return tY(e = nx(e), "iterate", tH), e;
}
var tQ = {
	__proto__: null,
	[Symbol.iterator]() {
		return t0(this, Symbol.iterator, nO);
	},
	concat(...e) {
		return tX(this).concat(...e.map((e) => e6(e) ? tX(e) : e));
	},
	entries() {
		return t0(this, "entries", (e) => (e[1] = nO(e[1]), e));
	},
	every(e, t) {
		return t2(this, "every", e, t, void 0, arguments);
	},
	filter(e, t) {
		return t2(this, "filter", e, t, (e) => e.map(nO), arguments);
	},
	find(e, t) {
		return t2(this, "find", e, t, nO, arguments);
	},
	findIndex(e, t) {
		return t2(this, "findIndex", e, t, void 0, arguments);
	},
	findLast(e, t) {
		return t2(this, "findLast", e, t, nO, arguments);
	},
	findLastIndex(e, t) {
		return t2(this, "findLastIndex", e, t, void 0, arguments);
	},
	forEach(e, t) {
		return t2(this, "forEach", e, t, void 0, arguments);
	},
	includes(...e) {
		return t3(this, "includes", e);
	},
	indexOf(...e) {
		return t3(this, "indexOf", e);
	},
	join(e) {
		return tX(this).join(e);
	},
	lastIndexOf(...e) {
		return t3(this, "lastIndexOf", e);
	},
	map(e, t) {
		return t2(this, "map", e, t, void 0, arguments);
	},
	pop() {
		return t6(this, "pop");
	},
	push(...e) {
		return t6(this, "push", e);
	},
	reduce(e, ...t) {
		return t4(this, "reduce", e, t);
	},
	reduceRight(e, ...t) {
		return t4(this, "reduceRight", e, t);
	},
	shift() {
		return t6(this, "shift");
	},
	some(e, t) {
		return t2(this, "some", e, t, void 0, arguments);
	},
	splice(...e) {
		return t6(this, "splice", e);
	},
	toReversed() {
		return tX(this).toReversed();
	},
	toSorted(e) {
		return tX(this).toSorted(e);
	},
	toSpliced(...e) {
		return tX(this).toSpliced(...e);
	},
	unshift(...e) {
		return t6(this, "unshift", e);
	},
	values() {
		return t0(this, "values", nO);
	}
};
function t0(e, t, r) {
	let a = tZ(e), s = a[t]();
	return a === e || n_(e) || (s._next = s.next, s.next = () => {
		let e = s._next();
		return e.done || (e.value = r(e.value)), e;
	}), s;
}
var t1 = Array.prototype;
function t2(e, t, r, a, s, i) {
	let o = tZ(e), l = o !== e && !n_(e), c = o[t];
	if (c !== t1[t]) {
		let t = c.apply(e, i);
		return l ? nO(t) : t;
	}
	let u = r;
	o !== e && (l ? u = function(t, a) {
		return r.call(this, nO(t), a, e);
	} : r.length > 2 && (u = function(t, a) {
		return r.call(this, t, a, e);
	}));
	let p = c.call(o, u, a);
	return l && s ? s(p) : p;
}
function t4(e, t, r, a) {
	let s = tZ(e), i = r;
	return s !== e && (n_(e) ? r.length > 3 && (i = function(t, a, s) {
		return r.call(this, t, a, s, e);
	}) : i = function(t, a, s) {
		return r.call(this, t, nO(a), s, e);
	}), s[t](i, ...a);
}
function t3(e, t, r) {
	let a = nx(e);
	tY(a, "iterate", tH);
	let s = a[t](...r);
	return (-1 === s || !1 === s) && nw(r[0]) ? (r[0] = nx(r[0]), a[t](...r)) : s;
}
function t6(e, t, r = []) {
	tL(), tE++;
	let a = nx(e)[t].apply(e, r);
	return tC(), tF(), a;
}
var t8 = eH("__proto__,__v_isRef,__isVue"), t7 = new Set(Object.getOwnPropertyNames(Symbol).filter((e) => "arguments" !== e && "caller" !== e).map((e) => Symbol[e]).filter(e9));
function t5(e) {
	e9(e) || (e = String(e));
	let t = nx(this);
	return tY(t, "has", e), t.hasOwnProperty(e);
}
var t9 = class {
	constructor(e = !1, t = !1) {
		this._isReadonly = e, this._isShallow = t;
	}
	get(e, t, r) {
		if ("__v_skip" === t) return e.__v_skip;
		let a = this._isReadonly, s = this._isShallow;
		if ("__v_isReactive" === t) return !a;
		if ("__v_isReadonly" === t) return a;
		if ("__v_isShallow" === t) return s;
		if ("__v_raw" === t) return r === (a ? s ? nm : nh : s ? nf : nd).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(r) ? e : void 0;
		let i = e6(e);
		if (!a) {
			let e;
			if (i && (e = tQ[t])) return e;
			if ("hasOwnProperty" === t) return t5;
		}
		let o = Reflect.get(e, t, nA(e) ? e : r);
		if ((e9(t) ? t7.has(t) : t8(t)) || (a || tY(e, "get", t), s)) return o;
		if (nA(o)) {
			let e = i && ta(t) ? o : o.value;
			return a && te(e) ? ng(e) : e;
		}
		return te(o) ? a ? ng(o) : nv(o) : o;
	}
}, ne = class extends t9 {
	constructor(e = !1) {
		super(!1, e);
	}
	set(e, t, r, a) {
		let s = e[t];
		if (!this._isShallow) {
			let t = nb(s);
			if (n_(r) || nb(r) || (s = nx(s), r = nx(r)), !e6(e) && nA(s) && !nA(r)) if (t) return !0;
			else return s.value = r, !0;
		}
		let i = e6(e) && ta(t) ? Number(t) < e.length : e3(e, t), o = Reflect.set(e, t, r, nA(e) ? e : a);
		return e === nx(a) && (i ? tf(r, s) && tJ(e, "set", t, r, s) : tJ(e, "add", t, r)), o;
	}
	deleteProperty(e, t) {
		let r = e3(e, t), a = e[t], s = Reflect.deleteProperty(e, t);
		return s && r && tJ(e, "delete", t, void 0, a), s;
	}
	has(e, t) {
		let r = Reflect.has(e, t);
		return e9(t) && t7.has(t) || tY(e, "has", t), r;
	}
	ownKeys(e) {
		return tY(e, "iterate", e6(e) ? "length" : tK), Reflect.ownKeys(e);
	}
}, nt = class extends t9 {
	constructor(e = !1) {
		super(!0, e);
	}
	set(e, t) {
		return !0;
	}
	deleteProperty(e, t) {
		return !0;
	}
}, nn = new ne(), nr = new nt(), na = new ne(!0), ns = (e) => e, ni = (e) => Reflect.getPrototypeOf(e);
function no(e) {
	return function() {
		return "delete" !== e && ("clear" === e ? void 0 : this);
	};
}
function nl(e, t) {
	let r = function(e, t) {
		let r = {
			get(r) {
				let a = this.__v_raw, s = nx(a), i = nx(r);
				e || (tf(r, i) && tY(s, "get", r), tY(s, "get", i));
				let { has: o } = ni(s), l = t ? ns : e ? nS : nO;
				return o.call(s, r) ? l(a.get(r)) : o.call(s, i) ? l(a.get(i)) : void (a !== s && a.get(r));
			},
			get size() {
				let t = this.__v_raw;
				return e || tY(nx(t), "iterate", tK), t.size;
			},
			has(t) {
				let r = this.__v_raw, a = nx(r), s = nx(t);
				return e || (tf(t, s) && tY(a, "has", t), tY(a, "has", s)), t === s ? r.has(t) : r.has(t) || r.has(s);
			},
			forEach(r, a) {
				let s = this, i = s.__v_raw, o = nx(i), l = t ? ns : e ? nS : nO;
				return e || tY(o, "iterate", tK), i.forEach((e, t) => r.call(a, l(e), l(t), s));
			}
		};
		return e1(r, e ? {
			add: no("add"),
			set: no("set"),
			delete: no("delete"),
			clear: no("clear")
		} : {
			add(e) {
				t || n_(e) || nb(e) || (e = nx(e));
				let r = nx(this);
				return ni(r).has.call(r, e) || (r.add(e), tJ(r, "add", e, e)), this;
			},
			set(e, r) {
				t || n_(r) || nb(r) || (r = nx(r));
				let a = nx(this), { has: s, get: i } = ni(a), o = s.call(a, e);
				o || (e = nx(e), o = s.call(a, e));
				let l = i.call(a, e);
				return a.set(e, r), o ? tf(r, l) && tJ(a, "set", e, r, l) : tJ(a, "add", e, r), this;
			},
			delete(e) {
				let t = nx(this), { has: r, get: a } = ni(t), s = r.call(t, e);
				s || (e = nx(e), s = r.call(t, e));
				let i = a ? a.call(t, e) : void 0, o = t.delete(e);
				return s && tJ(t, "delete", e, void 0, i), o;
			},
			clear() {
				let e = nx(this), t = 0 !== e.size, r = e.clear();
				return t && tJ(e, "clear", void 0, void 0, void 0), r;
			}
		}), [
			"keys",
			"values",
			"entries",
			Symbol.iterator
		].forEach((a) => {
			r[a] = function(...r) {
				let s = this.__v_raw, i = nx(s), o = e8(i), l = "entries" === a || a === Symbol.iterator && o, c = s[a](...r), u = t ? ns : e ? nS : nO;
				return e || tY(i, "iterate", "keys" === a && o ? tq : tK), {
					next() {
						let { value: e, done: t } = c.next();
						return t ? {
							value: e,
							done: t
						} : {
							value: l ? [u(e[0]), u(e[1])] : u(e),
							done: t
						};
					},
					[Symbol.iterator]() {
						return this;
					}
				};
			};
		}), r;
	}(e, t);
	return (t, a, s) => "__v_isReactive" === a ? !e : "__v_isReadonly" === a ? e : "__v_raw" === a ? t : Reflect.get(e3(r, a) && a in t ? r : t, a, s);
}
var nc = { get: nl(!1, !1) }, nu = { get: nl(!1, !0) }, np = { get: nl(!0, !1) }, nd = /* @__PURE__ */ new WeakMap(), nf = /* @__PURE__ */ new WeakMap(), nh = /* @__PURE__ */ new WeakMap(), nm = /* @__PURE__ */ new WeakMap();
function nv(e) {
	return nb(e) ? e : nk(e, !1, nn, nc, nd);
}
function ny(e) {
	return nk(e, !1, na, nu, nf);
}
function ng(e) {
	return nk(e, !0, nr, np, nh);
}
function nk(e, t, r, a, s) {
	var i;
	if (!te(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
	let o = (i = e).__v_skip || !Object.isExtensible(i) ? 0 : function(e) {
		switch (e) {
			case "Object":
			case "Array": return 1;
			case "Map":
			case "Set":
			case "WeakMap":
			case "WeakSet": return 2;
			default: return 0;
		}
	}(tr(i).slice(8, -1));
	if (0 === o) return e;
	let l = s.get(e);
	if (l) return l;
	let c = new Proxy(e, 2 === o ? a : r);
	return s.set(e, c), c;
}
function nN(e) {
	return nb(e) ? nN(e.__v_raw) : !!(e && e.__v_isReactive);
}
function nb(e) {
	return !!(e && e.__v_isReadonly);
}
function n_(e) {
	return !!(e && e.__v_isShallow);
}
function nw(e) {
	return !!e && !!e.__v_raw;
}
function nx(e) {
	let t = e && e.__v_raw;
	return t ? nx(t) : e;
}
var nO = (e) => te(e) ? nv(e) : e, nS = (e) => te(e) ? ng(e) : e;
function nA(e) {
	return !!e && !0 === e.__v_isRef;
}
function nj(e) {
	return nP(e, !1);
}
function nE(e) {
	return nP(e, !0);
}
function nP(e, t) {
	return nA(e) ? e : new nC(e, t);
}
var nC = class {
	constructor(e, t) {
		this.dep = new tG(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = t ? e : nx(e), this._value = t ? e : nO(e), this.__v_isShallow = t;
	}
	get value() {
		return this.dep.track(), this._value;
	}
	set value(e) {
		let t = this._rawValue, r = this.__v_isShallow || n_(e) || nb(e);
		tf(e = r ? e : nx(e), t) && (this._rawValue = e, this._value = r ? e : nO(e), this.dep.trigger());
	}
};
function nT(e) {
	return nA(e) ? e.value : e;
}
var nI = {
	get: (e, t, r) => "__v_raw" === t ? e : nT(Reflect.get(e, t, r)),
	set: (e, t, r, a) => {
		let s = e[t];
		return nA(s) && !nA(r) ? (s.value = r, !0) : Reflect.set(e, t, r, a);
	}
};
function nR(e) {
	return nN(e) ? e : new Proxy(e, nI);
}
var nM = class {
	constructor(e) {
		this.__v_isRef = !0, this._value = void 0;
		let t = this.dep = new tG(), { get: r, set: a } = e(t.track.bind(t), t.trigger.bind(t));
		this._get = r, this._set = a;
	}
	get value() {
		return this._value = this._get();
	}
	set value(e) {
		this._set(e);
	}
}, n$ = class {
	constructor(e, t, r) {
		this.fn = e, this.setter = t, this._value = void 0, this.dep = new tG(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = tU - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = r;
	}
	notify() {
		if (this.flags |= 16, !(8 & this.flags) && T !== this) return tP(this, !0), !0;
	}
	get value() {
		let e = this.dep.track();
		return tM(this), e && (e.version = this.dep.version), this._value;
	}
	set value(e) {
		this.setter && this.setter(e);
	}
}, nD = {}, nV = /* @__PURE__ */ new WeakMap(), nL = void 0;
function nF(e, t = Infinity, r) {
	if (t <= 0 || !te(e) || e.__v_skip || ((r = r || /* @__PURE__ */ new Map()).get(e) || 0) >= t) return e;
	if (r.set(e, t), t--, nA(e)) nF(e.value, t, r);
	else if (e6(e)) for (let a = 0; a < e.length; a++) nF(e[a], t, r);
	else if ("[object Set]" === tr(e) || e8(e)) e.forEach((e) => {
		nF(e, t, r);
	});
	else if ("[object Object]" === tr(e)) {
		for (let a in e) nF(e[a], t, r);
		for (let a of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, a) && nF(e[a], t, r);
	}
	return e;
}
function nB(e, t, r, a) {
	try {
		return a ? e(...a) : e();
	} catch (e) {
		nz(e, t, r);
	}
}
function nU(e, t, r, a) {
	if (e7(e)) {
		let s = nB(e, t, r, a);
		return s && tt(s) && s.catch((e) => {
			nz(e, t, r);
		}), s;
	}
	if (e6(e)) {
		let s = [];
		for (let i = 0; i < e.length; i++) s.push(nU(e[i], t, r, a));
		return s;
	}
}
function nz(e, t, r, a = !0) {
	t && t.vnode;
	let { errorHandler: i, throwUnhandledErrorInProduction: o } = t && t.appContext.config || eY;
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
			tL(), nB(i, null, 10, [
				e,
				s,
				o
			]), tF();
			return;
		}
	}
	(function(e, t, r, a = !0, s = !1) {
		if (s) throw e;
		console.error(e);
	})(e, 0, 0, a, o);
}
var nG = [], nW = -1, nK = [], nq = null, nH = 0, nY = Promise.resolve(), nJ = null;
function nX(e) {
	let t = nJ || nY;
	return e ? t.then(this ? e.bind(this) : e) : t;
}
function nZ(e) {
	if (!(1 & e.flags)) {
		let t = n2(e), r = nG[nG.length - 1];
		!r || !(2 & e.flags) && t >= n2(r) ? nG.push(e) : nG.splice(function(e) {
			let t = nW + 1, r = nG.length;
			for (; t < r;) {
				let a = t + r >>> 1, s = nG[a], i = n2(s);
				i < e || i === e && 2 & s.flags ? t = a + 1 : r = a;
			}
			return t;
		}(t), 0, e), e.flags |= 1, nQ();
	}
}
function nQ() {
	nJ || (nJ = nY.then(function e(t) {
		try {
			for (nW = 0; nW < nG.length; nW++) {
				let e = nG[nW];
				e && !(8 & e.flags) && (4 & e.flags && (e.flags &= -2), nB(e, e.i, e.i ? 15 : 14), 4 & e.flags || (e.flags &= -2));
			}
		} finally {
			for (; nW < nG.length; nW++) {
				let e = nG[nW];
				e && (e.flags &= -2);
			}
			nW = -1, nG.length = 0, n1(t), nJ = null, (nG.length || nK.length) && e(t);
		}
	}));
}
function n0(e, t, r = nW + 1) {
	for (; r < nG.length; r++) {
		let t = nG[r];
		if (t && 2 & t.flags) {
			if (e && t.id !== e.uid) continue;
			nG.splice(r, 1), r--, 4 & t.flags && (t.flags &= -2), t(), 4 & t.flags || (t.flags &= -2);
		}
	}
}
function n1(e) {
	if (nK.length) {
		let e = [...new Set(nK)].sort((e, t) => n2(e) - n2(t));
		if (nK.length = 0, nq) return void nq.push(...e);
		for (nH = 0, nq = e; nH < nq.length; nH++) {
			let e = nq[nH];
			4 & e.flags && (e.flags &= -2), 8 & e.flags || e(), e.flags &= -2;
		}
		nq = null, nH = 0;
	}
}
var n2 = (e) => null == e.id ? 2 & e.flags ? -1 : Infinity : e.id, n4 = null, n3 = null;
function n6(e) {
	let t = n4;
	return n4 = e, n3 = e && e.type.__scopeId || null, t;
}
function n8(e, t, r, a) {
	let s = e.dirs, i = t && t.dirs;
	for (let o = 0; o < s.length; o++) {
		let l = s[o];
		i && (l.oldValue = i[o].value);
		let c = l.dir[a];
		c && (tL(), nU(c, r, 8, [
			e.el,
			l,
			e,
			t
		]), tF());
	}
}
var n7 = Symbol("_vte"), n5 = (e) => e && (e.disabled || "" === e.disabled), n9 = (e) => e && (e.defer || "" === e.defer), re = (e) => "undefined" != typeof SVGElement && e instanceof SVGElement, rt = (e) => "function" == typeof MathMLElement && e instanceof MathMLElement, rn = (e, t) => {
	let r = e && e.to;
	return e5(r) ? t ? t(r) : null : r;
}, rr = {
	name: "Teleport",
	__isTeleport: !0,
	process(e, t, r, a, s, i, o, l, c, u) {
		let { mc: p, pc: d, pbc: f, o: { insert: h, querySelector: m, createText: y, createComment: g } } = u, k = n5(t.props), { shapeFlag: N, children: b, dynamicChildren: _ } = t;
		if (null == e) {
			let e = t.el = y(""), u = t.anchor = y("");
			h(e, r, a), h(u, r, a);
			let d = (e, t) => {
				16 & N && p(b, e, t, s, i, o, l, c);
			}, f = () => {
				let e = t.target = rn(t.props, m), r = ro(e, t, y, h);
				e && ("svg" !== o && re(e) ? o = "svg" : "mathml" !== o && rt(e) && (o = "mathml"), s && s.isCE && (s.ce._teleportTargets || (s.ce._teleportTargets = /* @__PURE__ */ new Set())).add(e), k || (d(e, r), ri(t, !1)));
			};
			k && (d(r, u), ri(t, !0)), n9(t.props) ? (t.el.__isMounted = !1, ad(() => {
				f(), delete t.el.__isMounted;
			}, i)) : f();
		} else {
			if (n9(t.props) && !1 === e.el.__isMounted) return void ad(() => {
				rr.process(e, t, r, a, s, i, o, l, c, u);
			}, i);
			t.el = e.el, t.targetStart = e.targetStart;
			let p = t.anchor = e.anchor, h = t.target = e.target, y = t.targetAnchor = e.targetAnchor, g = n5(e.props), N = g ? r : h, b = g ? p : y;
			if ("svg" === o || re(h) ? o = "svg" : ("mathml" === o || rt(h)) && (o = "mathml"), _ ? (f(e.dynamicChildren, _, N, s, i, o, l), av(e, t, !0)) : c || d(e, t, N, b, s, i, o, l, !1), k) g ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : ra(t, r, p, u, 1);
			else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
				let e = t.target = rn(t.props, m);
				e && ra(t, e, null, u, 0);
			} else g && ra(t, h, y, u, 1);
			ri(t, k);
		}
	},
	remove(e, t, r, { um: a, o: { remove: s } }, i) {
		let { shapeFlag: o, children: l, anchor: c, targetStart: u, targetAnchor: p, target: d, props: f } = e;
		if (d && (s(u), s(p)), i && s(c), 16 & o) {
			let e = i || !n5(f);
			for (let s = 0; s < l.length; s++) {
				let i = l[s];
				a(i, t, r, e, !!i.dynamicChildren);
			}
		}
	},
	move: ra,
	hydrate: function(e, t, r, a, s, i, { o: { nextSibling: o, parentNode: l, querySelector: c, insert: u, createText: p } }, d) {
		function f(e, t, c, u) {
			t.anchor = d(o(e), t, l(e), r, a, s, i), t.targetStart = c, t.targetAnchor = u;
		}
		let h = t.target = rn(t.props, c), m = n5(t.props);
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
				t.targetAnchor || ro(h, t, p, u), d(l && o(l), t, h, r, a, s, i);
			}
			ri(t, m);
		} else m && 16 & t.shapeFlag && f(e, t, e, o(e));
		return t.anchor && o(t.anchor);
	}
};
function ra(e, t, r, { o: { insert: a }, m: s }, i = 2) {
	0 === i && a(e.targetAnchor, t, r);
	let { el: o, anchor: l, shapeFlag: c, children: u, props: p } = e, d = 2 === i;
	if (d && a(o, t, r), (!d || n5(p)) && 16 & c) for (let e = 0; e < u.length; e++) s(u[e], t, r, 2);
	d && a(l, t, r);
}
var rs = rr;
function ri(e, t) {
	let r = e.ctx;
	if (r && r.ut) {
		let a, s;
		for (t ? (a = e.el, s = e.anchor) : (a = e.targetStart, s = e.targetAnchor); a && a !== s;) 1 === a.nodeType && a.setAttribute("data-v-owner", r.uid), a = a.nextSibling;
		r.ut();
	}
}
function ro(e, t, r, a) {
	let s = t.targetStart = r(""), i = t.targetAnchor = r("");
	return s[n7] = i, e && (a(s, e), a(i, e)), i;
}
var rl = Symbol("_leaveCb"), rc = Symbol("_enterCb"), ru = [Function, Array], rp = {
	mode: String,
	appear: Boolean,
	persisted: Boolean,
	onBeforeEnter: ru,
	onEnter: ru,
	onAfterEnter: ru,
	onEnterCancelled: ru,
	onBeforeLeave: ru,
	onLeave: ru,
	onAfterLeave: ru,
	onLeaveCancelled: ru,
	onBeforeAppear: ru,
	onAppear: ru,
	onAfterAppear: ru,
	onAppearCancelled: ru
}, rd = (e) => {
	let t = e.subTree;
	return t.component ? rd(t.component) : t;
};
function rf(e) {
	let t = e[0];
	if (e.length > 1) {
		for (let r of e) if (r.type !== aI) {
			t = r;
			break;
		}
	}
	return t;
}
var rh = {
	name: "BaseTransition",
	props: rp,
	setup(e, { slots: t }) {
		let r = aX(), a = function() {
			let e = {
				isMounted: !1,
				isLeaving: !1,
				isUnmounting: !1,
				leavingVNodes: /* @__PURE__ */ new Map()
			};
			return rI(() => {
				e.isMounted = !0;
			}), r$(() => {
				e.isUnmounting = !0;
			}), e;
		}();
		return () => {
			let s = t.default && function e(t, r = !1, a) {
				let s = [], i = 0;
				for (let o = 0; o < t.length; o++) {
					let l = t[o], c = null == a ? l.key : String(a) + String(null != l.key ? l.key : o);
					l.type === aC ? (128 & l.patchFlag && i++, s = s.concat(e(l.children, r, c))) : (r || l.type !== aI) && s.push(null != c ? az(l, { key: c }) : l);
				}
				if (i > 1) for (let e = 0; e < s.length; e++) s[e].patchFlag = -2;
				return s;
			}(t.default(), !0);
			if (!s || !s.length) return;
			let i = rf(s), o = nx(e), { mode: l } = o;
			if (a.isLeaving) return ry(i);
			let c = rg(i);
			if (!c) return ry(i);
			let u = rv(c, o, a, r, (e) => u = e);
			c.type !== aI && rk(c, u);
			let p = r.subTree && rg(r.subTree);
			if (p && p.type !== aI && !aL(p, c) && rd(r).type !== aI) {
				let e = rv(p, o, a, r);
				if (rk(p, e), "out-in" === l && c.type !== aI) return a.isLeaving = !0, e.afterLeave = () => {
					a.isLeaving = !1, 8 & r.job.flags || r.update(), delete e.afterLeave, p = void 0;
				}, ry(i);
				"in-out" === l && c.type !== aI ? e.delayLeave = (e, t, r) => {
					rm(a, p)[String(p.key)] = p, e[rl] = () => {
						t(), e[rl] = void 0, delete u.delayedLeave, p = void 0;
					}, u.delayedLeave = () => {
						r(), delete u.delayedLeave, p = void 0;
					};
				} : p = void 0;
			} else p && (p = void 0);
			return i;
		};
	}
};
function rm(e, t) {
	let { leavingVNodes: r } = e, a = r.get(t.type);
	return a || (a = Object.create(null), r.set(t.type, a)), a;
}
function rv(e, t, r, a, s) {
	let { appear: i, mode: o, persisted: l = !1, onBeforeEnter: c, onEnter: u, onAfterEnter: p, onEnterCancelled: d, onBeforeLeave: f, onLeave: h, onAfterLeave: m, onLeaveCancelled: y, onBeforeAppear: g, onAppear: k, onAfterAppear: N, onAppearCancelled: b } = t, _ = String(e.key), w = rm(r, e), x = (e, t) => {
		e && nU(e, a, 9, t);
	}, O = (e, t) => {
		let r = t[1];
		x(e, t), e6(e) ? e.every((e) => e.length <= 1) && r() : e.length <= 1 && r();
	}, S = {
		mode: o,
		persisted: l,
		beforeEnter(t) {
			let a = c;
			if (!r.isMounted) if (!i) return;
			else a = g || c;
			t[rl] && t[rl](!0);
			let s = w[_];
			s && aL(e, s) && s.el[rl] && s.el[rl](), x(a, [t]);
		},
		enter(e) {
			let t = u, a = p, s = d;
			if (!r.isMounted) if (!i) return;
			else t = k || u, a = N || p, s = b || d;
			let o = !1, l = e[rc] = (t) => {
				o || (o = !0, t ? x(s, [e]) : x(a, [e]), S.delayedLeave && S.delayedLeave(), e[rc] = void 0);
			};
			t ? O(t, [e, l]) : l();
		},
		leave(t, a) {
			let s = String(e.key);
			if (t[rc] && t[rc](!0), r.isUnmounting) return a();
			x(f, [t]);
			let i = !1, o = t[rl] = (r) => {
				i || (i = !0, a(), r ? x(y, [t]) : x(m, [t]), t[rl] = void 0, w[s] === e && delete w[s]);
			};
			w[s] = e, h ? O(h, [t, o]) : o();
		},
		clone(e) {
			let i = rv(e, t, r, a, s);
			return s && s(i), i;
		}
	};
	return S;
}
function ry(e) {
	if (rS(e)) return (e = az(e)).children = null, e;
}
function rg(e) {
	if (!rS(e)) return e.type.__isTeleport && e.children ? rf(e.children) : e;
	if (e.component) return e.component.subTree;
	let { shapeFlag: t, children: r } = e;
	if (r) {
		if (16 & t) return r[0];
		if (32 & t && e7(r.default)) return r.default();
	}
}
function rk(e, t) {
	6 & e.shapeFlag && e.component ? (e.transition = t, rk(e.component.subTree, t)) : 128 & e.shapeFlag ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function rN(e, t) {
	return e7(e) ? e1({ name: e.name }, t, { setup: e }) : e;
}
function rb(e) {
	e.ids = [
		e.ids[0] + e.ids[2]++ + "-",
		0,
		0
	];
}
var r_ = /* @__PURE__ */ new WeakMap();
function rw(e, t, r, a, s = !1) {
	if (e6(e)) return void e.forEach((e, i) => rw(e, t && (e6(t) ? t[i] : t), r, a, s));
	if (rO(a) && !s) {
		512 & a.shapeFlag && a.type.__asyncResolved && a.component.subTree.component && rw(e, t, r, a.component.subTree);
		return;
	}
	let i = 4 & a.shapeFlag ? a6(a.component) : a.el, o = s ? null : i, { i: l, r: c } = e, u = t && t.r, p = l.refs === eY ? l.refs = {} : l.refs, d = l.setupState, f = nx(d), h = d === eY ? eZ : (e) => e3(f, e);
	if (null != u && u !== c && ((rx(t), e5(u)) ? (p[u] = null, h(u) && (d[u] = null)) : nA(u) && (u.value = null, t.k && (p[t.k] = null))), e7(c)) nB(c, l, 12, [o, p]);
	else {
		let t = e5(c), a = nA(c);
		if (t || a) {
			let l = () => {
				if (e.f) {
					let r = t ? h(c) ? d[c] : p[c] : c.value;
					if (s) e6(r) && e2(r, i);
					else if (e6(r)) r.includes(i) || r.push(i);
					else if (t) p[c] = [i], h(c) && (d[c] = p[c]);
					else {
						let t = [i];
						c.value = t, e.k && (p[e.k] = t);
					}
				} else t ? (p[c] = o, h(c) && (d[c] = o)) : a && (c.value = o, e.k && (p[e.k] = o));
			};
			if (o) {
				let t = () => {
					l(), r_.delete(e);
				};
				t.id = -1, r_.set(e, t), ad(t, r);
			} else rx(e), l();
		}
	}
}
function rx(e) {
	let t = r_.get(e);
	t && (t.flags |= 8, r_.delete(e));
}
tg().requestIdleCallback, tg().cancelIdleCallback;
var rO = (e) => !!e.type.__asyncLoader, rS = (e) => e.type.__isKeepAlive;
function rA(e, t) {
	rE(e, "a", t);
}
function rj(e, t) {
	rE(e, "da", t);
}
function rE(e, t, r = aJ) {
	let a = e.__wdc || (e.__wdc = () => {
		let t = r;
		for (; t;) {
			if (t.isDeactivated) return;
			t = t.parent;
		}
		return e();
	});
	if (rP(t, a, r), r) {
		let e = r.parent;
		for (; e && e.parent;) rS(e.parent.vnode) && function(e, t, r, a) {
			let s = rP(t, e, a, !0);
			rD(() => {
				e2(a[t], s);
			}, r);
		}(a, t, r, e), e = e.parent;
	}
}
function rP(e, t, r = aJ, a = !1) {
	if (r) {
		let s = r[e] || (r[e] = []), i = t.__weh || (t.__weh = (...a) => {
			tL();
			let s = aZ(r), i = nU(t, r, e, a);
			return s(), tF(), i;
		});
		return a ? s.unshift(i) : s.push(i), i;
	}
}
var rC = (e) => (t, r = aJ) => {
	a1 && "sp" !== e || rP(e, (...e) => t(...e), r);
}, rT = rC("bm"), rI = rC("m"), rR = rC("bu"), rM = rC("u"), r$ = rC("bum"), rD = rC("um"), rV = rC("sp"), rL = rC("rtg"), rF = rC("rtc");
function rB(e, t = aJ) {
	rP("ec", e, t);
}
var rU = Symbol.for("v-ndc"), rz = (e) => e ? a0(e) ? a6(e) : rz(e.parent) : null, rG = e1(Object.create(null), {
	$: (e) => e,
	$el: (e) => e.vnode.el,
	$data: (e) => e.data,
	$props: (e) => e.props,
	$attrs: (e) => e.attrs,
	$slots: (e) => e.slots,
	$refs: (e) => e.refs,
	$parent: (e) => rz(e.parent),
	$root: (e) => rz(e.root),
	$host: (e) => e.ce,
	$emit: (e) => e.emit,
	$options: (e) => rJ(e),
	$forceUpdate: (e) => e.f || (e.f = () => {
		nZ(e.update);
	}),
	$nextTick: (e) => e.n || (e.n = nX.bind(e.proxy)),
	$watch: (e) => ab.bind(e)
}), rW = (e, t) => e !== eY && !e.__isScriptSetup && e3(e, t), rK = {
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
				if (rW(o, t)) return u[t] = 1, o[t];
				if (l !== eY && e3(l, t)) return u[t] = 2, l[t];
				if ((r = e.propsOptions[0]) && e3(r, t)) return u[t] = 3, c[t];
				if (i !== eY && e3(i, t)) return u[t] = 4, i[t];
				rH && (u[t] = 0);
			}
		}
		let f = rG[t];
		return f ? ("$attrs" === t && tY(e.attrs, "get", ""), f(e)) : (a = p.__cssModules) && (a = a[t]) ? a : i !== eY && e3(i, t) ? (u[t] = 4, i[t]) : e3(s = d.config.globalProperties, t) ? s[t] : void 0;
	},
	set({ _: e }, t, r) {
		let { data: a, setupState: s, ctx: i } = e;
		return rW(s, t) ? (s[t] = r, !0) : a !== eY && e3(a, t) ? (a[t] = r, !0) : !e3(e.props, t) && !("$" === t[0] && t.slice(1) in e) && (i[t] = r, !0);
	},
	has({ _: { data: e, setupState: t, accessCache: r, ctx: a, appContext: s, propsOptions: i, type: o } }, l) {
		let c, u;
		return !!(r[l] || e !== eY && "$" !== l[0] && e3(e, l) || rW(t, l) || (c = i[0]) && e3(c, l) || e3(a, l) || e3(rG, l) || e3(s.config.globalProperties, l) || (u = o.__cssModules) && u[l]);
	},
	defineProperty(e, t, r) {
		return null != r.get ? e._.accessCache[t] = 0 : e3(r, "value") && this.set(e, t, r.value, null), Reflect.defineProperty(e, t, r);
	}
};
function rq(e) {
	return e6(e) ? e.reduce((e, t) => (e[t] = null, e), {}) : e;
}
var rH = !0;
function rY(e, t, r) {
	nU(e6(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, r);
}
function rJ(e) {
	let t, r = e.type, { mixins: a, extends: s } = r, { mixins: i, optionsCache: o, config: { optionMergeStrategies: l } } = e.appContext, c = o.get(r);
	return c ? t = c : i.length || a || s ? (t = {}, i.length && i.forEach((e) => rX(t, e, l, !0)), rX(t, r, l)) : t = r, te(r) && o.set(r, t), t;
}
function rX(e, t, r, a = !1) {
	let { mixins: s, extends: i } = t;
	for (let o in i && rX(e, i, r, !0), s && s.forEach((t) => rX(e, t, r, !0)), t) if (a && "expose" === o);
	else {
		let a = rZ[o] || r && r[o];
		e[o] = a ? a(e[o], t[o]) : t[o];
	}
	return e;
}
var rZ = {
	data: rQ,
	props: r4,
	emits: r4,
	methods: r2,
	computed: r2,
	beforeCreate: r1,
	created: r1,
	beforeMount: r1,
	mounted: r1,
	beforeUpdate: r1,
	updated: r1,
	beforeDestroy: r1,
	beforeUnmount: r1,
	destroyed: r1,
	unmounted: r1,
	activated: r1,
	deactivated: r1,
	errorCaptured: r1,
	serverPrefetch: r1,
	components: r2,
	directives: r2,
	watch: function(e, t) {
		if (!e) return t;
		if (!t) return e;
		let r = e1(Object.create(null), e);
		for (let a in t) r[a] = r1(e[a], t[a]);
		return r;
	},
	provide: rQ,
	inject: function(e, t) {
		return r2(r0(e), r0(t));
	}
};
function rQ(e, t) {
	return t ? e ? function() {
		return e1(e7(e) ? e.call(this, this) : e, e7(t) ? t.call(this, this) : t);
	} : t : e;
}
function r0(e) {
	if (e6(e)) {
		let t = {};
		for (let r = 0; r < e.length; r++) t[e[r]] = e[r];
		return t;
	}
	return e;
}
function r1(e, t) {
	return e ? [...new Set([].concat(e, t))] : t;
}
function r2(e, t) {
	return e ? e1(Object.create(null), e, t) : t;
}
function r4(e, t) {
	return e ? e6(e) && e6(t) ? [...new Set([...e, ...t])] : e1(Object.create(null), rq(e), rq(null != t ? t : {})) : t;
}
function r3() {
	return {
		app: null,
		config: {
			isNativeTag: eZ,
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
var r6 = 0, r8 = null;
function r7(e, t) {
	if (aJ) {
		let r = aJ.provides, a = aJ.parent && aJ.parent.provides;
		a === r && (r = aJ.provides = Object.create(a)), r[e] = t;
	}
}
function r5(e, t, r = !1) {
	let a = aX();
	if (a || r8) {
		let s = r8 ? r8._context.provides : a ? null == a.parent || a.ce ? a.vnode.appContext && a.vnode.appContext.provides : a.parent.provides : void 0;
		if (s && e in s) return s[e];
		if (arguments.length > 1) return r && e7(t) ? t.call(a && a.proxy) : t;
	}
}
var r9 = {}, ae = () => Object.create(r9), at = (e) => Object.getPrototypeOf(e) === r9;
function an(e, t, r, a) {
	let s, [i, o] = e.propsOptions, l = !1;
	if (t) for (let c in t) {
		let u;
		if (ts(c)) continue;
		let p = t[c];
		i && e3(i, u = tl(c)) ? o && o.includes(u) ? (s || (s = {}))[u] = p : r[u] = p : aO(e.emitsOptions, c) || c in a && p === a[c] || (a[c] = p, l = !0);
	}
	if (o) {
		let t = nx(r), a = s || eY;
		for (let s = 0; s < o.length; s++) {
			let l = o[s];
			r[l] = ar(i, t, l, a[l], e, !e3(a, l));
		}
	}
	return l;
}
function ar(e, t, r, a, s, i) {
	let o = e[r];
	if (null != o) {
		let e = e3(o, "default");
		if (e && void 0 === a) {
			let e = o.default;
			if (o.type !== Function && !o.skipFactory && e7(e)) {
				let { propsDefaults: i } = s;
				if (r in i) a = i[r];
				else {
					let o = aZ(s);
					a = i[r] = e.call(null, t), o();
				}
			} else a = e;
			s.ce && s.ce._setProp(r, a);
		}
		o[0] && (i && !e ? a = !1 : o[1] && ("" === a || a === tu(r)) && (a = !0));
	}
	return a;
}
var aa = /* @__PURE__ */ new WeakMap();
function as(e) {
	return !("$" === e[0] || ts(e));
}
var ai = (e) => "_" === e || "_ctx" === e || "$stable" === e, ao = (e) => e6(e) ? e.map(aG) : [aG(e)], al = (e, t, r) => {
	if (t._n) return t;
	let a = function(e, t = n4, r) {
		if (!t || e._n) return e;
		let a = (...r) => {
			let s;
			a._d && aD(-1);
			let i = n6(t);
			try {
				s = e(...r);
			} finally {
				n6(i), a._d && aD(1);
			}
			return s;
		};
		return a._n = !0, a._c = !0, a._d = !0, a;
	}((...e) => ao(t(...e)), r);
	return a._c = !1, a;
}, ac = (e, t, r) => {
	let a = e._ctx;
	for (let r in e) {
		if (ai(r)) continue;
		let s = e[r];
		if (e7(s)) t[r] = al(r, s, a);
		else if (null != s) {
			let e = ao(s);
			t[r] = () => e;
		}
	}
}, au = (e, t) => {
	let r = ao(t);
	e.slots.default = () => r;
}, ap = (e, t, r) => {
	for (let a in t) (r || !ai(a)) && (e[a] = t[a]);
}, ad = function(e, t) {
	if (t && t.pendingBranch) e6(e) ? t.effects.push(...e) : t.effects.push(e);
	else e6(e) ? nK.push(...e) : nq && -1 === e.id ? nq.splice(nH + 1, 0, e) : 1 & e.flags || (nK.push(e), e.flags |= 1), nQ();
};
function af(e) {
	return function(e, t) {
		var r;
		let a, s;
		tg().__VUE__ = !0;
		let { insert: i, remove: o, patchProp: l, createElement: c, createText: u, createComment: p, setText: d, setElementText: f, parentNode: h, nextSibling: m, setScopeId: y = eX, insertStaticContent: g } = e, k = (e, t, r, a = null, s = null, i = null, o, l = null, c = !!t.dynamicChildren) => {
			if (e === t) return;
			e && !aL(e, t) && (a = K(e), B(e, s, i, !0), e = null), -2 === t.patchFlag && (c = !1, t.dynamicChildren = null);
			let { type: u, ref: p, shapeFlag: d } = t;
			switch (u) {
				case aT:
					N(e, t, r, a);
					break;
				case aI:
					b(e, t, r, a);
					break;
				case aR:
					e ?? _(t, r, a, o);
					break;
				case aC:
					P(e, t, r, a, s, i, o, l, c);
					break;
				default: 1 & d ? w(e, t, r, a, s, i, o, l, c) : 6 & d ? C(e, t, r, a, s, i, o, l, c) : 64 & d ? u.process(e, t, r, a, s, i, o, l, c, Y) : 128 & d && u.process(e, t, r, a, s, i, o, l, c, Y);
			}
			null != p && s ? rw(p, e && e.ref, i, t || e, !t) : null == p && e && null != e.ref && rw(e.ref, null, i, e, !0);
		}, N = (e, t, r, a) => {
			if (null == e) i(t.el = u(t.children), r, a);
			else {
				let r = t.el = e.el;
				t.children !== e.children && d(r, t.children);
			}
		}, b = (e, t, r, a) => {
			null == e ? i(t.el = p(t.children || ""), r, a) : t.el = e.el;
		}, _ = (e, t, r, a) => {
			[e.el, e.anchor] = g(e.children, t, r, a, e.el, e.anchor);
		}, w = (e, t, r, a, s, i, o, l, c) => {
			"svg" === t.type ? o = "svg" : "math" === t.type && (o = "mathml"), null == e ? x(t, r, a, s, i, o, l, c) : A(e, t, s, i, o, l, c);
		}, x = (e, t, r, a, s, o, u, p) => {
			var d, h;
			let m, y, { props: g, shapeFlag: k, transition: N, dirs: b } = e;
			if (m = e.el = c(e.type, o, g && g.is, g), 8 & k ? f(m, e.children) : 16 & k && S(e.children, m, null, a, s, ah(e, o), u, p), b && n8(e, null, a, "created"), O(m, e, e.scopeId, u, a), g) {
				for (let e in g) "value" === e || ts(e) || l(m, e, null, g[e], o, a);
				"value" in g && l(m, "value", null, g.value, o), (y = g.onVnodeBeforeMount) && aq(y, a, e);
			}
			b && n8(e, null, a, "beforeMount");
			let _ = (d = s, h = N, (!d || d && !d.pendingBranch) && h && !h.persisted);
			_ && N.beforeEnter(m), i(m, t, r), ((y = g && g.onVnodeMounted) || _ || b) && ad(() => {
				y && aq(y, a, e), _ && N.enter(m), b && n8(e, null, a, "mounted");
			}, s);
		}, O = (e, t, r, a, s) => {
			if (r && y(e, r), a) for (let t = 0; t < a.length; t++) y(e, a[t]);
			if (s) {
				let r = s.subTree;
				if (t === r || aP(r.type) && (r.ssContent === t || r.ssFallback === t)) {
					let t = s.vnode;
					O(e, t, t.scopeId, t.slotScopeIds, s.parent);
				}
			}
		}, S = (e, t, r, a, s, i, o, l, c = 0) => {
			for (let u = c; u < e.length; u++) k(null, e[u] = l ? aW(e[u]) : aG(e[u]), t, r, a, s, i, o, l);
		}, A = (e, t, r, a, s, i, o) => {
			let c, u = t.el = e.el, { patchFlag: p, dynamicChildren: d, dirs: h } = t;
			p |= 16 & e.patchFlag;
			let m = e.props || eY, y = t.props || eY;
			if (r && am(r, !1), (c = y.onVnodeBeforeUpdate) && aq(c, r, t, e), h && n8(t, e, r, "beforeUpdate"), r && am(r, !0), (m.innerHTML && null == y.innerHTML || m.textContent && null == y.textContent) && f(u, ""), d ? j(e.dynamicChildren, d, u, r, a, ah(t, s), i) : o || D(e, t, u, null, r, a, ah(t, s), i, !1), p > 0) {
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
			((c = y.onVnodeUpdated) || h) && ad(() => {
				c && aq(c, r, t, e), h && n8(t, e, r, "updated");
			}, a);
		}, j = (e, t, r, a, s, i, o) => {
			for (let l = 0; l < t.length; l++) {
				let c = e[l], u = t[l];
				k(c, u, c.el && (c.type === aC || !aL(c, u) || 198 & c.shapeFlag) ? h(c.el) : r, null, a, s, i, o, !0);
			}
		}, E = (e, t, r, a, s) => {
			if (t !== r) {
				if (t !== eY) for (let i in t) ts(i) || i in r || l(e, i, t[i], null, s, a);
				for (let i in r) {
					if (ts(i)) continue;
					let o = r[i], c = t[i];
					o !== c && "value" !== i && l(e, i, c, o, s, a);
				}
				"value" in r && l(e, "value", t.value, r.value, s);
			}
		}, P = (e, t, r, a, s, o, l, c, p) => {
			let d = t.el = e ? e.el : u(""), f = t.anchor = e ? e.anchor : u(""), { patchFlag: h, dynamicChildren: m, slotScopeIds: y } = t;
			y && (c = c ? c.concat(y) : y), null == e ? (i(d, r, a), i(f, r, a), S(t.children || [], r, f, s, o, l, c, p)) : h > 0 && 64 & h && m && e.dynamicChildren ? (j(e.dynamicChildren, m, r, s, o, l, c), (null != t.key || s && t === s.subTree) && av(e, t, !0)) : D(e, t, r, f, s, o, l, c, p);
		}, C = (e, t, r, a, s, i, o, l, c) => {
			t.slotScopeIds = l, null == e ? 512 & t.shapeFlag ? s.ctx.activate(t, r, a, o, c) : T(t, r, a, s, i, o, c) : I(e, t, c);
		}, T = (e, t, r, a, s, i, o) => {
			let l = e.component = function(e, t, r) {
				let a = e.type, s = (t ? t.appContext : e.appContext) || aH, i = {
					uid: aY++,
					vnode: e,
					type: a,
					parent: t,
					appContext: s,
					root: null,
					next: null,
					subTree: null,
					effect: null,
					update: null,
					job: null,
					scope: new tS(!0),
					render: null,
					proxy: null,
					exposed: null,
					exposeProxy: null,
					withProxy: null,
					provides: t ? t.provides : Object.create(s.provides),
					ids: t ? t.ids : [
						"",
						0,
						0
					],
					accessCache: null,
					renderCache: [],
					components: null,
					directives: null,
					propsOptions: function e(t, r, a = !1) {
						let s = a ? aa : r.propsCache, i = s.get(t);
						if (i) return i;
						let o = t.props, l = {}, c = [], u = !1;
						if (!e7(t)) {
							let s = (t) => {
								u = !0;
								let [a, s] = e(t, r, !0);
								e1(l, a), s && c.push(...s);
							};
							!a && r.mixins.length && r.mixins.forEach(s), t.extends && s(t.extends), t.mixins && t.mixins.forEach(s);
						}
						if (!o && !u) return te(t) && s.set(t, eJ), eJ;
						if (e6(o)) for (let e = 0; e < o.length; e++) {
							let t = tl(o[e]);
							as(t) && (l[t] = eY);
						}
						else if (o) for (let e in o) {
							let t = tl(e);
							if (as(t)) {
								let r = o[e], a = l[t] = e6(r) || e7(r) ? { type: r } : e1({}, r), s = a.type, i = !1, u = !0;
								if (e6(s)) for (let e = 0; e < s.length; ++e) {
									let t = s[e], r = e7(t) && t.name;
									if ("Boolean" === r) {
										i = !0;
										break;
									}
									"String" === r && (u = !1);
								}
								else i = e7(s) && "Boolean" === s.name;
								a[0] = i, a[1] = u, (i || e3(a, "default")) && c.push(t);
							}
						}
						let p = [l, c];
						return te(t) && s.set(t, p), p;
					}(a, s),
					emitsOptions: function e(t, r, a = !1) {
						let s = a ? ax : r.emitsCache, i = s.get(t);
						if (void 0 !== i) return i;
						let o = t.emits, l = {}, c = !1;
						if (!e7(t)) {
							let s = (t) => {
								let a = e(t, r, !0);
								a && (c = !0, e1(l, a));
							};
							!a && r.mixins.length && r.mixins.forEach(s), t.extends && s(t.extends), t.mixins && t.mixins.forEach(s);
						}
						return o || c ? (e6(o) ? o.forEach((e) => l[e] = null) : e1(l, o), te(t) && s.set(t, l), l) : (te(t) && s.set(t, null), null);
					}(a, s),
					emit: null,
					emitted: null,
					propsDefaults: eY,
					inheritAttrs: a.inheritAttrs,
					ctx: eY,
					data: eY,
					props: eY,
					attrs: eY,
					slots: eY,
					refs: eY,
					setupState: eY,
					setupContext: null,
					suspense: r,
					suspenseId: r ? r.pendingId : 0,
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
				};
				return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = aw.bind(null, i), e.ce && e.ce(i), i;
			}(e, a, s);
			if (rS(e) && (l.ctx.renderer = Y), function(e, t = !1, r = !1) {
				t && $(t);
				let { props: a, children: s } = e.vnode, i = a0(e);
				(function(e, t, r, a = !1) {
					let s = {}, i = ae();
					for (let r in e.propsDefaults = Object.create(null), an(e, t, s, i), e.propsOptions[0]) r in s || (s[r] = void 0);
					r ? e.props = a ? s : ny(s) : e.type.props ? e.props = s : e.props = i, e.attrs = i;
				})(e, a, i, t);
				var o = r || t;
				let l = e.slots = ae();
				if (32 & e.vnode.shapeFlag) {
					let e = s._;
					e ? (ap(l, s, o), o && tm(l, "_", e, !0)) : ac(s, l);
				} else s && au(e, s);
				i && function(e, t) {
					let r = e.type;
					e.accessCache = Object.create(null), e.proxy = new Proxy(e.ctx, rK);
					let { setup: a } = r;
					if (a) {
						var s;
						tL();
						let r = e.setupContext = a.length > 1 ? {
							attrs: new Proxy((s = e).attrs, a3),
							slots: s.slots,
							emit: s.emit,
							expose: (e) => {
								s.exposed = e || {};
							}
						} : null, i = aZ(e), o = nB(a, e, 0, [e.props, r]), l = tt(o);
						if (tF(), i(), (l || e.sp) && !rO(e) && rb(e), l) {
							if (o.then(aQ, aQ), t) return o.then((r) => {
								a2(e, r, t);
							}).catch((t) => {
								nz(t, e, 0);
							});
							e.asyncDep = o;
						} else a2(e, o, t);
					} else a4(e, t);
				}(e, t), t && $(!1);
			}(l, !1, o), l.asyncDep) {
				if (s && s.registerDep(l, R, o), !e.el) {
					let a = l.subTree = aU(aI);
					b(null, a, t, r), e.placeholder = a.el;
				}
			} else R(l, e, t, r, s, i, o);
		}, I = (e, t, r) => {
			let a = t.component = e.component;
			if (function(e, t, r) {
				let { props: a, children: s, component: i } = e, { props: o, children: l, patchFlag: c } = t, u = i.emitsOptions;
				if (t.dirs || t.transition) return !0;
				if (!r || !(c >= 0)) return (!!s || !!l) && (!l || !l.$stable) || a !== o && (a ? !o || aE(a, o, u) : !!o);
				if (1024 & c) return !0;
				if (16 & c) return a ? aE(a, o, u) : !!o;
				if (8 & c) {
					let e = t.dynamicProps;
					for (let t = 0; t < e.length; t++) {
						let r = e[t];
						if (o[r] !== a[r] && !aO(u, r)) return !0;
					}
				}
				return !1;
			}(e, t, r)) if (a.asyncDep && !a.asyncResolved) return void M(a, t, r);
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
							r && (r.el = p.el, M(e, r, l)), t.asyncDep.then(() => {
								e.isUnmounted || c();
							});
							return;
						}
					}
					let d = r;
					am(e, !1), r ? (r.el = p.el, M(e, r, l)) : r = p, a && th(a), (t = r.props && r.props.onVnodeBeforeUpdate) && aq(t, u, r, p), am(e, !0);
					let f = aS(e), m = e.subTree;
					e.subTree = f, k(m, f, h(m.el), K(m), e, i, o), r.el = f.el, null === d && function({ vnode: e, parent: t }, r) {
						for (; t;) {
							let a = t.subTree;
							if (a.suspense && a.suspense.activeBranch === e && (a.el = e.el), a === e) (e = t.vnode).el = r, t = t.parent;
							else break;
						}
					}(e, f.el), s && ad(s, i), (t = r.props && r.props.onVnodeUpdated) && ad(() => aq(t, u, r, p), i);
				} else {
					let l, { el: c, props: u } = t, { bm: p, m: d, parent: f, root: h, type: m } = e, y = rO(t);
					if (am(e, !1), p && th(p), !y && (l = u && u.onVnodeBeforeMount) && aq(l, f, t), am(e, !0), c && s);
					else {
						h.ce && !1 !== h.ce._def.shadowRoot && h.ce._injectChildStyle(m);
						let s = e.subTree = aS(e);
						k(null, s, r, a, e, i, o), t.el = s.el;
					}
					if (d && ad(d, i), !y && (l = u && u.onVnodeMounted)) {
						let e = t;
						ad(() => aq(l, f, e), i);
					}
					(256 & t.shapeFlag || f && rO(f.vnode) && 256 & f.vnode.shapeFlag) && e.a && ad(e.a, i), e.isMounted = !0, t = r = a = null;
				}
			};
			e.scope.on();
			let u = e.effect = new tj(c);
			e.scope.off();
			let p = e.update = u.run.bind(u), d = e.job = u.runIfDirty.bind(u);
			d.i = e, d.id = e.uid, u.scheduler = () => nZ(d), am(e, !0), p();
		}, M = (e, t, r) => {
			t.component = e;
			let a = e.vnode.props;
			e.vnode = t, e.next = null, function(e, t, r, a) {
				let { props: s, attrs: i, vnode: { patchFlag: o } } = e, l = nx(s), [c] = e.propsOptions, u = !1;
				if ((a || o > 0) && !(16 & o)) {
					if (8 & o) {
						let r = e.vnode.dynamicProps;
						for (let a = 0; a < r.length; a++) {
							let o = r[a];
							if (aO(e.emitsOptions, o)) continue;
							let p = t[o];
							if (c) if (e3(i, o)) p !== i[o] && (i[o] = p, u = !0);
							else {
								let t = tl(o);
								s[t] = ar(c, l, t, p, e, !1);
							}
							else p !== i[o] && (i[o] = p, u = !0);
						}
					}
				} else {
					let a;
					for (let o in an(e, t, s, i) && (u = !0), l) t && (e3(t, o) || (a = tu(o)) !== o && e3(t, a)) || (c ? r && (void 0 !== r[o] || void 0 !== r[a]) && (s[o] = ar(c, l, o, void 0, e, !0)) : delete s[o]);
					if (i !== l) for (let e in i) t && e3(t, e) || (delete i[e], u = !0);
				}
				u && tJ(e.attrs, "set", "");
			}(e, t.props, a, r), ((e, t, r) => {
				let { vnode: a, slots: s } = e, i = !0, o = eY;
				if (32 & a.shapeFlag) {
					let e = t._;
					e ? r && 1 === e ? i = !1 : ap(s, t, r) : (i = !t.$stable, ac(t, s)), o = t;
				} else t && (au(e, t), o = { default: 1 });
				if (i) for (let e in s) ai(e) || null != o[e] || delete s[e];
			})(e, t.children, r), tL(), n0(e), tF();
		}, D = (e, t, r, a, s, i, o, l, c = !1) => {
			let u = e && e.children, p = e ? e.shapeFlag : 0, d = t.children, { patchFlag: h, shapeFlag: m } = t;
			if (h > 0) {
				if (128 & h) return void L(u, d, r, a, s, i, o, l, c);
				else if (256 & h) return void V(u, d, r, a, s, i, o, l, c);
			}
			8 & m ? (16 & p && W(u, s, i), d !== u && f(r, d)) : 16 & p ? 16 & m ? L(u, d, r, a, s, i, o, l, c) : W(u, s, i, !0) : (8 & p && f(r, ""), 16 & m && S(d, r, a, s, i, o, l, c));
		}, V = (e, t, r, a, s, i, o, l, c) => {
			let u;
			e = e || eJ, t = t || eJ;
			let p = e.length, d = t.length, f = Math.min(p, d);
			for (u = 0; u < f; u++) {
				let a = t[u] = c ? aW(t[u]) : aG(t[u]);
				k(e[u], a, r, null, s, i, o, l, c);
			}
			p > d ? W(e, s, i, !0, !1, f) : S(t, r, a, s, i, o, l, c, f);
		}, L = (e, t, r, a, s, i, o, l, c) => {
			let u = 0, p = t.length, d = e.length - 1, f = p - 1;
			for (; u <= d && u <= f;) {
				let a = e[u], p = t[u] = c ? aW(t[u]) : aG(t[u]);
				if (aL(a, p)) k(a, p, r, null, s, i, o, l, c);
				else break;
				u++;
			}
			for (; u <= d && u <= f;) {
				let a = e[d], u = t[f] = c ? aW(t[f]) : aG(t[f]);
				if (aL(a, u)) k(a, u, r, null, s, i, o, l, c);
				else break;
				d--, f--;
			}
			if (u > d) {
				if (u <= f) {
					let e = f + 1, d = e < p ? t[e].el : a;
					for (; u <= f;) k(null, t[u] = c ? aW(t[u]) : aG(t[u]), r, d, s, i, o, l, c), u++;
				}
			} else if (u > f) for (; u <= d;) B(e[u], s, i, !0), u++;
			else {
				let h, m = u, y = u, g = /* @__PURE__ */ new Map();
				for (u = y; u <= f; u++) {
					let e = t[u] = c ? aW(t[u]) : aG(t[u]);
					null != e.key && g.set(e.key, u);
				}
				let N = 0, b = f - y + 1, _ = !1, w = 0, x = Array(b);
				for (u = 0; u < b; u++) x[u] = 0;
				for (u = m; u <= d; u++) {
					let a, p = e[u];
					if (N >= b) {
						B(p, s, i, !0);
						continue;
					}
					if (null != p.key) a = g.get(p.key);
					else for (h = y; h <= f; h++) if (0 === x[h - y] && aL(p, t[h])) {
						a = h;
						break;
					}
					void 0 === a ? B(p, s, i, !0) : (x[a - y] = u + 1, a >= w ? w = a : _ = !0, k(p, t[a], r, null, s, i, o, l, c), N++);
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
				}(x) : eJ;
				for (h = O.length - 1, u = b - 1; u >= 0; u--) {
					let e = y + u, d = t[e], f = t[e + 1], m = e + 1 < p ? f.el || f.placeholder : a;
					0 === x[u] ? k(null, d, r, m, s, i, o, l, c) : _ && (h < 0 || u !== O[h] ? F(d, r, m, 2) : h--);
				}
			}
		}, F = (e, t, r, a, s = null) => {
			let { el: l, type: c, transition: u, children: p, shapeFlag: d } = e;
			if (6 & d) return void F(e.component.subTree, t, r, a);
			if (128 & d) return void e.suspense.move(t, r, a);
			if (64 & d) return void c.move(e, t, r, Y);
			if (c === aC) {
				i(l, t, r);
				for (let e = 0; e < p.length; e++) F(p[e], t, r, a);
				i(e.anchor, t, r);
				return;
			}
			if (c === aR) return void (({ el: e, anchor: t }, r, a) => {
				let s;
				for (; e && e !== t;) s = m(e), i(e, r, a), e = s;
				i(t, r, a);
			})(e, t, r);
			if (2 !== a && 1 & d && u) if (0 === a) u.beforeEnter(l), i(l, t, r), ad(() => u.enter(l), s);
			else {
				let { leave: a, delayLeave: s, afterLeave: c } = u, p = () => {
					e.ctx.isUnmounted ? o(l) : i(l, t, r);
				}, d = () => {
					l._isLeaving && l[rl](!0), a(l, () => {
						p(), c && c();
					});
				};
				s ? s(l, p, d) : d();
			}
			else i(l, t, r);
		}, B = (e, t, r, a = !1, s = !1) => {
			let i, { type: o, props: l, ref: c, children: u, dynamicChildren: p, shapeFlag: d, patchFlag: f, dirs: h, cacheIndex: m } = e;
			if (-2 === f && (s = !1), null != c && (tL(), rw(c, null, r, e, !0), tF()), null != m && (t.renderCache[m] = void 0), 256 & d) return void t.ctx.deactivate(e);
			let y = 1 & d && h, g = !rO(e);
			if (g && (i = l && l.onVnodeBeforeUnmount) && aq(i, t, e), 6 & d) G(e.component, r, a);
			else {
				if (128 & d) return void e.suspense.unmount(r, a);
				y && n8(e, null, t, "beforeUnmount"), 64 & d ? e.type.remove(e, t, r, Y, a) : p && !p.hasOnce && (o !== aC || f > 0 && 64 & f) ? W(p, t, r, !1, !0) : (o === aC && 384 & f || !s && 16 & d) && W(u, t, r), a && U(e);
			}
			(g && (i = l && l.onVnodeUnmounted) || y) && ad(() => {
				i && aq(i, t, e), y && n8(e, null, t, "unmounted");
			}, r);
		}, U = (e) => {
			let { type: t, el: r, anchor: a, transition: s } = e;
			if (t === aC) return void z(r, a);
			if (t === aR) return void (({ el: e, anchor: t }) => {
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
			ay(c), ay(u), a && th(a), s.stop(), i && (i.flags |= 8, B(o, e, t, r)), l && ad(l, t), ad(() => {
				e.isUnmounted = !0;
			}, t);
		}, W = (e, t, r, a = !1, s = !1, i = 0) => {
			for (let o = i; o < e.length; o++) B(e[o], t, r, a, s);
		}, K = (e) => {
			if (6 & e.shapeFlag) return K(e.component.subTree);
			if (128 & e.shapeFlag) return e.suspense.next();
			let t = m(e.anchor || e.el), r = t && t[n7];
			return r ? m(r) : t;
		}, q = !1, H = (e, t, r) => {
			null == e ? t._vnode && B(t._vnode, null, null, !0) : k(t._vnode || null, e, t, null, null, null, r), t._vnode = e, q || (q = !0, n0(), n1(), q = !1);
		}, Y = {
			p: k,
			um: B,
			m: F,
			r: U,
			mt: T,
			mc: S,
			pc: D,
			pbc: j,
			n: K,
			o: e
		};
		return {
			render: H,
			hydrate: a,
			createApp: (r = a, function(e, t = null) {
				e7(e) || (e = e1({}, e)), null == t || te(t) || (t = null);
				let a = r3(), s = /* @__PURE__ */ new WeakSet(), i = [], o = !1, l = a.app = {
					_uid: r6++,
					_component: e,
					_props: t,
					_container: null,
					_context: a,
					_instance: null,
					version: a5,
					get config() {
						return a.config;
					},
					set config(v) {},
					use: (e, ...t) => (s.has(e) || (e && e7(e.install) ? (s.add(e), e.install(l, ...t)) : e7(e) && (s.add(e), e(l, ...t))), l),
					mixin: (e) => (a.mixins.includes(e) || a.mixins.push(e), l),
					component: (e, t) => t ? (a.components[e] = t, l) : a.components[e],
					directive: (e, t) => t ? (a.directives[e] = t, l) : a.directives[e],
					mount(s, i, c) {
						if (!o) {
							let u = l._ceVNode || aU(e, t);
							return u.appContext = a, !0 === c ? c = "svg" : !1 === c && (c = void 0), i && r ? r(u, s) : H(u, s, c), o = !0, l._container = s, s.__vue_app__ = l, a6(u.component);
						}
					},
					onUnmount(e) {
						i.push(e);
					},
					unmount() {
						o && (nU(i, l._instance, 16), H(null, l._container), delete l._container.__vue_app__);
					},
					provide: (e, t) => (a.provides[e] = t, l),
					runWithContext(e) {
						let t = r8;
						r8 = l;
						try {
							return e();
						} finally {
							r8 = t;
						}
					}
				};
				return l;
			})
		};
	}(e);
}
function ah({ type: e, props: t }, r) {
	return "svg" === r && "foreignObject" === e || "mathml" === r && "annotation-xml" === e && t && t.encoding && t.encoding.includes("html") ? void 0 : r;
}
function am({ effect: e, job: t }, r) {
	r ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function av(e, t, r = !1) {
	let a = e.children, s = t.children;
	if (e6(a) && e6(s)) for (let e = 0; e < a.length; e++) {
		let t = a[e], i = s[e];
		1 & i.shapeFlag && !i.dynamicChildren && ((i.patchFlag <= 0 || 32 === i.patchFlag) && ((i = s[e] = aW(s[e])).el = t.el), r || -2 === i.patchFlag || av(t, i)), i.type === aT && -1 !== i.patchFlag && (i.el = t.el), i.type !== aI || i.el || (i.el = t.el);
	}
}
function ay(e) {
	if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
var ag = Symbol.for("v-scx");
function ak(e, t, r) {
	return aN(e, t, r);
}
function aN(e, t, r = eY) {
	let a, { immediate: s, deep: i, flush: o, once: l } = r, c = e1({}, r), u = t && s || !t && "post" !== o;
	if (a1) {
		if ("sync" === o) {
			let e = r5(ag);
			a = e.__watcherHandles || (e.__watcherHandles = []);
		} else if (!u) {
			let e = () => {};
			return e.stop = eX, e.resume = eX, e.pause = eX, e;
		}
	}
	let p = aJ;
	c.call = (e, t, r) => nU(e, p, t, r);
	let d = !1;
	"post" === o ? c.scheduler = (e) => {
		ad(e, p && p.suspense);
	} : "sync" !== o && (d = !0, c.scheduler = (e, t) => {
		t ? e() : nZ(e);
	}), c.augmentJob = (e) => {
		t && (e.flags |= 4), d && (e.flags |= 2, p && (e.id = p.uid, e.i = p));
	};
	let f = function(e, t, r = eY) {
		let a, s, i, o, { immediate: l, deep: c, once: u, scheduler: p, augmentJob: d, call: f } = r, h = (e) => c ? e : n_(e) || !1 === c || 0 === c ? nF(e, 1) : nF(e), m = !1, y = !1;
		if (nA(e) ? (s = () => e.value, m = n_(e)) : nN(e) ? (s = () => h(e), m = !0) : e6(e) ? (y = !0, m = e.some((e) => nN(e) || n_(e)), s = () => e.map((e) => nA(e) ? e.value : nN(e) ? h(e) : e7(e) ? f ? f(e, 2) : e() : void 0)) : s = e7(e) ? t ? f ? () => f(e, 2) : e : () => {
			if (i) {
				tL();
				try {
					i();
				} finally {
					tF();
				}
			}
			let t = nL;
			nL = a;
			try {
				return f ? f(e, 3, [o]) : e(o);
			} finally {
				nL = t;
			}
		} : eX, t && c) {
			let e = s, t = !0 === c ? Infinity : c;
			s = () => nF(e(), t);
		}
		let g = C, k = () => {
			a.stop(), g && g.active && e2(g.effects, a);
		};
		if (u && t) {
			let e = t;
			t = (...t) => {
				e(...t), k();
			};
		}
		let N = y ? Array(e.length).fill(nD) : nD, b = (e) => {
			if (1 & a.flags && (a.dirty || e)) if (t) {
				let e = a.run();
				if (c || m || (y ? e.some((e, t) => tf(e, N[t])) : tf(e, N))) {
					i && i();
					let r = nL;
					nL = a;
					try {
						let r = [
							e,
							N === nD ? void 0 : y && N[0] === nD ? [] : N,
							o
						];
						N = e, f ? f(t, 3, r) : t(...r);
					} finally {
						nL = r;
					}
				}
			} else a.run();
		};
		return d && d(b), (a = new tj(s)).scheduler = p ? () => p(b, !1) : b, o = (e) => (function(e, t = !1, r = nL) {
			if (r) {
				let t = nV.get(r);
				t || nV.set(r, t = []), t.push(e);
			}
		})(e, !1, a), i = a.onStop = () => {
			let e = nV.get(a);
			if (e) {
				if (f) f(e, 4);
				else for (let t of e) t();
				nV.delete(a);
			}
		}, t ? l ? b(!0) : N = a.run() : p ? p(b.bind(null, !0), !0) : a.run(), k.pause = a.pause.bind(a), k.resume = a.resume.bind(a), k.stop = k, k;
	}(e, t, c);
	return a1 && (a ? a.push(f) : u && f()), f;
}
function ab(e, t, r) {
	let a, s = this.proxy, i = e5(e) ? e.includes(".") ? a_(s, e) : () => s[e] : e.bind(s, s);
	e7(t) ? a = t : (a = t.handler, r = t);
	let o = aZ(this), l = aN(i, a.bind(s), r);
	return o(), l;
}
function a_(e, t) {
	let r = t.split(".");
	return () => {
		let t = e;
		for (let e = 0; e < r.length && t; e++) t = t[r[e]];
		return t;
	};
}
function aw(e, t, ...r) {
	let a, s;
	if (e.isUnmounted) return;
	let i = e.vnode.props || eY, o = r, l = t.startsWith("update:"), c = l && ("modelValue" === (s = t.slice(7)) || "model-value" === s ? i.modelModifiers : i[`${s}Modifiers`] || i[`${tl(s)}Modifiers`] || i[`${tu(s)}Modifiers`]);
	c && (c.trim && (o = r.map((e) => e5(e) ? e.trim() : e)), c.number && (o = r.map(tv)));
	let u = i[a = td(t)] || i[a = td(tl(t))];
	!u && l && (u = i[a = td(tu(t))]), u && nU(u, e, 6, o);
	let p = i[a + "Once"];
	if (p) {
		if (e.emitted) {
			if (e.emitted[a]) return;
		} else e.emitted = {};
		e.emitted[a] = !0, nU(p, e, 6, o);
	}
}
var ax = /* @__PURE__ */ new WeakMap();
function aO(e, t) {
	return !!e && !!eQ(t) && (e3(e, (t = t.slice(2).replace(/Once$/, ""))[0].toLowerCase() + t.slice(1)) || e3(e, tu(t)) || e3(e, t));
}
function aS(e) {
	let t, r, { type: a, vnode: s, proxy: i, withProxy: o, propsOptions: [l], slots: c, attrs: u, emit: p, render: d, renderCache: f, props: h, data: m, setupState: y, ctx: g, inheritAttrs: k } = e, N = n6(e);
	try {
		if (4 & s.shapeFlag) {
			let e = o || i;
			t = aG(d.call(e, e, f, h, y, m, g)), r = u;
		} else t = aG(a.length > 1 ? a(h, {
			attrs: u,
			slots: c,
			emit: p
		}) : a(h, null)), r = a.props ? u : aA(u);
	} catch (r) {
		aM.length = 0, nz(r, e, 1), t = aU(aI);
	}
	let b = t;
	if (r && !1 !== k) {
		let e = Object.keys(r), { shapeFlag: t } = b;
		e.length && 7 & t && (l && e.some(e0) && (r = aj(r, l)), b = az(b, r, !1, !0));
	}
	return s.dirs && ((b = az(b, null, !1, !0)).dirs = b.dirs ? b.dirs.concat(s.dirs) : s.dirs), s.transition && rk(b, s.transition), t = b, n6(N), t;
}
var aA = (e) => {
	let t;
	for (let r in e) ("class" === r || "style" === r || eQ(r)) && ((t || (t = {}))[r] = e[r]);
	return t;
}, aj = (e, t) => {
	let r = {};
	for (let a in e) e0(a) && a.slice(9) in t || (r[a] = e[a]);
	return r;
};
function aE(e, t, r) {
	let a = Object.keys(t);
	if (a.length !== Object.keys(e).length) return !0;
	for (let s = 0; s < a.length; s++) {
		let i = a[s];
		if (t[i] !== e[i] && !aO(r, i)) return !0;
	}
	return !1;
}
var aP = (e) => e.__isSuspense, aC = Symbol.for("v-fgt"), aT = Symbol.for("v-txt"), aI = Symbol.for("v-cmt"), aR = Symbol.for("v-stc"), aM = [], a$ = 1;
function aD(e, t = !1) {
	a$ += e;
}
function aV(e) {
	return !!e && !0 === e.__v_isVNode;
}
function aL(e, t) {
	return e.type === t.type && e.key === t.key;
}
var aF = ({ key: e }) => null != e ? e : null, aB = ({ ref: e, ref_key: t, ref_for: r }) => ("number" == typeof e && (e = "" + e), null != e ? e5(e) || nA(e) || e7(e) ? {
	i: n4,
	r: e,
	k: t,
	f: !!r
} : e : null), aU = function(e, t = null, r = null, a = 0, s = null, i = !1) {
	var o, l;
	if (e && e !== rU || (e = aI), aV(e)) {
		let a = az(e, t, !0);
		return r && aK(a, r), a.patchFlag = -2, a;
	}
	if (e7(o = e) && "__vccOpts" in o && (e = e.__vccOpts), t) {
		let { class: e, style: r } = t = (l = t) ? nw(l) || at(l) ? e1({}, l) : l : null;
		e && !e5(e) && (t.class = tw(e)), te(r) && (nw(r) && !e6(r) && (r = e1({}, r)), t.style = tk(r));
	}
	let c = e5(e) ? 1 : aP(e) ? 128 : e.__isTeleport ? 64 : te(e) ? 4 : 2 * !!e7(e);
	return function(e, t = null, r = null, a = 0, s = null, i = +(e !== aC), o = !1, l = !1) {
		let c = {
			__v_isVNode: !0,
			__v_skip: !0,
			type: e,
			props: t,
			key: t && aF(t),
			ref: t && aB(t),
			scopeId: n3,
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
			ctx: n4
		};
		return l ? (aK(c, r), 128 & i && e.normalize(c)) : r && (c.shapeFlag |= e5(r) ? 8 : 16), c;
	}(e, t, r, a, s, c, i, !0);
};
function az(e, t, r = !1, a = !1) {
	let { props: s, ref: i, patchFlag: o, children: l, transition: c } = e, u = t ? function(...e) {
		let t = {};
		for (let r = 0; r < e.length; r++) {
			let a = e[r];
			for (let e in a) if ("class" === e) t.class !== a.class && (t.class = tw([t.class, a.class]));
			else if ("style" === e) t.style = tk([t.style, a.style]);
			else if (eQ(e)) {
				let r = t[e], s = a[e];
				s && r !== s && !(e6(r) && r.includes(s)) && (t[e] = r ? [].concat(r, s) : s);
			} else "" !== e && (t[e] = a[e]);
		}
		return t;
	}(s || {}, t) : s, p = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: u,
		key: u && aF(u),
		ref: t && t.ref ? r && i ? e6(i) ? i.concat(aB(t)) : [i, aB(t)] : aB(t) : i,
		scopeId: e.scopeId,
		slotScopeIds: e.slotScopeIds,
		children: l,
		target: e.target,
		targetStart: e.targetStart,
		targetAnchor: e.targetAnchor,
		staticCount: e.staticCount,
		shapeFlag: e.shapeFlag,
		patchFlag: t && e.type !== aC ? -1 === o ? 16 : 16 | o : o,
		dynamicProps: e.dynamicProps,
		dynamicChildren: e.dynamicChildren,
		appContext: e.appContext,
		dirs: e.dirs,
		transition: c,
		component: e.component,
		suspense: e.suspense,
		ssContent: e.ssContent && az(e.ssContent),
		ssFallback: e.ssFallback && az(e.ssFallback),
		placeholder: e.placeholder,
		el: e.el,
		anchor: e.anchor,
		ctx: e.ctx,
		ce: e.ce
	};
	return c && a && rk(p, c.clone(p)), p;
}
function aG(e) {
	return null == e || "boolean" == typeof e ? aU(aI) : e6(e) ? aU(aC, null, e.slice()) : aV(e) ? aW(e) : aU(aT, null, String(e));
}
function aW(e) {
	return null === e.el && -1 !== e.patchFlag || e.memo ? e : az(e);
}
function aK(e, t) {
	let r = 0, { shapeFlag: a } = e;
	if (null == t) t = null;
	else if (e6(t)) r = 16;
	else if ("object" == typeof t) if (65 & a) {
		let r = t.default;
		r && (r._c && (r._d = !1), aK(e, r()), r._c && (r._d = !0));
		return;
	} else {
		r = 32;
		let a = t._;
		a || at(t) ? 3 === a && n4 && (1 === n4.slots._ ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024)) : t._ctx = n4;
	}
	else e7(t) ? (t = {
		default: t,
		_ctx: n4
	}, r = 32) : (t = String(t), 64 & a ? (r = 16, t = [function(e = " ", t = 0) {
		return aU(aT, null, e, t);
	}(t)]) : r = 8);
	e.children = t, e.shapeFlag |= r;
}
function aq(e, t, r, a = null) {
	nU(e, t, 7, [r, a]);
}
var aH = r3(), aY = 0, aJ = null, aX = () => aJ || n4;
{
	let e = tg(), t = (t, r) => {
		let a;
		return (a = e[t]) || (a = e[t] = []), a.push(r), (e) => {
			a.length > 1 ? a.forEach((t) => t(e)) : a[0](e);
		};
	};
	M = t("__VUE_INSTANCE_SETTERS__", (e) => aJ = e), $ = t("__VUE_SSR_SETTERS__", (e) => a1 = e);
}
var aZ = (e) => {
	let t = aJ;
	return M(e), e.scope.on(), () => {
		e.scope.off(), M(t);
	};
}, aQ = () => {
	aJ && aJ.scope.off(), M(null);
};
function a0(e) {
	return 4 & e.vnode.shapeFlag;
}
var a1 = !1;
function a2(e, t, r) {
	e7(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : te(t) && (e.setupState = nR(t)), a4(e, r);
}
function a4(e, t, r) {
	let a = e.type;
	if (!e.render) {
		if (!t && D && !a.render) {
			let t = a.template || rJ(e).template;
			if (t) {
				let { isCustomElement: r, compilerOptions: s } = e.appContext.config, { delimiters: i, compilerOptions: o } = a;
				a.render = D(t, e1(e1({
					isCustomElement: r,
					delimiters: i
				}, s), o));
			}
		}
		e.render = a.render || eX, V && V(e);
	}
	{
		let t = aZ(e);
		tL();
		try {
			(function(e) {
				let t = rJ(e), r = e.proxy, a = e.ctx;
				rH = !1, t.beforeCreate && rY(t.beforeCreate, e, "bc");
				let { data: s, computed: i, methods: o, watch: l, provide: c, inject: u, created: p, beforeMount: d, mounted: f, beforeUpdate: h, updated: m, activated: y, deactivated: g, beforeDestroy: k, beforeUnmount: N, destroyed: b, unmounted: _, render: w, renderTracked: x, renderTriggered: O, errorCaptured: S, serverPrefetch: A, expose: j, inheritAttrs: E, components: P, directives: C, filters: T } = t;
				if (u && function(e, t, r = eX) {
					for (let r in e6(e) && (e = r0(e)), e) {
						let a, s = e[r];
						nA(a = te(s) ? "default" in s ? r5(s.from || r, s.default, !0) : r5(s.from || r) : r5(s)) ? Object.defineProperty(t, r, {
							enumerable: !0,
							configurable: !0,
							get: () => a.value,
							set: (e) => a.value = e
						}) : t[r] = a;
					}
				}(u, a, null), o) for (let e in o) {
					let t = o[e];
					e7(t) && (a[e] = t.bind(r));
				}
				if (s) {
					let t = s.call(r, r);
					te(t) && (e.data = nv(t));
				}
				if (rH = !0, i) for (let e in i) {
					let t = i[e], s = a8({
						get: e7(t) ? t.bind(r, r) : e7(t.get) ? t.get.bind(r, r) : eX,
						set: !e7(t) && e7(t.set) ? t.set.bind(r) : eX
					});
					Object.defineProperty(a, e, {
						enumerable: !0,
						configurable: !0,
						get: () => s.value,
						set: (e) => s.value = e
					});
				}
				if (l) for (let e in l) (function e(t, r, a, s) {
					let i = s.includes(".") ? a_(a, s) : () => a[s];
					if (e5(t)) {
						let e = r[t];
						e7(e) && ak(i, e);
					} else if (e7(t)) ak(i, t.bind(a));
					else if (te(t)) if (e6(t)) t.forEach((t) => e(t, r, a, s));
					else {
						let e = e7(t.handler) ? t.handler.bind(a) : r[t.handler];
						e7(e) && ak(i, e, t);
					}
				})(l[e], a, r, e);
				if (c) {
					let e = e7(c) ? c.call(r) : c;
					Reflect.ownKeys(e).forEach((t) => {
						r7(t, e[t]);
					});
				}
				function I(e, t) {
					e6(t) ? t.forEach((t) => e(t.bind(r))) : t && e(t.bind(r));
				}
				if (p && rY(p, e, "c"), I(rT, d), I(rI, f), I(rR, h), I(rM, m), I(rA, y), I(rj, g), I(rB, S), I(rF, x), I(rL, O), I(r$, N), I(rD, _), I(rV, A), e6(j)) if (j.length) {
					let t = e.exposed || (e.exposed = {});
					j.forEach((e) => {
						Object.defineProperty(t, e, {
							get: () => r[e],
							set: (t) => r[e] = t,
							enumerable: !0
						});
					});
				} else e.exposed || (e.exposed = {});
				w && e.render === eX && (e.render = w), null != E && (e.inheritAttrs = E), P && (e.components = P), C && (e.directives = C), A && rb(e);
			})(e);
		} finally {
			tF(), t();
		}
	}
}
var a3 = { get: (e, t) => (tY(e, "get", ""), e[t]) };
function a6(e) {
	var t;
	return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(nR((!e3(t = e.exposed, "__v_skip") && Object.isExtensible(t) && tm(t, "__v_skip", !0), t)), {
		get: (t, r) => r in t ? t[r] : r in rG ? rG[r](e) : void 0,
		has: (e, t) => t in e || t in rG
	})) : e.proxy;
}
var a8 = (e, t) => (function(e, t, r = !1) {
	let a, s;
	return e7(e) ? a = e : (a = e.get, s = e.set), new n$(a, s, r);
})(e, 0, a1);
function a7(e, t, r) {
	try {
		aD(-1);
		let a = arguments.length;
		if (2 !== a) return a > 3 ? r = Array.prototype.slice.call(arguments, 2) : 3 === a && aV(r) && (r = [r]), aU(e, t, r);
		if (!te(t) || e6(t)) return aU(e, null, t);
		if (aV(t)) return aU(e, null, [t]);
		return aU(e, t);
	} finally {
		aD(1);
	}
}
var a5 = "3.5.22", a9 = Symbol.for("immer-nothing"), se = Symbol.for("immer-draftable"), st = Symbol.for("immer-state");
function sn(e) {
	throw Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`);
}
var sr = Object.getPrototypeOf;
function sa(e) {
	return !!e && !!e[st];
}
function ss(e) {
	return !!e && (sl(e) || Array.isArray(e) || !!e[se] || !!e.constructor?.[se] || sf(e) || sh(e));
}
var si = Object.prototype.constructor.toString(), so = /* @__PURE__ */ new WeakMap();
function sl(e) {
	if (!e || "object" != typeof e) return !1;
	let t = Object.getPrototypeOf(e);
	if (null === t || t === Object.prototype) return !0;
	let r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
	if (r === Object) return !0;
	if ("function" != typeof r) return !1;
	let a = so.get(r);
	return void 0 === a && (a = Function.toString.call(r), so.set(r, a)), a === si;
}
function sc(e, t, r = !0) {
	0 === su(e) ? (r ? Reflect.ownKeys(e) : Object.keys(e)).forEach((r) => {
		t(r, e[r], e);
	}) : e.forEach((r, a) => t(a, r, e));
}
function su(e) {
	let t = e[st];
	return t ? t.type_ : Array.isArray(e) ? 1 : sf(e) ? 2 : 3 * !!sh(e);
}
function sp(e, t) {
	return 2 === su(e) ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function sd(e, t, r) {
	let a = su(e);
	2 === a ? e.set(t, r) : 3 === a ? e.add(r) : e[t] = r;
}
function sf(e) {
	return e instanceof Map;
}
function sh(e) {
	return e instanceof Set;
}
function sm(e) {
	return e.copy_ || e.base_;
}
function sv(e, t) {
	if (sf(e)) return new Map(e);
	if (sh(e)) return new Set(e);
	if (Array.isArray(e)) return Array.prototype.slice.call(e);
	let r = sl(e);
	if (!0 !== t && ("class_only" !== t || r)) {
		let t = sr(e);
		return null !== t && r ? { ...e } : Object.assign(Object.create(t), e);
	}
	{
		let t = Object.getOwnPropertyDescriptors(e);
		delete t[st];
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
		return Object.create(sr(e), t);
	}
}
function sy(e, t = !1) {
	return sk(e) || sa(e) || !ss(e) || (su(e) > 1 && Object.defineProperties(e, {
		set: sg,
		add: sg,
		clear: sg,
		delete: sg
	}), Object.freeze(e), t && Object.values(e).forEach((e) => sy(e, !0))), e;
}
var sg = { value: function() {
	sn(2);
} };
function sk(e) {
	return null === e || "object" != typeof e || Object.isFrozen(e);
}
var sN = {};
function sb(e) {
	let t = sN[e];
	return t || sn(0, e), t;
}
function s_(e, t) {
	t && (sb("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function sw(e) {
	sx(e), e.drafts_.forEach(sS), e.drafts_ = null;
}
function sx(e) {
	e === L && (L = e.parent_);
}
function sO(e) {
	return L = {
		drafts_: [],
		parent_: L,
		immer_: e,
		canAutoFreeze_: !0,
		unfinalizedDrafts_: 0
	};
}
function sS(e) {
	let t = e[st];
	0 === t.type_ || 1 === t.type_ ? t.revoke_() : t.revoked_ = !0;
}
function sA(e, t) {
	t.unfinalizedDrafts_ = t.drafts_.length;
	let r = t.drafts_[0];
	return void 0 !== e && e !== r ? (r[st].modified_ && (sw(t), sn(4)), ss(e) && (e = sj(t, e), t.parent_ || sP(t, e)), t.patches_ && sb("Patches").generateReplacementPatches_(r[st].base_, e, t.patches_, t.inversePatches_)) : e = sj(t, r, []), sw(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== a9 ? e : void 0;
}
function sj(e, t, r) {
	if (sk(t)) return t;
	let a = e.immer_.shouldUseStrictIteration(), s = t[st];
	if (!s) return sc(t, (a, i) => sE(e, s, t, a, i, r), a), t;
	if (s.scope_ !== e) return t;
	if (!s.modified_) return sP(e, s.base_, !0), s.base_;
	if (!s.finalized_) {
		s.finalized_ = !0, s.scope_.unfinalizedDrafts_--;
		let t = s.copy_, i = t, o = !1;
		3 === s.type_ && (i = new Set(t), t.clear(), o = !0), sc(i, (a, i) => sE(e, s, t, a, i, r, o), a), sP(e, t, !1), r && e.patches_ && sb("Patches").generatePatches_(s, r, e.patches_, e.inversePatches_);
	}
	return s.copy_;
}
function sE(e, t, r, a, s, i, o) {
	if (null == s || "object" != typeof s && !o) return;
	let l = sk(s);
	if (!l || o) {
		if (sa(s)) {
			let o = sj(e, s, i && t && 3 !== t.type_ && !sp(t.assigned_, a) ? i.concat(a) : void 0);
			if (sd(r, a, o), !sa(o)) return;
			e.canAutoFreeze_ = !1;
		} else o && r.add(s);
		if (ss(s) && !l) {
			if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1 || t && t.base_ && t.base_[a] === s && l) return;
			sj(e, s), (!t || !t.scope_.parent_) && "symbol" != typeof a && (sf(r) ? r.has(a) : Object.prototype.propertyIsEnumerable.call(r, a)) && sP(e, s);
		}
	}
}
function sP(e, t, r = !1) {
	!e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && sy(t, r);
}
var sC = {
	get(e, t) {
		if (t === st) return e;
		let r = sm(e);
		if (!sp(r, t)) {
			var a = e;
			let o = sR(r, t);
			return o ? "value" in o ? o.value : o.get?.call(a.draft_) : void 0;
		}
		let o = r[t];
		return e.finalized_ || !ss(o) ? o : o === sI(e.base_, t) ? (s$(e), e.copy_[t] = sD(o, e)) : o;
	},
	has: (e, t) => t in sm(e),
	ownKeys: (e) => Reflect.ownKeys(sm(e)),
	set(e, t, r) {
		let a = sR(sm(e), t);
		if (a?.set) return a.set.call(e.draft_, r), !0;
		if (!e.modified_) {
			let a = sI(sm(e), t), s = a?.[st];
			if (s && s.base_ === r) return e.copy_[t] = r, e.assigned_[t] = !1, !0;
			if ((r === a ? 0 !== r || 1 / r == 1 / a : r != r && a != a) && (void 0 !== r || sp(e.base_, t))) return !0;
			s$(e), sM(e);
		}
		return !!(e.copy_[t] === r && (void 0 !== r || t in e.copy_) || Number.isNaN(r) && Number.isNaN(e.copy_[t])) || (e.copy_[t] = r, e.assigned_[t] = !0, !0);
	},
	deleteProperty: (e, t) => (void 0 !== sI(e.base_, t) || t in e.base_ ? (e.assigned_[t] = !1, s$(e), sM(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0),
	getOwnPropertyDescriptor(e, t) {
		let r = sm(e), a = Reflect.getOwnPropertyDescriptor(r, t);
		return a ? {
			writable: !0,
			configurable: 1 !== e.type_ || "length" !== t,
			enumerable: a.enumerable,
			value: r[t]
		} : a;
	},
	defineProperty() {
		sn(11);
	},
	getPrototypeOf: (e) => sr(e.base_),
	setPrototypeOf() {
		sn(12);
	}
}, sT = {};
function sI(e, t) {
	let r = e[st];
	return (r ? sm(r) : e)[t];
}
function sR(e, t) {
	if (!(t in e)) return;
	let r = sr(e);
	for (; r;) {
		let e = Object.getOwnPropertyDescriptor(r, t);
		if (e) return e;
		r = sr(r);
	}
}
function sM(e) {
	!e.modified_ && (e.modified_ = !0, e.parent_ && sM(e.parent_));
}
function s$(e) {
	e.copy_ || (e.copy_ = sv(e.base_, e.scope_.immer_.useStrictShallowCopy_));
}
function sD(e, t) {
	let r = sf(e) ? sb("MapSet").proxyMap_(e, t) : sh(e) ? sb("MapSet").proxySet_(e, t) : function(e, t) {
		let r = Array.isArray(e), a = {
			type_: +!!r,
			scope_: t ? t.scope_ : L,
			modified_: !1,
			finalized_: !1,
			assigned_: {},
			parent_: t,
			base_: e,
			draft_: null,
			copy_: null,
			revoke_: null,
			isManual_: !1
		}, s = a, i = sC;
		r && (s = [a], i = sT);
		let { revoke: o, proxy: l } = Proxy.revocable(s, i);
		return a.draft_ = l, a.revoke_ = o, l;
	}(e, t);
	return (t ? t.scope_ : L).drafts_.push(r), r;
}
sc(sC, (e, t) => {
	sT[e] = function() {
		return arguments[0] = arguments[0][0], t.apply(this, arguments);
	};
}), sT.deleteProperty = function(e, t) {
	return sT.set.call(this, e, t, void 0);
}, sT.set = function(e, t, r) {
	return sC.set.call(this, e[0], t, r, e[0]);
};
var sV = new class {
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
			if ("function" != typeof t && sn(6), void 0 !== r && "function" != typeof r && sn(7), ss(e)) {
				let s = sO(this), i = sD(e, void 0), o = !0;
				try {
					a = t(i), o = !1;
				} finally {
					o ? sw(s) : sx(s);
				}
				return s_(s, r), sA(a, s);
			}
			if (e && "object" == typeof e) sn(1, e);
			else {
				if (void 0 === (a = t(e)) && (a = e), a === a9 && (a = void 0), this.autoFreeze_ && sy(a, !0), r) {
					let t = [], s = [];
					sb("Patches").generateReplacementPatches_(e, a, t, s), r(t, s);
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
		ss(e) || sn(8), sa(e) && (sa(t = e) || sn(10, t), e = function e(t) {
			let r;
			if (!ss(t) || sk(t)) return t;
			let a = t[st], s = !0;
			if (a) {
				if (!a.modified_) return a.base_;
				a.finalized_ = !0, r = sv(t, a.scope_.immer_.useStrictShallowCopy_), s = a.scope_.immer_.shouldUseStrictIteration();
			} else r = sv(t, !0);
			return sc(r, (t, a) => {
				sd(r, t, e(a));
			}, s), a && (a.finalized_ = !1), r;
		}(t));
		let r = sO(this), a = sD(e, void 0);
		return a[st].isManual_ = !0, sx(r), a;
	}
	finishDraft(e, t) {
		let r = e && e[st];
		r && r.isManual_ || sn(9);
		let { scope_: a } = r;
		return s_(a, t), sA(void 0, a);
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
		let a = sb("Patches").applyPatches_;
		return sa(e) ? a(e, t) : this.produce(e, (e) => a(e, t));
	}
}().produce, sL = e(t((e) => {
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
							var a = N(r);
							if (!a) return;
							var s = a.value;
							if (s.isProviderFor(e, t)) return b(r), s;
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
					var l = N(i);
					if (!l) return r.length = o, r;
					var c = l.value;
					try {
						r[o] = c;
					} catch (e) {
						try {
							b(i);
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
})(), 1), sF = class {
	static getOwnPropertyNames(e) {
		return (0, sL.getMetadataKeys)(e);
	}
	static get(e, t) {
		return (0, sL.getMetadata)(t, e);
	}
	static define(e, t, r, a) {
		if (e && e.constructor && e.constructor != Object) {
			if (eD(r)) return void (0, sL.defineMetadata)(t, sV((0, sL.getMetadata)(t, e) ?? a ?? {}, r), e);
			(0, sL.defineMetadata)(t, r, e);
		}
	}
};
let sB = (e) => "function" == typeof e && `${e}`.startsWith("class"), sU = {
	path: [],
	branch: []
};
var sz = class extends TypeError {
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
let sG = Symbol("Type");
function* sW(e, t, r, a) {
	let s, i = e;
	for (let e of (("object" != typeof (s = i) || "function" != typeof s[Symbol.iterator]) && (i = [i]), i)) {
		let s = function(e, t, r, a) {
			if (!0 === e) return;
			let s = {};
			s = !1 === e ? {} : ed(e) ? { message: e } : e;
			let { path: i, branch: o, node: l } = t, { type: c } = r, { refinement: u, message: p = eV(a) ? "Required" : `Expected a value of type \`${c}\`${u ? ` with refinement \`${u}\`` : ""}, but received: \`${a}\`` } = s;
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
function sK(e, t, r = {}) {
	let a = sq(e, t, r), s = function(e) {
		let { done: t, value: r } = e.next();
		return t ? void 0 : r;
	}(a);
	return s[0] ? [new sz(s[0], function* () {
		for (let e of a) e[0] && (yield e[0]);
	}), void 0] : [void 0, s[1]];
}
function* sq(e, t, r = {}) {
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
	let p = sH.valid;
	for (let a of sW(t.validator(u, c), c, t, e)) a.explanation = r.message, p = sH.not_valid, yield [a, void 0];
	for (let [e, d, f] of t.entries(u, c)) for (let t of sq(d, f, {
		path: void 0 === e ? a : [...a, e],
		branch: void 0 === e ? s : [...s, d],
		node: void 0 === e ? i : {
			current: f,
			parent: i
		},
		coerce: o,
		mask: l,
		message: r.message
	})) t[0] ? (p = null != t[0].refinement ? sH.not_refined : sH.not_valid, yield [t[0], void 0]) : o && (d = t[1], void 0 === e ? u = d : u instanceof Map ? u.set(e, d) : u instanceof Set ? u.add(d) : el(u) && (u[e] = d));
	if (p !== sH.not_valid) for (let a of sW(t.refiner(u, c), c, t, e)) a.explanation = r.message, p = sH.not_refined, yield [a, void 0];
	p === sH.valid && (yield [void 0, u]);
}
var sH = ((F = sH || {})[F.valid = 0] = "valid", F[F.not_refined = 1] = "not_refined", F[F.not_valid = 2] = "not_valid", F);
let sY = (e) => (...t) => {
	let r = e(...t), a = (e, t) => {
		let a = sF.get(e, t) ?? {};
		sF.define(e, t, {
			...a,
			type: r
		});
	};
	return a.toString = () => `@type:${r.type}`, new Proxy(a, {
		ownKeys: () => [...Object.getOwnPropertyNames(r), ...Object.getOwnPropertySymbols(r)],
		get: (e, t) => r[t]
	});
}, sJ = (e) => (...t) => {
	let r = (r) => e(r, ...t);
	return new Proxy((e, t) => {
		sF.define(e, t, (e) => {
			(e.modifies ??= []).push({ modify: r });
		}, {});
	}, { get(e, t) {
		if ("modify" == t) return r;
	} });
};
var sX = class e {
	static RecordKey = Symbol("RecordKey");
	static meta = Symbol("meta");
	static optional = Symbol("optional");
	static underlying = Symbol("underlying");
	static unwrap = Symbol("unwrap");
	static extractSchema = (e) => new s0().toValue(e);
	static extractMeta = (t) => new s0().toValue(t.meta ?? t[e.meta]);
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
					if (_(t)) {
						let e = t?.[a]?.[o];
						if (!eV(e)) return e;
					}
					return i ? i?.[a]?.[o] : void 0;
				}
				if (_(t)) {
					let e = t?.[o];
					if (!eV(e)) return e;
				}
				return i ? i[o] : void 0;
			}
		});
	}
	static schemaProp(e, t) {
		return sZ(e.schema, t);
	}
	static metaProp(e, t) {
		return sQ(e.schema, t);
	}
}, sZ = (e, t) => {
	if (_(e)) return e[t] ?? (e[sX.unwrap] ? sZ(e[sX.unwrap]().schema, t) : void 0);
}, sQ = (e, t) => {
	if (_(e)) return e[sX.meta]?.[t] ?? (e[sX.unwrap] ? sQ(e[sX.unwrap]().schema, t) : void 0);
}, s0 = class {
	constructor(e = !1) {
		this.deref = e;
	}
	toValue(e) {
		if (e) {
			if (!eV(e.schema)) return this.toValue(e.schema);
			if (this.deref && e[sX.unwrap]) return this.toValue(e[sX.unwrap]());
			if (eN(e)) return this.toArray(e);
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
}, s1 = class e {
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
		return "" == e && t ? sX.RecordKey : e.replace(/~1/g, "/").replace(/~0/g, "~");
	}
	static escape(e) {
		return e == sX.RecordKey ? "" : e.toString().replace(/~/g, "~0").replace(/\//g, "~1");
	}
	static get(t, r) {
		let a = Array.isArray(r) ? r : e.parse(r);
		for (let e = 0; e < a.length; e++) {
			let r = a[e];
			if (e > 0 && r == sX.RecordKey) return a[e - 1];
			if (!("object" == typeof t && r in t)) throw Error("Invalid reference token: " + r);
			t = t[r];
		}
		return t;
	}
}, s2 = class e {
	static define = sY((t = () => !0) => new class extends e {
		validator(e, r) {
			return t(e, r);
		}
	}(null));
	static fromTypeObject = (t, r) => {
		let a = t.type ?? r ?? new e({});
		return t.modifies ? a.use(...t.modifies ?? []) : a;
	};
	[sG] = sG;
	schema;
	constructor(e) {
		if (e) {
			this.schema = sX.create(e);
			return;
		}
		this.schema = e ?? null;
	}
	get meta() {
		return this.schema ? this.schema[sX.meta] : {};
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
	*entries(e, t = sU) {}
	validate(e, t = {}) {
		return sK(e, this, t);
	}
	create(e) {
		let t = sK(e, this, { coerce: !0 });
		if (t[0]) throw t[0];
		return t[1];
	}
	mask(e) {
		let t = sK(e, this, {
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
		return s6.create(this);
	}
	default(e) {
		return s3.create(this, e);
	}
}, s4 = class e extends s2 {
	static of(t, r) {
		return new e({
			...r,
			[sX.underlying]: t
		});
	}
	static refine(t, r, a) {
		return new class extends e {
			*refiner(e, s) {
				for (let i of (yield* this.unwrap.refiner(e, s), sW(r(e, s), s, t, e))) yield {
					...i,
					refinement: Object.keys(a).join(",")
				};
			}
		}({
			...a,
			[sX.underlying]: t
		});
	}
	get unwrap() {
		let e = this.schema[sX.unwrap];
		return e ? e() : this.schema[sX.underlying];
	}
	get type() {
		return this.unwrap.type;
	}
	*entries(e, t = sU) {
		yield* this.unwrap.entries(e, {
			...t,
			node: {
				current: this,
				parent: t.node
			}
		});
	}
	validator(e, t) {
		return sW(this.unwrap.validator(e, t), t, this, e);
	}
	refiner(e, t) {
		return sW(this.unwrap.refiner(e, t), t, this, e);
	}
	coercer(e, t) {
		return this.unwrap.coercer(e, t);
	}
}, s3 = class e extends s4 {
	static create = sY((t, r) => new e({
		default: r,
		[sX.underlying]: t
	}));
	coercer(e, t) {
		return void 0 === e ? this.schema.default : super.unwrap.coercer(e, t);
	}
}, s6 = class e extends s4 {
	static create = sY((t) => new e({
		[sX.underlying]: t,
		[sX.optional]: t
	}));
	refiner(e, t) {
		return void 0 === e || super.unwrap.refiner(e, t);
	}
	validator(e, t) {
		return void 0 === e || super.unwrap.validator(e, t);
	}
}, s8 = class e extends s4 {
	static create = sY((t, r) => new e({
		$ref: t,
		[sX.unwrap]: r
	}));
}, s7 = class e extends s2 {
	static create = sY(() => new e());
	constructor() {
		super({});
	}
	get type() {
		return "any";
	}
	validator() {
		return !0;
	}
}, s5 = class e extends s2 {
	static create = sY(() => new e({ type: "null" }));
	get type() {
		return "null";
	}
	validator(e, t) {
		return null === e;
	}
	coercer(e, t) {
		return e;
	}
}, s9 = class e extends s2 {
	static create = sY(() => new e({ type: "string" }));
	get type() {
		return this.schema.type;
	}
	validator(e, t) {
		return ed(e);
	}
	coercer(e, t) {
		return eV(e) || null === e ? e : String(e);
	}
}, ie = class e extends s2 {
	static create = sY(() => new e({ type: "number" }));
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
}, it = class e extends s2 {
	static create = sY(() => new e({ type: "integer" }));
	get type() {
		return this.schema.type;
	}
	validator(e, t) {
		return eF(e);
	}
	coercer(e, t) {
		try {
			let t = void 0 != e ? parseInt(String(e)) : void 0;
			return eF(t) ? t : void 0;
		} catch (e) {
			return;
		}
	}
}, ir = class e extends s2 {
	static create = sY(() => new e({ type: "boolean" }));
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
}, ia = class e extends s2 {
	static create = sY(() => new e({
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
}, is = class e extends s2 {
	static create = sY(e.createEnum);
	static createEnum(t) {
		return new e({ enum: t });
	}
	static literal = sY((t) => new e({ enum: [t] }));
	static nativeEnum = sY((t) => new e({ enum: Object.values(t) }));
	get type() {
		return "enums";
	}
	validator(e, t) {
		return this.schema.enum.includes(e);
	}
	coercer(e, t) {
		return e;
	}
}, ii = class e extends s2 {
	static create = sY(() => new e(!1));
	get type() {
		return "never";
	}
	validator(e, t) {
		return !1;
	}
	coercer(e, t) {
		return e;
	}
}, io = class e extends s2 {
	static create(t) {
		let r = (e = {}) => {
			let t = [];
			for (let [r, a] of Object.entries(e)) sX.schemaProp(a, sX.optional) || t.push(r);
			return t;
		};
		return sY(() => {
			if (t) {
				if (sB(t)) {
					let a = new t(), s = {};
					for (let [e, t] of Object.entries(a)) s[e] = is.literal(t);
					for (let e of sF.getOwnPropertyNames(a)) {
						let t = sF.get(a, e);
						if (t) {
							let r = s2.fromTypeObject(t, s[e]);
							e in s ? s[e] = r.default(s[e].schema?.enum?.[0]) : s[e] = r;
						}
					}
					return new e({
						type: "object",
						properties: s,
						required: r(s),
						additionalProperties: ii.create()
					});
				}
				return new e({
					type: "object",
					properties: t,
					required: r(t),
					additionalProperties: ii.create()
				});
			}
			return new e({
				type: "object",
				properties: {},
				required: [],
				additionalProperties: ii.create()
			});
		})();
	}
	get type() {
		return this.schema.type;
	}
	*entries(e, t = sU) {
		if (el(e)) {
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
		return el(e);
	}
	coercer(e, t) {
		if (el(e)) {
			let r = { ...e };
			if (t.mask) {
				let e = this.schema.properties;
				if (e) for (let t in r) void 0 === e[t] && delete r[t];
			}
			return r;
		}
		return super.coercer(e, t);
	}
}, il = class e extends s2 {
	static create = sY((t, r) => new e({
		type: "object",
		propertyNames: t,
		additionalProperties: r
	}));
	get type() {
		return "record";
	}
	*entries(e) {
		if (el(e)) for (let [t, r] of Object.entries(e)) yield [
			sX.RecordKey,
			t,
			this.schema.propertyNames
		], yield [
			t,
			r,
			this.schema.additionalProperties
		];
	}
	validator(e) {
		return el(e);
	}
}, ic = class e extends s2 {
	static create = sY((t) => new e({
		type: "array",
		items: t
	}));
	get type() {
		return this.schema.type;
	}
	*entries(e, t = sU) {
		if (Array.isArray(e)) for (let [t, r] of e.entries()) yield [
			t,
			r,
			this.schema.items
		];
	}
	validator(e) {
		return eN(e);
	}
	coercer(e) {
		return eN(e) ? e.slice() : e;
	}
}, iu = class e extends s2 {
	static create = sY((t) => new e({
		type: "array",
		items: t
	}));
	get type() {
		return "tuple";
	}
	*entries(e, t) {
		if (eN(e)) {
			let t = Math.max(this.schema.items.length, e.length);
			for (let r = 0; r < t; r++) yield [
				r,
				e[r],
				this.schema.items[r] ?? ii.create()
			];
		}
	}
	validator(e) {
		return eN(e) && e.length === this.schema.items.length;
	}
	coercer(e) {
		return eN(e) ? e.slice() : e;
	}
}, ip = class e extends s2 {
	static create = sY((...t) => new e({ allOf: t }));
	get type() {
		return "intersection";
	}
	*entries(e, t = sU) {
		for (let r of this.schema.allOf) yield* r.entries(e, t);
	}
	*validator(e, t) {
		for (let r of this.schema.allOf) yield* sW(r.validator(e, t), t, this, e);
	}
	*refiner(e, t) {
		for (let r of this.schema.allOf) yield* sW(r.refiner(e, t), t, this, e);
	}
}, id = class e extends s2 {
	static create = sY((...t) => new e({ oneOf: t }));
	static discriminatorMapping(t, ...r) {
		return sY(() => {
			let a = [];
			if (1 == r.length && r[0].constructor == Object) for (let [e, s] of Object.entries(r[0])) if (sX.schemaProp(s, "$ref")) a.push(s);
			else {
				let r = { [t]: is.literal(e) };
				for (let [e, t, a] of s.entries({}, sU)) r[String(e)] = a;
				a.push(io.create(r));
			}
			else for (let e of r) sB(e) && a.push(io.create(e));
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
				let s = sX.schemaProp(e, "properties")[t];
				if (!s) continue;
				let i = s.schema.enum;
				i && r.push(...i), a.push(s.meta);
			}
			return s4.of(is.create(r), { [sX.meta]: sX.create(a[0], e.node?.current.meta ?? {}) });
		})();
	}
	_discriminatorMappingProps = /* @__PURE__ */ new Map();
	discriminatorMapping(e, t, r) {
		if (this._discriminatorMappingProps.get(t)) return this._discriminatorMappingProps.get(t);
		if ((this.discriminatorPropType(r)?.schema?.enum ?? []).includes(t)) {
			let r = this.schema.oneOf.find((r) => {
				let a = sX.schemaProp(r, "properties")[e];
				if (a) {
					let [e, r] = a.validate(t);
					return !e;
				}
				return !1;
			});
			if (r) {
				if (!this._discriminatorMappingProps.has(t)) {
					let a = {};
					for (let [t, s] of Object.entries(sX.schemaProp(r, "properties"))) t !== e && (a[t] = s);
					this._discriminatorMappingProps.set(t, a);
				}
				return this._discriminatorMappingProps.get(t);
			}
		}
		return {};
	}
	*entries(e, t = sU) {
		if (this.schema.discriminator) {
			let r = this.schema.discriminator.propertyName, a = e?.[r];
			yield* io.create({
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
			let [r, a] = sK(e, t, { coerce: !0 });
			if (!r) return a;
		}
		return e;
	}
	validator(e, t) {
		if (this.schema.discriminator) {
			let r = this.schema.discriminator.propertyName, a = e?.[r];
			return io.create({
				[r]: this.discriminatorPropType(t),
				...this.discriminatorMapping(r, a, t)
			}).validator(e, t);
		}
		let r = [];
		for (let a of this.schema.oneOf) {
			let [ ...s] = sq(e, a, t), [i] = s;
			if (i && !i[0]) return [];
			for (let [e] of s) e && r.push(e);
		}
		return [`Expected the value to satisfy a union of \`${this.schema.oneOf.map((e) => e.type).join(" | ")}\`, but received: ${e}`, ...r];
	}
};
s8.create;
let ih = s7.create;
ii.create, s5.create;
let im = s9.create, iv = sJ((e, t, r) => s4.refine(e, (e) => !!e && e.length >= t || (r ?? `Expected string value length great than or equal ${t}, but received "${e}"`), { minLength: t }));
ie.create;
let iy = it.create, ig = ir.create;
ia.create;
let ik = is.create, iN = is.nativeEnum;
is.literal;
let ib = io.create, i_ = il.create;
iu.create;
let iw = ic.create;
ip.create;
let ix = id.create;
id.discriminatorMapping;
let iO = s2.define;
s4.refine;
let iS = sJ((e) => s6.create(e)), iA = sJ((e, t) => s4.of(e, { [sX.meta]: t })), ij = aC;
var iE = Symbol("component");
let iP = (e) => eT(e) && e[iE] === iE, iC = (e) => {
	let t;
	return !!(t = Object.values(e)[0]) && t[sG] == sG;
};
function iT(...e) {
	let t, r = {}, a = {};
	for (let s of e) {
		if (eD(s)) {
			t = s;
			continue;
		}
		eV(t) ? r = s : a = s;
	}
	let [s, i] = ey(Object.keys(r), (e) => /^on[A-Z]/.test(e)), o = {
		emits: [...s.map((e) => eW(e.slice(2))), ...a.emits ?? []],
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
		[iE]: iE
	};
}
let iI = (e, t) => new Proxy(e, { get: (e, r) => t[r] ?? e[r] });
var iR = "undefined" != typeof document;
function iM(e) {
	return "object" == typeof e || "displayName" in e || "props" in e || "__vccOpts" in e;
}
var i$ = Object.assign;
function iD(e, t) {
	let r = {};
	for (let a in t) {
		let s = t[a];
		r[a] = iL(s) ? s.map(e) : e(s);
	}
	return r;
}
var iV = () => {}, iL = Array.isArray;
function iF(e, t) {
	let r = {};
	for (let a in e) r[a] = a in t ? t[a] : e[a];
	return r;
}
var iB = /#/g, iU = /&/g, iz = /\//g, iG = /=/g, iW = /\?/g, iK = /\+/g, iq = /%5B/g, iH = /%5D/g, iY = /%5E/g, iJ = /%60/g, iX = /%7B/g, iZ = /%7C/g, iQ = /%7D/g, i0 = /%20/g;
function i1(e) {
	return null == e ? "" : encodeURI("" + e).replace(iZ, "|").replace(iq, "[").replace(iH, "]");
}
function i2(e) {
	return i1(e).replace(iK, "%2B").replace(i0, "+").replace(iB, "%23").replace(iU, "%26").replace(iJ, "`").replace(iX, "{").replace(iQ, "}").replace(iY, "^");
}
function i4(e) {
	return i1(e).replace(iB, "%23").replace(iW, "%3F").replace(iz, "%2F");
}
function i3(e) {
	if (null == e) return null;
	try {
		return decodeURIComponent("" + e);
	} catch (e) {}
	return "" + e;
}
var i6 = /\/$/;
function i8(e, t, r = "/") {
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
		hash: i3(o)
	};
}
function i7(e, t) {
	return t && e.toLowerCase().startsWith(t.toLowerCase()) ? e.slice(t.length) || "/" : e;
}
function i5(e, t) {
	return (e.aliasOf || e) === (t.aliasOf || t);
}
function i9(e, t) {
	if (Object.keys(e).length !== Object.keys(t).length) return !1;
	for (let s in e) {
		var r, a;
		if (r = e[s], a = t[s], iL(r) ? !oe(r, a) : iL(a) ? !oe(a, r) : r !== a) return !1;
	}
	return !0;
}
function oe(e, t) {
	return iL(t) ? e.length === t.length && e.every((e, r) => e === t[r]) : 1 === e.length && e[0] === t;
}
var ot = {
	path: "/",
	name: void 0,
	params: {},
	query: {},
	hash: "",
	fullPath: "/",
	matched: [],
	meta: {},
	redirectedFrom: void 0
}, on = ((B = {}).pop = "pop", B.push = "push", B), or = ((U = {}).back = "back", U.forward = "forward", U.unknown = "", U), oa = /^[^#]+#/;
function os(e, t) {
	return e.replace(oa, "#") + t;
}
var oi = () => ({
	left: window.scrollX,
	top: window.scrollY
});
function oo(e, t) {
	return (history.state ? history.state.position - t : -1) + e;
}
var ol = /* @__PURE__ */ new Map();
function oc(e) {
	return "string" == typeof e || "symbol" == typeof e;
}
var ou = ((z = {})[z.MATCHER_NOT_FOUND = 1] = "MATCHER_NOT_FOUND", z[z.NAVIGATION_GUARD_REDIRECT = 2] = "NAVIGATION_GUARD_REDIRECT", z[z.NAVIGATION_ABORTED = 4] = "NAVIGATION_ABORTED", z[z.NAVIGATION_CANCELLED = 8] = "NAVIGATION_CANCELLED", z[z.NAVIGATION_DUPLICATED = 16] = "NAVIGATION_DUPLICATED", z), op = Symbol("");
function od(e, t) {
	return i$(Error(), {
		type: e,
		[op]: !0
	}, t);
}
function of(e, t) {
	return e instanceof Error && op in e && (null == t || !!(e.type & t));
}
function oh(e) {
	let t = {};
	if ("" === e || "?" === e) return t;
	let r = ("?" === e[0] ? e.slice(1) : e).split("&");
	for (let e = 0; e < r.length; ++e) {
		let a = r[e].replace(iK, " "), s = a.indexOf("="), i = i3(s < 0 ? a : a.slice(0, s)), o = s < 0 ? null : i3(a.slice(s + 1));
		if (i in t) {
			let e = t[i];
			iL(e) || (e = t[i] = [e]), e.push(o);
		} else t[i] = o;
	}
	return t;
}
function om(e) {
	let t = "";
	for (let r in e) {
		let a = e[r];
		if (r = i2(r).replace(iG, "%3D"), null == a) {
			void 0 !== a && (t += (t.length ? "&" : "") + r);
			continue;
		}
		(iL(a) ? a.map((e) => e && i2(e)) : [a && i2(a)]).forEach((e) => {
			void 0 !== e && (t += (t.length ? "&" : "") + r, null != e && (t += "=" + e));
		});
	}
	return t;
}
ou.MATCHER_NOT_FOUND, ou.NAVIGATION_GUARD_REDIRECT, ou.NAVIGATION_ABORTED, ou.NAVIGATION_CANCELLED, ou.NAVIGATION_DUPLICATED;
var ov = Symbol(""), oy = Symbol(""), og = Symbol(""), ok = Symbol(""), oN = Symbol("");
function ob() {
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
function o_(e, t, r, a, s, i = (e) => e()) {
	let o = a && (a.enterCallbacks[s] = a.enterCallbacks[s] || []);
	return () => new Promise((l, c) => {
		let u = (e) => {
			if (!1 === e) c(od(ou.NAVIGATION_ABORTED, {
				from: r,
				to: t
			}));
			else if (e instanceof Error) c(e);
			else "string" == typeof e || e && "object" == typeof e ? c(od(ou.NAVIGATION_GUARD_REDIRECT, {
				from: t,
				to: e
			})) : (o && a.enterCallbacks[s] === o && "function" == typeof e && o.push(e), l());
		}, p = Promise.resolve(i(() => e.call(a && a.instances[s], t, r, u)));
		e.length < 3 && (p = p.then(u)), p.catch((e) => c(e));
	});
}
function ow(e, t, r, a, s = (e) => e()) {
	let i = [];
	for (let o of e) for (let e in o.components) {
		let l = o.components[e];
		if ("beforeRouteEnter" === t || o.instances[e]) if (iM(l)) {
			let c = (l.__vccOpts || l)[t];
			c && i.push(o_(c, r, a, o, e, s));
		} else {
			let c = l();
			i.push(() => c.then((i) => {
				if (!i) throw Error(`Couldn't resolve component "${e}" at "${o.path}"`);
				let l = i.__esModule || "Module" === i[Symbol.toStringTag] || i.default && iM(i.default) ? i.default : i;
				o.mods[e] = i, o.components[e] = l;
				let c = (l.__vccOpts || l)[t];
				return c && o_(c, r, a, o, e, s)();
			}));
		}
	}
	return i;
}
function ox(e, t) {
	let { pathname: r, search: a, hash: s } = t, i = e.indexOf("#");
	if (i > -1) {
		let t = s.includes(e.slice(i)) ? e.slice(i).length : 1, r = s.slice(t);
		return "/" !== r[0] && (r = "/" + r), i7(r, "");
	}
	return i7(r, e) + a + s;
}
function oO(e, t, r, a = !1, s = !1) {
	return {
		back: e,
		current: t,
		forward: r,
		replaced: a,
		position: window.history.length,
		scroll: s ? oi() : null
	};
}
function oS(e) {
	let t = function(e) {
		let { history: t, location: r } = window, a = { value: ox(e, r) }, s = { value: t.state };
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
				let o = i$({}, s.value, t.state, {
					forward: e,
					scroll: oi()
				});
				i(o.current, o, !0), i(e, i$({}, oO(a.value, e, null), { position: o.position + 1 }, r), !1), a.value = e;
			},
			replace: function(e, r) {
				i(e, i$({}, t.state, oO(s.value.back, e, s.value.forward, !0), r, { position: s.value.position }), !0), a.value = e;
			}
		};
	}(e = function(e) {
		if (!e) if (iR) {
			let t = document.querySelector("base");
			e = (e = t && t.getAttribute("href") || "/").replace(/^\w+:\/\/[^\/]+/, "");
		} else e = "/";
		return "/" !== e[0] && "#" !== e[0] && (e = "/" + e), e.replace(i6, "");
	}(e)), r = function(e, t, r, a) {
		let s = [], i = [], o = null, l = ({ state: i }) => {
			let l = ox(e, location), c = r.value, u = t.value, p = 0;
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
					type: on.pop,
					direction: p ? p > 0 ? or.forward : or.back : or.unknown
				});
			});
		};
		function c() {
			if ("hidden" === document.visibilityState) {
				let { history: e } = window;
				e.state && e.replaceState(i$({}, e.state, { scroll: oi() }), "");
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
	}(e, t.state, t.location, t.replace), a = i$({
		location: "",
		base: e,
		go: function(e, t = !0) {
			t || r.pauseListeners(), history.go(e);
		},
		createHref: os.bind(null, e)
	}, t, r);
	return Object.defineProperty(a, "location", {
		enumerable: !0,
		get: () => t.location.value
	}), Object.defineProperty(a, "state", {
		enumerable: !0,
		get: () => t.state.value
	}), a;
}
var oA = ((G = {})[G.Static = 0] = "Static", G[G.Param = 1] = "Param", G[G.Group = 2] = "Group", G), oj = ((W = oj || {})[W.Static = 0] = "Static", W[W.Param = 1] = "Param", W[W.ParamRegExp = 2] = "ParamRegExp", W[W.ParamRegExpEnd = 3] = "ParamRegExpEnd", W[W.EscapeNext = 4] = "EscapeNext", W), oE = {
	type: oA.Static,
	value: ""
}, oP = /[a-zA-Z0-9_]/, oC = "[^/]+?", oT = {
	sensitive: !1,
	strict: !1,
	start: !0,
	end: !0
}, oI = ((K = oI || {})[K._multiplier = 10] = "_multiplier", K[K.Root = 90] = "Root", K[K.Segment = 40] = "Segment", K[K.SubSegment = 30] = "SubSegment", K[K.Static = 40] = "Static", K[K.Dynamic = 20] = "Dynamic", K[K.BonusCustomRegExp = 10] = "BonusCustomRegExp", K[K.BonusWildcard = -50] = "BonusWildcard", K[K.BonusRepeatable = -20] = "BonusRepeatable", K[K.BonusOptional = -8] = "BonusOptional", K[K.BonusStrict = .7000000000000001] = "BonusStrict", K[K.BonusCaseSensitive = .25] = "BonusCaseSensitive", K), oR = /[.+*?^${}()[\]/\\]/g;
function oM(e, t) {
	let r = 0, a = e.score, s = t.score;
	for (; r < a.length && r < s.length;) {
		let e = function(e, t) {
			let r = 0;
			for (; r < e.length && r < t.length;) {
				let a = t[r] - e[r];
				if (a) return a;
				r++;
			}
			return e.length < t.length ? 1 === e.length && e[0] === oI.Static + oI.Segment ? -1 : 1 : e.length > t.length ? 1 === t.length && t[0] === oI.Static + oI.Segment ? 1 : -1 : 0;
		}(a[r], s[r]);
		if (e) return e;
		r++;
	}
	if (1 === Math.abs(s.length - a.length)) {
		if (o$(a)) return 1;
		if (o$(s)) return -1;
	}
	return s.length - a.length;
}
function o$(e) {
	let t = e[e.length - 1];
	return e.length > 0 && t[t.length - 1] < 0;
}
var oD = {
	strict: !1,
	end: !0,
	sensitive: !1
};
function oV(e, t) {
	let r = {};
	for (let a of t) a in e && (r[a] = e[a]);
	return r;
}
function oL(e) {
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
function oF(e) {
	for (; e;) {
		if (e.record.aliasOf) return !0;
		e = e.parent;
	}
	return !1;
}
function oB({ record: e }) {
	return !!(e.name || e.components && Object.keys(e.components).length || e.redirect);
}
function oU(e) {
	let t = r5(og), r = r5(ok), a = a8(() => {
		let r = nT(e.to);
		return t.resolve(r);
	}), s = a8(() => {
		let { matched: e } = a.value, { length: t } = e, s = e[t - 1], i = r.matched;
		if (!s || !i.length) return -1;
		let o = i.findIndex(i5.bind(null, s));
		if (o > -1) return o;
		let l = oG(e[t - 2]);
		return t > 1 && oG(s) === l && i[i.length - 1].path !== l ? i.findIndex(i5.bind(null, e[t - 2])) : o;
	}), i = a8(() => s.value > -1 && function(e, t) {
		for (let r in t) {
			let a = t[r], s = e[r];
			if ("string" == typeof a) {
				if (a !== s) return !1;
			} else if (!iL(s) || s.length !== a.length || a.some((e, t) => e !== s[t])) return !1;
		}
		return !0;
	}(r.params, a.value.params)), o = a8(() => s.value > -1 && s.value === r.matched.length - 1 && i9(r.params, a.value.params));
	return {
		route: a,
		href: a8(() => a.value.href),
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
				let r = t[nT(e.replace) ? "replace" : "push"](nT(e.to)).catch(iV);
				return e.viewTransition && "undefined" != typeof document && "startViewTransition" in document && document.startViewTransition(() => r), r;
			}
			return Promise.resolve();
		}
	};
}
var oz = rN({
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
	useLink: oU,
	setup(e, { slots: t }) {
		let r = nv(oU(e)), { options: a } = r5(og), s = a8(() => ({
			[oW(e.activeClass, a.linkActiveClass, "router-link-active")]: r.isActive,
			[oW(e.exactActiveClass, a.linkExactActiveClass, "router-link-exact-active")]: r.isExactActive
		}));
		return () => {
			var a;
			let i = t.default && (1 === (a = t.default(r)).length ? a[0] : a);
			return e.custom ? i : a7("a", {
				"aria-current": r.isExactActive ? e.ariaCurrentValue : null,
				href: r.href,
				onClick: r.navigate,
				class: s.value
			}, i);
		};
	}
});
function oG(e) {
	return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
var oW = (e, t, r) => null != e ? e : null != t ? t : r, oK = rN({
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
		let a = r5(oN), s = a8(() => e.route || a.value), i = r5(oy, 0), o = a8(() => {
			let e, t = nT(i), { matched: r } = s.value;
			for (; (e = r[t]) && !e.components;) t++;
			return t;
		}), l = a8(() => s.value.matched[o.value]);
		r7(oy, a8(() => o.value + 1)), r7(ov, l), r7(oN, s);
		let c = nj();
		return ak(() => [
			c.value,
			l.value,
			e.name
		], ([e, t, r], [a, s, i]) => {
			t && (t.instances[r] = e, s && s !== t && e && e === a && (t.leaveGuards.size || (t.leaveGuards = s.leaveGuards), t.updateGuards.size || (t.updateGuards = s.updateGuards))), !e || !t || s && i5(t, s) && a || (t.enterCallbacks[r] || []).forEach((t) => t(e));
		}, { flush: "post" }), () => {
			let a = s.value, i = e.name, o = l.value, u = o && o.components[i];
			if (!u) return oq(r.default, {
				Component: u,
				route: a
			});
			let p = o.props[i], d = a7(u, i$({}, p ? !0 === p ? a.params : "function" == typeof p ? p(a) : p : null, t, {
				onVnodeUnmounted: (e) => {
					e.component.isUnmounted && (o.instances[i] = null);
				},
				ref: c
			}));
			return oq(r.default, {
				Component: d,
				route: a
			}) || d;
		};
	}
});
function oq(e, t) {
	if (!e) return null;
	let r = e(t);
	return 1 === r.length ? r[0] : r;
}
function oH(e) {
	let t, r, a, s = function(e, t) {
		let r = [], a = /* @__PURE__ */ new Map();
		function s(e, o, l) {
			let c, u, p = !l, d = oL(e);
			d.aliasOf = l && l.record;
			let f = iF(t, e), h = [d];
			if ("alias" in e) for (let t of "string" == typeof e.alias ? [e.alias] : e.alias) h.push(oL(i$({}, d, {
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
					let a = i$(function(e, t) {
						let r = i$({}, oT, t), a = [], s = r.start ? "^" : "", i = [];
						for (let t of e) {
							let e = t.length ? [] : [oI.Root];
							r.strict && !t.length && (s += "/");
							for (let a = 0; a < t.length; a++) {
								let o = t[a], l = oI.Segment + (r.sensitive ? oI.BonusCaseSensitive : 0);
								if (o.type === oA.Static) a || (s += "/"), s += o.value.replace(oR, "\\$&"), l += oI.Static;
								else if (o.type === oA.Param) {
									let { value: e, repeatable: r, optional: c, regexp: u } = o;
									i.push({
										name: e,
										repeatable: r,
										optional: c
									});
									let p = u || oC;
									p !== oC && (l += oI.BonusCustomRegExp);
									let d = r ? `((?:${p})(?:/(?:${p}))*)` : `(${p})`;
									a || (d = c && t.length < 2 ? `(?:/${d})` : "/" + d), c && (d += "?"), s += d, l += oI.Dynamic, c && (l += oI.BonusOptional), r && (l += oI.BonusRepeatable), ".*" === p && (l += oI.BonusWildcard);
								}
								e.push(l);
							}
							a.push(e);
						}
						if (r.strict && r.end) {
							let e = a.length - 1;
							a[e][a[e].length - 1] += oI.BonusStrict;
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
								for (let s of e) for (let e of (a && r.endsWith("/") || (r += "/"), a = !1, s)) if (e.type === oA.Static) r += e.value;
								else if (e.type === oA.Param) {
									let { value: i, repeatable: o, optional: l } = e, c = i in t ? t[i] : "";
									if (iL(c) && !o) throw Error(`Provided param "${i}" is an array but it is not repeatable (* or + modifiers)`);
									let u = iL(c) ? c.join("/") : c;
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
						if ("/" === e) return [[oE]];
						if (!e.startsWith("/")) throw Error(`Invalid path "${e}"`);
						function a(e) {
							throw Error(`ERR (${s})/"${u}": ${e}`);
						}
						let s = oj.Static, i = s, o = [];
						function l() {
							t && o.push(t), t = [];
						}
						let c = 0, u = "", p = "";
						function d() {
							u && (s === oj.Static ? t.push({
								type: oA.Static,
								value: u
							}) : s === oj.Param || s === oj.ParamRegExp || s === oj.ParamRegExpEnd ? (t.length > 1 && ("*" === r || "+" === r) && a(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`), t.push({
								type: oA.Param,
								value: u,
								regexp: p,
								repeatable: "*" === r || "+" === r,
								optional: "*" === r || "?" === r
							})) : a("Invalid state to consume buffer"), u = "");
						}
						for (; c < e.length;) {
							if ("\\" === (r = e[c++]) && s !== oj.ParamRegExp) {
								i = s, s = oj.EscapeNext;
								continue;
							}
							switch (s) {
								case oj.Static:
									"/" === r ? (u && d(), l()) : ":" === r ? (d(), s = oj.Param) : u += r;
									break;
								case oj.EscapeNext:
									u += r, s = i;
									break;
								case oj.Param:
									"(" === r ? s = oj.ParamRegExp : oP.test(r) ? u += r : (d(), s = oj.Static, "*" !== r && "?" !== r && "+" !== r && c--);
									break;
								case oj.ParamRegExp:
									")" === r ? "\\" == p[p.length - 1] ? p = p.slice(0, -1) + r : s = oj.ParamRegExpEnd : p += r;
									break;
								case oj.ParamRegExpEnd:
									d(), s = oj.Static, "*" !== r && "?" !== r && "+" !== r && c--, p = "";
									break;
								default: a("Unknown state");
							}
						}
						return s === oj.ParamRegExp && a(`Unfinished custom RegExp for param "${u}"`), d(), l(), o;
					}(e.path), r), {
						record: e,
						parent: t,
						children: [],
						alias: []
					});
					return t && !a.record.aliasOf == !t.record.aliasOf && t.children.push(a), a;
				}(t, o, f), l ? l.alias.push(c) : ((u = u || c) !== c && u.alias.push(c), p && e.name && !oF(c) && i(e.name)), oB(c) && function(e) {
					let t = function(e, t) {
						let r = 0, a = t.length;
						for (; r !== a;) {
							let s = r + a >> 1;
							0 > oM(e, t[s]) ? a = s : r = s + 1;
						}
						let s = function(e) {
							let t = e;
							for (; t = t.parent;) if (oB(t) && 0 === oM(e, t)) return t;
						}(e);
						return s && (a = t.lastIndexOf(s, a - 1)), a;
					}(e, r);
					r.splice(t, 0, e), e.record.name && !oF(e) && a.set(e.record.name, e);
				}(c), d.children) {
					let e = d.children;
					for (let t = 0; t < e.length; t++) s(e[t], c, l && l.children[t]);
				}
				l = l || c;
			}
			return u ? () => {
				i(u);
			} : iV;
		}
		function i(e) {
			if (oc(e)) {
				let t = a.get(e);
				t && (a.delete(e), r.splice(r.indexOf(t), 1), t.children.forEach(i), t.alias.forEach(i));
			} else {
				let t = r.indexOf(e);
				t > -1 && (r.splice(t, 1), e.record.name && a.delete(e.record.name), e.children.forEach(i), e.alias.forEach(i));
			}
		}
		return t = iF(oD, t), e.forEach((e) => s(e)), {
			addRoute: s,
			resolve: function(e, t) {
				let s, i, o, l = {};
				if ("name" in e && e.name) {
					if (!(s = a.get(e.name))) throw od(ou.MATCHER_NOT_FOUND, { location: e });
					o = s.record.name, l = i$(oV(t.params, s.keys.filter((e) => !e.optional).concat(s.parent ? s.parent.keys.filter((e) => e.optional) : []).map((e) => e.name)), e.params && oV(e.params, s.keys.map((e) => e.name))), i = s.stringify(l);
				} else if (null != e.path) i = e.path, (s = r.find((e) => e.re.test(i))) && (l = s.parse(i), o = s.record.name);
				else {
					if (!(s = t.name ? a.get(t.name) : r.find((e) => e.re.test(t.path)))) throw od(ou.MATCHER_NOT_FOUND, {
						location: e,
						currentLocation: t
					});
					o = s.record.name, l = i$({}, t.params, e.params), i = s.stringify(l);
				}
				let c = [], u = s;
				for (; u;) c.unshift(u.record), u = u.parent;
				return {
					name: o,
					path: i,
					params: l,
					matched: c,
					meta: c.reduce((e, t) => i$(e, t.meta), {})
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
	}(e.routes, e), i = e.parseQuery || oh, o = e.stringifyQuery || om, l = e.history, c = ob(), u = ob(), p = ob(), d = nE(ot), f = ot;
	iR && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
	let h = iD.bind(null, (e) => "" + e), m = iD.bind(null, i4), y = iD.bind(null, i3);
	function g(e, t) {
		let r;
		if (t = i$({}, t || d.value), "string" == typeof e) {
			let r = i8(i, e, t.path), a = s.resolve({ path: r.path }, t), o = l.createHref(r.fullPath);
			return i$(r, a, {
				params: y(a.params),
				hash: i3(r.hash),
				redirectedFrom: void 0,
				href: o
			});
		}
		if (null != e.path) r = i$({}, e, { path: i8(i, e.path, t.path).path });
		else {
			let a = i$({}, e.params);
			for (let e in a) a[e] ?? delete a[e];
			r = i$({}, e, { params: m(a) }), t.params = m(t.params);
		}
		let a = s.resolve(r, t), c = e.hash || "";
		a.params = h(y(a.params));
		let u = function(e, t) {
			let r = t.query ? e(t.query) : "";
			return t.path + (r && "?") + r + (t.hash || "");
		}(o, i$({}, e, {
			hash: i1(c).replace(iX, "{").replace(iQ, "}").replace(iY, "^"),
			path: a.path
		})), p = l.createHref(u);
		return i$({
			fullPath: u,
			hash: c,
			query: o === om ? function(e) {
				let t = {};
				for (let r in e) {
					let a = e[r];
					void 0 !== a && (t[r] = iL(a) ? a.map((e) => null == e ? null : "" + e) : null == a ? a : "" + a);
				}
				return t;
			}(e.query) : e.query || {}
		}, a, {
			redirectedFrom: void 0,
			href: p
		});
	}
	function k(e) {
		return "string" == typeof e ? i8(i, e, d.value.path) : i$({}, e);
	}
	function N(e, t) {
		if (f !== e) return od(ou.NAVIGATION_CANCELLED, {
			from: t,
			to: e
		});
	}
	function b(e, t) {
		let r = e.matched[e.matched.length - 1];
		if (r && r.redirect) {
			let { redirect: a } = r, s = "function" == typeof a ? a(e, t) : a;
			return "string" == typeof s && ((s = s.includes("?") || s.includes("#") ? s = k(s) : { path: s }).params = {}), i$({
				query: e.query,
				hash: e.hash,
				params: null != s.path ? {} : e.params
			}, s);
		}
	}
	function _(e, t) {
		let r, a = f = g(e), s = d.value, i = e.state, l = e.force, c = !0 === e.replace, u = b(a, s);
		return u ? _(i$(k(u), {
			state: "object" == typeof u ? i$({}, i, u.state) : i,
			force: l,
			replace: c
		}), t || a) : (a.redirectedFrom = t, !l && function(e, t, r) {
			let a = t.matched.length - 1, s = r.matched.length - 1;
			return a > -1 && a === s && i5(t.matched[a], r.matched[s]) && i9(t.params, r.params) && e(t.query) === e(r.query) && t.hash === r.hash;
		}(o, s, a) && (r = od(ou.NAVIGATION_DUPLICATED, {
			to: a,
			from: s
		}), T(s, s, !0, !1)), (r ? Promise.resolve(r) : O(a, s)).catch((e) => of(e) ? of(e, ou.NAVIGATION_GUARD_REDIRECT) ? e : C(e) : P(e, a, s)).then((e) => {
			if (e) {
				if (of(e, ou.NAVIGATION_GUARD_REDIRECT)) return _(i$({ replace: c }, k(e.to), {
					state: "object" == typeof e.to ? i$({}, i, e.to.state) : i,
					force: l
				}), t || a);
			} else e = A(a, s, !0, c, i);
			return S(a, s, e), e;
		}));
	}
	function w(e, t) {
		let r = N(e, t);
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
				i && (e.matched.find((e) => i5(e, i)) ? a.push(i) : r.push(i));
				let l = e.matched[o];
				l && !t.matched.find((e) => i5(e, l)) && s.push(l);
			}
			return [
				r,
				a,
				s
			];
		}(e, t);
		for (let s of (r = ow(a.reverse(), "beforeRouteLeave", e, t), a)) s.leaveGuards.forEach((a) => {
			r.push(o_(a, e, t));
		});
		let o = w.bind(null, e, t);
		return r.push(o), $(r).then(() => {
			for (let a of (r = [], c.list())) r.push(o_(a, e, t));
			return r.push(o), $(r);
		}).then(() => {
			for (let a of (r = ow(s, "beforeRouteUpdate", e, t), s)) a.updateGuards.forEach((a) => {
				r.push(o_(a, e, t));
			});
			return r.push(o), $(r);
		}).then(() => {
			for (let a of (r = [], i)) if (a.beforeEnter) if (iL(a.beforeEnter)) for (let s of a.beforeEnter) r.push(o_(s, e, t));
			else r.push(o_(a.beforeEnter, e, t));
			return r.push(o), $(r);
		}).then(() => (e.matched.forEach((e) => e.enterCallbacks = {}), (r = ow(i, "beforeRouteEnter", e, t, x)).push(o), $(r))).then(() => {
			for (let a of (r = [], u.list())) r.push(o_(a, e, t));
			return r.push(o), $(r);
		}).catch((e) => of(e, ou.NAVIGATION_CANCELLED) ? e : Promise.reject(e));
	}
	function S(e, t, r) {
		p.list().forEach((a) => x(() => a(e, t, r)));
	}
	function A(e, t, r, a, s) {
		let i = N(e, t);
		if (i) return i;
		let o = t === ot, c = iR ? history.state : {};
		r && (a || o ? l.replace(e.fullPath, i$({ scroll: o && c && c.scroll }, s)) : l.push(e.fullPath, s)), d.value = e, T(e, t, r, o), C();
	}
	let j = ob(), E = ob();
	function P(e, t, r) {
		C(e);
		let a = E.list();
		return a.length ? a.forEach((a) => a(e, t, r)) : console.error(e), Promise.reject(e);
	}
	function C(e) {
		return r || (r = !e, t || (t = l.listen((e, t, r) => {
			var a, s;
			if (!M.listening) return;
			let i = g(e), o = b(i, M.currentRoute.value);
			if (o) return void _(i$(o, {
				replace: !0,
				force: !0
			}), i).catch(iV);
			f = i;
			let c = d.value;
			iR && (a = oo(c.fullPath, r.delta), s = oi(), ol.set(a, s)), O(i, c).catch((e) => of(e, ou.NAVIGATION_ABORTED | ou.NAVIGATION_CANCELLED) ? e : of(e, ou.NAVIGATION_GUARD_REDIRECT) ? (_(i$(k(e.to), { force: !0 }), i).then((e) => {
				of(e, ou.NAVIGATION_ABORTED | ou.NAVIGATION_DUPLICATED) && !r.delta && r.type === on.pop && l.go(-1, !1);
			}).catch(iV), Promise.reject()) : (r.delta && l.go(-r.delta, !1), P(e, i, c))).then((e) => {
				(e = e || A(i, c, !1)) && (r.delta && !of(e, ou.NAVIGATION_CANCELLED) ? l.go(-r.delta, !1) : r.type === on.pop && of(e, ou.NAVIGATION_ABORTED | ou.NAVIGATION_DUPLICATED) && l.go(-1, !1)), S(i, c, e);
			}).catch(iV);
		})), j.list().forEach(([t, r]) => e ? r(e) : t()), j.reset()), e;
	}
	function T(t, r, a, s) {
		let { scrollBehavior: i } = e;
		if (!iR || !i) return Promise.resolve();
		let o = !a && function(e) {
			let t = ol.get(e);
			return ol.delete(e), t;
		}(oo(t.fullPath, 0)) || (s || !a) && history.state && history.state.scroll || null;
		return nX().then(() => i(t, r, o)).then((e) => e && function(e) {
			let t;
			if ("el" in e) {
				let r = e.el, a = "string" == typeof r && r.startsWith("#"), s = "string" == typeof r ? a ? document.getElementById(r.slice(1)) : document.querySelector(r) : r;
				if (!s) return;
				t = function(e, t) {
					let r = document.documentElement.getBoundingClientRect(), a = e.getBoundingClientRect();
					return {
						behavior: t.behavior,
						left: a.left - r.left - (t.left || 0),
						top: a.top - r.top - (t.top || 0)
					};
				}(s, e);
			} else t = e;
			"scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(null != t.left ? t.left : window.scrollX, null != t.top ? t.top : window.scrollY);
		}(e)).catch((e) => P(e, t, r));
	}
	let I = (e) => l.go(e), R = /* @__PURE__ */ new Set(), M = {
		currentRoute: d,
		listening: !0,
		addRoute: function(e, t) {
			let r, a;
			return oc(e) ? (r = s.getRecordMatcher(e), a = t) : a = e, s.addRoute(a, r);
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
			return _(i$(k(e), { replace: !0 }));
		},
		go: I,
		back: () => I(-1),
		forward: () => I(1),
		beforeEach: c.add,
		beforeResolve: u.add,
		afterEach: p.add,
		onError: E.add,
		isReady: function() {
			return r && d.value !== ot ? Promise.resolve() : new Promise((e, t) => {
				j.add([e, t]);
			});
		},
		install(e) {
			e.component("RouterLink", oz), e.component("RouterView", oK), e.config.globalProperties.$router = M, Object.defineProperty(e.config.globalProperties, "$route", {
				enumerable: !0,
				get: () => nT(d)
			}), iR && !a && d.value === ot && (a = !0, _(l.location).catch((e) => {}));
			let s = {};
			for (let e in ot) Object.defineProperty(s, e, {
				get: () => d.value[e],
				enumerable: !0
			});
			e.provide(og, M), e.provide(ok, ny(s)), e.provide(oN, d);
			let i = e.unmount;
			R.add(e), e.unmount = function() {
				R.delete(e), R.size < 1 && (f = ot, t && t(), t = null, d.value = ot, a = !1, r = !1), i();
			};
		}
	};
	function $(e) {
		return e.reduce((e, t) => e.then(() => x(t)), Promise.resolve());
	}
	return M;
}
function oY() {
	return r5(og);
}
let oJ = oz, oX = oK;
function oZ(e) {
	return "function" == typeof e;
}
function oQ(e) {
	var t = e(function(e) {
		Error.call(e), e.stack = Error().stack;
	});
	return t.prototype = Object.create(Error.prototype), t.prototype.constructor = t, t;
}
var o0 = oQ(function(e) {
	return function(t) {
		e(this), this.message = t ? t.length + " errors occurred during unsubscription:\n" + t.map(function(e, t) {
			return t + 1 + ") " + e.toString();
		}).join("\n  ") : "", this.name = "UnsubscriptionError", this.errors = t;
	};
});
function o1(e, t) {
	if (e) {
		var r = e.indexOf(t);
		0 <= r && e.splice(r, 1);
	}
}
var o2 = function() {
	var e;
	function t(e) {
		this.initialTeardown = e, this.closed = !1, this._parentage = null, this._finalizers = null;
	}
	return t.prototype.unsubscribe = function() {
		if (!this.closed) {
			this.closed = !0;
			var e, t, r, s, o, l = this._parentage;
			if (l) if (this._parentage = null, Array.isArray(l)) try {
				for (var c = p(l), u = c.next(); !u.done; u = c.next()) u.value.remove(this);
			} catch (t) {
				e = { error: t };
			} finally {
				try {
					u && !u.done && (t = c.return) && t.call(c);
				} finally {
					if (e) throw e.error;
				}
			}
			else l.remove(this);
			var d = this.initialTeardown;
			if (oZ(d)) try {
				d();
			} catch (e) {
				o = e instanceof o0 ? e.errors : [e];
			}
			var f = this._finalizers;
			if (f) {
				this._finalizers = null;
				try {
					for (var h = p(f), m = h.next(); !m.done; m = h.next()) {
						var y = m.value;
						try {
							o6(y);
						} catch (e) {
							o = null != o ? o : [], e instanceof o0 ? o = i(i([], a(o)), a(e.errors)) : o.push(e);
						}
					}
				} catch (e) {
					r = { error: e };
				} finally {
					try {
						m && !m.done && (s = h.return) && s.call(h);
					} finally {
						if (r) throw r.error;
					}
				}
			}
			if (o) throw new o0(o);
		}
	}, t.prototype.add = function(e) {
		var r;
		if (e && e !== this) if (this.closed) o6(e);
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
		t === e ? this._parentage = null : Array.isArray(t) && o1(t, e);
	}, t.prototype.remove = function(e) {
		var r = this._finalizers;
		r && o1(r, e), e instanceof t && e._removeParent(this);
	}, (e = new t()).closed = !0, t.EMPTY = e, t;
}(), o4 = o2.EMPTY;
function o3(e) {
	return e instanceof o2 || e && "closed" in e && oZ(e.remove) && oZ(e.add) && oZ(e.unsubscribe);
}
function o6(e) {
	oZ(e) ? e() : e.unsubscribe();
}
var o8 = void 0, o7 = {
	setTimeout: function(e, t) {
		for (var r = [], s = 2; s < arguments.length; s++) r[s - 2] = arguments[s];
		var o = o7.delegate;
		return (null == o ? void 0 : o.setTimeout) ? o.setTimeout.apply(o, i([e, t], a(r))) : setTimeout.apply(void 0, i([e, t], a(r)));
	},
	clearTimeout: function(e) {
		var t = o7.delegate;
		return ((null == t ? void 0 : t.clearTimeout) || clearTimeout)(e);
	},
	delegate: void 0
};
function o5(e) {
	o7.setTimeout(function() {
		throw e;
	});
}
function o9() {}
var le = lt("C", void 0, void 0);
function lt(e, t, r) {
	return {
		kind: e,
		value: t,
		error: r
	};
}
function lr(e) {
	e();
}
var la = function(e) {
	function t(t) {
		var r = e.call(this) || this;
		return r.isStopped = !1, t ? (r.destination = t, o3(t) && t.add(r)) : r.destination = lp, r;
	}
	return l(t, e), t.create = function(e, t, r) {
		return new ll(e, t, r);
	}, t.prototype.next = function(e) {
		this.isStopped ? lu(lt("N", e, void 0), this) : this._next(e);
	}, t.prototype.error = function(e) {
		this.isStopped ? lu(lt("E", void 0, e), this) : (this.isStopped = !0, this._error(e));
	}, t.prototype.complete = function() {
		this.isStopped ? lu(le, this) : (this.isStopped = !0, this._complete());
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
}(o2);
Function.prototype.bind;
var lo = function() {
	function e(e) {
		this.partialObserver = e;
	}
	return e.prototype.next = function(e) {
		var t = this.partialObserver;
		if (t.next) try {
			t.next(e);
		} catch (e) {
			lc(e);
		}
	}, e.prototype.error = function(e) {
		var t = this.partialObserver;
		if (t.error) try {
			t.error(e);
		} catch (e) {
			lc(e);
		}
		else lc(e);
	}, e.prototype.complete = function() {
		var e = this.partialObserver;
		if (e.complete) try {
			e.complete();
		} catch (e) {
			lc(e);
		}
	}, e;
}(), ll = function(e) {
	function t(t, r, a) {
		var s, o = e.call(this) || this;
		return oZ(t) || !t ? s = {
			next: null != t ? t : void 0,
			error: null != r ? r : void 0,
			complete: null != a ? a : void 0
		} : s = t, o.destination = new lo(s), o;
	}
	return l(t, e), t;
}(la);
function lc(e) {
	o5(e);
}
function lu(e, t) {}
var lp = {
	closed: !0,
	next: o9,
	error: function(e) {
		throw e;
	},
	complete: o9
}, ld = "function" == typeof Symbol && Symbol.observable || "@@observable";
function lf(e) {
	return e;
}
function lh(e) {
	return 0 === e.length ? lf : 1 === e.length ? e[0] : function(t) {
		return e.reduce(function(e, t) {
			return t(e);
		}, t);
	};
}
var lm = function() {
	function e(e) {
		e && (this._subscribe = e);
	}
	return e.prototype.lift = function(t) {
		var r = new e();
		return r.source = this, r.operator = t, r;
	}, e.prototype.subscribe = function(e, t, r) {
		var a = this, s = !function(e) {
			return e && e instanceof la || e && oZ(e.next) && oZ(e.error) && oZ(e.complete) && o3(e);
		}(e) ? new ll(e, t, r) : e;
		return lr(function() {
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
		return new (t = (lv(t)))(function(t, a) {
			var s = new ll({
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
	}, e.prototype[ld] = function() {
		return this;
	}, e.prototype.pipe = function() {
		for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
		return lh(e)(this);
	}, e.prototype.toPromise = function(e) {
		var t = this;
		return new (e = (lv(e)))(function(e, r) {
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
function lv(e) {
	var t;
	return null != (t = null != e ? e : o8) ? t : Promise;
}
function ly(e) {
	return function(t) {
		if (oZ(null == t ? void 0 : t.lift)) return t.lift(function(t) {
			try {
				return e(t, this);
			} catch (e) {
				this.error(e);
			}
		});
		throw TypeError("Unable to lift unknown Observable type");
	};
}
function lg(e, t, r, a, s) {
	return new lk(e, t, r, a, s);
}
var lk = function(e) {
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
	return l(t, e), t.prototype.unsubscribe = function() {
		var t;
		if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
			var r = this.closed;
			e.prototype.unsubscribe.call(this), r || null == (t = this.onFinalize) || t.call(this);
		}
	}, t;
}(la), lN = oQ(function(e) {
	return function() {
		e(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
	};
}), lb = function(e) {
	function t() {
		var t = e.call(this) || this;
		return t.closed = !1, t.currentObservers = null, t.observers = [], t.isStopped = !1, t.hasError = !1, t.thrownError = null, t;
	}
	return l(t, e), t.prototype.lift = function(e) {
		var t = new l_(this, this);
		return t.operator = e, t;
	}, t.prototype._throwIfClosed = function() {
		if (this.closed) throw new lN();
	}, t.prototype.next = function(e) {
		var t = this;
		lr(function() {
			var r, a;
			if (t._throwIfClosed(), !t.isStopped) {
				t.currentObservers || (t.currentObservers = Array.from(t.observers));
				try {
					for (var s = p(t.currentObservers), i = s.next(); !i.done; i = s.next()) i.value.next(e);
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
		lr(function() {
			if (t._throwIfClosed(), !t.isStopped) {
				t.hasError = t.isStopped = !0, t.thrownError = e;
				for (var r = t.observers; r.length;) r.shift().error(e);
			}
		});
	}, t.prototype.complete = function() {
		var e = this;
		lr(function() {
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
		return r || a ? o4 : (this.currentObservers = null, s.push(e), new o2(function() {
			t.currentObservers = null, o1(s, e);
		}));
	}, t.prototype._checkFinalizedStatuses = function(e) {
		var t = this.hasError, r = this.thrownError, a = this.isStopped;
		t ? e.error(r) : a && e.complete();
	}, t.prototype.asObservable = function() {
		var e = new lm();
		return e.source = this, e;
	}, t.create = function(e, t) {
		return new l_(e, t);
	}, t;
}(lm), l_ = function(e) {
	function t(t, r) {
		var a = e.call(this) || this;
		return a.destination = t, a.source = r, a;
	}
	return l(t, e), t.prototype.next = function(e) {
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
		return null != (r = null == (t = this.source) ? void 0 : t.subscribe(e)) ? r : o4;
	}, t;
}(lb), lw = function(e) {
	function t(t) {
		var r = e.call(this) || this;
		return r._value = t, r;
	}
	return l(t, e), Object.defineProperty(t.prototype, "value", {
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
}(lb), lx = {
	now: function() {
		return (lx.delegate || Date).now();
	},
	delegate: void 0
}, lO = function(e) {
	function t(t, r) {
		return e.call(this) || this;
	}
	return l(t, e), t.prototype.schedule = function(e, t) {
		return void 0 === t && (t = 0), this;
	}, t;
}(o2), lS = {
	setInterval: function(e, t) {
		for (var r = [], s = 2; s < arguments.length; s++) r[s - 2] = arguments[s];
		var o = lS.delegate;
		return (null == o ? void 0 : o.setInterval) ? o.setInterval.apply(o, i([e, t], a(r))) : setInterval.apply(void 0, i([e, t], a(r)));
	},
	clearInterval: function(e) {
		var t = lS.delegate;
		return ((null == t ? void 0 : t.clearInterval) || clearInterval)(e);
	},
	delegate: void 0
}, lA = function(e) {
	function t(t, r) {
		var a = e.call(this, t, r) || this;
		return a.scheduler = t, a.work = r, a.pending = !1, a;
	}
	return l(t, e), t.prototype.schedule = function(e, t) {
		if (void 0 === t && (t = 0), this.closed) return this;
		this.state = e;
		var r, a = this.id, s = this.scheduler;
		return null != a && (this.id = this.recycleAsyncId(s, a, t)), this.pending = !0, this.delay = t, this.id = null != (r = this.id) ? r : this.requestAsyncId(s, this.id, t), this;
	}, t.prototype.requestAsyncId = function(e, t, r) {
		return void 0 === r && (r = 0), lS.setInterval(e.flush.bind(e, this), r);
	}, t.prototype.recycleAsyncId = function(e, t, r) {
		if (void 0 === r && (r = 0), null != r && this.delay === r && !1 === this.pending) return t;
		null != t && lS.clearInterval(t);
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
			this.work = this.state = this.scheduler = null, this.pending = !1, o1(a, this), null != t && (this.id = this.recycleAsyncId(r, t, null)), this.delay = null, e.prototype.unsubscribe.call(this);
		}
	}, t;
}(lO), lj = function() {
	function e(t, r) {
		void 0 === r && (r = e.now), this.schedulerActionCtor = t, this.now = r;
	}
	return e.prototype.schedule = function(e, t, r) {
		return void 0 === t && (t = 0), new this.schedulerActionCtor(this, e).schedule(r, t);
	}, e.now = lx.now, e;
}(), lE = new (function(e) {
	function t(t, r) {
		void 0 === r && (r = lj.now);
		var a = e.call(this, t, r) || this;
		return a.actions = [], a._active = !1, a;
	}
	return l(t, e), t.prototype.flush = function(e) {
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
}(lj))(lA), lP = new lm(function(e) {
	return e.complete();
});
function lC(e) {
	return e && oZ(e.schedule);
}
function lT(e) {
	return e[e.length - 1];
}
function lI(e) {
	return lC(lT(e)) ? e.pop() : void 0;
}
var lR = function(e) {
	return e && "number" == typeof e.length && "function" != typeof e;
};
function lM(e) {
	return oZ(null == e ? void 0 : e.then);
}
function l$(e) {
	return Symbol.asyncIterator && oZ(null == e ? void 0 : e[Symbol.asyncIterator]);
}
function lD(e) {
	return TypeError("You provided " + (null !== e && "object" == typeof e ? "an invalid object" : "'" + e + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
var lV = "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator";
function lL(e) {
	return oZ(null == e ? void 0 : e[lV]);
}
function lF(e) {
	return o(this, arguments, function() {
		var t, r, a;
		return u(this, function(i) {
			switch (i.label) {
				case 0: t = e.getReader(), i.label = 1;
				case 1: i.trys.push([
					1,
					,
					9,
					10
				]), i.label = 2;
				case 2: return [4, s(t.read())];
				case 3:
					if (a = (r = i.sent()).value, !r.done) return [3, 5];
					return [4, s(void 0)];
				case 4: return [2, i.sent()];
				case 5: return [4, s(a)];
				case 6: return [4, i.sent()];
				case 7: return i.sent(), [3, 2];
				case 8: return [3, 10];
				case 9: return t.releaseLock(), [7];
				case 10: return [2];
			}
		});
	});
}
function lB(e) {
	return oZ(null == e ? void 0 : e.getReader);
}
function lU(e) {
	if (e instanceof lm) return e;
	if (null != e) {
		var t, r, a, s;
		if (oZ(e[ld])) return t = e, new lm(function(e) {
			var r = t[ld]();
			if (oZ(r.subscribe)) return r.subscribe(e);
			throw TypeError("Provided object does not correctly implement Symbol.observable");
		});
		if (lR(e)) return r = e, new lm(function(e) {
			for (var t = 0; t < r.length && !e.closed; t++) e.next(r[t]);
			e.complete();
		});
		if (lM(e)) return a = e, new lm(function(e) {
			a.then(function(t) {
				e.closed || (e.next(t), e.complete());
			}, function(t) {
				return e.error(t);
			}).then(null, o5);
		});
		if (l$(e)) return lz(e);
		if (lL(e)) return s = e, new lm(function(e) {
			var t, r;
			try {
				for (var a = p(s), i = a.next(); !i.done; i = a.next()) {
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
		if (lB(e)) return lz(lF(e));
	}
	throw lD(e);
}
function lz(e) {
	return new lm(function(t) {
		(function(e, t) {
			var a, s, i, o;
			return r(this, void 0, void 0, function() {
				var r;
				return u(this, function(l) {
					switch (l.label) {
						case 0: l.trys.push([
							0,
							5,
							6,
							11
						]), a = c(e), l.label = 1;
						case 1: return [4, a.next()];
						case 2:
							if ((s = l.sent()).done) return [3, 4];
							if (r = s.value, t.next(r), t.closed) return [2];
							l.label = 3;
						case 3: return [3, 1];
						case 4: return [3, 11];
						case 5: return i = { error: l.sent() }, [3, 11];
						case 6:
							if (l.trys.push([
								6,
								,
								9,
								10
							]), !(s && !s.done && (o = a.return))) return [3, 8];
							return [4, o.call(a)];
						case 7: l.sent(), l.label = 8;
						case 8: return [3, 10];
						case 9:
							if (i) throw i.error;
							return [7];
						case 10: return [7];
						case 11: return t.complete(), [2];
					}
				});
			});
		})(e, t).catch(function(e) {
			return t.error(e);
		});
	});
}
function lG(e, t, r, a, s) {
	void 0 === a && (a = 0), void 0 === s && (s = !1);
	var i = t.schedule(function() {
		r(), s ? e.add(this.schedule(null, a)) : this.unsubscribe();
	}, a);
	if (e.add(i), !s) return i;
}
function lW(e, t) {
	return void 0 === t && (t = 0), ly(function(r, a) {
		r.subscribe(lg(a, function(r) {
			return lG(a, e, function() {
				return a.next(r);
			}, t);
		}, function() {
			return lG(a, e, function() {
				return a.complete();
			}, t);
		}, function(r) {
			return lG(a, e, function() {
				return a.error(r);
			}, t);
		}));
	});
}
function lK(e, t) {
	return void 0 === t && (t = 0), ly(function(r, a) {
		a.add(e.schedule(function() {
			return r.subscribe(a);
		}, t));
	});
}
function lq(e, t) {
	if (!e) throw Error("Iterable cannot be null");
	return new lm(function(r) {
		lG(r, t, function() {
			var a = e[Symbol.asyncIterator]();
			lG(r, t, function() {
				a.next().then(function(e) {
					e.done ? r.complete() : r.next(e.value);
				});
			}, 0, !0);
		});
	});
}
function lH(e, t) {
	return t ? function(e, t) {
		if (null != e) {
			if (oZ(e[ld])) return lU(e).pipe(lK(t), lW(t));
			if (lR(e)) return new lm(function(r) {
				var a = 0;
				return t.schedule(function() {
					a === e.length ? r.complete() : (r.next(e[a++]), r.closed || this.schedule());
				});
			});
			if (lM(e)) return lU(e).pipe(lK(t), lW(t));
			if (l$(e)) return lq(e, t);
			if (lL(e)) return new lm(function(r) {
				var a;
				return lG(r, t, function() {
					a = e[lV](), lG(r, t, function() {
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
					return oZ(null == a ? void 0 : a.return) && a.return();
				};
			});
			if (lB(e)) return lq(lF(e), t);
		}
		throw lD(e);
	}(e, t) : lU(e);
}
function lY(e, t) {
	return ly(function(r, a) {
		var s = 0;
		r.subscribe(lg(a, function(r) {
			a.next(e.call(t, r, s++));
		}));
	});
}
var lJ = Array.isArray;
function lX(e) {
	return lY(function(t) {
		return lJ(t) ? e.apply(void 0, i([], a(t))) : e(t);
	});
}
var lZ = Array.isArray, lQ = Object.getPrototypeOf, l0 = Object.prototype, l1 = Object.keys;
function l2() {
	for (var e, t, r, a = [], s = 0; s < arguments.length; s++) a[s] = arguments[s];
	var i = lI(a), o = oZ(lT(a)) ? a.pop() : void 0, l = function(e) {
		if (1 === e.length) {
			var t, r = e[0];
			if (lZ(r)) return {
				args: r,
				keys: null
			};
			if ((t = r) && "object" == typeof t && lQ(t) === l0) {
				var a = l1(r);
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
	if (0 === c.length) return lH([], i);
	var p = new lm((e = c, t = i, void 0 === (r = u ? function(e) {
		return u.reduce(function(t, r, a) {
			return t[r] = e[a], t;
		}, {});
	} : lf) && (r = lf), function(a) {
		(function(e, t, r) {
			e ? lG(r, e, t) : t();
		})(t, function() {
			for (var s = e.length, i = Array(s), o = s, l = s, c = function(s) {
				(function(e, t, r) {
					e ? lG(r, e, t) : t();
				})(t, function() {
					var c = lH(e[s], t), u = !1;
					c.subscribe(lg(a, function(e) {
						i[s] = e, !u && (u = !0, l--), l || a.next(r(i.slice()));
					}, function() {
						--o || a.complete();
					}));
				}, a);
			}, u = 0; u < s; u++) c(u);
		}, a);
	}));
	return o ? p.pipe(lX(o)) : p;
}
function l4(e, t, r) {
	return (void 0 === r && (r = Infinity), oZ(t)) ? l4(function(r, a) {
		return lY(function(e, s) {
			return t(r, e, a, s);
		})(lU(e(r, a)));
	}, r) : ("number" == typeof t && (r = t), ly(function(t, a) {
		var s, i, o, l, c, u, p, d, f;
		return s = r, o = [], l = 0, c = 0, u = !1, p = function() {
			!u || o.length || l || a.complete();
		}, d = function(e) {
			return l < s ? f(e) : o.push(e);
		}, f = function(t) {
			l++;
			var r = !1;
			lU(e(t, c++)).subscribe(lg(a, function(e) {
				i ? d(e) : a.next(e);
			}, function() {
				r = !0;
			}, void 0, function() {
				if (r) try {
					for (l--; o.length && l < s;) (function() {
						var e = o.shift();
						f(e);
					})();
					p();
				} catch (e) {
					a.error(e);
				}
			}));
		}, t.subscribe(lg(a, d, function() {
			u = !0, p();
		})), function() {};
	}));
}
function l3(e) {
	return void 0 === e && (e = Infinity), l4(lf, e);
}
var l6 = ["addListener", "removeListener"], l8 = ["addEventListener", "removeEventListener"], l7 = ["on", "off"];
function l5(e, t, r, s) {
	if (oZ(r) && (s = r, r = void 0), s) return l5(e, t, r).pipe(lX(s));
	var i, o, l, c = a(oZ((i = e).addEventListener) && oZ(i.removeEventListener) ? l8.map(function(a) {
		return function(s) {
			return e[a](t, s, r);
		};
	}) : oZ((o = e).addListener) && oZ(o.removeListener) ? l6.map(l9(e, t)) : oZ((l = e).on) && oZ(l.off) ? l7.map(l9(e, t)) : [], 2), u = c[0], p = c[1];
	if (!u && lR(e)) return l4(function(e) {
		return l5(e, t, r);
	})(lU(e));
	if (!u) throw TypeError("Invalid event target");
	return new lm(function(e) {
		var t = function() {
			for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
			return e.next(1 < t.length ? t : t[0]);
		};
		return u(t), function() {
			return p(t);
		};
	});
}
function l9(e, t) {
	return function(r) {
		return function(a) {
			return e[r](t, a);
		};
	};
}
function ce(e, t, r) {
	void 0 === e && (e = 0), void 0 === r && (r = lE);
	var a = -1;
	return null != t && (lC(t) ? r = t : a = t), new lm(function(t) {
		var s, i = (s = e) instanceof Date && !isNaN(s) ? e - r.now() : e;
		i < 0 && (i = 0);
		var o = 0;
		return r.schedule(function() {
			t.closed || (t.next(o++), 0 <= a ? this.schedule(void 0, a) : t.complete());
		}, i);
	});
}
function ct() {
	for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
	var a = lI(t), s = (e = Infinity, "number" == typeof lT(t) ? t.pop() : e);
	return t.length ? 1 === t.length ? lU(t[0]) : l3(s)(lH(t, a)) : lP;
}
function cn(e) {
	return e <= 0 ? function() {
		return lP;
	} : ly(function(t, r) {
		var a = 0;
		t.subscribe(lg(r, function(t) {
			++a <= e && (r.next(t), e <= a && r.complete());
		}));
	});
}
function cr(e, t) {
	void 0 === t && (t = lE);
	var r = ce(e, t);
	return function e(t, r) {
		return r ? function(a) {
			return function() {
				for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
				return l3(1)(lH(e, lI(e)));
			}(r.pipe(cn(1), ly(function(e, t) {
				e.subscribe(lg(t, o9));
			})), a.pipe(e(t)));
		} : l4(function(e, r) {
			return lU(t(e, r)).pipe(cn(1), lY(function() {
				return e;
			}));
		});
	}(function() {
		return r;
	});
}
function ca(e, t) {
	return void 0 === t && (t = lf), e = null != e ? e : cs, ly(function(r, a) {
		var s, i = !0;
		r.subscribe(lg(a, function(r) {
			var o = t(r);
			(i || !e(s, o)) && (i = !1, s = o, a.next(r));
		}));
	});
}
function cs(e, t) {
	return e === t;
}
function ci(e, t) {
	return ly(function(r, a) {
		var s = null, i = 0, o = !1, l = function() {
			return o && !s && a.complete();
		};
		r.subscribe(lg(a, function(r) {
			s?.unsubscribe();
			var o = 0, c = i++;
			lU(e(r, c)).subscribe(s = lg(a, function(e) {
				return a.next(t ? t(r, e, c, o++) : e);
			}, function() {
				s = null, l();
			}));
		}, function() {
			o = !0, l();
		}));
	});
}
function co(e, t, r) {
	var a = oZ(e) || t || r ? {
		next: e,
		error: t,
		complete: r
	} : e;
	return a ? ly(function(e, t) {
		null == (r = a.subscribe) || r.call(a);
		var r, s = !0;
		e.subscribe(lg(t, function(e) {
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
	}) : lf;
}
function cl(e, ...t) {
	return (function() {
		for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
		return lh(e);
	})(...t)(lH(e));
}
var cc = class e extends lm {
	static seed(t) {
		return new e(t);
	}
	_value;
	_subject$ = new lb();
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
		let r = eD(e) ? sV(this._value ?? t, e) : e;
		Object.is(r, this._value) || this._subject$.next(this._value = r);
	}
};
let cu = Symbol("forwardRef");
function cp(e) {
	let t = e;
	return new nM((e, r) => ({
		get: () => (e(), t),
		set(e) {
			let a = e?.[cu] ?? e;
			a !== t && (t = a, r());
		}
	}));
}
function cd(e) {
	return (t) => {
		let r = t.subscribe(e);
		r$(() => r.unsubscribe());
	};
}
function cf(e) {
	return (t) => {
		let r;
		rI(() => {
			r = t.subscribe(e);
		}), r$(() => r?.unsubscribe());
	};
}
let ch = (e) => {
	let t = new cc(e), r = new nM((e, r) => ({
		get: () => (e(), t.value),
		set(e) {
			let a = e?.[cu] ?? e;
			Object.is(a, t.value) || (t.next(a), r());
		}
	}));
	return new Proxy(t, {
		get: (e, a) => "next" === a ? (e) => {
			r.value = eD(e) ? sV(t.value, e) : e;
		} : "value" === a ? r.value : t[a] ?? r[a],
		set: (e, t, a) => ("value" === t ? r.value = a : e[t] = a, !0)
	});
};
var cm = (e) => "function" == typeof e ? e : Array.isArray(e) ? () => e : void 0 === e ? e : () => e, cv = (e, t, r) => cy(e, t, r), cy = (e, t, r) => {
	let a, [s, i] = ((e, t) => {
		let { children: r,...a } = e;
		if (r && !Array.isArray(r) && !aV(r) && "object" == typeof r) return [t ? {
			...a,
			key: t
		} : a, r];
		let s = {}, i = {}, o = !1;
		for (let e in a) {
			let t = a[e];
			if (e.startsWith("$")) {
				i[e.slice(1)] = cm(t), o = !0;
				continue;
			}
			s[e] = t;
		}
		let l = cm(r);
		return l && (i.default = l, o = !0), [t ? {
			...s,
			key: t
		} : s, o ? i : void 0];
	})(t, r);
	return (a = e) === aC || "string" == typeof a || "object" == typeof a && a.__isTeleport ? a7(e, s, i?.default?.() ?? (e === aC ? [] : void 0)) : a7(e, s, i);
};
function cg(e) {
	return (t) => cy(ck, {
		renderFn$: t.pipe(lY((t) => () => e(t))),
		children: {}
	});
}
var ck = iT({ renderFn$: iO() }, (e, t) => {
	let r = null;
	cl(e.renderFn$, co((e) => {
		r = e;
	}), cd());
	let a = ch(1);
	return cl(e.renderFn$, co(() => {
		a.value += 1;
	}), cf()), () => a.value ? r?.() : null;
}, { name: "RxSlot" }, { displayName: "RxSlot" });
let cN = (e, t) => {
	let r = new lw(e[t]);
	return ak(() => e[t], (e) => r.next(e)), r;
};
function cb(...e) {
	let t, r = {}, a = {};
	for (let s of e) {
		if (eD(s)) {
			t = s;
			continue;
		}
		eV(t) ? r = s : a = s;
	}
	return iT(r, (e, r) => {
		let a = ((e) => {
			let t = {};
			for (let a in e) {
				var r;
				if (eD(e[a]) || (r = e[a]) && (r instanceof lm || oZ(r.lift) && oZ(r.subscribe))) {
					t[a] = e[a];
					continue;
				}
				t[`${a}$`] = cN(e, a);
			}
			return t;
		})(e), s = new Proxy({}, { get: (t, r) => e[r] ?? a[r] }), i = new Proxy({}, { get: (e, t) => "render" === t ? cg : r[t] }), o = t(s, i);
		return eD(o) ? o : () => o;
	}, a);
}
let c_ = (e) => {
	let t, r = null;
	return co({
		next: (a) => {
			((e, t) => {
				if (eN(e) && eN(t)) {
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
function cw(...e) {
	let t, r, a = {}, s = {};
	for (let r of e) {
		if (eD(r)) {
			t = r;
			continue;
		}
		eV(t) ? a = r : s = r;
	}
	let i = Symbol(s?.name ?? "");
	if (eL(a) && eL(s.props)) {
		let e, r = () => e ??= t({});
		return iI(iT({
			value: iO().optional(),
			$default: iO().optional()
		}, (e, { slots: t }) => (r7(i, e.value ?? r()), () => t.default?.()), {
			...s,
			name: `Provide(${s?.name ?? ""})`
		}, { displayName: "Provider" }), { use: () => r5(i, r, !0) });
	}
	let o = ib(a);
	return iI(iT({
		...a,
		$default: iO().optional()
	}, (e, { slots: a }) => (r7(i, r = t(e)), () => a.default?.()), {
		...s,
		name: `Provide(${s?.name ?? ""})`
	}, { displayName: "Provider" }), { use: () => r5(i, () => r ??= t(o.create({})), !0) });
}
var cx = iT(() => {
	let e = nj(1);
	return () => cv("div", {
		style: {
			display: "flex",
			gap: "1rem"
		},
		children: [cv("div", { children: ["Counts: ", e.value] }), cy("button", {
			onClick: () => e.value++,
			children: "Click To Count"
		})]
	});
}), cO = iT({
	value: im().optional().default("1"),
	type: ik(["text", "number"]),
	onValueChange: iO()
}, (e, { emit: t }) => () => cy("input", {
	value: e.value,
	onInput: (e) => {
		t("value-change", e.target.value);
	}
}), { displayName: "TextInput" }), cS = iT({
	$title: iO().optional(),
	$item: iO().optional(),
	$default: iO().optional()
}, ({}, { slots: e }) => () => cv("dl", { children: [
	cy("dt", { children: "default" }),
	cy("dd", { children: e.default?.() }),
	cy("dt", { children: "title" }),
	cy("dd", { children: e.title?.() }),
	cy("dt", { children: "item" }),
	cy("dd", { children: [{
		label: "1",
		value: "1"
	}, {
		label: "2",
		value: "2"
	}].map((t) => e.item?.(t)) })
] }), { displayName: "List" }), cA = iT(() => {
	let e = nj("");
	return () => cy(cS, {
		$title: cv("div", { children: ["Inputted: ", e.value] }),
		$item: (e) => cy("div", { children: e.label }),
		children: cy(cO, {
			type: "text",
			onValueChange: (t) => {
				e.value = t;
			}
		})
	});
});
function cj(e) {
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
	return cv(aC, { children: [
		cy(t.p, { children: "为了更好的 TypeScript 和 JSX 的支持，重新抽象了定义组件的方式" }),
		"\n",
		cy(t.p, { children: "一般组件：" }),
		"\n",
		cv(t.div, {
			"data-example": "",
			children: [cy(t.div, {
				"data-example-container": "",
				children: cy(t.codeblock4b227777, {})
			}), cy(t.pre, {
				className: "language-tsx",
				children: cv(t.code, {
					className: "language-tsx",
					children: [
						cy(t.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						cv(t.span, {
							className: "token imports",
							children: [
								cy(t.span, {
									className: "token punctuation",
									children: "{"
								}),
								" component ",
								cy(t.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						cy(t.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						cy(t.span, {
							className: "token string",
							children: "\"@innoai-tech/vuekit\""
						}),
						cy(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						cy(t.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						cv(t.span, {
							className: "token imports",
							children: [
								cy(t.span, {
									className: "token punctuation",
									children: "{"
								}),
								" ref ",
								cy(t.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						cy(t.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						cy(t.span, {
							className: "token string",
							children: "\"vue\""
						}),
						cy(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n",
						cy(t.span, {
							className: "token keyword module",
							children: "export"
						}),
						" ",
						cy(t.span, {
							className: "token keyword module",
							children: "default"
						}),
						" ",
						cy(t.span, {
							className: "token function",
							children: "component"
						}),
						cy(t.span, {
							className: "token punctuation",
							children: "("
						}),
						cy(t.span, {
							className: "token punctuation",
							children: "("
						}),
						cy(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						cy(t.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						cy(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n  ",
						cy(t.span, {
							className: "token keyword",
							children: "const"
						}),
						" count ",
						cy(t.span, {
							className: "token operator",
							children: "="
						}),
						" ",
						cy(t.span, {
							className: "token function",
							children: "ref"
						}),
						cy(t.span, {
							className: "token punctuation",
							children: "("
						}),
						cy(t.span, {
							className: "token number",
							children: "1"
						}),
						cy(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						cy(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n  ",
						cy(t.span, {
							className: "token keyword control-flow",
							children: "return"
						}),
						" ",
						cy(t.span, {
							className: "token punctuation",
							children: "("
						}),
						cy(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						cy(t.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						cy(t.span, {
							className: "token punctuation",
							children: "("
						}),
						"\n    ",
						cv(t.span, {
							className: "token tag",
							children: [
								cv(t.span, {
									className: "token tag",
									children: [cy(t.span, {
										className: "token punctuation",
										children: "<"
									}), "div"]
								}),
								" ",
								cy(t.span, {
									className: "token attr-name",
									children: "style"
								}),
								cv(t.span, {
									className: "token script language-javascript",
									children: [
										cy(t.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										cy(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										cy(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										" display",
										cy(t.span, {
											className: "token operator",
											children: ":"
										}),
										" ",
										cy(t.span, {
											className: "token string",
											children: "\"flex\""
										}),
										cy(t.span, {
											className: "token punctuation",
											children: ","
										}),
										" gap",
										cy(t.span, {
											className: "token operator",
											children: ":"
										}),
										" ",
										cy(t.span, {
											className: "token string",
											children: "\"1rem\""
										}),
										" ",
										cy(t.span, {
											className: "token punctuation",
											children: "}"
										}),
										cy(t.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								cy(t.span, {
									className: "token punctuation",
									children: ">"
								})
							]
						}),
						cy(t.span, {
							className: "token plain-text",
							children: "\n      "
						}),
						cv(t.span, {
							className: "token tag",
							children: [cv(t.span, {
								className: "token tag",
								children: [cy(t.span, {
									className: "token punctuation",
									children: "<"
								}), "div"]
							}), cy(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						cy(t.span, {
							className: "token plain-text",
							children: "Counts: "
						}),
						cy(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						"count",
						cy(t.span, {
							className: "token punctuation",
							children: "."
						}),
						cy(t.span, {
							className: "token property-access",
							children: "value"
						}),
						cy(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						cv(t.span, {
							className: "token tag",
							children: [cv(t.span, {
								className: "token tag",
								children: [cy(t.span, {
									className: "token punctuation",
									children: "</"
								}), "div"]
							}), cy(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						cy(t.span, {
							className: "token plain-text",
							children: "\n      "
						}),
						cv(t.span, {
							className: "token tag",
							children: [
								cv(t.span, {
									className: "token tag",
									children: [cy(t.span, {
										className: "token punctuation",
										children: "<"
									}), "button"]
								}),
								" ",
								cy(t.span, {
									className: "token attr-name",
									children: "onClick"
								}),
								cv(t.span, {
									className: "token script language-javascript",
									children: [
										cy(t.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										cy(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										cy(t.span, {
											className: "token punctuation",
											children: "("
										}),
										cy(t.span, {
											className: "token punctuation",
											children: ")"
										}),
										" ",
										cy(t.span, {
											className: "token arrow operator",
											children: "=>"
										}),
										" count",
										cy(t.span, {
											className: "token punctuation",
											children: "."
										}),
										cy(t.span, {
											className: "token property-access",
											children: "value"
										}),
										cy(t.span, {
											className: "token operator",
											children: "++"
										}),
										cy(t.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								cy(t.span, {
									className: "token punctuation",
									children: ">"
								})
							]
						}),
						cy(t.span, {
							className: "token plain-text",
							children: "Click To Count"
						}),
						cv(t.span, {
							className: "token tag",
							children: [cv(t.span, {
								className: "token tag",
								children: [cy(t.span, {
									className: "token punctuation",
									children: "</"
								}), "button"]
							}), cy(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						cy(t.span, {
							className: "token plain-text",
							children: "\n    "
						}),
						cv(t.span, {
							className: "token tag",
							children: [cv(t.span, {
								className: "token tag",
								children: [cy(t.span, {
									className: "token punctuation",
									children: "</"
								}), "div"]
							}), cy(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						"\n  ",
						cy(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						cy(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						cy(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						cy(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						cy(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n"
					]
				})
			})]
		}),
		"\n",
		cy(t.p, { children: "可复用组件：" }),
		"\n",
		cv(t.ul, { children: [
			"\n",
			cv(t.li, { children: [
				cy(t.code, { children: "props" }),
				" 和 ",
				cy(t.code, { children: "emits" }),
				" 合并声明"
			] }),
			"\n"
		] }),
		"\n",
		cv(t.div, {
			"data-example": "",
			children: [cy(t.div, {
				"data-example-container": "",
				children: cy(t.codeblock4a44dc15, {})
			}), cy(t.pre, {
				className: "language-tsx",
				children: cv(t.code, {
					className: "language-tsx",
					children: [
						cy(t.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						cy(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						" component",
						cy(t.span, {
							className: "token punctuation",
							children: ","
						}),
						" t",
						cy(t.span, {
							className: "token punctuation",
							children: ","
						}),
						" ",
						cy(t.span, {
							className: "token keyword",
							children: "type"
						}),
						" ",
						cy(t.span, {
							className: "token class-name",
							children: cy(t.span, {
								className: "token maybe-class-name",
								children: "VNode"
							})
						}),
						cy(t.span, {
							className: "token punctuation",
							children: ","
						}),
						" ",
						cy(t.span, {
							className: "token keyword",
							children: "type"
						}),
						" ",
						cy(t.span, {
							className: "token class-name",
							children: cy(t.span, {
								className: "token maybe-class-name",
								children: "VNodeChild"
							})
						}),
						" ",
						cy(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						" ",
						cy(t.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						cy(t.span, {
							className: "token string",
							children: "\"@innoai-tech/vuekit\""
						}),
						cy(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						cy(t.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						cv(t.span, {
							className: "token imports",
							children: [
								cy(t.span, {
									className: "token punctuation",
									children: "{"
								}),
								" ref ",
								cy(t.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						cy(t.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						cy(t.span, {
							className: "token string",
							children: "\"vue\""
						}),
						cy(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n",
						cy(t.span, {
							className: "token keyword module",
							children: "export"
						}),
						" ",
						cy(t.span, {
							className: "token keyword",
							children: "const"
						}),
						" ",
						cy(t.span, {
							className: "token maybe-class-name",
							children: "TextInput"
						}),
						" ",
						cy(t.span, {
							className: "token operator",
							children: "="
						}),
						" ",
						cy(t.span, {
							className: "token function",
							children: "component"
						}),
						cy(t.span, {
							className: "token punctuation",
							children: "("
						}),
						"\n  ",
						cy(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n    ",
						cy(t.span, {
							className: "token comment",
							children: "// VUE 的注册机制（Proxy 定义基准，以及从 attrs 中提取 props 的 emits 的依据）"
						}),
						"\n    ",
						cy(t.span, {
							className: "token comment",
							children: "// 必须声明，哪怕只是属性名称"
						}),
						"\n    ",
						cy(t.span, {
							className: "token comment",
							children: "//"
						}),
						"\n    ",
						cy(t.span, {
							className: "token comment",
							children: "// 又由于 TypeString 的老问题  https://www.typescriptneedstypes.com/#the-problem"
						}),
						"\n    ",
						cy(t.span, {
							className: "token comment",
							children: "// 类型定义无法转为 Runtime 对象"
						}),
						"\n    value",
						cy(t.span, {
							className: "token operator",
							children: ":"
						}),
						" t",
						cy(t.span, {
							className: "token punctuation",
							children: "."
						}),
						cy(t.span, {
							className: "token method function property-access",
							children: "string"
						}),
						cy(t.span, {
							className: "token punctuation",
							children: "("
						}),
						cy(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						cy(t.span, {
							className: "token punctuation",
							children: "."
						}),
						cy(t.span, {
							className: "token method function property-access",
							children: "optional"
						}),
						cy(t.span, {
							className: "token punctuation",
							children: "("
						}),
						cy(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						cy(t.span, {
							className: "token punctuation",
							children: "."
						}),
						cy(t.span, {
							className: "token keyword module",
							children: "default"
						}),
						cy(t.span, {
							className: "token punctuation",
							children: "("
						}),
						cy(t.span, {
							className: "token string",
							children: "\"1\""
						}),
						cy(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						cy(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n    type",
						cy(t.span, {
							className: "token operator",
							children: ":"
						}),
						" t",
						cy(t.span, {
							className: "token punctuation",
							children: "."
						}),
						cy(t.span, {
							className: "token method function property-access",
							children: "enums"
						}),
						cy(t.span, {
							className: "token punctuation",
							children: "("
						}),
						cy(t.span, {
							className: "token punctuation",
							children: "["
						}),
						cy(t.span, {
							className: "token string",
							children: "\"text\""
						}),
						cy(t.span, {
							className: "token punctuation",
							children: ","
						}),
						" ",
						cy(t.span, {
							className: "token string",
							children: "\"number\""
						}),
						cy(t.span, {
							className: "token punctuation",
							children: "]"
						}),
						cy(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						cy(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n\n    ",
						cy(t.span, {
							className: "token comment",
							children: "// on[A-Z] 前缀视为 emits"
						}),
						"\n    onValueChange",
						cy(t.span, {
							className: "token operator",
							children: ":"
						}),
						" t",
						cy(t.span, {
							className: "token punctuation",
							children: "."
						}),
						cy(t.span, {
							className: "token property-access",
							children: "custom"
						}),
						cy(t.span, {
							className: "token operator",
							children: "<"
						}),
						cy(t.span, {
							className: "token punctuation",
							children: "("
						}),
						"v",
						cy(t.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						cy(t.span, {
							className: "token builtin",
							children: "string"
						}),
						cy(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						cy(t.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						cy(t.span, {
							className: "token keyword",
							children: "void"
						}),
						cy(t.span, {
							className: "token operator",
							children: ">"
						}),
						cy(t.span, {
							className: "token punctuation",
							children: "("
						}),
						cy(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						cy(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n  ",
						cy(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						cy(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n  ",
						cy(t.span, {
							className: "token punctuation",
							children: "("
						}),
						"props",
						cy(t.span, {
							className: "token punctuation",
							children: ","
						}),
						" ",
						cy(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						" emit ",
						cy(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						cy(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						cy(t.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						cy(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n    ",
						cy(t.span, {
							className: "token comment",
							children: "// setup"
						}),
						"\n\n    ",
						cy(t.span, {
							className: "token keyword control-flow",
							children: "return"
						}),
						" ",
						cy(t.span, {
							className: "token punctuation",
							children: "("
						}),
						cy(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						cy(t.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						cy(t.span, {
							className: "token punctuation",
							children: "("
						}),
						"\n      ",
						cv(t.span, {
							className: "token tag",
							children: [
								cv(t.span, {
									className: "token tag",
									children: [cy(t.span, {
										className: "token punctuation",
										children: "<"
									}), "input"]
								}),
								"\n        ",
								cy(t.span, {
									className: "token attr-name",
									children: "value"
								}),
								cv(t.span, {
									className: "token script language-javascript",
									children: [
										cy(t.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										cy(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										"props",
										cy(t.span, {
											className: "token punctuation",
											children: "."
										}),
										cy(t.span, {
											className: "token property-access",
											children: "value"
										}),
										cy(t.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n        ",
								cy(t.span, {
									className: "token attr-name",
									children: "onInput"
								}),
								cv(t.span, {
									className: "token script language-javascript",
									children: [
										cy(t.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										cy(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										cy(t.span, {
											className: "token punctuation",
											children: "("
										}),
										"e",
										cy(t.span, {
											className: "token punctuation",
											children: ")"
										}),
										" ",
										cy(t.span, {
											className: "token arrow operator",
											children: "=>"
										}),
										" ",
										cy(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										"\n          ",
										cy(t.span, {
											className: "token function",
											children: "emit"
										}),
										cy(t.span, {
											className: "token punctuation",
											children: "("
										}),
										cy(t.span, {
											className: "token string",
											children: "\"value-change\""
										}),
										cy(t.span, {
											className: "token punctuation",
											children: ","
										}),
										" ",
										cy(t.span, {
											className: "token punctuation",
											children: "("
										}),
										"e",
										cy(t.span, {
											className: "token punctuation",
											children: "."
										}),
										cy(t.span, {
											className: "token property-access",
											children: "target"
										}),
										" ",
										cy(t.span, {
											className: "token keyword module",
											children: "as"
										}),
										" ",
										cy(t.span, {
											className: "token maybe-class-name",
											children: "HTMLInputElement"
										}),
										cy(t.span, {
											className: "token punctuation",
											children: ")"
										}),
										cy(t.span, {
											className: "token punctuation",
											children: "."
										}),
										cy(t.span, {
											className: "token property-access",
											children: "value"
										}),
										cy(t.span, {
											className: "token punctuation",
											children: ")"
										}),
										cy(t.span, {
											className: "token punctuation",
											children: ";"
										}),
										"\n        ",
										cy(t.span, {
											className: "token punctuation",
											children: "}"
										}),
										cy(t.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n      ",
								cy(t.span, {
									className: "token punctuation",
									children: "/>"
								})
							]
						}),
						"\n    ",
						cy(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						cy(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n  ",
						cy(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						cy(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n",
						cy(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						cy(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n",
						cy(t.span, {
							className: "token keyword module",
							children: "export"
						}),
						" ",
						cy(t.span, {
							className: "token keyword",
							children: "interface"
						}),
						" ",
						cy(t.span, {
							className: "token class-name",
							children: cy(t.span, {
								className: "token maybe-class-name",
								children: "Option"
							})
						}),
						" ",
						cy(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n  label",
						cy(t.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						cy(t.span, {
							className: "token builtin",
							children: "string"
						}),
						cy(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n  value",
						cy(t.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						cy(t.span, {
							className: "token builtin",
							children: "string"
						}),
						cy(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						cy(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						"\n\n",
						cy(t.span, {
							className: "token keyword module",
							children: "export"
						}),
						" ",
						cy(t.span, {
							className: "token keyword",
							children: "const"
						}),
						" ",
						cy(t.span, {
							className: "token maybe-class-name",
							children: "List"
						}),
						" ",
						cy(t.span, {
							className: "token operator",
							children: "="
						}),
						" ",
						cy(t.span, {
							className: "token function",
							children: "component"
						}),
						cy(t.span, {
							className: "token punctuation",
							children: "("
						}),
						"\n  ",
						cy(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n    ",
						cy(t.span, {
							className: "token comment",
							children: "// $ 前缀视为 slots"
						}),
						"\n    $title",
						cy(t.span, {
							className: "token operator",
							children: ":"
						}),
						" t",
						cy(t.span, {
							className: "token punctuation",
							children: "."
						}),
						cy(t.span, {
							className: "token property-access",
							children: "custom"
						}),
						cy(t.span, {
							className: "token operator",
							children: "<"
						}),
						cy(t.span, {
							className: "token maybe-class-name",
							children: "VNodeChild"
						}),
						cy(t.span, {
							className: "token operator",
							children: ">"
						}),
						cy(t.span, {
							className: "token punctuation",
							children: "("
						}),
						cy(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						cy(t.span, {
							className: "token punctuation",
							children: "."
						}),
						cy(t.span, {
							className: "token method function property-access",
							children: "optional"
						}),
						cy(t.span, {
							className: "token punctuation",
							children: "("
						}),
						cy(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						cy(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n    ",
						cy(t.span, {
							className: "token comment",
							children: "// renderProp"
						}),
						"\n    $item",
						cy(t.span, {
							className: "token operator",
							children: ":"
						}),
						" t",
						cy(t.span, {
							className: "token punctuation",
							children: "."
						}),
						cy(t.span, {
							className: "token property-access",
							children: "custom"
						}),
						cy(t.span, {
							className: "token operator",
							children: "<"
						}),
						cy(t.span, {
							className: "token punctuation",
							children: "("
						}),
						"option",
						cy(t.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						cy(t.span, {
							className: "token maybe-class-name",
							children: "Option"
						}),
						cy(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						cy(t.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						cy(t.span, {
							className: "token maybe-class-name",
							children: "VNode"
						}),
						cy(t.span, {
							className: "token operator",
							children: ">"
						}),
						cy(t.span, {
							className: "token punctuation",
							children: "("
						}),
						cy(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						cy(t.span, {
							className: "token punctuation",
							children: "."
						}),
						cy(t.span, {
							className: "token method function property-access",
							children: "optional"
						}),
						cy(t.span, {
							className: "token punctuation",
							children: "("
						}),
						cy(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						cy(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n\n    $",
						cy(t.span, {
							className: "token keyword module",
							children: "default"
						}),
						cy(t.span, {
							className: "token operator",
							children: ":"
						}),
						" t",
						cy(t.span, {
							className: "token punctuation",
							children: "."
						}),
						cy(t.span, {
							className: "token property-access",
							children: "custom"
						}),
						cy(t.span, {
							className: "token operator",
							children: "<"
						}),
						cy(t.span, {
							className: "token maybe-class-name",
							children: "VNodeChild"
						}),
						cy(t.span, {
							className: "token operator",
							children: ">"
						}),
						cy(t.span, {
							className: "token punctuation",
							children: "("
						}),
						cy(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						cy(t.span, {
							className: "token punctuation",
							children: "."
						}),
						cy(t.span, {
							className: "token method function property-access",
							children: "optional"
						}),
						cy(t.span, {
							className: "token punctuation",
							children: "("
						}),
						cy(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						cy(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n\n    ",
						cy(t.span, {
							className: "token comment",
							children: "// 以此避免多插槽时 children slots object 的写法, 且无类型约束，"
						}),
						"\n    ",
						cy(t.span, {
							className: "token comment",
							children: "// {{ default: () => VNode, title: () => VNode, item: (option: Option) => VNode }}"
						}),
						"\n  ",
						cy(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						cy(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n  ",
						cy(t.span, {
							className: "token punctuation",
							children: "("
						}),
						cy(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						cy(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						cy(t.span, {
							className: "token punctuation",
							children: ","
						}),
						" ",
						cy(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						" slots ",
						cy(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						cy(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						cy(t.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						"\n    ",
						cy(t.span, {
							className: "token punctuation",
							children: "("
						}),
						cy(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						cy(t.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						cy(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n      ",
						cy(t.span, {
							className: "token keyword",
							children: "const"
						}),
						" options ",
						cy(t.span, {
							className: "token operator",
							children: "="
						}),
						" ",
						cy(t.span, {
							className: "token punctuation",
							children: "["
						}),
						"\n        ",
						cy(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n          label",
						cy(t.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						cy(t.span, {
							className: "token string",
							children: "\"1\""
						}),
						cy(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n          value",
						cy(t.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						cy(t.span, {
							className: "token string",
							children: "\"1\""
						}),
						cy(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n        ",
						cy(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						cy(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n        ",
						cy(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n          label",
						cy(t.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						cy(t.span, {
							className: "token string",
							children: "\"2\""
						}),
						cy(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n          value",
						cy(t.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						cy(t.span, {
							className: "token string",
							children: "\"2\""
						}),
						cy(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n        ",
						cy(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						cy(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n      ",
						cy(t.span, {
							className: "token punctuation",
							children: "]"
						}),
						cy(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n      ",
						cy(t.span, {
							className: "token keyword control-flow",
							children: "return"
						}),
						" ",
						cy(t.span, {
							className: "token punctuation",
							children: "("
						}),
						"\n        ",
						cv(t.span, {
							className: "token tag",
							children: [cv(t.span, {
								className: "token tag",
								children: [cy(t.span, {
									className: "token punctuation",
									children: "<"
								}), "dl"]
							}), cy(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						cy(t.span, {
							className: "token plain-text",
							children: "\n          "
						}),
						cv(t.span, {
							className: "token tag",
							children: [cv(t.span, {
								className: "token tag",
								children: [cy(t.span, {
									className: "token punctuation",
									children: "<"
								}), "dt"]
							}), cy(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						cy(t.span, {
							className: "token plain-text",
							children: "default"
						}),
						cv(t.span, {
							className: "token tag",
							children: [cv(t.span, {
								className: "token tag",
								children: [cy(t.span, {
									className: "token punctuation",
									children: "</"
								}), "dt"]
							}), cy(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						cy(t.span, {
							className: "token plain-text",
							children: "\n          "
						}),
						cv(t.span, {
							className: "token tag",
							children: [cv(t.span, {
								className: "token tag",
								children: [cy(t.span, {
									className: "token punctuation",
									children: "<"
								}), "dd"]
							}), cy(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						cy(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						"slots",
						cy(t.span, {
							className: "token punctuation",
							children: "."
						}),
						cy(t.span, {
							className: "token keyword module",
							children: "default"
						}),
						cy(t.span, {
							className: "token operator",
							children: "?."
						}),
						cy(t.span, {
							className: "token punctuation",
							children: "("
						}),
						cy(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						cy(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						cv(t.span, {
							className: "token tag",
							children: [cv(t.span, {
								className: "token tag",
								children: [cy(t.span, {
									className: "token punctuation",
									children: "</"
								}), "dd"]
							}), cy(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						cy(t.span, {
							className: "token plain-text",
							children: "\n          "
						}),
						cv(t.span, {
							className: "token tag",
							children: [cv(t.span, {
								className: "token tag",
								children: [cy(t.span, {
									className: "token punctuation",
									children: "<"
								}), "dt"]
							}), cy(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						cy(t.span, {
							className: "token plain-text",
							children: "title"
						}),
						cv(t.span, {
							className: "token tag",
							children: [cv(t.span, {
								className: "token tag",
								children: [cy(t.span, {
									className: "token punctuation",
									children: "</"
								}), "dt"]
							}), cy(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						cy(t.span, {
							className: "token plain-text",
							children: "\n          "
						}),
						cv(t.span, {
							className: "token tag",
							children: [cv(t.span, {
								className: "token tag",
								children: [cy(t.span, {
									className: "token punctuation",
									children: "<"
								}), "dd"]
							}), cy(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						cy(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						"slots",
						cy(t.span, {
							className: "token punctuation",
							children: "."
						}),
						cy(t.span, {
							className: "token property-access",
							children: "title"
						}),
						cy(t.span, {
							className: "token operator",
							children: "?."
						}),
						cy(t.span, {
							className: "token punctuation",
							children: "("
						}),
						cy(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						cy(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						cv(t.span, {
							className: "token tag",
							children: [cv(t.span, {
								className: "token tag",
								children: [cy(t.span, {
									className: "token punctuation",
									children: "</"
								}), "dd"]
							}), cy(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						cy(t.span, {
							className: "token plain-text",
							children: "\n          "
						}),
						cv(t.span, {
							className: "token tag",
							children: [cv(t.span, {
								className: "token tag",
								children: [cy(t.span, {
									className: "token punctuation",
									children: "<"
								}), "dt"]
							}), cy(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						cy(t.span, {
							className: "token plain-text",
							children: "item"
						}),
						cv(t.span, {
							className: "token tag",
							children: [cv(t.span, {
								className: "token tag",
								children: [cy(t.span, {
									className: "token punctuation",
									children: "</"
								}), "dt"]
							}), cy(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						cy(t.span, {
							className: "token plain-text",
							children: "\n          "
						}),
						cv(t.span, {
							className: "token tag",
							children: [cv(t.span, {
								className: "token tag",
								children: [cy(t.span, {
									className: "token punctuation",
									children: "<"
								}), "dd"]
							}), cy(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						cy(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						"options",
						cy(t.span, {
							className: "token punctuation",
							children: "."
						}),
						cy(t.span, {
							className: "token method function property-access",
							children: "map"
						}),
						cy(t.span, {
							className: "token punctuation",
							children: "("
						}),
						cy(t.span, {
							className: "token punctuation",
							children: "("
						}),
						"option",
						cy(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						cy(t.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" slots",
						cy(t.span, {
							className: "token punctuation",
							children: "."
						}),
						cy(t.span, {
							className: "token property-access",
							children: "item"
						}),
						cy(t.span, {
							className: "token operator",
							children: "?."
						}),
						cy(t.span, {
							className: "token punctuation",
							children: "("
						}),
						"option",
						cy(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						cy(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						cy(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						cv(t.span, {
							className: "token tag",
							children: [cv(t.span, {
								className: "token tag",
								children: [cy(t.span, {
									className: "token punctuation",
									children: "</"
								}), "dd"]
							}), cy(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						cy(t.span, {
							className: "token plain-text",
							children: "\n        "
						}),
						cv(t.span, {
							className: "token tag",
							children: [cv(t.span, {
								className: "token tag",
								children: [cy(t.span, {
									className: "token punctuation",
									children: "</"
								}), "dl"]
							}), cy(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						"\n      ",
						cy(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						cy(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n    ",
						cy(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						cy(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n",
						cy(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						cy(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n",
						cy(t.span, {
							className: "token keyword module",
							children: "export"
						}),
						" ",
						cy(t.span, {
							className: "token keyword module",
							children: "default"
						}),
						" ",
						cy(t.span, {
							className: "token function",
							children: "component"
						}),
						cy(t.span, {
							className: "token punctuation",
							children: "("
						}),
						cy(t.span, {
							className: "token punctuation",
							children: "("
						}),
						cy(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						cy(t.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						cy(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n  ",
						cy(t.span, {
							className: "token keyword",
							children: "const"
						}),
						" inputValue ",
						cy(t.span, {
							className: "token operator",
							children: "="
						}),
						" ",
						cy(t.span, {
							className: "token function",
							children: "ref"
						}),
						cy(t.span, {
							className: "token punctuation",
							children: "("
						}),
						cy(t.span, {
							className: "token string",
							children: "\"\""
						}),
						cy(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						cy(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n  ",
						cy(t.span, {
							className: "token keyword control-flow",
							children: "return"
						}),
						" ",
						cy(t.span, {
							className: "token punctuation",
							children: "("
						}),
						cy(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						cy(t.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						cy(t.span, {
							className: "token punctuation",
							children: "("
						}),
						"\n    ",
						cv(t.span, {
							className: "token tag",
							children: [
								cv(t.span, {
									className: "token tag",
									children: [cy(t.span, {
										className: "token punctuation",
										children: "<"
									}), cy(t.span, {
										className: "token class-name",
										children: "List"
									})]
								}),
								"\n      ",
								cy(t.span, {
									className: "token attr-name",
									children: "$title"
								}),
								cv(t.span, {
									className: "token script language-javascript",
									children: [
										cy(t.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										cy(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										cv(t.span, {
											className: "token tag",
											children: [cv(t.span, {
												className: "token tag",
												children: [cy(t.span, {
													className: "token punctuation",
													children: "<"
												}), "div"]
											}), cy(t.span, {
												className: "token punctuation",
												children: ">"
											})]
										}),
										cy(t.span, {
											className: "token plain-text",
											children: "Inputted: "
										}),
										cy(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										"inputValue",
										cy(t.span, {
											className: "token punctuation",
											children: "."
										}),
										cy(t.span, {
											className: "token property-access",
											children: "value"
										}),
										cy(t.span, {
											className: "token punctuation",
											children: "}"
										}),
										cv(t.span, {
											className: "token tag",
											children: [cv(t.span, {
												className: "token tag",
												children: [cy(t.span, {
													className: "token punctuation",
													children: "</"
												}), "div"]
											}), cy(t.span, {
												className: "token punctuation",
												children: ">"
											})]
										}),
										cy(t.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n      ",
								cy(t.span, {
									className: "token attr-name",
									children: "$item"
								}),
								cv(t.span, {
									className: "token script language-javascript",
									children: [
										cy(t.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										cy(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										cy(t.span, {
											className: "token punctuation",
											children: "("
										}),
										"o",
										cy(t.span, {
											className: "token punctuation",
											children: ")"
										}),
										" ",
										cy(t.span, {
											className: "token arrow operator",
											children: "=>"
										}),
										" ",
										cv(t.span, {
											className: "token tag",
											children: [cv(t.span, {
												className: "token tag",
												children: [cy(t.span, {
													className: "token punctuation",
													children: "<"
												}), "div"]
											}), cy(t.span, {
												className: "token punctuation",
												children: ">"
											})]
										}),
										cy(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										"o",
										cy(t.span, {
											className: "token punctuation",
											children: "."
										}),
										cy(t.span, {
											className: "token property-access",
											children: "label"
										}),
										cy(t.span, {
											className: "token punctuation",
											children: "}"
										}),
										cv(t.span, {
											className: "token tag",
											children: [cv(t.span, {
												className: "token tag",
												children: [cy(t.span, {
													className: "token punctuation",
													children: "</"
												}), "div"]
											}), cy(t.span, {
												className: "token punctuation",
												children: ">"
											})]
										}),
										cy(t.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n    ",
								cy(t.span, {
									className: "token punctuation",
									children: ">"
								})
							]
						}),
						cy(t.span, {
							className: "token plain-text",
							children: "\n      "
						}),
						cv(t.span, {
							className: "token tag",
							children: [
								cv(t.span, {
									className: "token tag",
									children: [cy(t.span, {
										className: "token punctuation",
										children: "<"
									}), cy(t.span, {
										className: "token class-name",
										children: "TextInput"
									})]
								}),
								"\n        ",
								cy(t.span, {
									className: "token attr-name",
									children: "type"
								}),
								cv(t.span, {
									className: "token script language-javascript",
									children: [
										cy(t.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										cy(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										cy(t.span, {
											className: "token string",
											children: "\"text\""
										}),
										cy(t.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n        ",
								cy(t.span, {
									className: "token attr-name",
									children: "onValueChange"
								}),
								cv(t.span, {
									className: "token script language-javascript",
									children: [
										cy(t.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										cy(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										cy(t.span, {
											className: "token punctuation",
											children: "("
										}),
										"value",
										cy(t.span, {
											className: "token punctuation",
											children: ")"
										}),
										" ",
										cy(t.span, {
											className: "token arrow operator",
											children: "=>"
										}),
										" ",
										cy(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										"\n          inputValue",
										cy(t.span, {
											className: "token punctuation",
											children: "."
										}),
										cy(t.span, {
											className: "token property-access",
											children: "value"
										}),
										" ",
										cy(t.span, {
											className: "token operator",
											children: "="
										}),
										" value",
										cy(t.span, {
											className: "token punctuation",
											children: ";"
										}),
										"\n        ",
										cy(t.span, {
											className: "token punctuation",
											children: "}"
										}),
										cy(t.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n      ",
								cy(t.span, {
									className: "token punctuation",
									children: "/>"
								})
							]
						}),
						cy(t.span, {
							className: "token plain-text",
							children: "\n    "
						}),
						cv(t.span, {
							className: "token tag",
							children: [cv(t.span, {
								className: "token tag",
								children: [cy(t.span, {
									className: "token punctuation",
									children: "</"
								}), cy(t.span, {
									className: "token class-name",
									children: "List"
								})]
							}), cy(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						"\n  ",
						cy(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						cy(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						cy(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						cy(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						cy(t.span, {
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
function cE(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? cy(t, {
		...e,
		children: cy(cj, { ...e })
	}) : cj(e);
}
var cP = rN(() => () => a7(cE, { components: {
	codeblock4b227777: cx,
	codeblock4a44dc15: cA
} })), cC = cb((e, { emit: t }) => {
	var r;
	let a = ch(e.value ?? "1");
	return cl(a, (void 0 === r && (r = lE), ly(function(e, t) {
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
		e.subscribe(lg(t, function(e) {
			s = e, i = r.now(), a || (a = r.schedule(l, 300), t.add(a));
		}, function() {
			o(), t.complete();
		}, void 0, function() {
			s = a = null;
		}));
	})), cd((e) => t("value-change", e))), cl(a, cg((e) => cy("input", {
		value: e,
		onInput: (e) => {
			a.value = e.target.value;
		}
	})));
}, {
	displayName: "TextDebounceInput",
	props: ["value"],
	emits: ["value-change"]
}), cT = iT(() => {
	let e = nj("default");
	return () => cy("div", { children: cv("div", {
		style: {
			display: "flex",
			gap: "1rem"
		},
		children: [cy(cC, {
			value: e.value,
			onValueChange: (t) => {
				e.value = t;
			}
		}), cv("div", { children: ["Inputted: ", e.value] })]
	}) });
});
function cI(e) {
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
	return cv(aC, { children: [
		cv(t.p, { children: [
			"和 ",
			cy(t.a, {
				href: "https://rxjs.dev/",
				children: "rxjs"
			}),
			" 集成"
		] }),
		"\n",
		cv(t.div, {
			"data-example": "",
			children: [cy(t.div, {
				"data-example-container": "",
				children: cy(t.codeblockd4735e3a, {})
			}), cy(t.pre, {
				className: "language-tsx",
				children: cv(t.code, {
					className: "language-tsx",
					children: [
						cy(t.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						cv(t.span, {
							className: "token imports",
							children: [
								cy(t.span, {
									className: "token punctuation",
									children: "{"
								}),
								"\n  component",
								cy(t.span, {
									className: "token punctuation",
									children: ","
								}),
								"\n  component$",
								cy(t.span, {
									className: "token punctuation",
									children: ","
								}),
								"\n  observableRef",
								cy(t.span, {
									className: "token punctuation",
									children: ","
								}),
								"\n  render",
								cy(t.span, {
									className: "token punctuation",
									children: ","
								}),
								"\n  rx",
								cy(t.span, {
									className: "token punctuation",
									children: ","
								}),
								"\n  subscribeUntilUnmount",
								cy(t.span, {
									className: "token punctuation",
									children: ","
								}),
								"\n",
								cy(t.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						cy(t.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						cy(t.span, {
							className: "token string",
							children: "\"@innoai-tech/vuekit\""
						}),
						cy(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						cy(t.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						cv(t.span, {
							className: "token imports",
							children: [
								cy(t.span, {
									className: "token punctuation",
									children: "{"
								}),
								" ref ",
								cy(t.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						cy(t.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						cy(t.span, {
							className: "token string",
							children: "\"vue\""
						}),
						cy(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						cy(t.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						cv(t.span, {
							className: "token imports",
							children: [
								cy(t.span, {
									className: "token punctuation",
									children: "{"
								}),
								" debounceTime ",
								cy(t.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						cy(t.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						cy(t.span, {
							className: "token string",
							children: "\"rxjs\""
						}),
						cy(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n",
						cy(t.span, {
							className: "token keyword module",
							children: "export"
						}),
						" ",
						cy(t.span, {
							className: "token keyword",
							children: "const"
						}),
						" ",
						cy(t.span, {
							className: "token maybe-class-name",
							children: "TextDebounceInput"
						}),
						" ",
						cy(t.span, {
							className: "token operator",
							children: "="
						}),
						" component$",
						cy(t.span, {
							className: "token operator",
							children: "<"
						}),
						cy(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n  value",
						cy(t.span, {
							className: "token operator",
							children: "?"
						}),
						cy(t.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						cy(t.span, {
							className: "token builtin",
							children: "string"
						}),
						cy(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n  onValueChange",
						cy(t.span, {
							className: "token operator",
							children: "?"
						}),
						cy(t.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						cy(t.span, {
							className: "token punctuation",
							children: "("
						}),
						"v",
						cy(t.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						cy(t.span, {
							className: "token builtin",
							children: "string"
						}),
						cy(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						cy(t.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						cy(t.span, {
							className: "token keyword",
							children: "void"
						}),
						cy(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						cy(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						cy(t.span, {
							className: "token operator",
							children: ">"
						}),
						cy(t.span, {
							className: "token punctuation",
							children: "("
						}),
						cy(t.span, {
							className: "token punctuation",
							children: "("
						}),
						"props",
						cy(t.span, {
							className: "token punctuation",
							children: ","
						}),
						" ",
						cy(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						" emit ",
						cy(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						cy(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						cy(t.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						cy(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n  ",
						cy(t.span, {
							className: "token keyword",
							children: "const"
						}),
						" value$ ",
						cy(t.span, {
							className: "token operator",
							children: "="
						}),
						" ",
						cy(t.span, {
							className: "token function",
							children: "observableRef"
						}),
						cy(t.span, {
							className: "token punctuation",
							children: "("
						}),
						"props",
						cy(t.span, {
							className: "token punctuation",
							children: "."
						}),
						cy(t.span, {
							className: "token property-access",
							children: "value"
						}),
						" ",
						cy(t.span, {
							className: "token operator",
							children: "??"
						}),
						" ",
						cy(t.span, {
							className: "token string",
							children: "\"1\""
						}),
						cy(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						cy(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n  ",
						cy(t.span, {
							className: "token function",
							children: "rx"
						}),
						cy(t.span, {
							className: "token punctuation",
							children: "("
						}),
						"\n    value$",
						cy(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n    ",
						cy(t.span, {
							className: "token function",
							children: "debounceTime"
						}),
						cy(t.span, {
							className: "token punctuation",
							children: "("
						}),
						cy(t.span, {
							className: "token number",
							children: "300"
						}),
						cy(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						cy(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n    ",
						cy(t.span, {
							className: "token function",
							children: "subscribeUntilUnmount"
						}),
						cy(t.span, {
							className: "token punctuation",
							children: "("
						}),
						cy(t.span, {
							className: "token punctuation",
							children: "("
						}),
						"v",
						cy(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						cy(t.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						cy(t.span, {
							className: "token function",
							children: "emit"
						}),
						cy(t.span, {
							className: "token punctuation",
							children: "("
						}),
						cy(t.span, {
							className: "token string",
							children: "\"value-change\""
						}),
						cy(t.span, {
							className: "token punctuation",
							children: ","
						}),
						" v",
						cy(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						cy(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						cy(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n  ",
						cy(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						cy(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n  ",
						cy(t.span, {
							className: "token keyword control-flow",
							children: "return"
						}),
						" ",
						cy(t.span, {
							className: "token function",
							children: "rx"
						}),
						cy(t.span, {
							className: "token punctuation",
							children: "("
						}),
						"\n    value$",
						cy(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n    ",
						cy(t.span, {
							className: "token function",
							children: "render"
						}),
						cy(t.span, {
							className: "token punctuation",
							children: "("
						}),
						cy(t.span, {
							className: "token punctuation",
							children: "("
						}),
						"v",
						cy(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						cy(t.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						cy(t.span, {
							className: "token punctuation",
							children: "("
						}),
						"\n      ",
						cv(t.span, {
							className: "token tag",
							children: [
								cv(t.span, {
									className: "token tag",
									children: [cy(t.span, {
										className: "token punctuation",
										children: "<"
									}), "input"]
								}),
								"\n        ",
								cy(t.span, {
									className: "token attr-name",
									children: "value"
								}),
								cv(t.span, {
									className: "token script language-javascript",
									children: [
										cy(t.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										cy(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										"v",
										cy(t.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n        ",
								cy(t.span, {
									className: "token attr-name",
									children: "onInput"
								}),
								cv(t.span, {
									className: "token script language-javascript",
									children: [
										cy(t.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										cy(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										cy(t.span, {
											className: "token punctuation",
											children: "("
										}),
										"e",
										cy(t.span, {
											className: "token punctuation",
											children: ")"
										}),
										" ",
										cy(t.span, {
											className: "token arrow operator",
											children: "=>"
										}),
										" ",
										cy(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										"\n          value$",
										cy(t.span, {
											className: "token punctuation",
											children: "."
										}),
										cy(t.span, {
											className: "token property-access",
											children: "value"
										}),
										" ",
										cy(t.span, {
											className: "token operator",
											children: "="
										}),
										" ",
										cy(t.span, {
											className: "token punctuation",
											children: "("
										}),
										"e",
										cy(t.span, {
											className: "token punctuation",
											children: "."
										}),
										cy(t.span, {
											className: "token property-access",
											children: "target"
										}),
										" ",
										cy(t.span, {
											className: "token keyword module",
											children: "as"
										}),
										" ",
										cy(t.span, {
											className: "token maybe-class-name",
											children: "HTMLInputElement"
										}),
										cy(t.span, {
											className: "token punctuation",
											children: ")"
										}),
										cy(t.span, {
											className: "token punctuation",
											children: "."
										}),
										cy(t.span, {
											className: "token property-access",
											children: "value"
										}),
										cy(t.span, {
											className: "token punctuation",
											children: ";"
										}),
										"\n        ",
										cy(t.span, {
											className: "token punctuation",
											children: "}"
										}),
										cy(t.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n      ",
								cy(t.span, {
									className: "token punctuation",
									children: "/>"
								})
							]
						}),
						"\n    ",
						cy(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						cy(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						cy(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n  ",
						cy(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						cy(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						cy(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						cy(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						cy(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n",
						cy(t.span, {
							className: "token keyword module",
							children: "export"
						}),
						" ",
						cy(t.span, {
							className: "token keyword module",
							children: "default"
						}),
						" ",
						cy(t.span, {
							className: "token function",
							children: "component"
						}),
						cy(t.span, {
							className: "token punctuation",
							children: "("
						}),
						cy(t.span, {
							className: "token punctuation",
							children: "("
						}),
						cy(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						cy(t.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						cy(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n  ",
						cy(t.span, {
							className: "token keyword",
							children: "const"
						}),
						" inputValue ",
						cy(t.span, {
							className: "token operator",
							children: "="
						}),
						" ",
						cy(t.span, {
							className: "token function",
							children: "ref"
						}),
						cy(t.span, {
							className: "token punctuation",
							children: "("
						}),
						cy(t.span, {
							className: "token string",
							children: "\"default\""
						}),
						cy(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						cy(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n  ",
						cy(t.span, {
							className: "token keyword control-flow",
							children: "return"
						}),
						" ",
						cy(t.span, {
							className: "token punctuation",
							children: "("
						}),
						cy(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						cy(t.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						cy(t.span, {
							className: "token punctuation",
							children: "("
						}),
						"\n    ",
						cv(t.span, {
							className: "token tag",
							children: [cv(t.span, {
								className: "token tag",
								children: [cy(t.span, {
									className: "token punctuation",
									children: "<"
								}), "div"]
							}), cy(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						cy(t.span, {
							className: "token plain-text",
							children: "\n      "
						}),
						cv(t.span, {
							className: "token tag",
							children: [
								cv(t.span, {
									className: "token tag",
									children: [cy(t.span, {
										className: "token punctuation",
										children: "<"
									}), "div"]
								}),
								" ",
								cy(t.span, {
									className: "token attr-name",
									children: "style"
								}),
								cv(t.span, {
									className: "token script language-javascript",
									children: [
										cy(t.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										cy(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										cy(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										" display",
										cy(t.span, {
											className: "token operator",
											children: ":"
										}),
										" ",
										cy(t.span, {
											className: "token string",
											children: "\"flex\""
										}),
										cy(t.span, {
											className: "token punctuation",
											children: ","
										}),
										" gap",
										cy(t.span, {
											className: "token operator",
											children: ":"
										}),
										" ",
										cy(t.span, {
											className: "token string",
											children: "\"1rem\""
										}),
										" ",
										cy(t.span, {
											className: "token punctuation",
											children: "}"
										}),
										cy(t.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								cy(t.span, {
									className: "token punctuation",
									children: ">"
								})
							]
						}),
						cy(t.span, {
							className: "token plain-text",
							children: "\n        "
						}),
						cv(t.span, {
							className: "token tag",
							children: [
								cv(t.span, {
									className: "token tag",
									children: [cy(t.span, {
										className: "token punctuation",
										children: "<"
									}), cy(t.span, {
										className: "token class-name",
										children: "TextDebounceInput"
									})]
								}),
								"\n          ",
								cy(t.span, {
									className: "token attr-name",
									children: "value"
								}),
								cv(t.span, {
									className: "token script language-javascript",
									children: [
										cy(t.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										cy(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										"inputValue",
										cy(t.span, {
											className: "token punctuation",
											children: "."
										}),
										cy(t.span, {
											className: "token property-access",
											children: "value"
										}),
										cy(t.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n          ",
								cy(t.span, {
									className: "token attr-name",
									children: "onValueChange"
								}),
								cv(t.span, {
									className: "token script language-javascript",
									children: [
										cy(t.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										cy(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										cy(t.span, {
											className: "token punctuation",
											children: "("
										}),
										"value",
										cy(t.span, {
											className: "token punctuation",
											children: ")"
										}),
										" ",
										cy(t.span, {
											className: "token arrow operator",
											children: "=>"
										}),
										" ",
										cy(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										"\n            inputValue",
										cy(t.span, {
											className: "token punctuation",
											children: "."
										}),
										cy(t.span, {
											className: "token property-access",
											children: "value"
										}),
										" ",
										cy(t.span, {
											className: "token operator",
											children: "="
										}),
										" value",
										cy(t.span, {
											className: "token punctuation",
											children: ";"
										}),
										"\n          ",
										cy(t.span, {
											className: "token punctuation",
											children: "}"
										}),
										cy(t.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n        ",
								cy(t.span, {
									className: "token punctuation",
									children: "/>"
								})
							]
						}),
						cy(t.span, {
							className: "token plain-text",
							children: "\n        "
						}),
						cv(t.span, {
							className: "token tag",
							children: [cv(t.span, {
								className: "token tag",
								children: [cy(t.span, {
									className: "token punctuation",
									children: "<"
								}), "div"]
							}), cy(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						cy(t.span, {
							className: "token plain-text",
							children: "Inputted: "
						}),
						cy(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						"inputValue",
						cy(t.span, {
							className: "token punctuation",
							children: "."
						}),
						cy(t.span, {
							className: "token property-access",
							children: "value"
						}),
						cy(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						cv(t.span, {
							className: "token tag",
							children: [cv(t.span, {
								className: "token tag",
								children: [cy(t.span, {
									className: "token punctuation",
									children: "</"
								}), "div"]
							}), cy(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						cy(t.span, {
							className: "token plain-text",
							children: "\n      "
						}),
						cv(t.span, {
							className: "token tag",
							children: [cv(t.span, {
								className: "token tag",
								children: [cy(t.span, {
									className: "token punctuation",
									children: "</"
								}), "div"]
							}), cy(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						cy(t.span, {
							className: "token plain-text",
							children: "\n    "
						}),
						cv(t.span, {
							className: "token tag",
							children: [cv(t.span, {
								className: "token tag",
								children: [cy(t.span, {
									className: "token punctuation",
									children: "</"
								}), "div"]
							}), cy(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						"\n  ",
						cy(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						cy(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						cy(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						cy(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						cy(t.span, {
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
function cR(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? cy(t, {
		...e,
		children: cy(cI, { ...e })
	}) : cI(e);
}
var cM = rN(() => () => a7(cR, { components: { codeblockd4735e3a: cT } }));
export { s1 as $, es as $t, oJ as A, e9 as At, iA as B, eM as Bt, l5 as C, e6 as Ct, lw as D, eQ as Dt, lP as E, te as Et, iI as F, eG as Ft, iy as G, ew as Gt, iw as H, eT as Ht, ij as I, eL as It, ib as J, ey as Jt, iv as K, eb as Kt, iT as L, eV as Lt, oH as M, eq as Mt, oS as N, eK as Nt, lb as O, tx as Ot, oY as P, eW as Pt, ix as Q, ec as Qt, iP as R, eD as Rt, ce as S, tO as St, lY as T, e0 as Tt, ig as U, eE as Ut, ih as V, eI as Vt, iO as W, eO as Wt, i_ as X, ef as Xt, iS as Y, eh as Yt, im as Z, ed as Zt, co as _, nT as _t, cb as a, rs as at, cr as b, e1 as bt, cy as c, af as ct, cf as d, rT as dt, _ as en, sX as et, cd as f, r$ as ft, cl as g, nE as gt, cc as h, nj as ht, c_ as i, aC as it, oX as j, ty as jt, lm as k, e5 as kt, cv as l, rN as lt, cp as m, ak as mt, cP as n, rh as nt, cN as o, nU as ot, cu as p, rI as pt, iN as q, eN as qt, cw as r, rp as rt, cg as s, az as st, cM as t, N as tn, sU as tt, ch as u, a7 as ut, ci as v, tl as vt, l2 as w, e7 as wt, ct as x, tu as xt, ca as y, tp as yt, iC as z, e$ as zt };
