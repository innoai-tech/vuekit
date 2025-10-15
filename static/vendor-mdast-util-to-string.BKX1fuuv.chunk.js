import { n as e, r as t, t as n } from "./rolldown-runtime.D8qhy2Lt.chunk.js";
var r = {};
function i(e, t, n) {
	var r;
	if ((r = e) && "object" == typeof r) {
		if ("value" in e) return "html" !== e.type || n ? e.value : "";
		if (t && "alt" in e && e.alt) return e.alt;
		if ("children" in e) return l(e.children, t, n);
	}
	return Array.isArray(e) ? l(e, t, n) : "";
}
function l(e, t, n) {
	let r = [], l = -1;
	for (; ++l < e.length;) r[l] = i(e[l], t, n);
	return r.join("");
}
var o = document.createElement("i");
function a(e) {
	let t = "&" + e + ";";
	o.innerHTML = t;
	let n = o.textContent;
	return (59 !== n.charCodeAt(n.length - 1) || "semi" === e) && n !== t && n;
}
function u(e, t, n, r) {
	let i, l = e.length, o = 0;
	if (t = t < 0 ? -t > l ? 0 : l + t : t > l ? l : t, n = n > 0 ? n : 0, r.length < 1e4) (i = Array.from(r)).unshift(t, n), e.splice(...i);
	else for (n && e.splice(t, n); o < r.length;) (i = r.slice(o, o + 1e4)).unshift(t, 0), e.splice(...i), o += 1e4, t += 1e4;
}
function c(e, t) {
	return e.length > 0 ? (u(e, e.length, 0, t), e) : t;
}
var s = {}.hasOwnProperty;
function f(e) {
	let t = {}, n = -1;
	for (; ++n < e.length;) (function(e, t) {
		let n;
		for (n in t) {
			let r, i = (s.call(e, n) ? e[n] : void 0) || (e[n] = {}), l = t[n];
			if (l) for (r in l) {
				s.call(i, r) || (i[r] = []);
				let e = l[r];
				(function(e, t) {
					let n = -1, r = [];
					for (; ++n < t.length;) ("after" === t[n].add ? e : r).push(t[n]);
					u(e, 0, 0, r);
				})(i[r], Array.isArray(e) ? e : e ? [e] : []);
			}
		}
	})(t, e[n]);
	return t;
}
function p(e, t) {
	let n = Number.parseInt(e, t);
	return n < 9 || 11 === n || n > 13 && n < 32 || n > 126 && n < 160 || n > 55295 && n < 57344 || n > 64975 && n < 65008 || (65535 & n) == 65535 || (65535 & n) == 65534 || n > 1114111 ? "�" : String.fromCodePoint(n);
}
function d(e) {
	return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
let h = T(/[A-Za-z]/), m = T(/[\dA-Za-z]/), g = T(/[#-'*+\--9=?A-Z^-~]/);
function y(e) {
	return null !== e && (e < 32 || 127 === e);
}
let v = T(/\d/), x = T(/[\dA-Fa-f]/), k = T(/[!-/:-@[-`{-~]/);
function b(e) {
	return null !== e && e < -2;
}
function C(e) {
	return null !== e && (e < 0 || 32 === e);
}
function S(e) {
	return -2 === e || -1 === e || 32 === e;
}
let w = T(/\p{P}|\p{S}/u), A = T(/\s/);
function T(e) {
	return function(t) {
		return null !== t && t > -1 && e.test(String.fromCharCode(t));
	};
}
function L(e) {
	let t = [], n = -1, r = 0, i = 0;
	for (; ++n < e.length;) {
		let l = e.charCodeAt(n), o = "";
		if (37 === l && m(e.charCodeAt(n + 1)) && m(e.charCodeAt(n + 2))) i = 2;
		else if (l < 128) /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(l)) || (o = String.fromCharCode(l));
		else if (l > 55295 && l < 57344) {
			let t = e.charCodeAt(n + 1);
			l < 56320 && t > 56319 && t < 57344 ? (o = String.fromCharCode(l, t), i = 1) : o = "�";
		} else o = String.fromCharCode(l);
		o && (t.push(e.slice(r, n), encodeURIComponent(o)), r = n + i + 1, o = ""), i && (n += i, i = 0);
	}
	return t.join("") + e.slice(r);
}
function D(e, t, n, r) {
	let i = r ? r - 1 : Infinity, l = 0;
	return function(r) {
		return S(r) ? (e.enter(n), function r(o) {
			return S(o) && l++ < i ? (e.consume(o), r) : (e.exit(n), t(o));
		}(r)) : t(r);
	};
}
let E = { tokenize: function(e) {
	let t, n = e.attempt(this.parser.constructs.contentInitial, function(t) {
		return null === t ? void e.consume(t) : (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), D(e, n, "linePrefix"));
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
				return b(r) ? (e.consume(r), e.exit("chunkText"), n) : (e.consume(r), t);
			}(r);
		}(n);
	});
	return n;
} }, M = { tokenize: function(e) {
	let t, n, r, i = this, l = [], o = 0;
	return a;
	function a(t) {
		if (o < l.length) {
			let n = l[o];
			return i.containerState = n[1], e.attempt(n[0].continuation, c, s)(t);
		}
		return s(t);
	}
	function c(e) {
		if (o++, i.containerState._closeFlow) {
			let n;
			i.containerState._closeFlow = void 0, t && v();
			let r = i.events.length, l = r;
			for (; l--;) if ("exit" === i.events[l][0] && "chunkFlow" === i.events[l][1].type) {
				n = i.events[l][1].end;
				break;
			}
			y(o);
			let a = r;
			for (; a < i.events.length;) i.events[a][1].end = { ...n }, a++;
			return u(i.events, l + 1, 0, i.events.slice(r)), i.events.length = a, s(e);
		}
		return a(e);
	}
	function s(n) {
		if (o === l.length) {
			if (!t) return d(n);
			if (t.currentConstruct && t.currentConstruct.concrete) return m(n);
			i.interrupt = !!(t.currentConstruct && !t._gfmTableDynamicInterruptHack);
		}
		return i.containerState = {}, e.check(z, f, p)(n);
	}
	function f(e) {
		return t && v(), y(o), d(e);
	}
	function p(e) {
		return i.parser.lazy[i.now().line] = o !== l.length, r = i.now().offset, m(e);
	}
	function d(t) {
		return i.containerState = {}, e.attempt(z, h, m)(t);
	}
	function h(e) {
		return o++, l.push([i.currentConstruct, i.containerState]), d(e);
	}
	function m(r) {
		if (null === r) {
			t && v(), y(0), e.consume(r);
			return;
		}
		return t = t || i.parser.flow(i.now()), e.enter("chunkFlow", {
			_tokenizer: t,
			contentType: "flow",
			previous: n
		}), function t(n) {
			if (null === n) {
				g(e.exit("chunkFlow"), !0), y(0), e.consume(n);
				return;
			}
			return b(n) ? (e.consume(n), g(e.exit("chunkFlow")), o = 0, i.interrupt = void 0, a) : (e.consume(n), t);
		}(r);
	}
	function g(e, l) {
		let a = i.sliceStream(e);
		if (l && a.push(null), e.previous = n, n && (n.next = e), n = e, t.defineSkip(e.start), t.write(a), i.parser.lazy[e.start.line]) {
			let e, n, l = t.events.length;
			for (; l--;) if (t.events[l][1].start.offset < r && (!t.events[l][1].end || t.events[l][1].end.offset > r)) return;
			let a = i.events.length, c = a;
			for (; c--;) if ("exit" === i.events[c][0] && "chunkFlow" === i.events[c][1].type) {
				if (e) {
					n = i.events[c][1].end;
					break;
				}
				e = !0;
			}
			for (y(o), l = a; l < i.events.length;) i.events[l][1].end = { ...n }, l++;
			u(i.events, c + 1, 0, i.events.slice(a)), i.events.length = l;
		}
	}
	function y(t) {
		let n = l.length;
		for (; n-- > t;) {
			let t = l[n];
			i.containerState = t[1], t[0].exit.call(i, e);
		}
		l.length = t;
	}
	function v() {
		t.write([null]), n = void 0, t = void 0, i.containerState._closeFlow = void 0;
	}
} };
var z = { tokenize: function(e, t, n) {
	return D(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
} };
function I(e) {
	return null === e || C(e) || A(e) ? 1 : w(e) ? 2 : void 0;
}
function F(e, t, n) {
	let r = [], i = -1;
	for (; ++i < e.length;) {
		let l = e[i].resolveAll;
		l && !r.includes(l) && (t = l(t, n), r.push(l));
	}
	return t;
}
let P = {
	name: "attention",
	resolveAll: function(e, t) {
		let n, r, i, l, o, a, s, f, p = -1;
		for (; ++p < e.length;) if ("enter" === e[p][0] && "attentionSequence" === e[p][1].type && e[p][1]._close) {
			for (n = p; n--;) if ("exit" === e[n][0] && "attentionSequence" === e[n][1].type && e[n][1]._open && t.sliceSerialize(e[n][1]).charCodeAt(0) === t.sliceSerialize(e[p][1]).charCodeAt(0)) {
				if ((e[n][1]._close || e[p][1]._open) && (e[p][1].end.offset - e[p][1].start.offset) % 3 && !((e[n][1].end.offset - e[n][1].start.offset + e[p][1].end.offset - e[p][1].start.offset) % 3)) continue;
				a = e[n][1].end.offset - e[n][1].start.offset > 1 && e[p][1].end.offset - e[p][1].start.offset > 1 ? 2 : 1;
				let d = { ...e[n][1].end }, h = { ...e[p][1].start };
				O(d, -a), O(h, a), l = {
					type: a > 1 ? "strongSequence" : "emphasisSequence",
					start: d,
					end: { ...e[n][1].end }
				}, o = {
					type: a > 1 ? "strongSequence" : "emphasisSequence",
					start: { ...e[p][1].start },
					end: h
				}, i = {
					type: a > 1 ? "strongText" : "emphasisText",
					start: { ...e[n][1].end },
					end: { ...e[p][1].start }
				}, r = {
					type: a > 1 ? "strong" : "emphasis",
					start: { ...l.start },
					end: { ...o.end }
				}, e[n][1].end = { ...l.start }, e[p][1].start = { ...o.end }, s = [], e[n][1].end.offset - e[n][1].start.offset && (s = c(s, [[
					"enter",
					e[n][1],
					t
				], [
					"exit",
					e[n][1],
					t
				]])), s = c(s, [
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
				]), s = c(s, F(t.parser.constructs.insideSpan.null, e.slice(n + 1, p), t)), s = c(s, [
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
				]), e[p][1].end.offset - e[p][1].start.offset ? (f = 2, s = c(s, [[
					"enter",
					e[p][1],
					t
				], [
					"exit",
					e[p][1],
					t
				]])) : f = 0, u(e, n - 1, p - n + 3, s), p = n + s.length - f - 2;
				break;
			}
		}
		for (p = -1; ++p < e.length;) "attentionSequence" === e[p][1].type && (e[p][1].type = "data");
		return e;
	},
	tokenize: function(e, t) {
		let n, r = this.parser.constructs.attentionMarkers.null, i = this.previous, l = I(i);
		return function(o) {
			return n = o, e.enter("attentionSequence"), function o(a) {
				if (a === n) return e.consume(a), o;
				let u = e.exit("attentionSequence"), c = I(a), s = !c || 2 === c && l || r.includes(a), f = !l || 2 === l && c || r.includes(i);
				return u._open = !!(42 === n ? s : s && (l || !f)), u._close = !!(42 === n ? f : f && (c || !s)), t(a);
			}(o);
		};
	}
};
function O(e, t) {
	e.column += t, e.offset += t, e._bufferIndex += t;
}
let R = {
	partial: !0,
	tokenize: function(e, t, n) {
		return function(t) {
			return S(t) ? D(e, r, "linePrefix")(t) : r(t);
		};
		function r(e) {
			return null === e || b(e) ? t(e) : n(e);
		}
	}
}, N = {
	continuation: { tokenize: function(e, t, n) {
		let r = this;
		return function(t) {
			return S(t) ? D(e, i, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : i(t);
		};
		function i(r) {
			return e.attempt(N, t, n)(r);
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
			return S(n) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(n), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(n));
		}
	}
}, _ = {
	name: "characterEscape",
	tokenize: function(e, t, n) {
		return function(t) {
			return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(t), e.exit("escapeMarker"), r;
		};
		function r(r) {
			return k(r) ? (e.enter("characterEscapeValue"), e.consume(r), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(r);
		}
	}
}, j = {
	name: "characterReference",
	tokenize: function(e, t, n) {
		let r, i, l = this, o = 0;
		return function(t) {
			return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(t), e.exit("characterReferenceMarker"), u;
		};
		function u(t) {
			return 35 === t ? (e.enter("characterReferenceMarkerNumeric"), e.consume(t), e.exit("characterReferenceMarkerNumeric"), c) : (e.enter("characterReferenceValue"), r = 31, i = m, s(t));
		}
		function c(t) {
			return 88 === t || 120 === t ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(t), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), r = 6, i = x, s) : (e.enter("characterReferenceValue"), r = 7, i = v, s(t));
		}
		function s(u) {
			if (59 === u && o) {
				let r = e.exit("characterReferenceValue");
				return i !== m || a(l.sliceSerialize(r)) ? (e.enter("characterReferenceMarker"), e.consume(u), e.exit("characterReferenceMarker"), e.exit("characterReference"), t) : n(u);
			}
			return i(u) && o++ < r ? (e.consume(u), s) : n(u);
		}
	}
};
var B = {
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
let H = {
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
					return e.enter("codeFencedFence"), S(t) ? D(e, u, "linePrefix", i.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : u(t);
				}
				function u(t) {
					return t === r ? (e.enter("codeFencedFenceSequence"), function t(i) {
						return i === r ? (l++, e.consume(i), t) : l >= a ? (e.exit("codeFencedFenceSequence"), S(i) ? D(e, c, "whitespace")(i) : c(i)) : n(i);
					}(t)) : n(t);
				}
				function c(r) {
					return null === r || b(r) ? (e.exit("codeFencedFence"), t(r)) : n(r);
				}
			}
		}, o = 0, a = 0;
		return function(t) {
			var l = t;
			let c = i.events[i.events.length - 1];
			return o = c && "linePrefix" === c[1].type ? c[2].sliceSerialize(c[1], !0).length : 0, r = l, e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), function t(i) {
				return i === r ? (a++, e.consume(i), t) : a < 3 ? n(i) : (e.exit("codeFencedFenceSequence"), S(i) ? D(e, u, "whitespace")(i) : u(i));
			}(l);
		};
		function u(l) {
			return null === l || b(l) ? (e.exit("codeFencedFence"), i.interrupt ? t(l) : e.check(B, s, h)(l)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", { contentType: "string" }), function t(i) {
				return null === i || b(i) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), u(i)) : S(i) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), D(e, c, "whitespace")(i)) : 96 === i && i === r ? n(i) : (e.consume(i), t);
			}(l));
		}
		function c(t) {
			return null === t || b(t) ? u(t) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", { contentType: "string" }), function t(i) {
				return null === i || b(i) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), u(i)) : 96 === i && i === r ? n(i) : (e.consume(i), t);
			}(t));
		}
		function s(t) {
			return e.attempt(l, h, f)(t);
		}
		function f(t) {
			return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), p;
		}
		function p(t) {
			return o > 0 && S(t) ? D(e, d, "linePrefix", o + 1)(t) : d(t);
		}
		function d(t) {
			return null === t || b(t) ? e.check(B, s, h)(t) : (e.enter("codeFlowValue"), function t(n) {
				return null === n || b(n) ? (e.exit("codeFlowValue"), d(n)) : (e.consume(n), t);
			}(t));
		}
		function h(n) {
			return e.exit("codeFenced"), t(n);
		}
	}
}, V = {
	name: "codeIndented",
	tokenize: function(e, t, n) {
		let r = this;
		return function(t) {
			return e.enter("codeIndented"), D(e, i, "linePrefix", 5)(t);
		};
		function i(t) {
			let i = r.events[r.events.length - 1];
			return i && "linePrefix" === i[1].type && i[2].sliceSerialize(i[1], !0).length >= 4 ? function t(n) {
				return null === n ? l(n) : b(n) ? e.attempt(U, t, l)(n) : (e.enter("codeFlowValue"), function n(r) {
					return null === r || b(r) ? (e.exit("codeFlowValue"), t(r)) : (e.consume(r), n);
				}(n));
			}(t) : n(t);
		}
		function l(n) {
			return e.exit("codeIndented"), t(n);
		}
	}
};
var U = {
	partial: !0,
	tokenize: function(e, t, n) {
		let r = this;
		return i;
		function i(t) {
			return r.parser.lazy[r.now().line] ? n(t) : b(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), i) : D(e, l, "linePrefix", 5)(t);
		}
		function l(e) {
			let l = r.events[r.events.length - 1];
			return l && "linePrefix" === l[1].type && l[2].sliceSerialize(l[1], !0).length >= 4 ? t(e) : b(e) ? i(e) : n(e);
		}
	}
}, q = class {
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
		return n && W(this.left, n), r.reverse();
	}
	pop() {
		return this.setCursor(Infinity), this.left.pop();
	}
	push(e) {
		this.setCursor(Infinity), this.left.push(e);
	}
	pushMany(e) {
		this.setCursor(Infinity), W(this.left, e);
	}
	unshift(e) {
		this.setCursor(0), this.right.push(e);
	}
	unshiftMany(e) {
		this.setCursor(0), W(this.right, e.reverse());
	}
	setCursor(e) {
		if (e !== this.left.length && (!(e > this.left.length) || 0 !== this.right.length) && (!(e < 0) || 0 !== this.left.length)) if (e < this.left.length) {
			let t = this.left.splice(e, Infinity);
			W(this.right, t.reverse());
		} else {
			let t = this.right.splice(this.left.length + this.right.length - e, Infinity);
			W(this.left, t.reverse());
		}
	}
};
function W(e, t) {
	let n = 0;
	if (t.length < 1e4) e.push(...t);
	else for (; n < t.length;) e.push(...t.slice(n, n + 1e4)), n += 1e4;
}
function $(e) {
	let t, n, r, i, l, o, a, c = {}, s = -1, f = new q(e);
	for (; ++s < f.length;) {
		for (; s in c;) s = c[s];
		if (t = f.get(s), s && "chunkFlow" === t[1].type && "listItemPrefix" === f.get(s - 1)[1].type && ((r = 0) < (o = t[1]._tokenizer.events).length && "lineEndingBlank" === o[r][1].type && (r += 2), r < o.length && "content" === o[r][1].type)) for (; ++r < o.length && "content" !== o[r][1].type;) "chunkText" === o[r][1].type && (o[r][1]._isInFirstContentOfListItem = !0, r++);
		if ("enter" === t[0]) t[1].contentType && (Object.assign(c, function(e, t) {
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
		}(f, s)), s = c[s], a = !0);
		else if (t[1]._container) {
			for (r = s, n = void 0; r--;) if ("lineEnding" === (i = f.get(r))[1].type || "lineEndingBlank" === i[1].type) "enter" === i[0] && (n && (f.get(n)[1].type = "lineEndingBlank"), i[1].type = "lineEnding", n = r);
			else if ("linePrefix" === i[1].type || "listItemIndent" === i[1].type);
			else break;
			n && (t[1].end = { ...f.get(n)[1].start }, (l = f.slice(n, s)).unshift(t), f.splice(n, s - n + 1, l));
		}
	}
	return u(e, 0, Infinity, f.slice(0)), !a;
}
let Q = {
	resolve: function(e) {
		return $(e), e;
	},
	tokenize: function(e, t) {
		let n;
		return function(t) {
			return e.enter("content"), n = e.enter("chunkContent", { contentType: "content" }), r(t);
		};
		function r(t) {
			return null === t ? i(t) : b(t) ? e.check(K, l, i)(t) : (e.consume(t), r);
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
var K = {
	partial: !0,
	tokenize: function(e, t, n) {
		let r = this;
		return function(t) {
			return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), D(e, i, "linePrefix");
		};
		function i(i) {
			if (null === i || b(i)) return n(i);
			let l = r.events[r.events.length - 1];
			return !r.parser.constructs.disable.null.includes("codeIndented") && l && "linePrefix" === l[1].type && l[2].sliceSerialize(l[1], !0).length >= 4 ? t(i) : e.interrupt(r.parser.constructs.flow, n, t)(i);
		}
	}
};
function X(e, t, n, r, i, l, o, a, u) {
	let c = u || Infinity, s = 0;
	return function(t) {
		return 60 === t ? (e.enter(r), e.enter(i), e.enter(l), e.consume(t), e.exit(l), f) : null === t || 32 === t || 41 === t || y(t) ? n(t) : (e.enter(r), e.enter(o), e.enter(a), e.enter("chunkString", { contentType: "string" }), h(t));
	};
	function f(n) {
		return 62 === n ? (e.enter(l), e.consume(n), e.exit(l), e.exit(i), e.exit(r), t) : (e.enter(a), e.enter("chunkString", { contentType: "string" }), p(n));
	}
	function p(t) {
		return 62 === t ? (e.exit("chunkString"), e.exit(a), f(t)) : null === t || 60 === t || b(t) ? n(t) : (e.consume(t), 92 === t ? d : p);
	}
	function d(t) {
		return 60 === t || 62 === t || 92 === t ? (e.consume(t), p) : p(t);
	}
	function h(i) {
		return !s && (null === i || 41 === i || C(i)) ? (e.exit("chunkString"), e.exit(a), e.exit(o), e.exit(r), t(i)) : s < c && 40 === i ? (e.consume(i), s++, h) : 41 === i ? (e.consume(i), s--, h) : null === i || 32 === i || 40 === i || y(i) ? n(i) : (e.consume(i), 92 === i ? m : h);
	}
	function m(t) {
		return 40 === t || 41 === t || 92 === t ? (e.consume(t), h) : h(t);
	}
}
function Z(e, t, n, r, i, l) {
	let o, a = this, u = 0;
	return function(t) {
		return e.enter(r), e.enter(i), e.consume(t), e.exit(i), e.enter(l), c;
	};
	function c(f) {
		return u > 999 || null === f || 91 === f || 93 === f && !o || 94 === f && !u && "_hiddenFootnoteSupport" in a.parser.constructs ? n(f) : 93 === f ? (e.exit(l), e.enter(i), e.consume(f), e.exit(i), e.exit(r), t) : b(f) ? (e.enter("lineEnding"), e.consume(f), e.exit("lineEnding"), c) : (e.enter("chunkString", { contentType: "string" }), s(f));
	}
	function s(t) {
		return null === t || 91 === t || 93 === t || b(t) || u++ > 999 ? (e.exit("chunkString"), c(t)) : (e.consume(t), o || (o = !S(t)), 92 === t ? f : s);
	}
	function f(t) {
		return 91 === t || 92 === t || 93 === t ? (e.consume(t), u++, s) : s(t);
	}
}
function J(e, t, n, r, i, l) {
	let o;
	return function(t) {
		return 34 === t || 39 === t || 40 === t ? (e.enter(r), e.enter(i), e.consume(t), e.exit(i), o = 40 === t ? 41 : t, a) : n(t);
	};
	function a(n) {
		return n === o ? (e.enter(i), e.consume(n), e.exit(i), e.exit(r), t) : (e.enter(l), u(n));
	}
	function u(t) {
		return t === o ? (e.exit(l), a(o)) : null === t ? n(t) : b(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), D(e, u, "linePrefix")) : (e.enter("chunkString", { contentType: "string" }), c(t));
	}
	function c(t) {
		return t === o || null === t || b(t) ? (e.exit("chunkString"), u(t)) : (e.consume(t), 92 === t ? s : c);
	}
	function s(t) {
		return t === o || 92 === t ? (e.consume(t), c) : c(t);
	}
}
function Y(e, t) {
	let n;
	return function r(i) {
		return b(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), n = !0, r) : S(i) ? D(e, r, n ? "linePrefix" : "lineSuffix")(i) : t(i);
	};
}
var G = {
	partial: !0,
	tokenize: function(e, t, n) {
		return function(t) {
			return C(t) ? Y(e, r)(t) : n(t);
		};
		function r(t) {
			return J(e, i, n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(t);
		}
		function i(t) {
			return S(t) ? D(e, l, "whitespace")(t) : l(t);
		}
		function l(e) {
			return null === e || b(e) ? t(e) : n(e);
		}
	}
};
let ee = [
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
], et = [
	"pre",
	"script",
	"style",
	"textarea"
];
var en = {
	partial: !0,
	tokenize: function(e, t, n) {
		return function(r) {
			return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), e.attempt(R, t, n);
		};
	}
}, er = {
	partial: !0,
	tokenize: function(e, t, n) {
		let r = this;
		return function(t) {
			return b(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), i) : n(t);
		};
		function i(e) {
			return r.parser.lazy[r.now().line] ? n(e) : t(e);
		}
	}
};
let ei = {
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
		return e.length !== n.length && u(e, 0, e.length, n), e;
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
		let s = {
			type: "labelLink" === e[r][1].type ? "link" : "image",
			start: { ...e[r][1].start },
			end: { ...e[e.length - 1][1].end }
		}, f = {
			type: "label",
			start: { ...e[r][1].start },
			end: { ...e[i][1].end }
		}, p = {
			type: "labelText",
			start: { ...e[r + a + 2][1].end },
			end: { ...e[i - 2][1].start }
		};
		return l = c(l = [[
			"enter",
			s,
			t
		], [
			"enter",
			f,
			t
		]], e.slice(r + 1, r + a + 3)), l = c(l, [[
			"enter",
			p,
			t
		]]), l = c(l, F(t.parser.constructs.insideSpan.null, e.slice(r + a + 4, i - 3), t)), l = c(l, [
			[
				"exit",
				p,
				t
			],
			e[i - 2],
			e[i - 1],
			[
				"exit",
				f,
				t
			]
		]), l = c(l, e.slice(i + 1)), l = c(l, [[
			"exit",
			s,
			t
		]]), u(e, r, e.length, l), e;
	},
	tokenize: function(e, t, n) {
		let r, i, l = this, o = l.events.length;
		for (; o--;) if (("labelImage" === l.events[o][1].type || "labelLink" === l.events[o][1].type) && !l.events[o][1]._balanced) {
			r = l.events[o][1];
			break;
		}
		return function(t) {
			return r ? r._inactive ? s(t) : (i = l.parser.defined.includes(d(l.sliceSerialize({
				start: r.end,
				end: l.now()
			}))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelEnd"), a) : n(t);
		};
		function a(t) {
			return 40 === t ? e.attempt(el, c, i ? c : s)(t) : 91 === t ? e.attempt(eo, c, i ? u : s)(t) : i ? c(t) : s(t);
		}
		function u(t) {
			return e.attempt(ea, c, s)(t);
		}
		function c(e) {
			return t(e);
		}
		function s(e) {
			return r._balanced = !0, n(e);
		}
	}
};
var el = { tokenize: function(e, t, n) {
	return function(t) {
		return e.enter("resource"), e.enter("resourceMarker"), e.consume(t), e.exit("resourceMarker"), r;
	};
	function r(t) {
		return C(t) ? Y(e, i)(t) : i(t);
	}
	function i(t) {
		return 41 === t ? c(t) : X(e, l, o, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(t);
	}
	function l(t) {
		return C(t) ? Y(e, a)(t) : c(t);
	}
	function o(e) {
		return n(e);
	}
	function a(t) {
		return 34 === t || 39 === t || 40 === t ? J(e, u, n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(t) : c(t);
	}
	function u(t) {
		return C(t) ? Y(e, c)(t) : c(t);
	}
	function c(r) {
		return 41 === r ? (e.enter("resourceMarker"), e.consume(r), e.exit("resourceMarker"), e.exit("resource"), t) : n(r);
	}
} }, eo = { tokenize: function(e, t, n) {
	let r = this;
	return function(t) {
		return Z.call(r, e, i, l, "reference", "referenceMarker", "referenceString")(t);
	};
	function i(e) {
		return r.parser.defined.includes(d(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? t(e) : n(e);
	}
	function l(e) {
		return n(e);
	}
} }, ea = { tokenize: function(e, t, n) {
	return function(t) {
		return e.enter("reference"), e.enter("referenceMarker"), e.consume(t), e.exit("referenceMarker"), r;
	};
	function r(r) {
		return 93 === r ? (e.enter("referenceMarker"), e.consume(r), e.exit("referenceMarker"), e.exit("reference"), t) : n(r);
	}
} };
let eu = {
	name: "labelStartImage",
	resolveAll: ei.resolveAll,
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
}, ec = {
	name: "labelStartLink",
	resolveAll: ei.resolveAll,
	tokenize: function(e, t, n) {
		let r = this;
		return function(t) {
			return e.enter("labelLink"), e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelLink"), i;
		};
		function i(e) {
			return 94 === e && "_hiddenFootnoteSupport" in r.parser.constructs ? n(e) : t(e);
		}
	}
}, es = {
	name: "lineEnding",
	tokenize: function(e, t) {
		return function(n) {
			return e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), D(e, t, "linePrefix");
		};
	}
}, ef = {
	name: "thematicBreak",
	tokenize: function(e, t, n) {
		let r, i = 0;
		return function(l) {
			var o;
			return e.enter("thematicBreak"), r = o = l, function l(o) {
				return o === r ? (e.enter("thematicBreakSequence"), function t(n) {
					return n === r ? (e.consume(n), i++, t) : (e.exit("thematicBreakSequence"), S(n) ? D(e, l, "whitespace")(n) : l(n));
				}(o)) : i >= 3 && (null === o || b(o)) ? (e.exit("thematicBreak"), t(o)) : n(o);
			}(o);
		};
	}
}, ep = {
	continuation: { tokenize: function(e, t, n) {
		let r = this;
		return r.containerState._closeFlow = void 0, e.check(R, function(n) {
			return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, D(e, t, "listItemIndent", r.containerState.size + 1)(n);
		}, function(n) {
			return r.containerState.furtherBlankLines || !S(n) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, i(n)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(eh, t, i)(n));
		});
		function i(i) {
			return r.containerState._closeFlow = !0, r.interrupt = void 0, D(e, e.attempt(ep, t, n), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(i);
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
			if ("listUnordered" === i ? !r.containerState.marker || t === r.containerState.marker : v(t)) {
				if (r.containerState.type || (r.containerState.type = i, e.enter(i, { _container: !0 })), "listUnordered" === i) return e.enter("listItemPrefix"), 42 === t || 45 === t ? e.check(ef, n, a)(t) : a(t);
				if (!r.interrupt || 49 === t) return e.enter("listItemPrefix"), e.enter("listItemValue"), function t(i) {
					return v(i) && ++o < 10 ? (e.consume(i), t) : (!r.interrupt || o < 2) && (r.containerState.marker ? i === r.containerState.marker : 41 === i || 46 === i) ? (e.exit("listItemValue"), a(i)) : n(i);
				}(t);
			}
			return n(t);
		};
		function a(t) {
			return e.enter("listItemMarker"), e.consume(t), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || t, e.check(R, r.interrupt ? n : u, e.attempt(ed, s, c));
		}
		function u(e) {
			return r.containerState.initialBlankLine = !0, l++, s(e);
		}
		function c(t) {
			return S(t) ? (e.enter("listItemPrefixWhitespace"), e.consume(t), e.exit("listItemPrefixWhitespace"), s) : n(t);
		}
		function s(n) {
			return r.containerState.size = l + r.sliceSerialize(e.exit("listItemPrefix"), !0).length, t(n);
		}
	}
};
var ed = {
	partial: !0,
	tokenize: function(e, t, n) {
		let r = this;
		return D(e, function(e) {
			let i = r.events[r.events.length - 1];
			return !S(e) && i && "listItemPrefixWhitespace" === i[1].type ? t(e) : n(e);
		}, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
	}
}, eh = {
	partial: !0,
	tokenize: function(e, t, n) {
		let r = this;
		return D(e, function(e) {
			let i = r.events[r.events.length - 1];
			return i && "listItemIndent" === i[1].type && i[2].sliceSerialize(i[1], !0).length === r.containerState.size ? t(e) : n(e);
		}, "listItemIndent", r.containerState.size + 1);
	}
};
let em = {
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
				return n === r ? (e.consume(n), t) : (e.exit("setextHeadingLineSequence"), S(n) ? D(e, l, "lineSuffix")(n) : l(n));
			}(o)) : n(t);
		};
		function l(r) {
			return null === r || b(r) ? (e.exit("setextHeadingLine"), t(r)) : n(r);
		}
	}
}, eg = { tokenize: function(e) {
	let t = this, n = e.attempt(R, function(r) {
		return null === r ? void e.consume(r) : (e.enter("lineEndingBlank"), e.consume(r), e.exit("lineEndingBlank"), t.currentConstruct = void 0, n);
	}, e.attempt(this.parser.constructs.flowInitial, r, D(e, e.attempt(this.parser.constructs.flow, r, e.attempt(Q, r)), "linePrefix")));
	return n;
	function r(r) {
		return null === r ? void e.consume(r) : (e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), t.currentConstruct = void 0, n);
	}
} }, ey = { resolveAll: eb() }, ev = ek("string"), ex = ek("text");
function ek(e) {
	return {
		resolveAll: eb("text" === e ? eC : void 0),
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
function eb(e) {
	return function(t, n) {
		let r, i = -1;
		for (; ++i <= t.length;) void 0 === r ? t[i] && "data" === t[i][1].type && (r = i, i++) : t[i] && "data" === t[i][1].type || (i !== r + 2 && (t[r][1].end = t[i - 1][1].end, t.splice(r + 2, i - r - 2), i = r + 2), r = void 0);
		return e ? e(t, n) : t;
	};
}
function eC(e, t) {
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
var eS = e({
	attentionMarkers: () => ez,
	contentInitial: () => eA,
	disable: () => eI,
	document: () => ew,
	flow: () => eL,
	flowInitial: () => eT,
	insideSpan: () => eM,
	string: () => eD,
	text: () => eE
});
let ew = {
	42: ep,
	43: ep,
	45: ep,
	48: ep,
	49: ep,
	50: ep,
	51: ep,
	52: ep,
	53: ep,
	54: ep,
	55: ep,
	56: ep,
	57: ep,
	62: N
}, eA = { 91: {
	name: "definition",
	tokenize: function(e, t, n) {
		let r, i = this;
		return function(t) {
			var r;
			return e.enter("definition"), r = t, Z.call(i, e, l, n, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(r);
		};
		function l(t) {
			return (r = d(i.sliceSerialize(i.events[i.events.length - 1][1]).slice(1, -1)), 58 === t) ? (e.enter("definitionMarker"), e.consume(t), e.exit("definitionMarker"), o) : n(t);
		}
		function o(t) {
			return C(t) ? Y(e, a)(t) : a(t);
		}
		function a(t) {
			return X(e, u, n, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString")(t);
		}
		function u(t) {
			return e.attempt(G, c, c)(t);
		}
		function c(t) {
			return S(t) ? D(e, s, "whitespace")(t) : s(t);
		}
		function s(l) {
			return null === l || b(l) ? (e.exit("definition"), i.parser.defined.push(r), t(l)) : n(l);
		}
	}
} }, eT = {
	[-2]: V,
	[-1]: V,
	32: V
}, eL = {
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
			}, u(e, l, i - l + 1, [
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
					return 35 === l && r++ < 6 ? (e.consume(l), i) : null === l || C(l) ? (e.exit("atxHeadingSequence"), function n(r) {
						return 35 === r ? (e.enter("atxHeadingSequence"), function t(r) {
							return 35 === r ? (e.consume(r), t) : (e.exit("atxHeadingSequence"), n(r));
						}(r)) : null === r || b(r) ? (e.exit("atxHeading"), t(r)) : S(r) ? D(e, n, "whitespace")(r) : (e.enter("atxHeadingText"), function t(r) {
							return null === r || 35 === r || C(r) ? (e.exit("atxHeadingText"), n(r)) : (e.consume(r), t);
						}(r));
					}(l)) : n(l);
				}(l);
			};
		}
	},
	42: ef,
	45: [em, ef],
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
				return 33 === o ? (e.consume(o), s) : 47 === o ? (e.consume(o), i = !0, d) : 63 === o ? (e.consume(o), r = 3, u.interrupt ? t : N) : h(o) ? (e.consume(o), l = String.fromCharCode(o), g) : n(o);
			}
			function s(i) {
				return 45 === i ? (e.consume(i), r = 2, f) : 91 === i ? (e.consume(i), r = 5, o = 0, p) : h(i) ? (e.consume(i), r = 4, u.interrupt ? t : N) : n(i);
			}
			function f(r) {
				return 45 === r ? (e.consume(r), u.interrupt ? t : N) : n(r);
			}
			function p(r) {
				return r === "CDATA[".charCodeAt(o++) ? (e.consume(r), 6 === o) ? u.interrupt ? t : E : p : n(r);
			}
			function d(t) {
				return h(t) ? (e.consume(t), l = String.fromCharCode(t), g) : n(t);
			}
			function g(o) {
				if (null === o || 47 === o || 62 === o || C(o)) {
					let a = 47 === o, c = l.toLowerCase();
					return !a && !i && et.includes(c) ? (r = 1, u.interrupt ? t(o) : E(o)) : ee.includes(l.toLowerCase()) ? (r = 6, a) ? (e.consume(o), y) : u.interrupt ? t(o) : E(o) : (r = 7, u.interrupt && !u.parser.lazy[u.now().line] ? n(o) : i ? function t(n) {
						return S(n) ? (e.consume(n), t) : L(n);
					}(o) : v(o));
				}
				return 45 === o || m(o) ? (e.consume(o), l += String.fromCharCode(o), g) : n(o);
			}
			function y(r) {
				return 62 === r ? (e.consume(r), u.interrupt ? t : E) : n(r);
			}
			function v(t) {
				return 47 === t ? (e.consume(t), L) : 58 === t || 95 === t || h(t) ? (e.consume(t), x) : S(t) ? (e.consume(t), v) : L(t);
			}
			function x(t) {
				return 45 === t || 46 === t || 58 === t || 95 === t || m(t) ? (e.consume(t), x) : k(t);
			}
			function k(t) {
				return 61 === t ? (e.consume(t), w) : S(t) ? (e.consume(t), k) : v(t);
			}
			function w(t) {
				return null === t || 60 === t || 61 === t || 62 === t || 96 === t ? n(t) : 34 === t || 39 === t ? (e.consume(t), a = t, A) : S(t) ? (e.consume(t), w) : function t(n) {
					return null === n || 34 === n || 39 === n || 47 === n || 60 === n || 61 === n || 62 === n || 96 === n || C(n) ? k(n) : (e.consume(n), t);
				}(t);
			}
			function A(t) {
				return t === a ? (e.consume(t), a = null, T) : null === t || b(t) ? n(t) : (e.consume(t), A);
			}
			function T(e) {
				return 47 === e || 62 === e || S(e) ? v(e) : n(e);
			}
			function L(t) {
				return 62 === t ? (e.consume(t), D) : n(t);
			}
			function D(t) {
				return null === t || b(t) ? E(t) : S(t) ? (e.consume(t), D) : n(t);
			}
			function E(t) {
				return 45 === t && 2 === r ? (e.consume(t), F) : 60 === t && 1 === r ? (e.consume(t), P) : 62 === t && 4 === r ? (e.consume(t), _) : 63 === t && 3 === r ? (e.consume(t), N) : 93 === t && 5 === r ? (e.consume(t), R) : b(t) && (6 === r || 7 === r) ? (e.exit("htmlFlowData"), e.check(en, j, M)(t)) : null === t || b(t) ? (e.exit("htmlFlowData"), M(t)) : (e.consume(t), E);
			}
			function M(t) {
				return e.check(er, z, j)(t);
			}
			function z(t) {
				return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), I;
			}
			function I(t) {
				return null === t || b(t) ? M(t) : (e.enter("htmlFlowData"), E(t));
			}
			function F(t) {
				return 45 === t ? (e.consume(t), N) : E(t);
			}
			function P(t) {
				return 47 === t ? (e.consume(t), l = "", O) : E(t);
			}
			function O(t) {
				if (62 === t) {
					let n = l.toLowerCase();
					return et.includes(n) ? (e.consume(t), _) : E(t);
				}
				return h(t) && l.length < 8 ? (e.consume(t), l += String.fromCharCode(t), O) : E(t);
			}
			function R(t) {
				return 93 === t ? (e.consume(t), N) : E(t);
			}
			function N(t) {
				return 62 === t ? (e.consume(t), _) : 45 === t && 2 === r ? (e.consume(t), N) : E(t);
			}
			function _(t) {
				return null === t || b(t) ? (e.exit("htmlFlowData"), j(t)) : (e.consume(t), _);
			}
			function j(n) {
				return e.exit("htmlFlow"), t(n);
			}
		}
	},
	61: em,
	95: ef,
	96: H,
	126: H
}, eD = {
	38: j,
	92: _
}, eE = {
	[-5]: es,
	[-4]: es,
	[-3]: es,
	33: eu,
	38: j,
	42: P,
	60: [{
		name: "autolink",
		tokenize: function(e, t, n) {
			let r = 0;
			return function(t) {
				return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(t), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), i;
			};
			function i(t) {
				return h(t) ? (e.consume(t), l) : 64 === t ? n(t) : a(t);
			}
			function l(t) {
				return 43 === t || 45 === t || 46 === t || m(t) ? (r = 1, function t(n) {
					return 58 === n ? (e.consume(n), r = 0, o) : (43 === n || 45 === n || 46 === n || m(n)) && r++ < 32 ? (e.consume(n), t) : (r = 0, a(n));
				}(t)) : a(t);
			}
			function o(r) {
				return 62 === r ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(r), e.exit("autolinkMarker"), e.exit("autolink"), t) : null === r || 32 === r || 60 === r || y(r) ? n(r) : (e.consume(r), o);
			}
			function a(t) {
				return 64 === t ? (e.consume(t), u) : g(t) ? (e.consume(t), a) : n(t);
			}
			function u(i) {
				return m(i) ? function i(l) {
					return 46 === l ? (e.consume(l), r = 0, u) : 62 === l ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(l), e.exit("autolinkMarker"), e.exit("autolink"), t) : function t(l) {
						if ((45 === l || m(l)) && r++ < 63) {
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
				return 33 === t ? (e.consume(t), u) : 47 === t ? (e.consume(t), A) : 63 === t ? (e.consume(t), k) : h(t) ? (e.consume(t), L) : n(t);
			}
			function u(t) {
				return 45 === t ? (e.consume(t), c) : 91 === t ? (e.consume(t), i = 0, d) : h(t) ? (e.consume(t), x) : n(t);
			}
			function c(t) {
				return 45 === t ? (e.consume(t), p) : n(t);
			}
			function s(t) {
				return null === t ? n(t) : 45 === t ? (e.consume(t), f) : b(t) ? (l = s, R(t)) : (e.consume(t), s);
			}
			function f(t) {
				return 45 === t ? (e.consume(t), p) : s(t);
			}
			function p(e) {
				return 62 === e ? O(e) : 45 === e ? f(e) : s(e);
			}
			function d(t) {
				return t === "CDATA[".charCodeAt(i++) ? (e.consume(t), 6 === i ? g : d) : n(t);
			}
			function g(t) {
				return null === t ? n(t) : 93 === t ? (e.consume(t), y) : b(t) ? (l = g, R(t)) : (e.consume(t), g);
			}
			function y(t) {
				return 93 === t ? (e.consume(t), v) : g(t);
			}
			function v(t) {
				return 62 === t ? O(t) : 93 === t ? (e.consume(t), v) : g(t);
			}
			function x(t) {
				return null === t || 62 === t ? O(t) : b(t) ? (l = x, R(t)) : (e.consume(t), x);
			}
			function k(t) {
				return null === t ? n(t) : 63 === t ? (e.consume(t), w) : b(t) ? (l = k, R(t)) : (e.consume(t), k);
			}
			function w(e) {
				return 62 === e ? O(e) : k(e);
			}
			function A(t) {
				return h(t) ? (e.consume(t), T) : n(t);
			}
			function T(t) {
				return 45 === t || m(t) ? (e.consume(t), T) : function t(n) {
					return b(n) ? (l = t, R(n)) : S(n) ? (e.consume(n), t) : O(n);
				}(t);
			}
			function L(t) {
				return 45 === t || m(t) ? (e.consume(t), L) : 47 === t || 62 === t || C(t) ? E(t) : n(t);
			}
			function E(t) {
				return 47 === t ? (e.consume(t), O) : 58 === t || 95 === t || h(t) ? (e.consume(t), M) : b(t) ? (l = E, R(t)) : S(t) ? (e.consume(t), E) : O(t);
			}
			function M(t) {
				return 45 === t || 46 === t || 58 === t || 95 === t || m(t) ? (e.consume(t), M) : function t(n) {
					return 61 === n ? (e.consume(n), z) : b(n) ? (l = t, R(n)) : S(n) ? (e.consume(n), t) : E(n);
				}(t);
			}
			function z(t) {
				return null === t || 60 === t || 61 === t || 62 === t || 96 === t ? n(t) : 34 === t || 39 === t ? (e.consume(t), r = t, I) : b(t) ? (l = z, R(t)) : S(t) ? (e.consume(t), z) : (e.consume(t), F);
			}
			function I(t) {
				return t === r ? (e.consume(t), r = void 0, P) : null === t ? n(t) : b(t) ? (l = I, R(t)) : (e.consume(t), I);
			}
			function F(t) {
				return null === t || 34 === t || 39 === t || 60 === t || 61 === t || 96 === t ? n(t) : 47 === t || 62 === t || C(t) ? E(t) : (e.consume(t), F);
			}
			function P(e) {
				return 47 === e || 62 === e || C(e) ? E(e) : n(e);
			}
			function O(r) {
				return 62 === r ? (e.consume(r), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(r);
			}
			function R(t) {
				return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), N;
			}
			function N(t) {
				return S(t) ? D(e, _, "linePrefix", o.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : _(t);
			}
			function _(t) {
				return e.enter("htmlTextData"), l(t);
			}
		}
	}],
	91: ec,
	92: [{
		name: "hardBreakEscape",
		tokenize: function(e, t, n) {
			return function(t) {
				return e.enter("hardBreakEscape"), e.consume(t), r;
			};
			function r(r) {
				return b(r) ? (e.exit("hardBreakEscape"), t(r)) : n(r);
			}
		}
	}, _],
	93: ei,
	95: P,
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
				}(u)) : b(u) ? (e.enter("lineEnding"), e.consume(u), e.exit("lineEnding"), o) : (e.enter("codeTextData"), a(u));
			}
			function a(t) {
				return null === t || 32 === t || 96 === t || b(t) ? (e.exit("codeTextData"), o(t)) : (e.consume(t), a);
			}
		}
	}
}, eM = { null: [P, ey] }, ez = { null: [42, 95] }, eI = { null: [] };
var eF = /[\0\t\n\r]/g, eP = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function eO(e, t, n) {
	if (t) return t;
	if (35 === n.charCodeAt(0)) {
		let e = n.charCodeAt(1), t = 120 === e || 88 === e;
		return p(n.slice(t ? 2 : 1), t ? 16 : 10);
	}
	return a(n) || e;
}
function eR(e) {
	return e && "object" == typeof e ? "position" in e || "type" in e ? e_(e.position) : "start" in e || "end" in e ? e_(e) : "line" in e || "column" in e ? eN(e) : "" : "";
}
function eN(e) {
	return ej(e && e.line) + ":" + ej(e && e.column);
}
function e_(e) {
	return eN(e && e.start) + "-" + eN(e && e.end);
}
function ej(e) {
	return e && "number" == typeof e ? e : 1;
}
var eB = {}.hasOwnProperty;
function eH(e, t, n) {
	let l, o, s, h;
	return "string" != typeof t && (n = t, t = void 0), (function(e) {
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
				autolink: l(C),
				autolinkProtocol: h,
				autolinkEmail: h,
				atxHeading: l(x),
				blockQuote: l(function() {
					return {
						type: "blockquote",
						children: []
					};
				}),
				characterEscape: h,
				characterReference: h,
				codeFenced: l(v),
				codeFencedFenceInfo: o,
				codeFencedFenceMeta: o,
				codeIndented: l(v, o),
				codeText: l(function() {
					return {
						type: "inlineCode",
						value: ""
					};
				}, o),
				codeTextData: h,
				data: h,
				codeFlowValue: h,
				definition: l(function() {
					return {
						type: "definition",
						identifier: "",
						label: null,
						title: null,
						url: ""
					};
				}),
				definitionDestinationString: o,
				definitionLabelString: o,
				definitionTitleString: o,
				emphasis: l(function() {
					return {
						type: "emphasis",
						children: []
					};
				}),
				hardBreakEscape: l(k),
				hardBreakTrailing: l(k),
				htmlFlow: l(b, o),
				htmlFlowData: h,
				htmlText: l(b, o),
				htmlTextData: h,
				image: l(function() {
					return {
						type: "image",
						title: null,
						url: "",
						alt: null
					};
				}),
				label: o,
				link: l(C),
				listItem: l(function(e) {
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
				listOrdered: l(S, function() {
					this.data.expectingFirstListItemValue = !0;
				}),
				listUnordered: l(S),
				paragraph: l(function() {
					return {
						type: "paragraph",
						children: []
					};
				}),
				reference: function() {
					this.data.referenceType = "collapsed";
				},
				referenceString: o,
				resourceDestinationString: o,
				resourceTitleString: o,
				setextHeading: l(x),
				strong: l(function() {
					return {
						type: "strong",
						children: []
					};
				}),
				thematicBreak: l(function() {
					return { type: "thematicBreak" };
				})
			},
			exit: {
				atxHeading: c(),
				atxHeadingSequence: function(e) {
					let t = this.stack[this.stack.length - 1];
					t.depth || (t.depth = this.sliceSerialize(e).length);
				},
				autolink: c(),
				autolinkEmail: function(e) {
					m.call(this, e), this.stack[this.stack.length - 1].url = "mailto:" + this.sliceSerialize(e);
				},
				autolinkProtocol: function(e) {
					m.call(this, e), this.stack[this.stack.length - 1].url = this.sliceSerialize(e);
				},
				blockQuote: c(),
				characterEscapeValue: m,
				characterReferenceMarkerHexadecimal: y,
				characterReferenceMarkerNumeric: y,
				characterReferenceValue: function(e) {
					let t, n = this.sliceSerialize(e), r = this.data.characterReferenceType;
					r ? (t = p(n, "characterReferenceMarkerNumeric" === r ? 10 : 16), this.data.characterReferenceType = void 0) : t = a(n);
					let i = this.stack[this.stack.length - 1];
					i.value += t;
				},
				characterReference: function(e) {
					this.stack.pop().position.end = eV(e.end);
				},
				codeFenced: c(function() {
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
				codeFlowValue: m,
				codeIndented: c(function() {
					let e = this.resume();
					this.stack[this.stack.length - 1].value = e.replace(/(\r?\n|\r)$/g, "");
				}),
				codeText: c(function() {
					let e = this.resume();
					this.stack[this.stack.length - 1].value = e;
				}),
				codeTextData: m,
				data: m,
				definition: c(),
				definitionDestinationString: function() {
					let e = this.resume();
					this.stack[this.stack.length - 1].url = e;
				},
				definitionLabelString: function(e) {
					let t = this.resume(), n = this.stack[this.stack.length - 1];
					n.label = t, n.identifier = d(this.sliceSerialize(e)).toLowerCase();
				},
				definitionTitleString: function() {
					let e = this.resume();
					this.stack[this.stack.length - 1].title = e;
				},
				emphasis: c(),
				hardBreakEscape: c(g),
				hardBreakTrailing: c(g),
				htmlFlow: c(function() {
					let e = this.resume();
					this.stack[this.stack.length - 1].value = e;
				}),
				htmlFlowData: m,
				htmlText: c(function() {
					let e = this.resume();
					this.stack[this.stack.length - 1].value = e;
				}),
				htmlTextData: m,
				image: c(function() {
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
					n.label = t.replace(eP, eO), n.identifier = d(t).toLowerCase();
				},
				lineEnding: function(e) {
					let n = this.stack[this.stack.length - 1];
					if (this.data.atHardBreak) {
						n.children[n.children.length - 1].position.end = eV(e.end), this.data.atHardBreak = void 0;
						return;
					}
					!this.data.setextHeadingSlurpLineEnding && t.canContainEols.includes(n.type) && (h.call(this, e), m.call(this, e));
				},
				link: c(function() {
					let e = this.stack[this.stack.length - 1];
					if (this.data.inReference) {
						let t = this.data.referenceType || "shortcut";
						e.type += "Reference", e.referenceType = t, delete e.url, delete e.title;
					} else delete e.identifier, delete e.label;
					this.data.referenceType = void 0;
				}),
				listItem: c(),
				listOrdered: c(),
				listUnordered: c(),
				paragraph: c(),
				referenceString: function(e) {
					let t = this.resume(), n = this.stack[this.stack.length - 1];
					n.label = t, n.identifier = d(this.sliceSerialize(e)).toLowerCase(), this.data.referenceType = "full";
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
				setextHeading: c(function() {
					this.data.setextHeadingSlurpLineEnding = void 0;
				}),
				setextHeadingLineSequence: function(e) {
					this.stack[this.stack.length - 1].depth = 61 === this.sliceSerialize(e).codePointAt(0) ? 1 : 2;
				},
				setextHeadingText: function() {
					this.data.setextHeadingSlurpLineEnding = !0;
				},
				strong: c(),
				thematicBreak: c()
			}
		};
		(function e(t, n) {
			let r = -1;
			for (; ++r < n.length;) {
				let i = n[r];
				Array.isArray(i) ? e(t, i) : function(e, t) {
					let n;
					for (n in t) if (eB.call(t, n)) switch (n) {
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
			}, i = {
				stack: [r],
				tokenStack: [],
				config: t,
				enter: u,
				exit: s,
				buffer: o,
				resume: f,
				data: n
			}, l = [], a = -1;
			for (; ++a < e.length;) ("listOrdered" === e[a][1].type || "listUnordered" === e[a][1].type) && ("enter" === e[a][0] ? l.push(a) : a = function(e, t, n) {
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
			}(e, l.pop(), a));
			for (a = -1; ++a < e.length;) {
				let n = t[e[a][0]];
				eB.call(n, e[a][1].type) && n[e[a][1].type].call(Object.assign({ sliceSerialize: e[a][2].sliceSerialize }, i), e[a][1]);
			}
			if (i.tokenStack.length > 0) {
				let e = i.tokenStack[i.tokenStack.length - 1];
				(e[1] || eU).call(i, void 0, e[0]);
			}
			for (r.position = {
				start: eV(e.length > 0 ? e[0][1].start : {
					line: 1,
					column: 1,
					offset: 0
				}),
				end: eV(e.length > 0 ? e[e.length - 2][1].end : {
					line: 1,
					column: 1,
					offset: 0
				})
			}, a = -1; ++a < t.transforms.length;) r = t.transforms[a](r) || r;
			return r;
		};
		function l(e, t) {
			return function(n) {
				u.call(this, e(n), n), t && t.call(this, n);
			};
		}
		function o() {
			this.stack.push({
				type: "fragment",
				children: []
			});
		}
		function u(e, t, n) {
			this.stack[this.stack.length - 1].children.push(e), this.stack.push(e), this.tokenStack.push([t, n || void 0]), e.position = {
				start: eV(t.start),
				end: void 0
			};
		}
		function c(e) {
			return function(t) {
				e && e.call(this, t), s.call(this, t);
			};
		}
		function s(e, t) {
			let n = this.stack.pop(), r = this.tokenStack.pop();
			if (r) r[0].type !== e.type && (t ? t.call(this, e, r[0]) : (r[1] || eU).call(this, e, r[0]));
			else throw Error("Cannot close `" + e.type + "` (" + eR({
				start: e.start,
				end: e.end
			}) + "): it’s not open");
			n.position.end = eV(e.end);
		}
		function f() {
			return i(this.stack.pop(), "boolean" != typeof r.includeImageAlt || r.includeImageAlt, "boolean" != typeof r.includeHtml || r.includeHtml);
		}
		function h(e) {
			let t = this.stack[this.stack.length - 1].children, n = t[t.length - 1];
			n && "text" === n.type || ((n = {
				type: "text",
				value: ""
			}).position = {
				start: eV(e.start),
				end: void 0
			}, t.push(n)), this.stack.push(n);
		}
		function m(e) {
			let t = this.stack.pop();
			t.value += this.sliceSerialize(e), t.position.end = eV(e.end);
		}
		function g() {
			this.data.atHardBreak = !0;
		}
		function y(e) {
			this.data.characterReferenceType = e.type;
		}
		function v() {
			return {
				type: "code",
				lang: null,
				meta: null,
				value: ""
			};
		}
		function x() {
			return {
				type: "heading",
				depth: 0,
				children: []
			};
		}
		function k() {
			return { type: "break" };
		}
		function b() {
			return {
				type: "html",
				value: ""
			};
		}
		function C() {
			return {
				type: "link",
				title: null,
				url: "",
				children: []
			};
		}
		function S(e) {
			return {
				type: "list",
				ordered: "listOrdered" === e.type,
				start: null,
				spread: e._spread,
				children: []
			};
		}
	})(n)(function(e) {
		for (; !$(e););
		return e;
	}((function(e) {
		let t = {
			constructs: f([eS, ...(e || {}).extensions || []]),
			content: n(E),
			defined: [],
			document: n(M),
			flow: n(eg),
			lazy: {},
			string: n(ev),
			text: n(ex)
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
					}, i = {}, l = [], o = [], a = [], s = {
						attempt: g(function(e, t) {
							y(e, t.from);
						}),
						check: g(m),
						consume: function(e) {
							b(e) ? (r.line++, r.column = 1, r.offset += -3 === e ? 2 : 1, v()) : -1 !== e && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === o[r._index].length && (r._bufferIndex = -1, r._index++)), f.previous = e;
						},
						enter: function(e, t) {
							let n = t || {};
							return n.type = e, n.start = h(), f.events.push([
								"enter",
								n,
								f
							]), a.push(n), n;
						},
						exit: function(e) {
							let t = a.pop();
							return t.end = h(), f.events.push([
								"exit",
								t,
								f
							]), t;
						},
						interrupt: g(m, { interrupt: !0 })
					}, f = {
						code: null,
						containerState: {},
						defineSkip: function(e) {
							i[e.line] = e.column, v();
						},
						events: [],
						now: h,
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
							}(d(e), t);
						},
						sliceStream: d,
						write: function(e) {
							return (o = c(o, e), function() {
								let e;
								for (; r._index < o.length;) {
									let n = o[r._index];
									if ("string" == typeof n) for (e = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === e && r._bufferIndex < n.length;) {
										var t = n.charCodeAt(r._bufferIndex);
										p = p(t);
									}
									else p = p(n);
								}
							}(), null !== o[o.length - 1]) ? [] : (y(t, 0), f.events = F(l, f.events, f), f.events);
						}
					}, p = t.tokenize.call(f, s);
					return t.resolveAll && l.push(t), f;
					function d(e) {
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
					function h() {
						let { _bufferIndex: e, _index: t, line: n, column: i, offset: l } = r;
						return {
							_bufferIndex: e,
							_index: t,
							line: n,
							column: i,
							offset: l
						};
					}
					function m(e, t) {
						t.restore();
					}
					function g(e, t) {
						return function(n, i, l) {
							var o;
							let u, c, p, d;
							return Array.isArray(n) ? m(n) : "tokenize" in n ? m([n]) : (o = n, function(e) {
								let t = null !== e && o[e], n = null !== e && o.null;
								return m([...Array.isArray(t) ? t : t ? [t] : [], ...Array.isArray(n) ? n : n ? [n] : []])(e);
							});
							function m(e) {
								return (u = e, c = 0, 0 === e.length) ? l : g(e[c]);
							}
							function g(e) {
								return function(n) {
									return (d = function() {
										let e = h(), t = f.previous, n = f.currentConstruct, i = f.events.length, l = Array.from(a);
										return {
											from: i,
											restore: function() {
												r = e, f.previous = t, f.currentConstruct = n, f.events.length = i, a = l, v();
											}
										};
									}(), p = e, e.partial || (f.currentConstruct = e), e.name && f.parser.constructs.disable.null.includes(e.name)) ? x(n) : e.tokenize.call(t ? Object.assign(Object.create(f), t) : f, s, y, x)(n);
								};
							}
							function y(t) {
								return e(p, d), i;
							}
							function x(e) {
								return (d.restore(), ++c < u.length) ? g(u[c]) : l;
							}
						};
					}
					function y(e, t) {
						e.resolveAll && !l.includes(e) && l.push(e), e.resolve && u(f.events, t, f.events.length - t, e.resolve(f.events.slice(t), f)), e.resolveTo && (f.events = e.resolveTo(f.events, f));
					}
					function v() {
						r.line in i && r.column < 2 && (r.column = i[r.line], r.offset += i[r.line] - 1);
					}
				}(t, e, n);
			};
		}
	})(n).document().write((o = 1, s = "", h = !0, function(e, t, n) {
		let r, i, a, u, c, f = [];
		for (e = s + ("string" == typeof e ? e.toString() : new TextDecoder(t || void 0).decode(e)), a = 0, s = "", h && (65279 === e.charCodeAt(0) && a++, h = void 0); a < e.length;) {
			if (eF.lastIndex = a, u = (r = eF.exec(e)) && void 0 !== r.index ? r.index : e.length, c = e.charCodeAt(u), !r) {
				s = e.slice(a);
				break;
			}
			if (10 === c && a === u && l) f.push(-3), l = void 0;
			else switch (l && (f.push(-5), l = void 0), a < u && (f.push(e.slice(a, u)), o += u - a), c) {
				case 0:
					f.push(65533), o++;
					break;
				case 9:
					for (i = 4 * Math.ceil(o / 4), f.push(-2); o++ < i;) f.push(-1);
					break;
				case 10:
					f.push(-4), o = 1;
					break;
				default: l = !0, o = 1;
			}
			a = u + 1;
		}
		return n && (l && f.push(-5), s && f.push(s), f.push(null)), f;
	})(e, t, !0))));
}
function eV(e) {
	return {
		line: e.line,
		column: e.column,
		offset: e.offset
	};
}
function eU(e, t) {
	if (e) throw Error("Cannot close `" + e.type + "` (" + eR({
		start: e.start,
		end: e.end
	}) + "): a different token (`" + t.type + "`, " + eR({
		start: t.start,
		end: t.end
	}) + ") is open");
	throw Error("Cannot close document, a token (`" + t.type + "`, " + eR({
		start: t.start,
		end: t.end
	}) + ") is still open");
}
function eq(e, t) {
	let n = String(e);
	if ("string" != typeof t) throw TypeError("Expected character");
	let r = 0, i = n.indexOf(t);
	for (; -1 !== i;) r++, i = n.indexOf(t, i + t.length);
	return r;
}
let eW = function(e) {
	var t, n;
	if (null == e) return eQ;
	if ("function" == typeof e) return e$(e);
	if ("object" == typeof e) return Array.isArray(e) ? function(e) {
		let t = [], n = -1;
		for (; ++n < e.length;) t[n] = eW(e[n]);
		return e$(function(...e) {
			let n = -1;
			for (; ++n < t.length;) if (t[n].apply(this, e)) return !0;
			return !1;
		});
	}(e) : (t = e, e$(function(e) {
		let n;
		for (n in t) if (e[n] !== t[n]) return !1;
		return !0;
	}));
	if ("string" == typeof e) return n = e, e$(function(e) {
		return e && e.type === n;
	});
	throw Error("Expected function, string, or object as test");
};
function e$(e) {
	return function(t, n, r) {
		var i;
		return !!(null !== (i = t) && "object" == typeof i && "type" in i && e.call(this, t, "number" == typeof n ? n : void 0, r || void 0));
	};
}
function eQ() {
	return !0;
}
var eK = [];
function eX(e, t, n, r) {
	let i;
	"function" == typeof t && "function" != typeof n ? (r = n, n = t) : i = t;
	let l = eW(i), o = r ? -1 : 1;
	(function e(i, a, u) {
		let c = i && "object" == typeof i ? i : {};
		if ("string" == typeof c.type) {
			let e = "string" == typeof c.tagName ? c.tagName : "string" == typeof c.name ? c.name : void 0;
			Object.defineProperty(s, "name", { value: "node (" + i.type + (e ? "<" + e + ">" : "") + ")" });
		}
		return s;
		function s() {
			var c;
			let s, f, p, d = eK;
			if ((!t || l(i, a, u[u.length - 1] || void 0)) && !1 === (d = Array.isArray(c = n(i, u)) ? c : "number" == typeof c ? [!0, c] : null == c ? eK : [c])[0]) return d;
			if ("children" in i && i.children && i.children && "skip" !== d[0]) for (f = (r ? i.children.length : -1) + o, p = u.concat(i); f > -1 && f < i.children.length;) {
				if (!1 === (s = e(i.children[f], f, p)())[0]) return s;
				f = "number" == typeof s[1] ? s[1] : f + o;
			}
			return d;
		}
	})(e, void 0, [])();
}
function eZ(e) {
	this.enter({
		type: "link",
		title: null,
		url: "",
		children: []
	}, e);
}
function eJ(e) {
	this.config.enter.autolinkProtocol.call(this, e);
}
function eY(e) {
	this.config.exit.autolinkProtocol.call(this, e);
}
function eG(e) {
	this.config.exit.data.call(this, e);
	let t = this.stack[this.stack.length - 1];
	t.type, t.url = "http://" + this.sliceSerialize(e);
}
function e1(e) {
	this.config.exit.autolinkEmail.call(this, e);
}
function e0(e) {
	this.exit(e);
}
function e2(e) {
	(function(e, t, n) {
		let r = eW((n || {}).ignore || []), i = function(e) {
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
		for (; ++l < i.length;) eX(e, "text", o);
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
	})(e, [[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, e4], [/(?<=^|\s|\p{P}|\p{S})([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/gu, e3]], { ignore: ["link", "linkReference"] });
}
function e4(e, t, n, r, i) {
	let l = "";
	if (!e5(i) || (/^w/i.test(t) && (n = t + n, t = "", l = "http://"), !function(e) {
		let t = e.split(".");
		return !(t.length < 2 || t[t.length - 1] && (/_/.test(t[t.length - 1]) || !/[a-zA-Z\d]/.test(t[t.length - 1])) || t[t.length - 2] && (/_/.test(t[t.length - 2]) || !/[a-zA-Z\d]/.test(t[t.length - 2])));
	}(n))) return !1;
	let o = function(e) {
		let t = /[!"&'),.:;<>?\]}]+$/.exec(e);
		if (!t) return [e, void 0];
		e = e.slice(0, t.index);
		let n = t[0], r = n.indexOf(")"), i = eq(e, "("), l = eq(e, ")");
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
function e3(e, t, n, r) {
	return !(!e5(r, !0) || /[-\d_]$/.test(n)) && {
		type: "link",
		title: null,
		url: "mailto:" + t + "@" + n,
		children: [{
			type: "text",
			value: t + "@" + n
		}]
	};
}
function e5(e, t) {
	let n = e.input.charCodeAt(e.index - 1);
	return (0 === e.index || A(n) || w(n)) && (!t || 47 !== n);
}
function e9() {
	this.buffer();
}
function e6(e) {
	this.enter({
		type: "footnoteReference",
		identifier: "",
		label: ""
	}, e);
}
function e8() {
	this.buffer();
}
function e7(e) {
	this.enter({
		type: "footnoteDefinition",
		identifier: "",
		label: "",
		children: []
	}, e);
}
function te(e) {
	let t = this.resume(), n = this.stack[this.stack.length - 1];
	n.type, n.identifier = d(this.sliceSerialize(e)).toLowerCase(), n.label = t;
}
function tt(e) {
	this.exit(e);
}
function tn(e) {
	let t = this.resume(), n = this.stack[this.stack.length - 1];
	n.type, n.identifier = d(this.sliceSerialize(e)).toLowerCase(), n.label = t;
}
function tr(e) {
	this.exit(e);
}
function ti(e) {
	this.enter({
		type: "delete",
		children: []
	}, e);
}
function tl(e) {
	this.exit(e);
}
function to(e) {
	let t = e._align;
	this.enter({
		type: "table",
		align: t.map(function(e) {
			return "none" === e ? null : e;
		}),
		children: []
	}, e), this.data.inTable = !0;
}
function ta(e) {
	this.exit(e), this.data.inTable = void 0;
}
function tu(e) {
	this.enter({
		type: "tableRow",
		children: []
	}, e);
}
function tc(e) {
	this.exit(e);
}
function ts(e) {
	this.enter({
		type: "tableCell",
		children: []
	}, e);
}
function tf(e) {
	let t = this.resume();
	this.data.inTable && (t = t.replace(/\\([\\|])/g, tp));
	let n = this.stack[this.stack.length - 1];
	n.type, n.value = t, this.exit(e);
}
function tp(e, t) {
	return "|" === t ? t : e;
}
function td(e) {
	let t = this.stack[this.stack.length - 2];
	t.type, t.checked = "taskListCheckValueChecked" === e.type;
}
function th(e) {
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
function tm() {
	return [
		{
			transforms: [e2],
			enter: {
				literalAutolink: eZ,
				literalAutolinkEmail: eJ,
				literalAutolinkHttp: eJ,
				literalAutolinkWww: eJ
			},
			exit: {
				literalAutolink: e0,
				literalAutolinkEmail: e1,
				literalAutolinkHttp: eY,
				literalAutolinkWww: eG
			}
		},
		{
			enter: {
				gfmFootnoteCallString: e9,
				gfmFootnoteCall: e6,
				gfmFootnoteDefinitionLabelString: e8,
				gfmFootnoteDefinition: e7
			},
			exit: {
				gfmFootnoteCallString: te,
				gfmFootnoteCall: tt,
				gfmFootnoteDefinitionLabelString: tn,
				gfmFootnoteDefinition: tr
			}
		},
		{
			canContainEols: ["delete"],
			enter: { strikethrough: ti },
			exit: { strikethrough: tl }
		},
		{
			enter: {
				table: to,
				tableData: ts,
				tableHeader: ts,
				tableRow: tu
			},
			exit: {
				codeText: tf,
				table: ta,
				tableData: tc,
				tableHeader: tc,
				tableRow: tc
			}
		},
		{ exit: {
			taskListCheckValueChecked: td,
			taskListCheckValueUnchecked: td,
			paragraph: th
		} }
	];
}
for (var tg = {
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
}, ty = {
	tokenize: function(e, t, n) {
		let r, i, l;
		return o;
		function o(t) {
			return 46 === t || 95 === t ? e.check(tx, u, a)(t) : null === t || C(t) || A(t) || 45 !== t && w(t) ? u(t) : (l = !0, e.consume(t), o);
		}
		function a(t) {
			return 95 === t ? r = !0 : (i = r, r = void 0), e.consume(t), o;
		}
		function u(e) {
			return i || r || !l ? n(e) : t(e);
		}
	},
	partial: !0
}, tv = {
	tokenize: function(e, t) {
		let n = 0, r = 0;
		return i;
		function i(o) {
			return 40 === o ? (n++, e.consume(o), i) : 41 === o && r < n ? l(o) : 33 === o || 34 === o || 38 === o || 39 === o || 41 === o || 42 === o || 44 === o || 46 === o || 58 === o || 59 === o || 60 === o || 63 === o || 93 === o || 95 === o || 126 === o ? e.check(tx, t, l)(o) : null === o || C(o) || A(o) ? t(o) : (e.consume(o), i);
		}
		function l(t) {
			return 41 === t && r++, e.consume(t), i;
		}
	},
	partial: !0
}, tx = {
	tokenize: function(e, t, n) {
		return r;
		function r(o) {
			return 33 === o || 34 === o || 39 === o || 41 === o || 42 === o || 44 === o || 46 === o || 58 === o || 59 === o || 63 === o || 95 === o || 126 === o ? (e.consume(o), r) : 38 === o ? (e.consume(o), l) : 93 === o ? (e.consume(o), i) : 60 === o || null === o || C(o) || A(o) ? t(o) : n(o);
		}
		function i(e) {
			return null === e || 40 === e || 91 === e || C(e) || A(e) ? t(e) : r(e);
		}
		function l(t) {
			return h(t) ? function t(i) {
				return 59 === i ? (e.consume(i), r) : h(i) ? (e.consume(i), t) : n(i);
			}(t) : n(t);
		}
	},
	partial: !0
}, tk = {
	tokenize: function(e, t, n) {
		return function(t) {
			return e.consume(t), r;
		};
		function r(e) {
			return m(e) ? n(e) : t(e);
		}
	},
	partial: !0
}, tb = {
	name: "wwwAutolink",
	tokenize: function(e, t, n) {
		let r = this;
		return function(t) {
			return 87 !== t && 119 !== t || !tT.call(r, r.previous) || tM(r.events) ? n(t) : (e.enter("literalAutolink"), e.enter("literalAutolinkWww"), e.check(tg, e.attempt(ty, e.attempt(tv, i), n), n)(t));
		};
		function i(n) {
			return e.exit("literalAutolinkWww"), e.exit("literalAutolink"), t(n);
		}
	},
	previous: tT
}, tC = {
	name: "protocolAutolink",
	tokenize: function(e, t, n) {
		let r = this, i = "", l = !1;
		return function(t) {
			return (72 === t || 104 === t) && tL.call(r, r.previous) && !tM(r.events) ? (e.enter("literalAutolink"), e.enter("literalAutolinkHttp"), i += String.fromCodePoint(t), e.consume(t), o) : n(t);
		};
		function o(t) {
			if (h(t) && i.length < 5) return i += String.fromCodePoint(t), e.consume(t), o;
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
			return null === t || y(t) || C(t) || A(t) || w(t) ? n(t) : e.attempt(ty, e.attempt(tv, c), n)(t);
		}
		function c(n) {
			return e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), t(n);
		}
	},
	previous: tL
}, tS = {
	name: "emailAutolink",
	tokenize: function(e, t, n) {
		let r, i, l = this;
		return function(t) {
			return !tE(t) || !tD.call(l, l.previous) || tM(l.events) ? n(t) : (e.enter("literalAutolink"), e.enter("literalAutolinkEmail"), function t(r) {
				return tE(r) ? (e.consume(r), t) : 64 === r ? (e.consume(r), o) : n(r);
			}(t));
		};
		function o(t) {
			return 46 === t ? e.check(tk, u, a)(t) : 45 === t || 95 === t || m(t) ? (i = !0, e.consume(t), o) : u(t);
		}
		function a(t) {
			return e.consume(t), r = !0, o;
		}
		function u(o) {
			return i && r && h(l.previous) ? (e.exit("literalAutolinkEmail"), e.exit("literalAutolink"), t(o)) : n(o);
		}
	},
	previous: tD
}, tw = {}, tA = 48; tA < 123;) tw[tA] = tS, 58 == ++tA ? tA = 65 : 91 === tA && (tA = 97);
function tT(e) {
	return null === e || 40 === e || 42 === e || 95 === e || 91 === e || 93 === e || 126 === e || C(e);
}
function tL(e) {
	return !h(e);
}
function tD(e) {
	return !(47 === e || tE(e));
}
function tE(e) {
	return 43 === e || 45 === e || 46 === e || 95 === e || m(e);
}
function tM(e) {
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
tw[43] = tS, tw[45] = tS, tw[46] = tS, tw[95] = tS, tw[72] = [tS, tC], tw[104] = [tS, tC], tw[87] = [tS, tb], tw[119] = [tS, tb];
var tz = {
	tokenize: function(e, t, n) {
		let r = this;
		return D(e, function(e) {
			let i = r.events[r.events.length - 1];
			return i && "gfmFootnoteDefinitionIndent" === i[1].type && 4 === i[2].sliceSerialize(i[1], !0).length ? t(e) : n(e);
		}, "gfmFootnoteDefinitionIndent", 5);
	},
	partial: !0
};
function tI(e, t, n) {
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
		let a = d(i.sliceSerialize({
			start: r.end,
			end: i.now()
		}));
		return 94 === a.codePointAt(0) && o.includes(a.slice(1)) ? (e.enter("gfmFootnoteCallLabelMarker"), e.consume(l), e.exit("gfmFootnoteCallLabelMarker"), t(l)) : n(l);
	};
}
function tF(e, t) {
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
function tP(e, t, n) {
	let r, i = this, l = i.parser.gfmFootnotes || (i.parser.gfmFootnotes = []), o = 0;
	return function(t) {
		return e.enter("gfmFootnoteCall"), e.enter("gfmFootnoteCallLabelMarker"), e.consume(t), e.exit("gfmFootnoteCallLabelMarker"), a;
	};
	function a(t) {
		return 94 !== t ? n(t) : (e.enter("gfmFootnoteCallMarker"), e.consume(t), e.exit("gfmFootnoteCallMarker"), e.enter("gfmFootnoteCallString"), e.enter("chunkString").contentType = "string", u);
	}
	function u(a) {
		if (o > 999 || 93 === a && !r || null === a || 91 === a || C(a)) return n(a);
		if (93 === a) {
			e.exit("chunkString");
			let r = e.exit("gfmFootnoteCallString");
			return l.includes(d(i.sliceSerialize(r))) ? (e.enter("gfmFootnoteCallLabelMarker"), e.consume(a), e.exit("gfmFootnoteCallLabelMarker"), e.exit("gfmFootnoteCall"), t) : n(a);
		}
		return C(a) || (r = !0), o++, e.consume(a), 92 === a ? c : u;
	}
	function c(t) {
		return 91 === t || 92 === t || 93 === t ? (e.consume(t), o++, u) : u(t);
	}
}
function tO(e, t, n) {
	let r, i, l = this, o = l.parser.gfmFootnotes || (l.parser.gfmFootnotes = []), a = 0;
	return function(t) {
		return e.enter("gfmFootnoteDefinition")._container = !0, e.enter("gfmFootnoteDefinitionLabel"), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(t), e.exit("gfmFootnoteDefinitionLabelMarker"), u;
	};
	function u(t) {
		return 94 === t ? (e.enter("gfmFootnoteDefinitionMarker"), e.consume(t), e.exit("gfmFootnoteDefinitionMarker"), e.enter("gfmFootnoteDefinitionLabelString"), e.enter("chunkString").contentType = "string", c) : n(t);
	}
	function c(t) {
		if (a > 999 || 93 === t && !i || null === t || 91 === t || C(t)) return n(t);
		if (93 === t) {
			e.exit("chunkString");
			let n = e.exit("gfmFootnoteDefinitionLabelString");
			return r = d(l.sliceSerialize(n)), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(t), e.exit("gfmFootnoteDefinitionLabelMarker"), e.exit("gfmFootnoteDefinitionLabel"), f;
		}
		return C(t) || (i = !0), a++, e.consume(t), 92 === t ? s : c;
	}
	function s(t) {
		return 91 === t || 92 === t || 93 === t ? (e.consume(t), a++, c) : c(t);
	}
	function f(t) {
		return 58 === t ? (e.enter("definitionMarker"), e.consume(t), e.exit("definitionMarker"), o.includes(r) || o.push(r), D(e, p, "gfmFootnoteDefinitionWhitespace")) : n(t);
	}
	function p(e) {
		return t(e);
	}
}
function tR(e, t, n) {
	return e.check(R, t, e.attempt(tz, t, n));
}
function tN(e) {
	e.exit("gfmFootnoteDefinition");
}
var t_ = class {
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
function tj(e, t, n) {
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
		return null === t ? n(t) : b(t) ? o > 1 ? (o = 0, i.interrupt = !0, e.exit("tableRow"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), f) : n(t) : S(t) ? D(e, u, "whitespace")(t) : (o += 1, r && (r = !1, l += 1), 124 === t) ? (e.enter("tableCellDivider"), e.consume(t), e.exit("tableCellDivider"), r = !0, u) : (e.enter("data"), c(t));
	}
	function c(t) {
		return null === t || 124 === t || C(t) ? (e.exit("data"), u(t)) : (e.consume(t), 92 === t ? s : c);
	}
	function s(t) {
		return 92 === t || 124 === t ? (e.consume(t), c) : c(t);
	}
	function f(t) {
		return (i.interrupt = !1, i.parser.lazy[i.now().line]) ? n(t) : (e.enter("tableDelimiterRow"), r = !1, S(t)) ? D(e, p, "linePrefix", i.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : p(t);
	}
	function p(t) {
		return 45 === t || 58 === t ? h(t) : 124 === t ? (r = !0, e.enter("tableCellDivider"), e.consume(t), e.exit("tableCellDivider"), d) : n(t);
	}
	function d(t) {
		return S(t) ? D(e, h, "whitespace")(t) : h(t);
	}
	function h(t) {
		return 58 === t ? (o += 1, r = !0, e.enter("tableDelimiterMarker"), e.consume(t), e.exit("tableDelimiterMarker"), m) : 45 === t ? (o += 1, m(t)) : null === t || b(t) ? y(t) : n(t);
	}
	function m(t) {
		return 45 === t ? (e.enter("tableDelimiterFiller"), function t(n) {
			return 45 === n ? (e.consume(n), t) : 58 === n ? (r = !0, e.exit("tableDelimiterFiller"), e.enter("tableDelimiterMarker"), e.consume(n), e.exit("tableDelimiterMarker"), g) : (e.exit("tableDelimiterFiller"), g(n));
		}(t)) : n(t);
	}
	function g(t) {
		return S(t) ? D(e, y, "whitespace")(t) : y(t);
	}
	function y(i) {
		if (124 === i) return p(i);
		if (null === i || b(i)) return r && l === o ? (e.exit("tableDelimiterRow"), e.exit("tableHead"), t(i)) : n(i);
		return n(i);
	}
	function v(t) {
		return e.enter("tableRow"), x(t);
	}
	function x(n) {
		return 124 === n ? (e.enter("tableCellDivider"), e.consume(n), e.exit("tableCellDivider"), x) : null === n || b(n) ? (e.exit("tableRow"), t(n)) : S(n) ? D(e, x, "whitespace")(n) : (e.enter("data"), k(n));
	}
	function k(t) {
		return null === t || 124 === t || C(t) ? (e.exit("data"), x(t)) : (e.consume(t), 92 === t ? w : k);
	}
	function w(t) {
		return 92 === t || 124 === t ? (e.consume(t), k) : k(t);
	}
}
function tB(e, t) {
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
	], s = !1, f = 0, p = new t_();
	for (; ++l < e.length;) {
		let d = e[l], h = d[1];
		"enter" === d[0] ? "tableHead" === h.type ? (s = !1, 0 !== f && (tV(p, t, f, n, r), r = void 0, f = 0), n = {
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
		]])), a = "tableDelimiterRow" === h.type ? 2 : r ? 3 : 1) : a && ("data" === h.type || "tableDelimiterMarker" === h.type || "tableDelimiterFiller" === h.type) ? (o = !1, 0 === c[2] && (0 !== u[1] && (c[0] = c[1], i = tH(p, t, u, a, void 0, i), u = [
			0,
			0,
			0,
			0
		]), c[2] = l)) : "tableCellDivider" === h.type && (o ? o = !1 : (0 !== u[1] && (c[0] = c[1], i = tH(p, t, u, a, void 0, i)), c = [
			(u = c)[1],
			l,
			0,
			0
		])) : "tableHead" === h.type ? (s = !0, f = l) : "tableRow" === h.type || "tableDelimiterRow" === h.type ? (f = l, 0 !== u[1] ? (c[0] = c[1], i = tH(p, t, u, a, l, i)) : 0 !== c[1] && (i = tH(p, t, c, a, l, i)), a = 0) : a && ("data" === h.type || "tableDelimiterMarker" === h.type || "tableDelimiterFiller" === h.type) && (c[3] = l);
	}
	for (0 !== f && tV(p, t, f, n, r), p.consume(t.events), l = -1; ++l < t.events.length;) {
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
function tH(e, t, n, r, i, l) {
	0 !== n[0] && (l.end = Object.assign({}, tU(t.events, n[0])), e.add(n[0], 0, [[
		"exit",
		l,
		t
	]]));
	let o = tU(t.events, n[1]);
	if (l = {
		type: 1 === r ? "tableHeader" : 2 === r ? "tableDelimiter" : "tableData",
		start: Object.assign({}, o),
		end: Object.assign({}, o)
	}, e.add(n[1], 0, [[
		"enter",
		l,
		t
	]]), 0 !== n[2]) {
		let i = tU(t.events, n[2]), l = tU(t.events, n[3]), o = {
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
	return void 0 !== i && (l.end = Object.assign({}, tU(t.events, i)), e.add(i, 0, [[
		"exit",
		l,
		t
	]]), l = void 0), l;
}
function tV(e, t, n, r, i) {
	let l = [], o = tU(t.events, n);
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
function tU(e, t) {
	let n = e[t], r = "enter" === n[0] ? "start" : "end";
	return n[1][r];
}
var tq = {
	name: "tasklistCheck",
	tokenize: function(e, t, n) {
		let r = this;
		return function(t) {
			return null === r.previous && r._gfmTasklistFirstContentOfListItem ? (e.enter("taskListCheck"), e.enter("taskListCheckMarker"), e.consume(t), e.exit("taskListCheckMarker"), i) : n(t);
		};
		function i(t) {
			return C(t) ? (e.enter("taskListCheckValueUnchecked"), e.consume(t), e.exit("taskListCheckValueUnchecked"), l) : 88 === t || 120 === t ? (e.enter("taskListCheckValueChecked"), e.consume(t), e.exit("taskListCheckValueChecked"), l) : n(t);
		}
		function l(t) {
			return 93 === t ? (e.enter("taskListCheckMarker"), e.consume(t), e.exit("taskListCheckMarker"), e.exit("taskListCheck"), o) : n(t);
		}
		function o(r) {
			return b(r) ? t(r) : S(r) ? e.check({ tokenize: tW }, t, n)(r) : n(r);
		}
	}
};
function tW(e, t, n) {
	return D(e, function(e) {
		return null === e ? n(e) : t(e);
	}, "whitespace");
}
function t$(e) {
	return f([
		{ text: tw },
		{
			document: { 91: {
				name: "gfmFootnoteDefinition",
				tokenize: tO,
				continuation: { tokenize: tR },
				exit: tN
			} },
			text: {
				91: {
					name: "gfmFootnoteCall",
					tokenize: tP
				},
				93: {
					name: "gfmPotentialFootnoteCall",
					add: "after",
					tokenize: tI,
					resolveTo: tF
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
							let u = I(i);
							if (126 === a) return o > 1 ? r(a) : (e.consume(a), o++, l);
							if (o < 2 && !t) return r(a);
							let c = e.exit("strikethroughSequenceTemporary"), s = I(a);
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
							a && u(o, o.length, 0, F(a, e.slice(r + 1, n), t)), u(o, o.length, 0, [
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
							]), u(e, r - 1, n - r + 3, o), n = r + o.length - 2;
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
		}(e),
		{ flow: { null: {
			name: "table",
			tokenize: tj,
			resolveAll: tB
		} } },
		{ text: { 91: tq } }
	]);
}
function tQ(e, t, n, r, i, l, o, a, u, c, s, f, p, d, h) {
	let m, g;
	return function(t) {
		return e.enter(r), e.enter(i), e.consume(t), e.exit(i), y;
	};
	function y(t) {
		return 35 === t ? (m = o, v(t)) : 46 === t ? (m = a, v(t)) : h && S(t) ? D(e, y, "whitespace")(t) : !h && C(t) ? Y(e, y)(t) : null === t || b(t) || A(t) || w(t) && 45 !== t && 95 !== t ? O(t) : (e.enter(l), e.enter(u), e.consume(t), T);
	}
	function v(t) {
		let n = m + "Marker";
		return e.enter(l), e.enter(m), e.enter(n), e.consume(t), e.exit(n), x;
	}
	function x(t) {
		if (null === t || 34 === t || 35 === t || 39 === t || 46 === t || 60 === t || 61 === t || 62 === t || 96 === t || 125 === t || C(t)) return n(t);
		let r = m + "Value";
		return e.enter(r), e.consume(t), k;
	}
	function k(t) {
		if (null === t || 34 === t || 39 === t || 60 === t || 61 === t || 62 === t || 96 === t) return n(t);
		if (35 === t || 46 === t || 125 === t || C(t)) {
			let n = m + "Value";
			return e.exit(n), e.exit(m), e.exit(l), y(t);
		}
		return e.consume(t), k;
	}
	function T(t) {
		return null === t || b(t) || A(t) || w(t) && 45 !== t && 46 !== t && 58 !== t && 95 !== t ? (e.exit(u), h && S(t)) ? D(e, L, "whitespace")(t) : !h && C(t) ? Y(e, L)(t) : L(t) : (e.consume(t), T);
	}
	function L(t) {
		return 61 === t ? (e.enter(c), e.consume(t), e.exit(c), E) : (e.exit(l), y(t));
	}
	function E(t) {
		return null === t || 60 === t || 61 === t || 62 === t || 96 === t || 125 === t || h && b(t) ? n(t) : 34 === t || 39 === t ? (e.enter(s), e.enter(p), e.consume(t), e.exit(p), g = t, z) : h && S(t) ? D(e, E, "whitespace")(t) : !h && C(t) ? Y(e, E)(t) : (e.enter(f), e.enter(d), e.consume(t), g = void 0, M);
	}
	function M(t) {
		return null === t || 34 === t || 39 === t || 60 === t || 61 === t || 62 === t || 96 === t ? n(t) : 125 === t || C(t) ? (e.exit(d), e.exit(f), e.exit(l), y(t)) : (e.consume(t), M);
	}
	function z(t) {
		return t === g ? (e.enter(p), e.consume(t), e.exit(p), e.exit(s), e.exit(l), P) : (e.enter(f), I(t));
	}
	function I(t) {
		return t === g ? (e.exit(f), z(t)) : null === t ? n(t) : b(t) ? h ? n(t) : Y(e, I)(t) : (e.enter(d), e.consume(t), F);
	}
	function F(t) {
		return t === g || null === t || b(t) ? (e.exit(d), I(t)) : (e.consume(t), F);
	}
	function P(e) {
		return 125 === e || C(e) ? y(e) : O(e);
	}
	function O(l) {
		return 125 === l ? (e.enter(i), e.consume(l), e.exit(i), e.exit(r), t) : n(l);
	}
}
function tK(e, t, n, r, i, l, o) {
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
		return null === t || u > 999 || 91 === t && ++c > 32 ? n(t) : 93 !== t || c-- ? b(t) ? o ? n(t) : (e.consume(t), e.exit("chunkText"), f) : (e.consume(t), 92 === t ? d : p) : (e.exit("chunkText"), h(t));
	}
	function d(t) {
		return 91 === t || 92 === t || 93 === t ? (e.consume(t), u++, p) : p(t);
	}
	function h(n) {
		return e.exit(l), e.enter(i), e.consume(n), e.exit(i), e.exit(r), t;
	}
}
function tX(e, t, n, r) {
	let i = this;
	return function(t) {
		return null === t || b(t) || w(t) || A(t) ? n(t) : (e.enter(r), e.consume(t), l);
	};
	function l(o) {
		return null === o || b(o) || A(o) || w(o) && 45 !== o && 95 !== o ? (e.exit(r), 45 === i.previous || 95 === i.previous ? n(o) : t(o)) : (e.consume(o), l);
	}
}
let tZ = {
	tokenize: function(e, t, n) {
		let r, i = this, l = i.events[i.events.length - 1], o = l && "linePrefix" === l[1].type ? l[2].sliceSerialize(l[1], !0).length : 0, a = 0;
		return function(t) {
			return e.enter("directiveContainer"), e.enter("directiveContainerFence"), e.enter("directiveContainerSequence"), function t(r) {
				return 58 === r ? (e.consume(r), a++, t) : a < 3 ? n(r) : (e.exit("directiveContainerSequence"), tX.call(i, e, u, n, "directiveContainerName")(r));
			}(t);
		};
		function u(t) {
			return 91 === t ? e.attempt(tJ, c, c)(t) : c(t);
		}
		function c(t) {
			return 123 === t ? e.attempt(tY, s, s)(t) : s(t);
		}
		function s(t) {
			return D(e, f, "whitespace")(t);
		}
		function f(r) {
			return (e.exit("directiveContainerFence"), null === r) ? k(r) : b(r) ? i.interrupt ? t(r) : e.attempt(tG, p, k)(r) : n(r);
		}
		function p(t) {
			return null === t ? k(t) : b(t) ? e.check(tG, g, k)(t) : (e.enter("directiveContainerContent"), d(t));
		}
		function d(t) {
			return e.attempt({
				tokenize: C,
				partial: !0
			}, x, o ? D(e, h, "linePrefix", o + 1) : h)(t);
		}
		function h(t) {
			return null === t ? x(t) : b(t) ? e.check(tG, m, x)(t) : m(t);
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
				return b(n) ? e.check(tG, y, v)(n) : (e.consume(n), t);
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
		function C(e, t, n) {
			let r = 0;
			return D(e, function(t) {
				return e.enter("directiveContainerFence"), e.enter("directiveContainerSequence"), function t(i) {
					return 58 === i ? (e.consume(i), r++, t) : r < a ? n(i) : (e.exit("directiveContainerSequence"), D(e, l, "whitespace")(i));
				}(t);
			}, "linePrefix", i.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
			function l(r) {
				return null === r || b(r) ? (e.exit("directiveContainerFence"), t(r)) : n(r);
			}
		}
	},
	concrete: !0
};
var tJ = {
	tokenize: function(e, t, n) {
		return tK(e, t, n, "directiveContainerLabel", "directiveContainerLabelMarker", "directiveContainerLabelString", !0);
	},
	partial: !0
}, tY = {
	tokenize: function(e, t, n) {
		return tQ(e, t, n, "directiveContainerAttributes", "directiveContainerAttributesMarker", "directiveContainerAttribute", "directiveContainerAttributeId", "directiveContainerAttributeClass", "directiveContainerAttributeName", "directiveContainerAttributeInitializerMarker", "directiveContainerAttributeValueLiteral", "directiveContainerAttributeValue", "directiveContainerAttributeValueMarker", "directiveContainerAttributeValueData", !0);
	},
	partial: !0
}, tG = {
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
let t1 = { tokenize: function(e, t, n) {
	let r = this;
	return function(t) {
		return e.enter("directiveLeaf"), e.enter("directiveLeafSequence"), e.consume(t), i;
	};
	function i(t) {
		return 58 === t ? (e.consume(t), e.exit("directiveLeafSequence"), tX.call(r, e, l, n, "directiveLeafName")) : n(t);
	}
	function l(t) {
		return 91 === t ? e.attempt(t0, o, o)(t) : o(t);
	}
	function o(t) {
		return 123 === t ? e.attempt(t2, a, a)(t) : a(t);
	}
	function a(t) {
		return D(e, u, "whitespace")(t);
	}
	function u(r) {
		return null === r || b(r) ? (e.exit("directiveLeaf"), t(r)) : n(r);
	}
} };
var t0 = {
	tokenize: function(e, t, n) {
		return tK(e, t, n, "directiveLeafLabel", "directiveLeafLabelMarker", "directiveLeafLabelString", !0);
	},
	partial: !0
}, t2 = {
	tokenize: function(e, t, n) {
		return tQ(e, t, n, "directiveLeafAttributes", "directiveLeafAttributesMarker", "directiveLeafAttribute", "directiveLeafAttributeId", "directiveLeafAttributeClass", "directiveLeafAttributeName", "directiveLeafAttributeInitializerMarker", "directiveLeafAttributeValueLiteral", "directiveLeafAttributeValue", "directiveLeafAttributeValueMarker", "directiveLeafAttributeValueData", !0);
	},
	partial: !0
};
let t4 = {
	tokenize: function(e, t, n) {
		let r = this;
		return function(t) {
			return e.enter("directiveText"), e.enter("directiveTextMarker"), e.consume(t), e.exit("directiveTextMarker"), tX.call(r, e, i, n, "directiveTextName");
		};
		function i(t) {
			return 58 === t ? n(t) : 91 === t ? e.attempt(t3, l, l)(t) : l(t);
		}
		function l(t) {
			return 123 === t ? e.attempt(t5, o, o)(t) : o(t);
		}
		function o(n) {
			return e.exit("directiveText"), t(n);
		}
	},
	previous: function(e) {
		return 58 !== e || "characterEscape" === this.events[this.events.length - 1][1].type;
	}
};
var t3 = {
	tokenize: function(e, t, n) {
		return tK(e, t, n, "directiveTextLabel", "directiveTextLabelMarker", "directiveTextLabelString");
	},
	partial: !0
}, t5 = {
	tokenize: function(e, t, n) {
		return tQ(e, t, n, "directiveTextAttributes", "directiveTextAttributesMarker", "directiveTextAttribute", "directiveTextAttributeId", "directiveTextAttributeClass", "directiveTextAttributeName", "directiveTextAttributeInitializerMarker", "directiveTextAttributeValueLiteral", "directiveTextAttributeValue", "directiveTextAttributeValueMarker", "directiveTextAttributeValueData");
	},
	partial: !0
};
function t9() {
	return {
		text: { 58: t4 },
		flow: { 58: [tZ, t1] }
	};
}
let t6 = [
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
], t8 = {
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
function t7(e) {
	let t = "string" == typeof e ? e.charCodeAt(0) : e;
	return t >= 48 && t <= 57;
}
function ne(e) {
	let t = "string" == typeof e ? e.charCodeAt(0) : e;
	return t >= 97 && t <= 102 || t >= 65 && t <= 70 || t >= 48 && t <= 57;
}
function nt(e) {
	return function(e) {
		let t = "string" == typeof e ? e.charCodeAt(0) : e;
		return t >= 97 && t <= 122 || t >= 65 && t <= 90;
	}(e) || t7(e);
}
var nn = [
	"",
	"Named character references must be terminated by a semicolon",
	"Numeric character references must be terminated by a semicolon",
	"Named character references cannot be empty",
	"Numeric character references cannot be empty",
	"Named character references must be known",
	"Numeric character references cannot be disallowed",
	"Numeric character references cannot be outside the permissible Unicode range"
];
function nr(e, t) {
	let n, r, i, l = t || {}, o = "string" == typeof l.additional ? l.additional.charCodeAt(0) : l.additional, u = [], c = 0, s = -1, f = "";
	l.position && ("start" in l.position || "indent" in l.position ? (r = l.position.indent, n = l.position.start) : n = l.position);
	let p = (n ? n.line : 0) || 1, d = (n ? n.column : 0) || 1, h = y();
	for (c--; ++c <= e.length;) if (10 === i && (d = (r ? r[s] : 0) || 1), 38 === (i = e.charCodeAt(c))) {
		let t, n = e.charCodeAt(c + 1);
		if (9 === n || 10 === n || 12 === n || 32 === n || 38 === n || 60 === n || Number.isNaN(n) || o && n === o) {
			f += String.fromCharCode(i), d++;
			continue;
		}
		let r = c + 1, s = r, p = r;
		if (35 === n) {
			p = ++s;
			let n = e.charCodeAt(p);
			88 === n || 120 === n ? (t = "hexadecimal", p = ++s) : t = "decimal";
		} else t = "named";
		let k = "", b = "", C = "", S = "named" === t ? nt : "decimal" === t ? t7 : ne;
		for (p--; ++p <= e.length;) {
			let n = e.charCodeAt(p);
			if (!S(n)) break;
			C += String.fromCharCode(n), "named" === t && t6.includes(C) && (k = C, b = a(C));
		}
		let w = 59 === e.charCodeAt(p);
		if (w) {
			p++;
			let e = "named" === t && a(C);
			e && (k = C, b = e);
		}
		let A = 1 + p - r, T = "";
		if (w || !1 !== l.nonTerminated) if (C) if ("named" === t) {
			if (w && !b) v(5, 1);
			else if (k !== C && (A = 1 + (p = s + k.length) - s, w = !1), !w) {
				let t = k ? 1 : 3;
				if (l.attribute) {
					let n = e.charCodeAt(p);
					61 === n ? (v(t, A), b = "") : nt(n) ? b = "" : v(t, A);
				} else v(t, A);
			}
			T = b;
		} else {
			var m, g;
			w || v(2, A);
			let e = Number.parseInt(C, "hexadecimal" === t ? 16 : 10);
			if ((m = e) >= 55296 && m <= 57343 || m > 1114111) v(7, A), T = String.fromCharCode(65533);
			else if (e in t8) v(6, A), T = t8[e];
			else {
				let t = "";
				((g = e) >= 1 && g <= 8 || 11 === g || g >= 13 && g <= 31 || g >= 127 && g <= 159 || g >= 64976 && g <= 65007 || (65535 & g) == 65535 || (65535 & g) == 65534) && v(6, A), e > 65535 && (e -= 65536, t += String.fromCharCode(e >>> 10 | 55296), e = 56320 | 1023 & e), T = t + String.fromCharCode(e);
			}
		}
		else "named" !== t && v(4, A);
		if (T) {
			x(), h = y(), c = p - 1, d += p - r + 1, u.push(T);
			let t = y();
			t.offset++, l.reference && l.reference.call(l.referenceContext || void 0, T, {
				start: h,
				end: t
			}, e.slice(r - 1, p)), h = t;
		} else C = e.slice(r - 1, p), f += C, d += C.length, c = p - 1;
	} else 10 === i && (p++, s++, d = 0), Number.isNaN(i) ? x() : (f += String.fromCharCode(i), d++);
	return u.join("");
	function y() {
		return {
			line: p,
			column: d,
			offset: c + ((n ? n.offset : 0) || 0)
		};
	}
	function v(e, t) {
		let n;
		l.warning && (n = y(), n.column += t, n.offset += t, l.warning.call(l.warningContext || void 0, nn[e], n, e));
	}
	function x() {
		f && (u.push(f), l.text && l.text.call(l.textContext || void 0, f, {
			start: h,
			end: y()
		}), f = "");
	}
}
function ni() {
	return {
		canContainEols: ["textDirective"],
		enter: {
			directiveContainer: nl,
			directiveContainerAttributes: np,
			directiveContainerLabel: ns,
			directiveLeaf: no,
			directiveLeafAttributes: np,
			directiveText: na,
			directiveTextAttributes: np
		},
		exit: {
			directiveContainer: nv,
			directiveContainerAttributeClassValue: nh,
			directiveContainerAttributeIdValue: nd,
			directiveContainerAttributeName: ng,
			directiveContainerAttributeValue: nm,
			directiveContainerAttributes: ny,
			directiveContainerLabel: nf,
			directiveContainerName: nc,
			directiveLeaf: nv,
			directiveLeafAttributeClassValue: nh,
			directiveLeafAttributeIdValue: nd,
			directiveLeafAttributeName: ng,
			directiveLeafAttributeValue: nm,
			directiveLeafAttributes: ny,
			directiveLeafName: nc,
			directiveText: nv,
			directiveTextAttributeClassValue: nh,
			directiveTextAttributeIdValue: nd,
			directiveTextAttributeName: ng,
			directiveTextAttributeValue: nm,
			directiveTextAttributes: ny,
			directiveTextName: nc
		}
	};
}
function nl(e) {
	nu.call(this, "containerDirective", e);
}
function no(e) {
	nu.call(this, "leafDirective", e);
}
function na(e) {
	nu.call(this, "textDirective", e);
}
function nu(e, t) {
	this.enter({
		type: e,
		name: "",
		attributes: {},
		children: []
	}, t);
}
function nc(e) {
	let t = this.stack[this.stack.length - 1];
	"containerDirective" === t.type || "leafDirective" === t.type || t.type, t.name = this.sliceSerialize(e);
}
function ns(e) {
	this.enter({
		type: "paragraph",
		data: { directiveLabel: !0 },
		children: []
	}, e);
}
function nf(e) {
	this.exit(e);
}
function np() {
	this.data.directiveAttributes = [], this.buffer();
}
function nd(e) {
	this.data.directiveAttributes.push(["id", nr(this.sliceSerialize(e), { attribute: !0 })]);
}
function nh(e) {
	this.data.directiveAttributes.push(["class", nr(this.sliceSerialize(e), { attribute: !0 })]);
}
function nm(e) {
	let t = this.data.directiveAttributes;
	t[t.length - 1][1] = nr(this.sliceSerialize(e), { attribute: !0 });
}
function ng(e) {
	this.data.directiveAttributes.push([this.sliceSerialize(e), ""]);
}
function ny() {
	let e = this.data.directiveAttributes, t = {}, n = -1;
	for (; ++n < e.length;) {
		let r = e[n];
		"class" === r[0] && t.class ? t.class += " " + r[1] : t[r[0]] = r[1];
	}
	this.data.directiveAttributes = void 0, this.resume();
	let r = this.stack[this.stack.length - 1];
	"containerDirective" === r.type || "leafDirective" === r.type || r.type, r.attributes = t;
}
function nv(e) {
	this.exit(e);
}
var nx = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, nk = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, nb = {};
function nC(e, t) {
	return ((t || nb).jsx ? nk : nx).test(e);
}
var nS = /[ \t\n\f\r]/g;
function nw(e) {
	return "" === e.replace(nS, "");
}
var nA = class {
	constructor(e, t, n) {
		this.normal = t, this.property = e, n && (this.space = n);
	}
};
function nT(e, t) {
	let n = {}, r = {};
	for (let t of e) Object.assign(n, t.property), Object.assign(r, t.normal);
	return new nA(n, r, t);
}
function nL(e) {
	return e.toLowerCase();
}
nA.prototype.normal = {}, nA.prototype.property = {}, nA.prototype.space = void 0;
var nD = class {
	constructor(e, t) {
		this.attribute = t, this.property = e;
	}
};
nD.prototype.attribute = "", nD.prototype.booleanish = !1, nD.prototype.boolean = !1, nD.prototype.commaOrSpaceSeparated = !1, nD.prototype.commaSeparated = !1, nD.prototype.defined = !1, nD.prototype.mustUseProperty = !1, nD.prototype.number = !1, nD.prototype.overloadedBoolean = !1, nD.prototype.property = "", nD.prototype.spaceSeparated = !1, nD.prototype.space = void 0;
var nE = e({
	boolean: () => nz,
	booleanish: () => nI,
	commaOrSpaceSeparated: () => nN,
	commaSeparated: () => nR,
	number: () => nP,
	overloadedBoolean: () => nF,
	spaceSeparated: () => nO
}), nM = 0;
let nz = n_(), nI = n_(), nF = n_(), nP = n_(), nO = n_(), nR = n_(), nN = n_();
function n_() {
	return 2 ** ++nM;
}
var nj = Object.keys(nE), nB = class extends nD {
	constructor(e, t, n, r) {
		var i, l, o, a, u;
		let c = -1;
		if (super(e, t), i = this, (l = r) && (i.space = l), "number" == typeof n) for (; ++c < nj.length;) {
			let e = nj[c];
			o = this, a = nj[c], (u = (n & nE[e]) === nE[e]) && (o[a] = u);
		}
	}
};
function nH(e) {
	let t = {}, n = {};
	for (let [r, i] of Object.entries(e.properties)) {
		let l = new nB(r, e.transform(e.attributes || {}, r), i, e.space);
		e.mustUseProperty && e.mustUseProperty.includes(r) && (l.mustUseProperty = !0), t[r] = l, n[nL(r)] = r, n[nL(l.attribute)] = r;
	}
	return new nA(t, n, e.space);
}
nB.prototype.defined = !0;
let nV = nH({
	properties: {
		ariaActiveDescendant: null,
		ariaAtomic: nI,
		ariaAutoComplete: null,
		ariaBusy: nI,
		ariaChecked: nI,
		ariaColCount: nP,
		ariaColIndex: nP,
		ariaColSpan: nP,
		ariaControls: nO,
		ariaCurrent: null,
		ariaDescribedBy: nO,
		ariaDetails: null,
		ariaDisabled: nI,
		ariaDropEffect: nO,
		ariaErrorMessage: null,
		ariaExpanded: nI,
		ariaFlowTo: nO,
		ariaGrabbed: nI,
		ariaHasPopup: null,
		ariaHidden: nI,
		ariaInvalid: null,
		ariaKeyShortcuts: null,
		ariaLabel: null,
		ariaLabelledBy: nO,
		ariaLevel: nP,
		ariaLive: null,
		ariaModal: nI,
		ariaMultiLine: nI,
		ariaMultiSelectable: nI,
		ariaOrientation: null,
		ariaOwns: nO,
		ariaPlaceholder: null,
		ariaPosInSet: nP,
		ariaPressed: nI,
		ariaReadOnly: nI,
		ariaRelevant: null,
		ariaRequired: nI,
		ariaRoleDescription: nO,
		ariaRowCount: nP,
		ariaRowIndex: nP,
		ariaRowSpan: nP,
		ariaSelected: nI,
		ariaSetSize: nP,
		ariaSort: null,
		ariaValueMax: nP,
		ariaValueMin: nP,
		ariaValueNow: nP,
		ariaValueText: null,
		role: null
	},
	transform: (e, t) => "role" === t ? t : "aria-" + t.slice(4).toLowerCase()
});
function nU(e, t) {
	return t in e ? e[t] : t;
}
function nq(e, t) {
	return nU(e, t.toLowerCase());
}
let nW = nH({
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
		accept: nR,
		acceptCharset: nO,
		accessKey: nO,
		action: null,
		allow: null,
		allowFullScreen: nz,
		allowPaymentRequest: nz,
		allowUserMedia: nz,
		alt: null,
		as: null,
		async: nz,
		autoCapitalize: null,
		autoComplete: nO,
		autoFocus: nz,
		autoPlay: nz,
		blocking: nO,
		capture: null,
		charSet: null,
		checked: nz,
		cite: null,
		className: nO,
		cols: nP,
		colSpan: null,
		content: null,
		contentEditable: nI,
		controls: nz,
		controlsList: nO,
		coords: nP | nR,
		crossOrigin: null,
		data: null,
		dateTime: null,
		decoding: null,
		default: nz,
		defer: nz,
		dir: null,
		dirName: null,
		disabled: nz,
		download: nF,
		draggable: nI,
		encType: null,
		enterKeyHint: null,
		fetchPriority: null,
		form: null,
		formAction: null,
		formEncType: null,
		formMethod: null,
		formNoValidate: nz,
		formTarget: null,
		headers: nO,
		height: nP,
		hidden: nF,
		high: nP,
		href: null,
		hrefLang: null,
		htmlFor: nO,
		httpEquiv: nO,
		id: null,
		imageSizes: null,
		imageSrcSet: null,
		inert: nz,
		inputMode: null,
		integrity: null,
		is: null,
		isMap: nz,
		itemId: null,
		itemProp: nO,
		itemRef: nO,
		itemScope: nz,
		itemType: nO,
		kind: null,
		label: null,
		lang: null,
		language: null,
		list: null,
		loading: null,
		loop: nz,
		low: nP,
		manifest: null,
		max: null,
		maxLength: nP,
		media: null,
		method: null,
		min: null,
		minLength: nP,
		multiple: nz,
		muted: nz,
		name: null,
		nonce: null,
		noModule: nz,
		noValidate: nz,
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
		open: nz,
		optimum: nP,
		pattern: null,
		ping: nO,
		placeholder: null,
		playsInline: nz,
		popover: null,
		popoverTarget: null,
		popoverTargetAction: null,
		poster: null,
		preload: null,
		readOnly: nz,
		referrerPolicy: null,
		rel: nO,
		required: nz,
		reversed: nz,
		rows: nP,
		rowSpan: nP,
		sandbox: nO,
		scope: null,
		scoped: nz,
		seamless: nz,
		selected: nz,
		shadowRootClonable: nz,
		shadowRootDelegatesFocus: nz,
		shadowRootMode: null,
		shape: null,
		size: nP,
		sizes: null,
		slot: null,
		span: nP,
		spellCheck: nI,
		src: null,
		srcDoc: null,
		srcLang: null,
		srcSet: null,
		start: nP,
		step: null,
		style: null,
		tabIndex: nP,
		target: null,
		title: null,
		translate: null,
		type: null,
		typeMustMatch: nz,
		useMap: null,
		value: nI,
		width: nP,
		wrap: null,
		writingSuggestions: null,
		align: null,
		aLink: null,
		archive: nO,
		axis: null,
		background: null,
		bgColor: null,
		border: nP,
		borderColor: null,
		bottomMargin: nP,
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
		compact: nz,
		declare: nz,
		event: null,
		face: null,
		frame: null,
		frameBorder: null,
		hSpace: nP,
		leftMargin: nP,
		link: null,
		longDesc: null,
		lowSrc: null,
		marginHeight: nP,
		marginWidth: nP,
		noResize: nz,
		noHref: nz,
		noShade: nz,
		noWrap: nz,
		object: null,
		profile: null,
		prompt: null,
		rev: null,
		rightMargin: nP,
		rules: null,
		scheme: null,
		scrolling: nI,
		standby: null,
		summary: null,
		text: null,
		topMargin: nP,
		valueType: null,
		version: null,
		vAlign: null,
		vLink: null,
		vSpace: nP,
		allowTransparency: null,
		autoCorrect: null,
		autoSave: null,
		disablePictureInPicture: nz,
		disableRemotePlayback: nz,
		prefix: null,
		property: null,
		results: nP,
		security: null,
		unselectable: null
	},
	space: "html",
	transform: nq
}), n$ = nH({
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
		about: nN,
		accentHeight: nP,
		accumulate: null,
		additive: null,
		alignmentBaseline: null,
		alphabetic: nP,
		amplitude: nP,
		arabicForm: null,
		ascent: nP,
		attributeName: null,
		attributeType: null,
		azimuth: nP,
		bandwidth: null,
		baselineShift: null,
		baseFrequency: null,
		baseProfile: null,
		bbox: null,
		begin: null,
		bias: nP,
		by: null,
		calcMode: null,
		capHeight: nP,
		className: nO,
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
		descent: nP,
		diffuseConstant: nP,
		direction: null,
		display: null,
		dur: null,
		divisor: nP,
		dominantBaseline: null,
		download: nz,
		dx: null,
		dy: null,
		edgeMode: null,
		editable: null,
		elevation: nP,
		enableBackground: null,
		end: null,
		event: null,
		exponent: nP,
		externalResourcesRequired: null,
		fill: null,
		fillOpacity: nP,
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
		g1: nR,
		g2: nR,
		glyphName: nR,
		glyphOrientationHorizontal: null,
		glyphOrientationVertical: null,
		glyphRef: null,
		gradientTransform: null,
		gradientUnits: null,
		handler: null,
		hanging: nP,
		hatchContentUnits: null,
		hatchUnits: null,
		height: null,
		href: null,
		hrefLang: null,
		horizAdvX: nP,
		horizOriginX: nP,
		horizOriginY: nP,
		id: null,
		ideographic: nP,
		imageRendering: null,
		initialVisibility: null,
		in: null,
		in2: null,
		intercept: nP,
		k: nP,
		k1: nP,
		k2: nP,
		k3: nP,
		k4: nP,
		kernelMatrix: nN,
		kernelUnitLength: null,
		keyPoints: null,
		keySplines: null,
		keyTimes: null,
		kerning: null,
		lang: null,
		lengthAdjust: null,
		letterSpacing: null,
		lightingColor: null,
		limitingConeAngle: nP,
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
		mediaSize: nP,
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
		overlinePosition: nP,
		overlineThickness: nP,
		paintOrder: null,
		panose1: null,
		path: null,
		pathLength: nP,
		patternContentUnits: null,
		patternTransform: null,
		patternUnits: null,
		phase: null,
		ping: nO,
		pitch: null,
		playbackOrder: null,
		pointerEvents: null,
		points: null,
		pointsAtX: nP,
		pointsAtY: nP,
		pointsAtZ: nP,
		preserveAlpha: null,
		preserveAspectRatio: null,
		primitiveUnits: null,
		propagate: null,
		property: nN,
		r: null,
		radius: null,
		referrerPolicy: null,
		refX: null,
		refY: null,
		rel: nN,
		rev: nN,
		renderingIntent: null,
		repeatCount: null,
		repeatDur: null,
		requiredExtensions: nN,
		requiredFeatures: nN,
		requiredFonts: nN,
		requiredFormats: nN,
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
		specularConstant: nP,
		specularExponent: nP,
		spreadMethod: null,
		spacing: null,
		startOffset: null,
		stdDeviation: null,
		stemh: null,
		stemv: null,
		stitchTiles: null,
		stopColor: null,
		stopOpacity: null,
		strikethroughPosition: nP,
		strikethroughThickness: nP,
		string: null,
		stroke: null,
		strokeDashArray: nN,
		strokeDashOffset: null,
		strokeLineCap: null,
		strokeLineJoin: null,
		strokeMiterLimit: nP,
		strokeOpacity: nP,
		strokeWidth: null,
		style: null,
		surfaceScale: nP,
		syncBehavior: null,
		syncBehaviorDefault: null,
		syncMaster: null,
		syncTolerance: null,
		syncToleranceDefault: null,
		systemLanguage: nN,
		tabIndex: nP,
		tableValues: null,
		target: null,
		targetX: nP,
		targetY: nP,
		textAnchor: null,
		textDecoration: null,
		textRendering: null,
		textLength: null,
		timelineBegin: null,
		title: null,
		transformBehavior: null,
		type: null,
		typeOf: nN,
		to: null,
		transform: null,
		transformOrigin: null,
		u1: null,
		u2: null,
		underlinePosition: nP,
		underlineThickness: nP,
		unicode: null,
		unicodeBidi: null,
		unicodeRange: null,
		unitsPerEm: nP,
		values: null,
		vAlphabetic: nP,
		vMathematical: nP,
		vectorEffect: null,
		vHanging: nP,
		vIdeographic: nP,
		version: null,
		vertAdvY: nP,
		vertOriginX: nP,
		vertOriginY: nP,
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
		xHeight: nP,
		y: null,
		y1: null,
		y2: null,
		yChannelSelector: null,
		z: null,
		zoomAndPan: null
	},
	space: "svg",
	transform: nU
}), nQ = nH({
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
}), nK = nH({
	attributes: { xmlnsxlink: "xmlns:xlink" },
	properties: {
		xmlnsXLink: null,
		xmlns: null
	},
	space: "xmlns",
	transform: nq
}), nX = nH({
	properties: {
		xmlBase: null,
		xmlLang: null,
		xmlSpace: null
	},
	space: "xml",
	transform: (e, t) => "xml:" + t.slice(3).toLowerCase()
}), nZ = {
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
var nJ = /[A-Z]/g, nY = /-[a-z]/g, nG = /^data[-\w.:]+$/i;
function n1(e) {
	return "-" + e.toLowerCase();
}
function n0(e) {
	return e.charAt(1).toUpperCase();
}
let n2 = nT([
	nV,
	nW,
	nQ,
	nK,
	nX
], "html"), n4 = nT([
	nV,
	n$,
	nQ,
	nK,
	nX
], "svg");
var n3 = n((e, t) => {
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
}), n5 = n((e) => {
	var t = e && e.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	};
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = function(e, t) {
		let r = null;
		if (!e || "string" != typeof e) return r;
		let i = (0, n.default)(e), l = "function" == typeof t;
		return i.forEach((e) => {
			if ("declaration" !== e.type) return;
			let { property: n, value: i } = e;
			l ? t(n, i, e) : i && ((r = r || {})[n] = i);
		}), r;
	};
	var n = t(n3());
}), n9 = n((e) => {
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
}), n6 = n((e, t) => {
	var n = (e && e.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	})(n5()), r = n9();
	function i(e, t) {
		var i = {};
		return e && "string" == typeof e && (0, n.default)(e, function(e, n) {
			e && n && (i[(0, r.camelCase)(e, t)] = n);
		}), i;
	}
	i.default = i, t.exports = i;
});
let n8 = re("end"), n7 = re("start");
function re(e) {
	return function(t) {
		let n = t && t.position && t.position[e] || {};
		if ("number" == typeof n.line && n.line > 0 && "number" == typeof n.column && n.column > 0) return {
			line: n.line,
			column: n.column,
			offset: "number" == typeof n.offset && n.offset > -1 ? n.offset : void 0
		};
	};
}
var rt = class extends Error {
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
		this.ancestors = i.ancestors || void 0, this.cause = i.cause || void 0, this.column = o ? o.column : void 0, this.fatal = void 0, this.file = "", this.message = r, this.line = o ? o.line : void 0, this.name = eR(i.place) || "1:1", this.place = i.place || void 0, this.reason = this.message, this.ruleId = i.ruleId || void 0, this.source = i.source || void 0, this.stack = l && i.cause && "string" == typeof i.cause.stack ? i.cause.stack : "", this.actual = void 0, this.expected = void 0, this.note = void 0, this.url = void 0;
	}
};
rt.prototype.file = "", rt.prototype.name = "", rt.prototype.reason = "", rt.prototype.message = "", rt.prototype.stack = "", rt.prototype.column = void 0, rt.prototype.line = void 0, rt.prototype.ancestors = void 0, rt.prototype.cause = void 0, rt.prototype.fatal = void 0, rt.prototype.place = void 0, rt.prototype.ruleId = void 0, rt.prototype.source = void 0;
var rn = t(n6()), rr = {}.hasOwnProperty, ri = /* @__PURE__ */ new Map(), rl = /[A-Z]/g, ro = new Set([
	"table",
	"tbody",
	"thead",
	"tfoot",
	"tr"
]), ra = new Set(["td", "th"]), ru = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function rc(e, t) {
	var n, r, i, l;
	let o;
	if (!t || void 0 === t.Fragment) throw TypeError("Expected `Fragment` in options");
	let a = t.filePath || void 0;
	if (t.development) {
		if ("function" != typeof t.jsxDEV) throw TypeError("Expected `jsxDEV` in options when `development: true`");
		n = a, r = t.jsxDEV, o = function(e, t, i, l) {
			let o = Array.isArray(i.children), a = n7(e);
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
		schema: "svg" === t.space ? n4 : n2,
		stylePropertyNameCase: t.stylePropertyNameCase || "dom",
		tableCellAlignToStyle: !1 !== t.tableCellAlignToStyle
	}, c = rs(u, e, void 0);
	return c && "string" != typeof c ? c : u.create(e, u.Fragment, { children: c || void 0 }, void 0);
}
function rs(e, t, n) {
	return "element" === t.type ? function(e, t, n) {
		let r = e.schema;
		"svg" === t.tagName.toLowerCase() && "html" === r.space && (e.schema = n4), e.ancestors.push(t);
		let i = rh(e, t.tagName, !1), l = function(e, t) {
			let n, r, i = {};
			for (r in t.properties) if ("children" !== r && rr.call(t.properties, r)) {
				let l = function(e, t, n) {
					let r = function(e, t) {
						let n = nL(t), r = t, i = nD;
						if (n in e.normal) return e.property[e.normal[n]];
						if (n.length > 4 && "data" === n.slice(0, 4) && nG.test(t)) {
							if ("-" === t.charAt(4)) {
								let e = t.slice(5).replace(nY, n0);
								r = "data" + e.charAt(0).toUpperCase() + e.slice(1);
							} else {
								let e = t.slice(4);
								if (!nY.test(e)) {
									let n = e.replace(nJ, n1);
									"-" !== n.charAt(0) && (n = "-" + n), t = "data" + n;
								}
							}
							i = nB;
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
									return (0, rn.default)(t, { reactCompat: !0 });
								} catch (n) {
									if (e.ignoreInvalidStyle) return {};
									let t = new rt("Cannot parse `style` attribute", {
										ancestors: e.ancestors,
										cause: n,
										ruleId: "style",
										source: "hast-util-to-jsx-runtime"
									});
									throw t.file = e.filePath || void 0, t.url = ru + "#cannot-parse-style-attribute", t;
								}
							}(e, String(n));
							return "css" === e.stylePropertyNameCase && (t = function(e) {
								let t, n = {};
								for (t in e) rr.call(e, t) && (n[function(e) {
									let t = e.replace(rl, rg);
									return "ms-" === t.slice(0, 3) && (t = "-" + t), t;
								}(t)] = e[t]);
								return n;
							}(t)), ["style", t];
						}
						return ["react" === e.elementAttributeNameCase && r.space ? nZ[r.property] || r.property : r.attribute, n];
					}
				}(e, r, t.properties[r]);
				if (l) {
					let [r, o] = l;
					e.tableCellAlignToStyle && "align" === r && "string" == typeof o && ra.has(t.tagName) ? n = o : i[r] = o;
				}
			}
			return n && ((i.style || (i.style = {}))["css" === e.stylePropertyNameCase ? "text-align" : "textAlign"] = n), i;
		}(e, t), o = rd(e, t);
		return ro.has(t.tagName) && (o = o.filter(function(e) {
			return "string" != typeof e || !("object" == typeof e ? "text" === e.type && nw(e.value) : nw(e));
		})), rf(e, l, i, t), rp(l, o), e.ancestors.pop(), e.schema = r, e.create(t, i, l, n);
	}(e, t, n) : "mdxFlowExpression" === t.type || "mdxTextExpression" === t.type ? function(e, t) {
		if (t.data && t.data.estree && e.evaluater) {
			let n = t.data.estree.body[0];
			return n.type, e.evaluater.evaluateExpression(n.expression);
		}
		rm(e, t.position);
	}(e, t) : "mdxJsxFlowElement" === t.type || "mdxJsxTextElement" === t.type ? function(e, t, n) {
		let r = e.schema;
		"svg" === t.name && "html" === r.space && (e.schema = n4), e.ancestors.push(t);
		let i = null === t.name ? e.Fragment : rh(e, t.name, !0), l = function(e, t) {
			let n = {};
			for (let r of t.attributes) if ("mdxJsxExpressionAttribute" === r.type) if (r.data && r.data.estree && e.evaluater) {
				let t = r.data.estree.body[0];
				t.type;
				let i = t.expression;
				i.type;
				let l = i.properties[0];
				l.type, Object.assign(n, e.evaluater.evaluateExpression(l.argument));
			} else rm(e, t.position);
			else {
				let i, l = r.name;
				if (r.value && "object" == typeof r.value) if (r.value.data && r.value.data.estree && e.evaluater) {
					let t = r.value.data.estree.body[0];
					t.type, i = e.evaluater.evaluateExpression(t.expression);
				} else rm(e, t.position);
				else i = null === r.value || r.value;
				n[l] = i;
			}
			return n;
		}(e, t), o = rd(e, t);
		return rf(e, l, i, t), rp(l, o), e.ancestors.pop(), e.schema = r, e.create(t, i, l, n);
	}(e, t, n) : "mdxjsEsm" === t.type ? function(e, t) {
		if (t.data && t.data.estree && e.evaluater) return e.evaluater.evaluateProgram(t.data.estree);
		rm(e, t.position);
	}(e, t) : "root" === t.type ? function(e, t, n) {
		let r = {};
		return rp(r, rd(e, t)), e.create(t, e.Fragment, r, n);
	}(e, t, n) : "text" === t.type ? t.value : void 0;
}
function rf(e, t, n, r) {
	"string" != typeof n && n !== e.Fragment && e.passNode && (t.node = r);
}
function rp(e, t) {
	if (t.length > 0) {
		let n = t.length > 1 ? t : t[0];
		n && (e.children = n);
	}
}
function rd(e, t) {
	let n = [], r = -1, i = e.passKeys ? /* @__PURE__ */ new Map() : ri;
	for (; ++r < t.children.length;) {
		let l, o = t.children[r];
		if (e.passKeys) {
			let e = "element" === o.type ? o.tagName : "mdxJsxFlowElement" === o.type || "mdxJsxTextElement" === o.type ? o.name : void 0;
			if (e) {
				let t = i.get(e) || 0;
				l = e + "-" + t, i.set(e, t + 1);
			}
		}
		let a = rs(e, o, l);
		void 0 !== a && n.push(a);
	}
	return n;
}
function rh(e, t, n) {
	let r;
	if (n) if (t.includes(".")) {
		let e, n = t.split("."), i = -1;
		for (; ++i < n.length;) {
			let t = nC(n[i]) ? {
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
	} else r = nC(t) && !/^[a-z]/.test(t) ? {
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
		return rr.call(e.components, t) ? e.components[t] : t;
	}
	if (e.evaluater) return e.evaluater.evaluateExpression(r);
	rm(e);
}
function rm(e, t) {
	let n = new rt("Cannot handle MDX estrees without `createEvaluater`", {
		ancestors: e.ancestors,
		place: t,
		ruleId: "mdx-estree",
		source: "hast-util-to-jsx-runtime"
	});
	throw n.file = e.filePath || void 0, n.url = ru + "#cannot-handle-mdx-estrees-without-createevaluater", n;
}
function rg(e) {
	return "-" + e.toLowerCase();
}
function ry(e, t) {
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
function rv(e) {
	let t = e.spread;
	return null == t ? e.children.length > 1 : t;
}
function rx(e, t, n) {
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
let rk = {
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
		let n, r = "string" == typeof e.options.clobberPrefix ? e.options.clobberPrefix : "user-content-", i = String(t.identifier).toUpperCase(), l = L(i.toLowerCase()), o = e.footnoteOrder.indexOf(i), a = e.footnoteCounts.get(i);
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
		if (!r) return ry(e, t);
		let i = {
			src: L(r.url || ""),
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
		let n = { src: L(t.url) };
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
		if (!r) return ry(e, t);
		let i = { href: L(r.url || "") };
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
		let n = { href: L(t.url) };
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
				for (; !t && ++r < n.length;) t = rv(n[r]);
			}
			return t;
		}(n) : rv(t), l = {}, o = [];
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
			}, l = n7(t.children[1]), o = n8(t.children[t.children.length - 1]);
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
				for (; r;) l.push(rx(t.slice(i, r.index), i > 0, !0), r[0]), i = r.index + r[0].length, r = n.exec(t);
				return l.push(rx(t.slice(i), i > 0, !1)), l.join("");
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
	toml: rb,
	yaml: rb,
	definition: rb,
	footnoteDefinition: rb
};
function rb() {}
var rC = "object" == typeof self ? self : globalThis;
let rS = (e) => ((e, t) => {
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
				return n(new rC[e](t), i);
			}
			case 8: return n(BigInt(o), i);
			case "BigInt": return n(Object(BigInt(o)), i);
			case "ArrayBuffer": return n(new Uint8Array(o).buffer, o);
			case "DataView": {
				let { buffer: e } = new Uint8Array(o);
				return n(new DataView(e), o);
			}
		}
		return n(new rC[l](o), i);
	};
	return r;
})(/* @__PURE__ */ new Map(), e)(0);
var { toString: rw } = {}, { keys: rA } = Object, rT = (e) => {
	let t = typeof e;
	if ("object" !== t || !e) return [0, t];
	let n = rw.call(e).slice(8, -1);
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
}, rL = ([e, t]) => 0 === e && ("function" === t || "symbol" === t);
let rD = (e, { json: t, lossy: n } = {}) => {
	let r = [];
	return ((e, t, n, r) => {
		let i = (e, t) => {
			let i = r.push(e) - 1;
			return n.set(t, i), i;
		}, l = (r) => {
			if (n.has(r)) return n.get(r);
			let [o, a] = rT(r);
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
					for (let t of rA(r)) (e || !rL(rT(r[t]))) && n.push([l(t), l(r[t])]);
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
					for (let [n, i] of r) (e || !(rL(rT(n)) || rL(rT(i)))) && t.push([l(n), l(i)]);
					return n;
				}
				case 6: {
					let t = [], n = i([o, t], r);
					for (let n of r) (e || !rL(rT(n))) && t.push(l(n));
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
var rE = "function" == typeof structuredClone ? (e, t) => t && ("json" in t || "lossy" in t) ? rS(rD(e, t)) : structuredClone(e) : (e, t) => rS(rD(e, t));
function rM(e, t) {
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
function rz(e, t) {
	return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "");
}
var rI = {}.hasOwnProperty, rF = {};
function rP(e, t) {
	e.position && (t.position = function(e) {
		let t = n7(e), n = n8(e);
		if (t && n) return {
			start: t,
			end: n
		};
	}(e));
}
function rO(e, t) {
	let n = t;
	if (e && e.data) {
		let t = e.data.hName, r = e.data.hChildren, i = e.data.hProperties;
		"string" == typeof t && ("element" === n.type ? n.tagName = t : n = {
			type: "element",
			tagName: t,
			properties: {},
			children: "children" in n ? n.children : [n]
		}), "element" === n.type && i && Object.assign(n.properties, rE(i)), "children" in n && n.children && null != r && (n.children = r);
	}
	return n;
}
function rR(e, t) {
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
function rN(e) {
	let t = 0, n = e.charCodeAt(t);
	for (; 9 === n || 32 === n;) t++, n = e.charCodeAt(t);
	return e.slice(t);
}
function r_(e, t) {
	let n = function(e, t) {
		var n, r;
		let i, l, o, a = t || rF, u = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), s = {
			all: function(e) {
				let t = [];
				if ("children" in e) {
					let n = e.children, r = -1;
					for (; ++r < n.length;) {
						let i = s.one(n[r], e);
						if (i) {
							if (r && "break" === n[r - 1].type && (Array.isArray(i) || "text" !== i.type || (i.value = rN(i.value)), !Array.isArray(i) && "element" === i.type)) {
								let e = i.children[0];
								e && "text" === e.type && (e.value = rN(e.value));
							}
							Array.isArray(i) ? t.push(...i) : t.push(i);
						}
					}
				}
				return t;
			},
			applyData: rO,
			definitionById: u,
			footnoteById: c,
			footnoteCounts: /* @__PURE__ */ new Map(),
			footnoteOrder: [],
			handlers: {
				...rk,
				...a.handlers
			},
			one: function(e, t) {
				let n = e.type, r = s.handlers[n];
				if (rI.call(s.handlers, n) && r) return r(s, e, t);
				if (s.options.passThrough && s.options.passThrough.includes(n)) {
					if ("children" in e) {
						let { children: t,...n } = e, r = rE(n);
						return r.children = s.all(e), r;
					}
					return rE(e);
				}
				return (s.options.unknownHandler || function(e, t) {
					let n = t.data || {}, r = "value" in t && !(rI.call(n, "hProperties") || rI.call(n, "hChildren")) ? {
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
			patch: rP,
			wrap: rR
		};
		return "function" == typeof (n = function(e) {
			if ("definition" === e.type || "footnoteDefinition" === e.type) {
				let t = "definition" === e.type ? u : c, n = String(e.identifier).toUpperCase();
				t.has(n) || t.set(n, e);
			}
		}) ? (l = void 0, o = n, i = r) : (l = n, o = r, i = void 0), eX(e, l, function(e, t) {
			let n = t[t.length - 1], r = n ? n.children.indexOf(e) : void 0;
			return o(e, r, n);
		}, i), s;
	}(e, t), r = n.one(e, void 0), i = function(e) {
		let t = "string" == typeof e.options.clobberPrefix ? e.options.clobberPrefix : "user-content-", n = e.options.footnoteBackContent || rM, r = e.options.footnoteBackLabel || rz, i = e.options.footnoteLabel || "Footnotes", l = e.options.footnoteLabelTagName || "h2", o = e.options.footnoteLabelProperties || { className: ["sr-only"] }, a = [], u = -1;
		for (; ++u < e.footnoteOrder.length;) {
			let i = e.footnoteById.get(e.footnoteOrder[u]);
			if (!i) continue;
			let l = e.all(i), o = String(i.identifier).toUpperCase(), c = L(o.toLowerCase()), s = 0, f = [], p = e.footnoteCounts.get(o);
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
						...rE(o),
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
}
export { t$ as a, t9 as i, rc as n, tm as o, ni as r, eH as s, r_ as t };
