const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["static/nodepkg-jsoneditor-example.-GJD1HQh.chunk.js","static/vendor-innoai-tech-vueuikit.6XObxuYp.chunk.js","static/vendor-innoai-tech-jsoneditor.VwAXinyt.chunk.js","static/vendor-innoai-tech-vuekit.CrdESE0J.chunk.js","static/vendor-rxjs.CsNJjMpf.chunk.js","static/lib-nodepkg-typedef.DOxQvsqW.chunk.js","static/rolldown-runtime.D8qhy2Lt.chunk.js","static/vendor-toggle-selection.CgfOwnTu.chunk.js","static/lib-nodepkg-vuemarkdown.DG7jtmya.chunk.js","static/vendor-mdast-util-to-string.BKX1fuuv.chunk.js","static/lib-nodepkg-vuematerial.DOllZ8PI.chunk.js","static/vendor-mermaid.B2jGXdgo.chunk.js","static/nodepkg-jsoneditor-example.BJZuzFTv.chunk.js","static/nodepkg-vuemarkdown-example.-U3emPVx.chunk.js","static/nodepkg-vuematerial-example.-CLY1ilF.chunk.js","static/nodepkg-vuematerial-example.CACh7O8s.chunk.js","static/nodepkg-vuematerial-example.dOv2Uuzc.chunk.js","static/nodepkg-vuematerial-example.Dwu-5l7l.chunk.js","static/nodepkg-vuematerial-example.DUhZwYlD.chunk.js","static/nodepkg-vueuikit-example.B28KATSX.chunk.js","static/nodepkg-vueuikit-example.CnYGc32m.chunk.js","static/nodepkg-vueuikit-example.bJFxF5hO.chunk.js","static/nodepkg-vueuikit-example.DOAzt8Ar.chunk.js","static/nodepkg-vueuikit-example.B3DLRCp2.chunk.js","static/nodepkg-vueuikit-example.OFjWxQHV.chunk.js","static/nodepkg-vueuikit-example.B5TorP52.chunk.js","static/nodepkg-vuekit-example.pgyeKRHC.chunk.js","static/nodepkg-vuekit-example.BqHG3C2Q.chunk.js","static/webapp-vuekit-layout.LV2ruXL1.chunk.js"])))=>i.map(i=>d[i]);
import { t as e } from "./rolldown-runtime.D8qhy2Lt.chunk.js";
import { A as t, F as n, M as r, O as i, at as l, c as o, ct as a, it as s, j as u, k as c, ot as f, r as d } from "./vendor-innoai-tech-vuekit.CrdESE0J.chunk.js";
import { a as p } from "./lib-nodepkg-typedef.DOxQvsqW.chunk.js";
import { C as h, S as m, _ as g, d as y, f as _, g as b, h as x, m as w, p as S, v as k, x as E } from "./vendor-innoai-tech-vueuikit.6XObxuYp.chunk.js";
import { f as O, g as C, m as T, p as R } from "./lib-nodepkg-vuematerial.DOllZ8PI.chunk.js";
import { d as M, f as A, s as I } from "./vendor-innoai-tech-jsoneditor.VwAXinyt.chunk.js";
let P = document.createElement("link").relList;
if (!(P && P.supports && P.supports("modulepreload"))) {
	for (let e of document.querySelectorAll("link[rel=\"modulepreload\"]")) j(e);
	new MutationObserver((e) => {
		for (let t of e) if ("childList" === t.type) for (let e of t.addedNodes) "LINK" === e.tagName && "modulepreload" === e.rel && j(e);
	}).observe(document, {
		childList: !0,
		subtree: !0
	});
}
function j(e) {
	if (e.ep) return;
	e.ep = !0;
	let t = function(e) {
		let t = {};
		return e.integrity && (t.integrity = e.integrity), e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy), "use-credentials" === e.crossOrigin ? t.credentials = "include" : "anonymous" === e.crossOrigin ? t.credentials = "omit" : t.credentials = "same-origin", t;
	}(e);
	fetch(e.href, t);
}
function D(e) {
	let t = Object.create(null);
	for (let n of e.split(",")) t[n] = 1;
	return (e) => e in t;
}
var L, N, V, F, $, z, W, B, U, H, G, q = {}, K = [], X = () => {}, Y = () => !1, J = (e) => 111 === e.charCodeAt(0) && 110 === e.charCodeAt(1) && (e.charCodeAt(2) > 122 || 97 > e.charCodeAt(2)), Z = (e) => e.startsWith("onUpdate:"), Q = Object.assign, ee = (e, t) => {
	let n = e.indexOf(t);
	n > -1 && e.splice(n, 1);
}, et = Object.prototype.hasOwnProperty, en = (e, t) => et.call(e, t), er = Array.isArray, ei = (e) => "[object Map]" === ef(e), el = (e) => "function" == typeof e, eo = (e) => "string" == typeof e, ea = (e) => "symbol" == typeof e, es = (e) => null !== e && "object" == typeof e, eu = (e) => (es(e) || el(e)) && el(e.then) && el(e.catch), ec = Object.prototype.toString, ef = (e) => ec.call(e), ed = (e) => eo(e) && "NaN" !== e && "-" !== e[0] && "" + parseInt(e, 10) === e, ep = D(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), eh = (e) => {
	let t = Object.create(null);
	return (n) => t[n] || (t[n] = e(n));
}, em = /-\w/g, ev = eh((e) => e.replace(em, (e) => e.slice(1).toUpperCase())), eg = /\B([A-Z])/g, ey = eh((e) => e.replace(eg, "-$1").toLowerCase()), e_ = eh((e) => e.charAt(0).toUpperCase() + e.slice(1)), eb = eh((e) => e ? `on${e_(e)}` : ""), ex = (e, t) => !Object.is(e, t), ew = (e, ...t) => {
	for (let n = 0; n < e.length; n++) e[n](...t);
}, eS = (e, t, n, r = !1) => {
	Object.defineProperty(e, t, {
		configurable: !0,
		enumerable: !1,
		writable: r,
		value: n
	});
}, ek = (e) => {
	let t = parseFloat(e);
	return isNaN(t) ? e : t;
}, eE = () => N || (N = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {});
function eO(e) {
	if (er(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) {
			let r = e[n], i = eo(r) ? function(e) {
				let t = {};
				return e.replace(eR, "").split(eC).forEach((e) => {
					if (e) {
						let n = e.split(eT);
						n.length > 1 && (t[n[0].trim()] = n[1].trim());
					}
				}), t;
			}(r) : eO(r);
			if (i) for (let e in i) t[e] = i[e];
		}
		return t;
	}
	if (eo(e) || es(e)) return e;
}
var eC = /;(?![^(]*\))/g, eT = /:([^]+)/, eR = /\/\*[^]*?\*\//g;
function eM(e) {
	let t = "";
	if (eo(e)) t = e;
	else if (er(e)) for (let n = 0; n < e.length; n++) {
		let r = eM(e[n]);
		r && (t += r + " ");
	}
	else if (es(e)) for (let n in e) e[n] && (t += n + " ");
	return t.trim();
}
var eA = D("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly"), eI = class {
	constructor(e = !1) {
		this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = V, !e && V && (this.index = (V.scopes || (V.scopes = [])).push(this) - 1);
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
			let t = V;
			try {
				return V = this, e();
			} finally {
				V = t;
			}
		}
	}
	on() {
		1 == ++this._on && (this.prevScope = V, V = this);
	}
	off() {
		this._on > 0 && 0 == --this._on && (V = this.prevScope, this.prevScope = void 0);
	}
	stop(e) {
		if (this._active) {
			let t, n;
			for (t = 0, this._active = !1, n = this.effects.length; t < n; t++) this.effects[t].stop();
			for (t = 0, this.effects.length = 0, n = this.cleanups.length; t < n; t++) this.cleanups[t]();
			if (this.cleanups.length = 0, this.scopes) {
				for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].stop(!0);
				this.scopes.length = 0;
			}
			if (!this.detached && this.parent && !e) {
				let e = this.parent.scopes.pop();
				e && e !== this && (this.parent.scopes[this.index] = e, e.index = this.index);
			}
			this.parent = void 0;
		}
	}
}, eP = /* @__PURE__ */ new WeakSet(), ej = class {
	constructor(e) {
		this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, V && V.active && V.effects.push(this);
	}
	pause() {
		this.flags |= 64;
	}
	resume() {
		64 & this.flags && (this.flags &= -65, eP.has(this) && (eP.delete(this), this.trigger()));
	}
	notify() {
		(!(2 & this.flags) || 32 & this.flags) && (8 & this.flags || eL(this));
	}
	run() {
		if (!(1 & this.flags)) return this.fn();
		this.flags |= 2, eq(this), eV(this);
		let e = F, t = eB;
		F = this, eB = !0;
		try {
			return this.fn();
		} finally {
			eF(this), F = e, eB = t, this.flags &= -3;
		}
	}
	stop() {
		if (1 & this.flags) {
			for (let e = this.deps; e; e = e.nextDep) eW(e);
			this.deps = this.depsTail = void 0, eq(this), this.onStop && this.onStop(), this.flags &= -2;
		}
	}
	trigger() {
		64 & this.flags ? eP.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
	}
	runIfDirty() {
		e$(this) && this.run();
	}
	get dirty() {
		return e$(this);
	}
}, eD = 0;
function eL(e, t = !1) {
	if (e.flags |= 8, t) {
		e.next = z, z = e;
		return;
	}
	e.next = $, $ = e;
}
function eN() {
	let e;
	if (!(--eD > 0)) {
		if (z) {
			let e = z;
			for (z = void 0; e;) {
				let t = e.next;
				e.next = void 0, e.flags &= -9, e = t;
			}
		}
		for (; $;) {
			let t = $;
			for ($ = void 0; t;) {
				let n = t.next;
				if (t.next = void 0, t.flags &= -9, 1 & t.flags) try {
					t.trigger();
				} catch (t) {
					e || (e = t);
				}
				t = n;
			}
		}
		if (e) throw e;
	}
}
function eV(e) {
	for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function eF(e) {
	let t, n = e.depsTail, r = n;
	for (; r;) {
		let e = r.prevDep;
		-1 === r.version ? (r === n && (n = e), eW(r), function(e) {
			let { prevDep: t, nextDep: n } = e;
			t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
		}(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = e;
	}
	e.deps = t, e.depsTail = n;
}
function e$(e) {
	for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (ez(t.dep.computed) || t.dep.version !== t.version)) return !0;
	return !!e._dirty;
}
function ez(e) {
	if (4 & e.flags && !(16 & e.flags) || (e.flags &= -17, e.globalVersion === eK) || (e.globalVersion = eK, !e.isSSR && 128 & e.flags && (!e.deps && !e._dirty || !e$(e)))) return;
	e.flags |= 2;
	let t = e.dep, n = F, r = eB;
	F = e, eB = !0;
	try {
		eV(e);
		let n = e.fn(e._value);
		(0 === t.version || ex(n, e._value)) && (e.flags |= 128, e._value = n, t.version++);
	} catch (e) {
		throw t.version++, e;
	} finally {
		F = n, eB = r, eF(e), e.flags &= -3;
	}
}
function eW(e, t = !1) {
	let { dep: n, prevSub: r, nextSub: i } = e;
	if (r && (r.nextSub = i, e.prevSub = void 0), i && (i.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
		n.computed.flags &= -5;
		for (let e = n.computed.deps; e; e = e.nextDep) eW(e, !0);
	}
	t || --n.sc || !n.map || n.map.delete(n.key);
}
var eB = !0, eU = [];
function eH() {
	eU.push(eB), eB = !1;
}
function eG() {
	let e = eU.pop();
	eB = void 0 === e || e;
}
function eq(e) {
	let { cleanup: t } = e;
	if (e.cleanup = void 0, t) {
		let e = F;
		F = void 0;
		try {
			t();
		} finally {
			F = e;
		}
	}
}
var eK = 0, eX = class {
	constructor(e, t) {
		this.sub = e, this.dep = t, this.version = t.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
	}
}, eY = class {
	constructor(e) {
		this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
	}
	track(e) {
		if (!F || !eB || F === this.computed) return;
		let t = this.activeLink;
		if (void 0 === t || t.sub !== F) t = this.activeLink = new eX(F, this), F.deps ? (t.prevDep = F.depsTail, F.depsTail.nextDep = t, F.depsTail = t) : F.deps = F.depsTail = t, function e(t) {
			if (t.dep.sc++, 4 & t.sub.flags) {
				let n = t.dep.computed;
				if (n && !t.dep.subs) {
					n.flags |= 20;
					for (let t = n.deps; t; t = t.nextDep) e(t);
				}
				let r = t.dep.subs;
				r !== t && (t.prevSub = r, r && (r.nextSub = t)), t.dep.subs = t;
			}
		}(t);
		else if (-1 === t.version && (t.version = this.version, t.nextDep)) {
			let e = t.nextDep;
			e.prevDep = t.prevDep, t.prevDep && (t.prevDep.nextDep = e), t.prevDep = F.depsTail, t.nextDep = void 0, F.depsTail.nextDep = t, F.depsTail = t, F.deps === t && (F.deps = e);
		}
		return t;
	}
	trigger(e) {
		this.version++, eK++, this.notify(e);
	}
	notify(e) {
		eD++;
		try {
			for (let e = this.subs; e; e = e.prevSub) e.sub.notify() && e.sub.dep.notify();
		} finally {
			eN();
		}
	}
}, eJ = /* @__PURE__ */ new WeakMap(), eZ = Symbol(""), eQ = Symbol(""), e0 = Symbol("");
function e1(e, t, n) {
	if (eB && F) {
		let t = eJ.get(e);
		t || eJ.set(e, t = /* @__PURE__ */ new Map());
		let r = t.get(n);
		r || (t.set(n, r = new eY()), r.map = t, r.key = n), r.track();
	}
}
function e2(e, t, n, r, i, l) {
	let o = eJ.get(e);
	if (!o) return void eK++;
	let a = (e) => {
		e && e.trigger();
	};
	if (eD++, "clear" === t) o.forEach(a);
	else {
		let i = er(e), l = i && ed(n);
		if (i && "length" === n) {
			let e = Number(r);
			o.forEach((t, n) => {
				("length" === n || n === e0 || !ea(n) && n >= e) && a(t);
			});
		} else switch ((void 0 !== n || o.has(void 0)) && a(o.get(n)), l && a(o.get(e0)), t) {
			case "add":
				i ? l && a(o.get("length")) : (a(o.get(eZ)), ei(e) && a(o.get(eQ)));
				break;
			case "delete":
				!i && (a(o.get(eZ)), ei(e) && a(o.get(eQ)));
				break;
			case "set": ei(e) && a(o.get(eZ));
		}
	}
	eN();
}
function e5(e) {
	let t = tM(e);
	return t === e ? t : (e1(t, "iterate", e0), tT(e) ? t : t.map(tA));
}
function e6(e) {
	return e1(e = tM(e), "iterate", e0), e;
}
var e3 = {
	__proto__: null,
	[Symbol.iterator]() {
		return e8(this, Symbol.iterator, tA);
	},
	concat(...e) {
		return e5(this).concat(...e.map((e) => er(e) ? e5(e) : e));
	},
	entries() {
		return e8(this, "entries", (e) => (e[1] = tA(e[1]), e));
	},
	every(e, t) {
		return e9(this, "every", e, t, void 0, arguments);
	},
	filter(e, t) {
		return e9(this, "filter", e, t, (e) => e.map(tA), arguments);
	},
	find(e, t) {
		return e9(this, "find", e, t, tA, arguments);
	},
	findIndex(e, t) {
		return e9(this, "findIndex", e, t, void 0, arguments);
	},
	findLast(e, t) {
		return e9(this, "findLast", e, t, tA, arguments);
	},
	findLastIndex(e, t) {
		return e9(this, "findLastIndex", e, t, void 0, arguments);
	},
	forEach(e, t) {
		return e9(this, "forEach", e, t, void 0, arguments);
	},
	includes(...e) {
		return te(this, "includes", e);
	},
	indexOf(...e) {
		return te(this, "indexOf", e);
	},
	join(e) {
		return e5(this).join(e);
	},
	lastIndexOf(...e) {
		return te(this, "lastIndexOf", e);
	},
	map(e, t) {
		return e9(this, "map", e, t, void 0, arguments);
	},
	pop() {
		return tt(this, "pop");
	},
	push(...e) {
		return tt(this, "push", e);
	},
	reduce(e, ...t) {
		return e7(this, "reduce", e, t);
	},
	reduceRight(e, ...t) {
		return e7(this, "reduceRight", e, t);
	},
	shift() {
		return tt(this, "shift");
	},
	some(e, t) {
		return e9(this, "some", e, t, void 0, arguments);
	},
	splice(...e) {
		return tt(this, "splice", e);
	},
	toReversed() {
		return e5(this).toReversed();
	},
	toSorted(e) {
		return e5(this).toSorted(e);
	},
	toSpliced(...e) {
		return e5(this).toSpliced(...e);
	},
	unshift(...e) {
		return tt(this, "unshift", e);
	},
	values() {
		return e8(this, "values", tA);
	}
};
function e8(e, t, n) {
	let r = e6(e), i = r[t]();
	return r === e || tT(e) || (i._next = i.next, i.next = () => {
		let e = i._next();
		return e.done || (e.value = n(e.value)), e;
	}), i;
}
var e4 = Array.prototype;
function e9(e, t, n, r, i, l) {
	let o = e6(e), a = o !== e && !tT(e), s = o[t];
	if (s !== e4[t]) {
		let t = s.apply(e, l);
		return a ? tA(t) : t;
	}
	let u = n;
	o !== e && (a ? u = function(t, r) {
		return n.call(this, tA(t), r, e);
	} : n.length > 2 && (u = function(t, r) {
		return n.call(this, t, r, e);
	}));
	let c = s.call(o, u, r);
	return a && i ? i(c) : c;
}
function e7(e, t, n, r) {
	let i = e6(e), l = n;
	return i !== e && (tT(e) ? n.length > 3 && (l = function(t, r, i) {
		return n.call(this, t, r, i, e);
	}) : l = function(t, r, i) {
		return n.call(this, t, tA(r), i, e);
	}), i[t](l, ...r);
}
function te(e, t, n) {
	let r = tM(e);
	e1(r, "iterate", e0);
	let i = r[t](...n);
	return (-1 === i || !1 === i) && tR(n[0]) ? (n[0] = tM(n[0]), r[t](...n)) : i;
}
function tt(e, t, n = []) {
	eH(), eD++;
	let r = tM(e)[t].apply(e, n);
	return eN(), eG(), r;
}
var tn = D("__proto__,__v_isRef,__isVue"), tr = new Set(Object.getOwnPropertyNames(Symbol).filter((e) => "arguments" !== e && "caller" !== e).map((e) => Symbol[e]).filter(ea));
function ti(e) {
	ea(e) || (e = String(e));
	let t = tM(this);
	return e1(t, "has", e), t.hasOwnProperty(e);
}
var tl = class {
	constructor(e = !1, t = !1) {
		this._isReadonly = e, this._isShallow = t;
	}
	get(e, t, n) {
		if ("__v_skip" === t) return e.__v_skip;
		let r = this._isReadonly, i = this._isShallow;
		if ("__v_isReactive" === t) return !r;
		if ("__v_isReadonly" === t) return r;
		if ("__v_isShallow" === t) return i;
		if ("__v_raw" === t) return n === (r ? i ? tx : tb : i ? t_ : ty).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(n) ? e : void 0;
		let l = er(e);
		if (!r) {
			let e;
			if (l && (e = e3[t])) return e;
			if ("hasOwnProperty" === t) return ti;
		}
		let o = Reflect.get(e, t, tP(e) ? e : n);
		if ((ea(t) ? tr.has(t) : tn(t)) || (r || e1(e, "get", t), i)) return o;
		if (tP(o)) {
			let e = l && ed(t) ? o : o.value;
			return r && es(e) ? tk(e) : e;
		}
		return es(o) ? r ? tk(o) : tw(o) : o;
	}
}, to = class extends tl {
	constructor(e = !1) {
		super(!1, e);
	}
	set(e, t, n, r) {
		let i = e[t];
		if (!this._isShallow) {
			let t = tC(i);
			if (tT(n) || tC(n) || (i = tM(i), n = tM(n)), !er(e) && tP(i) && !tP(n)) if (t) return !0;
			else return i.value = n, !0;
		}
		let l = er(e) && ed(t) ? Number(t) < e.length : en(e, t), o = Reflect.set(e, t, n, tP(e) ? e : r);
		return e === tM(r) && (l ? ex(n, i) && e2(e, "set", t, n, i) : e2(e, "add", t, n)), o;
	}
	deleteProperty(e, t) {
		let n = en(e, t), r = e[t], i = Reflect.deleteProperty(e, t);
		return i && n && e2(e, "delete", t, void 0, r), i;
	}
	has(e, t) {
		let n = Reflect.has(e, t);
		return ea(t) && tr.has(t) || e1(e, "has", t), n;
	}
	ownKeys(e) {
		return e1(e, "iterate", er(e) ? "length" : eZ), Reflect.ownKeys(e);
	}
}, ta = class extends tl {
	constructor(e = !1) {
		super(!0, e);
	}
	set(e, t) {
		return !0;
	}
	deleteProperty(e, t) {
		return !0;
	}
}, ts = new to(), tu = new ta(), tc = new to(!0), tf = (e) => e, td = (e) => Reflect.getPrototypeOf(e);
function tp(e) {
	return function() {
		return "delete" !== e && ("clear" === e ? void 0 : this);
	};
}
function th(e, t) {
	let n = function(e, t) {
		let n = {
			get(n) {
				let r = this.__v_raw, i = tM(r), l = tM(n);
				e || (ex(n, l) && e1(i, "get", n), e1(i, "get", l));
				let { has: o } = td(i), a = t ? tf : e ? tI : tA;
				return o.call(i, n) ? a(r.get(n)) : o.call(i, l) ? a(r.get(l)) : void (r !== i && r.get(n));
			},
			get size() {
				let t = this.__v_raw;
				return e || e1(tM(t), "iterate", eZ), t.size;
			},
			has(t) {
				let n = this.__v_raw, r = tM(n), i = tM(t);
				return e || (ex(t, i) && e1(r, "has", t), e1(r, "has", i)), t === i ? n.has(t) : n.has(t) || n.has(i);
			},
			forEach(n, r) {
				let i = this, l = i.__v_raw, o = tM(l), a = t ? tf : e ? tI : tA;
				return e || e1(o, "iterate", eZ), l.forEach((e, t) => n.call(r, a(e), a(t), i));
			}
		};
		return Q(n, e ? {
			add: tp("add"),
			set: tp("set"),
			delete: tp("delete"),
			clear: tp("clear")
		} : {
			add(e) {
				t || tT(e) || tC(e) || (e = tM(e));
				let n = tM(this);
				return td(n).has.call(n, e) || (n.add(e), e2(n, "add", e, e)), this;
			},
			set(e, n) {
				t || tT(n) || tC(n) || (n = tM(n));
				let r = tM(this), { has: i, get: l } = td(r), o = i.call(r, e);
				o || (e = tM(e), o = i.call(r, e));
				let a = l.call(r, e);
				return r.set(e, n), o ? ex(n, a) && e2(r, "set", e, n, a) : e2(r, "add", e, n), this;
			},
			delete(e) {
				let t = tM(this), { has: n, get: r } = td(t), i = n.call(t, e);
				i || (e = tM(e), i = n.call(t, e));
				let l = r ? r.call(t, e) : void 0, o = t.delete(e);
				return i && e2(t, "delete", e, void 0, l), o;
			},
			clear() {
				let e = tM(this), t = 0 !== e.size, n = e.clear();
				return t && e2(e, "clear", void 0, void 0, void 0), n;
			}
		}), [
			"keys",
			"values",
			"entries",
			Symbol.iterator
		].forEach((r) => {
			n[r] = function(...n) {
				let i = this.__v_raw, l = tM(i), o = ei(l), a = "entries" === r || r === Symbol.iterator && o, s = i[r](...n), u = t ? tf : e ? tI : tA;
				return e || e1(l, "iterate", "keys" === r && o ? eQ : eZ), {
					next() {
						let { value: e, done: t } = s.next();
						return t ? {
							value: e,
							done: t
						} : {
							value: a ? [u(e[0]), u(e[1])] : u(e),
							done: t
						};
					},
					[Symbol.iterator]() {
						return this;
					}
				};
			};
		}), n;
	}(e, t);
	return (t, r, i) => "__v_isReactive" === r ? !e : "__v_isReadonly" === r ? e : "__v_raw" === r ? t : Reflect.get(en(n, r) && r in t ? n : t, r, i);
}
var tm = { get: th(!1, !1) }, tv = { get: th(!1, !0) }, tg = { get: th(!0, !1) }, ty = /* @__PURE__ */ new WeakMap(), t_ = /* @__PURE__ */ new WeakMap(), tb = /* @__PURE__ */ new WeakMap(), tx = /* @__PURE__ */ new WeakMap();
function tw(e) {
	return tC(e) ? e : tE(e, !1, ts, tm, ty);
}
function tS(e) {
	return tE(e, !1, tc, tv, t_);
}
function tk(e) {
	return tE(e, !0, tu, tg, tb);
}
function tE(e, t, n, r, i) {
	var l;
	if (!es(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
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
	}(ef(l).slice(8, -1));
	if (0 === o) return e;
	let a = i.get(e);
	if (a) return a;
	let s = new Proxy(e, 2 === o ? r : n);
	return i.set(e, s), s;
}
function tO(e) {
	return tC(e) ? tO(e.__v_raw) : !!(e && e.__v_isReactive);
}
function tC(e) {
	return !!(e && e.__v_isReadonly);
}
function tT(e) {
	return !!(e && e.__v_isShallow);
}
function tR(e) {
	return !!e && !!e.__v_raw;
}
function tM(e) {
	let t = e && e.__v_raw;
	return t ? tM(t) : e;
}
var tA = (e) => es(e) ? tw(e) : e, tI = (e) => es(e) ? tk(e) : e;
function tP(e) {
	return !!e && !0 === e.__v_isRef;
}
function tj(e) {
	return tL(e, !1);
}
function tD(e) {
	return tL(e, !0);
}
function tL(e, t) {
	return tP(e) ? e : new tN(e, t);
}
var tN = class {
	constructor(e, t) {
		this.dep = new eY(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = t ? e : tM(e), this._value = t ? e : tA(e), this.__v_isShallow = t;
	}
	get value() {
		return this.dep.track(), this._value;
	}
	set value(e) {
		let t = this._rawValue, n = this.__v_isShallow || tT(e) || tC(e);
		ex(e = n ? e : tM(e), t) && (this._rawValue = e, this._value = n ? e : tA(e), this.dep.trigger());
	}
};
function tV(e) {
	return tP(e) ? e.value : e;
}
var tF = {
	get: (e, t, n) => "__v_raw" === t ? e : tV(Reflect.get(e, t, n)),
	set: (e, t, n, r) => {
		let i = e[t];
		return tP(i) && !tP(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
	}
};
function t$(e) {
	return tO(e) ? e : new Proxy(e, tF);
}
var tz = class {
	constructor(e) {
		this.__v_isRef = !0, this._value = void 0;
		let t = this.dep = new eY(), { get: n, set: r } = e(t.track.bind(t), t.trigger.bind(t));
		this._get = n, this._set = r;
	}
	get value() {
		return this._value = this._get();
	}
	set value(e) {
		this._set(e);
	}
};
function tW(e) {
	return new tz(e);
}
var tB = class {
	constructor(e, t, n) {
		this.fn = e, this.setter = t, this._value = void 0, this.dep = new eY(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = eK - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = n;
	}
	notify() {
		if (this.flags |= 16, !(8 & this.flags) && F !== this) return eL(this, !0), !0;
	}
	get value() {
		let e = this.dep.track();
		return ez(this), e && (e.version = this.dep.version), this._value;
	}
	set value(e) {
		this.setter && this.setter(e);
	}
}, tU = {}, tH = /* @__PURE__ */ new WeakMap(), tG = void 0;
function tq(e, t = Infinity, n) {
	if (t <= 0 || !es(e) || e.__v_skip || ((n = n || /* @__PURE__ */ new Map()).get(e) || 0) >= t) return e;
	if (n.set(e, t), t--, tP(e)) tq(e.value, t, n);
	else if (er(e)) for (let r = 0; r < e.length; r++) tq(e[r], t, n);
	else if ("[object Set]" === ef(e) || ei(e)) e.forEach((e) => {
		tq(e, t, n);
	});
	else if ("[object Object]" === ef(e)) {
		for (let r in e) tq(e[r], t, n);
		for (let r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && tq(e[r], t, n);
	}
	return e;
}
function tK(e, t, n, r) {
	try {
		return r ? e(...r) : e();
	} catch (e) {
		tY(e, t, n);
	}
}
function tX(e, t, n, r) {
	if (el(e)) {
		let i = tK(e, t, n, r);
		return i && eu(i) && i.catch((e) => {
			tY(e, t, n);
		}), i;
	}
	if (er(e)) {
		let i = [];
		for (let l = 0; l < e.length; l++) i.push(tX(e[l], t, n, r));
		return i;
	}
}
function tY(e, t, n, r = !0) {
	t && t.vnode;
	let { errorHandler: l, throwUnhandledErrorInProduction: o } = t && t.appContext.config || q;
	if (t) {
		let r = t.parent, i = t.proxy, o = `https://vuejs.org/error-reference/#runtime-${n}`;
		for (; r;) {
			let t = r.ec;
			if (t) {
				for (let n = 0; n < t.length; n++) if (!1 === t[n](e, i, o)) return;
			}
			r = r.parent;
		}
		if (l) {
			eH(), tK(l, null, 10, [
				e,
				i,
				o
			]), eG();
			return;
		}
	}
	(function(e, t, n, r = !0, i = !1) {
		if (i) throw e;
		console.error(e);
	})(e, 0, 0, r, o);
}
var tJ = [], tZ = -1, tQ = [], t0 = null, t1 = 0, t2 = Promise.resolve(), t5 = null;
function t6(e) {
	let t = t5 || t2;
	return e ? t.then(this ? e.bind(this) : e) : t;
}
function t3(e) {
	if (!(1 & e.flags)) {
		let t = t7(e), n = tJ[tJ.length - 1];
		!n || !(2 & e.flags) && t >= t7(n) ? tJ.push(e) : tJ.splice(function(e) {
			let t = tZ + 1, n = tJ.length;
			for (; t < n;) {
				let r = t + n >>> 1, i = tJ[r], l = t7(i);
				l < e || l === e && 2 & i.flags ? t = r + 1 : n = r;
			}
			return t;
		}(t), 0, e), e.flags |= 1, t8();
	}
}
function t8() {
	t5 || (t5 = t2.then(function e(t) {
		try {
			for (tZ = 0; tZ < tJ.length; tZ++) {
				let e = tJ[tZ];
				e && !(8 & e.flags) && (4 & e.flags && (e.flags &= -2), tK(e, e.i, e.i ? 15 : 14), 4 & e.flags || (e.flags &= -2));
			}
		} finally {
			for (; tZ < tJ.length; tZ++) {
				let e = tJ[tZ];
				e && (e.flags &= -2);
			}
			tZ = -1, tJ.length = 0, t9(t), t5 = null, (tJ.length || tQ.length) && e(t);
		}
	}));
}
function t4(e, t, n = tZ + 1) {
	for (; n < tJ.length; n++) {
		let t = tJ[n];
		if (t && 2 & t.flags) {
			if (e && t.id !== e.uid) continue;
			tJ.splice(n, 1), n--, 4 & t.flags && (t.flags &= -2), t(), 4 & t.flags || (t.flags &= -2);
		}
	}
}
function t9(e) {
	if (tQ.length) {
		let e = [...new Set(tQ)].sort((e, t) => t7(e) - t7(t));
		if (tQ.length = 0, t0) return void t0.push(...e);
		for (t1 = 0, t0 = e; t1 < t0.length; t1++) {
			let e = t0[t1];
			4 & e.flags && (e.flags &= -2), 8 & e.flags || e(), e.flags &= -2;
		}
		t0 = null, t1 = 0;
	}
}
var t7 = (e) => null == e.id ? 2 & e.flags ? -1 : Infinity : e.id, ne = null, nt = null;
function nn(e) {
	let t = ne;
	return ne = e, nt = e && e.type.__scopeId || null, t;
}
function nr(e, t, n, r) {
	let i = e.dirs, l = t && t.dirs;
	for (let o = 0; o < i.length; o++) {
		let a = i[o];
		l && (a.oldValue = l[o].value);
		let s = a.dir[r];
		s && (eH(), tX(s, n, 8, [
			e.el,
			a,
			e,
			t
		]), eG());
	}
}
var ni = Symbol("_vte"), nl = (e) => e && (e.disabled || "" === e.disabled), no = (e) => e && (e.defer || "" === e.defer), na = (e) => "undefined" != typeof SVGElement && e instanceof SVGElement, ns = (e) => "function" == typeof MathMLElement && e instanceof MathMLElement, nu = (e, t) => {
	let n = e && e.to;
	return eo(n) ? t ? t(n) : null : n;
}, nc = {
	name: "Teleport",
	__isTeleport: !0,
	process(e, t, n, r, i, l, o, a, s, u) {
		let { mc: c, pc: f, pbc: d, o: { insert: p, querySelector: h, createText: m, createComment: g } } = u, y = nl(t.props), { shapeFlag: _, children: b, dynamicChildren: x } = t;
		if (null == e) {
			let e = t.el = m(""), u = t.anchor = m("");
			p(e, n, r), p(u, n, r);
			let f = (e, t) => {
				16 & _ && c(b, e, t, i, l, o, a, s);
			}, d = () => {
				let e = t.target = nu(t.props, h), n = nh(e, t, m, p);
				e && ("svg" !== o && na(e) ? o = "svg" : "mathml" !== o && ns(e) && (o = "mathml"), i && i.isCE && (i.ce._teleportTargets || (i.ce._teleportTargets = /* @__PURE__ */ new Set())).add(e), y || (f(e, n), np(t, !1)));
			};
			y && (f(n, u), np(t, !0)), no(t.props) ? (t.el.__isMounted = !1, r_(() => {
				d(), delete t.el.__isMounted;
			}, l)) : d();
		} else {
			if (no(t.props) && !1 === e.el.__isMounted) return void r_(() => {
				nc.process(e, t, n, r, i, l, o, a, s, u);
			}, l);
			t.el = e.el, t.targetStart = e.targetStart;
			let c = t.anchor = e.anchor, p = t.target = e.target, m = t.targetAnchor = e.targetAnchor, g = nl(e.props), _ = g ? n : p, b = g ? c : m;
			if ("svg" === o || na(p) ? o = "svg" : ("mathml" === o || ns(p)) && (o = "mathml"), x ? (d(e.dynamicChildren, x, _, i, l, o, a), rw(e, t, !0)) : s || f(e, t, _, b, i, l, o, a, !1), y) g ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : nf(t, n, c, u, 1);
			else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
				let e = t.target = nu(t.props, h);
				e && nf(t, e, null, u, 0);
			} else g && nf(t, p, m, u, 1);
			np(t, y);
		}
	},
	remove(e, t, n, { um: r, o: { remove: i } }, l) {
		let { shapeFlag: o, children: a, anchor: s, targetStart: u, targetAnchor: c, target: f, props: d } = e;
		if (f && (i(u), i(c)), l && i(s), 16 & o) {
			let e = l || !nl(d);
			for (let i = 0; i < a.length; i++) {
				let l = a[i];
				r(l, t, n, e, !!l.dynamicChildren);
			}
		}
	},
	move: nf,
	hydrate: function(e, t, n, r, i, l, { o: { nextSibling: o, parentNode: a, querySelector: s, insert: u, createText: c } }, f) {
		function d(e, t, s, u) {
			t.anchor = f(o(e), t, a(e), n, r, i, l), t.targetStart = s, t.targetAnchor = u;
		}
		let p = t.target = nu(t.props, s), h = nl(t.props);
		if (p) {
			let a = p._lpa || p.firstChild;
			if (16 & t.shapeFlag) if (h) d(e, t, a, a && o(a));
			else {
				t.anchor = o(e);
				let s = a;
				for (; s;) {
					if (s && 8 === s.nodeType) {
						if ("teleport start anchor" === s.data) t.targetStart = s;
						else if ("teleport anchor" === s.data) {
							t.targetAnchor = s, p._lpa = t.targetAnchor && o(t.targetAnchor);
							break;
						}
					}
					s = o(s);
				}
				t.targetAnchor || nh(p, t, c, u), f(a && o(a), t, p, n, r, i, l);
			}
			np(t, h);
		} else h && 16 & t.shapeFlag && d(e, t, e, o(e));
		return t.anchor && o(t.anchor);
	}
};
function nf(e, t, n, { o: { insert: r }, m: i }, l = 2) {
	0 === l && r(e.targetAnchor, t, n);
	let { el: o, anchor: a, shapeFlag: s, children: u, props: c } = e, f = 2 === l;
	if (f && r(o, t, n), (!f || nl(c)) && 16 & s) for (let e = 0; e < u.length; e++) i(u[e], t, n, 2);
	f && r(a, t, n);
}
var nd = nc;
function np(e, t) {
	let n = e.ctx;
	if (n && n.ut) {
		let r, i;
		for (t ? (r = e.el, i = e.anchor) : (r = e.targetStart, i = e.targetAnchor); r && r !== i;) 1 === r.nodeType && r.setAttribute("data-v-owner", n.uid), r = r.nextSibling;
		n.ut();
	}
}
function nh(e, t, n, r) {
	let i = t.targetStart = n(""), l = t.targetAnchor = n("");
	return i[ni] = l, e && (r(i, e), r(l, e)), l;
}
var nm = Symbol("_leaveCb"), nv = Symbol("_enterCb"), ng = [Function, Array], ny = {
	mode: String,
	appear: Boolean,
	persisted: Boolean,
	onBeforeEnter: ng,
	onEnter: ng,
	onAfterEnter: ng,
	onEnterCancelled: ng,
	onBeforeLeave: ng,
	onLeave: ng,
	onAfterLeave: ng,
	onLeaveCancelled: ng,
	onBeforeAppear: ng,
	onAppear: ng,
	onAfterAppear: ng,
	onAppearCancelled: ng
}, n_ = (e) => {
	let t = e.subTree;
	return t.component ? n_(t.component) : t;
};
function nb(e) {
	let t = e[0];
	if (e.length > 1) {
		for (let n of e) if (n.type !== rV) {
			t = n;
			break;
		}
	}
	return t;
}
var nx = {
	name: "BaseTransition",
	props: ny,
	setup(e, { slots: t }) {
		let n = r2(), r = function() {
			let e = {
				isMounted: !1,
				isLeaving: !1,
				isUnmounting: !1,
				leavingVNodes: /* @__PURE__ */ new Map()
			};
			return n$(() => {
				e.isMounted = !0;
			}), nB(() => {
				e.isUnmounting = !0;
			}), e;
		}();
		return () => {
			let i = t.default && function e(t, n = !1, r) {
				let i = [], l = 0;
				for (let o = 0; o < t.length; o++) {
					let a = t[o], s = null == r ? a.key : String(r) + String(null != a.key ? a.key : o);
					a.type === rL ? (128 & a.patchFlag && l++, i = i.concat(e(a.children, n, s))) : (n || a.type !== rV) && i.push(null != s ? rK(a, { key: s }) : a);
				}
				if (l > 1) for (let e = 0; e < i.length; e++) i[e].patchFlag = -2;
				return i;
			}(t.default(), !0);
			if (!i || !i.length) return;
			let l = nb(i), o = tM(e), { mode: a } = o;
			if (r.isLeaving) return nk(l);
			let s = nE(l);
			if (!s) return nk(l);
			let u = nS(s, o, r, n, (e) => u = e);
			s.type !== rV && nO(s, u);
			let c = n.subTree && nE(n.subTree);
			if (c && c.type !== rV && !rU(c, s) && n_(n).type !== rV) {
				let e = nS(c, o, r, n);
				if (nO(c, e), "out-in" === a && s.type !== rV) return r.isLeaving = !0, e.afterLeave = () => {
					r.isLeaving = !1, 8 & n.job.flags || n.update(), delete e.afterLeave, c = void 0;
				}, nk(l);
				"in-out" === a && s.type !== rV ? e.delayLeave = (e, t, n) => {
					nw(r, c)[String(c.key)] = c, e[nm] = () => {
						t(), e[nm] = void 0, delete u.delayedLeave, c = void 0;
					}, u.delayedLeave = () => {
						n(), delete u.delayedLeave, c = void 0;
					};
				} : c = void 0;
			} else c && (c = void 0);
			return l;
		};
	}
};
function nw(e, t) {
	let { leavingVNodes: n } = e, r = n.get(t.type);
	return r || (r = Object.create(null), n.set(t.type, r)), r;
}
function nS(e, t, n, r, i) {
	let { appear: l, mode: o, persisted: a = !1, onBeforeEnter: s, onEnter: u, onAfterEnter: c, onEnterCancelled: f, onBeforeLeave: d, onLeave: p, onAfterLeave: h, onLeaveCancelled: m, onBeforeAppear: g, onAppear: y, onAfterAppear: _, onAppearCancelled: b } = t, x = String(e.key), w = nw(n, e), S = (e, t) => {
		e && tX(e, r, 9, t);
	}, k = (e, t) => {
		let n = t[1];
		S(e, t), er(e) ? e.every((e) => e.length <= 1) && n() : e.length <= 1 && n();
	}, E = {
		mode: o,
		persisted: a,
		beforeEnter(t) {
			let r = s;
			if (!n.isMounted) if (!l) return;
			else r = g || s;
			t[nm] && t[nm](!0);
			let i = w[x];
			i && rU(e, i) && i.el[nm] && i.el[nm](), S(r, [t]);
		},
		enter(e) {
			let t = u, r = c, i = f;
			if (!n.isMounted) if (!l) return;
			else t = y || u, r = _ || c, i = b || f;
			let o = !1, a = e[nv] = (t) => {
				o || (o = !0, t ? S(i, [e]) : S(r, [e]), E.delayedLeave && E.delayedLeave(), e[nv] = void 0);
			};
			t ? k(t, [e, a]) : a();
		},
		leave(t, r) {
			let i = String(e.key);
			if (t[nv] && t[nv](!0), n.isUnmounting) return r();
			S(d, [t]);
			let l = !1, o = t[nm] = (n) => {
				l || (l = !0, r(), n ? S(m, [t]) : S(h, [t]), t[nm] = void 0, w[i] === e && delete w[i]);
			};
			w[i] = e, p ? k(p, [t, o]) : o();
		},
		clone(e) {
			let l = nS(e, t, n, r, i);
			return i && i(l), l;
		}
	};
	return E;
}
function nk(e) {
	if (nP(e)) return (e = rK(e)).children = null, e;
}
function nE(e) {
	if (!nP(e)) return e.type.__isTeleport && e.children ? nb(e.children) : e;
	if (e.component) return e.component.subTree;
	let { shapeFlag: t, children: n } = e;
	if (n) {
		if (16 & t) return n[0];
		if (32 & t && el(n.default)) return n.default();
	}
}
function nO(e, t) {
	6 & e.shapeFlag && e.component ? (e.transition = t, nO(e.component.subTree, t)) : 128 & e.shapeFlag ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function nC(e, t) {
	return el(e) ? Q({ name: e.name }, t, { setup: e }) : e;
}
function nT(e) {
	e.ids = [
		e.ids[0] + e.ids[2]++ + "-",
		0,
		0
	];
}
var nR = /* @__PURE__ */ new WeakMap();
function nM(e, t, n, r, i = !1) {
	if (er(e)) return void e.forEach((e, l) => nM(e, t && (er(t) ? t[l] : t), n, r, i));
	if (nI(r) && !i) {
		512 & r.shapeFlag && r.type.__asyncResolved && r.component.subTree.component && nM(e, t, n, r.component.subTree);
		return;
	}
	let l = 4 & r.shapeFlag ? ie(r.component) : r.el, o = i ? null : l, { i: a, r: s } = e, u = t && t.r, c = a.refs === q ? a.refs = {} : a.refs, f = a.setupState, d = tM(f), p = f === q ? Y : (e) => en(d, e);
	if (null != u && u !== s && ((nA(t), eo(u)) ? (c[u] = null, p(u) && (f[u] = null)) : tP(u) && (u.value = null, t.k && (c[t.k] = null))), el(s)) tK(s, a, 12, [o, c]);
	else {
		let t = eo(s), r = tP(s);
		if (t || r) {
			let a = () => {
				if (e.f) {
					let n = t ? p(s) ? f[s] : c[s] : s.value;
					if (i) er(n) && ee(n, l);
					else if (er(n)) n.includes(l) || n.push(l);
					else if (t) c[s] = [l], p(s) && (f[s] = c[s]);
					else {
						let t = [l];
						s.value = t, e.k && (c[e.k] = t);
					}
				} else t ? (c[s] = o, p(s) && (f[s] = o)) : r && (s.value = o, e.k && (c[e.k] = o));
			};
			if (o) {
				let t = () => {
					a(), nR.delete(e);
				};
				t.id = -1, nR.set(e, t), r_(t, n);
			} else nA(e), a();
		}
	}
}
function nA(e) {
	let t = nR.get(e);
	t && (t.flags |= 8, nR.delete(e));
}
eE().requestIdleCallback, eE().cancelIdleCallback;
var nI = (e) => !!e.type.__asyncLoader, nP = (e) => e.type.__isKeepAlive;
function nj(e, t) {
	nL(e, "a", t);
}
function nD(e, t) {
	nL(e, "da", t);
}
function nL(e, t, n = r1) {
	let r = e.__wdc || (e.__wdc = () => {
		let t = n;
		for (; t;) {
			if (t.isDeactivated) return;
			t = t.parent;
		}
		return e();
	});
	if (nN(t, r, n), n) {
		let e = n.parent;
		for (; e && e.parent;) nP(e.parent.vnode) && function(e, t, n, r) {
			let i = nN(t, e, r, !0);
			nU(() => {
				ee(r[t], i);
			}, n);
		}(r, t, n, e), e = e.parent;
	}
}
function nN(e, t, n = r1, r = !1) {
	if (n) {
		let i = n[e] || (n[e] = []), l = t.__weh || (t.__weh = (...r) => {
			eH();
			let i = r5(n), l = tX(t, n, e, r);
			return i(), eG(), l;
		});
		return r ? i.unshift(l) : i.push(l), l;
	}
}
var nV = (e) => (t, n = r1) => {
	r8 && "sp" !== e || nN(e, (...e) => t(...e), n);
}, nF = nV("bm"), n$ = nV("m"), nz = nV("bu"), nW = nV("u"), nB = nV("bum"), nU = nV("um"), nH = nV("sp"), nG = nV("rtg"), nq = nV("rtc");
function nK(e, t = r1) {
	nN("ec", e, t);
}
var nX = Symbol.for("v-ndc"), nY = (e) => e ? r3(e) ? ie(e) : nY(e.parent) : null, nJ = Q(Object.create(null), {
	$: (e) => e,
	$el: (e) => e.vnode.el,
	$data: (e) => e.data,
	$props: (e) => e.props,
	$attrs: (e) => e.attrs,
	$slots: (e) => e.slots,
	$refs: (e) => e.refs,
	$parent: (e) => nY(e.parent),
	$root: (e) => nY(e.root),
	$host: (e) => e.ce,
	$emit: (e) => e.emit,
	$options: (e) => n5(e),
	$forceUpdate: (e) => e.f || (e.f = () => {
		t3(e.update);
	}),
	$nextTick: (e) => e.n || (e.n = t6.bind(e.proxy)),
	$watch: (e) => rC.bind(e)
}), nZ = (e, t) => e !== q && !e.__isScriptSetup && en(e, t), nQ = {
	get({ _: e }, t) {
		let n, r, i;
		if ("__v_skip" === t) return !0;
		let { ctx: l, setupState: o, data: a, props: s, accessCache: u, type: c, appContext: f } = e;
		if ("$" !== t[0]) {
			let r = u[t];
			if (void 0 !== r) switch (r) {
				case 1: return o[t];
				case 2: return a[t];
				case 4: return l[t];
				case 3: return s[t];
			}
			else {
				if (nZ(o, t)) return u[t] = 1, o[t];
				if (a !== q && en(a, t)) return u[t] = 2, a[t];
				if ((n = e.propsOptions[0]) && en(n, t)) return u[t] = 3, s[t];
				if (l !== q && en(l, t)) return u[t] = 4, l[t];
				n1 && (u[t] = 0);
			}
		}
		let d = nJ[t];
		return d ? ("$attrs" === t && e1(e.attrs, "get", ""), d(e)) : (r = c.__cssModules) && (r = r[t]) ? r : l !== q && en(l, t) ? (u[t] = 4, l[t]) : en(i = f.config.globalProperties, t) ? i[t] : void 0;
	},
	set({ _: e }, t, n) {
		let { data: r, setupState: i, ctx: l } = e;
		return nZ(i, t) ? (i[t] = n, !0) : r !== q && en(r, t) ? (r[t] = n, !0) : !en(e.props, t) && !("$" === t[0] && t.slice(1) in e) && (l[t] = n, !0);
	},
	has({ _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: i, propsOptions: l, type: o } }, a) {
		let s, u;
		return !!(n[a] || e !== q && "$" !== a[0] && en(e, a) || nZ(t, a) || (s = l[0]) && en(s, a) || en(r, a) || en(nJ, a) || en(i.config.globalProperties, a) || (u = o.__cssModules) && u[a]);
	},
	defineProperty(e, t, n) {
		return null != n.get ? e._.accessCache[t] = 0 : en(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
	}
};
function n0(e) {
	return er(e) ? e.reduce((e, t) => (e[t] = null, e), {}) : e;
}
var n1 = !0;
function n2(e, t, n) {
	tX(er(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function n5(e) {
	let t, n = e.type, { mixins: r, extends: i } = n, { mixins: l, optionsCache: o, config: { optionMergeStrategies: a } } = e.appContext, s = o.get(n);
	return s ? t = s : l.length || r || i ? (t = {}, l.length && l.forEach((e) => n6(t, e, a, !0)), n6(t, n, a)) : t = n, es(n) && o.set(n, t), t;
}
function n6(e, t, n, r = !1) {
	let { mixins: i, extends: l } = t;
	for (let o in l && n6(e, l, n, !0), i && i.forEach((t) => n6(e, t, n, !0)), t) if (r && "expose" === o);
	else {
		let r = n3[o] || n && n[o];
		e[o] = r ? r(e[o], t[o]) : t[o];
	}
	return e;
}
var n3 = {
	data: n8,
	props: re,
	emits: re,
	methods: n7,
	computed: n7,
	beforeCreate: n9,
	created: n9,
	beforeMount: n9,
	mounted: n9,
	beforeUpdate: n9,
	updated: n9,
	beforeDestroy: n9,
	beforeUnmount: n9,
	destroyed: n9,
	unmounted: n9,
	activated: n9,
	deactivated: n9,
	errorCaptured: n9,
	serverPrefetch: n9,
	components: n7,
	directives: n7,
	watch: function(e, t) {
		if (!e) return t;
		if (!t) return e;
		let n = Q(Object.create(null), e);
		for (let r in t) n[r] = n9(e[r], t[r]);
		return n;
	},
	provide: n8,
	inject: function(e, t) {
		return n7(n4(e), n4(t));
	}
};
function n8(e, t) {
	return t ? e ? function() {
		return Q(el(e) ? e.call(this, this) : e, el(t) ? t.call(this, this) : t);
	} : t : e;
}
function n4(e) {
	if (er(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
		return t;
	}
	return e;
}
function n9(e, t) {
	return e ? [...new Set([].concat(e, t))] : t;
}
function n7(e, t) {
	return e ? Q(Object.create(null), e, t) : t;
}
function re(e, t) {
	return e ? er(e) && er(t) ? [...new Set([...e, ...t])] : Q(Object.create(null), n0(e), n0(null != t ? t : {})) : t;
}
function rt() {
	return {
		app: null,
		config: {
			isNativeTag: Y,
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
var rn = 0, rr = null;
function ri(e, t) {
	if (r1) {
		let n = r1.provides, r = r1.parent && r1.parent.provides;
		r === n && (n = r1.provides = Object.create(r)), n[e] = t;
	}
}
function rl(e, t, n = !1) {
	let r = r2();
	if (r || rr) {
		let i = rr ? rr._context.provides : r ? null == r.parent || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
		if (i && e in i) return i[e];
		if (arguments.length > 1) return n && el(t) ? t.call(r && r.proxy) : t;
	}
}
var ro = {}, ra = () => Object.create(ro), rs = (e) => Object.getPrototypeOf(e) === ro;
function ru(e, t, n, r) {
	let i, [l, o] = e.propsOptions, a = !1;
	if (t) for (let s in t) {
		let u;
		if (ep(s)) continue;
		let c = t[s];
		l && en(l, u = ev(s)) ? o && o.includes(u) ? (i || (i = {}))[u] = c : n[u] = c : rA(e.emitsOptions, s) || s in r && c === r[s] || (r[s] = c, a = !0);
	}
	if (o) {
		let t = tM(n), r = i || q;
		for (let i = 0; i < o.length; i++) {
			let a = o[i];
			n[a] = rc(l, t, a, r[a], e, !en(r, a));
		}
	}
	return a;
}
function rc(e, t, n, r, i, l) {
	let o = e[n];
	if (null != o) {
		let e = en(o, "default");
		if (e && void 0 === r) {
			let e = o.default;
			if (o.type !== Function && !o.skipFactory && el(e)) {
				let { propsDefaults: l } = i;
				if (n in l) r = l[n];
				else {
					let o = r5(i);
					r = l[n] = e.call(null, t), o();
				}
			} else r = e;
			i.ce && i.ce._setProp(n, r);
		}
		o[0] && (l && !e ? r = !1 : o[1] && ("" === r || r === ey(n)) && (r = !0));
	}
	return r;
}
var rf = /* @__PURE__ */ new WeakMap();
function rd(e) {
	return !("$" === e[0] || ep(e));
}
var rp = (e) => "_" === e || "_ctx" === e || "$stable" === e, rh = (e) => er(e) ? e.map(rX) : [rX(e)], rm = (e, t, n) => {
	if (t._n) return t;
	let r = function(e, t = ne, n) {
		if (!t || e._n) return e;
		let r = (...n) => {
			let i;
			r._d && rW(-1);
			let l = nn(t);
			try {
				i = e(...n);
			} finally {
				nn(l), r._d && rW(1);
			}
			return i;
		};
		return r._n = !0, r._c = !0, r._d = !0, r;
	}((...e) => rh(t(...e)), n);
	return r._c = !1, r;
}, rv = (e, t, n) => {
	let r = e._ctx;
	for (let n in e) {
		if (rp(n)) continue;
		let i = e[n];
		if (el(i)) t[n] = rm(n, i, r);
		else if (null != i) {
			let e = rh(i);
			t[n] = () => e;
		}
	}
}, rg = (e, t) => {
	let n = rh(t);
	e.slots.default = () => n;
}, ry = (e, t, n) => {
	for (let r in t) (n || !rp(r)) && (e[r] = t[r]);
}, r_ = function(e, t) {
	if (t && t.pendingBranch) er(e) ? t.effects.push(...e) : t.effects.push(e);
	else er(e) ? tQ.push(...e) : t0 && -1 === e.id ? t0.splice(t1 + 1, 0, e) : 1 & e.flags || (tQ.push(e), e.flags |= 1), t8();
};
function rb({ type: e, props: t }, n) {
	return "svg" === n && "foreignObject" === e || "mathml" === n && "annotation-xml" === e && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function rx({ effect: e, job: t }, n) {
	n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function rw(e, t, n = !1) {
	let r = e.children, i = t.children;
	if (er(r) && er(i)) for (let e = 0; e < r.length; e++) {
		let t = r[e], l = i[e];
		1 & l.shapeFlag && !l.dynamicChildren && ((l.patchFlag <= 0 || 32 === l.patchFlag) && ((l = i[e] = rY(i[e])).el = t.el), n || -2 === l.patchFlag || rw(t, l)), l.type === rN && -1 !== l.patchFlag && (l.el = t.el), l.type !== rV || l.el || (l.el = t.el);
	}
}
function rS(e) {
	if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
var rk = Symbol.for("v-scx");
function rE(e, t, n) {
	return rO(e, t, n);
}
function rO(e, t, n = q) {
	let r, { immediate: i, deep: l, flush: o, once: a } = n, s = Q({}, n), u = t && i || !t && "post" !== o;
	if (r8) {
		if ("sync" === o) {
			let e = rl(rk);
			r = e.__watcherHandles || (e.__watcherHandles = []);
		} else if (!u) {
			let e = () => {};
			return e.stop = X, e.resume = X, e.pause = X, e;
		}
	}
	let c = r1;
	s.call = (e, t, n) => tX(e, c, t, n);
	let f = !1;
	"post" === o ? s.scheduler = (e) => {
		r_(e, c && c.suspense);
	} : "sync" !== o && (f = !0, s.scheduler = (e, t) => {
		t ? e() : t3(e);
	}), s.augmentJob = (e) => {
		t && (e.flags |= 4), f && (e.flags |= 2, c && (e.id = c.uid, e.i = c));
	};
	let d = function(e, t, n = q) {
		let r, i, l, o, { immediate: a, deep: s, once: u, scheduler: c, augmentJob: f, call: d } = n, p = (e) => s ? e : tT(e) || !1 === s || 0 === s ? tq(e, 1) : tq(e), h = !1, m = !1;
		if (tP(e) ? (i = () => e.value, h = tT(e)) : tO(e) ? (i = () => p(e), h = !0) : er(e) ? (m = !0, h = e.some((e) => tO(e) || tT(e)), i = () => e.map((e) => tP(e) ? e.value : tO(e) ? p(e) : el(e) ? d ? d(e, 2) : e() : void 0)) : i = el(e) ? t ? d ? () => d(e, 2) : e : () => {
			if (l) {
				eH();
				try {
					l();
				} finally {
					eG();
				}
			}
			let t = tG;
			tG = r;
			try {
				return d ? d(e, 3, [o]) : e(o);
			} finally {
				tG = t;
			}
		} : X, t && s) {
			let e = i, t = !0 === s ? Infinity : s;
			i = () => tq(e(), t);
		}
		let g = V, y = () => {
			r.stop(), g && g.active && ee(g.effects, r);
		};
		if (u && t) {
			let e = t;
			t = (...t) => {
				e(...t), y();
			};
		}
		let _ = m ? Array(e.length).fill(tU) : tU, b = (e) => {
			if (1 & r.flags && (r.dirty || e)) if (t) {
				let e = r.run();
				if (s || h || (m ? e.some((e, t) => ex(e, _[t])) : ex(e, _))) {
					l && l();
					let n = tG;
					tG = r;
					try {
						let n = [
							e,
							_ === tU ? void 0 : m && _[0] === tU ? [] : _,
							o
						];
						_ = e, d ? d(t, 3, n) : t(...n);
					} finally {
						tG = n;
					}
				}
			} else r.run();
		};
		return f && f(b), (r = new ej(i)).scheduler = c ? () => c(b, !1) : b, o = (e) => (function(e, t = !1, n = tG) {
			if (n) {
				let t = tH.get(n);
				t || tH.set(n, t = []), t.push(e);
			}
		})(e, !1, r), l = r.onStop = () => {
			let e = tH.get(r);
			if (e) {
				if (d) d(e, 4);
				else for (let t of e) t();
				tH.delete(r);
			}
		}, t ? a ? b(!0) : _ = r.run() : c ? c(b.bind(null, !0), !0) : r.run(), y.pause = r.pause.bind(r), y.resume = r.resume.bind(r), y.stop = y, y;
	}(e, t, s);
	return r8 && (r ? r.push(d) : u && d()), d;
}
function rC(e, t, n) {
	let r, i = this.proxy, l = eo(e) ? e.includes(".") ? rT(i, e) : () => i[e] : e.bind(i, i);
	el(t) ? r = t : (r = t.handler, n = t);
	let o = r5(this), a = rO(l, r.bind(i), n);
	return o(), a;
}
function rT(e, t) {
	let n = t.split(".");
	return () => {
		let t = e;
		for (let e = 0; e < n.length && t; e++) t = t[n[e]];
		return t;
	};
}
function rR(e, t, ...n) {
	let r, i;
	if (e.isUnmounted) return;
	let l = e.vnode.props || q, o = n, a = t.startsWith("update:"), s = a && ("modelValue" === (i = t.slice(7)) || "model-value" === i ? l.modelModifiers : l[`${i}Modifiers`] || l[`${ev(i)}Modifiers`] || l[`${ey(i)}Modifiers`]);
	s && (s.trim && (o = n.map((e) => eo(e) ? e.trim() : e)), s.number && (o = n.map(ek)));
	let u = l[r = eb(t)] || l[r = eb(ev(t))];
	!u && a && (u = l[r = eb(ey(t))]), u && tX(u, e, 6, o);
	let c = l[r + "Once"];
	if (c) {
		if (e.emitted) {
			if (e.emitted[r]) return;
		} else e.emitted = {};
		e.emitted[r] = !0, tX(c, e, 6, o);
	}
}
var rM = /* @__PURE__ */ new WeakMap();
function rA(e, t) {
	return !!e && !!J(t) && (en(e, (t = t.slice(2).replace(/Once$/, ""))[0].toLowerCase() + t.slice(1)) || en(e, ey(t)) || en(e, t));
}
function rI(e) {
	let t, n, { type: r, vnode: i, proxy: l, withProxy: o, propsOptions: [a], slots: s, attrs: u, emit: c, render: f, renderCache: d, props: p, data: h, setupState: m, ctx: g, inheritAttrs: y } = e, _ = nn(e);
	try {
		if (4 & i.shapeFlag) {
			let e = o || l;
			t = rX(f.call(e, e, d, p, m, h, g)), n = u;
		} else t = rX(r.length > 1 ? r(p, {
			attrs: u,
			slots: s,
			emit: c
		}) : r(p, null)), n = r.props ? u : rP(u);
	} catch (n) {
		r$.length = 0, tY(n, e, 1), t = rq(rV);
	}
	let b = t;
	if (n && !1 !== y) {
		let e = Object.keys(n), { shapeFlag: t } = b;
		e.length && 7 & t && (a && e.some(Z) && (n = rj(n, a)), b = rK(b, n, !1, !0));
	}
	return i.dirs && ((b = rK(b, null, !1, !0)).dirs = b.dirs ? b.dirs.concat(i.dirs) : i.dirs), i.transition && nO(b, i.transition), t = b, nn(_), t;
}
var rP = (e) => {
	let t;
	for (let n in e) ("class" === n || "style" === n || J(n)) && ((t || (t = {}))[n] = e[n]);
	return t;
}, rj = (e, t) => {
	let n = {};
	for (let r in e) Z(r) && r.slice(9) in t || (n[r] = e[r]);
	return n;
};
function rD(e, t, n) {
	let r = Object.keys(t);
	if (r.length !== Object.keys(e).length) return !0;
	for (let i = 0; i < r.length; i++) {
		let l = r[i];
		if (t[l] !== e[l] && !rA(n, l)) return !0;
	}
	return !1;
}
var rL = Symbol.for("v-fgt"), rN = Symbol.for("v-txt"), rV = Symbol.for("v-cmt"), rF = Symbol.for("v-stc"), r$ = [], rz = 1;
function rW(e, t = !1) {
	rz += e;
}
function rB(e) {
	return !!e && !0 === e.__v_isVNode;
}
function rU(e, t) {
	return e.type === t.type && e.key === t.key;
}
var rH = ({ key: e }) => null != e ? e : null, rG = ({ ref: e, ref_key: t, ref_for: n }) => ("number" == typeof e && (e = "" + e), null != e ? eo(e) || tP(e) || el(e) ? {
	i: ne,
	r: e,
	k: t,
	f: !!n
} : e : null), rq = function(e, t = null, n = null, r = 0, i = null, l = !1) {
	var o, a;
	if (e && e !== nX || (e = rV), rB(e)) {
		let r = rK(e, t, !0);
		return n && rJ(r, n), r.patchFlag = -2, r;
	}
	if (el(o = e) && "__vccOpts" in o && (e = e.__vccOpts), t) {
		let { class: e, style: n } = t = (a = t) ? tR(a) || rs(a) ? Q({}, a) : a : null;
		e && !eo(e) && (t.class = eM(e)), es(n) && (tR(n) && !er(n) && (n = Q({}, n)), t.style = eO(n));
	}
	let s = eo(e) ? 1 : e.__isSuspense ? 128 : e.__isTeleport ? 64 : es(e) ? 4 : 2 * !!el(e);
	return function(e, t = null, n = null, r = 0, i = null, l = +(e !== rL), o = !1, a = !1) {
		let s = {
			__v_isVNode: !0,
			__v_skip: !0,
			type: e,
			props: t,
			key: t && rH(t),
			ref: t && rG(t),
			scopeId: nt,
			slotScopeIds: null,
			children: n,
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
			dynamicProps: i,
			dynamicChildren: null,
			appContext: null,
			ctx: ne
		};
		return a ? (rJ(s, n), 128 & l && e.normalize(s)) : n && (s.shapeFlag |= eo(n) ? 8 : 16), s;
	}(e, t, n, r, i, s, l, !0);
};
function rK(e, t, n = !1, r = !1) {
	let { props: i, ref: l, patchFlag: o, children: a, transition: s } = e, u = t ? function(...e) {
		let t = {};
		for (let n = 0; n < e.length; n++) {
			let r = e[n];
			for (let e in r) if ("class" === e) t.class !== r.class && (t.class = eM([t.class, r.class]));
			else if ("style" === e) t.style = eO([t.style, r.style]);
			else if (J(e)) {
				let n = t[e], i = r[e];
				i && n !== i && !(er(n) && n.includes(i)) && (t[e] = n ? [].concat(n, i) : i);
			} else "" !== e && (t[e] = r[e]);
		}
		return t;
	}(i || {}, t) : i, c = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: u,
		key: u && rH(u),
		ref: t && t.ref ? n && l ? er(l) ? l.concat(rG(t)) : [l, rG(t)] : rG(t) : l,
		scopeId: e.scopeId,
		slotScopeIds: e.slotScopeIds,
		children: a,
		target: e.target,
		targetStart: e.targetStart,
		targetAnchor: e.targetAnchor,
		staticCount: e.staticCount,
		shapeFlag: e.shapeFlag,
		patchFlag: t && e.type !== rL ? -1 === o ? 16 : 16 | o : o,
		dynamicProps: e.dynamicProps,
		dynamicChildren: e.dynamicChildren,
		appContext: e.appContext,
		dirs: e.dirs,
		transition: s,
		component: e.component,
		suspense: e.suspense,
		ssContent: e.ssContent && rK(e.ssContent),
		ssFallback: e.ssFallback && rK(e.ssFallback),
		placeholder: e.placeholder,
		el: e.el,
		anchor: e.anchor,
		ctx: e.ctx,
		ce: e.ce
	};
	return s && r && nO(c, s.clone(c)), c;
}
function rX(e) {
	return null == e || "boolean" == typeof e ? rq(rV) : er(e) ? rq(rL, null, e.slice()) : rB(e) ? rY(e) : rq(rN, null, String(e));
}
function rY(e) {
	return null === e.el && -1 !== e.patchFlag || e.memo ? e : rK(e);
}
function rJ(e, t) {
	let n = 0, { shapeFlag: r } = e;
	if (null == t) t = null;
	else if (er(t)) n = 16;
	else if ("object" == typeof t) if (65 & r) {
		let n = t.default;
		n && (n._c && (n._d = !1), rJ(e, n()), n._c && (n._d = !0));
		return;
	} else {
		n = 32;
		let r = t._;
		r || rs(t) ? 3 === r && ne && (1 === ne.slots._ ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024)) : t._ctx = ne;
	}
	else el(t) ? (t = {
		default: t,
		_ctx: ne
	}, n = 32) : (t = String(t), 64 & r ? (n = 16, t = [function(e = " ", t = 0) {
		return rq(rN, null, e, t);
	}(t)]) : n = 8);
	e.children = t, e.shapeFlag |= n;
}
function rZ(e, t, n, r = null) {
	tX(e, t, 7, [n, r]);
}
var rQ = rt(), r0 = 0, r1 = null, r2 = () => r1 || ne;
{
	let e = eE(), t = (t, n) => {
		let r;
		return (r = e[t]) || (r = e[t] = []), r.push(n), (e) => {
			r.length > 1 ? r.forEach((t) => t(e)) : r[0](e);
		};
	};
	W = t("__VUE_INSTANCE_SETTERS__", (e) => r1 = e), B = t("__VUE_SSR_SETTERS__", (e) => r8 = e);
}
var r5 = (e) => {
	let t = r1;
	return W(e), e.scope.on(), () => {
		e.scope.off(), W(t);
	};
}, r6 = () => {
	r1 && r1.scope.off(), W(null);
};
function r3(e) {
	return 4 & e.vnode.shapeFlag;
}
var r8 = !1;
function r4(e, t, n) {
	el(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : es(t) && (e.setupState = t$(t)), r9(e, n);
}
function r9(e, t, n) {
	let r = e.type;
	if (!e.render) {
		if (!t && U && !r.render) {
			let t = r.template || n5(e).template;
			if (t) {
				let { isCustomElement: n, compilerOptions: i } = e.appContext.config, { delimiters: l, compilerOptions: o } = r;
				r.render = U(t, Q(Q({
					isCustomElement: n,
					delimiters: l
				}, i), o));
			}
		}
		e.render = r.render || X, H && H(e);
	}
	{
		let t = r5(e);
		eH();
		try {
			(function(e) {
				let t = n5(e), n = e.proxy, r = e.ctx;
				n1 = !1, t.beforeCreate && n2(t.beforeCreate, e, "bc");
				let { data: i, computed: l, methods: o, watch: a, provide: s, inject: u, created: c, beforeMount: f, mounted: d, beforeUpdate: p, updated: h, activated: m, deactivated: g, beforeDestroy: y, beforeUnmount: _, destroyed: b, unmounted: x, render: w, renderTracked: S, renderTriggered: k, errorCaptured: E, serverPrefetch: O, expose: C, inheritAttrs: T, components: R, directives: M, filters: A } = t;
				if (u && function(e, t, n = X) {
					for (let n in er(e) && (e = n4(e)), e) {
						let r, i = e[n];
						tP(r = es(i) ? "default" in i ? rl(i.from || n, i.default, !0) : rl(i.from || n) : rl(i)) ? Object.defineProperty(t, n, {
							enumerable: !0,
							configurable: !0,
							get: () => r.value,
							set: (e) => r.value = e
						}) : t[n] = r;
					}
				}(u, r, null), o) for (let e in o) {
					let t = o[e];
					el(t) && (r[e] = t.bind(n));
				}
				if (i) {
					let t = i.call(n, n);
					es(t) && (e.data = tw(t));
				}
				if (n1 = !0, l) for (let e in l) {
					let t = l[e], i = it({
						get: el(t) ? t.bind(n, n) : el(t.get) ? t.get.bind(n, n) : X,
						set: !el(t) && el(t.set) ? t.set.bind(n) : X
					});
					Object.defineProperty(r, e, {
						enumerable: !0,
						configurable: !0,
						get: () => i.value,
						set: (e) => i.value = e
					});
				}
				if (a) for (let e in a) (function e(t, n, r, i) {
					let l = i.includes(".") ? rT(r, i) : () => r[i];
					if (eo(t)) {
						let e = n[t];
						el(e) && rE(l, e);
					} else if (el(t)) rE(l, t.bind(r));
					else if (es(t)) if (er(t)) t.forEach((t) => e(t, n, r, i));
					else {
						let e = el(t.handler) ? t.handler.bind(r) : n[t.handler];
						el(e) && rE(l, e, t);
					}
				})(a[e], r, n, e);
				if (s) {
					let e = el(s) ? s.call(n) : s;
					Reflect.ownKeys(e).forEach((t) => {
						ri(t, e[t]);
					});
				}
				function I(e, t) {
					er(t) ? t.forEach((t) => e(t.bind(n))) : t && e(t.bind(n));
				}
				if (c && n2(c, e, "c"), I(nF, f), I(n$, d), I(nz, p), I(nW, h), I(nj, m), I(nD, g), I(nK, E), I(nq, S), I(nG, k), I(nB, _), I(nU, x), I(nH, O), er(C)) if (C.length) {
					let t = e.exposed || (e.exposed = {});
					C.forEach((e) => {
						Object.defineProperty(t, e, {
							get: () => n[e],
							set: (t) => n[e] = t,
							enumerable: !0
						});
					});
				} else e.exposed || (e.exposed = {});
				w && e.render === X && (e.render = w), null != T && (e.inheritAttrs = T), R && (e.components = R), M && (e.directives = M), O && nT(e);
			})(e);
		} finally {
			eG(), t();
		}
	}
}
var r7 = { get: (e, t) => (e1(e, "get", ""), e[t]) };
function ie(e) {
	var t;
	return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(t$((!en(t = e.exposed, "__v_skip") && Object.isExtensible(t) && eS(t, "__v_skip", !0), t)), {
		get: (t, n) => n in t ? t[n] : n in nJ ? nJ[n](e) : void 0,
		has: (e, t) => t in e || t in nJ
	})) : e.proxy;
}
var it = (e, t) => (function(e, t, n = !1) {
	let r, i;
	return el(e) ? r = e : (r = e.get, i = e.set), new tB(r, i, n);
})(e, 0, r8);
function ir(e, t, n) {
	try {
		rW(-1);
		let r = arguments.length;
		if (2 !== r) return r > 3 ? n = Array.prototype.slice.call(arguments, 2) : 3 === r && rB(n) && (n = [n]), rq(e, t, n);
		if (!es(t) || er(t)) return rq(e, null, t);
		if (rB(t)) return rq(e, null, [t]);
		return rq(e, t);
	} finally {
		rW(1);
	}
}
var ii = void 0, il = "undefined" != typeof window && window.trustedTypes;
if (il) try {
	ii = il.createPolicy("vue", { createHTML: (e) => e });
} catch (e) {}
var io = ii ? (e) => ii.createHTML(e) : (e) => e, ia = "undefined" != typeof document ? document : null, is = ia && ia.createElement("template"), iu = "transition", ic = "animation", id = Symbol("_vtc"), ip = {
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
}, ih = Q({}, ny, ip), im = ((L = (e, { slots: t }) => ir(nx, function(e) {
	let t = {};
	for (let n in e) n in ip || (t[n] = e[n]);
	if (!1 === e.css) return t;
	let { name: n = "v", type: r, duration: i, enterFromClass: l = `${n}-enter-from`, enterActiveClass: o = `${n}-enter-active`, enterToClass: a = `${n}-enter-to`, appearFromClass: s = l, appearActiveClass: u = o, appearToClass: c = a, leaveFromClass: f = `${n}-leave-from`, leaveActiveClass: d = `${n}-leave-active`, leaveToClass: p = `${n}-leave-to` } = e, h = function(e) {
		if (null == e) return null;
		{
			if (es(e)) return [iy(e.enter), iy(e.leave)];
			let t = iy(e);
			return [t, t];
		}
	}(i), m = h && h[0], g = h && h[1], { onBeforeEnter: y, onEnter: _, onEnterCancelled: b, onLeave: x, onLeaveCancelled: w, onBeforeAppear: S = y, onAppear: k = _, onAppearCancelled: E = b } = t, O = (e, t, n, r) => {
		e._enterCancelled = r, ib(e, t ? c : a), ib(e, t ? u : o), n && n();
	}, C = (e, t) => {
		e._isLeaving = !1, ib(e, f), ib(e, p), ib(e, d), t && t();
	}, T = (e) => (t, n) => {
		let i = e ? k : _, o = () => O(t, e, n);
		iv(i, [t, o]), ix(() => {
			ib(t, e ? s : l), i_(t, e ? c : a), ig(i) || iS(t, r, m, o);
		});
	};
	return Q(t, {
		onBeforeEnter(e) {
			iv(y, [e]), i_(e, l), i_(e, o);
		},
		onBeforeAppear(e) {
			iv(S, [e]), i_(e, s), i_(e, u);
		},
		onEnter: T(!1),
		onAppear: T(!0),
		onLeave(e, t) {
			e._isLeaving = !0;
			let n = () => C(e, t);
			i_(e, f), e._enterCancelled ? (i_(e, d), iO(e)) : (iO(e), i_(e, d)), ix(() => {
				e._isLeaving && (ib(e, f), i_(e, p), ig(x) || iS(e, r, g, n));
			}), iv(x, [e, n]);
		},
		onEnterCancelled(e) {
			O(e, !1, void 0, !0), iv(b, [e]);
		},
		onAppearCancelled(e) {
			O(e, !0, void 0, !0), iv(E, [e]);
		},
		onLeaveCancelled(e) {
			C(e), iv(w, [e]);
		}
	});
}(e), t)).displayName = "Transition", L.props = ih, L), iv = (e, t = []) => {
	er(e) ? e.forEach((e) => e(...t)) : e && e(...t);
}, ig = (e) => !!e && (er(e) ? e.some((e) => e.length > 1) : e.length > 1);
function iy(e) {
	let t = eo(e) ? Number(e) : NaN;
	return isNaN(t) ? e : t;
}
function i_(e, t) {
	t.split(/\s+/).forEach((t) => t && e.classList.add(t)), (e[id] || (e[id] = /* @__PURE__ */ new Set())).add(t);
}
function ib(e, t) {
	t.split(/\s+/).forEach((t) => t && e.classList.remove(t));
	let n = e[id];
	n && (n.delete(t), n.size || (e[id] = void 0));
}
function ix(e) {
	requestAnimationFrame(() => {
		requestAnimationFrame(e);
	});
}
var iw = 0;
function iS(e, t, n, r) {
	let i = e._endId = ++iw, l = () => {
		i === e._endId && r();
	};
	if (null != n) return setTimeout(l, n);
	let { type: o, timeout: a, propCount: s } = function(e, t) {
		let n = window.getComputedStyle(e), r = (e) => (n[e] || "").split(", "), i = r(`${iu}Delay`), l = r(`${iu}Duration`), o = ik(i, l), a = r(`${ic}Delay`), s = r(`${ic}Duration`), u = ik(a, s), c = null, f = 0, d = 0;
		t === iu ? o > 0 && (c = iu, f = o, d = l.length) : t === ic ? u > 0 && (c = ic, f = u, d = s.length) : d = (c = (f = Math.max(o, u)) > 0 ? o > u ? iu : ic : null) ? c === iu ? l.length : s.length : 0;
		let p = c === iu && /\b(?:transform|all)(?:,|$)/.test(r(`${iu}Property`).toString());
		return {
			type: c,
			timeout: f,
			propCount: d,
			hasTransform: p
		};
	}(e, t);
	if (!o) return r();
	let u = o + "end", c = 0, f = () => {
		e.removeEventListener(u, d), l();
	}, d = (t) => {
		t.target === e && ++c >= s && f();
	};
	setTimeout(() => {
		c < s && f();
	}, a + 1), e.addEventListener(u, d);
}
function ik(e, t) {
	for (; e.length < t.length;) e = e.concat(e);
	return Math.max(...t.map((t, n) => iE(t) + iE(e[n])));
}
function iE(e) {
	return "auto" === e ? 0 : 1e3 * Number(e.slice(0, -1).replace(",", "."));
}
function iO(e) {
	return (e ? e.ownerDocument : document).body.offsetHeight;
}
var iC = Symbol("_vod"), iT = Symbol("_vsh"), iR = Symbol(""), iM = /(?:^|;)\s*display\s*:/, iA = /\s*!important$/;
function iI(e, t, n) {
	if (er(n)) n.forEach((n) => iI(e, t, n));
	else if (n ??= "", t.startsWith("--")) e.setProperty(t, n);
	else {
		let r = function(e, t) {
			let n = ij[t];
			if (n) return n;
			let r = ev(t);
			if ("filter" !== r && r in e) return ij[t] = r;
			r = e_(r);
			for (let n = 0; n < iP.length; n++) {
				let i = iP[n] + r;
				if (i in e) return ij[t] = i;
			}
			return t;
		}(e, t);
		iA.test(n) ? e.setProperty(ey(r), n.replace(iA, ""), "important") : e[r] = n;
	}
}
var iP = [
	"Webkit",
	"Moz",
	"ms"
], ij = {}, iD = "http://www.w3.org/1999/xlink";
function iL(e, t, n, r, i, l = eA(t)) {
	if (r && t.startsWith("xlink:")) null == n ? e.removeAttributeNS(iD, t.slice(6, t.length)) : e.setAttributeNS(iD, t, n);
	else null == n || l && !(n || "" === n) ? e.removeAttribute(t) : e.setAttribute(t, l ? "" : ea(n) ? String(n) : n);
}
function iN(e, t, n, r, i) {
	if ("innerHTML" === t || "textContent" === t) {
		null != n && (e[t] = "innerHTML" === t ? io(n) : n);
		return;
	}
	let l = e.tagName;
	if ("value" === t && "PROGRESS" !== l && !l.includes("-")) {
		let r = "OPTION" === l ? e.getAttribute("value") || "" : e.value, i = null == n ? "checkbox" === e.type ? "on" : "" : String(n);
		r === i && "_value" in e || (e.value = i), n ?? e.removeAttribute(t), e._value = n;
		return;
	}
	let o = !1;
	if ("" === n || null == n) {
		let r = typeof e[t];
		if ("boolean" === r) {
			var a;
			n = !!(a = n) || "" === a;
		} else null == n && "string" === r ? (n = "", o = !0) : "number" === r && (n = 0, o = !0);
	}
	try {
		e[t] = n;
	} catch (e) {}
	o && e.removeAttribute(i || t);
}
var iV = Symbol("_vei"), iF = /(?:Once|Passive|Capture)$/, i$ = 0, iz = Promise.resolve(), iW = (e) => 111 === e.charCodeAt(0) && 110 === e.charCodeAt(1) && e.charCodeAt(2) > 96 && 123 > e.charCodeAt(2), iB = Q({ patchProp: (e, t, n, r, i, l) => {
	let o = "svg" === i;
	if ("class" === t) {
		var a = r;
		let t = e[id];
		t && (a = (a ? [a, ...t] : [...t]).join(" ")), null == a ? e.removeAttribute("class") : o ? e.setAttribute("class", a) : e.className = a;
	} else "style" === t ? function(e, t, n) {
		let r = e.style, i = eo(n), l = !1;
		if (n && !i) {
			if (t) if (eo(t)) for (let e of t.split(";")) {
				let t = e.slice(0, e.indexOf(":")).trim();
				n[t] ?? iI(r, t, "");
			}
			else for (let e in t) n[e] ?? iI(r, e, "");
			for (let e in n) "display" === e && (l = !0), iI(r, e, n[e]);
		} else if (i) {
			if (t !== n) {
				let e = r[iR];
				e && (n += ";" + e), r.cssText = n, l = iM.test(n);
			}
		} else t && e.removeAttribute("style");
		iC in e && (e[iC] = l ? r.display : "", e[iT] && (r.display = "none"));
	}(e, n, r) : J(t) ? Z(t) || function(e, t, n, r, i = null) {
		let l = e[iV] || (e[iV] = {}), o = l[t];
		if (r && o) o.value = r;
		else {
			var a;
			let [n, s] = function(e) {
				let t;
				if (iF.test(e)) {
					let n;
					for (t = {}; n = e.match(iF);) e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
				}
				return [":" === e[2] ? e.slice(3) : ey(e.slice(2)), t];
			}(t);
			r ? (a = l[t] = function(e, t) {
				let n = (e) => {
					if (e._vts) {
						if (e._vts <= n.attached) return;
					} else e._vts = Date.now();
					tX(function(e, t) {
						if (!er(t)) return t;
						{
							let n = e.stopImmediatePropagation;
							return e.stopImmediatePropagation = () => {
								n.call(e), e._stopped = !0;
							}, t.map((e) => (t) => !t._stopped && e && e(t));
						}
					}(e, n.value), t, 5, [e]);
				};
				return n.value = e, n.attached = i$ || (iz.then(() => i$ = 0), i$ = Date.now()), n;
			}(r, i), e.addEventListener(n, a, s)) : o && (e.removeEventListener(n, o, s), l[t] = void 0);
		}
	}(e, t, 0, r, l) : ("." === t[0] ? (t = t.slice(1), 0) : "^" === t[0] ? (t = t.slice(1), 1) : !function(e, t, n, r) {
		if (r) return !!("innerHTML" === t || "textContent" === t || t in e && iW(t) && el(n));
		if ("spellcheck" === t || "draggable" === t || "translate" === t || "autocorrect" === t || "form" === t || "list" === t && "INPUT" === e.tagName || "type" === t && "TEXTAREA" === e.tagName) return !1;
		if ("width" === t || "height" === t) {
			let t = e.tagName;
			if ("IMG" === t || "VIDEO" === t || "CANVAS" === t || "SOURCE" === t) return !1;
		}
		return !(iW(t) && eo(n)) && t in e;
	}(e, t, r, o)) ? e._isVueCE && (/[A-Z]/.test(t) || !eo(r)) ? iN(e, ev(t), r, l, t) : ("true-value" === t ? e._trueValue = r : "false-value" === t && (e._falseValue = r), iL(e, t, r, o)) : (iN(e, t, r), e.tagName.includes("-") || "value" !== t && "checked" !== t && "selected" !== t || iL(e, t, r, o, l, "value" !== t));
} }, {
	insert: (e, t, n) => {
		t.insertBefore(e, n || null);
	},
	remove: (e) => {
		let t = e.parentNode;
		t && t.removeChild(e);
	},
	createElement: (e, t, n, r) => {
		let i = "svg" === t ? ia.createElementNS("http://www.w3.org/2000/svg", e) : "mathml" === t ? ia.createElementNS("http://www.w3.org/1998/Math/MathML", e) : n ? ia.createElement(e, { is: n }) : ia.createElement(e);
		return "select" === e && r && null != r.multiple && i.setAttribute("multiple", r.multiple), i;
	},
	createText: (e) => ia.createTextNode(e),
	createComment: (e) => ia.createComment(e),
	setText: (e, t) => {
		e.nodeValue = t;
	},
	setElementText: (e, t) => {
		e.textContent = t;
	},
	parentNode: (e) => e.parentNode,
	nextSibling: (e) => e.nextSibling,
	querySelector: (e) => ia.querySelector(e),
	setScopeId(e, t) {
		e.setAttribute(t, "");
	},
	insertStaticContent(e, t, n, r, i, l) {
		let o = n ? n.previousSibling : t.lastChild;
		if (i && (i === l || i.nextSibling)) for (; t.insertBefore(i.cloneNode(!0), n), i !== l && (i = i.nextSibling););
		else {
			is.innerHTML = io("svg" === r ? `<svg>${e}</svg>` : "mathml" === r ? `<math>${e}</math>` : e);
			let i = is.content;
			if ("svg" === r || "mathml" === r) {
				let e = i.firstChild;
				for (; e.firstChild;) i.appendChild(e.firstChild);
				i.removeChild(e);
			}
			t.insertBefore(i, n);
		}
		return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
	}
}), iU = e((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t, n = "function" == typeof Symbol, r = n && void 0 !== Symbol.toPrimitive ? Symbol.toPrimitive : w("Symbol.toPrimitive not found."), i = n && void 0 !== Symbol.iterator ? Symbol.iterator : w("Symbol.iterator not found."), l = Object.getPrototypeOf(Function), o = "function" == typeof Map && "function" == typeof Map.prototype.entries ? Map : w("A valid Map constructor could not be found."), a = "function" == typeof Set && "function" == typeof Set.prototype.entries ? Set : w("A valid Set constructor could not be found."), s = "function" == typeof WeakMap ? WeakMap : w("A valid WeakMap constructor could not be found."), u = n ? Symbol.for("@reflect-metadata:registry") : void 0, c = (!d(u) && p(Reflect) && Object.isExtensible(Reflect) && (t = Reflect[u]), d(t) && (t = function() {
		d(u) || "undefined" == typeof Reflect || u in Reflect || "function" != typeof Reflect.defineMetadata || (t = (e = Reflect).defineMetadata, n = e.hasOwnMetadata, r = e.getOwnMetadata, i = e.getOwnMetadataKeys, l = e.deleteMetadata, c = new s(), f = {
			isProviderFor: function(e, t) {
				var n = c.get(e);
				return !!(!d(n) && n.has(t)) || !!i(e, t).length && (d(n) && (n = new a(), c.set(e, n)), n.add(t), !0);
			},
			OrdinaryDefineOwnMetadata: t,
			OrdinaryHasOwnMetadata: n,
			OrdinaryGetOwnMetadata: r,
			OrdinaryOwnMetadataKeys: i,
			OrdinaryDeleteMetadata: l
		});
		var e, t, n, r, i, l, c, f, p, h, m, g = new s(), x = {
			registerProvider: function(e) {
				if (!Object.isExtensible(x)) throw Error("Cannot add provider to a frozen registry.");
				switch (!0) {
					case f === e: break;
					case d(p):
						p = e;
						break;
					case p === e: break;
					case d(h):
						h = e;
						break;
					case h === e: break;
					default: void 0 === m && (m = new a()), m.add(e);
				}
			},
			getProvider: w,
			setProvider: function(e, t, n) {
				if (!function(e) {
					if (d(e)) throw TypeError();
					return f === e || p === e || h === e || !d(m) && m.has(e);
				}(n)) throw Error("Metadata provider not registered.");
				var r = w(e, t);
				if (r !== n) {
					if (!d(r)) return !1;
					var i = g.get(e);
					d(i) && (i = new o(), g.set(e, i)), i.set(t, n);
				}
				return !0;
			}
		};
		return x;
		function w(e, t) {
			var n, r = g.get(e);
			return d(r) || (n = r.get(t)), d(n) && (n = function(e, t) {
				if (!d(p)) {
					if (p.isProviderFor(e, t)) return p;
					if (!d(h)) {
						if (h.isProviderFor(e, t)) return p;
						if (!d(m)) for (var n = y(m);;) {
							var r = _(n);
							if (!r) return;
							var i = r.value;
							if (i.isProviderFor(e, t)) return b(n), i;
						}
					}
				}
				if (!d(f) && f.isProviderFor(e, t)) return f;
			}(e, t), d(n) || (d(r) && (r = new o(), g.set(e, r)), r.set(t, n))), n;
		}
	}()), !d(u) && p(Reflect) && Object.isExtensible(Reflect) && Object.defineProperty(Reflect, u, {
		enumerable: !1,
		configurable: !1,
		writable: !1,
		value: t
	}), t), f = function(e) {
		var t = new s(), n = {
			isProviderFor: function(e, n) {
				var r = t.get(e);
				return !d(r) && r.has(n);
			},
			OrdinaryDefineOwnMetadata: function(e, t, n, i) {
				r(n, i, !0).set(e, t);
			},
			OrdinaryHasOwnMetadata: function(e, t, n) {
				var i = r(t, n, !1);
				return !d(i) && !!i.has(e);
			},
			OrdinaryGetOwnMetadata: function(e, t, n) {
				var i = r(t, n, !1);
				if (!d(i)) return i.get(e);
			},
			OrdinaryOwnMetadataKeys: function(e, t) {
				var n = [], i = r(e, t, !1);
				if (d(i)) return n;
				for (var l = y(i.keys()), o = 0;;) {
					var a = _(l);
					if (!a) return n.length = o, n;
					var s = a.value;
					try {
						n[o] = s;
					} catch (e) {
						try {
							b(l);
						} finally {
							throw e;
						}
					}
					o++;
				}
			},
			OrdinaryDeleteMetadata: function(e, n, i) {
				var l = r(n, i, !1);
				if (d(l) || !l.delete(e)) return !1;
				if (0 === l.size) {
					var o = t.get(n);
					d(o) || (o.delete(i), 0 === o.size && t.delete(o));
				}
				return !0;
			}
		};
		return c.registerProvider(n), n;
		function r(r, i, l) {
			var a = t.get(r), s = !1;
			if (d(a)) {
				if (!l) return;
				a = new o(), t.set(r, a), s = !0;
			}
			var u = a.get(i);
			if (d(u)) {
				if (!l) return;
				if (u = new o(), a.set(i, u), !e.setProvider(r, i, n)) throw a.delete(i), s && t.delete(r), Error("Wrong provider for target.");
			}
			return u;
		}
	}(c);
	function d(e) {
		return void 0 === e;
	}
	function p(e) {
		return "object" == typeof e ? null !== e : "function" == typeof e;
	}
	e.defineMetadata = function(e, t, n, r) {
		var i, l, o, a;
		if (!p(n)) throw TypeError();
		d(r) || (r = h(r)), i = e, l = t, S(o = n, a = r, !0).OrdinaryDefineOwnMetadata(i, l, o, a);
	}, e.getMetadata = function(e, t, n) {
		if (!p(t)) throw TypeError();
		return d(n) || (n = h(n)), function e(t, n, r) {
			if (!d(s = S(n, r, !1)) && function(e) {
				return !!e;
			}(s.OrdinaryHasOwnMetadata(t, n, r))) {
				var i = t, l = n, o = r, a = S(l, o, !1);
				return d(a) ? void 0 : a.OrdinaryGetOwnMetadata(i, l, o);
			}
			var s, u = x(n);
			if (null !== u) return e(t, u, r);
		}(e, t, n);
	}, e.getMetadataKeys = function(e, t) {
		if (!p(e)) throw TypeError();
		return d(t) || (t = h(t)), function e(t, n) {
			var r, i, l, o = (l = S(r = t, i = n, !1)) ? l.OrdinaryOwnMetadataKeys(r, i) : [], s = x(t);
			if (null === s) return o;
			var u = e(s, n);
			if (u.length <= 0) return o;
			if (o.length <= 0) return u;
			for (var c = new a(), f = [], d = 0; d < o.length; d++) {
				var p = o[d], h = c.has(p);
				h || (c.add(p), f.push(p));
			}
			for (var m = 0; m < u.length; m++) {
				var p = u[m], h = c.has(p);
				h || (c.add(p), f.push(p));
			}
			return f;
		}(e, t);
	};
	function h(e) {
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
			var n = "string", i = g(e, r);
			if (void 0 !== i) {
				var l = i.call(e, n);
				if (p(l)) throw TypeError();
				return l;
			}
			return function(e, t) {
				if ("string" === t) {
					var n = e.toString;
					if (m(n)) {
						var r = n.call(e);
						if (!p(r)) return r;
					}
					var i = e.valueOf;
					if (m(i)) {
						var r = i.call(e);
						if (!p(r)) return r;
					}
				} else {
					var i = e.valueOf;
					if (m(i)) {
						var r = i.call(e);
						if (!p(r)) return r;
					}
					var l = e.toString;
					if (m(l)) {
						var r = l.call(e);
						if (!p(r)) return r;
					}
				}
				throw TypeError();
			}(e, n);
		}(e, 0);
		return "symbol" == typeof t ? t : "" + t;
	}
	function m(e) {
		return "function" == typeof e;
	}
	function g(e, t) {
		var n = e[t];
		if (null != n) {
			if (!m(n)) throw TypeError();
			return n;
		}
	}
	function y(e) {
		var t = g(e, i);
		if (!m(t)) throw TypeError();
		var n = t.call(e);
		if (!p(n)) throw TypeError();
		return n;
	}
	function _(e) {
		var t = e.next();
		return !t.done && t;
	}
	function b(e) {
		var t = e.return;
		t && t.call(e);
	}
	function x(e) {
		var t = Object.getPrototypeOf(e);
		if ("function" != typeof e || e === l || t !== l) return t;
		var n = e.prototype, r = n && Object.getPrototypeOf(n);
		if (null == r || r === Object.prototype) return t;
		var i = r.constructor;
		return "function" != typeof i || i === e ? t : i;
	}
	function w(e) {
		throw e;
	}
	function S(e, t, n) {
		var r = c.getProvider(e, t);
		if (!d(r)) return r;
		if (n) {
			if (c.setProvider(e, t, f)) return f;
			throw Error("Illegal state.");
		}
	}
}), iH = (e) => "function" == typeof e ? e : Array.isArray(e) ? () => e : void 0 === e ? e : () => e, iG = (e, t, n) => iq(e, t, n), iq = (e, t, n) => {
	let r, [i, l] = ((e, t) => {
		let { children: n,...r } = e;
		if (n && !Array.isArray(n) && !rB(n) && "object" == typeof n) return [t ? {
			...r,
			key: t
		} : r, n];
		let i = {}, l = {}, o = !1;
		for (let e in r) {
			let t = r[e];
			if (e.startsWith("$")) {
				l[e.slice(1)] = iH(t), o = !0;
				continue;
			}
			i[e] = t;
		}
		let a = iH(n);
		return a && (l.default = a, o = !0), [t ? {
			...i,
			key: t
		} : i, o ? l : void 0];
	})(t, n);
	return (r = e) === rL || "string" == typeof r || "object" == typeof r && r.__isTeleport ? ir(e, i, l?.default?.() ?? (e === rL ? [] : void 0)) : ir(e, i, l);
}, iK = function() {}, iX = function() {}, iY = (e, t) => (n) => Math.max(Math.min(n, t), e), iJ = (e) => e % 1 ? Number(e.toFixed(5)) : e, iZ = /(-)?([\d]*\.?[\d])+/g, iQ = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi, i0 = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function i1(e) {
	return "string" == typeof e;
}
var i2 = {
	test: (e) => "number" == typeof e,
	parse: parseFloat,
	transform: (e) => e
}, i5 = Object.assign(Object.assign({}, i2), { transform: iY(0, 1) }), i6 = {
	test: (e) => i1(e) && e.endsWith("%") && 1 === e.split(" ").length,
	parse: parseFloat,
	transform: (e) => `${e}%`
}, i3 = (e, t) => (n) => !!(i1(n) && i0.test(n) && n.startsWith(e) || t && Object.prototype.hasOwnProperty.call(n, t)), i8 = (e, t, n) => (r) => {
	if (!i1(r)) return r;
	let [i, l, o, a] = r.match(iZ);
	return {
		[e]: parseFloat(i),
		[t]: parseFloat(l),
		[n]: parseFloat(o),
		alpha: void 0 !== a ? parseFloat(a) : 1
	};
}, i4 = {
	test: i3("hsl", "hue"),
	parse: i8("hue", "saturation", "lightness"),
	transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + i6.transform(iJ(t)) + ", " + i6.transform(iJ(n)) + ", " + iJ(i5.transform(r)) + ")"
}, i9 = iY(0, 255), i7 = Object.assign(Object.assign({}, i2), { transform: (e) => Math.round(i9(e)) }), le = {
	test: i3("rgb", "red"),
	parse: i8("red", "green", "blue"),
	transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + i7.transform(e) + ", " + i7.transform(t) + ", " + i7.transform(n) + ", " + iJ(i5.transform(r)) + ")"
}, lt = {
	test: i3("#"),
	parse: function(e) {
		let t = "", n = "", r = "", i = "";
		return e.length > 5 ? (t = e.substr(1, 2), n = e.substr(3, 2), r = e.substr(5, 2), i = e.substr(7, 2)) : (t = e.substr(1, 1), n = e.substr(2, 1), r = e.substr(3, 1), i = e.substr(4, 1), t += t, n += n, r += r, i += i), {
			red: parseInt(t, 16),
			green: parseInt(n, 16),
			blue: parseInt(r, 16),
			alpha: i ? parseInt(i, 16) / 255 : 1
		};
	},
	transform: le.transform
}, ln = {
	test: (e) => le.test(e) || lt.test(e) || i4.test(e),
	parse: (e) => le.test(e) ? le.parse(e) : i4.test(e) ? i4.parse(e) : lt.parse(e),
	transform: (e) => i1(e) ? e : e.hasOwnProperty("red") ? le.transform(e) : i4.transform(e)
}, lr = "${c}", li = "${n}";
function ll(e) {
	"number" == typeof e && (e = `${e}`);
	let t = [], n = 0, r = e.match(iQ);
	r && (n = r.length, e = e.replace(iQ, lr), t.push(...r.map(ln.parse)));
	let i = e.match(iZ);
	return i && (e = e.replace(iZ, li), t.push(...i.map(i2.parse))), {
		values: t,
		numColors: n,
		tokenised: e
	};
}
function lo(e) {
	return ll(e).values;
}
function la(e) {
	let { values: t, numColors: n, tokenised: r } = ll(e), i = t.length;
	return (e) => {
		let t = r;
		for (let r = 0; r < i; r++) t = t.replace(r < n ? lr : li, r < n ? ln.transform(e[r]) : iJ(e[r]));
		return t;
	};
}
var ls = (e) => "number" == typeof e ? 0 : e, lu = {
	test: function(e) {
		var t, n, r, i;
		return isNaN(e) && i1(e) && (null != (n = null == (t = e.match(iZ)) ? void 0 : t.length) ? n : 0) + (null != (i = null == (r = e.match(iQ)) ? void 0 : r.length) ? i : 0) > 0;
	},
	parse: lo,
	createTransformer: la,
	getAnimatableNone: function(e) {
		let t = lo(e);
		return la(e)(t.map(ls));
	}
}, lc = 1 / 60 * 1e3, lf = "undefined" != typeof performance ? () => performance.now() : () => Date.now(), ld = "undefined" != typeof window ? (e) => window.requestAnimationFrame(e) : (e) => setTimeout(() => e(lf()), lc), lp = !0, lh = !1, lm = !1, lv = {
	delta: 0,
	timestamp: 0
}, lg = [
	"read",
	"update",
	"preRender",
	"render",
	"postRender"
], ly = lg.reduce((e, t) => (e[t] = function(e) {
	let t = [], n = [], r = 0, i = !1, l = !1, o = /* @__PURE__ */ new WeakSet(), a = {
		schedule: (e, l = !1, a = !1) => {
			let s = a && i, u = s ? t : n;
			return l && o.add(e), -1 === u.indexOf(e) && (u.push(e), s && i && (r = t.length)), e;
		},
		cancel: (e) => {
			let t = n.indexOf(e);
			-1 !== t && n.splice(t, 1), o.delete(e);
		},
		process: (s) => {
			if (i) {
				l = !0;
				return;
			}
			if (i = !0, [t, n] = [n, t], n.length = 0, r = t.length) for (let n = 0; n < r; n++) {
				let r = t[n];
				r(s), o.has(r) && (a.schedule(r), e());
			}
			i = !1, l && (l = !1, a.process(s));
		}
	};
	return a;
}(() => lh = !0), e), {}), l_ = lg.reduce((e, t) => {
	let n = ly[t];
	return e[t] = (e, t = !1, r = !1) => (lh || lS(), n.schedule(e, t, r)), e;
}, {}), lb = lg.reduce((e, t) => (e[t] = ly[t].cancel, e), {}), lx = (e) => ly[e].process(lv), lw = (e) => {
	lh = !1, lv.delta = lp ? lc : Math.max(Math.min(e - lv.timestamp, 40), 1), lv.timestamp = e, lm = !0, lg.forEach(lx), lm = !1, lh && (lp = !1, ld(lw));
}, lS = () => {
	lh = !0, lp = !0, lm || ld(lw);
}, lk = l_;
function lE(e) {
	for (var t, n = 0, r = 0, i = e.length; i >= 4; ++r, i -= 4) t = (65535 & (t = 255 & e.charCodeAt(r) | (255 & e.charCodeAt(++r)) << 8 | (255 & e.charCodeAt(++r)) << 16 | (255 & e.charCodeAt(++r)) << 24)) * 1540483477 + ((t >>> 16) * 59797 << 16), t ^= t >>> 24, n = (65535 & t) * 1540483477 + ((t >>> 16) * 59797 << 16) ^ (65535 & n) * 1540483477 + ((n >>> 16) * 59797 << 16);
	switch (i) {
		case 3: n ^= (255 & e.charCodeAt(r + 2)) << 16;
		case 2: n ^= (255 & e.charCodeAt(r + 1)) << 8;
		case 1: n ^= 255 & e.charCodeAt(r), n = (65535 & n) * 1540483477 + ((n >>> 16) * 59797 << 16);
	}
	return n ^= n >>> 13, (((n = (65535 & n) * 1540483477 + ((n >>> 16) * 59797 << 16)) ^ n >>> 15) >>> 0).toString(36);
}
var lO = {
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
};
function lC(e) {
	var t = Object.create(null);
	return function(n) {
		return void 0 === t[n] && (t[n] = e(n)), t[n];
	};
}
var lT = function() {
	function e(e) {
		var t = this;
		this._insertTag = function(e) {
			var n = 0 === t.tags.length ? t.insertionPoint ? t.insertionPoint.nextSibling : t.prepend ? t.container.firstChild : t.before : t.tags[t.tags.length - 1].nextSibling;
			t.container.insertBefore(e, n), t.tags.push(e);
		}, this.isSpeedy = void 0 === e.speedy || e.speedy, this.tags = [], this.ctr = 0, this.nonce = e.nonce, this.key = e.key, this.container = e.container, this.prepend = e.prepend, this.insertionPoint = e.insertionPoint, this.before = null;
	}
	var t = e.prototype;
	return t.hydrate = function(e) {
		e.forEach(this._insertTag);
	}, t.insert = function(e) {
		this.ctr % (this.isSpeedy ? 65e3 : 1) == 0 && this._insertTag(((t = document.createElement("style")).setAttribute("data-emotion", this.key), void 0 !== this.nonce && t.setAttribute("nonce", this.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t));
		var t, n = this.tags[this.tags.length - 1];
		if (this.isSpeedy) {
			var r = function(e) {
				if (e.sheet) return e.sheet;
				for (var t = 0; t < document.styleSheets.length; t++) if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
			}(n);
			try {
				r.insertRule(e, r.cssRules.length);
			} catch (e) {}
		} else n.appendChild(document.createTextNode(e));
		this.ctr++;
	}, t.flush = function() {
		this.tags.forEach(function(e) {
			var t;
			return null == (t = e.parentNode) ? void 0 : t.removeChild(e);
		}), this.tags = [], this.ctr = 0;
	}, e;
}(), lR = Math.min, lM = Math.max, lA = Math.round, lI = Math.floor, lP = (e) => ({
	x: e,
	y: e
}), lj = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
}, lD = {
	start: "end",
	end: "start"
};
function lL(e, t) {
	return "function" == typeof e ? e(t) : e;
}
function lN(e) {
	return e.split("-")[0];
}
function lV(e) {
	return e.split("-")[1];
}
function lF(e) {
	return "x" === e ? "y" : "x";
}
function l$(e) {
	return "y" === e ? "height" : "width";
}
var lz = new Set(["top", "bottom"]);
function lW(e) {
	return lz.has(lN(e)) ? "y" : "x";
}
function lB(e) {
	return e.replace(/start|end/g, (e) => lD[e]);
}
var lU = ["left", "right"], lH = ["right", "left"], lG = ["top", "bottom"], lq = ["bottom", "top"];
function lK(e) {
	return e.replace(/left|right|bottom|top/g, (e) => lj[e]);
}
function lX(e) {
	let { x: t, y: n, width: r, height: i } = e;
	return {
		width: r,
		height: i,
		top: n,
		left: t,
		right: t + r,
		bottom: n + i,
		x: t,
		y: n
	};
}
function lY(e, t, n) {
	let r, { reference: i, floating: l } = e, o = lW(t), a = lF(lW(t)), s = l$(a), u = lN(t), c = "y" === o, f = i.x + i.width / 2 - l.width / 2, d = i.y + i.height / 2 - l.height / 2, p = i[s] / 2 - l[s] / 2;
	switch (u) {
		case "top":
			r = {
				x: f,
				y: i.y - l.height
			};
			break;
		case "bottom":
			r = {
				x: f,
				y: i.y + i.height
			};
			break;
		case "right":
			r = {
				x: i.x + i.width,
				y: d
			};
			break;
		case "left":
			r = {
				x: i.x - l.width,
				y: d
			};
			break;
		default: r = {
			x: i.x,
			y: i.y
		};
	}
	switch (lV(t)) {
		case "start":
			r[a] -= p * (n && c ? -1 : 1);
			break;
		case "end": r[a] += p * (n && c ? -1 : 1);
	}
	return r;
}
var lJ = async (e, t, n) => {
	let { placement: r = "bottom", strategy: i = "absolute", middleware: l = [], platform: o } = n, a = l.filter(Boolean), s = await (null == o.isRTL ? void 0 : o.isRTL(t)), u = await o.getElementRects({
		reference: e,
		floating: t,
		strategy: i
	}), { x: c, y: f } = lY(u, r, s), d = r, p = {}, h = 0;
	for (let n = 0; n < a.length; n++) {
		let { name: l, fn: m } = a[n], { x: g, y, data: _, reset: b } = await m({
			x: c,
			y: f,
			initialPlacement: r,
			placement: d,
			strategy: i,
			middlewareData: p,
			rects: u,
			platform: o,
			elements: {
				reference: e,
				floating: t
			}
		});
		c = null != g ? g : c, f = null != y ? y : f, p = {
			...p,
			[l]: {
				...p[l],
				..._
			}
		}, b && h <= 50 && (h++, "object" == typeof b && (b.placement && (d = b.placement), b.rects && (u = !0 === b.rects ? await o.getElementRects({
			reference: e,
			floating: t,
			strategy: i
		}) : b.rects), {x: c, y: f} = lY(u, d, s)), n = -1);
	}
	return {
		x: c,
		y: f,
		placement: d,
		strategy: i,
		middlewareData: p
	};
};
async function lZ(e, t) {
	var n, r;
	void 0 === t && (t = {});
	let { x: i, y: l, platform: o, rects: a, elements: s, strategy: u } = e, { boundary: c = "clippingAncestors", rootBoundary: f = "viewport", elementContext: d = "floating", altBoundary: p = !1, padding: h = 0 } = lL(t, e), m = "number" != typeof (r = h) ? {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...r
	} : {
		top: r,
		right: r,
		bottom: r,
		left: r
	}, g = s[p ? "floating" === d ? "reference" : "floating" : d], y = lX(await o.getClippingRect({
		element: null == (n = await (null == o.isElement ? void 0 : o.isElement(g))) || n ? g : g.contextElement || await (null == o.getDocumentElement ? void 0 : o.getDocumentElement(s.floating)),
		boundary: c,
		rootBoundary: f,
		strategy: u
	})), _ = "floating" === d ? {
		x: i,
		y: l,
		width: a.floating.width,
		height: a.floating.height
	} : a.reference, b = await (null == o.getOffsetParent ? void 0 : o.getOffsetParent(s.floating)), x = await (null == o.isElement ? void 0 : o.isElement(b)) && await (null == o.getScale ? void 0 : o.getScale(b)) || {
		x: 1,
		y: 1
	}, w = lX(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
		elements: s,
		rect: _,
		offsetParent: b,
		strategy: u
	}) : _);
	return {
		top: (y.top - w.top + m.top) / x.y,
		bottom: (w.bottom - y.bottom + m.bottom) / x.y,
		left: (y.left - w.left + m.left) / x.x,
		right: (w.right - y.right + m.right) / x.x
	};
}
var lQ = function(e) {
	return void 0 === e && (e = {}), {
		name: "flip",
		options: e,
		async fn(t) {
			var n, r, i, l, o;
			let { placement: a, middlewareData: s, rects: u, initialPlacement: c, platform: f, elements: d } = t, { mainAxis: p = !0, crossAxis: h = !0, fallbackPlacements: m, fallbackStrategy: g = "bestFit", fallbackAxisSideDirection: y = "none", flipAlignment: _ = !0,...b } = lL(e, t);
			if (null != (n = s.arrow) && n.alignmentOffset) return {};
			let x = lN(a), w = lW(c), S = lN(c) === c, k = await (null == f.isRTL ? void 0 : f.isRTL(d.floating)), E = m || (S || !_ ? [lK(c)] : function(e) {
				let t = lK(e);
				return [
					lB(e),
					t,
					lB(t)
				];
			}(c)), O = "none" !== y;
			!m && O && E.push(...function(e, t, n, r) {
				let i = lV(e), l = function(e, t, n) {
					switch (e) {
						case "top":
						case "bottom":
							if (n) return t ? lH : lU;
							return t ? lU : lH;
						case "left":
						case "right": return t ? lG : lq;
						default: return [];
					}
				}(lN(e), "start" === n, r);
				return i && (l = l.map((e) => e + "-" + i), t && (l = l.concat(l.map(lB)))), l;
			}(c, _, y, k));
			let C = [c, ...E], T = await lZ(t, b), R = [], M = (null == (r = s.flip) ? void 0 : r.overflows) || [];
			if (p && R.push(T[x]), h) {
				let e = function(e, t, n) {
					void 0 === n && (n = !1);
					let r = lV(e), i = lF(lW(e)), l = l$(i), o = "x" === i ? r === (n ? "end" : "start") ? "right" : "left" : "start" === r ? "bottom" : "top";
					return t.reference[l] > t.floating[l] && (o = lK(o)), [o, lK(o)];
				}(a, u, k);
				R.push(T[e[0]], T[e[1]]);
			}
			if (M = [...M, {
				placement: a,
				overflows: R
			}], !R.every((e) => e <= 0)) {
				let e = ((null == (i = s.flip) ? void 0 : i.index) || 0) + 1, t = C[e];
				if (t && ("alignment" !== h || w === lW(t) || M.every((e) => lW(e.placement) !== w || e.overflows[0] > 0))) return {
					data: {
						index: e,
						overflows: M
					},
					reset: { placement: t }
				};
				let n = null == (l = M.filter((e) => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]) ? void 0 : l.placement;
				if (!n) switch (g) {
					case "bestFit": {
						let e = null == (o = M.filter((e) => {
							if (O) {
								let t = lW(e.placement);
								return t === w || "y" === t;
							}
							return !0;
						}).map((e) => [e.placement, e.overflows.filter((e) => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]) ? void 0 : o[0];
						e && (n = e);
						break;
					}
					case "initialPlacement": n = c;
				}
				if (a !== n) return { reset: { placement: n } };
			}
			return {};
		}
	};
}, l0 = function(e) {
	return void 0 === e && (e = {}), {
		name: "shift",
		options: e,
		async fn(t) {
			let { x: n, y: r, placement: i } = t, { mainAxis: l = !0, crossAxis: o = !1, limiter: a = { fn: (e) => {
				let { x: t, y: n } = e;
				return {
					x: t,
					y: n
				};
			} },...s } = lL(e, t), u = {
				x: n,
				y: r
			}, c = await lZ(t, s), f = lW(lN(i)), d = lF(f), p = u[d], h = u[f];
			if (l) {
				let e = "y" === d ? "top" : "left", t = "y" === d ? "bottom" : "right", n = p + c[e], r = p - c[t];
				p = lM(n, lR(p, r));
			}
			if (o) {
				let e = "y" === f ? "top" : "left", t = "y" === f ? "bottom" : "right", n = h + c[e], r = h - c[t];
				h = lM(n, lR(h, r));
			}
			let m = a.fn({
				...t,
				[d]: p,
				[f]: h
			});
			return {
				...m,
				data: {
					x: m.x - n,
					y: m.y - r,
					enabled: {
						[d]: l,
						[f]: o
					}
				}
			};
		}
	};
}, l1 = function(e) {
	return void 0 === e && (e = {}), {
		name: "size",
		options: e,
		async fn(t) {
			var n, r;
			let i, l, { placement: o, rects: a, platform: s, elements: u } = t, { apply: c = () => {},...f } = lL(e, t), d = await lZ(t, f), p = lN(o), h = lV(o), m = "y" === lW(o), { width: g, height: y } = a.floating;
			"top" === p || "bottom" === p ? (i = p, l = h === (await (null == s.isRTL ? void 0 : s.isRTL(u.floating)) ? "start" : "end") ? "left" : "right") : (l = p, i = "end" === h ? "top" : "bottom");
			let _ = y - d.top - d.bottom, b = g - d.left - d.right, x = lR(y - d[i], _), w = lR(g - d[l], b), S = !t.middlewareData.shift, k = x, E = w;
			if (null != (n = t.middlewareData.shift) && n.enabled.x && (E = b), null != (r = t.middlewareData.shift) && r.enabled.y && (k = _), S && !h) {
				let e = lM(d.left, 0), t = lM(d.right, 0), n = lM(d.top, 0), r = lM(d.bottom, 0);
				m ? E = g - 2 * (0 !== e || 0 !== t ? e + t : lM(d.left, d.right)) : k = y - 2 * (0 !== n || 0 !== r ? n + r : lM(d.top, d.bottom));
			}
			await c({
				...t,
				availableWidth: E,
				availableHeight: k
			});
			let O = await s.getDimensions(u.floating);
			return g !== O.width || y !== O.height ? { reset: { rects: !0 } } : {};
		}
	};
};
function l2() {
	return "undefined" != typeof window;
}
function l5(e) {
	return l8(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function l6(e) {
	var t;
	return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window;
}
function l3(e) {
	var t;
	return null == (t = (l8(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement;
}
function l8(e) {
	return !!l2() && (e instanceof Node || e instanceof l6(e).Node);
}
function l4(e) {
	return !!l2() && (e instanceof Element || e instanceof l6(e).Element);
}
function l9(e) {
	return !!l2() && (e instanceof HTMLElement || e instanceof l6(e).HTMLElement);
}
function l7(e) {
	return !!l2() && "undefined" != typeof ShadowRoot && (e instanceof ShadowRoot || e instanceof l6(e).ShadowRoot);
}
var oe = new Set(["inline", "contents"]);
function ot(e) {
	let { overflow: t, overflowX: n, overflowY: r, display: i } = oh(e);
	return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !oe.has(i);
}
var on = new Set([
	"table",
	"td",
	"th"
]);
function or(e) {
	return on.has(l5(e));
}
var oi = [":popover-open", ":modal"];
function ol(e) {
	return oi.some((t) => {
		try {
			return e.matches(t);
		} catch (e) {
			return !1;
		}
	});
}
var oo = [
	"transform",
	"translate",
	"scale",
	"rotate",
	"perspective"
], oa = [
	"transform",
	"translate",
	"scale",
	"rotate",
	"perspective",
	"filter"
], os = [
	"paint",
	"layout",
	"strict",
	"content"
];
function ou(e) {
	let t = of(), n = l4(e) ? oh(e) : e;
	return oo.some((e) => !!n[e] && "none" !== n[e]) || !!n.containerType && "normal" !== n.containerType || !t && !!n.backdropFilter && "none" !== n.backdropFilter || !t && !!n.filter && "none" !== n.filter || oa.some((e) => (n.willChange || "").includes(e)) || os.some((e) => (n.contain || "").includes(e));
}
function oc(e) {
	let t = ov(e);
	for (; l9(t) && !op(t);) {
		if (ou(t)) return t;
		if (ol(t)) break;
		t = ov(t);
	}
	return null;
}
function of() {
	return "undefined" != typeof CSS && !!CSS.supports && CSS.supports("-webkit-backdrop-filter", "none");
}
var od = new Set([
	"html",
	"body",
	"#document"
]);
function op(e) {
	return od.has(l5(e));
}
function oh(e) {
	return l6(e).getComputedStyle(e);
}
function om(e) {
	return l4(e) ? {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	} : {
		scrollLeft: e.scrollX,
		scrollTop: e.scrollY
	};
}
function ov(e) {
	if ("html" === l5(e)) return e;
	let t = e.assignedSlot || e.parentNode || l7(e) && e.host || l3(e);
	return l7(t) ? t.host : t;
}
function og(e, t, n) {
	var r;
	void 0 === t && (t = []), void 0 === n && (n = !0);
	let i = function e(t) {
		let n = ov(t);
		return op(n) ? t.ownerDocument ? t.ownerDocument.body : t.body : l9(n) && ot(n) ? n : e(n);
	}(e), l = i === (null == (r = e.ownerDocument) ? void 0 : r.body), o = l6(i);
	if (l) {
		let e = oy(o);
		return t.concat(o, o.visualViewport || [], ot(i) ? i : [], e && n ? og(e) : []);
	}
	return t.concat(i, og(i, [], n));
}
function oy(e) {
	return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
var o_ = S("div", { displayName: "Container" })({
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
		"& .comment": { color: h("sys.on-surface", m(.38)) },
		"& .string": { color: "sys.success" },
		"& .tag .attr-name": { color: "sys.success" },
		"& .function": { color: "sys.warning" },
		"& .punctuation": { color: h("sys.on-surface", m(.38)) },
		"& .keyword": { color: "sys.error" }
	},
	"& p,li": { my: "1em" },
	overflowY: "auto"
});
let ob = d(() => {
	let e = {
		primary: "#1270f5",
		secondary: "#8a90a5",
		tertiary: "#b58391",
		neutral: "#5e5e5e",
		neutralVariant: "#757780",
		error: "#d93f23",
		warning: "#e69c00",
		success: "#5ac220"
	}, t = k.fromColors(e).normalizeRoleRules();
	return o({
		seed: e,
		rules: t,
		theming: E.create({
			...g,
			...k.fromColors(e).toDesignTokens(t)
		}, { varPrefix: "vk" })
	});
});
var ox = n(() => {
	let e = l(r().options.routes.filter((e) => "/" !== e.path), (e) => e.path.split("/")[1]);
	return () => iq(w, {
		sx: {
			py: 16,
			px: 0,
			textTransform: "capitalize"
		},
		children: f(e, (e, t) => {
			let [n, r] = s(e, (e) => e.path === `/${t}`);
			return iG(w, {
				sx: { px: 8 },
				children: [n[0] ? iq(C, {
					component: i,
					sx: {
						width: "100%",
						justifyContent: "flex-start"
					},
					activeClass: "active",
					to: n[0]?.path,
					children: t
				}) : iq(C, {
					sx: {
						width: "100%",
						justifyContent: "flex-start"
					},
					children: t
				}), iq(w, {
					sx: { pl: 16 },
					children: f(r, (e) => iq(C, {
						component: i,
						activeClass: "active",
						to: e.path,
						sx: {
							width: "100%",
							justifyContent: "flex-start"
						},
						children: a(e.path.split("/"))?.replaceAll("-", " ")
					}, e.name))
				})]
			}, t);
		})
	});
}, { displayName: "Nav" }), ow = n({ $default: p().optional() }, (e, { slots: t }) => {
	let n = tj("light");
	return () => iG(w, {
		"data-theme": n.value,
		sx: {
			display: "flex",
			height: "100vh",
			width: "100vw",
			containerStyle: "sys.surface"
		},
		children: [iG(w, {
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
			children: [iq(w, {
				sx: { flex: 1 },
				children: iq(ox, {})
			}), iG(w, {
				sx: {
					p: 16,
					display: "flex",
					justifyContent: "flex-end"
				},
				children: [iq(R, {
					component: "a",
					target: "_blank",
					sx: { color: "sys.on-surface-variant" },
					href: "//github.com/innoai-tech/vuekit",
					children: iq(T, { path: I })
				}), iq(O, {
					title: `切换到${"light" === n.value ? "深色模式" : "浅色模式"}`,
					children: iq(w, {
						component: R,
						"data-test": !0,
						sx: { color: "sys.on-surface-variant" },
						onClick: () => {
							n.value = "light" === n.value ? "dark" : "light";
						},
						children: iq(T, { path: "light" === n.value ? M : A })
					})
				})]
			})]
		}), iq(w, {
			sx: {
				flex: 1,
				overflow: "auto"
			},
			children: iq(o_, { children: t.default?.() })
		})]
	});
}, { displayName: "Scaffold" }), oS = n(() => {
	let e = ob.use(), t = x.use();
	return rE([() => e.value.seed, () => e.value.rules], ([t, n]) => {
		e.next((e) => {
			e.theming = E.create({
				...g,
				...k.fromColors(t).toDesignTokens(n)
			}, { varPrefix: "vk" });
		});
	}), () => {
		let n = e.value.theming, r = n.unstable_css(t, { ":root": n.rootCSSVars });
		return iq(ob, {
			value: e,
			children: iG(b, {
				value: n,
				children: [
					iq(y, {}),
					iq(_, { styles: "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n" }),
					iq(ow, { children: iq(c, {}) })
				]
			}, r.name)
		});
	};
}, { displayName: "App" }), ok = {};
let oE = function(e, t, n) {
	let r = Promise.resolve();
	if (t && t.length > 0) {
		let e = document.getElementsByTagName("link"), i = document.querySelector("meta[property=csp-nonce]"), l = i?.nonce || i?.getAttribute("nonce");
		r = Promise.all(t.map((t) => {
			if ((t = "/vuekit/" + t) in ok) return;
			ok[t] = !0;
			let r = t.endsWith(".css");
			if (n) for (let n = e.length - 1; n >= 0; n--) {
				let i = e[n];
				if (i.href === t && (!r || "stylesheet" === i.rel)) return;
			}
			else if (document.querySelector(`link[href="${t}"]${r ? "[rel=\"stylesheet\"]" : ""}`)) return;
			let i = document.createElement("link");
			if (i.rel = r ? "stylesheet" : "modulepreload", r || (i.as = "script"), i.crossOrigin = "", i.href = t, l && i.setAttribute("nonce", l), document.head.appendChild(i), r) return new Promise((e, n) => {
				i.addEventListener("load", e), i.addEventListener("error", () => n(Error(`Unable to preload CSS for ${t}`)));
			});
		}).map((e) => Promise.resolve(e).then((e) => ({
			status: "fulfilled",
			value: e
		}), (e) => ({
			status: "rejected",
			reason: e
		}))));
	}
	function i(e) {
		let t = new Event("vite:preloadError", { cancelable: !0 });
		if (t.payload = e, window.dispatchEvent(t), !t.defaultPrevented) throw e;
	}
	return r.then((t) => {
		for (let e of t || []) "rejected" === e.status && i(e.reason);
		return e().catch(i);
	});
};
var oO = [
	{
		name: "jsoneditor-jsoneditor",
		path: "/jsoneditor/jsoneditor",
		component: () => oE(() => import("./nodepkg-jsoneditor-example.-GJD1HQh.chunk.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11])),
		props: !0
	},
	{
		name: "jsoneditor-jsoneditor-large",
		path: "/jsoneditor/jsoneditor-large",
		component: () => oE(() => import("./nodepkg-jsoneditor-example.BJZuzFTv.chunk.js"), __vite__mapDeps([12,1,2,0,9,6,3,4,5,11,7,8,10])),
		props: !0
	},
	{
		name: "vuemarkdown-markdown",
		path: "/vuemarkdown/markdown",
		component: () => oE(() => import("./nodepkg-vuemarkdown-example.-U3emPVx.chunk.js"), __vite__mapDeps([13,1,2,0,9,6,3,4,5,11,7,8,10])),
		props: !0
	},
	{
		name: "vuematerial",
		path: "/vuematerial",
		component: () => oE(() => import("./nodepkg-vuematerial-example.CyPuCLE6.chunk.js"), []),
		props: !0
	},
	{
		name: "vuematerial-buttons",
		path: "/vuematerial/buttons",
		component: () => oE(() => import("./nodepkg-vuematerial-example.-CLY1ilF.chunk.js"), __vite__mapDeps([14,1,2,0,9,6,3,4,5,11,7,8,10])),
		props: !0
	},
	{
		name: "vuematerial-textfields",
		path: "/vuematerial/textfields",
		component: () => oE(() => import("./nodepkg-vuematerial-example.CACh7O8s.chunk.js"), __vite__mapDeps([15,1,2,0,9,6,3,4,5,11,7,8,10])),
		props: !0
	},
	{
		name: "vuematerial-overlays",
		path: "/vuematerial/overlays",
		component: () => oE(() => import("./nodepkg-vuematerial-example.dOv2Uuzc.chunk.js"), __vite__mapDeps([16,1,2,0,9,6,3,4,5,11,7,8,10])),
		props: !0
	},
	{
		name: "vuematerial-icons",
		path: "/vuematerial/icons",
		component: () => oE(() => import("./nodepkg-vuematerial-example.Dwu-5l7l.chunk.js"), __vite__mapDeps([17,1,2,0,9,6,3,4,5,11,7,8,10])),
		props: !0
	},
	{
		name: "vuematerial-progresses",
		path: "/vuematerial/progresses",
		component: () => oE(() => import("./nodepkg-vuematerial-example.DUhZwYlD.chunk.js"), __vite__mapDeps([18,1,2,0,9,6,3,4,5,11,7,8,10])),
		props: !0
	},
	{
		name: "vueuikit",
		path: "/vueuikit",
		component: () => oE(() => import("./nodepkg-vueuikit-example.B28KATSX.chunk.js"), __vite__mapDeps([19,1,2,0,9,6,3,4,5,11,7,8,10])),
		props: !0
	},
	{
		name: "vueuikit-color-palette",
		path: "/vueuikit/color-palette",
		component: () => oE(() => import("./nodepkg-vueuikit-example.CnYGc32m.chunk.js"), __vite__mapDeps([20,1,2,0,9,6,3,4,5,11,7,8,10])),
		props: !0
	},
	{
		name: "vueuikit-color-scheme",
		path: "/vueuikit/color-scheme",
		component: () => oE(() => import("./nodepkg-vueuikit-example.bJFxF5hO.chunk.js"), __vite__mapDeps([21,1,2,0,9,6,3,4,5,11,7,8,10])),
		props: !0
	},
	{
		name: "vueuikit-popper",
		path: "/vueuikit/popper",
		component: () => oE(() => import("./nodepkg-vueuikit-example.DOAzt8Ar.chunk.js"), __vite__mapDeps([22,1,2,0,9,6,3,4,5,11,7,8,10])),
		props: !0
	},
	{
		name: "vueuikit-elevation",
		path: "/vueuikit/elevation",
		component: () => oE(() => import("./nodepkg-vueuikit-example.B3DLRCp2.chunk.js"), __vite__mapDeps([23,1,2,0,9,6,3,4,5,11,7,8,10])),
		props: !0
	},
	{
		name: "vueuikit-typography",
		path: "/vueuikit/typography",
		component: () => oE(() => import("./nodepkg-vueuikit-example.OFjWxQHV.chunk.js"), __vite__mapDeps([24,1,2,0,9,6,3,4,5,11,7,8,10])),
		props: !0
	},
	{
		name: "vueuikit-figma-tokens",
		path: "/vueuikit/figma-tokens",
		component: () => oE(() => import("./nodepkg-vueuikit-example.B5TorP52.chunk.js"), __vite__mapDeps([25,1,2,0,9,6,3,4,5,11,7,8,10])),
		props: !0
	},
	{
		name: "vuekit",
		path: "/vuekit",
		component: () => oE(() => import("./nodepkg-vuekit-example.pgyeKRHC.chunk.js"), __vite__mapDeps([26,3,4,5,6])),
		props: !0
	},
	{
		name: "vuekit-rx-in-vue",
		path: "/vuekit/rx-in-vue",
		component: () => oE(() => import("./nodepkg-vuekit-example.BqHG3C2Q.chunk.js"), __vite__mapDeps([27,3,4,5,6])),
		props: !0
	},
	{
		name: "index",
		path: "/",
		component: Object.assign(n(() => () => iq(w, {
			sx: {
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				textStyle: "sys.display-large"
			},
			children: "Vuekit"
		})), { meta: {
			name: "Home",
			icon: () => oE(async () => {
				let { mdiGroup: e } = await import("./webapp-vuekit-layout.LV2ruXL1.chunk.js");
				return { mdiGroup: e };
			}, __vite__mapDeps([28,1,2,0,9,6,3,4,5,11,7,8,10])).then(({ mdiGroup: e }) => ({ default: e }))
		} }),
		props: !0
	}
];
console.log(oO);
var oC = t({
	history: u(new URL(document.querySelector("base")?.href ?? "/").pathname),
	routes: oO
});
((...e) => {
	let t = (G || (G = function(e, t) {
		var n;
		let r, i;
		eE().__VUE__ = !0;
		let { insert: l, remove: o, patchProp: a, createElement: s, createText: u, createComment: c, setText: f, setElementText: d, parentNode: p, nextSibling: h, setScopeId: m = X, insertStaticContent: g } = e, y = (e, t, n, r = null, i = null, l = null, o, a = null, s = !!t.dynamicChildren) => {
			if (e === t) return;
			e && !rU(e, t) && (r = H(e), F(e, i, l, !0), e = null), -2 === t.patchFlag && (s = !1, t.dynamicChildren = null);
			let { type: u, ref: c, shapeFlag: f } = t;
			switch (u) {
				case rN:
					_(e, t, n, r);
					break;
				case rV:
					b(e, t, n, r);
					break;
				case rF:
					e ?? x(t, n, r, o);
					break;
				case rL:
					R(e, t, n, r, i, l, o, a, s);
					break;
				default: 1 & f ? w(e, t, n, r, i, l, o, a, s) : 6 & f ? M(e, t, n, r, i, l, o, a, s) : 64 & f ? u.process(e, t, n, r, i, l, o, a, s, J) : 128 & f && u.process(e, t, n, r, i, l, o, a, s, J);
			}
			null != c && i ? nM(c, e && e.ref, l, t || e, !t) : null == c && e && null != e.ref && nM(e.ref, null, l, e, !0);
		}, _ = (e, t, n, r) => {
			if (null == e) l(t.el = u(t.children), n, r);
			else {
				let n = t.el = e.el;
				t.children !== e.children && f(n, t.children);
			}
		}, b = (e, t, n, r) => {
			null == e ? l(t.el = c(t.children || ""), n, r) : t.el = e.el;
		}, x = (e, t, n, r) => {
			[e.el, e.anchor] = g(e.children, t, n, r, e.el, e.anchor);
		}, w = (e, t, n, r, i, l, o, a, s) => {
			"svg" === t.type ? o = "svg" : "math" === t.type && (o = "mathml"), null == e ? S(t, n, r, i, l, o, a, s) : O(e, t, i, l, o, a, s);
		}, S = (e, t, n, r, i, o, u, c) => {
			var f, p;
			let h, m, { props: g, shapeFlag: y, transition: _, dirs: b } = e;
			if (h = e.el = s(e.type, o, g && g.is, g), 8 & y ? d(h, e.children) : 16 & y && E(e.children, h, null, r, i, rb(e, o), u, c), b && nr(e, null, r, "created"), k(h, e, e.scopeId, u, r), g) {
				for (let e in g) "value" === e || ep(e) || a(h, e, null, g[e], o, r);
				"value" in g && a(h, "value", null, g.value, o), (m = g.onVnodeBeforeMount) && rZ(m, r, e);
			}
			b && nr(e, null, r, "beforeMount");
			let x = (f = i, p = _, (!f || f && !f.pendingBranch) && p && !p.persisted);
			x && _.beforeEnter(h), l(h, t, n), ((m = g && g.onVnodeMounted) || x || b) && r_(() => {
				m && rZ(m, r, e), x && _.enter(h), b && nr(e, null, r, "mounted");
			}, i);
		}, k = (e, t, n, r, i) => {
			if (n && m(e, n), r) for (let t = 0; t < r.length; t++) m(e, r[t]);
			if (i) {
				let n = i.subTree;
				if (t === n || n.type.__isSuspense && (n.ssContent === t || n.ssFallback === t)) {
					let t = i.vnode;
					k(e, t, t.scopeId, t.slotScopeIds, i.parent);
				}
			}
		}, E = (e, t, n, r, i, l, o, a, s = 0) => {
			for (let u = s; u < e.length; u++) y(null, e[u] = a ? rY(e[u]) : rX(e[u]), t, n, r, i, l, o, a);
		}, O = (e, t, n, r, i, l, o) => {
			let s, u = t.el = e.el, { patchFlag: c, dynamicChildren: f, dirs: p } = t;
			c |= 16 & e.patchFlag;
			let h = e.props || q, m = t.props || q;
			if (n && rx(n, !1), (s = m.onVnodeBeforeUpdate) && rZ(s, n, t, e), p && nr(t, e, n, "beforeUpdate"), n && rx(n, !0), (h.innerHTML && null == m.innerHTML || h.textContent && null == m.textContent) && d(u, ""), f ? C(e.dynamicChildren, f, u, n, r, rb(t, i), l) : o || D(e, t, u, null, n, r, rb(t, i), l, !1), c > 0) {
				if (16 & c) T(u, h, m, n, i);
				else if (2 & c && h.class !== m.class && a(u, "class", null, m.class, i), 4 & c && a(u, "style", h.style, m.style, i), 8 & c) {
					let e = t.dynamicProps;
					for (let t = 0; t < e.length; t++) {
						let r = e[t], l = h[r], o = m[r];
						(o !== l || "value" === r) && a(u, r, l, o, i, n);
					}
				}
				1 & c && e.children !== t.children && d(u, t.children);
			} else o || null != f || T(u, h, m, n, i);
			((s = m.onVnodeUpdated) || p) && r_(() => {
				s && rZ(s, n, t, e), p && nr(t, e, n, "updated");
			}, r);
		}, C = (e, t, n, r, i, l, o) => {
			for (let a = 0; a < t.length; a++) {
				let s = e[a], u = t[a];
				y(s, u, s.el && (s.type === rL || !rU(s, u) || 198 & s.shapeFlag) ? p(s.el) : n, null, r, i, l, o, !0);
			}
		}, T = (e, t, n, r, i) => {
			if (t !== n) {
				if (t !== q) for (let l in t) ep(l) || l in n || a(e, l, t[l], null, i, r);
				for (let l in n) {
					if (ep(l)) continue;
					let o = n[l], s = t[l];
					o !== s && "value" !== l && a(e, l, s, o, i, r);
				}
				"value" in n && a(e, "value", t.value, n.value, i);
			}
		}, R = (e, t, n, r, i, o, a, s, c) => {
			let f = t.el = e ? e.el : u(""), d = t.anchor = e ? e.anchor : u(""), { patchFlag: p, dynamicChildren: h, slotScopeIds: m } = t;
			m && (s = s ? s.concat(m) : m), null == e ? (l(f, n, r), l(d, n, r), E(t.children || [], n, d, i, o, a, s, c)) : p > 0 && 64 & p && h && e.dynamicChildren ? (C(e.dynamicChildren, h, n, i, o, a, s), (null != t.key || i && t === i.subTree) && rw(e, t, !0)) : D(e, t, n, d, i, o, a, s, c);
		}, M = (e, t, n, r, i, l, o, a, s) => {
			t.slotScopeIds = a, null == e ? 512 & t.shapeFlag ? i.ctx.activate(t, n, r, o, s) : A(t, n, r, i, l, o, s) : I(e, t, s);
		}, A = (e, t, n, r, i, l, o) => {
			let a = e.component = function(e, t, n) {
				let r = e.type, i = (t ? t.appContext : e.appContext) || rQ, l = {
					uid: r0++,
					vnode: e,
					type: r,
					parent: t,
					appContext: i,
					root: null,
					next: null,
					subTree: null,
					effect: null,
					update: null,
					job: null,
					scope: new eI(!0),
					render: null,
					proxy: null,
					exposed: null,
					exposeProxy: null,
					withProxy: null,
					provides: t ? t.provides : Object.create(i.provides),
					ids: t ? t.ids : [
						"",
						0,
						0
					],
					accessCache: null,
					renderCache: [],
					components: null,
					directives: null,
					propsOptions: function e(t, n, r = !1) {
						let i = r ? rf : n.propsCache, l = i.get(t);
						if (l) return l;
						let o = t.props, a = {}, s = [], u = !1;
						if (!el(t)) {
							let i = (t) => {
								u = !0;
								let [r, i] = e(t, n, !0);
								Q(a, r), i && s.push(...i);
							};
							!r && n.mixins.length && n.mixins.forEach(i), t.extends && i(t.extends), t.mixins && t.mixins.forEach(i);
						}
						if (!o && !u) return es(t) && i.set(t, K), K;
						if (er(o)) for (let e = 0; e < o.length; e++) {
							let t = ev(o[e]);
							rd(t) && (a[t] = q);
						}
						else if (o) for (let e in o) {
							let t = ev(e);
							if (rd(t)) {
								let n = o[e], r = a[t] = er(n) || el(n) ? { type: n } : Q({}, n), i = r.type, l = !1, u = !0;
								if (er(i)) for (let e = 0; e < i.length; ++e) {
									let t = i[e], n = el(t) && t.name;
									if ("Boolean" === n) {
										l = !0;
										break;
									}
									"String" === n && (u = !1);
								}
								else l = el(i) && "Boolean" === i.name;
								r[0] = l, r[1] = u, (l || en(r, "default")) && s.push(t);
							}
						}
						let c = [a, s];
						return es(t) && i.set(t, c), c;
					}(r, i),
					emitsOptions: function e(t, n, r = !1) {
						let i = r ? rM : n.emitsCache, l = i.get(t);
						if (void 0 !== l) return l;
						let o = t.emits, a = {}, s = !1;
						if (!el(t)) {
							let i = (t) => {
								let r = e(t, n, !0);
								r && (s = !0, Q(a, r));
							};
							!r && n.mixins.length && n.mixins.forEach(i), t.extends && i(t.extends), t.mixins && t.mixins.forEach(i);
						}
						return o || s ? (er(o) ? o.forEach((e) => a[e] = null) : Q(a, o), es(t) && i.set(t, a), a) : (es(t) && i.set(t, null), null);
					}(r, i),
					emit: null,
					emitted: null,
					propsDefaults: q,
					inheritAttrs: r.inheritAttrs,
					ctx: q,
					data: q,
					props: q,
					attrs: q,
					slots: q,
					refs: q,
					setupState: q,
					setupContext: null,
					suspense: n,
					suspenseId: n ? n.pendingId : 0,
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
				return l.ctx = { _: l }, l.root = t ? t.root : l, l.emit = rR.bind(null, l), e.ce && e.ce(l), l;
			}(e, r, i);
			if (nP(e) && (a.ctx.renderer = J), function(e, t = !1, n = !1) {
				t && B(t);
				let { props: r, children: i } = e.vnode, l = r3(e);
				(function(e, t, n, r = !1) {
					let i = {}, l = ra();
					for (let n in e.propsDefaults = Object.create(null), ru(e, t, i, l), e.propsOptions[0]) n in i || (i[n] = void 0);
					n ? e.props = r ? i : tS(i) : e.type.props ? e.props = i : e.props = l, e.attrs = l;
				})(e, r, l, t);
				var o = n || t;
				let a = e.slots = ra();
				if (32 & e.vnode.shapeFlag) {
					let e = i._;
					e ? (ry(a, i, o), o && eS(a, "_", e, !0)) : rv(i, a);
				} else i && rg(e, i);
				l && function(e, t) {
					let n = e.type;
					e.accessCache = Object.create(null), e.proxy = new Proxy(e.ctx, nQ);
					let { setup: r } = n;
					if (r) {
						var i;
						eH();
						let n = e.setupContext = r.length > 1 ? {
							attrs: new Proxy((i = e).attrs, r7),
							slots: i.slots,
							emit: i.emit,
							expose: (e) => {
								i.exposed = e || {};
							}
						} : null, l = r5(e), o = tK(r, e, 0, [e.props, n]), a = eu(o);
						if (eG(), l(), (a || e.sp) && !nI(e) && nT(e), a) {
							if (o.then(r6, r6), t) return o.then((n) => {
								r4(e, n, t);
							}).catch((t) => {
								tY(t, e, 0);
							});
							e.asyncDep = o;
						} else r4(e, o, t);
					} else r9(e, t);
				}(e, t), t && B(!1);
			}(a, !1, o), a.asyncDep) {
				if (i && i.registerDep(a, P, o), !e.el) {
					let r = a.subTree = rq(rV);
					b(null, r, t, n), e.placeholder = r.el;
				}
			} else P(a, e, t, n, i, l, o);
		}, I = (e, t, n) => {
			let r = t.component = e.component;
			if (function(e, t, n) {
				let { props: r, children: i, component: l } = e, { props: o, children: a, patchFlag: s } = t, u = l.emitsOptions;
				if (t.dirs || t.transition) return !0;
				if (!n || !(s >= 0)) return (!!i || !!a) && (!a || !a.$stable) || r !== o && (r ? !o || rD(r, o, u) : !!o);
				if (1024 & s) return !0;
				if (16 & s) return r ? rD(r, o, u) : !!o;
				if (8 & s) {
					let e = t.dynamicProps;
					for (let t = 0; t < e.length; t++) {
						let n = e[t];
						if (o[n] !== r[n] && !rA(u, n)) return !0;
					}
				}
				return !1;
			}(e, t, n)) if (r.asyncDep && !r.asyncResolved) return void j(r, t, n);
			else r.next = t, r.update();
			else t.el = e.el, r.vnode = t;
		}, P = (e, t, n, r, l, o, a) => {
			let s = () => {
				if (e.isMounted) {
					let t, { next: n, bu: r, u: i, parent: u, vnode: c } = e;
					{
						let t = function e(t) {
							let n = t.subTree.component;
							if (n) if (n.asyncDep && !n.asyncResolved) return n;
							else return e(n);
						}(e);
						if (t) {
							n && (n.el = c.el, j(e, n, a)), t.asyncDep.then(() => {
								e.isUnmounted || s();
							});
							return;
						}
					}
					let f = n;
					rx(e, !1), n ? (n.el = c.el, j(e, n, a)) : n = c, r && ew(r), (t = n.props && n.props.onVnodeBeforeUpdate) && rZ(t, u, n, c), rx(e, !0);
					let d = rI(e), h = e.subTree;
					e.subTree = d, y(h, d, p(h.el), H(h), e, l, o), n.el = d.el, null === f && function({ vnode: e, parent: t }, n) {
						for (; t;) {
							let r = t.subTree;
							if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e) (e = t.vnode).el = n, t = t.parent;
							else break;
						}
					}(e, d.el), i && r_(i, l), (t = n.props && n.props.onVnodeUpdated) && r_(() => rZ(t, u, n, c), l);
				} else {
					let a, { el: s, props: u } = t, { bm: c, m: f, parent: d, root: p, type: h } = e, m = nI(t);
					if (rx(e, !1), c && ew(c), !m && (a = u && u.onVnodeBeforeMount) && rZ(a, d, t), rx(e, !0), s && i);
					else {
						p.ce && !1 !== p.ce._def.shadowRoot && p.ce._injectChildStyle(h);
						let i = e.subTree = rI(e);
						y(null, i, n, r, e, l, o), t.el = i.el;
					}
					if (f && r_(f, l), !m && (a = u && u.onVnodeMounted)) {
						let e = t;
						r_(() => rZ(a, d, e), l);
					}
					(256 & t.shapeFlag || d && nI(d.vnode) && 256 & d.vnode.shapeFlag) && e.a && r_(e.a, l), e.isMounted = !0, t = n = r = null;
				}
			};
			e.scope.on();
			let u = e.effect = new ej(s);
			e.scope.off();
			let c = e.update = u.run.bind(u), f = e.job = u.runIfDirty.bind(u);
			f.i = e, f.id = e.uid, u.scheduler = () => t3(f), rx(e, !0), c();
		}, j = (e, t, n) => {
			t.component = e;
			let r = e.vnode.props;
			e.vnode = t, e.next = null, function(e, t, n, r) {
				let { props: i, attrs: l, vnode: { patchFlag: o } } = e, a = tM(i), [s] = e.propsOptions, u = !1;
				if ((r || o > 0) && !(16 & o)) {
					if (8 & o) {
						let n = e.vnode.dynamicProps;
						for (let r = 0; r < n.length; r++) {
							let o = n[r];
							if (rA(e.emitsOptions, o)) continue;
							let c = t[o];
							if (s) if (en(l, o)) c !== l[o] && (l[o] = c, u = !0);
							else {
								let t = ev(o);
								i[t] = rc(s, a, t, c, e, !1);
							}
							else c !== l[o] && (l[o] = c, u = !0);
						}
					}
				} else {
					let r;
					for (let o in ru(e, t, i, l) && (u = !0), a) t && (en(t, o) || (r = ey(o)) !== o && en(t, r)) || (s ? n && (void 0 !== n[o] || void 0 !== n[r]) && (i[o] = rc(s, a, o, void 0, e, !0)) : delete i[o]);
					if (l !== a) for (let e in l) t && en(t, e) || (delete l[e], u = !0);
				}
				u && e2(e.attrs, "set", "");
			}(e, t.props, r, n), ((e, t, n) => {
				let { vnode: r, slots: i } = e, l = !0, o = q;
				if (32 & r.shapeFlag) {
					let e = t._;
					e ? n && 1 === e ? l = !1 : ry(i, t, n) : (l = !t.$stable, rv(t, i)), o = t;
				} else t && (rg(e, t), o = { default: 1 });
				if (l) for (let e in i) rp(e) || null != o[e] || delete i[e];
			})(e, t.children, n), eH(), t4(e), eG();
		}, D = (e, t, n, r, i, l, o, a, s = !1) => {
			let u = e && e.children, c = e ? e.shapeFlag : 0, f = t.children, { patchFlag: p, shapeFlag: h } = t;
			if (p > 0) {
				if (128 & p) return void N(u, f, n, r, i, l, o, a, s);
				else if (256 & p) return void L(u, f, n, r, i, l, o, a, s);
			}
			8 & h ? (16 & c && U(u, i, l), f !== u && d(n, f)) : 16 & c ? 16 & h ? N(u, f, n, r, i, l, o, a, s) : U(u, i, l, !0) : (8 & c && d(n, ""), 16 & h && E(f, n, r, i, l, o, a, s));
		}, L = (e, t, n, r, i, l, o, a, s) => {
			let u;
			e = e || K, t = t || K;
			let c = e.length, f = t.length, d = Math.min(c, f);
			for (u = 0; u < d; u++) {
				let r = t[u] = s ? rY(t[u]) : rX(t[u]);
				y(e[u], r, n, null, i, l, o, a, s);
			}
			c > f ? U(e, i, l, !0, !1, d) : E(t, n, r, i, l, o, a, s, d);
		}, N = (e, t, n, r, i, l, o, a, s) => {
			let u = 0, c = t.length, f = e.length - 1, d = c - 1;
			for (; u <= f && u <= d;) {
				let r = e[u], c = t[u] = s ? rY(t[u]) : rX(t[u]);
				if (rU(r, c)) y(r, c, n, null, i, l, o, a, s);
				else break;
				u++;
			}
			for (; u <= f && u <= d;) {
				let r = e[f], u = t[d] = s ? rY(t[d]) : rX(t[d]);
				if (rU(r, u)) y(r, u, n, null, i, l, o, a, s);
				else break;
				f--, d--;
			}
			if (u > f) {
				if (u <= d) {
					let e = d + 1, f = e < c ? t[e].el : r;
					for (; u <= d;) y(null, t[u] = s ? rY(t[u]) : rX(t[u]), n, f, i, l, o, a, s), u++;
				}
			} else if (u > d) for (; u <= f;) F(e[u], i, l, !0), u++;
			else {
				let p, h = u, m = u, g = /* @__PURE__ */ new Map();
				for (u = m; u <= d; u++) {
					let e = t[u] = s ? rY(t[u]) : rX(t[u]);
					null != e.key && g.set(e.key, u);
				}
				let _ = 0, b = d - m + 1, x = !1, w = 0, S = Array(b);
				for (u = 0; u < b; u++) S[u] = 0;
				for (u = h; u <= f; u++) {
					let r, c = e[u];
					if (_ >= b) {
						F(c, i, l, !0);
						continue;
					}
					if (null != c.key) r = g.get(c.key);
					else for (p = m; p <= d; p++) if (0 === S[p - m] && rU(c, t[p])) {
						r = p;
						break;
					}
					void 0 === r ? F(c, i, l, !0) : (S[r - m] = u + 1, r >= w ? w = r : x = !0, y(c, t[r], n, null, i, l, o, a, s), _++);
				}
				let k = x ? function(e) {
					let t, n, r, i, l, o = e.slice(), a = [0], s = e.length;
					for (t = 0; t < s; t++) {
						let s = e[t];
						if (0 !== s) {
							if (e[n = a[a.length - 1]] < s) {
								o[t] = n, a.push(t);
								continue;
							}
							for (r = 0, i = a.length - 1; r < i;) e[a[l = r + i >> 1]] < s ? r = l + 1 : i = l;
							s < e[a[r]] && (r > 0 && (o[t] = a[r - 1]), a[r] = t);
						}
					}
					for (r = a.length, i = a[r - 1]; r-- > 0;) a[r] = i, i = o[i];
					return a;
				}(S) : K;
				for (p = k.length - 1, u = b - 1; u >= 0; u--) {
					let e = m + u, f = t[e], d = t[e + 1], h = e + 1 < c ? d.el || d.placeholder : r;
					0 === S[u] ? y(null, f, n, h, i, l, o, a, s) : x && (p < 0 || u !== k[p] ? V(f, n, h, 2) : p--);
				}
			}
		}, V = (e, t, n, r, i = null) => {
			let { el: a, type: s, transition: u, children: c, shapeFlag: f } = e;
			if (6 & f) return void V(e.component.subTree, t, n, r);
			if (128 & f) return void e.suspense.move(t, n, r);
			if (64 & f) return void s.move(e, t, n, J);
			if (s === rL) {
				l(a, t, n);
				for (let e = 0; e < c.length; e++) V(c[e], t, n, r);
				l(e.anchor, t, n);
				return;
			}
			if (s === rF) return void (({ el: e, anchor: t }, n, r) => {
				let i;
				for (; e && e !== t;) i = h(e), l(e, n, r), e = i;
				l(t, n, r);
			})(e, t, n);
			if (2 !== r && 1 & f && u) if (0 === r) u.beforeEnter(a), l(a, t, n), r_(() => u.enter(a), i);
			else {
				let { leave: r, delayLeave: i, afterLeave: s } = u, c = () => {
					e.ctx.isUnmounted ? o(a) : l(a, t, n);
				}, f = () => {
					a._isLeaving && a[nm](!0), r(a, () => {
						c(), s && s();
					});
				};
				i ? i(a, c, f) : f();
			}
			else l(a, t, n);
		}, F = (e, t, n, r = !1, i = !1) => {
			let l, { type: o, props: a, ref: s, children: u, dynamicChildren: c, shapeFlag: f, patchFlag: d, dirs: p, cacheIndex: h } = e;
			if (-2 === d && (i = !1), null != s && (eH(), nM(s, null, n, e, !0), eG()), null != h && (t.renderCache[h] = void 0), 256 & f) return void t.ctx.deactivate(e);
			let m = 1 & f && p, g = !nI(e);
			if (g && (l = a && a.onVnodeBeforeUnmount) && rZ(l, t, e), 6 & f) W(e.component, n, r);
			else {
				if (128 & f) return void e.suspense.unmount(n, r);
				m && nr(e, null, t, "beforeUnmount"), 64 & f ? e.type.remove(e, t, n, J, r) : c && !c.hasOnce && (o !== rL || d > 0 && 64 & d) ? U(c, t, n, !1, !0) : (o === rL && 384 & d || !i && 16 & f) && U(u, t, n), r && $(e);
			}
			(g && (l = a && a.onVnodeUnmounted) || m) && r_(() => {
				l && rZ(l, t, e), m && nr(e, null, t, "unmounted");
			}, n);
		}, $ = (e) => {
			let { type: t, el: n, anchor: r, transition: i } = e;
			if (t === rL) return void z(n, r);
			if (t === rF) return void (({ el: e, anchor: t }) => {
				let n;
				for (; e && e !== t;) n = h(e), o(e), e = n;
				o(t);
			})(e);
			let l = () => {
				o(n), i && !i.persisted && i.afterLeave && i.afterLeave();
			};
			if (1 & e.shapeFlag && i && !i.persisted) {
				let { leave: t, delayLeave: r } = i, o = () => t(n, l);
				r ? r(e.el, l, o) : o();
			} else l();
		}, z = (e, t) => {
			let n;
			for (; e !== t;) n = h(e), o(e), e = n;
			o(t);
		}, W = (e, t, n) => {
			let { bum: r, scope: i, job: l, subTree: o, um: a, m: s, a: u } = e;
			rS(s), rS(u), r && ew(r), i.stop(), l && (l.flags |= 8, F(o, e, t, n)), a && r_(a, t), r_(() => {
				e.isUnmounted = !0;
			}, t);
		}, U = (e, t, n, r = !1, i = !1, l = 0) => {
			for (let o = l; o < e.length; o++) F(e[o], t, n, r, i);
		}, H = (e) => {
			if (6 & e.shapeFlag) return H(e.component.subTree);
			if (128 & e.shapeFlag) return e.suspense.next();
			let t = h(e.anchor || e.el), n = t && t[ni];
			return n ? h(n) : t;
		}, G = !1, Y = (e, t, n) => {
			null == e ? t._vnode && F(t._vnode, null, null, !0) : y(t._vnode || null, e, t, null, null, null, n), t._vnode = e, G || (G = !0, t4(), t9(), G = !1);
		}, J = {
			p: y,
			um: F,
			m: V,
			r: $,
			mt: A,
			mc: E,
			pc: D,
			pbc: C,
			n: H,
			o: e
		};
		return {
			render: Y,
			hydrate: r,
			createApp: (n = r, function(e, t = null) {
				el(e) || (e = Q({}, e)), null == t || es(t) || (t = null);
				let r = rt(), i = /* @__PURE__ */ new WeakSet(), l = [], o = !1, a = r.app = {
					_uid: rn++,
					_component: e,
					_props: t,
					_container: null,
					_context: r,
					_instance: null,
					version: "3.5.22",
					get config() {
						return r.config;
					},
					set config(v) {},
					use: (e, ...t) => (i.has(e) || (e && el(e.install) ? (i.add(e), e.install(a, ...t)) : el(e) && (i.add(e), e(a, ...t))), a),
					mixin: (e) => (r.mixins.includes(e) || r.mixins.push(e), a),
					component: (e, t) => t ? (r.components[e] = t, a) : r.components[e],
					directive: (e, t) => t ? (r.directives[e] = t, a) : r.directives[e],
					mount(i, l, s) {
						if (!o) {
							let u = a._ceVNode || rq(e, t);
							return u.appContext = r, !0 === s ? s = "svg" : !1 === s && (s = void 0), l && n ? n(u, i) : Y(u, i, s), o = !0, a._container = i, i.__vue_app__ = a, ie(u.component);
						}
					},
					onUnmount(e) {
						l.push(e);
					},
					unmount() {
						o && (tX(l, a._instance, 16), Y(null, a._container), delete a._container.__vue_app__);
					},
					provide: (e, t) => (r.provides[e] = t, a),
					runWithContext(e) {
						let t = rr;
						rr = a;
						try {
							return e();
						} finally {
							rr = t;
						}
					}
				};
				return a;
			})
		};
	}(iB))).createApp(...e), { mount: n } = t;
	return t.mount = (e) => {
		var r, i;
		let l = eo(r = e) ? document.querySelector(r) : r;
		if (!l) return;
		let o = t._component;
		el(o) || o.render || o.template || (o.template = l.innerHTML), 1 === l.nodeType && (l.textContent = "");
		let a = n(l, !1, (i = l) instanceof SVGElement ? "svg" : "function" == typeof MathMLElement && i instanceof MathMLElement ? "mathml" : void 0);
		return l instanceof Element && (l.removeAttribute("v-cloak"), l.setAttribute("data-v-app", "")), a;
	}, t;
})(oS).use(oC).mount("#root");
export { rl as $, lT as A, i4 as B, l1 as C, lR as D, lM as E, lk as F, iU as G, iK as H, lu as I, nd as J, im as K, ln as L, lO as M, lE as N, lX as O, lb as P, ir as Q, lt as R, l0 as S, lI as T, iq as U, iX as V, iG as W, it as X, rK as Y, nC as Z, or as _, l3 as a, rE as at, lJ as b, om as c, tj as ct, l6 as d, tV as dt, t6 as et, ou as f, ot as g, op as h, oc as i, ri as it, lC as j, lA as k, og as l, tS as lt, l9 as m, o_ as n, nB as nt, oy as o, tW as ot, l4 as p, rL as q, oh as r, n$ as rt, l5 as s, tw as st, ob as t, nF as tt, ov as u, tD as ut, ol as v, lP as w, lQ as x, of as y, le as z };
