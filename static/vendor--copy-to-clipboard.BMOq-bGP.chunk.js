import { x as e } from "./lib--nodepkg-vuekit.C4CbSFwU.chunk.js";
import { t } from "./vendor--toggle-selection.C0yjZLCq.chunk.js";
var o = { "text/plain": "Text", "text/html": "Url", default: "Text" };
let a = e(function(e2, a2) {
  var n, r, c, l, s, i, p, d, u = false;
  a2 || (a2 = {}), c = a2.debug || false;
  try {
    if (s = t(), i = document.createRange(), p = document.getSelection(), (d = document.createElement("span")).textContent = e2, d.ariaHidden = "true", d.style.all = "unset", d.style.position = "fixed", d.style.top = 0, d.style.clip = "rect(0, 0, 0, 0)", d.style.whiteSpace = "pre", d.style.webkitUserSelect = "text", d.style.MozUserSelect = "text", d.style.msUserSelect = "text", d.style.userSelect = "text", d.addEventListener("copy", function(t2) {
      if (t2.stopPropagation(), a2.format) {
        if (t2.preventDefault(), void 0 === t2.clipboardData) {
          c && console.warn("unable to use e.clipboardData"), c && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
          var n2 = o[a2.format] || o.default;
          window.clipboardData.setData(n2, e2);
        } else
          t2.clipboardData.clearData(), t2.clipboardData.setData(a2.format, e2);
      }
      a2.onCopy && (t2.preventDefault(), a2.onCopy(t2.clipboardData));
    }), document.body.appendChild(d), i.selectNodeContents(d), p.addRange(i), !document.execCommand("copy"))
      throw Error("copy command was unsuccessful");
    u = true;
  } catch (t2) {
    c && console.error("unable to copy using execCommand: ", t2), c && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(a2.format || "text", e2), a2.onCopy && a2.onCopy(window.clipboardData), u = true;
    } catch (t3) {
      c && console.error("unable to copy using clipboardData: ", t3), c && console.error("falling back to prompt"), n = "message" in a2 ? a2.message : "Copy to clipboard: #{key}, Enter", r = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C", l = n.replace(/#{\s*key\s*}/g, r), window.prompt(l, e2);
    }
  } finally {
    p && ("function" == typeof p.removeRange ? p.removeRange(i) : p.removeAllRanges()), d && document.body.removeChild(d), s();
  }
  return u;
});
export {
  a as c
};
