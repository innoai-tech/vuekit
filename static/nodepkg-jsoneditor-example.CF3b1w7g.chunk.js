import { V as t, h as e, m as o, o as s, u as a } from "./lib-nodepkg-vuekit.Dng4O0gc.chunk.js";
import { c as r, d as n, f as i, l as p, m as l, n as d, p as f, r as c, s as y, t as m, u as v } from "./lib-nodepkg-typedef.WoOPnAhr.chunk.js";
import { n as h, r as u, t as j } from "./vendor-rxjs.DGO3ID4f.chunk.js";
import { n as g } from "./index.DvdiqX_t.entry.js";
function k(t, e, o, s) {
	var a, r = arguments.length, n = r < 3 ? e : null === s ? s = Object.getOwnPropertyDescriptor(e, o) : s;
	if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, o, s);
	else for (var i = t.length - 1; i >= 0; i--) (a = t[i]) && (n = (r < 3 ? a(n) : r > 3 ? a(e, o, n) : a(e, o)) || n);
	return r > 3 && n && Object.defineProperty(e, o, n), n;
}
var x, b = ((x = b || {}).A = "A", x.B = "B", x), A = class {
	name;
	port;
};
k([m({ title: "名称" }), f()], A.prototype, "name", void 0), k([m({ title: "端口号" }), l(y(), f())], A.prototype, "port", void 0);
var O = class {
	kind;
	name;
	annotations;
	seconds;
	addresses;
	ports;
	paths;
	manifests;
	anyjson;
};
k([m({ title: "类型" }), p(b)], O.prototype, "kind", void 0), k([
	m({
		title: "名称",
		description: "详细描述"
	}),
	f(),
	r(2)
], O.prototype, "name", void 0), k([m({ title: "注解" }), i(f(), f())], O.prototype, "annotations", void 0), k([
	m({ title: "秒数" }),
	y(),
	n()
], O.prototype, "seconds", void 0), k([
	m({ title: "地址" }),
	c(f()),
	n()
], O.prototype, "addresses", void 0), k([m({ title: "端口" }), c(v(A))], O.prototype, "ports", void 0), k([m({ title: "路径" }), l(f(), c(f()))], O.prototype, "paths", void 0), k([
	m({ title: "其他配置" }),
	i(f(), d()),
	n()
], O.prototype, "manifests", void 0), k([
	m({ title: "任意类型" }),
	i(f(), d()),
	n()
], O.prototype, "anyjson", void 0);
var R = t(() => {
	let t = v(O), r = h.of(t, {
		name: "name",
		annotations: { longtext: Array(100).fill("longtext").join("") },
		ports: [],
		paths: "/x",
		manifests: { x: {} },
		anyjson: {
			obj: { a: 1 },
			arr: [
				"1",
				"2",
				"3"
			],
			nested: [{ a: 1 }, { a: 2 }]
		}
	});
	return o(r, e((e) => {
		let [o] = t.validate(e);
		if (o) for (let t of o.failures()) r.setError(t.path, t.message);
		console.log(e);
	}), a()), () => s(g, {
		sx: {
			width: "100%",
			height: "100%",
			pr: "20%"
		},
		children: s(u, {
			value: r,
			children: s(j, {})
		})
	});
});
export { R as default };
