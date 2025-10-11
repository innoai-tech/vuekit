var t = function(r, e) {
	return (t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, r) {
		t.__proto__ = r;
	} || function(t, r) {
		for (var e in r) Object.prototype.hasOwnProperty.call(r, e) && (t[e] = r[e]);
	})(r, e);
};
function r(r, e) {
	if ("function" != typeof e && null !== e) throw TypeError("Class extends value " + String(e) + " is not a constructor or null");
	function n() {
		this.constructor = r;
	}
	t(r, e), r.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}
function e(t, r, e, n) {
	return new (e || (e = Promise))(function(o, a) {
		function c(t) {
			try {
				u(n.next(t));
			} catch (t) {
				a(t);
			}
		}
		function i(t) {
			try {
				u(n.throw(t));
			} catch (t) {
				a(t);
			}
		}
		function u(t) {
			var r;
			t.done ? o(t.value) : ((r = t.value) instanceof e ? r : new e(function(t) {
				t(r);
			})).then(c, i);
		}
		u((n = n.apply(t, r || [])).next());
	});
}
function n(t, r) {
	var e, n, o, a = {
		label: 0,
		sent: function() {
			if (1 & o[0]) throw o[1];
			return o[1];
		},
		trys: [],
		ops: []
	}, c = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
	return c.next = i(0), c.throw = i(1), c.return = i(2), "function" == typeof Symbol && (c[Symbol.iterator] = function() {
		return this;
	}), c;
	function i(i) {
		return function(u) {
			var l = [i, u];
			if (e) throw TypeError("Generator is already executing.");
			for (; c && (c = 0, l[0] && (a = 0)), a;) try {
				if (e = 1, n && (o = 2 & l[0] ? n.return : l[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, l[1])).done) return o;
				switch (n = 0, o && (l = [2 & l[0], o.value]), l[0]) {
					case 0:
					case 1:
						o = l;
						break;
					case 4: return a.label++, {
						value: l[1],
						done: !1
					};
					case 5:
						a.label++, n = l[1], l = [0];
						continue;
					case 7:
						l = a.ops.pop(), a.trys.pop();
						continue;
					default:
						if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === l[0] || 2 === l[0])) {
							a = 0;
							continue;
						}
						if (3 === l[0] && (!o || l[1] > o[0] && l[1] < o[3])) {
							a.label = l[1];
							break;
						}
						if (6 === l[0] && a.label < o[1]) {
							a.label = o[1], o = l;
							break;
						}
						if (o && a.label < o[2]) {
							a.label = o[2], a.ops.push(l);
							break;
						}
						o[2] && a.ops.pop(), a.trys.pop();
						continue;
				}
				l = r.call(t, a);
			} catch (t) {
				l = [6, t], n = 0;
			} finally {
				e = o = 0;
			}
			if (5 & l[0]) throw l[1];
			return {
				value: l[0] ? l[1] : void 0,
				done: !0
			};
		};
	}
}
function o(t) {
	var r = "function" == typeof Symbol && Symbol.iterator, e = r && t[r], n = 0;
	if (e) return e.call(t);
	if (t && "number" == typeof t.length) return { next: function() {
		return t && n >= t.length && (t = void 0), {
			value: t && t[n++],
			done: !t
		};
	} };
	throw TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function a(t, r) {
	var e = "function" == typeof Symbol && t[Symbol.iterator];
	if (!e) return t;
	var n, o, a = e.call(t), c = [];
	try {
		for (; (void 0 === r || r-- > 0) && !(n = a.next()).done;) c.push(n.value);
	} catch (t) {
		o = { error: t };
	} finally {
		try {
			n && !n.done && (e = a.return) && e.call(a);
		} finally {
			if (o) throw o.error;
		}
	}
	return c;
}
function c(t, r, e) {
	if (e || 2 == arguments.length) for (var n, o = 0, a = r.length; o < a; o++) !n && o in r || (n || (n = Array.prototype.slice.call(r, 0, o)), n[o] = r[o]);
	return t.concat(n || Array.prototype.slice.call(r));
}
function i(t) {
	return this instanceof i ? (this.v = t, this) : new i(t);
}
function u(t, r, e) {
	if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
	var n, o = e.apply(t, r || []), a = [];
	return n = Object.create(("function" == typeof AsyncIterator ? AsyncIterator : Object).prototype), c("next"), c("throw"), c("return", function(t) {
		return function(r) {
			return Promise.resolve(r).then(t, f);
		};
	}), n[Symbol.asyncIterator] = function() {
		return this;
	}, n;
	function c(t, r) {
		o[t] && (n[t] = function(r) {
			return new Promise(function(e, n) {
				a.push([
					t,
					r,
					e,
					n
				]) > 1 || u(t, r);
			});
		}, r && (n[t] = r(n[t])));
	}
	function u(t, r) {
		try {
			var e;
			(e = o[t](r)).value instanceof i ? Promise.resolve(e.value.v).then(l, f) : s(a[0][2], e);
		} catch (t) {
			s(a[0][3], t);
		}
	}
	function l(t) {
		u("next", t);
	}
	function f(t) {
		u("throw", t);
	}
	function s(t, r) {
		t(r), a.shift(), a.length && u(a[0][0], a[0][1]);
	}
}
function l(t) {
	if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
	var r, e = t[Symbol.asyncIterator];
	return e ? e.call(t) : (t = o(t), r = {}, n("next"), n("throw"), n("return"), r[Symbol.asyncIterator] = function() {
		return this;
	}, r);
	function n(e) {
		r[e] = t[e] && function(r) {
			return new Promise(function(n, o) {
				var a = n, c = o, i = (r = t[e](r)).done;
				Promise.resolve(r.value).then(function(t) {
					a({
						value: t,
						done: i
					});
				}, c);
			});
		};
	}
}
function f(t, r) {
	var e = {};
	for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && 0 > r.indexOf(n) && (e[n] = t[n]);
	if (null != t && "function" == typeof Object.getOwnPropertySymbols) for (var o = 0, n = Object.getOwnPropertySymbols(t); o < n.length; o++) 0 > r.indexOf(n[o]) && Object.prototype.propertyIsEnumerable.call(t, n[o]) && (e[n[o]] = t[n[o]]);
	return e;
}
export { e as a, a as c, i, c as l, u as n, r as o, l as r, n as s, f as t, o as u };
