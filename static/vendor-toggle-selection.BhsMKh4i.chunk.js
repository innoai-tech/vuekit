import { t as e } from "./rolldown-runtime.D8qhy2Lt.chunk.js";
var t = e((e, t) => {
	t.exports = function() {
		var e = document.getSelection();
		if (!e.rangeCount) return function() {};
		for (var t = document.activeElement, a = [], o = 0; o < e.rangeCount; o++) a.push(e.getRangeAt(o));
		switch (t.tagName.toUpperCase()) {
			case "INPUT":
			case "TEXTAREA":
				t.blur();
				break;
			default: t = null;
		}
		return e.removeAllRanges(), function() {
			"Caret" === e.type && e.removeAllRanges(), e.rangeCount || a.forEach(function(t) {
				e.addRange(t);
			}), t && t.focus();
		};
	};
}), a = e((e, a) => {
	var o = t(), r = {
		"text/plain": "Text",
		"text/html": "Url",
		default: "Text"
	};
	a.exports = function(e, t) {
		var a, n, c, l, s, i, p, d, u = !1;
		t || (t = {}), c = t.debug || !1;
		try {
			if (s = o(), i = document.createRange(), p = document.getSelection(), (d = document.createElement("span")).textContent = e, d.ariaHidden = "true", d.style.all = "unset", d.style.position = "fixed", d.style.top = 0, d.style.clip = "rect(0, 0, 0, 0)", d.style.whiteSpace = "pre", d.style.webkitUserSelect = "text", d.style.MozUserSelect = "text", d.style.msUserSelect = "text", d.style.userSelect = "text", d.addEventListener("copy", function(a) {
				if (a.stopPropagation(), t.format) if (a.preventDefault(), void 0 === a.clipboardData) {
					c && console.warn("unable to use e.clipboardData"), c && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
					var o = r[t.format] || r.default;
					window.clipboardData.setData(o, e);
				} else a.clipboardData.clearData(), a.clipboardData.setData(t.format, e);
				t.onCopy && (a.preventDefault(), t.onCopy(a.clipboardData));
			}), document.body.appendChild(d), i.selectNodeContents(d), p.addRange(i), !document.execCommand("copy")) throw Error("copy command was unsuccessful");
			u = !0;
		} catch (o) {
			c && console.error("unable to copy using execCommand: ", o), c && console.warn("trying IE specific stuff");
			try {
				window.clipboardData.setData(t.format || "text", e), t.onCopy && t.onCopy(window.clipboardData), u = !0;
			} catch (o) {
				c && console.error("unable to copy using clipboardData: ", o), c && console.error("falling back to prompt"), a = "message" in t ? t.message : "Copy to clipboard: #{key}, Enter", n = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C", l = a.replace(/#{\s*key\s*}/g, n), window.prompt(l, e);
			}
		} finally {
			p && ("function" == typeof p.removeRange ? p.removeRange(i) : p.removeAllRanges()), d && document.body.removeChild(d), s();
		}
		return u;
	};
});
export { a as t };
