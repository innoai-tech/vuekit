import { t as e } from "./vendor--toggle-selection.C0yjZLCq.chunk.js";
var t, o = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, a = { "text/plain": "Text", "text/html": "Url", default: "Text" };
let n = (t = function(t2, o2) {
  var n2, l, r, c, s, i, d, p, f = false;
  o2 || (o2 = {}), r = o2.debug || false;
  try {
    if (s = e(), i = document.createRange(), d = document.getSelection(), (p = document.createElement("span")).textContent = t2, p.ariaHidden = "true", p.style.all = "unset", p.style.position = "fixed", p.style.top = 0, p.style.clip = "rect(0, 0, 0, 0)", p.style.whiteSpace = "pre", p.style.webkitUserSelect = "text", p.style.MozUserSelect = "text", p.style.msUserSelect = "text", p.style.userSelect = "text", p.addEventListener("copy", function(e2) {
      if (e2.stopPropagation(), o2.format) {
        if (e2.preventDefault(), void 0 === e2.clipboardData) {
          r && console.warn("unable to use e.clipboardData"), r && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
          var n3 = a[o2.format] || a.default;
          window.clipboardData.setData(n3, t2);
        } else
          e2.clipboardData.clearData(), e2.clipboardData.setData(o2.format, t2);
      }
      o2.onCopy && (e2.preventDefault(), o2.onCopy(e2.clipboardData));
    }), document.body.appendChild(p), i.selectNodeContents(p), d.addRange(i), !document.execCommand("copy"))
      throw Error("copy command was unsuccessful");
    f = true;
  } catch (e2) {
    r && console.error("unable to copy using execCommand: ", e2), r && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(o2.format || "text", t2), o2.onCopy && o2.onCopy(window.clipboardData), f = true;
    } catch (e3) {
      r && console.error("unable to copy using clipboardData: ", e3), r && console.error("falling back to prompt"), n2 = "message" in o2 ? o2.message : "Copy to clipboard: #{key}, Enter", l = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C", c = n2.replace(/#{\s*key\s*}/g, l), window.prompt(c, t2);
    }
  } finally {
    d && ("function" == typeof d.removeRange ? d.removeRange(i) : d.removeAllRanges()), p && document.body.removeChild(p), s();
  }
  return f;
}).__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
export {
  o as a,
  n as c
};
