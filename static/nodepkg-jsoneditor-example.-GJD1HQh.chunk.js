import { t as e } from "./vendor-innoai-tech-jsoneditor.VwAXinyt.chunk.js";
function t(e, t, o, r) {
	var n, c = arguments.length, f = c < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, o) : r;
	if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) f = Reflect.decorate(e, t, o, r);
	else for (var a = e.length - 1; a >= 0; a--) (n = e[a]) && (f = (c < 3 ? n(f) : c > 3 ? n(t, o, f) : n(t, o)) || f);
	return c > 3 && f && Object.defineProperty(t, o, f), f;
}
export { e as default, t };
