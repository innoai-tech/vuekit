import { r as __toESM, t as __commonJSMin } from "./rolldown-runtime.L2H4EfuM.chunk.js";
import { a as __extends, i as __awaiter, l as __spreadArray, n as __asyncValues, o as __generator, r as __await, s as __read, t as __asyncGenerator, u as __values } from "./vendor-rxjs.B52GCUIj.chunk.js";
function toArray(value) {
	return Array.isArray(value) ? value : Array.from(value);
}
function isLength(value) {
	return Number.isSafeInteger(value) && value >= 0;
}
function isArrayLike$1(value) {
	return value != null && typeof value !== "function" && isLength(value.length);
}
function identity$2(x) {
	return x;
}
function isUnsafeProperty(key) {
	return key === "__proto__";
}
function isDeepKey(key) {
	switch (typeof key) {
		case "number":
		case "symbol": return false;
		case "string": return key.includes(".") || key.includes("[") || key.includes("]");
	}
}
function toKey(value) {
	if (typeof value === "string" || typeof value === "symbol") return value;
	if (Object.is(value?.valueOf?.(), -0)) return "-0";
	return String(value);
}
function toString(value) {
	if (value == null) return "";
	if (typeof value === "string") return value;
	if (Array.isArray(value)) return value.map(toString).join(",");
	const result = /* @__PURE__ */ String(value);
	if (result === "0" && Object.is(/* @__PURE__ */ Number(value), -0)) return "-0";
	return result;
}
function toPath(deepKey) {
	if (Array.isArray(deepKey)) return deepKey.map(toKey);
	if (typeof deepKey === "symbol") return [deepKey];
	deepKey = /* @__PURE__ */ toString(deepKey);
	const result = [];
	const length = deepKey.length;
	if (length === 0) return result;
	let index = 0;
	let key = "";
	let quoteChar = "";
	let bracket = false;
	if (deepKey.charCodeAt(0) === 46) {
		result.push("");
		index++;
	}
	while (index < length) {
		const char = deepKey[index];
		if (quoteChar) if (char === "\\" && index + 1 < length) {
			index++;
			key += deepKey[index];
		} else if (char === quoteChar) quoteChar = "";
		else key += char;
		else if (bracket) if (char === "\"" || char === "'") quoteChar = char;
		else if (char === "]") {
			bracket = false;
			result.push(key);
			key = "";
		} else key += char;
		else if (char === "[") {
			bracket = true;
			if (key) {
				result.push(key);
				key = "";
			}
		} else if (char === ".") {
			if (key) {
				result.push(key);
				key = "";
			}
		} else key += char;
		index++;
	}
	if (key) result.push(key);
	return result;
}
function get(object$1, path, defaultValue) {
	if (object$1 == null) return defaultValue;
	switch (typeof path) {
		case "string": {
			if (isUnsafeProperty(path)) return defaultValue;
			const result = object$1[path];
			if (result === void 0) if (isDeepKey(path)) return get(object$1, /* @__PURE__ */ toPath(path), defaultValue);
			else return defaultValue;
			return result;
		}
		case "number":
		case "symbol": {
			if (typeof path === "number") path = /* @__PURE__ */ toKey(path);
			const result = object$1[path];
			if (result === void 0) return defaultValue;
			return result;
		}
		default: {
			if (Array.isArray(path)) return getWithPath(object$1, path, defaultValue);
			if (Object.is(path?.valueOf(), -0)) path = "-0";
			else path = /* @__PURE__ */ String(path);
			if (isUnsafeProperty(path)) return defaultValue;
			const result = object$1[path];
			if (result === void 0) return defaultValue;
			return result;
		}
	}
}
function getWithPath(object$1, path, defaultValue) {
	if (path.length === 0) return defaultValue;
	let current$1 = object$1;
	for (let index = 0; index < path.length; index++) {
		if (current$1 == null) return defaultValue;
		if (isUnsafeProperty(path[index])) return defaultValue;
		current$1 = current$1[path[index]];
	}
	if (current$1 === void 0) return defaultValue;
	return current$1;
}
function property(path) {
	return function(object$1) {
		return get(object$1, path);
	};
}
function isObject(value) {
	return value !== null && (typeof value === "object" || typeof value === "function");
}
function isPrimitive(value) {
	return value == null || typeof value !== "object" && typeof value !== "function";
}
function eq(value, other) {
	return value === other || Number.isNaN(value) && Number.isNaN(other);
}
function isMatchWith(target, source, compare) {
	if (typeof compare !== "function") return isMatch(target, source);
	return isMatchWithInternal(target, source, function doesMatch(objValue, srcValue, key, object$1, source$1, stack) {
		const isEqual = /* @__PURE__ */ compare(objValue, srcValue, key, object$1, source$1, stack);
		if (isEqual !== void 0) return Boolean(isEqual);
		return isMatchWithInternal(objValue, srcValue, doesMatch, stack);
	}, /* @__PURE__ */ new Map());
}
function isMatchWithInternal(target, source, compare, stack) {
	if (source === target) return true;
	switch (typeof source) {
		case "object": return isObjectMatch(target, source, compare, stack);
		case "function":
			if (Object.keys(source).length > 0) return isMatchWithInternal(target, { ...source }, compare, stack);
			return eq(target, source);
		default:
			if (!isObject(target)) return eq(target, source);
			if (typeof source === "string") return source === "";
			return true;
	}
}
function isObjectMatch(target, source, compare, stack) {
	if (source == null) return true;
	if (Array.isArray(source)) return isArrayMatch(target, source, compare, stack);
	if (source instanceof Map) return isMapMatch(target, source, compare, stack);
	if (source instanceof Set) return isSetMatch(target, source, compare, stack);
	const keys$1 = /* @__PURE__ */ Object.keys(source);
	if (target == null) return keys$1.length === 0;
	if (keys$1.length === 0) return true;
	if (stack && stack.has(source)) return stack.get(source) === target;
	if (stack) stack.set(source, target);
	try {
		for (let i = 0; i < keys$1.length; i++) {
			const key = keys$1[i];
			if (!isPrimitive(target) && !(key in target)) return false;
			if (source[key] === void 0 && target[key] !== void 0) return false;
			if (source[key] === null && target[key] !== null) return false;
			if (!compare(target[key], source[key], key, target, source, stack)) return false;
		}
		return true;
	} finally {
		if (stack) stack.delete(source);
	}
}
function isMapMatch(target, source, compare, stack) {
	if (source.size === 0) return true;
	if (!(target instanceof Map)) return false;
	for (const [key, sourceValue] of source.entries()) if (compare(/* @__PURE__ */ target.get(key), sourceValue, key, target, source, stack) === false) return false;
	return true;
}
function isArrayMatch(target, source, compare, stack) {
	if (source.length === 0) return true;
	if (!Array.isArray(target)) return false;
	const countedIndex = /* @__PURE__ */ new Set();
	for (let i = 0; i < source.length; i++) {
		const sourceItem = source[i];
		let found = false;
		for (let j = 0; j < target.length; j++) {
			if (countedIndex.has(j)) continue;
			const targetItem = target[j];
			let matches$1 = false;
			if (compare(targetItem, sourceItem, i, target, source, stack)) matches$1 = true;
			if (matches$1) {
				countedIndex.add(j);
				found = true;
				break;
			}
		}
		if (!found) return false;
	}
	return true;
}
function isSetMatch(target, source, compare, stack) {
	if (source.size === 0) return true;
	if (!(target instanceof Set)) return false;
	return isArrayMatch([...target], [...source], compare, stack);
}
function isMatch(target, source) {
	return isMatchWith(target, source, () => void 0);
}
function getSymbols(object$1) {
	return Object.getOwnPropertySymbols(object$1).filter((symbol) => Object.prototype.propertyIsEnumerable.call(object$1, symbol));
}
function getTag(value) {
	if (value == null) return value === void 0 ? "[object Undefined]" : "[object Null]";
	return Object.prototype.toString.call(value);
}
var regexpTag = "[object RegExp]";
var stringTag = "[object String]";
var numberTag = "[object Number]";
var booleanTag = "[object Boolean]";
var argumentsTag = "[object Arguments]";
var symbolTag = "[object Symbol]";
var dateTag = "[object Date]";
var mapTag = "[object Map]";
var setTag = "[object Set]";
var arrayTag = "[object Array]";
var arrayBufferTag = "[object ArrayBuffer]";
var objectTag = "[object Object]";
var dataViewTag = "[object DataView]";
var uint8ArrayTag = "[object Uint8Array]";
var uint8ClampedArrayTag = "[object Uint8ClampedArray]";
var uint16ArrayTag = "[object Uint16Array]";
var uint32ArrayTag = "[object Uint32Array]";
var int8ArrayTag = "[object Int8Array]";
var int16ArrayTag = "[object Int16Array]";
var int32ArrayTag = "[object Int32Array]";
var float32ArrayTag = "[object Float32Array]";
var float64ArrayTag = "[object Float64Array]";
function isTypedArray$1(x) {
	return ArrayBuffer.isView(x) && !(x instanceof DataView);
}
function cloneDeepWith$1(obj, cloneValue) {
	return cloneDeepWithImpl(obj, void 0, obj, /* @__PURE__ */ new Map(), cloneValue);
}
function cloneDeepWithImpl(valueToClone, keyToClone, objectToClone, stack = /* @__PURE__ */ new Map(), cloneValue = void 0) {
	const cloned = cloneValue?.(valueToClone, keyToClone, objectToClone, stack);
	if (cloned !== void 0) return cloned;
	if (isPrimitive(valueToClone)) return valueToClone;
	if (stack.has(valueToClone)) return stack.get(valueToClone);
	if (Array.isArray(valueToClone)) {
		const result = new Array(valueToClone.length);
		stack.set(valueToClone, result);
		for (let i = 0; i < valueToClone.length; i++) result[i] = /* @__PURE__ */ cloneDeepWithImpl(valueToClone[i], i, objectToClone, stack, cloneValue);
		if (Object.hasOwn(valueToClone, "index")) result.index = valueToClone.index;
		if (Object.hasOwn(valueToClone, "input")) result.input = valueToClone.input;
		return result;
	}
	if (valueToClone instanceof Date) return new Date(valueToClone.getTime());
	if (valueToClone instanceof RegExp) {
		const result = new RegExp(valueToClone.source, valueToClone.flags);
		result.lastIndex = valueToClone.lastIndex;
		return result;
	}
	if (valueToClone instanceof Map) {
		const result = /* @__PURE__ */ new Map();
		stack.set(valueToClone, result);
		for (const [key, value] of valueToClone) result.set(key, /* @__PURE__ */ cloneDeepWithImpl(value, key, objectToClone, stack, cloneValue));
		return result;
	}
	if (valueToClone instanceof Set) {
		const result = /* @__PURE__ */ new Set();
		stack.set(valueToClone, result);
		for (const value of valueToClone) result.add(/* @__PURE__ */ cloneDeepWithImpl(value, void 0, objectToClone, stack, cloneValue));
		return result;
	}
	if (typeof Buffer !== "undefined" && Buffer.isBuffer(valueToClone)) return valueToClone.subarray();
	if (isTypedArray$1(valueToClone)) {
		const result = new (Object.getPrototypeOf(valueToClone)).constructor(valueToClone.length);
		stack.set(valueToClone, result);
		for (let i = 0; i < valueToClone.length; i++) result[i] = /* @__PURE__ */ cloneDeepWithImpl(valueToClone[i], i, objectToClone, stack, cloneValue);
		return result;
	}
	if (valueToClone instanceof ArrayBuffer || typeof SharedArrayBuffer !== "undefined" && valueToClone instanceof SharedArrayBuffer) return valueToClone.slice(0);
	if (valueToClone instanceof DataView) {
		const result = new DataView(valueToClone.buffer.slice(0), valueToClone.byteOffset, valueToClone.byteLength);
		stack.set(valueToClone, result);
		copyProperties(result, valueToClone, objectToClone, stack, cloneValue);
		return result;
	}
	if (typeof File !== "undefined" && valueToClone instanceof File) {
		const result = new File([valueToClone], valueToClone.name, { type: valueToClone.type });
		stack.set(valueToClone, result);
		copyProperties(result, valueToClone, objectToClone, stack, cloneValue);
		return result;
	}
	if (typeof Blob !== "undefined" && valueToClone instanceof Blob) {
		const result = new Blob([valueToClone], { type: valueToClone.type });
		stack.set(valueToClone, result);
		copyProperties(result, valueToClone, objectToClone, stack, cloneValue);
		return result;
	}
	if (valueToClone instanceof Error) {
		const result = new valueToClone.constructor();
		stack.set(valueToClone, result);
		result.message = valueToClone.message;
		result.name = valueToClone.name;
		result.stack = valueToClone.stack;
		result.cause = valueToClone.cause;
		copyProperties(result, valueToClone, objectToClone, stack, cloneValue);
		return result;
	}
	if (valueToClone instanceof Boolean) {
		const result = new Boolean(valueToClone.valueOf());
		stack.set(valueToClone, result);
		copyProperties(result, valueToClone, objectToClone, stack, cloneValue);
		return result;
	}
	if (valueToClone instanceof Number) {
		const result = new Number(valueToClone.valueOf());
		stack.set(valueToClone, result);
		copyProperties(result, valueToClone, objectToClone, stack, cloneValue);
		return result;
	}
	if (valueToClone instanceof String) {
		const result = new String(valueToClone.valueOf());
		stack.set(valueToClone, result);
		copyProperties(result, valueToClone, objectToClone, stack, cloneValue);
		return result;
	}
	if (typeof valueToClone === "object" && isCloneableObject(valueToClone)) {
		const result = /* @__PURE__ */ Object.create(/* @__PURE__ */ Object.getPrototypeOf(valueToClone));
		stack.set(valueToClone, result);
		copyProperties(result, valueToClone, objectToClone, stack, cloneValue);
		return result;
	}
	return valueToClone;
}
function copyProperties(target, source, objectToClone = target, stack, cloneValue) {
	const keys$1 = [.../* @__PURE__ */ Object.keys(source), .../* @__PURE__ */ getSymbols(source)];
	for (let i = 0; i < keys$1.length; i++) {
		const key = keys$1[i];
		const descriptor = /* @__PURE__ */ Object.getOwnPropertyDescriptor(target, key);
		if (descriptor == null || descriptor.writable) target[key] = /* @__PURE__ */ cloneDeepWithImpl(source[key], key, objectToClone, stack, cloneValue);
	}
}
function isCloneableObject(object$1) {
	switch (getTag(object$1)) {
		case argumentsTag:
		case arrayTag:
		case arrayBufferTag:
		case dataViewTag:
		case booleanTag:
		case dateTag:
		case float32ArrayTag:
		case float64ArrayTag:
		case int8ArrayTag:
		case int16ArrayTag:
		case int32ArrayTag:
		case mapTag:
		case numberTag:
		case objectTag:
		case regexpTag:
		case setTag:
		case stringTag:
		case symbolTag:
		case uint8ArrayTag:
		case uint8ClampedArrayTag:
		case uint16ArrayTag:
		case uint32ArrayTag: return true;
		default: return false;
	}
}
function cloneDeep$1(obj) {
	return cloneDeepWithImpl(obj, void 0, obj, /* @__PURE__ */ new Map(), void 0);
}
function matches(source) {
	source = /* @__PURE__ */ cloneDeep$1(source);
	return (target) => {
		return isMatch(target, source);
	};
}
function cloneDeepWith(obj, customizer) {
	return cloneDeepWith$1(obj, (value, key, object$1, stack) => {
		const cloned = customizer?.(value, key, object$1, stack);
		if (cloned !== void 0) return cloned;
		if (typeof obj !== "object") return;
		switch (Object.prototype.toString.call(obj)) {
			case numberTag:
			case stringTag:
			case booleanTag: {
				const result = new obj.constructor(obj?.valueOf());
				copyProperties(result, obj);
				return result;
			}
			case argumentsTag: {
				const result = {};
				copyProperties(result, obj);
				result.length = obj.length;
				result[Symbol.iterator] = obj[Symbol.iterator];
				return result;
			}
			default: return;
		}
	});
}
function cloneDeep(obj) {
	return cloneDeepWith(obj);
}
var IS_UNSIGNED_INTEGER = /^(?:0|[1-9]\d*)$/;
function isIndex(value, length = Number.MAX_SAFE_INTEGER) {
	switch (typeof value) {
		case "number": return Number.isInteger(value) && value >= 0 && value < length;
		case "symbol": return false;
		case "string": return IS_UNSIGNED_INTEGER.test(value);
	}
}
function isArguments(value) {
	return value !== null && typeof value === "object" && getTag(value) === "[object Arguments]";
}
function has$1(object$1, path) {
	let resolvedPath;
	if (Array.isArray(path)) resolvedPath = path;
	else if (typeof path === "string" && isDeepKey(path) && object$1?.[path] == null) resolvedPath = /* @__PURE__ */ toPath(path);
	else resolvedPath = [path];
	if (resolvedPath.length === 0) return false;
	let current$1 = object$1;
	for (let i = 0; i < resolvedPath.length; i++) {
		const key = resolvedPath[i];
		if (current$1 == null || !Object.hasOwn(current$1, key)) {
			if (!((Array.isArray(current$1) || isArguments(current$1)) && isIndex(key) && key < current$1.length)) return false;
		}
		current$1 = current$1[key];
	}
	return true;
}
function matchesProperty(property$1, source) {
	switch (typeof property$1) {
		case "object":
			if (Object.is(property$1?.valueOf(), -0)) property$1 = "-0";
			break;
		case "number":
			property$1 = /* @__PURE__ */ toKey(property$1);
			break;
	}
	source = /* @__PURE__ */ cloneDeep(source);
	return function(target) {
		const result = /* @__PURE__ */ get(target, property$1);
		if (result === void 0) return has$1(target, property$1);
		if (source === void 0) return result === void 0;
		return isMatch(result, source);
	};
}
function iteratee(value) {
	if (value == null) return identity$2;
	switch (typeof value) {
		case "function": return value;
		case "object":
			if (Array.isArray(value) && value.length === 2) return matchesProperty(value[0], value[1]);
			return matches(value);
		case "string":
		case "symbol":
		case "number": return property(value);
	}
}
function isObjectLike(value) {
	return typeof value === "object" && value !== null;
}
function last$1(arr) {
	return arr[arr.length - 1];
}
function last$2(array$1) {
	if (!isArrayLike$1(array$1)) return;
	return last$1(/* @__PURE__ */ toArray(array$1));
}
function isSymbol$1(value) {
	return typeof value === "symbol" || value instanceof Symbol;
}
function toNumber$1(value) {
	if (isSymbol$1(value)) return NaN;
	return Number(value);
}
function toFinite(value) {
	if (!value) return value === 0 ? value : 0;
	value = /* @__PURE__ */ toNumber$1(value);
	if (value === Infinity || value === -Infinity) return (value < 0 ? -1 : 1) * Number.MAX_VALUE;
	return value === value ? value : 0;
}
function toInteger(value) {
	const finite = /* @__PURE__ */ toFinite(value);
	const remainder = finite % 1;
	return remainder ? finite - remainder : finite;
}
function range(start, end, step = 1) {
	if (end == null) {
		end = start;
		start = 0;
	}
	if (!Number.isInteger(step) || step === 0) throw new Error(`The step value must be a non-zero integer.`);
	const length = /* @__PURE__ */ Math.max(/* @__PURE__ */ Math.ceil((end - start) / step), 0);
	const result = new Array(length);
	for (let i = 0; i < length; i++) result[i] = start + i * step;
	return result;
}
function isString(value) {
	return typeof value === "string" || value instanceof String;
}
function flatten(value, depth = 1) {
	const result = [];
	const flooredDepth = /* @__PURE__ */ Math.floor(depth);
	if (!isArrayLike$1(value)) return result;
	const recursive = (arr, currentDepth) => {
		for (let i = 0; i < arr.length; i++) {
			const item = arr[i];
			if (currentDepth < flooredDepth && (Array.isArray(item) || Boolean(item?.[Symbol.isConcatSpreadable]) || item !== null && typeof item === "object" && Object.prototype.toString.call(item) === "[object Arguments]")) if (Array.isArray(item)) recursive(item, currentDepth + 1);
			else recursive(/* @__PURE__ */ Array.from(item), currentDepth + 1);
			else result.push(item);
		}
	};
	recursive(/* @__PURE__ */ Array.from(value), 0);
	return result;
}
function map$1(collection, _iteratee) {
	if (!collection) return [];
	const keys$1 = isArrayLike$1(collection) || Array.isArray(collection) ? range(0, collection.length) : Object.keys(collection);
	const iteratee$1 = /* @__PURE__ */ iteratee(_iteratee ?? identity$2);
	const result = new Array(keys$1.length);
	for (let i = 0; i < keys$1.length; i++) {
		const key = keys$1[i];
		const value = collection[key];
		result[i] = /* @__PURE__ */ iteratee$1(value, key, collection);
	}
	return result;
}
function groupBy(arr, getKeyFromItem) {
	const result = {};
	for (let i = 0; i < arr.length; i++) {
		const item = arr[i];
		const key = /* @__PURE__ */ getKeyFromItem(item);
		if (!Object.hasOwn(result, key)) result[key] = [];
		result[key].push(item);
	}
	return result;
}
function groupBy$1(source, _getKeyFromItem) {
	if (source == null) return {};
	return groupBy(isArrayLike$1(source) ? Array.from(source) : Object.values(source), /* @__PURE__ */ iteratee(_getKeyFromItem ?? identity$2));
}
var regexIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
var regexIsPlainProp = /^\w*$/;
function isKey(value, object$1) {
	if (Array.isArray(value)) return false;
	if (typeof value === "number" || typeof value === "boolean" || value == null || isSymbol$1(value)) return true;
	return typeof value === "string" && (regexIsPlainProp.test(value) || !regexIsDeepProp.test(value)) || object$1 != null && Object.hasOwn(object$1, value);
}
function partition(source, predicate = identity$2) {
	if (!source) return [[], []];
	const collection = isArrayLike$1(source) ? source : Object.values(source);
	predicate = /* @__PURE__ */ iteratee(predicate);
	const matched = [];
	const unmatched = [];
	for (let i = 0; i < collection.length; i++) {
		const value = collection[i];
		if (predicate(value)) matched.push(value);
		else unmatched.push(value);
	}
	return [matched, unmatched];
}
function unset(obj, path) {
	if (obj == null) return true;
	switch (typeof path) {
		case "symbol":
		case "number":
		case "object":
			if (Array.isArray(path)) return unsetWithPath(obj, path);
			if (typeof path === "number") path = /* @__PURE__ */ toKey(path);
			else if (typeof path === "object") if (Object.is(path?.valueOf(), -0)) path = "-0";
			else path = /* @__PURE__ */ String(path);
			if (isUnsafeProperty(path)) return false;
			if (obj?.[path] === void 0) return true;
			try {
				delete obj[path];
				return true;
			} catch {
				return false;
			}
		case "string":
			if (obj?.[path] === void 0 && isDeepKey(path)) return unsetWithPath(obj, /* @__PURE__ */ toPath(path));
			if (isUnsafeProperty(path)) return false;
			try {
				delete obj[path];
				return true;
			} catch {
				return false;
			}
	}
}
function unsetWithPath(obj, path) {
	const parent = path.length === 1 ? obj : get(obj, /* @__PURE__ */ path.slice(0, -1));
	const lastKey = path[path.length - 1];
	if (parent?.[lastKey] === void 0) return true;
	if (isUnsafeProperty(lastKey)) return false;
	try {
		delete parent[lastKey];
		return true;
	} catch {
		return false;
	}
}
function isArray(value) {
	return Array.isArray(value);
}
function some(source, predicate, guard) {
	if (!source) return false;
	if (guard != null) predicate = void 0;
	if (predicate == null) predicate = identity$2;
	const values = Array.isArray(source) ? source : Object.values(source);
	switch (typeof predicate) {
		case "function":
			if (!Array.isArray(source)) {
				const keys$1 = /* @__PURE__ */ Object.keys(source);
				for (let i = 0; i < keys$1.length; i++) {
					const key = keys$1[i];
					const value = source[key];
					if (predicate(value, key, source)) return true;
				}
				return false;
			}
			for (let i = 0; i < source.length; i++) if (predicate(source[i], i, source)) return true;
			return false;
		case "object": if (Array.isArray(predicate) && predicate.length === 2) {
			const key = predicate[0];
			const value = predicate[1];
			const matchFunc = /* @__PURE__ */ matchesProperty(key, value);
			if (Array.isArray(source)) {
				for (let i = 0; i < source.length; i++) if (matchFunc(source[i])) return true;
				return false;
			}
			return values.some(matchFunc);
		} else {
			const matchFunc = /* @__PURE__ */ matches(predicate);
			if (Array.isArray(source)) {
				for (let i = 0; i < source.length; i++) if (matchFunc(source[i])) return true;
				return false;
			}
			return values.some(matchFunc);
		}
		case "number":
		case "symbol":
		case "string": {
			const propFunc = /* @__PURE__ */ property(predicate);
			if (Array.isArray(source)) {
				for (let i = 0; i < source.length; i++) if (propFunc(source[i])) return true;
				return false;
			}
			return values.some(propFunc);
		}
	}
}
function isUndefined$2(x) {
	return x === void 0;
}
function identity$1(x) {
	return x;
}
function isNumber(value) {
	return typeof value === "number" || value instanceof Number;
}
var assignValue = (object$1, key, value) => {
	const objValue = object$1[key];
	if (!(Object.hasOwn(object$1, key) && eq(objValue, value)) || value === void 0 && !(key in object$1)) object$1[key] = value;
};
function updateWith(obj, path, updater, customizer) {
	if (obj == null && !isObject(obj)) return obj;
	const resolvedPath = isKey(path, obj) ? [path] : Array.isArray(path) ? path : typeof path === "string" ? toPath(path) : [path];
	let current$1 = obj;
	for (let i = 0; i < resolvedPath.length && current$1 != null; i++) {
		const key = /* @__PURE__ */ toKey(resolvedPath[i]);
		if (isUnsafeProperty(key)) continue;
		let newValue;
		if (i === resolvedPath.length - 1) newValue = /* @__PURE__ */ updater(current$1[key]);
		else {
			const objValue = current$1[key];
			const customizerResult = customizer?.(objValue, key, obj);
			newValue = customizerResult !== void 0 ? customizerResult : isObject(objValue) ? objValue : isIndex(resolvedPath[i + 1]) ? [] : {};
		}
		assignValue(current$1, key, newValue);
		current$1 = current$1[key];
	}
	return obj;
}
function set$1(obj, path, value) {
	return updateWith(obj, path, () => value, () => void 0);
}
function isBuffer(x) {
	return typeof Buffer !== "undefined" && Buffer.isBuffer(x);
}
function isPrototype(value) {
	const constructor = value?.constructor;
	return value === (typeof constructor === "function" ? constructor.prototype : Object.prototype);
}
function isTypedArray(x) {
	return isTypedArray$1(x);
}
function times(n1, getValue) {
	n1 = /* @__PURE__ */ toInteger(n1);
	if (n1 < 1 || !Number.isSafeInteger(n1)) return [];
	const result = new Array(n1);
	for (let i = 0; i < n1; i++) result[i] = typeof getValue === "function" ? getValue(i) : i;
	return result;
}
function keys(object$1) {
	if (isArrayLike$1(object$1)) return arrayLikeKeys(object$1);
	const result = /* @__PURE__ */ Object.keys(/* @__PURE__ */ Object(object$1));
	if (!isPrototype(object$1)) return result;
	return result.filter((key) => key !== "constructor");
}
function arrayLikeKeys(object$1) {
	const indices = /* @__PURE__ */ times(object$1.length, (index) => `${index}`);
	const filteredKeys = new Set(indices);
	if (isBuffer(object$1)) {
		filteredKeys.add("offset");
		filteredKeys.add("parent");
	}
	if (isTypedArray(object$1)) {
		filteredKeys.add("buffer");
		filteredKeys.add("byteLength");
		filteredKeys.add("byteOffset");
	}
	return [...indices, .../* @__PURE__ */ Object.keys(object$1).filter((key) => !filteredKeys.has(key))];
}
function keysIn(object$1) {
	if (object$1 == null) return [];
	switch (typeof object$1) {
		case "object":
		case "function":
			if (isArrayLike$1(object$1)) return arrayLikeKeysIn(object$1);
			if (isPrototype(object$1)) return prototypeKeysIn(object$1);
			return keysInImpl(object$1);
		default: return keysInImpl(/* @__PURE__ */ Object(object$1));
	}
}
function keysInImpl(object$1) {
	const result = [];
	for (const key in object$1) result.push(key);
	return result;
}
function prototypeKeysIn(object$1) {
	return keysInImpl(object$1).filter((key) => key !== "constructor");
}
function arrayLikeKeysIn(object$1) {
	const indices = /* @__PURE__ */ times(object$1.length, (index) => `${index}`);
	const filteredKeys = new Set(indices);
	if (isBuffer(object$1)) {
		filteredKeys.add("offset");
		filteredKeys.add("parent");
	}
	if (isTypedArray(object$1)) {
		filteredKeys.add("buffer");
		filteredKeys.add("byteLength");
		filteredKeys.add("byteOffset");
	}
	return [...indices, .../* @__PURE__ */ keysInImpl(object$1).filter((key) => !filteredKeys.has(key))];
}
function isPlainObject(object$1) {
	if (typeof object$1 !== "object") return false;
	if (object$1 == null) return false;
	if (Object.getPrototypeOf(object$1) === null) return true;
	if (Object.prototype.toString.call(object$1) !== "[object Object]") {
		const tag = object$1[Symbol.toStringTag];
		if (tag == null) return false;
		if (!Object.getOwnPropertyDescriptor(object$1, Symbol.toStringTag)?.writable) return false;
		return object$1.toString() === `[object ${tag}]`;
	}
	let proto = object$1;
	while (Object.getPrototypeOf(proto) !== null) proto = /* @__PURE__ */ Object.getPrototypeOf(proto);
	return Object.getPrototypeOf(object$1) === proto;
}
function mapValues(object$1, getNewValue) {
	const result = {};
	const keys$1 = /* @__PURE__ */ Object.keys(object$1);
	for (let i = 0; i < keys$1.length; i++) {
		const key = keys$1[i];
		const value = object$1[key];
		result[key] = /* @__PURE__ */ getNewValue(value, key, object$1);
	}
	return result;
}
function mapValues$1(object$1, getNewValue = identity$2) {
	if (object$1 == null) return {};
	return mapValues(object$1, /* @__PURE__ */ iteratee(getNewValue));
}
function getSymbolsIn(object$1) {
	const result = [];
	while (object$1) {
		result.push(.../* @__PURE__ */ getSymbols(object$1));
		object$1 = /* @__PURE__ */ Object.getPrototypeOf(object$1);
	}
	return result;
}
function omit(obj, ...keysArr) {
	if (obj == null) return {};
	keysArr = /* @__PURE__ */ flatten(keysArr);
	const result = /* @__PURE__ */ cloneInOmit(obj, keysArr);
	for (let i = 0; i < keysArr.length; i++) {
		let keys$1 = keysArr[i];
		switch (typeof keys$1) {
			case "object":
				if (!Array.isArray(keys$1)) keys$1 = /* @__PURE__ */ Array.from(keys$1);
				for (let j = 0; j < keys$1.length; j++) {
					const key = keys$1[j];
					unset(result, key);
				}
				break;
			case "string":
			case "symbol":
			case "number":
				unset(result, keys$1);
				break;
		}
	}
	return result;
}
function cloneInOmit(obj, keys$1) {
	if (keys$1.some((key) => Array.isArray(key) || isDeepKey(key))) return deepCloneInOmit(obj);
	return shallowCloneInOmit(obj);
}
function shallowCloneInOmit(obj) {
	const result = {};
	const keysToCopy = [.../* @__PURE__ */ keysIn(obj), .../* @__PURE__ */ getSymbolsIn(obj)];
	for (let i = 0; i < keysToCopy.length; i++) {
		const key = keysToCopy[i];
		result[key] = obj[key];
	}
	return result;
}
function deepCloneInOmit(obj) {
	const result = {};
	const keysToCopy = [.../* @__PURE__ */ keysIn(obj), .../* @__PURE__ */ getSymbolsIn(obj)];
	for (let i = 0; i < keysToCopy.length; i++) {
		const key = keysToCopy[i];
		result[key] = /* @__PURE__ */ cloneDeepWith(obj[key], (valueToClone) => {
			if (isPlainObject(valueToClone)) return;
			return valueToClone;
		});
	}
	return result;
}
function pickBy(obj, shouldPick) {
	if (obj == null) return {};
	const predicate = /* @__PURE__ */ iteratee(shouldPick ?? identity$1);
	const result = {};
	const keys$1 = isArrayLike$1(obj) ? range(0, obj.length) : [.../* @__PURE__ */ keysIn(obj), .../* @__PURE__ */ getSymbolsIn(obj)];
	for (let i = 0; i < keys$1.length; i++) {
		const key = isSymbol$1(keys$1[i]) ? keys$1[i] : keys$1[i].toString();
		const value = obj[key];
		if (predicate(value, key, obj)) result[key] = value;
	}
	return result;
}
function isFunction(value) {
	return typeof value === "function";
}
function isNull(value) {
	return value === null;
}
function isUndefined(x) {
	return isUndefined$2(x);
}
function isBoolean(value) {
	return typeof value === "boolean" || value instanceof Boolean;
}
function isEmpty(value) {
	if (value == null) return true;
	if (isArrayLike$1(value)) {
		if (typeof value.splice !== "function" && typeof value !== "string" && (typeof Buffer === "undefined" || !Buffer.isBuffer(value)) && !isTypedArray(value) && !isArguments(value)) return false;
		return value.length === 0;
	}
	if (typeof value === "object") {
		if (value instanceof Map || value instanceof Set) return value.size === 0;
		const keys$1 = /* @__PURE__ */ Object.keys(value);
		if (isPrototype(value)) return keys$1.filter((x) => x !== "constructor").length === 0;
		return keys$1.length === 0;
	}
	return true;
}
function isInteger(value) {
	return Number.isInteger(value);
}
function capitalize$1(str) {
	return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
var CASE_SPLIT_PATTERN = /\p{Lu}?\p{Ll}+|[0-9]+|\p{Lu}+(?!\p{Ll})|\p{Emoji_Presentation}|\p{Extended_Pictographic}|\p{L}+/gu;
function words(str) {
	return Array.from(str.match(CASE_SPLIT_PATTERN) ?? []);
}
function camelCase(str) {
	const words$1 = /* @__PURE__ */ words(str);
	if (words$1.length === 0) return "";
	const [first, ...rest] = words$1;
	return `${first.toLowerCase()}${rest.map((word) => capitalize$1(word)).join("")}`;
}
function normalizeForCase(str) {
	if (typeof str !== "string") str = /* @__PURE__ */ toString(str);
	return str.replace(/['\u2019]/g, "");
}
function camelCase$1(str) {
	return camelCase(/* @__PURE__ */ normalizeForCase(str));
}
function kebabCase$1(str) {
	return words(str).map((word) => word.toLowerCase()).join("-");
}
function kebabCase(str) {
	return kebabCase$1(/* @__PURE__ */ normalizeForCase(str));
}
function padStart(str, length = 0, chars = " ") {
	return toString(str).padStart(length, chars);
}
function upperFirst(str) {
	return str.substring(0, 1).toUpperCase() + str.substring(1);
}
function upperFirst$1(str) {
	return upperFirst(/* @__PURE__ */ toString(str));
}
/**
* @vue/shared v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/ /* @__NO_SIDE_EFFECTS__ */
function makeMap(str) {
	const map$2 = /* @__PURE__ */ Object.create(null);
	for (const key of str.split(",")) map$2[key] = 1;
	return (val) => val in map$2;
}
var EMPTY_OBJ = {};
var EMPTY_ARR = [];
var NOOP = () => {};
var NO = () => false;
var isOn = (key) => key.charCodeAt(0) === 111 && key.charCodeAt(1) === 110 && (key.charCodeAt(2) > 122 || key.charCodeAt(2) < 97);
var isModelListener = (key) => key.startsWith("onUpdate:");
var extend = Object.assign;
var remove = (arr, el) => {
	const i = /* @__PURE__ */ arr.indexOf(el);
	if (i > -1) arr.splice(i, 1);
};
var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
var hasOwn = (val, key) => hasOwnProperty$1.call(val, key);
var isArray$4 = Array.isArray;
var isMap$1 = (val) => toTypeString(val) === "[object Map]";
var isSet$1 = (val) => toTypeString(val) === "[object Set]";
var isFunction$3 = (val) => typeof val === "function";
var isString$1 = (val) => typeof val === "string";
var isSymbol = (val) => typeof val === "symbol";
var isObject$1 = (val) => val !== null && typeof val === "object";
var isPromise$1 = (val) => {
	return (isObject$1(val) || isFunction$3(val)) && isFunction$3(val.then) && isFunction$3(val.catch);
};
var objectToString = Object.prototype.toString;
var toTypeString = (value) => objectToString.call(value);
var toRawType = (value) => {
	return toTypeString(value).slice(8, -1);
};
var isPlainObject$2 = (val) => toTypeString(val) === "[object Object]";
var isIntegerKey = (key) => isString$1(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
var isReservedProp = /* @__PURE__ */ makeMap(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted");
var cacheStringFunction = (fn) => {
	const cache = /* @__PURE__ */ Object.create(null);
	return (str) => {
		return cache[str] || (cache[str] = /* @__PURE__ */ fn(str));
	};
};
var camelizeRE = /-\w/g;
var camelize = /* @__PURE__ */ cacheStringFunction((str) => {
	return str.replace(camelizeRE, (c) => c.slice(1).toUpperCase());
});
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = /* @__PURE__ */ cacheStringFunction((str) => str.replace(hyphenateRE, "-$1").toLowerCase());
var capitalize = /* @__PURE__ */ cacheStringFunction((str) => {
	return str.charAt(0).toUpperCase() + str.slice(1);
});
var toHandlerKey = /* @__PURE__ */ cacheStringFunction((str) => {
	return str ? `on${capitalize(str)}` : ``;
});
var hasChanged = (value, oldValue) => !Object.is(value, oldValue);
var invokeArrayFns = (fns, ...arg) => {
	for (let i = 0; i < fns.length; i++) fns[i](...arg);
};
var def = (obj, key, value, writable = false) => {
	Object.defineProperty(obj, key, {
		configurable: true,
		enumerable: false,
		writable,
		value
	});
};
var looseToNumber = (val) => {
	const n1 = /* @__PURE__ */ parseFloat(val);
	return isNaN(n1) ? val : n1;
};
var toNumber = (val) => {
	const n1 = isString$1(val) ? Number(val) : NaN;
	return isNaN(n1) ? val : n1;
};
var _globalThis;
var getGlobalThis = () => {
	return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
};
function normalizeStyle(value) {
	if (isArray$4(value)) {
		const res = {};
		for (let i = 0; i < value.length; i++) {
			const item = value[i];
			const normalized = isString$1(item) ? parseStringStyle(item) : normalizeStyle(item);
			if (normalized) for (const key in normalized) res[key] = normalized[key];
		}
		return res;
	} else if (isString$1(value) || isObject$1(value)) return value;
}
var listDelimiterRE = /;(?![^(]*\))/g;
var propertyDelimiterRE = /:([^]+)/;
var styleCommentRE = /\/\*[^]*?\*\//g;
function parseStringStyle(cssText) {
	const ret = {};
	cssText.replace(styleCommentRE, "").split(listDelimiterRE).forEach((item) => {
		if (item) {
			const tmp = /* @__PURE__ */ item.split(propertyDelimiterRE);
			tmp.length > 1 && (ret[tmp[0].trim()] = /* @__PURE__ */ tmp[1].trim());
		}
	});
	return ret;
}
function normalizeClass(value) {
	let res = "";
	if (isString$1(value)) res = value;
	else if (isArray$4(value)) for (let i = 0; i < value.length; i++) {
		const normalized = /* @__PURE__ */ normalizeClass(value[i]);
		if (normalized) res += normalized + " ";
	}
	else if (isObject$1(value)) {
		for (const name in value) if (value[name]) res += name + " ";
	}
	return res.trim();
}
var specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
var isSpecialBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs);
specialBooleanAttrs + "";
function includeBooleanAttr(value) {
	return !!value || value === "";
}
var activeEffectScope;
var EffectScope = class {
	constructor(detached = false) {
		this.detached = detached;
		this._active = true;
		this._on = 0;
		this.effects = [];
		this.cleanups = [];
		this._isPaused = false;
		this.parent = activeEffectScope;
		if (!detached && activeEffectScope) this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(this) - 1;
	}
	get active() {
		return this._active;
	}
	pause() {
		if (this._active) {
			this._isPaused = true;
			let i, l;
			if (this.scopes) for (i = 0, l = this.scopes.length; i < l; i++) this.scopes[i].pause();
			for (i = 0, l = this.effects.length; i < l; i++) this.effects[i].pause();
		}
	}
	resume() {
		if (this._active) {
			if (this._isPaused) {
				this._isPaused = false;
				let i, l;
				if (this.scopes) for (i = 0, l = this.scopes.length; i < l; i++) this.scopes[i].resume();
				for (i = 0, l = this.effects.length; i < l; i++) this.effects[i].resume();
			}
		}
	}
	run(fn) {
		if (this._active) {
			const currentEffectScope = activeEffectScope;
			try {
				activeEffectScope = this;
				return fn();
			} finally {
				activeEffectScope = currentEffectScope;
			}
		}
	}
	on() {
		if (++this._on === 1) {
			this.prevScope = activeEffectScope;
			activeEffectScope = this;
		}
	}
	off() {
		if (this._on > 0 && --this._on === 0) {
			activeEffectScope = this.prevScope;
			this.prevScope = void 0;
		}
	}
	stop(fromParent) {
		if (this._active) {
			this._active = false;
			let i, l;
			for (i = 0, l = this.effects.length; i < l; i++) this.effects[i].stop();
			this.effects.length = 0;
			for (i = 0, l = this.cleanups.length; i < l; i++) this.cleanups[i]();
			this.cleanups.length = 0;
			if (this.scopes) {
				for (i = 0, l = this.scopes.length; i < l; i++) this.scopes[i].stop(true);
				this.scopes.length = 0;
			}
			if (!this.detached && this.parent && !fromParent) {
				const last$3 = /* @__PURE__ */ this.parent.scopes.pop();
				if (last$3 && last$3 !== this) {
					this.parent.scopes[this.index] = last$3;
					last$3.index = this.index;
				}
			}
			this.parent = void 0;
		}
	}
};
function getCurrentScope$1() {
	return activeEffectScope;
}
var activeSub;
var pausedQueueEffects = /* @__PURE__ */ new WeakSet();
var ReactiveEffect = class {
	constructor(fn) {
		this.fn = fn;
		this.deps = void 0;
		this.depsTail = void 0;
		this.flags = 5;
		this.next = void 0;
		this.cleanup = void 0;
		this.scheduler = void 0;
		if (activeEffectScope && activeEffectScope.active) activeEffectScope.effects.push(this);
	}
	pause() {
		this.flags |= 64;
	}
	resume() {
		if (this.flags & 64) {
			this.flags &= -65;
			if (pausedQueueEffects.has(this)) {
				pausedQueueEffects.delete(this);
				this.trigger();
			}
		}
	}
	notify() {
		if (this.flags & 2 && !(this.flags & 32)) return;
		if (!(this.flags & 8)) batch(this);
	}
	run() {
		if (!(this.flags & 1)) return this.fn();
		this.flags |= 2;
		cleanupEffect(this);
		prepareDeps(this);
		const prevEffect = activeSub;
		const prevShouldTrack = shouldTrack;
		activeSub = this;
		shouldTrack = true;
		try {
			return this.fn();
		} finally {
			cleanupDeps(this);
			activeSub = prevEffect;
			shouldTrack = prevShouldTrack;
			this.flags &= -3;
		}
	}
	stop() {
		if (this.flags & 1) {
			for (let link = this.deps; link; link = link.nextDep) removeSub(link);
			this.deps = this.depsTail = void 0;
			cleanupEffect(this);
			this.onStop && this.onStop();
			this.flags &= -2;
		}
	}
	trigger() {
		if (this.flags & 64) pausedQueueEffects.add(this);
		else if (this.scheduler) this.scheduler();
		else this.runIfDirty();
	}
	runIfDirty() {
		if (isDirty(this)) this.run();
	}
	get dirty() {
		return isDirty(this);
	}
};
var batchDepth = 0;
var batchedSub;
var batchedComputed;
function batch(sub, isComputed = false) {
	sub.flags |= 8;
	if (isComputed) {
		sub.next = batchedComputed;
		batchedComputed = sub;
		return;
	}
	sub.next = batchedSub;
	batchedSub = sub;
}
function startBatch() {
	batchDepth++;
}
function endBatch() {
	if (--batchDepth > 0) return;
	if (batchedComputed) {
		let e = batchedComputed;
		batchedComputed = void 0;
		while (e) {
			const next = e.next;
			e.next = void 0;
			e.flags &= -9;
			e = next;
		}
	}
	let error;
	while (batchedSub) {
		let e = batchedSub;
		batchedSub = void 0;
		while (e) {
			const next = e.next;
			e.next = void 0;
			e.flags &= -9;
			if (e.flags & 1) try {
				e.trigger();
			} catch (err) {
				if (!error) error = err;
			}
			e = next;
		}
	}
	if (error) throw error;
}
function prepareDeps(sub) {
	for (let link = sub.deps; link; link = link.nextDep) {
		link.version = -1;
		link.prevActiveLink = link.dep.activeLink;
		link.dep.activeLink = link;
	}
}
function cleanupDeps(sub) {
	let head;
	let tail = sub.depsTail;
	let link = tail;
	while (link) {
		const prev = link.prevDep;
		if (link.version === -1) {
			if (link === tail) tail = prev;
			removeSub(link);
			removeDep(link);
		} else head = link;
		link.dep.activeLink = link.prevActiveLink;
		link.prevActiveLink = void 0;
		link = prev;
	}
	sub.deps = head;
	sub.depsTail = tail;
}
function isDirty(sub) {
	for (let link = sub.deps; link; link = link.nextDep) if (link.dep.version !== link.version || link.dep.computed && (refreshComputed(link.dep.computed) || link.dep.version !== link.version)) return true;
	if (sub._dirty) return true;
	return false;
}
function refreshComputed(computed$2) {
	if (computed$2.flags & 4 && !(computed$2.flags & 16)) return;
	computed$2.flags &= -17;
	if (computed$2.globalVersion === globalVersion) return;
	computed$2.globalVersion = globalVersion;
	if (!computed$2.isSSR && computed$2.flags & 128 && (!computed$2.deps && !computed$2._dirty || !isDirty(computed$2))) return;
	computed$2.flags |= 2;
	const dep = computed$2.dep;
	const prevSub = activeSub;
	const prevShouldTrack = shouldTrack;
	activeSub = computed$2;
	shouldTrack = true;
	try {
		prepareDeps(computed$2);
		const value = /* @__PURE__ */ computed$2.fn(computed$2._value);
		if (dep.version === 0 || hasChanged(value, computed$2._value)) {
			computed$2.flags |= 128;
			computed$2._value = value;
			dep.version++;
		}
	} catch (err) {
		dep.version++;
		throw err;
	} finally {
		activeSub = prevSub;
		shouldTrack = prevShouldTrack;
		cleanupDeps(computed$2);
		computed$2.flags &= -3;
	}
}
function removeSub(link, soft = false) {
	const { dep, prevSub, nextSub } = link;
	if (prevSub) {
		prevSub.nextSub = nextSub;
		link.prevSub = void 0;
	}
	if (nextSub) {
		nextSub.prevSub = prevSub;
		link.nextSub = void 0;
	}
	if (dep.subs === link) {
		dep.subs = prevSub;
		if (!prevSub && dep.computed) {
			dep.computed.flags &= -5;
			for (let l = dep.computed.deps; l; l = l.nextDep) removeSub(l, true);
		}
	}
	if (!soft && !--dep.sc && dep.map) dep.map.delete(dep.key);
}
function removeDep(link) {
	const { prevDep, nextDep } = link;
	if (prevDep) {
		prevDep.nextDep = nextDep;
		link.prevDep = void 0;
	}
	if (nextDep) {
		nextDep.prevDep = prevDep;
		link.nextDep = void 0;
	}
}
var shouldTrack = true;
var trackStack = [];
function pauseTracking() {
	trackStack.push(shouldTrack);
	shouldTrack = false;
}
function resetTracking() {
	const last$3 = /* @__PURE__ */ trackStack.pop();
	shouldTrack = last$3 === void 0 ? true : last$3;
}
function cleanupEffect(e) {
	const { cleanup } = e;
	e.cleanup = void 0;
	if (cleanup) {
		const prevSub = activeSub;
		activeSub = void 0;
		try {
			cleanup();
		} finally {
			activeSub = prevSub;
		}
	}
}
var globalVersion = 0;
var Link = class {
	constructor(sub, dep) {
		this.sub = sub;
		this.dep = dep;
		this.version = dep.version;
		this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
	}
};
var Dep = class {
	constructor(computed$2) {
		this.computed = computed$2;
		this.version = 0;
		this.activeLink = void 0;
		this.subs = void 0;
		this.map = void 0;
		this.key = void 0;
		this.sc = 0;
		this.__v_skip = true;
	}
	track(debugInfo) {
		if (!activeSub || !shouldTrack || activeSub === this.computed) return;
		let link = this.activeLink;
		if (link === void 0 || link.sub !== activeSub) {
			link = this.activeLink = new Link(activeSub, this);
			if (!activeSub.deps) activeSub.deps = activeSub.depsTail = link;
			else {
				link.prevDep = activeSub.depsTail;
				activeSub.depsTail.nextDep = link;
				activeSub.depsTail = link;
			}
			addSub(link);
		} else if (link.version === -1) {
			link.version = this.version;
			if (link.nextDep) {
				const next = link.nextDep;
				next.prevDep = link.prevDep;
				if (link.prevDep) link.prevDep.nextDep = next;
				link.prevDep = activeSub.depsTail;
				link.nextDep = void 0;
				activeSub.depsTail.nextDep = link;
				activeSub.depsTail = link;
				if (activeSub.deps === link) activeSub.deps = next;
			}
		}
		return link;
	}
	trigger(debugInfo) {
		this.version++;
		globalVersion++;
		this.notify(debugInfo);
	}
	notify(debugInfo) {
		startBatch();
		try {
			for (let link = this.subs; link; link = link.prevSub) if (link.sub.notify()) link.sub.dep.notify();
		} finally {
			endBatch();
		}
	}
};
function addSub(link) {
	link.dep.sc++;
	if (link.sub.flags & 4) {
		const computed$2 = link.dep.computed;
		if (computed$2 && !link.dep.subs) {
			computed$2.flags |= 20;
			for (let l = computed$2.deps; l; l = l.nextDep) addSub(l);
		}
		const currentTail = link.dep.subs;
		if (currentTail !== link) {
			link.prevSub = currentTail;
			if (currentTail) currentTail.nextSub = link;
		}
		link.dep.subs = link;
	}
}
var targetMap = /* @__PURE__ */ new WeakMap();
var ITERATE_KEY = /* @__PURE__ */ Symbol("");
var MAP_KEY_ITERATE_KEY = /* @__PURE__ */ Symbol("");
var ARRAY_ITERATE_KEY = /* @__PURE__ */ Symbol("");
function track(target, type, key) {
	if (shouldTrack && activeSub) {
		let depsMap = /* @__PURE__ */ targetMap.get(target);
		if (!depsMap) targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
		let dep = /* @__PURE__ */ depsMap.get(key);
		if (!dep) {
			depsMap.set(key, dep = new Dep());
			dep.map = depsMap;
			dep.key = key;
		}
		dep.track();
	}
}
function trigger(target, type, key, newValue, oldValue, oldTarget) {
	const depsMap = /* @__PURE__ */ targetMap.get(target);
	if (!depsMap) {
		globalVersion++;
		return;
	}
	const run$1 = (dep) => {
		if (dep) dep.trigger();
	};
	startBatch();
	if (type === "clear") depsMap.forEach(run$1);
	else {
		const targetIsArray = /* @__PURE__ */ isArray$4(target);
		const isArrayIndex = targetIsArray && isIntegerKey(key);
		if (targetIsArray && key === "length") {
			const newLength = /* @__PURE__ */ Number(newValue);
			depsMap.forEach((dep, key2) => {
				if (key2 === "length" || key2 === ARRAY_ITERATE_KEY || !isSymbol(key2) && key2 >= newLength) run$1(dep);
			});
		} else {
			if (key !== void 0 || depsMap.has(void 0)) run$1(/* @__PURE__ */ depsMap.get(key));
			if (isArrayIndex) run$1(/* @__PURE__ */ depsMap.get(ARRAY_ITERATE_KEY));
			switch (type) {
				case "add":
					if (!targetIsArray) {
						run$1(/* @__PURE__ */ depsMap.get(ITERATE_KEY));
						if (isMap$1(target)) run$1(/* @__PURE__ */ depsMap.get(MAP_KEY_ITERATE_KEY));
					} else if (isArrayIndex) run$1(/* @__PURE__ */ depsMap.get("length"));
					break;
				case "delete":
					if (!targetIsArray) {
						run$1(/* @__PURE__ */ depsMap.get(ITERATE_KEY));
						if (isMap$1(target)) run$1(/* @__PURE__ */ depsMap.get(MAP_KEY_ITERATE_KEY));
					}
					break;
				case "set":
					if (isMap$1(target)) run$1(/* @__PURE__ */ depsMap.get(ITERATE_KEY));
					break;
			}
		}
	}
	endBatch();
}
function reactiveReadArray(array$1) {
	const raw = /* @__PURE__ */ toRaw(array$1);
	if (raw === array$1) return raw;
	track(raw, "iterate", ARRAY_ITERATE_KEY);
	return isShallow(array$1) ? raw : raw.map(toReactive);
}
function shallowReadArray(arr) {
	track(arr = /* @__PURE__ */ toRaw(arr), "iterate", ARRAY_ITERATE_KEY);
	return arr;
}
var arrayInstrumentations = {
	__proto__: null,
	[Symbol.iterator]() {
		return iterator$1(this, Symbol.iterator, toReactive);
	},
	concat(...args) {
		return reactiveReadArray(this).concat(.../* @__PURE__ */ args.map((x) => isArray$4(x) ? reactiveReadArray(x) : x));
	},
	entries() {
		return iterator$1(this, "entries", (value) => {
			value[1] = /* @__PURE__ */ toReactive(value[1]);
			return value;
		});
	},
	every(fn, thisArg) {
		return apply(this, "every", fn, thisArg, void 0, arguments);
	},
	filter(fn, thisArg) {
		return apply(this, "filter", fn, thisArg, (v1) => v1.map(toReactive), arguments);
	},
	find(fn, thisArg) {
		return apply(this, "find", fn, thisArg, toReactive, arguments);
	},
	findIndex(fn, thisArg) {
		return apply(this, "findIndex", fn, thisArg, void 0, arguments);
	},
	findLast(fn, thisArg) {
		return apply(this, "findLast", fn, thisArg, toReactive, arguments);
	},
	findLastIndex(fn, thisArg) {
		return apply(this, "findLastIndex", fn, thisArg, void 0, arguments);
	},
	forEach(fn, thisArg) {
		return apply(this, "forEach", fn, thisArg, void 0, arguments);
	},
	includes(...args) {
		return searchProxy(this, "includes", args);
	},
	indexOf(...args) {
		return searchProxy(this, "indexOf", args);
	},
	join(separator) {
		return reactiveReadArray(this).join(separator);
	},
	lastIndexOf(...args) {
		return searchProxy(this, "lastIndexOf", args);
	},
	map(fn, thisArg) {
		return apply(this, "map", fn, thisArg, void 0, arguments);
	},
	pop() {
		return noTracking(this, "pop");
	},
	push(...args) {
		return noTracking(this, "push", args);
	},
	reduce(fn, ...args) {
		return reduce(this, "reduce", fn, args);
	},
	reduceRight(fn, ...args) {
		return reduce(this, "reduceRight", fn, args);
	},
	shift() {
		return noTracking(this, "shift");
	},
	some(fn, thisArg) {
		return apply(this, "some", fn, thisArg, void 0, arguments);
	},
	splice(...args) {
		return noTracking(this, "splice", args);
	},
	toReversed() {
		return reactiveReadArray(this).toReversed();
	},
	toSorted(comparer) {
		return reactiveReadArray(this).toSorted(comparer);
	},
	toSpliced(...args) {
		return reactiveReadArray(this).toSpliced(...args);
	},
	unshift(...args) {
		return noTracking(this, "unshift", args);
	},
	values() {
		return iterator$1(this, "values", toReactive);
	}
};
function iterator$1(self$1, method, wrapValue) {
	const arr = /* @__PURE__ */ shallowReadArray(self$1);
	const iter = /* @__PURE__ */ arr[method]();
	if (arr !== self$1 && !isShallow(self$1)) {
		iter._next = iter.next;
		iter.next = () => {
			const result = /* @__PURE__ */ iter._next();
			if (!result.done) result.value = /* @__PURE__ */ wrapValue(result.value);
			return result;
		};
	}
	return iter;
}
var arrayProto = Array.prototype;
function apply(self$1, method, fn, thisArg, wrappedRetFn, args) {
	const arr = /* @__PURE__ */ shallowReadArray(self$1);
	const needsWrap = arr !== self$1 && !isShallow(self$1);
	const methodFn = arr[method];
	if (methodFn !== arrayProto[method]) {
		const result2 = /* @__PURE__ */ methodFn.apply(self$1, args);
		return needsWrap ? toReactive(result2) : result2;
	}
	let wrappedFn = fn;
	if (arr !== self$1) {
		if (needsWrap) wrappedFn = function(item, index) {
			return fn.call(this, /* @__PURE__ */ toReactive(item), index, self$1);
		};
		else if (fn.length > 2) wrappedFn = function(item, index) {
			return fn.call(this, item, index, self$1);
		};
	}
	const result = /* @__PURE__ */ methodFn.call(arr, wrappedFn, thisArg);
	return needsWrap && wrappedRetFn ? wrappedRetFn(result) : result;
}
function reduce(self$1, method, fn, args) {
	const arr = /* @__PURE__ */ shallowReadArray(self$1);
	let wrappedFn = fn;
	if (arr !== self$1) {
		if (!isShallow(self$1)) wrappedFn = function(acc, item, index) {
			return fn.call(this, acc, /* @__PURE__ */ toReactive(item), index, self$1);
		};
		else if (fn.length > 3) wrappedFn = function(acc, item, index) {
			return fn.call(this, acc, item, index, self$1);
		};
	}
	return arr[method](wrappedFn, ...args);
}
function searchProxy(self$1, method, args) {
	const arr = /* @__PURE__ */ toRaw(self$1);
	track(arr, "iterate", ARRAY_ITERATE_KEY);
	const res = /* @__PURE__ */ arr[method](...args);
	if ((res === -1 || res === false) && isProxy(args[0])) {
		args[0] = /* @__PURE__ */ toRaw(args[0]);
		return arr[method](...args);
	}
	return res;
}
function noTracking(self$1, method, args = []) {
	pauseTracking();
	startBatch();
	const res = /* @__PURE__ */ toRaw(self$1)[method].apply(self$1, args);
	endBatch();
	resetTracking();
	return res;
}
var isNonTrackableKeys = /* @__PURE__ */ makeMap(`__proto__,__v_isRef,__isVue`);
var builtInSymbols = new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((key) => key !== "arguments" && key !== "caller").map((key) => Symbol[key]).filter(isSymbol));
function hasOwnProperty(key) {
	if (!isSymbol(key)) key = /* @__PURE__ */ String(key);
	const obj = /* @__PURE__ */ toRaw(this);
	track(obj, "has", key);
	return obj.hasOwnProperty(key);
}
var BaseReactiveHandler = class {
	constructor(_isReadonly = false, _isShallow = false) {
		this._isReadonly = _isReadonly;
		this._isShallow = _isShallow;
	}
	get(target, key, receiver) {
		if (key === "__v_skip") return target["__v_skip"];
		const isReadonly2 = this._isReadonly, isShallow2 = this._isShallow;
		if (key === "__v_isReactive") return !isReadonly2;
		else if (key === "__v_isReadonly") return isReadonly2;
		else if (key === "__v_isShallow") return isShallow2;
		else if (key === "__v_raw") {
			if (receiver === (isReadonly2 ? isShallow2 ? shallowReadonlyMap : readonlyMap : isShallow2 ? shallowReactiveMap : reactiveMap).get(target) || Object.getPrototypeOf(target) === Object.getPrototypeOf(receiver)) return target;
			return;
		}
		const targetIsArray = /* @__PURE__ */ isArray$4(target);
		if (!isReadonly2) {
			let fn;
			if (targetIsArray && (fn = arrayInstrumentations[key])) return fn;
			if (key === "hasOwnProperty") return hasOwnProperty;
		}
		const res = /* @__PURE__ */ Reflect.get(target, key, isRef(target) ? target : receiver);
		if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) return res;
		if (!isReadonly2) track(target, "get", key);
		if (isShallow2) return res;
		if (isRef(res)) {
			const value = targetIsArray && isIntegerKey(key) ? res : res.value;
			return isReadonly2 && isObject$1(value) ? readonly(value) : value;
		}
		if (isObject$1(res)) return isReadonly2 ? readonly(res) : reactive(res);
		return res;
	}
};
var MutableReactiveHandler = class extends BaseReactiveHandler {
	constructor(isShallow2 = false) {
		super(false, isShallow2);
	}
	set(target, key, value, receiver) {
		let oldValue = target[key];
		if (!this._isShallow) {
			const isOldValueReadonly = /* @__PURE__ */ isReadonly(oldValue);
			if (!isShallow(value) && !isReadonly(value)) {
				oldValue = /* @__PURE__ */ toRaw(oldValue);
				value = /* @__PURE__ */ toRaw(value);
			}
			if (!isArray$4(target) && isRef(oldValue) && !isRef(value)) if (isOldValueReadonly) return true;
			else {
				oldValue.value = value;
				return true;
			}
		}
		const hadKey = isArray$4(target) && isIntegerKey(key) ? Number(key) < target.length : hasOwn(target, key);
		const result = /* @__PURE__ */ Reflect.set(target, key, value, isRef(target) ? target : receiver);
		if (target === toRaw(receiver)) {
			if (!hadKey) trigger(target, "add", key, value);
			else if (hasChanged(value, oldValue)) trigger(target, "set", key, value, oldValue);
		}
		return result;
	}
	deleteProperty(target, key) {
		const hadKey = /* @__PURE__ */ hasOwn(target, key);
		const oldValue = target[key];
		const result = /* @__PURE__ */ Reflect.deleteProperty(target, key);
		if (result && hadKey) trigger(target, "delete", key, void 0, oldValue);
		return result;
	}
	has(target, key) {
		const result = /* @__PURE__ */ Reflect.has(target, key);
		if (!isSymbol(key) || !builtInSymbols.has(key)) track(target, "has", key);
		return result;
	}
	ownKeys(target) {
		track(target, "iterate", isArray$4(target) ? "length" : ITERATE_KEY);
		return Reflect.ownKeys(target);
	}
};
var ReadonlyReactiveHandler = class extends BaseReactiveHandler {
	constructor(isShallow2 = false) {
		super(true, isShallow2);
	}
	set(target, key) {
		return true;
	}
	deleteProperty(target, key) {
		return true;
	}
};
var mutableHandlers = /* @__PURE__ */ new MutableReactiveHandler();
var readonlyHandlers = /* @__PURE__ */ new ReadonlyReactiveHandler();
var shallowReactiveHandlers = /* @__PURE__ */ new MutableReactiveHandler(true);
var toShallow = (value) => value;
var getProto = (v1) => Reflect.getPrototypeOf(v1);
function createIterableMethod(method, isReadonly2, isShallow2) {
	return function(...args) {
		const target = this["__v_raw"];
		const rawTarget = /* @__PURE__ */ toRaw(target);
		const targetIsMap = /* @__PURE__ */ isMap$1(rawTarget);
		const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
		const isKeyOnly = method === "keys" && targetIsMap;
		const innerIterator = /* @__PURE__ */ target[method](...args);
		const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
		!isReadonly2 && track(rawTarget, "iterate", isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
		return {
			next() {
				const { value, done } = innerIterator.next();
				return done ? {
					value,
					done
				} : {
					value: isPair ? [/* @__PURE__ */ wrap(value[0]), /* @__PURE__ */ wrap(value[1])] : wrap(value),
					done
				};
			},
			[Symbol.iterator]() {
				return this;
			}
		};
	};
}
function createReadonlyMethod(type) {
	return function(...args) {
		return type === "delete" ? false : type === "clear" ? void 0 : this;
	};
}
function createInstrumentations(readonly$1, shallow) {
	const instrumentations = {
		get(key) {
			const target = this["__v_raw"];
			const rawTarget = /* @__PURE__ */ toRaw(target);
			const rawKey = /* @__PURE__ */ toRaw(key);
			if (!readonly$1) {
				if (hasChanged(key, rawKey)) track(rawTarget, "get", key);
				track(rawTarget, "get", rawKey);
			}
			const { has: has$2 } = getProto(rawTarget);
			const wrap = shallow ? toShallow : readonly$1 ? toReadonly : toReactive;
			if (has$2.call(rawTarget, key)) return wrap(/* @__PURE__ */ target.get(key));
			else if (has$2.call(rawTarget, rawKey)) return wrap(/* @__PURE__ */ target.get(rawKey));
			else if (target !== rawTarget) target.get(key);
		},
		get size() {
			const target = this["__v_raw"];
			!readonly$1 && track(/* @__PURE__ */ toRaw(target), "iterate", ITERATE_KEY);
			return target.size;
		},
		has(key) {
			const target = this["__v_raw"];
			const rawTarget = /* @__PURE__ */ toRaw(target);
			const rawKey = /* @__PURE__ */ toRaw(key);
			if (!readonly$1) {
				if (hasChanged(key, rawKey)) track(rawTarget, "has", key);
				track(rawTarget, "has", rawKey);
			}
			return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
		},
		forEach(callback, thisArg) {
			const observed = this;
			const target = observed["__v_raw"];
			const rawTarget = /* @__PURE__ */ toRaw(target);
			const wrap = shallow ? toShallow : readonly$1 ? toReadonly : toReactive;
			!readonly$1 && track(rawTarget, "iterate", ITERATE_KEY);
			return target.forEach((value, key) => {
				return callback.call(thisArg, /* @__PURE__ */ wrap(value), /* @__PURE__ */ wrap(key), observed);
			});
		}
	};
	extend(instrumentations, readonly$1 ? {
		add: /* @__PURE__ */ createReadonlyMethod("add"),
		set: /* @__PURE__ */ createReadonlyMethod("set"),
		delete: /* @__PURE__ */ createReadonlyMethod("delete"),
		clear: /* @__PURE__ */ createReadonlyMethod("clear")
	} : {
		add(value) {
			if (!shallow && !isShallow(value) && !isReadonly(value)) value = /* @__PURE__ */ toRaw(value);
			const target = /* @__PURE__ */ toRaw(this);
			if (!getProto(target).has.call(target, value)) {
				target.add(value);
				trigger(target, "add", value, value);
			}
			return this;
		},
		set(key, value) {
			if (!shallow && !isShallow(value) && !isReadonly(value)) value = /* @__PURE__ */ toRaw(value);
			const target = /* @__PURE__ */ toRaw(this);
			const { has: has$2, get: get$1 } = getProto(target);
			let hadKey = /* @__PURE__ */ has$2.call(target, key);
			if (!hadKey) {
				key = /* @__PURE__ */ toRaw(key);
				hadKey = /* @__PURE__ */ has$2.call(target, key);
			}
			const oldValue = /* @__PURE__ */ get$1.call(target, key);
			target.set(key, value);
			if (!hadKey) trigger(target, "add", key, value);
			else if (hasChanged(value, oldValue)) trigger(target, "set", key, value, oldValue);
			return this;
		},
		delete(key) {
			const target = /* @__PURE__ */ toRaw(this);
			const { has: has$2, get: get$1 } = getProto(target);
			let hadKey = /* @__PURE__ */ has$2.call(target, key);
			if (!hadKey) {
				key = /* @__PURE__ */ toRaw(key);
				hadKey = /* @__PURE__ */ has$2.call(target, key);
			}
			const oldValue = get$1 ? get$1.call(target, key) : void 0;
			const result = /* @__PURE__ */ target.delete(key);
			if (hadKey) trigger(target, "delete", key, void 0, oldValue);
			return result;
		},
		clear() {
			const target = /* @__PURE__ */ toRaw(this);
			const hadItems = target.size !== 0;
			const oldTarget = void 0;
			const result = /* @__PURE__ */ target.clear();
			if (hadItems) trigger(target, "clear", void 0, void 0, oldTarget);
			return result;
		}
	});
	[
		"keys",
		"values",
		"entries",
		Symbol.iterator
	].forEach((method) => {
		instrumentations[method] = /* @__PURE__ */ createIterableMethod(method, readonly$1, shallow);
	});
	return instrumentations;
}
function createInstrumentationGetter(isReadonly2, shallow) {
	const instrumentations = /* @__PURE__ */ createInstrumentations(isReadonly2, shallow);
	return (target, key, receiver) => {
		if (key === "__v_isReactive") return !isReadonly2;
		else if (key === "__v_isReadonly") return isReadonly2;
		else if (key === "__v_raw") return target;
		return Reflect.get(hasOwn(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
	};
}
var mutableCollectionHandlers = { get: /* @__PURE__ */ createInstrumentationGetter(false, false) };
var shallowCollectionHandlers = { get: /* @__PURE__ */ createInstrumentationGetter(false, true) };
var readonlyCollectionHandlers = { get: /* @__PURE__ */ createInstrumentationGetter(true, false) };
var reactiveMap = /* @__PURE__ */ new WeakMap();
var shallowReactiveMap = /* @__PURE__ */ new WeakMap();
var readonlyMap = /* @__PURE__ */ new WeakMap();
var shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
function targetTypeMap(rawType) {
	switch (rawType) {
		case "Object":
		case "Array": return 1;
		case "Map":
		case "Set":
		case "WeakMap":
		case "WeakSet": return 2;
		default: return 0;
	}
}
function getTargetType(value) {
	return value["__v_skip"] || !Object.isExtensible(value) ? 0 : targetTypeMap(/* @__PURE__ */ toRawType(value));
}
function reactive(target) {
	if (isReadonly(target)) return target;
	return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
}
function shallowReactive(target) {
	return createReactiveObject(target, false, shallowReactiveHandlers, shallowCollectionHandlers, shallowReactiveMap);
}
function readonly(target) {
	return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
}
function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
	if (!isObject$1(target)) return target;
	if (target["__v_raw"] && !(isReadonly2 && target["__v_isReactive"])) return target;
	const targetType = /* @__PURE__ */ getTargetType(target);
	if (targetType === 0) return target;
	const existingProxy = /* @__PURE__ */ proxyMap.get(target);
	if (existingProxy) return existingProxy;
	const proxy = new Proxy(target, targetType === 2 ? collectionHandlers : baseHandlers);
	proxyMap.set(target, proxy);
	return proxy;
}
function isReactive(value) {
	if (isReadonly(value)) return isReactive(value["__v_raw"]);
	return !!(value && value["__v_isReactive"]);
}
function isReadonly(value) {
	return !!(value && value["__v_isReadonly"]);
}
function isShallow(value) {
	return !!(value && value["__v_isShallow"]);
}
function isProxy(value) {
	return value ? !!value["__v_raw"] : false;
}
function toRaw(observed) {
	const raw = observed && observed["__v_raw"];
	return raw ? toRaw(raw) : observed;
}
function markRaw(value) {
	if (!hasOwn(value, "__v_skip") && Object.isExtensible(value)) def(value, "__v_skip", true);
	return value;
}
var toReactive = (value) => isObject$1(value) ? reactive(value) : value;
var toReadonly = (value) => isObject$1(value) ? readonly(value) : value;
function isRef(r) {
	return r ? r["__v_isRef"] === true : false;
}
function ref(value) {
	return createRef(value, false);
}
function shallowRef(value) {
	return createRef(value, true);
}
function createRef(rawValue, shallow) {
	if (isRef(rawValue)) return rawValue;
	return new RefImpl(rawValue, shallow);
}
var RefImpl = class {
	constructor(value, isShallow2) {
		this.dep = new Dep();
		this["__v_isRef"] = true;
		this["__v_isShallow"] = false;
		this._rawValue = isShallow2 ? value : toRaw(value);
		this._value = isShallow2 ? value : toReactive(value);
		this["__v_isShallow"] = isShallow2;
	}
	get value() {
		this.dep.track();
		return this._value;
	}
	set value(newValue) {
		const oldValue = this._rawValue;
		const useDirectValue = this["__v_isShallow"] || isShallow(newValue) || isReadonly(newValue);
		newValue = useDirectValue ? newValue : toRaw(newValue);
		if (hasChanged(newValue, oldValue)) {
			this._rawValue = newValue;
			this._value = useDirectValue ? newValue : toReactive(newValue);
			this.dep.trigger();
		}
	}
};
function unref(ref2) {
	return isRef(ref2) ? ref2.value : ref2;
}
var shallowUnwrapHandlers = {
	get: (target, key, receiver) => key === "__v_raw" ? target : unref(/* @__PURE__ */ Reflect.get(target, key, receiver)),
	set: (target, key, value, receiver) => {
		const oldValue = target[key];
		if (isRef(oldValue) && !isRef(value)) {
			oldValue.value = value;
			return true;
		} else return Reflect.set(target, key, value, receiver);
	}
};
function proxyRefs(objectWithRefs) {
	return isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
}
var CustomRefImpl = class {
	constructor(factory) {
		this["__v_isRef"] = true;
		this._value = void 0;
		const dep = this.dep = new Dep();
		const { get: get$1, set: set$2 } = factory(/* @__PURE__ */ dep.track.bind(dep), /* @__PURE__ */ dep.trigger.bind(dep));
		this._get = get$1;
		this._set = set$2;
	}
	get value() {
		return this._value = /* @__PURE__ */ this._get();
	}
	set value(newVal) {
		this._set(newVal);
	}
};
function customRef(factory) {
	return new CustomRefImpl(factory);
}
var ComputedRefImpl = class {
	constructor(fn, setter, isSSR) {
		this.fn = fn;
		this.setter = setter;
		this._value = void 0;
		this.dep = new Dep(this);
		this.__v_isRef = true;
		this.deps = void 0;
		this.depsTail = void 0;
		this.flags = 16;
		this.globalVersion = globalVersion - 1;
		this.next = void 0;
		this.effect = this;
		this["__v_isReadonly"] = !setter;
		this.isSSR = isSSR;
	}
	notify() {
		this.flags |= 16;
		if (!(this.flags & 8) && activeSub !== this) {
			batch(this, true);
			return true;
		}
	}
	get value() {
		const link = /* @__PURE__ */ this.dep.track();
		refreshComputed(this);
		if (link) link.version = this.dep.version;
		return this._value;
	}
	set value(newValue) {
		if (this.setter) this.setter(newValue);
	}
};
function computed$1(getterOrOptions, debugOptions, isSSR = false) {
	let getter;
	let setter;
	if (isFunction$3(getterOrOptions)) getter = getterOrOptions;
	else {
		getter = getterOrOptions.get;
		setter = getterOrOptions.set;
	}
	return new ComputedRefImpl(getter, setter, isSSR);
}
var INITIAL_WATCHER_VALUE = {};
var cleanupMap = /* @__PURE__ */ new WeakMap();
var activeWatcher = void 0;
function onWatcherCleanup(cleanupFn, failSilently = false, owner = activeWatcher) {
	if (owner) {
		let cleanups = /* @__PURE__ */ cleanupMap.get(owner);
		if (!cleanups) cleanupMap.set(owner, cleanups = []);
		cleanups.push(cleanupFn);
	}
}
function watch$1(source, cb, options = EMPTY_OBJ) {
	const { immediate, deep, once, scheduler, augmentJob, call } = options;
	const reactiveGetter = (source2) => {
		if (deep) return source2;
		if (isShallow(source2) || deep === false || deep === 0) return traverse(source2, 1);
		return traverse(source2);
	};
	let effect$1;
	let getter;
	let cleanup;
	let boundCleanup;
	let forceTrigger = false;
	let isMultiSource = false;
	if (isRef(source)) {
		getter = () => source.value;
		forceTrigger = /* @__PURE__ */ isShallow(source);
	} else if (isReactive(source)) {
		getter = () => reactiveGetter(source);
		forceTrigger = true;
	} else if (isArray$4(source)) {
		isMultiSource = true;
		forceTrigger = /* @__PURE__ */ source.some((s) => isReactive(s) || isShallow(s));
		getter = () => source.map((s) => {
			if (isRef(s)) return s.value;
			else if (isReactive(s)) return reactiveGetter(s);
			else if (isFunction$3(s)) return call ? call(s, 2) : s();
		});
	} else if (isFunction$3(source)) if (cb) getter = call ? () => call(source, 2) : source;
	else getter = () => {
		if (cleanup) {
			pauseTracking();
			try {
				cleanup();
			} finally {
				resetTracking();
			}
		}
		const currentEffect = activeWatcher;
		activeWatcher = effect$1;
		try {
			return call ? call(source, 3, [boundCleanup]) : source(boundCleanup);
		} finally {
			activeWatcher = currentEffect;
		}
	};
	else getter = NOOP;
	if (cb && deep) {
		const baseGetter = getter;
		const depth = deep === true ? Infinity : deep;
		getter = () => traverse(/* @__PURE__ */ baseGetter(), depth);
	}
	const scope = /* @__PURE__ */ getCurrentScope$1();
	const watchHandle = () => {
		effect$1.stop();
		if (scope && scope.active) remove(scope.effects, effect$1);
	};
	if (once && cb) {
		const _cb = cb;
		cb = (...args) => {
			_cb(...args);
			watchHandle();
		};
	}
	let oldValue = isMultiSource ? new Array(source.length).fill(INITIAL_WATCHER_VALUE) : INITIAL_WATCHER_VALUE;
	const job = (immediateFirstRun) => {
		if (!(effect$1.flags & 1) || !effect$1.dirty && !immediateFirstRun) return;
		if (cb) {
			const newValue = /* @__PURE__ */ effect$1.run();
			if (deep || forceTrigger || (isMultiSource ? newValue.some((v1, i) => hasChanged(v1, oldValue[i])) : hasChanged(newValue, oldValue))) {
				if (cleanup) cleanup();
				const currentWatcher = activeWatcher;
				activeWatcher = effect$1;
				try {
					const args = [
						newValue,
						oldValue === INITIAL_WATCHER_VALUE ? void 0 : isMultiSource && oldValue[0] === INITIAL_WATCHER_VALUE ? [] : oldValue,
						boundCleanup
					];
					oldValue = newValue;
					call ? call(cb, 3, args) : cb(...args);
				} finally {
					activeWatcher = currentWatcher;
				}
			}
		} else effect$1.run();
	};
	if (augmentJob) augmentJob(job);
	effect$1 = new ReactiveEffect(getter);
	effect$1.scheduler = scheduler ? () => scheduler(job, false) : job;
	boundCleanup = (fn) => onWatcherCleanup(fn, false, effect$1);
	cleanup = effect$1.onStop = () => {
		const cleanups = /* @__PURE__ */ cleanupMap.get(effect$1);
		if (cleanups) {
			if (call) call(cleanups, 4);
			else for (const cleanup2 of cleanups) cleanup2();
			cleanupMap.delete(effect$1);
		}
	};
	if (cb) if (immediate) job(true);
	else oldValue = /* @__PURE__ */ effect$1.run();
	else if (scheduler) scheduler(/* @__PURE__ */ job.bind(null, true), true);
	else effect$1.run();
	watchHandle.pause = /* @__PURE__ */ effect$1.pause.bind(effect$1);
	watchHandle.resume = /* @__PURE__ */ effect$1.resume.bind(effect$1);
	watchHandle.stop = watchHandle;
	return watchHandle;
}
function traverse(value, depth = Infinity, seen) {
	if (depth <= 0 || !isObject$1(value) || value["__v_skip"]) return value;
	seen = seen || /* @__PURE__ */ new Map();
	if ((seen.get(value) || 0) >= depth) return value;
	seen.set(value, depth);
	depth--;
	if (isRef(value)) traverse(value.value, depth, seen);
	else if (isArray$4(value)) for (let i = 0; i < value.length; i++) traverse(value[i], depth, seen);
	else if (isSet$1(value) || isMap$1(value)) value.forEach((v1) => {
		traverse(v1, depth, seen);
	});
	else if (isPlainObject$2(value)) {
		for (const key in value) traverse(value[key], depth, seen);
		for (const key of Object.getOwnPropertySymbols(value)) if (Object.prototype.propertyIsEnumerable.call(value, key)) traverse(value[key], depth, seen);
	}
	return value;
}
function callWithErrorHandling(fn, instance, type, args) {
	try {
		return args ? fn(...args) : fn();
	} catch (err) {
		handleError(err, instance, type);
	}
}
function callWithAsyncErrorHandling(fn, instance, type, args) {
	if (isFunction$3(fn)) {
		const res = /* @__PURE__ */ callWithErrorHandling(fn, instance, type, args);
		if (res && isPromise$1(res)) res.catch((err) => {
			handleError(err, instance, type);
		});
		return res;
	}
	if (isArray$4(fn)) {
		const values = [];
		for (let i = 0; i < fn.length; i++) values.push(/* @__PURE__ */ callWithAsyncErrorHandling(fn[i], instance, type, args));
		return values;
	}
}
function handleError(err, instance, type, throwInDev = true) {
	const contextVNode = instance ? instance.vnode : null;
	const { errorHandler, throwUnhandledErrorInProduction } = instance && instance.appContext.config || EMPTY_OBJ;
	if (instance) {
		let cur = instance.parent;
		const exposedInstance = instance.proxy;
		const errorInfo = `https://vuejs.org/error-reference/#runtime-${type}`;
		while (cur) {
			const errorCapturedHooks = cur.ec;
			if (errorCapturedHooks) {
				for (let i = 0; i < errorCapturedHooks.length; i++) if (errorCapturedHooks[i](err, exposedInstance, errorInfo) === false) return;
			}
			cur = cur.parent;
		}
		if (errorHandler) {
			pauseTracking();
			callWithErrorHandling(errorHandler, null, 10, [
				err,
				exposedInstance,
				errorInfo
			]);
			resetTracking();
			return;
		}
	}
	logError(err, type, contextVNode, throwInDev, throwUnhandledErrorInProduction);
}
function logError(err, type, contextVNode, throwInDev = true, throwInProd = false) {
	if (throwInProd) throw err;
	else console.error(err);
}
var queue = [];
var flushIndex = -1;
var pendingPostFlushCbs = [];
var activePostFlushCbs = null;
var postFlushIndex = 0;
var resolvedPromise = /* @__PURE__ */ Promise.resolve();
var currentFlushPromise = null;
function nextTick(fn) {
	const p = currentFlushPromise || resolvedPromise;
	return fn ? p.then(this ? fn.bind(this) : fn) : p;
}
function findInsertionIndex$1(id) {
	let start = flushIndex + 1;
	let end = queue.length;
	while (start < end) {
		const middle = start + end >>> 1;
		const middleJob = queue[middle];
		const middleJobId = /* @__PURE__ */ getId(middleJob);
		if (middleJobId < id || middleJobId === id && middleJob.flags & 2) start = middle + 1;
		else end = middle;
	}
	return start;
}
function queueJob(job) {
	if (!(job.flags & 1)) {
		const jobId = /* @__PURE__ */ getId(job);
		const lastJob = queue[queue.length - 1];
		if (!lastJob || !(job.flags & 2) && jobId >= getId(lastJob)) queue.push(job);
		else queue.splice(/* @__PURE__ */ findInsertionIndex$1(jobId), 0, job);
		job.flags |= 1;
		queueFlush();
	}
}
function queueFlush() {
	if (!currentFlushPromise) currentFlushPromise = /* @__PURE__ */ resolvedPromise.then(flushJobs);
}
function queuePostFlushCb(cb) {
	if (!isArray$4(cb)) {
		if (activePostFlushCbs && cb.id === -1) activePostFlushCbs.splice(postFlushIndex + 1, 0, cb);
		else if (!(cb.flags & 1)) {
			pendingPostFlushCbs.push(cb);
			cb.flags |= 1;
		}
	} else pendingPostFlushCbs.push(...cb);
	queueFlush();
}
function flushPreFlushCbs(instance, seen, i = flushIndex + 1) {
	for (; i < queue.length; i++) {
		const cb = queue[i];
		if (cb && cb.flags & 2) {
			if (instance && cb.id !== instance.uid) continue;
			queue.splice(i, 1);
			i--;
			if (cb.flags & 4) cb.flags &= -2;
			cb();
			if (!(cb.flags & 4)) cb.flags &= -2;
		}
	}
}
function flushPostFlushCbs(seen) {
	if (pendingPostFlushCbs.length) {
		const deduped = /* @__PURE__ */ [...new Set(pendingPostFlushCbs)].sort((a, b) => getId(a) - getId(b));
		pendingPostFlushCbs.length = 0;
		if (activePostFlushCbs) {
			activePostFlushCbs.push(...deduped);
			return;
		}
		activePostFlushCbs = deduped;
		for (postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++) {
			const cb = activePostFlushCbs[postFlushIndex];
			if (cb.flags & 4) cb.flags &= -2;
			if (!(cb.flags & 8)) cb();
			cb.flags &= -2;
		}
		activePostFlushCbs = null;
		postFlushIndex = 0;
	}
}
var getId = (job) => job.id == null ? job.flags & 2 ? -1 : Infinity : job.id;
function flushJobs(seen) {
	try {
		for (flushIndex = 0; flushIndex < queue.length; flushIndex++) {
			const job = queue[flushIndex];
			if (job && !(job.flags & 8)) {
				if (job.flags & 4) job.flags &= -2;
				callWithErrorHandling(job, job.i, job.i ? 15 : 14);
				if (!(job.flags & 4)) job.flags &= -2;
			}
		}
	} finally {
		for (; flushIndex < queue.length; flushIndex++) {
			const job = queue[flushIndex];
			if (job) job.flags &= -2;
		}
		flushIndex = -1;
		queue.length = 0;
		flushPostFlushCbs(seen);
		currentFlushPromise = null;
		if (queue.length || pendingPostFlushCbs.length) flushJobs(seen);
	}
}
var currentRenderingInstance = null;
var currentScopeId = null;
function setCurrentRenderingInstance(instance) {
	const prev = currentRenderingInstance;
	currentRenderingInstance = instance;
	currentScopeId = instance && instance.type.__scopeId || null;
	return prev;
}
function withCtx(fn, ctx = currentRenderingInstance, isNonScopedSlot) {
	if (!ctx) return fn;
	if (fn._n) return fn;
	const renderFnWithContext = (...args) => {
		if (renderFnWithContext._d) setBlockTracking(-1);
		const prevInstance = /* @__PURE__ */ setCurrentRenderingInstance(ctx);
		let res;
		try {
			res = /* @__PURE__ */ fn(...args);
		} finally {
			setCurrentRenderingInstance(prevInstance);
			if (renderFnWithContext._d) setBlockTracking(1);
		}
		return res;
	};
	renderFnWithContext._n = true;
	renderFnWithContext._c = true;
	renderFnWithContext._d = true;
	return renderFnWithContext;
}
function invokeDirectiveHook(vnode, prevVNode, instance, name) {
	const bindings = vnode.dirs;
	const oldBindings = prevVNode && prevVNode.dirs;
	for (let i = 0; i < bindings.length; i++) {
		const binding = bindings[i];
		if (oldBindings) binding.oldValue = oldBindings[i].value;
		let hook = binding.dir[name];
		if (hook) {
			pauseTracking();
			callWithAsyncErrorHandling(hook, instance, 8, [
				vnode.el,
				binding,
				vnode,
				prevVNode
			]);
			resetTracking();
		}
	}
}
var TeleportEndKey = /* @__PURE__ */ Symbol("_vte");
var isTeleport = (type) => type.__isTeleport;
var isTeleportDisabled = (props) => props && (props.disabled || props.disabled === "");
var isTeleportDeferred = (props) => props && (props.defer || props.defer === "");
var isTargetSVG = (target) => typeof SVGElement !== "undefined" && target instanceof SVGElement;
var isTargetMathML = (target) => typeof MathMLElement === "function" && target instanceof MathMLElement;
var resolveTarget = (props, select) => {
	const targetSelector = props && props.to;
	if (isString$1(targetSelector)) if (!select) return null;
	else return select(targetSelector);
	else return targetSelector;
};
var TeleportImpl = {
	name: "Teleport",
	__isTeleport: true,
	process(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, internals) {
		const { mc: mountChildren, pc: patchChildren, pbc: patchBlockChildren, o: { insert, querySelector, createText, createComment } } = internals;
		const disabled = /* @__PURE__ */ isTeleportDisabled(n2.props);
		let { shapeFlag, children, dynamicChildren } = n2;
		if (n1 == null) {
			const placeholder = n2.el = /* @__PURE__ */ createText("");
			const mainAnchor = n2.anchor = /* @__PURE__ */ createText("");
			insert(placeholder, container, anchor);
			insert(mainAnchor, container, anchor);
			const mount = (container2, anchor2) => {
				if (shapeFlag & 16) mountChildren(children, container2, anchor2, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
			};
			const mountToTarget = () => {
				const target = n2.target = /* @__PURE__ */ resolveTarget(n2.props, querySelector);
				const targetAnchor = /* @__PURE__ */ prepareAnchor(target, n2, createText, insert);
				if (target) {
					if (namespace !== "svg" && isTargetSVG(target)) namespace = "svg";
					else if (namespace !== "mathml" && isTargetMathML(target)) namespace = "mathml";
					if (parentComponent && parentComponent.isCE) (parentComponent.ce._teleportTargets || (parentComponent.ce._teleportTargets = /* @__PURE__ */ new Set())).add(target);
					if (!disabled) {
						mount(target, targetAnchor);
						updateCssVars(n2, false);
					}
				}
			};
			if (disabled) {
				mount(container, mainAnchor);
				updateCssVars(n2, true);
			}
			if (isTeleportDeferred(n2.props)) {
				n2.el.__isMounted = false;
				queuePostRenderEffect(() => {
					mountToTarget();
					delete n2.el.__isMounted;
				}, parentSuspense);
			} else mountToTarget();
		} else {
			if (isTeleportDeferred(n2.props) && n1.el.__isMounted === false) {
				queuePostRenderEffect(() => {
					TeleportImpl.process(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, internals);
				}, parentSuspense);
				return;
			}
			n2.el = n1.el;
			n2.targetStart = n1.targetStart;
			const mainAnchor = n2.anchor = n1.anchor;
			const target = n2.target = n1.target;
			const targetAnchor = n2.targetAnchor = n1.targetAnchor;
			const wasDisabled = /* @__PURE__ */ isTeleportDisabled(n1.props);
			const currentContainer = wasDisabled ? container : target;
			const currentAnchor = wasDisabled ? mainAnchor : targetAnchor;
			if (namespace === "svg" || isTargetSVG(target)) namespace = "svg";
			else if (namespace === "mathml" || isTargetMathML(target)) namespace = "mathml";
			if (dynamicChildren) {
				patchBlockChildren(n1.dynamicChildren, dynamicChildren, currentContainer, parentComponent, parentSuspense, namespace, slotScopeIds);
				traverseStaticChildren(n1, n2, true);
			} else if (!optimized) patchChildren(n1, n2, currentContainer, currentAnchor, parentComponent, parentSuspense, namespace, slotScopeIds, false);
			if (disabled) {
				if (!wasDisabled) moveTeleport(n2, container, mainAnchor, internals, 1);
				else if (n2.props && n1.props && n2.props.to !== n1.props.to) n2.props.to = n1.props.to;
			} else if ((n2.props && n2.props.to) !== (n1.props && n1.props.to)) {
				const nextTarget = n2.target = /* @__PURE__ */ resolveTarget(n2.props, querySelector);
				if (nextTarget) moveTeleport(n2, nextTarget, null, internals, 0);
			} else if (wasDisabled) moveTeleport(n2, target, targetAnchor, internals, 1);
			updateCssVars(n2, disabled);
		}
	},
	remove(vnode, parentComponent, parentSuspense, { um: unmount, o: { remove: hostRemove } }, doRemove) {
		const { shapeFlag, children, anchor, targetStart, targetAnchor, target, props } = vnode;
		if (target) {
			hostRemove(targetStart);
			hostRemove(targetAnchor);
		}
		doRemove && hostRemove(anchor);
		if (shapeFlag & 16) {
			const shouldRemove = doRemove || !isTeleportDisabled(props);
			for (let i = 0; i < children.length; i++) {
				const child = children[i];
				unmount(child, parentComponent, parentSuspense, shouldRemove, !!child.dynamicChildren);
			}
		}
	},
	move: moveTeleport,
	hydrate: hydrateTeleport
};
function moveTeleport(vnode, container, parentAnchor, { o: { insert }, m: move }, moveType = 2) {
	if (moveType === 0) insert(vnode.targetAnchor, container, parentAnchor);
	const { el, anchor, shapeFlag, children, props } = vnode;
	const isReorder = moveType === 2;
	if (isReorder) insert(el, container, parentAnchor);
	if (!isReorder || isTeleportDisabled(props)) {
		if (shapeFlag & 16) for (let i = 0; i < children.length; i++) move(children[i], container, parentAnchor, 2);
	}
	if (isReorder) insert(anchor, container, parentAnchor);
}
function hydrateTeleport(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized, { o: { nextSibling, parentNode, querySelector, insert, createText } }, hydrateChildren) {
	function hydrateDisabledTeleport(node2, vnode2, targetStart, targetAnchor) {
		vnode2.anchor = /* @__PURE__ */ hydrateChildren(/* @__PURE__ */ nextSibling(node2), vnode2, /* @__PURE__ */ parentNode(node2), parentComponent, parentSuspense, slotScopeIds, optimized);
		vnode2.targetStart = targetStart;
		vnode2.targetAnchor = targetAnchor;
	}
	const target = vnode.target = /* @__PURE__ */ resolveTarget(vnode.props, querySelector);
	const disabled = /* @__PURE__ */ isTeleportDisabled(vnode.props);
	if (target) {
		const targetNode = target._lpa || target.firstChild;
		if (vnode.shapeFlag & 16) if (disabled) hydrateDisabledTeleport(node, vnode, targetNode, targetNode && nextSibling(targetNode));
		else {
			vnode.anchor = /* @__PURE__ */ nextSibling(node);
			let targetAnchor = targetNode;
			while (targetAnchor) {
				if (targetAnchor && targetAnchor.nodeType === 8) {
					if (targetAnchor.data === "teleport start anchor") vnode.targetStart = targetAnchor;
					else if (targetAnchor.data === "teleport anchor") {
						vnode.targetAnchor = targetAnchor;
						target._lpa = vnode.targetAnchor && nextSibling(vnode.targetAnchor);
						break;
					}
				}
				targetAnchor = /* @__PURE__ */ nextSibling(targetAnchor);
			}
			if (!vnode.targetAnchor) prepareAnchor(target, vnode, createText, insert);
			hydrateChildren(targetNode && nextSibling(targetNode), vnode, target, parentComponent, parentSuspense, slotScopeIds, optimized);
		}
		updateCssVars(vnode, disabled);
	} else if (disabled) {
		if (vnode.shapeFlag & 16) hydrateDisabledTeleport(node, vnode, node, /* @__PURE__ */ nextSibling(node));
	}
	return vnode.anchor && nextSibling(vnode.anchor);
}
var Teleport = TeleportImpl;
function updateCssVars(vnode, isDisabled) {
	const ctx = vnode.ctx;
	if (ctx && ctx.ut) {
		let node, anchor;
		if (isDisabled) {
			node = vnode.el;
			anchor = vnode.anchor;
		} else {
			node = vnode.targetStart;
			anchor = vnode.targetAnchor;
		}
		while (node && node !== anchor) {
			if (node.nodeType === 1) node.setAttribute("data-v-owner", ctx.uid);
			node = node.nextSibling;
		}
		ctx.ut();
	}
}
function prepareAnchor(target, vnode, createText, insert) {
	const targetStart = vnode.targetStart = /* @__PURE__ */ createText("");
	const targetAnchor = vnode.targetAnchor = /* @__PURE__ */ createText("");
	targetStart[TeleportEndKey] = targetAnchor;
	if (target) {
		insert(targetStart, target);
		insert(targetAnchor, target);
	}
	return targetAnchor;
}
var leaveCbKey = /* @__PURE__ */ Symbol("_leaveCb");
var enterCbKey = /* @__PURE__ */ Symbol("_enterCb");
function useTransitionState() {
	const state = {
		isMounted: false,
		isLeaving: false,
		isUnmounting: false,
		leavingVNodes: /* @__PURE__ */ new Map()
	};
	onMounted(() => {
		state.isMounted = true;
	});
	onBeforeUnmount(() => {
		state.isUnmounting = true;
	});
	return state;
}
var TransitionHookValidator = [Function, Array];
var BaseTransitionPropsValidators = {
	mode: String,
	appear: Boolean,
	persisted: Boolean,
	onBeforeEnter: TransitionHookValidator,
	onEnter: TransitionHookValidator,
	onAfterEnter: TransitionHookValidator,
	onEnterCancelled: TransitionHookValidator,
	onBeforeLeave: TransitionHookValidator,
	onLeave: TransitionHookValidator,
	onAfterLeave: TransitionHookValidator,
	onLeaveCancelled: TransitionHookValidator,
	onBeforeAppear: TransitionHookValidator,
	onAppear: TransitionHookValidator,
	onAfterAppear: TransitionHookValidator,
	onAppearCancelled: TransitionHookValidator
};
var recursiveGetSubtree = (instance) => {
	const subTree = instance.subTree;
	return subTree.component ? recursiveGetSubtree(subTree.component) : subTree;
};
var BaseTransitionImpl = {
	name: `BaseTransition`,
	props: BaseTransitionPropsValidators,
	setup(props, { slots }) {
		const instance = /* @__PURE__ */ getCurrentInstance();
		const state = /* @__PURE__ */ useTransitionState();
		return () => {
			const children = slots.default && getTransitionRawChildren(/* @__PURE__ */ slots.default(), true);
			if (!children || !children.length) return;
			const child = /* @__PURE__ */ findNonCommentChild(children);
			const rawProps = /* @__PURE__ */ toRaw(props);
			const { mode } = rawProps;
			if (state.isLeaving) return emptyPlaceholder(child);
			const innerChild = /* @__PURE__ */ getInnerChild$1(child);
			if (!innerChild) return emptyPlaceholder(child);
			let enterHooks = resolveTransitionHooks(innerChild, rawProps, state, instance, (hooks) => enterHooks = hooks);
			if (innerChild.type !== Comment) setTransitionHooks(innerChild, enterHooks);
			let oldInnerChild = instance.subTree && getInnerChild$1(instance.subTree);
			if (oldInnerChild && oldInnerChild.type !== Comment && !isSameVNodeType(oldInnerChild, innerChild) && recursiveGetSubtree(instance).type !== Comment) {
				let leavingHooks = /* @__PURE__ */ resolveTransitionHooks(oldInnerChild, rawProps, state, instance);
				setTransitionHooks(oldInnerChild, leavingHooks);
				if (mode === "out-in" && innerChild.type !== Comment) {
					state.isLeaving = true;
					leavingHooks.afterLeave = () => {
						state.isLeaving = false;
						if (!(instance.job.flags & 8)) instance.update();
						delete leavingHooks.afterLeave;
						oldInnerChild = void 0;
					};
					return emptyPlaceholder(child);
				} else if (mode === "in-out" && innerChild.type !== Comment) leavingHooks.delayLeave = (el, earlyRemove, delayedLeave) => {
					const leavingVNodesCache = /* @__PURE__ */ getLeavingNodesForType(state, oldInnerChild);
					leavingVNodesCache[String(oldInnerChild.key)] = oldInnerChild;
					el[leaveCbKey] = () => {
						earlyRemove();
						el[leaveCbKey] = void 0;
						delete enterHooks.delayedLeave;
						oldInnerChild = void 0;
					};
					enterHooks.delayedLeave = () => {
						delayedLeave();
						delete enterHooks.delayedLeave;
						oldInnerChild = void 0;
					};
				};
				else oldInnerChild = void 0;
			} else if (oldInnerChild) oldInnerChild = void 0;
			return child;
		};
	}
};
function findNonCommentChild(children) {
	let child = children[0];
	if (children.length > 1) {
		for (const c of children) if (c.type !== Comment) {
			child = c;
			break;
		}
	}
	return child;
}
var BaseTransition = BaseTransitionImpl;
function getLeavingNodesForType(state, vnode) {
	const { leavingVNodes } = state;
	let leavingVNodesCache = /* @__PURE__ */ leavingVNodes.get(vnode.type);
	if (!leavingVNodesCache) {
		leavingVNodesCache = /* @__PURE__ */ Object.create(null);
		leavingVNodes.set(vnode.type, leavingVNodesCache);
	}
	return leavingVNodesCache;
}
function resolveTransitionHooks(vnode, props, state, instance, postClone) {
	const { appear, mode, persisted = false, onBeforeEnter, onEnter, onAfterEnter, onEnterCancelled, onBeforeLeave, onLeave, onAfterLeave, onLeaveCancelled, onBeforeAppear, onAppear, onAfterAppear, onAppearCancelled } = props;
	const key = /* @__PURE__ */ String(vnode.key);
	const leavingVNodesCache = /* @__PURE__ */ getLeavingNodesForType(state, vnode);
	const callHook$1 = (hook, args) => {
		hook && callWithAsyncErrorHandling(hook, instance, 9, args);
	};
	const callAsyncHook = (hook, args) => {
		const done = args[1];
		callHook$1(hook, args);
		if (isArray$4(hook)) {
			if (hook.every((hook2) => hook2.length <= 1)) done();
		} else if (hook.length <= 1) done();
	};
	const hooks = {
		mode,
		persisted,
		beforeEnter(el) {
			let hook = onBeforeEnter;
			if (!state.isMounted) if (appear) hook = onBeforeAppear || onBeforeEnter;
			else return;
			if (el[leaveCbKey]) el[leaveCbKey](true);
			const leavingVNode = leavingVNodesCache[key];
			if (leavingVNode && isSameVNodeType(vnode, leavingVNode) && leavingVNode.el[leaveCbKey]) leavingVNode.el[leaveCbKey]();
			callHook$1(hook, [el]);
		},
		enter(el) {
			let hook = onEnter;
			let afterHook = onAfterEnter;
			let cancelHook = onEnterCancelled;
			if (!state.isMounted) if (appear) {
				hook = onAppear || onEnter;
				afterHook = onAfterAppear || onAfterEnter;
				cancelHook = onAppearCancelled || onEnterCancelled;
			} else return;
			let called = false;
			const done = el[enterCbKey] = (cancelled) => {
				if (called) return;
				called = true;
				if (cancelled) callHook$1(cancelHook, [el]);
				else callHook$1(afterHook, [el]);
				if (hooks.delayedLeave) hooks.delayedLeave();
				el[enterCbKey] = void 0;
			};
			if (hook) callAsyncHook(hook, [el, done]);
			else done();
		},
		leave(el, remove$1) {
			const key2 = /* @__PURE__ */ String(vnode.key);
			if (el[enterCbKey]) el[enterCbKey](true);
			if (state.isUnmounting) return remove$1();
			callHook$1(onBeforeLeave, [el]);
			let called = false;
			const done = el[leaveCbKey] = (cancelled) => {
				if (called) return;
				called = true;
				remove$1();
				if (cancelled) callHook$1(onLeaveCancelled, [el]);
				else callHook$1(onAfterLeave, [el]);
				el[leaveCbKey] = void 0;
				if (leavingVNodesCache[key2] === vnode) delete leavingVNodesCache[key2];
			};
			leavingVNodesCache[key2] = vnode;
			if (onLeave) callAsyncHook(onLeave, [el, done]);
			else done();
		},
		clone(vnode2) {
			const hooks2 = /* @__PURE__ */ resolveTransitionHooks(vnode2, props, state, instance, postClone);
			if (postClone) postClone(hooks2);
			return hooks2;
		}
	};
	return hooks;
}
function emptyPlaceholder(vnode) {
	if (isKeepAlive(vnode)) {
		vnode = /* @__PURE__ */ cloneVNode(vnode);
		vnode.children = null;
		return vnode;
	}
}
function getInnerChild$1(vnode) {
	if (!isKeepAlive(vnode)) {
		if (isTeleport(vnode.type) && vnode.children) return findNonCommentChild(vnode.children);
		return vnode;
	}
	if (vnode.component) return vnode.component.subTree;
	const { shapeFlag, children } = vnode;
	if (children) {
		if (shapeFlag & 16) return children[0];
		if (shapeFlag & 32 && isFunction$3(children.default)) return children.default();
	}
}
function setTransitionHooks(vnode, hooks) {
	if (vnode.shapeFlag & 6 && vnode.component) {
		vnode.transition = hooks;
		setTransitionHooks(vnode.component.subTree, hooks);
	} else if (vnode.shapeFlag & 128) {
		vnode.ssContent.transition = /* @__PURE__ */ hooks.clone(vnode.ssContent);
		vnode.ssFallback.transition = /* @__PURE__ */ hooks.clone(vnode.ssFallback);
	} else vnode.transition = hooks;
}
function getTransitionRawChildren(children, keepComment = false, parentKey) {
	let ret = [];
	let keyedFragmentCount = 0;
	for (let i = 0; i < children.length; i++) {
		let child = children[i];
		const key = parentKey == null ? child.key : String(parentKey) + String(child.key != null ? child.key : i);
		if (child.type === Fragment) {
			if (child.patchFlag & 128) keyedFragmentCount++;
			ret = /* @__PURE__ */ ret.concat(/* @__PURE__ */ getTransitionRawChildren(child.children, keepComment, key));
		} else if (keepComment || child.type !== Comment) ret.push(key != null ? cloneVNode(child, { key }) : child);
	}
	if (keyedFragmentCount > 1) for (let i = 0; i < ret.length; i++) ret[i].patchFlag = -2;
	return ret;
}
/* @__NO_SIDE_EFFECTS__ */
function defineComponent(options, extraOptions) {
	return isFunction$3(options) ? /* @__PURE__ */ (() => extend({ name: options.name }, extraOptions, { setup: options }))() : options;
}
function markAsyncBoundary(instance) {
	instance.ids = [
		instance.ids[0] + instance.ids[2]++ + "-",
		0,
		0
	];
}
var pendingSetRefMap = /* @__PURE__ */ new WeakMap();
function setRef(rawRef, oldRawRef, parentSuspense, vnode, isUnmount = false) {
	if (isArray$4(rawRef)) {
		rawRef.forEach((r, i) => setRef(r, oldRawRef && (isArray$4(oldRawRef) ? oldRawRef[i] : oldRawRef), parentSuspense, vnode, isUnmount));
		return;
	}
	if (isAsyncWrapper(vnode) && !isUnmount) {
		if (vnode.shapeFlag & 512 && vnode.type.__asyncResolved && vnode.component.subTree.component) setRef(rawRef, oldRawRef, parentSuspense, vnode.component.subTree);
		return;
	}
	const refValue = vnode.shapeFlag & 4 ? getComponentPublicInstance(vnode.component) : vnode.el;
	const value = isUnmount ? null : refValue;
	const { i: owner, r: ref$3 } = rawRef;
	const oldRef = oldRawRef && oldRawRef.r;
	const refs = owner.refs === EMPTY_OBJ ? owner.refs = {} : owner.refs;
	const setupState = owner.setupState;
	const rawSetupState = /* @__PURE__ */ toRaw(setupState);
	const canSetSetupRef = setupState === EMPTY_OBJ ? NO : (key) => {
		return hasOwn(rawSetupState, key);
	};
	const canSetRef = (ref2) => {
		return true;
	};
	if (oldRef != null && oldRef !== ref$3) {
		invalidatePendingSetRef(oldRawRef);
		if (isString$1(oldRef)) {
			refs[oldRef] = null;
			if (canSetSetupRef(oldRef)) setupState[oldRef] = null;
		} else if (isRef(oldRef)) {
			if (canSetRef(oldRef)) oldRef.value = null;
			const oldRawRefAtom = oldRawRef;
			if (oldRawRefAtom.k) refs[oldRawRefAtom.k] = null;
		}
	}
	if (isFunction$3(ref$3)) callWithErrorHandling(ref$3, owner, 12, [value, refs]);
	else {
		const _isString = /* @__PURE__ */ isString$1(ref$3);
		const _isRef = /* @__PURE__ */ isRef(ref$3);
		if (_isString || _isRef) {
			const doSet = () => {
				if (rawRef.f) {
					const existing = _isString ? canSetSetupRef(ref$3) ? setupState[ref$3] : refs[ref$3] : canSetRef(ref$3) || !rawRef.k ? ref$3.value : refs[rawRef.k];
					if (isUnmount) isArray$4(existing) && remove(existing, refValue);
					else if (!isArray$4(existing)) if (_isString) {
						refs[ref$3] = [refValue];
						if (canSetSetupRef(ref$3)) setupState[ref$3] = refs[ref$3];
					} else {
						const newVal = [refValue];
						if (canSetRef(ref$3)) ref$3.value = newVal;
						if (rawRef.k) refs[rawRef.k] = newVal;
					}
					else if (!existing.includes(refValue)) existing.push(refValue);
				} else if (_isString) {
					refs[ref$3] = value;
					if (canSetSetupRef(ref$3)) setupState[ref$3] = value;
				} else if (_isRef) {
					if (canSetRef(ref$3)) ref$3.value = value;
					if (rawRef.k) refs[rawRef.k] = value;
				}
			};
			if (value) {
				const job = () => {
					doSet();
					pendingSetRefMap.delete(rawRef);
				};
				job.id = -1;
				pendingSetRefMap.set(rawRef, job);
				queuePostRenderEffect(job, parentSuspense);
			} else {
				invalidatePendingSetRef(rawRef);
				doSet();
			}
		}
	}
}
function invalidatePendingSetRef(rawRef) {
	const pendingSetRef = /* @__PURE__ */ pendingSetRefMap.get(rawRef);
	if (pendingSetRef) {
		pendingSetRef.flags |= 8;
		pendingSetRefMap.delete(rawRef);
	}
}
getGlobalThis().requestIdleCallback;
getGlobalThis().cancelIdleCallback;
var isAsyncWrapper = (i) => !!i.type.__asyncLoader;
var isKeepAlive = (vnode) => vnode.type.__isKeepAlive;
function onActivated(hook, target) {
	registerKeepAliveHook(hook, "a", target);
}
function onDeactivated(hook, target) {
	registerKeepAliveHook(hook, "da", target);
}
function registerKeepAliveHook(hook, type, target = currentInstance) {
	const wrappedHook = hook.__wdc || (hook.__wdc = () => {
		let current$1 = target;
		while (current$1) {
			if (current$1.isDeactivated) return;
			current$1 = current$1.parent;
		}
		return hook();
	});
	injectHook(type, wrappedHook, target);
	if (target) {
		let current$1 = target.parent;
		while (current$1 && current$1.parent) {
			if (isKeepAlive(current$1.parent.vnode)) injectToKeepAliveRoot(wrappedHook, type, target, current$1);
			current$1 = current$1.parent;
		}
	}
}
function injectToKeepAliveRoot(hook, type, target, keepAliveRoot) {
	const injected = /* @__PURE__ */ injectHook(type, hook, keepAliveRoot, true);
	onUnmounted(() => {
		remove(keepAliveRoot[type], injected);
	}, target);
}
function injectHook(type, hook, target = currentInstance, prepend = false) {
	if (target) {
		const hooks = target[type] || (target[type] = []);
		const wrappedHook = hook.__weh || (hook.__weh = (...args) => {
			pauseTracking();
			const reset = /* @__PURE__ */ setCurrentInstance(target);
			const res = /* @__PURE__ */ callWithAsyncErrorHandling(hook, target, type, args);
			reset();
			resetTracking();
			return res;
		});
		if (prepend) hooks.unshift(wrappedHook);
		else hooks.push(wrappedHook);
		return wrappedHook;
	}
}
var createHook = (lifecycle) => (hook, target = currentInstance) => {
	if (!isInSSRComponentSetup || lifecycle === "sp") injectHook(lifecycle, (...args) => hook(...args), target);
};
var onBeforeMount = /* @__PURE__ */ createHook("bm");
var onMounted = /* @__PURE__ */ createHook("m");
var onBeforeUpdate = /* @__PURE__ */ createHook("bu");
var onUpdated = /* @__PURE__ */ createHook("u");
var onBeforeUnmount = /* @__PURE__ */ createHook("bum");
var onUnmounted = /* @__PURE__ */ createHook("um");
var onServerPrefetch = /* @__PURE__ */ createHook("sp");
var onRenderTriggered = /* @__PURE__ */ createHook("rtg");
var onRenderTracked = /* @__PURE__ */ createHook("rtc");
function onErrorCaptured(hook, target = currentInstance) {
	injectHook("ec", hook, target);
}
var NULL_DYNAMIC_COMPONENT = /* @__PURE__ */ Symbol.for("v-ndc");
var getPublicInstance = (i) => {
	if (!i) return null;
	if (isStatefulComponent(i)) return getComponentPublicInstance(i);
	return getPublicInstance(i.parent);
};
var publicPropertiesMap = /* @__PURE__ */ extend(/* @__PURE__ */ Object.create(null), {
	$: (i) => i,
	$el: (i) => i.vnode.el,
	$data: (i) => i.data,
	$props: (i) => i.props,
	$attrs: (i) => i.attrs,
	$slots: (i) => i.slots,
	$refs: (i) => i.refs,
	$parent: (i) => getPublicInstance(i.parent),
	$root: (i) => getPublicInstance(i.root),
	$host: (i) => i.ce,
	$emit: (i) => i.emit,
	$options: (i) => resolveMergedOptions(i),
	$forceUpdate: (i) => i.f || (i.f = () => {
		queueJob(i.update);
	}),
	$nextTick: (i) => i.n || (i.n = /* @__PURE__ */ nextTick.bind(i.proxy)),
	$watch: (i) => instanceWatch.bind(i)
});
var hasSetupBinding = (state, key) => state !== EMPTY_OBJ && !state.__isScriptSetup && hasOwn(state, key);
var PublicInstanceProxyHandlers = {
	get({ _: instance }, key) {
		if (key === "__v_skip") return true;
		const { ctx, setupState, data, props, accessCache, type, appContext } = instance;
		let normalizedProps;
		if (key[0] !== "$") {
			const n1 = accessCache[key];
			if (n1 !== void 0) switch (n1) {
				case 1: return setupState[key];
				case 2: return data[key];
				case 4: return ctx[key];
				case 3: return props[key];
			}
			else if (hasSetupBinding(setupState, key)) {
				accessCache[key] = 1;
				return setupState[key];
			} else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
				accessCache[key] = 2;
				return data[key];
			} else if ((normalizedProps = instance.propsOptions[0]) && hasOwn(normalizedProps, key)) {
				accessCache[key] = 3;
				return props[key];
			} else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
				accessCache[key] = 4;
				return ctx[key];
			} else if (shouldCacheAccess) accessCache[key] = 0;
		}
		const publicGetter = publicPropertiesMap[key];
		let cssModule, globalProperties;
		if (publicGetter) {
			if (key === "$attrs") track(instance.attrs, "get", "");
			return publicGetter(instance);
		} else if ((cssModule = type.__cssModules) && (cssModule = cssModule[key])) return cssModule;
		else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
			accessCache[key] = 4;
			return ctx[key];
		} else if (globalProperties = appContext.config.globalProperties, hasOwn(globalProperties, key)) return globalProperties[key];
	},
	set({ _: instance }, key, value) {
		const { data, setupState, ctx } = instance;
		if (hasSetupBinding(setupState, key)) {
			setupState[key] = value;
			return true;
		} else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
			data[key] = value;
			return true;
		} else if (hasOwn(instance.props, key)) return false;
		if (key[0] === "$" && key.slice(1) in instance) return false;
		else ctx[key] = value;
		return true;
	},
	has({ _: { data, setupState, accessCache, ctx, appContext, propsOptions, type } }, key) {
		let normalizedProps, cssModules;
		return !!(accessCache[key] || data !== EMPTY_OBJ && key[0] !== "$" && hasOwn(data, key) || hasSetupBinding(setupState, key) || (normalizedProps = propsOptions[0]) && hasOwn(normalizedProps, key) || hasOwn(ctx, key) || hasOwn(publicPropertiesMap, key) || hasOwn(appContext.config.globalProperties, key) || (cssModules = type.__cssModules) && cssModules[key]);
	},
	defineProperty(target, key, descriptor) {
		if (descriptor.get != null) target._.accessCache[key] = 0;
		else if (hasOwn(descriptor, "value")) this.set(target, key, descriptor.value, null);
		return Reflect.defineProperty(target, key, descriptor);
	}
};
function normalizePropsOrEmits(props) {
	return isArray$4(props) ? props.reduce((normalized, p) => (normalized[p] = null, normalized), {}) : props;
}
var shouldCacheAccess = true;
function applyOptions(instance) {
	const options = /* @__PURE__ */ resolveMergedOptions(instance);
	const publicThis = instance.proxy;
	const ctx = instance.ctx;
	shouldCacheAccess = false;
	if (options.beforeCreate) callHook(options.beforeCreate, instance, "bc");
	const { data: dataOptions, computed: computedOptions, methods, watch: watchOptions, provide: provideOptions, inject: injectOptions, created, beforeMount, mounted, beforeUpdate, updated, activated, deactivated, beforeDestroy, beforeUnmount, destroyed, unmounted, render: render$1, renderTracked, renderTriggered, errorCaptured, serverPrefetch, expose, inheritAttrs, components, directives, filters } = options;
	const checkDuplicateProperties = null;
	if (injectOptions) resolveInjections(injectOptions, ctx, checkDuplicateProperties);
	if (methods) for (const key in methods) {
		const methodHandler = methods[key];
		if (isFunction$3(methodHandler)) ctx[key] = /* @__PURE__ */ methodHandler.bind(publicThis);
	}
	if (dataOptions) {
		const data = /* @__PURE__ */ dataOptions.call(publicThis, publicThis);
		if (!isObject$1(data)) {} else instance.data = /* @__PURE__ */ reactive(data);
	}
	shouldCacheAccess = true;
	if (computedOptions) for (const key in computedOptions) {
		const opt = computedOptions[key];
		const c = /* @__PURE__ */ computed({
			get: isFunction$3(opt) ? opt.bind(publicThis, publicThis) : isFunction$3(opt.get) ? opt.get.bind(publicThis, publicThis) : NOOP,
			set: !isFunction$3(opt) && isFunction$3(opt.set) ? opt.set.bind(publicThis) : NOOP
		});
		Object.defineProperty(ctx, key, {
			enumerable: true,
			configurable: true,
			get: () => c.value,
			set: (v1) => c.value = v1
		});
	}
	if (watchOptions) for (const key in watchOptions) createWatcher(watchOptions[key], ctx, publicThis, key);
	if (provideOptions) {
		const provides = isFunction$3(provideOptions) ? provideOptions.call(publicThis) : provideOptions;
		Reflect.ownKeys(provides).forEach((key) => {
			provide(key, provides[key]);
		});
	}
	if (created) callHook(created, instance, "c");
	function registerLifecycleHook(register, hook) {
		if (isArray$4(hook)) hook.forEach((_hook) => register(/* @__PURE__ */ _hook.bind(publicThis)));
		else if (hook) register(/* @__PURE__ */ hook.bind(publicThis));
	}
	registerLifecycleHook(onBeforeMount, beforeMount);
	registerLifecycleHook(onMounted, mounted);
	registerLifecycleHook(onBeforeUpdate, beforeUpdate);
	registerLifecycleHook(onUpdated, updated);
	registerLifecycleHook(onActivated, activated);
	registerLifecycleHook(onDeactivated, deactivated);
	registerLifecycleHook(onErrorCaptured, errorCaptured);
	registerLifecycleHook(onRenderTracked, renderTracked);
	registerLifecycleHook(onRenderTriggered, renderTriggered);
	registerLifecycleHook(onBeforeUnmount, beforeUnmount);
	registerLifecycleHook(onUnmounted, unmounted);
	registerLifecycleHook(onServerPrefetch, serverPrefetch);
	if (isArray$4(expose)) {
		if (expose.length) {
			const exposed = instance.exposed || (instance.exposed = {});
			expose.forEach((key) => {
				Object.defineProperty(exposed, key, {
					get: () => publicThis[key],
					set: (val) => publicThis[key] = val,
					enumerable: true
				});
			});
		} else if (!instance.exposed) instance.exposed = {};
	}
	if (render$1 && instance.render === NOOP) instance.render = render$1;
	if (inheritAttrs != null) instance.inheritAttrs = inheritAttrs;
	if (components) instance.components = components;
	if (directives) instance.directives = directives;
	if (serverPrefetch) markAsyncBoundary(instance);
}
function resolveInjections(injectOptions, ctx, checkDuplicateProperties = NOOP) {
	if (isArray$4(injectOptions)) injectOptions = /* @__PURE__ */ normalizeInject(injectOptions);
	for (const key in injectOptions) {
		const opt = injectOptions[key];
		let injected;
		if (isObject$1(opt)) if ("default" in opt) injected = /* @__PURE__ */ inject(opt.from || key, opt.default, true);
		else injected = /* @__PURE__ */ inject(opt.from || key);
		else injected = /* @__PURE__ */ inject(opt);
		if (isRef(injected)) Object.defineProperty(ctx, key, {
			enumerable: true,
			configurable: true,
			get: () => injected.value,
			set: (v1) => injected.value = v1
		});
		else ctx[key] = injected;
	}
}
function callHook(hook, instance, type) {
	callWithAsyncErrorHandling(isArray$4(hook) ? hook.map((h$1) => h$1.bind(instance.proxy)) : hook.bind(instance.proxy), instance, type);
}
function createWatcher(raw, ctx, publicThis, key) {
	let getter = key.includes(".") ? createPathGetter(publicThis, key) : () => publicThis[key];
	if (isString$1(raw)) {
		const handler = ctx[raw];
		if (isFunction$3(handler)) watch(getter, handler);
	} else if (isFunction$3(raw)) watch(getter, /* @__PURE__ */ raw.bind(publicThis));
	else if (isObject$1(raw)) if (isArray$4(raw)) raw.forEach((r) => createWatcher(r, ctx, publicThis, key));
	else {
		const handler = isFunction$3(raw.handler) ? raw.handler.bind(publicThis) : ctx[raw.handler];
		if (isFunction$3(handler)) watch(getter, handler, raw);
	}
}
function resolveMergedOptions(instance) {
	const base = instance.type;
	const { mixins, extends: extendsOptions } = base;
	const { mixins: globalMixins, optionsCache: cache, config: { optionMergeStrategies } } = instance.appContext;
	const cached = /* @__PURE__ */ cache.get(base);
	let resolved;
	if (cached) resolved = cached;
	else if (!globalMixins.length && !mixins && !extendsOptions) resolved = base;
	else {
		resolved = {};
		if (globalMixins.length) globalMixins.forEach((m) => mergeOptions$1(resolved, m, optionMergeStrategies, true));
		mergeOptions$1(resolved, base, optionMergeStrategies);
	}
	if (isObject$1(base)) cache.set(base, resolved);
	return resolved;
}
function mergeOptions$1(to, from$1, strats, asMixin = false) {
	const { mixins, extends: extendsOptions } = from$1;
	if (extendsOptions) mergeOptions$1(to, extendsOptions, strats, true);
	if (mixins) mixins.forEach((m) => mergeOptions$1(to, m, strats, true));
	for (const key in from$1) if (asMixin && key === "expose") {} else {
		const strat = internalOptionMergeStrats[key] || strats && strats[key];
		to[key] = strat ? strat(to[key], from$1[key]) : from$1[key];
	}
	return to;
}
var internalOptionMergeStrats = {
	data: mergeDataFn,
	props: mergeEmitsOrPropsOptions,
	emits: mergeEmitsOrPropsOptions,
	methods: mergeObjectOptions,
	computed: mergeObjectOptions,
	beforeCreate: mergeAsArray,
	created: mergeAsArray,
	beforeMount: mergeAsArray,
	mounted: mergeAsArray,
	beforeUpdate: mergeAsArray,
	updated: mergeAsArray,
	beforeDestroy: mergeAsArray,
	beforeUnmount: mergeAsArray,
	destroyed: mergeAsArray,
	unmounted: mergeAsArray,
	activated: mergeAsArray,
	deactivated: mergeAsArray,
	errorCaptured: mergeAsArray,
	serverPrefetch: mergeAsArray,
	components: mergeObjectOptions,
	directives: mergeObjectOptions,
	watch: mergeWatchOptions,
	provide: mergeDataFn,
	inject: mergeInject
};
function mergeDataFn(to, from$1) {
	if (!from$1) return to;
	if (!to) return from$1;
	return function mergedDataFn() {
		return extend(isFunction$3(to) ? to.call(this, this) : to, isFunction$3(from$1) ? from$1.call(this, this) : from$1);
	};
}
function mergeInject(to, from$1) {
	return mergeObjectOptions(/* @__PURE__ */ normalizeInject(to), /* @__PURE__ */ normalizeInject(from$1));
}
function normalizeInject(raw) {
	if (isArray$4(raw)) {
		const res = {};
		for (let i = 0; i < raw.length; i++) res[raw[i]] = raw[i];
		return res;
	}
	return raw;
}
function mergeAsArray(to, from$1) {
	return to ? [...new Set([].concat(to, from$1))] : from$1;
}
function mergeObjectOptions(to, from$1) {
	return to ? extend(/* @__PURE__ */ Object.create(null), to, from$1) : from$1;
}
function mergeEmitsOrPropsOptions(to, from$1) {
	if (to) {
		if (isArray$4(to) && isArray$4(from$1)) return [.../* @__PURE__ */ new Set([...to, ...from$1])];
		return extend(/* @__PURE__ */ Object.create(null), /* @__PURE__ */ normalizePropsOrEmits(to), /* @__PURE__ */ normalizePropsOrEmits(from$1 != null ? from$1 : {}));
	} else return from$1;
}
function mergeWatchOptions(to, from$1) {
	if (!to) return from$1;
	if (!from$1) return to;
	const merged = /* @__PURE__ */ extend(/* @__PURE__ */ Object.create(null), to);
	for (const key in from$1) merged[key] = /* @__PURE__ */ mergeAsArray(to[key], from$1[key]);
	return merged;
}
function createAppContext() {
	return {
		app: null,
		config: {
			isNativeTag: NO,
			performance: false,
			globalProperties: {},
			optionMergeStrategies: {},
			errorHandler: void 0,
			warnHandler: void 0,
			compilerOptions: {}
		},
		mixins: [],
		components: {},
		directives: {},
		provides: /* @__PURE__ */ Object.create(null),
		optionsCache: /* @__PURE__ */ new WeakMap(),
		propsCache: /* @__PURE__ */ new WeakMap(),
		emitsCache: /* @__PURE__ */ new WeakMap()
	};
}
var uid$1 = 0;
function createAppAPI(render$1, hydrate) {
	return function createApp(rootComponent, rootProps = null) {
		if (!isFunction$3(rootComponent)) rootComponent = /* @__PURE__ */ extend({}, rootComponent);
		if (rootProps != null && !isObject$1(rootProps)) rootProps = null;
		const context$1 = /* @__PURE__ */ createAppContext();
		const installedPlugins = /* @__PURE__ */ new WeakSet();
		const pluginCleanupFns = [];
		let isMounted = false;
		const app = context$1.app = {
			_uid: uid$1++,
			_component: rootComponent,
			_props: rootProps,
			_container: null,
			_context: context$1,
			_instance: null,
			version,
			get config() {
				return context$1.config;
			},
			set config(v) {},
			use(plugin, ...options) {
				if (installedPlugins.has(plugin)) {} else if (plugin && isFunction$3(plugin.install)) {
					installedPlugins.add(plugin);
					plugin.install(app, ...options);
				} else if (isFunction$3(plugin)) {
					installedPlugins.add(plugin);
					plugin(app, ...options);
				}
				return app;
			},
			mixin(mixin) {
				if (!context$1.mixins.includes(mixin)) context$1.mixins.push(mixin);
				return app;
			},
			component(name, component$1) {
				if (!component$1) return context$1.components[name];
				context$1.components[name] = component$1;
				return app;
			},
			directive(name, directive) {
				if (!directive) return context$1.directives[name];
				context$1.directives[name] = directive;
				return app;
			},
			mount(rootContainer, isHydrate, namespace) {
				if (!isMounted) {
					const vnode = app._ceVNode || createVNode(rootComponent, rootProps);
					vnode.appContext = context$1;
					if (namespace === true) namespace = "svg";
					else if (namespace === false) namespace = void 0;
					if (isHydrate && hydrate) hydrate(vnode, rootContainer);
					else render$1(vnode, rootContainer, namespace);
					isMounted = true;
					app._container = rootContainer;
					rootContainer.__vue_app__ = app;
					return getComponentPublicInstance(vnode.component);
				}
			},
			onUnmount(cleanupFn) {
				pluginCleanupFns.push(cleanupFn);
			},
			unmount() {
				if (isMounted) {
					callWithAsyncErrorHandling(pluginCleanupFns, app._instance, 16);
					render$1(null, app._container);
					delete app._container.__vue_app__;
				}
			},
			provide(key, value) {
				context$1.provides[key] = value;
				return app;
			},
			runWithContext(fn) {
				const lastApp = currentApp;
				currentApp = app;
				try {
					return fn();
				} finally {
					currentApp = lastApp;
				}
			}
		};
		return app;
	};
}
var currentApp = null;
function provide(key, value) {
	if (!currentInstance) {} else {
		let provides = currentInstance.provides;
		const parentProvides = currentInstance.parent && currentInstance.parent.provides;
		if (parentProvides === provides) provides = currentInstance.provides = /* @__PURE__ */ Object.create(parentProvides);
		provides[key] = value;
	}
}
function inject(key, defaultValue, treatDefaultAsFactory = false) {
	const instance = /* @__PURE__ */ getCurrentInstance();
	if (instance || currentApp) {
		let provides = currentApp ? currentApp._context.provides : instance ? instance.parent == null || instance.ce ? instance.vnode.appContext && instance.vnode.appContext.provides : instance.parent.provides : void 0;
		if (provides && key in provides) return provides[key];
		else if (arguments.length > 1) return treatDefaultAsFactory && isFunction$3(defaultValue) ? defaultValue.call(instance && instance.proxy) : defaultValue;
	}
}
var internalObjectProto = {};
var createInternalObject = () => Object.create(internalObjectProto);
var isInternalObject = (obj) => Object.getPrototypeOf(obj) === internalObjectProto;
function initProps(instance, rawProps, isStateful, isSSR = false) {
	const props = {};
	const attrs = /* @__PURE__ */ createInternalObject();
	instance.propsDefaults = /* @__PURE__ */ Object.create(null);
	setFullProps(instance, rawProps, props, attrs);
	for (const key in instance.propsOptions[0]) if (!(key in props)) props[key] = void 0;
	if (isStateful) instance.props = isSSR ? props : shallowReactive(props);
	else if (!instance.type.props) instance.props = attrs;
	else instance.props = props;
	instance.attrs = attrs;
}
function updateProps(instance, rawProps, rawPrevProps, optimized) {
	const { props, attrs, vnode: { patchFlag } } = instance;
	const rawCurrentProps = /* @__PURE__ */ toRaw(props);
	const [options] = instance.propsOptions;
	let hasAttrsChanged = false;
	if ((optimized || patchFlag > 0) && !(patchFlag & 16)) {
		if (patchFlag & 8) {
			const propsToUpdate = instance.vnode.dynamicProps;
			for (let i = 0; i < propsToUpdate.length; i++) {
				let key = propsToUpdate[i];
				if (isEmitListener(instance.emitsOptions, key)) continue;
				const value = rawProps[key];
				if (options) if (hasOwn(attrs, key)) {
					if (value !== attrs[key]) {
						attrs[key] = value;
						hasAttrsChanged = true;
					}
				} else {
					const camelizedKey = /* @__PURE__ */ camelize(key);
					props[camelizedKey] = /* @__PURE__ */ resolvePropValue(options, rawCurrentProps, camelizedKey, value, instance, false);
				}
				else if (value !== attrs[key]) {
					attrs[key] = value;
					hasAttrsChanged = true;
				}
			}
		}
	} else {
		if (setFullProps(instance, rawProps, props, attrs)) hasAttrsChanged = true;
		let kebabKey;
		for (const key in rawCurrentProps) if (!rawProps || !hasOwn(rawProps, key) && ((kebabKey = /* @__PURE__ */ hyphenate(key)) === key || !hasOwn(rawProps, kebabKey))) if (options) {
			if (rawPrevProps && (rawPrevProps[key] !== void 0 || rawPrevProps[kebabKey] !== void 0)) props[key] = /* @__PURE__ */ resolvePropValue(options, rawCurrentProps, key, void 0, instance, true);
		} else delete props[key];
		if (attrs !== rawCurrentProps) {
			for (const key in attrs) if (!rawProps || !hasOwn(rawProps, key) && true) {
				delete attrs[key];
				hasAttrsChanged = true;
			}
		}
	}
	if (hasAttrsChanged) trigger(instance.attrs, "set", "");
}
function setFullProps(instance, rawProps, props, attrs) {
	const [options, needCastKeys] = instance.propsOptions;
	let hasAttrsChanged = false;
	let rawCastValues;
	if (rawProps) for (let key in rawProps) {
		if (isReservedProp(key)) continue;
		const value = rawProps[key];
		let camelKey;
		if (options && hasOwn(options, camelKey = /* @__PURE__ */ camelize(key))) if (!needCastKeys || !needCastKeys.includes(camelKey)) props[camelKey] = value;
		else (rawCastValues || (rawCastValues = {}))[camelKey] = value;
		else if (!isEmitListener(instance.emitsOptions, key)) {
			if (!(key in attrs) || value !== attrs[key]) {
				attrs[key] = value;
				hasAttrsChanged = true;
			}
		}
	}
	if (needCastKeys) {
		const rawCurrentProps = /* @__PURE__ */ toRaw(props);
		const castValues = rawCastValues || EMPTY_OBJ;
		for (let i = 0; i < needCastKeys.length; i++) {
			const key = needCastKeys[i];
			props[key] = /* @__PURE__ */ resolvePropValue(options, rawCurrentProps, key, castValues[key], instance, !hasOwn(castValues, key));
		}
	}
	return hasAttrsChanged;
}
function resolvePropValue(options, props, key, value, instance, isAbsent) {
	const opt = options[key];
	if (opt != null) {
		const hasDefault = /* @__PURE__ */ hasOwn(opt, "default");
		if (hasDefault && value === void 0) {
			const defaultValue = opt.default;
			if (opt.type !== Function && !opt.skipFactory && isFunction$3(defaultValue)) {
				const { propsDefaults } = instance;
				if (key in propsDefaults) value = propsDefaults[key];
				else {
					const reset = /* @__PURE__ */ setCurrentInstance(instance);
					value = propsDefaults[key] = /* @__PURE__ */ defaultValue.call(null, props);
					reset();
				}
			} else value = defaultValue;
			if (instance.ce) instance.ce._setProp(key, value);
		}
		if (opt[0]) {
			if (isAbsent && !hasDefault) value = false;
			else if (opt[1] && (value === "" || value === hyphenate(key))) value = true;
		}
	}
	return value;
}
var mixinPropsCache = /* @__PURE__ */ new WeakMap();
function normalizePropsOptions(comp, appContext, asMixin = false) {
	const cache = asMixin ? mixinPropsCache : appContext.propsCache;
	const cached = /* @__PURE__ */ cache.get(comp);
	if (cached) return cached;
	const raw = comp.props;
	const normalized = {};
	const needCastKeys = [];
	let hasExtends = false;
	if (!isFunction$3(comp)) {
		const extendProps = (raw2) => {
			hasExtends = true;
			const [props, keys$1] = normalizePropsOptions(raw2, appContext, true);
			extend(normalized, props);
			if (keys$1) needCastKeys.push(...keys$1);
		};
		if (!asMixin && appContext.mixins.length) appContext.mixins.forEach(extendProps);
		if (comp.extends) extendProps(comp.extends);
		if (comp.mixins) comp.mixins.forEach(extendProps);
	}
	if (!raw && !hasExtends) {
		if (isObject$1(comp)) cache.set(comp, EMPTY_ARR);
		return EMPTY_ARR;
	}
	if (isArray$4(raw)) for (let i = 0; i < raw.length; i++) {
		const normalizedKey = /* @__PURE__ */ camelize(raw[i]);
		if (validatePropName(normalizedKey)) normalized[normalizedKey] = EMPTY_OBJ;
	}
	else if (raw) for (const key in raw) {
		const normalizedKey = /* @__PURE__ */ camelize(key);
		if (validatePropName(normalizedKey)) {
			const opt = raw[key];
			const prop = normalized[normalizedKey] = isArray$4(opt) || isFunction$3(opt) ? { type: opt } : extend({}, opt);
			const propType = prop.type;
			let shouldCast = false;
			let shouldCastTrue = true;
			if (isArray$4(propType)) for (let index = 0; index < propType.length; ++index) {
				const type = propType[index];
				const typeName = isFunction$3(type) && type.name;
				if (typeName === "Boolean") {
					shouldCast = true;
					break;
				} else if (typeName === "String") shouldCastTrue = false;
			}
			else shouldCast = isFunction$3(propType) && propType.name === "Boolean";
			prop[0] = shouldCast;
			prop[1] = shouldCastTrue;
			if (shouldCast || hasOwn(prop, "default")) needCastKeys.push(normalizedKey);
		}
	}
	const res = [normalized, needCastKeys];
	if (isObject$1(comp)) cache.set(comp, res);
	return res;
}
function validatePropName(key) {
	if (key[0] !== "$" && !isReservedProp(key)) return true;
	return false;
}
var isInternalKey = (key) => key === "_" || key === "_ctx" || key === "$stable";
var normalizeSlotValue = (value) => isArray$4(value) ? value.map(normalizeVNode) : [/* @__PURE__ */ normalizeVNode(value)];
var normalizeSlot$1 = (key, rawSlot, ctx) => {
	if (rawSlot._n) return rawSlot;
	const normalized = /* @__PURE__ */ withCtx((...args) => {
		return normalizeSlotValue(/* @__PURE__ */ rawSlot(...args));
	}, ctx);
	normalized._c = false;
	return normalized;
};
var normalizeObjectSlots = (rawSlots, slots, instance) => {
	const ctx = rawSlots._ctx;
	for (const key in rawSlots) {
		if (isInternalKey(key)) continue;
		const value = rawSlots[key];
		if (isFunction$3(value)) slots[key] = /* @__PURE__ */ normalizeSlot$1(key, value, ctx);
		else if (value != null) {
			const normalized = /* @__PURE__ */ normalizeSlotValue(value);
			slots[key] = () => normalized;
		}
	}
};
var normalizeVNodeSlots = (instance, children) => {
	const normalized = /* @__PURE__ */ normalizeSlotValue(children);
	instance.slots.default = () => normalized;
};
var assignSlots = (slots, children, optimized) => {
	for (const key in children) if (optimized || !isInternalKey(key)) slots[key] = children[key];
};
var initSlots = (instance, children, optimized) => {
	const slots = instance.slots = /* @__PURE__ */ createInternalObject();
	if (instance.vnode.shapeFlag & 32) {
		const type = children._;
		if (type) {
			assignSlots(slots, children, optimized);
			if (optimized) def(slots, "_", type, true);
		} else normalizeObjectSlots(children, slots);
	} else if (children) normalizeVNodeSlots(instance, children);
};
var updateSlots = (instance, children, optimized) => {
	const { vnode, slots } = instance;
	let needDeletionCheck = true;
	let deletionComparisonTarget = EMPTY_OBJ;
	if (vnode.shapeFlag & 32) {
		const type = children._;
		if (type) if (optimized && type === 1) needDeletionCheck = false;
		else assignSlots(slots, children, optimized);
		else {
			needDeletionCheck = !children.$stable;
			normalizeObjectSlots(children, slots);
		}
		deletionComparisonTarget = children;
	} else if (children) {
		normalizeVNodeSlots(instance, children);
		deletionComparisonTarget = { default: 1 };
	}
	if (needDeletionCheck) {
		for (const key in slots) if (!isInternalKey(key) && deletionComparisonTarget[key] == null) delete slots[key];
	}
};
function initFeatureFlags() {}
var queuePostRenderEffect = queueEffectWithSuspense;
function createRenderer(options) {
	return baseCreateRenderer(options);
}
function baseCreateRenderer(options, createHydrationFns) {
	initFeatureFlags();
	const target = /* @__PURE__ */ getGlobalThis();
	target.__VUE__ = true;
	const { insert: hostInsert, remove: hostRemove, patchProp: hostPatchProp, createElement: hostCreateElement, createText: hostCreateText, createComment: hostCreateComment, setText: hostSetText, setElementText: hostSetElementText, parentNode: hostParentNode, nextSibling: hostNextSibling, setScopeId: hostSetScopeId = NOOP, insertStaticContent: hostInsertStaticContent } = options;
	const patch = (n1, n2, container, anchor = null, parentComponent = null, parentSuspense = null, namespace = void 0, slotScopeIds = null, optimized = !!n2.dynamicChildren) => {
		if (n1 === n2) return;
		if (n1 && !isSameVNodeType(n1, n2)) {
			anchor = /* @__PURE__ */ getNextHostNode(n1);
			unmount(n1, parentComponent, parentSuspense, true);
			n1 = null;
		}
		if (n2.patchFlag === -2) {
			optimized = false;
			n2.dynamicChildren = null;
		}
		const { type, ref: ref$3, shapeFlag } = n2;
		switch (type) {
			case Text:
				processText(n1, n2, container, anchor);
				break;
			case Comment:
				processCommentNode(n1, n2, container, anchor);
				break;
			case Static:
				if (n1 == null) mountStaticNode(n2, container, anchor, namespace);
				break;
			case Fragment:
				processFragment(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
				break;
			default: if (shapeFlag & 1) processElement(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
			else if (shapeFlag & 6) processComponent(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
			else if (shapeFlag & 64) type.process(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, internals);
			else if (shapeFlag & 128) type.process(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, internals);
		}
		if (ref$3 != null && parentComponent) setRef(ref$3, n1 && n1.ref, parentSuspense, n2 || n1, !n2);
		else if (ref$3 == null && n1 && n1.ref != null) setRef(n1.ref, null, parentSuspense, n1, true);
	};
	const processText = (n1, n2, container, anchor) => {
		if (n1 == null) hostInsert(n2.el = /* @__PURE__ */ hostCreateText(n2.children), container, anchor);
		else {
			const el = n2.el = n1.el;
			if (n2.children !== n1.children) hostSetText(el, n2.children);
		}
	};
	const processCommentNode = (n1, n2, container, anchor) => {
		if (n1 == null) hostInsert(n2.el = /* @__PURE__ */ hostCreateComment(n2.children || ""), container, anchor);
		else n2.el = n1.el;
	};
	const mountStaticNode = (n2, container, anchor, namespace) => {
		[n2.el, n2.anchor] = /* @__PURE__ */ hostInsertStaticContent(n2.children, container, anchor, namespace, n2.el, n2.anchor);
	};
	const moveStaticNode = ({ el, anchor }, container, nextSibling) => {
		let next;
		while (el && el !== anchor) {
			next = /* @__PURE__ */ hostNextSibling(el);
			hostInsert(el, container, nextSibling);
			el = next;
		}
		hostInsert(anchor, container, nextSibling);
	};
	const removeStaticNode = ({ el, anchor }) => {
		let next;
		while (el && el !== anchor) {
			next = /* @__PURE__ */ hostNextSibling(el);
			hostRemove(el);
			el = next;
		}
		hostRemove(anchor);
	};
	const processElement = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
		if (n2.type === "svg") namespace = "svg";
		else if (n2.type === "math") namespace = "mathml";
		if (n1 == null) mountElement(n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
		else patchElement(n1, n2, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
	};
	const mountElement = (vnode, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
		let el;
		let vnodeHook;
		const { props, shapeFlag, transition, dirs } = vnode;
		el = vnode.el = /* @__PURE__ */ hostCreateElement(vnode.type, namespace, props && props.is, props);
		if (shapeFlag & 8) hostSetElementText(el, vnode.children);
		else if (shapeFlag & 16) mountChildren(vnode.children, el, null, parentComponent, parentSuspense, /* @__PURE__ */ resolveChildrenNamespace(vnode, namespace), slotScopeIds, optimized);
		if (dirs) invokeDirectiveHook(vnode, null, parentComponent, "created");
		setScopeId(el, vnode, vnode.scopeId, slotScopeIds, parentComponent);
		if (props) {
			for (const key in props) if (key !== "value" && !isReservedProp(key)) hostPatchProp(el, key, null, props[key], namespace, parentComponent);
			if ("value" in props) hostPatchProp(el, "value", null, props.value, namespace);
			if (vnodeHook = props.onVnodeBeforeMount) invokeVNodeHook(vnodeHook, parentComponent, vnode);
		}
		if (dirs) invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
		const needCallTransitionHooks = /* @__PURE__ */ needTransition(parentSuspense, transition);
		if (needCallTransitionHooks) transition.beforeEnter(el);
		hostInsert(el, container, anchor);
		if ((vnodeHook = props && props.onVnodeMounted) || needCallTransitionHooks || dirs) queuePostRenderEffect(() => {
			vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
			needCallTransitionHooks && transition.enter(el);
			dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
		}, parentSuspense);
	};
	const setScopeId = (el, vnode, scopeId, slotScopeIds, parentComponent) => {
		if (scopeId) hostSetScopeId(el, scopeId);
		if (slotScopeIds) for (let i = 0; i < slotScopeIds.length; i++) hostSetScopeId(el, slotScopeIds[i]);
		if (parentComponent) {
			let subTree = parentComponent.subTree;
			if (vnode === subTree || isSuspense(subTree.type) && (subTree.ssContent === vnode || subTree.ssFallback === vnode)) {
				const parentVNode = parentComponent.vnode;
				setScopeId(el, parentVNode, parentVNode.scopeId, parentVNode.slotScopeIds, parentComponent.parent);
			}
		}
	};
	const mountChildren = (children, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, start = 0) => {
		for (let i = start; i < children.length; i++) patch(null, children[i] = optimized ? cloneIfMounted(children[i]) : normalizeVNode(children[i]), container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
	};
	const patchElement = (n1, n2, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
		const el = n2.el = n1.el;
		let { patchFlag, dynamicChildren, dirs } = n2;
		patchFlag |= n1.patchFlag & 16;
		const oldProps = n1.props || EMPTY_OBJ;
		const newProps = n2.props || EMPTY_OBJ;
		let vnodeHook;
		parentComponent && toggleRecurse(parentComponent, false);
		if (vnodeHook = newProps.onVnodeBeforeUpdate) invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
		if (dirs) invokeDirectiveHook(n2, n1, parentComponent, "beforeUpdate");
		parentComponent && toggleRecurse(parentComponent, true);
		if (oldProps.innerHTML && newProps.innerHTML == null || oldProps.textContent && newProps.textContent == null) hostSetElementText(el, "");
		if (dynamicChildren) patchBlockChildren(n1.dynamicChildren, dynamicChildren, el, parentComponent, parentSuspense, /* @__PURE__ */ resolveChildrenNamespace(n2, namespace), slotScopeIds);
		else if (!optimized) patchChildren(n1, n2, el, null, parentComponent, parentSuspense, /* @__PURE__ */ resolveChildrenNamespace(n2, namespace), slotScopeIds, false);
		if (patchFlag > 0) {
			if (patchFlag & 16) patchProps(el, oldProps, newProps, parentComponent, namespace);
			else {
				if (patchFlag & 2) {
					if (oldProps.class !== newProps.class) hostPatchProp(el, "class", null, newProps.class, namespace);
				}
				if (patchFlag & 4) hostPatchProp(el, "style", oldProps.style, newProps.style, namespace);
				if (patchFlag & 8) {
					const propsToUpdate = n2.dynamicProps;
					for (let i = 0; i < propsToUpdate.length; i++) {
						const key = propsToUpdate[i];
						const prev = oldProps[key];
						const next = newProps[key];
						if (next !== prev || key === "value") hostPatchProp(el, key, prev, next, namespace, parentComponent);
					}
				}
			}
			if (patchFlag & 1) {
				if (n1.children !== n2.children) hostSetElementText(el, n2.children);
			}
		} else if (!optimized && dynamicChildren == null) patchProps(el, oldProps, newProps, parentComponent, namespace);
		if ((vnodeHook = newProps.onVnodeUpdated) || dirs) queuePostRenderEffect(() => {
			vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
			dirs && invokeDirectiveHook(n2, n1, parentComponent, "updated");
		}, parentSuspense);
	};
	const patchBlockChildren = (oldChildren, newChildren, fallbackContainer, parentComponent, parentSuspense, namespace, slotScopeIds) => {
		for (let i = 0; i < newChildren.length; i++) {
			const oldVNode = oldChildren[i];
			const newVNode = newChildren[i];
			patch(oldVNode, newVNode, oldVNode.el && (oldVNode.type === Fragment || !isSameVNodeType(oldVNode, newVNode) || oldVNode.shapeFlag & 198) ? hostParentNode(oldVNode.el) : fallbackContainer, null, parentComponent, parentSuspense, namespace, slotScopeIds, true);
		}
	};
	const patchProps = (el, oldProps, newProps, parentComponent, namespace) => {
		if (oldProps !== newProps) {
			if (oldProps !== EMPTY_OBJ) {
				for (const key in oldProps) if (!isReservedProp(key) && !(key in newProps)) hostPatchProp(el, key, oldProps[key], null, namespace, parentComponent);
			}
			for (const key in newProps) {
				if (isReservedProp(key)) continue;
				const next = newProps[key];
				const prev = oldProps[key];
				if (next !== prev && key !== "value") hostPatchProp(el, key, prev, next, namespace, parentComponent);
			}
			if ("value" in newProps) hostPatchProp(el, "value", oldProps.value, newProps.value, namespace);
		}
	};
	const processFragment = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
		const fragmentStartAnchor = n2.el = n1 ? n1.el : hostCreateText("");
		const fragmentEndAnchor = n2.anchor = n1 ? n1.anchor : hostCreateText("");
		let { patchFlag, dynamicChildren, slotScopeIds: fragmentSlotScopeIds } = n2;
		if (fragmentSlotScopeIds) slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
		if (n1 == null) {
			hostInsert(fragmentStartAnchor, container, anchor);
			hostInsert(fragmentEndAnchor, container, anchor);
			mountChildren(n2.children || [], container, fragmentEndAnchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
		} else if (patchFlag > 0 && patchFlag & 64 && dynamicChildren && n1.dynamicChildren) {
			patchBlockChildren(n1.dynamicChildren, dynamicChildren, container, parentComponent, parentSuspense, namespace, slotScopeIds);
			if (n2.key != null || parentComponent && n2 === parentComponent.subTree) traverseStaticChildren(n1, n2, true);
		} else patchChildren(n1, n2, container, fragmentEndAnchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
	};
	const processComponent = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
		n2.slotScopeIds = slotScopeIds;
		if (n1 == null) if (n2.shapeFlag & 512) parentComponent.ctx.activate(n2, container, anchor, namespace, optimized);
		else mountComponent(n2, container, anchor, parentComponent, parentSuspense, namespace, optimized);
		else updateComponent(n1, n2, optimized);
	};
	const mountComponent = (initialVNode, container, anchor, parentComponent, parentSuspense, namespace, optimized) => {
		const instance = initialVNode.component = /* @__PURE__ */ createComponentInstance(initialVNode, parentComponent, parentSuspense);
		if (isKeepAlive(initialVNode)) instance.ctx.renderer = internals;
		setupComponent(instance, false, optimized);
		if (instance.asyncDep) {
			parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect, optimized);
			if (!initialVNode.el) {
				const placeholder = instance.subTree = /* @__PURE__ */ createVNode(Comment);
				processCommentNode(null, placeholder, container, anchor);
				initialVNode.placeholder = placeholder.el;
			}
		} else setupRenderEffect(instance, initialVNode, container, anchor, parentSuspense, namespace, optimized);
	};
	const updateComponent = (n1, n2, optimized) => {
		const instance = n2.component = n1.component;
		if (shouldUpdateComponent(n1, n2, optimized)) if (instance.asyncDep && !instance.asyncResolved) {
			updateComponentPreRender(instance, n2, optimized);
			return;
		} else {
			instance.next = n2;
			instance.update();
		}
		else {
			n2.el = n1.el;
			instance.vnode = n2;
		}
	};
	const setupRenderEffect = (instance, initialVNode, container, anchor, parentSuspense, namespace, optimized) => {
		const componentUpdateFn = () => {
			if (!instance.isMounted) {
				let vnodeHook;
				const { el, props } = initialVNode;
				const { bm, m, parent, root, type } = instance;
				const isAsyncWrapperVNode = /* @__PURE__ */ isAsyncWrapper(initialVNode);
				toggleRecurse(instance, false);
				if (bm) invokeArrayFns(bm);
				if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeBeforeMount)) invokeVNodeHook(vnodeHook, parent, initialVNode);
				toggleRecurse(instance, true);
				if (el && hydrateNode) {
					const hydrateSubTree = () => {
						instance.subTree = /* @__PURE__ */ renderComponentRoot(instance);
						hydrateNode(el, instance.subTree, instance, parentSuspense, null);
					};
					if (isAsyncWrapperVNode && type.__asyncHydrate) type.__asyncHydrate(el, instance, hydrateSubTree);
					else hydrateSubTree();
				} else {
					if (root.ce && root.ce._def.shadowRoot !== false) root.ce._injectChildStyle(type);
					const subTree = instance.subTree = /* @__PURE__ */ renderComponentRoot(instance);
					patch(null, subTree, container, anchor, instance, parentSuspense, namespace);
					initialVNode.el = subTree.el;
				}
				if (m) queuePostRenderEffect(m, parentSuspense);
				if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeMounted)) {
					const scopedInitialVNode = initialVNode;
					queuePostRenderEffect(() => invokeVNodeHook(vnodeHook, parent, scopedInitialVNode), parentSuspense);
				}
				if (initialVNode.shapeFlag & 256 || parent && isAsyncWrapper(parent.vnode) && parent.vnode.shapeFlag & 256) instance.a && queuePostRenderEffect(instance.a, parentSuspense);
				instance.isMounted = true;
				initialVNode = container = anchor = null;
			} else {
				let { next, bu, u, parent, vnode } = instance;
				{
					const nonHydratedAsyncRoot = /* @__PURE__ */ locateNonHydratedAsyncRoot(instance);
					if (nonHydratedAsyncRoot) {
						if (next) {
							next.el = vnode.el;
							updateComponentPreRender(instance, next, optimized);
						}
						nonHydratedAsyncRoot.asyncDep.then(() => {
							if (!instance.isUnmounted) componentUpdateFn();
						});
						return;
					}
				}
				let originNext = next;
				let vnodeHook;
				toggleRecurse(instance, false);
				if (next) {
					next.el = vnode.el;
					updateComponentPreRender(instance, next, optimized);
				} else next = vnode;
				if (bu) invokeArrayFns(bu);
				if (vnodeHook = next.props && next.props.onVnodeBeforeUpdate) invokeVNodeHook(vnodeHook, parent, next, vnode);
				toggleRecurse(instance, true);
				const nextTree = /* @__PURE__ */ renderComponentRoot(instance);
				const prevTree = instance.subTree;
				instance.subTree = nextTree;
				patch(prevTree, nextTree, /* @__PURE__ */ hostParentNode(prevTree.el), /* @__PURE__ */ getNextHostNode(prevTree), instance, parentSuspense, namespace);
				next.el = nextTree.el;
				if (originNext === null) updateHOCHostEl(instance, nextTree.el);
				if (u) queuePostRenderEffect(u, parentSuspense);
				if (vnodeHook = next.props && next.props.onVnodeUpdated) queuePostRenderEffect(() => invokeVNodeHook(vnodeHook, parent, next, vnode), parentSuspense);
			}
		};
		instance.scope.on();
		const effect$1 = instance.effect = new ReactiveEffect(componentUpdateFn);
		instance.scope.off();
		const update = instance.update = /* @__PURE__ */ effect$1.run.bind(effect$1);
		const job = instance.job = /* @__PURE__ */ effect$1.runIfDirty.bind(effect$1);
		job.i = instance;
		job.id = instance.uid;
		effect$1.scheduler = () => queueJob(job);
		toggleRecurse(instance, true);
		update();
	};
	const updateComponentPreRender = (instance, nextVNode, optimized) => {
		nextVNode.component = instance;
		const prevProps = instance.vnode.props;
		instance.vnode = nextVNode;
		instance.next = null;
		updateProps(instance, nextVNode.props, prevProps, optimized);
		updateSlots(instance, nextVNode.children, optimized);
		pauseTracking();
		flushPreFlushCbs(instance);
		resetTracking();
	};
	const patchChildren = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized = false) => {
		const c1 = n1 && n1.children;
		const prevShapeFlag = n1 ? n1.shapeFlag : 0;
		const c2 = n2.children;
		const { patchFlag, shapeFlag } = n2;
		if (patchFlag > 0) {
			if (patchFlag & 128) {
				patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
				return;
			} else if (patchFlag & 256) {
				patchUnkeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
				return;
			}
		}
		if (shapeFlag & 8) {
			if (prevShapeFlag & 16) unmountChildren(c1, parentComponent, parentSuspense);
			if (c2 !== c1) hostSetElementText(container, c2);
		} else if (prevShapeFlag & 16) if (shapeFlag & 16) patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
		else unmountChildren(c1, parentComponent, parentSuspense, true);
		else {
			if (prevShapeFlag & 8) hostSetElementText(container, "");
			if (shapeFlag & 16) mountChildren(c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
		}
	};
	const patchUnkeyedChildren = (c1, c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
		c1 = c1 || EMPTY_ARR;
		c2 = c2 || EMPTY_ARR;
		const oldLength = c1.length;
		const newLength = c2.length;
		const commonLength = /* @__PURE__ */ Math.min(oldLength, newLength);
		let i;
		for (i = 0; i < commonLength; i++) {
			const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
			patch(c1[i], nextChild, container, null, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
		}
		if (oldLength > newLength) unmountChildren(c1, parentComponent, parentSuspense, true, false, commonLength);
		else mountChildren(c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, commonLength);
	};
	const patchKeyedChildren = (c1, c2, container, parentAnchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
		let i = 0;
		const l2 = c2.length;
		let e1 = c1.length - 1;
		let e2 = l2 - 1;
		while (i <= e1 && i <= e2) {
			const n1 = c1[i];
			const n2 = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
			if (isSameVNodeType(n1, n2)) patch(n1, n2, container, null, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
			else break;
			i++;
		}
		while (i <= e1 && i <= e2) {
			const n1 = c1[e1];
			const n2 = c2[e2] = optimized ? cloneIfMounted(c2[e2]) : normalizeVNode(c2[e2]);
			if (isSameVNodeType(n1, n2)) patch(n1, n2, container, null, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
			else break;
			e1--;
			e2--;
		}
		if (i > e1) {
			if (i <= e2) {
				const nextPos = e2 + 1;
				const anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;
				while (i <= e2) {
					patch(null, c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]), container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
					i++;
				}
			}
		} else if (i > e2) while (i <= e1) {
			unmount(c1[i], parentComponent, parentSuspense, true);
			i++;
		}
		else {
			const s1 = i;
			const s2 = i;
			const keyToNewIndexMap = /* @__PURE__ */ new Map();
			for (i = s2; i <= e2; i++) {
				const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
				if (nextChild.key != null) keyToNewIndexMap.set(nextChild.key, i);
			}
			let j;
			let patched = 0;
			const toBePatched = e2 - s2 + 1;
			let moved = false;
			let maxNewIndexSoFar = 0;
			const newIndexToOldIndexMap = new Array(toBePatched);
			for (i = 0; i < toBePatched; i++) newIndexToOldIndexMap[i] = 0;
			for (i = s1; i <= e1; i++) {
				const prevChild = c1[i];
				if (patched >= toBePatched) {
					unmount(prevChild, parentComponent, parentSuspense, true);
					continue;
				}
				let newIndex;
				if (prevChild.key != null) newIndex = /* @__PURE__ */ keyToNewIndexMap.get(prevChild.key);
				else for (j = s2; j <= e2; j++) if (newIndexToOldIndexMap[j - s2] === 0 && isSameVNodeType(prevChild, c2[j])) {
					newIndex = j;
					break;
				}
				if (newIndex === void 0) unmount(prevChild, parentComponent, parentSuspense, true);
				else {
					newIndexToOldIndexMap[newIndex - s2] = i + 1;
					if (newIndex >= maxNewIndexSoFar) maxNewIndexSoFar = newIndex;
					else moved = true;
					patch(prevChild, c2[newIndex], container, null, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
					patched++;
				}
			}
			const increasingNewIndexSequence = moved ? getSequence(newIndexToOldIndexMap) : EMPTY_ARR;
			j = increasingNewIndexSequence.length - 1;
			for (i = toBePatched - 1; i >= 0; i--) {
				const nextIndex = s2 + i;
				const nextChild = c2[nextIndex];
				const anchorVNode = c2[nextIndex + 1];
				const anchor = nextIndex + 1 < l2 ? anchorVNode.el || anchorVNode.placeholder : parentAnchor;
				if (newIndexToOldIndexMap[i] === 0) patch(null, nextChild, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
				else if (moved) if (j < 0 || i !== increasingNewIndexSequence[j]) move(nextChild, container, anchor, 2);
				else j--;
			}
		}
	};
	const move = (vnode, container, anchor, moveType, parentSuspense = null) => {
		const { el, type, transition, children, shapeFlag } = vnode;
		if (shapeFlag & 6) {
			move(vnode.component.subTree, container, anchor, moveType);
			return;
		}
		if (shapeFlag & 128) {
			vnode.suspense.move(container, anchor, moveType);
			return;
		}
		if (shapeFlag & 64) {
			type.move(vnode, container, anchor, internals);
			return;
		}
		if (type === Fragment) {
			hostInsert(el, container, anchor);
			for (let i = 0; i < children.length; i++) move(children[i], container, anchor, moveType);
			hostInsert(vnode.anchor, container, anchor);
			return;
		}
		if (type === Static) {
			moveStaticNode(vnode, container, anchor);
			return;
		}
		if (moveType !== 2 && shapeFlag & 1 && transition) if (moveType === 0) {
			transition.beforeEnter(el);
			hostInsert(el, container, anchor);
			queuePostRenderEffect(() => transition.enter(el), parentSuspense);
		} else {
			const { leave, delayLeave, afterLeave } = transition;
			const remove2 = () => {
				if (vnode.ctx.isUnmounted) hostRemove(el);
				else hostInsert(el, container, anchor);
			};
			const performLeave = () => {
				if (el._isLeaving) el[leaveCbKey](true);
				leave(el, () => {
					remove2();
					afterLeave && afterLeave();
				});
			};
			if (delayLeave) delayLeave(el, remove2, performLeave);
			else performLeave();
		}
		else hostInsert(el, container, anchor);
	};
	const unmount = (vnode, parentComponent, parentSuspense, doRemove = false, optimized = false) => {
		const { type, props, ref: ref$3, children, dynamicChildren, shapeFlag, patchFlag, dirs, cacheIndex } = vnode;
		if (patchFlag === -2) optimized = false;
		if (ref$3 != null) {
			pauseTracking();
			setRef(ref$3, null, parentSuspense, vnode, true);
			resetTracking();
		}
		if (cacheIndex != null) parentComponent.renderCache[cacheIndex] = void 0;
		if (shapeFlag & 256) {
			parentComponent.ctx.deactivate(vnode);
			return;
		}
		const shouldInvokeDirs = shapeFlag & 1 && dirs;
		const shouldInvokeVnodeHook = !isAsyncWrapper(vnode);
		let vnodeHook;
		if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeBeforeUnmount)) invokeVNodeHook(vnodeHook, parentComponent, vnode);
		if (shapeFlag & 6) unmountComponent(vnode.component, parentSuspense, doRemove);
		else {
			if (shapeFlag & 128) {
				vnode.suspense.unmount(parentSuspense, doRemove);
				return;
			}
			if (shouldInvokeDirs) invokeDirectiveHook(vnode, null, parentComponent, "beforeUnmount");
			if (shapeFlag & 64) vnode.type.remove(vnode, parentComponent, parentSuspense, internals, doRemove);
			else if (dynamicChildren && !dynamicChildren.hasOnce && (type !== Fragment || patchFlag > 0 && patchFlag & 64)) unmountChildren(dynamicChildren, parentComponent, parentSuspense, false, true);
			else if (type === Fragment && patchFlag & 384 || !optimized && shapeFlag & 16) unmountChildren(children, parentComponent, parentSuspense);
			if (doRemove) remove$1(vnode);
		}
		if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeUnmounted) || shouldInvokeDirs) queuePostRenderEffect(() => {
			vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
			shouldInvokeDirs && invokeDirectiveHook(vnode, null, parentComponent, "unmounted");
		}, parentSuspense);
	};
	const remove$1 = (vnode) => {
		const { type, el, anchor, transition } = vnode;
		if (type === Fragment) {
			removeFragment(el, anchor);
			return;
		}
		if (type === Static) {
			removeStaticNode(vnode);
			return;
		}
		const performRemove = () => {
			hostRemove(el);
			if (transition && !transition.persisted && transition.afterLeave) transition.afterLeave();
		};
		if (vnode.shapeFlag & 1 && transition && !transition.persisted) {
			const { leave, delayLeave } = transition;
			const performLeave = () => leave(el, performRemove);
			if (delayLeave) delayLeave(vnode.el, performRemove, performLeave);
			else performLeave();
		} else performRemove();
	};
	const removeFragment = (cur, end) => {
		let next;
		while (cur !== end) {
			next = /* @__PURE__ */ hostNextSibling(cur);
			hostRemove(cur);
			cur = next;
		}
		hostRemove(end);
	};
	const unmountComponent = (instance, parentSuspense, doRemove) => {
		const { bum, scope, job, subTree, um, m, a } = instance;
		invalidateMount(m);
		invalidateMount(a);
		if (bum) invokeArrayFns(bum);
		scope.stop();
		if (job) {
			job.flags |= 8;
			unmount(subTree, instance, parentSuspense, doRemove);
		}
		if (um) queuePostRenderEffect(um, parentSuspense);
		queuePostRenderEffect(() => {
			instance.isUnmounted = true;
		}, parentSuspense);
	};
	const unmountChildren = (children, parentComponent, parentSuspense, doRemove = false, optimized = false, start = 0) => {
		for (let i = start; i < children.length; i++) unmount(children[i], parentComponent, parentSuspense, doRemove, optimized);
	};
	const getNextHostNode = (vnode) => {
		if (vnode.shapeFlag & 6) return getNextHostNode(vnode.component.subTree);
		if (vnode.shapeFlag & 128) return vnode.suspense.next();
		const el = /* @__PURE__ */ hostNextSibling(vnode.anchor || vnode.el);
		const teleportEnd = el && el[TeleportEndKey];
		return teleportEnd ? hostNextSibling(teleportEnd) : el;
	};
	let isFlushing = false;
	const render$1 = (vnode, container, namespace) => {
		if (vnode == null) {
			if (container._vnode) unmount(container._vnode, null, null, true);
		} else patch(container._vnode || null, vnode, container, null, null, null, namespace);
		container._vnode = vnode;
		if (!isFlushing) {
			isFlushing = true;
			flushPreFlushCbs();
			flushPostFlushCbs();
			isFlushing = false;
		}
	};
	const internals = {
		p: patch,
		um: unmount,
		m: move,
		r: remove$1,
		mt: mountComponent,
		mc: mountChildren,
		pc: patchChildren,
		pbc: patchBlockChildren,
		n: getNextHostNode,
		o: options
	};
	let hydrate;
	let hydrateNode;
	if (createHydrationFns) [hydrate, hydrateNode] = /* @__PURE__ */ createHydrationFns(internals);
	return {
		render: render$1,
		hydrate,
		createApp: /* @__PURE__ */ createAppAPI(render$1, hydrate)
	};
}
function resolveChildrenNamespace({ type, props }, currentNamespace) {
	return currentNamespace === "svg" && type === "foreignObject" || currentNamespace === "mathml" && type === "annotation-xml" && props && props.encoding && props.encoding.includes("html") ? void 0 : currentNamespace;
}
function toggleRecurse({ effect: effect$1, job }, allowed) {
	if (allowed) {
		effect$1.flags |= 32;
		job.flags |= 4;
	} else {
		effect$1.flags &= -33;
		job.flags &= -5;
	}
}
function needTransition(parentSuspense, transition) {
	return (!parentSuspense || parentSuspense && !parentSuspense.pendingBranch) && transition && !transition.persisted;
}
function traverseStaticChildren(n1, n2, shallow = false) {
	const ch1 = n1.children;
	const ch2 = n2.children;
	if (isArray$4(ch1) && isArray$4(ch2)) for (let i = 0; i < ch1.length; i++) {
		const c1 = ch1[i];
		let c2 = ch2[i];
		if (c2.shapeFlag & 1 && !c2.dynamicChildren) {
			if (c2.patchFlag <= 0 || c2.patchFlag === 32) {
				c2 = ch2[i] = /* @__PURE__ */ cloneIfMounted(ch2[i]);
				c2.el = c1.el;
			}
			if (!shallow && c2.patchFlag !== -2) traverseStaticChildren(c1, c2);
		}
		if (c2.type === Text && c2.patchFlag !== -1) c2.el = c1.el;
		if (c2.type === Comment && !c2.el) c2.el = c1.el;
	}
}
function getSequence(arr) {
	const p = /* @__PURE__ */ arr.slice();
	const result = [0];
	let i, j, u, v1, c;
	const len = arr.length;
	for (i = 0; i < len; i++) {
		const arrI = arr[i];
		if (arrI !== 0) {
			j = result[result.length - 1];
			if (arr[j] < arrI) {
				p[i] = j;
				result.push(i);
				continue;
			}
			u = 0;
			v1 = result.length - 1;
			while (u < v1) {
				c = u + v1 >> 1;
				if (arr[result[c]] < arrI) u = c + 1;
				else v1 = c;
			}
			if (arrI < arr[result[u]]) {
				if (u > 0) p[i] = result[u - 1];
				result[u] = i;
			}
		}
	}
	u = result.length;
	v1 = result[u - 1];
	while (u-- > 0) {
		result[u] = v1;
		v1 = p[v1];
	}
	return result;
}
function locateNonHydratedAsyncRoot(instance) {
	const subComponent = instance.subTree.component;
	if (subComponent) if (subComponent.asyncDep && !subComponent.asyncResolved) return subComponent;
	else return locateNonHydratedAsyncRoot(subComponent);
}
function invalidateMount(hooks) {
	if (hooks) for (let i = 0; i < hooks.length; i++) hooks[i].flags |= 8;
}
var ssrContextKey = /* @__PURE__ */ Symbol.for("v-scx");
var useSSRContext = () => {
	{
		const ctx = /* @__PURE__ */ inject(ssrContextKey);
		if (!ctx) {}
		return ctx;
	}
};
function watch(source, cb, options) {
	return doWatch(source, cb, options);
}
function doWatch(source, cb, options = EMPTY_OBJ) {
	const { immediate, deep, flush, once } = options;
	const baseWatchOptions = /* @__PURE__ */ extend({}, options);
	const runsImmediately = cb && immediate || !cb && flush !== "post";
	let ssrCleanup;
	if (isInSSRComponentSetup) {
		if (flush === "sync") {
			const ctx = /* @__PURE__ */ useSSRContext();
			ssrCleanup = ctx.__watcherHandles || (ctx.__watcherHandles = []);
		} else if (!runsImmediately) {
			const watchStopHandle = () => {};
			watchStopHandle.stop = NOOP;
			watchStopHandle.resume = NOOP;
			watchStopHandle.pause = NOOP;
			return watchStopHandle;
		}
	}
	const instance = currentInstance;
	baseWatchOptions.call = (fn, type, args) => callWithAsyncErrorHandling(fn, instance, type, args);
	let isPre = false;
	if (flush === "post") baseWatchOptions.scheduler = (job) => {
		queuePostRenderEffect(job, instance && instance.suspense);
	};
	else if (flush !== "sync") {
		isPre = true;
		baseWatchOptions.scheduler = (job, isFirstRun) => {
			if (isFirstRun) job();
			else queueJob(job);
		};
	}
	baseWatchOptions.augmentJob = (job) => {
		if (cb) job.flags |= 4;
		if (isPre) {
			job.flags |= 2;
			if (instance) {
				job.id = instance.uid;
				job.i = instance;
			}
		}
	};
	const watchHandle = /* @__PURE__ */ watch$1(source, cb, baseWatchOptions);
	if (isInSSRComponentSetup) {
		if (ssrCleanup) ssrCleanup.push(watchHandle);
		else if (runsImmediately) watchHandle();
	}
	return watchHandle;
}
function instanceWatch(source, value, options) {
	const publicThis = this.proxy;
	const getter = isString$1(source) ? source.includes(".") ? createPathGetter(publicThis, source) : () => publicThis[source] : source.bind(publicThis, publicThis);
	let cb;
	if (isFunction$3(value)) cb = value;
	else {
		cb = value.handler;
		options = value;
	}
	const reset = /* @__PURE__ */ setCurrentInstance(this);
	const res = /* @__PURE__ */ doWatch(getter, /* @__PURE__ */ cb.bind(publicThis), options);
	reset();
	return res;
}
function createPathGetter(ctx, path) {
	const segments = /* @__PURE__ */ path.split(".");
	return () => {
		let cur = ctx;
		for (let i = 0; i < segments.length && cur; i++) cur = cur[segments[i]];
		return cur;
	};
}
var getModelModifiers = (props, modelName) => {
	return modelName === "modelValue" || modelName === "model-value" ? props.modelModifiers : props[`${modelName}Modifiers`] || props[`${camelize(modelName)}Modifiers`] || props[`${hyphenate(modelName)}Modifiers`];
};
function emit(instance, event, ...rawArgs) {
	if (instance.isUnmounted) return;
	const props = instance.vnode.props || EMPTY_OBJ;
	let args = rawArgs;
	const isModelListener$1 = /* @__PURE__ */ event.startsWith("update:");
	const modifiers = isModelListener$1 && getModelModifiers(props, /* @__PURE__ */ event.slice(7));
	if (modifiers) {
		if (modifiers.trim) args = /* @__PURE__ */ rawArgs.map((a) => isString$1(a) ? a.trim() : a);
		if (modifiers.number) args = /* @__PURE__ */ rawArgs.map(looseToNumber);
	}
	let handlerName;
	let handler = props[handlerName = /* @__PURE__ */ toHandlerKey(event)] || props[handlerName = /* @__PURE__ */ toHandlerKey(/* @__PURE__ */ camelize(event))];
	if (!handler && isModelListener$1) handler = props[handlerName = /* @__PURE__ */ toHandlerKey(/* @__PURE__ */ hyphenate(event))];
	if (handler) callWithAsyncErrorHandling(handler, instance, 6, args);
	const onceHandler = props[handlerName + `Once`];
	if (onceHandler) {
		if (!instance.emitted) instance.emitted = {};
		else if (instance.emitted[handlerName]) return;
		instance.emitted[handlerName] = true;
		callWithAsyncErrorHandling(onceHandler, instance, 6, args);
	}
}
var mixinEmitsCache = /* @__PURE__ */ new WeakMap();
function normalizeEmitsOptions(comp, appContext, asMixin = false) {
	const cache = asMixin ? mixinEmitsCache : appContext.emitsCache;
	const cached = /* @__PURE__ */ cache.get(comp);
	if (cached !== void 0) return cached;
	const raw = comp.emits;
	let normalized = {};
	let hasExtends = false;
	if (!isFunction$3(comp)) {
		const extendEmits = (raw2) => {
			const normalizedFromExtend = /* @__PURE__ */ normalizeEmitsOptions(raw2, appContext, true);
			if (normalizedFromExtend) {
				hasExtends = true;
				extend(normalized, normalizedFromExtend);
			}
		};
		if (!asMixin && appContext.mixins.length) appContext.mixins.forEach(extendEmits);
		if (comp.extends) extendEmits(comp.extends);
		if (comp.mixins) comp.mixins.forEach(extendEmits);
	}
	if (!raw && !hasExtends) {
		if (isObject$1(comp)) cache.set(comp, null);
		return null;
	}
	if (isArray$4(raw)) raw.forEach((key) => normalized[key] = null);
	else extend(normalized, raw);
	if (isObject$1(comp)) cache.set(comp, normalized);
	return normalized;
}
function isEmitListener(options, key) {
	if (!options || !isOn(key)) return false;
	key = /* @__PURE__ */ key.slice(2).replace(/Once$/, "");
	return hasOwn(options, key[0].toLowerCase() + key.slice(1)) || hasOwn(options, /* @__PURE__ */ hyphenate(key)) || hasOwn(options, key);
}
function renderComponentRoot(instance) {
	const { type: Component, vnode, proxy, withProxy, propsOptions: [propsOptions], slots, attrs, emit: emit$1, render: render$1, renderCache, props, data, setupState, ctx, inheritAttrs } = instance;
	const prev = /* @__PURE__ */ setCurrentRenderingInstance(instance);
	let result;
	let fallthroughAttrs;
	try {
		if (vnode.shapeFlag & 4) {
			const proxyToUse = withProxy || proxy;
			const thisProxy = proxyToUse;
			result = /* @__PURE__ */ normalizeVNode(/* @__PURE__ */ render$1.call(thisProxy, proxyToUse, renderCache, props, setupState, data, ctx));
			fallthroughAttrs = attrs;
		} else {
			const render2 = Component;
			result = /* @__PURE__ */ normalizeVNode(render2.length > 1 ? render2(props, {
				attrs,
				slots,
				emit: emit$1
			}) : render2(props, null));
			fallthroughAttrs = Component.props ? attrs : getFunctionalFallthrough(attrs);
		}
	} catch (err) {
		blockStack.length = 0;
		handleError(err, instance, 1);
		result = /* @__PURE__ */ createVNode(Comment);
	}
	let root = result;
	if (fallthroughAttrs && inheritAttrs !== false) {
		const keys$1 = /* @__PURE__ */ Object.keys(fallthroughAttrs);
		const { shapeFlag } = root;
		if (keys$1.length) {
			if (shapeFlag & 7) {
				if (propsOptions && keys$1.some(isModelListener)) fallthroughAttrs = /* @__PURE__ */ filterModelListeners(fallthroughAttrs, propsOptions);
				root = /* @__PURE__ */ cloneVNode(root, fallthroughAttrs, false, true);
			}
		}
	}
	if (vnode.dirs) {
		root = /* @__PURE__ */ cloneVNode(root, null, false, true);
		root.dirs = root.dirs ? root.dirs.concat(vnode.dirs) : vnode.dirs;
	}
	if (vnode.transition) setTransitionHooks(root, vnode.transition);
	result = root;
	setCurrentRenderingInstance(prev);
	return result;
}
var getFunctionalFallthrough = (attrs) => {
	let res;
	for (const key in attrs) if (key === "class" || key === "style" || isOn(key)) (res || (res = {}))[key] = attrs[key];
	return res;
};
var filterModelListeners = (attrs, props) => {
	const res = {};
	for (const key in attrs) if (!isModelListener(key) || !(key.slice(9) in props)) res[key] = attrs[key];
	return res;
};
function shouldUpdateComponent(prevVNode, nextVNode, optimized) {
	const { props: prevProps, children: prevChildren, component: component$1 } = prevVNode;
	const { props: nextProps, children: nextChildren, patchFlag } = nextVNode;
	const emits = component$1.emitsOptions;
	if (nextVNode.dirs || nextVNode.transition) return true;
	if (optimized && patchFlag >= 0) {
		if (patchFlag & 1024) return true;
		if (patchFlag & 16) {
			if (!prevProps) return !!nextProps;
			return hasPropsChanged(prevProps, nextProps, emits);
		} else if (patchFlag & 8) {
			const dynamicProps = nextVNode.dynamicProps;
			for (let i = 0; i < dynamicProps.length; i++) {
				const key = dynamicProps[i];
				if (nextProps[key] !== prevProps[key] && !isEmitListener(emits, key)) return true;
			}
		}
	} else {
		if (prevChildren || nextChildren) {
			if (!nextChildren || !nextChildren.$stable) return true;
		}
		if (prevProps === nextProps) return false;
		if (!prevProps) return !!nextProps;
		if (!nextProps) return true;
		return hasPropsChanged(prevProps, nextProps, emits);
	}
	return false;
}
function hasPropsChanged(prevProps, nextProps, emitsOptions) {
	const nextKeys = /* @__PURE__ */ Object.keys(nextProps);
	if (nextKeys.length !== Object.keys(prevProps).length) return true;
	for (let i = 0; i < nextKeys.length; i++) {
		const key = nextKeys[i];
		if (nextProps[key] !== prevProps[key] && !isEmitListener(emitsOptions, key)) return true;
	}
	return false;
}
function updateHOCHostEl({ vnode, parent }, el) {
	while (parent) {
		const root = parent.subTree;
		if (root.suspense && root.suspense.activeBranch === vnode) root.el = vnode.el;
		if (root === vnode) {
			(vnode = parent.vnode).el = el;
			parent = parent.parent;
		} else break;
	}
}
var isSuspense = (type) => type.__isSuspense;
function queueEffectWithSuspense(fn, suspense) {
	if (suspense && suspense.pendingBranch) if (isArray$4(fn)) suspense.effects.push(...fn);
	else suspense.effects.push(fn);
	else queuePostFlushCb(fn);
}
var Fragment = /* @__PURE__ */ Symbol.for("v-fgt");
var Text = /* @__PURE__ */ Symbol.for("v-txt");
var Comment = /* @__PURE__ */ Symbol.for("v-cmt");
var Static = /* @__PURE__ */ Symbol.for("v-stc");
var blockStack = [];
var currentBlock = null;
var isBlockTreeEnabled = 1;
function setBlockTracking(value, inVOnce = false) {
	isBlockTreeEnabled += value;
	if (value < 0 && currentBlock && inVOnce) currentBlock.hasOnce = true;
}
function isVNode(value) {
	return value ? value.__v_isVNode === true : false;
}
function isSameVNodeType(n1, n2) {
	return n1.type === n2.type && n1.key === n2.key;
}
var normalizeKey = ({ key }) => key != null ? key : null;
var normalizeRef = ({ ref: ref$3, ref_key, ref_for }) => {
	if (typeof ref$3 === "number") ref$3 = "" + ref$3;
	return ref$3 != null ? isString$1(ref$3) || isRef(ref$3) || isFunction$3(ref$3) ? {
		i: currentRenderingInstance,
		r: ref$3,
		k: ref_key,
		f: !!ref_for
	} : ref$3 : null;
};
function createBaseVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, shapeFlag = type === Fragment ? 0 : 1, isBlockNode = false, needFullChildrenNormalization = false) {
	const vnode = {
		__v_isVNode: true,
		__v_skip: true,
		type,
		props,
		key: props && normalizeKey(props),
		ref: props && normalizeRef(props),
		scopeId: currentScopeId,
		slotScopeIds: null,
		children,
		component: null,
		suspense: null,
		ssContent: null,
		ssFallback: null,
		dirs: null,
		transition: null,
		el: null,
		anchor: null,
		target: null,
		targetStart: null,
		targetAnchor: null,
		staticCount: 0,
		shapeFlag,
		patchFlag,
		dynamicProps,
		dynamicChildren: null,
		appContext: null,
		ctx: currentRenderingInstance
	};
	if (needFullChildrenNormalization) {
		normalizeChildren(vnode, children);
		if (shapeFlag & 128) type.normalize(vnode);
	} else if (children) vnode.shapeFlag |= isString$1(children) ? 8 : 16;
	if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock && (vnode.patchFlag > 0 || shapeFlag & 6) && vnode.patchFlag !== 32) currentBlock.push(vnode);
	return vnode;
}
var createVNode = _createVNode;
function _createVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, isBlockNode = false) {
	if (!type || type === NULL_DYNAMIC_COMPONENT) type = Comment;
	if (isVNode(type)) {
		const cloned = /* @__PURE__ */ cloneVNode(type, props, true);
		if (children) normalizeChildren(cloned, children);
		if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock) if (cloned.shapeFlag & 6) currentBlock[currentBlock.indexOf(type)] = cloned;
		else currentBlock.push(cloned);
		cloned.patchFlag = -2;
		return cloned;
	}
	if (isClassComponent(type)) type = type.__vccOpts;
	if (props) {
		props = /* @__PURE__ */ guardReactiveProps(props);
		let { class: klass, style } = props;
		if (klass && !isString$1(klass)) props.class = /* @__PURE__ */ normalizeClass(klass);
		if (isObject$1(style)) {
			if (isProxy(style) && !isArray$4(style)) style = /* @__PURE__ */ extend({}, style);
			props.style = /* @__PURE__ */ normalizeStyle(style);
		}
	}
	const shapeFlag = isString$1(type) ? 1 : isSuspense(type) ? 128 : isTeleport(type) ? 64 : isObject$1(type) ? 4 : isFunction$3(type) ? 2 : 0;
	return createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, isBlockNode, true);
}
function guardReactiveProps(props) {
	if (!props) return null;
	return isProxy(props) || isInternalObject(props) ? extend({}, props) : props;
}
function cloneVNode(vnode, extraProps, mergeRef = false, cloneTransition = false) {
	const { props, ref: ref$3, patchFlag, children, transition } = vnode;
	const mergedProps = extraProps ? mergeProps(props || {}, extraProps) : props;
	const cloned = {
		__v_isVNode: true,
		__v_skip: true,
		type: vnode.type,
		props: mergedProps,
		key: mergedProps && normalizeKey(mergedProps),
		ref: extraProps && extraProps.ref ? mergeRef && ref$3 ? isArray$4(ref$3) ? ref$3.concat(/* @__PURE__ */ normalizeRef(extraProps)) : [ref$3, /* @__PURE__ */ normalizeRef(extraProps)] : normalizeRef(extraProps) : ref$3,
		scopeId: vnode.scopeId,
		slotScopeIds: vnode.slotScopeIds,
		children,
		target: vnode.target,
		targetStart: vnode.targetStart,
		targetAnchor: vnode.targetAnchor,
		staticCount: vnode.staticCount,
		shapeFlag: vnode.shapeFlag,
		patchFlag: extraProps && vnode.type !== Fragment ? patchFlag === -1 ? 16 : patchFlag | 16 : patchFlag,
		dynamicProps: vnode.dynamicProps,
		dynamicChildren: vnode.dynamicChildren,
		appContext: vnode.appContext,
		dirs: vnode.dirs,
		transition,
		component: vnode.component,
		suspense: vnode.suspense,
		ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
		ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
		placeholder: vnode.placeholder,
		el: vnode.el,
		anchor: vnode.anchor,
		ctx: vnode.ctx,
		ce: vnode.ce
	};
	if (transition && cloneTransition) setTransitionHooks(cloned, /* @__PURE__ */ transition.clone(cloned));
	return cloned;
}
function createTextVNode(text = " ", flag = 0) {
	return createVNode(Text, null, text, flag);
}
function normalizeVNode(child) {
	if (child == null || typeof child === "boolean") return createVNode(Comment);
	else if (isArray$4(child)) return createVNode(Fragment, null, /* @__PURE__ */ child.slice());
	else if (isVNode(child)) return cloneIfMounted(child);
	else return createVNode(Text, null, /* @__PURE__ */ String(child));
}
function cloneIfMounted(child) {
	return child.el === null && child.patchFlag !== -1 || child.memo ? child : cloneVNode(child);
}
function normalizeChildren(vnode, children) {
	let type = 0;
	const { shapeFlag } = vnode;
	if (children == null) children = null;
	else if (isArray$4(children)) type = 16;
	else if (typeof children === "object") if (shapeFlag & 65) {
		const slot = children.default;
		if (slot) {
			slot._c && (slot._d = false);
			normalizeChildren(vnode, /* @__PURE__ */ slot());
			slot._c && (slot._d = true);
		}
		return;
	} else {
		type = 32;
		const slotFlag = children._;
		if (!slotFlag && !isInternalObject(children)) children._ctx = currentRenderingInstance;
		else if (slotFlag === 3 && currentRenderingInstance) if (currentRenderingInstance.slots._ === 1) children._ = 1;
		else {
			children._ = 2;
			vnode.patchFlag |= 1024;
		}
	}
	else if (isFunction$3(children)) {
		children = {
			default: children,
			_ctx: currentRenderingInstance
		};
		type = 32;
	} else {
		children = /* @__PURE__ */ String(children);
		if (shapeFlag & 64) {
			type = 16;
			children = [/* @__PURE__ */ createTextVNode(children)];
		} else type = 8;
	}
	vnode.children = children;
	vnode.shapeFlag |= type;
}
function mergeProps(...args) {
	const ret = {};
	for (let i = 0; i < args.length; i++) {
		const toMerge = args[i];
		for (const key in toMerge) if (key === "class") {
			if (ret.class !== toMerge.class) ret.class = /* @__PURE__ */ normalizeClass([ret.class, toMerge.class]);
		} else if (key === "style") ret.style = /* @__PURE__ */ normalizeStyle([ret.style, toMerge.style]);
		else if (isOn(key)) {
			const existing = ret[key];
			const incoming = toMerge[key];
			if (incoming && existing !== incoming && !(isArray$4(existing) && existing.includes(incoming))) ret[key] = existing ? [].concat(existing, incoming) : incoming;
		} else if (key !== "") ret[key] = toMerge[key];
	}
	return ret;
}
function invokeVNodeHook(hook, instance, vnode, prevVNode = null) {
	callWithAsyncErrorHandling(hook, instance, 7, [vnode, prevVNode]);
}
var emptyAppContext = /* @__PURE__ */ createAppContext();
var uid = 0;
function createComponentInstance(vnode, parent, suspense) {
	const type = vnode.type;
	const appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
	const instance = {
		uid: uid++,
		vnode,
		type,
		parent,
		appContext,
		root: null,
		next: null,
		subTree: null,
		effect: null,
		update: null,
		job: null,
		scope: new EffectScope(true),
		render: null,
		proxy: null,
		exposed: null,
		exposeProxy: null,
		withProxy: null,
		provides: parent ? parent.provides : Object.create(appContext.provides),
		ids: parent ? parent.ids : [
			"",
			0,
			0
		],
		accessCache: null,
		renderCache: [],
		components: null,
		directives: null,
		propsOptions: /* @__PURE__ */ normalizePropsOptions(type, appContext),
		emitsOptions: /* @__PURE__ */ normalizeEmitsOptions(type, appContext),
		emit: null,
		emitted: null,
		propsDefaults: EMPTY_OBJ,
		inheritAttrs: type.inheritAttrs,
		ctx: EMPTY_OBJ,
		data: EMPTY_OBJ,
		props: EMPTY_OBJ,
		attrs: EMPTY_OBJ,
		slots: EMPTY_OBJ,
		refs: EMPTY_OBJ,
		setupState: EMPTY_OBJ,
		setupContext: null,
		suspense,
		suspenseId: suspense ? suspense.pendingId : 0,
		asyncDep: null,
		asyncResolved: false,
		isMounted: false,
		isUnmounted: false,
		isDeactivated: false,
		bc: null,
		c: null,
		bm: null,
		m: null,
		bu: null,
		u: null,
		um: null,
		bum: null,
		da: null,
		a: null,
		rtg: null,
		rtc: null,
		ec: null,
		sp: null
	};
	instance.ctx = { _: instance };
	instance.root = parent ? parent.root : instance;
	instance.emit = /* @__PURE__ */ emit.bind(null, instance);
	if (vnode.ce) vnode.ce(instance);
	return instance;
}
var currentInstance = null;
var getCurrentInstance = () => currentInstance || currentRenderingInstance;
var internalSetCurrentInstance;
var setInSSRSetupState;
{
	const g = /* @__PURE__ */ getGlobalThis();
	const registerGlobalSetter = (key, setter) => {
		let setters;
		if (!(setters = g[key])) setters = g[key] = [];
		setters.push(setter);
		return (v1) => {
			if (setters.length > 1) setters.forEach((set$2) => set$2(v1));
			else setters[0](v1);
		};
	};
	internalSetCurrentInstance = /* @__PURE__ */ registerGlobalSetter(`__VUE_INSTANCE_SETTERS__`, (v1) => currentInstance = v1);
	setInSSRSetupState = /* @__PURE__ */ registerGlobalSetter(`__VUE_SSR_SETTERS__`, (v1) => isInSSRComponentSetup = v1);
}
var setCurrentInstance = (instance) => {
	const prev = currentInstance;
	internalSetCurrentInstance(instance);
	instance.scope.on();
	return () => {
		instance.scope.off();
		internalSetCurrentInstance(prev);
	};
};
var unsetCurrentInstance = () => {
	currentInstance && currentInstance.scope.off();
	internalSetCurrentInstance(null);
};
function isStatefulComponent(instance) {
	return instance.vnode.shapeFlag & 4;
}
var isInSSRComponentSetup = false;
function setupComponent(instance, isSSR = false, optimized = false) {
	isSSR && setInSSRSetupState(isSSR);
	const { props, children } = instance.vnode;
	const isStateful = /* @__PURE__ */ isStatefulComponent(instance);
	initProps(instance, props, isStateful, isSSR);
	initSlots(instance, children, optimized || isSSR);
	const setupResult = isStateful ? setupStatefulComponent(instance, isSSR) : void 0;
	isSSR && setInSSRSetupState(false);
	return setupResult;
}
function setupStatefulComponent(instance, isSSR) {
	const Component = instance.type;
	instance.accessCache = /* @__PURE__ */ Object.create(null);
	instance.proxy = new Proxy(instance.ctx, PublicInstanceProxyHandlers);
	const { setup } = Component;
	if (setup) {
		pauseTracking();
		const setupContext = instance.setupContext = setup.length > 1 ? createSetupContext(instance) : null;
		const reset = /* @__PURE__ */ setCurrentInstance(instance);
		const setupResult = /* @__PURE__ */ callWithErrorHandling(setup, instance, 0, [instance.props, setupContext]);
		const isAsyncSetup = /* @__PURE__ */ isPromise$1(setupResult);
		resetTracking();
		reset();
		if ((isAsyncSetup || instance.sp) && !isAsyncWrapper(instance)) markAsyncBoundary(instance);
		if (isAsyncSetup) {
			setupResult.then(unsetCurrentInstance, unsetCurrentInstance);
			if (isSSR) return setupResult.then((resolvedResult) => {
				handleSetupResult(instance, resolvedResult, isSSR);
			}).catch((e) => {
				handleError(e, instance, 0);
			});
			else instance.asyncDep = setupResult;
		} else handleSetupResult(instance, setupResult, isSSR);
	} else finishComponentSetup(instance, isSSR);
}
function handleSetupResult(instance, setupResult, isSSR) {
	if (isFunction$3(setupResult)) if (instance.type.__ssrInlineRender) instance.ssrRender = setupResult;
	else instance.render = setupResult;
	else if (isObject$1(setupResult)) instance.setupState = /* @__PURE__ */ proxyRefs(setupResult);
	finishComponentSetup(instance, isSSR);
}
var compile;
var installWithProxy;
function finishComponentSetup(instance, isSSR, skipOptions) {
	const Component = instance.type;
	if (!instance.render) {
		if (!isSSR && compile && !Component.render) {
			const template = Component.template || resolveMergedOptions(instance).template;
			if (template) {
				const { isCustomElement, compilerOptions } = instance.appContext.config;
				const { delimiters, compilerOptions: componentCompilerOptions } = Component;
				Component.render = /* @__PURE__ */ compile(template, /* @__PURE__ */ extend(/* @__PURE__ */ extend({
					isCustomElement,
					delimiters
				}, compilerOptions), componentCompilerOptions));
			}
		}
		instance.render = Component.render || NOOP;
		if (installWithProxy) installWithProxy(instance);
	}
	{
		const reset = /* @__PURE__ */ setCurrentInstance(instance);
		pauseTracking();
		try {
			applyOptions(instance);
		} finally {
			resetTracking();
			reset();
		}
	}
}
var attrsProxyHandlers = { get(target, key) {
	track(target, "get", "");
	return target[key];
} };
function createSetupContext(instance) {
	const expose = (exposed) => {
		instance.exposed = exposed || {};
	};
	return {
		attrs: new Proxy(instance.attrs, attrsProxyHandlers),
		slots: instance.slots,
		emit: instance.emit,
		expose
	};
}
function getComponentPublicInstance(instance) {
	if (instance.exposed) return instance.exposeProxy || (instance.exposeProxy = new Proxy(proxyRefs(/* @__PURE__ */ markRaw(instance.exposed)), {
		get(target, key) {
			if (key in target) return target[key];
			else if (key in publicPropertiesMap) return publicPropertiesMap[key](instance);
		},
		has(target, key) {
			return key in target || key in publicPropertiesMap;
		}
	}));
	else return instance.proxy;
}
function isClassComponent(value) {
	return isFunction$3(value) && "__vccOpts" in value;
}
var computed = (getterOrOptions, debugOptions) => {
	return computed$1(getterOrOptions, debugOptions, isInSSRComponentSetup);
};
function h(type, propsOrChildren, children) {
	try {
		setBlockTracking(-1);
		const l = arguments.length;
		if (l === 2) if (isObject$1(propsOrChildren) && !isArray$4(propsOrChildren)) {
			if (isVNode(propsOrChildren)) return createVNode(type, null, [propsOrChildren]);
			return createVNode(type, propsOrChildren);
		} else return createVNode(type, null, propsOrChildren);
		else {
			if (l > 3) children = /* @__PURE__ */ Array.prototype.slice.call(arguments, 2);
			else if (l === 3 && isVNode(children)) children = [children];
			return createVNode(type, propsOrChildren, children);
		}
	} finally {
		setBlockTracking(1);
	}
}
var version = "3.5.22";
var NOTHING = /* @__PURE__ */ Symbol.for("immer-nothing");
var DRAFTABLE = /* @__PURE__ */ Symbol.for("immer-draftable");
var DRAFT_STATE = /* @__PURE__ */ Symbol.for("immer-state");
function die(error, ...args) {
	throw new Error(`[Immer] minified error nr: ${error}. Full error at: https://bit.ly/3cXEKWf`);
}
var getPrototypeOf$1 = Object.getPrototypeOf;
function isDraft(value) {
	return !!value && !!value[DRAFT_STATE];
}
function isDraftable(value) {
	if (!value) return false;
	return isPlainObject$1(value) || Array.isArray(value) || !!value[DRAFTABLE] || !!value.constructor?.[DRAFTABLE] || isMap(value) || isSet(value);
}
var objectCtorString = /* @__PURE__ */ Object.prototype.constructor.toString();
function isPlainObject$1(value) {
	if (!value || typeof value !== "object") return false;
	const proto = /* @__PURE__ */ getPrototypeOf$1(value);
	if (proto === null) return true;
	const Ctor = Object.hasOwnProperty.call(proto, "constructor") && proto.constructor;
	if (Ctor === Object) return true;
	return typeof Ctor == "function" && Function.toString.call(Ctor) === objectCtorString;
}
function each(obj, iter) {
	if (getArchtype(obj) === 0) Reflect.ownKeys(obj).forEach((key) => {
		iter(key, obj[key], obj);
	});
	else obj.forEach((entry, index) => iter(index, entry, obj));
}
function getArchtype(thing) {
	const state = thing[DRAFT_STATE];
	return state ? state.type_ : Array.isArray(thing) ? 1 : isMap(thing) ? 2 : isSet(thing) ? 3 : 0;
}
function has(thing, prop) {
	return getArchtype(thing) === 2 ? thing.has(prop) : Object.prototype.hasOwnProperty.call(thing, prop);
}
function set(thing, propOrOldValue, value) {
	const t = /* @__PURE__ */ getArchtype(thing);
	if (t === 2) thing.set(propOrOldValue, value);
	else if (t === 3) thing.add(value);
	else thing[propOrOldValue] = value;
}
function is(x, y) {
	if (x === y) return x !== 0 || 1 / x === 1 / y;
	else return x !== x && y !== y;
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
	if (isMap(base)) return new Map(base);
	if (isSet(base)) return new Set(base);
	if (Array.isArray(base)) return Array.prototype.slice.call(base);
	const isPlain = /* @__PURE__ */ isPlainObject$1(base);
	if (strict === true || strict === "class_only" && !isPlain) {
		const descriptors = /* @__PURE__ */ Object.getOwnPropertyDescriptors(base);
		delete descriptors[DRAFT_STATE];
		let keys$1 = /* @__PURE__ */ Reflect.ownKeys(descriptors);
		for (let i = 0; i < keys$1.length; i++) {
			const key = keys$1[i];
			const desc = descriptors[key];
			if (desc.writable === false) {
				desc.writable = true;
				desc.configurable = true;
			}
			if (desc.get || desc.set) descriptors[key] = {
				configurable: true,
				writable: true,
				enumerable: desc.enumerable,
				value: base[key]
			};
		}
		return Object.create(/* @__PURE__ */ getPrototypeOf$1(base), descriptors);
	} else {
		const proto = /* @__PURE__ */ getPrototypeOf$1(base);
		if (proto !== null && isPlain) return { ...base };
		const obj = /* @__PURE__ */ Object.create(proto);
		return Object.assign(obj, base);
	}
}
function freeze(obj, deep = false) {
	if (isFrozen(obj) || isDraft(obj) || !isDraftable(obj)) return obj;
	if (getArchtype(obj) > 1) Object.defineProperties(obj, {
		set: { value: dontMutateFrozenCollections },
		add: { value: dontMutateFrozenCollections },
		clear: { value: dontMutateFrozenCollections },
		delete: { value: dontMutateFrozenCollections }
	});
	Object.freeze(obj);
	if (deep) Object.values(obj).forEach((value) => freeze(value, true));
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
	if (!plugin) die(0, pluginKey);
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
	if (scope === currentScope) currentScope = scope.parent_;
}
function enterScope(immer2) {
	return currentScope = /* @__PURE__ */ createScope(currentScope, immer2);
}
function revokeDraft(draft) {
	const state = draft[DRAFT_STATE];
	if (state.type_ === 0 || state.type_ === 1) state.revoke_();
	else state.revoked_ = true;
}
function processResult(result, scope) {
	scope.unfinalizedDrafts_ = scope.drafts_.length;
	const baseDraft = scope.drafts_[0];
	if (result !== void 0 && result !== baseDraft) {
		if (baseDraft[DRAFT_STATE].modified_) {
			revokeScope(scope);
			die(4);
		}
		if (isDraftable(result)) {
			result = /* @__PURE__ */ finalize(scope, result);
			if (!scope.parent_) maybeFreeze(scope, result);
		}
		if (scope.patches_) getPlugin("Patches").generateReplacementPatches_(baseDraft[DRAFT_STATE].base_, result, scope.patches_, scope.inversePatches_);
	} else result = /* @__PURE__ */ finalize(scope, baseDraft, []);
	revokeScope(scope);
	if (scope.patches_) scope.patchListener_(scope.patches_, scope.inversePatches_);
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
		if (path && rootScope.patches_) getPlugin("Patches").generatePatches_(state, path, rootScope.patches_, rootScope.inversePatches_);
	}
	return state.copy_;
}
function finalizeProperty(rootScope, parentState, targetObject, prop, childValue, rootPath, targetIsSet) {
	if (isDraft(childValue)) {
		const res = /* @__PURE__ */ finalize(rootScope, childValue, rootPath && parentState && parentState.type_ !== 3 && !has(parentState.assigned_, prop) ? rootPath.concat(prop) : void 0);
		set(targetObject, prop, res);
		if (isDraft(res)) rootScope.canAutoFreeze_ = false;
		else return;
	} else if (targetIsSet) targetObject.add(childValue);
	if (isDraftable(childValue) && !isFrozen(childValue)) {
		if (!rootScope.immer_.autoFreeze_ && rootScope.unfinalizedDrafts_ < 1) return;
		finalize(rootScope, childValue);
		if ((!parentState || !parentState.scope_.parent_) && typeof prop !== "symbol" && (isMap(targetObject) ? targetObject.has(prop) : Object.prototype.propertyIsEnumerable.call(targetObject, prop))) maybeFreeze(rootScope, childValue);
	}
}
function maybeFreeze(scope, value, deep = false) {
	if (!scope.parent_ && scope.immer_.autoFreeze_ && scope.canAutoFreeze_) freeze(value, deep);
}
function createProxyProxy(base, parent) {
	const isArray$5 = /* @__PURE__ */ Array.isArray(base);
	const state = {
		type_: isArray$5 ? 1 : 0,
		scope_: parent ? parent.scope_ : getCurrentScope(),
		modified_: false,
		finalized_: false,
		assigned_: {},
		parent_: parent,
		base_: base,
		draft_: null,
		copy_: null,
		revoke_: null,
		isManual_: false
	};
	let target = state;
	let traps = objectTraps;
	if (isArray$5) {
		target = [state];
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
		const source = /* @__PURE__ */ latest(state);
		if (!has(source, prop)) return readPropFromProto(state, source, prop);
		const value = source[prop];
		if (state.finalized_ || !isDraftable(value)) return value;
		if (value === peek(state.base_, prop)) {
			prepareCopy(state);
			return state.copy_[prop] = /* @__PURE__ */ createProxy(value, state);
		}
		return value;
	},
	has(state, prop) {
		return prop in latest(state);
	},
	ownKeys(state) {
		return Reflect.ownKeys(/* @__PURE__ */ latest(state));
	},
	set(state, prop, value) {
		const desc = /* @__PURE__ */ getDescriptorFromProto(/* @__PURE__ */ latest(state), prop);
		if (desc?.set) {
			desc.set.call(state.draft_, value);
			return true;
		}
		if (!state.modified_) {
			const current2 = /* @__PURE__ */ peek(/* @__PURE__ */ latest(state), prop);
			const currentState = current2?.[DRAFT_STATE];
			if (currentState && currentState.base_ === value) {
				state.copy_[prop] = value;
				state.assigned_[prop] = false;
				return true;
			}
			if (is(value, current2) && (value !== void 0 || has(state.base_, prop))) return true;
			prepareCopy(state);
			markChanged(state);
		}
		if (state.copy_[prop] === value && (value !== void 0 || prop in state.copy_) || Number.isNaN(value) && Number.isNaN(state.copy_[prop])) return true;
		state.copy_[prop] = value;
		state.assigned_[prop] = true;
		return true;
	},
	deleteProperty(state, prop) {
		if (peek(state.base_, prop) !== void 0 || prop in state.base_) {
			state.assigned_[prop] = false;
			prepareCopy(state);
			markChanged(state);
		} else delete state.assigned_[prop];
		if (state.copy_) delete state.copy_[prop];
		return true;
	},
	getOwnPropertyDescriptor(state, prop) {
		const owner = /* @__PURE__ */ latest(state);
		const desc = /* @__PURE__ */ Reflect.getOwnPropertyDescriptor(owner, prop);
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
		return getPrototypeOf$1(state.base_);
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
	return (state ? latest(state) : draft)[prop];
}
function readPropFromProto(state, source, prop) {
	const desc = /* @__PURE__ */ getDescriptorFromProto(source, prop);
	return desc ? `value` in desc ? desc.value : desc.get?.call(state.draft_) : void 0;
}
function getDescriptorFromProto(source, prop) {
	if (!(prop in source)) return void 0;
	let proto = /* @__PURE__ */ getPrototypeOf$1(source);
	while (proto) {
		const desc = /* @__PURE__ */ Object.getOwnPropertyDescriptor(proto, prop);
		if (desc) return desc;
		proto = /* @__PURE__ */ getPrototypeOf$1(proto);
	}
}
function markChanged(state) {
	if (!state.modified_) {
		state.modified_ = true;
		if (state.parent_) markChanged(state.parent_);
	}
}
function prepareCopy(state) {
	if (!state.copy_) state.copy_ = /* @__PURE__ */ shallowCopy(state.base_, state.scope_.immer_.useStrictShallowCopy_);
}
var Immer2 = class {
	constructor(config$1) {
		this.autoFreeze_ = true;
		this.useStrictShallowCopy_ = false;
		this.produce = (base, recipe, patchListener) => {
			if (typeof base === "function" && typeof recipe !== "function") {
				const defaultBase = recipe;
				recipe = base;
				const self$1 = this;
				return function curriedProduce(base2 = defaultBase, ...args) {
					return self$1.produce(base2, (draft) => recipe.call(this, draft, ...args));
				};
			}
			if (typeof recipe !== "function") die(6);
			if (patchListener !== void 0 && typeof patchListener !== "function") die(7);
			let result;
			if (isDraftable(base)) {
				const scope = /* @__PURE__ */ enterScope(this);
				const proxy = /* @__PURE__ */ createProxy(base, void 0);
				let hasError = true;
				try {
					result = /* @__PURE__ */ recipe(proxy);
					hasError = false;
				} finally {
					if (hasError) revokeScope(scope);
					else leaveScope(scope);
				}
				usePatchesInScope(scope, patchListener);
				return processResult(result, scope);
			} else if (!base || typeof base !== "object") {
				result = /* @__PURE__ */ recipe(base);
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
			if (typeof base === "function") return (state, ...args) => this.produceWithPatches(state, (draft) => base(draft, ...args));
			let patches, inversePatches;
			return [
				/* @__PURE__ */ this.produce(base, recipe, (p, ip) => {
					patches = p;
					inversePatches = ip;
				}),
				patches,
				inversePatches
			];
		};
		if (typeof config$1?.autoFreeze === "boolean") this.setAutoFreeze(config$1.autoFreeze);
		if (typeof config$1?.useStrictShallowCopy === "boolean") this.setUseStrictShallowCopy(config$1.useStrictShallowCopy);
	}
	createDraft(base) {
		if (!isDraftable(base)) die(8);
		if (isDraft(base)) base = /* @__PURE__ */ current(base);
		const scope = /* @__PURE__ */ enterScope(this);
		const proxy = /* @__PURE__ */ createProxy(base, void 0);
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
	setAutoFreeze(value) {
		this.autoFreeze_ = value;
	}
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
		if (i > -1) patches = /* @__PURE__ */ patches.slice(i + 1);
		const applyPatchesImpl = getPlugin("Patches").applyPatches_;
		if (isDraft(base)) return applyPatchesImpl(base, patches);
		return this.produce(base, (draft) => applyPatchesImpl(draft, patches));
	}
};
function createProxy(value, parent) {
	const draft = isMap(value) ? getPlugin("MapSet").proxyMap_(value, parent) : isSet(value) ? getPlugin("MapSet").proxySet_(value, parent) : createProxyProxy(value, parent);
	(parent ? parent.scope_ : getCurrentScope()).drafts_.push(draft);
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
		copy = /* @__PURE__ */ shallowCopy(value, state.scope_.immer_.useStrictShallowCopy_);
	} else copy = /* @__PURE__ */ shallowCopy(value, true);
	each(copy, (key, childValue) => {
		set(copy, key, /* @__PURE__ */ currentImpl(childValue));
	});
	if (state) state.finalized_ = false;
	return copy;
}
var produce = new Immer2().produce;
var import_ReflectNoConflict = /* @__PURE__ */ __toESM(/* @__PURE__ */ (/* @__PURE__ */ __commonJSMin((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	var supportsSymbol = typeof Symbol === "function";
	var toPrimitiveSymbol = supportsSymbol && typeof Symbol.toPrimitive !== "undefined" ? Symbol.toPrimitive : fail("Symbol.toPrimitive not found.");
	var iteratorSymbol = supportsSymbol && typeof Symbol.iterator !== "undefined" ? Symbol.iterator : fail("Symbol.iterator not found.");
	var functionPrototype = /* @__PURE__ */ Object.getPrototypeOf(Function);
	var _Map = typeof Map === "function" && typeof Map.prototype.entries === "function" ? Map : fail("A valid Map constructor could not be found.");
	var _Set = typeof Set === "function" && typeof Set.prototype.entries === "function" ? Set : fail("A valid Set constructor could not be found.");
	var _WeakMap = typeof WeakMap === "function" ? WeakMap : fail("A valid WeakMap constructor could not be found.");
	var registrySymbol = supportsSymbol ? Symbol.for("@reflect-metadata:registry") : void 0;
	var metadataRegistry = /* @__PURE__ */ GetOrCreateMetadataRegistry();
	var metadataProvider = /* @__PURE__ */ CreateMetadataProvider(metadataRegistry);
	function defineMetadata(metadataKey, metadataValue, target, propertyKey) {
		if (!IsObject(target)) throw new TypeError();
		if (!IsUndefined(propertyKey)) propertyKey = /* @__PURE__ */ ToPropertyKey(propertyKey);
		return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
	}
	exports.defineMetadata = defineMetadata;
	function getMetadata(metadataKey, target, propertyKey) {
		if (!IsObject(target)) throw new TypeError();
		if (!IsUndefined(propertyKey)) propertyKey = /* @__PURE__ */ ToPropertyKey(propertyKey);
		return OrdinaryGetMetadata(metadataKey, target, propertyKey);
	}
	exports.getMetadata = getMetadata;
	function getMetadataKeys(target, propertyKey) {
		if (!IsObject(target)) throw new TypeError();
		if (!IsUndefined(propertyKey)) propertyKey = /* @__PURE__ */ ToPropertyKey(propertyKey);
		return OrdinaryMetadataKeys(target, propertyKey);
	}
	exports.getMetadataKeys = getMetadataKeys;
	function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
		var provider = /* @__PURE__ */ GetMetadataProvider(O, P, false);
		if (IsUndefined(provider)) return false;
		return ToBoolean(/* @__PURE__ */ provider.OrdinaryHasOwnMetadata(MetadataKey, O, P));
	}
	function OrdinaryGetMetadata(MetadataKey, O, P) {
		if (OrdinaryHasOwnMetadata(MetadataKey, O, P)) return OrdinaryGetOwnMetadata(MetadataKey, O, P);
		var parent = /* @__PURE__ */ OrdinaryGetPrototypeOf(O);
		if (!IsNull(parent)) return OrdinaryGetMetadata(MetadataKey, parent, P);
	}
	function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
		var provider = /* @__PURE__ */ GetMetadataProvider(O, P, false);
		if (IsUndefined(provider)) return;
		return provider.OrdinaryGetOwnMetadata(MetadataKey, O, P);
	}
	function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
		GetMetadataProvider(O, P, true).OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P);
	}
	function OrdinaryMetadataKeys(O, P) {
		var ownKeys = /* @__PURE__ */ OrdinaryOwnMetadataKeys(O, P);
		var parent = /* @__PURE__ */ OrdinaryGetPrototypeOf(O);
		if (parent === null) return ownKeys;
		var parentKeys = /* @__PURE__ */ OrdinaryMetadataKeys(parent, P);
		if (parentKeys.length <= 0) return ownKeys;
		if (ownKeys.length <= 0) return parentKeys;
		var set$2 = new _Set();
		var keys$1 = [];
		for (var _i = 0, ownKeys_1 = ownKeys; _i < ownKeys_1.length; _i++) {
			var key = ownKeys_1[_i];
			var hasKey = /* @__PURE__ */ set$2.has(key);
			if (!hasKey) {
				set$2.add(key);
				keys$1.push(key);
			}
		}
		for (var _a = 0, parentKeys_1 = parentKeys; _a < parentKeys_1.length; _a++) {
			var key = parentKeys_1[_a];
			var hasKey = /* @__PURE__ */ set$2.has(key);
			if (!hasKey) {
				set$2.add(key);
				keys$1.push(key);
			}
		}
		return keys$1;
	}
	function OrdinaryOwnMetadataKeys(O, P) {
		var provider = /* @__PURE__ */ GetMetadataProvider(O, P, false);
		if (!provider) return [];
		return provider.OrdinaryOwnMetadataKeys(O, P);
	}
	function Type(x) {
		if (x === null) return 1;
		switch (typeof x) {
			case "undefined": return 0;
			case "boolean": return 2;
			case "string": return 3;
			case "symbol": return 4;
			case "number": return 5;
			case "object": return x === null ? 1 : 6;
			default: return 6;
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
			case 0: return input;
			case 1: return input;
			case 2: return input;
			case 3: return input;
			case 4: return input;
			case 5: return input;
		}
		var hint = PreferredType === 3 ? "string" : PreferredType === 5 ? "number" : "default";
		var exoticToPrim = /* @__PURE__ */ GetMethod(input, toPrimitiveSymbol);
		if (exoticToPrim !== void 0) {
			var result = /* @__PURE__ */ exoticToPrim.call(input, hint);
			if (IsObject(result)) throw new TypeError();
			return result;
		}
		return OrdinaryToPrimitive(input, hint === "default" ? "number" : hint);
	}
	function OrdinaryToPrimitive(O, hint) {
		if (hint === "string") {
			var toString_1 = O.toString;
			if (IsCallable(toString_1)) {
				var result = /* @__PURE__ */ toString_1.call(O);
				if (!IsObject(result)) return result;
			}
			var valueOf = O.valueOf;
			if (IsCallable(valueOf)) {
				var result = /* @__PURE__ */ valueOf.call(O);
				if (!IsObject(result)) return result;
			}
		} else {
			var valueOf = O.valueOf;
			if (IsCallable(valueOf)) {
				var result = /* @__PURE__ */ valueOf.call(O);
				if (!IsObject(result)) return result;
			}
			var toString_2 = O.toString;
			if (IsCallable(toString_2)) {
				var result = /* @__PURE__ */ toString_2.call(O);
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
		var key = /* @__PURE__ */ ToPrimitive(argument, 3);
		if (IsSymbol(key)) return key;
		return ToString(key);
	}
	function IsCallable(argument) {
		return typeof argument === "function";
	}
	function GetMethod(V, P) {
		var func = V[P];
		if (func === void 0 || func === null) return void 0;
		if (!IsCallable(func)) throw new TypeError();
		return func;
	}
	function GetIterator(obj) {
		var method = /* @__PURE__ */ GetMethod(obj, iteratorSymbol);
		if (!IsCallable(method)) throw new TypeError();
		var iterator$2 = /* @__PURE__ */ method.call(obj);
		if (!IsObject(iterator$2)) throw new TypeError();
		return iterator$2;
	}
	function IteratorValue(iterResult) {
		return iterResult.value;
	}
	function IteratorStep(iterator$2) {
		var result = /* @__PURE__ */ iterator$2.next();
		return result.done ? false : result;
	}
	function IteratorClose(iterator$2) {
		var f = iterator$2["return"];
		if (f) f.call(iterator$2);
	}
	function OrdinaryGetPrototypeOf(O) {
		var proto = /* @__PURE__ */ Object.getPrototypeOf(O);
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
		if (!IsUndefined(registrySymbol) && typeof Reflect !== "undefined" && !(registrySymbol in Reflect) && typeof Reflect.defineMetadata === "function") fallback = /* @__PURE__ */ CreateFallbackProvider(Reflect);
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
			if (!Object.isExtensible(registry)) throw new Error("Cannot add provider to a frozen registry.");
			switch (true) {
				case fallback === provider: break;
				case IsUndefined(first):
					first = provider;
					break;
				case first === provider: break;
				case IsUndefined(second):
					second = provider;
					break;
				case second === provider: break;
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
						var iterator$2 = /* @__PURE__ */ GetIterator(rest);
						while (true) {
							var next = /* @__PURE__ */ IteratorStep(iterator$2);
							if (!next) return;
							var provider = /* @__PURE__ */ IteratorValue(next);
							if (provider.isProviderFor(O, P)) {
								IteratorClose(iterator$2);
								return provider;
							}
						}
					}
				}
			}
			if (!IsUndefined(fallback) && fallback.isProviderFor(O, P)) return fallback;
		}
		function getProvider(O, P) {
			var providerMap = /* @__PURE__ */ targetProviderMap.get(O);
			var provider;
			if (!IsUndefined(providerMap)) provider = /* @__PURE__ */ providerMap.get(P);
			if (!IsUndefined(provider)) return provider;
			provider = /* @__PURE__ */ getProviderNoCache(O, P);
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
			return fallback === provider || first === provider || second === provider || !IsUndefined(rest) && rest.has(provider);
		}
		function setProvider(O, P, provider) {
			if (!hasProvider(provider)) throw new Error("Metadata provider not registered.");
			var existingProvider = /* @__PURE__ */ getProvider(O, P);
			if (existingProvider !== provider) {
				if (!IsUndefined(existingProvider)) return false;
				var providerMap = /* @__PURE__ */ targetProviderMap.get(O);
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
		var metadataRegistry$1;
		if (!IsUndefined(registrySymbol) && IsObject(Reflect) && Object.isExtensible(Reflect)) metadataRegistry$1 = Reflect[registrySymbol];
		if (IsUndefined(metadataRegistry$1)) metadataRegistry$1 = /* @__PURE__ */ CreateMetadataRegistry();
		if (!IsUndefined(registrySymbol) && IsObject(Reflect) && Object.isExtensible(Reflect)) Object.defineProperty(Reflect, registrySymbol, {
			enumerable: false,
			configurable: false,
			writable: false,
			value: metadataRegistry$1
		});
		return metadataRegistry$1;
	}
	function CreateMetadataProvider(registry) {
		var metadata = new _WeakMap();
		var provider = {
			isProviderFor: function(O, P) {
				var targetMetadata = /* @__PURE__ */ metadata.get(O);
				if (IsUndefined(targetMetadata)) return false;
				return targetMetadata.has(P);
			},
			OrdinaryDefineOwnMetadata: OrdinaryDefineOwnMetadata$1,
			OrdinaryHasOwnMetadata: OrdinaryHasOwnMetadata$1,
			OrdinaryGetOwnMetadata: OrdinaryGetOwnMetadata$1,
			OrdinaryOwnMetadataKeys: OrdinaryOwnMetadataKeys$1,
			OrdinaryDeleteMetadata
		};
		metadataRegistry.registerProvider(provider);
		return provider;
		function GetOrCreateMetadataMap(O, P, Create) {
			var targetMetadata = /* @__PURE__ */ metadata.get(O);
			var createdTargetMetadata = false;
			if (IsUndefined(targetMetadata)) {
				if (!Create) return void 0;
				targetMetadata = new _Map();
				metadata.set(O, targetMetadata);
				createdTargetMetadata = true;
			}
			var metadataMap = /* @__PURE__ */ targetMetadata.get(P);
			if (IsUndefined(metadataMap)) {
				if (!Create) return void 0;
				metadataMap = new _Map();
				targetMetadata.set(P, metadataMap);
				if (!registry.setProvider(O, P, provider)) {
					targetMetadata.delete(P);
					if (createdTargetMetadata) metadata.delete(O);
					throw new Error("Wrong provider for target.");
				}
			}
			return metadataMap;
		}
		function OrdinaryHasOwnMetadata$1(MetadataKey, O, P) {
			var metadataMap = /* @__PURE__ */ GetOrCreateMetadataMap(O, P, false);
			if (IsUndefined(metadataMap)) return false;
			return ToBoolean(/* @__PURE__ */ metadataMap.has(MetadataKey));
		}
		function OrdinaryGetOwnMetadata$1(MetadataKey, O, P) {
			var metadataMap = /* @__PURE__ */ GetOrCreateMetadataMap(O, P, false);
			if (IsUndefined(metadataMap)) return void 0;
			return metadataMap.get(MetadataKey);
		}
		function OrdinaryDefineOwnMetadata$1(MetadataKey, MetadataValue, O, P) {
			GetOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
		}
		function OrdinaryOwnMetadataKeys$1(O, P) {
			var keys$1 = [];
			var metadataMap = /* @__PURE__ */ GetOrCreateMetadataMap(O, P, false);
			if (IsUndefined(metadataMap)) return keys$1;
			var iterator$2 = /* @__PURE__ */ GetIterator(/* @__PURE__ */ metadataMap.keys());
			var k = 0;
			while (true) {
				var next = /* @__PURE__ */ IteratorStep(iterator$2);
				if (!next) {
					keys$1.length = k;
					return keys$1;
				}
				var nextValue = /* @__PURE__ */ IteratorValue(next);
				try {
					keys$1[k] = nextValue;
				} catch (e) {
					try {
						IteratorClose(iterator$2);
					} finally {
						throw e;
					}
				}
				k++;
			}
		}
		function OrdinaryDeleteMetadata(MetadataKey, O, P) {
			var metadataMap = /* @__PURE__ */ GetOrCreateMetadataMap(O, P, false);
			if (IsUndefined(metadataMap)) return false;
			if (!metadataMap.delete(MetadataKey)) return false;
			if (metadataMap.size === 0) {
				var targetMetadata = /* @__PURE__ */ metadata.get(O);
				if (!IsUndefined(targetMetadata)) {
					targetMetadata.delete(P);
					if (targetMetadata.size === 0) metadata.delete(targetMetadata);
				}
			}
			return true;
		}
	}
	function CreateFallbackProvider(reflect) {
		var defineMetadata$1 = reflect.defineMetadata, hasOwnMetadata = reflect.hasOwnMetadata, getOwnMetadata = reflect.getOwnMetadata, getOwnMetadataKeys = reflect.getOwnMetadataKeys, deleteMetadata = reflect.deleteMetadata;
		var metadataOwner = new _WeakMap();
		return {
			isProviderFor: function(O, P) {
				var metadataPropertySet = /* @__PURE__ */ metadataOwner.get(O);
				if (!IsUndefined(metadataPropertySet) && metadataPropertySet.has(P)) return true;
				if (getOwnMetadataKeys(O, P).length) {
					if (IsUndefined(metadataPropertySet)) {
						metadataPropertySet = new _Set();
						metadataOwner.set(O, metadataPropertySet);
					}
					metadataPropertySet.add(P);
					return true;
				}
				return false;
			},
			OrdinaryDefineOwnMetadata: defineMetadata$1,
			OrdinaryHasOwnMetadata: hasOwnMetadata,
			OrdinaryGetOwnMetadata: getOwnMetadata,
			OrdinaryOwnMetadataKeys: getOwnMetadataKeys,
			OrdinaryDeleteMetadata: deleteMetadata
		};
	}
	function GetMetadataProvider(O, P, Create) {
		var registeredProvider = /* @__PURE__ */ metadataRegistry.getProvider(O, P);
		if (!IsUndefined(registeredProvider)) return registeredProvider;
		if (Create) {
			if (metadataRegistry.setProvider(O, P, metadataProvider)) return metadataProvider;
			throw new Error("Illegal state.");
		}
	}
}))());
var Metadata = class {
	static getOwnPropertyNames(target) {
		return import_ReflectNoConflict.getMetadataKeys(target);
	}
	static get(target, propertyKey) {
		return import_ReflectNoConflict.getMetadata(propertyKey, target);
	}
	static define(target, propertyKey, valueOrFunc, defaults$1) {
		if (target && target.constructor && target.constructor != Object) {
			if (isFunction(valueOrFunc)) {
				import_ReflectNoConflict.defineMetadata(propertyKey, /* @__PURE__ */ produce(import_ReflectNoConflict.getMetadata(propertyKey, target) ?? defaults$1 ?? {}, valueOrFunc), target);
				return;
			}
			import_ReflectNoConflict.defineMetadata(propertyKey, valueOrFunc, target);
		}
	}
};
const isIterable$1 = (x) => {
	return typeof x == "object" && typeof x[Symbol.iterator] === "function";
};
const isClass = (x) => {
	return typeof x == "function" && `${x}`.startsWith("class");
};
const EmptyContext = {
	path: [],
	branch: []
};
var TypedError = class extends TypeError {
	value;
	key;
	type;
	refinement;
	path;
	branch;
	failures;
	constructor(failure, failures) {
		let cached;
		const { message, explanation,...rest } = failure;
		const { path } = failure;
		const msg = path.length === 0 ? message : `At path: ${path.join(".")} -- ${message}`;
		super(explanation ?? msg);
		if (explanation != null) this["cause"] = msg;
		Object.assign(this, rest);
		this.name = this.constructor.name;
		this.failures = () => {
			return cached ??= [failure, .../* @__PURE__ */ failures()];
		};
	}
};
const isType = (t) => {
	return !!t && t[SymbolType] == SymbolType;
};
const SymbolType = /* @__PURE__ */ Symbol("Type");
function shiftIterator(input) {
	const { done, value } = input.next();
	return done ? void 0 : value;
}
function toFailure(ret, context$1, t, inputValue) {
	if (ret === true) return;
	let result = {};
	if (ret === false) result = {};
	else if (isString(ret)) result = { message: ret };
	else result = ret;
	const { path, branch, node } = context$1;
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
function* toFailures(ret, context$1, t, inputValue) {
	let result = ret;
	if (!isIterable$1(result)) result = [result];
	for (const r of result) {
		const failure = /* @__PURE__ */ toFailure(r, context$1, t, inputValue);
		if (failure) yield failure;
	}
}
function validate(value, typed, options = {}) {
	const tuples = /* @__PURE__ */ run(value, typed, options);
	const tuple$1 = /* @__PURE__ */ shiftIterator(tuples);
	if (tuple$1[0]) return [new TypedError(tuple$1[0], function* () {
		for (const t of tuples) if (t[0]) yield t[0];
	}), void 0];
	return [void 0, tuple$1[1]];
}
function* run(inputValue, t, options = {}) {
	const { path = [], branch = [inputValue], node = { current: t }, coerce = false, mask = false } = options;
	const ctx = {
		mask,
		path,
		branch,
		node
	};
	let value = inputValue;
	if (coerce) {
		const v1 = /* @__PURE__ */ t.coercer(inputValue, ctx);
		if (v1 != void 0) value = v1;
	}
	let status = Status.valid;
	for (const failure of toFailures(/* @__PURE__ */ t.validator(value, ctx), ctx, t, inputValue)) {
		failure.explanation = options.message;
		status = Status.not_valid;
		yield [failure, void 0];
	}
	for (let [k, v1, st] of t.entries(value, ctx)) {
		const ts = /* @__PURE__ */ run(v1, st, {
			path: k === void 0 ? path : [...path, k],
			branch: k === void 0 ? branch : [...branch, v1],
			node: k === void 0 ? node : {
				current: st,
				parent: node
			},
			coerce,
			mask,
			message: options.message
		});
		for (const t$1 of ts) if (t$1[0]) {
			status = t$1[0].refinement != null ? Status.not_refined : Status.not_valid;
			yield [t$1[0], void 0];
		} else if (coerce) {
			v1 = t$1[1];
			if (k === void 0) value = v1;
			else if (value instanceof Map) value.set(k, v1);
			else if (value instanceof Set) value.add(v1);
			else if (isObjectLike(value)) value[k] = v1;
		}
	}
	if (status !== Status.not_valid) for (const failure of toFailures(/* @__PURE__ */ t.refiner(value, ctx), ctx, t, inputValue)) {
		failure.explanation = options.message;
		status = Status.not_refined;
		yield [failure, void 0];
	}
	if (status === Status.valid) yield [void 0, value];
}
var Status = /* @__PURE__ */ function(Status$1) {
	Status$1[Status$1["valid"] = 0] = "valid";
	Status$1[Status$1["not_refined"] = 1] = "not_refined";
	Status$1[Status$1["not_valid"] = 2] = "not_valid";
	return Status$1;
}(Status || {});
const defineType = (create) => {
	return (...args) => {
		const type = /* @__PURE__ */ create(...args);
		const propertyDecorator = (target, propertyKey) => {
			const current$1 = Metadata.get(target, propertyKey) ?? {};
			Metadata.define(target, propertyKey, {
				...current$1,
				type
			});
		};
		propertyDecorator.toString = () => `@type:${type.type}`;
		return new Proxy(propertyDecorator, {
			ownKeys() {
				return [.../* @__PURE__ */ Object.getOwnPropertyNames(type), .../* @__PURE__ */ Object.getOwnPropertySymbols(type)];
			},
			get(_, p) {
				return type[p];
			}
		});
	};
};
const defineModifier = (create) => {
	return (...args) => {
		const modifierFunc = (t) => create(t, ...args);
		const propertyDecorator = (target, prop) => {
			Metadata.define(target, prop, (m) => {
				(m.modifies ??= []).push({ modify: modifierFunc });
			}, {});
		};
		return new Proxy(propertyDecorator, { get(_, p) {
			if (p == "modify") return modifierFunc;
		} });
	};
};
var Schema = class Schema {
	static RecordKey = Symbol("RecordKey");
	static meta = Symbol("meta");
	static optional = Symbol("optional");
	static underlying = Symbol("underlying");
	static unwrap = Symbol("unwrap");
	static extractSchema = (v1) => {
		return new Collector().toValue(v1);
	};
	static extractMeta = (v1) => {
		return new Collector().toValue(v1["meta"] ?? v1[Schema.meta]);
	};
	static create(base, origin, scope) {
		const parent = origin ?? base[Schema.underlying]?.["schema"] ?? {};
		let meta;
		return new Proxy({}, {
			ownKeys(_) {
				const m = /* @__PURE__ */ new Map();
				if (scope) {
					if (base[scope]) for (const x of Object.getOwnPropertyNames(base[scope])) m.set(x, x);
					if (parent) {
						if (parent[scope]) for (const x of Object.getOwnPropertyNames(parent[scope])) m.set(x, x);
					}
				} else {
					for (const x of Object.getOwnPropertyNames(base)) m.set(x, x);
					if (parent) for (const x of Object.getOwnPropertyNames(parent)) m.set(x, x);
				}
				return [.../* @__PURE__ */ m.keys()];
			},
			get(_, p) {
				if (p === Schema.meta) return meta ??= /* @__PURE__ */ Schema.create(base, parent, Schema.meta);
				if (scope) {
					if (isObject(base)) {
						const v1 = base?.[scope]?.[p];
						if (!isUndefined(v1)) return v1;
					}
					return parent ? parent?.[scope]?.[p] : void 0;
				}
				if (isObject(base)) {
					const v1 = base?.[p];
					if (!isUndefined(v1)) return v1;
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
var getSchema = (schema, key) => {
	if (!isObject(schema)) return;
	return schema[key] ?? (schema[Schema.unwrap] ? getSchema(schema[Schema.unwrap]().schema, key) : void 0);
};
var getMeta = (schema, metaKey) => {
	if (!isObject(schema)) return;
	return schema[Schema.meta]?.[metaKey] ?? (schema[Schema.unwrap] ? getMeta(schema[Schema.unwrap]().schema, metaKey) : void 0);
};
var Collector = class {
	constructor(deref = false) {
		this.deref = deref;
	}
	toValue(v1) {
		if (v1) {
			if (!isUndefined(v1["schema"])) return this.toValue(v1["schema"]);
			if (this.deref) {
				if (v1[Schema.unwrap]) return this.toValue(/* @__PURE__ */ v1[Schema.unwrap]());
			}
			if (isArray(v1)) return this.toArray(v1);
			if (v1.constructor === Object) return this.toObject(v1);
		}
		return v1;
	}
	toObject(s) {
		const x = {};
		for (const k of Object.getOwnPropertyNames(s)) x[k] = /* @__PURE__ */ this.toValue(s[k]);
		return x;
	}
	toArray(values) {
		const arr = [];
		for (const value of values) arr.push(/* @__PURE__ */ this.toValue(value));
		return arr;
	}
};
var JSONPointer = class JSONPointer {
	static parse(pointer) {
		if (pointer === "") return [];
		if (pointer === "/") return [""];
		if (pointer.charAt(0) !== "/") throw new Error("Invalid JSON pointer: " + pointer);
		const parts = /* @__PURE__ */ pointer.substring(1).split(/\//);
		return parts.map((v1, i) => JSONPointer.unescape(v1, i === parts.length - 1));
	}
	static create(keyPath = []) {
		if (keyPath.length === 0) return "";
		return "/" + keyPath.map(JSONPointer.escape).join("/");
	}
	static unescape(str, last$3) {
		if (str == "" && last$3) return Schema.RecordKey;
		return str.replace(/~1/g, "/").replace(/~0/g, "~");
	}
	static escape(p) {
		if (p == Schema.RecordKey) return "";
		return p.toString().replace(/~/g, "~0").replace(/\//g, "~1");
	}
	static get(obj, pointerOrTokens) {
		const refTokens = Array.isArray(pointerOrTokens) ? pointerOrTokens : JSONPointer.parse(pointerOrTokens);
		for (let i = 0; i < refTokens.length; i++) {
			const tok = refTokens[i];
			if (i > 0 && tok == Schema.RecordKey) return refTokens[i - 1];
			if (!(typeof obj == "object" && tok in obj)) throw new Error("Invalid reference token: " + tok);
			obj = obj[tok];
		}
		return obj;
	}
};
var TypeUnknown = class TypeUnknown {
	static define = defineType((validator = () => true) => {
		class CustomType extends TypeUnknown {
			validator(value, ctx) {
				return validator(value, ctx);
			}
		}
		return new CustomType(null);
	});
	static fromTypeObject = (x, baseType) => {
		const t = x.type ?? baseType ?? new TypeUnknown({});
		if (x.modifies) return t.use(...x.modifies ?? []);
		return t;
	};
	[SymbolType] = SymbolType;
	schema;
	constructor(schema) {
		if (schema) {
			this.schema = /* @__PURE__ */ Schema.create(schema);
			return;
		}
		this.schema = schema ?? null;
	}
	get meta() {
		return this.schema ? this.schema[Schema.meta] : {};
	}
	get type() {
		return this.schema?.["type"] ?? "unknown";
	}
	refiner(_value, _context) {
		return [];
	}
	validator(_value, _context) {
		return [];
	}
	coercer(value, _context) {
		if (isString(value)) {
			const t = /* @__PURE__ */ value.trim();
			if (t.length >= 2) {
				if (t.startsWith("{") && t.endsWith("}")) try {
					return JSON.parse(t);
				} catch (e) {}
				if (t.startsWith("[") && t.endsWith("]")) try {
					return JSON.parse(t);
				} catch (e) {}
			}
		}
		return value;
	}
	*entries(_value, _context = EmptyContext) {}
	validate(value, options = {}) {
		return validate(value, this, options);
	}
	create(value) {
		const result = /* @__PURE__ */ validate(value, this, { coerce: true });
		if (result[0]) throw result[0];
		return result[1];
	}
	mask(value) {
		const result = /* @__PURE__ */ validate(value, this, {
			coerce: true,
			mask: true
		});
		if (result[0]) throw result[0];
		return result[1];
	}
	use(...modifiers) {
		return modifiers.reduce((t, m) => m.modify(t), this);
	}
	optional() {
		return OptionalType.create(this);
	}
	default(v1) {
		return DefaultedType.create(this, v1);
	}
};
var TypeWrapper = class TypeWrapper extends TypeUnknown {
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
				const failures = /* @__PURE__ */ toFailures(/* @__PURE__ */ refiner(value, ctx), ctx, t, value);
				for (const failure of failures) yield {
					...failure,
					refinement: /* @__PURE__ */ Object.keys(schema).join(",")
				};
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
	*entries(value, context$1 = EmptyContext) {
		yield* this.unwrap.entries(value, {
			...context$1,
			node: {
				current: this,
				parent: context$1.node
			}
		});
	}
	validator(value, context$1) {
		return toFailures(/* @__PURE__ */ this.unwrap.validator(value, context$1), context$1, this, value);
	}
	refiner(value, context$1) {
		return toFailures(/* @__PURE__ */ this.unwrap.refiner(value, context$1), context$1, this, value);
	}
	coercer(value, context$1) {
		return this.unwrap.coercer(value, context$1);
	}
};
var DefaultedType = class DefaultedType extends TypeWrapper {
	static create = defineType((t, defaultValue) => {
		return new DefaultedType({
			default: defaultValue,
			[Schema.underlying]: t
		});
	});
	coercer(value, context$1) {
		return typeof value === "undefined" ? this.schema.default : super.unwrap.coercer(value, context$1);
	}
};
var OptionalType = class OptionalType extends TypeWrapper {
	static create = defineType((t) => {
		return new OptionalType({
			[Schema.underlying]: t,
			[Schema.optional]: t
		});
	});
	refiner(value, context$1) {
		return value === void 0 || super.unwrap.refiner(value, context$1);
	}
	validator(value, context$1) {
		return value === void 0 || super.unwrap.validator(value, context$1);
	}
};
var TypeRef = class TypeRef extends TypeWrapper {
	static create = defineType((name, ref$3) => {
		return new TypeRef({
			$ref: name,
			[Schema.unwrap]: ref$3
		});
	});
};
var TypeAny = class TypeAny extends TypeUnknown {
	static create = defineType(() => {
		return new TypeAny();
	});
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
var TypeNull = class TypeNull extends TypeUnknown {
	static create = defineType(() => new TypeNull({ type: "null" }));
	get type() {
		return "null";
	}
	validator(value, _context) {
		return isNull(value);
	}
	coercer(value, _) {
		return value;
	}
};
var TypeString = class TypeString extends TypeUnknown {
	static create = defineType(() => {
		return new TypeString({ type: "string" });
	});
	get type() {
		return this.schema.type;
	}
	validator(value, _) {
		return isString(value);
	}
	coercer(value, _) {
		if (isUndefined(value) || isNull(value)) return value;
		return String(value);
	}
};
var TypeNumber = class TypeNumber extends TypeUnknown {
	static create = defineType(() => {
		return new TypeNumber({ type: "number" });
	});
	get type() {
		return this.schema.type;
	}
	validator(value, _) {
		return isNumber(value);
	}
	coercer(value, _) {
		try {
			const ret = value != void 0 ? parseFloat(/* @__PURE__ */ String(value)) : void 0;
			if (isNumber(ret)) return ret;
		} catch (err) {}
	}
};
var TypeInteger = class TypeInteger extends TypeUnknown {
	static create = defineType(() => {
		return new TypeInteger({ type: "integer" });
	});
	get type() {
		return this.schema.type;
	}
	validator(value, _) {
		return isInteger(value);
	}
	coercer(value, _) {
		try {
			const ret = value != void 0 ? parseInt(/* @__PURE__ */ String(value)) : void 0;
			return isInteger(ret) ? ret : void 0;
		} catch (err) {
			return;
		}
	}
};
var TypeBoolean = class TypeBoolean extends TypeUnknown {
	static create = defineType(() => {
		return new TypeBoolean({ type: "boolean" });
	});
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
			return;
		}
	}
};
var TypeBinary = class TypeBinary extends TypeUnknown {
	static create = defineType(() => {
		return new TypeBinary({
			type: "string",
			format: "binary"
		});
	});
	get type() {
		return "binary";
	}
	validator(value, _) {
		return value instanceof File || value instanceof Blob;
	}
	coercer(value, _) {
		return value;
	}
};
var TypeEnum = class TypeEnum extends TypeUnknown {
	static create = defineType(TypeEnum.createEnum);
	static createEnum(values) {
		return new TypeEnum({ enum: values });
	}
	static literal = defineType((constant) => {
		return new TypeEnum({ enum: [constant] });
	});
	static nativeEnum = defineType((nativeEnum$1) => {
		return new TypeEnum({ enum: /* @__PURE__ */ Object.values(nativeEnum$1) });
	});
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
var TypeNever = class TypeNever extends TypeUnknown {
	static create = defineType(() => {
		return new TypeNever(false);
	});
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
var TypeObject = class TypeObject extends TypeUnknown {
	static create(props) {
		const pickRequired = (props$1 = {}) => {
			const required = [];
			for (const [propName, propType] of Object.entries(props$1)) if (!Schema.schemaProp(propType, Schema.optional)) required.push(propName);
			return required;
		};
		return defineType(() => {
			if (props) {
				if (isClass(props)) {
					const t = new props();
					const properties = {};
					for (const [k, v1] of Object.entries(t)) properties[k] = /* @__PURE__ */ TypeEnum.literal(v1);
					for (const propName of Metadata.getOwnPropertyNames(t)) {
						const typeObject = /* @__PURE__ */ Metadata.get(t, propName);
						if (typeObject) {
							const propType = /* @__PURE__ */ TypeUnknown.fromTypeObject(typeObject, properties[propName]);
							if (propName in properties) properties[propName] = /* @__PURE__ */ propType.default(properties[propName].schema?.enum?.[0]);
							else properties[propName] = propType;
						}
					}
					return new TypeObject({
						type: "object",
						properties,
						required: /* @__PURE__ */ pickRequired(properties),
						additionalProperties: /* @__PURE__ */ TypeNever.create()
					});
				}
				return new TypeObject({
					type: "object",
					properties: props,
					required: /* @__PURE__ */ pickRequired(props),
					additionalProperties: /* @__PURE__ */ TypeNever.create()
				});
			}
			return new TypeObject({
				type: "object",
				properties: {},
				required: [],
				additionalProperties: /* @__PURE__ */ TypeNever.create()
			});
		})();
	}
	get type() {
		return this.schema.type;
	}
	*entries(value, ctx = EmptyContext) {
		if (isObjectLike(value)) {
			const propNames = new Set(Object.keys(value));
			if (this.schema.properties) for (const key in this.schema.properties) {
				propNames.delete(key);
				yield [
					key,
					value[key],
					this.schema.properties[key]
				];
			}
			if (ctx.node?.current.type !== "intersection") for (const key of propNames) yield [
				key,
				value[key],
				this.schema.additionalProperties
			];
		}
	}
	validator(value, _ctx) {
		return isObjectLike(value);
	}
	coercer(value, ctx) {
		if (isObjectLike(value)) {
			const v1 = { ...value };
			if (ctx.mask) {
				const properties = this.schema.properties;
				if (properties) {
					for (const key in v1) if (properties[key] === void 0) delete v1[key];
				}
			}
			return v1;
		}
		return super.coercer(value, ctx);
	}
};
var TypeRecord = class TypeRecord extends TypeUnknown {
	static create = defineType((k, v1) => {
		return new TypeRecord({
			type: "object",
			propertyNames: k,
			additionalProperties: v1
		});
	});
	get type() {
		return "record";
	}
	*entries(value) {
		if (isObjectLike(value)) for (const [k, v1] of Object.entries(value)) {
			yield [
				Schema.RecordKey,
				k,
				this.schema.propertyNames
			];
			yield [
				k,
				v1,
				this.schema.additionalProperties
			];
		}
	}
	validator(value) {
		return isObjectLike(value);
	}
};
var TypeArray = class TypeArray extends TypeUnknown {
	static create = defineType((items) => {
		return new TypeArray({
			type: "array",
			items
		});
	});
	get type() {
		return this.schema.type;
	}
	*entries(value, _ctx = EmptyContext) {
		if (Array.isArray(value)) for (const [i, v1] of value.entries()) yield [
			i,
			v1,
			this.schema.items
		];
	}
	validator(value) {
		return isArray(value);
	}
	coercer(value) {
		return isArray(value) ? value.slice() : value;
	}
};
var TypeTuple = class TypeTuple extends TypeUnknown {
	static create = defineType((values) => {
		return new TypeTuple({
			type: "array",
			items: values
		});
	});
	get type() {
		return "tuple";
	}
	*entries(value, _context) {
		if (isArray(value)) {
			const length = /* @__PURE__ */ Math.max(this.schema.items.length, value.length);
			for (let i = 0; i < length; i++) yield [
				i,
				value[i],
				this.schema.items[i] ?? TypeNever.create()
			];
		}
	}
	validator(value) {
		return isArray(value) && value.length === this.schema.items.length;
	}
	coercer(value) {
		return isArray(value) ? value.slice() : value;
	}
};
var TypeIntersection = class TypeIntersection extends TypeUnknown {
	static create = defineType((...types) => {
		return new TypeIntersection({ allOf: types });
	});
	get type() {
		return "intersection";
	}
	*entries(value, ctx = EmptyContext) {
		for (const t of this.schema.allOf) yield* t.entries(value, ctx);
	}
	*validator(value, ctx) {
		for (const t of this.schema.allOf) yield* toFailures(/* @__PURE__ */ t.validator(value, ctx), ctx, this, value);
	}
	*refiner(value, ctx) {
		for (const t of this.schema.allOf) yield* toFailures(/* @__PURE__ */ t.refiner(value, ctx), ctx, this, value);
	}
};
var TypeUnion = class TypeUnion extends TypeUnknown {
	static create = defineType((...types) => {
		return new TypeUnion({ oneOf: types });
	});
	static discriminatorMapping(discriminatorPropertyName, ...mapping) {
		return defineType(() => {
			const oneOf = [];
			if (mapping.length == 1 && mapping[0].constructor == Object) for (const [discriminatorValue, def$1] of Object.entries(mapping[0])) if (Schema.schemaProp(def$1, "$ref")) oneOf.push(def$1);
			else {
				const schema = { [discriminatorPropertyName]: /* @__PURE__ */ TypeEnum.literal(discriminatorValue) };
				for (const [prop, _, t] of def$1.entries({}, EmptyContext)) schema[String(prop)] = t;
				oneOf.push(/* @__PURE__ */ TypeObject.create(schema));
			}
			else for (const x of mapping) if (isClass(x)) oneOf.push(/* @__PURE__ */ TypeObject.create(x));
			return new TypeUnion({
				oneOf,
				discriminator: { propertyName: discriminatorPropertyName }
			});
		})();
	}
	_discriminatorPropName;
	discriminatorPropType(ctx) {
		return this._discriminatorPropName ??= /* @__PURE__ */ (() => {
			const discriminatorPropName = this.schema.discriminator?.propertyName ?? "";
			const values = [];
			const metas = [];
			for (const x of this.schema.oneOf) {
				const p = Schema.schemaProp(x, "properties")[discriminatorPropName];
				if (!p) continue;
				const e = p.schema["enum"];
				if (e) values.push(...e);
				metas.push(p.meta);
			}
			return TypeWrapper.of(/* @__PURE__ */ TypeEnum.create(values), { [Schema.meta]: /* @__PURE__ */ Schema.create(metas[0], ctx.node?.current.meta ?? {}) });
		})();
	}
	_discriminatorMappingProps = /* @__PURE__ */ new Map();
	discriminatorMapping(discriminatorPropName, discriminatorPropValue, ctx) {
		if (this._discriminatorMappingProps.get(discriminatorPropValue)) return this._discriminatorMappingProps.get(discriminatorPropValue);
		if ((this.discriminatorPropType(ctx)?.schema?.["enum"] ?? []).includes(discriminatorPropValue)) {
			const matched = /* @__PURE__ */ this.schema.oneOf.find((s) => {
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
					for (const [prop, t] of Object.entries(/* @__PURE__ */ Schema.schemaProp(matched, "properties"))) {
						if (prop === discriminatorPropName) continue;
						props[prop] = t;
					}
					this._discriminatorMappingProps.set(discriminatorPropValue, props);
				}
				return this._discriminatorMappingProps.get(discriminatorPropValue);
			}
		}
		return {};
	}
	*entries(value, context$1 = EmptyContext) {
		if (this.schema.discriminator) {
			const discriminatorPropName = this.schema.discriminator.propertyName;
			const discriminatorPropValue = value?.[discriminatorPropName];
			yield* TypeObject.create({
				[discriminatorPropName]: /* @__PURE__ */ this.discriminatorPropType(context$1),
				...this.discriminatorMapping(discriminatorPropName, discriminatorPropValue, context$1)
			}).entries(value, context$1);
		}
	}
	get type() {
		return "union";
	}
	coercer(value) {
		for (const t of this.schema.oneOf) {
			const [error, coerced] = validate(value, t, { coerce: true });
			if (!error) return coerced;
		}
		return value;
	}
	validator(value, context$1) {
		if (this.schema.discriminator) {
			const discriminatorPropName = this.schema.discriminator.propertyName;
			const discriminatorPropValue = value?.[discriminatorPropName];
			return TypeObject.create({
				[discriminatorPropName]: /* @__PURE__ */ this.discriminatorPropType(context$1),
				...this.discriminatorMapping(discriminatorPropName, discriminatorPropValue, context$1)
			}).validator(value, context$1);
		}
		const failures = [];
		for (const t of this.schema.oneOf) {
			const [ ...tuples] = run(value, t, context$1);
			const [first] = tuples;
			if (first && !first[0]) return [];
			for (const [failure] of tuples) if (failure) failures.push(failure);
		}
		return [`Expected the value to satisfy a union of \`${this.schema.oneOf.map((t) => t.type).join(" | ")}\`, but received: ${value}`, ...failures];
	}
};
TypeRef.create;
const any = TypeAny.create;
TypeNever.create;
TypeNull.create;
const string = TypeString.create;
const minLength = /* @__PURE__ */ defineModifier((type, min, msg) => {
	return TypeWrapper.refine(type, (value) => {
		if (value && value.length >= min) return true;
		return msg ?? `Expected string value length great than or equal ${min}, but received "${value}"`;
	}, { minLength: min });
});
TypeNumber.create;
const integer = TypeInteger.create;
const boolean = TypeBoolean.create;
TypeBinary.create;
const enums = TypeEnum.create;
const nativeEnum = TypeEnum.nativeEnum;
TypeEnum.literal;
const object = TypeObject.create;
const record = TypeRecord.create;
TypeTuple.create;
const array = TypeArray.create;
TypeIntersection.create;
const union = TypeUnion.create;
TypeUnion.discriminatorMapping;
const custom = TypeUnknown.define;
TypeWrapper.refine;
const optional = /* @__PURE__ */ defineModifier((type) => {
	return OptionalType.create(type);
});
const annotate = /* @__PURE__ */ defineModifier((type, meta) => {
	return TypeWrapper.of(type, { [Schema.meta]: meta });
});
const Fragment$1 = Fragment;
var __component = /* @__PURE__ */ Symbol("component");
const isComponent = (o) => {
	return isPlainObject(o) && o[__component] === __component;
};
const isPropTypes = (o) => {
	return isType(Object.values(o)[0]);
};
function component(...args) {
	let finalPropTypes = {};
	let finalSetup = void 0;
	let finalOptions = {};
	for (const arg of args) {
		if (isFunction(arg)) {
			finalSetup = arg;
			continue;
		}
		if (isUndefined(finalSetup)) finalPropTypes = arg;
		else finalOptions = arg;
	}
	const [emits, props] = partition(/* @__PURE__ */ Object.keys(finalPropTypes), (v1) => /^on[A-Z]/.test(v1));
	const emitsAndProps = {
		emits: [.../* @__PURE__ */ emits.map((v1) => kebabCase(/* @__PURE__ */ v1.slice(2))), ...finalOptions["emits"] ?? []],
		props: /* @__PURE__ */ [.../* @__PURE__ */ props.filter((p) => !/^[$]/.test(p)), ...finalOptions["props"] ?? []].reduce((ret, prop) => {
			const d = finalPropTypes[prop];
			if (d) return {
				...ret,
				[prop]: {
					default() {
						try {
							return d.create(void 0);
						} catch (e) {
							console.log(e);
						}
					},
					validator: (value) => {
						return d.validate(value);
					}
				}
			};
			return {
				...ret,
				[prop]: { default() {} }
			};
		}, {})
	};
	return {
		...finalOptions,
		get name() {
			return this.displayName ?? finalOptions["displayName"] ?? finalOptions["name"];
		},
		set name(n) {
			finalOptions["name"] = n;
		},
		setup: (props$1, ctx) => finalSetup(props$1, ctx),
		emits: emitsAndProps.emits,
		props: emitsAndProps.props,
		inheritAttrs: finalOptions["inheritAttrs"],
		[__component]: __component
	};
}
const ext = (target, ext$1) => {
	return new Proxy(target, { get(target$1, p) {
		return ext$1[p] ?? target$1[p];
	} });
};
var isBrowser = typeof document !== "undefined";
function isRouteComponent(component$1) {
	return typeof component$1 === "object" || "displayName" in component$1 || "props" in component$1 || "__vccOpts" in component$1;
}
function isESModule(obj) {
	return obj.__esModule || obj[Symbol.toStringTag] === "Module" || obj.default && isRouteComponent(obj.default);
}
var assign = Object.assign;
function applyToParams(fn, params) {
	const newParams = {};
	for (const key in params) {
		const value = params[key];
		newParams[key] = isArray$3(value) ? value.map(fn) : fn(value);
	}
	return newParams;
}
var noop$1 = () => {};
var isArray$3 = Array.isArray;
function mergeOptions(defaults$1, partialOptions) {
	const options = {};
	for (const key in defaults$1) options[key] = key in partialOptions ? partialOptions[key] : defaults$1[key];
	return options;
}
var HASH_RE = /#/g;
var AMPERSAND_RE = /&/g;
var SLASH_RE = /\//g;
var EQUAL_RE = /=/g;
var IM_RE = /\?/g;
var PLUS_RE = /\+/g;
var ENC_BRACKET_OPEN_RE = /%5B/g;
var ENC_BRACKET_CLOSE_RE = /%5D/g;
var ENC_CARET_RE = /%5E/g;
var ENC_BACKTICK_RE = /%60/g;
var ENC_CURLY_OPEN_RE = /%7B/g;
var ENC_PIPE_RE = /%7C/g;
var ENC_CURLY_CLOSE_RE = /%7D/g;
var ENC_SPACE_RE = /%20/g;
function commonEncode(text) {
	return text == null ? "" : encodeURI("" + text).replace(ENC_PIPE_RE, "|").replace(ENC_BRACKET_OPEN_RE, "[").replace(ENC_BRACKET_CLOSE_RE, "]");
}
function encodeHash(text) {
	return commonEncode(text).replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
function encodeQueryValue(text) {
	return commonEncode(text).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
function encodeQueryKey(text) {
	return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}
function encodePath(text) {
	return commonEncode(text).replace(HASH_RE, "%23").replace(IM_RE, "%3F");
}
function encodeParam(text) {
	return encodePath(text).replace(SLASH_RE, "%2F");
}
function decode(text) {
	if (text == null) return null;
	try {
		return decodeURIComponent("" + text);
	} catch (err) {}
	return "" + text;
}
var TRAILING_SLASH_RE = /\/$/;
var removeTrailingSlash = (path) => path.replace(TRAILING_SLASH_RE, "");
function parseURL(parseQuery$1, location$1, currentLocation = "/") {
	let path, query = {}, searchString = "", hash = "";
	const hashPos = /* @__PURE__ */ location$1.indexOf("#");
	let searchPos = /* @__PURE__ */ location$1.indexOf("?");
	searchPos = hashPos >= 0 && searchPos > hashPos ? -1 : searchPos;
	if (searchPos >= 0) {
		path = /* @__PURE__ */ location$1.slice(0, searchPos);
		searchString = /* @__PURE__ */ location$1.slice(searchPos, hashPos > 0 ? hashPos : location$1.length);
		query = /* @__PURE__ */ parseQuery$1(searchString);
	}
	if (hashPos >= 0) {
		path = path || location$1.slice(0, hashPos);
		hash = /* @__PURE__ */ location$1.slice(hashPos, location$1.length);
	}
	path = /* @__PURE__ */ resolveRelativePath(path != null ? path : location$1, currentLocation);
	return {
		fullPath: path + searchString + hash,
		path,
		query,
		hash: /* @__PURE__ */ decode(hash)
	};
}
function stringifyURL(stringifyQuery$1, location$1) {
	const query = location$1.query ? stringifyQuery$1(location$1.query) : "";
	return location$1.path + (query && "?") + query + (location$1.hash || "");
}
function stripBase(pathname, base) {
	if (!base || !pathname.toLowerCase().startsWith(/* @__PURE__ */ base.toLowerCase())) return pathname;
	return pathname.slice(base.length) || "/";
}
function isSameRouteLocation(stringifyQuery$1, a, b) {
	const aLastIndex = a.matched.length - 1;
	const bLastIndex = b.matched.length - 1;
	return aLastIndex > -1 && aLastIndex === bLastIndex && isSameRouteRecord(a.matched[aLastIndex], b.matched[bLastIndex]) && isSameRouteLocationParams(a.params, b.params) && stringifyQuery$1(a.query) === stringifyQuery$1(b.query) && a.hash === b.hash;
}
function isSameRouteRecord(a, b) {
	return (a.aliasOf || a) === (b.aliasOf || b);
}
function isSameRouteLocationParams(a, b) {
	if (Object.keys(a).length !== Object.keys(b).length) return false;
	for (const key in a) if (!isSameRouteLocationParamsValue(a[key], b[key])) return false;
	return true;
}
function isSameRouteLocationParamsValue(a, b) {
	return isArray$3(a) ? isEquivalentArray(a, b) : isArray$3(b) ? isEquivalentArray(b, a) : a === b;
}
function isEquivalentArray(a, b) {
	return isArray$3(b) ? a.length === b.length && a.every((value, i) => value === b[i]) : a.length === 1 && a[0] === b;
}
function resolveRelativePath(to, from$1) {
	if (to.startsWith("/")) return to;
	if (!to) return from$1;
	const fromSegments = /* @__PURE__ */ from$1.split("/");
	const toSegments = /* @__PURE__ */ to.split("/");
	const lastToSegment = toSegments[toSegments.length - 1];
	if (lastToSegment === ".." || lastToSegment === ".") toSegments.push("");
	let position = fromSegments.length - 1;
	let toPosition;
	let segment;
	for (toPosition = 0; toPosition < toSegments.length; toPosition++) {
		segment = toSegments[toPosition];
		if (segment === ".") continue;
		if (segment === "..") {
			if (position > 1) position--;
		} else break;
	}
	return fromSegments.slice(0, position).join("/") + "/" + toSegments.slice(toPosition).join("/");
}
var START_LOCATION_NORMALIZED = {
	path: "/",
	name: void 0,
	params: {},
	query: {},
	hash: "",
	fullPath: "/",
	matched: [],
	meta: {},
	redirectedFrom: void 0
};
var NavigationType = /* @__PURE__ */ function(NavigationType$1) {
	NavigationType$1["pop"] = "pop";
	NavigationType$1["push"] = "push";
	return NavigationType$1;
}({});
var NavigationDirection = /* @__PURE__ */ function(NavigationDirection$1) {
	NavigationDirection$1["back"] = "back";
	NavigationDirection$1["forward"] = "forward";
	NavigationDirection$1["unknown"] = "";
	return NavigationDirection$1;
}({});
function normalizeBase(base) {
	if (!base) if (isBrowser) {
		const baseEl = /* @__PURE__ */ document.querySelector("base");
		base = baseEl && baseEl.getAttribute("href") || "/";
		base = /* @__PURE__ */ base.replace(/^\w+:\/\/[^\/]+/, "");
	} else base = "/";
	if (base[0] !== "/" && base[0] !== "#") base = "/" + base;
	return removeTrailingSlash(base);
}
var BEFORE_HASH_RE = /^[^#]+#/;
function createHref(base, location$1) {
	return base.replace(BEFORE_HASH_RE, "#") + location$1;
}
function getElementPosition(el, offset) {
	const docRect = /* @__PURE__ */ document.documentElement.getBoundingClientRect();
	const elRect = /* @__PURE__ */ el.getBoundingClientRect();
	return {
		behavior: offset.behavior,
		left: elRect.left - docRect.left - (offset.left || 0),
		top: elRect.top - docRect.top - (offset.top || 0)
	};
}
var computeScrollPosition = () => ({
	left: window.scrollX,
	top: window.scrollY
});
function scrollToPosition(position) {
	let scrollToOptions;
	if ("el" in position) {
		const positionEl = position.el;
		const isIdSelector = typeof positionEl === "string" && positionEl.startsWith("#");
		const el = typeof positionEl === "string" ? isIdSelector ? document.getElementById(/* @__PURE__ */ positionEl.slice(1)) : document.querySelector(positionEl) : positionEl;
		if (!el) return;
		scrollToOptions = /* @__PURE__ */ getElementPosition(el, position);
	} else scrollToOptions = position;
	if ("scrollBehavior" in document.documentElement.style) window.scrollTo(scrollToOptions);
	else window.scrollTo(scrollToOptions.left != null ? scrollToOptions.left : window.scrollX, scrollToOptions.top != null ? scrollToOptions.top : window.scrollY);
}
function getScrollKey(path, delta) {
	return (history.state ? history.state.position - delta : -1) + path;
}
var scrollPositions = /* @__PURE__ */ new Map();
function saveScrollPosition(key, scrollPosition) {
	scrollPositions.set(key, scrollPosition);
}
function getSavedScrollPosition(key) {
	const scroll = /* @__PURE__ */ scrollPositions.get(key);
	scrollPositions.delete(key);
	return scroll;
}
function isRouteLocation(route) {
	return typeof route === "string" || route && typeof route === "object";
}
function isRouteName(name) {
	return typeof name === "string" || typeof name === "symbol";
}
var ErrorTypes = /* @__PURE__ */ function(ErrorTypes$1) {
	ErrorTypes$1[ErrorTypes$1["MATCHER_NOT_FOUND"] = 1] = "MATCHER_NOT_FOUND";
	ErrorTypes$1[ErrorTypes$1["NAVIGATION_GUARD_REDIRECT"] = 2] = "NAVIGATION_GUARD_REDIRECT";
	ErrorTypes$1[ErrorTypes$1["NAVIGATION_ABORTED"] = 4] = "NAVIGATION_ABORTED";
	ErrorTypes$1[ErrorTypes$1["NAVIGATION_CANCELLED"] = 8] = "NAVIGATION_CANCELLED";
	ErrorTypes$1[ErrorTypes$1["NAVIGATION_DUPLICATED"] = 16] = "NAVIGATION_DUPLICATED";
	return ErrorTypes$1;
}({});
var NavigationFailureSymbol = /* @__PURE__ */ Symbol("");
ErrorTypes.MATCHER_NOT_FOUND, ErrorTypes.NAVIGATION_GUARD_REDIRECT, ErrorTypes.NAVIGATION_ABORTED, ErrorTypes.NAVIGATION_CANCELLED, ErrorTypes.NAVIGATION_DUPLICATED;
function createRouterError(type, params) {
	return assign(/* @__PURE__ */ new Error(), {
		type,
		[NavigationFailureSymbol]: true
	}, params);
}
function isNavigationFailure(error, type) {
	return error instanceof Error && NavigationFailureSymbol in error && (type == null || !!(error.type & type));
}
function parseQuery(search) {
	const query = {};
	if (search === "" || search === "?") return query;
	const searchParams = /* @__PURE__ */ (search[0] === "?" ? search.slice(1) : search).split("&");
	for (let i = 0; i < searchParams.length; ++i) {
		const searchParam = /* @__PURE__ */ searchParams[i].replace(PLUS_RE, " ");
		const eqPos = /* @__PURE__ */ searchParam.indexOf("=");
		const key = /* @__PURE__ */ decode(eqPos < 0 ? searchParam : searchParam.slice(0, eqPos));
		const value = eqPos < 0 ? null : decode(/* @__PURE__ */ searchParam.slice(eqPos + 1));
		if (key in query) {
			let currentValue = query[key];
			if (!isArray$3(currentValue)) currentValue = query[key] = [currentValue];
			currentValue.push(value);
		} else query[key] = value;
	}
	return query;
}
function stringifyQuery(query) {
	let search = "";
	for (let key in query) {
		const value = query[key];
		key = /* @__PURE__ */ encodeQueryKey(key);
		if (value == null) {
			if (value !== void 0) search += (search.length ? "&" : "") + key;
			continue;
		}
		(isArray$3(value) ? value.map((v1) => v1 && encodeQueryValue(v1)) : [value && encodeQueryValue(value)]).forEach((value$1) => {
			if (value$1 !== void 0) {
				search += (search.length ? "&" : "") + key;
				if (value$1 != null) search += "=" + value$1;
			}
		});
	}
	return search;
}
function normalizeQuery(query) {
	const normalizedQuery = {};
	for (const key in query) {
		const value = query[key];
		if (value !== void 0) normalizedQuery[key] = isArray$3(value) ? value.map((v1) => v1 == null ? null : "" + v1) : value == null ? value : "" + value;
	}
	return normalizedQuery;
}
var matchedRouteKey = /* @__PURE__ */ Symbol("");
var viewDepthKey = /* @__PURE__ */ Symbol("");
var routerKey = /* @__PURE__ */ Symbol("");
var routeLocationKey = /* @__PURE__ */ Symbol("");
var routerViewLocationKey = /* @__PURE__ */ Symbol("");
function useCallbacks() {
	let handlers = [];
	function add(handler) {
		handlers.push(handler);
		return () => {
			const i = /* @__PURE__ */ handlers.indexOf(handler);
			if (i > -1) handlers.splice(i, 1);
		};
	}
	function reset() {
		handlers = [];
	}
	return {
		add,
		list: () => handlers.slice(),
		reset
	};
}
function guardToPromiseFn(guard, to, from$1, record$1, name, runWithContext = (fn) => fn()) {
	const enterCallbackArray = record$1 && (record$1.enterCallbacks[name] = record$1.enterCallbacks[name] || []);
	return () => new Promise((resolve, reject) => {
		const next = (valid) => {
			if (valid === false) reject(/* @__PURE__ */ createRouterError(ErrorTypes.NAVIGATION_ABORTED, {
				from: from$1,
				to
			}));
			else if (valid instanceof Error) reject(valid);
			else if (isRouteLocation(valid)) reject(/* @__PURE__ */ createRouterError(ErrorTypes.NAVIGATION_GUARD_REDIRECT, {
				from: to,
				to: valid
			}));
			else {
				if (enterCallbackArray && record$1.enterCallbacks[name] === enterCallbackArray && typeof valid === "function") enterCallbackArray.push(valid);
				resolve();
			}
		};
		const guardReturn = /* @__PURE__ */ runWithContext(() => guard.call(record$1 && record$1.instances[name], to, from$1, next));
		let guardCall = /* @__PURE__ */ Promise.resolve(guardReturn);
		if (guard.length < 3) guardCall = /* @__PURE__ */ guardCall.then(next);
		guardCall.catch((err) => reject(err));
	});
}
function extractComponentsGuards(matched, guardType, to, from$1, runWithContext = (fn) => fn()) {
	const guards = [];
	for (const record$1 of matched) for (const name in record$1.components) {
		let rawComponent = record$1.components[name];
		if (guardType !== "beforeRouteEnter" && !record$1.instances[name]) continue;
		if (isRouteComponent(rawComponent)) {
			const guard = (rawComponent.__vccOpts || rawComponent)[guardType];
			guard && guards.push(/* @__PURE__ */ guardToPromiseFn(guard, to, from$1, record$1, name, runWithContext));
		} else {
			let componentPromise = /* @__PURE__ */ rawComponent();
			guards.push(() => componentPromise.then((resolved) => {
				if (!resolved) throw new Error(`Couldn't resolve component "${name}" at "${record$1.path}"`);
				const resolvedComponent = isESModule(resolved) ? resolved.default : resolved;
				record$1.mods[name] = resolved;
				record$1.components[name] = resolvedComponent;
				const guard = (resolvedComponent.__vccOpts || resolvedComponent)[guardType];
				return guard && guardToPromiseFn(guard, to, from$1, record$1, name, runWithContext)();
			}));
		}
	}
	return guards;
}
function extractChangingRecords(to, from$1) {
	const leavingRecords = [];
	const updatingRecords = [];
	const enteringRecords = [];
	const len = /* @__PURE__ */ Math.max(from$1.matched.length, to.matched.length);
	for (let i = 0; i < len; i++) {
		const recordFrom = from$1.matched[i];
		if (recordFrom) if (to.matched.find((record$1) => isSameRouteRecord(record$1, recordFrom))) updatingRecords.push(recordFrom);
		else leavingRecords.push(recordFrom);
		const recordTo = to.matched[i];
		if (recordTo) {
			if (!from$1.matched.find((record$1) => isSameRouteRecord(record$1, recordTo))) enteringRecords.push(recordTo);
		}
	}
	return [
		leavingRecords,
		updatingRecords,
		enteringRecords
	];
}
var createBaseLocation = () => location.protocol + "//" + location.host;
function createCurrentLocation(base, location$1) {
	const { pathname, search, hash } = location$1;
	const hashPos = /* @__PURE__ */ base.indexOf("#");
	if (hashPos > -1) {
		let slicePos = hash.includes(/* @__PURE__ */ base.slice(hashPos)) ? base.slice(hashPos).length : 1;
		let pathFromHash = /* @__PURE__ */ hash.slice(slicePos);
		if (pathFromHash[0] !== "/") pathFromHash = "/" + pathFromHash;
		return stripBase(pathFromHash, "");
	}
	return stripBase(pathname, base) + search + hash;
}
function useHistoryListeners(base, historyState, currentLocation, replace) {
	let listeners = [];
	let teardowns = [];
	let pauseState = null;
	const popStateHandler = ({ state }) => {
		const to = /* @__PURE__ */ createCurrentLocation(base, location);
		const from$1 = currentLocation.value;
		const fromState = historyState.value;
		let delta = 0;
		if (state) {
			currentLocation.value = to;
			historyState.value = state;
			if (pauseState && pauseState === from$1) {
				pauseState = null;
				return;
			}
			delta = fromState ? state.position - fromState.position : 0;
		} else replace(to);
		listeners.forEach((listener) => {
			listener(currentLocation.value, from$1, {
				delta,
				type: NavigationType.pop,
				direction: delta ? delta > 0 ? NavigationDirection.forward : NavigationDirection.back : NavigationDirection.unknown
			});
		});
	};
	function pauseListeners() {
		pauseState = currentLocation.value;
	}
	function listen(callback) {
		listeners.push(callback);
		const teardown = () => {
			const index = /* @__PURE__ */ listeners.indexOf(callback);
			if (index > -1) listeners.splice(index, 1);
		};
		teardowns.push(teardown);
		return teardown;
	}
	function beforeUnloadListener() {
		if (document.visibilityState === "hidden") {
			const { history: history$1 } = window;
			if (!history$1.state) return;
			history$1.replaceState(/* @__PURE__ */ assign({}, history$1.state, { scroll: /* @__PURE__ */ computeScrollPosition() }), "");
		}
	}
	function destroy() {
		for (const teardown of teardowns) teardown();
		teardowns = [];
		window.removeEventListener("popstate", popStateHandler);
		window.removeEventListener("pagehide", beforeUnloadListener);
		document.removeEventListener("visibilitychange", beforeUnloadListener);
	}
	window.addEventListener("popstate", popStateHandler);
	window.addEventListener("pagehide", beforeUnloadListener);
	document.addEventListener("visibilitychange", beforeUnloadListener);
	return {
		pauseListeners,
		listen,
		destroy
	};
}
function buildState(back, current$1, forward, replaced = false, computeScroll = false) {
	return {
		back,
		current: current$1,
		forward,
		replaced,
		position: window.history.length,
		scroll: computeScroll ? computeScrollPosition() : null
	};
}
function useHistoryStateNavigation(base) {
	const { history: history$1, location: location$1 } = window;
	const currentLocation = { value: /* @__PURE__ */ createCurrentLocation(base, location$1) };
	const historyState = { value: history$1.state };
	if (!historyState.value) changeLocation(currentLocation.value, {
		back: null,
		current: currentLocation.value,
		forward: null,
		position: history$1.length - 1,
		replaced: true,
		scroll: null
	}, true);
	function changeLocation(to, state, replace$1) {
		const hashIndex = /* @__PURE__ */ base.indexOf("#");
		const url = hashIndex > -1 ? (location$1.host && document.querySelector("base") ? base : base.slice(hashIndex)) + to : createBaseLocation() + base + to;
		try {
			history$1[replace$1 ? "replaceState" : "pushState"](state, "", url);
			historyState.value = state;
		} catch (err) {
			console.error(err);
			location$1[replace$1 ? "replace" : "assign"](url);
		}
	}
	function replace(to, data) {
		changeLocation(to, /* @__PURE__ */ assign({}, history$1.state, /* @__PURE__ */ buildState(historyState.value.back, to, historyState.value.forward, true), data, { position: historyState.value.position }), true);
		currentLocation.value = to;
	}
	function push(to, data) {
		const currentState = /* @__PURE__ */ assign({}, historyState.value, history$1.state, {
			forward: to,
			scroll: /* @__PURE__ */ computeScrollPosition()
		});
		changeLocation(currentState.current, currentState, true);
		changeLocation(to, /* @__PURE__ */ assign({}, /* @__PURE__ */ buildState(currentLocation.value, to, null), { position: currentState.position + 1 }, data), false);
		currentLocation.value = to;
	}
	return {
		location: currentLocation,
		state: historyState,
		push,
		replace
	};
}
function createWebHistory(base) {
	base = /* @__PURE__ */ normalizeBase(base);
	const historyNavigation = /* @__PURE__ */ useHistoryStateNavigation(base);
	const historyListeners = /* @__PURE__ */ useHistoryListeners(base, historyNavigation.state, historyNavigation.location, historyNavigation.replace);
	function go(delta, triggerListeners = true) {
		if (!triggerListeners) historyListeners.pauseListeners();
		history.go(delta);
	}
	const routerHistory = /* @__PURE__ */ assign({
		location: "",
		base,
		go,
		createHref: /* @__PURE__ */ createHref.bind(null, base)
	}, historyNavigation, historyListeners);
	Object.defineProperty(routerHistory, "location", {
		enumerable: true,
		get: () => historyNavigation.location.value
	});
	Object.defineProperty(routerHistory, "state", {
		enumerable: true,
		get: () => historyNavigation.state.value
	});
	return routerHistory;
}
var TokenType = /* @__PURE__ */ function(TokenType$1) {
	TokenType$1[TokenType$1["Static"] = 0] = "Static";
	TokenType$1[TokenType$1["Param"] = 1] = "Param";
	TokenType$1[TokenType$1["Group"] = 2] = "Group";
	return TokenType$1;
}({});
var TokenizerState = /* @__PURE__ */ function(TokenizerState$1) {
	TokenizerState$1[TokenizerState$1["Static"] = 0] = "Static";
	TokenizerState$1[TokenizerState$1["Param"] = 1] = "Param";
	TokenizerState$1[TokenizerState$1["ParamRegExp"] = 2] = "ParamRegExp";
	TokenizerState$1[TokenizerState$1["ParamRegExpEnd"] = 3] = "ParamRegExpEnd";
	TokenizerState$1[TokenizerState$1["EscapeNext"] = 4] = "EscapeNext";
	return TokenizerState$1;
}(TokenizerState || {});
var ROOT_TOKEN = {
	type: TokenType.Static,
	value: ""
};
var VALID_PARAM_RE = /[a-zA-Z0-9_]/;
function tokenizePath(path) {
	if (!path) return [[]];
	if (path === "/") return [[ROOT_TOKEN]];
	if (!path.startsWith("/")) throw new Error(`Invalid path "${path}"`);
	function crash(message) {
		throw new Error(`ERR (${state})/"${buffer}": ${message}`);
	}
	let state = TokenizerState.Static;
	let previousState = state;
	const tokens = [];
	let segment;
	function finalizeSegment() {
		if (segment) tokens.push(segment);
		segment = [];
	}
	let i = 0;
	let char;
	let buffer = "";
	let customRe = "";
	function consumeBuffer() {
		if (!buffer) return;
		if (state === TokenizerState.Static) segment.push({
			type: TokenType.Static,
			value: buffer
		});
		else if (state === TokenizerState.Param || state === TokenizerState.ParamRegExp || state === TokenizerState.ParamRegExpEnd) {
			if (segment.length > 1 && (char === "*" || char === "+")) crash(`A repeatable param (${buffer}) must be alone in its segment. eg: '/:ids+.`);
			segment.push({
				type: TokenType.Param,
				value: buffer,
				regexp: customRe,
				repeatable: char === "*" || char === "+",
				optional: char === "*" || char === "?"
			});
		} else crash("Invalid state to consume buffer");
		buffer = "";
	}
	function addCharToBuffer() {
		buffer += char;
	}
	while (i < path.length) {
		char = path[i++];
		if (char === "\\" && state !== TokenizerState.ParamRegExp) {
			previousState = state;
			state = TokenizerState.EscapeNext;
			continue;
		}
		switch (state) {
			case TokenizerState.Static:
				if (char === "/") {
					if (buffer) consumeBuffer();
					finalizeSegment();
				} else if (char === ":") {
					consumeBuffer();
					state = TokenizerState.Param;
				} else addCharToBuffer();
				break;
			case TokenizerState.EscapeNext:
				addCharToBuffer();
				state = previousState;
				break;
			case TokenizerState.Param:
				if (char === "(") state = TokenizerState.ParamRegExp;
				else if (VALID_PARAM_RE.test(char)) addCharToBuffer();
				else {
					consumeBuffer();
					state = TokenizerState.Static;
					if (char !== "*" && char !== "?" && char !== "+") i--;
				}
				break;
			case TokenizerState.ParamRegExp:
				if (char === ")") if (customRe[customRe.length - 1] == "\\") customRe = customRe.slice(0, -1) + char;
				else state = TokenizerState.ParamRegExpEnd;
				else customRe += char;
				break;
			case TokenizerState.ParamRegExpEnd:
				consumeBuffer();
				state = TokenizerState.Static;
				if (char !== "*" && char !== "?" && char !== "+") i--;
				customRe = "";
				break;
			default:
				crash("Unknown state");
				break;
		}
	}
	if (state === TokenizerState.ParamRegExp) crash(`Unfinished custom RegExp for param "${buffer}"`);
	consumeBuffer();
	finalizeSegment();
	return tokens;
}
var BASE_PARAM_PATTERN = "[^/]+?";
var BASE_PATH_PARSER_OPTIONS = {
	sensitive: false,
	strict: false,
	start: true,
	end: true
};
var PathScore = /* @__PURE__ */ function(PathScore$1) {
	PathScore$1[PathScore$1["_multiplier"] = 10] = "_multiplier";
	PathScore$1[PathScore$1["Root"] = 90] = "Root";
	PathScore$1[PathScore$1["Segment"] = 40] = "Segment";
	PathScore$1[PathScore$1["SubSegment"] = 30] = "SubSegment";
	PathScore$1[PathScore$1["Static"] = 40] = "Static";
	PathScore$1[PathScore$1["Dynamic"] = 20] = "Dynamic";
	PathScore$1[PathScore$1["BonusCustomRegExp"] = 10] = "BonusCustomRegExp";
	PathScore$1[PathScore$1["BonusWildcard"] = -50] = "BonusWildcard";
	PathScore$1[PathScore$1["BonusRepeatable"] = -20] = "BonusRepeatable";
	PathScore$1[PathScore$1["BonusOptional"] = -8] = "BonusOptional";
	PathScore$1[PathScore$1["BonusStrict"] = .7000000000000001] = "BonusStrict";
	PathScore$1[PathScore$1["BonusCaseSensitive"] = .25] = "BonusCaseSensitive";
	return PathScore$1;
}(PathScore || {});
var REGEX_CHARS_RE = /[.+*?^${}()[\]/\\]/g;
function tokensToParser(segments, extraOptions) {
	const options = /* @__PURE__ */ assign({}, BASE_PATH_PARSER_OPTIONS, extraOptions);
	const score = [];
	let pattern$1 = options.start ? "^" : "";
	const keys$1 = [];
	for (const segment of segments) {
		const segmentScores = segment.length ? [] : [PathScore.Root];
		if (options.strict && !segment.length) pattern$1 += "/";
		for (let tokenIndex = 0; tokenIndex < segment.length; tokenIndex++) {
			const token = segment[tokenIndex];
			let subSegmentScore = PathScore.Segment + (options.sensitive ? PathScore.BonusCaseSensitive : 0);
			if (token.type === TokenType.Static) {
				if (!tokenIndex) pattern$1 += "/";
				pattern$1 += /* @__PURE__ */ token.value.replace(REGEX_CHARS_RE, "\\$&");
				subSegmentScore += PathScore.Static;
			} else if (token.type === TokenType.Param) {
				const { value, repeatable, optional: optional$1, regexp } = token;
				keys$1.push({
					name: value,
					repeatable,
					optional: optional$1
				});
				const re$1 = regexp ? regexp : BASE_PARAM_PATTERN;
				if (re$1 !== BASE_PARAM_PATTERN) {
					subSegmentScore += PathScore.BonusCustomRegExp;
					try {
						`${re$1}`;
					} catch (err) {
						throw new Error(`Invalid custom RegExp for param "${value}" (${re$1}): ` + err.message);
					}
				}
				let subPattern = repeatable ? `((?:${re$1})(?:/(?:${re$1}))*)` : `(${re$1})`;
				if (!tokenIndex) subPattern = optional$1 && segment.length < 2 ? `(?:/${subPattern})` : "/" + subPattern;
				if (optional$1) subPattern += "?";
				pattern$1 += subPattern;
				subSegmentScore += PathScore.Dynamic;
				if (optional$1) subSegmentScore += PathScore.BonusOptional;
				if (repeatable) subSegmentScore += PathScore.BonusRepeatable;
				if (re$1 === ".*") subSegmentScore += PathScore.BonusWildcard;
			}
			segmentScores.push(subSegmentScore);
		}
		score.push(segmentScores);
	}
	if (options.strict && options.end) {
		const i = score.length - 1;
		score[i][score[i].length - 1] += PathScore.BonusStrict;
	}
	if (!options.strict) pattern$1 += "/?";
	if (options.end) pattern$1 += "$";
	else if (options.strict && !pattern$1.endsWith("/")) pattern$1 += "(?:/|$)";
	const re = new RegExp(pattern$1, options.sensitive ? "" : "i");
	function parse(path) {
		const match = /* @__PURE__ */ path.match(re);
		const params = {};
		if (!match) return null;
		for (let i = 1; i < match.length; i++) {
			const value = match[i] || "";
			const key = keys$1[i - 1];
			params[key.name] = value && key.repeatable ? value.split("/") : value;
		}
		return params;
	}
	function stringify(params) {
		let path = "";
		let avoidDuplicatedSlash = false;
		for (const segment of segments) {
			if (!avoidDuplicatedSlash || !path.endsWith("/")) path += "/";
			avoidDuplicatedSlash = false;
			for (const token of segment) if (token.type === TokenType.Static) path += token.value;
			else if (token.type === TokenType.Param) {
				const { value, repeatable, optional: optional$1 } = token;
				const param = value in params ? params[value] : "";
				if (isArray$3(param) && !repeatable) throw new Error(`Provided param "${value}" is an array but it is not repeatable (* or + modifiers)`);
				const text = isArray$3(param) ? param.join("/") : param;
				if (!text) if (optional$1) {
					if (segment.length < 2) if (path.endsWith("/")) path = /* @__PURE__ */ path.slice(0, -1);
					else avoidDuplicatedSlash = true;
				} else throw new Error(`Missing required param "${value}"`);
				path += text;
			}
		}
		return path || "/";
	}
	return {
		re,
		score,
		keys: keys$1,
		parse,
		stringify
	};
}
function compareScoreArray(a, b) {
	let i = 0;
	while (i < a.length && i < b.length) {
		const diff = b[i] - a[i];
		if (diff) return diff;
		i++;
	}
	if (a.length < b.length) return a.length === 1 && a[0] === PathScore.Static + PathScore.Segment ? -1 : 1;
	else if (a.length > b.length) return b.length === 1 && b[0] === PathScore.Static + PathScore.Segment ? 1 : -1;
	return 0;
}
function comparePathParserScore(a, b) {
	let i = 0;
	const aScore = a.score;
	const bScore = b.score;
	while (i < aScore.length && i < bScore.length) {
		const comp = /* @__PURE__ */ compareScoreArray(aScore[i], bScore[i]);
		if (comp) return comp;
		i++;
	}
	if (Math.abs(bScore.length - aScore.length) === 1) {
		if (isLastScoreNegative(aScore)) return 1;
		if (isLastScoreNegative(bScore)) return -1;
	}
	return bScore.length - aScore.length;
}
function isLastScoreNegative(score) {
	const last$3 = score[score.length - 1];
	return score.length > 0 && last$3[last$3.length - 1] < 0;
}
var PATH_PARSER_OPTIONS_DEFAULTS = {
	strict: false,
	end: true,
	sensitive: false
};
function createRouteRecordMatcher(record$1, parent, options) {
	const matcher = /* @__PURE__ */ assign(/* @__PURE__ */ tokensToParser(/* @__PURE__ */ tokenizePath(record$1.path), options), {
		record: record$1,
		parent,
		children: [],
		alias: []
	});
	if (parent) {
		if (!matcher.record.aliasOf === !parent.record.aliasOf) parent.children.push(matcher);
	}
	return matcher;
}
function createRouterMatcher(routes, globalOptions) {
	const matchers = [];
	const matcherMap = /* @__PURE__ */ new Map();
	globalOptions = /* @__PURE__ */ mergeOptions(PATH_PARSER_OPTIONS_DEFAULTS, globalOptions);
	function getRecordMatcher(name) {
		return matcherMap.get(name);
	}
	function addRoute(record$1, parent, originalRecord) {
		const isRootAdd = !originalRecord;
		const mainNormalizedRecord = /* @__PURE__ */ normalizeRouteRecord(record$1);
		mainNormalizedRecord.aliasOf = originalRecord && originalRecord.record;
		const options = /* @__PURE__ */ mergeOptions(globalOptions, record$1);
		const normalizedRecords = [mainNormalizedRecord];
		if ("alias" in record$1) {
			const aliases = typeof record$1.alias === "string" ? [record$1.alias] : record$1.alias;
			for (const alias of aliases) normalizedRecords.push(/* @__PURE__ */ normalizeRouteRecord(/* @__PURE__ */ assign({}, mainNormalizedRecord, {
				components: originalRecord ? originalRecord.record.components : mainNormalizedRecord.components,
				path: alias,
				aliasOf: originalRecord ? originalRecord.record : mainNormalizedRecord
			})));
		}
		let matcher;
		let originalMatcher;
		for (const normalizedRecord of normalizedRecords) {
			const { path } = normalizedRecord;
			if (parent && path[0] !== "/") {
				const parentPath = parent.record.path;
				const connectingSlash = parentPath[parentPath.length - 1] === "/" ? "" : "/";
				normalizedRecord.path = parent.record.path + (path && connectingSlash + path);
			}
			matcher = /* @__PURE__ */ createRouteRecordMatcher(normalizedRecord, parent, options);
			if (originalRecord) originalRecord.alias.push(matcher);
			else {
				originalMatcher = originalMatcher || matcher;
				if (originalMatcher !== matcher) originalMatcher.alias.push(matcher);
				if (isRootAdd && record$1.name && !isAliasRecord(matcher)) removeRoute(record$1.name);
			}
			if (isMatchable(matcher)) insertMatcher(matcher);
			if (mainNormalizedRecord.children) {
				const children = mainNormalizedRecord.children;
				for (let i = 0; i < children.length; i++) addRoute(children[i], matcher, originalRecord && originalRecord.children[i]);
			}
			originalRecord = originalRecord || matcher;
		}
		return originalMatcher ? () => {
			removeRoute(originalMatcher);
		} : noop$1;
	}
	function removeRoute(matcherRef) {
		if (isRouteName(matcherRef)) {
			const matcher = /* @__PURE__ */ matcherMap.get(matcherRef);
			if (matcher) {
				matcherMap.delete(matcherRef);
				matchers.splice(/* @__PURE__ */ matchers.indexOf(matcher), 1);
				matcher.children.forEach(removeRoute);
				matcher.alias.forEach(removeRoute);
			}
		} else {
			const index = /* @__PURE__ */ matchers.indexOf(matcherRef);
			if (index > -1) {
				matchers.splice(index, 1);
				if (matcherRef.record.name) matcherMap.delete(matcherRef.record.name);
				matcherRef.children.forEach(removeRoute);
				matcherRef.alias.forEach(removeRoute);
			}
		}
	}
	function getRoutes() {
		return matchers;
	}
	function insertMatcher(matcher) {
		const index = /* @__PURE__ */ findInsertionIndex(matcher, matchers);
		matchers.splice(index, 0, matcher);
		if (matcher.record.name && !isAliasRecord(matcher)) matcherMap.set(matcher.record.name, matcher);
	}
	function resolve(location$1, currentLocation) {
		let matcher;
		let params = {};
		let path;
		let name;
		if ("name" in location$1 && location$1.name) {
			matcher = /* @__PURE__ */ matcherMap.get(location$1.name);
			if (!matcher) throw createRouterError(ErrorTypes.MATCHER_NOT_FOUND, { location: location$1 });
			name = matcher.record.name;
			params = /* @__PURE__ */ assign(/* @__PURE__ */ pickParams(currentLocation.params, /* @__PURE__ */ matcher.keys.filter((k) => !k.optional).concat(matcher.parent ? matcher.parent.keys.filter((k) => k.optional) : []).map((k) => k.name)), location$1.params && pickParams(location$1.params, /* @__PURE__ */ matcher.keys.map((k) => k.name)));
			path = /* @__PURE__ */ matcher.stringify(params);
		} else if (location$1.path != null) {
			path = location$1.path;
			matcher = /* @__PURE__ */ matchers.find((m) => m.re.test(path));
			if (matcher) {
				params = /* @__PURE__ */ matcher.parse(path);
				name = matcher.record.name;
			}
		} else {
			matcher = currentLocation.name ? matcherMap.get(currentLocation.name) : matchers.find((m) => m.re.test(currentLocation.path));
			if (!matcher) throw createRouterError(ErrorTypes.MATCHER_NOT_FOUND, {
				location: location$1,
				currentLocation
			});
			name = matcher.record.name;
			params = /* @__PURE__ */ assign({}, currentLocation.params, location$1.params);
			path = /* @__PURE__ */ matcher.stringify(params);
		}
		const matched = [];
		let parentMatcher = matcher;
		while (parentMatcher) {
			matched.unshift(parentMatcher.record);
			parentMatcher = parentMatcher.parent;
		}
		return {
			name,
			path,
			params,
			matched,
			meta: /* @__PURE__ */ mergeMetaFields(matched)
		};
	}
	routes.forEach((route) => addRoute(route));
	function clearRoutes() {
		matchers.length = 0;
		matcherMap.clear();
	}
	return {
		addRoute,
		resolve,
		removeRoute,
		clearRoutes,
		getRoutes,
		getRecordMatcher
	};
}
function pickParams(params, keys$1) {
	const newParams = {};
	for (const key of keys$1) if (key in params) newParams[key] = params[key];
	return newParams;
}
function normalizeRouteRecord(record$1) {
	const normalized = {
		path: record$1.path,
		redirect: record$1.redirect,
		name: record$1.name,
		meta: record$1.meta || {},
		aliasOf: record$1.aliasOf,
		beforeEnter: record$1.beforeEnter,
		props: /* @__PURE__ */ normalizeRecordProps(record$1),
		children: record$1.children || [],
		instances: {},
		leaveGuards: /* @__PURE__ */ new Set(),
		updateGuards: /* @__PURE__ */ new Set(),
		enterCallbacks: {},
		components: "components" in record$1 ? record$1.components || null : record$1.component && { default: record$1.component }
	};
	Object.defineProperty(normalized, "mods", { value: {} });
	return normalized;
}
function normalizeRecordProps(record$1) {
	const propsObject = {};
	const props = record$1.props || false;
	if ("component" in record$1) propsObject.default = props;
	else for (const name in record$1.components) propsObject[name] = typeof props === "object" ? props[name] : props;
	return propsObject;
}
function isAliasRecord(record$1) {
	while (record$1) {
		if (record$1.record.aliasOf) return true;
		record$1 = record$1.parent;
	}
	return false;
}
function mergeMetaFields(matched) {
	return matched.reduce((meta, record$1) => assign(meta, record$1.meta), {});
}
function findInsertionIndex(matcher, matchers) {
	let lower = 0;
	let upper = matchers.length;
	while (lower !== upper) {
		const mid = lower + upper >> 1;
		if (comparePathParserScore(matcher, matchers[mid]) < 0) upper = mid;
		else lower = mid + 1;
	}
	const insertionAncestor = /* @__PURE__ */ getInsertionAncestor(matcher);
	if (insertionAncestor) upper = /* @__PURE__ */ matchers.lastIndexOf(insertionAncestor, upper - 1);
	return upper;
}
function getInsertionAncestor(matcher) {
	let ancestor = matcher;
	while (ancestor = ancestor.parent) if (isMatchable(ancestor) && comparePathParserScore(matcher, ancestor) === 0) return ancestor;
}
function isMatchable({ record: record$1 }) {
	return !!(record$1.name || record$1.components && Object.keys(record$1.components).length || record$1.redirect);
}
function useLink(props) {
	const router = /* @__PURE__ */ inject(routerKey);
	const currentRoute = /* @__PURE__ */ inject(routeLocationKey);
	const route = /* @__PURE__ */ computed(() => {
		const to = /* @__PURE__ */ unref(props.to);
		return router.resolve(to);
	});
	const activeRecordIndex = /* @__PURE__ */ computed(() => {
		const { matched } = route.value;
		const { length } = matched;
		const routeMatched = matched[length - 1];
		const currentMatched = currentRoute.matched;
		if (!routeMatched || !currentMatched.length) return -1;
		const index = /* @__PURE__ */ currentMatched.findIndex(/* @__PURE__ */ isSameRouteRecord.bind(null, routeMatched));
		if (index > -1) return index;
		const parentRecordPath = /* @__PURE__ */ getOriginalPath(matched[length - 2]);
		return length > 1 && getOriginalPath(routeMatched) === parentRecordPath && currentMatched[currentMatched.length - 1].path !== parentRecordPath ? currentMatched.findIndex(/* @__PURE__ */ isSameRouteRecord.bind(null, matched[length - 2])) : index;
	});
	const isActive = /* @__PURE__ */ computed(() => activeRecordIndex.value > -1 && includesParams(currentRoute.params, route.value.params));
	const isExactActive = /* @__PURE__ */ computed(() => activeRecordIndex.value > -1 && activeRecordIndex.value === currentRoute.matched.length - 1 && isSameRouteLocationParams(currentRoute.params, route.value.params));
	function navigate(e = {}) {
		if (guardEvent(e)) {
			const p = /* @__PURE__ */ router[unref(props.replace) ? "replace" : "push"](/* @__PURE__ */ unref(props.to)).catch(noop$1);
			if (props.viewTransition && typeof document !== "undefined" && "startViewTransition" in document) document.startViewTransition(() => p);
			return p;
		}
		return Promise.resolve();
	}
	return {
		route,
		href: /* @__PURE__ */ computed(() => route.value.href),
		isActive,
		isExactActive,
		navigate
	};
}
function preferSingleVNode(vnodes) {
	return vnodes.length === 1 ? vnodes[0] : vnodes;
}
var RouterLink = /* @__PURE__ */ defineComponent({
	name: "RouterLink",
	compatConfig: { MODE: 3 },
	props: {
		to: {
			type: [String, Object],
			required: true
		},
		replace: Boolean,
		activeClass: String,
		exactActiveClass: String,
		custom: Boolean,
		ariaCurrentValue: {
			type: String,
			default: "page"
		},
		viewTransition: Boolean
	},
	useLink,
	setup(props, { slots }) {
		const link = /* @__PURE__ */ reactive(/* @__PURE__ */ useLink(props));
		const { options } = inject(routerKey);
		const elClass = /* @__PURE__ */ computed(() => ({
			[getLinkClass(props.activeClass, options.linkActiveClass, "router-link-active")]: link.isActive,
			[getLinkClass(props.exactActiveClass, options.linkExactActiveClass, "router-link-exact-active")]: link.isExactActive
		}));
		return () => {
			const children = slots.default && preferSingleVNode(/* @__PURE__ */ slots.default(link));
			return props.custom ? children : h("a", {
				"aria-current": link.isExactActive ? props.ariaCurrentValue : null,
				href: link.href,
				onClick: link.navigate,
				class: elClass.value
			}, children);
		};
	}
});
function guardEvent(e) {
	if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) return;
	if (e.defaultPrevented) return;
	if (e.button !== void 0 && e.button !== 0) return;
	if (e.currentTarget && e.currentTarget.getAttribute) {
		const target = /* @__PURE__ */ e.currentTarget.getAttribute("target");
		if (/\b_blank\b/i.test(target)) return;
	}
	if (e.preventDefault) e.preventDefault();
	return true;
}
function includesParams(outer, inner) {
	for (const key in inner) {
		const innerValue = inner[key];
		const outerValue = outer[key];
		if (typeof innerValue === "string") {
			if (innerValue !== outerValue) return false;
		} else if (!isArray$3(outerValue) || outerValue.length !== innerValue.length || innerValue.some((value, i) => value !== outerValue[i])) return false;
	}
	return true;
}
function getOriginalPath(record$1) {
	return record$1 ? record$1.aliasOf ? record$1.aliasOf.path : record$1.path : "";
}
var getLinkClass = (propClass, globalClass, defaultClass) => propClass != null ? propClass : globalClass != null ? globalClass : defaultClass;
var RouterViewImpl = /* @__PURE__ */ defineComponent({
	name: "RouterView",
	inheritAttrs: false,
	props: {
		name: {
			type: String,
			default: "default"
		},
		route: Object
	},
	compatConfig: { MODE: 3 },
	setup(props, { attrs, slots }) {
		const injectedRoute = /* @__PURE__ */ inject(routerViewLocationKey);
		const routeToDisplay = /* @__PURE__ */ computed(() => props.route || injectedRoute.value);
		const injectedDepth = /* @__PURE__ */ inject(viewDepthKey, 0);
		const depth = /* @__PURE__ */ computed(() => {
			let initialDepth = /* @__PURE__ */ unref(injectedDepth);
			const { matched } = routeToDisplay.value;
			let matchedRoute;
			while ((matchedRoute = matched[initialDepth]) && !matchedRoute.components) initialDepth++;
			return initialDepth;
		});
		const matchedRouteRef = /* @__PURE__ */ computed(() => routeToDisplay.value.matched[depth.value]);
		provide(viewDepthKey, /* @__PURE__ */ computed(() => depth.value + 1));
		provide(matchedRouteKey, matchedRouteRef);
		provide(routerViewLocationKey, routeToDisplay);
		const viewRef = /* @__PURE__ */ ref();
		watch(() => [
			viewRef.value,
			matchedRouteRef.value,
			props.name
		], ([instance, to, name], [oldInstance, from$1, oldName]) => {
			if (to) {
				to.instances[name] = instance;
				if (from$1 && from$1 !== to && instance && instance === oldInstance) {
					if (!to.leaveGuards.size) to.leaveGuards = from$1.leaveGuards;
					if (!to.updateGuards.size) to.updateGuards = from$1.updateGuards;
				}
			}
			if (instance && to && (!from$1 || !isSameRouteRecord(to, from$1) || !oldInstance)) (to.enterCallbacks[name] || []).forEach((callback) => callback(instance));
		}, { flush: "post" });
		return () => {
			const route = routeToDisplay.value;
			const currentName = props.name;
			const matchedRoute = matchedRouteRef.value;
			const ViewComponent = matchedRoute && matchedRoute.components[currentName];
			if (!ViewComponent) return normalizeSlot(slots.default, {
				Component: ViewComponent,
				route
			});
			const routePropsOption = matchedRoute.props[currentName];
			const routeProps = routePropsOption ? routePropsOption === true ? route.params : typeof routePropsOption === "function" ? routePropsOption(route) : routePropsOption : null;
			const onVnodeUnmounted = (vnode) => {
				if (vnode.component.isUnmounted) matchedRoute.instances[currentName] = null;
			};
			const component$1 = /* @__PURE__ */ h(ViewComponent, /* @__PURE__ */ assign({}, routeProps, attrs, {
				onVnodeUnmounted,
				ref: viewRef
			}));
			return normalizeSlot(slots.default, {
				Component: component$1,
				route
			}) || component$1;
		};
	}
});
function normalizeSlot(slot, data) {
	if (!slot) return null;
	const slotContent = /* @__PURE__ */ slot(data);
	return slotContent.length === 1 ? slotContent[0] : slotContent;
}
var RouterView = RouterViewImpl;
function createRouter(options) {
	const matcher = /* @__PURE__ */ createRouterMatcher(options.routes, options);
	const parseQuery$1 = options.parseQuery || parseQuery;
	const stringifyQuery$1 = options.stringifyQuery || stringifyQuery;
	const routerHistory = options.history;
	const beforeGuards = /* @__PURE__ */ useCallbacks();
	const beforeResolveGuards = /* @__PURE__ */ useCallbacks();
	const afterGuards = /* @__PURE__ */ useCallbacks();
	const currentRoute = /* @__PURE__ */ shallowRef(START_LOCATION_NORMALIZED);
	let pendingLocation = START_LOCATION_NORMALIZED;
	if (isBrowser && options.scrollBehavior && "scrollRestoration" in history) history.scrollRestoration = "manual";
	const normalizeParams = /* @__PURE__ */ applyToParams.bind(null, (paramValue) => "" + paramValue);
	const encodeParams = /* @__PURE__ */ applyToParams.bind(null, encodeParam);
	const decodeParams = /* @__PURE__ */ applyToParams.bind(null, decode);
	function addRoute(parentOrRoute, route) {
		let parent;
		let record$1;
		if (isRouteName(parentOrRoute)) {
			parent = /* @__PURE__ */ matcher.getRecordMatcher(parentOrRoute);
			record$1 = route;
		} else record$1 = parentOrRoute;
		return matcher.addRoute(record$1, parent);
	}
	function removeRoute(name) {
		const recordMatcher = /* @__PURE__ */ matcher.getRecordMatcher(name);
		if (recordMatcher) matcher.removeRoute(recordMatcher);
	}
	function getRoutes() {
		return matcher.getRoutes().map((routeMatcher) => routeMatcher.record);
	}
	function hasRoute(name) {
		return !!matcher.getRecordMatcher(name);
	}
	function resolve(rawLocation, currentLocation) {
		currentLocation = /* @__PURE__ */ assign({}, currentLocation || currentRoute.value);
		if (typeof rawLocation === "string") {
			const locationNormalized = /* @__PURE__ */ parseURL(parseQuery$1, rawLocation, currentLocation.path);
			const matchedRoute$1 = /* @__PURE__ */ matcher.resolve({ path: locationNormalized.path }, currentLocation);
			const href$1 = /* @__PURE__ */ routerHistory.createHref(locationNormalized.fullPath);
			return assign(locationNormalized, matchedRoute$1, {
				params: /* @__PURE__ */ decodeParams(matchedRoute$1.params),
				hash: /* @__PURE__ */ decode(locationNormalized.hash),
				redirectedFrom: void 0,
				href: href$1
			});
		}
		let matcherLocation;
		if (rawLocation.path != null) matcherLocation = /* @__PURE__ */ assign({}, rawLocation, { path: parseURL(parseQuery$1, rawLocation.path, currentLocation.path).path });
		else {
			const targetParams = /* @__PURE__ */ assign({}, rawLocation.params);
			for (const key in targetParams) if (targetParams[key] == null) delete targetParams[key];
			matcherLocation = /* @__PURE__ */ assign({}, rawLocation, { params: /* @__PURE__ */ encodeParams(targetParams) });
			currentLocation.params = /* @__PURE__ */ encodeParams(currentLocation.params);
		}
		const matchedRoute = /* @__PURE__ */ matcher.resolve(matcherLocation, currentLocation);
		const hash = rawLocation.hash || "";
		matchedRoute.params = /* @__PURE__ */ normalizeParams(/* @__PURE__ */ decodeParams(matchedRoute.params));
		const fullPath = /* @__PURE__ */ stringifyURL(stringifyQuery$1, /* @__PURE__ */ assign({}, rawLocation, {
			hash: /* @__PURE__ */ encodeHash(hash),
			path: matchedRoute.path
		}));
		const href = /* @__PURE__ */ routerHistory.createHref(fullPath);
		return assign({
			fullPath,
			hash,
			query: stringifyQuery$1 === stringifyQuery ? normalizeQuery(rawLocation.query) : rawLocation.query || {}
		}, matchedRoute, {
			redirectedFrom: void 0,
			href
		});
	}
	function locationAsObject(to) {
		return typeof to === "string" ? parseURL(parseQuery$1, to, currentRoute.value.path) : assign({}, to);
	}
	function checkCanceledNavigation(to, from$1) {
		if (pendingLocation !== to) return createRouterError(ErrorTypes.NAVIGATION_CANCELLED, {
			from: from$1,
			to
		});
	}
	function push(to) {
		return pushWithRedirect(to);
	}
	function replace(to) {
		return push(/* @__PURE__ */ assign(/* @__PURE__ */ locationAsObject(to), { replace: true }));
	}
	function handleRedirectRecord(to, from$1) {
		const lastMatched = to.matched[to.matched.length - 1];
		if (lastMatched && lastMatched.redirect) {
			const { redirect } = lastMatched;
			let newTargetLocation = typeof redirect === "function" ? redirect(to, from$1) : redirect;
			if (typeof newTargetLocation === "string") {
				newTargetLocation = newTargetLocation.includes("?") || newTargetLocation.includes("#") ? newTargetLocation = /* @__PURE__ */ locationAsObject(newTargetLocation) : { path: newTargetLocation };
				newTargetLocation.params = {};
			}
			return assign({
				query: to.query,
				hash: to.hash,
				params: newTargetLocation.path != null ? {} : to.params
			}, newTargetLocation);
		}
	}
	function pushWithRedirect(to, redirectedFrom) {
		const targetLocation = pendingLocation = /* @__PURE__ */ resolve(to);
		const from$1 = currentRoute.value;
		const data = to.state;
		const force = to.force;
		const replace$1 = to.replace === true;
		const shouldRedirect = /* @__PURE__ */ handleRedirectRecord(targetLocation, from$1);
		if (shouldRedirect) return pushWithRedirect(/* @__PURE__ */ assign(/* @__PURE__ */ locationAsObject(shouldRedirect), {
			state: typeof shouldRedirect === "object" ? assign({}, data, shouldRedirect.state) : data,
			force,
			replace: replace$1
		}), redirectedFrom || targetLocation);
		const toLocation = targetLocation;
		toLocation.redirectedFrom = redirectedFrom;
		let failure;
		if (!force && isSameRouteLocation(stringifyQuery$1, from$1, targetLocation)) {
			failure = /* @__PURE__ */ createRouterError(ErrorTypes.NAVIGATION_DUPLICATED, {
				to: toLocation,
				from: from$1
			});
			handleScroll(from$1, from$1, true, false);
		}
		return (failure ? Promise.resolve(failure) : navigate(toLocation, from$1)).catch((error) => isNavigationFailure(error) ? isNavigationFailure(error, ErrorTypes.NAVIGATION_GUARD_REDIRECT) ? error : markAsReady(error) : triggerError(error, toLocation, from$1)).then((failure$1) => {
			if (failure$1) {
				if (isNavigationFailure(failure$1, ErrorTypes.NAVIGATION_GUARD_REDIRECT)) return pushWithRedirect(/* @__PURE__ */ assign({ replace: replace$1 }, /* @__PURE__ */ locationAsObject(failure$1.to), {
					state: typeof failure$1.to === "object" ? assign({}, data, failure$1.to.state) : data,
					force
				}), redirectedFrom || toLocation);
			} else failure$1 = /* @__PURE__ */ finalizeNavigation(toLocation, from$1, true, replace$1, data);
			triggerAfterEach(toLocation, from$1, failure$1);
			return failure$1;
		});
	}
	function checkCanceledNavigationAndReject(to, from$1) {
		const error = /* @__PURE__ */ checkCanceledNavigation(to, from$1);
		return error ? Promise.reject(error) : Promise.resolve();
	}
	function runWithContext(fn) {
		const app = installedApps.values().next().value;
		return app && typeof app.runWithContext === "function" ? app.runWithContext(fn) : fn();
	}
	function navigate(to, from$1) {
		let guards;
		const [leavingRecords, updatingRecords, enteringRecords] = extractChangingRecords(to, from$1);
		guards = /* @__PURE__ */ extractComponentsGuards(/* @__PURE__ */ leavingRecords.reverse(), "beforeRouteLeave", to, from$1);
		for (const record$1 of leavingRecords) record$1.leaveGuards.forEach((guard) => {
			guards.push(/* @__PURE__ */ guardToPromiseFn(guard, to, from$1));
		});
		const canceledNavigationCheck = /* @__PURE__ */ checkCanceledNavigationAndReject.bind(null, to, from$1);
		guards.push(canceledNavigationCheck);
		return runGuardQueue(guards).then(() => {
			guards = [];
			for (const guard of beforeGuards.list()) guards.push(/* @__PURE__ */ guardToPromiseFn(guard, to, from$1));
			guards.push(canceledNavigationCheck);
			return runGuardQueue(guards);
		}).then(() => {
			guards = /* @__PURE__ */ extractComponentsGuards(updatingRecords, "beforeRouteUpdate", to, from$1);
			for (const record$1 of updatingRecords) record$1.updateGuards.forEach((guard) => {
				guards.push(/* @__PURE__ */ guardToPromiseFn(guard, to, from$1));
			});
			guards.push(canceledNavigationCheck);
			return runGuardQueue(guards);
		}).then(() => {
			guards = [];
			for (const record$1 of enteringRecords) if (record$1.beforeEnter) if (isArray$3(record$1.beforeEnter)) for (const beforeEnter of record$1.beforeEnter) guards.push(/* @__PURE__ */ guardToPromiseFn(beforeEnter, to, from$1));
			else guards.push(/* @__PURE__ */ guardToPromiseFn(record$1.beforeEnter, to, from$1));
			guards.push(canceledNavigationCheck);
			return runGuardQueue(guards);
		}).then(() => {
			to.matched.forEach((record$1) => record$1.enterCallbacks = {});
			guards = /* @__PURE__ */ extractComponentsGuards(enteringRecords, "beforeRouteEnter", to, from$1, runWithContext);
			guards.push(canceledNavigationCheck);
			return runGuardQueue(guards);
		}).then(() => {
			guards = [];
			for (const guard of beforeResolveGuards.list()) guards.push(/* @__PURE__ */ guardToPromiseFn(guard, to, from$1));
			guards.push(canceledNavigationCheck);
			return runGuardQueue(guards);
		}).catch((err) => isNavigationFailure(err, ErrorTypes.NAVIGATION_CANCELLED) ? err : Promise.reject(err));
	}
	function triggerAfterEach(to, from$1, failure) {
		afterGuards.list().forEach((guard) => runWithContext(() => guard(to, from$1, failure)));
	}
	function finalizeNavigation(toLocation, from$1, isPush, replace$1, data) {
		const error = /* @__PURE__ */ checkCanceledNavigation(toLocation, from$1);
		if (error) return error;
		const isFirstNavigation = from$1 === START_LOCATION_NORMALIZED;
		const state = !isBrowser ? {} : history.state;
		if (isPush) if (replace$1 || isFirstNavigation) routerHistory.replace(toLocation.fullPath, /* @__PURE__ */ assign({ scroll: isFirstNavigation && state && state.scroll }, data));
		else routerHistory.push(toLocation.fullPath, data);
		currentRoute.value = toLocation;
		handleScroll(toLocation, from$1, isPush, isFirstNavigation);
		markAsReady();
	}
	let removeHistoryListener;
	function setupListeners() {
		if (removeHistoryListener) return;
		removeHistoryListener = /* @__PURE__ */ routerHistory.listen((to, _from, info) => {
			if (!router.listening) return;
			const toLocation = /* @__PURE__ */ resolve(to);
			const shouldRedirect = /* @__PURE__ */ handleRedirectRecord(toLocation, router.currentRoute.value);
			if (shouldRedirect) {
				pushWithRedirect(/* @__PURE__ */ assign(shouldRedirect, {
					replace: true,
					force: true
				}), toLocation).catch(noop$1);
				return;
			}
			pendingLocation = toLocation;
			const from$1 = currentRoute.value;
			if (isBrowser) saveScrollPosition(/* @__PURE__ */ getScrollKey(from$1.fullPath, info.delta), /* @__PURE__ */ computeScrollPosition());
			navigate(toLocation, from$1).catch((error) => {
				if (isNavigationFailure(error, ErrorTypes.NAVIGATION_ABORTED | ErrorTypes.NAVIGATION_CANCELLED)) return error;
				if (isNavigationFailure(error, ErrorTypes.NAVIGATION_GUARD_REDIRECT)) {
					pushWithRedirect(/* @__PURE__ */ assign(/* @__PURE__ */ locationAsObject(error.to), { force: true }), toLocation).then((failure) => {
						if (isNavigationFailure(failure, ErrorTypes.NAVIGATION_ABORTED | ErrorTypes.NAVIGATION_DUPLICATED) && !info.delta && info.type === NavigationType.pop) routerHistory.go(-1, false);
					}).catch(noop$1);
					return Promise.reject();
				}
				if (info.delta) routerHistory.go(-info.delta, false);
				return triggerError(error, toLocation, from$1);
			}).then((failure) => {
				failure = failure || finalizeNavigation(toLocation, from$1, false);
				if (failure) {
					if (info.delta && !isNavigationFailure(failure, ErrorTypes.NAVIGATION_CANCELLED)) routerHistory.go(-info.delta, false);
					else if (info.type === NavigationType.pop && isNavigationFailure(failure, ErrorTypes.NAVIGATION_ABORTED | ErrorTypes.NAVIGATION_DUPLICATED)) routerHistory.go(-1, false);
				}
				triggerAfterEach(toLocation, from$1, failure);
			}).catch(noop$1);
		});
	}
	let readyHandlers = /* @__PURE__ */ useCallbacks();
	let errorListeners = /* @__PURE__ */ useCallbacks();
	let ready;
	function triggerError(error, to, from$1) {
		markAsReady(error);
		const list = /* @__PURE__ */ errorListeners.list();
		if (list.length) list.forEach((handler) => handler(error, to, from$1));
		else console.error(error);
		return Promise.reject(error);
	}
	function isReady() {
		if (ready && currentRoute.value !== START_LOCATION_NORMALIZED) return Promise.resolve();
		return new Promise((resolve$1, reject) => {
			readyHandlers.add([resolve$1, reject]);
		});
	}
	function markAsReady(err) {
		if (!ready) {
			ready = !err;
			setupListeners();
			readyHandlers.list().forEach(([resolve$1, reject]) => err ? reject(err) : resolve$1());
			readyHandlers.reset();
		}
		return err;
	}
	function handleScroll(to, from$1, isPush, isFirstNavigation) {
		const { scrollBehavior } = options;
		if (!isBrowser || !scrollBehavior) return Promise.resolve();
		const scrollPosition = !isPush && getSavedScrollPosition(/* @__PURE__ */ getScrollKey(to.fullPath, 0)) || (isFirstNavigation || !isPush) && history.state && history.state.scroll || null;
		return nextTick().then(() => scrollBehavior(to, from$1, scrollPosition)).then((position) => position && scrollToPosition(position)).catch((err) => triggerError(err, to, from$1));
	}
	const go = (delta) => routerHistory.go(delta);
	let started;
	const installedApps = /* @__PURE__ */ new Set();
	const router = {
		currentRoute,
		listening: true,
		addRoute,
		removeRoute,
		clearRoutes: matcher.clearRoutes,
		hasRoute,
		getRoutes,
		resolve,
		options,
		push,
		replace,
		go,
		back: () => go(-1),
		forward: () => go(1),
		beforeEach: beforeGuards.add,
		beforeResolve: beforeResolveGuards.add,
		afterEach: afterGuards.add,
		onError: errorListeners.add,
		isReady,
		install(app) {
			app.component("RouterLink", RouterLink);
			app.component("RouterView", RouterView);
			app.config.globalProperties.$router = router;
			Object.defineProperty(app.config.globalProperties, "$route", {
				enumerable: true,
				get: () => unref(currentRoute)
			});
			if (isBrowser && !started && currentRoute.value === START_LOCATION_NORMALIZED) {
				started = true;
				push(routerHistory.location).catch((err) => {});
			}
			const reactiveRoute = {};
			for (const key in START_LOCATION_NORMALIZED) Object.defineProperty(reactiveRoute, key, {
				get: () => currentRoute.value[key],
				enumerable: true
			});
			app.provide(routerKey, router);
			app.provide(routeLocationKey, /* @__PURE__ */ shallowReactive(reactiveRoute));
			app.provide(routerViewLocationKey, currentRoute);
			const unmountApp = app.unmount;
			installedApps.add(app);
			app.unmount = function() {
				installedApps.delete(app);
				if (installedApps.size < 1) {
					pendingLocation = START_LOCATION_NORMALIZED;
					removeHistoryListener && removeHistoryListener();
					removeHistoryListener = null;
					currentRoute.value = START_LOCATION_NORMALIZED;
					started = false;
					ready = false;
				}
				unmountApp();
			};
		}
	};
	function runGuardQueue(guards) {
		return guards.reduce((promise, guard) => promise.then(() => runWithContext(guard)), /* @__PURE__ */ Promise.resolve());
	}
	return router;
}
function useRouter() {
	return inject(routerKey);
}
const RouterLink$1 = RouterLink;
const RouterView$1 = RouterView;
function isFunction$2(value) {
	return typeof value === "function";
}
function createErrorClass(createImpl) {
	var _super = function(instance) {
		Error.call(instance);
		instance.stack = (/* @__PURE__ */ new Error()).stack;
	};
	var ctorFunc = /* @__PURE__ */ createImpl(_super);
	ctorFunc.prototype = /* @__PURE__ */ Object.create(Error.prototype);
	ctorFunc.prototype.constructor = ctorFunc;
	return ctorFunc;
}
var UnsubscriptionError = /* @__PURE__ */ createErrorClass(function(_super) {
	return function UnsubscriptionErrorImpl(errors) {
		_super(this);
		this.message = errors ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function(err, i) {
			return i + 1 + ") " + err.toString();
		}).join("\n  ") : "";
		this.name = "UnsubscriptionError";
		this.errors = errors;
	};
});
function arrRemove(arr, item) {
	if (arr) {
		var index = /* @__PURE__ */ arr.indexOf(item);
		0 <= index && arr.splice(index, 1);
	}
}
var Subscription = /* @__PURE__ */ function() {
	function Subscription$1(initialTeardown) {
		this.initialTeardown = initialTeardown;
		this.closed = false;
		this._parentage = null;
		this._finalizers = null;
	}
	Subscription$1.prototype.unsubscribe = function() {
		var e_1, _a, e_2, _b;
		var errors;
		if (!this.closed) {
			this.closed = true;
			var _parentage = this._parentage;
			if (_parentage) {
				this._parentage = null;
				if (Array.isArray(_parentage)) try {
					for (var _parentage_1 = /* @__PURE__ */ __values(_parentage), _parentage_1_1 = /* @__PURE__ */ _parentage_1.next(); !_parentage_1_1.done; _parentage_1_1 = /* @__PURE__ */ _parentage_1.next()) _parentage_1_1.value.remove(this);
				} catch (e_1_1) {
					e_1 = { error: e_1_1 };
				} finally {
					try {
						if (_parentage_1_1 && !_parentage_1_1.done && (_a = _parentage_1.return)) _a.call(_parentage_1);
					} finally {
						if (e_1) throw e_1.error;
					}
				}
				else _parentage.remove(this);
			}
			var initialFinalizer = this.initialTeardown;
			if (isFunction$2(initialFinalizer)) try {
				initialFinalizer();
			} catch (e) {
				errors = e instanceof UnsubscriptionError ? e.errors : [e];
			}
			var _finalizers = this._finalizers;
			if (_finalizers) {
				this._finalizers = null;
				try {
					for (var _finalizers_1 = /* @__PURE__ */ __values(_finalizers), _finalizers_1_1 = /* @__PURE__ */ _finalizers_1.next(); !_finalizers_1_1.done; _finalizers_1_1 = /* @__PURE__ */ _finalizers_1.next()) {
						var finalizer = _finalizers_1_1.value;
						try {
							execFinalizer(finalizer);
						} catch (err) {
							errors = errors !== null && errors !== void 0 ? errors : [];
							if (err instanceof UnsubscriptionError) errors = /* @__PURE__ */ __spreadArray(/* @__PURE__ */ __spreadArray([], /* @__PURE__ */ __read(errors)), /* @__PURE__ */ __read(err.errors));
							else errors.push(err);
						}
					}
				} catch (e_2_1) {
					e_2 = { error: e_2_1 };
				} finally {
					try {
						if (_finalizers_1_1 && !_finalizers_1_1.done && (_b = _finalizers_1.return)) _b.call(_finalizers_1);
					} finally {
						if (e_2) throw e_2.error;
					}
				}
			}
			if (errors) throw new UnsubscriptionError(errors);
		}
	};
	Subscription$1.prototype.add = function(teardown) {
		var _a;
		if (teardown && teardown !== this) if (this.closed) execFinalizer(teardown);
		else {
			if (teardown instanceof Subscription$1) {
				if (teardown.closed || teardown._hasParent(this)) return;
				teardown._addParent(this);
			}
			(this._finalizers = (_a = this._finalizers) !== null && _a !== void 0 ? _a : []).push(teardown);
		}
	};
	Subscription$1.prototype._hasParent = function(parent) {
		var _parentage = this._parentage;
		return _parentage === parent || Array.isArray(_parentage) && _parentage.includes(parent);
	};
	Subscription$1.prototype._addParent = function(parent) {
		var _parentage = this._parentage;
		this._parentage = Array.isArray(_parentage) ? (_parentage.push(parent), _parentage) : _parentage ? [_parentage, parent] : parent;
	};
	Subscription$1.prototype._removeParent = function(parent) {
		var _parentage = this._parentage;
		if (_parentage === parent) this._parentage = null;
		else if (Array.isArray(_parentage)) arrRemove(_parentage, parent);
	};
	Subscription$1.prototype.remove = function(teardown) {
		var _finalizers = this._finalizers;
		_finalizers && arrRemove(_finalizers, teardown);
		if (teardown instanceof Subscription$1) teardown._removeParent(this);
	};
	Subscription$1.EMPTY = /* @__PURE__ */ function() {
		var empty = new Subscription$1();
		empty.closed = true;
		return empty;
	}();
	return Subscription$1;
}();
var EMPTY_SUBSCRIPTION = Subscription.EMPTY;
function isSubscription(value) {
	return value instanceof Subscription || value && "closed" in value && isFunction$2(value.remove) && isFunction$2(value.add) && isFunction$2(value.unsubscribe);
}
function execFinalizer(finalizer) {
	if (isFunction$2(finalizer)) finalizer();
	else finalizer.unsubscribe();
}
var config = {
	onUnhandledError: null,
	onStoppedNotification: null,
	Promise: void 0,
	useDeprecatedSynchronousErrorHandling: false,
	useDeprecatedNextContext: false
};
var timeoutProvider = {
	setTimeout: function(handler, timeout) {
		var args = [];
		for (var _i = 2; _i < arguments.length; _i++) args[_i - 2] = arguments[_i];
		var delegate = timeoutProvider.delegate;
		if (delegate === null || delegate === void 0 ? void 0 : delegate.setTimeout) return delegate.setTimeout.apply(delegate, /* @__PURE__ */ __spreadArray([handler, timeout], /* @__PURE__ */ __read(args)));
		return setTimeout.apply(void 0, /* @__PURE__ */ __spreadArray([handler, timeout], /* @__PURE__ */ __read(args)));
	},
	clearTimeout: function(handle) {
		var delegate = timeoutProvider.delegate;
		return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearTimeout) || clearTimeout)(handle);
	},
	delegate: void 0
};
function reportUnhandledError(err) {
	timeoutProvider.setTimeout(function() {
		var onUnhandledError = config.onUnhandledError;
		if (onUnhandledError) onUnhandledError(err);
		else throw err;
	});
}
function noop() {}
var COMPLETE_NOTIFICATION = /* @__PURE__ */ function() {
	return createNotification("C", void 0, void 0);
}();
function errorNotification(error) {
	return createNotification("E", void 0, error);
}
function nextNotification(value) {
	return createNotification("N", value, void 0);
}
function createNotification(kind, value, error) {
	return {
		kind,
		value,
		error
	};
}
var context = null;
function errorContext(cb) {
	if (config.useDeprecatedSynchronousErrorHandling) {
		var isRoot = !context;
		if (isRoot) context = {
			errorThrown: false,
			error: null
		};
		cb();
		if (isRoot) {
			var _a = context, errorThrown = _a.errorThrown, error = _a.error;
			context = null;
			if (errorThrown) throw error;
		}
	} else cb();
}
function captureError(err) {
	if (config.useDeprecatedSynchronousErrorHandling && context) {
		context.errorThrown = true;
		context.error = err;
	}
}
var Subscriber = /* @__PURE__ */ function(_super) {
	__extends(Subscriber$1, _super);
	function Subscriber$1(destination) {
		var _this = _super.call(this) || this;
		_this.isStopped = false;
		if (destination) {
			_this.destination = destination;
			if (isSubscription(destination)) destination.add(_this);
		} else _this.destination = EMPTY_OBSERVER;
		return _this;
	}
	Subscriber$1.create = function(next, error, complete) {
		return new SafeSubscriber(next, error, complete);
	};
	Subscriber$1.prototype.next = function(value) {
		if (this.isStopped) handleStoppedNotification(/* @__PURE__ */ nextNotification(value), this);
		else this._next(value);
	};
	Subscriber$1.prototype.error = function(err) {
		if (this.isStopped) handleStoppedNotification(/* @__PURE__ */ errorNotification(err), this);
		else {
			this.isStopped = true;
			this._error(err);
		}
	};
	Subscriber$1.prototype.complete = function() {
		if (this.isStopped) handleStoppedNotification(COMPLETE_NOTIFICATION, this);
		else {
			this.isStopped = true;
			this._complete();
		}
	};
	Subscriber$1.prototype.unsubscribe = function() {
		if (!this.closed) {
			this.isStopped = true;
			_super.prototype.unsubscribe.call(this);
			this.destination = null;
		}
	};
	Subscriber$1.prototype._next = function(value) {
		this.destination.next(value);
	};
	Subscriber$1.prototype._error = function(err) {
		try {
			this.destination.error(err);
		} finally {
			this.unsubscribe();
		}
	};
	Subscriber$1.prototype._complete = function() {
		try {
			this.destination.complete();
		} finally {
			this.unsubscribe();
		}
	};
	return Subscriber$1;
}(Subscription);
var _bind = Function.prototype.bind;
function bind(fn, thisArg) {
	return _bind.call(fn, thisArg);
}
var ConsumerObserver = /* @__PURE__ */ function() {
	function ConsumerObserver$1(partialObserver) {
		this.partialObserver = partialObserver;
	}
	ConsumerObserver$1.prototype.next = function(value) {
		var partialObserver = this.partialObserver;
		if (partialObserver.next) try {
			partialObserver.next(value);
		} catch (error) {
			handleUnhandledError(error);
		}
	};
	ConsumerObserver$1.prototype.error = function(err) {
		var partialObserver = this.partialObserver;
		if (partialObserver.error) try {
			partialObserver.error(err);
		} catch (error) {
			handleUnhandledError(error);
		}
		else handleUnhandledError(err);
	};
	ConsumerObserver$1.prototype.complete = function() {
		var partialObserver = this.partialObserver;
		if (partialObserver.complete) try {
			partialObserver.complete();
		} catch (error) {
			handleUnhandledError(error);
		}
	};
	return ConsumerObserver$1;
}();
var SafeSubscriber = /* @__PURE__ */ function(_super) {
	__extends(SafeSubscriber$1, _super);
	function SafeSubscriber$1(observerOrNext, error, complete) {
		var _this = _super.call(this) || this;
		var partialObserver;
		if (isFunction$2(observerOrNext) || !observerOrNext) partialObserver = {
			next: observerOrNext !== null && observerOrNext !== void 0 ? observerOrNext : void 0,
			error: error !== null && error !== void 0 ? error : void 0,
			complete: complete !== null && complete !== void 0 ? complete : void 0
		};
		else {
			var context_1;
			if (_this && config.useDeprecatedNextContext) {
				context_1 = /* @__PURE__ */ Object.create(observerOrNext);
				context_1.unsubscribe = function() {
					return _this.unsubscribe();
				};
				partialObserver = {
					next: observerOrNext.next && bind(observerOrNext.next, context_1),
					error: observerOrNext.error && bind(observerOrNext.error, context_1),
					complete: observerOrNext.complete && bind(observerOrNext.complete, context_1)
				};
			} else partialObserver = observerOrNext;
		}
		_this.destination = new ConsumerObserver(partialObserver);
		return _this;
	}
	return SafeSubscriber$1;
}(Subscriber);
function handleUnhandledError(error) {
	if (config.useDeprecatedSynchronousErrorHandling) captureError(error);
	else reportUnhandledError(error);
}
function defaultErrorHandler(err) {
	throw err;
}
function handleStoppedNotification(notification, subscriber) {
	var onStoppedNotification = config.onStoppedNotification;
	onStoppedNotification && timeoutProvider.setTimeout(function() {
		return onStoppedNotification(notification, subscriber);
	});
}
var EMPTY_OBSERVER = {
	closed: true,
	next: noop,
	error: defaultErrorHandler,
	complete: noop
};
var observable = /* @__PURE__ */ function() {
	return typeof Symbol === "function" && Symbol.observable || "@@observable";
}();
function identity(x) {
	return x;
}
function pipe() {
	var fns = [];
	for (var _i = 0; _i < arguments.length; _i++) fns[_i] = arguments[_i];
	return pipeFromArray(fns);
}
function pipeFromArray(fns) {
	if (fns.length === 0) return identity;
	if (fns.length === 1) return fns[0];
	return function piped(input) {
		return fns.reduce(function(prev, fn) {
			return fn(prev);
		}, input);
	};
}
var Observable = /* @__PURE__ */ function() {
	function Observable$1(subscribe) {
		if (subscribe) this._subscribe = subscribe;
	}
	Observable$1.prototype.lift = function(operator) {
		var observable$1 = new Observable$1();
		observable$1.source = this;
		observable$1.operator = operator;
		return observable$1;
	};
	Observable$1.prototype.subscribe = function(observerOrNext, error, complete) {
		var _this = this;
		var subscriber = isSubscriber(observerOrNext) ? observerOrNext : new SafeSubscriber(observerOrNext, error, complete);
		errorContext(function() {
			var _a = _this, operator = _a.operator, source = _a.source;
			subscriber.add(operator ? operator.call(subscriber, source) : source ? _this._subscribe(subscriber) : _this._trySubscribe(subscriber));
		});
		return subscriber;
	};
	Observable$1.prototype._trySubscribe = function(sink) {
		try {
			return this._subscribe(sink);
		} catch (err) {
			sink.error(err);
		}
	};
	Observable$1.prototype.forEach = function(next, promiseCtor) {
		var _this = this;
		promiseCtor = /* @__PURE__ */ getPromiseCtor(promiseCtor);
		return new promiseCtor(function(resolve, reject) {
			var subscriber = new SafeSubscriber({
				next: function(value) {
					try {
						next(value);
					} catch (err) {
						reject(err);
						subscriber.unsubscribe();
					}
				},
				error: reject,
				complete: resolve
			});
			_this.subscribe(subscriber);
		});
	};
	Observable$1.prototype._subscribe = function(subscriber) {
		var _a;
		return (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber);
	};
	Observable$1.prototype[observable] = function() {
		return this;
	};
	Observable$1.prototype.pipe = function() {
		var operations = [];
		for (var _i = 0; _i < arguments.length; _i++) operations[_i] = arguments[_i];
		return pipeFromArray(operations)(this);
	};
	Observable$1.prototype.toPromise = function(promiseCtor) {
		var _this = this;
		promiseCtor = /* @__PURE__ */ getPromiseCtor(promiseCtor);
		return new promiseCtor(function(resolve, reject) {
			var value;
			_this.subscribe(function(x) {
				return value = x;
			}, function(err) {
				return reject(err);
			}, function() {
				return resolve(value);
			});
		});
	};
	Observable$1.create = function(subscribe) {
		return new Observable$1(subscribe);
	};
	return Observable$1;
}();
function getPromiseCtor(promiseCtor) {
	var _a;
	return (_a = promiseCtor !== null && promiseCtor !== void 0 ? promiseCtor : config.Promise) !== null && _a !== void 0 ? _a : Promise;
}
function isObserver(value) {
	return value && isFunction$2(value.next) && isFunction$2(value.error) && isFunction$2(value.complete);
}
function isSubscriber(value) {
	return value && value instanceof Subscriber || isObserver(value) && isSubscription(value);
}
function hasLift(source) {
	return isFunction$2(source === null || source === void 0 ? void 0 : source.lift);
}
function operate(init) {
	return function(source) {
		if (hasLift(source)) return source.lift(function(liftedSource) {
			try {
				return init(liftedSource, this);
			} catch (err) {
				this.error(err);
			}
		});
		throw new TypeError("Unable to lift unknown Observable type");
	};
}
function createOperatorSubscriber(destination, onNext, onComplete, onError, onFinalize) {
	return new OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize);
}
var OperatorSubscriber = /* @__PURE__ */ function(_super) {
	__extends(OperatorSubscriber$1, _super);
	function OperatorSubscriber$1(destination, onNext, onComplete, onError, onFinalize, shouldUnsubscribe) {
		var _this = _super.call(this, destination) || this;
		_this.onFinalize = onFinalize;
		_this.shouldUnsubscribe = shouldUnsubscribe;
		_this._next = onNext ? function(value) {
			try {
				onNext(value);
			} catch (err) {
				destination.error(err);
			}
		} : _super.prototype._next;
		_this._error = onError ? function(err) {
			try {
				onError(err);
			} catch (err$1) {
				destination.error(err$1);
			} finally {
				this.unsubscribe();
			}
		} : _super.prototype._error;
		_this._complete = onComplete ? function() {
			try {
				onComplete();
			} catch (err) {
				destination.error(err);
			} finally {
				this.unsubscribe();
			}
		} : _super.prototype._complete;
		return _this;
	}
	OperatorSubscriber$1.prototype.unsubscribe = function() {
		var _a;
		if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
			var closed_1 = this.closed;
			_super.prototype.unsubscribe.call(this);
			!closed_1 && ((_a = this.onFinalize) === null || _a === void 0 || _a.call(this));
		}
	};
	return OperatorSubscriber$1;
}(Subscriber);
var ObjectUnsubscribedError = /* @__PURE__ */ createErrorClass(function(_super) {
	return function ObjectUnsubscribedErrorImpl() {
		_super(this);
		this.name = "ObjectUnsubscribedError";
		this.message = "object unsubscribed";
	};
});
var Subject = /* @__PURE__ */ function(_super) {
	__extends(Subject$1, _super);
	function Subject$1() {
		var _this = _super.call(this) || this;
		_this.closed = false;
		_this.currentObservers = null;
		_this.observers = [];
		_this.isStopped = false;
		_this.hasError = false;
		_this.thrownError = null;
		return _this;
	}
	Subject$1.prototype.lift = function(operator) {
		var subject = new AnonymousSubject(this, this);
		subject.operator = operator;
		return subject;
	};
	Subject$1.prototype._throwIfClosed = function() {
		if (this.closed) throw new ObjectUnsubscribedError();
	};
	Subject$1.prototype.next = function(value) {
		var _this = this;
		errorContext(function() {
			var e_1, _a;
			_this._throwIfClosed();
			if (!_this.isStopped) {
				if (!_this.currentObservers) _this.currentObservers = /* @__PURE__ */ Array.from(_this.observers);
				try {
					for (var _b = /* @__PURE__ */ __values(_this.currentObservers), _c = /* @__PURE__ */ _b.next(); !_c.done; _c = /* @__PURE__ */ _b.next()) _c.value.next(value);
				} catch (e_1_1) {
					e_1 = { error: e_1_1 };
				} finally {
					try {
						if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
					} finally {
						if (e_1) throw e_1.error;
					}
				}
			}
		});
	};
	Subject$1.prototype.error = function(err) {
		var _this = this;
		errorContext(function() {
			_this._throwIfClosed();
			if (!_this.isStopped) {
				_this.hasError = _this.isStopped = true;
				_this.thrownError = err;
				var observers = _this.observers;
				while (observers.length) observers.shift().error(err);
			}
		});
	};
	Subject$1.prototype.complete = function() {
		var _this = this;
		errorContext(function() {
			_this._throwIfClosed();
			if (!_this.isStopped) {
				_this.isStopped = true;
				var observers = _this.observers;
				while (observers.length) observers.shift().complete();
			}
		});
	};
	Subject$1.prototype.unsubscribe = function() {
		this.isStopped = this.closed = true;
		this.observers = this.currentObservers = null;
	};
	Object.defineProperty(Subject$1.prototype, "observed", {
		get: function() {
			var _a;
			return ((_a = this.observers) === null || _a === void 0 ? void 0 : _a.length) > 0;
		},
		enumerable: false,
		configurable: true
	});
	Subject$1.prototype._trySubscribe = function(subscriber) {
		this._throwIfClosed();
		return _super.prototype._trySubscribe.call(this, subscriber);
	};
	Subject$1.prototype._subscribe = function(subscriber) {
		this._throwIfClosed();
		this._checkFinalizedStatuses(subscriber);
		return this._innerSubscribe(subscriber);
	};
	Subject$1.prototype._innerSubscribe = function(subscriber) {
		var _this = this;
		var _a = this, hasError = _a.hasError, isStopped = _a.isStopped, observers = _a.observers;
		if (hasError || isStopped) return EMPTY_SUBSCRIPTION;
		this.currentObservers = null;
		observers.push(subscriber);
		return new Subscription(function() {
			_this.currentObservers = null;
			arrRemove(observers, subscriber);
		});
	};
	Subject$1.prototype._checkFinalizedStatuses = function(subscriber) {
		var _a = this, hasError = _a.hasError, thrownError = _a.thrownError, isStopped = _a.isStopped;
		if (hasError) subscriber.error(thrownError);
		else if (isStopped) subscriber.complete();
	};
	Subject$1.prototype.asObservable = function() {
		var observable$1 = new Observable();
		observable$1.source = this;
		return observable$1;
	};
	Subject$1.create = function(destination, source) {
		return new AnonymousSubject(destination, source);
	};
	return Subject$1;
}(Observable);
var AnonymousSubject = /* @__PURE__ */ function(_super) {
	__extends(AnonymousSubject$1, _super);
	function AnonymousSubject$1(destination, source) {
		var _this = _super.call(this) || this;
		_this.destination = destination;
		_this.source = source;
		return _this;
	}
	AnonymousSubject$1.prototype.next = function(value) {
		var _a, _b;
		(_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.next) === null || _b === void 0 || _b.call(_a, value);
	};
	AnonymousSubject$1.prototype.error = function(err) {
		var _a, _b;
		(_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 || _b.call(_a, err);
	};
	AnonymousSubject$1.prototype.complete = function() {
		var _a, _b;
		(_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.complete) === null || _b === void 0 || _b.call(_a);
	};
	AnonymousSubject$1.prototype._subscribe = function(subscriber) {
		var _a, _b;
		return (_b = (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber)) !== null && _b !== void 0 ? _b : EMPTY_SUBSCRIPTION;
	};
	return AnonymousSubject$1;
}(Subject);
var BehaviorSubject = /* @__PURE__ */ function(_super) {
	__extends(BehaviorSubject$1, _super);
	function BehaviorSubject$1(_value) {
		var _this = _super.call(this) || this;
		_this._value = _value;
		return _this;
	}
	Object.defineProperty(BehaviorSubject$1.prototype, "value", {
		get: function() {
			return this.getValue();
		},
		enumerable: false,
		configurable: true
	});
	BehaviorSubject$1.prototype._subscribe = function(subscriber) {
		var subscription = /* @__PURE__ */ _super.prototype._subscribe.call(this, subscriber);
		!subscription.closed && subscriber.next(this._value);
		return subscription;
	};
	BehaviorSubject$1.prototype.getValue = function() {
		var _a = this, hasError = _a.hasError, thrownError = _a.thrownError, _value = _a._value;
		if (hasError) throw thrownError;
		this._throwIfClosed();
		return _value;
	};
	BehaviorSubject$1.prototype.next = function(value) {
		_super.prototype.next.call(this, this._value = value);
	};
	return BehaviorSubject$1;
}(Subject);
var dateTimestampProvider = {
	now: function() {
		return (dateTimestampProvider.delegate || Date).now();
	},
	delegate: void 0
};
var Action = /* @__PURE__ */ function(_super) {
	__extends(Action$1, _super);
	function Action$1(scheduler, work) {
		return _super.call(this) || this;
	}
	Action$1.prototype.schedule = function(state, delay$1) {
		if (delay$1 === void 0) delay$1 = 0;
		return this;
	};
	return Action$1;
}(Subscription);
var intervalProvider = {
	setInterval: function(handler, timeout) {
		var args = [];
		for (var _i = 2; _i < arguments.length; _i++) args[_i - 2] = arguments[_i];
		var delegate = intervalProvider.delegate;
		if (delegate === null || delegate === void 0 ? void 0 : delegate.setInterval) return delegate.setInterval.apply(delegate, /* @__PURE__ */ __spreadArray([handler, timeout], /* @__PURE__ */ __read(args)));
		return setInterval.apply(void 0, /* @__PURE__ */ __spreadArray([handler, timeout], /* @__PURE__ */ __read(args)));
	},
	clearInterval: function(handle) {
		var delegate = intervalProvider.delegate;
		return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearInterval) || clearInterval)(handle);
	},
	delegate: void 0
};
var AsyncAction = /* @__PURE__ */ function(_super) {
	__extends(AsyncAction$1, _super);
	function AsyncAction$1(scheduler, work) {
		var _this = _super.call(this, scheduler, work) || this;
		_this.scheduler = scheduler;
		_this.work = work;
		_this.pending = false;
		return _this;
	}
	AsyncAction$1.prototype.schedule = function(state, delay$1) {
		var _a;
		if (delay$1 === void 0) delay$1 = 0;
		if (this.closed) return this;
		this.state = state;
		var id = this.id;
		var scheduler = this.scheduler;
		if (id != null) this.id = /* @__PURE__ */ this.recycleAsyncId(scheduler, id, delay$1);
		this.pending = true;
		this.delay = delay$1;
		this.id = (_a = this.id) !== null && _a !== void 0 ? _a : this.requestAsyncId(scheduler, this.id, delay$1);
		return this;
	};
	AsyncAction$1.prototype.requestAsyncId = function(scheduler, _id, delay$1) {
		if (delay$1 === void 0) delay$1 = 0;
		return intervalProvider.setInterval(/* @__PURE__ */ scheduler.flush.bind(scheduler, this), delay$1);
	};
	AsyncAction$1.prototype.recycleAsyncId = function(_scheduler, id, delay$1) {
		if (delay$1 === void 0) delay$1 = 0;
		if (delay$1 != null && this.delay === delay$1 && this.pending === false) return id;
		if (id != null) intervalProvider.clearInterval(id);
	};
	AsyncAction$1.prototype.execute = function(state, delay$1) {
		if (this.closed) return /* @__PURE__ */ new Error("executing a cancelled action");
		this.pending = false;
		var error = /* @__PURE__ */ this._execute(state, delay$1);
		if (error) return error;
		else if (this.pending === false && this.id != null) this.id = /* @__PURE__ */ this.recycleAsyncId(this.scheduler, this.id, null);
	};
	AsyncAction$1.prototype._execute = function(state, _delay) {
		var errored = false;
		var errorValue;
		try {
			this.work(state);
		} catch (e) {
			errored = true;
			errorValue = e ? e : /* @__PURE__ */ new Error("Scheduled action threw falsy error");
		}
		if (errored) {
			this.unsubscribe();
			return errorValue;
		}
	};
	AsyncAction$1.prototype.unsubscribe = function() {
		if (!this.closed) {
			var _a = this, id = _a.id, scheduler = _a.scheduler;
			var actions = scheduler.actions;
			this.work = this.state = this.scheduler = null;
			this.pending = false;
			arrRemove(actions, this);
			if (id != null) this.id = /* @__PURE__ */ this.recycleAsyncId(scheduler, id, null);
			this.delay = null;
			_super.prototype.unsubscribe.call(this);
		}
	};
	return AsyncAction$1;
}(Action);
var Scheduler = /* @__PURE__ */ function() {
	function Scheduler$1(schedulerActionCtor, now) {
		if (now === void 0) now = Scheduler$1.now;
		this.schedulerActionCtor = schedulerActionCtor;
		this.now = now;
	}
	Scheduler$1.prototype.schedule = function(work, delay$1, state) {
		if (delay$1 === void 0) delay$1 = 0;
		return new this.schedulerActionCtor(this, work).schedule(state, delay$1);
	};
	Scheduler$1.now = dateTimestampProvider.now;
	return Scheduler$1;
}();
var asyncScheduler = new (/* @__PURE__ */ function(_super) {
	__extends(AsyncScheduler$1, _super);
	function AsyncScheduler$1(SchedulerAction, now) {
		if (now === void 0) now = Scheduler.now;
		var _this = _super.call(this, SchedulerAction, now) || this;
		_this.actions = [];
		_this._active = false;
		return _this;
	}
	AsyncScheduler$1.prototype.flush = function(action) {
		var actions = this.actions;
		if (this._active) {
			actions.push(action);
			return;
		}
		var error;
		this._active = true;
		do
			if (error = /* @__PURE__ */ action.execute(action.state, action.delay)) break;
		while (action = /* @__PURE__ */ actions.shift());
		this._active = false;
		if (error) {
			while (action = /* @__PURE__ */ actions.shift()) action.unsubscribe();
			throw error;
		}
	};
	return AsyncScheduler$1;
}(Scheduler))(AsyncAction);
var async = asyncScheduler;
var EMPTY = new Observable(function(subscriber) {
	return subscriber.complete();
});
function isScheduler(value) {
	return value && isFunction$2(value.schedule);
}
function last(arr) {
	return arr[arr.length - 1];
}
function popResultSelector(args) {
	return isFunction$2(/* @__PURE__ */ last(args)) ? args.pop() : void 0;
}
function popScheduler(args) {
	return isScheduler(/* @__PURE__ */ last(args)) ? args.pop() : void 0;
}
function popNumber(args, defaultValue) {
	return typeof last(args) === "number" ? args.pop() : defaultValue;
}
var isArrayLike = function(x) {
	return x && typeof x.length === "number" && typeof x !== "function";
};
function isPromise(value) {
	return isFunction$2(value === null || value === void 0 ? void 0 : value.then);
}
function isInteropObservable(input) {
	return isFunction$2(input[observable]);
}
function isAsyncIterable(obj) {
	return Symbol.asyncIterator && isFunction$2(obj === null || obj === void 0 ? void 0 : obj[Symbol.asyncIterator]);
}
function createInvalidObservableTypeError(input) {
	return /* @__PURE__ */ new TypeError("You provided " + (input !== null && typeof input === "object" ? "an invalid object" : "'" + input + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
function getSymbolIterator() {
	if (typeof Symbol !== "function" || !Symbol.iterator) return "@@iterator";
	return Symbol.iterator;
}
var iterator = /* @__PURE__ */ getSymbolIterator();
function isIterable(input) {
	return isFunction$2(input === null || input === void 0 ? void 0 : input[iterator]);
}
function readableStreamLikeToAsyncGenerator(readableStream) {
	return __asyncGenerator(this, arguments, function readableStreamLikeToAsyncGenerator_1() {
		var reader, _a, value, done;
		return __generator(this, function(_b) {
			switch (_b.label) {
				case 0:
					reader = /* @__PURE__ */ readableStream.getReader();
					_b.label = 1;
				case 1:
					_b.trys.push([
						1,
						,
						9,
						10
					]);
					_b.label = 2;
				case 2: return [4, /* @__PURE__ */ __await(/* @__PURE__ */ reader.read())];
				case 3:
					_a = /* @__PURE__ */ _b.sent(), value = _a.value, done = _a.done;
					if (!done) return [3, 5];
					return [4, /* @__PURE__ */ __await(void 0)];
				case 4: return [2, /* @__PURE__ */ _b.sent()];
				case 5: return [4, /* @__PURE__ */ __await(value)];
				case 6: return [4, /* @__PURE__ */ _b.sent()];
				case 7:
					_b.sent();
					return [3, 2];
				case 8: return [3, 10];
				case 9:
					reader.releaseLock();
					return [7];
				case 10: return [2];
			}
		});
	});
}
function isReadableStreamLike(obj) {
	return isFunction$2(obj === null || obj === void 0 ? void 0 : obj.getReader);
}
function innerFrom(input) {
	if (input instanceof Observable) return input;
	if (input != null) {
		if (isInteropObservable(input)) return fromInteropObservable(input);
		if (isArrayLike(input)) return fromArrayLike(input);
		if (isPromise(input)) return fromPromise(input);
		if (isAsyncIterable(input)) return fromAsyncIterable(input);
		if (isIterable(input)) return fromIterable(input);
		if (isReadableStreamLike(input)) return fromReadableStreamLike(input);
	}
	throw createInvalidObservableTypeError(input);
}
function fromInteropObservable(obj) {
	return new Observable(function(subscriber) {
		var obs = /* @__PURE__ */ obj[observable]();
		if (isFunction$2(obs.subscribe)) return obs.subscribe(subscriber);
		throw new TypeError("Provided object does not correctly implement Symbol.observable");
	});
}
function fromArrayLike(array$1) {
	return new Observable(function(subscriber) {
		for (var i = 0; i < array$1.length && !subscriber.closed; i++) subscriber.next(array$1[i]);
		subscriber.complete();
	});
}
function fromPromise(promise) {
	return new Observable(function(subscriber) {
		promise.then(function(value) {
			if (!subscriber.closed) {
				subscriber.next(value);
				subscriber.complete();
			}
		}, function(err) {
			return subscriber.error(err);
		}).then(null, reportUnhandledError);
	});
}
function fromIterable(iterable) {
	return new Observable(function(subscriber) {
		var e_1, _a;
		try {
			for (var iterable_1 = /* @__PURE__ */ __values(iterable), iterable_1_1 = /* @__PURE__ */ iterable_1.next(); !iterable_1_1.done; iterable_1_1 = /* @__PURE__ */ iterable_1.next()) {
				var value = iterable_1_1.value;
				subscriber.next(value);
				if (subscriber.closed) return;
			}
		} catch (e_1_1) {
			e_1 = { error: e_1_1 };
		} finally {
			try {
				if (iterable_1_1 && !iterable_1_1.done && (_a = iterable_1.return)) _a.call(iterable_1);
			} finally {
				if (e_1) throw e_1.error;
			}
		}
		subscriber.complete();
	});
}
function fromAsyncIterable(asyncIterable) {
	return new Observable(function(subscriber) {
		process(asyncIterable, subscriber).catch(function(err) {
			return subscriber.error(err);
		});
	});
}
function fromReadableStreamLike(readableStream) {
	return fromAsyncIterable(/* @__PURE__ */ readableStreamLikeToAsyncGenerator(readableStream));
}
function process(asyncIterable, subscriber) {
	var asyncIterable_1, asyncIterable_1_1;
	var e_2, _a;
	return __awaiter(this, void 0, void 0, function() {
		var value, e_2_1;
		return __generator(this, function(_b) {
			switch (_b.label) {
				case 0:
					_b.trys.push([
						0,
						5,
						6,
						11
					]);
					asyncIterable_1 = /* @__PURE__ */ __asyncValues(asyncIterable);
					_b.label = 1;
				case 1: return [4, /* @__PURE__ */ asyncIterable_1.next()];
				case 2:
					if (!(asyncIterable_1_1 = /* @__PURE__ */ _b.sent(), !asyncIterable_1_1.done)) return [3, 4];
					value = asyncIterable_1_1.value;
					subscriber.next(value);
					if (subscriber.closed) return [2];
					_b.label = 3;
				case 3: return [3, 1];
				case 4: return [3, 11];
				case 5:
					e_2_1 = /* @__PURE__ */ _b.sent();
					e_2 = { error: e_2_1 };
					return [3, 11];
				case 6:
					_b.trys.push([
						6,
						,
						9,
						10
					]);
					if (!(asyncIterable_1_1 && !asyncIterable_1_1.done && (_a = asyncIterable_1.return))) return [3, 8];
					return [4, /* @__PURE__ */ _a.call(asyncIterable_1)];
				case 7:
					_b.sent();
					_b.label = 8;
				case 8: return [3, 10];
				case 9:
					if (e_2) throw e_2.error;
					return [7];
				case 10: return [7];
				case 11:
					subscriber.complete();
					return [2];
			}
		});
	});
}
function executeSchedule(parentSubscription, scheduler, work, delay$1, repeat) {
	if (delay$1 === void 0) delay$1 = 0;
	if (repeat === void 0) repeat = false;
	var scheduleSubscription = /* @__PURE__ */ scheduler.schedule(function() {
		work();
		if (repeat) parentSubscription.add(/* @__PURE__ */ this.schedule(null, delay$1));
		else this.unsubscribe();
	}, delay$1);
	parentSubscription.add(scheduleSubscription);
	if (!repeat) return scheduleSubscription;
}
function observeOn(scheduler, delay$1) {
	if (delay$1 === void 0) delay$1 = 0;
	return operate(function(source, subscriber) {
		source.subscribe(/* @__PURE__ */ createOperatorSubscriber(subscriber, function(value) {
			return executeSchedule(subscriber, scheduler, function() {
				return subscriber.next(value);
			}, delay$1);
		}, function() {
			return executeSchedule(subscriber, scheduler, function() {
				return subscriber.complete();
			}, delay$1);
		}, function(err) {
			return executeSchedule(subscriber, scheduler, function() {
				return subscriber.error(err);
			}, delay$1);
		}));
	});
}
function subscribeOn(scheduler, delay$1) {
	if (delay$1 === void 0) delay$1 = 0;
	return operate(function(source, subscriber) {
		subscriber.add(/* @__PURE__ */ scheduler.schedule(function() {
			return source.subscribe(subscriber);
		}, delay$1));
	});
}
function scheduleObservable(input, scheduler) {
	return innerFrom(input).pipe(/* @__PURE__ */ subscribeOn(scheduler), /* @__PURE__ */ observeOn(scheduler));
}
function schedulePromise(input, scheduler) {
	return innerFrom(input).pipe(/* @__PURE__ */ subscribeOn(scheduler), /* @__PURE__ */ observeOn(scheduler));
}
function scheduleArray(input, scheduler) {
	return new Observable(function(subscriber) {
		var i = 0;
		return scheduler.schedule(function() {
			if (i === input.length) subscriber.complete();
			else {
				subscriber.next(input[i++]);
				if (!subscriber.closed) this.schedule();
			}
		});
	});
}
function scheduleIterable(input, scheduler) {
	return new Observable(function(subscriber) {
		var iterator$2;
		executeSchedule(subscriber, scheduler, function() {
			iterator$2 = /* @__PURE__ */ input[iterator]();
			executeSchedule(subscriber, scheduler, function() {
				var _a;
				var value;
				var done;
				try {
					_a = /* @__PURE__ */ iterator$2.next(), value = _a.value, done = _a.done;
				} catch (err) {
					subscriber.error(err);
					return;
				}
				if (done) subscriber.complete();
				else subscriber.next(value);
			}, 0, true);
		});
		return function() {
			return isFunction$2(iterator$2 === null || iterator$2 === void 0 ? void 0 : iterator$2.return) && iterator$2.return();
		};
	});
}
function scheduleAsyncIterable(input, scheduler) {
	if (!input) throw new Error("Iterable cannot be null");
	return new Observable(function(subscriber) {
		executeSchedule(subscriber, scheduler, function() {
			var iterator$2 = /* @__PURE__ */ input[Symbol.asyncIterator]();
			executeSchedule(subscriber, scheduler, function() {
				iterator$2.next().then(function(result) {
					if (result.done) subscriber.complete();
					else subscriber.next(result.value);
				});
			}, 0, true);
		});
	});
}
function scheduleReadableStreamLike(input, scheduler) {
	return scheduleAsyncIterable(/* @__PURE__ */ readableStreamLikeToAsyncGenerator(input), scheduler);
}
function scheduled(input, scheduler) {
	if (input != null) {
		if (isInteropObservable(input)) return scheduleObservable(input, scheduler);
		if (isArrayLike(input)) return scheduleArray(input, scheduler);
		if (isPromise(input)) return schedulePromise(input, scheduler);
		if (isAsyncIterable(input)) return scheduleAsyncIterable(input, scheduler);
		if (isIterable(input)) return scheduleIterable(input, scheduler);
		if (isReadableStreamLike(input)) return scheduleReadableStreamLike(input, scheduler);
	}
	throw createInvalidObservableTypeError(input);
}
function from(input, scheduler) {
	return scheduler ? scheduled(input, scheduler) : innerFrom(input);
}
function isObservable(obj) {
	return !!obj && (obj instanceof Observable || isFunction$2(obj.lift) && isFunction$2(obj.subscribe));
}
function isValidDate(value) {
	return value instanceof Date && !isNaN(value);
}
function map(project, thisArg) {
	return operate(function(source, subscriber) {
		var index = 0;
		source.subscribe(/* @__PURE__ */ createOperatorSubscriber(subscriber, function(value) {
			subscriber.next(/* @__PURE__ */ project.call(thisArg, value, index++));
		}));
	});
}
var isArray$2 = Array.isArray;
function callOrApply(fn, args) {
	return isArray$2(args) ? fn.apply(void 0, /* @__PURE__ */ __spreadArray([], /* @__PURE__ */ __read(args))) : fn(args);
}
function mapOneOrManyArgs(fn) {
	return map(function(args) {
		return callOrApply(fn, args);
	});
}
var isArray$1 = Array.isArray;
var getPrototypeOf = Object.getPrototypeOf, objectProto = Object.prototype, getKeys = Object.keys;
function argsArgArrayOrObject(args) {
	if (args.length === 1) {
		var first_1 = args[0];
		if (isArray$1(first_1)) return {
			args: first_1,
			keys: null
		};
		if (isPOJO(first_1)) {
			var keys$1 = /* @__PURE__ */ getKeys(first_1);
			return {
				args: /* @__PURE__ */ keys$1.map(function(key) {
					return first_1[key];
				}),
				keys: keys$1
			};
		}
	}
	return {
		args,
		keys: null
	};
}
function isPOJO(obj) {
	return obj && typeof obj === "object" && getPrototypeOf(obj) === objectProto;
}
function createObject(keys$1, values) {
	return keys$1.reduce(function(result, key, i) {
		return result[key] = values[i], result;
	}, {});
}
function combineLatest() {
	var args = [];
	for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
	var scheduler = /* @__PURE__ */ popScheduler(args);
	var resultSelector = /* @__PURE__ */ popResultSelector(args);
	var _a = /* @__PURE__ */ argsArgArrayOrObject(args), observables = _a.args, keys$1 = _a.keys;
	if (observables.length === 0) return from([], scheduler);
	var result = new Observable(combineLatestInit(observables, scheduler, keys$1 ? function(values) {
		return createObject(keys$1, values);
	} : identity));
	return resultSelector ? result.pipe(/* @__PURE__ */ mapOneOrManyArgs(resultSelector)) : result;
}
function combineLatestInit(observables, scheduler, valueTransform) {
	if (valueTransform === void 0) valueTransform = identity;
	return function(subscriber) {
		maybeSchedule(scheduler, function() {
			var length = observables.length;
			var values = new Array(length);
			var active = length;
			var remainingFirstValues = length;
			var _loop_1 = function(i$1) {
				maybeSchedule(scheduler, function() {
					var source = /* @__PURE__ */ from(observables[i$1], scheduler);
					var hasFirstValue = false;
					source.subscribe(/* @__PURE__ */ createOperatorSubscriber(subscriber, function(value) {
						values[i$1] = value;
						if (!hasFirstValue) {
							hasFirstValue = true;
							remainingFirstValues--;
						}
						if (!remainingFirstValues) subscriber.next(/* @__PURE__ */ valueTransform(/* @__PURE__ */ values.slice()));
					}, function() {
						if (!--active) subscriber.complete();
					}));
				}, subscriber);
			};
			for (var i = 0; i < length; i++) _loop_1(i);
		}, subscriber);
	};
}
function maybeSchedule(scheduler, execute, subscription) {
	if (scheduler) executeSchedule(subscription, scheduler, execute);
	else execute();
}
function mergeInternals(source, subscriber, project, concurrent, onBeforeNext, expand, innerSubScheduler, additionalFinalizer) {
	var buffer = [];
	var active = 0;
	var index = 0;
	var isComplete = false;
	var checkComplete = function() {
		if (isComplete && !buffer.length && !active) subscriber.complete();
	};
	var outerNext = function(value) {
		return active < concurrent ? doInnerSub(value) : buffer.push(value);
	};
	var doInnerSub = function(value) {
		expand && subscriber.next(value);
		active++;
		var innerComplete = false;
		innerFrom(/* @__PURE__ */ project(value, index++)).subscribe(/* @__PURE__ */ createOperatorSubscriber(subscriber, function(innerValue) {
			onBeforeNext === null || onBeforeNext === void 0 || onBeforeNext(innerValue);
			if (expand) outerNext(innerValue);
			else subscriber.next(innerValue);
		}, function() {
			innerComplete = true;
		}, void 0, function() {
			if (innerComplete) try {
				active--;
				var _loop_1 = function() {
					var bufferedValue = /* @__PURE__ */ buffer.shift();
					if (innerSubScheduler) executeSchedule(subscriber, innerSubScheduler, function() {
						return doInnerSub(bufferedValue);
					});
					else doInnerSub(bufferedValue);
				};
				while (buffer.length && active < concurrent) _loop_1();
				checkComplete();
			} catch (err) {
				subscriber.error(err);
			}
		}));
	};
	source.subscribe(/* @__PURE__ */ createOperatorSubscriber(subscriber, outerNext, function() {
		isComplete = true;
		checkComplete();
	}));
	return function() {
		additionalFinalizer === null || additionalFinalizer === void 0 || additionalFinalizer();
	};
}
function mergeMap(project, resultSelector, concurrent) {
	if (concurrent === void 0) concurrent = Infinity;
	if (isFunction$2(resultSelector)) return mergeMap(function(a, i) {
		return map(function(b, ii) {
			return resultSelector(a, b, i, ii);
		})(/* @__PURE__ */ innerFrom(/* @__PURE__ */ project(a, i)));
	}, concurrent);
	else if (typeof resultSelector === "number") concurrent = resultSelector;
	return operate(function(source, subscriber) {
		return mergeInternals(source, subscriber, project, concurrent);
	});
}
function mergeAll(concurrent) {
	if (concurrent === void 0) concurrent = Infinity;
	return mergeMap(identity, concurrent);
}
function concatAll() {
	return mergeAll(1);
}
function concat() {
	var args = [];
	for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
	return concatAll()(/* @__PURE__ */ from(args, /* @__PURE__ */ popScheduler(args)));
}
var nodeEventEmitterMethods = ["addListener", "removeListener"];
var eventTargetMethods = ["addEventListener", "removeEventListener"];
var jqueryMethods = ["on", "off"];
function fromEvent(target, eventName, options, resultSelector) {
	if (isFunction$2(options)) {
		resultSelector = options;
		options = void 0;
	}
	if (resultSelector) return fromEvent(target, eventName, options).pipe(/* @__PURE__ */ mapOneOrManyArgs(resultSelector));
	var _a = /* @__PURE__ */ __read(isEventTarget(target) ? eventTargetMethods.map(function(methodName) {
		return function(handler) {
			return target[methodName](eventName, handler, options);
		};
	}) : isNodeStyleEventEmitter(target) ? nodeEventEmitterMethods.map(/* @__PURE__ */ toCommonHandlerRegistry(target, eventName)) : isJQueryStyleEventEmitter(target) ? jqueryMethods.map(/* @__PURE__ */ toCommonHandlerRegistry(target, eventName)) : [], 2), add = _a[0], remove$1 = _a[1];
	if (!add) {
		if (isArrayLike(target)) return mergeMap(function(subTarget) {
			return fromEvent(subTarget, eventName, options);
		})(/* @__PURE__ */ innerFrom(target));
	}
	if (!add) throw new TypeError("Invalid event target");
	return new Observable(function(subscriber) {
		var handler = function() {
			var args = [];
			for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
			return subscriber.next(1 < args.length ? args : args[0]);
		};
		add(handler);
		return function() {
			return remove$1(handler);
		};
	});
}
function toCommonHandlerRegistry(target, eventName) {
	return function(methodName) {
		return function(handler) {
			return target[methodName](eventName, handler);
		};
	};
}
function isNodeStyleEventEmitter(target) {
	return isFunction$2(target.addListener) && isFunction$2(target.removeListener);
}
function isJQueryStyleEventEmitter(target) {
	return isFunction$2(target.on) && isFunction$2(target.off);
}
function isEventTarget(target) {
	return isFunction$2(target.addEventListener) && isFunction$2(target.removeEventListener);
}
function timer(dueTime, intervalOrScheduler, scheduler) {
	if (dueTime === void 0) dueTime = 0;
	if (scheduler === void 0) scheduler = async;
	var intervalDuration = -1;
	if (intervalOrScheduler != null) if (isScheduler(intervalOrScheduler)) scheduler = intervalOrScheduler;
	else intervalDuration = intervalOrScheduler;
	return new Observable(function(subscriber) {
		var due = isValidDate(dueTime) ? +dueTime - scheduler.now() : dueTime;
		if (due < 0) due = 0;
		var n1 = 0;
		return scheduler.schedule(function() {
			if (!subscriber.closed) {
				subscriber.next(n1++);
				if (0 <= intervalDuration) this.schedule(void 0, intervalDuration);
				else subscriber.complete();
			}
		}, due);
	});
}
function merge() {
	var args = [];
	for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
	var scheduler = /* @__PURE__ */ popScheduler(args);
	var concurrent = /* @__PURE__ */ popNumber(args, Infinity);
	var sources = args;
	return !sources.length ? EMPTY : sources.length === 1 ? innerFrom(sources[0]) : mergeAll(concurrent)(/* @__PURE__ */ from(sources, scheduler));
}
function debounceTime(dueTime, scheduler) {
	if (scheduler === void 0) scheduler = asyncScheduler;
	return operate(function(source, subscriber) {
		var activeTask = null;
		var lastValue = null;
		var lastTime = null;
		var emit$1 = function() {
			if (activeTask) {
				activeTask.unsubscribe();
				activeTask = null;
				var value = lastValue;
				lastValue = null;
				subscriber.next(value);
			}
		};
		function emitWhenIdle() {
			var targetTime = lastTime + dueTime;
			var now = /* @__PURE__ */ scheduler.now();
			if (now < targetTime) {
				activeTask = /* @__PURE__ */ this.schedule(void 0, targetTime - now);
				subscriber.add(activeTask);
				return;
			}
			emit$1();
		}
		source.subscribe(/* @__PURE__ */ createOperatorSubscriber(subscriber, function(value) {
			lastValue = value;
			lastTime = /* @__PURE__ */ scheduler.now();
			if (!activeTask) {
				activeTask = /* @__PURE__ */ scheduler.schedule(emitWhenIdle, dueTime);
				subscriber.add(activeTask);
			}
		}, function() {
			emit$1();
			subscriber.complete();
		}, void 0, function() {
			lastValue = activeTask = null;
		}));
	});
}
function take(count) {
	return count <= 0 ? function() {
		return EMPTY;
	} : operate(function(source, subscriber) {
		var seen = 0;
		source.subscribe(/* @__PURE__ */ createOperatorSubscriber(subscriber, function(value) {
			if (++seen <= count) {
				subscriber.next(value);
				if (count <= seen) subscriber.complete();
			}
		}));
	});
}
function ignoreElements() {
	return operate(function(source, subscriber) {
		source.subscribe(/* @__PURE__ */ createOperatorSubscriber(subscriber, noop));
	});
}
function mapTo(value) {
	return map(function() {
		return value;
	});
}
function delayWhen(delayDurationSelector, subscriptionDelay) {
	if (subscriptionDelay) return function(source) {
		return concat(/* @__PURE__ */ subscriptionDelay.pipe(/* @__PURE__ */ take(1), /* @__PURE__ */ ignoreElements()), /* @__PURE__ */ source.pipe(/* @__PURE__ */ delayWhen(delayDurationSelector)));
	};
	return mergeMap(function(value, index) {
		return innerFrom(/* @__PURE__ */ delayDurationSelector(value, index)).pipe(/* @__PURE__ */ take(1), /* @__PURE__ */ mapTo(value));
	});
}
function delay(due, scheduler) {
	if (scheduler === void 0) scheduler = asyncScheduler;
	var duration = /* @__PURE__ */ timer(due, scheduler);
	return delayWhen(function() {
		return duration;
	});
}
function distinctUntilChanged(comparator, keySelector) {
	if (keySelector === void 0) keySelector = identity;
	comparator = comparator !== null && comparator !== void 0 ? comparator : defaultCompare;
	return operate(function(source, subscriber) {
		var previousKey;
		var first = true;
		source.subscribe(/* @__PURE__ */ createOperatorSubscriber(subscriber, function(value) {
			var currentKey = /* @__PURE__ */ keySelector(value);
			if (first || !comparator(previousKey, currentKey)) {
				first = false;
				previousKey = currentKey;
				subscriber.next(value);
			}
		}));
	});
}
function defaultCompare(a, b) {
	return a === b;
}
function switchMap(project, resultSelector) {
	return operate(function(source, subscriber) {
		var innerSubscriber = null;
		var index = 0;
		var isComplete = false;
		var checkComplete = function() {
			return isComplete && !innerSubscriber && subscriber.complete();
		};
		source.subscribe(/* @__PURE__ */ createOperatorSubscriber(subscriber, function(value) {
			innerSubscriber === null || innerSubscriber === void 0 || innerSubscriber.unsubscribe();
			var innerIndex = 0;
			var outerIndex = index++;
			innerFrom(/* @__PURE__ */ project(value, outerIndex)).subscribe(innerSubscriber = /* @__PURE__ */ createOperatorSubscriber(subscriber, function(innerValue) {
				return subscriber.next(resultSelector ? resultSelector(value, innerValue, outerIndex, innerIndex++) : innerValue);
			}, function() {
				innerSubscriber = null;
				checkComplete();
			}));
		}, function() {
			isComplete = true;
			checkComplete();
		}));
	});
}
function tap(observerOrNext, error, complete) {
	var tapObserver = isFunction$2(observerOrNext) || error || complete ? {
		next: observerOrNext,
		error,
		complete
	} : observerOrNext;
	return tapObserver ? operate(function(source, subscriber) {
		var _a;
		(_a = tapObserver.subscribe) === null || _a === void 0 || _a.call(tapObserver);
		var isUnsub = true;
		source.subscribe(/* @__PURE__ */ createOperatorSubscriber(subscriber, function(value) {
			var _a$1;
			(_a$1 = tapObserver.next) === null || _a$1 === void 0 || _a$1.call(tapObserver, value);
			subscriber.next(value);
		}, function() {
			var _a$1;
			isUnsub = false;
			(_a$1 = tapObserver.complete) === null || _a$1 === void 0 || _a$1.call(tapObserver);
			subscriber.complete();
		}, function(err) {
			var _a$1;
			isUnsub = false;
			(_a$1 = tapObserver.error) === null || _a$1 === void 0 || _a$1.call(tapObserver, err);
			subscriber.error(err);
		}, function() {
			var _a$1, _b;
			if (isUnsub) (_a$1 = tapObserver.unsubscribe) === null || _a$1 === void 0 || _a$1.call(tapObserver);
			(_b = tapObserver.finalize) === null || _b === void 0 || _b.call(tapObserver);
		}));
	}) : identity;
}
function rx(source, ...operations) {
	return pipe(...operations)(/* @__PURE__ */ from(source));
}
var ImmerBehaviorSubject = class ImmerBehaviorSubject extends Observable {
	static seed(seed) {
		return new ImmerBehaviorSubject(seed);
	}
	_value;
	_subject$ = new Subject();
	constructor(seed) {
		super((subscriber) => {
			const sub = /* @__PURE__ */ this._subject$.subscribe(subscriber);
			this._subject$.next(this._value);
			return () => {
				sub.unsubscribe();
			};
		});
		this._value = seed;
	}
	get value() {
		return this._value;
	}
	next(valueOrUpdater, defaultValue) {
		const v1 = isFunction(valueOrUpdater) ? produce(this._value ?? defaultValue, valueOrUpdater) : valueOrUpdater;
		if (!Object.is(v1, this._value)) this._subject$.next(this._value = v1);
	}
};
const SymbolForwardRef = /* @__PURE__ */ Symbol("forwardRef");
function ref$1(defaultValue) {
	let currentValue = defaultValue;
	return customRef((track$1, trigger$1) => {
		return {
			get() {
				track$1();
				return currentValue;
			},
			set(value) {
				const newValue = value?.[SymbolForwardRef] ?? value;
				if (newValue !== currentValue) {
					currentValue = newValue;
					trigger$1();
				}
			}
		};
	});
}
function subscribeUntilUnmount(observerOrNext) {
	return (ob$) => {
		const sub = /* @__PURE__ */ ob$.subscribe(observerOrNext);
		onBeforeUnmount(() => sub.unsubscribe());
	};
}
function subscribeOnMountedUntilUnmount(observerOrNext) {
	return (ob$) => {
		let sub;
		onMounted(() => {
			sub = /* @__PURE__ */ ob$.subscribe(observerOrNext);
		});
		onBeforeUnmount(() => sub?.unsubscribe());
	};
}
const observableRef = (value) => {
	const store$ = new ImmerBehaviorSubject(value);
	const ref$3 = /* @__PURE__ */ customRef((track$1, trigger$1) => {
		return {
			get() {
				track$1();
				return store$.value;
			},
			set(value$1) {
				const newValue = value$1?.[SymbolForwardRef] ?? value$1;
				if (!Object.is(newValue, store$.value)) {
					store$.next(newValue);
					trigger$1();
				}
			}
		};
	});
	return new Proxy(store$, {
		get(_, p) {
			if (p === "next") return (valueOrUpdater) => {
				ref$3.value = isFunction(valueOrUpdater) ? produce(store$.value, valueOrUpdater) : valueOrUpdater;
			};
			if (p === "value") return ref$3.value;
			return store$[p] ?? ref$3[p];
		},
		set(value$, p, newValue) {
			if (p === "value") {
				ref$3.value = newValue;
				return true;
			}
			value$[p] = newValue;
			return true;
		}
	});
};
var isFunction$1 = (val) => typeof val === "function";
var isUndefined$1 = (val) => typeof val === "undefined";
var isFragment = (val) => val === Fragment;
var isTagOrInternal = (val) => {
	if (isFragment(val)) return true;
	if (typeof val === "string") return true;
	if (typeof val === "object") {
		if (val.__isTeleport) return true;
	}
	return false;
};
var isSlots = (children) => {
	return children && !Array.isArray(children) && !isVNode(children) && typeof children === "object";
};
var wrapSlot = (children) => {
	if (isFunction$1(children)) return children;
	if (Array.isArray(children)) return () => children;
	return isUndefined$1(children) ? children : () => children;
};
var pickPropsWithoutSlots = (rawProps, key) => {
	const { children,...otherProps } = rawProps;
	if (isSlots(children)) return [key ? {
		...otherProps,
		key
	} : otherProps, children];
	const props = {};
	const slots = {};
	let hasAnySlot = false;
	for (const prop in otherProps) {
		const v1 = otherProps[prop];
		if (prop.startsWith("$")) {
			const slotName = /* @__PURE__ */ prop.slice(1);
			slots[slotName] = /* @__PURE__ */ wrapSlot(v1);
			hasAnySlot = true;
			continue;
		}
		props[prop] = v1;
	}
	const defaultSlot = /* @__PURE__ */ wrapSlot(children);
	if (defaultSlot) {
		slots["default"] = defaultSlot;
		hasAnySlot = true;
	}
	return [key ? {
		...props,
		key
	} : props, hasAnySlot ? slots : void 0];
};
var jsxs = (type, rawProps, key) => {
	return jsx(type, rawProps, key);
};
var jsx = (type, rawProps, key) => {
	const [props, slots] = pickPropsWithoutSlots(rawProps, key);
	if (isTagOrInternal(type)) return h(type, props, slots?.default?.() ?? (isFragment(type) ? [] : void 0));
	return h(type, props, slots);
};
function render(renderFunc) {
	return (input$) => {
		return /* @__PURE__ */ jsx(RxSlot, {
			renderFn$: /* @__PURE__ */ input$.pipe(/* @__PURE__ */ map((v1) => () => renderFunc(v1))),
			children: {}
		});
	};
}
var RxSlot = /* @__PURE__ */ component({ renderFn$: /* @__PURE__ */ custom() }, (props, _) => {
	let renderFunc = null;
	rx(props.renderFn$, /* @__PURE__ */ tap((renderFn) => {
		renderFunc = renderFn;
	}), /* @__PURE__ */ subscribeUntilUnmount());
	const tick = /* @__PURE__ */ observableRef(1);
	rx(props.renderFn$, /* @__PURE__ */ tap(() => {
		tick.value += 1;
	}), /* @__PURE__ */ subscribeOnMountedUntilUnmount());
	return () => {
		return tick.value ? renderFunc?.() : null;
	};
}, { name: "RxSlot" }, { displayName: "RxSlot" });
const toObservable = (obj, key) => {
	const value$ = new BehaviorSubject(obj[key]);
	watch(() => obj[key], (v1) => value$.next(v1));
	return value$;
};
const toObservables = (obj) => {
	const refs = {};
	for (const k in obj) {
		if (isFunction(obj[k]) || isObservable(obj[k])) {
			refs[k] = obj[k];
			continue;
		}
		refs[`${k}$`] = /* @__PURE__ */ toObservable(obj, k);
	}
	return refs;
};
function component$(...args) {
	let finalPropTypes = {};
	let finalSetup = void 0;
	let finalOptions = {};
	for (const arg of args) {
		if (isFunction(arg)) {
			finalSetup = arg;
			continue;
		}
		if (isUndefined(finalSetup)) finalPropTypes = arg;
		else finalOptions = arg;
	}
	return component(finalPropTypes, (props, ctx) => {
		const props$ = /* @__PURE__ */ toObservables(props);
		const p = new Proxy({}, { get(_, key) {
			return props[key] ?? props$[key];
		} });
		const c = new Proxy({}, { get(_, key) {
			if (key === "render") return render;
			return ctx[key];
		} });
		const renderFuncOrVNode = /* @__PURE__ */ finalSetup(p, c);
		if (isFunction(renderFuncOrVNode)) return renderFuncOrVNode;
		return () => renderFuncOrVNode;
	}, finalOptions);
}
var equal = (a, b) => {
	if (isArray(a) && isArray(b)) {
		if (a.length !== b.length) return false;
		for (const i in a) if (!Object.is(a[i], b[i])) return false;
		return true;
	}
	return Object.is(a, b);
};
const tapEffect = (create) => {
	let cleanup = void 0;
	let prevInput = null;
	return tap({
		next: (input) => {
			if (!equal(input, prevInput)) {
				cleanup?.();
				cleanup = /* @__PURE__ */ create(input);
				prevInput = input;
			}
		},
		unsubscribe: () => {
			cleanup?.();
		}
	});
};
function createProvider(...args) {
	let finalPropTypes = {};
	let finalCreate = void 0;
	let finalOptions = {};
	for (const arg of args) {
		if (isFunction(arg)) {
			finalCreate = arg;
			continue;
		}
		if (isUndefined(finalCreate)) finalPropTypes = arg;
		else finalOptions = arg;
	}
	const key = /* @__PURE__ */ Symbol(finalOptions?.["name"] ?? "");
	if (isEmpty(finalPropTypes) && isEmpty(finalOptions["props"])) {
		let _default$1;
		const getDefaults = () => {
			return _default$1 ??= /* @__PURE__ */ finalCreate({});
		};
		return ext(/* @__PURE__ */ component({
			value: /* @__PURE__ */ custom().optional(),
			$default: /* @__PURE__ */ custom().optional()
		}, (props, { slots }) => {
			provide(key, props.value ?? getDefaults());
			return () => {
				return slots.default?.();
			};
		}, {
			...finalOptions,
			name: `Provide(${finalOptions?.["name"] ?? ""})`
		}, { displayName: "Provider" }), { use: () => {
			return inject(key, getDefaults, true);
		} });
	}
	const propsSchema = /* @__PURE__ */ object(finalPropTypes);
	const getDefaultProps = () => propsSchema.create({});
	let _default;
	return ext(/* @__PURE__ */ component({
		...finalPropTypes,
		$default: /* @__PURE__ */ custom().optional()
	}, (props, { slots }) => {
		provide(key, _default = /* @__PURE__ */ finalCreate(props));
		return () => {
			return slots.default?.();
		};
	}, {
		...finalOptions,
		name: `Provide(${finalOptions?.["name"] ?? ""})`
	}, { displayName: "Provider" }), { use: () => {
		return inject(key, () => {
			return _default ??= /* @__PURE__ */ finalCreate(/* @__PURE__ */ getDefaultProps());
		}, true);
	} });
}
var index_md_CodeBlock4b227777_default = /* @__PURE__ */ component(() => {
	const count = /* @__PURE__ */ ref(1);
	return () => /* @__PURE__ */ jsxs("div", {
		style: {
			display: "flex",
			gap: "1rem"
		},
		children: [/* @__PURE__ */ jsxs("div", { children: ["Counts: ", count.value] }), /* @__PURE__ */ jsx("button", {
			onClick: () => count.value++,
			children: "Click To Count"
		})]
	});
});
var TextInput = /* @__PURE__ */ component({
	value: /* @__PURE__ */ string().optional().default("1"),
	type: /* @__PURE__ */ enums(["text", "number"]),
	onValueChange: /* @__PURE__ */ custom()
}, (props, { emit: emit$1 }) => {
	return () => /* @__PURE__ */ jsx("input", {
		value: props.value,
		onInput: (e) => {
			emit$1("value-change", e.target.value);
		}
	});
}, { displayName: "TextInput" });
var List = /* @__PURE__ */ component({
	$title: /* @__PURE__ */ custom().optional(),
	$item: /* @__PURE__ */ custom().optional(),
	$default: /* @__PURE__ */ custom().optional()
}, ({}, { slots }) => () => {
	return /* @__PURE__ */ jsxs("dl", { children: [
		/* @__PURE__ */ jsx("dt", { children: "default" }),
		/* @__PURE__ */ jsx("dd", { children: slots.default?.() }),
		/* @__PURE__ */ jsx("dt", { children: "title" }),
		/* @__PURE__ */ jsx("dd", { children: slots.title?.() }),
		/* @__PURE__ */ jsx("dt", { children: "item" }),
		/* @__PURE__ */ jsx("dd", { children: /* @__PURE__ */ [{
			label: "1",
			value: "1"
		}, {
			label: "2",
			value: "2"
		}].map((option) => slots.item?.(option)) })
	] });
}, { displayName: "List" });
var index_md_CodeBlock4a44dc15_default = /* @__PURE__ */ component(() => {
	const inputValue = /* @__PURE__ */ ref("");
	return () => /* @__PURE__ */ jsx(List, {
		$title: /* @__PURE__ */ jsxs("div", { children: ["Inputted: ", inputValue.value] }),
		$item: (o) => /* @__PURE__ */ jsx("div", { children: o.label }),
		children: /* @__PURE__ */ jsx(TextInput, {
			type: "text",
			onValueChange: (value) => {
				inputValue.value = value;
			}
		})
	});
});
function _createMdxContent$1(props) {
	const _components = {
		code: "code",
		codeblock4a44dc15: "codeblock4a44dc15",
		codeblock4b227777: "codeblock4b227777",
		div: "div",
		li: "li",
		p: "p",
		pre: "pre",
		span: "span",
		ul: "ul",
		...props.components
	};
	return jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(_components.p, { children: "为了更好的 TypeScript 和 JSX 的支持，重新抽象了定义组件的方式" }),
		"\n",
		/* @__PURE__ */ jsx(_components.p, { children: "一般组件：" }),
		"\n",
		/* @__PURE__ */ jsxs(_components.div, {
			"data-example": "",
			children: [/* @__PURE__ */ jsx(_components.div, {
				"data-example-container": "",
				children: /* @__PURE__ */ jsx(_components.codeblock4b227777, {})
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
						" count ",
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
							className: "token number",
							children: "1"
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
									}), "div"]
								}),
								" ",
								/* @__PURE__ */ jsx(_components.span, {
									className: "token attr-name",
									children: "style"
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
											className: "token string",
											children: "\"1rem\""
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
								}), "div"]
							}), /* @__PURE__ */ jsx(_components.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token plain-text",
							children: "Counts: "
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "{"
						}),
						"count",
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
						}),
						/* @__PURE__ */ jsxs(_components.span, {
							className: "token tag",
							children: [/* @__PURE__ */ jsxs(_components.span, {
								className: "token tag",
								children: [/* @__PURE__ */ jsx(_components.span, {
									className: "token punctuation",
									children: "</"
								}), "div"]
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
									}), "button"]
								}),
								" ",
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
										" count",
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "."
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token property-access",
											children: "value"
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token operator",
											children: "++"
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
							children: "Click To Count"
						}),
						/* @__PURE__ */ jsxs(_components.span, {
							className: "token tag",
							children: [/* @__PURE__ */ jsxs(_components.span, {
								className: "token tag",
								children: [/* @__PURE__ */ jsx(_components.span, {
									className: "token punctuation",
									children: "</"
								}), "button"]
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
								}), "div"]
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
		/* @__PURE__ */ jsx(_components.p, { children: "可复用组件：" }),
		"\n",
		/* @__PURE__ */ jsxs(_components.ul, { children: [
			"\n",
			/* @__PURE__ */ jsxs(_components.li, { children: [
				/* @__PURE__ */ jsx(_components.code, { children: "props" }),
				" 和 ",
				/* @__PURE__ */ jsx(_components.code, { children: "emits" }),
				" 合并声明"
			] }),
			"\n"
		] }),
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
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "{"
						}),
						" component",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ","
						}),
						" t",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ","
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token keyword",
							children: "type"
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token class-name",
							children: /* @__PURE__ */ jsx(_components.span, {
								className: "token maybe-class-name",
								children: "VNode"
							})
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ","
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token keyword",
							children: "type"
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token class-name",
							children: /* @__PURE__ */ jsx(_components.span, {
								className: "token maybe-class-name",
								children: "VNodeChild"
							})
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "}"
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
							className: "token keyword",
							children: "const"
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token maybe-class-name",
							children: "TextInput"
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token operator",
							children: "="
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
						"\n  ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n    ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token comment",
							children: "// VUE 的注册机制（Proxy 定义基准，以及从 attrs 中提取 props 的 emits 的依据）"
						}),
						"\n    ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token comment",
							children: "// 必须声明，哪怕只是属性名称"
						}),
						"\n    ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token comment",
							children: "//"
						}),
						"\n    ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token comment",
							children: "// 又由于 TypeString 的老问题  https://www.typescriptneedstypes.com/#the-problem"
						}),
						"\n    ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token comment",
							children: "// 类型定义无法转为 Runtime 对象"
						}),
						"\n    value",
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
							children: "string"
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
							children: "."
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token keyword module",
							children: "default"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "("
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token string",
							children: "\"1\""
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ")"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n    type",
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
							children: "enums"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "("
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "["
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token string",
							children: "\"text\""
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ","
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token string",
							children: "\"number\""
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "]"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ")"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n\n    ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token comment",
							children: "// on[A-Z] 前缀视为 emits"
						}),
						"\n    onValueChange",
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
							className: "token property-access",
							children: "custom"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token operator",
							children: "<"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "("
						}),
						"v",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token builtin",
							children: "string"
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
							className: "token keyword",
							children: "void"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token operator",
							children: ">"
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
							children: "("
						}),
						"props",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ","
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "{"
						}),
						" emit ",
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
							children: "{"
						}),
						"\n    ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token comment",
							children: "// setup"
						}),
						"\n\n    ",
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
						"\n      ",
						/* @__PURE__ */ jsxs(_components.span, {
							className: "token tag",
							children: [
								/* @__PURE__ */ jsxs(_components.span, {
									className: "token tag",
									children: [/* @__PURE__ */ jsx(_components.span, {
										className: "token punctuation",
										children: "<"
									}), "input"]
								}),
								"\n        ",
								/* @__PURE__ */ jsx(_components.span, {
									className: "token attr-name",
									children: "value"
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
										"props",
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
								"\n        ",
								/* @__PURE__ */ jsx(_components.span, {
									className: "token attr-name",
									children: "onInput"
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
										"e",
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
										"\n          ",
										/* @__PURE__ */ jsx(_components.span, {
											className: "token function",
											children: "emit"
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "("
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token string",
											children: "\"value-change\""
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: ","
										}),
										" ",
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "("
										}),
										"e",
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "."
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token property-access",
											children: "target"
										}),
										" ",
										/* @__PURE__ */ jsx(_components.span, {
											className: "token keyword module",
											children: "as"
										}),
										" ",
										/* @__PURE__ */ jsx(_components.span, {
											className: "token maybe-class-name",
											children: "HTMLInputElement"
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
											className: "token property-access",
											children: "value"
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: ")"
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: ";"
										}),
										"\n        ",
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
								"\n      ",
								/* @__PURE__ */ jsx(_components.span, {
									className: "token punctuation",
									children: "/>"
								})
							]
						}),
						"\n    ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ")"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ";"
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
							className: "token keyword",
							children: "interface"
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token class-name",
							children: /* @__PURE__ */ jsx(_components.span, {
								className: "token maybe-class-name",
								children: "Option"
							})
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n  label",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token builtin",
							children: "string"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n  value",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token builtin",
							children: "string"
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
							children: "List"
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token operator",
							children: "="
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
						"\n  ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n    ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token comment",
							children: "// $ 前缀视为 slots"
						}),
						"\n    $title",
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
							className: "token property-access",
							children: "custom"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token operator",
							children: "<"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token maybe-class-name",
							children: "VNodeChild"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token operator",
							children: ">"
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
						"\n    ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token comment",
							children: "// renderProp"
						}),
						"\n    $item",
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
							className: "token property-access",
							children: "custom"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token operator",
							children: "<"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "("
						}),
						"option",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token maybe-class-name",
							children: "Option"
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
							className: "token maybe-class-name",
							children: "VNode"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token operator",
							children: ">"
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
						"\n\n    $",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token keyword module",
							children: "default"
						}),
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
							className: "token property-access",
							children: "custom"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token operator",
							children: "<"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token maybe-class-name",
							children: "VNodeChild"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token operator",
							children: ">"
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
						"\n\n    ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token comment",
							children: "// 以此避免多插槽时 children slots object 的写法, 且无类型约束，"
						}),
						"\n    ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token comment",
							children: "// {{ default: () => VNode, title: () => VNode, item: (option: Option) => VNode }}"
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
							children: "("
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "{"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "}"
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
						" slots ",
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
						"\n    ",
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
						"\n      ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token keyword",
							children: "const"
						}),
						" options ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token operator",
							children: "="
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "["
						}),
						"\n        ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n          label",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token string",
							children: "\"1\""
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n          value",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token string",
							children: "\"1\""
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n        ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "}"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n        ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n          label",
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
						"\n          value",
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
						"\n        ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "}"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n      ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "]"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n\n      ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token keyword control-flow",
							children: "return"
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
								}), "dl"]
							}), /* @__PURE__ */ jsx(_components.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token plain-text",
							children: "\n          "
						}),
						/* @__PURE__ */ jsxs(_components.span, {
							className: "token tag",
							children: [/* @__PURE__ */ jsxs(_components.span, {
								className: "token tag",
								children: [/* @__PURE__ */ jsx(_components.span, {
									className: "token punctuation",
									children: "<"
								}), "dt"]
							}), /* @__PURE__ */ jsx(_components.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token plain-text",
							children: "default"
						}),
						/* @__PURE__ */ jsxs(_components.span, {
							className: "token tag",
							children: [/* @__PURE__ */ jsxs(_components.span, {
								className: "token tag",
								children: [/* @__PURE__ */ jsx(_components.span, {
									className: "token punctuation",
									children: "</"
								}), "dt"]
							}), /* @__PURE__ */ jsx(_components.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token plain-text",
							children: "\n          "
						}),
						/* @__PURE__ */ jsxs(_components.span, {
							className: "token tag",
							children: [/* @__PURE__ */ jsxs(_components.span, {
								className: "token tag",
								children: [/* @__PURE__ */ jsx(_components.span, {
									className: "token punctuation",
									children: "<"
								}), "dd"]
							}), /* @__PURE__ */ jsx(_components.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "{"
						}),
						"slots",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "."
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token keyword module",
							children: "default"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token operator",
							children: "?."
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
							children: "}"
						}),
						/* @__PURE__ */ jsxs(_components.span, {
							className: "token tag",
							children: [/* @__PURE__ */ jsxs(_components.span, {
								className: "token tag",
								children: [/* @__PURE__ */ jsx(_components.span, {
									className: "token punctuation",
									children: "</"
								}), "dd"]
							}), /* @__PURE__ */ jsx(_components.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token plain-text",
							children: "\n          "
						}),
						/* @__PURE__ */ jsxs(_components.span, {
							className: "token tag",
							children: [/* @__PURE__ */ jsxs(_components.span, {
								className: "token tag",
								children: [/* @__PURE__ */ jsx(_components.span, {
									className: "token punctuation",
									children: "<"
								}), "dt"]
							}), /* @__PURE__ */ jsx(_components.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token plain-text",
							children: "title"
						}),
						/* @__PURE__ */ jsxs(_components.span, {
							className: "token tag",
							children: [/* @__PURE__ */ jsxs(_components.span, {
								className: "token tag",
								children: [/* @__PURE__ */ jsx(_components.span, {
									className: "token punctuation",
									children: "</"
								}), "dt"]
							}), /* @__PURE__ */ jsx(_components.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token plain-text",
							children: "\n          "
						}),
						/* @__PURE__ */ jsxs(_components.span, {
							className: "token tag",
							children: [/* @__PURE__ */ jsxs(_components.span, {
								className: "token tag",
								children: [/* @__PURE__ */ jsx(_components.span, {
									className: "token punctuation",
									children: "<"
								}), "dd"]
							}), /* @__PURE__ */ jsx(_components.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "{"
						}),
						"slots",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "."
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token property-access",
							children: "title"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token operator",
							children: "?."
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
							children: "}"
						}),
						/* @__PURE__ */ jsxs(_components.span, {
							className: "token tag",
							children: [/* @__PURE__ */ jsxs(_components.span, {
								className: "token tag",
								children: [/* @__PURE__ */ jsx(_components.span, {
									className: "token punctuation",
									children: "</"
								}), "dd"]
							}), /* @__PURE__ */ jsx(_components.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token plain-text",
							children: "\n          "
						}),
						/* @__PURE__ */ jsxs(_components.span, {
							className: "token tag",
							children: [/* @__PURE__ */ jsxs(_components.span, {
								className: "token tag",
								children: [/* @__PURE__ */ jsx(_components.span, {
									className: "token punctuation",
									children: "<"
								}), "dt"]
							}), /* @__PURE__ */ jsx(_components.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token plain-text",
							children: "item"
						}),
						/* @__PURE__ */ jsxs(_components.span, {
							className: "token tag",
							children: [/* @__PURE__ */ jsxs(_components.span, {
								className: "token tag",
								children: [/* @__PURE__ */ jsx(_components.span, {
									className: "token punctuation",
									children: "</"
								}), "dt"]
							}), /* @__PURE__ */ jsx(_components.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token plain-text",
							children: "\n          "
						}),
						/* @__PURE__ */ jsxs(_components.span, {
							className: "token tag",
							children: [/* @__PURE__ */ jsxs(_components.span, {
								className: "token tag",
								children: [/* @__PURE__ */ jsx(_components.span, {
									className: "token punctuation",
									children: "<"
								}), "dd"]
							}), /* @__PURE__ */ jsx(_components.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "{"
						}),
						"options",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "."
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token method function property-access",
							children: "map"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "("
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "("
						}),
						"option",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ")"
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token arrow operator",
							children: "=>"
						}),
						" slots",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "."
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token property-access",
							children: "item"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token operator",
							children: "?."
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "("
						}),
						"option",
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
							children: "}"
						}),
						/* @__PURE__ */ jsxs(_components.span, {
							className: "token tag",
							children: [/* @__PURE__ */ jsxs(_components.span, {
								className: "token tag",
								children: [/* @__PURE__ */ jsx(_components.span, {
									className: "token punctuation",
									children: "</"
								}), "dd"]
							}), /* @__PURE__ */ jsx(_components.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token plain-text",
							children: "\n        "
						}),
						/* @__PURE__ */ jsxs(_components.span, {
							className: "token tag",
							children: [/* @__PURE__ */ jsxs(_components.span, {
								className: "token tag",
								children: [/* @__PURE__ */ jsx(_components.span, {
									className: "token punctuation",
									children: "</"
								}), "dl"]
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
						" inputValue ",
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
							className: "token string",
							children: "\"\""
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
										children: "List"
									})]
								}),
								"\n      ",
								/* @__PURE__ */ jsx(_components.span, {
									className: "token attr-name",
									children: "$title"
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
										/* @__PURE__ */ jsxs(_components.span, {
											className: "token tag",
											children: [/* @__PURE__ */ jsxs(_components.span, {
												className: "token tag",
												children: [/* @__PURE__ */ jsx(_components.span, {
													className: "token punctuation",
													children: "<"
												}), "div"]
											}), /* @__PURE__ */ jsx(_components.span, {
												className: "token punctuation",
												children: ">"
											})]
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token plain-text",
											children: "Inputted: "
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "{"
										}),
										"inputValue",
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
										}),
										/* @__PURE__ */ jsxs(_components.span, {
											className: "token tag",
											children: [/* @__PURE__ */ jsxs(_components.span, {
												className: "token tag",
												children: [/* @__PURE__ */ jsx(_components.span, {
													className: "token punctuation",
													children: "</"
												}), "div"]
											}), /* @__PURE__ */ jsx(_components.span, {
												className: "token punctuation",
												children: ">"
											})]
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
									children: "$item"
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
										"o",
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
										/* @__PURE__ */ jsxs(_components.span, {
											className: "token tag",
											children: [/* @__PURE__ */ jsxs(_components.span, {
												className: "token tag",
												children: [/* @__PURE__ */ jsx(_components.span, {
													className: "token punctuation",
													children: "<"
												}), "div"]
											}), /* @__PURE__ */ jsx(_components.span, {
												className: "token punctuation",
												children: ">"
											})]
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "{"
										}),
										"o",
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "."
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token property-access",
											children: "label"
										}),
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
												}), "div"]
											}), /* @__PURE__ */ jsx(_components.span, {
												className: "token punctuation",
												children: ">"
											})]
										}),
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
										children: "TextInput"
									})]
								}),
								"\n        ",
								/* @__PURE__ */ jsx(_components.span, {
									className: "token attr-name",
									children: "type"
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
											children: "\"text\""
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
									children: "onValueChange"
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
										"value",
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
										"\n          inputValue",
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
										" value",
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: ";"
										}),
										"\n        ",
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
								"\n      ",
								/* @__PURE__ */ jsx(_components.span, {
									className: "token punctuation",
									children: "/>"
								})
							]
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
									children: "List"
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
function MDXContent$1(props = {}) {
	const { wrapper: MDXLayout } = props.components || {};
	return MDXLayout ? jsx(MDXLayout, {
		...props,
		children: /* @__PURE__ */ jsx(_createMdxContent$1, { ...props })
	}) : _createMdxContent$1(props);
}
var example_default = /* @__PURE__ */ defineComponent(() => {
	return () => h(MDXContent$1, { components: {
		codeblock4b227777: index_md_CodeBlock4b227777_default,
		codeblock4a44dc15: index_md_CodeBlock4a44dc15_default
	} });
});
var TextDebounceInput = /* @__PURE__ */ component$((props, { emit: emit$1 }) => {
	const value$ = /* @__PURE__ */ observableRef(props.value ?? "1");
	rx(value$, /* @__PURE__ */ debounceTime(300), /* @__PURE__ */ subscribeUntilUnmount((v1) => emit$1("value-change", v1)));
	return rx(value$, /* @__PURE__ */ render((v1) => /* @__PURE__ */ jsx("input", {
		value: v1,
		onInput: (e) => {
			value$.value = e.target.value;
		}
	})));
}, {
	displayName: "TextDebounceInput",
	props: ["value"],
	emits: ["value-change"]
});
var rx_in_vue_md_CodeBlockd4735e3a_default = /* @__PURE__ */ component(() => {
	const inputValue = /* @__PURE__ */ ref("default");
	return () => /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", {
		style: {
			display: "flex",
			gap: "1rem"
		},
		children: [/* @__PURE__ */ jsx(TextDebounceInput, {
			value: inputValue.value,
			onValueChange: (value) => {
				inputValue.value = value;
			}
		}), /* @__PURE__ */ jsxs("div", { children: ["Inputted: ", inputValue.value] })]
	}) });
});
function _createMdxContent(props) {
	const _components = {
		a: "a",
		code: "code",
		codeblockd4735e3a: "codeblockd4735e3a",
		div: "div",
		p: "p",
		pre: "pre",
		span: "span",
		...props.components
	};
	return jsxs(Fragment, { children: [
		/* @__PURE__ */ jsxs(_components.p, { children: [
			"和 ",
			/* @__PURE__ */ jsx(_components.a, {
				href: "https://rxjs.dev/",
				children: "rxjs"
			}),
			" 集成"
		] }),
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
								"\n  component",
								/* @__PURE__ */ jsx(_components.span, {
									className: "token punctuation",
									children: ","
								}),
								"\n  component$",
								/* @__PURE__ */ jsx(_components.span, {
									className: "token punctuation",
									children: ","
								}),
								"\n  observableRef",
								/* @__PURE__ */ jsx(_components.span, {
									className: "token punctuation",
									children: ","
								}),
								"\n  render",
								/* @__PURE__ */ jsx(_components.span, {
									className: "token punctuation",
									children: ","
								}),
								"\n  rx",
								/* @__PURE__ */ jsx(_components.span, {
									className: "token punctuation",
									children: ","
								}),
								"\n  subscribeUntilUnmount",
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
								" debounceTime ",
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
							children: "\"rxjs\""
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
							children: "TextDebounceInput"
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token operator",
							children: "="
						}),
						" component$",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token operator",
							children: "<"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "{"
						}),
						"\n  value",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token operator",
							children: "?"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token builtin",
							children: "string"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ";"
						}),
						"\n  onValueChange",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token operator",
							children: "?"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "("
						}),
						"v",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token operator",
							children: ":"
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token builtin",
							children: "string"
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
							className: "token keyword",
							children: "void"
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
							className: "token operator",
							children: ">"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "("
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "("
						}),
						"props",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ","
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "{"
						}),
						" emit ",
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
							children: "{"
						}),
						"\n  ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token keyword",
							children: "const"
						}),
						" value$ ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token operator",
							children: "="
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token function",
							children: "observableRef"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "("
						}),
						"props",
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
							children: "??"
						}),
						" ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token string",
							children: "\"1\""
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
							className: "token function",
							children: "rx"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "("
						}),
						"\n    value$",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n    ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token function",
							children: "debounceTime"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "("
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token number",
							children: "300"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ")"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n    ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token function",
							children: "subscribeUntilUnmount"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "("
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "("
						}),
						"v",
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
							className: "token function",
							children: "emit"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "("
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token string",
							children: "\"value-change\""
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ","
						}),
						" v",
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
							className: "token function",
							children: "rx"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "("
						}),
						"\n    value$",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: ","
						}),
						"\n    ",
						/* @__PURE__ */ jsx(_components.span, {
							className: "token function",
							children: "render"
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "("
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "("
						}),
						"v",
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
						"\n      ",
						/* @__PURE__ */ jsxs(_components.span, {
							className: "token tag",
							children: [
								/* @__PURE__ */ jsxs(_components.span, {
									className: "token tag",
									children: [/* @__PURE__ */ jsx(_components.span, {
										className: "token punctuation",
										children: "<"
									}), "input"]
								}),
								"\n        ",
								/* @__PURE__ */ jsx(_components.span, {
									className: "token attr-name",
									children: "value"
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
										"v",
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "}"
										})
									]
								}),
								"\n        ",
								/* @__PURE__ */ jsx(_components.span, {
									className: "token attr-name",
									children: "onInput"
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
										"e",
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
										"\n          value$",
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
											className: "token punctuation",
											children: "("
										}),
										"e",
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: "."
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token property-access",
											children: "target"
										}),
										" ",
										/* @__PURE__ */ jsx(_components.span, {
											className: "token keyword module",
											children: "as"
										}),
										" ",
										/* @__PURE__ */ jsx(_components.span, {
											className: "token maybe-class-name",
											children: "HTMLInputElement"
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
											className: "token property-access",
											children: "value"
										}),
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: ";"
										}),
										"\n        ",
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
								"\n      ",
								/* @__PURE__ */ jsx(_components.span, {
									className: "token punctuation",
									children: "/>"
								})
							]
						}),
						"\n    ",
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
						" inputValue ",
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
							className: "token string",
							children: "\"default\""
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
							children: [/* @__PURE__ */ jsxs(_components.span, {
								className: "token tag",
								children: [/* @__PURE__ */ jsx(_components.span, {
									className: "token punctuation",
									children: "<"
								}), "div"]
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
									}), "div"]
								}),
								" ",
								/* @__PURE__ */ jsx(_components.span, {
									className: "token attr-name",
									children: "style"
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
											className: "token string",
											children: "\"1rem\""
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
							children: "\n        "
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
										children: "TextDebounceInput"
									})]
								}),
								"\n          ",
								/* @__PURE__ */ jsx(_components.span, {
									className: "token attr-name",
									children: "value"
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
										"inputValue",
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
								"\n          ",
								/* @__PURE__ */ jsx(_components.span, {
									className: "token attr-name",
									children: "onValueChange"
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
										"value",
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
										"\n            inputValue",
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
										" value",
										/* @__PURE__ */ jsx(_components.span, {
											className: "token punctuation",
											children: ";"
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
									children: "/>"
								})
							]
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token plain-text",
							children: "\n        "
						}),
						/* @__PURE__ */ jsxs(_components.span, {
							className: "token tag",
							children: [/* @__PURE__ */ jsxs(_components.span, {
								className: "token tag",
								children: [/* @__PURE__ */ jsx(_components.span, {
									className: "token punctuation",
									children: "<"
								}), "div"]
							}), /* @__PURE__ */ jsx(_components.span, {
								className: "token punctuation",
								children: ">"
							})]
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token plain-text",
							children: "Inputted: "
						}),
						/* @__PURE__ */ jsx(_components.span, {
							className: "token punctuation",
							children: "{"
						}),
						"inputValue",
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
						}),
						/* @__PURE__ */ jsxs(_components.span, {
							className: "token tag",
							children: [/* @__PURE__ */ jsxs(_components.span, {
								className: "token tag",
								children: [/* @__PURE__ */ jsx(_components.span, {
									className: "token punctuation",
									children: "</"
								}), "div"]
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
							children: [/* @__PURE__ */ jsxs(_components.span, {
								className: "token tag",
								children: [/* @__PURE__ */ jsx(_components.span, {
									className: "token punctuation",
									children: "</"
								}), "div"]
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
								}), "div"]
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
var rx_in_vue_default = /* @__PURE__ */ defineComponent(() => {
	return () => h(MDXContent, { components: { codeblockd4735e3a: rx_in_vue_md_CodeBlockd4735e3a_default } });
});
export { JSONPointer as $, has$1 as $t, RouterLink$1 as A, isSymbol as At, annotate as B, omit as Bt, fromEvent as C, isArray$4 as Ct, BehaviorSubject as D, isOn as Dt, EMPTY as E, isObject$1 as Et, ext as F, camelCase$1 as Ft, integer as G, isNumber as Gt, array as H, isPlainObject as Ht, Fragment$1 as I, isEmpty as It, object as J, partition as Jt, minLength as K, some as Kt, component as L, isUndefined as Lt, createRouter as M, upperFirst$1 as Mt, createWebHistory as N, padStart as Nt, Subject as O, isSpecialBooleanAttr as Ot, useRouter as P, kebabCase as Pt, union as Q, last$2 as Qt, isComponent as R, isFunction as Rt, timer as S, includeBooleanAttr as St, map as T, isModelListener as Tt, boolean as U, keys as Ut, any as V, mapValues$1 as Vt, custom as W, set$1 as Wt, record as X, map$1 as Xt, optional as Y, groupBy$1 as Yt, string as Z, isString as Zt, tap as _, unref as _t, component$ as a, Teleport as at, delay as b, extend as bt, jsx as c, createRenderer as ct, subscribeOnMountedUntilUnmount as d, onBeforeMount as dt, isObject as en, Schema as et, subscribeUntilUnmount as f, onBeforeUnmount as ft, rx as g, shallowRef as gt, ImmerBehaviorSubject as h, ref as ht, tapEffect as i, Fragment as it, RouterView$1 as j, toNumber as jt, Observable as k, isString$1 as kt, jsxs as l, defineComponent as lt, ref$1 as m, watch as mt, example_default as n, BaseTransition as nt, toObservable as o, callWithAsyncErrorHandling as ot, SymbolForwardRef as p, onMounted as pt, nativeEnum as q, isArray as qt, createProvider as r, BaseTransitionPropsValidators as rt, render as s, cloneVNode as st, rx_in_vue_default as t, get as tn, EmptyContext as tt, observableRef as u, h as ut, switchMap as v, camelize as vt, combineLatest as w, isFunction$3 as wt, merge as x, hyphenate as xt, distinctUntilChanged as y, capitalize as yt, isPropTypes as z, pickBy as zt };
