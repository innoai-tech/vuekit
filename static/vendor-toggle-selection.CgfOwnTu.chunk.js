import { t as e } from "./rolldown-runtime.D8qhy2Lt.chunk.js";
var t = e((e, t) => {
	t.exports = function() {
		var e = document.getSelection();
		if (!e.rangeCount) return function() {};
		for (var t = document.activeElement, n = [], r = 0; r < e.rangeCount; r++) n.push(e.getRangeAt(r));
		switch (t.tagName.toUpperCase()) {
			case "INPUT":
			case "TEXTAREA":
				t.blur();
				break;
			default: t = null;
		}
		return e.removeAllRanges(), function() {
			"Caret" === e.type && e.removeAllRanges(), e.rangeCount || n.forEach(function(t) {
				e.addRange(t);
			}), t && t.focus();
		};
	};
});
export { t };
