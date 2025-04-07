import { c as createProvider, I as ImmerBehaviorSubject, j as jsx, a as component$, r as rx, s as subscribeUntilUnmount, b as cloneVNode, d as jsxs, e as ref, f as component, T as Teleport, F as Fragment, o as observableRef, t as tapEffect, g as ref$1 } from './lib-nodepkg-vuekit.2hehQ1Uy.chunk.js';
import { J as JSONPointer, o as object, g as getDefaultExportFromCjs, S as Schema, a as array, b as any, r as record, s as string, E as EmptyContext } from './lib-nodepkg-typedef.CPsLm4bM.chunk.js';
import { s as styled, a as size, P as Popper, v as variant, b as alpha, B as Box } from './lib-nodepkg-vueuikit.QdVl-CQk.chunk.js';
import { I as IconButton, a as Icon } from './lib-nodepkg-vuematerial.1v9uU9ys.chunk.js';
import { m as mdiHelpBox, a as mdiContentCopy, b as mdiCancel, c as mdiCheckBold, d as mdiMinusBoxOutline } from './webapp-vuekit-layout.CSS9QP55.chunk.js';
import { O as Observable, s as switchMap, m as merge, f as fromEvent, d as delay, t as tap, E as EMPTY, c as combineLatest, B as BehaviorSubject, S as Subject } from './vendor-rxjs.BtFJbEzF.chunk.js';
import { i as isPlainObject, g as get, a as isUndefined, b as isFunction, s as set, l as last, c as isNumber, d as isArray, e as isObject } from './vendor-innoai-tech-lodash.DAei4CjR.chunk.js';
import { M as Markdown } from './lib-nodepkg-vuemarkdown.DMRCth31.chunk.js';

class JSONEditor extends Observable {
  constructor(typedef, initials) {
    super((subscriber) => {
      const sub = this.#values$.subscribe(subscriber);
      return () => {
        sub.unsubscribe();
      };
    });
    this.typedef = typedef;
    this.initials = initials;
    this.#values$.next(initials);
  }
  static of(typedef, initials) {
    return new JSONEditor(typedef, initials ?? (typedef.type == "array" ? [] : {}));
  }
  #values$ = new ImmerBehaviorSubject({});
  isDirty(value, path) {
    if (!isPlainObject(value)) {
      const v = get(this.initials, path);
      return isUndefined(v) || v !== value;
    }
    return false;
  }
  update(path, valueOrMut, defaultValue) {
    this.#error$.next({});
    if (path.length == 0) {
      this.#values$.next(valueOrMut);
      return;
    }
    if (isFunction(valueOrMut)) {
      this.#values$.next((values) => {
        const value = get(values, path, defaultValue);
        valueOrMut(value);
        set(values, path, value);
      });
    } else {
      this.#values$.next((values) => {
        set(values, path, valueOrMut);
      });
    }
  }
  delete(path) {
    if (path.length == 0) {
      return;
    }
    this.#values$.next((values) => {
      const propOrIdx = last(path);
      if (isNumber(propOrIdx)) {
        const parent2 = path.slice(0, path.length - 1);
        const node2 = parent2.length > 0 ? get(values, parent2) : values;
        if (isArray(node2)) {
          node2.splice(propOrIdx, 1);
          return;
        }
      }
      const parent = path.slice(0, path.length - 1);
      const node = parent.length > 0 ? get(values, parent) : values;
      delete node[propOrIdx];
    });
  }
  #error$ = new ImmerBehaviorSubject({});
  get error$() {
    return this.#error$;
  }
  setError(path, error) {
    const pointer = JSONPointer.create(path);
    this.#error$.next((errors) => {
      if (error === null) {
        delete errors[pointer];
      } else {
        errors[pointer] = error;
      }
    });
  }
}
const JSONEditorProvider = createProvider(() => new JSONEditor(object(), {}));
const JSONEditorSlotsProvider = createProvider(() => {
  return {};
});

const ActionToolbar = styled("span")({
  px: 2,
  pos: "relative",
  display: "flex",
  alignItems: "center",
  gap: 8,
  visibility: "hidden"
});
const Actions = styled("span", ({}, { slots }) => {
  return (Root) => /* @__PURE__ */ jsx(Root, { children: /* @__PURE__ */ jsx(ActionToolbar, { "data-visible-on-hover": true, children: slots.default?.() }) });
})({
  display: "flex"
});
const ActionBtn = styled(IconButton)({
  transition: "none",
  width: 24,
  height: 24,
  rounded: 12,
  [`& ${Icon}`]: {
    svg: {
      width: 18,
      height: 18
    }
  }
});

class PopupStatus extends ImmerBehaviorSubject {
  static from(el$) {
    const status$ = new PopupStatus(false);
    rx(el$, switchMap((inputEl) => {
      if (inputEl) {
        return merge(rx(fromEvent(inputEl, "focus"), tap(() => {
          status$.show();
        })), rx(
          fromEvent(inputEl, "blur"),
          // delay to avoid break other actions
          delay(200),
          tap(() => {
            if (status$.value) {
              status$.hide();
            }
          })
        ));
      }
      return EMPTY;
    }), subscribeUntilUnmount());
    return status$;
  }
  show() {
    this.next(true);
  }
  hide() {
    this.next(false);
  }
}
const sameWidth = size({
  apply({ elements, rects }) {
    Object.assign(elements.floating.style, {
      width: `${rects.reference.width}px`
    });
  }
});
const Menu = component$((props, { emit, slots, render }) => {
  const open$ = props.open$ ?? new PopupStatus(false);
  const handleSelected = (e) => {
    const $el = [
      e.target,
      ...e.composedPath()
    ].find((t) => {
      return t?.hasAttribute?.("data-value");
    });
    if ($el) {
      const selected = $el.getAttribute("data-value");
      if (!isUndefined(selected)) {
        emit("selected", selected);
        open$.hide();
      }
    }
  };
  return rx(open$, render((isOpen) => {
    return /* @__PURE__ */ jsx(Popper, { isOpen, onClickOutside: () => open$.hide(), onEscKeydown: () => open$.hide(), placement: "bottom-start", middleware: [
      sameWidth
    ], $content: /* @__PURE__ */ jsx(PopoverContainer, { onClick: handleSelected, children: slots.content?.() }), children: slots.default?.()?.[0] ?? null });
  }));
});
component$((props, { slots, render }) => {
  const open$ = props.open$ ?? new PopupStatus(false);
  return rx(open$, render((isOpen) => {
    return /* @__PURE__ */ jsx(Popper, { isOpen, onClickOutside: () => open$.hide(), placement: "bottom-start", $content: /* @__PURE__ */ jsx(PopoverContainer, { children: slots.content?.() }), children: slots.default?.()?.[0] ?? null });
  }));
});
const PopoverContainer = styled("div")({
  textStyle: "sys.body-small",
  pos: "relative",
  roundedBottom: "sm",
  containerStyle: "sys.surface-container-lowest",
  borderBottom: "1px solid",
  borderRight: "1px solid",
  borderLeft: "1px solid",
  borderColor: variant("sys.outline-variant", alpha(0.38))
});
const MenuItem = styled("div")({
  px: 8,
  py: 2,
  gap: 8,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  textAlign: "right",
  textStyle: "sys.body-small",
  cursor: "pointer",
  _hover: {
    containerStyle: "sys.surface-container"
  },
  _focus: {
    containerStyle: "sys.surface-container",
    outline: 0
  }
});

const Tooltip = component$((props, { slots, render }) => {
  const open$ = new PopupStatus(false);
  return rx(open$, render((isOpen) => {
    const child = slots.default?.()[0];
    return /* @__PURE__ */ jsx(Popper, { isOpen, placement: props.placement ?? "left", $content: /* @__PURE__ */ jsx(TooltipWrapper, { children: /* @__PURE__ */ jsx(TooltipContainer, { children: slots.title() }) }), children: child ? cloneVNode(child, {
      onMouseover: () => {
        open$.show();
      },
      onMouseout: () => {
        open$.hide();
      }
    }) : null });
  }));
});
const TooltipContainer = styled("div")({
  py: 4,
  px: 12,
  rounded: "xs",
  shadow: "3",
  textStyle: "sys.body-small",
  containerStyle: "sys.on-surface",
  pos: "relative",
  zIndex: 100
});
const TooltipWrapper = styled("div")({
  px: 8
});

const Token = styled("span")({
  textStyle: "sys.label-small",
  fontWeight: "bold",
  fontFamily: "inherit",
  fontSize: 12,
  lineHeight: 24,
  wordBreak: "keep-all",
  whiteSpace: "nowrap",
  font: "code",
  opacity: 0.3
});
const PropName = component$((props, { slots }) => {
  return () => {
    return /* @__PURE__ */ jsxs(PropNameView, { "data-deprecated": props.deprecated, "data-optional": props.optional, "data-nullable": props.nullable, children: [
      slots.leading && /* @__PURE__ */ jsx(PropLeading, { "data-visible-on-hover": true, children: slots.leading() }),
      slots.default?.()
    ] });
  };
});
const PropLeading = styled(ActionToolbar)({
  position: "absolute",
  ml: -28
});
const PropNameView = styled("div")({
  position: "relative",
  display: "flex",
  alignItems: "center",
  textStyle: "sys.label-small",
  fontWeight: "bold",
  fontFamily: "inherit",
  wordBreak: "keep-all",
  whiteSpace: "nowrap",
  border: "1px solid",
  borderColor: "rgba(0,0,0,0)",
  fontSize: 12,
  lineHeight: 24,
  _deprecated: {
    textDecoration: "line-through"
  },
  _optional: {
    "&:after": {
      content: `"?"`,
      color: "sys.secondary",
      opacity: 0.58
    }
  }
});
const LineTitle = styled("div")({
  position: "absolute",
  zIndex: 1,
  left: 0,
  opacity: 0.58,
  fontSize: 10,
  lineHeight: 10,
  top: 0,
  "& > *": {
    display: "flex",
    alignItems: "center",
    gap: 4,
    "&::before": {
      content: `"// "`,
      font: "code"
    }
  }
});
const LineError = styled("div")({
  display: "block",
  fontSize: 10,
  lineHeight: 14,
  color: "sys.error"
});
const LineContainer = styled("div")({
  position: "relative",
  py: 4,
  _hover: {
    containerStyle: "sys.surface-container",
    "& [data-visible-on-hover]": {
      visibility: "visible"
    }
  },
  "&:focus-within": {
    containerStyle: "sys.surface-container"
  },
  _dirty: {
    bgColor: variant("sys.warning-container", alpha(0.38))
  },
  _error: {
    bgColor: "sys.error-container"
  },
  [`&:has(${Actions})`]: {
    [`& > ${LineError}`]: {
      display: "none"
    },
    _error: {
      bgColor: "inherit"
    }
  }
});
const LayoutContextProvider = createProvider(() => {
  return {
    indent: 0,
    $container: ref(null)
  };
}, {
  name: "IntentContext"
});
const Block = component((props, { slots }) => {
  const ctx = LayoutContextProvider.use();
  const $container = ref(null);
  const $trailing = ref(null);
  return () => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Token, { children: props.openToken }),
    slots.leading?.(),
    /* @__PURE__ */ jsxs(Teleport, { to: ctx.$container.value, children: [
      /* @__PURE__ */ jsxs(LineSection, { "data-indent": ctx.indent, children: [
        /* @__PURE__ */ jsx(Lines, { ref: $container }),
        /* @__PURE__ */ jsx(LinesTrailing, { ref: $trailing }),
        $trailing.value && /* @__PURE__ */ jsx(LayoutContextProvider, { value: {
          $container: $trailing,
          indent: 1 + (ctx.indent ?? 0)
        }, children: slots.trailing?.() })
      ] }),
      /* @__PURE__ */ jsx(LineRow, { style: {
        paddingLeft: `${ctx.indent * 32}px`,
        display: "flex"
      }, children: /* @__PURE__ */ jsx(Token, { children: props.closeToken }) })
    ] }),
    $container.value && /* @__PURE__ */ jsx(LayoutContextProvider, { value: {
      $container,
      indent: 1 + (ctx.indent ?? 0)
    }, children: slots.default?.() })
  ] });
});
const Line = component$((props, { slots, render }) => {
  const ctx = LayoutContextProvider.use();
  const editor$ = JSONEditorProvider.use();
  const $line = rx(editor$.error$, render((errors) => {
    const pointer = JSONPointer.create(props.path);
    const hasError = !props.viewOnly && !!errors[pointer];
    return /* @__PURE__ */ jsxs(LineContainer, { "data-error": hasError, "data-dirty": props.dirty, style: {
      paddingLeft: `${ctx.indent * 32}px`
    }, children: [
      (props.title || props.description) && /* @__PURE__ */ jsx(LineTitle, { style: {
        paddingLeft: `${ctx.indent * 32}px`
      }, children: props.description ? /* @__PURE__ */ jsx(Tooltip, { $title: /* @__PURE__ */ jsx(Description, { children: /* @__PURE__ */ jsx(Markdown, { text: props.description }) }), children: /* @__PURE__ */ jsxs("div", { children: [
        props.title,
        " ",
        /* @__PURE__ */ jsx(Icon, { path: mdiHelpBox })
      ] }) }) : /* @__PURE__ */ jsx("span", { children: props.title }) }),
      /* @__PURE__ */ jsx(LineRow, { children: slots.default?.() }),
      hasError && /* @__PURE__ */ jsx(LineError, { children: `${errors[pointer]}` })
    ] });
  }));
  return () => /* @__PURE__ */ jsx(Teleport, { to: ctx.$container.value, children: $line });
});
const Lines = styled("div")({});
const LineSection = styled("section")({});
const LinesTrailing = styled("div")({});
const LineRow = styled("div")({
  display: "flex",
  alignItems: "start",
  pr: 10
});
const Description = styled("span")({
  display: "block",
  textStyle: "sys.body-small",
  "& p": {
    my: 1,
    wordBreak: "keep-all",
    whiteSpace: "nowrap",
    opacity: 0.7
  },
  "& code": {
    wordBreak: "keep-all",
    whiteSpace: "nowrap"
  }
});

const FormControls = styled("form")({
  display: "flex",
  pos: "absolute",
  right: 0,
  bottom: 0,
  px: 8
});
styled("div")({
  display: "flex",
  flexDirection: "column",
  pos: "relative",
  textarea: {
    minW: 400,
    outline: "none",
    border: "none",
    bg: "none",
    py: 8,
    px: 12
  }
});
styled("div")({
  display: "flex",
  alignItems: "center",
  gap: 8,
  pos: "relative",
  px: 8,
  input: {
    outline: "none",
    border: "none",
    bg: "none",
    minWidth: "10vw",
    py: 8,
    px: 12
  },
  [`& ${FormControls}`]: {
    pos: "relative",
    px: 0
  }
});

var toggleSelection;
var hasRequiredToggleSelection;

function requireToggleSelection () {
	if (hasRequiredToggleSelection) return toggleSelection;
	hasRequiredToggleSelection = 1;
	toggleSelection = function () {
	  var selection = document.getSelection();
	  if (!selection.rangeCount) {
	    return function () {};
	  }
	  var active = document.activeElement;

	  var ranges = [];
	  for (var i = 0; i < selection.rangeCount; i++) {
	    ranges.push(selection.getRangeAt(i));
	  }

	  switch (active.tagName.toUpperCase()) { // .toUpperCase handles XHTML
	    case 'INPUT':
	    case 'TEXTAREA':
	      active.blur();
	      break;

	    default:
	      active = null;
	      break;
	  }

	  selection.removeAllRanges();
	  return function () {
	    selection.type === 'Caret' &&
	    selection.removeAllRanges();

	    if (!selection.rangeCount) {
	      ranges.forEach(function(range) {
	        selection.addRange(range);
	      });
	    }

	    active &&
	    active.focus();
	  };
	};
	return toggleSelection;
}

var copyToClipboard$1;
var hasRequiredCopyToClipboard;

function requireCopyToClipboard () {
	if (hasRequiredCopyToClipboard) return copyToClipboard$1;
	hasRequiredCopyToClipboard = 1;

	var deselectCurrent = requireToggleSelection();

	var clipboardToIE11Formatting = {
	  "text/plain": "Text",
	  "text/html": "Url",
	  "default": "Text"
	};

	var defaultMessage = "Copy to clipboard: #{key}, Enter";

	function format(message) {
	  var copyKey = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
	  return message.replace(/#{\s*key\s*}/g, copyKey);
	}

	function copy(text, options) {
	  var debug,
	    message,
	    reselectPrevious,
	    range,
	    selection,
	    mark,
	    success = false;
	  if (!options) {
	    options = {};
	  }
	  debug = options.debug || false;
	  try {
	    reselectPrevious = deselectCurrent();

	    range = document.createRange();
	    selection = document.getSelection();

	    mark = document.createElement("span");
	    mark.textContent = text;
	    // avoid screen readers from reading out loud the text
	    mark.ariaHidden = "true";
	    // reset user styles for span element
	    mark.style.all = "unset";
	    // prevents scrolling to the end of the page
	    mark.style.position = "fixed";
	    mark.style.top = 0;
	    mark.style.clip = "rect(0, 0, 0, 0)";
	    // used to preserve spaces and line breaks
	    mark.style.whiteSpace = "pre";
	    // do not inherit user-select (it may be `none`)
	    mark.style.webkitUserSelect = "text";
	    mark.style.MozUserSelect = "text";
	    mark.style.msUserSelect = "text";
	    mark.style.userSelect = "text";
	    mark.addEventListener("copy", function(e) {
	      e.stopPropagation();
	      if (options.format) {
	        e.preventDefault();
	        if (typeof e.clipboardData === "undefined") { // IE 11
	          debug && console.warn("unable to use e.clipboardData");
	          debug && console.warn("trying IE specific stuff");
	          window.clipboardData.clearData();
	          var format = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting["default"];
	          window.clipboardData.setData(format, text);
	        } else { // all other browsers
	          e.clipboardData.clearData();
	          e.clipboardData.setData(options.format, text);
	        }
	      }
	      if (options.onCopy) {
	        e.preventDefault();
	        options.onCopy(e.clipboardData);
	      }
	    });

	    document.body.appendChild(mark);

	    range.selectNodeContents(mark);
	    selection.addRange(range);

	    var successful = document.execCommand("copy");
	    if (!successful) {
	      throw new Error("copy command was unsuccessful");
	    }
	    success = true;
	  } catch (err) {
	    debug && console.error("unable to copy using execCommand: ", err);
	    debug && console.warn("trying IE specific stuff");
	    try {
	      window.clipboardData.setData(options.format || "text", text);
	      options.onCopy && options.onCopy(window.clipboardData);
	      success = true;
	    } catch (err) {
	      debug && console.error("unable to copy using clipboardData: ", err);
	      debug && console.error("falling back to prompt");
	      message = format("message" in options ? options.message : defaultMessage);
	      window.prompt(message, text);
	    }
	  } finally {
	    if (selection) {
	      if (typeof selection.removeRange == "function") {
	        selection.removeRange(range);
	      } else {
	        selection.removeAllRanges();
	      }
	    }

	    if (mark) {
	      document.body.removeChild(mark);
	    }
	    reselectPrevious();
	  }

	  return success;
	}

	copyToClipboard$1 = copy;
	return copyToClipboard$1;
}

var copyToClipboardExports = requireCopyToClipboard();
const copyToClipboard = /*@__PURE__*/getDefaultExportFromCjs(copyToClipboardExports);

const CopyAsJSONIconBtn = component$((props, {}) => {
  return () => /* @__PURE__ */ jsx(Tooltip, { $title: "复制当前节点为 JSON 字符串", children: /* @__PURE__ */ jsx(ActionBtn, { type: "button", onClick: () => copyToClipboard(JSON.stringify(props.value, null, 2)), children: /* @__PURE__ */ jsx(Icon, { path: mdiContentCopy }) }) });
});

class InputText extends BehaviorSubject {
  static from(inputEl$) {
    const input$ = new InputText("");
    rx(inputEl$, switchMap((inputEl) => {
      if (!inputEl) {
        return EMPTY;
      }
      return rx(fromEvent(inputEl, "input"), tap((e) => {
        input$.next(e.target.value.trim());
      }));
    }), subscribeUntilUnmount());
    return input$;
  }
}
class InputActionSubject extends Subject {
  static from(inputEl$) {
    const inputAction$ = new InputActionSubject();
    rx(inputEl$, switchMap((inputEl) => {
      if (!inputEl) {
        return EMPTY;
      }
      return merge(rx(fromEvent(inputEl, "keypress"), tap((e) => {
        if (e.key === "Enter" && !e.shiftKey) {
          e.preventDefault();
          inputAction$.next({
            type: "COMMIT"
          });
        }
      })), rx(fromEvent(inputEl, "keydown"), tap((e) => {
        switch (e.key) {
          case "Tab":
            if (e.target.getAttribute("data-options")) {
              e.preventDefault();
              inputAction$.next({
                type: "SELECT",
                direction: 1
              });
            }
            break;
          case "ArrowDown":
            if (e.target.getAttribute("data-options")) {
              e.preventDefault();
              inputAction$.next({
                type: "SELECT",
                direction: 1
              });
            }
            break;
          case "ArrowUp":
            if (e.target.getAttribute("data-options")) {
              e.preventDefault();
              inputAction$.next({
                type: "SELECT",
                direction: -1
              });
            }
            break;
        }
      })), rx(fromEvent(inputEl, "keyup"), tap((e) => {
        if (e.key === "Escape") {
          inputAction$.next({
            type: "CANCEL"
          });
        }
      })));
    }), subscribeUntilUnmount());
    return inputAction$;
  }
}
class OneEditing extends Observable {
  static sync(oneEditing$, opt) {
    return rx(merge(rx(oneEditing$, tap((p) => {
      if (p && p == JSONPointer.create(opt.path())) {
        opt.editing$.show();
      }
    })), rx(opt.editing$, delay(1), tap((editing) => {
      if (!editing) {
        oneEditing$.disable(opt.path());
      }
    })), rx(combineLatest([
      opt.value$,
      oneEditing$
    ]), delay(1), tap(([value, anyEditing]) => {
      if (isUndefined(value) && !anyEditing) {
        oneEditing$.enable(opt.path());
      }
    }))), subscribeUntilUnmount());
  }
  #editing = new BehaviorSubject(null);
  constructor() {
    super((subscriber) => {
      const sub = this.#editing.subscribe(subscriber);
      return () => sub.unsubscribe();
    });
  }
  enable(path) {
    if (!this.#editing.value) {
      this.#editing.next(JSONPointer.create(path));
    }
  }
  disable(path) {
    if (this.#editing.value === JSONPointer.create(path)) {
      this.#editing.next(null);
    }
  }
}
const OneEditingProvider = createProvider(() => new OneEditing());
const ValueInput = component$((props, { render }) => {
  const actionsEl$ = observableRef(null);
  const containerEl$ = observableRef(null);
  const inputEl$ = observableRef(null);
  const inputAction$ = InputActionSubject.from(inputEl$);
  const inputText$ = InputText.from(inputEl$);
  const oneEditing$ = OneEditingProvider.use();
  const editing$ = PopupStatus.from(inputEl$);
  const editor$ = JSONEditorProvider.use();
  OneEditing.sync(oneEditing$, {
    editing$,
    value$: props.value$,
    path: () => props.ctx.path
  });
  const selectedIndex = () => {
    if (props.typedef.type === "enums") {
      const enumValues = Schema.schemaProp(props.typedef, "enum") ?? [];
      const i = enumValues.indexOf(props.value);
      if (i > -1) {
        return i;
      }
    }
    return 0;
  };
  const selectFocus$ = new ImmerBehaviorSubject({
    index: selectedIndex()
  });
  const reset = () => {
    inputText$.next("");
    editing$.hide();
  };
  const cancel = () => {
    reset();
    selectFocus$.next({
      index: selectedIndex()
    });
    if (isUndefined(props.value)) {
      editor$.delete(props.ctx.path);
    }
  };
  const commit = (value) => {
    if (props.typedef.type === "enums") {
      const enumValues = Schema.schemaProp(props.typedef, "enum") ?? [];
      value ??= enumValues[selectFocus$.value.index % enumValues.length];
    } else {
      value ??= inputEl$.value?.value ? inputEl$.value?.value : void 0;
    }
    if (isUndefined(value)) {
      editor$.delete(props.ctx.path);
      return;
    }
    const [err, v] = props.typedef.validate(value, {
      coerce: true
    });
    if (!!err) {
      editor$.setError(props.ctx.path, err.message);
      return;
    }
    editor$.update(props.ctx.path, v);
    reset();
  };
  if (props.allowRawJSON) {
    rx(inputText$, tap((input) => {
      const raw = input.trim();
      if (raw.startsWith("{") && raw.endsWith("}") || raw.startsWith("[") && raw.endsWith("]")) {
        try {
          const v = JSON.parse(raw);
          editor$.update(props.ctx.path, v);
          reset();
        } catch (err) {
          editor$.setError(props.ctx.path, "无效的 JSON 字符串");
        }
      }
    }), subscribeUntilUnmount());
  }
  rx(inputAction$, tap((action) => {
    switch (action.type) {
      case "SELECT":
        selectFocus$.next((value) => {
          value.index += action.direction;
        });
        break;
      case "COMMIT":
        commit();
        break;
      case "CANCEL":
        cancel();
        break;
    }
  }), subscribeUntilUnmount());
  let containerHeight;
  rx(merge(rx(containerEl$, tapEffect((containerEl) => {
    if (containerEl) {
      const resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          if (entry.contentBoxSize) {
            containerHeight = entry.contentBoxSize[0]?.blockSize;
          }
        }
      });
      resizeObserver.observe(containerEl);
      return () => {
        resizeObserver.disconnect();
      };
    }
    return () => {
    };
  })), rx(inputEl$, delay(1), tap((inputEl) => {
    if (inputEl) {
      inputEl?.focus();
      if (inputEl.value) {
        inputEl.selectionStart = 0;
        inputEl.selectionEnd = inputEl.value.length;
      }
    }
  })), rx(inputEl$, switchMap((inputEl) => {
    if (inputEl) {
      const initialHeight = containerHeight ? containerHeight - 2 : inputEl.getBoundingClientRect().height;
      const updateHeight = (inputEl2) => {
        inputEl2.style.height = `${initialHeight ?? 0}px`;
        inputEl2.style.height = `${inputEl2.scrollHeight}px`;
      };
      setTimeout(() => updateHeight(inputEl));
      return merge(rx(fromEvent(inputEl, "blur"), tap((e) => {
        if (e.relatedTarget) {
          if (containerEl$.value?.contains(e.relatedTarget) || actionsEl$.value?.contains(e.relatedTarget)) {
            return;
          }
        }
        e.preventDefault();
        commit(inputEl.value);
      })), rx(fromEvent(inputEl, "input"), tap((e) => {
        updateHeight(e.target);
        inputText$.next(e.target.value);
      })));
    }
    return EMPTY;
  }))), subscribeUntilUnmount());
  if (props.typedef.type == "enums") {
    return rx(combineLatest([
      props.value$,
      editing$,
      selectFocus$
    ]), render(([value, editing, { index }]) => {
      const enumValues = Schema.schemaProp(props.typedef, "enum") ?? [];
      const enumLabels = Schema.metaProp(props.typedef, "enumLabels") ?? [];
      return /* @__PURE__ */ jsx(ValueContainer, { ref: containerEl$, onClick: () => {
        editing$.show();
      }, "data-type": typeof value, tabindex: 0, children: editing ? /* @__PURE__ */ jsx(Menu, { onSelected: (value2) => {
        commit(value2);
      }, open$: editing$, $content: /* @__PURE__ */ jsx("div", { ref: actionsEl$, children: enumValues.map((value2, i) => {
        return /* @__PURE__ */ jsx(EnumMenuItem, { "data-focus": index % enumValues.length === i, value: value2, label: enumLabels[i] });
      }) }), children: /* @__PURE__ */ jsx(InputWrapper, { children: /* @__PURE__ */ jsx("input", { value: value == void 0 ? "" : `${value}`, ref: inputEl$, "data-options": true }) }) }) : /* @__PURE__ */ jsx(Value, { children: JSON.stringify(value) ?? "undefined" }) });
    }));
  }
  return rx(combineLatest([
    props.value$,
    editing$
  ]), render(([value, editing]) => {
    return /* @__PURE__ */ jsx(ValueContainer, { ref: containerEl$, onClick: () => {
      editing$.show();
    }, "data-type": typeof value, tabindex: 0, onFocus: () => {
      editing$.show();
    }, children: editing ? /* @__PURE__ */ jsx(Popper, { isOpen: true, placement: "right-start", $content: /* @__PURE__ */ jsxs(ValueInputActions, { ref: actionsEl$, children: [
      /* @__PURE__ */ jsx(ActionBtn, { type: "button", onClick: () => inputAction$.next({
        type: "CANCEL"
      }), children: /* @__PURE__ */ jsx(Icon, { path: mdiCancel }) }),
      /* @__PURE__ */ jsx(ActionBtn, { type: "button", onClick: () => inputAction$.next({
        type: "COMMIT"
      }), children: /* @__PURE__ */ jsx(Icon, { path: mdiCheckBold }) })
    ] }), children: /* @__PURE__ */ jsx(InputWrapper, { children: /* @__PURE__ */ jsx("textarea", { ref: inputEl$, rows: 1, value: value == void 0 ? "" : `${value}` }) }) }) : /* @__PURE__ */ jsx(Value, { children: JSON.stringify(value) ?? "undefined" }) });
  }));
});
const ValueInputActions = styled("div")({
  borderRight: "1px solid",
  borderTop: "1px solid",
  borderBottom: "1px solid",
  borderColor: variant("sys.outline-variant", alpha(0.38)),
  containerStyle: "sys.surface-container-lowest",
  roundedRight: "sm",
  display: "flex",
  px: 2,
  py: 0,
  ml: -4
});
const InputWrapper = styled("div")({
  width: "100%",
  maxWidth: "40vw",
  display: "flex",
  alignItems: "center",
  border: "1px solid",
  overflow: "hidden",
  borderColor: variant("sys.outline-variant", alpha(0.38)),
  opacity: 0.38,
  "&:hover": {
    opacity: 1
  },
  "&:focus-within": {
    opacity: 1
  },
  "& > textarea,input": {
    flex: 1,
    rounded: "xs",
    containerStyle: "sys.surface-container-lowest",
    width: "100%",
    outline: "none",
    border: "none",
    px: 8,
    py: 0,
    m: 0,
    fontSize: "inherit",
    color: "inherit",
    lineHeight: "inherit",
    overflow: "hidden",
    resize: "none",
    "&[data-options]:focus": {
      roundedBottom: 0
    }
  }
});
const Value = styled("div")({
  border: "1px solid",
  borderColor: "rgba(0,0,0,0)",
  maxWidth: "40vw",
  width: "100%",
  overflow: "hidden",
  textOverflow: "ellipsis",
  _hover: {
    textOverflow: "clip",
    whiteSpace: "normal",
    wordBreak: "break-all"
  }
});
const ValueContainer = styled("div")({
  wordBreak: "keep-all",
  whiteSpace: "nowrap",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  font: "code",
  width: "100%",
  textStyle: "sys.label-small",
  fontSize: 12,
  lineHeight: 24,
  gap: 8,
  _type__string: {
    color: "sys.primary"
  },
  _type__number: {
    color: "sys.primary"
  },
  _type__boolean: {
    color: "sys.warning"
  },
  _type__undefined: {
    color: "sys.error"
  }
});
const EnumMenuItemContainer = styled(MenuItem)({
  [`& ${PropName}`]: {
    textAlign: "left"
  }
});
const EnumMenuItem = component((props) => {
  return () => {
    return /* @__PURE__ */ jsxs(EnumMenuItemContainer, { "data-value": props.value, tabindex: 0, children: [
      /* @__PURE__ */ jsx(PropName, { children: props.value }),
      props.label && /* @__PURE__ */ jsx(Description, { children: props.label })
    ] });
  };
});

const RemovePropIconBtn = component$(({}, { emit }) => {
  return () => /* @__PURE__ */ jsx(Tooltip, { $title: "删除属性", children: /* @__PURE__ */ jsx(ActionBtn, { type: "button", onClick: () => emit("remove"), children: /* @__PURE__ */ jsx(Icon, { path: mdiMinusBoxOutline }) }) });
});
const ObjectInput = component$((props, { render }) => {
  const editor$ = JSONEditorProvider.use();
  const slots = JSONEditorSlotsProvider.use();
  return rx(props.value$, render((obj) => {
    return /* @__PURE__ */ jsx(Block, { openToken: "{", closeToken: "}", $leading: /* @__PURE__ */ jsx(Actions, { children: /* @__PURE__ */ jsx(CopyAsJSONIconBtn, { value: obj }) }), $trailing: /* @__PURE__ */ jsx(PropValueInput, { ctx: props.ctx, onAdd: (prop) => {
      editor$.update([
        ...props.ctx.path,
        prop
      ], void 0);
    }, options: [
      ...props.typedef.entries(obj, props.ctx)
    ].filter(([propName]) => {
      return !Object.hasOwn(obj, propName);
    }).map(([propName, _propValue, propSchema]) => {
      return {
        propName: String(propName),
        typedef: propSchema
      };
    }) }, "prop-input"), children: [
      ...props.typedef.entries(obj, props.ctx)
    ].map(([propName, propValue, propSchema]) => {
      if (!Object.hasOwn(obj, propName)) {
        return null;
      }
      const path = [
        ...props.ctx.path,
        propName
      ];
      return /* @__PURE__ */ jsxs(Line, { path, dirty: editor$.isDirty(propValue, path), title: Schema.metaProp(propSchema, "title"), description: Schema.metaProp(propSchema, "description"), children: [
        /* @__PURE__ */ jsx(PropName, { deprecated: Schema.schemaProp(propSchema, "deprecated"), $leading: /* @__PURE__ */ jsx(RemovePropIconBtn, { onRemove: () => {
          editor$.delete(path);
        } }), children: String(propName) }),
        /* @__PURE__ */ jsxs(Token, { children: [
          ":",
          " "
        ] }),
        slots.$value?.(propSchema, propValue, {
          ...props.ctx,
          path,
          branch: [
            ...props.ctx.branch,
            propValue
          ]
        })
      ] });
    }) });
  }));
});
const PropValueInput = component$((props, { emit, render }) => {
  const inputEl$ = observableRef(null);
  const inputAction$ = InputActionSubject.from(inputEl$);
  const inputText$ = InputText.from(inputEl$);
  const open$ = PopupStatus.from(inputEl$);
  const editor$ = JSONEditorProvider.use();
  const selectFocus$ = new ImmerBehaviorSubject({
    index: 0
  });
  const reset = () => {
    open$.hide();
    inputText$.next("");
    if (inputEl$.value) {
      inputEl$.value.value = "";
      inputEl$.value.blur();
    }
    selectFocus$.next({
      index: 0
    });
  };
  rx(inputText$, tap((input) => {
    const raw = input.trim();
    if (raw.startsWith("{") && raw.endsWith("}")) {
      try {
        const v = JSON.parse(raw);
        editor$.update(props.ctx.path, v);
        reset();
      } catch (err) {
        editor$.setError(props.ctx.path, "无效的 JSON 字符串");
      }
    }
  }), subscribeUntilUnmount());
  const commit = (prop) => {
    if (props.options) {
      prop ??= props.options[selectFocus$.value.index % props.options.length]?.propName;
    } else {
      prop ??= inputText$.value;
    }
    if (prop) {
      emit("add", prop);
      reset();
    } else {
      editor$.setError([
        ...props.ctx.path,
        Schema.RecordKey
      ], "无效的属性值");
    }
  };
  rx(inputAction$, tap((action) => {
    switch (action.type) {
      case "SELECT":
        selectFocus$.next((value) => {
          value.index += action.direction;
        });
        break;
      case "COMMIT":
        commit();
        break;
      case "CANCEL":
        reset();
        break;
    }
  }), subscribeUntilUnmount());
  const $inputForProp = rx(open$, render((isOpen) => {
    return /* @__PURE__ */ jsx(InputWrapper, { children: /* @__PURE__ */ jsx("input", { ref: inputEl$, type: "text", placeholder: "添加属性 (可粘贴 JSON 字符串)", "data-options": isOpen }) });
  }));
  return rx(combineLatest([
    inputText$,
    open$,
    selectFocus$,
    props.options$
  ]), render(([input, open, focus, options]) => {
    if (options) {
      return options.length > 0 ? /* @__PURE__ */ jsx(Line, { path: props.ctx.path, children: /* @__PURE__ */ jsx(ValueContainer, { sx: {
        mx: -4
      }, children: /* @__PURE__ */ jsx(Menu, { onSelected: (prop) => {
        commit(prop);
      }, open$, $content: /* @__PURE__ */ jsx("div", { children: options.map((opt, i) => {
        if (input) {
          if (!opt.propName.includes(input)) {
            return null;
          }
        }
        return /* @__PURE__ */ jsx(PropMenuItem, { propName: opt.propName, typedef: opt.typedef, "data-focus": i === focus.index % options.length });
      }) }), children: $inputForProp }) }) }) : null;
    }
    return /* @__PURE__ */ jsx(Line, { path: [
      ...props.ctx.path,
      Schema.RecordKey
    ], children: /* @__PURE__ */ jsx(ValueContainer, { sx: {
      mx: -4
    }, children: /* @__PURE__ */ jsx(Popper, { isOpen: open, placement: "right-start", $content: /* @__PURE__ */ jsxs(ValueInputActions, { children: [
      /* @__PURE__ */ jsx(ActionBtn, { type: "button", onClick: () => inputAction$.next({
        type: "CANCEL"
      }), children: /* @__PURE__ */ jsx(Icon, { path: mdiCancel }) }),
      /* @__PURE__ */ jsx(ActionBtn, { type: "button", onClick: () => inputAction$.next({
        type: "COMMIT"
      }), children: /* @__PURE__ */ jsx(Icon, { path: mdiCheckBold }) })
    ] }), children: /* @__PURE__ */ jsx(InputWrapper, { children: /* @__PURE__ */ jsx("input", { ref: inputEl$, type: "text", placeholder: "添加属性 (可粘贴 JSON 字符串)" }) }) }) }) });
  }));
});
const PropMenuItem = component((props) => {
  return () => {
    return /* @__PURE__ */ jsxs(AddPropMenuItemContainer, { "data-value": props.propName, tabindex: 0, children: [
      /* @__PURE__ */ jsx(PropName, { optional: Schema.schemaProp(props.typedef, Schema.optional), children: props.propName }),
      /* @__PURE__ */ jsx(Description, { children: Schema.metaProp(props.typedef, "title") })
    ] });
  };
});
const AddPropMenuItemContainer = styled(MenuItem)({
  [`& ${PropName}`]: {
    textAlign: "left"
  }
});

const ArrayInput = component$((props, { render }) => {
  const editor$ = JSONEditorProvider.use();
  const slots = JSONEditorSlotsProvider.use();
  return rx(props.value$, render((value) => {
    return /* @__PURE__ */ jsx(Block, { openToken: "[", closeToken: "]", $leading: /* @__PURE__ */ jsx(Actions, { children: /* @__PURE__ */ jsx(CopyAsJSONIconBtn, { value }) }), $trailing: /* @__PURE__ */ jsx(AddItemIconBtn, { ctx: props.ctx, typedef: props.typedef, onAdd: (value2) => {
      editor$.update(props.ctx.path, (values) => {
        values.push(value2);
      }, []);
    } }), children: [
      ...props.typedef.entries(value, props.ctx)
    ].map(([idx, itemValue, propSchema]) => {
      const path = [
        ...props.ctx.path,
        idx
      ];
      return /* @__PURE__ */ jsxs(Line, { path, dirty: editor$.isDirty(itemValue, path), children: [
        /* @__PURE__ */ jsx(PropName, { $leading: /* @__PURE__ */ jsx(RemoteItemIconBtn, { onRemove: () => {
          editor$.delete(path);
        } }), children: /* @__PURE__ */ jsx(Box, { sx: {
          opacity: 0.3,
          mr: "0.5em"
        }, children: String(idx) }) }),
        slots.$value?.(propSchema, itemValue, {
          ...props.ctx,
          path,
          branch: [
            ...props.ctx.branch,
            itemValue
          ]
        })
      ] });
    }) });
  }));
});
const AddItemIconBtn = component$((props, { emit, render }) => {
  const inputEl$ = observableRef(null);
  const inputText$ = InputText.from(inputEl$);
  const inputAction$ = InputActionSubject.from(inputEl$);
  const open$ = PopupStatus.from(inputEl$);
  const editor$ = JSONEditorProvider.use();
  const reset = () => {
    if (inputEl$.value) {
      inputEl$.value.value = "";
      inputEl$.value.blur();
    }
  };
  const commit = (inputValue) => {
    inputValue ??= inputText$.value;
    if (inputValue) {
      const items = Schema.schemaProp(props.typedef, "items");
      const [err, value] = items.validate(inputValue, {
        coerce: true
      });
      if (!!err) {
        editor$.setError(props.ctx.path, err);
        return;
      }
      emit("add", value);
    } else {
      emit("add", void 0);
    }
    reset();
  };
  rx(inputText$, tap((input) => {
    const raw = input.trim();
    if (raw.startsWith("[") && raw.endsWith("]")) {
      try {
        const v = JSON.parse(raw);
        editor$.update(props.ctx.path, v);
        reset();
      } catch (err) {
        editor$.setError(props.ctx.path, "无效的 JSON 字符串");
      }
    }
    if (raw.startsWith("{") && raw.endsWith("}")) {
      try {
        commit(JSON.parse(raw));
      } catch (err) {
        editor$.setError(props.ctx.path, "无效的 JSON 字符串");
      }
    }
  }), subscribeUntilUnmount());
  rx(inputAction$, tap((action) => {
    switch (action.type) {
      case "COMMIT":
        commit();
        break;
      case "CANCEL":
        reset();
        break;
    }
  }), subscribeUntilUnmount());
  const $input = rx(open$, render((open) => {
    return /* @__PURE__ */ jsx(Popper, { isOpen: open, placement: "right-start", $content: /* @__PURE__ */ jsxs(ValueInputActions, { children: [
      /* @__PURE__ */ jsx(ActionBtn, { type: "button", onClick: () => inputAction$.next({
        type: "CANCEL"
      }), children: /* @__PURE__ */ jsx(Icon, { path: mdiCancel }) }),
      /* @__PURE__ */ jsx(ActionBtn, { type: "button", onClick: () => inputAction$.next({
        type: "COMMIT"
      }), children: /* @__PURE__ */ jsx(Icon, { path: mdiCheckBold }) })
    ] }), children: /* @__PURE__ */ jsx(InputWrapper, { children: /* @__PURE__ */ jsx("input", { ref: inputEl$, type: "text", placeholder: "添加数组项 (可粘贴 JSON 字符串)" }) }) });
  }));
  return () => /* @__PURE__ */ jsx(Line, { path: props.ctx.path, children: /* @__PURE__ */ jsx(ValueContainer, { sx: {
    mx: -4
  }, children: $input }) });
});
const RemoteItemIconBtn = component$(({}, { emit }) => {
  return () => /* @__PURE__ */ jsx(Tooltip, { $title: "移除项", children: /* @__PURE__ */ jsx(ActionBtn, { type: "button", onClick: () => emit("remove"), children: /* @__PURE__ */ jsx(Icon, { path: mdiMinusBoxOutline }) }) });
});

const RecordInput = component$((props, { render }) => {
  const editor$ = JSONEditorProvider.use();
  const slots = JSONEditorSlotsProvider.use();
  return rx(props.value$, render((obj) => {
    return /* @__PURE__ */ jsx(Block, { openToken: "{", closeToken: "}", $leading: /* @__PURE__ */ jsx(Actions, { children: /* @__PURE__ */ jsx(CopyAsJSONIconBtn, { value: obj }) }), $trailing: /* @__PURE__ */ jsx(PropValueInput, { ctx: props.ctx, onAdd: (prop) => {
      editor$.update([
        ...props.ctx.path,
        prop
      ], void 0);
    } }, "prop-input"), children: [
      ...props.typedef.entries((() => {
        const o = {};
        for (const key of Object.keys(obj ?? {}).toSorted()) {
          o[key] = obj?.[key];
        }
        return o;
      })(), props.ctx)
    ].map(([propName, propValue, propSchema]) => {
      if (!Object.hasOwn(obj, propName)) {
        return null;
      }
      const path = [
        ...props.ctx.path,
        propName
      ];
      return /* @__PURE__ */ jsxs(Line, { path, dirty: editor$.isDirty(propValue, path), children: [
        /* @__PURE__ */ jsx(PropName, { $leading: /* @__PURE__ */ jsx(RemovePropIconBtn, { onRemove: () => {
          editor$.delete(path);
        } }), children: String(propName) }),
        /* @__PURE__ */ jsxs(Token, { children: [
          ":",
          " "
        ] }),
        slots.$value?.(propSchema, propValue, {
          ...props.ctx,
          path,
          branch: [
            ...props.ctx.branch,
            propValue
          ]
        })
      ] });
    }) });
  }));
});

const AnyInput = component$((props, { render }) => {
  return rx(props.value$, render((value) => {
    if (isArray(value)) {
      return /* @__PURE__ */ jsx(ArrayInput, { value, typedef: array(any()), ctx: props.ctx });
    }
    if (isObject(value)) {
      return /* @__PURE__ */ jsx(RecordInput, { value, typedef: record(string(), any()), ctx: props.ctx });
    }
    return /* @__PURE__ */ jsx(ValueInput, { value, typedef: any(), ctx: props.ctx, allowRawJSON: true });
  }));
});

const defaultValueRender = (typedef, value, ctx) => {
  if (typedef.type == "object" || typedef.type == "intersection" || typedef.type == "union" && Schema.schemaProp(typedef, "discriminator")) {
    return /* @__PURE__ */ jsx(ObjectInput, { typedef, value: value ?? {}, ctx });
  }
  if (typedef.type == "union" && isUndefined(Schema.schemaProp(typedef, "discriminator"))) {
    return /* @__PURE__ */ jsx(ValueInput, { typedef, value, ctx });
  }
  if (typedef.type == "record") {
    return /* @__PURE__ */ jsx(RecordInput, { typedef, value, ctx });
  }
  if (typedef.type == "array") {
    return /* @__PURE__ */ jsx(ArrayInput, { typedef, value, ctx });
  }
  if (typedef.type == "any" || typedef.type == "unknown") {
    return /* @__PURE__ */ jsx(AnyInput, { typedef, value, ctx });
  }
  return /* @__PURE__ */ jsx(ValueInput, { typedef, value, ctx });
};
const JSONEditorView = component$(({}, { render }) => {
  const editor$ = JSONEditorProvider.use();
  const slots = JSONEditorSlotsProvider.use();
  const $container = ref$1(null);
  return rx(editor$, render((root) => {
    const valueRender = slots.$value ?? defaultValueRender;
    return /* @__PURE__ */ jsx(OneEditingProvider, { children: /* @__PURE__ */ jsx(JSONEditorSlotsProvider, { value: {
      $value: slots.$value ?? defaultValueRender
    }, children: /* @__PURE__ */ jsxs(JSONEditorContainer, { children: [
      /* @__PURE__ */ jsx("section", { ref: $container }),
      $container.value && /* @__PURE__ */ jsx(LayoutContextProvider, { value: {
        indent: 0,
        $container
      }, children: /* @__PURE__ */ jsx(Line, { path: [], viewOnly: true, children: valueRender(editor$.typedef, root, EmptyContext) }) })
    ] }) }) });
  }));
});
const JSONEditorContainer = styled("div")({
  width: "100%",
  height: "100%",
  overflow: "auto",
  section: {
    display: "flex",
    flexDirection: "column",
    minWidth: "max-content"
  }
});

export { JSONEditor as J, JSONEditorProvider as a, JSONEditorView as b, copyToClipboard as c };
