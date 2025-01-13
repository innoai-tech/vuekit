var t = function(r2, n2) {
  return (t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t2, r3) {
    t2.__proto__ = r3;
  } || function(t2, r3) {
    for (var n3 in r3) Object.prototype.hasOwnProperty.call(r3, n3) && (t2[n3] = r3[n3]);
  })(r2, n2);
};
function r(r2, n2) {
  if ("function" != typeof n2 && null !== n2) throw TypeError("Class extends value " + String(n2) + " is not a constructor or null");
  function e2() {
    this.constructor = r2;
  }
  t(r2, n2), r2.prototype = null === n2 ? Object.create(n2) : (e2.prototype = n2.prototype, new e2());
}
function n(t2, r2) {
  var n2, e2, o2, i2 = { label: 0, sent: function() {
    if (1 & o2[0]) throw o2[1];
    return o2[1];
  }, trys: [], ops: [] }, u2 = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
  return u2.next = c2(0), u2.throw = c2(1), u2.return = c2(2), "function" == typeof Symbol && (u2[Symbol.iterator] = function() {
    return this;
  }), u2;
  function c2(c3) {
    return function(s2) {
      return function(c4) {
        if (n2) throw TypeError("Generator is already executing.");
        for (; u2 && (u2 = 0, c4[0] && (i2 = 0)), i2; ) try {
          if (n2 = 1, e2 && (o2 = 2 & c4[0] ? e2.return : c4[0] ? e2.throw || ((o2 = e2.return) && o2.call(e2), 0) : e2.next) && !(o2 = o2.call(e2, c4[1])).done) return o2;
          switch (e2 = 0, o2 && (c4 = [2 & c4[0], o2.value]), c4[0]) {
            case 0:
            case 1:
              o2 = c4;
              break;
            case 4:
              return i2.label++, { value: c4[1], done: false };
            case 5:
              i2.label++, e2 = c4[1], c4 = [0];
              continue;
            case 7:
              c4 = i2.ops.pop(), i2.trys.pop();
              continue;
            default:
              if (!(o2 = (o2 = i2.trys).length > 0 && o2[o2.length - 1]) && (6 === c4[0] || 2 === c4[0])) {
                i2 = 0;
                continue;
              }
              if (3 === c4[0] && (!o2 || c4[1] > o2[0] && c4[1] < o2[3])) {
                i2.label = c4[1];
                break;
              }
              if (6 === c4[0] && i2.label < o2[1]) {
                i2.label = o2[1], o2 = c4;
                break;
              }
              if (o2 && i2.label < o2[2]) {
                i2.label = o2[2], i2.ops.push(c4);
                break;
              }
              o2[2] && i2.ops.pop(), i2.trys.pop();
              continue;
          }
          c4 = r2.call(t2, i2);
        } catch (t3) {
          c4 = [6, t3], e2 = 0;
        } finally {
          n2 = o2 = 0;
        }
        if (5 & c4[0]) throw c4[1];
        return { value: c4[0] ? c4[1] : void 0, done: true };
      }([c3, s2]);
    };
  }
}
function e(t2) {
  var r2 = "function" == typeof Symbol && Symbol.iterator, n2 = r2 && t2[r2], e2 = 0;
  if (n2) return n2.call(t2);
  if (t2 && "number" == typeof t2.length) return { next: function() {
    return t2 && e2 >= t2.length && (t2 = void 0), { value: t2 && t2[e2++], done: !t2 };
  } };
  throw TypeError(r2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function o(t2, r2) {
  var n2 = "function" == typeof Symbol && t2[Symbol.iterator];
  if (!n2) return t2;
  var e2, o2, i2 = n2.call(t2), u2 = [];
  try {
    for (; (void 0 === r2 || r2-- > 0) && !(e2 = i2.next()).done; ) u2.push(e2.value);
  } catch (t3) {
    o2 = { error: t3 };
  } finally {
    try {
      e2 && !e2.done && (n2 = i2.return) && n2.call(i2);
    } finally {
      if (o2) throw o2.error;
    }
  }
  return u2;
}
function i(t2, r2, n2) {
  if (n2 || 2 == arguments.length) for (var e2, o2 = 0, i2 = r2.length; o2 < i2; o2++) !e2 && o2 in r2 || (e2 || (e2 = Array.prototype.slice.call(r2, 0, o2)), e2[o2] = r2[o2]);
  return t2.concat(e2 || Array.prototype.slice.call(r2));
}
function u(t2) {
  return this instanceof u ? (this.v = t2, this) : new u(t2);
}
function c(t2) {
  return "function" == typeof t2;
}
function s(t2) {
  var r2 = t2(function(t3) {
    Error.call(t3), t3.stack = Error().stack;
  });
  return r2.prototype = Object.create(Error.prototype), r2.prototype.constructor = r2, r2;
}
"function" == typeof SuppressedError && SuppressedError;
var a = s(function(t2) {
  return function(r2) {
    t2(this), this.message = r2 ? r2.length + " errors occurred during unsubscription:\n" + r2.map(function(t3, r3) {
      return r3 + 1 + ") " + t3.toString();
    }).join("\n  ") : "", this.name = "UnsubscriptionError", this.errors = r2;
  };
});
function l(t2, r2) {
  if (t2) {
    var n2 = t2.indexOf(r2);
    0 <= n2 && t2.splice(n2, 1);
  }
}
var f = function() {
  var t2;
  function r2(t3) {
    this.initialTeardown = t3, this.closed = false, this._parentage = null, this._finalizers = null;
  }
  return r2.prototype.unsubscribe = function() {
    if (!this.closed) {
      this.closed = true;
      var t3, r3, n2, u2, s2, l2 = this._parentage;
      if (l2) {
        if (this._parentage = null, Array.isArray(l2)) try {
          for (var f2 = e(l2), h2 = f2.next(); !h2.done; h2 = f2.next()) h2.value.remove(this);
        } catch (r4) {
          t3 = { error: r4 };
        } finally {
          try {
            h2 && !h2.done && (r3 = f2.return) && r3.call(f2);
          } finally {
            if (t3) throw t3.error;
          }
        }
        else l2.remove(this);
      }
      var p2 = this.initialTeardown;
      if (c(p2)) try {
        p2();
      } catch (t4) {
        s2 = t4 instanceof a ? t4.errors : [t4];
      }
      var d2 = this._finalizers;
      if (d2) {
        this._finalizers = null;
        try {
          for (var y2 = e(d2), b2 = y2.next(); !b2.done; b2 = y2.next()) {
            var m2 = b2.value;
            try {
              v(m2);
            } catch (t4) {
              s2 = null != s2 ? s2 : [], t4 instanceof a ? s2 = i(i([], o(s2)), o(t4.errors)) : s2.push(t4);
            }
          }
        } catch (t4) {
          n2 = { error: t4 };
        } finally {
          try {
            b2 && !b2.done && (u2 = y2.return) && u2.call(y2);
          } finally {
            if (n2) throw n2.error;
          }
        }
      }
      if (s2) throw new a(s2);
    }
  }, r2.prototype.add = function(t3) {
    var n2;
    if (t3 && t3 !== this) {
      if (this.closed) v(t3);
      else {
        if (t3 instanceof r2) {
          if (t3.closed || t3._hasParent(this)) return;
          t3._addParent(this);
        }
        (this._finalizers = null !== (n2 = this._finalizers) && void 0 !== n2 ? n2 : []).push(t3);
      }
    }
  }, r2.prototype._hasParent = function(t3) {
    var r3 = this._parentage;
    return r3 === t3 || Array.isArray(r3) && r3.includes(t3);
  }, r2.prototype._addParent = function(t3) {
    var r3 = this._parentage;
    this._parentage = Array.isArray(r3) ? (r3.push(t3), r3) : r3 ? [r3, t3] : t3;
  }, r2.prototype._removeParent = function(t3) {
    var r3 = this._parentage;
    r3 === t3 ? this._parentage = null : Array.isArray(r3) && l(r3, t3);
  }, r2.prototype.remove = function(t3) {
    var n2 = this._finalizers;
    n2 && l(n2, t3), t3 instanceof r2 && t3._removeParent(this);
  }, r2.EMPTY = ((t2 = new r2()).closed = true, t2), r2;
}(), h = f.EMPTY;
function p(t2) {
  return t2 instanceof f || t2 && "closed" in t2 && c(t2.remove) && c(t2.add) && c(t2.unsubscribe);
}
function v(t2) {
  c(t2) ? t2() : t2.unsubscribe();
}
var d = { Promise: void 0 }, y = { setTimeout: function(t2, r2) {
  for (var n2 = [], e2 = 2; e2 < arguments.length; e2++) n2[e2 - 2] = arguments[e2];
  return setTimeout.apply(void 0, i([t2, r2], o(n2)));
}, clearTimeout: function(t2) {
  var r2 = y.delegate;
  return ((null == r2 ? void 0 : r2.clearTimeout) || clearTimeout)(t2);
}, delegate: void 0 };
function b(t2) {
  y.setTimeout(function() {
    throw t2;
  });
}
function m() {
}
var w = function(t2) {
  function n2(r2) {
    var n3 = t2.call(this) || this;
    return n3.isStopped = false, r2 ? (n3.destination = r2, p(r2) && r2.add(n3)) : n3.destination = x, n3;
  }
  return r(n2, t2), n2.create = function(t3, r2, n3) {
    return new g(t3, r2, n3);
  }, n2.prototype.next = function(t3) {
    this.isStopped || this._next(t3);
  }, n2.prototype.error = function(t3) {
    this.isStopped || (this.isStopped = true, this._error(t3));
  }, n2.prototype.complete = function() {
    this.isStopped || (this.isStopped = true, this._complete());
  }, n2.prototype.unsubscribe = function() {
    this.closed || (this.isStopped = true, t2.prototype.unsubscribe.call(this), this.destination = null);
  }, n2.prototype._next = function(t3) {
    this.destination.next(t3);
  }, n2.prototype._error = function(t3) {
    try {
      this.destination.error(t3);
    } finally {
      this.unsubscribe();
    }
  }, n2.prototype._complete = function() {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  }, n2;
}(f), _ = function() {
  function t2(t3) {
    this.partialObserver = t3;
  }
  return t2.prototype.next = function(t3) {
    var r2 = this.partialObserver;
    if (r2.next) try {
      r2.next(t3);
    } catch (t4) {
      b(t4);
    }
  }, t2.prototype.error = function(t3) {
    var r2 = this.partialObserver;
    if (r2.error) try {
      r2.error(t3);
    } catch (t4) {
      b(t4);
    }
    else b(t3);
  }, t2.prototype.complete = function() {
    var t3 = this.partialObserver;
    if (t3.complete) try {
      t3.complete();
    } catch (t4) {
      b(t4);
    }
  }, t2;
}(), g = function(t2) {
  function n2(r2, n3, e2) {
    var o2, i2 = t2.call(this) || this;
    return o2 = c(r2) || !r2 ? { next: null != r2 ? r2 : void 0, error: null != n3 ? n3 : void 0, complete: null != e2 ? e2 : void 0 } : r2, i2.destination = new _(o2), i2;
  }
  return r(n2, t2), n2;
}(w), x = { closed: true, next: m, error: function(t2) {
  throw t2;
}, complete: m }, S = "function" == typeof Symbol && Symbol.observable || "@@observable";
function O(t2) {
  return t2;
}
function E() {
  for (var t2 = [], r2 = 0; r2 < arguments.length; r2++) t2[r2] = arguments[r2];
  return I(t2);
}
function I(t2) {
  return 0 === t2.length ? O : 1 === t2.length ? t2[0] : function(r2) {
    return t2.reduce(function(t3, r3) {
      return r3(t3);
    }, r2);
  };
}
var A = function() {
  function t2(t3) {
    t3 && (this._subscribe = t3);
  }
  return t2.prototype.lift = function(r2) {
    var n2 = new t2();
    return n2.source = this, n2.operator = r2, n2;
  }, t2.prototype.subscribe = function(t3, r2, n2) {
    var e2, o2, i2, u2 = (e2 = t3) && e2 instanceof w || e2 && c(e2.next) && c(e2.error) && c(e2.complete) && p(e2) ? t3 : new g(t3, r2, n2);
    return o2 = this.operator, i2 = this.source, u2.add(o2 ? o2.call(u2, i2) : i2 ? this._subscribe(u2) : this._trySubscribe(u2)), u2;
  }, t2.prototype._trySubscribe = function(t3) {
    try {
      return this._subscribe(t3);
    } catch (r2) {
      t3.error(r2);
    }
  }, t2.prototype.forEach = function(t3, r2) {
    var n2 = this;
    return new (r2 = P(r2))(function(r3, e2) {
      var o2 = new g({ next: function(r4) {
        try {
          t3(r4);
        } catch (t4) {
          e2(t4), o2.unsubscribe();
        }
      }, error: e2, complete: r3 });
      n2.subscribe(o2);
    });
  }, t2.prototype._subscribe = function(t3) {
    var r2;
    return null === (r2 = this.source) || void 0 === r2 ? void 0 : r2.subscribe(t3);
  }, t2.prototype[S] = function() {
    return this;
  }, t2.prototype.pipe = function() {
    for (var t3 = [], r2 = 0; r2 < arguments.length; r2++) t3[r2] = arguments[r2];
    return I(t3)(this);
  }, t2.prototype.toPromise = function(t3) {
    var r2 = this;
    return new (t3 = P(t3))(function(t4, n2) {
      var e2;
      r2.subscribe(function(t5) {
        return e2 = t5;
      }, function(t5) {
        return n2(t5);
      }, function() {
        return t4(e2);
      });
    });
  }, t2.create = function(r2) {
    return new t2(r2);
  }, t2;
}();
function P(t2) {
  var r2;
  return null !== (r2 = null != t2 ? t2 : d.Promise) && void 0 !== r2 ? r2 : Promise;
}
function j(t2) {
  return function(r2) {
    if (c(null == r2 ? void 0 : r2.lift)) return r2.lift(function(r3) {
      try {
        return t2(r3, this);
      } catch (t3) {
        this.error(t3);
      }
    });
    throw TypeError("Unable to lift unknown Observable type");
  };
}
function T(t2, r2, n2, e2, o2) {
  return new k(t2, r2, n2, e2, o2);
}
var k = function(t2) {
  function n2(r2, n3, e2, o2, i2, u2) {
    var c2 = t2.call(this, r2) || this;
    return c2.onFinalize = i2, c2.shouldUnsubscribe = u2, c2._next = n3 ? function(t3) {
      try {
        n3(t3);
      } catch (t4) {
        r2.error(t4);
      }
    } : t2.prototype._next, c2._error = o2 ? function(t3) {
      try {
        o2(t3);
      } catch (t4) {
        r2.error(t4);
      } finally {
        this.unsubscribe();
      }
    } : t2.prototype._error, c2._complete = e2 ? function() {
      try {
        e2();
      } catch (t3) {
        r2.error(t3);
      } finally {
        this.unsubscribe();
      }
    } : t2.prototype._complete, c2;
  }
  return r(n2, t2), n2.prototype.unsubscribe = function() {
    var r2;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      var n3 = this.closed;
      t2.prototype.unsubscribe.call(this), n3 || null === (r2 = this.onFinalize) || void 0 === r2 || r2.call(this);
    }
  }, n2;
}(w), z = s(function(t2) {
  return function() {
    t2(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
}), C = function(t2) {
  function n2() {
    var r2 = t2.call(this) || this;
    return r2.closed = false, r2.currentObservers = null, r2.observers = [], r2.isStopped = false, r2.hasError = false, r2.thrownError = null, r2;
  }
  return r(n2, t2), n2.prototype.lift = function(t3) {
    var r2 = new L(this, this);
    return r2.operator = t3, r2;
  }, n2.prototype._throwIfClosed = function() {
    if (this.closed) throw new z();
  }, n2.prototype.next = function(t3) {
    var r2 = this;
    (function() {
      var n3, o2;
      if (r2._throwIfClosed(), !r2.isStopped) {
        r2.currentObservers || (r2.currentObservers = Array.from(r2.observers));
        try {
          for (var i2 = e(r2.currentObservers), u2 = i2.next(); !u2.done; u2 = i2.next()) u2.value.next(t3);
        } catch (t4) {
          n3 = { error: t4 };
        } finally {
          try {
            u2 && !u2.done && (o2 = i2.return) && o2.call(i2);
          } finally {
            if (n3) throw n3.error;
          }
        }
      }
    })();
  }, n2.prototype.error = function(t3) {
    var r2 = this;
    (function() {
      if (r2._throwIfClosed(), !r2.isStopped) {
        r2.hasError = r2.isStopped = true, r2.thrownError = t3;
        for (var n3 = r2.observers; n3.length; ) n3.shift().error(t3);
      }
    })();
  }, n2.prototype.complete = function() {
    var t3 = this;
    (function() {
      if (t3._throwIfClosed(), !t3.isStopped) {
        t3.isStopped = true;
        for (var r2 = t3.observers; r2.length; ) r2.shift().complete();
      }
    })();
  }, n2.prototype.unsubscribe = function() {
    this.isStopped = this.closed = true, this.observers = this.currentObservers = null;
  }, Object.defineProperty(n2.prototype, "observed", { get: function() {
    var t3;
    return (null === (t3 = this.observers) || void 0 === t3 ? void 0 : t3.length) > 0;
  }, enumerable: false, configurable: true }), n2.prototype._trySubscribe = function(r2) {
    return this._throwIfClosed(), t2.prototype._trySubscribe.call(this, r2);
  }, n2.prototype._subscribe = function(t3) {
    return this._throwIfClosed(), this._checkFinalizedStatuses(t3), this._innerSubscribe(t3);
  }, n2.prototype._innerSubscribe = function(t3) {
    var r2 = this, n3 = this.hasError, e2 = this.isStopped, o2 = this.observers;
    return n3 || e2 ? h : (this.currentObservers = null, o2.push(t3), new f(function() {
      r2.currentObservers = null, l(o2, t3);
    }));
  }, n2.prototype._checkFinalizedStatuses = function(t3) {
    var r2 = this.hasError, n3 = this.thrownError, e2 = this.isStopped;
    r2 ? t3.error(n3) : e2 && t3.complete();
  }, n2.prototype.asObservable = function() {
    var t3 = new A();
    return t3.source = this, t3;
  }, n2.create = function(t3, r2) {
    return new L(t3, r2);
  }, n2;
}(A), L = function(t2) {
  function n2(r2, n3) {
    var e2 = t2.call(this) || this;
    return e2.destination = r2, e2.source = n3, e2;
  }
  return r(n2, t2), n2.prototype.next = function(t3) {
    var r2, n3;
    null === (n3 = null === (r2 = this.destination) || void 0 === r2 ? void 0 : r2.next) || void 0 === n3 || n3.call(r2, t3);
  }, n2.prototype.error = function(t3) {
    var r2, n3;
    null === (n3 = null === (r2 = this.destination) || void 0 === r2 ? void 0 : r2.error) || void 0 === n3 || n3.call(r2, t3);
  }, n2.prototype.complete = function() {
    var t3, r2;
    null === (r2 = null === (t3 = this.destination) || void 0 === t3 ? void 0 : t3.complete) || void 0 === r2 || r2.call(t3);
  }, n2.prototype._subscribe = function(t3) {
    var r2, n3;
    return null !== (n3 = null === (r2 = this.source) || void 0 === r2 ? void 0 : r2.subscribe(t3)) && void 0 !== n3 ? n3 : h;
  }, n2;
}(C), U = function(t2) {
  function n2(r2) {
    var n3 = t2.call(this) || this;
    return n3._value = r2, n3;
  }
  return r(n2, t2), Object.defineProperty(n2.prototype, "value", { get: function() {
    return this.getValue();
  }, enumerable: false, configurable: true }), n2.prototype._subscribe = function(r2) {
    var n3 = t2.prototype._subscribe.call(this, r2);
    return n3.closed || r2.next(this._value), n3;
  }, n2.prototype.getValue = function() {
    var t3 = this.hasError, r2 = this.thrownError, n3 = this._value;
    if (t3) throw r2;
    return this._throwIfClosed(), n3;
  }, n2.prototype.next = function(r2) {
    t2.prototype.next.call(this, this._value = r2);
  }, n2;
}(C), Y = function() {
  return Date.now();
}, F = function(t2) {
  function n2(r2, n3) {
    return t2.call(this) || this;
  }
  return r(n2, t2), n2.prototype.schedule = function(t3, r2) {
    return this;
  }, n2;
}(f), M = { setInterval: function(t2, r2) {
  for (var n2 = [], e2 = 2; e2 < arguments.length; e2++) n2[e2 - 2] = arguments[e2];
  return setInterval.apply(void 0, i([t2, r2], o(n2)));
}, clearInterval: function(t2) {
  return clearInterval(t2);
} }, R = function(t2) {
  function n2(r2, n3) {
    var e2 = t2.call(this, r2, n3) || this;
    return e2.scheduler = r2, e2.work = n3, e2.pending = false, e2;
  }
  return r(n2, t2), n2.prototype.schedule = function(t3, r2) {
    if (void 0 === r2 && (r2 = 0), this.closed) return this;
    this.state = t3;
    var n3, e2 = this.id, o2 = this.scheduler;
    return null != e2 && (this.id = this.recycleAsyncId(o2, e2, r2)), this.pending = true, this.delay = r2, this.id = null !== (n3 = this.id) && void 0 !== n3 ? n3 : this.requestAsyncId(o2, this.id, r2), this;
  }, n2.prototype.requestAsyncId = function(t3, r2, n3) {
    return void 0 === n3 && (n3 = 0), M.setInterval(t3.flush.bind(t3, this), n3);
  }, n2.prototype.recycleAsyncId = function(t3, r2, n3) {
    if (void 0 === n3 && (n3 = 0), null != n3 && this.delay === n3 && false === this.pending) return r2;
    null != r2 && M.clearInterval(r2);
  }, n2.prototype.execute = function(t3, r2) {
    if (this.closed) return Error("executing a cancelled action");
    this.pending = false;
    var n3 = this._execute(t3, r2);
    if (n3) return n3;
    false === this.pending && null != this.id && (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
  }, n2.prototype._execute = function(t3, r2) {
    var n3, e2 = false;
    try {
      this.work(t3);
    } catch (t4) {
      e2 = true, n3 = t4 || Error("Scheduled action threw falsy error");
    }
    if (e2) return this.unsubscribe(), n3;
  }, n2.prototype.unsubscribe = function() {
    if (!this.closed) {
      var r2 = this.id, n3 = this.scheduler, e2 = n3.actions;
      this.work = this.state = this.scheduler = null, this.pending = false, l(e2, this), null != r2 && (this.id = this.recycleAsyncId(n3, r2, null)), this.delay = null, t2.prototype.unsubscribe.call(this);
    }
  }, n2;
}(F), q = function() {
  function t2(r2, n2) {
    void 0 === n2 && (n2 = t2.now), this.schedulerActionCtor = r2, this.now = n2;
  }
  return t2.prototype.schedule = function(t3, r2, n2) {
    return void 0 === r2 && (r2 = 0), new this.schedulerActionCtor(this, t3).schedule(n2, r2);
  }, t2.now = Y, t2;
}(), B = new (function(t2) {
  function n2(r2, n3) {
    void 0 === n3 && (n3 = q.now);
    var e2 = t2.call(this, r2, n3) || this;
    return e2.actions = [], e2._active = false, e2;
  }
  return r(n2, t2), n2.prototype.flush = function(t3) {
    var r2, n3 = this.actions;
    if (this._active) {
      n3.push(t3);
      return;
    }
    this._active = true;
    do
      if (r2 = t3.execute(t3.state, t3.delay)) break;
    while (t3 = n3.shift());
    if (this._active = false, r2) {
      for (; t3 = n3.shift(); ) t3.unsubscribe();
      throw r2;
    }
  }, n2;
}(q))(R), D = new A(function(t2) {
  return t2.complete();
});
function N(t2) {
  return t2 && c(t2.schedule);
}
function V(t2) {
  return t2[t2.length - 1];
}
function G(t2) {
  return N(V(t2)) ? t2.pop() : void 0;
}
var H = function(t2) {
  return t2 && "number" == typeof t2.length && "function" != typeof t2;
};
function J(t2) {
  return c(null == t2 ? void 0 : t2.then);
}
function K(t2) {
  return Symbol.asyncIterator && c(null == t2 ? void 0 : t2[Symbol.asyncIterator]);
}
function Q(t2) {
  return TypeError("You provided " + (null !== t2 && "object" == typeof t2 ? "an invalid object" : "'" + t2 + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
var W = "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator";
function X(t2) {
  return c(null == t2 ? void 0 : t2[W]);
}
function Z(t2) {
  return function(t3, r2, n2) {
    if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
    var e2, o2 = n2.apply(t3, r2 || []), i2 = [];
    return e2 = Object.create(("function" == typeof AsyncIterator ? AsyncIterator : Object).prototype), c2("next"), c2("throw"), c2("return", function(t4) {
      return function(r3) {
        return Promise.resolve(r3).then(t4, l2);
      };
    }), e2[Symbol.asyncIterator] = function() {
      return this;
    }, e2;
    function c2(t4, r3) {
      o2[t4] && (e2[t4] = function(r4) {
        return new Promise(function(n3, e3) {
          i2.push([t4, r4, n3, e3]) > 1 || s2(t4, r4);
        });
      }, r3 && (e2[t4] = r3(e2[t4])));
    }
    function s2(t4, r3) {
      try {
        var n3;
        (n3 = o2[t4](r3)).value instanceof u ? Promise.resolve(n3.value.v).then(a2, l2) : f2(i2[0][2], n3);
      } catch (t5) {
        f2(i2[0][3], t5);
      }
    }
    function a2(t4) {
      s2("next", t4);
    }
    function l2(t4) {
      s2("throw", t4);
    }
    function f2(t4, r3) {
      t4(r3), i2.shift(), i2.length && s2(i2[0][0], i2[0][1]);
    }
  }(this, arguments, function() {
    var r2, e2, o2;
    return n(this, function(n2) {
      switch (n2.label) {
        case 0:
          r2 = t2.getReader(), n2.label = 1;
        case 1:
          n2.trys.push([1, , 9, 10]), n2.label = 2;
        case 2:
          return [4, u(r2.read())];
        case 3:
          if (o2 = (e2 = n2.sent()).value, !e2.done) return [3, 5];
          return [4, u(void 0)];
        case 4:
          return [2, n2.sent()];
        case 5:
          return [4, u(o2)];
        case 6:
          return [4, n2.sent()];
        case 7:
          return n2.sent(), [3, 2];
        case 8:
          return [3, 10];
        case 9:
          return r2.releaseLock(), [7];
        case 10:
          return [2];
      }
    });
  });
}
function $(t2) {
  return c(null == t2 ? void 0 : t2.getReader);
}
function tt(t2) {
  if (t2 instanceof A) return t2;
  if (null != t2) {
    if (c(t2[S])) return new A(function(r2) {
      var n2 = t2[S]();
      if (c(n2.subscribe)) return n2.subscribe(r2);
      throw TypeError("Provided object does not correctly implement Symbol.observable");
    });
    if (H(t2)) return new A(function(r2) {
      for (var n2 = 0; n2 < t2.length && !r2.closed; n2++) r2.next(t2[n2]);
      r2.complete();
    });
    if (J(t2)) return new A(function(r2) {
      t2.then(function(t3) {
        r2.closed || (r2.next(t3), r2.complete());
      }, function(t3) {
        return r2.error(t3);
      }).then(null, b);
    });
    if (K(t2)) return tr(t2);
    if (X(t2)) return new A(function(r2) {
      var n2, o2;
      try {
        for (var i2 = e(t2), u2 = i2.next(); !u2.done; u2 = i2.next()) {
          var c2 = u2.value;
          if (r2.next(c2), r2.closed) return;
        }
      } catch (t3) {
        n2 = { error: t3 };
      } finally {
        try {
          u2 && !u2.done && (o2 = i2.return) && o2.call(i2);
        } finally {
          if (n2) throw n2.error;
        }
      }
      r2.complete();
    });
    if ($(t2)) return tr(Z(t2));
  }
  throw Q(t2);
}
function tr(t2) {
  return new A(function(r2) {
    (function(t3, r3) {
      var o2, i2, u2, c2, s2, a2, l2, f2;
      return s2 = this, a2 = void 0, l2 = void 0, f2 = function() {
        var s3;
        return n(this, function(n2) {
          switch (n2.label) {
            case 0:
              n2.trys.push([0, 5, 6, 11]), o2 = function(t4) {
                if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
                var r4, n3 = t4[Symbol.asyncIterator];
                return n3 ? n3.call(t4) : (t4 = e(t4), r4 = {}, o3("next"), o3("throw"), o3("return"), r4[Symbol.asyncIterator] = function() {
                  return this;
                }, r4);
                function o3(n4) {
                  r4[n4] = t4[n4] && function(r5) {
                    return new Promise(function(e2, o4) {
                      (function(t5, r6, n5, e3) {
                        Promise.resolve(e3).then(function(r7) {
                          t5({ value: r7, done: n5 });
                        }, r6);
                      })(e2, o4, (r5 = t4[n4](r5)).done, r5.value);
                    });
                  };
                }
              }(t3), n2.label = 1;
            case 1:
              return [4, o2.next()];
            case 2:
              if ((i2 = n2.sent()).done) return [3, 4];
              if (s3 = i2.value, r3.next(s3), r3.closed) return [2];
              n2.label = 3;
            case 3:
              return [3, 1];
            case 4:
              return [3, 11];
            case 5:
              return u2 = { error: n2.sent() }, [3, 11];
            case 6:
              if (n2.trys.push([6, , 9, 10]), !(i2 && !i2.done && (c2 = o2.return))) return [3, 8];
              return [4, c2.call(o2)];
            case 7:
              n2.sent(), n2.label = 8;
            case 8:
              return [3, 10];
            case 9:
              if (u2) throw u2.error;
              return [7];
            case 10:
              return [7];
            case 11:
              return r3.complete(), [2];
          }
        });
      }, new (l2 || (l2 = Promise))(function(t4, r4) {
        function n2(t5) {
          try {
            o3(f2.next(t5));
          } catch (t6) {
            r4(t6);
          }
        }
        function e2(t5) {
          try {
            o3(f2.throw(t5));
          } catch (t6) {
            r4(t6);
          }
        }
        function o3(r5) {
          var o4;
          r5.done ? t4(r5.value) : ((o4 = r5.value) instanceof l2 ? o4 : new l2(function(t5) {
            t5(o4);
          })).then(n2, e2);
        }
        o3((f2 = f2.apply(s2, a2 || [])).next());
      });
    })(t2, r2).catch(function(t3) {
      return r2.error(t3);
    });
  });
}
function tn(t2, r2, n2, e2, o2) {
  void 0 === e2 && (e2 = 0), void 0 === o2 && (o2 = false);
  var i2 = r2.schedule(function() {
    n2(), o2 ? t2.add(this.schedule(null, e2)) : this.unsubscribe();
  }, e2);
  if (t2.add(i2), !o2) return i2;
}
function te(t2, r2) {
  return void 0 === r2 && (r2 = 0), j(function(n2, e2) {
    n2.subscribe(T(e2, function(n3) {
      return tn(e2, t2, function() {
        return e2.next(n3);
      }, r2);
    }, function() {
      return tn(e2, t2, function() {
        return e2.complete();
      }, r2);
    }, function(n3) {
      return tn(e2, t2, function() {
        return e2.error(n3);
      }, r2);
    }));
  });
}
function to(t2, r2) {
  return void 0 === r2 && (r2 = 0), j(function(n2, e2) {
    e2.add(t2.schedule(function() {
      return n2.subscribe(e2);
    }, r2));
  });
}
function ti(t2, r2) {
  if (!t2) throw Error("Iterable cannot be null");
  return new A(function(n2) {
    tn(n2, r2, function() {
      var e2 = t2[Symbol.asyncIterator]();
      tn(n2, r2, function() {
        e2.next().then(function(t3) {
          t3.done ? n2.complete() : n2.next(t3.value);
        });
      }, 0, true);
    });
  });
}
function tu(t2, r2) {
  return r2 ? function(t3, r3) {
    if (null != t3) {
      if (c(t3[S])) return tt(t3).pipe(to(r3), te(r3));
      if (H(t3)) return new A(function(n2) {
        var e2 = 0;
        return r3.schedule(function() {
          e2 === t3.length ? n2.complete() : (n2.next(t3[e2++]), n2.closed || this.schedule());
        });
      });
      if (J(t3)) return tt(t3).pipe(to(r3), te(r3));
      if (K(t3)) return ti(t3, r3);
      if (X(t3)) return new A(function(n2) {
        var e2;
        return tn(n2, r3, function() {
          e2 = t3[W](), tn(n2, r3, function() {
            var t4, r4, o2;
            try {
              r4 = (t4 = e2.next()).value, o2 = t4.done;
            } catch (t5) {
              n2.error(t5);
              return;
            }
            o2 ? n2.complete() : n2.next(r4);
          }, 0, true);
        }), function() {
          return c(null == e2 ? void 0 : e2.return) && e2.return();
        };
      });
      if ($(t3)) return ti(Z(t3), r3);
    }
    throw Q(t3);
  }(t2, r2) : tt(t2);
}
function tc(t2) {
  return !!t2 && (t2 instanceof A || c(t2.lift) && c(t2.subscribe));
}
function ts(t2, r2) {
  return j(function(n2, e2) {
    var o2 = 0;
    n2.subscribe(T(e2, function(n3) {
      e2.next(t2.call(r2, n3, o2++));
    }));
  });
}
var ta = Array.isArray;
function tl(t2) {
  return ts(function(r2) {
    return ta(r2) ? t2.apply(void 0, i([], o(r2))) : t2(r2);
  });
}
var tf = Array.isArray, th = Object.getPrototypeOf, tp = Object.prototype, tv = Object.keys;
function td() {
  for (var t2, r2 = [], n2 = 0; n2 < arguments.length; n2++) r2[n2] = arguments[n2];
  var e2 = G(r2), o2 = c(V(r2)) ? r2.pop() : void 0, i2 = function(t3) {
    if (1 === t3.length) {
      var r3 = t3[0];
      if (tf(r3)) return { args: r3, keys: null };
      if (r3 && "object" == typeof r3 && th(r3) === tp) {
        var n3 = tv(r3);
        return { args: n3.map(function(t4) {
          return r3[t4];
        }), keys: n3 };
      }
    }
    return { args: t3, keys: null };
  }(r2), u2 = i2.args, s2 = i2.keys;
  if (0 === u2.length) return tu([], e2);
  var a2 = new A((void 0 === (t2 = s2 ? function(t3) {
    return s2.reduce(function(r3, n3, e3) {
      return r3[n3] = t3[e3], r3;
    }, {});
  } : O) && (t2 = O), function(r3) {
    var n3, o3, i3;
    n3 = e2, o3 = function() {
      for (var n4 = u2.length, o4 = Array(n4), i4 = n4, c2 = n4, s3 = function(n5) {
        var s4, a4, l2;
        s4 = e2, a4 = function() {
          var s5 = tu(u2[n5], e2), a5 = false;
          s5.subscribe(T(r3, function(e3) {
            o4[n5] = e3, !a5 && (a5 = true, c2--), c2 || r3.next(t2(o4.slice()));
          }, function() {
            --i4 || r3.complete();
          }));
        }, l2 = r3, s4 ? tn(l2, s4, a4) : a4();
      }, a3 = 0; a3 < n4; a3++) s3(a3);
    }, i3 = r3, n3 ? tn(i3, n3, o3) : o3();
  }));
  return o2 ? a2.pipe(tl(o2)) : a2;
}
function ty(t2, r2, n2) {
  return (void 0 === n2 && (n2 = 1 / 0), c(r2)) ? ty(function(n3, e2) {
    return ts(function(t3, o2) {
      return r2(n3, t3, e2, o2);
    })(tt(t2(n3, e2)));
  }, n2) : ("number" == typeof r2 && (n2 = r2), j(function(r3, e2) {
    var o2, i2, u2, c2, s2, a2, l2;
    return o2 = n2, i2 = [], u2 = 0, c2 = 0, s2 = false, a2 = function() {
      !s2 || i2.length || u2 || e2.complete();
    }, l2 = function(r4) {
      u2++;
      var n3 = false;
      tt(t2(r4, c2++)).subscribe(T(e2, function(t3) {
        e2.next(t3);
      }, function() {
        n3 = true;
      }, void 0, function() {
        if (n3) try {
          for (u2--; i2.length && u2 < o2; ) !function() {
            var t3 = i2.shift();
            l2(t3);
          }();
          a2();
        } catch (t3) {
          e2.error(t3);
        }
      }));
    }, r3.subscribe(T(e2, function(t3) {
      return u2 < o2 ? l2(t3) : i2.push(t3);
    }, function() {
      s2 = true, a2();
    })), function() {
    };
  }));
}
var tb = ["addListener", "removeListener"], tm = ["addEventListener", "removeEventListener"], tw = ["on", "off"];
function t_(t2, r2, n2, e2) {
  if (c(n2) && (e2 = n2, n2 = void 0), e2) return t_(t2, r2, n2).pipe(tl(e2));
  var i2 = o(c(t2.addEventListener) && c(t2.removeEventListener) ? tm.map(function(e3) {
    return function(o2) {
      return t2[e3](r2, o2, n2);
    };
  }) : c(t2.addListener) && c(t2.removeListener) ? tb.map(tg(t2, r2)) : c(t2.on) && c(t2.off) ? tw.map(tg(t2, r2)) : [], 2), u2 = i2[0], s2 = i2[1];
  if (!u2 && H(t2)) return ty(function(t3) {
    return t_(t3, r2, n2);
  })(tt(t2));
  if (!u2) throw TypeError("Invalid event target");
  return new A(function(t3) {
    var r3 = function() {
      for (var r4 = [], n3 = 0; n3 < arguments.length; n3++) r4[n3] = arguments[n3];
      return t3.next(1 < r4.length ? r4 : r4[0]);
    };
    return u2(r3), function() {
      return s2(r3);
    };
  });
}
function tg(t2, r2) {
  return function(n2) {
    return function(e2) {
      return t2[n2](r2, e2);
    };
  };
}
function tx() {
  for (var t2, r2, n2 = [], e2 = 0; e2 < arguments.length; e2++) n2[e2] = arguments[e2];
  var o2 = G(n2), i2 = (t2 = 1 / 0, "number" == typeof V(n2) ? n2.pop() : t2);
  return n2.length ? 1 === n2.length ? tt(n2[0]) : (void 0 === (r2 = i2) && (r2 = 1 / 0), ty(O, r2))(tu(n2, o2)) : D;
}
function tS(t2, r2) {
  return void 0 === r2 && (r2 = B), j(function(n2, e2) {
    var o2 = null, i2 = null, u2 = null, c2 = function() {
      if (o2) {
        o2.unsubscribe(), o2 = null;
        var t3 = i2;
        i2 = null, e2.next(t3);
      }
    };
    function s2() {
      var n3 = u2 + t2, i3 = r2.now();
      if (i3 < n3) {
        o2 = this.schedule(void 0, n3 - i3), e2.add(o2);
        return;
      }
      c2();
    }
    n2.subscribe(T(e2, function(n3) {
      i2 = n3, u2 = r2.now(), o2 || (o2 = r2.schedule(s2, t2), e2.add(o2));
    }, function() {
      c2(), e2.complete();
    }, void 0, function() {
      i2 = o2 = null;
    }));
  });
}
function tO(t2, r2) {
  void 0 === r2 && (r2 = B);
  var n2, e2, o2, i2, u2, c2 = (n2 = t2, e2 = r2, void 0 === n2 && (n2 = 0), void 0 === o2 && (o2 = B), i2 = -1, null != e2 && (N(e2) ? o2 = e2 : i2 = e2), new A(function(t3) {
    var r3, e3 = (r3 = n2) instanceof Date && !isNaN(r3) ? +n2 - o2.now() : n2;
    e3 < 0 && (e3 = 0);
    var u3 = 0;
    return o2.schedule(function() {
      t3.closed || (t3.next(u3++), 0 <= i2 ? this.schedule(void 0, i2) : t3.complete());
    }, e3);
  }));
  return u2 = function() {
    return c2;
  }, ty(function(t3, r3) {
    return tt(u2(t3, r3)).pipe(j(function(t4, r4) {
      var n3 = 0;
      t4.subscribe(T(r4, function(t5) {
        ++n3 <= 1 && (r4.next(t5), 1 <= n3 && r4.complete());
      }));
    }), ts(function() {
      return t3;
    }));
  });
}
function tE(t2, r2) {
  return void 0 === r2 && (r2 = O), t2 = null != t2 ? t2 : tI, j(function(n2, e2) {
    var o2, i2 = true;
    n2.subscribe(T(e2, function(n3) {
      var u2 = r2(n3);
      (i2 || !t2(o2, u2)) && (i2 = false, o2 = u2, e2.next(n3));
    }));
  });
}
function tI(t2, r2) {
  return t2 === r2;
}
function tA(t2, r2) {
  return j(function(n2, e2) {
    var o2 = null, i2 = 0, u2 = false, c2 = function() {
      return u2 && !o2 && e2.complete();
    };
    n2.subscribe(T(e2, function(n3) {
      null == o2 || o2.unsubscribe();
      var u3 = 0, s2 = i2++;
      tt(t2(n3, s2)).subscribe(o2 = T(e2, function(t3) {
        return e2.next(r2 ? r2(n3, t3, s2, u3++) : t3);
      }, function() {
        o2 = null, c2();
      }));
    }, function() {
      u2 = true, c2();
    }));
  });
}
function tP(t2, r2, n2) {
  var e2 = c(t2) || r2 || n2 ? { next: t2, error: r2, complete: n2 } : t2;
  return e2 ? j(function(t3, r3) {
    null === (n3 = e2.subscribe) || void 0 === n3 || n3.call(e2);
    var n3, o2 = true;
    t3.subscribe(T(r3, function(t4) {
      var n4;
      null === (n4 = e2.next) || void 0 === n4 || n4.call(e2, t4), r3.next(t4);
    }, function() {
      var t4;
      o2 = false, null === (t4 = e2.complete) || void 0 === t4 || t4.call(e2), r3.complete();
    }, function(t4) {
      var n4;
      o2 = false, null === (n4 = e2.error) || void 0 === n4 || n4.call(e2, t4), r3.error(t4);
    }, function() {
      var t4, r4;
      o2 && (null === (t4 = e2.unsubscribe) || void 0 === t4 || t4.call(e2)), null === (r4 = e2.finalize) || void 0 === r4 || r4.call(e2);
    }));
  }) : O;
}
function tj(t2, r2) {
  var n2 = {};
  for (var e2 in t2) Object.prototype.hasOwnProperty.call(t2, e2) && 0 > r2.indexOf(e2) && (n2[e2] = t2[e2]);
  if (null != t2 && "function" == typeof Object.getOwnPropertySymbols) for (var o2 = 0, e2 = Object.getOwnPropertySymbols(t2); o2 < e2.length; o2++) 0 > r2.indexOf(e2[o2]) && Object.prototype.propertyIsEnumerable.call(t2, e2[o2]) && (n2[e2[o2]] = t2[e2[o2]]);
  return n2;
}
export {
  U as B,
  D as E,
  A as O,
  C as S,
  tj as _,
  tu as a,
  ts as b,
  td as c,
  tO as d,
  tE as e,
  t_ as f,
  tS as g,
  tc as i,
  tx as m,
  E as p,
  tA as s,
  tP as t
};
