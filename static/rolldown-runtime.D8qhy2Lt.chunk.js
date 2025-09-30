var e = Object.create, t = Object.defineProperty, r = Object.getOwnPropertyDescriptor, o = Object.getOwnPropertyNames, n = Object.getPrototypeOf, a = Object.prototype.hasOwnProperty, l = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), p = (e) => {
	let r = {};
	for (var o in e) t(r, o, {
		get: e[o],
		enumerable: !0
	});
	return r;
}, b = (l, p, b) => (b = null != l ? e(n(l)) : {}, ((e, n, l, p) => {
	if (n && "object" == typeof n || "function" == typeof n) for (var b, c = o(n), u = 0, s = c.length; u < s; u++) b = c[u], a.call(e, b) || void 0 === b || t(e, b, {
		get: ((e) => n[e]).bind(null, b),
		enumerable: !(p = r(n, b)) || p.enumerable
	});
	return e;
})(!p && l && l.__esModule ? b : t(b, "default", {
	value: l,
	enumerable: !0
}), l));
export { p as n, b as r, l as t };
