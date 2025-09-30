import { n as e, r as t, t as n } from "./rolldown-runtime.D8qhy2Lt.chunk.js";
import { C as r, E as i, K as l, a as o, m as a, o as u, r as c, s, w as f } from "./lib-nodepkg-vuekit.Dng4O0gc.chunk.js";
function p(e, t) {
	return void 0 === t && (t = i), e = null != e ? e : d, f(function(n, i) {
		var l, o = !0;
		n.subscribe(r(i, function(n) {
			var r = t(n);
			(o || !e(l, r)) && (o = !1, l = r, i.next(n));
		}));
	});
}
function d(e, t) {
	return e === t;
}
var h = {};
function m(e, t, n) {
	var r;
	if ((r = e) && "object" == typeof r) {
		if ("value" in e) return "html" !== e.type || n ? e.value : "";
		if (t && "alt" in e && e.alt) return e.alt;
		if ("children" in e) return g(e.children, t, n);
	}
	return Array.isArray(e) ? g(e, t, n) : "";
}
function g(e, t, n) {
	let r = [], i = -1;
	for (; ++i < e.length;) r[i] = m(e[i], t, n);
	return r.join("");
}
var y = document.createElement("i");
function v(e) {
	let t = "&" + e + ";";
	y.innerHTML = t;
	let n = y.textContent;
	return (59 !== n.charCodeAt(n.length - 1) || "semi" === e) && n !== t && n;
}
function x(e, t, n, r) {
	let i, l = e.length, o = 0;
	if (t = t < 0 ? -t > l ? 0 : l + t : t > l ? l : t, n = n > 0 ? n : 0, r.length < 1e4) (i = Array.from(r)).unshift(t, n), e.splice(...i);
	else for (n && e.splice(t, n); o < r.length;) (i = r.slice(o, o + 1e4)).unshift(t, 0), e.splice(...i), o += 1e4, t += 1e4;
}
function k(e, t) {
	return e.length > 0 ? (x(e, e.length, 0, t), e) : t;
}
var b = {}.hasOwnProperty;
function C(e) {
	let t = {}, n = -1;
	for (; ++n < e.length;) (function(e, t) {
		let n;
		for (n in t) {
			let r, i = (b.call(e, n) ? e[n] : void 0) || (e[n] = {}), l = t[n];
			if (l) for (r in l) {
				b.call(i, r) || (i[r] = []);
				let e = l[r];
				(function(e, t) {
					let n = -1, r = [];
					for (; ++n < t.length;) ("after" === t[n].add ? e : r).push(t[n]);
					x(e, 0, 0, r);
				})(i[r], Array.isArray(e) ? e : e ? [e] : []);
			}
		}
	})(t, e[n]);
	return t;
}
function S(e, t) {
	let n = Number.parseInt(e, t);
	return n < 9 || 11 === n || n > 13 && n < 32 || n > 126 && n < 160 || n > 55295 && n < 57344 || n > 64975 && n < 65008 || (65535 & n) == 65535 || (65535 & n) == 65534 || n > 1114111 ? "�" : String.fromCodePoint(n);
}
function w(e) {
	return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
let A = R(/[A-Za-z]/), T = R(/[\dA-Za-z]/), L = R(/[#-'*+\--9=?A-Z^-~]/);
function D(e) {
	return null !== e && (e < 32 || 127 === e);
}
let E = R(/\d/), M = R(/[\dA-Fa-f]/), z = R(/[!-/:-@[-`{-~]/);
function I(e) {
	return null !== e && e < -2;
}
function F(e) {
	return null !== e && (e < 0 || 32 === e);
}
function P(e) {
	return -2 === e || -1 === e || 32 === e;
}
let O = R(/\p{P}|\p{S}/u), N = R(/\s/);
function R(e) {
	return function(t) {
		return null !== t && t > -1 && e.test(String.fromCharCode(t));
	};
}
function _(e) {
	let t = [], n = -1, r = 0, i = 0;
	for (; ++n < e.length;) {
		let l = e.charCodeAt(n), o = "";
		if (37 === l && T(e.charCodeAt(n + 1)) && T(e.charCodeAt(n + 2))) i = 2;
		else if (l < 128) /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(l)) || (o = String.fromCharCode(l));
		else if (l > 55295 && l < 57344) {
			let t = e.charCodeAt(n + 1);
			l < 56320 && t > 56319 && t < 57344 ? (o = String.fromCharCode(l, t), i = 1) : o = "�";
		} else o = String.fromCharCode(l);
		o && (t.push(e.slice(r, n), encodeURIComponent(o)), r = n + i + 1, o = ""), i && (n += i, i = 0);
	}
	return t.join("") + e.slice(r);
}
function j(e, t, n, r) {
	let i = r ? r - 1 : Infinity, l = 0;
	return function(r) {
		return P(r) ? (e.enter(n), function r(o) {
			return P(o) && l++ < i ? (e.consume(o), r) : (e.exit(n), t(o));
		}(r)) : t(r);
	};
}
let B = { tokenize: function(e) {
	let t, n = e.attempt(this.parser.constructs.contentInitial, function(t) {
		return null === t ? void e.consume(t) : (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), j(e, n, "linePrefix"));
	}, function(n) {
		return e.enter("paragraph"), function n(r) {
			let i = e.enter("chunkText", {
				contentType: "text",
				previous: t
			});
			return t && (t.next = i), t = i, function t(r) {
				if (null === r) {
					e.exit("chunkText"), e.exit("paragraph"), e.consume(r);
					return;
				}
				return I(r) ? (e.consume(r), e.exit("chunkText"), n) : (e.consume(r), t);
			}(r);
		}(n);
	});
	return n;
} }, H = { tokenize: function(e) {
	let t, n, r, i = this, l = [], o = 0;
	return a;
	function a(t) {
		if (o < l.length) {
			let n = l[o];
			return i.containerState = n[1], e.attempt(n[0].continuation, u, c)(t);
		}
		return c(t);
	}
	function u(e) {
		if (o++, i.containerState._closeFlow) {
			let n;
			i.containerState._closeFlow = void 0, t && y();
			let r = i.events.length, l = r;
			for (; l--;) if ("exit" === i.events[l][0] && "chunkFlow" === i.events[l][1].type) {
				n = i.events[l][1].end;
				break;
			}
			g(o);
			let a = r;
			for (; a < i.events.length;) i.events[a][1].end = { ...n }, a++;
			return x(i.events, l + 1, 0, i.events.slice(r)), i.events.length = a, c(e);
		}
		return a(e);
	}
	function c(n) {
		if (o === l.length) {
			if (!t) return p(n);
			if (t.currentConstruct && t.currentConstruct.concrete) return h(n);
			i.interrupt = !!(t.currentConstruct && !t._gfmTableDynamicInterruptHack);
		}
		return i.containerState = {}, e.check(V, s, f)(n);
	}
	function s(e) {
		return t && y(), g(o), p(e);
	}
	function f(e) {
		return i.parser.lazy[i.now().line] = o !== l.length, r = i.now().offset, h(e);
	}
	function p(t) {
		return i.containerState = {}, e.attempt(V, d, h)(t);
	}
	function d(e) {
		return o++, l.push([i.currentConstruct, i.containerState]), p(e);
	}
	function h(r) {
		if (null === r) {
			t && y(), g(0), e.consume(r);
			return;
		}
		return t = t || i.parser.flow(i.now()), e.enter("chunkFlow", {
			_tokenizer: t,
			contentType: "flow",
			previous: n
		}), function t(n) {
			if (null === n) {
				m(e.exit("chunkFlow"), !0), g(0), e.consume(n);
				return;
			}
			return I(n) ? (e.consume(n), m(e.exit("chunkFlow")), o = 0, i.interrupt = void 0, a) : (e.consume(n), t);
		}(r);
	}
	function m(e, l) {
		let a = i.sliceStream(e);
		if (l && a.push(null), e.previous = n, n && (n.next = e), n = e, t.defineSkip(e.start), t.write(a), i.parser.lazy[e.start.line]) {
			let e, n, l = t.events.length;
			for (; l--;) if (t.events[l][1].start.offset < r && (!t.events[l][1].end || t.events[l][1].end.offset > r)) return;
			let a = i.events.length, u = a;
			for (; u--;) if ("exit" === i.events[u][0] && "chunkFlow" === i.events[u][1].type) {
				if (e) {
					n = i.events[u][1].end;
					break;
				}
				e = !0;
			}
			for (g(o), l = a; l < i.events.length;) i.events[l][1].end = { ...n }, l++;
			x(i.events, u + 1, 0, i.events.slice(a)), i.events.length = l;
		}
	}
	function g(t) {
		let n = l.length;
		for (; n-- > t;) {
			let t = l[n];
			i.containerState = t[1], t[0].exit.call(i, e);
		}
		l.length = t;
	}
	function y() {
		t.write([null]), n = void 0, t = void 0, i.containerState._closeFlow = void 0;
	}
} };
var V = { tokenize: function(e, t, n) {
	return j(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
} };
function U(e) {
	return null === e || F(e) || N(e) ? 1 : O(e) ? 2 : void 0;
}
function q(e, t, n) {
	let r = [], i = -1;
	for (; ++i < e.length;) {
		let l = e[i].resolveAll;
		l && !r.includes(l) && (t = l(t, n), r.push(l));
	}
	return t;
}
let W = {
	name: "attention",
	resolveAll: function(e, t) {
		let n, r, i, l, o, a, u, c, s = -1;
		for (; ++s < e.length;) if ("enter" === e[s][0] && "attentionSequence" === e[s][1].type && e[s][1]._close) {
			for (n = s; n--;) if ("exit" === e[n][0] && "attentionSequence" === e[n][1].type && e[n][1]._open && t.sliceSerialize(e[n][1]).charCodeAt(0) === t.sliceSerialize(e[s][1]).charCodeAt(0)) {
				if ((e[n][1]._close || e[s][1]._open) && (e[s][1].end.offset - e[s][1].start.offset) % 3 && !((e[n][1].end.offset - e[n][1].start.offset + e[s][1].end.offset - e[s][1].start.offset) % 3)) continue;
				a = e[n][1].end.offset - e[n][1].start.offset > 1 && e[s][1].end.offset - e[s][1].start.offset > 1 ? 2 : 1;
				let f = { ...e[n][1].end }, p = { ...e[s][1].start };
				$(f, -a), $(p, a), l = {
					type: a > 1 ? "strongSequence" : "emphasisSequence",
					start: f,
					end: { ...e[n][1].end }
				}, o = {
					type: a > 1 ? "strongSequence" : "emphasisSequence",
					start: { ...e[s][1].start },
					end: p
				}, i = {
					type: a > 1 ? "strongText" : "emphasisText",
					start: { ...e[n][1].end },
					end: { ...e[s][1].start }
				}, r = {
					type: a > 1 ? "strong" : "emphasis",
					start: { ...l.start },
					end: { ...o.end }
				}, e[n][1].end = { ...l.start }, e[s][1].start = { ...o.end }, u = [], e[n][1].end.offset - e[n][1].start.offset && (u = k(u, [[
					"enter",
					e[n][1],
					t
				], [
					"exit",
					e[n][1],
					t
				]])), u = k(u, [
					[
						"enter",
						r,
						t
					],
					[
						"enter",
						l,
						t
					],
					[
						"exit",
						l,
						t
					],
					[
						"enter",
						i,
						t
					]
				]), u = k(u, q(t.parser.constructs.insideSpan.null, e.slice(n + 1, s), t)), u = k(u, [
					[
						"exit",
						i,
						t
					],
					[
						"enter",
						o,
						t
					],
					[
						"exit",
						o,
						t
					],
					[
						"exit",
						r,
						t
					]
				]), e[s][1].end.offset - e[s][1].start.offset ? (c = 2, u = k(u, [[
					"enter",
					e[s][1],
					t
				], [
					"exit",
					e[s][1],
					t
				]])) : c = 0, x(e, n - 1, s - n + 3, u), s = n + u.length - c - 2;
				break;
			}
		}
		for (s = -1; ++s < e.length;) "attentionSequence" === e[s][1].type && (e[s][1].type = "data");
		return e;
	},
	tokenize: function(e, t) {
		let n, r = this.parser.constructs.attentionMarkers.null, i = this.previous, l = U(i);
		return function(o) {
			return n = o, e.enter("attentionSequence"), function o(a) {
				if (a === n) return e.consume(a), o;
				let u = e.exit("attentionSequence"), c = U(a), s = !c || 2 === c && l || r.includes(a), f = !l || 2 === l && c || r.includes(i);
				return u._open = !!(42 === n ? s : s && (l || !f)), u._close = !!(42 === n ? f : f && (c || !s)), t(a);
			}(o);
		};
	}
};
function $(e, t) {
	e.column += t, e.offset += t, e._bufferIndex += t;
}
let K = {
	partial: !0,
	tokenize: function(e, t, n) {
		return function(t) {
			return P(t) ? j(e, r, "linePrefix")(t) : r(t);
		};
		function r(e) {
			return null === e || I(e) ? t(e) : n(e);
		}
	}
}, Q = {
	continuation: { tokenize: function(e, t, n) {
		let r = this;
		return function(t) {
			return P(t) ? j(e, i, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : i(t);
		};
		function i(r) {
			return e.attempt(Q, t, n)(r);
		}
	} },
	exit: function(e) {
		e.exit("blockQuote");
	},
	name: "blockQuote",
	tokenize: function(e, t, n) {
		let r = this;
		return function(t) {
			if (62 === t) {
				let n = r.containerState;
				return n.open || (e.enter("blockQuote", { _container: !0 }), n.open = !0), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(t), e.exit("blockQuoteMarker"), i;
			}
			return n(t);
		};
		function i(n) {
			return P(n) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(n), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(n));
		}
	}
}, X = {
	name: "characterEscape",
	tokenize: function(e, t, n) {
		return function(t) {
			return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(t), e.exit("escapeMarker"), r;
		};
		function r(r) {
			return z(r) ? (e.enter("characterEscapeValue"), e.consume(r), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(r);
		}
	}
}, Z = {
	name: "characterReference",
	tokenize: function(e, t, n) {
		let r, i, l = this, o = 0;
		return function(t) {
			return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(t), e.exit("characterReferenceMarker"), a;
		};
		function a(t) {
			return 35 === t ? (e.enter("characterReferenceMarkerNumeric"), e.consume(t), e.exit("characterReferenceMarkerNumeric"), u) : (e.enter("characterReferenceValue"), r = 31, i = T, c(t));
		}
		function u(t) {
			return 88 === t || 120 === t ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(t), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), r = 6, i = M, c) : (e.enter("characterReferenceValue"), r = 7, i = E, c(t));
		}
		function c(a) {
			if (59 === a && o) {
				let r = e.exit("characterReferenceValue");
				return i !== T || v(l.sliceSerialize(r)) ? (e.enter("characterReferenceMarker"), e.consume(a), e.exit("characterReferenceMarker"), e.exit("characterReference"), t) : n(a);
			}
			return i(a) && o++ < r ? (e.consume(a), c) : n(a);
		}
	}
};
var Y = {
	partial: !0,
	tokenize: function(e, t, n) {
		let r = this;
		return function(t) {
			return null === t ? n(t) : (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), i);
		};
		function i(e) {
			return r.parser.lazy[r.now().line] ? n(e) : t(e);
		}
	}
};
let J = {
	concrete: !0,
	name: "codeFenced",
	tokenize: function(e, t, n) {
		let r, i = this, l = {
			partial: !0,
			tokenize: function(e, t, n) {
				let l = 0;
				return function(t) {
					return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), o;
				};
				function o(t) {
					return e.enter("codeFencedFence"), P(t) ? j(e, u, "linePrefix", i.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : u(t);
				}
				function u(t) {
					return t === r ? (e.enter("codeFencedFenceSequence"), function t(i) {
						return i === r ? (l++, e.consume(i), t) : l >= a ? (e.exit("codeFencedFenceSequence"), P(i) ? j(e, c, "whitespace")(i) : c(i)) : n(i);
					}(t)) : n(t);
				}
				function c(r) {
					return null === r || I(r) ? (e.exit("codeFencedFence"), t(r)) : n(r);
				}
			}
		}, o = 0, a = 0;
		return function(t) {
			var l = t;
			let c = i.events[i.events.length - 1];
			return o = c && "linePrefix" === c[1].type ? c[2].sliceSerialize(c[1], !0).length : 0, r = l, e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), function t(i) {
				return i === r ? (a++, e.consume(i), t) : a < 3 ? n(i) : (e.exit("codeFencedFenceSequence"), P(i) ? j(e, u, "whitespace")(i) : u(i));
			}(l);
		};
		function u(l) {
			return null === l || I(l) ? (e.exit("codeFencedFence"), i.interrupt ? t(l) : e.check(Y, s, h)(l)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", { contentType: "string" }), function t(i) {
				return null === i || I(i) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), u(i)) : P(i) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), j(e, c, "whitespace")(i)) : 96 === i && i === r ? n(i) : (e.consume(i), t);
			}(l));
		}
		function c(t) {
			return null === t || I(t) ? u(t) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", { contentType: "string" }), function t(i) {
				return null === i || I(i) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), u(i)) : 96 === i && i === r ? n(i) : (e.consume(i), t);
			}(t));
		}
		function s(t) {
			return e.attempt(l, h, f)(t);
		}
		function f(t) {
			return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), p;
		}
		function p(t) {
			return o > 0 && P(t) ? j(e, d, "linePrefix", o + 1)(t) : d(t);
		}
		function d(t) {
			return null === t || I(t) ? e.check(Y, s, h)(t) : (e.enter("codeFlowValue"), function t(n) {
				return null === n || I(n) ? (e.exit("codeFlowValue"), d(n)) : (e.consume(n), t);
			}(t));
		}
		function h(n) {
			return e.exit("codeFenced"), t(n);
		}
	}
}, G = {
	name: "codeIndented",
	tokenize: function(e, t, n) {
		let r = this;
		return function(t) {
			return e.enter("codeIndented"), j(e, i, "linePrefix", 5)(t);
		};
		function i(t) {
			let i = r.events[r.events.length - 1];
			return i && "linePrefix" === i[1].type && i[2].sliceSerialize(i[1], !0).length >= 4 ? function t(n) {
				return null === n ? l(n) : I(n) ? e.attempt(ee, t, l)(n) : (e.enter("codeFlowValue"), function n(r) {
					return null === r || I(r) ? (e.exit("codeFlowValue"), t(r)) : (e.consume(r), n);
				}(n));
			}(t) : n(t);
		}
		function l(n) {
			return e.exit("codeIndented"), t(n);
		}
	}
};
var ee = {
	partial: !0,
	tokenize: function(e, t, n) {
		let r = this;
		return i;
		function i(t) {
			return r.parser.lazy[r.now().line] ? n(t) : I(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), i) : j(e, l, "linePrefix", 5)(t);
		}
		function l(e) {
			let l = r.events[r.events.length - 1];
			return l && "linePrefix" === l[1].type && l[2].sliceSerialize(l[1], !0).length >= 4 ? t(e) : I(e) ? i(e) : n(e);
		}
	}
}, et = class {
	constructor(e) {
		this.left = e ? [...e] : [], this.right = [];
	}
	get(e) {
		if (e < 0 || e >= this.left.length + this.right.length) throw RangeError("Cannot access index `" + e + "` in a splice buffer of size `" + (this.left.length + this.right.length) + "`");
		return e < this.left.length ? this.left[e] : this.right[this.right.length - e + this.left.length - 1];
	}
	get length() {
		return this.left.length + this.right.length;
	}
	shift() {
		return this.setCursor(0), this.right.pop();
	}
	slice(e, t) {
		let n = null == t ? Infinity : t;
		return n < this.left.length ? this.left.slice(e, n) : e > this.left.length ? this.right.slice(this.right.length - n + this.left.length, this.right.length - e + this.left.length).reverse() : this.left.slice(e).concat(this.right.slice(this.right.length - n + this.left.length).reverse());
	}
	splice(e, t, n) {
		this.setCursor(Math.trunc(e));
		let r = this.right.splice(this.right.length - (t || 0), Infinity);
		return n && en(this.left, n), r.reverse();
	}
	pop() {
		return this.setCursor(Infinity), this.left.pop();
	}
	push(e) {
		this.setCursor(Infinity), this.left.push(e);
	}
	pushMany(e) {
		this.setCursor(Infinity), en(this.left, e);
	}
	unshift(e) {
		this.setCursor(0), this.right.push(e);
	}
	unshiftMany(e) {
		this.setCursor(0), en(this.right, e.reverse());
	}
	setCursor(e) {
		if (e !== this.left.length && (!(e > this.left.length) || 0 !== this.right.length) && (!(e < 0) || 0 !== this.left.length)) if (e < this.left.length) {
			let t = this.left.splice(e, Infinity);
			en(this.right, t.reverse());
		} else {
			let t = this.right.splice(this.left.length + this.right.length - e, Infinity);
			en(this.left, t.reverse());
		}
	}
};
function en(e, t) {
	let n = 0;
	if (t.length < 1e4) e.push(...t);
	else for (; n < t.length;) e.push(...t.slice(n, n + 1e4)), n += 1e4;
}
function er(e) {
	let t, n, r, i, l, o, a, u = {}, c = -1, s = new et(e);
	for (; ++c < s.length;) {
		for (; c in u;) c = u[c];
		if (t = s.get(c), c && "chunkFlow" === t[1].type && "listItemPrefix" === s.get(c - 1)[1].type && ((r = 0) < (o = t[1]._tokenizer.events).length && "lineEndingBlank" === o[r][1].type && (r += 2), r < o.length && "content" === o[r][1].type)) for (; ++r < o.length && "content" !== o[r][1].type;) "chunkText" === o[r][1].type && (o[r][1]._isInFirstContentOfListItem = !0, r++);
		if ("enter" === t[0]) t[1].contentType && (Object.assign(u, function(e, t) {
			let n, r, i = e.get(t)[1], l = e.get(t)[2], o = t - 1, a = [], u = i._tokenizer;
			!u && (u = l.parser[i.contentType](i.start), i._contentTypeTextTrailing && (u._contentTypeTextTrailing = !0));
			let c = u.events, s = [], f = {}, p = -1, d = i, h = 0, m = 0, g = [0];
			for (; d;) {
				for (; e.get(++o)[1] !== d;);
				a.push(o), !d._tokenizer && (n = l.sliceStream(d), d.next || n.push(null), r && u.defineSkip(d.start), d._isInFirstContentOfListItem && (u._gfmTasklistFirstContentOfListItem = !0), u.write(n), d._isInFirstContentOfListItem && (u._gfmTasklistFirstContentOfListItem = void 0)), r = d, d = d.next;
			}
			for (d = i; ++p < c.length;) "exit" === c[p][0] && "enter" === c[p - 1][0] && c[p][1].type === c[p - 1][1].type && c[p][1].start.line !== c[p][1].end.line && (m = p + 1, g.push(m), d._tokenizer = void 0, d.previous = void 0, d = d.next);
			for (u.events = [], d ? (d._tokenizer = void 0, d.previous = void 0) : g.pop(), p = g.length; p--;) {
				let t = c.slice(g[p], g[p + 1]), n = a.pop();
				s.push([n, n + t.length - 1]), e.splice(n, 2, t);
			}
			for (s.reverse(), p = -1; ++p < s.length;) f[h + s[p][0]] = h + s[p][1], h += s[p][1] - s[p][0] - 1;
			return f;
		}(s, c)), c = u[c], a = !0);
		else if (t[1]._container) {
			for (r = c, n = void 0; r--;) if ("lineEnding" === (i = s.get(r))[1].type || "lineEndingBlank" === i[1].type) "enter" === i[0] && (n && (s.get(n)[1].type = "lineEndingBlank"), i[1].type = "lineEnding", n = r);
			else if ("linePrefix" === i[1].type || "listItemIndent" === i[1].type);
			else break;
			n && (t[1].end = { ...s.get(n)[1].start }, (l = s.slice(n, c)).unshift(t), s.splice(n, c - n + 1, l));
		}
	}
	return x(e, 0, Infinity, s.slice(0)), !a;
}
let ei = {
	resolve: function(e) {
		return er(e), e;
	},
	tokenize: function(e, t) {
		let n;
		return function(t) {
			return e.enter("content"), n = e.enter("chunkContent", { contentType: "content" }), r(t);
		};
		function r(t) {
			return null === t ? i(t) : I(t) ? e.check(el, l, i)(t) : (e.consume(t), r);
		}
		function i(n) {
			return e.exit("chunkContent"), e.exit("content"), t(n);
		}
		function l(t) {
			return e.consume(t), e.exit("chunkContent"), n.next = e.enter("chunkContent", {
				contentType: "content",
				previous: n
			}), n = n.next, r;
		}
	}
};
var el = {
	partial: !0,
	tokenize: function(e, t, n) {
		let r = this;
		return function(t) {
			return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), j(e, i, "linePrefix");
		};
		function i(i) {
			if (null === i || I(i)) return n(i);
			let l = r.events[r.events.length - 1];
			return !r.parser.constructs.disable.null.includes("codeIndented") && l && "linePrefix" === l[1].type && l[2].sliceSerialize(l[1], !0).length >= 4 ? t(i) : e.interrupt(r.parser.constructs.flow, n, t)(i);
		}
	}
};
function eo(e, t, n, r, i, l, o, a, u) {
	let c = u || Infinity, s = 0;
	return function(t) {
		return 60 === t ? (e.enter(r), e.enter(i), e.enter(l), e.consume(t), e.exit(l), f) : null === t || 32 === t || 41 === t || D(t) ? n(t) : (e.enter(r), e.enter(o), e.enter(a), e.enter("chunkString", { contentType: "string" }), h(t));
	};
	function f(n) {
		return 62 === n ? (e.enter(l), e.consume(n), e.exit(l), e.exit(i), e.exit(r), t) : (e.enter(a), e.enter("chunkString", { contentType: "string" }), p(n));
	}
	function p(t) {
		return 62 === t ? (e.exit("chunkString"), e.exit(a), f(t)) : null === t || 60 === t || I(t) ? n(t) : (e.consume(t), 92 === t ? d : p);
	}
	function d(t) {
		return 60 === t || 62 === t || 92 === t ? (e.consume(t), p) : p(t);
	}
	function h(i) {
		return !s && (null === i || 41 === i || F(i)) ? (e.exit("chunkString"), e.exit(a), e.exit(o), e.exit(r), t(i)) : s < c && 40 === i ? (e.consume(i), s++, h) : 41 === i ? (e.consume(i), s--, h) : null === i || 32 === i || 40 === i || D(i) ? n(i) : (e.consume(i), 92 === i ? m : h);
	}
	function m(t) {
		return 40 === t || 41 === t || 92 === t ? (e.consume(t), h) : h(t);
	}
}
function ea(e, t, n, r, i, l) {
	let o, a = this, u = 0;
	return function(t) {
		return e.enter(r), e.enter(i), e.consume(t), e.exit(i), e.enter(l), c;
	};
	function c(f) {
		return u > 999 || null === f || 91 === f || 93 === f && !o || 94 === f && !u && "_hiddenFootnoteSupport" in a.parser.constructs ? n(f) : 93 === f ? (e.exit(l), e.enter(i), e.consume(f), e.exit(i), e.exit(r), t) : I(f) ? (e.enter("lineEnding"), e.consume(f), e.exit("lineEnding"), c) : (e.enter("chunkString", { contentType: "string" }), s(f));
	}
	function s(t) {
		return null === t || 91 === t || 93 === t || I(t) || u++ > 999 ? (e.exit("chunkString"), c(t)) : (e.consume(t), o || (o = !P(t)), 92 === t ? f : s);
	}
	function f(t) {
		return 91 === t || 92 === t || 93 === t ? (e.consume(t), u++, s) : s(t);
	}
}
function eu(e, t, n, r, i, l) {
	let o;
	return function(t) {
		return 34 === t || 39 === t || 40 === t ? (e.enter(r), e.enter(i), e.consume(t), e.exit(i), o = 40 === t ? 41 : t, a) : n(t);
	};
	function a(n) {
		return n === o ? (e.enter(i), e.consume(n), e.exit(i), e.exit(r), t) : (e.enter(l), u(n));
	}
	function u(t) {
		return t === o ? (e.exit(l), a(o)) : null === t ? n(t) : I(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), j(e, u, "linePrefix")) : (e.enter("chunkString", { contentType: "string" }), c(t));
	}
	function c(t) {
		return t === o || null === t || I(t) ? (e.exit("chunkString"), u(t)) : (e.consume(t), 92 === t ? s : c);
	}
	function s(t) {
		return t === o || 92 === t ? (e.consume(t), c) : c(t);
	}
}
function ec(e, t) {
	let n;
	return function r(i) {
		return I(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), n = !0, r) : P(i) ? j(e, r, n ? "linePrefix" : "lineSuffix")(i) : t(i);
	};
}
var es = {
	partial: !0,
	tokenize: function(e, t, n) {
		return function(t) {
			return F(t) ? ec(e, r)(t) : n(t);
		};
		function r(t) {
			return eu(e, i, n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(t);
		}
		function i(t) {
			return P(t) ? j(e, l, "whitespace")(t) : l(t);
		}
		function l(e) {
			return null === e || I(e) ? t(e) : n(e);
		}
	}
};
let ef = [
	"address",
	"article",
	"aside",
	"base",
	"basefont",
	"blockquote",
	"body",
	"caption",
	"center",
	"col",
	"colgroup",
	"dd",
	"details",
	"dialog",
	"dir",
	"div",
	"dl",
	"dt",
	"fieldset",
	"figcaption",
	"figure",
	"footer",
	"form",
	"frame",
	"frameset",
	"h1",
	"h2",
	"h3",
	"h4",
	"h5",
	"h6",
	"head",
	"header",
	"hr",
	"html",
	"iframe",
	"legend",
	"li",
	"link",
	"main",
	"menu",
	"menuitem",
	"nav",
	"noframes",
	"ol",
	"optgroup",
	"option",
	"p",
	"param",
	"search",
	"section",
	"summary",
	"table",
	"tbody",
	"td",
	"tfoot",
	"th",
	"thead",
	"title",
	"tr",
	"track",
	"ul"
], ep = [
	"pre",
	"script",
	"style",
	"textarea"
];
var ed = {
	partial: !0,
	tokenize: function(e, t, n) {
		return function(r) {
			return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), e.attempt(K, t, n);
		};
	}
}, eh = {
	partial: !0,
	tokenize: function(e, t, n) {
		let r = this;
		return function(t) {
			return I(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), i) : n(t);
		};
		function i(e) {
			return r.parser.lazy[r.now().line] ? n(e) : t(e);
		}
	}
};
let em = {
	name: "labelEnd",
	resolveAll: function(e) {
		let t = -1, n = [];
		for (; ++t < e.length;) {
			let r = e[t][1];
			if (n.push(e[t]), "labelImage" === r.type || "labelLink" === r.type || "labelEnd" === r.type) {
				let e = "labelImage" === r.type ? 4 : 2;
				r.type = "data", t += e;
			}
		}
		return e.length !== n.length && x(e, 0, e.length, n), e;
	},
	resolveTo: function(e, t) {
		let n, r, i, l, o = e.length, a = 0;
		for (; o--;) if (n = e[o][1], r) {
			if ("link" === n.type || "labelLink" === n.type && n._inactive) break;
			"enter" === e[o][0] && "labelLink" === n.type && (n._inactive = !0);
		} else if (i) {
			if ("enter" === e[o][0] && ("labelImage" === n.type || "labelLink" === n.type) && !n._balanced && (r = o, "labelLink" !== n.type)) {
				a = 2;
				break;
			}
		} else "labelEnd" === n.type && (i = o);
		let u = {
			type: "labelLink" === e[r][1].type ? "link" : "image",
			start: { ...e[r][1].start },
			end: { ...e[e.length - 1][1].end }
		}, c = {
			type: "label",
			start: { ...e[r][1].start },
			end: { ...e[i][1].end }
		}, s = {
			type: "labelText",
			start: { ...e[r + a + 2][1].end },
			end: { ...e[i - 2][1].start }
		};
		return l = k(l = [[
			"enter",
			u,
			t
		], [
			"enter",
			c,
			t
		]], e.slice(r + 1, r + a + 3)), l = k(l, [[
			"enter",
			s,
			t
		]]), l = k(l, q(t.parser.constructs.insideSpan.null, e.slice(r + a + 4, i - 3), t)), l = k(l, [
			[
				"exit",
				s,
				t
			],
			e[i - 2],
			e[i - 1],
			[
				"exit",
				c,
				t
			]
		]), l = k(l, e.slice(i + 1)), l = k(l, [[
			"exit",
			u,
			t
		]]), x(e, r, e.length, l), e;
	},
	tokenize: function(e, t, n) {
		let r, i, l = this, o = l.events.length;
		for (; o--;) if (("labelImage" === l.events[o][1].type || "labelLink" === l.events[o][1].type) && !l.events[o][1]._balanced) {
			r = l.events[o][1];
			break;
		}
		return function(t) {
			return r ? r._inactive ? s(t) : (i = l.parser.defined.includes(w(l.sliceSerialize({
				start: r.end,
				end: l.now()
			}))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelEnd"), a) : n(t);
		};
		function a(t) {
			return 40 === t ? e.attempt(eg, c, i ? c : s)(t) : 91 === t ? e.attempt(ey, c, i ? u : s)(t) : i ? c(t) : s(t);
		}
		function u(t) {
			return e.attempt(ev, c, s)(t);
		}
		function c(e) {
			return t(e);
		}
		function s(e) {
			return r._balanced = !0, n(e);
		}
	}
};
var eg = { tokenize: function(e, t, n) {
	return function(t) {
		return e.enter("resource"), e.enter("resourceMarker"), e.consume(t), e.exit("resourceMarker"), r;
	};
	function r(t) {
		return F(t) ? ec(e, i)(t) : i(t);
	}
	function i(t) {
		return 41 === t ? c(t) : eo(e, l, o, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(t);
	}
	function l(t) {
		return F(t) ? ec(e, a)(t) : c(t);
	}
	function o(e) {
		return n(e);
	}
	function a(t) {
		return 34 === t || 39 === t || 40 === t ? eu(e, u, n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(t) : c(t);
	}
	function u(t) {
		return F(t) ? ec(e, c)(t) : c(t);
	}
	function c(r) {
		return 41 === r ? (e.enter("resourceMarker"), e.consume(r), e.exit("resourceMarker"), e.exit("resource"), t) : n(r);
	}
} }, ey = { tokenize: function(e, t, n) {
	let r = this;
	return function(t) {
		return ea.call(r, e, i, l, "reference", "referenceMarker", "referenceString")(t);
	};
	function i(e) {
		return r.parser.defined.includes(w(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? t(e) : n(e);
	}
	function l(e) {
		return n(e);
	}
} }, ev = { tokenize: function(e, t, n) {
	return function(t) {
		return e.enter("reference"), e.enter("referenceMarker"), e.consume(t), e.exit("referenceMarker"), r;
	};
	function r(r) {
		return 93 === r ? (e.enter("referenceMarker"), e.consume(r), e.exit("referenceMarker"), e.exit("reference"), t) : n(r);
	}
} };
let ex = {
	name: "labelStartImage",
	resolveAll: em.resolveAll,
	tokenize: function(e, t, n) {
		let r = this;
		return function(t) {
			return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(t), e.exit("labelImageMarker"), i;
		};
		function i(t) {
			return 91 === t ? (e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelImage"), l) : n(t);
		}
		function l(e) {
			return 94 === e && "_hiddenFootnoteSupport" in r.parser.constructs ? n(e) : t(e);
		}
	}
}, ek = {
	name: "labelStartLink",
	resolveAll: em.resolveAll,
	tokenize: function(e, t, n) {
		let r = this;
		return function(t) {
			return e.enter("labelLink"), e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelLink"), i;
		};
		function i(e) {
			return 94 === e && "_hiddenFootnoteSupport" in r.parser.constructs ? n(e) : t(e);
		}
	}
}, eb = {
	name: "lineEnding",
	tokenize: function(e, t) {
		return function(n) {
			return e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), j(e, t, "linePrefix");
		};
	}
}, eC = {
	name: "thematicBreak",
	tokenize: function(e, t, n) {
		let r, i = 0;
		return function(l) {
			var o;
			return e.enter("thematicBreak"), r = o = l, function l(o) {
				return o === r ? (e.enter("thematicBreakSequence"), function t(n) {
					return n === r ? (e.consume(n), i++, t) : (e.exit("thematicBreakSequence"), P(n) ? j(e, l, "whitespace")(n) : l(n));
				}(o)) : i >= 3 && (null === o || I(o)) ? (e.exit("thematicBreak"), t(o)) : n(o);
			}(o);
		};
	}
}, eS = {
	continuation: { tokenize: function(e, t, n) {
		let r = this;
		return r.containerState._closeFlow = void 0, e.check(K, function(n) {
			return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, j(e, t, "listItemIndent", r.containerState.size + 1)(n);
		}, function(n) {
			return r.containerState.furtherBlankLines || !P(n) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, i(n)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(eA, t, i)(n));
		});
		function i(i) {
			return r.containerState._closeFlow = !0, r.interrupt = void 0, j(e, e.attempt(eS, t, n), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(i);
		}
	} },
	exit: function(e) {
		e.exit(this.containerState.type);
	},
	name: "list",
	tokenize: function(e, t, n) {
		let r = this, i = r.events[r.events.length - 1], l = i && "linePrefix" === i[1].type ? i[2].sliceSerialize(i[1], !0).length : 0, o = 0;
		return function(t) {
			let i = r.containerState.type || (42 === t || 43 === t || 45 === t ? "listUnordered" : "listOrdered");
			if ("listUnordered" === i ? !r.containerState.marker || t === r.containerState.marker : E(t)) {
				if (r.containerState.type || (r.containerState.type = i, e.enter(i, { _container: !0 })), "listUnordered" === i) return e.enter("listItemPrefix"), 42 === t || 45 === t ? e.check(eC, n, a)(t) : a(t);
				if (!r.interrupt || 49 === t) return e.enter("listItemPrefix"), e.enter("listItemValue"), function t(i) {
					return E(i) && ++o < 10 ? (e.consume(i), t) : (!r.interrupt || o < 2) && (r.containerState.marker ? i === r.containerState.marker : 41 === i || 46 === i) ? (e.exit("listItemValue"), a(i)) : n(i);
				}(t);
			}
			return n(t);
		};
		function a(t) {
			return e.enter("listItemMarker"), e.consume(t), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || t, e.check(K, r.interrupt ? n : u, e.attempt(ew, s, c));
		}
		function u(e) {
			return r.containerState.initialBlankLine = !0, l++, s(e);
		}
		function c(t) {
			return P(t) ? (e.enter("listItemPrefixWhitespace"), e.consume(t), e.exit("listItemPrefixWhitespace"), s) : n(t);
		}
		function s(n) {
			return r.containerState.size = l + r.sliceSerialize(e.exit("listItemPrefix"), !0).length, t(n);
		}
	}
};
var ew = {
	partial: !0,
	tokenize: function(e, t, n) {
		let r = this;
		return j(e, function(e) {
			let i = r.events[r.events.length - 1];
			return !P(e) && i && "listItemPrefixWhitespace" === i[1].type ? t(e) : n(e);
		}, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
	}
}, eA = {
	partial: !0,
	tokenize: function(e, t, n) {
		let r = this;
		return j(e, function(e) {
			let i = r.events[r.events.length - 1];
			return i && "listItemIndent" === i[1].type && i[2].sliceSerialize(i[1], !0).length === r.containerState.size ? t(e) : n(e);
		}, "listItemIndent", r.containerState.size + 1);
	}
};
let eT = {
	name: "setextUnderline",
	resolveTo: function(e, t) {
		let n, r, i, l = e.length;
		for (; l--;) if ("enter" === e[l][0]) {
			if ("content" === e[l][1].type) {
				n = l;
				break;
			}
			"paragraph" === e[l][1].type && (r = l);
		} else "content" === e[l][1].type && e.splice(l, 1), i || "definition" !== e[l][1].type || (i = l);
		let o = {
			type: "setextHeading",
			start: { ...e[n][1].start },
			end: { ...e[e.length - 1][1].end }
		};
		return e[r][1].type = "setextHeadingText", i ? (e.splice(r, 0, [
			"enter",
			o,
			t
		]), e.splice(i + 1, 0, [
			"exit",
			e[n][1],
			t
		]), e[n][1].end = { ...e[i][1].end }) : e[n][1] = o, e.push([
			"exit",
			o,
			t
		]), e;
	},
	tokenize: function(e, t, n) {
		let r, i = this;
		return function(t) {
			var o;
			let a, u = i.events.length;
			for (; u--;) if ("lineEnding" !== i.events[u][1].type && "linePrefix" !== i.events[u][1].type && "content" !== i.events[u][1].type) {
				a = "paragraph" === i.events[u][1].type;
				break;
			}
			return !i.parser.lazy[i.now().line] && (i.interrupt || a) ? (e.enter("setextHeadingLine"), r = t, o = t, e.enter("setextHeadingLineSequence"), function t(n) {
				return n === r ? (e.consume(n), t) : (e.exit("setextHeadingLineSequence"), P(n) ? j(e, l, "lineSuffix")(n) : l(n));
			}(o)) : n(t);
		};
		function l(r) {
			return null === r || I(r) ? (e.exit("setextHeadingLine"), t(r)) : n(r);
		}
	}
}, eL = { tokenize: function(e) {
	let t = this, n = e.attempt(K, function(r) {
		return null === r ? void e.consume(r) : (e.enter("lineEndingBlank"), e.consume(r), e.exit("lineEndingBlank"), t.currentConstruct = void 0, n);
	}, e.attempt(this.parser.constructs.flowInitial, r, j(e, e.attempt(this.parser.constructs.flow, r, e.attempt(ei, r)), "linePrefix")));
	return n;
	function r(r) {
		return null === r ? void e.consume(r) : (e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), t.currentConstruct = void 0, n);
	}
} }, eD = { resolveAll: eI() }, eE = ez("string"), eM = ez("text");
function ez(e) {
	return {
		resolveAll: eI("text" === e ? eF : void 0),
		tokenize: function(t) {
			let n = this, r = this.parser.constructs[e], i = t.attempt(r, l, o);
			return l;
			function l(e) {
				return u(e) ? i(e) : o(e);
			}
			function o(e) {
				return null === e ? void t.consume(e) : (t.enter("data"), t.consume(e), a);
			}
			function a(e) {
				return u(e) ? (t.exit("data"), i(e)) : (t.consume(e), a);
			}
			function u(e) {
				if (null === e) return !0;
				let t = r[e], i = -1;
				if (t) for (; ++i < t.length;) {
					let e = t[i];
					if (!e.previous || e.previous.call(n, n.previous)) return !0;
				}
				return !1;
			}
		}
	};
}
function eI(e) {
	return function(t, n) {
		let r, i = -1;
		for (; ++i <= t.length;) void 0 === r ? t[i] && "data" === t[i][1].type && (r = i, i++) : t[i] && "data" === t[i][1].type || (i !== r + 2 && (t[r][1].end = t[i - 1][1].end, t.splice(r + 2, i - r - 2), i = r + 2), r = void 0);
		return e ? e(t, n) : t;
	};
}
function eF(e, t) {
	let n = 0;
	for (; ++n <= e.length;) if ((n === e.length || "lineEnding" === e[n][1].type) && "data" === e[n - 1][1].type) {
		let r, i = e[n - 1][1], l = t.sliceStream(i), o = l.length, a = -1, u = 0;
		for (; o--;) {
			let e = l[o];
			if ("string" == typeof e) {
				for (a = e.length; 32 === e.charCodeAt(a - 1);) u++, a--;
				if (a) break;
				a = -1;
			} else if (-2 === e) r = !0, u++;
			else if (-1 === e);
			else {
				o++;
				break;
			}
		}
		if (t._contentTypeTextTrailing && n === e.length && (u = 0), u) {
			let l = {
				type: n === e.length || r || u < 2 ? "lineSuffix" : "hardBreakTrailing",
				start: {
					_bufferIndex: o ? a : i.start._bufferIndex + a,
					_index: i.start._index + o,
					line: i.end.line,
					column: i.end.column - u,
					offset: i.end.offset - u
				},
				end: { ...i.end }
			};
			i.end = { ...l.start }, i.start.offset === i.end.offset ? Object.assign(i, l) : (e.splice(n, 0, [
				"enter",
				l,
				t
			], [
				"exit",
				l,
				t
			]), n += 2);
		}
		n++;
	}
	return e;
}
var eP = e({
	attentionMarkers: () => eV,
	contentInitial: () => eN,
	disable: () => eU,
	document: () => eO,
	flow: () => e_,
	flowInitial: () => eR,
	insideSpan: () => eH,
	string: () => ej,
	text: () => eB
});
let eO = {
	42: eS,
	43: eS,
	45: eS,
	48: eS,
	49: eS,
	50: eS,
	51: eS,
	52: eS,
	53: eS,
	54: eS,
	55: eS,
	56: eS,
	57: eS,
	62: Q
}, eN = { 91: {
	name: "definition",
	tokenize: function(e, t, n) {
		let r, i = this;
		return function(t) {
			var r;
			return e.enter("definition"), r = t, ea.call(i, e, l, n, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(r);
		};
		function l(t) {
			return (r = w(i.sliceSerialize(i.events[i.events.length - 1][1]).slice(1, -1)), 58 === t) ? (e.enter("definitionMarker"), e.consume(t), e.exit("definitionMarker"), o) : n(t);
		}
		function o(t) {
			return F(t) ? ec(e, a)(t) : a(t);
		}
		function a(t) {
			return eo(e, u, n, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString")(t);
		}
		function u(t) {
			return e.attempt(es, c, c)(t);
		}
		function c(t) {
			return P(t) ? j(e, s, "whitespace")(t) : s(t);
		}
		function s(l) {
			return null === l || I(l) ? (e.exit("definition"), i.parser.defined.push(r), t(l)) : n(l);
		}
	}
} }, eR = {
	[-2]: G,
	[-1]: G,
	32: G
}, e_ = {
	35: {
		name: "headingAtx",
		resolve: function(e, t) {
			let n, r, i = e.length - 2, l = 3;
			return "whitespace" === e[3][1].type && (l += 2), i - 2 > l && "whitespace" === e[i][1].type && (i -= 2), "atxHeadingSequence" === e[i][1].type && (l === i - 1 || i - 4 > l && "whitespace" === e[i - 2][1].type) && (i -= l + 1 === i ? 2 : 4), i > l && (n = {
				type: "atxHeadingText",
				start: e[l][1].start,
				end: e[i][1].end
			}, r = {
				type: "chunkText",
				start: e[l][1].start,
				end: e[i][1].end,
				contentType: "text"
			}, x(e, l, i - l + 1, [
				[
					"enter",
					n,
					t
				],
				[
					"enter",
					r,
					t
				],
				[
					"exit",
					r,
					t
				],
				[
					"exit",
					n,
					t
				]
			])), e;
		},
		tokenize: function(e, t, n) {
			let r = 0;
			return function(i) {
				var l;
				return e.enter("atxHeading"), l = i, e.enter("atxHeadingSequence"), function i(l) {
					return 35 === l && r++ < 6 ? (e.consume(l), i) : null === l || F(l) ? (e.exit("atxHeadingSequence"), function n(r) {
						return 35 === r ? (e.enter("atxHeadingSequence"), function t(r) {
							return 35 === r ? (e.consume(r), t) : (e.exit("atxHeadingSequence"), n(r));
						}(r)) : null === r || I(r) ? (e.exit("atxHeading"), t(r)) : P(r) ? j(e, n, "whitespace")(r) : (e.enter("atxHeadingText"), function t(r) {
							return null === r || 35 === r || F(r) ? (e.exit("atxHeadingText"), n(r)) : (e.consume(r), t);
						}(r));
					}(l)) : n(l);
				}(l);
			};
		}
	},
	42: eC,
	45: [eT, eC],
	60: {
		concrete: !0,
		name: "htmlFlow",
		resolveTo: function(e) {
			let t = e.length;
			for (; t-- && ("enter" !== e[t][0] || "htmlFlow" !== e[t][1].type););
			return t > 1 && "linePrefix" === e[t - 2][1].type && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e;
		},
		tokenize: function(e, t, n) {
			let r, i, l, o, a, u = this;
			return function(t) {
				var n;
				return n = t, e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(n), c;
			};
			function c(o) {
				return 33 === o ? (e.consume(o), s) : 47 === o ? (e.consume(o), i = !0, d) : 63 === o ? (e.consume(o), r = 3, u.interrupt ? t : R) : A(o) ? (e.consume(o), l = String.fromCharCode(o), h) : n(o);
			}
			function s(i) {
				return 45 === i ? (e.consume(i), r = 2, f) : 91 === i ? (e.consume(i), r = 5, o = 0, p) : A(i) ? (e.consume(i), r = 4, u.interrupt ? t : R) : n(i);
			}
			function f(r) {
				return 45 === r ? (e.consume(r), u.interrupt ? t : R) : n(r);
			}
			function p(r) {
				return r === "CDATA[".charCodeAt(o++) ? (e.consume(r), 6 === o) ? u.interrupt ? t : w : p : n(r);
			}
			function d(t) {
				return A(t) ? (e.consume(t), l = String.fromCharCode(t), h) : n(t);
			}
			function h(o) {
				if (null === o || 47 === o || 62 === o || F(o)) {
					let a = 47 === o, c = l.toLowerCase();
					return !a && !i && ep.includes(c) ? (r = 1, u.interrupt ? t(o) : w(o)) : ef.includes(l.toLowerCase()) ? (r = 6, a) ? (e.consume(o), m) : u.interrupt ? t(o) : w(o) : (r = 7, u.interrupt && !u.parser.lazy[u.now().line] ? n(o) : i ? function t(n) {
						return P(n) ? (e.consume(n), t) : C(n);
					}(o) : g(o));
				}
				return 45 === o || T(o) ? (e.consume(o), l += String.fromCharCode(o), h) : n(o);
			}
			function m(r) {
				return 62 === r ? (e.consume(r), u.interrupt ? t : w) : n(r);
			}
			function g(t) {
				return 47 === t ? (e.consume(t), C) : 58 === t || 95 === t || A(t) ? (e.consume(t), y) : P(t) ? (e.consume(t), g) : C(t);
			}
			function y(t) {
				return 45 === t || 46 === t || 58 === t || 95 === t || T(t) ? (e.consume(t), y) : v(t);
			}
			function v(t) {
				return 61 === t ? (e.consume(t), x) : P(t) ? (e.consume(t), v) : g(t);
			}
			function x(t) {
				return null === t || 60 === t || 61 === t || 62 === t || 96 === t ? n(t) : 34 === t || 39 === t ? (e.consume(t), a = t, k) : P(t) ? (e.consume(t), x) : function t(n) {
					return null === n || 34 === n || 39 === n || 47 === n || 60 === n || 61 === n || 62 === n || 96 === n || F(n) ? v(n) : (e.consume(n), t);
				}(t);
			}
			function k(t) {
				return t === a ? (e.consume(t), a = null, b) : null === t || I(t) ? n(t) : (e.consume(t), k);
			}
			function b(e) {
				return 47 === e || 62 === e || P(e) ? g(e) : n(e);
			}
			function C(t) {
				return 62 === t ? (e.consume(t), S) : n(t);
			}
			function S(t) {
				return null === t || I(t) ? w(t) : P(t) ? (e.consume(t), S) : n(t);
			}
			function w(t) {
				return 45 === t && 2 === r ? (e.consume(t), M) : 60 === t && 1 === r ? (e.consume(t), z) : 62 === t && 4 === r ? (e.consume(t), _) : 63 === t && 3 === r ? (e.consume(t), R) : 93 === t && 5 === r ? (e.consume(t), N) : I(t) && (6 === r || 7 === r) ? (e.exit("htmlFlowData"), e.check(ed, j, L)(t)) : null === t || I(t) ? (e.exit("htmlFlowData"), L(t)) : (e.consume(t), w);
			}
			function L(t) {
				return e.check(eh, D, j)(t);
			}
			function D(t) {
				return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), E;
			}
			function E(t) {
				return null === t || I(t) ? L(t) : (e.enter("htmlFlowData"), w(t));
			}
			function M(t) {
				return 45 === t ? (e.consume(t), R) : w(t);
			}
			function z(t) {
				return 47 === t ? (e.consume(t), l = "", O) : w(t);
			}
			function O(t) {
				if (62 === t) {
					let n = l.toLowerCase();
					return ep.includes(n) ? (e.consume(t), _) : w(t);
				}
				return A(t) && l.length < 8 ? (e.consume(t), l += String.fromCharCode(t), O) : w(t);
			}
			function N(t) {
				return 93 === t ? (e.consume(t), R) : w(t);
			}
			function R(t) {
				return 62 === t ? (e.consume(t), _) : 45 === t && 2 === r ? (e.consume(t), R) : w(t);
			}
			function _(t) {
				return null === t || I(t) ? (e.exit("htmlFlowData"), j(t)) : (e.consume(t), _);
			}
			function j(n) {
				return e.exit("htmlFlow"), t(n);
			}
		}
	},
	61: eT,
	95: eC,
	96: J,
	126: J
}, ej = {
	38: Z,
	92: X
}, eB = {
	[-5]: eb,
	[-4]: eb,
	[-3]: eb,
	33: ex,
	38: Z,
	42: W,
	60: [{
		name: "autolink",
		tokenize: function(e, t, n) {
			let r = 0;
			return function(t) {
				return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(t), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), i;
			};
			function i(t) {
				return A(t) ? (e.consume(t), l) : 64 === t ? n(t) : a(t);
			}
			function l(t) {
				return 43 === t || 45 === t || 46 === t || T(t) ? (r = 1, function t(n) {
					return 58 === n ? (e.consume(n), r = 0, o) : (43 === n || 45 === n || 46 === n || T(n)) && r++ < 32 ? (e.consume(n), t) : (r = 0, a(n));
				}(t)) : a(t);
			}
			function o(r) {
				return 62 === r ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(r), e.exit("autolinkMarker"), e.exit("autolink"), t) : null === r || 32 === r || 60 === r || D(r) ? n(r) : (e.consume(r), o);
			}
			function a(t) {
				return 64 === t ? (e.consume(t), u) : L(t) ? (e.consume(t), a) : n(t);
			}
			function u(i) {
				return T(i) ? function i(l) {
					return 46 === l ? (e.consume(l), r = 0, u) : 62 === l ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(l), e.exit("autolinkMarker"), e.exit("autolink"), t) : function t(l) {
						if ((45 === l || T(l)) && r++ < 63) {
							let n = 45 === l ? t : i;
							return e.consume(l), n;
						}
						return n(l);
					}(l);
				}(i) : n(i);
			}
		}
	}, {
		name: "htmlText",
		tokenize: function(e, t, n) {
			let r, i, l, o = this;
			return function(t) {
				return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(t), a;
			};
			function a(t) {
				return 33 === t ? (e.consume(t), u) : 47 === t ? (e.consume(t), k) : 63 === t ? (e.consume(t), v) : A(t) ? (e.consume(t), C) : n(t);
			}
			function u(t) {
				return 45 === t ? (e.consume(t), c) : 91 === t ? (e.consume(t), i = 0, d) : A(t) ? (e.consume(t), y) : n(t);
			}
			function c(t) {
				return 45 === t ? (e.consume(t), p) : n(t);
			}
			function s(t) {
				return null === t ? n(t) : 45 === t ? (e.consume(t), f) : I(t) ? (l = s, O(t)) : (e.consume(t), s);
			}
			function f(t) {
				return 45 === t ? (e.consume(t), p) : s(t);
			}
			function p(e) {
				return 62 === e ? z(e) : 45 === e ? f(e) : s(e);
			}
			function d(t) {
				return t === "CDATA[".charCodeAt(i++) ? (e.consume(t), 6 === i ? h : d) : n(t);
			}
			function h(t) {
				return null === t ? n(t) : 93 === t ? (e.consume(t), m) : I(t) ? (l = h, O(t)) : (e.consume(t), h);
			}
			function m(t) {
				return 93 === t ? (e.consume(t), g) : h(t);
			}
			function g(t) {
				return 62 === t ? z(t) : 93 === t ? (e.consume(t), g) : h(t);
			}
			function y(t) {
				return null === t || 62 === t ? z(t) : I(t) ? (l = y, O(t)) : (e.consume(t), y);
			}
			function v(t) {
				return null === t ? n(t) : 63 === t ? (e.consume(t), x) : I(t) ? (l = v, O(t)) : (e.consume(t), v);
			}
			function x(e) {
				return 62 === e ? z(e) : v(e);
			}
			function k(t) {
				return A(t) ? (e.consume(t), b) : n(t);
			}
			function b(t) {
				return 45 === t || T(t) ? (e.consume(t), b) : function t(n) {
					return I(n) ? (l = t, O(n)) : P(n) ? (e.consume(n), t) : z(n);
				}(t);
			}
			function C(t) {
				return 45 === t || T(t) ? (e.consume(t), C) : 47 === t || 62 === t || F(t) ? S(t) : n(t);
			}
			function S(t) {
				return 47 === t ? (e.consume(t), z) : 58 === t || 95 === t || A(t) ? (e.consume(t), w) : I(t) ? (l = S, O(t)) : P(t) ? (e.consume(t), S) : z(t);
			}
			function w(t) {
				return 45 === t || 46 === t || 58 === t || 95 === t || T(t) ? (e.consume(t), w) : function t(n) {
					return 61 === n ? (e.consume(n), L) : I(n) ? (l = t, O(n)) : P(n) ? (e.consume(n), t) : S(n);
				}(t);
			}
			function L(t) {
				return null === t || 60 === t || 61 === t || 62 === t || 96 === t ? n(t) : 34 === t || 39 === t ? (e.consume(t), r = t, D) : I(t) ? (l = L, O(t)) : P(t) ? (e.consume(t), L) : (e.consume(t), E);
			}
			function D(t) {
				return t === r ? (e.consume(t), r = void 0, M) : null === t ? n(t) : I(t) ? (l = D, O(t)) : (e.consume(t), D);
			}
			function E(t) {
				return null === t || 34 === t || 39 === t || 60 === t || 61 === t || 96 === t ? n(t) : 47 === t || 62 === t || F(t) ? S(t) : (e.consume(t), E);
			}
			function M(e) {
				return 47 === e || 62 === e || F(e) ? S(e) : n(e);
			}
			function z(r) {
				return 62 === r ? (e.consume(r), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(r);
			}
			function O(t) {
				return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), N;
			}
			function N(t) {
				return P(t) ? j(e, R, "linePrefix", o.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : R(t);
			}
			function R(t) {
				return e.enter("htmlTextData"), l(t);
			}
		}
	}],
	91: ek,
	92: [{
		name: "hardBreakEscape",
		tokenize: function(e, t, n) {
			return function(t) {
				return e.enter("hardBreakEscape"), e.consume(t), r;
			};
			function r(r) {
				return I(r) ? (e.exit("hardBreakEscape"), t(r)) : n(r);
			}
		}
	}, X],
	93: em,
	95: W,
	96: {
		name: "codeText",
		previous: function(e) {
			return 96 !== e || "characterEscape" === this.events[this.events.length - 1][1].type;
		},
		resolve: function(e) {
			let t, n, r = e.length - 4, i = 3;
			if (("lineEnding" === e[3][1].type || "space" === e[i][1].type) && ("lineEnding" === e[r][1].type || "space" === e[r][1].type)) {
				for (t = i; ++t < r;) if ("codeTextData" === e[t][1].type) {
					e[i][1].type = "codeTextPadding", e[r][1].type = "codeTextPadding", i += 2, r -= 2;
					break;
				}
			}
			for (t = i - 1, r++; ++t <= r;) void 0 === n ? t !== r && "lineEnding" !== e[t][1].type && (n = t) : (t === r || "lineEnding" === e[t][1].type) && (e[n][1].type = "codeTextData", t !== n + 2 && (e[n][1].end = e[t - 1][1].end, e.splice(n + 2, t - n - 2), r -= t - n - 2, t = n + 2), n = void 0);
			return e;
		},
		tokenize: function(e, t, n) {
			let r, i, l = 0;
			return function(t) {
				return e.enter("codeText"), e.enter("codeTextSequence"), function t(n) {
					return 96 === n ? (e.consume(n), l++, t) : (e.exit("codeTextSequence"), o(n));
				}(t);
			};
			function o(u) {
				return null === u ? n(u) : 32 === u ? (e.enter("space"), e.consume(u), e.exit("space"), o) : 96 === u ? (i = e.enter("codeTextSequence"), r = 0, function n(o) {
					return 96 === o ? (e.consume(o), r++, n) : r === l ? (e.exit("codeTextSequence"), e.exit("codeText"), t(o)) : (i.type = "codeTextData", a(o));
				}(u)) : I(u) ? (e.enter("lineEnding"), e.consume(u), e.exit("lineEnding"), o) : (e.enter("codeTextData"), a(u));
			}
			function a(t) {
				return null === t || 32 === t || 96 === t || I(t) ? (e.exit("codeTextData"), o(t)) : (e.consume(t), a);
			}
		}
	}
}, eH = { null: [W, eD] }, eV = { null: [42, 95] }, eU = { null: [] };
var eq = /[\0\t\n\r]/g, eW = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function e$(e, t, n) {
	if (t) return t;
	if (35 === n.charCodeAt(0)) {
		let e = n.charCodeAt(1), t = 120 === e || 88 === e;
		return S(n.slice(t ? 2 : 1), t ? 16 : 10);
	}
	return v(n) || e;
}
function eK(e) {
	return e && "object" == typeof e ? "position" in e || "type" in e ? eX(e.position) : "start" in e || "end" in e ? eX(e) : "line" in e || "column" in e ? eQ(e) : "" : "";
}
function eQ(e) {
	return eZ(e && e.line) + ":" + eZ(e && e.column);
}
function eX(e) {
	return eQ(e && e.start) + "-" + eQ(e && e.end);
}
function eZ(e) {
	return e && "number" == typeof e ? e : 1;
}
var eY = {}.hasOwnProperty;
function eJ(e) {
	return {
		line: e.line,
		column: e.column,
		offset: e.offset
	};
}
function eG(e, t) {
	if (e) throw Error("Cannot close `" + e.type + "` (" + eK({
		start: e.start,
		end: e.end
	}) + "): a different token (`" + t.type + "`, " + eK({
		start: t.start,
		end: t.end
	}) + ") is open");
	throw Error("Cannot close document, a token (`" + t.type + "`, " + eK({
		start: t.start,
		end: t.end
	}) + ") is still open");
}
function e1(e, t) {
	let n = String(e);
	if ("string" != typeof t) throw TypeError("Expected character");
	let r = 0, i = n.indexOf(t);
	for (; -1 !== i;) r++, i = n.indexOf(t, i + t.length);
	return r;
}
let e0 = function(e) {
	var t, n;
	if (null == e) return e4;
	if ("function" == typeof e) return e2(e);
	if ("object" == typeof e) return Array.isArray(e) ? function(e) {
		let t = [], n = -1;
		for (; ++n < e.length;) t[n] = e0(e[n]);
		return e2(function(...e) {
			let n = -1;
			for (; ++n < t.length;) if (t[n].apply(this, e)) return !0;
			return !1;
		});
	}(e) : (t = e, e2(function(e) {
		let n;
		for (n in t) if (e[n] !== t[n]) return !1;
		return !0;
	}));
	if ("string" == typeof e) return n = e, e2(function(e) {
		return e && e.type === n;
	});
	throw Error("Expected function, string, or object as test");
};
function e2(e) {
	return function(t, n, r) {
		var i;
		return !!(null !== (i = t) && "object" == typeof i && "type" in i && e.call(this, t, "number" == typeof n ? n : void 0, r || void 0));
	};
}
function e4() {
	return !0;
}
var e3 = [];
function e5(e, t, n, r) {
	let i;
	"function" == typeof t && "function" != typeof n ? (r = n, n = t) : i = t;
	let l = e0(i), o = r ? -1 : 1;
	(function e(i, a, u) {
		let c = i && "object" == typeof i ? i : {};
		if ("string" == typeof c.type) {
			let e = "string" == typeof c.tagName ? c.tagName : "string" == typeof c.name ? c.name : void 0;
			Object.defineProperty(s, "name", { value: "node (" + i.type + (e ? "<" + e + ">" : "") + ")" });
		}
		return s;
		function s() {
			var c;
			let s, f, p, d = e3;
			if ((!t || l(i, a, u[u.length - 1] || void 0)) && !1 === (d = Array.isArray(c = n(i, u)) ? c : "number" == typeof c ? [!0, c] : null == c ? e3 : [c])[0]) return d;
			if ("children" in i && i.children && i.children && "skip" !== d[0]) for (f = (r ? i.children.length : -1) + o, p = u.concat(i); f > -1 && f < i.children.length;) {
				if (!1 === (s = e(i.children[f], f, p)())[0]) return s;
				f = "number" == typeof s[1] ? s[1] : f + o;
			}
			return d;
		}
	})(e, void 0, [])();
}
function e9(e) {
	this.enter({
		type: "link",
		title: null,
		url: "",
		children: []
	}, e);
}
function e6(e) {
	this.config.enter.autolinkProtocol.call(this, e);
}
function e8(e) {
	this.config.exit.autolinkProtocol.call(this, e);
}
function e7(e) {
	this.config.exit.data.call(this, e);
	let t = this.stack[this.stack.length - 1];
	t.type, t.url = "http://" + this.sliceSerialize(e);
}
function te(e) {
	this.config.exit.autolinkEmail.call(this, e);
}
function tt(e) {
	this.exit(e);
}
function tn(e) {
	(function(e, t, n) {
		let r = e0((n || {}).ignore || []), i = function(e) {
			let t = [];
			if (!Array.isArray(e)) throw TypeError("Expected find and replace tuple or list of tuples");
			let n = !e[0] || Array.isArray(e[0]) ? e : [e], r = -1;
			for (; ++r < n.length;) {
				var i;
				let e = n[r];
				t.push(["string" == typeof (i = e[0]) ? RegExp(function(e) {
					if ("string" != typeof e) throw TypeError("Expected a string");
					return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
				}(i), "g") : i, function(e) {
					return "function" == typeof e ? e : function() {
						return e;
					};
				}(e[1])]);
			}
			return t;
		}(t), l = -1;
		for (; ++l < i.length;) e5(e, "text", o);
		function o(e, t) {
			let n, o = -1;
			for (; ++o < t.length;) {
				let e = t[o], i = n ? n.children : void 0;
				if (r(e, i ? i.indexOf(e) : void 0, n)) return;
				n = e;
			}
			if (n) return function(e, t) {
				let n = t[t.length - 1], r = i[l][0], o = i[l][1], a = 0, u = n.children.indexOf(e), c = !1, s = [];
				r.lastIndex = 0;
				let f = r.exec(e.value);
				for (; f;) {
					let n = f.index, i = {
						index: f.index,
						input: f.input,
						stack: [...t, e]
					}, l = o(...f, i);
					if ("string" == typeof l && (l = l.length > 0 ? {
						type: "text",
						value: l
					} : void 0), !1 === l ? r.lastIndex = n + 1 : (a !== n && s.push({
						type: "text",
						value: e.value.slice(a, n)
					}), Array.isArray(l) ? s.push(...l) : l && s.push(l), a = n + f[0].length, c = !0), !r.global) break;
					f = r.exec(e.value);
				}
				return c ? (a < e.value.length && s.push({
					type: "text",
					value: e.value.slice(a)
				}), n.children.splice(u, 1, ...s)) : s = [e], u + s.length;
			}(e, t);
		}
	})(e, [[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, tr], [/(?<=^|\s|\p{P}|\p{S})([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/gu, ti]], { ignore: ["link", "linkReference"] });
}
function tr(e, t, n, r, i) {
	let l = "";
	if (!tl(i) || (/^w/i.test(t) && (n = t + n, t = "", l = "http://"), !function(e) {
		let t = e.split(".");
		return !(t.length < 2 || t[t.length - 1] && (/_/.test(t[t.length - 1]) || !/[a-zA-Z\d]/.test(t[t.length - 1])) || t[t.length - 2] && (/_/.test(t[t.length - 2]) || !/[a-zA-Z\d]/.test(t[t.length - 2])));
	}(n))) return !1;
	let o = function(e) {
		let t = /[!"&'),.:;<>?\]}]+$/.exec(e);
		if (!t) return [e, void 0];
		e = e.slice(0, t.index);
		let n = t[0], r = n.indexOf(")"), i = e1(e, "("), l = e1(e, ")");
		for (; -1 !== r && i > l;) e += n.slice(0, r + 1), r = (n = n.slice(r + 1)).indexOf(")"), l++;
		return [e, n];
	}(n + r);
	if (!o[0]) return !1;
	let a = {
		type: "link",
		title: null,
		url: l + t + o[0],
		children: [{
			type: "text",
			value: t + o[0]
		}]
	};
	return o[1] ? [a, {
		type: "text",
		value: o[1]
	}] : a;
}
function ti(e, t, n, r) {
	return !(!tl(r, !0) || /[-\d_]$/.test(n)) && {
		type: "link",
		title: null,
		url: "mailto:" + t + "@" + n,
		children: [{
			type: "text",
			value: t + "@" + n
		}]
	};
}
function tl(e, t) {
	let n = e.input.charCodeAt(e.index - 1);
	return (0 === e.index || N(n) || O(n)) && (!t || 47 !== n);
}
function to() {
	this.buffer();
}
function ta(e) {
	this.enter({
		type: "footnoteReference",
		identifier: "",
		label: ""
	}, e);
}
function tu() {
	this.buffer();
}
function tc(e) {
	this.enter({
		type: "footnoteDefinition",
		identifier: "",
		label: "",
		children: []
	}, e);
}
function ts(e) {
	let t = this.resume(), n = this.stack[this.stack.length - 1];
	n.type, n.identifier = w(this.sliceSerialize(e)).toLowerCase(), n.label = t;
}
function tf(e) {
	this.exit(e);
}
function tp(e) {
	let t = this.resume(), n = this.stack[this.stack.length - 1];
	n.type, n.identifier = w(this.sliceSerialize(e)).toLowerCase(), n.label = t;
}
function td(e) {
	this.exit(e);
}
function th(e) {
	this.enter({
		type: "delete",
		children: []
	}, e);
}
function tm(e) {
	this.exit(e);
}
function tg(e) {
	let t = e._align;
	this.enter({
		type: "table",
		align: t.map(function(e) {
			return "none" === e ? null : e;
		}),
		children: []
	}, e), this.data.inTable = !0;
}
function ty(e) {
	this.exit(e), this.data.inTable = void 0;
}
function tv(e) {
	this.enter({
		type: "tableRow",
		children: []
	}, e);
}
function tx(e) {
	this.exit(e);
}
function tk(e) {
	this.enter({
		type: "tableCell",
		children: []
	}, e);
}
function tb(e) {
	let t = this.resume();
	this.data.inTable && (t = t.replace(/\\([\\|])/g, tC));
	let n = this.stack[this.stack.length - 1];
	n.type, n.value = t, this.exit(e);
}
function tC(e, t) {
	return "|" === t ? t : e;
}
function tS(e) {
	let t = this.stack[this.stack.length - 2];
	t.type, t.checked = "taskListCheckValueChecked" === e.type;
}
function tw(e) {
	let t = this.stack[this.stack.length - 2];
	if (t && "listItem" === t.type && "boolean" == typeof t.checked) {
		let e = this.stack[this.stack.length - 1];
		e.type;
		let n = e.children[0];
		if (n && "text" === n.type) {
			let r, i = t.children, l = -1;
			for (; ++l < i.length;) {
				let e = i[l];
				if ("paragraph" === e.type) {
					r = e;
					break;
				}
			}
			r === e && (n.value = n.value.slice(1), 0 === n.value.length ? e.children.shift() : e.position && n.position && "number" == typeof n.position.start.offset && (n.position.start.column++, n.position.start.offset++, e.position.start = Object.assign({}, n.position.start)));
		}
	}
	this.exit(e);
}
for (var tA = {
	tokenize: function(e, t, n) {
		let r = 0;
		return function t(l) {
			return (87 === l || 119 === l) && r < 3 ? (r++, e.consume(l), t) : 46 === l && 3 === r ? (e.consume(l), i) : n(l);
		};
		function i(e) {
			return null === e ? n(e) : t(e);
		}
	},
	partial: !0
}, tT = {
	tokenize: function(e, t, n) {
		let r, i, l;
		return o;
		function o(t) {
			return 46 === t || 95 === t ? e.check(tD, u, a)(t) : null === t || F(t) || N(t) || 45 !== t && O(t) ? u(t) : (l = !0, e.consume(t), o);
		}
		function a(t) {
			return 95 === t ? r = !0 : (i = r, r = void 0), e.consume(t), o;
		}
		function u(e) {
			return i || r || !l ? n(e) : t(e);
		}
	},
	partial: !0
}, tL = {
	tokenize: function(e, t) {
		let n = 0, r = 0;
		return i;
		function i(o) {
			return 40 === o ? (n++, e.consume(o), i) : 41 === o && r < n ? l(o) : 33 === o || 34 === o || 38 === o || 39 === o || 41 === o || 42 === o || 44 === o || 46 === o || 58 === o || 59 === o || 60 === o || 63 === o || 93 === o || 95 === o || 126 === o ? e.check(tD, t, l)(o) : null === o || F(o) || N(o) ? t(o) : (e.consume(o), i);
		}
		function l(t) {
			return 41 === t && r++, e.consume(t), i;
		}
	},
	partial: !0
}, tD = {
	tokenize: function(e, t, n) {
		return r;
		function r(o) {
			return 33 === o || 34 === o || 39 === o || 41 === o || 42 === o || 44 === o || 46 === o || 58 === o || 59 === o || 63 === o || 95 === o || 126 === o ? (e.consume(o), r) : 38 === o ? (e.consume(o), l) : 93 === o ? (e.consume(o), i) : 60 === o || null === o || F(o) || N(o) ? t(o) : n(o);
		}
		function i(e) {
			return null === e || 40 === e || 91 === e || F(e) || N(e) ? t(e) : r(e);
		}
		function l(t) {
			return A(t) ? function t(i) {
				return 59 === i ? (e.consume(i), r) : A(i) ? (e.consume(i), t) : n(i);
			}(t) : n(t);
		}
	},
	partial: !0
}, tE = {
	tokenize: function(e, t, n) {
		return function(t) {
			return e.consume(t), r;
		};
		function r(e) {
			return T(e) ? n(e) : t(e);
		}
	},
	partial: !0
}, tM = {
	name: "wwwAutolink",
	tokenize: function(e, t, n) {
		let r = this;
		return function(t) {
			return 87 !== t && 119 !== t || !tO.call(r, r.previous) || tj(r.events) ? n(t) : (e.enter("literalAutolink"), e.enter("literalAutolinkWww"), e.check(tA, e.attempt(tT, e.attempt(tL, i), n), n)(t));
		};
		function i(n) {
			return e.exit("literalAutolinkWww"), e.exit("literalAutolink"), t(n);
		}
	},
	previous: tO
}, tz = {
	name: "protocolAutolink",
	tokenize: function(e, t, n) {
		let r = this, i = "", l = !1;
		return function(t) {
			return (72 === t || 104 === t) && tN.call(r, r.previous) && !tj(r.events) ? (e.enter("literalAutolink"), e.enter("literalAutolinkHttp"), i += String.fromCodePoint(t), e.consume(t), o) : n(t);
		};
		function o(t) {
			if (A(t) && i.length < 5) return i += String.fromCodePoint(t), e.consume(t), o;
			if (58 === t) {
				let n = i.toLowerCase();
				if ("http" === n || "https" === n) return e.consume(t), a;
			}
			return n(t);
		}
		function a(t) {
			return 47 === t ? (e.consume(t), l) ? u : (l = !0, a) : n(t);
		}
		function u(t) {
			return null === t || D(t) || F(t) || N(t) || O(t) ? n(t) : e.attempt(tT, e.attempt(tL, c), n)(t);
		}
		function c(n) {
			return e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), t(n);
		}
	},
	previous: tN
}, tI = {
	name: "emailAutolink",
	tokenize: function(e, t, n) {
		let r, i, l = this;
		return function(t) {
			return !t_(t) || !tR.call(l, l.previous) || tj(l.events) ? n(t) : (e.enter("literalAutolink"), e.enter("literalAutolinkEmail"), function t(r) {
				return t_(r) ? (e.consume(r), t) : 64 === r ? (e.consume(r), o) : n(r);
			}(t));
		};
		function o(t) {
			return 46 === t ? e.check(tE, u, a)(t) : 45 === t || 95 === t || T(t) ? (i = !0, e.consume(t), o) : u(t);
		}
		function a(t) {
			return e.consume(t), r = !0, o;
		}
		function u(o) {
			return i && r && A(l.previous) ? (e.exit("literalAutolinkEmail"), e.exit("literalAutolink"), t(o)) : n(o);
		}
	},
	previous: tR
}, tF = {}, tP = 48; tP < 123;) tF[tP] = tI, 58 == ++tP ? tP = 65 : 91 === tP && (tP = 97);
function tO(e) {
	return null === e || 40 === e || 42 === e || 95 === e || 91 === e || 93 === e || 126 === e || F(e);
}
function tN(e) {
	return !A(e);
}
function tR(e) {
	return !(47 === e || t_(e));
}
function t_(e) {
	return 43 === e || 45 === e || 46 === e || 95 === e || T(e);
}
function tj(e) {
	let t = e.length, n = !1;
	for (; t--;) {
		let r = e[t][1];
		if (("labelLink" === r.type || "labelImage" === r.type) && !r._balanced) {
			n = !0;
			break;
		}
		if (r._gfmAutolinkLiteralWalkedInto) {
			n = !1;
			break;
		}
	}
	return e.length > 0 && !n && (e[e.length - 1][1]._gfmAutolinkLiteralWalkedInto = !0), n;
}
tF[43] = tI, tF[45] = tI, tF[46] = tI, tF[95] = tI, tF[72] = [tI, tz], tF[104] = [tI, tz], tF[87] = [tI, tM], tF[119] = [tI, tM];
var tB = {
	tokenize: function(e, t, n) {
		let r = this;
		return j(e, function(e) {
			let i = r.events[r.events.length - 1];
			return i && "gfmFootnoteDefinitionIndent" === i[1].type && 4 === i[2].sliceSerialize(i[1], !0).length ? t(e) : n(e);
		}, "gfmFootnoteDefinitionIndent", 5);
	},
	partial: !0
};
function tH(e, t, n) {
	let r, i = this, l = i.events.length, o = i.parser.gfmFootnotes || (i.parser.gfmFootnotes = []);
	for (; l--;) {
		let e = i.events[l][1];
		if ("labelImage" === e.type) {
			r = e;
			break;
		}
		if ("gfmFootnoteCall" === e.type || "labelLink" === e.type || "label" === e.type || "image" === e.type || "link" === e.type) break;
	}
	return function(l) {
		if (!r || !r._balanced) return n(l);
		let a = w(i.sliceSerialize({
			start: r.end,
			end: i.now()
		}));
		return 94 === a.codePointAt(0) && o.includes(a.slice(1)) ? (e.enter("gfmFootnoteCallLabelMarker"), e.consume(l), e.exit("gfmFootnoteCallLabelMarker"), t(l)) : n(l);
	};
}
function tV(e, t) {
	let n = e.length;
	for (; n--;) if ("labelImage" === e[n][1].type && "enter" === e[n][0]) {
		e[n][1];
		break;
	}
	e[n + 1][1].type = "data", e[n + 3][1].type = "gfmFootnoteCallLabelMarker";
	let r = {
		type: "gfmFootnoteCall",
		start: Object.assign({}, e[n + 3][1].start),
		end: Object.assign({}, e[e.length - 1][1].end)
	}, i = {
		type: "gfmFootnoteCallMarker",
		start: Object.assign({}, e[n + 3][1].end),
		end: Object.assign({}, e[n + 3][1].end)
	};
	i.end.column++, i.end.offset++, i.end._bufferIndex++;
	let l = {
		type: "gfmFootnoteCallString",
		start: Object.assign({}, i.end),
		end: Object.assign({}, e[e.length - 1][1].start)
	}, o = {
		type: "chunkString",
		contentType: "string",
		start: Object.assign({}, l.start),
		end: Object.assign({}, l.end)
	}, a = [
		e[n + 1],
		e[n + 2],
		[
			"enter",
			r,
			t
		],
		e[n + 3],
		e[n + 4],
		[
			"enter",
			i,
			t
		],
		[
			"exit",
			i,
			t
		],
		[
			"enter",
			l,
			t
		],
		[
			"enter",
			o,
			t
		],
		[
			"exit",
			o,
			t
		],
		[
			"exit",
			l,
			t
		],
		e[e.length - 2],
		e[e.length - 1],
		[
			"exit",
			r,
			t
		]
	];
	return e.splice(n, e.length - n + 1, ...a), e;
}
function tU(e, t, n) {
	let r, i = this, l = i.parser.gfmFootnotes || (i.parser.gfmFootnotes = []), o = 0;
	return function(t) {
		return e.enter("gfmFootnoteCall"), e.enter("gfmFootnoteCallLabelMarker"), e.consume(t), e.exit("gfmFootnoteCallLabelMarker"), a;
	};
	function a(t) {
		return 94 !== t ? n(t) : (e.enter("gfmFootnoteCallMarker"), e.consume(t), e.exit("gfmFootnoteCallMarker"), e.enter("gfmFootnoteCallString"), e.enter("chunkString").contentType = "string", u);
	}
	function u(a) {
		if (o > 999 || 93 === a && !r || null === a || 91 === a || F(a)) return n(a);
		if (93 === a) {
			e.exit("chunkString");
			let r = e.exit("gfmFootnoteCallString");
			return l.includes(w(i.sliceSerialize(r))) ? (e.enter("gfmFootnoteCallLabelMarker"), e.consume(a), e.exit("gfmFootnoteCallLabelMarker"), e.exit("gfmFootnoteCall"), t) : n(a);
		}
		return F(a) || (r = !0), o++, e.consume(a), 92 === a ? c : u;
	}
	function c(t) {
		return 91 === t || 92 === t || 93 === t ? (e.consume(t), o++, u) : u(t);
	}
}
function tq(e, t, n) {
	let r, i, l = this, o = l.parser.gfmFootnotes || (l.parser.gfmFootnotes = []), a = 0;
	return function(t) {
		return e.enter("gfmFootnoteDefinition")._container = !0, e.enter("gfmFootnoteDefinitionLabel"), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(t), e.exit("gfmFootnoteDefinitionLabelMarker"), u;
	};
	function u(t) {
		return 94 === t ? (e.enter("gfmFootnoteDefinitionMarker"), e.consume(t), e.exit("gfmFootnoteDefinitionMarker"), e.enter("gfmFootnoteDefinitionLabelString"), e.enter("chunkString").contentType = "string", c) : n(t);
	}
	function c(t) {
		if (a > 999 || 93 === t && !i || null === t || 91 === t || F(t)) return n(t);
		if (93 === t) {
			e.exit("chunkString");
			let n = e.exit("gfmFootnoteDefinitionLabelString");
			return r = w(l.sliceSerialize(n)), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(t), e.exit("gfmFootnoteDefinitionLabelMarker"), e.exit("gfmFootnoteDefinitionLabel"), f;
		}
		return F(t) || (i = !0), a++, e.consume(t), 92 === t ? s : c;
	}
	function s(t) {
		return 91 === t || 92 === t || 93 === t ? (e.consume(t), a++, c) : c(t);
	}
	function f(t) {
		return 58 === t ? (e.enter("definitionMarker"), e.consume(t), e.exit("definitionMarker"), o.includes(r) || o.push(r), j(e, p, "gfmFootnoteDefinitionWhitespace")) : n(t);
	}
	function p(e) {
		return t(e);
	}
}
function tW(e, t, n) {
	return e.check(K, t, e.attempt(tB, t, n));
}
function t$(e) {
	e.exit("gfmFootnoteDefinition");
}
var tK = class {
	constructor() {
		this.map = [];
	}
	add(e, t, n) {
		(function(e, t, n, r) {
			let i = 0;
			if (0 !== n || 0 !== r.length) {
				for (; i < e.map.length;) {
					if (e.map[i][0] === t) {
						e.map[i][1] += n, e.map[i][2].push(...r);
						return;
					}
					i += 1;
				}
				e.map.push([
					t,
					n,
					r
				]);
			}
		})(this, e, t, n);
	}
	consume(e) {
		if (this.map.sort(function(e, t) {
			return e[0] - t[0];
		}), 0 === this.map.length) return;
		let t = this.map.length, n = [];
		for (; t > 0;) t -= 1, n.push(e.slice(this.map[t][0] + this.map[t][1]), this.map[t][2]), e.length = this.map[t][0];
		n.push(e.slice()), e.length = 0;
		let r = n.pop();
		for (; r;) {
			for (let t of r) e.push(t);
			r = n.pop();
		}
		this.map.length = 0;
	}
};
function tQ(e, t, n) {
	let r, i = this, l = 0, o = 0;
	return function(e) {
		let t = i.events.length - 1;
		for (; t > -1;) {
			let e = i.events[t][1].type;
			if ("lineEnding" === e || "linePrefix" === e) t--;
			else break;
		}
		let r = t > -1 ? i.events[t][1].type : null, l = "tableHead" === r || "tableRow" === r ? v : a;
		return l === v && i.parser.lazy[i.now().line] ? n(e) : l(e);
	};
	function a(t) {
		var n;
		return e.enter("tableHead"), e.enter("tableRow"), 124 === (n = t) || (r = !0, o += 1), u(n);
	}
	function u(t) {
		return null === t ? n(t) : I(t) ? o > 1 ? (o = 0, i.interrupt = !0, e.exit("tableRow"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), f) : n(t) : P(t) ? j(e, u, "whitespace")(t) : (o += 1, r && (r = !1, l += 1), 124 === t) ? (e.enter("tableCellDivider"), e.consume(t), e.exit("tableCellDivider"), r = !0, u) : (e.enter("data"), c(t));
	}
	function c(t) {
		return null === t || 124 === t || F(t) ? (e.exit("data"), u(t)) : (e.consume(t), 92 === t ? s : c);
	}
	function s(t) {
		return 92 === t || 124 === t ? (e.consume(t), c) : c(t);
	}
	function f(t) {
		return (i.interrupt = !1, i.parser.lazy[i.now().line]) ? n(t) : (e.enter("tableDelimiterRow"), r = !1, P(t)) ? j(e, p, "linePrefix", i.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : p(t);
	}
	function p(t) {
		return 45 === t || 58 === t ? h(t) : 124 === t ? (r = !0, e.enter("tableCellDivider"), e.consume(t), e.exit("tableCellDivider"), d) : n(t);
	}
	function d(t) {
		return P(t) ? j(e, h, "whitespace")(t) : h(t);
	}
	function h(t) {
		return 58 === t ? (o += 1, r = !0, e.enter("tableDelimiterMarker"), e.consume(t), e.exit("tableDelimiterMarker"), m) : 45 === t ? (o += 1, m(t)) : null === t || I(t) ? y(t) : n(t);
	}
	function m(t) {
		return 45 === t ? (e.enter("tableDelimiterFiller"), function t(n) {
			return 45 === n ? (e.consume(n), t) : 58 === n ? (r = !0, e.exit("tableDelimiterFiller"), e.enter("tableDelimiterMarker"), e.consume(n), e.exit("tableDelimiterMarker"), g) : (e.exit("tableDelimiterFiller"), g(n));
		}(t)) : n(t);
	}
	function g(t) {
		return P(t) ? j(e, y, "whitespace")(t) : y(t);
	}
	function y(i) {
		if (124 === i) return p(i);
		if (null === i || I(i)) return r && l === o ? (e.exit("tableDelimiterRow"), e.exit("tableHead"), t(i)) : n(i);
		return n(i);
	}
	function v(t) {
		return e.enter("tableRow"), x(t);
	}
	function x(n) {
		return 124 === n ? (e.enter("tableCellDivider"), e.consume(n), e.exit("tableCellDivider"), x) : null === n || I(n) ? (e.exit("tableRow"), t(n)) : P(n) ? j(e, x, "whitespace")(n) : (e.enter("data"), k(n));
	}
	function k(t) {
		return null === t || 124 === t || F(t) ? (e.exit("data"), x(t)) : (e.consume(t), 92 === t ? b : k);
	}
	function b(t) {
		return 92 === t || 124 === t ? (e.consume(t), k) : k(t);
	}
}
function tX(e, t) {
	let n, r, i, l = -1, o = !0, a = 0, u = [
		0,
		0,
		0,
		0
	], c = [
		0,
		0,
		0,
		0
	], s = !1, f = 0, p = new tK();
	for (; ++l < e.length;) {
		let d = e[l], h = d[1];
		"enter" === d[0] ? "tableHead" === h.type ? (s = !1, 0 !== f && (tY(p, t, f, n, r), r = void 0, f = 0), n = {
			type: "table",
			start: Object.assign({}, h.start),
			end: Object.assign({}, h.end)
		}, p.add(l, 0, [[
			"enter",
			n,
			t
		]])) : "tableRow" === h.type || "tableDelimiterRow" === h.type ? (o = !0, i = void 0, u = [
			0,
			0,
			0,
			0
		], c = [
			0,
			l + 1,
			0,
			0
		], s && (s = !1, r = {
			type: "tableBody",
			start: Object.assign({}, h.start),
			end: Object.assign({}, h.end)
		}, p.add(l, 0, [[
			"enter",
			r,
			t
		]])), a = "tableDelimiterRow" === h.type ? 2 : r ? 3 : 1) : a && ("data" === h.type || "tableDelimiterMarker" === h.type || "tableDelimiterFiller" === h.type) ? (o = !1, 0 === c[2] && (0 !== u[1] && (c[0] = c[1], i = tZ(p, t, u, a, void 0, i), u = [
			0,
			0,
			0,
			0
		]), c[2] = l)) : "tableCellDivider" === h.type && (o ? o = !1 : (0 !== u[1] && (c[0] = c[1], i = tZ(p, t, u, a, void 0, i)), c = [
			(u = c)[1],
			l,
			0,
			0
		])) : "tableHead" === h.type ? (s = !0, f = l) : "tableRow" === h.type || "tableDelimiterRow" === h.type ? (f = l, 0 !== u[1] ? (c[0] = c[1], i = tZ(p, t, u, a, l, i)) : 0 !== c[1] && (i = tZ(p, t, c, a, l, i)), a = 0) : a && ("data" === h.type || "tableDelimiterMarker" === h.type || "tableDelimiterFiller" === h.type) && (c[3] = l);
	}
	for (0 !== f && tY(p, t, f, n, r), p.consume(t.events), l = -1; ++l < t.events.length;) {
		let e = t.events[l];
		"enter" === e[0] && "table" === e[1].type && (e[1]._align = function(e, t) {
			let n = !1, r = [];
			for (; t < e.length;) {
				let i = e[t];
				if (n) {
					if ("enter" === i[0]) "tableContent" === i[1].type && r.push("tableDelimiterMarker" === e[t + 1][1].type ? "left" : "none");
					else if ("tableContent" === i[1].type) {
						if ("tableDelimiterMarker" === e[t - 1][1].type) {
							let e = r.length - 1;
							r[e] = "left" === r[e] ? "center" : "right";
						}
					} else if ("tableDelimiterRow" === i[1].type) break;
				} else "enter" === i[0] && "tableDelimiterRow" === i[1].type && (n = !0);
				t += 1;
			}
			return r;
		}(t.events, l));
	}
	return e;
}
function tZ(e, t, n, r, i, l) {
	0 !== n[0] && (l.end = Object.assign({}, tJ(t.events, n[0])), e.add(n[0], 0, [[
		"exit",
		l,
		t
	]]));
	let o = tJ(t.events, n[1]);
	if (l = {
		type: 1 === r ? "tableHeader" : 2 === r ? "tableDelimiter" : "tableData",
		start: Object.assign({}, o),
		end: Object.assign({}, o)
	}, e.add(n[1], 0, [[
		"enter",
		l,
		t
	]]), 0 !== n[2]) {
		let i = tJ(t.events, n[2]), l = tJ(t.events, n[3]), o = {
			type: "tableContent",
			start: Object.assign({}, i),
			end: Object.assign({}, l)
		};
		if (e.add(n[2], 0, [[
			"enter",
			o,
			t
		]]), 2 !== r) {
			let r = t.events[n[2]], i = t.events[n[3]];
			if (r[1].end = Object.assign({}, i[1].end), r[1].type = "chunkText", r[1].contentType = "text", n[3] > n[2] + 1) {
				let t = n[2] + 1, r = n[3] - n[2] - 1;
				e.add(t, r, []);
			}
		}
		e.add(n[3] + 1, 0, [[
			"exit",
			o,
			t
		]]);
	}
	return void 0 !== i && (l.end = Object.assign({}, tJ(t.events, i)), e.add(i, 0, [[
		"exit",
		l,
		t
	]]), l = void 0), l;
}
function tY(e, t, n, r, i) {
	let l = [], o = tJ(t.events, n);
	i && (i.end = Object.assign({}, o), l.push([
		"exit",
		i,
		t
	])), r.end = Object.assign({}, o), l.push([
		"exit",
		r,
		t
	]), e.add(n + 1, 0, l);
}
function tJ(e, t) {
	let n = e[t], r = "enter" === n[0] ? "start" : "end";
	return n[1][r];
}
var tG = {
	name: "tasklistCheck",
	tokenize: function(e, t, n) {
		let r = this;
		return function(t) {
			return null === r.previous && r._gfmTasklistFirstContentOfListItem ? (e.enter("taskListCheck"), e.enter("taskListCheckMarker"), e.consume(t), e.exit("taskListCheckMarker"), i) : n(t);
		};
		function i(t) {
			return F(t) ? (e.enter("taskListCheckValueUnchecked"), e.consume(t), e.exit("taskListCheckValueUnchecked"), l) : 88 === t || 120 === t ? (e.enter("taskListCheckValueChecked"), e.consume(t), e.exit("taskListCheckValueChecked"), l) : n(t);
		}
		function l(t) {
			return 93 === t ? (e.enter("taskListCheckMarker"), e.consume(t), e.exit("taskListCheckMarker"), e.exit("taskListCheck"), o) : n(t);
		}
		function o(r) {
			return I(r) ? t(r) : P(r) ? e.check({ tokenize: t1 }, t, n)(r) : n(r);
		}
	}
};
function t1(e, t, n) {
	return j(e, function(e) {
		return null === e ? n(e) : t(e);
	}, "whitespace");
}
function t0(e, t, n, r, i, l, o, a, u, c, s, f, p, d, h) {
	let m, g;
	return function(t) {
		return e.enter(r), e.enter(i), e.consume(t), e.exit(i), y;
	};
	function y(t) {
		return 35 === t ? (m = o, v(t)) : 46 === t ? (m = a, v(t)) : h && P(t) ? j(e, y, "whitespace")(t) : !h && F(t) ? ec(e, y)(t) : null === t || I(t) || N(t) || O(t) && 45 !== t && 95 !== t ? E(t) : (e.enter(l), e.enter(u), e.consume(t), b);
	}
	function v(t) {
		let n = m + "Marker";
		return e.enter(l), e.enter(m), e.enter(n), e.consume(t), e.exit(n), x;
	}
	function x(t) {
		if (null === t || 34 === t || 35 === t || 39 === t || 46 === t || 60 === t || 61 === t || 62 === t || 96 === t || 125 === t || F(t)) return n(t);
		let r = m + "Value";
		return e.enter(r), e.consume(t), k;
	}
	function k(t) {
		if (null === t || 34 === t || 39 === t || 60 === t || 61 === t || 62 === t || 96 === t) return n(t);
		if (35 === t || 46 === t || 125 === t || F(t)) {
			let n = m + "Value";
			return e.exit(n), e.exit(m), e.exit(l), y(t);
		}
		return e.consume(t), k;
	}
	function b(t) {
		return null === t || I(t) || N(t) || O(t) && 45 !== t && 46 !== t && 58 !== t && 95 !== t ? (e.exit(u), h && P(t)) ? j(e, C, "whitespace")(t) : !h && F(t) ? ec(e, C)(t) : C(t) : (e.consume(t), b);
	}
	function C(t) {
		return 61 === t ? (e.enter(c), e.consume(t), e.exit(c), S) : (e.exit(l), y(t));
	}
	function S(t) {
		return null === t || 60 === t || 61 === t || 62 === t || 96 === t || 125 === t || h && I(t) ? n(t) : 34 === t || 39 === t ? (e.enter(s), e.enter(p), e.consume(t), e.exit(p), g = t, A) : h && P(t) ? j(e, S, "whitespace")(t) : !h && F(t) ? ec(e, S)(t) : (e.enter(f), e.enter(d), e.consume(t), g = void 0, w);
	}
	function w(t) {
		return null === t || 34 === t || 39 === t || 60 === t || 61 === t || 62 === t || 96 === t ? n(t) : 125 === t || F(t) ? (e.exit(d), e.exit(f), e.exit(l), y(t)) : (e.consume(t), w);
	}
	function A(t) {
		return t === g ? (e.enter(p), e.consume(t), e.exit(p), e.exit(s), e.exit(l), D) : (e.enter(f), T(t));
	}
	function T(t) {
		return t === g ? (e.exit(f), A(t)) : null === t ? n(t) : I(t) ? h ? n(t) : ec(e, T)(t) : (e.enter(d), e.consume(t), L);
	}
	function L(t) {
		return t === g || null === t || I(t) ? (e.exit(d), T(t)) : (e.consume(t), L);
	}
	function D(e) {
		return 125 === e || F(e) ? y(e) : E(e);
	}
	function E(l) {
		return 125 === l ? (e.enter(i), e.consume(l), e.exit(i), e.exit(r), t) : n(l);
	}
}
function t2(e, t, n, r, i, l, o) {
	let a, u = 0, c = 0;
	return function(t) {
		return e.enter(r), e.enter(i), e.consume(t), e.exit(i), s;
	};
	function s(n) {
		return 93 === n ? (e.enter(i), e.consume(n), e.exit(i), e.exit(r), t) : (e.enter(l), f(n));
	}
	function f(t) {
		if (93 === t && !c) return h(t);
		let n = e.enter("chunkText", {
			_contentTypeTextTrailing: !0,
			contentType: "text",
			previous: a
		});
		return a && (a.next = n), a = n, p(t);
	}
	function p(t) {
		return null === t || u > 999 || 91 === t && ++c > 32 ? n(t) : 93 !== t || c-- ? I(t) ? o ? n(t) : (e.consume(t), e.exit("chunkText"), f) : (e.consume(t), 92 === t ? d : p) : (e.exit("chunkText"), h(t));
	}
	function d(t) {
		return 91 === t || 92 === t || 93 === t ? (e.consume(t), u++, p) : p(t);
	}
	function h(n) {
		return e.exit(l), e.enter(i), e.consume(n), e.exit(i), e.exit(r), t;
	}
}
function t4(e, t, n, r) {
	let i = this;
	return function(t) {
		return null === t || I(t) || O(t) || N(t) ? n(t) : (e.enter(r), e.consume(t), l);
	};
	function l(o) {
		return null === o || I(o) || N(o) || O(o) && 45 !== o && 95 !== o ? (e.exit(r), 45 === i.previous || 95 === i.previous ? n(o) : t(o)) : (e.consume(o), l);
	}
}
let t3 = {
	tokenize: function(e, t, n) {
		let r, i = this, l = i.events[i.events.length - 1], o = l && "linePrefix" === l[1].type ? l[2].sliceSerialize(l[1], !0).length : 0, a = 0;
		return function(t) {
			return e.enter("directiveContainer"), e.enter("directiveContainerFence"), e.enter("directiveContainerSequence"), function t(r) {
				return 58 === r ? (e.consume(r), a++, t) : a < 3 ? n(r) : (e.exit("directiveContainerSequence"), t4.call(i, e, u, n, "directiveContainerName")(r));
			}(t);
		};
		function u(t) {
			return 91 === t ? e.attempt(t5, c, c)(t) : c(t);
		}
		function c(t) {
			return 123 === t ? e.attempt(t9, s, s)(t) : s(t);
		}
		function s(t) {
			return j(e, f, "whitespace")(t);
		}
		function f(r) {
			return (e.exit("directiveContainerFence"), null === r) ? k(r) : I(r) ? i.interrupt ? t(r) : e.attempt(t6, p, k)(r) : n(r);
		}
		function p(t) {
			return null === t ? k(t) : I(t) ? e.check(t6, g, k)(t) : (e.enter("directiveContainerContent"), d(t));
		}
		function d(t) {
			return e.attempt({
				tokenize: b,
				partial: !0
			}, x, o ? j(e, h, "linePrefix", o + 1) : h)(t);
		}
		function h(t) {
			return null === t ? x(t) : I(t) ? e.check(t6, m, x)(t) : m(t);
		}
		function m(t) {
			let n = e.enter("chunkDocument", {
				contentType: "document",
				previous: r
			});
			return r && (r.next = n), r = n, function t(n) {
				if (null === n) {
					let t = e.exit("chunkDocument");
					return i.parser.lazy[t.start.line] = !1, x(n);
				}
				return I(n) ? e.check(t6, y, v)(n) : (e.consume(n), t);
			}(t);
		}
		function g(t) {
			return e.enter("directiveContainerContent"), d(t);
		}
		function y(t) {
			e.consume(t);
			let n = e.exit("chunkDocument");
			return i.parser.lazy[n.start.line] = !1, d;
		}
		function v(t) {
			let n = e.exit("chunkDocument");
			return i.parser.lazy[n.start.line] = !1, x(t);
		}
		function x(t) {
			return e.exit("directiveContainerContent"), k(t);
		}
		function k(n) {
			return e.exit("directiveContainer"), t(n);
		}
		function b(e, t, n) {
			let r = 0;
			return j(e, function(t) {
				return e.enter("directiveContainerFence"), e.enter("directiveContainerSequence"), function t(i) {
					return 58 === i ? (e.consume(i), r++, t) : r < a ? n(i) : (e.exit("directiveContainerSequence"), j(e, l, "whitespace")(i));
				}(t);
			}, "linePrefix", i.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
			function l(r) {
				return null === r || I(r) ? (e.exit("directiveContainerFence"), t(r)) : n(r);
			}
		}
	},
	concrete: !0
};
var t5 = {
	tokenize: function(e, t, n) {
		return t2(e, t, n, "directiveContainerLabel", "directiveContainerLabelMarker", "directiveContainerLabelString", !0);
	},
	partial: !0
}, t9 = {
	tokenize: function(e, t, n) {
		return t0(e, t, n, "directiveContainerAttributes", "directiveContainerAttributesMarker", "directiveContainerAttribute", "directiveContainerAttributeId", "directiveContainerAttributeClass", "directiveContainerAttributeName", "directiveContainerAttributeInitializerMarker", "directiveContainerAttributeValueLiteral", "directiveContainerAttributeValue", "directiveContainerAttributeValueMarker", "directiveContainerAttributeValueData", !0);
	},
	partial: !0
}, t6 = {
	tokenize: function(e, t, n) {
		let r = this;
		return function(t) {
			return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), i;
		};
		function i(e) {
			return r.parser.lazy[r.now().line] ? n(e) : t(e);
		}
	},
	partial: !0
};
let t8 = { tokenize: function(e, t, n) {
	let r = this;
	return function(t) {
		return e.enter("directiveLeaf"), e.enter("directiveLeafSequence"), e.consume(t), i;
	};
	function i(t) {
		return 58 === t ? (e.consume(t), e.exit("directiveLeafSequence"), t4.call(r, e, l, n, "directiveLeafName")) : n(t);
	}
	function l(t) {
		return 91 === t ? e.attempt(t7, o, o)(t) : o(t);
	}
	function o(t) {
		return 123 === t ? e.attempt(ne, a, a)(t) : a(t);
	}
	function a(t) {
		return j(e, u, "whitespace")(t);
	}
	function u(r) {
		return null === r || I(r) ? (e.exit("directiveLeaf"), t(r)) : n(r);
	}
} };
var t7 = {
	tokenize: function(e, t, n) {
		return t2(e, t, n, "directiveLeafLabel", "directiveLeafLabelMarker", "directiveLeafLabelString", !0);
	},
	partial: !0
}, ne = {
	tokenize: function(e, t, n) {
		return t0(e, t, n, "directiveLeafAttributes", "directiveLeafAttributesMarker", "directiveLeafAttribute", "directiveLeafAttributeId", "directiveLeafAttributeClass", "directiveLeafAttributeName", "directiveLeafAttributeInitializerMarker", "directiveLeafAttributeValueLiteral", "directiveLeafAttributeValue", "directiveLeafAttributeValueMarker", "directiveLeafAttributeValueData", !0);
	},
	partial: !0
};
let nt = {
	tokenize: function(e, t, n) {
		let r = this;
		return function(t) {
			return e.enter("directiveText"), e.enter("directiveTextMarker"), e.consume(t), e.exit("directiveTextMarker"), t4.call(r, e, i, n, "directiveTextName");
		};
		function i(t) {
			return 58 === t ? n(t) : 91 === t ? e.attempt(nn, l, l)(t) : l(t);
		}
		function l(t) {
			return 123 === t ? e.attempt(nr, o, o)(t) : o(t);
		}
		function o(n) {
			return e.exit("directiveText"), t(n);
		}
	},
	previous: function(e) {
		return 58 !== e || "characterEscape" === this.events[this.events.length - 1][1].type;
	}
};
var nn = {
	tokenize: function(e, t, n) {
		return t2(e, t, n, "directiveTextLabel", "directiveTextLabelMarker", "directiveTextLabelString");
	},
	partial: !0
}, nr = {
	tokenize: function(e, t, n) {
		return t0(e, t, n, "directiveTextAttributes", "directiveTextAttributesMarker", "directiveTextAttribute", "directiveTextAttributeId", "directiveTextAttributeClass", "directiveTextAttributeName", "directiveTextAttributeInitializerMarker", "directiveTextAttributeValueLiteral", "directiveTextAttributeValue", "directiveTextAttributeValueMarker", "directiveTextAttributeValueData");
	},
	partial: !0
};
let ni = [
	"AElig",
	"AMP",
	"Aacute",
	"Acirc",
	"Agrave",
	"Aring",
	"Atilde",
	"Auml",
	"COPY",
	"Ccedil",
	"ETH",
	"Eacute",
	"Ecirc",
	"Egrave",
	"Euml",
	"GT",
	"Iacute",
	"Icirc",
	"Igrave",
	"Iuml",
	"LT",
	"Ntilde",
	"Oacute",
	"Ocirc",
	"Ograve",
	"Oslash",
	"Otilde",
	"Ouml",
	"QUOT",
	"REG",
	"THORN",
	"Uacute",
	"Ucirc",
	"Ugrave",
	"Uuml",
	"Yacute",
	"aacute",
	"acirc",
	"acute",
	"aelig",
	"agrave",
	"amp",
	"aring",
	"atilde",
	"auml",
	"brvbar",
	"ccedil",
	"cedil",
	"cent",
	"copy",
	"curren",
	"deg",
	"divide",
	"eacute",
	"ecirc",
	"egrave",
	"eth",
	"euml",
	"frac12",
	"frac14",
	"frac34",
	"gt",
	"iacute",
	"icirc",
	"iexcl",
	"igrave",
	"iquest",
	"iuml",
	"laquo",
	"lt",
	"macr",
	"micro",
	"middot",
	"nbsp",
	"not",
	"ntilde",
	"oacute",
	"ocirc",
	"ograve",
	"ordf",
	"ordm",
	"oslash",
	"otilde",
	"ouml",
	"para",
	"plusmn",
	"pound",
	"quot",
	"raquo",
	"reg",
	"sect",
	"shy",
	"sup1",
	"sup2",
	"sup3",
	"szlig",
	"thorn",
	"times",
	"uacute",
	"ucirc",
	"ugrave",
	"uml",
	"uuml",
	"yacute",
	"yen",
	"yuml"
], nl = {
	0: "�",
	128: "€",
	130: "‚",
	131: "ƒ",
	132: "„",
	133: "…",
	134: "†",
	135: "‡",
	136: "ˆ",
	137: "‰",
	138: "Š",
	139: "‹",
	140: "Œ",
	142: "Ž",
	145: "‘",
	146: "’",
	147: "“",
	148: "”",
	149: "•",
	150: "–",
	151: "—",
	152: "˜",
	153: "™",
	154: "š",
	155: "›",
	156: "œ",
	158: "ž",
	159: "Ÿ"
};
function no(e) {
	let t = "string" == typeof e ? e.charCodeAt(0) : e;
	return t >= 48 && t <= 57;
}
function na(e) {
	let t = "string" == typeof e ? e.charCodeAt(0) : e;
	return t >= 97 && t <= 102 || t >= 65 && t <= 70 || t >= 48 && t <= 57;
}
function nu(e) {
	return function(e) {
		let t = "string" == typeof e ? e.charCodeAt(0) : e;
		return t >= 97 && t <= 122 || t >= 65 && t <= 90;
	}(e) || no(e);
}
var nc = [
	"",
	"Named character references must be terminated by a semicolon",
	"Numeric character references must be terminated by a semicolon",
	"Named character references cannot be empty",
	"Numeric character references cannot be empty",
	"Named character references must be known",
	"Numeric character references cannot be disallowed",
	"Numeric character references cannot be outside the permissible Unicode range"
];
function ns(e, t) {
	let n, r, i, l = t || {}, o = "string" == typeof l.additional ? l.additional.charCodeAt(0) : l.additional, a = [], u = 0, c = -1, s = "";
	l.position && ("start" in l.position || "indent" in l.position ? (r = l.position.indent, n = l.position.start) : n = l.position);
	let f = (n ? n.line : 0) || 1, p = (n ? n.column : 0) || 1, d = g();
	for (u--; ++u <= e.length;) if (10 === i && (p = (r ? r[c] : 0) || 1), 38 === (i = e.charCodeAt(u))) {
		let t, n = e.charCodeAt(u + 1);
		if (9 === n || 10 === n || 12 === n || 32 === n || 38 === n || 60 === n || Number.isNaN(n) || o && n === o) {
			s += String.fromCharCode(i), p++;
			continue;
		}
		let r = u + 1, c = r, f = r;
		if (35 === n) {
			f = ++c;
			let n = e.charCodeAt(f);
			88 === n || 120 === n ? (t = "hexadecimal", f = ++c) : t = "decimal";
		} else t = "named";
		let k = "", b = "", C = "", S = "named" === t ? nu : "decimal" === t ? no : na;
		for (f--; ++f <= e.length;) {
			let n = e.charCodeAt(f);
			if (!S(n)) break;
			C += String.fromCharCode(n), "named" === t && ni.includes(C) && (k = C, b = v(C));
		}
		let w = 59 === e.charCodeAt(f);
		if (w) {
			f++;
			let e = "named" === t && v(C);
			e && (k = C, b = e);
		}
		let A = 1 + f - r, T = "";
		if (w || !1 !== l.nonTerminated) if (C) if ("named" === t) {
			if (w && !b) y(5, 1);
			else if (k !== C && (A = 1 + (f = c + k.length) - c, w = !1), !w) {
				let t = k ? 1 : 3;
				if (l.attribute) {
					let n = e.charCodeAt(f);
					61 === n ? (y(t, A), b = "") : nu(n) ? b = "" : y(t, A);
				} else y(t, A);
			}
			T = b;
		} else {
			var h, m;
			w || y(2, A);
			let e = Number.parseInt(C, "hexadecimal" === t ? 16 : 10);
			if ((h = e) >= 55296 && h <= 57343 || h > 1114111) y(7, A), T = String.fromCharCode(65533);
			else if (e in nl) y(6, A), T = nl[e];
			else {
				let t = "";
				((m = e) >= 1 && m <= 8 || 11 === m || m >= 13 && m <= 31 || m >= 127 && m <= 159 || m >= 64976 && m <= 65007 || (65535 & m) == 65535 || (65535 & m) == 65534) && y(6, A), e > 65535 && (e -= 65536, t += String.fromCharCode(e >>> 10 | 55296), e = 56320 | 1023 & e), T = t + String.fromCharCode(e);
			}
		}
		else "named" !== t && y(4, A);
		if (T) {
			x(), d = g(), u = f - 1, p += f - r + 1, a.push(T);
			let t = g();
			t.offset++, l.reference && l.reference.call(l.referenceContext || void 0, T, {
				start: d,
				end: t
			}, e.slice(r - 1, f)), d = t;
		} else C = e.slice(r - 1, f), s += C, p += C.length, u = f - 1;
	} else 10 === i && (f++, c++, p = 0), Number.isNaN(i) ? x() : (s += String.fromCharCode(i), p++);
	return a.join("");
	function g() {
		return {
			line: f,
			column: p,
			offset: u + ((n ? n.offset : 0) || 0)
		};
	}
	function y(e, t) {
		let n;
		l.warning && (n = g(), n.column += t, n.offset += t, l.warning.call(l.warningContext || void 0, nc[e], n, e));
	}
	function x() {
		s && (a.push(s), l.text && l.text.call(l.textContext || void 0, s, {
			start: d,
			end: g()
		}), s = "");
	}
}
function nf(e) {
	nh.call(this, "containerDirective", e);
}
function np(e) {
	nh.call(this, "leafDirective", e);
}
function nd(e) {
	nh.call(this, "textDirective", e);
}
function nh(e, t) {
	this.enter({
		type: e,
		name: "",
		attributes: {},
		children: []
	}, t);
}
function nm(e) {
	let t = this.stack[this.stack.length - 1];
	"containerDirective" === t.type || "leafDirective" === t.type || t.type, t.name = this.sliceSerialize(e);
}
function ng(e) {
	this.enter({
		type: "paragraph",
		data: { directiveLabel: !0 },
		children: []
	}, e);
}
function ny(e) {
	this.exit(e);
}
function nv() {
	this.data.directiveAttributes = [], this.buffer();
}
function nx(e) {
	this.data.directiveAttributes.push(["id", ns(this.sliceSerialize(e), { attribute: !0 })]);
}
function nk(e) {
	this.data.directiveAttributes.push(["class", ns(this.sliceSerialize(e), { attribute: !0 })]);
}
function nb(e) {
	let t = this.data.directiveAttributes;
	t[t.length - 1][1] = ns(this.sliceSerialize(e), { attribute: !0 });
}
function nC(e) {
	this.data.directiveAttributes.push([this.sliceSerialize(e), ""]);
}
function nS() {
	let e = this.data.directiveAttributes, t = {}, n = -1;
	for (; ++n < e.length;) {
		let r = e[n];
		"class" === r[0] && t.class ? t.class += " " + r[1] : t[r[0]] = r[1];
	}
	this.data.directiveAttributes = void 0, this.resume();
	let r = this.stack[this.stack.length - 1];
	"containerDirective" === r.type || "leafDirective" === r.type || r.type, r.attributes = t;
}
function nw(e) {
	this.exit(e);
}
var nA = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, nT = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, nL = {};
function nD(e, t) {
	return ((t || nL).jsx ? nT : nA).test(e);
}
var nE = /[ \t\n\f\r]/g;
function nM(e) {
	return "" === e.replace(nE, "");
}
var nz = class {
	constructor(e, t, n) {
		this.normal = t, this.property = e, n && (this.space = n);
	}
};
function nI(e, t) {
	let n = {}, r = {};
	for (let t of e) Object.assign(n, t.property), Object.assign(r, t.normal);
	return new nz(n, r, t);
}
function nF(e) {
	return e.toLowerCase();
}
nz.prototype.normal = {}, nz.prototype.property = {}, nz.prototype.space = void 0;
var nP = class {
	constructor(e, t) {
		this.attribute = t, this.property = e;
	}
};
nP.prototype.attribute = "", nP.prototype.booleanish = !1, nP.prototype.boolean = !1, nP.prototype.commaOrSpaceSeparated = !1, nP.prototype.commaSeparated = !1, nP.prototype.defined = !1, nP.prototype.mustUseProperty = !1, nP.prototype.number = !1, nP.prototype.overloadedBoolean = !1, nP.prototype.property = "", nP.prototype.spaceSeparated = !1, nP.prototype.space = void 0;
var nO = e({
	boolean: () => nR,
	booleanish: () => n_,
	commaOrSpaceSeparated: () => nU,
	commaSeparated: () => nV,
	number: () => nB,
	overloadedBoolean: () => nj,
	spaceSeparated: () => nH
}), nN = 0;
let nR = nq(), n_ = nq(), nj = nq(), nB = nq(), nH = nq(), nV = nq(), nU = nq();
function nq() {
	return 2 ** ++nN;
}
var nW = Object.keys(nO), n$ = class extends nP {
	constructor(e, t, n, r) {
		var i, l, o, a, u;
		let c = -1;
		if (super(e, t), i = this, (l = r) && (i.space = l), "number" == typeof n) for (; ++c < nW.length;) {
			let e = nW[c];
			o = this, a = nW[c], (u = (n & nO[e]) === nO[e]) && (o[a] = u);
		}
	}
};
function nK(e) {
	let t = {}, n = {};
	for (let [r, i] of Object.entries(e.properties)) {
		let l = new n$(r, e.transform(e.attributes || {}, r), i, e.space);
		e.mustUseProperty && e.mustUseProperty.includes(r) && (l.mustUseProperty = !0), t[r] = l, n[nF(r)] = r, n[nF(l.attribute)] = r;
	}
	return new nz(t, n, e.space);
}
n$.prototype.defined = !0;
let nQ = nK({
	properties: {
		ariaActiveDescendant: null,
		ariaAtomic: n_,
		ariaAutoComplete: null,
		ariaBusy: n_,
		ariaChecked: n_,
		ariaColCount: nB,
		ariaColIndex: nB,
		ariaColSpan: nB,
		ariaControls: nH,
		ariaCurrent: null,
		ariaDescribedBy: nH,
		ariaDetails: null,
		ariaDisabled: n_,
		ariaDropEffect: nH,
		ariaErrorMessage: null,
		ariaExpanded: n_,
		ariaFlowTo: nH,
		ariaGrabbed: n_,
		ariaHasPopup: null,
		ariaHidden: n_,
		ariaInvalid: null,
		ariaKeyShortcuts: null,
		ariaLabel: null,
		ariaLabelledBy: nH,
		ariaLevel: nB,
		ariaLive: null,
		ariaModal: n_,
		ariaMultiLine: n_,
		ariaMultiSelectable: n_,
		ariaOrientation: null,
		ariaOwns: nH,
		ariaPlaceholder: null,
		ariaPosInSet: nB,
		ariaPressed: n_,
		ariaReadOnly: n_,
		ariaRelevant: null,
		ariaRequired: n_,
		ariaRoleDescription: nH,
		ariaRowCount: nB,
		ariaRowIndex: nB,
		ariaRowSpan: nB,
		ariaSelected: n_,
		ariaSetSize: nB,
		ariaSort: null,
		ariaValueMax: nB,
		ariaValueMin: nB,
		ariaValueNow: nB,
		ariaValueText: null,
		role: null
	},
	transform: (e, t) => "role" === t ? t : "aria-" + t.slice(4).toLowerCase()
});
function nX(e, t) {
	return t in e ? e[t] : t;
}
function nZ(e, t) {
	return nX(e, t.toLowerCase());
}
let nY = nK({
	attributes: {
		acceptcharset: "accept-charset",
		classname: "class",
		htmlfor: "for",
		httpequiv: "http-equiv"
	},
	mustUseProperty: [
		"checked",
		"multiple",
		"muted",
		"selected"
	],
	properties: {
		abbr: null,
		accept: nV,
		acceptCharset: nH,
		accessKey: nH,
		action: null,
		allow: null,
		allowFullScreen: nR,
		allowPaymentRequest: nR,
		allowUserMedia: nR,
		alt: null,
		as: null,
		async: nR,
		autoCapitalize: null,
		autoComplete: nH,
		autoFocus: nR,
		autoPlay: nR,
		blocking: nH,
		capture: null,
		charSet: null,
		checked: nR,
		cite: null,
		className: nH,
		cols: nB,
		colSpan: null,
		content: null,
		contentEditable: n_,
		controls: nR,
		controlsList: nH,
		coords: nB | nV,
		crossOrigin: null,
		data: null,
		dateTime: null,
		decoding: null,
		default: nR,
		defer: nR,
		dir: null,
		dirName: null,
		disabled: nR,
		download: nj,
		draggable: n_,
		encType: null,
		enterKeyHint: null,
		fetchPriority: null,
		form: null,
		formAction: null,
		formEncType: null,
		formMethod: null,
		formNoValidate: nR,
		formTarget: null,
		headers: nH,
		height: nB,
		hidden: nj,
		high: nB,
		href: null,
		hrefLang: null,
		htmlFor: nH,
		httpEquiv: nH,
		id: null,
		imageSizes: null,
		imageSrcSet: null,
		inert: nR,
		inputMode: null,
		integrity: null,
		is: null,
		isMap: nR,
		itemId: null,
		itemProp: nH,
		itemRef: nH,
		itemScope: nR,
		itemType: nH,
		kind: null,
		label: null,
		lang: null,
		language: null,
		list: null,
		loading: null,
		loop: nR,
		low: nB,
		manifest: null,
		max: null,
		maxLength: nB,
		media: null,
		method: null,
		min: null,
		minLength: nB,
		multiple: nR,
		muted: nR,
		name: null,
		nonce: null,
		noModule: nR,
		noValidate: nR,
		onAbort: null,
		onAfterPrint: null,
		onAuxClick: null,
		onBeforeMatch: null,
		onBeforePrint: null,
		onBeforeToggle: null,
		onBeforeUnload: null,
		onBlur: null,
		onCancel: null,
		onCanPlay: null,
		onCanPlayThrough: null,
		onChange: null,
		onClick: null,
		onClose: null,
		onContextLost: null,
		onContextMenu: null,
		onContextRestored: null,
		onCopy: null,
		onCueChange: null,
		onCut: null,
		onDblClick: null,
		onDrag: null,
		onDragEnd: null,
		onDragEnter: null,
		onDragExit: null,
		onDragLeave: null,
		onDragOver: null,
		onDragStart: null,
		onDrop: null,
		onDurationChange: null,
		onEmptied: null,
		onEnded: null,
		onError: null,
		onFocus: null,
		onFormData: null,
		onHashChange: null,
		onInput: null,
		onInvalid: null,
		onKeyDown: null,
		onKeyPress: null,
		onKeyUp: null,
		onLanguageChange: null,
		onLoad: null,
		onLoadedData: null,
		onLoadedMetadata: null,
		onLoadEnd: null,
		onLoadStart: null,
		onMessage: null,
		onMessageError: null,
		onMouseDown: null,
		onMouseEnter: null,
		onMouseLeave: null,
		onMouseMove: null,
		onMouseOut: null,
		onMouseOver: null,
		onMouseUp: null,
		onOffline: null,
		onOnline: null,
		onPageHide: null,
		onPageShow: null,
		onPaste: null,
		onPause: null,
		onPlay: null,
		onPlaying: null,
		onPopState: null,
		onProgress: null,
		onRateChange: null,
		onRejectionHandled: null,
		onReset: null,
		onResize: null,
		onScroll: null,
		onScrollEnd: null,
		onSecurityPolicyViolation: null,
		onSeeked: null,
		onSeeking: null,
		onSelect: null,
		onSlotChange: null,
		onStalled: null,
		onStorage: null,
		onSubmit: null,
		onSuspend: null,
		onTimeUpdate: null,
		onToggle: null,
		onUnhandledRejection: null,
		onUnload: null,
		onVolumeChange: null,
		onWaiting: null,
		onWheel: null,
		open: nR,
		optimum: nB,
		pattern: null,
		ping: nH,
		placeholder: null,
		playsInline: nR,
		popover: null,
		popoverTarget: null,
		popoverTargetAction: null,
		poster: null,
		preload: null,
		readOnly: nR,
		referrerPolicy: null,
		rel: nH,
		required: nR,
		reversed: nR,
		rows: nB,
		rowSpan: nB,
		sandbox: nH,
		scope: null,
		scoped: nR,
		seamless: nR,
		selected: nR,
		shadowRootClonable: nR,
		shadowRootDelegatesFocus: nR,
		shadowRootMode: null,
		shape: null,
		size: nB,
		sizes: null,
		slot: null,
		span: nB,
		spellCheck: n_,
		src: null,
		srcDoc: null,
		srcLang: null,
		srcSet: null,
		start: nB,
		step: null,
		style: null,
		tabIndex: nB,
		target: null,
		title: null,
		translate: null,
		type: null,
		typeMustMatch: nR,
		useMap: null,
		value: n_,
		width: nB,
		wrap: null,
		writingSuggestions: null,
		align: null,
		aLink: null,
		archive: nH,
		axis: null,
		background: null,
		bgColor: null,
		border: nB,
		borderColor: null,
		bottomMargin: nB,
		cellPadding: null,
		cellSpacing: null,
		char: null,
		charOff: null,
		classId: null,
		clear: null,
		code: null,
		codeBase: null,
		codeType: null,
		color: null,
		compact: nR,
		declare: nR,
		event: null,
		face: null,
		frame: null,
		frameBorder: null,
		hSpace: nB,
		leftMargin: nB,
		link: null,
		longDesc: null,
		lowSrc: null,
		marginHeight: nB,
		marginWidth: nB,
		noResize: nR,
		noHref: nR,
		noShade: nR,
		noWrap: nR,
		object: null,
		profile: null,
		prompt: null,
		rev: null,
		rightMargin: nB,
		rules: null,
		scheme: null,
		scrolling: n_,
		standby: null,
		summary: null,
		text: null,
		topMargin: nB,
		valueType: null,
		version: null,
		vAlign: null,
		vLink: null,
		vSpace: nB,
		allowTransparency: null,
		autoCorrect: null,
		autoSave: null,
		disablePictureInPicture: nR,
		disableRemotePlayback: nR,
		prefix: null,
		property: null,
		results: nB,
		security: null,
		unselectable: null
	},
	space: "html",
	transform: nZ
}), nJ = nK({
	attributes: {
		accentHeight: "accent-height",
		alignmentBaseline: "alignment-baseline",
		arabicForm: "arabic-form",
		baselineShift: "baseline-shift",
		capHeight: "cap-height",
		className: "class",
		clipPath: "clip-path",
		clipRule: "clip-rule",
		colorInterpolation: "color-interpolation",
		colorInterpolationFilters: "color-interpolation-filters",
		colorProfile: "color-profile",
		colorRendering: "color-rendering",
		crossOrigin: "crossorigin",
		dataType: "datatype",
		dominantBaseline: "dominant-baseline",
		enableBackground: "enable-background",
		fillOpacity: "fill-opacity",
		fillRule: "fill-rule",
		floodColor: "flood-color",
		floodOpacity: "flood-opacity",
		fontFamily: "font-family",
		fontSize: "font-size",
		fontSizeAdjust: "font-size-adjust",
		fontStretch: "font-stretch",
		fontStyle: "font-style",
		fontVariant: "font-variant",
		fontWeight: "font-weight",
		glyphName: "glyph-name",
		glyphOrientationHorizontal: "glyph-orientation-horizontal",
		glyphOrientationVertical: "glyph-orientation-vertical",
		hrefLang: "hreflang",
		horizAdvX: "horiz-adv-x",
		horizOriginX: "horiz-origin-x",
		horizOriginY: "horiz-origin-y",
		imageRendering: "image-rendering",
		letterSpacing: "letter-spacing",
		lightingColor: "lighting-color",
		markerEnd: "marker-end",
		markerMid: "marker-mid",
		markerStart: "marker-start",
		navDown: "nav-down",
		navDownLeft: "nav-down-left",
		navDownRight: "nav-down-right",
		navLeft: "nav-left",
		navNext: "nav-next",
		navPrev: "nav-prev",
		navRight: "nav-right",
		navUp: "nav-up",
		navUpLeft: "nav-up-left",
		navUpRight: "nav-up-right",
		onAbort: "onabort",
		onActivate: "onactivate",
		onAfterPrint: "onafterprint",
		onBeforePrint: "onbeforeprint",
		onBegin: "onbegin",
		onCancel: "oncancel",
		onCanPlay: "oncanplay",
		onCanPlayThrough: "oncanplaythrough",
		onChange: "onchange",
		onClick: "onclick",
		onClose: "onclose",
		onCopy: "oncopy",
		onCueChange: "oncuechange",
		onCut: "oncut",
		onDblClick: "ondblclick",
		onDrag: "ondrag",
		onDragEnd: "ondragend",
		onDragEnter: "ondragenter",
		onDragExit: "ondragexit",
		onDragLeave: "ondragleave",
		onDragOver: "ondragover",
		onDragStart: "ondragstart",
		onDrop: "ondrop",
		onDurationChange: "ondurationchange",
		onEmptied: "onemptied",
		onEnd: "onend",
		onEnded: "onended",
		onError: "onerror",
		onFocus: "onfocus",
		onFocusIn: "onfocusin",
		onFocusOut: "onfocusout",
		onHashChange: "onhashchange",
		onInput: "oninput",
		onInvalid: "oninvalid",
		onKeyDown: "onkeydown",
		onKeyPress: "onkeypress",
		onKeyUp: "onkeyup",
		onLoad: "onload",
		onLoadedData: "onloadeddata",
		onLoadedMetadata: "onloadedmetadata",
		onLoadStart: "onloadstart",
		onMessage: "onmessage",
		onMouseDown: "onmousedown",
		onMouseEnter: "onmouseenter",
		onMouseLeave: "onmouseleave",
		onMouseMove: "onmousemove",
		onMouseOut: "onmouseout",
		onMouseOver: "onmouseover",
		onMouseUp: "onmouseup",
		onMouseWheel: "onmousewheel",
		onOffline: "onoffline",
		onOnline: "ononline",
		onPageHide: "onpagehide",
		onPageShow: "onpageshow",
		onPaste: "onpaste",
		onPause: "onpause",
		onPlay: "onplay",
		onPlaying: "onplaying",
		onPopState: "onpopstate",
		onProgress: "onprogress",
		onRateChange: "onratechange",
		onRepeat: "onrepeat",
		onReset: "onreset",
		onResize: "onresize",
		onScroll: "onscroll",
		onSeeked: "onseeked",
		onSeeking: "onseeking",
		onSelect: "onselect",
		onShow: "onshow",
		onStalled: "onstalled",
		onStorage: "onstorage",
		onSubmit: "onsubmit",
		onSuspend: "onsuspend",
		onTimeUpdate: "ontimeupdate",
		onToggle: "ontoggle",
		onUnload: "onunload",
		onVolumeChange: "onvolumechange",
		onWaiting: "onwaiting",
		onZoom: "onzoom",
		overlinePosition: "overline-position",
		overlineThickness: "overline-thickness",
		paintOrder: "paint-order",
		panose1: "panose-1",
		pointerEvents: "pointer-events",
		referrerPolicy: "referrerpolicy",
		renderingIntent: "rendering-intent",
		shapeRendering: "shape-rendering",
		stopColor: "stop-color",
		stopOpacity: "stop-opacity",
		strikethroughPosition: "strikethrough-position",
		strikethroughThickness: "strikethrough-thickness",
		strokeDashArray: "stroke-dasharray",
		strokeDashOffset: "stroke-dashoffset",
		strokeLineCap: "stroke-linecap",
		strokeLineJoin: "stroke-linejoin",
		strokeMiterLimit: "stroke-miterlimit",
		strokeOpacity: "stroke-opacity",
		strokeWidth: "stroke-width",
		tabIndex: "tabindex",
		textAnchor: "text-anchor",
		textDecoration: "text-decoration",
		textRendering: "text-rendering",
		transformOrigin: "transform-origin",
		typeOf: "typeof",
		underlinePosition: "underline-position",
		underlineThickness: "underline-thickness",
		unicodeBidi: "unicode-bidi",
		unicodeRange: "unicode-range",
		unitsPerEm: "units-per-em",
		vAlphabetic: "v-alphabetic",
		vHanging: "v-hanging",
		vIdeographic: "v-ideographic",
		vMathematical: "v-mathematical",
		vectorEffect: "vector-effect",
		vertAdvY: "vert-adv-y",
		vertOriginX: "vert-origin-x",
		vertOriginY: "vert-origin-y",
		wordSpacing: "word-spacing",
		writingMode: "writing-mode",
		xHeight: "x-height",
		playbackOrder: "playbackorder",
		timelineBegin: "timelinebegin"
	},
	properties: {
		about: nU,
		accentHeight: nB,
		accumulate: null,
		additive: null,
		alignmentBaseline: null,
		alphabetic: nB,
		amplitude: nB,
		arabicForm: null,
		ascent: nB,
		attributeName: null,
		attributeType: null,
		azimuth: nB,
		bandwidth: null,
		baselineShift: null,
		baseFrequency: null,
		baseProfile: null,
		bbox: null,
		begin: null,
		bias: nB,
		by: null,
		calcMode: null,
		capHeight: nB,
		className: nH,
		clip: null,
		clipPath: null,
		clipPathUnits: null,
		clipRule: null,
		color: null,
		colorInterpolation: null,
		colorInterpolationFilters: null,
		colorProfile: null,
		colorRendering: null,
		content: null,
		contentScriptType: null,
		contentStyleType: null,
		crossOrigin: null,
		cursor: null,
		cx: null,
		cy: null,
		d: null,
		dataType: null,
		defaultAction: null,
		descent: nB,
		diffuseConstant: nB,
		direction: null,
		display: null,
		dur: null,
		divisor: nB,
		dominantBaseline: null,
		download: nR,
		dx: null,
		dy: null,
		edgeMode: null,
		editable: null,
		elevation: nB,
		enableBackground: null,
		end: null,
		event: null,
		exponent: nB,
		externalResourcesRequired: null,
		fill: null,
		fillOpacity: nB,
		fillRule: null,
		filter: null,
		filterRes: null,
		filterUnits: null,
		floodColor: null,
		floodOpacity: null,
		focusable: null,
		focusHighlight: null,
		fontFamily: null,
		fontSize: null,
		fontSizeAdjust: null,
		fontStretch: null,
		fontStyle: null,
		fontVariant: null,
		fontWeight: null,
		format: null,
		fr: null,
		from: null,
		fx: null,
		fy: null,
		g1: nV,
		g2: nV,
		glyphName: nV,
		glyphOrientationHorizontal: null,
		glyphOrientationVertical: null,
		glyphRef: null,
		gradientTransform: null,
		gradientUnits: null,
		handler: null,
		hanging: nB,
		hatchContentUnits: null,
		hatchUnits: null,
		height: null,
		href: null,
		hrefLang: null,
		horizAdvX: nB,
		horizOriginX: nB,
		horizOriginY: nB,
		id: null,
		ideographic: nB,
		imageRendering: null,
		initialVisibility: null,
		in: null,
		in2: null,
		intercept: nB,
		k: nB,
		k1: nB,
		k2: nB,
		k3: nB,
		k4: nB,
		kernelMatrix: nU,
		kernelUnitLength: null,
		keyPoints: null,
		keySplines: null,
		keyTimes: null,
		kerning: null,
		lang: null,
		lengthAdjust: null,
		letterSpacing: null,
		lightingColor: null,
		limitingConeAngle: nB,
		local: null,
		markerEnd: null,
		markerMid: null,
		markerStart: null,
		markerHeight: null,
		markerUnits: null,
		markerWidth: null,
		mask: null,
		maskContentUnits: null,
		maskUnits: null,
		mathematical: null,
		max: null,
		media: null,
		mediaCharacterEncoding: null,
		mediaContentEncodings: null,
		mediaSize: nB,
		mediaTime: null,
		method: null,
		min: null,
		mode: null,
		name: null,
		navDown: null,
		navDownLeft: null,
		navDownRight: null,
		navLeft: null,
		navNext: null,
		navPrev: null,
		navRight: null,
		navUp: null,
		navUpLeft: null,
		navUpRight: null,
		numOctaves: null,
		observer: null,
		offset: null,
		onAbort: null,
		onActivate: null,
		onAfterPrint: null,
		onBeforePrint: null,
		onBegin: null,
		onCancel: null,
		onCanPlay: null,
		onCanPlayThrough: null,
		onChange: null,
		onClick: null,
		onClose: null,
		onCopy: null,
		onCueChange: null,
		onCut: null,
		onDblClick: null,
		onDrag: null,
		onDragEnd: null,
		onDragEnter: null,
		onDragExit: null,
		onDragLeave: null,
		onDragOver: null,
		onDragStart: null,
		onDrop: null,
		onDurationChange: null,
		onEmptied: null,
		onEnd: null,
		onEnded: null,
		onError: null,
		onFocus: null,
		onFocusIn: null,
		onFocusOut: null,
		onHashChange: null,
		onInput: null,
		onInvalid: null,
		onKeyDown: null,
		onKeyPress: null,
		onKeyUp: null,
		onLoad: null,
		onLoadedData: null,
		onLoadedMetadata: null,
		onLoadStart: null,
		onMessage: null,
		onMouseDown: null,
		onMouseEnter: null,
		onMouseLeave: null,
		onMouseMove: null,
		onMouseOut: null,
		onMouseOver: null,
		onMouseUp: null,
		onMouseWheel: null,
		onOffline: null,
		onOnline: null,
		onPageHide: null,
		onPageShow: null,
		onPaste: null,
		onPause: null,
		onPlay: null,
		onPlaying: null,
		onPopState: null,
		onProgress: null,
		onRateChange: null,
		onRepeat: null,
		onReset: null,
		onResize: null,
		onScroll: null,
		onSeeked: null,
		onSeeking: null,
		onSelect: null,
		onShow: null,
		onStalled: null,
		onStorage: null,
		onSubmit: null,
		onSuspend: null,
		onTimeUpdate: null,
		onToggle: null,
		onUnload: null,
		onVolumeChange: null,
		onWaiting: null,
		onZoom: null,
		opacity: null,
		operator: null,
		order: null,
		orient: null,
		orientation: null,
		origin: null,
		overflow: null,
		overlay: null,
		overlinePosition: nB,
		overlineThickness: nB,
		paintOrder: null,
		panose1: null,
		path: null,
		pathLength: nB,
		patternContentUnits: null,
		patternTransform: null,
		patternUnits: null,
		phase: null,
		ping: nH,
		pitch: null,
		playbackOrder: null,
		pointerEvents: null,
		points: null,
		pointsAtX: nB,
		pointsAtY: nB,
		pointsAtZ: nB,
		preserveAlpha: null,
		preserveAspectRatio: null,
		primitiveUnits: null,
		propagate: null,
		property: nU,
		r: null,
		radius: null,
		referrerPolicy: null,
		refX: null,
		refY: null,
		rel: nU,
		rev: nU,
		renderingIntent: null,
		repeatCount: null,
		repeatDur: null,
		requiredExtensions: nU,
		requiredFeatures: nU,
		requiredFonts: nU,
		requiredFormats: nU,
		resource: null,
		restart: null,
		result: null,
		rotate: null,
		rx: null,
		ry: null,
		scale: null,
		seed: null,
		shapeRendering: null,
		side: null,
		slope: null,
		snapshotTime: null,
		specularConstant: nB,
		specularExponent: nB,
		spreadMethod: null,
		spacing: null,
		startOffset: null,
		stdDeviation: null,
		stemh: null,
		stemv: null,
		stitchTiles: null,
		stopColor: null,
		stopOpacity: null,
		strikethroughPosition: nB,
		strikethroughThickness: nB,
		string: null,
		stroke: null,
		strokeDashArray: nU,
		strokeDashOffset: null,
		strokeLineCap: null,
		strokeLineJoin: null,
		strokeMiterLimit: nB,
		strokeOpacity: nB,
		strokeWidth: null,
		style: null,
		surfaceScale: nB,
		syncBehavior: null,
		syncBehaviorDefault: null,
		syncMaster: null,
		syncTolerance: null,
		syncToleranceDefault: null,
		systemLanguage: nU,
		tabIndex: nB,
		tableValues: null,
		target: null,
		targetX: nB,
		targetY: nB,
		textAnchor: null,
		textDecoration: null,
		textRendering: null,
		textLength: null,
		timelineBegin: null,
		title: null,
		transformBehavior: null,
		type: null,
		typeOf: nU,
		to: null,
		transform: null,
		transformOrigin: null,
		u1: null,
		u2: null,
		underlinePosition: nB,
		underlineThickness: nB,
		unicode: null,
		unicodeBidi: null,
		unicodeRange: null,
		unitsPerEm: nB,
		values: null,
		vAlphabetic: nB,
		vMathematical: nB,
		vectorEffect: null,
		vHanging: nB,
		vIdeographic: nB,
		version: null,
		vertAdvY: nB,
		vertOriginX: nB,
		vertOriginY: nB,
		viewBox: null,
		viewTarget: null,
		visibility: null,
		width: null,
		widths: null,
		wordSpacing: null,
		writingMode: null,
		x: null,
		x1: null,
		x2: null,
		xChannelSelector: null,
		xHeight: nB,
		y: null,
		y1: null,
		y2: null,
		yChannelSelector: null,
		z: null,
		zoomAndPan: null
	},
	space: "svg",
	transform: nX
}), nG = nK({
	properties: {
		xLinkActuate: null,
		xLinkArcRole: null,
		xLinkHref: null,
		xLinkRole: null,
		xLinkShow: null,
		xLinkTitle: null,
		xLinkType: null
	},
	space: "xlink",
	transform: (e, t) => "xlink:" + t.slice(5).toLowerCase()
}), n1 = nK({
	attributes: { xmlnsxlink: "xmlns:xlink" },
	properties: {
		xmlnsXLink: null,
		xmlns: null
	},
	space: "xmlns",
	transform: nZ
}), n0 = nK({
	properties: {
		xmlBase: null,
		xmlLang: null,
		xmlSpace: null
	},
	space: "xml",
	transform: (e, t) => "xml:" + t.slice(3).toLowerCase()
}), n2 = {
	classId: "classID",
	dataType: "datatype",
	itemId: "itemID",
	strokeDashArray: "strokeDasharray",
	strokeDashOffset: "strokeDashoffset",
	strokeLineCap: "strokeLinecap",
	strokeLineJoin: "strokeLinejoin",
	strokeMiterLimit: "strokeMiterlimit",
	typeOf: "typeof",
	xLinkActuate: "xlinkActuate",
	xLinkArcRole: "xlinkArcrole",
	xLinkHref: "xlinkHref",
	xLinkRole: "xlinkRole",
	xLinkShow: "xlinkShow",
	xLinkTitle: "xlinkTitle",
	xLinkType: "xlinkType",
	xmlnsXLink: "xmlnsXlink"
};
var n4 = /[A-Z]/g, n3 = /-[a-z]/g, n5 = /^data[-\w.:]+$/i;
function n9(e) {
	return "-" + e.toLowerCase();
}
function n6(e) {
	return e.charAt(1).toUpperCase();
}
let n8 = nI([
	nQ,
	nY,
	nG,
	n1,
	n0
], "html"), n7 = nI([
	nQ,
	nJ,
	nG,
	n1,
	n0
], "svg");
var re = n((e, t) => {
	var n = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, r = /\n/g, i = /^\s*/, l = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, o = /^:\s*/, a = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, u = /^[;\s]*/, c = /^\s+|\s+$/g;
	function s(e) {
		return e ? e.replace(c, "") : "";
	}
	t.exports = function(e, t) {
		if ("string" != typeof e) throw TypeError("First argument must be a string");
		if (!e) return [];
		t = t || {};
		var c = 1, f = 1;
		function p(e) {
			var t = e.match(r);
			t && (c += t.length);
			var n = e.lastIndexOf("\n");
			f = ~n ? e.length - n : f + e.length;
		}
		function d() {
			var e = {
				line: c,
				column: f
			};
			return function(t) {
				return t.position = new h(e), y(i), t;
			};
		}
		function h(e) {
			this.start = e, this.end = {
				line: c,
				column: f
			}, this.source = t.source;
		}
		h.prototype.content = e;
		var m = [];
		function g(n) {
			var r = Error(t.source + ":" + c + ":" + f + ": " + n);
			if (r.reason = n, r.filename = t.source, r.line = c, r.column = f, r.source = e, t.silent) m.push(r);
			else throw r;
		}
		function y(t) {
			var n = t.exec(e);
			if (n) {
				var r = n[0];
				return p(r), e = e.slice(r.length), n;
			}
		}
		function v(e) {
			var t;
			for (e = e || []; t = x();) !1 !== t && e.push(t);
			return e;
		}
		function x() {
			var t = d();
			if ("/" == e.charAt(0) && "*" == e.charAt(1)) {
				for (var n = 2; "" != e.charAt(n) && ("*" != e.charAt(n) || "/" != e.charAt(n + 1));) ++n;
				if (n += 2, "" === e.charAt(n - 1)) return g("End of comment missing");
				var r = e.slice(2, n - 2);
				return f += 2, p(r), e = e.slice(n), f += 2, t({
					type: "comment",
					comment: r
				});
			}
		}
		y(i);
		var k, b = [];
		for (v(b); k = function() {
			var e = d(), t = y(l);
			if (t) {
				if (x(), !y(o)) return g("property missing ':'");
				var r = y(a), i = e({
					type: "declaration",
					property: s(t[0].replace(n, "")),
					value: r ? s(r[0].replace(n, "")) : ""
				});
				return y(u), i;
			}
		}();) !1 !== k && (b.push(k), v(b));
		return b;
	};
}), rt = n((e) => {
	var t = e && e.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	};
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = function(e, t) {
		var r = null;
		if (!e || "string" != typeof e) return r;
		var i = (0, n.default)(e), l = "function" == typeof t;
		return i.forEach(function(e) {
			if ("declaration" === e.type) {
				var n = e.property, i = e.value;
				l ? t(n, i, e) : i && ((r = r || {})[n] = i);
			}
		}), r;
	};
	var n = t(re());
}), rn = n((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = /^--[a-zA-Z0-9_-]+$/, n = /-([a-z])/g, r = /^[^-]+$/, i = /^-(webkit|moz|ms|o|khtml)-/, l = /^-(ms)-/, o = function(e, t) {
		return t.toUpperCase();
	}, a = function(e, t) {
		return "".concat(t, "-");
	};
	e.camelCase = function(e, u) {
		var c;
		return (void 0 === u && (u = {}), !(c = e) || r.test(c) || t.test(c)) ? e : (e = e.toLowerCase(), (e = u.reactCompat ? e.replace(l, a) : e.replace(i, a)).replace(n, o));
	};
}), rr = n((e, t) => {
	var n = (e && e.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	})(rt()), r = rn();
	function i(e, t) {
		var i = {};
		return e && "string" == typeof e && (0, n.default)(e, function(e, n) {
			e && n && (i[(0, r.camelCase)(e, t)] = n);
		}), i;
	}
	i.default = i, t.exports = i;
});
let ri = ro("end"), rl = ro("start");
function ro(e) {
	return function(t) {
		let n = t && t.position && t.position[e] || {};
		if ("number" == typeof n.line && n.line > 0 && "number" == typeof n.column && n.column > 0) return {
			line: n.line,
			column: n.column,
			offset: "number" == typeof n.offset && n.offset > -1 ? n.offset : void 0
		};
	};
}
var ra = class extends Error {
	constructor(e, t, n) {
		super(), "string" == typeof t && (n = t, t = void 0);
		let r = "", i = {}, l = !1;
		if (t && (i = "line" in t && "column" in t || "start" in t && "end" in t ? { place: t } : "type" in t ? {
			ancestors: [t],
			place: t.position
		} : { ...t }), "string" == typeof e ? r = e : !i.cause && e && (l = !0, r = e.message, i.cause = e), !i.ruleId && !i.source && "string" == typeof n) {
			let e = n.indexOf(":");
			-1 === e ? i.ruleId = n : (i.source = n.slice(0, e), i.ruleId = n.slice(e + 1));
		}
		if (!i.place && i.ancestors && i.ancestors) {
			let e = i.ancestors[i.ancestors.length - 1];
			e && (i.place = e.position);
		}
		let o = i.place && "start" in i.place ? i.place.start : i.place;
		this.ancestors = i.ancestors || void 0, this.cause = i.cause || void 0, this.column = o ? o.column : void 0, this.fatal = void 0, this.file = "", this.message = r, this.line = o ? o.line : void 0, this.name = eK(i.place) || "1:1", this.place = i.place || void 0, this.reason = this.message, this.ruleId = i.ruleId || void 0, this.source = i.source || void 0, this.stack = l && i.cause && "string" == typeof i.cause.stack ? i.cause.stack : "", this.actual = void 0, this.expected = void 0, this.note = void 0, this.url = void 0;
	}
};
ra.prototype.file = "", ra.prototype.name = "", ra.prototype.reason = "", ra.prototype.message = "", ra.prototype.stack = "", ra.prototype.column = void 0, ra.prototype.line = void 0, ra.prototype.ancestors = void 0, ra.prototype.cause = void 0, ra.prototype.fatal = void 0, ra.prototype.place = void 0, ra.prototype.ruleId = void 0, ra.prototype.source = void 0;
var ru = t(rr()), rc = {}.hasOwnProperty, rs = /* @__PURE__ */ new Map(), rf = /[A-Z]/g, rp = new Set([
	"table",
	"tbody",
	"thead",
	"tfoot",
	"tr"
]), rd = new Set(["td", "th"]), rh = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function rm(e, t, n) {
	return "element" === t.type ? function(e, t, n) {
		let r = e.schema;
		"svg" === t.tagName.toLowerCase() && "html" === r.space && (e.schema = n7), e.ancestors.push(t);
		let i = rx(e, t.tagName, !1), l = function(e, t) {
			let n, r, i = {};
			for (r in t.properties) if ("children" !== r && rc.call(t.properties, r)) {
				let l = function(e, t, n) {
					let r = function(e, t) {
						let n = nF(t), r = t, i = nP;
						if (n in e.normal) return e.property[e.normal[n]];
						if (n.length > 4 && "data" === n.slice(0, 4) && n5.test(t)) {
							if ("-" === t.charAt(4)) {
								let e = t.slice(5).replace(n3, n6);
								r = "data" + e.charAt(0).toUpperCase() + e.slice(1);
							} else {
								let e = t.slice(4);
								if (!n3.test(e)) {
									let n = e.replace(n4, n9);
									"-" !== n.charAt(0) && (n = "-" + n), t = "data" + n;
								}
							}
							i = n$;
						}
						return new i(r, t);
					}(e.schema, t);
					if (!(null == n || "number" == typeof n && Number.isNaN(n))) {
						if (Array.isArray(n) && (n = r.commaSeparated ? function(e, t) {
							let n = {};
							return ("" === e[e.length - 1] ? [...e, ""] : e).join((n.padRight ? " " : "") + "," + (!1 === n.padLeft ? "" : " ")).trim();
						}(n) : n.join(" ").trim()), "style" === r.property) {
							let t = "object" == typeof n ? n : function(e, t) {
								try {
									return (0, ru.default)(t, { reactCompat: !0 });
								} catch (n) {
									if (e.ignoreInvalidStyle) return {};
									let t = new ra("Cannot parse `style` attribute", {
										ancestors: e.ancestors,
										cause: n,
										ruleId: "style",
										source: "hast-util-to-jsx-runtime"
									});
									throw t.file = e.filePath || void 0, t.url = rh + "#cannot-parse-style-attribute", t;
								}
							}(e, String(n));
							return "css" === e.stylePropertyNameCase && (t = function(e) {
								let t, n = {};
								for (t in e) rc.call(e, t) && (n[function(e) {
									let t = e.replace(rf, rb);
									return "ms-" === t.slice(0, 3) && (t = "-" + t), t;
								}(t)] = e[t]);
								return n;
							}(t)), ["style", t];
						}
						return ["react" === e.elementAttributeNameCase && r.space ? n2[r.property] || r.property : r.attribute, n];
					}
				}(e, r, t.properties[r]);
				if (l) {
					let [r, o] = l;
					e.tableCellAlignToStyle && "align" === r && "string" == typeof o && rd.has(t.tagName) ? n = o : i[r] = o;
				}
			}
			return n && ((i.style || (i.style = {}))["css" === e.stylePropertyNameCase ? "text-align" : "textAlign"] = n), i;
		}(e, t), o = rv(e, t);
		return rp.has(t.tagName) && (o = o.filter(function(e) {
			return "string" != typeof e || !("object" == typeof e ? "text" === e.type && nM(e.value) : nM(e));
		})), rg(e, l, i, t), ry(l, o), e.ancestors.pop(), e.schema = r, e.create(t, i, l, n);
	}(e, t, n) : "mdxFlowExpression" === t.type || "mdxTextExpression" === t.type ? function(e, t) {
		if (t.data && t.data.estree && e.evaluater) {
			let n = t.data.estree.body[0];
			return n.type, e.evaluater.evaluateExpression(n.expression);
		}
		rk(e, t.position);
	}(e, t) : "mdxJsxFlowElement" === t.type || "mdxJsxTextElement" === t.type ? function(e, t, n) {
		let r = e.schema;
		"svg" === t.name && "html" === r.space && (e.schema = n7), e.ancestors.push(t);
		let i = null === t.name ? e.Fragment : rx(e, t.name, !0), l = function(e, t) {
			let n = {};
			for (let r of t.attributes) if ("mdxJsxExpressionAttribute" === r.type) if (r.data && r.data.estree && e.evaluater) {
				let t = r.data.estree.body[0];
				t.type;
				let i = t.expression;
				i.type;
				let l = i.properties[0];
				l.type, Object.assign(n, e.evaluater.evaluateExpression(l.argument));
			} else rk(e, t.position);
			else {
				let i, l = r.name;
				if (r.value && "object" == typeof r.value) if (r.value.data && r.value.data.estree && e.evaluater) {
					let t = r.value.data.estree.body[0];
					t.type, i = e.evaluater.evaluateExpression(t.expression);
				} else rk(e, t.position);
				else i = null === r.value || r.value;
				n[l] = i;
			}
			return n;
		}(e, t), o = rv(e, t);
		return rg(e, l, i, t), ry(l, o), e.ancestors.pop(), e.schema = r, e.create(t, i, l, n);
	}(e, t, n) : "mdxjsEsm" === t.type ? function(e, t) {
		if (t.data && t.data.estree && e.evaluater) return e.evaluater.evaluateProgram(t.data.estree);
		rk(e, t.position);
	}(e, t) : "root" === t.type ? function(e, t, n) {
		let r = {};
		return ry(r, rv(e, t)), e.create(t, e.Fragment, r, n);
	}(e, t, n) : "text" === t.type ? t.value : void 0;
}
function rg(e, t, n, r) {
	"string" != typeof n && n !== e.Fragment && e.passNode && (t.node = r);
}
function ry(e, t) {
	if (t.length > 0) {
		let n = t.length > 1 ? t : t[0];
		n && (e.children = n);
	}
}
function rv(e, t) {
	let n = [], r = -1, i = e.passKeys ? /* @__PURE__ */ new Map() : rs;
	for (; ++r < t.children.length;) {
		let l, o = t.children[r];
		if (e.passKeys) {
			let e = "element" === o.type ? o.tagName : "mdxJsxFlowElement" === o.type || "mdxJsxTextElement" === o.type ? o.name : void 0;
			if (e) {
				let t = i.get(e) || 0;
				l = e + "-" + t, i.set(e, t + 1);
			}
		}
		let a = rm(e, o, l);
		void 0 !== a && n.push(a);
	}
	return n;
}
function rx(e, t, n) {
	let r;
	if (n) if (t.includes(".")) {
		let e, n = t.split("."), i = -1;
		for (; ++i < n.length;) {
			let t = nD(n[i]) ? {
				type: "Identifier",
				name: n[i]
			} : {
				type: "Literal",
				value: n[i]
			};
			e = e ? {
				type: "MemberExpression",
				object: e,
				property: t,
				computed: !!(i && "Literal" === t.type),
				optional: !1
			} : t;
		}
		r = e;
	} else r = nD(t) && !/^[a-z]/.test(t) ? {
		type: "Identifier",
		name: t
	} : {
		type: "Literal",
		value: t
	};
	else r = {
		type: "Literal",
		value: t
	};
	if ("Literal" === r.type) {
		let t = r.value;
		return rc.call(e.components, t) ? e.components[t] : t;
	}
	if (e.evaluater) return e.evaluater.evaluateExpression(r);
	rk(e);
}
function rk(e, t) {
	let n = new ra("Cannot handle MDX estrees without `createEvaluater`", {
		ancestors: e.ancestors,
		place: t,
		ruleId: "mdx-estree",
		source: "hast-util-to-jsx-runtime"
	});
	throw n.file = e.filePath || void 0, n.url = rh + "#cannot-handle-mdx-estrees-without-createevaluater", n;
}
function rb(e) {
	return "-" + e.toLowerCase();
}
function rC(e, t) {
	let n = t.referenceType, r = "]";
	if ("collapsed" === n ? r += "[]" : "full" === n && (r += "[" + (t.label || t.identifier) + "]"), "imageReference" === t.type) return [{
		type: "text",
		value: "![" + t.alt + r
	}];
	let i = e.all(t), l = i[0];
	l && "text" === l.type ? l.value = "[" + l.value : i.unshift({
		type: "text",
		value: "["
	});
	let o = i[i.length - 1];
	return o && "text" === o.type ? o.value += r : i.push({
		type: "text",
		value: r
	}), i;
}
function rS(e) {
	let t = e.spread;
	return null == t ? e.children.length > 1 : t;
}
function rw(e, t, n) {
	let r = 0, i = e.length;
	if (t) {
		let t = e.codePointAt(r);
		for (; 9 === t || 32 === t;) r++, t = e.codePointAt(r);
	}
	if (n) {
		let t = e.codePointAt(i - 1);
		for (; 9 === t || 32 === t;) i--, t = e.codePointAt(i - 1);
	}
	return i > r ? e.slice(r, i) : "";
}
let rA = {
	blockquote: function(e, t) {
		let n = {
			type: "element",
			tagName: "blockquote",
			properties: {},
			children: e.wrap(e.all(t), !0)
		};
		return e.patch(t, n), e.applyData(t, n);
	},
	break: function(e, t) {
		let n = {
			type: "element",
			tagName: "br",
			properties: {},
			children: []
		};
		return e.patch(t, n), [e.applyData(t, n), {
			type: "text",
			value: "\n"
		}];
	},
	code: function(e, t) {
		let n = t.value ? t.value + "\n" : "", r = {};
		t.lang && (r.className = ["language-" + t.lang]);
		let i = {
			type: "element",
			tagName: "code",
			properties: r,
			children: [{
				type: "text",
				value: n
			}]
		};
		return t.meta && (i.data = { meta: t.meta }), e.patch(t, i), i = {
			type: "element",
			tagName: "pre",
			properties: {},
			children: [i = e.applyData(t, i)]
		}, e.patch(t, i), i;
	},
	delete: function(e, t) {
		let n = {
			type: "element",
			tagName: "del",
			properties: {},
			children: e.all(t)
		};
		return e.patch(t, n), e.applyData(t, n);
	},
	emphasis: function(e, t) {
		let n = {
			type: "element",
			tagName: "em",
			properties: {},
			children: e.all(t)
		};
		return e.patch(t, n), e.applyData(t, n);
	},
	footnoteReference: function(e, t) {
		let n, r = "string" == typeof e.options.clobberPrefix ? e.options.clobberPrefix : "user-content-", i = String(t.identifier).toUpperCase(), l = _(i.toLowerCase()), o = e.footnoteOrder.indexOf(i), a = e.footnoteCounts.get(i);
		void 0 === a ? (a = 0, e.footnoteOrder.push(i), n = e.footnoteOrder.length) : n = o + 1, a += 1, e.footnoteCounts.set(i, a);
		let u = {
			type: "element",
			tagName: "a",
			properties: {
				href: "#" + r + "fn-" + l,
				id: r + "fnref-" + l + (a > 1 ? "-" + a : ""),
				dataFootnoteRef: !0,
				ariaDescribedBy: ["footnote-label"]
			},
			children: [{
				type: "text",
				value: String(n)
			}]
		};
		e.patch(t, u);
		let c = {
			type: "element",
			tagName: "sup",
			properties: {},
			children: [u]
		};
		return e.patch(t, c), e.applyData(t, c);
	},
	heading: function(e, t) {
		let n = {
			type: "element",
			tagName: "h" + t.depth,
			properties: {},
			children: e.all(t)
		};
		return e.patch(t, n), e.applyData(t, n);
	},
	html: function(e, t) {
		if (e.options.allowDangerousHtml) {
			let n = {
				type: "raw",
				value: t.value
			};
			return e.patch(t, n), e.applyData(t, n);
		}
	},
	imageReference: function(e, t) {
		let n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
		if (!r) return rC(e, t);
		let i = {
			src: _(r.url || ""),
			alt: t.alt
		};
		null !== r.title && void 0 !== r.title && (i.title = r.title);
		let l = {
			type: "element",
			tagName: "img",
			properties: i,
			children: []
		};
		return e.patch(t, l), e.applyData(t, l);
	},
	image: function(e, t) {
		let n = { src: _(t.url) };
		null !== t.alt && void 0 !== t.alt && (n.alt = t.alt), null !== t.title && void 0 !== t.title && (n.title = t.title);
		let r = {
			type: "element",
			tagName: "img",
			properties: n,
			children: []
		};
		return e.patch(t, r), e.applyData(t, r);
	},
	inlineCode: function(e, t) {
		let n = {
			type: "text",
			value: t.value.replace(/\r?\n|\r/g, " ")
		};
		e.patch(t, n);
		let r = {
			type: "element",
			tagName: "code",
			properties: {},
			children: [n]
		};
		return e.patch(t, r), e.applyData(t, r);
	},
	linkReference: function(e, t) {
		let n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
		if (!r) return rC(e, t);
		let i = { href: _(r.url || "") };
		null !== r.title && void 0 !== r.title && (i.title = r.title);
		let l = {
			type: "element",
			tagName: "a",
			properties: i,
			children: e.all(t)
		};
		return e.patch(t, l), e.applyData(t, l);
	},
	link: function(e, t) {
		let n = { href: _(t.url) };
		null !== t.title && void 0 !== t.title && (n.title = t.title);
		let r = {
			type: "element",
			tagName: "a",
			properties: n,
			children: e.all(t)
		};
		return e.patch(t, r), e.applyData(t, r);
	},
	listItem: function(e, t, n) {
		let r = e.all(t), i = n ? function(e) {
			let t = !1;
			if ("list" === e.type) {
				t = e.spread || !1;
				let n = e.children, r = -1;
				for (; !t && ++r < n.length;) t = rS(n[r]);
			}
			return t;
		}(n) : rS(t), l = {}, o = [];
		if ("boolean" == typeof t.checked) {
			let e, n = r[0];
			n && "element" === n.type && "p" === n.tagName ? e = n : (e = {
				type: "element",
				tagName: "p",
				properties: {},
				children: []
			}, r.unshift(e)), e.children.length > 0 && e.children.unshift({
				type: "text",
				value: " "
			}), e.children.unshift({
				type: "element",
				tagName: "input",
				properties: {
					type: "checkbox",
					checked: t.checked,
					disabled: !0
				},
				children: []
			}), l.className = ["task-list-item"];
		}
		let a = -1;
		for (; ++a < r.length;) {
			let e = r[a];
			(i || 0 !== a || "element" !== e.type || "p" !== e.tagName) && o.push({
				type: "text",
				value: "\n"
			}), "element" !== e.type || "p" !== e.tagName || i ? o.push(e) : o.push(...e.children);
		}
		let u = r[r.length - 1];
		u && (i || "element" !== u.type || "p" !== u.tagName) && o.push({
			type: "text",
			value: "\n"
		});
		let c = {
			type: "element",
			tagName: "li",
			properties: l,
			children: o
		};
		return e.patch(t, c), e.applyData(t, c);
	},
	list: function(e, t) {
		let n = {}, r = e.all(t), i = -1;
		for ("number" == typeof t.start && 1 !== t.start && (n.start = t.start); ++i < r.length;) {
			let e = r[i];
			if ("element" === e.type && "li" === e.tagName && e.properties && Array.isArray(e.properties.className) && e.properties.className.includes("task-list-item")) {
				n.className = ["contains-task-list"];
				break;
			}
		}
		let l = {
			type: "element",
			tagName: t.ordered ? "ol" : "ul",
			properties: n,
			children: e.wrap(r, !0)
		};
		return e.patch(t, l), e.applyData(t, l);
	},
	paragraph: function(e, t) {
		let n = {
			type: "element",
			tagName: "p",
			properties: {},
			children: e.all(t)
		};
		return e.patch(t, n), e.applyData(t, n);
	},
	root: function(e, t) {
		let n = {
			type: "root",
			children: e.wrap(e.all(t))
		};
		return e.patch(t, n), e.applyData(t, n);
	},
	strong: function(e, t) {
		let n = {
			type: "element",
			tagName: "strong",
			properties: {},
			children: e.all(t)
		};
		return e.patch(t, n), e.applyData(t, n);
	},
	table: function(e, t) {
		let n = e.all(t), r = n.shift(), i = [];
		if (r) {
			let n = {
				type: "element",
				tagName: "thead",
				properties: {},
				children: e.wrap([r], !0)
			};
			e.patch(t.children[0], n), i.push(n);
		}
		if (n.length > 0) {
			let r = {
				type: "element",
				tagName: "tbody",
				properties: {},
				children: e.wrap(n, !0)
			}, l = rl(t.children[1]), o = ri(t.children[t.children.length - 1]);
			l && o && (r.position = {
				start: l,
				end: o
			}), i.push(r);
		}
		let l = {
			type: "element",
			tagName: "table",
			properties: {},
			children: e.wrap(i, !0)
		};
		return e.patch(t, l), e.applyData(t, l);
	},
	tableCell: function(e, t) {
		let n = {
			type: "element",
			tagName: "td",
			properties: {},
			children: e.all(t)
		};
		return e.patch(t, n), e.applyData(t, n);
	},
	tableRow: function(e, t, n) {
		let r = n ? n.children : void 0, i = (r ? r.indexOf(t) : 1) === 0 ? "th" : "td", l = n && "table" === n.type ? n.align : void 0, o = l ? l.length : t.children.length, a = -1, u = [];
		for (; ++a < o;) {
			let n = t.children[a], r = {}, o = l ? l[a] : void 0;
			o && (r.align = o);
			let c = {
				type: "element",
				tagName: i,
				properties: r,
				children: []
			};
			n && (c.children = e.all(n), e.patch(n, c), c = e.applyData(n, c)), u.push(c);
		}
		let c = {
			type: "element",
			tagName: "tr",
			properties: {},
			children: e.wrap(u, !0)
		};
		return e.patch(t, c), e.applyData(t, c);
	},
	text: function(e, t) {
		let n = {
			type: "text",
			value: function(e) {
				let t = String(e), n = /\r?\n|\r/g, r = n.exec(t), i = 0, l = [];
				for (; r;) l.push(rw(t.slice(i, r.index), i > 0, !0), r[0]), i = r.index + r[0].length, r = n.exec(t);
				return l.push(rw(t.slice(i), i > 0, !1)), l.join("");
			}(String(t.value))
		};
		return e.patch(t, n), e.applyData(t, n);
	},
	thematicBreak: function(e, t) {
		let n = {
			type: "element",
			tagName: "hr",
			properties: {},
			children: []
		};
		return e.patch(t, n), e.applyData(t, n);
	},
	toml: rT,
	yaml: rT,
	definition: rT,
	footnoteDefinition: rT
};
function rT() {}
var rL = "object" == typeof self ? self : globalThis;
let rD = (e) => ((e, t) => {
	let n = (t, n) => (e.set(n, t), t), r = (i) => {
		if (e.has(i)) return e.get(i);
		let [l, o] = t[i];
		switch (l) {
			case 0:
			case -1: return n(o, i);
			case 1: {
				let e = n([], i);
				for (let t of o) e.push(r(t));
				return e;
			}
			case 2: {
				let e = n({}, i);
				for (let [t, n] of o) e[r(t)] = r(n);
				return e;
			}
			case 3: return n(new Date(o), i);
			case 4: {
				let { source: e, flags: t } = o;
				return n(new RegExp(e, t), i);
			}
			case 5: {
				let e = n(/* @__PURE__ */ new Map(), i);
				for (let [t, n] of o) e.set(r(t), r(n));
				return e;
			}
			case 6: {
				let e = n(/* @__PURE__ */ new Set(), i);
				for (let t of o) e.add(r(t));
				return e;
			}
			case 7: {
				let { name: e, message: t } = o;
				return n(new rL[e](t), i);
			}
			case 8: return n(BigInt(o), i);
			case "BigInt": return n(Object(BigInt(o)), i);
			case "ArrayBuffer": return n(new Uint8Array(o).buffer, o);
			case "DataView": {
				let { buffer: e } = new Uint8Array(o);
				return n(new DataView(e), o);
			}
		}
		return n(new rL[l](o), i);
	};
	return r;
})(/* @__PURE__ */ new Map(), e)(0);
var { toString: rE } = {}, { keys: rM } = Object, rz = (e) => {
	let t = typeof e;
	if ("object" !== t || !e) return [0, t];
	let n = rE.call(e).slice(8, -1);
	switch (n) {
		case "Array": return [1, ""];
		case "Object": return [2, ""];
		case "Date": return [3, ""];
		case "RegExp": return [4, ""];
		case "Map": return [5, ""];
		case "Set": return [6, ""];
		case "DataView": return [1, n];
	}
	return n.includes("Array") ? [1, n] : n.includes("Error") ? [7, n] : [2, n];
}, rI = ([e, t]) => 0 === e && ("function" === t || "symbol" === t);
let rF = (e, { json: t, lossy: n } = {}) => {
	let r = [];
	return ((e, t, n, r) => {
		let i = (e, t) => {
			let i = r.push(e) - 1;
			return n.set(t, i), i;
		}, l = (r) => {
			if (n.has(r)) return n.get(r);
			let [o, a] = rz(r);
			switch (o) {
				case 0: {
					let t = r;
					switch (a) {
						case "bigint":
							o = 8, t = r.toString();
							break;
						case "function":
						case "symbol":
							if (e) throw TypeError("unable to serialize " + a);
							t = null;
							break;
						case "undefined": return i([-1], r);
					}
					return i([o, t], r);
				}
				case 1: {
					if (a) {
						let e = r;
						return "DataView" === a ? e = new Uint8Array(r.buffer) : "ArrayBuffer" === a && (e = new Uint8Array(r)), i([a, [...e]], r);
					}
					let e = [], t = i([o, e], r);
					for (let t of r) e.push(l(t));
					return t;
				}
				case 2: {
					if (a) switch (a) {
						case "BigInt": return i([a, r.toString()], r);
						case "Boolean":
						case "Number":
						case "String": return i([a, r.valueOf()], r);
					}
					if (t && "toJSON" in r) return l(r.toJSON());
					let n = [], u = i([o, n], r);
					for (let t of rM(r)) (e || !rI(rz(r[t]))) && n.push([l(t), l(r[t])]);
					return u;
				}
				case 3: return i([o, r.toISOString()], r);
				case 4: {
					let { source: e, flags: t } = r;
					return i([o, {
						source: e,
						flags: t
					}], r);
				}
				case 5: {
					let t = [], n = i([o, t], r);
					for (let [n, i] of r) (e || !(rI(rz(n)) || rI(rz(i)))) && t.push([l(n), l(i)]);
					return n;
				}
				case 6: {
					let t = [], n = i([o, t], r);
					for (let n of r) (e || !rI(rz(n))) && t.push(l(n));
					return n;
				}
			}
			let { message: u } = r;
			return i([o, {
				name: a,
				message: u
			}], r);
		};
		return l;
	})(!(t || n), !!t, /* @__PURE__ */ new Map(), r)(e), r;
};
var rP = "function" == typeof structuredClone ? (e, t) => t && ("json" in t || "lossy" in t) ? rD(rF(e, t)) : structuredClone(e) : (e, t) => rD(rF(e, t));
function rO(e, t) {
	let n = [{
		type: "text",
		value: "↩"
	}];
	return t > 1 && n.push({
		type: "element",
		tagName: "sup",
		properties: {},
		children: [{
			type: "text",
			value: String(t)
		}]
	}), n;
}
function rN(e, t) {
	return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "");
}
var rR = {}.hasOwnProperty, r_ = {};
function rj(e, t) {
	e.position && (t.position = function(e) {
		let t = rl(e), n = ri(e);
		if (t && n) return {
			start: t,
			end: n
		};
	}(e));
}
function rB(e, t) {
	let n = t;
	if (e && e.data) {
		let t = e.data.hName, r = e.data.hChildren, i = e.data.hProperties;
		"string" == typeof t && ("element" === n.type ? n.tagName = t : n = {
			type: "element",
			tagName: t,
			properties: {},
			children: "children" in n ? n.children : [n]
		}), "element" === n.type && i && Object.assign(n.properties, rP(i)), "children" in n && n.children && null != r && (n.children = r);
	}
	return n;
}
function rH(e, t) {
	let n = [], r = -1;
	for (t && n.push({
		type: "text",
		value: "\n"
	}); ++r < e.length;) r && n.push({
		type: "text",
		value: "\n"
	}), n.push(e[r]);
	return t && e.length > 0 && n.push({
		type: "text",
		value: "\n"
	}), n;
}
function rV(e) {
	let t = 0, n = e.charCodeAt(t);
	for (; 9 === n || 32 === n;) t++, n = e.charCodeAt(t);
	return e.slice(t);
}
var rU = c((e, {}) => a(e.text$, p(), o((t) => {
	var n, r;
	let i, o, a, c, f = function(e, t) {
		let n = function(e, t) {
			var n, r;
			let i, l, o, a = t || r_, u = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), s = {
				all: function(e) {
					let t = [];
					if ("children" in e) {
						let n = e.children, r = -1;
						for (; ++r < n.length;) {
							let i = s.one(n[r], e);
							if (i) {
								if (r && "break" === n[r - 1].type && (Array.isArray(i) || "text" !== i.type || (i.value = rV(i.value)), !Array.isArray(i) && "element" === i.type)) {
									let e = i.children[0];
									e && "text" === e.type && (e.value = rV(e.value));
								}
								Array.isArray(i) ? t.push(...i) : t.push(i);
							}
						}
					}
					return t;
				},
				applyData: rB,
				definitionById: u,
				footnoteById: c,
				footnoteCounts: /* @__PURE__ */ new Map(),
				footnoteOrder: [],
				handlers: {
					...rA,
					...a.handlers
				},
				one: function(e, t) {
					let n = e.type, r = s.handlers[n];
					if (rR.call(s.handlers, n) && r) return r(s, e, t);
					if (s.options.passThrough && s.options.passThrough.includes(n)) {
						if ("children" in e) {
							let { children: t,...n } = e, r = rP(n);
							return r.children = s.all(e), r;
						}
						return rP(e);
					}
					return (s.options.unknownHandler || function(e, t) {
						let n = t.data || {}, r = "value" in t && !(rR.call(n, "hProperties") || rR.call(n, "hChildren")) ? {
							type: "text",
							value: t.value
						} : {
							type: "element",
							tagName: "div",
							properties: {},
							children: e.all(t)
						};
						return e.patch(t, r), e.applyData(t, r);
					})(s, e, t);
				},
				options: a,
				patch: rj,
				wrap: rH
			};
			return "function" == typeof (n = function(e) {
				if ("definition" === e.type || "footnoteDefinition" === e.type) {
					let t = "definition" === e.type ? u : c, n = String(e.identifier).toUpperCase();
					t.has(n) || t.set(n, e);
				}
			}) ? (l = void 0, o = n, i = r) : (l = n, o = r, i = void 0), e5(e, l, function(e, t) {
				let n = t[t.length - 1], r = n ? n.children.indexOf(e) : void 0;
				return o(e, r, n);
			}, i), s;
		}(e, void 0), r = n.one(e, void 0), i = function(e) {
			let t = "string" == typeof e.options.clobberPrefix ? e.options.clobberPrefix : "user-content-", n = e.options.footnoteBackContent || rO, r = e.options.footnoteBackLabel || rN, i = e.options.footnoteLabel || "Footnotes", l = e.options.footnoteLabelTagName || "h2", o = e.options.footnoteLabelProperties || { className: ["sr-only"] }, a = [], u = -1;
			for (; ++u < e.footnoteOrder.length;) {
				let i = e.footnoteById.get(e.footnoteOrder[u]);
				if (!i) continue;
				let l = e.all(i), o = String(i.identifier).toUpperCase(), c = _(o.toLowerCase()), s = 0, f = [], p = e.footnoteCounts.get(o);
				for (; void 0 !== p && ++s <= p;) {
					f.length > 0 && f.push({
						type: "text",
						value: " "
					});
					let e = "string" == typeof n ? n : n(u, s);
					"string" == typeof e && (e = {
						type: "text",
						value: e
					}), f.push({
						type: "element",
						tagName: "a",
						properties: {
							href: "#" + t + "fnref-" + c + (s > 1 ? "-" + s : ""),
							dataFootnoteBackref: "",
							ariaLabel: "string" == typeof r ? r : r(u, s),
							className: ["data-footnote-backref"]
						},
						children: Array.isArray(e) ? e : [e]
					});
				}
				let d = l[l.length - 1];
				if (d && "element" === d.type && "p" === d.tagName) {
					let e = d.children[d.children.length - 1];
					e && "text" === e.type ? e.value += " " : d.children.push({
						type: "text",
						value: " "
					}), d.children.push(...f);
				} else l.push(...f);
				let h = {
					type: "element",
					tagName: "li",
					properties: { id: t + "fn-" + c },
					children: e.wrap(l, !0)
				};
				e.patch(i, h), a.push(h);
			}
			if (0 !== a.length) return {
				type: "element",
				tagName: "section",
				properties: {
					dataFootnotes: !0,
					className: ["footnotes"]
				},
				children: [
					{
						type: "element",
						tagName: l,
						properties: {
							...rP(o),
							id: "footnote-label"
						},
						children: [{
							type: "text",
							value: i
						}]
					},
					{
						type: "text",
						value: "\n"
					},
					{
						type: "element",
						tagName: "ol",
						properties: {},
						children: e.wrap(a, !0)
					},
					{
						type: "text",
						value: "\n"
					}
				]
			};
		}(n), l = Array.isArray(r) ? {
			type: "root",
			children: r
		} : r || {
			type: "root",
			children: []
		};
		return i && l.children.push({
			type: "text",
			value: "\n"
		}, i), l;
	}(("string" != typeof (n = {
		extensions: [C([
			{ text: tF },
			{
				document: { 91: {
					name: "gfmFootnoteDefinition",
					tokenize: tq,
					continuation: { tokenize: tW },
					exit: t$
				} },
				text: {
					91: {
						name: "gfmFootnoteCall",
						tokenize: tU
					},
					93: {
						name: "gfmPotentialFootnoteCall",
						add: "after",
						tokenize: tH,
						resolveTo: tV
					}
				}
			},
			function(e) {
				let t = (e || {}).singleTilde, n = {
					name: "strikethrough",
					tokenize: function(e, n, r) {
						let i = this.previous, l = this.events, o = 0;
						return function(a) {
							return 126 === i && "characterEscape" !== l[l.length - 1][1].type ? r(a) : (e.enter("strikethroughSequenceTemporary"), function l(a) {
								let u = U(i);
								if (126 === a) return o > 1 ? r(a) : (e.consume(a), o++, l);
								if (o < 2 && !t) return r(a);
								let c = e.exit("strikethroughSequenceTemporary"), s = U(a);
								return c._open = !s || 2 === s && !!u, c._close = !u || 2 === u && !!s, n(a);
							}(a));
						};
					},
					resolveAll: function(e, t) {
						let n = -1;
						for (; ++n < e.length;) if ("enter" === e[n][0] && "strikethroughSequenceTemporary" === e[n][1].type && e[n][1]._close) {
							let r = n;
							for (; r--;) if ("exit" === e[r][0] && "strikethroughSequenceTemporary" === e[r][1].type && e[r][1]._open && e[n][1].end.offset - e[n][1].start.offset == e[r][1].end.offset - e[r][1].start.offset) {
								e[n][1].type = "strikethroughSequence", e[r][1].type = "strikethroughSequence";
								let i = {
									type: "strikethrough",
									start: Object.assign({}, e[r][1].start),
									end: Object.assign({}, e[n][1].end)
								}, l = {
									type: "strikethroughText",
									start: Object.assign({}, e[r][1].end),
									end: Object.assign({}, e[n][1].start)
								}, o = [
									[
										"enter",
										i,
										t
									],
									[
										"enter",
										e[r][1],
										t
									],
									[
										"exit",
										e[r][1],
										t
									],
									[
										"enter",
										l,
										t
									]
								], a = t.parser.constructs.insideSpan.null;
								a && x(o, o.length, 0, q(a, e.slice(r + 1, n), t)), x(o, o.length, 0, [
									[
										"exit",
										l,
										t
									],
									[
										"enter",
										e[n][1],
										t
									],
									[
										"exit",
										e[n][1],
										t
									],
									[
										"exit",
										i,
										t
									]
								]), x(e, r - 1, n - r + 3, o), n = r + o.length - 2;
								break;
							}
						}
						for (n = -1; ++n < e.length;) "strikethroughSequenceTemporary" === e[n][1].type && (e[n][1].type = "data");
						return e;
					}
				};
				return t ??= !0, {
					text: { 126: n },
					insideSpan: { null: [n] },
					attentionMarkers: { null: [126] }
				};
			}(void 0),
			{ flow: { null: {
				name: "table",
				tokenize: tQ,
				resolveAll: tX
			} } },
			{ text: { 91: tG } }
		]), {
			text: { 58: nt },
			flow: { 58: [t3, t8] }
		}],
		mdastExtensions: [[
			{
				transforms: [tn],
				enter: {
					literalAutolink: e9,
					literalAutolinkEmail: e6,
					literalAutolinkHttp: e6,
					literalAutolinkWww: e6
				},
				exit: {
					literalAutolink: tt,
					literalAutolinkEmail: te,
					literalAutolinkHttp: e8,
					literalAutolinkWww: e7
				}
			},
			{
				enter: {
					gfmFootnoteCallString: to,
					gfmFootnoteCall: ta,
					gfmFootnoteDefinitionLabelString: tu,
					gfmFootnoteDefinition: tc
				},
				exit: {
					gfmFootnoteCallString: ts,
					gfmFootnoteCall: tf,
					gfmFootnoteDefinitionLabelString: tp,
					gfmFootnoteDefinition: td
				}
			},
			{
				canContainEols: ["delete"],
				enter: { strikethrough: th },
				exit: { strikethrough: tm }
			},
			{
				enter: {
					table: tg,
					tableData: tk,
					tableHeader: tk,
					tableRow: tv
				},
				exit: {
					codeText: tb,
					table: ty,
					tableData: tx,
					tableHeader: tx,
					tableRow: tx
				}
			},
			{ exit: {
				taskListCheckValueChecked: tS,
				taskListCheckValueUnchecked: tS,
				paragraph: tw
			} }
		], {
			canContainEols: ["textDirective"],
			enter: {
				directiveContainer: nf,
				directiveContainerAttributes: nv,
				directiveContainerLabel: ng,
				directiveLeaf: np,
				directiveLeafAttributes: nv,
				directiveText: nd,
				directiveTextAttributes: nv
			},
			exit: {
				directiveContainer: nw,
				directiveContainerAttributeClassValue: nk,
				directiveContainerAttributeIdValue: nx,
				directiveContainerAttributeName: nC,
				directiveContainerAttributeValue: nb,
				directiveContainerAttributes: nS,
				directiveContainerLabel: ny,
				directiveContainerName: nm,
				directiveLeaf: nw,
				directiveLeafAttributeClassValue: nk,
				directiveLeafAttributeIdValue: nx,
				directiveLeafAttributeName: nC,
				directiveLeafAttributeValue: nb,
				directiveLeafAttributes: nS,
				directiveLeafName: nm,
				directiveText: nw,
				directiveTextAttributeClassValue: nk,
				directiveTextAttributeIdValue: nx,
				directiveTextAttributeName: nC,
				directiveTextAttributeValue: nb,
				directiveTextAttributes: nS,
				directiveTextName: nm
			}
		}]
	}) && (r = n, n = void 0), (function(e) {
		let t = {
			transforms: [],
			canContainEols: [
				"emphasis",
				"fragment",
				"heading",
				"paragraph",
				"strong"
			],
			enter: {
				autolink: r(k),
				autolinkProtocol: c,
				autolinkEmail: c,
				atxHeading: r(g),
				blockQuote: r(function() {
					return {
						type: "blockquote",
						children: []
					};
				}),
				characterEscape: c,
				characterReference: c,
				codeFenced: r(d),
				codeFencedFenceInfo: i,
				codeFencedFenceMeta: i,
				codeIndented: r(d, i),
				codeText: r(function() {
					return {
						type: "inlineCode",
						value: ""
					};
				}, i),
				codeTextData: c,
				data: c,
				codeFlowValue: c,
				definition: r(function() {
					return {
						type: "definition",
						identifier: "",
						label: null,
						title: null,
						url: ""
					};
				}),
				definitionDestinationString: i,
				definitionLabelString: i,
				definitionTitleString: i,
				emphasis: r(function() {
					return {
						type: "emphasis",
						children: []
					};
				}),
				hardBreakEscape: r(y),
				hardBreakTrailing: r(y),
				htmlFlow: r(x, i),
				htmlFlowData: c,
				htmlText: r(x, i),
				htmlTextData: c,
				image: r(function() {
					return {
						type: "image",
						title: null,
						url: "",
						alt: null
					};
				}),
				label: i,
				link: r(k),
				listItem: r(function(e) {
					return {
						type: "listItem",
						spread: e._spread,
						checked: null,
						children: []
					};
				}),
				listItemValue: function(e) {
					this.data.expectingFirstListItemValue && (this.stack[this.stack.length - 2].start = Number.parseInt(this.sliceSerialize(e), 10), this.data.expectingFirstListItemValue = void 0);
				},
				listOrdered: r(b, function() {
					this.data.expectingFirstListItemValue = !0;
				}),
				listUnordered: r(b),
				paragraph: r(function() {
					return {
						type: "paragraph",
						children: []
					};
				}),
				reference: function() {
					this.data.referenceType = "collapsed";
				},
				referenceString: i,
				resourceDestinationString: i,
				resourceTitleString: i,
				setextHeading: r(g),
				strong: r(function() {
					return {
						type: "strong",
						children: []
					};
				}),
				thematicBreak: r(function() {
					return { type: "thematicBreak" };
				})
			},
			exit: {
				atxHeading: o(),
				atxHeadingSequence: function(e) {
					let t = this.stack[this.stack.length - 1];
					t.depth || (t.depth = this.sliceSerialize(e).length);
				},
				autolink: o(),
				autolinkEmail: function(e) {
					s.call(this, e), this.stack[this.stack.length - 1].url = "mailto:" + this.sliceSerialize(e);
				},
				autolinkProtocol: function(e) {
					s.call(this, e), this.stack[this.stack.length - 1].url = this.sliceSerialize(e);
				},
				blockQuote: o(),
				characterEscapeValue: s,
				characterReferenceMarkerHexadecimal: p,
				characterReferenceMarkerNumeric: p,
				characterReferenceValue: function(e) {
					let t, n = this.sliceSerialize(e), r = this.data.characterReferenceType;
					r ? (t = S(n, "characterReferenceMarkerNumeric" === r ? 10 : 16), this.data.characterReferenceType = void 0) : t = v(n);
					let i = this.stack[this.stack.length - 1];
					i.value += t;
				},
				characterReference: function(e) {
					this.stack.pop().position.end = eJ(e.end);
				},
				codeFenced: o(function() {
					let e = this.resume();
					this.stack[this.stack.length - 1].value = e.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
				}),
				codeFencedFence: function() {
					this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = !0);
				},
				codeFencedFenceInfo: function() {
					let e = this.resume();
					this.stack[this.stack.length - 1].lang = e;
				},
				codeFencedFenceMeta: function() {
					let e = this.resume();
					this.stack[this.stack.length - 1].meta = e;
				},
				codeFlowValue: s,
				codeIndented: o(function() {
					let e = this.resume();
					this.stack[this.stack.length - 1].value = e.replace(/(\r?\n|\r)$/g, "");
				}),
				codeText: o(function() {
					let e = this.resume();
					this.stack[this.stack.length - 1].value = e;
				}),
				codeTextData: s,
				data: s,
				definition: o(),
				definitionDestinationString: function() {
					let e = this.resume();
					this.stack[this.stack.length - 1].url = e;
				},
				definitionLabelString: function(e) {
					let t = this.resume(), n = this.stack[this.stack.length - 1];
					n.label = t, n.identifier = w(this.sliceSerialize(e)).toLowerCase();
				},
				definitionTitleString: function() {
					let e = this.resume();
					this.stack[this.stack.length - 1].title = e;
				},
				emphasis: o(),
				hardBreakEscape: o(f),
				hardBreakTrailing: o(f),
				htmlFlow: o(function() {
					let e = this.resume();
					this.stack[this.stack.length - 1].value = e;
				}),
				htmlFlowData: s,
				htmlText: o(function() {
					let e = this.resume();
					this.stack[this.stack.length - 1].value = e;
				}),
				htmlTextData: s,
				image: o(function() {
					let e = this.stack[this.stack.length - 1];
					if (this.data.inReference) {
						let t = this.data.referenceType || "shortcut";
						e.type += "Reference", e.referenceType = t, delete e.url, delete e.title;
					} else delete e.identifier, delete e.label;
					this.data.referenceType = void 0;
				}),
				label: function() {
					let e = this.stack[this.stack.length - 1], t = this.resume(), n = this.stack[this.stack.length - 1];
					this.data.inReference = !0, "link" === n.type ? n.children = e.children : n.alt = t;
				},
				labelText: function(e) {
					let t = this.sliceSerialize(e), n = this.stack[this.stack.length - 2];
					n.label = t.replace(eW, e$), n.identifier = w(t).toLowerCase();
				},
				lineEnding: function(e) {
					let n = this.stack[this.stack.length - 1];
					if (this.data.atHardBreak) {
						n.children[n.children.length - 1].position.end = eJ(e.end), this.data.atHardBreak = void 0;
						return;
					}
					!this.data.setextHeadingSlurpLineEnding && t.canContainEols.includes(n.type) && (c.call(this, e), s.call(this, e));
				},
				link: o(function() {
					let e = this.stack[this.stack.length - 1];
					if (this.data.inReference) {
						let t = this.data.referenceType || "shortcut";
						e.type += "Reference", e.referenceType = t, delete e.url, delete e.title;
					} else delete e.identifier, delete e.label;
					this.data.referenceType = void 0;
				}),
				listItem: o(),
				listOrdered: o(),
				listUnordered: o(),
				paragraph: o(),
				referenceString: function(e) {
					let t = this.resume(), n = this.stack[this.stack.length - 1];
					n.label = t, n.identifier = w(this.sliceSerialize(e)).toLowerCase(), this.data.referenceType = "full";
				},
				resourceDestinationString: function() {
					let e = this.resume();
					this.stack[this.stack.length - 1].url = e;
				},
				resourceTitleString: function() {
					let e = this.resume();
					this.stack[this.stack.length - 1].title = e;
				},
				resource: function() {
					this.data.inReference = void 0;
				},
				setextHeading: o(function() {
					this.data.setextHeadingSlurpLineEnding = void 0;
				}),
				setextHeadingLineSequence: function(e) {
					this.stack[this.stack.length - 1].depth = 61 === this.sliceSerialize(e).codePointAt(0) ? 1 : 2;
				},
				setextHeadingText: function() {
					this.data.setextHeadingSlurpLineEnding = !0;
				},
				strong: o(),
				thematicBreak: o()
			}
		};
		(function e(t, n) {
			let r = -1;
			for (; ++r < n.length;) {
				let i = n[r];
				Array.isArray(i) ? e(t, i) : function(e, t) {
					let n;
					for (n in t) if (eY.call(t, n)) switch (n) {
						case "canContainEols": {
							let r = t[n];
							r && e[n].push(...r);
							break;
						}
						case "transforms": {
							let r = t[n];
							r && e[n].push(...r);
							break;
						}
						case "enter":
						case "exit": {
							let r = t[n];
							r && Object.assign(e[n], r);
						}
					}
				}(t, i);
			}
		})(t, (e || {}).mdastExtensions || []);
		let n = {};
		return function(e) {
			let r = {
				type: "root",
				children: []
			}, o = {
				stack: [r],
				tokenStack: [],
				config: t,
				enter: l,
				exit: a,
				buffer: i,
				resume: u,
				data: n
			}, c = [], s = -1;
			for (; ++s < e.length;) ("listOrdered" === e[s][1].type || "listUnordered" === e[s][1].type) && ("enter" === e[s][0] ? c.push(s) : s = function(e, t, n) {
				let r, i, l, o, a = t - 1, u = -1, c = !1;
				for (; ++a <= n;) {
					let t = e[a];
					switch (t[1].type) {
						case "listUnordered":
						case "listOrdered":
						case "blockQuote":
							"enter" === t[0] ? u++ : u--, o = void 0;
							break;
						case "lineEndingBlank":
							"enter" === t[0] && (!r || o || u || l || (l = a), o = void 0);
							break;
						case "linePrefix":
						case "listItemValue":
						case "listItemMarker":
						case "listItemPrefix":
						case "listItemPrefixWhitespace": break;
						default: o = void 0;
					}
					if (!u && "enter" === t[0] && "listItemPrefix" === t[1].type || -1 === u && "exit" === t[0] && ("listUnordered" === t[1].type || "listOrdered" === t[1].type)) {
						if (r) {
							let o = a;
							for (i = void 0; o--;) {
								let t = e[o];
								if ("lineEnding" === t[1].type || "lineEndingBlank" === t[1].type) {
									if ("exit" === t[0]) continue;
									i && (e[i][1].type = "lineEndingBlank", c = !0), t[1].type = "lineEnding", i = o;
								} else if ("linePrefix" === t[1].type || "blockQuotePrefix" === t[1].type || "blockQuotePrefixWhitespace" === t[1].type || "blockQuoteMarker" === t[1].type || "listItemIndent" === t[1].type);
								else break;
							}
							l && (!i || l < i) && (r._spread = !0), r.end = Object.assign({}, i ? e[i][1].start : t[1].end), e.splice(i || a, 0, [
								"exit",
								r,
								t[2]
							]), a++, n++;
						}
						if ("listItemPrefix" === t[1].type) {
							let i = {
								type: "listItem",
								_spread: !1,
								start: Object.assign({}, t[1].start),
								end: void 0
							};
							r = i, e.splice(a, 0, [
								"enter",
								i,
								t[2]
							]), a++, n++, l = void 0, o = !0;
						}
					}
				}
				return e[t][1]._spread = c, n;
			}(e, c.pop(), s));
			for (s = -1; ++s < e.length;) {
				let n = t[e[s][0]];
				eY.call(n, e[s][1].type) && n[e[s][1].type].call(Object.assign({ sliceSerialize: e[s][2].sliceSerialize }, o), e[s][1]);
			}
			if (o.tokenStack.length > 0) {
				let e = o.tokenStack[o.tokenStack.length - 1];
				(e[1] || eG).call(o, void 0, e[0]);
			}
			for (r.position = {
				start: eJ(e.length > 0 ? e[0][1].start : {
					line: 1,
					column: 1,
					offset: 0
				}),
				end: eJ(e.length > 0 ? e[e.length - 2][1].end : {
					line: 1,
					column: 1,
					offset: 0
				})
			}, s = -1; ++s < t.transforms.length;) r = t.transforms[s](r) || r;
			return r;
		};
		function r(e, t) {
			return function(n) {
				l.call(this, e(n), n), t && t.call(this, n);
			};
		}
		function i() {
			this.stack.push({
				type: "fragment",
				children: []
			});
		}
		function l(e, t, n) {
			this.stack[this.stack.length - 1].children.push(e), this.stack.push(e), this.tokenStack.push([t, n || void 0]), e.position = {
				start: eJ(t.start),
				end: void 0
			};
		}
		function o(e) {
			return function(t) {
				e && e.call(this, t), a.call(this, t);
			};
		}
		function a(e, t) {
			let n = this.stack.pop(), r = this.tokenStack.pop();
			if (r) r[0].type !== e.type && (t ? t.call(this, e, r[0]) : (r[1] || eG).call(this, e, r[0]));
			else throw Error("Cannot close `" + e.type + "` (" + eK({
				start: e.start,
				end: e.end
			}) + "): it’s not open");
			n.position.end = eJ(e.end);
		}
		function u() {
			return m(this.stack.pop(), "boolean" != typeof h.includeImageAlt || h.includeImageAlt, "boolean" != typeof h.includeHtml || h.includeHtml);
		}
		function c(e) {
			let t = this.stack[this.stack.length - 1].children, n = t[t.length - 1];
			n && "text" === n.type || ((n = {
				type: "text",
				value: ""
			}).position = {
				start: eJ(e.start),
				end: void 0
			}, t.push(n)), this.stack.push(n);
		}
		function s(e) {
			let t = this.stack.pop();
			t.value += this.sliceSerialize(e), t.position.end = eJ(e.end);
		}
		function f() {
			this.data.atHardBreak = !0;
		}
		function p(e) {
			this.data.characterReferenceType = e.type;
		}
		function d() {
			return {
				type: "code",
				lang: null,
				meta: null,
				value: ""
			};
		}
		function g() {
			return {
				type: "heading",
				depth: 0,
				children: []
			};
		}
		function y() {
			return { type: "break" };
		}
		function x() {
			return {
				type: "html",
				value: ""
			};
		}
		function k() {
			return {
				type: "link",
				title: null,
				url: "",
				children: []
			};
		}
		function b(e) {
			return {
				type: "list",
				ordered: "listOrdered" === e.type,
				start: null,
				spread: e._spread,
				children: []
			};
		}
	})(r)(function(e) {
		for (; !er(e););
		return e;
	}((function(e) {
		let t = {
			constructs: C([eP, ...(e || {}).extensions || []]),
			content: n(B),
			defined: [],
			document: n(H),
			flow: n(eL),
			lazy: {},
			string: n(eE),
			text: n(eM)
		};
		return t;
		function n(e) {
			return function(n) {
				return function(e, t, n) {
					let r = {
						_bufferIndex: -1,
						_index: 0,
						line: n && n.line || 1,
						column: n && n.column || 1,
						offset: n && n.offset || 0
					}, i = {}, l = [], o = [], a = [], u = {
						attempt: h(function(e, t) {
							m(e, t.from);
						}),
						check: h(d),
						consume: function(e) {
							I(e) ? (r.line++, r.column = 1, r.offset += -3 === e ? 2 : 1, g()) : -1 !== e && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === o[r._index].length && (r._bufferIndex = -1, r._index++)), c.previous = e;
						},
						enter: function(e, t) {
							let n = t || {};
							return n.type = e, n.start = p(), c.events.push([
								"enter",
								n,
								c
							]), a.push(n), n;
						},
						exit: function(e) {
							let t = a.pop();
							return t.end = p(), c.events.push([
								"exit",
								t,
								c
							]), t;
						},
						interrupt: h(d, { interrupt: !0 })
					}, c = {
						code: null,
						containerState: {},
						defineSkip: function(e) {
							i[e.line] = e.column, g();
						},
						events: [],
						now: p,
						parser: e,
						previous: null,
						sliceSerialize: function(e, t) {
							return function(e, t) {
								let n, r = -1, i = [];
								for (; ++r < e.length;) {
									let l, o = e[r];
									if ("string" == typeof o) l = o;
									else switch (o) {
										case -5:
											l = "\r";
											break;
										case -4:
											l = "\n";
											break;
										case -3:
											l = "\r\n";
											break;
										case -2:
											l = t ? " " : "	";
											break;
										case -1:
											if (!t && n) continue;
											l = " ";
											break;
										default: l = String.fromCharCode(o);
									}
									n = -2 === o, i.push(l);
								}
								return i.join("");
							}(f(e), t);
						},
						sliceStream: f,
						write: function(e) {
							return (o = k(o, e), function() {
								let e;
								for (; r._index < o.length;) {
									let n = o[r._index];
									if ("string" == typeof n) for (e = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === e && r._bufferIndex < n.length;) {
										var t = n.charCodeAt(r._bufferIndex);
										s = s(t);
									}
									else s = s(n);
								}
							}(), null !== o[o.length - 1]) ? [] : (m(t, 0), c.events = q(l, c.events, c), c.events);
						}
					}, s = t.tokenize.call(c, u);
					return t.resolveAll && l.push(t), c;
					function f(e) {
						return function(e, t) {
							let n, r = t.start._index, i = t.start._bufferIndex, l = t.end._index, o = t.end._bufferIndex;
							if (r === l) n = [e[r].slice(i, o)];
							else {
								if (n = e.slice(r, l), i > -1) {
									let e = n[0];
									"string" == typeof e ? n[0] = e.slice(i) : n.shift();
								}
								o > 0 && n.push(e[l].slice(0, o));
							}
							return n;
						}(o, e);
					}
					function p() {
						let { _bufferIndex: e, _index: t, line: n, column: i, offset: l } = r;
						return {
							_bufferIndex: e,
							_index: t,
							line: n,
							column: i,
							offset: l
						};
					}
					function d(e, t) {
						t.restore();
					}
					function h(e, t) {
						return function(n, i, l) {
							var o;
							let s, f, d, h;
							return Array.isArray(n) ? m(n) : "tokenize" in n ? m([n]) : (o = n, function(e) {
								let t = null !== e && o[e], n = null !== e && o.null;
								return m([...Array.isArray(t) ? t : t ? [t] : [], ...Array.isArray(n) ? n : n ? [n] : []])(e);
							});
							function m(e) {
								return (s = e, f = 0, 0 === e.length) ? l : y(e[f]);
							}
							function y(e) {
								return function(n) {
									return (h = function() {
										let e = p(), t = c.previous, n = c.currentConstruct, i = c.events.length, l = Array.from(a);
										return {
											from: i,
											restore: function() {
												r = e, c.previous = t, c.currentConstruct = n, c.events.length = i, a = l, g();
											}
										};
									}(), d = e, e.partial || (c.currentConstruct = e), e.name && c.parser.constructs.disable.null.includes(e.name)) ? x(n) : e.tokenize.call(t ? Object.assign(Object.create(c), t) : c, u, v, x)(n);
								};
							}
							function v(t) {
								return e(d, h), i;
							}
							function x(e) {
								return (h.restore(), ++f < s.length) ? y(s[f]) : l;
							}
						};
					}
					function m(e, t) {
						e.resolveAll && !l.includes(e) && l.push(e), e.resolve && x(c.events, t, c.events.length - t, e.resolve(c.events.slice(t), c)), e.resolveTo && (c.events = e.resolveTo(c.events, c));
					}
					function g() {
						r.line in i && r.column < 2 && (r.column = i[r.line], r.offset += i[r.line] - 1);
					}
				}(t, e, n);
			};
		}
	})(r).document().write((o = 1, a = "", c = !0, function(e, t, n) {
		let r, l, u, s, f, p = [];
		for (e = a + ("string" == typeof e ? e.toString() : new TextDecoder(t || void 0).decode(e)), u = 0, a = "", c && (65279 === e.charCodeAt(0) && u++, c = void 0); u < e.length;) {
			if (eq.lastIndex = u, s = (r = eq.exec(e)) && void 0 !== r.index ? r.index : e.length, f = e.charCodeAt(s), !r) {
				a = e.slice(u);
				break;
			}
			if (10 === f && u === s && i) p.push(-3), i = void 0;
			else switch (i && (p.push(-5), i = void 0), u < s && (p.push(e.slice(u, s)), o += s - u), f) {
				case 0:
					p.push(65533), o++;
					break;
				case 9:
					for (l = 4 * Math.ceil(o / 4), p.push(-2); o++ < l;) p.push(-1);
					break;
				case 10:
					p.push(-4), o = 1;
					break;
				default: i = !0, o = 1;
			}
			u = s + 1;
		}
		return n && (i && p.push(-5), a && p.push(a), p.push(null)), p;
	})(t, n, !0))))));
	return (function({ components: e }) {
		return function(t) {
			return function(e, t) {
				var n, r, i, l;
				let o;
				if (!t || void 0 === t.Fragment) throw TypeError("Expected `Fragment` in options");
				let a = t.filePath || void 0;
				if (t.development) {
					if ("function" != typeof t.jsxDEV) throw TypeError("Expected `jsxDEV` in options when `development: true`");
					n = a, r = t.jsxDEV, o = function(e, t, i, l) {
						let o = Array.isArray(i.children), a = rl(e);
						return r(t, i, l, o, {
							columnNumber: a ? a.column - 1 : void 0,
							fileName: n,
							lineNumber: a ? a.line : void 0
						}, void 0);
					};
				} else {
					if ("function" != typeof t.jsx) throw TypeError("Expected `jsx` in production options");
					if ("function" != typeof t.jsxs) throw TypeError("Expected `jsxs` in production options");
					i = t.jsx, l = t.jsxs, o = function(e, t, n, r) {
						let o = Array.isArray(n.children) ? l : i;
						return r ? o(t, n, r) : o(t, n);
					};
				}
				let u = {
					Fragment: t.Fragment,
					ancestors: [],
					components: t.components || {},
					create: o,
					elementAttributeNameCase: t.elementAttributeNameCase || "react",
					evaluater: t.createEvaluater ? t.createEvaluater() : void 0,
					filePath: a,
					ignoreInvalidStyle: t.ignoreInvalidStyle || !1,
					passKeys: !1 !== t.passKeys,
					passNode: t.passNode || !1,
					schema: "svg" === t.space ? n7 : n8,
					stylePropertyNameCase: t.stylePropertyNameCase || "dom",
					tableCellAlignToStyle: !1 !== t.tableCellAlignToStyle
				}, c = rm(u, e, void 0);
				return c && "string" != typeof c ? c : u.create(e, u.Fragment, { children: c || void 0 }, void 0);
			}(t, {
				Fragment: l,
				jsx: u,
				jsxs: s,
				components: e
			});
		};
	})({ components: e.components ?? {} })(f);
})), {
	displayName: "Markdown",
	props: ["text", "components"]
});
export { p as n, rU as t };
