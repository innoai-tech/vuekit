import { g as e } from "./lib-nodepkg-typedef.C7Xzglrl.chunk.js";
import { d as t, j as n, F as r, a as i, r as l, h as o } from "./lib-nodepkg-vuekit.CIsNCF-g.chunk.js";
import { e as u } from "./vendor-rxjs.CsPENGSS.chunk.js";
let a = {};
function c(e10, t10, n10) {
  var r2;
  if ((r2 = e10) && "object" == typeof r2) {
    if ("value" in e10) return "html" !== e10.type || n10 ? e10.value : "";
    if (t10 && "alt" in e10 && e10.alt) return e10.alt;
    if ("children" in e10) return s(e10.children, t10, n10);
  }
  return Array.isArray(e10) ? s(e10, t10, n10) : "";
}
function s(e10, t10, n10) {
  let r2 = [], i2 = -1;
  for (; ++i2 < e10.length; ) r2[i2] = c(e10[i2], t10, n10);
  return r2.join("");
}
let f = document.createElement("i");
function p(e10) {
  let t10 = "&" + e10 + ";";
  f.innerHTML = t10;
  let n10 = f.textContent;
  return (59 !== n10.charCodeAt(n10.length - 1) || "semi" === e10) && n10 !== t10 && n10;
}
function d(e10, t10, n10, r2) {
  let i2;
  let l2 = e10.length, o2 = 0;
  if (t10 = t10 < 0 ? -t10 > l2 ? 0 : l2 + t10 : t10 > l2 ? l2 : t10, n10 = n10 > 0 ? n10 : 0, r2.length < 1e4) (i2 = Array.from(r2)).unshift(t10, n10), e10.splice(...i2);
  else for (n10 && e10.splice(t10, n10); o2 < r2.length; ) (i2 = r2.slice(o2, o2 + 1e4)).unshift(t10, 0), e10.splice(...i2), o2 += 1e4, t10 += 1e4;
}
function h(e10, t10) {
  return e10.length > 0 ? (d(e10, e10.length, 0, t10), e10) : t10;
}
let m = {}.hasOwnProperty;
function g(e10) {
  let t10 = {}, n10 = -1;
  for (; ++n10 < e10.length; ) !function(e11, t11) {
    let n11;
    for (n11 in t11) {
      let r2;
      let i2 = (m.call(e11, n11) ? e11[n11] : void 0) || (e11[n11] = {}), l2 = t11[n11];
      if (l2) for (r2 in l2) {
        m.call(i2, r2) || (i2[r2] = []);
        let e12 = l2[r2];
        !function(e13, t12) {
          let n12 = -1, r3 = [];
          for (; ++n12 < t12.length; ) ("after" === t12[n12].add ? e13 : r3).push(t12[n12]);
          d(e13, 0, 0, r3);
        }(i2[r2], Array.isArray(e12) ? e12 : e12 ? [e12] : []);
      }
    }
  }(t10, e10[n10]);
  return t10;
}
function y(e10, t10) {
  let n10 = Number.parseInt(e10, t10);
  return n10 < 9 || 11 === n10 || n10 > 13 && n10 < 32 || n10 > 126 && n10 < 160 || n10 > 55295 && n10 < 57344 || n10 > 64975 && n10 < 65008 || (65535 & n10) == 65535 || (65535 & n10) == 65534 || n10 > 1114111 ? "�" : String.fromCodePoint(n10);
}
function x(e10) {
  return e10.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
let v = (nX = /[A-Za-z]/, function(e10) {
  return null !== e10 && e10 > -1 && nX.test(String.fromCharCode(e10));
}), k = (nZ = /[\dA-Za-z]/, function(e10) {
  return null !== e10 && e10 > -1 && nZ.test(String.fromCharCode(e10));
}), b = (nJ = /[#-'*+\--9=?A-Z^-~]/, function(e10) {
  return null !== e10 && e10 > -1 && nJ.test(String.fromCharCode(e10));
});
function C(e10) {
  return null !== e10 && (e10 < 32 || 127 === e10);
}
let S = (nG = /\d/, function(e10) {
  return null !== e10 && e10 > -1 && nG.test(String.fromCharCode(e10));
}), A = (n1 = /[\dA-Fa-f]/, function(e10) {
  return null !== e10 && e10 > -1 && n1.test(String.fromCharCode(e10));
}), w = (n0 = /[!-/:-@[-`{-~]/, function(e10) {
  return null !== e10 && e10 > -1 && n0.test(String.fromCharCode(e10));
});
function I(e10) {
  return null !== e10 && e10 < -2;
}
function T(e10) {
  return null !== e10 && (e10 < 0 || 32 === e10);
}
function L(e10) {
  return -2 === e10 || -1 === e10 || 32 === e10;
}
let D = (n2 = new RegExp("\\p{P}|\\p{S}", "u"), function(e10) {
  return null !== e10 && e10 > -1 && n2.test(String.fromCharCode(e10));
}), O = (n4 = /\s/, function(e10) {
  return null !== e10 && e10 > -1 && n4.test(String.fromCharCode(e10));
});
function z(e10) {
  let t10 = [], n10 = -1, r2 = 0, i2 = 0;
  for (; ++n10 < e10.length; ) {
    let l2 = e10.charCodeAt(n10), o2 = "";
    if (37 === l2 && k(e10.charCodeAt(n10 + 1)) && k(e10.charCodeAt(n10 + 2))) i2 = 2;
    else if (l2 < 128) /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(l2)) || (o2 = String.fromCharCode(l2));
    else if (l2 > 55295 && l2 < 57344) {
      let t11 = e10.charCodeAt(n10 + 1);
      l2 < 56320 && t11 > 56319 && t11 < 57344 ? (o2 = String.fromCharCode(l2, t11), i2 = 1) : o2 = "�";
    } else o2 = String.fromCharCode(l2);
    o2 && (t10.push(e10.slice(r2, n10), encodeURIComponent(o2)), r2 = n10 + i2 + 1, o2 = ""), i2 && (n10 += i2, i2 = 0);
  }
  return t10.join("") + e10.slice(r2);
}
function E(e10, t10, n10, r2) {
  let i2 = r2 ? r2 - 1 : Number.POSITIVE_INFINITY, l2 = 0;
  return function(r3) {
    return L(r3) ? (e10.enter(n10), function r4(o2) {
      return L(o2) && l2++ < i2 ? (e10.consume(o2), r4) : (e10.exit(n10), t10(o2));
    }(r3)) : t10(r3);
  };
}
let _ = { tokenize: function(e10) {
  let t10;
  let n10 = e10.attempt(this.parser.constructs.contentInitial, function(t11) {
    if (null === t11) {
      e10.consume(t11);
      return;
    }
    return e10.enter("lineEnding"), e10.consume(t11), e10.exit("lineEnding"), E(e10, n10, "linePrefix");
  }, function(n11) {
    return e10.enter("paragraph"), function n12(r2) {
      let i2 = e10.enter("chunkText", { contentType: "text", previous: t10 });
      return t10 && (t10.next = i2), t10 = i2, function t11(r3) {
        if (null === r3) {
          e10.exit("chunkText"), e10.exit("paragraph"), e10.consume(r3);
          return;
        }
        return I(r3) ? (e10.consume(r3), e10.exit("chunkText"), n12) : (e10.consume(r3), t11);
      }(r2);
    }(n11);
  });
  return n10;
} }, M = { tokenize: function(e10) {
  let t10, n10, r2;
  let i2 = this, l2 = [], o2 = 0;
  return u2;
  function u2(t11) {
    if (o2 < l2.length) {
      let n11 = l2[o2];
      return i2.containerState = n11[1], e10.attempt(n11[0].continuation, a2, c2)(t11);
    }
    return c2(t11);
  }
  function a2(e11) {
    if (o2++, i2.containerState._closeFlow) {
      let n11;
      i2.containerState._closeFlow = void 0, t10 && x2();
      let r3 = i2.events.length, l3 = r3;
      for (; l3--; ) if ("exit" === i2.events[l3][0] && "chunkFlow" === i2.events[l3][1].type) {
        n11 = i2.events[l3][1].end;
        break;
      }
      y2(o2);
      let u3 = r3;
      for (; u3 < i2.events.length; ) i2.events[u3][1].end = Object.assign({}, n11), u3++;
      return d(i2.events, l3 + 1, 0, i2.events.slice(r3)), i2.events.length = u3, c2(e11);
    }
    return u2(e11);
  }
  function c2(n11) {
    if (o2 === l2.length) {
      if (!t10) return p2(n11);
      if (t10.currentConstruct && t10.currentConstruct.concrete) return m2(n11);
      i2.interrupt = !!(t10.currentConstruct && !t10._gfmTableDynamicInterruptHack);
    }
    return i2.containerState = {}, e10.check(F, s2, f2)(n11);
  }
  function s2(e11) {
    return t10 && x2(), y2(o2), p2(e11);
  }
  function f2(e11) {
    return i2.parser.lazy[i2.now().line] = o2 !== l2.length, r2 = i2.now().offset, m2(e11);
  }
  function p2(t11) {
    return i2.containerState = {}, e10.attempt(F, h2, m2)(t11);
  }
  function h2(e11) {
    return o2++, l2.push([i2.currentConstruct, i2.containerState]), p2(e11);
  }
  function m2(r3) {
    if (null === r3) {
      t10 && x2(), y2(0), e10.consume(r3);
      return;
    }
    return t10 = t10 || i2.parser.flow(i2.now()), e10.enter("chunkFlow", { contentType: "flow", previous: n10, _tokenizer: t10 }), function t11(n11) {
      if (null === n11) {
        g2(e10.exit("chunkFlow"), true), y2(0), e10.consume(n11);
        return;
      }
      return I(n11) ? (e10.consume(n11), g2(e10.exit("chunkFlow")), o2 = 0, i2.interrupt = void 0, u2) : (e10.consume(n11), t11);
    }(r3);
  }
  function g2(e11, l3) {
    let u3 = i2.sliceStream(e11);
    if (l3 && u3.push(null), e11.previous = n10, n10 && (n10.next = e11), n10 = e11, t10.defineSkip(e11.start), t10.write(u3), i2.parser.lazy[e11.start.line]) {
      let e12, n11, l4 = t10.events.length;
      for (; l4--; ) if (t10.events[l4][1].start.offset < r2 && (!t10.events[l4][1].end || t10.events[l4][1].end.offset > r2)) return;
      let u4 = i2.events.length, a3 = u4;
      for (; a3--; ) if ("exit" === i2.events[a3][0] && "chunkFlow" === i2.events[a3][1].type) {
        if (e12) {
          n11 = i2.events[a3][1].end;
          break;
        }
        e12 = true;
      }
      for (y2(o2), l4 = u4; l4 < i2.events.length; ) i2.events[l4][1].end = Object.assign({}, n11), l4++;
      d(i2.events, a3 + 1, 0, i2.events.slice(u4)), i2.events.length = l4;
    }
  }
  function y2(t11) {
    let n11 = l2.length;
    for (; n11-- > t11; ) {
      let t12 = l2[n11];
      i2.containerState = t12[1], t12[0].exit.call(i2, e10);
    }
    l2.length = t11;
  }
  function x2() {
    t10.write([null]), n10 = void 0, t10 = void 0, i2.containerState._closeFlow = void 0;
  }
} }, F = { tokenize: function(e10, t10, n10) {
  return E(e10, e10.attempt(this.parser.constructs.document, t10, n10), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
} };
function P(e10) {
  return null === e10 || T(e10) || O(e10) ? 1 : D(e10) ? 2 : void 0;
}
function N(e10, t10, n10) {
  let r2 = [], i2 = -1;
  for (; ++i2 < e10.length; ) {
    let l2 = e10[i2].resolveAll;
    l2 && !r2.includes(l2) && (t10 = l2(t10, n10), r2.push(l2));
  }
  return t10;
}
let j = { name: "attention", tokenize: function(e10, t10) {
  let n10;
  let r2 = this.parser.constructs.attentionMarkers.null, i2 = this.previous, l2 = P(i2);
  return function(o2) {
    return n10 = o2, e10.enter("attentionSequence"), function o3(u2) {
      if (u2 === n10) return e10.consume(u2), o3;
      let a2 = e10.exit("attentionSequence"), c2 = P(u2), s2 = !c2 || 2 === c2 && l2 || r2.includes(u2), f2 = !l2 || 2 === l2 && c2 || r2.includes(i2);
      return a2._open = !!(42 === n10 ? s2 : s2 && (l2 || !f2)), a2._close = !!(42 === n10 ? f2 : f2 && (c2 || !s2)), t10(u2);
    }(o2);
  };
}, resolveAll: function(e10, t10) {
  let n10, r2, i2, l2, o2, u2, a2, c2, s2 = -1;
  for (; ++s2 < e10.length; ) if ("enter" === e10[s2][0] && "attentionSequence" === e10[s2][1].type && e10[s2][1]._close) {
    for (n10 = s2; n10--; ) if ("exit" === e10[n10][0] && "attentionSequence" === e10[n10][1].type && e10[n10][1]._open && t10.sliceSerialize(e10[n10][1]).charCodeAt(0) === t10.sliceSerialize(e10[s2][1]).charCodeAt(0)) {
      if ((e10[n10][1]._close || e10[s2][1]._open) && (e10[s2][1].end.offset - e10[s2][1].start.offset) % 3 && !((e10[n10][1].end.offset - e10[n10][1].start.offset + e10[s2][1].end.offset - e10[s2][1].start.offset) % 3)) continue;
      u2 = e10[n10][1].end.offset - e10[n10][1].start.offset > 1 && e10[s2][1].end.offset - e10[s2][1].start.offset > 1 ? 2 : 1;
      let f2 = Object.assign({}, e10[n10][1].end), p2 = Object.assign({}, e10[s2][1].start);
      R(f2, -u2), R(p2, u2), l2 = { type: u2 > 1 ? "strongSequence" : "emphasisSequence", start: f2, end: Object.assign({}, e10[n10][1].end) }, o2 = { type: u2 > 1 ? "strongSequence" : "emphasisSequence", start: Object.assign({}, e10[s2][1].start), end: p2 }, i2 = { type: u2 > 1 ? "strongText" : "emphasisText", start: Object.assign({}, e10[n10][1].end), end: Object.assign({}, e10[s2][1].start) }, r2 = { type: u2 > 1 ? "strong" : "emphasis", start: Object.assign({}, l2.start), end: Object.assign({}, o2.end) }, e10[n10][1].end = Object.assign({}, l2.start), e10[s2][1].start = Object.assign({}, o2.end), a2 = [], e10[n10][1].end.offset - e10[n10][1].start.offset && (a2 = h(a2, [["enter", e10[n10][1], t10], ["exit", e10[n10][1], t10]])), a2 = h(a2, [["enter", r2, t10], ["enter", l2, t10], ["exit", l2, t10], ["enter", i2, t10]]), a2 = h(a2, N(t10.parser.constructs.insideSpan.null, e10.slice(n10 + 1, s2), t10)), a2 = h(a2, [["exit", i2, t10], ["enter", o2, t10], ["exit", o2, t10], ["exit", r2, t10]]), e10[s2][1].end.offset - e10[s2][1].start.offset ? (c2 = 2, a2 = h(a2, [["enter", e10[s2][1], t10], ["exit", e10[s2][1], t10]])) : c2 = 0, d(e10, n10 - 1, s2 - n10 + 3, a2), s2 = n10 + a2.length - c2 - 2;
      break;
    }
  }
  for (s2 = -1; ++s2 < e10.length; ) "attentionSequence" === e10[s2][1].type && (e10[s2][1].type = "data");
  return e10;
} };
function R(e10, t10) {
  e10.column += t10, e10.offset += t10, e10._bufferIndex += t10;
}
let B = { tokenize: function(e10, t10, n10) {
  return function(t11) {
    return L(t11) ? E(e10, r2, "linePrefix")(t11) : r2(t11);
  };
  function r2(e11) {
    return null === e11 || I(e11) ? t10(e11) : n10(e11);
  }
}, partial: true }, V = { name: "blockQuote", tokenize: function(e10, t10, n10) {
  let r2 = this;
  return function(t11) {
    if (62 === t11) {
      let n11 = r2.containerState;
      return n11.open || (e10.enter("blockQuote", { _container: true }), n11.open = true), e10.enter("blockQuotePrefix"), e10.enter("blockQuoteMarker"), e10.consume(t11), e10.exit("blockQuoteMarker"), i2;
    }
    return n10(t11);
  };
  function i2(n11) {
    return L(n11) ? (e10.enter("blockQuotePrefixWhitespace"), e10.consume(n11), e10.exit("blockQuotePrefixWhitespace"), e10.exit("blockQuotePrefix"), t10) : (e10.exit("blockQuotePrefix"), t10(n11));
  }
}, continuation: { tokenize: function(e10, t10, n10) {
  let r2 = this;
  return function(t11) {
    return L(t11) ? E(e10, i2, "linePrefix", r2.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t11) : i2(t11);
  };
  function i2(r3) {
    return e10.attempt(V, t10, n10)(r3);
  }
} }, exit: function(e10) {
  e10.exit("blockQuote");
} }, H = { name: "characterEscape", tokenize: function(e10, t10, n10) {
  return function(t11) {
    return e10.enter("characterEscape"), e10.enter("escapeMarker"), e10.consume(t11), e10.exit("escapeMarker"), r2;
  };
  function r2(r3) {
    return w(r3) ? (e10.enter("characterEscapeValue"), e10.consume(r3), e10.exit("characterEscapeValue"), e10.exit("characterEscape"), t10) : n10(r3);
  }
} }, U = { name: "characterReference", tokenize: function(e10, t10, n10) {
  let r2, i2;
  let l2 = this, o2 = 0;
  return function(t11) {
    return e10.enter("characterReference"), e10.enter("characterReferenceMarker"), e10.consume(t11), e10.exit("characterReferenceMarker"), u2;
  };
  function u2(t11) {
    return 35 === t11 ? (e10.enter("characterReferenceMarkerNumeric"), e10.consume(t11), e10.exit("characterReferenceMarkerNumeric"), a2) : (e10.enter("characterReferenceValue"), r2 = 31, i2 = k, c2(t11));
  }
  function a2(t11) {
    return 88 === t11 || 120 === t11 ? (e10.enter("characterReferenceMarkerHexadecimal"), e10.consume(t11), e10.exit("characterReferenceMarkerHexadecimal"), e10.enter("characterReferenceValue"), r2 = 6, i2 = A, c2) : (e10.enter("characterReferenceValue"), r2 = 7, i2 = S, c2(t11));
  }
  function c2(u3) {
    if (59 === u3 && o2) {
      let r3 = e10.exit("characterReferenceValue");
      return i2 !== k || p(l2.sliceSerialize(r3)) ? (e10.enter("characterReferenceMarker"), e10.consume(u3), e10.exit("characterReferenceMarker"), e10.exit("characterReference"), t10) : n10(u3);
    }
    return i2(u3) && o2++ < r2 ? (e10.consume(u3), c2) : n10(u3);
  }
} }, q = { tokenize: function(e10, t10, n10) {
  let r2 = this;
  return function(t11) {
    return null === t11 ? n10(t11) : (e10.enter("lineEnding"), e10.consume(t11), e10.exit("lineEnding"), i2);
  };
  function i2(e11) {
    return r2.parser.lazy[r2.now().line] ? n10(e11) : t10(e11);
  }
}, partial: true }, W = { name: "codeFenced", tokenize: function(e10, t10, n10) {
  let r2;
  let i2 = this, l2 = { tokenize: function(e11, t11, n11) {
    let l3 = 0;
    return function(t12) {
      return e11.enter("lineEnding"), e11.consume(t12), e11.exit("lineEnding"), o3;
    };
    function o3(t12) {
      return e11.enter("codeFencedFence"), L(t12) ? E(e11, a3, "linePrefix", i2.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t12) : a3(t12);
    }
    function a3(t12) {
      return t12 === r2 ? (e11.enter("codeFencedFenceSequence"), function t13(i3) {
        return i3 === r2 ? (l3++, e11.consume(i3), t13) : l3 >= u2 ? (e11.exit("codeFencedFenceSequence"), L(i3) ? E(e11, c3, "whitespace")(i3) : c3(i3)) : n11(i3);
      }(t12)) : n11(t12);
    }
    function c3(r3) {
      return null === r3 || I(r3) ? (e11.exit("codeFencedFence"), t11(r3)) : n11(r3);
    }
  }, partial: true }, o2 = 0, u2 = 0;
  return function(t11) {
    return function(t12) {
      let l3 = i2.events[i2.events.length - 1];
      return o2 = l3 && "linePrefix" === l3[1].type ? l3[2].sliceSerialize(l3[1], true).length : 0, r2 = t12, e10.enter("codeFenced"), e10.enter("codeFencedFence"), e10.enter("codeFencedFenceSequence"), function t13(i3) {
        return i3 === r2 ? (u2++, e10.consume(i3), t13) : u2 < 3 ? n10(i3) : (e10.exit("codeFencedFenceSequence"), L(i3) ? E(e10, a2, "whitespace")(i3) : a2(i3));
      }(t12);
    }(t11);
  };
  function a2(l3) {
    return null === l3 || I(l3) ? (e10.exit("codeFencedFence"), i2.interrupt ? t10(l3) : e10.check(q, s2, h2)(l3)) : (e10.enter("codeFencedFenceInfo"), e10.enter("chunkString", { contentType: "string" }), function t11(i3) {
      return null === i3 || I(i3) ? (e10.exit("chunkString"), e10.exit("codeFencedFenceInfo"), a2(i3)) : L(i3) ? (e10.exit("chunkString"), e10.exit("codeFencedFenceInfo"), E(e10, c2, "whitespace")(i3)) : 96 === i3 && i3 === r2 ? n10(i3) : (e10.consume(i3), t11);
    }(l3));
  }
  function c2(t11) {
    return null === t11 || I(t11) ? a2(t11) : (e10.enter("codeFencedFenceMeta"), e10.enter("chunkString", { contentType: "string" }), function t12(i3) {
      return null === i3 || I(i3) ? (e10.exit("chunkString"), e10.exit("codeFencedFenceMeta"), a2(i3)) : 96 === i3 && i3 === r2 ? n10(i3) : (e10.consume(i3), t12);
    }(t11));
  }
  function s2(t11) {
    return e10.attempt(l2, h2, f2)(t11);
  }
  function f2(t11) {
    return e10.enter("lineEnding"), e10.consume(t11), e10.exit("lineEnding"), p2;
  }
  function p2(t11) {
    return o2 > 0 && L(t11) ? E(e10, d2, "linePrefix", o2 + 1)(t11) : d2(t11);
  }
  function d2(t11) {
    return null === t11 || I(t11) ? e10.check(q, s2, h2)(t11) : (e10.enter("codeFlowValue"), function t12(n11) {
      return null === n11 || I(n11) ? (e10.exit("codeFlowValue"), d2(n11)) : (e10.consume(n11), t12);
    }(t11));
  }
  function h2(n11) {
    return e10.exit("codeFenced"), t10(n11);
  }
}, concrete: true }, Y = { name: "codeIndented", tokenize: function(e10, t10, n10) {
  let r2 = this;
  return function(t11) {
    return e10.enter("codeIndented"), E(e10, i2, "linePrefix", 5)(t11);
  };
  function i2(t11) {
    let i3 = r2.events[r2.events.length - 1];
    return i3 && "linePrefix" === i3[1].type && i3[2].sliceSerialize(i3[1], true).length >= 4 ? function t12(n11) {
      return null === n11 ? l2(n11) : I(n11) ? e10.attempt(Q, t12, l2)(n11) : (e10.enter("codeFlowValue"), function n12(r3) {
        return null === r3 || I(r3) ? (e10.exit("codeFlowValue"), t12(r3)) : (e10.consume(r3), n12);
      }(n11));
    }(t11) : n10(t11);
  }
  function l2(n11) {
    return e10.exit("codeIndented"), t10(n11);
  }
} }, Q = { tokenize: function(e10, t10, n10) {
  let r2 = this;
  return i2;
  function i2(t11) {
    return r2.parser.lazy[r2.now().line] ? n10(t11) : I(t11) ? (e10.enter("lineEnding"), e10.consume(t11), e10.exit("lineEnding"), i2) : E(e10, l2, "linePrefix", 5)(t11);
  }
  function l2(e11) {
    let l3 = r2.events[r2.events.length - 1];
    return l3 && "linePrefix" === l3[1].type && l3[2].sliceSerialize(l3[1], true).length >= 4 ? t10(e11) : I(e11) ? i2(e11) : n10(e11);
  }
}, partial: true };
class $ {
  constructor(e10) {
    this.left = e10 ? [...e10] : [], this.right = [];
  }
  get(e10) {
    if (e10 < 0 || e10 >= this.left.length + this.right.length) throw RangeError("Cannot access index `" + e10 + "` in a splice buffer of size `" + (this.left.length + this.right.length) + "`");
    return e10 < this.left.length ? this.left[e10] : this.right[this.right.length - e10 + this.left.length - 1];
  }
  get length() {
    return this.left.length + this.right.length;
  }
  shift() {
    return this.setCursor(0), this.right.pop();
  }
  slice(e10, t10) {
    let n10 = null == t10 ? Number.POSITIVE_INFINITY : t10;
    return n10 < this.left.length ? this.left.slice(e10, n10) : e10 > this.left.length ? this.right.slice(this.right.length - n10 + this.left.length, this.right.length - e10 + this.left.length).reverse() : this.left.slice(e10).concat(this.right.slice(this.right.length - n10 + this.left.length).reverse());
  }
  splice(e10, t10, n10) {
    this.setCursor(Math.trunc(e10));
    let r2 = this.right.splice(this.right.length - (t10 || 0), Number.POSITIVE_INFINITY);
    return n10 && K(this.left, n10), r2.reverse();
  }
  pop() {
    return this.setCursor(Number.POSITIVE_INFINITY), this.left.pop();
  }
  push(e10) {
    this.setCursor(Number.POSITIVE_INFINITY), this.left.push(e10);
  }
  pushMany(e10) {
    this.setCursor(Number.POSITIVE_INFINITY), K(this.left, e10);
  }
  unshift(e10) {
    this.setCursor(0), this.right.push(e10);
  }
  unshiftMany(e10) {
    this.setCursor(0), K(this.right, e10.reverse());
  }
  setCursor(e10) {
    if (e10 !== this.left.length && (!(e10 > this.left.length) || 0 !== this.right.length) && (!(e10 < 0) || 0 !== this.left.length)) {
      if (e10 < this.left.length) {
        let t10 = this.left.splice(e10, Number.POSITIVE_INFINITY);
        K(this.right, t10.reverse());
      } else {
        let t10 = this.right.splice(this.left.length + this.right.length - e10, Number.POSITIVE_INFINITY);
        K(this.left, t10.reverse());
      }
    }
  }
}
function K(e10, t10) {
  let n10 = 0;
  if (t10.length < 1e4) e10.push(...t10);
  else for (; n10 < t10.length; ) e10.push(...t10.slice(n10, n10 + 1e4)), n10 += 1e4;
}
function X(e10) {
  let t10, n10, r2, i2, l2, o2, u2;
  let a2 = {}, c2 = -1, s2 = new $(e10);
  for (; ++c2 < s2.length; ) {
    for (; c2 in a2; ) c2 = a2[c2];
    if (t10 = s2.get(c2), c2 && "chunkFlow" === t10[1].type && "listItemPrefix" === s2.get(c2 - 1)[1].type && ((r2 = 0) < (o2 = t10[1]._tokenizer.events).length && "lineEndingBlank" === o2[r2][1].type && (r2 += 2), r2 < o2.length && "content" === o2[r2][1].type)) for (; ++r2 < o2.length && "content" !== o2[r2][1].type; ) "chunkText" === o2[r2][1].type && (o2[r2][1]._isInFirstContentOfListItem = true, r2++);
    if ("enter" === t10[0]) t10[1].contentType && (Object.assign(a2, function(e11, t11) {
      let n11, r3;
      let i3 = e11.get(t11)[1], l3 = e11.get(t11)[2], o3 = t11 - 1, u3 = [], a3 = i3._tokenizer || l3.parser[i3.contentType](i3.start), c3 = a3.events, s3 = [], f2 = {}, p2 = -1, d2 = i3, h2 = 0, m2 = 0, g2 = [0];
      for (; d2; ) {
        for (; e11.get(++o3)[1] !== d2; ) ;
        u3.push(o3), !d2._tokenizer && (n11 = l3.sliceStream(d2), d2.next || n11.push(null), r3 && a3.defineSkip(d2.start), d2._isInFirstContentOfListItem && (a3._gfmTasklistFirstContentOfListItem = true), a3.write(n11), d2._isInFirstContentOfListItem && (a3._gfmTasklistFirstContentOfListItem = void 0)), r3 = d2, d2 = d2.next;
      }
      for (d2 = i3; ++p2 < c3.length; ) "exit" === c3[p2][0] && "enter" === c3[p2 - 1][0] && c3[p2][1].type === c3[p2 - 1][1].type && c3[p2][1].start.line !== c3[p2][1].end.line && (m2 = p2 + 1, g2.push(m2), d2._tokenizer = void 0, d2.previous = void 0, d2 = d2.next);
      for (a3.events = [], d2 ? (d2._tokenizer = void 0, d2.previous = void 0) : g2.pop(), p2 = g2.length; p2--; ) {
        let t12 = c3.slice(g2[p2], g2[p2 + 1]), n12 = u3.pop();
        s3.push([n12, n12 + t12.length - 1]), e11.splice(n12, 2, t12);
      }
      for (s3.reverse(), p2 = -1; ++p2 < s3.length; ) f2[h2 + s3[p2][0]] = h2 + s3[p2][1], h2 += s3[p2][1] - s3[p2][0] - 1;
      return f2;
    }(s2, c2)), c2 = a2[c2], u2 = true);
    else if (t10[1]._container) {
      for (r2 = c2, n10 = void 0; r2--; ) if ("lineEnding" === (i2 = s2.get(r2))[1].type || "lineEndingBlank" === i2[1].type) "enter" === i2[0] && (n10 && (s2.get(n10)[1].type = "lineEndingBlank"), i2[1].type = "lineEnding", n10 = r2);
      else break;
      n10 && (t10[1].end = Object.assign({}, s2.get(n10)[1].start), (l2 = s2.slice(n10, c2)).unshift(t10), s2.splice(n10, c2 - n10 + 1, l2));
    }
  }
  return d(e10, 0, Number.POSITIVE_INFINITY, s2.slice(0)), !u2;
}
let Z = { tokenize: function(e10, t10) {
  let n10;
  return function(t11) {
    return e10.enter("content"), n10 = e10.enter("chunkContent", { contentType: "content" }), r2(t11);
  };
  function r2(t11) {
    return null === t11 ? i2(t11) : I(t11) ? e10.check(J, l2, i2)(t11) : (e10.consume(t11), r2);
  }
  function i2(n11) {
    return e10.exit("chunkContent"), e10.exit("content"), t10(n11);
  }
  function l2(t11) {
    return e10.consume(t11), e10.exit("chunkContent"), n10.next = e10.enter("chunkContent", { contentType: "content", previous: n10 }), n10 = n10.next, r2;
  }
}, resolve: function(e10) {
  return X(e10), e10;
} }, J = { tokenize: function(e10, t10, n10) {
  let r2 = this;
  return function(t11) {
    return e10.exit("chunkContent"), e10.enter("lineEnding"), e10.consume(t11), e10.exit("lineEnding"), E(e10, i2, "linePrefix");
  };
  function i2(i3) {
    if (null === i3 || I(i3)) return n10(i3);
    let l2 = r2.events[r2.events.length - 1];
    return !r2.parser.constructs.disable.null.includes("codeIndented") && l2 && "linePrefix" === l2[1].type && l2[2].sliceSerialize(l2[1], true).length >= 4 ? t10(i3) : e10.interrupt(r2.parser.constructs.flow, n10, t10)(i3);
  }
}, partial: true };
function G(e10, t10, n10, r2, i2, l2, o2, u2, a2) {
  let c2 = a2 || Number.POSITIVE_INFINITY, s2 = 0;
  return function(t11) {
    return 60 === t11 ? (e10.enter(r2), e10.enter(i2), e10.enter(l2), e10.consume(t11), e10.exit(l2), f2) : null === t11 || 32 === t11 || 41 === t11 || C(t11) ? n10(t11) : (e10.enter(r2), e10.enter(o2), e10.enter(u2), e10.enter("chunkString", { contentType: "string" }), h2(t11));
  };
  function f2(n11) {
    return 62 === n11 ? (e10.enter(l2), e10.consume(n11), e10.exit(l2), e10.exit(i2), e10.exit(r2), t10) : (e10.enter(u2), e10.enter("chunkString", { contentType: "string" }), p2(n11));
  }
  function p2(t11) {
    return 62 === t11 ? (e10.exit("chunkString"), e10.exit(u2), f2(t11)) : null === t11 || 60 === t11 || I(t11) ? n10(t11) : (e10.consume(t11), 92 === t11 ? d2 : p2);
  }
  function d2(t11) {
    return 60 === t11 || 62 === t11 || 92 === t11 ? (e10.consume(t11), p2) : p2(t11);
  }
  function h2(i3) {
    return !s2 && (null === i3 || 41 === i3 || T(i3)) ? (e10.exit("chunkString"), e10.exit(u2), e10.exit(o2), e10.exit(r2), t10(i3)) : s2 < c2 && 40 === i3 ? (e10.consume(i3), s2++, h2) : 41 === i3 ? (e10.consume(i3), s2--, h2) : null === i3 || 32 === i3 || 40 === i3 || C(i3) ? n10(i3) : (e10.consume(i3), 92 === i3 ? m2 : h2);
  }
  function m2(t11) {
    return 40 === t11 || 41 === t11 || 92 === t11 ? (e10.consume(t11), h2) : h2(t11);
  }
}
function ee(e10, t10, n10, r2, i2, l2) {
  let o2;
  let u2 = this, a2 = 0;
  return function(t11) {
    return e10.enter(r2), e10.enter(i2), e10.consume(t11), e10.exit(i2), e10.enter(l2), c2;
  };
  function c2(f3) {
    return a2 > 999 || null === f3 || 91 === f3 || 93 === f3 && !o2 || 94 === f3 && !a2 && "_hiddenFootnoteSupport" in u2.parser.constructs ? n10(f3) : 93 === f3 ? (e10.exit(l2), e10.enter(i2), e10.consume(f3), e10.exit(i2), e10.exit(r2), t10) : I(f3) ? (e10.enter("lineEnding"), e10.consume(f3), e10.exit("lineEnding"), c2) : (e10.enter("chunkString", { contentType: "string" }), s2(f3));
  }
  function s2(t11) {
    return null === t11 || 91 === t11 || 93 === t11 || I(t11) || a2++ > 999 ? (e10.exit("chunkString"), c2(t11)) : (e10.consume(t11), o2 || (o2 = !L(t11)), 92 === t11 ? f2 : s2);
  }
  function f2(t11) {
    return 91 === t11 || 92 === t11 || 93 === t11 ? (e10.consume(t11), a2++, s2) : s2(t11);
  }
}
function et(e10, t10, n10, r2, i2, l2) {
  let o2;
  return function(t11) {
    return 34 === t11 || 39 === t11 || 40 === t11 ? (e10.enter(r2), e10.enter(i2), e10.consume(t11), e10.exit(i2), o2 = 40 === t11 ? 41 : t11, u2) : n10(t11);
  };
  function u2(n11) {
    return n11 === o2 ? (e10.enter(i2), e10.consume(n11), e10.exit(i2), e10.exit(r2), t10) : (e10.enter(l2), a2(n11));
  }
  function a2(t11) {
    return t11 === o2 ? (e10.exit(l2), u2(o2)) : null === t11 ? n10(t11) : I(t11) ? (e10.enter("lineEnding"), e10.consume(t11), e10.exit("lineEnding"), E(e10, a2, "linePrefix")) : (e10.enter("chunkString", { contentType: "string" }), c2(t11));
  }
  function c2(t11) {
    return t11 === o2 || null === t11 || I(t11) ? (e10.exit("chunkString"), a2(t11)) : (e10.consume(t11), 92 === t11 ? s2 : c2);
  }
  function s2(t11) {
    return t11 === o2 || 92 === t11 ? (e10.consume(t11), c2) : c2(t11);
  }
}
function en(e10, t10) {
  let n10;
  return function r2(i2) {
    return I(i2) ? (e10.enter("lineEnding"), e10.consume(i2), e10.exit("lineEnding"), n10 = true, r2) : L(i2) ? E(e10, r2, n10 ? "linePrefix" : "lineSuffix")(i2) : t10(i2);
  };
}
let er = { tokenize: function(e10, t10, n10) {
  return function(t11) {
    return T(t11) ? en(e10, r2)(t11) : n10(t11);
  };
  function r2(t11) {
    return et(e10, i2, n10, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(t11);
  }
  function i2(t11) {
    return L(t11) ? E(e10, l2, "whitespace")(t11) : l2(t11);
  }
  function l2(e11) {
    return null === e11 || I(e11) ? t10(e11) : n10(e11);
  }
}, partial: true }, ei = ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hr", "html", "iframe", "legend", "li", "link", "main", "menu", "menuitem", "nav", "noframes", "ol", "optgroup", "option", "p", "param", "search", "section", "summary", "table", "tbody", "td", "tfoot", "th", "thead", "title", "tr", "track", "ul"], el = ["pre", "script", "style", "textarea"], eo = { tokenize: function(e10, t10, n10) {
  return function(r2) {
    return e10.enter("lineEnding"), e10.consume(r2), e10.exit("lineEnding"), e10.attempt(B, t10, n10);
  };
}, partial: true }, eu = { tokenize: function(e10, t10, n10) {
  let r2 = this;
  return function(t11) {
    return I(t11) ? (e10.enter("lineEnding"), e10.consume(t11), e10.exit("lineEnding"), i2) : n10(t11);
  };
  function i2(e11) {
    return r2.parser.lazy[r2.now().line] ? n10(e11) : t10(e11);
  }
}, partial: true }, ea = { name: "labelEnd", tokenize: function(e10, t10, n10) {
  let r2, i2;
  let l2 = this, o2 = l2.events.length;
  for (; o2--; ) if (("labelImage" === l2.events[o2][1].type || "labelLink" === l2.events[o2][1].type) && !l2.events[o2][1]._balanced) {
    r2 = l2.events[o2][1];
    break;
  }
  return function(t11) {
    return r2 ? r2._inactive ? s2(t11) : (i2 = l2.parser.defined.includes(x(l2.sliceSerialize({ start: r2.end, end: l2.now() }))), e10.enter("labelEnd"), e10.enter("labelMarker"), e10.consume(t11), e10.exit("labelMarker"), e10.exit("labelEnd"), u2) : n10(t11);
  };
  function u2(t11) {
    return 40 === t11 ? e10.attempt(ec, c2, i2 ? c2 : s2)(t11) : 91 === t11 ? e10.attempt(es, c2, i2 ? a2 : s2)(t11) : i2 ? c2(t11) : s2(t11);
  }
  function a2(t11) {
    return e10.attempt(ef, c2, s2)(t11);
  }
  function c2(e11) {
    return t10(e11);
  }
  function s2(e11) {
    return r2._balanced = true, n10(e11);
  }
}, resolveTo: function(e10, t10) {
  let n10, r2, i2, l2, o2 = e10.length, u2 = 0;
  for (; o2--; ) if (n10 = e10[o2][1], r2) {
    if ("link" === n10.type || "labelLink" === n10.type && n10._inactive) break;
    "enter" === e10[o2][0] && "labelLink" === n10.type && (n10._inactive = true);
  } else if (i2) {
    if ("enter" === e10[o2][0] && ("labelImage" === n10.type || "labelLink" === n10.type) && !n10._balanced && (r2 = o2, "labelLink" !== n10.type)) {
      u2 = 2;
      break;
    }
  } else "labelEnd" === n10.type && (i2 = o2);
  let a2 = { type: "labelLink" === e10[r2][1].type ? "link" : "image", start: Object.assign({}, e10[r2][1].start), end: Object.assign({}, e10[e10.length - 1][1].end) }, c2 = { type: "label", start: Object.assign({}, e10[r2][1].start), end: Object.assign({}, e10[i2][1].end) }, s2 = { type: "labelText", start: Object.assign({}, e10[r2 + u2 + 2][1].end), end: Object.assign({}, e10[i2 - 2][1].start) };
  return l2 = h(l2 = [["enter", a2, t10], ["enter", c2, t10]], e10.slice(r2 + 1, r2 + u2 + 3)), l2 = h(l2, [["enter", s2, t10]]), l2 = h(l2, N(t10.parser.constructs.insideSpan.null, e10.slice(r2 + u2 + 4, i2 - 3), t10)), l2 = h(l2, [["exit", s2, t10], e10[i2 - 2], e10[i2 - 1], ["exit", c2, t10]]), l2 = h(l2, e10.slice(i2 + 1)), l2 = h(l2, [["exit", a2, t10]]), d(e10, r2, e10.length, l2), e10;
}, resolveAll: function(e10) {
  let t10 = -1;
  for (; ++t10 < e10.length; ) {
    let n10 = e10[t10][1];
    ("labelImage" === n10.type || "labelLink" === n10.type || "labelEnd" === n10.type) && (e10.splice(t10 + 1, "labelImage" === n10.type ? 4 : 2), n10.type = "data", t10++);
  }
  return e10;
} }, ec = { tokenize: function(e10, t10, n10) {
  return function(t11) {
    return e10.enter("resource"), e10.enter("resourceMarker"), e10.consume(t11), e10.exit("resourceMarker"), r2;
  };
  function r2(t11) {
    return T(t11) ? en(e10, i2)(t11) : i2(t11);
  }
  function i2(t11) {
    return 41 === t11 ? c2(t11) : G(e10, l2, o2, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(t11);
  }
  function l2(t11) {
    return T(t11) ? en(e10, u2)(t11) : c2(t11);
  }
  function o2(e11) {
    return n10(e11);
  }
  function u2(t11) {
    return 34 === t11 || 39 === t11 || 40 === t11 ? et(e10, a2, n10, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(t11) : c2(t11);
  }
  function a2(t11) {
    return T(t11) ? en(e10, c2)(t11) : c2(t11);
  }
  function c2(r3) {
    return 41 === r3 ? (e10.enter("resourceMarker"), e10.consume(r3), e10.exit("resourceMarker"), e10.exit("resource"), t10) : n10(r3);
  }
} }, es = { tokenize: function(e10, t10, n10) {
  let r2 = this;
  return function(t11) {
    return ee.call(r2, e10, i2, l2, "reference", "referenceMarker", "referenceString")(t11);
  };
  function i2(e11) {
    return r2.parser.defined.includes(x(r2.sliceSerialize(r2.events[r2.events.length - 1][1]).slice(1, -1))) ? t10(e11) : n10(e11);
  }
  function l2(e11) {
    return n10(e11);
  }
} }, ef = { tokenize: function(e10, t10, n10) {
  return function(t11) {
    return e10.enter("reference"), e10.enter("referenceMarker"), e10.consume(t11), e10.exit("referenceMarker"), r2;
  };
  function r2(r3) {
    return 93 === r3 ? (e10.enter("referenceMarker"), e10.consume(r3), e10.exit("referenceMarker"), e10.exit("reference"), t10) : n10(r3);
  }
} }, ep = { name: "labelStartImage", tokenize: function(e10, t10, n10) {
  let r2 = this;
  return function(t11) {
    return e10.enter("labelImage"), e10.enter("labelImageMarker"), e10.consume(t11), e10.exit("labelImageMarker"), i2;
  };
  function i2(t11) {
    return 91 === t11 ? (e10.enter("labelMarker"), e10.consume(t11), e10.exit("labelMarker"), e10.exit("labelImage"), l2) : n10(t11);
  }
  function l2(e11) {
    return 94 === e11 && "_hiddenFootnoteSupport" in r2.parser.constructs ? n10(e11) : t10(e11);
  }
}, resolveAll: ea.resolveAll }, ed = { name: "labelStartLink", tokenize: function(e10, t10, n10) {
  let r2 = this;
  return function(t11) {
    return e10.enter("labelLink"), e10.enter("labelMarker"), e10.consume(t11), e10.exit("labelMarker"), e10.exit("labelLink"), i2;
  };
  function i2(e11) {
    return 94 === e11 && "_hiddenFootnoteSupport" in r2.parser.constructs ? n10(e11) : t10(e11);
  }
}, resolveAll: ea.resolveAll }, eh = { name: "lineEnding", tokenize: function(e10, t10) {
  return function(n10) {
    return e10.enter("lineEnding"), e10.consume(n10), e10.exit("lineEnding"), E(e10, t10, "linePrefix");
  };
} }, em = { name: "thematicBreak", tokenize: function(e10, t10, n10) {
  let r2, i2 = 0;
  return function(l2) {
    var o2;
    return e10.enter("thematicBreak"), r2 = o2 = l2, function l3(o3) {
      return o3 === r2 ? (e10.enter("thematicBreakSequence"), function t11(n11) {
        return n11 === r2 ? (e10.consume(n11), i2++, t11) : (e10.exit("thematicBreakSequence"), L(n11) ? E(e10, l3, "whitespace")(n11) : l3(n11));
      }(o3)) : i2 >= 3 && (null === o3 || I(o3)) ? (e10.exit("thematicBreak"), t10(o3)) : n10(o3);
    }(o2);
  };
} }, eg = { name: "list", tokenize: function(e10, t10, n10) {
  let r2 = this, i2 = r2.events[r2.events.length - 1], l2 = i2 && "linePrefix" === i2[1].type ? i2[2].sliceSerialize(i2[1], true).length : 0, o2 = 0;
  return function(t11) {
    let i3 = r2.containerState.type || (42 === t11 || 43 === t11 || 45 === t11 ? "listUnordered" : "listOrdered");
    if ("listUnordered" === i3 ? !r2.containerState.marker || t11 === r2.containerState.marker : S(t11)) {
      if (r2.containerState.type || (r2.containerState.type = i3, e10.enter(i3, { _container: true })), "listUnordered" === i3) return e10.enter("listItemPrefix"), 42 === t11 || 45 === t11 ? e10.check(em, n10, u2)(t11) : u2(t11);
      if (!r2.interrupt || 49 === t11) return e10.enter("listItemPrefix"), e10.enter("listItemValue"), function t12(i4) {
        return S(i4) && ++o2 < 10 ? (e10.consume(i4), t12) : (!r2.interrupt || o2 < 2) && (r2.containerState.marker ? i4 === r2.containerState.marker : 41 === i4 || 46 === i4) ? (e10.exit("listItemValue"), u2(i4)) : n10(i4);
      }(t11);
    }
    return n10(t11);
  };
  function u2(t11) {
    return e10.enter("listItemMarker"), e10.consume(t11), e10.exit("listItemMarker"), r2.containerState.marker = r2.containerState.marker || t11, e10.check(B, r2.interrupt ? n10 : a2, e10.attempt(ey, s2, c2));
  }
  function a2(e11) {
    return r2.containerState.initialBlankLine = true, l2++, s2(e11);
  }
  function c2(t11) {
    return L(t11) ? (e10.enter("listItemPrefixWhitespace"), e10.consume(t11), e10.exit("listItemPrefixWhitespace"), s2) : n10(t11);
  }
  function s2(n11) {
    return r2.containerState.size = l2 + r2.sliceSerialize(e10.exit("listItemPrefix"), true).length, t10(n11);
  }
}, continuation: { tokenize: function(e10, t10, n10) {
  let r2 = this;
  return r2.containerState._closeFlow = void 0, e10.check(B, function(n11) {
    return r2.containerState.furtherBlankLines = r2.containerState.furtherBlankLines || r2.containerState.initialBlankLine, E(e10, t10, "listItemIndent", r2.containerState.size + 1)(n11);
  }, function(n11) {
    return r2.containerState.furtherBlankLines || !L(n11) ? (r2.containerState.furtherBlankLines = void 0, r2.containerState.initialBlankLine = void 0, i2(n11)) : (r2.containerState.furtherBlankLines = void 0, r2.containerState.initialBlankLine = void 0, e10.attempt(ex, t10, i2)(n11));
  });
  function i2(i3) {
    return r2.containerState._closeFlow = true, r2.interrupt = void 0, E(e10, e10.attempt(eg, t10, n10), "linePrefix", r2.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(i3);
  }
} }, exit: function(e10) {
  e10.exit(this.containerState.type);
} }, ey = { tokenize: function(e10, t10, n10) {
  let r2 = this;
  return E(e10, function(e11) {
    let i2 = r2.events[r2.events.length - 1];
    return !L(e11) && i2 && "listItemPrefixWhitespace" === i2[1].type ? t10(e11) : n10(e11);
  }, "listItemPrefixWhitespace", r2.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
}, partial: true }, ex = { tokenize: function(e10, t10, n10) {
  let r2 = this;
  return E(e10, function(e11) {
    let i2 = r2.events[r2.events.length - 1];
    return i2 && "listItemIndent" === i2[1].type && i2[2].sliceSerialize(i2[1], true).length === r2.containerState.size ? t10(e11) : n10(e11);
  }, "listItemIndent", r2.containerState.size + 1);
}, partial: true }, ev = { name: "setextUnderline", tokenize: function(e10, t10, n10) {
  let r2;
  let i2 = this;
  return function(t11) {
    var o2;
    let u2, a2 = i2.events.length;
    for (; a2--; ) if ("lineEnding" !== i2.events[a2][1].type && "linePrefix" !== i2.events[a2][1].type && "content" !== i2.events[a2][1].type) {
      u2 = "paragraph" === i2.events[a2][1].type;
      break;
    }
    return !i2.parser.lazy[i2.now().line] && (i2.interrupt || u2) ? (e10.enter("setextHeadingLine"), r2 = t11, o2 = t11, e10.enter("setextHeadingLineSequence"), function t12(n11) {
      return n11 === r2 ? (e10.consume(n11), t12) : (e10.exit("setextHeadingLineSequence"), L(n11) ? E(e10, l2, "lineSuffix")(n11) : l2(n11));
    }(o2)) : n10(t11);
  };
  function l2(r3) {
    return null === r3 || I(r3) ? (e10.exit("setextHeadingLine"), t10(r3)) : n10(r3);
  }
}, resolveTo: function(e10, t10) {
  let n10, r2, i2, l2 = e10.length;
  for (; l2--; ) if ("enter" === e10[l2][0]) {
    if ("content" === e10[l2][1].type) {
      n10 = l2;
      break;
    }
    "paragraph" === e10[l2][1].type && (r2 = l2);
  } else "content" === e10[l2][1].type && e10.splice(l2, 1), i2 || "definition" !== e10[l2][1].type || (i2 = l2);
  let o2 = { type: "setextHeading", start: Object.assign({}, e10[r2][1].start), end: Object.assign({}, e10[e10.length - 1][1].end) };
  return e10[r2][1].type = "setextHeadingText", i2 ? (e10.splice(r2, 0, ["enter", o2, t10]), e10.splice(i2 + 1, 0, ["exit", e10[n10][1], t10]), e10[n10][1].end = Object.assign({}, e10[i2][1].end)) : e10[n10][1] = o2, e10.push(["exit", o2, t10]), e10;
} }, ek = { tokenize: function(e10) {
  let t10 = this, n10 = e10.attempt(B, function(r3) {
    if (null === r3) {
      e10.consume(r3);
      return;
    }
    return e10.enter("lineEndingBlank"), e10.consume(r3), e10.exit("lineEndingBlank"), t10.currentConstruct = void 0, n10;
  }, e10.attempt(this.parser.constructs.flowInitial, r2, E(e10, e10.attempt(this.parser.constructs.flow, r2, e10.attempt(Z, r2)), "linePrefix")));
  return n10;
  function r2(r3) {
    if (null === r3) {
      e10.consume(r3);
      return;
    }
    return e10.enter("lineEnding"), e10.consume(r3), e10.exit("lineEnding"), t10.currentConstruct = void 0, n10;
  }
} }, eb = eS("string"), eC = eS("text");
function eS(e10) {
  var t10;
  return { tokenize: function(t11) {
    let n10 = this, r2 = this.parser.constructs[e10], i2 = t11.attempt(r2, l2, o2);
    return l2;
    function l2(e11) {
      return a2(e11) ? i2(e11) : o2(e11);
    }
    function o2(e11) {
      if (null === e11) {
        t11.consume(e11);
        return;
      }
      return t11.enter("data"), t11.consume(e11), u2;
    }
    function u2(e11) {
      return a2(e11) ? (t11.exit("data"), i2(e11)) : (t11.consume(e11), u2);
    }
    function a2(e11) {
      if (null === e11) return true;
      let t12 = r2[e11], i3 = -1;
      if (t12) for (; ++i3 < t12.length; ) {
        let e12 = t12[i3];
        if (!e12.previous || e12.previous.call(n10, n10.previous)) return true;
      }
      return false;
    }
  }, resolveAll: (t10 = "text" === e10 ? eA : void 0, function(e11, n10) {
    let r2, i2 = -1;
    for (; ++i2 <= e11.length; ) void 0 === r2 ? e11[i2] && "data" === e11[i2][1].type && (r2 = i2, i2++) : e11[i2] && "data" === e11[i2][1].type || (i2 !== r2 + 2 && (e11[r2][1].end = e11[i2 - 1][1].end, e11.splice(r2 + 2, i2 - r2 - 2), i2 = r2 + 2), r2 = void 0);
    return t10 ? t10(e11, n10) : e11;
  }) };
}
function eA(e10, t10) {
  let n10 = 0;
  for (; ++n10 <= e10.length; ) if ((n10 === e10.length || "lineEnding" === e10[n10][1].type) && "data" === e10[n10 - 1][1].type) {
    let r2;
    let i2 = e10[n10 - 1][1], l2 = t10.sliceStream(i2), o2 = l2.length, u2 = -1, a2 = 0;
    for (; o2--; ) {
      let e11 = l2[o2];
      if ("string" == typeof e11) {
        for (u2 = e11.length; 32 === e11.charCodeAt(u2 - 1); ) a2++, u2--;
        if (u2) break;
        u2 = -1;
      } else if (-2 === e11) r2 = true, a2++;
      else if (-1 === e11) ;
      else {
        o2++;
        break;
      }
    }
    if (a2) {
      let l3 = { type: n10 === e10.length || r2 || a2 < 2 ? "lineSuffix" : "hardBreakTrailing", start: { line: i2.end.line, column: i2.end.column - a2, offset: i2.end.offset - a2, _index: i2.start._index + o2, _bufferIndex: o2 ? u2 : i2.start._bufferIndex + u2 }, end: Object.assign({}, i2.end) };
      i2.end = Object.assign({}, l3.start), i2.start.offset === i2.end.offset ? Object.assign(i2, l3) : (e10.splice(n10, 0, ["enter", l3, t10], ["exit", l3, t10]), n10 += 2);
    }
    n10++;
  }
  return e10;
}
let ew = Object.freeze(Object.defineProperty({ __proto__: null, attentionMarkers: { null: [42, 95] }, contentInitial: { 91: { name: "definition", tokenize: function(e10, t10, n10) {
  let r2;
  let i2 = this;
  return function(t11) {
    var r3;
    return e10.enter("definition"), r3 = t11, ee.call(i2, e10, l2, n10, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(r3);
  };
  function l2(t11) {
    return (r2 = x(i2.sliceSerialize(i2.events[i2.events.length - 1][1]).slice(1, -1)), 58 === t11) ? (e10.enter("definitionMarker"), e10.consume(t11), e10.exit("definitionMarker"), o2) : n10(t11);
  }
  function o2(t11) {
    return T(t11) ? en(e10, u2)(t11) : u2(t11);
  }
  function u2(t11) {
    return G(e10, a2, n10, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString")(t11);
  }
  function a2(t11) {
    return e10.attempt(er, c2, c2)(t11);
  }
  function c2(t11) {
    return L(t11) ? E(e10, s2, "whitespace")(t11) : s2(t11);
  }
  function s2(l3) {
    return null === l3 || I(l3) ? (e10.exit("definition"), i2.parser.defined.push(r2), t10(l3)) : n10(l3);
  }
} } }, disable: { null: [] }, document: { 42: eg, 43: eg, 45: eg, 48: eg, 49: eg, 50: eg, 51: eg, 52: eg, 53: eg, 54: eg, 55: eg, 56: eg, 57: eg, 62: V }, flow: { 35: { name: "headingAtx", tokenize: function(e10, t10, n10) {
  let r2 = 0;
  return function(i2) {
    var l2;
    return e10.enter("atxHeading"), l2 = i2, e10.enter("atxHeadingSequence"), function i3(l3) {
      return 35 === l3 && r2++ < 6 ? (e10.consume(l3), i3) : null === l3 || T(l3) ? (e10.exit("atxHeadingSequence"), function n11(r3) {
        return 35 === r3 ? (e10.enter("atxHeadingSequence"), function t11(r4) {
          return 35 === r4 ? (e10.consume(r4), t11) : (e10.exit("atxHeadingSequence"), n11(r4));
        }(r3)) : null === r3 || I(r3) ? (e10.exit("atxHeading"), t10(r3)) : L(r3) ? E(e10, n11, "whitespace")(r3) : (e10.enter("atxHeadingText"), function t11(r4) {
          return null === r4 || 35 === r4 || T(r4) ? (e10.exit("atxHeadingText"), n11(r4)) : (e10.consume(r4), t11);
        }(r3));
      }(l3)) : n10(l3);
    }(l2);
  };
}, resolve: function(e10, t10) {
  let n10, r2, i2 = e10.length - 2, l2 = 3;
  return "whitespace" === e10[3][1].type && (l2 += 2), i2 - 2 > l2 && "whitespace" === e10[i2][1].type && (i2 -= 2), "atxHeadingSequence" === e10[i2][1].type && (l2 === i2 - 1 || i2 - 4 > l2 && "whitespace" === e10[i2 - 2][1].type) && (i2 -= l2 + 1 === i2 ? 2 : 4), i2 > l2 && (n10 = { type: "atxHeadingText", start: e10[l2][1].start, end: e10[i2][1].end }, r2 = { type: "chunkText", start: e10[l2][1].start, end: e10[i2][1].end, contentType: "text" }, d(e10, l2, i2 - l2 + 1, [["enter", n10, t10], ["enter", r2, t10], ["exit", r2, t10], ["exit", n10, t10]])), e10;
} }, 42: em, 45: [ev, em], 60: { name: "htmlFlow", tokenize: function(e10, t10, n10) {
  let r2, i2, l2, o2, u2;
  let a2 = this;
  return function(t11) {
    var n11;
    return n11 = t11, e10.enter("htmlFlow"), e10.enter("htmlFlowData"), e10.consume(n11), c2;
  };
  function c2(o3) {
    return 33 === o3 ? (e10.consume(o3), s2) : 47 === o3 ? (e10.consume(o3), i2 = true, d2) : 63 === o3 ? (e10.consume(o3), r2 = 3, a2.interrupt ? t10 : N2) : v(o3) ? (e10.consume(o3), l2 = String.fromCharCode(o3), h2) : n10(o3);
  }
  function s2(i3) {
    return 45 === i3 ? (e10.consume(i3), r2 = 2, f2) : 91 === i3 ? (e10.consume(i3), r2 = 5, o2 = 0, p2) : v(i3) ? (e10.consume(i3), r2 = 4, a2.interrupt ? t10 : N2) : n10(i3);
  }
  function f2(r3) {
    return 45 === r3 ? (e10.consume(r3), a2.interrupt ? t10 : N2) : n10(r3);
  }
  function p2(r3) {
    let i3 = "CDATA[";
    return r3 === i3.charCodeAt(o2++) ? (e10.consume(r3), o2 === i3.length) ? a2.interrupt ? t10 : D2 : p2 : n10(r3);
  }
  function d2(t11) {
    return v(t11) ? (e10.consume(t11), l2 = String.fromCharCode(t11), h2) : n10(t11);
  }
  function h2(o3) {
    if (null === o3 || 47 === o3 || 62 === o3 || T(o3)) {
      let u3 = 47 === o3, c3 = l2.toLowerCase();
      return !u3 && !i2 && el.includes(c3) ? (r2 = 1, a2.interrupt ? t10(o3) : D2(o3)) : ei.includes(l2.toLowerCase()) ? (r2 = 6, u3) ? (e10.consume(o3), m2) : a2.interrupt ? t10(o3) : D2(o3) : (r2 = 7, a2.interrupt && !a2.parser.lazy[a2.now().line] ? n10(o3) : i2 ? function t11(n11) {
        return L(n11) ? (e10.consume(n11), t11) : A2(n11);
      }(o3) : g2(o3));
    }
    return 45 === o3 || k(o3) ? (e10.consume(o3), l2 += String.fromCharCode(o3), h2) : n10(o3);
  }
  function m2(r3) {
    return 62 === r3 ? (e10.consume(r3), a2.interrupt ? t10 : D2) : n10(r3);
  }
  function g2(t11) {
    return 47 === t11 ? (e10.consume(t11), A2) : 58 === t11 || 95 === t11 || v(t11) ? (e10.consume(t11), y2) : L(t11) ? (e10.consume(t11), g2) : A2(t11);
  }
  function y2(t11) {
    return 45 === t11 || 46 === t11 || 58 === t11 || 95 === t11 || k(t11) ? (e10.consume(t11), y2) : x2(t11);
  }
  function x2(t11) {
    return 61 === t11 ? (e10.consume(t11), b2) : L(t11) ? (e10.consume(t11), x2) : g2(t11);
  }
  function b2(t11) {
    return null === t11 || 60 === t11 || 61 === t11 || 62 === t11 || 96 === t11 ? n10(t11) : 34 === t11 || 39 === t11 ? (e10.consume(t11), u2 = t11, C2) : L(t11) ? (e10.consume(t11), b2) : function t12(n11) {
      return null === n11 || 34 === n11 || 39 === n11 || 47 === n11 || 60 === n11 || 61 === n11 || 62 === n11 || 96 === n11 || T(n11) ? x2(n11) : (e10.consume(n11), t12);
    }(t11);
  }
  function C2(t11) {
    return t11 === u2 ? (e10.consume(t11), u2 = null, S2) : null === t11 || I(t11) ? n10(t11) : (e10.consume(t11), C2);
  }
  function S2(e11) {
    return 47 === e11 || 62 === e11 || L(e11) ? g2(e11) : n10(e11);
  }
  function A2(t11) {
    return 62 === t11 ? (e10.consume(t11), w2) : n10(t11);
  }
  function w2(t11) {
    return null === t11 || I(t11) ? D2(t11) : L(t11) ? (e10.consume(t11), w2) : n10(t11);
  }
  function D2(t11) {
    return 45 === t11 && 2 === r2 ? (e10.consume(t11), _2) : 60 === t11 && 1 === r2 ? (e10.consume(t11), M2) : 62 === t11 && 4 === r2 ? (e10.consume(t11), j2) : 63 === t11 && 3 === r2 ? (e10.consume(t11), N2) : 93 === t11 && 5 === r2 ? (e10.consume(t11), P2) : I(t11) && (6 === r2 || 7 === r2) ? (e10.exit("htmlFlowData"), e10.check(eo, R2, O2)(t11)) : null === t11 || I(t11) ? (e10.exit("htmlFlowData"), O2(t11)) : (e10.consume(t11), D2);
  }
  function O2(t11) {
    return e10.check(eu, z2, R2)(t11);
  }
  function z2(t11) {
    return e10.enter("lineEnding"), e10.consume(t11), e10.exit("lineEnding"), E2;
  }
  function E2(t11) {
    return null === t11 || I(t11) ? O2(t11) : (e10.enter("htmlFlowData"), D2(t11));
  }
  function _2(t11) {
    return 45 === t11 ? (e10.consume(t11), N2) : D2(t11);
  }
  function M2(t11) {
    return 47 === t11 ? (e10.consume(t11), l2 = "", F2) : D2(t11);
  }
  function F2(t11) {
    if (62 === t11) {
      let n11 = l2.toLowerCase();
      return el.includes(n11) ? (e10.consume(t11), j2) : D2(t11);
    }
    return v(t11) && l2.length < 8 ? (e10.consume(t11), l2 += String.fromCharCode(t11), F2) : D2(t11);
  }
  function P2(t11) {
    return 93 === t11 ? (e10.consume(t11), N2) : D2(t11);
  }
  function N2(t11) {
    return 62 === t11 ? (e10.consume(t11), j2) : 45 === t11 && 2 === r2 ? (e10.consume(t11), N2) : D2(t11);
  }
  function j2(t11) {
    return null === t11 || I(t11) ? (e10.exit("htmlFlowData"), R2(t11)) : (e10.consume(t11), j2);
  }
  function R2(n11) {
    return e10.exit("htmlFlow"), t10(n11);
  }
}, resolveTo: function(e10) {
  let t10 = e10.length;
  for (; t10-- && ("enter" !== e10[t10][0] || "htmlFlow" !== e10[t10][1].type); ) ;
  return t10 > 1 && "linePrefix" === e10[t10 - 2][1].type && (e10[t10][1].start = e10[t10 - 2][1].start, e10[t10 + 1][1].start = e10[t10 - 2][1].start, e10.splice(t10 - 2, 2)), e10;
}, concrete: true }, 61: ev, 95: em, 96: W, 126: W }, flowInitial: { [-2]: Y, [-1]: Y, 32: Y }, insideSpan: { null: [j, { resolveAll: function(e10, t10) {
  let n10, r2 = -1;
  for (; ++r2 <= e10.length; ) void 0 === n10 ? e10[r2] && "data" === e10[r2][1].type && (n10 = r2, r2++) : e10[r2] && "data" === e10[r2][1].type || (r2 !== n10 + 2 && (e10[n10][1].end = e10[r2 - 1][1].end, e10.splice(n10 + 2, r2 - n10 - 2), r2 = n10 + 2), n10 = void 0);
  return e10;
} }] }, string: { 38: U, 92: H }, text: { [-5]: eh, [-4]: eh, [-3]: eh, 33: ep, 38: U, 42: j, 60: [{ name: "autolink", tokenize: function(e10, t10, n10) {
  let r2 = 0;
  return function(t11) {
    return e10.enter("autolink"), e10.enter("autolinkMarker"), e10.consume(t11), e10.exit("autolinkMarker"), e10.enter("autolinkProtocol"), i2;
  };
  function i2(t11) {
    return v(t11) ? (e10.consume(t11), l2) : 64 === t11 ? n10(t11) : u2(t11);
  }
  function l2(t11) {
    return 43 === t11 || 45 === t11 || 46 === t11 || k(t11) ? (r2 = 1, function t12(n11) {
      return 58 === n11 ? (e10.consume(n11), r2 = 0, o2) : (43 === n11 || 45 === n11 || 46 === n11 || k(n11)) && r2++ < 32 ? (e10.consume(n11), t12) : (r2 = 0, u2(n11));
    }(t11)) : u2(t11);
  }
  function o2(r3) {
    return 62 === r3 ? (e10.exit("autolinkProtocol"), e10.enter("autolinkMarker"), e10.consume(r3), e10.exit("autolinkMarker"), e10.exit("autolink"), t10) : null === r3 || 32 === r3 || 60 === r3 || C(r3) ? n10(r3) : (e10.consume(r3), o2);
  }
  function u2(t11) {
    return 64 === t11 ? (e10.consume(t11), a2) : b(t11) ? (e10.consume(t11), u2) : n10(t11);
  }
  function a2(i3) {
    return k(i3) ? function i4(l3) {
      return 46 === l3 ? (e10.consume(l3), r2 = 0, a2) : 62 === l3 ? (e10.exit("autolinkProtocol").type = "autolinkEmail", e10.enter("autolinkMarker"), e10.consume(l3), e10.exit("autolinkMarker"), e10.exit("autolink"), t10) : function t11(l4) {
        if ((45 === l4 || k(l4)) && r2++ < 63) {
          let n11 = 45 === l4 ? t11 : i4;
          return e10.consume(l4), n11;
        }
        return n10(l4);
      }(l3);
    }(i3) : n10(i3);
  }
} }, { name: "htmlText", tokenize: function(e10, t10, n10) {
  let r2, i2, l2;
  let o2 = this;
  return function(t11) {
    return e10.enter("htmlText"), e10.enter("htmlTextData"), e10.consume(t11), u2;
  };
  function u2(t11) {
    return 33 === t11 ? (e10.consume(t11), a2) : 47 === t11 ? (e10.consume(t11), C2) : 63 === t11 ? (e10.consume(t11), x2) : v(t11) ? (e10.consume(t11), A2) : n10(t11);
  }
  function a2(t11) {
    return 45 === t11 ? (e10.consume(t11), c2) : 91 === t11 ? (e10.consume(t11), i2 = 0, d2) : v(t11) ? (e10.consume(t11), y2) : n10(t11);
  }
  function c2(t11) {
    return 45 === t11 ? (e10.consume(t11), p2) : n10(t11);
  }
  function s2(t11) {
    return null === t11 ? n10(t11) : 45 === t11 ? (e10.consume(t11), f2) : I(t11) ? (l2 = s2, P2(t11)) : (e10.consume(t11), s2);
  }
  function f2(t11) {
    return 45 === t11 ? (e10.consume(t11), p2) : s2(t11);
  }
  function p2(e11) {
    return 62 === e11 ? F2(e11) : 45 === e11 ? f2(e11) : s2(e11);
  }
  function d2(t11) {
    let r3 = "CDATA[";
    return t11 === r3.charCodeAt(i2++) ? (e10.consume(t11), i2 === r3.length ? h2 : d2) : n10(t11);
  }
  function h2(t11) {
    return null === t11 ? n10(t11) : 93 === t11 ? (e10.consume(t11), m2) : I(t11) ? (l2 = h2, P2(t11)) : (e10.consume(t11), h2);
  }
  function m2(t11) {
    return 93 === t11 ? (e10.consume(t11), g2) : h2(t11);
  }
  function g2(t11) {
    return 62 === t11 ? F2(t11) : 93 === t11 ? (e10.consume(t11), g2) : h2(t11);
  }
  function y2(t11) {
    return null === t11 || 62 === t11 ? F2(t11) : I(t11) ? (l2 = y2, P2(t11)) : (e10.consume(t11), y2);
  }
  function x2(t11) {
    return null === t11 ? n10(t11) : 63 === t11 ? (e10.consume(t11), b2) : I(t11) ? (l2 = x2, P2(t11)) : (e10.consume(t11), x2);
  }
  function b2(e11) {
    return 62 === e11 ? F2(e11) : x2(e11);
  }
  function C2(t11) {
    return v(t11) ? (e10.consume(t11), S2) : n10(t11);
  }
  function S2(t11) {
    return 45 === t11 || k(t11) ? (e10.consume(t11), S2) : function t12(n11) {
      return I(n11) ? (l2 = t12, P2(n11)) : L(n11) ? (e10.consume(n11), t12) : F2(n11);
    }(t11);
  }
  function A2(t11) {
    return 45 === t11 || k(t11) ? (e10.consume(t11), A2) : 47 === t11 || 62 === t11 || T(t11) ? w2(t11) : n10(t11);
  }
  function w2(t11) {
    return 47 === t11 ? (e10.consume(t11), F2) : 58 === t11 || 95 === t11 || v(t11) ? (e10.consume(t11), D2) : I(t11) ? (l2 = w2, P2(t11)) : L(t11) ? (e10.consume(t11), w2) : F2(t11);
  }
  function D2(t11) {
    return 45 === t11 || 46 === t11 || 58 === t11 || 95 === t11 || k(t11) ? (e10.consume(t11), D2) : function t12(n11) {
      return 61 === n11 ? (e10.consume(n11), O2) : I(n11) ? (l2 = t12, P2(n11)) : L(n11) ? (e10.consume(n11), t12) : w2(n11);
    }(t11);
  }
  function O2(t11) {
    return null === t11 || 60 === t11 || 61 === t11 || 62 === t11 || 96 === t11 ? n10(t11) : 34 === t11 || 39 === t11 ? (e10.consume(t11), r2 = t11, z2) : I(t11) ? (l2 = O2, P2(t11)) : L(t11) ? (e10.consume(t11), O2) : (e10.consume(t11), _2);
  }
  function z2(t11) {
    return t11 === r2 ? (e10.consume(t11), r2 = void 0, M2) : null === t11 ? n10(t11) : I(t11) ? (l2 = z2, P2(t11)) : (e10.consume(t11), z2);
  }
  function _2(t11) {
    return null === t11 || 34 === t11 || 39 === t11 || 60 === t11 || 61 === t11 || 96 === t11 ? n10(t11) : 47 === t11 || 62 === t11 || T(t11) ? w2(t11) : (e10.consume(t11), _2);
  }
  function M2(e11) {
    return 47 === e11 || 62 === e11 || T(e11) ? w2(e11) : n10(e11);
  }
  function F2(r3) {
    return 62 === r3 ? (e10.consume(r3), e10.exit("htmlTextData"), e10.exit("htmlText"), t10) : n10(r3);
  }
  function P2(t11) {
    return e10.exit("htmlTextData"), e10.enter("lineEnding"), e10.consume(t11), e10.exit("lineEnding"), N2;
  }
  function N2(t11) {
    return L(t11) ? E(e10, j2, "linePrefix", o2.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t11) : j2(t11);
  }
  function j2(t11) {
    return e10.enter("htmlTextData"), l2(t11);
  }
} }], 91: ed, 92: [{ name: "hardBreakEscape", tokenize: function(e10, t10, n10) {
  return function(t11) {
    return e10.enter("hardBreakEscape"), e10.consume(t11), r2;
  };
  function r2(r3) {
    return I(r3) ? (e10.exit("hardBreakEscape"), t10(r3)) : n10(r3);
  }
} }, H], 93: ea, 95: j, 96: { name: "codeText", tokenize: function(e10, t10, n10) {
  let r2, i2, l2 = 0;
  return function(t11) {
    return e10.enter("codeText"), e10.enter("codeTextSequence"), function t12(n11) {
      return 96 === n11 ? (e10.consume(n11), l2++, t12) : (e10.exit("codeTextSequence"), o2(n11));
    }(t11);
  };
  function o2(a2) {
    return null === a2 ? n10(a2) : 32 === a2 ? (e10.enter("space"), e10.consume(a2), e10.exit("space"), o2) : 96 === a2 ? (i2 = e10.enter("codeTextSequence"), r2 = 0, function n11(o3) {
      return 96 === o3 ? (e10.consume(o3), r2++, n11) : r2 === l2 ? (e10.exit("codeTextSequence"), e10.exit("codeText"), t10(o3)) : (i2.type = "codeTextData", u2(o3));
    }(a2)) : I(a2) ? (e10.enter("lineEnding"), e10.consume(a2), e10.exit("lineEnding"), o2) : (e10.enter("codeTextData"), u2(a2));
  }
  function u2(t11) {
    return null === t11 || 32 === t11 || 96 === t11 || I(t11) ? (e10.exit("codeTextData"), o2(t11)) : (e10.consume(t11), u2);
  }
}, resolve: function(e10) {
  let t10, n10, r2 = e10.length - 4, i2 = 3;
  if (("lineEnding" === e10[3][1].type || "space" === e10[i2][1].type) && ("lineEnding" === e10[r2][1].type || "space" === e10[r2][1].type)) {
    for (t10 = i2; ++t10 < r2; ) if ("codeTextData" === e10[t10][1].type) {
      e10[i2][1].type = "codeTextPadding", e10[r2][1].type = "codeTextPadding", i2 += 2, r2 -= 2;
      break;
    }
  }
  for (t10 = i2 - 1, r2++; ++t10 <= r2; ) void 0 === n10 ? t10 !== r2 && "lineEnding" !== e10[t10][1].type && (n10 = t10) : (t10 === r2 || "lineEnding" === e10[t10][1].type) && (e10[n10][1].type = "codeTextData", t10 !== n10 + 2 && (e10[n10][1].end = e10[t10 - 1][1].end, e10.splice(n10 + 2, t10 - n10 - 2), r2 -= t10 - n10 - 2, t10 = n10 + 2), n10 = void 0);
  return e10;
}, previous: function(e10) {
  return 96 !== e10 || "characterEscape" === this.events[this.events.length - 1][1].type;
} } } }, Symbol.toStringTag, { value: "Module" })), eI = /[\0\t\n\r]/g, eT = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function eL(e10, t10, n10) {
  if (t10) return t10;
  if (35 === n10.charCodeAt(0)) {
    let e11 = n10.charCodeAt(1), t11 = 120 === e11 || 88 === e11;
    return y(n10.slice(t11 ? 2 : 1), t11 ? 16 : 10);
  }
  return p(n10) || e10;
}
function eD(e10) {
  return e10 && "object" == typeof e10 ? "position" in e10 || "type" in e10 ? ez(e10.position) : "start" in e10 || "end" in e10 ? ez(e10) : "line" in e10 || "column" in e10 ? eO(e10) : "" : "";
}
function eO(e10) {
  return eE(e10 && e10.line) + ":" + eE(e10 && e10.column);
}
function ez(e10) {
  return eO(e10 && e10.start) + "-" + eO(e10 && e10.end);
}
function eE(e10) {
  return e10 && "number" == typeof e10 ? e10 : 1;
}
let e_ = {}.hasOwnProperty;
function eM(e10) {
  return { line: e10.line, column: e10.column, offset: e10.offset };
}
function eF(e10, t10) {
  if (e10) throw Error("Cannot close `" + e10.type + "` (" + eD({ start: e10.start, end: e10.end }) + "): a different token (`" + t10.type + "`, " + eD({ start: t10.start, end: t10.end }) + ") is open");
  throw Error("Cannot close document, a token (`" + t10.type + "`, " + eD({ start: t10.start, end: t10.end }) + ") is still open");
}
function eP(e10, t10) {
  let n10 = String(e10);
  if ("string" != typeof t10) throw TypeError("Expected character");
  let r2 = 0, i2 = n10.indexOf(t10);
  for (; -1 !== i2; ) r2++, i2 = n10.indexOf(t10, i2 + t10.length);
  return r2;
}
let eN = function(e10) {
  var t10, n10, r2;
  if (null == e10) return eR;
  if ("function" == typeof e10) {
    return t10 = e10, function(e11, n11, r3) {
      return !!(eB(e11) && t10.call(this, e11, "number" == typeof n11 ? n11 : void 0, r3 || void 0));
    };
  }
  if ("object" == typeof e10) {
    return Array.isArray(e10) ? function(e11) {
      let t11 = [], n11 = -1;
      for (; ++n11 < e11.length; ) t11[n11] = eN(e11[n11]);
      return ej(function() {
        for (var e12 = arguments.length, n12 = Array(e12), r3 = 0; r3 < e12; r3++) n12[r3] = arguments[r3];
        let i2 = -1;
        for (; ++i2 < t11.length; ) if (t11[i2].apply(this, n12)) return true;
        return false;
      });
    }(e10) : (n10 = e10, ej(function(e11) {
      let t11;
      for (t11 in n10) if (e11[t11] !== n10[t11]) return false;
      return true;
    }));
  }
  if ("string" == typeof e10) {
    return r2 = e10, ej(function(e11) {
      return e11 && e11.type === r2;
    });
  }
  throw Error("Expected function, string, or object as test");
};
function ej(e10) {
  return function(t10, n10, r2) {
    return !!(eB(t10) && e10.call(this, t10, "number" == typeof n10 ? n10 : void 0, r2 || void 0));
  };
}
function eR() {
  return true;
}
function eB(e10) {
  return null !== e10 && "object" == typeof e10 && "type" in e10;
}
let eV = [];
function eH(e10, t10, n10, r2) {
  let i2;
  "function" == typeof t10 && "function" != typeof n10 ? (r2 = n10, n10 = t10) : i2 = t10;
  let l2 = eN(i2), o2 = r2 ? -1 : 1;
  (function e11(i3, u2, a2) {
    let c2 = i3 && "object" == typeof i3 ? i3 : {};
    if ("string" == typeof c2.type) {
      let e12 = "string" == typeof c2.tagName ? c2.tagName : "string" == typeof c2.name ? c2.name : void 0;
      Object.defineProperty(s2, "name", { value: "node (" + i3.type + (e12 ? "<" + e12 + ">" : "") + ")" });
    }
    return s2;
    function s2() {
      var c3;
      let s3, f2, p2, d2 = eV;
      if ((!t10 || l2(i3, u2, a2[a2.length - 1] || void 0)) && false === (d2 = Array.isArray(c3 = n10(i3, a2)) ? c3 : "number" == typeof c3 ? [true, c3] : null == c3 ? eV : [c3])[0]) return d2;
      if ("children" in i3 && i3.children && i3.children && "skip" !== d2[0]) for (f2 = (r2 ? i3.children.length : -1) + o2, p2 = a2.concat(i3); f2 > -1 && f2 < i3.children.length; ) {
        if (false === (s3 = e11(i3.children[f2], f2, p2)())[0]) return s3;
        f2 = "number" == typeof s3[1] ? s3[1] : f2 + o2;
      }
      return d2;
    }
  })(e10, void 0, [])();
}
function eU(e10) {
  this.enter({ type: "link", title: null, url: "", children: [] }, e10);
}
function eq(e10) {
  this.config.enter.autolinkProtocol.call(this, e10);
}
function eW(e10) {
  this.config.exit.autolinkProtocol.call(this, e10);
}
function eY(e10) {
  this.config.exit.data.call(this, e10);
  let t10 = this.stack[this.stack.length - 1];
  t10.type, t10.url = "http://" + this.sliceSerialize(e10);
}
function eQ(e10) {
  this.config.exit.autolinkEmail.call(this, e10);
}
function e$(e10) {
  this.exit(e10);
}
function eK(e10) {
  !function(e11, t10, n10) {
    let r2 = eN((n10 || {}).ignore || []), i2 = function(e12) {
      let t11 = [];
      if (!Array.isArray(e12)) throw TypeError("Expected find and replace tuple or list of tuples");
      let n11 = !e12[0] || Array.isArray(e12[0]) ? e12 : [e12], r3 = -1;
      for (; ++r3 < n11.length; ) {
        var i3;
        let e13 = n11[r3];
        t11.push(["string" == typeof (i3 = e13[0]) ? RegExp(function(e14) {
          if ("string" != typeof e14) throw TypeError("Expected a string");
          return e14.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
        }(i3), "g") : i3, /* @__PURE__ */ function(e14) {
          return "function" == typeof e14 ? e14 : function() {
            return e14;
          };
        }(e13[1])]);
      }
      return t11;
    }(t10), l2 = -1;
    for (; ++l2 < i2.length; ) eH(e11, "text", o2);
    function o2(e12, t11) {
      let n11, o3 = -1;
      for (; ++o3 < t11.length; ) {
        let e13 = t11[o3], i3 = n11 ? n11.children : void 0;
        if (r2(e13, i3 ? i3.indexOf(e13) : void 0, n11)) return;
        n11 = e13;
      }
      if (n11) return function(e13, t12) {
        let n12 = t12[t12.length - 1], r3 = i2[l2][0], o4 = i2[l2][1], u2 = 0, a2 = n12.children.indexOf(e13), c2 = false, s2 = [];
        r3.lastIndex = 0;
        let f2 = r3.exec(e13.value);
        for (; f2; ) {
          let n13 = f2.index, i3 = { index: f2.index, input: f2.input, stack: [...t12, e13] }, l3 = o4(...f2, i3);
          if ("string" == typeof l3 && (l3 = l3.length > 0 ? { type: "text", value: l3 } : void 0), false === l3 ? r3.lastIndex = n13 + 1 : (u2 !== n13 && s2.push({ type: "text", value: e13.value.slice(u2, n13) }), Array.isArray(l3) ? s2.push(...l3) : l3 && s2.push(l3), u2 = n13 + f2[0].length, c2 = true), !r3.global) break;
          f2 = r3.exec(e13.value);
        }
        return c2 ? (u2 < e13.value.length && s2.push({ type: "text", value: e13.value.slice(u2) }), n12.children.splice(a2, 1, ...s2)) : s2 = [e13], a2 + s2.length;
      }(e12, t11);
    }
  }(e10, [[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, eX], [new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)", "gu"), eZ]], { ignore: ["link", "linkReference"] });
}
function eX(e10, t10, n10, r2, i2) {
  let l2 = "";
  if (!eJ(i2) || (/^w/i.test(t10) && (n10 = t10 + n10, t10 = "", l2 = "http://"), !function(e11) {
    let t11 = e11.split(".");
    return !(t11.length < 2 || t11[t11.length - 1] && (/_/.test(t11[t11.length - 1]) || !/[a-zA-Z\d]/.test(t11[t11.length - 1])) || t11[t11.length - 2] && (/_/.test(t11[t11.length - 2]) || !/[a-zA-Z\d]/.test(t11[t11.length - 2])));
  }(n10))) return false;
  let o2 = function(e11) {
    let t11 = /[!"&'),.:;<>?\]}]+$/.exec(e11);
    if (!t11) return [e11, void 0];
    e11 = e11.slice(0, t11.index);
    let n11 = t11[0], r3 = n11.indexOf(")"), i3 = eP(e11, "("), l3 = eP(e11, ")");
    for (; -1 !== r3 && i3 > l3; ) e11 += n11.slice(0, r3 + 1), r3 = (n11 = n11.slice(r3 + 1)).indexOf(")"), l3++;
    return [e11, n11];
  }(n10 + r2);
  if (!o2[0]) return false;
  let u2 = { type: "link", title: null, url: l2 + t10 + o2[0], children: [{ type: "text", value: t10 + o2[0] }] };
  return o2[1] ? [u2, { type: "text", value: o2[1] }] : u2;
}
function eZ(e10, t10, n10, r2) {
  return !(!eJ(r2, true) || /[-\d_]$/.test(n10)) && { type: "link", title: null, url: "mailto:" + t10 + "@" + n10, children: [{ type: "text", value: t10 + "@" + n10 }] };
}
function eJ(e10, t10) {
  let n10 = e10.input.charCodeAt(e10.index - 1);
  return (0 === e10.index || O(n10) || D(n10)) && (!t10 || 47 !== n10);
}
function eG(e10) {
  this.enter({ type: "footnoteDefinition", identifier: "", label: "", children: [] }, e10);
}
function e1() {
  this.buffer();
}
function e0(e10) {
  let t10 = this.resume(), n10 = this.stack[this.stack.length - 1];
  n10.type, n10.label = t10, n10.identifier = x(this.sliceSerialize(e10)).toLowerCase();
}
function e2(e10) {
  this.exit(e10);
}
function e4(e10) {
  this.enter({ type: "footnoteReference", identifier: "", label: "" }, e10);
}
function e3() {
  this.buffer();
}
function e5(e10) {
  let t10 = this.resume(), n10 = this.stack[this.stack.length - 1];
  n10.type, n10.label = t10, n10.identifier = x(this.sliceSerialize(e10)).toLowerCase();
}
function e9(e10) {
  this.exit(e10);
}
function e6(e10) {
  this.enter({ type: "delete", children: [] }, e10);
}
function e8(e10) {
  this.exit(e10);
}
function e7(e10) {
  let t10 = e10._align;
  this.enter({ type: "table", align: t10.map(function(e11) {
    return "none" === e11 ? null : e11;
  }), children: [] }, e10), this.data.inTable = true;
}
function te(e10) {
  this.exit(e10), this.data.inTable = void 0;
}
function tt(e10) {
  this.enter({ type: "tableRow", children: [] }, e10);
}
function tn(e10) {
  this.exit(e10);
}
function tr(e10) {
  this.enter({ type: "tableCell", children: [] }, e10);
}
function ti(e10) {
  let t10 = this.resume();
  this.data.inTable && (t10 = t10.replace(/\\([\\|])/g, tl));
  let n10 = this.stack[this.stack.length - 1];
  n10.type, n10.value = t10, this.exit(e10);
}
function tl(e10, t10) {
  return "|" === t10 ? t10 : e10;
}
function to(e10) {
  let t10 = this.stack[this.stack.length - 2];
  t10.type, t10.checked = "taskListCheckValueChecked" === e10.type;
}
function tu(e10) {
  let t10 = this.stack[this.stack.length - 2];
  if (t10 && "listItem" === t10.type && "boolean" == typeof t10.checked) {
    let e11 = this.stack[this.stack.length - 1];
    e11.type;
    let n10 = e11.children[0];
    if (n10 && "text" === n10.type) {
      let r2;
      let i2 = t10.children, l2 = -1;
      for (; ++l2 < i2.length; ) {
        let e12 = i2[l2];
        if ("paragraph" === e12.type) {
          r2 = e12;
          break;
        }
      }
      r2 === e11 && (n10.value = n10.value.slice(1), 0 === n10.value.length ? e11.children.shift() : e11.position && n10.position && "number" == typeof n10.position.start.offset && (n10.position.start.column++, n10.position.start.offset++, e11.position.start = Object.assign({}, n10.position.start)));
    }
  }
  this.exit(e10);
}
let ta = { tokenize: function(e10, t10, n10) {
  let r2 = 0;
  return function t11(l2) {
    return (87 === l2 || 119 === l2) && r2 < 3 ? (r2++, e10.consume(l2), t11) : 46 === l2 && 3 === r2 ? (e10.consume(l2), i2) : n10(l2);
  };
  function i2(e11) {
    return null === e11 ? n10(e11) : t10(e11);
  }
}, partial: true }, tc = { tokenize: function(e10, t10, n10) {
  let r2, i2, l2;
  return o2;
  function o2(t11) {
    return 46 === t11 || 95 === t11 ? e10.check(tf, a2, u2)(t11) : null === t11 || T(t11) || O(t11) || 45 !== t11 && D(t11) ? a2(t11) : (l2 = true, e10.consume(t11), o2);
  }
  function u2(t11) {
    return 95 === t11 ? r2 = true : (i2 = r2, r2 = void 0), e10.consume(t11), o2;
  }
  function a2(e11) {
    return i2 || r2 || !l2 ? n10(e11) : t10(e11);
  }
}, partial: true }, ts = { tokenize: function(e10, t10) {
  let n10 = 0, r2 = 0;
  return i2;
  function i2(o2) {
    return 40 === o2 ? (n10++, e10.consume(o2), i2) : 41 === o2 && r2 < n10 ? l2(o2) : 33 === o2 || 34 === o2 || 38 === o2 || 39 === o2 || 41 === o2 || 42 === o2 || 44 === o2 || 46 === o2 || 58 === o2 || 59 === o2 || 60 === o2 || 63 === o2 || 93 === o2 || 95 === o2 || 126 === o2 ? e10.check(tf, t10, l2)(o2) : null === o2 || T(o2) || O(o2) ? t10(o2) : (e10.consume(o2), i2);
  }
  function l2(t11) {
    return 41 === t11 && r2++, e10.consume(t11), i2;
  }
}, partial: true }, tf = { tokenize: function(e10, t10, n10) {
  return r2;
  function r2(o2) {
    return 33 === o2 || 34 === o2 || 39 === o2 || 41 === o2 || 42 === o2 || 44 === o2 || 46 === o2 || 58 === o2 || 59 === o2 || 63 === o2 || 95 === o2 || 126 === o2 ? (e10.consume(o2), r2) : 38 === o2 ? (e10.consume(o2), l2) : 93 === o2 ? (e10.consume(o2), i2) : 60 === o2 || null === o2 || T(o2) || O(o2) ? t10(o2) : n10(o2);
  }
  function i2(e11) {
    return null === e11 || 40 === e11 || 91 === e11 || T(e11) || O(e11) ? t10(e11) : r2(e11);
  }
  function l2(t11) {
    return v(t11) ? function t12(i3) {
      return 59 === i3 ? (e10.consume(i3), r2) : v(i3) ? (e10.consume(i3), t12) : n10(i3);
    }(t11) : n10(t11);
  }
}, partial: true }, tp = { tokenize: function(e10, t10, n10) {
  return function(t11) {
    return e10.consume(t11), r2;
  };
  function r2(e11) {
    return k(e11) ? n10(e11) : t10(e11);
  }
}, partial: true }, td = { name: "wwwAutolink", tokenize: function(e10, t10, n10) {
  let r2 = this;
  return function(t11) {
    return 87 !== t11 && 119 !== t11 || !tx.call(r2, r2.previous) || tC(r2.events) ? n10(t11) : (e10.enter("literalAutolink"), e10.enter("literalAutolinkWww"), e10.check(ta, e10.attempt(tc, e10.attempt(ts, i2), n10), n10)(t11));
  };
  function i2(n11) {
    return e10.exit("literalAutolinkWww"), e10.exit("literalAutolink"), t10(n11);
  }
}, previous: tx }, th = { name: "protocolAutolink", tokenize: function(e10, t10, n10) {
  let r2 = this, i2 = "", l2 = false;
  return function(t11) {
    return (72 === t11 || 104 === t11) && tv.call(r2, r2.previous) && !tC(r2.events) ? (e10.enter("literalAutolink"), e10.enter("literalAutolinkHttp"), i2 += String.fromCodePoint(t11), e10.consume(t11), o2) : n10(t11);
  };
  function o2(t11) {
    if (v(t11) && i2.length < 5) return i2 += String.fromCodePoint(t11), e10.consume(t11), o2;
    if (58 === t11) {
      let n11 = i2.toLowerCase();
      if ("http" === n11 || "https" === n11) return e10.consume(t11), u2;
    }
    return n10(t11);
  }
  function u2(t11) {
    return 47 === t11 ? (e10.consume(t11), l2) ? a2 : (l2 = true, u2) : n10(t11);
  }
  function a2(t11) {
    return null === t11 || C(t11) || T(t11) || O(t11) || D(t11) ? n10(t11) : e10.attempt(tc, e10.attempt(ts, c2), n10)(t11);
  }
  function c2(n11) {
    return e10.exit("literalAutolinkHttp"), e10.exit("literalAutolink"), t10(n11);
  }
}, previous: tv }, tm = { name: "emailAutolink", tokenize: function(e10, t10, n10) {
  let r2, i2;
  let l2 = this;
  return function(t11) {
    return !tb(t11) || !tk.call(l2, l2.previous) || tC(l2.events) ? n10(t11) : (e10.enter("literalAutolink"), e10.enter("literalAutolinkEmail"), function t12(r3) {
      return tb(r3) ? (e10.consume(r3), t12) : 64 === r3 ? (e10.consume(r3), o2) : n10(r3);
    }(t11));
  };
  function o2(t11) {
    return 46 === t11 ? e10.check(tp, a2, u2)(t11) : 45 === t11 || 95 === t11 || k(t11) ? (i2 = true, e10.consume(t11), o2) : a2(t11);
  }
  function u2(t11) {
    return e10.consume(t11), r2 = true, o2;
  }
  function a2(o3) {
    return i2 && r2 && v(l2.previous) ? (e10.exit("literalAutolinkEmail"), e10.exit("literalAutolink"), t10(o3)) : n10(o3);
  }
}, previous: tk }, tg = {}, ty = 48;
for (; ty < 123; ) tg[ty] = tm, 58 == ++ty ? ty = 65 : 91 === ty && (ty = 97);
function tx(e10) {
  return null === e10 || 40 === e10 || 42 === e10 || 95 === e10 || 91 === e10 || 93 === e10 || 126 === e10 || T(e10);
}
function tv(e10) {
  return !v(e10);
}
function tk(e10) {
  return !(47 === e10 || tb(e10));
}
function tb(e10) {
  return 43 === e10 || 45 === e10 || 46 === e10 || 95 === e10 || k(e10);
}
function tC(e10) {
  let t10 = e10.length, n10 = false;
  for (; t10--; ) {
    let r2 = e10[t10][1];
    if (("labelLink" === r2.type || "labelImage" === r2.type) && !r2._balanced) {
      n10 = true;
      break;
    }
    if (r2._gfmAutolinkLiteralWalkedInto) {
      n10 = false;
      break;
    }
  }
  return e10.length > 0 && !n10 && (e10[e10.length - 1][1]._gfmAutolinkLiteralWalkedInto = true), n10;
}
tg[43] = tm, tg[45] = tm, tg[46] = tm, tg[95] = tm, tg[72] = [tm, th], tg[104] = [tm, th], tg[87] = [tm, td], tg[119] = [tm, td];
let tS = { tokenize: function(e10, t10, n10) {
  let r2 = this;
  return E(e10, function(e11) {
    let i2 = r2.events[r2.events.length - 1];
    return i2 && "gfmFootnoteDefinitionIndent" === i2[1].type && 4 === i2[2].sliceSerialize(i2[1], true).length ? t10(e11) : n10(e11);
  }, "gfmFootnoteDefinitionIndent", 5);
}, partial: true };
function tA(e10, t10, n10) {
  let r2;
  let i2 = this, l2 = i2.events.length, o2 = i2.parser.gfmFootnotes || (i2.parser.gfmFootnotes = []);
  for (; l2--; ) {
    let e11 = i2.events[l2][1];
    if ("labelImage" === e11.type) {
      r2 = e11;
      break;
    }
    if ("gfmFootnoteCall" === e11.type || "labelLink" === e11.type || "label" === e11.type || "image" === e11.type || "link" === e11.type) break;
  }
  return function(l3) {
    if (!r2 || !r2._balanced) return n10(l3);
    let u2 = x(i2.sliceSerialize({ start: r2.end, end: i2.now() }));
    return 94 === u2.codePointAt(0) && o2.includes(u2.slice(1)) ? (e10.enter("gfmFootnoteCallLabelMarker"), e10.consume(l3), e10.exit("gfmFootnoteCallLabelMarker"), t10(l3)) : n10(l3);
  };
}
function tw(e10, t10) {
  let n10 = e10.length;
  for (; n10--; ) if ("labelImage" === e10[n10][1].type && "enter" === e10[n10][0]) {
    e10[n10][1];
    break;
  }
  e10[n10 + 1][1].type = "data", e10[n10 + 3][1].type = "gfmFootnoteCallLabelMarker";
  let r2 = { type: "gfmFootnoteCall", start: Object.assign({}, e10[n10 + 3][1].start), end: Object.assign({}, e10[e10.length - 1][1].end) }, i2 = { type: "gfmFootnoteCallMarker", start: Object.assign({}, e10[n10 + 3][1].end), end: Object.assign({}, e10[n10 + 3][1].end) };
  i2.end.column++, i2.end.offset++, i2.end._bufferIndex++;
  let l2 = { type: "gfmFootnoteCallString", start: Object.assign({}, i2.end), end: Object.assign({}, e10[e10.length - 1][1].start) }, o2 = { type: "chunkString", contentType: "string", start: Object.assign({}, l2.start), end: Object.assign({}, l2.end) }, u2 = [e10[n10 + 1], e10[n10 + 2], ["enter", r2, t10], e10[n10 + 3], e10[n10 + 4], ["enter", i2, t10], ["exit", i2, t10], ["enter", l2, t10], ["enter", o2, t10], ["exit", o2, t10], ["exit", l2, t10], e10[e10.length - 2], e10[e10.length - 1], ["exit", r2, t10]];
  return e10.splice(n10, e10.length - n10 + 1, ...u2), e10;
}
function tI(e10, t10, n10) {
  let r2;
  let i2 = this, l2 = i2.parser.gfmFootnotes || (i2.parser.gfmFootnotes = []), o2 = 0;
  return function(t11) {
    return e10.enter("gfmFootnoteCall"), e10.enter("gfmFootnoteCallLabelMarker"), e10.consume(t11), e10.exit("gfmFootnoteCallLabelMarker"), u2;
  };
  function u2(t11) {
    return 94 !== t11 ? n10(t11) : (e10.enter("gfmFootnoteCallMarker"), e10.consume(t11), e10.exit("gfmFootnoteCallMarker"), e10.enter("gfmFootnoteCallString"), e10.enter("chunkString").contentType = "string", a2);
  }
  function a2(u3) {
    if (o2 > 999 || 93 === u3 && !r2 || null === u3 || 91 === u3 || T(u3)) return n10(u3);
    if (93 === u3) {
      e10.exit("chunkString");
      let r3 = e10.exit("gfmFootnoteCallString");
      return l2.includes(x(i2.sliceSerialize(r3))) ? (e10.enter("gfmFootnoteCallLabelMarker"), e10.consume(u3), e10.exit("gfmFootnoteCallLabelMarker"), e10.exit("gfmFootnoteCall"), t10) : n10(u3);
    }
    return T(u3) || (r2 = true), o2++, e10.consume(u3), 92 === u3 ? c2 : a2;
  }
  function c2(t11) {
    return 91 === t11 || 92 === t11 || 93 === t11 ? (e10.consume(t11), o2++, a2) : a2(t11);
  }
}
function tT(e10, t10, n10) {
  let r2, i2;
  let l2 = this, o2 = l2.parser.gfmFootnotes || (l2.parser.gfmFootnotes = []), u2 = 0;
  return function(t11) {
    return e10.enter("gfmFootnoteDefinition")._container = true, e10.enter("gfmFootnoteDefinitionLabel"), e10.enter("gfmFootnoteDefinitionLabelMarker"), e10.consume(t11), e10.exit("gfmFootnoteDefinitionLabelMarker"), a2;
  };
  function a2(t11) {
    return 94 === t11 ? (e10.enter("gfmFootnoteDefinitionMarker"), e10.consume(t11), e10.exit("gfmFootnoteDefinitionMarker"), e10.enter("gfmFootnoteDefinitionLabelString"), e10.enter("chunkString").contentType = "string", c2) : n10(t11);
  }
  function c2(t11) {
    if (u2 > 999 || 93 === t11 && !i2 || null === t11 || 91 === t11 || T(t11)) return n10(t11);
    if (93 === t11) {
      e10.exit("chunkString");
      let n11 = e10.exit("gfmFootnoteDefinitionLabelString");
      return r2 = x(l2.sliceSerialize(n11)), e10.enter("gfmFootnoteDefinitionLabelMarker"), e10.consume(t11), e10.exit("gfmFootnoteDefinitionLabelMarker"), e10.exit("gfmFootnoteDefinitionLabel"), f2;
    }
    return T(t11) || (i2 = true), u2++, e10.consume(t11), 92 === t11 ? s2 : c2;
  }
  function s2(t11) {
    return 91 === t11 || 92 === t11 || 93 === t11 ? (e10.consume(t11), u2++, c2) : c2(t11);
  }
  function f2(t11) {
    return 58 === t11 ? (e10.enter("definitionMarker"), e10.consume(t11), e10.exit("definitionMarker"), o2.includes(r2) || o2.push(r2), E(e10, p2, "gfmFootnoteDefinitionWhitespace")) : n10(t11);
  }
  function p2(e11) {
    return t10(e11);
  }
}
function tL(e10, t10, n10) {
  return e10.check(B, t10, e10.attempt(tS, t10, n10));
}
function tD(e10) {
  e10.exit("gfmFootnoteDefinition");
}
class tO {
  constructor() {
    this.map = [];
  }
  add(e10, t10, n10) {
    !function(e11, t11, n11, r2) {
      let i2 = 0;
      if (0 !== n11 || 0 !== r2.length) {
        for (; i2 < e11.map.length; ) {
          if (e11.map[i2][0] === t11) {
            e11.map[i2][1] += n11, e11.map[i2][2].push(...r2);
            return;
          }
          i2 += 1;
        }
        e11.map.push([t11, n11, r2]);
      }
    }(this, e10, t10, n10);
  }
  consume(e10) {
    if (this.map.sort(function(e11, t11) {
      return e11[0] - t11[0];
    }), 0 === this.map.length) return;
    let t10 = this.map.length, n10 = [];
    for (; t10 > 0; ) t10 -= 1, n10.push(e10.slice(this.map[t10][0] + this.map[t10][1]), this.map[t10][2]), e10.length = this.map[t10][0];
    n10.push([...e10]), e10.length = 0;
    let r2 = n10.pop();
    for (; r2; ) e10.push(...r2), r2 = n10.pop();
    this.map.length = 0;
  }
}
function tz(e10, t10, n10) {
  let r2;
  let i2 = this, l2 = 0, o2 = 0;
  return function(e11) {
    let t11 = i2.events.length - 1;
    for (; t11 > -1; ) {
      let e12 = i2.events[t11][1].type;
      if ("lineEnding" === e12 || "linePrefix" === e12) t11--;
      else break;
    }
    let r3 = t11 > -1 ? i2.events[t11][1].type : null, l3 = "tableHead" === r3 || "tableRow" === r3 ? x2 : u2;
    return l3 === x2 && i2.parser.lazy[i2.now().line] ? n10(e11) : l3(e11);
  };
  function u2(t11) {
    var n11;
    return e10.enter("tableHead"), e10.enter("tableRow"), 124 === (n11 = t11) || (r2 = true, o2 += 1), a2(n11);
  }
  function a2(t11) {
    return null === t11 ? n10(t11) : I(t11) ? o2 > 1 ? (o2 = 0, i2.interrupt = true, e10.exit("tableRow"), e10.enter("lineEnding"), e10.consume(t11), e10.exit("lineEnding"), f2) : n10(t11) : L(t11) ? E(e10, a2, "whitespace")(t11) : (o2 += 1, r2 && (r2 = false, l2 += 1), 124 === t11) ? (e10.enter("tableCellDivider"), e10.consume(t11), e10.exit("tableCellDivider"), r2 = true, a2) : (e10.enter("data"), c2(t11));
  }
  function c2(t11) {
    return null === t11 || 124 === t11 || T(t11) ? (e10.exit("data"), a2(t11)) : (e10.consume(t11), 92 === t11 ? s2 : c2);
  }
  function s2(t11) {
    return 92 === t11 || 124 === t11 ? (e10.consume(t11), c2) : c2(t11);
  }
  function f2(t11) {
    return (i2.interrupt = false, i2.parser.lazy[i2.now().line]) ? n10(t11) : (e10.enter("tableDelimiterRow"), r2 = false, L(t11)) ? E(e10, p2, "linePrefix", i2.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t11) : p2(t11);
  }
  function p2(t11) {
    return 45 === t11 || 58 === t11 ? h2(t11) : 124 === t11 ? (r2 = true, e10.enter("tableCellDivider"), e10.consume(t11), e10.exit("tableCellDivider"), d2) : n10(t11);
  }
  function d2(t11) {
    return L(t11) ? E(e10, h2, "whitespace")(t11) : h2(t11);
  }
  function h2(t11) {
    return 58 === t11 ? (o2 += 1, r2 = true, e10.enter("tableDelimiterMarker"), e10.consume(t11), e10.exit("tableDelimiterMarker"), m2) : 45 === t11 ? (o2 += 1, m2(t11)) : null === t11 || I(t11) ? y2(t11) : n10(t11);
  }
  function m2(t11) {
    return 45 === t11 ? (e10.enter("tableDelimiterFiller"), function t12(n11) {
      return 45 === n11 ? (e10.consume(n11), t12) : 58 === n11 ? (r2 = true, e10.exit("tableDelimiterFiller"), e10.enter("tableDelimiterMarker"), e10.consume(n11), e10.exit("tableDelimiterMarker"), g2) : (e10.exit("tableDelimiterFiller"), g2(n11));
    }(t11)) : n10(t11);
  }
  function g2(t11) {
    return L(t11) ? E(e10, y2, "whitespace")(t11) : y2(t11);
  }
  function y2(i3) {
    if (124 === i3) return p2(i3);
    if (null === i3 || I(i3)) return r2 && l2 === o2 ? (e10.exit("tableDelimiterRow"), e10.exit("tableHead"), t10(i3)) : n10(i3);
    return n10(i3);
  }
  function x2(t11) {
    return e10.enter("tableRow"), v2(t11);
  }
  function v2(n11) {
    return 124 === n11 ? (e10.enter("tableCellDivider"), e10.consume(n11), e10.exit("tableCellDivider"), v2) : null === n11 || I(n11) ? (e10.exit("tableRow"), t10(n11)) : L(n11) ? E(e10, v2, "whitespace")(n11) : (e10.enter("data"), k2(n11));
  }
  function k2(t11) {
    return null === t11 || 124 === t11 || T(t11) ? (e10.exit("data"), v2(t11)) : (e10.consume(t11), 92 === t11 ? b2 : k2);
  }
  function b2(t11) {
    return 92 === t11 || 124 === t11 ? (e10.consume(t11), k2) : k2(t11);
  }
}
function tE(e10, t10) {
  let n10, r2, i2, l2 = -1, o2 = true, u2 = 0, a2 = [0, 0, 0, 0], c2 = [0, 0, 0, 0], s2 = false, f2 = 0, p2 = new tO();
  for (; ++l2 < e10.length; ) {
    let d2 = e10[l2], h2 = d2[1];
    "enter" === d2[0] ? "tableHead" === h2.type ? (s2 = false, 0 !== f2 && (tM(p2, t10, f2, n10, r2), r2 = void 0, f2 = 0), n10 = { type: "table", start: Object.assign({}, h2.start), end: Object.assign({}, h2.end) }, p2.add(l2, 0, [["enter", n10, t10]])) : "tableRow" === h2.type || "tableDelimiterRow" === h2.type ? (o2 = true, i2 = void 0, a2 = [0, 0, 0, 0], c2 = [0, l2 + 1, 0, 0], s2 && (s2 = false, r2 = { type: "tableBody", start: Object.assign({}, h2.start), end: Object.assign({}, h2.end) }, p2.add(l2, 0, [["enter", r2, t10]])), u2 = "tableDelimiterRow" === h2.type ? 2 : r2 ? 3 : 1) : u2 && ("data" === h2.type || "tableDelimiterMarker" === h2.type || "tableDelimiterFiller" === h2.type) ? (o2 = false, 0 === c2[2] && (0 !== a2[1] && (c2[0] = c2[1], i2 = t_(p2, t10, a2, u2, void 0, i2), a2 = [0, 0, 0, 0]), c2[2] = l2)) : "tableCellDivider" === h2.type && (o2 ? o2 = false : (0 !== a2[1] && (c2[0] = c2[1], i2 = t_(p2, t10, a2, u2, void 0, i2)), c2 = [(a2 = c2)[1], l2, 0, 0])) : "tableHead" === h2.type ? (s2 = true, f2 = l2) : "tableRow" === h2.type || "tableDelimiterRow" === h2.type ? (f2 = l2, 0 !== a2[1] ? (c2[0] = c2[1], i2 = t_(p2, t10, a2, u2, l2, i2)) : 0 !== c2[1] && (i2 = t_(p2, t10, c2, u2, l2, i2)), u2 = 0) : u2 && ("data" === h2.type || "tableDelimiterMarker" === h2.type || "tableDelimiterFiller" === h2.type) && (c2[3] = l2);
  }
  for (0 !== f2 && tM(p2, t10, f2, n10, r2), p2.consume(t10.events), l2 = -1; ++l2 < t10.events.length; ) {
    let e11 = t10.events[l2];
    "enter" === e11[0] && "table" === e11[1].type && (e11[1]._align = function(e12, t11) {
      let n11 = false, r3 = [];
      for (; t11 < e12.length; ) {
        let i3 = e12[t11];
        if (n11) {
          if ("enter" === i3[0]) "tableContent" === i3[1].type && r3.push("tableDelimiterMarker" === e12[t11 + 1][1].type ? "left" : "none");
          else if ("tableContent" === i3[1].type) {
            if ("tableDelimiterMarker" === e12[t11 - 1][1].type) {
              let e13 = r3.length - 1;
              r3[e13] = "left" === r3[e13] ? "center" : "right";
            }
          } else if ("tableDelimiterRow" === i3[1].type) break;
        } else "enter" === i3[0] && "tableDelimiterRow" === i3[1].type && (n11 = true);
        t11 += 1;
      }
      return r3;
    }(t10.events, l2));
  }
  return e10;
}
function t_(e10, t10, n10, r2, i2, l2) {
  0 !== n10[0] && (l2.end = Object.assign({}, tF(t10.events, n10[0])), e10.add(n10[0], 0, [["exit", l2, t10]]));
  let o2 = tF(t10.events, n10[1]);
  if (l2 = { type: 1 === r2 ? "tableHeader" : 2 === r2 ? "tableDelimiter" : "tableData", start: Object.assign({}, o2), end: Object.assign({}, o2) }, e10.add(n10[1], 0, [["enter", l2, t10]]), 0 !== n10[2]) {
    let i3 = tF(t10.events, n10[2]), l3 = tF(t10.events, n10[3]), o3 = { type: "tableContent", start: Object.assign({}, i3), end: Object.assign({}, l3) };
    if (e10.add(n10[2], 0, [["enter", o3, t10]]), 2 !== r2) {
      let r3 = t10.events[n10[2]], i4 = t10.events[n10[3]];
      if (r3[1].end = Object.assign({}, i4[1].end), r3[1].type = "chunkText", r3[1].contentType = "text", n10[3] > n10[2] + 1) {
        let t11 = n10[2] + 1, r4 = n10[3] - n10[2] - 1;
        e10.add(t11, r4, []);
      }
    }
    e10.add(n10[3] + 1, 0, [["exit", o3, t10]]);
  }
  return void 0 !== i2 && (l2.end = Object.assign({}, tF(t10.events, i2)), e10.add(i2, 0, [["exit", l2, t10]]), l2 = void 0), l2;
}
function tM(e10, t10, n10, r2, i2) {
  let l2 = [], o2 = tF(t10.events, n10);
  i2 && (i2.end = Object.assign({}, o2), l2.push(["exit", i2, t10])), r2.end = Object.assign({}, o2), l2.push(["exit", r2, t10]), e10.add(n10 + 1, 0, l2);
}
function tF(e10, t10) {
  let n10 = e10[t10], r2 = "enter" === n10[0] ? "start" : "end";
  return n10[1][r2];
}
let tP = { name: "tasklistCheck", tokenize: function(e10, t10, n10) {
  let r2 = this;
  return function(t11) {
    return null === r2.previous && r2._gfmTasklistFirstContentOfListItem ? (e10.enter("taskListCheck"), e10.enter("taskListCheckMarker"), e10.consume(t11), e10.exit("taskListCheckMarker"), i2) : n10(t11);
  };
  function i2(t11) {
    return T(t11) ? (e10.enter("taskListCheckValueUnchecked"), e10.consume(t11), e10.exit("taskListCheckValueUnchecked"), l2) : 88 === t11 || 120 === t11 ? (e10.enter("taskListCheckValueChecked"), e10.consume(t11), e10.exit("taskListCheckValueChecked"), l2) : n10(t11);
  }
  function l2(t11) {
    return 93 === t11 ? (e10.enter("taskListCheckMarker"), e10.consume(t11), e10.exit("taskListCheckMarker"), e10.exit("taskListCheck"), o2) : n10(t11);
  }
  function o2(r3) {
    return I(r3) ? t10(r3) : L(r3) ? e10.check({ tokenize: tN }, t10, n10)(r3) : n10(r3);
  }
} };
function tN(e10, t10, n10) {
  return E(e10, function(e11) {
    return null === e11 ? n10(e11) : t10(e11);
  }, "whitespace");
}
function tj(e10, t10, n10, r2, i2, l2, o2, u2, a2, c2, s2, f2, p2, d2, h2) {
  let m2, g2;
  return function(t11) {
    return e10.enter(r2), e10.enter(i2), e10.consume(t11), e10.exit(i2), y2;
  };
  function y2(t11) {
    return 35 === t11 ? (m2 = o2, x2(t11)) : 46 === t11 ? (m2 = u2, x2(t11)) : 58 === t11 || 95 === t11 || v(t11) ? (e10.enter(l2), e10.enter(a2), e10.consume(t11), S2) : h2 && L(t11) ? E(e10, y2, "whitespace")(t11) : !h2 && T(t11) ? en(e10, y2)(t11) : F2(t11);
  }
  function x2(t11) {
    let n11 = m2 + "Marker";
    return e10.enter(l2), e10.enter(m2), e10.enter(n11), e10.consume(t11), e10.exit(n11), b2;
  }
  function b2(t11) {
    if (null === t11 || 34 === t11 || 35 === t11 || 39 === t11 || 46 === t11 || 60 === t11 || 61 === t11 || 62 === t11 || 96 === t11 || 125 === t11 || T(t11)) return n10(t11);
    let r3 = m2 + "Value";
    return e10.enter(r3), e10.consume(t11), C2;
  }
  function C2(t11) {
    if (null === t11 || 34 === t11 || 39 === t11 || 60 === t11 || 61 === t11 || 62 === t11 || 96 === t11) return n10(t11);
    if (35 === t11 || 46 === t11 || 125 === t11 || T(t11)) {
      let n11 = m2 + "Value";
      return e10.exit(n11), e10.exit(m2), e10.exit(l2), y2(t11);
    }
    return e10.consume(t11), C2;
  }
  function S2(t11) {
    return 45 === t11 || 46 === t11 || 58 === t11 || 95 === t11 || k(t11) ? (e10.consume(t11), S2) : (e10.exit(a2), h2 && L(t11)) ? E(e10, A2, "whitespace")(t11) : !h2 && T(t11) ? en(e10, A2)(t11) : A2(t11);
  }
  function A2(t11) {
    return 61 === t11 ? (e10.enter(c2), e10.consume(t11), e10.exit(c2), w2) : (e10.exit(l2), y2(t11));
  }
  function w2(t11) {
    return null === t11 || 60 === t11 || 61 === t11 || 62 === t11 || 96 === t11 || 125 === t11 || h2 && I(t11) ? n10(t11) : 34 === t11 || 39 === t11 ? (e10.enter(s2), e10.enter(p2), e10.consume(t11), e10.exit(p2), g2 = t11, O2) : h2 && L(t11) ? E(e10, w2, "whitespace")(t11) : !h2 && T(t11) ? en(e10, w2)(t11) : (e10.enter(f2), e10.enter(d2), e10.consume(t11), g2 = void 0, D2);
  }
  function D2(t11) {
    return null === t11 || 34 === t11 || 39 === t11 || 60 === t11 || 61 === t11 || 62 === t11 || 96 === t11 ? n10(t11) : 125 === t11 || T(t11) ? (e10.exit(d2), e10.exit(f2), e10.exit(l2), y2(t11)) : (e10.consume(t11), D2);
  }
  function O2(t11) {
    return t11 === g2 ? (e10.enter(p2), e10.consume(t11), e10.exit(p2), e10.exit(s2), e10.exit(l2), M2) : (e10.enter(f2), z2(t11));
  }
  function z2(t11) {
    return t11 === g2 ? (e10.exit(f2), O2(t11)) : null === t11 ? n10(t11) : I(t11) ? h2 ? n10(t11) : en(e10, z2)(t11) : (e10.enter(d2), e10.consume(t11), _2);
  }
  function _2(t11) {
    return t11 === g2 || null === t11 || I(t11) ? (e10.exit(d2), z2(t11)) : (e10.consume(t11), _2);
  }
  function M2(e11) {
    return 125 === e11 || T(e11) ? y2(e11) : F2(e11);
  }
  function F2(l3) {
    return 125 === l3 ? (e10.enter(i2), e10.consume(l3), e10.exit(i2), e10.exit(r2), t10) : n10(l3);
  }
}
function tR(e10, t10, n10, r2, i2, l2, o2) {
  let u2, a2 = 0, c2 = 0;
  return function(t11) {
    return e10.enter(r2), e10.enter(i2), e10.consume(t11), e10.exit(i2), s2;
  };
  function s2(n11) {
    return 93 === n11 ? (e10.enter(i2), e10.consume(n11), e10.exit(i2), e10.exit(r2), t10) : (e10.enter(l2), f2(n11));
  }
  function f2(t11) {
    if (93 === t11 && !c2) return h2(t11);
    let n11 = e10.enter("chunkText", { contentType: "text", previous: u2 });
    return u2 && (u2.next = n11), u2 = n11, p2(t11);
  }
  function p2(t11) {
    return null === t11 || a2 > 999 || 91 === t11 && ++c2 > 32 ? n10(t11) : 93 !== t11 || c2-- ? I(t11) ? o2 ? n10(t11) : (e10.consume(t11), e10.exit("chunkText"), f2) : (e10.consume(t11), 92 === t11 ? d2 : p2) : (e10.exit("chunkText"), h2(t11));
  }
  function d2(t11) {
    return 91 === t11 || 92 === t11 || 93 === t11 ? (e10.consume(t11), a2++, p2) : p2(t11);
  }
  function h2(n11) {
    return e10.exit(l2), e10.enter(i2), e10.consume(n11), e10.exit(i2), e10.exit(r2), t10;
  }
}
function tB(e10, t10, n10, r2) {
  let i2 = this;
  return function(t11) {
    return v(t11) ? (e10.enter(r2), e10.consume(t11), l2) : n10(t11);
  };
  function l2(o2) {
    return 45 === o2 || 95 === o2 || k(o2) ? (e10.consume(o2), l2) : (e10.exit(r2), 45 === i2.previous || 95 === i2.previous ? n10(o2) : t10(o2));
  }
}
let tV = { tokenize: function(e10, t10, n10) {
  let r2;
  let i2 = this, l2 = i2.events[i2.events.length - 1], o2 = l2 && "linePrefix" === l2[1].type ? l2[2].sliceSerialize(l2[1], true).length : 0, u2 = 0;
  return function(t11) {
    return e10.enter("directiveContainer"), e10.enter("directiveContainerFence"), e10.enter("directiveContainerSequence"), function t12(r3) {
      return 58 === r3 ? (e10.consume(r3), u2++, t12) : u2 < 3 ? n10(r3) : (e10.exit("directiveContainerSequence"), tB.call(i2, e10, a2, n10, "directiveContainerName")(r3));
    }(t11);
  };
  function a2(t11) {
    return 91 === t11 ? e10.attempt(tH, c2, c2)(t11) : c2(t11);
  }
  function c2(t11) {
    return 123 === t11 ? e10.attempt(tU, s2, s2)(t11) : s2(t11);
  }
  function s2(t11) {
    return E(e10, f2, "whitespace")(t11);
  }
  function f2(r3) {
    return (e10.exit("directiveContainerFence"), null === r3) ? k2(r3) : I(r3) ? i2.interrupt ? t10(r3) : e10.attempt(tq, p2, k2)(r3) : n10(r3);
  }
  function p2(t11) {
    return null === t11 ? k2(t11) : I(t11) ? e10.check(tq, g2, k2)(t11) : (e10.enter("directiveContainerContent"), d2(t11));
  }
  function d2(t11) {
    return e10.attempt({ tokenize: b2, partial: true }, v2, o2 ? E(e10, h2, "linePrefix", o2 + 1) : h2)(t11);
  }
  function h2(t11) {
    return null === t11 ? v2(t11) : I(t11) ? e10.check(tq, m2, v2)(t11) : m2(t11);
  }
  function m2(t11) {
    let n11 = e10.enter("chunkDocument", { contentType: "document", previous: r2 });
    return r2 && (r2.next = n11), r2 = n11, function t12(n12) {
      if (null === n12) {
        let t13 = e10.exit("chunkDocument");
        return i2.parser.lazy[t13.start.line] = false, v2(n12);
      }
      return I(n12) ? e10.check(tq, y2, x2)(n12) : (e10.consume(n12), t12);
    }(t11);
  }
  function g2(t11) {
    return e10.enter("directiveContainerContent"), d2(t11);
  }
  function y2(t11) {
    e10.consume(t11);
    let n11 = e10.exit("chunkDocument");
    return i2.parser.lazy[n11.start.line] = false, d2;
  }
  function x2(t11) {
    let n11 = e10.exit("chunkDocument");
    return i2.parser.lazy[n11.start.line] = false, v2(t11);
  }
  function v2(t11) {
    return e10.exit("directiveContainerContent"), k2(t11);
  }
  function k2(n11) {
    return e10.exit("directiveContainer"), t10(n11);
  }
  function b2(e11, t11, n11) {
    let r3 = 0;
    return E(e11, function(t12) {
      return e11.enter("directiveContainerFence"), e11.enter("directiveContainerSequence"), function t13(i3) {
        return 58 === i3 ? (e11.consume(i3), r3++, t13) : r3 < u2 ? n11(i3) : (e11.exit("directiveContainerSequence"), E(e11, l3, "whitespace")(i3));
      }(t12);
    }, "linePrefix", i2.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
    function l3(r4) {
      return null === r4 || I(r4) ? (e11.exit("directiveContainerFence"), t11(r4)) : n11(r4);
    }
  }
}, concrete: true }, tH = { tokenize: function(e10, t10, n10) {
  return tR(e10, t10, n10, "directiveContainerLabel", "directiveContainerLabelMarker", "directiveContainerLabelString", true);
}, partial: true }, tU = { tokenize: function(e10, t10, n10) {
  return tj(e10, t10, n10, "directiveContainerAttributes", "directiveContainerAttributesMarker", "directiveContainerAttribute", "directiveContainerAttributeId", "directiveContainerAttributeClass", "directiveContainerAttributeName", "directiveContainerAttributeInitializerMarker", "directiveContainerAttributeValueLiteral", "directiveContainerAttributeValue", "directiveContainerAttributeValueMarker", "directiveContainerAttributeValueData", true);
}, partial: true }, tq = { tokenize: function(e10, t10, n10) {
  let r2 = this;
  return function(t11) {
    return e10.enter("lineEnding"), e10.consume(t11), e10.exit("lineEnding"), i2;
  };
  function i2(e11) {
    return r2.parser.lazy[r2.now().line] ? n10(e11) : t10(e11);
  }
}, partial: true }, tW = { tokenize: function(e10, t10, n10) {
  let r2 = this;
  return function(t11) {
    return e10.enter("directiveLeaf"), e10.enter("directiveLeafSequence"), e10.consume(t11), i2;
  };
  function i2(t11) {
    return 58 === t11 ? (e10.consume(t11), e10.exit("directiveLeafSequence"), tB.call(r2, e10, l2, n10, "directiveLeafName")) : n10(t11);
  }
  function l2(t11) {
    return 91 === t11 ? e10.attempt(tY, o2, o2)(t11) : o2(t11);
  }
  function o2(t11) {
    return 123 === t11 ? e10.attempt(tQ, u2, u2)(t11) : u2(t11);
  }
  function u2(t11) {
    return E(e10, a2, "whitespace")(t11);
  }
  function a2(r3) {
    return null === r3 || I(r3) ? (e10.exit("directiveLeaf"), t10(r3)) : n10(r3);
  }
} }, tY = { tokenize: function(e10, t10, n10) {
  return tR(e10, t10, n10, "directiveLeafLabel", "directiveLeafLabelMarker", "directiveLeafLabelString", true);
}, partial: true }, tQ = { tokenize: function(e10, t10, n10) {
  return tj(e10, t10, n10, "directiveLeafAttributes", "directiveLeafAttributesMarker", "directiveLeafAttribute", "directiveLeafAttributeId", "directiveLeafAttributeClass", "directiveLeafAttributeName", "directiveLeafAttributeInitializerMarker", "directiveLeafAttributeValueLiteral", "directiveLeafAttributeValue", "directiveLeafAttributeValueMarker", "directiveLeafAttributeValueData", true);
}, partial: true }, t$ = { tokenize: function(e10, t10, n10) {
  let r2 = this;
  return function(t11) {
    return e10.enter("directiveText"), e10.enter("directiveTextMarker"), e10.consume(t11), e10.exit("directiveTextMarker"), tB.call(r2, e10, i2, n10, "directiveTextName");
  };
  function i2(t11) {
    return 58 === t11 ? n10(t11) : 91 === t11 ? e10.attempt(tK, l2, l2)(t11) : l2(t11);
  }
  function l2(t11) {
    return 123 === t11 ? e10.attempt(tX, o2, o2)(t11) : o2(t11);
  }
  function o2(n11) {
    return e10.exit("directiveText"), t10(n11);
  }
}, previous: function(e10) {
  return 58 !== e10 || "characterEscape" === this.events[this.events.length - 1][1].type;
} }, tK = { tokenize: function(e10, t10, n10) {
  return tR(e10, t10, n10, "directiveTextLabel", "directiveTextLabelMarker", "directiveTextLabelString");
}, partial: true }, tX = { tokenize: function(e10, t10, n10) {
  return tj(e10, t10, n10, "directiveTextAttributes", "directiveTextAttributesMarker", "directiveTextAttribute", "directiveTextAttributeId", "directiveTextAttributeClass", "directiveTextAttributeName", "directiveTextAttributeInitializerMarker", "directiveTextAttributeValueLiteral", "directiveTextAttributeValue", "directiveTextAttributeValueMarker", "directiveTextAttributeValueData");
}, partial: true }, tZ = ["AElig", "AMP", "Aacute", "Acirc", "Agrave", "Aring", "Atilde", "Auml", "COPY", "Ccedil", "ETH", "Eacute", "Ecirc", "Egrave", "Euml", "GT", "Iacute", "Icirc", "Igrave", "Iuml", "LT", "Ntilde", "Oacute", "Ocirc", "Ograve", "Oslash", "Otilde", "Ouml", "QUOT", "REG", "THORN", "Uacute", "Ucirc", "Ugrave", "Uuml", "Yacute", "aacute", "acirc", "acute", "aelig", "agrave", "amp", "aring", "atilde", "auml", "brvbar", "ccedil", "cedil", "cent", "copy", "curren", "deg", "divide", "eacute", "ecirc", "egrave", "eth", "euml", "frac12", "frac14", "frac34", "gt", "iacute", "icirc", "iexcl", "igrave", "iquest", "iuml", "laquo", "lt", "macr", "micro", "middot", "nbsp", "not", "ntilde", "oacute", "ocirc", "ograve", "ordf", "ordm", "oslash", "otilde", "ouml", "para", "plusmn", "pound", "quot", "raquo", "reg", "sect", "shy", "sup1", "sup2", "sup3", "szlig", "thorn", "times", "uacute", "ucirc", "ugrave", "uml", "uuml", "yacute", "yen", "yuml"], tJ = { 0: "�", 128: "€", 130: "‚", 131: "ƒ", 132: "„", 133: "…", 134: "†", 135: "‡", 136: "ˆ", 137: "‰", 138: "Š", 139: "‹", 140: "Œ", 142: "Ž", 145: "‘", 146: "’", 147: "“", 148: "”", 149: "•", 150: "–", 151: "—", 152: "˜", 153: "™", 154: "š", 155: "›", 156: "œ", 158: "ž", 159: "Ÿ" };
function tG(e10) {
  let t10 = "string" == typeof e10 ? e10.charCodeAt(0) : e10;
  return t10 >= 48 && t10 <= 57;
}
function t1(e10) {
  let t10 = "string" == typeof e10 ? e10.charCodeAt(0) : e10;
  return t10 >= 97 && t10 <= 102 || t10 >= 65 && t10 <= 70 || t10 >= 48 && t10 <= 57;
}
function t0(e10) {
  return function(e11) {
    let t10 = "string" == typeof e11 ? e11.charCodeAt(0) : e11;
    return t10 >= 97 && t10 <= 122 || t10 >= 65 && t10 <= 90;
  }(e10) || tG(e10);
}
let t2 = String.fromCharCode, t4 = ["", "Named character references must be terminated by a semicolon", "Numeric character references must be terminated by a semicolon", "Named character references cannot be empty", "Numeric character references cannot be empty", "Named character references must be known", "Numeric character references cannot be disallowed", "Numeric character references cannot be outside the permissible Unicode range"];
function t3(e10) {
  let t10, n10, r2, i2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, l2 = "string" == typeof i2.additional ? i2.additional.charCodeAt(0) : i2.additional, o2 = [], u2 = 0, a2 = -1, c2 = "";
  i2.position && ("start" in i2.position || "indent" in i2.position ? (n10 = i2.position.indent, t10 = i2.position.start) : t10 = i2.position);
  let s2 = (t10 ? t10.line : 0) || 1, f2 = (t10 ? t10.column : 0) || 1, d2 = g2();
  for (u2--; ++u2 <= e10.length; ) if (10 === r2 && (f2 = (n10 ? n10[a2] : 0) || 1), 38 === (r2 = e10.charCodeAt(u2))) {
    let t11;
    let n11 = e10.charCodeAt(u2 + 1);
    if (9 === n11 || 10 === n11 || 12 === n11 || 32 === n11 || 38 === n11 || 60 === n11 || Number.isNaN(n11) || l2 && n11 === l2) {
      c2 += t2(r2), f2++;
      continue;
    }
    let a3 = u2 + 1, s3 = a3, v2 = a3;
    if (35 === n11) {
      v2 = ++s3;
      let n12 = e10.charCodeAt(v2);
      88 === n12 || 120 === n12 ? (t11 = "hexadecimal", v2 = ++s3) : t11 = "decimal";
    } else t11 = "named";
    let k2 = "", b2 = "", C2 = "", S2 = "named" === t11 ? t0 : "decimal" === t11 ? tG : t1;
    for (v2--; ++v2 <= e10.length; ) {
      let n12 = e10.charCodeAt(v2);
      if (!S2(n12)) break;
      C2 += t2(n12), "named" === t11 && tZ.includes(C2) && (k2 = C2, b2 = p(C2));
    }
    let A2 = 59 === e10.charCodeAt(v2);
    if (A2) {
      v2++;
      let e11 = "named" === t11 && p(C2);
      e11 && (k2 = C2, b2 = e11);
    }
    let w2 = 1 + v2 - a3, I2 = "";
    if (A2 || false !== i2.nonTerminated) {
      if (C2) {
        if ("named" === t11) {
          if (A2 && !b2) y2(5, 1);
          else if (k2 !== C2 && (w2 = 1 + (v2 = s3 + k2.length) - s3, A2 = false), !A2) {
            let t12 = k2 ? 1 : 3;
            if (i2.attribute) {
              let n12 = e10.charCodeAt(v2);
              61 === n12 ? (y2(t12, w2), b2 = "") : t0(n12) ? b2 = "" : y2(t12, w2);
            } else y2(t12, w2);
          }
          I2 = b2;
        } else {
          var h2, m2;
          A2 || y2(2, w2);
          let e11 = Number.parseInt(C2, "hexadecimal" === t11 ? 16 : 10);
          if ((h2 = e11) >= 55296 && h2 <= 57343 || h2 > 1114111) y2(7, w2), I2 = t2(65533);
          else if (e11 in tJ) y2(6, w2), I2 = tJ[e11];
          else {
            let t12 = "";
            ((m2 = e11) >= 1 && m2 <= 8 || 11 === m2 || m2 >= 13 && m2 <= 31 || m2 >= 127 && m2 <= 159 || m2 >= 64976 && m2 <= 65007 || (65535 & m2) == 65535 || (65535 & m2) == 65534) && y2(6, w2), e11 > 65535 && (e11 -= 65536, t12 += t2(e11 >>> 10 | 55296), e11 = 56320 | 1023 & e11), I2 = t12 + t2(e11);
          }
        }
      } else "named" !== t11 && y2(4, w2);
    }
    if (I2) {
      x2(), d2 = g2(), u2 = v2 - 1, f2 += v2 - a3 + 1, o2.push(I2);
      let t12 = g2();
      t12.offset++, i2.reference && i2.reference.call(i2.referenceContext, I2, { start: d2, end: t12 }, e10.slice(a3 - 1, v2)), d2 = t12;
    } else C2 = e10.slice(a3 - 1, v2), c2 += C2, f2 += C2.length, u2 = v2 - 1;
  } else 10 === r2 && (s2++, a2++, f2 = 0), Number.isNaN(r2) ? x2() : (c2 += t2(r2), f2++);
  return o2.join("");
  function g2() {
    return { line: s2, column: f2, offset: u2 + ((t10 ? t10.offset : 0) || 0) };
  }
  function y2(e11, t11) {
    let n11;
    i2.warning && (n11 = g2(), n11.column += t11, n11.offset += t11, i2.warning.call(i2.warningContext, t4[e11], n11, e11));
  }
  function x2() {
    c2 && (o2.push(c2), i2.text && i2.text.call(i2.textContext, c2, { start: d2, end: g2() }), c2 = "");
  }
}
function t5(e10) {
  t8.call(this, "containerDirective", e10);
}
function t9(e10) {
  t8.call(this, "leafDirective", e10);
}
function t6(e10) {
  t8.call(this, "textDirective", e10);
}
function t8(e10, t10) {
  this.enter({ type: e10, name: "", attributes: {}, children: [] }, t10);
}
function t7(e10) {
  let t10 = this.stack[this.stack.length - 1];
  "containerDirective" === t10.type || "leafDirective" === t10.type || t10.type, t10.name = this.sliceSerialize(e10);
}
function ne(e10) {
  this.enter({ type: "paragraph", data: { directiveLabel: true }, children: [] }, e10);
}
function nt(e10) {
  this.exit(e10);
}
function nn() {
  this.data.directiveAttributes = [], this.buffer();
}
function nr(e10) {
  this.data.directiveAttributes.push(["id", t3(this.sliceSerialize(e10), { attribute: true })]);
}
function ni(e10) {
  this.data.directiveAttributes.push(["class", t3(this.sliceSerialize(e10), { attribute: true })]);
}
function nl(e10) {
  let t10 = this.data.directiveAttributes;
  t10[t10.length - 1][1] = t3(this.sliceSerialize(e10), { attribute: true });
}
function no(e10) {
  this.data.directiveAttributes.push([this.sliceSerialize(e10), ""]);
}
function nu() {
  let e10 = this.data.directiveAttributes, t10 = {}, n10 = -1;
  for (; ++n10 < e10.length; ) {
    let r3 = e10[n10];
    "class" === r3[0] && t10.class ? t10.class += " " + r3[1] : t10[r3[0]] = r3[1];
  }
  this.data.directiveAttributes = void 0, this.resume();
  let r2 = this.stack[this.stack.length - 1];
  "containerDirective" === r2.type || "leafDirective" === r2.type || r2.type, r2.attributes = t10;
}
function na(e10) {
  this.exit(e10);
}
let nc = (e10) => {
  var t10, n10;
  let r2, i2, l2, o2;
  return "string" != typeof (t10 = { extensions: [g([{ text: tg }, { document: { 91: { name: "gfmFootnoteDefinition", tokenize: tT, continuation: { tokenize: tL }, exit: tD } }, text: { 91: { name: "gfmFootnoteCall", tokenize: tI }, 93: { name: "gfmPotentialFootnoteCall", add: "after", tokenize: tA, resolveTo: tw } } }, function(e11) {
    let t11;
    let n11 = { name: "strikethrough", tokenize: function(e12, n12, r3) {
      let i3 = this.previous, l3 = this.events, o3 = 0;
      return function(u2) {
        return 126 === i3 && "characterEscape" !== l3[l3.length - 1][1].type ? r3(u2) : (e12.enter("strikethroughSequenceTemporary"), function l4(u3) {
          let a2 = P(i3);
          if (126 === u3) return o3 > 1 ? r3(u3) : (e12.consume(u3), o3++, l4);
          if (o3 < 2 && !t11) return r3(u3);
          let c2 = e12.exit("strikethroughSequenceTemporary"), s2 = P(u3);
          return c2._open = !s2 || 2 === s2 && !!a2, c2._close = !a2 || 2 === a2 && !!s2, n12(u3);
        }(u2));
      };
    }, resolveAll: function(e12, t12) {
      let n12 = -1;
      for (; ++n12 < e12.length; ) if ("enter" === e12[n12][0] && "strikethroughSequenceTemporary" === e12[n12][1].type && e12[n12][1]._close) {
        let r3 = n12;
        for (; r3--; ) if ("exit" === e12[r3][0] && "strikethroughSequenceTemporary" === e12[r3][1].type && e12[r3][1]._open && e12[n12][1].end.offset - e12[n12][1].start.offset == e12[r3][1].end.offset - e12[r3][1].start.offset) {
          e12[n12][1].type = "strikethroughSequence", e12[r3][1].type = "strikethroughSequence";
          let i3 = { type: "strikethrough", start: Object.assign({}, e12[r3][1].start), end: Object.assign({}, e12[n12][1].end) }, l3 = { type: "strikethroughText", start: Object.assign({}, e12[r3][1].end), end: Object.assign({}, e12[n12][1].start) }, o3 = [["enter", i3, t12], ["enter", e12[r3][1], t12], ["exit", e12[r3][1], t12], ["enter", l3, t12]], u2 = t12.parser.constructs.insideSpan.null;
          u2 && d(o3, o3.length, 0, N(u2, e12.slice(r3 + 1, n12), t12)), d(o3, o3.length, 0, [["exit", l3, t12], ["enter", e12[n12][1], t12], ["exit", e12[n12][1], t12], ["exit", i3, t12]]), d(e12, r3 - 1, n12 - r3 + 3, o3), n12 = r3 + o3.length - 2;
          break;
        }
      }
      for (n12 = -1; ++n12 < e12.length; ) "strikethroughSequenceTemporary" === e12[n12][1].type && (e12[n12][1].type = "data");
      return e12;
    } };
    return null == t11 && (t11 = true), { text: { 126: n11 }, insideSpan: { null: [n11] }, attentionMarkers: { null: [126] } };
  }(), { flow: { null: { name: "table", tokenize: tz, resolveAll: tE } } }, { text: { 91: tP } }]), { text: { 58: t$ }, flow: { 58: [tV, tW] } }], mdastExtensions: [[{ transforms: [eK], enter: { literalAutolink: eU, literalAutolinkEmail: eq, literalAutolinkHttp: eq, literalAutolinkWww: eq }, exit: { literalAutolink: e$, literalAutolinkEmail: eQ, literalAutolinkHttp: eW, literalAutolinkWww: eY } }, { enter: { gfmFootnoteDefinition: eG, gfmFootnoteDefinitionLabelString: e1, gfmFootnoteCall: e4, gfmFootnoteCallString: e3 }, exit: { gfmFootnoteDefinition: e2, gfmFootnoteDefinitionLabelString: e0, gfmFootnoteCall: e9, gfmFootnoteCallString: e5 } }, { canContainEols: ["delete"], enter: { strikethrough: e6 }, exit: { strikethrough: e8 } }, { enter: { table: e7, tableData: tr, tableHeader: tr, tableRow: tt }, exit: { codeText: ti, table: te, tableData: tn, tableHeader: tn, tableRow: tn } }, { exit: { taskListCheckValueChecked: to, taskListCheckValueUnchecked: to, paragraph: tu } }], { canContainEols: ["textDirective"], enter: { directiveContainer: t5, directiveContainerAttributes: nn, directiveContainerLabel: ne, directiveLeaf: t9, directiveLeafAttributes: nn, directiveText: t6, directiveTextAttributes: nn }, exit: { directiveContainer: na, directiveContainerAttributeClassValue: ni, directiveContainerAttributeIdValue: nr, directiveContainerAttributeName: no, directiveContainerAttributeValue: nl, directiveContainerAttributes: nu, directiveContainerLabel: nt, directiveContainerName: t7, directiveLeaf: na, directiveLeafAttributeClassValue: ni, directiveLeafAttributeIdValue: nr, directiveLeafAttributeName: no, directiveLeafAttributeValue: nl, directiveLeafAttributes: nu, directiveLeafName: t7, directiveText: na, directiveTextAttributeClassValue: ni, directiveTextAttributeIdValue: nr, directiveTextAttributeName: no, directiveTextAttributeValue: nl, directiveTextAttributes: nu, directiveTextName: t7 } }] }) && (n10 = t10, t10 = void 0), function(e11) {
    var t11, n11, r3, i3, l3, o3, u2, s2, f2, d2, h2, m2, g2, v2, k2, b2, C2, S2, A2, w2, I2, T2, L2, D2, O2, z2, E2, _2, M2, F2, P2, N2, j2, R2, B2, V2, H2, U2, q2, W2, Y2, Q2, $2, K2, X2, Z2, J2, G2, ee2, et2, en2, er2, ei2, el2, eo2, eu2, ea2, ec2, es2, ef2, ep2, ed2, eh2;
    let em2 = { transforms: [], canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"], enter: { autolink: (t11 = eE2, function(e12) {
      ex2.call(this, t11(e12), e12);
    }), autolinkProtocol: eb2, autolinkEmail: eb2, atxHeading: (r3 = eI2, function(e12) {
      ex2.call(this, r3(e12), e12);
    }), blockQuote: (l3 = function() {
      return { type: "blockquote", children: [] };
    }, function(e12) {
      ex2.call(this, l3(e12), e12);
    }), characterEscape: eb2, characterReference: eb2, codeFenced: (u2 = ew2, function(e12) {
      ex2.call(this, u2(e12), e12);
    }), codeFencedFenceInfo: ey2, codeFencedFenceMeta: ey2, codeIndented: (f2 = ew2, d2 = ey2, function(e12) {
      ex2.call(this, f2(e12), e12), d2 && d2.call(this, e12);
    }), codeText: (h2 = function() {
      return { type: "inlineCode", value: "" };
    }, m2 = ey2, function(e12) {
      ex2.call(this, h2(e12), e12), m2 && m2.call(this, e12);
    }), codeTextData: eb2, data: eb2, codeFlowValue: eb2, definition: (g2 = function() {
      return { type: "definition", identifier: "", label: null, title: null, url: "" };
    }, function(e12) {
      ex2.call(this, g2(e12), e12);
    }), definitionDestinationString: ey2, definitionLabelString: ey2, definitionTitleString: ey2, emphasis: (k2 = function() {
      return { type: "emphasis", children: [] };
    }, function(e12) {
      ex2.call(this, k2(e12), e12);
    }), hardBreakEscape: (C2 = eO2, function(e12) {
      ex2.call(this, C2(e12), e12);
    }), hardBreakTrailing: (A2 = eO2, function(e12) {
      ex2.call(this, A2(e12), e12);
    }), htmlFlow: (I2 = ez2, T2 = ey2, function(e12) {
      ex2.call(this, I2(e12), e12), T2 && T2.call(this, e12);
    }), htmlFlowData: eb2, htmlText: (L2 = ez2, D2 = ey2, function(e12) {
      ex2.call(this, L2(e12), e12), D2 && D2.call(this, e12);
    }), htmlTextData: eb2, image: (O2 = function() {
      return { type: "image", title: null, url: "", alt: null };
    }, function(e12) {
      ex2.call(this, O2(e12), e12);
    }), label: ey2, link: (E2 = eE2, function(e12) {
      ex2.call(this, E2(e12), e12);
    }), listItem: (M2 = function(e12) {
      return { type: "listItem", spread: e12._spread, checked: null, children: [] };
    }, function(e12) {
      ex2.call(this, M2(e12), e12);
    }), listItemValue: function(e12) {
      this.data.expectingFirstListItemValue && (this.stack[this.stack.length - 2].start = Number.parseInt(this.sliceSerialize(e12), 10), this.data.expectingFirstListItemValue = void 0);
    }, listOrdered: (P2 = eP2, N2 = function() {
      this.data.expectingFirstListItemValue = true;
    }, function(e12) {
      ex2.call(this, P2(e12), e12), N2 && N2.call(this, e12);
    }), listUnordered: (j2 = eP2, function(e12) {
      ex2.call(this, j2(e12), e12);
    }), paragraph: (B2 = function() {
      return { type: "paragraph", children: [] };
    }, function(e12) {
      ex2.call(this, B2(e12), e12);
    }), reference: function() {
      this.data.referenceType = "collapsed";
    }, referenceString: ey2, resourceDestinationString: ey2, resourceTitleString: ey2, setextHeading: (H2 = eI2, function(e12) {
      ex2.call(this, H2(e12), e12);
    }), strong: (q2 = function() {
      return { type: "strong", children: [] };
    }, function(e12) {
      ex2.call(this, q2(e12), e12);
    }), thematicBreak: (Y2 = function() {
      return { type: "thematicBreak" };
    }, function(e12) {
      ex2.call(this, Y2(e12), e12);
    }) }, exit: { atxHeading: function(e12) {
      ev2.call(this, e12);
    }, atxHeadingSequence: function(e12) {
      let t12 = this.stack[this.stack.length - 1];
      if (!t12.depth) {
        let n12 = this.sliceSerialize(e12).length;
        t12.depth = n12;
      }
    }, autolink: function(e12) {
      ev2.call(this, e12);
    }, autolinkEmail: function(e12) {
      eC2.call(this, e12), this.stack[this.stack.length - 1].url = "mailto:" + this.sliceSerialize(e12);
    }, autolinkProtocol: function(e12) {
      eC2.call(this, e12), this.stack[this.stack.length - 1].url = this.sliceSerialize(e12);
    }, blockQuote: function(e12) {
      ev2.call(this, e12);
    }, characterEscapeValue: eC2, characterReferenceMarkerHexadecimal: eA2, characterReferenceMarkerNumeric: eA2, characterReferenceValue: function(e12) {
      let t12;
      let n12 = this.sliceSerialize(e12), r4 = this.data.characterReferenceType;
      r4 ? (t12 = y(n12, "characterReferenceMarkerNumeric" === r4 ? 10 : 16), this.data.characterReferenceType = void 0) : t12 = p(n12);
      let i4 = this.stack[this.stack.length - 1];
      i4.value += t12;
    }, characterReference: function(e12) {
      this.stack.pop().position.end = eM(e12.end);
    }, codeFenced: (Z2 = function() {
      let e12 = this.resume();
      this.stack[this.stack.length - 1].value = e12.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
    }, function(e12) {
      Z2 && Z2.call(this, e12), ev2.call(this, e12);
    }), codeFencedFence: function() {
      this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = true);
    }, codeFencedFenceInfo: function() {
      let e12 = this.resume();
      this.stack[this.stack.length - 1].lang = e12;
    }, codeFencedFenceMeta: function() {
      let e12 = this.resume();
      this.stack[this.stack.length - 1].meta = e12;
    }, codeFlowValue: eC2, codeIndented: (J2 = function() {
      let e12 = this.resume();
      this.stack[this.stack.length - 1].value = e12.replace(/(\r?\n|\r)$/g, "");
    }, function(e12) {
      J2 && J2.call(this, e12), ev2.call(this, e12);
    }), codeText: (G2 = function() {
      let e12 = this.resume();
      this.stack[this.stack.length - 1].value = e12;
    }, function(e12) {
      G2 && G2.call(this, e12), ev2.call(this, e12);
    }), codeTextData: eC2, data: eC2, definition: function(e12) {
      ev2.call(this, e12);
    }, definitionDestinationString: function() {
      let e12 = this.resume();
      this.stack[this.stack.length - 1].url = e12;
    }, definitionLabelString: function(e12) {
      let t12 = this.resume(), n12 = this.stack[this.stack.length - 1];
      n12.label = t12, n12.identifier = x(this.sliceSerialize(e12)).toLowerCase();
    }, definitionTitleString: function() {
      let e12 = this.resume();
      this.stack[this.stack.length - 1].title = e12;
    }, emphasis: function(e12) {
      ev2.call(this, e12);
    }, hardBreakEscape: (en2 = eS2, function(e12) {
      en2 && en2.call(this, e12), ev2.call(this, e12);
    }), hardBreakTrailing: (er2 = eS2, function(e12) {
      er2 && er2.call(this, e12), ev2.call(this, e12);
    }), htmlFlow: (ei2 = function() {
      let e12 = this.resume();
      this.stack[this.stack.length - 1].value = e12;
    }, function(e12) {
      ei2 && ei2.call(this, e12), ev2.call(this, e12);
    }), htmlFlowData: eC2, htmlText: (el2 = function() {
      let e12 = this.resume();
      this.stack[this.stack.length - 1].value = e12;
    }, function(e12) {
      el2 && el2.call(this, e12), ev2.call(this, e12);
    }), htmlTextData: eC2, image: (eo2 = function() {
      let e12 = this.stack[this.stack.length - 1];
      if (this.data.inReference) {
        let t12 = this.data.referenceType || "shortcut";
        e12.type += "Reference", e12.referenceType = t12, delete e12.url, delete e12.title;
      } else delete e12.identifier, delete e12.label;
      this.data.referenceType = void 0;
    }, function(e12) {
      eo2 && eo2.call(this, e12), ev2.call(this, e12);
    }), label: function() {
      let e12 = this.stack[this.stack.length - 1], t12 = this.resume(), n12 = this.stack[this.stack.length - 1];
      if (this.data.inReference = true, "link" === n12.type) {
        let t13 = e12.children;
        n12.children = t13;
      } else n12.alt = t12;
    }, labelText: function(e12) {
      let t12 = this.sliceSerialize(e12), n12 = this.stack[this.stack.length - 2];
      n12.label = t12.replace(eT, eL), n12.identifier = x(t12).toLowerCase();
    }, lineEnding: function(e12) {
      let t12 = this.stack[this.stack.length - 1];
      if (this.data.atHardBreak) {
        t12.children[t12.children.length - 1].position.end = eM(e12.end), this.data.atHardBreak = void 0;
        return;
      }
      !this.data.setextHeadingSlurpLineEnding && em2.canContainEols.includes(t12.type) && (eb2.call(this, e12), eC2.call(this, e12));
    }, link: (eu2 = function() {
      let e12 = this.stack[this.stack.length - 1];
      if (this.data.inReference) {
        let t12 = this.data.referenceType || "shortcut";
        e12.type += "Reference", e12.referenceType = t12, delete e12.url, delete e12.title;
      } else delete e12.identifier, delete e12.label;
      this.data.referenceType = void 0;
    }, function(e12) {
      eu2 && eu2.call(this, e12), ev2.call(this, e12);
    }), listItem: function(e12) {
      ev2.call(this, e12);
    }, listOrdered: function(e12) {
      ev2.call(this, e12);
    }, listUnordered: function(e12) {
      ev2.call(this, e12);
    }, paragraph: function(e12) {
      ev2.call(this, e12);
    }, referenceString: function(e12) {
      let t12 = this.resume(), n12 = this.stack[this.stack.length - 1];
      n12.label = t12, n12.identifier = x(this.sliceSerialize(e12)).toLowerCase(), this.data.referenceType = "full";
    }, resourceDestinationString: function() {
      let e12 = this.resume();
      this.stack[this.stack.length - 1].url = e12;
    }, resourceTitleString: function() {
      let e12 = this.resume();
      this.stack[this.stack.length - 1].title = e12;
    }, resource: function() {
      this.data.inReference = void 0;
    }, setextHeading: (ep2 = function() {
      this.data.setextHeadingSlurpLineEnding = void 0;
    }, function(e12) {
      ep2 && ep2.call(this, e12), ev2.call(this, e12);
    }), setextHeadingLineSequence: function(e12) {
      this.stack[this.stack.length - 1].depth = 61 === this.sliceSerialize(e12).codePointAt(0) ? 1 : 2;
    }, setextHeadingText: function() {
      this.data.setextHeadingSlurpLineEnding = true;
    }, strong: function(e12) {
      ev2.call(this, e12);
    }, thematicBreak: function(e12) {
      ev2.call(this, e12);
    } } };
    (function e12(t12, n12) {
      let r4 = -1;
      for (; ++r4 < n12.length; ) {
        let i4 = n12[r4];
        Array.isArray(i4) ? e12(t12, i4) : function(e13, t13) {
          let n13;
          for (n13 in t13) if (e_.call(t13, n13)) switch (n13) {
            case "canContainEols": {
              let r5 = t13[n13];
              r5 && e13[n13].push(...r5);
              break;
            }
            case "transforms": {
              let r5 = t13[n13];
              r5 && e13[n13].push(...r5);
              break;
            }
            case "enter":
            case "exit": {
              let r5 = t13[n13];
              r5 && Object.assign(e13[n13], r5);
            }
          }
        }(t12, i4);
      }
    })(em2, (e11 || {}).mdastExtensions || []);
    let eg2 = {};
    return function(e12) {
      let t12 = { type: "root", children: [] }, n12 = { stack: [t12], tokenStack: [], config: em2, enter: ex2, exit: ev2, buffer: ey2, resume: ek2, data: eg2 }, r4 = [], i4 = -1;
      for (; ++i4 < e12.length; ) ("listOrdered" === e12[i4][1].type || "listUnordered" === e12[i4][1].type) && ("enter" === e12[i4][0] ? r4.push(i4) : i4 = function(e13, t13, n13) {
        let r5, i5, l4, o4, u3 = t13 - 1, a2 = -1, c2 = false;
        for (; ++u3 <= n13; ) {
          let t14 = e13[u3];
          switch (t14[1].type) {
            case "listUnordered":
            case "listOrdered":
            case "blockQuote":
              "enter" === t14[0] ? a2++ : a2--, o4 = void 0;
              break;
            case "lineEndingBlank":
              "enter" === t14[0] && (!r5 || o4 || a2 || l4 || (l4 = u3), o4 = void 0);
              break;
            case "linePrefix":
            case "listItemValue":
            case "listItemMarker":
            case "listItemPrefix":
            case "listItemPrefixWhitespace":
              break;
            default:
              o4 = void 0;
          }
          if (!a2 && "enter" === t14[0] && "listItemPrefix" === t14[1].type || -1 === a2 && "exit" === t14[0] && ("listUnordered" === t14[1].type || "listOrdered" === t14[1].type)) {
            if (r5) {
              let o5 = u3;
              for (i5 = void 0; o5--; ) {
                let t15 = e13[o5];
                if ("lineEnding" === t15[1].type || "lineEndingBlank" === t15[1].type) {
                  if ("exit" === t15[0]) continue;
                  i5 && (e13[i5][1].type = "lineEndingBlank", c2 = true), t15[1].type = "lineEnding", i5 = o5;
                } else if ("linePrefix" === t15[1].type || "blockQuotePrefix" === t15[1].type || "blockQuotePrefixWhitespace" === t15[1].type || "blockQuoteMarker" === t15[1].type || "listItemIndent" === t15[1].type) ;
                else break;
              }
              l4 && (!i5 || l4 < i5) && (r5._spread = true), r5.end = Object.assign({}, i5 ? e13[i5][1].start : t14[1].end), e13.splice(i5 || u3, 0, ["exit", r5, t14[2]]), u3++, n13++;
            }
            if ("listItemPrefix" === t14[1].type) {
              let i6 = { type: "listItem", _spread: false, start: Object.assign({}, t14[1].start), end: void 0 };
              r5 = i6, e13.splice(u3, 0, ["enter", i6, t14[2]]), u3++, n13++, l4 = void 0, o4 = true;
            }
          }
        }
        return e13[t13][1]._spread = c2, n13;
      }(e12, r4.pop(), i4));
      for (i4 = -1; ++i4 < e12.length; ) {
        let t13 = em2[e12[i4][0]];
        e_.call(t13, e12[i4][1].type) && t13[e12[i4][1].type].call(Object.assign({ sliceSerialize: e12[i4][2].sliceSerialize }, n12), e12[i4][1]);
      }
      if (n12.tokenStack.length > 0) {
        let e13 = n12.tokenStack[n12.tokenStack.length - 1];
        (e13[1] || eF).call(n12, void 0, e13[0]);
      }
      for (t12.position = { start: eM(e12.length > 0 ? e12[0][1].start : { line: 1, column: 1, offset: 0 }), end: eM(e12.length > 0 ? e12[e12.length - 2][1].end : { line: 1, column: 1, offset: 0 }) }, i4 = -1; ++i4 < em2.transforms.length; ) t12 = em2.transforms[i4](t12) || t12;
      return t12;
    };
    function ey2() {
      this.stack.push({ type: "fragment", children: [] });
    }
    function ex2(e12, t12, n12) {
      this.stack[this.stack.length - 1].children.push(e12), this.stack.push(e12), this.tokenStack.push([t12, n12 || void 0]), e12.position = { start: eM(t12.start), end: void 0 };
    }
    function ev2(e12, t12) {
      let n12 = this.stack.pop(), r4 = this.tokenStack.pop();
      if (r4) r4[0].type !== e12.type && (t12 ? t12.call(this, e12, r4[0]) : (r4[1] || eF).call(this, e12, r4[0]));
      else throw Error("Cannot close `" + e12.type + "` (" + eD({ start: e12.start, end: e12.end }) + "): it’s not open");
      n12.position.end = eM(e12.end);
    }
    function ek2() {
      var e12;
      return c(this.stack.pop(), "boolean" != typeof a.includeImageAlt || a.includeImageAlt, "boolean" != typeof a.includeHtml || a.includeHtml);
    }
    function eb2(e12) {
      let t12 = this.stack[this.stack.length - 1].children, n12 = t12[t12.length - 1];
      n12 && "text" === n12.type || ((n12 = { type: "text", value: "" }).position = { start: eM(e12.start), end: void 0 }, t12.push(n12)), this.stack.push(n12);
    }
    function eC2(e12) {
      let t12 = this.stack.pop();
      t12.value += this.sliceSerialize(e12), t12.position.end = eM(e12.end);
    }
    function eS2() {
      this.data.atHardBreak = true;
    }
    function eA2(e12) {
      this.data.characterReferenceType = e12.type;
    }
    function ew2() {
      return { type: "code", lang: null, meta: null, value: "" };
    }
    function eI2() {
      return { type: "heading", depth: 0, children: [] };
    }
    function eO2() {
      return { type: "break" };
    }
    function ez2() {
      return { type: "html", value: "" };
    }
    function eE2() {
      return { type: "link", title: null, url: "", children: [] };
    }
    function eP2(e12) {
      return { type: "list", ordered: "listOrdered" === e12.type, start: null, spread: e12._spread, children: [] };
    }
  }(n10)(function(e11) {
    for (; !X(e11); ) ;
    return e11;
  }(function(e11) {
    var t11, n11, r3, i3, l3;
    let o3 = { defined: [], lazy: {}, constructs: g([ew, ...(e11 || {}).extensions || []]), content: (t11 = _, function(e12) {
      return function(e13, t12, n12) {
        let r4 = Object.assign(n12 ? Object.assign({}, n12) : { line: 1, column: 1, offset: 0 }, { _index: 0, _bufferIndex: -1 }), i4 = {}, l4 = [], o4 = [], u2 = [], a2 = { consume: function(e14) {
          I(e14) ? (r4.line++, r4.column = 1, r4.offset += -3 === e14 ? 2 : 1, k2()) : -1 !== e14 && (r4.column++, r4.offset++), r4._bufferIndex < 0 ? r4._index++ : (r4._bufferIndex++, r4._bufferIndex === o4[r4._index].length && (r4._bufferIndex = -1, r4._index++)), c2.previous = e14;
        }, enter: function(e14, t13) {
          let n13 = t13 || {};
          return n13.type = e14, n13.start = p2(), c2.events.push(["enter", n13, c2]), u2.push(n13), n13;
        }, exit: function(e14) {
          let t13 = u2.pop();
          return t13.end = p2(), c2.events.push(["exit", t13, c2]), t13;
        }, attempt: y2(function(e14, t13) {
          x2(e14, t13.from);
        }), check: y2(g2), interrupt: y2(g2, { interrupt: true }) }, c2 = { previous: null, code: null, containerState: {}, events: [], parser: e13, sliceStream: f2, sliceSerialize: function(e14, t13) {
          return function(e15, t14) {
            let n13, r5 = -1, i5 = [];
            for (; ++r5 < e15.length; ) {
              let l5;
              let o5 = e15[r5];
              if ("string" == typeof o5) l5 = o5;
              else switch (o5) {
                case -5:
                  l5 = "\r";
                  break;
                case -4:
                  l5 = "\n";
                  break;
                case -3:
                  l5 = "\r\n";
                  break;
                case -2:
                  l5 = t14 ? " " : "	";
                  break;
                case -1:
                  if (!t14 && n13) continue;
                  l5 = " ";
                  break;
                default:
                  l5 = String.fromCharCode(o5);
              }
              n13 = -2 === o5, i5.push(l5);
            }
            return i5.join("");
          }(f2(e14), t13);
        }, now: p2, defineSkip: function(e14) {
          i4[e14.line] = e14.column, k2();
        }, write: function(e14) {
          return (o4 = h(o4, e14), function() {
            let e15;
            for (; r4._index < o4.length; ) {
              let t13 = o4[r4._index];
              if ("string" == typeof t13) for (e15 = r4._index, r4._bufferIndex < 0 && (r4._bufferIndex = 0); r4._index === e15 && r4._bufferIndex < t13.length; ) (function(e16) {
                s2 = s2(e16);
              })(t13.charCodeAt(r4._bufferIndex));
              else (function(e16) {
                s2 = s2(e16);
              })(t13);
            }
          }(), null !== o4[o4.length - 1]) ? [] : (x2(t12, 0), c2.events = N(l4, c2.events, c2), c2.events);
        } }, s2 = t12.tokenize.call(c2, a2);
        return t12.resolveAll && l4.push(t12), c2;
        function f2(e14) {
          return function(e15, t13) {
            let n13;
            let r5 = t13.start._index, i5 = t13.start._bufferIndex, l5 = t13.end._index, o5 = t13.end._bufferIndex;
            if (r5 === l5) n13 = [e15[r5].slice(i5, o5)];
            else {
              if (n13 = e15.slice(r5, l5), i5 > -1) {
                let e16 = n13[0];
                "string" == typeof e16 ? n13[0] = e16.slice(i5) : n13.shift();
              }
              o5 > 0 && n13.push(e15[l5].slice(0, o5));
            }
            return n13;
          }(o4, e14);
        }
        function p2() {
          let { line: e14, column: t13, offset: n13, _index: i5, _bufferIndex: l5 } = r4;
          return { line: e14, column: t13, offset: n13, _index: i5, _bufferIndex: l5 };
        }
        function m2(e14) {
          s2 = s2(e14);
        }
        function g2(e14, t13) {
          t13.restore();
        }
        function y2(e14, t13) {
          return function(n13, r5, i5) {
            var l5;
            let o5, u3, s3, f3;
            return Array.isArray(n13) ? p3(n13) : "tokenize" in n13 ? p3([n13]) : (l5 = n13, function(e15) {
              let t14 = null !== e15 && l5[e15], n14 = null !== e15 && l5.null;
              return p3([...Array.isArray(t14) ? t14 : t14 ? [t14] : [], ...Array.isArray(n14) ? n14 : n14 ? [n14] : []])(e15);
            });
            function p3(e15) {
              return (o5 = e15, u3 = 0, 0 === e15.length) ? i5 : /* @__PURE__ */ function(e16) {
                return function(n14) {
                  return (f3 = v2(), s3 = e16, e16.partial || (c2.currentConstruct = e16), e16.name && c2.parser.constructs.disable.null.includes(e16.name)) ? h2() : e16.tokenize.call(t13 ? Object.assign(Object.create(c2), t13) : c2, a2, d2, h2)(n14);
                };
              }(e15[u3]);
            }
            function d2(t14) {
              return e14(s3, f3), r5;
            }
            function h2(e15) {
              if (f3.restore(), ++u3 < o5.length) {
                var n14;
                return n14 = o5[u3], function(e16) {
                  return (f3 = v2(), s3 = n14, n14.partial || (c2.currentConstruct = n14), n14.name && c2.parser.constructs.disable.null.includes(n14.name)) ? h2() : n14.tokenize.call(t13 ? Object.assign(Object.create(c2), t13) : c2, a2, d2, h2)(e16);
                };
              }
              return i5;
            }
          };
        }
        function x2(e14, t13) {
          e14.resolveAll && !l4.includes(e14) && l4.push(e14), e14.resolve && d(c2.events, t13, c2.events.length - t13, e14.resolve(c2.events.slice(t13), c2)), e14.resolveTo && (c2.events = e14.resolveTo(c2.events, c2));
        }
        function v2() {
          let e14 = p2(), t13 = c2.previous, n13 = c2.currentConstruct, i5 = c2.events.length, l5 = Array.from(u2);
          return { restore: function() {
            r4 = e14, c2.previous = t13, c2.currentConstruct = n13, c2.events.length = i5, u2 = l5, k2();
          }, from: i5 };
        }
        function k2() {
          r4.line in i4 && r4.column < 2 && (r4.column = i4[r4.line], r4.offset += i4[r4.line] - 1);
        }
      }(o3, t11, e12);
    }), document: (n11 = M, function(e12) {
      return function(e13, t12, n12) {
        let r4 = Object.assign(n12 ? Object.assign({}, n12) : { line: 1, column: 1, offset: 0 }, { _index: 0, _bufferIndex: -1 }), i4 = {}, l4 = [], o4 = [], u2 = [], a2 = { consume: function(e14) {
          I(e14) ? (r4.line++, r4.column = 1, r4.offset += -3 === e14 ? 2 : 1, k2()) : -1 !== e14 && (r4.column++, r4.offset++), r4._bufferIndex < 0 ? r4._index++ : (r4._bufferIndex++, r4._bufferIndex === o4[r4._index].length && (r4._bufferIndex = -1, r4._index++)), c2.previous = e14;
        }, enter: function(e14, t13) {
          let n13 = t13 || {};
          return n13.type = e14, n13.start = p2(), c2.events.push(["enter", n13, c2]), u2.push(n13), n13;
        }, exit: function(e14) {
          let t13 = u2.pop();
          return t13.end = p2(), c2.events.push(["exit", t13, c2]), t13;
        }, attempt: y2(function(e14, t13) {
          x2(e14, t13.from);
        }), check: y2(g2), interrupt: y2(g2, { interrupt: true }) }, c2 = { previous: null, code: null, containerState: {}, events: [], parser: e13, sliceStream: f2, sliceSerialize: function(e14, t13) {
          return function(e15, t14) {
            let n13, r5 = -1, i5 = [];
            for (; ++r5 < e15.length; ) {
              let l5;
              let o5 = e15[r5];
              if ("string" == typeof o5) l5 = o5;
              else switch (o5) {
                case -5:
                  l5 = "\r";
                  break;
                case -4:
                  l5 = "\n";
                  break;
                case -3:
                  l5 = "\r\n";
                  break;
                case -2:
                  l5 = t14 ? " " : "	";
                  break;
                case -1:
                  if (!t14 && n13) continue;
                  l5 = " ";
                  break;
                default:
                  l5 = String.fromCharCode(o5);
              }
              n13 = -2 === o5, i5.push(l5);
            }
            return i5.join("");
          }(f2(e14), t13);
        }, now: p2, defineSkip: function(e14) {
          i4[e14.line] = e14.column, k2();
        }, write: function(e14) {
          return (o4 = h(o4, e14), function() {
            let e15;
            for (; r4._index < o4.length; ) {
              let t13 = o4[r4._index];
              if ("string" == typeof t13) for (e15 = r4._index, r4._bufferIndex < 0 && (r4._bufferIndex = 0); r4._index === e15 && r4._bufferIndex < t13.length; ) (function(e16) {
                s2 = s2(e16);
              })(t13.charCodeAt(r4._bufferIndex));
              else (function(e16) {
                s2 = s2(e16);
              })(t13);
            }
          }(), null !== o4[o4.length - 1]) ? [] : (x2(t12, 0), c2.events = N(l4, c2.events, c2), c2.events);
        } }, s2 = t12.tokenize.call(c2, a2);
        return t12.resolveAll && l4.push(t12), c2;
        function f2(e14) {
          return function(e15, t13) {
            let n13;
            let r5 = t13.start._index, i5 = t13.start._bufferIndex, l5 = t13.end._index, o5 = t13.end._bufferIndex;
            if (r5 === l5) n13 = [e15[r5].slice(i5, o5)];
            else {
              if (n13 = e15.slice(r5, l5), i5 > -1) {
                let e16 = n13[0];
                "string" == typeof e16 ? n13[0] = e16.slice(i5) : n13.shift();
              }
              o5 > 0 && n13.push(e15[l5].slice(0, o5));
            }
            return n13;
          }(o4, e14);
        }
        function p2() {
          let { line: e14, column: t13, offset: n13, _index: i5, _bufferIndex: l5 } = r4;
          return { line: e14, column: t13, offset: n13, _index: i5, _bufferIndex: l5 };
        }
        function m2(e14) {
          s2 = s2(e14);
        }
        function g2(e14, t13) {
          t13.restore();
        }
        function y2(e14, t13) {
          return function(n13, r5, i5) {
            var l5;
            let o5, u3, s3, f3;
            return Array.isArray(n13) ? p3(n13) : "tokenize" in n13 ? p3([n13]) : (l5 = n13, function(e15) {
              let t14 = null !== e15 && l5[e15], n14 = null !== e15 && l5.null;
              return p3([...Array.isArray(t14) ? t14 : t14 ? [t14] : [], ...Array.isArray(n14) ? n14 : n14 ? [n14] : []])(e15);
            });
            function p3(e15) {
              return (o5 = e15, u3 = 0, 0 === e15.length) ? i5 : /* @__PURE__ */ function(e16) {
                return function(n14) {
                  return (f3 = v2(), s3 = e16, e16.partial || (c2.currentConstruct = e16), e16.name && c2.parser.constructs.disable.null.includes(e16.name)) ? h2() : e16.tokenize.call(t13 ? Object.assign(Object.create(c2), t13) : c2, a2, d2, h2)(n14);
                };
              }(e15[u3]);
            }
            function d2(t14) {
              return e14(s3, f3), r5;
            }
            function h2(e15) {
              if (f3.restore(), ++u3 < o5.length) {
                var n14;
                return n14 = o5[u3], function(e16) {
                  return (f3 = v2(), s3 = n14, n14.partial || (c2.currentConstruct = n14), n14.name && c2.parser.constructs.disable.null.includes(n14.name)) ? h2() : n14.tokenize.call(t13 ? Object.assign(Object.create(c2), t13) : c2, a2, d2, h2)(e16);
                };
              }
              return i5;
            }
          };
        }
        function x2(e14, t13) {
          e14.resolveAll && !l4.includes(e14) && l4.push(e14), e14.resolve && d(c2.events, t13, c2.events.length - t13, e14.resolve(c2.events.slice(t13), c2)), e14.resolveTo && (c2.events = e14.resolveTo(c2.events, c2));
        }
        function v2() {
          let e14 = p2(), t13 = c2.previous, n13 = c2.currentConstruct, i5 = c2.events.length, l5 = Array.from(u2);
          return { restore: function() {
            r4 = e14, c2.previous = t13, c2.currentConstruct = n13, c2.events.length = i5, u2 = l5, k2();
          }, from: i5 };
        }
        function k2() {
          r4.line in i4 && r4.column < 2 && (r4.column = i4[r4.line], r4.offset += i4[r4.line] - 1);
        }
      }(o3, n11, e12);
    }), flow: (r3 = ek, function(e12) {
      return function(e13, t12, n12) {
        let r4 = Object.assign(n12 ? Object.assign({}, n12) : { line: 1, column: 1, offset: 0 }, { _index: 0, _bufferIndex: -1 }), i4 = {}, l4 = [], o4 = [], u2 = [], a2 = { consume: function(e14) {
          I(e14) ? (r4.line++, r4.column = 1, r4.offset += -3 === e14 ? 2 : 1, k2()) : -1 !== e14 && (r4.column++, r4.offset++), r4._bufferIndex < 0 ? r4._index++ : (r4._bufferIndex++, r4._bufferIndex === o4[r4._index].length && (r4._bufferIndex = -1, r4._index++)), c2.previous = e14;
        }, enter: function(e14, t13) {
          let n13 = t13 || {};
          return n13.type = e14, n13.start = p2(), c2.events.push(["enter", n13, c2]), u2.push(n13), n13;
        }, exit: function(e14) {
          let t13 = u2.pop();
          return t13.end = p2(), c2.events.push(["exit", t13, c2]), t13;
        }, attempt: y2(function(e14, t13) {
          x2(e14, t13.from);
        }), check: y2(g2), interrupt: y2(g2, { interrupt: true }) }, c2 = { previous: null, code: null, containerState: {}, events: [], parser: e13, sliceStream: f2, sliceSerialize: function(e14, t13) {
          return function(e15, t14) {
            let n13, r5 = -1, i5 = [];
            for (; ++r5 < e15.length; ) {
              let l5;
              let o5 = e15[r5];
              if ("string" == typeof o5) l5 = o5;
              else switch (o5) {
                case -5:
                  l5 = "\r";
                  break;
                case -4:
                  l5 = "\n";
                  break;
                case -3:
                  l5 = "\r\n";
                  break;
                case -2:
                  l5 = t14 ? " " : "	";
                  break;
                case -1:
                  if (!t14 && n13) continue;
                  l5 = " ";
                  break;
                default:
                  l5 = String.fromCharCode(o5);
              }
              n13 = -2 === o5, i5.push(l5);
            }
            return i5.join("");
          }(f2(e14), t13);
        }, now: p2, defineSkip: function(e14) {
          i4[e14.line] = e14.column, k2();
        }, write: function(e14) {
          return (o4 = h(o4, e14), function() {
            let e15;
            for (; r4._index < o4.length; ) {
              let t13 = o4[r4._index];
              if ("string" == typeof t13) for (e15 = r4._index, r4._bufferIndex < 0 && (r4._bufferIndex = 0); r4._index === e15 && r4._bufferIndex < t13.length; ) (function(e16) {
                s2 = s2(e16);
              })(t13.charCodeAt(r4._bufferIndex));
              else (function(e16) {
                s2 = s2(e16);
              })(t13);
            }
          }(), null !== o4[o4.length - 1]) ? [] : (x2(t12, 0), c2.events = N(l4, c2.events, c2), c2.events);
        } }, s2 = t12.tokenize.call(c2, a2);
        return t12.resolveAll && l4.push(t12), c2;
        function f2(e14) {
          return function(e15, t13) {
            let n13;
            let r5 = t13.start._index, i5 = t13.start._bufferIndex, l5 = t13.end._index, o5 = t13.end._bufferIndex;
            if (r5 === l5) n13 = [e15[r5].slice(i5, o5)];
            else {
              if (n13 = e15.slice(r5, l5), i5 > -1) {
                let e16 = n13[0];
                "string" == typeof e16 ? n13[0] = e16.slice(i5) : n13.shift();
              }
              o5 > 0 && n13.push(e15[l5].slice(0, o5));
            }
            return n13;
          }(o4, e14);
        }
        function p2() {
          let { line: e14, column: t13, offset: n13, _index: i5, _bufferIndex: l5 } = r4;
          return { line: e14, column: t13, offset: n13, _index: i5, _bufferIndex: l5 };
        }
        function m2(e14) {
          s2 = s2(e14);
        }
        function g2(e14, t13) {
          t13.restore();
        }
        function y2(e14, t13) {
          return function(n13, r5, i5) {
            var l5;
            let o5, u3, s3, f3;
            return Array.isArray(n13) ? p3(n13) : "tokenize" in n13 ? p3([n13]) : (l5 = n13, function(e15) {
              let t14 = null !== e15 && l5[e15], n14 = null !== e15 && l5.null;
              return p3([...Array.isArray(t14) ? t14 : t14 ? [t14] : [], ...Array.isArray(n14) ? n14 : n14 ? [n14] : []])(e15);
            });
            function p3(e15) {
              return (o5 = e15, u3 = 0, 0 === e15.length) ? i5 : /* @__PURE__ */ function(e16) {
                return function(n14) {
                  return (f3 = v2(), s3 = e16, e16.partial || (c2.currentConstruct = e16), e16.name && c2.parser.constructs.disable.null.includes(e16.name)) ? h2() : e16.tokenize.call(t13 ? Object.assign(Object.create(c2), t13) : c2, a2, d2, h2)(n14);
                };
              }(e15[u3]);
            }
            function d2(t14) {
              return e14(s3, f3), r5;
            }
            function h2(e15) {
              if (f3.restore(), ++u3 < o5.length) {
                var n14;
                return n14 = o5[u3], function(e16) {
                  return (f3 = v2(), s3 = n14, n14.partial || (c2.currentConstruct = n14), n14.name && c2.parser.constructs.disable.null.includes(n14.name)) ? h2() : n14.tokenize.call(t13 ? Object.assign(Object.create(c2), t13) : c2, a2, d2, h2)(e16);
                };
              }
              return i5;
            }
          };
        }
        function x2(e14, t13) {
          e14.resolveAll && !l4.includes(e14) && l4.push(e14), e14.resolve && d(c2.events, t13, c2.events.length - t13, e14.resolve(c2.events.slice(t13), c2)), e14.resolveTo && (c2.events = e14.resolveTo(c2.events, c2));
        }
        function v2() {
          let e14 = p2(), t13 = c2.previous, n13 = c2.currentConstruct, i5 = c2.events.length, l5 = Array.from(u2);
          return { restore: function() {
            r4 = e14, c2.previous = t13, c2.currentConstruct = n13, c2.events.length = i5, u2 = l5, k2();
          }, from: i5 };
        }
        function k2() {
          r4.line in i4 && r4.column < 2 && (r4.column = i4[r4.line], r4.offset += i4[r4.line] - 1);
        }
      }(o3, r3, e12);
    }), string: (i3 = eb, function(e12) {
      return function(e13, t12, n12) {
        let r4 = Object.assign(n12 ? Object.assign({}, n12) : { line: 1, column: 1, offset: 0 }, { _index: 0, _bufferIndex: -1 }), i4 = {}, l4 = [], o4 = [], u2 = [], a2 = { consume: function(e14) {
          I(e14) ? (r4.line++, r4.column = 1, r4.offset += -3 === e14 ? 2 : 1, k2()) : -1 !== e14 && (r4.column++, r4.offset++), r4._bufferIndex < 0 ? r4._index++ : (r4._bufferIndex++, r4._bufferIndex === o4[r4._index].length && (r4._bufferIndex = -1, r4._index++)), c2.previous = e14;
        }, enter: function(e14, t13) {
          let n13 = t13 || {};
          return n13.type = e14, n13.start = p2(), c2.events.push(["enter", n13, c2]), u2.push(n13), n13;
        }, exit: function(e14) {
          let t13 = u2.pop();
          return t13.end = p2(), c2.events.push(["exit", t13, c2]), t13;
        }, attempt: y2(function(e14, t13) {
          x2(e14, t13.from);
        }), check: y2(g2), interrupt: y2(g2, { interrupt: true }) }, c2 = { previous: null, code: null, containerState: {}, events: [], parser: e13, sliceStream: f2, sliceSerialize: function(e14, t13) {
          return function(e15, t14) {
            let n13, r5 = -1, i5 = [];
            for (; ++r5 < e15.length; ) {
              let l5;
              let o5 = e15[r5];
              if ("string" == typeof o5) l5 = o5;
              else switch (o5) {
                case -5:
                  l5 = "\r";
                  break;
                case -4:
                  l5 = "\n";
                  break;
                case -3:
                  l5 = "\r\n";
                  break;
                case -2:
                  l5 = t14 ? " " : "	";
                  break;
                case -1:
                  if (!t14 && n13) continue;
                  l5 = " ";
                  break;
                default:
                  l5 = String.fromCharCode(o5);
              }
              n13 = -2 === o5, i5.push(l5);
            }
            return i5.join("");
          }(f2(e14), t13);
        }, now: p2, defineSkip: function(e14) {
          i4[e14.line] = e14.column, k2();
        }, write: function(e14) {
          return (o4 = h(o4, e14), function() {
            let e15;
            for (; r4._index < o4.length; ) {
              let t13 = o4[r4._index];
              if ("string" == typeof t13) for (e15 = r4._index, r4._bufferIndex < 0 && (r4._bufferIndex = 0); r4._index === e15 && r4._bufferIndex < t13.length; ) (function(e16) {
                s2 = s2(e16);
              })(t13.charCodeAt(r4._bufferIndex));
              else (function(e16) {
                s2 = s2(e16);
              })(t13);
            }
          }(), null !== o4[o4.length - 1]) ? [] : (x2(t12, 0), c2.events = N(l4, c2.events, c2), c2.events);
        } }, s2 = t12.tokenize.call(c2, a2);
        return t12.resolveAll && l4.push(t12), c2;
        function f2(e14) {
          return function(e15, t13) {
            let n13;
            let r5 = t13.start._index, i5 = t13.start._bufferIndex, l5 = t13.end._index, o5 = t13.end._bufferIndex;
            if (r5 === l5) n13 = [e15[r5].slice(i5, o5)];
            else {
              if (n13 = e15.slice(r5, l5), i5 > -1) {
                let e16 = n13[0];
                "string" == typeof e16 ? n13[0] = e16.slice(i5) : n13.shift();
              }
              o5 > 0 && n13.push(e15[l5].slice(0, o5));
            }
            return n13;
          }(o4, e14);
        }
        function p2() {
          let { line: e14, column: t13, offset: n13, _index: i5, _bufferIndex: l5 } = r4;
          return { line: e14, column: t13, offset: n13, _index: i5, _bufferIndex: l5 };
        }
        function m2(e14) {
          s2 = s2(e14);
        }
        function g2(e14, t13) {
          t13.restore();
        }
        function y2(e14, t13) {
          return function(n13, r5, i5) {
            var l5;
            let o5, u3, s3, f3;
            return Array.isArray(n13) ? p3(n13) : "tokenize" in n13 ? p3([n13]) : (l5 = n13, function(e15) {
              let t14 = null !== e15 && l5[e15], n14 = null !== e15 && l5.null;
              return p3([...Array.isArray(t14) ? t14 : t14 ? [t14] : [], ...Array.isArray(n14) ? n14 : n14 ? [n14] : []])(e15);
            });
            function p3(e15) {
              return (o5 = e15, u3 = 0, 0 === e15.length) ? i5 : /* @__PURE__ */ function(e16) {
                return function(n14) {
                  return (f3 = v2(), s3 = e16, e16.partial || (c2.currentConstruct = e16), e16.name && c2.parser.constructs.disable.null.includes(e16.name)) ? h2() : e16.tokenize.call(t13 ? Object.assign(Object.create(c2), t13) : c2, a2, d2, h2)(n14);
                };
              }(e15[u3]);
            }
            function d2(t14) {
              return e14(s3, f3), r5;
            }
            function h2(e15) {
              if (f3.restore(), ++u3 < o5.length) {
                var n14;
                return n14 = o5[u3], function(e16) {
                  return (f3 = v2(), s3 = n14, n14.partial || (c2.currentConstruct = n14), n14.name && c2.parser.constructs.disable.null.includes(n14.name)) ? h2() : n14.tokenize.call(t13 ? Object.assign(Object.create(c2), t13) : c2, a2, d2, h2)(e16);
                };
              }
              return i5;
            }
          };
        }
        function x2(e14, t13) {
          e14.resolveAll && !l4.includes(e14) && l4.push(e14), e14.resolve && d(c2.events, t13, c2.events.length - t13, e14.resolve(c2.events.slice(t13), c2)), e14.resolveTo && (c2.events = e14.resolveTo(c2.events, c2));
        }
        function v2() {
          let e14 = p2(), t13 = c2.previous, n13 = c2.currentConstruct, i5 = c2.events.length, l5 = Array.from(u2);
          return { restore: function() {
            r4 = e14, c2.previous = t13, c2.currentConstruct = n13, c2.events.length = i5, u2 = l5, k2();
          }, from: i5 };
        }
        function k2() {
          r4.line in i4 && r4.column < 2 && (r4.column = i4[r4.line], r4.offset += i4[r4.line] - 1);
        }
      }(o3, i3, e12);
    }), text: (l3 = eC, function(e12) {
      return function(e13, t12, n12) {
        let r4 = Object.assign(n12 ? Object.assign({}, n12) : { line: 1, column: 1, offset: 0 }, { _index: 0, _bufferIndex: -1 }), i4 = {}, l4 = [], o4 = [], u2 = [], a2 = { consume: function(e14) {
          I(e14) ? (r4.line++, r4.column = 1, r4.offset += -3 === e14 ? 2 : 1, k2()) : -1 !== e14 && (r4.column++, r4.offset++), r4._bufferIndex < 0 ? r4._index++ : (r4._bufferIndex++, r4._bufferIndex === o4[r4._index].length && (r4._bufferIndex = -1, r4._index++)), c2.previous = e14;
        }, enter: function(e14, t13) {
          let n13 = t13 || {};
          return n13.type = e14, n13.start = p2(), c2.events.push(["enter", n13, c2]), u2.push(n13), n13;
        }, exit: function(e14) {
          let t13 = u2.pop();
          return t13.end = p2(), c2.events.push(["exit", t13, c2]), t13;
        }, attempt: y2(function(e14, t13) {
          x2(e14, t13.from);
        }), check: y2(g2), interrupt: y2(g2, { interrupt: true }) }, c2 = { previous: null, code: null, containerState: {}, events: [], parser: e13, sliceStream: f2, sliceSerialize: function(e14, t13) {
          return function(e15, t14) {
            let n13, r5 = -1, i5 = [];
            for (; ++r5 < e15.length; ) {
              let l5;
              let o5 = e15[r5];
              if ("string" == typeof o5) l5 = o5;
              else switch (o5) {
                case -5:
                  l5 = "\r";
                  break;
                case -4:
                  l5 = "\n";
                  break;
                case -3:
                  l5 = "\r\n";
                  break;
                case -2:
                  l5 = t14 ? " " : "	";
                  break;
                case -1:
                  if (!t14 && n13) continue;
                  l5 = " ";
                  break;
                default:
                  l5 = String.fromCharCode(o5);
              }
              n13 = -2 === o5, i5.push(l5);
            }
            return i5.join("");
          }(f2(e14), t13);
        }, now: p2, defineSkip: function(e14) {
          i4[e14.line] = e14.column, k2();
        }, write: function(e14) {
          return (o4 = h(o4, e14), function() {
            let e15;
            for (; r4._index < o4.length; ) {
              let t13 = o4[r4._index];
              if ("string" == typeof t13) for (e15 = r4._index, r4._bufferIndex < 0 && (r4._bufferIndex = 0); r4._index === e15 && r4._bufferIndex < t13.length; ) (function(e16) {
                s2 = s2(e16);
              })(t13.charCodeAt(r4._bufferIndex));
              else (function(e16) {
                s2 = s2(e16);
              })(t13);
            }
          }(), null !== o4[o4.length - 1]) ? [] : (x2(t12, 0), c2.events = N(l4, c2.events, c2), c2.events);
        } }, s2 = t12.tokenize.call(c2, a2);
        return t12.resolveAll && l4.push(t12), c2;
        function f2(e14) {
          return function(e15, t13) {
            let n13;
            let r5 = t13.start._index, i5 = t13.start._bufferIndex, l5 = t13.end._index, o5 = t13.end._bufferIndex;
            if (r5 === l5) n13 = [e15[r5].slice(i5, o5)];
            else {
              if (n13 = e15.slice(r5, l5), i5 > -1) {
                let e16 = n13[0];
                "string" == typeof e16 ? n13[0] = e16.slice(i5) : n13.shift();
              }
              o5 > 0 && n13.push(e15[l5].slice(0, o5));
            }
            return n13;
          }(o4, e14);
        }
        function p2() {
          let { line: e14, column: t13, offset: n13, _index: i5, _bufferIndex: l5 } = r4;
          return { line: e14, column: t13, offset: n13, _index: i5, _bufferIndex: l5 };
        }
        function m2(e14) {
          s2 = s2(e14);
        }
        function g2(e14, t13) {
          t13.restore();
        }
        function y2(e14, t13) {
          return function(n13, r5, i5) {
            var l5;
            let o5, u3, s3, f3;
            return Array.isArray(n13) ? p3(n13) : "tokenize" in n13 ? p3([n13]) : (l5 = n13, function(e15) {
              let t14 = null !== e15 && l5[e15], n14 = null !== e15 && l5.null;
              return p3([...Array.isArray(t14) ? t14 : t14 ? [t14] : [], ...Array.isArray(n14) ? n14 : n14 ? [n14] : []])(e15);
            });
            function p3(e15) {
              return (o5 = e15, u3 = 0, 0 === e15.length) ? i5 : /* @__PURE__ */ function(e16) {
                return function(n14) {
                  return (f3 = v2(), s3 = e16, e16.partial || (c2.currentConstruct = e16), e16.name && c2.parser.constructs.disable.null.includes(e16.name)) ? h2() : e16.tokenize.call(t13 ? Object.assign(Object.create(c2), t13) : c2, a2, d2, h2)(n14);
                };
              }(e15[u3]);
            }
            function d2(t14) {
              return e14(s3, f3), r5;
            }
            function h2(e15) {
              if (f3.restore(), ++u3 < o5.length) {
                var n14;
                return n14 = o5[u3], function(e16) {
                  return (f3 = v2(), s3 = n14, n14.partial || (c2.currentConstruct = n14), n14.name && c2.parser.constructs.disable.null.includes(n14.name)) ? h2() : n14.tokenize.call(t13 ? Object.assign(Object.create(c2), t13) : c2, a2, d2, h2)(e16);
                };
              }
              return i5;
            }
          };
        }
        function x2(e14, t13) {
          e14.resolveAll && !l4.includes(e14) && l4.push(e14), e14.resolve && d(c2.events, t13, c2.events.length - t13, e14.resolve(c2.events.slice(t13), c2)), e14.resolveTo && (c2.events = e14.resolveTo(c2.events, c2));
        }
        function v2() {
          let e14 = p2(), t13 = c2.previous, n13 = c2.currentConstruct, i5 = c2.events.length, l5 = Array.from(u2);
          return { restore: function() {
            r4 = e14, c2.previous = t13, c2.currentConstruct = n13, c2.events.length = i5, u2 = l5, k2();
          }, from: i5 };
        }
        function k2() {
          r4.line in i4 && r4.column < 2 && (r4.column = i4[r4.line], r4.offset += i4[r4.line] - 1);
        }
      }(o3, l3, e12);
    }) };
    return o3;
  }(n10).document().write((i2 = 1, l2 = "", o2 = true, function(e11, t11, n11) {
    let u2, a2, c2, s2, f2;
    let p2 = [];
    for (e11 = l2 + ("string" == typeof e11 ? e11.toString() : new TextDecoder(t11 || void 0).decode(e11)), c2 = 0, l2 = "", o2 && (65279 === e11.charCodeAt(0) && c2++, o2 = void 0); c2 < e11.length; ) {
      if (eI.lastIndex = c2, s2 = (u2 = eI.exec(e11)) && void 0 !== u2.index ? u2.index : e11.length, f2 = e11.charCodeAt(s2), !u2) {
        l2 = e11.slice(c2);
        break;
      }
      if (10 === f2 && c2 === s2 && r2) p2.push(-3), r2 = void 0;
      else switch (r2 && (p2.push(-5), r2 = void 0), c2 < s2 && (p2.push(e11.slice(c2, s2)), i2 += s2 - c2), f2) {
        case 0:
          p2.push(65533), i2++;
          break;
        case 9:
          for (a2 = 4 * Math.ceil(i2 / 4), p2.push(-2); i2++ < a2; ) p2.push(-1);
          break;
        case 10:
          p2.push(-4), i2 = 1;
          break;
        default:
          r2 = true, i2 = 1;
      }
      c2 = s2 + 1;
    }
    return n11 && (r2 && p2.push(-5), l2 && p2.push(l2), p2.push(null)), p2;
  })(e10, t10, true))));
}, ns = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, nf = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, np = {};
function nd(e10, t10) {
  return (np.jsx ? nf : ns).test(e10);
}
let nh = /[ \t\n\f\r]/g;
function nm(e10) {
  return "" === e10.replace(nh, "");
}
class ng {
  constructor(e10, t10, n10) {
    this.property = e10, this.normal = t10, n10 && (this.space = n10);
  }
}
function ny(e10, t10) {
  let n10 = {}, r2 = {}, i2 = -1;
  for (; ++i2 < e10.length; ) Object.assign(n10, e10[i2].property), Object.assign(r2, e10[i2].normal);
  return new ng(n10, r2, t10);
}
function nx(e10) {
  return e10.toLowerCase();
}
ng.prototype.property = {}, ng.prototype.normal = {}, ng.prototype.space = null;
class nv {
  constructor(e10, t10) {
    this.property = e10, this.attribute = t10;
  }
}
nv.prototype.space = null, nv.prototype.boolean = false, nv.prototype.booleanish = false, nv.prototype.overloadedBoolean = false, nv.prototype.number = false, nv.prototype.commaSeparated = false, nv.prototype.spaceSeparated = false, nv.prototype.commaOrSpaceSeparated = false, nv.prototype.mustUseProperty = false, nv.prototype.defined = false;
let nk = 0, nb = nL(), nC = nL(), nS = nL(), nA = nL(), nw = nL(), nI = nL(), nT = nL();
function nL() {
  return 2 ** ++nk;
}
let nD = Object.freeze(Object.defineProperty({ __proto__: null, boolean: nb, booleanish: nC, commaOrSpaceSeparated: nT, commaSeparated: nI, number: nA, overloadedBoolean: nS, spaceSeparated: nw }, Symbol.toStringTag, { value: "Module" })), nO = Object.keys(nD);
class nz extends nv {
  constructor(e10, t10, n10, r2) {
    var i2, l2, o2, u2, a2;
    let c2 = -1;
    if (super(e10, t10), i2 = this, (l2 = r2) && (i2.space = l2), "number" == typeof n10) for (; ++c2 < nO.length; ) {
      let e11 = nO[c2];
      o2 = this, u2 = nO[c2], (a2 = (n10 & nD[e11]) === nD[e11]) && (o2[u2] = a2);
    }
  }
}
nz.prototype.defined = true;
let nE = {}.hasOwnProperty;
function n_(e10) {
  let t10;
  let n10 = {}, r2 = {};
  for (t10 in e10.properties) if (nE.call(e10.properties, t10)) {
    let i2 = e10.properties[t10], l2 = new nz(t10, e10.transform(e10.attributes || {}, t10), i2, e10.space);
    e10.mustUseProperty && e10.mustUseProperty.includes(t10) && (l2.mustUseProperty = true), n10[t10] = l2, r2[nx(t10)] = t10, r2[nx(l2.attribute)] = t10;
  }
  return new ng(n10, r2, e10.space);
}
let nM = n_({ space: "xlink", transform: (e10, t10) => "xlink:" + t10.slice(5).toLowerCase(), properties: { xLinkActuate: null, xLinkArcRole: null, xLinkHref: null, xLinkRole: null, xLinkShow: null, xLinkTitle: null, xLinkType: null } }), nF = n_({ space: "xml", transform: (e10, t10) => "xml:" + t10.slice(3).toLowerCase(), properties: { xmlLang: null, xmlBase: null, xmlSpace: null } });
function nP(e10, t10) {
  return t10 in e10 ? e10[t10] : t10;
}
function nN(e10, t10) {
  return nP(e10, t10.toLowerCase());
}
let nj = n_({ space: "xmlns", attributes: { xmlnsxlink: "xmlns:xlink" }, transform: nN, properties: { xmlns: null, xmlnsXLink: null } }), nR = n_({ transform: (e10, t10) => "role" === t10 ? t10 : "aria-" + t10.slice(4).toLowerCase(), properties: { ariaActiveDescendant: null, ariaAtomic: nC, ariaAutoComplete: null, ariaBusy: nC, ariaChecked: nC, ariaColCount: nA, ariaColIndex: nA, ariaColSpan: nA, ariaControls: nw, ariaCurrent: null, ariaDescribedBy: nw, ariaDetails: null, ariaDisabled: nC, ariaDropEffect: nw, ariaErrorMessage: null, ariaExpanded: nC, ariaFlowTo: nw, ariaGrabbed: nC, ariaHasPopup: null, ariaHidden: nC, ariaInvalid: null, ariaKeyShortcuts: null, ariaLabel: null, ariaLabelledBy: nw, ariaLevel: nA, ariaLive: null, ariaModal: nC, ariaMultiLine: nC, ariaMultiSelectable: nC, ariaOrientation: null, ariaOwns: nw, ariaPlaceholder: null, ariaPosInSet: nA, ariaPressed: nC, ariaReadOnly: nC, ariaRelevant: null, ariaRequired: nC, ariaRoleDescription: nw, ariaRowCount: nA, ariaRowIndex: nA, ariaRowSpan: nA, ariaSelected: nC, ariaSetSize: nA, ariaSort: null, ariaValueMax: nA, ariaValueMin: nA, ariaValueNow: nA, ariaValueText: null, role: null } }), nB = n_({ space: "html", attributes: { acceptcharset: "accept-charset", classname: "class", htmlfor: "for", httpequiv: "http-equiv" }, transform: nN, mustUseProperty: ["checked", "multiple", "muted", "selected"], properties: { abbr: null, accept: nI, acceptCharset: nw, accessKey: nw, action: null, allow: null, allowFullScreen: nb, allowPaymentRequest: nb, allowUserMedia: nb, alt: null, as: null, async: nb, autoCapitalize: null, autoComplete: nw, autoFocus: nb, autoPlay: nb, blocking: nw, capture: null, charSet: null, checked: nb, cite: null, className: nw, cols: nA, colSpan: null, content: null, contentEditable: nC, controls: nb, controlsList: nw, coords: nA | nI, crossOrigin: null, data: null, dateTime: null, decoding: null, default: nb, defer: nb, dir: null, dirName: null, disabled: nb, download: nS, draggable: nC, encType: null, enterKeyHint: null, fetchPriority: null, form: null, formAction: null, formEncType: null, formMethod: null, formNoValidate: nb, formTarget: null, headers: nw, height: nA, hidden: nb, high: nA, href: null, hrefLang: null, htmlFor: nw, httpEquiv: nw, id: null, imageSizes: null, imageSrcSet: null, inert: nb, inputMode: null, integrity: null, is: null, isMap: nb, itemId: null, itemProp: nw, itemRef: nw, itemScope: nb, itemType: nw, kind: null, label: null, lang: null, language: null, list: null, loading: null, loop: nb, low: nA, manifest: null, max: null, maxLength: nA, media: null, method: null, min: null, minLength: nA, multiple: nb, muted: nb, name: null, nonce: null, noModule: nb, noValidate: nb, onAbort: null, onAfterPrint: null, onAuxClick: null, onBeforeMatch: null, onBeforePrint: null, onBeforeToggle: null, onBeforeUnload: null, onBlur: null, onCancel: null, onCanPlay: null, onCanPlayThrough: null, onChange: null, onClick: null, onClose: null, onContextLost: null, onContextMenu: null, onContextRestored: null, onCopy: null, onCueChange: null, onCut: null, onDblClick: null, onDrag: null, onDragEnd: null, onDragEnter: null, onDragExit: null, onDragLeave: null, onDragOver: null, onDragStart: null, onDrop: null, onDurationChange: null, onEmptied: null, onEnded: null, onError: null, onFocus: null, onFormData: null, onHashChange: null, onInput: null, onInvalid: null, onKeyDown: null, onKeyPress: null, onKeyUp: null, onLanguageChange: null, onLoad: null, onLoadedData: null, onLoadedMetadata: null, onLoadEnd: null, onLoadStart: null, onMessage: null, onMessageError: null, onMouseDown: null, onMouseEnter: null, onMouseLeave: null, onMouseMove: null, onMouseOut: null, onMouseOver: null, onMouseUp: null, onOffline: null, onOnline: null, onPageHide: null, onPageShow: null, onPaste: null, onPause: null, onPlay: null, onPlaying: null, onPopState: null, onProgress: null, onRateChange: null, onRejectionHandled: null, onReset: null, onResize: null, onScroll: null, onScrollEnd: null, onSecurityPolicyViolation: null, onSeeked: null, onSeeking: null, onSelect: null, onSlotChange: null, onStalled: null, onStorage: null, onSubmit: null, onSuspend: null, onTimeUpdate: null, onToggle: null, onUnhandledRejection: null, onUnload: null, onVolumeChange: null, onWaiting: null, onWheel: null, open: nb, optimum: nA, pattern: null, ping: nw, placeholder: null, playsInline: nb, popover: null, popoverTarget: null, popoverTargetAction: null, poster: null, preload: null, readOnly: nb, referrerPolicy: null, rel: nw, required: nb, reversed: nb, rows: nA, rowSpan: nA, sandbox: nw, scope: null, scoped: nb, seamless: nb, selected: nb, shadowRootClonable: nb, shadowRootDelegatesFocus: nb, shadowRootMode: null, shape: null, size: nA, sizes: null, slot: null, span: nA, spellCheck: nC, src: null, srcDoc: null, srcLang: null, srcSet: null, start: nA, step: null, style: null, tabIndex: nA, target: null, title: null, translate: null, type: null, typeMustMatch: nb, useMap: null, value: nC, width: nA, wrap: null, writingSuggestions: null, align: null, aLink: null, archive: nw, axis: null, background: null, bgColor: null, border: nA, borderColor: null, bottomMargin: nA, cellPadding: null, cellSpacing: null, char: null, charOff: null, classId: null, clear: null, code: null, codeBase: null, codeType: null, color: null, compact: nb, declare: nb, event: null, face: null, frame: null, frameBorder: null, hSpace: nA, leftMargin: nA, link: null, longDesc: null, lowSrc: null, marginHeight: nA, marginWidth: nA, noResize: nb, noHref: nb, noShade: nb, noWrap: nb, object: null, profile: null, prompt: null, rev: null, rightMargin: nA, rules: null, scheme: null, scrolling: nC, standby: null, summary: null, text: null, topMargin: nA, valueType: null, version: null, vAlign: null, vLink: null, vSpace: nA, allowTransparency: null, autoCorrect: null, autoSave: null, disablePictureInPicture: nb, disableRemotePlayback: nb, prefix: null, property: null, results: nA, security: null, unselectable: null } }), nV = n_({ space: "svg", attributes: { accentHeight: "accent-height", alignmentBaseline: "alignment-baseline", arabicForm: "arabic-form", baselineShift: "baseline-shift", capHeight: "cap-height", className: "class", clipPath: "clip-path", clipRule: "clip-rule", colorInterpolation: "color-interpolation", colorInterpolationFilters: "color-interpolation-filters", colorProfile: "color-profile", colorRendering: "color-rendering", crossOrigin: "crossorigin", dataType: "datatype", dominantBaseline: "dominant-baseline", enableBackground: "enable-background", fillOpacity: "fill-opacity", fillRule: "fill-rule", floodColor: "flood-color", floodOpacity: "flood-opacity", fontFamily: "font-family", fontSize: "font-size", fontSizeAdjust: "font-size-adjust", fontStretch: "font-stretch", fontStyle: "font-style", fontVariant: "font-variant", fontWeight: "font-weight", glyphName: "glyph-name", glyphOrientationHorizontal: "glyph-orientation-horizontal", glyphOrientationVertical: "glyph-orientation-vertical", hrefLang: "hreflang", horizAdvX: "horiz-adv-x", horizOriginX: "horiz-origin-x", horizOriginY: "horiz-origin-y", imageRendering: "image-rendering", letterSpacing: "letter-spacing", lightingColor: "lighting-color", markerEnd: "marker-end", markerMid: "marker-mid", markerStart: "marker-start", navDown: "nav-down", navDownLeft: "nav-down-left", navDownRight: "nav-down-right", navLeft: "nav-left", navNext: "nav-next", navPrev: "nav-prev", navRight: "nav-right", navUp: "nav-up", navUpLeft: "nav-up-left", navUpRight: "nav-up-right", onAbort: "onabort", onActivate: "onactivate", onAfterPrint: "onafterprint", onBeforePrint: "onbeforeprint", onBegin: "onbegin", onCancel: "oncancel", onCanPlay: "oncanplay", onCanPlayThrough: "oncanplaythrough", onChange: "onchange", onClick: "onclick", onClose: "onclose", onCopy: "oncopy", onCueChange: "oncuechange", onCut: "oncut", onDblClick: "ondblclick", onDrag: "ondrag", onDragEnd: "ondragend", onDragEnter: "ondragenter", onDragExit: "ondragexit", onDragLeave: "ondragleave", onDragOver: "ondragover", onDragStart: "ondragstart", onDrop: "ondrop", onDurationChange: "ondurationchange", onEmptied: "onemptied", onEnd: "onend", onEnded: "onended", onError: "onerror", onFocus: "onfocus", onFocusIn: "onfocusin", onFocusOut: "onfocusout", onHashChange: "onhashchange", onInput: "oninput", onInvalid: "oninvalid", onKeyDown: "onkeydown", onKeyPress: "onkeypress", onKeyUp: "onkeyup", onLoad: "onload", onLoadedData: "onloadeddata", onLoadedMetadata: "onloadedmetadata", onLoadStart: "onloadstart", onMessage: "onmessage", onMouseDown: "onmousedown", onMouseEnter: "onmouseenter", onMouseLeave: "onmouseleave", onMouseMove: "onmousemove", onMouseOut: "onmouseout", onMouseOver: "onmouseover", onMouseUp: "onmouseup", onMouseWheel: "onmousewheel", onOffline: "onoffline", onOnline: "ononline", onPageHide: "onpagehide", onPageShow: "onpageshow", onPaste: "onpaste", onPause: "onpause", onPlay: "onplay", onPlaying: "onplaying", onPopState: "onpopstate", onProgress: "onprogress", onRateChange: "onratechange", onRepeat: "onrepeat", onReset: "onreset", onResize: "onresize", onScroll: "onscroll", onSeeked: "onseeked", onSeeking: "onseeking", onSelect: "onselect", onShow: "onshow", onStalled: "onstalled", onStorage: "onstorage", onSubmit: "onsubmit", onSuspend: "onsuspend", onTimeUpdate: "ontimeupdate", onToggle: "ontoggle", onUnload: "onunload", onVolumeChange: "onvolumechange", onWaiting: "onwaiting", onZoom: "onzoom", overlinePosition: "overline-position", overlineThickness: "overline-thickness", paintOrder: "paint-order", panose1: "panose-1", pointerEvents: "pointer-events", referrerPolicy: "referrerpolicy", renderingIntent: "rendering-intent", shapeRendering: "shape-rendering", stopColor: "stop-color", stopOpacity: "stop-opacity", strikethroughPosition: "strikethrough-position", strikethroughThickness: "strikethrough-thickness", strokeDashArray: "stroke-dasharray", strokeDashOffset: "stroke-dashoffset", strokeLineCap: "stroke-linecap", strokeLineJoin: "stroke-linejoin", strokeMiterLimit: "stroke-miterlimit", strokeOpacity: "stroke-opacity", strokeWidth: "stroke-width", tabIndex: "tabindex", textAnchor: "text-anchor", textDecoration: "text-decoration", textRendering: "text-rendering", transformOrigin: "transform-origin", typeOf: "typeof", underlinePosition: "underline-position", underlineThickness: "underline-thickness", unicodeBidi: "unicode-bidi", unicodeRange: "unicode-range", unitsPerEm: "units-per-em", vAlphabetic: "v-alphabetic", vHanging: "v-hanging", vIdeographic: "v-ideographic", vMathematical: "v-mathematical", vectorEffect: "vector-effect", vertAdvY: "vert-adv-y", vertOriginX: "vert-origin-x", vertOriginY: "vert-origin-y", wordSpacing: "word-spacing", writingMode: "writing-mode", xHeight: "x-height", playbackOrder: "playbackorder", timelineBegin: "timelinebegin" }, transform: nP, properties: { about: nT, accentHeight: nA, accumulate: null, additive: null, alignmentBaseline: null, alphabetic: nA, amplitude: nA, arabicForm: null, ascent: nA, attributeName: null, attributeType: null, azimuth: nA, bandwidth: null, baselineShift: null, baseFrequency: null, baseProfile: null, bbox: null, begin: null, bias: nA, by: null, calcMode: null, capHeight: nA, className: nw, clip: null, clipPath: null, clipPathUnits: null, clipRule: null, color: null, colorInterpolation: null, colorInterpolationFilters: null, colorProfile: null, colorRendering: null, content: null, contentScriptType: null, contentStyleType: null, crossOrigin: null, cursor: null, cx: null, cy: null, d: null, dataType: null, defaultAction: null, descent: nA, diffuseConstant: nA, direction: null, display: null, dur: null, divisor: nA, dominantBaseline: null, download: nb, dx: null, dy: null, edgeMode: null, editable: null, elevation: nA, enableBackground: null, end: null, event: null, exponent: nA, externalResourcesRequired: null, fill: null, fillOpacity: nA, fillRule: null, filter: null, filterRes: null, filterUnits: null, floodColor: null, floodOpacity: null, focusable: null, focusHighlight: null, fontFamily: null, fontSize: null, fontSizeAdjust: null, fontStretch: null, fontStyle: null, fontVariant: null, fontWeight: null, format: null, fr: null, from: null, fx: null, fy: null, g1: nI, g2: nI, glyphName: nI, glyphOrientationHorizontal: null, glyphOrientationVertical: null, glyphRef: null, gradientTransform: null, gradientUnits: null, handler: null, hanging: nA, hatchContentUnits: null, hatchUnits: null, height: null, href: null, hrefLang: null, horizAdvX: nA, horizOriginX: nA, horizOriginY: nA, id: null, ideographic: nA, imageRendering: null, initialVisibility: null, in: null, in2: null, intercept: nA, k: nA, k1: nA, k2: nA, k3: nA, k4: nA, kernelMatrix: nT, kernelUnitLength: null, keyPoints: null, keySplines: null, keyTimes: null, kerning: null, lang: null, lengthAdjust: null, letterSpacing: null, lightingColor: null, limitingConeAngle: nA, local: null, markerEnd: null, markerMid: null, markerStart: null, markerHeight: null, markerUnits: null, markerWidth: null, mask: null, maskContentUnits: null, maskUnits: null, mathematical: null, max: null, media: null, mediaCharacterEncoding: null, mediaContentEncodings: null, mediaSize: nA, mediaTime: null, method: null, min: null, mode: null, name: null, navDown: null, navDownLeft: null, navDownRight: null, navLeft: null, navNext: null, navPrev: null, navRight: null, navUp: null, navUpLeft: null, navUpRight: null, numOctaves: null, observer: null, offset: null, onAbort: null, onActivate: null, onAfterPrint: null, onBeforePrint: null, onBegin: null, onCancel: null, onCanPlay: null, onCanPlayThrough: null, onChange: null, onClick: null, onClose: null, onCopy: null, onCueChange: null, onCut: null, onDblClick: null, onDrag: null, onDragEnd: null, onDragEnter: null, onDragExit: null, onDragLeave: null, onDragOver: null, onDragStart: null, onDrop: null, onDurationChange: null, onEmptied: null, onEnd: null, onEnded: null, onError: null, onFocus: null, onFocusIn: null, onFocusOut: null, onHashChange: null, onInput: null, onInvalid: null, onKeyDown: null, onKeyPress: null, onKeyUp: null, onLoad: null, onLoadedData: null, onLoadedMetadata: null, onLoadStart: null, onMessage: null, onMouseDown: null, onMouseEnter: null, onMouseLeave: null, onMouseMove: null, onMouseOut: null, onMouseOver: null, onMouseUp: null, onMouseWheel: null, onOffline: null, onOnline: null, onPageHide: null, onPageShow: null, onPaste: null, onPause: null, onPlay: null, onPlaying: null, onPopState: null, onProgress: null, onRateChange: null, onRepeat: null, onReset: null, onResize: null, onScroll: null, onSeeked: null, onSeeking: null, onSelect: null, onShow: null, onStalled: null, onStorage: null, onSubmit: null, onSuspend: null, onTimeUpdate: null, onToggle: null, onUnload: null, onVolumeChange: null, onWaiting: null, onZoom: null, opacity: null, operator: null, order: null, orient: null, orientation: null, origin: null, overflow: null, overlay: null, overlinePosition: nA, overlineThickness: nA, paintOrder: null, panose1: null, path: null, pathLength: nA, patternContentUnits: null, patternTransform: null, patternUnits: null, phase: null, ping: nw, pitch: null, playbackOrder: null, pointerEvents: null, points: null, pointsAtX: nA, pointsAtY: nA, pointsAtZ: nA, preserveAlpha: null, preserveAspectRatio: null, primitiveUnits: null, propagate: null, property: nT, r: null, radius: null, referrerPolicy: null, refX: null, refY: null, rel: nT, rev: nT, renderingIntent: null, repeatCount: null, repeatDur: null, requiredExtensions: nT, requiredFeatures: nT, requiredFonts: nT, requiredFormats: nT, resource: null, restart: null, result: null, rotate: null, rx: null, ry: null, scale: null, seed: null, shapeRendering: null, side: null, slope: null, snapshotTime: null, specularConstant: nA, specularExponent: nA, spreadMethod: null, spacing: null, startOffset: null, stdDeviation: null, stemh: null, stemv: null, stitchTiles: null, stopColor: null, stopOpacity: null, strikethroughPosition: nA, strikethroughThickness: nA, string: null, stroke: null, strokeDashArray: nT, strokeDashOffset: null, strokeLineCap: null, strokeLineJoin: null, strokeMiterLimit: nA, strokeOpacity: nA, strokeWidth: null, style: null, surfaceScale: nA, syncBehavior: null, syncBehaviorDefault: null, syncMaster: null, syncTolerance: null, syncToleranceDefault: null, systemLanguage: nT, tabIndex: nA, tableValues: null, target: null, targetX: nA, targetY: nA, textAnchor: null, textDecoration: null, textRendering: null, textLength: null, timelineBegin: null, title: null, transformBehavior: null, type: null, typeOf: nT, to: null, transform: null, transformOrigin: null, u1: null, u2: null, underlinePosition: nA, underlineThickness: nA, unicode: null, unicodeBidi: null, unicodeRange: null, unitsPerEm: nA, values: null, vAlphabetic: nA, vMathematical: nA, vectorEffect: null, vHanging: nA, vIdeographic: nA, version: null, vertAdvY: nA, vertOriginX: nA, vertOriginY: nA, viewBox: null, viewTarget: null, visibility: null, width: null, widths: null, wordSpacing: null, writingMode: null, x: null, x1: null, x2: null, xChannelSelector: null, xHeight: nA, y: null, y1: null, y2: null, yChannelSelector: null, z: null, zoomAndPan: null } }), nH = /^data[-\w.:]+$/i, nU = /-[a-z]/g, nq = /[A-Z]/g;
function nW(e10) {
  return "-" + e10.toLowerCase();
}
function nY(e10) {
  return e10.charAt(1).toUpperCase();
}
let nQ = { classId: "classID", dataType: "datatype", itemId: "itemID", strokeDashArray: "strokeDasharray", strokeDashOffset: "strokeDashoffset", strokeLineCap: "strokeLinecap", strokeLineJoin: "strokeLinejoin", strokeMiterLimit: "strokeMiterlimit", typeOf: "typeof", xLinkActuate: "xlinkActuate", xLinkArcRole: "xlinkArcrole", xLinkHref: "xlinkHref", xLinkRole: "xlinkRole", xLinkShow: "xlinkShow", xLinkTitle: "xlinkTitle", xLinkType: "xlinkType", xmlnsXLink: "xmlnsXlink" }, n$ = ny([nF, nM, nj, nR, nB], "html"), nK = ny([nF, nM, nj, nR, nV], "svg");
var nX, nZ, nJ, nG, n1, n0, n2, n4, n3, n5, n9, n6, n8 = {};
let n7 = e(function() {
  if (n6) return n8;
  n6 = 1;
  var e10 = n8 && n8.__importDefault || function(e11) {
    return e11 && e11.__esModule ? e11 : { default: e11 };
  };
  Object.defineProperty(n8, "__esModule", { value: true }), n8.default = function(e11, n10) {
    var r2 = null;
    if (!e11 || "string" != typeof e11) return r2;
    var i2 = (0, t10.default)(e11), l2 = "function" == typeof n10;
    return i2.forEach(function(e12) {
      if ("declaration" === e12.type) {
        var t11 = e12.property, i3 = e12.value;
        l2 ? n10(t11, i3, e12) : i3 && ((r2 = r2 || {})[t11] = i3);
      }
    }), r2;
  };
  var t10 = e10(function() {
    if (n9) return n5;
    n9 = 1;
    var e11 = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, t11 = /\n/g, n10 = /^\s*/, r2 = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, i2 = /^:\s*/, l2 = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, o2 = /^[;\s]*/, u2 = /^\s+|\s+$/g;
    function a2(e12) {
      return e12 ? e12.replace(u2, "") : "";
    }
    return n5 = function(u3, c2) {
      if ("string" != typeof u3) throw TypeError("First argument must be a string");
      if (!u3) return [];
      c2 = c2 || {};
      var s2 = 1, f2 = 1;
      function p2(e12) {
        var n11 = e12.match(t11);
        n11 && (s2 += n11.length);
        var r3 = e12.lastIndexOf("\n");
        f2 = ~r3 ? e12.length - r3 : f2 + e12.length;
      }
      function d2() {
        var e12 = { line: s2, column: f2 };
        return function(t12) {
          return t12.position = new h2(e12), g2(n10), t12;
        };
      }
      function h2(e12) {
        this.start = e12, this.end = { line: s2, column: f2 }, this.source = c2.source;
      }
      function m2(e12) {
        var t12 = Error(c2.source + ":" + s2 + ":" + f2 + ": " + e12);
        if (t12.reason = e12, t12.filename = c2.source, t12.line = s2, t12.column = f2, t12.source = u3, c2.silent) ;
        else throw t12;
      }
      function g2(e12) {
        var t12 = e12.exec(u3);
        if (t12) {
          var n11 = t12[0];
          return p2(n11), u3 = u3.slice(n11.length), t12;
        }
      }
      function y2(e12) {
        var t12;
        for (e12 = e12 || []; t12 = x2(); ) false !== t12 && e12.push(t12);
        return e12;
      }
      function x2() {
        var e12 = d2();
        if ("/" == u3.charAt(0) && "*" == u3.charAt(1)) {
          for (var t12 = 2; "" != u3.charAt(t12) && ("*" != u3.charAt(t12) || "/" != u3.charAt(t12 + 1)); ) ++t12;
          if (t12 += 2, "" === u3.charAt(t12 - 1)) return m2("End of comment missing");
          var n11 = u3.slice(2, t12 - 2);
          return f2 += 2, p2(n11), u3 = u3.slice(t12), f2 += 2, e12({ type: "comment", comment: n11 });
        }
      }
      return h2.prototype.content = u3, g2(n10), function() {
        var t12, n11 = [];
        for (y2(n11); t12 = function() {
          var t13 = d2(), n12 = g2(r2);
          if (n12) {
            if (x2(), !g2(i2)) return m2("property missing ':'");
            var u4 = g2(l2), c3 = t13({ type: "declaration", property: a2(n12[0].replace(e11, "")), value: u4 ? a2(u4[0].replace(e11, "")) : "" });
            return g2(o2), c3;
          }
        }(); ) false !== t12 && (n11.push(t12), y2(n11));
        return n11;
      }();
    };
  }());
  return n8;
}()), re = n7.default || n7, rt = function(e10) {
  let t10 = e10 && e10.position && e10.position.end || {};
  if ("number" == typeof t10.line && t10.line > 0 && "number" == typeof t10.column && t10.column > 0) return { line: t10.line, column: t10.column, offset: "number" == typeof t10.offset && t10.offset > -1 ? t10.offset : void 0 };
}, rn = function(e10) {
  let t10 = e10 && e10.position && e10.position.start || {};
  if ("number" == typeof t10.line && t10.line > 0 && "number" == typeof t10.column && t10.column > 0) return { line: t10.line, column: t10.column, offset: "number" == typeof t10.offset && t10.offset > -1 ? t10.offset : void 0 };
};
class rr extends Error {
  constructor(e10, t10, n10) {
    super(), "string" == typeof t10 && (n10 = t10, t10 = void 0);
    let r2 = "", i2 = {}, l2 = false;
    if (t10 && (i2 = "line" in t10 && "column" in t10 ? { place: t10 } : "start" in t10 && "end" in t10 ? { place: t10 } : "type" in t10 ? { ancestors: [t10], place: t10.position } : { ...t10 }), "string" == typeof e10 ? r2 = e10 : !i2.cause && e10 && (l2 = true, r2 = e10.message, i2.cause = e10), !i2.ruleId && !i2.source && "string" == typeof n10) {
      let e11 = n10.indexOf(":");
      -1 === e11 ? i2.ruleId = n10 : (i2.source = n10.slice(0, e11), i2.ruleId = n10.slice(e11 + 1));
    }
    if (!i2.place && i2.ancestors && i2.ancestors) {
      let e11 = i2.ancestors[i2.ancestors.length - 1];
      e11 && (i2.place = e11.position);
    }
    let o2 = i2.place && "start" in i2.place ? i2.place.start : i2.place;
    this.ancestors = i2.ancestors || void 0, this.cause = i2.cause || void 0, this.column = o2 ? o2.column : void 0, this.fatal = void 0, this.file, this.message = r2, this.line = o2 ? o2.line : void 0, this.name = eD(i2.place) || "1:1", this.place = i2.place || void 0, this.reason = this.message, this.ruleId = i2.ruleId || void 0, this.source = i2.source || void 0, this.stack = l2 && i2.cause && "string" == typeof i2.cause.stack ? i2.cause.stack : "", this.actual, this.expected, this.note, this.url;
  }
}
rr.prototype.file = "", rr.prototype.name = "", rr.prototype.reason = "", rr.prototype.message = "", rr.prototype.stack = "", rr.prototype.column = void 0, rr.prototype.line = void 0, rr.prototype.ancestors = void 0, rr.prototype.cause = void 0, rr.prototype.fatal = void 0, rr.prototype.place = void 0, rr.prototype.ruleId = void 0, rr.prototype.source = void 0;
let ri = {}.hasOwnProperty, rl = /* @__PURE__ */ new Map(), ro = /[A-Z]/g, ru = /-([a-z])/g, ra = /* @__PURE__ */ new Set(["table", "tbody", "thead", "tfoot", "tr"]), rc = /* @__PURE__ */ new Set(["td", "th"]), rs = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function rf(e10, t10, n10) {
  var r2;
  return "element" === t10.type ? function(e11, t11, n11) {
    let r3 = e11.schema, i2 = r3;
    "svg" === t11.tagName.toLowerCase() && "html" === r3.space && (i2 = nK, e11.schema = i2), e11.ancestors.push(t11);
    let l2 = rm(e11, t11.tagName, false), o2 = function(e12, t12) {
      let n12, r4;
      let i3 = {};
      for (r4 in t12.properties) if ("children" !== r4 && ri.call(t12.properties, r4)) {
        let l3 = function(e13, t13, n13) {
          let r5 = function(e14, t14) {
            let n14 = nx(t14), r6 = t14, i4 = nv;
            if (n14 in e14.normal) return e14.property[e14.normal[n14]];
            if (n14.length > 4 && "data" === n14.slice(0, 4) && nH.test(t14)) {
              if ("-" === t14.charAt(4)) {
                let e15 = t14.slice(5).replace(nU, nY);
                r6 = "data" + e15.charAt(0).toUpperCase() + e15.slice(1);
              } else {
                let e15 = t14.slice(4);
                if (!nU.test(e15)) {
                  let n15 = e15.replace(nq, nW);
                  "-" !== n15.charAt(0) && (n15 = "-" + n15), t14 = "data" + n15;
                }
              }
              i4 = nz;
            }
            return new i4(r6, t14);
          }(e13.schema, t13);
          if (!(null == n13 || "number" == typeof n13 && Number.isNaN(n13))) {
            if (Array.isArray(n13) && (n13 = r5.commaSeparated ? function(e14, t14) {
              let n14 = {};
              return ("" === e14[e14.length - 1] ? [...e14, ""] : e14).join((n14.padRight ? " " : "") + "," + (false === n14.padLeft ? "" : " ")).trim();
            }(n13) : n13.join(" ").trim()), "style" === r5.property) {
              let t14 = "object" == typeof n13 ? n13 : function(e14, t15) {
                let n14 = {};
                try {
                  re(t15, function(e15, t16) {
                    let r6 = e15;
                    "--" !== r6.slice(0, 2) && ("-ms-" === r6.slice(0, 4) && (r6 = "ms-" + r6.slice(4)), r6 = r6.replace(ru, ry)), n14[r6] = t16;
                  });
                } catch (t16) {
                  if (!e14.ignoreInvalidStyle) {
                    let n15 = new rr("Cannot parse `style` attribute", { ancestors: e14.ancestors, cause: t16, ruleId: "style", source: "hast-util-to-jsx-runtime" });
                    throw n15.file = e14.filePath || void 0, n15.url = rs + "#cannot-parse-style-attribute", n15;
                  }
                }
                return n14;
              }(e13, String(n13));
              return "css" === e13.stylePropertyNameCase && (t14 = function(e14) {
                let t15;
                let n14 = {};
                for (t15 in e14) ri.call(e14, t15) && (n14[function(e15) {
                  let t16 = e15.replace(ro, rx);
                  return "ms-" === t16.slice(0, 3) && (t16 = "-" + t16), t16;
                }(t15)] = e14[t15]);
                return n14;
              }(t14)), ["style", t14];
            }
            return ["react" === e13.elementAttributeNameCase && r5.space ? nQ[r5.property] || r5.property : r5.attribute, n13];
          }
        }(e12, r4, t12.properties[r4]);
        if (l3) {
          let [r5, o3] = l3;
          e12.tableCellAlignToStyle && "align" === r5 && "string" == typeof o3 && rc.has(t12.tagName) ? n12 = o3 : i3[r5] = o3;
        }
      }
      return n12 && ((i3.style || (i3.style = {}))["css" === e12.stylePropertyNameCase ? "text-align" : "textAlign"] = n12), i3;
    }(e11, t11), u2 = rh(e11, t11);
    return ra.has(t11.tagName) && (u2 = u2.filter(function(e12) {
      return "string" != typeof e12 || !("object" == typeof e12 ? "text" === e12.type && nm(e12.value) : nm(e12));
    })), rp(e11, o2, l2, t11), rd(o2, u2), e11.ancestors.pop(), e11.schema = r3, e11.create(t11, l2, o2, n11);
  }(e10, t10, n10) : "mdxFlowExpression" === t10.type || "mdxTextExpression" === t10.type ? function(e11, t11) {
    if (t11.data && t11.data.estree && e11.evaluater) {
      let n11 = t11.data.estree.body[0];
      return n11.type, e11.evaluater.evaluateExpression(n11.expression);
    }
    rg(e11, t11.position);
  }(e10, t10) : "mdxJsxFlowElement" === t10.type || "mdxJsxTextElement" === t10.type ? function(e11, t11, n11) {
    let r3 = e11.schema, i2 = r3;
    "svg" === t11.name && "html" === r3.space && (i2 = nK, e11.schema = i2), e11.ancestors.push(t11);
    let l2 = null === t11.name ? e11.Fragment : rm(e11, t11.name, true), o2 = function(e12, t12) {
      let n12 = {};
      for (let r4 of t12.attributes) if ("mdxJsxExpressionAttribute" === r4.type) {
        if (r4.data && r4.data.estree && e12.evaluater) {
          let t13 = r4.data.estree.body[0];
          t13.type;
          let i3 = t13.expression;
          i3.type;
          let l3 = i3.properties[0];
          l3.type, Object.assign(n12, e12.evaluater.evaluateExpression(l3.argument));
        } else rg(e12, t12.position);
      } else {
        let i3;
        let l3 = r4.name;
        if (r4.value && "object" == typeof r4.value) {
          if (r4.value.data && r4.value.data.estree && e12.evaluater) {
            let t13 = r4.value.data.estree.body[0];
            t13.type, i3 = e12.evaluater.evaluateExpression(t13.expression);
          } else rg(e12, t12.position);
        } else i3 = null === r4.value || r4.value;
        n12[l3] = i3;
      }
      return n12;
    }(e11, t11), u2 = rh(e11, t11);
    return rp(e11, o2, l2, t11), rd(o2, u2), e11.ancestors.pop(), e11.schema = r3, e11.create(t11, l2, o2, n11);
  }(e10, t10, n10) : "mdxjsEsm" === t10.type ? function(e11, t11) {
    if (t11.data && t11.data.estree && e11.evaluater) return e11.evaluater.evaluateProgram(t11.data.estree);
    rg(e11, t11.position);
  }(e10, t10) : "root" === t10.type ? function(e11, t11, n11) {
    let r3 = {};
    return rd(r3, rh(e11, t11)), e11.create(t11, e11.Fragment, r3, n11);
  }(e10, t10, n10) : "text" === t10.type ? (r2 = 0, t10.value) : void 0;
}
function rp(e10, t10, n10, r2) {
  "string" != typeof n10 && n10 !== e10.Fragment && e10.passNode && (t10.node = r2);
}
function rd(e10, t10) {
  if (t10.length > 0) {
    let n10 = t10.length > 1 ? t10 : t10[0];
    n10 && (e10.children = n10);
  }
}
function rh(e10, t10) {
  let n10 = [], r2 = -1, i2 = e10.passKeys ? /* @__PURE__ */ new Map() : rl;
  for (; ++r2 < t10.children.length; ) {
    let l2;
    let o2 = t10.children[r2];
    if (e10.passKeys) {
      let e11 = "element" === o2.type ? o2.tagName : "mdxJsxFlowElement" === o2.type || "mdxJsxTextElement" === o2.type ? o2.name : void 0;
      if (e11) {
        let t11 = i2.get(e11) || 0;
        l2 = e11 + "-" + t11, i2.set(e11, t11 + 1);
      }
    }
    let u2 = rf(e10, o2, l2);
    void 0 !== u2 && n10.push(u2);
  }
  return n10;
}
function rm(e10, t10, n10) {
  let r2;
  if (n10) {
    if (t10.includes(".")) {
      let e11;
      let n11 = t10.split("."), i2 = -1;
      for (; ++i2 < n11.length; ) {
        let t11 = nd(n11[i2]) ? { type: "Identifier", name: n11[i2] } : { type: "Literal", value: n11[i2] };
        e11 = e11 ? { type: "MemberExpression", object: e11, property: t11, computed: !!(i2 && "Literal" === t11.type), optional: false } : t11;
      }
      r2 = e11;
    } else r2 = nd(t10) && !/^[a-z]/.test(t10) ? { type: "Identifier", name: t10 } : { type: "Literal", value: t10 };
  } else r2 = { type: "Literal", value: t10 };
  if ("Literal" === r2.type) {
    let t11 = r2.value;
    return ri.call(e10.components, t11) ? e10.components[t11] : t11;
  }
  if (e10.evaluater) return e10.evaluater.evaluateExpression(r2);
  rg(e10);
}
function rg(e10, t10) {
  let n10 = new rr("Cannot handle MDX estrees without `createEvaluater`", { ancestors: e10.ancestors, place: t10, ruleId: "mdx-estree", source: "hast-util-to-jsx-runtime" });
  throw n10.file = e10.filePath || void 0, n10.url = rs + "#cannot-handle-mdx-estrees-without-createevaluater", n10;
}
function ry(e10, t10) {
  return t10.toUpperCase();
}
function rx(e10) {
  return "-" + e10.toLowerCase();
}
function rv(e10, t10) {
  let n10 = t10.referenceType, r2 = "]";
  if ("collapsed" === n10 ? r2 += "[]" : "full" === n10 && (r2 += "[" + (t10.label || t10.identifier) + "]"), "imageReference" === t10.type) return [{ type: "text", value: "![" + t10.alt + r2 }];
  let i2 = e10.all(t10), l2 = i2[0];
  l2 && "text" === l2.type ? l2.value = "[" + l2.value : i2.unshift({ type: "text", value: "[" });
  let o2 = i2[i2.length - 1];
  return o2 && "text" === o2.type ? o2.value += r2 : i2.push({ type: "text", value: r2 }), i2;
}
function rk(e10) {
  let t10 = e10.spread;
  return null == t10 ? e10.children.length > 1 : t10;
}
function rb(e10, t10, n10) {
  let r2 = 0, i2 = e10.length;
  if (t10) {
    let t11 = e10.codePointAt(r2);
    for (; 9 === t11 || 32 === t11; ) r2++, t11 = e10.codePointAt(r2);
  }
  if (n10) {
    let t11 = e10.codePointAt(i2 - 1);
    for (; 9 === t11 || 32 === t11; ) i2--, t11 = e10.codePointAt(i2 - 1);
  }
  return i2 > r2 ? e10.slice(r2, i2) : "";
}
let rC = { blockquote: function(e10, t10) {
  let n10 = { type: "element", tagName: "blockquote", properties: {}, children: e10.wrap(e10.all(t10), true) };
  return e10.patch(t10, n10), e10.applyData(t10, n10);
}, break: function(e10, t10) {
  let n10 = { type: "element", tagName: "br", properties: {}, children: [] };
  return e10.patch(t10, n10), [e10.applyData(t10, n10), { type: "text", value: "\n" }];
}, code: function(e10, t10) {
  let n10 = t10.value ? t10.value + "\n" : "", r2 = {};
  t10.lang && (r2.className = ["language-" + t10.lang]);
  let i2 = { type: "element", tagName: "code", properties: r2, children: [{ type: "text", value: n10 }] };
  return t10.meta && (i2.data = { meta: t10.meta }), e10.patch(t10, i2), i2 = { type: "element", tagName: "pre", properties: {}, children: [i2 = e10.applyData(t10, i2)] }, e10.patch(t10, i2), i2;
}, delete: function(e10, t10) {
  let n10 = { type: "element", tagName: "del", properties: {}, children: e10.all(t10) };
  return e10.patch(t10, n10), e10.applyData(t10, n10);
}, emphasis: function(e10, t10) {
  let n10 = { type: "element", tagName: "em", properties: {}, children: e10.all(t10) };
  return e10.patch(t10, n10), e10.applyData(t10, n10);
}, footnoteReference: function(e10, t10) {
  let n10;
  let r2 = "string" == typeof e10.options.clobberPrefix ? e10.options.clobberPrefix : "user-content-", i2 = String(t10.identifier).toUpperCase(), l2 = z(i2.toLowerCase()), o2 = e10.footnoteOrder.indexOf(i2), u2 = e10.footnoteCounts.get(i2);
  void 0 === u2 ? (u2 = 0, e10.footnoteOrder.push(i2), n10 = e10.footnoteOrder.length) : n10 = o2 + 1, u2 += 1, e10.footnoteCounts.set(i2, u2);
  let a2 = { type: "element", tagName: "a", properties: { href: "#" + r2 + "fn-" + l2, id: r2 + "fnref-" + l2 + (u2 > 1 ? "-" + u2 : ""), dataFootnoteRef: true, ariaDescribedBy: ["footnote-label"] }, children: [{ type: "text", value: String(n10) }] };
  e10.patch(t10, a2);
  let c2 = { type: "element", tagName: "sup", properties: {}, children: [a2] };
  return e10.patch(t10, c2), e10.applyData(t10, c2);
}, heading: function(e10, t10) {
  let n10 = { type: "element", tagName: "h" + t10.depth, properties: {}, children: e10.all(t10) };
  return e10.patch(t10, n10), e10.applyData(t10, n10);
}, html: function(e10, t10) {
  if (e10.options.allowDangerousHtml) {
    let n10 = { type: "raw", value: t10.value };
    return e10.patch(t10, n10), e10.applyData(t10, n10);
  }
}, imageReference: function(e10, t10) {
  let n10 = String(t10.identifier).toUpperCase(), r2 = e10.definitionById.get(n10);
  if (!r2) return rv(e10, t10);
  let i2 = { src: z(r2.url || ""), alt: t10.alt };
  null !== r2.title && void 0 !== r2.title && (i2.title = r2.title);
  let l2 = { type: "element", tagName: "img", properties: i2, children: [] };
  return e10.patch(t10, l2), e10.applyData(t10, l2);
}, image: function(e10, t10) {
  let n10 = { src: z(t10.url) };
  null !== t10.alt && void 0 !== t10.alt && (n10.alt = t10.alt), null !== t10.title && void 0 !== t10.title && (n10.title = t10.title);
  let r2 = { type: "element", tagName: "img", properties: n10, children: [] };
  return e10.patch(t10, r2), e10.applyData(t10, r2);
}, inlineCode: function(e10, t10) {
  let n10 = { type: "text", value: t10.value.replace(/\r?\n|\r/g, " ") };
  e10.patch(t10, n10);
  let r2 = { type: "element", tagName: "code", properties: {}, children: [n10] };
  return e10.patch(t10, r2), e10.applyData(t10, r2);
}, linkReference: function(e10, t10) {
  let n10 = String(t10.identifier).toUpperCase(), r2 = e10.definitionById.get(n10);
  if (!r2) return rv(e10, t10);
  let i2 = { href: z(r2.url || "") };
  null !== r2.title && void 0 !== r2.title && (i2.title = r2.title);
  let l2 = { type: "element", tagName: "a", properties: i2, children: e10.all(t10) };
  return e10.patch(t10, l2), e10.applyData(t10, l2);
}, link: function(e10, t10) {
  let n10 = { href: z(t10.url) };
  null !== t10.title && void 0 !== t10.title && (n10.title = t10.title);
  let r2 = { type: "element", tagName: "a", properties: n10, children: e10.all(t10) };
  return e10.patch(t10, r2), e10.applyData(t10, r2);
}, listItem: function(e10, t10, n10) {
  let r2 = e10.all(t10), i2 = n10 ? function(e11) {
    let t11 = false;
    if ("list" === e11.type) {
      t11 = e11.spread || false;
      let n11 = e11.children, r3 = -1;
      for (; !t11 && ++r3 < n11.length; ) t11 = rk(n11[r3]);
    }
    return t11;
  }(n10) : rk(t10), l2 = {}, o2 = [];
  if ("boolean" == typeof t10.checked) {
    let e11;
    let n11 = r2[0];
    n11 && "element" === n11.type && "p" === n11.tagName ? e11 = n11 : (e11 = { type: "element", tagName: "p", properties: {}, children: [] }, r2.unshift(e11)), e11.children.length > 0 && e11.children.unshift({ type: "text", value: " " }), e11.children.unshift({ type: "element", tagName: "input", properties: { type: "checkbox", checked: t10.checked, disabled: true }, children: [] }), l2.className = ["task-list-item"];
  }
  let u2 = -1;
  for (; ++u2 < r2.length; ) {
    let e11 = r2[u2];
    (i2 || 0 !== u2 || "element" !== e11.type || "p" !== e11.tagName) && o2.push({ type: "text", value: "\n" }), "element" !== e11.type || "p" !== e11.tagName || i2 ? o2.push(e11) : o2.push(...e11.children);
  }
  let a2 = r2[r2.length - 1];
  a2 && (i2 || "element" !== a2.type || "p" !== a2.tagName) && o2.push({ type: "text", value: "\n" });
  let c2 = { type: "element", tagName: "li", properties: l2, children: o2 };
  return e10.patch(t10, c2), e10.applyData(t10, c2);
}, list: function(e10, t10) {
  let n10 = {}, r2 = e10.all(t10), i2 = -1;
  for ("number" == typeof t10.start && 1 !== t10.start && (n10.start = t10.start); ++i2 < r2.length; ) {
    let e11 = r2[i2];
    if ("element" === e11.type && "li" === e11.tagName && e11.properties && Array.isArray(e11.properties.className) && e11.properties.className.includes("task-list-item")) {
      n10.className = ["contains-task-list"];
      break;
    }
  }
  let l2 = { type: "element", tagName: t10.ordered ? "ol" : "ul", properties: n10, children: e10.wrap(r2, true) };
  return e10.patch(t10, l2), e10.applyData(t10, l2);
}, paragraph: function(e10, t10) {
  let n10 = { type: "element", tagName: "p", properties: {}, children: e10.all(t10) };
  return e10.patch(t10, n10), e10.applyData(t10, n10);
}, root: function(e10, t10) {
  let n10 = { type: "root", children: e10.wrap(e10.all(t10)) };
  return e10.patch(t10, n10), e10.applyData(t10, n10);
}, strong: function(e10, t10) {
  let n10 = { type: "element", tagName: "strong", properties: {}, children: e10.all(t10) };
  return e10.patch(t10, n10), e10.applyData(t10, n10);
}, table: function(e10, t10) {
  let n10 = e10.all(t10), r2 = n10.shift(), i2 = [];
  if (r2) {
    let n11 = { type: "element", tagName: "thead", properties: {}, children: e10.wrap([r2], true) };
    e10.patch(t10.children[0], n11), i2.push(n11);
  }
  if (n10.length > 0) {
    let r3 = { type: "element", tagName: "tbody", properties: {}, children: e10.wrap(n10, true) }, l3 = rn(t10.children[1]), o2 = rt(t10.children[t10.children.length - 1]);
    l3 && o2 && (r3.position = { start: l3, end: o2 }), i2.push(r3);
  }
  let l2 = { type: "element", tagName: "table", properties: {}, children: e10.wrap(i2, true) };
  return e10.patch(t10, l2), e10.applyData(t10, l2);
}, tableCell: function(e10, t10) {
  let n10 = { type: "element", tagName: "td", properties: {}, children: e10.all(t10) };
  return e10.patch(t10, n10), e10.applyData(t10, n10);
}, tableRow: function(e10, t10, n10) {
  let r2 = n10 ? n10.children : void 0, i2 = 0 === (r2 ? r2.indexOf(t10) : 1) ? "th" : "td", l2 = n10 && "table" === n10.type ? n10.align : void 0, o2 = l2 ? l2.length : t10.children.length, u2 = -1, a2 = [];
  for (; ++u2 < o2; ) {
    let n11 = t10.children[u2], r3 = {}, o3 = l2 ? l2[u2] : void 0;
    o3 && (r3.align = o3);
    let c3 = { type: "element", tagName: i2, properties: r3, children: [] };
    n11 && (c3.children = e10.all(n11), e10.patch(n11, c3), c3 = e10.applyData(n11, c3)), a2.push(c3);
  }
  let c2 = { type: "element", tagName: "tr", properties: {}, children: e10.wrap(a2, true) };
  return e10.patch(t10, c2), e10.applyData(t10, c2);
}, text: function(e10, t10) {
  let n10 = { type: "text", value: function(e11) {
    let t11 = String(e11), n11 = /\r?\n|\r/g, r2 = n11.exec(t11), i2 = 0, l2 = [];
    for (; r2; ) l2.push(rb(t11.slice(i2, r2.index), i2 > 0, true), r2[0]), i2 = r2.index + r2[0].length, r2 = n11.exec(t11);
    return l2.push(rb(t11.slice(i2), i2 > 0, false)), l2.join("");
  }(String(t10.value)) };
  return e10.patch(t10, n10), e10.applyData(t10, n10);
}, thematicBreak: function(e10, t10) {
  let n10 = { type: "element", tagName: "hr", properties: {}, children: [] };
  return e10.patch(t10, n10), e10.applyData(t10, n10);
}, toml: rS, yaml: rS, definition: rS, footnoteDefinition: rS };
function rS() {
}
let rA = "object" == typeof self ? self : globalThis, rw = (e10, t10) => {
  let n10 = (t11, n11) => (e10.set(n11, t11), t11), r2 = (i2) => {
    if (e10.has(i2)) return e10.get(i2);
    let [l2, o2] = t10[i2];
    switch (l2) {
      case 0:
      case -1:
        return n10(o2, i2);
      case 1: {
        let e11 = n10([], i2);
        for (let t11 of o2) e11.push(r2(t11));
        return e11;
      }
      case 2: {
        let e11 = n10({}, i2);
        for (let [t11, n11] of o2) e11[r2(t11)] = r2(n11);
        return e11;
      }
      case 3:
        return n10(new Date(o2), i2);
      case 4: {
        let { source: e11, flags: t11 } = o2;
        return n10(new RegExp(e11, t11), i2);
      }
      case 5: {
        let e11 = n10(/* @__PURE__ */ new Map(), i2);
        for (let [t11, n11] of o2) e11.set(r2(t11), r2(n11));
        return e11;
      }
      case 6: {
        let e11 = n10(/* @__PURE__ */ new Set(), i2);
        for (let t11 of o2) e11.add(r2(t11));
        return e11;
      }
      case 7: {
        let { name: e11, message: t11 } = o2;
        return n10(new rA[e11](t11), i2);
      }
      case 8:
        return n10(BigInt(o2), i2);
      case "BigInt":
        return n10(Object(BigInt(o2)), i2);
    }
    return n10(new rA[l2](o2), i2);
  };
  return r2;
}, rI = (e10) => rw(/* @__PURE__ */ new Map(), e10)(0), { toString: rT } = {}, { keys: rL } = Object, rD = (e10) => {
  let t10 = typeof e10;
  if ("object" !== t10 || !e10) return [0, t10];
  let n10 = rT.call(e10).slice(8, -1);
  switch (n10) {
    case "Array":
      return [1, ""];
    case "Object":
      return [2, ""];
    case "Date":
      return [3, ""];
    case "RegExp":
      return [4, ""];
    case "Map":
      return [5, ""];
    case "Set":
      return [6, ""];
  }
  return n10.includes("Array") ? [1, n10] : n10.includes("Error") ? [7, n10] : [2, n10];
}, rO = (e10) => {
  let [t10, n10] = e10;
  return 0 === t10 && ("function" === n10 || "symbol" === n10);
}, rz = (e10, t10, n10, r2) => {
  let i2 = (e11, t11) => {
    let i3 = r2.push(e11) - 1;
    return n10.set(t11, i3), i3;
  }, l2 = (r3) => {
    if (n10.has(r3)) return n10.get(r3);
    let [o2, u2] = rD(r3);
    switch (o2) {
      case 0: {
        let t11 = r3;
        switch (u2) {
          case "bigint":
            o2 = 8, t11 = r3.toString();
            break;
          case "function":
          case "symbol":
            if (e10) throw TypeError("unable to serialize " + u2);
            t11 = null;
            break;
          case "undefined":
            return i2([-1], r3);
        }
        return i2([o2, t11], r3);
      }
      case 1: {
        if (u2) return i2([u2, [...r3]], r3);
        let e11 = [], t11 = i2([o2, e11], r3);
        for (let t12 of r3) e11.push(l2(t12));
        return t11;
      }
      case 2: {
        if (u2) switch (u2) {
          case "BigInt":
            return i2([u2, r3.toString()], r3);
          case "Boolean":
          case "Number":
          case "String":
            return i2([u2, r3.valueOf()], r3);
        }
        if (t10 && "toJSON" in r3) return l2(r3.toJSON());
        let n11 = [], a3 = i2([o2, n11], r3);
        for (let t11 of rL(r3)) (e10 || !rO(rD(r3[t11]))) && n11.push([l2(t11), l2(r3[t11])]);
        return a3;
      }
      case 3:
        return i2([o2, r3.toISOString()], r3);
      case 4: {
        let { source: e11, flags: t11 } = r3;
        return i2([o2, { source: e11, flags: t11 }], r3);
      }
      case 5: {
        let t11 = [], n11 = i2([o2, t11], r3);
        for (let [n12, i3] of r3) (e10 || !(rO(rD(n12)) || rO(rD(i3)))) && t11.push([l2(n12), l2(i3)]);
        return n11;
      }
      case 6: {
        let t11 = [], n11 = i2([o2, t11], r3);
        for (let n12 of r3) (e10 || !rO(rD(n12))) && t11.push(l2(n12));
        return n11;
      }
    }
    let { message: a2 } = r3;
    return i2([o2, { name: u2, message: a2 }], r3);
  };
  return l2;
}, rE = function(e10) {
  let { json: t10, lossy: n10 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r2 = [];
  return rz(!(t10 || n10), !!t10, /* @__PURE__ */ new Map(), r2)(e10), r2;
}, r_ = "function" == typeof structuredClone ? (e10, t10) => t10 && ("json" in t10 || "lossy" in t10) ? rI(rE(e10, t10)) : structuredClone(e10) : (e10, t10) => rI(rE(e10, t10));
function rM(e10, t10) {
  let n10 = [{ type: "text", value: "↩" }];
  return t10 > 1 && n10.push({ type: "element", tagName: "sup", properties: {}, children: [{ type: "text", value: String(t10) }] }), n10;
}
function rF(e10, t10) {
  return "Back to reference " + (e10 + 1) + (t10 > 1 ? "-" + t10 : "");
}
let rP = {}.hasOwnProperty, rN = {};
function rj(e10, t10) {
  e10.position && (t10.position = function(e11) {
    let t11 = rn(e11), n10 = rt(e11);
    if (t11 && n10) return { start: t11, end: n10 };
  }(e10));
}
function rR(e10, t10) {
  let n10 = t10;
  if (e10 && e10.data) {
    let t11 = e10.data.hName, r2 = e10.data.hChildren, i2 = e10.data.hProperties;
    "string" == typeof t11 && ("element" === n10.type ? n10.tagName = t11 : n10 = { type: "element", tagName: t11, properties: {}, children: "children" in n10 ? n10.children : [n10] }), "element" === n10.type && i2 && Object.assign(n10.properties, r_(i2)), "children" in n10 && n10.children && null != r2 && (n10.children = r2);
  }
  return n10;
}
function rB(e10, t10) {
  let n10 = [], r2 = -1;
  for (t10 && n10.push({ type: "text", value: "\n" }); ++r2 < e10.length; ) r2 && n10.push({ type: "text", value: "\n" }), n10.push(e10[r2]);
  return t10 && e10.length > 0 && n10.push({ type: "text", value: "\n" }), n10;
}
function rV(e10) {
  let t10 = 0, n10 = e10.charCodeAt(t10);
  for (; 9 === n10 || 32 === n10; ) t10++, n10 = e10.charCodeAt(t10);
  return e10.slice(t10);
}
let rH = i((e10, i2) => l(e10.text$, u(), o((i3) => {
  let l2 = function(e11, t10) {
    let n10 = function(e12, t11) {
      var n11, r3;
      let i5, l4, o2;
      let u2 = /* @__PURE__ */ new Map(), a2 = /* @__PURE__ */ new Map(), c2 = { all: function(e13) {
        let t12 = [];
        if ("children" in e13) {
          let n12 = e13.children, r4 = -1;
          for (; ++r4 < n12.length; ) {
            let i6 = c2.one(n12[r4], e13);
            if (i6) {
              if (r4 && "break" === n12[r4 - 1].type && (Array.isArray(i6) || "text" !== i6.type || (i6.value = rV(i6.value)), !Array.isArray(i6) && "element" === i6.type)) {
                let e14 = i6.children[0];
                e14 && "text" === e14.type && (e14.value = rV(e14.value));
              }
              Array.isArray(i6) ? t12.push(...i6) : t12.push(i6);
            }
          }
        }
        return t12;
      }, applyData: rR, definitionById: u2, footnoteById: a2, footnoteCounts: /* @__PURE__ */ new Map(), footnoteOrder: [], handlers: { ...rC, ...rN.handlers }, one: function(e13, t12) {
        let n12 = e13.type, r4 = c2.handlers[n12];
        if (rP.call(c2.handlers, n12) && r4) return r4(c2, e13, t12);
        if (c2.options.passThrough && c2.options.passThrough.includes(n12)) {
          if ("children" in e13) {
            let { children: t13, ...n13 } = e13, r5 = r_(n13);
            return r5.children = c2.all(e13), r5;
          }
          return r_(e13);
        }
        return (c2.options.unknownHandler || function(e14, t13) {
          let n13 = t13.data || {}, r5 = "value" in t13 && !(rP.call(n13, "hProperties") || rP.call(n13, "hChildren")) ? { type: "text", value: t13.value } : { type: "element", tagName: "div", properties: {}, children: e14.all(t13) };
          return e14.patch(t13, r5), e14.applyData(t13, r5);
        })(c2, e13, t12);
      }, options: rN, patch: rj, wrap: rB };
      return "function" == typeof (n11 = function(e13) {
        if ("definition" === e13.type || "footnoteDefinition" === e13.type) {
          let t12 = "definition" === e13.type ? u2 : a2, n12 = String(e13.identifier).toUpperCase();
          t12.has(n12) || t12.set(n12, e13);
        }
      }) ? (l4 = void 0, o2 = n11) : (l4 = n11, o2 = r3), eH(e12, l4, function(e13, t12) {
        let n12 = t12[t12.length - 1], r4 = n12 ? n12.children.indexOf(e13) : void 0;
        return o2(e13, r4, n12);
      }, i5 = void 0), c2;
    }(e11), r2 = n10.one(e11, void 0), i4 = function(e12) {
      let t11 = "string" == typeof e12.options.clobberPrefix ? e12.options.clobberPrefix : "user-content-", n11 = e12.options.footnoteBackContent || rM, r3 = e12.options.footnoteBackLabel || rF, i5 = e12.options.footnoteLabel || "Footnotes", l4 = e12.options.footnoteLabelTagName || "h2", o2 = e12.options.footnoteLabelProperties || { className: ["sr-only"] }, u2 = [], a2 = -1;
      for (; ++a2 < e12.footnoteOrder.length; ) {
        let i6 = e12.footnoteById.get(e12.footnoteOrder[a2]);
        if (!i6) continue;
        let l5 = e12.all(i6), o3 = String(i6.identifier).toUpperCase(), c2 = z(o3.toLowerCase()), s2 = 0, f2 = [], p2 = e12.footnoteCounts.get(o3);
        for (; void 0 !== p2 && ++s2 <= p2; ) {
          f2.length > 0 && f2.push({ type: "text", value: " " });
          let e13 = "string" == typeof n11 ? n11 : n11(a2, s2);
          "string" == typeof e13 && (e13 = { type: "text", value: e13 }), f2.push({ type: "element", tagName: "a", properties: { href: "#" + t11 + "fnref-" + c2 + (s2 > 1 ? "-" + s2 : ""), dataFootnoteBackref: "", ariaLabel: "string" == typeof r3 ? r3 : r3(a2, s2), className: ["data-footnote-backref"] }, children: Array.isArray(e13) ? e13 : [e13] });
        }
        let d2 = l5[l5.length - 1];
        if (d2 && "element" === d2.type && "p" === d2.tagName) {
          let e13 = d2.children[d2.children.length - 1];
          e13 && "text" === e13.type ? e13.value += " " : d2.children.push({ type: "text", value: " " }), d2.children.push(...f2);
        } else l5.push(...f2);
        let h2 = { type: "element", tagName: "li", properties: { id: t11 + "fn-" + c2 }, children: e12.wrap(l5, true) };
        e12.patch(i6, h2), u2.push(h2);
      }
      if (0 !== u2.length) return { type: "element", tagName: "section", properties: { dataFootnotes: true, className: ["footnotes"] }, children: [{ type: "element", tagName: l4, properties: { ...r_(o2), id: "footnote-label" }, children: [{ type: "text", value: i5 }] }, { type: "text", value: "\n" }, { type: "element", tagName: "ol", properties: {}, children: e12.wrap(u2, true) }, { type: "text", value: "\n" }] };
    }(n10), l3 = Array.isArray(r2) ? { type: "root", children: r2 } : r2 || { type: "root", children: [] };
    return i4 && l3.children.push({ type: "text", value: "\n" }, i4), l3;
  }(nc(i3));
  return function(e11) {
    let { components: i4 } = e11;
    return function(e12) {
      return function(e13, t10) {
        var n10, r2, i5, l3, o2;
        let u2;
        if (!t10 || void 0 === t10.Fragment) throw TypeError("Expected `Fragment` in options");
        let a2 = t10.filePath || void 0;
        if (t10.development) {
          if ("function" != typeof t10.jsxDEV) throw TypeError("Expected `jsxDEV` in options when `development: true`");
          n10 = a2, r2 = t10.jsxDEV, u2 = function(e14, t11, i6, l4) {
            let o3 = Array.isArray(i6.children), u3 = rn(e14);
            return r2(t11, i6, l4, o3, { columnNumber: u3 ? u3.column - 1 : void 0, fileName: n10, lineNumber: u3 ? u3.line : void 0 }, void 0);
          };
        } else {
          if ("function" != typeof t10.jsx) throw TypeError("Expected `jsx` in production options");
          if ("function" != typeof t10.jsxs) throw TypeError("Expected `jsxs` in production options");
          i5 = 0, l3 = t10.jsx, o2 = t10.jsxs, u2 = function(e14, t11, n11, r3) {
            let i6 = Array.isArray(n11.children) ? o2 : l3;
            return r3 ? i6(t11, n11, r3) : i6(t11, n11);
          };
        }
        let c2 = { Fragment: t10.Fragment, ancestors: [], components: t10.components || {}, create: u2, elementAttributeNameCase: t10.elementAttributeNameCase || "react", evaluater: t10.createEvaluater ? t10.createEvaluater() : void 0, filePath: a2, ignoreInvalidStyle: t10.ignoreInvalidStyle || false, passKeys: false !== t10.passKeys, passNode: t10.passNode || false, schema: "svg" === t10.space ? nK : n$, stylePropertyNameCase: t10.stylePropertyNameCase || "dom", tableCellAlignToStyle: false !== t10.tableCellAlignToStyle }, s2 = rf(c2, e13, void 0);
        return s2 && "string" != typeof s2 ? s2 : c2.create(e13, c2.Fragment, { children: s2 || void 0 }, void 0);
      }(e12, { Fragment: r, jsx: n, jsxs: t, components: i4 });
    };
  }({ components: e10.components ?? {} })(l2);
})), { displayName: "Markdown", props: ["text", "components"] });
export {
  rH as M
};
