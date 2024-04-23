var e = function() {
  var e2 = document.getSelection();
  if (!e2.rangeCount)
    return function() {
    };
  for (var t = document.activeElement, n = [], a = 0; a < e2.rangeCount; a++)
    n.push(e2.getRangeAt(a));
  switch (t.tagName.toUpperCase()) {
    case "INPUT":
    case "TEXTAREA":
      t.blur();
      break;
    default:
      t = null;
  }
  return e2.removeAllRanges(), function() {
    "Caret" === e2.type && e2.removeAllRanges(), e2.rangeCount || n.forEach(function(t2) {
      e2.addRange(t2);
    }), t && t.focus();
  };
};
export {
  e as t
};
