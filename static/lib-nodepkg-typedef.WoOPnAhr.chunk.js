let e = (e) => Object.is(e, null), t = (e) => !!e && "object" == typeof e, r = (e) => !!e && e.constructor == Object, n = (e) => Array.isArray(e), i = (e) => "number" == typeof e && !Number.isNaN(e), a = (e) => "number" == typeof e && !Number.isNaN(e) && Number.isInteger(e), o = (e) => "function" == typeof e && `${e}`.startsWith("class");
var s, c, u, l, f = Symbol.for("immer-nothing"), p = Symbol.for("immer-draftable"), d = Symbol.for("immer-state");
function y(e) {
	throw Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`);
}
var h = Object.getPrototypeOf;
function m(e) {
	return !!e && !!e[d];
}
function v(e) {
	return !!e && (b(e) || Array.isArray(e) || !!e[p] || !!e.constructor?.[p] || j(e) || M(e));
}
var g = Object.prototype.constructor.toString();
function b(e) {
	if (!e || "object" != typeof e) return !1;
	let t = h(e);
	if (null === t) return !0;
	let r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
	return r === Object || "function" == typeof r && Function.toString.call(r) === g;
}
function w(e, t) {
	0 === _(e) ? Reflect.ownKeys(e).forEach((r) => {
		t(r, e[r], e);
	}) : e.forEach((r, n) => t(n, r, e));
}
function _(e) {
	let t = e[d];
	return t ? t.type_ : Array.isArray(e) ? 1 : j(e) ? 2 : 3 * !!M(e);
}
function O(e, t) {
	return 2 === _(e) ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function P(e, t, r) {
	let n = _(e);
	2 === n ? e.set(t, r) : 3 === n ? e.add(r) : e[t] = r;
}
function j(e) {
	return e instanceof Map;
}
function M(e) {
	return e instanceof Set;
}
function S(e) {
	return e.copy_ || e.base_;
}
function E(e, t) {
	if (j(e)) return new Map(e);
	if (M(e)) return new Set(e);
	if (Array.isArray(e)) return Array.prototype.slice.call(e);
	let r = b(e);
	if (!0 !== t && ("class_only" !== t || r)) {
		let t = h(e);
		return null !== t && r ? { ...e } : Object.assign(Object.create(t), e);
	}
	{
		let t = Object.getOwnPropertyDescriptors(e);
		delete t[d];
		let r = Reflect.ownKeys(t);
		for (let n = 0; n < r.length; n++) {
			let i = r[n], a = t[i];
			!1 === a.writable && (a.writable = !0, a.configurable = !0), (a.get || a.set) && (t[i] = {
				configurable: !0,
				writable: !0,
				enumerable: a.enumerable,
				value: e[i]
			});
		}
		return Object.create(h(e), t);
	}
}
function x(e, t = !1) {
	return N(e) || m(e) || !v(e) || (_(e) > 1 && Object.defineProperties(e, {
		set: { value: A },
		add: { value: A },
		clear: { value: A },
		delete: { value: A }
	}), Object.freeze(e), t && Object.values(e).forEach((e) => x(e, !0))), e;
}
function A() {
	y(2);
}
function N(e) {
	return Object.isFrozen(e);
}
var R = {};
function T(e) {
	let t = R[e];
	return t || y(0, e), t;
}
function z(e, t) {
	t && (T("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function k(e) {
	F(e), e.drafts_.forEach(D), e.drafts_ = null;
}
function F(e) {
	e === u && (u = e.parent_);
}
function K(e) {
	return u = {
		drafts_: [],
		parent_: u,
		immer_: e,
		canAutoFreeze_: !0,
		unfinalizedDrafts_: 0
	};
}
function D(e) {
	let t = e[d];
	0 === t.type_ || 1 === t.type_ ? t.revoke_() : t.revoked_ = !0;
}
function $(e, t) {
	t.unfinalizedDrafts_ = t.drafts_.length;
	let r = t.drafts_[0];
	return void 0 !== e && e !== r ? (r[d].modified_ && (k(t), y(4)), v(e) && (e = W(t, e), t.parent_ || I(t, e)), t.patches_ && T("Patches").generateReplacementPatches_(r[d].base_, e, t.patches_, t.inversePatches_)) : e = W(t, r, []), k(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== f ? e : void 0;
}
function W(e, t, r) {
	if (N(t)) return t;
	let n = t[d];
	if (!n) return w(t, (i, a) => C(e, n, t, i, a, r)), t;
	if (n.scope_ !== e) return t;
	if (!n.modified_) return I(e, n.base_, !0), n.base_;
	if (!n.finalized_) {
		n.finalized_ = !0, n.scope_.unfinalizedDrafts_--;
		let t = n.copy_, i = t, a = !1;
		3 === n.type_ && (i = new Set(t), t.clear(), a = !0), w(i, (i, o) => C(e, n, t, i, o, r, a)), I(e, t, !1), r && e.patches_ && T("Patches").generatePatches_(n, r, e.patches_, e.inversePatches_);
	}
	return n.copy_;
}
function C(e, t, r, n, i, a, o) {
	if (m(i)) {
		let o = W(e, i, a && t && 3 !== t.type_ && !O(t.assigned_, n) ? a.concat(n) : void 0);
		if (P(r, n, o), !m(o)) return;
		e.canAutoFreeze_ = !1;
	} else o && r.add(i);
	if (v(i) && !N(i)) {
		if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) return;
		W(e, i), (!t || !t.scope_.parent_) && "symbol" != typeof n && (j(r) ? r.has(n) : Object.prototype.propertyIsEnumerable.call(r, n)) && I(e, i);
	}
}
function I(e, t, r = !1) {
	!e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && x(t, r);
}
var V = {
	get(e, t) {
		if (t === d) return e;
		let r = S(e);
		if (!O(r, t)) {
			var n = e;
			let o = L(r, t);
			return o ? "value" in o ? o.value : o.get?.call(n.draft_) : void 0;
		}
		let o = r[t];
		return e.finalized_ || !v(o) ? o : o === J(e.base_, t) ? (H(e), e.copy_[t] = U(o, e)) : o;
	},
	has: (e, t) => t in S(e),
	ownKeys: (e) => Reflect.ownKeys(S(e)),
	set(e, t, r) {
		let n = L(S(e), t);
		if (n?.set) return n.set.call(e.draft_, r), !0;
		if (!e.modified_) {
			let n = J(S(e), t), i = n?.[d];
			if (i && i.base_ === r) return e.copy_[t] = r, e.assigned_[t] = !1, !0;
			if ((r === n ? 0 !== r || 1 / r == 1 / n : r != r && n != n) && (void 0 !== r || O(e.base_, t))) return !0;
			H(e), G(e);
		}
		return !!(e.copy_[t] === r && (void 0 !== r || t in e.copy_) || Number.isNaN(r) && Number.isNaN(e.copy_[t])) || (e.copy_[t] = r, e.assigned_[t] = !0, !0);
	},
	deleteProperty: (e, t) => (void 0 !== J(e.base_, t) || t in e.base_ ? (e.assigned_[t] = !1, H(e), G(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0),
	getOwnPropertyDescriptor(e, t) {
		let r = S(e), n = Reflect.getOwnPropertyDescriptor(r, t);
		return n ? {
			writable: !0,
			configurable: 1 !== e.type_ || "length" !== t,
			enumerable: n.enumerable,
			value: r[t]
		} : n;
	},
	defineProperty() {
		y(11);
	},
	getPrototypeOf: (e) => h(e.base_),
	setPrototypeOf() {
		y(12);
	}
}, q = {};
function J(e, t) {
	let r = e[d];
	return (r ? S(r) : e)[t];
}
function L(e, t) {
	if (!(t in e)) return;
	let r = h(e);
	for (; r;) {
		let e = Object.getOwnPropertyDescriptor(r, t);
		if (e) return e;
		r = h(r);
	}
}
function G(e) {
	!e.modified_ && (e.modified_ = !0, e.parent_ && G(e.parent_));
}
function H(e) {
	e.copy_ || (e.copy_ = E(e.base_, e.scope_.immer_.useStrictShallowCopy_));
}
function U(e, t) {
	let r = j(e) ? T("MapSet").proxyMap_(e, t) : M(e) ? T("MapSet").proxySet_(e, t) : function(e, t) {
		let r = Array.isArray(e), n = {
			type_: +!!r,
			scope_: t ? t.scope_ : u,
			modified_: !1,
			finalized_: !1,
			assigned_: {},
			parent_: t,
			base_: e,
			draft_: null,
			copy_: null,
			revoke_: null,
			isManual_: !1
		}, i = n, a = V;
		r && (i = [n], a = q);
		let { revoke: o, proxy: s } = Proxy.revocable(i, a);
		return n.draft_ = s, n.revoke_ = o, s;
	}(e, t);
	return (t ? t.scope_ : u).drafts_.push(r), r;
}
w(V, (e, t) => {
	q[e] = function() {
		return arguments[0] = arguments[0][0], t.apply(this, arguments);
	};
}), q.deleteProperty = function(e, t) {
	return q.set.call(this, e, t, void 0);
}, q.set = function(e, t, r) {
	return V.set.call(this, e[0], t, r, e[0]);
};
var B = new class {
	constructor(e) {
		this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (e, t, r) => {
			let n;
			if ("function" == typeof e && "function" != typeof t) {
				let r = t;
				t = e;
				let n = this;
				return function(e = r, ...i) {
					return n.produce(e, (e) => t.call(this, e, ...i));
				};
			}
			if ("function" != typeof t && y(6), void 0 !== r && "function" != typeof r && y(7), v(e)) {
				let i = K(this), a = U(e, void 0), o = !0;
				try {
					n = t(a), o = !1;
				} finally {
					o ? k(i) : F(i);
				}
				return z(i, r), $(n, i);
			}
			if (e && "object" == typeof e) y(1, e);
			else {
				if (void 0 === (n = t(e)) && (n = e), n === f && (n = void 0), this.autoFreeze_ && x(n, !0), r) {
					let t = [], i = [];
					T("Patches").generateReplacementPatches_(e, n, t, i), r(t, i);
				}
				return n;
			}
		}, this.produceWithPatches = (e, t) => {
			let r, n;
			return "function" == typeof e ? (t, ...r) => this.produceWithPatches(t, (t) => e(t, ...r)) : [
				this.produce(e, t, (e, t) => {
					r = e, n = t;
				}),
				r,
				n
			];
		}, "boolean" == typeof e?.autoFreeze && this.setAutoFreeze(e.autoFreeze), "boolean" == typeof e?.useStrictShallowCopy && this.setUseStrictShallowCopy(e.useStrictShallowCopy);
	}
	createDraft(e) {
		var t;
		v(e) || y(8), m(e) && (m(t = e) || y(10, t), e = function e(t) {
			let r;
			if (!v(t) || N(t)) return t;
			let n = t[d];
			if (n) {
				if (!n.modified_) return n.base_;
				n.finalized_ = !0, r = E(t, n.scope_.immer_.useStrictShallowCopy_);
			} else r = E(t, !0);
			return w(r, (t, n) => {
				P(r, t, e(n));
			}), n && (n.finalized_ = !1), r;
		}(t));
		let r = K(this), n = U(e, void 0);
		return n[d].isManual_ = !0, F(r), n;
	}
	finishDraft(e, t) {
		let r = e && e[d];
		r && r.isManual_ || y(9);
		let { scope_: n } = r;
		return z(n, t), $(void 0, n);
	}
	setAutoFreeze(e) {
		this.autoFreeze_ = e;
	}
	setUseStrictShallowCopy(e) {
		this.useStrictShallowCopy_ = e;
	}
	applyPatches(e, t) {
		let r;
		for (r = t.length - 1; r >= 0; r--) {
			let n = t[r];
			if (0 === n.path.length && "replace" === n.op) {
				e = n.value;
				break;
			}
		}
		r > -1 && (t = t.slice(r + 1));
		let n = T("Patches").applyPatches_;
		return m(e) ? n(e, t) : this.produce(e, (e) => n(e, t));
	}
}().produce;
s = l || (l = {}), function(e) {
	var t = "object" == typeof globalThis ? globalThis : "object" == typeof global ? global : "object" == typeof self ? self : "object" == typeof this ? this : function() {
		throw ReferenceError("globalThis could not be found. Please polyfill globalThis before loading this module.");
	}(), r = n(s);
	function n(e, t) {
		return function(r, n) {
			Object.defineProperty(e, r, {
				configurable: !0,
				writable: !0,
				value: n
			}), t && t(r, n);
		};
	}
	void 0 !== t.Reflect && (r = n(t.Reflect, r)), e(r, t), void 0 === t.Reflect && (t.Reflect = s);
}(function(e, t) {
	var r, n = "function" == typeof Symbol, i = n && void 0 !== Symbol.toPrimitive ? Symbol.toPrimitive : N("Symbol.toPrimitive not found."), a = n && void 0 !== Symbol.iterator ? Symbol.iterator : N("Symbol.iterator not found."), o = Object.getPrototypeOf(Function), s = "function" == typeof Map && "function" == typeof Map.prototype.entries ? Map : N("A valid Map constructor could not be found."), c = "function" == typeof Set && "function" == typeof Set.prototype.entries ? Set : N("A valid Set constructor could not be found."), u = "function" == typeof WeakMap ? WeakMap : N("A valid WeakMap constructor could not be found."), l = n ? Symbol.for("@reflect-metadata:registry") : void 0, f = (!g(l) && w(t.Reflect) && Object.isExtensible(t.Reflect) && (r = t.Reflect[l]), g(r) && (r = function() {
		g(l) || void 0 === t.Reflect || l in t.Reflect || "function" != typeof t.Reflect.defineMetadata || (r = (e = t.Reflect).defineMetadata, n = e.hasOwnMetadata, i = e.getOwnMetadata, a = e.getOwnMetadataKeys, o = e.deleteMetadata, f = new u(), p = {
			isProviderFor: function(e, t) {
				var r = f.get(e);
				return !!(!g(r) && r.has(t)) || !!a(e, t).length && (g(r) && (r = new c(), f.set(e, r)), r.add(t), !0);
			},
			OrdinaryDefineOwnMetadata: r,
			OrdinaryHasOwnMetadata: n,
			OrdinaryGetOwnMetadata: i,
			OrdinaryOwnMetadataKeys: a,
			OrdinaryDeleteMetadata: o
		});
		var e, r, n, i, a, o, f, p, d, y, h, m = new u(), v = {
			registerProvider: function(e) {
				if (!Object.isExtensible(v)) throw Error("Cannot add provider to a frozen registry.");
				switch (!0) {
					case p === e: break;
					case g(d):
						d = e;
						break;
					case d === e: break;
					case g(y):
						y = e;
						break;
					case y === e: break;
					default: void 0 === h && (h = new c()), h.add(e);
				}
			},
			getProvider: b,
			setProvider: function(e, t, r) {
				if (!function(e) {
					if (g(e)) throw TypeError();
					return d === e || y === e || !g(h) && h.has(e);
				}(r)) throw Error("Metadata provider not registered.");
				var n = b(e, t);
				if (n !== r) {
					if (!g(n)) return !1;
					var i = m.get(e);
					g(i) && (i = new s(), m.set(e, i)), i.set(t, r);
				}
				return !0;
			}
		};
		return v;
		function b(e, t) {
			var r, n = m.get(e);
			return g(n) || (r = n.get(t)), g(r) && (r = function(e, t) {
				if (!g(d)) {
					if (d.isProviderFor(e, t)) return d;
					if (!g(y)) {
						if (y.isProviderFor(e, t)) return d;
						if (!g(h)) for (var r = S(h);;) {
							var n = E(r);
							if (!n) return;
							var i = n.value;
							if (i.isProviderFor(e, t)) return x(r), i;
						}
					}
				}
				if (!g(p) && p.isProviderFor(e, t)) return p;
			}(e, t), g(r) || (g(n) && (n = new s(), m.set(e, n)), n.set(t, r))), r;
		}
	}()), !g(l) && w(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, l, {
		enumerable: !1,
		configurable: !1,
		writable: !1,
		value: r
	}), r), p = function(e) {
		var t = new u(), r = {
			isProviderFor: function(e, r) {
				var n = t.get(e);
				return !g(n) && n.has(r);
			},
			OrdinaryDefineOwnMetadata: function(e, t, r, i) {
				n(r, i, !0).set(e, t);
			},
			OrdinaryHasOwnMetadata: function(e, t, r) {
				var i = n(t, r, !1);
				return !g(i) && !!i.has(e);
			},
			OrdinaryGetOwnMetadata: function(e, t, r) {
				var i = n(t, r, !1);
				if (!g(i)) return i.get(e);
			},
			OrdinaryOwnMetadataKeys: function(e, t) {
				var r = [], i = n(e, t, !1);
				if (g(i)) return r;
				for (var a = S(i.keys()), o = 0;;) {
					var s = E(a);
					if (!s) return r.length = o, r;
					var c = s.value;
					try {
						r[o] = c;
					} catch (e) {
						try {
							x(a);
						} finally {
							throw e;
						}
					}
					o++;
				}
			},
			OrdinaryDeleteMetadata: function(e, r, i) {
				var a = n(r, i, !1);
				if (g(a) || !a.delete(e)) return !1;
				if (0 === a.size) {
					var o = t.get(r);
					g(o) || (o.delete(i), 0 === o.size && t.delete(o));
				}
				return !0;
			}
		};
		return f.registerProvider(r), r;
		function n(n, i, a) {
			var o = t.get(n), c = !1;
			if (g(o)) {
				if (!a) return;
				o = new s(), t.set(n, o), c = !0;
			}
			var u = o.get(i);
			if (g(u)) {
				if (!a) return;
				if (u = new s(), o.set(i, u), !e.setProvider(n, i, r)) throw o.delete(i), c && t.delete(n), Error("Wrong provider for target.");
			}
			return u;
		}
	}(f);
	function d(e, t, r) {
		var n = R(t, r, !1);
		return !g(n) && !!n.OrdinaryHasOwnMetadata(e, t, r);
	}
	function y(e, t, r) {
		var n = R(t, r, !1);
		if (!g(n)) return n.OrdinaryGetOwnMetadata(e, t, r);
	}
	function h(e, t, r, n) {
		R(r, n, !0).OrdinaryDefineOwnMetadata(e, t, r, n);
	}
	function m(e, t) {
		var r = R(e, t, !1);
		return r ? r.OrdinaryOwnMetadataKeys(e, t) : [];
	}
	function v(e) {
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
	function g(e) {
		return void 0 === e;
	}
	function b(e) {
		return null === e;
	}
	function w(e) {
		return "object" == typeof e ? null !== e : "function" == typeof e;
	}
	e("decorate", function(e, t, r, n) {
		if (g(r)) {
			if (!O(e) || !j(t)) throw TypeError();
			for (var i = e, a = t, o = i.length - 1; o >= 0; --o) {
				var s = (0, i[o])(a);
				if (!g(s) && !b(s)) {
					if (!j(s)) throw TypeError();
					a = s;
				}
			}
			return a;
		}
		if (!O(e) || !w(t) || !w(n) && !g(n) && !b(n)) throw TypeError();
		return b(n) && (n = void 0), function(e, t, r, n) {
			for (var i = e.length - 1; i >= 0; --i) {
				var a = (0, e[i])(t, r, n);
				if (!g(a) && !b(a)) {
					if (!w(a)) throw TypeError();
					n = a;
				}
			}
			return n;
		}(e, t, r = _(r), n);
	}), e("metadata", function(e, t) {
		return function(r, n) {
			if (!w(r) || !g(n) && !function(e) {
				switch (v(e)) {
					case 3:
					case 4: return !0;
					default: return !1;
				}
			}(n)) throw TypeError();
			h(e, t, r, n);
		};
	}), e("defineMetadata", function(e, t, r, n) {
		if (!w(r)) throw TypeError();
		return g(n) || (n = _(n)), h(e, t, r, n);
	}), e("hasMetadata", function(e, t, r) {
		if (!w(t)) throw TypeError();
		return g(r) || (r = _(r)), function e(t, r, n) {
			if (d(t, r, n)) return !0;
			var i = A(r);
			return !b(i) && e(t, i, n);
		}(e, t, r);
	}), e("hasOwnMetadata", function(e, t, r) {
		if (!w(t)) throw TypeError();
		return g(r) || (r = _(r)), d(e, t, r);
	}), e("getMetadata", function(e, t, r) {
		if (!w(t)) throw TypeError();
		return g(r) || (r = _(r)), function e(t, r, n) {
			if (d(t, r, n)) return y(t, r, n);
			var i = A(r);
			if (!b(i)) return e(t, i, n);
		}(e, t, r);
	}), e("getOwnMetadata", function(e, t, r) {
		if (!w(t)) throw TypeError();
		return g(r) || (r = _(r)), y(e, t, r);
	}), e("getMetadataKeys", function(e, t) {
		if (!w(e)) throw TypeError();
		return g(t) || (t = _(t)), function e(t, r) {
			var n = m(t, r), i = A(t);
			if (null === i) return n;
			var a = e(i, r);
			if (a.length <= 0) return n;
			if (n.length <= 0) return a;
			for (var o = new c(), s = [], u = 0; u < n.length; u++) {
				var l = n[u], f = o.has(l);
				f || (o.add(l), s.push(l));
			}
			for (var p = 0; p < a.length; p++) {
				var l = a[p], f = o.has(l);
				f || (o.add(l), s.push(l));
			}
			return s;
		}(e, t);
	}), e("getOwnMetadataKeys", function(e, t) {
		if (!w(e)) throw TypeError();
		return g(t) || (t = _(t)), m(e, t);
	}), e("deleteMetadata", function(e, t, r) {
		if (!w(t)) throw TypeError();
		g(r) || (r = _(r));
		var n = R(t, r, !1);
		return !g(n) && n.OrdinaryDeleteMetadata(e, t, r);
	});
	function _(e) {
		var t = function(e, t) {
			switch (v(e)) {
				case 0:
				case 1:
				case 2:
				case 3:
				case 4:
				case 5: return e;
			}
			var r = "string", n = M(e, i);
			if (void 0 !== n) {
				var a = n.call(e, r);
				if (w(a)) throw TypeError();
				return a;
			}
			return function(e, t) {
				if ("string" === t) {
					var r = e.toString;
					if (P(r)) {
						var n = r.call(e);
						if (!w(n)) return n;
					}
					var i = e.valueOf;
					if (P(i)) {
						var n = i.call(e);
						if (!w(n)) return n;
					}
				} else {
					var i = e.valueOf;
					if (P(i)) {
						var n = i.call(e);
						if (!w(n)) return n;
					}
					var a = e.toString;
					if (P(a)) {
						var n = a.call(e);
						if (!w(n)) return n;
					}
				}
				throw TypeError();
			}(e, r);
		}(e, 0);
		return "symbol" == typeof t ? t : "" + t;
	}
	function O(e) {
		return Array.isArray ? Array.isArray(e) : e instanceof Object ? e instanceof Array : "[object Array]" === Object.prototype.toString.call(e);
	}
	function P(e) {
		return "function" == typeof e;
	}
	function j(e) {
		return "function" == typeof e;
	}
	function M(e, t) {
		var r = e[t];
		if (null != r) {
			if (!P(r)) throw TypeError();
			return r;
		}
	}
	function S(e) {
		var t = M(e, a);
		if (!P(t)) throw TypeError();
		var r = t.call(e);
		if (!w(r)) throw TypeError();
		return r;
	}
	function E(e) {
		var t = e.next();
		return !t.done && t;
	}
	function x(e) {
		var t = e.return;
		t && t.call(e);
	}
	function A(e) {
		var t = Object.getPrototypeOf(e);
		if ("function" != typeof e || e === o || t !== o) return t;
		var r = e.prototype, n = r && Object.getPrototypeOf(r);
		if (null == n || n === Object.prototype) return t;
		var i = n.constructor;
		return "function" != typeof i || i === e ? t : i;
	}
	function N(e) {
		throw e;
	}
	function R(e, t, r) {
		var n = f.getProvider(e, t);
		if (!g(n)) return n;
		if (r) {
			if (f.setProvider(e, t, p)) return p;
			throw Error("Illegal state.");
		}
	}
});
var X = class {
	static getOwnPropertyNames(e) {
		return Reflect.getMetadataKeys(e);
	}
	static get(e, t) {
		return Reflect.getMetadata(t, e);
	}
	static define(e, t, r, n) {
		if (e && e.constructor && e.constructor != Object) {
			if (r && r.constructor && r.call && r.apply) return void Reflect.defineMetadata(t, B(Reflect.getMetadata(t, e) ?? n ?? {}, r), e);
			Reflect.defineMetadata(t, r, e);
		}
	}
};
let Q = {
	path: [],
	branch: []
};
var Y = class extends TypeError {
	value;
	key;
	type;
	refinement;
	path;
	branch;
	failures;
	constructor(e, t) {
		let r, { message: n, explanation: i,...a } = e, { path: o } = e, s = 0 === o.length ? n : `At path: ${o.join(".")} -- ${n}`;
		super(i ?? s), null != i && (this.cause = s), Object.assign(this, a), this.name = this.constructor.name, this.failures = () => r ??= [e, ...t()];
	}
};
let Z = (e) => !!e && e[ee] == ee, ee = Symbol("Type");
function* et(e, t, r, n) {
	let i, a = e;
	for (let e of (("object" != typeof (i = a) || "function" != typeof i[Symbol.iterator]) && (a = [a]), a)) {
		let i = function(e, t, r, n) {
			if (!0 === e) return;
			let i = {}, { path: a, branch: o, node: s } = t, { type: c } = r, { refinement: u, message: l = void 0 === n ? "Required" : `Expected a value of type \`${c}\`${u ? ` with refinement \`${u}\`` : ""}, but received: \`${n}\`` } = i = !1 === e ? {} : "string" == typeof e ? { message: e } : e;
			return {
				...i,
				value: n,
				type: c,
				refinement: u,
				key: a[a.length - 1],
				path: a,
				branch: o,
				node: s,
				message: l
			};
		}(e, t, r, n);
		i && (yield i);
	}
}
function er(e, t, r = {}) {
	let n = en(e, t, r), i = function(e) {
		let { done: t, value: r } = e.next();
		return t ? void 0 : r;
	}(n);
	return i[0] ? [new Y(i[0], function* () {
		for (let e of n) e[0] && (yield e[0]);
	}), void 0] : [void 0, i[1]];
}
function* en(e, r, n = {}) {
	let { path: i = [], branch: a = [e], node: o = { current: r }, coerce: s = !1, mask: c = !1 } = n, u = {
		mask: c,
		path: i,
		branch: a,
		node: o
	}, l = e;
	if (s) {
		let t = r.coercer(e, u);
		void 0 != t && (l = t);
	}
	let f = ei.valid;
	for (let t of et(r.validator(l, u), u, r, e)) t.explanation = n.message, f = ei.not_valid, yield [t, void 0];
	for (let [e, p, d] of r.entries(l, u)) for (let r of en(p, d, {
		path: void 0 === e ? i : [...i, e],
		branch: void 0 === e ? a : [...a, p],
		node: void 0 === e ? o : {
			current: d,
			parent: o
		},
		coerce: s,
		mask: c,
		message: n.message
	})) r[0] ? (f = null != r[0].refinement ? ei.not_refined : ei.not_valid, yield [r[0], void 0]) : s && (p = r[1], void 0 === e ? l = p : l instanceof Map ? l.set(e, p) : l instanceof Set ? l.add(p) : t(l) && (l[e] = p));
	if (f !== ei.not_valid) for (let t of et(r.refiner(l, u), u, r, e)) t.explanation = n.message, f = ei.not_refined, yield [t, void 0];
	f === ei.valid && (yield [void 0, l]);
}
var ei = ((c = ei || {})[c.valid = 0] = "valid", c[c.not_refined = 1] = "not_refined", c[c.not_valid = 2] = "not_valid", c);
let ea = (e) => (...t) => {
	let r = e(...t), n = (e, t) => {
		let n = X.get(e, t) ?? {};
		X.define(e, t, {
			...n,
			type: r
		});
	};
	return n.toString = () => `@type:${r.type}`, new Proxy(n, {
		ownKeys: () => [...Object.getOwnPropertyNames(r), ...Object.getOwnPropertySymbols(r)],
		get: (e, t) => r[t]
	});
}, eo = (e) => (...t) => {
	let r = (r) => e(r, ...t);
	return new Proxy((e, t) => {
		X.define(e, t, (e) => {
			(e.modifies ??= []).push({ modify: r });
		}, {});
	}, { get(e, t) {
		if ("modify" == t) return r;
	} });
};
var es = class e {
	static RecordKey = Symbol("RecordKey");
	static meta = Symbol("meta");
	static optional = Symbol("optional");
	static underlying = Symbol("underlying");
	static unwrap = Symbol("unwrap");
	static extractSchema = (e) => new el().toValue(e);
	static extractMeta = (t) => new el().toValue(t.meta ?? t[e.meta]);
	static create(t, n, i) {
		let a, o = n ?? t[e.underlying]?.schema ?? {};
		return new Proxy({}, {
			ownKeys(e) {
				let r = /* @__PURE__ */ new Map();
				if (i) {
					if (t[i]) for (let e of Object.getOwnPropertyNames(t[i])) r.set(e, e);
					if (o && o[i]) for (let e of Object.getOwnPropertyNames(o[i])) r.set(e, e);
				} else {
					for (let e of Object.getOwnPropertyNames(t)) r.set(e, e);
					if (o) for (let e of Object.getOwnPropertyNames(o)) r.set(e, e);
				}
				return [...r.keys()];
			},
			get(n, s) {
				if (s === e.meta) return a ??= e.create(t, o, e.meta);
				if (i) {
					if (r(t)) {
						let e = t?.[i]?.[s];
						if (void 0 !== e) return e;
					}
					return o ? o?.[i]?.[s] : void 0;
				}
				if (r(t)) {
					let e = t?.[s];
					if (void 0 !== e) return e;
				}
				return o ? o[s] : void 0;
			}
		});
	}
	static schemaProp(e, t) {
		return ec(e.schema, t);
	}
	static metaProp(e, t) {
		return eu(e.schema, t);
	}
}, ec = (e, t) => {
	if (r(e)) return e[t] ?? (e[es.unwrap] ? ec(e[es.unwrap]().schema, t) : void 0);
}, eu = (e, t) => {
	if (r(e)) return e[es.meta]?.[t] ?? (e[es.unwrap] ? eu(e[es.unwrap]().schema, t) : void 0);
}, el = class {
	constructor(e = !1) {
		this.deref = e;
	}
	toValue(e) {
		if (e) {
			if (void 0 !== e.schema) return this.toValue(e.schema);
			if (this.deref && e[es.unwrap]) return this.toValue(e[es.unwrap]());
			if (n(e)) return this.toArray(e);
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
}, ef = class e {
	static parse(t) {
		if ("" === t) return [];
		if ("/" === t) return [""];
		if ("/" !== t.charAt(0)) throw Error("Invalid JSON pointer: " + t);
		let r = t.substring(1).split(/\//);
		return r.map((t, n) => e.unescape(t, n === r.length - 1));
	}
	static create(t = []) {
		return 0 === t.length ? "" : "/" + t.map(e.escape).join("/");
	}
	static unescape(e, t) {
		return "" == e && t ? es.RecordKey : e.replace(/~1/g, "/").replace(/~0/g, "~");
	}
	static escape(e) {
		return e == es.RecordKey ? "" : e.toString().replace(/~/g, "~0").replace(/\//g, "~1");
	}
	static get(t, r) {
		let n = Array.isArray(r) ? r : e.parse(r);
		for (let e = 0; e < n.length; e++) {
			let r = n[e];
			if (e > 0 && r == es.RecordKey) return n[e - 1];
			if (!("object" == typeof t && r in t)) throw Error("Invalid reference token: " + r);
			t = t[r];
		}
		return t;
	}
}, ep = class e {
	static define = ea((t = () => !0) => new class extends e {
		validator(e, r) {
			return t(e, r);
		}
	}(null));
	static fromTypeObject = (t, r) => {
		let n = t.type ?? r ?? new e({});
		return t.modifies ? n.use(...t.modifies ?? []) : n;
	};
	[ee] = ee;
	schema;
	constructor(e) {
		if (e) {
			this.schema = es.create(e);
			return;
		}
		this.schema = e ?? null;
	}
	get meta() {
		return this.schema ? this.schema[es.meta] : {};
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
		if ("string" == typeof e) {
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
	*entries(e, t = Q) {}
	validate(e, t = {}) {
		return er(e, this, t);
	}
	create(e) {
		let t = er(e, this, { coerce: !0 });
		if (t[0]) throw t[0];
		return t[1];
	}
	mask(e) {
		let t = er(e, this, {
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
		return eh.create(this);
	}
	default(e) {
		return ey.create(this, e);
	}
}, ed = class e extends ep {
	static of(t, r) {
		return new e({
			...r,
			[es.underlying]: t
		});
	}
	static refine(t, r, n) {
		return new class extends e {
			*refiner(e, i) {
				for (let a of (yield* this.unwrap.refiner(e, i), et(r(e, i), i, t, e))) yield {
					...a,
					refinement: Object.keys(n).join(",")
				};
			}
		}({
			...n,
			[es.underlying]: t
		});
	}
	get unwrap() {
		let e = this.schema[es.unwrap];
		return e ? e() : this.schema[es.underlying];
	}
	get type() {
		return this.unwrap.type;
	}
	*entries(e, t = Q) {
		yield* this.unwrap.entries(e, {
			...t,
			node: {
				current: this,
				parent: t.node
			}
		});
	}
	validator(e, t) {
		return et(this.unwrap.validator(e, t), t, this, e);
	}
	refiner(e, t) {
		return et(this.unwrap.refiner(e, t), t, this, e);
	}
	coercer(e, t) {
		return this.unwrap.coercer(e, t);
	}
}, ey = class e extends ed {
	static create = ea((t, r) => new e({
		default: r,
		[es.underlying]: t
	}));
	coercer(e, t) {
		return void 0 === e ? this.schema.default : super.unwrap.coercer(e, t);
	}
}, eh = class e extends ed {
	static create = ea((t) => new e({
		[es.underlying]: t,
		[es.optional]: t
	}));
	refiner(e, t) {
		return void 0 === e || super.unwrap.refiner(e, t);
	}
	validator(e, t) {
		return void 0 === e || super.unwrap.validator(e, t);
	}
}, em = class e extends ed {
	static create = ea((t, r) => new e({
		$ref: t,
		[es.unwrap]: r
	}));
}, ev = class e extends ep {
	static create = ea(() => new e());
	constructor() {
		super({});
	}
	get type() {
		return "any";
	}
	validator() {
		return !0;
	}
}, eg = class t extends ep {
	static create = ea(() => new t({ type: "null" }));
	get type() {
		return "null";
	}
	validator(t, r) {
		return e(t);
	}
	coercer(e, t) {
		return e;
	}
}, eb = class t extends ep {
	static create = ea(() => new t({ type: "string" }));
	get type() {
		return this.schema.type;
	}
	validator(e, t) {
		return "string" == typeof e;
	}
	coercer(t, r) {
		return void 0 === t || e(t) ? t : String(t);
	}
}, ew = class e extends ep {
	static create = ea(() => new e({ type: "number" }));
	get type() {
		return this.schema.type;
	}
	validator(e, t) {
		return i(e);
	}
	coercer(e, t) {
		try {
			let t = void 0 != e ? parseFloat(String(e)) : void 0;
			if (i(t)) return t;
		} catch (e) {}
	}
}, e_ = class e extends ep {
	static create = ea(() => new e({ type: "integer" }));
	get type() {
		return this.schema.type;
	}
	validator(e, t) {
		return a(e);
	}
	coercer(e, t) {
		try {
			let t = void 0 != e ? parseInt(String(e)) : void 0;
			return a(t) ? t : void 0;
		} catch (e) {
			return;
		}
	}
}, eO = class e extends ep {
	static create = ea(() => new e({ type: "boolean" }));
	get type() {
		return this.schema.type;
	}
	validator(e, t) {
		return "boolean" == typeof e;
	}
	coercer(e, t) {
		try {
			return void 0 != e ? "true" === String(e) : void 0;
		} catch (e) {
			return;
		}
	}
}, eP = class e extends ep {
	static create = ea(() => new e({
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
}, ej = class e extends ep {
	static create = ea(e.createEnum);
	static createEnum(t) {
		return new e({ enum: t });
	}
	static literal = ea((t) => new e({ enum: [t] }));
	static nativeEnum = ea((t) => new e({ enum: Object.values(t) }));
	get type() {
		return "enums";
	}
	validator(e, t) {
		return this.schema.enum.includes(e);
	}
	coercer(e, t) {
		return e;
	}
}, eM = class e extends ep {
	static create = ea(() => new e(!1));
	get type() {
		return "never";
	}
	validator(e, t) {
		return !1;
	}
	coercer(e, t) {
		return e;
	}
}, eS = class e extends ep {
	static create(t) {
		let r = (e = {}) => {
			let t = [];
			for (let [r, n] of Object.entries(e)) es.schemaProp(n, es.optional) || t.push(r);
			return t;
		};
		return ea(() => {
			if (t) {
				if (o(t)) {
					let n = new t(), i = {};
					for (let [e, t] of Object.entries(n)) i[e] = ej.literal(t);
					for (let e of X.getOwnPropertyNames(n)) {
						let t = X.get(n, e);
						if (t) {
							let r = ep.fromTypeObject(t, i[e]);
							e in i ? i[e] = r.default(i[e].schema?.enum?.[0]) : i[e] = r;
						}
					}
					return new e({
						type: "object",
						properties: i,
						required: r(i),
						additionalProperties: eM.create()
					});
				}
				return new e({
					type: "object",
					properties: t,
					required: r(t),
					additionalProperties: eM.create()
				});
			}
			return new e({
				type: "object",
				properties: {},
				required: [],
				additionalProperties: eM.create()
			});
		})();
	}
	get type() {
		return this.schema.type;
	}
	*entries(e, r = Q) {
		if (t(e)) {
			let t = new Set(Object.keys(e));
			if (this.schema.properties) for (let r in this.schema.properties) t.delete(r), yield [
				r,
				e[r],
				this.schema.properties[r]
			];
			if (r.node?.current.type !== "intersection") for (let r of t) yield [
				r,
				e[r],
				this.schema.additionalProperties
			];
		}
	}
	validator(e, r) {
		return t(e);
	}
	coercer(e, r) {
		if (t(e)) {
			let t = { ...e };
			if (r.mask) {
				let e = this.schema.properties;
				if (e) for (let r in t) void 0 === e[r] && delete t[r];
			}
			return t;
		}
		return super.coercer(e, r);
	}
}, eE = class e extends ep {
	static create = ea((t, r) => new e({
		type: "object",
		propertyNames: t,
		additionalProperties: r
	}));
	get type() {
		return "record";
	}
	*entries(e) {
		if (t(e)) for (let [t, r] of Object.entries(e)) yield [
			es.RecordKey,
			t,
			this.schema.propertyNames
		], yield [
			t,
			r,
			this.schema.additionalProperties
		];
	}
	validator(e) {
		return t(e);
	}
}, ex = class e extends ep {
	static create = ea((t) => new e({
		type: "array",
		items: t
	}));
	get type() {
		return this.schema.type;
	}
	*entries(e, t = Q) {
		if (Array.isArray(e)) for (let [t, r] of e.entries()) yield [
			t,
			r,
			this.schema.items
		];
	}
	validator(e) {
		return n(e);
	}
	coercer(e) {
		return n(e) ? e.slice() : e;
	}
}, eA = class e extends ep {
	static create = ea((t) => new e({
		type: "array",
		items: t
	}));
	get type() {
		return "tuple";
	}
	*entries(e, t) {
		if (n(e)) {
			let t = Math.max(this.schema.items.length, e.length);
			for (let r = 0; r < t; r++) yield [
				r,
				e[r],
				this.schema.items[r] ?? eM.create()
			];
		}
	}
	validator(e) {
		return n(e) && e.length === this.schema.items.length;
	}
	coercer(e) {
		return n(e) ? e.slice() : e;
	}
}, eN = class e extends ep {
	static create = ea((...t) => new e({ allOf: t }));
	get type() {
		return "intersection";
	}
	*entries(e, t = Q) {
		for (let r of this.schema.allOf) yield* r.entries(e, t);
	}
	*validator(e, t) {
		for (let r of this.schema.allOf) yield* et(r.validator(e, t), t, this, e);
	}
	*refiner(e, t) {
		for (let r of this.schema.allOf) yield* et(r.refiner(e, t), t, this, e);
	}
}, eR = class e extends ep {
	static create = ea((...t) => new e({ oneOf: t }));
	static discriminatorMapping(t, ...r) {
		return ea(() => {
			let n = [];
			if (1 == r.length && r[0].constructor == Object) for (let [e, i] of Object.entries(r[0])) if (es.schemaProp(i, "$ref")) n.push(i);
			else {
				let r = { [t]: ej.literal(e) };
				for (let [e, t, n] of i.entries({}, Q)) r[String(e)] = n;
				n.push(eS.create(r));
			}
			else for (let e of r) o(e) && n.push(eS.create(e));
			return new e({
				oneOf: n,
				discriminator: { propertyName: t }
			});
		})();
	}
	_discriminatorPropName;
	discriminatorPropType(e) {
		return this._discriminatorPropName ??= (() => {
			let t = this.schema.discriminator?.propertyName ?? "", r = [], n = [];
			for (let e of this.schema.oneOf) {
				let i = es.schemaProp(e, "properties")[t];
				if (!i) continue;
				let a = i.schema.enum;
				a && r.push(...a), n.push(i.meta);
			}
			return ed.of(ej.create(r), { [es.meta]: es.create(n[0], e.node?.current.meta ?? {}) });
		})();
	}
	_discriminatorMappingProps = /* @__PURE__ */ new Map();
	discriminatorMapping(e, t, r) {
		if (this._discriminatorMappingProps.get(t)) return this._discriminatorMappingProps.get(t);
		if ((this.discriminatorPropType(r)?.schema?.enum ?? []).includes(t)) {
			let r = this.schema.oneOf.find((r) => {
				let n = es.schemaProp(r, "properties")[e];
				if (n) {
					let [e, r] = n.validate(t);
					return !e;
				}
				return !1;
			});
			if (r) {
				if (!this._discriminatorMappingProps.has(t)) {
					let n = {};
					for (let [t, i] of Object.entries(es.schemaProp(r, "properties"))) t !== e && (n[t] = i);
					this._discriminatorMappingProps.set(t, n);
				}
				return this._discriminatorMappingProps.get(t);
			}
		}
		return {};
	}
	*entries(e, t = Q) {
		if (this.schema.discriminator) {
			let r = this.schema.discriminator.propertyName, n = e?.[r];
			yield* eS.create({
				[r]: this.discriminatorPropType(t),
				...this.discriminatorMapping(r, n, t)
			}).entries(e, t);
		}
	}
	get type() {
		return "union";
	}
	coercer(e) {
		for (let t of this.schema.oneOf) {
			let [r, n] = er(e, t, { coerce: !0 });
			if (!r) return n;
		}
		return e;
	}
	validator(e, t) {
		if (this.schema.discriminator) {
			let r = this.schema.discriminator.propertyName, n = e?.[r];
			return eS.create({
				[r]: this.discriminatorPropType(t),
				...this.discriminatorMapping(r, n, t)
			}).validator(e, t);
		}
		let r = [];
		for (let n of this.schema.oneOf) {
			let [ ...i] = en(e, n, t), [a] = i;
			if (a && !a[0]) return [];
			for (let [e] of i) e && r.push(e);
		}
		return [`Expected the value to satisfy a union of \`${this.schema.oneOf.map((e) => e.type).join(" | ")}\`, but received: ${e}`, ...r];
	}
};
em.create;
let eT = ev.create;
eM.create, eg.create;
let ez = eb.create, ek = eo((e, t, r) => ed.refine(e, (e) => !!e && e.length >= t || (r ?? `Expected string value length great than or equal ${t}, but received "${e}"`), { minLength: t }));
ew.create;
let eF = e_.create, eK = eO.create;
eP.create;
let eD = ej.create, e$ = ej.nativeEnum;
ej.literal;
let eW = eS.create, eC = eE.create;
eA.create;
let eI = ex.create;
eN.create;
let eV = eR.create;
eR.discriminatorMapping;
let eq = ep.define;
ed.refine;
let eJ = eo((e) => eh.create(e)), eL = eo((e, t) => ed.of(e, { [es.meta]: t }));
export { Q as _, eq as a, ek as c, eJ as d, eC as f, es as g, ef as h, eK as i, e$ as l, eV as m, eT as n, eD as o, ez as p, eI as r, eF as s, eL as t, eW as u, Z as v, B as y };
