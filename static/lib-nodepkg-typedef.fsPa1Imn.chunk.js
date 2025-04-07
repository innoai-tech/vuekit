var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var _a;
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) return;
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) processPreload(link);
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") continue;
      for (const node of mutation.addedNodes) if (node.tagName === "LINK" && node.rel === "modulepreload") processPreload(node);
    }
  }).observe(document, {
    childList: true,
    subtree: true
  });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials") fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep) return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
const isUndefined = (x) => {
  return typeof x == "undefined";
};
const isNull = (x) => {
  return Object.is(x, null);
};
const isObjectLike = (x) => {
  return !!x && typeof x == "object";
};
const isObject = (x) => {
  return !!x && x.constructor == Object;
};
const isArray = (x) => {
  return Array.isArray(x);
};
const isInteger = (x) => {
  return typeof x === "number" && !Number.isNaN(x) && Number.isInteger(x);
};
const isBoolean = (x) => {
  return typeof x === "boolean";
};
const isString = (x) => {
  return typeof x === "string";
};
const isIterable = (x) => {
  return typeof x == "object" && typeof x[Symbol.iterator] === "function";
};
const isClass = (x) => {
  return typeof x == "function" && `${x}`.startsWith("class");
};
const isFunction = (x) => {
  return !!(x && x.constructor && x.call && x.apply);
};
var NOTHING = Symbol.for("immer-nothing");
var DRAFTABLE = Symbol.for("immer-draftable");
var DRAFT_STATE = Symbol.for("immer-state");
function die(error) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  throw new Error(`[Immer] minified error nr: ${error}. Full error at: https://bit.ly/3cXEKWf`);
}
var getPrototypeOf = Object.getPrototypeOf;
function isDraft(value) {
  return !!value && !!value[DRAFT_STATE];
}
function isDraftable(value) {
  var _a2;
  if (!value) return false;
  return isPlainObject(value) || Array.isArray(value) || !!value[DRAFTABLE] || !!((_a2 = value.constructor) == null ? void 0 : _a2[DRAFTABLE]) || isMap(value) || isSet(value);
}
var objectCtorString = Object.prototype.constructor.toString();
function isPlainObject(value) {
  if (!value || typeof value !== "object") return false;
  const proto = getPrototypeOf(value);
  if (proto === null) {
    return true;
  }
  const Ctor = Object.hasOwnProperty.call(proto, "constructor") && proto.constructor;
  if (Ctor === Object) return true;
  return typeof Ctor == "function" && Function.toString.call(Ctor) === objectCtorString;
}
function each(obj, iter) {
  if (getArchtype(obj) === 0) {
    Reflect.ownKeys(obj).forEach((key) => {
      iter(key, obj[key], obj);
    });
  } else {
    obj.forEach((entry, index) => iter(index, entry, obj));
  }
}
function getArchtype(thing) {
  const state = thing[DRAFT_STATE];
  return state ? state.type_ : Array.isArray(thing) ? 1 : isMap(thing) ? 2 : isSet(thing) ? 3 : 0;
}
function has(thing, prop) {
  return getArchtype(thing) === 2 ? thing.has(prop) : Object.prototype.hasOwnProperty.call(thing, prop);
}
function set(thing, propOrOldValue, value) {
  const t = getArchtype(thing);
  if (t === 2) thing.set(propOrOldValue, value);
  else if (t === 3) {
    thing.add(value);
  } else thing[propOrOldValue] = value;
}
function is(x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}
function isMap(target) {
  return target instanceof Map;
}
function isSet(target) {
  return target instanceof Set;
}
function latest(state) {
  return state.copy_ || state.base_;
}
function shallowCopy(base, strict) {
  if (isMap(base)) {
    return new Map(base);
  }
  if (isSet(base)) {
    return new Set(base);
  }
  if (Array.isArray(base)) return Array.prototype.slice.call(base);
  const isPlain = isPlainObject(base);
  if (strict === true || strict === "class_only" && !isPlain) {
    const descriptors = Object.getOwnPropertyDescriptors(base);
    delete descriptors[DRAFT_STATE];
    let keys = Reflect.ownKeys(descriptors);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const desc = descriptors[key];
      if (desc.writable === false) {
        desc.writable = true;
        desc.configurable = true;
      }
      if (desc.get || desc.set) descriptors[key] = {
        configurable: true,
        writable: true,
        // could live with !!desc.set as well here...
        enumerable: desc.enumerable,
        value: base[key]
      };
    }
    return Object.create(getPrototypeOf(base), descriptors);
  } else {
    const proto = getPrototypeOf(base);
    if (proto !== null && isPlain) {
      return {
        ...base
      };
    }
    const obj = Object.create(proto);
    return Object.assign(obj, base);
  }
}
function freeze(obj) {
  let deep = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  if (isFrozen(obj) || isDraft(obj) || !isDraftable(obj)) return obj;
  if (getArchtype(obj) > 1) {
    obj.set = obj.add = obj.clear = obj.delete = dontMutateFrozenCollections;
  }
  Object.freeze(obj);
  if (deep) Object.entries(obj).forEach((param) => {
    let [key, value] = param;
    return freeze(value, true);
  });
  return obj;
}
function dontMutateFrozenCollections() {
  die(2);
}
function isFrozen(obj) {
  return Object.isFrozen(obj);
}
var plugins = {};
function getPlugin(pluginKey) {
  const plugin = plugins[pluginKey];
  if (!plugin) {
    die(0, pluginKey);
  }
  return plugin;
}
var currentScope;
function getCurrentScope() {
  return currentScope;
}
function createScope(parent_, immer_) {
  return {
    drafts_: [],
    parent_,
    immer_,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: true,
    unfinalizedDrafts_: 0
  };
}
function usePatchesInScope(scope, patchListener) {
  if (patchListener) {
    getPlugin("Patches");
    scope.patches_ = [];
    scope.inversePatches_ = [];
    scope.patchListener_ = patchListener;
  }
}
function revokeScope(scope) {
  leaveScope(scope);
  scope.drafts_.forEach(revokeDraft);
  scope.drafts_ = null;
}
function leaveScope(scope) {
  if (scope === currentScope) {
    currentScope = scope.parent_;
  }
}
function enterScope(immer2) {
  return currentScope = createScope(currentScope, immer2);
}
function revokeDraft(draft) {
  const state = draft[DRAFT_STATE];
  if (state.type_ === 0 || state.type_ === 1) state.revoke_();
  else state.revoked_ = true;
}
function processResult(result, scope) {
  scope.unfinalizedDrafts_ = scope.drafts_.length;
  const baseDraft = scope.drafts_[0];
  const isReplaced = result !== void 0 && result !== baseDraft;
  if (isReplaced) {
    if (baseDraft[DRAFT_STATE].modified_) {
      revokeScope(scope);
      die(4);
    }
    if (isDraftable(result)) {
      result = finalize(scope, result);
      if (!scope.parent_) maybeFreeze(scope, result);
    }
    if (scope.patches_) {
      getPlugin("Patches").generateReplacementPatches_(baseDraft[DRAFT_STATE].base_, result, scope.patches_, scope.inversePatches_);
    }
  } else {
    result = finalize(scope, baseDraft, []);
  }
  revokeScope(scope);
  if (scope.patches_) {
    scope.patchListener_(scope.patches_, scope.inversePatches_);
  }
  return result !== NOTHING ? result : void 0;
}
function finalize(rootScope, value, path) {
  if (isFrozen(value)) return value;
  const state = value[DRAFT_STATE];
  if (!state) {
    each(value, (key, childValue) => finalizeProperty(rootScope, state, value, key, childValue, path));
    return value;
  }
  if (state.scope_ !== rootScope) return value;
  if (!state.modified_) {
    maybeFreeze(rootScope, state.base_, true);
    return state.base_;
  }
  if (!state.finalized_) {
    state.finalized_ = true;
    state.scope_.unfinalizedDrafts_--;
    const result = state.copy_;
    let resultEach = result;
    let isSet2 = false;
    if (state.type_ === 3) {
      resultEach = new Set(result);
      result.clear();
      isSet2 = true;
    }
    each(resultEach, (key, childValue) => finalizeProperty(rootScope, state, result, key, childValue, path, isSet2));
    maybeFreeze(rootScope, result, false);
    if (path && rootScope.patches_) {
      getPlugin("Patches").generatePatches_(state, path, rootScope.patches_, rootScope.inversePatches_);
    }
  }
  return state.copy_;
}
function finalizeProperty(rootScope, parentState, targetObject, prop, childValue, rootPath, targetIsSet) {
  if (isDraft(childValue)) {
    const path = rootPath && parentState && parentState.type_ !== 3 && // Set objects are atomic since they have no keys.
    !has(parentState.assigned_, prop) ? rootPath.concat(prop) : void 0;
    const res = finalize(rootScope, childValue, path);
    set(targetObject, prop, res);
    if (isDraft(res)) {
      rootScope.canAutoFreeze_ = false;
    } else return;
  } else if (targetIsSet) {
    targetObject.add(childValue);
  }
  if (isDraftable(childValue) && !isFrozen(childValue)) {
    if (!rootScope.immer_.autoFreeze_ && rootScope.unfinalizedDrafts_ < 1) {
      return;
    }
    finalize(rootScope, childValue);
    if ((!parentState || !parentState.scope_.parent_) && typeof prop !== "symbol" && Object.prototype.propertyIsEnumerable.call(targetObject, prop)) maybeFreeze(rootScope, childValue);
  }
}
function maybeFreeze(scope, value) {
  let deep = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
  if (!scope.parent_ && scope.immer_.autoFreeze_ && scope.canAutoFreeze_) {
    freeze(value, deep);
  }
}
function createProxyProxy(base, parent) {
  const isArray2 = Array.isArray(base);
  const state = {
    type_: isArray2 ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: parent ? parent.scope_ : getCurrentScope(),
    // True for both shallow and deep changes.
    modified_: false,
    // Used during finalization.
    finalized_: false,
    // Track which properties have been assigned (true) or deleted (false).
    assigned_: {},
    // The parent draft state.
    parent_: parent,
    // The base state.
    base_: base,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: false
  };
  let target = state;
  let traps = objectTraps;
  if (isArray2) {
    target = [
      state
    ];
    traps = arrayTraps;
  }
  const { revoke, proxy } = Proxy.revocable(target, traps);
  state.draft_ = proxy;
  state.revoke_ = revoke;
  return proxy;
}
var objectTraps = {
  get(state, prop) {
    if (prop === DRAFT_STATE) return state;
    const source = latest(state);
    if (!has(source, prop)) {
      return readPropFromProto(state, source, prop);
    }
    const value = source[prop];
    if (state.finalized_ || !isDraftable(value)) {
      return value;
    }
    if (value === peek(state.base_, prop)) {
      prepareCopy(state);
      return state.copy_[prop] = createProxy(value, state);
    }
    return value;
  },
  has(state, prop) {
    return prop in latest(state);
  },
  ownKeys(state) {
    return Reflect.ownKeys(latest(state));
  },
  set(state, prop, value) {
    const desc = getDescriptorFromProto(latest(state), prop);
    if (desc == null ? void 0 : desc.set) {
      desc.set.call(state.draft_, value);
      return true;
    }
    if (!state.modified_) {
      const current2 = peek(latest(state), prop);
      const currentState = current2 == null ? void 0 : current2[DRAFT_STATE];
      if (currentState && currentState.base_ === value) {
        state.copy_[prop] = value;
        state.assigned_[prop] = false;
        return true;
      }
      if (is(value, current2) && (value !== void 0 || has(state.base_, prop))) return true;
      prepareCopy(state);
      markChanged(state);
    }
    if (state.copy_[prop] === value && // special case: handle new props with value 'undefined'
    (value !== void 0 || prop in state.copy_) || // special case: NaN
    Number.isNaN(value) && Number.isNaN(state.copy_[prop])) return true;
    state.copy_[prop] = value;
    state.assigned_[prop] = true;
    return true;
  },
  deleteProperty(state, prop) {
    if (peek(state.base_, prop) !== void 0 || prop in state.base_) {
      state.assigned_[prop] = false;
      prepareCopy(state);
      markChanged(state);
    } else {
      delete state.assigned_[prop];
    }
    if (state.copy_) {
      delete state.copy_[prop];
    }
    return true;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(state, prop) {
    const owner = latest(state);
    const desc = Reflect.getOwnPropertyDescriptor(owner, prop);
    if (!desc) return desc;
    return {
      writable: true,
      configurable: state.type_ !== 1 || prop !== "length",
      enumerable: desc.enumerable,
      value: owner[prop]
    };
  },
  defineProperty() {
    die(11);
  },
  getPrototypeOf(state) {
    return getPrototypeOf(state.base_);
  },
  setPrototypeOf() {
    die(12);
  }
};
var arrayTraps = {};
each(objectTraps, (key, fn) => {
  arrayTraps[key] = function() {
    arguments[0] = arguments[0][0];
    return fn.apply(this, arguments);
  };
});
arrayTraps.deleteProperty = function(state, prop) {
  return arrayTraps.set.call(this, state, prop, void 0);
};
arrayTraps.set = function(state, prop, value) {
  return objectTraps.set.call(this, state[0], prop, value, state[0]);
};
function peek(draft, prop) {
  const state = draft[DRAFT_STATE];
  const source = state ? latest(state) : draft;
  return source[prop];
}
function readPropFromProto(state, source, prop) {
  var _a2;
  const desc = getDescriptorFromProto(source, prop);
  return desc ? `value` in desc ? desc.value : (
    // prototype, we should invoke it with the draft as context!
    (_a2 = desc.get) == null ? void 0 : _a2.call(state.draft_)
  ) : void 0;
}
function getDescriptorFromProto(source, prop) {
  if (!(prop in source)) return void 0;
  let proto = getPrototypeOf(source);
  while (proto) {
    const desc = Object.getOwnPropertyDescriptor(proto, prop);
    if (desc) return desc;
    proto = getPrototypeOf(proto);
  }
  return void 0;
}
function markChanged(state) {
  if (!state.modified_) {
    state.modified_ = true;
    if (state.parent_) {
      markChanged(state.parent_);
    }
  }
}
function prepareCopy(state) {
  if (!state.copy_) {
    state.copy_ = shallowCopy(state.base_, state.scope_.immer_.useStrictShallowCopy_);
  }
}
var Immer2 = class {
  constructor(config) {
    this.autoFreeze_ = true;
    this.useStrictShallowCopy_ = false;
    this.produce = (base, recipe, patchListener) => {
      if (typeof base === "function" && typeof recipe !== "function") {
        const defaultBase = recipe;
        recipe = base;
        const self1 = this;
        return function curriedProduce() {
          let base2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : defaultBase;
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }
          return self1.produce(base2, (draft) => recipe.call(this, draft, ...args));
        };
      }
      if (typeof recipe !== "function") die(6);
      if (patchListener !== void 0 && typeof patchListener !== "function") die(7);
      let result;
      if (isDraftable(base)) {
        const scope = enterScope(this);
        const proxy = createProxy(base, void 0);
        let hasError = true;
        try {
          result = recipe(proxy);
          hasError = false;
        } finally {
          if (hasError) revokeScope(scope);
          else leaveScope(scope);
        }
        usePatchesInScope(scope, patchListener);
        return processResult(result, scope);
      } else if (!base || typeof base !== "object") {
        result = recipe(base);
        if (result === void 0) result = base;
        if (result === NOTHING) result = void 0;
        if (this.autoFreeze_) freeze(result, true);
        if (patchListener) {
          const p = [];
          const ip = [];
          getPlugin("Patches").generateReplacementPatches_(base, result, p, ip);
          patchListener(p, ip);
        }
        return result;
      } else die(1, base);
    };
    this.produceWithPatches = (base, recipe) => {
      if (typeof base === "function") {
        var _this = this;
        return function(state) {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }
          return _this.produceWithPatches(state, (draft) => base(draft, ...args));
        };
      }
      let patches, inversePatches;
      const result = this.produce(base, recipe, (p, ip) => {
        patches = p;
        inversePatches = ip;
      });
      return [
        result,
        patches,
        inversePatches
      ];
    };
    if (typeof (config == null ? void 0 : config.autoFreeze) === "boolean") this.setAutoFreeze(config.autoFreeze);
    if (typeof (config == null ? void 0 : config.useStrictShallowCopy) === "boolean") this.setUseStrictShallowCopy(config.useStrictShallowCopy);
  }
  createDraft(base) {
    if (!isDraftable(base)) die(8);
    if (isDraft(base)) base = current(base);
    const scope = enterScope(this);
    const proxy = createProxy(base, void 0);
    proxy[DRAFT_STATE].isManual_ = true;
    leaveScope(scope);
    return proxy;
  }
  finishDraft(draft, patchListener) {
    const state = draft && draft[DRAFT_STATE];
    if (!state || !state.isManual_) die(9);
    const { scope_: scope } = state;
    usePatchesInScope(scope, patchListener);
    return processResult(void 0, scope);
  }
  /**
  * Pass true to automatically freeze all copies created by Immer.
  *
  * By default, auto-freezing is enabled.
  */
  setAutoFreeze(value) {
    this.autoFreeze_ = value;
  }
  /**
  * Pass true to enable strict shallow copy.
  *
  * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
  */
  setUseStrictShallowCopy(value) {
    this.useStrictShallowCopy_ = value;
  }
  applyPatches(base, patches) {
    let i;
    for (i = patches.length - 1; i >= 0; i--) {
      const patch = patches[i];
      if (patch.path.length === 0 && patch.op === "replace") {
        base = patch.value;
        break;
      }
    }
    if (i > -1) {
      patches = patches.slice(i + 1);
    }
    const applyPatchesImpl = getPlugin("Patches").applyPatches_;
    if (isDraft(base)) {
      return applyPatchesImpl(base, patches);
    }
    return this.produce(base, (draft) => applyPatchesImpl(draft, patches));
  }
};
function createProxy(value, parent) {
  const draft = isMap(value) ? getPlugin("MapSet").proxyMap_(value, parent) : isSet(value) ? getPlugin("MapSet").proxySet_(value, parent) : createProxyProxy(value, parent);
  const scope = parent ? parent.scope_ : getCurrentScope();
  scope.drafts_.push(draft);
  return draft;
}
function current(value) {
  if (!isDraft(value)) die(10, value);
  return currentImpl(value);
}
function currentImpl(value) {
  if (!isDraftable(value) || isFrozen(value)) return value;
  const state = value[DRAFT_STATE];
  let copy;
  if (state) {
    if (!state.modified_) return state.base_;
    state.finalized_ = true;
    copy = shallowCopy(value, state.scope_.immer_.useStrictShallowCopy_);
  } else {
    copy = shallowCopy(value, true);
  }
  each(copy, (key, childValue) => {
    set(copy, key, currentImpl(childValue));
  });
  if (state) {
    state.finalized_ = false;
  }
  return copy;
}
var immer = new Immer2();
var produce = immer.produce;
immer.produceWithPatches.bind(immer);
immer.setAutoFreeze.bind(immer);
immer.setUseStrictShallowCopy.bind(immer);
immer.applyPatches.bind(immer);
immer.createDraft.bind(immer);
immer.finishDraft.bind(immer);
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var ReflectLite = {};
var hasRequiredReflectLite;
function requireReflectLite() {
  if (hasRequiredReflectLite) return ReflectLite;
  hasRequiredReflectLite = 1;
  var Reflect1;
  (function(Reflect12) {
    (function(factory) {
      var root = typeof globalThis === "object" ? globalThis : typeof commonjsGlobal === "object" ? commonjsGlobal : typeof self === "object" ? self : typeof this === "object" ? this : sloppyModeThis();
      var exporter = makeExporter(Reflect12);
      if (typeof root.Reflect !== "undefined") {
        exporter = makeExporter(root.Reflect, exporter);
      }
      factory(exporter, root);
      if (typeof root.Reflect === "undefined") {
        root.Reflect = Reflect12;
      }
      function makeExporter(target, previous) {
        return function(key, value) {
          Object.defineProperty(target, key, {
            configurable: true,
            writable: true,
            value
          });
          if (previous) previous(key, value);
        };
      }
      function sloppyModeThis() {
        throw new ReferenceError("globalThis could not be found. Please polyfill globalThis before loading this module.");
      }
    })(function(exporter, root) {
      var supportsSymbol = typeof Symbol === "function";
      var toPrimitiveSymbol = supportsSymbol && typeof Symbol.toPrimitive !== "undefined" ? Symbol.toPrimitive : fail("Symbol.toPrimitive not found.");
      var iteratorSymbol = supportsSymbol && typeof Symbol.iterator !== "undefined" ? Symbol.iterator : fail("Symbol.iterator not found.");
      var functionPrototype = Object.getPrototypeOf(Function);
      var _Map = typeof Map === "function" && typeof Map.prototype.entries === "function" ? Map : fail("A valid Map constructor could not be found.");
      var _Set = typeof Set === "function" && typeof Set.prototype.entries === "function" ? Set : fail("A valid Set constructor could not be found.");
      var _WeakMap = typeof WeakMap === "function" ? WeakMap : fail("A valid WeakMap constructor could not be found.");
      var registrySymbol = supportsSymbol ? Symbol.for("@reflect-metadata:registry") : void 0;
      var metadataRegistry = GetOrCreateMetadataRegistry();
      var metadataProvider = CreateMetadataProvider(metadataRegistry);
      function decorate(decorators, target, propertyKey, attributes) {
        if (!IsUndefined(propertyKey)) {
          if (!IsArray(decorators)) throw new TypeError();
          if (!IsObject(target)) throw new TypeError();
          if (!IsObject(attributes) && !IsUndefined(attributes) && !IsNull(attributes)) throw new TypeError();
          if (IsNull(attributes)) attributes = void 0;
          propertyKey = ToPropertyKey(propertyKey);
          return DecorateProperty(decorators, target, propertyKey, attributes);
        } else {
          if (!IsArray(decorators)) throw new TypeError();
          if (!IsConstructor(target)) throw new TypeError();
          return DecorateConstructor(decorators, target);
        }
      }
      exporter("decorate", decorate);
      function metadata(metadataKey, metadataValue) {
        function decorator(target, propertyKey) {
          if (!IsObject(target)) throw new TypeError();
          if (!IsUndefined(propertyKey) && !IsPropertyKey(propertyKey)) throw new TypeError();
          OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
        }
        return decorator;
      }
      exporter("metadata", metadata);
      function defineMetadata(metadataKey, metadataValue, target, propertyKey) {
        if (!IsObject(target)) throw new TypeError();
        if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
      }
      exporter("defineMetadata", defineMetadata);
      function hasMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target)) throw new TypeError();
        if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryHasMetadata(metadataKey, target, propertyKey);
      }
      exporter("hasMetadata", hasMetadata);
      function hasOwnMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target)) throw new TypeError();
        if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryHasOwnMetadata(metadataKey, target, propertyKey);
      }
      exporter("hasOwnMetadata", hasOwnMetadata);
      function getMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target)) throw new TypeError();
        if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryGetMetadata(metadataKey, target, propertyKey);
      }
      exporter("getMetadata", getMetadata);
      function getOwnMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target)) throw new TypeError();
        if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryGetOwnMetadata(metadataKey, target, propertyKey);
      }
      exporter("getOwnMetadata", getOwnMetadata);
      function getMetadataKeys(target, propertyKey) {
        if (!IsObject(target)) throw new TypeError();
        if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryMetadataKeys(target, propertyKey);
      }
      exporter("getMetadataKeys", getMetadataKeys);
      function getOwnMetadataKeys(target, propertyKey) {
        if (!IsObject(target)) throw new TypeError();
        if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryOwnMetadataKeys(target, propertyKey);
      }
      exporter("getOwnMetadataKeys", getOwnMetadataKeys);
      function deleteMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target)) throw new TypeError();
        if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
        var provider = GetMetadataProvider(
          target,
          propertyKey,
          /*Create*/
          false
        );
        if (IsUndefined(provider)) return false;
        return provider.OrdinaryDeleteMetadata(metadataKey, target, propertyKey);
      }
      exporter("deleteMetadata", deleteMetadata);
      function DecorateConstructor(decorators, target) {
        for (var i = decorators.length - 1; i >= 0; --i) {
          var decorator = decorators[i];
          var decorated = decorator(target);
          if (!IsUndefined(decorated) && !IsNull(decorated)) {
            if (!IsConstructor(decorated)) throw new TypeError();
            target = decorated;
          }
        }
        return target;
      }
      function DecorateProperty(decorators, target, propertyKey, descriptor) {
        for (var i = decorators.length - 1; i >= 0; --i) {
          var decorator = decorators[i];
          var decorated = decorator(target, propertyKey, descriptor);
          if (!IsUndefined(decorated) && !IsNull(decorated)) {
            if (!IsObject(decorated)) throw new TypeError();
            descriptor = decorated;
          }
        }
        return descriptor;
      }
      function OrdinaryHasMetadata(MetadataKey, O, P) {
        var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
        if (hasOwn) return true;
        var parent = OrdinaryGetPrototypeOf(O);
        if (!IsNull(parent)) return OrdinaryHasMetadata(MetadataKey, parent, P);
        return false;
      }
      function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
        var provider = GetMetadataProvider(
          O,
          P,
          /*Create*/
          false
        );
        if (IsUndefined(provider)) return false;
        return ToBoolean(provider.OrdinaryHasOwnMetadata(MetadataKey, O, P));
      }
      function OrdinaryGetMetadata(MetadataKey, O, P) {
        var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
        if (hasOwn) return OrdinaryGetOwnMetadata(MetadataKey, O, P);
        var parent = OrdinaryGetPrototypeOf(O);
        if (!IsNull(parent)) return OrdinaryGetMetadata(MetadataKey, parent, P);
        return void 0;
      }
      function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
        var provider = GetMetadataProvider(
          O,
          P,
          /*Create*/
          false
        );
        if (IsUndefined(provider)) return;
        return provider.OrdinaryGetOwnMetadata(MetadataKey, O, P);
      }
      function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
        var provider = GetMetadataProvider(
          O,
          P,
          /*Create*/
          true
        );
        provider.OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P);
      }
      function OrdinaryMetadataKeys(O, P) {
        var ownKeys = OrdinaryOwnMetadataKeys(O, P);
        var parent = OrdinaryGetPrototypeOf(O);
        if (parent === null) return ownKeys;
        var parentKeys = OrdinaryMetadataKeys(parent, P);
        if (parentKeys.length <= 0) return ownKeys;
        if (ownKeys.length <= 0) return parentKeys;
        var set2 = new _Set();
        var keys = [];
        for (var _i = 0, ownKeys_1 = ownKeys; _i < ownKeys_1.length; _i++) {
          var key = ownKeys_1[_i];
          var hasKey = set2.has(key);
          if (!hasKey) {
            set2.add(key);
            keys.push(key);
          }
        }
        for (var _a2 = 0, parentKeys_1 = parentKeys; _a2 < parentKeys_1.length; _a2++) {
          var key = parentKeys_1[_a2];
          var hasKey = set2.has(key);
          if (!hasKey) {
            set2.add(key);
            keys.push(key);
          }
        }
        return keys;
      }
      function OrdinaryOwnMetadataKeys(O, P) {
        var provider = GetMetadataProvider(
          O,
          P,
          /*create*/
          false
        );
        if (!provider) {
          return [];
        }
        return provider.OrdinaryOwnMetadataKeys(O, P);
      }
      function Type(x) {
        if (x === null) return 1;
        switch (typeof x) {
          case "undefined":
            return 0;
          case "boolean":
            return 2;
          case "string":
            return 3;
          case "symbol":
            return 4;
          case "number":
            return 5;
          case "object":
            return x === null ? 1 : 6;
          default:
            return 6;
        }
      }
      function IsUndefined(x) {
        return x === void 0;
      }
      function IsNull(x) {
        return x === null;
      }
      function IsSymbol(x) {
        return typeof x === "symbol";
      }
      function IsObject(x) {
        return typeof x === "object" ? x !== null : typeof x === "function";
      }
      function ToPrimitive(input, PreferredType) {
        switch (Type(input)) {
          case 0:
            return input;
          case 1:
            return input;
          case 2:
            return input;
          case 3:
            return input;
          case 4:
            return input;
          case 5:
            return input;
        }
        var hint = "string";
        var exoticToPrim = GetMethod(input, toPrimitiveSymbol);
        if (exoticToPrim !== void 0) {
          var result = exoticToPrim.call(input, hint);
          if (IsObject(result)) throw new TypeError();
          return result;
        }
        return OrdinaryToPrimitive(input);
      }
      function OrdinaryToPrimitive(O, hint) {
        var valueOf, result, toString_2;
        {
          var toString_1 = O.toString;
          if (IsCallable(toString_1)) {
            var result = toString_1.call(O);
            if (!IsObject(result)) return result;
          }
          var valueOf = O.valueOf;
          if (IsCallable(valueOf)) {
            var result = valueOf.call(O);
            if (!IsObject(result)) return result;
          }
        }
        throw new TypeError();
      }
      function ToBoolean(argument) {
        return !!argument;
      }
      function ToString(argument) {
        return "" + argument;
      }
      function ToPropertyKey(argument) {
        var key = ToPrimitive(argument);
        if (IsSymbol(key)) return key;
        return ToString(key);
      }
      function IsArray(argument) {
        return Array.isArray ? Array.isArray(argument) : argument instanceof Object ? argument instanceof Array : Object.prototype.toString.call(argument) === "[object Array]";
      }
      function IsCallable(argument) {
        return typeof argument === "function";
      }
      function IsConstructor(argument) {
        return typeof argument === "function";
      }
      function IsPropertyKey(argument) {
        switch (Type(argument)) {
          case 3:
            return true;
          case 4:
            return true;
          default:
            return false;
        }
      }
      function GetMethod(V, P) {
        var func = V[P];
        if (func === void 0 || func === null) return void 0;
        if (!IsCallable(func)) throw new TypeError();
        return func;
      }
      function GetIterator(obj) {
        var method = GetMethod(obj, iteratorSymbol);
        if (!IsCallable(method)) throw new TypeError();
        var iterator = method.call(obj);
        if (!IsObject(iterator)) throw new TypeError();
        return iterator;
      }
      function IteratorValue(iterResult) {
        return iterResult.value;
      }
      function IteratorStep(iterator) {
        var result = iterator.next();
        return result.done ? false : result;
      }
      function IteratorClose(iterator) {
        var f = iterator["return"];
        if (f) f.call(iterator);
      }
      function OrdinaryGetPrototypeOf(O) {
        var proto = Object.getPrototypeOf(O);
        if (typeof O !== "function" || O === functionPrototype) return proto;
        if (proto !== functionPrototype) return proto;
        var prototype = O.prototype;
        var prototypeProto = prototype && Object.getPrototypeOf(prototype);
        if (prototypeProto == null || prototypeProto === Object.prototype) return proto;
        var constructor = prototypeProto.constructor;
        if (typeof constructor !== "function") return proto;
        if (constructor === O) return proto;
        return constructor;
      }
      function fail(e) {
        throw e;
      }
      function CreateMetadataRegistry() {
        var fallback;
        if (!IsUndefined(registrySymbol) && typeof root.Reflect !== "undefined" && !(registrySymbol in root.Reflect) && typeof root.Reflect.defineMetadata === "function") {
          fallback = CreateFallbackProvider(root.Reflect);
        }
        var first;
        var second;
        var rest;
        var targetProviderMap = new _WeakMap();
        var registry = {
          registerProvider,
          getProvider,
          setProvider
        };
        return registry;
        function registerProvider(provider) {
          if (!Object.isExtensible(registry)) {
            throw new Error("Cannot add provider to a frozen registry.");
          }
          switch (true) {
            case fallback === provider:
              break;
            case IsUndefined(first):
              first = provider;
              break;
            case first === provider:
              break;
            case IsUndefined(second):
              second = provider;
              break;
            case second === provider:
              break;
            default:
              if (rest === void 0) rest = new _Set();
              rest.add(provider);
              break;
          }
        }
        function getProviderNoCache(O, P) {
          if (!IsUndefined(first)) {
            if (first.isProviderFor(O, P)) return first;
            if (!IsUndefined(second)) {
              if (second.isProviderFor(O, P)) return first;
              if (!IsUndefined(rest)) {
                var iterator = GetIterator(rest);
                while (true) {
                  var next = IteratorStep(iterator);
                  if (!next) {
                    return void 0;
                  }
                  var provider = IteratorValue(next);
                  if (provider.isProviderFor(O, P)) {
                    IteratorClose(iterator);
                    return provider;
                  }
                }
              }
            }
          }
          if (!IsUndefined(fallback) && fallback.isProviderFor(O, P)) {
            return fallback;
          }
          return void 0;
        }
        function getProvider(O, P) {
          var providerMap = targetProviderMap.get(O);
          var provider;
          if (!IsUndefined(providerMap)) {
            provider = providerMap.get(P);
          }
          if (!IsUndefined(provider)) {
            return provider;
          }
          provider = getProviderNoCache(O, P);
          if (!IsUndefined(provider)) {
            if (IsUndefined(providerMap)) {
              providerMap = new _Map();
              targetProviderMap.set(O, providerMap);
            }
            providerMap.set(P, provider);
          }
          return provider;
        }
        function hasProvider(provider) {
          if (IsUndefined(provider)) throw new TypeError();
          return first === provider || second === provider || !IsUndefined(rest) && rest.has(provider);
        }
        function setProvider(O, P, provider) {
          if (!hasProvider(provider)) {
            throw new Error("Metadata provider not registered.");
          }
          var existingProvider = getProvider(O, P);
          if (existingProvider !== provider) {
            if (!IsUndefined(existingProvider)) {
              return false;
            }
            var providerMap = targetProviderMap.get(O);
            if (IsUndefined(providerMap)) {
              providerMap = new _Map();
              targetProviderMap.set(O, providerMap);
            }
            providerMap.set(P, provider);
          }
          return true;
        }
      }
      function GetOrCreateMetadataRegistry() {
        var metadataRegistry2;
        if (!IsUndefined(registrySymbol) && IsObject(root.Reflect) && Object.isExtensible(root.Reflect)) {
          metadataRegistry2 = root.Reflect[registrySymbol];
        }
        if (IsUndefined(metadataRegistry2)) {
          metadataRegistry2 = CreateMetadataRegistry();
        }
        if (!IsUndefined(registrySymbol) && IsObject(root.Reflect) && Object.isExtensible(root.Reflect)) {
          Object.defineProperty(root.Reflect, registrySymbol, {
            enumerable: false,
            configurable: false,
            writable: false,
            value: metadataRegistry2
          });
        }
        return metadataRegistry2;
      }
      function CreateMetadataProvider(registry) {
        var metadata2 = new _WeakMap();
        var provider = {
          isProviderFor: function(O, P) {
            var targetMetadata = metadata2.get(O);
            if (IsUndefined(targetMetadata)) return false;
            return targetMetadata.has(P);
          },
          OrdinaryDefineOwnMetadata: OrdinaryDefineOwnMetadata2,
          OrdinaryHasOwnMetadata: OrdinaryHasOwnMetadata2,
          OrdinaryGetOwnMetadata: OrdinaryGetOwnMetadata2,
          OrdinaryOwnMetadataKeys: OrdinaryOwnMetadataKeys2,
          OrdinaryDeleteMetadata
        };
        metadataRegistry.registerProvider(provider);
        return provider;
        function GetOrCreateMetadataMap(O, P, Create) {
          var targetMetadata = metadata2.get(O);
          var createdTargetMetadata = false;
          if (IsUndefined(targetMetadata)) {
            if (!Create) return void 0;
            targetMetadata = new _Map();
            metadata2.set(O, targetMetadata);
            createdTargetMetadata = true;
          }
          var metadataMap = targetMetadata.get(P);
          if (IsUndefined(metadataMap)) {
            if (!Create) return void 0;
            metadataMap = new _Map();
            targetMetadata.set(P, metadataMap);
            if (!registry.setProvider(O, P, provider)) {
              targetMetadata.delete(P);
              if (createdTargetMetadata) {
                metadata2.delete(O);
              }
              throw new Error("Wrong provider for target.");
            }
          }
          return metadataMap;
        }
        function OrdinaryHasOwnMetadata2(MetadataKey, O, P) {
          var metadataMap = GetOrCreateMetadataMap(
            O,
            P,
            /*Create*/
            false
          );
          if (IsUndefined(metadataMap)) return false;
          return ToBoolean(metadataMap.has(MetadataKey));
        }
        function OrdinaryGetOwnMetadata2(MetadataKey, O, P) {
          var metadataMap = GetOrCreateMetadataMap(
            O,
            P,
            /*Create*/
            false
          );
          if (IsUndefined(metadataMap)) return void 0;
          return metadataMap.get(MetadataKey);
        }
        function OrdinaryDefineOwnMetadata2(MetadataKey, MetadataValue, O, P) {
          var metadataMap = GetOrCreateMetadataMap(
            O,
            P,
            /*Create*/
            true
          );
          metadataMap.set(MetadataKey, MetadataValue);
        }
        function OrdinaryOwnMetadataKeys2(O, P) {
          var keys = [];
          var metadataMap = GetOrCreateMetadataMap(
            O,
            P,
            /*Create*/
            false
          );
          if (IsUndefined(metadataMap)) return keys;
          var keysObj = metadataMap.keys();
          var iterator = GetIterator(keysObj);
          var k = 0;
          while (true) {
            var next = IteratorStep(iterator);
            if (!next) {
              keys.length = k;
              return keys;
            }
            var nextValue = IteratorValue(next);
            try {
              keys[k] = nextValue;
            } catch (e) {
              try {
                IteratorClose(iterator);
              } finally {
                throw e;
              }
            }
            k++;
          }
        }
        function OrdinaryDeleteMetadata(MetadataKey, O, P) {
          var metadataMap = GetOrCreateMetadataMap(
            O,
            P,
            /*Create*/
            false
          );
          if (IsUndefined(metadataMap)) return false;
          if (!metadataMap.delete(MetadataKey)) return false;
          if (metadataMap.size === 0) {
            var targetMetadata = metadata2.get(O);
            if (!IsUndefined(targetMetadata)) {
              targetMetadata.delete(P);
              if (targetMetadata.size === 0) {
                metadata2.delete(targetMetadata);
              }
            }
          }
          return true;
        }
      }
      function CreateFallbackProvider(reflect) {
        var defineMetadata2 = reflect.defineMetadata, hasOwnMetadata2 = reflect.hasOwnMetadata, getOwnMetadata2 = reflect.getOwnMetadata, getOwnMetadataKeys2 = reflect.getOwnMetadataKeys, deleteMetadata2 = reflect.deleteMetadata;
        var metadataOwner = new _WeakMap();
        var provider = {
          isProviderFor: function(O, P) {
            var metadataPropertySet = metadataOwner.get(O);
            if (!IsUndefined(metadataPropertySet) && metadataPropertySet.has(P)) {
              return true;
            }
            if (getOwnMetadataKeys2(O, P).length) {
              if (IsUndefined(metadataPropertySet)) {
                metadataPropertySet = new _Set();
                metadataOwner.set(O, metadataPropertySet);
              }
              metadataPropertySet.add(P);
              return true;
            }
            return false;
          },
          OrdinaryDefineOwnMetadata: defineMetadata2,
          OrdinaryHasOwnMetadata: hasOwnMetadata2,
          OrdinaryGetOwnMetadata: getOwnMetadata2,
          OrdinaryOwnMetadataKeys: getOwnMetadataKeys2,
          OrdinaryDeleteMetadata: deleteMetadata2
        };
        return provider;
      }
      function GetMetadataProvider(O, P, Create) {
        var registeredProvider = metadataRegistry.getProvider(O, P);
        if (!IsUndefined(registeredProvider)) {
          return registeredProvider;
        }
        if (Create) {
          if (metadataRegistry.setProvider(O, P, metadataProvider)) {
            return metadataProvider;
          }
          throw new Error("Illegal state.");
        }
        return void 0;
      }
    });
  })(Reflect1 || (Reflect1 = {}));
  return ReflectLite;
}
requireReflectLite();
class Metadata {
  static getOwnPropertyNames(target) {
    return Reflect.getMetadataKeys(target);
  }
  static get(target, propertyKey) {
    return Reflect.getMetadata(propertyKey, target);
  }
  static define(target, propertyKey, valueOrFunc, defaults) {
    if (target && target.constructor && target.constructor != Object) {
      if (isFunction(valueOrFunc)) {
        Reflect.defineMetadata(propertyKey, produce(Reflect.getMetadata(propertyKey, target) ?? defaults ?? {}, valueOrFunc), target);
        return;
      }
      Reflect.defineMetadata(propertyKey, valueOrFunc, target);
    }
  }
}
const EmptyContext = {
  path: [],
  branch: []
};
class TypedError extends TypeError {
  constructor(failure, failures) {
    let cached;
    const { message, explanation, ...rest } = failure;
    const { path } = failure;
    const msg = path.length === 0 ? message : `At path: ${path.join(".")} -- ${message}`;
    super(explanation ?? msg);
    __publicField(this, "value");
    __publicField(this, "key");
    __publicField(this, "type");
    __publicField(this, "refinement");
    __publicField(this, "path");
    __publicField(this, "branch");
    __publicField(this, "failures");
    if (explanation != null) {
      this["cause"] = msg;
    }
    Object.assign(this, rest);
    this.name = this.constructor.name;
    this.failures = () => {
      return cached ?? (cached = [
        failure,
        ...failures()
      ]);
    };
  }
}
const isType = (t) => {
  return !!t && t[SymbolType] == SymbolType;
};
const SymbolType = Symbol("Type");
function shiftIterator(input) {
  const { done, value } = input.next();
  return done ? void 0 : value;
}
function toFailure(ret, context, t, inputValue) {
  if (ret === true) {
    return;
  }
  let result = {};
  if (ret === false) {
    result = {};
  } else if (isString(ret)) {
    result = {
      message: ret
    };
  } else {
    result = ret;
  }
  const { path, branch, node } = context;
  const { type } = t;
  const { refinement, message = isUndefined(inputValue) ? "Required" : `Expected a value of type \`${type}\`${refinement ? ` with refinement \`${refinement}\`` : ""}, but received: \`${inputValue}\`` } = result;
  return {
    ...result,
    value: inputValue,
    type,
    refinement,
    key: path[path.length - 1],
    path,
    branch,
    node,
    message
  };
}
function* toFailures(ret, context, t, inputValue) {
  let result = ret;
  if (!isIterable(result)) {
    result = [
      result
    ];
  }
  for (const r of result) {
    const failure = toFailure(r, context, t, inputValue);
    if (failure) {
      yield failure;
    }
  }
}
function validate(value, typed) {
  let options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const tuples = run(value, typed, options);
  const tuple = shiftIterator(tuples);
  if (tuple[0]) {
    const error = new TypedError(tuple[0], function* () {
      for (const t of tuples) {
        if (t[0]) {
          yield t[0];
        }
      }
    });
    return [
      error,
      void 0
    ];
  }
  const v = tuple[1];
  return [
    void 0,
    v
  ];
}
function* run(inputValue, t) {
  let options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const { path = [], branch = [
    inputValue
  ], node = {
    current: t
  }, coerce = false, mask = false } = options;
  const ctx = {
    mask,
    path,
    branch,
    node
  };
  let value = inputValue;
  if (coerce) {
    const v = t.coercer(inputValue, ctx);
    if (v != void 0) {
      value = v;
    }
  }
  let status = 0;
  for (const failure of toFailures(t.validator(value, ctx), ctx, t, inputValue)) {
    failure.explanation = options.message;
    status = 2;
    yield [
      failure,
      void 0
    ];
  }
  for (let [k, v, st] of t.entries(value, ctx)) {
    const ts = run(v, st, {
      path: k === void 0 ? path : [
        ...path,
        k
      ],
      branch: k === void 0 ? branch : [
        ...branch,
        v
      ],
      node: k === void 0 ? node : {
        current: st,
        parent: node
      },
      coerce,
      mask,
      message: options.message
    });
    for (const t2 of ts) {
      if (t2[0]) {
        status = t2[0].refinement != null ? 1 : 2;
        yield [
          t2[0],
          void 0
        ];
      } else if (coerce) {
        v = t2[1];
        if (k === void 0) {
          value = v;
        } else if (value instanceof Map) {
          value.set(k, v);
        } else if (value instanceof Set) {
          value.add(v);
        } else if (isObjectLike(value)) {
          value[k] = v;
        }
      }
    }
  }
  if (status !== 2) {
    for (const failure of toFailures(t.refiner(value, ctx), ctx, t, inputValue)) {
      failure.explanation = options.message;
      status = 1;
      yield [
        failure,
        void 0
      ];
    }
  }
  if (status === 0) {
    yield [
      void 0,
      value
    ];
  }
}
const defineType = (create) => {
  return function() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    const type = create(...args);
    const propertyDecorator = (target, propertyKey) => {
      const current2 = Metadata.get(target, propertyKey) ?? {};
      Metadata.define(target, propertyKey, {
        ...current2,
        type
      });
    };
    propertyDecorator.toString = () => `@type:${type.type}`;
    return new Proxy(propertyDecorator, {
      ownKeys() {
        return [
          ...Object.getOwnPropertyNames(type),
          ...Object.getOwnPropertySymbols(type)
        ];
      },
      get(_, p) {
        return type[p];
      }
    });
  };
};
const defineModifier = (create) => {
  return function() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    const modifierFunc = (t) => create(t, ...args);
    const propertyDecorator = (target, prop) => {
      Metadata.define(target, prop, (m) => {
        (m.modifies ?? (m.modifies = [])).push({
          modify: modifierFunc
        });
      }, {});
    };
    return new Proxy(propertyDecorator, {
      get(_, p) {
        if (p == "modify") {
          return modifierFunc;
        }
        return;
      }
    });
  };
};
const _Schema = class _Schema {
  static create(base, origin, scope) {
    var _a2;
    const parent = origin ?? ((_a2 = base[_Schema.underlying]) == null ? void 0 : _a2["schema"]) ?? {};
    let meta;
    return new Proxy({}, {
      ownKeys(_) {
        const m = /* @__PURE__ */ new Map();
        if (scope) {
          if (base[scope]) {
            for (const x of Object.getOwnPropertyNames(base[scope])) {
              m.set(x, x);
            }
          }
          if (parent) {
            if (parent[scope]) {
              for (const x of Object.getOwnPropertyNames(parent[scope])) {
                m.set(x, x);
              }
            }
          }
        } else {
          for (const x of Object.getOwnPropertyNames(base)) {
            m.set(x, x);
          }
          if (parent) {
            for (const x of Object.getOwnPropertyNames(parent)) {
              m.set(x, x);
            }
          }
        }
        return [
          ...m.keys()
        ];
      },
      get(_, p) {
        var _a3, _b;
        if (p === _Schema.meta) {
          return meta ?? (meta = _Schema.create(base, parent, _Schema.meta));
        }
        if (scope) {
          if (isObject(base)) {
            const v = (_a3 = base == null ? void 0 : base[scope]) == null ? void 0 : _a3[p];
            if (!isUndefined(v)) {
              return v;
            }
          }
          return parent ? (_b = parent == null ? void 0 : parent[scope]) == null ? void 0 : _b[p] : void 0;
        }
        if (isObject(base)) {
          const v = base == null ? void 0 : base[p];
          if (!isUndefined(v)) {
            return v;
          }
        }
        return parent ? parent[p] : void 0;
      }
    });
  }
  static schemaProp(withSchema, key) {
    return getSchema(withSchema.schema, key);
  }
  static metaProp(withSchema, key) {
    return getMeta(withSchema.schema, key);
  }
};
__publicField(_Schema, "RecordKey", Symbol("RecordKey"));
__publicField(_Schema, "meta", Symbol("meta"));
__publicField(_Schema, "optional", Symbol("optional"));
__publicField(_Schema, "underlying", Symbol("underlying"));
__publicField(_Schema, "unwrap", Symbol("unwrap"));
__publicField(_Schema, "extractSchema", (v) => {
  return new Collector().toValue(v);
});
__publicField(_Schema, "extractMeta", (v) => {
  return new Collector().toValue(v["meta"] ?? v[_Schema.meta]);
});
let Schema = _Schema;
const getSchema = (schema, key) => {
  if (!isObject(schema)) {
    return void 0;
  }
  return schema[key] ?? (schema[Schema.unwrap] ? getSchema(schema[Schema.unwrap]().schema, key) : void 0);
};
const getMeta = (schema, metaKey) => {
  var _a2;
  if (!isObject(schema)) {
    return void 0;
  }
  return ((_a2 = schema[Schema.meta]) == null ? void 0 : _a2[metaKey]) ?? (schema[Schema.unwrap] ? getMeta(schema[Schema.unwrap]().schema, metaKey) : void 0);
};
class Collector {
  constructor(deref = false) {
    this.deref = deref;
  }
  toValue(v) {
    if (v) {
      if (!isUndefined(v["schema"])) {
        return this.toValue(v["schema"]);
      }
      if (this.deref) {
        if (v[Schema.unwrap]) {
          return this.toValue(v[Schema.unwrap]());
        }
      }
      if (isArray(v)) {
        return this.toArray(v);
      }
      if (v.constructor === Object) {
        return this.toObject(v);
      }
    }
    return v;
  }
  toObject(s) {
    const x = {};
    for (const k of Object.getOwnPropertyNames(s)) {
      x[k] = this.toValue(s[k]);
    }
    return x;
  }
  toArray(values) {
    const arr = [];
    for (const value of values) {
      arr.push(this.toValue(value));
    }
    return arr;
  }
}
class JSONPointer {
  static parse(pointer) {
    if (pointer === "") {
      return [];
    }
    if (pointer === "/") {
      return [
        ""
      ];
    }
    if (pointer.charAt(0) !== "/") {
      throw new Error("Invalid JSON pointer: " + pointer);
    }
    const parts = pointer.substring(1).split(/\//);
    return parts.map((v, i) => JSONPointer.unescape(v, i === parts.length - 1));
  }
  static create() {
    let keyPath = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    if (keyPath.length === 0) {
      return "";
    }
    return "/" + keyPath.map(JSONPointer.escape).join("/");
  }
  static unescape(str, last) {
    if (str == "" && last) {
      return Schema.RecordKey;
    }
    return str.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  static escape(p) {
    if (p == Schema.RecordKey) {
      return "";
    }
    return p.toString().replace(/~/g, "~0").replace(/\//g, "~1");
  }
  static get(obj, pointerOrTokens) {
    const refTokens = Array.isArray(pointerOrTokens) ? pointerOrTokens : JSONPointer.parse(pointerOrTokens);
    for (let i = 0; i < refTokens.length; i++) {
      const tok = refTokens[i];
      if (i > 0 && tok == Schema.RecordKey) {
        return refTokens[i - 1];
      }
      if (!(typeof obj == "object" && tok in obj)) {
        throw new Error("Invalid reference token: " + tok);
      }
      obj = obj[tok];
    }
    return obj;
  }
}
_a = SymbolType;
const _TypeUnknown = class _TypeUnknown {
  constructor(schema) {
    __publicField(this, _a, SymbolType);
    __publicField(this, "schema");
    if (schema) {
      this.schema = Schema.create(schema);
      return;
    }
    this.schema = schema ?? null;
  }
  get meta() {
    return this.schema ? this.schema[Schema.meta] : {};
  }
  get type() {
    var _a2;
    return ((_a2 = this.schema) == null ? void 0 : _a2["type"]) ?? "unknown";
  }
  refiner(_value, _context) {
    return [];
  }
  validator(_value, _context) {
    return [];
  }
  coercer(value, _context) {
    if (isString(value)) {
      const t = value.trim();
      if (t.length >= 2) {
        if (t.startsWith("{") && t.endsWith("}")) {
          try {
            return JSON.parse(t);
          } catch (e) {
          }
        }
        if (t.startsWith("[") && t.endsWith("]")) {
          try {
            return JSON.parse(t);
          } catch (e) {
          }
        }
      }
    }
    return value;
  }
  *entries(_value) {
  }
  validate(value) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return validate(value, this, options);
  }
  create(value) {
    const result = validate(value, this, {
      coerce: true
    });
    if (result[0]) {
      throw result[0];
    }
    return result[1];
  }
  mask(value) {
    const result = validate(value, this, {
      coerce: true,
      mask: true
    });
    if (result[0]) {
      throw result[0];
    }
    return result[1];
  }
  use() {
    for (var _len = arguments.length, modifiers = new Array(_len), _key = 0; _key < _len; _key++) {
      modifiers[_key] = arguments[_key];
    }
    return modifiers.reduce((t, m) => m.modify(t), this);
  }
  optional() {
    return OptionalType.create(this);
  }
  default(v) {
    return DefaultedType.create(this, v);
  }
};
__publicField(_TypeUnknown, "define", defineType(function() {
  let validator = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : () => true;
  class CustomType extends _TypeUnknown {
    validator(value, ctx) {
      return validator(value, ctx);
    }
  }
  return new CustomType(null);
}));
__publicField(_TypeUnknown, "fromTypeObject", (x, baseType) => {
  const t = x.type ?? baseType ?? new _TypeUnknown({});
  if (x.modifies) {
    return t.use(...x.modifies ?? []);
  }
  return t;
});
let TypeUnknown = _TypeUnknown;
class TypeWrapper extends TypeUnknown {
  static of(t, extra) {
    return new TypeWrapper({
      ...extra,
      [Schema.underlying]: t
    });
  }
  static refine(t, refiner, schema) {
    class Refiner extends TypeWrapper {
      *refiner(value, ctx) {
        yield* this.unwrap.refiner(value, ctx);
        const result = refiner(value, ctx);
        const failures = toFailures(result, ctx, t, value);
        for (const failure of failures) {
          yield {
            ...failure,
            refinement: Object.keys(schema).join(",")
          };
        }
      }
    }
    return new Refiner({
      ...schema,
      [Schema.underlying]: t
    });
  }
  get unwrap() {
    const unwrapFunc = this.schema[Schema.unwrap];
    return unwrapFunc ? unwrapFunc() : this.schema[Schema.underlying];
  }
  get type() {
    return this.unwrap.type;
  }
  *entries(value) {
    let context = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : EmptyContext;
    yield* this.unwrap.entries(value, {
      ...context,
      node: {
        current: this,
        parent: context.node
      }
    });
  }
  validator(value, context) {
    return toFailures(this.unwrap.validator(value, context), context, this, value);
  }
  refiner(value, context) {
    return toFailures(this.unwrap.refiner(value, context), context, this, value);
  }
  coercer(value, context) {
    return this.unwrap.coercer(value, context);
  }
}
const _DefaultedType = class _DefaultedType extends TypeWrapper {
  coercer(value, context) {
    return typeof value === "undefined" ? this.schema.default : super.unwrap.coercer(value, context);
  }
};
__publicField(_DefaultedType, "create", defineType((t, defaultValue) => {
  return new _DefaultedType({
    default: defaultValue,
    [Schema.underlying]: t
  });
}));
let DefaultedType = _DefaultedType;
const _OptionalType = class _OptionalType extends TypeWrapper {
  refiner(value, context) {
    return value === void 0 || super.unwrap.refiner(value, context);
  }
  validator(value, context) {
    return value === void 0 || super.unwrap.validator(value, context);
  }
};
__publicField(_OptionalType, "create", defineType((t) => {
  return new _OptionalType({
    [Schema.underlying]: t,
    [Schema.optional]: t
  });
}));
let OptionalType = _OptionalType;
const _TypeAny = class _TypeAny extends TypeUnknown {
  constructor() {
    super({});
  }
  get type() {
    return "any";
  }
  validator() {
    return true;
  }
};
__publicField(_TypeAny, "create", defineType(() => {
  return new _TypeAny();
}));
let TypeAny = _TypeAny;
const _TypeString = class _TypeString extends TypeUnknown {
  get type() {
    return this.schema.type;
  }
  validator(value, _) {
    return isString(value);
  }
  coercer(value, _) {
    if (isUndefined(value) || isNull(value)) {
      return value;
    }
    return String(value);
  }
};
__publicField(_TypeString, "create", defineType(() => {
  return new _TypeString({
    type: "string"
  });
}));
let TypeString = _TypeString;
const _TypeInteger = class _TypeInteger extends TypeUnknown {
  get type() {
    return this.schema.type;
  }
  validator(value, _) {
    return isInteger(value);
  }
  coercer(value, _) {
    try {
      const ret = value != void 0 ? parseInt(String(value)) : void 0;
      return isInteger(ret) ? ret : void 0;
    } catch (err) {
      return void 0;
    }
  }
};
__publicField(_TypeInteger, "create", defineType(() => {
  return new _TypeInteger({
    type: "integer"
  });
}));
let TypeInteger = _TypeInteger;
const _TypeBoolean = class _TypeBoolean extends TypeUnknown {
  get type() {
    return this.schema.type;
  }
  validator(value, _) {
    return isBoolean(value);
  }
  coercer(value, _) {
    try {
      return value != void 0 ? String(value) === "true" : void 0;
    } catch (err) {
      return void 0;
    }
  }
};
__publicField(_TypeBoolean, "create", defineType(() => {
  return new _TypeBoolean({
    type: "boolean"
  });
}));
let TypeBoolean = _TypeBoolean;
const _TypeEnum = class _TypeEnum extends TypeUnknown {
  static createEnum(values) {
    return new _TypeEnum({
      enum: values
    });
  }
  get type() {
    return "enums";
  }
  validator(value, _) {
    return this.schema.enum.includes(value);
  }
  coercer(value, _) {
    return value;
  }
};
__publicField(_TypeEnum, "create", defineType(_TypeEnum.createEnum));
__publicField(_TypeEnum, "literal", defineType((constant) => {
  return new _TypeEnum({
    enum: [
      constant
    ]
  });
}));
__publicField(_TypeEnum, "nativeEnum", defineType((nativeEnum2) => {
  return new _TypeEnum({
    enum: Object.values(nativeEnum2)
  });
}));
let TypeEnum = _TypeEnum;
const _TypeNever = class _TypeNever extends TypeUnknown {
  get type() {
    return "never";
  }
  validator(_value, _context) {
    return false;
  }
  coercer(value, _) {
    return value;
  }
};
__publicField(_TypeNever, "create", defineType(() => {
  return new _TypeNever(false);
}));
let TypeNever = _TypeNever;
class TypeObject extends TypeUnknown {
  static create(props) {
    const pickRequired = function() {
      let props2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      const required = [];
      for (const [propName, propType] of Object.entries(props2)) {
        const p = Schema.schemaProp(propType, Schema.optional);
        if (!p) {
          required.push(propName);
        }
      }
      return required;
    };
    return defineType(() => {
      var _a2, _b;
      if (props) {
        if (isClass(props)) {
          const t = new props();
          const properties = {};
          for (const [k, v] of Object.entries(t)) {
            properties[k] = TypeEnum.literal(v);
          }
          for (const propName of Metadata.getOwnPropertyNames(t)) {
            const typeObject = Metadata.get(t, propName);
            if (typeObject) {
              const propType = TypeUnknown.fromTypeObject(typeObject, properties[propName]);
              if (propName in properties) {
                properties[propName] = propType.default((_b = (_a2 = properties[propName].schema) == null ? void 0 : _a2.enum) == null ? void 0 : _b[0]);
              } else {
                properties[propName] = propType;
              }
            }
          }
          return new TypeObject({
            type: "object",
            properties,
            required: pickRequired(properties),
            additionalProperties: TypeNever.create()
          });
        }
        return new TypeObject({
          type: "object",
          properties: props,
          required: pickRequired(props),
          additionalProperties: TypeNever.create()
        });
      }
      return new TypeObject({
        type: "object",
        properties: {},
        required: [],
        additionalProperties: TypeNever.create()
      });
    })();
  }
  get type() {
    return this.schema.type;
  }
  *entries(value) {
    var _a2;
    let ctx = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : EmptyContext;
    if (isObjectLike(value)) {
      const propNames = new Set(Object.keys(value));
      if (this.schema.properties) {
        for (const key in this.schema.properties) {
          propNames.delete(key);
          yield [
            key,
            value[key],
            this.schema.properties[key]
          ];
        }
      }
      if (((_a2 = ctx.node) == null ? void 0 : _a2.current.type) !== "intersection") {
        for (const key of propNames) {
          yield [
            key,
            value[key],
            this.schema.additionalProperties
          ];
        }
      }
    }
  }
  validator(value, _ctx) {
    return isObjectLike(value);
  }
  coercer(value, ctx) {
    if (isObjectLike(value)) {
      const v = {
        ...value
      };
      if (ctx.mask) {
        const properties = this.schema.properties;
        if (properties) {
          for (const key in v) {
            if (properties[key] === void 0) {
              delete v[key];
            }
          }
        }
      }
      return v;
    }
    return super.coercer(value, ctx);
  }
}
const _TypeRecord = class _TypeRecord extends TypeUnknown {
  get type() {
    return "record";
  }
  *entries(value) {
    if (isObjectLike(value)) {
      for (const [k, v] of Object.entries(value)) {
        yield [
          Schema.RecordKey,
          k,
          this.schema.propertyNames
        ];
        yield [
          k,
          v,
          this.schema.additionalProperties
        ];
      }
    }
  }
  validator(value) {
    return isObjectLike(value);
  }
};
__publicField(_TypeRecord, "create", defineType((k, v) => {
  return new _TypeRecord({
    type: "object",
    propertyNames: k,
    additionalProperties: v
  });
}));
let TypeRecord = _TypeRecord;
const _TypeArray = class _TypeArray extends TypeUnknown {
  get type() {
    return this.schema.type;
  }
  *entries(value) {
    if (Array.isArray(value)) {
      for (const [i, v] of value.entries()) {
        yield [
          i,
          v,
          this.schema.items
        ];
      }
    }
  }
  validator(value) {
    return isArray(value);
  }
  coercer(value) {
    return isArray(value) ? value.slice() : value;
  }
};
__publicField(_TypeArray, "create", defineType((items) => {
  return new _TypeArray({
    type: "array",
    items
  });
}));
let TypeArray = _TypeArray;
const _TypeUnion = class _TypeUnion extends TypeUnknown {
  constructor() {
    super(...arguments);
    __publicField(this, "_discriminatorPropName");
    __publicField(this, "_discriminatorMappingProps", /* @__PURE__ */ new Map());
  }
  static discriminatorMapping(discriminatorPropertyName) {
    for (var _len = arguments.length, mapping = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      mapping[_key - 1] = arguments[_key];
    }
    return defineType(() => {
      const oneOf = [];
      if (mapping.length == 1 && mapping[0].constructor == Object) {
        for (const [discriminatorValue, def] of Object.entries(mapping[0])) {
          if (Schema.schemaProp(def, "$ref")) {
            oneOf.push(def);
          } else {
            const schema = {
              [discriminatorPropertyName]: TypeEnum.literal(discriminatorValue)
            };
            for (const [prop, _, t] of def.entries({}, EmptyContext)) {
              schema[String(prop)] = t;
            }
            oneOf.push(TypeObject.create(schema));
          }
        }
      } else {
        for (const x of mapping) {
          if (isClass(x)) {
            oneOf.push(TypeObject.create(x));
          }
        }
      }
      return new _TypeUnion({
        oneOf,
        discriminator: {
          propertyName: discriminatorPropertyName
        }
      });
    })();
  }
  discriminatorPropType(ctx) {
    return this._discriminatorPropName ?? (this._discriminatorPropName = (() => {
      var _a2, _b;
      const discriminatorPropName = ((_a2 = this.schema.discriminator) == null ? void 0 : _a2.propertyName) ?? "";
      const values = [];
      const metas = [];
      for (const x of this.schema.oneOf) {
        const p = Schema.schemaProp(x, "properties")[discriminatorPropName];
        if (!p) {
          continue;
        }
        const e = p.schema["enum"];
        if (e) {
          values.push(...e);
        }
        metas.push(p.meta);
      }
      return TypeWrapper.of(TypeEnum.create(values), {
        [Schema.meta]: Schema.create(metas[0], ((_b = ctx.node) == null ? void 0 : _b.current.meta) ?? {})
      });
    })());
  }
  discriminatorMapping(discriminatorPropName, discriminatorPropValue, ctx) {
    var _a2, _b;
    if (this._discriminatorMappingProps.get(discriminatorPropValue)) {
      return this._discriminatorMappingProps.get(discriminatorPropValue);
    }
    const enumValues = ((_b = (_a2 = this.discriminatorPropType(ctx)) == null ? void 0 : _a2.schema) == null ? void 0 : _b["enum"]) ?? [];
    if (enumValues.includes(discriminatorPropValue)) {
      const matched = this.schema.oneOf.find((s) => {
        const t = Schema.schemaProp(s, "properties")[discriminatorPropName];
        if (t) {
          const [err, _] = t.validate(discriminatorPropValue);
          return !err;
        }
        return false;
      });
      if (matched) {
        if (!this._discriminatorMappingProps.has(discriminatorPropValue)) {
          const props = {};
          for (const [prop, t] of Object.entries(Schema.schemaProp(matched, "properties"))) {
            if (prop === discriminatorPropName) {
              continue;
            }
            props[prop] = t;
          }
          this._discriminatorMappingProps.set(discriminatorPropValue, props);
        }
        return this._discriminatorMappingProps.get(discriminatorPropValue);
      }
    }
    return {};
  }
  *entries(value) {
    let context = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : EmptyContext;
    if (this.schema.discriminator) {
      const discriminatorPropName = this.schema.discriminator.propertyName;
      const discriminatorPropValue = value == null ? void 0 : value[discriminatorPropName];
      const base = TypeObject.create({
        [discriminatorPropName]: this.discriminatorPropType(context),
        ...this.discriminatorMapping(discriminatorPropName, discriminatorPropValue, context)
      });
      yield* base.entries(value, context);
    }
  }
  get type() {
    return "union";
  }
  coercer(value) {
    for (const t of this.schema.oneOf) {
      const [error, coerced] = validate(value, t, {
        coerce: true
      });
      if (!error) {
        return coerced;
      }
    }
    return value;
  }
  validator(value, context) {
    if (this.schema.discriminator) {
      const discriminatorPropName = this.schema.discriminator.propertyName;
      const discriminatorPropValue = value == null ? void 0 : value[discriminatorPropName];
      return TypeObject.create({
        [discriminatorPropName]: this.discriminatorPropType(context),
        ...this.discriminatorMapping(discriminatorPropName, discriminatorPropValue, context)
      }).validator(value, context);
    }
    const failures = [];
    for (const t of this.schema.oneOf) {
      const [...tuples] = run(value, t, context);
      const [first] = tuples;
      if (first && !first[0]) {
        return [];
      }
      for (const [failure] of tuples) {
        if (failure) {
          failures.push(failure);
        }
      }
    }
    return [
      `Expected the value to satisfy a union of \`${this.schema.oneOf.map((t) => t.type).join(" | ")}\`, but received: ${value}`,
      ...failures
    ];
  }
};
__publicField(_TypeUnion, "create", defineType(function() {
  for (var _len = arguments.length, types = new Array(_len), _key = 0; _key < _len; _key++) {
    types[_key] = arguments[_key];
  }
  return new _TypeUnion({
    oneOf: types
  });
}));
let TypeUnion = _TypeUnion;
const any = TypeAny.create;
const string = TypeString.create;
const integer = TypeInteger.create;
const boolean = TypeBoolean.create;
const enums = TypeEnum.create;
const nativeEnum = TypeEnum.nativeEnum;
const object = TypeObject.create;
const record = TypeRecord.create;
const array = TypeArray.create;
const union = TypeUnion.create;
const custom = TypeUnknown.define;
const optional = defineModifier((type) => {
  return OptionalType.create(type);
});
const annotate = defineModifier((type, meta) => {
  return TypeWrapper.of(type, {
    [Schema.meta]: meta
  });
});
const scriptRel = "modulepreload";
const assetsURL = function(dep) {
  return "/vuekit/" + dep;
};
const seen = {};
const __vitePreload = function preload(baseModule, deps, importerUrl) {
  let promise = Promise.resolve();
  if (deps && deps.length > 0) {
    document.getElementsByTagName("link");
    const cspNonceMeta = document.querySelector("meta[property=csp-nonce]"), cspNonce = (cspNonceMeta == null ? void 0 : cspNonceMeta.nonce) || (cspNonceMeta == null ? void 0 : cspNonceMeta.getAttribute("nonce"));
    promise = Promise.allSettled(deps.map((dep) => {
      dep = assetsURL(dep);
      if (dep in seen) return;
      seen[dep] = true;
      const isCss = dep.endsWith(".css"), cssSelector = isCss ? '[rel="stylesheet"]' : "";
      if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) return;
      const link = document.createElement("link");
      link.rel = isCss ? "stylesheet" : scriptRel;
      if (!isCss) link.as = "script";
      link.crossOrigin = "";
      link.href = dep;
      if (cspNonce) link.setAttribute("nonce", cspNonce);
      document.head.appendChild(link);
      if (isCss) return new Promise((res, rej) => {
        link.addEventListener("load", res);
        link.addEventListener("error", () => rej(new Error(`Unable to preload CSS for ${dep}`)));
      });
    }));
  }
  function handlePreloadError(err) {
    const e = new Event("vite:preloadError", {
      cancelable: true
    });
    e.payload = err;
    window.dispatchEvent(e);
    if (!e.defaultPrevented) throw err;
  }
  return promise.then((res) => {
    for (const item of res || []) {
      if (item.status !== "rejected") continue;
      handlePreloadError(item.reason);
    }
    return baseModule().catch(handlePreloadError);
  });
};
export {
  EmptyContext as E,
  JSONPointer as J,
  Schema as S,
  __vitePreload as _,
  array as a,
  any as b,
  custom as c,
  annotate as d,
  integer as e,
  optional as f,
  getDefaultExportFromCjs as g,
  boolean as h,
  isType as i,
  enums as j,
  nativeEnum as n,
  object as o,
  produce as p,
  record as r,
  string as s,
  union as u
};
