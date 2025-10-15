import { r as __toESM, t as __commonJSMin } from "./rolldown-runtime.L2H4EfuM.chunk.js";
import { $t as has, At as isSymbol, Bt as omit, Ct as isArray, Dt as isOn, Et as isObject$1, Ft as camelCase, Gt as isNumber, Ht as isPlainObject, I as Fragment$1, It as isEmpty, Kt as some, L as component, Lt as isUndefined, Mt as upperFirst, Nt as padStart, Ot as isSpecialBooleanAttr, Pt as kebabCase, Qt as last, R as isComponent, Rt as isFunction, St as includeBooleanAttr, Tt as isModelListener, U as boolean, Ut as keys, Vt as mapValues, W as custom, Wt as set, Xt as map, Zt as isString, _t as unref, at as Teleport, bt as extend, c as jsx, ct as createRenderer, dt as onBeforeMount, en as isObject, f as subscribeUntilUnmount, ft as onBeforeUnmount, g as rx, gt as shallowRef, ht as ref, i as tapEffect, it as Fragment, jt as toNumber, kt as isString$2, l as jsxs, lt as defineComponent, m as ref$1, nt as BaseTransition, o as toObservable, ot as callWithAsyncErrorHandling, p as SymbolForwardRef, pt as onMounted, r as createProvider, rt as BaseTransitionPropsValidators, st as cloneVNode, tn as get, u as observableRef, ut as h, vt as camelize, w as combineLatest, wt as isFunction$1, xt as hyphenate, yt as capitalize, z as isPropTypes, zt as pickBy } from "./vendor-innoai-tech-vuekit.CmmKMl5x.chunk.js";
import { c as __rest } from "./vendor-rxjs.B52GCUIj.chunk.js";
var policy = void 0;
var tt = typeof window !== "undefined" && window.trustedTypes;
if (tt) try {
	policy = /* @__PURE__ */ tt.createPolicy("vue", { createHTML: (val) => val });
} catch (e) {}
var unsafeToTrustedHTML = policy ? (val) => policy.createHTML(val) : (val) => val;
var svgNS = "http://www.w3.org/2000/svg";
var mathmlNS = "http://www.w3.org/1998/Math/MathML";
var doc = typeof document !== "undefined" ? document : null;
var templateContainer = doc && /* @__PURE__ */ doc.createElement("template");
var nodeOps = {
	insert: (child, parent, anchor) => {
		parent.insertBefore(child, anchor || null);
	},
	remove: (child) => {
		const parent = child.parentNode;
		if (parent) parent.removeChild(child);
	},
	createElement: (tag, namespace, is, props) => {
		const el = namespace === "svg" ? doc.createElementNS(svgNS, tag) : namespace === "mathml" ? doc.createElementNS(mathmlNS, tag) : is ? doc.createElement(tag, { is }) : doc.createElement(tag);
		if (tag === "select" && props && props.multiple != null) el.setAttribute("multiple", props.multiple);
		return el;
	},
	createText: (text) => doc.createTextNode(text),
	createComment: (text) => doc.createComment(text),
	setText: (node$1, text) => {
		node$1.nodeValue = text;
	},
	setElementText: (el, text) => {
		el.textContent = text;
	},
	parentNode: (node$1) => node$1.parentNode,
	nextSibling: (node$1) => node$1.nextSibling,
	querySelector: (selector) => doc.querySelector(selector),
	setScopeId(el, id) {
		el.setAttribute(id, "");
	},
	insertStaticContent(content, parent, anchor, namespace, start, end) {
		const before = anchor ? anchor.previousSibling : parent.lastChild;
		if (start && (start === end || start.nextSibling)) while (true) {
			parent.insertBefore(/* @__PURE__ */ start.cloneNode(true), anchor);
			if (start === end || !(start = start.nextSibling)) break;
		}
		else {
			templateContainer.innerHTML = /* @__PURE__ */ unsafeToTrustedHTML(namespace === "svg" ? `<svg>${content}</svg>` : namespace === "mathml" ? `<math>${content}</math>` : content);
			const template = templateContainer.content;
			if (namespace === "svg" || namespace === "mathml") {
				const wrapper = template.firstChild;
				while (wrapper.firstChild) template.appendChild(wrapper.firstChild);
				template.removeChild(wrapper);
			}
			parent.insertBefore(template, anchor);
		}
		return [before ? before.nextSibling : parent.firstChild, anchor ? anchor.previousSibling : parent.lastChild];
	}
};
var TRANSITION = "transition";
var ANIMATION = "animation";
var vtcKey = /* @__PURE__ */ Symbol("_vtc");
var DOMTransitionPropsValidators = {
	name: String,
	type: String,
	css: {
		type: Boolean,
		default: true
	},
	duration: [
		String,
		Number,
		Object
	],
	enterFromClass: String,
	enterActiveClass: String,
	enterToClass: String,
	appearFromClass: String,
	appearActiveClass: String,
	appearToClass: String,
	leaveFromClass: String,
	leaveActiveClass: String,
	leaveToClass: String
};
var TransitionPropsValidators = /* @__PURE__ */ extend({}, BaseTransitionPropsValidators, DOMTransitionPropsValidators);
var decorate$1 = (t) => {
	t.displayName = "Transition";
	t.props = TransitionPropsValidators;
	return t;
};
var Transition = /* @__PURE__ */ decorate$1((props, { slots }) => h(BaseTransition, /* @__PURE__ */ resolveTransitionProps(props), slots));
var callHook = (hook, args = []) => {
	if (isArray(hook)) hook.forEach((h2) => h2(...args));
	else if (hook) hook(...args);
};
var hasExplicitCallback = (hook) => {
	return hook ? isArray(hook) ? hook.some((h2) => h2.length > 1) : hook.length > 1 : false;
};
function resolveTransitionProps(rawProps) {
	const baseProps = {};
	for (const key in rawProps) if (!(key in DOMTransitionPropsValidators)) baseProps[key] = rawProps[key];
	if (rawProps.css === false) return baseProps;
	const { name = "v", type, duration, enterFromClass = `${name}-enter-from`, enterActiveClass = `${name}-enter-active`, enterToClass = `${name}-enter-to`, appearFromClass = enterFromClass, appearActiveClass = enterActiveClass, appearToClass = enterToClass, leaveFromClass = `${name}-leave-from`, leaveActiveClass = `${name}-leave-active`, leaveToClass = `${name}-leave-to` } = rawProps;
	const durations = /* @__PURE__ */ normalizeDuration(duration);
	const enterDuration = durations && durations[0];
	const leaveDuration = durations && durations[1];
	const { onBeforeEnter, onEnter, onEnterCancelled, onLeave, onLeaveCancelled, onBeforeAppear = onBeforeEnter, onAppear = onEnter, onAppearCancelled = onEnterCancelled } = baseProps;
	const finishEnter = (el, isAppear, done, isCancelled) => {
		el._enterCancelled = isCancelled;
		removeTransitionClass(el, isAppear ? appearToClass : enterToClass);
		removeTransitionClass(el, isAppear ? appearActiveClass : enterActiveClass);
		done && done();
	};
	const finishLeave = (el, done) => {
		el._isLeaving = false;
		removeTransitionClass(el, leaveFromClass);
		removeTransitionClass(el, leaveToClass);
		removeTransitionClass(el, leaveActiveClass);
		done && done();
	};
	const makeEnterHook = (isAppear) => {
		return (el, done) => {
			const hook = isAppear ? onAppear : onEnter;
			const resolve = () => finishEnter(el, isAppear, done);
			callHook(hook, [el, resolve]);
			nextFrame(() => {
				removeTransitionClass(el, isAppear ? appearFromClass : enterFromClass);
				addTransitionClass(el, isAppear ? appearToClass : enterToClass);
				if (!hasExplicitCallback(hook)) whenTransitionEnds(el, type, enterDuration, resolve);
			});
		};
	};
	return extend(baseProps, {
		onBeforeEnter(el) {
			callHook(onBeforeEnter, [el]);
			addTransitionClass(el, enterFromClass);
			addTransitionClass(el, enterActiveClass);
		},
		onBeforeAppear(el) {
			callHook(onBeforeAppear, [el]);
			addTransitionClass(el, appearFromClass);
			addTransitionClass(el, appearActiveClass);
		},
		onEnter: /* @__PURE__ */ makeEnterHook(false),
		onAppear: /* @__PURE__ */ makeEnterHook(true),
		onLeave(el, done) {
			el._isLeaving = true;
			const resolve = () => finishLeave(el, done);
			addTransitionClass(el, leaveFromClass);
			if (!el._enterCancelled) {
				forceReflow(el);
				addTransitionClass(el, leaveActiveClass);
			} else {
				addTransitionClass(el, leaveActiveClass);
				forceReflow(el);
			}
			nextFrame(() => {
				if (!el._isLeaving) return;
				removeTransitionClass(el, leaveFromClass);
				addTransitionClass(el, leaveToClass);
				if (!hasExplicitCallback(onLeave)) whenTransitionEnds(el, type, leaveDuration, resolve);
			});
			callHook(onLeave, [el, resolve]);
		},
		onEnterCancelled(el) {
			finishEnter(el, false, void 0, true);
			callHook(onEnterCancelled, [el]);
		},
		onAppearCancelled(el) {
			finishEnter(el, true, void 0, true);
			callHook(onAppearCancelled, [el]);
		},
		onLeaveCancelled(el) {
			finishLeave(el);
			callHook(onLeaveCancelled, [el]);
		}
	});
}
function normalizeDuration(duration) {
	if (duration == null) return null;
	else if (isObject$1(duration)) return [/* @__PURE__ */ NumberOf(duration.enter), /* @__PURE__ */ NumberOf(duration.leave)];
	else {
		const n = /* @__PURE__ */ NumberOf(duration);
		return [n, n];
	}
}
function NumberOf(val) {
	return toNumber(val);
}
function addTransitionClass(el, cls) {
	cls.split(/\s+/).forEach((c$1) => c$1 && el.classList.add(c$1));
	(el[vtcKey] || (el[vtcKey] = /* @__PURE__ */ new Set())).add(cls);
}
function removeTransitionClass(el, cls) {
	cls.split(/\s+/).forEach((c$1) => c$1 && el.classList.remove(c$1));
	const _vtc = el[vtcKey];
	if (_vtc) {
		_vtc.delete(cls);
		if (!_vtc.size) el[vtcKey] = void 0;
	}
}
function nextFrame(cb$1) {
	requestAnimationFrame(() => {
		requestAnimationFrame(cb$1);
	});
}
var endId = 0;
function whenTransitionEnds(el, expectedType, explicitTimeout, resolve) {
	const id = el._endId = ++endId;
	const resolveIfNotStale = () => {
		if (id === el._endId) resolve();
	};
	if (explicitTimeout != null) return setTimeout(resolveIfNotStale, explicitTimeout);
	const { type, timeout, propCount } = getTransitionInfo(el, expectedType);
	if (!type) return resolve();
	const endEvent = type + "end";
	let ended = 0;
	const end = () => {
		el.removeEventListener(endEvent, onEnd);
		resolveIfNotStale();
	};
	const onEnd = (e) => {
		if (e.target === el && ++ended >= propCount) end();
	};
	setTimeout(() => {
		if (ended < propCount) end();
	}, timeout + 1);
	el.addEventListener(endEvent, onEnd);
}
function getTransitionInfo(el, expectedType) {
	const styles = /* @__PURE__ */ window.getComputedStyle(el);
	const getStyleProperties = (key) => (styles[key] || "").split(", ");
	const transitionDelays = /* @__PURE__ */ getStyleProperties(`${TRANSITION}Delay`);
	const transitionDurations = /* @__PURE__ */ getStyleProperties(`${TRANSITION}Duration`);
	const transitionTimeout = /* @__PURE__ */ getTimeout(transitionDelays, transitionDurations);
	const animationDelays = /* @__PURE__ */ getStyleProperties(`${ANIMATION}Delay`);
	const animationDurations = /* @__PURE__ */ getStyleProperties(`${ANIMATION}Duration`);
	const animationTimeout = /* @__PURE__ */ getTimeout(animationDelays, animationDurations);
	let type = null;
	let timeout = 0;
	let propCount = 0;
	if (expectedType === TRANSITION) {
		if (transitionTimeout > 0) {
			type = TRANSITION;
			timeout = transitionTimeout;
			propCount = transitionDurations.length;
		}
	} else if (expectedType === ANIMATION) {
		if (animationTimeout > 0) {
			type = ANIMATION;
			timeout = animationTimeout;
			propCount = animationDurations.length;
		}
	} else {
		timeout = /* @__PURE__ */ Math.max(transitionTimeout, animationTimeout);
		type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
		propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
	}
	const hasTransform = type === TRANSITION && /\b(?:transform|all)(?:,|$)/.test(/* @__PURE__ */ getStyleProperties(`${TRANSITION}Property`).toString());
	return {
		type,
		timeout,
		propCount,
		hasTransform
	};
}
function getTimeout(delays, durations) {
	while (delays.length < durations.length) delays = /* @__PURE__ */ delays.concat(delays);
	return Math.max(.../* @__PURE__ */ durations.map((d, i) => toMs(d) + toMs(delays[i])));
}
function toMs(s) {
	if (s === "auto") return 0;
	return Number(/* @__PURE__ */ s.slice(0, -1).replace(",", ".")) * 1e3;
}
function forceReflow(el) {
	return (el ? el.ownerDocument : document).body.offsetHeight;
}
function patchClass(el, value, isSVG) {
	const transitionClasses = el[vtcKey];
	if (transitionClasses) value = /* @__PURE__ */ (value ? [value, ...transitionClasses] : [...transitionClasses]).join(" ");
	if (value == null) el.removeAttribute("class");
	else if (isSVG) el.setAttribute("class", value);
	else el.className = value;
}
var vShowOriginalDisplay = /* @__PURE__ */ Symbol("_vod");
var vShowHidden = /* @__PURE__ */ Symbol("_vsh");
var CSS_VAR_TEXT = /* @__PURE__ */ Symbol("");
var displayRE = /(?:^|;)\s*display\s*:/;
function patchStyle(el, prev$1, next$1) {
	const style = el.style;
	const isCssString = /* @__PURE__ */ isString$2(next$1);
	let hasControlledDisplay = false;
	if (next$1 && !isCssString) {
		if (prev$1) if (!isString$2(prev$1)) {
			for (const key in prev$1) if (next$1[key] == null) setStyle(style, key, "");
		} else for (const prevStyle of prev$1.split(";")) {
			const key = /* @__PURE__ */ prevStyle.slice(0, /* @__PURE__ */ prevStyle.indexOf(":")).trim();
			if (next$1[key] == null) setStyle(style, key, "");
		}
		for (const key in next$1) {
			if (key === "display") hasControlledDisplay = true;
			setStyle(style, key, next$1[key]);
		}
	} else if (isCssString) {
		if (prev$1 !== next$1) {
			const cssVarText = style[CSS_VAR_TEXT];
			if (cssVarText) next$1 += ";" + cssVarText;
			style.cssText = next$1;
			hasControlledDisplay = /* @__PURE__ */ displayRE.test(next$1);
		}
	} else if (prev$1) el.removeAttribute("style");
	if (vShowOriginalDisplay in el) {
		el[vShowOriginalDisplay] = hasControlledDisplay ? style.display : "";
		if (el[vShowHidden]) style.display = "none";
	}
}
var importantRE = /\s*!important$/;
function setStyle(style, name, val) {
	if (isArray(val)) val.forEach((v) => setStyle(style, name, v));
	else {
		if (val == null) val = "";
		if (name.startsWith("--")) style.setProperty(name, val);
		else {
			const prefixed = /* @__PURE__ */ autoPrefix(style, name);
			if (importantRE.test(val)) style.setProperty(/* @__PURE__ */ hyphenate(prefixed), /* @__PURE__ */ val.replace(importantRE, ""), "important");
			else style[prefixed] = val;
		}
	}
}
var prefixes = [
	"Webkit",
	"Moz",
	"ms"
];
var prefixCache = {};
function autoPrefix(style, rawName) {
	const cached = prefixCache[rawName];
	if (cached) return cached;
	let name = /* @__PURE__ */ camelize(rawName);
	if (name !== "filter" && name in style) return prefixCache[rawName] = name;
	name = /* @__PURE__ */ capitalize(name);
	for (let i = 0; i < prefixes.length; i++) {
		const prefixed = prefixes[i] + name;
		if (prefixed in style) return prefixCache[rawName] = prefixed;
	}
	return rawName;
}
var xlinkNS = "http://www.w3.org/1999/xlink";
function patchAttr(el, key, value, isSVG, instance, isBoolean = isSpecialBooleanAttr(key)) {
	if (isSVG && key.startsWith("xlink:")) if (value == null) el.removeAttributeNS(xlinkNS, /* @__PURE__ */ key.slice(6, key.length));
	else el.setAttributeNS(xlinkNS, key, value);
	else if (value == null || isBoolean && !includeBooleanAttr(value)) el.removeAttribute(key);
	else el.setAttribute(key, isBoolean ? "" : isSymbol(value) ? String(value) : value);
}
function patchDOMProp(el, key, value, parentComponent, attrName) {
	if (key === "innerHTML" || key === "textContent") {
		if (value != null) el[key] = key === "innerHTML" ? unsafeToTrustedHTML(value) : value;
		return;
	}
	const tag = el.tagName;
	if (key === "value" && tag !== "PROGRESS" && !tag.includes("-")) {
		const oldValue = tag === "OPTION" ? el.getAttribute("value") || "" : el.value;
		const newValue = value == null ? el.type === "checkbox" ? "on" : "" : String(value);
		if (oldValue !== newValue || !("_value" in el)) el.value = newValue;
		if (value == null) el.removeAttribute(key);
		el._value = value;
		return;
	}
	let needRemove = false;
	if (value === "" || value == null) {
		const type = typeof el[key];
		if (type === "boolean") value = /* @__PURE__ */ includeBooleanAttr(value);
		else if (value == null && type === "string") {
			value = "";
			needRemove = true;
		} else if (type === "number") {
			value = 0;
			needRemove = true;
		}
	}
	try {
		el[key] = value;
	} catch (e) {}
	needRemove && el.removeAttribute(attrName || key);
}
function addEventListener(el, event, handler, options) {
	el.addEventListener(event, handler, options);
}
function removeEventListener(el, event, handler, options) {
	el.removeEventListener(event, handler, options);
}
var veiKey = /* @__PURE__ */ Symbol("_vei");
function patchEvent(el, rawName, prevValue, nextValue, instance = null) {
	const invokers = el[veiKey] || (el[veiKey] = {});
	const existingInvoker = invokers[rawName];
	if (nextValue && existingInvoker) existingInvoker.value = nextValue;
	else {
		const [name, options] = parseName(rawName);
		if (nextValue) addEventListener(el, name, invokers[rawName] = /* @__PURE__ */ createInvoker(nextValue, instance), options);
		else if (existingInvoker) {
			removeEventListener(el, name, existingInvoker, options);
			invokers[rawName] = void 0;
		}
	}
}
var optionsModifierRE = /(?:Once|Passive|Capture)$/;
function parseName(name) {
	let options;
	if (optionsModifierRE.test(name)) {
		options = {};
		let m;
		while (m = /* @__PURE__ */ name.match(optionsModifierRE)) {
			name = /* @__PURE__ */ name.slice(0, name.length - m[0].length);
			options[m[0].toLowerCase()] = true;
		}
	}
	return [name[2] === ":" ? name.slice(3) : hyphenate(/* @__PURE__ */ name.slice(2)), options];
}
var cachedNow = 0;
var p = /* @__PURE__ */ Promise.resolve();
var getNow = () => cachedNow || (p.then(() => cachedNow = 0), cachedNow = /* @__PURE__ */ Date.now());
function createInvoker(initialValue, instance) {
	const invoker = (e) => {
		if (!e._vts) e._vts = /* @__PURE__ */ Date.now();
		else if (e._vts <= invoker.attached) return;
		callWithAsyncErrorHandling(/* @__PURE__ */ patchStopImmediatePropagation(e, invoker.value), instance, 5, [e]);
	};
	invoker.value = initialValue;
	invoker.attached = /* @__PURE__ */ getNow();
	return invoker;
}
function patchStopImmediatePropagation(e, value) {
	if (isArray(value)) {
		const originalStop = e.stopImmediatePropagation;
		e.stopImmediatePropagation = () => {
			originalStop.call(e);
			e._stopped = true;
		};
		return value.map((fn) => (e2) => !e2._stopped && fn && fn(e2));
	} else return value;
}
var isNativeOn = (key) => key.charCodeAt(0) === 111 && key.charCodeAt(1) === 110 && key.charCodeAt(2) > 96 && key.charCodeAt(2) < 123;
var patchProp = (el, key, prevValue, nextValue, namespace, parentComponent) => {
	const isSVG = namespace === "svg";
	if (key === "class") patchClass(el, nextValue, isSVG);
	else if (key === "style") patchStyle(el, prevValue, nextValue);
	else if (isOn(key)) {
		if (!isModelListener(key)) patchEvent(el, key, prevValue, nextValue, parentComponent);
	} else if (key[0] === "." ? (key = /* @__PURE__ */ key.slice(1), true) : key[0] === "^" ? (key = /* @__PURE__ */ key.slice(1), false) : shouldSetAsProp(el, key, nextValue, isSVG)) {
		patchDOMProp(el, key, nextValue);
		if (!el.tagName.includes("-") && (key === "value" || key === "checked" || key === "selected")) patchAttr(el, key, nextValue, isSVG, parentComponent, key !== "value");
	} else if (el._isVueCE && (/[A-Z]/.test(key) || !isString$2(nextValue))) patchDOMProp(el, /* @__PURE__ */ camelize(key), nextValue, parentComponent, key);
	else {
		if (key === "true-value") el._trueValue = nextValue;
		else if (key === "false-value") el._falseValue = nextValue;
		patchAttr(el, key, nextValue, isSVG);
	}
};
function shouldSetAsProp(el, key, value, isSVG) {
	if (isSVG) {
		if (key === "innerHTML" || key === "textContent") return true;
		if (key in el && isNativeOn(key) && isFunction$1(value)) return true;
		return false;
	}
	if (key === "spellcheck" || key === "draggable" || key === "translate" || key === "autocorrect") return false;
	if (key === "form") return false;
	if (key === "list" && el.tagName === "INPUT") return false;
	if (key === "type" && el.tagName === "TEXTAREA") return false;
	if (key === "width" || key === "height") {
		const tag = el.tagName;
		if (tag === "IMG" || tag === "VIDEO" || tag === "CANVAS" || tag === "SOURCE") return false;
	}
	if (isNativeOn(key) && isString$2(value)) return false;
	return key in el;
}
var rendererOptions = /* @__PURE__ */ extend({ patchProp }, nodeOps);
var renderer;
function ensureRenderer() {
	return renderer || (renderer = /* @__PURE__ */ createRenderer(rendererOptions));
}
var createApp = (...args) => {
	const app = /* @__PURE__ */ ensureRenderer().createApp(...args);
	const { mount } = app;
	app.mount = (containerOrSelector) => {
		const container = /* @__PURE__ */ normalizeContainer(containerOrSelector);
		if (!container) return;
		const component$1 = app._component;
		if (!isFunction$1(component$1) && !component$1.render && !component$1.template) component$1.template = container.innerHTML;
		if (container.nodeType === 1) container.textContent = "";
		const proxy = /* @__PURE__ */ mount(container, false, /* @__PURE__ */ resolveRootNamespace(container));
		if (container instanceof Element) {
			container.removeAttribute("v-cloak");
			container.setAttribute("data-v-app", "");
		}
		return proxy;
	};
	return app;
};
function resolveRootNamespace(container) {
	if (container instanceof SVGElement) return "svg";
	if (typeof MathMLElement === "function" && container instanceof MathMLElement) return "mathml";
}
function normalizeContainer(container) {
	if (isString$2(container)) return document.querySelector(container);
	return container;
}
var warning = function() {};
var invariant = function() {};
var clamp$1 = (min$1, max$1, v) => Math.min(/* @__PURE__ */ Math.max(v, min$1), max$1);
var safeMin = .001;
var minDuration = .01;
var minDamping = .05;
function findSpring({ duration = 800, bounce = .25, velocity = 0, mass = 1 }) {
	let envelope;
	let derivative;
	warning(duration <= 10 * 1e3, "Spring duration must be 10 seconds or less");
	let dampingRatio = 1 - bounce;
	dampingRatio = /* @__PURE__ */ clamp$1(minDamping, 1, dampingRatio);
	duration = /* @__PURE__ */ clamp$1(minDuration, 10, duration / 1e3);
	if (dampingRatio < 1) {
		envelope = (undampedFreq$1) => {
			const exponentialDecay = undampedFreq$1 * dampingRatio;
			const delta = exponentialDecay * duration;
			const a$1 = exponentialDecay - velocity;
			const b$1 = /* @__PURE__ */ calcAngularFreq(undampedFreq$1, dampingRatio);
			const c$1 = /* @__PURE__ */ Math.exp(-delta);
			return safeMin - a$1 / b$1 * c$1;
		};
		derivative = (undampedFreq$1) => {
			const delta = undampedFreq$1 * dampingRatio * duration;
			const d = delta * velocity + velocity;
			const e = Math.pow(dampingRatio, 2) * Math.pow(undampedFreq$1, 2) * duration;
			const f = /* @__PURE__ */ Math.exp(-delta);
			const g = /* @__PURE__ */ calcAngularFreq(/* @__PURE__ */ Math.pow(undampedFreq$1, 2), dampingRatio);
			return (-envelope(undampedFreq$1) + safeMin > 0 ? -1 : 1) * ((d - e) * f) / g;
		};
	} else {
		envelope = (undampedFreq$1) => {
			const a$1 = /* @__PURE__ */ Math.exp(-undampedFreq$1 * duration);
			const b$1 = (undampedFreq$1 - velocity) * duration + 1;
			return -safeMin + a$1 * b$1;
		};
		derivative = (undampedFreq$1) => {
			return Math.exp(-undampedFreq$1 * duration) * ((velocity - undampedFreq$1) * (duration * duration));
		};
	}
	const initialGuess = 5 / duration;
	const undampedFreq = /* @__PURE__ */ approximateRoot(envelope, derivative, initialGuess);
	duration = duration * 1e3;
	if (isNaN(undampedFreq)) return {
		stiffness: 100,
		damping: 10,
		duration
	};
	else {
		const stiffness = Math.pow(undampedFreq, 2) * mass;
		return {
			stiffness,
			damping: dampingRatio * 2 * Math.sqrt(mass * stiffness),
			duration
		};
	}
}
var rootIterations = 12;
function approximateRoot(envelope, derivative, initialGuess) {
	let result = initialGuess;
	for (let i = 1; i < rootIterations; i++) result = result - envelope(result) / derivative(result);
	return result;
}
function calcAngularFreq(undampedFreq, dampingRatio) {
	return undampedFreq * Math.sqrt(1 - dampingRatio * dampingRatio);
}
var durationKeys = ["duration", "bounce"];
var physicsKeys = [
	"stiffness",
	"damping",
	"mass"
];
function isSpringType(options, keys$1) {
	return keys$1.some((key) => options[key] !== void 0);
}
function getSpringOptions(options) {
	let springOptions = /* @__PURE__ */ Object.assign({
		velocity: 0,
		stiffness: 100,
		damping: 10,
		mass: 1,
		isResolvedFromDuration: false
	}, options);
	if (!isSpringType(options, physicsKeys) && isSpringType(options, durationKeys)) {
		const derived = /* @__PURE__ */ findSpring(options);
		springOptions = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.assign({}, springOptions), derived), {
			velocity: 0,
			mass: 1
		});
		springOptions.isResolvedFromDuration = true;
	}
	return springOptions;
}
function spring(_a) {
	var { from: from$1 = 0, to = 1, restSpeed = 2, restDelta } = _a, options = /* @__PURE__ */ __rest(_a, [
		"from",
		"to",
		"restSpeed",
		"restDelta"
	]);
	const state = {
		done: false,
		value: from$1
	};
	let { stiffness, damping, mass, velocity, duration, isResolvedFromDuration } = getSpringOptions(options);
	let resolveSpring = zero;
	let resolveVelocity = zero;
	function createSpring() {
		const initialVelocity = velocity ? -(velocity / 1e3) : 0;
		const initialDelta = to - from$1;
		const dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
		const undampedAngularFreq = Math.sqrt(stiffness / mass) / 1e3;
		if (restDelta === void 0) restDelta = /* @__PURE__ */ Math.min(Math.abs(to - from$1) / 100, .4);
		if (dampingRatio < 1) {
			const angularFreq = /* @__PURE__ */ calcAngularFreq(undampedAngularFreq, dampingRatio);
			resolveSpring = (t) => {
				const envelope = /* @__PURE__ */ Math.exp(-dampingRatio * undampedAngularFreq * t);
				return to - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) / angularFreq * Math.sin(angularFreq * t) + initialDelta * Math.cos(angularFreq * t));
			};
			resolveVelocity = (t) => {
				const envelope = /* @__PURE__ */ Math.exp(-dampingRatio * undampedAngularFreq * t);
				return dampingRatio * undampedAngularFreq * envelope * (Math.sin(angularFreq * t) * (initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) / angularFreq + initialDelta * Math.cos(angularFreq * t)) - envelope * (Math.cos(angularFreq * t) * (initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) - angularFreq * initialDelta * Math.sin(angularFreq * t));
			};
		} else if (dampingRatio === 1) resolveSpring = (t) => to - Math.exp(-undampedAngularFreq * t) * (initialDelta + (initialVelocity + undampedAngularFreq * initialDelta) * t);
		else {
			const dampedAngularFreq = undampedAngularFreq * Math.sqrt(dampingRatio * dampingRatio - 1);
			resolveSpring = (t) => {
				const envelope = /* @__PURE__ */ Math.exp(-dampingRatio * undampedAngularFreq * t);
				const freqForT = /* @__PURE__ */ Math.min(dampedAngularFreq * t, 300);
				return to - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) * Math.sinh(freqForT) + dampedAngularFreq * initialDelta * Math.cosh(freqForT)) / dampedAngularFreq;
			};
		}
	}
	createSpring();
	return {
		next: (t) => {
			const current = /* @__PURE__ */ resolveSpring(t);
			if (!isResolvedFromDuration) {
				const currentVelocity = resolveVelocity(t) * 1e3;
				const isBelowVelocityThreshold = Math.abs(currentVelocity) <= restSpeed;
				const isBelowDisplacementThreshold = Math.abs(to - current) <= restDelta;
				state.done = isBelowVelocityThreshold && isBelowDisplacementThreshold;
			} else state.done = t >= duration;
			state.value = state.done ? to : current;
			return state;
		},
		flipTarget: () => {
			velocity = -velocity;
			[from$1, to] = [to, from$1];
			createSpring();
		}
	};
}
spring.needsInterpolation = (a$1, b$1) => typeof a$1 === "string" || typeof b$1 === "string";
var zero = (_t) => 0;
var progress = (from$1, to, value) => {
	const toFromDifference = to - from$1;
	return toFromDifference === 0 ? 1 : (value - from$1) / toFromDifference;
};
var mix = (from$1, to, progress$1) => -progress$1 * from$1 + progress$1 * to + from$1;
var clamp$2 = (min$1, max$1) => (v) => Math.max(/* @__PURE__ */ Math.min(v, max$1), min$1);
var sanitize = (v) => v % 1 ? Number(/* @__PURE__ */ v.toFixed(5)) : v;
var floatRegex = /(-)?([\d]*\.?[\d])+/g;
var colorRegex = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi;
var singleColorRegex = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function isString$1(v) {
	return typeof v === "string";
}
var number = {
	test: (v) => typeof v === "number",
	parse: parseFloat,
	transform: (v) => v
};
var alpha$1 = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.assign({}, number), { transform: /* @__PURE__ */ clamp$2(0, 1) });
var createUnitType = (unit) => ({
	test: (v) => isString$1(v) && v.endsWith(unit) && v.split(" ").length === 1,
	parse: parseFloat,
	transform: (v) => `${v}${unit}`
});
var percent = /* @__PURE__ */ createUnitType("%");
var isColorString = (type, testProp) => (v) => {
	return Boolean(isString$1(v) && singleColorRegex.test(v) && v.startsWith(type) || testProp && Object.prototype.hasOwnProperty.call(v, testProp));
};
var splitColor = (aName, bName, cName) => (v) => {
	if (!isString$1(v)) return v;
	const [a$1, b$1, c$1, alpha$2] = v.match(floatRegex);
	return {
		[aName]: /* @__PURE__ */ parseFloat(a$1),
		[bName]: /* @__PURE__ */ parseFloat(b$1),
		[cName]: /* @__PURE__ */ parseFloat(c$1),
		alpha: alpha$2 !== void 0 ? parseFloat(alpha$2) : 1
	};
};
var hsla = {
	test: /* @__PURE__ */ isColorString("hsl", "hue"),
	parse: /* @__PURE__ */ splitColor("hue", "saturation", "lightness"),
	transform: ({ hue, saturation, lightness, alpha: alpha$1$1 = 1 }) => {
		return "hsla(" + Math.round(hue) + ", " + percent.transform(/* @__PURE__ */ sanitize(saturation)) + ", " + percent.transform(/* @__PURE__ */ sanitize(lightness)) + ", " + sanitize(/* @__PURE__ */ alpha$1.transform(alpha$1$1)) + ")";
	}
};
var clampRgbUnit = /* @__PURE__ */ clamp$2(0, 255);
var rgbUnit = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.assign({}, number), { transform: (v) => Math.round(/* @__PURE__ */ clampRgbUnit(v)) });
var rgba = {
	test: /* @__PURE__ */ isColorString("rgb", "red"),
	parse: /* @__PURE__ */ splitColor("red", "green", "blue"),
	transform: ({ red, green, blue, alpha: alpha$1$1 = 1 }) => "rgba(" + rgbUnit.transform(red) + ", " + rgbUnit.transform(green) + ", " + rgbUnit.transform(blue) + ", " + sanitize(/* @__PURE__ */ alpha$1.transform(alpha$1$1)) + ")"
};
function parseHex(v) {
	let r = "";
	let g = "";
	let b$1 = "";
	let a$1 = "";
	if (v.length > 5) {
		r = /* @__PURE__ */ v.substr(1, 2);
		g = /* @__PURE__ */ v.substr(3, 2);
		b$1 = /* @__PURE__ */ v.substr(5, 2);
		a$1 = /* @__PURE__ */ v.substr(7, 2);
	} else {
		r = /* @__PURE__ */ v.substr(1, 1);
		g = /* @__PURE__ */ v.substr(2, 1);
		b$1 = /* @__PURE__ */ v.substr(3, 1);
		a$1 = /* @__PURE__ */ v.substr(4, 1);
		r += r;
		g += g;
		b$1 += b$1;
		a$1 += a$1;
	}
	return {
		red: /* @__PURE__ */ parseInt(r, 16),
		green: /* @__PURE__ */ parseInt(g, 16),
		blue: /* @__PURE__ */ parseInt(b$1, 16),
		alpha: a$1 ? parseInt(a$1, 16) / 255 : 1
	};
}
var hex = {
	test: /* @__PURE__ */ isColorString("#"),
	parse: parseHex,
	transform: rgba.transform
};
var color = {
	test: (v) => rgba.test(v) || hex.test(v) || hsla.test(v),
	parse: (v) => {
		if (rgba.test(v)) return rgba.parse(v);
		else if (hsla.test(v)) return hsla.parse(v);
		else return hex.parse(v);
	},
	transform: (v) => {
		return isString$1(v) ? v : v.hasOwnProperty("red") ? rgba.transform(v) : hsla.transform(v);
	}
};
var colorToken = "${c}";
var numberToken = "${n}";
function test(v) {
	var _a, _b, _c, _d;
	return isNaN(v) && isString$1(v) && ((_b = (_a = /* @__PURE__ */ v.match(floatRegex)) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0) + ((_d = (_c = /* @__PURE__ */ v.match(colorRegex)) === null || _c === void 0 ? void 0 : _c.length) !== null && _d !== void 0 ? _d : 0) > 0;
}
function analyse$1(v) {
	if (typeof v === "number") v = `${v}`;
	const values = [];
	let numColors = 0;
	const colors = /* @__PURE__ */ v.match(colorRegex);
	if (colors) {
		numColors = colors.length;
		v = /* @__PURE__ */ v.replace(colorRegex, colorToken);
		values.push(.../* @__PURE__ */ colors.map(color.parse));
	}
	const numbers = /* @__PURE__ */ v.match(floatRegex);
	if (numbers) {
		v = /* @__PURE__ */ v.replace(floatRegex, numberToken);
		values.push(.../* @__PURE__ */ numbers.map(number.parse));
	}
	return {
		values,
		numColors,
		tokenised: v
	};
}
function parse$1(v) {
	return analyse$1(v).values;
}
function createTransformer(v) {
	const { values, numColors, tokenised } = analyse$1(v);
	const numValues = values.length;
	return (v$1) => {
		let output = tokenised;
		for (let i = 0; i < numValues; i++) output = /* @__PURE__ */ output.replace(i < numColors ? colorToken : numberToken, i < numColors ? color.transform(v$1[i]) : sanitize(v$1[i]));
		return output;
	};
}
var convertNumbersToZero = (v) => typeof v === "number" ? 0 : v;
function getAnimatableNone(v) {
	const parsed = /* @__PURE__ */ parse$1(v);
	return createTransformer(v)(/* @__PURE__ */ parsed.map(convertNumbersToZero));
}
var complex = {
	test,
	parse: parse$1,
	createTransformer,
	getAnimatableNone
};
function hueToRgb(p$1, q, t) {
	if (t < 0) t += 1;
	if (t > 1) t -= 1;
	if (t < 1 / 6) return p$1 + (q - p$1) * 6 * t;
	if (t < 1 / 2) return q;
	if (t < 2 / 3) return p$1 + (q - p$1) * (2 / 3 - t) * 6;
	return p$1;
}
function hslaToRgba({ hue, saturation, lightness, alpha: alpha$2 }) {
	hue /= 360;
	saturation /= 100;
	lightness /= 100;
	let red = 0;
	let green = 0;
	let blue = 0;
	if (!saturation) red = green = blue = lightness;
	else {
		const q = lightness < .5 ? lightness * (1 + saturation) : lightness + saturation - lightness * saturation;
		const p$1 = 2 * lightness - q;
		red = /* @__PURE__ */ hueToRgb(p$1, q, hue + 1 / 3);
		green = /* @__PURE__ */ hueToRgb(p$1, q, hue);
		blue = /* @__PURE__ */ hueToRgb(p$1, q, hue - 1 / 3);
	}
	return {
		red: /* @__PURE__ */ Math.round(red * 255),
		green: /* @__PURE__ */ Math.round(green * 255),
		blue: /* @__PURE__ */ Math.round(blue * 255),
		alpha: alpha$2
	};
}
var mixLinearColor = (from$1, to, v) => {
	const fromExpo = from$1 * from$1;
	const toExpo = to * to;
	return Math.sqrt(/* @__PURE__ */ Math.max(0, v * (toExpo - fromExpo) + fromExpo));
};
var colorTypes = [
	hex,
	rgba,
	hsla
];
var getColorType = (v) => colorTypes.find((type) => type.test(v));
var notAnimatable = (color$1) => `'${color$1}' is not an animatable color. Use the equivalent color code instead.`;
var mixColor = (from$1, to) => {
	let fromColorType = /* @__PURE__ */ getColorType(from$1);
	let toColorType = /* @__PURE__ */ getColorType(to);
	invariant(!!fromColorType, /* @__PURE__ */ notAnimatable(from$1));
	invariant(!!toColorType, /* @__PURE__ */ notAnimatable(to));
	let fromColor = /* @__PURE__ */ fromColorType.parse(from$1);
	let toColor = /* @__PURE__ */ toColorType.parse(to);
	if (fromColorType === hsla) {
		fromColor = /* @__PURE__ */ hslaToRgba(fromColor);
		fromColorType = rgba;
	}
	if (toColorType === hsla) {
		toColor = /* @__PURE__ */ hslaToRgba(toColor);
		toColorType = rgba;
	}
	const blended = /* @__PURE__ */ Object.assign({}, fromColor);
	return (v) => {
		for (const key in blended) if (key !== "alpha") blended[key] = /* @__PURE__ */ mixLinearColor(fromColor[key], toColor[key], v);
		blended.alpha = /* @__PURE__ */ mix(fromColor.alpha, toColor.alpha, v);
		return fromColorType.transform(blended);
	};
};
var isNum = (v) => typeof v === "number";
var combineFunctions = (a$1, b$1) => (v) => b$1(/* @__PURE__ */ a$1(v));
var pipe = (...transformers) => transformers.reduce(combineFunctions);
function getMixer(origin, target) {
	if (isNum(origin)) return (v) => mix(origin, target, v);
	else if (color.test(origin)) return mixColor(origin, target);
	else return mixComplex(origin, target);
}
var mixArray = (from$1, to) => {
	const output = [...from$1];
	const numValues = output.length;
	const blendValue = /* @__PURE__ */ from$1.map((fromThis, i) => getMixer(fromThis, to[i]));
	return (v) => {
		for (let i = 0; i < numValues; i++) output[i] = /* @__PURE__ */ blendValue[i](v);
		return output;
	};
};
var mixObject = (origin, target) => {
	const output = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.assign({}, origin), target);
	const blendValue = {};
	for (const key in output) if (origin[key] !== void 0 && target[key] !== void 0) blendValue[key] = /* @__PURE__ */ getMixer(origin[key], target[key]);
	return (v) => {
		for (const key in blendValue) output[key] = /* @__PURE__ */ blendValue[key](v);
		return output;
	};
};
function analyse(value) {
	const parsed = /* @__PURE__ */ complex.parse(value);
	const numValues = parsed.length;
	let numNumbers = 0;
	let numRGB = 0;
	let numHSL = 0;
	for (let i = 0; i < numValues; i++) if (numNumbers || typeof parsed[i] === "number") numNumbers++;
	else if (parsed[i].hue !== void 0) numHSL++;
	else numRGB++;
	return {
		parsed,
		numNumbers,
		numRGB,
		numHSL
	};
}
var mixComplex = (origin, target) => {
	const template = /* @__PURE__ */ complex.createTransformer(target);
	const originStats = /* @__PURE__ */ analyse(origin);
	const targetStats = /* @__PURE__ */ analyse(target);
	if (originStats.numHSL === targetStats.numHSL && originStats.numRGB === targetStats.numRGB && originStats.numNumbers >= targetStats.numNumbers) return pipe(/* @__PURE__ */ mixArray(originStats.parsed, targetStats.parsed), template);
	else {
		warning(true, `Complex values '${origin}' and '${target}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`);
		return (p$1) => `${p$1 > 0 ? target : origin}`;
	}
};
var mixNumber = (from$1, to) => (p$1) => mix(from$1, to, p$1);
function detectMixerFactory(v) {
	if (typeof v === "number") return mixNumber;
	else if (typeof v === "string") if (color.test(v)) return mixColor;
	else return mixComplex;
	else if (Array.isArray(v)) return mixArray;
	else if (typeof v === "object") return mixObject;
}
function createMixers(output, ease, customMixer) {
	const mixers = [];
	const mixerFactory = customMixer || detectMixerFactory(output[0]);
	const numMixers = output.length - 1;
	for (let i = 0; i < numMixers; i++) {
		let mixer = /* @__PURE__ */ mixerFactory(output[i], output[i + 1]);
		if (ease) mixer = /* @__PURE__ */ pipe(Array.isArray(ease) ? ease[i] : ease, mixer);
		mixers.push(mixer);
	}
	return mixers;
}
function fastInterpolate([from$1, to], [mixer]) {
	return (v) => mixer(/* @__PURE__ */ progress(from$1, to, v));
}
function slowInterpolate(input, mixers) {
	const inputLength = input.length;
	const lastInputIndex = inputLength - 1;
	return (v) => {
		let mixerIndex = 0;
		let foundMixerIndex = false;
		if (v <= input[0]) foundMixerIndex = true;
		else if (v >= input[lastInputIndex]) {
			mixerIndex = lastInputIndex - 1;
			foundMixerIndex = true;
		}
		if (!foundMixerIndex) {
			let i = 1;
			for (; i < inputLength; i++) if (input[i] > v || i === lastInputIndex) break;
			mixerIndex = i - 1;
		}
		const progressInRange = /* @__PURE__ */ progress(input[mixerIndex], input[mixerIndex + 1], v);
		return mixers[mixerIndex](progressInRange);
	};
}
function interpolate(input, output, { clamp: isClamp = true, ease, mixer } = {}) {
	const inputLength = input.length;
	invariant(inputLength === output.length, "Both input and output ranges must be the same length");
	invariant(!ease || !Array.isArray(ease) || ease.length === inputLength - 1, "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values.");
	if (input[0] > input[inputLength - 1]) {
		input = /* @__PURE__ */ [].concat(input);
		output = /* @__PURE__ */ [].concat(output);
		input.reverse();
		output.reverse();
	}
	const mixers = /* @__PURE__ */ createMixers(output, ease, mixer);
	const interpolator = inputLength === 2 ? fastInterpolate(input, mixers) : slowInterpolate(input, mixers);
	return isClamp ? (v) => interpolator(/* @__PURE__ */ clamp$1(input[0], input[inputLength - 1], v)) : interpolator;
}
var mirrorEasing = (easing) => (p$1) => p$1 <= .5 ? easing(2 * p$1) / 2 : (2 - easing(2 * (1 - p$1))) / 2;
var createExpoIn = (power) => (p$1) => Math.pow(p$1, power);
var linear = (p$1) => p$1;
var easeInOut = /* @__PURE__ */ mirrorEasing(/* @__PURE__ */ createExpoIn(2));
function defaultEasing(values, easing) {
	return values.map(() => easing || easeInOut).splice(0, values.length - 1);
}
function defaultOffset(values) {
	const numValues = values.length;
	return values.map((_value, i) => i !== 0 ? i / (numValues - 1) : 0);
}
function convertOffsetToTimes(offset$1, duration) {
	return offset$1.map((o) => o * duration);
}
function keyframes({ from: from$1 = 0, to = 1, ease, offset: offset$1, duration = 300 }) {
	const state = {
		done: false,
		value: from$1
	};
	const values = Array.isArray(to) ? to : [from$1, to];
	const times = /* @__PURE__ */ convertOffsetToTimes(offset$1 && offset$1.length === values.length ? offset$1 : defaultOffset(values), duration);
	function createInterpolator() {
		return interpolate(times, values, { ease: Array.isArray(ease) ? ease : defaultEasing(values, ease) });
	}
	let interpolator = /* @__PURE__ */ createInterpolator();
	return {
		next: (t) => {
			state.value = /* @__PURE__ */ interpolator(t);
			state.done = t >= duration;
			return state;
		},
		flipTarget: () => {
			values.reverse();
			interpolator = /* @__PURE__ */ createInterpolator();
		}
	};
}
function decay({ velocity = 0, from: from$1 = 0, power = .8, timeConstant = 350, restDelta = .5, modifyTarget }) {
	const state = {
		done: false,
		value: from$1
	};
	let amplitude = power * velocity;
	const ideal = from$1 + amplitude;
	const target = modifyTarget === void 0 ? ideal : modifyTarget(ideal);
	if (target !== ideal) amplitude = target - from$1;
	return {
		next: (t) => {
			const delta = -amplitude * Math.exp(-t / timeConstant);
			state.done = !(delta > restDelta || delta < -restDelta);
			state.value = state.done ? target : target + delta;
			return state;
		},
		flipTarget: () => {}
	};
}
var types = {
	keyframes,
	spring,
	decay
};
function detectAnimationFromOptions(config) {
	if (Array.isArray(config.to)) return keyframes;
	else if (types[config.type]) return types[config.type];
	const keys$1 = new Set(Object.keys(config));
	if (keys$1.has("ease") || keys$1.has("duration") && !keys$1.has("dampingRatio")) return keyframes;
	else if (keys$1.has("dampingRatio") || keys$1.has("stiffness") || keys$1.has("mass") || keys$1.has("damping") || keys$1.has("restSpeed") || keys$1.has("restDelta")) return spring;
	return keyframes;
}
var defaultTimestep = 1 / 60 * 1e3;
var getCurrentTime = typeof performance !== "undefined" ? () => performance.now() : () => Date.now();
var onNextFrame = typeof window !== "undefined" ? (callback) => window.requestAnimationFrame(callback) : (callback) => setTimeout(() => callback(/* @__PURE__ */ getCurrentTime()), defaultTimestep);
function createRenderStep(runNextFrame$1) {
	let toRun = [];
	let toRunNextFrame = [];
	let numToRun = 0;
	let isProcessing$1 = false;
	let flushNextFrame = false;
	const toKeepAlive = /* @__PURE__ */ new WeakSet();
	const step = {
		schedule: (callback, keepAlive = false, immediate = false) => {
			const addToCurrentFrame = immediate && isProcessing$1;
			const buffer = addToCurrentFrame ? toRun : toRunNextFrame;
			if (keepAlive) toKeepAlive.add(callback);
			if (buffer.indexOf(callback) === -1) {
				buffer.push(callback);
				if (addToCurrentFrame && isProcessing$1) numToRun = toRun.length;
			}
			return callback;
		},
		cancel: (callback) => {
			const index = /* @__PURE__ */ toRunNextFrame.indexOf(callback);
			if (index !== -1) toRunNextFrame.splice(index, 1);
			toKeepAlive.delete(callback);
		},
		process: (frameData) => {
			if (isProcessing$1) {
				flushNextFrame = true;
				return;
			}
			isProcessing$1 = true;
			[toRun, toRunNextFrame] = [toRunNextFrame, toRun];
			toRunNextFrame.length = 0;
			numToRun = toRun.length;
			if (numToRun) for (let i = 0; i < numToRun; i++) {
				const callback = toRun[i];
				callback(frameData);
				if (toKeepAlive.has(callback)) {
					step.schedule(callback);
					runNextFrame$1();
				}
			}
			isProcessing$1 = false;
			if (flushNextFrame) {
				flushNextFrame = false;
				step.process(frameData);
			}
		}
	};
	return step;
}
var maxElapsed = 40;
var useDefaultElapsed = true;
var runNextFrame = false;
var isProcessing = false;
var frame = {
	delta: 0,
	timestamp: 0
};
var stepsOrder = [
	"read",
	"update",
	"preRender",
	"render",
	"postRender"
];
var steps = /* @__PURE__ */ stepsOrder.reduce((acc, key) => {
	acc[key] = /* @__PURE__ */ createRenderStep(() => runNextFrame = true);
	return acc;
}, {});
var sync = /* @__PURE__ */ stepsOrder.reduce((acc, key) => {
	const step = steps[key];
	acc[key] = (process, keepAlive = false, immediate = false) => {
		if (!runNextFrame) startLoop();
		return step.schedule(process, keepAlive, immediate);
	};
	return acc;
}, {});
var cancelSync = /* @__PURE__ */ stepsOrder.reduce((acc, key) => {
	acc[key] = steps[key].cancel;
	return acc;
}, {});
var processStep = (stepId) => steps[stepId].process(frame);
var processFrame = (timestamp) => {
	runNextFrame = false;
	frame.delta = useDefaultElapsed ? defaultTimestep : Math.max(/* @__PURE__ */ Math.min(timestamp - frame.timestamp, maxElapsed), 1);
	frame.timestamp = timestamp;
	isProcessing = true;
	stepsOrder.forEach(processStep);
	isProcessing = false;
	if (runNextFrame) {
		useDefaultElapsed = false;
		onNextFrame(processFrame);
	}
};
var startLoop = () => {
	runNextFrame = true;
	useDefaultElapsed = true;
	if (!isProcessing) onNextFrame(processFrame);
};
var es_default = sync;
function loopElapsed(elapsed, duration, delay = 0) {
	return elapsed - duration - delay;
}
function reverseElapsed(elapsed, duration, delay = 0, isForwardPlayback = true) {
	return isForwardPlayback ? loopElapsed(duration + -elapsed, duration, delay) : duration - (elapsed - duration) + delay;
}
function hasRepeatDelayElapsed(elapsed, duration, delay, isForwardPlayback) {
	return isForwardPlayback ? elapsed >= duration + delay : elapsed <= -delay;
}
var framesync = (update) => {
	const passTimestamp = ({ delta }) => update(delta);
	return {
		start: () => es_default.update(passTimestamp, true),
		stop: () => cancelSync.update(passTimestamp)
	};
};
function animate(_a) {
	var _b, _c;
	var { from: from$1, autoplay = true, driver = framesync, elapsed = 0, repeat: repeatMax = 0, repeatType = "loop", repeatDelay = 0, onPlay, onStop, onComplete, onRepeat, onUpdate } = _a, options = /* @__PURE__ */ __rest(_a, [
		"from",
		"autoplay",
		"driver",
		"elapsed",
		"repeat",
		"repeatType",
		"repeatDelay",
		"onPlay",
		"onStop",
		"onComplete",
		"onRepeat",
		"onUpdate"
	]);
	let { to } = options;
	let driverControls;
	let repeatCount = 0;
	let computedDuration = options.duration;
	let latest;
	let isComplete = false;
	let isForwardPlayback = true;
	let interpolateFromNumber;
	const animator = /* @__PURE__ */ detectAnimationFromOptions(options);
	if ((_c = (_b = animator).needsInterpolation) === null || _c === void 0 ? void 0 : _c.call(_b, from$1, to)) {
		interpolateFromNumber = /* @__PURE__ */ interpolate([0, 100], [from$1, to], { clamp: false });
		from$1 = 0;
		to = 100;
	}
	const animation = /* @__PURE__ */ animator(/* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.assign({}, options), {
		from: from$1,
		to
	}));
	function repeat() {
		repeatCount++;
		if (repeatType === "reverse") {
			isForwardPlayback = repeatCount % 2 === 0;
			elapsed = /* @__PURE__ */ reverseElapsed(elapsed, computedDuration, repeatDelay, isForwardPlayback);
		} else {
			elapsed = /* @__PURE__ */ loopElapsed(elapsed, computedDuration, repeatDelay);
			if (repeatType === "mirror") animation.flipTarget();
		}
		isComplete = false;
		onRepeat && onRepeat();
	}
	function complete() {
		driverControls.stop();
		onComplete && onComplete();
	}
	function update(delta) {
		if (!isForwardPlayback) delta = -delta;
		elapsed += delta;
		if (!isComplete) {
			const state = /* @__PURE__ */ animation.next(/* @__PURE__ */ Math.max(0, elapsed));
			latest = state.value;
			if (interpolateFromNumber) latest = /* @__PURE__ */ interpolateFromNumber(latest);
			isComplete = isForwardPlayback ? state.done : elapsed <= 0;
		}
		onUpdate === null || onUpdate === void 0 || onUpdate(latest);
		if (isComplete) {
			if (repeatCount === 0) computedDuration !== null && computedDuration !== void 0 || (computedDuration = elapsed);
			if (repeatCount < repeatMax) hasRepeatDelayElapsed(elapsed, computedDuration, repeatDelay, isForwardPlayback) && repeat();
			else complete();
		}
	}
	function play() {
		onPlay === null || onPlay === void 0 || onPlay();
		driverControls = /* @__PURE__ */ driver(update);
		driverControls.start();
	}
	autoplay && play();
	return { stop: () => {
		onStop === null || onStop === void 0 || onStop();
		driverControls.stop();
	} };
}
var a = (a1, a2) => 1 - 3 * a2 + 3 * a1;
var b = (a1, a2) => 3 * a2 - 6 * a1;
var c = (a1) => 3 * a1;
var calcBezier = (t, a1, a2) => ((a(a1, a2) * t + b(a1, a2)) * t + c(a1)) * t;
var getSlope = (t, a1, a2) => 3 * a(a1, a2) * t * t + 2 * b(a1, a2) * t + c(a1);
var subdivisionPrecision = 1e-7;
var subdivisionMaxIterations = 10;
function binarySubdivide(aX, aA, aB, mX1, mX2) {
	let currentX;
	let currentT;
	let i = 0;
	do {
		currentT = aA + (aB - aA) / 2;
		currentX = calcBezier(currentT, mX1, mX2) - aX;
		if (currentX > 0) aB = currentT;
		else aA = currentT;
	} while (Math.abs(currentX) > subdivisionPrecision && ++i < subdivisionMaxIterations);
	return currentT;
}
var newtonIterations = 8;
var newtonMinSlope = .001;
function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
	for (let i = 0; i < newtonIterations; ++i) {
		const currentSlope = /* @__PURE__ */ getSlope(aGuessT, mX1, mX2);
		if (currentSlope === 0) return aGuessT;
		const currentX = calcBezier(aGuessT, mX1, mX2) - aX;
		aGuessT -= currentX / currentSlope;
	}
	return aGuessT;
}
var kSplineTableSize = 11;
var kSampleStepSize = 1 / (kSplineTableSize - 1);
function cubicBezier(mX1, mY1, mX2, mY2) {
	if (mX1 === mY1 && mX2 === mY2) return linear;
	const sampleValues = new Float32Array(kSplineTableSize);
	for (let i = 0; i < kSplineTableSize; ++i) sampleValues[i] = /* @__PURE__ */ calcBezier(i * kSampleStepSize, mX1, mX2);
	function getTForX(aX) {
		let intervalStart = 0;
		let currentSample = 1;
		const lastSample = kSplineTableSize - 1;
		for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) intervalStart += kSampleStepSize;
		--currentSample;
		const dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
		const guessForT = intervalStart + dist * kSampleStepSize;
		const initialSlope = /* @__PURE__ */ getSlope(guessForT, mX1, mX2);
		if (initialSlope >= newtonMinSlope) return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
		else if (initialSlope === 0) return guessForT;
		else return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
	}
	return (t) => t === 0 || t === 1 ? t : calcBezier(/* @__PURE__ */ getTForX(t), mY1, mY2);
}
function murmur2(str) {
	var h$1 = 0;
	var k, i = 0, len = str.length;
	for (; len >= 4; ++i, len -= 4) {
		k = str.charCodeAt(i) & 255 | (str.charCodeAt(++i) & 255) << 8 | (str.charCodeAt(++i) & 255) << 16 | (str.charCodeAt(++i) & 255) << 24;
		k = (k & 65535) * 1540483477 + ((k >>> 16) * 59797 << 16);
		k ^= k >>> 24;
		h$1 = (k & 65535) * 1540483477 + ((k >>> 16) * 59797 << 16) ^ (h$1 & 65535) * 1540483477 + ((h$1 >>> 16) * 59797 << 16);
	}
	switch (len) {
		case 3: h$1 ^= (str.charCodeAt(i + 2) & 255) << 16;
		case 2: h$1 ^= (str.charCodeAt(i + 1) & 255) << 8;
		case 1:
			h$1 ^= str.charCodeAt(i) & 255;
			h$1 = (h$1 & 65535) * 1540483477 + ((h$1 >>> 16) * 59797 << 16);
	}
	h$1 ^= h$1 >>> 13;
	h$1 = (h$1 & 65535) * 1540483477 + ((h$1 >>> 16) * 59797 << 16);
	return ((h$1 ^ h$1 >>> 15) >>> 0).toString(36);
}
var unitlessKeys = {
	animationIterationCount: 1,
	aspectRatio: 1,
	borderImageOutset: 1,
	borderImageSlice: 1,
	borderImageWidth: 1,
	boxFlex: 1,
	boxFlexGroup: 1,
	boxOrdinalGroup: 1,
	columnCount: 1,
	columns: 1,
	flex: 1,
	flexGrow: 1,
	flexPositive: 1,
	flexShrink: 1,
	flexNegative: 1,
	flexOrder: 1,
	gridRow: 1,
	gridRowEnd: 1,
	gridRowSpan: 1,
	gridRowStart: 1,
	gridColumn: 1,
	gridColumnEnd: 1,
	gridColumnSpan: 1,
	gridColumnStart: 1,
	msGridRow: 1,
	msGridRowSpan: 1,
	msGridColumn: 1,
	msGridColumnSpan: 1,
	fontWeight: 1,
	lineHeight: 1,
	opacity: 1,
	order: 1,
	orphans: 1,
	scale: 1,
	tabSize: 1,
	widows: 1,
	zIndex: 1,
	zoom: 1,
	WebkitLineClamp: 1,
	fillOpacity: 1,
	floodOpacity: 1,
	stopOpacity: 1,
	strokeDasharray: 1,
	strokeDashoffset: 1,
	strokeMiterlimit: 1,
	strokeOpacity: 1,
	strokeWidth: 1
};
function memoize(fn) {
	var cache = /* @__PURE__ */ Object.create(null);
	return function(arg) {
		if (cache[arg] === void 0) cache[arg] = /* @__PURE__ */ fn(arg);
		return cache[arg];
	};
}
var isDevelopment$1 = false;
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;
var isCustomProperty = function isCustomProperty$1(property) {
	return property.charCodeAt(1) === 45;
};
var isProcessableValue = function isProcessableValue$1(value) {
	return value != null && typeof value !== "boolean";
};
var processStyleName = /* @__PURE__ */ memoize(function(styleName) {
	return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, "-$&").toLowerCase();
});
var processStyleValue = function processStyleValue$1(key, value) {
	switch (key) {
		case "animation":
		case "animationName": if (typeof value === "string") return value.replace(animationRegex, function(match$1, p1, p2) {
			cursor = {
				name: p1,
				styles: p2,
				next: cursor
			};
			return p1;
		});
	}
	if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value === "number" && value !== 0) return value + "px";
	return value;
};
var noComponentSelectorMessage = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function handleInterpolation(mergedProps, registered, interpolation) {
	if (interpolation == null) return "";
	var componentSelector = interpolation;
	if (componentSelector.__emotion_styles !== void 0) return componentSelector;
	switch (typeof interpolation) {
		case "boolean": return "";
		case "object":
			var keyframes$1 = interpolation;
			if (keyframes$1.anim === 1) {
				cursor = {
					name: keyframes$1.name,
					styles: keyframes$1.styles,
					next: cursor
				};
				return keyframes$1.name;
			}
			var serializedStyles = interpolation;
			if (serializedStyles.styles !== void 0) {
				var next$1 = serializedStyles.next;
				if (next$1 !== void 0) while (next$1 !== void 0) {
					cursor = {
						name: next$1.name,
						styles: next$1.styles,
						next: cursor
					};
					next$1 = next$1.next;
				}
				return serializedStyles.styles + ";";
			}
			return createStringFromObject(mergedProps, registered, interpolation);
		case "function":
			if (mergedProps !== void 0) {
				var previousCursor = cursor;
				var result = /* @__PURE__ */ interpolation(mergedProps);
				cursor = previousCursor;
				return handleInterpolation(mergedProps, registered, result);
			}
			break;
	}
	var asString = interpolation;
	if (registered == null) return asString;
	var cached = registered[asString];
	return cached !== void 0 ? cached : asString;
}
function createStringFromObject(mergedProps, registered, obj) {
	var string = "";
	if (Array.isArray(obj)) for (var i = 0; i < obj.length; i++) string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
	else for (var key in obj) {
		var value = obj[key];
		if (typeof value !== "object") {
			var asString = value;
			if (registered != null && registered[asString] !== void 0) string += key + "{" + registered[asString] + "}";
			else if (isProcessableValue(asString)) string += processStyleName(key) + ":" + processStyleValue(key, asString) + ";";
		} else {
			if (key === "NO_COMPONENT_SELECTOR" && isDevelopment$1) throw new Error(noComponentSelectorMessage);
			if (Array.isArray(value) && typeof value[0] === "string" && (registered == null || registered[value[0]] === void 0)) {
				for (var _i = 0; _i < value.length; _i++) if (isProcessableValue(value[_i])) string += processStyleName(key) + ":" + processStyleValue(key, value[_i]) + ";";
			} else {
				var interpolated = /* @__PURE__ */ handleInterpolation(mergedProps, registered, value);
				switch (key) {
					case "animation":
					case "animationName":
						string += processStyleName(key) + ":" + interpolated + ";";
						break;
					default: string += key + "{" + interpolated + "}";
				}
			}
		}
	}
	return string;
}
var labelPattern = /label:\s*([^\s;{]+)\s*(;|$)/g;
var cursor;
function serializeStyles(args, registered, mergedProps) {
	if (args.length === 1 && typeof args[0] === "object" && args[0] !== null && args[0].styles !== void 0) return args[0];
	var stringMode = true;
	var styles = "";
	cursor = void 0;
	var strings = args[0];
	if (strings == null || strings.raw === void 0) {
		stringMode = false;
		styles += /* @__PURE__ */ handleInterpolation(mergedProps, registered, strings);
	} else styles += strings[0];
	for (var i = 1; i < args.length; i++) {
		styles += /* @__PURE__ */ handleInterpolation(mergedProps, registered, args[i]);
		if (stringMode) styles += strings[i];
	}
	labelPattern.lastIndex = 0;
	var identifierName = "";
	var match$1;
	while ((match$1 = /* @__PURE__ */ labelPattern.exec(styles)) !== null) identifierName += "-" + match$1[1];
	return {
		name: murmur2(styles) + identifierName,
		styles,
		next: cursor
	};
}
function createNameGetter() {
	return new Proxy({}, { get(_, p$1) {
		return p$1;
	} });
}
const CSSProperty = /* @__PURE__ */ createNameGetter();
const extensions = {
	paddingX: [CSSProperty.paddingLeft, CSSProperty.paddingRight],
	paddingY: [CSSProperty.paddingTop, CSSProperty.paddingBottom],
	marginX: [CSSProperty.marginInlineStart, CSSProperty.marginInlineEnd],
	marginY: [CSSProperty.marginTop, CSSProperty.marginBottom],
	borderX: [CSSProperty.borderLeft, CSSProperty.borderRight],
	borderY: [CSSProperty.borderTop, CSSProperty.borderBottom],
	color: [CSSProperty.color, CSSProperty.fill],
	borderTopRadius: [CSSProperty.borderTopLeftRadius, CSSProperty.borderTopRightRadius],
	borderBottomRadius: [CSSProperty.borderBottomLeftRadius, CSSProperty.borderBottomRightRadius],
	borderRightRadius: [CSSProperty.borderTopRightRadius, CSSProperty.borderBottomRightRadius],
	borderLeftRadius: [CSSProperty.borderTopLeftRadius, CSSProperty.borderBottomLeftRadius],
	backgroundGradient: [CSSProperty.backgroundImage],
	boxSize: [CSSProperty.width, CSSProperty.height]
};
const CSSExtendedProperty = /* @__PURE__ */ createNameGetter();
const aliases = {
	font: CSSExtendedProperty.fontFamily,
	shadow: CSSExtendedProperty.boxShadow,
	rounded: CSSExtendedProperty.borderRadius,
	roundedTop: CSSExtendedProperty.borderTopRadius,
	roundedBottom: CSSExtendedProperty.borderBottomRadius,
	roundedLeft: CSSExtendedProperty.borderLeftRadius,
	roundedRight: CSSExtendedProperty.borderRightRadius,
	bg: CSSExtendedProperty.background,
	bgImage: CSSExtendedProperty.backgroundImage,
	bgSize: CSSExtendedProperty.backgroundSize,
	bgPosition: CSSExtendedProperty.backgroundPosition,
	bgRepeat: CSSExtendedProperty.backgroundRepeat,
	bgAttachment: CSSExtendedProperty.backgroundAttachment,
	bgColor: CSSExtendedProperty.backgroundColor,
	bgGradient: CSSExtendedProperty.backgroundGradient,
	bgClip: CSSExtendedProperty.backgroundClip,
	pos: CSSExtendedProperty.position,
	p: CSSExtendedProperty.padding,
	pt: CSSExtendedProperty.paddingTop,
	pr: CSSExtendedProperty.paddingRight,
	pl: CSSExtendedProperty.paddingLeft,
	pb: CSSExtendedProperty.paddingBottom,
	ps: CSSExtendedProperty.paddingInlineStart,
	pe: CSSExtendedProperty.paddingInlineEnd,
	px: CSSExtendedProperty.paddingX,
	py: CSSExtendedProperty.paddingY,
	m: CSSExtendedProperty.margin,
	mt: CSSExtendedProperty.marginTop,
	mr: CSSExtendedProperty.marginRight,
	ml: CSSExtendedProperty.marginLeft,
	mb: CSSExtendedProperty.marginBottom,
	ms: CSSExtendedProperty.marginInlineStart,
	me: CSSExtendedProperty.marginInlineEnd,
	mx: CSSExtendedProperty.marginX,
	my: CSSExtendedProperty.marginY,
	w: CSSExtendedProperty.width,
	minW: CSSExtendedProperty.minWidth,
	maxW: CSSExtendedProperty.maxWidth,
	h: CSSExtendedProperty.height,
	minH: CSSExtendedProperty.minHeight,
	maxH: CSSExtendedProperty.maxHeight
};
const CSSAllProperty = /* @__PURE__ */ createNameGetter();
const expandAliases = (...props) => {
	const final = [...props];
	for (const p$1 of props) if (aliases[p$1]) final.push(aliases[p$1]);
	return final;
};
const pseudoSelectors = {
	_rtl: "[dir=rtl] &, &[dir=rtl]",
	_ltr: "[dir=ltr] &, &[dir=ltr]",
	_dark: "&[data-theme=dark]",
	_light: "&[data-theme=light]"
};
function getSupportedPseudoClasses() {
	return {
		active: "active",
		after: "after",
		anyLink: "any-link",
		before: "before",
		blank: "blank",
		checked: "checked",
		current: "current",
		default: "default",
		defined: "defined",
		disabled: "disabled",
		empty: "empty",
		enabled: "enabled",
		first: "first",
		firstChild: "first-child",
		firstLetter: "first-letter",
		firstLine: "first-line",
		firstOfType: "first-of-type",
		focus: "focus",
		focusVisible: "focus-visible",
		focusWithin: "focus-within",
		fullscreen: "fullscreen",
		future: "future",
		hover: "hover",
		inRange: "in-range",
		indeterminate: "indeterminate",
		invalid: "invalid",
		lastChild: "last-child",
		lastOfType: "last-of-type",
		left: "left",
		link: "link",
		localLink: "local-link",
		nthCol: "nth-col",
		nthLastCol: "nth-last-col",
		onlyChild: "only-child",
		onlyOfType: "only-of-type",
		optional: "optional",
		outOfRange: "out-of-range",
		past: "past",
		paused: "paused",
		pictureInPicture: "picture-in-picture",
		placeholderShown: "placeholder-shown",
		playing: "playing",
		readOnly: "read-only",
		readWrite: "read-write",
		required: "required",
		right: "right",
		root: "root",
		scope: "scope",
		target: "target",
		targetWithin: "target-within",
		userInvalid: "user-invalid",
		userValid: "user-valid",
		valid: "valid",
		visited: "visited"
	};
}
var CSSProcessor = class CSSProcessor {
	static supportedPseudoClasses = getSupportedPseudoClasses();
	static convertSelector = (sel) => {
		if (pseudoSelectors[sel]) return pseudoSelectors[sel];
		let selector = sel;
		if (selector.startsWith("$") || selector.endsWith("$") || selector.startsWith("_")) {
			let prefix$1 = "";
			let suffix = "";
			if (selector.startsWith("_")) {
				prefix$1 = "&";
				selector = /* @__PURE__ */ selector.slice(1);
			} else if (selector.startsWith("$")) {
				prefix$1 = "& ";
				selector = /* @__PURE__ */ selector.slice(1);
			} else {
				suffix = " &";
				selector = /* @__PURE__ */ selector.slice(0, selector.length - 1);
			}
			if (selector.startsWith("data") || selector.startsWith("aria")) {
				const [k, v] = selector.split("__");
				return v ? `${prefix$1}[${kebabCase(k)}='${kebabCase(v)}']${suffix}` : `${prefix$1}[${kebabCase(k)}]${suffix}`;
			}
			if (prefix$1 === "&") {
				if (selector.startsWith("$")) return `${prefix$1}::${selector.slice(1)}`;
				if (CSSProcessor.supportedPseudoClasses[selector]) {
					const pseudoClass = CSSProcessor.supportedPseudoClasses[selector];
					return [
						`${prefix$1}:${pseudoClass}`,
						`${prefix$1}[data-${pseudoClass}]:not([data-${pseudoClass}='false'])`,
						`${prefix$1}.${pseudoClass}`
					].join(", ");
				}
				const [k, v] = selector.split("__");
				const stateKey = /* @__PURE__ */ kebabCase(k);
				return v ? `${prefix$1}[data-${stateKey}='${kebabCase(v)}']` : `${prefix$1}[data-${stateKey}]:not([data-${stateKey}='false'])`;
			}
		}
	};
	static walkStateValues = (values, cb$1, ctx = {
		default: {},
		selectorPath: [],
		path: []
	}) => {
		const { $,...others } = values;
		for (const k in others) {
			const v = others[k];
			const finalDefault = others["default"] ?? ctx["default"];
			const selectorForCurrentNode = $ ?? get(finalDefault, [.../* @__PURE__ */ ctx.path.slice(1), "$"]);
			const selectorPath = selectorForCurrentNode ? [...ctx.selectorPath, selectorForCurrentNode] : ctx.selectorPath;
			const path = [...ctx.path, k];
			if (isPlainObject(v)) {
				CSSProcessor.walkStateValues(v, cb$1, {
					path,
					selectorPath,
					default: finalDefault
				});
				continue;
			}
			cb$1(v, path, selectorPath);
		}
	};
	constructor(opt) {
		this.opt = opt;
	}
	processAll(src, full = true) {
		const ret = [];
		const { state, extends: ex,...others } = src;
		if (ex) for (const sx of ex) ret.push(.../* @__PURE__ */ this.processAll(sx, full));
		if (state) {
			const cssVars = {};
			const finalSx = {};
			CSSProcessor.walkStateValues(state, (v, path, selectorPath) => {
				const varName = `--${this.opt.varPrefix}-state-${path.join("-")}`;
				const prop = last(path) ?? "";
				const sx = {};
				this.process(sx, prop, v, false);
				cssVars[varName] = sx[prop];
				set(finalSx, [...selectorPath, prop], `var(${varName})`);
			});
			ret.push(cssVars);
			ret.push(.../* @__PURE__ */ this.processAll(finalSx));
		}
		if (!isEmpty(others)) {
			const sx = {};
			this.processTo(sx, others, full);
			ret.push(sx);
		}
		return ret;
	}
	processTo(dest, src, full = true) {
		for (const p$1 in src) this.process(dest, p$1, src[p$1], full);
	}
	process(dest, prop, v, full = true) {
		if (this.opt.mixins[prop]) {
			const mixinObj = this.opt.mixins[prop]?.get(v);
			if (mixinObj) for (const p$2 in mixinObj) this.process(dest, p$2, mixinObj[p$2], full);
			return;
		}
		let p$1 = prop;
		if (isPlainObject(v)) {
			p$1 = CSSProcessor.convertSelector(p$1) ?? p$1;
			dest[p$1] = dest[p$1] ?? {};
			this.processTo(dest[p$1], v);
			return;
		}
		if (full) {
			p$1 = aliases[p$1] ?? p$1;
			if (extensions[p$1]) {
				for (const p2 of extensions[p$1]) dest[p2] = /* @__PURE__ */ this.opt.processValue(p2, v);
				return;
			}
		}
		dest[p$1] = /* @__PURE__ */ this.opt.processValue(p$1, v);
	}
};
let DesignTokenType = /* @__PURE__ */ function(DesignTokenType$1) {
	DesignTokenType$1["var"] = "var";
	DesignTokenType$1["mixin"] = "mixin";
	return DesignTokenType$1;
}({});
var DesignToken = class DesignToken {
	static create(type, { value, on, transform }) {
		return {
			type,
			value,
			on,
			transform,
			__Tokens: void 0,
			__ValueType: void 0,
			__CSSTokens: void 0
		};
	}
	static color(value) {
		return DesignToken.create(DesignTokenType.var, {
			value,
			on: /* @__PURE__ */ expandAliases(CSSAllProperty.color, CSSAllProperty.bgColor, CSSAllProperty.outlineColor, CSSAllProperty.borderColor, CSSAllProperty.accentColor, CSSAllProperty.fill, CSSAllProperty.stroke),
			transform: (rgb, cssVar) => {
				return isString(rgb) ? {
					default: `var(${cssVar(rgb)})`,
					rgb: `var(${cssVar(`${rgb}/rgb`)})`
				} : {
					default: `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`,
					rgb: `${rgb[0]} ${rgb[1]} ${rgb[2]}`
				};
			},
			fallback: ""
		});
	}
	static space(value) {
		return DesignToken.create(DesignTokenType.var, {
			value,
			on: /* @__PURE__ */ expandAliases(CSSAllProperty.gap, CSSAllProperty.rowGap, CSSAllProperty.columnGap, CSSAllProperty.top, CSSAllProperty.right, CSSAllProperty.bottom, CSSAllProperty.left, CSSAllProperty.m, CSSAllProperty.ms, CSSAllProperty.me, CSSAllProperty.mt, CSSAllProperty.mr, CSSAllProperty.mb, CSSAllProperty.ml, CSSAllProperty.mx, CSSAllProperty.my, CSSAllProperty.p, CSSAllProperty.ps, CSSAllProperty.pe, CSSAllProperty.pt, CSSAllProperty.pr, CSSAllProperty.pb, CSSAllProperty.pl, CSSAllProperty.px, CSSAllProperty.py)
		});
	}
	static boxSize(value) {
		return DesignToken.create(DesignTokenType.var, {
			value,
			on: /* @__PURE__ */ expandAliases(CSSAllProperty.w, CSSAllProperty.minW, CSSAllProperty.maxW, CSSAllProperty.h, CSSAllProperty.minH, CSSAllProperty.maxH, CSSAllProperty.boxSize),
			fallback: 0
		});
	}
	static fontSize(value) {
		return DesignToken.create(DesignTokenType.var, {
			value,
			on: /* @__PURE__ */ expandAliases(CSSAllProperty.fontSize),
			fallback: 0
		});
	}
	static lineHeight(value) {
		return DesignToken.create(DesignTokenType.var, {
			value,
			on: /* @__PURE__ */ expandAliases(CSSAllProperty.lineHeight),
			fallback: 0
		});
	}
	static rounded(value) {
		return DesignToken.create(DesignTokenType.var, {
			value,
			fallback: 0,
			on: /* @__PURE__ */ expandAliases(CSSAllProperty.rounded, CSSAllProperty.roundedTop, CSSAllProperty.roundedBottom, CSSAllProperty.roundedLeft, CSSAllProperty.roundedRight, CSSProperty.borderTopLeftRadius, CSSProperty.borderTopRightRadius, CSSProperty.borderBottomLeftRadius, CSSProperty.borderBottomRightRadius, CSSProperty.borderTopRightRadius, CSSProperty.borderBottomRightRadius, CSSProperty.borderTopLeftRadius, CSSProperty.borderBottomLeftRadius)
		});
	}
	static transitionTimingFunction(value) {
		return DesignToken.create(DesignTokenType.var, {
			value,
			on: /* @__PURE__ */ expandAliases(CSSAllProperty.transitionTimingFunction)
		});
	}
	static transitionDuration(value) {
		return DesignToken.create(DesignTokenType.var, {
			value,
			on: /* @__PURE__ */ expandAliases(CSSAllProperty.transitionDuration),
			transform: (v) => `${v}ms`
		});
	}
	static font(value) {
		return DesignToken.create(DesignTokenType.var, {
			value,
			on: /* @__PURE__ */ expandAliases(CSSAllProperty.font)
		});
	}
	static fontWeight(value) {
		return DesignToken.create(DesignTokenType.var, {
			value,
			on: /* @__PURE__ */ expandAliases(CSSAllProperty.fontWeight)
		});
	}
	static letterSpacing(value) {
		return DesignToken.create(DesignTokenType.var, {
			value,
			on: /* @__PURE__ */ expandAliases(CSSAllProperty.letterSpacing)
		});
	}
	static shadow(value) {
		return DesignToken.create(DesignTokenType.var, {
			value,
			on: /* @__PURE__ */ expandAliases(CSSAllProperty.shadow)
		});
	}
	static customMixin(customProp, value) {
		return DesignToken.create(DesignTokenType.mixin, {
			value,
			on: [customProp]
		});
	}
	static mixin(sx) {
		return {
			...sx,
			__mixin: true
		};
	}
};
const isMap = isPlainObject;
const setTo = (target, keyPath, v) => {
	let f = target;
	for (let i = 0; i < keyPath.length; i++) {
		const key = keyPath[i];
		if (i === keyPath.length - 1) {
			f[key] = v;
			continue;
		}
		f[key] = f[key] ?? {};
		f = f[key];
	}
};
var TokenSet = class TokenSet {
	static defaultMode = "_default";
	static walkValues = (o, cb$1, parent = []) => {
		for (const k in o) {
			const v = o[k];
			if (isMap(v)) {
				if (has(v, "_default")) {
					cb$1(v, [...parent, k]);
					continue;
				}
				TokenSet.walkValues(v, cb$1, [...parent, k]);
				continue;
			}
			cb$1(v, [...parent, k]);
		}
	};
	__Tokens = void 0;
	_values = {};
	_cssVarRefs = {};
	constructor(dt, { cssVar, transformFallback }) {
		TokenSet.walkValues(dt.value, (v, p$1) => {
			const token$1 = /* @__PURE__ */ p$1.join(".");
			const forEachTransformed = (v$1, each) => {
				const ret = dt.transform ? dt.transform(v$1, cssVar) : transformFallback(v$1);
				if (isObject(ret)) for (const i in ret) each(ret[i], i === "default" ? "" : i);
				else each(ret, "");
			};
			set(this._cssVarRefs, [token$1], /* @__PURE__ */ cssVar(token$1));
			if (isMap(v)) for (const k in v) forEachTransformed(v[k], (value, variant$1) => {
				set(this._values, [`${token$1}${variant$1 ? `/${variant$1}` : ""}`, k], value);
			});
			else forEachTransformed(v, (value, variant$1) => {
				set(this._values, [`${token$1}${variant$1 ? `/${variant$1}` : ""}`], value);
			});
		});
	}
	get tokens() {
		return keys(this._values);
	}
	get(token$1, modePseudo, strict) {
		const v = this._values[token$1];
		if (isObject(v)) {
			if (strict) return v[modePseudo];
			return v[modePseudo] ?? v[TokenSet.defaultMode];
		}
		if (strict) {
			if (modePseudo === TokenSet.defaultMode) return v;
			return;
		}
		return v;
	}
	use(token$1, variableOnly = false) {
		if (this._cssVarRefs[token$1]) {
			if (variableOnly) return `${this._cssVarRefs[token$1]}`;
			return `var(${this._cssVarRefs[token$1]})`;
		}
	}
};
var Mixin = class Mixin {
	static walkValue = (o, cb$1, parent = []) => {
		for (const k in o) {
			const v = o[k];
			if (isMap(v)) {
				if (has(v, "__mixin")) {
					cb$1(v, [...parent, k]);
					continue;
				}
				Mixin.walkValue(v, cb$1, [...parent, k]);
				continue;
			}
			cb$1(v, [...parent, k]);
		}
	};
	_values = {};
	constructor(dt) {
		Mixin.walkValue(dt.value, (v, p$1) => {
			const token$1 = /* @__PURE__ */ p$1.join(".");
			set(this._values, [token$1], /* @__PURE__ */ omit(v, "__mixin"));
		});
	}
	get tokens() {
		return keys(this._values);
	}
	get(token$1) {
		return this._values[token$1];
	}
};
var groups = {
	primary: ["primary"],
	secondary: ["secondary"],
	tertiary: ["tertiary"],
	error: ["error"],
	warning: ["warning"],
	success: ["success"],
	neutral: ["surface", "outline"]
};
const groupSysColors = (figmaTokensValues) => {
	const sysColors = /* @__PURE__ */ get(figmaTokensValues, ["color", "sys"], {});
	return {
		...figmaTokensValues,
		color: { sys: /* @__PURE__ */ mapValues(groups, (matches) => {
			return pickBy(sysColors, (_, token$1) => some(matches, (m) => token$1.indexOf(m) > -1));
		}) }
	};
};
const alpha = (a$1) => {
	return (cssVar) => `rgba(var(${cssVar}--rgb) / ${a$1})`;
};
const isVariant = (fn) => {
	return isFunction(fn) && has(fn, "token");
};
function variant(token$1, toVariant) {
	return Object.assign((cssVar) => {
		return toVariant(cssVar);
	}, {
		toString: () => token$1,
		token: token$1
	});
}
var toMap = (list) => list.reduce((ret, v) => {
	return Object.assign(ret, { [v]: true });
}, {});
var Theming = class Theming {
	static propsCanPercent = toMap([...DesignToken.boxSize({}).on]);
	static propsCanBaseDp = toMap([
		...DesignToken.boxSize({}).on,
		...DesignToken.space({}).on,
		...DesignToken.fontSize({}).on,
		...DesignToken.letterSpacing({}).on,
		...DesignToken.lineHeight({}).on,
		...DesignToken.rounded({}).on
	]);
	static create(theme, options) {
		return new Theming(theme, options);
	}
	mode;
	varPrefix;
	cssVars = {};
	tokens = {};
	propValues = {};
	mixins = {};
	dp = (v) => v === 0 ? 0 : `calc(${v} * var(${this.cssVar("space", "dp")}))`;
	transformFallback = (p$1, v) => {
		if (Theming.propsCanBaseDp[p$1] && isNumber(v)) {
			if (Theming.propsCanPercent[p$1] && Math.abs(v) < 1) return `${v * 100}%`;
			return this.dp(v);
		}
		return v;
	};
	constructor(theme, options = {}) {
		this.theme = theme;
		this.varPrefix = options.varPrefix ?? "vk";
		this.mode = options.mode ?? "light";
		set(this.cssVars, [/* @__PURE__ */ this.cssVar("space", "dp")], "0.1rem");
		for (const scale$1 in theme) {
			const dt = theme[scale$1];
			if (!dt) continue;
			if (dt.type === DesignTokenType.var) {
				const dtv = new TokenSet(dt, {
					cssVar: (token$1) => this.cssVar(scale$1, token$1),
					transformFallback: (v) => this.transformFallback(dt.on[0], v)
				});
				this.tokens[scale$1] = dtv;
				for (const prop of dt.on) this.propValues[prop] = dtv;
				for (const token$1 of dtv.tokens) for (const mode of ["light", "dark"]) {
					const modePseudo = mode === this.mode ? "_default" : `_${mode}`;
					const v = /* @__PURE__ */ dtv.get(token$1, modePseudo, true);
					if (!isUndefined(v)) if (modePseudo === "_default") set(this.cssVars, [/* @__PURE__ */ this.cssVar(scale$1, token$1)], v);
					else set(this.cssVars, [modePseudo, /* @__PURE__ */ this.cssVar(scale$1, token$1)], v);
				}
				continue;
			}
			if (dt.type === DesignTokenType.mixin) {
				const m = new Mixin(dt);
				for (const prop of dt.on) this.mixins[prop] = m;
			}
		}
	}
	cssVar(scale$1, key) {
		return `--${this.varPrefix}-${kebabCase(scale$1)}__${key.replaceAll("/", "--").replaceAll(".", "__")}`;
	}
	get rootCSSVars() {
		return this.cssVars;
	}
	token = new Proxy({}, { get: (_, prop) => {
		if (this.tokens[prop]) return Object.assign((token$1) => this.tokens[prop]?.get(token$1, `_${this.mode}`), { tokens: this.tokens[prop]?.tokens });
		if (this.mixins[prop]) return Object.assign((token$1) => this.mixins[prop]?.get(token$1), { tokens: this.mixins[prop]?.tokens });
	} });
	processValue = (p$1, v) => {
		if (isVariant(v)) {
			const cssVar = this.propValues[p$1]?.use(v.token, true);
			return cssVar ? v(cssVar) : void 0;
		}
		return this.propValues[p$1]?.use(v) ?? this.transformFallback(p$1, v);
	};
	unstable_sx = (sx) => {
		return new CSSProcessor({
			mixins: this.mixins,
			varPrefix: this.varPrefix,
			processValue: this.processValue
		}).processAll(sx);
	};
	unstable_css(cache, sx) {
		const inputs = sx ?? {};
		inputs.__emotion_styles = inputs.__emotion_styles ?? serializeStyles(/* @__PURE__ */ this.unstable_sx(sx), cache?.registered, {});
		return inputs.__emotion_styles;
	}
	toFigmaTokens() {
		const seedTokens = { space: { dp: {
			$type: "sizing",
			$value: 1
		} } };
		const baseTokens = {};
		const darkTokens = {};
		const toFigmaToken = (type, value) => {
			if (isObject(value)) return {
				$type: type,
				$value: /* @__PURE__ */ mapValues(value, (v) => {
					return toFigmaToken(type, v).$value;
				})
			};
			if (isString(value)) return {
				$type: type,
				$value: /* @__PURE__ */ value.replace(/var\(([^)]+)\)/g, (v) => {
					const keyPath = v.slice(4, v.length - 1).slice(`--${this.varPrefix}-`.length).split("--")[0]?.split("__").map((p$1, i) => i === 0 ? camelCase(p$1) : p$1).join(".") ?? "";
					if (!keyPath.startsWith("sys.")) return `{seed.${keyPath}}`;
					return `{${keyPath}}`;
				}).replace(/calc\(.+\)$/g, (v) => v.slice(5, v.length - 1))
			};
			return {
				$type: type,
				$value: value
			};
		};
		for (const topic in this.tokens) {
			const ts = this.tokens[topic];
			const collect = (type) => {
				for (const t of ts.tokens) {
					if (t.includes("/")) continue;
					if (t.startsWith("sys.")) {
						const defaultValue = /* @__PURE__ */ ts.get(t, "_default");
						const darkValue = /* @__PURE__ */ ts.get(t, "_dark");
						setTo(baseTokens, [topic, .../* @__PURE__ */ t.split(".")], /* @__PURE__ */ toFigmaToken(type, defaultValue));
						if (defaultValue !== darkValue) setTo(darkTokens, [topic, .../* @__PURE__ */ t.split(".")], /* @__PURE__ */ toFigmaToken(type, darkValue));
					} else setTo(seedTokens, [topic, .../* @__PURE__ */ t.split(".")], /* @__PURE__ */ toFigmaToken(type, /* @__PURE__ */ ts.get(t, "_default")));
				}
			};
			switch (topic) {
				case "color":
					collect("color");
					break;
				case "rounded":
					collect("borderRadius");
					break;
				case "shadow":
					collect("boxShadow");
					break;
				case "font":
					collect("fontFamily");
					break;
				case "fontWeight":
					collect("fontWeight");
					break;
			}
		}
		for (const topic in this.mixins) {
			const mixin = this.mixins[topic];
			if (!mixin) continue;
			const collect = (type) => {
				for (const t of mixin.tokens) {
					const v = /* @__PURE__ */ mixin.get(t);
					if (!v) continue;
					const value = this.unstable_sx(v)[0];
					setTo(baseTokens, [topic, .../* @__PURE__ */ t.split(".")], /* @__PURE__ */ toFigmaToken(type, value));
				}
			};
			switch (topic) {
				case "textStyle":
					collect("typography");
					break;
			}
		}
		return {
			seed: seedTokens,
			base: /* @__PURE__ */ groupSysColors(baseTokens),
			dark: /* @__PURE__ */ groupSysColors(darkTokens)
		};
	}
};
const elevation = {
	shadow: /* @__PURE__ */ DesignToken.shadow({
		"0": {
			_default: "0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px 0px rgba(0, 0, 0, 0)",
			_dark: "0px 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(0, 0, 0, 0)"
		},
		"1": {
			_default: "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)",
			_dark: "0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.3)"
		},
		"2": {
			_default: "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)",
			_dark: "0px 2px 6px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.3)"
		},
		"3": {
			_default: "0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)",
			_dark: "0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)"
		},
		"4": {
			_default: "0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.3)",
			_dark: "0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.3)"
		},
		"5": {
			_default: "0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.3)",
			_dark: "0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.3)"
		}
	}),
	elevation: /* @__PURE__ */ DesignToken.customMixin("elevation", {
		"0": /* @__PURE__ */ DesignToken.mixin({
			transitionDuration: "md4",
			transitionTimingFunction: "standard",
			shadow: "0",
			_hover: { shadow: "1" }
		}),
		"1": /* @__PURE__ */ DesignToken.mixin({
			transitionDuration: "md4",
			transitionTimingFunction: "standard",
			shadow: "1",
			_hover: { shadow: "2" }
		}),
		"2": /* @__PURE__ */ DesignToken.mixin({
			transitionDuration: "md4",
			transitionTimingFunction: "standard",
			shadow: "2",
			_hover: { shadow: "3" }
		}),
		"3": /* @__PURE__ */ DesignToken.mixin({
			transitionDuration: "md4",
			transitionTimingFunction: "standard",
			shadow: "3",
			_hover: { shadow: "4" }
		}),
		"4": /* @__PURE__ */ DesignToken.mixin({
			transitionDuration: "md4",
			transitionTimingFunction: "standard",
			shadow: "4",
			_hover: { shadow: "5" }
		})
	})
};
var cubicBezier$1 = (mX1, mY1, mX2, mY2) => {
	return Object.assign(/* @__PURE__ */ cubicBezier(mX1, mY1, mX2, mY2), { toString() {
		return `cubic-bezier(${mX1}, ${mY1}, ${mX2}, ${mY2})`;
	} });
};
const transition = {
	duration: {
		sm1: 50,
		sm2: 100,
		sm3: 150,
		sm4: 200,
		md1: 250,
		md2: 300,
		md3: 350,
		md4: 400,
		lg1: 450,
		lg2: 500,
		lg3: 550,
		lg4: 600,
		xl1: 700,
		xl2: 800,
		xl3: 900,
		xl4: 1e3
	},
	easing: {
		linear: /* @__PURE__ */ cubicBezier$1(0, 0, 1, 1),
		standard: /* @__PURE__ */ Object.assign(/* @__PURE__ */ cubicBezier$1(.2, 0, 0, 1), {
			accelerate: /* @__PURE__ */ cubicBezier$1(.3, 0, 1, 1),
			decelerate: /* @__PURE__ */ cubicBezier$1(0, 0, 0, 1)
		}),
		emphasized: /* @__PURE__ */ Object.assign(/* @__PURE__ */ cubicBezier$1(.2, 0, 0, 1), {
			accelerate: /* @__PURE__ */ cubicBezier$1(.3, 0, .8, .15),
			decelerate: /* @__PURE__ */ cubicBezier$1(.05, .7, .1, 1)
		}),
		legacy: /* @__PURE__ */ Object.assign(/* @__PURE__ */ cubicBezier$1(.4, 0, .2, 1), {
			decelerate: /* @__PURE__ */ cubicBezier$1(0, 0, .2, 1),
			accelerate: /* @__PURE__ */ cubicBezier$1(.4, 0, 1, 1)
		})
	}
};
const defineTransition = (enter, leave) => {
	const finalLeave = leave ?? {
		...enter,
		from: { ...enter.to },
		to: { ...enter.from }
	};
	return component({
		onComplete: /* @__PURE__ */ custom(),
		$default: /* @__PURE__ */ custom()
	}, (_, { slots, emit }) => {
		let animated;
		const onEnter = (e, done) => {
			animated = /* @__PURE__ */ animate({
				...enter,
				autoplay: true,
				onComplete: () => {
					done();
					emit("complete", "enter");
				},
				onUpdate: (style) => {
					Object.assign(e.style, style);
				}
			});
		};
		const onLeave = (e, done) => {
			animated = /* @__PURE__ */ animate({
				...finalLeave,
				autoplay: true,
				onComplete: () => {
					done();
					emit("complete", "leave");
				},
				onUpdate: (style) => {
					Object.assign(e.style, style);
				}
			});
		};
		const onCancelled = () => {
			animated?.stop();
		};
		return () => {
			return /* @__PURE__ */ jsx(Transition, {
				css: false,
				onEnter,
				onEnterCancelled: onCancelled,
				onLeave,
				onLeaveCancelled: onCancelled,
				children: slots.default?.()
			});
		};
	}, { name: "Transition" });
};
const motion = {
	transitionDuration: /* @__PURE__ */ DesignToken.transitionDuration(transition.duration),
	transitionTimingFunction: /* @__PURE__ */ DesignToken.transitionTimingFunction({
		linear: /* @__PURE__ */ transition.easing.linear.toString(),
		standard: /* @__PURE__ */ transition.easing.standard.toString(),
		"standard-accelerate": /* @__PURE__ */ transition.easing.standard.accelerate.toString(),
		"standard-decelerate": /* @__PURE__ */ transition.easing.standard.decelerate.toString(),
		emphasized: /* @__PURE__ */ transition.easing.emphasized.toString(),
		"emphasized-decelerate": /* @__PURE__ */ transition.easing.emphasized.decelerate.toString(),
		"emphasized-accelerate": /* @__PURE__ */ transition.easing.emphasized.accelerate.toString(),
		legacy: /* @__PURE__ */ transition.easing.legacy.toString(),
		"legacy-decelerate": /* @__PURE__ */ transition.easing.legacy.decelerate.toString(),
		"legacy-accelerate": /* @__PURE__ */ transition.easing.legacy.accelerate.toString()
	})
};
/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ function signum(num) {
	if (num < 0) return -1;
	else if (num === 0) return 0;
	else return 1;
}
function lerp(start, stop, amount) {
	return (1 - amount) * start + amount * stop;
}
function clampInt(min$1, max$1, input) {
	if (input < min$1) return min$1;
	else if (input > max$1) return max$1;
	return input;
}
function clampDouble(min$1, max$1, input) {
	if (input < min$1) return min$1;
	else if (input > max$1) return max$1;
	return input;
}
function sanitizeDegreesInt(degrees$1) {
	degrees$1 = degrees$1 % 360;
	if (degrees$1 < 0) degrees$1 = degrees$1 + 360;
	return degrees$1;
}
function sanitizeDegreesDouble(degrees$1) {
	degrees$1 = degrees$1 % 360;
	if (degrees$1 < 0) degrees$1 = degrees$1 + 360;
	return degrees$1;
}
function differenceDegrees(a$1, b$1) {
	return 180 - Math.abs(Math.abs(a$1 - b$1) - 180);
}
function matrixMultiply(row, matrix) {
	return [
		row[0] * matrix[0][0] + row[1] * matrix[0][1] + row[2] * matrix[0][2],
		row[0] * matrix[1][0] + row[1] * matrix[1][1] + row[2] * matrix[1][2],
		row[0] * matrix[2][0] + row[1] * matrix[2][1] + row[2] * matrix[2][2]
	];
}
var SRGB_TO_XYZ = [
	[
		.41233895,
		.35762064,
		.18051042
	],
	[
		.2126,
		.7152,
		.0722
	],
	[
		.01932141,
		.11916382,
		.95034478
	]
];
var XYZ_TO_SRGB = [
	[
		3.2413774792388685,
		-1.5376652402851851,
		-.49885366846268053
	],
	[
		-.9691452513005321,
		1.8758853451067872,
		.04156585616912061
	],
	[
		.05562093689691305,
		-.20395524564742123,
		1.0571799111220335
	]
];
var WHITE_POINT_D65 = [
	95.047,
	100,
	108.883
];
function argbFromRgb(red, green, blue) {
	return (255 << 24 | (red & 255) << 16 | (green & 255) << 8 | blue & 255) >>> 0;
}
function argbFromLinrgb(linrgb) {
	return argbFromRgb(/* @__PURE__ */ delinearized(linrgb[0]), /* @__PURE__ */ delinearized(linrgb[1]), /* @__PURE__ */ delinearized(linrgb[2]));
}
function alphaFromArgb(argb) {
	return argb >> 24 & 255;
}
function redFromArgb(argb) {
	return argb >> 16 & 255;
}
function greenFromArgb(argb) {
	return argb >> 8 & 255;
}
function blueFromArgb(argb) {
	return argb & 255;
}
function argbFromXyz(x, y, z) {
	const matrix = XYZ_TO_SRGB;
	const linearR = matrix[0][0] * x + matrix[0][1] * y + matrix[0][2] * z;
	const linearG = matrix[1][0] * x + matrix[1][1] * y + matrix[1][2] * z;
	const linearB = matrix[2][0] * x + matrix[2][1] * y + matrix[2][2] * z;
	return argbFromRgb(/* @__PURE__ */ delinearized(linearR), /* @__PURE__ */ delinearized(linearG), /* @__PURE__ */ delinearized(linearB));
}
function xyzFromArgb(argb) {
	return matrixMultiply([
		/* @__PURE__ */ linearized(/* @__PURE__ */ redFromArgb(argb)),
		/* @__PURE__ */ linearized(/* @__PURE__ */ greenFromArgb(argb)),
		/* @__PURE__ */ linearized(/* @__PURE__ */ blueFromArgb(argb))
	], SRGB_TO_XYZ);
}
function argbFromLstar(lstar) {
	const component$1 = /* @__PURE__ */ delinearized(/* @__PURE__ */ yFromLstar(lstar));
	return argbFromRgb(component$1, component$1, component$1);
}
function lstarFromArgb(argb) {
	const y = xyzFromArgb(argb)[1];
	return 116 * labF(y / 100) - 16;
}
function yFromLstar(lstar) {
	return 100 * labInvf((lstar + 16) / 116);
}
function lstarFromY(y) {
	return labF(y / 100) * 116 - 16;
}
function linearized(rgbComponent) {
	const normalized = rgbComponent / 255;
	if (normalized <= .040449936) return normalized / 12.92 * 100;
	else return Math.pow((normalized + .055) / 1.055, 2.4) * 100;
}
function delinearized(rgbComponent) {
	const normalized = rgbComponent / 100;
	let delinearized$1 = 0;
	if (normalized <= .0031308) delinearized$1 = normalized * 12.92;
	else delinearized$1 = 1.055 * Math.pow(normalized, 1 / 2.4) - .055;
	return clampInt(0, 255, /* @__PURE__ */ Math.round(delinearized$1 * 255));
}
function whitePointD65() {
	return WHITE_POINT_D65;
}
function rgbaFromArgb(argb) {
	return {
		r: /* @__PURE__ */ redFromArgb(argb),
		g: /* @__PURE__ */ greenFromArgb(argb),
		b: /* @__PURE__ */ blueFromArgb(argb),
		a: /* @__PURE__ */ alphaFromArgb(argb)
	};
}
function labF(t) {
	const e = 216 / 24389;
	const kappa = 24389 / 27;
	if (t > e) return Math.pow(t, 1 / 3);
	else return (kappa * t + 16) / 116;
}
function labInvf(ft) {
	const e = 216 / 24389;
	const kappa = 24389 / 27;
	const ft3 = ft * ft * ft;
	if (ft3 > e) return ft3;
	else return (116 * ft - 16) / kappa;
}
var ViewingConditions = class ViewingConditions {
	static make(whitePoint = whitePointD65(), adaptingLuminance = 200 / Math.PI * yFromLstar(50) / 100, backgroundLstar = 50, surround = 2, discountingIlluminant = false) {
		const xyz = whitePoint;
		const rW = xyz[0] * .401288 + xyz[1] * .650173 + xyz[2] * -.051461;
		const gW = xyz[0] * -.250268 + xyz[1] * 1.204414 + xyz[2] * .045854;
		const bW = xyz[0] * -.002079 + xyz[1] * .048952 + xyz[2] * .953127;
		const f = .8 + surround / 10;
		const c$1 = f >= .9 ? lerp(.59, .69, (f - .9) * 10) : lerp(.525, .59, (f - .8) * 10);
		let d = discountingIlluminant ? 1 : f * (1 - 1 / 3.6 * Math.exp((-adaptingLuminance - 42) / 92));
		d = d > 1 ? 1 : d < 0 ? 0 : d;
		const nc = f;
		const rgbD = [
			d * (100 / rW) + 1 - d,
			d * (100 / gW) + 1 - d,
			d * (100 / bW) + 1 - d
		];
		const k = 1 / (5 * adaptingLuminance + 1);
		const k4 = k * k * k * k;
		const k4F = 1 - k4;
		const fl = k4 * adaptingLuminance + .1 * k4F * k4F * Math.cbrt(5 * adaptingLuminance);
		const n = yFromLstar(backgroundLstar) / whitePoint[1];
		const z = 1.48 + Math.sqrt(n);
		const nbb = .725 / Math.pow(n, .2);
		const ncb = nbb;
		const rgbAFactors = [
			/* @__PURE__ */ Math.pow(fl * rgbD[0] * rW / 100, .42),
			/* @__PURE__ */ Math.pow(fl * rgbD[1] * gW / 100, .42),
			/* @__PURE__ */ Math.pow(fl * rgbD[2] * bW / 100, .42)
		];
		const rgbA = [
			400 * rgbAFactors[0] / (rgbAFactors[0] + 27.13),
			400 * rgbAFactors[1] / (rgbAFactors[1] + 27.13),
			400 * rgbAFactors[2] / (rgbAFactors[2] + 27.13)
		];
		return new ViewingConditions(n, (2 * rgbA[0] + rgbA[1] + .05 * rgbA[2]) * nbb, nbb, ncb, c$1, nc, rgbD, fl, Math.pow(fl, .25), z);
	}
	constructor(n, aw, nbb, ncb, c$1, nc, rgbD, fl, fLRoot, z) {
		this.n = n;
		this.aw = aw;
		this.nbb = nbb;
		this.ncb = ncb;
		this.c = c$1;
		this.nc = nc;
		this.rgbD = rgbD;
		this.fl = fl;
		this.fLRoot = fLRoot;
		this.z = z;
	}
};
ViewingConditions.DEFAULT = /* @__PURE__ */ ViewingConditions.make();
var Cam16 = class Cam16 {
	constructor(hue, chroma, j, q, m, s, jstar, astar, bstar) {
		this.hue = hue;
		this.chroma = chroma;
		this.j = j;
		this.q = q;
		this.m = m;
		this.s = s;
		this.jstar = jstar;
		this.astar = astar;
		this.bstar = bstar;
	}
	distance(other) {
		const dJ = this.jstar - other.jstar;
		const dA = this.astar - other.astar;
		const dB = this.bstar - other.bstar;
		const dEPrime = /* @__PURE__ */ Math.sqrt(dJ * dJ + dA * dA + dB * dB);
		return 1.41 * Math.pow(dEPrime, .63);
	}
	static fromInt(argb) {
		return Cam16.fromIntInViewingConditions(argb, ViewingConditions.DEFAULT);
	}
	static fromIntInViewingConditions(argb, viewingConditions) {
		const red = (argb & 16711680) >> 16;
		const green = (argb & 65280) >> 8;
		const blue = argb & 255;
		const redL = /* @__PURE__ */ linearized(red);
		const greenL = /* @__PURE__ */ linearized(green);
		const blueL = /* @__PURE__ */ linearized(blue);
		const x = .41233895 * redL + .35762064 * greenL + .18051042 * blueL;
		const y = .2126 * redL + .7152 * greenL + .0722 * blueL;
		const z = .01932141 * redL + .11916382 * greenL + .95034478 * blueL;
		const rC = .401288 * x + .650173 * y - .051461 * z;
		const gC = -.250268 * x + 1.204414 * y + .045854 * z;
		const bC = -.002079 * x + .048952 * y + .953127 * z;
		const rD = viewingConditions.rgbD[0] * rC;
		const gD = viewingConditions.rgbD[1] * gC;
		const bD = viewingConditions.rgbD[2] * bC;
		const rAF = /* @__PURE__ */ Math.pow(viewingConditions.fl * Math.abs(rD) / 100, .42);
		const gAF = /* @__PURE__ */ Math.pow(viewingConditions.fl * Math.abs(gD) / 100, .42);
		const bAF = /* @__PURE__ */ Math.pow(viewingConditions.fl * Math.abs(bD) / 100, .42);
		const rA = signum(rD) * 400 * rAF / (rAF + 27.13);
		const gA = signum(gD) * 400 * gAF / (gAF + 27.13);
		const bA = signum(bD) * 400 * bAF / (bAF + 27.13);
		const a$1 = (11 * rA + -12 * gA + bA) / 11;
		const b$1 = (rA + gA - 2 * bA) / 9;
		const u = (20 * rA + 20 * gA + 21 * bA) / 20;
		const p2 = (40 * rA + 20 * gA + bA) / 20;
		const atanDegrees = Math.atan2(b$1, a$1) * 180 / Math.PI;
		const hue = atanDegrees < 0 ? atanDegrees + 360 : atanDegrees >= 360 ? atanDegrees - 360 : atanDegrees;
		const hueRadians = hue * Math.PI / 180;
		const ac = p2 * viewingConditions.nbb;
		const j = 100 * Math.pow(ac / viewingConditions.aw, viewingConditions.c * viewingConditions.z);
		const q = 4 / viewingConditions.c * Math.sqrt(j / 100) * (viewingConditions.aw + 4) * viewingConditions.fLRoot;
		const huePrime = hue < 20.14 ? hue + 360 : hue;
		const t = 5e4 / 13 * (.25 * (Math.cos(huePrime * Math.PI / 180 + 2) + 3.8)) * viewingConditions.nc * viewingConditions.ncb * Math.sqrt(a$1 * a$1 + b$1 * b$1) / (u + .305);
		const alpha$2 = Math.pow(t, .9) * Math.pow(1.64 - Math.pow(.29, viewingConditions.n), .73);
		const c$1 = alpha$2 * Math.sqrt(j / 100);
		const m = c$1 * viewingConditions.fLRoot;
		const s = 50 * Math.sqrt(alpha$2 * viewingConditions.c / (viewingConditions.aw + 4));
		const jstar = 1.7000000000000002 * j / (1 + .007 * j);
		const mstar = 1 / .0228 * Math.log(1 + .0228 * m);
		return new Cam16(hue, c$1, j, q, m, s, jstar, mstar * Math.cos(hueRadians), mstar * Math.sin(hueRadians));
	}
	static fromJch(j, c$1, h$1) {
		return Cam16.fromJchInViewingConditions(j, c$1, h$1, ViewingConditions.DEFAULT);
	}
	static fromJchInViewingConditions(j, c$1, h$1, viewingConditions) {
		const q = 4 / viewingConditions.c * Math.sqrt(j / 100) * (viewingConditions.aw + 4) * viewingConditions.fLRoot;
		const m = c$1 * viewingConditions.fLRoot;
		const alpha$2 = c$1 / Math.sqrt(j / 100);
		const s = 50 * Math.sqrt(alpha$2 * viewingConditions.c / (viewingConditions.aw + 4));
		const hueRadians = h$1 * Math.PI / 180;
		const jstar = 1.7000000000000002 * j / (1 + .007 * j);
		const mstar = 1 / .0228 * Math.log(1 + .0228 * m);
		return new Cam16(h$1, c$1, j, q, m, s, jstar, mstar * Math.cos(hueRadians), mstar * Math.sin(hueRadians));
	}
	static fromUcs(jstar, astar, bstar) {
		return Cam16.fromUcsInViewingConditions(jstar, astar, bstar, ViewingConditions.DEFAULT);
	}
	static fromUcsInViewingConditions(jstar, astar, bstar, viewingConditions) {
		const a$1 = astar;
		const b$1 = bstar;
		const m = /* @__PURE__ */ Math.sqrt(a$1 * a$1 + b$1 * b$1);
		const c$1 = (Math.exp(m * .0228) - 1) / .0228 / viewingConditions.fLRoot;
		let h$1 = Math.atan2(b$1, a$1) * (180 / Math.PI);
		if (h$1 < 0) h$1 += 360;
		const j = jstar / (1 - (jstar - 100) * .007);
		return Cam16.fromJchInViewingConditions(j, c$1, h$1, viewingConditions);
	}
	toInt() {
		return this.viewed(ViewingConditions.DEFAULT);
	}
	viewed(viewingConditions) {
		const alpha$2 = this.chroma === 0 || this.j === 0 ? 0 : this.chroma / Math.sqrt(this.j / 100);
		const t = /* @__PURE__ */ Math.pow(alpha$2 / Math.pow(1.64 - Math.pow(.29, viewingConditions.n), .73), 1 / .9);
		const hRad = this.hue * Math.PI / 180;
		const eHue = .25 * (Math.cos(hRad + 2) + 3.8);
		const ac = viewingConditions.aw * Math.pow(this.j / 100, 1 / viewingConditions.c / viewingConditions.z);
		const p1 = eHue * (5e4 / 13) * viewingConditions.nc * viewingConditions.ncb;
		const p2 = ac / viewingConditions.nbb;
		const hSin = /* @__PURE__ */ Math.sin(hRad);
		const hCos = /* @__PURE__ */ Math.cos(hRad);
		const gamma = 23 * (p2 + .305) * t / (23 * p1 + 11 * t * hCos + 108 * t * hSin);
		const a$1 = gamma * hCos;
		const b$1 = gamma * hSin;
		const rA = (460 * p2 + 451 * a$1 + 288 * b$1) / 1403;
		const gA = (460 * p2 - 891 * a$1 - 261 * b$1) / 1403;
		const bA = (460 * p2 - 220 * a$1 - 6300 * b$1) / 1403;
		const rCBase = /* @__PURE__ */ Math.max(0, 27.13 * Math.abs(rA) / (400 - Math.abs(rA)));
		const rC = signum(rA) * (100 / viewingConditions.fl) * Math.pow(rCBase, 1 / .42);
		const gCBase = /* @__PURE__ */ Math.max(0, 27.13 * Math.abs(gA) / (400 - Math.abs(gA)));
		const gC = signum(gA) * (100 / viewingConditions.fl) * Math.pow(gCBase, 1 / .42);
		const bCBase = /* @__PURE__ */ Math.max(0, 27.13 * Math.abs(bA) / (400 - Math.abs(bA)));
		const bC = signum(bA) * (100 / viewingConditions.fl) * Math.pow(bCBase, 1 / .42);
		const rF = rC / viewingConditions.rgbD[0];
		const gF = gC / viewingConditions.rgbD[1];
		const bF = bC / viewingConditions.rgbD[2];
		return argbFromXyz(1.86206786 * rF - 1.01125463 * gF + .14918677 * bF, .38752654 * rF + .62144744 * gF - .00897398 * bF, -.0158415 * rF - .03412294 * gF + 1.04996444 * bF);
	}
	static fromXyzInViewingConditions(x, y, z, viewingConditions) {
		const rC = .401288 * x + .650173 * y - .051461 * z;
		const gC = -.250268 * x + 1.204414 * y + .045854 * z;
		const bC = -.002079 * x + .048952 * y + .953127 * z;
		const rD = viewingConditions.rgbD[0] * rC;
		const gD = viewingConditions.rgbD[1] * gC;
		const bD = viewingConditions.rgbD[2] * bC;
		const rAF = /* @__PURE__ */ Math.pow(viewingConditions.fl * Math.abs(rD) / 100, .42);
		const gAF = /* @__PURE__ */ Math.pow(viewingConditions.fl * Math.abs(gD) / 100, .42);
		const bAF = /* @__PURE__ */ Math.pow(viewingConditions.fl * Math.abs(bD) / 100, .42);
		const rA = signum(rD) * 400 * rAF / (rAF + 27.13);
		const gA = signum(gD) * 400 * gAF / (gAF + 27.13);
		const bA = signum(bD) * 400 * bAF / (bAF + 27.13);
		const a$1 = (11 * rA + -12 * gA + bA) / 11;
		const b$1 = (rA + gA - 2 * bA) / 9;
		const u = (20 * rA + 20 * gA + 21 * bA) / 20;
		const p2 = (40 * rA + 20 * gA + bA) / 20;
		const atanDegrees = Math.atan2(b$1, a$1) * 180 / Math.PI;
		const hue = atanDegrees < 0 ? atanDegrees + 360 : atanDegrees >= 360 ? atanDegrees - 360 : atanDegrees;
		const hueRadians = hue * Math.PI / 180;
		const ac = p2 * viewingConditions.nbb;
		const J = 100 * Math.pow(ac / viewingConditions.aw, viewingConditions.c * viewingConditions.z);
		const Q = 4 / viewingConditions.c * Math.sqrt(J / 100) * (viewingConditions.aw + 4) * viewingConditions.fLRoot;
		const huePrime = hue < 20.14 ? hue + 360 : hue;
		const t = 5e4 / 13 * (1 / 4 * (Math.cos(huePrime * Math.PI / 180 + 2) + 3.8)) * viewingConditions.nc * viewingConditions.ncb * Math.sqrt(a$1 * a$1 + b$1 * b$1) / (u + .305);
		const alpha$2 = Math.pow(t, .9) * Math.pow(1.64 - Math.pow(.29, viewingConditions.n), .73);
		const C = alpha$2 * Math.sqrt(J / 100);
		const M = C * viewingConditions.fLRoot;
		const s = 50 * Math.sqrt(alpha$2 * viewingConditions.c / (viewingConditions.aw + 4));
		const jstar = 1.7000000000000002 * J / (1 + .007 * J);
		const mstar = Math.log(1 + .0228 * M) / .0228;
		return new Cam16(hue, C, J, Q, M, s, jstar, mstar * Math.cos(hueRadians), mstar * Math.sin(hueRadians));
	}
	xyzInViewingConditions(viewingConditions) {
		const alpha$2 = this.chroma === 0 || this.j === 0 ? 0 : this.chroma / Math.sqrt(this.j / 100);
		const t = /* @__PURE__ */ Math.pow(alpha$2 / Math.pow(1.64 - Math.pow(.29, viewingConditions.n), .73), 1 / .9);
		const hRad = this.hue * Math.PI / 180;
		const eHue = .25 * (Math.cos(hRad + 2) + 3.8);
		const ac = viewingConditions.aw * Math.pow(this.j / 100, 1 / viewingConditions.c / viewingConditions.z);
		const p1 = eHue * (5e4 / 13) * viewingConditions.nc * viewingConditions.ncb;
		const p2 = ac / viewingConditions.nbb;
		const hSin = /* @__PURE__ */ Math.sin(hRad);
		const hCos = /* @__PURE__ */ Math.cos(hRad);
		const gamma = 23 * (p2 + .305) * t / (23 * p1 + 11 * t * hCos + 108 * t * hSin);
		const a$1 = gamma * hCos;
		const b$1 = gamma * hSin;
		const rA = (460 * p2 + 451 * a$1 + 288 * b$1) / 1403;
		const gA = (460 * p2 - 891 * a$1 - 261 * b$1) / 1403;
		const bA = (460 * p2 - 220 * a$1 - 6300 * b$1) / 1403;
		const rCBase = /* @__PURE__ */ Math.max(0, 27.13 * Math.abs(rA) / (400 - Math.abs(rA)));
		const rC = signum(rA) * (100 / viewingConditions.fl) * Math.pow(rCBase, 1 / .42);
		const gCBase = /* @__PURE__ */ Math.max(0, 27.13 * Math.abs(gA) / (400 - Math.abs(gA)));
		const gC = signum(gA) * (100 / viewingConditions.fl) * Math.pow(gCBase, 1 / .42);
		const bCBase = /* @__PURE__ */ Math.max(0, 27.13 * Math.abs(bA) / (400 - Math.abs(bA)));
		const bC = signum(bA) * (100 / viewingConditions.fl) * Math.pow(bCBase, 1 / .42);
		const rF = rC / viewingConditions.rgbD[0];
		const gF = gC / viewingConditions.rgbD[1];
		const bF = bC / viewingConditions.rgbD[2];
		return [
			1.86206786 * rF - 1.01125463 * gF + .14918677 * bF,
			.38752654 * rF + .62144744 * gF - .00897398 * bF,
			-.0158415 * rF - .03412294 * gF + 1.04996444 * bF
		];
	}
};
var HctSolver = class HctSolver {
	static sanitizeRadians(angle) {
		return (angle + Math.PI * 8) % (Math.PI * 2);
	}
	static trueDelinearized(rgbComponent) {
		const normalized = rgbComponent / 100;
		let delinearized$1 = 0;
		if (normalized <= .0031308) delinearized$1 = normalized * 12.92;
		else delinearized$1 = 1.055 * Math.pow(normalized, 1 / 2.4) - .055;
		return delinearized$1 * 255;
	}
	static chromaticAdaptation(component$1) {
		const af = /* @__PURE__ */ Math.pow(/* @__PURE__ */ Math.abs(component$1), .42);
		return signum(component$1) * 400 * af / (af + 27.13);
	}
	static hueOf(linrgb) {
		const scaledDiscount = /* @__PURE__ */ matrixMultiply(linrgb, HctSolver.SCALED_DISCOUNT_FROM_LINRGB);
		const rA = /* @__PURE__ */ HctSolver.chromaticAdaptation(scaledDiscount[0]);
		const gA = /* @__PURE__ */ HctSolver.chromaticAdaptation(scaledDiscount[1]);
		const bA = /* @__PURE__ */ HctSolver.chromaticAdaptation(scaledDiscount[2]);
		const a$1 = (11 * rA + -12 * gA + bA) / 11;
		const b$1 = (rA + gA - 2 * bA) / 9;
		return Math.atan2(b$1, a$1);
	}
	static areInCyclicOrder(a$1, b$1, c$1) {
		return HctSolver.sanitizeRadians(b$1 - a$1) < HctSolver.sanitizeRadians(c$1 - a$1);
	}
	static intercept(source, mid, target) {
		return (mid - source) / (target - source);
	}
	static lerpPoint(source, t, target) {
		return [
			source[0] + (target[0] - source[0]) * t,
			source[1] + (target[1] - source[1]) * t,
			source[2] + (target[2] - source[2]) * t
		];
	}
	static setCoordinate(source, coordinate, target, axis) {
		const t = /* @__PURE__ */ HctSolver.intercept(source[axis], coordinate, target[axis]);
		return HctSolver.lerpPoint(source, t, target);
	}
	static isBounded(x) {
		return 0 <= x && x <= 100;
	}
	static nthVertex(y, n) {
		const kR = HctSolver.Y_FROM_LINRGB[0];
		const kG = HctSolver.Y_FROM_LINRGB[1];
		const kB = HctSolver.Y_FROM_LINRGB[2];
		const coordA = n % 4 <= 1 ? 0 : 100;
		const coordB = n % 2 === 0 ? 0 : 100;
		if (n < 4) {
			const g = coordA;
			const b$1 = coordB;
			const r = (y - g * kG - b$1 * kB) / kR;
			if (HctSolver.isBounded(r)) return [
				r,
				g,
				b$1
			];
			else return [
				-1,
				-1,
				-1
			];
		} else if (n < 8) {
			const b$1 = coordA;
			const r = coordB;
			const g = (y - r * kR - b$1 * kB) / kG;
			if (HctSolver.isBounded(g)) return [
				r,
				g,
				b$1
			];
			else return [
				-1,
				-1,
				-1
			];
		} else {
			const r = coordA;
			const g = coordB;
			const b$1 = (y - r * kR - g * kG) / kB;
			if (HctSolver.isBounded(b$1)) return [
				r,
				g,
				b$1
			];
			else return [
				-1,
				-1,
				-1
			];
		}
	}
	static bisectToSegment(y, targetHue) {
		let left = [
			-1,
			-1,
			-1
		];
		let right = left;
		let leftHue = 0;
		let rightHue = 0;
		let initialized = false;
		let uncut = true;
		for (let n = 0; n < 12; n++) {
			const mid = /* @__PURE__ */ HctSolver.nthVertex(y, n);
			if (mid[0] < 0) continue;
			const midHue = /* @__PURE__ */ HctSolver.hueOf(mid);
			if (!initialized) {
				left = mid;
				right = mid;
				leftHue = midHue;
				rightHue = midHue;
				initialized = true;
				continue;
			}
			if (uncut || HctSolver.areInCyclicOrder(leftHue, midHue, rightHue)) {
				uncut = false;
				if (HctSolver.areInCyclicOrder(leftHue, targetHue, midHue)) {
					right = mid;
					rightHue = midHue;
				} else {
					left = mid;
					leftHue = midHue;
				}
			}
		}
		return [left, right];
	}
	static midpoint(a$1, b$1) {
		return [
			(a$1[0] + b$1[0]) / 2,
			(a$1[1] + b$1[1]) / 2,
			(a$1[2] + b$1[2]) / 2
		];
	}
	static criticalPlaneBelow(x) {
		return Math.floor(x - .5);
	}
	static criticalPlaneAbove(x) {
		return Math.ceil(x - .5);
	}
	static bisectToLimit(y, targetHue) {
		const segment = /* @__PURE__ */ HctSolver.bisectToSegment(y, targetHue);
		let left = segment[0];
		let leftHue = /* @__PURE__ */ HctSolver.hueOf(left);
		let right = segment[1];
		for (let axis = 0; axis < 3; axis++) if (left[axis] !== right[axis]) {
			let lPlane = -1;
			let rPlane = 255;
			if (left[axis] < right[axis]) {
				lPlane = /* @__PURE__ */ HctSolver.criticalPlaneBelow(/* @__PURE__ */ HctSolver.trueDelinearized(left[axis]));
				rPlane = /* @__PURE__ */ HctSolver.criticalPlaneAbove(/* @__PURE__ */ HctSolver.trueDelinearized(right[axis]));
			} else {
				lPlane = /* @__PURE__ */ HctSolver.criticalPlaneAbove(/* @__PURE__ */ HctSolver.trueDelinearized(left[axis]));
				rPlane = /* @__PURE__ */ HctSolver.criticalPlaneBelow(/* @__PURE__ */ HctSolver.trueDelinearized(right[axis]));
			}
			for (let i = 0; i < 8; i++) if (Math.abs(rPlane - lPlane) <= 1) break;
			else {
				const mPlane = /* @__PURE__ */ Math.floor((lPlane + rPlane) / 2);
				const midPlaneCoordinate = HctSolver.CRITICAL_PLANES[mPlane];
				const mid = /* @__PURE__ */ HctSolver.setCoordinate(left, midPlaneCoordinate, right, axis);
				const midHue = /* @__PURE__ */ HctSolver.hueOf(mid);
				if (HctSolver.areInCyclicOrder(leftHue, targetHue, midHue)) {
					right = mid;
					rPlane = mPlane;
				} else {
					left = mid;
					leftHue = midHue;
					lPlane = mPlane;
				}
			}
		}
		return HctSolver.midpoint(left, right);
	}
	static inverseChromaticAdaptation(adapted) {
		const adaptedAbs = /* @__PURE__ */ Math.abs(adapted);
		const base = /* @__PURE__ */ Math.max(0, 27.13 * adaptedAbs / (400 - adaptedAbs));
		return signum(adapted) * Math.pow(base, 1 / .42);
	}
	static findResultByJ(hueRadians, chroma, y) {
		let j = Math.sqrt(y) * 11;
		const viewingConditions = ViewingConditions.DEFAULT;
		const tInnerCoeff = 1 / Math.pow(1.64 - Math.pow(.29, viewingConditions.n), .73);
		const p1 = .25 * (Math.cos(hueRadians + 2) + 3.8) * (5e4 / 13) * viewingConditions.nc * viewingConditions.ncb;
		const hSin = /* @__PURE__ */ Math.sin(hueRadians);
		const hCos = /* @__PURE__ */ Math.cos(hueRadians);
		for (let iterationRound = 0; iterationRound < 5; iterationRound++) {
			const jNormalized = j / 100;
			const alpha$2 = chroma === 0 || j === 0 ? 0 : chroma / Math.sqrt(jNormalized);
			const t = /* @__PURE__ */ Math.pow(alpha$2 * tInnerCoeff, 1 / .9);
			const p2 = viewingConditions.aw * Math.pow(jNormalized, 1 / viewingConditions.c / viewingConditions.z) / viewingConditions.nbb;
			const gamma = 23 * (p2 + .305) * t / (23 * p1 + 11 * t * hCos + 108 * t * hSin);
			const a$1 = gamma * hCos;
			const b$1 = gamma * hSin;
			const rA = (460 * p2 + 451 * a$1 + 288 * b$1) / 1403;
			const gA = (460 * p2 - 891 * a$1 - 261 * b$1) / 1403;
			const bA = (460 * p2 - 220 * a$1 - 6300 * b$1) / 1403;
			const linrgb = /* @__PURE__ */ matrixMultiply([
				/* @__PURE__ */ HctSolver.inverseChromaticAdaptation(rA),
				/* @__PURE__ */ HctSolver.inverseChromaticAdaptation(gA),
				/* @__PURE__ */ HctSolver.inverseChromaticAdaptation(bA)
			], HctSolver.LINRGB_FROM_SCALED_DISCOUNT);
			if (linrgb[0] < 0 || linrgb[1] < 0 || linrgb[2] < 0) return 0;
			const kR = HctSolver.Y_FROM_LINRGB[0];
			const kG = HctSolver.Y_FROM_LINRGB[1];
			const kB = HctSolver.Y_FROM_LINRGB[2];
			const fnj = kR * linrgb[0] + kG * linrgb[1] + kB * linrgb[2];
			if (fnj <= 0) return 0;
			if (iterationRound === 4 || Math.abs(fnj - y) < .002) {
				if (linrgb[0] > 100.01 || linrgb[1] > 100.01 || linrgb[2] > 100.01) return 0;
				return argbFromLinrgb(linrgb);
			}
			j = j - (fnj - y) * j / (2 * fnj);
		}
		return 0;
	}
	static solveToInt(hueDegrees, chroma, lstar) {
		if (chroma < 1e-4 || lstar < 1e-4 || lstar > 99.9999) return argbFromLstar(lstar);
		hueDegrees = /* @__PURE__ */ sanitizeDegreesDouble(hueDegrees);
		const hueRadians = hueDegrees / 180 * Math.PI;
		const y = /* @__PURE__ */ yFromLstar(lstar);
		const exactAnswer = /* @__PURE__ */ HctSolver.findResultByJ(hueRadians, chroma, y);
		if (exactAnswer !== 0) return exactAnswer;
		return argbFromLinrgb(/* @__PURE__ */ HctSolver.bisectToLimit(y, hueRadians));
	}
	static solveToCam(hueDegrees, chroma, lstar) {
		return Cam16.fromInt(/* @__PURE__ */ HctSolver.solveToInt(hueDegrees, chroma, lstar));
	}
};
HctSolver.SCALED_DISCOUNT_FROM_LINRGB = [
	[
		.001200833568784504,
		.002389694492170889,
		.0002795742885861124
	],
	[
		.0005891086651375999,
		.0029785502573438758,
		.0003270666104008398
	],
	[
		.00010146692491640572,
		.0005364214359186694,
		.0032979401770712076
	]
];
HctSolver.LINRGB_FROM_SCALED_DISCOUNT = [
	[
		1373.2198709594231,
		-1100.4251190754821,
		-7.278681089101213
	],
	[
		-271.815969077903,
		559.6580465940733,
		-32.46047482791194
	],
	[
		1.9622899599665666,
		-57.173814538844006,
		308.7233197812385
	]
];
HctSolver.Y_FROM_LINRGB = [
	.2126,
	.7152,
	.0722
];
HctSolver.CRITICAL_PLANES = [
	.015176349177441876,
	.045529047532325624,
	.07588174588720938,
	.10623444424209313,
	.13658714259697685,
	.16693984095186062,
	.19729253930674434,
	.2276452376616281,
	.2579979360165119,
	.28835063437139563,
	.3188300904430532,
	.350925934958123,
	.3848314933096426,
	.42057480301049466,
	.458183274052838,
	.4976837250274023,
	.5391024159806381,
	.5824650784040898,
	.6277969426914107,
	.6751227633498623,
	.7244668422128921,
	.775853049866786,
	.829304845476233,
	.8848452951698498,
	.942497089126609,
	1.0022825574869039,
	1.0642236851973577,
	1.1283421258858297,
	1.1946592148522128,
	1.2631959812511864,
	1.3339731595349034,
	1.407011200216447,
	1.4823302800086415,
	1.5599503113873272,
	1.6398909516233677,
	1.7221716113234105,
	1.8068114625156377,
	1.8938294463134073,
	1.9832442801866852,
	2.075074464868551,
	2.1693382909216234,
	2.2660538449872063,
	2.36523901573795,
	2.4669114995532007,
	2.5710888059345764,
	2.6777882626779785,
	2.7870270208169257,
	2.898822059350997,
	3.0131901897720907,
	3.1301480604002863,
	3.2497121605402226,
	3.3718988244681087,
	3.4967242352587946,
	3.624204428461639,
	3.754355295633311,
	3.887192587735158,
	4.022731918402185,
	4.160988767090289,
	4.301978482107941,
	4.445716283538092,
	4.592217266055746,
	4.741496401646282,
	4.893568542229298,
	5.048448422192488,
	5.20615066083972,
	5.3666897647573375,
	5.5300801301023865,
	5.696336044816294,
	5.865471690767354,
	6.037501145825082,
	6.212438385869475,
	6.390297286737924,
	6.571091626112461,
	6.7548350853498045,
	6.941541251256611,
	7.131223617812143,
	7.323895587840543,
	7.5195704746346665,
	7.7182615035334345,
	7.919981813454504,
	8.124744458384042,
	8.332562408825165,
	8.543448553206703,
	8.757415699253682,
	8.974476575321063,
	9.194643831691977,
	9.417930041841839,
	9.644347703669503,
	9.873909240696694,
	10.106627003236781,
	10.342513269534024,
	10.58158024687427,
	10.8238400726681,
	11.069304815507364,
	11.317986476196008,
	11.569896988756009,
	11.825048221409341,
	12.083451977536606,
	12.345119996613247,
	12.610063955123938,
	12.878295467455942,
	13.149826086772048,
	13.42466730586372,
	13.702830557985108,
	13.984327217668513,
	14.269168601521828,
	14.55736596900856,
	14.848930523210871,
	15.143873411576273,
	15.44220572664832,
	15.743938506781891,
	16.04908273684337,
	16.35764934889634,
	16.66964922287304,
	16.985093187232053,
	17.30399201960269,
	17.62635644741625,
	17.95219714852476,
	18.281524751807332,
	18.614349837764564,
	18.95068293910138,
	19.290534541298456,
	19.633915083172692,
	19.98083495742689,
	20.331304511189067,
	20.685334046541502,
	21.042933821039977,
	21.404114048223256,
	21.76888489811322,
	22.137256497705877,
	22.50923893145328,
	22.884842241736916,
	23.264076429332462,
	23.6469514538663,
	24.033477234264016,
	24.42366364919083,
	24.817520537484558,
	25.21505769858089,
	25.61628489293138,
	26.021211842414342,
	26.429848230738664,
	26.842203703840827,
	27.258287870275353,
	27.678110301598522,
	28.10168053274597,
	28.529008062403893,
	28.96010235337422,
	29.39497283293396,
	29.83362889318845,
	30.276079891419332,
	30.722335150426627,
	31.172403958865512,
	31.62629557157785,
	32.08401920991837,
	32.54558406207592,
	33.010999283389665,
	33.4802739966603,
	33.953417292456834,
	34.430438229418264,
	34.911345834551085,
	35.39614910352207,
	35.88485700094671,
	36.37747846067349,
	36.87402238606382,
	37.37449765026789,
	37.87891309649659,
	38.38727753828926,
	38.89959975977785,
	39.41588851594697,
	39.93615253289054,
	40.460400508064545,
	40.98864111053629,
	41.520882981230194,
	42.05713473317016,
	42.597404951718396,
	43.141702194811224,
	43.6900349931913,
	44.24241185063697,
	44.798841244188324,
	45.35933162437017,
	45.92389141541209,
	46.49252901546552,
	47.065252796817916,
	47.64207110610409,
	48.22299226451468,
	48.808024568002054,
	49.3971762874833,
	49.9904556690408,
	50.587870934119984,
	51.189430279724725,
	51.79514187861014,
	52.40501387947288,
	53.0190544071392,
	53.637271562750364,
	54.259673423945976,
	54.88626804504493,
	55.517063457223934,
	56.15206766869424,
	56.79128866487574,
	57.43473440856916,
	58.08241284012621,
	58.734331877617365,
	59.39049941699807,
	60.05092333227251,
	60.715611475655585,
	61.38457167773311,
	62.057811747619894,
	62.7353394731159,
	63.417162620860914,
	64.10328893648692,
	64.79372614476921,
	65.48848194977529,
	66.18756403501224,
	66.89098006357258,
	67.59873767827808,
	68.31084450182222,
	69.02730813691093,
	69.74813616640164,
	70.47333615344107,
	71.20291564160104,
	71.93688215501312,
	72.67524319850172,
	73.41800625771542,
	74.16517879925733,
	74.9167682708136,
	75.67278210128072,
	76.43322770089146,
	77.1981124613393,
	77.96744375590167,
	78.74122893956174,
	79.51947534912904,
	80.30219030335869,
	81.08938110306934,
	81.88105503125999,
	82.67721935322541,
	83.4778813166706,
	84.28304815182372,
	85.09272707154808,
	85.90692527145302,
	86.72564993000343,
	87.54890820862819,
	88.3767072518277,
	89.2090541872801,
	90.04595612594655,
	90.88742016217518,
	91.73345337380438,
	92.58406282226491,
	93.43925555268066,
	94.29903859396902,
	95.16341895893969,
	96.03240364439274,
	96.9059996312159,
	97.78421388448044,
	98.6670533535366,
	99.55452497210776
];
var Hct = class Hct {
	static from(hue, chroma, tone) {
		return new Hct(HctSolver.solveToInt(hue, chroma, tone));
	}
	static fromInt(argb) {
		return new Hct(argb);
	}
	toInt() {
		return this.argb;
	}
	get hue() {
		return this.internalHue;
	}
	set hue(newHue) {
		this.setInternalState(/* @__PURE__ */ HctSolver.solveToInt(newHue, this.internalChroma, this.internalTone));
	}
	get chroma() {
		return this.internalChroma;
	}
	set chroma(newChroma) {
		this.setInternalState(/* @__PURE__ */ HctSolver.solveToInt(this.internalHue, newChroma, this.internalTone));
	}
	get tone() {
		return this.internalTone;
	}
	set tone(newTone) {
		this.setInternalState(/* @__PURE__ */ HctSolver.solveToInt(this.internalHue, this.internalChroma, newTone));
	}
	constructor(argb) {
		this.argb = argb;
		const cam = /* @__PURE__ */ Cam16.fromInt(argb);
		this.internalHue = cam.hue;
		this.internalChroma = cam.chroma;
		this.internalTone = /* @__PURE__ */ lstarFromArgb(argb);
		this.argb = argb;
	}
	setInternalState(argb) {
		const cam = /* @__PURE__ */ Cam16.fromInt(argb);
		this.internalHue = cam.hue;
		this.internalChroma = cam.chroma;
		this.internalTone = /* @__PURE__ */ lstarFromArgb(argb);
		this.argb = argb;
	}
	inViewingConditions(vc) {
		const viewedInVc = /* @__PURE__ */ Cam16.fromInt(/* @__PURE__ */ this.toInt()).xyzInViewingConditions(vc);
		const recastInVc = /* @__PURE__ */ Cam16.fromXyzInViewingConditions(viewedInVc[0], viewedInVc[1], viewedInVc[2], /* @__PURE__ */ ViewingConditions.make());
		return Hct.from(recastInVc.hue, recastInVc.chroma, /* @__PURE__ */ lstarFromY(viewedInVc[1]));
	}
};
var Contrast = class Contrast {
	static ratioOfTones(toneA, toneB) {
		toneA = /* @__PURE__ */ clampDouble(0, 100, toneA);
		toneB = /* @__PURE__ */ clampDouble(0, 100, toneB);
		return Contrast.ratioOfYs(/* @__PURE__ */ yFromLstar(toneA), /* @__PURE__ */ yFromLstar(toneB));
	}
	static ratioOfYs(y1, y2) {
		const lighter = y1 > y2 ? y1 : y2;
		const darker = lighter === y2 ? y1 : y2;
		return (lighter + 5) / (darker + 5);
	}
	static lighter(tone, ratio) {
		if (tone < 0 || tone > 100) return -1;
		const darkY = /* @__PURE__ */ yFromLstar(tone);
		const lightY = ratio * (darkY + 5) - 5;
		const realContrast = /* @__PURE__ */ Contrast.ratioOfYs(lightY, darkY);
		const delta = /* @__PURE__ */ Math.abs(realContrast - ratio);
		if (realContrast < ratio && delta > .04) return -1;
		const returnValue = lstarFromY(lightY) + .4;
		if (returnValue < 0 || returnValue > 100) return -1;
		return returnValue;
	}
	static darker(tone, ratio) {
		if (tone < 0 || tone > 100) return -1;
		const lightY = /* @__PURE__ */ yFromLstar(tone);
		const darkY = (lightY + 5) / ratio - 5;
		const realContrast = /* @__PURE__ */ Contrast.ratioOfYs(lightY, darkY);
		const delta = /* @__PURE__ */ Math.abs(realContrast - ratio);
		if (realContrast < ratio && delta > .04) return -1;
		const returnValue = lstarFromY(darkY) - .4;
		if (returnValue < 0 || returnValue > 100) return -1;
		return returnValue;
	}
	static lighterUnsafe(tone, ratio) {
		const lighterSafe = /* @__PURE__ */ Contrast.lighter(tone, ratio);
		return lighterSafe < 0 ? 100 : lighterSafe;
	}
	static darkerUnsafe(tone, ratio) {
		const darkerSafe = /* @__PURE__ */ Contrast.darker(tone, ratio);
		return darkerSafe < 0 ? 0 : darkerSafe;
	}
};
var DislikeAnalyzer = class DislikeAnalyzer {
	static isDisliked(hct) {
		const huePasses = Math.round(hct.hue) >= 90 && Math.round(hct.hue) <= 111;
		const chromaPasses = Math.round(hct.chroma) > 16;
		const tonePasses = Math.round(hct.tone) < 65;
		return huePasses && chromaPasses && tonePasses;
	}
	static fixIfDisliked(hct) {
		if (DislikeAnalyzer.isDisliked(hct)) return Hct.from(hct.hue, hct.chroma, 70);
		return hct;
	}
};
var DynamicColor = class DynamicColor {
	static fromPalette(args) {
		return new DynamicColor(args.name ?? "", args.palette, args.tone, args.isBackground ?? false, args.background, args.secondBackground, args.contrastCurve, args.toneDeltaPair);
	}
	constructor(name, palette, tone, isBackground, background, secondBackground, contrastCurve, toneDeltaPair) {
		this.name = name;
		this.palette = palette;
		this.tone = tone;
		this.isBackground = isBackground;
		this.background = background;
		this.secondBackground = secondBackground;
		this.contrastCurve = contrastCurve;
		this.toneDeltaPair = toneDeltaPair;
		this.hctCache = /* @__PURE__ */ new Map();
		if (!background && secondBackground) throw new Error(`Color ${name} has secondBackgrounddefined, but background is not defined.`);
		if (!background && contrastCurve) throw new Error(`Color ${name} has contrastCurvedefined, but background is not defined.`);
		if (background && !contrastCurve) throw new Error(`Color ${name} has backgrounddefined, but contrastCurve is not defined.`);
	}
	getArgb(scheme) {
		return this.getHct(scheme).toInt();
	}
	getHct(scheme) {
		const cachedAnswer = /* @__PURE__ */ this.hctCache.get(scheme);
		if (cachedAnswer != null) return cachedAnswer;
		const tone = /* @__PURE__ */ this.getTone(scheme);
		const answer = /* @__PURE__ */ this.palette(scheme).getHct(tone);
		if (this.hctCache.size > 4) this.hctCache.clear();
		this.hctCache.set(scheme, answer);
		return answer;
	}
	getTone(scheme) {
		const decreasingContrast = scheme.contrastLevel < 0;
		if (this.toneDeltaPair) {
			const toneDeltaPair = /* @__PURE__ */ this.toneDeltaPair(scheme);
			const roleA = toneDeltaPair.roleA;
			const roleB = toneDeltaPair.roleB;
			const delta = toneDeltaPair.delta;
			const polarity = toneDeltaPair.polarity;
			const stayTogether = toneDeltaPair.stayTogether;
			const bgTone = /* @__PURE__ */ this.background(scheme).getTone(scheme);
			const aIsNearer = polarity === "nearer" || polarity === "lighter" && !scheme.isDark || polarity === "darker" && scheme.isDark;
			const nearer = aIsNearer ? roleA : roleB;
			const farther = aIsNearer ? roleB : roleA;
			const amNearer = this.name === nearer.name;
			const expansionDir = scheme.isDark ? 1 : -1;
			const nContrast = /* @__PURE__ */ nearer.contrastCurve.get(scheme.contrastLevel);
			const fContrast = /* @__PURE__ */ farther.contrastCurve.get(scheme.contrastLevel);
			const nInitialTone = /* @__PURE__ */ nearer.tone(scheme);
			let nTone = Contrast.ratioOfTones(bgTone, nInitialTone) >= nContrast ? nInitialTone : DynamicColor.foregroundTone(bgTone, nContrast);
			const fInitialTone = /* @__PURE__ */ farther.tone(scheme);
			let fTone = Contrast.ratioOfTones(bgTone, fInitialTone) >= fContrast ? fInitialTone : DynamicColor.foregroundTone(bgTone, fContrast);
			if (decreasingContrast) {
				nTone = /* @__PURE__ */ DynamicColor.foregroundTone(bgTone, nContrast);
				fTone = /* @__PURE__ */ DynamicColor.foregroundTone(bgTone, fContrast);
			}
			if ((fTone - nTone) * expansionDir >= delta) {} else {
				fTone = /* @__PURE__ */ clampDouble(0, 100, nTone + delta * expansionDir);
				if ((fTone - nTone) * expansionDir >= delta) {} else nTone = /* @__PURE__ */ clampDouble(0, 100, fTone - delta * expansionDir);
			}
			if (50 <= nTone && nTone < 60) if (expansionDir > 0) {
				nTone = 60;
				fTone = /* @__PURE__ */ Math.max(fTone, nTone + delta * expansionDir);
			} else {
				nTone = 49;
				fTone = /* @__PURE__ */ Math.min(fTone, nTone + delta * expansionDir);
			}
			else if (50 <= fTone && fTone < 60) if (stayTogether) if (expansionDir > 0) {
				nTone = 60;
				fTone = /* @__PURE__ */ Math.max(fTone, nTone + delta * expansionDir);
			} else {
				nTone = 49;
				fTone = /* @__PURE__ */ Math.min(fTone, nTone + delta * expansionDir);
			}
			else if (expansionDir > 0) fTone = 60;
			else fTone = 49;
			return amNearer ? nTone : fTone;
		} else {
			let answer = /* @__PURE__ */ this.tone(scheme);
			if (this.background == null) return answer;
			const bgTone = /* @__PURE__ */ this.background(scheme).getTone(scheme);
			const desiredRatio = /* @__PURE__ */ this.contrastCurve.get(scheme.contrastLevel);
			if (Contrast.ratioOfTones(bgTone, answer) >= desiredRatio) {} else answer = /* @__PURE__ */ DynamicColor.foregroundTone(bgTone, desiredRatio);
			if (decreasingContrast) answer = /* @__PURE__ */ DynamicColor.foregroundTone(bgTone, desiredRatio);
			if (this.isBackground && 50 <= answer && answer < 60) if (Contrast.ratioOfTones(49, bgTone) >= desiredRatio) answer = 49;
			else answer = 60;
			if (this.secondBackground) {
				const [bg1, bg2] = [this.background, this.secondBackground];
				const [bgTone1, bgTone2] = [/* @__PURE__ */ bg1(scheme).getTone(scheme), /* @__PURE__ */ bg2(scheme).getTone(scheme)];
				const [upper, lower] = [/* @__PURE__ */ Math.max(bgTone1, bgTone2), /* @__PURE__ */ Math.min(bgTone1, bgTone2)];
				if (Contrast.ratioOfTones(upper, answer) >= desiredRatio && Contrast.ratioOfTones(lower, answer) >= desiredRatio) return answer;
				const lightOption = /* @__PURE__ */ Contrast.lighter(upper, desiredRatio);
				const darkOption = /* @__PURE__ */ Contrast.darker(lower, desiredRatio);
				const availables = [];
				if (lightOption !== -1) availables.push(lightOption);
				if (darkOption !== -1) availables.push(darkOption);
				if (DynamicColor.tonePrefersLightForeground(bgTone1) || DynamicColor.tonePrefersLightForeground(bgTone2)) return lightOption < 0 ? 100 : lightOption;
				if (availables.length === 1) return availables[0];
				return darkOption < 0 ? 0 : darkOption;
			}
			return answer;
		}
	}
	static foregroundTone(bgTone, ratio) {
		const lighterTone = /* @__PURE__ */ Contrast.lighterUnsafe(bgTone, ratio);
		const darkerTone = /* @__PURE__ */ Contrast.darkerUnsafe(bgTone, ratio);
		const lighterRatio = /* @__PURE__ */ Contrast.ratioOfTones(lighterTone, bgTone);
		const darkerRatio = /* @__PURE__ */ Contrast.ratioOfTones(darkerTone, bgTone);
		if (DynamicColor.tonePrefersLightForeground(bgTone)) {
			const negligibleDifference = Math.abs(lighterRatio - darkerRatio) < .1 && lighterRatio < ratio && darkerRatio < ratio;
			return lighterRatio >= ratio || lighterRatio >= darkerRatio || negligibleDifference ? lighterTone : darkerTone;
		} else return darkerRatio >= ratio || darkerRatio >= lighterRatio ? darkerTone : lighterTone;
	}
	static tonePrefersLightForeground(tone) {
		return Math.round(tone) < 60;
	}
	static toneAllowsLightForeground(tone) {
		return Math.round(tone) <= 49;
	}
	static enableLightForeground(tone) {
		if (DynamicColor.tonePrefersLightForeground(tone) && !DynamicColor.toneAllowsLightForeground(tone)) return 49;
		return tone;
	}
};
var TonalPalette = class TonalPalette {
	static fromInt(argb) {
		const hct = /* @__PURE__ */ Hct.fromInt(argb);
		return TonalPalette.fromHct(hct);
	}
	static fromHct(hct) {
		return new TonalPalette(hct.hue, hct.chroma, hct);
	}
	static fromHueAndChroma(hue, chroma) {
		return new TonalPalette(hue, chroma, new KeyColor(hue, chroma).create());
	}
	constructor(hue, chroma, keyColor) {
		this.hue = hue;
		this.chroma = chroma;
		this.keyColor = keyColor;
		this.cache = /* @__PURE__ */ new Map();
	}
	tone(tone) {
		let argb = /* @__PURE__ */ this.cache.get(tone);
		if (argb === void 0) {
			argb = /* @__PURE__ */ Hct.from(this.hue, this.chroma, tone).toInt();
			this.cache.set(tone, argb);
		}
		return argb;
	}
	getHct(tone) {
		return Hct.fromInt(/* @__PURE__ */ this.tone(tone));
	}
};
var KeyColor = class {
	constructor(hue, requestedChroma) {
		this.hue = hue;
		this.requestedChroma = requestedChroma;
		this.chromaCache = /* @__PURE__ */ new Map();
		this.maxChromaValue = 200;
	}
	create() {
		const pivotTone = 50;
		const toneStepSize = 1;
		const epsilon = .01;
		let lowerTone = 0;
		let upperTone = 100;
		while (lowerTone < upperTone) {
			const midTone = /* @__PURE__ */ Math.floor((lowerTone + upperTone) / 2);
			const isAscending = this.maxChroma(midTone) < this.maxChroma(midTone + toneStepSize);
			if (this.maxChroma(midTone) >= this.requestedChroma - epsilon) if (Math.abs(lowerTone - pivotTone) < Math.abs(upperTone - pivotTone)) upperTone = midTone;
			else {
				if (lowerTone === midTone) return Hct.from(this.hue, this.requestedChroma, lowerTone);
				lowerTone = midTone;
			}
			else if (isAscending) lowerTone = midTone + toneStepSize;
			else upperTone = midTone;
		}
		return Hct.from(this.hue, this.requestedChroma, lowerTone);
	}
	maxChroma(tone) {
		if (this.chromaCache.has(tone)) return this.chromaCache.get(tone);
		const chroma = Hct.from(this.hue, this.maxChromaValue, tone).chroma;
		this.chromaCache.set(tone, chroma);
		return chroma;
	}
};
var ContrastCurve = class {
	constructor(low, normal, medium, high) {
		this.low = low;
		this.normal = normal;
		this.medium = medium;
		this.high = high;
	}
	get(contrastLevel) {
		if (contrastLevel <= -1) return this.low;
		else if (contrastLevel < 0) return lerp(this.low, this.normal, (contrastLevel - -1) / 1);
		else if (contrastLevel < .5) return lerp(this.normal, this.medium, (contrastLevel - 0) / .5);
		else if (contrastLevel < 1) return lerp(this.medium, this.high, (contrastLevel - .5) / .5);
		else return this.high;
	}
};
/**
* @license
* Copyright 2023 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ var ToneDeltaPair = class {
	constructor(roleA, roleB, delta, polarity, stayTogether) {
		this.roleA = roleA;
		this.roleB = roleB;
		this.delta = delta;
		this.polarity = polarity;
		this.stayTogether = stayTogether;
	}
};
/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ var Variant;
(function(Variant$1) {
	Variant$1[Variant$1["MONOCHROME"] = 0] = "MONOCHROME";
	Variant$1[Variant$1["NEUTRAL"] = 1] = "NEUTRAL";
	Variant$1[Variant$1["TONAL_SPOT"] = 2] = "TONAL_SPOT";
	Variant$1[Variant$1["VIBRANT"] = 3] = "VIBRANT";
	Variant$1[Variant$1["EXPRESSIVE"] = 4] = "EXPRESSIVE";
	Variant$1[Variant$1["FIDELITY"] = 5] = "FIDELITY";
	Variant$1[Variant$1["CONTENT"] = 6] = "CONTENT";
	Variant$1[Variant$1["RAINBOW"] = 7] = "RAINBOW";
	Variant$1[Variant$1["FRUIT_SALAD"] = 8] = "FRUIT_SALAD";
})(Variant || (Variant = {}));
function isFidelity(scheme) {
	return scheme.variant === Variant.FIDELITY || scheme.variant === Variant.CONTENT;
}
function isMonochrome(scheme) {
	return scheme.variant === Variant.MONOCHROME;
}
function findDesiredChromaByTone(hue, chroma, tone, byDecreasingTone) {
	let answer = tone;
	let closestToChroma = /* @__PURE__ */ Hct.from(hue, chroma, tone);
	if (closestToChroma.chroma < chroma) {
		let chromaPeak = closestToChroma.chroma;
		while (closestToChroma.chroma < chroma) {
			answer += byDecreasingTone ? -1 : 1;
			const potentialSolution = /* @__PURE__ */ Hct.from(hue, chroma, answer);
			if (chromaPeak > potentialSolution.chroma) break;
			if (Math.abs(potentialSolution.chroma - chroma) < .4) break;
			if (Math.abs(potentialSolution.chroma - chroma) < Math.abs(closestToChroma.chroma - chroma)) closestToChroma = potentialSolution;
			chromaPeak = /* @__PURE__ */ Math.max(chromaPeak, potentialSolution.chroma);
		}
	}
	return answer;
}
var MaterialDynamicColors = class MaterialDynamicColors {
	static highestSurface(s) {
		return s.isDark ? MaterialDynamicColors.surfaceBright : MaterialDynamicColors.surfaceDim;
	}
};
MaterialDynamicColors.contentAccentToneDelta = 15;
MaterialDynamicColors.primaryPaletteKeyColor = /* @__PURE__ */ DynamicColor.fromPalette({
	name: "primary_palette_key_color",
	palette: (s) => s.primaryPalette,
	tone: (s) => s.primaryPalette.keyColor.tone
});
MaterialDynamicColors.secondaryPaletteKeyColor = /* @__PURE__ */ DynamicColor.fromPalette({
	name: "secondary_palette_key_color",
	palette: (s) => s.secondaryPalette,
	tone: (s) => s.secondaryPalette.keyColor.tone
});
MaterialDynamicColors.tertiaryPaletteKeyColor = /* @__PURE__ */ DynamicColor.fromPalette({
	name: "tertiary_palette_key_color",
	palette: (s) => s.tertiaryPalette,
	tone: (s) => s.tertiaryPalette.keyColor.tone
});
MaterialDynamicColors.neutralPaletteKeyColor = /* @__PURE__ */ DynamicColor.fromPalette({
	name: "neutral_palette_key_color",
	palette: (s) => s.neutralPalette,
	tone: (s) => s.neutralPalette.keyColor.tone
});
MaterialDynamicColors.neutralVariantPaletteKeyColor = /* @__PURE__ */ DynamicColor.fromPalette({
	name: "neutral_variant_palette_key_color",
	palette: (s) => s.neutralVariantPalette,
	tone: (s) => s.neutralVariantPalette.keyColor.tone
});
MaterialDynamicColors.background = /* @__PURE__ */ DynamicColor.fromPalette({
	name: "background",
	palette: (s) => s.neutralPalette,
	tone: (s) => s.isDark ? 6 : 98,
	isBackground: true
});
MaterialDynamicColors.onBackground = /* @__PURE__ */ DynamicColor.fromPalette({
	name: "on_background",
	palette: (s) => s.neutralPalette,
	tone: (s) => s.isDark ? 90 : 10,
	background: (s) => MaterialDynamicColors.background,
	contrastCurve: new ContrastCurve(3, 3, 4.5, 7)
});
MaterialDynamicColors.surface = /* @__PURE__ */ DynamicColor.fromPalette({
	name: "surface",
	palette: (s) => s.neutralPalette,
	tone: (s) => s.isDark ? 6 : 98,
	isBackground: true
});
MaterialDynamicColors.surfaceDim = /* @__PURE__ */ DynamicColor.fromPalette({
	name: "surface_dim",
	palette: (s) => s.neutralPalette,
	tone: (s) => s.isDark ? 6 : new ContrastCurve(87, 87, 80, 75).get(s.contrastLevel),
	isBackground: true
});
MaterialDynamicColors.surfaceBright = /* @__PURE__ */ DynamicColor.fromPalette({
	name: "surface_bright",
	palette: (s) => s.neutralPalette,
	tone: (s) => s.isDark ? new ContrastCurve(24, 24, 29, 34).get(s.contrastLevel) : 98,
	isBackground: true
});
MaterialDynamicColors.surfaceContainerLowest = /* @__PURE__ */ DynamicColor.fromPalette({
	name: "surface_container_lowest",
	palette: (s) => s.neutralPalette,
	tone: (s) => s.isDark ? new ContrastCurve(4, 4, 2, 0).get(s.contrastLevel) : 100,
	isBackground: true
});
MaterialDynamicColors.surfaceContainerLow = /* @__PURE__ */ DynamicColor.fromPalette({
	name: "surface_container_low",
	palette: (s) => s.neutralPalette,
	tone: (s) => s.isDark ? new ContrastCurve(10, 10, 11, 12).get(s.contrastLevel) : new ContrastCurve(96, 96, 96, 95).get(s.contrastLevel),
	isBackground: true
});
MaterialDynamicColors.surfaceContainer = /* @__PURE__ */ DynamicColor.fromPalette({
	name: "surface_container",
	palette: (s) => s.neutralPalette,
	tone: (s) => s.isDark ? new ContrastCurve(12, 12, 16, 20).get(s.contrastLevel) : new ContrastCurve(94, 94, 92, 90).get(s.contrastLevel),
	isBackground: true
});
MaterialDynamicColors.surfaceContainerHigh = /* @__PURE__ */ DynamicColor.fromPalette({
	name: "surface_container_high",
	palette: (s) => s.neutralPalette,
	tone: (s) => s.isDark ? new ContrastCurve(17, 17, 21, 25).get(s.contrastLevel) : new ContrastCurve(92, 92, 88, 85).get(s.contrastLevel),
	isBackground: true
});
MaterialDynamicColors.surfaceContainerHighest = /* @__PURE__ */ DynamicColor.fromPalette({
	name: "surface_container_highest",
	palette: (s) => s.neutralPalette,
	tone: (s) => s.isDark ? new ContrastCurve(22, 22, 26, 30).get(s.contrastLevel) : new ContrastCurve(90, 90, 84, 80).get(s.contrastLevel),
	isBackground: true
});
MaterialDynamicColors.onSurface = /* @__PURE__ */ DynamicColor.fromPalette({
	name: "on_surface",
	palette: (s) => s.neutralPalette,
	tone: (s) => s.isDark ? 90 : 10,
	background: (s) => MaterialDynamicColors.highestSurface(s),
	contrastCurve: new ContrastCurve(4.5, 7, 11, 21)
});
MaterialDynamicColors.surfaceVariant = /* @__PURE__ */ DynamicColor.fromPalette({
	name: "surface_variant",
	palette: (s) => s.neutralVariantPalette,
	tone: (s) => s.isDark ? 30 : 90,
	isBackground: true
});
MaterialDynamicColors.onSurfaceVariant = /* @__PURE__ */ DynamicColor.fromPalette({
	name: "on_surface_variant",
	palette: (s) => s.neutralVariantPalette,
	tone: (s) => s.isDark ? 80 : 30,
	background: (s) => MaterialDynamicColors.highestSurface(s),
	contrastCurve: new ContrastCurve(3, 4.5, 7, 11)
});
MaterialDynamicColors.inverseSurface = /* @__PURE__ */ DynamicColor.fromPalette({
	name: "inverse_surface",
	palette: (s) => s.neutralPalette,
	tone: (s) => s.isDark ? 90 : 20
});
MaterialDynamicColors.inverseOnSurface = /* @__PURE__ */ DynamicColor.fromPalette({
	name: "inverse_on_surface",
	palette: (s) => s.neutralPalette,
	tone: (s) => s.isDark ? 20 : 95,
	background: (s) => MaterialDynamicColors.inverseSurface,
	contrastCurve: new ContrastCurve(4.5, 7, 11, 21)
});
MaterialDynamicColors.outline = /* @__PURE__ */ DynamicColor.fromPalette({
	name: "outline",
	palette: (s) => s.neutralVariantPalette,
	tone: (s) => s.isDark ? 60 : 50,
	background: (s) => MaterialDynamicColors.highestSurface(s),
	contrastCurve: new ContrastCurve(1.5, 3, 4.5, 7)
});
MaterialDynamicColors.outlineVariant = /* @__PURE__ */ DynamicColor.fromPalette({
	name: "outline_variant",
	palette: (s) => s.neutralVariantPalette,
	tone: (s) => s.isDark ? 30 : 80,
	background: (s) => MaterialDynamicColors.highestSurface(s),
	contrastCurve: new ContrastCurve(1, 1, 3, 4.5)
});
MaterialDynamicColors.shadow = /* @__PURE__ */ DynamicColor.fromPalette({
	name: "shadow",
	palette: (s) => s.neutralPalette,
	tone: (s) => 0
});
MaterialDynamicColors.scrim = /* @__PURE__ */ DynamicColor.fromPalette({
	name: "scrim",
	palette: (s) => s.neutralPalette,
	tone: (s) => 0
});
MaterialDynamicColors.surfaceTint = /* @__PURE__ */ DynamicColor.fromPalette({
	name: "surface_tint",
	palette: (s) => s.primaryPalette,
	tone: (s) => s.isDark ? 80 : 40,
	isBackground: true
});
MaterialDynamicColors.primary = /* @__PURE__ */ DynamicColor.fromPalette({
	name: "primary",
	palette: (s) => s.primaryPalette,
	tone: (s) => {
		if (isMonochrome(s)) return s.isDark ? 100 : 0;
		return s.isDark ? 80 : 40;
	},
	isBackground: true,
	background: (s) => MaterialDynamicColors.highestSurface(s),
	contrastCurve: new ContrastCurve(3, 4.5, 7, 7),
	toneDeltaPair: (s) => new ToneDeltaPair(MaterialDynamicColors.primaryContainer, MaterialDynamicColors.primary, 10, "nearer", false)
});
MaterialDynamicColors.onPrimary = /* @__PURE__ */ DynamicColor.fromPalette({
	name: "on_primary",
	palette: (s) => s.primaryPalette,
	tone: (s) => {
		if (isMonochrome(s)) return s.isDark ? 10 : 90;
		return s.isDark ? 20 : 100;
	},
	background: (s) => MaterialDynamicColors.primary,
	contrastCurve: new ContrastCurve(4.5, 7, 11, 21)
});
MaterialDynamicColors.primaryContainer = /* @__PURE__ */ DynamicColor.fromPalette({
	name: "primary_container",
	palette: (s) => s.primaryPalette,
	tone: (s) => {
		if (isFidelity(s)) return s.sourceColorHct.tone;
		if (isMonochrome(s)) return s.isDark ? 85 : 25;
		return s.isDark ? 30 : 90;
	},
	isBackground: true,
	background: (s) => MaterialDynamicColors.highestSurface(s),
	contrastCurve: new ContrastCurve(1, 1, 3, 4.5),
	toneDeltaPair: (s) => new ToneDeltaPair(MaterialDynamicColors.primaryContainer, MaterialDynamicColors.primary, 10, "nearer", false)
});
MaterialDynamicColors.onPrimaryContainer = /* @__PURE__ */ DynamicColor.fromPalette({
	name: "on_primary_container",
	palette: (s) => s.primaryPalette,
	tone: (s) => {
		if (isFidelity(s)) return DynamicColor.foregroundTone(/* @__PURE__ */ MaterialDynamicColors.primaryContainer.tone(s), 4.5);
		if (isMonochrome(s)) return s.isDark ? 0 : 100;
		return s.isDark ? 90 : 30;
	},
	background: (s) => MaterialDynamicColors.primaryContainer,
	contrastCurve: new ContrastCurve(3, 4.5, 7, 11)
});
MaterialDynamicColors.inversePrimary = /* @__PURE__ */ DynamicColor.fromPalette({
	name: "inverse_primary",
	palette: (s) => s.primaryPalette,
	tone: (s) => s.isDark ? 40 : 80,
	background: (s) => MaterialDynamicColors.inverseSurface,
	contrastCurve: new ContrastCurve(3, 4.5, 7, 7)
});
MaterialDynamicColors.secondary = /* @__PURE__ */ DynamicColor.fromPalette({
	name: "secondary",
	palette: (s) => s.secondaryPalette,
	tone: (s) => s.isDark ? 80 : 40,
	isBackground: true,
	background: (s) => MaterialDynamicColors.highestSurface(s),
	contrastCurve: new ContrastCurve(3, 4.5, 7, 7),
	toneDeltaPair: (s) => new ToneDeltaPair(MaterialDynamicColors.secondaryContainer, MaterialDynamicColors.secondary, 10, "nearer", false)
});
MaterialDynamicColors.onSecondary = /* @__PURE__ */ DynamicColor.fromPalette({
	name: "on_secondary",
	palette: (s) => s.secondaryPalette,
	tone: (s) => {
		if (isMonochrome(s)) return s.isDark ? 10 : 100;
		else return s.isDark ? 20 : 100;
	},
	background: (s) => MaterialDynamicColors.secondary,
	contrastCurve: new ContrastCurve(4.5, 7, 11, 21)
});
MaterialDynamicColors.secondaryContainer = /* @__PURE__ */ DynamicColor.fromPalette({
	name: "secondary_container",
	palette: (s) => s.secondaryPalette,
	tone: (s) => {
		const initialTone = s.isDark ? 30 : 90;
		if (isMonochrome(s)) return s.isDark ? 30 : 85;
		if (!isFidelity(s)) return initialTone;
		return findDesiredChromaByTone(s.secondaryPalette.hue, s.secondaryPalette.chroma, initialTone, s.isDark ? false : true);
	},
	isBackground: true,
	background: (s) => MaterialDynamicColors.highestSurface(s),
	contrastCurve: new ContrastCurve(1, 1, 3, 4.5),
	toneDeltaPair: (s) => new ToneDeltaPair(MaterialDynamicColors.secondaryContainer, MaterialDynamicColors.secondary, 10, "nearer", false)
});
MaterialDynamicColors.onSecondaryContainer = /* @__PURE__ */ DynamicColor.fromPalette({
	name: "on_secondary_container",
	palette: (s) => s.secondaryPalette,
	tone: (s) => {
		if (isMonochrome(s)) return s.isDark ? 90 : 10;
		if (!isFidelity(s)) return s.isDark ? 90 : 30;
		return DynamicColor.foregroundTone(/* @__PURE__ */ MaterialDynamicColors.secondaryContainer.tone(s), 4.5);
	},
	background: (s) => MaterialDynamicColors.secondaryContainer,
	contrastCurve: new ContrastCurve(3, 4.5, 7, 11)
});
MaterialDynamicColors.tertiary = /* @__PURE__ */ DynamicColor.fromPalette({
	name: "tertiary",
	palette: (s) => s.tertiaryPalette,
	tone: (s) => {
		if (isMonochrome(s)) return s.isDark ? 90 : 25;
		return s.isDark ? 80 : 40;
	},
	isBackground: true,
	background: (s) => MaterialDynamicColors.highestSurface(s),
	contrastCurve: new ContrastCurve(3, 4.5, 7, 7),
	toneDeltaPair: (s) => new ToneDeltaPair(MaterialDynamicColors.tertiaryContainer, MaterialDynamicColors.tertiary, 10, "nearer", false)
});
MaterialDynamicColors.onTertiary = /* @__PURE__ */ DynamicColor.fromPalette({
	name: "on_tertiary",
	palette: (s) => s.tertiaryPalette,
	tone: (s) => {
		if (isMonochrome(s)) return s.isDark ? 10 : 90;
		return s.isDark ? 20 : 100;
	},
	background: (s) => MaterialDynamicColors.tertiary,
	contrastCurve: new ContrastCurve(4.5, 7, 11, 21)
});
MaterialDynamicColors.tertiaryContainer = /* @__PURE__ */ DynamicColor.fromPalette({
	name: "tertiary_container",
	palette: (s) => s.tertiaryPalette,
	tone: (s) => {
		if (isMonochrome(s)) return s.isDark ? 60 : 49;
		if (!isFidelity(s)) return s.isDark ? 30 : 90;
		const proposedHct = /* @__PURE__ */ s.tertiaryPalette.getHct(s.sourceColorHct.tone);
		return DislikeAnalyzer.fixIfDisliked(proposedHct).tone;
	},
	isBackground: true,
	background: (s) => MaterialDynamicColors.highestSurface(s),
	contrastCurve: new ContrastCurve(1, 1, 3, 4.5),
	toneDeltaPair: (s) => new ToneDeltaPair(MaterialDynamicColors.tertiaryContainer, MaterialDynamicColors.tertiary, 10, "nearer", false)
});
MaterialDynamicColors.onTertiaryContainer = /* @__PURE__ */ DynamicColor.fromPalette({
	name: "on_tertiary_container",
	palette: (s) => s.tertiaryPalette,
	tone: (s) => {
		if (isMonochrome(s)) return s.isDark ? 0 : 100;
		if (!isFidelity(s)) return s.isDark ? 90 : 30;
		return DynamicColor.foregroundTone(/* @__PURE__ */ MaterialDynamicColors.tertiaryContainer.tone(s), 4.5);
	},
	background: (s) => MaterialDynamicColors.tertiaryContainer,
	contrastCurve: new ContrastCurve(3, 4.5, 7, 11)
});
MaterialDynamicColors.error = /* @__PURE__ */ DynamicColor.fromPalette({
	name: "error",
	palette: (s) => s.errorPalette,
	tone: (s) => s.isDark ? 80 : 40,
	isBackground: true,
	background: (s) => MaterialDynamicColors.highestSurface(s),
	contrastCurve: new ContrastCurve(3, 4.5, 7, 7),
	toneDeltaPair: (s) => new ToneDeltaPair(MaterialDynamicColors.errorContainer, MaterialDynamicColors.error, 10, "nearer", false)
});
MaterialDynamicColors.onError = /* @__PURE__ */ DynamicColor.fromPalette({
	name: "on_error",
	palette: (s) => s.errorPalette,
	tone: (s) => s.isDark ? 20 : 100,
	background: (s) => MaterialDynamicColors.error,
	contrastCurve: new ContrastCurve(4.5, 7, 11, 21)
});
MaterialDynamicColors.errorContainer = /* @__PURE__ */ DynamicColor.fromPalette({
	name: "error_container",
	palette: (s) => s.errorPalette,
	tone: (s) => s.isDark ? 30 : 90,
	isBackground: true,
	background: (s) => MaterialDynamicColors.highestSurface(s),
	contrastCurve: new ContrastCurve(1, 1, 3, 4.5),
	toneDeltaPair: (s) => new ToneDeltaPair(MaterialDynamicColors.errorContainer, MaterialDynamicColors.error, 10, "nearer", false)
});
MaterialDynamicColors.onErrorContainer = /* @__PURE__ */ DynamicColor.fromPalette({
	name: "on_error_container",
	palette: (s) => s.errorPalette,
	tone: (s) => {
		if (isMonochrome(s)) return s.isDark ? 90 : 10;
		return s.isDark ? 90 : 30;
	},
	background: (s) => MaterialDynamicColors.errorContainer,
	contrastCurve: new ContrastCurve(3, 4.5, 7, 11)
});
MaterialDynamicColors.primaryFixed = /* @__PURE__ */ DynamicColor.fromPalette({
	name: "primary_fixed",
	palette: (s) => s.primaryPalette,
	tone: (s) => isMonochrome(s) ? 40 : 90,
	isBackground: true,
	background: (s) => MaterialDynamicColors.highestSurface(s),
	contrastCurve: new ContrastCurve(1, 1, 3, 4.5),
	toneDeltaPair: (s) => new ToneDeltaPair(MaterialDynamicColors.primaryFixed, MaterialDynamicColors.primaryFixedDim, 10, "lighter", true)
});
MaterialDynamicColors.primaryFixedDim = /* @__PURE__ */ DynamicColor.fromPalette({
	name: "primary_fixed_dim",
	palette: (s) => s.primaryPalette,
	tone: (s) => isMonochrome(s) ? 30 : 80,
	isBackground: true,
	background: (s) => MaterialDynamicColors.highestSurface(s),
	contrastCurve: new ContrastCurve(1, 1, 3, 4.5),
	toneDeltaPair: (s) => new ToneDeltaPair(MaterialDynamicColors.primaryFixed, MaterialDynamicColors.primaryFixedDim, 10, "lighter", true)
});
MaterialDynamicColors.onPrimaryFixed = /* @__PURE__ */ DynamicColor.fromPalette({
	name: "on_primary_fixed",
	palette: (s) => s.primaryPalette,
	tone: (s) => isMonochrome(s) ? 100 : 10,
	background: (s) => MaterialDynamicColors.primaryFixedDim,
	secondBackground: (s) => MaterialDynamicColors.primaryFixed,
	contrastCurve: new ContrastCurve(4.5, 7, 11, 21)
});
MaterialDynamicColors.onPrimaryFixedVariant = /* @__PURE__ */ DynamicColor.fromPalette({
	name: "on_primary_fixed_variant",
	palette: (s) => s.primaryPalette,
	tone: (s) => isMonochrome(s) ? 90 : 30,
	background: (s) => MaterialDynamicColors.primaryFixedDim,
	secondBackground: (s) => MaterialDynamicColors.primaryFixed,
	contrastCurve: new ContrastCurve(3, 4.5, 7, 11)
});
MaterialDynamicColors.secondaryFixed = /* @__PURE__ */ DynamicColor.fromPalette({
	name: "secondary_fixed",
	palette: (s) => s.secondaryPalette,
	tone: (s) => isMonochrome(s) ? 80 : 90,
	isBackground: true,
	background: (s) => MaterialDynamicColors.highestSurface(s),
	contrastCurve: new ContrastCurve(1, 1, 3, 4.5),
	toneDeltaPair: (s) => new ToneDeltaPair(MaterialDynamicColors.secondaryFixed, MaterialDynamicColors.secondaryFixedDim, 10, "lighter", true)
});
MaterialDynamicColors.secondaryFixedDim = /* @__PURE__ */ DynamicColor.fromPalette({
	name: "secondary_fixed_dim",
	palette: (s) => s.secondaryPalette,
	tone: (s) => isMonochrome(s) ? 70 : 80,
	isBackground: true,
	background: (s) => MaterialDynamicColors.highestSurface(s),
	contrastCurve: new ContrastCurve(1, 1, 3, 4.5),
	toneDeltaPair: (s) => new ToneDeltaPair(MaterialDynamicColors.secondaryFixed, MaterialDynamicColors.secondaryFixedDim, 10, "lighter", true)
});
MaterialDynamicColors.onSecondaryFixed = /* @__PURE__ */ DynamicColor.fromPalette({
	name: "on_secondary_fixed",
	palette: (s) => s.secondaryPalette,
	tone: (s) => 10,
	background: (s) => MaterialDynamicColors.secondaryFixedDim,
	secondBackground: (s) => MaterialDynamicColors.secondaryFixed,
	contrastCurve: new ContrastCurve(4.5, 7, 11, 21)
});
MaterialDynamicColors.onSecondaryFixedVariant = /* @__PURE__ */ DynamicColor.fromPalette({
	name: "on_secondary_fixed_variant",
	palette: (s) => s.secondaryPalette,
	tone: (s) => isMonochrome(s) ? 25 : 30,
	background: (s) => MaterialDynamicColors.secondaryFixedDim,
	secondBackground: (s) => MaterialDynamicColors.secondaryFixed,
	contrastCurve: new ContrastCurve(3, 4.5, 7, 11)
});
MaterialDynamicColors.tertiaryFixed = /* @__PURE__ */ DynamicColor.fromPalette({
	name: "tertiary_fixed",
	palette: (s) => s.tertiaryPalette,
	tone: (s) => isMonochrome(s) ? 40 : 90,
	isBackground: true,
	background: (s) => MaterialDynamicColors.highestSurface(s),
	contrastCurve: new ContrastCurve(1, 1, 3, 4.5),
	toneDeltaPair: (s) => new ToneDeltaPair(MaterialDynamicColors.tertiaryFixed, MaterialDynamicColors.tertiaryFixedDim, 10, "lighter", true)
});
MaterialDynamicColors.tertiaryFixedDim = /* @__PURE__ */ DynamicColor.fromPalette({
	name: "tertiary_fixed_dim",
	palette: (s) => s.tertiaryPalette,
	tone: (s) => isMonochrome(s) ? 30 : 80,
	isBackground: true,
	background: (s) => MaterialDynamicColors.highestSurface(s),
	contrastCurve: new ContrastCurve(1, 1, 3, 4.5),
	toneDeltaPair: (s) => new ToneDeltaPair(MaterialDynamicColors.tertiaryFixed, MaterialDynamicColors.tertiaryFixedDim, 10, "lighter", true)
});
MaterialDynamicColors.onTertiaryFixed = /* @__PURE__ */ DynamicColor.fromPalette({
	name: "on_tertiary_fixed",
	palette: (s) => s.tertiaryPalette,
	tone: (s) => isMonochrome(s) ? 100 : 10,
	background: (s) => MaterialDynamicColors.tertiaryFixedDim,
	secondBackground: (s) => MaterialDynamicColors.tertiaryFixed,
	contrastCurve: new ContrastCurve(4.5, 7, 11, 21)
});
MaterialDynamicColors.onTertiaryFixedVariant = /* @__PURE__ */ DynamicColor.fromPalette({
	name: "on_tertiary_fixed_variant",
	palette: (s) => s.tertiaryPalette,
	tone: (s) => isMonochrome(s) ? 90 : 30,
	background: (s) => MaterialDynamicColors.tertiaryFixedDim,
	secondBackground: (s) => MaterialDynamicColors.tertiaryFixed,
	contrastCurve: new ContrastCurve(3, 4.5, 7, 11)
});
var DynamicScheme = class {
	constructor(args) {
		this.sourceColorArgb = args.sourceColorArgb;
		this.variant = args.variant;
		this.contrastLevel = args.contrastLevel;
		this.isDark = args.isDark;
		this.sourceColorHct = /* @__PURE__ */ Hct.fromInt(args.sourceColorArgb);
		this.primaryPalette = args.primaryPalette;
		this.secondaryPalette = args.secondaryPalette;
		this.tertiaryPalette = args.tertiaryPalette;
		this.neutralPalette = args.neutralPalette;
		this.neutralVariantPalette = args.neutralVariantPalette;
		this.errorPalette = /* @__PURE__ */ TonalPalette.fromHueAndChroma(25, 84);
	}
	static getRotatedHue(sourceColor, hues, rotations) {
		const sourceHue = sourceColor.hue;
		if (hues.length !== rotations.length) throw new Error(`mismatch between hue length ${hues.length} & rotations ${rotations.length}`);
		if (rotations.length === 1) return sanitizeDegreesDouble(sourceColor.hue + rotations[0]);
		const size$2 = hues.length;
		for (let i = 0; i <= size$2 - 2; i++) {
			const thisHue = hues[i];
			const nextHue = hues[i + 1];
			if (thisHue < sourceHue && sourceHue < nextHue) return sanitizeDegreesDouble(sourceHue + rotations[i]);
		}
		return sourceHue;
	}
	getArgb(dynamicColor) {
		return dynamicColor.getArgb(this);
	}
	getHct(dynamicColor) {
		return dynamicColor.getHct(this);
	}
	get primaryPaletteKeyColor() {
		return this.getArgb(MaterialDynamicColors.primaryPaletteKeyColor);
	}
	get secondaryPaletteKeyColor() {
		return this.getArgb(MaterialDynamicColors.secondaryPaletteKeyColor);
	}
	get tertiaryPaletteKeyColor() {
		return this.getArgb(MaterialDynamicColors.tertiaryPaletteKeyColor);
	}
	get neutralPaletteKeyColor() {
		return this.getArgb(MaterialDynamicColors.neutralPaletteKeyColor);
	}
	get neutralVariantPaletteKeyColor() {
		return this.getArgb(MaterialDynamicColors.neutralVariantPaletteKeyColor);
	}
	get background() {
		return this.getArgb(MaterialDynamicColors.background);
	}
	get onBackground() {
		return this.getArgb(MaterialDynamicColors.onBackground);
	}
	get surface() {
		return this.getArgb(MaterialDynamicColors.surface);
	}
	get surfaceDim() {
		return this.getArgb(MaterialDynamicColors.surfaceDim);
	}
	get surfaceBright() {
		return this.getArgb(MaterialDynamicColors.surfaceBright);
	}
	get surfaceContainerLowest() {
		return this.getArgb(MaterialDynamicColors.surfaceContainerLowest);
	}
	get surfaceContainerLow() {
		return this.getArgb(MaterialDynamicColors.surfaceContainerLow);
	}
	get surfaceContainer() {
		return this.getArgb(MaterialDynamicColors.surfaceContainer);
	}
	get surfaceContainerHigh() {
		return this.getArgb(MaterialDynamicColors.surfaceContainerHigh);
	}
	get surfaceContainerHighest() {
		return this.getArgb(MaterialDynamicColors.surfaceContainerHighest);
	}
	get onSurface() {
		return this.getArgb(MaterialDynamicColors.onSurface);
	}
	get surfaceVariant() {
		return this.getArgb(MaterialDynamicColors.surfaceVariant);
	}
	get onSurfaceVariant() {
		return this.getArgb(MaterialDynamicColors.onSurfaceVariant);
	}
	get inverseSurface() {
		return this.getArgb(MaterialDynamicColors.inverseSurface);
	}
	get inverseOnSurface() {
		return this.getArgb(MaterialDynamicColors.inverseOnSurface);
	}
	get outline() {
		return this.getArgb(MaterialDynamicColors.outline);
	}
	get outlineVariant() {
		return this.getArgb(MaterialDynamicColors.outlineVariant);
	}
	get shadow() {
		return this.getArgb(MaterialDynamicColors.shadow);
	}
	get scrim() {
		return this.getArgb(MaterialDynamicColors.scrim);
	}
	get surfaceTint() {
		return this.getArgb(MaterialDynamicColors.surfaceTint);
	}
	get primary() {
		return this.getArgb(MaterialDynamicColors.primary);
	}
	get onPrimary() {
		return this.getArgb(MaterialDynamicColors.onPrimary);
	}
	get primaryContainer() {
		return this.getArgb(MaterialDynamicColors.primaryContainer);
	}
	get onPrimaryContainer() {
		return this.getArgb(MaterialDynamicColors.onPrimaryContainer);
	}
	get inversePrimary() {
		return this.getArgb(MaterialDynamicColors.inversePrimary);
	}
	get secondary() {
		return this.getArgb(MaterialDynamicColors.secondary);
	}
	get onSecondary() {
		return this.getArgb(MaterialDynamicColors.onSecondary);
	}
	get secondaryContainer() {
		return this.getArgb(MaterialDynamicColors.secondaryContainer);
	}
	get onSecondaryContainer() {
		return this.getArgb(MaterialDynamicColors.onSecondaryContainer);
	}
	get tertiary() {
		return this.getArgb(MaterialDynamicColors.tertiary);
	}
	get onTertiary() {
		return this.getArgb(MaterialDynamicColors.onTertiary);
	}
	get tertiaryContainer() {
		return this.getArgb(MaterialDynamicColors.tertiaryContainer);
	}
	get onTertiaryContainer() {
		return this.getArgb(MaterialDynamicColors.onTertiaryContainer);
	}
	get error() {
		return this.getArgb(MaterialDynamicColors.error);
	}
	get onError() {
		return this.getArgb(MaterialDynamicColors.onError);
	}
	get errorContainer() {
		return this.getArgb(MaterialDynamicColors.errorContainer);
	}
	get onErrorContainer() {
		return this.getArgb(MaterialDynamicColors.onErrorContainer);
	}
	get primaryFixed() {
		return this.getArgb(MaterialDynamicColors.primaryFixed);
	}
	get primaryFixedDim() {
		return this.getArgb(MaterialDynamicColors.primaryFixedDim);
	}
	get onPrimaryFixed() {
		return this.getArgb(MaterialDynamicColors.onPrimaryFixed);
	}
	get onPrimaryFixedVariant() {
		return this.getArgb(MaterialDynamicColors.onPrimaryFixedVariant);
	}
	get secondaryFixed() {
		return this.getArgb(MaterialDynamicColors.secondaryFixed);
	}
	get secondaryFixedDim() {
		return this.getArgb(MaterialDynamicColors.secondaryFixedDim);
	}
	get onSecondaryFixed() {
		return this.getArgb(MaterialDynamicColors.onSecondaryFixed);
	}
	get onSecondaryFixedVariant() {
		return this.getArgb(MaterialDynamicColors.onSecondaryFixedVariant);
	}
	get tertiaryFixed() {
		return this.getArgb(MaterialDynamicColors.tertiaryFixed);
	}
	get tertiaryFixedDim() {
		return this.getArgb(MaterialDynamicColors.tertiaryFixedDim);
	}
	get onTertiaryFixed() {
		return this.getArgb(MaterialDynamicColors.onTertiaryFixed);
	}
	get onTertiaryFixedVariant() {
		return this.getArgb(MaterialDynamicColors.onTertiaryFixedVariant);
	}
};
var CorePalette = class CorePalette {
	static of(argb) {
		return new CorePalette(argb, false);
	}
	static contentOf(argb) {
		return new CorePalette(argb, true);
	}
	static fromColors(colors) {
		return CorePalette.createPaletteFromColors(false, colors);
	}
	static contentFromColors(colors) {
		return CorePalette.createPaletteFromColors(true, colors);
	}
	static createPaletteFromColors(content, colors) {
		const palette = new CorePalette(colors.primary, content);
		if (colors.secondary) palette.a2 = new CorePalette(colors.secondary, content).a1;
		if (colors.tertiary) palette.a3 = new CorePalette(colors.tertiary, content).a1;
		if (colors.error) palette.error = new CorePalette(colors.error, content).a1;
		if (colors.neutral) palette.n1 = new CorePalette(colors.neutral, content).n1;
		if (colors.neutralVariant) palette.n2 = new CorePalette(colors.neutralVariant, content).n2;
		return palette;
	}
	constructor(argb, isContent) {
		const hct = /* @__PURE__ */ Hct.fromInt(argb);
		const hue = hct.hue;
		const chroma = hct.chroma;
		if (isContent) {
			this.a1 = /* @__PURE__ */ TonalPalette.fromHueAndChroma(hue, chroma);
			this.a2 = /* @__PURE__ */ TonalPalette.fromHueAndChroma(hue, chroma / 3);
			this.a3 = /* @__PURE__ */ TonalPalette.fromHueAndChroma(hue + 60, chroma / 2);
			this.n1 = /* @__PURE__ */ TonalPalette.fromHueAndChroma(hue, /* @__PURE__ */ Math.min(chroma / 12, 4));
			this.n2 = /* @__PURE__ */ TonalPalette.fromHueAndChroma(hue, /* @__PURE__ */ Math.min(chroma / 6, 8));
		} else {
			this.a1 = /* @__PURE__ */ TonalPalette.fromHueAndChroma(hue, /* @__PURE__ */ Math.max(48, chroma));
			this.a2 = /* @__PURE__ */ TonalPalette.fromHueAndChroma(hue, 16);
			this.a3 = /* @__PURE__ */ TonalPalette.fromHueAndChroma(hue + 60, 24);
			this.n1 = /* @__PURE__ */ TonalPalette.fromHueAndChroma(hue, 4);
			this.n2 = /* @__PURE__ */ TonalPalette.fromHueAndChroma(hue, 8);
		}
		this.error = /* @__PURE__ */ TonalPalette.fromHueAndChroma(25, 84);
	}
};
var SchemeExpressive = class SchemeExpressive extends DynamicScheme {
	constructor(sourceColorHct, isDark, contrastLevel) {
		super({
			sourceColorArgb: /* @__PURE__ */ sourceColorHct.toInt(),
			variant: Variant.EXPRESSIVE,
			contrastLevel,
			isDark,
			primaryPalette: /* @__PURE__ */ TonalPalette.fromHueAndChroma(/* @__PURE__ */ sanitizeDegreesDouble(sourceColorHct.hue + 240), 40),
			secondaryPalette: /* @__PURE__ */ TonalPalette.fromHueAndChroma(/* @__PURE__ */ DynamicScheme.getRotatedHue(sourceColorHct, SchemeExpressive.hues, SchemeExpressive.secondaryRotations), 24),
			tertiaryPalette: /* @__PURE__ */ TonalPalette.fromHueAndChroma(/* @__PURE__ */ DynamicScheme.getRotatedHue(sourceColorHct, SchemeExpressive.hues, SchemeExpressive.tertiaryRotations), 32),
			neutralPalette: /* @__PURE__ */ TonalPalette.fromHueAndChroma(sourceColorHct.hue + 15, 8),
			neutralVariantPalette: /* @__PURE__ */ TonalPalette.fromHueAndChroma(sourceColorHct.hue + 15, 12)
		});
	}
};
SchemeExpressive.hues = [
	0,
	21,
	51,
	121,
	151,
	191,
	271,
	321,
	360
];
SchemeExpressive.secondaryRotations = [
	45,
	95,
	45,
	20,
	45,
	90,
	45,
	45,
	45
];
SchemeExpressive.tertiaryRotations = [
	120,
	120,
	20,
	45,
	20,
	15,
	20,
	120,
	120
];
var SchemeVibrant = class SchemeVibrant extends DynamicScheme {
	constructor(sourceColorHct, isDark, contrastLevel) {
		super({
			sourceColorArgb: /* @__PURE__ */ sourceColorHct.toInt(),
			variant: Variant.VIBRANT,
			contrastLevel,
			isDark,
			primaryPalette: /* @__PURE__ */ TonalPalette.fromHueAndChroma(sourceColorHct.hue, 200),
			secondaryPalette: /* @__PURE__ */ TonalPalette.fromHueAndChroma(/* @__PURE__ */ DynamicScheme.getRotatedHue(sourceColorHct, SchemeVibrant.hues, SchemeVibrant.secondaryRotations), 24),
			tertiaryPalette: /* @__PURE__ */ TonalPalette.fromHueAndChroma(/* @__PURE__ */ DynamicScheme.getRotatedHue(sourceColorHct, SchemeVibrant.hues, SchemeVibrant.tertiaryRotations), 32),
			neutralPalette: /* @__PURE__ */ TonalPalette.fromHueAndChroma(sourceColorHct.hue, 10),
			neutralVariantPalette: /* @__PURE__ */ TonalPalette.fromHueAndChroma(sourceColorHct.hue, 12)
		});
	}
};
SchemeVibrant.hues = [
	0,
	41,
	61,
	101,
	131,
	181,
	251,
	301,
	360
];
SchemeVibrant.secondaryRotations = [
	18,
	15,
	10,
	12,
	15,
	18,
	15,
	12,
	12
];
SchemeVibrant.tertiaryRotations = [
	35,
	30,
	20,
	25,
	30,
	35,
	30,
	25,
	25
];
var SCORE_OPTION_DEFAULTS = {
	desired: 4,
	fallbackColorARGB: 4282549748,
	filter: true
};
function compare(a$1, b$1) {
	if (a$1.score > b$1.score) return -1;
	else if (a$1.score < b$1.score) return 1;
	return 0;
}
var Score = class Score {
	constructor() {}
	static score(colorsToPopulation, options) {
		const { desired, fallbackColorARGB, filter } = {
			...SCORE_OPTION_DEFAULTS,
			...options
		};
		const colorsHct = [];
		const huePopulation = /* @__PURE__ */ new Array(360).fill(0);
		let populationSum = 0;
		for (const [argb, population] of colorsToPopulation.entries()) {
			const hct = /* @__PURE__ */ Hct.fromInt(argb);
			colorsHct.push(hct);
			const hue = /* @__PURE__ */ Math.floor(hct.hue);
			huePopulation[hue] += population;
			populationSum += population;
		}
		const hueExcitedProportions = /* @__PURE__ */ new Array(360).fill(0);
		for (let hue = 0; hue < 360; hue++) {
			const proportion = huePopulation[hue] / populationSum;
			for (let i = hue - 14; i < hue + 16; i++) {
				const neighborHue = /* @__PURE__ */ sanitizeDegreesInt(i);
				hueExcitedProportions[neighborHue] += proportion;
			}
		}
		const scoredHct = new Array();
		for (const hct of colorsHct) {
			const proportion = hueExcitedProportions[sanitizeDegreesInt(/* @__PURE__ */ Math.round(hct.hue))];
			if (filter && (hct.chroma < Score.CUTOFF_CHROMA || proportion <= Score.CUTOFF_EXCITED_PROPORTION)) continue;
			const proportionScore = proportion * 100 * Score.WEIGHT_PROPORTION;
			const chromaWeight = hct.chroma < Score.TARGET_CHROMA ? Score.WEIGHT_CHROMA_BELOW : Score.WEIGHT_CHROMA_ABOVE;
			const score = proportionScore + (hct.chroma - Score.TARGET_CHROMA) * chromaWeight;
			scoredHct.push({
				hct,
				score
			});
		}
		scoredHct.sort(compare);
		const chosenColors = [];
		for (let differenceDegrees$1 = 90; differenceDegrees$1 >= 15; differenceDegrees$1--) {
			chosenColors.length = 0;
			for (const { hct } of scoredHct) {
				if (!chosenColors.find((chosenHct) => {
					return differenceDegrees(hct.hue, chosenHct.hue) < differenceDegrees$1;
				})) chosenColors.push(hct);
				if (chosenColors.length >= desired) break;
			}
			if (chosenColors.length >= desired) break;
		}
		const colors = [];
		if (chosenColors.length === 0) colors.push(fallbackColorARGB);
		for (const chosenHct of chosenColors) colors.push(/* @__PURE__ */ chosenHct.toInt());
		return colors;
	}
};
Score.TARGET_CHROMA = 48;
Score.WEIGHT_PROPORTION = .7;
Score.WEIGHT_CHROMA_ABOVE = .3;
Score.WEIGHT_CHROMA_BELOW = .1;
Score.CUTOFF_CHROMA = 5;
Score.CUTOFF_EXCITED_PROPORTION = .01;
function argbFromHex(hex$1) {
	hex$1 = /* @__PURE__ */ hex$1.replace("#", "");
	const isThree = hex$1.length === 3;
	const isSix = hex$1.length === 6;
	const isEight = hex$1.length === 8;
	if (!isThree && !isSix && !isEight) throw new Error("unexpected hex " + hex$1);
	let r = 0;
	let g = 0;
	let b$1 = 0;
	if (isThree) {
		r = /* @__PURE__ */ parseIntHex(/* @__PURE__ */ hex$1.slice(0, 1).repeat(2));
		g = /* @__PURE__ */ parseIntHex(/* @__PURE__ */ hex$1.slice(1, 2).repeat(2));
		b$1 = /* @__PURE__ */ parseIntHex(/* @__PURE__ */ hex$1.slice(2, 3).repeat(2));
	} else if (isSix) {
		r = /* @__PURE__ */ parseIntHex(/* @__PURE__ */ hex$1.slice(0, 2));
		g = /* @__PURE__ */ parseIntHex(/* @__PURE__ */ hex$1.slice(2, 4));
		b$1 = /* @__PURE__ */ parseIntHex(/* @__PURE__ */ hex$1.slice(4, 6));
	} else if (isEight) {
		r = /* @__PURE__ */ parseIntHex(/* @__PURE__ */ hex$1.slice(2, 4));
		g = /* @__PURE__ */ parseIntHex(/* @__PURE__ */ hex$1.slice(4, 6));
		b$1 = /* @__PURE__ */ parseIntHex(/* @__PURE__ */ hex$1.slice(6, 8));
	}
	return (255 << 24 | (r & 255) << 16 | (g & 255) << 8 | b$1 & 255) >>> 0;
}
function parseIntHex(value) {
	return parseInt(value, 16);
}
var tones$1 = {
	"0": true,
	"10": true,
	"20": true,
	"30": true,
	"40": true,
	"50": true,
	"60": true,
	"70": true,
	"80": true,
	"90": true,
	"95": true,
	"100": true
};
var rgbFromArgb = (argb) => {
	const rgba$1 = /* @__PURE__ */ rgbaFromArgb(argb);
	return [
		rgba$1.r,
		rgba$1.g,
		rgba$1.b
	];
};
var isKeyColor = (k) => {
	return {
		primary: true,
		secondary: true,
		tertiary: true,
		error: true,
		warning: true,
		success: true
	}[k];
};
var Palette = class Palette {
	static toHEX = (n) => {
		return `#${rgbFromArgb(n).map((v) => padStart(/* @__PURE__ */ v.toString(16), 2, "0")).join("")}`;
	};
	static createRoleColorRuleBuilder(mode) {
		const rules = {};
		const x = new Proxy({}, { get(_, prop) {
			if (prop == "build") return () => rules;
			return (role, rule) => {
				rules[`${role}${mode ? `:${mode}` : ""}`] = rule;
				return x;
			};
		} });
		return x;
	}
	static createRoleColorSourcePicker() {
		return new Proxy({}, { get(_, prop) {
			return (tone) => [prop, tone];
		} });
	}
	static fromColors = (colors) => {
		const { primary, secondary, tertiary, neutral, neutralVariant, error,...otherColors } = colors;
		const palette = /* @__PURE__ */ CorePalette.contentFromColors({
			primary: /* @__PURE__ */ argbFromHex(primary),
			secondary: secondary ? argbFromHex(secondary) : void 0,
			tertiary: tertiary ? argbFromHex(tertiary) : void 0,
			error: error ? argbFromHex(error) : void 0
		});
		if (neutral) palette.n1 = /* @__PURE__ */ TonalPalette.fromHueAndChroma(/* @__PURE__ */ argbFromHex(neutral), 4);
		if (neutralVariant) palette.n2 = /* @__PURE__ */ TonalPalette.fromHueAndChroma(/* @__PURE__ */ argbFromHex(neutralVariant), 8);
		return new Palette({
			primary: palette.a1,
			secondary: palette.a2,
			tertiary: palette.a3,
			neutral: palette.n1,
			neutralVariant: palette.n2,
			error: palette.error,
			...mapValues(otherColors, (v) => TonalPalette.fromInt(/* @__PURE__ */ argbFromHex(v)))
		});
	};
	constructor(seeds) {
		this.seeds = seeds;
	}
	normalizeRoleRules(rules = {}) {
		const seed = /* @__PURE__ */ Palette.createRoleColorSourcePicker();
		let defaultRoleRules = /* @__PURE__ */ Palette.createRoleColorRuleBuilder().rule("shadow", /* @__PURE__ */ seed.neutral(0)).rule("scrim", /* @__PURE__ */ seed.neutral(0)).rule("outline", /* @__PURE__ */ seed.neutralVariant(87)).rule("outline-variant", /* @__PURE__ */ seed.neutralVariant(80)).rule("surface", /* @__PURE__ */ seed.neutral(99)).rule("on-surface", /* @__PURE__ */ seed.neutral(10)).rule("surface-variant", /* @__PURE__ */ seed.neutralVariant(90)).rule("on-surface-variant", /* @__PURE__ */ seed.neutralVariant(30)).rule("surface-dim", /* @__PURE__ */ seed.neutral(87)).rule("surface-bright", /* @__PURE__ */ seed.neutral(98)).rule("surface-container-lowest", /* @__PURE__ */ seed.neutral(100)).rule("surface-container-low", /* @__PURE__ */ seed.neutral(96)).rule("surface-container", /* @__PURE__ */ seed.neutral(94)).rule("surface-container-high", /* @__PURE__ */ seed.neutral(92)).rule("surface-container-highest", /* @__PURE__ */ seed.neutral(90)).rule("inverse-surface", /* @__PURE__ */ seed.neutral(20)).rule("inverse-on-surface", /* @__PURE__ */ seed.neutral(95)).rule("inverse-primary", /* @__PURE__ */ seed.primary(80));
		let darkRoleRules = /* @__PURE__ */ Palette.createRoleColorRuleBuilder("dark").rule("shadow", /* @__PURE__ */ seed.neutral(0)).rule("scrim", /* @__PURE__ */ seed.neutral(0)).rule("outline", /* @__PURE__ */ seed.neutralVariant(60)).rule("outline-variant", /* @__PURE__ */ seed.neutralVariant(30)).rule("surface", /* @__PURE__ */ seed.neutral(10)).rule("on-surface", /* @__PURE__ */ seed.neutral(90)).rule("surface-variant", /* @__PURE__ */ seed.neutralVariant(30)).rule("on-surface-variant", /* @__PURE__ */ seed.neutralVariant(80)).rule("surface-dim", /* @__PURE__ */ seed.neutral(6)).rule("surface-bright", /* @__PURE__ */ seed.neutral(24)).rule("surface-container-lowest", /* @__PURE__ */ seed.neutral(4)).rule("surface-container-low", /* @__PURE__ */ seed.neutral(10)).rule("surface-container", /* @__PURE__ */ seed.neutral(12)).rule("surface-container-high", /* @__PURE__ */ seed.neutral(17)).rule("surface-container-highest", /* @__PURE__ */ seed.neutral(22)).rule("inverse-surface", /* @__PURE__ */ seed.neutral(90)).rule("inverse-on-surface", /* @__PURE__ */ seed.neutral(20)).rule("inverse-primary", /* @__PURE__ */ seed.primary(40));
		for (const name in this.seeds) {
			if (name.startsWith("neutral")) continue;
			defaultRoleRules = /* @__PURE__ */ defaultRoleRules.rule(name, /* @__PURE__ */ seed[name](40)).rule(`on-${name}`, /* @__PURE__ */ seed[name](100)).rule(`${name}-container`, /* @__PURE__ */ seed[name](90)).rule(`on-${name}-container`, /* @__PURE__ */ seed[name](10));
			darkRoleRules = /* @__PURE__ */ darkRoleRules.rule(name, /* @__PURE__ */ seed[name](80)).rule(`on-${name}`, /* @__PURE__ */ seed[name](20)).rule(`${name}-container`, /* @__PURE__ */ seed[name](30)).rule(`on-${name}-container`, /* @__PURE__ */ seed[name](90));
		}
		return {
			...defaultRoleRules.build(),
			...darkRoleRules.build(),
			...rules
		};
	}
	getThemeRoleColors(roleRules) {
		const themeColors = {};
		const darkThemeColors = {};
		for (const [role, [base, tone]] of Object.entries(roleRules)) if (this.seeds[base]) {
			if (role.endsWith(":dark")) {
				let r = role.split(":")[0];
				darkThemeColors[r] = tones$1[tone] ? `${String(base)}.${tone}` : this.seeds[base]?.tone(tone);
				continue;
			}
			themeColors[role] = tones$1[tone] ? `${String(base)}.${tone}` : this.seeds[base]?.tone(tone);
		}
		return [themeColors, darkThemeColors];
	}
	toDesignTokens(rules = {}) {
		const finalRules = /* @__PURE__ */ this.normalizeRoleRules(rules);
		const [themeColors, dartThemeColors] = this.getThemeRoleColors(finalRules);
		const sysColors = {};
		const containerStyles = {};
		for (const role in themeColors) {
			sysColors[`${role}`] = {
				_default: isNumber(themeColors[role]) ? rgbFromArgb(themeColors[role]) : themeColors[role],
				_dark: isNumber(dartThemeColors[role]) ? rgbFromArgb(dartThemeColors[role]) : dartThemeColors[role]
			};
			if (isKeyColor(role)) {
				containerStyles[`${role}`] = /* @__PURE__ */ DesignToken.mixin({
					bgColor: `sys.${role}`,
					color: `sys.on-${role}`
				});
				containerStyles[`${role}-container`] = /* @__PURE__ */ DesignToken.mixin({
					bgColor: `sys.${role}-container`,
					color: `sys.on-${role}-container`
				});
			}
			if (role.startsWith("surface")) {
				if (role.includes("container")) {
					containerStyles[`${role}`] = /* @__PURE__ */ DesignToken.mixin({
						bgColor: `sys.${role}`,
						color: "sys.on-surface"
					});
					continue;
				}
				containerStyles[`${role}`] = /* @__PURE__ */ DesignToken.mixin({
					bgColor: `sys.${role}`,
					color: "sys.on-surface"
				});
				containerStyles[`on-${role}`] = /* @__PURE__ */ DesignToken.mixin({
					bgColor: `sys.on-${role}`,
					color: "sys.inverse-on-surface"
				});
			}
		}
		const toTonalPalette = (t) => {
			return Object.keys(tones$1).reduce((ret, tone) => Object.assign(ret, { [tone]: /* @__PURE__ */ rgbFromArgb(/* @__PURE__ */ t.tone(/* @__PURE__ */ parseInt(tone))) }), {});
		};
		return {
			color: /* @__PURE__ */ DesignToken.color({
				...mapValues(this.seeds, (tp) => toTonalPalette(tp)),
				white: [
					255,
					255,
					255
				],
				black: [
					0,
					0,
					0
				],
				sys: sysColors
			}),
			containerStyle: /* @__PURE__ */ DesignToken.customMixin("containerStyle", { sys: containerStyles })
		};
	}
};
const rounded = /* @__PURE__ */ DesignToken.rounded({
	xs: 4,
	sm: 8,
	md: 12,
	lg: 16,
	xl: 28
});
const typography = {
	font: /* @__PURE__ */ DesignToken.font({
		brand: /* @__PURE__ */ [
			"-apple-system",
			"BlinkMacSystemFont",
			"\"Segoe UI\"",
			"Roboto",
			"\"Helvetica Neue\"",
			"Arial",
			"sans-serif",
			"\"Apple Color Emoji\"",
			"\"Segoe UI Emoji\"",
			"\"Segoe UI Symbol\""
		].join(","),
		plain: /* @__PURE__ */ [
			"-apple-system",
			"BlinkMacSystemFont",
			"\"Segoe UI\"",
			"Roboto",
			"\"Helvetica Neue\"",
			"Arial",
			"sans-serif",
			"\"Apple Color Emoji\"",
			"\"Segoe UI Emoji\"",
			"\"Segoe UI Symbol\""
		].join(","),
		code: /* @__PURE__ */ [
			`'Lucida Console'`,
			"Consolas",
			"Monaco",
			`'Andale Mono'`,
			`'Ubuntu Mono'`,
			"monospace"
		].join(",")
	}),
	fontWeight: /* @__PURE__ */ DesignToken.fontWeight({
		regular: 400,
		medium: 500,
		bold: 700
	}),
	textStyle: /* @__PURE__ */ DesignToken.customMixin("textStyle", { sys: {
		"display-large": /* @__PURE__ */ DesignToken.mixin({
			lineHeight: 64,
			fontSize: 57,
			letterSpacing: -.25,
			fontWeight: "regular",
			font: "brand"
		}),
		"display-medium": /* @__PURE__ */ DesignToken.mixin({
			lineHeight: 52,
			fontSize: 45,
			letterSpacing: 0,
			fontWeight: "regular",
			font: "brand"
		}),
		"display-small": /* @__PURE__ */ DesignToken.mixin({
			lineHeight: 44,
			fontSize: 36,
			letterSpacing: 0,
			fontWeight: "regular",
			font: "brand"
		}),
		"headline-large": /* @__PURE__ */ DesignToken.mixin({
			lineHeight: 40,
			fontSize: 32,
			letterSpacing: 0,
			fontWeight: "regular",
			font: "brand"
		}),
		"headline-medium": /* @__PURE__ */ DesignToken.mixin({
			lineHeight: 36,
			fontSize: 28,
			letterSpacing: 0,
			fontWeight: "regular",
			font: "brand"
		}),
		"headline-small": /* @__PURE__ */ DesignToken.mixin({
			lineHeight: 32,
			fontSize: 24,
			letterSpacing: 0,
			fontWeight: "regular",
			font: "plain"
		}),
		"title-large": /* @__PURE__ */ DesignToken.mixin({
			lineHeight: 28,
			fontSize: 22,
			letterSpacing: 0,
			fontWeight: "regular",
			font: "brand"
		}),
		"title-medium": /* @__PURE__ */ DesignToken.mixin({
			lineHeight: 24,
			fontSize: 16,
			letterSpacing: .15,
			fontWeight: "medium",
			font: "plain"
		}),
		"title-small": /* @__PURE__ */ DesignToken.mixin({
			lineHeight: 20,
			fontSize: 14,
			letterSpacing: .1,
			fontWeight: "medium",
			font: "plain"
		}),
		"label-large": /* @__PURE__ */ DesignToken.mixin({
			lineHeight: 20,
			fontSize: 14,
			letterSpacing: .1,
			fontWeight: "medium",
			font: "plain"
		}),
		"label-medium": /* @__PURE__ */ DesignToken.mixin({
			lineHeight: 16,
			fontSize: 12,
			letterSpacing: .5,
			fontWeight: "medium",
			font: "plain"
		}),
		"label-small": /* @__PURE__ */ DesignToken.mixin({
			lineHeight: 16,
			fontSize: 11,
			letterSpacing: .5,
			fontWeight: "medium",
			font: "plain"
		}),
		"body-large": /* @__PURE__ */ DesignToken.mixin({
			lineHeight: 24,
			fontSize: 16,
			letterSpacing: .5,
			fontWeight: "regular",
			font: "plain"
		}),
		"body-medium": /* @__PURE__ */ DesignToken.mixin({
			lineHeight: 20,
			fontSize: 14,
			letterSpacing: .25,
			fontWeight: "regular",
			font: "plain"
		}),
		"body-small": /* @__PURE__ */ DesignToken.mixin({
			lineHeight: 16,
			fontSize: 12,
			letterSpacing: .4,
			fontWeight: "regular",
			font: "plain"
		})
	} })
};
var seedColors = /* @__PURE__ */ Palette.fromColors({
	primary: "#1270f5",
	secondary: "#8a90a5",
	tertiary: "#b58391",
	neutral: "#5e5e5e",
	error: "#d93f23",
	warning: "#e69c00",
	success: "#5ac220"
});
const defaultTheme = {
	...typography,
	...motion,
	...elevation,
	rounded,
	...seedColors.toDesignTokens({})
};
const defaultTheming = /* @__PURE__ */ Theming.create(defaultTheme, { varPrefix: "vk" });
const ThemeProvider = /* @__PURE__ */ createProvider(() => defaultTheming, { name: "Theme" });
var isDevelopment = false;
function sheetForTag(tag) {
	if (tag.sheet) return tag.sheet;
	/* istanbul ignore next */ for (var i = 0; i < document.styleSheets.length; i++) if (document.styleSheets[i].ownerNode === tag) return document.styleSheets[i];
}
function createStyleElement(options) {
	var tag = /* @__PURE__ */ document.createElement("style");
	tag.setAttribute("data-emotion", options.key);
	if (options.nonce !== void 0) tag.setAttribute("nonce", options.nonce);
	tag.appendChild(/* @__PURE__ */ document.createTextNode(""));
	tag.setAttribute("data-s", "");
	return tag;
}
var StyleSheet = /* @__PURE__ */ function() {
	function StyleSheet$1(options) {
		var _this = this;
		this._insertTag = function(tag) {
			var before;
			if (_this.tags.length === 0) if (_this.insertionPoint) before = _this.insertionPoint.nextSibling;
			else if (_this.prepend) before = _this.container.firstChild;
			else before = _this.before;
			else before = _this.tags[_this.tags.length - 1].nextSibling;
			_this.container.insertBefore(tag, before);
			_this.tags.push(tag);
		};
		this.isSpeedy = options.speedy === void 0 ? !isDevelopment : options.speedy;
		this.tags = [];
		this.ctr = 0;
		this.nonce = options.nonce;
		this.key = options.key;
		this.container = options.container;
		this.prepend = options.prepend;
		this.insertionPoint = options.insertionPoint;
		this.before = null;
	}
	var _proto = StyleSheet$1.prototype;
	_proto.hydrate = function hydrate(nodes) {
		nodes.forEach(this._insertTag);
	};
	_proto.insert = function insert(rule) {
		if (this.ctr % (this.isSpeedy ? 65e3 : 1) === 0) this._insertTag(/* @__PURE__ */ createStyleElement(this));
		var tag = this.tags[this.tags.length - 1];
		if (this.isSpeedy) {
			var sheet = /* @__PURE__ */ sheetForTag(tag);
			try {
				sheet.insertRule(rule, sheet.cssRules.length);
			} catch (e) {}
		} else tag.appendChild(/* @__PURE__ */ document.createTextNode(rule));
		this.ctr++;
	};
	_proto.flush = function flush() {
		this.tags.forEach(function(tag) {
			var _tag$parentNode;
			return (_tag$parentNode = tag.parentNode) == null ? void 0 : _tag$parentNode.removeChild(tag);
		});
		this.tags = [];
		this.ctr = 0;
	};
	return StyleSheet$1;
}();
var MS = "-ms-";
var MOZ = "-moz-";
var WEBKIT = "-webkit-";
var COMMENT = "comm";
var RULESET = "rule";
var DECLARATION = "decl";
var IMPORT = "@import";
var KEYFRAMES = "@keyframes";
var LAYER = "@layer";
var abs = Math.abs;
var from = String.fromCharCode;
var assign = Object.assign;
function hash(value, length$1) {
	return charat(value, 0) ^ 45 ? (((length$1 << 2 ^ charat(value, 0)) << 2 ^ charat(value, 1)) << 2 ^ charat(value, 2)) << 2 ^ charat(value, 3) : 0;
}
function trim(value) {
	return value.trim();
}
function match(value, pattern) {
	return (value = /* @__PURE__ */ pattern.exec(value)) ? value[0] : value;
}
function replace(value, pattern, replacement) {
	return value.replace(pattern, replacement);
}
function indexof(value, search) {
	return value.indexOf(search);
}
function charat(value, index) {
	return value.charCodeAt(index) | 0;
}
function substr(value, begin, end) {
	return value.slice(begin, end);
}
function strlen(value) {
	return value.length;
}
function sizeof(value) {
	return value.length;
}
function append(value, array) {
	return array.push(value), value;
}
function combine(array, callback) {
	return array.map(callback).join("");
}
var line = 1;
var column = 1;
var length = 0;
var position = 0;
var character = 0;
var characters = "";
function node(value, root, parent, type, props, children, length$1) {
	return {
		value,
		root,
		parent,
		type,
		props,
		children,
		line,
		column,
		length: length$1,
		return: ""
	};
}
function copy$1(root, props) {
	return assign(/* @__PURE__ */ node("", null, null, "", null, null, 0), root, { length: -root.length }, props);
}
function char() {
	return character;
}
function prev() {
	character = position > 0 ? charat(characters, --position) : 0;
	if (column--, character === 10) column = 1, line--;
	return character;
}
function next() {
	character = position < length ? charat(characters, position++) : 0;
	if (column++, character === 10) column = 1, line++;
	return character;
}
function peek() {
	return charat(characters, position);
}
function caret() {
	return position;
}
function slice(begin, end) {
	return substr(characters, begin, end);
}
function token(type) {
	switch (type) {
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
function alloc(value) {
	return line = column = 1, length = /* @__PURE__ */ strlen(characters = value), position = 0, [];
}
function dealloc(value) {
	return characters = "", value;
}
function delimit(type) {
	return trim(/* @__PURE__ */ slice(position - 1, /* @__PURE__ */ delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
}
function whitespace(type) {
	while (character = /* @__PURE__ */ peek()) if (character < 33) next();
	else break;
	return token(type) > 2 || token(character) > 3 ? "" : " ";
}
function escaping(index, count) {
	while (--count && next()) if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97) break;
	return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32));
}
function delimiter(type) {
	while (next()) switch (character) {
		case type: return position;
		case 34:
		case 39:
			if (type !== 34 && type !== 39) delimiter(character);
			break;
		case 40:
			if (type === 41) delimiter(type);
			break;
		case 92:
			next();
			break;
	}
	return position;
}
function commenter(type, index) {
	while (next()) if (type + character === 57) break;
	else if (type + character === 84 && peek() === 47) break;
	return "/*" + slice(index, position - 1) + "*" + from(type === 47 ? type : next());
}
function identifier(index) {
	while (!token(/* @__PURE__ */ peek())) next();
	return slice(index, position);
}
function compile(value) {
	return dealloc(/* @__PURE__ */ parse("", null, null, null, [""], value = /* @__PURE__ */ alloc(value), 0, [0], value));
}
function parse(value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
	var index = 0;
	var offset$1 = 0;
	var length$1 = pseudo;
	var atrule = 0;
	var property = 0;
	var previous = 0;
	var variable = 1;
	var scanning = 1;
	var ampersand = 1;
	var character$1 = 0;
	var type = "";
	var props = rules;
	var children = rulesets;
	var reference = rule;
	var characters$1 = type;
	while (scanning) switch (previous = character$1, character$1 = /* @__PURE__ */ next()) {
		case 40: if (previous != 108 && charat(characters$1, length$1 - 1) == 58) {
			if (indexof(characters$1 += /* @__PURE__ */ replace(/* @__PURE__ */ delimit(character$1), "&", "&\f"), "&\f") != -1) ampersand = -1;
			break;
		}
		case 34:
		case 39:
		case 91:
			characters$1 += /* @__PURE__ */ delimit(character$1);
			break;
		case 9:
		case 10:
		case 13:
		case 32:
			characters$1 += /* @__PURE__ */ whitespace(previous);
			break;
		case 92:
			characters$1 += /* @__PURE__ */ escaping(caret() - 1, 7);
			continue;
		case 47:
			switch (peek()) {
				case 42:
				case 47:
					append(/* @__PURE__ */ comment(/* @__PURE__ */ commenter(/* @__PURE__ */ next(), /* @__PURE__ */ caret()), root, parent), declarations);
					break;
				default: characters$1 += "/";
			}
			break;
		case 123 * variable: points[index++] = strlen(characters$1) * ampersand;
		case 125 * variable:
		case 59:
		case 0:
			switch (character$1) {
				case 0:
				case 125: scanning = 0;
				case 59 + offset$1:
					if (ampersand == -1) characters$1 = /* @__PURE__ */ replace(characters$1, /\f/g, "");
					if (property > 0 && strlen(characters$1) - length$1) append(property > 32 ? declaration(characters$1 + ";", rule, parent, length$1 - 1) : declaration(replace(characters$1, " ", "") + ";", rule, parent, length$1 - 2), declarations);
					break;
				case 59: characters$1 += ";";
				default:
					append(reference = /* @__PURE__ */ ruleset(characters$1, root, parent, index, offset$1, rules, points, type, props = [], children = [], length$1), rulesets);
					if (character$1 === 123) if (offset$1 === 0) parse(characters$1, root, reference, reference, props, rulesets, length$1, points, children);
					else switch (atrule === 99 && charat(characters$1, 3) === 110 ? 100 : atrule) {
						case 100:
						case 108:
						case 109:
						case 115:
							parse(value, reference, reference, rule && append(/* @__PURE__ */ ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length$1), children), rules, children, length$1, points, rule ? props : children);
							break;
						default: parse(characters$1, reference, reference, reference, [""], children, 0, points, children);
					}
			}
			index = offset$1 = property = 0, variable = ampersand = 1, type = characters$1 = "", length$1 = pseudo;
			break;
		case 58: length$1 = 1 + strlen(characters$1), property = previous;
		default:
			if (variable < 1) {
				if (character$1 == 123) --variable;
				else if (character$1 == 125 && variable++ == 0 && prev() == 125) continue;
			}
			switch (characters$1 += /* @__PURE__ */ from(character$1), character$1 * variable) {
				case 38:
					ampersand = offset$1 > 0 ? 1 : (characters$1 += "\f", -1);
					break;
				case 44:
					points[index++] = (strlen(characters$1) - 1) * ampersand, ampersand = 1;
					break;
				case 64:
					if (peek() === 45) characters$1 += /* @__PURE__ */ delimit(/* @__PURE__ */ next());
					atrule = /* @__PURE__ */ peek(), offset$1 = length$1 = /* @__PURE__ */ strlen(type = characters$1 += /* @__PURE__ */ identifier(/* @__PURE__ */ caret())), character$1++;
					break;
				case 45: if (previous === 45 && strlen(characters$1) == 2) variable = 0;
			}
	}
	return rulesets;
}
function ruleset(value, root, parent, index, offset$1, rules, points, type, props, children, length$1) {
	var post = offset$1 - 1;
	var rule = offset$1 === 0 ? rules : [""];
	var size$2 = /* @__PURE__ */ sizeof(rule);
	for (var i = 0, j = 0, k = 0; i < index; ++i) for (var x = 0, y = /* @__PURE__ */ substr(value, post + 1, post = /* @__PURE__ */ abs(j = points[i])), z = value; x < size$2; ++x) if (z = /* @__PURE__ */ trim(j > 0 ? rule[x] + " " + y : replace(y, /&\f/g, rule[x]))) props[k++] = z;
	return node(value, root, parent, offset$1 === 0 ? RULESET : type, props, children, length$1);
}
function comment(value, root, parent) {
	return node(value, root, parent, COMMENT, /* @__PURE__ */ from(/* @__PURE__ */ char()), /* @__PURE__ */ substr(value, 2, -2), 0);
}
function declaration(value, root, parent, length$1) {
	return node(value, root, parent, DECLARATION, /* @__PURE__ */ substr(value, 0, length$1), /* @__PURE__ */ substr(value, length$1 + 1, -1), length$1);
}
function serialize(children, callback) {
	var output = "";
	var length$1 = /* @__PURE__ */ sizeof(children);
	for (var i = 0; i < length$1; i++) output += callback(children[i], i, children, callback) || "";
	return output;
}
function stringify(element, index, children, callback) {
	switch (element.type) {
		case LAYER: if (element.children.length) break;
		case IMPORT:
		case DECLARATION: return element.return = element.return || element.value;
		case COMMENT: return "";
		case KEYFRAMES: return element.return = element.value + "{" + serialize(element.children, callback) + "}";
		case RULESET: element.value = /* @__PURE__ */ element.props.join(",");
	}
	return strlen(children = /* @__PURE__ */ serialize(element.children, callback)) ? element.return = element.value + "{" + children + "}" : "";
}
function middleware(collection) {
	var length$1 = /* @__PURE__ */ sizeof(collection);
	return function(element, index, children, callback) {
		var output = "";
		for (var i = 0; i < length$1; i++) output += collection[i](element, index, children, callback) || "";
		return output;
	};
}
function rulesheet(callback) {
	return function(element) {
		if (!element.root) {
			if (element = element.return) callback(element);
		}
	};
}
var identifierWithPointTracking = function identifierWithPointTracking$1(begin, points, index) {
	var previous = 0;
	var character$1 = 0;
	while (true) {
		previous = character$1;
		character$1 = /* @__PURE__ */ peek();
		if (previous === 38 && character$1 === 12) points[index] = 1;
		if (token(character$1)) break;
		next();
	}
	return slice(begin, position);
};
var toRules = function toRules$1(parsed, points) {
	var index = -1;
	var character$1 = 44;
	do
		switch (token(character$1)) {
			case 0:
				if (character$1 === 38 && peek() === 12) points[index] = 1;
				parsed[index] += /* @__PURE__ */ identifierWithPointTracking(position - 1, points, index);
				break;
			case 2:
				parsed[index] += /* @__PURE__ */ delimit(character$1);
				break;
			case 4: if (character$1 === 44) {
				parsed[++index] = peek() === 58 ? "&\f" : "";
				points[index] = parsed[index].length;
				break;
			}
			default: parsed[index] += /* @__PURE__ */ from(character$1);
		}
	while (character$1 = /* @__PURE__ */ next());
	return parsed;
};
var getRules = function getRules$1(value, points) {
	return dealloc(/* @__PURE__ */ toRules(/* @__PURE__ */ alloc(value), points));
};
var fixedElements = /* @__PURE__ */ new WeakMap();
var compat = function compat$1(element) {
	if (element.type !== "rule" || !element.parent || element.length < 1) return;
	var value = element.value;
	var parent = element.parent;
	var isImplicitRule = element.column === parent.column && element.line === parent.line;
	while (parent.type !== "rule") {
		parent = parent.parent;
		if (!parent) return;
	}
	if (element.props.length === 1 && value.charCodeAt(0) !== 58 && !fixedElements.get(parent)) return;
	if (isImplicitRule) return;
	fixedElements.set(element, true);
	var points = [];
	var rules = /* @__PURE__ */ getRules(value, points);
	var parentRules = parent.props;
	for (var i = 0, k = 0; i < rules.length; i++) for (var j = 0; j < parentRules.length; j++, k++) element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
};
var removeLabel = function removeLabel$1(element) {
	if (element.type === "decl") {
		var value = element.value;
		if (value.charCodeAt(0) === 108 && value.charCodeAt(2) === 98) {
			element["return"] = "";
			element.value = "";
		}
	}
};
function prefix(value, length$1) {
	switch (hash(value, length$1)) {
		case 5103: return WEBKIT + "print-" + value + value;
		case 5737:
		case 4201:
		case 3177:
		case 3433:
		case 1641:
		case 4457:
		case 2921:
		case 5572:
		case 6356:
		case 5844:
		case 3191:
		case 6645:
		case 3005:
		case 6391:
		case 5879:
		case 5623:
		case 6135:
		case 4599:
		case 4855:
		case 4215:
		case 6389:
		case 5109:
		case 5365:
		case 5621:
		case 3829: return WEBKIT + value + value;
		case 5349:
		case 4246:
		case 4810:
		case 6968:
		case 2756: return WEBKIT + value + MOZ + value + MS + value + value;
		case 6828:
		case 4268: return WEBKIT + value + MS + value + value;
		case 6165: return WEBKIT + value + MS + "flex-" + value + value;
		case 5187: return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + "box-$1$2" + MS + "flex-$1$2") + value;
		case 5443: return WEBKIT + value + MS + "flex-item-" + replace(value, /flex-|-self/, "") + value;
		case 4675: return WEBKIT + value + MS + "flex-line-pack" + replace(value, /align-content|flex-|-self/, "") + value;
		case 5548: return WEBKIT + value + MS + replace(value, "shrink", "negative") + value;
		case 5292: return WEBKIT + value + MS + replace(value, "basis", "preferred-size") + value;
		case 6060: return WEBKIT + "box-" + replace(value, "-grow", "") + WEBKIT + value + MS + replace(value, "grow", "positive") + value;
		case 4554: return WEBKIT + replace(value, /([^-])(transform)/g, "$1" + WEBKIT + "$2") + value;
		case 6187: return replace(/* @__PURE__ */ replace(/* @__PURE__ */ replace(value, /(zoom-|grab)/, WEBKIT + "$1"), /(image-set)/, WEBKIT + "$1"), value, "") + value;
		case 5495:
		case 3959: return replace(value, /(image-set\([^]*)/, WEBKIT + "$1$`$1");
		case 4968: return replace(/* @__PURE__ */ replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + "box-pack:$3" + MS + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + WEBKIT + value + value;
		case 4095:
		case 3583:
		case 4068:
		case 2532: return replace(value, /(.+)-inline(.+)/, WEBKIT + "$1$2") + value;
		case 8116:
		case 7059:
		case 5753:
		case 5535:
		case 5445:
		case 5701:
		case 4933:
		case 4677:
		case 5533:
		case 5789:
		case 5021:
		case 4765:
			if (strlen(value) - 1 - length$1 > 6) switch (charat(value, length$1 + 1)) {
				case 109: if (charat(value, length$1 + 4) !== 45) break;
				case 102: return replace(value, /(.+:)(.+)-([^]+)/, "$1" + WEBKIT + "$2-$3$1" + MOZ + (charat(value, length$1 + 3) == 108 ? "$3" : "$2-$3")) + value;
				case 115: return ~indexof(value, "stretch") ? prefix(/* @__PURE__ */ replace(value, "stretch", "fill-available"), length$1) + value : value;
			}
			break;
		case 4949: if (charat(value, length$1 + 1) !== 115) break;
		case 6444:
			switch (charat(value, strlen(value) - 3 - (~indexof(value, "!important") && 10))) {
				case 107: return replace(value, ":", ":" + WEBKIT) + value;
				case 101: return replace(value, /(.+:)([^;!]+)(;|!.+)?/, "$1" + WEBKIT + (charat(value, 14) === 45 ? "inline-" : "") + "box$3$1" + WEBKIT + "$2$3$1" + MS + "$2box$3") + value;
			}
			break;
		case 5936:
			switch (charat(value, length$1 + 11)) {
				case 114: return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb") + value;
				case 108: return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb-rl") + value;
				case 45: return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "lr") + value;
			}
			return WEBKIT + value + MS + value + value;
	}
	return value;
}
var defaultStylisPlugins = [function prefixer(element, index, children, callback) {
	if (element.length > -1) {
		if (!element["return"]) switch (element.type) {
			case DECLARATION:
				element["return"] = /* @__PURE__ */ prefix(element.value, element.length);
				break;
			case KEYFRAMES: return serialize([/* @__PURE__ */ copy$1(element, { value: /* @__PURE__ */ replace(element.value, "@", "@" + WEBKIT) })], callback);
			case RULESET: if (element.length) return combine(element.props, function(value) {
				switch (match(value, /(::plac\w+|:read-\w+)/)) {
					case ":read-only":
					case ":read-write": return serialize([/* @__PURE__ */ copy$1(element, { props: [/* @__PURE__ */ replace(value, /:(read-\w+)/, ":" + MOZ + "$1")] })], callback);
					case "::placeholder": return serialize([
						/* @__PURE__ */ copy$1(element, { props: [/* @__PURE__ */ replace(value, /:(plac\w+)/, ":" + WEBKIT + "input-$1")] }),
						/* @__PURE__ */ copy$1(element, { props: [/* @__PURE__ */ replace(value, /:(plac\w+)/, ":" + MOZ + "$1")] }),
						/* @__PURE__ */ copy$1(element, { props: [/* @__PURE__ */ replace(value, /:(plac\w+)/, MS + "input-$1")] })
					], callback);
				}
				return "";
			});
		}
	}
}];
var createCache = function createCache$1(options) {
	var key = options.key;
	if (key === "css") {
		var ssrStyles = /* @__PURE__ */ document.querySelectorAll("style[data-emotion]:not([data-s])");
		Array.prototype.forEach.call(ssrStyles, function(node$1) {
			if (node$1.getAttribute("data-emotion").indexOf(" ") === -1) return;
			document.head.appendChild(node$1);
			node$1.setAttribute("data-s", "");
		});
	}
	var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;
	var inserted = {};
	var container;
	var nodesToHydrate = [];
	container = options.container || document.head;
	Array.prototype.forEach.call(/* @__PURE__ */ document.querySelectorAll("style[data-emotion^=\"" + key + " \"]"), function(node$1) {
		var attrib = /* @__PURE__ */ node$1.getAttribute("data-emotion").split(" ");
		for (var i = 1; i < attrib.length; i++) inserted[attrib[i]] = true;
		nodesToHydrate.push(node$1);
	});
	var _insert;
	var omnipresentPlugins = [compat, removeLabel];
	var currentSheet;
	var finalizingPlugins = [stringify, /* @__PURE__ */ rulesheet(function(rule) {
		currentSheet.insert(rule);
	})];
	var serializer = /* @__PURE__ */ middleware(/* @__PURE__ */ omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));
	var stylis = function stylis$1(styles) {
		return serialize(/* @__PURE__ */ compile(styles), serializer);
	};
	_insert = function insert(selector, serialized, sheet, shouldCache) {
		currentSheet = sheet;
		stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
		if (shouldCache) cache.inserted[serialized.name] = true;
	};
	var cache = {
		key,
		sheet: new StyleSheet({
			key,
			container,
			nonce: options.nonce,
			speedy: options.speedy,
			prepend: options.prepend,
			insertionPoint: options.insertionPoint
		}),
		nonce: options.nonce,
		inserted,
		registered: {},
		insert: _insert
	};
	cache.sheet.hydrate(nodesToHydrate);
	return cache;
};
var isBrowser = true;
var registerStyles = function registerStyles$1(cache, serialized, isStringTag) {
	var className = cache.key + "-" + serialized.name;
	if ((isStringTag === false || isBrowser === false) && cache.registered[className] === void 0) cache.registered[className] = serialized.styles;
};
var insertStyles = function insertStyles$1(cache, serialized, isStringTag) {
	registerStyles(cache, serialized, isStringTag);
	var className = cache.key + "-" + serialized.name;
	if (cache.inserted[serialized.name] === void 0) {
		var current = serialized;
		do {
			cache.insert(serialized === current ? "." + className : "", current, cache.sheet, true);
			current = current.next;
		} while (current !== void 0);
	}
};
const CacheProvider = /* @__PURE__ */ createProvider(() => createCache({ key: "css" }), { name: "Cache" });
const useInsertStyles = (cache) => {
	return (props) => {
		if (!props.serialized) return;
		if (props.withoutScoping) cache.insert("", props.serialized, cache.sheet, true);
		else insertStyles(cache, props.serialized, props.isStringTag ?? true);
	};
};
var Box = /* @__PURE__ */ component({
	sx: /* @__PURE__ */ custom(),
	component: /* @__PURE__ */ custom().optional().default("div")
}, (props, { slots, expose }) => {
	const theme = /* @__PURE__ */ ThemeProvider.use();
	const cache = /* @__PURE__ */ CacheProvider.use();
	const serialized = /* @__PURE__ */ theme.unstable_css(cache, props.sx ?? {});
	const className = () => {
		return serialized.name !== "0" ? `${cache.key}-${serialized.name}` : "";
	};
	const insertStyle = /* @__PURE__ */ useInsertStyles(cache);
	onMounted(() => {
		insertStyle({
			serialized,
			isStringTag: true
		});
	});
	const forwardRef = /* @__PURE__ */ ref$1(null);
	expose({ [SymbolForwardRef]: forwardRef });
	return () => {
		return /* @__PURE__ */ jsx(props.component ?? "div", {
			ref: forwardRef,
			class: /* @__PURE__ */ className(),
			children: slots
		});
	};
});
function styled(...args) {
	let defaultComponent = "div";
	let finalPropTypes = {};
	let finalSetup = void 0;
	let finalOptions = {};
	for (const arg of args) {
		if (isFunction(arg)) {
			finalSetup = arg;
			continue;
		}
		if (isString(arg) || isComponent(arg)) {
			defaultComponent = arg;
			continue;
		}
		if (isUndefined(finalSetup) && isPropTypes(arg)) finalPropTypes = arg;
		else finalOptions = arg;
	}
	finalSetup ??= (props, ctx) => (Wrap) => {
		const dataProps = {};
		for (const prop in props) {
			if (prop === "component" || prop === "sx") continue;
			if (props[prop]) dataProps[`data-${prop}`] = props[prop];
		}
		return /* @__PURE__ */ jsx(Wrap, {
			...dataProps,
			children: ctx.slots
		});
	};
	return (presetSx) => {
		const c$1 = Object.assign(/* @__PURE__ */ component({
			...finalPropTypes,
			sx: /* @__PURE__ */ custom().optional(),
			component: /* @__PURE__ */ custom().optional()
		}, (props, ctx) => {
			const theme = /* @__PURE__ */ ThemeProvider.use();
			const cache = /* @__PURE__ */ CacheProvider.use();
			const insertCSS = /* @__PURE__ */ useInsertStyles(cache);
			const sxClassNameRef = /* @__PURE__ */ shallowRef("");
			const presetSxSerialized = /* @__PURE__ */ theme.unstable_css(cache, presetSx);
			const className = () => {
				return (presetSxSerialized.name !== "0" ? `${cache.key}-${presetSxSerialized.name}${sxClassNameRef.value}` : `${sxClassNameRef.value}`) + (c$1.name ? ` ${c$1.name}` : "");
			};
			if (defaultComponent.__styled) {
				const serialized = /* @__PURE__ */ theme.unstable_css(cache, props.sx ?? {});
				if (serialized.name !== "0") sxClassNameRef.value = ` ${cache.key}-${serialized.name}`;
				onMounted(() => {
					insertCSS({
						serialized: presetSxSerialized,
						isStringTag: true
					});
					insertCSS({
						serialized,
						isStringTag: true
					});
				});
			} else onBeforeMount(() => {
				insertCSS({
					serialized: presetSxSerialized,
					isStringTag: true
				});
			});
			const render = /* @__PURE__ */ finalSetup(props, ctx);
			const forwardRef = /* @__PURE__ */ ref$1(null);
			ctx.expose({ [SymbolForwardRef]: forwardRef });
			return () => {
				if (defaultComponent.__styled) {
					const ret$1 = /* @__PURE__ */ render(defaultComponent);
					if (ret$1) return cloneVNode(ret$1, {
						component: props.component,
						ref: forwardRef,
						class: /* @__PURE__ */ className()
					});
					return null;
				}
				const ret = /* @__PURE__ */ render(Box);
				if (ret) return cloneVNode(ret, {
					component: props.component || defaultComponent,
					sx: props.sx,
					ref: forwardRef,
					class: /* @__PURE__ */ className()
				});
				return null;
			};
		}, finalOptions), { __styled: true });
		c$1.toString = () => {
			return `.${c$1.name}`;
		};
		return c$1;
	};
}
var GlobalStyle = /* @__PURE__ */ component(({ styles }) => {
	const theme = /* @__PURE__ */ ThemeProvider.use();
	const cache = /* @__PURE__ */ CacheProvider.use();
	const insert = /* @__PURE__ */ useInsertStyles(cache);
	const serialized = /* @__PURE__ */ theme.unstable_css(cache, isString(styles) ? { "&": styles } : styles);
	onBeforeMount(() => {
		insert({
			serialized,
			withoutScoping: true
		});
	});
	return () => null;
}, {
	displayName: "GlobalStyle",
	props: ["styles"]
});
var CSSReset = /* @__PURE__ */ component(() => {
	const rootVars = ThemeProvider.use().rootCSSVars;
	return () => {
		return /* @__PURE__ */ jsx(GlobalStyle, { styles: {
			":host, :root, [data-theme]": rootVars,
			"*, *::after, *::before": { boxSizing: "border-box" },
			html: { fontSize: "10px" },
			a: { color: "inherit" },
			body: { textStyle: "sys.body-medium" }
		} });
	};
}, { displayName: "CSSReset" });
const OverlaySettingProvider = /* @__PURE__ */ createProvider(() => {
	return { mountPoint: () => document.body };
}, { name: "OverlaySetting" });
var OverlayProvider = /* @__PURE__ */ createProvider(() => {
	return new OverlayContext(ref(null), ref(null), () => false);
}, { name: "Overlay" });
var OverlayContext = class {
	children = [];
	constructor(triggerRef, contentRef, isOpen) {
		this.triggerRef = triggerRef;
		this.contentRef = contentRef;
		this.isOpen = isOpen;
	}
	add = (p$1) => {
		this.children = [...this.children, p$1];
		return () => {
			this.children = /* @__PURE__ */ this.children.filter((c$1) => c$1 !== p$1);
		};
	};
	isClickInside = (event) => {
		for (const child of this.children) if (child.isClickInside(event)) return true;
		const triggerEl = /* @__PURE__ */ unref(this.triggerRef);
		const contentEl = /* @__PURE__ */ unref(this.contentRef);
		return triggerEl && (triggerEl === event.target || event.composedPath().includes(triggerEl)) || contentEl && (contentEl === event.target || event.composedPath().includes(contentEl));
	};
	topmost() {
		return this.children.filter((c$1) => c$1.isOpen()).length === 0;
	}
};
var Overlay = /* @__PURE__ */ component((props, { slots, attrs, emit }) => {
	const contentRef = props.contentRef || ref(null);
	const popperContext = new OverlayContext(props.triggerRef ?? ref(null), contentRef, () => !!props.isOpen);
	const setting = /* @__PURE__ */ OverlaySettingProvider.use();
	onBeforeUnmount(/* @__PURE__ */ OverlayProvider.use().add(popperContext));
	if (window) rx(/* @__PURE__ */ toObservable(contentRef, "value"), /* @__PURE__ */ tapEffect((contentEl) => {
		if (!contentEl) return;
		const handleClickOutside = (event) => {
			if (popperContext.isClickInside(event)) return;
			emit("click-outside", event);
		};
		window.addEventListener("pointerdown", handleClickOutside);
		return () => {
			window.removeEventListener("pointerdown", handleClickOutside);
		};
	}), /* @__PURE__ */ tapEffect((contentEl) => {
		if (!contentEl) return;
		const handleEscKeydown = (event) => {
			if (event.key === "Escape" && popperContext.topmost()) emit("esc-keydown", event);
		};
		window.addEventListener("keydown", handleEscKeydown);
		return () => {
			window.removeEventListener("keydown", handleEscKeydown);
		};
	}), /* @__PURE__ */ subscribeUntilUnmount());
	return () => {
		const content = props.isOpen ? cloneVNode(/* @__PURE__ */ jsx("div", {
			...attrs,
			ref: contentRef,
			style: props.style,
			children: /* @__PURE__ */ jsx(OverlayProvider, {
				value: popperContext,
				children: slots.default?.()
			})
		}), { onVnodeBeforeMount: () => {
			emit("content-before-mount");
		} }) : null;
		return /* @__PURE__ */ jsx(Teleport, {
			to: /* @__PURE__ */ setting.mountPoint(),
			children: slots.transition ? slots.transition({ content }) : content
		});
	};
}, {
	name: "Overlay",
	inheritAttrs: false
}, {
	displayName: "Overlay",
	props: [
		"isOpen",
		"style",
		"contentRef",
		"triggerRef"
	],
	emits: [
		"click-outside",
		"esc-keydown",
		"content-before-mount"
	]
});
var min = Math.min;
var max = Math.max;
var round = Math.round;
var floor = Math.floor;
var createCoords = (v) => ({
	x: v,
	y: v
});
var oppositeSideMap = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
};
var oppositeAlignmentMap = {
	start: "end",
	end: "start"
};
function clamp(start, value, end) {
	return max(start, /* @__PURE__ */ min(value, end));
}
function evaluate(value, param) {
	return typeof value === "function" ? value(param) : value;
}
function getSide(placement) {
	return placement.split("-")[0];
}
function getAlignment(placement) {
	return placement.split("-")[1];
}
function getOppositeAxis(axis) {
	return axis === "x" ? "y" : "x";
}
function getAxisLength(axis) {
	return axis === "y" ? "height" : "width";
}
var yAxisSides = /* @__PURE__ */ new Set(["top", "bottom"]);
function getSideAxis(placement) {
	return yAxisSides.has(/* @__PURE__ */ getSide(placement)) ? "y" : "x";
}
function getAlignmentAxis(placement) {
	return getOppositeAxis(/* @__PURE__ */ getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
	if (rtl === void 0) rtl = false;
	const alignment = /* @__PURE__ */ getAlignment(placement);
	const alignmentAxis = /* @__PURE__ */ getAlignmentAxis(placement);
	const length$1 = /* @__PURE__ */ getAxisLength(alignmentAxis);
	let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
	if (rects.reference[length$1] > rects.floating[length$1]) mainAlignmentSide = /* @__PURE__ */ getOppositePlacement(mainAlignmentSide);
	return [mainAlignmentSide, /* @__PURE__ */ getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
	const oppositePlacement = /* @__PURE__ */ getOppositePlacement(placement);
	return [
		/* @__PURE__ */ getOppositeAlignmentPlacement(placement),
		oppositePlacement,
		/* @__PURE__ */ getOppositeAlignmentPlacement(oppositePlacement)
	];
}
function getOppositeAlignmentPlacement(placement) {
	return placement.replace(/start|end/g, (alignment) => oppositeAlignmentMap[alignment]);
}
var lrPlacement = ["left", "right"];
var rlPlacement = ["right", "left"];
var tbPlacement = ["top", "bottom"];
var btPlacement = ["bottom", "top"];
function getSideList(side, isStart, rtl) {
	switch (side) {
		case "top":
		case "bottom":
			if (rtl) return isStart ? rlPlacement : lrPlacement;
			return isStart ? lrPlacement : rlPlacement;
		case "left":
		case "right": return isStart ? tbPlacement : btPlacement;
		default: return [];
	}
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
	const alignment = /* @__PURE__ */ getAlignment(placement);
	let list = /* @__PURE__ */ getSideList(/* @__PURE__ */ getSide(placement), direction === "start", rtl);
	if (alignment) {
		list = /* @__PURE__ */ list.map((side) => side + "-" + alignment);
		if (flipAlignment) list = /* @__PURE__ */ list.concat(/* @__PURE__ */ list.map(getOppositeAlignmentPlacement));
	}
	return list;
}
function getOppositePlacement(placement) {
	return placement.replace(/left|right|bottom|top/g, (side) => oppositeSideMap[side]);
}
function expandPaddingObject(padding) {
	return {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...padding
	};
}
function getPaddingObject(padding) {
	return typeof padding !== "number" ? expandPaddingObject(padding) : {
		top: padding,
		right: padding,
		bottom: padding,
		left: padding
	};
}
function rectToClientRect(rect) {
	const { x, y, width, height } = rect;
	return {
		width,
		height,
		top: y,
		left: x,
		right: x + width,
		bottom: y + height,
		x,
		y
	};
}
function computeCoordsFromPlacement(_ref, placement, rtl) {
	let { reference, floating } = _ref;
	const sideAxis = /* @__PURE__ */ getSideAxis(placement);
	const alignmentAxis = /* @__PURE__ */ getAlignmentAxis(placement);
	const alignLength = /* @__PURE__ */ getAxisLength(alignmentAxis);
	const side = /* @__PURE__ */ getSide(placement);
	const isVertical = sideAxis === "y";
	const commonX = reference.x + reference.width / 2 - floating.width / 2;
	const commonY = reference.y + reference.height / 2 - floating.height / 2;
	const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
	let coords;
	switch (side) {
		case "top":
			coords = {
				x: commonX,
				y: reference.y - floating.height
			};
			break;
		case "bottom":
			coords = {
				x: commonX,
				y: reference.y + reference.height
			};
			break;
		case "right":
			coords = {
				x: reference.x + reference.width,
				y: commonY
			};
			break;
		case "left":
			coords = {
				x: reference.x - floating.width,
				y: commonY
			};
			break;
		default: coords = {
			x: reference.x,
			y: reference.y
		};
	}
	switch (getAlignment(placement)) {
		case "start":
			coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
			break;
		case "end":
			coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
			break;
	}
	return coords;
}
var computePosition$1 = async (reference, floating, config) => {
	const { placement = "bottom", strategy = "absolute", middleware: middleware$1 = [], platform: platform$1 } = config;
	const validMiddleware = /* @__PURE__ */ middleware$1.filter(Boolean);
	const rtl = await (platform$1.isRTL == null ? void 0 : platform$1.isRTL(floating));
	let rects = await platform$1.getElementRects({
		reference,
		floating,
		strategy
	});
	let { x, y } = computeCoordsFromPlacement(rects, placement, rtl);
	let statefulPlacement = placement;
	let middlewareData = {};
	let resetCount = 0;
	for (let i = 0; i < validMiddleware.length; i++) {
		const { name, fn } = validMiddleware[i];
		const { x: nextX, y: nextY, data, reset } = await fn({
			x,
			y,
			initialPlacement: placement,
			placement: statefulPlacement,
			strategy,
			middlewareData,
			rects,
			platform: platform$1,
			elements: {
				reference,
				floating
			}
		});
		x = nextX != null ? nextX : x;
		y = nextY != null ? nextY : y;
		middlewareData = {
			...middlewareData,
			[name]: {
				...middlewareData[name],
				...data
			}
		};
		if (reset && resetCount <= 50) {
			resetCount++;
			if (typeof reset === "object") {
				if (reset.placement) statefulPlacement = reset.placement;
				if (reset.rects) rects = reset.rects === true ? await platform$1.getElementRects({
					reference,
					floating,
					strategy
				}) : reset.rects;
				({x, y} = /* @__PURE__ */ computeCoordsFromPlacement(rects, statefulPlacement, rtl));
			}
			i = -1;
		}
	}
	return {
		x,
		y,
		placement: statefulPlacement,
		strategy,
		middlewareData
	};
};
async function detectOverflow(state, options) {
	var _await$platform$isEle;
	if (options === void 0) options = {};
	const { x, y, platform: platform$1, rects, elements, strategy } = state;
	const { boundary = "clippingAncestors", rootBoundary = "viewport", elementContext = "floating", altBoundary = false, padding = 0 } = evaluate(options, state);
	const paddingObject = /* @__PURE__ */ getPaddingObject(padding);
	const element = elements[altBoundary ? elementContext === "floating" ? "reference" : "floating" : elementContext];
	const clippingClientRect = /* @__PURE__ */ rectToClientRect(await platform$1.getClippingRect({
		element: ((_await$platform$isEle = await (platform$1.isElement == null ? void 0 : platform$1.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform$1.getDocumentElement == null ? void 0 : platform$1.getDocumentElement(elements.floating)),
		boundary,
		rootBoundary,
		strategy
	}));
	const rect = elementContext === "floating" ? {
		x,
		y,
		width: rects.floating.width,
		height: rects.floating.height
	} : rects.reference;
	const offsetParent = await (platform$1.getOffsetParent == null ? void 0 : platform$1.getOffsetParent(elements.floating));
	const offsetScale = await (platform$1.isElement == null ? void 0 : platform$1.isElement(offsetParent)) ? await (platform$1.getScale == null ? void 0 : platform$1.getScale(offsetParent)) || {
		x: 1,
		y: 1
	} : {
		x: 1,
		y: 1
	};
	const elementClientRect = /* @__PURE__ */ rectToClientRect(platform$1.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform$1.convertOffsetParentRelativeRectToViewportRelativeRect({
		elements,
		rect,
		offsetParent,
		strategy
	}) : rect);
	return {
		top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
		bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
		left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
		right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
	};
}
var flip$1 = function(options) {
	if (options === void 0) options = {};
	return {
		name: "flip",
		options,
		async fn(state) {
			var _middlewareData$arrow, _middlewareData$flip;
			const { placement, middlewareData, rects, initialPlacement, platform: platform$1, elements } = state;
			const { mainAxis: checkMainAxis = true, crossAxis: checkCrossAxis = true, fallbackPlacements: specifiedFallbackPlacements, fallbackStrategy = "bestFit", fallbackAxisSideDirection = "none", flipAlignment = true,...detectOverflowOptions } = evaluate(options, state);
			if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) return {};
			const side = /* @__PURE__ */ getSide(placement);
			const initialSideAxis = /* @__PURE__ */ getSideAxis(initialPlacement);
			const isBasePlacement = getSide(initialPlacement) === initialPlacement;
			const rtl = await (platform$1.isRTL == null ? void 0 : platform$1.isRTL(elements.floating));
			const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [/* @__PURE__ */ getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
			const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== "none";
			if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) fallbackPlacements.push(.../* @__PURE__ */ getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
			const placements$1 = [initialPlacement, ...fallbackPlacements];
			const overflow = await detectOverflow(state, detectOverflowOptions);
			const overflows = [];
			let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
			if (checkMainAxis) overflows.push(overflow[side]);
			if (checkCrossAxis) {
				const sides$1 = /* @__PURE__ */ getAlignmentSides(placement, rects, rtl);
				overflows.push(overflow[sides$1[0]], overflow[sides$1[1]]);
			}
			overflowsData = [...overflowsData, {
				placement,
				overflows
			}];
			if (!overflows.every((side$1) => side$1 <= 0)) {
				var _middlewareData$flip2, _overflowsData$filter;
				const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
				const nextPlacement = placements$1[nextIndex];
				if (nextPlacement) {
					if (!(checkCrossAxis === "alignment" ? initialSideAxis !== getSideAxis(nextPlacement) : false) || overflowsData.every((d) => getSideAxis(d.placement) === initialSideAxis ? d.overflows[0] > 0 : true)) return {
						data: {
							index: nextIndex,
							overflows: overflowsData
						},
						reset: { placement: nextPlacement }
					};
				}
				let resetPlacement = (_overflowsData$filter = overflowsData.filter((d) => d.overflows[0] <= 0).sort((a$1, b$1) => a$1.overflows[1] - b$1.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
				if (!resetPlacement) switch (fallbackStrategy) {
					case "bestFit": {
						var _overflowsData$filter2;
						const placement$1 = (_overflowsData$filter2 = overflowsData.filter((d) => {
							if (hasFallbackAxisSideDirection) {
								const currentSideAxis = /* @__PURE__ */ getSideAxis(d.placement);
								return currentSideAxis === initialSideAxis || currentSideAxis === "y";
							}
							return true;
						}).map((d) => [d.placement, /* @__PURE__ */ d.overflows.filter((overflow$1) => overflow$1 > 0).reduce((acc, overflow$1) => acc + overflow$1, 0)]).sort((a$1, b$1) => a$1[1] - b$1[1])[0]) == null ? void 0 : _overflowsData$filter2[0];
						if (placement$1) resetPlacement = placement$1;
						break;
					}
					case "initialPlacement":
						resetPlacement = initialPlacement;
						break;
				}
				if (placement !== resetPlacement) return { reset: { placement: resetPlacement } };
			}
			return {};
		}
	};
};
var shift$1 = function(options) {
	if (options === void 0) options = {};
	return {
		name: "shift",
		options,
		async fn(state) {
			const { x, y, placement } = state;
			const { mainAxis: checkMainAxis = true, crossAxis: checkCrossAxis = false, limiter = { fn: (_ref) => {
				let { x: x$1, y: y$1 } = _ref;
				return {
					x: x$1,
					y: y$1
				};
			} },...detectOverflowOptions } = evaluate(options, state);
			const coords = {
				x,
				y
			};
			const overflow = await detectOverflow(state, detectOverflowOptions);
			const crossAxis = /* @__PURE__ */ getSideAxis(/* @__PURE__ */ getSide(placement));
			const mainAxis = /* @__PURE__ */ getOppositeAxis(crossAxis);
			let mainAxisCoord = coords[mainAxis];
			let crossAxisCoord = coords[crossAxis];
			if (checkMainAxis) {
				const minSide = mainAxis === "y" ? "top" : "left";
				const maxSide = mainAxis === "y" ? "bottom" : "right";
				const min$1 = mainAxisCoord + overflow[minSide];
				const max$1 = mainAxisCoord - overflow[maxSide];
				mainAxisCoord = /* @__PURE__ */ clamp(min$1, mainAxisCoord, max$1);
			}
			if (checkCrossAxis) {
				const minSide = crossAxis === "y" ? "top" : "left";
				const maxSide = crossAxis === "y" ? "bottom" : "right";
				const min$1 = crossAxisCoord + overflow[minSide];
				const max$1 = crossAxisCoord - overflow[maxSide];
				crossAxisCoord = /* @__PURE__ */ clamp(min$1, crossAxisCoord, max$1);
			}
			const limitedCoords = /* @__PURE__ */ limiter.fn({
				...state,
				[mainAxis]: mainAxisCoord,
				[crossAxis]: crossAxisCoord
			});
			return {
				...limitedCoords,
				data: {
					x: limitedCoords.x - x,
					y: limitedCoords.y - y,
					enabled: {
						[mainAxis]: checkMainAxis,
						[crossAxis]: checkCrossAxis
					}
				}
			};
		}
	};
};
var size$1 = function(options) {
	if (options === void 0) options = {};
	return {
		name: "size",
		options,
		async fn(state) {
			var _state$middlewareData, _state$middlewareData2;
			const { placement, rects, platform: platform$1, elements } = state;
			const { apply = () => {},...detectOverflowOptions } = evaluate(options, state);
			const overflow = await detectOverflow(state, detectOverflowOptions);
			const side = /* @__PURE__ */ getSide(placement);
			const alignment = /* @__PURE__ */ getAlignment(placement);
			const isYAxis = getSideAxis(placement) === "y";
			const { width, height } = rects.floating;
			let heightSide;
			let widthSide;
			if (side === "top" || side === "bottom") {
				heightSide = side;
				widthSide = alignment === (await (platform$1.isRTL == null ? void 0 : platform$1.isRTL(elements.floating)) ? "start" : "end") ? "left" : "right";
			} else {
				widthSide = side;
				heightSide = alignment === "end" ? "top" : "bottom";
			}
			const maximumClippingHeight = height - overflow.top - overflow.bottom;
			const maximumClippingWidth = width - overflow.left - overflow.right;
			const overflowAvailableHeight = /* @__PURE__ */ min(height - overflow[heightSide], maximumClippingHeight);
			const overflowAvailableWidth = /* @__PURE__ */ min(width - overflow[widthSide], maximumClippingWidth);
			const noShift = !state.middlewareData.shift;
			let availableHeight = overflowAvailableHeight;
			let availableWidth = overflowAvailableWidth;
			if ((_state$middlewareData = state.middlewareData.shift) != null && _state$middlewareData.enabled.x) availableWidth = maximumClippingWidth;
			if ((_state$middlewareData2 = state.middlewareData.shift) != null && _state$middlewareData2.enabled.y) availableHeight = maximumClippingHeight;
			if (noShift && !alignment) {
				const xMin = /* @__PURE__ */ max(overflow.left, 0);
				const xMax = /* @__PURE__ */ max(overflow.right, 0);
				const yMin = /* @__PURE__ */ max(overflow.top, 0);
				const yMax = /* @__PURE__ */ max(overflow.bottom, 0);
				if (isYAxis) availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right));
				else availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom));
			}
			await apply({
				...state,
				availableWidth,
				availableHeight
			});
			const nextDimensions = await platform$1.getDimensions(elements.floating);
			if (width !== nextDimensions.width || height !== nextDimensions.height) return { reset: { rects: true } };
			return {};
		}
	};
};
function hasWindow() {
	return typeof window !== "undefined";
}
function getNodeName(node$1) {
	if (isNode(node$1)) return (node$1.nodeName || "").toLowerCase();
	return "#document";
}
function getWindow(node$1) {
	var _node$ownerDocument;
	return (node$1 == null || (_node$ownerDocument = node$1.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node$1) {
	var _ref;
	return (_ref = (isNode(node$1) ? node$1.ownerDocument : node$1.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
	if (!hasWindow()) return false;
	return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
	if (!hasWindow()) return false;
	return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
	if (!hasWindow()) return false;
	return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
	if (!hasWindow() || typeof ShadowRoot === "undefined") return false;
	return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
var invalidOverflowDisplayValues = /* @__PURE__ */ new Set(["inline", "contents"]);
function isOverflowElement(element) {
	const { overflow, overflowX, overflowY, display } = getComputedStyle$1(element);
	return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !invalidOverflowDisplayValues.has(display);
}
var tableElements = /* @__PURE__ */ new Set([
	"table",
	"td",
	"th"
]);
function isTableElement(element) {
	return tableElements.has(/* @__PURE__ */ getNodeName(element));
}
var topLayerSelectors = [":popover-open", ":modal"];
function isTopLayer(element) {
	return topLayerSelectors.some((selector) => {
		try {
			return element.matches(selector);
		} catch (_e) {
			return false;
		}
	});
}
var transformProperties = [
	"transform",
	"translate",
	"scale",
	"rotate",
	"perspective"
];
var willChangeValues = [
	"transform",
	"translate",
	"scale",
	"rotate",
	"perspective",
	"filter"
];
var containValues = [
	"paint",
	"layout",
	"strict",
	"content"
];
function isContainingBlock(elementOrCss) {
	const webkit = /* @__PURE__ */ isWebKit();
	const css = isElement(elementOrCss) ? getComputedStyle$1(elementOrCss) : elementOrCss;
	return transformProperties.some((value) => css[value] ? css[value] !== "none" : false) || (css.containerType ? css.containerType !== "normal" : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== "none" : false) || !webkit && (css.filter ? css.filter !== "none" : false) || willChangeValues.some((value) => (css.willChange || "").includes(value)) || containValues.some((value) => (css.contain || "").includes(value));
}
function getContainingBlock(element) {
	let currentNode = /* @__PURE__ */ getParentNode(element);
	while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
		if (isContainingBlock(currentNode)) return currentNode;
		else if (isTopLayer(currentNode)) return null;
		currentNode = /* @__PURE__ */ getParentNode(currentNode);
	}
	return null;
}
function isWebKit() {
	if (typeof CSS === "undefined" || !CSS.supports) return false;
	return CSS.supports("-webkit-backdrop-filter", "none");
}
var lastTraversableNodeNames = /* @__PURE__ */ new Set([
	"html",
	"body",
	"#document"
]);
function isLastTraversableNode(node$1) {
	return lastTraversableNodeNames.has(/* @__PURE__ */ getNodeName(node$1));
}
function getComputedStyle$1(element) {
	return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
	if (isElement(element)) return {
		scrollLeft: element.scrollLeft,
		scrollTop: element.scrollTop
	};
	return {
		scrollLeft: element.scrollX,
		scrollTop: element.scrollY
	};
}
function getParentNode(node$1) {
	if (getNodeName(node$1) === "html") return node$1;
	const result = node$1.assignedSlot || node$1.parentNode || isShadowRoot(node$1) && node$1.host || getDocumentElement(node$1);
	return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node$1) {
	const parentNode = /* @__PURE__ */ getParentNode(node$1);
	if (isLastTraversableNode(parentNode)) return node$1.ownerDocument ? node$1.ownerDocument.body : node$1.body;
	if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) return parentNode;
	return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node$1, list, traverseIframes) {
	var _node$ownerDocument2;
	if (list === void 0) list = [];
	if (traverseIframes === void 0) traverseIframes = true;
	const scrollableAncestor = /* @__PURE__ */ getNearestOverflowAncestor(node$1);
	const isBody = scrollableAncestor === ((_node$ownerDocument2 = node$1.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
	const win = /* @__PURE__ */ getWindow(scrollableAncestor);
	if (isBody) {
		const frameElement = /* @__PURE__ */ getFrameElement(win);
		return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
	}
	return list.concat(scrollableAncestor, /* @__PURE__ */ getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}
function getFrameElement(win) {
	return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
}
function getCssDimensions(element) {
	const css = /* @__PURE__ */ getComputedStyle$1(element);
	let width = parseFloat(css.width) || 0;
	let height = parseFloat(css.height) || 0;
	const hasOffset = /* @__PURE__ */ isHTMLElement(element);
	const offsetWidth = hasOffset ? element.offsetWidth : width;
	const offsetHeight = hasOffset ? element.offsetHeight : height;
	const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
	if (shouldFallback) {
		width = offsetWidth;
		height = offsetHeight;
	}
	return {
		width,
		height,
		$: shouldFallback
	};
}
function unwrapElement(element) {
	return !isElement(element) ? element.contextElement : element;
}
function getScale(element) {
	const domElement = /* @__PURE__ */ unwrapElement(element);
	if (!isHTMLElement(domElement)) return createCoords(1);
	const rect = /* @__PURE__ */ domElement.getBoundingClientRect();
	const { width, height, $ } = getCssDimensions(domElement);
	let x = ($ ? round(rect.width) : rect.width) / width;
	let y = ($ ? round(rect.height) : rect.height) / height;
	if (!x || !Number.isFinite(x)) x = 1;
	if (!y || !Number.isFinite(y)) y = 1;
	return {
		x,
		y
	};
}
var noOffsets = /* @__PURE__ */ createCoords(0);
function getVisualOffsets(element) {
	const win = /* @__PURE__ */ getWindow(element);
	if (!isWebKit() || !win.visualViewport) return noOffsets;
	return {
		x: win.visualViewport.offsetLeft,
		y: win.visualViewport.offsetTop
	};
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
	if (isFixed === void 0) isFixed = false;
	if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) return false;
	return isFixed;
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
	if (includeScale === void 0) includeScale = false;
	if (isFixedStrategy === void 0) isFixedStrategy = false;
	const clientRect = /* @__PURE__ */ element.getBoundingClientRect();
	const domElement = /* @__PURE__ */ unwrapElement(element);
	let scale$1 = /* @__PURE__ */ createCoords(1);
	if (includeScale) if (offsetParent) {
		if (isElement(offsetParent)) scale$1 = /* @__PURE__ */ getScale(offsetParent);
	} else scale$1 = /* @__PURE__ */ getScale(element);
	const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
	let x = (clientRect.left + visualOffsets.x) / scale$1.x;
	let y = (clientRect.top + visualOffsets.y) / scale$1.y;
	let width = clientRect.width / scale$1.x;
	let height = clientRect.height / scale$1.y;
	if (domElement) {
		const win = /* @__PURE__ */ getWindow(domElement);
		const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
		let currentWin = win;
		let currentIFrame = /* @__PURE__ */ getFrameElement(currentWin);
		while (currentIFrame && offsetParent && offsetWin !== currentWin) {
			const iframeScale = /* @__PURE__ */ getScale(currentIFrame);
			const iframeRect = /* @__PURE__ */ currentIFrame.getBoundingClientRect();
			const css = /* @__PURE__ */ getComputedStyle$1(currentIFrame);
			const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
			const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
			x *= iframeScale.x;
			y *= iframeScale.y;
			width *= iframeScale.x;
			height *= iframeScale.y;
			x += left;
			y += top;
			currentWin = /* @__PURE__ */ getWindow(currentIFrame);
			currentIFrame = /* @__PURE__ */ getFrameElement(currentWin);
		}
	}
	return rectToClientRect({
		width,
		height,
		x,
		y
	});
}
function getWindowScrollBarX(element, rect) {
	const leftScroll = getNodeScroll(element).scrollLeft;
	if (!rect) return getBoundingClientRect(/* @__PURE__ */ getDocumentElement(element)).left + leftScroll;
	return rect.left + leftScroll;
}
function getHTMLOffset(documentElement, scroll) {
	const htmlRect = /* @__PURE__ */ documentElement.getBoundingClientRect();
	return {
		x: htmlRect.left + scroll.scrollLeft - getWindowScrollBarX(documentElement, htmlRect),
		y: htmlRect.top + scroll.scrollTop
	};
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
	let { elements, rect, offsetParent, strategy } = _ref;
	const isFixed = strategy === "fixed";
	const documentElement = /* @__PURE__ */ getDocumentElement(offsetParent);
	const topLayer = elements ? isTopLayer(elements.floating) : false;
	if (offsetParent === documentElement || topLayer && isFixed) return rect;
	let scroll = {
		scrollLeft: 0,
		scrollTop: 0
	};
	let scale$1 = /* @__PURE__ */ createCoords(1);
	const offsets = /* @__PURE__ */ createCoords(0);
	const isOffsetParentAnElement = /* @__PURE__ */ isHTMLElement(offsetParent);
	if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
		if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) scroll = /* @__PURE__ */ getNodeScroll(offsetParent);
		if (isHTMLElement(offsetParent)) {
			const offsetRect = /* @__PURE__ */ getBoundingClientRect(offsetParent);
			scale$1 = /* @__PURE__ */ getScale(offsetParent);
			offsets.x = offsetRect.x + offsetParent.clientLeft;
			offsets.y = offsetRect.y + offsetParent.clientTop;
		}
	}
	const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
	return {
		width: rect.width * scale$1.x,
		height: rect.height * scale$1.y,
		x: rect.x * scale$1.x - scroll.scrollLeft * scale$1.x + offsets.x + htmlOffset.x,
		y: rect.y * scale$1.y - scroll.scrollTop * scale$1.y + offsets.y + htmlOffset.y
	};
}
function getClientRects(element) {
	return Array.from(/* @__PURE__ */ element.getClientRects());
}
function getDocumentRect(element) {
	const html = /* @__PURE__ */ getDocumentElement(element);
	const scroll = /* @__PURE__ */ getNodeScroll(element);
	const body = element.ownerDocument.body;
	const width = /* @__PURE__ */ max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
	const height = /* @__PURE__ */ max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
	let x = -scroll.scrollLeft + getWindowScrollBarX(element);
	const y = -scroll.scrollTop;
	if (getComputedStyle$1(body).direction === "rtl") x += max(html.clientWidth, body.clientWidth) - width;
	return {
		width,
		height,
		x,
		y
	};
}
var SCROLLBAR_MAX = 25;
function getViewportRect(element, strategy) {
	const win = /* @__PURE__ */ getWindow(element);
	const html = /* @__PURE__ */ getDocumentElement(element);
	const visualViewport = win.visualViewport;
	let width = html.clientWidth;
	let height = html.clientHeight;
	let x = 0;
	let y = 0;
	if (visualViewport) {
		width = visualViewport.width;
		height = visualViewport.height;
		const visualViewportBased = /* @__PURE__ */ isWebKit();
		if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
			x = visualViewport.offsetLeft;
			y = visualViewport.offsetTop;
		}
	}
	const windowScrollbarX = /* @__PURE__ */ getWindowScrollBarX(html);
	if (windowScrollbarX <= 0) {
		const doc$1 = html.ownerDocument;
		const body = doc$1.body;
		const bodyStyles = /* @__PURE__ */ getComputedStyle(body);
		const bodyMarginInline = doc$1.compatMode === "CSS1Compat" ? parseFloat(bodyStyles.marginLeft) + parseFloat(bodyStyles.marginRight) || 0 : 0;
		const clippingStableScrollbarWidth = /* @__PURE__ */ Math.abs(html.clientWidth - body.clientWidth - bodyMarginInline);
		if (clippingStableScrollbarWidth <= SCROLLBAR_MAX) width -= clippingStableScrollbarWidth;
	} else if (windowScrollbarX <= SCROLLBAR_MAX) width += windowScrollbarX;
	return {
		width,
		height,
		x,
		y
	};
}
var absoluteOrFixed = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function getInnerBoundingClientRect(element, strategy) {
	const clientRect = /* @__PURE__ */ getBoundingClientRect(element, true, strategy === "fixed");
	const top = clientRect.top + element.clientTop;
	const left = clientRect.left + element.clientLeft;
	const scale$1 = isHTMLElement(element) ? getScale(element) : createCoords(1);
	return {
		width: element.clientWidth * scale$1.x,
		height: element.clientHeight * scale$1.y,
		x: left * scale$1.x,
		y: top * scale$1.y
	};
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
	let rect;
	if (clippingAncestor === "viewport") rect = /* @__PURE__ */ getViewportRect(element, strategy);
	else if (clippingAncestor === "document") rect = /* @__PURE__ */ getDocumentRect(/* @__PURE__ */ getDocumentElement(element));
	else if (isElement(clippingAncestor)) rect = /* @__PURE__ */ getInnerBoundingClientRect(clippingAncestor, strategy);
	else {
		const visualOffsets = /* @__PURE__ */ getVisualOffsets(element);
		rect = {
			x: clippingAncestor.x - visualOffsets.x,
			y: clippingAncestor.y - visualOffsets.y,
			width: clippingAncestor.width,
			height: clippingAncestor.height
		};
	}
	return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
	const parentNode = /* @__PURE__ */ getParentNode(element);
	if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) return false;
	return getComputedStyle$1(parentNode).position === "fixed" || hasFixedPositionAncestor(parentNode, stopNode);
}
function getClippingElementAncestors(element, cache) {
	const cachedResult = /* @__PURE__ */ cache.get(element);
	if (cachedResult) return cachedResult;
	let result = /* @__PURE__ */ getOverflowAncestors(element, [], false).filter((el) => isElement(el) && getNodeName(el) !== "body");
	let currentContainingBlockComputedStyle = null;
	const elementIsFixed = getComputedStyle$1(element).position === "fixed";
	let currentNode = elementIsFixed ? getParentNode(element) : element;
	while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
		const computedStyle = /* @__PURE__ */ getComputedStyle$1(currentNode);
		const currentNodeIsContaining = /* @__PURE__ */ isContainingBlock(currentNode);
		if (!currentNodeIsContaining && computedStyle.position === "fixed") currentContainingBlockComputedStyle = null;
		if (elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && absoluteOrFixed.has(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode)) result = /* @__PURE__ */ result.filter((ancestor) => ancestor !== currentNode);
		else currentContainingBlockComputedStyle = computedStyle;
		currentNode = /* @__PURE__ */ getParentNode(currentNode);
	}
	cache.set(element, result);
	return result;
}
function getClippingRect(_ref) {
	let { element, boundary, rootBoundary, strategy } = _ref;
	const clippingAncestors = [...boundary === "clippingAncestors" ? isTopLayer(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary), rootBoundary];
	const firstClippingAncestor = clippingAncestors[0];
	const clippingRect = /* @__PURE__ */ clippingAncestors.reduce((accRect, clippingAncestor) => {
		const rect = /* @__PURE__ */ getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
		accRect.top = /* @__PURE__ */ max(rect.top, accRect.top);
		accRect.right = /* @__PURE__ */ min(rect.right, accRect.right);
		accRect.bottom = /* @__PURE__ */ min(rect.bottom, accRect.bottom);
		accRect.left = /* @__PURE__ */ max(rect.left, accRect.left);
		return accRect;
	}, /* @__PURE__ */ getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
	return {
		width: clippingRect.right - clippingRect.left,
		height: clippingRect.bottom - clippingRect.top,
		x: clippingRect.left,
		y: clippingRect.top
	};
}
function getDimensions(element) {
	const { width, height } = getCssDimensions(element);
	return {
		width,
		height
	};
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
	const isOffsetParentAnElement = /* @__PURE__ */ isHTMLElement(offsetParent);
	const documentElement = /* @__PURE__ */ getDocumentElement(offsetParent);
	const isFixed = strategy === "fixed";
	const rect = /* @__PURE__ */ getBoundingClientRect(element, true, isFixed, offsetParent);
	let scroll = {
		scrollLeft: 0,
		scrollTop: 0
	};
	const offsets = /* @__PURE__ */ createCoords(0);
	function setLeftRTLScrollbarOffset() {
		offsets.x = /* @__PURE__ */ getWindowScrollBarX(documentElement);
	}
	if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
		if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) scroll = /* @__PURE__ */ getNodeScroll(offsetParent);
		if (isOffsetParentAnElement) {
			const offsetRect = /* @__PURE__ */ getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
			offsets.x = offsetRect.x + offsetParent.clientLeft;
			offsets.y = offsetRect.y + offsetParent.clientTop;
		} else if (documentElement) setLeftRTLScrollbarOffset();
	}
	if (isFixed && !isOffsetParentAnElement && documentElement) setLeftRTLScrollbarOffset();
	const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
	return {
		x: rect.left + scroll.scrollLeft - offsets.x - htmlOffset.x,
		y: rect.top + scroll.scrollTop - offsets.y - htmlOffset.y,
		width: rect.width,
		height: rect.height
	};
}
function isStaticPositioned(element) {
	return getComputedStyle$1(element).position === "static";
}
function getTrueOffsetParent(element, polyfill) {
	if (!isHTMLElement(element) || getComputedStyle$1(element).position === "fixed") return null;
	if (polyfill) return polyfill(element);
	let rawOffsetParent = element.offsetParent;
	if (getDocumentElement(element) === rawOffsetParent) rawOffsetParent = rawOffsetParent.ownerDocument.body;
	return rawOffsetParent;
}
function getOffsetParent(element, polyfill) {
	const win = /* @__PURE__ */ getWindow(element);
	if (isTopLayer(element)) return win;
	if (!isHTMLElement(element)) {
		let svgOffsetParent = /* @__PURE__ */ getParentNode(element);
		while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
			if (isElement(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) return svgOffsetParent;
			svgOffsetParent = /* @__PURE__ */ getParentNode(svgOffsetParent);
		}
		return win;
	}
	let offsetParent = /* @__PURE__ */ getTrueOffsetParent(element, polyfill);
	while (offsetParent && isTableElement(offsetParent) && isStaticPositioned(offsetParent)) offsetParent = /* @__PURE__ */ getTrueOffsetParent(offsetParent, polyfill);
	if (offsetParent && isLastTraversableNode(offsetParent) && isStaticPositioned(offsetParent) && !isContainingBlock(offsetParent)) return win;
	return offsetParent || getContainingBlock(element) || win;
}
var getElementRects = async function(data) {
	const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
	const getDimensionsFn = this.getDimensions;
	const floatingDimensions = await getDimensionsFn(data.floating);
	return {
		reference: /* @__PURE__ */ getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
		floating: {
			x: 0,
			y: 0,
			width: floatingDimensions.width,
			height: floatingDimensions.height
		}
	};
};
function isRTL(element) {
	return getComputedStyle$1(element).direction === "rtl";
}
var platform = {
	convertOffsetParentRelativeRectToViewportRelativeRect,
	getDocumentElement,
	getClippingRect,
	getOffsetParent,
	getElementRects,
	getClientRects,
	getDimensions,
	getScale,
	isElement,
	isRTL
};
function rectsAreEqual(a$1, b$1) {
	return a$1.x === b$1.x && a$1.y === b$1.y && a$1.width === b$1.width && a$1.height === b$1.height;
}
function observeMove(element, onMove) {
	let io = null;
	let timeoutId;
	const root = /* @__PURE__ */ getDocumentElement(element);
	function cleanup() {
		var _io;
		clearTimeout(timeoutId);
		(_io = io) == null || _io.disconnect();
		io = null;
	}
	function refresh(skip, threshold) {
		if (skip === void 0) skip = false;
		if (threshold === void 0) threshold = 1;
		cleanup();
		const elementRectForRootMargin = /* @__PURE__ */ element.getBoundingClientRect();
		const { left, top, width, height } = elementRectForRootMargin;
		if (!skip) onMove();
		if (!width || !height) return;
		const insetTop = /* @__PURE__ */ floor(top);
		const insetRight = /* @__PURE__ */ floor(root.clientWidth - (left + width));
		const insetBottom = /* @__PURE__ */ floor(root.clientHeight - (top + height));
		const insetLeft = /* @__PURE__ */ floor(left);
		const options = {
			rootMargin: -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px",
			threshold: max(0, /* @__PURE__ */ min(1, threshold)) || 1
		};
		let isFirstUpdate = true;
		function handleObserve(entries) {
			const ratio = entries[0].intersectionRatio;
			if (ratio !== threshold) {
				if (!isFirstUpdate) return refresh();
				if (!ratio) timeoutId = /* @__PURE__ */ setTimeout(() => {
					refresh(false, 1e-7);
				}, 1e3);
				else refresh(false, ratio);
			}
			if (ratio === 1 && !rectsAreEqual(elementRectForRootMargin, /* @__PURE__ */ element.getBoundingClientRect())) refresh();
			isFirstUpdate = false;
		}
		try {
			io = new IntersectionObserver(handleObserve, {
				...options,
				root: root.ownerDocument
			});
		} catch (_e) {
			io = new IntersectionObserver(handleObserve, options);
		}
		io.observe(element);
	}
	refresh(true);
	return cleanup;
}
function autoUpdate(reference, floating, update, options) {
	if (options === void 0) options = {};
	const { ancestorScroll = true, ancestorResize = true, elementResize = typeof ResizeObserver === "function", layoutShift = typeof IntersectionObserver === "function", animationFrame = false } = options;
	const referenceEl = /* @__PURE__ */ unwrapElement(reference);
	const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], .../* @__PURE__ */ getOverflowAncestors(floating)] : [];
	ancestors.forEach((ancestor) => {
		ancestorScroll && ancestor.addEventListener("scroll", update, { passive: true });
		ancestorResize && ancestor.addEventListener("resize", update);
	});
	const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
	let reobserveFrame = -1;
	let resizeObserver = null;
	if (elementResize) {
		resizeObserver = new ResizeObserver((_ref) => {
			let [firstEntry] = _ref;
			if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
				resizeObserver.unobserve(floating);
				cancelAnimationFrame(reobserveFrame);
				reobserveFrame = /* @__PURE__ */ requestAnimationFrame(() => {
					var _resizeObserver;
					(_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
				});
			}
			update();
		});
		if (referenceEl && !animationFrame) resizeObserver.observe(referenceEl);
		resizeObserver.observe(floating);
	}
	let frameId;
	let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
	if (animationFrame) frameLoop();
	function frameLoop() {
		const nextRefRect = /* @__PURE__ */ getBoundingClientRect(reference);
		if (prevRefRect && !rectsAreEqual(prevRefRect, nextRefRect)) update();
		prevRefRect = nextRefRect;
		frameId = /* @__PURE__ */ requestAnimationFrame(frameLoop);
	}
	update();
	return () => {
		var _resizeObserver2;
		ancestors.forEach((ancestor) => {
			ancestorScroll && ancestor.removeEventListener("scroll", update);
			ancestorResize && ancestor.removeEventListener("resize", update);
		});
		cleanupIo?.();
		(_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
		resizeObserver = null;
		if (animationFrame) cancelAnimationFrame(frameId);
	};
}
var shift = shift$1;
var flip = flip$1;
var size = size$1;
var computePosition = (reference, floating, options) => {
	const cache = /* @__PURE__ */ new Map();
	const mergedOptions = {
		platform,
		...options
	};
	const platformWithCache = {
		...mergedOptions.platform,
		_c: cache
	};
	return computePosition$1(reference, floating, {
		...mergedOptions,
		platform: platformWithCache
	});
};
var Popper = /* @__PURE__ */ component((props, { slots, emit, attrs }) => {
	const triggerRef = /* @__PURE__ */ observableRef(null);
	const contentRef = /* @__PURE__ */ observableRef(null);
	rx(/* @__PURE__ */ combineLatest([triggerRef, contentRef]), /* @__PURE__ */ tapEffect(([triggerEf, contentEl]) => {
		if (contentEl && triggerEf) {
			const updatePosition = async () => {
				contentEl.style.position = "absolute";
				const pos = await computePosition(triggerEf, contentEl, {
					placement: props.placement ?? "bottom",
					middleware: [
						...props.modifiers ?? [],
						...props.middleware ?? [],
						/* @__PURE__ */ flip(),
						/* @__PURE__ */ shift()
					]
				});
				Object.assign(contentEl.style, {
					left: `${pos.x}px`,
					top: `${pos.y}px`
				});
				contentEl.setAttribute("data-placement", pos.placement);
			};
			const clean = /* @__PURE__ */ autoUpdate(triggerEf, contentEl, updatePosition);
			return () => {
				clean();
			};
		}
		return () => {};
	}), /* @__PURE__ */ subscribeUntilUnmount());
	return () => {
		const trigger = slots.default?.()[0];
		if (!trigger) return null;
		return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ cloneVNode(trigger, {
			...attrs,
			onVnodeMounted: (n) => {
				triggerRef.value = /* @__PURE__ */ resolveElement(n.el);
			}
		}), /* @__PURE__ */ jsx(Overlay, {
			style: { zIndex: 100 },
			triggerRef,
			contentRef,
			isOpen: props.isOpen,
			onClickOutside: (event) => emit("click-outside", event),
			onEscKeydown: (event) => emit("esc-keydown", event),
			$transition: slots.transition,
			children: slots.content?.()
		})] });
	};
}, {
	name: "Popper",
	inheritAttrs: false
}, {
	displayName: "Popper",
	props: [
		"isOpen",
		"style",
		"contentRef",
		"triggerRef",
		"placement",
		"middleware",
		"modifiers"
	],
	emits: [
		"click-outside",
		"esc-keydown",
		"content-before-mount"
	]
});
function resolveElement(el) {
	if (el) {
		if (el instanceof HTMLElement) return el;
		if (el instanceof Text) return resolveElement(el.nextElementSibling);
	}
	return null;
}
var mdiAccount = "M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z";
var mdiCancel = "M12 2C17.5 2 22 6.5 22 12S17.5 22 12 22 2 17.5 2 12 6.5 2 12 2M12 4C10.1 4 8.4 4.6 7.1 5.7L18.3 16.9C19.3 15.5 20 13.8 20 12C20 7.6 16.4 4 12 4M16.9 18.3L5.7 7.1C4.6 8.4 4 10.1 4 12C4 16.4 7.6 20 12 20C13.9 20 15.6 19.4 16.9 18.3Z";
var mdiCheck = "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z";
var mdiCheckBold = "M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z";
var mdiChevronDown = "M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z";
var mdiChevronRight = "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z";
var mdiClose = "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z";
var mdiContentCopy = "M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z";
var mdiGithub = "M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z";
var mdiGroup = "M1,1V5H2V19H1V23H5V22H19V23H23V19H22V5H23V1H19V2H5V1M5,4H19V5H20V19H19V20H5V19H4V5H5M6,6V14H9V18H18V9H14V6M8,8H12V12H8M14,11H16V16H11V14H14";
var mdiHelpBox = "M11,18H13V16H11V18M12,6A4,4 0 0,0 8,10H10A2,2 0 0,1 12,8A2,2 0 0,1 14,10C14,12 11,11.75 11,15H13C13,12.75 16,12.5 16,10A4,4 0 0,0 12,6M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3Z";
var mdiMinusBoxOutline = "M19,19V5H5V19H19M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5C3,3.89 3.9,3 5,3H19M17,11V13H7V11H17Z";
var mdiPlus = "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z";
var mdiSend = "M2,21L23,12L2,3V10L17,12L2,14V21Z";
var mdiWeatherNight = "M17.75,4.09L15.22,6.03L16.13,9.09L13.5,7.28L10.87,9.09L11.78,6.03L9.25,4.09L12.44,4L13.5,1L14.56,4L17.75,4.09M21.25,11L19.61,12.25L20.2,14.23L18.5,13.06L16.8,14.23L17.39,12.25L15.75,11L17.81,10.95L18.5,9L19.19,10.95L21.25,11M18.97,15.95C19.8,15.87 20.69,17.05 20.16,17.8C19.84,18.25 19.5,18.67 19.08,19.07C15.17,23 8.84,23 4.94,19.07C1.03,15.17 1.03,8.83 4.94,4.93C5.34,4.53 5.76,4.17 6.21,3.85C6.96,3.32 8.14,4.21 8.06,5.04C7.79,7.9 8.75,10.87 10.95,13.06C13.14,15.26 16.1,16.22 18.97,15.95M17.33,17.97C14.5,17.81 11.7,16.64 9.53,14.5C7.36,12.31 6.2,9.5 6.04,6.68C3.23,9.82 3.34,14.64 6.35,17.66C9.37,20.67 14.19,20.78 17.33,17.97Z";
var mdiWhiteBalanceSunny = "M3.55 19.09L4.96 20.5L6.76 18.71L5.34 17.29M12 6C8.69 6 6 8.69 6 12S8.69 18 12 18 18 15.31 18 12C18 8.68 15.31 6 12 6M20 13H23V11H20M17.24 18.71L19.04 20.5L20.45 19.09L18.66 17.29M20.45 5L19.04 3.6L17.24 5.39L18.66 6.81M13 1H11V4H13M6.76 5.39L4.96 3.6L3.55 5L5.34 6.81L6.76 5.39M1 13H4V11H1M13 20H11V23H13";
var Container = /* @__PURE__ */ styled("div", { displayName: "Container" })({
	padding: 24,
	"& [data-example]": {
		display: "flex",
		flexDirection: "row-reverse",
		gap: 8,
		"& > *": { flex: 1 },
		"& [data-example-container]": {
			display: "flex",
			alignItems: "center",
			justifyContent: "center"
		}
	},
	"& :not(pre) > code": {
		font: "code",
		rounded: "xs",
		px: 4,
		bgColor: "sys.surface-container-low"
	},
	"& pre": {
		overflow: "auto",
		textStyle: "sys.body-small",
		containerStyle: "sys.surface-container-low",
		m: 0,
		rounded: "sm",
		p: 16,
		font: "code",
		"& .comment": { color: /* @__PURE__ */ variant("sys.on-surface", /* @__PURE__ */ alpha(.38)) },
		"& .string": { color: "sys.success" },
		"& .tag .attr-name": { color: "sys.success" },
		"& .function": { color: "sys.warning" },
		"& .punctuation": { color: /* @__PURE__ */ variant("sys.on-surface", /* @__PURE__ */ alpha(.38)) },
		"& .keyword": { color: "sys.error" }
	},
	"& p,li": { my: "1em" },
	overflowY: "auto"
});
const DynamicThemingProvider = /* @__PURE__ */ createProvider(() => {
	const seed = {
		primary: "#1270f5",
		secondary: "#8a90a5",
		tertiary: "#b58391",
		neutral: "#5e5e5e",
		neutralVariant: "#757780",
		error: "#d93f23",
		warning: "#e69c00",
		success: "#5ac220"
	};
	const rules = /* @__PURE__ */ Palette.fromColors(seed).normalizeRoleRules();
	return observableRef({
		seed,
		rules,
		theming: /* @__PURE__ */ Theming.create({
			...defaultTheme,
			...Palette.fromColors(seed).toDesignTokens(rules)
		}, { varPrefix: "vk" })
	});
});
var require_toggle_selection = /* @__PURE__ */ __commonJSMin((exports, module) => {
	module.exports = function() {
		var selection = /* @__PURE__ */ document.getSelection();
		if (!selection.rangeCount) return function() {};
		var active = document.activeElement;
		var ranges = [];
		for (var i = 0; i < selection.rangeCount; i++) ranges.push(/* @__PURE__ */ selection.getRangeAt(i));
		switch (active.tagName.toUpperCase()) {
			case "INPUT":
			case "TEXTAREA":
				active.blur();
				break;
			default:
				active = null;
				break;
		}
		selection.removeAllRanges();
		return function() {
			selection.type === "Caret" && selection.removeAllRanges();
			if (!selection.rangeCount) ranges.forEach(function(range) {
				selection.addRange(range);
			});
			active && active.focus();
		};
	};
});
var require_copy_to_clipboard = /* @__PURE__ */ __commonJSMin((exports, module) => {
	var deselectCurrent = /* @__PURE__ */ require_toggle_selection();
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
		var debug, message, reselectPrevious, range, selection, mark, success = false;
		if (!options) options = {};
		debug = options.debug || false;
		try {
			reselectPrevious = /* @__PURE__ */ deselectCurrent();
			range = /* @__PURE__ */ document.createRange();
			selection = /* @__PURE__ */ document.getSelection();
			mark = /* @__PURE__ */ document.createElement("span");
			mark.textContent = text;
			mark.ariaHidden = "true";
			mark.style.all = "unset";
			mark.style.position = "fixed";
			mark.style.top = 0;
			mark.style.clip = "rect(0, 0, 0, 0)";
			mark.style.whiteSpace = "pre";
			mark.style.webkitUserSelect = "text";
			mark.style.MozUserSelect = "text";
			mark.style.msUserSelect = "text";
			mark.style.userSelect = "text";
			mark.addEventListener("copy", function(e) {
				e.stopPropagation();
				if (options.format) {
					e.preventDefault();
					if (typeof e.clipboardData === "undefined") {
						debug && console.warn("unable to use e.clipboardData");
						debug && console.warn("trying IE specific stuff");
						window.clipboardData.clearData();
						var format$1 = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting["default"];
						window.clipboardData.setData(format$1, text);
					} else {
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
			if (!document.execCommand("copy")) throw new Error("copy command was unsuccessful");
			success = true;
		} catch (err) {
			debug && console.error("unable to copy using execCommand: ", err);
			debug && console.warn("trying IE specific stuff");
			try {
				window.clipboardData.setData(options.format || "text", text);
				options.onCopy && options.onCopy(window.clipboardData);
				success = true;
			} catch (err$1) {
				debug && console.error("unable to copy using clipboardData: ", err$1);
				debug && console.error("falling back to prompt");
				message = /* @__PURE__ */ format("message" in options ? options.message : defaultMessage);
				window.prompt(message, text);
			}
		} finally {
			if (selection) if (typeof selection.removeRange == "function") selection.removeRange(range);
			else selection.removeAllRanges();
			if (mark) document.body.removeChild(mark);
			reselectPrevious();
		}
		return success;
	}
	module.exports = copy;
});
var import_copy_to_clipboard = /* @__PURE__ */ __toESM(/* @__PURE__ */ require_copy_to_clipboard());
var color_palette_default = /* @__PURE__ */ component(() => {
	const p$1 = /* @__PURE__ */ DynamicThemingProvider.use();
	const el = /* @__PURE__ */ ref$1(null);
	return () => {
		const pp = /* @__PURE__ */ Palette.fromColors(p$1.value.seed);
		return /* @__PURE__ */ jsxs(Box, {
			ref: el,
			sx: {
				display: "flex",
				flexDirection: "column",
				gap: 24
			},
			children: [/* @__PURE__ */ jsxs(Box, {
				sx: {
					display: "flex",
					gap: 56
				},
				children: [/* @__PURE__ */ jsx(Box, {
					sx: {
						display: "flex",
						flexDirection: "column"
					},
					children: /* @__PURE__ */ map(p$1.value.seed, (color$1, name) => {
						return /* @__PURE__ */ jsxs(Box, {
							sx: {
								flex: 1,
								display: "flex",
								alignItems: "center",
								gap: 16
							},
							children: [/* @__PURE__ */ jsx(Box, {
								sx: { flex: 1 },
								children: name
							}), /* @__PURE__ */ jsx("input", {
								type: "color",
								value: color$1,
								onChange: (evt) => {
									p$1.next((x) => {
										x.seed[name] = evt.target.value;
									});
								}
							})]
						});
					})
				}), /* @__PURE__ */ jsx(Box, {
					sx: {
						display: "flex",
						flexWrap: "wrap",
						gap: 16
					},
					children: /* @__PURE__ */ map(p$1.value.rules, ([base, tone], role) => {
						return /* @__PURE__ */ jsxs(Box, {
							sx: {
								display: "flex",
								alignItems: "center",
								width: "30%"
							},
							children: [/* @__PURE__ */ jsx(Box, {
								sx: { flex: 1 },
								children: role
							}), /* @__PURE__ */ jsx(Box, {
								sx: {
									flex: 1,
									display: "flex",
									gap: 4,
									"& input": {
										width: "40%",
										border: "1px solid",
										borderColor: "sys.outline"
									}
								},
								children: /* @__PURE__ */ jsx("input", {
									type: "number",
									value: tone,
									max: 100,
									min: 0,
									style: {
										backgroundColor: /* @__PURE__ */ Palette.toHEX(/* @__PURE__ */ pp.seeds[base].tone(tone)),
										color: tone > 50 ? "black" : "white"
									},
									"data-color": /* @__PURE__ */ Palette.toHEX(/* @__PURE__ */ pp.seeds[base].tone(tone)),
									"data-theme": "dark",
									onChange: (evt) => {
										try {
											const v = /* @__PURE__ */ parseInt(evt.target.value);
											p$1.next((x) => {
												x.rules[role] = [
													base,
													v,
													tone
												];
											});
										} catch (_) {}
									}
								})
							})]
						});
					})
				})]
			}), /* @__PURE__ */ jsx(Box, {
				sx: {
					display: "flex",
					gap: 16,
					"& > *": { flex: 1 }
				},
				children: /* @__PURE__ */ jsx("pre", {
					onClick: () => (0, import_copy_to_clipboard.default)(/* @__PURE__ */ JSON.stringify(p$1.value)),
					children: /* @__PURE__ */ jsx("code", { children: /* @__PURE__ */ JSON.stringify(p$1.value, null, 2) })
				})
			})]
		});
	};
});
var tones = {
	"0": true,
	"10": true,
	"20": true,
	"30": true,
	"40": true,
	"50": true,
	"60": true,
	"70": true,
	"80": true,
	"90": true,
	"95": true,
	"100": true
};
var color_scheme_default = /* @__PURE__ */ component(() => {
	return () => /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ ["light", "dark"].map((theme) => /* @__PURE__ */ jsxs("div", {
		"data-theme": theme,
		children: [/* @__PURE__ */ jsxs(Box, {
			component: "h1",
			sx: {
				textStyle: "sys.headline-medium",
				pb: 8,
				mt: 16
			},
			children: [/* @__PURE__ */ upperFirst(theme), " Scheme"]
		}), /* @__PURE__ */ jsxs(Box, {
			sx: {
				display: "flex",
				flexDirection: "column",
				gap: 16
			},
			children: [/* @__PURE__ */ jsx(Box, {
				sx: {
					display: "flex",
					flexWrap: "wrap",
					gap: 16
				},
				children: /* @__PURE__ */ [
					"primary",
					"secondary",
					"tertiary",
					"error",
					"warning",
					"success"
				].map((keyColor) => {
					return /* @__PURE__ */ jsxs(Box, {
						sx: {
							flex: 1,
							minW: 1 / 4,
							display: "flex",
							alignItems: "stretch"
						},
						children: [/* @__PURE__ */ jsx(Box, {
							sx: {
								flex: 1,
								display: "flex",
								flexDirection: "column"
							},
							children: /* @__PURE__ */ ["", "-container"].map((suffix) => /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(Box, {
								sx: {
									bgColor: `sys.${keyColor}${suffix}`,
									color: `sys.on-${keyColor}${suffix}`,
									p: 8,
									flex: 3
								},
								children: `${keyColor}${suffix}`
							}), /* @__PURE__ */ jsx(Box, {
								sx: {
									color: `sys.${keyColor}${suffix}`,
									bgColor: `sys.on-${keyColor}${suffix}`,
									p: 8,
									flex: 1
								},
								children: `on-${keyColor}${suffix}`
							})] }, suffix))
						}), /* @__PURE__ */ jsx(Box, {
							sx: {
								display: "flex",
								flexDirection: "column"
							},
							children: /* @__PURE__ */ map(tones, (_, k) => /* @__PURE__ */ jsxs(Box, {
								sx: {
									color: `${keyColor}.${parseInt(k) > 50 ? 0 : 100}`,
									bgColor: `${keyColor}.${k}`,
									w: 60,
									p: 8,
									textAlign: "right"
								},
								children: [".", k]
							}))
						})]
					}, keyColor);
				})
			}), /* @__PURE__ */ jsxs("div", { children: [
				/* @__PURE__ */ jsx(Box, {
					sx: {
						display: "flex",
						"& > *": { width: 1 / 3 }
					},
					children: /* @__PURE__ */ [
						"-dim",
						"",
						"-bright"
					].map((suffix) => /* @__PURE__ */ jsx(Box, {
						sx: {
							color: "sys.on-surface",
							bgColor: `sys.surface${suffix}`,
							height: 80,
							p: 8
						},
						children: `surface${suffix}`
					}))
				}),
				/* @__PURE__ */ jsx(Box, {
					sx: {
						display: "flex",
						"& > *": { width: 1 / 4 }
					},
					children: /* @__PURE__ */ [
						"-lowest",
						"-low",
						"",
						"-high",
						"-highest"
					].map((suffix) => /* @__PURE__ */ jsx(Box, {
						sx: {
							color: "sys.on-surface",
							bgColor: `sys.surface-container${suffix}`,
							height: 80,
							p: 8
						},
						children: `surface-container${suffix}`
					}))
				}),
				/* @__PURE__ */ jsx(Box, {
					sx: {
						display: "flex",
						"& > *": { width: 1 / 4 }
					},
					children: /* @__PURE__ */ [
						"on-surface",
						"on-surface-variant",
						"outline",
						"outline-variant"
					].map((color$1) => /* @__PURE__ */ jsx(Box, {
						sx: {
							color: color$1.includes("outline-variant") ? "sys.inverse-surface" : "sys.inverse-on-surface",
							bgColor: `sys.${color$1}`,
							height: 80,
							p: 8
						},
						children: color$1
					}))
				}),
				/* @__PURE__ */ jsx(Box, {
					sx: { display: "flex" },
					children: /* @__PURE__ */ map(tones, (_, k) => /* @__PURE__ */ jsxs(Box, {
						sx: {
							color: `neutral.${parseInt(k) > 50 ? 0 : 100}`,
							bgColor: `neutral.${k}`,
							flex: 1,
							p: 8,
							textAlign: "right"
						},
						children: [".", k]
					}))
				})
			] })]
		})]
	}, theme)) });
});
var elevation_default = /* @__PURE__ */ component(() => {
	const theme = /* @__PURE__ */ ThemeProvider.use();
	return () => /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ Object.keys(theme.token.elevation.tokens).map((elevation$1) => /* @__PURE__ */ jsx(Box, {
		sx: {
			mt: 16,
			p: 16,
			rounded: "lg",
			transitionDuration: "md4",
			transitionTimingFunction: "standard",
			shadow: elevation$1,
			_hover: { shadow: `${1 + parseInt(elevation$1)}` }
		},
		children: /* @__PURE__ */ jsxs("div", { children: ["Elevation ", elevation$1] })
	}, elevation$1)) });
});
var cFigmaTokensDefault = /* @__PURE__ */ component(() => {
	const t = /* @__PURE__ */ ThemeProvider.use();
	return () => {
		return /* @__PURE__ */ jsxs(Box, {
			sx: {
				display: "flex",
				gap: 16,
				flexDirection: "column"
			},
			children: [/* @__PURE__ */ jsx("div", { children: "点击下载，通过 Figma Tokens 全量导入文件" }), /* @__PURE__ */ jsx("pre", {
				onClick: () => {
					download(/* @__PURE__ */ JSON.stringify(/* @__PURE__ */ t.toFigmaTokens(), null, 2), `tokens.${/* @__PURE__ */ (/* @__PURE__ */ new Date()).getTime()}.json`);
				},
				children: /* @__PURE__ */ jsx("code", { children: /* @__PURE__ */ JSON.stringify(/* @__PURE__ */ t.toFigmaTokens(), null, 2) })
			})]
		});
	};
});
function download(data, filename, type = "application/json") {
	const a$1 = /* @__PURE__ */ document.createElement("a");
	const file = new Blob([data], { type });
	const url = /* @__PURE__ */ URL.createObjectURL(file);
	a$1.href = url;
	a$1.download = filename;
	document.body.appendChild(a$1);
	a$1.click();
	setTimeout(() => {
		document.body.removeChild(a$1);
		window.URL.revokeObjectURL(url);
	}, 0);
}
var figma_tokens_default = cFigmaTokensDefault;
var Button = /* @__PURE__ */ styled("button", { disabled: /* @__PURE__ */ boolean().optional() }, { displayName: "Button" })({
	bg: "none",
	outline: "none",
	border: "none",
	px: 16,
	h: 40,
	rounded: "md",
	color: "sys.primary",
	bgColor: /* @__PURE__ */ variant("sys.primary", /* @__PURE__ */ alpha(.08)),
	_disabled: {
		color: /* @__PURE__ */ variant("sys.on-surface", /* @__PURE__ */ alpha(.12)),
		bgColor: /* @__PURE__ */ variant("sys.on-surface", /* @__PURE__ */ alpha(.08))
	}
});
var index_md_CodeBlock4a44dc15_default = () => {
	return /* @__PURE__ */ jsxs(Box, {
		sx: {
			display: "flex",
			gap: 8
		},
		children: [/* @__PURE__ */ jsx(Button, { children: "按钮" }), /* @__PURE__ */ jsx(Button, {
			disabled: true,
			children: "按钮"
		})]
	});
};
var index_md_CodeBlock785f3ec7_default = /* @__PURE__ */ component(() => () => /* @__PURE__ */ jsx(Box, {
	sx: {
		display: "flex",
		padding: 10,
		containerStyle: "sys.primary"
	},
	children: /* @__PURE__ */ jsx(Box, {
		sx: { containerStyle: "sys.surface-container" },
		component: "button",
		children: "Hi 111"
	})
}));
function _createMdxContent$1(props) {
	const _components = {
		a: "a",
		code: "code",
		codeblock4a44dc15: "codeblock4a44dc15",
		codeblock785f3ec7: "codeblock785f3ec7",
		div: "div",
		em: "em",
		h2: "h2",
		h3: "h3",
		li: "li",
		p: "p",
		pre: "pre",
		span: "span",
		strong: "strong",
		ul: "ul",
		...props.components
	};
	return jsxs(Fragment, { children: [
		/* @__PURE__ */ jsxs(_components.p, { children: ["设计理念沿用 ", /* @__PURE__ */ jsx(_components.a, {
			href: "https://m3.material.io/",
			children: "Material 3"
		})] }),
		"\n",
		/* @__PURE__ */ jsx(_components.p, { children: "这里仅为适配该设计理念，抽象 Design System, 方便开发：" }),
		"\n",
		/* @__PURE__ */ jsxs(_components.p, { children: [
			"所有的 Design Token 将声明为 ",
			/* @__PURE__ */ jsx(_components.code, { children: "css var" }),
			" (",
			/* @__PURE__ */ jsx(_components.a, {
				href: "https://developer.mozilla.org/en-US/docs/Web/CSS/--*",
				children: "Custom properties"
			}),
			"),\n可同时支持在 ",
			/* @__PURE__ */ jsx(_components.code, { children: "css-in-js" }),
			" 和 ",
			/* @__PURE__ */ jsx(_components.code, { children: "raw css" }),
			" 中使用。"
		] }),
		"\n",
		/* @__PURE__ */ jsx(_components.h2, { children: /* @__PURE__ */ jsx(_components.code, { children: "css-in-js" }) }),
		"\n",
		/* @__PURE__ */ jsx(_components.p, { children: "TypeScript 的帮助下，还会提供准确的 Design Token 值. 如：" }),
		"\n",
		/* @__PURE__ */ jsxs(_components.div, {
			"data-example": "",
			children: [/* @__PURE__ */ jsx(_components.div, {
				"data-example-container": "",
				children: /* @__PURE__ */ jsx(_components.codeblock4a44dc15, {})
			}), /* @__PURE__ */ jsx(_components.pre, {
				className: "language-tsx",
				children: /* @__PURE__ */ jsxs(_components.code, {
					className: "language-tsx",
					children: [
						/* @__PURE__ */ jsx(_components.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						/* @__PURE__ */ jsxs(_components.span, {
							className: "token imports",
							children: [
								/* @__PURE__ */ jsx(_components.span, {
									className: "token punctuation",
									children: "{"
								}),
								" ",
								/* @__PURE__ */ jsx(_components.span, {
									className: "token maybe-class-name",
									children: "Box"
								}),
								/* @__PURE__ */ jsx(_components.span, {
									className: "token punctuation",
									children: ","
								}),
								" alpha",
								/* @__PURE__ */ jsx(_components.span, {
									className: "token punctuation",
									children: ","
								}),
								" styled",
								/* @__PURE__ */ jsx(_components.span, {
									className: "token punctuation",
									children: ","
								}),
								" variant ",
								/* @__PURE__ */ jsx(_components.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token string",
							children: "\"@innoai-tech/vueuikit\""
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						/* @__PURE__ */ jsxs(_components.span, {
							className: "token imports",
							children: [
								/* @__PURE__ */ jsx(_components.span, {
									className: "token punctuation",
									children: "{"
								}),
								" t ",
								/* @__PURE__ */ jsx(_components.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token string",
							children: "\"@innoai-tech/vuekit\""
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token keyword module",
							children: "export"
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token keyword",
							children: "const"
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token maybe-class-name",
							children: "Button"
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token operator",
							children: "="
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token function",
							children: "styled"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "("
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token string",
							children: "\"button\""
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ","
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n  disabled",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token operator",
							children: ":"
						}),
						" t",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "."
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token method function property-access",
							children: "boolean"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "("
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ")"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "."
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token method function property-access",
							children: "optional"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "("
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ")"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "}"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ")"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "("
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n  bg",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token string",
							children: "\"none\""
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n  outline",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token string",
							children: "\"none\""
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n  border",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token string",
							children: "\"none\""
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n  px",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token number",
							children: "16"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n  h",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token number",
							children: "40"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n  rounded",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token string",
							children: "\"md\""
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n\n  ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token comment",
							children: "// 利用 TypeScript 的推导而来，且非 color 属性无该值"
						}),
						"\n  ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token comment",
							children: "// 实际将转换为 var(--vk-color-sys-primary)"
						}),
						"\n  ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token comment",
							children: "// sys-* 的 color 还会随暗黑/普通主题进行切换"
						}),
						"\n  color",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token string",
							children: "\"sys.primary\""
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n\n  ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token comment",
							children: "// color 变种"
						}),
						"\n  ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token comment",
							children: "// 实际将转换为 rbga(var(--vk-color-sys-primary-rgb) / 0.08)"
						}),
						"\n  bgColor",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token function",
							children: "variant"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "("
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token string",
							children: "\"sys.primary\""
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ","
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token function",
							children: "alpha"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "("
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token number",
							children: "0.08"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ")"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ")"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n\n  ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token comment",
							children: "// 通常情况下，组件 props 将转换成 data-<prop> 作为 attr"
						}),
						"\n  ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token comment",
							children: "// 即： <Button disabled/>  =>  <button data-disabled=true />"
						}),
						"\n  ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token comment",
							children: "// 同理，在自定义转换规则中，也建议如下做类似的转换，避免动态创建 CSSObject"
						}),
						"\n  _disabled",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n    color",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token function",
							children: "variant"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "("
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token string",
							children: "\"sys.on-surface\""
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ","
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token function",
							children: "alpha"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "("
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token number",
							children: "0.12"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ")"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ")"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n    bgColor",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token function",
							children: "variant"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "("
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token string",
							children: "\"sys.on-surface\""
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ","
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token function",
							children: "alpha"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "("
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token number",
							children: "0.08"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ")"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ")"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n  ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "}"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "}"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ")"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token keyword module",
							children: "export"
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token keyword module",
							children: "default"
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "("
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n  ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token keyword control-flow",
							children: "return"
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "("
						}),
						"\n    ",
						/* @__PURE__ */ jsxs(_components.span, {
							className: "token tag",
							children: [
								/* @__PURE__ */ jsxs(_components.span, {
									className: "token tag",
									children: [/* @__PURE__ */ jsx(_components.span, {
										className: "token punctuation",
										children: "<"
									}), /* @__PURE__ */ jsx(_components.span, {
										className: "token class-name",
										children: "Box"
									})]
								}),
								" ",
								/* @__PURE__ */ jsx(_components.span, {
									className: "token attr-name",
									children: "sx"
								}),
								/* @__PURE__ */ jsxs(_components.span, {
									className: "token script language-javascript",
									children: [
										/* @__PURE__ */ jsx(_components.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "{"
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "{"
										}),
										" display",
										/* @__PURE__ */ jsx(_components.span, {
											className: "token operator",
											children: ":"
										}),
										" ",
										/* @__PURE__ */ jsx(_components.span, {
											className: "token string",
											children: "\"flex\""
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: ","
										}),
										" gap",
										/* @__PURE__ */ jsx(_components.span, {
											className: "token operator",
											children: ":"
										}),
										" ",
										/* @__PURE__ */ jsx(_components.span, {
											className: "token number",
											children: "8"
										}),
										" ",
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "}"
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								/* @__PURE__ */ jsx(_components.span, {
									className: "token punctuation",
									children: ">"
								})
							]
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token plain-text",
							children: "\n      "
						}),
						/* @__PURE__ */ jsxs(_components.span, {
							className: "token tag",
							children: [/* @__PURE__ */ jsxs(_components.span, {
								className: "token tag",
								children: [/* @__PURE__ */ jsx(_components.span, {
									className: "token punctuation",
									children: "<"
								}), /* @__PURE__ */ jsx(_components.span, {
									className: "token class-name",
									children: "Button"
								})]
							}), /* @__PURE__ */ jsx(_components.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token plain-text",
							children: "按钮"
						}),
						/* @__PURE__ */ jsxs(_components.span, {
							className: "token tag",
							children: [/* @__PURE__ */ jsxs(_components.span, {
								className: "token tag",
								children: [/* @__PURE__ */ jsx(_components.span, {
									className: "token punctuation",
									children: "</"
								}), /* @__PURE__ */ jsx(_components.span, {
									className: "token class-name",
									children: "Button"
								})]
							}), /* @__PURE__ */ jsx(_components.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token plain-text",
							children: "\n      "
						}),
						/* @__PURE__ */ jsxs(_components.span, {
							className: "token tag",
							children: [
								/* @__PURE__ */ jsxs(_components.span, {
									className: "token tag",
									children: [/* @__PURE__ */ jsx(_components.span, {
										className: "token punctuation",
										children: "<"
									}), /* @__PURE__ */ jsx(_components.span, {
										className: "token class-name",
										children: "Button"
									})]
								}),
								" ",
								/* @__PURE__ */ jsx(_components.span, {
									className: "token attr-name",
									children: "disabled"
								}),
								/* @__PURE__ */ jsxs(_components.span, {
									className: "token script language-javascript",
									children: [
										/* @__PURE__ */ jsx(_components.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "{"
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token boolean",
											children: "true"
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								/* @__PURE__ */ jsx(_components.span, {
									className: "token punctuation",
									children: ">"
								})
							]
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token plain-text",
							children: "按钮"
						}),
						/* @__PURE__ */ jsxs(_components.span, {
							className: "token tag",
							children: [/* @__PURE__ */ jsxs(_components.span, {
								className: "token tag",
								children: [/* @__PURE__ */ jsx(_components.span, {
									className: "token punctuation",
									children: "</"
								}), /* @__PURE__ */ jsx(_components.span, {
									className: "token class-name",
									children: "Button"
								})]
							}), /* @__PURE__ */ jsx(_components.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token plain-text",
							children: "\n    "
						}),
						/* @__PURE__ */ jsxs(_components.span, {
							className: "token tag",
							children: [/* @__PURE__ */ jsxs(_components.span, {
								className: "token tag",
								children: [/* @__PURE__ */ jsx(_components.span, {
									className: "token punctuation",
									children: "</"
								}), /* @__PURE__ */ jsx(_components.span, {
									className: "token class-name",
									children: "Box"
								})]
							}), /* @__PURE__ */ jsx(_components.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						"\n  ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ")"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "}"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n"
					]
				})
			})]
		}),
		"\n",
		/* @__PURE__ */ jsxs(_components.p, { children: ["不同于其他框架中的 theme 定义，为了更准确的类型推导，需要由 DesignToken 进行创建\n详细请", /* @__PURE__ */ jsx(_components.a, {
			href: "https://github.com/innoai-tech/vuekit/blob/main/nodepkg/vueuikit/src/theming/m3",
			children: "参考源码"
		})] }),
		"\n",
		/* @__PURE__ */ jsxs(_components.p, { children: [
			"虽然底层使用的是 ",
			/* @__PURE__ */ jsx(_components.code, { children: "@emotion/*" }),
			"，但屏蔽掉了 ",
			/* @__PURE__ */ jsx(_components.code, { children: "array" }),
			" 等非 CSSObject 值的使用, 初衷是为了更稳定的类型推导。\n另外样式扩展有两种方式"
		] }),
		"\n",
		/* @__PURE__ */ jsx(_components.pre, {
			className: "language-tsx",
			children: /* @__PURE__ */ jsxs(_components.code, {
				className: "language-tsx",
				children: [
					/* @__PURE__ */ jsx(_components.span, {
						className: "token keyword module",
						children: "import"
					}),
					" ",
					/* @__PURE__ */ jsxs(_components.span, {
						className: "token imports",
						children: [
							/* @__PURE__ */ jsx(_components.span, {
								className: "token punctuation",
								children: "{"
							}),
							" t ",
							/* @__PURE__ */ jsx(_components.span, {
								className: "token punctuation",
								children: "}"
							})
						]
					}),
					" ",
					/* @__PURE__ */ jsx(_components.span, {
						className: "token keyword module",
						children: "from"
					}),
					" ",
					/* @__PURE__ */ jsx(_components.span, {
						className: "token string",
						children: "\"@innoai-tech/vuekit\""
					}),
					/* @__PURE__ */ jsx(_components.span, {
						className: "token punctuation",
						children: ";"
					}),
					"\n",
					/* @__PURE__ */ jsx(_components.span, {
						className: "token keyword module",
						children: "import"
					}),
					" ",
					/* @__PURE__ */ jsxs(_components.span, {
						className: "token imports",
						children: [
							/* @__PURE__ */ jsx(_components.span, {
								className: "token punctuation",
								children: "{"
							}),
							" styled",
							/* @__PURE__ */ jsx(_components.span, {
								className: "token punctuation",
								children: ","
							}),
							" ",
							/* @__PURE__ */ jsx(_components.span, {
								className: "token maybe-class-name",
								children: "SystemStyleObject"
							}),
							" ",
							/* @__PURE__ */ jsx(_components.span, {
								className: "token punctuation",
								children: "}"
							})
						]
					}),
					" ",
					/* @__PURE__ */ jsx(_components.span, {
						className: "token keyword module",
						children: "from"
					}),
					" ",
					/* @__PURE__ */ jsx(_components.span, {
						className: "token string",
						children: "\"@innoai-tech/vueuikit\""
					}),
					/* @__PURE__ */ jsx(_components.span, {
						className: "token punctuation",
						children: ";"
					}),
					"\n\n",
					/* @__PURE__ */ jsx(_components.span, {
						className: "token keyword",
						children: "const"
					}),
					" shared",
					/* @__PURE__ */ jsx(_components.span, {
						className: "token operator",
						children: ":"
					}),
					" ",
					/* @__PURE__ */ jsx(_components.span, {
						className: "token maybe-class-name",
						children: "SystemStyleObject"
					}),
					" ",
					/* @__PURE__ */ jsx(_components.span, {
						className: "token operator",
						children: "="
					}),
					" ",
					/* @__PURE__ */ jsx(_components.span, {
						className: "token punctuation",
						children: "{"
					}),
					"\n  color",
					/* @__PURE__ */ jsx(_components.span, {
						className: "token operator",
						children: ":"
					}),
					" ",
					/* @__PURE__ */ jsx(_components.span, {
						className: "token string",
						children: "\"sys.primary\""
					}),
					/* @__PURE__ */ jsx(_components.span, {
						className: "token punctuation",
						children: ","
					}),
					"\n  ",
					/* @__PURE__ */ jsx(_components.span, {
						className: "token comment",
						children: "// ..."
					}),
					"\n",
					/* @__PURE__ */ jsx(_components.span, {
						className: "token punctuation",
						children: "}"
					}),
					/* @__PURE__ */ jsx(_components.span, {
						className: "token punctuation",
						children: ";"
					}),
					"\n\n",
					/* @__PURE__ */ jsx(_components.span, {
						className: "token comment",
						children: "// 直接通过 extends 复用样式"
					}),
					"\n",
					/* @__PURE__ */ jsx(_components.span, {
						className: "token comment",
						children: "//"
					}),
					"\n",
					/* @__PURE__ */ jsx(_components.span, {
						className: "token comment",
						children: "// 组件 props 定义需要重新声明"
					}),
					"\n",
					/* @__PURE__ */ jsx(_components.span, {
						className: "token keyword module",
						children: "export"
					}),
					" ",
					/* @__PURE__ */ jsx(_components.span, {
						className: "token keyword",
						children: "const"
					}),
					" ",
					/* @__PURE__ */ jsx(_components.span, {
						className: "token maybe-class-name",
						children: "ButtonBase"
					}),
					" ",
					/* @__PURE__ */ jsx(_components.span, {
						className: "token operator",
						children: "="
					}),
					" ",
					/* @__PURE__ */ jsx(_components.span, {
						className: "token function",
						children: "styled"
					}),
					/* @__PURE__ */ jsx(_components.span, {
						className: "token punctuation",
						children: "("
					}),
					/* @__PURE__ */ jsx(_components.span, {
						className: "token string",
						children: "\"button\""
					}),
					/* @__PURE__ */ jsx(_components.span, {
						className: "token punctuation",
						children: ","
					}),
					" ",
					/* @__PURE__ */ jsx(_components.span, {
						className: "token punctuation",
						children: "{"
					}),
					"\n  disabled",
					/* @__PURE__ */ jsx(_components.span, {
						className: "token operator",
						children: ":"
					}),
					" t",
					/* @__PURE__ */ jsx(_components.span, {
						className: "token punctuation",
						children: "."
					}),
					/* @__PURE__ */ jsx(_components.span, {
						className: "token method function property-access",
						children: "boolean"
					}),
					/* @__PURE__ */ jsx(_components.span, {
						className: "token punctuation",
						children: "("
					}),
					/* @__PURE__ */ jsx(_components.span, {
						className: "token punctuation",
						children: ")"
					}),
					/* @__PURE__ */ jsx(_components.span, {
						className: "token punctuation",
						children: "."
					}),
					/* @__PURE__ */ jsx(_components.span, {
						className: "token method function property-access",
						children: "optional"
					}),
					/* @__PURE__ */ jsx(_components.span, {
						className: "token punctuation",
						children: "("
					}),
					/* @__PURE__ */ jsx(_components.span, {
						className: "token punctuation",
						children: ")"
					}),
					/* @__PURE__ */ jsx(_components.span, {
						className: "token punctuation",
						children: ","
					}),
					"\n",
					/* @__PURE__ */ jsx(_components.span, {
						className: "token punctuation",
						children: "}"
					}),
					/* @__PURE__ */ jsx(_components.span, {
						className: "token punctuation",
						children: ")"
					}),
					/* @__PURE__ */ jsx(_components.span, {
						className: "token punctuation",
						children: "("
					}),
					/* @__PURE__ */ jsx(_components.span, {
						className: "token punctuation",
						children: "{"
					}),
					"\n  ",
					/* @__PURE__ */ jsx(_components.span, {
						className: "token keyword",
						children: "extends"
					}),
					/* @__PURE__ */ jsx(_components.span, {
						className: "token operator",
						children: ":"
					}),
					" ",
					/* @__PURE__ */ jsx(_components.span, {
						className: "token punctuation",
						children: "["
					}),
					"shared",
					/* @__PURE__ */ jsx(_components.span, {
						className: "token punctuation",
						children: "]"
					}),
					/* @__PURE__ */ jsx(_components.span, {
						className: "token punctuation",
						children: ","
					}),
					"\n  ",
					/* @__PURE__ */ jsx(_components.span, {
						className: "token comment",
						children: "// ..."
					}),
					"\n",
					/* @__PURE__ */ jsx(_components.span, {
						className: "token punctuation",
						children: "}"
					}),
					/* @__PURE__ */ jsx(_components.span, {
						className: "token punctuation",
						children: ")"
					}),
					/* @__PURE__ */ jsx(_components.span, {
						className: "token punctuation",
						children: ";"
					}),
					"\n\n",
					/* @__PURE__ */ jsx(_components.span, {
						className: "token comment",
						children: "// 通过 styled 覆写样式"
					}),
					"\n",
					/* @__PURE__ */ jsx(_components.span, {
						className: "token comment",
						children: "// 可以完全继承 BaseButton 的 props 定义"
					}),
					"\n",
					/* @__PURE__ */ jsx(_components.span, {
						className: "token keyword module",
						children: "export"
					}),
					" ",
					/* @__PURE__ */ jsx(_components.span, {
						className: "token keyword",
						children: "const"
					}),
					" ",
					/* @__PURE__ */ jsx(_components.span, {
						className: "token maybe-class-name",
						children: "Button"
					}),
					" ",
					/* @__PURE__ */ jsx(_components.span, {
						className: "token operator",
						children: "="
					}),
					" ",
					/* @__PURE__ */ jsx(_components.span, {
						className: "token function",
						children: "styled"
					}),
					/* @__PURE__ */ jsx(_components.span, {
						className: "token punctuation",
						children: "("
					}),
					/* @__PURE__ */ jsx(_components.span, {
						className: "token maybe-class-name",
						children: "ButtonBase"
					}),
					/* @__PURE__ */ jsx(_components.span, {
						className: "token punctuation",
						children: ")"
					}),
					/* @__PURE__ */ jsx(_components.span, {
						className: "token punctuation",
						children: "("
					}),
					/* @__PURE__ */ jsx(_components.span, {
						className: "token punctuation",
						children: "{"
					}),
					"\n  ",
					/* @__PURE__ */ jsx(_components.span, {
						className: "token comment",
						children: "// ..."
					}),
					"\n",
					/* @__PURE__ */ jsx(_components.span, {
						className: "token punctuation",
						children: "}"
					}),
					/* @__PURE__ */ jsx(_components.span, {
						className: "token punctuation",
						children: ")"
					}),
					/* @__PURE__ */ jsx(_components.span, {
						className: "token punctuation",
						children: ";"
					}),
					"\n"
				]
			})
		}),
		"\n",
		/* @__PURE__ */ jsxs(_components.p, { children: [
			"除 ",
			/* @__PURE__ */ jsx(_components.code, { children: "styled" }),
			" 外，我们还可以使用 ",
			/* @__PURE__ */ jsx(_components.code, { children: "Box" }),
			" 进行快速样式定义, 通过 ",
			/* @__PURE__ */ jsx(_components.code, { children: "sx" }),
			" prop。 并且 ",
			/* @__PURE__ */ jsx(_components.code, { children: "component" }),
			" prop 支持我们随时切换 tag 或者\n组件，并且其他 props 会随着不同的 component 切换对应 props 类型约束与提示。"
		] }),
		"\n",
		/* @__PURE__ */ jsx(_components.p, { children: "同样的，通过 styled 创建的组件也有一样的特性。" }),
		"\n",
		/* @__PURE__ */ jsxs(_components.div, {
			"data-example": "",
			children: [/* @__PURE__ */ jsx(_components.div, {
				"data-example-container": "",
				children: /* @__PURE__ */ jsx(_components.codeblock785f3ec7, {})
			}), /* @__PURE__ */ jsx(_components.pre, {
				className: "language-tsx",
				children: /* @__PURE__ */ jsxs(_components.code, {
					className: "language-tsx",
					children: [
						/* @__PURE__ */ jsx(_components.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						/* @__PURE__ */ jsxs(_components.span, {
							className: "token imports",
							children: [
								/* @__PURE__ */ jsx(_components.span, {
									className: "token punctuation",
									children: "{"
								}),
								" component ",
								/* @__PURE__ */ jsx(_components.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token string",
							children: "\"@innoai-tech/vuekit\""
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						/* @__PURE__ */ jsxs(_components.span, {
							className: "token imports",
							children: [
								/* @__PURE__ */ jsx(_components.span, {
									className: "token punctuation",
									children: "{"
								}),
								" ",
								/* @__PURE__ */ jsx(_components.span, {
									className: "token maybe-class-name",
									children: "Box"
								}),
								" ",
								/* @__PURE__ */ jsx(_components.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token string",
							children: "\"@innoai-tech/vueuikit\""
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token keyword module",
							children: "export"
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token keyword module",
							children: "default"
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token function",
							children: "component"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "("
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "("
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "("
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "("
						}),
						"\n  ",
						/* @__PURE__ */ jsxs(_components.span, {
							className: "token tag",
							children: [
								/* @__PURE__ */ jsxs(_components.span, {
									className: "token tag",
									children: [/* @__PURE__ */ jsx(_components.span, {
										className: "token punctuation",
										children: "<"
									}), /* @__PURE__ */ jsx(_components.span, {
										className: "token class-name",
										children: "Box"
									})]
								}),
								" ",
								/* @__PURE__ */ jsx(_components.span, {
									className: "token attr-name",
									children: "sx"
								}),
								/* @__PURE__ */ jsxs(_components.span, {
									className: "token script language-javascript",
									children: [
										/* @__PURE__ */ jsx(_components.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "{"
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "{"
										}),
										" display",
										/* @__PURE__ */ jsx(_components.span, {
											className: "token operator",
											children: ":"
										}),
										" ",
										/* @__PURE__ */ jsx(_components.span, {
											className: "token string",
											children: "\"flex\""
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: ","
										}),
										" padding",
										/* @__PURE__ */ jsx(_components.span, {
											className: "token operator",
											children: ":"
										}),
										" ",
										/* @__PURE__ */ jsx(_components.span, {
											className: "token number",
											children: "10"
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: ","
										}),
										" containerStyle",
										/* @__PURE__ */ jsx(_components.span, {
											className: "token operator",
											children: ":"
										}),
										" ",
										/* @__PURE__ */ jsx(_components.span, {
											className: "token string",
											children: "\"sys.primary\""
										}),
										" ",
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "}"
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								/* @__PURE__ */ jsx(_components.span, {
									className: "token punctuation",
									children: ">"
								})
							]
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token plain-text",
							children: "\n    "
						}),
						/* @__PURE__ */ jsxs(_components.span, {
							className: "token tag",
							children: [
								/* @__PURE__ */ jsxs(_components.span, {
									className: "token tag",
									children: [/* @__PURE__ */ jsx(_components.span, {
										className: "token punctuation",
										children: "<"
									}), /* @__PURE__ */ jsx(_components.span, {
										className: "token class-name",
										children: "Box"
									})]
								}),
								" ",
								/* @__PURE__ */ jsx(_components.span, {
									className: "token attr-name",
									children: "sx"
								}),
								/* @__PURE__ */ jsxs(_components.span, {
									className: "token script language-javascript",
									children: [
										/* @__PURE__ */ jsx(_components.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "{"
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "{"
										}),
										" containerStyle",
										/* @__PURE__ */ jsx(_components.span, {
											className: "token operator",
											children: ":"
										}),
										" ",
										/* @__PURE__ */ jsx(_components.span, {
											className: "token string",
											children: "\"sys.surface-container\""
										}),
										" ",
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "}"
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								" ",
								/* @__PURE__ */ jsx(_components.span, {
									className: "token attr-name",
									children: "component"
								}),
								/* @__PURE__ */ jsxs(_components.span, {
									className: "token script language-javascript",
									children: [
										/* @__PURE__ */ jsx(_components.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "{"
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token string",
											children: "\"button\""
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								/* @__PURE__ */ jsx(_components.span, {
									className: "token punctuation",
									children: ">"
								})
							]
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token plain-text",
							children: "\n      Hi 111\n    "
						}),
						/* @__PURE__ */ jsxs(_components.span, {
							className: "token tag",
							children: [/* @__PURE__ */ jsxs(_components.span, {
								className: "token tag",
								children: [/* @__PURE__ */ jsx(_components.span, {
									className: "token punctuation",
									children: "</"
								}), /* @__PURE__ */ jsx(_components.span, {
									className: "token class-name",
									children: "Box"
								})]
							}), /* @__PURE__ */ jsx(_components.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token plain-text",
							children: "\n  "
						}),
						/* @__PURE__ */ jsxs(_components.span, {
							className: "token tag",
							children: [/* @__PURE__ */ jsxs(_components.span, {
								className: "token tag",
								children: [/* @__PURE__ */ jsx(_components.span, {
									className: "token punctuation",
									children: "</"
								}), /* @__PURE__ */ jsx(_components.span, {
									className: "token class-name",
									children: "Box"
								})]
							}), /* @__PURE__ */ jsx(_components.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						"\n",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ")"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ")"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n"
					]
				})
			})]
		}),
		"\n",
		/* @__PURE__ */ jsx(_components.h3, { children: "CSS Selector 简写规则" }),
		"\n",
		/* @__PURE__ */ jsxs(_components.p, { children: [
			"另外，为了简化 ",
			/* @__PURE__ */ jsx(_components.code, { children: "\"&:hover\"" }),
			" ",
			/* @__PURE__ */ jsx(_components.code, { children: "&[aria-current='page']" }),
			" 等选择器声明，\n提供的如下的简化规则："
		] }),
		"\n",
		/* @__PURE__ */ jsxs(_components.ul, { children: [
			"\n",
			/* @__PURE__ */ jsxs(_components.li, { children: [
				"所有名称支持 ",
				/* @__PURE__ */ jsx(_components.em, { children: "下划线命名" }),
				" 或者 ",
				/* @__PURE__ */ jsx(_components.em, { children: "驼峰命名" }),
				"，最终都将转换为 ",
				/* @__PURE__ */ jsx(_components.em, { children: "短横小写命名" }),
				", ",
				/* @__PURE__ */ jsx(_components.code, { children: "=" }),
				" 用 ",
				/* @__PURE__ */ jsx(_components.code, { children: "__" }),
				" 替代"
			] }),
			"\n",
			/* @__PURE__ */ jsxs(_components.li, { children: [
				/* @__PURE__ */ jsx(_components.code, { children: "_*" }),
				" 一般表示",
				/* @__PURE__ */ jsx(_components.strong, { children: "状态" }),
				"，可用值",
				"\n",
				/* @__PURE__ */ jsxs(_components.ul, { children: [
					"\n",
					/* @__PURE__ */ jsxs(_components.li, { children: [
						/* @__PURE__ */ jsx(_components.code, { children: "data-*" }),
						" 和 ",
						/* @__PURE__ */ jsx(_components.code, { children: "aria-*" }),
						", `",
						"\n",
						/* @__PURE__ */ jsxs(_components.ul, { children: [
							"\n",
							/* @__PURE__ */ jsxs(_components.li, { children: [
								"如 ",
								/* @__PURE__ */ jsx(_components.code, { children: "_aria_current__page" }),
								"： 等效为 ",
								/* @__PURE__ */ jsx(_components.code, { children: "&[aria-current='page']" }),
								","
							] }),
							"\n"
						] }),
						"\n"
					] }),
					"\n",
					/* @__PURE__ */ jsxs(_components.li, { children: [
						/* @__PURE__ */ jsx(_components.code, { children: "before" }),
						"，",
						/* @__PURE__ */ jsx(_components.code, { children: "after" }),
						" 等",
						/* @__PURE__ */ jsx(_components.a, {
							href: "https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-elements",
							children: "伪元素"
						}),
						", 需要声明 \"$\" 表示为元素",
						"\n",
						/* @__PURE__ */ jsxs(_components.ul, { children: [
							"\n",
							/* @__PURE__ */ jsxs(_components.li, { children: [
								"如 ",
								/* @__PURE__ */ jsx(_components.code, { children: "_$before" }),
								"： 等效为 ",
								/* @__PURE__ */ jsx(_components.code, { children: "&::before" })
							] }),
							"\n"
						] }),
						"\n"
					] }),
					"\n",
					/* @__PURE__ */ jsxs(_components.li, { children: [
						/* @__PURE__ */ jsx(_components.code, { children: "hover" }),
						", ",
						/* @__PURE__ */ jsx(_components.code, { children: "focus" }),
						", ",
						/* @__PURE__ */ jsx(_components.code, { children: "active" }),
						", ",
						/* @__PURE__ */ jsx(_components.code, { children: "disabled" }),
						" 等",
						/* @__PURE__ */ jsx(_components.a, {
							href: "https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-classes",
							children: "伪类"
						}),
						"\n",
						/* @__PURE__ */ jsxs(_components.ul, { children: [
							"\n",
							/* @__PURE__ */ jsxs(_components.li, { children: [
								"如 ",
								/* @__PURE__ */ jsx(_components.code, { children: "_hover" }),
								"： 等效为 ",
								/* @__PURE__ */ jsx(_components.code, { children: "&:hover, &.hover, &[data-hover]:not([data-hover='false'])" }),
								","
							] }),
							"\n"
						] }),
						"\n"
					] }),
					"\n",
					/* @__PURE__ */ jsxs(_components.li, { children: [
						"以及其他自定义状态",
						"\n",
						/* @__PURE__ */ jsxs(_components.ul, { children: [
							"\n",
							/* @__PURE__ */ jsxs(_components.li, { children: [
								"如 ",
								/* @__PURE__ */ jsx(_components.code, { children: "_has_icon" }),
								"： 等效为 ",
								/* @__PURE__ */ jsx(_components.code, { children: "&[data-has-icon]:not([data-has-icon='false'])" })
							] }),
							"\n"
						] }),
						"\n"
					] }),
					"\n"
				] }),
				"\n"
			] }),
			"\n",
			/* @__PURE__ */ jsxs(_components.li, { children: [
				/* @__PURE__ */ jsx(_components.code, { children: "$*" }),
				" 或 ",
				/* @__PURE__ */ jsx(_components.code, { children: "*$" }),
				"，一般指代",
				/* @__PURE__ */ jsx(_components.strong, { children: "元素节点" }),
				", 可用值为",
				"\n",
				/* @__PURE__ */ jsxs(_components.ul, { children: [
					"\n",
					/* @__PURE__ */ jsxs(_components.li, { children: [
						/* @__PURE__ */ jsx(_components.code, { children: "data-*" }),
						" 和 ",
						/* @__PURE__ */ jsx(_components.code, { children: "aria-*" }),
						", `",
						"\n",
						/* @__PURE__ */ jsxs(_components.ul, { children: [
							"\n",
							/* @__PURE__ */ jsxs(_components.li, { children: [
								"如 ",
								/* @__PURE__ */ jsx(_components.code, { children: "$data_icon" }),
								"： 等效为 ",
								/* @__PURE__ */ jsx(_components.code, { children: "&[data-icon]" })
							] }),
							"\n",
							/* @__PURE__ */ jsxs(_components.li, { children: [
								"如 ",
								/* @__PURE__ */ jsx(_components.code, { children: "$data_popper_arrow" }),
								"： 等效为 ",
								/* @__PURE__ */ jsx(_components.code, { children: "&[data-popper-arrow]" })
							] }),
							"\n",
							/* @__PURE__ */ jsxs(_components.li, { children: [
								"如 ",
								/* @__PURE__ */ jsx(_components.code, { children: "data_popper_placement__right$" }),
								"： 等效为 ",
								/* @__PURE__ */ jsx(_components.code, { children: "[data-popper-placement=right] &" })
							] }),
							"\n"
						] }),
						"\n"
					] }),
					"\n"
				] }),
				"\n"
			] }),
			"\n"
		] })
	] });
}
function MDXContent$1(props = {}) {
	const { wrapper: MDXLayout } = props.components || {};
	return MDXLayout ? jsx(MDXLayout, {
		...props,
		children: /* @__PURE__ */ jsx(_createMdxContent$1, { ...props })
	}) : _createMdxContent$1(props);
}
var example_default = /* @__PURE__ */ defineComponent(() => {
	return () => h(MDXContent$1, { components: {
		codeblock4a44dc15: index_md_CodeBlock4a44dc15_default,
		codeblock785f3ec7: index_md_CodeBlock785f3ec7_default
	} });
});
var popper_md_CodeBlockd4735e3a_default = /* @__PURE__ */ component(() => {
	const isOpen = /* @__PURE__ */ ref(false);
	const sameWidth = /* @__PURE__ */ size({ apply({ elements, rects }) {
		Object.assign(elements.floating.style, { width: `${rects.reference.width}px` });
	} });
	return () => /* @__PURE__ */ jsx(Popper, {
		isOpen: isOpen.value,
		onClickOutside: () => isOpen.value = false,
		placement: "bottom-start",
		modifiers: [sameWidth],
		$content: /* @__PURE__ */ jsxs(Box, {
			sx: { containerStyle: "sys.on-surface" },
			children: [
				"Popper ",
				`${isOpen.value}`,
				"!"
			]
		}),
		children: /* @__PURE__ */ jsx(Box, {
			sx: { p: 4 },
			component: "button",
			onClick: () => isOpen.value = !isOpen.value,
			children: "Click Trigger Popper"
		})
	});
});
var popper_md_CodeBlocke7f6c011_default = /* @__PURE__ */ component(() => {
	const isOpen = /* @__PURE__ */ ref(false);
	return () => /* @__PURE__ */ jsx(Popper, {
		isOpen: isOpen.value,
		$content: /* @__PURE__ */ jsx(Box, {
			sx: { containerStyle: "sys.on-surface" },
			children: "Popper Content!"
		}),
		children: /* @__PURE__ */ jsx(Box, {
			component: "button",
			sx: { p: 4 },
			onMouseover: () => isOpen.value = true,
			onMouseout: () => isOpen.value = false,
			children: "Popper Trigger"
		})
	});
});
const FadeInOutTransition = /* @__PURE__ */ defineTransition({
	from: { opacity: 0 },
	to: { opacity: 1 },
	duration: transition.duration.md1,
	easing: transition.easing.standard.accelerate
}, {
	from: { opacity: 1 },
	to: { opacity: 0 },
	duration: transition.duration.sm4,
	easing: transition.easing.standard.decelerate
});
var popper_md_CodeBlock4a44dc15_default = /* @__PURE__ */ component(() => {
	const isOpen = /* @__PURE__ */ ref(true);
	return () => /* @__PURE__ */ jsx(Popper, {
		isOpen: isOpen.value,
		$transition: ({ content }) => /* @__PURE__ */ jsx(FadeInOutTransition, { children: content }),
		$content: /* @__PURE__ */ jsxs(Box, {
			sx: {
				containerStyle: "sys.on-surface",
				shadow: "2",
				py: 2,
				px: 4,
				rounded: "sm"
			},
			children: [
				"Popper ",
				`${isOpen.value}`,
				"!"
			]
		}),
		children: /* @__PURE__ */ jsx(Box, {
			sx: { p: 4 },
			component: "button",
			onMouseover: () => isOpen.value = true,
			onMouseout: () => isOpen.value = false,
			children: "Animated Popper"
		})
	});
});
function _createMdxContent(props) {
	const _components = {
		code: "code",
		codeblock4a44dc15: "codeblock4a44dc15",
		codeblockd4735e3a: "codeblockd4735e3a",
		codeblocke7f6c011: "codeblocke7f6c011",
		div: "div",
		h2: "h2",
		pre: "pre",
		span: "span",
		...props.components
	};
	return jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(_components.h2, { children: "Normal Popper" }),
		"\n",
		/* @__PURE__ */ jsxs(_components.div, {
			"data-example": "",
			children: [/* @__PURE__ */ jsx(_components.div, {
				"data-example-container": "",
				children: /* @__PURE__ */ jsx(_components.codeblockd4735e3a, {})
			}), /* @__PURE__ */ jsx(_components.pre, {
				className: "language-tsx",
				children: /* @__PURE__ */ jsxs(_components.code, {
					className: "language-tsx",
					children: [
						/* @__PURE__ */ jsx(_components.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						/* @__PURE__ */ jsxs(_components.span, {
							className: "token imports",
							children: [
								/* @__PURE__ */ jsx(_components.span, {
									className: "token punctuation",
									children: "{"
								}),
								" component ",
								/* @__PURE__ */ jsx(_components.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token string",
							children: "\"@innoai-tech/vuekit\""
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						/* @__PURE__ */ jsxs(_components.span, {
							className: "token imports",
							children: [
								/* @__PURE__ */ jsx(_components.span, {
									className: "token punctuation",
									children: "{"
								}),
								" ",
								/* @__PURE__ */ jsx(_components.span, {
									className: "token maybe-class-name",
									children: "Box"
								}),
								/* @__PURE__ */ jsx(_components.span, {
									className: "token punctuation",
									children: ","
								}),
								" ",
								/* @__PURE__ */ jsx(_components.span, {
									className: "token maybe-class-name",
									children: "Popper"
								}),
								" ",
								/* @__PURE__ */ jsx(_components.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token string",
							children: "\"@innoai-tech/vueuikit\""
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						/* @__PURE__ */ jsxs(_components.span, {
							className: "token imports",
							children: [
								/* @__PURE__ */ jsx(_components.span, {
									className: "token punctuation",
									children: "{"
								}),
								" size ",
								/* @__PURE__ */ jsx(_components.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token string",
							children: "\"@floating-ui/dom\""
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						/* @__PURE__ */ jsxs(_components.span, {
							className: "token imports",
							children: [
								/* @__PURE__ */ jsx(_components.span, {
									className: "token punctuation",
									children: "{"
								}),
								" ref ",
								/* @__PURE__ */ jsx(_components.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token string",
							children: "\"vue\""
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token keyword module",
							children: "export"
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token keyword module",
							children: "default"
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token function",
							children: "component"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "("
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "("
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n  ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token keyword",
							children: "const"
						}),
						" isOpen ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token operator",
							children: "="
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token function",
							children: "ref"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "("
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token boolean",
							children: "false"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ")"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n  ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token keyword",
							children: "const"
						}),
						" sameWidth ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token operator",
							children: "="
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token function",
							children: "size"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "("
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n    ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token function",
							children: "apply"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "("
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "{"
						}),
						" elements",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ","
						}),
						" rects ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "}"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n      ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token known-class-name class-name",
							children: "Object"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "."
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token method function property-access",
							children: "assign"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "("
						}),
						"elements",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "."
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token property-access",
							children: "floating"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "."
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token property-access",
							children: "style"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ","
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n        width",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						/* @__PURE__ */ jsxs(_components.span, {
							className: "token template-string",
							children: [
								/* @__PURE__ */ jsx(_components.span, {
									className: "token template-punctuation string",
									children: "`"
								}),
								/* @__PURE__ */ jsxs(_components.span, {
									className: "token interpolation",
									children: [
										/* @__PURE__ */ jsx(_components.span, {
											className: "token interpolation-punctuation punctuation",
											children: "${"
										}),
										"rects",
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "."
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token property-access",
											children: "reference"
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "."
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token property-access",
											children: "width"
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token interpolation-punctuation punctuation",
											children: "}"
										})
									]
								}),
								/* @__PURE__ */ jsx(_components.span, {
									className: "token string",
									children: "px"
								}),
								/* @__PURE__ */ jsx(_components.span, {
									className: "token template-punctuation string",
									children: "`"
								})
							]
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n      ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "}"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ")"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n    ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "}"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n  ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "}"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ")"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n  ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token keyword control-flow",
							children: "return"
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "("
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "("
						}),
						"\n    ",
						/* @__PURE__ */ jsxs(_components.span, {
							className: "token tag",
							children: [
								/* @__PURE__ */ jsxs(_components.span, {
									className: "token tag",
									children: [/* @__PURE__ */ jsx(_components.span, {
										className: "token punctuation",
										children: "<"
									}), /* @__PURE__ */ jsx(_components.span, {
										className: "token class-name",
										children: "Popper"
									})]
								}),
								"\n      ",
								/* @__PURE__ */ jsx(_components.span, {
									className: "token attr-name",
									children: "isOpen"
								}),
								/* @__PURE__ */ jsxs(_components.span, {
									className: "token script language-javascript",
									children: [
										/* @__PURE__ */ jsx(_components.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "{"
										}),
										"isOpen",
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "."
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token property-access",
											children: "value"
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n      ",
								/* @__PURE__ */ jsx(_components.span, {
									className: "token attr-name",
									children: "onClickOutside"
								}),
								/* @__PURE__ */ jsxs(_components.span, {
									className: "token script language-javascript",
									children: [
										/* @__PURE__ */ jsx(_components.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "{"
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "("
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: ")"
										}),
										" ",
										/* @__PURE__ */ jsx(_components.span, {
											className: "token arrow operator",
											children: "=>"
										}),
										" ",
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "("
										}),
										"isOpen",
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "."
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token property-access",
											children: "value"
										}),
										" ",
										/* @__PURE__ */ jsx(_components.span, {
											className: "token operator",
											children: "="
										}),
										" ",
										/* @__PURE__ */ jsx(_components.span, {
											className: "token boolean",
											children: "false"
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: ")"
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n      ",
								/* @__PURE__ */ jsx(_components.span, {
									className: "token attr-name",
									children: "placement"
								}),
								/* @__PURE__ */ jsxs(_components.span, {
									className: "token script language-javascript",
									children: [
										/* @__PURE__ */ jsx(_components.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "{"
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token string",
											children: "\"bottom-start\""
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n      ",
								/* @__PURE__ */ jsx(_components.span, {
									className: "token attr-name",
									children: "modifiers"
								}),
								/* @__PURE__ */ jsxs(_components.span, {
									className: "token script language-javascript",
									children: [
										/* @__PURE__ */ jsx(_components.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "{"
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "["
										}),
										"sameWidth",
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "]"
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n      ",
								/* @__PURE__ */ jsx(_components.span, {
									className: "token attr-name",
									children: "$content"
								}),
								/* @__PURE__ */ jsxs(_components.span, {
									className: "token script language-javascript",
									children: [
										/* @__PURE__ */ jsx(_components.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "{"
										}),
										"\n        ",
										/* @__PURE__ */ jsxs(_components.span, {
											className: "token tag",
											children: [
												/* @__PURE__ */ jsxs(_components.span, {
													className: "token tag",
													children: [/* @__PURE__ */ jsx(_components.span, {
														className: "token punctuation",
														children: "<"
													}), /* @__PURE__ */ jsx(_components.span, {
														className: "token class-name",
														children: "Box"
													})]
												}),
												" ",
												/* @__PURE__ */ jsx(_components.span, {
													className: "token attr-name",
													children: "sx"
												}),
												/* @__PURE__ */ jsxs(_components.span, {
													className: "token script language-javascript",
													children: [
														/* @__PURE__ */ jsx(_components.span, {
															className: "token script-punctuation punctuation",
															children: "="
														}),
														/* @__PURE__ */ jsx(_components.span, {
															className: "token punctuation",
															children: "{"
														}),
														/* @__PURE__ */ jsx(_components.span, {
															className: "token punctuation",
															children: "{"
														}),
														" containerStyle",
														/* @__PURE__ */ jsx(_components.span, {
															className: "token operator",
															children: ":"
														}),
														" ",
														/* @__PURE__ */ jsx(_components.span, {
															className: "token string",
															children: "\"sys.on-surface\""
														}),
														" ",
														/* @__PURE__ */ jsx(_components.span, {
															className: "token punctuation",
															children: "}"
														}),
														/* @__PURE__ */ jsx(_components.span, {
															className: "token punctuation",
															children: "}"
														})
													]
												}),
												/* @__PURE__ */ jsx(_components.span, {
													className: "token punctuation",
													children: ">"
												})
											]
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token plain-text",
											children: "\n          Popper "
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "{"
										}),
										/* @__PURE__ */ jsxs(_components.span, {
											className: "token template-string",
											children: [
												/* @__PURE__ */ jsx(_components.span, {
													className: "token template-punctuation string",
													children: "`"
												}),
												/* @__PURE__ */ jsxs(_components.span, {
													className: "token interpolation",
													children: [
														/* @__PURE__ */ jsx(_components.span, {
															className: "token interpolation-punctuation punctuation",
															children: "${"
														}),
														"isOpen",
														/* @__PURE__ */ jsx(_components.span, {
															className: "token punctuation",
															children: "."
														}),
														/* @__PURE__ */ jsx(_components.span, {
															className: "token property-access",
															children: "value"
														}),
														/* @__PURE__ */ jsx(_components.span, {
															className: "token interpolation-punctuation punctuation",
															children: "}"
														})
													]
												}),
												/* @__PURE__ */ jsx(_components.span, {
													className: "token template-punctuation string",
													children: "`"
												})
											]
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "}"
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token plain-text",
											children: "!\n        "
										}),
										/* @__PURE__ */ jsxs(_components.span, {
											className: "token tag",
											children: [/* @__PURE__ */ jsxs(_components.span, {
												className: "token tag",
												children: [/* @__PURE__ */ jsx(_components.span, {
													className: "token punctuation",
													children: "</"
												}), /* @__PURE__ */ jsx(_components.span, {
													className: "token class-name",
													children: "Box"
												})]
											}), /* @__PURE__ */ jsx(_components.span, {
												className: "token punctuation",
												children: ">"
											})]
										}),
										"\n      ",
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n    ",
								/* @__PURE__ */ jsx(_components.span, {
									className: "token punctuation",
									children: ">"
								})
							]
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token plain-text",
							children: "\n      "
						}),
						/* @__PURE__ */ jsxs(_components.span, {
							className: "token tag",
							children: [
								/* @__PURE__ */ jsxs(_components.span, {
									className: "token tag",
									children: [/* @__PURE__ */ jsx(_components.span, {
										className: "token punctuation",
										children: "<"
									}), /* @__PURE__ */ jsx(_components.span, {
										className: "token class-name",
										children: "Box"
									})]
								}),
								"\n        ",
								/* @__PURE__ */ jsx(_components.span, {
									className: "token attr-name",
									children: "sx"
								}),
								/* @__PURE__ */ jsxs(_components.span, {
									className: "token script language-javascript",
									children: [
										/* @__PURE__ */ jsx(_components.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "{"
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "{"
										}),
										" p",
										/* @__PURE__ */ jsx(_components.span, {
											className: "token operator",
											children: ":"
										}),
										" ",
										/* @__PURE__ */ jsx(_components.span, {
											className: "token number",
											children: "4"
										}),
										" ",
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "}"
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n        ",
								/* @__PURE__ */ jsx(_components.span, {
									className: "token attr-name",
									children: "component"
								}),
								/* @__PURE__ */ jsxs(_components.span, {
									className: "token script language-javascript",
									children: [
										/* @__PURE__ */ jsx(_components.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "{"
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token string",
											children: "\"button\""
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n        ",
								/* @__PURE__ */ jsx(_components.span, {
									className: "token attr-name",
									children: "onClick"
								}),
								/* @__PURE__ */ jsxs(_components.span, {
									className: "token script language-javascript",
									children: [
										/* @__PURE__ */ jsx(_components.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "{"
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "("
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: ")"
										}),
										" ",
										/* @__PURE__ */ jsx(_components.span, {
											className: "token arrow operator",
											children: "=>"
										}),
										" ",
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "("
										}),
										"isOpen",
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "."
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token property-access",
											children: "value"
										}),
										" ",
										/* @__PURE__ */ jsx(_components.span, {
											className: "token operator",
											children: "="
										}),
										" ",
										/* @__PURE__ */ jsx(_components.span, {
											className: "token operator",
											children: "!"
										}),
										"isOpen",
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "."
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token property-access",
											children: "value"
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: ")"
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n      ",
								/* @__PURE__ */ jsx(_components.span, {
									className: "token punctuation",
									children: ">"
								})
							]
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token plain-text",
							children: "\n        Click Trigger Popper\n      "
						}),
						/* @__PURE__ */ jsxs(_components.span, {
							className: "token tag",
							children: [/* @__PURE__ */ jsxs(_components.span, {
								className: "token tag",
								children: [/* @__PURE__ */ jsx(_components.span, {
									className: "token punctuation",
									children: "</"
								}), /* @__PURE__ */ jsx(_components.span, {
									className: "token class-name",
									children: "Box"
								})]
							}), /* @__PURE__ */ jsx(_components.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token plain-text",
							children: "\n    "
						}),
						/* @__PURE__ */ jsxs(_components.span, {
							className: "token tag",
							children: [/* @__PURE__ */ jsxs(_components.span, {
								className: "token tag",
								children: [/* @__PURE__ */ jsx(_components.span, {
									className: "token punctuation",
									children: "</"
								}), /* @__PURE__ */ jsx(_components.span, {
									className: "token class-name",
									children: "Popper"
								})]
							}), /* @__PURE__ */ jsx(_components.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						"\n  ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ")"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "}"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ")"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n"
					]
				})
			})]
		}),
		"\n",
		/* @__PURE__ */ jsx(_components.h2, { children: "Hovered Popper" }),
		"\n",
		/* @__PURE__ */ jsxs(_components.div, {
			"data-example": "",
			children: [/* @__PURE__ */ jsx(_components.div, {
				"data-example-container": "",
				children: /* @__PURE__ */ jsx(_components.codeblocke7f6c011, {})
			}), /* @__PURE__ */ jsx(_components.pre, {
				className: "language-tsx",
				children: /* @__PURE__ */ jsxs(_components.code, {
					className: "language-tsx",
					children: [
						/* @__PURE__ */ jsx(_components.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						/* @__PURE__ */ jsxs(_components.span, {
							className: "token imports",
							children: [
								/* @__PURE__ */ jsx(_components.span, {
									className: "token punctuation",
									children: "{"
								}),
								" ref ",
								/* @__PURE__ */ jsx(_components.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token string",
							children: "\"vue\""
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						/* @__PURE__ */ jsxs(_components.span, {
							className: "token imports",
							children: [
								/* @__PURE__ */ jsx(_components.span, {
									className: "token punctuation",
									children: "{"
								}),
								" component ",
								/* @__PURE__ */ jsx(_components.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token string",
							children: "\"@innoai-tech/vuekit\""
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						/* @__PURE__ */ jsxs(_components.span, {
							className: "token imports",
							children: [
								/* @__PURE__ */ jsx(_components.span, {
									className: "token punctuation",
									children: "{"
								}),
								" ",
								/* @__PURE__ */ jsx(_components.span, {
									className: "token maybe-class-name",
									children: "Box"
								}),
								/* @__PURE__ */ jsx(_components.span, {
									className: "token punctuation",
									children: ","
								}),
								" ",
								/* @__PURE__ */ jsx(_components.span, {
									className: "token maybe-class-name",
									children: "Popper"
								}),
								" ",
								/* @__PURE__ */ jsx(_components.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token string",
							children: "\"@innoai-tech/vueuikit\""
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token keyword module",
							children: "export"
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token keyword module",
							children: "default"
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token function",
							children: "component"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "("
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "("
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n  ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token keyword",
							children: "const"
						}),
						" isOpen ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token operator",
							children: "="
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token function",
							children: "ref"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "("
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token boolean",
							children: "false"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ")"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n  ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token keyword control-flow",
							children: "return"
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "("
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "("
						}),
						"\n    ",
						/* @__PURE__ */ jsxs(_components.span, {
							className: "token tag",
							children: [
								/* @__PURE__ */ jsxs(_components.span, {
									className: "token tag",
									children: [/* @__PURE__ */ jsx(_components.span, {
										className: "token punctuation",
										children: "<"
									}), /* @__PURE__ */ jsx(_components.span, {
										className: "token class-name",
										children: "Popper"
									})]
								}),
								"\n      ",
								/* @__PURE__ */ jsx(_components.span, {
									className: "token attr-name",
									children: "isOpen"
								}),
								/* @__PURE__ */ jsxs(_components.span, {
									className: "token script language-javascript",
									children: [
										/* @__PURE__ */ jsx(_components.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "{"
										}),
										"isOpen",
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "."
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token property-access",
											children: "value"
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n      ",
								/* @__PURE__ */ jsx(_components.span, {
									className: "token attr-name",
									children: "$content"
								}),
								/* @__PURE__ */ jsxs(_components.span, {
									className: "token script language-javascript",
									children: [
										/* @__PURE__ */ jsx(_components.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "{"
										}),
										"\n        ",
										/* @__PURE__ */ jsxs(_components.span, {
											className: "token tag",
											children: [
												/* @__PURE__ */ jsxs(_components.span, {
													className: "token tag",
													children: [/* @__PURE__ */ jsx(_components.span, {
														className: "token punctuation",
														children: "<"
													}), /* @__PURE__ */ jsx(_components.span, {
														className: "token class-name",
														children: "Box"
													})]
												}),
												" ",
												/* @__PURE__ */ jsx(_components.span, {
													className: "token attr-name",
													children: "sx"
												}),
												/* @__PURE__ */ jsxs(_components.span, {
													className: "token script language-javascript",
													children: [
														/* @__PURE__ */ jsx(_components.span, {
															className: "token script-punctuation punctuation",
															children: "="
														}),
														/* @__PURE__ */ jsx(_components.span, {
															className: "token punctuation",
															children: "{"
														}),
														/* @__PURE__ */ jsx(_components.span, {
															className: "token punctuation",
															children: "{"
														}),
														" containerStyle",
														/* @__PURE__ */ jsx(_components.span, {
															className: "token operator",
															children: ":"
														}),
														" ",
														/* @__PURE__ */ jsx(_components.span, {
															className: "token string",
															children: "\"sys.on-surface\""
														}),
														" ",
														/* @__PURE__ */ jsx(_components.span, {
															className: "token punctuation",
															children: "}"
														}),
														/* @__PURE__ */ jsx(_components.span, {
															className: "token punctuation",
															children: "}"
														})
													]
												}),
												/* @__PURE__ */ jsx(_components.span, {
													className: "token punctuation",
													children: ">"
												})
											]
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token plain-text",
											children: "Popper Content!"
										}),
										/* @__PURE__ */ jsxs(_components.span, {
											className: "token tag",
											children: [/* @__PURE__ */ jsxs(_components.span, {
												className: "token tag",
												children: [/* @__PURE__ */ jsx(_components.span, {
													className: "token punctuation",
													children: "</"
												}), /* @__PURE__ */ jsx(_components.span, {
													className: "token class-name",
													children: "Box"
												})]
											}), /* @__PURE__ */ jsx(_components.span, {
												className: "token punctuation",
												children: ">"
											})]
										}),
										"\n      ",
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n    ",
								/* @__PURE__ */ jsx(_components.span, {
									className: "token punctuation",
									children: ">"
								})
							]
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token plain-text",
							children: "\n      "
						}),
						/* @__PURE__ */ jsxs(_components.span, {
							className: "token tag",
							children: [
								/* @__PURE__ */ jsxs(_components.span, {
									className: "token tag",
									children: [/* @__PURE__ */ jsx(_components.span, {
										className: "token punctuation",
										children: "<"
									}), /* @__PURE__ */ jsx(_components.span, {
										className: "token class-name",
										children: "Box"
									})]
								}),
								"\n        ",
								/* @__PURE__ */ jsx(_components.span, {
									className: "token attr-name",
									children: "component"
								}),
								/* @__PURE__ */ jsxs(_components.span, {
									className: "token script language-javascript",
									children: [
										/* @__PURE__ */ jsx(_components.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "{"
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token string",
											children: "\"button\""
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n        ",
								/* @__PURE__ */ jsx(_components.span, {
									className: "token attr-name",
									children: "sx"
								}),
								/* @__PURE__ */ jsxs(_components.span, {
									className: "token script language-javascript",
									children: [
										/* @__PURE__ */ jsx(_components.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "{"
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "{"
										}),
										" p",
										/* @__PURE__ */ jsx(_components.span, {
											className: "token operator",
											children: ":"
										}),
										" ",
										/* @__PURE__ */ jsx(_components.span, {
											className: "token number",
											children: "4"
										}),
										" ",
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "}"
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n        ",
								/* @__PURE__ */ jsx(_components.span, {
									className: "token attr-name",
									children: "onMouseover"
								}),
								/* @__PURE__ */ jsxs(_components.span, {
									className: "token script language-javascript",
									children: [
										/* @__PURE__ */ jsx(_components.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "{"
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "("
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: ")"
										}),
										" ",
										/* @__PURE__ */ jsx(_components.span, {
											className: "token arrow operator",
											children: "=>"
										}),
										" ",
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "("
										}),
										"isOpen",
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "."
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token property-access",
											children: "value"
										}),
										" ",
										/* @__PURE__ */ jsx(_components.span, {
											className: "token operator",
											children: "="
										}),
										" ",
										/* @__PURE__ */ jsx(_components.span, {
											className: "token boolean",
											children: "true"
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: ")"
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n        ",
								/* @__PURE__ */ jsx(_components.span, {
									className: "token attr-name",
									children: "onMouseout"
								}),
								/* @__PURE__ */ jsxs(_components.span, {
									className: "token script language-javascript",
									children: [
										/* @__PURE__ */ jsx(_components.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "{"
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "("
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: ")"
										}),
										" ",
										/* @__PURE__ */ jsx(_components.span, {
											className: "token arrow operator",
											children: "=>"
										}),
										" ",
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "("
										}),
										"isOpen",
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "."
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token property-access",
											children: "value"
										}),
										" ",
										/* @__PURE__ */ jsx(_components.span, {
											className: "token operator",
											children: "="
										}),
										" ",
										/* @__PURE__ */ jsx(_components.span, {
											className: "token boolean",
											children: "false"
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: ")"
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n      ",
								/* @__PURE__ */ jsx(_components.span, {
									className: "token punctuation",
									children: ">"
								})
							]
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token plain-text",
							children: "\n        Popper Trigger\n      "
						}),
						/* @__PURE__ */ jsxs(_components.span, {
							className: "token tag",
							children: [/* @__PURE__ */ jsxs(_components.span, {
								className: "token tag",
								children: [/* @__PURE__ */ jsx(_components.span, {
									className: "token punctuation",
									children: "</"
								}), /* @__PURE__ */ jsx(_components.span, {
									className: "token class-name",
									children: "Box"
								})]
							}), /* @__PURE__ */ jsx(_components.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token plain-text",
							children: "\n    "
						}),
						/* @__PURE__ */ jsxs(_components.span, {
							className: "token tag",
							children: [/* @__PURE__ */ jsxs(_components.span, {
								className: "token tag",
								children: [/* @__PURE__ */ jsx(_components.span, {
									className: "token punctuation",
									children: "</"
								}), /* @__PURE__ */ jsx(_components.span, {
									className: "token class-name",
									children: "Popper"
								})]
							}), /* @__PURE__ */ jsx(_components.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						"\n  ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ")"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "}"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ")"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n"
					]
				})
			})]
		}),
		"\n",
		/* @__PURE__ */ jsx(_components.h2, { children: "Animated" }),
		"\n",
		/* @__PURE__ */ jsxs(_components.div, {
			"data-example": "",
			children: [/* @__PURE__ */ jsx(_components.div, {
				"data-example-container": "",
				children: /* @__PURE__ */ jsx(_components.codeblock4a44dc15, {})
			}), /* @__PURE__ */ jsx(_components.pre, {
				className: "language-tsx",
				children: /* @__PURE__ */ jsxs(_components.code, {
					className: "language-tsx",
					children: [
						/* @__PURE__ */ jsx(_components.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						/* @__PURE__ */ jsxs(_components.span, {
							className: "token imports",
							children: [
								/* @__PURE__ */ jsx(_components.span, {
									className: "token punctuation",
									children: "{"
								}),
								" ref ",
								/* @__PURE__ */ jsx(_components.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token string",
							children: "\"vue\""
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						/* @__PURE__ */ jsxs(_components.span, {
							className: "token imports",
							children: [
								/* @__PURE__ */ jsx(_components.span, {
									className: "token punctuation",
									children: "{"
								}),
								" component ",
								/* @__PURE__ */ jsx(_components.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token string",
							children: "\"@innoai-tech/vuekit\""
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token keyword module",
							children: "import"
						}),
						" ",
						/* @__PURE__ */ jsxs(_components.span, {
							className: "token imports",
							children: [
								/* @__PURE__ */ jsx(_components.span, {
									className: "token punctuation",
									children: "{"
								}),
								"\n  ",
								/* @__PURE__ */ jsx(_components.span, {
									className: "token maybe-class-name",
									children: "Box"
								}),
								/* @__PURE__ */ jsx(_components.span, {
									className: "token punctuation",
									children: ","
								}),
								"\n  defineTransition",
								/* @__PURE__ */ jsx(_components.span, {
									className: "token punctuation",
									children: ","
								}),
								"\n  ",
								/* @__PURE__ */ jsx(_components.span, {
									className: "token maybe-class-name",
									children: "Popper"
								}),
								/* @__PURE__ */ jsx(_components.span, {
									className: "token punctuation",
									children: ","
								}),
								"\n  transition",
								/* @__PURE__ */ jsx(_components.span, {
									className: "token punctuation",
									children: ","
								}),
								"\n  triangle",
								/* @__PURE__ */ jsx(_components.span, {
									className: "token punctuation",
									children: ","
								}),
								"\n",
								/* @__PURE__ */ jsx(_components.span, {
									className: "token punctuation",
									children: "}"
								})
							]
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token keyword module",
							children: "from"
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token string",
							children: "\"@innoai-tech/vueuikit\""
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token keyword module",
							children: "export"
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token keyword",
							children: "const"
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token maybe-class-name",
							children: "FadeInOutTransition"
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token operator",
							children: "="
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token function",
							children: "defineTransition"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "("
						}),
						"\n  ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n    ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token keyword module",
							children: "from"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n      opacity",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token number",
							children: "0"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n    ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "}"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n    to",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n      opacity",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token number",
							children: "1"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n    ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "}"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n    duration",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token operator",
							children: ":"
						}),
						" transition",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "."
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token property-access",
							children: "duration"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "."
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token property-access",
							children: "md1"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n    easing",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token operator",
							children: ":"
						}),
						" transition",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "."
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token property-access",
							children: "easing"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "."
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token property-access",
							children: "standard"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "."
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token property-access",
							children: "accelerate"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n  ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "}"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n  ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n    ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token keyword module",
							children: "from"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n      opacity",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token number",
							children: "1"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n    ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "}"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n    to",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n      opacity",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token number",
							children: "0"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n    ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "}"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n    duration",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token operator",
							children: ":"
						}),
						" transition",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "."
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token property-access",
							children: "duration"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "."
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token property-access",
							children: "sm4"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n    easing",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token operator",
							children: ":"
						}),
						" transition",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "."
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token property-access",
							children: "easing"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "."
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token property-access",
							children: "standard"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "."
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token property-access",
							children: "decelerate"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n  ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "}"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ")"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token keyword module",
							children: "export"
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token keyword module",
							children: "default"
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token function",
							children: "component"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "("
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "("
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n  ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token keyword",
							children: "const"
						}),
						" isOpen ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token operator",
							children: "="
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token function",
							children: "ref"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "("
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token boolean",
							children: "true"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ")"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n  ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token keyword control-flow",
							children: "return"
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "("
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "("
						}),
						"\n    ",
						/* @__PURE__ */ jsxs(_components.span, {
							className: "token tag",
							children: [
								/* @__PURE__ */ jsxs(_components.span, {
									className: "token tag",
									children: [/* @__PURE__ */ jsx(_components.span, {
										className: "token punctuation",
										children: "<"
									}), /* @__PURE__ */ jsx(_components.span, {
										className: "token class-name",
										children: "Popper"
									})]
								}),
								"\n      ",
								/* @__PURE__ */ jsx(_components.span, {
									className: "token attr-name",
									children: "isOpen"
								}),
								/* @__PURE__ */ jsxs(_components.span, {
									className: "token script language-javascript",
									children: [
										/* @__PURE__ */ jsx(_components.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "{"
										}),
										"isOpen",
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "."
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token property-access",
											children: "value"
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n      ",
								/* @__PURE__ */ jsx(_components.span, {
									className: "token attr-name",
									children: "$transition"
								}),
								/* @__PURE__ */ jsxs(_components.span, {
									className: "token script language-javascript",
									children: [
										/* @__PURE__ */ jsx(_components.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "{"
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "("
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "{"
										}),
										" content ",
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "}"
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: ")"
										}),
										" ",
										/* @__PURE__ */ jsx(_components.span, {
											className: "token arrow operator",
											children: "=>"
										}),
										" ",
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "("
										}),
										"\n        ",
										/* @__PURE__ */ jsxs(_components.span, {
											className: "token tag",
											children: [/* @__PURE__ */ jsxs(_components.span, {
												className: "token tag",
												children: [/* @__PURE__ */ jsx(_components.span, {
													className: "token punctuation",
													children: "<"
												}), /* @__PURE__ */ jsx(_components.span, {
													className: "token class-name",
													children: "FadeInOutTransition"
												})]
											}), /* @__PURE__ */ jsx(_components.span, {
												className: "token punctuation",
												children: ">"
											})]
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "{"
										}),
										"content",
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "}"
										}),
										/* @__PURE__ */ jsxs(_components.span, {
											className: "token tag",
											children: [/* @__PURE__ */ jsxs(_components.span, {
												className: "token tag",
												children: [/* @__PURE__ */ jsx(_components.span, {
													className: "token punctuation",
													children: "</"
												}), /* @__PURE__ */ jsx(_components.span, {
													className: "token class-name",
													children: "FadeInOutTransition"
												})]
											}), /* @__PURE__ */ jsx(_components.span, {
												className: "token punctuation",
												children: ">"
											})]
										}),
										"\n      ",
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: ")"
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n      ",
								/* @__PURE__ */ jsx(_components.span, {
									className: "token attr-name",
									children: "$content"
								}),
								/* @__PURE__ */ jsxs(_components.span, {
									className: "token script language-javascript",
									children: [
										/* @__PURE__ */ jsx(_components.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "{"
										}),
										"\n        ",
										/* @__PURE__ */ jsxs(_components.span, {
											className: "token tag",
											children: [
												/* @__PURE__ */ jsxs(_components.span, {
													className: "token tag",
													children: [/* @__PURE__ */ jsx(_components.span, {
														className: "token punctuation",
														children: "<"
													}), /* @__PURE__ */ jsx(_components.span, {
														className: "token class-name",
														children: "Box"
													})]
												}),
												"\n          ",
												/* @__PURE__ */ jsx(_components.span, {
													className: "token attr-name",
													children: "sx"
												}),
												/* @__PURE__ */ jsxs(_components.span, {
													className: "token script language-javascript",
													children: [
														/* @__PURE__ */ jsx(_components.span, {
															className: "token script-punctuation punctuation",
															children: "="
														}),
														/* @__PURE__ */ jsx(_components.span, {
															className: "token punctuation",
															children: "{"
														}),
														/* @__PURE__ */ jsx(_components.span, {
															className: "token punctuation",
															children: "{"
														}),
														"\n            containerStyle",
														/* @__PURE__ */ jsx(_components.span, {
															className: "token operator",
															children: ":"
														}),
														" ",
														/* @__PURE__ */ jsx(_components.span, {
															className: "token string",
															children: "\"sys.on-surface\""
														}),
														/* @__PURE__ */ jsx(_components.span, {
															className: "token punctuation",
															children: ","
														}),
														"\n            shadow",
														/* @__PURE__ */ jsx(_components.span, {
															className: "token operator",
															children: ":"
														}),
														" ",
														/* @__PURE__ */ jsx(_components.span, {
															className: "token string",
															children: "\"2\""
														}),
														/* @__PURE__ */ jsx(_components.span, {
															className: "token punctuation",
															children: ","
														}),
														"\n            py",
														/* @__PURE__ */ jsx(_components.span, {
															className: "token operator",
															children: ":"
														}),
														" ",
														/* @__PURE__ */ jsx(_components.span, {
															className: "token number",
															children: "2"
														}),
														/* @__PURE__ */ jsx(_components.span, {
															className: "token punctuation",
															children: ","
														}),
														"\n            px",
														/* @__PURE__ */ jsx(_components.span, {
															className: "token operator",
															children: ":"
														}),
														" ",
														/* @__PURE__ */ jsx(_components.span, {
															className: "token number",
															children: "4"
														}),
														/* @__PURE__ */ jsx(_components.span, {
															className: "token punctuation",
															children: ","
														}),
														"\n            rounded",
														/* @__PURE__ */ jsx(_components.span, {
															className: "token operator",
															children: ":"
														}),
														" ",
														/* @__PURE__ */ jsx(_components.span, {
															className: "token string",
															children: "\"sm\""
														}),
														/* @__PURE__ */ jsx(_components.span, {
															className: "token punctuation",
															children: ","
														}),
														"\n          ",
														/* @__PURE__ */ jsx(_components.span, {
															className: "token punctuation",
															children: "}"
														}),
														/* @__PURE__ */ jsx(_components.span, {
															className: "token punctuation",
															children: "}"
														})
													]
												}),
												"\n        ",
												/* @__PURE__ */ jsx(_components.span, {
													className: "token punctuation",
													children: ">"
												})
											]
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token plain-text",
											children: "\n          Popper "
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "{"
										}),
										/* @__PURE__ */ jsxs(_components.span, {
											className: "token template-string",
											children: [
												/* @__PURE__ */ jsx(_components.span, {
													className: "token template-punctuation string",
													children: "`"
												}),
												/* @__PURE__ */ jsxs(_components.span, {
													className: "token interpolation",
													children: [
														/* @__PURE__ */ jsx(_components.span, {
															className: "token interpolation-punctuation punctuation",
															children: "${"
														}),
														"isOpen",
														/* @__PURE__ */ jsx(_components.span, {
															className: "token punctuation",
															children: "."
														}),
														/* @__PURE__ */ jsx(_components.span, {
															className: "token property-access",
															children: "value"
														}),
														/* @__PURE__ */ jsx(_components.span, {
															className: "token interpolation-punctuation punctuation",
															children: "}"
														})
													]
												}),
												/* @__PURE__ */ jsx(_components.span, {
													className: "token template-punctuation string",
													children: "`"
												})
											]
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "}"
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token plain-text",
											children: "!\n        "
										}),
										/* @__PURE__ */ jsxs(_components.span, {
											className: "token tag",
											children: [/* @__PURE__ */ jsxs(_components.span, {
												className: "token tag",
												children: [/* @__PURE__ */ jsx(_components.span, {
													className: "token punctuation",
													children: "</"
												}), /* @__PURE__ */ jsx(_components.span, {
													className: "token class-name",
													children: "Box"
												})]
											}), /* @__PURE__ */ jsx(_components.span, {
												className: "token punctuation",
												children: ">"
											})]
										}),
										"\n      ",
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n    ",
								/* @__PURE__ */ jsx(_components.span, {
									className: "token punctuation",
									children: ">"
								})
							]
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token plain-text",
							children: "\n      "
						}),
						/* @__PURE__ */ jsxs(_components.span, {
							className: "token tag",
							children: [
								/* @__PURE__ */ jsxs(_components.span, {
									className: "token tag",
									children: [/* @__PURE__ */ jsx(_components.span, {
										className: "token punctuation",
										children: "<"
									}), /* @__PURE__ */ jsx(_components.span, {
										className: "token class-name",
										children: "Box"
									})]
								}),
								"\n        ",
								/* @__PURE__ */ jsx(_components.span, {
									className: "token attr-name",
									children: "sx"
								}),
								/* @__PURE__ */ jsxs(_components.span, {
									className: "token script language-javascript",
									children: [
										/* @__PURE__ */ jsx(_components.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "{"
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "{"
										}),
										" p",
										/* @__PURE__ */ jsx(_components.span, {
											className: "token operator",
											children: ":"
										}),
										" ",
										/* @__PURE__ */ jsx(_components.span, {
											className: "token number",
											children: "4"
										}),
										" ",
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "}"
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n        ",
								/* @__PURE__ */ jsx(_components.span, {
									className: "token attr-name",
									children: "component"
								}),
								/* @__PURE__ */ jsxs(_components.span, {
									className: "token script language-javascript",
									children: [
										/* @__PURE__ */ jsx(_components.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "{"
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token string",
											children: "\"button\""
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n        ",
								/* @__PURE__ */ jsx(_components.span, {
									className: "token attr-name",
									children: "onMouseover"
								}),
								/* @__PURE__ */ jsxs(_components.span, {
									className: "token script language-javascript",
									children: [
										/* @__PURE__ */ jsx(_components.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "{"
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "("
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: ")"
										}),
										" ",
										/* @__PURE__ */ jsx(_components.span, {
											className: "token arrow operator",
											children: "=>"
										}),
										" ",
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "("
										}),
										"isOpen",
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "."
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token property-access",
											children: "value"
										}),
										" ",
										/* @__PURE__ */ jsx(_components.span, {
											className: "token operator",
											children: "="
										}),
										" ",
										/* @__PURE__ */ jsx(_components.span, {
											className: "token boolean",
											children: "true"
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: ")"
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n        ",
								/* @__PURE__ */ jsx(_components.span, {
									className: "token attr-name",
									children: "onMouseout"
								}),
								/* @__PURE__ */ jsxs(_components.span, {
									className: "token script language-javascript",
									children: [
										/* @__PURE__ */ jsx(_components.span, {
											className: "token script-punctuation punctuation",
											children: "="
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "{"
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "("
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: ")"
										}),
										" ",
										/* @__PURE__ */ jsx(_components.span, {
											className: "token arrow operator",
											children: "=>"
										}),
										" ",
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "("
										}),
										"isOpen",
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "."
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token property-access",
											children: "value"
										}),
										" ",
										/* @__PURE__ */ jsx(_components.span, {
											className: "token operator",
											children: "="
										}),
										" ",
										/* @__PURE__ */ jsx(_components.span, {
											className: "token boolean",
											children: "false"
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: ")"
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n      ",
								/* @__PURE__ */ jsx(_components.span, {
									className: "token punctuation",
									children: ">"
								})
							]
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token plain-text",
							children: "\n        Animated Popper\n      "
						}),
						/* @__PURE__ */ jsxs(_components.span, {
							className: "token tag",
							children: [/* @__PURE__ */ jsxs(_components.span, {
								className: "token tag",
								children: [/* @__PURE__ */ jsx(_components.span, {
									className: "token punctuation",
									children: "</"
								}), /* @__PURE__ */ jsx(_components.span, {
									className: "token class-name",
									children: "Box"
								})]
							}), /* @__PURE__ */ jsx(_components.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token plain-text",
							children: "\n    "
						}),
						/* @__PURE__ */ jsxs(_components.span, {
							className: "token tag",
							children: [/* @__PURE__ */ jsxs(_components.span, {
								className: "token tag",
								children: [/* @__PURE__ */ jsx(_components.span, {
									className: "token punctuation",
									children: "</"
								}), /* @__PURE__ */ jsx(_components.span, {
									className: "token class-name",
									children: "Popper"
								})]
							}), /* @__PURE__ */ jsx(_components.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						"\n  ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ")"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "}"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ")"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n"
					]
				})
			})]
		})
	] });
}
function MDXContent(props = {}) {
	const { wrapper: MDXLayout } = props.components || {};
	return MDXLayout ? jsx(MDXLayout, {
		...props,
		children: /* @__PURE__ */ jsx(_createMdxContent, { ...props })
	}) : _createMdxContent(props);
}
var popper_default = /* @__PURE__ */ defineComponent(() => {
	return () => h(MDXContent, { components: {
		codeblockd4735e3a: popper_md_CodeBlockd4735e3a_default,
		codeblocke7f6c011: popper_md_CodeBlocke7f6c011_default,
		codeblock4a44dc15: popper_md_CodeBlock4a44dc15_default
	} });
});
var typography_default = /* @__PURE__ */ component(() => {
	const theme = /* @__PURE__ */ ThemeProvider.use();
	return () => /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Box, {
		sx: {
			height: "40vh",
			display: "flex",
			flexDirection: "column",
			flexWrap: "wrap",
			justifyContent: "space-between",
			gap: 8
		},
		children: /* @__PURE__ */ theme.token.textStyle.tokens.map((textStyle) => /* @__PURE__ */ jsxs(Box, {
			sx: {
				flex: 1,
				rounded: "md",
				textStyle,
				p: 16,
				border: "2px solid",
				borderColor: "sys.outline-variant",
				bgColor: "sys.surface-container",
				color: "sys.primary",
				minW: "10vw",
				whiteSpace: "nowrap",
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between"
			},
			children: [
				/* @__PURE__ */ jsx(Box, {
					sx: { textStyle: "sys.label-small" },
					children: textStyle
				}),
				/* @__PURE__ */ jsx(Box, { sx: { flex: 1 } }),
				/* @__PURE__ */ jsx(Box, {
					sx: { py: 16 },
					children: "中文测试"
				})
			]
		}, textStyle))
	}) });
});
export { CSSReset as A, Theming as B, mdiPlus as C, Popper as D, mdiWhiteBalanceSunny as E, ThemeProvider as F, variant as H, defaultTheme as I, Palette as L, styled as M, Box as N, size as O, CacheProvider as P, defineTransition as R, mdiMinusBoxOutline as S, mdiWeatherNight as T, animate as U, alpha as V, createApp as W, mdiClose as _, elevation_default as a, mdiGroup as b, require_copy_to_clipboard as c, mdiAccount as d, mdiCancel as f, mdiChevronRight as g, mdiChevronDown as h, figma_tokens_default as i, GlobalStyle as j, Overlay as k, DynamicThemingProvider as l, mdiCheckBold as m, popper_default as n, color_scheme_default as o, mdiCheck as p, example_default as r, color_palette_default as s, typography_default as t, Container as u, mdiContentCopy as v, mdiSend as w, mdiHelpBox as x, mdiGithub as y, transition as z };
