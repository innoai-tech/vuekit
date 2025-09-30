var t = function(r, n) {
	return (t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, r) {
		t.__proto__ = r;
	} || function(t, r) {
		for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
	})(r, n);
};
function r(r, n) {
	if ("function" != typeof n && null !== n) throw TypeError("Class extends value " + String(n) + " is not a constructor or null");
	function e() {
		this.constructor = r;
	}
	t(r, n), r.prototype = null === n ? Object.create(n) : (e.prototype = n.prototype, new e());
}
function n(t, r) {
	var n, e, o, i = {
		label: 0,
		sent: function() {
			if (1 & o[0]) throw o[1];
			return o[1];
		},
		trys: [],
		ops: []
	}, u = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
	return u.next = c(0), u.throw = c(1), u.return = c(2), "function" == typeof Symbol && (u[Symbol.iterator] = function() {
		return this;
	}), u;
	function c(c) {
		return function(s) {
			var a = [c, s];
			if (n) throw TypeError("Generator is already executing.");
			for (; u && (u = 0, a[0] && (i = 0)), i;) try {
				if (n = 1, e && (o = 2 & a[0] ? e.return : a[0] ? e.throw || ((o = e.return) && o.call(e), 0) : e.next) && !(o = o.call(e, a[1])).done) return o;
				switch (e = 0, o && (a = [2 & a[0], o.value]), a[0]) {
					case 0:
					case 1:
						o = a;
						break;
					case 4: return i.label++, {
						value: a[1],
						done: !1
					};
					case 5:
						i.label++, e = a[1], a = [0];
						continue;
					case 7:
						a = i.ops.pop(), i.trys.pop();
						continue;
					default:
						if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
							i = 0;
							continue;
						}
						if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
							i.label = a[1];
							break;
						}
						if (6 === a[0] && i.label < o[1]) {
							i.label = o[1], o = a;
							break;
						}
						if (o && i.label < o[2]) {
							i.label = o[2], i.ops.push(a);
							break;
						}
						o[2] && i.ops.pop(), i.trys.pop();
						continue;
				}
				a = r.call(t, i);
			} catch (t) {
				a = [6, t], e = 0;
			} finally {
				n = o = 0;
			}
			if (5 & a[0]) throw a[1];
			return {
				value: a[0] ? a[1] : void 0,
				done: !0
			};
		};
	}
}
function e(t) {
	var r = "function" == typeof Symbol && Symbol.iterator, n = r && t[r], e = 0;
	if (n) return n.call(t);
	if (t && "number" == typeof t.length) return { next: function() {
		return t && e >= t.length && (t = void 0), {
			value: t && t[e++],
			done: !t
		};
	} };
	throw TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function o(t, r) {
	var n = "function" == typeof Symbol && t[Symbol.iterator];
	if (!n) return t;
	var e, o, i = n.call(t), u = [];
	try {
		for (; (void 0 === r || r-- > 0) && !(e = i.next()).done;) u.push(e.value);
	} catch (t) {
		o = { error: t };
	} finally {
		try {
			e && !e.done && (n = i.return) && n.call(i);
		} finally {
			if (o) throw o.error;
		}
	}
	return u;
}
function i(t, r, n) {
	if (n || 2 == arguments.length) for (var e, o = 0, i = r.length; o < i; o++) !e && o in r || (e || (e = Array.prototype.slice.call(r, 0, o)), e[o] = r[o]);
	return t.concat(e || Array.prototype.slice.call(r));
}
function u(t) {
	return this instanceof u ? (this.v = t, this) : new u(t);
}
function c(t) {
	return "function" == typeof t;
}
function s(t) {
	var r = t(function(t) {
		Error.call(t), t.stack = Error().stack;
	});
	return r.prototype = Object.create(Error.prototype), r.prototype.constructor = r, r;
}
var a = s(function(t) {
	return function(r) {
		t(this), this.message = r ? r.length + " errors occurred during unsubscription:\n" + r.map(function(t, r) {
			return r + 1 + ") " + t.toString();
		}).join("\n  ") : "", this.name = "UnsubscriptionError", this.errors = r;
	};
});
function l(t, r) {
	if (t) {
		var n = t.indexOf(r);
		0 <= n && t.splice(n, 1);
	}
}
var f = function() {
	var t;
	function r(t) {
		this.initialTeardown = t, this.closed = !1, this._parentage = null, this._finalizers = null;
	}
	return r.prototype.unsubscribe = function() {
		if (!this.closed) {
			this.closed = !0;
			var t, r, n, u, s, l = this._parentage;
			if (l) if (this._parentage = null, Array.isArray(l)) try {
				for (var f = e(l), h = f.next(); !h.done; h = f.next()) h.value.remove(this);
			} catch (r) {
				t = { error: r };
			} finally {
				try {
					h && !h.done && (r = f.return) && r.call(f);
				} finally {
					if (t) throw t.error;
				}
			}
			else l.remove(this);
			var p = this.initialTeardown;
			if (c(p)) try {
				p();
			} catch (t) {
				s = t instanceof a ? t.errors : [t];
			}
			var d = this._finalizers;
			if (d) {
				this._finalizers = null;
				try {
					for (var y = e(d), b = y.next(); !b.done; b = y.next()) {
						var m = b.value;
						try {
							v(m);
						} catch (t) {
							s = null != s ? s : [], t instanceof a ? s = i(i([], o(s)), o(t.errors)) : s.push(t);
						}
					}
				} catch (t) {
					n = { error: t };
				} finally {
					try {
						b && !b.done && (u = y.return) && u.call(y);
					} finally {
						if (n) throw n.error;
					}
				}
			}
			if (s) throw new a(s);
		}
	}, r.prototype.add = function(t) {
		var n;
		if (t && t !== this) if (this.closed) v(t);
		else {
			if (t instanceof r) {
				if (t.closed || t._hasParent(this)) return;
				t._addParent(this);
			}
			(this._finalizers = null != (n = this._finalizers) ? n : []).push(t);
		}
	}, r.prototype._hasParent = function(t) {
		var r = this._parentage;
		return r === t || Array.isArray(r) && r.includes(t);
	}, r.prototype._addParent = function(t) {
		var r = this._parentage;
		this._parentage = Array.isArray(r) ? (r.push(t), r) : r ? [r, t] : t;
	}, r.prototype._removeParent = function(t) {
		var r = this._parentage;
		r === t ? this._parentage = null : Array.isArray(r) && l(r, t);
	}, r.prototype.remove = function(t) {
		var n = this._finalizers;
		n && l(n, t), t instanceof r && t._removeParent(this);
	}, (t = new r()).closed = !0, r.EMPTY = t, r;
}(), h = f.EMPTY;
function p(t) {
	return t instanceof f || t && "closed" in t && c(t.remove) && c(t.add) && c(t.unsubscribe);
}
function v(t) {
	c(t) ? t() : t.unsubscribe();
}
var d = void 0, y = {
	setTimeout: function(t, r) {
		for (var n = [], e = 2; e < arguments.length; e++) n[e - 2] = arguments[e];
		var u = y.delegate;
		return (null == u ? void 0 : u.setTimeout) ? u.setTimeout.apply(u, i([t, r], o(n))) : setTimeout.apply(void 0, i([t, r], o(n)));
	},
	clearTimeout: function(t) {
		var r = y.delegate;
		return ((null == r ? void 0 : r.clearTimeout) || clearTimeout)(t);
	},
	delegate: void 0
};
function b(t) {
	y.setTimeout(function() {
		throw t;
	});
}
function m() {}
var w = _("C", void 0, void 0);
function _(t, r, n) {
	return {
		kind: t,
		value: r,
		error: n
	};
}
function x(t) {
	t();
}
var S = function(t) {
	function n(r) {
		var n = t.call(this) || this;
		return n.isStopped = !1, r ? (n.destination = r, p(r) && r.add(n)) : n.destination = T, n;
	}
	return r(n, t), n.create = function(t, r, n) {
		return new A(t, r, n);
	}, n.prototype.next = function(t) {
		this.isStopped ? j(_("N", t, void 0), this) : this._next(t);
	}, n.prototype.error = function(t) {
		this.isStopped ? j(_("E", void 0, t), this) : (this.isStopped = !0, this._error(t));
	}, n.prototype.complete = function() {
		this.isStopped ? j(w, this) : (this.isStopped = !0, this._complete());
	}, n.prototype.unsubscribe = function() {
		this.closed || (this.isStopped = !0, t.prototype.unsubscribe.call(this), this.destination = null);
	}, n.prototype._next = function(t) {
		this.destination.next(t);
	}, n.prototype._error = function(t) {
		try {
			this.destination.error(t);
		} finally {
			this.unsubscribe();
		}
	}, n.prototype._complete = function() {
		try {
			this.destination.complete();
		} finally {
			this.unsubscribe();
		}
	}, n;
}(f);
Function.prototype.bind;
var O = function() {
	function t(t) {
		this.partialObserver = t;
	}
	return t.prototype.next = function(t) {
		var r = this.partialObserver;
		if (r.next) try {
			r.next(t);
		} catch (t) {
			P(t);
		}
	}, t.prototype.error = function(t) {
		var r = this.partialObserver;
		if (r.error) try {
			r.error(t);
		} catch (t) {
			P(t);
		}
		else P(t);
	}, t.prototype.complete = function() {
		var t = this.partialObserver;
		if (t.complete) try {
			t.complete();
		} catch (t) {
			P(t);
		}
	}, t;
}(), A = function(t) {
	function n(r, n, e) {
		var o, u = t.call(this) || this;
		return c(r) || !r ? o = {
			next: null != r ? r : void 0,
			error: null != n ? n : void 0,
			complete: null != e ? e : void 0
		} : o = r, u.destination = new O(o), u;
	}
	return r(n, t), n;
}(S);
function P(t) {
	b(t);
}
function j(t, r) {}
var T = {
	closed: !0,
	next: m,
	error: function(t) {
		throw t;
	},
	complete: m
}, k = "function" == typeof Symbol && Symbol.observable || "@@observable";
function C(t) {
	return t;
}
function z() {
	for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
	return L(t);
}
function L(t) {
	return 0 === t.length ? C : 1 === t.length ? t[0] : function(r) {
		return t.reduce(function(t, r) {
			return r(t);
		}, r);
	};
}
var U = function() {
	function t(t) {
		t && (this._subscribe = t);
	}
	return t.prototype.lift = function(r) {
		var n = new t();
		return n.source = this, n.operator = r, n;
	}, t.prototype.subscribe = function(t, r, n) {
		var e = this, o = !function(t) {
			return t && t instanceof S || t && c(t.next) && c(t.error) && c(t.complete) && p(t);
		}(t) ? new A(t, r, n) : t;
		return x(function() {
			var t = e.operator, r = e.source;
			o.add(t ? t.call(o, r) : r ? e._subscribe(o) : e._trySubscribe(o));
		}), o;
	}, t.prototype._trySubscribe = function(t) {
		try {
			return this._subscribe(t);
		} catch (r) {
			t.error(r);
		}
	}, t.prototype.forEach = function(t, r) {
		var n = this;
		return new (r = (F(r)))(function(r, e) {
			var o = new A({
				next: function(r) {
					try {
						t(r);
					} catch (t) {
						e(t), o.unsubscribe();
					}
				},
				error: e,
				complete: r
			});
			n.subscribe(o);
		});
	}, t.prototype._subscribe = function(t) {
		var r;
		return null == (r = this.source) ? void 0 : r.subscribe(t);
	}, t.prototype[k] = function() {
		return this;
	}, t.prototype.pipe = function() {
		for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
		return L(t)(this);
	}, t.prototype.toPromise = function(t) {
		var r = this;
		return new (t = (F(t)))(function(t, n) {
			var e;
			r.subscribe(function(t) {
				return e = t;
			}, function(t) {
				return n(t);
			}, function() {
				return t(e);
			});
		});
	}, t.create = function(r) {
		return new t(r);
	}, t;
}();
function F(t) {
	var r;
	return null != (r = null != t ? t : d) ? r : Promise;
}
function Y(t) {
	return function(r) {
		if (c(null == r ? void 0 : r.lift)) return r.lift(function(r) {
			try {
				return t(r, this);
			} catch (t) {
				this.error(t);
			}
		});
		throw TypeError("Unable to lift unknown Observable type");
	};
}
function M(t, r, n, e, o) {
	return new N(t, r, n, e, o);
}
var N = function(t) {
	function n(r, n, e, o, i, u) {
		var c = t.call(this, r) || this;
		return c.onFinalize = i, c.shouldUnsubscribe = u, c._next = n ? function(t) {
			try {
				n(t);
			} catch (t) {
				r.error(t);
			}
		} : t.prototype._next, c._error = o ? function(t) {
			try {
				o(t);
			} catch (t) {
				r.error(t);
			} finally {
				this.unsubscribe();
			}
		} : t.prototype._error, c._complete = e ? function() {
			try {
				e();
			} catch (t) {
				r.error(t);
			} finally {
				this.unsubscribe();
			}
		} : t.prototype._complete, c;
	}
	return r(n, t), n.prototype.unsubscribe = function() {
		var r;
		if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
			var n = this.closed;
			t.prototype.unsubscribe.call(this), n || null == (r = this.onFinalize) || r.call(this);
		}
	}, n;
}(S), R = s(function(t) {
	return function() {
		t(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
	};
}), q = function(t) {
	function n() {
		var r = t.call(this) || this;
		return r.closed = !1, r.currentObservers = null, r.observers = [], r.isStopped = !1, r.hasError = !1, r.thrownError = null, r;
	}
	return r(n, t), n.prototype.lift = function(t) {
		var r = new D(this, this);
		return r.operator = t, r;
	}, n.prototype._throwIfClosed = function() {
		if (this.closed) throw new R();
	}, n.prototype.next = function(t) {
		var r = this;
		x(function() {
			var n, o;
			if (r._throwIfClosed(), !r.isStopped) {
				r.currentObservers || (r.currentObservers = Array.from(r.observers));
				try {
					for (var i = e(r.currentObservers), u = i.next(); !u.done; u = i.next()) u.value.next(t);
				} catch (t) {
					n = { error: t };
				} finally {
					try {
						u && !u.done && (o = i.return) && o.call(i);
					} finally {
						if (n) throw n.error;
					}
				}
			}
		});
	}, n.prototype.error = function(t) {
		var r = this;
		x(function() {
			if (r._throwIfClosed(), !r.isStopped) {
				r.hasError = r.isStopped = !0, r.thrownError = t;
				for (var n = r.observers; n.length;) n.shift().error(t);
			}
		});
	}, n.prototype.complete = function() {
		var t = this;
		x(function() {
			if (t._throwIfClosed(), !t.isStopped) {
				t.isStopped = !0;
				for (var r = t.observers; r.length;) r.shift().complete();
			}
		});
	}, n.prototype.unsubscribe = function() {
		this.isStopped = this.closed = !0, this.observers = this.currentObservers = null;
	}, Object.defineProperty(n.prototype, "observed", {
		get: function() {
			var t;
			return (null == (t = this.observers) ? void 0 : t.length) > 0;
		},
		enumerable: !1,
		configurable: !0
	}), n.prototype._trySubscribe = function(r) {
		return this._throwIfClosed(), t.prototype._trySubscribe.call(this, r);
	}, n.prototype._subscribe = function(t) {
		return this._throwIfClosed(), this._checkFinalizedStatuses(t), this._innerSubscribe(t);
	}, n.prototype._innerSubscribe = function(t) {
		var r = this, n = this.hasError, e = this.isStopped, o = this.observers;
		return n || e ? h : (this.currentObservers = null, o.push(t), new f(function() {
			r.currentObservers = null, l(o, t);
		}));
	}, n.prototype._checkFinalizedStatuses = function(t) {
		var r = this.hasError, n = this.thrownError, e = this.isStopped;
		r ? t.error(n) : e && t.complete();
	}, n.prototype.asObservable = function() {
		var t = new U();
		return t.source = this, t;
	}, n.create = function(t, r) {
		return new D(t, r);
	}, n;
}(U), D = function(t) {
	function n(r, n) {
		var e = t.call(this) || this;
		return e.destination = r, e.source = n, e;
	}
	return r(n, t), n.prototype.next = function(t) {
		var r, n;
		null == (n = null == (r = this.destination) ? void 0 : r.next) || n.call(r, t);
	}, n.prototype.error = function(t) {
		var r, n;
		null == (n = null == (r = this.destination) ? void 0 : r.error) || n.call(r, t);
	}, n.prototype.complete = function() {
		var t, r;
		null == (r = null == (t = this.destination) ? void 0 : t.complete) || r.call(t);
	}, n.prototype._subscribe = function(t) {
		var r, n;
		return null != (n = null == (r = this.source) ? void 0 : r.subscribe(t)) ? n : h;
	}, n;
}(q), V = function(t) {
	function n(r) {
		var n = t.call(this) || this;
		return n._value = r, n;
	}
	return r(n, t), Object.defineProperty(n.prototype, "value", {
		get: function() {
			return this.getValue();
		},
		enumerable: !1,
		configurable: !0
	}), n.prototype._subscribe = function(r) {
		var n = t.prototype._subscribe.call(this, r);
		return n.closed || r.next(this._value), n;
	}, n.prototype.getValue = function() {
		var t = this.hasError, r = this.thrownError, n = this._value;
		if (t) throw r;
		return this._throwIfClosed(), n;
	}, n.prototype.next = function(r) {
		t.prototype.next.call(this, this._value = r);
	}, n;
}(q), B = {
	now: function() {
		return (B.delegate || Date).now();
	},
	delegate: void 0
}, G = function(t) {
	function n(r, n) {
		return t.call(this) || this;
	}
	return r(n, t), n.prototype.schedule = function(t, r) {
		return void 0 === r && (r = 0), this;
	}, n;
}(f), $ = {
	setInterval: function(t, r) {
		for (var n = [], e = 2; e < arguments.length; e++) n[e - 2] = arguments[e];
		var u = $.delegate;
		return (null == u ? void 0 : u.setInterval) ? u.setInterval.apply(u, i([t, r], o(n))) : setInterval.apply(void 0, i([t, r], o(n)));
	},
	clearInterval: function(t) {
		var r = $.delegate;
		return ((null == r ? void 0 : r.clearInterval) || clearInterval)(t);
	},
	delegate: void 0
}, H = function(t) {
	function n(r, n) {
		var e = t.call(this, r, n) || this;
		return e.scheduler = r, e.work = n, e.pending = !1, e;
	}
	return r(n, t), n.prototype.schedule = function(t, r) {
		if (void 0 === r && (r = 0), this.closed) return this;
		this.state = t;
		var n, e = this.id, o = this.scheduler;
		return null != e && (this.id = this.recycleAsyncId(o, e, r)), this.pending = !0, this.delay = r, this.id = null != (n = this.id) ? n : this.requestAsyncId(o, this.id, r), this;
	}, n.prototype.requestAsyncId = function(t, r, n) {
		return void 0 === n && (n = 0), $.setInterval(t.flush.bind(t, this), n);
	}, n.prototype.recycleAsyncId = function(t, r, n) {
		if (void 0 === n && (n = 0), null != n && this.delay === n && !1 === this.pending) return r;
		null != r && $.clearInterval(r);
	}, n.prototype.execute = function(t, r) {
		if (this.closed) return Error("executing a cancelled action");
		this.pending = !1;
		var n = this._execute(t, r);
		if (n) return n;
		!1 === this.pending && null != this.id && (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
	}, n.prototype._execute = function(t, r) {
		var n, e = !1;
		try {
			this.work(t);
		} catch (t) {
			e = !0, n = t || Error("Scheduled action threw falsy error");
		}
		if (e) return this.unsubscribe(), n;
	}, n.prototype.unsubscribe = function() {
		if (!this.closed) {
			var r = this.id, n = this.scheduler, e = n.actions;
			this.work = this.state = this.scheduler = null, this.pending = !1, l(e, this), null != r && (this.id = this.recycleAsyncId(n, r, null)), this.delay = null, t.prototype.unsubscribe.call(this);
		}
	}, n;
}(G), J = function() {
	function t(r, n) {
		void 0 === n && (n = t.now), this.schedulerActionCtor = r, this.now = n;
	}
	return t.prototype.schedule = function(t, r, n) {
		return void 0 === r && (r = 0), new this.schedulerActionCtor(this, t).schedule(n, r);
	}, t.now = B.now, t;
}(), K = new (function(t) {
	function n(r, n) {
		void 0 === n && (n = J.now);
		var e = t.call(this, r, n) || this;
		return e.actions = [], e._active = !1, e;
	}
	return r(n, t), n.prototype.flush = function(t) {
		var r, n = this.actions;
		if (this._active) return void n.push(t);
		this._active = !0;
		do
			if (r = t.execute(t.state, t.delay)) break;
		while (t = n.shift());
		if (this._active = !1, r) {
			for (; t = n.shift();) t.unsubscribe();
			throw r;
		}
	}, n;
}(J))(H), Q = new U(function(t) {
	return t.complete();
});
function W(t) {
	return t && c(t.schedule);
}
function X(t) {
	return t[t.length - 1];
}
function Z(t) {
	return W(X(t)) ? t.pop() : void 0;
}
var tt = function(t) {
	return t && "number" == typeof t.length && "function" != typeof t;
};
function tr(t) {
	return c(null == t ? void 0 : t.then);
}
function tn(t) {
	return Symbol.asyncIterator && c(null == t ? void 0 : t[Symbol.asyncIterator]);
}
function te(t) {
	return TypeError("You provided " + (null !== t && "object" == typeof t ? "an invalid object" : "'" + t + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
var to = "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator";
function ti(t) {
	return c(null == t ? void 0 : t[to]);
}
function tu(t) {
	return function(t, r, n) {
		if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
		var e, o = n.apply(t, r || []), i = [];
		return e = Object.create(("function" == typeof AsyncIterator ? AsyncIterator : Object).prototype), c("next"), c("throw"), c("return", function(t) {
			return function(r) {
				return Promise.resolve(r).then(t, l);
			};
		}), e[Symbol.asyncIterator] = function() {
			return this;
		}, e;
		function c(t, r) {
			o[t] && (e[t] = function(r) {
				return new Promise(function(n, e) {
					i.push([
						t,
						r,
						n,
						e
					]) > 1 || s(t, r);
				});
			}, r && (e[t] = r(e[t])));
		}
		function s(t, r) {
			try {
				var n;
				(n = o[t](r)).value instanceof u ? Promise.resolve(n.value.v).then(a, l) : f(i[0][2], n);
			} catch (t) {
				f(i[0][3], t);
			}
		}
		function a(t) {
			s("next", t);
		}
		function l(t) {
			s("throw", t);
		}
		function f(t, r) {
			t(r), i.shift(), i.length && s(i[0][0], i[0][1]);
		}
	}(this, arguments, function() {
		var r, e, o;
		return n(this, function(n) {
			switch (n.label) {
				case 0: r = t.getReader(), n.label = 1;
				case 1: n.trys.push([
					1,
					,
					9,
					10
				]), n.label = 2;
				case 2: return [4, u(r.read())];
				case 3:
					if (o = (e = n.sent()).value, !e.done) return [3, 5];
					return [4, u(void 0)];
				case 4: return [2, n.sent()];
				case 5: return [4, u(o)];
				case 6: return [4, n.sent()];
				case 7: return n.sent(), [3, 2];
				case 8: return [3, 10];
				case 9: return r.releaseLock(), [7];
				case 10: return [2];
			}
		});
	});
}
function tc(t) {
	return c(null == t ? void 0 : t.getReader);
}
function ts(t) {
	if (t instanceof U) return t;
	if (null != t) {
		var r, n, o, i;
		if (c(t[k])) return r = t, new U(function(t) {
			var n = r[k]();
			if (c(n.subscribe)) return n.subscribe(t);
			throw TypeError("Provided object does not correctly implement Symbol.observable");
		});
		if (tt(t)) return n = t, new U(function(t) {
			for (var r = 0; r < n.length && !t.closed; r++) t.next(n[r]);
			t.complete();
		});
		if (tr(t)) return o = t, new U(function(t) {
			o.then(function(r) {
				t.closed || (t.next(r), t.complete());
			}, function(r) {
				return t.error(r);
			}).then(null, b);
		});
		if (tn(t)) return ta(t);
		if (ti(t)) return i = t, new U(function(t) {
			var r, n;
			try {
				for (var o = e(i), u = o.next(); !u.done; u = o.next()) {
					var c = u.value;
					if (t.next(c), t.closed) return;
				}
			} catch (t) {
				r = { error: t };
			} finally {
				try {
					u && !u.done && (n = o.return) && n.call(o);
				} finally {
					if (r) throw r.error;
				}
			}
			t.complete();
		});
		if (tc(t)) return ta(tu(t));
	}
	throw te(t);
}
function ta(t) {
	return new U(function(r) {
		(function(t, r) {
			var o, i, u, c, s, a, l, f;
			return s = this, a = void 0, l = void 0, f = function() {
				var s;
				return n(this, function(n) {
					switch (n.label) {
						case 0: n.trys.push([
							0,
							5,
							6,
							11
						]), o = function(t) {
							if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
							var r, n = t[Symbol.asyncIterator];
							return n ? n.call(t) : (t = e(t), r = {}, o("next"), o("throw"), o("return"), r[Symbol.asyncIterator] = function() {
								return this;
							}, r);
							function o(n) {
								r[n] = t[n] && function(r) {
									return new Promise(function(e, o) {
										var i = e, u = o, c = (r = t[n](r)).done;
										Promise.resolve(r.value).then(function(t) {
											i({
												value: t,
												done: c
											});
										}, u);
									});
								};
							}
						}(t), n.label = 1;
						case 1: return [4, o.next()];
						case 2:
							if ((i = n.sent()).done) return [3, 4];
							if (s = i.value, r.next(s), r.closed) return [2];
							n.label = 3;
						case 3: return [3, 1];
						case 4: return [3, 11];
						case 5: return u = { error: n.sent() }, [3, 11];
						case 6:
							if (n.trys.push([
								6,
								,
								9,
								10
							]), !(i && !i.done && (c = o.return))) return [3, 8];
							return [4, c.call(o)];
						case 7: n.sent(), n.label = 8;
						case 8: return [3, 10];
						case 9:
							if (u) throw u.error;
							return [7];
						case 10: return [7];
						case 11: return r.complete(), [2];
					}
				});
			}, new (l || (l = Promise))(function(t, r) {
				function n(t) {
					try {
						o(f.next(t));
					} catch (t) {
						r(t);
					}
				}
				function e(t) {
					try {
						o(f.throw(t));
					} catch (t) {
						r(t);
					}
				}
				function o(r) {
					var o;
					r.done ? t(r.value) : ((o = r.value) instanceof l ? o : new l(function(t) {
						t(o);
					})).then(n, e);
				}
				o((f = f.apply(s, a || [])).next());
			});
		})(t, r).catch(function(t) {
			return r.error(t);
		});
	});
}
function tl(t, r, n, e, o) {
	void 0 === e && (e = 0), void 0 === o && (o = !1);
	var i = r.schedule(function() {
		n(), o ? t.add(this.schedule(null, e)) : this.unsubscribe();
	}, e);
	if (t.add(i), !o) return i;
}
function tf(t, r) {
	return void 0 === r && (r = 0), Y(function(n, e) {
		n.subscribe(M(e, function(n) {
			return tl(e, t, function() {
				return e.next(n);
			}, r);
		}, function() {
			return tl(e, t, function() {
				return e.complete();
			}, r);
		}, function(n) {
			return tl(e, t, function() {
				return e.error(n);
			}, r);
		}));
	});
}
function th(t, r) {
	return void 0 === r && (r = 0), Y(function(n, e) {
		e.add(t.schedule(function() {
			return n.subscribe(e);
		}, r));
	});
}
function tp(t, r) {
	if (!t) throw Error("Iterable cannot be null");
	return new U(function(n) {
		tl(n, r, function() {
			var e = t[Symbol.asyncIterator]();
			tl(n, r, function() {
				e.next().then(function(t) {
					t.done ? n.complete() : n.next(t.value);
				});
			}, 0, !0);
		});
	});
}
function tv(t, r) {
	return r ? function(t, r) {
		if (null != t) {
			if (c(t[k])) return ts(t).pipe(th(r), tf(r));
			if (tt(t)) return new U(function(n) {
				var e = 0;
				return r.schedule(function() {
					e === t.length ? n.complete() : (n.next(t[e++]), n.closed || this.schedule());
				});
			});
			if (tr(t)) return ts(t).pipe(th(r), tf(r));
			if (tn(t)) return tp(t, r);
			if (ti(t)) return new U(function(n) {
				var e;
				return tl(n, r, function() {
					e = t[to](), tl(n, r, function() {
						var t, r, o;
						try {
							r = (t = e.next()).value, o = t.done;
						} catch (t) {
							n.error(t);
							return;
						}
						o ? n.complete() : n.next(r);
					}, 0, !0);
				}), function() {
					return c(null == e ? void 0 : e.return) && e.return();
				};
			});
			if (tc(t)) return tp(tu(t), r);
		}
		throw te(t);
	}(t, r) : ts(t);
}
function td(t) {
	return !!t && (t instanceof U || c(t.lift) && c(t.subscribe));
}
function ty(t, r) {
	return Y(function(n, e) {
		var o = 0;
		n.subscribe(M(e, function(n) {
			e.next(t.call(r, n, o++));
		}));
	});
}
var tb = Array.isArray;
function tm(t) {
	return ty(function(r) {
		return tb(r) ? t.apply(void 0, i([], o(r))) : t(r);
	});
}
var tw = Array.isArray, t_ = Object.getPrototypeOf, tg = Object.prototype, tx = Object.keys;
function tS() {
	for (var t, r, n, e = [], o = 0; o < arguments.length; o++) e[o] = arguments[o];
	var i = Z(e), u = c(X(e)) ? e.pop() : void 0, s = function(t) {
		if (1 === t.length) {
			var r, n = t[0];
			if (tw(n)) return {
				args: n,
				keys: null
			};
			if ((r = n) && "object" == typeof r && t_(r) === tg) {
				var e = tx(n);
				return {
					args: e.map(function(t) {
						return n[t];
					}),
					keys: e
				};
			}
		}
		return {
			args: t,
			keys: null
		};
	}(e), a = s.args, l = s.keys;
	if (0 === a.length) return tv([], i);
	var f = new U((t = a, r = i, void 0 === (n = l ? function(t) {
		return l.reduce(function(r, n, e) {
			return r[n] = t[e], r;
		}, {});
	} : C) && (n = C), function(e) {
		(function(t, r, n) {
			t ? tl(n, t, r) : r();
		})(r, function() {
			for (var o = t.length, i = Array(o), u = o, c = o, s = function(o) {
				(function(t, r, n) {
					t ? tl(n, t, r) : r();
				})(r, function() {
					var s = tv(t[o], r), a = !1;
					s.subscribe(M(e, function(t) {
						i[o] = t, !a && (a = !0, c--), c || e.next(n(i.slice()));
					}, function() {
						--u || e.complete();
					}));
				}, e);
			}, a = 0; a < o; a++) s(a);
		}, e);
	}));
	return u ? f.pipe(tm(u)) : f;
}
function tI(t, r, n) {
	return (void 0 === n && (n = Infinity), c(r)) ? tI(function(n, e) {
		return ty(function(t, o) {
			return r(n, t, e, o);
		})(ts(t(n, e)));
	}, n) : ("number" == typeof r && (n = r), Y(function(r, e) {
		var o, i, u, c, s, a, l, f, h;
		return o = n, u = [], c = 0, s = 0, a = !1, l = function() {
			!a || u.length || c || e.complete();
		}, f = function(t) {
			return c < o ? h(t) : u.push(t);
		}, h = function(r) {
			c++;
			var n = !1;
			ts(t(r, s++)).subscribe(M(e, function(t) {
				i ? f(t) : e.next(t);
			}, function() {
				n = !0;
			}, void 0, function() {
				if (n) try {
					for (c--; u.length && c < o;) (function() {
						var t = u.shift();
						h(t);
					})();
					l();
				} catch (t) {
					e.error(t);
				}
			}));
		}, r.subscribe(M(e, f, function() {
			a = !0, l();
		})), function() {};
	}));
}
function tE(t) {
	return void 0 === t && (t = Infinity), tI(C, t);
}
var tO = ["addListener", "removeListener"], tA = ["addEventListener", "removeEventListener"], tP = ["on", "off"];
function tj(t, r, n, e) {
	if (c(n) && (e = n, n = void 0), e) return tj(t, r, n).pipe(tm(e));
	var i, u, s, a = o(c((i = t).addEventListener) && c(i.removeEventListener) ? tA.map(function(e) {
		return function(o) {
			return t[e](r, o, n);
		};
	}) : c((u = t).addListener) && c(u.removeListener) ? tO.map(tT(t, r)) : c((s = t).on) && c(s.off) ? tP.map(tT(t, r)) : [], 2), l = a[0], f = a[1];
	if (!l && tt(t)) return tI(function(t) {
		return tj(t, r, n);
	})(ts(t));
	if (!l) throw TypeError("Invalid event target");
	return new U(function(t) {
		var r = function() {
			for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
			return t.next(1 < r.length ? r : r[0]);
		};
		return l(r), function() {
			return f(r);
		};
	});
}
function tT(t, r) {
	return function(n) {
		return function(e) {
			return t[n](r, e);
		};
	};
}
function tk(t, r, n) {
	void 0 === t && (t = 0), void 0 === n && (n = K);
	var e = -1;
	return null != r && (W(r) ? n = r : e = r), new U(function(r) {
		var o, i = (o = t) instanceof Date && !isNaN(o) ? t - n.now() : t;
		i < 0 && (i = 0);
		var u = 0;
		return n.schedule(function() {
			r.closed || (r.next(u++), 0 <= e ? this.schedule(void 0, e) : r.complete());
		}, i);
	});
}
function tC() {
	for (var t, r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
	var e = Z(r), o = (t = Infinity, "number" == typeof X(r) ? r.pop() : t);
	return r.length ? 1 === r.length ? ts(r[0]) : tE(o)(tv(r, e)) : Q;
}
function tz(t, r) {
	return void 0 === r && (r = K), Y(function(n, e) {
		var o = null, i = null, u = null, c = function() {
			if (o) {
				o.unsubscribe(), o = null;
				var t = i;
				i = null, e.next(t);
			}
		};
		function s() {
			var n = u + t, i = r.now();
			if (i < n) {
				o = this.schedule(void 0, n - i), e.add(o);
				return;
			}
			c();
		}
		n.subscribe(M(e, function(n) {
			i = n, u = r.now(), o || (o = r.schedule(s, t), e.add(o));
		}, function() {
			c(), e.complete();
		}, void 0, function() {
			i = o = null;
		}));
	});
}
function tL(t) {
	return t <= 0 ? function() {
		return Q;
	} : Y(function(r, n) {
		var e = 0;
		r.subscribe(M(n, function(r) {
			++e <= t && (n.next(r), t <= e && n.complete());
		}));
	});
}
function tU(t, r) {
	void 0 === r && (r = K);
	var n = tk(t, r);
	return function t(r, n) {
		return n ? function(e) {
			return function() {
				for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
				return tE(1)(tv(t, Z(t)));
			}(n.pipe(tL(1), Y(function(t, r) {
				t.subscribe(M(r, m));
			})), e.pipe(t(r)));
		} : tI(function(t, n) {
			return ts(r(t, n)).pipe(tL(1), ty(function() {
				return t;
			}));
		});
	}(function() {
		return n;
	});
}
function tF(t, r) {
	return void 0 === r && (r = C), t = null != t ? t : tY, Y(function(n, e) {
		var o, i = !0;
		n.subscribe(M(e, function(n) {
			var u = r(n);
			(i || !t(o, u)) && (i = !1, o = u, e.next(n));
		}));
	});
}
function tY(t, r) {
	return t === r;
}
function tM(t, r) {
	return Y(function(n, e) {
		var o = null, i = 0, u = !1, c = function() {
			return u && !o && e.complete();
		};
		n.subscribe(M(e, function(n) {
			o?.unsubscribe();
			var u = 0, s = i++;
			ts(t(n, s)).subscribe(o = M(e, function(t) {
				return e.next(r ? r(n, t, s, u++) : t);
			}, function() {
				o = null, c();
			}));
		}, function() {
			u = !0, c();
		}));
	});
}
function tN(t, r, n) {
	var e = c(t) || r || n ? {
		next: t,
		error: r,
		complete: n
	} : t;
	return e ? Y(function(t, r) {
		null == (n = e.subscribe) || n.call(e);
		var n, o = !0;
		t.subscribe(M(r, function(t) {
			var n;
			null == (n = e.next) || n.call(e, t), r.next(t);
		}, function() {
			var t;
			o = !1, null == (t = e.complete) || t.call(e), r.complete();
		}, function(t) {
			var n;
			o = !1, null == (n = e.error) || n.call(e, t), r.error(t);
		}, function() {
			var t, r;
			o && (null == (t = e.unsubscribe) || t.call(e)), null == (r = e.finalize) || r.call(e);
		}));
	}) : C;
}
export { z as _, tz as a, tj as c, td as d, tv as f, U as g, q as h, tU as i, tS as l, V as m, tM as n, tC as o, Q as p, tF as r, tk as s, tN as t, ty as u };
