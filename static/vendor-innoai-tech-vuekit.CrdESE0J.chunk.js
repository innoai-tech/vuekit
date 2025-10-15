import { a as e, o as t, p as a, u as r, v as s } from "./lib-nodepkg-typedef.DOxQvsqW.chunk.js";
import { a as o, c, i, l, n as u, o as p, r as d, s as h, u as f } from "./vendor-rxjs.CsNJjMpf.chunk.js";
import { $ as m, Q as k, U as N, W as y, X as v, Z as b, at as g, ct as w, dt as _, et as A, it as O, lt as x, nt as j, ot as E, q as S, rt as I, st as P, ut as R } from "./index.7YZvkNcF.entry.js";
function C(e) {
	var t;
	return null != e && "function" != typeof e && Number.isSafeInteger(t = e.length) && t >= 0;
}
function T(e) {
	return e;
}
function D(e) {
	return "__proto__" === e;
}
function $(e) {
	switch (typeof e) {
		case "number":
		case "symbol": return !1;
		case "string": return e.includes(".") || e.includes("[") || e.includes("]");
	}
}
function V(e) {
	return "string" == typeof e || "symbol" == typeof e ? e : Object.is(e?.valueOf?.(), -0) ? "-0" : String(e);
}
function L(e) {
	if (null == e) return "";
	if ("string" == typeof e) return e;
	if (Array.isArray(e)) return e.map(L).join(",");
	let t = String(e);
	return "0" === t && Object.is(Number(e), -0) ? "-0" : t;
}
function B(e) {
	if (Array.isArray(e)) return e.map(V);
	if ("symbol" == typeof e) return [e];
	e = L(e);
	let t = [], a = e.length;
	if (0 === a) return t;
	let r = 0, s = "", o = "", c = !1;
	for (46 === e.charCodeAt(0) && (t.push(""), r++); r < a;) {
		let i = e[r];
		o ? "\\" === i && r + 1 < a ? s += e[++r] : i === o ? o = "" : s += i : c ? "\"" === i || "'" === i ? o = i : "]" === i ? (c = !1, t.push(s), s = "") : s += i : "[" === i ? (c = !0, s && (t.push(s), s = "")) : "." === i ? s && (t.push(s), s = "") : s += i, r++;
	}
	return s && t.push(s), t;
}
function U(e, t, a) {
	if (null == e) return a;
	switch (typeof t) {
		case "string": {
			if (D(t)) return a;
			let r = e[t];
			if (void 0 === r) if ($(t)) return U(e, B(t), a);
			else return a;
			return r;
		}
		case "number":
		case "symbol": {
			"number" == typeof t && (t = V(t));
			let r = e[t];
			if (void 0 === r) return a;
			return r;
		}
		default: {
			if (Array.isArray(t)) {
				var r = e, s = t, o = a;
				if (0 === s.length) return o;
				let c = r;
				for (let e = 0; e < s.length; e++) {
					if (null == c || D(s[e])) return o;
					c = c[s[e]];
				}
				return void 0 === c ? o : c;
			}
			if (D(t = Object.is(t?.valueOf(), -0) ? "-0" : String(t))) return a;
			let c = e[t];
			if (void 0 === c) return a;
			return c;
		}
	}
}
function M(e) {
	return function(t) {
		return U(t, e);
	};
}
function G(e) {
	return null !== e && ("object" == typeof e || "function" == typeof e);
}
function F(e) {
	return null == e || "object" != typeof e && "function" != typeof e;
}
function z(e, t) {
	return e === t || Number.isNaN(e) && Number.isNaN(t);
}
function q(e, t, a, r) {
	if (t === e) return !0;
	switch (typeof t) {
		case "object": return function(e, t, a, r) {
			if (null == t) return !0;
			if (Array.isArray(t)) return W(e, t, a, r);
			if (t instanceof Map) {
				var s, o, c, i, l = e, u = t, p = a, d = r;
				if (0 === u.size) return !0;
				if (!(l instanceof Map)) return !1;
				for (let [e, t] of u.entries()) if (!1 === p(l.get(e), t, e, l, u, d)) return !1;
				return !0;
			}
			if (t instanceof Set) return s = e, o = t, c = a, i = r, 0 === o.size || s instanceof Set && W([...s], [...o], c, i);
			let h = Object.keys(t);
			if (null == e) return 0 === h.length;
			if (0 === h.length) return !0;
			if (r && r.has(t)) return r.get(t) === e;
			r && r.set(t, e);
			try {
				for (let s = 0; s < h.length; s++) {
					let o = h[s];
					if (!F(e) && !(o in e) || void 0 === t[o] && void 0 !== e[o] || null === t[o] && null !== e[o] || !a(e[o], t[o], o, e, t, r)) return !1;
				}
				return !0;
			} finally {
				r && r.delete(t);
			}
		}(e, t, a, r);
		case "function":
			if (Object.keys(t).length > 0) return q(e, { ...t }, a, r);
			return z(e, t);
		default:
			if (!G(e)) return z(e, t);
			if ("string" == typeof t) return "" === t;
			return !0;
	}
}
function W(e, t, a, r) {
	if (0 === t.length) return !0;
	if (!Array.isArray(e)) return !1;
	let s = /* @__PURE__ */ new Set();
	for (let o = 0; o < t.length; o++) {
		let c = t[o], i = !1;
		for (let l = 0; l < e.length; l++) {
			if (s.has(l)) continue;
			let u = e[l], p = !1;
			if (a(u, c, o, e, t, r) && (p = !0), p) {
				s.add(l), i = !0;
				break;
			}
		}
		if (!i) return !1;
	}
	return !0;
}
function H(e, t) {
	var a;
	return "function" != typeof (a = () => void 0) ? H(e, t) : q(e, t, function e(t, r, s, o, c, i) {
		let l = a(t, r, s, o, c, i);
		return void 0 !== l ? !!l : q(t, r, e, i);
	}, /* @__PURE__ */ new Map());
}
function K(e) {
	return Object.getOwnPropertySymbols(e).filter((t) => Object.prototype.propertyIsEnumerable.call(e, t));
}
function X(e) {
	return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e);
}
var Y, Z, Q, J, ee, en, et, ea = "[object String]", er = "[object Number]", es = "[object Boolean]", eo = "[object Arguments]";
function ec(e) {
	return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function ei(e, t, a, r = /* @__PURE__ */ new Map(), s) {
	let o = s?.(e, t, a, r);
	if (void 0 !== o) return o;
	if (F(e)) return e;
	if (r.has(e)) return r.get(e);
	if (Array.isArray(e)) {
		let t = Array(e.length);
		r.set(e, t);
		for (let o = 0; o < e.length; o++) t[o] = ei(e[o], o, a, r, s);
		return Object.hasOwn(e, "index") && (t.index = e.index), Object.hasOwn(e, "input") && (t.input = e.input), t;
	}
	if (e instanceof Date) return new Date(e.getTime());
	if (e instanceof RegExp) {
		let t = new RegExp(e.source, e.flags);
		return t.lastIndex = e.lastIndex, t;
	}
	if (e instanceof Map) {
		let t = /* @__PURE__ */ new Map();
		for (let [o, c] of (r.set(e, t), e)) t.set(o, ei(c, o, a, r, s));
		return t;
	}
	if (e instanceof Set) {
		let t = /* @__PURE__ */ new Set();
		for (let o of (r.set(e, t), e)) t.add(ei(o, void 0, a, r, s));
		return t;
	}
	if ("undefined" != typeof Buffer && Buffer.isBuffer(e)) return e.subarray();
	if (ec(e)) {
		let t = new (Object.getPrototypeOf(e)).constructor(e.length);
		r.set(e, t);
		for (let o = 0; o < e.length; o++) t[o] = ei(e[o], o, a, r, s);
		return t;
	}
	if (e instanceof ArrayBuffer || "undefined" != typeof SharedArrayBuffer && e instanceof SharedArrayBuffer) return e.slice(0);
	if (e instanceof DataView) {
		let t = new DataView(e.buffer.slice(0), e.byteOffset, e.byteLength);
		return r.set(e, t), el(t, e, a, r, s), t;
	}
	if ("undefined" != typeof File && e instanceof File) {
		let t = new File([e], e.name, { type: e.type });
		return r.set(e, t), el(t, e, a, r, s), t;
	}
	if ("undefined" != typeof Blob && e instanceof Blob) {
		let t = new Blob([e], { type: e.type });
		return r.set(e, t), el(t, e, a, r, s), t;
	}
	if (e instanceof Error) {
		let t = new e.constructor();
		return r.set(e, t), t.message = e.message, t.name = e.name, t.stack = e.stack, t.cause = e.cause, el(t, e, a, r, s), t;
	}
	if (e instanceof Boolean) {
		let t = new Boolean(e.valueOf());
		return r.set(e, t), el(t, e, a, r, s), t;
	}
	if (e instanceof Number) {
		let t = new Number(e.valueOf());
		return r.set(e, t), el(t, e, a, r, s), t;
	}
	if (e instanceof String) {
		let t = new String(e.valueOf());
		return r.set(e, t), el(t, e, a, r, s), t;
	}
	if ("object" == typeof e && function(e) {
		switch (X(e)) {
			case eo:
			case "[object Array]":
			case "[object ArrayBuffer]":
			case "[object DataView]":
			case es:
			case "[object Date]":
			case "[object Float32Array]":
			case "[object Float64Array]":
			case "[object Int8Array]":
			case "[object Int16Array]":
			case "[object Int32Array]":
			case "[object Map]":
			case er:
			case "[object Object]":
			case "[object RegExp]":
			case "[object Set]":
			case ea:
			case "[object Symbol]":
			case "[object Uint8Array]":
			case "[object Uint8ClampedArray]":
			case "[object Uint16Array]":
			case "[object Uint32Array]": return !0;
			default: return !1;
		}
	}(e)) {
		let t = Object.create(Object.getPrototypeOf(e));
		return r.set(e, t), el(t, e, a, r, s), t;
	}
	return e;
}
function el(e, t, a = e, r, s) {
	let o = [...Object.keys(t), ...K(t)];
	for (let c = 0; c < o.length; c++) {
		let i = o[c], l = Object.getOwnPropertyDescriptor(e, i);
		(null == l || l.writable) && (e[i] = ei(t[i], i, a, r, s));
	}
}
function eu(e) {
	var t;
	return e = ei(t = e, void 0, t, /* @__PURE__ */ new Map(), void 0), (t) => H(t, e);
}
function ep(e, t) {
	var a;
	return a = (a, r, s, o) => {
		let c = t?.(a, r, s, o);
		if (void 0 !== c) return c;
		if ("object" == typeof e) switch (Object.prototype.toString.call(e)) {
			case er:
			case ea:
			case es: {
				let t = new e.constructor(e?.valueOf());
				return el(t, e), t;
			}
			case eo: {
				let t = {};
				return el(t, e), t.length = e.length, t[Symbol.iterator] = e[Symbol.iterator], t;
			}
			default: return;
		}
	}, ei(e, void 0, e, /* @__PURE__ */ new Map(), a);
}
var ed = /^(?:0|[1-9]\d*)$/;
function eh(e, t = Number.MAX_SAFE_INTEGER) {
	switch (typeof e) {
		case "number": return Number.isInteger(e) && e >= 0 && e < t;
		case "symbol": return !1;
		case "string": return ed.test(e);
	}
}
function ef(e) {
	return null !== e && "object" == typeof e && "[object Arguments]" === X(e);
}
function em(e, t) {
	let a;
	if (0 === (a = Array.isArray(t) ? t : "string" == typeof t && $(t) && e?.[t] == null ? B(t) : [t]).length) return !1;
	let r = e;
	for (let e = 0; e < a.length; e++) {
		let t = a[e];
		if ((null == r || !Object.hasOwn(r, t)) && !((Array.isArray(r) || ef(r)) && eh(t) && t < r.length)) return !1;
		r = r[t];
	}
	return !0;
}
function ek(e, t) {
	switch (typeof e) {
		case "object":
			Object.is(e?.valueOf(), -0) && (e = "-0");
			break;
		case "number": e = V(e);
	}
	return t = ep(t), function(a) {
		let r = U(a, e);
		return void 0 === r ? em(a, e) : void 0 === t ? void 0 === r : H(r, t);
	};
}
function eN(e) {
	if (null == e) return T;
	switch (typeof e) {
		case "function": return e;
		case "object":
			if (Array.isArray(e) && 2 === e.length) return ek(e[0], e[1]);
			return eu(e);
		case "string":
		case "symbol":
		case "number": return M(e);
	}
}
function ey(e) {
	return "object" == typeof e && null !== e;
}
function ev(e) {
	if (C(e)) {
		var t;
		return (t = Array.isArray(e) ? e : Array.from(e))[t.length - 1];
	}
}
function eb(e) {
	return "symbol" == typeof e || e instanceof Symbol;
}
function eg(e, t, a = 1) {
	if (t ?? (t = e, e = 0), !Number.isInteger(a) || 0 === a) throw Error("The step value must be a non-zero integer.");
	let r = Math.max(Math.ceil((t - e) / a), 0), s = Array(r);
	for (let t = 0; t < r; t++) s[t] = e + t * a;
	return s;
}
function ew(e) {
	return "string" == typeof e || e instanceof String;
}
function e_(e, t) {
	if (!e) return [];
	let a = C(e) || Array.isArray(e) ? eg(0, e.length) : Object.keys(e), r = eN(t ?? T), s = Array(a.length);
	for (let t = 0; t < a.length; t++) {
		let o = a[t], c = e[o];
		s[t] = r(c, o, e);
	}
	return s;
}
function eA(e, t) {
	return null == e ? {} : function(e, t) {
		let a = {};
		for (let r = 0; r < e.length; r++) {
			let s = e[r], o = t(s);
			Object.hasOwn(a, o) || (a[o] = []), a[o].push(s);
		}
		return a;
	}(C(e) ? Array.from(e) : Object.values(e), eN(t ?? T));
}
var eO = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ex = /^\w*$/;
function ej(e, t = T) {
	if (!e) return [[], []];
	let a = C(e) ? e : Object.values(e);
	t = eN(t);
	let r = [], s = [];
	for (let e = 0; e < a.length; e++) {
		let o = a[e];
		t(o) ? r.push(o) : s.push(o);
	}
	return [r, s];
}
function eE(e, t) {
	if (null == e) return !0;
	switch (typeof t) {
		case "symbol":
		case "number":
		case "object":
			if (Array.isArray(t)) return eS(e, t);
			if ("number" == typeof t ? t = V(t) : "object" == typeof t && (t = Object.is(t?.valueOf(), -0) ? "-0" : String(t)), D(t)) return !1;
			if (e?.[t] === void 0) return !0;
			try {
				return delete e[t], !0;
			} catch {
				return !1;
			}
		case "string":
			if (e?.[t] === void 0 && $(t)) return eS(e, B(t));
			if (D(t)) return !1;
			try {
				return delete e[t], !0;
			} catch {
				return !1;
			}
	}
}
function eS(e, t) {
	let a = 1 === t.length ? e : U(e, t.slice(0, -1)), r = t[t.length - 1];
	if (a?.[r] === void 0) return !0;
	if (D(r)) return !1;
	try {
		return delete a[r], !0;
	} catch {
		return !1;
	}
}
function eI(e) {
	return Array.isArray(e);
}
function eP(e, t, a) {
	if (!e) return !1;
	null != a && (t = void 0), t ??= T;
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
				let a = ek(t[0], t[1]);
				if (Array.isArray(e)) {
					for (let t = 0; t < e.length; t++) if (a(e[t])) return !0;
					return !1;
				}
				return r.some(a);
			}
			{
				let a = eu(t);
				if (Array.isArray(e)) {
					for (let t = 0; t < e.length; t++) if (a(e[t])) return !0;
					return !1;
				}
				return r.some(a);
			}
		case "number":
		case "symbol":
		case "string": {
			let a = M(t);
			if (Array.isArray(e)) {
				for (let t = 0; t < e.length; t++) if (a(e[t])) return !0;
				return !1;
			}
			return r.some(a);
		}
	}
}
function eR(e) {
	return e;
}
function eC(e) {
	return "number" == typeof e || e instanceof Number;
}
var eT = (e, t, a) => {
	let r = e[t];
	Object.hasOwn(e, t) && z(r, a) && (void 0 !== a || t in e) || (e[t] = a);
};
function eD(e, t, a) {
	return function(e, t, a, r) {
		if (null == e && !G(e)) return e;
		let s = !Array.isArray(t) && ("number" == typeof t || "boolean" == typeof t || null == t || eb(t) || "string" == typeof t && (ex.test(t) || !eO.test(t)) || null != e && Object.hasOwn(e, t)) ? [t] : Array.isArray(t) ? t : "string" == typeof t ? B(t) : [t], o = e;
		for (let t = 0; t < s.length && null != o; t++) {
			let c, i = V(s[t]);
			if (!D(i)) {
				if (t === s.length - 1) c = a(o[i]);
				else {
					let a = o[i], l = r?.(a, i, e);
					c = void 0 !== l ? l : G(a) ? a : eh(s[t + 1]) ? [] : {};
				}
				eT(o, i, c), o = o[i];
			}
		}
		return e;
	}(e, t, () => a, () => void 0);
}
function e$(e) {
	return "undefined" != typeof Buffer && Buffer.isBuffer(e);
}
function eV(e) {
	let t = e?.constructor;
	return e === ("function" == typeof t ? t.prototype : Object.prototype);
}
function eL(e, t) {
	if ((e = function(e) {
		var t, a;
		let r = (t = e) ? (t = eb(a = t) ? NaN : Number(a)) === Infinity || t === -Infinity ? (t < 0 ? -1 : 1) * Number.MAX_VALUE : t == t ? t : 0 : 0 === t ? t : 0, s = r % 1;
		return s ? r - s : r;
	}(e)) < 1 || !Number.isSafeInteger(e)) return [];
	let a = Array(e);
	for (let r = 0; r < e; r++) a[r] = "function" == typeof t ? t(r) : r;
	return a;
}
function eB(e) {
	if (C(e)) {
		var t = e;
		let a = eL(t.length, (e) => `${e}`), r = new Set(a);
		return e$(t) && (r.add("offset"), r.add("parent")), ec(t) && (r.add("buffer"), r.add("byteLength"), r.add("byteOffset")), [...a, ...Object.keys(t).filter((e) => !r.has(e))];
	}
	let a = Object.keys(Object(e));
	return eV(e) ? a.filter((e) => "constructor" !== e) : a;
}
function eU(e) {
	if (null == e) return [];
	switch (typeof e) {
		case "object":
		case "function":
			if (C(e)) {
				var t = e;
				let a = eL(t.length, (e) => `${e}`), r = new Set(a);
				return e$(t) && (r.add("offset"), r.add("parent")), ec(t) && (r.add("buffer"), r.add("byteLength"), r.add("byteOffset")), [...a, ...eM(t).filter((e) => !r.has(e))];
			}
			if (eV(e)) return eM(e).filter((e) => "constructor" !== e);
			return eM(e);
		default: return eM(Object(e));
	}
}
function eM(e) {
	let t = [];
	for (let a in e) t.push(a);
	return t;
}
function eG(e) {
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
function eF(e, t = T) {
	return null == e ? {} : function(e, t) {
		let a = {}, r = Object.keys(e);
		for (let s = 0; s < r.length; s++) {
			let o = r[s], c = e[o];
			a[o] = t(c, o, e);
		}
		return a;
	}(e, eN(t));
}
function ez(e) {
	let t = [];
	for (; e;) t.push(...K(e)), e = Object.getPrototypeOf(e);
	return t;
}
function eq(e, ...t) {
	var a;
	if (null == e) return {};
	let r = (a = e, (t = function(e, t = 1) {
		let a = [], r = Math.floor(t);
		if (!C(e)) return a;
		let s = (e, t) => {
			for (let o = 0; o < e.length; o++) {
				let c = e[o];
				t < r && (Array.isArray(c) || c?.[Symbol.isConcatSpreadable] || null !== c && "object" == typeof c && "[object Arguments]" === Object.prototype.toString.call(c)) ? Array.isArray(c) ? s(c, t + 1) : s(Array.from(c), t + 1) : a.push(c);
			}
		};
		return s(Array.from(e), 0), a;
	}(t)).some((e) => Array.isArray(e) || $(e)) ? function(e) {
		let t = {}, a = [...eU(e), ...ez(e)];
		for (let r = 0; r < a.length; r++) {
			let s = a[r];
			t[s] = ep(e[s], (e) => {
				if (!eG(e)) return e;
			});
		}
		return t;
	}(a) : function(e) {
		let t = {}, a = [...eU(e), ...ez(e)];
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
				for (let e = 0; e < a.length; e++) eE(r, a[e]);
				break;
			case "string":
			case "symbol":
			case "number": eE(r, a);
		}
	}
	return r;
}
function eW(e, t) {
	if (null == e) return {};
	let a = eN(t ?? eR), r = {}, s = C(e) ? eg(0, e.length) : [...eU(e), ...ez(e)];
	for (let t = 0; t < s.length; t++) {
		let o = eb(s[t]) ? s[t] : s[t].toString(), c = e[o];
		a(c, o, e) && (r[o] = c);
	}
	return r;
}
function eH(e) {
	return "function" == typeof e;
}
function eK(e) {
	return null === e;
}
function eX(e) {
	return void 0 === e;
}
function eY(e) {
	return "boolean" == typeof e || e instanceof Boolean;
}
function eZ(e) {
	if (null == e) return !0;
	if (C(e)) return ("function" == typeof e.splice || "string" == typeof e || "undefined" != typeof Buffer && !!Buffer.isBuffer(e) || !!ec(e) || !!ef(e)) && 0 === e.length;
	if ("object" == typeof e) {
		if (e instanceof Map || e instanceof Set) return 0 === e.size;
		let t = Object.keys(e);
		return eV(e) ? 0 === t.filter((e) => "constructor" !== e).length : 0 === t.length;
	}
	return !0;
}
function eQ(e) {
	return Number.isInteger(e);
}
var eJ = /\p{Lu}?\p{Ll}+|[0-9]+|\p{Lu}+(?!\p{Ll})|\p{Emoji_Presentation}|\p{Extended_Pictographic}|\p{L}+/gu;
function e0(e) {
	return Array.from(e.match(eJ) ?? []);
}
function e1(e) {
	return "string" != typeof e && (e = L(e)), e.replace(/['\u2019]/g, "");
}
function e2(e) {
	let t = e0(e1(e));
	if (0 === t.length) return "";
	let [a, ...r] = t;
	return `${a.toLowerCase()}${r.map((e) => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase()).join("")}`;
}
function e3(e) {
	return e0(e1(e)).map((e) => e.toLowerCase()).join("-");
}
function e4(e, t = 0, a = " ") {
	return L(e).padStart(t, a);
}
function e7(e) {
	var t;
	return (t = L(e)).substring(0, 1).toUpperCase() + t.substring(1);
}
var e5 = Symbol.for("immer-nothing"), e6 = Symbol.for("immer-draftable"), e8 = Symbol.for("immer-state");
function e9(e) {
	throw Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`);
}
var ne = Object.getPrototypeOf;
function nn(e) {
	return !!e && !!e[e8];
}
function nt(e) {
	return !!e && (nr(e) || Array.isArray(e) || !!e[e6] || !!e.constructor?.[e6] || nl(e) || nu(e));
}
var na = Object.prototype.constructor.toString();
function nr(e) {
	if (!e || "object" != typeof e) return !1;
	let t = ne(e);
	if (null === t) return !0;
	let a = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
	return a === Object || "function" == typeof a && Function.toString.call(a) === na;
}
function ns(e, t) {
	0 === no(e) ? Reflect.ownKeys(e).forEach((a) => {
		t(a, e[a], e);
	}) : e.forEach((a, r) => t(r, a, e));
}
function no(e) {
	let t = e[e8];
	return t ? t.type_ : Array.isArray(e) ? 1 : nl(e) ? 2 : 3 * !!nu(e);
}
function nc(e, t) {
	return 2 === no(e) ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function ni(e, t, a) {
	let r = no(e);
	2 === r ? e.set(t, a) : 3 === r ? e.add(a) : e[t] = a;
}
function nl(e) {
	return e instanceof Map;
}
function nu(e) {
	return e instanceof Set;
}
function np(e) {
	return e.copy_ || e.base_;
}
function nd(e, t) {
	if (nl(e)) return new Map(e);
	if (nu(e)) return new Set(e);
	if (Array.isArray(e)) return Array.prototype.slice.call(e);
	let a = nr(e);
	if (!0 !== t && ("class_only" !== t || a)) {
		let t = ne(e);
		return null !== t && a ? { ...e } : Object.assign(Object.create(t), e);
	}
	{
		let t = Object.getOwnPropertyDescriptors(e);
		delete t[e8];
		let a = Reflect.ownKeys(t);
		for (let r = 0; r < a.length; r++) {
			let s = a[r], o = t[s];
			!1 === o.writable && (o.writable = !0, o.configurable = !0), (o.get || o.set) && (t[s] = {
				configurable: !0,
				writable: !0,
				enumerable: o.enumerable,
				value: e[s]
			});
		}
		return Object.create(ne(e), t);
	}
}
function nh(e, t = !1) {
	return nm(e) || nn(e) || !nt(e) || (no(e) > 1 && Object.defineProperties(e, {
		set: { value: nf },
		add: { value: nf },
		clear: { value: nf },
		delete: { value: nf }
	}), Object.freeze(e), t && Object.values(e).forEach((e) => nh(e, !0))), e;
}
function nf() {
	e9(2);
}
function nm(e) {
	return Object.isFrozen(e);
}
var nk = {};
function nN(e) {
	let t = nk[e];
	return t || e9(0, e), t;
}
function ny(e, t) {
	t && (nN("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function nv(e) {
	nb(e), e.drafts_.forEach(nw), e.drafts_ = null;
}
function nb(e) {
	e === Y && (Y = e.parent_);
}
function ng(e) {
	return Y = {
		drafts_: [],
		parent_: Y,
		immer_: e,
		canAutoFreeze_: !0,
		unfinalizedDrafts_: 0
	};
}
function nw(e) {
	let t = e[e8];
	0 === t.type_ || 1 === t.type_ ? t.revoke_() : t.revoked_ = !0;
}
function n_(e, t) {
	t.unfinalizedDrafts_ = t.drafts_.length;
	let a = t.drafts_[0];
	return void 0 !== e && e !== a ? (a[e8].modified_ && (nv(t), e9(4)), nt(e) && (e = nA(t, e), t.parent_ || nx(t, e)), t.patches_ && nN("Patches").generateReplacementPatches_(a[e8].base_, e, t.patches_, t.inversePatches_)) : e = nA(t, a, []), nv(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== e5 ? e : void 0;
}
function nA(e, t, a) {
	if (nm(t)) return t;
	let r = t[e8];
	if (!r) return ns(t, (s, o) => nO(e, r, t, s, o, a)), t;
	if (r.scope_ !== e) return t;
	if (!r.modified_) return nx(e, r.base_, !0), r.base_;
	if (!r.finalized_) {
		r.finalized_ = !0, r.scope_.unfinalizedDrafts_--;
		let t = r.copy_, s = t, o = !1;
		3 === r.type_ && (s = new Set(t), t.clear(), o = !0), ns(s, (s, c) => nO(e, r, t, s, c, a, o)), nx(e, t, !1), a && e.patches_ && nN("Patches").generatePatches_(r, a, e.patches_, e.inversePatches_);
	}
	return r.copy_;
}
function nO(e, t, a, r, s, o, c) {
	if (nn(s)) {
		let c = nA(e, s, o && t && 3 !== t.type_ && !nc(t.assigned_, r) ? o.concat(r) : void 0);
		if (ni(a, r, c), !nn(c)) return;
		e.canAutoFreeze_ = !1;
	} else c && a.add(s);
	if (nt(s) && !nm(s)) {
		if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) return;
		nA(e, s), (!t || !t.scope_.parent_) && "symbol" != typeof r && (nl(a) ? a.has(r) : Object.prototype.propertyIsEnumerable.call(a, r)) && nx(e, s);
	}
}
function nx(e, t, a = !1) {
	!e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && nh(t, a);
}
var nj = {
	get(e, t) {
		if (t === e8) return e;
		let a = np(e);
		if (!nc(a, t)) {
			var r = e;
			let c = nI(a, t);
			return c ? "value" in c ? c.value : c.get?.call(r.draft_) : void 0;
		}
		let c = a[t];
		return e.finalized_ || !nt(c) ? c : c === nS(e.base_, t) ? (nR(e), e.copy_[t] = nC(c, e)) : c;
	},
	has: (e, t) => t in np(e),
	ownKeys: (e) => Reflect.ownKeys(np(e)),
	set(e, t, a) {
		let r = nI(np(e), t);
		if (r?.set) return r.set.call(e.draft_, a), !0;
		if (!e.modified_) {
			let r = nS(np(e), t), s = r?.[e8];
			if (s && s.base_ === a) return e.copy_[t] = a, e.assigned_[t] = !1, !0;
			if ((a === r ? 0 !== a || 1 / a == 1 / r : a != a && r != r) && (void 0 !== a || nc(e.base_, t))) return !0;
			nR(e), nP(e);
		}
		return !!(e.copy_[t] === a && (void 0 !== a || t in e.copy_) || Number.isNaN(a) && Number.isNaN(e.copy_[t])) || (e.copy_[t] = a, e.assigned_[t] = !0, !0);
	},
	deleteProperty: (e, t) => (void 0 !== nS(e.base_, t) || t in e.base_ ? (e.assigned_[t] = !1, nR(e), nP(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0),
	getOwnPropertyDescriptor(e, t) {
		let a = np(e), r = Reflect.getOwnPropertyDescriptor(a, t);
		return r ? {
			writable: !0,
			configurable: 1 !== e.type_ || "length" !== t,
			enumerable: r.enumerable,
			value: a[t]
		} : r;
	},
	defineProperty() {
		e9(11);
	},
	getPrototypeOf: (e) => ne(e.base_),
	setPrototypeOf() {
		e9(12);
	}
}, nE = {};
function nS(e, t) {
	let a = e[e8];
	return (a ? np(a) : e)[t];
}
function nI(e, t) {
	if (!(t in e)) return;
	let a = ne(e);
	for (; a;) {
		let e = Object.getOwnPropertyDescriptor(a, t);
		if (e) return e;
		a = ne(a);
	}
}
function nP(e) {
	!e.modified_ && (e.modified_ = !0, e.parent_ && nP(e.parent_));
}
function nR(e) {
	e.copy_ || (e.copy_ = nd(e.base_, e.scope_.immer_.useStrictShallowCopy_));
}
function nC(e, t) {
	let a = nl(e) ? nN("MapSet").proxyMap_(e, t) : nu(e) ? nN("MapSet").proxySet_(e, t) : function(e, t) {
		let a = Array.isArray(e), r = {
			type_: +!!a,
			scope_: t ? t.scope_ : Y,
			modified_: !1,
			finalized_: !1,
			assigned_: {},
			parent_: t,
			base_: e,
			draft_: null,
			copy_: null,
			revoke_: null,
			isManual_: !1
		}, s = r, o = nj;
		a && (s = [r], o = nE);
		let { revoke: c, proxy: i } = Proxy.revocable(s, o);
		return r.draft_ = i, r.revoke_ = c, i;
	}(e, t);
	return (t ? t.scope_ : Y).drafts_.push(a), a;
}
ns(nj, (e, t) => {
	nE[e] = function() {
		return arguments[0] = arguments[0][0], t.apply(this, arguments);
	};
}), nE.deleteProperty = function(e, t) {
	return nE.set.call(this, e, t, void 0);
}, nE.set = function(e, t, a) {
	return nj.set.call(this, e[0], t, a, e[0]);
};
var nT = new class {
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
			if ("function" != typeof t && e9(6), void 0 !== a && "function" != typeof a && e9(7), nt(e)) {
				let s = ng(this), o = nC(e, void 0), c = !0;
				try {
					r = t(o), c = !1;
				} finally {
					c ? nv(s) : nb(s);
				}
				return ny(s, a), n_(r, s);
			}
			if (e && "object" == typeof e) e9(1, e);
			else {
				if (void 0 === (r = t(e)) && (r = e), r === e5 && (r = void 0), this.autoFreeze_ && nh(r, !0), a) {
					let t = [], s = [];
					nN("Patches").generateReplacementPatches_(e, r, t, s), a(t, s);
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
		nt(e) || e9(8), nn(e) && (nn(t = e) || e9(10, t), e = function e(t) {
			let a;
			if (!nt(t) || nm(t)) return t;
			let r = t[e8];
			if (r) {
				if (!r.modified_) return r.base_;
				r.finalized_ = !0, a = nd(t, r.scope_.immer_.useStrictShallowCopy_);
			} else a = nd(t, !0);
			return ns(a, (t, r) => {
				ni(a, t, e(r));
			}), r && (r.finalized_ = !1), a;
		}(t));
		let a = ng(this), r = nC(e, void 0);
		return r[e8].isManual_ = !0, nb(a), r;
	}
	finishDraft(e, t) {
		let a = e && e[e8];
		a && a.isManual_ || e9(9);
		let { scope_: r } = a;
		return ny(r, t), n_(void 0, r);
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
		let r = nN("Patches").applyPatches_;
		return nn(e) ? r(e, t) : this.produce(e, (e) => r(e, t));
	}
}().produce;
let nD = S;
var n$ = Symbol("component");
let nV = (e) => eG(e) && e[n$] === n$, nL = (e) => s(Object.values(e)[0]);
function nB(...e) {
	let t, a = {}, r = {};
	for (let s of e) {
		if (eH(s)) {
			t = s;
			continue;
		}
		eX(t) ? a = s : r = s;
	}
	let [s, o] = ej(Object.keys(a), (e) => /^on[A-Z]/.test(e)), c = {
		emits: [...s.map((e) => e3(e.slice(2))), ...r.emits ?? []],
		props: [...o.filter((e) => !/^[$]/.test(e)), ...r.props ?? []].reduce((e, t) => {
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
		emits: c.emits,
		props: c.props,
		inheritAttrs: r.inheritAttrs,
		[n$]: n$
	};
}
let nU = (e, t) => new Proxy(e, { get: (e, a) => t[a] ?? e[a] });
var nM = "undefined" != typeof document;
function nG(e) {
	return "object" == typeof e || "displayName" in e || "props" in e || "__vccOpts" in e;
}
var nF = Object.assign;
function nz(e, t) {
	let a = {};
	for (let r in t) {
		let s = t[r];
		a[r] = nW(s) ? s.map(e) : e(s);
	}
	return a;
}
var nq = () => {}, nW = Array.isArray;
function nH(e, t) {
	let a = {};
	for (let r in e) a[r] = r in t ? t[r] : e[r];
	return a;
}
var nK = /#/g, nX = /&/g, nY = /\//g, nZ = /=/g, nQ = /\?/g, nJ = /\+/g, n0 = /%5B/g, n1 = /%5D/g, n2 = /%5E/g, n3 = /%60/g, n4 = /%7B/g, n7 = /%7C/g, n5 = /%7D/g, n6 = /%20/g;
function n8(e) {
	return null == e ? "" : encodeURI("" + e).replace(n7, "|").replace(n0, "[").replace(n1, "]");
}
function n9(e) {
	return n8(e).replace(nJ, "%2B").replace(n6, "+").replace(nK, "%23").replace(nX, "%26").replace(n3, "`").replace(n4, "{").replace(n5, "}").replace(n2, "^");
}
function te(e) {
	return n8(e).replace(nK, "%23").replace(nQ, "%3F").replace(nY, "%2F");
}
function tn(e) {
	if (null == e) return null;
	try {
		return decodeURIComponent("" + e);
	} catch (e) {}
	return "" + e;
}
var tt = /\/$/;
function ta(e, t, a = "/") {
	let r, s = {}, o = "", c = "", i = t.indexOf("#"), l = t.indexOf("?");
	return (l = i >= 0 && l > i ? -1 : l) >= 0 && (r = t.slice(0, l), s = e(o = t.slice(l, i > 0 ? i : t.length))), i >= 0 && (r = r || t.slice(0, i), c = t.slice(i, t.length)), {
		fullPath: (r = function(e, t) {
			let a, r;
			if (e.startsWith("/")) return e;
			if (!e) return t;
			let s = t.split("/"), o = e.split("/"), c = o[o.length - 1];
			(".." === c || "." === c) && o.push("");
			let i = s.length - 1;
			for (a = 0; a < o.length; a++) if ("." !== (r = o[a])) if (".." === r) i > 1 && i--;
			else break;
			return s.slice(0, i).join("/") + "/" + o.slice(a).join("/");
		}(null != r ? r : t, a)) + o + c,
		path: r,
		query: s,
		hash: tn(c)
	};
}
function tr(e, t) {
	return t && e.toLowerCase().startsWith(t.toLowerCase()) ? e.slice(t.length) || "/" : e;
}
function ts(e, t) {
	return (e.aliasOf || e) === (t.aliasOf || t);
}
function to(e, t) {
	if (Object.keys(e).length !== Object.keys(t).length) return !1;
	for (let s in e) {
		var a, r;
		if (a = e[s], r = t[s], nW(a) ? !tc(a, r) : nW(r) ? !tc(r, a) : a !== r) return !1;
	}
	return !0;
}
function tc(e, t) {
	return nW(t) ? e.length === t.length && e.every((e, a) => e === t[a]) : 1 === e.length && e[0] === t;
}
var ti = {
	path: "/",
	name: void 0,
	params: {},
	query: {},
	hash: "",
	fullPath: "/",
	matched: [],
	meta: {},
	redirectedFrom: void 0
}, tl = ((Z = {}).pop = "pop", Z.push = "push", Z), tu = ((Q = {}).back = "back", Q.forward = "forward", Q.unknown = "", Q), tp = /^[^#]+#/;
function td(e, t) {
	return e.replace(tp, "#") + t;
}
var th = () => ({
	left: window.scrollX,
	top: window.scrollY
});
function tf(e, t) {
	return (history.state ? history.state.position - t : -1) + e;
}
var tm = /* @__PURE__ */ new Map();
function tk(e) {
	return "string" == typeof e || "symbol" == typeof e;
}
var tN = ((J = {})[J.MATCHER_NOT_FOUND = 1] = "MATCHER_NOT_FOUND", J[J.NAVIGATION_GUARD_REDIRECT = 2] = "NAVIGATION_GUARD_REDIRECT", J[J.NAVIGATION_ABORTED = 4] = "NAVIGATION_ABORTED", J[J.NAVIGATION_CANCELLED = 8] = "NAVIGATION_CANCELLED", J[J.NAVIGATION_DUPLICATED = 16] = "NAVIGATION_DUPLICATED", J), ty = Symbol("");
function tv(e, t) {
	return nF(Error(), {
		type: e,
		[ty]: !0
	}, t);
}
function tb(e, t) {
	return e instanceof Error && ty in e && (null == t || !!(e.type & t));
}
function tg(e) {
	let t = {};
	if ("" === e || "?" === e) return t;
	let a = ("?" === e[0] ? e.slice(1) : e).split("&");
	for (let e = 0; e < a.length; ++e) {
		let r = a[e].replace(nJ, " "), s = r.indexOf("="), o = tn(s < 0 ? r : r.slice(0, s)), c = s < 0 ? null : tn(r.slice(s + 1));
		if (o in t) {
			let e = t[o];
			nW(e) || (e = t[o] = [e]), e.push(c);
		} else t[o] = c;
	}
	return t;
}
function tw(e) {
	let t = "";
	for (let a in e) {
		let r = e[a];
		if (a = n9(a).replace(nZ, "%3D"), null == r) {
			void 0 !== r && (t += (t.length ? "&" : "") + a);
			continue;
		}
		(nW(r) ? r.map((e) => e && n9(e)) : [r && n9(r)]).forEach((e) => {
			void 0 !== e && (t += (t.length ? "&" : "") + a, null != e && (t += "=" + e));
		});
	}
	return t;
}
tN.MATCHER_NOT_FOUND, tN.NAVIGATION_GUARD_REDIRECT, tN.NAVIGATION_ABORTED, tN.NAVIGATION_CANCELLED, tN.NAVIGATION_DUPLICATED;
var t_ = Symbol(""), tA = Symbol(""), tO = Symbol(""), tx = Symbol(""), tj = Symbol("");
function tE() {
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
function tS(e, t, a, r, s, o = (e) => e()) {
	let c = r && (r.enterCallbacks[s] = r.enterCallbacks[s] || []);
	return () => new Promise((i, l) => {
		let u = (e) => {
			if (!1 === e) l(tv(tN.NAVIGATION_ABORTED, {
				from: a,
				to: t
			}));
			else if (e instanceof Error) l(e);
			else "string" == typeof e || e && "object" == typeof e ? l(tv(tN.NAVIGATION_GUARD_REDIRECT, {
				from: t,
				to: e
			})) : (c && r.enterCallbacks[s] === c && "function" == typeof e && c.push(e), i());
		}, p = Promise.resolve(o(() => e.call(r && r.instances[s], t, a, u)));
		e.length < 3 && (p = p.then(u)), p.catch((e) => l(e));
	});
}
function tI(e, t, a, r, s = (e) => e()) {
	let o = [];
	for (let c of e) for (let e in c.components) {
		let i = c.components[e];
		if ("beforeRouteEnter" === t || c.instances[e]) if (nG(i)) {
			let l = (i.__vccOpts || i)[t];
			l && o.push(tS(l, a, r, c, e, s));
		} else {
			let l = i();
			o.push(() => l.then((o) => {
				if (!o) throw Error(`Couldn't resolve component "${e}" at "${c.path}"`);
				let i = o.__esModule || "Module" === o[Symbol.toStringTag] || o.default && nG(o.default) ? o.default : o;
				c.mods[e] = o, c.components[e] = i;
				let l = (i.__vccOpts || i)[t];
				return l && tS(l, a, r, c, e, s)();
			}));
		}
	}
	return o;
}
function tP(e, t) {
	let { pathname: a, search: r, hash: s } = t, o = e.indexOf("#");
	if (o > -1) {
		let t = s.includes(e.slice(o)) ? e.slice(o).length : 1, a = s.slice(t);
		return "/" !== a[0] && (a = "/" + a), tr(a, "");
	}
	return tr(a, e) + r + s;
}
function tR(e, t, a, r = !1, s = !1) {
	return {
		back: e,
		current: t,
		forward: a,
		replaced: r,
		position: window.history.length,
		scroll: s ? th() : null
	};
}
function tC(e) {
	let t = function(e) {
		let { history: t, location: a } = window, r = { value: tP(e, a) }, s = { value: t.state };
		function o(r, o, c) {
			let i = e.indexOf("#"), l = i > -1 ? (a.host && document.querySelector("base") ? e : e.slice(i)) + r : location.protocol + "//" + location.host + e + r;
			try {
				t[c ? "replaceState" : "pushState"](o, "", l), s.value = o;
			} catch (e) {
				console.error(e), a[c ? "replace" : "assign"](l);
			}
		}
		return s.value || o(r.value, {
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
				let c = nF({}, s.value, t.state, {
					forward: e,
					scroll: th()
				});
				o(c.current, c, !0), o(e, nF({}, tR(r.value, e, null), { position: c.position + 1 }, a), !1), r.value = e;
			},
			replace: function(e, a) {
				o(e, nF({}, t.state, tR(s.value.back, e, s.value.forward, !0), a, { position: s.value.position }), !0), r.value = e;
			}
		};
	}(e = function(e) {
		if (!e) if (nM) {
			let t = document.querySelector("base");
			e = (e = t && t.getAttribute("href") || "/").replace(/^\w+:\/\/[^\/]+/, "");
		} else e = "/";
		return "/" !== e[0] && "#" !== e[0] && (e = "/" + e), e.replace(tt, "");
	}(e)), a = function(e, t, a, r) {
		let s = [], o = [], c = null, i = ({ state: o }) => {
			let i = tP(e, location), l = a.value, u = t.value, p = 0;
			if (o) {
				if (a.value = i, t.value = o, c && c === l) {
					c = null;
					return;
				}
				p = u ? o.position - u.position : 0;
			} else r(i);
			s.forEach((e) => {
				e(a.value, l, {
					delta: p,
					type: tl.pop,
					direction: p ? p > 0 ? tu.forward : tu.back : tu.unknown
				});
			});
		};
		function l() {
			if ("hidden" === document.visibilityState) {
				let { history: e } = window;
				e.state && e.replaceState(nF({}, e.state, { scroll: th() }), "");
			}
		}
		return window.addEventListener("popstate", i), window.addEventListener("pagehide", l), document.addEventListener("visibilitychange", l), {
			pauseListeners: function() {
				c = a.value;
			},
			listen: function(e) {
				s.push(e);
				let t = () => {
					let t = s.indexOf(e);
					t > -1 && s.splice(t, 1);
				};
				return o.push(t), t;
			},
			destroy: function() {
				for (let e of o) e();
				o = [], window.removeEventListener("popstate", i), window.removeEventListener("pagehide", l), document.removeEventListener("visibilitychange", l);
			}
		};
	}(e, t.state, t.location, t.replace), r = nF({
		location: "",
		base: e,
		go: function(e, t = !0) {
			t || a.pauseListeners(), history.go(e);
		},
		createHref: td.bind(null, e)
	}, t, a);
	return Object.defineProperty(r, "location", {
		enumerable: !0,
		get: () => t.location.value
	}), Object.defineProperty(r, "state", {
		enumerable: !0,
		get: () => t.state.value
	}), r;
}
var tT = ((ee = {})[ee.Static = 0] = "Static", ee[ee.Param = 1] = "Param", ee[ee.Group = 2] = "Group", ee), tD = ((en = tD || {})[en.Static = 0] = "Static", en[en.Param = 1] = "Param", en[en.ParamRegExp = 2] = "ParamRegExp", en[en.ParamRegExpEnd = 3] = "ParamRegExpEnd", en[en.EscapeNext = 4] = "EscapeNext", en), t$ = {
	type: tT.Static,
	value: ""
}, tV = /[a-zA-Z0-9_]/, tL = "[^/]+?", tB = {
	sensitive: !1,
	strict: !1,
	start: !0,
	end: !0
}, tU = ((et = tU || {})[et._multiplier = 10] = "_multiplier", et[et.Root = 90] = "Root", et[et.Segment = 40] = "Segment", et[et.SubSegment = 30] = "SubSegment", et[et.Static = 40] = "Static", et[et.Dynamic = 20] = "Dynamic", et[et.BonusCustomRegExp = 10] = "BonusCustomRegExp", et[et.BonusWildcard = -50] = "BonusWildcard", et[et.BonusRepeatable = -20] = "BonusRepeatable", et[et.BonusOptional = -8] = "BonusOptional", et[et.BonusStrict = .7000000000000001] = "BonusStrict", et[et.BonusCaseSensitive = .25] = "BonusCaseSensitive", et), tM = /[.+*?^${}()[\]/\\]/g;
function tG(e, t) {
	let a = 0, r = e.score, s = t.score;
	for (; a < r.length && a < s.length;) {
		let e = function(e, t) {
			let a = 0;
			for (; a < e.length && a < t.length;) {
				let r = t[a] - e[a];
				if (r) return r;
				a++;
			}
			return e.length < t.length ? 1 === e.length && e[0] === tU.Static + tU.Segment ? -1 : 1 : e.length > t.length ? 1 === t.length && t[0] === tU.Static + tU.Segment ? 1 : -1 : 0;
		}(r[a], s[a]);
		if (e) return e;
		a++;
	}
	if (1 === Math.abs(s.length - r.length)) {
		if (tF(r)) return 1;
		if (tF(s)) return -1;
	}
	return s.length - r.length;
}
function tF(e) {
	let t = e[e.length - 1];
	return e.length > 0 && t[t.length - 1] < 0;
}
var tz = {
	strict: !1,
	end: !0,
	sensitive: !1
};
function tq(e, t) {
	let a = {};
	for (let r of t) r in e && (a[r] = e[r]);
	return a;
}
function tW(e) {
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
function tH(e) {
	for (; e;) {
		if (e.record.aliasOf) return !0;
		e = e.parent;
	}
	return !1;
}
function tK({ record: e }) {
	return !!(e.name || e.components && Object.keys(e.components).length || e.redirect);
}
function tX(e) {
	let t = m(tO), a = m(tx), r = v(() => {
		let a = _(e.to);
		return t.resolve(a);
	}), s = v(() => {
		let { matched: e } = r.value, { length: t } = e, s = e[t - 1], o = a.matched;
		if (!s || !o.length) return -1;
		let c = o.findIndex(ts.bind(null, s));
		if (c > -1) return c;
		let i = tZ(e[t - 2]);
		return t > 1 && tZ(s) === i && o[o.length - 1].path !== i ? o.findIndex(ts.bind(null, e[t - 2])) : c;
	}), o = v(() => s.value > -1 && function(e, t) {
		for (let a in t) {
			let r = t[a], s = e[a];
			if ("string" == typeof r) {
				if (r !== s) return !1;
			} else if (!nW(s) || s.length !== r.length || r.some((e, t) => e !== s[t])) return !1;
		}
		return !0;
	}(a.params, r.value.params)), c = v(() => s.value > -1 && s.value === a.matched.length - 1 && to(a.params, r.value.params));
	return {
		route: r,
		href: v(() => r.value.href),
		isActive: o,
		isExactActive: c,
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
				let a = t[_(e.replace) ? "replace" : "push"](_(e.to)).catch(nq);
				return e.viewTransition && "undefined" != typeof document && "startViewTransition" in document && document.startViewTransition(() => a), a;
			}
			return Promise.resolve();
		}
	};
}
var tY = b({
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
	useLink: tX,
	setup(e, { slots: t }) {
		let a = P(tX(e)), { options: r } = m(tO), s = v(() => ({
			[tQ(e.activeClass, r.linkActiveClass, "router-link-active")]: a.isActive,
			[tQ(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: a.isExactActive
		}));
		return () => {
			var r;
			let o = t.default && (1 === (r = t.default(a)).length ? r[0] : r);
			return e.custom ? o : k("a", {
				"aria-current": a.isExactActive ? e.ariaCurrentValue : null,
				href: a.href,
				onClick: a.navigate,
				class: s.value
			}, o);
		};
	}
});
function tZ(e) {
	return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
var tQ = (e, t, a) => null != e ? e : null != t ? t : a, tJ = b({
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
		let r = m(tj), s = v(() => e.route || r.value), o = m(tA, 0), c = v(() => {
			let e, t = _(o), { matched: a } = s.value;
			for (; (e = a[t]) && !e.components;) t++;
			return t;
		}), i = v(() => s.value.matched[c.value]);
		O(tA, v(() => c.value + 1)), O(t_, i), O(tj, s);
		let l = w();
		return g(() => [
			l.value,
			i.value,
			e.name
		], ([e, t, a], [r, s, o]) => {
			t && (t.instances[a] = e, s && s !== t && e && e === r && (t.leaveGuards.size || (t.leaveGuards = s.leaveGuards), t.updateGuards.size || (t.updateGuards = s.updateGuards))), !e || !t || s && ts(t, s) && r || (t.enterCallbacks[a] || []).forEach((t) => t(e));
		}, { flush: "post" }), () => {
			let r = s.value, o = e.name, c = i.value, u = c && c.components[o];
			if (!u) return t0(a.default, {
				Component: u,
				route: r
			});
			let p = c.props[o], d = k(u, nF({}, p ? !0 === p ? r.params : "function" == typeof p ? p(r) : p : null, t, {
				onVnodeUnmounted: (e) => {
					e.component.isUnmounted && (c.instances[o] = null);
				},
				ref: l
			}));
			return t0(a.default, {
				Component: d,
				route: r
			}) || d;
		};
	}
});
function t0(e, t) {
	if (!e) return null;
	let a = e(t);
	return 1 === a.length ? a[0] : a;
}
function t1(e) {
	let t, a, r, s = function(e, t) {
		let a = [], r = /* @__PURE__ */ new Map();
		function s(e, c, i) {
			let l, u, p = !i, d = tW(e);
			d.aliasOf = i && i.record;
			let h = nH(t, e), f = [d];
			if ("alias" in e) for (let t of "string" == typeof e.alias ? [e.alias] : e.alias) f.push(tW(nF({}, d, {
				components: i ? i.record.components : d.components,
				path: t,
				aliasOf: i ? i.record : d
			})));
			for (let t of f) {
				let { path: f } = t;
				if (c && "/" !== f[0]) {
					let e = c.record.path, a = "/" === e[e.length - 1] ? "" : "/";
					t.path = c.record.path + (f && a + f);
				}
				if (l = function(e, t, a) {
					let r = nF(function(e, t) {
						let a = nF({}, tB, t), r = [], s = a.start ? "^" : "", o = [];
						for (let t of e) {
							let e = t.length ? [] : [tU.Root];
							a.strict && !t.length && (s += "/");
							for (let r = 0; r < t.length; r++) {
								let c = t[r], i = tU.Segment + (a.sensitive ? tU.BonusCaseSensitive : 0);
								if (c.type === tT.Static) r || (s += "/"), s += c.value.replace(tM, "\\$&"), i += tU.Static;
								else if (c.type === tT.Param) {
									let { value: e, repeatable: a, optional: l, regexp: u } = c;
									o.push({
										name: e,
										repeatable: a,
										optional: l
									});
									let p = u || tL;
									p !== tL && (i += tU.BonusCustomRegExp);
									let d = a ? `((?:${p})(?:/(?:${p}))*)` : `(${p})`;
									r || (d = l && t.length < 2 ? `(?:/${d})` : "/" + d), l && (d += "?"), s += d, i += tU.Dynamic, l && (i += tU.BonusOptional), a && (i += tU.BonusRepeatable), ".*" === p && (i += tU.BonusWildcard);
								}
								e.push(i);
							}
							r.push(e);
						}
						if (a.strict && a.end) {
							let e = r.length - 1;
							r[e][r[e].length - 1] += tU.BonusStrict;
						}
						a.strict || (s += "/?"), a.end ? s += "$" : a.strict && !s.endsWith("/") && (s += "(?:/|$)");
						let c = new RegExp(s, a.sensitive ? "" : "i");
						return {
							re: c,
							score: r,
							keys: o,
							parse: function(e) {
								let t = e.match(c), a = {};
								if (!t) return null;
								for (let e = 1; e < t.length; e++) {
									let r = t[e] || "", s = o[e - 1];
									a[s.name] = r && s.repeatable ? r.split("/") : r;
								}
								return a;
							},
							stringify: function(t) {
								let a = "", r = !1;
								for (let s of e) for (let e of (r && a.endsWith("/") || (a += "/"), r = !1, s)) if (e.type === tT.Static) a += e.value;
								else if (e.type === tT.Param) {
									let { value: o, repeatable: c, optional: i } = e, l = o in t ? t[o] : "";
									if (nW(l) && !c) throw Error(`Provided param "${o}" is an array but it is not repeatable (* or + modifiers)`);
									let u = nW(l) ? l.join("/") : l;
									if (!u) if (i) s.length < 2 && (a.endsWith("/") ? a = a.slice(0, -1) : r = !0);
									else throw Error(`Missing required param "${o}"`);
									a += u;
								}
								return a || "/";
							}
						};
					}(function(e) {
						let t, a;
						if (!e) return [[]];
						if ("/" === e) return [[t$]];
						if (!e.startsWith("/")) throw Error(`Invalid path "${e}"`);
						function r(e) {
							throw Error(`ERR (${s})/"${u}": ${e}`);
						}
						let s = tD.Static, o = s, c = [];
						function i() {
							t && c.push(t), t = [];
						}
						let l = 0, u = "", p = "";
						function d() {
							u && (s === tD.Static ? t.push({
								type: tT.Static,
								value: u
							}) : s === tD.Param || s === tD.ParamRegExp || s === tD.ParamRegExpEnd ? (t.length > 1 && ("*" === a || "+" === a) && r(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`), t.push({
								type: tT.Param,
								value: u,
								regexp: p,
								repeatable: "*" === a || "+" === a,
								optional: "*" === a || "?" === a
							})) : r("Invalid state to consume buffer"), u = "");
						}
						for (; l < e.length;) {
							if ("\\" === (a = e[l++]) && s !== tD.ParamRegExp) {
								o = s, s = tD.EscapeNext;
								continue;
							}
							switch (s) {
								case tD.Static:
									"/" === a ? (u && d(), i()) : ":" === a ? (d(), s = tD.Param) : u += a;
									break;
								case tD.EscapeNext:
									u += a, s = o;
									break;
								case tD.Param:
									"(" === a ? s = tD.ParamRegExp : tV.test(a) ? u += a : (d(), s = tD.Static, "*" !== a && "?" !== a && "+" !== a && l--);
									break;
								case tD.ParamRegExp:
									")" === a ? "\\" == p[p.length - 1] ? p = p.slice(0, -1) + a : s = tD.ParamRegExpEnd : p += a;
									break;
								case tD.ParamRegExpEnd:
									d(), s = tD.Static, "*" !== a && "?" !== a && "+" !== a && l--, p = "";
									break;
								default: r("Unknown state");
							}
						}
						return s === tD.ParamRegExp && r(`Unfinished custom RegExp for param "${u}"`), d(), i(), c;
					}(e.path), a), {
						record: e,
						parent: t,
						children: [],
						alias: []
					});
					return t && !r.record.aliasOf == !t.record.aliasOf && t.children.push(r), r;
				}(t, c, h), i ? i.alias.push(l) : ((u = u || l) !== l && u.alias.push(l), p && e.name && !tH(l) && o(e.name)), tK(l) && function(e) {
					let t = function(e, t) {
						let a = 0, r = t.length;
						for (; a !== r;) {
							let s = a + r >> 1;
							0 > tG(e, t[s]) ? r = s : a = s + 1;
						}
						let s = function(e) {
							let t = e;
							for (; t = t.parent;) if (tK(t) && 0 === tG(e, t)) return t;
						}(e);
						return s && (r = t.lastIndexOf(s, r - 1)), r;
					}(e, a);
					a.splice(t, 0, e), e.record.name && !tH(e) && r.set(e.record.name, e);
				}(l), d.children) {
					let e = d.children;
					for (let t = 0; t < e.length; t++) s(e[t], l, i && i.children[t]);
				}
				i = i || l;
			}
			return u ? () => {
				o(u);
			} : nq;
		}
		function o(e) {
			if (tk(e)) {
				let t = r.get(e);
				t && (r.delete(e), a.splice(a.indexOf(t), 1), t.children.forEach(o), t.alias.forEach(o));
			} else {
				let t = a.indexOf(e);
				t > -1 && (a.splice(t, 1), e.record.name && r.delete(e.record.name), e.children.forEach(o), e.alias.forEach(o));
			}
		}
		return t = nH(tz, t), e.forEach((e) => s(e)), {
			addRoute: s,
			resolve: function(e, t) {
				let s, o, c, i = {};
				if ("name" in e && e.name) {
					if (!(s = r.get(e.name))) throw tv(tN.MATCHER_NOT_FOUND, { location: e });
					c = s.record.name, i = nF(tq(t.params, s.keys.filter((e) => !e.optional).concat(s.parent ? s.parent.keys.filter((e) => e.optional) : []).map((e) => e.name)), e.params && tq(e.params, s.keys.map((e) => e.name))), o = s.stringify(i);
				} else if (null != e.path) o = e.path, (s = a.find((e) => e.re.test(o))) && (i = s.parse(o), c = s.record.name);
				else {
					if (!(s = t.name ? r.get(t.name) : a.find((e) => e.re.test(t.path)))) throw tv(tN.MATCHER_NOT_FOUND, {
						location: e,
						currentLocation: t
					});
					c = s.record.name, i = nF({}, t.params, e.params), o = s.stringify(i);
				}
				let l = [], u = s;
				for (; u;) l.unshift(u.record), u = u.parent;
				return {
					name: c,
					path: o,
					params: i,
					matched: l,
					meta: l.reduce((e, t) => nF(e, t.meta), {})
				};
			},
			removeRoute: o,
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
	}(e.routes, e), o = e.parseQuery || tg, c = e.stringifyQuery || tw, i = e.history, l = tE(), u = tE(), p = tE(), d = R(ti), h = ti;
	nM && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
	let f = nz.bind(null, (e) => "" + e), m = nz.bind(null, te), k = nz.bind(null, tn);
	function N(e, t) {
		let a;
		if (t = nF({}, t || d.value), "string" == typeof e) {
			let a = ta(o, e, t.path), r = s.resolve({ path: a.path }, t), c = i.createHref(a.fullPath);
			return nF(a, r, {
				params: k(r.params),
				hash: tn(a.hash),
				redirectedFrom: void 0,
				href: c
			});
		}
		if (null != e.path) a = nF({}, e, { path: ta(o, e.path, t.path).path });
		else {
			let r = nF({}, e.params);
			for (let e in r) r[e] ?? delete r[e];
			a = nF({}, e, { params: m(r) }), t.params = m(t.params);
		}
		let r = s.resolve(a, t), l = e.hash || "";
		r.params = f(k(r.params));
		let u = function(e, t) {
			let a = t.query ? e(t.query) : "";
			return t.path + (a && "?") + a + (t.hash || "");
		}(c, nF({}, e, {
			hash: n8(l).replace(n4, "{").replace(n5, "}").replace(n2, "^"),
			path: r.path
		})), p = i.createHref(u);
		return nF({
			fullPath: u,
			hash: l,
			query: c === tw ? function(e) {
				let t = {};
				for (let a in e) {
					let r = e[a];
					void 0 !== r && (t[a] = nW(r) ? r.map((e) => null == e ? null : "" + e) : null == r ? r : "" + r);
				}
				return t;
			}(e.query) : e.query || {}
		}, r, {
			redirectedFrom: void 0,
			href: p
		});
	}
	function y(e) {
		return "string" == typeof e ? ta(o, e, d.value.path) : nF({}, e);
	}
	function v(e, t) {
		if (h !== e) return tv(tN.NAVIGATION_CANCELLED, {
			from: t,
			to: e
		});
	}
	function b(e, t) {
		let a = e.matched[e.matched.length - 1];
		if (a && a.redirect) {
			let { redirect: r } = a, s = "function" == typeof r ? r(e, t) : r;
			return "string" == typeof s && ((s = s.includes("?") || s.includes("#") ? s = y(s) : { path: s }).params = {}), nF({
				query: e.query,
				hash: e.hash,
				params: null != s.path ? {} : e.params
			}, s);
		}
	}
	function g(e, t) {
		let a, r = h = N(e), s = d.value, o = e.state, i = e.force, l = !0 === e.replace, u = b(r, s);
		return u ? g(nF(y(u), {
			state: "object" == typeof u ? nF({}, o, u.state) : o,
			force: i,
			replace: l
		}), t || r) : (r.redirectedFrom = t, !i && function(e, t, a) {
			let r = t.matched.length - 1, s = a.matched.length - 1;
			return r > -1 && r === s && ts(t.matched[r], a.matched[s]) && to(t.params, a.params) && e(t.query) === e(a.query) && t.hash === a.hash;
		}(c, s, r) && (a = tv(tN.NAVIGATION_DUPLICATED, {
			to: r,
			from: s
		}), D(s, s, !0, !1)), (a ? Promise.resolve(a) : j(r, s)).catch((e) => tb(e) ? tb(e, tN.NAVIGATION_GUARD_REDIRECT) ? e : T(e) : C(e, r, s)).then((e) => {
			if (e) {
				if (tb(e, tN.NAVIGATION_GUARD_REDIRECT)) return g(nF({ replace: l }, y(e.to), {
					state: "object" == typeof e.to ? nF({}, o, e.to.state) : o,
					force: i
				}), t || r);
			} else e = S(r, s, !0, l, o);
			return E(r, s, e), e;
		}));
	}
	function w(e, t) {
		let a = v(e, t);
		return a ? Promise.reject(a) : Promise.resolve();
	}
	function O(e) {
		let t = V.values().next().value;
		return t && "function" == typeof t.runWithContext ? t.runWithContext(e) : e();
	}
	function j(e, t) {
		let a, [r, s, o] = function(e, t) {
			let a = [], r = [], s = [], o = Math.max(t.matched.length, e.matched.length);
			for (let c = 0; c < o; c++) {
				let o = t.matched[c];
				o && (e.matched.find((e) => ts(e, o)) ? r.push(o) : a.push(o));
				let i = e.matched[c];
				i && !t.matched.find((e) => ts(e, i)) && s.push(i);
			}
			return [
				a,
				r,
				s
			];
		}(e, t);
		for (let s of (a = tI(r.reverse(), "beforeRouteLeave", e, t), r)) s.leaveGuards.forEach((r) => {
			a.push(tS(r, e, t));
		});
		let c = w.bind(null, e, t);
		return a.push(c), B(a).then(() => {
			for (let r of (a = [], l.list())) a.push(tS(r, e, t));
			return a.push(c), B(a);
		}).then(() => {
			for (let r of (a = tI(s, "beforeRouteUpdate", e, t), s)) r.updateGuards.forEach((r) => {
				a.push(tS(r, e, t));
			});
			return a.push(c), B(a);
		}).then(() => {
			for (let r of (a = [], o)) if (r.beforeEnter) if (nW(r.beforeEnter)) for (let s of r.beforeEnter) a.push(tS(s, e, t));
			else a.push(tS(r.beforeEnter, e, t));
			return a.push(c), B(a);
		}).then(() => (e.matched.forEach((e) => e.enterCallbacks = {}), (a = tI(o, "beforeRouteEnter", e, t, O)).push(c), B(a))).then(() => {
			for (let r of (a = [], u.list())) a.push(tS(r, e, t));
			return a.push(c), B(a);
		}).catch((e) => tb(e, tN.NAVIGATION_CANCELLED) ? e : Promise.reject(e));
	}
	function E(e, t, a) {
		p.list().forEach((r) => O(() => r(e, t, a)));
	}
	function S(e, t, a, r, s) {
		let o = v(e, t);
		if (o) return o;
		let c = t === ti, l = nM ? history.state : {};
		a && (r || c ? i.replace(e.fullPath, nF({ scroll: c && l && l.scroll }, s)) : i.push(e.fullPath, s)), d.value = e, D(e, t, a, c), T();
	}
	let I = tE(), P = tE();
	function C(e, t, a) {
		T(e);
		let r = P.list();
		return r.length ? r.forEach((r) => r(e, t, a)) : console.error(e), Promise.reject(e);
	}
	function T(e) {
		return a || (a = !e, t || (t = i.listen((e, t, a) => {
			var r, s;
			if (!L.listening) return;
			let o = N(e), c = b(o, L.currentRoute.value);
			if (c) return void g(nF(c, {
				replace: !0,
				force: !0
			}), o).catch(nq);
			h = o;
			let l = d.value;
			nM && (r = tf(l.fullPath, a.delta), s = th(), tm.set(r, s)), j(o, l).catch((e) => tb(e, tN.NAVIGATION_ABORTED | tN.NAVIGATION_CANCELLED) ? e : tb(e, tN.NAVIGATION_GUARD_REDIRECT) ? (g(nF(y(e.to), { force: !0 }), o).then((e) => {
				tb(e, tN.NAVIGATION_ABORTED | tN.NAVIGATION_DUPLICATED) && !a.delta && a.type === tl.pop && i.go(-1, !1);
			}).catch(nq), Promise.reject()) : (a.delta && i.go(-a.delta, !1), C(e, o, l))).then((e) => {
				(e = e || S(o, l, !1)) && (a.delta && !tb(e, tN.NAVIGATION_CANCELLED) ? i.go(-a.delta, !1) : a.type === tl.pop && tb(e, tN.NAVIGATION_ABORTED | tN.NAVIGATION_DUPLICATED) && i.go(-1, !1)), E(o, l, e);
			}).catch(nq);
		})), I.list().forEach(([t, a]) => e ? a(e) : t()), I.reset()), e;
	}
	function D(t, a, r, s) {
		let { scrollBehavior: o } = e;
		if (!nM || !o) return Promise.resolve();
		let c = !r && function(e) {
			let t = tm.get(e);
			return tm.delete(e), t;
		}(tf(t.fullPath, 0)) || (s || !r) && history.state && history.state.scroll || null;
		return A().then(() => o(t, a, c)).then((e) => e && function(e) {
			let t;
			if ("el" in e) {
				let a = e.el, r = "string" == typeof a && a.startsWith("#"), s = "string" == typeof a ? r ? document.getElementById(a.slice(1)) : document.querySelector(a) : a;
				if (!s) return;
				t = function(e, t) {
					let a = document.documentElement.getBoundingClientRect(), r = e.getBoundingClientRect();
					return {
						behavior: t.behavior,
						left: r.left - a.left - (t.left || 0),
						top: r.top - a.top - (t.top || 0)
					};
				}(s, e);
			} else t = e;
			"scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(null != t.left ? t.left : window.scrollX, null != t.top ? t.top : window.scrollY);
		}(e)).catch((e) => C(e, t, a));
	}
	let $ = (e) => i.go(e), V = /* @__PURE__ */ new Set(), L = {
		currentRoute: d,
		listening: !0,
		addRoute: function(e, t) {
			let a, r;
			return tk(e) ? (a = s.getRecordMatcher(e), r = t) : r = e, s.addRoute(r, a);
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
		resolve: N,
		options: e,
		push: function(e) {
			return g(e);
		},
		replace: function(e) {
			return g(nF(y(e), { replace: !0 }));
		},
		go: $,
		back: () => $(-1),
		forward: () => $(1),
		beforeEach: l.add,
		beforeResolve: u.add,
		afterEach: p.add,
		onError: P.add,
		isReady: function() {
			return a && d.value !== ti ? Promise.resolve() : new Promise((e, t) => {
				I.add([e, t]);
			});
		},
		install(e) {
			e.component("RouterLink", tY), e.component("RouterView", tJ), e.config.globalProperties.$router = L, Object.defineProperty(e.config.globalProperties, "$route", {
				enumerable: !0,
				get: () => _(d)
			}), nM && !r && d.value === ti && (r = !0, g(i.location).catch((e) => {}));
			let s = {};
			for (let e in ti) Object.defineProperty(s, e, {
				get: () => d.value[e],
				enumerable: !0
			});
			e.provide(tO, L), e.provide(tx, x(s)), e.provide(tj, d);
			let o = e.unmount;
			V.add(e), e.unmount = function() {
				V.delete(e), V.size < 1 && (h = ti, t && t(), t = null, d.value = ti, r = !1, a = !1), o();
			};
		}
	};
	function B(e) {
		return e.reduce((e, t) => e.then(() => O(t)), Promise.resolve());
	}
	return L;
}
function t2() {
	return m(tO);
}
let t3 = tY, t4 = tJ;
function t7(e) {
	return "function" == typeof e;
}
function t5(e) {
	var t = e(function(e) {
		Error.call(e), e.stack = Error().stack;
	});
	return t.prototype = Object.create(Error.prototype), t.prototype.constructor = t, t;
}
var t6 = t5(function(e) {
	return function(t) {
		e(this), this.message = t ? t.length + " errors occurred during unsubscription:\n" + t.map(function(e, t) {
			return t + 1 + ") " + e.toString();
		}).join("\n  ") : "", this.name = "UnsubscriptionError", this.errors = t;
	};
});
function t8(e, t) {
	if (e) {
		var a = e.indexOf(t);
		0 <= a && e.splice(a, 1);
	}
}
var t9 = function() {
	var e;
	function t(e) {
		this.initialTeardown = e, this.closed = !1, this._parentage = null, this._finalizers = null;
	}
	return t.prototype.unsubscribe = function() {
		if (!this.closed) {
			this.closed = !0;
			var e, t, a, r, s, o = this._parentage;
			if (o) if (this._parentage = null, Array.isArray(o)) try {
				for (var i = f(o), u = i.next(); !u.done; u = i.next()) u.value.remove(this);
			} catch (t) {
				e = { error: t };
			} finally {
				try {
					u && !u.done && (t = i.return) && t.call(i);
				} finally {
					if (e) throw e.error;
				}
			}
			else o.remove(this);
			var p = this.initialTeardown;
			if (t7(p)) try {
				p();
			} catch (e) {
				s = e instanceof t6 ? e.errors : [e];
			}
			var d = this._finalizers;
			if (d) {
				this._finalizers = null;
				try {
					for (var h = f(d), m = h.next(); !m.done; m = h.next()) {
						var k = m.value;
						try {
							at(k);
						} catch (e) {
							s = null != s ? s : [], e instanceof t6 ? s = l(l([], c(s)), c(e.errors)) : s.push(e);
						}
					}
				} catch (e) {
					a = { error: e };
				} finally {
					try {
						m && !m.done && (r = h.return) && r.call(h);
					} finally {
						if (a) throw a.error;
					}
				}
			}
			if (s) throw new t6(s);
		}
	}, t.prototype.add = function(e) {
		var a;
		if (e && e !== this) if (this.closed) at(e);
		else {
			if (e instanceof t) {
				if (e.closed || e._hasParent(this)) return;
				e._addParent(this);
			}
			(this._finalizers = null != (a = this._finalizers) ? a : []).push(e);
		}
	}, t.prototype._hasParent = function(e) {
		var t = this._parentage;
		return t === e || Array.isArray(t) && t.includes(e);
	}, t.prototype._addParent = function(e) {
		var t = this._parentage;
		this._parentage = Array.isArray(t) ? (t.push(e), t) : t ? [t, e] : e;
	}, t.prototype._removeParent = function(e) {
		var t = this._parentage;
		t === e ? this._parentage = null : Array.isArray(t) && t8(t, e);
	}, t.prototype.remove = function(e) {
		var a = this._finalizers;
		a && t8(a, e), e instanceof t && e._removeParent(this);
	}, (e = new t()).closed = !0, t.EMPTY = e, t;
}(), ae = t9.EMPTY;
function an(e) {
	return e instanceof t9 || e && "closed" in e && t7(e.remove) && t7(e.add) && t7(e.unsubscribe);
}
function at(e) {
	t7(e) ? e() : e.unsubscribe();
}
var aa = void 0, ar = {
	setTimeout: function(e, t) {
		for (var a = [], r = 2; r < arguments.length; r++) a[r - 2] = arguments[r];
		var s = ar.delegate;
		return (null == s ? void 0 : s.setTimeout) ? s.setTimeout.apply(s, l([e, t], c(a))) : setTimeout.apply(void 0, l([e, t], c(a)));
	},
	clearTimeout: function(e) {
		var t = ar.delegate;
		return ((null == t ? void 0 : t.clearTimeout) || clearTimeout)(e);
	},
	delegate: void 0
};
function as(e) {
	ar.setTimeout(function() {
		throw e;
	});
}
function ao() {}
var ac = ai("C", void 0, void 0);
function ai(e, t, a) {
	return {
		kind: e,
		value: t,
		error: a
	};
}
function au(e) {
	e();
}
var ap = function(e) {
	function t(t) {
		var a = e.call(this) || this;
		return a.isStopped = !1, t ? (a.destination = t, an(t) && t.add(a)) : a.destination = ay, a;
	}
	return p(t, e), t.create = function(e, t, a) {
		return new am(e, t, a);
	}, t.prototype.next = function(e) {
		this.isStopped ? aN(ai("N", e, void 0), this) : this._next(e);
	}, t.prototype.error = function(e) {
		this.isStopped ? aN(ai("E", void 0, e), this) : (this.isStopped = !0, this._error(e));
	}, t.prototype.complete = function() {
		this.isStopped ? aN(ac, this) : (this.isStopped = !0, this._complete());
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
}(t9);
Function.prototype.bind;
var af = function() {
	function e(e) {
		this.partialObserver = e;
	}
	return e.prototype.next = function(e) {
		var t = this.partialObserver;
		if (t.next) try {
			t.next(e);
		} catch (e) {
			ak(e);
		}
	}, e.prototype.error = function(e) {
		var t = this.partialObserver;
		if (t.error) try {
			t.error(e);
		} catch (e) {
			ak(e);
		}
		else ak(e);
	}, e.prototype.complete = function() {
		var e = this.partialObserver;
		if (e.complete) try {
			e.complete();
		} catch (e) {
			ak(e);
		}
	}, e;
}(), am = function(e) {
	function t(t, a, r) {
		var s, c = e.call(this) || this;
		return t7(t) || !t ? s = {
			next: null != t ? t : void 0,
			error: null != a ? a : void 0,
			complete: null != r ? r : void 0
		} : s = t, c.destination = new af(s), c;
	}
	return p(t, e), t;
}(ap);
function ak(e) {
	as(e);
}
function aN(e, t) {}
var ay = {
	closed: !0,
	next: ao,
	error: function(e) {
		throw e;
	},
	complete: ao
}, av = "function" == typeof Symbol && Symbol.observable || "@@observable";
function ab(e) {
	return e;
}
function ag(e) {
	return 0 === e.length ? ab : 1 === e.length ? e[0] : function(t) {
		return e.reduce(function(e, t) {
			return t(e);
		}, t);
	};
}
var aw = function() {
	function e(e) {
		e && (this._subscribe = e);
	}
	return e.prototype.lift = function(t) {
		var a = new e();
		return a.source = this, a.operator = t, a;
	}, e.prototype.subscribe = function(e, t, a) {
		var r = this, s = !function(e) {
			return e && e instanceof ap || e && t7(e.next) && t7(e.error) && t7(e.complete) && an(e);
		}(e) ? new am(e, t, a) : e;
		return au(function() {
			var e = r.operator, t = r.source;
			s.add(e ? e.call(s, t) : t ? r._subscribe(s) : r._trySubscribe(s));
		}), s;
	}, e.prototype._trySubscribe = function(e) {
		try {
			return this._subscribe(e);
		} catch (t) {
			e.error(t);
		}
	}, e.prototype.forEach = function(e, t) {
		var a = this;
		return new (t = (a_(t)))(function(t, r) {
			var s = new am({
				next: function(t) {
					try {
						e(t);
					} catch (e) {
						r(e), s.unsubscribe();
					}
				},
				error: r,
				complete: t
			});
			a.subscribe(s);
		});
	}, e.prototype._subscribe = function(e) {
		var t;
		return null == (t = this.source) ? void 0 : t.subscribe(e);
	}, e.prototype[av] = function() {
		return this;
	}, e.prototype.pipe = function() {
		for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
		return ag(e)(this);
	}, e.prototype.toPromise = function(e) {
		var t = this;
		return new (e = (a_(e)))(function(e, a) {
			var r;
			t.subscribe(function(e) {
				return r = e;
			}, function(e) {
				return a(e);
			}, function() {
				return e(r);
			});
		});
	}, e.create = function(t) {
		return new e(t);
	}, e;
}();
function a_(e) {
	var t;
	return null != (t = null != e ? e : aa) ? t : Promise;
}
function aA(e) {
	return function(t) {
		if (t7(null == t ? void 0 : t.lift)) return t.lift(function(t) {
			try {
				return e(t, this);
			} catch (e) {
				this.error(e);
			}
		});
		throw TypeError("Unable to lift unknown Observable type");
	};
}
function aO(e, t, a, r, s) {
	return new ax(e, t, a, r, s);
}
var ax = function(e) {
	function t(t, a, r, s, o, c) {
		var i = e.call(this, t) || this;
		return i.onFinalize = o, i.shouldUnsubscribe = c, i._next = a ? function(e) {
			try {
				a(e);
			} catch (e) {
				t.error(e);
			}
		} : e.prototype._next, i._error = s ? function(e) {
			try {
				s(e);
			} catch (e) {
				t.error(e);
			} finally {
				this.unsubscribe();
			}
		} : e.prototype._error, i._complete = r ? function() {
			try {
				r();
			} catch (e) {
				t.error(e);
			} finally {
				this.unsubscribe();
			}
		} : e.prototype._complete, i;
	}
	return p(t, e), t.prototype.unsubscribe = function() {
		var t;
		if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
			var a = this.closed;
			e.prototype.unsubscribe.call(this), a || null == (t = this.onFinalize) || t.call(this);
		}
	}, t;
}(ap), aj = t5(function(e) {
	return function() {
		e(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
	};
}), aE = function(e) {
	function t() {
		var t = e.call(this) || this;
		return t.closed = !1, t.currentObservers = null, t.observers = [], t.isStopped = !1, t.hasError = !1, t.thrownError = null, t;
	}
	return p(t, e), t.prototype.lift = function(e) {
		var t = new aS(this, this);
		return t.operator = e, t;
	}, t.prototype._throwIfClosed = function() {
		if (this.closed) throw new aj();
	}, t.prototype.next = function(e) {
		var t = this;
		au(function() {
			var a, r;
			if (t._throwIfClosed(), !t.isStopped) {
				t.currentObservers || (t.currentObservers = Array.from(t.observers));
				try {
					for (var s = f(t.currentObservers), o = s.next(); !o.done; o = s.next()) o.value.next(e);
				} catch (e) {
					a = { error: e };
				} finally {
					try {
						o && !o.done && (r = s.return) && r.call(s);
					} finally {
						if (a) throw a.error;
					}
				}
			}
		});
	}, t.prototype.error = function(e) {
		var t = this;
		au(function() {
			if (t._throwIfClosed(), !t.isStopped) {
				t.hasError = t.isStopped = !0, t.thrownError = e;
				for (var a = t.observers; a.length;) a.shift().error(e);
			}
		});
	}, t.prototype.complete = function() {
		var e = this;
		au(function() {
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
		var t = this, a = this.hasError, r = this.isStopped, s = this.observers;
		return a || r ? ae : (this.currentObservers = null, s.push(e), new t9(function() {
			t.currentObservers = null, t8(s, e);
		}));
	}, t.prototype._checkFinalizedStatuses = function(e) {
		var t = this.hasError, a = this.thrownError, r = this.isStopped;
		t ? e.error(a) : r && e.complete();
	}, t.prototype.asObservable = function() {
		var e = new aw();
		return e.source = this, e;
	}, t.create = function(e, t) {
		return new aS(e, t);
	}, t;
}(aw), aS = function(e) {
	function t(t, a) {
		var r = e.call(this) || this;
		return r.destination = t, r.source = a, r;
	}
	return p(t, e), t.prototype.next = function(e) {
		var t, a;
		null == (a = null == (t = this.destination) ? void 0 : t.next) || a.call(t, e);
	}, t.prototype.error = function(e) {
		var t, a;
		null == (a = null == (t = this.destination) ? void 0 : t.error) || a.call(t, e);
	}, t.prototype.complete = function() {
		var e, t;
		null == (t = null == (e = this.destination) ? void 0 : e.complete) || t.call(e);
	}, t.prototype._subscribe = function(e) {
		var t, a;
		return null != (a = null == (t = this.source) ? void 0 : t.subscribe(e)) ? a : ae;
	}, t;
}(aE), aI = function(e) {
	function t(t) {
		var a = e.call(this) || this;
		return a._value = t, a;
	}
	return p(t, e), Object.defineProperty(t.prototype, "value", {
		get: function() {
			return this.getValue();
		},
		enumerable: !1,
		configurable: !0
	}), t.prototype._subscribe = function(t) {
		var a = e.prototype._subscribe.call(this, t);
		return a.closed || t.next(this._value), a;
	}, t.prototype.getValue = function() {
		var e = this.hasError, t = this.thrownError, a = this._value;
		if (e) throw t;
		return this._throwIfClosed(), a;
	}, t.prototype.next = function(t) {
		e.prototype.next.call(this, this._value = t);
	}, t;
}(aE), aP = {
	now: function() {
		return (aP.delegate || Date).now();
	},
	delegate: void 0
}, aR = function(e) {
	function t(t, a) {
		return e.call(this) || this;
	}
	return p(t, e), t.prototype.schedule = function(e, t) {
		return void 0 === t && (t = 0), this;
	}, t;
}(t9), aC = {
	setInterval: function(e, t) {
		for (var a = [], r = 2; r < arguments.length; r++) a[r - 2] = arguments[r];
		var s = aC.delegate;
		return (null == s ? void 0 : s.setInterval) ? s.setInterval.apply(s, l([e, t], c(a))) : setInterval.apply(void 0, l([e, t], c(a)));
	},
	clearInterval: function(e) {
		var t = aC.delegate;
		return ((null == t ? void 0 : t.clearInterval) || clearInterval)(e);
	},
	delegate: void 0
}, aT = function(e) {
	function t(t, a) {
		var r = e.call(this, t, a) || this;
		return r.scheduler = t, r.work = a, r.pending = !1, r;
	}
	return p(t, e), t.prototype.schedule = function(e, t) {
		if (void 0 === t && (t = 0), this.closed) return this;
		this.state = e;
		var a, r = this.id, s = this.scheduler;
		return null != r && (this.id = this.recycleAsyncId(s, r, t)), this.pending = !0, this.delay = t, this.id = null != (a = this.id) ? a : this.requestAsyncId(s, this.id, t), this;
	}, t.prototype.requestAsyncId = function(e, t, a) {
		return void 0 === a && (a = 0), aC.setInterval(e.flush.bind(e, this), a);
	}, t.prototype.recycleAsyncId = function(e, t, a) {
		if (void 0 === a && (a = 0), null != a && this.delay === a && !1 === this.pending) return t;
		null != t && aC.clearInterval(t);
	}, t.prototype.execute = function(e, t) {
		if (this.closed) return Error("executing a cancelled action");
		this.pending = !1;
		var a = this._execute(e, t);
		if (a) return a;
		!1 === this.pending && null != this.id && (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
	}, t.prototype._execute = function(e, t) {
		var a, r = !1;
		try {
			this.work(e);
		} catch (e) {
			r = !0, a = e || Error("Scheduled action threw falsy error");
		}
		if (r) return this.unsubscribe(), a;
	}, t.prototype.unsubscribe = function() {
		if (!this.closed) {
			var t = this.id, a = this.scheduler, r = a.actions;
			this.work = this.state = this.scheduler = null, this.pending = !1, t8(r, this), null != t && (this.id = this.recycleAsyncId(a, t, null)), this.delay = null, e.prototype.unsubscribe.call(this);
		}
	}, t;
}(aR), aD = function() {
	function e(t, a) {
		void 0 === a && (a = e.now), this.schedulerActionCtor = t, this.now = a;
	}
	return e.prototype.schedule = function(e, t, a) {
		return void 0 === t && (t = 0), new this.schedulerActionCtor(this, e).schedule(a, t);
	}, e.now = aP.now, e;
}(), a$ = new (function(e) {
	function t(t, a) {
		void 0 === a && (a = aD.now);
		var r = e.call(this, t, a) || this;
		return r.actions = [], r._active = !1, r;
	}
	return p(t, e), t.prototype.flush = function(e) {
		var t, a = this.actions;
		if (this._active) return void a.push(e);
		this._active = !0;
		do
			if (t = e.execute(e.state, e.delay)) break;
		while (e = a.shift());
		if (this._active = !1, t) {
			for (; e = a.shift();) e.unsubscribe();
			throw t;
		}
	}, t;
}(aD))(aT), aV = new aw(function(e) {
	return e.complete();
});
function aL(e) {
	return e && t7(e.schedule);
}
function aB(e) {
	return e[e.length - 1];
}
function aU(e) {
	return aL(aB(e)) ? e.pop() : void 0;
}
var aM = function(e) {
	return e && "number" == typeof e.length && "function" != typeof e;
};
function aG(e) {
	return t7(null == e ? void 0 : e.then);
}
function aF(e) {
	return Symbol.asyncIterator && t7(null == e ? void 0 : e[Symbol.asyncIterator]);
}
function az(e) {
	return TypeError("You provided " + (null !== e && "object" == typeof e ? "an invalid object" : "'" + e + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
var aq = "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator";
function aW(e) {
	return t7(null == e ? void 0 : e[aq]);
}
function aH(e) {
	return u(this, arguments, function() {
		var t, a, r;
		return h(this, function(s) {
			switch (s.label) {
				case 0: t = e.getReader(), s.label = 1;
				case 1: s.trys.push([
					1,
					,
					9,
					10
				]), s.label = 2;
				case 2: return [4, i(t.read())];
				case 3:
					if (r = (a = s.sent()).value, !a.done) return [3, 5];
					return [4, i(void 0)];
				case 4: return [2, s.sent()];
				case 5: return [4, i(r)];
				case 6: return [4, s.sent()];
				case 7: return s.sent(), [3, 2];
				case 8: return [3, 10];
				case 9: return t.releaseLock(), [7];
				case 10: return [2];
			}
		});
	});
}
function aK(e) {
	return t7(null == e ? void 0 : e.getReader);
}
function aX(e) {
	if (e instanceof aw) return e;
	if (null != e) {
		var t, a, r, s;
		if (t7(e[av])) return t = e, new aw(function(e) {
			var a = t[av]();
			if (t7(a.subscribe)) return a.subscribe(e);
			throw TypeError("Provided object does not correctly implement Symbol.observable");
		});
		if (aM(e)) return a = e, new aw(function(e) {
			for (var t = 0; t < a.length && !e.closed; t++) e.next(a[t]);
			e.complete();
		});
		if (aG(e)) return r = e, new aw(function(e) {
			r.then(function(t) {
				e.closed || (e.next(t), e.complete());
			}, function(t) {
				return e.error(t);
			}).then(null, as);
		});
		if (aF(e)) return aY(e);
		if (aW(e)) return s = e, new aw(function(e) {
			var t, a;
			try {
				for (var r = f(s), o = r.next(); !o.done; o = r.next()) {
					var c = o.value;
					if (e.next(c), e.closed) return;
				}
			} catch (e) {
				t = { error: e };
			} finally {
				try {
					o && !o.done && (a = r.return) && a.call(r);
				} finally {
					if (t) throw t.error;
				}
			}
			e.complete();
		});
		if (aK(e)) return aY(aH(e));
	}
	throw az(e);
}
function aY(e) {
	return new aw(function(t) {
		(function(e, t) {
			var a, r, s, c;
			return o(this, void 0, void 0, function() {
				var o;
				return h(this, function(i) {
					switch (i.label) {
						case 0: i.trys.push([
							0,
							5,
							6,
							11
						]), a = d(e), i.label = 1;
						case 1: return [4, a.next()];
						case 2:
							if ((r = i.sent()).done) return [3, 4];
							if (o = r.value, t.next(o), t.closed) return [2];
							i.label = 3;
						case 3: return [3, 1];
						case 4: return [3, 11];
						case 5: return s = { error: i.sent() }, [3, 11];
						case 6:
							if (i.trys.push([
								6,
								,
								9,
								10
							]), !(r && !r.done && (c = a.return))) return [3, 8];
							return [4, c.call(a)];
						case 7: i.sent(), i.label = 8;
						case 8: return [3, 10];
						case 9:
							if (s) throw s.error;
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
function aZ(e, t, a, r, s) {
	void 0 === r && (r = 0), void 0 === s && (s = !1);
	var o = t.schedule(function() {
		a(), s ? e.add(this.schedule(null, r)) : this.unsubscribe();
	}, r);
	if (e.add(o), !s) return o;
}
function aQ(e, t) {
	return void 0 === t && (t = 0), aA(function(a, r) {
		a.subscribe(aO(r, function(a) {
			return aZ(r, e, function() {
				return r.next(a);
			}, t);
		}, function() {
			return aZ(r, e, function() {
				return r.complete();
			}, t);
		}, function(a) {
			return aZ(r, e, function() {
				return r.error(a);
			}, t);
		}));
	});
}
function aJ(e, t) {
	return void 0 === t && (t = 0), aA(function(a, r) {
		r.add(e.schedule(function() {
			return a.subscribe(r);
		}, t));
	});
}
function a0(e, t) {
	if (!e) throw Error("Iterable cannot be null");
	return new aw(function(a) {
		aZ(a, t, function() {
			var r = e[Symbol.asyncIterator]();
			aZ(a, t, function() {
				r.next().then(function(e) {
					e.done ? a.complete() : a.next(e.value);
				});
			}, 0, !0);
		});
	});
}
function a1(e, t) {
	return t ? function(e, t) {
		if (null != e) {
			if (t7(e[av])) return aX(e).pipe(aJ(t), aQ(t));
			if (aM(e)) return new aw(function(a) {
				var r = 0;
				return t.schedule(function() {
					r === e.length ? a.complete() : (a.next(e[r++]), a.closed || this.schedule());
				});
			});
			if (aG(e)) return aX(e).pipe(aJ(t), aQ(t));
			if (aF(e)) return a0(e, t);
			if (aW(e)) return new aw(function(a) {
				var r;
				return aZ(a, t, function() {
					r = e[aq](), aZ(a, t, function() {
						var e, t, s;
						try {
							t = (e = r.next()).value, s = e.done;
						} catch (e) {
							a.error(e);
							return;
						}
						s ? a.complete() : a.next(t);
					}, 0, !0);
				}), function() {
					return t7(null == r ? void 0 : r.return) && r.return();
				};
			});
			if (aK(e)) return a0(aH(e), t);
		}
		throw az(e);
	}(e, t) : aX(e);
}
function a2(e, t) {
	return aA(function(a, r) {
		var s = 0;
		a.subscribe(aO(r, function(a) {
			r.next(e.call(t, a, s++));
		}));
	});
}
var a3 = Array.isArray;
function a4(e) {
	return a2(function(t) {
		return a3(t) ? e.apply(void 0, l([], c(t))) : e(t);
	});
}
var a7 = Array.isArray, a5 = Object.getPrototypeOf, a6 = Object.prototype, a8 = Object.keys;
function a9() {
	for (var e, t, a, r = [], s = 0; s < arguments.length; s++) r[s] = arguments[s];
	var o = aU(r), c = t7(aB(r)) ? r.pop() : void 0, i = function(e) {
		if (1 === e.length) {
			var t, a = e[0];
			if (a7(a)) return {
				args: a,
				keys: null
			};
			if ((t = a) && "object" == typeof t && a5(t) === a6) {
				var r = a8(a);
				return {
					args: r.map(function(e) {
						return a[e];
					}),
					keys: r
				};
			}
		}
		return {
			args: e,
			keys: null
		};
	}(r), l = i.args, u = i.keys;
	if (0 === l.length) return a1([], o);
	var p = new aw((e = l, t = o, void 0 === (a = u ? function(e) {
		return u.reduce(function(t, a, r) {
			return t[a] = e[r], t;
		}, {});
	} : ab) && (a = ab), function(r) {
		(function(e, t, a) {
			e ? aZ(a, e, t) : t();
		})(t, function() {
			for (var s = e.length, o = Array(s), c = s, i = s, l = function(s) {
				(function(e, t, a) {
					e ? aZ(a, e, t) : t();
				})(t, function() {
					var l = a1(e[s], t), u = !1;
					l.subscribe(aO(r, function(e) {
						o[s] = e, !u && (u = !0, i--), i || r.next(a(o.slice()));
					}, function() {
						--c || r.complete();
					}));
				}, r);
			}, u = 0; u < s; u++) l(u);
		}, r);
	}));
	return c ? p.pipe(a4(c)) : p;
}
function re(e, t, a) {
	return (void 0 === a && (a = Infinity), t7(t)) ? re(function(a, r) {
		return a2(function(e, s) {
			return t(a, e, r, s);
		})(aX(e(a, r)));
	}, a) : ("number" == typeof t && (a = t), aA(function(t, r) {
		var s, o, c, i, l, u, p, d, h;
		return s = a, c = [], i = 0, l = 0, u = !1, p = function() {
			!u || c.length || i || r.complete();
		}, d = function(e) {
			return i < s ? h(e) : c.push(e);
		}, h = function(t) {
			i++;
			var a = !1;
			aX(e(t, l++)).subscribe(aO(r, function(e) {
				o ? d(e) : r.next(e);
			}, function() {
				a = !0;
			}, void 0, function() {
				if (a) try {
					for (i--; c.length && i < s;) (function() {
						var e = c.shift();
						h(e);
					})();
					p();
				} catch (e) {
					r.error(e);
				}
			}));
		}, t.subscribe(aO(r, d, function() {
			u = !0, p();
		})), function() {};
	}));
}
function rn(e) {
	return void 0 === e && (e = Infinity), re(ab, e);
}
var rt = ["addListener", "removeListener"], ra = ["addEventListener", "removeEventListener"], rr = ["on", "off"];
function rs(e, t, a, r) {
	if (t7(a) && (r = a, a = void 0), r) return rs(e, t, a).pipe(a4(r));
	var s, o, i, l = c(t7((s = e).addEventListener) && t7(s.removeEventListener) ? ra.map(function(r) {
		return function(s) {
			return e[r](t, s, a);
		};
	}) : t7((o = e).addListener) && t7(o.removeListener) ? rt.map(ro(e, t)) : t7((i = e).on) && t7(i.off) ? rr.map(ro(e, t)) : [], 2), u = l[0], p = l[1];
	if (!u && aM(e)) return re(function(e) {
		return rs(e, t, a);
	})(aX(e));
	if (!u) throw TypeError("Invalid event target");
	return new aw(function(e) {
		var t = function() {
			for (var t = [], a = 0; a < arguments.length; a++) t[a] = arguments[a];
			return e.next(1 < t.length ? t : t[0]);
		};
		return u(t), function() {
			return p(t);
		};
	});
}
function ro(e, t) {
	return function(a) {
		return function(r) {
			return e[a](t, r);
		};
	};
}
function rc(e, t, a) {
	void 0 === e && (e = 0), void 0 === a && (a = a$);
	var r = -1;
	return null != t && (aL(t) ? a = t : r = t), new aw(function(t) {
		var s, o = (s = e) instanceof Date && !isNaN(s) ? e - a.now() : e;
		o < 0 && (o = 0);
		var c = 0;
		return a.schedule(function() {
			t.closed || (t.next(c++), 0 <= r ? this.schedule(void 0, r) : t.complete());
		}, o);
	});
}
function ri() {
	for (var e, t = [], a = 0; a < arguments.length; a++) t[a] = arguments[a];
	var r = aU(t), s = (e = Infinity, "number" == typeof aB(t) ? t.pop() : e);
	return t.length ? 1 === t.length ? aX(t[0]) : rn(s)(a1(t, r)) : aV;
}
function rl(e) {
	return e <= 0 ? function() {
		return aV;
	} : aA(function(t, a) {
		var r = 0;
		t.subscribe(aO(a, function(t) {
			++r <= e && (a.next(t), e <= r && a.complete());
		}));
	});
}
function ru(e, t) {
	void 0 === t && (t = a$);
	var a = rc(e, t);
	return function e(t, a) {
		return a ? function(r) {
			return function() {
				for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
				return rn(1)(a1(e, aU(e)));
			}(a.pipe(rl(1), aA(function(e, t) {
				e.subscribe(aO(t, ao));
			})), r.pipe(e(t)));
		} : re(function(e, a) {
			return aX(t(e, a)).pipe(rl(1), a2(function() {
				return e;
			}));
		});
	}(function() {
		return a;
	});
}
function rp(e, t) {
	return void 0 === t && (t = ab), e = null != e ? e : rd, aA(function(a, r) {
		var s, o = !0;
		a.subscribe(aO(r, function(a) {
			var c = t(a);
			(o || !e(s, c)) && (o = !1, s = c, r.next(a));
		}));
	});
}
function rd(e, t) {
	return e === t;
}
function rh(e, t) {
	return aA(function(a, r) {
		var s = null, o = 0, c = !1, i = function() {
			return c && !s && r.complete();
		};
		a.subscribe(aO(r, function(a) {
			s?.unsubscribe();
			var c = 0, l = o++;
			aX(e(a, l)).subscribe(s = aO(r, function(e) {
				return r.next(t ? t(a, e, l, c++) : e);
			}, function() {
				s = null, i();
			}));
		}, function() {
			c = !0, i();
		}));
	});
}
function rf(e, t, a) {
	var r = t7(e) || t || a ? {
		next: e,
		error: t,
		complete: a
	} : e;
	return r ? aA(function(e, t) {
		null == (a = r.subscribe) || a.call(r);
		var a, s = !0;
		e.subscribe(aO(t, function(e) {
			var a;
			null == (a = r.next) || a.call(r, e), t.next(e);
		}, function() {
			var e;
			s = !1, null == (e = r.complete) || e.call(r), t.complete();
		}, function(e) {
			var a;
			s = !1, null == (a = r.error) || a.call(r, e), t.error(e);
		}, function() {
			var e, t;
			s && (null == (e = r.unsubscribe) || e.call(r)), null == (t = r.finalize) || t.call(r);
		}));
	}) : ab;
}
function rm(e, ...t) {
	return (function() {
		for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
		return ag(e);
	})(...t)(a1(e));
}
var rk = class e extends aw {
	static seed(t) {
		return new e(t);
	}
	_value;
	_subject$ = new aE();
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
		let a = eH(e) ? nT(this._value ?? t, e) : e;
		Object.is(a, this._value) || this._subject$.next(this._value = a);
	}
};
let rN = Symbol("forwardRef");
function ry(e) {
	let t = e;
	return E((e, a) => ({
		get: () => (e(), t),
		set(e) {
			let r = e?.[rN] ?? e;
			r !== t && (t = r, a());
		}
	}));
}
function rv(e) {
	return (t) => {
		let a = t.subscribe(e);
		j(() => a.unsubscribe());
	};
}
function rb(e) {
	return (t) => {
		let a;
		I(() => {
			a = t.subscribe(e);
		}), j(() => a?.unsubscribe());
	};
}
let rg = (e) => {
	let t = new rk(e), a = E((e, a) => ({
		get: () => (e(), t.value),
		set(e) {
			let r = e?.[rN] ?? e;
			Object.is(r, t.value) || (t.next(r), a());
		}
	}));
	return new Proxy(t, {
		get: (e, r) => "next" === r ? (e) => {
			a.value = eH(e) ? nT(t.value, e) : e;
		} : "value" === r ? a.value : t[r] ?? a[r],
		set: (e, t, r) => ("value" === t ? a.value = r : e[t] = r, !0)
	});
};
function rw(e) {
	return (t) => N(r_, {
		renderFn$: t.pipe(a2((t) => () => e(t))),
		children: {}
	});
}
var r_ = nB({ renderFn$: e() }, (e, t) => {
	let a = null;
	rm(e.renderFn$, rf((e) => {
		a = e;
	}), rv());
	let r = rg(1);
	return rm(e.renderFn$, rf(() => {
		r.value += 1;
	}), rb()), () => r.value ? a?.() : null;
}, { name: "RxSlot" }, { displayName: "RxSlot" });
let rA = (e, t) => {
	let a = new aI(e[t]);
	return g(() => e[t], (e) => a.next(e)), a;
};
function rO(...e) {
	let t, a = {}, r = {};
	for (let s of e) {
		if (eH(s)) {
			t = s;
			continue;
		}
		eX(t) ? a = s : r = s;
	}
	return nB(a, (e, a) => {
		let r = ((e) => {
			let t = {};
			for (let r in e) {
				var a;
				if (eH(e[r]) || (a = e[r]) && (a instanceof aw || t7(a.lift) && t7(a.subscribe))) {
					t[r] = e[r];
					continue;
				}
				t[`${r}$`] = rA(e, r);
			}
			return t;
		})(e), s = new Proxy({}, { get: (t, a) => e[a] ?? r[a] }), o = new Proxy({}, { get: (e, t) => "render" === t ? rw : a[t] }), c = t(s, o);
		return eH(c) ? c : () => c;
	}, r);
}
let rx = (e) => {
	let t, a = null;
	return rf({
		next: (r) => {
			((e, t) => {
				if (eI(e) && eI(t)) {
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
function rj(...t) {
	let a, s, o = {}, c = {};
	for (let e of t) {
		if (eH(e)) {
			a = e;
			continue;
		}
		eX(a) ? o = e : c = e;
	}
	let i = Symbol(c?.name ?? "");
	if (eZ(o) && eZ(c.props)) {
		let t, r = () => t ??= a({});
		return nU(nB({
			value: e().optional(),
			$default: e().optional()
		}, (e, { slots: t }) => (O(i, e.value ?? r()), () => t.default?.()), {
			...c,
			name: `Provide(${c?.name ?? ""})`
		}, { displayName: "Provider" }), { use: () => m(i, r, !0) });
	}
	let l = r(o);
	return nU(nB({
		...o,
		$default: e().optional()
	}, (e, { slots: t }) => (O(i, s = a(e)), () => t.default?.()), {
		...c,
		name: `Provide(${c?.name ?? ""})`
	}, { displayName: "Provider" }), { use: () => m(i, () => s ??= a(l.create({})), !0) });
}
var rE = nB(() => {
	let e = w(1);
	return () => y("div", {
		style: {
			display: "flex",
			gap: "1rem"
		},
		children: [y("div", { children: ["Counts: ", e.value] }), N("button", {
			onClick: () => e.value++,
			children: "Click To Count"
		})]
	});
}), rS = nB({
	value: a().optional().default("1"),
	type: t(["text", "number"]),
	onValueChange: e()
}, (e, { emit: t }) => () => N("input", {
	value: e.value,
	onInput: (e) => {
		t("value-change", e.target.value);
	}
}), { displayName: "TextInput" }), rI = nB({
	$title: e().optional(),
	$item: e().optional(),
	$default: e().optional()
}, ({}, { slots: e }) => () => y("dl", { children: [
	N("dt", { children: "default" }),
	N("dd", { children: e.default?.() }),
	N("dt", { children: "title" }),
	N("dd", { children: e.title?.() }),
	N("dt", { children: "item" }),
	N("dd", { children: [{
		label: "1",
		value: "1"
	}, {
		label: "2",
		value: "2"
	}].map((t) => e.item?.(t)) })
] }), { displayName: "List" }), rP = nB(() => {
	let e = w("");
	return () => N(rI, {
		$title: y("div", { children: ["Inputted: ", e.value] }),
		$item: (e) => N("div", { children: e.label }),
		children: N(rS, {
			type: "text",
			onValueChange: (t) => {
				e.value = t;
			}
		})
	});
});
function rR(e) {
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
	return y(S, { children: [
		N(t.p, { children: "为了更好的 TypeScript 和 JSX 的支持，重新抽象了定义组件的方式" }),
		"\n",
		N(t.p, { children: "一般组件：" }),
		"\n",
		y(t.div, {
			"data-example": "",
			children: [N(t.div, {
				"data-example-container": "",
				children: N(t.codeblock4b227777, {})
			}), N(t.pre, {
				className: "language-tsx",
				children: y(t.code, {
					className: "language-tsx",
					children: [
						N(t.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						y(t.span, {
							className: "token imports",
							children: [
								N(t.span, {
									className: "token punctuation",
									children: "{"
								}),
								" component ",
								N(t.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						N(t.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						N(t.span, {
							className: "token string",
							children: "\"@innoai-tech/vuekit\""
						}),
						N(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						N(t.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						y(t.span, {
							className: "token imports",
							children: [
								N(t.span, {
									className: "token punctuation",
									children: "{"
								}),
								" ref ",
								N(t.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						N(t.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						N(t.span, {
							className: "token string",
							children: "\"vue\""
						}),
						N(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n",
						N(t.span, {
							className: "token keyword module",
							children: "export"
						}),
						" ",
						N(t.span, {
							className: "token keyword module",
							children: "default"
						}),
						" ",
						N(t.span, {
							className: "token function",
							children: "component"
						}),
						N(t.span, {
							className: "token punctuation",
							children: "("
						}),
						N(t.span, {
							className: "token punctuation",
							children: "("
						}),
						N(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						N(t.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						N(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n  ",
						N(t.span, {
							className: "token keyword",
							children: "const"
						}),
						" count ",
						N(t.span, {
							className: "token operator",
							children: "="
						}),
						" ",
						N(t.span, {
							className: "token function",
							children: "ref"
						}),
						N(t.span, {
							className: "token punctuation",
							children: "("
						}),
						N(t.span, {
							className: "token number",
							children: "1"
						}),
						N(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						N(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n  ",
						N(t.span, {
							className: "token keyword control-flow",
							children: "return"
						}),
						" ",
						N(t.span, {
							className: "token punctuation",
							children: "("
						}),
						N(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						N(t.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						N(t.span, {
							className: "token punctuation",
							children: "("
						}),
						"\n    ",
						y(t.span, {
							className: "token tag",
							children: [
								y(t.span, {
									className: "token tag",
									children: [N(t.span, {
										className: "token punctuation",
										children: "<"
									}), "div"]
								}),
								" ",
								N(t.span, {
									className: "token attr-name",
									children: "style"
								}),
								y(t.span, {
									className: "token script language-javascript",
									children: [
										N(t.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										N(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										N(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										" display",
										N(t.span, {
											className: "token operator",
											children: ":"
										}),
										" ",
										N(t.span, {
											className: "token string",
											children: "\"flex\""
										}),
										N(t.span, {
											className: "token punctuation",
											children: ","
										}),
										" gap",
										N(t.span, {
											className: "token operator",
											children: ":"
										}),
										" ",
										N(t.span, {
											className: "token string",
											children: "\"1rem\""
										}),
										" ",
										N(t.span, {
											className: "token punctuation",
											children: "}"
										}),
										N(t.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								N(t.span, {
									className: "token punctuation",
									children: ">"
								})
							]
						}),
						N(t.span, {
							className: "token plain-text",
							children: "\n      "
						}),
						y(t.span, {
							className: "token tag",
							children: [y(t.span, {
								className: "token tag",
								children: [N(t.span, {
									className: "token punctuation",
									children: "<"
								}), "div"]
							}), N(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						N(t.span, {
							className: "token plain-text",
							children: "Counts: "
						}),
						N(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						"count",
						N(t.span, {
							className: "token punctuation",
							children: "."
						}),
						N(t.span, {
							className: "token property-access",
							children: "value"
						}),
						N(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						y(t.span, {
							className: "token tag",
							children: [y(t.span, {
								className: "token tag",
								children: [N(t.span, {
									className: "token punctuation",
									children: "</"
								}), "div"]
							}), N(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						N(t.span, {
							className: "token plain-text",
							children: "\n      "
						}),
						y(t.span, {
							className: "token tag",
							children: [
								y(t.span, {
									className: "token tag",
									children: [N(t.span, {
										className: "token punctuation",
										children: "<"
									}), "button"]
								}),
								" ",
								N(t.span, {
									className: "token attr-name",
									children: "onClick"
								}),
								y(t.span, {
									className: "token script language-javascript",
									children: [
										N(t.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										N(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										N(t.span, {
											className: "token punctuation",
											children: "("
										}),
										N(t.span, {
											className: "token punctuation",
											children: ")"
										}),
										" ",
										N(t.span, {
											className: "token arrow operator",
											children: "=>"
										}),
										" count",
										N(t.span, {
											className: "token punctuation",
											children: "."
										}),
										N(t.span, {
											className: "token property-access",
											children: "value"
										}),
										N(t.span, {
											className: "token operator",
											children: "++"
										}),
										N(t.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								N(t.span, {
									className: "token punctuation",
									children: ">"
								})
							]
						}),
						N(t.span, {
							className: "token plain-text",
							children: "Click To Count"
						}),
						y(t.span, {
							className: "token tag",
							children: [y(t.span, {
								className: "token tag",
								children: [N(t.span, {
									className: "token punctuation",
									children: "</"
								}), "button"]
							}), N(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						N(t.span, {
							className: "token plain-text",
							children: "\n    "
						}),
						y(t.span, {
							className: "token tag",
							children: [y(t.span, {
								className: "token tag",
								children: [N(t.span, {
									className: "token punctuation",
									children: "</"
								}), "div"]
							}), N(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						"\n  ",
						N(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						N(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						N(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						N(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						N(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n"
					]
				})
			})]
		}),
		"\n",
		N(t.p, { children: "可复用组件：" }),
		"\n",
		y(t.ul, { children: [
			"\n",
			y(t.li, { children: [
				N(t.code, { children: "props" }),
				" 和 ",
				N(t.code, { children: "emits" }),
				" 合并声明"
			] }),
			"\n"
		] }),
		"\n",
		y(t.div, {
			"data-example": "",
			children: [N(t.div, {
				"data-example-container": "",
				children: N(t.codeblock4a44dc15, {})
			}), N(t.pre, {
				className: "language-tsx",
				children: y(t.code, {
					className: "language-tsx",
					children: [
						N(t.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						N(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						" component",
						N(t.span, {
							className: "token punctuation",
							children: ","
						}),
						" t",
						N(t.span, {
							className: "token punctuation",
							children: ","
						}),
						" ",
						N(t.span, {
							className: "token keyword",
							children: "type"
						}),
						" ",
						N(t.span, {
							className: "token class-name",
							children: N(t.span, {
								className: "token maybe-class-name",
								children: "VNode"
							})
						}),
						N(t.span, {
							className: "token punctuation",
							children: ","
						}),
						" ",
						N(t.span, {
							className: "token keyword",
							children: "type"
						}),
						" ",
						N(t.span, {
							className: "token class-name",
							children: N(t.span, {
								className: "token maybe-class-name",
								children: "VNodeChild"
							})
						}),
						" ",
						N(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						" ",
						N(t.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						N(t.span, {
							className: "token string",
							children: "\"@innoai-tech/vuekit\""
						}),
						N(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						N(t.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						y(t.span, {
							className: "token imports",
							children: [
								N(t.span, {
									className: "token punctuation",
									children: "{"
								}),
								" ref ",
								N(t.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						N(t.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						N(t.span, {
							className: "token string",
							children: "\"vue\""
						}),
						N(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n",
						N(t.span, {
							className: "token keyword module",
							children: "export"
						}),
						" ",
						N(t.span, {
							className: "token keyword",
							children: "const"
						}),
						" ",
						N(t.span, {
							className: "token maybe-class-name",
							children: "TextInput"
						}),
						" ",
						N(t.span, {
							className: "token operator",
							children: "="
						}),
						" ",
						N(t.span, {
							className: "token function",
							children: "component"
						}),
						N(t.span, {
							className: "token punctuation",
							children: "("
						}),
						"\n  ",
						N(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n    ",
						N(t.span, {
							className: "token comment",
							children: "// VUE 的注册机制（Proxy 定义基准，以及从 attrs 中提取 props 的 emits 的依据）"
						}),
						"\n    ",
						N(t.span, {
							className: "token comment",
							children: "// 必须声明，哪怕只是属性名称"
						}),
						"\n    ",
						N(t.span, {
							className: "token comment",
							children: "//"
						}),
						"\n    ",
						N(t.span, {
							className: "token comment",
							children: "// 又由于 TypeString 的老问题  https://www.typescriptneedstypes.com/#the-problem"
						}),
						"\n    ",
						N(t.span, {
							className: "token comment",
							children: "// 类型定义无法转为 Runtime 对象"
						}),
						"\n    value",
						N(t.span, {
							className: "token operator",
							children: ":"
						}),
						" t",
						N(t.span, {
							className: "token punctuation",
							children: "."
						}),
						N(t.span, {
							className: "token method function property-access",
							children: "string"
						}),
						N(t.span, {
							className: "token punctuation",
							children: "("
						}),
						N(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						N(t.span, {
							className: "token punctuation",
							children: "."
						}),
						N(t.span, {
							className: "token method function property-access",
							children: "optional"
						}),
						N(t.span, {
							className: "token punctuation",
							children: "("
						}),
						N(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						N(t.span, {
							className: "token punctuation",
							children: "."
						}),
						N(t.span, {
							className: "token keyword module",
							children: "default"
						}),
						N(t.span, {
							className: "token punctuation",
							children: "("
						}),
						N(t.span, {
							className: "token string",
							children: "\"1\""
						}),
						N(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						N(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n    type",
						N(t.span, {
							className: "token operator",
							children: ":"
						}),
						" t",
						N(t.span, {
							className: "token punctuation",
							children: "."
						}),
						N(t.span, {
							className: "token method function property-access",
							children: "enums"
						}),
						N(t.span, {
							className: "token punctuation",
							children: "("
						}),
						N(t.span, {
							className: "token punctuation",
							children: "["
						}),
						N(t.span, {
							className: "token string",
							children: "\"text\""
						}),
						N(t.span, {
							className: "token punctuation",
							children: ","
						}),
						" ",
						N(t.span, {
							className: "token string",
							children: "\"number\""
						}),
						N(t.span, {
							className: "token punctuation",
							children: "]"
						}),
						N(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						N(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n\n    ",
						N(t.span, {
							className: "token comment",
							children: "// on[A-Z] 前缀视为 emits"
						}),
						"\n    onValueChange",
						N(t.span, {
							className: "token operator",
							children: ":"
						}),
						" t",
						N(t.span, {
							className: "token punctuation",
							children: "."
						}),
						N(t.span, {
							className: "token property-access",
							children: "custom"
						}),
						N(t.span, {
							className: "token operator",
							children: "<"
						}),
						N(t.span, {
							className: "token punctuation",
							children: "("
						}),
						"v",
						N(t.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						N(t.span, {
							className: "token builtin",
							children: "string"
						}),
						N(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						N(t.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						N(t.span, {
							className: "token keyword",
							children: "void"
						}),
						N(t.span, {
							className: "token operator",
							children: ">"
						}),
						N(t.span, {
							className: "token punctuation",
							children: "("
						}),
						N(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						N(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n  ",
						N(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						N(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n  ",
						N(t.span, {
							className: "token punctuation",
							children: "("
						}),
						"props",
						N(t.span, {
							className: "token punctuation",
							children: ","
						}),
						" ",
						N(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						" emit ",
						N(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						N(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						N(t.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						N(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n    ",
						N(t.span, {
							className: "token comment",
							children: "// setup"
						}),
						"\n\n    ",
						N(t.span, {
							className: "token keyword control-flow",
							children: "return"
						}),
						" ",
						N(t.span, {
							className: "token punctuation",
							children: "("
						}),
						N(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						N(t.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						N(t.span, {
							className: "token punctuation",
							children: "("
						}),
						"\n      ",
						y(t.span, {
							className: "token tag",
							children: [
								y(t.span, {
									className: "token tag",
									children: [N(t.span, {
										className: "token punctuation",
										children: "<"
									}), "input"]
								}),
								"\n        ",
								N(t.span, {
									className: "token attr-name",
									children: "value"
								}),
								y(t.span, {
									className: "token script language-javascript",
									children: [
										N(t.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										N(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										"props",
										N(t.span, {
											className: "token punctuation",
											children: "."
										}),
										N(t.span, {
											className: "token property-access",
											children: "value"
										}),
										N(t.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n        ",
								N(t.span, {
									className: "token attr-name",
									children: "onInput"
								}),
								y(t.span, {
									className: "token script language-javascript",
									children: [
										N(t.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										N(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										N(t.span, {
											className: "token punctuation",
											children: "("
										}),
										"e",
										N(t.span, {
											className: "token punctuation",
											children: ")"
										}),
										" ",
										N(t.span, {
											className: "token arrow operator",
											children: "=>"
										}),
										" ",
										N(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										"\n          ",
										N(t.span, {
											className: "token function",
											children: "emit"
										}),
										N(t.span, {
											className: "token punctuation",
											children: "("
										}),
										N(t.span, {
											className: "token string",
											children: "\"value-change\""
										}),
										N(t.span, {
											className: "token punctuation",
											children: ","
										}),
										" ",
										N(t.span, {
											className: "token punctuation",
											children: "("
										}),
										"e",
										N(t.span, {
											className: "token punctuation",
											children: "."
										}),
										N(t.span, {
											className: "token property-access",
											children: "target"
										}),
										" ",
										N(t.span, {
											className: "token keyword module",
											children: "as"
										}),
										" ",
										N(t.span, {
											className: "token maybe-class-name",
											children: "HTMLInputElement"
										}),
										N(t.span, {
											className: "token punctuation",
											children: ")"
										}),
										N(t.span, {
											className: "token punctuation",
											children: "."
										}),
										N(t.span, {
											className: "token property-access",
											children: "value"
										}),
										N(t.span, {
											className: "token punctuation",
											children: ")"
										}),
										N(t.span, {
											className: "token punctuation",
											children: ";"
										}),
										"\n        ",
										N(t.span, {
											className: "token punctuation",
											children: "}"
										}),
										N(t.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n      ",
								N(t.span, {
									className: "token punctuation",
									children: "/>"
								})
							]
						}),
						"\n    ",
						N(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						N(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n  ",
						N(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						N(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n",
						N(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						N(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n",
						N(t.span, {
							className: "token keyword module",
							children: "export"
						}),
						" ",
						N(t.span, {
							className: "token keyword",
							children: "interface"
						}),
						" ",
						N(t.span, {
							className: "token class-name",
							children: N(t.span, {
								className: "token maybe-class-name",
								children: "Option"
							})
						}),
						" ",
						N(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n  label",
						N(t.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						N(t.span, {
							className: "token builtin",
							children: "string"
						}),
						N(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n  value",
						N(t.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						N(t.span, {
							className: "token builtin",
							children: "string"
						}),
						N(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						N(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						"\n\n",
						N(t.span, {
							className: "token keyword module",
							children: "export"
						}),
						" ",
						N(t.span, {
							className: "token keyword",
							children: "const"
						}),
						" ",
						N(t.span, {
							className: "token maybe-class-name",
							children: "List"
						}),
						" ",
						N(t.span, {
							className: "token operator",
							children: "="
						}),
						" ",
						N(t.span, {
							className: "token function",
							children: "component"
						}),
						N(t.span, {
							className: "token punctuation",
							children: "("
						}),
						"\n  ",
						N(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n    ",
						N(t.span, {
							className: "token comment",
							children: "// $ 前缀视为 slots"
						}),
						"\n    $title",
						N(t.span, {
							className: "token operator",
							children: ":"
						}),
						" t",
						N(t.span, {
							className: "token punctuation",
							children: "."
						}),
						N(t.span, {
							className: "token property-access",
							children: "custom"
						}),
						N(t.span, {
							className: "token operator",
							children: "<"
						}),
						N(t.span, {
							className: "token maybe-class-name",
							children: "VNodeChild"
						}),
						N(t.span, {
							className: "token operator",
							children: ">"
						}),
						N(t.span, {
							className: "token punctuation",
							children: "("
						}),
						N(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						N(t.span, {
							className: "token punctuation",
							children: "."
						}),
						N(t.span, {
							className: "token method function property-access",
							children: "optional"
						}),
						N(t.span, {
							className: "token punctuation",
							children: "("
						}),
						N(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						N(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n    ",
						N(t.span, {
							className: "token comment",
							children: "// renderProp"
						}),
						"\n    $item",
						N(t.span, {
							className: "token operator",
							children: ":"
						}),
						" t",
						N(t.span, {
							className: "token punctuation",
							children: "."
						}),
						N(t.span, {
							className: "token property-access",
							children: "custom"
						}),
						N(t.span, {
							className: "token operator",
							children: "<"
						}),
						N(t.span, {
							className: "token punctuation",
							children: "("
						}),
						"option",
						N(t.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						N(t.span, {
							className: "token maybe-class-name",
							children: "Option"
						}),
						N(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						N(t.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						N(t.span, {
							className: "token maybe-class-name",
							children: "VNode"
						}),
						N(t.span, {
							className: "token operator",
							children: ">"
						}),
						N(t.span, {
							className: "token punctuation",
							children: "("
						}),
						N(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						N(t.span, {
							className: "token punctuation",
							children: "."
						}),
						N(t.span, {
							className: "token method function property-access",
							children: "optional"
						}),
						N(t.span, {
							className: "token punctuation",
							children: "("
						}),
						N(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						N(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n\n    $",
						N(t.span, {
							className: "token keyword module",
							children: "default"
						}),
						N(t.span, {
							className: "token operator",
							children: ":"
						}),
						" t",
						N(t.span, {
							className: "token punctuation",
							children: "."
						}),
						N(t.span, {
							className: "token property-access",
							children: "custom"
						}),
						N(t.span, {
							className: "token operator",
							children: "<"
						}),
						N(t.span, {
							className: "token maybe-class-name",
							children: "VNodeChild"
						}),
						N(t.span, {
							className: "token operator",
							children: ">"
						}),
						N(t.span, {
							className: "token punctuation",
							children: "("
						}),
						N(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						N(t.span, {
							className: "token punctuation",
							children: "."
						}),
						N(t.span, {
							className: "token method function property-access",
							children: "optional"
						}),
						N(t.span, {
							className: "token punctuation",
							children: "("
						}),
						N(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						N(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n\n    ",
						N(t.span, {
							className: "token comment",
							children: "// 以此避免多插槽时 children slots object 的写法, 且无类型约束，"
						}),
						"\n    ",
						N(t.span, {
							className: "token comment",
							children: "// {{ default: () => VNode, title: () => VNode, item: (option: Option) => VNode }}"
						}),
						"\n  ",
						N(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						N(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n  ",
						N(t.span, {
							className: "token punctuation",
							children: "("
						}),
						N(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						N(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						N(t.span, {
							className: "token punctuation",
							children: ","
						}),
						" ",
						N(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						" slots ",
						N(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						N(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						N(t.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						"\n    ",
						N(t.span, {
							className: "token punctuation",
							children: "("
						}),
						N(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						N(t.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						N(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n      ",
						N(t.span, {
							className: "token keyword",
							children: "const"
						}),
						" options ",
						N(t.span, {
							className: "token operator",
							children: "="
						}),
						" ",
						N(t.span, {
							className: "token punctuation",
							children: "["
						}),
						"\n        ",
						N(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n          label",
						N(t.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						N(t.span, {
							className: "token string",
							children: "\"1\""
						}),
						N(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n          value",
						N(t.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						N(t.span, {
							className: "token string",
							children: "\"1\""
						}),
						N(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n        ",
						N(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						N(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n        ",
						N(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n          label",
						N(t.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						N(t.span, {
							className: "token string",
							children: "\"2\""
						}),
						N(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n          value",
						N(t.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						N(t.span, {
							className: "token string",
							children: "\"2\""
						}),
						N(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n        ",
						N(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						N(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n      ",
						N(t.span, {
							className: "token punctuation",
							children: "]"
						}),
						N(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n      ",
						N(t.span, {
							className: "token keyword control-flow",
							children: "return"
						}),
						" ",
						N(t.span, {
							className: "token punctuation",
							children: "("
						}),
						"\n        ",
						y(t.span, {
							className: "token tag",
							children: [y(t.span, {
								className: "token tag",
								children: [N(t.span, {
									className: "token punctuation",
									children: "<"
								}), "dl"]
							}), N(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						N(t.span, {
							className: "token plain-text",
							children: "\n          "
						}),
						y(t.span, {
							className: "token tag",
							children: [y(t.span, {
								className: "token tag",
								children: [N(t.span, {
									className: "token punctuation",
									children: "<"
								}), "dt"]
							}), N(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						N(t.span, {
							className: "token plain-text",
							children: "default"
						}),
						y(t.span, {
							className: "token tag",
							children: [y(t.span, {
								className: "token tag",
								children: [N(t.span, {
									className: "token punctuation",
									children: "</"
								}), "dt"]
							}), N(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						N(t.span, {
							className: "token plain-text",
							children: "\n          "
						}),
						y(t.span, {
							className: "token tag",
							children: [y(t.span, {
								className: "token tag",
								children: [N(t.span, {
									className: "token punctuation",
									children: "<"
								}), "dd"]
							}), N(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						N(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						"slots",
						N(t.span, {
							className: "token punctuation",
							children: "."
						}),
						N(t.span, {
							className: "token keyword module",
							children: "default"
						}),
						N(t.span, {
							className: "token operator",
							children: "?."
						}),
						N(t.span, {
							className: "token punctuation",
							children: "("
						}),
						N(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						N(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						y(t.span, {
							className: "token tag",
							children: [y(t.span, {
								className: "token tag",
								children: [N(t.span, {
									className: "token punctuation",
									children: "</"
								}), "dd"]
							}), N(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						N(t.span, {
							className: "token plain-text",
							children: "\n          "
						}),
						y(t.span, {
							className: "token tag",
							children: [y(t.span, {
								className: "token tag",
								children: [N(t.span, {
									className: "token punctuation",
									children: "<"
								}), "dt"]
							}), N(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						N(t.span, {
							className: "token plain-text",
							children: "title"
						}),
						y(t.span, {
							className: "token tag",
							children: [y(t.span, {
								className: "token tag",
								children: [N(t.span, {
									className: "token punctuation",
									children: "</"
								}), "dt"]
							}), N(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						N(t.span, {
							className: "token plain-text",
							children: "\n          "
						}),
						y(t.span, {
							className: "token tag",
							children: [y(t.span, {
								className: "token tag",
								children: [N(t.span, {
									className: "token punctuation",
									children: "<"
								}), "dd"]
							}), N(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						N(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						"slots",
						N(t.span, {
							className: "token punctuation",
							children: "."
						}),
						N(t.span, {
							className: "token property-access",
							children: "title"
						}),
						N(t.span, {
							className: "token operator",
							children: "?."
						}),
						N(t.span, {
							className: "token punctuation",
							children: "("
						}),
						N(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						N(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						y(t.span, {
							className: "token tag",
							children: [y(t.span, {
								className: "token tag",
								children: [N(t.span, {
									className: "token punctuation",
									children: "</"
								}), "dd"]
							}), N(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						N(t.span, {
							className: "token plain-text",
							children: "\n          "
						}),
						y(t.span, {
							className: "token tag",
							children: [y(t.span, {
								className: "token tag",
								children: [N(t.span, {
									className: "token punctuation",
									children: "<"
								}), "dt"]
							}), N(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						N(t.span, {
							className: "token plain-text",
							children: "item"
						}),
						y(t.span, {
							className: "token tag",
							children: [y(t.span, {
								className: "token tag",
								children: [N(t.span, {
									className: "token punctuation",
									children: "</"
								}), "dt"]
							}), N(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						N(t.span, {
							className: "token plain-text",
							children: "\n          "
						}),
						y(t.span, {
							className: "token tag",
							children: [y(t.span, {
								className: "token tag",
								children: [N(t.span, {
									className: "token punctuation",
									children: "<"
								}), "dd"]
							}), N(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						N(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						"options",
						N(t.span, {
							className: "token punctuation",
							children: "."
						}),
						N(t.span, {
							className: "token method function property-access",
							children: "map"
						}),
						N(t.span, {
							className: "token punctuation",
							children: "("
						}),
						N(t.span, {
							className: "token punctuation",
							children: "("
						}),
						"option",
						N(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						N(t.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" slots",
						N(t.span, {
							className: "token punctuation",
							children: "."
						}),
						N(t.span, {
							className: "token property-access",
							children: "item"
						}),
						N(t.span, {
							className: "token operator",
							children: "?."
						}),
						N(t.span, {
							className: "token punctuation",
							children: "("
						}),
						"option",
						N(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						N(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						N(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						y(t.span, {
							className: "token tag",
							children: [y(t.span, {
								className: "token tag",
								children: [N(t.span, {
									className: "token punctuation",
									children: "</"
								}), "dd"]
							}), N(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						N(t.span, {
							className: "token plain-text",
							children: "\n        "
						}),
						y(t.span, {
							className: "token tag",
							children: [y(t.span, {
								className: "token tag",
								children: [N(t.span, {
									className: "token punctuation",
									children: "</"
								}), "dl"]
							}), N(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						"\n      ",
						N(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						N(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n    ",
						N(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						N(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n",
						N(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						N(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n",
						N(t.span, {
							className: "token keyword module",
							children: "export"
						}),
						" ",
						N(t.span, {
							className: "token keyword module",
							children: "default"
						}),
						" ",
						N(t.span, {
							className: "token function",
							children: "component"
						}),
						N(t.span, {
							className: "token punctuation",
							children: "("
						}),
						N(t.span, {
							className: "token punctuation",
							children: "("
						}),
						N(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						N(t.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						N(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n  ",
						N(t.span, {
							className: "token keyword",
							children: "const"
						}),
						" inputValue ",
						N(t.span, {
							className: "token operator",
							children: "="
						}),
						" ",
						N(t.span, {
							className: "token function",
							children: "ref"
						}),
						N(t.span, {
							className: "token punctuation",
							children: "("
						}),
						N(t.span, {
							className: "token string",
							children: "\"\""
						}),
						N(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						N(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n  ",
						N(t.span, {
							className: "token keyword control-flow",
							children: "return"
						}),
						" ",
						N(t.span, {
							className: "token punctuation",
							children: "("
						}),
						N(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						N(t.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						N(t.span, {
							className: "token punctuation",
							children: "("
						}),
						"\n    ",
						y(t.span, {
							className: "token tag",
							children: [
								y(t.span, {
									className: "token tag",
									children: [N(t.span, {
										className: "token punctuation",
										children: "<"
									}), N(t.span, {
										className: "token class-name",
										children: "List"
									})]
								}),
								"\n      ",
								N(t.span, {
									className: "token attr-name",
									children: "$title"
								}),
								y(t.span, {
									className: "token script language-javascript",
									children: [
										N(t.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										N(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										y(t.span, {
											className: "token tag",
											children: [y(t.span, {
												className: "token tag",
												children: [N(t.span, {
													className: "token punctuation",
													children: "<"
												}), "div"]
											}), N(t.span, {
												className: "token punctuation",
												children: ">"
											})]
										}),
										N(t.span, {
											className: "token plain-text",
											children: "Inputted: "
										}),
										N(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										"inputValue",
										N(t.span, {
											className: "token punctuation",
											children: "."
										}),
										N(t.span, {
											className: "token property-access",
											children: "value"
										}),
										N(t.span, {
											className: "token punctuation",
											children: "}"
										}),
										y(t.span, {
											className: "token tag",
											children: [y(t.span, {
												className: "token tag",
												children: [N(t.span, {
													className: "token punctuation",
													children: "</"
												}), "div"]
											}), N(t.span, {
												className: "token punctuation",
												children: ">"
											})]
										}),
										N(t.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n      ",
								N(t.span, {
									className: "token attr-name",
									children: "$item"
								}),
								y(t.span, {
									className: "token script language-javascript",
									children: [
										N(t.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										N(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										N(t.span, {
											className: "token punctuation",
											children: "("
										}),
										"o",
										N(t.span, {
											className: "token punctuation",
											children: ")"
										}),
										" ",
										N(t.span, {
											className: "token arrow operator",
											children: "=>"
										}),
										" ",
										y(t.span, {
											className: "token tag",
											children: [y(t.span, {
												className: "token tag",
												children: [N(t.span, {
													className: "token punctuation",
													children: "<"
												}), "div"]
											}), N(t.span, {
												className: "token punctuation",
												children: ">"
											})]
										}),
										N(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										"o",
										N(t.span, {
											className: "token punctuation",
											children: "."
										}),
										N(t.span, {
											className: "token property-access",
											children: "label"
										}),
										N(t.span, {
											className: "token punctuation",
											children: "}"
										}),
										y(t.span, {
											className: "token tag",
											children: [y(t.span, {
												className: "token tag",
												children: [N(t.span, {
													className: "token punctuation",
													children: "</"
												}), "div"]
											}), N(t.span, {
												className: "token punctuation",
												children: ">"
											})]
										}),
										N(t.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n    ",
								N(t.span, {
									className: "token punctuation",
									children: ">"
								})
							]
						}),
						N(t.span, {
							className: "token plain-text",
							children: "\n      "
						}),
						y(t.span, {
							className: "token tag",
							children: [
								y(t.span, {
									className: "token tag",
									children: [N(t.span, {
										className: "token punctuation",
										children: "<"
									}), N(t.span, {
										className: "token class-name",
										children: "TextInput"
									})]
								}),
								"\n        ",
								N(t.span, {
									className: "token attr-name",
									children: "type"
								}),
								y(t.span, {
									className: "token script language-javascript",
									children: [
										N(t.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										N(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										N(t.span, {
											className: "token string",
											children: "\"text\""
										}),
										N(t.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n        ",
								N(t.span, {
									className: "token attr-name",
									children: "onValueChange"
								}),
								y(t.span, {
									className: "token script language-javascript",
									children: [
										N(t.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										N(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										N(t.span, {
											className: "token punctuation",
											children: "("
										}),
										"value",
										N(t.span, {
											className: "token punctuation",
											children: ")"
										}),
										" ",
										N(t.span, {
											className: "token arrow operator",
											children: "=>"
										}),
										" ",
										N(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										"\n          inputValue",
										N(t.span, {
											className: "token punctuation",
											children: "."
										}),
										N(t.span, {
											className: "token property-access",
											children: "value"
										}),
										" ",
										N(t.span, {
											className: "token operator",
											children: "="
										}),
										" value",
										N(t.span, {
											className: "token punctuation",
											children: ";"
										}),
										"\n        ",
										N(t.span, {
											className: "token punctuation",
											children: "}"
										}),
										N(t.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n      ",
								N(t.span, {
									className: "token punctuation",
									children: "/>"
								})
							]
						}),
						N(t.span, {
							className: "token plain-text",
							children: "\n    "
						}),
						y(t.span, {
							className: "token tag",
							children: [y(t.span, {
								className: "token tag",
								children: [N(t.span, {
									className: "token punctuation",
									children: "</"
								}), N(t.span, {
									className: "token class-name",
									children: "List"
								})]
							}), N(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						"\n  ",
						N(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						N(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						N(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						N(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						N(t.span, {
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
function rC(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? N(t, {
		...e,
		children: N(rR, { ...e })
	}) : rR(e);
}
var rT = b(() => () => k(rC, { components: {
	codeblock4b227777: rE,
	codeblock4a44dc15: rP
} })), rD = rO((e, { emit: t }) => {
	var a;
	let r = rg(e.value ?? "1");
	return rm(r, (void 0 === a && (a = a$), aA(function(e, t) {
		var r = null, s = null, o = null, c = function() {
			if (r) {
				r.unsubscribe(), r = null;
				var e = s;
				s = null, t.next(e);
			}
		};
		function i() {
			var e = o + 300, s = a.now();
			if (s < e) {
				r = this.schedule(void 0, e - s), t.add(r);
				return;
			}
			c();
		}
		e.subscribe(aO(t, function(e) {
			s = e, o = a.now(), r || (r = a.schedule(i, 300), t.add(r));
		}, function() {
			c(), t.complete();
		}, void 0, function() {
			s = r = null;
		}));
	})), rv((e) => t("value-change", e))), rm(r, rw((e) => N("input", {
		value: e,
		onInput: (e) => {
			r.value = e.target.value;
		}
	})));
}, {
	displayName: "TextDebounceInput",
	props: ["value"],
	emits: ["value-change"]
}), r$ = nB(() => {
	let e = w("default");
	return () => N("div", { children: y("div", {
		style: {
			display: "flex",
			gap: "1rem"
		},
		children: [N(rD, {
			value: e.value,
			onValueChange: (t) => {
				e.value = t;
			}
		}), y("div", { children: ["Inputted: ", e.value] })]
	}) });
});
function rV(e) {
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
	return y(S, { children: [
		y(t.p, { children: [
			"和 ",
			N(t.a, {
				href: "https://rxjs.dev/",
				children: "rxjs"
			}),
			" 集成"
		] }),
		"\n",
		y(t.div, {
			"data-example": "",
			children: [N(t.div, {
				"data-example-container": "",
				children: N(t.codeblockd4735e3a, {})
			}), N(t.pre, {
				className: "language-tsx",
				children: y(t.code, {
					className: "language-tsx",
					children: [
						N(t.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						y(t.span, {
							className: "token imports",
							children: [
								N(t.span, {
									className: "token punctuation",
									children: "{"
								}),
								"\n  component",
								N(t.span, {
									className: "token punctuation",
									children: ","
								}),
								"\n  component$",
								N(t.span, {
									className: "token punctuation",
									children: ","
								}),
								"\n  observableRef",
								N(t.span, {
									className: "token punctuation",
									children: ","
								}),
								"\n  render",
								N(t.span, {
									className: "token punctuation",
									children: ","
								}),
								"\n  rx",
								N(t.span, {
									className: "token punctuation",
									children: ","
								}),
								"\n  subscribeUntilUnmount",
								N(t.span, {
									className: "token punctuation",
									children: ","
								}),
								"\n",
								N(t.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						N(t.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						N(t.span, {
							className: "token string",
							children: "\"@innoai-tech/vuekit\""
						}),
						N(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						N(t.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						y(t.span, {
							className: "token imports",
							children: [
								N(t.span, {
									className: "token punctuation",
									children: "{"
								}),
								" ref ",
								N(t.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						N(t.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						N(t.span, {
							className: "token string",
							children: "\"vue\""
						}),
						N(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						N(t.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						y(t.span, {
							className: "token imports",
							children: [
								N(t.span, {
									className: "token punctuation",
									children: "{"
								}),
								" debounceTime ",
								N(t.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						N(t.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						N(t.span, {
							className: "token string",
							children: "\"rxjs\""
						}),
						N(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n",
						N(t.span, {
							className: "token keyword module",
							children: "export"
						}),
						" ",
						N(t.span, {
							className: "token keyword",
							children: "const"
						}),
						" ",
						N(t.span, {
							className: "token maybe-class-name",
							children: "TextDebounceInput"
						}),
						" ",
						N(t.span, {
							className: "token operator",
							children: "="
						}),
						" component$",
						N(t.span, {
							className: "token operator",
							children: "<"
						}),
						N(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n  value",
						N(t.span, {
							className: "token operator",
							children: "?"
						}),
						N(t.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						N(t.span, {
							className: "token builtin",
							children: "string"
						}),
						N(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n  onValueChange",
						N(t.span, {
							className: "token operator",
							children: "?"
						}),
						N(t.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						N(t.span, {
							className: "token punctuation",
							children: "("
						}),
						"v",
						N(t.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						N(t.span, {
							className: "token builtin",
							children: "string"
						}),
						N(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						N(t.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						N(t.span, {
							className: "token keyword",
							children: "void"
						}),
						N(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						N(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						N(t.span, {
							className: "token operator",
							children: ">"
						}),
						N(t.span, {
							className: "token punctuation",
							children: "("
						}),
						N(t.span, {
							className: "token punctuation",
							children: "("
						}),
						"props",
						N(t.span, {
							className: "token punctuation",
							children: ","
						}),
						" ",
						N(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						" emit ",
						N(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						N(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						N(t.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						N(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n  ",
						N(t.span, {
							className: "token keyword",
							children: "const"
						}),
						" value$ ",
						N(t.span, {
							className: "token operator",
							children: "="
						}),
						" ",
						N(t.span, {
							className: "token function",
							children: "observableRef"
						}),
						N(t.span, {
							className: "token punctuation",
							children: "("
						}),
						"props",
						N(t.span, {
							className: "token punctuation",
							children: "."
						}),
						N(t.span, {
							className: "token property-access",
							children: "value"
						}),
						" ",
						N(t.span, {
							className: "token operator",
							children: "??"
						}),
						" ",
						N(t.span, {
							className: "token string",
							children: "\"1\""
						}),
						N(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						N(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n  ",
						N(t.span, {
							className: "token function",
							children: "rx"
						}),
						N(t.span, {
							className: "token punctuation",
							children: "("
						}),
						"\n    value$",
						N(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n    ",
						N(t.span, {
							className: "token function",
							children: "debounceTime"
						}),
						N(t.span, {
							className: "token punctuation",
							children: "("
						}),
						N(t.span, {
							className: "token number",
							children: "300"
						}),
						N(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						N(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n    ",
						N(t.span, {
							className: "token function",
							children: "subscribeUntilUnmount"
						}),
						N(t.span, {
							className: "token punctuation",
							children: "("
						}),
						N(t.span, {
							className: "token punctuation",
							children: "("
						}),
						"v",
						N(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						N(t.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						N(t.span, {
							className: "token function",
							children: "emit"
						}),
						N(t.span, {
							className: "token punctuation",
							children: "("
						}),
						N(t.span, {
							className: "token string",
							children: "\"value-change\""
						}),
						N(t.span, {
							className: "token punctuation",
							children: ","
						}),
						" v",
						N(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						N(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						N(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n  ",
						N(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						N(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n  ",
						N(t.span, {
							className: "token keyword control-flow",
							children: "return"
						}),
						" ",
						N(t.span, {
							className: "token function",
							children: "rx"
						}),
						N(t.span, {
							className: "token punctuation",
							children: "("
						}),
						"\n    value$",
						N(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n    ",
						N(t.span, {
							className: "token function",
							children: "render"
						}),
						N(t.span, {
							className: "token punctuation",
							children: "("
						}),
						N(t.span, {
							className: "token punctuation",
							children: "("
						}),
						"v",
						N(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						N(t.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						N(t.span, {
							className: "token punctuation",
							children: "("
						}),
						"\n      ",
						y(t.span, {
							className: "token tag",
							children: [
								y(t.span, {
									className: "token tag",
									children: [N(t.span, {
										className: "token punctuation",
										children: "<"
									}), "input"]
								}),
								"\n        ",
								N(t.span, {
									className: "token attr-name",
									children: "value"
								}),
								y(t.span, {
									className: "token script language-javascript",
									children: [
										N(t.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										N(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										"v",
										N(t.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n        ",
								N(t.span, {
									className: "token attr-name",
									children: "onInput"
								}),
								y(t.span, {
									className: "token script language-javascript",
									children: [
										N(t.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										N(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										N(t.span, {
											className: "token punctuation",
											children: "("
										}),
										"e",
										N(t.span, {
											className: "token punctuation",
											children: ")"
										}),
										" ",
										N(t.span, {
											className: "token arrow operator",
											children: "=>"
										}),
										" ",
										N(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										"\n          value$",
										N(t.span, {
											className: "token punctuation",
											children: "."
										}),
										N(t.span, {
											className: "token property-access",
											children: "value"
										}),
										" ",
										N(t.span, {
											className: "token operator",
											children: "="
										}),
										" ",
										N(t.span, {
											className: "token punctuation",
											children: "("
										}),
										"e",
										N(t.span, {
											className: "token punctuation",
											children: "."
										}),
										N(t.span, {
											className: "token property-access",
											children: "target"
										}),
										" ",
										N(t.span, {
											className: "token keyword module",
											children: "as"
										}),
										" ",
										N(t.span, {
											className: "token maybe-class-name",
											children: "HTMLInputElement"
										}),
										N(t.span, {
											className: "token punctuation",
											children: ")"
										}),
										N(t.span, {
											className: "token punctuation",
											children: "."
										}),
										N(t.span, {
											className: "token property-access",
											children: "value"
										}),
										N(t.span, {
											className: "token punctuation",
											children: ";"
										}),
										"\n        ",
										N(t.span, {
											className: "token punctuation",
											children: "}"
										}),
										N(t.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n      ",
								N(t.span, {
									className: "token punctuation",
									children: "/>"
								})
							]
						}),
						"\n    ",
						N(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						N(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						N(t.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n  ",
						N(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						N(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						N(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						N(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						N(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n",
						N(t.span, {
							className: "token keyword module",
							children: "export"
						}),
						" ",
						N(t.span, {
							className: "token keyword module",
							children: "default"
						}),
						" ",
						N(t.span, {
							className: "token function",
							children: "component"
						}),
						N(t.span, {
							className: "token punctuation",
							children: "("
						}),
						N(t.span, {
							className: "token punctuation",
							children: "("
						}),
						N(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						N(t.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						N(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n  ",
						N(t.span, {
							className: "token keyword",
							children: "const"
						}),
						" inputValue ",
						N(t.span, {
							className: "token operator",
							children: "="
						}),
						" ",
						N(t.span, {
							className: "token function",
							children: "ref"
						}),
						N(t.span, {
							className: "token punctuation",
							children: "("
						}),
						N(t.span, {
							className: "token string",
							children: "\"default\""
						}),
						N(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						N(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n  ",
						N(t.span, {
							className: "token keyword control-flow",
							children: "return"
						}),
						" ",
						N(t.span, {
							className: "token punctuation",
							children: "("
						}),
						N(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						N(t.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						N(t.span, {
							className: "token punctuation",
							children: "("
						}),
						"\n    ",
						y(t.span, {
							className: "token tag",
							children: [y(t.span, {
								className: "token tag",
								children: [N(t.span, {
									className: "token punctuation",
									children: "<"
								}), "div"]
							}), N(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						N(t.span, {
							className: "token plain-text",
							children: "\n      "
						}),
						y(t.span, {
							className: "token tag",
							children: [
								y(t.span, {
									className: "token tag",
									children: [N(t.span, {
										className: "token punctuation",
										children: "<"
									}), "div"]
								}),
								" ",
								N(t.span, {
									className: "token attr-name",
									children: "style"
								}),
								y(t.span, {
									className: "token script language-javascript",
									children: [
										N(t.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										N(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										N(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										" display",
										N(t.span, {
											className: "token operator",
											children: ":"
										}),
										" ",
										N(t.span, {
											className: "token string",
											children: "\"flex\""
										}),
										N(t.span, {
											className: "token punctuation",
											children: ","
										}),
										" gap",
										N(t.span, {
											className: "token operator",
											children: ":"
										}),
										" ",
										N(t.span, {
											className: "token string",
											children: "\"1rem\""
										}),
										" ",
										N(t.span, {
											className: "token punctuation",
											children: "}"
										}),
										N(t.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								N(t.span, {
									className: "token punctuation",
									children: ">"
								})
							]
						}),
						N(t.span, {
							className: "token plain-text",
							children: "\n        "
						}),
						y(t.span, {
							className: "token tag",
							children: [
								y(t.span, {
									className: "token tag",
									children: [N(t.span, {
										className: "token punctuation",
										children: "<"
									}), N(t.span, {
										className: "token class-name",
										children: "TextDebounceInput"
									})]
								}),
								"\n          ",
								N(t.span, {
									className: "token attr-name",
									children: "value"
								}),
								y(t.span, {
									className: "token script language-javascript",
									children: [
										N(t.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										N(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										"inputValue",
										N(t.span, {
											className: "token punctuation",
											children: "."
										}),
										N(t.span, {
											className: "token property-access",
											children: "value"
										}),
										N(t.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n          ",
								N(t.span, {
									className: "token attr-name",
									children: "onValueChange"
								}),
								y(t.span, {
									className: "token script language-javascript",
									children: [
										N(t.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										N(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										N(t.span, {
											className: "token punctuation",
											children: "("
										}),
										"value",
										N(t.span, {
											className: "token punctuation",
											children: ")"
										}),
										" ",
										N(t.span, {
											className: "token arrow operator",
											children: "=>"
										}),
										" ",
										N(t.span, {
											className: "token punctuation",
											children: "{"
										}),
										"\n            inputValue",
										N(t.span, {
											className: "token punctuation",
											children: "."
										}),
										N(t.span, {
											className: "token property-access",
											children: "value"
										}),
										" ",
										N(t.span, {
											className: "token operator",
											children: "="
										}),
										" value",
										N(t.span, {
											className: "token punctuation",
											children: ";"
										}),
										"\n          ",
										N(t.span, {
											className: "token punctuation",
											children: "}"
										}),
										N(t.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n        ",
								N(t.span, {
									className: "token punctuation",
									children: "/>"
								})
							]
						}),
						N(t.span, {
							className: "token plain-text",
							children: "\n        "
						}),
						y(t.span, {
							className: "token tag",
							children: [y(t.span, {
								className: "token tag",
								children: [N(t.span, {
									className: "token punctuation",
									children: "<"
								}), "div"]
							}), N(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						N(t.span, {
							className: "token plain-text",
							children: "Inputted: "
						}),
						N(t.span, {
							className: "token punctuation",
							children: "{"
						}),
						"inputValue",
						N(t.span, {
							className: "token punctuation",
							children: "."
						}),
						N(t.span, {
							className: "token property-access",
							children: "value"
						}),
						N(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						y(t.span, {
							className: "token tag",
							children: [y(t.span, {
								className: "token tag",
								children: [N(t.span, {
									className: "token punctuation",
									children: "</"
								}), "div"]
							}), N(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						N(t.span, {
							className: "token plain-text",
							children: "\n      "
						}),
						y(t.span, {
							className: "token tag",
							children: [y(t.span, {
								className: "token tag",
								children: [N(t.span, {
									className: "token punctuation",
									children: "</"
								}), "div"]
							}), N(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						N(t.span, {
							className: "token plain-text",
							children: "\n    "
						}),
						y(t.span, {
							className: "token tag",
							children: [y(t.span, {
								className: "token tag",
								children: [N(t.span, {
									className: "token punctuation",
									children: "</"
								}), "div"]
							}), N(t.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						"\n  ",
						N(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						N(t.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						N(t.span, {
							className: "token punctuation",
							children: "}"
						}),
						N(t.span, {
							className: "token punctuation",
							children: ")"
						}),
						N(t.span, {
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
function rL(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? N(t, {
		...e,
		children: N(rV, { ...e })
	}) : rV(e);
}
var rB = b(() => () => k(rL, { components: { codeblockd4735e3a: r$ } }));
export { eB as $, t1 as A, e4 as B, a2 as C, aw as D, aE as E, nB as F, eY as G, e2 as H, nV as I, eH as J, eX as K, nL as L, t2 as M, nU as N, t3 as O, nD as P, eG as Q, nT as R, a9 as S, aI as T, eQ as U, e3 as V, eZ as W, eq as X, eW as Y, eF as Z, rp as _, rO as a, eA as at, rc as b, rg as c, ev as ct, rN as d, G as dt, eD as et, ry as f, U as ft, rh as g, rf as h, rx as i, ej as it, tC as j, t4 as k, rb as l, ey as lt, rm as m, rT as n, eP as nt, rA as o, e_ as ot, rk as p, eK as q, rj as r, eI as rt, rw as s, ew as st, rB as t, eC as tt, rv as u, em as ut, ru as v, aV as w, rs as x, ri as y, e7 as z };
