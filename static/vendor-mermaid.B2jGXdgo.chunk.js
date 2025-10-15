var e = "-ms-", r = "-moz-", n = "-webkit-", a = "comm", c = "rule", t = "decl", s = "@keyframes", u = Math.abs, i = String.fromCharCode, f = Object.assign;
function o(e, r) {
	return 45 ^ k(e, 0) ? (((r << 2 ^ k(e, 0)) << 2 ^ k(e, 1)) << 2 ^ k(e, 2)) << 2 ^ k(e, 3) : 0;
}
function l(e, r) {
	return (e = r.exec(e)) ? e[0] : e;
}
function h(e, r, n) {
	return e.replace(r, n);
}
function b(e, r) {
	return e.indexOf(r);
}
function k(e, r) {
	return 0 | e.charCodeAt(r);
}
function d(e, r, n) {
	return e.slice(r, n);
}
function m(e) {
	return e.length;
}
function g(e, r) {
	return r.push(e), e;
}
function p(e, r) {
	return e.map(r).join("");
}
var v = 1, w = 1, E = 0, x = 0, y = 0, C = "";
function O(e, r, n, a, c, t, s) {
	return {
		value: e,
		root: r,
		parent: n,
		type: a,
		props: c,
		children: t,
		line: v,
		column: w,
		length: s,
		return: ""
	};
}
function S(e, r) {
	return f(O("", null, null, "", null, null, 0), e, { length: -e.length }, r);
}
function A() {
	return y = x < E ? k(C, x++) : 0, w++, 10 === y && (w = 1, v++), y;
}
function M() {
	return k(C, x);
}
function T(e, r) {
	return d(C, e, r);
}
function j(e) {
	switch (e) {
		case 0:
		case 9:
		case 10:
		case 13:
		case 32: return 5;
		case 33:
		case 43:
		case 44:
		case 47:
		case 62:
		case 64:
		case 126:
		case 59:
		case 123:
		case 125: return 4;
		case 58: return 3;
		case 34:
		case 39:
		case 40:
		case 91: return 2;
		case 41:
		case 93: return 1;
	}
	return 0;
}
function R(e) {
	return v = w = 1, E = m(C = e), x = 0, [];
}
function z(e) {
	return C = "", e;
}
function D(e) {
	return T(x - 1, function e(r) {
		for (; A();) switch (y) {
			case r: return x;
			case 34:
			case 39:
				34 !== r && 39 !== r && e(y);
				break;
			case 40:
				41 === r && e(r);
				break;
			case 92: A();
		}
		return x;
	}(91 === e ? e + 2 : 40 === e ? e + 1 : e)).trim();
}
function I(e) {
	return z(function e(r, n, c, t, s, u, f, o, l) {
		for (var p, E = 0, S = 0, R = f, z = 0, I = 0, B = 0, F = 1, N = 1, U = 1, W = 0, Y = "", Z = s, _ = u, q = t, G = Y; N;) switch (B = W, W = A()) {
			case 40: if (108 != B && 58 == k(G, R - 1)) {
				-1 != b(G += h(D(W), "&", "&\f"), "&\f") && (U = -1);
				break;
			}
			case 34:
			case 39:
			case 91:
				G += D(W);
				break;
			case 9:
			case 10:
			case 13:
			case 32:
				G += function(e) {
					for (; y = M();) if (y < 33) A();
					else break;
					return j(e) > 2 || j(y) > 3 ? "" : " ";
				}(B);
				break;
			case 92:
				G += function(e, r) {
					for (; --r && A() && !(y < 48) && !(y > 102) && (!(y > 57) || !(y < 65)) && (!(y > 70) || !(y < 97)););
					return T(e, x + (r < 6 && 32 == M() && 32 == A()));
				}(x - 1, 7);
				continue;
			case 47:
				switch (M()) {
					case 42:
					case 47:
						g((p = function(e, r) {
							for (; A();) if (e + y === 57) break;
							else if (e + y === 84 && 47 === M()) break;
							return "/*" + T(r, x - 1) + "*" + i(47 === e ? e : A());
						}(A(), x), O(p, n, c, a, i(y), d(p, 2, -2), 0)), l);
						break;
					default: G += "/";
				}
				break;
			case 123 * F: o[E++] = m(G) * U;
			case 125 * F:
			case 59:
			case 0:
				switch (W) {
					case 0:
					case 125: N = 0;
					case 59 + S:
						-1 == U && (G = h(G, /\f/g, "")), I > 0 && m(G) - R && g(I > 32 ? L(G + ";", t, c, R - 1) : L(h(G, " ", "") + ";", t, c, R - 2), l);
						break;
					case 59: G += ";";
					default: if (g(q = K(G, n, c, E, S, s, o, Y, Z = [], _ = [], R), u), 123 === W) if (0 === S) e(G, n, q, q, Z, u, R, o, _);
					else switch (99 === z && 110 === k(G, 3) ? 100 : z) {
						case 100:
						case 108:
						case 109:
						case 115:
							e(r, q, q, t && g(K(r, q, q, 0, 0, s, o, Y, s, Z = [], R), _), s, _, R, o, t ? Z : _);
							break;
						default: e(G, q, q, q, [""], _, 0, o, _);
					}
				}
				E = S = I = 0, F = U = 1, Y = G = "", R = f;
				break;
			case 58: R = 1 + m(G), I = B;
			default:
				if (F < 1) {
					if (123 == W) --F;
					else if (125 == W && 0 == F++ && 125 == (y = x > 0 ? k(C, --x) : 0, w--, 10 === y && (w = 1, v--), y)) continue;
				}
				switch (G += i(W), W * F) {
					case 38:
						U = S > 0 ? 1 : (G += "\f", -1);
						break;
					case 44:
						o[E++] = (m(G) - 1) * U, U = 1;
						break;
					case 64:
						45 === M() && (G += D(A())), z = M(), S = R = m(Y = G += function(e) {
							for (; !j(M());) A();
							return T(e, x);
						}(x)), W++;
						break;
					case 45: 45 === B && 2 == m(G) && (F = 0);
				}
		}
		return u;
	}("", null, null, null, [""], e = R(e), 0, [0], e));
}
function K(e, r, n, a, t, s, i, f, o, l, b) {
	for (var k = t - 1, m = 0 === t ? s : [""], g = m.length, p = 0, v = 0, w = 0; p < a; ++p) for (var E = 0, x = d(e, k + 1, k = u(v = i[p])), y = e; E < g; ++E) (y = (v > 0 ? m[E] + " " + x : h(x, /&\f/g, m[E])).trim()) && (o[w++] = y);
	return O(e, r, n, 0 === t ? c : f, o, l, b);
}
function L(e, r, n, a) {
	return O(e, r, n, t, d(e, 0, a), d(e, a + 1, -1), a);
}
function B(e, r) {
	for (var n = "", a = e.length, c = 0; c < a; c++) n += r(e[c], c, e, r) || "";
	return n;
}
function F(e, r, n, u) {
	switch (e.type) {
		case "@layer": if (e.children.length) break;
		case "@import":
		case t: return e.return = e.return || e.value;
		case a: return "";
		case s: return e.return = e.value + "{" + B(e.children, u) + "}";
		case c: e.value = e.props.join(",");
	}
	return m(n = B(e.children, u)) ? e.return = e.value + "{" + n + "}" : "";
}
function N(e) {
	var r = e.length;
	return function(n, a, c, t) {
		for (var s = "", u = 0; u < r; u++) s += e[u](n, a, c, t) || "";
		return s;
	};
}
function U(e) {
	return function(r) {
		!r.root && (r = r.return) && e(r);
	};
}
export { t as C, c as D, e as E, n as O, m as S, r as T, i as _, I as a, l as b, z as c, M as d, x as f, p as g, k as h, F as i, D as l, j as m, U as n, R as o, T as p, B as r, S as s, N as t, A as u, o as v, s as w, h as x, b as y };
