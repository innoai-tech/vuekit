var t = function(n, r) {
	return (t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, n) {
		t.__proto__ = n;
	} || function(t, n) {
		for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
	})(n, r);
};
function n(n, r) {
	if ("function" != typeof r && null !== r) throw TypeError("Class extends value " + String(r) + " is not a constructor or null");
	function e() {
		this.constructor = n;
	}
	t(n, r), n.prototype = null === r ? Object.create(r) : (e.prototype = r.prototype, new e());
}
function r(t, n) {
	var r = {};
	for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && 0 > n.indexOf(e) && (r[e] = t[e]);
	if (null != t && "function" == typeof Object.getOwnPropertySymbols) for (var o = 0, e = Object.getOwnPropertySymbols(t); o < e.length; o++) 0 > n.indexOf(e[o]) && Object.prototype.propertyIsEnumerable.call(t, e[o]) && (r[e[o]] = t[e[o]]);
	return r;
}
function e(t, n, r, e) {
	return new (r || (r = Promise))(function(o, a) {
		function i(t) {
			try {
				l(e.next(t));
			} catch (t) {
				a(t);
			}
		}
		function c(t) {
			try {
				l(e.throw(t));
			} catch (t) {
				a(t);
			}
		}
		function l(t) {
			var n;
			t.done ? o(t.value) : ((n = t.value) instanceof r ? n : new r(function(t) {
				t(n);
			})).then(i, c);
		}
		l((e = e.apply(t, n || [])).next());
	});
}
function o(t, n) {
	var r, e, o, a, i = {
		label: 0,
		sent: function() {
			if (1 & o[0]) throw o[1];
			return o[1];
		},
		trys: [],
		ops: []
	};
	return a = {
		next: c(0),
		throw: c(1),
		return: c(2)
	}, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
		return this;
	}), a;
	function c(a) {
		return function(c) {
			var l = [a, c];
			if (r) throw TypeError("Generator is already executing.");
			for (; i;) try {
				if (r = 1, e && (o = 2 & l[0] ? e.return : l[0] ? e.throw || ((o = e.return) && o.call(e), 0) : e.next) && !(o = o.call(e, l[1])).done) return o;
				switch (e = 0, o && (l = [2 & l[0], o.value]), l[0]) {
					case 0:
					case 1:
						o = l;
						break;
					case 4: return i.label++, {
						value: l[1],
						done: !1
					};
					case 5:
						i.label++, e = l[1], l = [0];
						continue;
					case 7:
						l = i.ops.pop(), i.trys.pop();
						continue;
					default:
						if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === l[0] || 2 === l[0])) {
							i = 0;
							continue;
						}
						if (3 === l[0] && (!o || l[1] > o[0] && l[1] < o[3])) {
							i.label = l[1];
							break;
						}
						if (6 === l[0] && i.label < o[1]) {
							i.label = o[1], o = l;
							break;
						}
						if (o && i.label < o[2]) {
							i.label = o[2], i.ops.push(l);
							break;
						}
						o[2] && i.ops.pop(), i.trys.pop();
						continue;
				}
				l = n.call(t, i);
			} catch (t) {
				l = [6, t], e = 0;
			} finally {
				r = o = 0;
			}
			if (5 & l[0]) throw l[1];
			return {
				value: l[0] ? l[1] : void 0,
				done: !0
			};
		};
	}
}
function a(t) {
	var n = "function" == typeof Symbol && Symbol.iterator, r = n && t[n], e = 0;
	if (r) return r.call(t);
	if (t && "number" == typeof t.length) return { next: function() {
		return t && e >= t.length && (t = void 0), {
			value: t && t[e++],
			done: !t
		};
	} };
	throw TypeError(n ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function i(t, n) {
	var r = "function" == typeof Symbol && t[Symbol.iterator];
	if (!r) return t;
	var e, o, a = r.call(t), i = [];
	try {
		for (; (void 0 === n || n-- > 0) && !(e = a.next()).done;) i.push(e.value);
	} catch (t) {
		o = { error: t };
	} finally {
		try {
			e && !e.done && (r = a.return) && r.call(a);
		} finally {
			if (o) throw o.error;
		}
	}
	return i;
}
function c(t, n, r) {
	if (r || 2 == arguments.length) for (var e, o = 0, a = n.length; o < a; o++) !e && o in n || (e || (e = Array.prototype.slice.call(n, 0, o)), e[o] = n[o]);
	return t.concat(e || Array.prototype.slice.call(n));
}
function l(t) {
	return this instanceof l ? (this.v = t, this) : new l(t);
}
function u(t, n, r) {
	if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
	var e, o = r.apply(t, n || []), a = [];
	return e = {}, i("next"), i("throw"), i("return"), e[Symbol.asyncIterator] = function() {
		return this;
	}, e;
	function i(t) {
		o[t] && (e[t] = function(n) {
			return new Promise(function(r, e) {
				a.push([
					t,
					n,
					r,
					e
				]) > 1 || c(t, n);
			});
		});
	}
	function c(t, n) {
		try {
			var r;
			(r = o[t](n)).value instanceof l ? Promise.resolve(r.value.v).then(u, f) : s(a[0][2], r);
		} catch (t) {
			s(a[0][3], t);
		}
	}
	function u(t) {
		c("next", t);
	}
	function f(t) {
		c("throw", t);
	}
	function s(t, n) {
		t(n), a.shift(), a.length && c(a[0][0], a[0][1]);
	}
}
function f(t) {
	if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
	var n, r = t[Symbol.asyncIterator];
	return r ? r.call(t) : (t = a(t), n = {}, e("next"), e("throw"), e("return"), n[Symbol.asyncIterator] = function() {
		return this;
	}, n);
	function e(r) {
		n[r] = t[r] && function(n) {
			return new Promise(function(e, o) {
				var a = e, i = o, c = (n = t[r](n)).done;
				Promise.resolve(n.value).then(function(t) {
					a({
						value: t,
						done: c
					});
				}, i);
			});
		};
	}
}
export { n as a, r as c, e as i, c as l, f as n, o, l as r, i as s, u as t, a as u };
